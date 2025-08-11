const cardsData = [
   { word: "チャンス chansu", meaning: "chance", known: false },
{ word: "クリーニング kuri-ningu", meaning: "dry cleaning", known: false },
{ word: "サービス sa-bisu", meaning: "service, on the house", known: false },
{ word: "自宅 jitaku", meaning: "one's house, one's home", known: false },
{ word: "家庭 katei", meaning: "home, family", known: false },
{ word: "期間 kikan", meaning: "term, period", known: false },
{ word: "年度 nendo", meaning: "year, school year", known: false },
{ word: "経験 keiken", meaning: "experience, knowledge", known: false },
{ word: "危険 kiken", meaning: "danger, dangerous", known: false },
{ word: "注意 chuui", meaning: "attention, care", known: false },
{ word: "成功 seikou", meaning: "success", known: false },
{ word: "努力 doryoku", meaning: "endeavor, effort", known: false },
{ word: "説明 setsumei", meaning: "explanation, description", known: false },
{ word: "地震 jishin", meaning: "earthquake", known: false },
{ word: "手術 shujutsu", meaning: "surgical operation", known: false },
{ word: "火傷 yakedo", meaning: "burn", known: false },
{ word: "課題 kadai", meaning: "task, assignment", known: false },
{ word: "子 ko", meaning: "young child, kid", known: false },
{ word: "確認 kakunin", meaning: "confirmation", known: false },
{ word: "実際 jissai", meaning: "reality, actual state", known: false },
{ word: "国際 kokusai", meaning: "international used in compound nouns", known: false },
{ word: "会議 kaigi", meaning: "conference, meeting", known: false },
{ word: "提案 teian", meaning: "proposition, proposal", known: false },
{ word: "事務所 jimusho", meaning: "office, one's place of business", known: false },
{ word: "教授 kyouju", meaning: "professor", known: false },
{ word: "世紀 seki", meaning: "century", known: false },
{ word: "あちこち achikochi", meaning: "all over, here and there", known: false },
{ word: "そちら sochira", meaning: "there, that way polite", known: false },
{ word: "あちら achira", meaning: "over there, that way polite", known: false },
{ word: "もし moshi", meaning: "if, in case of", known: false },
{ word: "うるさい urusai", meaning: "noisy, annoying", known: false },
{ word: "固い katai", meaning: "stiff, tight", known: false },
{ word: "深い fukai", meaning: "deep, profound", known: false },
{ word: "面白い omoshiroi", meaning: "interesting, amusing", known: false },
{ word: "全く mattaku", meaning: "entirely, truly", known: false },
{ word: "半分 hanbun", meaning: "half", known: false },
{ word: "普通 futsuu", meaning: "normal, regular", known: false },
{ word: "分 bun", meaning: "amount, share", known: false },
{ word: "文化 bunka", meaning: "culture", known: false },
{ word: "毎日 mainichi", meaning: "every day", known: false },
{ word: "気を付ける kiwotsukeru", meaning: "be careful about, pay attention to", known: false },
{ word: "守る mamoru", meaning: "protect, observe", known: false },
{ word: "もちろん mochiron", meaning: "of course", known: false },
{ word: "やはり yahari", meaning: "as expected", known: false },
{ word: "いくら ikura", meaning: "how much money", known: false },
{ word: "よろしく yoroshiku", meaning: "one's regards", known: false },
{ word: "どなた donata", meaning: "who polite", known: false },
{ word: "許す yurusu", meaning: "permit, forgive", known: false },
{ word: "分ける wakeru", meaning: "divide, share", known: false },
{ word: "自然 shizen", meaning: "nature", known: false },
{ word: "アパート apa-to", meaning: "apartment, flat", known: false },
{ word: "ホテル hoteru", meaning: "hotel", known: false },
{ word: "パソコン pasokon", meaning: "personal computer", known: false },
{ word: "うまい umai", meaning: "good at", known: false },
{ word: "明るい akarui", meaning: "bright, cheerful", known: false },
{ word: "急ぐ isogu", meaning: "hurry, do quickly", known: false },
{ word: "歌 uta", meaning: "song", known: false },
{ word: "中学校 chuugakkou", meaning: "junior high school", known: false },
{ word: "テスト tesuto", meaning: "test", known: false },
{ word: "ポスト posuto", meaning: "postbox, mailbox", known: false },
{ word: "ハンカチ hankachi", meaning: "handkerchief", known: false },
{ word: "髪 kami", meaning: "hair, hairstyle", known: false },
{ word: "帽子 boushi", meaning: "hat, cap", known: false },
{ word: "被る kaburu", meaning: "wear, put on on one's head", known: false },
{ word: "ブラウス burausu", meaning: "blouse", known: false },
{ word: "週末 shuumatsu", meaning: "weekend", known: false },
{ word: "先週 senshuu", meaning: "last week", known: false },
{ word: "再来週 saraishuu", meaning: "the week after next", known: false },
{ word: "いつか itsuka", meaning: "some time, some day", known: false },
{ word: "宿題 shukudai", meaning: "homework", known: false },
{ word: "鍵 kagi", meaning: "key, lock", known: false },
{ word: "傘 kasa", meaning: "umbrella, parasol", known: false },
{ word: "乗り換える norikaeru", meaning: "change, transfer", known: false },
{ word: "向かう mukau", meaning: "face, head toward", known: false },
{ word: "本屋 honya", meaning: "bookstore", known: false },
{ word: "お茶 ocha", meaning: "tea polite", known: false },
{ word: "改札口 kaisatsuguchi", meaning: "ticket gate", known: false },
{ word: "晴れ hare", meaning: "fine weather, clear sky", known: false },
{ word: "バス停 basutei", meaning: "bus stop", known: false },
{ word: "曇り kumori", meaning: "cloudy weather", known: false },
{ word: "塩 shio", meaning: "salt", known: false },
{ word: "たくさん takusan", meaning: "a lot, in large quantity", known: false },
{ word: "大嫌い daikirai", meaning: "hate", known: false },
{ word: "中 naka", meaning: "inside, middle", known: false },
{ word: "二階 nikai", meaning: "second floor, upstairs", known: false },
{ word: "無くす nakusu", meaning: "lose, get rid of", known: false },
{ word: "まあまあ maamaa", meaning: "OK, not bad", known: false },
{ word: "黄色 kiiro", meaning: "yellow color", known: false },
{ word: "ランチ ranchi", meaning: "lunch loan word", known: false },
{ word: "魚 sakana", meaning: "fish", known: false },
{ word: "味 aji", meaning: "taste, flavor", known: false },
{ word: "りんご ringo", meaning: "apple", known: false },
{ word: "みかん mikan", meaning: "tangerine", known: false },
{ word: "皿 sara", meaning: "plate, counter for plates or helpings", known: false },
{ word: "コーヒー ko-hi-", meaning: "coffee", known: false },
{ word: "コップ koppu", meaning: "cup, glass", known: false },
{ word: "二人 futari", meaning: "two persons", known: false },
{ word: "止む yamu", meaning: "stop, cease", known: false },
{ word: "九 kyuu", meaning: "nine", known: false },
{ word: "珍しい mezurashii", meaning: "rare, scarce", known: false },
{ word: "有名 yuumei", meaning: "famous", known: false },
{ word: "留学 ryuugaku", meaning: "study abroad", known: false },
{ word: "料理 ryouri", meaning: "cooking", known: false },
{ word: "野菜 yasai", meaning: "vegetable", known: false },
{ word: "分かれる wakareru", meaning: "be divided, split off", known: false },
{ word: "特別 tokubetsu", meaning: "special", known: false },
{ word: "理由 riyuu", meaning: "reason, excuse", known: false },
{ word: "自由 jiyuu", meaning: "freedom", known: false },
{ word: "方向 houkou", meaning: "direction, course", known: false },
{ word: "残る nokoru", meaning: "remain, be left over", known: false },
{ word: "ビル biru", meaning: "building", known: false },
{ word: "まとめる matomeru", meaning: "gather together, put in order", known: false },
{ word: "セーター se-ta-", meaning: "sweater", known: false },
{ word: "シャツ shatsu", meaning: "shirt", known: false },
{ word: "洗濯 sentaku", meaning: "laundry, washing", known: false },
{ word: "間違える machigaeru", meaning: "make a mistake, fail at", known: false },
{ word: "アイスクリーム aisukuri-mu", meaning: "ice cream", known: false },
{ word: "乾く kawaku", meaning: "become dry", known: false },
{ word: "冷める sameru", meaning: "cool off", known: false },
{ word: "色々 iroiro", meaning: "a variety of", known: false },
{ word: "持って行く motteiku", meaning: "take, bring", known: false },
{ word: "着替える kigaeru", meaning: "change clothes", known: false },
{ word: "石鹸 sekken", meaning: "soap", known: false },
{ word: "昼食 chyuushoku", meaning: "lunch", known: false },
{ word: "朝食 choushoku", meaning: "breakfast", known: false },
{ word: "眠る nemuru", meaning: "sleep, lie idle", known: false },
{ word: "初め hajime", meaning: "beginning", known: false },
{ word: "火 hi", meaning: "fire, flame", known: false },
{ word: "西 nishi", meaning: "west, western", known: false },
{ word: "南 minami", meaning: "south", known: false },
{ word: "夕食 yuushoku", meaning: "supper, dinner", known: false },
{ word: "なかなか nakanaka", meaning: "rather, pretty", known: false },
{ word: "励ます hagemasu", meaning: "encourage, cheer up", known: false },
{ word: "涙 namida", meaning: "tear", known: false },
{ word: "夢 yume", meaning: "dream", known: false },
{ word: "職場 shokuba", meaning: "place of work, office", known: false },
{ word: "隣 tonari", meaning: "next to, next door", known: false },
{ word: "マンション manshon", meaning: "apartment, residential building", known: false },
{ word: "エレベーター erebe-ta-", meaning: "elevator", known: false },
{ word: "押す osu", meaning: "push, press down", known: false },
{ word: "入学 nyuugaku", meaning: "enter a school, matriculate", known: false },
{ word: "戸 to", meaning: "door, sliding door", known: false },
{ word: "通り toori", meaning: "street, road", known: false },
{ word: "亡くなる nakunaru", meaning: "die, pass away", known: false },
{ word: "夫婦 fuufu", meaning: "husband and wife, married couple", known: false },
{ word: "女性 josei", meaning: "woman, female formal", known: false },
{ word: "森 mori", meaning: "forest", known: false },
{ word: "トラック torakku", meaning: "truck", known: false },
{ word: "レコード reko-do", meaning: "record", known: false },
{ word: "熱 netsu", meaning: "heat, fever", known: false },
{ word: "ページ pe-ji", meaning: "page", known: false },
{ word: "踊る odoru", meaning: "dance", known: false },
{ word: "長さ nagasa", meaning: "length", known: false },
{ word: "厚さ atsusa", meaning: "thickness", known: false },
{ word: "秘密 himitsu", meaning: "secret, privacy", known: false },
{ word: "昼間 hiruma", meaning: "daytime, during the day", known: false },
{ word: "いつ頃 itsugoro", meaning: "about when, about what time", known: false },
{ word: "字 ji", meaning: "individual character, letter", known: false },
{ word: "七 nana", meaning: "seven Chinese origin", known: false },
{ word: "お釣り otsuri", meaning: "change of money", known: false },
{ word: "名字 myouji", meaning: "surname, family name", known: false },
{ word: "おじ oji", meaning: "one's own uncle", known: false },
{ word: "おば oba", meaning: "one's own aunt", known: false },
{ word: "祖父 sofu", meaning: "grandfather formal", known: false },
{ word: "祖母 sobo", meaning: "grandmother formal", known: false },
{ word: "大事 daiji", meaning: "importance", known: false },
{ word: "見方 mikata", meaning: "view, perspective", known: false },
{ word: "鳥 tori", meaning: "bird, poultry", known: false },
{ word: "犬 inu", meaning: "dog", known: false },
{ word: "返事 henji", meaning: "reply, answer, response", known: false },
{ word: "また mata", meaning: "again, also, or", known: false },
{ word: "青 ao", meaning: "blue, green", known: false },
{ word: "赤 aka", meaning: "red color", known: false },
{ word: "信号 shingou", meaning: "signal, traffic light", known: false },
{ word: "円 en", meaning: "circle", known: false },
{ word: "非常に hijouni", meaning: "very, extremely", known: false },
{ word: "複雑 fukuzatsu", meaning: "complicated, intricate", known: false },
{ word: "平和 heiwa", meaning: "peace, harmony", known: false },
{ word: "回る mawaru", meaning: "turn round, go around", known: false },
{ word: "若者 wakamono", meaning: "young person, youth", known: false },
{ word: "雪 yuki", meaning: "snow, snowfall", known: false },
{ word: "うまい umai", meaning: "sweet, delicious", known: false },
{ word: "思い出す omoidasu", meaning: "recollect, recall", known: false },
{ word: "聞こえる kikoeru", meaning: "hear, be heard", known: false },
{ word: "借りる kariru", meaning: "borrow", known: false },
{ word: "返す kaesu", meaning: "return, repay", known: false },
{ word: "受け取る uketoru", meaning: "receive, get", known: false },
{ word: "捨てる suteru", meaning: "discard, abandon", known: false },
{ word: "一緒 issho", meaning: "together, same", known: false },
{ word: "遊び asobi", meaning: "play, amusement", known: false },
{ word: "移す utsusu", meaning: "move, transfer", known: false },
{ word: "大きさ ookisa", meaning: "size, dimension", known: false },
{ word: "考え kangae", meaning: "thought, idea", known: false },
{ word: "空港 kuukou", meaning: "airport for public transportation", known: false },
{ word: "出発 shuppatsu", meaning: "departure, starting", known: false },
{ word: "地図 chizu", meaning: "map, atlas", known: false },
{ word: "運転 unten", meaning: "drive", known: false },
{ word: "降りる oriru", meaning: "get off, land", known: false },
{ word: "乗る noru", meaning: "ride, get on", known: false },{ word: "ガス gasu", meaning: "gas loan word", known: false },
{ word: "必ず kanarazu", meaning: "without exception, always", known: false },
{ word: "カメラ kamera", meaning: "camera", known: false },
{ word: "通う kayou", meaning: "go to and from, frequent a place", known: false },
{ word: "急に kyuuni", meaning: "suddenly, unexpectedly", known: false },
{ word: "サラリーマン sarari-man", meaning: "office worker, company employee", known: false },
{ word: "給料 kyuuryou", meaning: "salary, pay", known: false },
{ word: "曲 kyoku", meaning: "piece of music", known: false },
{ word: "切れる kireru", meaning: "cut well, be sharp", known: false },
{ word: "正しい tadashii", meaning: "correct, righteous", known: false },
{ word: "苦しい kurushii", meaning: "painful, agonizing", known: false },
{ word: "静か shizuka", meaning: "quiet, tranquil", known: false },
{ word: "健康 kenkou", meaning: "health", known: false },
{ word: "ゴルフ gorufu", meaning: "golf", known: false },
{ word: "コース ko-su", meaning: "course, route", known: false },
{ word: "頼む tanomu", meaning: "order, ask for", known: false },
{ word: "困る komaru", meaning: "be in trouble, not know what to do", known: false },
{ word: "ずっと zutto", meaning: "all the time, all through", known: false },
{ word: "例えば tatoeba", meaning: "for example", known: false },
{ word: "つもり tsumori", meaning: "intention, purpose", known: false },
{ word: "しばらく shibaraku", meaning: "a little while, a while", known: false },
{ word: "紹介 shoukai", meaning: "introduction", known: false },
{ word: "小学校 shougakkou", meaning: "elementary school", known: false },
{ word: "公園 kouen", meaning: "park, public garden", known: false },
{ word: "中学 chuugaku", meaning: "junior high", known: false },
{ word: "成績 seiseki", meaning: "results, grade", known: false },
{ word: "教科書 kyoukasho", meaning: "textbook, schoolbook", known: false },
{ word: "席 seki", meaning: "seat, one's place", known: false },
{ word: "教室 kyoushitsu", meaning: "classroom, class", known: false },
{ word: "教師 kyoushi", meaning: "teacher, instructor", known: false },
{ word: "試験 shiken", meaning: "exam", known: false },
{ word: "合格 goukaku", meaning: "pass an examination", known: false },
{ word: "数学 suugaku", meaning: "mathematics", known: false },
{ word: "数字 suuji", meaning: "numeric characters", known: false },
{ word: "音楽 ongaku", meaning: "music", known: false },
{ word: "食事 shokuji", meaning: "meal", known: false },
{ word: "壁 kabe", meaning: "wall, partition", known: false },
{ word: "信じる shinjiru", meaning: "believe, trust", known: false },
{ word: "育てる sodateru", meaning: "bring up, raise", known: false },
{ word: "倒れる taoreru", meaning: "fall over", known: false },
{ word: "落とす otosu", meaning: "drop", known: false },
{ word: "代わる kawaru", meaning: "substitute, be substituted for", known: false },
{ word: "タクシー takushi-", meaning: "taxi", known: false },
{ word: "確か tashika", meaning: "for sure, for certain", known: false },
{ word: "立てる tateru", meaning: "stand, set up", known: false },
{ word: "中学生 chuugakusei", meaning: "junior high school student", known: false },
{ word: "売れる ureru", meaning: "sell, be in demand", known: false },
{ word: "着く tsuku", meaning: "arrive at, reach", known: false },
{ word: "決まる kimaru", meaning: "be decided", known: false },
{ word: "飾る kazaru", meaning: "decorate", known: false },
{ word: "殺す korosu", meaning: "kill", known: false },
{ word: "下げる sageru", meaning: "lower, turn down", known: false },
{ word: "贈る okuru", meaning: "offer, give", known: false },
{ word: "訪ねる tazuneru", meaning: "visit, go to see", known: false },
{ word: "打つ utsu", meaning: "hit, strike", known: false },
{ word: "相談 soudan", meaning: "consultation, advice", known: false },
{ word: "玄関 genkan", meaning: "entrance, door", known: false },
{ word: "兄弟 kyoudai", meaning: "sibling", known: false },
{ word: "長男 chounan", meaning: "eldest son", known: false },
{ word: "高さ takasa", meaning: "height", known: false },
{ word: "用 you", meaning: "things to do", known: false },
{ word: "時代 jidai", meaning: "age, era", known: false },
{ word: "位置 ichi", meaning: "position, location", known: false },
{ word: "季節 kisetsu", meaning: "season", known: false },
{ word: "穴 ana", meaning: "hole", known: false },
{ word: "裏 ura", meaning: "the back, the reverse side", known: false },
{ word: "島 shima", meaning: "island Japanese origin", known: false },
{ word: "海岸 kaigan", meaning: "seashore, coast", known: false },
{ word: "ガラス garasu", meaning: "glass material", known: false },
{ word: "自然 shizen", meaning: "natural", known: false },
{ word: "風 kaze", meaning: "wind", known: false },
{ word: "科学 kagaku", meaning: "science", known: false },
{ word: "太陽 taiyou", meaning: "sun", known: false },
{ word: "台風 taifuu", meaning: "typhoon", known: false },
{ word: "北 kita", meaning: "north", known: false },
{ word: "馬 uma", meaning: "horse", known: false },
{ word: "牛肉 gyuuniku", meaning: "beef", known: false },
{ word: "雑誌 zasshi", meaning: "magazine, journal", known: false },
{ word: "小説 shousetsu", meaning: "novel", known: false },
{ word: "大使館 taishikan", meaning: "embassy", known: false },
{ word: "故障 koshou", meaning: "malfunction, breakdown", known: false },
{ word: "温度 ondo", meaning: "temperature", known: false },
{ word: "何か nanika", meaning: "something, some", known: false },
{ word: "向こう mukou", meaning: "over there, on the other side", known: false },
{ word: "真ん中 mannaka", meaning: "center, middle casual", known: false },
{ word: "遠く tooku", meaning: "far away, at a distance", known: false },
{ word: "横 yoko", meaning: "side, width across", known: false },
{ word: "つまらない tsumaranai", meaning: "boring, dull", known: false },
{ word: "素晴らしい subarashii", meaning: "excellent, wonderful", known: false },
{ word: "毎年 maitoshi/ mainen", meaning: "every year", known: false },
{ word: "来月 raigetsu", meaning: "next month", known: false },
{ word: "日時 nichiji", meaning: "date and time", known: false },
{ word: "夕方 yuugata", meaning: "early evening, at dusk", known: false },
{ word: "通る tooru", meaning: "pass, go through", known: false },
{ word: "自動車 jidousha", meaning: "automobile", known: false },
{ word: "慣れる nareru", meaning: "grow accustomed to, get used to", known: false },
{ word: "撮る toru", meaning: "take a photograph, film", known: false },
{ word: "やっと yatto", meaning: "at last, finally", known: false },
{ word: "やっと yatto", meaning: "at last, finally", known: false },
{ word: "どんどん dondon", meaning: "knock, bang", known: false },
{ word: "並べる naraberu", meaning: "line up, arrange", known: false },
{ word: "逃げる nigeru", meaning: "escape, run away", known: false },
{ word: "渡す watasu", meaning: "hand over, give", known: false },
{ word: "値段 nedan", meaning: "price", known: false },
{ word: "両方 ryouhou", meaning: "both", known: false },
{ word: "約束 yakusoku", meaning: "promise, vow", known: false },
{ word: "一部 ichibu", meaning: "part", known: false },
{ word: "ラジオ rajio", meaning: "radio", known: false },
{ word: "入院 nyuuin", meaning: "be hospitalized", known: false },
{ word: "ニュース nyu-su", meaning: "news", known: false },
{ word: "旅行 ryokou", meaning: "travel, trip", known: false },
{ word: "用意 youi", meaning: "preparation", known: false },
{ word: "伸びる nobiru", meaning: "stretch, grow", known: false },
{ word: "パーティー pa-ti-", meaning: "party", known: false },
{ word: "ビール bi-ru", meaning: "beer", known: false },
{ word: "早く hayaku", meaning: "early, soon", known: false },
{ word: "番組 bangumi", meaning: "program", known: false },
{ word: "ビデオ bideo", meaning: "video", known: false },
{ word: "増やす fuyasu", meaning: "increase", known: false },
{ word: "振る furu", meaning: "wave, shake", known: false },
{ word: "迎える mukaeru", meaning: "welcome, receive a visitor", known: false },
{ word: "無理 muri", meaning: "unreasonable, impossible", known: false },
{ word: "チャンス chansu", meaning: "chance", known: false },
{ word: "クリーニング kuri-ningu", meaning: "dry cleaning", known: false },
{ word: "サービス sa-bisu", meaning: "service, on the house", known: false },
{ word: "自宅 jitaku", meaning: "one's house, one's home", known: false },
{ word: "家庭 katei", meaning: "home, family", known: false },
{ word: "期間 kikan", meaning: "term, period", known: false },
{ word: "年度 nendo", meaning: "year, school year", known: false },
{ word: "経験 keiken", meaning: "experience, knowledge", known: false },
{ word: "危険 kiken", meaning: "danger, dangerous", known: false },
{ word: "注意 chuui", meaning: "attention, care", known: false },
{ word: "成功 seikou", meaning: "success", known: false },
{ word: "努力 doryoku", meaning: "endeavor, effort", known: false },
{ word: "説明 setsumei", meaning: "explanation, description", known: false },
{ word: "地震 jishin", meaning: "earthquake", known: false },
{ word: "手術 shujutsu", meaning: "surgical operation", known: false },
{ word: "火傷 yakedo", meaning: "burn", known: false },
{ word: "課題 kadai", meaning: "task, assignment", known: false },
{ word: "子 ko", meaning: "young child, kid", known: false },
{ word: "確認 kakunin", meaning: "confirmation", known: false },
{ word: "実際 jissai", meaning: "reality, actual state", known: false },
{ word: "国際 kokusai", meaning: "international used in compound nouns", known: false },
{ word: "会議 kaigi", meaning: "conference, meeting", known: false },
{ word: "提案 teian", meaning: "proposition, proposal", known: false },
{ word: "事務所 jimusho", meaning: "office, one's place of business", known: false },
{ word: "教授 kyouju", meaning: "professor", known: false },
{ word: "世紀 seki", meaning: "century", known: false },
{ word: "あちこち achikochi", meaning: "all over, here and there", known: false },
{ word: "そちら sochira", meaning: "there, that way polite", known: false },
{ word: "あちら achira", meaning: "over there, that way polite", known: false },
{ word: "もし moshi", meaning: "if, in case of", known: false },
{ word: "うるさい urusai", meaning: "noisy, annoying", known: false },
{ word: "固い katai", meaning: "stiff, tight", known: false },
{ word: "深い fukai", meaning: "deep, profound", known: false },
{ word: "面白い omoshiroi", meaning: "interesting, amusing", known: false },
{ word: "全く mattaku", meaning: "entirely, truly", known: false },
{ word: "半分 hanbun", meaning: "half", known: false },
{ word: "普通 futsuu", meaning: "normal, regular", known: false },
{ word: "分 bun", meaning: "amount, share", known: false },
{ word: "文化 bunka", meaning: "culture", known: false },
{ word: "毎日 mainichi", meaning: "every day", known: false },
{ word: "気を付ける kiwotsukeru", meaning: "be careful about, pay attention to", known: false },
{ word: "守る mamoru", meaning: "protect, observe", known: false },
{ word: "もちろん mochiron", meaning: "of course", known: false },
{ word: "やはり yahari", meaning: "as expected", known: false },
{ word: "いくら ikura", meaning: "how much money", known: false },
{ word: "よろしく yoroshiku", meaning: "one's regards", known: false },
{ word: "どなた donata", meaning: "who polite", known: false },
{ word: "許す yurusu", meaning: "permit, forgive", known: false },
{ word: "分ける wakeru", meaning: "divide, share", known: false },
{ word: "自然 shizen", meaning: "nature", known: false },
{ word: "アパート apa-to", meaning: "apartment, flat", known: false },
{ word: "ホテル hoteru", meaning: "hotel", known: false },
{ word: "パソコン pasokon", meaning: "personal computer", known: false },
{ word: "うまい umai", meaning: "good at", known: false },
{ word: "明るい akarui", meaning: "bright, cheerful", known: false },
{ word: "急ぐ isogu", meaning: "hurry, do quickly", known: false },
{ word: "歌 uta", meaning: "song", known: false },
{ word: "中学校 chuugakkou", meaning: "junior high school", known: false },
{ word: "テスト tesuto", meaning: "test", known: false },
{ word: "ポスト posuto", meaning: "postbox, mailbox", known: false },
{ word: "ハンカチ hankachi", meaning: "handkerchief", known: false },
{ word: "髪 kami", meaning: "hair, hairstyle", known: false },
{ word: "帽子 boushi", meaning: "hat, cap", known: false },
{ word: "被る kaburu", meaning: "wear, put on on one's head", known: false },
{ word: "ブラウス burausu", meaning: "blouse", known: false },
{ word: "週末 shuumatsu", meaning: "weekend", known: false },
{ word: "先週 senshuu", meaning: "last week", known: false },
{ word: "再来週 saraishuu", meaning: "the week after next", known: false },
{ word: "いつか itsuka", meaning: "some time, some day", known: false },
{ word: "宿題 shukudai", meaning: "homework", known: false },
{ word: "鍵 kagi", meaning: "key, lock", known: false },
{ word: "傘 kasa", meaning: "umbrella, parasol", known: false },
{ word: "乗り換える norikaeru", meaning: "change, transfer", known: false },
{ word: "向かう mukau", meaning: "face, head toward", known: false },
{ word: "本屋 honya", meaning: "bookstore", known: false },
{ word: "お茶 ocha", meaning: "tea polite", known: false },
{ word: "改札口 kaisatsuguchi", meaning: "ticket gate", known: false },
{ word: "晴れ hare", meaning: "fine weather, clear sky", known: false },
{ word: "バス停 basutei", meaning: "bus stop", known: false },
{ word: "曇り kumori", meaning: "cloudy weather", known: false },
{ word: "塩 shio", meaning: "salt", known: false },
{ word: "たくさん takusan", meaning: "a lot, in large quantity", known: false },
{ word: "大嫌い daikirai", meaning: "hate", known: false },
{ word: "中 naka", meaning: "inside, middle", known: false },
{ word: "二階 nikai", meaning: "second floor, upstairs", known: false },
{ word: "無くす nakusu", meaning: "lose, get rid of", known: false },
{ word: "まあまあ maamaa", meaning: "OK, not bad", known: false },
{ word: "黄色 kiiro", meaning: "yellow color", known: false },
{ word: "ランチ ranchi", meaning: "lunch loan word", known: false },
{ word: "魚 sakana", meaning: "fish", known: false },
{ word: "味 aji", meaning: "taste, flavor", known: false },
{ word: "りんご ringo", meaning: "apple", known: false },
{ word: "みかん mikan", meaning: "tangerine", known: false },
{ word: "皿 sara", meaning: "plate, counter for plates or helpings", known: false },
{ word: "コーヒー ko-hi-", meaning: "coffee", known: false },
{ word: "コップ koppu", meaning: "cup, glass", known: false },
{ word: "二人 futari", meaning: "two persons", known: false },
{ word: "止む yamu", meaning: "stop, cease", known: false },
{ word: "九 kyuu", meaning: "nine", known: false },
{ word: "珍しい mezurashii", meaning: "rare, scarce", known: false },
{ word: "有名 yuumei", meaning: "famous", known: false },
{ word: "留学 ryuugaku", meaning: "study abroad", known: false },
{ word: "料理 ryouri", meaning: "cooking", known: false },
{ word: "野菜 yasai", meaning: "vegetable", known: false },
{ word: "分かれる wakareru", meaning: "be divided, split off", known: false },
{ word: "特別 tokubetsu", meaning: "special", known: false },
{ word: "理由 riyuu", meaning: "reason, excuse", known: false },
{ word: "自由 jiyuu", meaning: "freedom", known: false },
{ word: "方向 houkou", meaning: "direction, course", known: false },
{ word: "残る nokoru", meaning: "remain, be left over", known: false },
{ word: "ビル biru", meaning: "building", known: false },
{ word: "まとめる matomeru", meaning: "gather together, put in order", known: false },
{ word: "セーター se-ta-", meaning: "sweater", known: false },
{ word: "シャツ shatsu", meaning: "shirt", known: false },
{ word: "洗濯 sentaku", meaning: "laundry, washing", known: false },
{ word: "間違える machigaeru", meaning: "make a mistake, fail at", known: false },
{ word: "アイスクリーム aisukuri-mu", meaning: "ice cream", known: false },
{ word: "乾く kawaku", meaning: "become dry", known: false },
{ word: "冷める sameru", meaning: "cool off", known: false },
{ word: "色々 iroiro", meaning: "a variety of", known: false },
{ word: "持って行く motteiku", meaning: "take, bring", known: false },
{ word: "着替える kigaeru", meaning: "change clothes", known: false },
{ word: "石鹸 sekken", meaning: "soap", known: false },
{ word: "昼食 chyuushoku", meaning: "lunch", known: false },
{ word: "朝食 choushoku", meaning: "breakfast", known: false },
{ word: "眠る nemuru", meaning: "sleep, lie idle", known: false },
{ word: "初め hajime", meaning: "beginning", known: false },
{ word: "火 hi", meaning: "fire, flame", known: false },
{ word: "西 nishi", meaning: "west, western", known: false },
{ word: "南 minami", meaning: "south", known: false },
{ word: "夕食 yuushoku", meaning: "supper, dinner", known: false },
{ word: "なかなか nakanaka", meaning: "rather, pretty", known: false },
{ word: "励ます hagemasu", meaning: "encourage, cheer up", known: false },
{ word: "涙 namida", meaning: "tear", known: false },
{ word: "夢 yume", meaning: "dream", known: false },
{ word: "職場 shokuba", meaning: "place of work, office", known: false },
{ word: "隣 tonari", meaning: "next to, next door", known: false },
{ word: "マンション manshon", meaning: "apartment, residential building", known: false },
{ word: "エレベーター erebe-ta-", meaning: "elevator", known: false },
{ word: "押す osu", meaning: "push, press down", known: false },
{ word: "入学 nyuugaku", meaning: "enter a school, matriculate", known: false },
{ word: "戸 to", meaning: "door, sliding door", known: false },
{ word: "通り toori", meaning: "street, road", known: false },
{ word: "亡くなる nakunaru", meaning: "die, pass away", known: false },
{ word: "夫婦 fuufu", meaning: "husband and wife, married couple", known: false },
{ word: "女性 josei", meaning: "woman, female formal", known: false },
{ word: "森 mori", meaning: "forest", known: false },
{ word: "トラック torakku", meaning: "truck", known: false },
{ word: "レコード reko-do", meaning: "record", known: false },
{ word: "熱 netsu", meaning: "heat, fever", known: false },
{ word: "ページ pe-ji", meaning: "page", known: false },
{ word: "踊る odoru", meaning: "dance", known: false },
{ word: "長さ nagasa", meaning: "length", known: false },
{ word: "厚さ atsusa", meaning: "thickness", known: false },
{ word: "秘密 himitsu", meaning: "secret, privacy", known: false },
{ word: "昼間 hiruma", meaning: "daytime, during the day", known: false },
{ word: "いつ頃 itsugoro", meaning: "about when, about what time", known: false },
{ word: "字 ji", meaning: "individual character, letter", known: false },
{ word: "七 nana", meaning: "seven Chinese origin", known: false },
{ word: "お釣り otsuri", meaning: "change of money", known: false },
{ word: "名字 myouji", meaning: "surname, family name", known: false },
{ word: "おじ oji", meaning: "one's own uncle", known: false },
{ word: "おば oba", meaning: "one's own aunt", known: false },
{ word: "祖父 sofu", meaning: "grandfather formal", known: false },
{ word: "祖母 sobo", meaning: "grandmother formal", known: false },
{ word: "大事 daiji", meaning: "importance", known: false },
{ word: "見方 mikata", meaning: "view, perspective", known: false },
{ word: "鳥 tori", meaning: "bird, poultry", known: false },
{ word: "犬 inu", meaning: "dog", known: false },
{ word: "返事 henji", meaning: "reply, answer, response", known: false },
{ word: "また mata", meaning: "again, also, or", known: false },
{ word: "青 ao", meaning: "blue, green", known: false },
{ word: "赤 aka", meaning: "red color", known: false },
{ word: "信号 shingou", meaning: "signal, traffic light", known: false },
{ word: "円 en", meaning: "circle", known: false },
];

