var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampmElement = document.getElementById("ampm");
var dateTime = new Date(); //new Date('2023-07-24T23:30:00'); // 01/01/2000 -  11 PM, 59 Minute, 58 Second
 
function clock() {
  
  var h = dateTime.getHours();
  var m = dateTime.getMinutes();
  var s = dateTime.getSeconds();
  dateTime = new Date(dateTime.setSeconds(s + 1));
  
  var ampm = "AM"; //how to convert am into pm 
  //if(h >= 12 && h < 24) // 24:10
  // 1 AM TO 11 AM >>>> a % b => 10 % 12 = 10, 11 % 12 = 11,
  // 1 PM TO 24AM >>>>>a % b => 14 % 12 = 2, 17 % 12 = 5
  // a % b => 12 % 12 = 0
  
  if(h >= 12) 
  {
    ampm = 'PM';
  }
  
  h = h % 12 || 12;
  
  h = String(h).padStart(2, '0');
  m = String(m).padStart(2, '0');
  s = String(s).padStart(2, '0');

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampmElement.innerText = ampm;
  console.log(`h: ${h}, m: ${m}, s:${s}`);
}

clock();
setInterval(() => {
  clock(); // recurrsive function
}, 1000);


// var str = 1 == 2 ? "true" : "flase";
// var str2 ="false";
// if(1==2)
// {
//   str2 = "true";
// }
// else
// {
//   str2 = "false";
// }



//console.log(`h: ${h}, m: ${m}, s:${s}`); //why ouput not shown in the console

//how to get double zeros