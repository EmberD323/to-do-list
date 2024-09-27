import "./styles.css";
//DOM selectors
const DOM = document.querySelector(".content").childNodes;
const bodyDOM = DOM[5].childNodes;
const toDoFormDOM = bodyDOM[1].childNodes[3].childNodes;
const toDoFormTitleDOM = toDoFormDOM[3];
const toDoFormDescriptionDOM = toDoFormDOM[7];
const toDoFormDueDateDOM = toDoFormDOM[11];
const toDoFormPriorityDOM = toDoFormDOM[13];
const toDoFormPriorityHighDOM =toDoFormPriorityDOM.childNodes[3].childNodes[3];
const toDoFormPriorityMediumDOM =toDoFormPriorityDOM.childNodes[5].childNodes[3];
const toDoFormPriorityLowDOM =toDoFormPriorityDOM.childNodes[7].childNodes[3];
const toDoFormNotesDOM = toDoFormDOM[17];
const toDoFormProjectDOM = toDoFormDOM[21];
const toDoFormStatusDOM = toDoFormDOM[23];
const toDoFormStatusNotYetStartedDOM =toDoFormStatusDOM.childNodes[3].childNodes[3];
const toDoFormStatusStartedDOM =toDoFormStatusDOM.childNodes[5].childNodes[3];
const toDoFormStatusCompletedDOM =toDoFormStatusDOM.childNodes[7].childNodes[3];
const toDoFormSubmitButtonDOM = toDoFormDOM[27];
const projectDisplayDOM = bodyDOM[3].childNodes[3];
const projectFormSubmitButtonDOM = bodyDOM[3].childNodes[7].childNodes[3].childNodes[5];
const projectFormNameDOM =bodyDOM[3].childNodes[7].childNodes[3].childNodes[3];

//factory functions
const Storage = (function(){
    function setLocalStore(array,key){
        const newArrayJSON = JSON.stringify(array);
        localStorage.setItem(key,newArrayJSON);
    }
    function getLocalStore(key){
         let storedArrayOnLoad = JSON.parse(localStorage.getItem(key));
         return storedArrayOnLoad
    }
    return{setLocalStore,getLocalStore}
})();

const CheckArray =(function(){
    function containsValue(value, array) {
        for(let i=0; i<array.length;i++){
            if(array[i].name === value){
                return true
            }
        }
        return false
    }
    
    return{containsValue}
})();

const EditArray =(function(){
    function add(array,object) {
        return array.push(object);
    }
    function remove(array,objectToDeleteIndex){
        return array.splice(objectToDeleteIndex,1);
    }
    return{add,remove}
})();


const CreateObject = (function(){
    function project(projectName) {
        let toDoArray = [];
        return {name:projectName,toDoArray}
    }
    function todo(title,description,duedate,priority,notes,project,status) {
        return {title,description,duedate,priority,notes,project,status}
    }
    
    return {project,todo}
})();

const Form = (function(){
    function addProjects(array){
        //clear
        toDoFormProjectDOM.innerHTML="";
        //for each project in array add an option with value=project.name and text content=project.name
        for(let i=0;i<array.length;i++){
            if (array[i].name == "All todos" ){
            }
            else{
                const projectListDOM = document.createElement("option");
                projectListDOM.value = array[i].name;
                projectListDOM.textContent = array[i].name;
                toDoFormProjectDOM.appendChild(projectListDOM);
            }
        }
    }
   return {addProjects};
})();

const EventListener = (function(){
    function deleteButtons(){
        let deleteToDoButtons = document.querySelectorAll(".deleteToDo");
        deleteToDoButtons.forEach((button)=>{ 
            button.addEventListener("click",(e)=>{
                console.log(deleteToDoButtons);
                //project to delete from
                let projectNameSelected = e.target.parentNode.parentNode.parentNode.childNodes[0].textContent;
                //find project index in projectArray
                let projectIndex = projectArray.findIndex(obj => obj.name == projectNameSelected);
                console.log(projectIndex);
        
                //todo to delete
                let toDoTitleSelected =e.target.parentNode.childNodes[0].textContent;
                //todo index in projectArray[projectIndex]'s todoArray
                let toDoIndex = projectArray[projectIndex].toDoArray.findIndex(obj => obj.title == toDoTitleSelected);
                console.log(toDoIndex);
                //delete todo from project
                EditArray.remove(projectArray[projectIndex].toDoArray,toDoIndex);
        
                //store project array
                Storage.setLocalStore(projectArray,"project");
        
                //refresh project display
                ProjectDisplay.displayAllProjects(projectArray);
            });
        
        });
    }
    return{deleteButtons}
})();

