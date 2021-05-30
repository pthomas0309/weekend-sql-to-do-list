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

    [x] CLIENT
        [x] get existing data from server
            [x] doc ready run function
                [x] ajax GET /tasks
        [x] append data to dom
            [x] logic to eval if the task is completed or not / if it's a priority
                    [ ] maybe figure out how computers think about time?
        [x] grab data from inputs 
            [x] create object to simulate table row *see data model
        [x] send user data to the server
            [x] ajax POST route /tasks
        [x] COMPLETING A TASK YAAYY
            [x] let them know that it's cool to complete tasks
                [x] see CSS
                [-] JQ animation?
                [x] remove from uncompleted tasks to completed tasks in case of false completion and so you can remember what you've completed
                [x] update completion status
                    [x] ajax PUT call to server
        [x] remove tasks from DOM on button click
            [x] trash button removes singular uncompleted tasks and clear button removes all completed tasks
                [x] communicate to server this needs to be deleted from the database
                    [x] ajax DELETE /tasks/taskID
                    [x] to clear all completed tasks we will have to loop through every id in the completed tasks div
                    [x] re-render the tasks
        [x] edit task info on button click
            

    [x] SERVER
        [x] set up server
        [x] get table data from postico
            [x] .get to /tasks
                [x] SQL select all the table rows in order of priority
                [x] send selection to client
        [x] post new tasks as a row in table
            [x] .post to /tasks
                [x] SQL INSERT INTO to-do-list
                [x] sanitize SQL with pool query
        [x] update table rows
            [x] for tasks that are completed
                [x] .put /tasks/taskID
                    [x] req.params.id to target id
                    [x] conditional to apply different SQL statements for if a task is complete or not
                    [x] SQL UPDATE completed
                    [x] sanitize id
        [x] delete table row
            [x] remove an uncompleted task
                [x] .delete single task by tasks/taskID
                    [x] SQL DELETE row
                    [x] req.params.id to target id
            [x] clear all completed tasks with button click

    [x] STYLE
        [x] Bootstrap
            [x] long-boi inputs
            [x] color change buttons
            [x] check boxes
        [ ] Color way: retro vibes
            [x] quars #89A194
            [x] spztr #322938
            [x] Turning to Ash #655643
            [x] I am angry #C24D2C
            [x] Psenape #DC8D0C
            [x] goldenapple #E6AC27
            [x] 16 #78BEA2
        [x] Font Family import
            [x] DINosaur <link rel="stylesheet" href="https://use.typekit.net/pbz8zil.css">
            [x] Zeitung <link rel="stylesheet" href="https://use.typekit.net/pbz8zil.css">



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
