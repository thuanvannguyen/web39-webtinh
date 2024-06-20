let url_login = `https://cvjcqy-8080.csb.app/login`

// Truy cap phan tu
let formLogin = document.querySelector(".form-login");
let emailInput = document.querySelector(".email");
let passInput = document.querySelector(".password")

// Gan su kien submit form
formLogin.addEventListener("submit", (event) => {
  event.preventDefault(); //Mac dinh

  // Lay du lieu cua nguoi dung
  let email = emailInput.value;
  let pass = passInput.value;

  // Gui du lieu vua lay duoc len server - POST (GUI LEN)
  const user = {
    email: email,
    password: pass
  }
  // console.log(user);

  const loginFn = async () => {
    try {
      const response = await axios.post(
        url_login, //API
        user //Du lieu lay tu form
      );
      // console.log(response.data.user.token);
      let token = response.data.user.token
    
      // Luu token vao LocalStorate
      localStorage.setItem("TOKEN_LOGIN", token);

      // Chuyen huong toi trang dashboad
      window.location.href = "./dashboad.html"

    } catch (error) {
      alert("Dang nhap that bai!");
      throw new error;
    }

  }

  loginFn();


});


//axios.post() - bao gom 2 gia tri
// + url post
// + du lieu gui len
