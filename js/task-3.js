const inputList = document.querySelector("#name-input");
const outputList = document.querySelector("#name-output");


inputList.addEventListener("input", () => {
    const inputValue = inputList.value.trim();

      if (inputValue === '') {
      outputList.textContent = 'Anonymous';
    } else {
       outputList.textContent = inputValue;
    }
})