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
