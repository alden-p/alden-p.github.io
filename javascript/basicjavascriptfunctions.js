  function TextInsert(id,s) {
    var htmlstring = document.getElementById(id).innerHTML;

  // use the native .trim() if it exists
  //   otherwise use a regular expression  
    htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
      if (htmlstring == "") {  
        document.getElementById(id).innerHTML = s;
      }
      else {
        document.getElementById(id).innerHTML = "";
      }
  }


