 // Function to save a note
function saveNote() {
    let noteElement = document.getElementById("note").value;
    if (!noteElement){
        alert("Please enter a note!");
        return;
    }
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteElement);
    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
    clearNoteInput();
}

// Function to delete a note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

// Function to display the notes
function displayNotes() {
    let notesContainer = document.getElementById("mynote_list");
    notesContainer.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];

        let noteElement = document.createElement("div");
        noteElement.classList.add("note");

        let noteText = document.createElement("span");
        noteText.textContent = note;
        noteText.classList.add("note_display")
        noteElement.appendChild(noteText);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete")
        deleteButton.addEventListener("click", function () {
            deleteNote(i);
        });
        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);
    }
}

// Function to clear the input field;
function clearNoteInput() {
    document.getElementById("note").value = "";
}

displayNotes();