let current = 0
let answers = []

loadQuestion()

function loadQuestion(){

let q = questions[current]

document.getElementById("question").innerText = q.question

let html = ""

q.options.forEach((opt,i)=>{

html += `
<label>
<input type="radio" name="option" value="${i}">
${opt}
</label><br>
`

})

document.getElementById("options").innerHTML = html

}

function nextQuestion(){

let selected = document.querySelector('input[name="option"]:checked')

if(selected){
answers[current] = parseInt(selected.value)
}

current++

if(current < questions.length){
loadQuestion()
}

}

function submitExam(){

let name = prompt("Enter your name")

let score = 0

for(let i=0;i<questions.length;i++){

if(answers[i] == questions[i].answer){
score++
}

}

fetch("https://script.google.com/macros/s/AKfycbx4EJ24fG4e_AsB152pR3rQrWtrG7ORYXpcD65elH8yk75MlshTyO2LWwB2BuR8o1p0/exec",{

method:"POST",

body:JSON.stringify({
name:name,
answers:answers,
score:score
})

})

alert("Exam submitted. Score: "+score)

}
