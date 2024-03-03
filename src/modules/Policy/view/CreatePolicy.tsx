import ClientForm from "@/modules/Policy/components/Steps/ClientForm";
import PlanPolicy from "@/modules/Policy/components/Steps/PlanPolicy";
import CreatePolicyHelper from "@/modules/Policy/view/CreatePolicy.helper";
import NavigationButtons from "@/modules/Policy/components/NavigationButtons";
import TabWizard from "@/modules/Policy/components/TabWizard/TabWizard";
import { useMemo } from "react";
import "./CreatePolicy.css";
import VerifyForm from "@/modules/Policy/components/Steps/VerifyForm";
import { FormikProvider } from "formik";
import LoadingSpinner from "@/shared/components/LoadingSpinner/LoadingSpinner";

const CreatePolicy = () => {
  const { goBack, goNext, onClickTab, stepNumber, currentIndex, formik, loadingRef, alertRef } = CreatePolicyHelper();

  const pages = useMemo(() => [PlanPolicy, ClientForm, VerifyForm], []);

  return (
    <div>
      <FormikProvider value={formik}>
        <TabWizard
          stepNumber={stepNumber}
          currentPage={currentIndex}
          onClick={onClickTab}
          tabs={["Datos del vehículo", "Datos Personales", "Comprobar"]}
        />

        {pages.map((Component, index) => (
          <section key={index} className={`${index != currentIndex && "d-none"}`}>
            <Component form={formik} alertRef={alertRef} />
          </section>
        ))}

        <NavigationButtons
          pageLength={pages.length}
          onClickPrevious={goBack}
          currentPage={currentIndex}
          onClickNext={goNext}
        />
      </FormikProvider>
      <LoadingSpinner childRef={loadingRef} />
    </div>
  );
};

export default CreatePolicy;
