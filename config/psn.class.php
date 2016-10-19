<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of psn
 *
 * @author timothy
 */
class psn {

	public $name;
	public $lname;
	public $email;
	public $pwd;

	public function __construct($n, $l, $e, $p) {
		$this->name = $n;
		$this->lname = $l;
		$this->email = $e;
		$this->pwd = hash("sha256", $p);
	}

}
