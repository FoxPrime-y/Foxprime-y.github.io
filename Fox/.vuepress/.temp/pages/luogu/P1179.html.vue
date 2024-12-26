<template><div><h1 id="p1179" tabindex="-1"><a class="header-anchor" href="#p1179"><span>P1179</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import java.util.Scanner;</span>
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
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


