import{_ as n,c as e,b as a,o as i}from"./app-pItqPAQX.js";const l={};function t(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<table><thead><tr><th style="text-align:center;">P1026</th></tr></thead></table><div class="language-P1026 line-numbers-mode" data-highlighter="prismjs" data-ext="P1026" data-title="P1026"><pre><code><span class="line">public class p1026 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scanner = new Scanner(System.in);</span>
<span class="line">        int k = scanner.nextInt();</span>
<span class="line">        int N = scanner.nextInt();</span>
<span class="line">        scanner.close();</span>
<span class="line">        List&lt;Integer&gt; pow = new ArrayList&lt;&gt;();</span>
<span class="line">        int power = 1;</span>
<span class="line">        for (int i = 0; i &lt;= 15; i++) {</span>
<span class="line">            pow.add(power);</span>
<span class="line">            power *= k;</span>
<span class="line">        }</span>
<span class="line">        // 使用集合来存储所有可能的和值</span>
<span class="line">        Set&lt;Integer&gt; sums = new HashSet&lt;&gt;();</span>
<span class="line">        int m = pow.size();</span>
<span class="line">        // 生成所有可能的组合和</span>
<span class="line">        for (int mask = 0; mask &lt; (1 &lt;&lt; m); mask++) {</span>
<span class="line">            int sumss = 0;</span>
<span class="line">            for (int j = 0; j &lt; m; j++) {</span>
<span class="line">                if ((mask &amp; (1 &lt;&lt; j)) != 0) {</span>
<span class="line">                    sumss += pow.get(j);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            sums.add(sumss);</span>
<span class="line">        }</span>
<span class="line">        List&lt;Integer&gt; sortedSums = new ArrayList&lt;&gt;(sums);</span>
<span class="line">        Collections.sort(sortedSums);</span>
<span class="line">        System.out.println(sortedSums.get(N));</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(l,[["render",t],["__file","P1026.html.vue"]]),p=JSON.parse('{"path":"/luogu/P1026.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"luogu/P1026.md"}');export{r as comp,p as data};