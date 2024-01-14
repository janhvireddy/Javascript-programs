let inputField = document.getElementById("inputField");
let addButton = document.getElementById("addButton");
let todoContainer = document.getElementById("todoContainer");
addButton.addEventListener("click", function () {
  let addList = document.createElement("Li");
  addList.innerText = inputField.value;
  todoContainer.appendChild(addList);
  inputField.value = "";
  addList.addEventListener("click", function () {
    addList.style.textDecoration = "line-through";
  });
  addList.addEventListener("dblclick", function () {
    todoContainer.removeChild(addList);
  });
});
