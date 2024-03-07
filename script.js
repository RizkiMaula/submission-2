let x = 0;

document.getElementById('button').onclick = () => {
  x = Math.floor(Math.random() * 10 + 1);

  if (x === 1) document.getElementById('home').innerHTML = 'Living is easy with eyes closed, Missunderstanding all You see.';
  else if (x === 2) document.getElementById('home').innerHTML = `Help Me if you can, I'm feeling down.`;
  else if (x === 3) document.getElementById('home').innerHTML = 'Imagine all the peoeple living live in peace.';
  else if (x === 4) document.getElementById('home').innerHTML = 'Number 9 Number 9 Number 9 Number 9.';
  else if (x === 5) document.getElementById('home').innerHTML = 'Take a sad song and make it better.';
  else if (x === 6) document.getElementById('home').innerHTML = `All you need is love`;
  else if (x === 7) document.getElementById('home').innerHTML = `Sunrise doesn't last all morning a cloudbust doesn't last all day.`;
  else if (x === 8) document.getElementById('home').innerHTML = 'Dear Prudence, open up your eyes. Dear Prudence, see the sunny skies';
  else if (x === 9) document.getElementById('home').innerHTML = `She's leaving home after living alone for so many years.`;
  else document.getElementById('home').innerHTML = 'And in the end the love you take is equal to love you make';
};
