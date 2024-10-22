"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6220],{6262:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,a]of s)e[i]=a;return e}},7552:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>t,data:()=>l});var a=e(641);const n={},t=(0,e(6262).A)(n,[["render",function(i,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h4 id="_1-如何kubeadm创建集群的时候默认添加节点污点" tabindex="-1"><a class="header-anchor" href="#_1-如何kubeadm创建集群的时候默认添加节点污点"><span>1.如何kubeadm创建集群的时候默认添加节点污点</span></a></h4><h3 id="_2-kubeadm用来init的配置文件如何配置默认添加污点" tabindex="-1"><a class="header-anchor" href="#_2-kubeadm用来init的配置文件如何配置默认添加污点"><span>2.kubeadm用来init的配置文件如何配置默认添加污点</span></a></h3><p>要在使用kubeadm init命令创建集群时默认添加节点污点，可以通过编辑kubeadm配置文件来实现。以下是具体的步骤：</p><ol><li>在创建集群之前，先创建一个名为&quot;kubeadm-config.yaml&quot;的配置文件。可以使用以下命令创建该文件：</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vi kubeadm-config.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>在该文件中添加以下内容：</li></ol><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">kubeadm.k8s.io/v1beta2</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">InitConfiguration</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nodeRegistration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  taints</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">node-role.kubernetes.io/master</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;NoSchedule&quot;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    effect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">NoSchedule</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">kubeadm.k8s.io/v1beta2</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ClusterConfiguration</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段配置的含义是给主节点（即控制平面节点）添加一个名为<code>node-role.kubernetes.io/master</code>的污点，并且设置该污点的效果为NoSchedule。</p><ol start="3"><li><p>保存并关闭文件。</p></li><li><p>使用kubeadm init命令时，指定使用上述配置文件：</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm init --config=kubeadm-config.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这样，在使用kubeadm init命令创建集群时，会根据配置文件中的定义来添加节点污点。</p><p>注意：这种方式只适用于初始化集群时，默认添加节点污点。如果要为已有的节点添加污点，可以使用<code>kubectl taint</code>命令。</p><h3 id="_3-cilium的k8s网络模型" tabindex="-1"><a class="header-anchor" href="#_3-cilium的k8s网络模型"><span>3.cilium的k8s网络模型</span></a></h3><p><a href="https://docs.cilium.io/en/stable/network/kubernetes/" target="_blank" rel="noopener noreferrer">https://docs.cilium.io/en/stable/network/kubernetes/</a></p><h3 id="_4-cilium网络模型" tabindex="-1"><a class="header-anchor" href="#_4-cilium网络模型"><span>4.cilium网络模型</span></a></h3><ol start="5"><li>arp -n</li></ol>',16)]))}]]),l=JSON.parse('{"path":"/posts/cni/cilium.html","title":"cilium","lang":"zh-CN","frontmatter":{"title":"cilium","tags":["kubernetes"],"categories":["kubernetes"],"description":"1.如何kubeadm创建集群的时候默认添加节点污点 2.kubeadm用来init的配置文件如何配置默认添加污点 要在使用kubeadm init命令创建集群时默认添加节点污点，可以通过编辑kubeadm配置文件来实现。以下是具体的步骤： 在创建集群之前，先创建一个名为\\"kubeadm-config.yaml\\"的配置文件。可以使用以下命令创建该文件：...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/cni/cilium.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"cilium"}],["meta",{"property":"og:description","content":"1.如何kubeadm创建集群的时候默认添加节点污点 2.kubeadm用来init的配置文件如何配置默认添加污点 要在使用kubeadm init命令创建集群时默认添加节点污点，可以通过编辑kubeadm配置文件来实现。以下是具体的步骤： 在创建集群之前，先创建一个名为\\"kubeadm-config.yaml\\"的配置文件。可以使用以下命令创建该文件：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kubernetes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cilium\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"2.kubeadm用来init的配置文件如何配置默认添加污点","slug":"_2-kubeadm用来init的配置文件如何配置默认添加污点","link":"#_2-kubeadm用来init的配置文件如何配置默认添加污点","children":[]},{"level":3,"title":"3.cilium的k8s网络模型","slug":"_3-cilium的k8s网络模型","link":"#_3-cilium的k8s网络模型","children":[]},{"level":3,"title":"4.cilium网络模型","slug":"_4-cilium网络模型","link":"#_4-cilium网络模型","children":[]}],"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"posts/cni/cilium.md","excerpt":"<h4>1.如何kubeadm创建集群的时候默认添加节点污点</h4>\\n<h3>2.kubeadm用来init的配置文件如何配置默认添加污点</h3>\\n<p>要在使用kubeadm init命令创建集群时默认添加节点污点，可以通过编辑kubeadm配置文件来实现。以下是具体的步骤：</p>\\n<ol>\\n<li>在创建集群之前，先创建一个名为\\"kubeadm-config.yaml\\"的配置文件。可以使用以下命令创建该文件：</li>\\n</ol>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>vi kubeadm-config.yaml</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);