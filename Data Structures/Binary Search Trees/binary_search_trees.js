class Node {  //here we are defining a class for Node that will create an instance for each new node
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val){
        var node = new Node(val)
        if(this.root === null){
            this.root = node
            return this
        }
        var current = this.root
        while(true){
            if(val === current.val) return undefined
            if(val < current.val){
                if(current.left === null){
                    current.left = node
                    return this
                }
                current = current.left
        
            }
            else {
                if(current.right === null){
                    current.right = node
                    return this
                }
                else{
                    current = current.right
                }
            }
        }
    }

    find(val){
        if(this.root === null) return false

        var current = this.root
        var found = false

        while(current && !found ){
            if(value < current.value){
                current = current.left
            }
            else if(value > current.value){
                current = current.right
            }
            else{
                found = true
            }
        }
        if(!found){
            return undefined
        }
        return current
    }

    BFS(){
        var data = []
        var queue = []
        var node = this.root
        queue.push(node)

        while(queue.length != 0){
            node = queue.shift()
            data.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return data
    }

    DFSPreOrder(){
        var nodes_visited = []
        var current = this.root

        function helper(node){
            nodes_visited.push(node.val)
            if(node.left != null){
                helper(node.left)

            }
            if( node.right != null){
                helper(node.right)
            }
        }

        helper(current)

        return nodes_visited
    }

    DFSPostOrder(){
        var nodes_visited = []
        var current = this.root

        function helper(node){
            if(node.left != null){
                helper(node.left)

            }
            if( node.right != null){
                helper(node.right)
            }
            nodes_visited.push(node.val)
        }

        helper(current)

        return nodes_visited
    }

    DFSInOrder(){
        var nodes_visited = []
        var current = this.root

        function helper(node){
            if(node.left != null){
                helper(node.left)

            }
            nodes_visited.push(node.val)

            if( node.right != null){
                helper(node.right)
            }
        }

        helper(current)

        return nodes_visited
    }
}

var tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

tree.BFS()
tree.DFSPreOrder()
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
console.log(tree)

