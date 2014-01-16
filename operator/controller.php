<?php 
	require_once('aoe.php');
	$aoe = new Aoe();
	/*
	* Array $config(configuration) for the Datas
	* Building Connection to the Database
	* Selecting of Database
	*/
	$config = array('file' => 'localhost', 
	               'username' => 'root', 
	               'password' => '', 
	               'database' => 'E_exam');

	mysql_connect($config['file'], 
	              $config['username'], 
	              $config['password']);
	mysql_select_db($config['database']);

         $request = isset($_POST['action'])?$_POST['action']:"";
         

 ?>
