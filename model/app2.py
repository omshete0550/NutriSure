from flask import Flask, request, jsonify
from transformers import pipeline, set_seed, AutoTokenizer
from PIL import ImageFont
import os
import re
import dummy
from utils.api import generate_cook_image
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)

class TextGeneration:
    def __init__(self):
        self.debug = False
        self.dummy_outputs = dummy.recipes
        self.tokenizer = None
        self.generator = None
        self.api_ids = []
        self.api_keys = []
        self.api_test = 2
        self.task = "text2text-generation"
        self.model_name_or_path = "flax-community/t5-recipe-generation"
        self.color_frame = "#ffffff"
        self.main_frame = "asset/frame/recipe-bg.png"
        self.no_food = "asset/frame/no_food.png"
        self.logo_frame = "asset/frame/logo.png"
        self.chef_frames = {
            "scheherazade": "asset/frame/food-image-logo-bg-s.png",
            "giovanni": "asset/frame/food-image-logo-bg-g.png",
        }
        self.fonts = {
            "title": ImageFont.truetype("asset/fonts/Poppins-Bold.ttf", 70),
            "sub_title": ImageFont.truetype("asset/fonts/Poppins-Medium.ttf", 30),
            "body_bold": ImageFont.truetype("asset/fonts/Montserrat-Bold.ttf", 22),
            "body": ImageFont.truetype("asset/fonts/Montserrat-Regular.ttf", 18),
        }
        set_seed(42)

    def _skip_special_tokens_and_prettify(self, text):
        recipe_maps = {"<sep>": "--", "<section>": "\n"}
        recipe_map_pattern = "|".join(map(re.escape, recipe_maps.keys()))

        text = re.sub(
            recipe_map_pattern,
            lambda m: recipe_maps[m.group()],
            re.sub("|".join(self.tokenizer.all_special_tokens), "", text)
        )

        data = {"title": "", "ingredients": [], "directions": []}
        for section in text.split("\n"):
            section = section.strip()
            if section.startswith("title:"):
                data["title"] = " ".join(
                    [w.strip().capitalize() for w in section.replace("title:", "").strip().split() if w.strip()]
                )
            elif section.startswith("ingredients:"):
                data["ingredients"] = [s.strip() for s in section.replace("ingredients:", "").split('--')]
            elif section.startswith("directions:"):
                data["directions"] = [s.strip() for s in section.replace("directions:", "").split('--')]
            else:
                pass

        return data

    def load_pipeline(self):
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_name_or_path)
        # Commenting out pipeline instantiation for now (needs additional import)
        self.generator = pipeline(self.task, model=self.model_name_or_path, tokenizer=self.model_name_or_path)

    def load_api(self):
        app_ids = os.getenv("EDAMAM_APP_ID")
        app_ids = app_ids.split(",") if app_ids else []
        app_keys = os.getenv("EDAMAM_APP_KEY")
        app_keys = app_keys.split(",") if app_keys else []

        if len(app_ids) != len(app_keys):
            self.api_ids = []
            self.api_keys = []

        self.api_ids = app_ids
        self.api_keys = app_keys

    def load(self):
        self.load_api()
        if not self.debug:
            self.load_pipeline()

    # def prepare_frame(self, recipe, chef_name):
        # Commenting out this method as it references functions not defined in the snippet
        pass

    def generate(self, items, generation_kwargs):
        recipe = self.dummy_outputs[0]
    
        if not self.debug:
            generation_kwargs["num_return_sequences"] = 1
            generation_kwargs["return_tensors"] = True
            generation_kwargs["return_text"] = False
    
            generated_ids = self.generator(
                items,
                **generation_kwargs,
            )[0]["generated_token_ids"]
            recipe = self.tokenizer.decode(generated_ids, skip_special_tokens=False)
            recipe = self._skip_special_tokens_and_prettify(recipe)
    
        if self.api_ids and self.api_keys and len(self.api_ids) == len(self.api_keys):
            test = 0
            for i in range(len(self.api_keys)):
                if test > self.api_test:
                    recipe["image"] = None
                    break
               #  Commenting out this part as it references functions not defined in the snippet
                image = generate_cook_image(recipe["title"].lower(), self.api_ids[i], self.api_keys[i])
                test += 1
                if image:
                    recipe["image"] = image
                    break
        else:
            recipe["image"] = None
    
        return recipe


def load_text_generator():
    generator = TextGeneration()
    generator.load()
    return generator

chef_top = {
    "max_length": 512,
    "min_length": 64,
    "no_repeat_ngram_size": 3,
    "do_sample": True,
    "top_k": 60,
    "top_p": 0.95,
    "num_return_sequences": 1
}

chef_beam = {
    "max_length": 512,
    "min_length": 64,
    "no_repeat_ngram_size": 3,
    "early_stopping": True,
    "num_beams": 5,
    "length_penalty": 1.5,
    "num_return_sequences": 1
}

@app.route('/generate_recipe', methods=['POST'])
def generate_recipe():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Extract ingredients from the JSON data
        ingredients = data.get('ingredients', '')

        # Load the text generator
        generator = load_text_generator()

        # Generate the recipe
      #   generated_recipe = generator.generate(ingredients, chef_beam)  # You may need to adjust the generation parameters
        generated_recipe = generator.generate(ingredients, chef_top)

        # Prepare the response
        response = {
            "title": generated_recipe["title"],
            "ingredients": generated_recipe["ingredients"],
            "directions": generated_recipe["directions"],
            "image": generated_recipe["image"]
        }
        print(response)

        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
