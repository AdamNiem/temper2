
let socket = io();  

//User Emitted Stuff

socket.on("update", (info) => {
    console.log("gameStart");
    console.log(info)
});


socket.on("error", (res) => {
    alert(res);
});
