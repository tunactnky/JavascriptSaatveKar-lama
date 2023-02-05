let userName = prompt("Adınız nedir?")
info = document.querySelector("#myName")
info.innerHTML = `${userName}`

function showTime()
{
    var clockDiv = document.querySelector("#myClock");
      return setInterval(() => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clockDiv.textContent = tick;
      }, 1000);
}
