
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

