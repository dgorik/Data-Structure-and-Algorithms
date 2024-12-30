class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev  = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length ++
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        var popped = this.tail
        if(this.length == 1){
            this.head = null
            this.tail = null
        }
        else{
            this.tail = this.tail.prev
            this.tail.next = null
            popped.prev = null
        }
        this.length --
        return popped  
    }
    shift(){
        if(!this.head){
            return undefined
        }
        var old_head = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = this.head.next
            this.head.prev = null
            old_head.next = null
        }
        this.length --
        return old_head
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index <= this.length / 2){
            var count = 0
            var current = this.head
            while( count != index){
                current = current.next
                count++
            }
        }
        else{
            var count = this.length - 1
            var current = this.tail
            while( count != index){
                current = current.prev
                count--
            }
        }
        return current
    }

    set(index, value){
        var foundNode = this.get(index)
        if(foundNode){
            foundNode.val = value
            return true
        }
        return false
    }
    insert(index, value){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index === 0){
            return this.unshift(value)
        }
        if(index === this.length - 1){
            return this.push(value)
        }
        else{
            var newNode = new Node(val)
            var beforeNode = this.get(index - 1)
            var afterNode = this.get(index) //or beforeNode.next
            beforeNode.next = newNode
            newNode.prev = beforeNode
            newNode.next = afterNode
            afterNode.prev = newNode
            this.length++
        }
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index === 0){
            return this.shift()
        }
        if(index === this.length - 1){
            return this.pop()
        }
        else{
            var NodeToremove = this.get(index)
            var afterNode =  NodeToremove.next
            var beforeNode =  NodeToremove.prev
            beforeNode.next = afterNode
            afterNode.prev = beforeNode
            NodeToremove.next = null
            NodeToremove.prev = null
            this.length --
            return NodeToremove

        }
    }

    
}

var list = new DoublyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.unshift(40)
list.unshift(50)
list.set(5,1234)
list.set(3,555555)
console.log(list.remove(3))
console.log(list.get(3))
