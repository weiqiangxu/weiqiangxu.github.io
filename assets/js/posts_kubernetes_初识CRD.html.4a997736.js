"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3653],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,e]of i)a[s]=e;return a}},6052:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>l,data:()=>t});var e=a(641);const n={},l=(0,a(6262).A)(n,[["render",function(s,i){return(0,e.uX)(),(0,e.CE)("div",null,i[0]||(i[0]=[(0,e.Fv)('<h3 id="_1-创建自定义资源" tabindex="-1"><a class="header-anchor" href="#_1-创建自定义资源"><span>1.创建自定义资源</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> resourcedefinition.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">apiextensions.k8s.io/v1</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CustomResourceDefinition</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">metadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 名字必需与下面的 spec 字段匹配，并且格式为 &#39;&lt;名称的复数形式&gt;.&lt;组名&gt;&#39;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">crontabs.stable.example.com</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 组名称，用于 REST API: /apis/&lt;组&gt;/&lt;版本&gt;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">stable.example.com</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 列举此 CustomResourceDefinition 所支持的版本</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  versions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v1</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 每个版本都可以通过 served 标志来独立启用或禁止</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      served</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 其中一个且只有一个版本必需被标记为存储版本</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      storage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      schema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        openAPIV3Schema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">object</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            spec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">object</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                cronSpec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">string</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">string</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                replicas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">integer</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 可以是 Namespaced 或 Cluster</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  scope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Namespaced</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  names</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 名称的复数形式，用于 URL：/apis/&lt;组&gt;/&lt;版本&gt;/&lt;名称的复数形式&gt;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plural</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">crontabs</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 名称的单数形式，作为命令行使用时和显示时的别名</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    singular</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">crontab</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # kind 通常是单数形式的驼峰命名（CamelCased）形式。你的资源清单会使用这一形式。</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CronTab</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # shortNames 允许你在命令行使用较短的字符串来匹配资源</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    shortNames</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ct</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 一个名为 crontab 的 API 对象，可在 Kubernetes API 中进行 CRUD（创建、读取、更新和删除）操作</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># &quot;/apis/stable.example.com/v1/namespaces/*/crontabs/...&quot; 是一个 RESTful API 端点的路径</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 表示在 Kubernetes 集群中创建一个名为 &quot;crontabs&quot; 的资源，该资源位于所有 Kubernetes 命名空间中</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> resourcedefinition.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CronTab</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ct</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-crontab.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建定制对象</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stable.example.com/v1&quot;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CronTab</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">metadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">my-new-cron-object</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  cronSpec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;* * * * */5&quot;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">my-awesome-cron-image</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-crontab.yaml</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> crontab</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ct</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除CRD CronTab</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> delete</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> resourcedefinition.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-相关资料" tabindex="-1"><a class="header-anchor" href="#_2-相关资料"><span>2.相关资料</span></a></h3><p><a href="https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/api-extension/custom-resources/" target="_blank" rel="noopener noreferrer">Kubernetes文档/概念/扩展Kubernetes/扩展KubernetesAPI/定制资源</a><a href="https://kubernetes.io/zh-cn/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/" target="_blank" rel="noopener noreferrer">Kubernetes文档/使用CustomResourceDefinition扩展KubernetesAPI</a></p><h3 id="qa" tabindex="-1"><a class="header-anchor" href="#qa"><span>QA</span></a></h3><ul><li><p>k8s的spec.scope干嘛的 Kubernetes中的spec.scope用于指定资源对象的范围，例如Pod的范围可以是cluster（集群级别）或namespace（命名空间级别）。这个参数通常用于为用户控制资源对象的访问范围，以确保安全性和隔离性。 如果spec.scope设置为namespace，则只能在同一命名空间中访问该资源对象。如果设置为cluster，则可以在整个集群中访问该资源对象。</p></li><li><p>k8s的metadata是干嘛的 Kubernetes (k8s) 的 metadata 是为了给 Kubernetes 对象提供元数据，即对象的描述信息。其中包括：</p><ol><li>名称 (name)：对象的名称。</li><li>命名空间 (namespace)：对象所处的命名空间。</li><li>标签 (labels)：用于标识和分类对象。</li><li>注释 (annotations)：提供额外的对象描述信息，用于描述对象的详细信息。 这些元数据信息在 Kubernetes 中非常重要，可以被用于对象的管理、监视、访问控制和自动化操作等方面。例如，使用标签 (labels) 可以轻松地对多个对象进行批量管理或筛选，并使用注释 (annotations) 来记录对象的详细信息，便于后续跟踪和管理。</li></ol></li><li><p>k8s的spec是什么 在 Kubernetes（k8s）中，<code>spec</code> 是指 Kubernetes 对象中的“规格”或“规范”（specification）。它描述了 Kubernetes 对象的所需状态和属性。<code>spec</code> 是 Kubernetes 对象的一部分，包括 Kubernetes 中的各种对象，如 Pod，Deployment，Service，Namespace 等等。 <code>spec</code> 一般由用户提供，用于描述 Kubernetes 对象的期望状态。例如，对于一个 Deployment 对象，<code>spec</code> 可以指定所部署的容器镜像、容器数量、滚动更新策略等。而对于一个 Pod 对象，<code>spec</code> 可以指定容器镜像、容器的命令和参数、容器间的通信方式等。 <code>spec</code> 是 Kubernetes 控制器的核心输入对象。Kubernetes 控制器根据 <code>spec</code> 中的规范，将 Kubernetes 对象的实际状态调整为用户期望的状态。如果实际状态与 <code>spec</code> 中规定的状态不匹配，则 Kubernetes 控制器会根据设定的策略进行自动修复，以达到用户期望的状态。 总之，<code>spec</code> 提供了 Kubernetes 对象的期望状态和属性，是 Kubernetes 控制器自动管理和操作 Kubernetes 对象的关键输入。</p></li></ul><p><a href="https://github.com/kubernetes/code-generator" target="_blank" rel="noopener noreferrer">github/code-generator</a><a href="https://juejin.cn/post/7096484178128011277" target="_blank" rel="noopener noreferrer">code-generator简单介绍</a><a href="https://github.com/kubernetes/sample-controller" target="_blank" rel="noopener noreferrer">kubernetes/sample-controller</a></p>',14)]))}]]),t=JSON.parse('{"path":"/posts/kubernetes/%E5%88%9D%E8%AF%86CRD.html","title":"初识CRD","lang":"zh-CN","frontmatter":{"title":"初识CRD","icon":"object-group","order":2,"category":["kubernetes"],"tag":["kubernetes"],"description":"1.创建自定义资源 2.相关资料 Kubernetes文档/概念/扩展Kubernetes/扩展KubernetesAPI/定制资源 Kubernetes文档/使用CustomResourceDefinition扩展KubernetesAPI QA k8s的spec.scope干嘛的 Kubernetes中的spec.scope用于指定资源对象的范围，...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kubernetes/%E5%88%9D%E8%AF%86CRD.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"初识CRD"}],["meta",{"property":"og:description","content":"1.创建自定义资源 2.相关资料 Kubernetes文档/概念/扩展Kubernetes/扩展KubernetesAPI/定制资源 Kubernetes文档/使用CustomResourceDefinition扩展KubernetesAPI QA k8s的spec.scope干嘛的 Kubernetes中的spec.scope用于指定资源对象的范围，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kubernetes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"初识CRD\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"1.创建自定义资源","slug":"_1-创建自定义资源","link":"#_1-创建自定义资源","children":[]},{"level":3,"title":"2.相关资料","slug":"_2-相关资料","link":"#_2-相关资料","children":[]},{"level":3,"title":"QA","slug":"qa","link":"#qa","children":[]}],"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"posts/kubernetes/初识CRD.md","excerpt":"<h3>1.创建自定义资源</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> touch</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> resourcedefinition.yaml</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);