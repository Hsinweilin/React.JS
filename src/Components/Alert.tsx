import { ReactNode } from "react";

interface Props {
  children?: string | ReactNode;
  onClose: () => void; //just leave this void most of the time
}

const Alert = ({ children = "Alert!!!", onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
