var taskdata=document.getElementById("newTask");
var addButton=document.getElementsByTagName("button")[0];



var notCompleted=document.getElementById("incompleteTask");
var Completed=document.getElementById("completedTask");

var createlistFunction=function(uservalue){
var list=document.createElement("li");
var checkbox=document.createElement("input");
var label=document.createElement("label");
var inputText=document.createElement("input");
var edit=document.createElement("button");
var deletedata=document.createElement("button");

label.innerText=uservalue;

checkbox.type="checkbox";
inputText.type="text";
edit.innerText="Edit";
deletedata.innerText="Delete";
edit.className="Edit";
deletedata.className="Delete";

    


list.appendChild(checkbox);
list.appendChild(label);
list.appendChild(inputText);
list.appendChild(edit);
list.appendChild(deletedata);
//list.appendChild(updatedata);
return list;

}

var addTask=function()
{
    console.log("Add task");
   
    var listItem=createlistFunction(taskdata.value);
    notCompleted.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskdata.value="";
}
var editTask=function(){
   var updatedata=document.createElement("button");
    updatedata.innerText="Update";
    updatedata.addEventListener("click", update);
    taskdata.style.display="none";
    addButton.style.display="none";
    var total=document.getElementsByTagName("button");
    console.log(total);
    var listItem=this.parentNode;
     
    
    var edit=listItem.getElementsByTagName("button")[0];
    edit.style.display="none";
    var del=listItem.getElementsByTagName("button")[1];
    del.style.display="none";
     listItem.appendChild(updatedata);
     
    var ptag=document.getElementById("first");
   
    ptag.appendChild(listItem);
  

    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");

    label.style.display="none"; 
    var containsClass=listItem.classList.contains("editMode");
    
    if(containsClass){

			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		listItem.classList.toggle("editMode");

}
var deleteTask=function(){
 

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    ul.removeChild(listItem);

}

var taskCompleted=function(){
   
     var listItem=this.parentNode;
     Completed.appendChild(listItem);
     bindTaskEvents(listItem, taskIncomplete);

}

var taskIncomplete=function(){
  
       var listItem=this.parentNode;
       notCompleted.appendChild(listItem);
        bindTaskEvents(listItem,taskCompleted);
}
var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.Edit");
	var deleteButton=taskListItem.querySelector("button.Delete");

			editButton.onclick=editTask;
			
			deleteButton.onclick=deleteTask;
			
			checkBox.onchange=checkBoxEventHandler;
}
for (var i=0; i<notCompleted.children.length;i++){

    bindTaskEvents(notCompleted.children[i],taskCompleted);
}


for (var i=0; i<Completed.children.length;i++){
    console.log(Completed.children.length);
console.log(Completed.children[i]);
    bindTaskEvents(Completed.children[i],taskIncomplete);
}

function update(){
     var updatelist=this.parentNode;
      console.log(updatelist);
 var updateInput=updatelist.querySelector('input[type=text]');
 var updatelabel=updatelist.querySelector("label");
    console.log(updateInput.value);
      var checkClass=updatelist.classList.contains("editMode");
    
    if(checkClass){

			updatelabel.innerText=updateInput.value;
		}else{
			updateInput.value=updatelabel.innerText;
		}

		
    
    notCompleted.appendChild(updatelist);
    bindTaskEvents(updatelist, taskCompleted);
    taskdata.value="";
      var ulabel=updatelist.querySelector("label");
    ulabel.style.display="block"; 
      var uedit=updatelist.getElementsByTagName("button")[0];
   uedit.style.display="block";
    var udel=updatelist.getElementsByTagName("button")[1];
    udel.style.display="block";
     updatelist.classList.toggle("editMode");
}


