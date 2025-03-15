import{_ as s,c as e,a,o as i}from"./app-BKxR-7d5.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="leetcode148" tabindex="-1"><a class="header-anchor" href="#leetcode148"><span>LeetCode148</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public class ListNode {</span>
<span class="line">        int val;</span>
<span class="line">        ListNode next;</span>
<span class="line"></span>
<span class="line">        ListNode() {</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        ListNode(int val) {</span>
<span class="line">            this.val = val;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        ListNode(int val, ListNode next) {</span>
<span class="line">            this.val = val;</span>
<span class="line">            this.next = next;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public ListNode sortList(ListNode head) {</span>
<span class="line">        if (head == null || head.next == null) {</span>
<span class="line">            return head;</span>
<span class="line">        }</span>
<span class="line">        ListNode pre = head;//指向已有序的节点</span>
<span class="line">        ListNode cur = head.next;//指向待排序的节点</span>
<span class="line">        ListNode aux = new ListNode(0);//辅助节点</span>
<span class="line">        aux.next = head;// 将辅助节点的下一个节点设为头节点</span>
<span class="line">        while (cur != null) {</span>
<span class="line">            if (cur.val &lt; pre.val) {//先把cur节点从链表中删除,然后再把cur节点插入到合适位置</span>
<span class="line">                pre.next = cur.next;</span>
<span class="line">                ListNode l1 = aux;</span>
<span class="line">                ListNode l2 = aux.next;</span>
<span class="line">                while (cur.val &gt; l2.val) {</span>
<span class="line">                    l1 = l2;</span>
<span class="line">                    l2 = l2.next;</span>
<span class="line">                }</span>
<span class="line">                l1.next = cur;</span>
<span class="line">                cur.next = l2;</span>
<span class="line">                cur = pre.next;</span>
<span class="line">            } else {</span>
<span class="line">                pre = cur;</span>
<span class="line">                cur = cur.next;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return aux.next;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const p=s(l,[["render",d],["__file","LeetCode148.html.vue"]]),r=JSON.parse('{"path":"/suanfa/LeetCode148.html","title":"LeetCode148","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/LeetCode148.md"}');export{p as comp,r as data};
