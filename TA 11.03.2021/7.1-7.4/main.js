window.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
        document.body.style.backgroundColor = "green";
    }, 3000);

    const orangeBtn = document.getElementById("orangeBtn");

    orangeBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "orange";
    });

    const curry = tag => text => `<${tag}>${text}</${tag}>`;
    const ol = document.getElementById("listItems");
    let counter = 0;

    setInterval(() => {
        if (counter !== 20) {
            counter++;
            const li = curry("li");
            const liValue = li(`Item ${counter}`);
            ol.innerHTML += liValue;
        }
    }, 2000);
});