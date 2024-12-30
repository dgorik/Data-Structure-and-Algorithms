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
        if (index < 0 || index > this.length) return false //in this case, we would try to insert something that is out-of-bounds of the list

        if (index == this.lenght) return !!this.push(value) //if the index is equal to the length of the list, we just need to push the value to the end of the list

        if (index == 0) return !!this.unshift(value) //if the index is 

        var previous = this.get(index - 1) //here we are getting a node that is one index before the one we are trying to insert, we will then connect this node to the one we are inserting

        var newNode = new Node(index, value) //we are creating a new node by passing a value for the node we want to insert

        var temp = previous.next //we are storing that node that currently comes after previous. We are doing that to preserve the connection after we insert a new node

        previous = newNode //we  are connecting previous node to a newly inserted node

        newNode.next = temp //we are connecting a newly inserted node to the one that we stored in temp variable( this node originally was coming after previous)

        this.length++ //we increment length by 1

        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined

        if (index == this.lenght - 1) return this.pop() //if the index is equal to the length of the list, we just need to pop the last element

        if (index == 0) return this.shift() //if the index is 0, we just need to remove the first element with a method shift

        var previousNode = this.get(index - 1); //we are getting the node that comes before the one we are trying to remove

        var removed = previousNode.next; //this is the node we are trying to remove, we assign it to variable removed and subsequently return it

        previousNode.next = previousNode.next.next; //we are connecting the node that came before the one we removed to the node that come after the node we removed, essentially erasing the node we removed from the list

        this.length--; // we are decrementing the lenght of the array by one

        return removed;

    }

    reverse() {

        var previous = null //we are originally pointing this to null because we start from the first node and the previous node doesn't exist
        var current = this.head //we are starting from the beginning of the list so current equals to the head
        var next = this.head //temp variable where we store the next node in the list

        while (current) {
            next = current.next //here we are storing the variable next to current as we are going to break that connection on the next line and need a way to come back to it later
            current.next = previous //here we are changing the next pointer of each node (=>) to the previous node (<=), so now it's pointing to the reversed list
            prev = current //here we are setting prev to the value of current, which will have the recently reversed node as well as links that come before it
            current = next //we are setting current to next which is the portion of the array that we need to continue working on
        }

        return this

        //[100, 200, 4000, 34, 58]
        //PREV  NODE NEXT

    }
}

var first = new Node("Hi")

first.next = new Node("Hi there")