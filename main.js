function love() {
    alert("A cũng yêu vợ nhiều lắm")
}

function nolove() {
    let dai = Math.floor(Math.random()*window.innerHeight);
    let rong = Math.floor(Math.random()*window.innerWidth);

    document.getElementById('no').style.top = dai + 'px';
    document.getElementById('no').style.left = rong + 'px';
}