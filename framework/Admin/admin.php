   <?php
  $error =NULL;      
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                   
    function get_data() {
      $file_name='classIdDataset'. '.json';
      $PrevClass = $_POST['prev-class'];
      $AddId  = $_POST['addId'];
      $TabletClass = $_POST['tablet-c'];
      $MobileClass = $_POST['mobile-c'];
    //Coditions to ensure no empty Inputs and Short attributes
 
    if (file_exists("$file_name")) {
      $current_data=file_get_contents("$file_name");
      $array_data=json_decode($current_data, true);
                                 
        $extra=array(
            'previousClass' => $PrevClass,
            'tabletClass' => $TabletClass,
            'mobileClass' => $MobileClass,
            'tabletId' => $AddId,
            'mobileId' => $AddId,
              );
            $array_data[]=$extra;
            echo "file exist<br/>";
            return json_encode($array_data);
        } else {
            $newdata=array();
            $newdata[]=array(
              'previousClass' => $PrevClass,
              'tabletClass' => $TabletClass,
              'mobileClass' => $MobileClass,
              'tabletId' => $AddId,
              'mobileId' => $AddId,
                );
            echo "file not exist<br/>";
            return json_encode($newdata);
    }
}
      $file_name='classIdDataset'. '.json';
        
      if(file_put_contents("$file_name", get_data())) {
          echo 'success';
      }                
      else {
          echo 'There is some error';                
      }
  }
         
  ?>