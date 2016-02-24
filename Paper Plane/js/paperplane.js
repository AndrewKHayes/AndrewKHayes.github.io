console.log(" asdf this is running")  ; 
$.ajax({url: "http://api.npr.org/query?id=1003&title=U.S.%20News&apiKey=MDIyODk3Mjg2MDE0NTYxOTAwNDM2ZWJmNQ000&output=JSON", success: function(result){
var result = JSON.parse(result);
console.log(result.list.story[0].title);
var title = JSON.stringify(result.list.story[0].title.$text);
    console.log(title)
            $("#newsOne").html("<p>" + title + "</p>");
        }});
console.log("end")