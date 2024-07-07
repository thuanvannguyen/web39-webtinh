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


//  Hàm tổng hợp để lọc sản phẩm
const filterProducts = () => {
  // Lay gia tri nguoi dung khi nhap vao input
  let textSearch = document.querySelector(".search").value;
  let searchTerm = textSearch.toLowerCase().trim(); // Covert Chua In hoa -> Thuong

  console.log(searchTerm);
  // Lọc sản phẩm theo từ khóa
  let filteredData = filterBySearchTerm(data, searchTerm);


  renderProducts(filteredData); // Hiển thị sản phẩm đã lọc
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


renderProducts(data);