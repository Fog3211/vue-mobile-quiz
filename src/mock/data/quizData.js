let all_quiz_list = [{
        quiz_list_id: 0,
        subject: "计算机二级",
        quiz_title: "计算机二级（卷一）",
        quiz_list: [{
            id: 0,
            index: 1,
            title: "世界上公认的第一台电子计算机诞生的年代是",
            options: [
                "20世纪 30年代",
                "20世纪 40年代",
                "20世纪 80年代",
                "20世纪 90年代"
            ],
            answer: 2,
            reason: "世界上第一台现代电子计算机 电子数字积分式计算机 （ ENIAC）诞生于 1946 年 2 月 14 日的美国宾夕法尼亚大学，至今仍被人们公认。"
        }, {
            id: 1,
            index: 2,
            title: "20GB的硬盘表示容量约为",
            options: [
                "20亿个字节",
                "20亿个二进制位",
                "200亿个字节",
                "200亿个二进制位"
            ],
            answer: 3,
            reason: "根据换算公式 1GB=1000MB=1000*1000KB=1000*1000*1000B，20GB=2*1010B。"
        }, {
            id: 2,
            index: 3,
            title: "在微机中，西文字符所采用的编码是",
            options: [
                "EBCDIC码",
                "ASCII码",
                "国标码",
                "BCD码"
            ],
            answer: 2,
            reason: "西文字符所采用的编码是 ASCII 码"
        }, {
            id: 3,
            index: 4,
            title: "计算机安全是指计算机资产安全，即",
            options: [
                "计算机信息系统资源不受自然有害因素的威胁和危害",
                "信息资源不受自然和人为有害因素的威胁和危害",
                "计算机硬件系统不受人为有害因素的威胁和危害",
                "计算机信息系统资源和信息资源不受自然和人为有害因素的威胁和危害"
            ],
            answer: 3,
            reason: "我国公安部计算机管理监察司的定义是：计算机安全是指计算机资产安全，即计算机信息系统资源和信息资源不受自然和人为有害因素的威胁和危害"
        }, {
            id: 4,
            index: 5,
            title: "度量计算机运算速度常用的单位是",
            options: [
                "MIPS",
                "MHz",
                "MB/s",
                "Mbps"
            ],
            answer: 1,
            reason: "运算速度指的是微机每秒所能执行的指令条数，单位是 MIPS（百万条指令 / 秒）"
        }]
    },
    {
        quiz_list_id: 1,
        subject: "计算机二级",
        quiz_title: "计算机网络（卷二）",
        quiz_list: [{
            id: 5,
            index: 1,
            title: "下列设备组中，完全属于计算机输出设备的一组是",
            options: [
                "喷墨打印机 , 显示器，键盘",
                "激光打印机，键盘，鼠标器",
                "键盘，鼠标器，扫描仪",
                "打印机，绘图仪，显示器"
            ],
            answer: 3,
            reason: "本题可采用排除法， A、B、C选项中都有键盘，而键盘是计算机输入设备，故可排除 A、B、C，选择 D"
        }, {
            id: 6,
            index: 2,
            title: "计算机软件的确切含义是",
            options: [
                "计算机程序、数据与相应文档的总称",
                "系统软件与应用软件的总和",
                "操作系统、数据库管理软件与应用软件的总和",
                "各类应用软件的总称"
            ],
            answer: 0,
            reason: "计算机软件的含义： (1) 运行时，能够提供所要求功能和性能的指令或计算机程序集合。 (2)程序能够满意地处理信息的数据结构。 (3) 描述程序功能需求以及程序如何操作和使用所要求的文档。故选 A。"
        }, {
            id: 7,
            index: 3,
            title: "下列关于计算机病毒的叙述中，错误的是",
            options: [
                "计算机病毒具有潜伏性",
                "计算机病毒具有传染性",
                "感染过计算机病毒的计算机具有对该病毒的免疫性",
                "计算机病毒是一个特殊的寄生程序"
            ],
            answer: 2,
            reason: "计算机病毒，是指编制者在计算机程序中插入的破坏计算机功能或者破坏数据，影响计算机使用并且能够自我复制的一组计算机指令或者程序代码。具有寄生性、破坏性、传染性、潜伏性和隐蔽性"
        }, {
            id: 8,
            index: 4,
            title: "在一个非零无符号二进制整数之后添加一个 0，则此数的值为原数的",
            options: [
                "4倍",
                "2倍",
                "1/2 倍",
                "1/4 倍"
            ],
            answer: 1,
            reason: "最后位加 0 等于前面所有位都乘以 2 再相加，所以是 2 倍"
        }, {
            id: 9,
            index: 5,
            title: "以下关于编译程序的说法正确的是（",
            options: [
                "编译程序属于计算机应用软件，所有用户都需要编译程序",
                "编译程序不会生成目标程序，而是直接执行源程序",
                "编译程序完成高级语言程序到低级语言程序的等价翻译",
                "编译程序构造比较复杂，一般不进行出错处理、"
            ],
            answer: 2,
            reason: "编译程序就是把高级语言变成计算机可以识别的二进制语言，即编译程序完成高级语言程序到低级语言程序的等价翻译"
        }]
    },
    {
        quiz_list_id: 2,
        subject: "驾照考试",
        quiz_title: "驾照考试（卷一）",
        quiz_list: [{
                id: 10,
                index: 1,
                title: "驾驶技能准考证明的有效期是多久？",
                options: [
                    "1年",
                    "2年",
                    "3年",
                    "4年"
                ],
                answer: 2,
                reason: "驾驶技能准考证明的有效期为三年，申请人应当在有效期内完成科目二和科目三考试。未在有效期内完成考试的，已考试合格的科目成绩作废。"
            },
            {
                id: 11,
                index: 2,
                title: "驾驶人有哪种情形，交通警察可依法扣留机动车驾驶证？",
                options: [
                    "饮酒后驾驶机动车",
                    "超过规定速度10%",
                    "疲劳后驾驶机动车",
                    "行车中未系安全带"
                ],
                answer: 0,
                reason: "饮酒后驾驶机动车的，处暂扣6个月机动车驾驶证，并处1000元以上2000元以下罚款。因饮酒后驾驶机动车被处罚，再次饮酒后驾驶机动车的，处10日以下拘留，并处1000元以上2000元以下罚款，吊销机动车驾驶证。"
            },
            {
                id: 12,
                index: 3,
                title: "下长坡连续使用行车制动会导致什么？",
                options: [
                    "会缩短发动机寿命",
                    "增加驾驶人的劳动强度",
                    "会使制动器温度升高而使制动效果急剧下降",
                    "容易造成车辆倾翻"
                ],
                answer: 2,
                reason: "持续用刹车，会造成刹车片发热，从而制动力减小，严重的会丧失制动，所以长下坡要用低档，用发动机制动。"
            },
            {
                id: 13,
                index: 4,
                title: "假如你驾车行驶在颠簸路段时，以下做法正确的是什么？",
                options: [
                    "稳住加速踏板",
                    "挂抵挡档位缓抬加速踏板",
                    "挂高档位缓抬加速踏板",
                    "挂抵挡踏满加速踏板"
                ],
                answer: 1,
                reason: "缓抬加速踏板是为了低俗平稳通过颠簸路段，让车辆怠速前进；挂抵挡是为了获得更多的发动机牵引力。"
            },
            {
                id: 14,
                index: 5,
                title: "驾驶人违反交通运输管理法规发生重大事故致人重伤、死亡，可能会受到什么刑罚？",
                options: [
                    "处3年以下徒刑或者拘役",
                    "处3年以上7年以下徒刑",
                    "处5年以上徒刑",
                    "处7年以上徒刑"
                ],
                answer: 0,
                reason: "违反交通运输管理法规，因而发生重大事故，致人重伤、死亡或者使公私财产遭受重大损失的，处三年以下有期徒刑或者拘役；交通运输肇事后逃逸或者有其他特别恶劣情节的，处三年以上七年以下有期徒刑；因逃逸致人死亡的，处七年以上有期徒刑。在道路上驾驶机动车追逐竞驶，情节恶劣的，或者在道路上醉酒驾驶机动车的，处拘役，并处罚金。有前款行为，同时构成其他犯罪的，依照处罚较重的规定定罪处罚。"
            },
            {
                id: 15,
                index: 6,
                title: "行车中，遇非机动车抢行时，应怎样做？",
                options: [
                    "鸣喇叭警告",
                    "加速通过",
                    "减速让行",
                    "临近时突然加速"
                ],
                answer: 2,
                reason: "文明驾驶，礼貌让行。"
            },
            {
                id: 16,
                index: 7,
                title: "驾驶机动车时接打电话容易引发事故，以下原因错误的是什么?",
                options: [
                    "单手握方向盘，对机动车控制力下降",
                    "驾驶人注意力不集中，不能及时判断危险",
                    "电话的信号会对汽车电子设备的运行造成干扰",
                    "驾驶人对路况观察不到位，容易导致操作失误"
                ],
                answer: 2,
                reason: "驾驶机动车时接打电话容易引发事故，主要是因为接电话时单手握方向盘，对机动车控制力下降；驾驶人注意力不集中，不能及时判断危险；驾驶人对路况观察不到位，容易导致操作失误。"
            },
            {
                id: 17,
                index: 8,
                title: "持小型汽车驾驶证的驾驶人在下列哪种情况下需要接受审验？",
                options: [
                    "有效期满换发驾驶证时",
                    "一个记分周期末",
                    "记分周期未满分",
                    "记分周期满12分"
                ],
                answer: 0,
                reason: "换发驾驶证的时候才接受审验，积分周期满12分的接受理论一科目再教育。"
            },
            {
                id: 18,
                index: 9,
                title: "车辆在主干道上行驶，驶近主支干道交汇处时，为防止与从支路突然驶入的车辆相撞，应怎样做？",
                options: [
                    "提前减速、观察，谨慎驾驶",
                    "保持正常速度行驶",
                    "鸣喇叭，迅速通过",
                    "提前加速通过"
                ],
                answer: 0,
                reason: "安全第一，文明驾驶。"
            },
            {
                id: 19,
                index: 10,
                title: "驾驶机动车跨越双实线行驶属于什么行为？",
                options: [
                    "违章行为",
                    "违法行为",
                    "过失行为",
                    "违规行为"
                ],
                answer: 1,
                reason: "驾驶机动车跨越双实线行驶属于违反《交通安全法》，是违法行为，容易发生交通事故。"
            }
        ]
    },
    {
        quiz_list_id: 3,
        subject: "英语",
        quiz_title: "英语（卷一）",
        quiz_list: [{
            id: 20,
            index: 1,
            title: "It seems that living green is easy and affordable. A small step masks a ____big difference.",
            options: [
                "exactly",
                "fortunately",
                "surprisingly",
                "hardly"
            ],
            answer: 2,
            reason: "exactly：准确地； fortunately ：幸运地； surprisingly ：惊讶地，出乎意料地； hardly：几乎不。题干意思是：似乎保护环境是出乎意料的简单可行，小小的行动能带来很大的不同。"
        }, {
            id: 21,
            index: 2,
            title: " As there is less and less coal and oil, scientists are exploring new ways of making use of ____ energy, such as sunlight, wind and water for power and fuel.",
            options: [
                "primary",
                "alternative",
                "instant",
                "unique"
            ],
            answer: 2,
            reason: "既然石油和煤都越来越少，人们只好使用一些其它可替代这些燃料的东西， alternative 有“可选择的，可替代的”之意，符合句意。 primary “首要的，初期的”，instant“立即的，迅速的” ，unique“独特的”"
        }, {
            id: 22,
            index: 3,
            title: "I can ___ be a teacher. I’ m not a very patient person",
            options: [
                "seldom",
                "ever",
                "never",
                "always"
            ],
            answer: 2,
            reason: "我绝不会成为一名教师。因为我不是一个很有耐心的人。 seldom 表示“很少”；ever 表示“永远”用在肯定句中； never 表示“绝不，从来没有” always 表 示“总是”"
        }, {
            id: 23,
            index: 4,
            title: "How much she looked without her glasses! ",
            options: [
                "well",
                "good",
                "best",
                "better"
            ],
            answer: 3,
            reason: "考查系动词后跟形容词作表语。句意为：没有眼镜她看的多么好？与戴眼镜形成对比"
        }]
    },
    {
        quiz_list_id: 4,
        subject: "英语",
        quiz_title: "英语（卷二）",
        quiz_list: [{
            id: 24,
            index: 1,
            title: "It was a nice house, but ______ too small for a family of live.",
            options: [
                "rarely",
                "fairly",
                "rather",
                "pretty"
            ],
            answer: 2,
            reason: "C"
        }, {
            id: 25,
            index: 2,
            title: "She had just finished her homework ____ her mother asked her to practice playing the piano yesterday. ",
            options: [
                "when",
                "while",
                "after",
                "since"
            ],
            answer: 0,
            reason: "根据主从句的动词时态可知主句谓语动词的动作在从句谓语动词之前已经完成，引导词的意思是：当 ,, 的时候，选 A。"
        }, {
            id: 26,
            index: 3,
            title: " My parents don ’t mind what job I do ___ I am happy",
            options: [
                "even though ",
                "as soon as",
                "as long as ",
                "as though"
            ],
            answer: 2,
            reason: "根据题干意思可知此处是条件状语从句， 引导词意思是： 只要，选 C。even though引导让步状语从句，意思是：即使； as soon as引导时间状语从句，意思是：一 ,, 就 as though 引导方式状语从句，意思是：仿佛，好像"
        }, {
            id: 27,
            index: 4,
            title: " I ’m not surprised that he became a writer. Even as a child he had a _____ imagination. ",
            options: [
                "clear",
                "cautious",
                "funny",
                "vivid"
            ],
            answer: 3,
            reason: "D"
        }]
    },
    {
        quiz_list_id: 5,
        subject: "操作系统",
        quiz_title: "操作系统（卷一）",
        quiz_list: [{
            id: 28,
            index: 1,
            title: "下面的（）不是文件的存储结构",
            options: [
                "索引文件",
                "串联",
                "记录式文件",
                "连续文件"
            ],
            answer: 2,
            reason: "顺序文件：记录按在其文件的中的逻辑顺序依次存入储存介质而建立的，即顺序文件中的物理记录和逻辑记录的顺序是一致的连续文件：连续文件中次序相继的两个记录在存储介质中是相邻的（数组概念 串联文件：串联文件中的物理机理次序通过指针的链接表示（链表）"
        }, {
            id: 29,
            index: 2,
            title: "有一磁盘，共有10个柱面，每个柱面20个磁道，每个盘面分成16个扇区。采用位示图对其存储空间进行管理。如果字长是16个二进制位，那么位示图共需 （） 字",
            options: [
                "200",
                "128",
                "256",
                "100"
            ],
            answer: 0,
            reason: "盘物理块：20*16*100=3200 采用16字长：3200/16=200字"
        }, {
            id: 30,
            index: 3,
            title: "操作系统为每一个文件开辟一个存储区，在它的里面记录着该文件的有关信息。这就是所谓的",
            options: [
                "进程控制块",
                "文件控制块",
                "设备控制块",
                "作业控制块"
            ],
            answer: 1,
            reason: "PCB 进程控制块：描述进程外部特征，感知控制进程动态变化的数据结构 FCB 文件控制块：存储文件的相关信息的数据结构 DCB 设备控制块：记录硬件设备的特性，连接，使用情况等信息的数据结构 JCB 作业控制块：描述作业状态等相关信息的数据结构"
        }, {
            id: 31,
            index: 4,
            title: "文件控制块的英文缩写符号是",
            options: [
                "PCB",
                "DCB",
                "FCB",
                "MCB"
            ],
            answer: 2,
            reason: "File"
        }]
    },
    {
        quiz_list_id: 6,
        subject: "特别测试",
        quiz_title: "特别测试（单多选）",
        quiz_list: [{
            id: 32,
            index: 1,
            title: "(多选)委海空水五治联院而转指个体历变情知。立拉很来导来所住高格话积美温八。它长常京本观海以场报场油教度门行少。革叫内气参从例号速算影少提支接只",
            options: [
                "索引文件",
                "串联",
                "记录式文件",
                "连续文件",
                "啦啦啦",
                "hdjasdlasj",
            ],
            answer: [0, 4],
            reason: "AE 顺序文件：记录按在其文件的中录和逻辑记录的顺序是一致的连续文件：连续文件中次序相继的两个质中是相邻的（数组概念 串联文件：串联文件中的物理机理次序通过指针的链接表示（链表）"
        }, {
            id: 33,
            index: 2,
            title: "(多选)思红格根何此得小然高品以些速斗每。记形原专明程步技政值共参约音提。而保相那合先西白律件八省。什还第义路计江热难积型角着资。",
            options: [
                "录的顺序是一致",
                "保相那合先",
                "连续",
            ],
            answer: [0, 1, 2],
            reason: "ABC 历变情知。立拉很来导来所住高格话"
        }, {
            id: 34,
            index: 3,
            title: "(判断)历变情知。立拉很来导来所住高格话历变情知。立拉很来导来所住高格话",
            options: [
                "进程控制块",
                "文件控制块",
            ],
            answer: 1,
            reason: "B 结构 FCB 文件控制块：存储文件的相关信息的数据结构 DCB等信息的数据结构 JCB 作业控制块：描述作业状态等相关信息的数据结构"
        }, {
            id: 35,
            index: 4,
            title: "文件控制块的英文缩写符号是",
            options: [
                "PCB",
                "DCB",
                "FCB",
                "MCB",
                "LCB",
                "ACB",
            ],
            answer: 2,
            reason: "C 知。立拉很来导来所很来导来"
        }]
    },
]

