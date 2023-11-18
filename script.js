let qrBox = document.getElementById("qrBox");
let img = document.getElementById("img");
let val = document.getElementById("inp");

document.getElementById("btn").addEventListener('click',gqr)

function gqr(){
    if(val.value.length > 0){
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + val.value;
    qrBox.classList.add("show-img")
    }
    else{
        val.classList.add("error")
        setTimeout(()=>{
            val.classList.remove("error")
        },1000)
    }
}