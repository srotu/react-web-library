import { FiX } from "react-icons/fi";

const BOLD_ICON_COLOR = {
    black: "#C7C7C7",
    blue: "#7EA6F2",
    purple: "#F462E6",
    green: "#C1FFCF",
};

const LIGHT_ICON_COLOR = {
    black: "#6B7280",
    blue: "#1C51B9",
    purple: "#C7369E",
    green: "#41A557",
};

export default function Tooltip({
    title = "Archive notes",
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
    color = "blue", // black, blue, purple, green
    iconColor,
    onClose = () => { },
    variant = "bold", // "bold" or "light"
}) {
    iconColor = iconColor || (variant === "bold" ? BOLD_ICON_COLOR[color] : LIGHT_ICON_COLOR[color]);
    return (
        <div className={`tooltip tooltip--${color} tooltip--${variant}`}>
            <div className="tooltip-content">
                <div className="tooltip-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1"
                            stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="tooltip-text">
                    <p className="tooltip-title">{title}</p>
                    <p className="tooltip-body">{text}</p>
                </div>
                <span tabIndex={0} className="tooltip-close" aria-label="Close" onClick={onClose} onKeyDown={(e) => {
                    if (e.key === 'Enter') onClose();
                }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                            fill="#fff" />
                    </svg>
                </span>
            </div>
            <div className="tooltip-arrow" />
        </div>
    );
}
