<template><div><h1 id="p1036" tabindex="-1"><a class="header-anchor" href="#p1036"><span>P1036</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import java.util.ArrayList;</span>
<span class="line">import java.util.List;</span>
<span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class P1036 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner sc=new Scanner(System.in);</span>
<span class="line">        int n=sc.nextInt();</span>
<span class="line">        int k=sc.nextInt();</span>
<span class="line">        int[] sum=new int[n];</span>
<span class="line">        if(k&lt;n){</span>
<span class="line">           for(int i=0;i&lt;n;i++){</span>
<span class="line">               sum[i]=sc.nextInt();</span>
<span class="line">           }</span>
<span class="line">            List&lt;List&lt;Integer>> list= new ArrayList&lt;>();</span>
<span class="line">//            List&lt;Integer> list=new ArrayList&lt;>();</span>
<span class="line">            combination(sum,k,0,list, new ArrayList&lt;>());</span>
<span class="line">           int p=0;</span>
<span class="line">            for (List&lt;Integer> ll : list) {</span>
<span class="line">                int sum1 = ll.stream().mapToInt(Integer::intValue).sum();</span>
<span class="line">                if (isPrime(sum1)) {</span>
<span class="line">                    p++;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            System.out.println(p);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    private static void combination(int[] sum, int k, int l, List&lt;List&lt;Integer>> list, List&lt;Integer> uu){</span>
<span class="line">        if (uu.size() == k) {</span>
<span class="line">            list.add(new ArrayList&lt;>(uu));</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line">        for (int i = l; i &lt; sum.length; i++) {</span>
<span class="line">            uu.add(sum[i]);</span>
<span class="line">            combination(sum, k, i + 1, list, uu);</span>
<span class="line">            uu.remove(uu.size() - 1);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public static boolean isPrime(int sum1){</span>
<span class="line">        for(int i = 2; i&lt;= Math.sqrt(sum1); i++){</span>
<span class="line">            if(sum1%i==0){</span>
<span class="line">                return false;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


