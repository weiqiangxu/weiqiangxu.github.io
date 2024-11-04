"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9078],{6262:(e,a)=>{a.A=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}},2444:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>i,data:()=>t});var s=n(641);const r={},i=(0,n(6262).A)(r,[["render",function(e,a){return(0,s.uX)(),(0,s.CE)("div",null,a[0]||(a[0]=[(0,s.Fv)('<h1 id="for-和-range-的性能比较" tabindex="-1"><a class="header-anchor" href="#for-和-range-的性能比较"><span>FOR 和 Range 的性能比较</span></a></h1><h3 id="range-对每一个迭代值都创建-1-个拷贝-而-for-不会" tabindex="-1"><a class="header-anchor" href="#range-对每一个迭代值都创建-1-个拷贝-而-for-不会"><span>range 对每一个迭代值都创建 1 个拷贝 而 For 不会</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>迭代值大小很小的话，性能上没有差异</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>如果迭代值占用内存很大，range 就会显得性能差一些</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="range-里面使用-go-需要注意是否会因为迭代值都是-1-个拷贝而导致错误" tabindex="-1"><a class="header-anchor" href="#range-里面使用-go-需要注意是否会因为迭代值都是-1-个拷贝而导致错误"><span>range 里面使用 go 需要注意是否会因为迭代值都是 1 个拷贝而导致错误</span></a></h3><p><a href="https://geektutu.com/post/high-performance-go.html" target="_blank" rel="noopener noreferrer">GO语言高性能编程</a></p>',5)]))}]]),t=JSON.parse('{"path":"/posts/go/for%E5%92%8Crange%E6%80%A7%E8%83%BD%E6%AF%94%E8%BE%83.html","title":"FOR 和 Range 的性能比较","lang":"zh-CN","frontmatter":{"description":"FOR 和 Range 的性能比较 range 对每一个迭代值都创建 1 个拷贝 而 For 不会 range 里面使用 go 需要注意是否会因为迭代值都是 1 个拷贝而导致错误 GO语言高性能编程","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/go/for%E5%92%8Crange%E6%80%A7%E8%83%BD%E6%AF%94%E8%BE%83.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"FOR 和 Range 的性能比较"}],["meta",{"property":"og:description","content":"FOR 和 Range 的性能比较 range 对每一个迭代值都创建 1 个拷贝 而 For 不会 range 里面使用 go 需要注意是否会因为迭代值都是 1 个拷贝而导致错误 GO语言高性能编程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FOR 和 Range 的性能比较\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"range 对每一个迭代值都创建 1 个拷贝 而 For 不会","slug":"range-对每一个迭代值都创建-1-个拷贝-而-for-不会","link":"#range-对每一个迭代值都创建-1-个拷贝-而-for-不会","children":[]},{"level":3,"title":"range 里面使用 go 需要注意是否会因为迭代值都是 1 个拷贝而导致错误","slug":"range-里面使用-go-需要注意是否会因为迭代值都是-1-个拷贝而导致错误","link":"#range-里面使用-go-需要注意是否会因为迭代值都是-1-个拷贝而导致错误","children":[]}],"readingTime":{"minutes":0.35,"words":105},"filePathRelative":"posts/go/for和range性能比较.md","excerpt":"\\n<h3>range 对每一个迭代值都创建 1 个拷贝 而 For 不会</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>迭代值大小很小的话，性能上没有差异</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>如果迭代值占用内存很大，range 就会显得性能差一些</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);