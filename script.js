function onformsubmit(){
var formdata=readformdata();
insertnewrecord(formdata);
resetform();
}
function readformdata(){
var formdata={};
formdata["Name"]=document.getElementById("name").value;
formdata["Description"]=document.getElementById("desc").value;
formdata["Size"]=document.getElementById("size").value;
return formdata;
}
function insertnewrecord(data)
{
var table=document.getElementById("List of Property").getElementsByTagName('tbody')[0];
var newrow=table.insertRow(table.length);
cell1=newrow.insertCell(0);
cell1.innerHTML=data.Name;
cell2=newrow.insertCell(1);
cell2.innerHTML=data.Description;
cell3=newrow.insertCell(2);
cell3.innerHTML=data.Size;
cell4=newrow.insertCell(3);
cell4.innerHTML='<a onClick="onDelete(this)">DELETE</a>';
}
function resetform(){
    document.getElementById("Name").value="";
    document.getElementById("Description").value="";
    document.getElementById("Size").value="";
}
function onDelete(td){
    if(confirm('Are you to delete this record?')){
row=td.parentElement.parentElement;
document.getElementById("List of Property").deleteRow(row.rowIndex);
resetform();
}}