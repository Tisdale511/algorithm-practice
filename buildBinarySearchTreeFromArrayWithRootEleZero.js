function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)

}

const createTree = (array) => {
    const root = new TreeNode(array[0])
    for(let i = 1; i < array.length; i += 1){
        addToTree(root, array[i])
    }
    return root
}

const addToTree = (currentNode, val) => {
    if(currentNode.val > val){
        if(currentNode.left === null){
            currentNode.left = new TreeNode(val)
        }else{
            addToTree(currentNode.left, val)
        }
        // value goes to the left
    }else{
        if(currentNode.right === null){
            currentNode.right = new TreeNode(val)
        }else{
            addToTree(currentNode.right, val) 
            //value goes to the right
        }
    }
}
 
let testInput = [26, 3, 9, 20, 15, 7, 82, 36, 12, 23, 56675, -17]

console.dir(createTree(testInput), {depth: null})