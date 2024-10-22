"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7979],{6262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},6755:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>p});var e=a(641);const i={},l=(0,a(6262).A)(i,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,n[0]||(n[0]=[(0,e.Fv)('<h1 id="redis集群模式搭建" tabindex="-1"><a class="header-anchor" href="#redis集群模式搭建"><span>Redis集群模式搭建</span></a></h1><ol><li>redis-conf</li><li>redis-cli --cluster create</li></ol><h3 id="redis-conf配置" tabindex="-1"><a class="header-anchor" href="#redis-conf配置"><span>Redis-conf配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#注释掉 bind 项，默认监听所有网卡 70 #bind 127.0.0.1</span></span>\n<span class="line"><span>#关闭保护模式 89 protected-mode no</span></span>\n<span class="line"><span>#redis默认端口6379 不用修改 port 6379</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 开启AOF持久化</span></span>\n<span class="line"><span>appendonly yes</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 开启守护进程</span></span>\n<span class="line"><span>daemonize yes</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 指定redis进程的PID文件存放位置</span></span>\n<span class="line"><span>pidfile &quot;/home/centos/redis/redis-6.2.6/logs/redis/redis.pid&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># log文件输出位置，如果进程以守护进程的方式运行，此处又将输出文件设置为stdout的话，就会将日志信息输出到/dev/null里面去了</span></span>\n<span class="line"><span>logfile &quot;/home/centos/redis/redis-6.2.6/logs/redis/redis.log&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 默认16个数据库</span></span>\n<span class="line"><span>databases 16</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 指定本地数据库文件名</span></span>\n<span class="line"><span>dbfilename &quot;dump.db&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 指定本地数据问就按存放位置</span></span>\n<span class="line"><span>dir &quot;/home/centos/redis/redis-6.2.6/logs/data&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 设置redis连接密码，如果配置了连接密码，客户端在连接redis是需要通过AUTH&lt;password&gt;命令提供密码，默认关闭</span></span>\n<span class="line"><span>requirepass &quot;xyredis&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 开启集群功能</span></span>\n<span class="line"><span>cluster-enabled yes</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 群集名称文件设置</span></span>\n<span class="line"><span>cluster-config-file nodes-6379.conf</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 取消注释群集超时时间设置</span></span>\n<span class="line"><span>cluster-node-timeout 15000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务启动和连接" tabindex="-1"><a class="header-anchor" href="#服务启动和连接"><span>服务启动和连接</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>./redis-server /home/centos/redis/redis-6.2.6/redis.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>redis-cli --cluster create --cluster-replicas 1 192.168.0.1:6379 192.168.0.2:6379 192.168.0.3:6379 -a redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>redis-cli -c -p 6379 -a redis (-a 表示授权账户/密码登录 -c表示集群模式)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="full-stack-knowledge-system" tabindex="-1"><a class="header-anchor" href="#full-stack-knowledge-system"><span>Full_stack_knowledge_system</span></a></h1><p><a href="https://pdai.tech/" target="_blank" rel="noopener noreferrer">pdai.tech</a></p>',10)]))}]]),p=JSON.parse('{"path":"/posts/redis/%E5%88%86%E7%89%87RedisCluster%E6%90%AD%E5%BB%BA.html","title":"Redis集群模式搭建","lang":"zh-CN","frontmatter":{"hide":true,"description":"Redis集群模式搭建 redis-conf redis-cli --cluster create Redis-conf配置 服务启动和连接 Full_stack_knowledge_system pdai.tech","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/redis/%E5%88%86%E7%89%87RedisCluster%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"Redis集群模式搭建"}],["meta",{"property":"og:description","content":"Redis集群模式搭建 redis-conf redis-cli --cluster create Redis-conf配置 服务启动和连接 Full_stack_knowledge_system pdai.tech"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis集群模式搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"Redis-conf配置","slug":"redis-conf配置","link":"#redis-conf配置","children":[]},{"level":3,"title":"服务启动和连接","slug":"服务启动和连接","link":"#服务启动和连接","children":[]}],"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"posts/redis/分片RedisCluster搭建.md","excerpt":"\\n<ol>\\n<li>redis-conf</li>\\n<li>redis-cli --cluster create</li>\\n</ol>\\n<h3>Redis-conf配置</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>#注释掉 bind 项，默认监听所有网卡 70 #bind 127.0.0.1</span></span>\\n<span class=\\"line\\"><span>#关闭保护模式 89 protected-mode no</span></span>\\n<span class=\\"line\\"><span>#redis默认端口6379 不用修改 port 6379</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 开启AOF持久化</span></span>\\n<span class=\\"line\\"><span>appendonly yes</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 开启守护进程</span></span>\\n<span class=\\"line\\"><span>daemonize yes</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 指定redis进程的PID文件存放位置</span></span>\\n<span class=\\"line\\"><span>pidfile \\"/home/centos/redis/redis-6.2.6/logs/redis/redis.pid\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># log文件输出位置，如果进程以守护进程的方式运行，此处又将输出文件设置为stdout的话，就会将日志信息输出到/dev/null里面去了</span></span>\\n<span class=\\"line\\"><span>logfile \\"/home/centos/redis/redis-6.2.6/logs/redis/redis.log\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 默认16个数据库</span></span>\\n<span class=\\"line\\"><span>databases 16</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 指定本地数据库文件名</span></span>\\n<span class=\\"line\\"><span>dbfilename \\"dump.db\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 指定本地数据问就按存放位置</span></span>\\n<span class=\\"line\\"><span>dir \\"/home/centos/redis/redis-6.2.6/logs/data\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 设置redis连接密码，如果配置了连接密码，客户端在连接redis是需要通过AUTH&lt;password&gt;命令提供密码，默认关闭</span></span>\\n<span class=\\"line\\"><span>requirepass \\"xyredis\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 开启集群功能</span></span>\\n<span class=\\"line\\"><span>cluster-enabled yes</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 群集名称文件设置</span></span>\\n<span class=\\"line\\"><span>cluster-config-file nodes-6379.conf</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 取消注释群集超时时间设置</span></span>\\n<span class=\\"line\\"><span>cluster-node-timeout 15000</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);