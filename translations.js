// Translators: Add to this structure
const i18next_data = {
    debug: true,
    fallbackLng: "en",
    nsSeparator: false,
    resources: {
        en: {
            translation: {
                "title": "Killer Mortal Reviewer",
                "round-dec": "&lt; Prev Round",
                "round-inc": "Next Round &gt",
                "prev-mismatch": "&lt; Prev Error",
                "next-mismatch": "Next Error &gt;",
                "ply-dec2": "&lt; Prev Choice",
                "ply-inc2": "Next Choice &gt;",
                "ply-dec": "&lt; Prev",
                "ply-inc": "Next &gt;",
                "toggle-hands": "Toggle show hands",
                "toggle-mortal-advice": "Toggle Mortal advice",
                "options-label": "Options",
                "options": "Options",
                "langLabel": "Language",
                "about": "About",
                "about-body": [
                    "Mortal's opinions shown with green bars",
                    "Top choice always 100% height",
                    "Others relative to the top choice",
                    "User's choice shown with a yellow bar",
                    "Click on discard bars to toggle spoiler-free WWYD mode",
                    "Click on round indicator to show score table",
                    "Click on a row in the table to skip to that round",
                    'Report issues with GUI on the <a href="https://github.com/killerducky/killer_mortal_gui" target="_blank">Github project</a>',
                ],
                'Engine'                : 'Engine'                     ,
                'Model tag'             : 'Model tag'                  ,
                'Mjai-reviewer version' : 'Mjai-reviewer version'      ,
                'Game length'           : 'Game length'                ,
                'Hanchan'               : 'Hanchan'                    ,
                'Loading time'          : 'Loading time'               ,
                'Review time'           : 'Review time'                ,
                'Temperature'           : 'Temperature'                ,
                'Matches/total'         : 'Matches/total'          ,
                'Rating'                : 'Rating'                 ,
                "position-rel": {
                    "Hero" : "Hero",
                    "Shimo" : "Shimo",
                    "Toimen" : "Toimen",
                    "Kami" : "Kami",
                    "Pot" : "Pot",
                },
                "E":"E",
                "S":"S",
                "W":"W",
                "N":"N",
                "Wh":"Wh",
                "G":"G",
                "R":"R",
                "1z":"$t(E)",
                "2z":"$t(S)",
                "3z":"$t(W)",
                "4z":"$t(N)",
                "5z":"$t(Wh)",
                "6z":"$t(G)",
                "7z":"$t(R)",
                "spoiler": "(Spoiler: Mortal evaluations hidden. Click to show)",
                // Advice words
                'dahai'   : 'Cut',
                'pon'     : 'Pon',
                'chi'     : 'Chi',
                'none'    : 'Skip',
                'hora'    : 'Tsumo', // Default to Tsumo. If ron, javascript will change it.
                'ron'     : 'Ron',
                'reach'   : 'Riichi',
                "Hmm..."  : "Hmm...",
                "Clack!"  : "Clack!",
                // No need to disambiguate these in the GUI display -- context will show which kind it is
                'ankan'   : 'Kan',
                'daiminkan' : 'Kan',
                'kakan'   : 'Kan',
                // Results
                "Final"   : "Final", // Final score in score table
                "Round"   : "Round",
                "Ron"     : "Ron",
                "win-by"  : "{{type}} by {{winner}}",
                "ron-full"  : "{{winner}} Rons {{loser}}",
                "tsumo-full"  : "{{winner}} Tsumos",
                "Tsumo"   : "Tsumo",
                "流局"    : "Draw",
                "流し満貫" : "Nagashi Mangan",
                "九種九牌" : 'Nine Terminal Draw',
                "四家立直" : "Draw: Quadruple riichi",
                "三家和了" : "Draw: Triple Ron",
                // Yakus, points
                '飜' : 'Han',
                '符' : 'Fu',
                '点' : 'Points',
                '点∀' : 'Points each',
                "満貫":         "Mangan",       
                "跳満":         "Haneman",      
                "倍満":         "Baiman",       
                "三倍満":       "Sanbaiman",    
                "役満":         "Yakuman",      
                "数え役満":     "Yakuman",
                "切り上げ満貫": "Mangan",
                "門前清自摸和" : "Fully Concealed Hand",
                "立直" : "Riichi",
                "槍槓" : "Robbing a Kan",
                "嶺上開花" : "After a Kan",
                "海底摸月" : "Under the Sea",
                "河底撈魚" : "Under the River",
                "役牌 白" : "White Dragon",
                "役牌 發" : "Green Dragon",
                "役牌 中" : "Red Dragon",
                "役牌:自風牌" : "Seat Wind",
                "役牌:場風牌" : "Prevalent Wind",
                "断幺九" : "All Simples",
                "一盃口" : "Pure Double Sequence",
                "平和" : "Pinfu",
                "混全帯幺九" : "Half Outside Hand",
                "一気通貫" : "Pure Straight",
                "三色同順" : "Mixed Triple Sequence",
                "ダブル立直" : "Double Riichi",
                "三色同刻" : "Triple Triplets",
                "三槓子" : "Three Quads",
                "対々和" : "All Triplets",
                "三暗刻" : "Three Concealed Triplets",
                "小三元" : "Little Three Dragons",
                "混老頭" : "All Terminals and Honors",
                "七対子" : "Seven Pairs",
                "純全帯幺九" : "Fully Outside Hand",
                "混一色" : "Half Flush",
                "二盃口" : "Twice Pure Double Sequence",
                "清一色" : "Full Flush",
                "一発" : "Ippatsu",
                "ドラ" : "Dora",
                "赤ドラ" : "Red Five",
                "裏ドラ" : "Ura Dora",
                "抜きドラ" : "Kita",
                "天和" : "Blessing of Heaven",
                "地和" : "Blessing of Earth",
                "大三元" : "Big Three Dragons",
                "四暗刻" : "Four Concealed Triplets",
                "字一色" : "All Honors",
                "緑一色" : "All Green",
                "清老頭" : "All Terminals",
                "国士無双" : "Thirteen Orphans",
                "小四喜" : "Four Little Winds",
                "四槓子" : "Four Quads",
                "九蓮宝燈" : "Nine Gates",
                "八連荘" : "Eight-time East Staying",
                "純正九蓮宝燈" : "True Nine Gates",
                "四暗刻単騎" : "Single-wait Four Concealed Triplets",
                "国士無双十三面待ち" : "Thirteen-wait Thirteen Orphans",
                "大四喜" : "Four Big Winds",
                "燕返し" : "Tsubame-gaeshi",
                "槓振り" : "Kanburi",
                "十二落抬" : "Shiiaruraotai",
                "五門斉" : "Uumensai",
                "三連刻" : "Three Chained Triplets",
                "一色三順" : "Pure Triple Chow",
                "一筒摸月" : "Iipinmoyue",
                "九筒撈魚" : "Chuupinraoyui",
                "人和" : "Hand of Man",
                "大車輪" : "Big Wheels",
                "大竹林" : "Bamboo Forest",
                "大数隣" : "Numerous Neighbours",
                "石の上にも三年" : "Ishinouenimosannen",
                "大七星" : "Big Seven Stars",
                "根" : "Root",
                "嶺上開花" : "After a Kan",
                "嶺上放銃" : "Dealing into Win after Kan",
                "無番和" : "Yakuless Win",
                "槍槓" : "Robbing a Kan",
                "対々和" : "All Triplets",
                "清一色" : "Full Flush",
                "七対子" : "Seven Pairs",
                "帯幺九" : "Terminals in All Sets",
                "金勾釣" : "Single Wait after 4 Triplets",
                "清対" : "Pure Triplets",
                "将対" : "2/5/8 Triplets",
                "龍七対" : "Seven Pairs with One Duplicate",
                "清七対" : "Pure Seven Pairs",
                "清金勾釣" : "Pure Single Wait after 4 Triplets",
                "清龍七対" : "Pure Seven Pairs with One Duplicate",
                "十八羅漢" : "Four Quads",
                "清十八羅漢" : "Pure Four Quads",
                "天和" : "Blessing of Heaven",
                "地和" : "Blessing of Earth",
                "清幺九" : "All Terminals",
                "海底摸月" : "Under the Sea",
            }
        },
        'zh-CN': {
            translation: {
                "title": "牌谱检讨",
                "round-dec": "&lt; 上一局",
                "round-inc": "下一局 &gt;",
                "prev-mismatch": "&lt; 上一错误",
                "next-mismatch": "下一错误 &gt;",
                "ply-dec2": "&lt; 上一切牌",
                "ply-inc2": "下一切牌 &gt;",
                "ply-dec": "&lt; 后退",
                "ply-inc": "前进 &gt;",
                "toggle-hands": "开关别家手牌",
                "toggle-mortal-advice": "开关 Mortal 提示",
                "options-label": "选项",
                "options": "选项",
                "langLabel": "语言",
                "about": "关于",
                "about-body": [
                    "Mortal 切牌选择显示为绿条。",
                    "第一切牌选择固定为 100% 高度。",
                    "其他切牌选择为相对高度。",
                    "玩家切牌选择显示为黄条。",
                    "点击手牌区域，切换无提示何切模式。",
                    "点击局数指示器，显示得点表。",
                    "点击得点表任意一行，可跳转至该小局。",
                    '如遇界面 Bug，请提交问题至 <a href="https://github.com/killerducky/killer_mortal_gui" target="_blank">GitHub</a>。',
                ],
                'Engine'                : 'AI 引擎'                ,
                'Model tag'             : '模型版本'               ,
                'Mjai-reviewer version' : 'Mjai-reviewer 版本'     ,
                'Game length'           : '对局长度'               ,
                'Hanchan'               : '半庄'                   ,
                'Loading time'          : '载入用时'               ,
                'Review time'           : '检讨用时'               ,
                'Temperature'           : '温度系数'               ,
                'Matches/total'         : 'AI 一致率'              ,
                'Rating'                : '分数'                   ,
                "position-rel": {
                    "Hero" : "自家",
                    "Shimo" : "下家",
                    "Toimen" : "对家",
                    "Kami" : "上家",
                    "Pot" : "场供",
                },
                "E":"东",
                "S":"南",
                "W":"西",
                "N":"北",
                "Wh":"白",
                "G":"发",
                "R":"中",
                "spoiler": "（注意：何切模式已开启。点击此处进行关闭）",
                // Advice words
                'dahai'   : '切',
                'pon'     : '碰',
                'chi'     : '吃',
                'none'    : '跳过',
                'hora'    : '自摸', // Default to Tsumo. If ron, javascript will change it.
                'ron'     : '荣和',
                'reach'   : '立直',
                "Hmm..."  : "嗯……",
                "Clack!"  : "异议！",
                // No need to disambiguate these in the GUI display -- context will show which kind it is
                'ankan'   : '杠',
                'daiminkan' : '杠',
                'kakan'   : '杠',
                // Results
                "Final"   : "结果", // Final score in score table
                "Round"   : "局",
                "Ron"     : "荣和",
                "Tsumo"   : "自摸",
                "win-by"  : "{{winner}} {{type}}",
                "ron-full"  : "{{winner}} 荣和 {{loser}}",
                "tsumo-full"  : "{{winner}} 自摸",
                "流局"    : "荒牌流局",
                "流し満貫" : "流局满贯",
                "九種九牌" : "九种九牌",
                "四家立直" : "四家立直",
                "三家和了" : "三家和了",
                // Yakus, points
                '飜' : '番',
                '符' : '符',
                '点' : '点',
                '点∀' : '点∀',
                "満貫":         "满贯",       
                "跳満":         "跳满",      
                "倍満":         "倍满",       
                "三倍満":       "三倍满",    
                "役満":         "役满",      
                "数え役満":     "累计役满",
                "切り上げ満貫": "切上满贯",
                "門前清自摸和" : "门前清自摸和",
                "立直" : "立直",
                "槍槓" : "枪杠",
                "嶺上開花" : "岭上开花",
                "海底摸月" : "海底摸月",
                "河底撈魚" : "河底捞鱼",
                "役牌 白" : "役牌 白",
                "役牌 發" : "役牌 发",
                "役牌 中" : "役牌 中",
                "役牌:自風牌" : "役牌：门风牌",
                "役牌:場風牌" : "役牌：场风牌",
                "断幺九" : "断幺九",
                "一盃口" : "一杯口",
                "平和" : "平和",
                "混全帯幺九" : "混全带幺九",
                "一気通貫" : "一气通贯",
                "三色同順" : "三色同顺",
                "ダブル立直" : "两立直",
                "三色同刻" : "三色同刻",
                "三槓子" : "三杠子",
                "対々和" : "对对和",
                "三暗刻" : "三暗刻",
                "小三元" : "小三元",
                "混老頭" : "混老头",
                "七対子" : "七对子",
                "純全帯幺九" : "纯全带幺九",
                "混一色" : "混一色",
                "二盃口" : "二杯口",
                "清一色" : "清一色",
                "一発" : "一发",
                "ドラ" : "宝牌",
                "赤ドラ" : "红宝牌",
                "裏ドラ" : "里宝牌",
                "抜きドラ" : "拔北宝牌",
                "天和" : "天和",
                "地和" : "地和",
                "大三元" : "大三元",
                "四暗刻" : "四暗刻",
                "字一色" : "字一色",
                "緑一色" : "绿一色",
                "清老頭" : "清老头",
                "国士無双" : "国士无双",
                "小四喜" : "小四喜",
                "四槓子" : "四杠子",
                "九蓮宝燈" : "九莲宝灯",
                "八連荘" : "八连庄",
                "純正九蓮宝燈" : "纯正九莲宝灯",
                "四暗刻単騎" : "四暗刻单骑",
                "国士無双十三面待ち" : "国士无双十三面",
                "大四喜" : "大四喜",
                "燕返し" : "燕返",
                "槓振り" : "杠振",
                "十二落抬" : "十二落抬",
                "五門斉" : "五门齐",
                "三連刻" : "三连刻",
                "一色三順" : "一色三同顺",
                "一筒摸月" : "一筒摸月",
                "九筒撈魚" : "九筒捞鱼",
                "人和" : "人和",
                "大車輪" : "大车轮",
                "大竹林" : "大竹林",
                "大数隣" : "大数邻",
                "石の上にも三年" : "石上三年",
                "大七星" : "大七星",
                "根" : "根",
                "嶺上開花" : "杠上花",
                "嶺上放銃" : "杠上炮",
                "無番和" : "底和",
                "槍槓" : "枪杠",
                "対々和" : "对对和",
                "清一色" : "清一色",
                "七対子" : "七对子",
                "帯幺九" : "带幺九",
                "金勾釣" : "金钩钩",
                "清対" : "清对",
                "将対" : "将对",
                "龍七対" : "龙七对",
                "清七対" : "清七对",
                "清金勾釣" : "清金钩钩",
                "清龍七対" : "清龙七对",
                "十八羅漢" : "十八罗汉",
                "清十八羅漢" : "清十八罗汉",
                "天和" : "天和",
                "地和" : "地和",
                "清幺九" : "清幺九",
                "海底摸月" : "海底捞月",

            }
        },
        ko: {
            translation: {
                "title": "Killer Mortal Reviewer",
                "round-dec": "&lt; 이전 대국",
                "round-inc": "다음 대국 &gt",
                "prev-mismatch": "&lt; 이전 실수",
                "next-mismatch": "다음 실수 &gt;",
                "ply-dec2": "&lt; 이전 타패",
                "ply-inc2": "다음 타패 &gt;",
                "ply-dec": "&lt; 이전",
                "ply-inc": "다음 &gt;",
                "toggle-hands": "타가 손패 보기",
                "toggle-mortal-advice": "모탈 확률 보기",
                "options-label": "설정",
                "options": "설정",
                "langLabel": "언어",
                "about": "정보",
                "about-body": [
                    "모탈의 선택 확률은 초록색 막대로 표시됩니다.",
                    "가장 확률이 높은 선택지가 항상 100%의 높이를 가지고,",
                    "다른 선택지는 비례해서 높이를 계산합니다.",
                    "작사의 실제 선택은 노란색 막대로 표시됩니다.",
                    "확률 막대를 클릭하면 모탈의 선택 확률을 숨길 수 있습니다.",
                    "화면 중앙의 대국 표시를 클릭하면 점수표를 볼 수 있습니다.",
                    "점수표에서 특정 대국을 클릭하면 그 대국으로 이동할 수 있습니다.",
                    '<a href="https://github.com/killerducky/killer_mortal_gui" target="_blank">Github 프로젝트</a>에서 복기 UI 버그 제보하기',
                ],
                'Engine'                : '엔진'                 ,
                'Model tag'             : '모델 태그'              ,
                'Mjai-reviewer version' : '모탈 버전'  ,
                'Game length'           : '대국 길이'            ,
                'Hanchan'               : '반장'                    ,
                'Loading time'          : '로딩 시간'           ,
                'Review time'           : '복기 시간'            ,
                'Temperature'           : 'Temperature'            ,
                'Matches/total'         : 'Matches/total'          ,
                'Rating'                : '레이팅'                 ,
                "position-rel": {
                    "Hero" : "나",
                    "Shimo" : "하가",
                    "Toimen" : "대면",
                    "Kami" : "상가",
                    "Pot" : "공탁금",
                },
                "E":"동",
                "S":"남",
                "W":"서",
                "N":"북",
                "Wh":"백",
                "G":"발",
                "R":"중",
                "spoiler": "(모탈 선택 가려짐: 여기를 클릭하면 표시됩니다)",
                // Advice words
                'dahai'   : '타',
                'pon'     : '퐁',
                'chi'     : '치',
                'none'    : '스킵',
                'hora'    : '쯔모', // Default to Tsumo. If ron, javascript will change it.
                'ron'     : '론',
                'reach'   : '리치',
                "Hmm..."  : "흠...",
                "Clack!"  : "엣헴!",
                // No need to disambiguate these in the GUI display -- context will show which kind it is
                'ankan'   : '깡',
                'daiminkan' : '깡',
                'kakan'   : '깡',
                // Results
                "Final"   : "최종", // Final score in score table
                "Round"   : "국",
                "Ron"     : "론",
                "Tsumo"   : "쯔모",
                "win-by"  : "{{winner}}의 {{type}}",
                "ron-full"  : "{{winner}}의 {{loser}} 론",
                "tsumo-full"  : "{{winner}}의 쯔모",
                "流局"    : "유국",
                "流し満貫" : "유국만관",
                "九種九牌" : '구종구패',
                "四家立直" : "사가리치",
                "三家和了" : "삼가화",
                // Yakus, points
                '飜' : '판',
                '符' : '부',
                '点' : '점',
                '点∀' : '점∀',
                "満貫":         "만관",       
                "跳満":         "하네만",      
                "倍満":         "배만",       
                "三倍満":       "삼배만",    
                "役満":         "역만",      
                "数え役満":     "헤아림역만",
                "切り上げ満貫": "절상만관",
                "門前清自摸和" : "멘젠쯔모",
                "立直" : "리치",
                "槍槓" : "창깡",
                "嶺上開花" : "영상개화",
                "海底摸月" : "해저로월",
                "河底撈魚" : "하저로어",
                "役牌 白" : "역패 백",
                "役牌 發" : "역패 발",
                "役牌 中" : "역패 중",
                "役牌:自風牌" : "역패: 자풍패",
                "役牌:場風牌" : "역패: 장풍패",
                "断幺九" : "탕야오",
                "一盃口" : "이페코",
                "平和" : "핑후",
                "混全帯幺九" : "찬타",
                "一気通貫" : "일기통관",
                "三色同順" : "삼색동순",
                "ダブル立直" : "더블 리치",
                "三色同刻" : "삼색동순",
                "三槓子" : "산깡쯔",
                "対々和" : "또이또이",
                "三暗刻" : "산안커",
                "小三元" : "소삼원",
                "混老頭" : "혼노두",
                "七対子" : "치또이쯔",
                "純全帯幺九" : "준찬타",
                "混一色" : "혼일색",
                "二盃口" : "량페코",
                "清一色" : "청일색",
                "一発" : "일발",
                "ドラ" : "도라",
                "赤ドラ" : "적도라",
                "裏ドラ" : "뒷도라",
                "抜きドラ" : "북도라",
                "天和" : "천화",
                "地和" : "지화",
                "大三元" : "대삼원",
                "四暗刻" : "스안커",
                "字一色" : "자일색",
                "緑一色" : "녹일색",
                "清老頭" : "청노두",
                "国士無双" : "국사무쌍",
                "小四喜" : "소사희",
                "四槓子" : "스깡쯔",
                "九蓮宝燈" : "구련보등",
                "八連荘" : "팔연장",
                "純正九蓮宝燈" : "순정구련보등",
                "四暗刻単騎" : "스안커 단기",
                "国士無双十三面待ち" : "국사무쌍 13면 대기",
                "大四喜" : "대사희",
                "燕返し" : "츠바메가에시",
                "槓振り" : "깡후리",
                "十二落抬" : "십이낙태",
                "五門斉" : "오문제",
                "三連刻" : "산안커",
                "一色三順" : "일색삼순",
                "一筒摸月" : "일통모월",
                "九筒撈魚" : "구통노어",
                "人和" : "인화",
                "大車輪" : "대차륜",
                "大竹林" : "대죽림",
                "大数隣" : "대수린",
                "石の上にも三年" : "석상삼년",
                "大七星" : "대칠성",
                "根" : "루트",
                "嶺上開花" : "영상개화",
                "嶺上放銃" : "영상방총",
                "無番和" : "무번화",
                "槍槓" : "창깡",
                "対々和" : "또이또이",
                "清一色" : "청일색",
                "七対子" : "치또이쯔",
                "帯幺九" : "대요구",
                "金勾釣" : "금구조",
                "清対" : "청또이",
                "将対" : "장또이",
                "龍七対" : "용치또이",
                "清七対" : "청치또이",
                "清金勾釣" : "청금구조",
                "清龍七対" : "청룡치또이",
                "十八羅漢" : "십팔라한",
                "清十八羅漢" : "청십팔라한",
                "天和" : "천화",
                "地和" : "지화",
                "清幺九" : "청요구",
                "海底摸月" : "해저로월",
            }
        },
    }
}
