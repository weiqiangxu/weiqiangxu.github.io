"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9856],{6262:(e,a)=>{a.A=(e,a)=>{const i=e.__vccOpts||e;for(const[e,n]of a)i[e]=n;return i}},7238:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>l,data:()=>t});var n=i(641);const s={},l=(0,i(6262).A)(s,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,a[0]||(a[0]=[(0,n.Fv)('<h3 id="leader-follower" tabindex="-1"><a class="header-anchor" href="#leader-follower"><span>Leader &amp;&amp; Follower</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>leader : 读写</span></span>\n<span class="line"><span>follewer : 副本数据同步</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>每个topic可以配置多个分区以及多个副本</p></blockquote><blockquote><p>每个分区有1个leader和0或多个follower</p></blockquote><h3 id="生产者分区写入策略" tabindex="-1"><a class="header-anchor" href="#生产者分区写入策略"><span>生产者分区写入策略</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>一个 topic 有多个分区, 那这个topic有消息写入，该写到哪个分区</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>轮询 - 默认</span></span>\n<span class="line"><span>随机</span></span>\n<span class="line"><span>key分区</span></span>\n<span class="line"><span>自定义</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消费者rebalance机制" tabindex="-1"><a class="header-anchor" href="#消费者rebalance机制"><span>消费者rebalance机制</span></a></h3><h3 id="参考博客" tabindex="-1"><a class="header-anchor" href="#参考博客"><span>参考博客</span></a></h3><p><a href="https://blog.csdn.net/weixin_45970271/article/details/126550115" target="_blank" rel="noopener noreferrer">Kafka的分区和副本机制</a></p>',9)]))}]]),t=JSON.parse('{"path":"/posts/kafka/%E5%88%86%E5%8C%BA%E5%92%8C%E5%89%AF%E6%9C%AC%E6%9C%BA%E5%88%B6.html","title":"分区和副本机制","lang":"zh-CN","frontmatter":{"title":"分区和副本机制","tags":["kafka原理"],"categories":["kafka"],"date":"2023-04-08T06:40:12.000Z","index_img":"/images/bg/computer.jpeg","hide":true,"description":"Leader && Follower 每个topic可以配置多个分区以及多个副本 每个分区有1个leader和0或多个follower 生产者分区写入策略 消费者rebalance机制 参考博客 Kafka的分区和副本机制","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kafka/%E5%88%86%E5%8C%BA%E5%92%8C%E5%89%AF%E6%9C%AC%E6%9C%BA%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"分区和副本机制"}],["meta",{"property":"og:description","content":"Leader && Follower 每个topic可以配置多个分区以及多个副本 每个分区有1个leader和0或多个follower 生产者分区写入策略 消费者rebalance机制 参考博客 Kafka的分区和副本机制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kafka原理"}],["meta",{"property":"article:published_time","content":"2023-04-08T06:40:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分区和副本机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-08T06:40:12.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"Leader && Follower","slug":"leader-follower","link":"#leader-follower","children":[]},{"level":3,"title":"生产者分区写入策略","slug":"生产者分区写入策略","link":"#生产者分区写入策略","children":[]},{"level":3,"title":"消费者rebalance机制","slug":"消费者rebalance机制","link":"#消费者rebalance机制","children":[]},{"level":3,"title":"参考博客","slug":"参考博客","link":"#参考博客","children":[]}],"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"posts/kafka/分区和副本机制.md","localizedDate":"2023年4月8日","excerpt":"<h3>Leader &amp;&amp; Follower</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>leader : 读写</span></span>\\n<span class=\\"line\\"><span>follewer : 副本数据同步</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);