<?php
	require_once "include/database.php";
	require_once "include/functions.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Новости</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/news.css">
</head>
<body>
	<div class="header__bg"></div>
	<header class="header">
		<div class="container">
			<div class="nav">
				<a href="index.html"><img src="img/logo-game.svg" alt="Jack In The High Tower" class="logo"></a>
			<div class="GameName">
				Jack in The Dark Tower
			</div>
			<div class="menu">
				<a href="news.php">
					<div class="button-news">
						Новости
					</div>
				</a>
				<div class="dropdown">
	    				<a href="training.html" class="dropbtn">
	    					Об игре 
	    				</a>
	   				<div class="dropdown-content">
	      				<a href="training.html">Обучение</a>
	      				<a href="media.html">Медиа</a>
	    			</div>
	  			</div>
	  			<div class="dropdown">
	    				<a href="community.html" class="dropbtn">
	    					Общение
	    				</a>
	   				<div class="dropdown-content">
	      				<a href="support.html">Поддержка</a>
	      				<a href="community.html">Социальные сети</a>
	    			</div>
	  			</div>
			</div>
			</div>
		</div>
	</header>
	<section class="main">
		<div class="container">
			<div class="section__name">
				<h1>Новости</h1>
				<img src="img/red-arrow.svg" alt="Arrow" class="
					arrow">
			</div>
			<?php 
				$news = get_news();
			?>
			<?php foreach($news as $new): ?>
			<?php 
				$unixDate = strtotime($new['date']);
				$normalDate = date('d.m.Y', $unixDate); 
			?>
			<div class="news">
				<div class="one__new">
					<img src="<?=$new['image']?>" alt="Картинка новости" class="news__picture">
					<div class="news__wrap">
						<h2 class="news__name"><?=$new['title']?></h2>
						<div class="news__text"><?=$new['full_text']?></div>
						<div class="news__date"><?=$normalDate ?></div>
					</div>
				</div>
			</div>
			<?php endforeach; ?>
		</div>
	</section>
	<footer>
		<div class="container">
			<div id="footer" class="footer">
				<ul class="footer-menu">
					<li>
						<a href="news.php">
							Новости
						</a>
					</li>	
					<li>
						<a href="training.html">
							Об игре
						</a>
						<ul class="footer-submenu">
							<li>
								<a href="training.html">
									Обучение
								</a>
							</li>
							<li>
								<a href="media.html">
									Медиа
								</a>
							</li>
						</ul>
					</li>	
					<li>
						<a href="community.html">
							Общение
						</a>
						<ul class="footer-submenu">
							<li>
								<a href="support.html">
									Поддержка
								</a>
							</li>
							<li>
								<a href="community.html">
									Социальные сети
								</a>
							</li>
						</ul>
					</li>	
				</ul>
				<div class="rights">©2020 All rights reserved.</div>
			</div>
		</div>
	</footer>
</body>
</html>