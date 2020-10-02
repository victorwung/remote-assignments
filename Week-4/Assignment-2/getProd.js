function ajax(src, callback) {
  let data;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText); // get json data
      callback(data);
    }
  };
  xhttp.open("GET", src, true); // call URL for json data
  xhttp.send();
}

function render(data) {
  // console.log('in render');
  let ul = document.getElementsByTagName('ul')[0];
  // get each product info
  for (var i = 0; i < data.length; i++) {
    var prodName = data[i].name;
    var prodPrice = data[i].price;
    var prodDesc = data[i].description;
    // console.log(`Name: ${prodName}, Price: ${prodPrice}, Description: ${prodDesc}`); // for check
    let li = document.createElement('li');
    li.textContent = `Name: ${prodName}, Price: ${prodPrice}, Description: ${prodDesc}`;
    ul.appendChild(li); // append to ul
  }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
  // console.log('in callback');
  render(response);
});