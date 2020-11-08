// Banner time
const currentDay = document.querySelector("#currentDay");
var m = moment().format;
var today = m("dddd, MMMM Do");
currentDay.append(today);

var time = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
var container = document.querySelector(".container");

function html() {
    for (let i = 0; i < time.length; i++) {
        let a = document.createElement("div");
        a.setAttribute("class", "row");

        // div for Time
        let b = document.createElement("div");
        b.setAttribute("id", `time${time[i]}`, "class");

        // div for schedule value
        let c = document.createElement("div");
        c.setAttribute("id", `col${time[i]}`, "class");

        // div for button
        let d = document.createElement("div");
        d.setAttribute("class", "col-2");

        let e = document.createElement("button");
        e.setAttribute("class", `saveBtn${time[i]}`);

        let f = document.createElement("img");
        f.setAttribute("src", "#place holder");
        f.setAttribute("alt", "");
        f.setAttribute(
            "style",
            "width:100%;height:50px; padding: 0px; margin: 0px"
        );

        // appending to the container
        e.append(f);
        d.append(e);
        a.append(b);
        a.append(c);
        a.append(d);
        container.append(a);
    }
    calendar();
    getFromLocalStorage();
    setToLocalStorage();
}
html();

// Calendar function
function calendar() {
    for (let c = 0; c < time.length; c++) {
        let timex = document.querySelector(`time${time[c]}`);

    }
}




// currentDay displayvar currentDay = document.querySelector("#currentDay");var m = moment();var today = m.format("dddd, MMMM Do YYYY").toString();currentDay.append(today);

//get from storefunction getFromLocalStorage() {  for (let t = 0; t < time.length; t++) {    let period = function () {      if (time[t] < 5 || time[t] == 12) {        return "pm";      } else {        return "am";      }    };    let savedEvent = localStorage.getItem(`${time[t]}:00${period()}`);    $(`.input${time[t]}`).attr("value", savedEvent);  }}
//set to the storefunction setToLocalStorage() {  for (let t = 0; t < time.length; t++) {    let period = function () {      if (time[t] < 5 || time[t] == 12) {        return "pm";      } else {        return "am";      }    };    $(`.saveBtn${time[t]}`).click(function () {      let event = $(`.input${time[t]}`).val();      localStorage.setItem(`${time[t]}:00${period()}`, event);    });  }}