// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/f24/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/f24/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/f24/ice/pizza

let reviewNum = 0;

const BASE_AMNS = [1, 15, 14.5, 2, 1, 1, 1];
const REVIEWS = [
  "A burst of warmth and flavor in every spoonful; simple yet irresistible!",
  "The perfect blend of spice and comfort, an easy go-to chili recipe.",
  "Loved the hearty texture and rich taste - a new family favorite!",
  "Quick, flavorful, and satisfying - this chili hits all the right notes!",
];

recipe = JSON.parse(JSON.stringify(data)); // make a copy of the recipe available everywhere

// TODO Implement the update yield!
function updateYield() {
  //alert("I should update the yield!");
  let index = 0;
  const it = document.getElementById("ingredients-body");
  const sersel = document.getElementById("serving-selector");
  const num = parseInt(sersel.value);
  for (index = 0; index < it.children.length; index++) {
    const row = it.children[index];
    row.children[0].textContent = BASE_AMNS[index] * num;
  }
}

// TODO Fix the reviews!
function displayReview() {
  alert(REVIEWS[reviewNum]);
  reviewNum = (reviewNum + 1) % REVIEWS.length;
}
