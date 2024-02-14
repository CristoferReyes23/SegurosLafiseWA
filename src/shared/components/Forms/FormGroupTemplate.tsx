import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";

interface Props {
  label: string;
  name: string;
  children: any;
}

const FormGroupTemplate = ({ label, name, children }: Props) => {
  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel>{label}</FormLabel>
      {children}
    </FormGroup>
  );
};

export default FormGroupTemplate;
