import FormSearchClient from "@/modules/Printer/components/FormSearchClient";
import PrinterHelper from "@/modules/Printer/views/Printer.helper";

export const Printer = () => {
  const { formik } = PrinterHelper();
  return (
    <div>
      <FormSearchClient form={formik} />
    </div>
  );
};
