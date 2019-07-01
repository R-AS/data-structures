/**
 * 二叉树遍历
 * 二叉树:
 *          8
 *         / \
 *        6   6
 *       /\   /\
 *      5  7 7  5
 * 中序遍历: [5, 6, 7, 8, 7, 6, 5]
 * 先序遍历: [8, 6, 5, 7, 6,, 7, 5]
 * 后序遍历: [5, 7, 6, 7, 5, 6, 8]
 */

//对称二叉树
const binaryTree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null }
  },
  right: {
    val: 6,
    left: { val: 7, left: null, right: null },
    right: { val: 5, left: null, right: null }
  }
}

//中序遍历
var inorderTraversal = function(root, array=[]) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
}

//前序遍历
var preorderTraversal = function(root, array=[]) {
  if (root) {
    array.push(root.val);
    preorderTraversal(root.left, array);
    preorderTraversal(root.right, array);
  }
  return array;
}

//后序遍历
var postorderTraversal = function(root, array=[]) {
  if (root) {
    postorderTraversal(root.left, array);
    postorderTraversal(root.right, array);
    array.push(root.val);
  }
  return array;
}

console.log('中序遍历 ->', inorderTraversal(binaryTree));
console.log('先序遍历 ->', preorderTraversal(binaryTree));
console.log('后序遍历 ->', postorderTraversal(binaryTree));