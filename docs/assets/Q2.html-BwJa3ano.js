import{_ as s,c as e,a,o as i}from"./app-LNU7a3Gk.js";const l={};function t(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="力扣周赛441场q2" tabindex="-1"><a class="header-anchor" href="#力扣周赛441场q2"><span>力扣周赛441场Q2</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public long[] findMaxSum(int[] nums1, int[] nums2, int k) {</span>
<span class="line">        int n = nums1.length;</span>
<span class="line">        long[] answer = new long[n];</span>
<span class="line">        List&lt;int[]&gt; num1 = new ArrayList&lt;&gt;();</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            num1.add(new int[]{nums1[i], i});</span>
<span class="line">        }</span>
<span class="line">        num1.sort(Comparator.comparingInt(a -&gt; a[0]));</span>
<span class="line"></span>
<span class="line">        PriorityQueue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;(Collections.reverseOrder());</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            int[] current = num1.get(i);</span>
<span class="line">            int currentIndex = current[1];</span>
<span class="line">            int currentSum = 0;</span>
<span class="line">            List&lt;Integer&gt; temp = new ArrayList&lt;&gt;(maxHeap);</span>
<span class="line">            temp.sort(Collections.reverseOrder());</span>
<span class="line">            for (int j = 0; j &lt; Math.min(k, temp.size()); j++) {</span>
<span class="line">                currentSum += temp.get(j);</span>
<span class="line">            }</span>
<span class="line">            answer[currentIndex] = currentSum;</span>
<span class="line">            maxHeap.add(nums2[currentIndex]);</span>
<span class="line">            if (maxHeap.size() &gt; k) {</span>
<span class="line">                maxHeap.poll();</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return answer;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",t],["__file","Q2.html.vue"]]),p=JSON.parse('{"path":"/suanfa/Q2.html","title":"力扣周赛441场Q2","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742035291000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/Q2.md"}');export{d as comp,p as data};
