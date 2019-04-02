var responseData;
function serverAccessor(data){
     var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          responseData = this.responseText;
    }
  };
  xhttp.open("POST", "demo_post.asp", true);
  xhttp.send(data);
    console.log(responseData);
}