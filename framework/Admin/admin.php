<?php 

 $error =NULL;
  if (isset ($_POST['submit'])){


    //Get From data
     $user = $_POST['username'];
     $mail  = $_POST['email'];
     $pass = $_POST['password'];
     $confirm = $_POST['confirm'];

     
    
 
     if(strlen ($user) < 5 ){
       $error = " Your Username must be at least 5 characters";
       echo $error;
       }
       elseif($pass!=$confirm){
         $error ="The passwords do not match";
         echo $error;
       }
       else{
         //Form is Valid
 
         //Connect to Database
         $db_name="peep";
 
        $mysqli =NEW mysqli ('localhost','root','',$db_name) or die ("error:".mysqli_error($mysqli));
 
         //Clean Data
         $user = $mysqli->real_escape_string($user);
         $mail = $mysqli->real_escape_string($mail);
         $pass = $mysqli->real_escape_string($pass);
         $confirm = $mysqli->real_escape_string($confirm);
         
   
 
         //generate key
         $key = md5( time ().$user);
         $insert=mysqli_query($mysqli,"insert into login  values ('','$user','$mail','$pass','$key') ") or die (mysqli_error($mysqli));
        
         $success=mysqli_query($mysqli,$insert);
         if($insert){
           echo "Successfully inserted";
         }
         else{
           echo "FAILED";
         }
 
         echo $key;
         
       }
  }
?>