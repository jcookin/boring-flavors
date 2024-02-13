const updateFlavorSelection = () => {
  const selector = document.getElementById("flavor-selector")
  console.log(selector.value)
}

const saveToFile = () => {
    var txt = document.getElementsByClassName("language-txt editable")
    for (let i = 0; i < txt.length; i++) {
        console.log(txt[i].outerText)
    }
}