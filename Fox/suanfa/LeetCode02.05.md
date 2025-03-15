# LeetCode02.05
``` 面试题02.05
给定两个用链表表示的整数，每个节点包含一个数位。
这些数位是反向存放的，也就是个位排在链表首部。
编写函数对这两个整数求和，并用链表形式返回结果。
```
```
 public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode ln = new ListNode();
        ListNode prt=ln; int sum = 0;
        while (l1 != null || l2 != null|| prt != null);{
            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next;
            }
            prt.next = new ListNode(sum);
            prt = prt.next;
            sum = sum/10;
        }
        return ln.next;
    }
```