const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const contestData = {
  "2025-02-02": [
    {name:"WT Assigment",link:"./exam.html",icon:"./logo/cbit.png" },
  ],
  "2025-02-05": [
    {name:"COA Assigment",link:"./exam.html",icon:"./logo/cbit.png" },
    {name:"Exam FLAT",link:"./exam.html",icon:"./logo/cbit.png" },
  ],

  "2025-02-21": [
    {
      name: "Weekly Contest 434",
      link: "https://leetcode.com/",
      icon: "./logo/leetcode.png",
    },
    {
      name: "AtCoder Regular Contest 191",
      link: "https://atcoder.jp/",
      icon: "./logo/atcoder.webp",
    },

  ],
  "2025-02-25": [
    { name: "GfG Weekly - 191", link: "https://www.geeksforgeeks.org/", icon: "./logo/gfg.png" },
    {name:"Maths Exam",link:"./exam.html",icon:"./logo/cbit.png" },
  ],
  "2025-02-26": [
    {
      name: "Codeforces Round 1001",
      link: "https://codeforces.com/",
      icon: "./logo/codeforces.webp",
    },
  ],
  "2025-03-02": [
    {name:"WT Assigment",link:"./exam.html",icon:"./logo/cbit.png" },
  ],
  "2025-03-05": [
    {name:"COA Assigment",link:"./exam.html",icon:"./logo/cbit.png" },
    {name:"Exam FLAT",link:"./exam.html",icon:"./logo/cbit.png" },
  ],

  "2025-03-21": [
    {
      name: "Weekly Contest 434",
      link: "https://leetcode.com/",
      icon: "./logo/leetcode.png",
    },
    {
      name: "AtCoder Regular Contest 191",
      link: "https://atcoder.jp/",
      icon: "./logo/atcoder.webp",
    },

  ],
  "2025-03-25": [
    { name: "GfG Weekly - 191", link: "https://www.geeksforgeeks.org/", icon: "./logo/gfg.png" },
    {name:"Maths Exam",link:"./exam.html",icon:"./logo/cbit.png" },
  ],
  "2025-03-26": [
    {
      name: "Codeforces Round 1001",
      link: "https://codeforces.com/",
      icon: "./logo/codeforces.webp",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
    const contestContainer = document.getElementById("contest-container");
    
    Object.entries(contestData).forEach(([date, contests]) => {
        const dateHeader = document.createElement("h2");
        dateHeader.className = "contest-date";
        dateHeader.innerText = new Date(date).toDateString(); 
        contestContainer.appendChild(dateHeader);
    
        contests.forEach(({ name, link, icon }) => {
        const contestCard = document.createElement("div");
        contestCard.className = "contest-card";
    
        contestCard.innerHTML = `
            <div class="coninfo">
            <img src="${icon}" alt="${name}" class="conicon">
            <span>${name}</span>
            </div>
            <a href="${link}" target="_blank" class="conlink">View</a>
        `;
    
        contestContainer.appendChild(contestCard);
        });
    });
    });
    