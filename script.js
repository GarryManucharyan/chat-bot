//#region variables

let allBlock = document.getElementById("all");
let input = document.getElementById("input");
let sendBtn = document.getElementById("send");
let questionList = document.querySelectorAll("li");
let addQuestionInput = document.getElementById("addQuestionInput");
let addAnswerInput = document.getElementById("addAnswerInput");
let addQuestionBtn = document.getElementById("addQuestionInDataBtn");

const answerList = {
  hi: "Hello!",
  hello: "Hi there !",
  "how are you?": "I am fine. Thanks.",
  "what’s up?": "Everything is OK.",
  "find me a hotel": "Here are some hotels.",
  "tell me something": "I am a robot.",
  "i have a question": "Hmm. I am waiting.",
  "how can you help me?": "I am all ears.",
  "are you human?": "No! I am a robot",
  "are you a robot?": "Yes I am :)",
  "what is your name?": "My name is Sarigyul",
  "how old are you?": "I have just borned",
  "what's your age?": "Hmm. i have no age",
  "what do you do with my data?": "I just save it for myself",
  "do you save what I say?": "Yes sir",
  "who made you?":
    "I was made by Garry Manucharyan, but my question list was made by Alen Muradyan, and then modified by Garry manucharyan:D",
  "which languages can you speak?":
    "only english yet, but i hope that i will know more languages soon ",
};
//#endregion

//#region event listeners

// es hatvacum kody vatna vorovhetev kodi krknutyunner kan

function handleSendMessageFromQuestionList(e) {
  createMessageBlock(e.target.innerText, "clientMessage");
  setTimeout(createAnswer, 600);

  function createMessageBlock(text, className) {
    let message = document.createElement("p");
    message.classList.add(className);
    message.innerText = text;
    allBlock.appendChild(message);
  }
  function createAnswer() {
    let answer;
    answer = answerList[e.target.innerText];

    createMessageBlock(answer, "botMessage");
  }
}

function handleSendMessage(e) {
  if (e.key == "Enter") {
    if (!!e.target.value.trim()) {
      createMessageBlock(e.target.value, "clientMessage");
      setTimeout(createAnswer, 600);
    }
  }

  function createMessageBlock(text, className) {
    let message = document.createElement("p");
    message.classList.add(className);
    message.innerText = text;
    allBlock.appendChild(message);
  }
  function createAnswer() {
    let answer;
    if (answerList[e.target.value.toLowerCase()]) {
      answer = answerList[e.target.value.toLowerCase()];
    } else
      answer =
        "sorry i can`t understand you, but you can add your question from right side";
    createMessageBlock(answer, "botMessage");
    e.target.value = "";
  }
}
function handleSendMessageWithSendBtn(e) {
  let text = e.target.parentNode.firstElementChild.value;
  if (text.trim()) {
    createMessageBlock(text, "clientMessage");
    setTimeout(createAnswer, 800);
  }

  function createMessageBlock(text, className) {
    let message = document.createElement("p");
    message.classList.add(className);
    message.innerText = text;
    allBlock.appendChild(message);
  }
  function createAnswer() {
    let answer;
    if (answerList[text.toLowerCase()]) {
      answer = answerList[text.toLowerCase()];
    } else
      answer =
        "sorry i can`t understand you, but you can add your question from right side";
    createMessageBlock(answer, "botMessage");
    e.target.value = "";
  }
}

function handleAddDataByKeypress(e) {
  if (e.key == "Enter") {
    handleAddData();
  }
}

function handleAddData(e) {
  if (!!addAnswerInput.value.trim() && !!addQuestionInput.value.trim()) {
    answerList[addQuestionInput.value.trim()] = addAnswerInput.value.trim();

    reRenderQuestionList();
  }
  addAnswerInput.value = "";
  addQuestionInput.value = "";
}
//#endregion

//#region rendering

function reRenderQuestionList() {
  let newQuestion = document.createElement("li");
  newQuestion.innerText = addQuestionInput.value.trim();
  newQuestion.addEventListener("click", handleSendMessageFromQuestionList);
  questionList[0].parentElement.append(newQuestion);
}

//#endregion

//#region functional

input.addEventListener("keypress", handleSendMessage);
questionList.forEach((item) =>
  item.addEventListener("click", handleSendMessageFromQuestionList)
);
sendBtn.addEventListener("click", handleSendMessageWithSendBtn);

addQuestionInput.addEventListener("keypress", handleAddDataByKeypress);
addAnswerInput.addEventListener("keypress", handleAddDataByKeypress);
addQuestionBtn.addEventListener("click", handleAddData);



// addQuestionInput.addEventListener("keypress", handleAddData);
// sendBtn.addEventListener("click", handleSendMessage);
