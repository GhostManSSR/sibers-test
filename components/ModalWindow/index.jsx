
const ModalWindow = ({ ...props }) => {
    if (!props.isOpen) return null;

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1000,
                }}
                onClick={props.onClose}
            />
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#fff",
                    padding: "20px",
                    zIndex: 1001,
                    borderRadius: "8px",
                    maxWidth: "90%",
                    maxHeight: "90%",
                    overflowY: "auto",
                }}
            >
                {props.children}
                <button onClick={props.onClose} style={{ marginTop: "10px" }}>
                    Закрыть
                </button>
            </div>
        </>
    );
};

export default ModalWindow;
