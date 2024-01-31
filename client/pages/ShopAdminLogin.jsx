import { View } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep";
import Step1 from "../components/Shop/Step1";
import Step2 from "../components/Shop/Step2";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
];

export default function ShopAdminLogin({ navigation }) {
  const onNext = () => {
    console.log("Next");
  };

  const onBack = () => {
    console.log("Back");
  };

  const finish = (finalState) => {
    console.log(finalState);
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedMultistep
        steps={allSteps}
        onFinish={finish}
        onBack={onBack}
        onNext={onNext}
        comeInOnNext="bounceInUp"
        OutOnNext="bounceOutDown"
        comeInOnBack="bounceInDown"
        OutOnBack="bounceOutUp"
        navigation={navigation}
      />
    </View>
  );
}
