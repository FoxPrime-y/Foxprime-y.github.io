import{_ as s,c as e,a,o as i}from"./app-BFrzfmyX.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="p1138" tabindex="-1"><a class="header-anchor" href="#p1138"><span>P1138</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import java.util.*;</span>
<span class="line"></span>
<span class="line">public class p1138 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scanner = new Scanner(System.in);</span>
<span class="line">        int n = scanner.nextInt();</span>
<span class="line">        int k = scanner.nextInt();</span>
<span class="line">        Set&lt;Integer&gt; numbers = new HashSet&lt;&gt;();</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            numbers.add(scanner.nextInt());</span>
<span class="line">        }</span>
<span class="line">        List&lt;Integer&gt; min = new ArrayList&lt;&gt;(numbers);</span>
<span class="line">        Collections.sort(min);</span>
<span class="line">        if (k &lt;= min.size()) {</span>
<span class="line">            System.out.println(min.get(k - 1));</span>
<span class="line">        } else {</span>
<span class="line">            System.out.println(&quot;NO RESULT&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        scanner.close();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",t],["__file","P1138.html.vue"]]),p=JSON.parse('{"path":"../suanfa/P1138.html","title":"P1138","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":2,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P1138.md"}');export{d as comp,p as data};
