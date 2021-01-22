<?php
	
	$link = mysqli_connect('localhost','kostya99_website','Vfvf89043811078gfgf','kostya99_website');

	if(mysqli_connect_errno())
	{
			echo 'Ошибка в подключении к базе данных ('.mysqli_connect_errno().'): '.mysqli_connect_error();
			exit();
	}
	
		
?>