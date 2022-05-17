"use strict";

var questions = [
    {
        "question" : "In interviews, despots are often surprisingly ___________; this helps to explain how seemingly awful people are able to command so many followers.",
        "options" : ["malign", "indignant", "forgiving", "personable", "munificent"],
        "answer" : "personable"
    },
    {
        "question" : "The thriving health food company sells __________ meat products so meat-like that vegetarians sometimes call the phone number on the box to make sure that the product is really animal-free.",
        "options" : ["mendacious", "nugatory", "ersatz", "mimetic", "clandestine"],
        "answer" : "ersatz" 
    },
    {
        "question" : "The successful tech company faces an ironic problem in the fall quarter; people are so excited about the next (i) ________ of its product, which will be released over the holidays, that they refuse to purchase the current version.",
        "options" : ["ingenuity", "obsolete", "iteration", "practice", "implication"],
        "answer" : "iteration" 
    },
    {
        "question" : " Newborn babies are perfectly _____________, as yet unable to be concerned for others, or even to understand a difference between themselves and the world around them. As young children mature, they make the arresting discovery that other people exist and have their own needs and desires — in other words, that the entire world is not about them.",
        "options" : ["solipsistic", "selfish", "quixotic", "sophomoric", "undue"],
        "answer" : "solipsistic"
    },
    {
        "question" : "Historically, arguments against women's suffrage ran the gamut from the claim that women would cancel out their husbands' votes to the charge that women would merely ape their husbands' preferences, thus making their votes redundant. Such arguments, while once convincing, today seem __________ indeed.",
        "options" : ["cogent", "shabby", "ponderous", "disclaim", "override"],
        "answer" : "shabby"
    },
    {
        "question" : "His theory purported that “proper” enjoyment of art was a matter of pure aesthetics — it is surely, he says, a baser pleasure being enjoyed by the untrained hoi-polloi, the museum “tourist” with _________ sensibilities, and even the art theorists and art historians who simply appreciate cultural referents or narratives in art, a predilection he thinks leads to facile view of any art that includes such elements.",
        "options" : ["cabal", "urbane", "parochial", "dulcet", "incendiary"],
        "answer" : "parochial"
    },
    {
        "question" : "During an economic depression, it is common for food prices to increase even as incomes decrease. Surprisingly, however, researchers determined that during a depression, for every 5 percent increase in the cost of bread, the lowest socioeconomic class actually increases the amount of bread purchased per capita by 3 percent.<br><br>Which of the following hypotheses best accounts for the researchers\’ findings?",
        "options" : ["Not all food costs increase during a depression; some food items actually become less expensive. ", "Because bread consumption does not increase by the same percentage as the cost does, people are likely consuming more of other food items to compensate.", "When incomes decrease, people are typically forced to spend a larger proportion of their income on basic needs, such as food and housing.", "People who suddenly cannot afford more expensive foods, such as meat, must compensate by consuming more inexpensive foods, such as grains.", "During a depression, people in the lowest socioeconomic class will continue to spend the same amount of money on food as they did before the depression began."],
        "answer" : "People who suddenly cannot afford more expensive foods, such as meat, must compensate by consuming more inexpensive foods, such as grains."
    }
];

let previousQuestion;

document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".opts");
    let q = getQuestion();
    displayQuestion(q, options);
    document.querySelector(".next").addEventListener("click", nextButton);
    document.querySelector(".previous").addEventListener("click", previousButton);
    choice(options);
});

function getQuestion() {
    // Randomly generate question
    let number = parseInt(Math.random() * 7);
    return questions.at(number);
}

function displayQuestion(question, options) {
    const showQuestion = document.querySelector(".show_question");
    const labels = document.querySelectorAll(".label");
    showQuestion.innerHTML = question.question;
    question.options.forEach((option, index) => {
        // console.log(`${option}: =>${index}`);
        options[index].value = option;
        labels[index].innerHTML = option;

    });
}

function setPrevious(preQuestion) {
    previousQuestion = preQuestion;
}

function nextButton() {
    alert("Next");
}

function previousButton() {
    alert("Previous");
}

function choice(options) {
    // Todo
    // When I select the redio input should display the chosen option.
    options.forEach(option => {
        option.addEventListener("", ()=>{
            alert(option.value);
        });
    });
}