const inputBtn = document.querySelector('.btn_text')
const input = document.querySelector('.input_text')
const divv = document.querySelector('.divv')
const text = document.createElement('h1')



text.style.backgroundColor = "red";
text.style.padding = "5px";
text.style.borderRadius = "100px";
text.style.marginTop = "200px";
text.style.width = "100%";
text.style.height = "40px";
text.style.alignItems = "center";
text.style.textAlign = "center";
text.style.display = "flex";
text.style.justifyContent = "center";
text.style.color = "white";
const btn_red = document.createElement('div')


btn_red.style.borderRadius = '15px'
divv.append(text)

inputBtn.addEventListener('click', () => {
    if (input.value === '') {
        alert('notori')
    } else  {
        divv.append(text)
        text.innerHTML = input.value
    }})