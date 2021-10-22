<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $product = htmlspecialchars($_POST['product']);
  $city = htmlspecialchars($_POST['city']);

  if(!empty($email) && !empty($phone)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "ragubyrenuga2000@gmail.com"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nPhone No: $phone\nEnquiry For: $product\n\nLocation: $city\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>
