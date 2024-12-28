class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12]
    }

    insert(val){
        this.values.push(val)

        var bubbleup = () => {
            let idx = this.values.length - 1
            const element = this.values[this.values.length - 1]
            while(true){
                let parentIdx = Math.floor((idx - 1)/2)
                let parent = this.values[parentIdx]
                if(element > parent){
                    [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]]
                    idx = parentIdx
                }
                else{
                    break
                }
            }
        }

        bubbleup()
    }
}

let heap = new MaxBinaryHeap()

heap.insert(55)

console.log(heap)

