import{_ as s,c as e,a,o as i}from"./app-BFrzfmyX.js";const l={};function d(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="leetcode2007" tabindex="-1"><a class="header-anchor" href="#leetcode2007"><span>LeetCode2007</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。</span>
<span class="line">给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  public int[] findOriginalArray(int[] changed) {</span>
<span class="line">        int n = changed.length;</span>
<span class="line">        if (n % 2 != 0) {</span>
<span class="line">            return new int[0]; // 如果数组长度为奇数，直接返回空数组</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        Arrays.sort(changed); // 对数组进行排序</span>
<span class="line"></span>
<span class="line">        Map&lt;Integer, Integer&gt; countMap = new HashMap&lt;&gt;();</span>
<span class="line">        for (int num : changed) {</span>
<span class="line">            countMap.put(num, countMap.getOrDefault(num, 0) + 1);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        List&lt;Integer&gt; originalList = new ArrayList&lt;&gt;();</span>
<span class="line">        for (int num : changed) {</span>
<span class="line">            if (countMap.get(num) == 0) {</span>
<span class="line">                continue; // 如果该数字的出现次数为0，跳过该数字</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            originalList.add(num); // 将该数字加入原数组</span>
<span class="line">            countMap.put(num, countMap.get(num) - 1); // 将该数字的出现次数减1</span>
<span class="line"></span>
<span class="line">            int doubleNum = num * 2;</span>
<span class="line">            if (countMap.getOrDefault(doubleNum, 0) &gt; 0) {</span>
<span class="line">                countMap.put(doubleNum, countMap.get(doubleNum) - 1); // 将该数字的两倍数的出现次数减1</span>
<span class="line">            } else {</span>
<span class="line">                return new int[0]; // 如果无法找到匹配的两倍数，返回空数组</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 将原数组列表转换为数组并返回</span>
<span class="line">        int[] originalArray = new int[n / 2];</span>
<span class="line">        for (int i = 0; i &lt; n / 2; i++) {</span>
<span class="line">            originalArray[i] = originalList.get(i);</span>
<span class="line">        }</span>
<span class="line">        return originalArray;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=s(l,[["render",d],["__file","LeetCode2007.html.vue"]]),p=JSON.parse('{"path":"../suanfa/LeetCode2007.html","title":"LeetCode2007","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/LeetCode2007.md"}');export{r as comp,p as data};
