/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const pTag = document.getElementById("excuse");
  let who = ["My dad", "My brother", "BTS", "My dog", "God"];
  let action = ["cooked", "donated", "sacrificed", "digested"];
  let what = ["my homework", "my code", "my guitar", "my resume", "my tips"];
  let when = [
    "while I was having the runs",
    "while I was at work",
    "when I was asleep",
    "when I was praying"
  ];
  function generateSentence() {
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];

    return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;
  }

  const excuseSentence = generateSentence();
  pTag.innerHTML = excuseSentence;

  console.log(excuseSentence);
};
