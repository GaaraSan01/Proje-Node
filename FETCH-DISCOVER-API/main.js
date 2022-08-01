const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then((result) => result.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch((err) => {
        console.error(err)
    });
}
function getUser(id){
    fetch(`${url}/${id}`)
    .then((result) => result.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar

    })
    .catch((error) => console.error(error))
}
function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}
function updateUser(updatedUser, id){
    fetch(`${url}/${id}`, {
        method: "PUT",
        body:JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}
function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}


const newUser = {
    name: "Vinicius",
    avatar:"https://avatars.githubusercontent.com/u/91447833?v=4",
    city: "Curitiba"
}
const updatedUser = {
    name:"Sofia",
    avatar:"https://avatars.githubusercontent.com/u/91447833?v=4",
    city:"curitiba"
}
//updateUser(updatedUser, 4)
//addUser(newUser)

getUser(3)
getUsers()
deleteUser(19)

