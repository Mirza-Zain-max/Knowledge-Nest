import {Bounce, toast} from 'react-toastify'
window.getRandomId = () => Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

window.notify = (text, type) => {
    const option = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    }
    switch (type) {
        case "success":toast.success(text,option); break;
        case "info": toast.info(text,option); break;
        case "error": toast.error(text,option); break;
        default:
            toast(text,option); break;
    }
}