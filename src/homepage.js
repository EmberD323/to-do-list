
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


