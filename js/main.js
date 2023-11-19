const form1 = document.forms.formSelect;
const form1Select = form1.select;

const form2 = document.forms.createElem;
const enterText = form2.enterText;
const enterClass = form2.enterClass;

const btn = form2.createBtn;
const createEl = document.querySelector('.create-element');

const form3 = document.forms.addSelect;
const enterTag = form3.enterTag;
const addTagBtn = form3.addTag;

btn.onclick = function () {
    const createdEl = document.createElement(form1Select.value);
    createEl.append(createdEl);
    createdEl.className = enterClass.value;
    createdEl.innerHTML = enterText.value;
    createdEl.style.fontSize = '20px'
}

addTagBtn.onclick = function () {

    const option = new Option(enterTag.value, enterTag.value);
    form1Select.append(option);
}
