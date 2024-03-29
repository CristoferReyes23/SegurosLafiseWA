import * as Yup from "yup";

export interface TabStep {
  title: string;
}

export type TypeStep = {
  validationSchema: Yup.Schema<any>;
  initialValues: any;
  titleHeaderStep?: string;
};

export const getStepSchema = (currentIndex: number, steps: TypeStep[]) => {
  return steps[currentIndex].validationSchema;
};

export const generateInitialValues = (filteredSteps: TypeStep[]) => {
  const initialValues = filteredSteps.reduce((values, step) => {
    return { ...values, ...step.initialValues };
  }, {});

  return initialValues;
};
