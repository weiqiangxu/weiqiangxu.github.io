"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6356],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},6944:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>t});var n=a(641);const e={},l=(0,a(6262).A)(e,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<h3 id="一、由于依赖包k8s-io-apimachinery-latest不兼容company-client-go-cache导致的冲突" tabindex="-1"><a class="header-anchor" href="#一、由于依赖包k8s-io-apimachinery-latest不兼容company-client-go-cache导致的冲突"><span>一、由于依赖包k8s.io/apimachinery@latest不兼容company/client-go/cache导致的冲突</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 包company/client-go/cache与k8s.io/apimachinery@latest不兼容</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 需要指定k8s.io/apimachinery的版本为旧版 (默认会指向最新版)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 并且k8s.io/api@latest也依赖了k8s.io/apimachinery@latest</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 所以k8s.io也需要指定旧版</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">company-nvs/internal/vnetstore</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> imports</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">company/client-go/cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> imports</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">\tk8s.io/apimachinery/pkg/util/clock:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">\tmodule</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> k8s.io/apimachinery@latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (v0.27.3),</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">\tbut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> does</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> contain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> package</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> k8s.io/apimachinery/pkg/util/clock</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="/images/conflict-package.png" alt="go module冲突" tabindex="0" loading="lazy"><figcaption>go module冲突</figcaption></figure><blockquote><p>解决问题的关键在于指定k8s.io/apimachinery和k8s.io/api的版本，但是很难找出k8s.io/api的版本问题</p></blockquote><h3 id="二、解决包冲突的方式" tabindex="-1"><a class="header-anchor" href="#二、解决包冲突的方式"><span>二、解决包冲突的方式</span></a></h3><h5 id="_1-指定包apimachinery版本-看k8s-io-client-go和company-client-go都兼容" tabindex="-1"><a class="header-anchor" href="#_1-指定包apimachinery版本-看k8s-io-client-go和company-client-go都兼容"><span>1.指定包<code>apimachinery</code>版本，看<code>k8s.io/client-go</code>和<code>company/client-go</code>都兼容</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 手动指定版本依赖</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> edit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -require</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> k8s.io/apimachinery@v0.22.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">module new_kube</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">go 1.20</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">require (</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\tgitlab.company.net/company/client-go v0.22.21</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    // 手动指定的版本</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\tk8s.io/apimachinery v0.22.4</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\tk8s.io v0.22.4</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">// go mod tidy自动整理的依赖</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">require (</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\tgithub.com/davecgh/go-spew v1.1.1 // indirect</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\tgithub.com/go-logr/logr v1.2.0 // indirect</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\tgithub.com/gogo/protobuf v1.3.2 // indirect</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看依赖关系</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apimachinery</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mod</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 清理已下载的模块缓存</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 该命令会删除 `$GOPATH/pkg/mod/cache` 目录下的所有缓存文件</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -modcache</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 清理未使用的模块缓存</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 该命令会检查项目中的依赖，并清理掉没有使用的模块缓存</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tidy</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将 `&lt;module&gt;` 替换为具体的模块路径，该命令会删除指定模块的缓存</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Go mod 的缓存是全局的，清理缓存可能会导致其他项目的构建时间增长</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -modcache</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-更新company-client-go依赖的apimachinery版本" tabindex="-1"><a class="header-anchor" href="#_2-更新company-client-go依赖的apimachinery版本"><span>2.更新<code>company/client-go</code>依赖的<code>apimachinery</code>版本</span></a></h5><p>就是更改<code>company/client-go</code>的代码，让其兼容<code>apimachinery@latest</code>;</p><h5 id="_3-有时候无论怎么指定版本都无法生效" tabindex="-1"><a class="header-anchor" href="#_3-有时候无论怎么指定版本都无法生效"><span>3.有时候无论怎么指定版本都无法生效</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 比如明明指定版本 k8s.io/apimachinery v0.22.4</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 但是 go mod tidy时候却是 k8s.io/apimachinery v0.27.4</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 这是因为有其他包依赖了 @v0.27.4</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看依赖关系</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">a.txt</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 有下面一行</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 是因为api版本27.4依赖了apimachinery@v0.27.4</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">k8s.io/api@v0.27.4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> k8s.io/apimachinery@v0.27.4</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 所以指定使用才可以解决问题</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">k8s.io/api@v0.22.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、一些经验" tabindex="-1"><a class="header-anchor" href="#三、一些经验"><span>三、一些经验</span></a></h4><ol><li>直接依赖和间接依赖</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 没有 indirect 的是直接依赖，可以直接后面的version指定版本</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 也可以通过 replace 指定版本</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># indirect 是间接依赖会跟随着直接依赖的包升级而升级间接依赖</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">\tgithub.com/bytedance/sonic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v1.9.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> indirect</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>如何找出直接依赖的包的位置</li></ol><blockquote><p>项目代码直接全局走索</p></blockquote><ol start="3"><li>如何找出间接依赖的包的引用位置</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> why</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go.uber.org/multierr</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graph</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h3><ul><li><a href="https://budougumi0617.github.io/2019/09/20/fix-go-mod-tidy-does-not-contain-package/" target="_blank" rel="noopener noreferrer">go mod tidy module x found, but does not contain package x</a></li><li><a href="https://www.jishuchi.com/books/gin-practice" target="_blank" rel="noopener noreferrer">Gin实践</a></li><li><a href="https://wu-sheng.gitbooks.io/opentracing-io/content/pages/quick-start.html" target="_blank" rel="noopener noreferrer">open-tracing中文版</a></li><li><a href="https://mp.weixin.qq.com/s/28UBEsLOAHDv530ePilKQA" target="_blank" rel="noopener noreferrer">Jaeger 链路追踪</a></li><li><a href="https://mp.weixin.qq.com/s/Ea28475_UTNaM9RNfgPqJA" target="_blank" rel="noopener noreferrer">路由中间件 - Jaeger 链路追踪</a></li><li><a href="https://www.jishuchi.com/read/gin-practice/3886" target="_blank" rel="noopener noreferrer">grpc实践</a></li><li><a href="https://www.jishuchi.com/read/gin-practice/3831" target="_blank" rel="noopener noreferrer">GC角度看内存损耗</a></li></ul>',23)]))}]]),t=JSON.parse('{"path":"/posts/go/module%E5%86%B2%E7%AA%81.html","title":"module冲突","lang":"zh-CN","frontmatter":{"title":"module冲突","index_img":"/images/bg/文章通用.png","tags":["golang"],"categories":["golang"],"date":"2023-03-12T09:40:12.000Z","excerpt":"记录一次包版本不兼容导致的冲突和解决办法","description":"一、由于依赖包k8s.io/apimachinery@latest不兼容company/client-go/cache导致的冲突 go module冲突go module冲突 解决问题的关键在于指定k8s.io/apimachinery和k8s.io/api的版本，但是很难找出k8s.io/api的版本问题 二、解决包冲突的方式 1.指定包apimac...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/go/module%E5%86%B2%E7%AA%81.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"module冲突"}],["meta",{"property":"og:description","content":"一、由于依赖包k8s.io/apimachinery@latest不兼容company/client-go/cache导致的冲突 go module冲突go module冲突 解决问题的关键在于指定k8s.io/apimachinery和k8s.io/api的版本，但是很难找出k8s.io/api的版本问题 二、解决包冲突的方式 1.指定包apimac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://weiqiangxu.github.io/images/conflict-package.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-03-12T09:40:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"module冲突\\",\\"image\\":[\\"https://weiqiangxu.github.io/images/conflict-package.png\\"],\\"datePublished\\":\\"2023-03-12T09:40:12.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"一、由于依赖包k8s.io/apimachinery@latest不兼容company/client-go/cache导致的冲突","slug":"一、由于依赖包k8s-io-apimachinery-latest不兼容company-client-go-cache导致的冲突","link":"#一、由于依赖包k8s-io-apimachinery-latest不兼容company-client-go-cache导致的冲突","children":[]},{"level":3,"title":"二、解决包冲突的方式","slug":"二、解决包冲突的方式","link":"#二、解决包冲突的方式","children":[]},{"level":3,"title":"相关文档","slug":"相关文档","link":"#相关文档","children":[]}],"readingTime":{"minutes":2.36,"words":707},"filePathRelative":"posts/go/module冲突.md","localizedDate":"2023年3月12日","autoDesc":true}')}}]);