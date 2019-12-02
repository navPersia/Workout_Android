//call ajax
var ajax = new XMLHttpRequest();
var method = "GET";
var url = "";
var asynchronous = true;

ajax.open(method, url, asynchronous);

// sending ajax request
ajax.send();

// receving response from php
ajax.onreadystatechange = function () {
   if (this.readyState == 4 && status == 200){
        // converting JSON to array
       var data = JSON.parse(this.responseText);
        console.log(data); //for debuging
   }
};