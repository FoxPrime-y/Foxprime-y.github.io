import{_ as s,c as a,a as e,o as i}from"./app-BKxR-7d5.js";const l={};function t(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="p2241" tabindex="-1"><a class="header-anchor" href="#p2241"><span>P2241</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class p2241 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner sc = new Scanner(System.in);</span>
<span class="line">        int n = sc.nextInt();</span>
<span class="line">        int m = sc.nextInt();</span>
<span class="line">        int Count = 0;</span>
<span class="line">        for (int k = 1; k &lt;= Math.min(n, m); k++) {</span>
<span class="line">            Count += (n - k + 1) * (m - k + 1);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        long zheng = (long)n * (n + 1) / 2 * (long)m * (m + 1) / 2;// 计算总矩形的数量</span>
<span class="line">        long chang = zheng - Count;// 计算长方形的数量</span>
<span class="line">        System.out.println(Count);</span>
<span class="line">        System.out.println(chang);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",t],["__file","P2241.html.vue"]]),p=JSON.parse('{"path":"/suanfa/P2241.html","title":"P2241","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":2,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P2241.md"}');export{d as comp,p as data};
