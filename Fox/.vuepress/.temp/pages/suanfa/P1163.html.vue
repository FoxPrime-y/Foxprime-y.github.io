<template><div><h1 id="p1163" tabindex="-1"><a class="header-anchor" href="#p1163"><span>P1163</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">使用二分查找来逼近正确的月利率。在每次迭代中，计算当前中间利率下的贷款剩余情况。</span>
<span class="line">计算剩余贷款的方法是：从贷款原值开始，逐月计算剩余贷款。每月剩余贷款的计算公式为：贷款剩余 * (1 + 当前中间利率) - 每月分期付款金额。</span>
<span class="line">如果经过 m 个月后剩余贷款仍然大于 0，说明当前的中间利率偏低，需要提高利率，因此将利率的下限设置为当前中间利率加上一个很小的数（这里为 0.000001，以确保不会陷入死循环）。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"> public static void main(String[] args) {</span>
<span class="line">        Scanner sc = new Scanner(System.in);</span>
<span class="line">        double w0 = sc.nextDouble(); // 贷款的原值</span>
<span class="line">        double w = sc.nextDouble();  // 每月支付的分期付款金额</span>
<span class="line">        int m = sc.nextInt();</span>
<span class="line"></span>
<span class="line">        double low = 0.0;</span>
<span class="line">        double hig = 3.0; // 贷款的利率上限</span>
<span class="line">        double mid = 0.0;</span>
<span class="line">        while (hig - low > 0.000001) { //当高低差小于0.000001时停止</span>
<span class="line">            mid = (low + hig) / 2;// 计算当前的中间利率</span>
<span class="line">            double loan = w0;// 每月贷款剩余</span>
<span class="line">            for (int i = 0; i &lt; m; i++) {</span>
<span class="line">                loan = loan * (1 + mid) - w; // 每月计算剩余贷款</span>
<span class="line">            }</span>
<span class="line">            if (loan > 0) {// 如果剩余贷款为正，说明利率太低，需要提高</span>
<span class="line">                low = mid+0.000001; // 贷款利率上限</span>
<span class="line">            } else {</span>
<span class="line">                hig = mid-0.000001;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">//        System.out.println("贷款利率：" + String.format("%1f\n", mid) + "%");</span>
<span class="line">        System.out.printf("贷款利率：" + "%.1f\n" ,mid);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


