<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>VINCI 2014</title>
<link href="main.css" rel="stylesheet" type="text/css">
<link href="SpryAssets/SpryMenuBarHorizontal.css" rel="stylesheet" type="text/css" />
<script src="SpryAssets/SpryMenuBar.js" type="text/javascript"></script>
</head>

<body>
<div id="container">

  <div id="header">
    <div> 
      <img src="banner-top.jpg" />
      <hr style="border-top: 2px dotted #999"/>

      <div>
        <ul id="MenuBar1" class="MenuBarHorizontal">
          <li><a href="?page=main">Home</a></li>
          <li><a href="?page=call">Call for Papers</a></li>			<li><a href="?page=panel">Keynotes</a></li>
          <li><a href="?page=committee">Committee</a></li>
          <li><a href="?page=submission">Submission</a></li>
          <li><a href="?page=program">Program</a></li>
          <li><a href="?page=registration">Registration</a></li>
          <li><a href="?page=venue">Venue</a></li>
        </ul>
      </div>
      <br class="clearfloat" />

      <hr style="border-top: 2px dotted #999"/>
      <img src="banner-top-down3.jpg" />

    </div>
  </div>  
  <!-- end #header -->

<div id="mainContent">
<?php 
	$page=$_GET['page'];
	if ($page == "") include 'main.php';  else
	include ("$page.php"); 
?>
</div>
<!-- end #mainContent -->

<br class="clearfloat" />
<hr style="border-top: 2px dotted #999"/>
  <div id="footer">
<?php 
	include 'footer.php'; 
?>
  </div>
  <!-- end #footer -->

<!-- end #container --></div>

<script type="text/javascript">
var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgDown:"SpryAssets/SpryMenuBarDownHover.gif", imgRight:"SpryAssets/SpryMenuBarRightHover.gif"});
</script>

</body>
</html>
