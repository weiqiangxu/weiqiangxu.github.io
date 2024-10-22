"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3720],{6262:(s,n)=>{n.A=(s,n)=>{const e=s.__vccOpts||s;for(const[s,a]of n)e[s]=a;return e}},2496:(s,n,e)=>{e.r(n),e.d(n,{comp:()=>l,data:()=>t});var a=e(641);const i={},l=(0,e(6262).A)(i,[["render",function(s,n){return(0,a.uX)(),(0,a.CE)("div",null,n[0]||(n[0]=[(0,a.Fv)('<h1 id="go-modules" tabindex="-1"><a class="header-anchor" href="#go-modules"><span>GO Modules</span></a></h1><blockquote><p>淘汰现有的 GOPATH 使用模式</p></blockquote><h1 id="go-mod-相关环境变量" tabindex="-1"><a class="header-anchor" href="#go-mod-相关环境变量"><span>GO MOD 相关环境变量</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ go env</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># Go modules 的开关</span></span>\n<span class="line"><span>GO111MODULE=&quot;auto&quot;</span></span>\n<span class="line"><span># 镜像站点</span></span>\n<span class="line"><span>GOPROXY=&quot;https://proxy.golang.org,direct&quot;</span></span>\n<span class="line"><span>GONOPROXY=&quot;&quot;</span></span>\n<span class="line"><span># 用于保证拉取到的模块版本数据未经过篡改</span></span>\n<span class="line"><span>GOSUMDB=&quot;sum.golang.org&quot;</span></span>\n<span class="line"><span>GONOSUMDB=&quot;&quot;</span></span>\n<span class="line"><span>GOPRIVATE=&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启" tabindex="-1"><a class="header-anchor" href="#开启"><span>开启</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> $ go env -w GO111MODULE=on</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="https://www.yuque.com/aceld/golang/ithv8f" target="_blank" rel="noopener noreferrer">GO修养之路</a></p>',7)]))}]]),t=JSON.parse('{"path":"/posts/go/8.GoModules.html","title":"GoModules","lang":"zh-CN","frontmatter":{"title":"GoModules","category":["go"],"tag":["go"],"description":"GO Modules 淘汰现有的 GOPATH 使用模式 GO MOD 相关环境变量 开启 GO修养之路","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/go/8.GoModules.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"GoModules"}],["meta",{"property":"og:description","content":"GO Modules 淘汰现有的 GOPATH 使用模式 GO MOD 相关环境变量 开启 GO修养之路"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"go"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GoModules\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"开启","slug":"开启","link":"#开启","children":[]}],"readingTime":{"minutes":0.27,"words":81},"filePathRelative":"posts/go/8.GoModules.md","excerpt":"\\n<blockquote>\\n<p>淘汰现有的 GOPATH 使用模式</p>\\n</blockquote>\\n<h1>GO MOD 相关环境变量</h1>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>$ go env</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># Go modules 的开关</span></span>\\n<span class=\\"line\\"><span>GO111MODULE=\\"auto\\"</span></span>\\n<span class=\\"line\\"><span># 镜像站点</span></span>\\n<span class=\\"line\\"><span>GOPROXY=\\"https://proxy.golang.org,direct\\"</span></span>\\n<span class=\\"line\\"><span>GONOPROXY=\\"\\"</span></span>\\n<span class=\\"line\\"><span># 用于保证拉取到的模块版本数据未经过篡改</span></span>\\n<span class=\\"line\\"><span>GOSUMDB=\\"sum.golang.org\\"</span></span>\\n<span class=\\"line\\"><span>GONOSUMDB=\\"\\"</span></span>\\n<span class=\\"line\\"><span>GOPRIVATE=\\"\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);