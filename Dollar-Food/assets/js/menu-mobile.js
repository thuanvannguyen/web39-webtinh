// B1 truy cap phan tu
const mobileButton = document.querySelector(".mobile-icon");
const headerBottom = document.querySelector(".header-bottom");
const mobileClose = document.querySelector(".close-mobile");
console.log(mobileClose);

/* Open Menu mobile */ 
// B2: Bat su kien nguoi dung click mobileButton
mobileButton.addEventListener("click", () => {
  // alert("123");
  headerBottom.style.left = "0";
});

/* Close Menu Mobile*/
mobileClose.addEventListener("click", ()=>{
  headerBottom.style.left = "-100%";
})