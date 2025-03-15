import{_ as s,c as i,a,o as e}from"./app-LNU7a3Gk.js";const l={};function d(t,n){return e(),i("div",null,n[0]||(n[0]=[a(`<h1 id="p2002" tabindex="-1"><a class="header-anchor" href="#p2002"><span>P2002</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import java.util.*;</span>
<span class="line"></span>
<span class="line">public class p2002 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scanner = new Scanner(System.in);</span>
<span class="line">        int N = scanner.nextInt();</span>
<span class="line">        int[] A = new int[N];</span>
<span class="line">        for (int i = 0; i &lt; N; i++) {</span>
<span class="line">            A[i] = scanner.nextInt();</span>
<span class="line">        }</span>
<span class="line">        int total = 0;</span>
<span class="line">        for (int num : A) {</span>
<span class="line">            total += num;</span>
<span class="line">        }</span>
<span class="line">        int target = total / N;</span>
<span class="line">        List&lt;int[]&gt; s = new ArrayList&lt;&gt;();</span>
<span class="line">        List&lt;int[]&gt; d = new ArrayList&lt;&gt;();</span>
<span class="line"></span>
<span class="line">        for (int i = 0; i &lt; N; i++) {</span>
<span class="line">            if (A[i] &gt; target) {</span>
<span class="line">                s.add(new int[]{i, A[i] - target});</span>
<span class="line">            } else if (A[i] &lt; target) {</span>
<span class="line">                d.add(new int[]{i, target - A[i]});</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        // 排序</span>
<span class="line">        int m = 0;</span>
<span class="line">        int da = 0, dIndex = 0;</span>
<span class="line">        while (da &lt; s.size() &amp;&amp; dIndex &lt; d.size()) {</span>
<span class="line">            int sPos = s.get(da)[0];</span>
<span class="line">            int sAmount = s.get(da)[1];</span>
<span class="line">            int dPos = d.get(dIndex)[0];</span>
<span class="line">            int dAmount = d.get(dIndex)[1];</span>
<span class="line">            int mx = Math.min(sAmount, dAmount);</span>
<span class="line">            m += mx * Math.abs(sPos - dPos);  // 移动次数</span>
<span class="line">            s.get(da)[1] -= mx;</span>
<span class="line">            d.get(dIndex)[1] -= mx;</span>
<span class="line">            if (s.get(da)[1] == 0) {</span>
<span class="line">                da++;</span>
<span class="line">            }</span>
<span class="line">            if (d.get(dIndex)[1] == 0) {</span>
<span class="line">                dIndex++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(m);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",d],["__file","P2002.html.vue"]]),r=JSON.parse('{"path":"/suanfa/P2002.html","title":"P2002","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":2,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P2002.md"}');export{p as comp,r as data};
