const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//selected dom elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements
factsList.innerHTML = "";

// Load data from Supabase

async function loadFacts() {
  const res = await fetch(
    "https://fcftmlbyprvezwswyxti.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZnRtbGJ5cHJ2ZXp3c3d5eHRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MTk0MDIsImV4cCI6MjAxMDI5NTQwMn0.bYAPa5SR84Ialqt1A38WanDfE4BqRB433vvzjvJspj0",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZnRtbGJ5cHJ2ZXp3c3d5eHRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MTk0MDIsImV4cCI6MjAxMDI5NTQwMn0.bYAPa5SR84Ialqt1A38WanDfE4BqRB433vvzjvJspj0",
      },
    }
  );
  const data = await res.json();
  //   const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}
loadFacts();
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
          <p> ${fact.text}
              <a class="source" href="${
                fact.source
              } "target="_blank">(source)</a>
          </p>
          <span class="tag" style="background-color: ${
            CATEGORIES.find((category) => category.name === fact.category).color
          }">${fact.category}</span>
          </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visability
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});
console.log(CATEGORIES.find((category) => category.name === "society").color);
console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
/*const fact = ["Lisbon is the capitol of portugal", 2015, true];
console.log(fact);
console.log(fact[0]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const newFact = [...fact, "city"];
console.log(newFact);

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

const times10 = [2, 4, 6, 8].map(function (el) {
  return el * 10;
});

const times10 = [2, 4, 6, 8].map((el) => el * 10);

console.log(times10);



const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal to ${new Date().getFullYear()}`;

const factAges = initialFacts.map((el) => calcFactAge2(el.createdIn));
console.log(factAges);

const factObj = {
  text: "this is a value of stuff and things",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category, isCorrect);

console.log(factObj.createSummary());
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less or equal to ${currentYear}`;
}

console.log(calcFactAge2(1992));
console.log(calcFactAge2(19912));

let votesInteresting = 20;
let votesMindBlowing = 100;

if (votesInteresting === votesMindBlowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindBlowing) {
  console.log("Interesting");
} else if (votesMindBlowing > votesInteresting) {
  console.log("mind blowing");
}

const text = "This fact is equally interesting and mindblowing";

const toupper = text.toUpperCase();
console.log(toupper);

const str = `the current fact "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably${
  votesMindBlowing > votesInteresting ? " cor" : " nt"
}' }`;
console.log(str);
*/
