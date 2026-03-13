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

let url = "https://script.google.com/macros/s/AKfycbyp-6oaHho0YJ_dh_m7S189TUghfzsTs_3YvRxkchmsCzuCfUPOjlK7CtzgXqGSM71d/exec"

url += "?name=" + name
url += "&q1=" + answers[0]
url += "&q2=" + answers[1]
url += "&q3=" + answers[2]
url += "&score=" + score

fetch(url)

alert("Exam submitted. Score: "+score)

location.reload()

}
