import{_ as s,c as a,a as i,o as e}from"./app-LNU7a3Gk.js";const l={};function r(c,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="p7786" tabindex="-1"><a class="header-anchor" href="#p7786"><span>P7786</span></a></h1><div class="language-思路 line-numbers-mode" data-highlighter="prismjs" data-ext="思路" data-title="思路"><pre><code><span class="line">初始化一个数组 Narr，用于存储输入的电话摆放情况。</span>
<span class="line">初始化一个数组 Darr，用于存储从第一个桌子到每个桌子响起电话所需的最小添加电话数量。Darr[0] 初始化为 0，因为第一个桌子已经有一个电话。</span>
<span class="line">对于每个桌子 i，如果 Narr[i] 是 1，那么 Darr[i] 应该是 0，因为该位置已经有电话。</span>
<span class="line">如果 Narr[i] 是 0，那么需要查找在距离 D 内的最近的桌子 j，其中 Narr[j] 是 1 或 Darr[j] 不是 Integer.MAX_VALUE。如果找到了这样的桌子 j，那么 Darr[i] 应该是 Darr[j] + 1，否则 Darr[i] 为 Integer.MAX_VALUE。</span>
<span class="line">最后检查 Darr[N-1] 的值，如果它是 Integer.MAX_VALUE，说明无法在给定的 D 范围内使最后一个桌子上的电话响起，输出 &quot;无法在给定的D范围内到达最后一个元素&quot;；否则，输出 Darr[N-1]，即为需要添加的最小电话数量。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public static void main(String[] args) {</span>
<span class="line">        Scanner sc = new Scanner(System.in);</span>
<span class="line">        try {</span>
<span class="line">            int N = sc.nextInt();</span>
<span class="line">            if (N &lt;= 0) {</span>
<span class="line">                throw new IllegalArgumentException(&quot;数组长度必须为正数&quot;);</span>
<span class="line">            }</span>
<span class="line">            int[] Narr = new int[N];</span>
<span class="line">            int D = sc.nextInt();</span>
<span class="line">            if (D &lt; 0) {</span>
<span class="line">                throw new IllegalArgumentException(&quot;D必须是非负数&quot;);</span>
<span class="line">            }</span>
<span class="line">            for (int i = 0; i &lt; N; i++) {</span>
<span class="line">                Narr[i] = sc.nextInt();</span>
<span class="line">                if (Narr[i] &lt; 0 || Narr[i] &gt; 1) {</span>
<span class="line">                    throw new IllegalArgumentException(&quot;Narr数组中的元素必须为0或1&quot;);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            int[] Darr = new int[N];</span>
<span class="line">            Darr[0] = Narr[0] == 1 ? 0 : Integer.MAX_VALUE;</span>
<span class="line"></span>
<span class="line">            for (int i = 1; i &lt; N; i++) {</span>
<span class="line">                if (Narr[i] == 1) {</span>
<span class="line">                    Darr[i] = 0;</span>
<span class="line">                } else {</span>
<span class="line">                    Darr[i] = Integer.MAX_VALUE;</span>
<span class="line">                    for (int j = i - 1; j &gt;= 0 &amp;&amp; i - j &lt;= D; j--) {</span>
<span class="line">                        if (Narr[j] == 1 || Darr[j] != Integer.MAX_VALUE) {</span>
<span class="line">                            Darr[i] = Math.min(Darr[i], Darr[j] + 1);</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            if (Darr[N - 1] == Integer.MAX_VALUE) {</span>
<span class="line">                System.out.println(&quot;无法在给定的D范围内到达最后一个元素&quot;);</span>
<span class="line">            } else {</span>
<span class="line">                System.out.println(Darr[N - 1]);</span>
<span class="line">            }</span>
<span class="line">        } catch (InputMismatchException e) {</span>
<span class="line">            System.out.println(&quot;输入格式不正确，请输入整数&quot;);</span>
<span class="line">        } catch (IllegalArgumentException e) {</span>
<span class="line">            System.out.println(e.getMessage());</span>
<span class="line">        } finally {</span>
<span class="line">            sc.close();</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const p=s(l,[["render",r],["__file","P7786.html.vue"]]),t=JSON.parse('{"path":"/suanfa/P7786.html","title":"P7786","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P7786.md"}');export{p as comp,t as data};
