import FormSearchClient from "@/modules/Printer/components/FormSearchClient";
import PoliciesCreated from "@/modules/Printer/components/PoliciesCreated";
import PrinterHelper from "@/modules/Printer/views/Printer.helper";

export const Printer = () => {
  const { formik } = PrinterHelper();
  return (
    <div>
      <div className="vstack gap-3">
        <FormSearchClient form={formik} />
        <PoliciesCreated isSubmitting={formik.isSubmitting} response={undefined} />
      </div>
    </div>
  );
};
