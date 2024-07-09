//get elements
let textBox = document.querySelector(".text");
let buttons = document.querySelectorAll(".btn");

let result = "";

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // console.log("A button was clicked");

        //equal button function
        if (e.target.innerHTML == "=") {
            result = eval(result);
            textBox.value = result;
        }
        //AC button function
        else if (e.target.innerHTML == "AC") {
            result = "";
            textBox.value = result;
        }
        //other button function
        else {
            // console.log(e.target);
            result = result + e.target.innerHTML;
            textBox.value = result;
        }
    });
});

//on clicking equal button a message will pop up
let eqlBtn = () => {
    document.getElementById('eqlpara').textContent = "Press AC for new calculation";
}

//on clicking AC button pop up message will hide
let acBtn = () => {
    document.getElementById('eqlpara').textContent = "";
}