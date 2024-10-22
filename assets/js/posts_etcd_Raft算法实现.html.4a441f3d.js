"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7032],{6262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,l]of t)a[e]=l;return a}},1212:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>i});var l=a(641);const r={},n=(0,a(6262).A)(r,[["render",function(e,t){return(0,l.uX)(),(0,l.CE)("div",null,t[0]||(t[0]=[(0,l.Fv)('<p><a href="https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%AE%9E%E8%B7%B5%E4%B9%8B%E8%B7%AF%EF%BC%88%E5%AE%8C%EF%BC%89/09%20%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%80%E8%87%B4%E6%80%A7%E7%AE%97%E6%B3%95%20Raft%20%E5%92%8C%20Etcd%20%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.md" target="_blank" rel="noopener noreferrer">分布式一致性算法Raft和Etcd原理解析</a></p><p><a href="https://zhuanlan.zhihu.com/p/405811320" target="_blank" rel="noopener noreferrer">ETCD介绍—etcd概念及原理方面分析</a><a href="https://toutiao.io/posts/clo2v3/preview" target="_blank" rel="noopener noreferrer">认识分布式系统etcd</a><a href="https://doczhcn.gitbook.io/etcd/index/index" target="_blank" rel="noopener noreferrer">etcd官方文档中文版</a></p><h3 id="raft角色" tabindex="-1"><a class="header-anchor" href="#raft角色"><span>Raft角色</span></a></h3><ol><li>Leader（领导者）</li><li>Follower（追随者）</li><li>Candidate（候选者）</li></ol><h3 id="raft机制设定带来的问题有哪些" tabindex="-1"><a class="header-anchor" href="#raft机制设定带来的问题有哪些"><span>Raft机制设定带来的问题有哪些</span></a></h3><ol><li>选举（Leader Election）</li><li>日志复制（Log Replication）</li><li>安全性（Safety）</li></ol><h3 id="raft-算法之-leader-election-原理" tabindex="-1"><a class="header-anchor" href="#raft-算法之-leader-election-原理"><span>Raft 算法之 Leader Election 原理</span></a></h3><p>第一阶段：所有节点都是 Follower 第二阶段：Follower 转为 Candidate 并发起投票 第三阶段：投票策略 第四阶段：Candidate 转为 Leader</p><h3 id="raft-算法之-log-replication-原理" tabindex="-1"><a class="header-anchor" href="#raft-算法之-log-replication-原理"><span>Raft 算法之 Log Replication 原理</span></a></h3><p>第一阶段：客户端请求提交到 Leader 第二阶段：Leader 将 Entry 发送到其它 Follower 第三阶段：Leader 等待 Followers 回应。 第四阶段：Leader 回应客户端。 第五阶段，Leader 通知 Followers Entry 已提交</p><h3 id="raft-算法之安全性" tabindex="-1"><a class="header-anchor" href="#raft-算法之安全性"><span>Raft 算法之安全性</span></a></h3><ol><li>选举限制</li><li>提交之前任期内的日志条目</li></ol><h3 id="etcd" tabindex="-1"><a class="header-anchor" href="#etcd"><span>Etcd</span></a></h3><ol><li>架构</li><li>基本概念</li><li>应用场景（服务发现、消息发布和订阅、分布式锁、集群监控与Leader竞选）</li></ol><h3 id="选举优先级" tabindex="-1"><a class="header-anchor" href="#选举优先级"><span>选举优先级</span></a></h3><ol><li>candidate之中term-index最大的获得选票</li><li>Raft选主必须获得选票 &gt; N/2 才可以 (那3个宕机1个是不是永远无法选主了呢)</li></ol><h3 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h3><p><a href="https://juejin.cn/post/6907151199141625870" target="_blank" rel="noopener noreferrer">选主逻辑依赖任期（term）实现说的非常细致生动</a></p><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h3><ol><li><p>Raft选主必须获得选票 &gt; N/2 才可以 ，那3个节点的宕机1个是不是永远无法选主了呢</p><p>不一定。即使其中一个节点宕机，只要剩下的两个节点仍然可以获得足够的选票（即大于N/2），它们仍然可以选出新的主节点。在Raft协议中，只要仍然有大多数节点存活且可以通信，集群就可以继续正常工作。</p></li><li><p>为什么说2个节点的集群不可能是高可用集群</p><p>在一个只有两个节点的集群中，如果其中一个节点宕机，剩下的一个节点无法组成大多数（大于N/2），因此无法达成一致，也就无法选主。这样会导致集群无法正常工作，从而降低可用性。因此，一个只有两个节点的集群通常被认为不是高可用的，因为无法容忍单点故障。高可用集群通常是由多个节点组成，以确保即使有几个节点失效，集群仍然可以继续运行。</p></li></ol>',20)]))}]]),i=JSON.parse('{"path":"/posts/etcd/Raft%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0.html","title":"Golang和Etcd实现Raft算法","lang":"zh-CN","frontmatter":{"title":"Golang和Etcd实现Raft算法","category":["etcd"],"tag":["etcd"],"description":"分布式一致性算法Raft和Etcd原理解析 ETCD介绍—etcd概念及原理方面分析 认识分布式系统etcd etcd官方文档中文版 Raft角色 Leader（领导者） Follower（追随者） Candidate（候选者） Raft机制设定带来的问题有哪些 选举（Leader Election） 日志复制（Log Replication） 安全性...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/etcd/Raft%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"QuickStart程序员"}],["meta",{"property":"og:title","content":"Golang和Etcd实现Raft算法"}],["meta",{"property":"og:description","content":"分布式一致性算法Raft和Etcd原理解析 ETCD介绍—etcd概念及原理方面分析 认识分布式系统etcd etcd官方文档中文版 Raft角色 Leader（领导者） Follower（追随者） Candidate（候选者） Raft机制设定带来的问题有哪些 选举（Leader Election） 日志复制（Log Replication） 安全性..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"etcd"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Golang和Etcd实现Raft算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"Raft角色","slug":"raft角色","link":"#raft角色","children":[]},{"level":3,"title":"Raft机制设定带来的问题有哪些","slug":"raft机制设定带来的问题有哪些","link":"#raft机制设定带来的问题有哪些","children":[]},{"level":3,"title":"Raft 算法之 Leader Election 原理","slug":"raft-算法之-leader-election-原理","link":"#raft-算法之-leader-election-原理","children":[]},{"level":3,"title":"Raft 算法之 Log Replication 原理","slug":"raft-算法之-log-replication-原理","link":"#raft-算法之-log-replication-原理","children":[]},{"level":3,"title":"Raft 算法之安全性","slug":"raft-算法之安全性","link":"#raft-算法之安全性","children":[]},{"level":3,"title":"Etcd","slug":"etcd","link":"#etcd","children":[]},{"level":3,"title":"选举优先级","slug":"选举优先级","link":"#选举优先级","children":[]},{"level":3,"title":"相关文章","slug":"相关文章","link":"#相关文章","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]}],"readingTime":{"minutes":2.46,"words":739},"filePathRelative":"posts/etcd/Raft算法实现.md","excerpt":"<p><a href=\\"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%AE%9E%E8%B7%B5%E4%B9%8B%E8%B7%AF%EF%BC%88%E5%AE%8C%EF%BC%89/09%20%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%80%E8%87%B4%E6%80%A7%E7%AE%97%E6%B3%95%20Raft%20%E5%92%8C%20Etcd%20%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">分布式一致性算法Raft和Etcd原理解析</a></p>","autoDesc":true}')}}]);