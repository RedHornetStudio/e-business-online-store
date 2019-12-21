<?php

$get = '';
if(isset($_GET['get'])) {
    
    $get = trim($_GET['get']);

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js"></script>
    <title>Online Store</title>
</head>
<body onload="getDetails('<?php echo htmlspecialchars($get); ?>')">
    <header>
        <nav class="nav-header-main clearfix">         
            <ul>
                <li style="margin: 6px"><a href="index.html" style="padding: 0px; background-color: rgb(58, 58, 58);">
                    <img src="img/RedHornetLogo.png" alt="Red Hornet Logo" height="40px"></a></li>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="details-section">
            
        </section>
    </main>
    <footer>
        <div>Copyright 2019 Red Hornet Studio</div>
    </footer>
</body>
</html>