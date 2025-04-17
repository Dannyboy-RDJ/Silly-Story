const stories = [
  "Once upon a time, a banana slipped on a human and flew into space!",
  "A cat wearing sunglasses opened a donut shop in the middle of the jungle.",
  "Three ducks in a trench coat tried to rent an apartment in New York City.",
  "A dancing robot challenged a dinosaur to a rap battle and won.",
  "A talking potato became the mayor of a small town in Wisconsin."
];

document.getElementById('generate').addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * stories.length);
  const story = stories[randomIndex];
  document.getElementById('story').textContent = story;
});
