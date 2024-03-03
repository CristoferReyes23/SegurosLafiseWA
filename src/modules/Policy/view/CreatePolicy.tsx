import ClientForm from "@/modules/Policy/components/Steps/ClientForm";
import PlanPolicy from "@/modules/Policy/components/Steps/PlanPolicy";
import VehicleForm from "@/modules/Policy/components/Steps/VehicleForm";
import CreatePolicyHelper from "@/modules/Policy/view/CreatePolicy.helper";
import NavigationButtons from "@/modules/Policy/components/NavigationButtons";
import TabWizard from "@/modules/Policy/components/TabWizard/TabWizard";
import { Formik } from "formik";
import { useMemo } from "react";
import "./CreatePolicy.css";
import VerifyForm from "@/modules/Policy/components/Steps/VerifyForm";
import { customValidation } from "@/modules/Policy/utils/customValidationForm";

const CreatePolicy = () => {
  const { goBack, goNext, onClickTab, stepNumber, currentIndex, handleSubmit, initialValues, validationSchema } =
    CreatePolicyHelper();

  const pages = useMemo(() => [PlanPolicy, VehicleForm, ClientForm, VerifyForm], []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={customValidation}
        validationSchema={validationSchema}
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
                tabs={["Plan de póliza", "Datos del vehículo", "Datos Personales", "Comprobar"]}
              />

              {pages.map((Component, index) => (
                <section key={index} className={`${index != currentIndex && "d-none"}`}>
                  <Component form={form} />
                </section>
              ))}

              <NavigationButtons
                pageLength={pages.length}
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
