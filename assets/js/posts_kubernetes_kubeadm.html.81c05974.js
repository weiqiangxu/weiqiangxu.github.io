"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3100],{6262:(e,n)=>{n.A=(e,n)=>{const t=e.__vccOpts||e;for(const[e,s]of n)t[e]=s;return t}},3394:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>r,data:()=>i});var s=t(641);const a={},r=(0,t(6262).A)(a,[["render",function(e,n){return(0,s.uX)(),(0,s.CE)("div",null,n[0]||(n[0]=[(0,s.Fv)('<h1 id="kubeadm" tabindex="-1"><a class="header-anchor" href="#kubeadm"><span>kubeadm</span></a></h1><p><a href="https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/" target="_blank" rel="noopener noreferrer">kubeadm quickstart</a></p><p><a href="https://jimmysong.io/kubernetes-handbook/practice/install-kubernetes-on-ubuntu-server-16.04-with-kubeadm.html" target="_blank" rel="noopener noreferrer">kubeam create cluster</a></p><p><a href="https://jimmysong.io/" target="_blank" rel="noopener noreferrer">https://jimmysong.io/ 云原生资料库</a></p><p><a href="https://lib.jimmysong.io/kubernetes-handbook/" target="_blank" rel="noopener noreferrer">k8s基础教程</a></p><p><a href="https://jimmysong.io/blog/accessing-kubernetes-pods-from-outside-of-the-cluster/" target="_blank" rel="noopener noreferrer">宝藏博客 - 外部访问pod</a></p><p><a href="https://jimmysong.io/blog/must-read-for-cloud-native-beginner/" target="_blank" rel="noopener noreferrer">云原生 - 必读</a></p><p><a href="https://jimmysong.io/kubernetes-handbook/" target="_blank" rel="noopener noreferrer">Kubernetes 中文指南/云原生应用架构实战手册</a></p><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>install</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo apt-get update</span></span>\n<span class="line"><span>sudo apt-get install -y apt-transport-https ca-certificates curl</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>echo &quot;deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main&quot; | sudo tee /etc/apt/sources.list.d/kubernetes.list</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>sudo apt-get update</span></span>\n<span class="line"><span>sudo apt-get install -y kubelet kubeadm kubectl</span></span>\n<span class="line"><span>sudo apt-mark hold kubelet kubeadm kubectl</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10)]))}]]),i=JSON.parse('{"path":"/posts/kubernetes/kubeadm.html","title":"kubeadm","lang":"zh-CN","frontmatter":{"hide":true,"description":"kubeadm kubeadm quickstart kubeam create cluster https://jimmysong.io/ 云原生资料库 k8s基础教程 宝藏博客 - 外部访问pod 云原生 - 必读 Kubernetes 中文指南/云原生应用架构实战手册 install","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/kubeadm.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"kubeadm"}],["meta",{"property":"og:description","content":"kubeadm kubeadm quickstart kubeam create cluster https://jimmysong.io/ 云原生资料库 k8s基础教程 宝藏博客 - 外部访问pod 云原生 - 必读 Kubernetes 中文指南/云原生应用架构实战手册 install"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubeadm\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"install","slug":"install","link":"#install","children":[]}],"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"posts/kubernetes/kubeadm.md","excerpt":"\\n<p><a href=\\"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">kubeadm quickstart</a></p>\\n<p><a href=\\"https://jimmysong.io/kubernetes-handbook/practice/install-kubernetes-on-ubuntu-server-16.04-with-kubeadm.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">kubeam create cluster</a></p>","autoDesc":true}')}}]);