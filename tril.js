<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-lang-key="title">Trilumea - Level Up Your Beauty</title>
    <!-- Memuat Tailwind CSS dari CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Memuat Font Poppins dari Google Fonts (modern dan bersih) -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Memuat Lucide Icons untuk ikon yang bersih dan modern -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <script>
        // Konfigurasi Tailwind CSS untuk warna pink premium dan font Poppins
        tailwind.config = {
            darkMode: 'class', // Mengaktifkan dark mode berdasarkan class 'dark' di <html>
            theme: {
                extend: {
                    // Definisi palet warna Trilumea: Pink Tua, Pink Lembut, Pink Terang (Accent)
                    colors: {
                        'trilumea-dark': '#831843', // Deep Ruby Pink (Pink Tua) - Primary/Heading
                        'trilumea-soft': '#FCE7F6', // Blush Pink (Pink Lembut) - Soft Background
                        'trilumea-accent': '#E91E63', // Bright Pink - Accent/Hover
                        'trilumea-text-dark': '#333333',
                        'trilumea-text-light': '#F9FAFB',
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'], // Menggunakan Poppins
                    },
                }
            }
        }
    </script>

    <style>
        /* CSS Kustom untuk animasi halus (fade-in, slide-up) */
        .animated-element {
            opacity: 0;
            transform: translateY(20px);
            /* Transisi lambat untuk efek halus */
            transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-visible {
            opacity: 1;
            transform: translateY(0);
        }
        /* Styling Header Transparan */
        .header-bg {
            background-color: rgba(255, 255, 255, 0.95);
        }
        .dark .header-bg {
            background-color: rgba(17, 24, 39, 0.95);
        }
        /* Custom Shadow untuk kesan premium */
        .custom-shadow {
            box-shadow: 0 10px 20px -5px rgba(131, 24, 67, 0.1), 0 4px 6px -2px rgba(131, 24, 67, 0.05);
        }
        /* Efek hover elegan pada kartu produk */
        .product-card:hover {
            box-shadow: 0 15px 30px -8px rgba(233, 30, 99, 0.2);
            transform: translateY(-3px);
        }
        .product-card {
            transition: all 0.3s ease-in-out;
        }
    </style>
</head>
<body class="bg-white dark:bg-gray-900 text-trilumea-text-dark dark:text-trilumea-text-light min-h-screen transition-colors duration-500 font-sans">

    <!-- Header & Navigation -->
    <header id="header" class="header-bg sticky top-0 z-50 shadow-md backdrop-blur-sm transition-all duration-300">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <a href="#" class="text-3xl font-bold text-trilumea-dark dark:text-trilumea-accent tracking-wider">
                    Tri<span class="text-trilumea-accent dark:text-trilumea-soft">lumea</span>
                </a>

                <!-- Nav Menu (Desktop) -->
                <nav class="hidden lg:flex space-x-8">
                    <a href="#hero" class="nav-link text-lg font-medium hover:text-trilumea-accent dark:hover:text-trilumea-soft transition-colors duration-300" data-lang-key="navHome">Beranda</a>
                    <a href="#about" class="nav-link text-lg font-medium hover:text-trilumea-accent dark:hover:text-trilumea-soft transition-colors duration-300" data-lang-key="navAbout">Tentang Kami</a>
                    <a href="#services" class="nav-link text-lg font-medium hover:text-trilumea-accent dark:hover:text-trilumea-soft transition-colors duration-300" data-lang-key="navServices">Layanan</a>
                    <a href="#catalog" class="nav-link text-lg font-medium hover:text-trilumea-accent dark:hover:text-trilumea-soft transition-colors duration-300" data-lang-key="navCatalog">Katalog</a>
                    <a href="#testimonials" class="nav-link text-lg font-medium hover:text-trilumea-accent dark:hover:text-trilumea-soft transition-colors duration-300" data-lang-key="navTestimonials">Testimoni</a>
                    <a href="#contact" class="nav-link text-lg font-medium hover:text-trilumea-accent dark:hover:text-trilumea-soft transition-colors duration-300" data-lang-key="navContact">Kontak</a>
                </nav>

                <!-- Utility Icons & Mobile Menu Button -->
                <div class="flex items-center space-x-4">
                    <!-- Language Toggle (ID | EN) -->
                    <button id="lang-toggle" class="p-2 rounded-full hover:bg-trilumea-soft dark:hover:bg-gray-700 transition duration-300">
                        <span class="font-bold text-trilumea-dark dark:text-trilumea-soft" data-lang-key="langBtn">ID | EN</span>
                    </button>

                    <!-- Dark/Light Mode Toggle -->
                    <button id="theme-toggle" class="p-2 rounded-full text-trilumea-dark dark:text-trilumea-soft hover:bg-trilumea-soft dark:hover:bg-gray-700 transition duration-300">
                        <i data-lucide="sun" class="w-6 h-6 transition-all duration-300" id="sun-icon"></i>
                        <i data-lucide="moon" class="w-6 h-6 transition-all duration-300 hidden" id="moon-icon"></i>
                    </button>

                    <!-- Cart Icon (Placeholder) -->
                    <button class="p-2 rounded-full text-trilumea-dark dark:text-trilumea-soft hover:bg-trilumea-soft dark:hover:bg-gray-700 transition duration-300 relative">
                        <i data-lucide="shopping-cart" class="w-6 h-6"></i>
                        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-trilumea-accent rounded-full">0</span>
                    </button>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="lg:hidden p-2 text-trilumea-dark dark:text-trilumea-soft hover:bg-trilumea-soft dark:hover:bg-gray-700 rounded-lg transition duration-300">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-trilumea-soft dark:bg-gray-800 absolute w-full shadow-lg">
            <nav class="flex flex-col p-4 space-y-2">
                <a href="#hero" class="nav-link mobile-nav-link text-trilumea-dark dark:text-white p-2 rounded-lg hover:bg-trilumea-accent/20" data-lang-key="navHome">Beranda</a>
                <a href="#about" class="nav-link mobile-nav-link text-trilumea-dark dark:text-white p-2 rounded-lg hover:bg-trilumea-accent/20" data-lang-key="navAbout">Tentang Kami</a>
                <a href="#services" class="nav-link mobile-nav-link text-trilumea-dark dark:text-white p-2 rounded-lg hover:bg-trilumea-accent/20" data-lang-key="navServices">Layanan</a>
                <a href="#catalog" class="nav-link mobile-nav-link text-trilumea-dark dark:text-white p-2 rounded-lg hover:bg-trilumea-accent/20" data-lang-key="navCatalog">Katalog</a>
                <a href="#testimonials" class="nav-link mobile-nav-link text-trilumea-dark dark:text-white p-2 rounded-lg hover:bg-trilumea-accent/20" data-lang-key="navTestimonials">Testimoni</a>
                <a href="#contact" class="nav-link mobile-nav-link text-trilumea-dark dark:text-white p-2 rounded-lg hover:bg-trilumea-accent/20" data-lang-key="navContact">Kontak</a>
            </nav>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="hero" class="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28 bg-trilumea-soft dark:bg-gray-800 transition-colors duration-500">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                <!-- Content -->
                <div class="lg:w-1/2 mb-10 lg:mb-0 animated-element">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-trilumea-dark dark:text-trilumea-soft leading-tight mb-4 tracking-tight" data-lang-key="heroTitle">
                        Level Up Your Beauty with Trilumea
                    </h1>
                    <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8" data-lang-key="heroTagline">
                        Tempat di mana kecantikanmu dirawat dengan penuh cinta.
                    </p>
                    <a href="#contact" class="inline-block py-3 px-8 bg-trilumea-accent text-white font-semibold rounded-full shadow-lg shadow-trilumea-accent/50 hover:bg-trilumea-dark transition-all duration-300 transform hover:scale-105" data-lang-key="heroCta">
                        Hubungi Kami
                    </a>
                </div>

                <!-- Image Placeholder (Menggunakan placeholder bergaya premium) -->
                <div class="lg:w-1/2 flex justify-center animated-element" style="transition-delay: 200ms;">
                    <div class="w-full max-w-sm h-64 md:h-80 bg-trilumea-dark rounded-3xl custom-shadow p-6 flex items-center justify-center">
                        <i data-lucide="sparkles" class="w-20 h-20 text-trilumea-soft"></i>
                        <p class="sr-only">Gambar Produk Kecantikan Trilumea</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Us Section -->
        <section id="about" class="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-trilumea-dark dark:text-trilumea-accent mb-4 animated-element" data-lang-key="aboutTitle">Tentang Kami</h2>
                <div class="max-w-4xl mx-auto animated-element" style="transition-delay: 100ms;">
                    <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-12" data-lang-key="aboutDesc">
                        Selamat datang di Trilumea! Tempat di mana kecantikanmu dirawat dengan penuh cinta. Kami menghadirkan skincare dan makeup pilihan terbaik untuk bikin kulitmu makin glowing, sehat, dan happy setiap hari. Yuk, Level Up Your Beauty with Trilumea!
                    </p>

                    <div class="grid md:grid-cols-2 gap-8 text-center">
                        <!-- Visi -->
                        <div class="p-6 bg-trilumea-soft/50 dark:bg-gray-800 rounded-xl custom-shadow animated-element" style="transition-delay: 200ms;">
                            <i data-lucide="eye" class="w-10 h-10 text-trilumea-dark dark:text-trilumea-accent mx-auto mb-4"></i>
                            <h3 class="text-xl font-semibold mb-3 text-trilumea-dark dark:text-trilumea-soft" data-lang-key="aboutVisionTitle">Visi</h3>
                            <p class="text-gray-600 dark:text-gray-400" data-lang-key="aboutVisionDesc">Menjadi destinasi utama kecantikan yang menginspirasi kepercayaan diri dan menyebarkan kebahagiaan melalui produk berkualitas tinggi.</p>
                        </div>
                        <!-- Misi -->
                        <div class="p-6 bg-trilumea-soft/50 dark:bg-gray-800 rounded-xl custom-shadow animated-element" style="transition-delay: 300ms;">
                            <i data-lucide="target" class="w-10 h-10 text-trilumea-dark dark:text-trilumea-accent mx-auto mb-4"></i>
                            <h3 class="text-xl font-semibold mb-3 text-trilumea-dark dark:text-trilumea-soft" data-lang-key="aboutMissionTitle">Misi</h3>
                            <ul class="text-gray-600 dark:text-gray-400 list-disc list-inside text-left mx-auto max-w-fit">
                                <li data-lang-key="mission1">Menyediakan produk kecantikan terbaik dan terpercaya.</li>
                                <li data-lang-key="mission2">Memberikan pengalaman berbelanja yang personal dan menyenangkan.</li>
                                <li data-lang-key="mission3">Mendorong komunitas yang saling mendukung untuk mencintai diri sendiri.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section (Layanan) -->
        <section id="services" class="py-20 md:py-28 bg-trilumea-soft dark:bg-gray-800 transition-colors duration-500">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-trilumea-dark dark:text-trilumea-accent mb-12 animated-element" data-lang-key="servicesTitle">Layanan Kami</h2>
                <div id="services-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Cards Layanan akan di-generate oleh JS di bawah -->
                </div>
            </div>
        </section>

        <!-- Catalog Section (Katalog Produk) -->
        <section id="catalog" class="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-trilumea-dark dark:text-trilumea-accent mb-12 animated-element" data-lang-key="catalogTitle">Katalog Produk Unggulan</h2>
                <!-- Ubah grid menjadi 3/4/5 kolom untuk tampilan lebih baik dengan 17 produk -->
                <div id="products-container" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <!-- Cards Produk akan di-generate oleh JS di bawah -->
                </div>
            </div>
        </section>

        <!-- Testimonials Section (Testimoni) -->
        <section id="testimonials" class="py-20 md:py-28 bg-trilumea-soft dark:bg-gray-800 transition-colors duration-500">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-trilumea-dark dark:text-trilumea-accent mb-12 animated-element" data-lang-key="testimonialsTitle">Apa Kata Klien Kami?</h2>
                <div id="testimonials-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Cards Testimoni akan di-generate oleh JS di bawah -->
                </div>
            </div>
        </section>

        <!-- Contact Section (Kontak Kami) -->
        <section id="contact" class="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-trilumea-dark dark:text-trilumea-accent mb-12 animated-element" data-lang-key="contactTitle">Hubungi Kami</h2>

                <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <!-- Contact Form -->
                    <div class="animated-element">
                        <form onsubmit="event.preventDefault(); showMessageModal('Terima kasih! Pesan Anda telah terkirim.', 'success');" class="p-8 bg-trilumea-soft/50 dark:bg-gray-800 rounded-xl custom-shadow">
                            <h3 class="text-2xl font-semibold mb-6 text-trilumea-dark dark:text-trilumea-soft" data-lang-key="contactFormTitle">Kirim Pesan</h3>
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300" data-lang-key="contactFormName">Nama Anda</label>
                                <input type="text" id="name" name="name" class="w-full p-3 rounded-lg border border-gray-300 focus:ring-trilumea-accent focus:border-trilumea-accent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-300" required>
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" id="email" name="email" class="w-full p-3 rounded-lg border border-gray-300 focus:ring-trilumea-accent focus:border-trilumea-accent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-300" required>
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300" data-lang-key="contactFormMessage">Pesan Anda</label>
                                <textarea id="message" name="message" rows="4" class="w-full p-3 rounded-lg border border-gray-300 focus:ring-trilumea-accent focus:border-trilumea-accent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-300" required></textarea>
                            </div>
                            <button type="submit" class="w-full py-3 bg-trilumea-accent text-white font-semibold rounded-lg hover:bg-trilumea-dark transition duration-300 transform hover:scale-[1.01]" data-lang-key="contactFormSubmit">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    <!-- Contact Info & Social Media -->
                    <div class="space-y-8 animated-element" style="transition-delay: 100ms;">
                        <div class="p-8 bg-trilumea-dark text-white rounded-xl custom-shadow">
                            <h3 class="text-2xl font-semibold mb-4" data-lang-key="contactInfoTitle">Info Kontak</h3>
                            <div class="space-y-4">
                                <p class="flex items-start">
                                    <i data-lucide="map-pin" class="w-6 h-6 mr-3 flex-shrink-0 text-trilumea-soft"></i>
                                    <span class="font-bold mr-1" data-lang-key="contactAddressLabel">Alamat:</span> <a href="https://maps.app.goo.gl/Un5po2WshWXTiNgC6?g_st=aw" target="_blank" class="hover:underline">Jln. Antang Raya, Makassar, Sulawesi Selatan.</a>
                                </p>
                                <p class="flex items-center">
                                    <i data-lucide="mail" class="w-6 h-6 mr-3 flex-shrink-0 text-trilumea-soft"></i>
                                    <a href="mailto:info@trilumea.com" class="hover:underline">info@trilumea.com</a>
                                </p>
                                <p class="flex items-center">
                                    <i data-lucide="phone" class="w-6 h-6 mr-3 flex-shrink-0 text-trilumea-soft"></i>
                                    +62 812 3456 7890
                                </p>
                            </div>
                        </div>

                        <!-- Social Media Links -->
                        <div class="p-8 bg-trilumea-soft dark:bg-gray-800 rounded-xl custom-shadow">
                            <h3 class="text-2xl font-semibold mb-4 text-trilumea-dark dark:text-trilumea-soft" data-lang-key="contactSocialTitle">Media Sosial</h3>
                            <div class="flex space-x-6">
                                <a href="#" class="text-trilumea-dark dark:text-trilumea-accent hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300 transform hover:scale-110" aria-label="Instagram">
                                    <i data-lucide="instagram" class="w-8 h-8"></i>
                                </a>
                                <a href="#" class="text-trilumea-dark dark:text-trilumea-accent hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300 transform hover:scale-110" aria-label="Facebook">
                                    <i data-lucide="facebook" class="w-8 h-8"></i>
                                </a>
                                <a href="#" class="text-trilumea-dark dark:text-trilumea-accent hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300 transform hover:scale-110" aria-label="Twitter">
                                    <i data-lucide="twitter" class="w-8 h-8"></i>
                                </a>
                                <a href="https://maps.app.goo.gl/Un5po2WshWXTiNgC6?g_st=aw" target="_blank" class="text-trilumea-dark dark:text-trilumea-accent hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300 transform hover:scale-110" data-lang-key="contactMapLink" title="Buka di Google Maps" aria-label="Google Maps">
                                    <i data-lucide="map" class="w-8 h-8"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Product Modal (Popup Detail Produk) -->
    <div id="product-modal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] hidden p-4 transition-all duration-300">
        <div id="modal-content" class="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full mx-auto p-6 md:p-10 relative transform scale-95 opacity-0 transition-all duration-300">
            <button id="close-modal-btn" class="absolute top-4 right-4 p-2 text-gray-500 hover:text-trilumea-accent dark:text-gray-400 dark:hover:text-trilumea-soft transition duration-300 rounded-full bg-gray-100 dark:bg-gray-700">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>

            <div class="grid md:grid-cols-2 gap-6">
                <!-- Image/Placeholder -->
                <div id="modal-image-container" class="w-full h-64 bg-trilumea-soft dark:bg-gray-700 rounded-lg flex items-center justify-center p-4 overflow-hidden">
                    <!-- Image akan di-inject di sini -->
                </div>

                <!-- Product Details -->
                <div class="text-trilumea-text-dark dark:text-trilumea-text-light">
                    <h3 id="modal-product-name" class="text-3xl font-bold text-trilumea-dark dark:text-trilumea-accent mb-2"></h3>
                    <p id="modal-product-category" class="text-trilumea-accent dark:text-trilumea-soft text-sm font-medium uppercase mb-4"></p>
                    <p id="modal-product-price" class="text-2xl font-extrabold mb-6"></p>

                    <p class="text-gray-600 dark:text-gray-300 mb-6" data-lang-key="modalProductDesc">
                        Detail produk ini akan diisi dengan deskripsi lengkap (misalnya, manfaat, cara pakai, kandungan, dan review) untuk memberikan informasi mendalam kepada pelanggan.
                    </p>

                    <button class="w-full py-3 bg-trilumea-dark text-white font-semibold rounded-lg hover:bg-trilumea-accent transition duration-300" data-lang-key="modalBuyBtn">
                        Beli Sekarang
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Custom Message Modal (Pengganti Alert) -->
    <div id="message-modal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[110] hidden p-4">
        <div class="bg-white dark:bg-gray-800 rounded-xl max-w-sm w-full p-8 text-center relative">
            <h3 id="message-title" class="text-xl font-bold mb-4 text-trilumea-dark dark:text-trilumea-soft">Pesan Terkirim</h3>
            <p id="message-body" class="mb-6 text-gray-700 dark:text-gray-300"></p>
            <button id="close-message-modal" class="py-2 px-6 bg-trilumea-accent text-white font-semibold rounded-lg hover:bg-trilumea-dark transition duration-300">
                Tutup
            </button>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-950 py-12 transition-colors duration-500">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-trilumea-text-dark dark:text-trilumea-text-light">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b pb-8 border-gray-300 dark:border-gray-700">
                <!-- Logo & Tagline -->
                <div>
                    <h4 class="text-2xl font-bold text-trilumea-dark dark:text-trilumea-accent tracking-wider mb-3">Trilumea</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400" data-lang-key="footerTagline">Level Up Your Beauty with Trilumea.</p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4 text-trilumea-dark dark:text-trilumea-soft" data-lang-key="footerQuickLinks">Tautan Cepat</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#about" class="hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300" data-lang-key="navAbout">Tentang Kami</a></li>
                        <li><a href="#services" class="hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300" data-lang-key="navServices">Layanan</a></li>
                        <li><a href="#catalog" class="hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300" data-lang-key="navCatalog">Katalog</a></li>
                        <li><a href="#contact" class="hover:text-trilumea-accent dark:hover:text-trilumea-soft transition duration-300" data-lang-key="navContact">Kontak</a></li>
                    </ul>
                </div>

                <!-- Support -->
                <div>
                    <h4 class="text-lg font-semibold mb-4 text-trilumea-dark dark:text-trilumea-soft" data-lang-key="footerSupport">Dukungan</h4>
                    <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li data-lang-key="supportFaq">FAQ</li>
                        <li data-lang-key="supportPrivacy">Kebijakan Privasi</li>
                        <li data-lang-key="supportTerms">Syarat & Ketentuan</li>
                    </ul>
                </div>

                <!-- Newsletter (Placeholder) -->
                <div>
                    <h4 class="text-lg font-semibold mb-4 text-trilumea-dark dark:text-trilumea-soft" data-lang-key="footerNewsletter">Langganan Newsletter</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3" data-lang-key="footerNewsletterText">Dapatkan pembaruan dan promo eksklusif.</p>
                    <form onsubmit="event.preventDefault(); showMessageModal('Terima kasih telah berlangganan!', 'info');" class="flex">
                        <input type="email" placeholder="Email Anda" class="p-2 w-full rounded-l-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                        <button type="submit" class="p-2 bg-trilumea-accent text-white rounded-r-lg hover:bg-trilumea-dark transition duration-300">
                            <i data-lucide="send" class="w-5 h-5"></i>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Copyright -->
            <div class="text-center text-sm text-gray-500 dark:text-gray-400">
                &copy; 2025 Trilumea. <span data-lang-key="footerRights">Hak Cipta Dilindungi Undang-Undang.</span>
            </div>
        </div>
    </footer>

    <!-- JavaScript untuk Interaksi dan Logika Aplikasi -->
    <script>
        // --- Data Aplikasi ---

        // 1. Objek Terjemahan (ID dan EN) - DIPERBAIKI: Menambahkan key yang hilang
        const translations = {
            id: {
                title: 'Trilumea - Level Up Your Beauty',
                navHome: 'Beranda', navAbout: 'Tentang Kami', navServices: 'Layanan', navCatalog: 'Katalog', navTestimonials: 'Testimoni', navContact: 'Kontak',
                langBtn: 'ID | EN',
                heroTitle: 'Level Up Your Beauty with Trilumea',
                heroTagline: 'Tempat di mana kecantikanmu dirawat dengan penuh cinta.',
                heroCta: 'Hubungi Kami',
                aboutTitle: 'Tentang Kami',
                aboutDesc: 'Selamat datang di Trilumea! Tempat di mana kecantikanmu dirawat dengan penuh cinta. Kami menghadirkan skincare dan makeup pilihan terbaik untuk bikin kulitmu makin glowing, sehat, dan happy setiap hari. Yuk, Level Up Your Beauty with Trilumea!',
                aboutVisionTitle: 'Visi', aboutVisionDesc: 'Menjadi destinasi utama kecantikan yang menginspirasi kepercayaan diri dan menyebarkan kebahagiaan melalui produk berkualitas tinggi.',
                aboutMissionTitle: 'Misi',
                mission1: 'Menyediakan produk kecantikan terbaik dan terpercaya.',
                mission2: 'Memberikan pengalaman berbelanja yang personal dan menyenangkan.',
                mission3: 'Mendorong komunitas yang saling mendukung untuk mencintai diri sendiri.',
                servicesTitle: 'Layanan Kami',
                serviceSkincareTitle: 'Skincare', serviceMakeupTitle: 'Makeup', serviceBodycareTitle: 'Bodycare', serviceHaircareTitle: 'Haircare', serviceFragranceTitle: 'Fragrance', serviceToolsTitle: 'Alat Kecantikan',
                serviceSkincare: 'Perawatan kulit wajah untuk kulit sehat dan bercahaya.',
                serviceMakeup: 'Produk riasan untuk meningkatkan fitur alami Anda dengan sempurna.',
                serviceBodycare: 'Perawatan tubuh, dari sabun hingga lotion pelembap.',
                serviceHaircare: 'Solusi untuk rambut sehat, kuat, dan berkilau.',
                serviceFragrance: 'Koleksi parfum mewah dengan aroma yang memikat.',
                serviceTools: 'Aksesoris dan peralatan untuk aplikasi yang presisi.',
                catalogTitle: 'Katalog Produk Unggulan',
                testimonialsTitle: 'Apa Kata Klien Kami?',
                contactTitle: 'Hubungi Kami',
                contactFormTitle: 'Kirim Pesan', contactFormName: 'Nama Anda', contactFormMessage: 'Pesan Anda', contactFormSubmit: 'Kirim Pesan',
                contactInfoTitle: 'Info Kontak', contactAddressLabel: 'Alamat:', contactMapLink: 'Buka di Google Maps',
                contactSocialTitle: 'Media Sosial', // DITAMBAHKAN
                footerTagline: 'Level Up Your Beauty with Trilumea.',
                footerQuickLinks: 'Tautan Cepat', footerSupport: 'Dukungan', footerNewsletter: 'Langganan Newsletter', footerNewsletterText: 'Dapatkan pembaruan dan promo eksklusif.', footerRights: 'Hak Cipta Dilindungi Undang-Undang.',
                supportFaq: 'FAQ', supportPrivacy: 'Kebijakan Privasi', supportTerms: 'Syarat & Ketentuan', // DITAMBAHKAN
                modalProductDesc: 'Detail produk ini akan diisi dengan deskripsi lengkap (misalnya, manfaat, cara pakai, kandungan, dan review).',
                modalBuyBtn: 'Beli Sekarang',
            },
            en: {
                title: 'Trilumea - Level Up Your Beauty',
                navHome: 'Home', navAbout: 'About Us', navServices: 'Services', navCatalog: 'Catalog', navTestimonials: 'Testimonials', navContact: 'Contact',
                langBtn: 'ID | EN',
                heroTitle: 'Level Up Your Beauty with Trilumea',
                heroTagline: 'The place where your beauty is cared for with love.',
                heroCta: 'Contact Us',
                aboutTitle: 'About Us',
                aboutDesc: 'Welcome to Trilumea! The place where your beauty is cared for with love. We bring you the best selection of skincare and makeup to make your skin even more glowing, healthy, and happy every day. Come on, Level Up Your Beauty with Trilumea!',
                aboutVisionTitle: 'Vision', aboutVisionDesc: 'To be the leading beauty destination that inspires confidence and spreads happiness through high-quality products.',
                aboutMissionTitle: 'Mission',
                mission1: 'Provide the best and most trusted beauty products.',
                mission2: 'Offer a personalized and enjoyable shopping experience.',
                mission3: 'Foster a supportive community for self-love.',
                servicesTitle: 'Our Services',
                serviceSkincareTitle: 'Skincare', serviceMakeupTitle: 'Makeup', serviceBodycareTitle: 'Bodycare', serviceHaircareTitle: 'Haircare', serviceFragranceTitle: 'Fragrance', serviceToolsTitle: 'Beauty Tools',
                serviceSkincare: 'Facial skincare for healthy and radiant skin.',
                serviceMakeup: 'Makeup products to perfectly enhance your natural features.',
                serviceBodycare: 'Body care, from soaps to moisturizing lotions.',
                serviceHaircare: 'Solutions for healthy, strong, and shiny hair.',
                serviceFragrance: 'A collection of luxurious perfumes with captivating scents.',
                serviceTools: 'Accessories and tools for precise application.',
                catalogTitle: 'Featured Products Catalog',
                testimonialsTitle: 'What Our Clients Say?',
                contactTitle: 'Contact Us',
                contactFormTitle: 'Send a Message', contactFormName: 'Your Name', contactFormMessage: 'Your Message', contactFormSubmit: 'Send Message',
                contactInfoTitle: 'Contact Info', contactAddressLabel: 'Address:', contactMapLink: 'Open on Google Maps',
                contactSocialTitle: 'Social Media', // DITAMBAHKAN
                footerTagline: 'Level Up Your Beauty with Trilumea.',
                footerQuickLinks: 'Quick Links', footerSupport: 'Support', footerNewsletter: 'Subscribe to Newsletter', footerNewsletterText: 'Get exclusive updates and promotions.', footerRights: 'All Rights Reserved.',
                supportFaq: 'FAQ', supportPrivacy: 'Privacy Policy', supportTerms: 'Terms & Conditions', // DITAMBAHKAN
                modalProductDesc: 'Product details will be filled with a complete description (e.g., benefits, how to use, ingredients, and reviews).',
                modalBuyBtn: 'Buy Now',
            }
        };

        // 2. Data Layanan
        const servicesData = [
            { icon: 'droplet', id: 'serviceSkincare', titleKey: 'serviceSkincareTitle', descKey: 'serviceSkincare' },
            { icon: 'palette', id: 'serviceMakeup', titleKey: 'serviceMakeupTitle', descKey: 'serviceMakeup' },
            { icon: 'bath', id: 'serviceBodycare', titleKey: 'serviceBodycareTitle', descKey: 'serviceBodycare' },
            { icon: 'scissors', id: 'serviceHaircare', titleKey: 'serviceHaircareTitle', descKey: 'serviceHaircare' },
            { icon: 'sparkles', id: 'serviceFragrance', titleKey: 'serviceFragranceTitle', descKey: 'serviceFragrance' },
            { icon: 'box-select', id: 'serviceTools', titleKey: 'serviceToolsTitle', descKey: 'serviceTools' },
        ];

        // 3. Data Produk Katalog (Diperbarui dengan 8 produk tambahan)
        const productData = [
            // SKICARE & MAKEUP (9 item lama)
            { id: 1, name: 'Glad2Glow Pomegranate Niacinamide Brightening Moisturizer 30g', price: 'Rp 36.000 - Rp 50.900', category: 'Skincare', image: 'https://placehold.co/400x400/9B2C4F/FFFFFF?text=MOISTURIZER' },
            { id: 2, name: 'Emina Face Wash 60ml', price: 'Rp 16.000', category: 'Skincare', image: 'https://placehold.co/400x400/E91E63/FFFFFF?text=FACE+WASH' },
            { id: 3, name: 'AZARINE SUNSCREEN MOISTURISER SPF 35 PA +++ 40G', price: 'Rp 35.500', category: 'Skincare', image: 'https://placehold.co/400x400/831843/FFFFFF?text=SUNSCREEN' },
            { id: 4, name: 'Wardah Glycolic Acid + NiacinamideADV Brightening & Hydrating Toner 125 ml', price: 'Rp 29.500', category: 'Skincare', image: 'https://placehold.co/400x400/9B2C4F/FFFFFF?text=TONER' },
            { id: 5, name: 'Glad2Glow Perfect Cover Cushion (Oil-Control, Matte, Poreless)', price: 'Rp 100.000 - Rp 130.000', category: 'Makeup', image: 'https://placehold.co/400x400/E91E63/FFFFFF?text=CUSHION' },
            { id: 6, name: 'Hanasui Liptint All Shade', price: 'Rp 19.500 - Rp 23.900', category: 'Makeup', image: 'https://placehold.co/400x400/831843/FFFFFF?text=LIPTINT' },
            { id: 7, name: 'YOU Simplicity Matte Loose Powder', price: 'Rp 60.500', category: 'Makeup', image: 'https://placehold.co/400x400/9B2C4F/FFFFFF?text=POWDER' },
            { id: 8, name: 'FOCALLURE EverSharp Blade Eyebrow Pencil 0.1MM Ultra-fine Waterproof', price: 'Rp 40.000', category: 'Makeup', image: 'https://placehold.co/400x400/E91E63/FFFFFF?text=EYEBROW' },
            { id: 9, name: 'WARDAH Colorfit Cream Blush', price: 'Rp 45.000', category: 'Makeup', image: 'https://placehold.co/400x400/831843/FFFFFF?text=BLUSH' },
            
            // BODYCARE (2 item baru)
            { id: 10, name: 'Vaseline Healthy White UV Whitening B3 Hand Body Lotion', price: 'Rp 25.000', category: 'Bodycare', image: 'https://placehold.co/400x400/E91E63/FFFFFF?text=LOTION' },
            { id: 11, name: 'Scarlett Whitening Body Scrub Romansa', price: 'Rp 175.000', category: 'Bodycare', image: 'https://placehold.co/400x400/9B2C4F/FFFFFF?text=BODY+SCRUB' },
            
            // HAIRCARE (2 item baru)
            { id: 12, name: 'Tresemme Keratin Deep Smoothening Hair Mask Perawatan Rambut Rusak & Anti Kusut', price: 'Rp 96.600', category: 'Haircare', image: 'https://placehold.co/400x400/831843/FFFFFF?text=HAIR+MASK' },
            { id: 13, name: 'Natur Hair Tonic Ginseng', price: 'Rp 47.500', category: 'Haircare', image: 'https://placehold.co/400x400/E91E63/FFFFFF?text=HAIR+TONIC' },
            
            // FRAGRANCE (2 item baru)
            { id: 14, name: 'BIZARRE Parfum Wanita Eau De Toilette EDT', price: 'Rp 28.000', category: 'Fragrance', image: 'https://placehold.co/400x400/9B2C4F/FFFFFF?text=PERFUME+EDT' },
            { id: 15, name: 'Lilith and Eve Daisy Eau De Parfum', price: 'Rp 109.000', category: 'Fragrance', image: 'https://placehold.co/400x400/831843/FFFFFF?text=PERFUME+EDP' },
            
            // ALAT KECANTIKAN (2 item baru)
            { id: 16, name: 'Remington Catokan Pelurus Rambut Ceramic Straight S3500', price: 'Rp 600.000', category: 'Alat Kecantikan', image: 'https://placehold.co/400x400/E91E63/FFFFFF?text=HAIR+STRAIGHTENER' },
            { id: 17, name: 'Ona [REINA] Auto Curler Catokan Rambut Curly Keriting Otomatis', price: 'Rp 952.000', category: 'Alat Kecantikan', image: 'https://placehold.co/400x400/9B2C4F/FFFFFF?text=AUTO+CURLER' },
        ];
        
        // 4. Data Testimoni
        const testimonialsData = [
            { name: 'Kayla Luhulima', review: 'Skincare dari Trilumea benar-benar mengubah kulit saya menjadi lebih glowing. Pelayanannya sangat ramah dan profesional!', delay: 0 },
            { name: 'Nur Aulia', review: 'Pilihan makeup-nya lengkap, dan kualitasnya premium. Warna-warnanya cantik dan tahan lama. Puas banget!', delay: 100 },
            { name: 'Nurfadilla', review: 'Saya suka dengan konsep minimalis Trilumea. Produknya bekerja dengan baik, dan packaging-nya elegan. Highly recommended!', delay: 200 },
            { name: 'Selfia Supardi', review: 'Dark mode di websitenya sangat nyaman di mata. Belanja jadi lebih menyenangkan. Saya sudah jadi pelanggan setia!', delay: 300 },
            { name: 'Astri Rifalni Putri', review: 'Pengiriman cepat dan produk dikemas dengan sangat aman. Toner Wardah-nya cocok sekali di kulit sensitif saya.', delay: 400 },
            { name: 'Nindy Claudia Mutiara', review: 'Parfum yang saya beli wanginya unik dan tahan seharian. Rasanya seperti menggunakan produk mewah dengan harga terjangkau.', delay: 500 },
            { name: 'Nurul Astriana', review: 'Produk Glad2Glow-nya sesuai dengan deskripsi. Saya menghargai transparansi harga dan detail produk yang disajikan.', delay: 600 },
        ];

        // --- State Global ---
        let currentLang = localStorage.getItem('trilumea-lang') || 'id';
        let currentTheme = localStorage.getItem('trilumea-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        // --- Fungsi Utama ---

        // 1. Inisialisasi Tema (Dark/Light Mode)
        function initTheme() {
            if (currentTheme === 'dark') {
                document.documentElement.classList.add('dark');
                document.getElementById('sun-icon').classList.add('hidden');
                document.getElementById('moon-icon').classList.remove('hidden');
            } else {
                document.documentElement.classList.remove('dark');
                document.getElementById('moon-icon').classList.add('hidden');
                document.getElementById('sun-icon').classList.remove('hidden');
            }
        }

        // 2. Toggle Tema
        function toggleTheme() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('trilumea-theme', currentTheme);
            initTheme();
        }

        // 3. Fungsi Terjemahan - DIPERBAIKI: Menambahkan penanganan yang lebih baik
        function applyTranslation(lang) {
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                const translation = translations[lang][key];
                if (translation) {
                    if (element.tagName === 'TITLE') {
                        document.title = translation;
                    } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translation);
                    } else {
                        element.textContent = translation;
                    }
                }
            });
            
            // Update Services Descriptions & Titles
            servicesData.forEach((service, index) => {
                const titleElement = document.getElementById(`service-title-${index}`);
                const descElement = document.getElementById(`service-desc-${index}`);
                if (titleElement) {
                     titleElement.textContent = translations[lang][service.titleKey];
                }
                if (descElement) {
                    descElement.textContent = translations[lang][service.descKey];
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
        }

        // 4. Toggle Bahasa
        function toggleLanguage() {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            localStorage.setItem('trilumea-lang', currentLang);
            applyTranslation(currentLang);
        }

        // 5. Render Layanan (Services) - DIPERBAIKI: Menambahkan ID untuk terjemahan
        function renderServices() {
            const container = document.getElementById('services-container');
            container.innerHTML = servicesData.map((service, index) => `
                <div class="p-6 bg-white dark:bg-gray-900 rounded-xl custom-shadow hover:shadow-2xl hover:shadow-trilumea-accent/30 transition-all duration-300 animated-element" style="transition-delay: ${index * 100}ms;">
                    <div class="flex items-center space-x-4 mb-4">
                        <i data-lucide="${service.icon}" class="w-8 h-8 text-trilumea-accent dark:text-trilumea-soft"></i>
                        <h3 class="text-xl font-semibold text-trilumea-dark dark:text-trilumea-soft" id="service-title-${index}"></h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400" id="service-desc-${index}"></p>
                </div>
            `).join('');
        }

        // 6. Render Katalog Produk
        function renderProducts() {
            const container = document.getElementById('products-container');
            container.innerHTML = productData.map((product, index) => `
                <div class="product-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden custom-shadow transition-all duration-300 cursor-pointer animated-element" data-product-id="${product.id}" style="transition-delay: ${index * 50}ms;">
                    <div class="relative">
                        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x400/9B2C4F/FFFFFF?text=${product.category.toUpperCase().replace(/\s/g, '+')}&font=poppins';" class="w-full h-40 object-cover transition-transform duration-500 hover:scale-105">
                    </div>
                    <div class="p-4">
                        <p class="text-sm font-medium text-trilumea-dark dark:text-trilumea-accent mb-1">${product.category}</p>
                        <h4 class="product-name text-md font-semibold text-trilumea-dark dark:text-trilumea-soft mb-2 transition-colors duration-300">${product.name}</h4>
                        <p class="text-lg font-bold text-trilumea-dark dark:text-trilumea-soft">${product.price}</p>
                    </div>
                </div>
            `).join('');

            // Tambahkan event listener untuk membuka modal
            document.querySelectorAll('.product-card').forEach(card => {
                card.addEventListener('click', () => openProductModal(card.getAttribute('data-product-id')));
            });
        }

        // 7. Render Testimoni
        function renderTestimonials() {
            const container = document.getElementById('testimonials-container');
            container.innerHTML = testimonialsData.map((testimonial, index) => `
                <div class="p-6 bg-white dark:bg-gray-900 rounded-xl custom-shadow border-t-4 border-trilumea-accent dark:border-trilumea-soft animated-element" style="transition-delay: ${testimonial.delay}ms;">
                    <i data-lucide="quote" class="w-8 h-8 text-trilumea-accent dark:text-trilumea-soft mb-3 opacity-70"></i>
                    <p class="text-gray-700 dark:text-gray-300 italic mb-4">${testimonial.review}</p>
                    <p class="text-right font-semibold text-trilumea-dark dark:text-trilumea-soft">- ${testimonial.name}</p>
                </div>
            `).join('');
        }
        
        // 8. Logika Modal Produk
        const modal = document.getElementById('product-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModalBtn = document.getElementById('close-modal-btn');

        function openProductModal(productId) {
            const product = productData.find(p => p.id == productId);

            if (product) {
                document.getElementById('modal-product-name').textContent = product.name;
                document.getElementById('modal-product-category').textContent = product.category;
                document.getElementById('modal-product-price').textContent = product.price;

                const imgContainer = document.getElementById('modal-image-container');
                const modalImagePlaceholder = `https://placehold.co/600x600/9B2C4F/FFFFFF?text=${product.category.toUpperCase().replace(/\s/g, '+')}&font=poppins`;
                imgContainer.innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${modalImagePlaceholder}';" class="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105">`;

                modal.classList.remove('hidden');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            }
        }

        function closeProductModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
        
        // 9. Custom Message Modal (Pengganti alert()) - DIPERBAIKI: Menambahkan event listener yang benar
        function showMessageModal(message, type = 'info') {
            const modalElement = document.getElementById('message-modal');
            const titleElement = document.getElementById('message-title');
            const bodyElement = document.getElementById('message-body');
            
            titleElement.textContent = type === 'success' ? 'Berhasil!' : 'Informasi';
            bodyElement.textContent = message;
            
            modalElement.classList.remove('hidden');
        }

        // 10. Intersection Observer untuk Animasi Scroll
        function setupScrollAnimation() {
            const animatedElements = document.querySelectorAll('.animated-element');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => observer.observe(el));
        }

        // --- Event Listeners dan Eksekusi Saat Dokumen Siap ---
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Render Konten Dinamis
            renderServices();
            renderProducts();
            renderTestimonials();

            // 2. Inisialisasi dan Terjemahan
            initTheme();
            // Panggil lucide.createIcons() setelah konten yang memuat ikon dimasukkan ke DOM
            setTimeout(() => {
                lucide.createIcons();
            }, 100);
            applyTranslation(currentLang);

            // 3. Setup Animasi
            setupScrollAnimation();

            // 4. Listeners Header - DIPERBAIKI: Menambahkan event listener yang lebih baik
            document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
            document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Tutup menu mobile saat link diklik - DIPERBAIKI: Menggunakan selector yang benar
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // 5. Listeners Modal Produk
            closeModalBtn.addEventListener('click', closeProductModal);
            modal.addEventListener('click', (e) => {
                if (e.target.id === 'product-modal') {
                    closeProductModal();
                }
            });
            
            // 6. Listener untuk message modal - DITAMBAHKAN
            document.getElementById('close-message-modal').addEventListener('click', () => {
                document.getElementById('message-modal').classList.add('hidden');
            });
        });
    </script>
</body>
</html>