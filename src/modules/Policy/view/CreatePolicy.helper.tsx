import { stepsCreatePolicy } from "@/modules/Policy/utils/policyForm.schema";
import { TypeStep, generateInitialValues } from "@/modules/Policy/utils/multiStepFormUtils";
import { FormikValues } from "formik";
import { useEffect, useState } from "react";
import { useHeaderLayout } from "@/views/ProtectedLayout/ProtectedLayout";

const CreatePolicyHelper = () => {
  const [steps] = useState<TypeStep[]>(stepsCreatePolicy);
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const { setTitleHeader } = useHeaderLayout();

  useEffect(() => {
    setTitleHeader(steps[currentIndex].titleHeaderStep ?? "");
  }, [currentIndex]);

  const goNext = () => {
    setCurrentIndex((pre) => pre + 1);

    setStepNumber((pre) => {
      return currentIndex + 1 > pre ? currentIndex + 1 : pre;
    });
  };

  const goBack = () => setCurrentIndex((pre) => pre - 1);
  const onClickTab = (index: number) => setCurrentIndex(index);

  const handleSubmit = (values: FormikValues) => {
    console.log("submit from formik", values);
  };

  return {
    steps,
    goBack,
    goNext,
    onClickTab,
    stepNumber,
    currentIndex,
    handleSubmit,
    initialValues,
  };
};

export default CreatePolicyHelper;
