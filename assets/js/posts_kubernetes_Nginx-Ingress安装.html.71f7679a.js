"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6751],{6262:(s,i)=>{i.A=(s,i)=>{const n=s.__vccOpts||s;for(const[s,a]of i)n[s]=a;return n}},8216:(s,i,n)=>{n.r(i),n.d(i,{comp:()=>e,data:()=>h});var a=n(641);const l={},e=(0,n(6262).A)(l,[["render",function(s,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<h3 id="_1-nginx-pod" tabindex="-1"><a class="header-anchor" href="#_1-nginx-pod"><span>1. nginx pod</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v1</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Pod</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">metadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx-pod</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> labels</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> containers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx-container</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx:latest</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v1</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Service</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">metadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx-service</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> selector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">protocol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TCP</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   targetPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   nodePort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">30089</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">NodePort</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ingress-nginx" tabindex="-1"><a class="header-anchor" href="#_2-ingress-nginx"><span>2. ingress-nginx</span></a></h3><p><a href="https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml" target="_blank" rel="noopener noreferrer">install-ingress-nginx.yaml</a></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> helm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ingress-nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ingress-nginx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://kubernetes.github.io/ingress-nginx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --namespace</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ingress-nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --create-namespace</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更改镜像地址</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># image: k8s.gcr.io/ingress-nginx/controller:v1.1.1@sha256:xxx</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 变成</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># image: registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.1.1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1@sha256:xxx</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 变成</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># image: registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install-ingress-nginx.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建ingress-yaml" tabindex="-1"><a class="header-anchor" href="#_3-创建ingress-yaml"><span>3. 创建ingress yaml</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">networking.k8s.io/v1</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Ingress</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">metadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minimal-ingress</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  annotations</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    nginx.ingress.kubernetes.io/rewrite-target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  defaultBackend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx-service</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8989</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ingressClassName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx-example</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  rules</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">myapp.com</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        pathType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Prefix</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        backend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx-service</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8989</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash：q line-numbers-mode" data-highlighter="shiki" data-ext="bash：q" data-title="bash：q" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ kubectl get service -n ingress-nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',8)]))}]]),h=JSON.parse('{"path":"/posts/kubernetes/Nginx-Ingress%E5%AE%89%E8%A3%85.html","title":"Nginx-Ingress安装","lang":"zh-CN","frontmatter":{"title":"Nginx-Ingress安装","tags":["kubernetes"],"categories":["kubernetes"],"description":"1. nginx pod 2. ingress-nginx install-ingress-nginx.yaml 3. 创建ingress yaml","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/Nginx-Ingress%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"Nginx-Ingress安装"}],["meta",{"property":"og:description","content":"1. nginx pod 2. ingress-nginx install-ingress-nginx.yaml 3. 创建ingress yaml"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kubernetes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx-Ingress安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"1. nginx pod","slug":"_1-nginx-pod","link":"#_1-nginx-pod","children":[]},{"level":3,"title":"2. ingress-nginx","slug":"_2-ingress-nginx","link":"#_2-ingress-nginx","children":[]},{"level":3,"title":"3. 创建ingress yaml","slug":"_3-创建ingress-yaml","link":"#_3-创建ingress-yaml","children":[]}],"readingTime":{"minutes":0.59,"words":177},"filePathRelative":"posts/kubernetes/Nginx-Ingress安装.md","excerpt":"<h3>1. nginx pod</h3>\\n<div class=\\"language-yaml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"yaml\\" data-title=\\"yaml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">apiVersion</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">v1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">kind</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">Pod</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">metadata</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">nginx-pod</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> labels</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">   app</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">nginx</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">spec</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> containers</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> - </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">nginx-container</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">   image</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">nginx:latest</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">---</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">apiVersion</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">v1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">kind</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">Service</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">metadata</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">nginx-service</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">spec</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> selector</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">   app</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">nginx</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> ports</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> - </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">protocol</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">TCP</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">   port</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">80</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">   targetPort</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">80</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">   nodePort</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">30089</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> type</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">NodePort</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);