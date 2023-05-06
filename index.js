let colorArray = []

fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6")

.then(res => res.json())
.then(data => {
    colorArray = data.colors.slice(0, 5)
    renderColor()
})

function renderColor(){
    let html = ""
    for(let color of colorArray){
        html += `
        <div id ="color-ctn">
            <div id="color" style="background-color: ${color.hex.value};"></div>
          <div id="color-name">${color.hex.value}</div>
        </div>
        `
    }
    document.getElementById("color-area").innerHTML = html
}



function generateColor(){
    let selectedColor = document.getElementById("colorPicker").value
    selectedColor = selectedColor.replace('#','')
    let selectedMode = document.getElementById("modePicker").value
    let url = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}&count=6`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            colorArray = data.colors.slice(0, 5)
            renderColor()
})
}

document.getElementById('btn').addEventListener("click", generateColor)

generateColor()

