"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4839],{6262:(a,e)=>{e.A=(a,e)=>{const s=a.__vccOpts||a;for(const[a,i]of e)s[a]=i;return s}},1595:(a,e,s)=>{s.r(e),s.d(e,{comp:()=>l,data:()=>t});var i=s(641);const n={},l=(0,s(6262).A)(n,[["render",function(a,e){return(0,i.uX)(),(0,i.CE)("div",null,e[0]||(e[0]=[(0,i.Fv)('<h3 id="自动提交" tabindex="-1"><a class="header-anchor" href="#自动提交"><span>自动提交</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>enable.auto.commit=true</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>消费者会在poll方法调用后每隔五秒(auto.commit.interval.ms指定)提交一次offset</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步提交" tabindex="-1"><a class="header-anchor" href="#同步提交"><span>同步提交</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>开发者编写代码提交</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>consumer.commitSync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步提交" tabindex="-1"><a class="header-anchor" href="#异步提交"><span>异步提交</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>开发者编写代码提交（有回调动作）</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>consumer.commitAsync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考博客" tabindex="-1"><a class="header-anchor" href="#参考博客"><span>参考博客</span></a></h3><p><a href="http://t.zoukankan.com/biehongli-p-14105658.html" target="_blank" rel="noopener noreferrer">Kafka的消费者提交方式手动同步提交、和异步提交</a></p><h3 id="kafka的poll方法" tabindex="-1"><a class="header-anchor" href="#kafka的poll方法"><span>kafka的poll方法</span></a></h3><p><a href="https://blog.csdn.net/qq_55548053/article/details/114055254" target="_blank" rel="noopener noreferrer">kafka poll</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>consumer.poll(5000)指的是拉数据有的话立刻返回，没有的话等待5 second之后再返回</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>默认max.poll.records=500一次poll最多500条数据</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.csdn.net/tags/MtjaEgysNTc2NjEtYmxvZwO0O0OO0O0O.html" target="_blank" rel="noopener noreferrer">kafka重复消费消息设置</a></p><h3 id="kafka为什么会发生消息的重复消费" tabindex="-1"><a class="header-anchor" href="#kafka为什么会发生消息的重复消费"><span>Kafka为什么会发生消息的重复消费</span></a></h3><blockquote><p>消费了却没有commit offset</p></blockquote><h3 id="具体原因" tabindex="-1"><a class="header-anchor" href="#具体原因"><span>具体原因</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1. poll一次性最多拉500条，消费了200条以后，进程终止（没commit offset），消费者重启继续从0开始（200条重复消费）</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>2. consumer消费1条数据时间超过了5min(默认)，出发了rebalance，重新消费</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>3. 人为失误 - 新消费者组去重复消费数据</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>max.poll.interval.ms (消费者poll数据最大间隔，超过了kafka认为该consumer已经离线，触发rebalance)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>max.poll.records 一次poll最多拉取的数据(尽量小、更可靠)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>auto.commit.interval.ms 调用poll之后多少毫秒后consumer就会自动提交offset</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kafka的消费者提交方式手动同步提交、和异步提交" tabindex="-1"><a class="header-anchor" href="#kafka的消费者提交方式手动同步提交、和异步提交"><span>Kafka的消费者提交方式手动同步提交、和异步提交</span></a></h3><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h3><p><a href="https://cloud.tencent.com/developer/article/1772208" target="_blank" rel="noopener noreferrer">Kafka的消费者提交方式手动同步提交、和异步提交</a></p>',20)]))}]]),t=JSON.parse('{"path":"/posts/kafka/%E5%90%8C%E6%AD%A5%E6%8F%90%E4%BA%A4%E5%92%8C%E5%BC%82%E6%AD%A5%E6%8F%90%E4%BA%A4.html","title":"同步提交和异步提交","lang":"zh-CN","frontmatter":{"title":"同步提交和异步提交","tags":["kafka原理"],"categories":["kafka"],"date":"2023-04-08T06:40:12.000Z","index_img":"/images/bg/computer.jpeg","hide":true,"description":"自动提交 同步提交 异步提交 参考博客 Kafka的消费者提交方式手动同步提交、和异步提交 kafka的poll方法 kafka poll kafka重复消费消息设置 Kafka为什么会发生消息的重复消费 消费了却没有commit offset 具体原因 Kafka的消费者提交方式手动同步提交、和异步提交 参考资料 Kafka的消费者提交方式手动同步提...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kafka/%E5%90%8C%E6%AD%A5%E6%8F%90%E4%BA%A4%E5%92%8C%E5%BC%82%E6%AD%A5%E6%8F%90%E4%BA%A4.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"同步提交和异步提交"}],["meta",{"property":"og:description","content":"自动提交 同步提交 异步提交 参考博客 Kafka的消费者提交方式手动同步提交、和异步提交 kafka的poll方法 kafka poll kafka重复消费消息设置 Kafka为什么会发生消息的重复消费 消费了却没有commit offset 具体原因 Kafka的消费者提交方式手动同步提交、和异步提交 参考资料 Kafka的消费者提交方式手动同步提..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kafka原理"}],["meta",{"property":"article:published_time","content":"2023-04-08T06:40:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"同步提交和异步提交\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-08T06:40:12.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"自动提交","slug":"自动提交","link":"#自动提交","children":[]},{"level":3,"title":"同步提交","slug":"同步提交","link":"#同步提交","children":[]},{"level":3,"title":"异步提交","slug":"异步提交","link":"#异步提交","children":[]},{"level":3,"title":"参考博客","slug":"参考博客","link":"#参考博客","children":[]},{"level":3,"title":"kafka的poll方法","slug":"kafka的poll方法","link":"#kafka的poll方法","children":[]},{"level":3,"title":"Kafka为什么会发生消息的重复消费","slug":"kafka为什么会发生消息的重复消费","link":"#kafka为什么会发生消息的重复消费","children":[]},{"level":3,"title":"具体原因","slug":"具体原因","link":"#具体原因","children":[]},{"level":3,"title":"Kafka的消费者提交方式手动同步提交、和异步提交","slug":"kafka的消费者提交方式手动同步提交、和异步提交","link":"#kafka的消费者提交方式手动同步提交、和异步提交","children":[]},{"level":3,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"posts/kafka/同步提交和异步提交.md","localizedDate":"2023年4月8日","excerpt":"<h3>自动提交</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>enable.auto.commit=true</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>消费者会在poll方法调用后每隔五秒(auto.commit.interval.ms指定)提交一次offset</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);