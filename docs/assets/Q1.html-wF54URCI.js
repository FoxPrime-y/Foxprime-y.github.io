import{_ as s,c as a,a as e,o as i}from"./app-BFrzfmyX.js";const l={};function t(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="力扣周赛441场q1" tabindex="-1"><a class="header-anchor" href="#力扣周赛441场q1"><span>力扣周赛441场Q1</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public static int numOfUnplacedFruits(int[] fruits, int[] baskets) {</span>
<span class="line">        boolean[] used = new boolean[baskets.length];</span>
<span class="line">        int count = 0;</span>
<span class="line">        for (int fruit : fruits) {</span>
<span class="line">            boolean found = false;</span>
<span class="line">            for (int j = 0; j &lt; baskets.length; j++) {</span>
<span class="line">                if (!used[j] &amp;&amp; baskets[j] &gt;= fruit) {</span>
<span class="line">                    used[j] = true;</span>
<span class="line">                    found = true;</span>
<span class="line">                    break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            if (!found) {</span>
<span class="line">                count++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return count;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",t],["__file","Q1.html.vue"]]),p=JSON.parse('{"path":"../suanfa/Q1.html","title":"力扣周赛441场Q1","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"suanfa/Q1.md"}');export{r as comp,p as data};
