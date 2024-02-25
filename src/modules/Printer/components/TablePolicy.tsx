const TablePolicy = () => {
  return (
    <table className="table table-response">
      <thead>
        <tr>
          {TABLE_POLICY.map((i) => (
            <th className="" scope="col" key={i.key}>
              {i.header}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default TablePolicy;

const TABLE_POLICY = [
  { header: "N° Póliza", key: "" },
  { header: "N° Placa", key: "" },
  { header: "Marca", key: "" },
  { header: "Modelo", key: "" },
  { header: "Año", key: "" },
  { header: "Fecha creación", key: "" },
];
