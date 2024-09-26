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
    function addTodo(toDoObject,projectname){
        for(let i=0;i<projectArray.length;i++){
            if(projectArray[i].name==projectname){
                if(projectArray[i].todoArray==null){
                    projectArray[i].todoArray = [toDoObject]
                }
                else{
                    projectArray[i].todoArray.push(toDoObject);
                    
                }
            }
        }
    }
    return {CreateObject,addToArray,addTodo}
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
            if (array[i].name == "All todos" ){

            }
            else{
                const optionDOM = document.createElement("option");
                optionDOM.value = array[i].name;
                optionDOM.textContent = array[i].name;
                projectChoices.appendChild(optionDOM);
            }
            
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

        const SeeAllButtonDOM = document.createElement("button");
        SeeAllButtonDOM.classList.add("seeall");
        SeeAllButtonDOM.id = object.name;
        SeeAllButtonDOM.textContent = "See All";
        newProjectDOM.appendChild(SeeAllButtonDOM);

        const addFormDOM = document.createElement("form");
        addFormDOM.id = ("add");
        newProjectDOM.appendChild(addFormDOM);
        
        const labelDOM = document.createElement("label");
        labelDOM.textContent = "To Do:";
        addFormDOM.appendChild(labelDOM);

        const todoSelectDOM = document.createElement("select");
        todoSelectDOM.name="todo";
        todoSelectDOM.id="todo";
        addFormDOM.appendChild(todoSelectDOM);

        for(let i=0;i<projectArray[0].todoArray.length;i++){
            const optionDOM = document.createElement("option");
            optionDOM.value = object.todoArray.title;
            optionDOM.textContent = projectArray[0].todoArray[i].title;
            todoSelectDOM.appendChild(optionDOM);
        }

        const AddButtonDOM = document.createElement("button");
        AddButtonDOM.classList.add("add");
        AddButtonDOM.textContent = "Add";
        AddButtonDOM.type = "submit";
        AddButtonDOM.id = object.name;
        addFormDOM.appendChild(AddButtonDOM);

        





    }
    function displayAllProjects(array){


        for(let y=0;y<array.length;y++){
            const newProjectDOM = document.createElement("div");
            newProjectDOM.classList.add("project");
            projectDisplay.appendChild(newProjectDOM);

            //object.name
            const projectNameDOM = document.createElement("div");
            projectNameDOM.classList.add("name");
            projectNameDOM.textContent = array[y].name;
            newProjectDOM.appendChild(projectNameDOM);

            //top3todo
            const topThreeDOM = document.createElement("div");
            topThreeDOM.classList.add("topthree");
            newProjectDOM.appendChild(topThreeDOM);

            let arrayLength = 0;

            if(array[y].todoArray.length == 0){
                arrayLength = 0;
            }
            else if(array[y].todoArray.length == 1){
                arrayLength = 1;
            }
            else if(array[y].todoArray.length == 2){
                arrayLength = 2;
            }
            else if(array[y].todoArray.length >= 3){
                arrayLength = 3;
            }
            for(let i = 0;i<arrayLength;i++){
                const toDoDOM = document.createElement("div");
                toDoDOM.classList.add("todo"+(i+1));
                topThreeDOM.appendChild(toDoDOM);
                console.log("from here");
                console.log(y);
                console.log(i);
                console.log(array[y]);
                console.log(array[y].todoArray[i]);
                console.log(array[y].todoArray[i].title);
    
                const titleDOM = document.createElement("div");
                titleDOM.classList.add("title");
                titleDOM.textContent = array[y].todoArray[i].title;
                toDoDOM.appendChild(titleDOM);
    
                const dueDOM = document.createElement("div");
                dueDOM.classList.add("due");
                dueDOM.textContent = array[y].todoArray[i].duedate;
                toDoDOM.appendChild(dueDOM);
    
                const detailButtonDOM = document.createElement("button");
                detailButtonDOM.classList.add("detail");
                detailButtonDOM.textContent = "Detail";
                toDoDOM.appendChild(detailButtonDOM);
    
    
            }

            const SeeAllButtonDOM = document.createElement("button");
            SeeAllButtonDOM.classList.add("seeall");
            SeeAllButtonDOM.id = array[y].name;
            SeeAllButtonDOM.textContent = "See All";
            newProjectDOM.appendChild(SeeAllButtonDOM);

            const addFormDOM = document.createElement("form");
            addFormDOM.id = ("add");
            newProjectDOM.appendChild(addFormDOM);
            
            const labelDOM = document.createElement("label");
            labelDOM.textContent = "To Do:";
            addFormDOM.appendChild(labelDOM);

            const todoSelectDOM = document.createElement("select");
            todoSelectDOM.name="todo";
            todoSelectDOM.id=array[y].name;
            addFormDOM.appendChild(todoSelectDOM);

            for(let i=0;i<array[0].todoArray.length;i++){
                const optionDOM = document.createElement("option");
                optionDOM.value = array[0].todoArray[i].title;
                optionDOM.textContent = array[0].todoArray[i].title;
                todoSelectDOM.appendChild(optionDOM);
            }

            const AddButtonDOM = document.createElement("button");
            AddButtonDOM.classList.add("add");
            AddButtonDOM.textContent = "Add";
            AddButtonDOM.id = array[y].name;
            AddButtonDOM.type = "submit";
            addFormDOM.appendChild(AddButtonDOM);

        }

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
    function seeAll(object){
        //delete old info
        projectDetailDOM.innerHTML="";

        //project name
        const seeAllDOM = document.createElement("div");
        seeAllDOM.classList.add("name");
        seeAllDOM.textContent = "Project : " +  object.name;
        projectDetailDOM.appendChild(seeAllDOM);

        //toDos

        for(let i = 0;i<object.todoArray.length;i++){
            const toDoDOM = document.createElement("div");
            toDoDOM.classList.add("todo"+i);
            projectDetailDOM.appendChild(toDoDOM);

            const titleDOM = document.createElement("div");
            titleDOM.classList.add("title");
            titleDOM.textContent = object.todoArray[i].title;
            toDoDOM.appendChild(titleDOM);

            const dueDOM = document.createElement("div");
            dueDOM.classList.add("due");
            dueDOM.textContent = object.todoArray[i].duedate;
            toDoDOM.appendChild(dueDOM);


        }

      
    }
    
    return{add,detail,displayAllProjects,seeAll}
})();
//reading storage 
let toDoArray = Storage.getLocalStore("todo");
if(toDoArray == null){toDoArray =[]};
let projectArray = Storage.getLocalStore("project");
if(projectArray == null){projectArray =[{name:"All todos",todoArray:toDoArray}]};

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

        let i=0

        if(toDoArray.length == 0){
            i=5;
        }
        else if(toDoArray.length == 1){
            i=4;
        }
        else if(toDoArray.length == 2){
            i=3;
        }
        else if(toDoArray.length == 3){
            i=2;
        }
        else if(toDoArray.length == 4){
            i=1;
        }
        else if(toDoArray.length >= 5){
            i=0;
        }
        

        
        for(i;i<5;i++){
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
    return{displaySidebarTopFive,displayProjectsAll}
})();




