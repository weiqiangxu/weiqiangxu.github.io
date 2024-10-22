"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1977],{6262:(e,i)=>{i.A=(e,i)=>{const s=e.__vccOpts||e;for(const[e,n]of i)s[e]=n;return s}},1611:(e,i,s)=>{s.r(i),s.d(i,{comp:()=>t,data:()=>l});var n=s(641);const a={},t=(0,s(6262).A)(a,[["render",function(e,i){return(0,n.uX)(),(0,n.CE)("div",null,i[0]||(i[0]=[(0,n.Fv)('<h1 id="kubectl" tabindex="-1"><a class="header-anchor" href="#kubectl"><span>kubectl</span></a></h1><blockquote><p>$HOME/.kube/config</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mkdir -p $HOME/.kube</span></span>\n<span class="line"><span>cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>\n<span class="line"><span>chown $(id -u):$(id -g) $HOME/.kube/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get ns</span></span>\n<span class="line"><span>kubectl get pods -n db</span></span>\n<span class="line"><span>kubectl get pods -n cms</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl describe pod ${pod_name} -n ${namespace_name}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get deployment -n db</span></span>\n<span class="line"><span>kubectl describe deployment xxx -n db</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get svc -n db</span></span>\n<span class="line"><span>kubectl describe svc redis-master -n db</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',8)]))}]]),l=JSON.parse('{"path":"/posts/kubernetes/kubectl.html","title":"kubectl","lang":"zh-CN","frontmatter":{"hide":true,"description":"kubectl $HOME/.kube/config 常用","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/kubectl.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"kubectl"}],["meta",{"property":"og:description","content":"kubectl $HOME/.kube/config 常用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubectl\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"常用","slug":"常用","link":"#常用","children":[]}],"readingTime":{"minutes":0.2,"words":61},"filePathRelative":"posts/kubernetes/kubectl.md","excerpt":"\\n<blockquote>\\n<p>$HOME/.kube/config</p>\\n</blockquote>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>mkdir -p $HOME/.kube</span></span>\\n<span class=\\"line\\"><span>cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>\\n<span class=\\"line\\"><span>chown $(id -u):$(id -g) $HOME/.kube/config</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);