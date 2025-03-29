<?php
$message=$_POST['message'];
$response = array(
    "status" => "success",
   // "message" => "<b style=color:green">Data has been processed successfully.</b>"
   "message" => "Data has NOT been processed.",
   "message_recieved" => "$message"
);

// Set the header to indicate the content type as JSON
header('Content-Type: application/json');

// Encode the array to JSON and send it as a response
echo json_encode($response);
?>