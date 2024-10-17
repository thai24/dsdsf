const box_quantity = document.getElementById("box_quantity");
// hien thi box them so khach va so phong
const handle_box_quantity = () => {
  if (box_quantity.style.display === "none") {
    box_quantity.style.display = "block";
  } else {
    box_quantity.style.display = "none";
  }
};

//xu ly +/- quantity_preson
const handle_subtraction_preson = () => {
  const quantity_preson = document.getElementById("quantity_preson");
  const value = parseInt(quantity_preson.value);
  if (value > 1) {
    quantity_preson.value = value - 1;
  }
};
const handle_addition_preson = () => {
  const quantity_preson = document.getElementById("quantity_preson");
  const value = parseInt(quantity_preson.value) + 1;
  quantity_preson.value = value;
};

const handle_subtraction_room = () => {
  const quantity_room = document.getElementById("quantity_room");
  const value = parseInt(quantity_room.value);
  if (value > 1) {
    quantity_room.value = value - 1;
  }
};
const handle_addition_room = () => {
  const quantity_room = document.getElementById("quantity_room");
  const value = parseInt(quantity_room.value) + 1;
  quantity_room.value = value;
};

const handle_act_box_quantity = () => {
  const quantity_preson = document.getElementById("quantity_preson").value;
  const quantity_room = document.getElementById("quantity_room").value;
  const display_box_quantity = document.getElementById("display_box_quantity");
  display_box_quantity.innerText = `${quantity_preson} khach va ${quantity_room} phong`;
};
///////////////
const changeBackgroundBlockTwo = (element) => {
  document.querySelectorAll("div").forEach(function (div) {
    div.classList.remove("clicked");
  });
  element.classList.add("clicked");
};
const changeBackgroundLocation = (element) => {
  document.querySelectorAll("p").forEach(function (p) {
    p.classList.remove("clicked");
  });
  element.classList.add("clicked");
};

const changeFiter = (value) => {
  const display = document.getElementsByClassName(
    "filterPage_block_one_fiter_act_hiden"
  );
  if (display[value].style.display === "none") {
    display[value].style.display = "block";
  } else {
    display[value].style.display = "none";
  }
};

///////////////////////

// hiện thị ảnh ở detail page
function changeImagee(element) {
  // Lấy hình ảnh chính bằng id và thay đổi thuộc tính src của nó thành src của ảnh được nhấn
  console.log(element);
  const mainImage = document.getElementById("mainImage");
  mainImage.src = element.src;
}

//////////////////////
//tính tổng tiền trong trang detail khi chọn phòng
const priceRoom = document.getElementsByClassName("priceRoom");
const changeQuantityRoom = document.getElementsByClassName("changeQuantityRoom");

const totalPrice = document.getElementById("totalPrice");
totalPrice.textContent = "0";
const quantityRoom = document.getElementById("quantityRoom");
const update=()=>{
  let valueTotalRoom=0
  let valueTotalPrice=0
for (let i = 0; i < changeQuantityRoom.length; i++) {
    valueTotalRoom += parseInt(changeQuantityRoom[i].value) || 0
    valueTotalPrice += parseInt(priceRoom[i].textContent) * parseInt(changeQuantityRoom[i].value) || 0
}
quantityRoom.textContent=valueTotalRoom
totalPrice.textContent = valueTotalPrice
}
update()

for (let i = 0; i < changeQuantityRoom.length; i++) {
  changeQuantityRoom[i].addEventListener("input", update); // Gọi hàm updateTotal khi có sự thay đổi
}

////////////////
const commentBlock =()=>{
 const display = document.getElementsByClassName("detail_block_seven_comment_hiden")
 
 if(display[0].style.display =="none"){
  display[0].style.display="block"
 }else{
  display[0].style.display="none"
 }

}
