"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7292],{6262:(e,s)=>{s.A=(e,s)=>{const i=e.__vccOpts||e;for(const[e,a]of s)i[e]=a;return i}},1360:(e,s,i)=>{i.r(s),i.d(s,{comp:()=>l,data:()=>t});var a=i(641);const n={},l=(0,i(6262).A)(n,[["render",function(e,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h1 id="docker搭建kubernetes" tabindex="-1"><a class="header-anchor" href="#docker搭建kubernetes"><span>Docker搭建Kubernetes</span></a></h1><h1 id="dockerdesktopinstall-在docker上搭建k8s集群" tabindex="-1"><a class="header-anchor" href="#dockerdesktopinstall-在docker上搭建k8s集群"><span>DockerDesktopInstall 在Docker上搭建k8s集群</span></a></h1><ol><li>Docker Desktop 自带 kubenetes</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>setting/general/kubenetes </span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>打开选项</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>Enable Kubernetes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>如何访问服务</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 本地安装 kubectl</span></span>\n<span class="line"><span># 本地执行kubectl连接desktop</span></span>\n<span class="line"><span>kubectl config use-context docker-desktop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 启动dashboard</span></span>\n<span class="line"><span>kubectl get pod -n kubernetes-dashboard</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>kubectl proxy</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 登陆dashboard</span></span>\n<span class="line"><span>127.0.0.1:8001</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建好集群以后安装-nginx-服务" tabindex="-1"><a class="header-anchor" href="#搭建好集群以后安装-nginx-服务"><span>搭建好集群以后安装 Nginx 服务</span></a></h3><p><a href="https://www.yuque.com/fairy-era/yg511q/gqx2mr#1f99473f" target="_blank" rel="noopener noreferrer">语雀许大仙kubenetes</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl create -f ./nginx_pod.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 查看Nginx服务Pod已经是Running状态</span></span>\n<span class="line"><span>kubectl get pods -n dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 将dev的Nginx的80端口暴露出给本地使用</span></span>\n<span class="line"><span>kubectl port-forward nginxpod -n dev --address 0.0.0.0 8090:80</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 访问本地8090端口</span></span>\n<span class="line"><span>http://localhost:8090/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 换一种服务暴露的方式 - 启动service的NodePort</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># service安装</span></span>\n<span class="line"><span>kubectl create -f nginx_service.yml</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 查看svc端口</span></span>\n<span class="line"><span>kubectl get svc -n dev</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 访问svc.NodePort</span></span>\n<span class="line"><span>http://127.0.0.1:30681</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="试试用helm包安装mysql" tabindex="-1"><a class="header-anchor" href="#试试用helm包安装mysql"><span>试试用Helm包安装MySQL</span></a></h3><p><a href="https://helm.sh/zh/docs/intro/quickstart/" target="_blank" rel="noopener noreferrer">Helm QuickStart</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ helm repo add bitnami https://charts.bitnami.com/bitnami</span></span>\n<span class="line"><span>$ helm install bitnami/mysql --generate-name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装以后看到 service 和 Pod 都有 MySQL 的</p></blockquote><h3 id="书写-chart-包" tabindex="-1"><a class="header-anchor" href="#书写-chart-包"><span>书写 Chart 包</span></a></h3><ol><li>生成chart包并安装</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 初始化一个目录结构</span></span>\n<span class="line"><span>helm create mychart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 删除无用的示例文件</span></span>\n<span class="line"><span>rm -rf mychart/templates/*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>开始创建资源文件</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>touch mychart/templates/configmap.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>apiVersion: v1</span></span>\n<span class="line"><span>kind: ConfigMap</span></span>\n<span class="line"><span>metadata:</span></span>\n<span class="line"><span>  name: mychart-configmap</span></span>\n<span class="line"><span>data:</span></span>\n<span class="line"><span>  myvalue: &quot;Hello World&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>touch mychart/templates/nginx_pod.yaml</span></span>\n<span class="line"><span>touch mychart/templates/nginx_service.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>helm install full-coral ./mychart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 卸载发布</span></span>\n<span class="line"><span>helm uninstall full-coral</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查看安装好的configmap</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get configmap</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',29)]))}]]),t=JSON.parse('{"path":"/posts/docker/DockerDesktopInstall.html","title":"Docker搭建Kubernetes","lang":"zh-CN","frontmatter":{"description":"Docker搭建Kubernetes DockerDesktopInstall 在Docker上搭建k8s集群 Docker Desktop 自带 kubenetes 如何访问服务 搭建好集群以后安装 Nginx 服务 语雀许大仙kubenetes 试试用Helm包安装MySQL Helm QuickStart 安装以后看到 service 和 Pod...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/docker/DockerDesktopInstall.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"Docker搭建Kubernetes"}],["meta",{"property":"og:description","content":"Docker搭建Kubernetes DockerDesktopInstall 在Docker上搭建k8s集群 Docker Desktop 自带 kubenetes 如何访问服务 搭建好集群以后安装 Nginx 服务 语雀许大仙kubenetes 试试用Helm包安装MySQL Helm QuickStart 安装以后看到 service 和 Pod..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker搭建Kubernetes\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"搭建好集群以后安装 Nginx 服务","slug":"搭建好集群以后安装-nginx-服务","link":"#搭建好集群以后安装-nginx-服务","children":[]},{"level":3,"title":"试试用Helm包安装MySQL","slug":"试试用helm包安装mysql","link":"#试试用helm包安装mysql","children":[]},{"level":3,"title":"书写 Chart 包","slug":"书写-chart-包","link":"#书写-chart-包","children":[]}],"readingTime":{"minutes":1.03,"words":308},"filePathRelative":"posts/docker/DockerDesktopInstall.md","excerpt":"\\n<h1>DockerDesktopInstall 在Docker上搭建k8s集群</h1>\\n<ol>\\n<li>Docker Desktop 自带 kubenetes</li>\\n</ol>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>setting/general/kubenetes </span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>打开选项</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>Enable Kubernetes</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);