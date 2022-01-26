(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      mes = day * 30;
  
    let birthday = "jun 28, 2022 12:30:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        let now = new Date().getTime(),
          distance = countDown - now;
          (document.getElementById("mes").innerText = Math.floor(distance / mes)),
          (document.getElementById("days").innerText = Math.floor((distance / mes) / day)),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
  
        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");
  
          headline.innerText = "Feliz Cumpleaños Adrian!";
          countdown.style.display = "none";//deja de mostrar el temporizador
          content.style.display = "block"; // muestra los iconos de "content"
  
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();
  