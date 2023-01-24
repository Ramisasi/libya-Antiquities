const baseURL = 'http://localhost:3000'

$("#ButLogin").click(() => {
    const email = $("#email").val();
    const password = $("#password").val();
    const data = {
        email,
        password
    }
    console.log({ data });
    axios({
        method: 'post',
        url: `${baseURL}/login`,
        data: data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        
    }).then(function (response) {
        console.log({ response });
        const { message, resul } = response.data
        if (message == "Done") {
            localStorage.setItem('userID', resul[0].ID);
            window.location.replace("index.html");
        } else {
            alert("In-valid email or password")
        }
    }).catch(function (erre) {
        console.log(erre);
    });

})






