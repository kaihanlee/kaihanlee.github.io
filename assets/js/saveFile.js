document.getElementById("saveButton").addEventListener("click", function() {
    // Text content for the file
    const textContent = "This is the content of the text file.";

    // Send an AJAX request to the server to save the file
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "saveFile.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // File has been saved on the server
            alert("File saved successfully.");
        }
    };
    xhr.send("content=" + encodeURIComponent(textContent));
});
