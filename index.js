// Write your code here!
const removeElement = document.getElementById("main");
removeElement.remove();

const newHeader = document.createElement("h1");
document.body.append(newHeader);
newHeader.textContent = "newHeader"

newHeader.id = "victory";

newHeader.innerHTML = "Meri is the champion"
