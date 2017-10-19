<?php
$sql = "SELECT * FROM messages ORDER BY id DESC LIMIT 10";

require_once("config.php");
require_once("sql.php");
$results = sql::select($sql);

if($results != null) {
	foreach($results as $result) {
		echo "\n". $result['username']. ": ". $result['content'];
	}
}
?>