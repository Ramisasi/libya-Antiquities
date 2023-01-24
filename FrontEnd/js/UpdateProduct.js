
const baseURL = 'http://localhost:3000'
const productID = localStorage.getItem('productID')
function getProduct() {
    axios({
        method: 'get',
        url: `${baseURL}/GetProductByID/${productID}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, resul } = response.data
        $('#producttitle').val(resul[0].product_title);
        $('#Productdesc').val(resul[0].Product_desc);
        $('#ImgPat').val(resul[0].Img_Pat);
    }).catch(function (errer) {
        console.log(errer);
    });
}
getProduct()

$("#updateProduct").click(() => {
    const data = {
        Title: $('#producttitle').val(),
        Desc: $('#Productdesc').val(),
        ImgPat: $('#ImgPat').val(),
    }
    axios({
        method: "put",
        url: `${baseURL}/UpdateProducts/${productID}`,
        data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }

    }).then((response) => {
        const { message } = response.data;
        console.log(response);
        if (message == 'Done') {
            window.location.replace("ViweProduct.html");
        } else {
            alert("In-valid data")
        }
    }).catch((err) => {
        console.log({ message: "Catch error", err });
    })
})