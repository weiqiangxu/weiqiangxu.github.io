(()=>{"use strict";var t,e,s,_={},o={};function l(t){var e=o[t];if(void 0!==e)return e.exports;var s=o[t]={exports:{}};return _[t](s,s.exports,l),s.exports}l.m=_,t=[],l.O=(e,s,_,o)=>{if(!s){var a=1/0;for(r=0;r<t.length;r++){for(var[s,_,o]=t[r],d=!0,m=0;m<s.length;m++)(!1&o||a>=o)&&Object.keys(l.O).every((t=>l.O[t](s[m])))?s.splice(m--,1):(d=!1,o<a&&(a=o));if(d){t.splice(r--,1);var h=_();void 0!==h&&(e=h)}}return e}o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[s,_,o]},l.d=(t,e)=>{for(var s in e)l.o(e,s)&&!l.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},l.f={},l.e=t=>Promise.all(Object.keys(l.f).reduce(((e,s)=>(l.f[s](t,e),e)),[])),l.u=t=>"assets/js/"+({9:"posts_etcd_Etcd开启SSL认证.html",14:"tag_nginx_index.html",53:"posts_mysql_SQL执行过程详解.html",64:"posts_go_信号量.html",110:"tag_helm_index.html",150:"category_network_index.html",183:"posts_network_index.html",203:"posts_docker_双网卡实现网络隔离.html",250:"tag_java_index.html",287:"posts_go_交叉编译.html",332:"posts_kafka_Rebalance机制.html",405:"tag_kafka原理_index.html",428:"tag_gin_index.html",489:"posts_redis_过期删除和内存淘汰.html",526:"posts_kubernetes_制作镜像编译kata.html",529:"posts_go_slice底层数据结构.html",578:"tag_golangci-lint_index.html",609:"posts_redis_Redis集群模式之哨兵模式.html",621:"posts_go_golang静态扫描和格式检查.html",631:"posts_docker_镜像仓库搭建.html",701:"posts_architecture_分布式事务概念.html",735:"posts_prometheus_alertmanager高可用机制.html",737:"posts_go_defer.html",815:"posts_linux_环境变量配置.html",819:"posts_redis_基础入门.html",831:"posts_elastic_Elastic集群.html",868:"posts_kubernetes_kubectl常用命令.html",874:"tag_prometheus_index.html",879:"tag_telepresence_index.html",918:"category_go_index.html",981:"posts_mongodb_Mongo集群.html",1018:"posts_elastic_index.html",1036:"posts_elastic_10道不得不会的面试题.html",1099:"posts_go_如何池化连接.html",1121:"posts_linux_零拷贝.html",1127:"posts_java_制作maven包.html",1150:"tag_fmt_index.html",1159:"tag_springboot_index.html",1170:"posts_kafka_如何不重复消费又不丢失数据.html",1203:"posts_kubernetes_创建service指向外部服务.html",1305:"posts_kubernetes_k8s审计日志.html",1343:"posts_linux_index.html",1360:"category_docker_index.html",1365:"posts_kubernetes_网络常用的命令.html",1370:"posts_go_UnitTest规范.html",1395:"posts_network_tcp粘包.html",1441:"posts_go_index.html",1442:"posts_prometheus_查看prometheus占用内存.html",1534:"posts_network_如何使用GRE隧道通信.html",1617:"posts_network_write_broken_pipe.html",1628:"category_kubernetes_index.html",1665:"tag_内存分析_index.html",1700:"tag_etcd_index.html",1702:"posts_redis_Redis主从脑裂问题和解决方案.html",1761:"posts_go_内存分配.html",1797:"tag_index.html",1799:"posts_go_如何发布包到pkg.html",1872:"posts_kubernetes_iperf用法.html",1910:"posts_docker_dind.html",1928:"posts_go_字符串拼接性能及原理.html",1958:"posts_architecture_如何快速提高架构设计能力.html",2020:"posts_kubernetes_containerd安装.html",2061:"posts_kubernetes_kubernetes审计日志.html",2105:"posts_go_GRPC.html",2108:"posts_redis_Redis集群模式Docker搭建.html",2110:"posts_redis_index.html",2132:"posts_cicd_index.html",2153:"posts_go_jaegertracing.html",2214:"posts_kubernetes_调试工具telepresence.html",2257:"posts_go_GMP原理与调度.html",2272:"posts_architecture_index.html",2288:"posts_architecture_CAP.html",2399:"posts_kubernetes_kata_firecracker环境搭建.html",2418:"category_etcd_index.html",2450:"posts_redis_数据结构理解数据类型.html",2471:"posts_kafka_同步发送和异步发送.html",2532:"posts_network_什么是网桥.html",2582:"tag_kubernetes_index.html",2588:"posts_prometheus_mybatis监控指标.html",2653:"tag_领域驱动模型设计_index.html",2761:"posts_kubernetes_Kubernetes组件.html",2767:"posts_docker_chartmuseum.html",2856:"posts_kafka_group.html",2864:"posts_redis_Hash.html",3012:"posts_kubernetes_S3对象存储.html",3057:"posts_prometheus_golang实现简单的指标exporter.html",3117:"posts_go_个人编码规范.html",3132:"posts_docker_制作多架构镜像.html",3154:"tag_cap_index.html",3191:"posts_mysql_index.html",3209:"posts_etcd_etcd基础.html",3221:"tag_registry_index.html",3223:"tag_mybatis_index.html",3279:"posts_java_Java版本.html",3287:"posts_go_map.html",3342:"posts_go_优雅地拼接URL.html",3355:"posts_mongodb_index.html",3388:"posts_redis_bitmap位图.html",3397:"posts_go_读写锁实现原理.html",3510:"tag_chartmuseum_index.html",3583:"category_index.html",3586:"posts_go_golang引用传递和值传递.html",3613:"posts_go_配置go私有库.html",3653:"posts_kubernetes_初识CRD.html",3686:"posts_redis_Redis缓存一致性.html",3746:"posts_linux_二进制.html",3763:"posts_kafka_index.html",3799:"posts_go_腾讯代码规范.html",3852:"posts_go_什么是stream.html",3865:"tag_cdn_index.html",3902:"posts_linux_float浮点数精度.html",3912:"intro.html",3952:"posts_prometheus_基于远程写同步数据prometheus集群.html",4e3:"category_prometheus_index.html",4171:"posts_mysql_MySQL集群.html",4180:"posts_linux_发行版和包管理工具.html",4212:"posts_network_网络基础.html",4238:"posts_go_上下文易错点.html",4307:"posts_prometheus_prometheus配置解析.html",4316:"tag_linux_index.html",4333:"tag_架构设计_index.html",4347:"posts_git_密钥配置.html",4365:"posts_kubernetes_flanne接入k8s.html",4367:"posts_go_微服务架构.html",4400:"posts_redis_List.html",4446:"tag_docker_index.html",4457:"posts_prometheus_简单的webhook.html",4470:"index.html",4475:"posts_prometheus_index.html",4610:"posts_prometheus_mongodb指标采集.html",4631:"posts_go_sync.Map设计.html",4638:"posts_docker_集成kata.html",4660:"posts_prometheus_alertmanager的历史告警.html",4662:"posts_redis_分片技术.html",4731:"posts_redis_plan.html",4741:"posts_nginx_index.html",4788:"posts_go_如何退出协程.html",4839:"posts_kafka_同步提交和异步提交.html",4888:"posts_go_优化params是any接口.html",4895:"posts_go_mongodb自定义排序.html",4931:"posts_nginx_开启SSL验证.html",5031:"posts_docker_index.html",5046:"posts_redis_持久化RDB快照.html",5087:"posts_go_请求转发.html",5129:"posts_etcd_index.html",5188:"posts_prometheus_基于docker搭建联邦机制主从同步.html",5189:"posts_network_NAT配置公网访问.html",5228:"posts_network_veth-pair和ovs-bridge通讯.html",5233:"posts_kubernetes_traefik配置ingress服务.html",5254:"posts_go_GoModules.html",5266:"posts_kafka_参数详解.html",5279:"posts_go_抢占式调度.html",5303:"posts_docker_buildx.html",5401:"posts_mysql_性能优化.html",5464:"timeline_index.html",5534:"posts_nginx_域名指向配置.html",5552:"category_nginx_index.html",5604:"posts_go_如何判定零值.html",5612:"category_git_index.html",5658:"posts_redis_Redis限频.html",5689:"posts_redis_分片RedisCluster原理.html",5762:"posts_network_ipip隧道通讯.html",5822:"posts_linux_常用命令.html",5863:"tag_loki_index.html",5929:"posts_go_使用range必懂的点.html",5931:"posts_kubernetes_linux上如何配置静态路由.html",6005:"posts_redis_String.html",6028:"posts_kubernetes_如何安装kubernetes.html",6078:"posts_go_Context源码解析.html",6174:"posts_go_Mutex.html",6200:"posts_linux_linux服务器ssh密钥.html",6209:"posts_redis_Redis事务.html",6249:"posts_git_index.html",6277:"posts_etcd_Docker安装Etcd.html",6279:"posts_prometheus_搭建alertmanager告警服务.html",6318:"posts_prometheus_springboot的mongodb指标.html",6334:"posts_go_runtime包.html",6356:"posts_go_module冲突.html",6382:"posts_go_goroutine状态.html",6390:"tag_监控_index.html",6407:"posts_redis_哨兵模式.html",6420:"posts_redis_Redis发布订阅.html",6459:"posts_go_ApiGetway设计.html",6519:"posts_go_原子操作.html",6528:"posts_network_VPN通讯.html",6563:"posts_go_GC.html",6607:"posts_kubernetes_index.html",6613:"tag_cicd_index.html",6680:"posts_go_信号监听.html",6726:"posts_redis_Set.html",6746:"posts_mysql_MySQL分层.html",6751:"posts_kubernetes_Nginx-Ingress安装.html",6764:"posts_kubernetes_kube-proxy设计与实现.html",6783:"posts_redis_Blogs.html",6810:"tag_api_index.html",6850:"posts_architecture_CDN技术.html",6852:"posts_kubernetes_什么是CNI.html",6930:"posts_architecture_解构领域驱动设计.html",6934:"posts_linux_堆和栈的区别.html",6936:"posts_redis_Redis集群分布式锁.html",6992:"posts_redis_Redis集群模式之分布式事务.html",7056:"category_分布式_index.html",7091:"posts_network_DNS配置.html",7102:"posts_redis_Redis常见应用.html",7182:"posts_go_reflect的性能.html",7199:"star_index.html",7276:"posts_java_index.html",7332:"posts_go_什么是openTracing.html",7356:"posts_go_golang导出docker镜像.html",7429:"tag_go原理_index.html",7435:"posts_go_Socket是什么.html",7436:"posts_go_代码分层实践.html",7446:"posts_go_golang生产者消费者模式.html",7448:"posts_kubernetes_CI制作多架构镜像.html",7466:"posts_go_struct底层数据结构.html",7476:"posts_linux_磁盘扩容.html",7487:"posts_redis_高可用-主从复制详解.html",7490:"404.html",7511:"article_index.html",7525:"posts_prometheus_prometheus高可用方案预研.html",7596:"posts_kubernetes_如何添加node节点.html",7618:"posts_etcd_Raft算法.html",7655:"posts_redis_Redis缓存雪崩击穿和穿透.html",7711:"posts_go_内存管理.html",7759:"posts_kafka_kafka基础.html",7836:"posts_java_docker安装maven仓库.html",7849:"posts_go_middleware底层实现原理.html",7882:"posts_linux_lsof命令.html",7917:"tag_高可用_index.html",7927:"category_领域驱动设计_index.html",7979:"posts_redis_分片RedisCluster搭建.html",7984:"tag_golang_index.html",8023:"posts_go_GPM.html",8043:"posts_network_tcp连接与抓包.html",8053:"posts_kubernetes_CRD控制器.html",8098:"posts_network_如何构建vxlan网络.html",8160:"posts_go_string.html",8166:"posts_kafka_kafka基础入门.html",8236:"category_java_index.html",8288:"tag_kubectl_index.html",8290:"posts_redis_持久化AOF日志.html",8297:"posts_docker_分配网络给容器.html",8314:"posts_docker_多架构镜像存储.html",8327:"tag_alertmanager_index.html",8355:"posts_docker_docker离线安装.html",8472:"posts_kubernetes_制作helm包和自建Chart仓库.html",8474:"tag_git_index.html",8483:"posts_git_Gitlab安装使用.html",8594:"posts_linux_磁盘分区.html",8654:"category_linux_index.html",8666:"posts_index.html",8674:"posts_prometheus_node_exporter指标解析.html",8712:"tag_dockerfile_index.html",8727:"posts_redis_Redis集群模式之主从模式.html",8769:"posts_kubernetes_用CNI给docker容器分配网络.html",8812:"posts_mysql_MySQL规范.html",8841:"posts_redis_Key.html",8844:"tag_network_index.html",8900:"tag_kafka_index.html",9073:"posts_prometheus_snapshot备份数据.html",9077:"posts_git_Runner安装应用到CI.html",9078:"posts_go_for和range性能比较.html",9081:"posts_go_命令行执行单元测试.html",9093:"posts_prometheus_prometheus的资源占用分析.html",9119:"posts_linux_uname.html",9151:"posts_docker_loki采集日志.html",9188:"posts_mysql_MVCC实现机制.html",9198:"tag_分布式事务_index.html",9236:"tag_go_index.html",9274:"posts_network_网络命名空间.html",9332:"posts_go_goland快捷键.html",9416:"tag_mongodb_index.html",9442:"tag_告警_index.html",9462:"posts_redis_Redis的数据备份和恢复.html",9503:"posts_linux_cpu架构.html",9532:"posts_git_runner镜像制作.html",9542:"posts_kubernetes_Loki服务安装.html",9551:"posts_redis_Redis集群模式之分片Cluster模式.html",9582:"posts_network_veth-pair和host网桥通信.html",9601:"posts_docker_集成gvisor.html",9630:"category_kafka_index.html",9642:"posts_linux_rpm.html",9662:"posts_go_defer实现原理.html",9664:"posts_go_Channel底层原理.html",9691:"posts_go_如何优雅地使用errors.html",9722:"posts_go_Security规范.html",9732:"posts_go_goBuild约束.html",9746:"category_golang_index.html",9794:"posts_prometheus_本地启动prometheus服务.html",9856:"posts_kafka_分区和副本机制.html",9875:"posts_consul_index.html",9939:"posts_kubernetes_安全容器.html",9948:"posts_redis_cluster.html",9958:"posts_linux_Linux结构组成.html",9980:"posts_kubernetes_MySQL集群搭建.html",9989:"posts_nginx_会话粘性.html"}[t]||t)+"."+{9:"ec2bf1ee",14:"b7fba18b",53:"ea2f65c5",64:"9d23546b",110:"997285fb",150:"a80ba0cf",183:"8c6096b6",203:"07f4bc43",250:"f13674b2",287:"7cb62b9e",332:"bf422c69",405:"a4167c9b",428:"b75c38dd",489:"2ed01789",526:"5469ab58",529:"f8e62a58",578:"cba11d8d",609:"cc6c5d68",621:"ad020d26",631:"b13d1cfc",701:"34a853b5",735:"4be8c4ec",737:"f2b585d4",815:"8d91422f",819:"75b2db2d",831:"2057120b",868:"d1769b11",874:"a74f89f5",879:"fc0dfcf8",918:"0527ac69",981:"6d2c182f",1018:"9492ad58",1036:"9d8fd57c",1099:"981646c3",1121:"b7b5b6e5",1127:"218583e3",1150:"00be7ec1",1159:"d4c411ae",1170:"d8614896",1203:"841e02bd",1305:"d1d7cef0",1343:"f6237157",1360:"d74ea197",1365:"a36d5e3e",1370:"0f598456",1395:"c5c0d325",1441:"9db93734",1442:"1ec41c4f",1534:"5e45aa37",1617:"6e3e8c06",1628:"ce0390bb",1665:"ae250c65",1700:"6f0aaa2b",1702:"341e0f04",1761:"3394b9e4",1797:"25126f8e",1799:"e9784ae5",1872:"367d3587",1910:"86d0c762",1928:"78a08796",1958:"fbf9968d",2020:"9639ce05",2061:"45595d73",2105:"f62c5862",2108:"cfaf7e8e",2110:"4ee1dfff",2132:"86b7a3d6",2153:"eb08b064",2214:"e57b0feb",2257:"41092e80",2272:"756dfb1c",2288:"0bb2f901",2399:"7514d64a",2418:"d568eacb",2450:"87bda9ea",2471:"f93af009",2532:"01630df8",2582:"5324da6d",2588:"afed509e",2653:"f818d087",2761:"78ca836b",2767:"1c21850b",2856:"272ff8bc",2864:"ac73db9e",3012:"ee6dd656",3057:"ab36a6cf",3117:"bf3f1d28",3132:"512b5c5d",3154:"8e0ee818",3191:"d98e7628",3209:"3c5fedda",3221:"b7110999",3223:"01337a17",3279:"757ae46c",3287:"b367dc44",3342:"d2760e7b",3355:"3601bc79",3388:"9492a370",3397:"a0b1b347",3510:"db698c47",3583:"6de49c56",3586:"5adf3f48",3613:"2b791b79",3653:"fc60f640",3686:"530d28fc",3746:"d71b113e",3763:"b2fdec72",3799:"4a8ad1e7",3852:"35c2065e",3865:"7d3b199d",3902:"7a72acb6",3912:"10836ba3",3952:"f724efce",4e3:"c34a7c28",4171:"a30116e3",4180:"3a4350f1",4212:"e48c0fec",4238:"006679fe",4307:"cef99bd4",4316:"6c005239",4333:"3c164313",4347:"e51952f4",4365:"b3974ad6",4367:"acb9177b",4400:"d3a9e972",4446:"1e889a0d",4457:"d5d310a2",4470:"4f914cff",4475:"57823c92",4610:"50a019fc",4631:"afda91fd",4638:"ba4d004e",4660:"3cd8e466",4662:"51dc7e44",4731:"4ccb3e1e",4741:"2db165d8",4788:"4ce8ea18",4839:"c993dcff",4888:"c00eb960",4895:"7a238249",4931:"e58d6e0b",5031:"fc8bcce9",5046:"0c25635f",5087:"a33b9783",5129:"b3a0fac0",5188:"080e56d3",5189:"31608413",5228:"28774c54",5233:"48db778a",5254:"336444fb",5266:"16ecb2fe",5279:"2622daee",5303:"0f1e1ac1",5401:"5bd25c00",5464:"11b0ff0a",5534:"d2344144",5552:"ad56169d",5604:"29f9fa9e",5612:"76e07423",5658:"47801917",5689:"8dc7f7ff",5762:"8d568dcd",5822:"e5e114bc",5863:"8091a88c",5929:"25fd7867",5931:"69eb6a1a",6005:"aefb4d55",6028:"bfce0ce0",6078:"b140e40d",6174:"21693b22",6200:"6e3f5408",6209:"694afef4",6249:"b06352e7",6277:"b3de9720",6279:"faa35197",6318:"a984acba",6334:"56002f92",6356:"c4ff564b",6382:"988da39f",6390:"69fcaaf2",6407:"821f768c",6420:"f01c482d",6459:"8d0d90ae",6519:"33f17ee4",6528:"34c40c42",6563:"0dff8c91",6607:"47701516",6613:"aad74bf8",6680:"b50cd004",6726:"9b884a71",6746:"7a9ef4cf",6751:"316d9178",6764:"604194b0",6783:"a245eb91",6810:"85d2db1a",6850:"84a31381",6852:"93a1c433",6930:"0fd0a4c0",6934:"0bea1c79",6936:"11e2f3ab",6992:"6d760b3f",7056:"4f9ada17",7091:"acb737bf",7102:"f86e15f7",7182:"fbb072ef",7199:"d0e1cd7c",7276:"2557d785",7332:"e61d25d8",7356:"ed18e127",7429:"753697a9",7435:"66e122e8",7436:"854e8bfb",7446:"d094d338",7448:"327b1e4d",7466:"b7ec6944",7476:"2df10853",7487:"27da3693",7490:"2101f84c",7511:"f4c20693",7525:"65ede588",7596:"be31f52e",7618:"ee7d59f9",7655:"ed180d22",7711:"6f227de2",7759:"fdf41ba3",7836:"efab6ef4",7849:"bd8af4e3",7882:"2cab60b5",7917:"ef358123",7927:"d67ab1b5",7979:"3a36d0f1",7984:"657a9c2e",8023:"4ae9f602",8043:"58a6f4f0",8053:"9551434d",8098:"b02934d9",8160:"76749ee7",8166:"aa2b112b",8236:"a9feca5b",8288:"a4d86ec1",8290:"646b6511",8297:"07eb26a2",8300:"24745011",8314:"36b51c7a",8327:"28a45459",8355:"e98417d3",8472:"2dd8cfa3",8474:"29f5e31e",8483:"3def0771",8594:"0689b053",8654:"7cff029e",8666:"b68097f5",8674:"d8c3b5e0",8712:"c0c742da",8727:"5a1997a6",8769:"dc79b4c4",8812:"9846c30e",8841:"1e6e374b",8844:"98d67ac1",8900:"65ef8078",9073:"84a0dfc0",9077:"fc4eed48",9078:"2fdaef79",9081:"59bc7f1d",9093:"afc32f8e",9119:"de78aa83",9151:"be9e0cca",9188:"4d381dff",9198:"0fa46027",9236:"afd91c4a",9274:"d0648ca1",9332:"c5bdf652",9416:"4aac8853",9442:"26fe5dc6",9462:"8a1b67f6",9503:"3d1b55b4",9532:"8cab05a2",9542:"3fdde8bb",9551:"a9658534",9582:"d1c300a8",9601:"f31e10c3",9630:"93a9daa2",9642:"ad78a726",9662:"ad5548e0",9664:"d51dd8a6",9691:"2a7592ed",9722:"e0eaf590",9732:"18dab1f9",9746:"ceaeaeb2",9794:"37a4a262",9856:"15693ef6",9875:"9f58136a",9939:"38ff438a",9948:"52892944",9958:"0cd254da",9980:"ecd7bdf7",9989:"fec404b4"}[t]+".js",l.miniCssF=t=>{},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},s="docs:",l.l=(t,_,o,a)=>{if(e[t])e[t].push(_);else{var d,m;if(void 0!==o)for(var h=document.getElementsByTagName("script"),r=0;r<h.length;r++){var p=h[r];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==s+o){d=p;break}}d||(m=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.setAttribute("data-webpack",s+o),d.src=t),e[t]=[_];var n=(s,_)=>{d.onerror=d.onload=null,clearTimeout(i);var o=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((t=>t(_))),s)return s(_)},i=setTimeout(n.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=n.bind(null,d.onerror),d.onload=n.bind(null,d.onload),m&&document.head.appendChild(d)}},l.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.p="/",(()=>{var t={2750:0,9469:0};l.f.j=(e,s)=>{var _=l.o(t,e)?t[e]:void 0;if(0!==_)if(_)s.push(_[2]);else if(/^(2750|9469)$/.test(e))t[e]=0;else{var o=new Promise(((s,o)=>_=t[e]=[s,o]));s.push(_[2]=o);var a=l.p+l.u(e),d=new Error;l.l(a,(s=>{if(l.o(t,e)&&(0!==(_=t[e])&&(t[e]=void 0),_)){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,_[1](d)}}),"chunk-"+e,e)}},l.O.j=e=>0===t[e];var e=(e,s)=>{var _,o,[a,d,m]=s,h=0;if(a.some((e=>0!==t[e]))){for(_ in d)l.o(d,_)&&(l.m[_]=d[_]);if(m)var r=m(l)}for(e&&e(s);h<a.length;h++)o=a[h],l.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return l.O(r)},s=self.webpackChunkdocs=self.webpackChunkdocs||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})()})();