let divs = document.querySelectorAll(".tags");
let sections = document.querySelectorAll(".div-container");

divs[0].addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.tagName === "P") {
    sections[0].scrollTop = sections[0].scrollHeight;
    console.log(sections[0].scrollHeight);
    sections[0].innerHTML += `
    <div><p>
        <span>SYMPTOM</span>
        <i class='fa fa-edit'></i>
        <i class='fa fa-trash'></i>
        </p>
        <h2>${e.target.innerHTML}</h2></div>`;
  }
});

sections[0].addEventListener("click", function (e) {
  let div = e.target.parentElement.parentElement;
  if (div.tagName !== "DIV") return;
  console.log(div);
  div.classList.add("fixed");
  let p = document.createElement("p");

  p.innerHTML = "";
  article.appendChild(div);

  div.innerHTML += ` <article class="article">
                                <p class="">frequency</p>
                                <div>
                                    <p>Every <button>Add</button> <i class='fa fa-trash'></i>
                                    </p>
                                    <span id>Every 4 Hours</span>
                                    <span>Every 6 Hours</span>
                                    <span>0-1-1</span>
                                    <span>0-1-1</span>
                                    <span>1-0-1</span>
                                </div>
                                <p>dose timing</p>
                                <div>

                                    <span>Empty Stomack</span>
                                    <span>Before Food</span>
                                    <span>After Food</span>
                                </div>
                                <p>time</p>
                                <div>

                                    <span>Every 4 Hours</span>
                                    <span>Every 6 Hours</span>
                                    <span>0-1-1</span>
                                    <span>0-1-1</span>
                                    <span>1-0-1</span>
                                </div>
                                <footer class="footer-fixed">
                                <button>Save</button>
                                <button>Cancel</button>
                                </footer>
                            </article>`;
});

sections[0].addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
    let ele = e.target.parentElement.parentElement;
    ele.style.display = "none";
    ele.parentElement.classList.remove("fixed");
    console.log(e.target.parentElement.parentElement);
  }
});
["ss", "ssadc", "dsd"];
