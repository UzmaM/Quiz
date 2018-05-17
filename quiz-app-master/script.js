function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(choices);

var content =
[
  {question: 'which is the power house of the cell?', choices: ['nucleus', 'mitochondria', 'ribosomes', 'cellwall'], correct: 1},
  {question: 'what is study of heredity referred as ?', choices: ['genetics', 'cellular biology', 'heriditology', 'bio-technology'], correct: 0},
  {question: 'every action has an equal and opposite reaction is stated by whom?', choices: ['gelilio', 'plank', 'Newton','Einstien'], correct: 2},
  {question: 'Photosynthesis takes place in the membranes of small sacs called ', choices: ['thylakoids','grana',  'photosystems', 'photons'], correct: 0},
  {question: 'Which of these words below is spelled incorrectly?', choices: ['Inoculate', 'Consensus', 'Liquefy', 'Sacreligious'], correct: 2},
  {question: 'which pigment is responsible for green color in plants?', choices:['xanthophyll', 'xylem', 'phloem', 'chlorophyll'], correct:3},
  {question: 'which of the following is used in gene cloning?', choices:['plasmids', 'mesosomes', 'nucleoids', 'chromosomes'], correct:0},
  {question: 'what are genes?', choices:['study of heredity', 'code of DNA', 'double helix model', 'food'], correct:1},
  {question: 'what is the 1st cloned mammal?', choices:['human', 'sheep', 'rat', 'dog'], correct:1},
  {question: 'name the galaxy we live in!', choices:['whirlpool galaxy', 'blackhole', 'nebula', 'milkyway'], correct:3},
];

var x = 0; 
var y = 1; //question numbers
var score = 0;

function choices() {
  if (content[x] === undefined) {
    alert("questions have been answered!! click ok to see the score");
    document.querySelector('.score').textContent = 'Score: ' + score;
    document.form1.style.visibility = 'hidden';
    document.querySelector('.header').style.visibility = 'hidden';

  } else {
    var questionNumber = document.querySelector('.questionNumber');
    questionNumber.textContent = 'Question#' + y;

    var question = document.querySelector('.question');
    question.textContent = content[x]['question'];

    var choices = document.querySelectorAll('label');
    for (var i = 0; i < choices.length; i++) {
      choices[i].textContent = content[x]['choices'][i];
    }
  }
}

function next() {
  var inputs = document.querySelectorAll('input');

  if (content[x] === undefined) {
    return false;
  }

  else if (inputs[0].checked !== true && inputs[1].checked !== true && inputs[2].checked !== true && inputs[3].checked !== true) {
    alert('Please select an answer');

  } 
  else {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true && i === content[x]['correct']) {
        score++;
      }
    inputs[i].checked = false;
  }

  x++;
  y++;
  choices();
  }
}

function back() {
  var inputs = document.querySelectorAll('input');

  if (x === 0) {
    return false;

  } else {
    x--;
    y--;
    choices();
  }
}