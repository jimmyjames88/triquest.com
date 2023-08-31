<?php
//Import the PHPMailer class into the global namespace
//use PHPMailer\PHPMailer\PHPMailer;
require '../../lib/PHPMailer-5.2.26/PHPMailerAutoload.php';

$out = array('error'=>null);

function uploadFile ($file_field = null, $random_name = false) {
	global $out;
	//Set file upload path
	$path = '../../uploads/'; //with trailing slash
	//Set max file size in bytes
	$max_size = 1000000;
	//Set default file extension whitelist
	$whitelist_ext = array('pdf', 'doc', 'docx', 'odt', 'txt', 'rtf');
	//Set default file type whitelist
	$whitelist_type = array('application/vnd.oasis.opendocument.text', 'application/pdf', 'application/x-pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

	//The Validation
	if (!$file_field) {
		$out['error'][] = "Please specify a valid form field name";
	}
	if (!$path) {
		$out['error'][] = "Please specify a valid upload path";
	}
	if (count($out['error'])>0) {
		return $out;
	}

	//Make sure that there is a file
	if((!empty($_FILES[$file_field])) && ($_FILES[$file_field]['error'] == 0)) {

	// Get filename
	$file_info = pathinfo($_FILES[$file_field]['name']);
	$name = $file_info['filename'];
	$ext = $file_info['extension'];

	//Check file has the right extension
	if (!in_array($ext, $whitelist_ext)) {
		$out['error'][] = "Invalid file Extension";
	}

	//Check that the file is of the right type
	if (!in_array($_FILES[$file_field]["type"], $whitelist_type)) {
		$out['error'][] = "Invalid file Type";
	}

	//Check that the file is not too big
	if ($_FILES[$file_field]["size"] > $max_size) {
		$out['error'][] = "File is too big";
	}


	if (count($out['error'])>0) {
		//The file has not correctly validated
		return $out;
	}

	if (sendMail($_FILES[$file_field], $_POST)) {
	//Success
		return true;
	} else {
		$out['error'][] = "Server Error!";
		return false;
	}

	} else {
		$out['error'][] = "No valid file attached";
		return $out;
	}
}


function sendMail($attachment, $post){

	$form = json_decode(stripslashes($post['jsonForm']));
	$body = '';
	foreach($form as $k => $v){
		if(is_array($v)){
			$vOut = implode($v, ', ');
		} else {
			$vOut = $v;
		}

		$body .= '<p><strong>' . ucfirst($k) . ': </strong>' . $vOut . '</p>';

	}

	$mail = new PHPMailer;
	$mail->AddReplyTo($form->email , $form->name);
	$mail->setFrom('careers@triquestndt.com');
	// $mail->addAddress('info@triquestndt.com');
	// $mail->addAddress('me@james-allen.ca');
	$mail->addAddress('nchevrier@triquestndt.com');
	$mail->addAddress('iwinter@triquestndt.com');
	$mail->isHTML(true);
	$mail->Subject = 'Career Application from website';
	$mail->Body = $body;
	$mail->addAttachment($attachment['tmp_name'], $attachment['name']);

	return $mail->Send();
}

if (isset($_POST)) {

	$file = uploadFile('file', true);
	if (isset($out['error'])) {
		$message = '';
		foreach ($out['error'] as $msg) {
			$message .= '<p>'.$msg.'</p>';
		}
		$status = 'failed';
	} else {
		$message = "File uploaded successfully!!";
		$status = 'success';
	}

	echo json_encode(array(
		'status' => $status,
		'message' => $message
	));
}
?>
