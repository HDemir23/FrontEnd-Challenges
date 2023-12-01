const getRandomAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);

      const html = document.getElementById("Advice");
      html.innerHTML = `"${data.slip.advice}"`;

      const html2 = document.getElementById("Id");
      html2.innerHTML = `Advice ${data.slip.id}`;
    });
};

const button = document.getElementById("newAdvice");
button.addEventListener("click", getRandomAdvice);
