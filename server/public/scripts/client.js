console.log('js sourced');

$(readyNow);

function readyNow(){
    console.log('JQ sourced');
    $('#submit').on('click', checkSwal);
}

function checkSwal(){
    swal("Sweet Alert sourced");
}