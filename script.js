let inp = document.querySelector(".inp input")
let inp_btn = document.querySelector(".inp .inp_btn")
let list = document.querySelector(".list ul")
let li = document.querySelector(".list ul li")

inp_btn.addEventListener("click", ()=>{
    let val = inp.value
    if(val === ""){
        alert("EROR! Write Something.")
        return;
    }
    addli(val)
})
let addli = (val) => {
    let newli = document.createElement("li")
    newli.innerText = val
    list.append(newli)
    let span = document.createElement("span")
    span.innerText = "\u00d7"
    newli.append(span)
    inp.value = ""
    savedata()
}
list.addEventListener("click",function(e){
    if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
    }
    savedata()
})
let savedata = () => {
    localStorage.setItem("data", list.innerHTML)
}
(function(){
    list.innerHTML = localStorage.getItem("data")
})()
