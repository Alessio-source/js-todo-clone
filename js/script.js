$(document).ready(
  function(){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var objectsTodo = [
      {todo: "Bere tanta acqua"},
      {todo: "Compare il latte"},
      {todo: "Riportare libro in biblioteca"},
      {todo: "Fare i compiti"}
    ];

    for (var i = 0; i < objectsTodo.length; i++) {
      var context = objectsTodo[i];
      var html = template(context);
      $("#todoList").append( html );
    };

    $("#pulsante").click(
      function(){
        var element = {todo: $("#inputText").val()};
        objectsTodo.push(element);

        var context = element;
        var html = template(context);
        $("#todoList").append( html );
      }
    );

    $(document).on("click", ".delete",
      function(){
        $(this).parent().remove();
      }
    );

  }
);
