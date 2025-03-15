<template><div><h1 id="leetcode1980" tabindex="-1"><a class="header-anchor" href="#leetcode1980"><span>LeetCode1980</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">给你一个字符串数组 nums ，该数组由 n 个 互不相同 的二进制字符串组成，且每个字符串长度都是 n 。请你找出并返回一个长度为 n 且 没有出现 在 nums 中的二进制字符串。如果存在多种答案，只需返回 任意一个 即可。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"> public String findDifferentBinaryString(String[] nums) {</span>
<span class="line">        StringBuilder SrBu = new StringBuilder();</span>
<span class="line">        for (int i = 0; i &lt; nums.length; i++) {</span>
<span class="line">            if (nums[i].charAt(i) == '0') { // 如果当前位是 '0'，则添加 '1'；否则添加 '0'</span>
<span class="line">                SrBu.append('1');</span>
<span class="line">            } else {</span>
<span class="line">                SrBu.append('0');</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return SrBu.toString();</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


