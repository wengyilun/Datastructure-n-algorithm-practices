class BinaryTreeNode{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }

    insertLeft(){
        this.left = new BinaryTreeNode(this.value)
        return this.left
    }

    insertRight(){
        this.right = new BinaryTreeNode(this.value)
        return this.left
    }
}   