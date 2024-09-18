const helloMSg = (element) => {
    element.text ('Hello')
    element.click(()=> alert("Hello"))
}
const byeMsg =(element) => {
    element.text  ('Bye')    
    element.click(()=> alert("Bye"))
}

export default helloMSg
export {byeMsg}
