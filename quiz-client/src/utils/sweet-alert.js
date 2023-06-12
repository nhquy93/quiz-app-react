import Swal from "sweetalert2";

export async function toast(type, msg) {
    return Swal.fire({
        position: "top-end",
        icon: type,
        showConfirmButton: false,
        timer: 50000,
        toast: true,
        title: msg,
        customClass: "message-alert"
    });
}

export async function toastConfirm(msg, icon) {
    return Swal.fire({
        icon: icon,
        text: msg
    });
}