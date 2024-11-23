"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7759],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},1198:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>n,data:()=>t});var e=a(641);const l={},n=(0,a(6262).A)(l,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<h3 id="一、kafka安装" tabindex="-1"><a class="header-anchor" href="#一、kafka安装"><span>一、kafka安装</span></a></h3><blockquote><p>Kafka本质上是高性能低延迟的分布式文件系统、分布式流处理平台主要用于处理和存储大量的实时数据流。数据以topics主题类别存储，每条记录有键、值、时间戳。</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 从 Kafka 2.8.0 版本开始，可以在不依赖 Zookeeper 的情况下运行 Kafka。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 通过引入 Kafka Raft（KRaft）模式实现的</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># bitnami/kafka:3.4 可以选择使用zookeeper</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bitnami/kafka:3.9.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 容器的主机名（hostname）为kafka-server</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># KAFKA_CFG_NODE_ID 节点ID为0</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># KAFKA_CFG_PROCESS_ROLES 节点角色为controller(控制器)和broker(代理)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># KAFKA_CFG_LISTENERS 服务的监听器 </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># PLAINTEXT指普通文本协议(非加密)在9092端口监听client(如生产者和消费者)的连接</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># CONTROLLER指9093端口监听与控制器相关的通信</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP 指定监听器的安全协议映射全用普通文本(不加密)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># KAFKA_CFG_CONTROLLER_QUORUM_VOTERS 配置控制器仲裁投票者用于KafkaRaft选举和协调控制器</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># KAFKA_CFG_CONTROLLER_LISTENER_NAMES 监听器名称为CONTROLLER</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --hostname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KAFKA_CFG_NODE_ID=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KAFKA_CFG_PROCESS_ROLES=controller,broker</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka-server:9093</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    bitnami/kafka:3.9.0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果不是windows不用加winpty</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winpty</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sh</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1.查看主题列表</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/bitnami/kafka/bin</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2.创建主题</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># replication-factor复制因子: 分区的副本数 (如果只有1个broker最多设置为1)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># partitions分区: 表示这个topic会被划分为3个分区</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mytopic</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --replication-factor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --partitions</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3.查看主题详情</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --describe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mytopic</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4.启动生产者生产消息</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-console-producer.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mytopic</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5.启动消费者消费消息</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-console-consumer.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mytopic</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --from-beginning</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 6.查看消费者组列表</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-consumer-groups.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --list</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 7.查看特定消费者组的详细信息</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-consumer-groups.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --describe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --group</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> console-consumer-73857</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">GROUP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TOPIC</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PARTITION</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CURRENT-OFFSET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LOG-END-OFFSET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LAG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CONSUMER-ID</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 8.查看消费者组的偏移量信息</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kafka-consumer-groups.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-server:9092</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --describe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --group</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> console-consumer-73857</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --offsets</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 核心API</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ProducerAPI</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 生产者API.</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ConsumerAPI</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 消费者API.</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> StreamsAPI</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 流API.</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">4.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ConnectorAPI</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 连接器API.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、概念" tabindex="-1"><a class="header-anchor" href="#三、概念"><span>三、概念</span></a></h3><ol><li>主题topic</li><li>分区patitions</li><li>消费组consumerGroup</li><li>消费者</li><li>生产者</li><li>消息Record</li><li>服务器Broker</li><li>Leader/Follower分区副本</li><li>Offset偏移量</li><li>Coodinator协调者</li><li>Controller控制器</li><li>Rebalance重平衡</li></ol><h3 id="四、1个topic的多分区如何分配给1个消费者组的多消费者" tabindex="-1"><a class="header-anchor" href="#四、1个topic的多分区如何分配给1个消费者组的多消费者"><span>四、1个Topic的多分区如何分配给1个消费者组的多消费者</span></a></h3><blockquote><p>当消费者组中的消费者数量发生变化（如新增或者减少消费者）或者主题的分区数量发生变化时，Kafka 会触发分区的再平衡过程。</p></blockquote><ol><li>Range范围分区(默认)</li></ol><p>假设一个主题有10个分区（0-9），消费者组有3个消费者，消费者A可能负责分区<code>0-3</code>，消费者B负责分区<code>4-6</code>，消费者C负责分区<code>7-9</code>。如果主题的分区数不能被消费者数量整除，那么前面的消费者会分配到更多的分区。</p><ol start="2"><li>RoundRobin轮询</li></ol><p>假设一个主题有10个分区，消费者组有3个消费者。第一个分区分配给消费者A，第二个分区分配给消费者B，第三个分区分配给消费者C，第四个分区又分配给消费者A，以此类推。</p><h3 id="五、kafka如何保证消息的可靠性" tabindex="-1"><a class="header-anchor" href="#五、kafka如何保证消息的可靠性"><span>五、kafka如何保证消息的可靠性</span></a></h3><ol><li>生产者发送消息丢失</li></ol><p>生产者消息发出去了，但是网络原因或者其他导致kafka没收到。那么异步加异常重试是比较稳妥的做法，如果接受慢一点可以同步提交。那么提交结果的响应<code>success</code>也是有条件可以设置的，服务端达到什么样子的条件可以返回<code>success</code>呢，<code>acks= 0\\1\\all</code>，0就是发了就不管了，1 要求起码1个leader是返回ok了（leader返回ok，follower没ok，leader挂了，一样丢失）,all 要求leader\\follower所有副本都ok才表示ok。</p><ol start="2"><li>Kafka自身消息丢失</li></ol><p>kafka通过pageCache异步写入磁盘，有可能到了pageCache后没写入磁盘宕机了，那么消息丢失。解决的方案是增加副本数量并且规定Client生产消息的时候必须写入多个个副本才能认为成功。</p><ol start="3"><li><p>消费者消息丢失</p><p>Kafka消费者配置中，<code>enable.auto.commit</code>属性的默认值是true，也就是说<code>Client</code>读取到消息以后，过了<code>auto.commit.interval.ms</code>大概<code>5</code>秒，服务端会自动提交<code>Offset</code>。如果客户端拿到数据后宕机了，没有对消息做业务逻辑处理，服务端就自动改变了偏移量，那么<code>offset</code>就被改变了，那么这条消息永远不会被这个消费者消费了，消息丢失了。解决方案是关闭服务端的自动提交属性，就算消息被客户端读了，<code>offset</code>也不会变，直到<code>client</code>主动提交偏移量。</p></li></ol><h3 id="六、高吞吐的原因" tabindex="-1"><a class="header-anchor" href="#六、高吞吐的原因"><span>六、高吞吐的原因</span></a></h3><ul><li>PageCache和零拷贝</li><li>顺序IO</li><li>多分区</li><li>批量处理和压缩</li></ul><h3 id="七、副本同步原理" tabindex="-1"><a class="header-anchor" href="#七、副本同步原理"><span>七、副本同步原理</span></a></h3><p>Kafka副本分为Leader副本和Follower副本（主从）只有Leader副本会对外提供服务，Follower副本只是单纯地和Leader保持数据同步，作为数据冗余容灾的作用。正常情况下来说，Follower副本是不提供服务的，不管是生产还是消费。</p><h3 id="八、重复消费场景" tabindex="-1"><a class="header-anchor" href="#八、重复消费场景"><span>八、重复消费场景</span></a></h3><p>先消费后提交<code>offset</code>会有可能出现重复消费。<code>client</code>拿到了消息并且做了业务逻辑处理，但是没有提交<code>Offset</code>，下次拿数据又拿到了同一个<code>Offset</code>的消息。</p><h3 id="九、消息丢失场景" tabindex="-1"><a class="header-anchor" href="#九、消息丢失场景"><span>九、消息丢失场景</span></a></h3><ol><li>kafka设置自动提交就有可能丢消息，Client读取了消息以后，Server自动更改了偏移量Offset，Client没有做业务逻辑处理，下次读取数据时候却读不到这个消息了，就出现了消息丢失，也就是没有消费到这个消息。</li><li>Producer发消息至Broker的时候，就有可能会丢消息，比如消息发到Broker了，并且Broker返回一个success了，但是消息丢失了，问题是出现在Broker收到消息以后数据存在PageCache还没有落到磁盘，宕机了，应该设置罗盘机制马上落盘，或者多副本的情况下保证其他副本也已经拿到消息了，才回复success给客户端。</li></ol><h3 id="十、消息堆积场景" tabindex="-1"><a class="header-anchor" href="#十、消息堆积场景"><span>十、消息堆积场景</span></a></h3><p>出现的原因是消费者跟不上生产者的速度，解决方案时增加<code>partition</code>增加消费者<code>consumer</code>，那么只有1个分区在一个消费者组却有多个消费者呢，这个时候有多少个消费者真正的拿得到消息的，其实只有一个消费者能够真正拿到该分区的消息。</p><h3 id="十一、高可用的架构下-多副本-如何保证数据的一致性" tabindex="-1"><a class="header-anchor" href="#十一、高可用的架构下-多副本-如何保证数据的一致性"><span>十一、高可用的架构下（多副本）如何保证数据的一致性</span></a></h3><p>高可用是通过数据冗余的方式实现，如每个分区都有多副本，分成leader\\follower副本。而一致性是因为消费消息的时候，都是从Leader消费，Follower副本仅仅做冗余处理。并且Leader和Follower的同步时机，可以定期、Leader的新消息字节数积累触发、生产者写入消息后触发、消费者消费到高水位（High - Watermark）附近消息时触发等，及时触发Leader和Follower之间的消息同步。</p><h3 id="十二、message究竟要存到topic下面的哪个分区" tabindex="-1"><a class="header-anchor" href="#十二、message究竟要存到topic下面的哪个分区"><span>十二、message究竟要存到topic下面的哪个分区</span></a></h3><ol><li>手动指定partition</li><li>随机轮询</li><li>按key存储 (key的hash和分区数取余数)</li><li>顺序轮询（round-robin）（第一次调用随机生成整数，后续每次调用自增，用这个数于分区数取余数）</li></ol><h3 id="十二、重平衡" tabindex="-1"><a class="header-anchor" href="#十二、重平衡"><span>十二、重平衡</span></a></h3><p>触发重平衡：</p><ul><li>消费组的消费者数量变化</li><li>消费组消费的主题的主题分区数量变化</li><li>消费组订阅的Topic发生了变化。</li></ul><p>rebalance过程中消费者无法从kafka消费消息，这对kafka的TPS会有影响，如果kafka集群内节点较多，比如数百个，那重平衡可能会耗时极多，所以应尽量避免在系统高峰期的重平衡发生。</p><h3 id="十二、消费者rebalance分区分配策略" tabindex="-1"><a class="header-anchor" href="#十二、消费者rebalance分区分配策略"><span>十二、消费者Rebalance分区分配策略</span></a></h3><p>range round-robin(轮询) sticky(粘性)</p><p>Rebalance过程 第一阶段：选择组协调器 第二阶段：加入消费组JOIN GROUP 第三阶段 SYNC GROUP</p><h3 id="十三、生产消息时候同步发送和异步发送" tabindex="-1"><a class="header-anchor" href="#十三、生产消息时候同步发送和异步发送"><span>十三、生产消息时候同步发送和异步发送</span></a></h3><blockquote><p>同步和异步指client(producer)是否收到leader给的ack后才发下一条</p></blockquote><ul><li>逐个发送</li></ul><ol><li>Fire-and-forget (不关心可靠性)</li><li>Synchronous send (关心次序)</li><li>Asynchronous send (不关心次序)</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>逐条发送</span></span>\n<span class="line"><span>请求队列InFlightRequest中永远最多有一条数据</span></span>\n<span class="line"><span>批量发送参数：max.in.flight.requests.per.connection=1 &amp; batch.size=1 效果也是逐条发送</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>批量发送</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>批量发送</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>运行生产者以batch的形式push数据</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>queue.buffering.max.ms = 5000 缓存5s的数据后batch发送</span></span>\n<span class="line"><span>queue.buffering.max.messages = 100  缓存队列最大数(尽量大)超过了会丢弃消息或阻塞</span></span>\n<span class="line"><span>queue.enqueue.timeout.ms = 0/-1 设置0时丢弃消息，设置-1是阻塞</span></span>\n<span class="line"><span>batch.num.messages = 100 batch缓存的消息数量达到了才会发送出去</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="十四、ack机制" tabindex="-1"><a class="header-anchor" href="#十四、ack机制"><span>十四、ack机制</span></a></h4><p>broker收到消息之后在什么状态下（直接返回,leader success, follower&amp;leader success）返回success。Java生产消息时候的策略:</p><ol><li>发后即忘 (发送了不管成功与否)</li><li>同步(发送后等待结果)</li><li>异步（发送消息时指定回调函数，Kafka在返回响应时会调用该函数实现异步的发送确认）</li></ol><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h3><ol><li>kafka的zookeeper是干嘛的，Coordinator 和 Controller 和 Leader/Follower</li><li>说说消息队列模型 (点对点\\发布订阅)</li><li>通信过程原理</li><li>发送消息时候如何选择分区，分区有什么用</li><li>Rebalance重平衡</li><li>分区分配策略</li><li>如何保证消息可靠性</li><li>AR（Assigned Replicas）副本的集合</li><li>和Leader副本保持同步的副本集合称为ISR（InSyncReplicas）(所有follower)</li><li>kafka的流Streams是什么</li><li>为什么Kafka的性能在数据大小方面实际上是恒定的且长时间存储数据不是问题</li><li>kafka怎么设置记录保留期</li><li>一个分区只能被同一个组的一个消费者消费</li><li>一个消费者可以消费同一个topic的多个分区</li><li>如果有2个消费者持有同一个groupId消费同一个分区,那么其中只有1个可以消费到</li><li>消费者数量大于分区数时候，多余的消费者会处于闲置的状态</li><li>consumer订阅topic以后，底层的逻辑是怎么样的呢</li><li>生产者生产消息怎么做到高效率的</li><li>Kafka消费者消费消息的时候是怎么做到高效可靠的</li><li>Client生产消息时候Kafka如何选择分区存储消息</li><li>Kafka分区有什么好处</li><li>kafka的一个topic生产了2条数据,如果有2个分区那么消息会如何存储</li><li>如何优化Rebalance防止频繁重平衡，重平衡的过程是怎么样的 重平衡过程整个消费群组停止工作且期间无法消费消息。1. 消费者数量和分区数量保持一致最好。2. 当消费者数量小于分区数量的时候，那么必然会有一个消费者消费多个分区的消息。3. 消费者数量超过分区的数量的时候，那么必然会有消费者没有分区可以消费</li><li>消费者与订阅主题topic之间消费策略有哪几种以及怎么设置</li><li>如何提高消费者消费的速度</li><li>一个topic的多个分区之间消息会有重复的吗</li><li>堆积量告警怎么做的</li><li>分区数量的数量设置依据什么合适</li><li>增加分区后会有什么情况发生</li><li>1个topic_1有4个分区且只有group_a订阅topic_1，对应的 group_a 的消费者consumer只有一个A，那么这个A可以订阅所有的分区吗</li><li>重平衡问题。我的client_A目前占有1个topic的2个分区(p1,p2)，pull了500条数据(offset = 10~510)正在消费，消费到50%的时候260，重新加入了一个 client_B订阅该topic，那么这个时候会把client_A正在消费的另一个分区给p2 rebalance给 client_B 吗，如果会的话，会把 10~510的数据给 client_B 消费吗</li><li>rebalance的触发情形有哪些rebalance的过程是怎么样的</li><li>kafka的可靠性体现在哪些方面 消费可靠（提交offset和消费动作次序、重复消费还是消息丢失、消息堆积）。生产可靠（ack、批量发送还是单个发送）。kafka可靠（落盘机制、副本机制）。</li><li>kafka的流比普通的有什么区别 <ul><li>普通的数据处理通常是基于批处理（Batch Processing）模式。</li><li>Kafka 流处理是基于实时流（Real-Time Streaming）模式。数据在产生后几乎是立即被处理，没有明显的等待积累阶段。</li></ul></li></ol><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h3><ul><li><a href="https://cloud.tencent.com/developer/article/1772208" target="_blank" rel="noopener noreferrer">Kafka的消费者提交方式手动同步提交、和异步提交</a></li><li><a href="https://blog.csdn.net/m0_45406092/article/details/119546471" target="_blank" rel="noopener noreferrer">Kafka消息的同步发送和异步发送</a></li><li><a href="https://www.zhihu.com/question/483747691/answer/2392949203" target="_blank" rel="noopener noreferrer">kafka 如何保证不重复消费又不丢失数据</a></li><li><a href="https://zhuanlan.zhihu.com/p/442468709" target="_blank" rel="noopener noreferrer">图解Kafka的架构和消费原理</a></li><li><a href="https://blog.csdn.net/Blackic_960703/article/details/126179913" target="_blank" rel="noopener noreferrer">Kafka的Rebalance机制</a></li><li><a href="https://blog.csdn.net/weixin_45970271/article/details/126550115" target="_blank" rel="noopener noreferrer">Kafka的分区和副本机制</a></li><li><a href="https://blog.csdn.net/weixin_43956062/article/details/106784984" target="_blank" rel="noopener noreferrer">Kafka 源码解析之 Consumer 如何加入一个 Group</a></li><li><a href="http://wjhsh.net/timor19-p-12742362.html" target="_blank" rel="noopener noreferrer">Kafka查看topic、consumer group状态命令</a></li><li><a href="https://blog.csdn.net/javahelpyou/article/details/125887294" target="_blank" rel="noopener noreferrer">kafka对topic的CRUD</a></li><li><a href="https://zhuanlan.zhihu.com/p/392921569" target="_blank" rel="noopener noreferrer">Kafka增加分区导致业务数据异常</a></li><li><a href="https://baijiahao.baidu.com/s?id=1719501564805569513" target="_blank" rel="noopener noreferrer">一文读懂kafka</a></li><li><a href="https://www.cnblogs.com/auuv/articles/15984585.html" target="_blank" rel="noopener noreferrer">自动提交和手动提交-漏消费和重复消费</a></li><li><a href="https://www.cnblogs.com/jelly12345/p/16018287.html" target="_blank" rel="noopener noreferrer">Kafka自动提交 offset 尚硅谷</a></li><li><a href="https://blog.csdn.net/chaiyu2002/article/details/89472416" target="_blank" rel="noopener noreferrer">kafka auto commit官方手册</a></li><li><a href="https://blog.csdn.net/lzb348110175/article/details/100773487" target="_blank" rel="noopener noreferrer">Kafka 分区分配策略（Range分配策略 &amp;&amp; RoundRobin分配策略）</a></li><li><a href="https://www.cnblogs.com/along21/p/10278100.html" target="_blank" rel="noopener noreferrer">超详细“零”基础kafka入门篇</a></li><li><a href="https://blog.csdn.net/qq_44170834/article/details/108670595" target="_blank" rel="noopener noreferrer">csdn offset参数详解</a></li><li><a href="https://www.cnblogs.com/luckyna/p/12066431.html" target="_blank" rel="noopener noreferrer">kafka参数解析</a></li><li><a href="https://www.jianshu.com/p/86e42f3ee7b9" target="_blank" rel="noopener noreferrer">kafka参数：max.poll.interval.ms 和 session.timeout.ms</a></li><li><a href="https://www.cnblogs.com/wangzhuxing/p/10111831.html" target="_blank" rel="noopener noreferrer">kafka系列七、kafka核心配置 - 写的很好</a></li><li><a href="https://mp.weixin.qq.com/s/SuALTpvI3IMPSja9pacJ7Q" target="_blank" rel="noopener noreferrer">面试题系列：Kafka 夺命连环11问</a></li><li><a href="https://mp.weixin.qq.com/s/NrltMqfDvwlbb9F0rNx5wA" target="_blank" rel="noopener noreferrer">31个Kafka常见面试题（很全）</a></li><li><a href="https://mp.weixin.qq.com/s/QfcyaR4EV0-JC-3kU-S9MA" target="_blank" rel="noopener noreferrer">架构师面试题系列之Kafka面试专题及答案（26题）</a></li><li><a href="https://zhuanlan.zhihu.com/p/442468709" target="_blank" rel="noopener noreferrer">图解 kafka 架构与工作原理</a></li><li><a href="https://cloud.tencent.com/developer/article/1540509" target="_blank" rel="noopener noreferrer">kafka为什么有消费者组</a></li><li><a href="https://stackoverflow.com/questions/61770993/how-to-create-a-new-consumer-group-in-kafka" target="_blank" rel="noopener noreferrer">怎么创建新的消费组在kafka</a></li><li><a href="https://www.conduktor.io/kafka/kafka-consumers-in-group-cli-tutorial" target="_blank" rel="noopener noreferrer">Group CLI 教程中的 Kafka 消费者</a></li><li><a href="https://www.csdn.net/tags/MtjaQg0sODkzNjEtYmxvZwO0O0OO0O0O.html" target="_blank" rel="noopener noreferrer">group配置</a></li><li><a href="https://zhuanlan.zhihu.com/p/451678059" target="_blank" rel="noopener noreferrer">华为云开发者联盟​-带你认识三种kafka消息发送模式</a></li><li><a href="https://zhuanlan.zhihu.com/p/531447457" target="_blank" rel="noopener noreferrer">kafka生产同步发送和异步发送</a></li><li><a href="http://t.zoukankan.com/biehongli-p-14105658.html" target="_blank" rel="noopener noreferrer">Kafka的消费者提交方式手动同步提交、和异步提交</a></li><li><a href="https://www.csdn.net/tags/MtjaEgysNTc2NjEtYmxvZwO0O0OO0O0O.html" target="_blank" rel="noopener noreferrer">kafka重复消费消息设置</a></li><li><a href="https://blog.csdn.net/qq_55548053/article/details/114055254" target="_blank" rel="noopener noreferrer">kafka poll</a></li><li><a href="https://hubgw.docker.com/r/bitnami/kafka" target="_blank" rel="noopener noreferrer">bitnami/kafka</a></li><li><a href="https://mp.weixin.qq.com/s/SuALTpvI3IMPSja9pacJ7Q" target="_blank" rel="noopener noreferrer">rebalance重平衡过程图示</a></li></ul>',53)]))}]]),t=JSON.parse('{"path":"/posts/kafka/kafka%E5%9F%BA%E7%A1%80.html","title":"kafka基础","lang":"zh-CN","frontmatter":{"title":"kafka基础","tags":["kafka"],"categories":["kafka"],"description":"一、kafka安装 Kafka本质上是高性能低延迟的分布式文件系统、分布式流处理平台主要用于处理和存储大量的实时数据流。数据以topics主题类别存储，每条记录有键、值、时间戳。 三、概念 主题topic 分区patitions 消费组consumerGroup 消费者 生产者 消息Record 服务器Broker Leader/Follower分区副...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/kafka/kafka%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"kafka基础"}],["meta",{"property":"og:description","content":"一、kafka安装 Kafka本质上是高性能低延迟的分布式文件系统、分布式流处理平台主要用于处理和存储大量的实时数据流。数据以topics主题类别存储，每条记录有键、值、时间戳。 三、概念 主题topic 分区patitions 消费组consumerGroup 消费者 生产者 消息Record 服务器Broker Leader/Follower分区副..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"kafka"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kafka基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"一、kafka安装","slug":"一、kafka安装","link":"#一、kafka安装","children":[]},{"level":3,"title":"三、概念","slug":"三、概念","link":"#三、概念","children":[]},{"level":3,"title":"四、1个Topic的多分区如何分配给1个消费者组的多消费者","slug":"四、1个topic的多分区如何分配给1个消费者组的多消费者","link":"#四、1个topic的多分区如何分配给1个消费者组的多消费者","children":[]},{"level":3,"title":"五、kafka如何保证消息的可靠性","slug":"五、kafka如何保证消息的可靠性","link":"#五、kafka如何保证消息的可靠性","children":[]},{"level":3,"title":"六、高吞吐的原因","slug":"六、高吞吐的原因","link":"#六、高吞吐的原因","children":[]},{"level":3,"title":"七、副本同步原理","slug":"七、副本同步原理","link":"#七、副本同步原理","children":[]},{"level":3,"title":"八、重复消费场景","slug":"八、重复消费场景","link":"#八、重复消费场景","children":[]},{"level":3,"title":"九、消息丢失场景","slug":"九、消息丢失场景","link":"#九、消息丢失场景","children":[]},{"level":3,"title":"十、消息堆积场景","slug":"十、消息堆积场景","link":"#十、消息堆积场景","children":[]},{"level":3,"title":"十一、高可用的架构下（多副本）如何保证数据的一致性","slug":"十一、高可用的架构下-多副本-如何保证数据的一致性","link":"#十一、高可用的架构下-多副本-如何保证数据的一致性","children":[]},{"level":3,"title":"十二、message究竟要存到topic下面的哪个分区","slug":"十二、message究竟要存到topic下面的哪个分区","link":"#十二、message究竟要存到topic下面的哪个分区","children":[]},{"level":3,"title":"十二、重平衡","slug":"十二、重平衡","link":"#十二、重平衡","children":[]},{"level":3,"title":"十二、消费者Rebalance分区分配策略","slug":"十二、消费者rebalance分区分配策略","link":"#十二、消费者rebalance分区分配策略","children":[]},{"level":3,"title":"十三、生产消息时候同步发送和异步发送","slug":"十三、生产消息时候同步发送和异步发送","link":"#十三、生产消息时候同步发送和异步发送","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]},{"level":3,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"readingTime":{"minutes":12.76,"words":3829},"filePathRelative":"posts/kafka/kafka基础.md","excerpt":"<h3>一、kafka安装</h3>\\n<blockquote>\\n<p>Kafka本质上是高性能低延迟的分布式文件系统、分布式流处理平台主要用于处理和存储大量的实时数据流。数据以topics主题类别存储，每条记录有键、值、时间戳。</p>\\n</blockquote>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 从 Kafka 2.8.0 版本开始，可以在不依赖 Zookeeper 的情况下运行 Kafka。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 通过引入 Kafka Raft（KRaft）模式实现的</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># bitnami/kafka:3.4 可以选择使用zookeeper</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> bitnami/kafka:3.9.0</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);