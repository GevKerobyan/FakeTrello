import { useEffect } from "react";

export default function ModalClose(ref, closeCallback = () => null) {
    const handleClose = (e) => {
        if (!ref.current.contains(e.target)) {
            closeCallback();
        }
    };
    useEffect(() => {
        if (ref.current) {
            console.log(ref.curren,"ref Current")
            window.addEventListener("click", handleClose);
        }
        return () => {
            window.removeEventListener("click", handleClose);
        };
    }, [ref]);
}