import{_ as s,c as e,a,o as i}from"./app-LNU7a3Gk.js";const l={};function t(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="leetcode2023" tabindex="-1"><a class="header-anchor" href="#leetcode2023"><span>LeetCode2023</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">给你一个 数字 字符串数组 nums 和一个 数字 字符串 target ，请你返回 nums[i] + nums[j] （两个字符串连接）结果等于 target 的下标 (i, j) （需满足 i != j）的数目。</span>
<span class="line">思路:</span>
<span class="line">首先，使用一个 HashMap 来记录数组 nums 中每个字符串出现的次数。这样可以在后续查找时快速判断某个字符串是否存在以及存在多少次。</span>
<span class="line">然后，遍历数组 nums 中的每一个字符串 num，检查 num 是否是目标字符串 target 的前缀。</span>
<span class="line">如果 num 是 target 的前缀，则计算 target 剩余的后缀部分 temp，即 target 去掉 num 后剩下的部分。</span>
<span class="line">检查后缀部分 temp 是否存在于 HashMap 中。如果存在，说明找到了一个可能的配对。</span>
<span class="line">如果找到了配对，增加计数。需要注意的是，如果 num 和 temp 是同一个字符串（即 target 可以由两个相同的字符串组成），则需要减去一次自身配对情况，因为题目要求 i != j。</span>
<span class="line">最后，返回满足条件的配对数目 count。</span>
<span class="line">以下代码时间复杂度主要取决于数组 nums 的长度 n 以及目标字符串 target 的长度 m，总体复杂度为 O(n * m)，因为对于每个字符串 num，可能需要检查 target 的每个子串。空间复杂度为 O(n)，因为我们使用了一个 HashMap 来存储数组中每个字符串的出现次数。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public int numOfPairs(String[] nums, String target) {</span>
<span class="line">        Map&lt;String, Integer&gt; map = new HashMap&lt;String, Integer&gt;();</span>
<span class="line">        for (String num : nums) {</span>
<span class="line">            map.put(num, map.getOrDefault(num, 0) + 1);//记录每个数字出现的次数</span>
<span class="line">        }</span>
<span class="line">        int count = 0;</span>
<span class="line">        for (String num : nums) {</span>
<span class="line">            if (target.startsWith(num)) {// 检查当前字符串是否是目标字符串的前缀</span>
<span class="line">                int ide = target.length() - num.length();</span>
<span class="line">                String temp = target.substring(num.length());// 获取剩余部分</span>
<span class="line">                if (map.containsKey(temp)) { // 检查剩余部分是否在哈希表中</span>
<span class="line">                    count += map.get(temp);//增加计数</span>
<span class="line">                    if (num.equals(temp)) {// 如果当前字符串和剩余部分相同，则减少自身配对情况</span>
<span class="line">                        count--;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return count;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=s(l,[["render",t],["__file","LeetCode2023.html.vue"]]),m=JSON.parse('{"path":"/suanfa/LeetCode2023.html","title":"LeetCode2023","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/LeetCode2023.md"}');export{c as comp,m as data};
