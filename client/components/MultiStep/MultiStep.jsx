import { View, Text } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep";

import BasicInfo from "../UserInfo/BasicInfo";
// import Step2 from "./steps/step2";
// import Step3 from "./steps/step3";
// import Step4 from "./steps/step4";

const allSteps = [
  { name: "step 1", component: BasicInfo },
  { name: "step 2", component: BasicInfo },
  { name: "step 3", component: BasicInfo },
  { name: "step 4", component: BasicInfo },
];

export default function MultiStep() {
  onNext = () => {
    console.log("Next");
  };

  onBack = () => {
    console.log("Back");
  };

  finish = (finalState) => {
    console.log(finalState);
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedMultistep
        steps={allSteps}
        onFinish={this.finish}
        onBack={this.onBack}
        onNext={this.onNext}
        comeInOnNext="bounceInUp"
        OutOnNext="bounceOutDown"
        comeInOnBack="bounceInDown"
        OutOnBack="bounceOutUp"
      />
    </View>
  );
}