const ProjectDisplay = (function(){
    
    function displayAllProjects(array){
        projectDisplayDOM.innerHTML="";
        
        for(let y=0;y<array.length;y++){
            const newProjectDOM = document.createElement("div");
            newProjectDOM.classList.add("project");
            projectDisplayDOM.appendChild(newProjectDOM);

            //object.name
            const projectNameDOM = document.createElement("div");
            projectNameDOM.classList.add("name");
            projectNameDOM.textContent = array[y].name;
            newProjectDOM.appendChild(projectNameDOM);

            //.toDoDisplay
            const toDoDisplayDOM = document.createElement("div");
            toDoDisplayDOM.classList.add("toDoDisplay");
            newProjectDOM.appendChild(toDoDisplayDOM);

            //todo array length
            let toDoArrayLength = array[y].toDoArray.length;
            for(let i = 0;i<toDoArrayLength;i++){
                const toDoDOM = document.createElement("div");
                toDoDOM.classList.add("todo"+0);
                toDoDisplayDOM.appendChild(toDoDOM);

                const titleDOM = document.createElement("div");
                titleDOM.classList.add("title");
                titleDOM.textContent = array[y].toDoArray[i].title;
                toDoDOM.appendChild(titleDOM);
    
                const dueDOM = document.createElement("div");
                dueDOM.classList.add("due");
                dueDOM.textContent = array[y].toDoArray[i].duedate;
                toDoDOM.appendChild(dueDOM);

                const deleteToDoButtonDOM = document.createElement("button");
                deleteToDoButtonDOM.classList.add("deleteToDo");
                deleteToDoButtonDOM.textContent = "x";
                toDoDOM.appendChild(deleteToDoButtonDOM);
            }
            
        }
        //add the eventlisteners to buttons
        EventListener.deleteButtons();
        
    }
    return{displayAllProjects}
})();

  
//read storage for existing project array
let projectArray = Storage.getLocalStore("project");
    //if empty create with a (no project) object
    if(projectArray == null){
        projectArray =[{name:"No project",toDoArray:[]}]
    }
    //if array is in storage but missing (no project) object
    else{
        if(CheckArray.containsValue("No project",projectArray)==false){
            //add no project
            EditArray.add(projectArray,{name:"No project",toDoArray:[]})
        }
    }
Storage.setLocalStore(projectArray,"project");

//add project names to todoForm
Form.addProjects(projectArray);

//display all projects on page load
ProjectDisplay.displayAllProjects(projectArray);

//adding a new project
projectFormSubmitButtonDOM.addEventListener("click",(e)=>{
    e.preventDefault();
    //validate
    let projectName = projectFormNameDOM.value;
    if (projectName == "") {
        alert("Project Name must be filled out");
    }
    else {
        //create object for project
        let newProjectObject = CreateObject.project(projectName);

        //add to project array
        EditArray.add(projectArray,newProjectObject);

        //store new project array
        Storage.setLocalStore(projectArray,"project");

        //refresh project options in form
        Form.addProjects(projectArray);

        //refresh project display
        ProjectDisplay.displayAllProjects(projectArray);


        //clearform

        document.querySelector("#projectForm").reset();
    }
    
});

//adding a new todo
toDoFormSubmitButtonDOM.addEventListener("click",(e)=>{
    e.preventDefault();
    //read form inputs
    let newTitle = toDoFormTitleDOM.value;
    let newDescription = toDoFormDescriptionDOM.value;
    let newDueDate  = toDoFormDueDateDOM.value;
    let newPriority = "";
        if (toDoFormPriorityHighDOM.checked) {
            newPriority = "High";   
        }
        else if(toDoFormPriorityMediumDOM.checked) {
            newPriority = "Medium";   
        }
        else if(toDoFormPriorityLowDOM.checked) {
            newPriority = "Low";   
        }
    
    let newNotes = toDoFormNotesDOM.value;
    let newProject = toDoFormProjectDOM.value;
    let newStatus = "";
        if (toDoFormStatusNotYetStartedDOM.checked) {
            newStatus = "Not yet started";   
        }
        else if(toDoFormStatusStartedDOM.checked) {
            newStatus = "Started";   
        }
        else if(toDoFormStatusCompletedDOM.checked) {
            newStatus = "Complete";   
        }

    //form validation - title and date
    if (newTitle == "") {
        alert("Title must be filled out");
    }
    else if(newDueDate == ""){
        alert("Due date must be filled out");
    }
    else{
        //create an object
        let newToDoObject = CreateObject.todo(newTitle,newDescription,newDueDate,newPriority,newNotes,newProject,newStatus);

        //find index of newProject in project array
        let projectIndex = projectArray.findIndex(obj => obj.name == newProject);

        //add to newToDo to toDoArray in project array index
        EditArray.add(projectArray[projectIndex].toDoArray,newToDoObject);
        
        //store project array
        Storage.setLocalStore(projectArray,"project");

        //refresh project display
        ProjectDisplay.displayAllProjects(projectArray);

        //clear form
        document.querySelector("#toDoForm").reset();

    }
    
});


