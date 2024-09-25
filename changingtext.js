import $ from "jquery";

const changingtext = (element) => {
    console.log("tes");
    console.log(element);
    element.text('Click Here to Change Text');
    
    const isiElement = $('#isi'); 
    console.log(isiElement); 
    element.click(() => {
        isiElement.text("Hello World 2");
        element.click(() => {
         isiElement.text("Hello World 3");
    });
});
};

export default changingtext;
