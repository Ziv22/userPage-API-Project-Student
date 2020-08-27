class APIManager {
    constructor() {
        this.data = {}
    }

    randomNumber(limit){
        return Math.floor(Math.random() * limit)
    }

    helper(url , func){
        $.ajax({
            method: "GET",
            url: url,
            success: (response) =>{
                func(response)
            },
            error: function (xhr, text, error) {
                return `something went wrong`
            }
        })
    }


    getPeople(){
        let url = `https://randomuser.me/api/?results=7`
        const modifyPeopleData = response => {
            this.data['user'] = response.results.splice(0,1)[0]
            this.data['friends'] = response.results
        }
        this.helper(url , modifyPeopleData)
    }

    getQuote(){
        let url = `https://api.kanye.rest/`
        const modifyQuoteData = response =>{
            this.data['quote'] = response.quote
        }
        this.helper(url , modifyQuoteData)
    }

    getPokemon(){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.randomNumber(30)}`
        const modifyPokemonData = pokemon => {
            this.data.pokemon = {
                name: pokemon.species.name ,
                url: pokemon.sprites.front_shiny
            }
        }
        this.helper(url , modifyPokemonData)
    }

    getInfo(){
        let url = `https://hipsum.co/api/?type=hipster-centric&sentences=10`
        const modifyInfoData = hipster => {
            this.data['hipster'] = hipster[0]
        } 
        this.helper(url , modifyInfoData)
    }

    saveTolocalStorage(){
        localStorage["currentUser"] = JSON.stringify(this.data)
    }
}

