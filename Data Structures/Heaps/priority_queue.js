class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    enqueue(val){
        let newNode = new Node(val, priority)
        this.values.push(newNode)

        var bubbleup = () => {
            let idx = this.values.length - 1
            const element = this.values[this.values.length - 1]
            while(idx > 0){
                let parentIdx = Math.floor((idx - 1)/2)
                let parent = this.values[parentIdx]
                if(element.priority > parent.priority){
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

    dequeue(){
        const max = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end
            this.sinkDown()
        }
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
                if(leftChild.priority > element.priority){
                    swap = leftChild
                }
            }
    
            if(rightChild.pr < length){
                rightChild = this.values[rightChildIdx]
                if((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority> leftChild.priority)){
                    swap = rightChildIdx
                }
            }
            
            if(swap === null){
                break
            }
            this.values[idx] = this.values[swap]
            this.values[swap] = element
        }
    
    }
}

class Node {
    constructor(){
        this.val = val
        this.priority = priority
    }
}

