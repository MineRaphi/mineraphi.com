<?php
// update.php

// Read JSON payload
$data = json_decode(file_get_contents('php://input'), true);

// Check if the data was received
if ($data === null) {
    // Invalid JSON
    http_response_code(400);
    echo "Invalid JSON data";
    exit;
}

// Your logic to handle the webhook and update the repo
// Example: Log the payload to a file
file_put_contents('/var/www/mineraphi/webhook.log', print_r($data, true), FILE_APPEND);

// You can also run a shell script or execute Git commands to pull the latest changes:
exec('cd /var/www/mineraphi && git pull https://github.com/MineRaphi/mineraphi.com main');

// Respond with success
http_response_code(200);
echo "Webhook processed successfully";
?>