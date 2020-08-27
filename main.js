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

const $saveUser = $('#save-user')
$saveUser.on("click", function(){
    apiManager.saveTolocalStorage()
})

const $displaySavedUser = $('#display-saved-user')
$displaySavedUser.on("click", function(){
     let savedUser = JSON.parse(localStorage["currentUser"])
     render.render(savedUser)
})
