import{_ as s,c as a,a as i,o as e}from"./app-LNU7a3Gk.js";const l={};function d(c,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="力扣周赛441场q3" tabindex="-1"><a class="header-anchor" href="#力扣周赛441场q3"><span>力扣周赛441场Q3</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  public int all(int[] fruits, int[] baskets) {</span>
<span class="line">        // 创建一个布尔数组来记录篮子是否已使用</span>
<span class="line">        boolean[] da = new boolean[baskets.length];</span>
<span class="line">        int unfd = 0;</span>
<span class="line"></span>
<span class="line">        // 记录每种水果放置后的篮子使用情况</span>
<span class="line">        boolean[][] basketUsage = new boolean[fruits.length][baskets.length];</span>
<span class="line"></span>
<span class="line">        // 遍历每个水果</span>
<span class="line">        for (int j = 0; j &lt; fruits.length; j++) {</span>
<span class="line">            int fruit = fruits[j];</span>
<span class="line">            boolean placed = false;</span>
<span class="line">            // 遍历每个篮子（保持原始顺序）</span>
<span class="line">            for (int i = 0; i &lt; baskets.length; i++) {</span>
<span class="line">                int basket = baskets[i];</span>
<span class="line">                // 找到未使用的篮子且其容量不小于水果大小</span>
<span class="line">                if (basket &gt;= fruit &amp;&amp; !da[i]) {</span>
<span class="line">                    da[i] = true; // 标记篮子已使用</span>
<span class="line">                    basketUsage[j][i] = true; // 记录水果放置情况</span>
<span class="line">                    placed = true;</span>
<span class="line">                    break; // 找到合适的篮子后退出内层循环</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            // 如果水果未放入任何篮子，则计数未放入的水果</span>
<span class="line">            if (!placed) {</span>
<span class="line">                unfd++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 输出调试信息（可选）</span>
<span class="line">        for (int j = 0; j &lt; fruits.length; j++) {</span>
<span class="line">            System.out.println(&quot;Fruit &quot; + fruits[j] + &quot;: &quot; + Arrays.toString(basketUsage[j]));</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 返回未放入任何篮子的水果数量</span>
<span class="line">        return unfd;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",d],["__file","Q3.html.vue"]]),r=JSON.parse('{"path":"/suanfa/Q3.html","title":"力扣周赛441场Q3","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742035291000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/Q3.md"}');export{p as comp,r as data};
