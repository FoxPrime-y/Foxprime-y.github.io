import{_ as s,c as e,a as l,o as a}from"./app-BKxR-7d5.js";const i={};function d(t,n){return a(),e("div",null,n[0]||(n[0]=[l(`<h1 id="leetcode02-05" tabindex="-1"><a class="header-anchor" href="#leetcode02-05"><span>LeetCode02.05</span></a></h1><div class="language-面试题02.05 line-numbers-mode" data-highlighter="prismjs" data-ext="面试题02.05" data-title="面试题02.05"><pre><code><span class="line">给定两个用链表表示的整数，每个节点包含一个数位。</span>
<span class="line">这些数位是反向存放的，也就是个位排在链表首部。</span>
<span class="line">编写函数对这两个整数求和，并用链表形式返回结果。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public ListNode addTwoNumbers(ListNode l1, ListNode l2) {</span>
<span class="line">        ListNode ln = new ListNode();</span>
<span class="line">        ListNode prt=ln; int sum = 0;</span>
<span class="line">        while (l1 != null || l2 != null|| prt != null);{</span>
<span class="line">            if (l1 != null) {</span>
<span class="line">                sum += l1.val;</span>
<span class="line">                l1 = l1.next;</span>
<span class="line">            }</span>
<span class="line">            if (l2 != null) {</span>
<span class="line">                sum += l2.val;</span>
<span class="line">                l2 = l2.next;</span>
<span class="line">            }</span>
<span class="line">            prt.next = new ListNode(sum);</span>
<span class="line">            prt = prt.next;</span>
<span class="line">            sum = sum/10;</span>
<span class="line">        }</span>
<span class="line">        return ln.next;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=s(i,[["render",d],["__file","LeetCode02.05.html.vue"]]),p=JSON.parse('{"path":"/suanfa/LeetCode02.05.html","title":"LeetCode02.05","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/LeetCode02.05.md"}');export{c as comp,p as data};
