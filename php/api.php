<?php
/*
 * @copyright
 * Please keep the credits, respect the developers, this text didn't affect please respect..
 *
 * DarkWind - for bot and api script
 * 2013 Chris Churchwell for RCON class
 *
*/

include_once("rcon.php");  
$command    = $_GET['command'];
$server_ip    = $_GET['server_ip'];
$server_port    = $_GET['server_port'];
$server_pw    = $_GET['server_pw'];
$timeout = 3;

$rcon = new Rcon($server_ip, $server_port, $server_pw, $timeout);
if ($server_ip == null || $server_port == null || $server_pw == null) {

    echo "Invalid command. <br>";
    return 0;
}
if ($rcon->connect()) {
	$rcon->send_command("$command");
	echo preg_replace("/§./", "", $rcon->get_response()); //remove some invalid char
}
?>