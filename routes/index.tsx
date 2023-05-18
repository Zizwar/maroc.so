import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>

        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>
          Fresh  || limupa - Digital Products Store eCommerce
          Bootstrap 4 Template
        </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />

        <link rel="stylesheet" href="css/material-design-iconic-font.min.css" />

        <link rel="stylesheet" href="css/font-awesome.min.css" />

        <link rel="stylesheet" href="css/fontawesome-stars.css" />

        <link rel="stylesheet" href="css/meanmenu.css" />

        <link rel="stylesheet" href="css/owl.carousel.min.css" />

        <link rel="stylesheet" href="css/slick.css" />

        <link rel="stylesheet" href="css/animate.css" />

        <link rel="stylesheet" href="css/jquery-ui.min.css" />

        <link rel="stylesheet" href="css/venobox.css" />

        <link rel="stylesheet" href="css/nice-select.css" />

        <link rel="stylesheet" href="css/magnific-popup.css" />

        <link rel="stylesheet" href="css/bootstrap.min.css" />

        <link rel="stylesheet" href="css/helper.css" />

        <link rel="stylesheet" href="style.css" />

        <link rel="stylesheet" href="css/responsive.css" />

        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
      </Head>
      <div>
        <p class="browserupgrade">
          You are using an <strong>outdated</strong> browser. Please
          <a href="http://browsehappy.com/">upgrade your browser</a> to improve
          your experience.
        </p>

        <div class="body-wrapper">
          <header>
            <div class="header-top">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-4">
                    <div class="header-top-left">
                      <ul class="phone-wrap">
                        <li>
                          <span>Telephone Enquiry:</span>
                          <a href="#">(+123) 123 321 345</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-9 col-md-8">
                    <div class="header-top-right">
                      <ul class="ht-menu">
                        <li>
                          <div class="ht-setting-trigger">
                            <span>Setting</span>
                          </div>
                          <div class="setting ht-setting">
                            <ul class="ht-setting-list">
                              <li>
                                <a href="login-register.html">My Account</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="login-register.html">Sign In</a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <span class="currency-selector-wrapper">
                            Currency :
                          </span>
                          <div class="ht-currency-trigger">
                            <span>USD $</span>
                          </div>
                          <div class="currency ht-currency">
                            <ul class="ht-setting-list">
                              <li>
                                <a href="#">EUR €</a>
                              </li>
                              <li class="active">
                                <a href="#">USD $</a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <span class="language-selector-wrapper">
                            Language :
                          </span>
                          <div class="ht-language-trigger">
                            <span>English</span>
                          </div>
                          <div class="language ht-language">
                            <ul class="ht-setting-list">
                              <li class="active">
                                <a href="#">
                                  <img
                                    src="images/menu/flag-icon/1.jpg"
                                    alt=""
                                  />
                                  English
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="images/menu/flag-icon/2.jpg"
                                    alt=""
                                  />
                                  Français
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="logo pb-sm-30 pb-xs-30">
                      <a href="index.html">
                        <img src="images/menu/logo/1.jpg" alt="" />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                    <form action="#" class="hm-searchbox">
                      <select class="nice-select select-search-category">
                        <option value="0">All</option>
                        <option value="10">Laptops</option>
                        <option value="17">- - Prime Video</option>
                        <option value="20">- - - - All Videos</option>
                        <option value="21">- - - - Blouses</option>
                        <option value="22">- - - - Evening Dresses</option>
                        <option value="23">- - - - Summer Dresses</option>
                        <option value="24">- - - - T-shirts</option>
                        <option value="25">- - - - Rent or Buy</option>
                        <option value="26">- - - - Your Watchlist</option>
                        <option value="27">- - - - Watch Anywhere</option>
                        <option value="28">- - - - Getting Started</option>
                        <option value="18">- - - - Computers</option>
                        <option value="29">- - - - More to Explore</option>
                        <option value="30">- - - - TV &amp; Video</option>
                        <option value="31">- - - - Audio &amp; Theater</option>
                        <option value="32">- - - - Camera, Photo</option>
                        <option value="33">- - - - Cell Phones</option>
                        <option value="34">- - - - Headphones</option>
                        <option value="35">- - - - Video Games</option>
                        <option value="36">- - - - Wireless Speakers</option>
                        <option value="19">- - - - Electronics</option>
                        <option value="37">- - - - Amazon Home</option>
                        <option value="38">- - - - Kitchen &amp; Dining</option>
                        <option value="39">- - - - Furniture</option>
                        <option value="40">- - - - Bed &amp; Bath</option>
                        <option value="41">- - - - Appliances</option>
                        <option value="11">TV &amp; Audio</option>
                        <option value="42">- - Chamcham</option>
                        <option value="45">- - - - Office</option>
                        <option value="47">- - - - Gaming</option>
                        <option value="48">- - - - Chromebook</option>
                        <option value="49">- - - - Refurbished</option>
                        <option value="50">- - - - Touchscreen</option>
                        <option value="51">- - - - Ultrabooks</option>
                        <option value="52">- - - - Blouses</option>
                        <option value="43">- - Sanai</option>
                        <option value="53">- - - - Hard Drives</option>
                        <option value="54">- - - - Graphic Cards</option>
                        <option value="55">- - - - Processors (CPU)</option>
                        <option value="56">- - - - Memory</option>
                        <option value="57">- - - - Motherboards</option>
                        <option value="58">- - - - Fans &amp; Cooling</option>
                        <option value="59">- - - - CD/DVD Drives</option>
                        <option value="44">- - Meito</option>
                        <option value="60">- - - - Sound Cards</option>
                        <option value="61">- - - - Cases &amp; Towers</option>
                        <option value="62">- - - - Casual Dresses</option>
                        <option value="63">- - - - Evening Dresses</option>
                        <option value="64">- - - - T-shirts</option>
                        <option value="65">- - - - Tops</option>
                        <option value="12">Smartphone</option>
                        <option value="66">- - Camera Accessories</option>
                        <option value="68">- - - - Octa Core</option>
                        <option value="69">- - - - Quad Core</option>
                        <option value="70">- - - - Dual Core</option>
                        <option value="71">- - - - 7.0 Screen</option>
                        <option value="72">- - - - 9.0 Screen</option>
                        <option value="73">- - - - Bags &amp; Cases</option>
                        <option value="67">- - XailStation</option>
                        <option value="74">- - - - Batteries</option>
                        <option value="75">- - - - Microphones</option>
                        <option value="76">- - - - Stabilizers</option>
                        <option value="77">- - - - Video Tapes</option>
                        <option value="78">- - - - Memory Card Readers</option>
                        <option value="79">- - - - Tripods</option>
                        <option value="13">Cameras</option>
                        <option value="14">headphone</option>
                        <option value="15">Smartwatch</option>
                        <option value="16">Accessories</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Enter your search key ..."
                      />
                      <button class="li-btn" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </form>

                    <div class="header-middle-right">
                      <ul class="hm-menu">
                        <li class="hm-wishlist">
                          <a href="wishlist.html">
                            <span class="cart-item-count wishlist-item-count">
                              0
                            </span>
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </li>

                        <li class="hm-minicart">
                          <div class="hm-minicart-trigger">
                            <span class="item-icon"></span>
                            <span class="item-text">
                              £80.00
                              <span class="cart-item-count">2</span>
                            </span>
                          </div>
                          <span></span>
                          <div class="minicart">
                            <ul class="minicart-product-list">
                              <li>
                                <a
                                  href="single-product.html"
                                  class="minicart-product-image"
                                >
                                  <img
                                    src="images/product/small-size/5.jpg"
                                    alt="cart products"
                                  />
                                </a>
                                <div class="minicart-product-details">
                                  <h6>
                                    <a href="single-product.html">
                                      Aenean eu tristique
                                    </a>
                                  </h6>
                                  <span>£40 x 1</span>
                                </div>
                                <button class="close" title="Remove">
                                  <i class="fa fa-close"></i>
                                </button>
                              </li>
                              <li>
                                <a
                                  href="single-product.html"
                                  class="minicart-product-image"
                                >
                                  <img
                                    src="images/product/small-size/6.jpg"
                                    alt="cart products"
                                  />
                                </a>
                                <div class="minicart-product-details">
                                  <h6>
                                    <a href="single-product.html">
                                      Aenean eu tristique
                                    </a>
                                  </h6>
                                  <span>£40 x 1</span>
                                </div>
                                <button class="close" title="Remove">
                                  <i class="fa fa-close"></i>
                                </button>
                              </li>
                            </ul>
                            <p class="minicart-total">
                              SUBTOTAL: <span>£80.00</span>
                            </p>
                            <div class="minicart-button">
                              <a
                                href="shopping-cart.html"
                                class="li-button li-button-fullwidth li-button-dark"
                              >
                                <span>View Full Cart</span>
                              </a>
                              <a
                                href="checkout.html"
                                class="li-button li-button-fullwidth"
                              >
                                <span>Checkout</span>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="header-bottom header-sticky d-none d-lg-block d-xl-block">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="hb-menu">
                      <nav>
                        <ul>
                          <li class="dropdown-holder">
                            <a href="index.html">Home</a>
                            <ul class="hb-dropdown">
                              <li class="active">
                                <a href="index.html">Home One</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Two</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Three</a>
                              </li>
                              <li>
                                <a href="index-4.html">Home Four</a>
                              </li>
                            </ul>
                          </li>
                          <li class="megamenu-holder">
                            <a href="shop-left-sidebar.html">Shop</a>
                            <ul class="megamenu hb-megamenu">
                              <li>
                                <a href="shop-left-sidebar.html">
                                  Shop Page Layout
                                </a>
                                <ul>
                                  <li>
                                    <a href="shop-3-column.html">
                                      Shop 3 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-4-column.html">
                                      Shop 4 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-left-sidebar.html">
                                      Shop Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-right-sidebar.html">
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list.html">Shop List</a>
                                  </li>
                                  <li>
                                    <a href="shop-list-left-sidebar.html">
                                      Shop List Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list-right-sidebar.html">
                                      Shop List Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="single-product-gallery-left.html">
                                  Single Product Style
                                </a>
                                <ul>
                                  <li>
                                    <a href="single-product-carousel.html">
                                      Single Product Carousel
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-gallery-left.html">
                                      Single Product Gallery Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-gallery-right.html">
                                      Single Product Gallery Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-tab-style-top.html">
                                      Single Product Tab Style Top
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-tab-style-left.html">
                                      Single Product Tab Style Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-tab-style-right.html">
                                      Single Product Tab Style Right
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  Single Products
                                </a>
                                <ul>
                                  <li>
                                    <a href="single-product.html">
                                      Single Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-sale.html">
                                      Single Product Sale
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-group.html">
                                      Single Product Group
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-normal.html">
                                      Single Product Normal
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-affiliate.html">
                                      Single Product Affiliate
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown-holder">
                            <a href="blog-left-sidebar.html">Blog</a>
                            <ul class="hb-dropdown">
                              <li class="sub-dropdown-holder">
                                <a href="blog-left-sidebar.html">
                                  Blog Grid View
                                </a>
                                <ul class="hb-dropdown hb-sub-dropdown">
                                  <li>
                                    <a href="blog-2-column.html">
                                      Blog 2 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-3-column.html">
                                      Blog 3 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-left-sidebar.html">
                                      Grid Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-right-sidebar.html">
                                      Grid Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="sub-dropdown-holder">
                                <a href="blog-list-left-sidebar.html">
                                  Blog List View
                                </a>
                                <ul class="hb-dropdown hb-sub-dropdown">
                                  <li>
                                    <a href="blog-list.html">Blog List</a>
                                  </li>
                                  <li>
                                    <a href="blog-list-left-sidebar.html">
                                      List Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-list-right-sidebar.html">
                                      List Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="sub-dropdown-holder">
                                <a href="blog-details-left-sidebar.html">
                                  Blog Details
                                </a>
                                <ul class="hb-dropdown hb-sub-dropdown">
                                  <li>
                                    <a href="blog-details-left-sidebar.html">
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-details-right-sidebar.html">
                                      Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="sub-dropdown-holder">
                                <a href="blog-gallery-format.html">
                                  Blog Format
                                </a>
                                <ul class="hb-dropdown hb-sub-dropdown">
                                  <li>
                                    <a href="blog-audio-format.html">
                                      Blog Audio Format
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-video-format.html">
                                      Blog Video Format
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-gallery-format.html">
                                      Blog Gallery Format
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li class="megamenu-static-holder">
                            <a href="index.html">Pages</a>
                            <ul class="megamenu hb-megamenu">
                              <li>
                                <a href="blog-left-sidebar.html">
                                  Blog Layouts
                                </a>
                                <ul>
                                  <li>
                                    <a href="blog-2-column.html">
                                      Blog 2 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-3-column.html">
                                      Blog 3 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-left-sidebar.html">
                                      Grid Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-right-sidebar.html">
                                      Grid Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-list.html">Blog List</a>
                                  </li>
                                  <li>
                                    <a href="blog-list-left-sidebar.html">
                                      List Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-list-right-sidebar.html">
                                      List Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="blog-details-left-sidebar.html">
                                  Blog Details Pages
                                </a>
                                <ul>
                                  <li>
                                    <a href="blog-details-left-sidebar.html">
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-details-right-sidebar.html">
                                      Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-audio-format.html">
                                      Blog Audio Format
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-video-format.html">
                                      Blog Video Format
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-gallery-format.html">
                                      Blog Gallery Format
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="index.html">Other Pages</a>
                                <ul>
                                  <li>
                                    <a href="login-register.html">My Account</a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="compare.html">Compare</a>
                                  </li>
                                  <li>
                                    <a href="wishlist.html">Wishlist</a>
                                  </li>
                                  <li>
                                    <a href="shopping-cart.html">
                                      Shopping Cart
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="index.html">Other Pages 2</a>
                                <ul>
                                  <li>
                                    <a href="contact.html">Contact</a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">About Us</a>
                                  </li>
                                  <li>
                                    <a href="faq.html">FAQ</a>
                                  </li>
                                  <li>
                                    <a href="404.html">404 Error</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Smartwatch</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Accessories</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mobile-menu-area d-lg-none d-xl-none col-12">
              <div class="container">
                <div class="row">
                  <div class="mobile-menu"></div>
                </div>
              </div>
            </div>
          </header>

          <div class="slider-with-banner">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-8">
                  <div class="slider-area">
                    <div class="slider-active owl-carousel">
                      <div class="single-slide align-center-left animation-style-01 bg-1">
                        <div class="slider-progress"></div>
                        <div class="slider-content">
                          <h5>
                            Sale Offer <span>-20% Off</span> This Week
                          </h5>
                          <h2>Chamcham Galaxy S9 | S9+</h2>
                          <h3>
                            Starting at <span>$1209.00</span>
                          </h3>
                          <div class="default-btn slide-btn">
                            <a class="links" href="shop-left-sidebar.html">
                              Shopping Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="single-slide align-center-left animation-style-02 bg-2">
                        <div class="slider-progress"></div>
                        <div class="slider-content">
                          <h5>
                            Sale Offer <span>Black Friday</span> This Week
                          </h5>
                          <h2>Work Desk Surface Studio 2018</h2>
                          <h3>
                            Starting at <span>$824.00</span>
                          </h3>
                          <div class="default-btn slide-btn">
                            <a class="links" href="shop-left-sidebar.html">
                              Shopping Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="single-slide align-center-left animation-style-01 bg-3">
                        <div class="slider-progress"></div>
                        <div class="slider-content">
                          <h5>
                            Sale Offer <span>-10% Off</span> This Week
                          </h5>
                          <h2>Phantom 4 Pro+ Obsidian</h2>
                          <h3>
                            Starting at <span>$1849.00</span>
                          </h3>
                          <div class="default-btn slide-btn">
                            <a class="links" href="shop-left-sidebar.html">
                              Shopping Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                  <div class="li-banner">
                    <a href="#">
                      <img src="images/banner/1_1.jpg" alt="" />
                    </a>
                  </div>
                  <div class="li-banner mt-15 mt-sm-30 mt-xs-30">
                    <a href="#">
                      <img src="images/banner/1_2.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-area pt-60 pb-50">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="li-product-tab">
                    <ul class="nav li-product-menu">
                      <li>
                        <a
                          class="active"
                          data-toggle="tab"
                          href="#li-new-product"
                        >
                          <span>New Arrival</span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#li-bestseller-product">
                          <span>Bestseller</span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#li-featured-product">
                          <span>Featured Products</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tab-content">
                <div
                  id="li-new-product"
                  class="tab-pane active show"
                  role="tabpanel"
                >
                  <div class="row">
                    <div class="product-active owl-carousel">
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/1.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/2.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/3.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/4.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/5.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/6.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="li-bestseller-product"
                  class="tab-pane"
                  role="tabpanel"
                >
                  <div class="row">
                    <div class="product-active owl-carousel">
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/12.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/11.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/10.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/9.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/8.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/7.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="li-featured-product" class="tab-pane" role="tabpanel">
                  <div class="row">
                    <div class="product-active owl-carousel">
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/3.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/5.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/7.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/9.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/11.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/12.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="li-static-banner">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-4 text-center">
                  <div class="single-banner">
                    <a href="#">
                      <img
                        src="images/banner/1_3.jpg"
                        alt="Li's Static Banner"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                  <div class="single-banner">
                    <a href="#">
                      <img
                        src="images/banner/1_4.jpg"
                        alt="Li's Static Banner"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                  <div class="single-banner">
                    <a href="#">
                      <img
                        src="images/banner/1_5.jpg"
                        alt="Li's Static Banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="product-area li-laptop-product pt-60 pb-45">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="li-section-title">
                    <h2>
                      <span>Laptop</span>
                    </h2>
                    <ul class="li-sub-category-list">
                      <li class="active">
                        <a href="shop-left-sidebar.html">Prime Video</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Computers</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Electronics</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <div class="product-active owl-carousel">
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/1.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/2.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/3.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/4.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/5.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/6.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product-area li-laptop-product li-tv-audio-product pb-45">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="li-section-title">
                    <h2>
                      <span>TV & Audio</span>
                    </h2>
                    <ul class="li-sub-category-list">
                      <li class="active">
                        <a href="shop-left-sidebar.html">Chamcham</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Sanai</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Meito</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <div class="product-active owl-carousel">
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/3.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/5.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/7.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/9.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/11.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/11.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="li-static-home">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="li-static-home-image"></div>

                  <div class="li-static-home-content">
                    <p>
                      Sale Offer<span>-20% Off</span>This Week
                    </p>
                    <h2>Featured Product</h2>
                    <h2>Meito Accessories 2018</h2>
                    <p class="schedule">
                      Starting at
                      <span> $1209.00</span>
                    </p>
                    <div class="default-btn">
                      <a href="shop-left-sidebar.html" class="links">
                        Shopping Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="product-area li-trending-product pt-60 pb-45">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="li-product-tab li-trending-product-tab">
                    <h2>
                      <span>Trendding Products</span>
                    </h2>
                    <ul class="nav li-product-menu li-trending-product-menu">
                      <li>
                        <a class="active" data-toggle="tab" href="#home1">
                          <span>Sanai</span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#home2">
                          <span>Camera Accessories</span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#home3">
                          <span>XailStation</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="tab-content li-tab-content li-trending-product-content">
                    <div id="home1" class="tab-pane show fade in active">
                      <div class="row">
                        <div class="product-active owl-carousel">
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/2.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/4.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/6.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/8.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/10.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/12.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="home2" class="tab-pane fade">
                      <div class="row">
                        <div class="product-active owl-carousel">
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/11.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/7.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/9.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/5.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/7.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/5.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="home3" class="tab-pane fade">
                      <div class="row">
                        <div class="product-active owl-carousel">
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/3.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/7.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/9.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/1.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/11.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Graphic Corner
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Accusantium dolorem1
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="single-product-wrap">
                              <div class="product-image">
                                <a href="single-product.html">
                                  <img
                                    src="images/product/large-size/9.jpg"
                                    alt="Li's Product Image"
                                  />
                                </a>
                                <span class="sticker">New</span>
                              </div>
                              <div class="product_desc">
                                <div class="product_desc_info">
                                  <div class="product-review">
                                    <h5 class="manufacturer">
                                      <a href="shop-left-sidebar.html">
                                        Studio Design
                                      </a>
                                    </h5>
                                    <div class="rating-box">
                                      <ul class="rating">
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li>
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                        <li class="no-star">
                                          <i class="fa fa-star-o"></i>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h4>
                                    <a
                                      class="product_name"
                                      href="single-product.html"
                                    >
                                      Mug Today is a good day
                                    </a>
                                  </h4>
                                  <div class="price-box">
                                    <span class="new-price new-price-2">
                                      $71.80
                                    </span>
                                    <span class="old-price">$77.22</span>
                                    <span class="discount-percentage">-7%</span>
                                  </div>
                                </div>
                                <div class="add-actions">
                                  <ul class="add-actions-link">
                                    <li class="add-cart active">
                                      <a href="#">Add to cart</a>
                                    </li>
                                    <li>
                                      <a
                                        class="links-details"
                                        href="wishlist.html"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="quick view"
                                        class="quick-view-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        <i class="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product-area li-laptop-product li-trendding-products best-sellers pb-45">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="li-section-title">
                    <h2>
                      <span>Bestsellers</span>
                    </h2>
                  </div>
                  <div class="row">
                    <div class="product-active owl-carousel">
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/11.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/7.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/9.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/5.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/7.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Graphic Corner
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Accusantium dolorem1
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price">$46.80</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single-product-wrap">
                          <div class="product-image">
                            <a href="single-product.html">
                              <img
                                src="images/product/large-size/5.jpg"
                                alt="Li's Product Image"
                              />
                            </a>
                            <span class="sticker">New</span>
                          </div>
                          <div class="product_desc">
                            <div class="product_desc_info">
                              <div class="product-review">
                                <h5 class="manufacturer">
                                  <a href="shop-left-sidebar.html">
                                    Studio Design
                                  </a>
                                </h5>
                                <div class="rating-box">
                                  <ul class="rating">
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                    <li class="no-star">
                                      <i class="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <a
                                  class="product_name"
                                  href="single-product.html"
                                >
                                  Mug Today is a good day
                                </a>
                              </h4>
                              <div class="price-box">
                                <span class="new-price new-price-2">
                                  $71.80
                                </span>
                                <span class="old-price">$77.22</span>
                                <span class="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div class="add-actions">
                              <ul class="add-actions-link">
                                <li class="add-cart active">
                                  <a href="#">Add to cart</a>
                                </li>
                                <li>
                                  <a class="links-details" href="wishlist.html">
                                    <i class="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="quick view"
                                    class="quick-view-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    <i class="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="footer">
            <div class="footer-static-top">
              <div class="container">
                <div class="footer-shipping pt-60 pb-55 pb-xs-25">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                      <div class="li-shipping-inner-box">
                        <div class="shipping-icon">
                          <img
                            src="images/shipping-icon/1.png"
                            alt="Shipping Icon"
                          />
                        </div>
                        <div class="shipping-text">
                          <h2>Free Delivery</h2>
                          <p>
                            And free returns. See checkout for delivery dates.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                      <div class="li-shipping-inner-box">
                        <div class="shipping-icon">
                          <img
                            src="images/shipping-icon/2.png"
                            alt="Shipping Icon"
                          />
                        </div>
                        <div class="shipping-text">
                          <h2>Safe Payment</h2>
                          <p>
                            Pay with the world's most popular and secure payment
                            methods.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                      <div class="li-shipping-inner-box">
                        <div class="shipping-icon">
                          <img
                            src="images/shipping-icon/3.png"
                            alt="Shipping Icon"
                          />
                        </div>
                        <div class="shipping-text">
                          <h2>Shop with Confidence</h2>
                          <p>
                            Our Buyer Protection covers your purchasefrom click
                            to delivery.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                      <div class="li-shipping-inner-box">
                        <div class="shipping-icon">
                          <img
                            src="images/shipping-icon/4.png"
                            alt="Shipping Icon"
                          />
                        </div>
                        <div class="shipping-text">
                          <h2>24/7 Help Center</h2>
                          <p>
                            Have a question? Call a Specialist or chat online.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-static-middle">
              <div class="container">
                <div class="footer-logo-wrap pt-50 pb-35">
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="footer-logo">
                        <img src="images/menu/logo/1.jpg" alt="Footer Logo" />
                        <p class="info">
                          We are a team of designers and developers that create
                          high quality HTML Template & Woocommerce, Shopify
                          Theme.
                        </p>
                      </div>
                      <ul class="des">
                        <li>
                          <span>Address: </span>
                          6688Princess Road, London, Greater London BAS 23JK, UK
                        </li>
                        <li>
                          <span>Phone: </span>
                          <a href="#">(+123) 123 321 345</a>
                        </li>
                        <li>
                          <span>Email: </span>
                          <a href="mailto://info@yourdomain.com">
                            info@yourdomain.com
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 col-sm-6">
                      <div class="footer-block">
                        <h3 class="footer-block-title">Product</h3>
                        <ul>
                          <li>
                            <a href="#">Prices drop</a>
                          </li>
                          <li>
                            <a href="#">New products</a>
                          </li>
                          <li>
                            <a href="#">Best sales</a>
                          </li>
                          <li>
                            <a href="#">Contact us</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-3 col-sm-6">
                      <div class="footer-block">
                        <h3 class="footer-block-title">Our company</h3>
                        <ul>
                          <li>
                            <a href="#">Delivery</a>
                          </li>
                          <li>
                            <a href="#">Legal Notice</a>
                          </li>
                          <li>
                            <a href="#">About us</a>
                          </li>
                          <li>
                            <a href="#">Contact us</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div class="footer-block">
                        <h3 class="footer-block-title">Follow Us</h3>
                        <ul class="social-link">
                          <li class="twitter">
                            <a
                              href="https://twitter.com/"
                              data-toggle="tooltip"
                              target="_blank"
                              title="Twitter"
                            >
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li class="rss">
                            <a
                              href="https://rss.com/"
                              data-toggle="tooltip"
                              target="_blank"
                              title="RSS"
                            >
                              <i class="fa fa-rss"></i>
                            </a>
                          </li>
                          <li class="google-plus">
                            <a
                              href="https://www.plus.google.com/discover"
                              data-toggle="tooltip"
                              target="_blank"
                              title="Google Plus"
                            >
                              <i class="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li class="facebook">
                            <a
                              href="https://www.facebook.com/"
                              data-toggle="tooltip"
                              target="_blank"
                              title="Facebook"
                            >
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li class="youtube">
                            <a
                              href="https://www.youtube.com/"
                              data-toggle="tooltip"
                              target="_blank"
                              title="Youtube"
                            >
                              <i class="fa fa-youtube"></i>
                            </a>
                          </li>
                          <li class="instagram">
                            <a
                              href="https://www.instagram.com/"
                              data-toggle="tooltip"
                              target="_blank"
                              title="Instagram"
                            >
                              <i class="fa fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="footer-newsletter">
                        <h4>Sign up to newsletter</h4>
                        <form
                          action="#"
                          method="post"
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          class="footer-subscribe-form validate"
                          target="_blank"
                          novalidate
                        >
                          <div id="mc_embed_signup_scroll">
                            <div
                              id="mc-form"
                              class="mc-form subscribe-form form-group"
                            >
                              <input
                                id="mc-email"
                                type="email"
                                autocomplete="off"
                                placeholder="Enter your email"
                              />
                              <button class="btn" id="mc-submit">
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-static-bottom pt-55 pb-55">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="footer-links">
                      <ul>
                        <li>
                          <a href="#">Online Shopping</a>
                        </li>
                        <li>
                          <a href="#">Promotions</a>
                        </li>
                        <li>
                          <a href="#">My Orders</a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                        <li>
                          <a href="#">Customer Service</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                        <li>
                          <a href="#">Most Populars</a>
                        </li>
                        <li>
                          <a href="#">New Arrivals</a>
                        </li>
                        <li>
                          <a href="#">Special Products</a>
                        </li>
                        <li>
                          <a href="#">Manufacturers</a>
                        </li>
                        <li>
                          <a href="#">Our Stores</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">Payments</a>
                        </li>
                        <li>
                          <a href="#">Warantee</a>
                        </li>
                        <li>
                          <a href="#">Refunds</a>
                        </li>
                        <li>
                          <a href="#">Checkout</a>
                        </li>
                        <li>
                          <a href="#">Discount</a>
                        </li>
                        <li>
                          <a href="#">Refunds</a>
                        </li>
                        <li>
                          <a href="#">Policy Shipping</a>
                        </li>
                      </ul>
                    </div>

                    <div class="copyright text-center">
                      <a href="#">
                        <img src="images/payment/1.png" alt="" />
                      </a>
                    </div>

                    <div class="copyright text-center pt-25">
                      <span>
                        <a target="_blank" href="https://www.templateshub.net">
                          Templates Hub
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade modal-wrapper" id="exampleModalCenter">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="modal-inner-area row">
                    <div class="col-lg-5 col-md-6 col-sm-6">
                      <div class="product-details-left">
                        <div class="product-details-images slider-navigation-1">
                          <div class="lg-image">
                            <img
                              src="images/product/large-size/1.jpg"
                              alt="product image"
                            />
                          </div>
                          <div class="lg-image">
                            <img
                              src="images/product/large-size/2.jpg"
                              alt="product image"
                            />
                          </div>
                          <div class="lg-image">
                            <img
                              src="images/product/large-size/3.jpg"
                              alt="product image"
                            />
                          </div>
                          <div class="lg-image">
                            <img
                              src="images/product/large-size/4.jpg"
                              alt="product image"
                            />
                          </div>
                          <div class="lg-image">
                            <img
                              src="images/product/large-size/5.jpg"
                              alt="product image"
                            />
                          </div>
                          <div class="lg-image">
                            <img
                              src="images/product/large-size/6.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div class="product-details-thumbs slider-thumbs-1">
                          <div class="sm-image">
                            <img
                              src="images/product/small-size/1.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div class="sm-image">
                            <img
                              src="images/product/small-size/2.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div class="sm-image">
                            <img
                              src="images/product/small-size/3.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div class="sm-image">
                            <img
                              src="images/product/small-size/4.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div class="sm-image">
                            <img
                              src="images/product/small-size/5.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div class="sm-image">
                            <img
                              src="images/product/small-size/6.jpg"
                              alt="product image thumb"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-7 col-md-6 col-sm-6">
                      <div class="product-details-view-content pt-60">
                        <div class="product-info">
                          <h2>Today is a good day Framed poster</h2>
                          <span class="product-details-ref">
                            Reference: demo_15
                          </span>
                          <div class="rating-box pt-20">
                            <ul class="rating rating-with-review-item">
                              <li>
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li class="no-star">
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li class="no-star">
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li class="review-item">
                                <a href="#">Read Review</a>
                              </li>
                              <li class="review-item">
                                <a href="#">Write Review</a>
                              </li>
                            </ul>
                          </div>
                          <div class="price-box pt-20">
                            <span class="new-price new-price-2">$57.98</span>
                          </div>
                          <div class="product-desc">
                            <p>
                              <span>
                                100% cotton double printed dress. Black and
                                white striped top and orange high waisted skater
                                skirt bottom. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. quibusdam
                                corporis, earum facilis et nostrum dolorum
                                accusamus similique eveniet quia pariatur.
                              </span>
                            </p>
                          </div>
                          <div class="product-variants">
                            <div class="produt-variants-size">
                              <label>Dimension</label>
                              <select class="nice-select">
                                <option value="1" title="S" selected="selected">
                                  40x60cm
                                </option>
                                <option value="2" title="M">
                                  60x90cm
                                </option>
                                <option value="3" title="L">
                                  80x120cm
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="single-add-to-cart">
                            <form action="#" class="cart-quantity">
                              <div class="quantity">
                                <label>Quantity</label>
                                <div class="cart-plus-minus">
                                  <input
                                    class="cart-plus-minus-box"
                                    value="1"
                                    type="text"
                                  />
                                  <div class="dec qtybutton">
                                    <i class="fa fa-angle-down"></i>
                                  </div>
                                  <div class="inc qtybutton">
                                    <i class="fa fa-angle-up"></i>
                                  </div>
                                </div>
                              </div>
                              <button class="add-to-cart" type="submit">
                                Add to cart
                              </button>
                            </form>
                          </div>
                          <div class="product-additional-info pt-25">
                            <a class="wishlist-btn" href="wishlist.html">
                              <i class="fa fa-heart-o"></i>Add to wishlist
                            </a>
                            <div class="product-social-sharing pt-25">
                              <ul>
                                <li class="facebook">
                                  <a href="#">
                                    <i class="fa fa-facebook"></i>Facebook
                                  </a>
                                </li>
                                <li class="twitter">
                                  <a href="#">
                                    <i class="fa fa-twitter"></i>Twitter
                                  </a>
                                </li>
                                <li class="google-plus">
                                  <a href="#">
                                    <i class="fa fa-google-plus"></i>Google +
                                  </a>
                                </li>
                                <li class="instagram">
                                  <a href="#">
                                    <i class="fa fa-instagram"></i>Instagram
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="js/vendor/jquery-1.12.4.min.js"></script>

        <script src="js/vendor/popper.min.js"></script>

        <script src="js/bootstrap.min.js"></script>

        <script src="js/ajax-mail.js"></script>

        <script src="js/jquery.meanmenu.min.js"></script>

        <script src="js/wow.min.js"></script>

        <script src="js/slick.min.js"></script>

        <script src="js/owl.carousel.min.js"></script>

        <script src="js/jquery.magnific-popup.min.js"></script>

        <script src="js/isotope.pkgd.min.js"></script>

        <script src="js/imagesloaded.pkgd.min.js"></script>

        <script src="js/jquery.mixitup.min.js"></script>

        <script src="js/jquery.countdown.min.js"></script>

        <script src="js/jquery.counterup.min.js"></script>

        <script src="js/waypoints.min.js"></script>

        <script src="js/jquery.barrating.min.js"></script>

        <script src="js/jquery-ui.min.js"></script>

        <script src="js/venobox.min.js"></script>

        <script src="js/jquery.nice-select.min.js"></script>

        <script src="js/scrollUp.min.js"></script>

        <script src="js/main.js"></script>
      </div>
    </>
  );
}