let currentIndex = 0;
let showKnownOnly = false;
let showStarredOnly = false;
let isRandomized = false;
let currentDeck = [];

// DOM elements
const cardArea = document.getElementById('cardArea');
const cardCounter = document.getElementById('cardCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const markKnownBtn = document.getElementById('markKnownBtn');
const starCardBtn = document.getElementById('starCardBtn');
const toggleKnownBtn = document.getElementById('toggleKnownBtn');
const toggleStarredBtn = document.getElementById('toggleStarredBtn');
const jumpInput = document.getElementById('jumpInput');
const jumpBtn = document.getElementById('jumpBtn');
const randomizeBtn = document.getElementById('randomizeBtn');

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to update the current deck based on filters
function updateDeck() {
  let newDeck;
  if (showKnownOnly) {
    newDeck = cardsData.filter(c => c.known);
  } else if (showStarredOnly) {
    newDeck = cardsData.filter(c => c.starred);
  } else {
    newDeck = [...cardsData];
  }
  
  if (isRandomized) {
    shuffle(newDeck);
  }
  
  currentDeck = newDeck;
  currentIndex = 0; // This resets the index when the deck is changed
  renderCard();
}

// NEW: Function to refresh the view without changing the deck or index
function refreshCard() {
  renderCard();
  updateCounter();
}

// Function to render the current card
function renderCard() {
  cardArea.innerHTML = '';
  const cardData = currentDeck[currentIndex];

  if (!cardData) {
    cardCounter.textContent = `0 / 0`;
    setControlState(true);
    return;
  } else {
    setControlState(false);
  }

  const card = document.createElement('div');
  card.className = 'card';
  if (cardData.known) card.classList.add('known');
  if (cardData.starred) card.classList.add('starred');

  card.innerHTML = `
    <div class="card-content">
      <div class="card-face front">${cardData.word}</div>
      <div class="card-face back">${cardData.meaning}</div>
    </div>
    ${cardData.known ? '<div class="known-indicator">✅</div>' : ''}
    ${cardData.starred ? '<div class="star-indicator">⭐</div>' : ''}
  `;
  
  cardArea.appendChild(card);

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  const knownIndicator = card.querySelector('.known-indicator');
  if (knownIndicator) {
    knownIndicator.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleKnown(cardData);
    });
  }

  const starIndicator = card.querySelector('.star-indicator');
  if (starIndicator) {
    starIndicator.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStar(cardData);
    });
  }

  markKnownBtn.textContent = cardData.known ? '✅ Mark Unknown' : '✅ Mark Known';
  starCardBtn.textContent = cardData.starred ? '⭐ Unstar' : '⭐ Star';
  updateCounter();
}

