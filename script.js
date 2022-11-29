
let dead = document.getElementById("dead");
let counter = 0;

/* déplacement de kenny avec le click sur les boutons */

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    console.log(t)
    if (t >= 0) {
        document.getElementById('kenny').style.top = t + 'px';
    }
});


document.getElementById("down").addEventListener("click",function () {
    let b = parseInt(document.getElementById("kenny").style.top);
    b = b + 10;
    console.log(b)
    if (b <= 470) {
        document.getElementById('kenny').style.top = b + 'px';
    }
});

document.getElementById("left").addEventListener("click",function () {
    let l = parseInt(document.getElementById("kenny").style.left);
    l = l - 10;
    console.log(l)
    if (l >= 0) {
        document.getElementById('kenny').style.left = l + 'px';
    }
});

document.getElementById('right').addEventListener('click',function () {
    let r = parseInt(document.getElementById("kenny").style.left);
    r = r + 10;
    /* pour ne pas dépasser les bordures */
    console.log(r)
    if (r <= 420) {
        document.getElementById('kenny').style.left = r + 'px';
    }
    else if (r > 420) {
        alert("kenny est mort")
        document.getElementById("kenny").style.top = "200px"
        document.getElementById("kenny").style.left = "200px"
        counter += 1
        alert("Kenny est mort : " + counter + " fois")
    }
});



/* Zone rouge */

let zRed1 = document.getElementById("zRed1");
    zRed1.style.backgroundColor = "red";
    zRed1.style.width = "50px";
    zRed1.style.height = "500px";
    zRed1.style.position = "relative";
    zRed1.style.left = "60.5%";
    zRed1.style.top = "-552px";





    



