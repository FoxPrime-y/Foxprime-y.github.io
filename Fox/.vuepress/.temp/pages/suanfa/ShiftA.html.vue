<template><div><h1 id="第15届蓝桥杯a题" tabindex="-1"><a class="header-anchor" href="#第15届蓝桥杯a题"><span>第15届蓝桥杯A题</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"> public static void main(String[] args) {</span>
<span class="line">        long a=7385137888721L;</span>
<span class="line">        long b=10470245;</span>
<span class="line"></span>
<span class="line">        long lift=1;</span>
<span class="line">        long right=(long)Math.sqrt(a*4+b);</span>
<span class="line">        while(lift&lt;right){</span>
<span class="line">            long mid =(lift+right+1)/2;</span>
<span class="line">            long x=mid*mid;</span>
<span class="line">            long y=Math.min(b,x/4);</span>
<span class="line">            long r=x-a*4;</span>
<span class="line">            if (r&lt;b){</span>
<span class="line">                lift=mid;</span>
<span class="line">            }else if (r==b){</span>
<span class="line">                System.out.println(lift);</span>
<span class="line">                break;</span>
<span class="line">            }else {</span>
<span class="line">                lift=mid-1;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(lift);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


