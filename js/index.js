function updateforSecond(){

let sydney = document.querySelector("#sydney");
let sydneyDate = sydney.querySelector(".date");
let sydneyTime = sydney.querySelector(".time");
let sydneyToday = moment().tz("Australia/Sydney");

let istanbul = document.querySelector("#istanbul");
let istanbulDate = istanbul.querySelector(".date");
let istanbulTime = istanbul.querySelector(".time");
let istanbulToday = moment().tz("Europe/Istanbul");

let berlin = document.querySelector("#berlin");
let berlinDate = berlin.querySelector(".date");
let berlinTime = berlin.querySelector(".time");
let berlinToday = moment().tz("Europe/Berlin");



sydneyDate.innerHTML = sydneyToday.format("MMMM Do, YYYY");
sydneyTime.innerHTML = sydneyToday.format("hh:mm:ss  [<small>]A[</small>]");

istanbulDate.innerHTML = istanbulToday.format("MMMM Do, YYYY");
istanbulTime.innerHTML = istanbulToday.format("hh:mm:ss  [<small>]A[</small>]");

berlinDate.innerHTML = berlinToday.format("MMMM Do, YYYY");
berlinTime.innerHTML = berlinToday.format("hh:mm:ss  [<small>]A[</small>]");

}

updateforSecond();
setInterval(updateforSecond,1000)