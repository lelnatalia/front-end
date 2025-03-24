<?php
$response = array(
    "status" => "success",
    "message" => "Data has been processed successfully."
);

// Set the header to indicate the content type as JSON
header('Content-Type: application/json');

// Encode the array to JSON and send it as a response
echo json_encode($response);
?>