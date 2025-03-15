import{_ as s,c as i,a,o as e}from"./app-LNU7a3Gk.js";const l={};function c(r,n){return e(),i("div",null,n[0]||(n[0]=[a(`<h1 id="p1308" tabindex="-1"><a class="header-anchor" href="#p1308"><span>P1308</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class p1308 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scanner = new Scanner(System.in);</span>
<span class="line"></span>
<span class="line">        String Word = scanner.nextLine().trim();</span>
<span class="line">        String text = scanner.nextLine();</span>
<span class="line"></span>
<span class="line">        String targetWordLower = Word.toLowerCase();</span>
<span class="line">        String[] words = text.split(&quot; &quot;);</span>
<span class="line"></span>
<span class="line">        int count = 0; // 统计给定单词的出现次数</span>
<span class="line">        int firs = -1; // 记录第一次出现的位置</span>
<span class="line"></span>
<span class="line">        for (int i = 0; i &lt; words.length; i++) {</span>
<span class="line">            // 将当前单词转换为小写进行比较</span>
<span class="line">            if (words[i].equalsIgnoreCase(Word)) {</span>
<span class="line">                count++;</span>
<span class="line">                if (firs == -1) {</span>
<span class="line">                    firs = calculatePosition(text, words, i);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        if (count &gt; 0) {</span>
<span class="line">            System.out.println(count + &quot; &quot; + firs);</span>
<span class="line">        } else {</span>
<span class="line">            System.out.println(-1);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        scanner.close();</span>
<span class="line">    }</span>
<span class="line">    private static int calculatePosition(String text, String[] words, int index) {</span>
<span class="line"></span>
<span class="line">        int position = 0;</span>
<span class="line">        for (int i = 0; i &lt; index; i++) {</span>
<span class="line">            position += words[i].length() + 1;</span>
<span class="line">        }</span>
<span class="line">        return position;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=s(l,[["render",c],["__file","P1308.html.vue"]]),p=JSON.parse('{"path":"/suanfa/P1308.html","title":"P1308","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742019849000,"contributors":[{"name":"FoxPrime-y","username":"FoxPrime-y","email":"yf17537413229@163.com","commits":2,"url":"https://github.com/FoxPrime-y"}]},"filePathRelative":"suanfa/P1308.md"}');export{t as comp,p as data};
