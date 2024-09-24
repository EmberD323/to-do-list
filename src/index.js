import "./styles.css";

import { compareAsc, format } from "date-fns";
import loadHome from "./homepage.js";

//DOM selectors
const DOM = document.querySelector(".content").childNodes;
const bodyDOM = DOM[3].childNodes;
const formDOM = bodyDOM[0].childNodes;
console.log("Form DOM");
console.log(formDOM);
const prioritysDOM = formDOM[6].childNodes;
const prioritysOpt1DOM = prioritysDOM[1].childNodes[1];
const prioritysOpt2DOM = prioritysDOM[2].childNodes[1];
const prioritysOpt3DOM = prioritysDOM[3].childNodes[1];

const statusDOM = formDOM[11].childNodes;
const statusOpt1DOM = statusDOM[1].childNodes[1];
const statusOpt2DOM = statusDOM[2].childNodes[1];
const statusOpt3DOM = statusDOM[3].childNodes[1];




const ToDoData = (function(){
    function createObject() {
        let newTitle = formDOM[1].value;
        let newDescription = formDOM[3].value;
        let newDueDate = formDOM[5].value;
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
        let newNotes = formDOM[8].value;
        let newProject = formDOM[10].value;
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
    function removeFromArray(number){
        return toDoArray.splice(number,1);
    }
    
    return {createObject,addToArray,removeFromArray};
})();

const Form = (function(){
    function clearForm(){
        let allInputs1 = [formDOM[1],formDOM[3],formDOM[5],formDOM[8]]
        for(let input of allInputs1){
            input.value=""
        }
        let highPriorityDOM = formDOM[6].childNodes[1].childNodes[1];
        highPriorityDOM.checked = true;

        let notStartedStatusDOM = formDOM[11].childNodes[1].childNodes[1];
        notStartedStatusDOM.checked = true;

        let projectSelectionDOM = formDOM[10].childNodes[0]
        projectSelectionDOM.selected = true;

   }
   return {clearForm};
})();

const Store = (function(){
    function setLocalStore(array){
        const todo = JSON.stringify(array);
        console.log("JSON string saved to local storage");
        console.log(todo);
        localStorage.setItem("todo",todo)

    }
    function getLocalStore(){
        return JSON.parse(localStorage.getItem("todo"));
    }
    return{setLocalStore,getLocalStore}
})();
//submit user input data to local storage
const formSubmitButtonDOM = formDOM[13];


let toDoArray = [];
formSubmitButtonDOM.addEventListener("click",(e)=>{
    e.preventDefault();
    //module to create object
    let formInputs = ToDoData.createObject();
    //method to add to array
    ToDoData.addToArray(formInputs);
    console.log("toDoArray after submit button clicked");
    console.log(toDoArray);
    //store data locally
    Store.setLocalStore(toDoArray);

    //clearform
    Form.clearForm();
    
});

//function factory create todoobject



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