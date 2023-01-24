const baseURL = 'http://localhost:3000'
let SumProducts, SumUsers
function gettCountProducts() {
    axios({
        method: 'get',
        url: `${baseURL}/GetCountProducts`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, resul } = response.data
        SumProducts = resul[0]["count(Product_ID)"]
        document.getElementById('CountProducts').innerHTML = SumProducts

    }).catch(function (error) {
        console.log(error);
    });
}
function getCountUsers() {
    axios({
        method: 'get',
        url: `${baseURL}/GetCountUsers`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, resul } = response.data
        SumUsers = resul[0]["count(ID)"]
        document.getElementById('CountUsers').innerHTML = SumUsers
    }).catch(function (error) {
        console.log(error);
    });
}


function getData() {
    axios({
        method: 'get',
        url: `${baseURL}/AllProducts`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, resul } = response.data
        products = resul
        showData()
    }).catch(function (error) {
        console.log(error);
    });
}
function showData() {
    let cartonna = ``
    console.log(products);
    for (let index = 0; index < products.length; index++) {
        cartonna += `  
        <div class="col-xs-12 col-sm-4">
        <div class="portfolio_single_content">
            <img width="360px" height="360" src="../Index/img/portfolio/${products[index].Img_Pat}" alt="${products[index].product_title}" />
            <div>
                <a href="#">${products[index].product_title}</a>
                <span>${products[index].Product_desc}</span>
            </div>
        </div>
    </div>`

    }
    document.getElementById('portfolio').innerHTML = cartonna
}

gettCountProducts()
getCountUsers()
getData()