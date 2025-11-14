import { IconSuccess, IconWarning, IconInfo, IconClose } from "../assets/Icons";

export default function Toast({
  type = "info", // info, warning, error, success
  title,
  text,
}) {
  const icons = {
    info: <IconInfo />,
    warning: <IconWarning />,
    error: <IconClose />,
    success: <IconSuccess />,
  };

  return (
    <div className={`toast toast-${type}`} role="alert">
      <div className="toast-icon">{icons[type]}</div>
      <div className="toast-text">
        {title && <p className="toast-title">{title}</p>}
        {text && <p className="toast-body">{text}</p>}
      </div>
    </div>
  );
}