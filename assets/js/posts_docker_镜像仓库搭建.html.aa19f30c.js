"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[631],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},2739:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>l,data:()=>t});var n=a(641);const e={},l=(0,a(6262).A)(e,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,i[0]||(i[0]=[(0,n.Fv)('<h3 id="_1-本地创建私服镜像目录" tabindex="-1"><a class="header-anchor" href="#_1-本地创建私服镜像目录"><span>1.本地创建私服镜像目录</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> auth</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test/docker-compose/docker-compose.yml</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建一个用户，执行完成后会生成文件 /home/auth/registry.password</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test/auth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">htpasswd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Bc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry.password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># docker-compose.yml</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3&#39;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  registry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">registry:2</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;5001:5000&quot;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      REGISTRY_AUTH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">htpasswd</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      REGISTRY_AUTH_HTPASSWD_REALM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MyRegistry</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      REGISTRY_AUTH_HTPASSWD_PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/auth/registry.password</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/data</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">~/test/auth:/auth</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">~/test/data:/data</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test/docker-compose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-访问registy服务" tabindex="-1"><a class="header-anchor" href="#_2-访问registy服务"><span>2.访问registy服务</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 访问输入用户名密码 </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GET</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;root:123456&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://localhost:5001/v2/_catalog</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 登陆docker registry</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> login</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:5001</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Username:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Password:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Login</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Succeeded</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加私有库到docker配置" tabindex="-1"><a class="header-anchor" href="#_3-添加私有库到docker配置"><span>3.添加私有库到docker配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># /etc/docker/daemon.json or ~/.docker/daemon.json</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> &quot;insecure-registries&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   &quot;localhost:5001&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 登陆registry</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> login</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:5001</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 构建镜像到本地</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-project</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-image:v0.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 推送镜像到harbor私有库</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># docker push &lt;Registry&gt;/&lt;Image&gt;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ovs-aline:v0.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:5001/devops/ovs-aline:v0.0.1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># docker push registry.example.com/myimage</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># # 在 ~/test/data/ 目录存放镜像文件</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:5001/devops/ovs-aline:v0.0.1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># docker pull registry.example.com/myimage</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:5001/devops/ovs-aline:v0.0.1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看仓库镜像列表</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GET</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;root:123456&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://localhost:5001/v2/_catalog</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;repositories&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;devops/ovs-aline&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">]}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看仓库镜像tag</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GET</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;root:123456&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://localhost:5001/v2/devops/ovs-aline/tags/list</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;name&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;devops/ovs-aline&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;tags&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;v0.0.1&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">]}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-web服务提供registy可视化界面" tabindex="-1"><a class="header-anchor" href="#_4-web服务提供registy可视化界面"><span>4.web服务提供registy可视化界面</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inspect</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> ${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">registry_id</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># start</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8080:8080</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry-web</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose_default</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose-registry-1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> REGISTRY_URL=http://docker-compose-registry-1:5000/v2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> REGISTRY_BASIC_AUTH=&quot;cm9vdDoxMjM0NTY=&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> REGISTRY_NAME=localhost</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  hyper/docker-registry-web</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># REGISTRY_BASIC_AUTH其实是一个base64</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 对 `username:password` 进行base64 encode</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h3><h5 id="_1-htpasswd是什么命令" tabindex="-1"><a class="header-anchor" href="#_1-htpasswd是什么命令"><span>1.htpasswd是什么命令</span></a></h5><p>htpasswd命令是Apache Web服务器的一个工具，用于创建和管理用户账户文件的命令行工具，可用于创建新用户、更改密码并删除已有用户。</p><h5 id="_2-registry的registry-auth-htpasswd-realm参数是干嘛的" tabindex="-1"><a class="header-anchor" href="#_2-registry的registry-auth-htpasswd-realm参数是干嘛的"><span>2.registry的REGISTRY_AUTH_HTPASSWD_REALM参数是干嘛的</span></a></h5><p>REGISTRY_AUTH_HTPASSWD_REALM参数是用于设置Docker registry的基本认证（Basic Authentication）的HTTP Realm。如果设置了REGISTRY_AUTH_HTPASSWD_REALM参数值为&quot;My Docker Registry&quot;，则用户在登录时将看到类似于&quot;Please enter your My Docker Registry credentials&quot;的提示，有助于确保用户知道他们正在访问受保护的资源。</p><h5 id="_3-registry的参数-registry-storage-filesystem-rootdirectory-是干嘛的" tabindex="-1"><a class="header-anchor" href="#_3-registry的参数-registry-storage-filesystem-rootdirectory-是干嘛的"><span>3.registry的参数 REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY 是干嘛的</span></a></h5><p>REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY参数是用于设置Docker registry存储镜像的根目录。默认情况下，Docker registry使用/var/lib/registry作为默认的存储目录。</p><h5 id="_4-监听网卡" tabindex="-1"><a class="header-anchor" href="#_4-监听网卡"><span>4.监听网卡</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tcpdump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -nei</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lo0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5001</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> telnet</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 127.0.0.1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5001</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-docker-registry的token" tabindex="-1"><a class="header-anchor" href="#_5-docker-registry的token"><span>5.docker registry的token</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.docker/config.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对<code>username:password</code>进行base64 encode可以获得。</p><h3 id="相关资料" tabindex="-1"><a class="header-anchor" href="#相关资料"><span>相关资料</span></a></h3><ul><li><a href="https://hub.docker.com/_/registry" target="_blank" rel="noopener noreferrer">https://hub.docker.com/_/registry</a></li></ul>',24)]))}]]),t=JSON.parse('{"path":"/posts/docker/%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E6%90%AD%E5%BB%BA.html","title":"镜像仓库搭建","lang":"zh-CN","frontmatter":{"title":"镜像仓库搭建","icon":"object-group","order":2,"category":["docker"],"tag":["docker"],"description":"1.本地创建私服镜像目录 2.访问registy服务 3.添加私有库到docker配置 4.web服务提供registy可视化界面 Q&A 1.htpasswd是什么命令 htpasswd命令是Apache Web服务器的一个工具，用于创建和管理用户账户文件的命令行工具，可用于创建新用户、更改密码并删除已有用户。 2.registry的REGISTRY...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/docker/%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"镜像仓库搭建"}],["meta",{"property":"og:description","content":"1.本地创建私服镜像目录 2.访问registy服务 3.添加私有库到docker配置 4.web服务提供registy可视化界面 Q&A 1.htpasswd是什么命令 htpasswd命令是Apache Web服务器的一个工具，用于创建和管理用户账户文件的命令行工具，可用于创建新用户、更改密码并删除已有用户。 2.registry的REGISTRY..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"docker"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"镜像仓库搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"1.本地创建私服镜像目录","slug":"_1-本地创建私服镜像目录","link":"#_1-本地创建私服镜像目录","children":[]},{"level":3,"title":"2.访问registy服务","slug":"_2-访问registy服务","link":"#_2-访问registy服务","children":[]},{"level":3,"title":"3.添加私有库到docker配置","slug":"_3-添加私有库到docker配置","link":"#_3-添加私有库到docker配置","children":[]},{"level":3,"title":"4.web服务提供registy可视化界面","slug":"_4-web服务提供registy可视化界面","link":"#_4-web服务提供registy可视化界面","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]},{"level":3,"title":"相关资料","slug":"相关资料","link":"#相关资料","children":[]}],"readingTime":{"minutes":1.9,"words":569},"filePathRelative":"posts/docker/镜像仓库搭建.md","excerpt":"<h3>1.本地创建私服镜像目录</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mkdir</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ~/test</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ~/test</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &amp;&amp; </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">mkdir</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> data</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> auth</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> docker-compose</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> touch</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ~/test/docker-compose/docker-compose.yml</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 创建一个用户，执行完成后会生成文件 /home/auth/registry.password</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ~/test/auth</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &amp;&amp; </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">htpasswd</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -Bc</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> registry.password</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> root</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);