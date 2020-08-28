class APIManager {
    constructor() {
        this.data = {}
        this.users = {list:[]}
    }

    randomNumber(limit) {
        return Math.floor(Math.random() * limit)
    }

    helper(url, func) {
        $.ajax({
            method: "GET",
            url: url,
            success: (response) => {
                func(response)
            },
            error: function (xhr, text, error) {
                return `something went wrong`
            }
        })
    }


    getPeople() {
        let url = `https://randomuser.me/api/?results=7`
        const modifyPeopleData = response => {
            let userData = response.results.splice(0, 1)[0]
            let modifiedUserData = { firstName: userData.name.first,
                                     lastName: userData.name.last,
                                     city: userData.location.city,
                                     state: userData.location.state,
                                     picture: userData.picture.medium
                                    }
            this.data['user'] = modifiedUserData
            this.data['friends'] = response.results.map(u => ({ firstName: u.name.first, lastName: u.name.last }))
            console.log(this.data.user)
            console.log(this.data.friends)
        }
        this.helper(url, modifyPeopleData)
    }

    getQuote() {
        let url = `https://api.kanye.rest/`
        const modifyQuoteData = response => {
            this.data['quote'] = response.quote
        }
        this.helper(url, modifyQuoteData)
    }

    getPokemon() {
        let url = `https://pokeapi.co/api/v2/pokemon/${this.randomNumber(30)}`
        const modifyPokemonData = pokemon => {
            this.data.pokemon = {
                name: pokemon.species.name,
                url: pokemon.sprites.front_shiny
            }
        }
        this.helper(url, modifyPokemonData)
    }

    getInfo() {
        let url = `https://hipsum.co/api/?type=hipster-centric&sentences=10`
        const modifyInfoData = hipster => {
            this.data['hipster'] = hipster[0]
        }
        this.helper(url, modifyInfoData)
    }

    saveTolocalStorage() {
        let userName = `${this.data.user.firstName}_${this.data.user.lastName}`
        this.users[userName] = this.data
        this.users.list.push(userName)
        localStorage['users'] = JSON.stringify(this.users)
    }
}

