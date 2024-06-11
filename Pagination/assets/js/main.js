// Function binh thuong
// const hello = () => {
//   console.log("Hello 500 anh em!");
// }

// hello();

// IIFE
// ((name) => {
//   console.log("Hello 500 anh em" + " " + name)
// })("Web39")


/*  

* Logic phan trang

*/ 



const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// B1: Call data Database
const getData = async () => {
  const response = await axios.get(apiUrl);
  return response.data
}

// B2: Truy cap phan tu
const curPageEl = document.querySelector("#curPage");
const dataContainer = document.querySelector("#data");

// B3: Hien thi danh sach san pham tu api -> UI

const itemsPerPage = 15;
let currentPage = 1;
let totalPages = 0; //Sl phan trang

const displayData = (data, page) => {
  currentPage = page;
  curPageEl.innerHTML = currentPage;
  dataContainer.innerHTML = '';

  // Xac dinh vi tri ban dau va ket thuc
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Loc du lieu show UI
  const itemsToDisplay = data.slice(start, end);
  // console.log(itemsToDisplay);

  // Show ra UI
  itemsToDisplay.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = item.title;
    dataContainer.appendChild(itemElement);
  });

}


// B4: Xay dung Pagionation
const createPagination = (data) => {
  // Truy cap phan tu
  const paginationContainer = document.querySelector("#pagNums");
  paginationContainer.innerHTML = "";

  // Tinh toan tong so trang
  totalPages = Math.ceil(data.length / itemsPerPage);

  // "Next" va "Prev"
  if(totalPages > 0) {

    // Tao nut
    const nextBtn = document.createElement("button");
    const prevBtn = document.createElement("button");

    // Them noi dung
    nextBtn.textContent = "Next";
    prevBtn.textContent = "Prev";

    // Logic click next
    nextBtn.addEventListener("click", () => {
      if (totalPages >= currentPage + 1) displayData(data, currentPage + 1);
    });

    // logic click prev
    prevBtn.addEventListener("click", () => {
      if (0 < currentPage - 1) displayData(data, currentPage - 1);
    });

    // Hien thi ra
    paginationContainer.insertAdjacentElement("beforebegin", prevBtn);
    paginationContainer.insertAdjacentElement("afterend", nextBtn);


    
  }


  // Them cac nut vao trong trang
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => displayData(data, i));
    paginationContainer.appendChild(button);
  }
  
}













// IIFE
(async () => {
  try {

    const data = await getData();

    if(data) {
      displayData(data, 1);
      createPagination(data);
    }

  } catch (error) {
    console.log(error)
  }
})()