import "./styles.css";

import { compareAsc, format } from "date-fns";



const ToDoData = (function(){
    function createObject() {
        let newTitle = formDOM[3].value;
        let newDescription = formDOM[7].value;
        let newDueDate = duedateDOM.value;
        let newPriority = "";
        if (prioritysOpt1DOM.checked) {
            newPriority = "High";   
        }
        else if(prioritysOpt2DOM.checked) {
            newPriority = "Medium";   
        }
        else if(prioritysOpt3DOM.checked) {
            newPriority = "Low";   
        }
        let newNotes = formDOM[17].value;
        let newProject = formDOM[21].value;
        let newStatus = "";
        if (statusOpt1DOM.checked) {
            newStatus = "notstarted";   
        }
        else if(statusOpt2DOM.checked) {
            newStatus = "started";   
        }
        else if(statusOpt3DOM.checked) {
            newStatus = "complete";   
        }
        return {title:newTitle,description:newDescription,duedate:newDueDate,priority:newPriority,notes:newNotes,project:newProject,status:newStatus};
    }
    function addToArray(object){
        return toDoArray.push(object);
    }
    function removeFromArray(array,number){
        return array.splice(number,1);
    }
    
    return {createObject,addToArray,removeFromArray};
})();

const ProjectData = (function(){
    function CreateObject(name,todoArray) {
        this.name = projectNameInputDOM.value;
        this.todoArray = [];
    }
    function addToArray(object){
        return projectArray.push(object);
    }
    return {CreateObject,addToArray}
})();
const Form = (function(){
    function clearToDoForm(){
        let allInputs1 = [formDOM[1],formDOM[3],formDOM[5],formDOM[8]]
        for(let input of allInputs1){
            input.value=""
        }
        prioritysOpt1DOM.checked = true;
        statusOpt1DOM.checked = true;
        projectSelectionDOM.selected = true;
        duedateDOM.value = "";
        formDOM[7].value = "";
        formDOM[17].value = "";
    }
    function clearProjectForm(){
    projectNameInputDOM.value = "";
    }
    function addProjects(array){
        //delete all

        //for each project in array add a option with value=project.name and text content=project.name
        for(let i=0;i<array.length;i++){
            const optionDOM = document.createElement("option");
            optionDOM.value = array[i].name;
            optionDOM.textContent = array[i].name;
            projectChoices.appendChild(optionDOM);
        }
        
        
    }
   return {clearToDoForm,clearProjectForm,addProjects};
})();

