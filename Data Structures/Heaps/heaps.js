class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12]
    }

    insert(val){
        this.values.push(val)

        var bubbleup = () => {
            let idx = this.values.length - 1
            const element = this.values[this.values.length - 1]
            while(idx > 0){
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

    extractMax(){
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        this.sinkDown()
        return max
    }
    sinkDown(){
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null

            if(leftChild < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChild
                }
            }

            if(rightChild < length){
                rightChild = this.values[rightChildIdx]
                if(rightChild > element){
                    swap = rightChild
                }
            }
            
            if(swap === null){
                break
            }
        }

    }
}

let heap = new MaxBinaryHeap()

heap.insert(55)

heap.extractMax()

console.log(heap)

