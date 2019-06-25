/**
 * 二叉树的序列化与反序列化
 * 二叉树:
 *          8
 *         / \
 *        6   6
 *       /\   /\
 *      5  7 7  5
 * 序列化: 8,6,5,#,#,7,#,#,6,7,#,#,5,#,#
 * 反序列化: 按规定的字符串输出二叉树
 * 思路:
 * 1.如果二叉树是一颗完全二叉树,只需知道前序遍历即可重建
 * 2.在序列化二叉树时,可以将空节点使用特殊符号存储起来,这个就可以模拟一颗完全二叉树的前序遍历
 * 3.在重建二叉树时,当遇到特殊符号当空节点进行处理
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

//序列化
function Serialize(pRoot, arr = []) {
  if (!pRoot) {
    arr.push('#');
  } else {
    arr.push(pRoot.val);
    Serialize(pRoot.left, arr);
    Serialize(pRoot.right, arr);
  }
  return arr.join(',');
}

//反序列化
function Deserialize(str) {
  if (!str) {
    return null;
  }
  return deserialize(str.split(','));
}

function deserialize (arr) {
  let node = null;
  const current = arr.shift();
  if (current !== '#') {
    node = { val: current };
    node.left = deserialize(arr);
    node.right = deserialize(arr);
  }
  return node;
}

console.log(Serialize(symmetricalTree));
console.log(Deserialize('8,6,5,#,#,7,#,#,6,7,#,#,5,#,#'));