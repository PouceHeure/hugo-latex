document.addEventListener("DOMContentLoaded", function () {
  function formatText(str) {
    return str.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let words = shuffleArray(wordsHugo.map(formatText));
  let i = 0;
  const changingWord = document.getElementById("changing-word");

  function typeWriterEffect(word, index) {
    if (index <= word.length) {
      changingWord.textContent = word.substring(0, index);
      setTimeout(() => typeWriterEffect(word, index + 1), 100);
    } else {
      setTimeout(() => deleteEffect(word.length), 2000);
    }
  }

  function deleteEffect(length) {
    if (length >= 0) {
      changingWord.textContent = changingWord.textContent.substring(0, length);
      setTimeout(() => deleteEffect(length - 1), 50);
    } else {
      i = (i + 1) % words.length;
      setTimeout(() => typeWriterEffect(words[i], 0), 500);
    }
  }

  if (words.length > 0) {
    typeWriterEffect(words[i], 0);
  }
});
