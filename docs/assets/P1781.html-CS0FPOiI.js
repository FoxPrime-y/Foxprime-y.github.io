import{_ as s,c as a,a as e,o as i}from"./app-BFrzfmyX.js";const l={};function c(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="p1781" tabindex="-1"><a class="header-anchor" href="#p1781"><span>P1781</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import java.math.BigInteger;</span>
<span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class p1781 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scanner = new Scanner(System.in);</span>
<span class="line">        int n = scanner.nextInt();</span>
<span class="line">        scanner.nextLine();</span>
<span class="line">        BigInteger max = BigInteger.ZERO;</span>
<span class="line">        int win = -1;</span>
<span class="line">        // 遍历每人的票数</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            BigInteger votes = new BigInteger(scanner.nextLine().trim());</span>
<span class="line">            // 比较</span>
<span class="line">            if (votes.compareTo(max) &gt; 0) {</span>
<span class="line">                max = votes;</span>
<span class="line">                win = i + 1; // 记录当选者的编号（从1开始）</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(win);</span>
<span class="line">        System.out.println(max);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",c],["__file","P1781.html.vue"]]),d=JSON.parse('{"path":"../suanfa/P1781.html","title":"P1781","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":2,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P1781.md"}');export{p as comp,d as data};
