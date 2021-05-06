const GetDropDownSalesHead = document.querySelector(".sales-item-head");
const SalesContent = document.querySelector(".sales-contact");
const SideBar = document.querySelector(".sidebar-wrapper");
const BurgerMenu = document.querySelector(".burger-menu");
const CloseIcon = document.querySelector(".sidebar-wrapper  .image-wrapper");
const SideGroupHead=document.querySelector(".side-group-head")
const SideGroupHeadArrow=document.querySelector(".side-group-head-arrow")
const SideGroupContent=document.querySelector(".inner-setting")




const HandleSideBarOpening = (e) => {
  SideBar.classList.add("active");
};
const HandleSideBarClosing = (e) => {
  SideBar.classList.remove("active");
};
const GetDropDownFinanceDropDownHead = document.querySelector(
  ".finance-dropdown-head"
);
const FinanceContent = document.querySelector(".finance-dropdown-content");

GetDropDownSalesHead.addEventListener("click", (e) => {
  SalesContent.classList.toggle("active");
});
GetDropDownFinanceDropDownHead.addEventListener("click", (e) => {
  FinanceContent.classList.toggle("active");
});
SideGroupHead.addEventListener("click",(e)=>{
  SideGroupHeadArrow.classList.toggle("active");
  SideGroupContent.classList.toggle("active");
})

BurgerMenu.addEventListener("click", HandleSideBarOpening);
CloseIcon.addEventListener("click", HandleSideBarClosing);
