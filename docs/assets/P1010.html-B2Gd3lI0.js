import{_ as s,c as e,a,o as i}from"./app-BKxR-7d5.js";const l={};function d(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="p1010" tabindex="-1"><a class="header-anchor" href="#p1010"><span>P1010</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">对于输入的正整数n，我们需要将其转换为二进制表示形式。</span>
<span class="line">在二进制表示中，每一位代表2的某个幂次方。如果该位是1，则表示需要加上对应的2的幂次方。</span>
<span class="line">对于每一位是1的情况，我们需要进一步将幂次方用2的幂次方加和的形式表示出来，直到所有的幂次方都是0或者是2的幂次方加和的形式。</span>
<span class="line">最后，将所有部分用题目约定的格式连接起来，形成最终的表示形式。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public static void main(String[] args) {</span>
<span class="line">                Scanner sc = new Scanner(System.in);</span>
<span class="line">                int n = sc.nextInt();</span>
<span class="line">                pr(n);</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            public static void pr(int n) {</span>
<span class="line">                if (n == 0) {</span>
<span class="line">                    return;</span>
<span class="line">                }</span>
<span class="line">                int power = 0;</span>
<span class="line">                // 找到小于等于n的最大2的幂次方</span>
<span class="line">                while ((1 &lt;&lt; (power + 1)) &lt;= n) {</span>
<span class="line">                    power++;</span>
<span class="line">                }</span>
<span class="line">                int remainder = n - (1 &lt;&lt; power);</span>
<span class="line">                // 输出当前的2的幂次方</span>
<span class="line">                if (power == 0) {</span>
<span class="line">                    System.out.print(&quot;2&quot;);</span>
<span class="line">                } else {</span>
<span class="line">                    System.out.print(&quot;2(&quot;);</span>
<span class="line">                    pr(power);</span>
<span class="line">                    System.out.print(&quot;)&quot;);</span>
<span class="line">                }</span>
<span class="line">                // 处理余数部分</span>
<span class="line">                if (remainder &gt; 0) {</span>
<span class="line">                    System.out.print(&quot;+&quot;);</span>
<span class="line">                    pr(remainder);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=s(l,[["render",d],["__file","P1010.html.vue"]]),p=JSON.parse('{"path":"/suanfa/P1010.html","title":"P1010","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P1010.md"}');export{c as comp,p as data};
