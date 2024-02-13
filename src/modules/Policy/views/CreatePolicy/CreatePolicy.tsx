import ClientForm from "@/modules/Policy/components/CreatePolicySteps/ClientForm";
import VehicleForm from "@/modules/Policy/components/CreatePolicySteps/VehicleForm";
import CreatePolicyHelper from "@/modules/Policy/views/CreatePolicy/CreatePolicy.helper";
import NavigationButtons from "@/shared/components/Forms/NavigationButtons/NavigationButtons";
import TabWizard from "@/shared/components/Forms/TabWizard/TabWizard";
import { getStepSchema } from "@/shared/utils/multiStepFormUtils";
import { Formik } from "formik";
import { useMemo } from "react";

const CreatePolicy = () => {
  const {
    steps,
    goBack,
    goNext,
    onClickTab,
    stepNumber,
    currentIndex,
    handleSubmit,
    initialValues,
  } = CreatePolicyHelper();

  const pages = useMemo(() => [VehicleForm, ClientForm], []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={getStepSchema(currentIndex, steps)}
        validateOnMount
        enableReinitialize={true}
      >
        {(form) => {
          return (
            <>
              <TabWizard
                stepNumber={stepNumber}
                currentPage={currentIndex}
                onClick={onClickTab}
                tabs={["Datos del vehículo", "Datos Personales"]}
              />

              {pages.map((Component, index) => (
                <section
                  key={index}
                  className={`${index != currentIndex && "d-none"}`}
                >
                  <Component form={form} />
                </section>
              ))}

              <NavigationButtons
                pageLength={3}
                onClickPrevious={goBack}
                currentPage={currentIndex}
                onClickNext={goNext}
              />
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreatePolicy;
