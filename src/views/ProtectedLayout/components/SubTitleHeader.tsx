import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  titleHeader: string;
  setTitleHeader: (...args: any) => void;
}
const SubTitleHeader = ({ titleHeader, setTitleHeader }: Props) => {
  const { pathname } = useLocation();
  const [isVisibleHomeLink, setIsVisibleHomeLink] = useState(false);

  useEffect(() => {
    setIsVisibleHomeLink(pathname !== "/dashboard");
    setTitleHeader(getTitleByPathName(pathname));
  }, [pathname]);

  return (
    <div className="d-flex align-items-center">
      {isVisibleHomeLink && (
        <>
          <Link to={"/dashboard"}>
            <i className="fa-solid fa-house text-blue"></i>
          </Link>
          <div className="vr bg-blue text-blue mx-2 h-75 align-self-center"></div>
        </>
      )}
      <p className="m-0">
        <small className="text-blue">{titleHeader.toUpperCase()}</small>
      </p>
    </div>
  );
};

export default SubTitleHeader;

function getTitleByPathName(pathName: string) {
  switch (pathName) {
    case "/policy":
      return "";
    case "/quote/create":
      return "Complete el formulario";

    default:
      return "SELECCIONE LA OPERACION QUE DESEA REALIZAR";
  }
}
