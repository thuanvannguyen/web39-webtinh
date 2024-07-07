// Sample data
const data = [
  {
    id: 1,
    title: "Fjallraven - Balo Foldsack No. 1, Chứa Laptop 15 inch",
    price: 109.95,
    description:
      "Balo hoàn hảo cho việc sử dụng hàng ngày và đi dạo trong rừng. Chứa laptop của bạn (đến 15 inch) trong ngăn đựng đệm, phù hợp cho mọi ngày.",
    category: "Thời trang",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Áo thun Slim Fit cao cấp nam",
    price: 22.3,
    description:
      "Kiểu dáng slim fit, tay dài raglan tương phản, phần cổ henley ba nút, chất liệu nhẹ và mềm mại để mặc thoải mái. Áo có đường may chắc chắn, cổ tròn phù hợp cho Thời trang hàng ngày và người hâm mộ bóng chày chân chính.",
    category: "Thời trang",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Áo khoác nam bằng cotton",
    price: 55.99,
    description:
      "Áo khoác ngoại cỡ tuyệt vời cho mùa xuân / thu / đông, phù hợp cho nhiều dịp, như làm việc, leo núi, cắm trại, leo núi / đá, đạp xe, du lịch hoặc các hoạt động ngoại ô khác. Lựa chọn quà tặng tốt cho bạn hoặc thành viên gia đình. Tình yêu ấm áp dành cho cha, chồng hoặc con trai trong dịp lễ tạ ơn hoặc Giáng sinh này.",
    category: "Thời trang",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "Áo thun Slim Fit nam",
    price: 15.99,
    description:
      "Màu sắc có thể hơi khác nhau giữa trên màn hình và trong thực tế. / Vui lòng lưu ý rằng hình thể thay đổi tùy thuộc vào người, do đó, thông tin chi tiết về kích thước nên được xem xét dưới đây trong mô tả sản phẩm.",
    category: "Thời trang",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 5,
    title:
      "Vòng tay dây chuyền nữ John Hardy Women's Legends Naga Gold & Silver Dragon",
    price: 695,
    description:
      "Từ bộ sưu tập Legends của chúng tôi, Naga được truyền cảm hứng từ con rồng nước thần thoại bảo vệ viên ngọc biển. Đeo vòng tay hướng vào bên trong để được ban cho tình yêu và thịnh vượng, hoặc hướng ra ngoài để bảo vệ.",
    category: "Trang sức",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    title: "Vòng cổ vàng Solid Gold Petite Micropave",
    price: 168,
    description:
      "Đảm bảo sự hài lòng. Trả lại hoặc đổi hàng bất kỳ đơn đặt hàng nào trong vòng 30 ngày. Thiết kế và bán bởi Hafeez Center tại Hoa Kỳ. Đảm bảo sự hài lòng. Trả lại hoặc đổi hàng bất kỳ đơn đặt hàng nào trong vòng 30 ngày.",
    category: "Trang sức",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 7,
    title: "Nhẫn hứa hôn nữ White Gold Plated Princess",
    price: 9.99,
    description:
      "Nhẫn hứa hôn kết hợp truyền thống cho cô dâu. Quà tặng để làm hạnh phúc tình yêu của bạn thêm nhiều hơn trong lễ hứa hôn, đám cưới, kỷ niệm, Ngày Valentine...",
    category: "Trang sức",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 8,
    title: "Bông tai cắm tai Rose Gold Plated Pierced Owl",
    price: 10.99,
    description: "Bông tai cắm tai mạ vàng hồng. Làm từ thép không gỉ 316L.",
    category: "Trang sức",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 9,
    title: "Ổ cứng di động WD 2TB Elements - USB 3.0",
    price: 64,
    description:
      "Tương thích USB 3.0 và USB 2.0. Chuyển dữ liệu nhanh chóng. Cải thiện hiệu suất PC. Dung lượng lớn; Tương thích với NTFS cho Windows 10, Windows 8.1, Windows 7; Có thể cần định dạng lại cho các hệ điều hành khác; Tương thích có thể thay đổi tùy thuộc vào cấu hình phần cứng và hệ điều hành của người dùng.",
    category: "Điện tử",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 10,
    title: "Ổ cứng SSD nội bộ SanDisk PLUS 1TB - SATA III 6 Gb/s",
    price: 109,
    description:
      "Nâng cấp dễ dàng để khởi động nhanh hơn, tắt máy, tải ứng dụng và phản hồi (So với ổ cứng SATA 2.5” 5400 RPM; Dựa trên thông số kỹ thuật và bài kiểm tra hiệu suất nội bộ sử dụng điểm số PCMark vantage) Tăng hiệu suất ghi chói, làm cho nó lý tưởng cho công việc thông thường trên máy tính cá nhân. Sự kết hợp hoàn hảo giữa hiệu suất và độ tin cậy. Tốc độ đọc / ghi lên đến 535MB/s/450MB/s (Dựa trên bài kiểm tra nội bộ; Hiệu suất có thể thay đổi tùy thuộc vào dung lượng ổ đĩa, thiết bị máy chủ, hệ điều hành và ứng dụng.)",
    category: "Điện tử",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  {
    id: 11,
    title: "SSD Silicon Power 256GB 3D NAND A55 SLC Cache - SATA III 2.5",
    price: 109,
    description:
      "Flash 3D NAND được áp dụng để cung cấp tốc độ truyền dữ liệu cao. Tốc độ truyền dữ liệu đáng kể giúp khởi động nhanh chóng và cải thiện hiệu suất tổng thể của hệ thống. Công nghệ Bộ nhớ đệm SLC tiên tiến cho phép tăng hiệu suất và tuổi thọ hơn. Thiết kế mảnh mai 7mm phù hợp cho Ultrabooks và laptop siêu mảnh. Hỗ trợ lệnh TRIM, công nghệ Garbage Collection, RAID và ECC (Kiểm tra lỗi và Sửa lỗi) để cung cấp hiệu suất tối ưu hóa và độ tin cậy tăng cường.",
    category: "Điện tử",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  },
];


// Chuc Nang 1: Chuyen tab -> noi dung tuong ung

/* Truy cap PT */
let btnListing = document.querySelectorAll(".btn-listing");
let tabContent = document.querySelectorAll(".tab-content");
// console.log(tabContent);
// console.log(btnListing);

btnListing.forEach((buttonEl, index) => {
  buttonEl.addEventListener("click", () => {
    // Xoa toan bo cac active buton va tab-conten truoc do
    btnListing.forEach((value) => {
      value.classList.remove("active");
    });
    tabContent.forEach((item)=>{
      // console.log(item);
      item.classList.remove("active");
    });

    // Them class "active" vao button duoc click
    buttonEl.classList.add("active");
    tabContent[index].classList.add("active");

    console.log(index);
    console.log(tabContent[index]);


  });

});