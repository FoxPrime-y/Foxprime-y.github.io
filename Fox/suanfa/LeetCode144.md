# LeetCode144
```
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
```

```
public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<Integer>();
        pro(root, list);
        return list;
    }

    public  void pro(TreeNode root,List<Integer> list){
        if (root == null){
            return;
        }
        list.add(root.val);
        pro(root.left,list);
        pro(root.right,list);
    }
```