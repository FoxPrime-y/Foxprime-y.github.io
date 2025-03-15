import{_ as s,c as a,a as i,o as e}from"./app-BFrzfmyX.js";const l={};function c(t,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="p1881" tabindex="-1"><a class="header-anchor" href="#p1881"><span>P1881</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import java.util.HashSet;</span>
<span class="line">import java.util.Scanner;</span>
<span class="line">import java.util.Set;</span>
<span class="line"></span>
<span class="line">public class p1881 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scanner = new Scanner(System.in);</span>
<span class="line">        int N = scanner.nextInt();</span>
<span class="line">        int L = scanner.nextInt();</span>
<span class="line">        // 结的位置</span>
<span class="line">        Set&lt;Integer&gt; o = new HashSet&lt;&gt;();</span>
<span class="line">        for (int i = 0; i &lt; N; i++) {</span>
<span class="line">            o.add(scanner.nextInt());</span>
<span class="line">        }</span>
<span class="line">        int count = 0;</span>
<span class="line">        for (int x : o) {</span>
<span class="line">            // 计算折叠点</span>
<span class="line">            int f1 = x;         // 以x为折叠点</span>
<span class="line">            int f2 = L - x;     // 以L - x为折叠点</span>
<span class="line">            // 检查每个折叠点的重合条件</span>
<span class="line">            if (o.contains(f1) &amp;&amp; o.contains(f2)) {</span>
<span class="line">                count++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(count);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",c],["__file","P1881.html.vue"]]),r=JSON.parse('{"path":"../suanfa/P1881.html","title":"P1881","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":2,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P1881.md"}');export{p as comp,r as data};
