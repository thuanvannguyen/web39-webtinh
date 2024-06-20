document.addEventListener("DOMContentLoaded", () => {

  const setActiveMenu = (selector) => {
    // B1: Truy cap vao PT menu li
    const menuItems = document.querySelectorAll(selector);

    // Remove active old
    const removeActiveClasses = (menuItems) => {
      menuItems.forEach((value) => {
        value.classList.remove("active");
      });
    }

    // Kiem tra xem Menu da co PT nao active trong locaStorage ?
    let activeIndex = localStorage.getItem("ACTIVE_MENU");

    if (activeIndex !== null) {
      // Xoa cac "active" cu di
      removeActiveClasses(menuItems);
      // Them "active" dang co trong localStorage
      menuItems[activeIndex].classList.add("active");
    } else {
      menuItems[0].classList.add("active");
    }


    // B2: Lap qua menuTems -> Gan 1 su kien doi user click "active"
    menuItems.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        // Xoa cac "active" cu di
        removeActiveClasses(menuItems);
        // Them "active" moi
        item.classList.add("active");
        // Set lai gia "active" vao trong localStorage
        localStorage.setItem("ACTIVE_MENU", index);

        // C1: Reset thuoc tinh the a sau khi  event.preventDefault();
        const href = item.querySelector("a").getAttribute("href");
        window.location.href = href;

        // c2: Su dung chi index
      });

    });
  }

  setActiveMenu(".menu-main li");


  // Chuc nang bam login
  // Check xem nguoi dung dang nhap hay chua.
  // Neu dang nhap roi -> Chuyen huong toi dashboad
  // Chua dang nhap -> trang login
  let loginButton = document.querySelector(".button-login");
  // console.log(loginButton);

  loginButton.addEventListener("click", ()=>{
    
    let token = localStorage.getItem("TOKEN_LOGIN");
    console.log(token);

    if(token) {
      window.location.href = "./dashboad.html";
    }else {
      window.location.href = "./login.html";
    }
  })
});