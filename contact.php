<?php
// require ReCaptcha class

// configure
$from = $_POST['email']; 
$sendTo = 'ovais@biznic.com';
$subject = 'New message from contact form';
$fields = array('name' => 'FirstName','lastname' => 'Lastname','phone' => 'Phone', 'email' => 'Email','selection' => 'Customer or Not?', 'message' => 'Message'); 
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';
//ENTER YOUR SECRET KEY
$recaptchaSecret = '6LcnN-0UAAAAAFF3ApZNYZpsv95pP269BxoXegvQ';

// let's do the sending

try
{
    if (!empty($_POST)) {


        
        $emailText = "You have new message from contact form\n=============================\n";

        foreach ($_POST as $key => $value) {

            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }
        

        $headers = array('Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $from,
            'Return-Path: ' . $from,
        );

        mail($sendTo, $subject, $emailText, implode("\n", $headers));

        $responseArray = array('type' => 'success', 'message' => $okMessage);
    }
}
catch
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}

