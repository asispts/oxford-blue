<?php get_header(); ?>
<div class="header-bg" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/bg.webp' ?>);">
    <div class="boxed header-container">
        <?php get_template_part('layout/common/main-header'); ?>
        <div class="breadcrumb px-1">
            <?php
            if ( function_exists('yoast_breadcrumb') ) {
                yoast_breadcrumb();
            }
            ?>
        </div>
    </div>
</div>

<main class="boxed error-wrapper">
    <div class="error-box">
        <p class="error-title mb-4">Maaf, halaman yang anda tuju tidak ditemukan.</p>
        <p>Salah satu yang dapat anda lakukan selanjutnya:</p>
        <ol>
            <li>Periksa kembali apakah alamat URL yang anda masukan sudah benar?</li>
            <li>Kembali ke <a href="<?php echo esc_url(home_url()) ?>">halaman utama</a></li>
            <li>Gunakan kolom pencarian untuk mencari yang anda inginkan</li>
        </ol>
    </div>
</main>

<?php get_template_part('layout/common/base-footer'); ?>
