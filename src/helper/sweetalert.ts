import swal from "sweetalert";

export const notify = (msg:string, color:string) =>
  swal({
    title: "Erhan Todo App",
    text: msg,
    icon: color,
    timer: 2000,
  })