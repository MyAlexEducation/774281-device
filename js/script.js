//оживление слайдеров
var promotion_slids = document.querySelectorAll(".promotion-item");
var promotion_slide_current = document.querySelector(".promotion-item.current");
var promotion_btns = document.querySelectorAll(".promotion-btn");
var promotion_btn_current = document.querySelector(".promotion-btn.current");
promotion_btns[0].addEventListener("click", function() {
  promotion_btns[0].classList.add("current");
  promotion_btn_current.classList.remove("current");
  promotion_btn_current = promotion_btns[0];
  promotion_slids[0].classList.add("current");
  promotion_slide_current.classList.remove("current");
  promotion_slide_current = promotion_slids[0];
})
promotion_btns[1].addEventListener("click", function() {
  promotion_btns[1].classList.add("current");
  promotion_btn_current.classList.remove("current");
  promotion_btn_current = promotion_btns[1];
  promotion_slids[1].classList.add("current");
  promotion_slide_current.classList.remove("current");
  promotion_slide_current = promotion_slids[1];
})
promotion_btns[2].addEventListener("click", function() {
  promotion_btns[2].classList.add("current");
  promotion_btn_current.classList.remove("current");
  promotion_btn_current = promotion_btns[2];
  promotion_slids[2].classList.add("current");
  promotion_slide_current.classList.remove("current");
  promotion_slide_current = promotion_slids[2];
})
//////////////////////////////////////////////////////////////////////
var service_slids = document.querySelectorAll(".service-item");
var service_slide_current = document.querySelector(".service-item.current");
var service_btns = document.querySelectorAll(".service-button");
var service_btn_current = document.querySelector(".service-button.current");
service_btns[0].addEventListener("click", function() {
  service_btns[0].classList.add("current");
  service_btn_current.classList.remove("current");
  service_btn_current = service_btns[0];
  service_slids[0].classList.add("current");
  service_slide_current.classList.remove("current");
  service_slide_current = service_slids[0];
})
service_btns[1].addEventListener("click", function() {
  service_btns[1].classList.add("current");
  service_btn_current.classList.remove("current");
  service_btn_current = service_btns[1];
  service_slids[1].classList.add("current");
  service_slide_current.classList.remove("current");
  service_slide_current = service_slids[1];
})
service_btns[2].addEventListener("click", function() {
  service_btns[2].classList.add("current");
  service_btn_current.classList.remove("current");
  service_btn_current = service_btns[2];
  service_slids[2].classList.add("current");
  service_slide_current.classList.remove("current");
  service_slide_current = service_slids[2];
})
//Оживление модалок
