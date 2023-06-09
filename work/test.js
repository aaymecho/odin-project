const container = document.querySelector("#container");

const div_content = document.createElement("div");
div_content.style.border = "2px solid black";
div_content.style.backgroundColor = "pink";


const h1_element = document.createElement("h1");
h1_element.textContent = "Why we should lose it all?";

const p_element = document.createElement("p");
p_element.textContent = "1. Right NOW!";


div_content.appendChild(h1_element);
div_content.appendChild(p_element);


container.appendChild(div_content);


