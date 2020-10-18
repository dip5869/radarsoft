<?php
$projectname = $_POST['name'];
// Create board
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.trello.com/1/boards/?key=0025f95bb5bca84d5ab9d9e678e008f2&token=958dbce737ba8bd2fb261787232ef165185a189871e9e90f64ad996fe1018b64&name='.$projectname.'');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);
echo $result;
// Create board ends here

