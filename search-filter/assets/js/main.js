const data = [
  {
    id: 1,
    image:
      "https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-short-nam-qsm6037-den-4.jpg",
    title: "Quần Sooc Nam Nỉ Da Cá Cắt Phối",
    price: 229000,
    category: "nam",
  },
  {
    id: 2,
    image:
      "https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-APM7467-XLU%20(1).JPG",
    title: "Áo Polo Nam In Họa Tiết Ngôi Sao",
    price: 329000,
    category: "nam",
  },
  {
    id: 3,
    image:
      "https://m.yodycdn.com/fit-in/filters:format(webp)/products/gua6014-kla-5.jpg",
    title: "Áo Yoguu Dài Tay Có Cổ Phối Kẻ",
    price: 129000,
    category: "nữ",
  },
  {
    id: 4,
    image:
      "https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-yoguu-dai-tay-gua6012-den-3.jpg",
    title: "Áo Yoguu Dài Tay Universal Sport",
    price: 429000,
    category: "nữ",
  },
];

// Hien thi San pham array data len giao dien
const renderProducts = (data) => {
  // Truy cap phan tu js-listing
  const rowListing = document.querySelector(".js-listing");
  // console.log(rowListing);

  let HTML = ``;
  data.forEach((item) => {
    // console.log(item);
    HTML +=
      `<div class="col-12 col-sm-6 col-md-4">
      <div class="card">
        <img src="${item.image}"
          class="card-img-top" alt="San Pham ${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.price} Vnd</p>
        </div>
      </div>
    </div> `;
  });

  // console.log(HTML);
  rowListing.innerHTML = HTML;
};


// Lọc sản phẩm theo từ khóa
const filterBySearchTerm = (data, searchTerm) => {
  return data.filter((item) => {
    const oldTitle = item.title.toLowerCase();
    return oldTitle.includes(searchTerm);
  })

}


// Loc san pham theo category (checkbox)
const filterByCategory = (filteredData, namCheckbox, nuCheckBox) => {
  console.log(filteredData);
  console.log(namCheckbox);
  console.log(nuCheckBox);

  // Nguoi dung khong chon category nao -> tra ve array nhan duoc
  if(!namCheckbox && !nuCheckBox) {
    return filteredData;
  }

  const resultCheckbox = filteredData.filter((item)=>{
    // console.log(item);
    const categoryTitle = item.category.toLowerCase();
    console.log(categoryTitle);

    return ((namCheckbox && categoryTitle === "nam") || (nuCheckBox && categoryTitle === "nữ")); //return cua ham filter
  });

  // console.log(resultCheckbox);
  return resultCheckbox; //return funtion filterByCategory();

}

//  Hàm tổng hợp để lọc sản phẩm
const filterProducts = () => {
  // Lay gia tri nguoi dung khi nhap vao input
  let textSearch = document.querySelector(".search").value;
  let searchTerm = textSearch.toLowerCase().trim(); // Covert Chua In hoa -> Thuong, bo khoang trang


  // Truy cap phan tu, check xem nguoi dung click vao checkbox nao ?
  const namCheckbox = document.querySelector("#option_1").checked;
  const nuCheckBox = document.querySelector("#option_2").checked;
  // console.log(namCheckbox);
  // console.log(nuCheckBox);


  let filteredData = data;

  // Lọc sản phẩm theo từ khóa
  filteredData = filterBySearchTerm(data, searchTerm);


  // Loc san pham theo category (checkbox)
  // console.log(filterByCategory(filteredData, namCheckbox, nuCheckBox));
  filteredData = filterByCategory(filteredData, namCheckbox, nuCheckBox);

  // Hiển thị sản phẩm đã lọc
  renderProducts(filteredData); 
}

let clearTime;
// Lắng nghe sự kiện nhập liệu trên ô tìm kiếm
let inputSearch = document.querySelector(".search");
inputSearch.addEventListener("input", () => {
  clearTimeout(clearTime);

  // Neu sau 3s khong nhap nua thi moi goi vao filterProducts();
  clearTime = setTimeout(() => {
    filterProducts();
  }, 1000); //1000ms -> 1s

});


// Lắng nghe sự kiện người dùng click checkbox
let inputCheckBox = document.querySelectorAll(".form-check-input");
inputCheckBox.forEach((checkbox, index) => {
  checkbox.addEventListener("click", () => {
    filterProducts();

  })
})


renderProducts(data);