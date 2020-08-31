class Renderer {
    constructor(){
    }

    showNamesList(modifiedData){
        const source    = $(`#select-user-template`).html()
        const template  = Handlebars.compile(source)
        const toAppend  = template( {modifiedData})           
        $(`.select-user-container`).empty().append(toAppend) 
    }
    
    render(data){
        const renderHelper  = (key, modifiedData) =>{
            const source    = $(`#${key}-template`).html()
            const template  = Handlebars.compile(source)
            const toAppend  = template( {modifiedData})
            $(`.${key}-container`).empty().append(toAppend) 
        }

        renderHelper(`user`   , data.user)
        renderHelper(`friends`, data.friends)
        renderHelper(`hipster`, data.hipster)
        renderHelper(`pokemon`, data.pokemon)
        renderHelper(`quote`  , data.quote)
    }

    showfromlocalStorage(data){
        this.render(data)
    }
}

