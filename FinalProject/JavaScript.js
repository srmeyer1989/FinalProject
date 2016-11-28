$('document').ready(function () {
    $('#submit').click(parseToDo);
    loadFurture();
    function parseToDo() {
        var course = $('#courseCombo').val();
        var assignment = $('#assnName').val();
        var dueDate = $('#dueDate').val();
        var data = {
            "course": course,
            "assignment": assignment,
            "dueDate": dueDate
        };
        addToDo(data);

        $('#assnName').val("");
        $('#dueDate').val("");
    }

    function addToDo(toDo) {

        $('#toDoBody').append("<tr><td></td><td>" + toDo.course + "</td><td>" + toDo.assignment + "</td><td>" + toDo.dueDate + "</td></tr>");
    }

    function loadFurture() {
        var data = [
            {
                courseNumber: "401",
                course: "Math",
                assignment: "Example Assignment",
                dueDate: "12-26-16"

            },
            {
                courseNumber: "402",
                course: "Math",
                assignment: "Example Assignment 2",
                dueDate: "12-20-16"
            },
            {
                courseNumber: "403",
                course: "Math",
                assignment: "Example Assignment 3",
                dueDate: "12-15-16"
            }
        ]

        data.forEach(function (element) {
            $("#futureAssn").append("<tr><td>" + element.courseNumber + "</td><td>" + element.course + "</td><td>" + element.assignment + "</td><td>" + element.dueDate + "</td></tr>")
        });
    };
});