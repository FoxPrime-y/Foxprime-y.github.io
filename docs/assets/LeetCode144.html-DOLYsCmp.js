import{_ as s,c as n,a,o as i}from"./app-FYnelbtM.js";const l={};function t(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="leetcode144" tabindex="-1"><a class="header-anchor" href="#leetcode144"><span>LeetCode144</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">给你二叉树的根节点 root ，返回它节点值的 前序 遍历。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public List&lt;Integer&gt; preorderTraversal(TreeNode root) {</span>
<span class="line">        List&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();</span>
<span class="line">        pro(root, list);</span>
<span class="line">        return list;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public  void pro(TreeNode root,List&lt;Integer&gt; list){</span>
<span class="line">        if (root == null){</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line">        list.add(root.val);</span>
<span class="line">        pro(root.left,list);</span>
<span class="line">        pro(root.right,list);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=s(l,[["render",t],["__file","LeetCode144.html.vue"]]),o=JSON.parse('{"path":"/suanfa/LeetCode144.html","title":"LeetCode144","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"suanfa/LeetCode144.md"}');export{c as comp,o as data};