//display upcoming todos on sidebar
//UpcomingToDos.displaySidebarTopFive();
console.log(toDoArray);

if(projectArray.length ==1){

}
else{
    //add project names to todoForm
    Form.addProjects(projectArray);
    //display all projects on page load
    ProjectDisplay.displayAllProjects(projectArray);
}




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

        

        //refresh upcoming to-dos
        UpcomingToDos.displaySidebarTopFive();

        //add todo object to project selected
        let projectName = projectChoices.value;
        ProjectData.addTodo(formInputs,projectName);
        //store newproject data
        Storage.setLocalStore(projectArray,"project")

        //delete old page and refresh lists
        Form.clearToDoForm();
    }
});


//adding a project
const projectFormSubmitButtonDOM = bodyDOM[3].childNodes[7].childNodes[3].childNodes[5];
projectFormSubmitButtonDOM.addEventListener("click",(e)=>{
    e.preventDefault();
    let projectName = projectNameInputDOM.value
    if (projectName == "") {
        alert("Project Name must be filled out");
    }
    else {
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
    }
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
        //get just that project object
        function findProject(project) {
            return project.name === projectName;
          }
        let selectedProject = projectArray.find(findProject);
        //display all todos 
        ProjectDisplay.seeAll(selectedProject);

    });

});

//see all buttons
const addButtons = document.querySelectorAll(".add")
addButtons.forEach((button)=>{ 
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        //button id = project name
        let projectName = e.target.id;
        console.log("project clicked");
        console.log(projectName);

        //select selected
        const selectedDOM = document.querySelector("select[id='"+projectName+"']");
        
        let toDoTitle=selectedDOM.value;
        console.log("to do name");
        console.log(toDoTitle);
        //change project in todo
        

        let toDoArrayTest = toDoArray.map((toDo)=>{
            if(toDo.title ==toDoTitle){
                toDo.project = projectName;
                console.log("the matched array is now");
                console.log(toDo);
            }
        });
        console.log("to do array now");
        console.log(toDoArrayTest)
        //store toDoArray   
        
            
        
        



        //add todo to project

        
        /*//get just that project object
        function findProject(project) {
            return project.name === projectName;
          }
        let selectedProject = projectArray.find(findProject);
        //display all todos 
        ProjectDisplay.seeAll(selectedProject);*/

    });

});


