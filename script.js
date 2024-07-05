let textBox = document.querySelector(".text");
let buttons = document.querySelectorAll(".btn");

let result = "";

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log("A button was clicked");
        if (e.target.innerHTML == "=") {
            result = eval(result);
            textBox.value = result;
        }
        else if (e.target.innerHTML == "AC") {
            result = "";
            textBox.value = result;
        }
        else {
            // console.log(e.target);
            result = result + e.target.innerHTML;
            textBox.value = result;
        }
    });
});

