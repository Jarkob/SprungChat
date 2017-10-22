<?php
require_once("config.php");
require_once("sql.php");

class messages
{
	public static function getNumberOfMessages()
	{
		$sql = "SELECT COUNT(*) FROM messages";
		$result = sql::exe($sql);
		return $result[0]['COUNT(*)']; // Was ist das wohl für 1 Format?
	}
}
?>