<?php

/**
 * Description of con
 * connects pdo
 * @author timothy
 */
class con {

	public $con;
	public $res;
	public $obr;
	private $DB_NAME = 'camdb';
	private $DB_USER = 'root';
	private $DB_PASSWORD = 'cm9vdDEyMzQ=';
	private $DB_CONNECTION = 'localhost';
	private $DB_DSN;
	private $q;

	public function __construct() {
		$q = file_get_contents('db.qry');
		$dc = $this->DB_CONNECTION;
		$pwd = base64_decode($this->DB_PASSWORD);
		$con = new mysqli($dc, $this->DB_USER, $pwd);
		$con->multi_query($q);
		$con->close();
		$this->getDSN();
		$b = $this->DB_DSN;
		$this->con = new PDO($b, $this->DB_NAME, $pwd);
	}

	public function ins() {
		return 'insert into ';
	}

	public function inval($table, $obj) {
		$q = $this->ins() . $table . " set ";
		$cnt = 0;
		$o = new ArrayObject();
		foreach ($obj as $key => $value) {
			if ($cnt == 0) {
				$q += "$key = :$key";
			} else {
				$q += ",$key = :$key";
			}
			$o["$key"] = $value;
			$cnt++;
		}
		$this->q = $q;
		return $o;
	}

	public function getDSN() {
		$connect_string = "mysql:host=127.0.0.1;";
		$connect_string .= "dbname={$this->DB_NAME};";
		$this->DB_DSN = $connect_string;
	}

	public function suF(psn $pusr) {
		$q = $pusr;
	}

}
