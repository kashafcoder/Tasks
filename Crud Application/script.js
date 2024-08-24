// Tooltip Bootstrap
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Post Button
function createPostButton() {
  let postButton = document.getElementById("postBtn");
  window.location.href = "page2.html";
  return postButton;
}

//FORM
document.addEventListener("DOMContentLoaded", function () {

  let uploadImageInput = document.getElementById("imagePreview");
  let shareBtn = document.getElementById("shareBtn");
  let updateBtn = document.getElementById("updateBtn");
  let locationInput = document.getElementById("location");
  let captionInput = document.getElementById("caption");
  let recordList = document.getElementById("record-list");

  uploadImageInput.addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        let imageData = event.target.result;
        let imagePreview = document.getElementById("imagePreview");
        imagePreview.src = imageData;
      };
      reader.readAsDataURL(file);
    }
  });

  shareBtn.addEventListener("click", function () {
    let location = locationInput.value.trim();
    let caption = captionInput.value.trim();
    let image = document.getElementById("imagePreview").src;
  
    if (!image || !caption || !location ) {
      alert("Please fill out all fields.");
      return;
    }
  
    let record = { image, location, caption };
    saveRecord(record);
    renderRecords();
    clearForm();
  });
  
  updateBtn.addEventListener("click", function () {
    const location = locationInput.value;
    const caption = captionInput.value;
    const image = document.getElementById("imagePreview").src;

    if (!location || !caption || !image) {
      alert("Please fill out all fields and upload an image.");
      return;
    }
    

    const updatedRecordIndex = parseInt(updateBtn.dataset.index);
    if (isNaN(updatedRecordIndex)) {
      alert("No record selected for update.");
      return;
    }

    const updatedRecord = { location, caption, image };

    updateRecord(updatedRecordIndex, updatedRecord);

    renderRecords();

    clearForm();

    updateBtn.style.display = "none";
    shareBtn.style.display = "inline-block";
  });

  function updateRecord(index, updatedRecord) {
    let records = JSON.parse(sessionStorage.getItem("records")) || [];
    records[index] = updatedRecord;
    sessionStorage.setItem("records", JSON.stringify(records));
  }

  function clearForm() {
    locationInput.value = "";
    captionInput.value = "";
    document.getElementById("imagePreview").src = "";
    uploadImageInput.value = "";
  }

  function deleteRecord(index) {
    let records = JSON.parse(sessionStorage.getItem("records")) || [];
    records.splice(index, 1);
    sessionStorage.setItem("records", JSON.stringify(records));
    renderRecords();
  }
  function editRecord(index) {
    let records = JSON.parse(sessionStorage.getItem("records")) || [];
    const recordToEdit = records[index];
  
    locationInput.value = recordToEdit.location;
    captionInput.value = recordToEdit.caption;
    document.getElementById("imagePreview").src = recordToEdit.image;
  
    shareBtn.style.display = "none";
    updateBtn.style.display = "inline-block";
    updateBtn.dataset.index = index;
  }

  function renderRecords() {
    recordList.innerHTML = "";
    let records = JSON.parse(sessionStorage.getItem("records")) || [];
  
    records.forEach((record, index) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.location}</td>
        <td>${record.caption}</td>
        <td><img src="${record.image}" width="100px" height="auto" alt="Image"></td>
        <td>
          <button class="edit-btn" data-index="${index}">Edit</button>
          <button class="delete-btn" data-index="${index}">Delete</button>
        </td>
      `;
      recordList.appendChild(row);
    });
  
    var deleteButtons = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", function () {
        let index = parseInt(this.dataset.index);
        deleteRecord(index);
      });
    }
  
    var editButtons = document.getElementsByClassName("edit-btn");
    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", function () {
        let index = parseInt(this.dataset.index);
        editRecord(index);
      });
    }
  }

  function saveRecord(record) {
    let records = JSON.parse(sessionStorage.getItem("records")) || [];
    records.push(record);
    sessionStorage.setItem("records", JSON.stringify(records));
  }


  clearForm();
  renderRecords();
});