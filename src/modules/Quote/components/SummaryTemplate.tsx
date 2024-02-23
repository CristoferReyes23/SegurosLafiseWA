interface Props {
  title: string;
  value: number;
}

const SummaryTemplate = ({ title, value }: Props) => {
  return (
    <div className="col-sm-3 d-flex">
      <p>{title}:</p>
      <p className="flex-grow-1 ms-2 border-bottom border-2 border-dark">{value}</p>
    </div>
  );
};

export default SummaryTemplate;