function setControlState(disabled) {
  markKnownBtn.disabled = disabled;
  starCardBtn.disabled = disabled;
  prevBtn.disabled = disabled;
  nextBtn.disabled = disabled;
  jumpBtn.disabled = disabled;
  randomizeBtn.disabled = disabled;
}

function updateCounter() {
  const total = currentDeck.length;
  const displayIndex = total === 0 ? 0 : currentIndex + 1;
  cardCounter.textContent = `${displayIndex} / ${total}`;
  
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= total - 1;
}

function toggleKnown(cardData) {
  const originalCard = cardsData.find(c => c.word === cardData.word);
  if (originalCard) {
    originalCard.known = !originalCard.known;
    // Call refreshCard instead of updateDeck to avoid resetting index
    refreshCard();
  }
}

function toggleStar(cardData) {
  const originalCard = cardsData.find(c => c.word === cardData.word);
  if (originalCard) {
    originalCard.starred = !originalCard.starred;
    // Call refreshCard instead of updateDeck to avoid resetting index
    refreshCard();
  }
}

// Event listeners for controls
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < currentDeck.length - 1) {
    currentIndex++;
    renderCard();
  }
});

markKnownBtn.addEventListener('click', () => {
  const cardData = currentDeck[currentIndex];
  if (cardData) {
    toggleKnown(cardData);
  }
});

