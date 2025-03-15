<template><div><h1 id="力扣周赛441场q2" tabindex="-1"><a class="header-anchor" href="#力扣周赛441场q2"><span>力扣周赛441场Q2</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"> public long[] findMaxSum(int[] nums1, int[] nums2, int k) {</span>
<span class="line">        int n = nums1.length;</span>
<span class="line">        long[] answer = new long[n];</span>
<span class="line">        List&lt;int[]> num1 = new ArrayList&lt;>();</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            num1.add(new int[]{nums1[i], i});</span>
<span class="line">        }</span>
<span class="line">        num1.sort(Comparator.comparingInt(a -> a[0]));</span>
<span class="line"></span>
<span class="line">        PriorityQueue&lt;Integer> maxHeap = new PriorityQueue&lt;>(Collections.reverseOrder());</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            int[] current = num1.get(i);</span>
<span class="line">            int currentIndex = current[1];</span>
<span class="line">            int currentSum = 0;</span>
<span class="line">            List&lt;Integer> temp = new ArrayList&lt;>(maxHeap);</span>
<span class="line">            temp.sort(Collections.reverseOrder());</span>
<span class="line">            for (int j = 0; j &lt; Math.min(k, temp.size()); j++) {</span>
<span class="line">                currentSum += temp.get(j);</span>
<span class="line">            }</span>
<span class="line">            answer[currentIndex] = currentSum;</span>
<span class="line">            maxHeap.add(nums2[currentIndex]);</span>
<span class="line">            if (maxHeap.size() > k) {</span>
<span class="line">                maxHeap.poll();</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return answer;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


