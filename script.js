const DEBUG = 1;

function toggleSections() {
    var sections = document.querySelectorAll('.code-section');
    sections.forEach(function (section) {
        section.style.display = 'block';
    });

    // Hide the dropdown link after it's clicked
    document.getElementById('dropdownLink').style.display = 'none';
}

function toggleCodeSection(sectionNumber) {
    var sections = document.querySelectorAll('.code-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var sectionToShow = document.getElementById('code-section-' + sectionNumber);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }

    // Hide the button for section 2 after it's clicked
    if (sectionNumber === 2) {
        document.getElementById('section2Button').style.display = 'none';
    }
}

var draggableElements = document.querySelectorAll(".draggable");
var droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
});

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
    if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");
    }
}

function dragOver(event) {
    if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
        event.preventDefault();
    }
}

function dragLeave(event) {
    if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
        event.target.classList.remove("droppable-hover");
    }
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("droppable-hover");
    var data = event.dataTransfer.getData('text');
    if (!event.target.hasChildNodes() || event.target.childNodes[0].nodeName == "#text" && event.target.childNodes.count == 1) {
        event.target.appendChild(document.getElementById(data));
    }
    else if (DEBUG == true) {
        console.log("hmm miks miks miks")
        console.log(event.target.childNodes[0].nodeName)
        console.log(event.target.childNodes)
    }
}