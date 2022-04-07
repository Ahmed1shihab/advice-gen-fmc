const generatorBtn = document.getElementById("gen-btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

generatorBtn.addEventListener("click", () => {
    generateAdvice();
});

window.onload = () => {
    generateAdvice();
};

async function generateAdvice() {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await advice.json();

    adviceId.textContent = `Advice #${slip["id"]}`;
    adviceText.textContent = `"${slip["advice"]}"`;
}
