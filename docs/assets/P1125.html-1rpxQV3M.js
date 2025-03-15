import{_ as s,c as e,a as i,o as a}from"./app-LNU7a3Gk.js";const l={};function t(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="p1025" tabindex="-1"><a class="header-anchor" href="#p1025"><span>P1025</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">我们需要遍历之前统计的字母出现次数数组，找出其中的最大值和最小值。需要注意的是，对于那些没有出现的字母（即统计数组中值为0的字母），我们不应该将它们计入 minn 的计算中。</span>
<span class="line">需要编写一个函数来判断一个数是否为质数。质数是指大于1的自然数，除了1和它本身外，不能被其他自然数整除。这个函数可以通过从小到大尝试除以所有小于该数平方根的数来实现，如果没有任何一个数能整除它，则该数为质数。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> public static void main(String[] args) {</span>
<span class="line">        Scanner sc = new Scanner(System.in);</span>
<span class="line">        int n = sc.nextInt();</span>
<span class="line">        sc.close();</span>
<span class="line">        //特殊情况处理</span>
<span class="line">        if (n == 1) {</span>
<span class="line">            System.out.println(1);</span>
<span class="line">        } else if (n == 2) {</span>
<span class="line">            System.out.println(2);</span>
<span class="line">        }</span>
<span class="line">        long[] dp = new long[n + 1];//dp[i] 表示走上第 i 阶楼梯的方法数</span>
<span class="line">        dp[1] = 1;</span>
<span class="line">        dp[2] = 2;</span>
<span class="line">        for (int i = 3; i &lt;= n; i++) {</span>
<span class="line">            dp[i] = dp[i - 1] + dp[i - 2];</span>
<span class="line">        }</span>
<span class="line">        System.out.println(dp[n]);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=s(l,[["render",t],["__file","P1125.html.vue"]]),p=JSON.parse('{"path":"/suanfa/P1125.html","title":"P1025","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":1,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P1125.md"}');export{r as comp,p as data};