let subject_list = [{
        id: 0,
        name: "英语",
        cover: require("@/assets/img/subject/1.jpg"),
        quiz_list_id: [3, 4]
    },
    {
        id: 1,
        name: "计算机二级",
        cover: require("@/assets/img/subject/2.jpg"),
        quiz_list_id: [0, 1]
    },
    {
        id: 2,
        name: "驾照考试",
        cover: require("@/assets/img/subject/3.jpg"),
        quiz_list_id: [2]
    },
    {
        id: 3,
        name: "操作系统",
        cover: require("@/assets/img/subject/4.jpg"),
        quiz_list_id: [5]
    },
    {
        id: 4,
        name: "边缘数据测试",
        cover: require("@/assets/img/subject/5.jpg"),
        quiz_list_id: [6]
    },
];

let latest_list = [{
    "id": 6,
    "label": "操作系统",
    "cover": require("@/assets/img/recommend/5.jpg"),
    "intro": '入东月论种实办变机价风总化四角光效研。已月指广科理手认传马对北圆东属型龙。还龙领历命引时手按约三即家称非万战东属型。确了按约三即家型龙。还龙领历命引时手按山线经。确了按约三即家称非万战东属型龙。还龙领历命引时很集安接二务布。置向值立干图列该空备目低广住'
}, {
    "id": 5,
    "label": "高等数学",
    "cover": require("@/assets/img/recommend/6.jpg"),
    "intro": '按约三即即家称非万战东属型即家称非万战东属型家称三即家称非万战东属型。确了按约三即家型龙。还龙领历命引时手按山线经。确了按约三即家称非万战东属型龙。还龙领历命引时很集安接二务布。置向值立干图列该空备目低广住'
}, ];

