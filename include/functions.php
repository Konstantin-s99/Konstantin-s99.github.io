<?php
	
	function get_news() {

		global $link;

		$sql = "SELECT * FROM news ORDER BY id DESC";

		$result = mysqli_query($link, $sql);
		
		$news = mysqli_fetch_all($result, MYSQLI_ASSOC);
		
		return $news;
		
	}

?>