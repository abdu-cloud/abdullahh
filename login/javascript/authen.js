
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    // استرجاع بيانات المستخدمين من localStorage
    var users = JSON.parse(localStorage.getItem("userData")) || [];

    // البحث عن المستخدم
    var user = users.find(
      (x) => x.email === email && x.password === password
    );
if(password==="123" && email==="moamenmefreh1@gmail.com"){
  window.location.assign('../../Admin Control/Admin Control/products/Cruds_Products.html');
}else if (user) {
      alert("تم تسجيل الدخول بنجاح!");

      // يمكنك إعادة توجيه المستخدم إلى صفحة أخرى هنا
      // window.location.href = 'dashboard.html'; // مثال
    } else {
      alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
  }
// Initialize usercontainer from localStorage or as an empty array
var usercontainer = JSON.parse(localStorage.getItem("userData")) || [];

function register() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmpassword").value;
  var messageElement = document.getElementById("message");

  // تحقق من وجود البريد الإلكتروني بالفعل
  var existingUser = usercontainer.find((x) => x.email === email);

  if (existingUser) {
alert("البريد الإلكتروني مستخدم بالفعل.");

    return; // إنهاء الدالة إذا كان المستخدم موجودًا
  }
else if (password !== confirmPassword) {
    alert("كلمات المرور غير متطابقة.");
   
    return; // إنهاء الدالة إذا كانت كلمات المرور غير متطابقة
  }

  // إضافة المستخدم الجديد إلى المصفوفة
  var newUser = {
    name: name,
    email: email,
    phone: phone,
    password: password,
  };

  usercontainer.push(newUser);
  window.alert("تم تسجيل المستخدم بنجاح!");

  // حفظ البيانات في localStorage
  localStorage.setItem("userData", JSON.stringify(usercontainer));

  // مسح الحقول
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmpassword").value = "";
  messageElement.textContent = ""; // مسح الرسالة
}