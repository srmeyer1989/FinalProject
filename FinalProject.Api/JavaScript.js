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
        $.get("http://localhost:61891/api/values").done(function (data) {
            alert(data);
        });
        data.forEach(function (element) {
            $("#futureAssn").append("<tr><td>" + element.courseNumber + "</td><td>" + element.course + "</td><td>" + element.assignment + "</td><td>" + element.dueDate + "</td></tr>")
        });

    };
});