const Storage = (function(){
    function setLocalStore(array,key){
        
        const newArrayJSON = JSON.stringify(array);
        localStorage.setItem(key,newArrayJSON);
        

    }
    function getLocalStore(key){
         let storedArrayOnLoad = JSON.parse(localStorage.getItem(key));
         return storedArrayOnLoad
    }
    function sortByDate(){

        toDoArray.sort((a,b)=>{
            const dueDateA = a.duedate;
            const dueDateB  = b.duedate;
            if (dueDateA<dueDateB) {
                return -1; 
            } 
            else if (dueDateA>dueDateB) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
    }
    return{setLocalStore,getLocalStore,sortByDate}
})();

const ProjectDisplay = (function(){
    function add(object){
        const newProjectDOM = document.createElement("div");
        newProjectDOM.classList.add("project");
        projectDisplay.appendChild(newProjectDOM);

        //object.name
        const projectNameDOM = document.createElement("div");
        projectNameDOM.classList.add("name");
        projectNameDOM.textContent = object.name;
        newProjectDOM.appendChild(projectNameDOM);

        //top3todo
        const topThreeDOM = document.createElement("div");
        topThreeDOM.classList.add("topthree");
        newProjectDOM.appendChild(topThreeDOM);

        for(let i=1;i<4;i++){
            const toDoDOM = document.createElement("div");
            toDoDOM.classList.add("todo"+i);
            topThreeDOM.appendChild(toDoDOM);

            const titleDOM = document.createElement("div");
            titleDOM.classList.add("title");
            titleDOM.textContent = "example";
            toDoDOM.appendChild(titleDOM);

            const dueDOM = document.createElement("div");
            dueDOM.classList.add("due");
            dueDOM.textContent = "21-09-2025";
            toDoDOM.appendChild(dueDOM);

            const detailButtonDOM = document.createElement("button");
            detailButtonDOM.classList.add("detail");
            detailButtonDOM.textContent = "Detail";
            toDoDOM.appendChild(detailButtonDOM);


        }

        const SeeAllButtonDOM = document.createElement("button");
        SeeAllButtonDOM.classList.add("seeall");
        SeeAllButtonDOM.id = object.name;
        SeeAllButtonDOM.textContent = "See All";
        newProjectDOM.appendChild(SeeAllButtonDOM);

        const AddButtonDOM = document.createElement("button");
        AddButtonDOM.classList.add("add");
        AddButtonDOM.textContent = "Add";
        newProjectDOM.appendChild(AddButtonDOM);

        





    }
    function detail(object){
        //ProjectDisplay.detail(todoInfo);
        //delete old info
        projectDetailDOM.innerHTML="";

        //add info

        for (const key in object) {
            const detailDOM = document.createElement("div");
            detailDOM.classList.add(`${key}`);
            detailDOM.textContent = `${key}: ${object[key]}`;
            projectDetailDOM.appendChild(detailDOM);
          }
    }
    return{add,detail}
})();
//reading storage 
let toDoArray = Storage.getLocalStore("todo");
if(toDoArray == null){toDoArray =[]};
let projectArray = Storage.getLocalStore("project");
if(projectArray == null){projectArray =[{name:"All todos",toDoArray:toDoArray}]};

//toDoArray.splice(1,2);

//DOM selectors
const DOM = document.querySelector(".content").childNodes;
const bodyDOM = DOM[5].childNodes;
const toDoAreaDOM = bodyDOM[1].childNodes;
const formDOM = toDoAreaDOM[3].childNodes;
const prioritysDOM = formDOM[13].childNodes;
const prioritysOpt1DOM = prioritysDOM[3].childNodes[3];
const prioritysOpt2DOM = prioritysDOM[5].childNodes[3];
const prioritysOpt3DOM = prioritysDOM[7].childNodes[3];
const statusDOM = formDOM[23].childNodes;
const statusOpt1DOM = statusDOM[3].childNodes[3];
const statusOpt2DOM = statusDOM[5].childNodes[3];
const statusOpt3DOM = statusDOM[7].childNodes[3];
const projectChoices = formDOM[21];
const projectSelectionDOM = projectChoices.childNodes[1];
const duedateDOM = formDOM[11];
const projectDisplay = bodyDOM[3].childNodes[3];
const projectNameInputDOM = bodyDOM[3].childNodes[7].childNodes[3].childNodes[3]; 
const projectDetailDOM = bodyDOM[3].childNodes[5];
const sidebarDOM = DOM[3].childNodes;
const upcomingToDosDOM = sidebarDOM[3];



const UpcomingToDos = (function(){
    function displaySidebarTopFive(){
        //delete oldcontent
        upcomingToDosDOM.innerHTML ="";


        //order by date
        Storage.sortByDate();

        const list1DOM = document.createElement("div");
        list1DOM.classList.add("list");
        upcomingToDosDOM.appendChild(list1DOM);
        
        const listTitle1DOM = document.createElement("div");
        listTitle1DOM.classList.add("title");
        listTitle1DOM.textContent = "To-Do";
        list1DOM.appendChild(listTitle1DOM);
        
        const listDueDate1DOM = document.createElement("div");
        listDueDate1DOM.classList.add("title");
        listDueDate1DOM.textContent = "Due Date";
        list1DOM.appendChild(listDueDate1DOM);

        
        for(let i=0;i<5;i++){
            const listDOM = document.createElement("div");
            listDOM.classList.add("list");
            upcomingToDosDOM.appendChild(listDOM);
        
            const listTitleDOM = document.createElement("div");
            listTitleDOM.classList.add("title");
            listTitleDOM.textContent = toDoArray[i].title;
            listDOM.appendChild(listTitleDOM);
        
            const listDueDateDOM = document.createElement("div");
            listDueDateDOM.classList.add("duedate");
            listDueDateDOM.textContent = toDoArray[i].duedate;
            listDOM.appendChild(listDueDateDOM);
        }

    }
    function displayProjectsTopThree(){
        const topthreeDOM = projectDisplay.childNodes[1].childNodes[3]
        //delete oldcontent
        topthreeDOM.innerHTML ="";

        //order by date
        Storage.sortByDate();
        

        for(let i=0;i<3;i++){
            const todoDOM = document.createElement("div");
            todoDOM.classList.add("todo"+(i+1));
            topthreeDOM.appendChild(todoDOM);
        
            const todoTitleDOM = document.createElement("div");
            todoTitleDOM.classList.add("title");
            todoTitleDOM.textContent = toDoArray[i].title;
            todoDOM.appendChild(todoTitleDOM);
        
            const todoDueDateDOM = document.createElement("div");
            todoDueDateDOM.classList.add("duedate");
            todoDueDateDOM.textContent = toDoArray[i].duedate;
            todoDOM.appendChild(todoDueDateDOM);

            const todoDetailButtonDOM = document.createElement("button");
            todoDetailButtonDOM.classList.add("detail");
            todoDetailButtonDOM.textContent = "Detail";
            todoDetailButtonDOM.id = i;
            todoDOM.appendChild(todoDetailButtonDOM);
        }

    }
    function displayProjectsAll(){
        const topthreeDOM = projectDisplay.childNodes[1].childNodes[3]
        //delete oldcontent
        topthreeDOM.innerHTML ="";

        //order by date
        Storage.sortByDate();
        

        for(let i=0;i<3;i++){
            const todoDOM = document.createElement("div");
            todoDOM.classList.add("todo"+(i+1));
            topthreeDOM.appendChild(todoDOM);
        
            const todoTitleDOM = document.createElement("div");
            todoTitleDOM.classList.add("title");
            todoTitleDOM.textContent = toDoArray[i].title;
            todoDOM.appendChild(todoTitleDOM);
        
            const todoDueDateDOM = document.createElement("div");
            todoDueDateDOM.classList.add("duedate");
            todoDueDateDOM.textContent = toDoArray[i].duedate;
            todoDOM.appendChild(todoDueDateDOM);

            const todoDetailButtonDOM = document.createElement("button");
            todoDetailButtonDOM.classList.add("detail");
            todoDetailButtonDOM.textContent = "Detail";
            todoDetailButtonDOM.id = i;
            todoDOM.appendChild(todoDetailButtonDOM);
        }

    }
    return{displaySidebarTopFive,displayProjectsTopThree,displayProjectsAll}
})();

//display upcoming todos on sidebar
UpcomingToDos.displaySidebarTopFive();

//add project names to todoForm
Form.addProjects(projectArray);


//display upcoming todos in all todos projecy
UpcomingToDos.displayProjectsTopThree();


//eventlisteners
//adding a todo
const toDoFormSubmitButtonDOM = formDOM[27];
toDoFormSubmitButtonDOM.addEventListener("click",(e)=>{
    e.preventDefault();

    let title = formDOM[3].value;
    let duedate  = duedateDOM.value;
    //form validation
    if (title == "") {
        alert("Title must be filled out");
    }
    else if(duedate == ""){
        alert("Due date must be filled out");
    }
    else{
        //create object of form inputs
        let formInputs = ToDoData.createObject();
        //add object to array of todo objects
        ToDoData.addToArray(formInputs)
        //add to storage
        Storage.setLocalStore(toDoArray,"todo");

        //delete old page and refresh lists
        Form.clearToDoForm();

        //refresh upcoming to-dos
        UpcomingToDos.displaySidebarTopFive();
    }
});


//adding a project
const projectFormSubmitButtonDOM = bodyDOM[3].childNodes[7].childNodes[3].childNodes[5];
projectFormSubmitButtonDOM.addEventListener("click",(e)=>{
    e.preventDefault();

    //create object for project
    let newProject = new ProjectData.CreateObject;

    //add object to array of project objects
    ProjectData.addToArray(newProject);

    //add to storage
    Storage.setLocalStore(projectArray,"project");
    
    //delete old page and refresh lists
    Form.clearProjectForm();

    //add project to page
    ProjectDisplay.add(newProject);

    
});

//detail buttons
const detailButtons = document.querySelectorAll(".detail")
detailButtons.forEach((button)=>{ 
    button.addEventListener("click",(e)=>{
        //id = todoArray position
        let todoArrayPosition = e.target.id;
        let todoInfo = toDoArray[todoArrayPosition]
        //add todo info to DetailContainter
        ProjectDisplay.detail(todoInfo);
    });

});

//see all buttons
const seeAllButtons = document.querySelectorAll(".seeall")
seeAllButtons.forEach((button)=>{ 
    button.addEventListener("click",(e)=>{
        //button id = project name
        let projectName = e.target.id;
        console.log(projectName);
        //find name in project list - pause need to have project list set up with to dos.
        
    });

});
//displayProjectsAll

//to do detail


