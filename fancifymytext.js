// "Bigger!" button event
document.getElementById("biggerBtn").onclick = function () {
  alert("Hello, world!");
  document.getElementById("userText").style.fontSize = "24pt";
};

document.getElementById("fancyRadio").onchange = applyRadioStyle;
document.getElementById("boringRadio").onchange = applyRadioStyle;

function applyRadioStyle() {
  let textArea = document.getElementById("userText");

  if (document.getElementById("fancyRadio").checked) {
    // FancyShmancy styles
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    // BoringBetty styles
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// "Moo" button event
document.getElementById("mooBtn").onclick = function () {
  let textArea = document.getElementById("userText");
  let textStr = textArea.value.toUpperCase();

  let sentences = textStr.split(".");

  for (let i = 0; i < sentences.length - 1; i++) {
    sentences[i] = sentences[i].trim() + "-Moo";
  }

  textArea.value = sentences.join(". ") + ".";
};
