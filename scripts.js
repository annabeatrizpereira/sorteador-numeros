const btnGoBack = document.querySelector("#result button")
const btnSort = document.querySelector("#sort button");
const sectionSort = document.getElementById("sort");
const sectionResult = document.getElementById("result");
const inputNumbers = document.getElementById("numbers");
const inputFrom = document.getElementById("from");
const inputTo = document.getElementById("to");
const form = document.querySelector("form");

// alternando para a tela do resultado
form.addEventListener("submit", (e) => {
    // não recarregar a página on submit
    e.preventDefault();

    // valida se todos os campos estão preenchidos
    if((inputNumbers.value.length <= 0) || (inputFrom.value.length <= 0) || (inputFrom.value.length <= 0)){
        alert("Preencha todos os campos para sortear!");
    }else {
        console.log(inputNumbers.value)
        console.log(inputFrom.value)
        console.log(inputTo.value)

        sectionSort.classList.add("hidden");
        sectionResult.classList.remove("hidden");
    }

})

// alternando para a tela inicial
btnGoBack.addEventListener("click", () => {
    sectionSort.classList.remove("hidden");
    sectionResult.classList.add("hidden");
})