const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
  // const today = "20/01"

  const dayExist = nlwSetup.dayExists(today)

  if (dayExist) {
    alert("dia ja incluso!")
    return //a execulção do codgo para nessa linha
  }

  alert("Dia Adicionado com sucesso 💚")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
// const data = {
//   bodybuilding: ["01-01", "01-02", "01-06", "01-08"],
//   capoeira: ["01-08"]
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
