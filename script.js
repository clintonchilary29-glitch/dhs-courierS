
function track(){
let code = document.getElementById("trackingNumber").value;
let data = JSON.parse(localStorage.getItem("DHS_TRACKING") || "{}");

if(data[code]){
let d = data[code];
document.getElementById("result").innerHTML = `
<h3>Tracking Details</h3>
<p><strong>Sender:</strong> ${d.sender}</p>
<p><strong>Receiver:</strong> ${d.receiver}</p>
<p><strong>Origin:</strong> ${d.origin}</p>
<p><strong>Destination:</strong> ${d.destination}</p>
<p><strong>Status:</strong> ${d.status}</p>
`;
}else{
document.getElementById("result").innerHTML = "<p>Tracking number not found</p>";
}
}
