var selectedRow = null;
function onFormSubmit(e) {
 event.preventDefault();
 var formData = readFormData();
 if (selectedRow === null) {
  insertNewRecord(formData);
  insertRow === null;
 }
 else {
  updateRecord(formData);
  selectedRow = null;
 }
 resetForm();
}

//Retrieve the data
function readFormData() {
 var formData = {};
 formData["mgSku"] = document.getElementById("mgSku").value;
 formData["mgName"] = document.getElementById("mgName").value;
 formData["mgQty"] = document.getElementById("mgQty").value;
 formData["mgPerPrice"] = document.getElementById("mgPerPrice").value;
 return formData;
}

//Insert the data
function insertNewRecord(data) {
 var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
 var newRow = table.insertRow(table.length);
 var cell1 = newRow.insertCell(0);
 cell1.innerHTML = data.mgSku;
 var cell2 = newRow.insertCell(1);
 cell2.innerHTML = data.mgName;
 var cell3 = newRow.insertCell(2);
 cell3.innerHTML = data.mgQty;
 var cell4 = newRow.insertCell(3);
 cell4.innerHTML = data.mgPerPrice;
 var cell5 = newRow.insertCell(4);
 cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td) {
 selectedRow = td.parentElement.parentElement;
 document.getElementById('mgSku').value = selectedRow.cells[0].innerHTML;
 document.getElementById('mgName').value = selectedRow.cells[1].innerHTML;
 document.getElementById('mgQty').value = selectedRow.cells[2].innerHTML;
 document.getElementById('mgPerPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
 selectedRow.cells[0].innerHTML = formData.mgSku;
 selectedRow.cells[1].innerHTML = formData.mgName;
 selectedRow.cells[2].innerHTML = formData.mgQty;
 selectedRow.cells[3].innerHTML = formData.mgPerPrice;

}

//Delete the data
function onDelete(td) {
 if (confirm('Do you want to delete this record?')) {
  row = td.parentElement.parentElement;
  document.getElementById('storeList').deleteRow(row.rowIndex);
 }
 resetForm();
}

//Reset the data
function resetForm() {
 document.getElementById('mgSku').value = '';
 document.getElementById('mgName').value = '';
 document.getElementById('mgQty').value = '';
 document.getElementById('mgPerPrice').value = '';
}