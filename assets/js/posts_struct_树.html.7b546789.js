"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3245],{6262:(e,a)=>{a.A=(e,a)=>{const l=e.__vccOpts||e;for(const[e,n]of a)l[e]=n;return l}},792:(e,a,l)=>{l.r(a),l.d(a,{comp:()=>o,data:()=>r});var n=l(641);const i={},o=(0,l(6262).A)(i,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,a[0]||(a[0]=[(0,n.Fv)('<h1 id="树" tabindex="-1"><a class="header-anchor" href="#树"><span>树</span></a></h1><h3 id="一、关键概念" tabindex="-1"><a class="header-anchor" href="#一、关键概念"><span>一、关键概念</span></a></h3><ol><li>结点的度指节点拥有的子节点（注意子节点的子节点数量不算在内）的数量，比如二叉树的度就是2。</li><li>树的度是指树中节点的最大度数，比如二叉树的度最大为2那树的度就是2.</li><li>深度指从跟节点往子节点计算，根节点的深度是0，跟节点的子节点的深度是1，根节点的子节点的子节点的深度是2。</li><li>高度指由最外面的叶子节点开始数，树叶的高度是0，树叶的父节点的高度是1。</li><li>阶Order指节点的子节点数目的最大值，比如二叉树的阶就是2。</li><li>关键字指标识和区分数据记录的值比如用户表中的用户ID，如<code>B+树</code>中非叶子节点中的关键字关联叶子节点数据记录的关键字。</li><li>根节点指最顶端的节点。</li><li>父节点</li><li>子节点</li><li>结点。树中的每个点有的书中也称为节点。</li><li>路径。在一棵树中，一个结点到另一个结点之间的通路，称为路径。</li><li>路径长度。在一条路径中，每经过一个结点，路径长度都要加1。</li><li>结点的权指的是给每一个结点赋予一个新的数值，被称为这个结点的权。</li><li>结点的带权路径长度：指的是从根结点到该结点之间的路径长度与该结点的权的乘积。</li></ol><h3 id="二、常见的树" tabindex="-1"><a class="header-anchor" href="#二、常见的树"><span>二、常见的树</span></a></h3><h5 id="_1-二叉树" tabindex="-1"><a class="header-anchor" href="#_1-二叉树"><span>1.二叉树</span></a></h5><p>叶子节点只有两个的树.</p><h5 id="_2-满二叉树" tabindex="-1"><a class="header-anchor" href="#_2-满二叉树"><span>2.满二叉树</span></a></h5><p>满二叉树可以认为是那种叶子节点完整的二叉树，也就是叶子结点都是满的，比如一个根节点和2个子节点的二叉树就是满二叉，叶子节点是对称的，换一句话说是 “叶节点除外的所有节点均含有两个子树的树被称为满二叉树”。</p><h5 id="_3-完全二叉树" tabindex="-1"><a class="header-anchor" href="#_3-完全二叉树"><span>3.完全二叉树</span></a></h5><p>完全二叉树意味着除了最后一层外，每一层都是满的，并且最后一层的节点是从左到右依次排列的。判断技巧：判断某二叉树是否是完全二叉树的办法，那就是看着树的示意图，心中默默给每个结点按照满二叉树的结构逐层顺序编号，如果编号出现空档，就说明不是完全二叉树，否则就是。</p><h5 id="_4-二叉查找树" tabindex="-1"><a class="header-anchor" href="#_4-二叉查找树"><span>4.二叉查找树</span></a></h5><p>根节点有2个子树，如果左子树所有结点值都小于根节点，右子树所有结点均大于根节点，这种大小有序分布的很方便查找，被称为二叉查找树。根节点大于左子节点，小于右子节点。查找的时间复杂度是<code>O(LogN)</code>也就是像二分法查找，如果一直堆加左边节点最糟糕的情况下会退化为一个链表，查找的时间复杂度是<code>O(n)</code>。</p><h5 id="_5-霍夫曼树" tabindex="-1"><a class="header-anchor" href="#_5-霍夫曼树"><span>5.霍夫曼树</span></a></h5><p>哈夫曼树（Huffman Tree）是一种<code>带权路径长度最短的二叉树</code>，也被称为最优二叉树。它在数据压缩编码等领域有着广泛的应用。压缩技术起源，当用<code>n</code>个结点构建一棵树，如果这棵树的<code>带权路径长度</code>最小，称这棵树为<code>最优二叉树</code>，有时也叫<code>赫夫曼树</code>或者<code>哈夫曼树</code>。可以用来压缩数据，简单来说就是将字符串比如<code>ABBCCCDDDDDDDD</code>压缩时候将出现次数更改为权值，也就是<code>A1\\B2\\C3\\D8</code>，构建为哈夫曼树，并且使用路径用来生成唯一的编码比如<code>D</code>的编码是<code>2</code>，在哈夫曼树中，从根节点到每个叶子节点的路径可以用于表示一种字符，确切地说是用于生成该字符的哈夫曼编码。所以压缩是权值加上编码映射替换实现。</p><h5 id="_6-b树" tabindex="-1"><a class="header-anchor" href="#_6-b树"><span>6.B树</span></a></h5><p>B树（B - Tree）是一种平衡的多路搜索树（多叉树）。一颗<code>m</code>阶B树，每个子结点数量和每个节点内的关键字数量都有一个规则，属于排序二叉树，<code>结点内存值</code>，这是和<code>B+</code>最大的区别。平衡一般指的是高度平衡左右子树的高度差不会超过某个特定的值通常是1。</p><h5 id="_7-b-树" tabindex="-1"><a class="header-anchor" href="#_7-b-树"><span>7.B+树</span></a></h5><p>是平衡的多路搜索树。B+的结点存索引不存数据，<code>数据只存在叶子节点</code>，B+相邻叶子节点通过<code>双向链表</code>指针连起来的。查找数据需要先找到节点，而B+树则需要通过索引找到叶子结点中的数据才结束。B+树一般存储在SSD或者磁盘，树的深度较小，可以减少CPU与磁盘交互时间。</p><h5 id="_8-avl平衡二叉树" tabindex="-1"><a class="header-anchor" href="#_8-avl平衡二叉树"><span>8.AVL平衡二叉树</span></a></h5><p>二叉排序树且自平衡（左右高度差小于等于1），是一种有序的、自平衡的二叉树。因为二叉树在最糟糕的情况下会退化为链表，查找时间复杂度会从<code>O(LogN)</code>扩大到<code>O(n)</code>，所以引入了自平衡(左旋右旋)，像链表的二叉树会自动调整结构恢复为二叉树的结构。但是新增和删除节点的时候自平衡往往会导致时间复杂度巨大。于是有了红黑树。AVL平衡二叉树的查找时间复杂度如果<code>8</code>个节点<code>log2(8)=3</code>那么最多<code>3</code>次就能找到，而链表长度是<code>8</code>可能需要遍历<code>8</code>个节点才能找到。</p><h5 id="_9-红黑树" tabindex="-1"><a class="header-anchor" href="#_9-红黑树"><span>9.红黑树</span></a></h5><p>自平衡二叉查找树，特点是根节点是黑色，红节点的子节点一定是黑色，查找时间复杂度是<code>O(logN)</code>，插入和删除的时间复杂度是<code>O(logN)</code>，标记为红黑色主要是为了降低自平衡的时候时间复杂度，和查找是没有关系的。红黑树数据一般存在内存之中，数据量小方便查找。</p><h4 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h4><ol><li>InnoDB一棵B+树可以存放多少行数据</li></ol><p>16KB一个页缓存，一般2000w行，3层高度。</p><ol start="2"><li><p>为什么索引结构默认使用B+树，而不是hash，二叉树，红黑树，B-树：</p><p>hash适合等值查找，可以认为hash是有一个算法将值和地址有一个特殊计算算法，每一个值都可以快速通过这个算法算出来，所以每一个值的时间复杂度都是一样的，虽然可以快速定位，但是没有顺序，不适合范围查找，即使hash查询某一条数据非常快时间复杂度是O(1)。 二叉树的高度不均匀，不能自平衡，查找效率跟数据有关（树的高度），不稳定。 红黑树是一种特化的平衡二叉树，MySQL 数据量很大的时候，索引的体积也会很大，内存放不下的而从磁盘读取，树的层次太高的话，读取磁盘的次数就多了。 B树不管叶子节点还是非叶子节点，都会保存数据，这样导致在非叶子节点中能保存的指针数量变少（有些资料也称为扇出），指针少的情况下要保存大量数据，只能增加树的高度，导致IO操作变多，查询性能变低。IO为什么说IO变多呢因为每次磁盘IO读出的数据量是固定的，B树的叶子节点也存储数据无疑变大增加了IO，另外就是B+树所有的Data域在叶子节点，会用双向链表串联，加速区间访问。</p></li><li><p>B-树和B+树的区别：</p></li></ol><p>数据存放角度，<code>B树</code>内部节点是保存数据，而<code>B+树</code>内部节点是不保存数据的，只作索引作用，它的叶子节点才保存数据。叶子结点之间关联<code>B+树</code>相邻的叶子节点之间是通过链表指针连起来的，<code>B树</code>却不是。</p><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h3><ul><li><a href="http://c.biancheng.net/data_structure" target="_blank" rel="noopener noreferrer">数据结构教程</a></li><li><a href="https://zhuanlan.zhihu.com/p/351240279" target="_blank" rel="noopener noreferrer">详解B+</a></li><li><a href="https://blog.csdn.net/weixin_40862011/article/details/85047834" target="_blank" rel="noopener noreferrer">详解B树</a></li><li><a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" target="_blank" rel="noopener noreferrer">数据结构可视化</a></li><li><a href="https://blog.csdn.net/weixin_36098377/article/details/108688986" target="_blank" rel="noopener noreferrer">索引为啥是B+</a></li><li><a href="https://blog.csdn.net/jarvan5/article/details/112428036" target="_blank" rel="noopener noreferrer">AVL平衡二叉树</a></li><li><a href="https://blog.csdn.net/qq_15037231/article/details/103501139" target="_blank" rel="noopener noreferrer">红黑树与B+树</a></li><li><a href="https://www.jianshu.com/p/58562aec3d1c" target="_blank" rel="noopener noreferrer">B+原理详解-较浅显易懂</a></li></ul>',29)]))}]]),r=JSON.parse('{"path":"/posts/struct/%E6%A0%91.html","title":"树","lang":"zh-CN","frontmatter":{"description":"树 一、关键概念 结点的度指节点拥有的子节点（注意子节点的子节点数量不算在内）的数量，比如二叉树的度就是2。 树的度是指树中节点的最大度数，比如二叉树的度最大为2那树的度就是2. 深度指从跟节点往子节点计算，根节点的深度是0，跟节点的子节点的深度是1，根节点的子节点的子节点的深度是2。 高度指由最外面的叶子节点开始数，树叶的高度是0，树叶的父节点的高度...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://weiqiangxu.github.io/posts/struct/%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"笔记本"}],["meta",{"property":"og:title","content":"树"}],["meta",{"property":"og:description","content":"树 一、关键概念 结点的度指节点拥有的子节点（注意子节点的子节点数量不算在内）的数量，比如二叉树的度就是2。 树的度是指树中节点的最大度数，比如二叉树的度最大为2那树的度就是2. 深度指从跟节点往子节点计算，根节点的深度是0，跟节点的子节点的深度是1，根节点的子节点的子节点的深度是2。 高度指由最外面的叶子节点开始数，树叶的高度是0，树叶的父节点的高度..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuweiqiang\\",\\"url\\":\\"https://weiqiangxu.github.io\\"}]}"]]},"headers":[{"level":3,"title":"一、关键概念","slug":"一、关键概念","link":"#一、关键概念","children":[]},{"level":3,"title":"二、常见的树","slug":"二、常见的树","link":"#二、常见的树","children":[]},{"level":3,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"readingTime":{"minutes":7.11,"words":2134},"filePathRelative":"posts/struct/树.md","excerpt":"\\n<h3>一、关键概念</h3>\\n<ol>\\n<li>结点的度指节点拥有的子节点（注意子节点的子节点数量不算在内）的数量，比如二叉树的度就是2。</li>\\n<li>树的度是指树中节点的最大度数，比如二叉树的度最大为2那树的度就是2.</li>\\n<li>深度指从跟节点往子节点计算，根节点的深度是0，跟节点的子节点的深度是1，根节点的子节点的子节点的深度是2。</li>\\n<li>高度指由最外面的叶子节点开始数，树叶的高度是0，树叶的父节点的高度是1。</li>\\n<li>阶Order指节点的子节点数目的最大值，比如二叉树的阶就是2。</li>\\n<li>关键字指标识和区分数据记录的值比如用户表中的用户ID，如<code>B+树</code>中非叶子节点中的关键字关联叶子节点数据记录的关键字。</li>\\n<li>根节点指最顶端的节点。</li>\\n<li>父节点</li>\\n<li>子节点</li>\\n<li>结点。树中的每个点有的书中也称为节点。</li>\\n<li>路径。在一棵树中，一个结点到另一个结点之间的通路，称为路径。</li>\\n<li>路径长度。在一条路径中，每经过一个结点，路径长度都要加1。</li>\\n<li>结点的权指的是给每一个结点赋予一个新的数值，被称为这个结点的权。</li>\\n<li>结点的带权路径长度：指的是从根结点到该结点之间的路径长度与该结点的权的乘积。</li>\\n</ol>","autoDesc":true}')}}]);