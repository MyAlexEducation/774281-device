//оживление слайдеров
var promotion_slids = document.querySelectorAll(".promotion-item");
var promotion_slide_current = document.querySelector(".promotion-item.current");
var promotion_btns = document.querySelectorAll(".promotion-btn");
var promotion_btn_current = document.querySelector(".promotion-btn.current");
promotion_btns[0].addEventListener("click", function(evt) {
  evt.preventDefault();
  promotion_btns[0].classList.add("current");
  promotion_btn_current.classList.remove("current");
  promotion_btn_current = promotion_btns[0];
  promotion_slids[0].classList.add("current");
  promotion_slide_current.classList.remove("current");
  promotion_slide_current = promotion_slids[0];
})
promotion_btns[1].addEventListener("click", function(evt) {
  evt.preventDefault();
  promotion_btns[1].classList.add("current");
  promotion_btn_current.classList.remove("current");
  promotion_btn_current = promotion_btns[1];
  promotion_slids[1].classList.add("current");
  promotion_slide_current.classList.remove("current");
  promotion_slide_current = promotion_slids[1];
})
promotion_btns[2].addEventListener("click", function(evt) {
  evt.preventDefault();
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
service_btns[0].addEventListener("click", function(evt) {
  evt.preventDefault();
  service_btns[0].classList.add("current");
  service_btn_current.classList.remove("current");
  service_btn_current = service_btns[0];
  service_slids[0].classList.add("current");
  service_slide_current.classList.remove("current");
  service_slide_current = service_slids[0];
})
service_btns[1].addEventListener("click", function(evt) {
  evt.preventDefault();
  service_btns[1].classList.add("current");
  service_btn_current.classList.remove("current");
  service_btn_current = service_btns[1];
  service_slids[1].classList.add("current");
  service_slide_current.classList.remove("current");
  service_slide_current = service_slids[1];
})
service_btns[2].addEventListener("click", function(evt) {
  evt.preventDefault();
  service_btns[2].classList.add("current");
  service_btn_current.classList.remove("current");
  service_btn_current = service_btns[2];
  service_slids[2].classList.add("current");
  service_slide_current.classList.remove("current");
  service_slide_current = service_slids[2];
})
//Оживление модалок
var about_us_btn = document.querySelector(".about-us .btn");
var about_us_modal = document.querySelector(".modal-feedback");
about_us_btn.addEventListener("click", function(evt){
  evt.preventDefault();
  about_us_modal.classList.add("modal-show");
})
var close_about_us_modal = about_us_modal.querySelector(".modal-close");
close_about_us_modal.addEventListener("click", function(evt){
  evt.preventDefault();
  about_us_modal.classList.remove("modal-show");
});
var about_us_modal_form = about_us_modal.querySelector("form");
var about_us_modal_form_name = about_us_modal_form.querySelector("[name=name]");
var about_us_modal_form_email = about_us_modal_form.querySelector("[name=email]");
var about_us_modal_form_letter = about_us_modal_form.querySelector("[name=letter]");
about_us_modal_form.addEventListener("submit", function(evt){
  if(!about_us_modal_form_name.value || !about_us_modal_form_email.value || !about_us_modal_form_letter.value) {
       evt.preventDefault();
     }
});
//////////////////////////////////////////////////////////////
var contacts_map = document.querySelector(".contacts-map")
var modal_map = document.querySelector(".modal-map");
contacts_map.addEventListener("click",function(evt){
  evt.preventDefault();
  modal_map.classList.add("modal-show");
})
var close_modal_map = modal_map.querySelector(".modal-close");
close_modal_map.addEventListener("click", function(evt){
  evt.preventDefault();
  modal_map.classList.remove("modal-show");
})
