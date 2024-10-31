// piece of data - val

//reference to the next node - next

class Node {  //here we are defining a class for Node that will create an instance for each new node
    constructor(val) {
        this.val = val
        this.node = node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        var newNode = new Node(val) //we are creating an instance of a new node

        if (!this.head) { //if the list is empty, we are assiging our node to the head of the list and also making the tail of the list to be its head (since there is only one node in the list now)
            this.head = newNode
            this.tail = newNode  //tail and head are pointing to the same object 
        }

        else {
            this.tail.next = newNode //here we are taking a current tail of the list and setting .next (node that we are inserting) to be our new Node
            this.tail = newNode //here we are updating the tail of the list to point to a newly created node
        }

        return this.length++


    }

    pop() {
        if (!this.head) return undefined //we can also use length == 0 ? to check if there is something in the list

        let current = this.head
        let newtail = this.head

        while (current.next != null) { //or !current.next
            newtail = current //newtail will point to the second to the last node before we exit the loop
            current = current.next
        }

        this.tail.next = null //we are assigning newtail to null and essentially removing the last node
        this.tail = newtail //since we removed the last node, we now need to update the tail of the list to point to the node that was second to the last
        this.length--
        if (this.length === 0) {//if after popping off the last item in the list, the list is empty now (meaning there are no items in the list), we set head and tail to be equal null
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift() {
        if (!this.head) return undefined //if there are no nodes, return undefined

        let removedHead = this.head //we are saving the current head of the list in order to return it later

        this.head = head.next

        this.length--

        if (this.length === 0) {//if after popping off the last item in the list, the list is empty now (meaning there are no items in the list), we set head and tail to be equal null
            this.tail = null;
        }

        return removedHead

    }

    unnshift() {
        var newNode = new Node(val) //we are creating an instance of a new node

        if (!this.head) { //if the list is empty, we are assiging our node to the head of the list and also making the tail of the list to be its head (since there is only one node in the list now)
            this.head = newNode
            this.tail = newNode  //tail and head are pointing to the same object 
        }

        else {
            newNode.next = this.head // we are pointing the new created node at the current head of the list
            this.head = newNode //we then update the head of the list to be our newly inserted node
        }

        this.length++

        return this; //we are returning an updated list


    }

    get(index) {
        if (index < 0 || index >= this.length) return null //here we are checking if the index that was passed is valid. If it's not, we return null

        var counter = 0 //we define a variable counter and set it to 0, we will then use this variable to stop traversing through the list once we reach the index

        var current = this.head //this is the current element of the list that we will then return

        while (counter !== index) {
            current = current.next //we are looping through the list
            counter++
        }

        return current
    }

    set(index, value) {
        var foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = value
            return true
        }

        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false

        if (index == this.lenght) return !!this.push(value)

        if (index == 0) return !!this.unshift(value)

        var previous = this.get(index - 1)

        var newNode = new Node(index, value)

        var temp = previous.next

        previous = newNode

        newNode.next = temp

        this.length++

        return true
    }
}

var first = new Node("Hi")

first.next = new Node("Hi there")