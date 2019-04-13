const startTime = () => {
  let today = new Date();
  today.toISOString()
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  minute = checkTime(minute);
  second = checkTime(second);
  let nameOfDay;
  switch (today.getDay()) {
    case 0:
      nameOfDay = "Niedziela";
      break;
    case 1:
      nameOfDay = "Poniedziałek";
      break;
    case 2:
      nameOfDay = "Wtorek";
      break;
    case 3:
      nameOfDay = "Środa";
      break;
    case 4:
      nameOfDay = "Czwartek"
      break;
    case 5:
      nameOfDay = "Piątek";
      break;
    case 6:
      nameOfDay = "Sobota";
      break;
  }
  document.getElementById('clock').innerHTML =
    `Dzisiaj jest ${nameOfDay} ${day}.${month}.${year}, godzina ${hour}: ${minute}:${second}.`;
  let t = setTimeout(startTime, 500);
}
const checkTime = (i) => {
  if (i < 10) { i = "0" + i };
  return i;
}