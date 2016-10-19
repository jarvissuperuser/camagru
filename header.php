<?php

if (!isset($_SESSION['login'])) {
	$h1 = "Please Sign up or Login";
} elseif (isset($_SESSION['login'])) {
	$h1 = "Welcome ";
	$show_menu = true;
}

