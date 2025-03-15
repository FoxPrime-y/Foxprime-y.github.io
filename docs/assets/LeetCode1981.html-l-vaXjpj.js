import{_ as e,c as s,a,o as i}from"./app-BFrzfmyX.js";const l={};function t(d,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="leetcode1981" tabindex="-1"><a class="header-anchor" href="#leetcode1981"><span>LeetCode1981</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">给你一个大小为 m x n 的整数矩阵 mat 和一个整数 target ,从矩阵的 每一行 中选择一个整数，你的目标是 最小化 所有选中元素之 和 与目标值 target 的 绝对差 ,返回 最小的绝对差 ,a 和 b 两数字的 绝对差 是 a - b 的绝对值。</span>
<span class="line">思路:</span>
<span class="line">初始化一个集合 SetSum，用于存储当前可以选择的和的集合。一开始，这个集合里只有一个元素，即 0。</span>
<span class="line">遍历矩阵的每一行。对于每一行，创建一个新的集合 temp，用于存储这一行选择后可以达到的新和的集合。</span>
<span class="line">对于当前行的每一个数字 num，遍历当前可达到的所有和 sum，将 num 加到这些和上，并将结果存储到 temp 集合中。这样，temp 集合就包含了在选择了当前行的 num 之后可以达到的所有新的和。</span>
<span class="line">遍历完当前行后，将 SetSum 更新为 temp，以便在下一行的选择时使用。</span>
<span class="line">遍历完所有行后，SetSum 中包含了从矩阵每一行选择一个数字所能达到的所有可能的和。</span>
<span class="line">接下来，遍历 SetSum 中的所有可能和，计算每个和与 target 的绝对差，并找到其中最小的那个绝对差。</span>
<span class="line">返回这个最小的绝对差作为结果</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public int minimizeTheDifference(int[][] mat, int target) {</span>
<span class="line">        Set&lt;Integer&gt; SetSum = new HashSet&lt;&gt;();</span>
<span class="line">        SetSum.add(0);//初始值为0</span>
<span class="line">        for (int[] row : mat) {</span>
<span class="line">            Set&lt;Integer&gt; temp = new HashSet&lt;&gt;();</span>
<span class="line">            for (int num : row) {</span>
<span class="line">                for (int sum : SetSum) {</span>
<span class="line">                    temp.add(sum + num);//更新新的以可达到的和</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            SetSum = temp;//更新可以达到的集合</span>
<span class="line">        }</span>
<span class="line">        int min = Integer.MAX_VALUE;//初始化最小差值为最大值</span>
<span class="line">        for (int sum : SetSum) {</span>
<span class="line">            min = Math.min(min, Math.abs(sum - target));//计算绝对差并更新最小差值</span>
<span class="line">        }</span>
<span class="line">        return min;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=e(l,[["render",t],["__file","LeetCode1981.html.vue"]]),c=JSON.parse('{"path":"../suanfa/LeetCode1981.html","title":"LeetCode1981","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/LeetCode1981.md"}');export{r as comp,c as data};
