const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const predictBtn = document.getElementById("predictBtn");
const nextBtn = document.getElementById("nextBtn");
const predictionValue = document.getElementById("predictionValue");

function getPredictionFromAI() {
  // Simulate prediction with random float between 0.1 and 5.0
  return (Math.random() * 4.9 + 0.1).toFixed(2);
}

predictBtn.onclick = () => {
  const prediction = getPredictionFromAI();
  predictionValue.textContent = prediction;
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
};

nextBtn.onclick = () => {
  // Restart the flow (could redirect or do more)
  screen2.classList.add("hidden");
  screen1.classList.remove("hidden");
};
