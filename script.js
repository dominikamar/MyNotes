const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteBtns = document.getElementsByClassName("delete-note");
const deleteAllBtn = document.querySelector(".delete-all");
const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");

let selectedValue;
let cardID = 0;

const showPanel = () => {
	notePanel.style.display = "flex";
};

const hidePanel = () => {
	notePanel.style.display = "none";
	error.style.visibility = "hidden";
	textArea.value = "";
	category.selectedIndex = 0;
};

const addNote = () => {
	if (
		category.options[category.selectedIndex].value !== "0" &&
		textArea.value !== ""
	) {
		createNote();
		error.style.visibility = "hidden";
	} else {
		error.style.visibility = "visible";
	}
};
const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", cardID);
	newNote.innerHTML = `
    <div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick="deleteNote(${cardID})">
    <i class="fas fa-times icon"></i>
    </button>
    </div>
    <div class="note-body">
    ${textArea.value}
    </div>`;
	noteArea.appendChild(newNote);
	cardID++;
	textArea.value = "";
	category.selectedIndex = 0;
	notePanel.style.display = "none";
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
	if (selectedValue === "Praca") {
		note.style.backgroundColor = "lime";
	} else if (selectedValue === "Zakupy") {
		note.style.backgroundColor = "royalblue";
	} else if (selectedValue === "Inne") {
		note.style.backgroundColor = "yellow";
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = "";
};

addBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", hidePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
