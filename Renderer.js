class Renderer {
    constructor(){
    }

    render(data){
        const renderHelper  = (key, modifiedData) =>{
            const source    = $(`#${key}-template`).html()
            const template  = Handlebars.compile(source)
            const toAppend  = template( {modifiedData})//{modifiedData:{pokemon:{name: "oooooo"}}}
            $(`.${key}-container`).empty()     
            $(`.${key}-container`).append(toAppend)     
        }

        renderHelper(`user`   , data.user)
        renderHelper(`friends`, data.friends)
        renderHelper(`hipster`, data.hipster)
        renderHelper(`pokemon`, data.pokemon)
        renderHelper(`quote`  , data.quote)
    }
}

