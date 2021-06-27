// ẩn hiện phần đăng kí, bấm vào phần đăng kí thì ẩn hiện khung đăng kí
// code của em là mới vào chưa click mà khung đăng kí đã hiện sẵn
// cái em mong muốn là mới vào giao diện không hiện lên khung đăng kí
// khi click vào thì mới hiện ra, em không biết làm mong anh chỉ giúp
function mySignup() {
    let a = document.getElementById("user");
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  }



//phần đăng nhập tài khoản và mật khẩu đã có sẳn
  function myLogin() {
    let x = document.getElementById('taikhoan').value;
    let y = document.getElementById('matkhau').value;
      if(x === 'minhbao123' && y === '123456789' ){
        alert("Đăng nhập thành công");
      } else {
        alert("Vui lòng nhập lại tài khoản và mật khẩu")
      }
    }

//đây là phần đăng kí , em không biết làm sao để đăng kí thành công
// rồi dùng user vừa đăng kí để đăng nhập ở trên


    function myConfirm() {
    let inputUsername = document.getElementById('a1').value;
    let inputPassword = document.getElementById('a2').value;
    let confirmPassword = document.getElementById('a3').value;
     if(inputUsername.length < 7 || inputPassword.length < 7 || confirmPassword.length < 7){
      alert('Vui lòng nhập ít nhất 8 kí tự')
     }  else if(inputPassword != confirmPassword){
       alert("Vui lòng nhập mật khẩu cho giống nhau")
     }else{
       alert("Đăng kí thành công")
     }
    }
    