import { useImperativeHandle, useState } from "react";
import "./LoadingSpinner.css";

interface Props {
  childRef: any;
}

const LoadingSpinner = ({ childRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = (show: boolean) => {
    setIsVisible(show);
  };

  // Assign the function to the ref passed from the parent
  useImperativeHandle(childRef, () => ({
    show,
  }));

  return (
    <div id="ajax-Loading" className="wrap-loading" style={{ display: isVisible ? "block" : "none" }}>
      <div className="loading loading-4"></div>
    </div>
  );
};

export default LoadingSpinner;
