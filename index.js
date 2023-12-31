let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }

  isDOBOpen = !isDOBOpen;
  console.log("Toggle", isDOBOpen);
};

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  // console.log({currentDate});
  // console.log("dateDiff", dateDiff);
  // console.log({
  //     year,month,day,hour,minute,second
  // });
  yearEl.innerHTML = year; //display year
  monthEl.innerHTML = month;
  dayEl.innerHTML = day;
  hourEl.innerHTML = hour;
  minuteEl.innerHTML = minute;
  secondEl.innerHTML = second;
};

const setDOBHandler = () => {
  const dateString = dobInputEl.value; //date kosam

  dateOfBirth = dateString ? new Date(dateString) : null;

  if (dateOfBirth) {
    //hide process
    initialTextEl.classList.add("hide");
    afterDOBBtnTxtEl.classList.remove("hide");
    // updateAge();
    setInterval(() => updateAge(), 1000);
  } else {
    afterDOBBtnTxtEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
  }

  // console.log ('date of birth', dateOfBirth)
};
setDOBHandler();

settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);
