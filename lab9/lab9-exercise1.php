<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
$date = date("l,F d,Y H:i:s");
echo "This page was generated: " . $date . "<hr/>";
$remaining = 365 + date("L") - date("z");
        echo "There are ". $remaining . " days left in the year";
?>
</body>
</html>