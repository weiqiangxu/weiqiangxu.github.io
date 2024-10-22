"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[155],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,l]of s)a[i]=l;return a}},364:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>t});var l=a(641);const n={},e=(0,a(6262).A)(n,[["render",function(i,s){return(0,l.uX)(),(0,l.CE)("div",null,s[0]||(s[0]=[(0,l.Fv)('<blockquote><p>搭建集群使用cilium作为网络解决方案，理解eBPF在其中充当的角色、传统flannel下的集群的优缺点</p></blockquote><h3 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念"><span>一、概念</span></a></h3><p>eBPF（extended Berkeley Packet Filter）是一种在Linux内核中实现的虚拟机技术</p><h3 id="二、尝试cilium" tabindex="-1"><a class="header-anchor" href="#二、尝试cilium"><span>二、尝试cilium</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装Cilium CLI</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CILIUM_CLI_VERSION</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CLI_ARCH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">amd64</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;aarch64&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> CLI_ARCH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">arm64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --fail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --remote-name-all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/cilium/cilium-cli/releases/download/</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CILIUM_CLI_VERSION</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/cilium-linux-</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CLI_ARCH</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.tar.gz{,.sha256sum}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sha256sum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cilium-linux-</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CLI_ARCH</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.tar.gz.sha256sum</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xzvfC</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cilium-linux-</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CLI_ARCH</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cilium-linux-</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CLI_ARCH</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.tar.gz{,.sha256sum}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装Cilium</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cilium</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证安装</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cilium</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --wait</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证链接</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cilium</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> connectivity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h3><h6 id="_1-cilium-比-flannel-好在哪儿" tabindex="-1"><a class="header-anchor" href="#_1-cilium-比-flannel-好在哪儿"><span>1.Cilium 比 flannel 好在哪儿</span></a></h6><p>Cilium和Flannel是Kubernetes集群中常用的两种网络插件，它们各自有着不同的特点和优势。</p><ol><li><p>性能：Cilium在性能方面表现更好。它使用Linux内核中的eBPF技术，实现了高性能的网络转发和安全功能。相比之下，Flannel使用传统的overlay网络技术，在大规模集群中可能会有性能瓶颈。</p></li><li><p>安全性：Cilium提供了更强大的网络安全功能。它可以通过定义丰富的网络策略，对容器之间的通信进行细粒度的控制和保护，包括L3/L4层的过滤规则、应用层的协议解析和控制等。而Flannel则主要集中在网络互联的功能，安全性方面的支持相对较弱。</p></li><li><p>可观测性：Cilium提供了更丰富的可观测性功能。它可以生成详细的网络流量日志，并提供基于时间序列的指标监控。这些功能对于排查网络问题和性能优化非常有帮助。Flannel则相对简单，提供的可观测性功能较为有限。</p></li></ol><p>综上所述，Cilium相对于Flannel在性能、安全性和可观测性方面都有着更好的表现。但需要注意的是，选择网络插件应该根据具体需求和环境条件进行评估和权衡。</p><h5 id="_2-网络的l3-l4层是什么意思" tabindex="-1"><a class="header-anchor" href="#_2-网络的l3-l4层是什么意思"><span>2.网络的L3/L4层是什么意思</span></a></h5><p>L3和L4层是网络通信中的两个不同层次。 L3层，也称为网络层，是OSI（开放系统互联）模型中的第三层。它负责在不同网络之间进行数据包的路由和转发。L3层主要使用IP协议，通过IP地址来标识和寻址不同的主机和网络。 L4层，也称为传输层，是OSI模型中的第四层。它负责在源主机和目标主机之间提供端到端的数据传输控制和管理。L4层主要使用传输层协议（如TCP、UDP）来实现数据分段、可靠性控制、连接管理等功能。 在网络安全领域，L3/L4层通常被用于网络策略和防火墙规则的制定。通过在L3/L4层对网络数据包进行过滤和控制，可以实现对网络流量的分类、限制和保护。例如，可以根据源IP地址、目标IP地址、端口号等信息来定义规则，限制特定的网络通信或阻止潜在的恶意流量。</p><h3 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h3><p><a href="https://ebpf.io/what-is-ebpf/" target="_blank" rel="noopener noreferrer">https://ebpf.io/what-is-ebpf/</a><a href="https://www.kernel.org/doc/html/latest/bpf/index.html" target="_blank" rel="noopener noreferrer">BPF（Berkeley Packet Filter）</a><a href="https://mp.weixin.qq.com/s/WHoSyXMiaazxPhN9LXiwHg" target="_blank" rel="noopener noreferrer">Cilium作为K8s网络的解决方案</a><a href="https://cilium.io/blog/2021/05/11/cni-benchmark/" target="_blank" rel="noopener noreferrer">CNI基准：了解Cilium网络性能</a><a href="https://docs.cilium.io/en/stable/" target="_blank" rel="noopener noreferrer">https://docs.cilium.io/en/stable/</a><a href="https://atbug.com/accelerate-network-packets-transmission/" target="_blank" rel="noopener noreferrer">使用 eBPF 技术实现更快的网络数据包传输</a><a href="https://atbug.com/tracing-network-packets-in-kubernetes/" target="_blank" rel="noopener noreferrer">追踪 Kubernetes 中的数据包 - 宝藏博主</a></p>',15)]))}]]),t=JSON.parse('{"path":"/posts/kubernetes/eBPF_cilium%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html","title":"eBPF&cilium快速入门","lang":"zh-CN","frontmatter":{"title":"eBPF&cilium快速入门","tags":["kubernetes"],"categories":["kubernetes"],"description":"搭建集群使用cilium作为网络解决方案，理解eBPF在其中充当的角色、传统flannel下的集群的优缺点 一、概念 eBPF（extended Berkeley Packet Filter）是一种在Linux内核中实现的虚拟机技术 二、尝试cilium Q&A 1.Cilium 比 flannel 好在哪儿 Cilium和Flannel是Kubern...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/eBPF_cilium%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"eBPF&cilium快速入门"}],["meta",{"property":"og:description","content":"搭建集群使用cilium作为网络解决方案，理解eBPF在其中充当的角色、传统flannel下的集群的优缺点 一、概念 eBPF（extended Berkeley Packet Filter）是一种在Linux内核中实现的虚拟机技术 二、尝试cilium Q&A 1.Cilium 比 flannel 好在哪儿 Cilium和Flannel是Kubern..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kubernetes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"eBPF&cilium快速入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"一、概念","slug":"一、概念","link":"#一、概念","children":[]},{"level":3,"title":"二、尝试cilium","slug":"二、尝试cilium","link":"#二、尝试cilium","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]},{"level":3,"title":"相关文档","slug":"相关文档","link":"#相关文档","children":[]}],"readingTime":{"minutes":2.95,"words":886},"filePathRelative":"posts/kubernetes/eBPF&cilium快速入门.md","excerpt":"<blockquote>\\n<p>搭建集群使用cilium作为网络解决方案，理解eBPF在其中充当的角色、传统flannel下的集群的优缺点</p>\\n</blockquote>\\n<h3>一、概念</h3>\\n<p>eBPF（extended Berkeley Packet Filter）是一种在Linux内核中实现的虚拟机技术</p>\\n<h3>二、尝试cilium</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 安装Cilium CLI</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CILIUM_CLI_VERSION</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">$(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -s</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CLI_ARCH</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">amd64</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">if</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [ </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"$(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">uname</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -m</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">)\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"aarch64\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ]; </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">then</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> CLI_ARCH</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">arm64</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">fi</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -L</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --fail</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --remote-name-all</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://github.com/cilium/cilium-cli/releases/download/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CILIUM_CLI_VERSION</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">}</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">/cilium-linux-</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CLI_ARCH</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">}</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">.tar.gz{,.sha256sum}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">sha256sum</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --check</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cilium-linux-</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CLI_ARCH</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">}</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">.tar.gz.sha256sum</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">sudo</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> tar</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> xzvfC</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cilium-linux-</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CLI_ARCH</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">}</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">.tar.gz</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /usr/local/bin</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">rm</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cilium-linux-</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CLI_ARCH</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">}</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">.tar.gz{,.sha256sum}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);