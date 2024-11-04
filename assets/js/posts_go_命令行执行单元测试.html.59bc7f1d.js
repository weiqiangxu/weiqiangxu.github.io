"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9081],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},4029:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>t});var n=a(641);const l={},e=(0,a(6262).A)(l,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<h3 id="一、样例代码" tabindex="-1"><a class="header-anchor" href="#一、样例代码"><span>一、样例代码</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go.mod</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tool</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> net.go</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> net_test.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">module</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github.com/ovn-org/libovsdb</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1.20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、执行单元测试" tabindex="-1"><a class="header-anchor" href="#二、执行单元测试"><span>二、执行单元测试</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/libovsdb</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行包内部所有单元测试</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 其中 /tool 是 module github.com/ovn-org/libovsdb 的包路径</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># golang 会自动找到该路径下的package</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github.com/ovn-org/libovsdb/tool</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看执行结果 -v</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行部分函数 -run &lt;unit_test_func_name&gt;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TestGetUser</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github.com/ovn-org/libovsdb/tool</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译单元测试程序放到其他环境执行" tabindex="-1"><a class="header-anchor" href="#编译单元测试程序放到其他环境执行"><span>编译单元测试程序放到其他环境执行</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -c 表示生成二进制程序到pkg.test并且不运行</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 通过-o可以更改二进制程序名称</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 本地将生成 tester 二进制程序</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tester</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github.com/ovn-org/libovsdb/tool</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 本地将生成 tool.test 程序</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github.com/ovn-org/libovsdb/tool</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 相对路径 测试所有包</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./...</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 测试单个</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./internal/vnetstore</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行二进制程序</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/tool.test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --help</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/tool.test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -test.v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -test.run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FuncName</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://geektutu.com/post/high-performance-go.html" target="_blank" rel="noopener noreferrer">GO语言高性能编程</a></li></ul>',8)]))}]]),t=JSON.parse('{"path":"/posts/go/%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%89%A7%E8%A1%8C%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.html","title":"命令行执行单元测试","lang":"zh-CN","frontmatter":{"title":"命令行执行单元测试","tags":["golang"],"categories":["golang"],"description":"一、样例代码 二、执行单元测试 编译单元测试程序放到其他环境执行 GO语言高性能编程","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/go/%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%89%A7%E8%A1%8C%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"命令行执行单元测试"}],["meta",{"property":"og:description","content":"一、样例代码 二、执行单元测试 编译单元测试程序放到其他环境执行 GO语言高性能编程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"golang"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令行执行单元测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"一、样例代码","slug":"一、样例代码","link":"#一、样例代码","children":[]},{"level":3,"title":"二、执行单元测试","slug":"二、执行单元测试","link":"#二、执行单元测试","children":[]},{"level":3,"title":"编译单元测试程序放到其他环境执行","slug":"编译单元测试程序放到其他环境执行","link":"#编译单元测试程序放到其他环境执行","children":[]}],"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"posts/go/命令行执行单元测试.md","excerpt":"<h3>一、样例代码</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">├──</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> go.mod</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">└──</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> tool</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    ├──</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> net.go</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    └──</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> net_test.go</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);