const render = new Renderer()
const apiManager = new APIManager()

const $displaySavedUsers    = $('#display-saved-users')
const $displaytUserData     = $('#display-user')
const $getUserData          = $('#load-user')
const $saveUser             = $('#save-user')


$getUserData.on("click", function(){
    apiManager.getPokemon()
    apiManager.getPeople()
    apiManager.getQuote()
    apiManager.getInfo()
})

$displaytUserData.on("click", function(){
    render.render(apiManager.data)
})

// Desn't work yet
// const modifyNamesList = () =>{
//     const users = JSON.parse(localStorage.users  || "[]")
//     return users.list
// }

// Desn't work yet
// $saveUser.on("click", function(){
//     apiManager.saveTolocalStorage()
//     render.showNamesList(modifyNamesList())
// })

// $displaySavedUsers.on("click", function(){
//     const $selectedUser = $('#select-user').val()
//     const localUsers = JSON.parse(localStorage.users  || "[]")
//     render.showfromlocalStorage(localUsers[`${$selectedUser}`])
// })

