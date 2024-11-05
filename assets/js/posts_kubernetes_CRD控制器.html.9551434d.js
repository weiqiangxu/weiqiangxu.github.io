"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8053],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,e]of i)a[s]=e;return a}},3287:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>l,data:()=>t});var e=a(641);const n={},l=(0,a(6262).A)(n,[["render",function(s,i){return(0,e.uX)(),(0,e.CE)("div",null,i[0]||(i[0]=[(0,e.Fv)('<h4 id="一、quick-start" tabindex="-1"><a class="header-anchor" href="#一、quick-start"><span>一、quick start</span></a></h4><blockquote><p>来个CRD控制器的QuickStart，从code gender代码生成到编译控制器，运行控制器查看监听事件，以及informer设计</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 基于版本v1.27.2</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/kubernetes/kubernetes.git</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v1.27.2</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /kubernetes/staging/src/k8s.io/sample-controller</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行之前</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> samplecontroller</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> register.go</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 定义包package名称</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v1alpha1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> doc.go</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       # 声明要使用deepconpy-gen以及groupName</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> register.go</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 注册资源</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> types.go</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     # 定义crd资源对应的go中的结构</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行code gender生成代码</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubernetes/staging/src/k8s.io/sample-controller</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./hack/update-codegen.sh</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更改 addFunc. cache.ResourceEventHandlerFuncs.AddFunc</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubernetes/staging/src/k8s.io/sample-controller/controller.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  代码生成后的文件</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apis</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> samplecontroller</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">     ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> register.go</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">     └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v1alpha1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> doc.go</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> register.go</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> types.go</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zz_generated.deepcopy.go</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     # 生成的深拷贝方法</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generated</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                # 生成的文件夹</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clientset</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                            # 与Kubernetes API交互的Go客户端库</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> informers</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                            # Kubernetes API资源上监视和响应高级别客户端库</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> listers</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                              # 本地缓存用于资源查询</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 编译controller 设置匹配的cpu架构和os</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GOOS=&quot;linux&quot;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GOARCH=&quot;amd64&quot;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubernetes/staging/src/k8s.io/sample-controller</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装k8s的环境</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubelet</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Kubernetes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v1.27.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># crd import</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubernetes/staging/src/k8s.io/sample-controller/artifacts/examples/crd.yaml</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubernetes/staging/src/k8s.io/sample-controller/artifacts/examples/example-foo.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动控制器查看CRD监听事件</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./sample-controller</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --kubeconfig=/root/.kube/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、客户端注册实现监听机制" tabindex="-1"><a class="header-anchor" href="#二、客户端注册实现监听机制"><span>二、客户端注册实现监听机制</span></a></h3><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 注册clientset客户端</span></span>\n<span class="line"><span>// 用于生成informer启动</span></span>\n<span class="line"><span>informers.NewSharedInformerFactory(clientset.NewForConfig(cfg)).Start(ctx)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>// clientset注入控制器后启动</span></span>\n<span class="line"><span>Controller.run()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h3><ul><li>List-watch设计</li></ul><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1. List-watch : List:http短连接；watch:http长连接；</span></span>\n<span class="line"><span>2. Informer:</span></span>\n<span class="line"><span>        Informer是Client-go中的一个核心工具包</span></span>\n<span class="line"><span>        Informer实例中的Lister()方法（该方法包含 了 Get 和 List 方法） -- 可用于List/Get Kubernetes中的Object</span></span>\n<span class="line"><span>        很少会直接请求k8s的API进行 List Get资源</span></span>\n<span class="line"><span>3. Informer设计：</span></span>\n<span class="line"><span>        依赖Kubernetes List/Watch API</span></span>\n<span class="line"><span>        可监听事件并触发回调函数的二级缓存工具包</span></span>\n<span class="line"><span>        Informer只会调用Kubernetes List和Watch两种类型的API</span></span>\n<span class="line"><span>        List/Get Kubernetes中的Object，Informer不会去请求Kubernetes API，而是查找缓存在本地内存中的数据</span></span>\n<span class="line"><span>        Informer完全依赖Watch API去维护缓存，没有任何resync机制</span></span>\n<span class="line"><span>        Informer通过Kubernetes Watch API监听某种resource下的所有事件</span></span>\n<span class="line"><span>4. Informer回调实现：ResourceEventHandler实例；OnAdd(obj interface{})、OnUpdate(oldObj, newObj interface{})、OnDelete(obj interface{})</span></span>\n<span class="line"><span>5. Informer缓存： 二级缓存 、DeltaFIFO、LocalStore</span></span>\n<span class="line"><span>6. Informaer: Reflect: ListerWatcher的Even丢给Reflector处理、Reflector处理后以Delta结果转入Delta_fifo</span></span>\n<span class="line"><span>7. Indexer: 索引器、加速数据的检索</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h3><ul><li><a href="https://github.com/kubernetes/kubernetes/tree/v1.27.2" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes/kubernetes/tree/v1.27.2</a></li><li><a href="https://zhuanlan.zhihu.com/p/59660536" target="_blank" rel="noopener noreferrer">知乎/理解 K8S 的设计精髓之 List-Watch机制和Informer模块</a></li><li><a href="https://blog.csdn.net/ChrisYoung95/article/details/111598273" target="_blank" rel="noopener noreferrer">CSDN/理解K8S-Informer机制</a></li><li><a href="https://zhuanlan.zhihu.com/p/416371779" target="_blank" rel="noopener noreferrer">知乎/k8s之informer设计</a></li><li><a href="https://github.com/kubernetes/code-generator" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes/code-generator</a></li><li><a href="https://juejin.cn/post/7096484178128011277" target="_blank" rel="noopener noreferrer">code-generator简单介绍 - 写的挺好</a></li><li><a href="https://herbguo.gitbook.io/client-go/" target="_blank" rel="noopener noreferrer">https://herbguo.gitbook.io/client-go/</a></li><li><a href="https://github.com/kubernetes/client-go" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes/client-go 写的非常非常好</a></li></ul>',17)]))}]]),t=JSON.parse('{"path":"/posts/kubernetes/CRD%E6%8E%A7%E5%88%B6%E5%99%A8.html","title":"CRD控制器","lang":"zh-CN","frontmatter":{"title":"CRD控制器","tags":["kubernetes"],"categories":["kubernetes"],"description":"一、quick start 来个CRD控制器的QuickStart，从code gender代码生成到编译控制器，运行控制器查看监听事件，以及informer设计 二、客户端注册实现监听机制 Q&A List-watch设计 参考资料 https://github.com/kubernetes/kubernetes/tree/v1.27.2 知乎/理解...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/CRD%E6%8E%A7%E5%88%B6%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"CRD控制器"}],["meta",{"property":"og:description","content":"一、quick start 来个CRD控制器的QuickStart，从code gender代码生成到编译控制器，运行控制器查看监听事件，以及informer设计 二、客户端注册实现监听机制 Q&A List-watch设计 参考资料 https://github.com/kubernetes/kubernetes/tree/v1.27.2 知乎/理解..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kubernetes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CRD控制器\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"二、客户端注册实现监听机制","slug":"二、客户端注册实现监听机制","link":"#二、客户端注册实现监听机制","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]},{"level":3,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"posts/kubernetes/CRD控制器.md","excerpt":"<h4>一、quick start</h4>\\n<blockquote>\\n<p>来个CRD控制器的QuickStart，从code gender代码生成到编译控制器，运行控制器查看监听事件，以及informer设计</p>\\n</blockquote>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 基于版本v1.27.2</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> clone</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://github.com/kubernetes/kubernetes.git</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> checkout</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> v1.27.2</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /kubernetes/staging/src/k8s.io/sample-controller</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);