let current = 0
let answers = new Array(questions.length).fill(null)
let review = new Array(questions.length).fill(false)

loadQuestion()

function loadQuestion(){

let q = questions[current]

document.getElementById("question").innerText =
"Q" + (current+1) + ". " + q.question

let html = ""

q.options.forEach((opt,i)=>{

let checked = answers[current]==i ? "checked" : ""

html += `
<label>
<input type="radio" name="option" value="${i}" ${checked}>
${opt}
</label><br>
`
})

document.getElementById("options").innerHTML = html

updatePalette()
}

function saveNext(){

let selected = document.querySelector('input[name="option"]:checked')

if(selected){
answers[current] = parseInt(selected.value)
}

current++

if(current < questions.length){
loadQuestion()
}
}

function prevQuestion(){

if(current>0){
current--
loadQuestion()
}
}

function clearResponse(){
answers[current] = null
loadQuestion()
}

function markReview(){
review[current] = true
updatePalette()
}

function updatePalette(){

let palette = document.getElementById("palette")
palette.innerHTML = ""

for(let i=0;i<questions.length;i++){

let color = "#ccc"

if(review[i]) color = "purple"
else if(answers[i]!=null) color = "green"

palette.innerHTML +=
`<button style="background:${color}"
onclick="jump(${i})">${i+1}</button>`
}
}

function jump(i){
current = i
loadQuestion()
}
