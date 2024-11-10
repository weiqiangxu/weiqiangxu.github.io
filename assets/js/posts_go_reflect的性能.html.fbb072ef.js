"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7182],{6262:(e,s)=>{s.A=(e,s)=>{const n=e.__vccOpts||e;for(const[e,a]of s)n[e]=a;return n}},1429:(e,s,n)=>{n.r(s),n.d(s,{comp:()=>l,data:()=>t});var a=n(641);const i={},l=(0,n(6262).A)(i,[["render",function(e,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h1 id="reflect的性能" tabindex="-1"><a class="header-anchor" href="#reflect的性能"><span>Reflect的性能</span></a></h1><h3 id="反射的用途" tabindex="-1"><a class="header-anchor" href="#反射的用途"><span>反射的用途</span></a></h3><ol><li>对象创建</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>reflect.New(reflect.TypeOf(Config{})).Interface().(*Config)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>对象字段值修改</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ins := reflect.New(reflect.TypeOf(Config{})).Elem()</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># index 访问</span></span>\n<span class="line"><span>ins.Field(0).SetString(&quot;name&quot;)</span></span>\n<span class="line"><span># 字段名访问</span></span>\n<span class="line"><span>ins.FieldByName(&quot;Name&quot;).SetString(&quot;name&quot;)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 性能比较</span></span>\n<span class="line"><span>FieldByName 逐个遍历时间复杂度 O(n)</span></span>\n<span class="line"><span>Field(index) 时间复杂度 O(1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免使用反射比如-json-marshal-和-json-unmarshal" tabindex="-1"><a class="header-anchor" href="#避免使用反射比如-json-marshal-和-json-unmarshal"><span>避免使用反射比如 json.Marshal 和 json.UnMarshal</span></a></h3><p><a href="https://github.com/mailru/easyjson" target="_blank" rel="noopener noreferrer">easyJSON</a></p>',8)]))}]]),t=JSON.parse('{"path":"/posts/go/reflect%E7%9A%84%E6%80%A7%E8%83%BD.html","title":"Reflect的性能","lang":"zh-CN","frontmatter":{"description":"Reflect的性能 反射的用途 对象创建 对象字段值修改 避免使用反射比如 json.Marshal 和 json.UnMarshal easyJSON","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/go/reflect%E7%9A%84%E6%80%A7%E8%83%BD.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"Reflect的性能"}],["meta",{"property":"og:description","content":"Reflect的性能 反射的用途 对象创建 对象字段值修改 避免使用反射比如 json.Marshal 和 json.UnMarshal easyJSON"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Reflect的性能\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"反射的用途","slug":"反射的用途","link":"#反射的用途","children":[]},{"level":3,"title":"避免使用反射比如 json.Marshal 和 json.UnMarshal","slug":"避免使用反射比如-json-marshal-和-json-unmarshal","link":"#避免使用反射比如-json-marshal-和-json-unmarshal","children":[]}],"readingTime":{"minutes":0.29,"words":88},"filePathRelative":"posts/go/reflect的性能.md","excerpt":"\\n<h3>反射的用途</h3>\\n<ol>\\n<li>对象创建</li>\\n</ol>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>reflect.New(reflect.TypeOf(Config{})).Interface().(*Config)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);