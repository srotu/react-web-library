import checkPng from "../assets/check_circle.png";
import exclamationPng from "../assets/exclamation_triangle.png";
import infoPng from "../assets/info_circle.png";
import xPng from "../assets/x_circle.png";
import classNames from "classnames";

const ICONS = {
    success: <img src={checkPng} alt="Success" width={20} height={20} />,
    warning: <img src={exclamationPng} alt="Warning" width={20} height={20} />,
    error: <img src={xPng} alt="Error" width={20} height={20} />,
    neutral: <img src={infoPng} alt="Info" width={16} height={16} />
};

export default function Banner({
    variant = "neutral",
    title = null,
    children = null,
    single = !children,
    icon = null,
}) {
    const v = ["success", "warning", "error", "neutral"].includes(variant) ? variant : "neutral";
    const role = v === "error" ? "alert" : "status";
    const usedIcon = icon || ICONS[v];

    const classes = classNames("banner", `banner-${v}`, 
        single ? "banner-single" : "banner-multi");

    return (
        <div className={classes} role={role}>
            <span className="banner-icon" aria-hidden>{usedIcon}</span>
            <div className="banner-body">
                {title ? <div className="banner-title">{title}</div> : null}
                {children ? <div className="banner-text">{children}</div> : null}
            </div>
        </div>
    );
}
