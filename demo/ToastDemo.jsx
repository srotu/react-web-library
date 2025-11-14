import Toast from "../components/Toast/Toast";

export default function ToastDemo() {
  return (
    <div className="toast-demo">
      <div>
        <div className="toast-demo__label">popup-success</div>
        <Toast
          type="success"
          title="Success"
          text="Your work has been saved"
        />
      </div>

      <div>
        <div className="toast-demo__label">popup-warning</div>
        <Toast
          type="warning"
          title="Warning"
          text="A network error was detected"
        />
      </div>

      <div>
        <div className="toast-demo__label">popup-information</div>
        <Toast
          type="info"
          title="Information"
          text="Please read updated information"
        />
      </div>

      <div>
        <div className="toast-demo__label">popup-error</div>
        <Toast
          type="error"
          title="Error"
          text="Please re-save your work again"
        />
      </div>

      <div>
        <div className="toast-demo__label">No title</div>
        <Toast
          type="info"
          text="Please read updated information"
        />
      </div>

      <div>
        <div className="toast-demo__label">No text</div>
        <Toast
          type="info"
          title="Information"
        />
      </div>

    </div>
  );
}
