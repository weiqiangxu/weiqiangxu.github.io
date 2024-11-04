"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9980],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},3443:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>n});var e=a(641);const t={},l=(0,a(6262).A)(t,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<h3 id="开源安装包" tabindex="-1"><a class="header-anchor" href="#开源安装包"><span>开源安装包</span></a></h3><p><a href="https://artifacthub.io/packages/helm/bitnami/mysql" target="_blank" rel="noopener noreferrer">artifacthub.io/packages/helm/bitnami/mysql</a></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># global.storageClass 存储类</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># secondary.replicaCount 从节点数量</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># MySQL的架构可以是独立的（standalone）或者是复制（replication）</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-cluster</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    oci://registry-1.docker.io/bitnamicharts/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global.storageClass=nfs-client</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> architecture=replication</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> secondary.replicaCount=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3><ol><li>通过chart包查看镜像命令：<code>helm tmeplate &lt;chart包&gt; | grep image</code></li><li>查看helm的参数<code>helm get value &lt;chart包&gt;</code></li></ol><p><a href="https://cloud.tencent.com/developer/article/2031851" target="_blank" rel="noopener noreferrer">实战Kubernetes StatefulSet -- MySQL主从集群搭建</a></p>',6)]))}]]),n=JSON.parse('{"path":"/posts/kubernetes/MySQL%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA.html","title":"MySQL集群搭建","lang":"zh-CN","frontmatter":{"title":"MySQL集群搭建","tags":["kubernetes"],"categories":["kubernetes"],"description":"开源安装包 artifacthub.io/packages/helm/bitnami/mysql 常用命令 通过chart包查看镜像命令：helm tmeplate <chart包> | grep image 查看helm的参数helm get value <chart包> 实战Kubernetes StatefulSet -- MySQL主从集群搭建","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/MySQL%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"MySQL集群搭建"}],["meta",{"property":"og:description","content":"开源安装包 artifacthub.io/packages/helm/bitnami/mysql 常用命令 通过chart包查看镜像命令：helm tmeplate <chart包> | grep image 查看helm的参数helm get value <chart包> 实战Kubernetes StatefulSet -- MySQL主从集群搭建"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kubernetes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL集群搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"开源安装包","slug":"开源安装包","link":"#开源安装包","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}],"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"posts/kubernetes/MySQL集群搭建.md","excerpt":"<h3>开源安装包</h3>\\n<p><a href=\\"https://artifacthub.io/packages/helm/bitnami/mysql\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">artifacthub.io/packages/helm/bitnami/mysql</a></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># global.storageClass 存储类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># secondary.replicaCount 从节点数量</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># MySQL的架构可以是独立的（standalone）或者是复制（replication）</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">helm</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mysql-cluster</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> \\\\</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    oci://registry-1.docker.io/bitnamicharts/mysql</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> \\\\</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">    --set</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> global.storageClass=nfs-client</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> \\\\</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">    --set</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> architecture=replication</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> \\\\</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">    --set</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> secondary.replicaCount=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">2</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);