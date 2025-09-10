const btnGoBack = document.querySelector("#result button");
const btnSort = document.querySelector("#sort button");
const sectionSort = document.getElementById("sort");
const sectionResult = document.getElementById("result");
const inputNumbers = document.getElementById("numbers");
const inputFrom = document.getElementById("from");
const inputTo = document.getElementById("to");
const form = document.querySelector("form");
const toggle = document.getElementById("toggle");
const resultNumbers = document.querySelector(".result-numbers");

// alternando para a tela do resultado
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let numbersSorted = [];

  // valida se todos os campos estão preenchidos
  if (
    inputNumbers.value.length <= 0 ||
    inputFrom.value.length <= 0 ||
    inputTo.value.length <= 0
  ) {
    alert("Preencha todos os campos para sortear!");
    return;
  }

  if (toggle.checked) {
    if (
      Number(inputTo.value) - Number(inputFrom.value) <
      Number(inputNumbers.value)
    ) {
      alert(
        "O intervalo de números não pode ser menor do que a quantidade a ser sorteada. Desabilite a opção de não repetir números, ou diminua a quantidade."
      );
      return;
    }
  }

  if(Number(inputNumbers.value) === 0){
    alert("A quantidade dos números a ser sorteado não pode ser 0!");
    return;
  }

  // valida se o número final é menor que o inicial
  if (Number(inputTo.value) < Number(inputFrom.value)) {
    alert("O número inicial não pode ser maior do que o final!");
    return;
  }

  let value = Number(inputNumbers.value);

  const interval = setInterval(() => {
    let result;

    // gerar novo número até que não seja repetido
    do {
      result = getRandomIntInclusive(inputFrom.value, inputTo.value);
    } while (toggle.checked && numbersSorted.includes(result));

    // criando estrutura html
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("wrapper");

    const divInside = document.createElement("div");
    divInside.classList.add("box");

    const span = document.createElement("span");
    span.classList.add("number");
    span.textContent = result;

    divWrapper.append(divInside);
    divWrapper.append(span);
    resultNumbers.append(divWrapper);

    numbersSorted.push(result);

    value--;

    if (value === 0) {
      clearInterval(interval);
    }
  }, 4000);

  sectionSort.classList.add("hidden");
  sectionResult.classList.remove("hidden");
});

// alternando para a tela inicial
btnGoBack.addEventListener("click", () => {
  location.reload(true);

  // limpando os inputs
  inputFrom.value = "";
  inputTo.value = "";
  inputNumbers.value = "";

  // trocando seção
  sectionSort.classList.remove("hidden");
  sectionResult.classList.add("hidden");
});

// função que sorteia os números
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
