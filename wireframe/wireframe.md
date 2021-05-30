####To-Do List project

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - background color of the page
  - font family and size
  - text color & or background color of tasks

### [x] MAKE A TABLE

    [x] name `weekend-to-do-app`
    [x] ROWS 
        [x] id
            [x] SERIAL
        [x] list-item
            [x] varchar(255)
        [x] priority
            [x] boolean
        [x] completed
            [x] boolean


### [ ] CREATE A TASK

    [x] INDEX
        [x] header
        [x] section for task input
            [x] input for task details
            [x] submit button for task
            [x] checkbox for priority events
        [x] sections for unfinished tasks
            [x] icon to mark tasks complete
                go-to CSS
            [x] icon to edit the task info
            [x] icon to remove the the task section
        [x] section for completed tasks
            [x] button to bring the completed task back to the list
            [null] option a) each completed item appends with a remove button to completely remove it from the database
            [x] option b) clear all completed tasks from the database with one button

    [ ] CLIENT
        [ ] get existing data from server
            [x] doc ready run function
                [x] ajax GET /tasks
        [ ] append data to dom
            [ ] logic to eval if the task is completed or not / if it's a priority
                    [ ] maybe figure out how computers think about time?
        [ ] grab data from inputs 
            [ ] create object to simulate table row *see data model
        [ ] send user data to the server
            [ ] ajax POST route /tasks
        [ ] COMPLETING A TASK YAAYY
            [ ] let them know that it's cool to complete tasks
                [ ] see CSS
                [ ] JQ animation?
                [ ] remove from uncompleted tasks to completed tasks in case of false completion and so you can remember what you've completed
                [ ] update completion status
                    [ ] ajax PUT call to server
        [ ] remove tasks from DOM on button click
            [ ] trash button removes singular uncompleted tasks and clear button removes all completed tasks
                [ ] communicate to server this needs to be deleted from the database
                    [ ] ajax DELETE /tasks/taskID
                    [ ] to clear all completed tasks we will have to loop through every id in the completed tasks div
                    [ ] re-render the tasks
        [ ] update task info on button click
            [ ] append a hidden text box to each task that will show when you click edit
            [ ] append submit changes button
            [ ] update this in the DB 
                [ ] ajax PUT /tasks/taskID
            [ ] re-render DOM

    [ ] SERVER
        [ ] set up server
        [ ] get table data from postico
            [ ] .get to /tasks
                [ ] SQL select all the table rows in order of priority
                [ ] send selection to client
        [ ] post new tasks as a row in table
            [ ] .post to /tasks
                [ ] SQL INSERT INTO to-do-list
                [ ] sanitize SQL with pool query
        [ ] update table rows
            [ ] for tasks that are completed
                [ ] .put /tasks/taskID
                    [ ] req.params.id to target id
                    [ ] conditional to apply different SQL statements for if a task is complete or not
                    [ ] SQL UPDATE completed
                    [ ] sanitize id
            [ ] to edit the description content for a task
                [ ] .put /tasks/taskID
                    [ ] SQL UPDATE list-item
                    [ ] sanitize id
        [ ] delete table row
            [ ] remove an uncompleted task
                [ ] .delete single task by tasks/taskID
                    [ ] SQL DELETE row
                    [ ] req.params.id to target id

    [ ] STYLE
        [ ] Bootstrap
            [ ] long-boi inputs
            [ ] color change buttons
            [ ] check boxes
        [ ] Color way: retro vibes
            [ ] Turning to Ash #655643
            [ ] I am angry #C24D2C
            [ ] Psenape #DC8D0C
            [ ] goldenapple #E6AC27
            [ ] 16 #78BEA2
        [ ] Font Family import
            [ ] DINosaur <link rel="stylesheet" href="https://use.typekit.net/pbz8zil.css">
            [ ] Zeitung <link rel="stylesheet" href="https://use.typekit.net/pbz8zil.css">
        [ ] class for uncompleted task
        [ ] class for completed task



### DATA MODEL

    let task = {
        list_item: userInputValue,
        priority: boolean, // decided by user toggle
        completed: boolean //default to false
    }

### EXTERNAL SOURCES

    fontawesome.com <script src="https://kit.fontawesome.com/5cc7f01119.js" crossorigin="anonymous"></script>

    fonts.adobe.com

### [ ] STRETCH GOALS

## `feature-styling-bootstrap` 

    - [ ]  Add Bootstrap to the front end and style it up!
      -  Buttons -- make the creation buttons and completion buttons green and the delete red.
      -  Inputs -- make your text inputs styled in the bootstrap way
      -  Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

##  `feature-confirm-delete`

    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
        - Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

## `feature-ordering-task-query` 

    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
## `feature-time-completed` 

    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.
