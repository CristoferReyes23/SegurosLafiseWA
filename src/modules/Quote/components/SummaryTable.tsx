interface Props {
  response: any;
  dataSource: Array<{ title: string; key: string }>;
}

const SummaryTable = ({ dataSource, response }: Props) => {
  return (
    <table className="table">
      <tbody>
        {dataSource.map((i, index) => (
          <tr key={index}>
            <th scope="row">{i.title}</th>
            <td>{response[i.key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;
