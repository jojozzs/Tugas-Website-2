export const helloMSg = (element) => {
    element.innerHTML = 'Hello'
    element.addEventListener('click', ()=> alert("Hello"))
}
export const byeMsg =(element) => {
    element.innerHTML = 'Bye'
    element.addEventListener('click', ()=> alert("Bye"))
}


