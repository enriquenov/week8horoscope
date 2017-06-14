var horoscopes = [
  {
    name: 'aries',
    img: 'img/aries.png',
    attributes: 'Your best attributes are: Active, Demanding, Determined, Effective, Ambitious'
  },
  {
    name: 'aquarius',
    img: 'img/aquarius.png',
    attributes: 'Your best attributes are: Knowledge, Humanitarian, Serious, Insightful, Duplicitous'
  },
  {
    name: 'cancer',
    img: 'img/cancer.png',
    attributes: 'Your best attributes are: Emotion, Diplomatic, Intensity, Impulsive, Selective'
  },
  {
    name: 'capricorn',
    img: 'img/capricorn.png',
    attributes: 'Your best attributes are: Determination, Dominance, Perservering, Practical, Willful'
  },
  {
    name: 'gemini',
    img: 'img/gemini.png',
    attributes: 'Your best attributes are: Communication, Indecision, Inquisitive, Intelligent, Changeable'
  },
  {
    name: 'leo',
    img: 'img/leo.png',
    attributes: 'Your best attributes are: Ruling, Warmth, Generosity, Faithful, Initiative'
  },
  {
    name: 'libra',
    img: 'img/libra.png',
    attributes: 'Your best attributes are: Balance, Justice, Truth, Beauty, Perfection'
  },
  {
    name: 'pisces',
    img: 'img/pisces.png',
    attributes: 'Your best attributes are: Fluctuation, Depth, Imagination, Reactive, Indecisive'
  },
  {
    name: 'sagittarius',
    img: 'img/sagittarius.png',
    attributes: 'Your best attributes are: Philosophical, Motion, Experimentation, Optimism'
  },
  {
    name: 'scorpio',
    img: 'img/scorpio.png',
    attributes: 'Your best attributes are: Transient, Self-Willed, Purposeful, Unyielding'
  },
  {
    name: 'taurus',
    img: 'img/taurus.png',
    attributes: 'Your best attributes are: Security, Subtle strength, Appreciation, Instruction, Patience'
  },
  {
    name: 'virgo',
    img: 'img/virgo.png',
    attributes: 'Your best attributes are: Analyzing, Practical, Reflective, Observation, Thoughtful'
  },
]

var body = document.getElementById("body");
var newDiv = document.createElement("div");
body.appendChild(newDiv);
newDiv.className = 'container text-center';

var title = document.createElement("h2");
newDiv.appendChild(title);
title.className = "empty";

var img = document.createElement('img');
newDiv.appendChild(img);
img.className = "empty";

var description = document.createElement("div");
newDiv.appendChild(description);
description.className = "empty";


function getHoroscope() {

  var input = document.getElementById("input");
  console.log(input.value);


  for (var i = 0; i < horoscopes.length; i++) {
    if (input.value == horoscopes[i].name) {
      input.value = [];

      console.log('You typed in ' + horoscopes[i].name)
      title.innerHTML = horoscopes[i].name;
      img.src = horoscopes[i].img;
      description.innerHTML = horoscopes[i].attributes;
    }
  }

  img.style.height = 'auto';
  img.style.width = '350px';
};
