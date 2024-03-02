import "@/modules/Policy/components/PanelTemplate/PanelTemplate.css";

interface Props {
  heading: string;
  children: any;
}

const PanelTemplate = ({ children, heading }: Props) => {
  return (
    <div className="panel mb-3">
      <div className="panel-heading">{heading}</div>
      <div className="panel-body">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default PanelTemplate;
