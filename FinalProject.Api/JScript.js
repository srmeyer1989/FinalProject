$('document').ready(function () {
    $('#submit').click(addAssignment);
    loadFurture();


    function addToDo(toDo) {
        if (Date.parse(toDo.DueDate) <= moment().add(7, 'd') && Date.parse(toDo.DueDate) >= new Date()) {
            $("#toDoBody").append("<tr><td>" + toDo.Course + "</td><td>" + toDo.Name + "</td><td>" + toDo.DueDate + "</td></tr>");
        }
        $("#futureAssn").append("<tr><td>" + toDo.Course + "</td><td>" + toDo.Name + "</td><td>" + toDo.DueDate + "</td></tr>");
    }

    function addAssignment() {
        var course = $("#courseCombo").val();
        var dueDate = $("#dueDate").val();
        var name = $("#assnName").val();

        var assn = {
            Id: 0,
            DueDate: dueDate,
            Course: course,
            Name: name
        };

        $.post("http://localhost:61891/api/values", assn).done(function (data) {
            addToDo(data)
        });
        $("#dueDate").val("");
        $("#assnName").val("");

    }

    function loadFurture() {
        $.get("http://localhost:61891/api/values").done(function (data) {
            data.forEach(function (element) {
                addToDo(element);
            });
        });


    };
});