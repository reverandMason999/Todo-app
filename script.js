const pending = document.getElementById("pending");
const completed = document.getElementById("completed");
const sendBtn = document.querySelector("input[type=submit]");
let formText = document.querySelector("input");
const ul = document.createElement("ul");
const icon =
  "<svg xmlns='http://www.w3.org/2000/svg' style='position:relative; top:5px;color:red;' width='16' height='16' fill='currentColor' class='float-end bi bi-trash3' viewBox='0 0 16 16'><path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z'/></svg>";

sendBtn.onclick = () => {
  if (formText.value != "") {
    const li = document.createElement("li");
    li.innerHTML =
      "<input type='checkbox' id='ok' class='form-check-input'>" +
      formText.value +
      icon;

    ul.appendChild(li);

    pending.appendChild(ul);

    formText.value = "";

    let checkbox = document.querySelectorAll("li input");

    let liIcon = document.querySelectorAll("li svg");

    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener("change", (e) => {
        if (checkbox[i].checked) {
          completed.appendChild(li);
        } else {
          checkbox[i].parentElement.style = "text-decoration: none";
        }
      });
    }

    for (let i = 0; i < liIcon.length; i++) {
      liIcon[i].addEventListener("click", (e) => {
        liIcon[i].parentElement.remove();
      });
    }
  } else {
    alert("Don't be lazy!!");
  }
};
