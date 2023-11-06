import React from "react";
import { Link, Outlet } from "react-router-dom";
import './style.css'
import './normalize.css'
import 'boxicons'

function App() {
  return (
    <>
      <header className="header">
        <div className="topBar">
          <div className="container">
            <section className="topBar__top">
              <div className="topBar-content">
                <div className="topBar-content__right">
                  <ul className="topBar-content__ul">
                    <li>
                      <Link to="/home">صفحه اصلی</Link>
                    </li>
                    <li>
                      <Link to="/tablet">تبلت و موبایل</Link>
                    </li>
                    <li>
                      <Link to="/camera">دوربین فیلم برداری</Link>
                    </li>
                    <li>
                      <Link to="/watch">ساعت دیجیتال</Link>
                    </li>
                    <li>
                      <Link to="/computer">قطعات کامپیوتر</Link>
                    </li>
                    <li>
                      <Link to="/laptop">لپ تاپ و دسکتاپ</Link>
                    </li>
                    <li>
                      <Link to="/monitor">مانیتور و تلویزیون</Link>
                    </li>
                  </ul>
                </div>
                <div className="topBar-content__left">
                  <div className="topBar-content__left__box">
                    <h6 className="topBar-content__left__text">فروردین ۲۰, ۱۴۰۲</h6>
                    <h6 className="topBar-content__left__text">
                      <box-icon name='phone' ></box-icon>
                      ۰۰۳۲ ۴۳۵ ۶۵۴۳
                    </h6>
                    <h6 className="topBar-content__left__text">
                      <box-icon name='envelope' ></box-icon>
                      example.store@email.com
                    </h6>
                  </div>
                </div>
              </div>
            </section>
            <section className="header__middle"></section>
            <section className="header__bottom"></section>
          </div>
        </div>
        <div className="navBar">
          <div className="container">
            <div className="navBar-content">
              <div className="navBar-logoBox">
                <img className="navBar-logoBox__img" src="image/logo-IRANSTORE.png" alt="LOGO" />
              </div>
              <form className="navBar-searchBox" action="" method="get">
                <select name="" className="navBar-searchBox__select">
                  <option value="cat-0">همه دسته‌بندی ها</option>
                  <option value="cat-1">موس و کیبورد</option>
                  <option value="cat-2">مانیتور و تلویزیون</option>
                  <option value="cat-3">لپ تاپ و دسکتاپ</option>
                  <option value="cat-4">قطعات کامپیوتر</option>
                  <option value="cat-5">ساعت دیجیتال</option>
                  <option value="cat-6">دوربین فیلم برداری</option>
                  <option value="cat-7">تبلت و موبایل</option>
                  <option value="cat-8">اسپیکر و صوتی</option>
                  <option value="cat-9">هارد و فلش</option>
                  <option value="cat-10">هدست و هدفون</option>
                  <option value="cat-11">وسایل الکترونیکی</option>
                  <option value="cat-12">وسایل بازی و گیم</option>
                </select>
                <span>|</span>
                <input type="text" name="" className="navBar-searchBox__input" placeholder="جستجو..." />
                <button className="navBar-searchBox__button">
                  <box-icon name='search-alt-2' color='white' ></box-icon>
                </button>
              </form>
              <div className="navBar-accountBox">
                <div className="navbar-accountBox__favorites">
                  <div className="navbar-rightSec">
                    <box-icon name='heart' ></box-icon>
                  </div>
                  <div className="navbar-accountBox__leftSec">
                    <h6 className="navbar-topText">موارد دلخواه </h6>
                    <h5 className="navbar-botText">علاقه مندی ها</h5>
                  </div>
                </div>
                <div className="navbar-accountBox__login">
                  <div className="navbar-rightSec">
                    <box-icon name='user' ></box-icon>
                  </div>
                  <div className="navbar-accountBox__leftSec">
                    <h6 className="navbar-topText">ورود یا</h6>
                    <h5 className="navbar-botText">ثبت نام</h5>
                  </div>
                </div>
                <div className="navbar-accountBox__shopping">
                  <div className="navbar-rightSec">
                    <box-icon name='cart' ></box-icon>
                  </div>
                  <div className="navbar-accountBox__leftSec">
                    <h6 className="navbar-topText">سبد خرید</h6>
                    <h5 className="navbar-botText">0 تومان</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menuBar">
          <div className="container">
            <div className="menuBar-content">
              <div className="menuBar-content__menuBox">
                <select name="" className="menuBar-category">
                  <option value="cat-11" className="menuBar-category__option">همه دسته بندی ها</option>
                  <option value="cat-11" className="menuBar-category__option">تنظیم فهرست</option>
                </select>
                <div className="menuBar-setting">
                  <h5 className="menuBar-setting">تنظیم فهرست</h5>
                </div>
              </div>
              <div className="menuBar-content__mediaBox">
                <box-icon type='logo' name='facebook-circle' color='#395498'></box-icon>
                <box-icon name='twitter' type='logo' color='#5da9dd'></box-icon>
                <box-icon name='google-plus' type='logo' color='#d54c40'></box-icon>
                <box-icon name='telegram' type='logo' color='#29a1d5'></box-icon>
                <box-icon name='instagram-alt' type='logo' color='#00afc0'></box-icon>
              </div>
            </div>
          </div>
        </div>
      </header >

      <Outlet />


      <footer class="footer">
        <div class="footer-topBox"></div>
        <div class="footer-botBox">
          <div class="container">
            <div class="footer-botBox__content">
              <div class="footer-botBox__content__text">
                <h4>© Copyright 2023 | template designed by Saoshyant - All rights reserved | Designed for
                  WordPress</h4>
              </div>
              <div class="footer-botBox__content__media">
                <box-icon type='logo' name='facebook-circle' color='#395498'></box-icon>
                <box-icon name='twitter' type='logo' color='#5da9dd'></box-icon>
                <box-icon name='google-plus' type='logo' color='#d54c40'></box-icon>
                <box-icon name='telegram' type='logo' color='#29a1d5'></box-icon>
                <box-icon name='instagram-alt' type='logo' color='#00afc0'></box-icon>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
