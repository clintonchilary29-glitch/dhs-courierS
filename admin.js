
function login(){
let u = document.getElementById("username").value;
let p = document.getElementById("password").value;

if(u==="admin" && p==="DHSadmin123"){
document.getElementById("loginBox").style.display="none";
document.getElementById("adminPanel").style.display="block";
}else{
alert("Invalid Login");
}
}

function generateCode(){
return "DHS" + Math.random().toString(36).substr(2,9).toUpperCase();
}

function generate(){
let sender=document.getElementById("sender").value;
let receiver=document.getElementById("receiver").value;
let origin=document.getElementById("origin").value;
let destination=document.getElementById("destination").value;
let status=document.getElementById("status").value;

let code = generateCode();

let data = JSON.parse(localStorage.getItem("DHS_TRACKING") || "{}");

data[code]={
sender,receiver,origin,destination,status
};

localStorage.setItem("DHS_TRACKING", JSON.stringify(data));

document.getElementById("generated").innerHTML=`
<h3>Tracking Generated</h3>
<p><strong>Tracking Code:</strong> ${code}</p>
`;
}
