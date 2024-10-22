"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5539],{6262:(e,n)=>{n.A=(e,n)=>{const i=e.__vccOpts||e;for(const[e,s]of n)i[e]=s;return i}},4126:(e,n,i)=>{i.r(n),i.d(n,{comp:()=>l,data:()=>t});var s=i(641);const a={},l=(0,i(6262).A)(a,[["render",function(e,n){return(0,s.uX)(),(0,s.CE)("div",null,n[0]||(n[0]=[(0,s.Fv)('<h1 id="runner-镜像制作" tabindex="-1"><a class="header-anchor" href="#runner-镜像制作"><span>runner 镜像制作</span></a></h1><p><a href="https://www.runoob.com/docker/docker-dockerfile.html" target="_blank" rel="noopener noreferrer">docker镜像制作</a></p><h3 id="制作-fmt-lint-的go镜像" tabindex="-1"><a class="header-anchor" href="#制作-fmt-lint-的go镜像"><span>制作 fmt &amp;&amp; lint 的go镜像</span></a></h3><ol><li>创建文件</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>touch Dockerfile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>创建用于fmt &amp;&amp; lint 的 go 镜像</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>FROM golang:latest</span></span>\n<span class="line"><span>RUN go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.49.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在Dockerfile所在的目录制作镜像</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 制作镜像在本地</span></span>\n<span class="line"><span>docker build -t golang:v2 .</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 查看制作好的镜像</span></span>\n<span class="line"><span>docker images</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 运行新的镜像</span></span>\n<span class="line"><span>docker run -t -i golang:v2 /bin/bash</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 打标签</span></span>\n<span class="line"><span>docker tag golang:v2 435861851/golang:1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>上传镜像到docker hub</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker login</span></span>\n<span class="line"><span>docker push 435861851/golang:1.0</span></span>\n<span class="line"><span>docker logout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11)]))}]]),t=JSON.parse('{"path":"/posts/gitlab/runner%E9%95%9C%E5%83%8F%E5%88%B6%E4%BD%9C.html","title":"runner 镜像制作","lang":"zh-CN","frontmatter":{"hide":true,"description":"runner 镜像制作 docker镜像制作 制作 fmt && lint 的go镜像 创建文件 创建用于fmt && lint 的 go 镜像 在Dockerfile所在的目录制作镜像 上传镜像到docker hub","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/gitlab/runner%E9%95%9C%E5%83%8F%E5%88%B6%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"runner 镜像制作"}],["meta",{"property":"og:description","content":"runner 镜像制作 docker镜像制作 制作 fmt && lint 的go镜像 创建文件 创建用于fmt && lint 的 go 镜像 在Dockerfile所在的目录制作镜像 上传镜像到docker hub"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"runner 镜像制作\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"制作 fmt && lint 的go镜像","slug":"制作-fmt-lint-的go镜像","link":"#制作-fmt-lint-的go镜像","children":[]}],"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"posts/gitlab/runner镜像制作.md","excerpt":"\\n<p><a href=\\"https://www.runoob.com/docker/docker-dockerfile.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docker镜像制作</a></p>\\n<h3>制作 fmt &amp;&amp; lint 的go镜像</h3>\\n<ol>\\n<li>创建文件</li>\\n</ol>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>touch Dockerfile</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);