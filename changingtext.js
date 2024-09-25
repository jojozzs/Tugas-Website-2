import $ from "jquery";

const changingtext = (changetext) => {
    console.log("tes");
    console.log(element);
    element.text('Click Here to Change Text');
    
    const isiElement = $('#isi'); 
    console.log(isiElement); 
    
    isiElement.text("Hello World 2");
    
    element.click(() => {
        isiElement.text("Hello World 3");
    });
};

console.log("wlaw");
export default changingtext;
