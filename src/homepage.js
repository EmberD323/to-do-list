
const loadHome = (function(){
    const contentDOM = document.querySelector(".content");
    
        //header
        const headerDOM = document.createElement("div");
        headerDOM.classList.add("header");
        contentDOM.appendChild(headerDOM);

            const tab1DOM = document.createElement("div");
            tab1DOM.classList.add("tab");
            tab1DOM.textContent = "To-dos";
            headerDOM.appendChild(tab1DOM);

            const tab2DOM = document.createElement("div");
            tab2DOM.classList.add("tab");
            tab2DOM.textContent = "Projects";
            headerDOM.appendChild(tab2DOM);

        //sidebar
        const sidebarDOM = document.createElement("div");
        sidebarDOM.classList.add("sidebar");
        contentDOM.appendChild(sidebarDOM);

            const userinfoDOM = document.createElement("div");
            userinfoDOM.classList.add("userinfo");
            sidebarDOM.appendChild(userinfoDOM);

                const imageDOM = document.createElement("div");
                imageDOM.classList.add("image");
                imageDOM.textContent = "icon";
                userinfoDOM.appendChild(imageDOM);

                const nameDOM = document.createElement("div");
                nameDOM.classList.add("name");
                nameDOM.textContent = "Ember";
                userinfoDOM.appendChild(nameDOM);

            const todoDOM = document.createElement("div");
            todoDOM.classList.add("todo");
            sidebarDOM.appendChild(todoDOM);

                const heading1DOM = document.createElement("div");
                heading1DOM.classList.add("heading");
                heading1DOM.textContent = "My upcoming to-dos";
                todoDOM.appendChild(heading1DOM);
                let toDoStorage = JSON.parse(localStorage.getItem("todo"));
                //order by date
                toDoStorage.sort((a,b)=>{
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
                console.log("Ordered");
                console.log(toDoStorage);
            

                for(let i=0;i<5;i++){
                    const listDOM = document.createElement("div");
                    listDOM.classList.add("list");
                    todoDOM.appendChild(listDOM);

                    const listTitleDOM = document.createElement("div");
                    listTitleDOM.classList.add("title");
                    listTitleDOM.textContent = toDoStorage[i].title;
                    listDOM.appendChild(listTitleDOM);

                    const listDueDateDOM = document.createElement("div");
                    listDueDateDOM.classList.add("title");
                    listDueDateDOM.textContent = toDoStorage[i].duedate;
                    listDOM.appendChild(listDueDateDOM);
                    
                }
            const projectDOM = document.createElement("div");
            projectDOM.classList.add("project");
            sidebarDOM.appendChild(projectDOM);

                const addbutton2DOM = document.createElement("button");
                addbutton2DOM.classList.add("add");
                addbutton2DOM.textContent = "+";
                projectDOM.appendChild(addbutton2DOM);

                const heading2DOM = document.createElement("div");
                heading2DOM.classList.add("heading");
                heading2DOM.textContent = "My projects";
                projectDOM.appendChild(heading2DOM);

                const list2DOM = document.createElement("div");
                list2DOM.classList.add("list");
                list2DOM.textContent = "List of 5 projects";
                projectDOM.appendChild(list2DOM); 

        //body 
        const bodyDOM = document.createElement("div");
        bodyDOM.classList.add("body");
        contentDOM.appendChild(bodyDOM);

            const formDOM = document.createElement("form");
            formDOM.id = "todo";
            bodyDOM.appendChild(formDOM);

                const titlelabelDOM = document.createElement("label");
                titlelabelDOM.for = "title";
                titlelabelDOM.textContent = "Title";
                formDOM.appendChild(titlelabelDOM);
                const titleinputDOM = document.createElement("input");
                titleinputDOM.type = "text";
                titleinputDOM.id = "title";
                titleinputDOM.name = "title";
                formDOM.appendChild(titleinputDOM);
                
                const descriptionlabelDOM = document.createElement("label");
                descriptionlabelDOM.for = "description";
                descriptionlabelDOM.textContent = "Description";
                formDOM.appendChild(descriptionlabelDOM);
                const descriptioninputDOM = document.createElement("textarea");
                descriptioninputDOM.id = "description";
                descriptioninputDOM.name = "description";
                formDOM.appendChild(descriptioninputDOM); 

                const datelabelDOM = document.createElement("label");
                datelabelDOM.for = "duedate";
                datelabelDOM.textContent = "Due date";
                formDOM.appendChild(datelabelDOM);
                const dateinputDOM = document.createElement("input");
                dateinputDOM.type = "date";
                dateinputDOM.id = "duedate";
                dateinputDOM.name = "duedate";
                formDOM.appendChild(dateinputDOM);

                const priorityDOM = document.createElement("fieldset");
                formDOM.appendChild(priorityDOM);

                    const legendDOM = document.createElement("legend");
                    legendDOM.textContent = "Priority";
                    priorityDOM.appendChild(legendDOM);

                    const option1DOM = document.createElement("div");
                    priorityDOM.appendChild(option1DOM);

                        const highlabelDOM = document.createElement("label");
                        highlabelDOM.for = "high";
                        highlabelDOM.textContent = "High";
                        option1DOM.appendChild(highlabelDOM);
                        const highinputDOM = document.createElement("input");
                        highinputDOM.type = "radio";
                        highinputDOM.id = "high";
                        highinputDOM.name = "priority";
                        highinputDOM.value = "high";
                        highinputDOM.checked = true;
                        option1DOM.appendChild(highinputDOM);

                    const option2DOM = document.createElement("div");
                    priorityDOM.appendChild(option2DOM);

                        const mediumlabelDOM = document.createElement("label");
                        mediumlabelDOM.for = "medium";
                        mediumlabelDOM.textContent = "Medium";
                        option2DOM.appendChild(mediumlabelDOM);
                        const mediuminputDOM = document.createElement("input");
                        mediuminputDOM.type = "radio";
                        mediuminputDOM.id = "medium";
                        mediuminputDOM.name = "priority";
                        mediuminputDOM.value = "medium";
                        option2DOM.appendChild(mediuminputDOM);

                    const option3DOM = document.createElement("div");
                    priorityDOM.appendChild(option3DOM);

                        const lowlabelDOM = document.createElement("label");
                        lowlabelDOM.for = "low";
                        lowlabelDOM.textContent = "Low";
                        option3DOM.appendChild(lowlabelDOM);
                        const lowinputDOM = document.createElement("input");
                        lowinputDOM.type = "radio";
                        lowinputDOM.id = "low";
                        lowinputDOM.name = "priority";
                        lowinputDOM.value = "low";
                        option3DOM.appendChild(lowinputDOM);

                const noteslabelDOM = document.createElement("label");
                noteslabelDOM.for = "notes";
                noteslabelDOM.textContent = "Notes";
                formDOM.appendChild(noteslabelDOM);
                const notesinputDOM = document.createElement("textarea");
                notesinputDOM.id = "notes";
                notesinputDOM.name = "notes";
                formDOM.appendChild(notesinputDOM);

                const projectlabelDOM = document.createElement("label");
                projectlabelDOM.for = "project";
                projectlabelDOM.textContent = "Project (if any)";
                formDOM.appendChild(projectlabelDOM);
                const projectinputDOM = document.createElement("select");
                projectinputDOM.id = "project";
                formDOM.appendChild(projectinputDOM);
                    const defaultinputDOM = document.createElement("option");
                    defaultinputDOM.value = "default";
                    defaultinputDOM.textContent = "No project";
                    projectinputDOM.appendChild(defaultinputDOM);

                    const example1inputDOM = document.createElement("option");
                    example1inputDOM.value = "project1";
                    example1inputDOM.textContent = "Example 1";
                    projectinputDOM.appendChild(example1inputDOM);

                const statusDOM = document.createElement("fieldset");
                formDOM.appendChild(statusDOM);

                    const legend2DOM = document.createElement("legend");
                    legend2DOM.textContent = "Status";
                    statusDOM.appendChild(legend2DOM);

                    const optionaDOM = document.createElement("div");
                    statusDOM.appendChild(optionaDOM);

                        const notlabelDOM = document.createElement("label");
                        notlabelDOM.for = "notstarted";
                        notlabelDOM.textContent = "Not yet started";
                        optionaDOM.appendChild(notlabelDOM);
                        const notinputDOM = document.createElement("input");
                        notinputDOM.type = "radio";
                        notinputDOM.id = "notstarted";
                        notinputDOM.name = "status";
                        notinputDOM.value = "notstarted";
                        notinputDOM.checked = true;
                        optionaDOM.appendChild(notinputDOM);

                    const optionbDOM = document.createElement("div");
                    statusDOM.appendChild(optionbDOM);

                        const startedlabelDOM = document.createElement("label");
                        startedlabelDOM.for = "started";
                        startedlabelDOM.textContent = "Started";
                        optionbDOM.appendChild(startedlabelDOM);
                        const startedinputDOM = document.createElement("input");
                        startedinputDOM.type = "radio";
                        startedinputDOM.id = "started";
                        startedinputDOM.name = "status";
                        startedinputDOM.value = "started";
                        optionbDOM.appendChild(startedinputDOM);

                    const optioncDOM = document.createElement("div");
                    statusDOM.appendChild(optioncDOM);

                        const completelabelDOM = document.createElement("label");
                        completelabelDOM.for = "complete";
                        completelabelDOM.textContent = "Complete";
                        optioncDOM.appendChild(completelabelDOM);
                        const completeinputDOM = document.createElement("input");
                        completeinputDOM.type = "radio";
                        completeinputDOM.id = "complete";
                        completeinputDOM.name = "status";
                        completeinputDOM.value = "complete";
                        optioncDOM.appendChild(completeinputDOM);

                const resetbuttonDOM = document.createElement("button");
                resetbuttonDOM.type = "reset";
                resetbuttonDOM.textContent = "Reset";
                formDOM.appendChild(resetbuttonDOM);

                const addbuttonDOM = document.createElement("button");
                addbuttonDOM.type = "submit";
                addbuttonDOM.textContent = "Submit";
                formDOM.appendChild(addbuttonDOM);

            const projectAreaDOM = document.createElement("div");
            projectAreaDOM.id = "projectArea";
            bodyDOM.appendChild(projectAreaDOM);
                
    return{};
});

//how to use date.fns
format(new Date(2014, 1, 11), "yyyy-MM-dd");
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
export default loadHome;

//27th sept index copy
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
    
    return {createObject,addToArray};
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

        const deleteProjectDOM = document.createElement("button");
        deleteProjectDOM.classList.add("deleteproject");
        deleteProjectDOM.textContent = "Delete Project";
        newProjectDOM.appendChild(deleteProjectDOM);

    }
    function displayAllProjects(array){
        projectDisplay.innerHTML="";
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

                const deleteButtonDOM = document.createElement("button");
                deleteButtonDOM.classList.add("deletetodo");
                deleteButtonDOM.textContent = "Delete";
                toDoDOM.appendChild(deleteButtonDOM);
    
    
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

            const deleteProjectDOM = document.createElement("button");
            deleteProjectDOM.classList.add("deleteproject");
            deleteProjectDOM.textContent = "Delete Project";
            newProjectDOM.appendChild(deleteProjectDOM);

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

const Delete = (function(){
    function todo(toDoIndex,projectIndex,todoIndex){
        //delete from toDoArray
        toDoArray.splice(toDoIndex,1);
        //delete from projectArray 
        projectArray[projectIndex].todoArray.splice(todoIndex,1);
        //store both arrays
        Storage.setLocalStore(toDoArray,"todo")
        Storage.setLocalStore(projectArray,"project")
        //refresh display
        ProjectDisplay.displayAllProjects(projectArray);
        
    }
    function project(projectIndex){
        projectArray.splice(projectIndex,1);
        console.log("after");
        console.log(projectArray);
        Storage.setLocalStore(projectArray,"project");
        ProjectDisplay.displayAllProjects(projectArray);
        
    }
    return{todo,project}
})();
//reading storage 
let toDoArray = Storage.getLocalStore("todo");
if(toDoArray == null){toDoArray =[]};
let projectArray = Storage.getLocalStore("project");
//if(projectArray == null){projectArray =[]};
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

//add project names to todoForm
Form.addProjects(projectArray);
//display all projects on page load
ProjectDisplay.displayAllProjects(projectArray);





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
        let newToDo = ToDoData.createObject();
        //add object to array of todo objects
        ToDoData.addToArray(newToDo);
        //add to storage
        Storage.setLocalStore(toDoArray,"todo");


        //refresh upcoming to-dos
        //UpcomingToDos.displaySidebarTopFive();

        //add todo object to project selected
        let projectName = projectChoices.value;
        //get array with that project name
        ProjectData.addTodo(newToDo,projectName);
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

        //redisplay all projects
        ProjectDisplay.displayAllProjects(projectArray);
    }
});

