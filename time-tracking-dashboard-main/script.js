document.getElementById("dailyButton").addEventListener("click", function () {
  updateData("daily");
});

document.getElementById("weeklyButton").addEventListener("click", function () {
  updateData("weekly");
});

document.getElementById("monthlyButton").addEventListener("click", function () {
  updateData("monthly");
});

function updateData(timeframe) {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateElementWithTimeframes(data, "Work", "work", "preWork", timeframe);
      updateElementWithTimeframes(
        data,
        "Exercise",
        "exercise",
        "preExercise",
        timeframe
      );
      updateElementWithTimeframes(data, "Play", "play", "prePlay", timeframe);
      updateElementWithTimeframes(
        data,
        "Social",
        "social",
        "preSocial",
        timeframe
      );
      updateElementWithTimeframes(
        data,
        "Study",
        "study",
        "preStudy",
        timeframe
      );
      updateElementWithTimeframes(
        data,
        "Self Care",
        "selfCare",
        "preSelfCare",
        timeframe
      );
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function updateElementWithTimeframes(
  data,
  targetTitle,
  elementId,
  preElementId,
  timeframe
) {
  if (Array.isArray(data)) {
    const targetData = data.find((item) => item.title === targetTitle);

    if (targetData) {
      const current = targetData.timeframes[timeframe].current;
      const previous = targetData.timeframes[timeframe].previous;

      const element = document.getElementById(elementId);
      const preElement = document.getElementById(preElementId);

      if (element && preElement) {
        element.innerHTML = current + " hrs";
        preElement.innerHTML = `Last ${
          timeframe.charAt(0).toUpperCase() + timeframe.slice(1)
        }: ${previous} hrs`;

        console.log(`Current: ${current} hrs, Previous: ${previous} hrs`);
      }
    }
  }
}
