"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7853],{6262:(e,a)=>{a.A=(e,a)=>{const i=e.__vccOpts||e;for(const[e,n]of a)i[e]=n;return i}},5793:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>l,data:()=>t});var n=i(641);const s={},l=(0,i(6262).A)(s,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,a[0]||(a[0]=[(0,n.Fv)('<h1 id="golang-底层数据结构" tabindex="-1"><a class="header-anchor" href="#golang-底层数据结构"><span>golang 底层数据结构</span></a></h1><blockquote><p>哈希表</p></blockquote><h3 id="哈希函数选择-哈希冲突解决" tabindex="-1"><a class="header-anchor" href="#哈希函数选择-哈希冲突解决"><span>哈希函数选择 &amp;&amp; 哈希冲突解决</span></a></h3><h3 id="开放寻址法-拉链法" tabindex="-1"><a class="header-anchor" href="#开放寻址法-拉链法"><span>开放寻址法 &amp;&amp; 拉链法</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>多个写成对同一个map写数据，并且key不会重复，请问这个map此刻可以认为是并发安全的吗</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="golang引用类型" tabindex="-1"><a class="header-anchor" href="#golang引用类型"><span>golang引用类型</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>当作为函数返回值的时候可以返回 nil</span></span>\n<span class="line"><span>map\\pointers\\slice\\channel\\interface\\function</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/usr/local/go/src/runtime/map.go/hmap</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>数据结构和内存管理</li><li>创建</li><li>访问</li><li>分配</li><li>删除</li><li>扩容</li></ol><blockquote><p>Go 语言使用拉链法来解决哈希碰撞的问题实现了哈希表</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>每个桶 bmap 存储键对应哈希的前 8 位 , tophash 成为可以帮助哈希快速遍历桶中元素的缓存</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>每个桶都只能存储 8 个键值对 ， 超过就会存储到溢出桶</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>键值对数量的增加，溢出桶的数量和哈希的装载因子也会逐渐升高，超过一定范围就会触发扩容，不会造成性能的瞬时巨大抖动</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关博客" tabindex="-1"><a class="header-anchor" href="#相关博客"><span>相关博客</span></a></h3><p><a href="https://www.modb.pro/db/171834" target="_blank" rel="noopener noreferrer">吃透Golang的map底层数据结构及其实现原理</a></p><p><a href="https://www.modb.pro/db/171818" target="_blank" rel="noopener noreferrer">GC</a></p><p><a href="https://qcrao.com/post/dive-into-go-map/" target="_blank" rel="noopener noreferrer">map解析</a></p><p><a href="https://zhuanlan.zhihu.com/p/582982078" target="_blank" rel="noopener noreferrer">map内存泄漏</a><a href="https://geektutu.com/post/high-performance-go.html" target="_blank" rel="noopener noreferrer">GO语言高性能编程</a></p>',16)]))}]]),t=JSON.parse('{"path":"/posts/go/map%E5%BA%95%E5%B1%82%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","title":"golang 底层数据结构","lang":"zh-CN","frontmatter":{"hide":true,"description":"golang 底层数据结构 哈希表 哈希函数选择 && 哈希冲突解决 开放寻址法 && 拉链法 golang引用类型 数据结构和内存管理 创建 访问 分配 删除 扩容 Go 语言使用拉链法来解决哈希碰撞的问题实现了哈希表 相关博客 吃透Golang的map底层数据结构及其实现原理 GC map解析 map内存泄漏 GO语言高性能编程","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/go/map%E5%BA%95%E5%B1%82%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"golang 底层数据结构"}],["meta",{"property":"og:description","content":"golang 底层数据结构 哈希表 哈希函数选择 && 哈希冲突解决 开放寻址法 && 拉链法 golang引用类型 数据结构和内存管理 创建 访问 分配 删除 扩容 Go 语言使用拉链法来解决哈希碰撞的问题实现了哈希表 相关博客 吃透Golang的map底层数据结构及其实现原理 GC map解析 map内存泄漏 GO语言高性能编程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"golang 底层数据结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"哈希函数选择 && 哈希冲突解决","slug":"哈希函数选择-哈希冲突解决","link":"#哈希函数选择-哈希冲突解决","children":[]},{"level":3,"title":"开放寻址法 && 拉链法","slug":"开放寻址法-拉链法","link":"#开放寻址法-拉链法","children":[]},{"level":3,"title":"golang引用类型","slug":"golang引用类型","link":"#golang引用类型","children":[]},{"level":3,"title":"相关博客","slug":"相关博客","link":"#相关博客","children":[]}],"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"posts/go/map底层数据结构.md","excerpt":"\\n<blockquote>\\n<p>哈希表</p>\\n</blockquote>\\n<h3>哈希函数选择 &amp;&amp; 哈希冲突解决</h3>\\n<h3>开放寻址法 &amp;&amp; 拉链法</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>多个写成对同一个map写数据，并且key不会重复，请问这个map此刻可以认为是并发安全的吗</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);