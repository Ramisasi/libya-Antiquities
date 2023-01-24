const baseURL = 'http://localhost:3000'
// start Display data
let products = []
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
getData()
function showData() {
    let cartonna = ``
    console.log(products);
    for (let index = 0; index < products.length; index++) {
        cartonna += `  <tr>
           <td>${products[index].Product_ID}</td>
           <td>${products[index].product_title}</td>
           <td>${products[index].Product_desc}</td>
           <td>
           <img width="80px" height="50" src="../Index/img/portfolio/${products[index].Img_Pat}" alt="${products[index].product_title}" />
           </td>
           <td>
           <button onclick='deleteItem(${products[index].Product_ID})' class="btn btn-danger">Delete</button>
           <button onclick='updateItem(${products[index].Product_ID})' class="btn btn-warning">Update</button>
    
           </td>
       </tr>`

    }
    document.getElementById('TableData').innerHTML = cartonna
}
// End Display data

//create product with 
$("#ButAdd").click(() => {
    const data = {
        Desc: $("#ProductDesc").val(),
        Title: $("#ProductTitle").val(),
        ImgPat: $("#ImgPat").val(),
        User_Id: localStorage.getItem("userID")
    }
    console.log(data);
    axios({
        method: 'post',
        url: `${baseURL}/AddProduct`,
        data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (res) {
        const { message } = res.data
        if (message == "Done") {
            alert("added success")
            getData()
        } else {
            alert("Fail to add your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
})

function deleteItem(id){

    axios({
        method: 'delete',
        url: `${baseURL}/DeleteProduct/${id}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {
            alert("Deleted successfully")
            getData()
        } else {
            alert("Fail to Delete your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
}

function updateItem(id){
    localStorage.setItem("productID" ,id)  
    window.location.replace("UpdateProduct.html");   
}
