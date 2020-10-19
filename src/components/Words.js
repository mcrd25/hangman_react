const bibleWords = [
  "King of Israel",
  "Servant",
  "Son of Man",
  "Son of God",
  "Eternal Security",
  "gospel",
  "Mark",
  "Matthew",
  "Luke",
  "John",
  "witness",
  "soul winner",
  "Corinthians",
  "Jesus",
];

const randomBibleWord = () => {
  return bibleWords[Math.floor(Math.random() * bibleWords.length)];
};

export { randomBibleWord };
