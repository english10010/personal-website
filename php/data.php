 <?php
     class Resume{
         public $title;
         public $content;
     }

     $rsm1 = new Resume();
     $rsm1->title="contact information";
     $rsm1->content="Name: Chen Lu<br/>Email Address: clu105@syr.edu<br/>LinkIn: https://www.linkedin.com/in/chen-lu-814bb0111";

     $rsm2 = new Resume();
     $rsm2->title="contact information";
     $rsm2->content="315-543-5608";


     $advert = array(
             $rsm1
          );
     echo json_encode($advert);
 ?>