let home = document.getElementById("home-count").innerHTML;
let guest = document.getElementById("guest-count").innerHTML;

function addHomeOne()
{
    let home = Number(document.getElementById("home-count").innerHTML);
    home+=1;
    document.getElementById("home-count").innerHTML = home;
}
function addHomeTwo()
{
    let home = Number(document.getElementById("home-count").innerHTML);
    home+=2;
    document.getElementById("home-count").innerHTML = home;
}
function addHomeThree()
{
    let home = Number(document.getElementById("home-count").innerHTML);
    home+=3;
    document.getElementById("home-count").innerHTML = home;
}
function addGuestOne()
{
    let guest = Number(document.getElementById("guest-count").innerHTML);
    guest+=1;
    document.getElementById("guest-count").innerHTML = guest;
}
function addGuestTwo()
{
    let guest = Number(document.getElementById("guest-count").innerHTML);
    guest+=2;
    document.getElementById("guest-count").innerHTML = guest;
}
function addGuestThree()
{
    let guest = Number(document.getElementById("guest-count").innerHTML);
    guest+=3;
    document.getElementById("guest-count").innerHTML = guest;
}