<?php

     $conn = mysql_connect('50.62.209.191','english10010','Luchen_19921013');

     echo $conn;
     echo mysql_error();
     /*if (!$conn){ die('could not connect') }*/

     $db_selected = mysql_select_db('english10010_database', $conn);

     echo "db:".$db_selected;

     /*$query = "SELECT * FROM Resume";
     $result = mysql_query($query);

     echo "result:".$result;*/

?>