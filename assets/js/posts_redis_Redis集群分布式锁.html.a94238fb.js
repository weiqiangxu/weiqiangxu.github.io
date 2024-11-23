"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6936],{6262:(e,s)=>{s.A=(e,s)=>{const i=e.__vccOpts||e;for(const[e,a]of s)i[e]=a;return i}},8679:(e,s,i)=>{i.r(s),i.d(s,{comp:()=>l,data:()=>d});var a=i(641);const n={},l=(0,i(6262).A)(n,[["render",function(e,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h1 id="集群分布式锁及实现方案" tabindex="-1"><a class="header-anchor" href="#集群分布式锁及实现方案"><span>集群分布式锁及实现方案</span></a></h1><ul><li><a href="https://pdai.tech/md/arch/arch-z-lock.html" target="_blank" rel="noopener noreferrer">Java全栈知识体系之分布式系统</a></li><li><a href="https://www.infoq.cn/article/dvaaj71f4fbqsxmgvdce" target="_blank" rel="noopener noreferrer">InfoQ Redis</a></li></ul><h3 id="锁实现需要支持" tabindex="-1"><a class="header-anchor" href="#锁实现需要支持"><span>锁实现需要支持</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>互斥</span></span>\n<span class="line"><span>超时释放</span></span>\n<span class="line"><span>高性能</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分布式锁干嘛的" tabindex="-1"><a class="header-anchor" href="#分布式锁干嘛的"><span>分布式锁干嘛的</span></a></h3><blockquote><p>控制多个进程对资源的访问</p></blockquote><hr><h3 id="redis单机setnx" tabindex="-1"><a class="header-anchor" href="#redis单机setnx"><span>Redis单机SETNX</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET lock_resource_id lock_value NX EX 10 #加锁</span></span>\n<span class="line"><span>do something</span></span>\n<span class="line"><span>DEL lock_resource_id #释放</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis单机setnx的缺点" tabindex="-1"><a class="header-anchor" href="#redis单机setnx的缺点"><span>Redis单机SETNX的缺点</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>锁提前释放: 事务A没跑完但是因为锁超时释放了，事务B又获取了锁</span></span>\n<span class="line"><span>锁被误删: 事务A执行完(锁已经超时释放了),事务B现在持有锁,事务A此刻把锁释放了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化redis单机setnx" tabindex="-1"><a class="header-anchor" href="#优化redis单机setnx"><span>优化Redis单机SETNX</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DEL释放锁之前判断当前锁的持有者是不是自己(UUID识别)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>这里判断key和删除key值非原子性，所以采用可以保证指令原子性的Lua脚本实现</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis单机setnx在锁超时自动释放的问题没解决" tabindex="-1"><a class="header-anchor" href="#redis单机setnx在锁超时自动释放的问题没解决"><span>Redis单机SETNX在锁超时自动释放的问题没解决</span></a></h3><hr><h3 id="基于redis多机实现的分布式锁redlock" tabindex="-1"><a class="header-anchor" href="#基于redis多机实现的分布式锁redlock"><span>基于Redis多机实现的分布式锁Redlock</span></a></h3><blockquote><p>SETNX的方案在master节点故障时候如果key没同步到slave并且选举slave为master之后，获取到了同资源的锁，不满足互斥性</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Redlock就是为了解决主从异步复制在master节点故障后带来互斥性丢失的问题</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(RedLock相关博客)[https://www.cnblogs.com/wwjj4811/p/15572204.html]</p><h3 id="redlock算法思想" tabindex="-1"><a class="header-anchor" href="#redlock算法思想"><span>RedLock算法思想</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>多个Redis实例(无主从关系)加锁 n%2+1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="基于redisson" tabindex="-1"><a class="header-anchor" href="#基于redisson"><span>基于Redisson</span></a></h3>',22)]))}]]),d=JSON.parse('{"path":"/posts/redis/Redis%E9%9B%86%E7%BE%A4%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html","title":"集群分布式锁及实现方案","lang":"zh-CN","frontmatter":{"description":"集群分布式锁及实现方案 Java全栈知识体系之分布式系统 InfoQ Redis 锁实现需要支持 分布式锁干嘛的 控制多个进程对资源的访问 Redis单机SETNX Redis单机SETNX的缺点 优化Redis单机SETNX Redis单机SETNX在锁超时自动释放的问题没解决 基于Redis多机实现的分布式锁Redlock SETNX的方案在mas...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/redis/Redis%E9%9B%86%E7%BE%A4%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"集群分布式锁及实现方案"}],["meta",{"property":"og:description","content":"集群分布式锁及实现方案 Java全栈知识体系之分布式系统 InfoQ Redis 锁实现需要支持 分布式锁干嘛的 控制多个进程对资源的访问 Redis单机SETNX Redis单机SETNX的缺点 优化Redis单机SETNX Redis单机SETNX在锁超时自动释放的问题没解决 基于Redis多机实现的分布式锁Redlock SETNX的方案在mas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群分布式锁及实现方案\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"锁实现需要支持","slug":"锁实现需要支持","link":"#锁实现需要支持","children":[]},{"level":3,"title":"分布式锁干嘛的","slug":"分布式锁干嘛的","link":"#分布式锁干嘛的","children":[]},{"level":3,"title":"Redis单机SETNX","slug":"redis单机setnx","link":"#redis单机setnx","children":[]},{"level":3,"title":"Redis单机SETNX的缺点","slug":"redis单机setnx的缺点","link":"#redis单机setnx的缺点","children":[]},{"level":3,"title":"优化Redis单机SETNX","slug":"优化redis单机setnx","link":"#优化redis单机setnx","children":[]},{"level":3,"title":"Redis单机SETNX在锁超时自动释放的问题没解决","slug":"redis单机setnx在锁超时自动释放的问题没解决","link":"#redis单机setnx在锁超时自动释放的问题没解决","children":[]},{"level":3,"title":"基于Redis多机实现的分布式锁Redlock","slug":"基于redis多机实现的分布式锁redlock","link":"#基于redis多机实现的分布式锁redlock","children":[]},{"level":3,"title":"RedLock算法思想","slug":"redlock算法思想","link":"#redlock算法思想","children":[]},{"level":3,"title":"基于Redisson","slug":"基于redisson","link":"#基于redisson","children":[]}],"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"posts/redis/Redis集群分布式锁.md","excerpt":"\\n<ul>\\n<li><a href=\\"https://pdai.tech/md/arch/arch-z-lock.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java全栈知识体系之分布式系统</a></li>\\n<li><a href=\\"https://www.infoq.cn/article/dvaaj71f4fbqsxmgvdce\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">InfoQ Redis</a></li>\\n</ul>\\n<h3>锁实现需要支持</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>互斥</span></span>\\n<span class=\\"line\\"><span>超时释放</span></span>\\n<span class=\\"line\\"><span>高性能</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);