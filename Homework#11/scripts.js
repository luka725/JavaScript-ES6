let str = [1, 2, 3]



function stringCollector(str) {
    if (typeof str === "string"){
        console.log(str)
    }else{
        try {
            if(typeof str === "number"){
                throw "This is a Number. Please prompt the string!"
            }else if(typeof str === "undefined"){
                throw "Please Prompt the string!"
            }else if(typeof str === "null"){
                throw "This is not a string!"
            }else{
                console.log(`you prompt ${typeof str}`)
            }
        }catch(e){
            console.log(`You prompt ${e}`)
        }finally{
            return str;
        }  
    }
}

function reverseJsonArray(str) {
    if (typeof str === "string"){
        console.log(`This is your reversed string -> ${JSON.stringify(str)}`)
    }else{
        try{
            throw `You Prompt non string value. your value is ${typeof str}`
        }catch(str){
            if (typeof str === "object"){
            console.log(str)
            }
        }finally{
            return false
        }
    }
}

reverseJsonArray(str)