import { DateTime } from "./luxon";

setInterval(() => {
  const currentDate = new Date().toLocaleString();
  document.getElementById('set-date').innerHTML = currentDate;
}, 1000);

export default navigation