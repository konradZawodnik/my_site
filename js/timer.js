function startTime() {
    var today = new Date();
    today.toISOString()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;;
    let day = today.getDate();;
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('clock').innerHTML =
      `Dzisiaj jest ${day}.${month}.${year}, godzina ${hour}: ${minute}:${second}.`;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
  }