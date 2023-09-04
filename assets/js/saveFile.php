<?php
// Check if the content is received from the POST request
if (isset($_POST['content'])) {
    // Content received from the client
    $content = $_POST['content'];

    // File path where you want to save the text file (within the src folder)
    $filePath = 'src/savedFile.txt';

    // Save the content to the file
    if (file_put_contents($filePath, $content) !== false) {
        // File saved successfully
        echo 'File saved successfully.';
    } else {
        // Error saving the file
        echo 'Error saving the file.';
    }
} else {
    // Content not received
    echo 'Content not received.';
}
?>
