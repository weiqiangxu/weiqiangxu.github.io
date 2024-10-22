"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[829],{6262:(e,s)=>{s.A=(e,s)=>{const n=e.__vccOpts||e;for(const[e,i]of s)n[e]=i;return n}},9910:(e,s,n)=>{n.r(s),n.d(s,{comp:()=>t,data:()=>l});var i=n(641);const a={},t=(0,n(6262).A)(a,[["render",function(e,s){return(0,i.uX)(),(0,i.CE)("div",null,s[0]||(s[0]=[(0,i.Fv)('<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>telepresence version</span></span>\n<span class="line"><span>telepresence connect</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群连接" tabindex="-1"><a class="header-anchor" href="#集群连接"><span>集群连接</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ telepresence connect</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="开发和调试现有的服务" tabindex="-1"><a class="header-anchor" href="#开发和调试现有的服务"><span>开发和调试现有的服务</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 远程流量发送到本地服务</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># $SERVICE_NAME 是本地服务名称</span></span>\n<span class="line"><span># $LOCAL_PORT 是服务在本地工作站上运行的端口</span></span>\n<span class="line"><span># $REMOTE_PORT 是服务在集群中侦听的端口</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>telepresence intercept $SERVICE_NAME --port $LOCAL_PORT:REMOTE_PORT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证集群是否连接成功" tabindex="-1"><a class="header-anchor" href="#验证集群是否连接成功"><span>验证集群是否连接成功</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping [$service_name].[$namespace].svc.cluster.local</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>ping login.user.svc.cluster.local</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h3><p><a href="https://github.com/telepresenceio/telepresence" target="_blank" rel="noopener noreferrer">github telepresence</a><a href="https://kubernetes.io/zh-cn/docs/tasks/debug/debug-cluster/local-debugging/" target="_blank" rel="noopener noreferrer">本机连接到远程 Kubernetes 集群</a></p>',10)]))}]]),l=JSON.parse('{"path":"/posts/kubernetes/tool_telepresence.html","title":"telepresence基本使用","lang":"zh-CN","frontmatter":{"title":"telepresence基本使用","tags":["telepresence"],"categories":["kubernetes"],"date":"2023-04-08T06:40:12.000Z","index_img":"/images/bg/computer.jpeg","description":"常用命令 集群连接 开发和调试现有的服务 验证集群是否连接成功 参考资料 github telepresence 本机连接到远程 Kubernetes 集群","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/tool_telepresence.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"telepresence基本使用"}],["meta",{"property":"og:description","content":"常用命令 集群连接 开发和调试现有的服务 验证集群是否连接成功 参考资料 github telepresence 本机连接到远程 Kubernetes 集群"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"telepresence"}],["meta",{"property":"article:published_time","content":"2023-04-08T06:40:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"telepresence基本使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-08T06:40:12.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"集群连接","slug":"集群连接","link":"#集群连接","children":[]},{"level":3,"title":"开发和调试现有的服务","slug":"开发和调试现有的服务","link":"#开发和调试现有的服务","children":[]},{"level":3,"title":"验证集群是否连接成功","slug":"验证集群是否连接成功","link":"#验证集群是否连接成功","children":[]},{"level":3,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"posts/kubernetes/tool_telepresence.md","localizedDate":"2023年4月8日","excerpt":"<h3>常用命令</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>telepresence version</span></span>\\n<span class=\\"line\\"><span>telepresence connect</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);