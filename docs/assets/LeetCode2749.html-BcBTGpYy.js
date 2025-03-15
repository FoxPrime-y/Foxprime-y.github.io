import{_ as e,c as s,a,o as i}from"./app-BFrzfmyX.js";const l={};function t(d,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="leetcode2749" tabindex="-1"><a class="header-anchor" href="#leetcode2749"><span>LeetCode2749</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">给你两个整数：num1 和 num2 。</span>
<span class="line">在一步操作中，你需要从范围 [0, 60] 中选出一个整数 i ，并从 num1 减去 2i + num2 。</span>
<span class="line">请你计算，要想使 num1 等于 0 需要执行的最少操作数，并以整数形式返回。</span>
<span class="line">如果无法使 num1 等于 0 ，返回 -1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  public int makeTheIntegerZero(int num1, int num2) {</span>
<span class="line">        int ci=0;</span>
<span class="line">        for(int i=0;i&lt;=60;i++){</span>
<span class="line">           long target = num1-1L*i*num2;</span>
<span class="line">           if (target&lt;0){</span>
<span class="line">               break;</span>
<span class="line">           }</span>
<span class="line">            int count = Long.bitCount(target);</span>
<span class="line">           if (count&lt;=i&amp;&amp;i&lt;=target){</span>
<span class="line">               return i;</span>
<span class="line">           }</span>
<span class="line">       }</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=e(l,[["render",t],["__file","LeetCode2749.html.vue"]]),m=JSON.parse('{"path":"../suanfa/LeetCode2749.html","title":"LeetCode2749","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/LeetCode2749.md"}');export{c as comp,m as data};
