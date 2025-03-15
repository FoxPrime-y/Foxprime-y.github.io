<template><div><h1 id="p1138" tabindex="-1"><a class="header-anchor" href="#p1138"><span>P1138</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import java.util.*;</span>
<span class="line"></span>
<span class="line">public class p1138 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scanner = new Scanner(System.in);</span>
<span class="line">        int n = scanner.nextInt();</span>
<span class="line">        int k = scanner.nextInt();</span>
<span class="line">        Set&lt;Integer> numbers = new HashSet&lt;>();</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            numbers.add(scanner.nextInt());</span>
<span class="line">        }</span>
<span class="line">        List&lt;Integer> min = new ArrayList&lt;>(numbers);</span>
<span class="line">        Collections.sort(min);</span>
<span class="line">        if (k &lt;= min.size()) {</span>
<span class="line">            System.out.println(min.get(k - 1));</span>
<span class="line">        } else {</span>
<span class="line">            System.out.println("NO RESULT");</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        scanner.close();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


