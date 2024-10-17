function toggleDropdown() {
    // Get the dropdown content and arrow elements
    var content = document.querySelector('.dropdown-content');
    var arrow = document.querySelector('.arrow');

    // Toggle visibility of the dropdown content
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.classList.add('rotate'); // Rotate the arrow when open
    } else {
        content.style.display = 'none';
        arrow.classList.remove('rotate'); 
    }
}
function toggleDropdown1() {
    // Get the dropdown content and arrow elements
    var content1 = document.querySelector('.dropdown-content1');
    var arrow1 = document.querySelector('.arrow1');

    // Toggle visibility of the dropdown content
    if (content1.style.display === 'none' || content1.style.display === '') {
        content1.style.display = 'block';
        arrow1.classList.add('rotate'); // Rotate the arrow when open
    } else {
        content1.style.display = 'none';
        arrow1.classList.remove('rotate'); 
    }
}