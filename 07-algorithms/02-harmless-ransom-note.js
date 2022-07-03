function harmlessRansomNote(note, magazineText) {
  let magazineArray = magazineText.split(" ");
  let noteArray = note.split(" ");

  let magazineObj = {};
  magazineArray.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 1;
    else magazineObj[word] = magazineObj[word] + 1;
  });

  let possible = true;
  noteArray.forEach((noteWord) => {
    if (!magazineObj[noteWord]) possible = false;
    else if (magazineObj[noteWord] === 0) possible = false;
    else {
      magazineObj[noteWord] = magazineObj[noteWord] - 1;
    }
  });
  console.log(possible);
  return possible;
}

harmlessRansomNote(
  "this is a secret note for you from a secret admirer",
  `puerto rico is a place of great wonder and excitement it has many secret 
  waterfall locations that i am an admirer of you must hike quite a distance 
  to find the secret places as they are far from populated areas but it is 
  worth the effort a tip i have for you is to go early in the morning when 
  it is not so hot out also note that you must wear hiking boots this is 
  one of the best places i have ever visited`
);
// Only one "secret" word exists
harmlessRansomNote(
  "this is a secret note for you from a secret admirer",
  `puerto rico is a place of great wonder and excitement it has many 
  waterfall locations that i am an admirer of you must hike quite a distance 
  to find the secret places as they are far from populated areas but it is 
  worth the effort a tip i have for you is to go early in the morning when 
  it is not so hot out also note that you must wear hiking boots this is 
  one of the best places i have ever visited`
);
