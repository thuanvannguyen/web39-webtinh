// Truy cap PT
let logoutButton = document.querySelector(".logout");
// console.log(logoutButton);

// Gan su kien click vao logoutButton
logoutButton.addEventListener("click", ()=>{
  localStorage.clear();
  alert("Dang xuat thanh cong!");

  setTimeout(()=>{
    window.location.href = "/"
  }, 1000);

});