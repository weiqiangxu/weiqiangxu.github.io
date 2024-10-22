"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[609],{6262:(e,s)=>{s.A=(e,s)=>{const i=e.__vccOpts||e;for(const[e,n]of s)i[e]=n;return i}},1474:(e,s,i)=>{i.r(s),i.d(s,{comp:()=>t,data:()=>l});var n=i(641);const a={},t=(0,i(6262).A)(a,[["render",function(e,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<h1 id="哨兵-redis-sentinel" tabindex="-1"><a class="header-anchor" href="#哨兵-redis-sentinel"><span>哨兵 redis-sentinel</span></a></h1><p><a href="https://xie.infoq.cn/article/6c3500c66c3cdee3d72b88780" target="_blank" rel="noopener noreferrer">InfoQ Redis集群</a></p><blockquote><p>master宕机哨兵会自动选举slave为master</p></blockquote><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>redis.conf与主从一致</span></span>\n<span class="line"><span>每个哨兵进程sentinel.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟环境" tabindex="-1"><a class="header-anchor" href="#模拟环境"><span>模拟环境</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>slave三个和master一个</span></span>\n<span class="line"><span>哨兵sentinel也有3个</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工作模式" tabindex="-1"><a class="header-anchor" href="#工作模式"><span>工作模式</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>哨兵sentinel每秒钟ping slave和master</span></span>\n<span class="line"><span>单个sentinel没收到响应就会认为主观下线(SDOWN)</span></span>\n<span class="line"><span>足够数量的哨兵认为主观下线之后</span></span>\n<span class="line"><span>master将会被标记为客观下线(ODOWN)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>master宕机之后</span></span>\n<span class="line"><span>哨兵之间进行投票选举master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9)]))}]]),l=JSON.parse('{"path":"/posts/redis/Redis%E9%9B%86%E7%BE%A4%E6%A8%A1%E5%BC%8F%E4%B9%8B%E5%93%A8%E5%85%B5%E6%A8%A1%E5%BC%8F.html","title":"哨兵 redis-sentinel","lang":"zh-CN","frontmatter":{"hide":true,"description":"哨兵 redis-sentinel InfoQ Redis集群 master宕机哨兵会自动选举slave为master 配置 模拟环境 工作模式","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/redis/Redis%E9%9B%86%E7%BE%A4%E6%A8%A1%E5%BC%8F%E4%B9%8B%E5%93%A8%E5%85%B5%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"哨兵 redis-sentinel"}],["meta",{"property":"og:description","content":"哨兵 redis-sentinel InfoQ Redis集群 master宕机哨兵会自动选举slave为master 配置 模拟环境 工作模式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"哨兵 redis-sentinel\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"模拟环境","slug":"模拟环境","link":"#模拟环境","children":[]},{"level":3,"title":"工作模式","slug":"工作模式","link":"#工作模式","children":[]}],"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"posts/redis/Redis集群模式之哨兵模式.md","excerpt":"\\n<p><a href=\\"https://xie.infoq.cn/article/6c3500c66c3cdee3d72b88780\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">InfoQ Redis集群</a></p>\\n<blockquote>\\n<p>master宕机哨兵会自动选举slave为master</p>\\n</blockquote>\\n<h3>配置</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>redis.conf与主从一致</span></span>\\n<span class=\\"line\\"><span>每个哨兵进程sentinel.conf</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);