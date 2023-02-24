let data;
document.getElementById('file-input')
 .addEventListener('change', 
 (e) => {
  var file = e.target.files[0];
  if (!file) {
   return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
   window.alert(e.target.result);
   data = e.target.result;
  };
  reader.readAsText(file);
 }
 , false);