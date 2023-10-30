<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <title>ポートフォリオ</title>
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/recet.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
    <?php wp_head(); ?>
</head>
<body onselectstart="return false;" onmousedown="return false;">
    <!-- ヘッダー -->
    <header class="header">
        <div class="header-logo">
            <a href="/"><img src="/wp-content/uploads/2023/10/logo-1.png" alt="Erika's ポートフォリオ"></a>
        </div>
        <nav class="header_nav">
            <ul class="header_nav-lists">
                <li class="header_nav-item"><a href="/works/">WORK</a></li>
                <li class="header_nav-item"><a href="#services">SERVICE</a></li>
                <li class="header_nav-item"><a href="/about/">ABOUT</a></li>
                <li class="header_nav-item">
                    <a href="/contact/" class="pc-contactLink">CONTACT</a>
                    <a href="#contact"class="sp-contactLink"><img src="/wp-content/uploads/2023/10/sp-contact.png" alt="お問い合わせボタン"></a>
                </li>
            </ul>
        </nav>
</header>