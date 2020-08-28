const render = new Renderer()
const apiManager = new APIManager()

const $getUserData = $('#load-user')
$getUserData.on("click", function(){
    apiManager.getPeople()
    apiManager.getQuote()
    apiManager.getPokemon()
    apiManager.getInfo()
})

const $displaytUserData = $('#display-user')
$displaytUserData.on("click", function(){
    render.render(apiManager.data)
})

const modifyNamesList = () =>{
    const users = JSON.parse(localStorage.users)
    console.log(users)
    return users.list.map(u => `${u.firstName} ${u.lastName}`)
}

const $saveUser = $('#save-user')
$saveUser.on("click", function(){
    apiManager.saveTolocalStorage()
    names = modifyNamesList()
    render.showNamesList(names)
})

const $displaySavedUsers = $('#display-saved-users')
const $selectedUser = $('#select-user').val()

$displaySavedUsers.on("click", function(){
    const users = JSON.parse(localStorage.users)
    console.log(`users: ${users}`,`selected User: ${$selectedUser}`)
    render.render(users,$selectedUser)
})

$('#select-user').load(function(){
    names = modifyNamesList()
    render.showNamesList(names)
})

render.showNamesList()
