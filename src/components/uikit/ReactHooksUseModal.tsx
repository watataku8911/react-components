import { useModal } from "react-hooks-use-modal";
import Button from "./Button";

type Props = {
  title: string;
  detail: string;
};
const ReactHooksUseModal = (props: Props) => {
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });

  const modalStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    padding: "60px 100px",
    borderRadius: "10px",
  };
  return (
    <div>
      <div>Modal is Open? {isOpen ? "Yes" : "No"}</div>
      <Button label="open" disabled={false} onClick={open} />
      <Modal>
        <div style={modalStyle}>
          <h1>{props.title}</h1>
          <p>{props.detail}</p>
          <Button label="close" disabled={false} onClick={close} />
        </div>
      </Modal>
    </div>
  );
};

export default ReactHooksUseModal;
