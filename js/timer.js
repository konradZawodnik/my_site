const startTime = () => {
  let today = new Date();
  today.toISOString();
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
      nameOfDay = "Czwartek";
      break;
    case 5:
      nameOfDay = "Piątek";
      break;
    case 6:
      nameOfDay = "Sobota";
      break;
  }
  let nameOfMonth;
  switch (month) {
    case 1:
      nameOfMonth = "Stycznia";
      break;
    case 2:
      nameOfMonth = "Lutego";
      break;
    case 3:
      nameOfMonth = "Marca";
      break;
    case 4:
      nameOfMonth = "Kwietnia";
      break;
    case 5:
      nameOfMonth = "Maja";
      break;
    case 6:
      nameOfMonth = "Czerwca";
      break;
    case 7:
      nameOfMonth = "Lipca";
      break;
    case 8:
      nameOfMonth = "Sierpnia";
      break;
    case 9:
      nameOfMonth = "Września";
      break;
    case 10:
      nameOfMonth = "Października";
      break;
    case 11:
      nameOfMonth = "Listopada";
      break;
    case 12:
      nameOfMonth = "Grudnia";
      break;
  }
  document.getElementById(
    "clock"
  ).innerHTML = `Dzisiaj jest ${nameOfDay} ${day} ${nameOfMonth} ${year} roku. Godzina: ${hour}:${minute}:${second}`;
  setTimeout(startTime, 500);
};
const checkTime = (i) => (i < 10 ? `0${i}` : i);
