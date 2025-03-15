# LeetCode148
```
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
```

```
 public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode pre = head;//指向已有序的节点
        ListNode cur = head.next;//指向待排序的节点
        ListNode aux = new ListNode(0);//辅助节点
        aux.next = head;// 将辅助节点的下一个节点设为头节点
        while (cur != null) {
            if (cur.val < pre.val) {//先把cur节点从链表中删除,然后再把cur节点插入到合适位置
                pre.next = cur.next;
                ListNode l1 = aux;
                ListNode l2 = aux.next;
                while (cur.val > l2.val) {
                    l1 = l2;
                    l2 = l2.next;
                }
                l1.next = cur;
                cur.next = l2;
                cur = pre.next;
            } else {
                pre = cur;
                cur = cur.next;
            }
        }
        return aux.next;
    }
```