
const loadProject = (function(){
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

            const projectAreaDOM = document.createElement("div");
            projectAreaDOM.classList.add("projectArea");
            bodyDOM.appendChild(projectAreaDOM);
                
    return{};
});

export default loadProject;


