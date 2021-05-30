console.log('js sourced');

$(readyNow);

function readyNow(){
    console.log('JQ sourced');
    getTasksData();
    // $('#submit').on('click', checkSwal);
}
// this will take in the incoming table information
function getTasksData(){
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(response => {
        console.log(response);
        // renderTasks();
    }).catch(err => {
        console.log('error in getTasksData', err);
    })
}

//append all tasks to the DOM
// function renderTasks(){
    
// }

// function checkSwal(){
//     swal("Sweet Alert sourced");
// }