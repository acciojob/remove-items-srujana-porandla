//your JS code here. If required.

var colorSelect = document.getElementById("colorSelect");
var removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');


removeButton.addEventListener('click', function() {

    var selectedIndex = colorSelect.selectedIndex;


    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
});

