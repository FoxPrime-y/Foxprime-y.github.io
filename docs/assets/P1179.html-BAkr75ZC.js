import{_ as s,c as a,a as i,o as e}from"./app-BFrzfmyX.js";const l={};function c(t,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="p1179" tabindex="-1"><a class="header-anchor" href="#p1179"><span>P1179</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class p1179 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner sc = new Scanner(System.in);</span>
<span class="line">        int n = sc.nextInt();</span>
<span class="line">        int m = sc.nextInt();</span>
<span class="line">        int ad=0;</span>
<span class="line">        for (int i=n;i&lt;=m;i++){</span>
<span class="line">            int a=i;</span>
<span class="line">            while(a!=0)</span>
<span class="line">            {</span>
<span class="line">                if(a%10==2)ad++;</span>
<span class="line">                a/=10;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(ad);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",c],["__file","P1179.html.vue"]]),p=JSON.parse('{"path":"../suanfa/P1179.html","title":"P1179","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":2,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P1179.md"}');export{r as comp,p as data};