//detail buttons
const detailButtons = document.querySelectorAll(".detail");

detailButtons.forEach((button)=>{ 
    button.addEventListener("click",(e)=>{
        console.log(e.target.parentNode.childNodes[0].textContent);
        let toDoTitle = e.target.parentNode.childNodes[0].textContent;
        let objIndex = toDoArray.findIndex(obj => obj.title == toDoTitle);
        console.log(objIndex);
        ProjectDisplay.detail(toDoArray[objIndex]);
        
    });

});

//see all buttons
const seeAllButtons = document.querySelectorAll(".seeall")
seeAllButtons.forEach((button)=>{ 
    button.addEventListener("click",(e)=>{
        //button id = project name

        let projectName = e.target.parentNode.childNodes[0].textContent;
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
        //select selected
        const selectedDOM = document.querySelector("select[id='"+projectName+"']");
        let toDoTitle=selectedDOM.value;
        //change project in todo object
        //find index of todo onject in toDoArray
        let objIndex = toDoArray.findIndex(obj => obj.title == toDoTitle);
        //change the project to current project
        toDoArray[objIndex].project = projectName;
        //store toDoArray   
        Storage.setLocalStore(toDoArray,"todo");

        //add todo to project
        ProjectData.addTodo(toDoArray[objIndex],projectName);

        //store projectArray
        Storage.setLocalStore(projectArray,"project");

        //refresh projectDisplay
        ProjectDisplay.displayAllProjects(projectArray);

    });

});

//delete todo buttons
const deleteToDoButtons = document.querySelectorAll(".deletetodo")
deleteToDoButtons.forEach((button)=>{ 
    button.addEventListener("click",(e)=>{
        let toDoTitle = e.target.parentNode.childNodes[0].textContent;
        let toDoArrayIndex = toDoArray.findIndex(obj => obj.title == toDoTitle);
        let projectName = e.target.parentNode.parentNode.parentNode.childNodes[0].textContent;
        let projectArrayIndex = projectArray.findIndex(obj => obj.name == projectName);
        let todoArrayIndex = projectArray[projectArrayIndex].todoArray.findIndex(obj => obj.title == toDoTitle);
        Delete.todo(toDoArrayIndex,projectArrayIndex,todoArrayIndex);
        console.log(projectArray);

    });

});

const deleteprojectButtons = document.querySelectorAll(".deleteproject")
deleteprojectButtons.forEach((button)=>{ 
    button.addEventListener("click",(e)=>{
        let projectName = e.target.parentNode.childNodes[0].textContent;
        let projectArrayIndex = projectArray.findIndex(obj => obj.name == projectName);
        console.log(projectArray);
        console.log(projectArrayIndex);
        Delete.project(projectArrayIndex);

    });

});


//delete from all projects


