import React from "react";
import '../style.css';
import '../normalize.css'
import 'boxicons';
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


function Home() {
    const [rating, setRating] = useState(0) // Initial value

    return (
        <>
            <main className="main">
                <div className="slider">
                    <div className="container">
                        <div className="slider-sections">
                            <div className="slider-sections__right">
                                <img className="slider-sections__right__img" src="image/monitor01.png" alt="MONITOR" />
                            </div>
                            <div className="slider-sections__center">
                                <div className="slider-sections__center__item">
                                    <img className="slider-sections__center__item__img" src="image/webcam01.png" alt="WEBCAM" />
                                </div>
                                <div className="slider-sections__center__item">
                                    <img className="slider-sections__center__item__img" src="image/joystick01.png" alt="JOYSTICK" />
                                </div>
                            </div>
                            <div className="slider-sections__left">
                                <img className="slider-sections__left__img" src="image/phone01.png" alt="PHONE" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="guarantee">
                    <div className="container">
                        <div className="guarantee-content">
                            <div className="guarantee-content__item">
                                <div className="guarantee-content__item__icon">
                                    <box-icon type='solid' name='truck' size='lg'></box-icon>
                                </div>
                                <div className="guarantee-content__item__text">
                                    <h5 className="guarantee-content__item__text__up">حمل و نقل رایگان</h5>
                                    <h6 className="guarantee-content__item__text__down">حمل و نقل رایگان در همه منظور</h6>
                                </div>
                            </div>
                            <div className="guarantee-content__item">
                                <div className="guarantee-content__item__icon">
                                    <box-icon name='support' size='lg'></box-icon>
                                </div>
                                <div className="guarantee-content__item__text">
                                    <h5 className="guarantee-content__item__text__up">پشتیبانی آنلاین ۲۴/۷</h5>
                                    <h6 className="guarantee-content__item__text__down">پشتیبانی آنلاین ۲۴ ساعت در روز</h6>
                                </div>
                            </div>
                            <div className="guarantee-content__item">
                                <div className="guarantee-content__item__icon">
                                    <box-icon name='money-withdraw' size='lg'></box-icon>
                                </div>
                                <div className="guarantee-content__item__text">
                                    <h5 className="guarantee-content__item__text__up">بازگشت پول</h5>
                                    <h6 className="guarantee-content__item__text__down">تضمین بازگشت به کمتر از ۷ روز</h6>
                                </div>
                            </div>
                            <div className="guarantee-content__item">
                                <div className="guarantee-content__item__icon">
                                    <box-icon name='bank' type='solid' size='lg'></box-icon>
                                </div>
                                <div className="guarantee-content__item__text">
                                    <h5 className="guarantee-content__item__text__up">پرداخت امن</h5>
                                    <h6 className="guarantee-content__item__text__down">امنیت کامل در پرداخت</h6>
                                </div>
                            </div>
                            <div className="guarantee-content__item">
                                <div className="guarantee-content__item__icon">
                                    <box-icon name='discount' type='solid' size='lg'></box-icon>
                                </div>
                                <div className="guarantee-content__item__text">
                                    <h5 className="guarantee-content__item__text__up">تخفیف برای عضو</h5>
                                    <h6 className="guarantee-content__item__text__down">در هر سفارش بیش از ۲۰ درصد</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="proCategory">
                    <div className="container">
                        <div className="proCategory-main">
                            <div className="proCategory-content">
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/speaker01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>اسپیکر و صوتی</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/tablet01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>تبلت و موبایل</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/camera01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>دوربین فیلم برداری</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/watch01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>ساعت دیجیتال</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/computer01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>قطعات کامپیوتر</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/laptop01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>لپ تاپ و دسکتاپ</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/monitor02.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>مانیتور و تلویزیون</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/mouce01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>موس و کیبورد</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/hard01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>هارد و فلش</h6>
                                    </div>
                                </div>
                                <div className="proCategory-content__item">
                                    <div className="proCategory-content__item__img">
                                        <img src="image/headset01.jpg" alt="SPEAKER" />
                                    </div>
                                    <div className="proCategory-content__item__txt">
                                        <h6>هدست و هدفون</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lastProducts">
                    <div className="container">
                        <div className="lastProducts-main">
                            <div className="lastProducts-content">
                                <div className="lastProducts-content__txt">
                                    <div className="lastProducts-content__txt__title">
                                        <h4>آخرین محصولات</h4>
                                    </div>
                                    <div className="lastProducts-content__txt__links">
                                        <ul>
                                            <li>
                                                <a href="#">همه</a>
                                            </li>
                                            <li>
                                                <a href="#">مانیتور و تلویزیون</a>
                                            </li>
                                            <li>
                                                <a href="#">موس و کیبورد</a>
                                            </li>
                                            <li>
                                                <a href="#">وسایل الکترونیکی</a>
                                            </li>
                                            <li>
                                                <a href="#">وسایل بازی و گیم</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="lastProducts-content__items">
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/laptop02.jpg" alt="LAPTOP" />
                                        <h6>لپ تاپ ۱۵٫۶ اینچی ایسوس</h6>
                                        <h6>تومان ۳۵۰,۰۰۰</h6>
                                    </div>
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/joystick02.jpg" alt="LAPTOP" />
                                        <h6>دسته بازی پلی استیشن ۵</h6>
                                        <h6>تومان ۱۹۹,۰۰۰</h6>
                                    </div>
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/headset06.jpg" alt="LAPTOP" />
                                        <h6>هدست رنگ سفید اف اند دی</h6>
                                        <h6>تومان ۳۹۰,۰۰۰</h6>
                                    </div>
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/phone04.jpg" alt="LAPTOP" />
                                        <h6>گوشی موبایل سامسونگ</h6>
                                        <h6>تومان ۱۲۹,۰۰۰</h6>
                                    </div>
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/modem02.jpg" alt="LAPTOP" />
                                        <h6>مودم روتر بی سیم ایسوس</h6>
                                        <h6>تومان ۸۸,۰۰۰</h6>
                                    </div>
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/tablet03.jpg" alt="LAPTOP" />
                                        <h6>تبلت ساسونگ ۶۴ گیگابات</h6>
                                        <h6>تومان ۶۵۰,۰۰۰</h6>
                                    </div>
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/monitor05.jpg" alt="LAPTOP" />
                                        <h6>مانيتور گیمینگ سامسونگ</h6>
                                        <h6>تومان ۵۹۰,۰۰۰</h6>
                                    </div>
                                    <div className="lastProducts-content__items__post">
                                        <img src="image/webcam02.jpg" alt="LAPTOP" />
                                        <h6>وب کم بی سیم مایکروسافت</h6>
                                        <h6>تومان ۱۱۹,۰۰۰</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topThree">
                        <div className="container">
                            <div className="topThree-content">
                                <div className="topTree-content__item">
                                    <img src="image/watch02.png" alt="WATCH" />
                                </div>
                                <div className="topTree-content__item">
                                    <img src="image/phone03.png" alt="PHONE" />
                                </div>
                                <div className="topTree-content__item">
                                    <img src="image/headset04.png" alt="HEADSET" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer">
                        <div className="container">
                            <div className="offer-content">
                                <div className="content-title">
                                    <div className="content-title__rightText">
                                        <h3>تخفیف ویژه</h3>
                                    </div>
                                    <div className="content-title__leftText">
                                        <h5>مشاهده لیست کامل</h5>
                                    </div>
                                </div>
                                <div className="offer-content__items">
                                    <div className="offer-content__items__post">
                                        <div className="offer-post__imgBox">
                                            <img src="image/headset06.jpg" alt="HEADSET" />
                                        </div>
                                        <div className="offer-post__textBox">
                                            <h6>
                                                <a href="#">هدست رنگ سفید اف اند دی</a>
                                            </h6>
                                            <h6>تومان ۳۹۰,۰۰۰</h6>
                                            <ul>
                                                <li>صدای فراگیر پرو</li>
                                                <li>پدهای گوش فوم مموری قابل جدا شدن.</li>
                                                <li>هدفون تاشو قابل حمل برای کنسول</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="offer-content__items__post">
                                        <div className="offer-post__imgBox">
                                            <img src="image/modem02.jpg" alt="HEADSET" />
                                        </div>
                                        <div className="offer-post__textBox">
                                            <h6>
                                                <a href="#">مودم روتر بی سیم ایسوس</a>
                                            </h6>
                                            <h6>تومان ۸۸,۰۰۰</h6>
                                            <ul>
                                                <li>حمل و نقل پورت QoS تطبیقی</li>
                                                <li>روتر بازی دو بانده WiFi 6</li>
                                                <li>پشتیبانی از وای فای مش، پورت 2.5G</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="offer-content__items__post">
                                        <div className="offer-post__imgBox">
                                            <img src="image/headset09.jpg" alt="HEADSET" />
                                        </div>
                                        <div className="offer-post__textBox">
                                            <h6>
                                                <a href="#">هندزفری بلوتوثی تسکو</a>
                                            </h6>
                                            <h6>تومان ۱۳۹,۰۰۰</h6>
                                            <ul>
                                                <li>صدای فراگیر پرو</li>
                                                <li>پدهای گوش فوم مموری قابل جدا شدن.</li>
                                                <li>هدفون تاشو قابل حمل برای کنسول</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-slider">
                    <div className="container">
                        <div className="post-slider__content">
                            <div className="content-title">
                                <div className="content-title__rightText">
                                    <h3>هدست و هدفون</h3>
                                </div>
                                <div className="content-title__leftText">
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                            </div>
                            <div className="post-carousel">
                                <div className="post-slide">
                                    <img src="image/headset07.jpg" alt="" />
                                    <h3>هدست مخصوص اونیکوما</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars1" id="star1-1" value="1" /><label for="star1-1"></label>
                                        <input type="radio" name="stars1" id="star1-2" value="2" /><label for="star1-2"></label>
                                        <input type="radio" name="stars1" id="star1-3" value="3" /><label for="star1-3"></label>
                                        <input type="radio" name="stars1" id="star1-4" value="4" /><label for="star1-4"></label>
                                        <input type="radio" name="stars1" id="star1-5" value="5" /><label for="star1-5"></label>
                                    </div>
                                    <p>۱۲۵,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/laptop02.jpg" alt="" />
                                    <h3>لپ تاپ ۱۵٫۶ اینچی ایسوس</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars2" id="star2-1" value="1" /><label for="star2-1"></label>
                                        <input type="radio" name="stars2" id="star2-2" value="2" /><label for="star2-2"></label>
                                        <input type="radio" name="stars2" id="star2-3" value="3" /><label for="star2-3"></label>
                                        <input type="radio" name="stars2" id="star2-4" value="4" /><label for="star2-4"></label>
                                        <input type="radio" name="stars2" id="star2-5" value="5" /><label for="star2-5"></label>
                                    </div>
                                    <p>۳۵۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/joystick05.jpg" alt="" />
                                    <h3>دسته بازی پلی استیشن ۵</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars3" id="star3-1" value="1" /><label for="star3-1"></label>
                                        <input type="radio" name="stars3" id="star3-2" value="2" /><label for="star3-2"></label>
                                        <input type="radio" name="stars3" id="star3-3" value="3" /><label for="star3-3"></label>
                                        <input type="radio" name="stars3" id="star3-4" value="4" /><label for="star3-4"></label>
                                        <input type="radio" name="stars3" id="star3-5" value="5" /><label for="star3-5"></label>
                                    </div>
                                    <p>۱۹۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/headset08.jpg" alt="" />
                                    <h3>هدست رنگ سفید اف اند دی</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars4" id="star4-1" value="1" /><label for="star4-1"></label>
                                        <input type="radio" name="stars4" id="star4-2" value="2" /><label for="star4-2"></label>
                                        <input type="radio" name="stars4" id="star4-3" value="3" /><label for="star4-3"></label>
                                        <input type="radio" name="stars4" id="star4-4" value="4" /><label for="star4-4"></label>
                                        <input type="radio" name="stars4" id="star4-5" value="5" /><label for="star4-5"></label>
                                    </div>
                                    <p>۳۹۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/phone04.jpg" alt="" />
                                    <h3>گوشی موبایل سامسونگ</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars5" id="star5-1" value="1" /><label for="star5-1"></label>
                                        <input type="radio" name="stars5" id="star5-2" value="2" /><label for="star5-2"></label>
                                        <input type="radio" name="stars5" id="star5-3" value="3" /><label for="star5-3"></label>
                                        <input type="radio" name="stars5" id="star5-4" value="4" /><label for="star5-4"></label>
                                        <input type="radio" name="stars5" id="star5-5" value="5" /><label for="star5-5"></label>
                                    </div>
                                    <p>۱۲۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/modem02.jpg" alt="" />
                                    <h3>مودم روتر بی سیم ایسوس</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars6" id="star6-1" value="1" /><label for="star6-1"></label>
                                        <input type="radio" name="stars6" id="star6-2" value="2" /><label for="star6-2"></label>
                                        <input type="radio" name="stars6" id="star6-3" value="3" /><label for="star6-3"></label>
                                        <input type="radio" name="stars6" id="star6-4" value="4" /><label for="star6-4"></label>
                                        <input type="radio" name="stars6" id="star6-5" value="5" /><label for="star6-5"></label>
                                    </div>
                                    <p>۸۸,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/tablet03.jpg" alt="" />
                                    <h3>تبلت ساسونگ ۶۴ گیگابات</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars7" id="star7-1" value="1" /><label for="star7-1"></label>
                                        <input type="radio" name="stars7" id="star7-2" value="2" /><label for="star7-2"></label>
                                        <input type="radio" name="stars7" id="star7-3" value="3" /><label for="star7-3"></label>
                                        <input type="radio" name="stars7" id="star7-4" value="4" /><label for="star7-4"></label>
                                        <input type="radio" name="stars7" id="star7-5" value="5" /><label for="star7-5"></label>
                                    </div>
                                    <p>۶۵۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/monitor05.jpg" alt="" />
                                    <h3>مانيتور گیمینگ سامسونگ</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars8" id="star8-1" value="1" /><label for="star8-1"></label>
                                        <input type="radio" name="stars8" id="star8-2" value="2" /><label for="star8-2"></label>
                                        <input type="radio" name="stars8" id="star8-3" value="3" /><label for="star8-3"></label>
                                        <input type="radio" name="stars8" id="star8-4" value="4" /><label for="star8-4"></label>
                                        <input type="radio" name="stars8" id="star8-5" value="5" /><label for="star8-5"></label>
                                    </div>
                                    <p>۵۹۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/webcam02.jpg" alt="webcam" />
                                    <h3> وب کم بی سیم مایکروسافت</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars9" id="star9-1" value="1" /><label for="star9-1"></label>
                                        <input type="radio" name="stars9" id="star9-2" value="2" /><label for="star9-2"></label>
                                        <input type="radio" name="stars9" id="star9-3" value="3" /><label for="star9-3"></label>
                                        <input type="radio" name="stars9" id="star9-4" value="4" /><label for="star9-4"></label>
                                        <input type="radio" name="stars9" id="star9-5" value="5" /><label for="star9-5"></label>
                                    </div>
                                    <p>۱۱۹,۰۰۰ تومان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-slider">
                    <div className="container">
                        <div className="post-slider__content">
                            <div className="content-title">
                                <div className="content-title__rightText">
                                    <h3>مانیتور و تلویزیون</h3>
                                </div>
                                <div className="content-title__leftText">
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                            </div>
                            <div className="post-carousel">
                                <div className="post-slide">
                                    <img src="image/headset08.jpg" alt="" />
                                    <h3>هدست رنگ سفید اف اند دی</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars13" id="star13-1" value="1" /><label
                                            for="star13-1"></label>
                                        <input type="radio" name="stars13" id="star13-2" value="2" /><label
                                            for="star13-2"></label>
                                        <input type="radio" name="stars13" id="star13-3" value="3" /><label
                                            for="star13-3"></label>
                                        <input type="radio" name="stars13" id="star13-4" value="4" /><label
                                            for="star13-4"></label>
                                        <input type="radio" name="stars13" id="star13-5" value="5" /><label
                                            for="star13-5"></label>
                                    </div>
                                    <p>۳۹۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/joystick05.jpg" alt="" />
                                    <h3>دسته بازی پلی استیشن ۵</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars12" id="star12-1" value="1" /><label
                                            for="star12-1"></label>
                                        <input type="radio" name="stars12" id="star12-2" value="2" /><label
                                            for="star12-2"></label>
                                        <input type="radio" name="stars12" id="star12-3" value="3" /><label
                                            for="star12-3"></label>
                                        <input type="radio" name="stars12" id="star12-4" value="4" /><label
                                            for="star12-4"></label>
                                        <input type="radio" name="stars12" id="star12-5" value="5" /><label
                                            for="star12-5"></label>
                                    </div>
                                    <p>۱۹۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/modem02.jpg" alt="" />
                                    <h3>مودم روتر بی سیم ایسوس</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars15" id="star15-1" value="1" /><label
                                            for="star15-1"></label>
                                        <input type="radio" name="stars15" id="star15-2" value="2" /><label
                                            for="star15-2"></label>
                                        <input type="radio" name="stars15" id="star15-3" value="3" /><label
                                            for="star15-3"></label>
                                        <input type="radio" name="stars15" id="star15-4" value="4" /><label
                                            for="star15-4"></label>
                                        <input type="radio" name="stars15" id="star15-5" value="5" /><label
                                            for="star15-5"></label>
                                    </div>
                                    <p>۸۸,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/headset07.jpg" alt="" />
                                    <h3>هدست مخصوص اونیکوما</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars10" id="star10-1" value="1" /><label
                                            for="star10-1"></label>
                                        <input type="radio" name="stars10" id="star10-2" value="2" /><label
                                            for="star10-2"></label>
                                        <input type="radio" name="stars10" id="star10-3" value="3" /><label
                                            for="star10-3"></label>
                                        <input type="radio" name="stars10" id="star10-4" value="4" /><label
                                            for="star10-4"></label>
                                        <input type="radio" name="stars10" id="star10-5" value="5" /><label
                                            for="star10-5"></label>
                                    </div>
                                    <p>۱۲۵,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/webcam02.jpg" alt="webcam" />
                                    <h3> وب کم بی سیم مایکروسافت</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars18" id="star18-1" value="1" /><label
                                            for="star18-1"></label>
                                        <input type="radio" name="stars18" id="star18-2" value="2" /><label
                                            for="star18-2"></label>
                                        <input type="radio" name="stars18" id="star18-3" value="3" /><label
                                            for="star18-3"></label>
                                        <input type="radio" name="stars18" id="star18-4" value="4" /><label
                                            for="star18-4"></label>
                                        <input type="radio" name="stars18" id="star18-5" value="5" /><label
                                            for="star18-5"></label>
                                    </div>
                                    <p>۱۱۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/laptop02.jpg" alt="" />
                                    <h3>لپ تاپ ۱۵٫۶ اینچی ایسوس</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars11" id="star11-1" value="1" /><label
                                            for="star11-1"></label>
                                        <input type="radio" name="stars11" id="star11-2" value="2" /><label
                                            for="star11-2"></label>
                                        <input type="radio" name="stars11" id="star11-3" value="3" /><label
                                            for="star11-3"></label>
                                        <input type="radio" name="stars11" id="star11-4" value="4" /><label
                                            for="star11-4"></label>
                                        <input type="radio" name="stars11" id="star11-5" value="5" /><label
                                            for="star11-5"></label>
                                    </div>
                                    <p>۳۵۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/monitor05.jpg" alt="" />
                                    <h3>مانيتور گیمینگ سامسونگ</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars17" id="star17-1" value="1" /><label
                                            for="star17-1"></label>
                                        <input type="radio" name="stars17" id="star17-2" value="2" /><label
                                            for="star17-2"></label>
                                        <input type="radio" name="stars17" id="star17-3" value="3" /><label
                                            for="star17-3"></label>
                                        <input type="radio" name="stars17" id="star17-4" value="4" /><label
                                            for="star17-4"></label>
                                        <input type="radio" name="stars17" id="star17-5" value="5" /><label
                                            for="star17-5"></label>
                                    </div>
                                    <p>۵۹۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/phone04.jpg" alt="" />
                                    <h3>گوشی موبایل سامسونگ</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars14" id="star14-1" value="1" /><label
                                            for="star14-1"></label>
                                        <input type="radio" name="stars14" id="star14-2" value="2" /><label
                                            for="star14-2"></label>
                                        <input type="radio" name="stars14" id="star14-3" value="3" /><label
                                            for="star14-3"></label>
                                        <input type="radio" name="stars14" id="star14-4" value="4" /><label
                                            for="star14-4"></label>
                                        <input type="radio" name="stars14" id="star14-5" value="5" /><label
                                            for="star14-5"></label>
                                    </div>
                                    <p>۱۲۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/tablet03.jpg" alt="" />
                                    <h3>تبلت ساسونگ ۶۴ گیگابات</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars16" id="star16-1" value="1" /><label
                                            for="star16-1"></label>
                                        <input type="radio" name="stars16" id="star16-2" value="2" /><label
                                            for="star16-2"></label>
                                        <input type="radio" name="stars16" id="star16-3" value="3" /><label
                                            for="star16-3"></label>
                                        <input type="radio" name="stars16" id="star16-4" value="4" /><label
                                            for="star16-4"></label>
                                        <input type="radio" name="stars16" id="star16-5" value="5" /><label
                                            for="star16-5"></label>
                                    </div>
                                    <p>۶۵۰,۰۰۰ تومان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="suggestion">
                    <div className="container">
                        <div className="suggestion-content">
                            <div className="suggestion-content__sideItem">
                                <img src="image/phone07.png" alt="" />
                                <img src="image/phone08.png" alt="" />
                            </div>
                            <div className="suggestion-content__centerItem">
                                <img src="image/computer02.png" alt="" />
                            </div>
                            <div className="suggestion-content__sideItem">
                                <img src="image/smartWatch01.png" alt="" />
                                <img src="image/laptop04.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-slider">
                    <div className="container">
                        <div className="post-slider__content">
                            <div className="content-title">
                                <div className="content-title__rightText">
                                    <h3>وسایل گیم و بازی</h3>
                                </div>
                                <div className="content-title__leftText">
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                            </div>
                            <div className="post-carousel">
                                <div className="post-slide">
                                    <img src="image/joystick05.jpg" alt="" />
                                    <h3>دسته بازی پلی استیشن ۵</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars26" id="star26-1" value="1" /><label
                                            for="star26-1"></label>
                                        <input type="radio" name="stars26" id="star26-2" value="2" /><label
                                            for="star26-2"></label>
                                        <input type="radio" name="stars26" id="star26-3" value="3" /><label
                                            for="star26-3"></label>
                                        <input type="radio" name="stars26" id="star26-4" value="4" /><label
                                            for="star26-4"></label>
                                        <input type="radio" name="stars26" id="star26-5" value="5" /><label
                                            for="star26-5"></label>
                                    </div>
                                    <p>۱۹۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/modem02.jpg" alt="" />
                                    <h3>مودم روتر بی سیم ایسوس</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars19" id="star19-1" value="1" /><label
                                            for="star19-1"></label>
                                        <input type="radio" name="stars19" id="star19-2" value="2" /><label
                                            for="star19-2"></label>
                                        <input type="radio" name="stars19" id="star19-3" value="3" /><label
                                            for="star19-3"></label>
                                        <input type="radio" name="stars19" id="star19-4" value="4" /><label
                                            for="star19-4"></label>
                                        <input type="radio" name="stars19" id="star19-5" value="5" /><label
                                            for="star19-5"></label>
                                    </div>
                                    <p>۸۸,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/webcam02.jpg" alt="webcam" />
                                    <h3> وب کم بی سیم مایکروسافت</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars21" id="star21-1" value="1" /><label
                                            for="star21-1"></label>
                                        <input type="radio" name="stars21" id="star21-2" value="2" /><label
                                            for="star21-2"></label>
                                        <input type="radio" name="stars21" id="star21-3" value="3" /><label
                                            for="star21-3"></label>
                                        <input type="radio" name="stars21" id="star21-4" value="4" /><label
                                            for="star21-4"></label>
                                        <input type="radio" name="stars21" id="star21-5" value="5" /><label
                                            for="star21-5"></label>
                                    </div>
                                    <p>۱۱۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/headset08.jpg" alt="" />
                                    <h3>هدست رنگ سفید اف اند دی</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars27" id="star27-1" value="1" /><label
                                            for="star27-1"></label>
                                        <input type="radio" name="stars27" id="star27-2" value="2" /><label
                                            for="star27-2"></label>
                                        <input type="radio" name="stars27" id="star27-3" value="3" /><label
                                            for="star27-3"></label>
                                        <input type="radio" name="stars27" id="star27-4" value="4" /><label
                                            for="star27-4"></label>
                                        <input type="radio" name="stars27" id="star27-5" value="5" /><label
                                            for="star27-5"></label>
                                    </div>
                                    <p>۳۹۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/tablet03.jpg" alt="" />
                                    <h3>تبلت ساسونگ ۶۴ گیگابات</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars25" id="star25-1" value="1" /><label
                                            for="star25-1"></label>
                                        <input type="radio" name="stars25" id="star25-2" value="2" /><label
                                            for="star25-2"></label>
                                        <input type="radio" name="stars25" id="star25-3" value="3" /><label
                                            for="star25-3"></label>
                                        <input type="radio" name="stars25" id="star25-4" value="4" /><label
                                            for="star25-4"></label>
                                        <input type="radio" name="stars25" id="star25-5" value="5" /><label
                                            for="star25-5"></label>
                                    </div>
                                    <p>۶۵۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/monitor05.jpg" alt="" />
                                    <h3>مانيتور گیمینگ سامسونگ</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars23" id="star23-1" value="1" /><label
                                            for="star23-1"></label>
                                        <input type="radio" name="stars23" id="star23-2" value="2" /><label
                                            for="star23-2"></label>
                                        <input type="radio" name="stars23" id="star23-3" value="3" /><label
                                            for="star23-3"></label>
                                        <input type="radio" name="stars23" id="star23-4" value="4" /><label
                                            for="star23-4"></label>
                                        <input type="radio" name="stars23" id="star23-5" value="5" /><label
                                            for="star23-5"></label>
                                    </div>
                                    <p>۵۹۰,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/phone04.jpg" alt="" />
                                    <h3>گوشی موبایل سامسونگ</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars24" id="star24-1" value="1" /><label
                                            for="star24-1"></label>
                                        <input type="radio" name="stars24" id="star24-2" value="2" /><label
                                            for="star24-2"></label>
                                        <input type="radio" name="stars24" id="star24-3" value="3" /><label
                                            for="star24-3"></label>
                                        <input type="radio" name="stars24" id="star24-4" value="4" /><label
                                            for="star24-4"></label>
                                        <input type="radio" name="stars24" id="star24-5" value="5" /><label
                                            for="star24-5"></label>
                                    </div>
                                    <p>۱۲۹,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/headset07.jpg" alt="" />
                                    <h3>هدست مخصوص اونیکوما</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars20" id="star20-1" value="1" /><label
                                            for="star20-1"></label>
                                        <input type="radio" name="stars20" id="star20-2" value="2" /><label
                                            for="star20-2"></label>
                                        <input type="radio" name="stars20" id="star20-3" value="3" /><label
                                            for="star20-3"></label>
                                        <input type="radio" name="stars20" id="star20-4" value="4" /><label
                                            for="star20-4"></label>
                                        <input type="radio" name="stars20" id="star20-5" value="5" /><label
                                            for="star20-5"></label>
                                    </div>
                                    <p>۱۲۵,۰۰۰ تومان</p>
                                </div>
                                <div className="post-slide">
                                    <img src="image/laptop02.jpg" alt="" />
                                    <h3>لپ تاپ ۱۵٫۶ اینچی ایسوس</h3>
                                    <div className="rating">
                                        <input type="radio" name="stars22" id="star22-1" value="1" /><label
                                            for="star22-1"></label>
                                        <input type="radio" name="stars22" id="star22-2" value="2" /><label
                                            for="star22-2"></label>
                                        <input type="radio" name="stars22" id="star22-3" value="3" /><label
                                            for="star22-3"></label>
                                        <input type="radio" name="stars22" id="star22-4" value="4" /><label
                                            for="star22-4"></label>
                                        <input type="radio" name="stars22" id="star22-5" value="5" /><label
                                            for="star22-5"></label>
                                    </div>
                                    <p>۳۵۰,۰۰۰ تومان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <div className="container">
                        <div className="summary-content">
                            <div className="summary-content__item">
                                <div className="summary-content__item__text">
                                    <h3>ساعت دیجیتال</h3>
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/headset07.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>هدست مخصوص اونیکوما</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars28" id="star28-1" value="1" /><label
                                                for="star28-1"></label>
                                            <input type="radio" name="stars28" id="star28-2" value="2" /><label
                                                for="star28-2"></label>
                                            <input type="radio" name="stars28" id="star28-3" value="3" /><label
                                                for="star28-3"></label>
                                            <input type="radio" name="stars28" id="star28-4" value="4" /><label
                                                for="star28-4"></label>
                                            <input type="radio" name="stars28" id="star28-5" value="5" /><label
                                                for="star28-5"></label>
                                        </div>
                                        <h4>۱۲۵,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/modem02.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>مودم روتر بی سیم ایسوس</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars29" id="star29-1" value="1" /><label
                                                for="star29-1"></label>
                                            <input type="radio" name="stars29" id="star29-2" value="2" /><label
                                                for="star29-2"></label>
                                            <input type="radio" name="stars29" id="star29-3" value="3" /><label
                                                for="star29-3"></label>
                                            <input type="radio" name="stars29" id="star29-4" value="4" /><label
                                                for="star29-4"></label>
                                            <input type="radio" name="stars29" id="star29-5" value="5" /><label
                                                for="star29-5"></label>
                                        </div>
                                        <h4>۸۸,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/monitor05.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>مانيتور گیمینگ سامسونگ</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars30" id="star30-1" value="1" /><label
                                                for="star30-1"></label>
                                            <input type="radio" name="stars30" id="star30-2" value="2" /><label
                                                for="star30-2"></label>
                                            <input type="radio" name="stars30" id="star30-3" value="3" /><label
                                                for="star30-3"></label>
                                            <input type="radio" name="stars30" id="star30-4" value="4" /><label
                                                for="star30-4"></label>
                                            <input type="radio" name="stars30" id="star30-5" value="5" /><label
                                                for="star30-5"></label>
                                        </div>
                                        <h4>۵۹۰,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="summary-content__item">
                                <div className="summary-content__item__text">
                                    <h3>قطعات کامپیوتر</h3>
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/laptop02.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>لپ تاپ ۱۵٫۶ اینچی ایسوس</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars28" id="star28-1" value="1" /><label
                                                for="star28-1"></label>
                                            <input type="radio" name="stars28" id="star28-2" value="2" /><label
                                                for="star28-2"></label>
                                            <input type="radio" name="stars28" id="star28-3" value="3" /><label
                                                for="star28-3"></label>
                                            <input type="radio" name="stars28" id="star28-4" value="4" /><label
                                                for="star28-4"></label>
                                            <input type="radio" name="stars28" id="star28-5" value="5" /><label
                                                for="star28-5"></label>
                                        </div>
                                        <h4>۳۵۰,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/modem02.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>مودم روتر بی سیم ایسوس</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars29" id="star29-1" value="1" /><label
                                                for="star29-1"></label>
                                            <input type="radio" name="stars29" id="star29-2" value="2" /><label
                                                for="star29-2"></label>
                                            <input type="radio" name="stars29" id="star29-3" value="3" /><label
                                                for="star29-3"></label>
                                            <input type="radio" name="stars29" id="star29-4" value="4" /><label
                                                for="star29-4"></label>
                                            <input type="radio" name="stars29" id="star29-5" value="5" /><label
                                                for="star29-5"></label>
                                        </div>
                                        <h4>۸۸,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/headset07.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>هدست مخصوص اونیکوما</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars30" id="star30-1" value="1" /><label
                                                for="star30-1"></label>
                                            <input type="radio" name="stars30" id="star30-2" value="2" /><label
                                                for="star30-2"></label>
                                            <input type="radio" name="stars30" id="star30-3" value="3" /><label
                                                for="star30-3"></label>
                                            <input type="radio" name="stars30" id="star30-4" value="4" /><label
                                                for="star30-4"></label>
                                            <input type="radio" name="stars30" id="star30-5" value="5" /><label
                                                for="star30-5"></label>
                                        </div>
                                        <h4>۱۲۵,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="summary-content__item">
                                <div className="summary-content__item__text">
                                    <h3>موس و کیبورد</h3>
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/headset01.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>هدست مخصوص اونیکوما</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars28" id="star28-1" value="1" /><label
                                                for="star28-1"></label>
                                            <input type="radio" name="stars28" id="star28-2" value="2" /><label
                                                for="star28-2"></label>
                                            <input type="radio" name="stars28" id="star28-3" value="3" /><label
                                                for="star28-3"></label>
                                            <input type="radio" name="stars28" id="star28-4" value="4" /><label
                                                for="star28-4"></label>
                                            <input type="radio" name="stars28" id="star28-5" value="5" /><label
                                                for="star28-5"></label>
                                        </div>
                                        <h4>۱۲۵,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/headset07.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>هدست مخصوص اونیکوما</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars29" id="star29-1" value="1" /><label
                                                for="star29-1"></label>
                                            <input type="radio" name="stars29" id="star29-2" value="2" /><label
                                                for="star29-2"></label>
                                            <input type="radio" name="stars29" id="star29-3" value="3" /><label
                                                for="star29-3"></label>
                                            <input type="radio" name="stars29" id="star29-4" value="4" /><label
                                                for="star29-4"></label>
                                            <input type="radio" name="stars29" id="star29-5" value="5" /><label
                                                for="star29-5"></label>
                                        </div>
                                        <h4>۱۲۵,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/tablet03.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>تبلت ساسونگ ۶۴ گیگابات</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars30" id="star30-1" value="1" /><label
                                                for="star30-1"></label>
                                            <input type="radio" name="stars30" id="star30-2" value="2" /><label
                                                for="star30-2"></label>
                                            <input type="radio" name="stars30" id="star30-3" value="3" /><label
                                                for="star30-3"></label>
                                            <input type="radio" name="stars30" id="star30-4" value="4" /><label
                                                for="star30-4"></label>
                                            <input type="radio" name="stars30" id="star30-5" value="5" /><label
                                                for="star30-5"></label>
                                        </div>
                                        <h4>۶۵۰,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="summary-content__item">
                                <div className="summary-content__item__text">
                                    <h3>هارد و فلش</h3>
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/webcam02.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>وب کم بی سیم مایکروسافت</h4>
                                        <div className="rating">
                                            <input type="radio" name="stars28" id="star28-1" value="1" /><label
                                                for="star28-1"></label>
                                            <input type="radio" name="stars28" id="star28-2" value="2" /><label
                                                for="star28-2"></label>
                                            <input type="radio" name="stars28" id="star28-3" value="3" /><label
                                                for="star28-3"></label>
                                            <input type="radio" name="stars28" id="star28-4" value="4" /><label
                                                for="star28-4"></label>
                                            <input type="radio" name="stars28" id="star28-5" value="5" /><label
                                                for="star28-5"></label>
                                        </div>
                                        <h4>۱۱۹,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/headset08.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>هدست رنگ سفید اف اند دی</h4>
                                        <div className="rating">
                                        <Rating style={{ maxWidth: 250 }} value={3}  />
                                        </div>
                                        <h4>۳۹۰,۰۰۰,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                                <div className="summary-content__item__product">
                                    <div className="item-product__image">
                                        <img src="image/headset07.jpg" alt="" />
                                    </div>
                                    <div className="item-product__title">
                                        <h4>هدست مخصوص اونیکوما</h4>
                                        <Rating style={{ maxWidth: 250 }} value={2}  />
                                        <h4>۱۲۵,۰۰۰ تومان</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news">
                    <div className="container">
                        <div className="news-content">
                            <div className="content-title">
                                <div className="content-title__rightText">
                                    <h3>آخرین اخبار</h3>
                                </div>
                                <div className="content-title__leftText">
                                    <h5>مشاهده لیست کامل</h5>
                                </div>
                            </div>
                            <div className="news-content__items">
                                <div className="news-content__items__post">
                                    <div className="news-items__post__image">
                                        <img src="image/news01.jpg" alt="NEWS" />
                                    </div>
                                    <h1>تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی</h1>
                                    <span>توسط ادمین | آذر ۲۵, ۱۳۹۵</span>
                                    <h5>تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در شصت و س...</h5>
                                </div>
                                <div className="news-content__items__post">
                                    <div className="news-items__post__image">
                                        <img src="image/news07.jpg" alt="NEWS" />
                                    </div>
                                    <h1>موبایل برآزمایش جاده هایی که اتومبیل های الکتریکی هستند</h1>
                                    <span>توسط ادمین | آذر ۲۵, ۱۳۹۵</span>
                                    <h5>ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                                        جامعه و متخ...</h5>
                                </div>
                                <div className="news-content__items__post">
                                    <div className="news-items__post__image">
                                        <img src="image/news08.jpg" alt="NEWS" />
                                    </div>
                                    <h1>می تواند شما را در آمازون یا گوگل کار می کنند و یک زندگی</h1>
                                    <span>توسط ادمین | آذر ۲۵, ۱۳۹۵</span>
                                    <h5>کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                                        تا با نرم ا...</h5>
                                </div>
                                <div className="news-content__items__post">
                                    <div className="news-items__post__image">
                                        <img src="image/news04.jpg" alt="NEWS" />
                                    </div>
                                    <h1>نودیا با یک دستگاه نه تنها برای بازی به اتاق نشیمن شما حرکت می کند</h1>
                                    <span>توسط ادمین | آذر ۲۵, ۱۳۹۵</span>
                                    <h5>تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در حال و آ...</h5>
                                </div>
                                <div className="news-content__items__post">
                                    <div className="news-items__post__image">
                                        <img src="image/news06.jpg" alt="NEWS" />
                                    </div>
                                    <h1>حضور خود را در چین با ۲ سرمایه گذار جدید رونق می دهد</h1>
                                    <span>توسط ادمین | آذر ۲۵, ۱۳۹۵</span>
                                    <h5>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد ن...</h5>
                                </div>
                                <div className="news-content__items__post">
                                    <div className="news-items__post__image">
                                        <img src="image/news05.jpg" alt="NEWS" />
                                    </div>
                                    <h1>چگونه با شکوه چندین پیشنهاد شغلی را انجام دهیم و در بالا بروی</h1>
                                    <span>توسط ادمین | آذر ۲۵, ۱۳۹۵</span>
                                    <h5>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                        است. چاپگرها...</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



        </>
    );
}
export default Home;