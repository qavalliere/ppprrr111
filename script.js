console.log("Hello World!");
console.log("Скрипт успішно підключено до index.html!");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("interactiveBtn");
    const output = document.getElementById("outputMsg");
    let count = 0;

    if (btn && output) {
        btn.addEventListener("click", () => {
            count++;
            output.textContent = `Кнопку успішно натиснуто ${count} раз(ів)! JavaScript працює відмінно. 🎉`;
            output.style.color = "#155724";
            output.style.fontWeight = "bold";
        });
    }
});
