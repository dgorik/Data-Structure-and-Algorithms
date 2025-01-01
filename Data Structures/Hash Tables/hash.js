function hash(key, arrayLen){
    let total = 0
    let WIERD_PRIME = 31
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WIERD_PRIME + value) % arrayLen
    }
    return total
}

console.log(hash("hello", 13))

class HashTable{
    constructor(){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0
        let WIERD_PRIME = 31
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WIERD_PRIME + value) % arrayLen
        }
        return total
    }

    set(key,value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([])

    }

    get(key){
        let index = this._hash(key)

        if(this.keyMap[index]){
            for( let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] == key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    
}