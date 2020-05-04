function ajax(src, callback){
    const xhr = new XMLHttpRequest;
    xhr.open('GET', src);
    xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        callback(data);
    }
  };
  xhr.send();
}

function render(data) {
    data.map((i) => {
        const parent = document.getElementById('ajaxdata');
        
        //Create Elements
        let item = document.createElement('div');
        item.className = "item";
        let title = document.createElement('h2');
        title.textContent = i.name;
        let price = document.createElement('p');
        price.className = "price"
        price.textContent = "NT$ " + i.price;
        let description = document.createElement('p');
        description.textContent = i.description;

        //Append Elements
        item.appendChild(title);
        item.appendChild(price);
        item.appendChild(description);
        parent.appendChild(item);

    });
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page