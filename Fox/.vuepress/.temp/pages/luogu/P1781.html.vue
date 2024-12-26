<template><div><h1 id="p1781" tabindex="-1"><a class="header-anchor" href="#p1781"><span>P1781</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import java.math.BigInteger;</span>
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
<span class="line">            if (votes.compareTo(max) > 0) {</span>
<span class="line">                max = votes;</span>
<span class="line">                win = i + 1; // 记录当选者的编号（从1开始）</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(win);</span>
<span class="line">        System.out.println(max);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


