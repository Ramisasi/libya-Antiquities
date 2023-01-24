const baseURL = 'http://localhost:3000'
let SumProducts ,SumUsers
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
gettCountProducts()
getCountUsers()