starCardBtn.addEventListener('click', () => {
  const cardData = currentDeck[currentIndex];
  if (cardData) {
    toggleStar(cardData);
  }
});

toggleKnownBtn.addEventListener('click', () => {
  showKnownOnly = !showKnownOnly;
  showStarredOnly = false;
  toggleKnownBtn.textContent = showKnownOnly ? '🌟 Show All Cards' : '🌟 Show Known Only';
  toggleStarredBtn.textContent = '🌟 Show Starred Only';
  isRandomized = false;
  randomizeBtn.textContent = '🔀 Shuffle';
  updateDeck();
});

toggleStarredBtn.addEventListener('click', () => {
  showStarredOnly = !showStarredOnly;
  showKnownOnly = false;
  toggleStarredBtn.textContent = showStarredOnly ? '🌟 Show All Cards' : '🌟 Show Starred Only';
  toggleKnownBtn.textContent = '🌟 Show Known Only';
  isRandomized = false;
  randomizeBtn.textContent = '🔀 Shuffle';
  updateDeck();
});

jumpBtn.addEventListener('click', () => {
  const jumpToIndex = parseInt(jumpInput.value, 10) - 1;
  if (!isNaN(jumpToIndex) && jumpToIndex >= 0 && jumpToIndex < currentDeck.length) {
    currentIndex = jumpToIndex;
    renderCard();
  } else {
    alert(`Please enter a number between 1 and ${currentDeck.length}.`);
  }
  jumpInput.value = '';
});

randomizeBtn.addEventListener('click', () => {
  isRandomized = !isRandomized;
  randomizeBtn.textContent = isRandomized ? '🔄 Unshuffle' : '🔀 Shuffle';
  updateDeck();
});

// Initial load
updateDeck();