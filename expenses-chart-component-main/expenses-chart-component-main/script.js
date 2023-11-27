let data = fetch("./data.json")
  .then((response) => response.json())
  .then((Datas) => {
    // console.log(JSON.stringify(Datas));

    let html = "";


    Datas.forEach((veri) => {
      html += `
                <li style= "height: ${2.5 * veri.amount}px;" >${
        veri.amount
      }</li>
        `;
    });

    document.querySelector("#data").innerHTML = html;

    let html2 = "";

    Datas.forEach((veri2) => {
      html2 += `
      <p>${veri2.day}<p/>
      `;
    });

    document.querySelector("#days").innerHTML = html2;
  });
