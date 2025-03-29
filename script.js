//console.log("Hello World")
function youreGay() {
  document.write("You're Gay");
};
function iLoveU(heart) {
  if (heart) {
    return true
  } else {
    return false
  };
};

let soKH = document.getElementById("btw");
let saveNum = document.getElementById("save-num")
let soHanhKhach = 0;
function tang() {
  soHanhKhach += 1;
  soKH.textContent = soHanhKhach;
}
function save() {
  saveNum.textContent += " " + soHanhKhach
  soKH.textContent = 0;
  soHanhKhach = 0;
}
