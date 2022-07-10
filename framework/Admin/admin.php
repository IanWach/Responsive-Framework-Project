<?php 

 $error =NULL;
  //Code to check if the submit form is clicked
  if (isset ($_POST['submit'])){

    //Get From data
     $PrevClass = $_POST['prev-class'];
     $AddId  = $_POST['addId'];
     $TabletClass = $_POST['tablet-c'];
     $MobileClass = $_POST['mobile-c'];
    //Coditions to ensure no empty Inputs and Short attributes
 
     if(strlen ($PrevClass) < 3 ){
       $error = " Your Class Name must be at least 5 characters";
       echo $error;
       }
       elseif( strlen($AddId) < 5){
         $error ="The ID Name is Too Short";
         echo $error;
       }
       elseif(strlen($TabletClass||$MobileClass)<10){
        $error = "The Mobile Class or Tablet Class is to Short (at least 10 characters";
       }
       else{
         //Form is Valid
 
         //Connect to Database
         $db_name="IntraResp";
 
        $mysqli =NEW mysqli ('localhost','root','',$db_name) or die ("error:".mysqli_error($mysqli));
 
         //Clean Data
         $PrevClass = $mysqli->real_escape_string($PrevClass);
         $AddId = $mysqli->real_escape_string($AddId);
         $TabletClass = $mysqli->real_escape_string($TabletClass);
         $MobileClass = $mysqli->real_escape_string($MobileClass);
         
   
 
         //generate key
         $key = md5( time ().$AddId);
         $insert=mysqli_query($mysqli,"insert into login  values ('','$PrevClass','$AddId','$TabletClass','$MobileClass','$key') ") or die (mysqli_error($mysqli));
        
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