/*
xmlhttp.onreadystatechange = function() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		document.getElementById("ajax_chat").innerHTML = xmlhttp.responseText;
	}

	string = document.getElementById("ajax_chat").innerHTML;
	xmlhttp.open("GET","ajax_loader.php?id="+string+"&blabla="+Math.random(),true);
	xmlhttp.send();
};


function loadXMLDoc() {
	if(window.XMLHttpRequest) {
		{
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		}
		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("ajax_chat").innerHTML = xmlhttp.responseText;
			}
		};
		string = document.getElementById("ajax_chat").innerHTML;
		xmlhttp.open("GET", "ajax_loader.php?id="+string+"&blabla="+Math.random(),true);
		xmlhttp.send();
	}
}

	function showLikes(id)
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			alert(this.responseText);
		}
	};

	xhttp.open("GET", "js/ajax/getLikes.php?id="+ id, true);
	xhttp.send();
}
*/

function loadMessages() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			document.getElementById("messages").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "src/getMessages.php", true);
	xhttp.send();
}

window.onload = function() {
	setInterval(function() {
		/*var test = "<?php echo $numberOfMessages ?>";
		alert(test);*/
		loadMessages();
	}, 3000);
};

$(document).ready(function() {
	/*
	$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});
	*/

	/*
	$("#content").change(function() {
		var length = $("#content").val().length;
		$("#charCount").html(length);
	});
	*/

	$("#content").on("input", function() {
		var length = $("#content").val().length;
		$("#charCount").html(length);

		if(length > 140) {
			$("#charCount").css("color", "#f00");
		} else {
			$("#charCount").css("color", "#000");
		}
	});
});

