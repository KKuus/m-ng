function toggleSections() {
    var sections = document.querySelectorAll('.code-section');
    sections.forEach(function(section) {
        section.style.display = 'block';
    });
    
    // Hide the dropdown link after it's clicked
    document.getElementById('dropdownLink').style.display = 'none';
}

function toggleCodeSection(sectionNumber) {
    var sections = document.querySelectorAll('.code-section');
    sections.forEach(function(section) {
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

function toggleContainer(id) {
    var container = document.getElementById(id);
    container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
    
    // Show container2 when container1 is clicked
    if (id === 'container1') {
        var container2 = document.getElementById('container2');
        container2.style.display = 'block';
    }
}
