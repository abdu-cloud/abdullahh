var UserName=document.getElementById("UserName");
var emailUser=document.getElementById("UserEmail");
var phoneUser=document.getElementById("Phone");
var sessionsUser=document.getElementById("Sessions");
var btnadd=document.getElementById("btnadd-update");
let userId;
var btnstatus="create";
var Usercontainer=[];
Usercontainer=JSON.parse(localStorage.getItem("userData"));
if(localStorage.getItem("usertData")==null){
    var Usercontainer=[];
}else{
    Usercontainer=JSON.parse(localStorage.getItem("userData"));//نحول string to json لانه مش هينفع تضيف string لل object
display_data_in_table();
}

function addUser(){
    if(checkInput()==true){
var userObject={
    name:UserName.value,
    email:emailUser.value,
    phone:phoneUser.value,
    sessions:sessionsUser.value
}
if(btnstatus=="create"){
    Usercontainer.push(userObject);
localStorage.setItem("userData",JSON.stringify(Usercontainer));
}
else{
   
btnadd.innerHTML="Add User";
Usercontainer[userId]=userObject;
btnstatus="create";
localStorage.setItem("userData",JSON.stringify(Usercontainer));
}
console.log(Usercontainer);
localStorage.setItem("userData",JSON.stringify(Usercontainer));

display_data_in_table();

cleardata();
    }

else{
window.alert("Must Enter Data Frist Befor Add User");
}
display_data_in_table();
}
function cleardata(){
    UserName.value="";
     phoneUser.value="";
    emailUser.value="";
    sessionsUser.value="";

}
function display_data_in_table(){
    var cartona=``;
    for(var i=0;i<Usercontainer.length;i++){
        cartona+=`<tr>
        <td>${i}</td>
        <td>${Usercontainer[i].name}</td>
        <td>${Usercontainer[i].email}</td>
        <td>${Usercontainer[i].phone}</td>
        <td>${Usercontainer[i].sessions}</td>
        <td><button class="btn btn-outline-warning" onclick="Update(${i})">Update</button></td>
        <td><button class="btn btn-outline-danger"  onclick="delete_user(${i})">Delete</button></td>
        </tr>`;
    }

    
    document.getElementById("tablebody").innerHTML=cartona;
}
function checkInput(){
    if(UserName.value!=""
         && emailUser.value!=""
         &&phoneUser.value!=""
         &&sessionsUser.value!=""){
   return true;
    }else{
        return false;
    }
}
function delete_user(id){
    Usercontainer.splice(id,1);
localStorage.setItem("userData",JSON.stringify(Usercontainer));//بحول من json to string
display_data_in_table();
}

function Update(id){
UserName.value=Usercontainer[id].name;
emailUser.value=Usercontainer[id].email;
phoneUser.value=Usercontainer[id].phone;
sessionsUser.value=Usercontainer[id].sessions;
btnstatus="Edit";
btnadd.innerHTML="Update";
userId=id;
}
//live search

function searchUser(searchTerm){
    var cartona=``;
    for(var i=0;i<Usercontainer.length;i++)
    {
        if(Usercontainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true||
        Usercontainer[i].email.toLowerCase().includes(searchTerm.toLowerCase())==true){
            cartona+=`<tr>
            <td>${i}</td>
            <td>${Usercontainer[i].name}</td>
            <td>${Usercontainer[i].email}</td>
            <td>${Usercontainer[i].phone}</td>
            <td>${Usercontainer[i].sessions}</td>
            <td><button class="btn btn-outline-warning" onclick="Update(${i})">Update</button></td>
            <td><button class="btn btn-outline-danger"  onclick="delete_user(${i})">Delete</button></td>
            </tr>`
        }
    }
    document.getElementById("tablebody").innerHTML=cartona;
}