"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2939],{6262:(s,i)=>{i.A=(s,i)=>{const n=s.__vccOpts||s;for(const[s,a]of i)n[s]=a;return n}},29:(s,i,n)=>{n.r(i),n.d(i,{comp:()=>l,data:()=>t});var a=n(641);const e={},l=(0,n(6262).A)(e,[["render",function(s,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<h3 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念"><span>一、概念</span></a></h3><h5 id="_1-什么是tun设备" tabindex="-1"><a class="header-anchor" href="#_1-什么是tun设备"><span>1.什么是TUN设备</span></a></h5><p>在计算机网络中，TUN 与 TAP 是操作系统内核中的虚拟网络设备。</p><ul><li><p>tun是网络层的虚拟网络设备，可以收发第三层数据报文包，如IP封包，因此常用于一些点对点IP隧道等。</p></li><li><p>tap是链路层的虚拟网络设备，等同于一个以太网设备，它可以收发第二层数据报文包，如以太网数据帧。Tap最常见的用途就是做为虚拟机的网卡，因为它和普通的物理网卡更加相近，也经常用作普通机器的虚拟网卡。</p></li></ul><p>用户空间的程序可以通过 TUN/TAP 设备发送数据。常见于基于TUN/TAP设备实现的VPN。比如VPN软件在用户空间创建一个TUN/TAP设备，并将其配置为将网络流量导入到VPN隧道中。然后，VPN软件可以通过TUN/TAP设备读取和写入数据，将它们加密并通过隧道发送到VPN服务器。在服务器端，VPN软件将收到的数据解密并通过TUN/TAP设备发送到网络接口，从而实现了VPN连接。</p><h5 id="_2-特点" tabindex="-1"><a class="header-anchor" href="#_2-特点"><span>2.特点</span></a></h5><p>TUN：三层设备、IP数据包、实现三层的ip隧道 TAP：二层设备、MAC地址、通常接入到虚拟交换机(bridge)上作为局域网的一个节点</p><h5 id="_3-隧道" tabindex="-1"><a class="header-anchor" href="#_3-隧道"><span>3.隧道</span></a></h5><p>Linux 原生支持多种多种层隧道，大部分底层实现原理都是基于 tun 设备。我们可以通过命令 ip tunnel help 查看 IP 隧道的相关操作。</p><p>Linux 原生一共支持 5 种 IP 隧道（常见的隧道协议）。</p><p>ipip：即 IPv4 in IPv4，在 IPv4 报文的基础上再封装一个 IPv4 报文。 gre：即通用路由封装（Generic Routing Encapsulation），定义了在任意一种网络层协议上封装其他任意一种网络层协议的机制，IPv4 和 IPv6 都适用。 sit：和 ipip 类似，不同的是 sit 是用 IPv4 报文封装 IPv6 报文，即 IPv6 over IPv4。 isatap：即站内自动隧道寻址协议（Intra-Site Automatic Tunnel Addressing Protocol），和 sit 类似，也是用于 IPv6 的隧道封装。 vti：即虚拟隧道接口（Virtual Tunnel Interface），是 cisco 提出的一种 IPsec 隧道技术。</p><h5 id="_4-用途" tabindex="-1"><a class="header-anchor" href="#_4-用途"><span>4.用途</span></a></h5><ol><li>VPN连接：可以将tun设备配置为VPN客户端或服务器，并通过该设备在不同网络之间建立安全的隧道连接，实现远程访问或局域网间互通。tun/tap设备最常用的场景是VPN，比较有名的项目有<a href="https://vtun.sourceforge.net/" target="_blank" rel="noopener noreferrer">vTun</a>、<a href="https://openvpn.net/" target="_blank" rel="noopener noreferrer">openVPN</a>。</li><li>隧道连接：可以将tun设备配置为网络隧道的一部分，用于将数据从一个网络传输到另一个网络，通常用于连接不同物理网络的互联，如通过互联网连接不同地区的局域网。</li><li>虚拟化网络：可以使用tun设备实现虚拟化网络，通过创建多个tun设备和对应的网络命名空间，可以将不同容器或虚拟机之间隔离的网络连接起来。</li><li>流量监控和过滤：可以使用tun设备来捕获传入和传出的网络流量，并进行流量监控或过滤，例如实现防火墙功能等。</li></ol><p><a href="/images/Tun-tap-osilayers-diagram.png">tun-tap工作层图</a></p><h5 id="_5-图解tun与应用程序" tabindex="-1"><a class="header-anchor" href="#_5-图解tun与应用程序"><span>5.图解Tun与应用程序</span></a></h5><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>+----------------------------------------------------------------+</span></span>\n<span class="line"><span>|                                                                |</span></span>\n<span class="line"><span>|  +--------------------+      +--------------------+            |</span></span>\n<span class="line"><span>|  | User Application A |      | User Application B |&lt;-----+     |</span></span>\n<span class="line"><span>|  +--------------------+      +--------------------+      |     |</span></span>\n<span class="line"><span>|               | 1                    | 5                 |     |</span></span>\n<span class="line"><span>|...............|......................|...................|.....|</span></span>\n<span class="line"><span>|               ↓                      ↓                   |     |</span></span>\n<span class="line"><span>|         +----------+           +----------+              |     |</span></span>\n<span class="line"><span>|         | socket A |           | socket B |              |     |</span></span>\n<span class="line"><span>|         +----------+           +----------+              |     |</span></span>\n<span class="line"><span>|                 | 2               | 6                    |     |</span></span>\n<span class="line"><span>|.................|.................|......................|.....|</span></span>\n<span class="line"><span>|                 ↓                 ↓                      |     |</span></span>\n<span class="line"><span>|             +------------------------+                 4 |     |</span></span>\n<span class="line"><span>|             | Newwork Protocol Stack |                   |     |</span></span>\n<span class="line"><span>|             +------------------------+                   |     |</span></span>\n<span class="line"><span>|                | 7                 | 3                   |     |</span></span>\n<span class="line"><span>|................|...................|.....................|.....|</span></span>\n<span class="line"><span>|                ↓                   ↓                     |     |</span></span>\n<span class="line"><span>|        +----------------+    +----------------+          |     |</span></span>\n<span class="line"><span>|        |      eth0      |    |      tun0      |          |     |</span></span>\n<span class="line"><span>|        +----------------+    +----------------+          |     |</span></span>\n<span class="line"><span>|    10.32.0.11  |                   |   192.168.3.11      |     |</span></span>\n<span class="line"><span>|                | 8                 +---------------------+     |</span></span>\n<span class="line"><span>|                |                                               |</span></span>\n<span class="line"><span>+----------------|-----------------------------------------------+</span></span>\n<span class="line"><span>                 ↓</span></span>\n<span class="line"><span>         Physical Network</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tun/tap设备的用处是将协议栈中的部分数据包转发给用户空间的应用程序，给用户空间的程序一个处理数据包的机会(数据压缩，加密)</p></blockquote><h3 id="二、vpn" tabindex="-1"><a class="header-anchor" href="#二、vpn"><span>二、VPN</span></a></h3><ol><li>创建Tun设备</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 虚拟机 1 作为服务端</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tuntap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.1.1/24</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-server</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./src/c/05-tun-tap/simpletun.c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./a.out</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 虚拟机 2 作为客户端</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tuntap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.1.2/24</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-client</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./src/c/05-tun-tap/simpletun.c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./a.out</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun-client</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 192.168.57.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ip tuntap add dev tun2 mode tun</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tuntap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># set up tun2</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ip addr add &lt;IP地址&gt;/&lt;子网掩码&gt; dev tun2</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.0.8/24</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ping &lt;B的隧道IP地址&gt;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证container1和container2之间通讯</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 172.16.0.8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过TUN的IP隧道，在物理网络上构建一条加密隧道。</p></blockquote><h3 id="四、程序监听tun设备数据" tabindex="-1"><a class="header-anchor" href="#四、程序监听tun设备数据"><span>四、程序监听TUN设备数据</span></a></h3><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package main</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>import (</span></span>\n<span class="line"><span>\t&quot;log&quot;</span></span>\n<span class="line"><span>\t&quot;os/exec&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>\t&quot;github.com/songgao/packets/ethernet&quot;</span></span>\n<span class="line"><span>\t&quot;github.com/songgao/water&quot;</span></span>\n<span class="line"><span>)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>func main() {</span></span>\n<span class="line"><span>\tconfig := water.Config{</span></span>\n<span class="line"><span>\t\tDeviceType: water.TUN,</span></span>\n<span class="line"><span>\t}</span></span>\n<span class="line"><span>\tconfig.Name = &quot;tun-client&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>\tifCe, err := water.New(config)</span></span>\n<span class="line"><span>\tif err != nil {</span></span>\n<span class="line"><span>\t\tlog.Fatalf(&quot;new err=%s&quot;, err)</span></span>\n<span class="line"><span>\t}</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>\tlog.Printf(&quot;name=%s&quot;, ifCe.Name())</span></span>\n<span class="line"><span>\tif err := exec.Command(&quot;ip&quot;, &quot;link&quot;, &quot;set&quot;, ifCe.Name(), &quot;up&quot;).Run(); err != nil {</span></span>\n<span class="line"><span>\t\tlog.Fatalf(&quot;up err=%s&quot;, err)</span></span>\n<span class="line"><span>\t}</span></span>\n<span class="line"><span>\tif err := exec.Command(&quot;ip&quot;, &quot;addr&quot;, &quot;add&quot;, &quot;10.0.42.1&quot;, &quot;dev&quot;, ifCe.Name()).Run(); err != nil {</span></span>\n<span class="line"><span>\t\tlog.Fatalf(&quot;addr add err=%s&quot;, err)</span></span>\n<span class="line"><span>\t}</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>\tvar frame ethernet.Frame</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>\tfor {</span></span>\n<span class="line"><span>\t\tframe.Resize(1500)</span></span>\n<span class="line"><span>\t\tn, err := ifCe.Read([]byte(frame))</span></span>\n<span class="line"><span>\t\tif err != nil {</span></span>\n<span class="line"><span>\t\t\tlog.Fatalf(&quot;read catch=%s&quot;, err)</span></span>\n<span class="line"><span>\t\t}</span></span>\n<span class="line"><span>\t\tframe = frame[:n]</span></span>\n<span class="line"><span>\t\tlog.Printf(&quot;Dst: %s\\n&quot;, frame.Destination())</span></span>\n<span class="line"><span>\t\tlog.Printf(&quot;Src: %s\\n&quot;, frame.Source())</span></span>\n<span class="line"><span>\t\tlog.Printf(&quot;Ethertype: % x\\n&quot;, frame.Ethertype())</span></span>\n<span class="line"><span>\t\tlog.Printf(&quot;Payload: %s\\n&quot;, string(frame.Payload()))</span></span>\n<span class="line"><span>\t}</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、tun设备数据转tap经vrouter三层转发" tabindex="-1"><a class="header-anchor" href="#五、tun设备数据转tap经vrouter三层转发"><span>五、tun设备数据转tap经vrouter三层转发</span></a></h3><h3 id="相关疑问" tabindex="-1"><a class="header-anchor" href="#相关疑问"><span>相关疑问</span></a></h3><ul><li>客户端使用openvpn访问web服务流程</li></ul><p><a href="https://opengers.github.io/openstack/openstack-base-virtual-network-devices-tuntap-veth/" target="_blank" rel="noopener noreferrer">openvpn访问过程</a></p><ul><li>ipv4转发打开持久</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/sysctl.conf</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">net.ipv4.ip_forward</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>为什么监听container1的网卡veth2时候，container1 ping无输出而container2 ping有输出</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># veth2 的 ip 10.1.1.5</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># listen veth2 </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tcpdump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -nei</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> veth2</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 无数据包</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10.1.1.5</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 有数据包</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10.1.1.5</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># lo接口本机ping又有</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tcpdump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -nei</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lo</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> container1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 127.0.0.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tcpdump 只能捕获进入它所在网络命名空间的接口的数据包，而无法捕获离开它所在网络命名空间的接口的数据包。</p><ul><li>命名空间的tun设备如何使用<code>github.com/songgao/water</code>监听</li></ul><p>创建并配置TUN设备：在命名空间中运行以下命令来创建和配置TUN设备：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># &lt;namespace&gt;是命名空间的名称</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># &lt;devicename&gt;是TUN设备的名称</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># &lt;ipaddress&gt;和&lt;netmask&gt;是TUN设备的IP地址和子网掩码</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># &lt;gateway&gt;是TUN设备的默认网关IP地址</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">namespac</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tuntap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">devicenam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tun</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">namespac</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ipaddres</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">s&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">netmas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">k&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dev</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">devicenam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">namespac</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">devicenam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">up</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netns</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">namespac</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> via</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gatewa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">y&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写的golang程序在默认命名空间中运行的应用程序。如果要在命名空间中运行该应用程序，请使用<code>ip netns exec &lt;namespace&gt;</code>来执行golang程序.</p><h3 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h3><ul><li><a href="https://cloud.tencent.com/developer/article/1680749" target="_blank" rel="noopener noreferrer">Tun/Tap接口使用指导</a></li><li><a href="https://opengers.github.io/openstack/openstack-base-virtual-network-devices-tuntap-veth/" target="_blank" rel="noopener noreferrer">云计算底层技术-虚拟网络设备(tun/tap,veth)</a></li><li><a href="https://www.baeldung.com/linux/tun-interface-purpose" target="_blank" rel="noopener noreferrer">TUN接口有什么用？</a></li><li><a href="https://blog.csdn.net/weixin_39094034/article/details/103810351" target="_blank" rel="noopener noreferrer">Linux虚拟网络基础——tun</a></li><li><a href="https://backreference.org/2010/03/26/tuntap-interface-tutorial/index.html" target="_blank" rel="noopener noreferrer">Tun/Tap 接口教程</a></li><li><a href="https://nsl.cz/using-tun-tap-in-go-or-how-to-write-vpn/" target="_blank" rel="noopener noreferrer">在go中使用TUN/TAP或如何编写VPN</a></li><li><a href="https://github.com/kanocz/lcvpn" target="_blank" rel="noopener noreferrer">https://github.com/kanocz/lcvpn</a></li><li><a href="https://www.rectcircle.cn/posts/linux-net-virual-05-tunnel/" target="_blank" rel="noopener noreferrer">Linux 网络虚拟化技术（五）隧道技术</a></li><li><a href="https://segmentfault.com/a/1190000009249039" target="_blank" rel="noopener noreferrer">Linux虚拟网络设备之tun/tap</a></li><li><a href="https://github.com/go-gost/gost" target="_blank" rel="noopener noreferrer">https://github.com/go-gost/gost</a></li></ul>',40)]))}]]),t=JSON.parse('{"path":"/posts/network/%E4%BD%BF%E7%94%A8tun%E8%AE%BE%E5%A4%87%E5%AE%9E%E7%8E%B0VPN%E9%80%9A%E4%BF%A1.html","title":"使用tun设备隧道通信","lang":"zh-CN","frontmatter":{"title":"使用tun设备隧道通信","tags":["network"],"categories":["network"],"description":"一、概念 1.什么是TUN设备 在计算机网络中，TUN 与 TAP 是操作系统内核中的虚拟网络设备。 tun是网络层的虚拟网络设备，可以收发第三层数据报文包，如IP封包，因此常用于一些点对点IP隧道等。 tap是链路层的虚拟网络设备，等同于一个以太网设备，它可以收发第二层数据报文包，如以太网数据帧。Tap最常见的用途就是做为虚拟机的网卡，因为它和普通的...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/network/%E4%BD%BF%E7%94%A8tun%E8%AE%BE%E5%A4%87%E5%AE%9E%E7%8E%B0VPN%E9%80%9A%E4%BF%A1.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"使用tun设备隧道通信"}],["meta",{"property":"og:description","content":"一、概念 1.什么是TUN设备 在计算机网络中，TUN 与 TAP 是操作系统内核中的虚拟网络设备。 tun是网络层的虚拟网络设备，可以收发第三层数据报文包，如IP封包，因此常用于一些点对点IP隧道等。 tap是链路层的虚拟网络设备，等同于一个以太网设备，它可以收发第二层数据报文包，如以太网数据帧。Tap最常见的用途就是做为虚拟机的网卡，因为它和普通的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"network"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用tun设备隧道通信\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"一、概念","slug":"一、概念","link":"#一、概念","children":[]},{"level":3,"title":"二、VPN","slug":"二、vpn","link":"#二、vpn","children":[]},{"level":3,"title":"四、程序监听TUN设备数据","slug":"四、程序监听tun设备数据","link":"#四、程序监听tun设备数据","children":[]},{"level":3,"title":"五、tun设备数据转tap经vrouter三层转发","slug":"五、tun设备数据转tap经vrouter三层转发","link":"#五、tun设备数据转tap经vrouter三层转发","children":[]},{"level":3,"title":"相关疑问","slug":"相关疑问","link":"#相关疑问","children":[]},{"level":3,"title":"相关文档","slug":"相关文档","link":"#相关文档","children":[]}],"readingTime":{"minutes":5.91,"words":1772},"filePathRelative":"posts/network/使用tun设备实现VPN通信.md","excerpt":"<h3>一、概念</h3>\\n<h5>1.什么是TUN设备</h5>\\n<p>在计算机网络中，TUN 与 TAP 是操作系统内核中的虚拟网络设备。</p>\\n<ul>\\n<li>\\n<p>tun是网络层的虚拟网络设备，可以收发第三层数据报文包，如IP封包，因此常用于一些点对点IP隧道等。</p>\\n</li>\\n<li>\\n<p>tap是链路层的虚拟网络设备，等同于一个以太网设备，它可以收发第二层数据报文包，如以太网数据帧。Tap最常见的用途就是做为虚拟机的网卡，因为它和普通的物理网卡更加相近，也经常用作普通机器的虚拟网卡。</p>\\n</li>\\n</ul>\\n<p>用户空间的程序可以通过 TUN/TAP 设备发送数据。常见于基于TUN/TAP设备实现的VPN。比如VPN软件在用户空间创建一个TUN/TAP设备，并将其配置为将网络流量导入到VPN隧道中。然后，VPN软件可以通过TUN/TAP设备读取和写入数据，将它们加密并通过隧道发送到VPN服务器。在服务器端，VPN软件将收到的数据解密并通过TUN/TAP设备发送到网络接口，从而实现了VPN连接。</p>","autoDesc":true}')}}]);