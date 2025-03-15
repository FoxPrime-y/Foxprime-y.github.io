import { _ as s, c as e, a, o as i } from "./app-FYnelbtM.js"; const l = {}; function d(c, n) {
    return i(), e("div", null, n[0] || (n[0] = [a(`<h1 id="leetcode128" tabindex="-1"><a class="header-anchor" href="#leetcode128"><span>LeetCode128</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这道题的核心思路是利用哈希集合（HashSet）来实现O(n)的时间复杂度算法，以找出给定数组中数字连续的最长序列的长度。</span>
<span class="line">首先检查输入的数组是否为空或长度为0，如果是，则直接返回0，因为没有数字就没有连续序列。</span>
<span class="line">将所有数组中的数字加入一个HashSet中。这样做的目的是为了能够在O(1)的时间复杂度内检查某个数字是否存在。</span>
<span class="line">遍历数组中的每一个数字num，检查num-1是否不在集合中。如果num-1不存在，这说明num可能是某个连续序列的起点。这是因为连续序列中的每个数字k都满足k-1和k+1至少有一个在序列中，而num-1不在集合中，表明num是一个起点。</span>
<span class="line">对于每一个可能的起点num，从num开始，依次检查num+1、num+2...是否存在于集合中。如果存在，继续检查，直到找不到为止。在这个过程中，计算出以num为起点的连续序列的长度。</span>
<span class="line">在计算出每个可能的连续序列的长度后，更新最长的连续序列长度。</span>
<span class="line">返回结果：最后返回最长连续序列的长度。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  public int longestConsecutive(int[] nums) {</span>
<span class="line">        if (nums == null || nums.length == 0) {</span>
<span class="line">            return 0;</span>
<span class="line">        }</span>
<span class="line">//        if (nums.length == 1) {</span>
<span class="line">//            return 1;</span>
<span class="line">//        }</span>
<span class="line">        Set&lt;Integer&gt; set = new HashSet&lt;&gt;();</span>
<span class="line">        for (int num : nums) {</span>
<span class="line">            set.add(num);</span>
<span class="line">        }</span>
<span class="line">        int dks=0;</span>
<span class="line">        for (int num : nums) {</span>
<span class="line">            //检查当前数字是否连续序列的起点</span>
<span class="line">            if (!set.contains(num-1)) {</span>
<span class="line">                int k=num;</span>
<span class="line">                int current=1;</span>
<span class="line">                //找到以当前数字为起点的最长连续序列</span>
<span class="line">                while (set.contains(k+1)){</span>
<span class="line">                    k++;</span>
<span class="line">                    current++;</span>
<span class="line">                }</span>
<span class="line">                //更新最长连续序列的长度</span>
<span class="line">                dks=Math.max(dks,current);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return  dks;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, 3)]))
} const r = s(l, [["render", d], ["__file", "LeetCode128.html.vue"]]), p = JSON.parse('{"path":"/suanfa/LeetCode128.html","title":"LeetCode128","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"suanfa/LeetCode128.md"}'); export { r as comp, p as data };
