import { SelectDataTemplate } from "@/shared/utils/formTypes";

interface Props extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  firstOptionEmpty?: string;
  data: SelectDataTemplate[];
  errorMessage: string;
  isInvalid: boolean;
}

const FormSelectTemplate = ({ data, errorMessage, firstOptionEmpty, isInvalid, ...defaultProps }: Props) => {
  return (
    <>
      <select className={`form-select ${isInvalid && "is-invalid"}`} {...defaultProps}>
        {firstOptionEmpty && <option value={""}>{firstOptionEmpty}</option>}
        {data?.map((i) => (
          <option value={i.id} key={i.id}>
            {i.text}
          </option>
        ))}
      </select>
      <div className="invalid-tooltip">{errorMessage}</div>
    </>
  );
};

export default FormSelectTemplate;
