import TablePolicy from "@/modules/Printer/components/TablePolicy";
import FormCard from "@/shared/components/FormCard";

interface Props {
  isSubmitting: boolean;
  response: any;
}

const PoliciesCreated = ({}: Props) => {
  return (
    <FormCard title="Pólizas">
      <TablePolicy />
    </FormCard>
  );
};

export default PoliciesCreated;
