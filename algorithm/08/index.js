/**
 * 判断对称二叉树
 * 对称二叉树:
 *             8
 *            / \
 *           6   6
 *          /\   /\
 *         5  7 7  5
 * 思路:
 * 1.根结点相等
 * 2.左子树的右节点和右子树的左节点相同
 * 3.右子树的左节点和左子树的右节点相同
 */

//对称二叉树
const symmetricalTree = {
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

//非对称二叉树
const binaryTree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null }
  },
  right: {
    val: 9,
    left: { val: 7, left: null, right: null },
    right: { val: 5, left: null, right: null }
  }
}

function isSymmetrical(pRoot) {
  return isSymmetricalTree(pRoot, pRoot);
}

function isSymmetricalTree(node1, node2) {
  //判断两个节点都是否为空
  if (!node1 && !node2) {
    return true;
  }
  //判断两个节点是否存在一个为空
  if (!node1 || !node2) {
    return false;
  }
  //判断两个节点是否相同
  if (node1.val != node2.val) {
    return false;
  }
  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left);
}

console.log(isSymmetrical(symmetricalTree));
console.log(isSymmetrical(binaryTree));
