"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8314],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},282:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>e,data:()=>t});var n=a(641);const l={},e=(0,a(6262).A)(l,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,i[0]||(i[0]=[(0,n.Fv)('<blockquote><p>如何拉取多架构镜像并存储到私有库</p></blockquote><h3 id="如何存储多架构镜像到私有库" tabindex="-1"><a class="header-anchor" href="#如何存储多架构镜像到私有库"><span>如何存储多架构镜像到私有库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 多架构镜像</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># quay.io/coreos/etcd:v3.5.0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --platform=linux/amd64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quay.io/coreos/etcd:v3.5.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quay.io/coreos/etcd:v3.5.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0-amd64</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --platform=linux/arm64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quay.io/coreos/etcd:v3.5.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quay.io/coreos/etcd:v3.5.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0-arm64</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0-amd64</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0-arm64</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 此时无法拉取镜像下面的无法执行</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 制作清单</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manifest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --insecure</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0-amd64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0-arm64</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 推送清单</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manifest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --insecure</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看清单</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manifest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inspect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   &quot;schemaVersion&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   &quot;mediaType&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;application/vnd.docker.distribution.manifest.list.v2+json&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   &quot;manifests&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      {</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;mediaType&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;application/vnd.docker.distribution.manifest.v2+json&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;size&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1783,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;digest&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;sha256:abc&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;platform&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            &quot;architecture&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;amd64&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            &quot;os&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;linux&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      {</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;mediaType&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;application/vnd.docker.distribution.manifest.v2+json&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;size&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1576,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;digest&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;sha256:abc&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         &quot;platform&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            &quot;architecture&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;arm64&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            &quot;os&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;linux&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3)]))}]]),t=JSON.parse('{"path":"/posts/docker/%E5%A4%9A%E6%9E%B6%E6%9E%84%E9%95%9C%E5%83%8F%E5%AD%98%E5%82%A8.html","title":"多架构镜像存储","lang":"zh-CN","frontmatter":{"title":"多架构镜像存储","icon":"object-group","order":2,"category":["docker"],"tag":["docker"],"description":"如何拉取多架构镜像并存储到私有库 如何存储多架构镜像到私有库","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/docker/%E5%A4%9A%E6%9E%B6%E6%9E%84%E9%95%9C%E5%83%8F%E5%AD%98%E5%82%A8.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"多架构镜像存储"}],["meta",{"property":"og:description","content":"如何拉取多架构镜像并存储到私有库 如何存储多架构镜像到私有库"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"docker"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多架构镜像存储\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"如何存储多架构镜像到私有库","slug":"如何存储多架构镜像到私有库","link":"#如何存储多架构镜像到私有库","children":[]}],"readingTime":{"minutes":0.59,"words":176},"filePathRelative":"posts/docker/多架构镜像存储.md","excerpt":"<blockquote>\\n<p>如何拉取多架构镜像并存储到私有库</p>\\n</blockquote>\\n<h3>如何存储多架构镜像到私有库</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 多架构镜像</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># quay.io/coreos/etcd:v3.5.0</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --platform=linux/amd64</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> quay.io/coreos/etcd:v3.5.0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> tag</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> quay.io/coreos/etcd:v3.5.0</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0-amd64</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --platform=linux/arm64</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> quay.io/coreos/etcd:v3.5.0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> tag</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> quay.io/coreos/etcd:v3.5.0</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0-arm64</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> push</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0-amd64</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> push</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0-arm64</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 此时无法拉取镜像下面的无法执行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 制作清单</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> manifest</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> create</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --insecure</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0-amd64</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0-arm64</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 推送清单</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> manifest</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> push</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --insecure</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 查看清单</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> manifest</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> inspect</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.bingosoft.net/bingokube/etcd:v3.5.0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">   \\"schemaVersion\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 2,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">   \\"mediaType\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"application/vnd.docker.distribution.manifest.list.v2+json\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">   \\"manifests\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"mediaType\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"application/vnd.docker.distribution.manifest.v2+json\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"size\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 1783,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"digest\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"sha256:abc\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"platform\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">            \\"architecture\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"amd64\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">            \\"os\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"linux\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">         }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"mediaType\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"application/vnd.docker.distribution.manifest.v2+json\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"size\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 1576,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"digest\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"sha256:abc\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">         \\"platform\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">            \\"architecture\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"arm64\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">            \\"os\\"</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"linux\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">         }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">   ]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);