let hottest_list = [{
    "id": 4,
    "label": "数据结构（一）",
    "cover": require("@/assets/img/recommend/4.jpg"),
    "intro": '按约三即家称非万战东属型龙。还龙领历命引时手按约三即家称非万战东属型。确了按约三即家型龙。还龙领历命引时手按山线经。确了按约三即家称非万战东属型龙。还龙领历命引时很集安接二务布。置向值立干图列该空备目低广住'
}, ];

let recommend_list = [{
    "id": 0,
    "label": "驾考试题（一）",
    "cover": require("@/assets/img/recommend/1.jpg"),
    "intro": '社音思对极况照几器西广手按山线经。确了按约三即家称非万战东属型龙。还龙领历命引时手按山线经。确了按约三即家称非万战东属型龙。还龙领历命引时很集安接二务布。置向值立干图列该空备目低广住'
}, {
    "id": 1,
    "label": "雅思词汇（四）",
    "cover": require("@/assets/img/recommend/2.jpg"),
    "intro": '入东月论种实办变机价风总化四角光效研。已月指广科理手认传马对北圆切已条转。机价风总化四角光效研。已月指广科理手认传马对北圆切已条转。入受物装委从光起象系际七调厂月。传低具写从东除克几这期要难分。'
}, {
    "id": 2,
    "label": "公务员考试（三）",
    "cover": require("@/assets/img/recommend/3.jpg"),
    "intro": '广周却利力种青建打社音部通军。本能入见精定器办起整亲引器电快。广周却利力种青建打社音部通军。本能入见精定器办起整亲引器电快。各任使主走几论书结题然术海再心直指。加满难号下张特走持器精毛单角称什民。各任使主走几论书结题然术海再心直指。加满难号下张特走持器精毛单角称什民。'
}]
export {
    all_quiz_list,
    subject_list,
    hottest_list,
    latest_list,
    recommend_list,
}