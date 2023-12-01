function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const dob = new Date(year, month - 1, day); // month is 0-indexed in JavaScript

  // Function to check if input value is within range
  function checkValue(value, min, max) {
    return value >= min && value <= max;
  }

  // Continuous validation for day input
  document.getElementById("day").addEventListener("input", function () {
    const enteredValue = parseInt(this.value);
    if (!checkValue(enteredValue, 1, 31)) {
      document.getElementById("error").innerText =
        "please enter a valid day between 1 and 31";
      this.value = "";
    }
  });

  // Continuous validation for month input
  document.getElementById("month").addEventListener("input", function () {
    const enteredValue = parseInt(this.value);
    if (!checkValue(enteredValue, 1, 12)) {
      document.getElementById("error1").innerText =
        "Please enter a valid month between 1 and 12.";
      this.value = "";
    }
  });

  // Continuous validation for year input
  document.getElementById("year").addEventListener("input", function () {
    const enteredValue = parseInt(this.value);
    const currentYear = new Date().getFullYear();

    if (enteredValue.length === 4) {
      if (!/^(1[0-9]{3}|20[01][0-9]?)$/.test(enteredValue)) {
        alert("Please enter a valid year between 1 to 2023.");
        this.value = "";
      } else if (
        enteredValue < "2023" ||
        enteredValue > currentYear.toString()
      ) {
        alert("Please enter a valid year between 1 to 2023.");
        this.value = "";
      }
    }
  });

  if (isNaN(dob.getTime())) {
    document.getElementById("error").innerText = "this field is required";
    document.getElementById("error1").innerText = "this field is required";
    document.getElementById("error2").innerText = "this field is required";

    document.getElementById("year_result").innerText = "--";
    document.getElementById("month_result").innerText = "--";
    document.getElementById("day_result").innerText = "--";
    return;
  } else {
    document.getElementById("error").innerText = " ";
    document.getElementById("error1").innerText = " ";
    document.getElementById("error2").innerText = " ";
  }
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const prevMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonthLastDay;
    months--;
  }

  document.getElementById("error").innerText = "";

  document.getElementById("year_result").innerText = years;
  document.getElementById("month_result").innerText = months;
  document.getElementById("day_result").innerText = days;
}
