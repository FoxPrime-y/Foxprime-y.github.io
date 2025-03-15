import{_ as s,c as e,a,o as i}from"./app-FYnelbtM.js";const l={};function t(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="leetcode1855" tabindex="-1"><a class="header-anchor" href="#leetcode1855"><span>LeetCode1855</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">给你两个 非递增 的整数数组 nums1​​​​​​ 和 nums2​​​​​​ ，数组下标均 从 0 开始 计数。</span>
<span class="line">下标对 (i, j) 中 0 &lt;= i &lt; nums1.length 且 0 &lt;= j &lt; nums2.length 。如果该下标对同时满足 i &lt;= j 且 nums1[i] &lt;= nums2[j] ，则称之为 有效 下标对，该下标对的 距离 为 j - i​​ 。​​</span>
<span class="line">返回所有 有效 下标对 (i, j) 中的 最大距离 。如果不存在有效下标对，返回 0 。</span>
<span class="line">一个数组 arr ，如果每个 1 &lt;= i &lt; arr.length 均有 arr[i-1] &gt;= arr[i] 成立，那么该数组是一个 非递增 数组。</span>
<span class="line">思路:</span>
<span class="line">先对nums1进行排序，然后遍历nums2，找到第一个大于等于nums2[j]的元素nums1[i]，</span>
<span class="line">然后更新maxDistance，并将i--，继续遍历nums2，直到遍历完nums2。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public static int maxDistance(int[] nums1, int[] nums2) {</span>
<span class="line">        int maxDistance = 0;</span>
<span class="line">        // 初始化两个指针，分别指向nums1和nums2的末尾</span>
<span class="line">        int i = nums1.length - 1;</span>
<span class="line">        int j = nums2.length - 1;</span>
<span class="line">        // 使用双指针法遍历两个数组</span>
<span class="line">        while (i &gt;= 0 &amp;&amp; j &gt;= 0) {</span>
<span class="line">            if (nums1[i] &lt;= nums2[j] &amp;&amp; i &lt;= j) {// 如果nums1[i] &lt;= nums2[j]且i &lt;= j，更新最大距离，并移动i指针</span>
<span class="line">                maxDistance = Math.max(maxDistance, j - i);</span>
<span class="line">                i--;</span>
<span class="line">            } else { // 否则，移动j指针</span>
<span class="line">                j--;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return maxDistance;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const m=s(l,[["render",t],["__file","LeetCode1855.html.vue"]]),r=JSON.parse('{"path":"/suanfa/LeetCode1855.html","title":"LeetCode1855","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"suanfa/LeetCode1855.md"}');export{m as comp,r as data};
