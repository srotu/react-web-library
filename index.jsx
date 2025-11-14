import { useState } from "react";
import ReactDOM from "react-dom/client";
import BadgeDemo from "./demo/BadgeDemo";
import Menu from "./components/Menu";
import BannerDemo from "./demo/BannerDemo";
import CardDemo from "./demo/CardDemo";
import TestimonialDemo from "./demo/TestimonialDemo";
import { FiMenu } from "react-icons/fi";
import TooltipDemo from "./demo/TooltipDemo";
import ToastDemo from "./demo/ToastDemo";
import ToastProvider, { useToast } from "./components/Toast/ToastProvider";

function App() {
  const [selectedDemo, setSelectedDemo] = useState("Badges");
  const toast = useToast();

  function changeSelection(demo) {
    setSelectedDemo(demo);
    toast.info({ text: `Switched to ${demo} demo` });
  }

  return (
    <>
      <Menu>
        <Menu.Button><FiMenu />&nbsp;{selectedDemo}</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item onSelect={() => changeSelection("Badges")}>Badges</Menu.Item>
          <Menu.Item onSelect={() => changeSelection("Banners")}>Banners</Menu.Item>
          <Menu.Item onSelect={() => changeSelection("Cards")}>Cards</Menu.Item>
          <Menu.Item onSelect={() => changeSelection("Testimonials")}>Testimonials</Menu.Item>
          <Menu.Item onSelect={() => changeSelection("Tooltips")}>Tooltips</Menu.Item>
          <Menu.Item onSelect={() => changeSelection("Toasts")}>Toasts</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      {selectedDemo === "Badges" && <BadgeDemo />}
      {selectedDemo === "Banners" && <BannerDemo />}
      {selectedDemo === "Cards" && <CardDemo />}
      {selectedDemo === "Testimonials" && <TestimonialDemo />}
      {selectedDemo === "Tooltips" && <TooltipDemo />}
      {selectedDemo === "Toasts" && <ToastDemo />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ToastProvider><App /></ToastProvider>);
