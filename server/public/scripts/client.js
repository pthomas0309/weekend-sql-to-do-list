console.log('js sourced');

$(readyNow);

function readyNow(){
    console.log('JQ sourced');
    getTasksData();
    $('#submit').on('click', createTask);
}

// function to call on an ajax POST route that will 
// send a new task object to the server and send back an ok
function addToTaskList(taskToAdd){
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: taskToAdd
    }).then(response => {
        // looking for ok from server
        console.log('Steve Harvey: Server says:', response);
        // call on our function that retrieves DB from server and render DOM
        getTasksData();
    }).catch(err => {
        console.log('POST error', err);
        swal('PDA unable to add task. Please try again.');
    })
}

// DATA MODEL
// let task = {
//     list_item: userInputValue,
//     priority: boolean, // decided by user toggle
//     completed: boolean //default to false
// }

// function to check if the priority checkbox is checked or not
function handleCheckbox(){
    // conditional to return different values
    if ($('#prioritize').prop('checked') === true){
        console.log('checkbox is checked');
        return true;
    } else if ($('#prioritize').prop('checked') === false){
        console.log('checkbox is not checked');
        return false;
    };
}

// function to create object to send to server
function createTask(){
    let task = {};
    task.list_item = $('#listItemIn').val();
    // have to define prioritize with a method
    task.priority = handleCheckbox();
    // completed will default to false
    task.completed = false;
    console.log(task);
    // send this data to the server
    addToTaskList(task);
}

// this will take in the incoming table information
function getTasksData(){
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(response => {
        console.log(response);
        renderTasks(response);
    }).catch(err => {
        console.log('error in getTasksData', err);
    });
};

//append all tasks to the DOM
function renderTasks(tasksArray){
    //empty containers
    $("#uncompleted-tasks").empty();
    $("#completedList").empty();
    // loop throught the response array
    for (let task of tasksArray){
        //conditional checks if tasks are marked completed or not
        if (task.completed === true){
            //if task is completed it should append to #completedList
            $('#completedList').append(`
                <div class="completedListItem">
                    <p>${task.list_item}</p>
                    <button class="return-to-list">Return To List</button>
                </div>
            `)
        } else if (task.completed === false){
            $('#uncompleted-tasks').append(`
                <div class="listItem">
                    <button id="markCompleteBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle"
                            viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        </svg>
                    </button>
                    <p>${task.list_item}</p>
                    <button id="editBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
                            viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </button>
                    <button id="trashBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
                            viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </button>
                </div>
            `)
        } else {
            return;
        };
    };
};

// function checkSwal(){
//     swal("Sweet Alert sourced");
// }