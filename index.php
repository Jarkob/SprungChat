<?php

require_once("src/config.php");

require_once("templates/header.html");
?>

<div id="messages">
	
</div>

<form action="index.php" method="post">
	<input type="text" name="username" value="<?=htmlspecialchars($_POST['username'])?>">
	<input type="text" name="content">
	<button onclick="loadMessages()">Posten</button>
</form>

<?php

if(isset($_POST['content'])){ 

	if(empty($_POST['username']) || empty($_POST['content'])){ 
    echo '<script>alert("Bitte Username oder Nachricht eingeben")</script>'; 
} else { 
    //Variablen definieren und mit "POST" Daten füllen (Mit htmlspecialchars filtern..) 
    $username = htmlspecialchars($_POST['username']); 
    $eintrag = htmlspecialchars($_POST['content']); 

	$sql = "INSERT INTO messages (username, content) values (:username, :content)";
    $params = array(":username" => $username, ":content" => $content);
    sql::exe($sql, $params);

} 


require_once("templates/footer.html");

?>