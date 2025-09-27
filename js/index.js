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


if(sydney){
sydneyDate.innerHTML = sydneyToday.format("MMMM Do, YYYY");
sydneyTime.innerHTML = sydneyToday.format("hh:mm:ss  [<small>]A[</small>]");
}
if(istanbul){
istanbulDate.innerHTML = istanbulToday.format("MMMM Do, YYYY");
istanbulTime.innerHTML = istanbulToday.format("hh:mm:ss  [<small>]A[</small>]");
}
if(berlin){
berlinDate.innerHTML = berlinToday.format("MMMM Do, YYYY");
berlinTime.innerHTML = berlinToday.format("hh:mm:ss  [<small>]A[</small>]");
}
}

function updateSelectcity(event){
    let selectcityZone = event.target.value;
    if (selectcityZone === "current"){
        selectcityZone =moment.tz.guess();
    }
    let selectcityName = selectcityZone.split("/")[1] ;
    let selectcityTime = moment().tz(selectcityZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${selectcityName}</h2>
                <div class="date">${selectcityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${selectcityTime.format("hh:mm:ss  [<small>]A[</small>]")}</div>
    </div>`;
}

updateforSecond();
setInterval(updateforSecond,1000);

let selectcityElement = document.querySelector("#selectcity");
selectcityElement.addEventListener("change", updateSelectcity)