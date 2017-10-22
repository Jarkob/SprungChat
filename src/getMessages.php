<?php

$sql = "SELECT * FROM messages ORDER BY id DESC LIMIT 20";


require_once("config.php");

$results = sql::exe($sql);

if($results != null) {
	for($i = sizeof($results) - 1; $i >= 0; $i--) {
		?>
		<div>
			<?= $results[$i]['username']?>: <?=$results[$i]['content']?>
		</div>
		<?php
	}
}

?>