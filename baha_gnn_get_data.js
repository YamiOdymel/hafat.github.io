if(window.location.href.search("gnn.gamer.com.tw/index.php")!=-1){
	
	// 用於搜尋文字轉換
	function replaceSearchText(text){
		return text.replace(/[`：・．《》。·！～「」－~!@#$%^&*()_+\-=?;‧:'",.<>\s\{\}\[\]\\\/]/gi, '').toUpperCase()
	}
	
	// 中資遊戲清單
	var gameNameList = [

`騎馬與砍殺||Mount & Blade`, `英雄聯盟||League of Legends`, `仙境傳說：守護永恆的愛||Ragnarok Mobile: Eternal Love`, `傳說對決 ||Arena of Valor`, `崩壞 3rd||Honkai Impact 3rd`, `陰陽師 ||Onmyoji`, `少女前線||Girls' Frontline`, `碧藍航線||Azur Lane`, `執劍之刻||Edge of Awakening`, `異塵餘生：庇護所 Online||Fallout Shelter Online`, `夢幻模擬戰||Langrisser Mobile`, `戀與製作人||Mr Love Queen's Choice`, `明日方舟||Arknights`, `第五人格||Identity V`, `未來戰||Counter:Side`, `最後的奇洛迪亞||最後的克勞迪亞||ラストクラウディア||Last Cloudia`, `少女・咖啡・槍||Girl Cafe Gun`, `Afk arena`, `Re：從零開始的異世界生活 - INFINTY || 從零開始的異世界生活—無限||Re:Zero infinity`, `一拳超人：最強之男||One Punch Man: The Strongest`, `陰陽師：百聞牌||Onmyoji: The Card Game`, `弓箭傳說||Archero`, `我的英雄學院：最強英雄||My Hero Academia: The Strongest Hero`, `原神||Genshin Impact`, `三國志・戰略版||Three Kingdoms Tactics`, `劍與遠征||Afk Arena`, `重裝戰姬||Final Gear `, `RO 仙境傳說：新世代的誕生||Ragnarok X: Next Generation `, `食物語||The tale of food`, `英雄聯盟：激鬥峽谷||League of Legends: Wild Rift`, `符文大地傳說||Legends of Runeterra`, `戰雙帕彌什||Punishing: Gray Raven`, `最強蝸牛||The Marvelous Snail`, `異世界女神物語||Goddess of Genesis`, `潘朵拉的迴響||Echoes of Pandora`, `灌籃高手 SLAM DUNK||SLAM DUNK`, `命運的法則：無限交錯 || 造物法則二：先鋒英雄||Astral Chronicles|| Law of Creation 2`, `騎士的公主養成：Idle Princess`, `叫我大掌櫃`, `我的勇者||My Heroes: SEA`, `黑潮：深海覺醒||Dark Boom || Black Surgenight || Abyss Front`, `神魔三國志`, `野生少女`, `雲上城之歌||Song of the Cloud City`, `少女的王座：命運所在之處||The Throne of Girl`, `關於我轉生變成史萊姆這檔事：魔物之王||Tensura:King of Monsters`, `拂曉的拾荒團||Memories of Wilderness`, `蒼天英雄誌2||Heroes of the Sky 2`, `王國 Kingdom：戰爭餘燼`, `忍者必須死||Ninja Must Die`, `英雄棋士團||Hero Chess`, `地下城物語||Gumballs & Dungeons(G&D)`, `破局：三國終章`, `明日之後||LifeAfter`, `PUBG MOBILE||PUBG MOBILE`, `放置奇兵||Idle Heroes`, `萬國覺醒||Rise of Kingdoms`, `我的學妹不可能那麼萌 2||battle x girl 2`, `獨奏騎士 ||solo knight`, `獵殺女神||Hunt The Goddesses`, `未定事件簿||Tears of Themis`, `奇蹟MU：跨時代||MU: Across Time`, `道友掛機嗎`, `全面屍控||State of Survival`, `永恆冒險||GrandChase`, `動物餐廳||Animal Restaurant`, `新笑傲江湖 M||New Smiling Proud Wanderer M || New Swordsman M`, `武林英雄傳`, `無盡對決||Mobile Legends: Bang Bang`, `部落衝突：皇室戰爭||Clash Royale`, `勇者鬥惡龍 怪物仙境 SUPER LIGHT`, `Garena 決勝時刻 Mobile || 決勝時刻 Mobile||Call of Duty: Mobile`, `元氣騎士||Soul Knight`, `三國殺名將傳`, `BanG Dream！少女樂團派對||BanG Dream! Girls Band Party!`, `奇迹暖暖||Love Nikki-Dress UP Queen || Miracle Nikki`, `夢境連結！Re：Connected || 夢境連結||Illusion Connect`, `精靈之境||Elf Realm`, `新斗羅大陸|| 新鬥羅大陸`, `部落衝突||Clash of Clans`, `聖光之約||Shining Beyond`, `真三國大戰 2||Three Kingdoms Epic War`, `新仙俠：起源`, `機動戰隊||Iron Saga`, `鎖鏈戰記||ChainChronicle`, `死亡愛麗絲||SINoALICE`, `江南百景圖||Canal Towns|| A Hundred Views Of Jiangnan`, `新射鵰群俠傳之鐵血丹心 || 新射雕群俠傳之鐵血丹心||New Legend of the Condor Heroes`, `群俠來了`, `完美世界M||Perfect World Mobile`, `奇幻生活 Online`, `帝國紀元||Rise of Empires`, `魔力寶貝 M||Cross Gate M`, `不休的烏拉拉||Ulala: Idle Adventure`, `靈境殺戮`, `龍之谷 M||Dragon Nest M `, `天涯幻夢`, `殭屍來了：保命要緊||Last Shelter: Survival`, `月圓之夜||Night of the Full Moon`, `閃耀暖暖||Shining Nikki`, `地下城堡2: 暗潮 || 地下城堡2：黑暗覺醒||Dungeon Survivor II: Dark Tide`, `仙境傳說 ORIGIN||Ragnarok ORIGIN`, `Garena 極速領域||Speed Drifters || QQ Speed || GKART`, `逆轉回合||My Turn: Infinite Magic Duel`, `約會大作戰：精靈再臨||Date A Live: Spirit Pledge - Global`, `放置天使||Idle Angels`, `小小勇者`, `決戰！平安京||Onmyoji Arena`, `伊甸園的榮耀 || 紅色:伊甸大陸的驕傲 || 伊甸園的驕傲||Red: Pride of Eden`, `仙境傳說 RO：愛如初見||Ragnarok Mobile: Love At First Sight `, `千秋辭||Ode to Heroes`, `新三國志手機版||New Romance of the Three Kingdoms`, `率土之濱 || 不朽征服||Immortal Conquest`, `蓋伊傳說 || GYEE||GYEE`, `TEON||TEON`, `武俠Q傳`, `江湖大夢 ||一夢江湖||Chu Liu Xiang`, `奇幻書境物語||Dress up! Time Princess`, `仙命決||Immortal Taoists`, `夢幻之星：伊多拉傳說||Idola Phantasy Star Saga`, `少女平和||Shining Maiden`, `永遠的 7 日之都||Eternal City`, `Fate/Grand Order||Fate/Grand Order`, `王國紀元||Lords Mobile`, `王者榮耀||Arena of Valor`, `蒼藍誓約||Blue Oath`, `不朽之旅：重生||Immortal: Reborn`, `Ro仙境傳說：天天打波利||RO: Idle Poring`, `鍊金工房 Online ～布雷賽爾的鍊金術士～||Atelier Online～Alchemist of Bressisle～`, `天地劫||Kalpa of Universe`, `蒼之紀元|| ロストディケイド||Lost Decade`, `地下城的邂逅||Dungeon Encounter`, `碧藍檔案||Blue Archive`, `瘋狂的庫庫姆||Krazy Kakoom Island`, `雲端修行手記`, `明日邊境||Battle Night: Cyberpunk-Idle RPG`, `荒野行動||Knives Out-No rules, just fight!`, `魔法門之英雄無敵：戰爭紀元||Might & Magic: Era of Chaos`, `天黑請閉眼 - 官方狼人殺 || 天黑請閉眼`, `蒼天英雄誌||Heroes of the Sky`, `渾沌學院||Chaos Academy`, `奶牛鎮的小時光||Harvest Town`, `槍與香蕉||Pirates Outlaws`, `龍族幻想||Dragon Raja`, `新希望||Seal: New World`, `鴻圖之下||Epic War: Thrones`, `漫威對決||MARVEL Duel`, `黑暗料理王||Monster Chef`, `獵魂覺醒||The Soul of Hunter || Errant: Hunter's Soul`, `新三國 漢室復興||Han Dynasty Revival of the Three Kingdoms`, `家庭教師||Katekyo Hitman Reborn Mobile`, `花舞宮廷||Flower Dance Palace?`, `小森生活||Komori Life`, `四海八荒之枕上琴`, `魔導少年：夥伴集結！||Fairy Tail: Friendship`, `聖鬥士星矢：覺醒||Saint Seiya: Awakening`, `貪婪洞窟 2：時光之門||The Greedy Cave 2: Time Gate`, `夢幻海島||Island King`, `戰國布武||Sengoku Fubu`, `少年猛將傳|| 三国志ブラスト少年ヒーローズ|| 少年三國志2||Dynasty Scrolls`, `叫我官老爺`, `天涯明月刀 手機版||Moonlight Blade Mobile`, `烏托邦：起源||Utopia: Origin - Play in Your Way`, `賽爾號：星戰再起`, `牧羊人之心||KarDia tou ABel`, `權力的遊戲：凜冬將至 M||GOT: Winter is Coming M`, `叫我帝尊大人`, `修真江湖：凡人修仙`, `死神 BLEACH - 正版授權手遊`, `崩壞學園 2||Collapse Gakuen `, `戰魂銘人||Otherworld Legends`, `宮廷計-成就你的宮廷大夢||宮廷計`, `時空中的繪旅人||For All Time`, `暗夜血姬 || 血族bloodline ||Bloodline`, `多多自走棋||Auto Chess`, `直到我中了一箭||Until I Got An Arrow`, `幻獸契約 ||Cryptract`, `Free Fire - 我要活下去 || Free Fire||Garena Free Fire - The Cobra`, `浮生為卿歌||Floating Life For Song`, `凹凸世界||Aotu Game`, `萌萌闖仙界`, `卡拉希爾戰記||Calibria: Crystal Guardians`, `超進化物語：起源||Beasts Evolved`, `忍者契約||Ninja Contract`, `魂器學院||Horcrux college`, `巫師傳奇：戰鬥宗師||Wizard Legend: Fighting Master (Early Access)`, `奇蹟 MU：最強者||mu strongest ||MU Miracle`, `洛菲斯的呼喚||Lophis Roguelike:Card RPG game,Darkest Dungeon`, `新神鵰俠侶 || 神鵰俠侶2||Condor Heroes 2|| The Return of the Condor Heroes 2`, `少女執行官||Shining Beyond`, `瑪奇 - 夢想生活||Mabinogi: Fantasy Life`, `暴走英雄壇||Crazy Hero Legends`, `卡德里亞道具屋||Cadria Item Shop`, `要塞遠征 ||Rising Fortress`, `雀姬||Queji Mobile`, `ASH ARMS - 灰燼戰線 -|| アッシュアームズ-灰燼戦線-||ASH ARMS`, `刀塔傳奇||小冰冰傳奇||Dot Arena`, `小花仙 M||Flower Fairy`, `奇想江湖`, `花與劍||Flower and Sword`, `月見之瑩||Elf Tales`, `時空勇者||Valiant Tales`, `戰火與秩序||War and Order`, `帕斯卡契約||Pascal's Wager`, `熱血群英傳`, `湯姆貓與傑利鼠：玩命追逐||Tom and Jerry: Chase`, `極無雙||Dynasty Legends`, `一個官人七個妻`, `六龍御天||Loong Craft`, `霹靂江湖||Pili Heroes`, `拉結爾 ||Raziel`, `密特拉之星 Mitrasphere||Mitrasphere`, `放置少女||Hōchi Shōjo: Hyakka Ryōran no Moehime-tachi`, `亞克傳承 R`, `少女召喚城堡`, `阿瑞斯病毒||Ares Virus`, `拳皇 98 終極之戰 OL||KOF'98 UM OL`, `聖鬥士星矢：正義傳說||Saint Seiya: Legend of Justice`, `星戰前夜：無燼星河||EVE Echoes`, `魔法紀錄 魔法少女小圓外傳||Magia Record English`, `幻書啟世錄||Genesis Masterwork Apocalypse`, `射鵰英雄傳 3D||Legend of the Condor Heroes 3D`, `方格騎士團||巨像騎士團||Checkered Knights Mobile`, `射鵰英雄傳 2017||Legend of the Condor Heroes`, `漫威超級戰爭||Marvel Super War`, `小小冒險娘||Little Adventure Girl`, `日理萬姬`, `新誅仙||Fantasy New Jade Dynasty`, `超機動聯盟 ||Super Mecha Champions`, `卡通農場||Hay Day `, `遇見逆水寒||Yujian Love Mobile || Justice Mobile`, `無盡騎士團：勇者啟示錄||Tales Of Knight || Hero Of Lyant`, `逍遙群俠傳`, `城堡爭霸||Castle Clash`, `諸神學院smash||Elora’s Raid`, `命運之輪`, `熹妃傳`, `時空旅人||Chronicle Of Time`, `悠長假期||Tour of Neverland`, `遺落大陸||Forsaken World`, `倩女幽魂 2 || 新倩女幽魂||A Chinese Ghost Story Online`, `全民槍戰||Crisis Action`, `食之契約||Food Fantasy`, `我的學妹不可能那麼萌||Girls X Battle`, `十二神兵器||Twelve Weapon of God`, `軒轅劍 - 劍之源`, `君王萬歲 ||Lords Hooray: Legends of Legion`, `倩女幽魂||GHOST STORY `, `文豪野犬 迷犬怪奇譚||Bungo Stray Dogs: Tales of the Lost`, `奈奧格之影||舊日傳說||Shadow of Nyog`, `Garena 魂斗羅：歸來||Contra Returns`, `越南大戰 DEFENSE||METAL SLUG DEFENSE`, `偶像夢幻祭 2||Ensemble Stars 2`, `熱血江湖手遊`, `軒轅劍龍舞雲山`, `幕府戰姬`, `世界征服者 4||World Conqueror 4`, `獵水部落||Water Hunt Tribe`, `紫禁繁花`, `異界之鑰||GEM-X || Another World || Gaia Odyssey`, `漢家江湖`, `荒野亂鬥||Brawl Stars`, `龍之谷：新世界||World of Dragon Nest `, `梅露可物語 癒術士與鈴之旋律||Merc Storia`, `最終休止符||Last Period`, `忍者大師 閃亂神樂 NEW LINK||Shinobi Master Senran Kagura: New Link`, `劍與魔法王國 古代女神||Logres of Swords and Sorcery: Goddess of Ancient`, `偶像夢幻祭||Ensemble Stars`, `末日希望||Fury Survivor: Pixel Z`, `熹妃 Q 傳`, `塔防三國志`, `亂世妖姬`, `黑道風雲`, `霸王之野望` , `列王的紛爭||Clash of Kings `, `妖神記||Demon God`, `塔防遊戲英雄志`, `光明勇士||Legend of Honour`, `小小軍團||Mini Warriors`, `仙劍奇俠傳 - 宿命`, `萬靈啟源||Animistic`, `魔物契約：進化||Monster Contract`, `朕的江山||Three Kingdoms: Overlord`, `放置三國英雄傳之趙雲傳奇`, `星癒者||Star Healer`, `傳送門騎士||Portal Knights`, `深淵地平線||Abyss Horizon (English)`, `戀戀炫舞團`, `惡搞三國`, `胡桃日記||HUTAORIJI: Emoji Girl Menhera`, `海島勇士`, `劍俠情緣手機版`, `seal 希望：新世界||SEAL Hope: New World`, `斗羅大陸||Soul Land`, `我要當大俠`, `一騎當千 Extra Burst`,   `冒險三國誌`, `天姬物語||Final Princess`, `山海有妖獸`, `諸神皇冠：百年騎士團||Knights of Ages`, `九州幻想 M`, `企鵝島||Penguin Isle`, `飄流幻境 M`, `蒼之騎士團 R||Hortensia Saga R`, `戰國名將傳`, `塗鴉英雄`, `TERA CLASSIC`, `光之戰記  ||  災禍的真理、災禍真實`, `NBA 籃球大師`, `御史 SAMA||Night Agent: I'm the Savior`, `口袋英雄 Pocket Heroes`, `迪士尼 巫師競技場||Disney Sorcerer's Arena`, `鮮艷軍團 || 口袋奇兵||Top War: Battle Game`, `新大掌門`, `Warframe`, `流亡黯道 PoE||Path of Exile `, `阿瓦隆之王：龍之戰役||King of Avalon`, `魔界戰記 DISGAEA RPG||DISGAEA RPG`, `Helios Rising Heroes||Helios Rising Heroes`, `魔界大戰`, `閻王不高興||大王不高興||The Furious Yama`, `破敵・三國志`, `阿卡迪亞||Arkadia: Chronicle of Hemitheos`, `鋼彈爭鋒對決`, `創世破曉||Genesis`, `元素契約||Dungeon Fantasy`, `半世界之旅||A tour of the half world||Journey Within Half of The World`, `獵人 HUNTER x HUNTER`, `Idle Chaos - 超級英雄 ||冒险の国度||Idle Chaos-Hero Clash`, `瘋狂動物園||Rodeo Stampede: Sky Zoo Safari `, `英雄傳說：星之軌跡||The Legend of Heroes: Trails in the Star` , `妖怪餐廳|| 精靈食肆||Yokai Kitchen - Restaurant Management RPG`, `字走三國：王者霸業||Auto Chess?`, `仙劍奇俠傳 5 手遊版`, `三國演義：最強武將傳||Three Kingdoms: Destiny Heroes`, `別讓我冒險`, `非人學園||Extraordinary Ones`, `喵斯快跑||Muse Dash`, `魔塔守護者`, `屍妹 Z girls ||絕園少女 || 學姐軍團||Zgirls - Girls vs Zombie Battle Game`, `君臨天下`, `功夫全明星 ||Kung Fu All-Star`, `我叫 MT4：榮耀||My name is MT4`, `地下城堡||Dungeon Survivor`, `星工場||Star Works Online`, `放置黑道大亨||Idle Mafia`, `小小帝國||Little Empire`, `黑騎士與白魔王||Kurokishi to Shiro no Maou`, `魔王的日常：妃你莫屬 ||異世界大作戰 ||異界二次元 || 魔妃異聞錄||Demon Life - My Harem`, `上古戰場||The Elder Fight`, `轟啊坦克 M ||Fortress GO`, `合金彈頭 - 集結||Metal Slug: Assembly of M`, `王牌指揮官`, `三國 BLADE`, `英雄神鬪曲||Hero Cantare`, `海島奇兵 ||Boom Beach`, `三國大亨-富甲天下`, `迷你世界||mini world`, `逆襲的英靈||卡王爭霸||Lords Online`, `天機江湖`, `陰陽師 妖怪屋||Onmyoji: Yokai Koya`, `愛養成`, `夢三國||Dream of the Three Kingdoms Mobile`, `蒼翼默示錄：幻影降臨 ||BlazBlue Revolution Reburning`, `幻靈之契`, `三國戰紀手遊版||Knights of Valour Mobile`, `朝歌封神誌`, `策三國`, `海島紀元||Island Era`, `我的起源||ReEvolve || Re:Evolve`, `放置魔王`, `寶可夢大集結||Pokemon Unite ||Pokémon UNITE`, `克拉戀習生`, `戰艦少女 R||Warship Girls R`, `進擊吧！三國`, `Fairy Tail（魔導少年）：無盡冒險 || 妖精的尾巴：無盡冒險||Fairy Tail: Endless Adventure`, `放置大師||AFK Master`, `捕魚達人千炮版||Fish Hunter Champion`, `掌門太忙`, `塞爾之光||Light of Thel`, `金將傳說M||Legend of Golden Commander M`, `魅子 Online`, `強的要命的英雄`, `封印者 M`, `太陽之都`, `CODE：SEED 星火之歌||CODE:SEED`, `御靈錄 Otogi || 陰陽おとぎソール ||Otogi: Spirit Agents`, `遺忘之境：World of Lethe || ミラージュ・メモリアル ||World of Lethe || Mirage Memorial`, `少年三國志||Juvenile Three Kingdoms`, `星辰幻想`, `大俠客||Great Sword Man`, `流星群俠傳`, `帝國：文明的崛起||Empire: Rising Civilizations`, `鐵血群俠傳`, `鬥陣麻將 || 鬥陣歡樂城`, `亞瑟英雄傳||heroes of camelot`, `雷霆戰機||Thunder Fighter`, `天使軍團 - 全 3D 放置掛機 RPG||Angel Legion`, `魔力寶貝手機版||CROSS GATE `, `Snake Off - 貪食蛇大作戰||Snake Off`, `末日方舟 ||Delivery from the pain`, `大掌門普拉斯`, `王牌製片人`, `夢之彼端 ||Dimension of Dreams`, `奇蹟 MU：覺醒||MU: Awakening`, `懸崖底下大寶劍`, `大妖錄`, `仙劍奇俠傳 九野||Chinese Paladin : Sword And Fairy JY`, `魔導少年－最強公會`, `天涯明月刀 ||천애명월도 ||Moonlight Blade`, `破世者：封‪神||Gadlingers: Creation of the Gods`, `鬥獸戰棋||Tactical Monsters Rumble Arena`, `四驅傳說||Mini Legend - Mini 4WD Simulation Racing Game`, `地下城之謎`, `AOD龍之怒吼||Awakening of Dragon`, `盛唐妖夢 || 雲夢四時歌||Yunmeng Four-Time Song`, `榮耀遠征：Journey To Glory||Journey To Glory`, `海軍最前線||Naval Front-Line`, `Sky光遇||Sky: Children of the Light`, `龍魂創世`, `極簡地下城 RPG||Minimal Dungeon RPG`, `競逐之國：毀滅時代||Rival Kingdoms: The Endless Night`, `大酋長||Chief Almighty: First Thunder BC`, `街頭籃球`, `死神：羈絆之刃`, `創世奇兵 ||Warriors of Genesis`, `高能手辦團 || 模型少女 AWAKE||Figure Story `, `模擬帝國||Sim Empire`, `MARVEL：超級爭霸戰||MARVEL Contest of Champions`, `春秋 M||Spring and Autumn M?`, `靈之轉生|| 靈之逆轉||Soul Reverse Zero`, `螺旋勇士||Spiral Warrior`, `第二銀河||Second Galaxy`, `封神召喚師||Summoner of the Gods`, `雄霸天地`, `妖精的尾巴：啟程||Fairy Tail: Departure`, `伊蘇 6 Online～納比斯汀的方舟～||Ys VI Online ~ The Ark of Napishtim ~ ||Ys VI Online The Ark of Napishtim`, `雲裳羽衣||Fashion Cloudy`, `街球對決 `, `克隆戰爭||Clone Evolution`, `艾爾戰記||Elsw­o­r­d­:­E­v­o­l­u­tion`, `冒險與挖礦`, `魔力寶貝：放置版`, `夢境彼岸 ||Edge of the Dream`, `飄流幻境 M`, `三國群英傳 - 霸王之業 ||Rise of Dynasty: Three Kingdoms`, `閻王不高興 ||大王不高興||The Furious Yama`, `EVA - 新世紀福音戰士正版授權`, `卡片怪獸||Card Monsters: 3 Minute Duels`, `Epic summoners`, `我在仙界玩泥巴`, `烈火如歌||Fire Like The Song`, `比得兔：隱藏的世界`, `Lapis Re:Lights ～這個世界的偶像會用魔法～ ||Lapis Re:Lights`, `召喚 x 戰姬||Summon X War Girl`, `光明之戰 || 光明大陸||Crusaders of Light`, `覓仙緣||Eternal Legends M`, `閃亂忍法傳|| 閃亂忍法‪伝‬||SenRan Sakura`, `黑色倖存||Black Survival`, `魔力寶貝：永恆初心`, `時之歌：無盡之詩||Song of Time`, `戰姬天下`, `御靈繪卷||Yokai Tamer || Scroll of Onmyoji `, `瘟疫公司 ||Plague Inc. `, `上古戰魂-重裝武士||Armed Heroes`, `梅比斯之門||Gate of Mobius`, `喪屍之戰||Last Empire- War Z`, `合戰三國志`, `盾之勇者成名錄 RISE || 盾之勇者成名錄：浪潮||The Rising of Shield Hero RISE || Shield Hero RISE`, `第六天魔王`, `黎明覺醒||Dawn Awakening`, `解神者||X2 Eclipse`, `黎明覺醒：變態歸來||Dawn Awakening Abnormal Return`, `三國英雄傳說||Three Kingdoms: Hero Legendaris`, `勇者掛很大||EZPZ Saga`, `夢境彼岸：卡牌戰記||Dreaming Dimension: Deck Heroes`, `狩遊世界 ||Hunter's World`, `征服紀元||EraOfConquest?`, `方舟指令 || アークオーダー ||Ark Order`, `格鬥天王 M || ザ．キング．オブ．ファイターズM ||The King of Fighters M`, `零域戰線 || 代號：零||CODE：ZERO`, `食夢計劃 || 戦姫ストライク ||Senki Strike`, `惡魔獵人：巔峰之戰 || 鬼泣-巔峰之戰||Devil May Cry: Peak of Combat`, `弓箭手死了！唯有勇者的我出戰！ || ダッシュヒーロー大冒険 ||Dashero: Sword & Magic`, `夢境元素使 || Idle Goddess-神之塔||Idle Goddess`, `終焉誓約||Vow of Heroes`, `戰舞幻想曲`, `極道市長`, `戰地王座：氏族爭霸||Mobile Royale`, `仙劍奇俠傳 幻璃鏡 || ファントムミラー||The Legend of Sword and Fairy: Mirror of Illusion`, `天堂 2 M `, `雲之歌||Legend of Cloud`, `萬靈訣`, `極限街籃：零秒出手 || 極限街籃||Basketrio`, `無盡方舟 || 百萬騎士團||Million Knights : Miracle Guardian`, `沉睡森林`, `新世界的神||Saga of Divines`, `勇氣之劍×火焰之魂 || ブレイブソード×ブレイズソウル ||BraveSword × BlazeSoul`, `Z girls II-Last One`, `巨砲連隊`, `Phigros||Phigros`, `OP：終極之戰 ||  海賊王：終極之戰||One Piece: Ultimate Battle`, `姬武將：戰國亂舞||戦国少女～戦場に舞う姫たち～ ||Sengoku Shoujo ~Senjou ni Mau Hime-tachi`, `三國志．少年無雙||Three Kingdoms: Youth Warriors`, `魔力寶貝 - 正版授權`, `王者遠征`, `球球大作戰|| Battle of Balls`, `異能學園：Soulworker|| 靈魂行者學院||Soul Worker Academia`, `最強修仙||Legendary Immortals`, `末日喧囂||Doomsday Hustle`, `侍魂：朧月傳說||Samurai Shodown M`, `Re：從零開始的異世界生活 Lost in Memories||Re 0：Lost in Memories`, `新夢境連結 R||Illusion Connect`, `少女前線 2：追放 || 少女前線：雲圖計劃||GIRLS' FRONTLINE EXILIUM`, `英雄傳說 閃之軌跡 III||The Legend of Heroes: Trails of Cold Steel III`, `Chameleon Run`, `戰意Conqueror's Blade||Conqueror's Blade || War Rage`, `千銃士：Rhodoknight`, `機動戰姬：聚變||Artery Gear: Fusion`, `末日餘暉 ||Farlight 84`, `輪迴戰姬||War of Reincarnation - Infinity War?`, `降神計劃||女神降臨||女神降ろし||Goddess Descending `, `天諭||Revelation`, `光之同盟`, `波西亞時光||My Time at Portia`, `龍與少女交響曲||Symphony of Dragon and Girls`, `戰鬥吧龍魂`, `刀劍神域 黑衣劍士：王牌||Sword Art Online Black Swordsman: Ace`, `約會大作戰：凜緒輪迴||DATE A LIVE Rio Reincarnation mobile?`, `斗羅大陸 3D：魂師對決||Soul Land: Soul Master Duel `, `超時空法則`, `陰屍路：倖存者|| 行尸走肉：幸存​者||The Walking Dead: Survivors`, `靈魂方舟 ||soul ark`, `楓之谷R || 楓之谷R||MapleStory R?`, `煙雨江湖||World of Misty Rain`, `白夜極光 || びゃくやきょっこう||Alchemy Stars`, `核芯：利希特||コア：リヒト||core:licht`, `京城十里錦繡`, `西遊 -「西行紀」正版授權||Westward M`, `球球英雄||Fusion Crush`, `龍之谷 2：進化||DRAGON NEST 2`, `無盡城戰||Infinity Kingdom`, `神姬裁決`, `魔龍與聖劍||魔竜と聖剣||Dragon And Sword`, `血咒之城：暗夜儀式||Bloodstained: Ritual of the Night mobile`, `未生逆行|| 早安少女||Unborn Retrograde`, `超神學院：進擊||Black Troop: Legend`, `神仙大亂鬥`, `街頭籃球 2：正宗續作||City Dunk 2`, `跑跑卡丁車官方競速版 || 跑跑卡丁車 RUSH+ ||KartRider Rush+`, `NBA 范特西`, `狂暴三國`, `戰鎚覺醒 || 戰錘覺醒||Magic Idle RPG Game || Magic Warhammer || Magic Warhammer:Idle Epic hero War v`, `碰碰蛇 2`, `神魔召喚 GS||グランドサマナーズ||Grand Summoners`, `烈火戰記`, `夢三國復刻版`, `光與夜之戀||Love in Light and Night `, `古鏡記||Tales of the Mirror`, `失落之魂||Lost Soul Aside`, `奇幻小鎮`, `戰神風暴 ||War Storm`, `帝國曙光||Rise of Empires: Ice and Fire`, `暗黑破壞神 永生不朽||Diablo：Immortal`, `因格瑪的預言|| 終焉默示錄 || 因格瑪の預言||Puzzle & Tales || Apocalypse Of Demise`, `歡樂大東家`, `封神異世錄`, `董卓來了`, `叫我君主：紅顏江山我都要`, `少女廻戦 時空恋姫の万華境界へ || 少女迴戰||Shoujo Kaisen`, `騎士物語||EZ Knight`, `喪屍派對`, `泰坦殺手 ||Titan Slayer`, `都市傳說外賣 ||Urban Legend Hong Kong`, `我要練神功`, `我是錢掌櫃`, `三國殺名將傳 - 威力加強版 || 三国志名将伝||Sangokushi Meishoden`, `尋找天堂 || 尋覓天堂||To the Moon ||  Finding Paradise`, `方格迷宮 - 腦力訓練||The Boxes Maze`, `新式接龍||New Chinese Solitaire`,
`Fate/Grand Order || FGO||Fate/Grand Order`, `瑪娜希斯迴響`, `cyder`, `星三國：Defend`, `新劍蕩江湖||劍蕩江湖`, `大妖籙`, `爆笑武道會`, `我在江湖有座城`, `ChinaJoy`, `少女前線：雲圖計劃||Girls' Frontline: Project Neural Cloud || Neural Cloud`, `實況力量足球`, `Garena Undawn`, `Project Cat`, `爆走兄弟：疾速奔跑`, `真・三國無雙 霸`, `魂斗羅：歸來`, `海底小縱隊學英文||Octonauts English`, `烈火戰馬||Iron Conflict`, `帝國神話||Myth of Empires`, `實況！救援大作戰||Rescue Party: Live!`, `獵魔者Demon Hunter：覺醒`, `主公在上我在下||殿は私の上で`, `斜槓勇者||スラッシュ ユウシャ||Slash Brave`, `女神都市`, `代號：紅月||Hunters’ Moon`, `代號：夜鶯`, `斯露德||THRUD`, `代號：了不起的模擬器`, `代號：艾塔`, `伊蘇：夢境交織的長夜||Lacrimosa of DANA`, `寶石研物語：伊恩之石||GemTrader`, `代號：依露希爾`, `代號 C`, `無盡奧德賽`, `終末陣線：伊諾貝塔||Final Front: Enobetta`, `悠久之樹||Eternal Tree`, `太吾繪卷 ||The Scroll of Taiwu`, `工匠與旅人||Craftsman and Traveler`, `暗影火炬城||F.I.S.T.: Forged In Shadow Torch`, `斬妖行 ||Eastern Exorcist`, `光明記憶：無限||Bright Memory: Infinite`, `魔導少年：力量覺醒||Fairy Tail: Power Awakens`, `小小蟻國||The Ants - Underground Kingdom`, `絕地求生 M`, `ICEY`, `無盡戰記 Infinity Conflict||Infinity Conflict`, `雀魂麻將 majsoul`, `神魔煉 ||Alchemy of God&Demon`, `不休戰隊||Nonstop Game: Cyber Raid`, `碰碰蛇`, `萌趣醫院 ||Mochi Hospital`, `山海旅人||The Rewinder`, `仙劍奇俠傳七||Chinese Paladin 7`, `重返帝國`, `少女末世錄`, `永恆守護`, `英雄聯盟：聯盟戰棋 || 金鏟鏟之戰`, `聖女戰旗||Banner of the Maid`, `靈之秘境: 異像殘影||Mysteria: Occult Shadows`, `諾弗蘭物語 || 鍊金少女 M`, `合金彈頭：指揮官||METAL SLUG：COMMANDER`, `哈利波特：魔法覺醒||Harry Potter: Magic Awakened`, `放置英雄Eureka||Idle Hero Eureka`, `大富翁 10||RichMan 10`, `不朽的眾神殿`, `映月城與電子姬`, `三國戰神記||Three Kingdoms:Heroes of Legend`, `Everdale`, `失落城堡||Lost Castle`, `荒野狩獵||Cave Shooter`, `戰爭雷霆||War Thunder`, `黑神話：悟空||Black Myth: Wu Kong`, `靈魂潮汐 || ソウルタイド||-Soul Tide-`, `戰火勛章||Warpath`, `ACE Soccer 球場風雲`, `拂曉：勝利之刻||ヴェルヴェットコード||Velvet Code`, `世界計畫 繽紛舞台！ feat. 初音未來`, `Zold:out`, `時光公主||Time Princess`, `Project Snow`, `喵遊世界`, `龍與誓約 - 守護`, `神覺者`, `夢想新大陸`, `少年封神傳`, `地藏伏魔錄`, `這位勇者超普通`, `激鬥峽谷`, `伊格利亞戰記||The Heroic Legend of Eagarlnia`, `BLEACH 境・界：斬魂之刃 || 境・界：斬魂之刃`, `三國殺手機版||Game of Heroes: Three Kingdoms`, `星魂2M`, `七號堡壘||last fortress:Underground`, `命運契約||Fate Contract`, `滄月戰紀 || 滄月：幻境連結||Final Fate TD`, `來自星塵 || エクスアストリス||Ex Astris`, `盛世君王 || 帝王生涯`, `緋紅戰線 ||Diverse Order`, `伊格效應||Ego Effect`, `因狄斯的謊言||Indies' Lies`, `伊蘇 6～納比斯汀的方舟`, `仙與仙遊`, `星之夢幻島`, `魔力寶貝：歸來`, `明末：淵虛之羽||WUCHANG: Fallen Feathers`, `天命奇御二||Fate Seeker 2`, `流火之詩 II：燃||Eternal Scarlet II`, `無盡征途||Ever Legion`, `斗羅大陸 - 鬥神再臨||Doula Continent: Reunion`, `大俠有點窮`, `夢幻島傳說||The Legend of Neverland`, `魔女兵器||Witch Weapon`, `劍開山門`, `唱舞全明星`, `尖塔奇兵||Slay the Spire || 殺戮尖塔`, `遇見妳的貓||Purrfect Tale`, `冒險大亂鬥-童話的逆襲`, `三國志天下布武||Rise Of Three Kingdoms`, `喵咪鬥惡龍||Cat Quest `, `武器店物語||Weapon Shop Fantasy`, `TREN0||Tren0`, `奮鬥吧領主大人||Tiny-Tasy Town`, `legioncraft`, `宇宙大拍扁||Big Bia`, `Tap Titans`, `吸血鬼戀人||Immortal Diaries`, `星動時分`, `大當家：財源廣進||Merchant Master`, `主公的遠征`, `魚樂大亨 || 千炮捕魚`, `挖掘機我最強||Stone Miner`, `菲菲大冒險 || ファミリーファームの冒険||family farm adventure`, `Z紀元 || エイジオブゼット||age of z origins`, `ARKA-蒼穹之門 || ARKA-蒼穹の門`, `奇蹟之劍 || 魔剣伝説`, `ウッディブロック：エンドレスパズル||Woody Block：Endless Puzzle Game`, `成名錄～華與武之戰國 || 成り上がり　華と武の戦国`, `大老闆 || おねがい社長！||big boss`, `日替わり内室`, `戦艦帝国-228艘の実在戦艦を集めろ`, `叫我萬歲爺 || アイアム皇帝`, `騎士的公主養成`, `伊甸園的驕傲 || レッド：プライドオブエデン||Red: Pride of Eden`, `貓咪軍團大作戰`, `決勝時刻`, `一念逍遙`, `偌星 ||Starlike`, `Project Makeover`, `戰爭之吻`, `問道`, `榮耀大天使`, `麥琪頓莊園||Matchington Mansion`, `夢幻新誅仙`, `小浣熊百將傳`, `百鬼夜行錄`, `摩爾莊園`, `神武4`, `提燈與地下城`, `蔚藍檔案`, `鐵甲雄兵||Blood of Steel`, `生死狙擊||battle teams || Blood Strike || Global Strike`, `音樂少女||Music Girls`, `世上英雄`, `魔物調查者||Tiny Pixel Knight`, `魔法門之英雄無敵：王朝`, `快打旋風：對決`, `記憶事務所`, `BLADE 刀鋒戰記 2`, `影之刃：斷罪者`, `影之刃||Phantom Blade || DARK BLADE`, `怪物之家||Dad's Monster House`, `崩壞：星穹鐵道`, `辣妹網咖||Gamer Cafe`, `萌爪餐廳||Downy Inn`, `鈴蘭之劍：爲這和平的世界||Code: SSRPG`, `アイランドガール‪ズ‬||Island Girls`, `ラファームの少女||Rise of Girls`, `超次元女友：女神的幻想天堂 || 超次元女友: 神姫放置幻想樂園||超次元彼女: 神姫放置の幻想楽園||Superdimensional Girlfriend: Goddess' Fantasy Paradise`, `契約少女||ガールズ コントラクト||Contract Girls`, `ドラゴンハントレス||Dragon Huntress`, `銀翼計畫||プロジェクト・シルバーウイング||Project Silverwing`, `パズルガールズ||Puzzle Girls`, `百鬼夜行- 百鬼異世界物語||もののけ夜行-百鬼異世界物語||Mononoke Nocturne - The Hundred Demon World Story`, `絕境少女：復仇女神||ラストエスケイプ- 復讐の女神||Last Escape: Goddess of Revenge`, `三国ガールズ||Three Kingdoms Girls || Sangoku Girls`, `三國志外傳：戰姬覺醒||三国志外伝：戦姫覚醒||Dawn of Dynasty`, `光之童話||メルヘン・オブ・ライト～モロガミ放置RPG～||MARCHEN OF LIGHT`, `殭屍來了- 萌妹大冒險||Mow Zombies - 美少女サバイバルゲーム`, `女武神衝擊-翱翔天際的少女-||ヴァルキリーインパルス-天翔ける乙女-||Valkyrie Impulse`, `蒼空幻想||蒼空ファンタジー～運命のヴァルキュリア～||BlueSky Fantasy`, `哞哩的長夢||Moolii's Dreamland`, `妖靈幻想||Demon Fantasy`, `夢想創業城`, `戀愛革命||LuV.Revolution`, `逐光之旅||Lumione`, `籠中窺夢||Moncage`, `新莊園時代 || 莊園時代`, `夢回大航海 || 大航海歸來- 3D航海時代||DREAM OF VOYAGE GAMe`, `魔卡之耀 || 英靈幻境`, `王者戰神`, `代號：侵入 || 侵入：源代碼`, `異界深淵：覺醒`, `零之戰線||カウンター・アームズ -終焉武装少女- || 終焉武装少女||The Last Armed Girl || Zero Arms || Counter Arms`, `姬鬥無雙 || 姬斗無雙`, `上古有靈妖 || 山海有靈妖`, `代號：灰者`, `長夜微光`, `螺旋英雄譚||Helix Saga`, `Project 24/36`, `重構：阿塔提斯||RE: AETATIS`, `火環||Prometheus`, `餘燼風暴||Bless Eternal Mobile`, `幻塔||Tower of Fantasy`, `諾亞之心||Noah's Heart`, `爆裂魔女||Burst Witch`, `特戰英豪||VALORANT`, `零界之痕||soul of destiny || Project Soul`, `人形覺醒||Awakening Automata`, `釀造物語 ||Hundred Days`, `新傲劍武林`,
`放置少女團 || 純白地平線 || 纯白境界 ||pure white realm || pure white horizon`, `放置神域||Olympus: Idle Legends`, `光之守望||Sins Raid: Heroes of Light`, `櫻都學園 || 零界之都||Zero Kyokai`, `魔天記3D ||魔天記 || 魔天M||Magic Heaven 3D`, `將膽||Three Kingdoms: Heroes & Glory`, `一劍傾城||One Sword of Allure`, `長生訣||Immortal Swords`, `裝甲戰姬||PanzerGirls`, `伊洛納||Elona Mobile`, `螃蟹大戰 || 蟹鬥||カニノケンカ||Fight Crab`, `馭劍江湖`, `荒野領主`, `創世戰魂||SOUL OF GENESIS`, `第七史詩日服||エピックセブン`, `絕地求生`, `莽荒英雄錄`, `高手：Master Warriors`, `The Finder：追尋者`, `龍族：起源||DRAGONRAJA ORIGIN`, `東離劍遊紀||Thunderbolt Fantasy`, `劍俠情緣 R || 新劍俠情緣手遊`, `星之彼端||Starside`, `Rebirth of Chaos: Eternal saga`, `爭霸三國`, `黎明死線 M`, `一拳超人：世界`, `錯位時空 || 天命起源`, `逆光潛入`, `蒼穹幻夢`, `Storia -寶物娘-||Storia - 宝物娘 -`, `龍與世界的盡頭||Dragon and the end of the world`, `數碼寶貝：新世紀`, `Boom Beach: Frontlines`, `王者榮耀‧世界`, `奇蹟 MU：正宗續作`, `SNK - 鬥魂集結 || 全明星激鬥||SNK All Stars Fight || All Stars Fight`, `砰砰法師||PunBall`, `RuneScape`, `華夏群俠傳`, `異世界的城主大人||Lord of the Other World`, `全明星覺醒`, `烏冬的旅店||Resortopia`, `開心鬥一番`, `龍與勇士`, `皇室奇兵||Clash Mini`, `8 Ball Pool`, `豆腐女孩`, `閃亂神樂 NEW LINK`, `聯盟外傳：海克斯失序||Hextech Mayhem: A League of Legends Story`, `匠木`, `復甦的魔女||Revived Witch`, `發現者||STAR STRIDE`, `星遇online`, `蟹王爭霸`, `緋色夢境`, `命運之怒||Rage of Destiny`, `閃亂神樂`, `仙劍奇俠傳：世界 || 代號：世界`, `LINE 血之聖約`, `奧術`, `未來職業棒球||未来プロ野球`, `女皇陛下 || 女皇物語 || 全民養成之女皇陛下`, `永恆喚靈 || 魔法領主-放置戰爭||Immortal Summoners - Awaken`, `惡魔覺醒 - 永恆之戰||Awaken Demons - Eternal war`, `帕尼尼豪門足球`, `亂世神將`, `幽行玄城`, `伊甸啟示錄`, `太古異聞錄`, `絕世仙王`, `新射鵰群俠傳`, `蒼穹英雄`, `絕對演繹`, `無盡的拉格朗日`, `天星訣`, `永夜星神`, `無邊存在`, `心淵夢境||AFTERIMAGE`, `古劍奇譚||Swords of Legends || Gujian`, `三國志幻想大陸`, `有殺氣童話`, `三國：英雄的榮光`, `無極仙途`, `黑暗傳說 || 黑暗傳說單機RPG||Legend of Darkness`, `雷索納斯||Resonance Solstice`, `光隙解語`, `紙嫁衣||紙装束||Paper Bride`, `大秦帝國`, `妄想山海：乾坤||Chimeraland`, `代號：燭`, `阿卡夏計劃 || 明日戰紀||The Project：Akasha`, `三國殺`, `超凡先鋒`, `project:1024`, `道士出觀-林正英正版授權`, `道士出觀`, `暗影傳說`, `超前綫||Hyper Front`, `Mythic Heroes`, `聖樹喚歌||Holy Tree Song`, `迷失蔚藍||LOST in Blue`, `鐵匠傭兵團||Weapon Heroes : Infinity Forge`, `島上驅魔人||Exorcist In Island`, `小怪獸下樓梯||Little Monsters Down!`, `跳躍吧小怪獸!||Jump! Little Monster!`, `Fate/EXTELLA LINK||フェイト/エクステラ リンク`, `DC Worlds Collide`, `貓娘樂園來店||ネコぱらいてん！`, `黎明啟示錄||Mobile Legends:Adventure`, `姬械聯盟：藍星危機||armed girls union`, `命運因子||Fading City`, `乾坤飛劍傳 || 仙界龍俠傳`, `新天龍八部 Online`, `文明霸業-王者歸來||エボニー - 王の帰還||Evony-The King’s Return`, `胖兔文明||Rabbit Empire`, `影業大亨 `, `昭和米國物語||Showa American Story`, `放置魔法學院||Idle Magic School`, `商業街||Shopping Mall Tycoon`, `造個船吧||Arkcraft - Idle Adventure`, `開心水族箱||Happy Fish: Dream Aquarium || My Fishbowl`, `開心消消樂||Anipop`, `海濱消消樂||Summer Pop`, `幻劍九歌`, `洛克王國||Roco Kingdom`, `天龍八部手機版 || 天龍八部手游`, `戰策三國志`, `新墨魂`, `寒冬計畫 Mobile||Project Winter Mobile`, `阿凡達：復仇||Avatar：Reckoning`, `我在長安有條街`, `Bingo Aloha`, `風之起源||Origin of Wind`, `新信長之野望||新信長の野望`, `葬花·暗黑桃花源||Funeral Flower·Dark Hei Peach Garden`, `少女戰爭：幻想天下統一戰||少女ウォーズ: 幻想天下統一戦||Girl Wars: Fantasy World Unification Battle`, `雄才三国～雄才で争う激動の天下～`, `貓友圈 ~貓咪的旅行~`, `麻雀一番街||Riichi City`, `MetaCity M`, `阿爾米婭讚歌 || 阿爾米亞讚歌 ||Almiya Anthem`, `你已經猜到結局了嗎`, `貪吃蛇進化論||Merge Snake!`, `閒置龍塔 || 空閒女獵手:龍界||Idle Huntress: Dragon Realm`, `Cash Frenzy`, `維加斯賭場老虎機||Lotsa Slots™ - Vegas Casino`, `Yalla Ludo`, `蘇丹的遊戲||Game of Sultans`, `西部風雲||West Game`, `Be The King`, `大福娛樂城||Jackpot World`, `貓咪大迷宮`, `苦手傳奇||異界之上||異世界苦手物語||Nigate Tale`, `王國衛隊||Kingdom Guard: Tower Defense`, `貪吃蛇大作戰2||Snake Off 2`, `WePlay - 線上桌遊吧||WePlay - Party Game & Chat`, `可汗的遊戲||Game of Khans`, `我叫 MT：經典再現`, `白荊迴廊`, `仙夢如歌`, `探險射射射`, `蒼空物語 || 창공아레나||Blue Sky Arena || Changgong Arena`, `以閃亮之名||Glamorous Secrets`, `DK Mobile`, `愛琳詩篇`, `不朽覺醒`, `Wonder Cash Casino`, `鐵血江湖路`, `賽馬娘||Uma Musume Pretty Derby`, `波紋騎士`, `萃星物語`, `迷宮大偵探`, `奧奇傳說`, `寵物冒險家 || 神獸領域?`, `航海與家園`, `馴龍物語`, `王者紛爭`, `微型車漂移||Minicar Drift`, `槍火重生`, `星際駭客`, `地府日記`, `風色幻想：命運傳說`, `某不穩定的氣功波`, `魔法學院 || 魔法工坊`, `疑案追聲||Unheard`, `超神軍師`, `煙雨江南`, `Royal Shooter`, `Hytale`, `愛麗絲的衣櫥||アリスクローゼット||Alice Closet`, `魔戒：開戰時刻||ロード・オブ・ザ・リング：戦いの幕開け||The Lord of the Rings：Rise to War`, `我當校長超勇的`, `仙靈奇緣`, `雲山之約`, `Cytoid`, `Flash Party`, `T3 Arena`, `放置原始人||エイジ・オブ・ケイブ：放置原人||Age of Caves: Idle Primitive || Idle AuWuuLa`, `木塊數獨遊戲-益智遊戲 || 木塊拼圖消除-經典方塊益智遊戲||Block Puzzle-パズルゲ||Block Puzzle-Wood Sudoku Game`, `合成方塊 - 2048數字合成益智遊戲||Merge Block - 2048 Puzzle`, `空之勇者團||空の勇者たち||Sky Heroes`, `Beat Run! Pop Music Rush||ビートラッシュ！Beat Runner！人気曲音楽リズムゲー`, `賽博甜心||サイバーハニー||Cyber Honey`, `妮姬 勝利女神||NIKKE The Goddess of Victory`, `秘境傳說：神木遺跡 || 狩獵使命`, `Draw 2 Save`, `諾亞太空戰記||ノア宇宙戦記||Noah Space Senki `, `朋友任務||トモダチクエスト||Tomodachi Quest `, `放肆武林 || 武林閒俠`, `神話阿斯加德諸神||Myth:God of Asgard`, `仙旅奇緣||Fairy Town - CindeBella`, `緋石之心||Brave Hearts`, `唱舞全明星II：偶像之約`, `Wreck It Cat `, `深空之眼`, `瘋狂餐廳——烹飪之旅||Cooking Madness-Kitchen Frenzy`, `紙牌家居設計||ソリティア ホームデザイン Solitaire||Solitaire Home Design`, `越南大戰 ATTACK`, `戰艦出擊：無畏 || 無盡航線||Infinite Lane - World Warships || Endless Voyage`, `Emoball: Bricks Game`, `尼姬 勝利女神`, `浮石物語||Magus Saga`, `閻王不高興 Relive`, `劍與魔龍 || 誓約神魔`, `聞姬起舞||アモルエポック`, `魔力寶貝：回憶|| 復古魔力 || 魔力回憶`, `幻境世界||AFK Girls -Beauty Battle || Beauty Battle - Girls Leader || Rise of Girls || AFK Girls: Idle Action`, `上古傳奇`, `巨商M：商道天下 || 極品小二`,
`全民燒腦 || 大腦要壞掉了啦||脳トレパズルゲーム - ブレーン Go||Brain Go`, `全民燒腦2 || 大腦要壞掉了啦2||脳トレパズルゲーム - ブレーン Go 2||Brain Go2`, `全民燒腦3 || 大腦要壞掉了啦3||脳トレパズルゲーム - ブレーン Go 3||Brain Go3`, `超元氣火柴人`, `英靈召喚師||SoulFactor || Soul Fact || Soul Faction`, `暗影騎士：元氣之魂||シャドウナイト：忍者格闘アクションゲーム||Shadow Knight Batman Ninja War`, `召喚師時代 ||サマナーズの時代: ヒーローのアリーナ・AFK RPG||Summoners Era: Idle RPG Heroes`, `鯊鯊進化論||サメサメ進化論||Fish Eater.IO`, `九霄神域`, `不朽戰紀||聖剣戦記||Immortal Raid`, `最強巫師||スーパーウィザード||Super Wizard`, `明日方舟：終末地`, `豬遊記||Piggy GO `, `龍域：不滅勇者 || 龍域冒險：奧德賽`, `創世尋仙`, `戳爆三國`, `最強海王||FIshpond War`, `Fidget Play`, `山海～目が覚めたら妖獣が女の子に!? || 山海～神話の世界を覗く異界万華鏡～`, `混沌破壞者||カオスブレイカー||Chaos Breaker`, `再生之境 || 少女戰姬||Clash of Sky`, `萌娘戰姬-放置系三國女神物語||乙女戦姫～ロリータガールズ～`, `慶餘年`, `Apex 英雄 Mobile||Apex Legends Mobile|| Apex 英雄 M || Apex 英雄》手機版`, `庫洛蘭德 || 代號：放置RPG||Couroland`, `七星傳||セブンスフィア||Seven Sphere`, `虛國：元靈召喚 || 虛互之國`, `Yeager`, `煉金術士花園||アルケミストガーデン||Alchemists' Garden`, ` Yggdra Resonance||ユグドラ・レゾナンス`, `新小森生活`, `江湖大亨 || 桃園小鎮`, `三分武俠七分仙 || 上仙請留步`, `進擊的火柴人||進撃のマッチスティックメン||My Stick Life `, `數碼異次元 || 數碼世界||Digital Master`, `幻靈物語：塔之靈 || 長安幻靈錄 || 侍神誅妖||phantom story   || Spectral Tale`, `文明與征服||Civilization and Conquest`, `重生邊緣||SYNCED: Off-Planet`, `戰鎚2：末日鼠疫||Warhammer: Vermintide 2`, `戰鎚40K：黑潮 ||  戰鎚40K：暗潮||Warhammer 40,000: Darktide`, `吸血鬼：惡夜獵殺 血獵||Vampire The Masquerade: Bloodhunt`, `GTFO`, `重金屬：地獄歌手||Metal: Hellsinger`, `Awaken: Chaos Era`, `King's Choice`, `Armored God`, `合成神奇島||Merge County`, `League of Pantheons`, `Call of Antia: Match 3 RPG`, `Enigmite's Prophecy`, `Catwalk Beauty`, `籃球全明星||AllStars Basketball `, `戰國大戰 M`, `東方 Arcadia Record||東方アルカディアレコード`, `Yulgang Global`, `智城戰紀||パズル＆コンクエスト||Puzzles & Conquest`, `First Refuge: Z`, `時空之弈||Chrono Legacy`, `蟻族奇兵 AntWars`, `轉生史萊姆：魔物之王`, `Z日英雄之心||Zデー: 戦争ヒーローの戦国対戦バトルキングダム||Z Day: Hearts of Heroes`, `火器時代||ガンズ・オブ・グローリー：鉄仮面||Guns of Glory: The Iron Mask`, `MÄRCHEN of LIGHT||メルヘン・オブ・ライト～モロガミ放置RPG～`, `開心莊園||にじいろ牧場||Family Farm Seaside`, `夢幻龍樂園||ドラゴンスケープスの冒険||Dragonscapes Adventure`, `超級快遞大亨——3D商業管理遊戲||放置宅配便タイクーン - 3Dビジネスマネージャー||Idle Courier`, `夢境偵探||ドリーム探偵||Dream Detective`, `Tile Master 3D||ブロックマスター３D`, `Cube Master 3D||キューブマスター3D`, `天天愛連消||ブロークペア||Tile Connect - Classic Match`, `小鎮大廚||シェフマージ||Chef Merge`, `Higgs Domino Island`, `豪神娛樂城`, `我的學妹不可能那麼萌2||ガールズ X バトル 2||Girls X Battle 2`, `黑道風雲||マフィア・シティ-極道風雲||Mafia City`, `Infinite Galaxy`, `Zgirls3`, `成語消消挑戰`, `成語填填字`, `方塊愛消除||Tile Master`, `Pasha Fencer`, `Raider: Origin`, `Yong Heroes||剣魂～新ジョブ「悟空」降臨`, `Kung Fu Legend`, `浣熊不高興||Unhappy Raccoon`, `伊甸騎士團 || 異世代:光與魔法 || 風之幻想：聖戰史歌||Knight Of The Eden`, `Tik Dog`, `Draw 2 Beat`, `瘋小姐療養記||Happy Healer`, `Tower Wars: Castle Battle||タワーバトル`, `遊樂園在逃大亨||Jumbo Park`, `Marie's Travel: Hidden objects||マリーの旅行：隠されたアイテム`, `Carrom Pool: Disc Game`, `Mini Football`, `Pure Sniper: City Gun Shooting`, `Mini Football`, `Golf Battle`, `Ultimate Golf!`, `Baseball Clash: Real-time game`, `Magnum Quest`, `逆空使命-NOVA計劃`, `王朝起源征服||Dynasty Origins: Conquest`, `王朝卷軸||Dynasty Origins: Pioneer || Dynasty Scrolls`, `西遊戰棋||West Journey War`, `我帶兵最牛`, `Dark Nemesis: Infinite Quest`, `Land of Empires: Immortal`, `Rise of the Kings||ライズオブキングス`, `War Eternal - Enter the Dragon`, `Frontier Justice - Return to the Wild West||フロンティア・ジャスティス ワイルドな西部に戻る`, `Revenge of Sultans`, `魔法英雄||マジックラッシュ||Magic Rush: Heroes`, `這就是江湖||侠客の天下||WuXia World `, `我舔得賊溜||Licking Run`, `足球冲冲冲||Football Run: Racing`, `雪球快跑||Snowball Run`, `節奏沙盒 || 節奏貓咪||Beat Cat||Musicat`, `我的奇妙沙盒||サイキックのほこり||Psychic Dust - Pixel Sandbox`, `我房子超大||SimHouse: Makeover`, `飛刀彈彈彈||Draw Arrow`, `瘋狂挖礦||Dig Crossing`, `飛車大亂鬥-輕量級戰車競技手游||Crazy Car`, `糖果大師||Candy Master 3D`, `救救美人魚||Mermaid Rescue-Pull Her Out`, `大冒險-馬丁歷險記||My Adventure-Martin Mystere`, `腦洞先生||腦洞大作戰||Brain Hole Battle- brain game`, `瘋狂搬磚||Idle Building`, `旋轉音律||ロテーノ||Rotaeno`, `神諭大陸 || 神領詩章||ジェネシスノポエム||The Ode to Greece`, `航海王：夢想指針`, `DC 英雄：放置聯盟||DC Worlds Collide`, `幽遊白書：魔強統一戰`, `火影忍者:巔峰對決||Naruto:SlugfestX`, `新血魔伊甸園`, `魔法禁書目錄 幻想收束`, `雙生幻想||Azure Fantasy`, `動物醫院||ハッピーどうぶつ病院||Happy Animal Hospital`, `夢職人與追憶之黑妖精||夢職人と忘れじの黒い妖精||Dream Meister and the Recollected Black Fairy`, `Art of War： Legions`, `帝國大海戰||戦艦ファイナル||Battle Warship: Naval Empire`, `熹妃Ｑ傳|| 謀りの姫：Pocket`, `Apex 英雄手機版`, `神廟逃亡2`, `無限回戰||無限廻戦 - ローグライクSRPG||Re:Infinite - Roguelike SRPG`, `魔力寶貝：旅人`, `秘館疑踪||Heaven Dust`, `花亦山心之月`, `四葉草劇場||クローバーシアター`, `勝利之吻||美女と栄光～戦場にキスの花束を～||Kiss of War`, `天地の如く～激乱の三国志～`, `三国覇王戦記～乱世の系譜～`, `THE KING OF FIGHTERS '98UM OL`, `MU：暗黑大天使||MU：アークエンジェル`, `June's Journey ‑ Hidden Object||ミステリー探偵ジューン- 隠れた手がかり`, `海戰傳奇 - Navy 1942||【戦艦】Warship Saga ウォーシップサーガ||Warship Saga`, `覇王の天下`, `逐鹿三國||三国天武～本格戦略バトル～ 三国志ストラテジー||Age of Three Kingdoms`, `ラピスクロニクル -英雄王冠-||Lapis Chronicle -Hero Crown-`, `少年的人間奇遇 || 宅男的人間冒險||オタクの人間冒険||Otaku's Adventure`, `東方平野孤鴻||Ballads of Hongye`, `劍訣天下`, `葬花`, `永劫無間||Naraka: Bladepoint`, `山海萬花集 || 河圖尋仙記||Heroes of Mythic Might`, `熱血江湖 W || 열혈강호 W`, `守望傳說》日版`, `仙劍客棧2`, `冰封龐克 Mobile||Frostpunk: Rise of City || Frostpunk : Beyond the Ice`, `蒼空物語 || 창공아레나 || 蒼空競技場||蒼空アリーナ||Blue Sky Arena || Changgong Arena`, `庫洛魔法使：回憶鑰匙`, `Front Mission：Borderscape`, `銀河境界線`, `新星：鋼鐵銀河||新星：Iron Galaxy||Nova: Iron Galaxy`, `Shop Heroes Legends`, `黑街異事||アーケイン・レイン||Arcane Lane`, `MU ORIGIN 3`, `火炬之光：無限`, `Front Mission`, `香腸派對||Sausage Man`, `天龍八部 2||The Demi Gods & Semi Devils`, `逍遙歌行`, `泰拉瑞亞`, `月之國度 || 星月命運之輪||Luna Online M || Star Moon Wheel of Fortune`, `Merge Skyland`, `動物朋友：王國`, `新劍俠世界3 ||劍俠世界3`, `節奏快打||Rhythm Fighter`, `錢力的遊戲`, `足球大師2 - 傳奇球會||ベストイレブン-champions-club||Football Master 2-Soccer Star`, `鋼鐵華爾茲||鋼鉄のワルツ MetalWaltz||Panzer Waltz || Metal Waltz || Metall Mädchen`, `黑狐行動||オペレーション・ブラックアークM||Operation Black Arc M`, `中國式家長||Chinese Parents`, `血魔伊甸園 M on WEMIX||Dark Eden M on WEMIX`, `天元突破紅蓮螺巖`, `神鑰||key of deity`, `新生計劃`, `默途||Monobot`, `絕區零||ゼンレスゾーンゼロ||Zenless Zone Zero`, `神界奇傳～八百萬神的幻想譚～||神界奇伝～八百万神の幻想譚～`, `戰國尋芳錄`, `秦時明月：滄海`, `劈山大師||Tap-Tap Master`, `斗羅大陸：武魂覺醒`, `幻想名將傳||SANGOKU FANTASY`, `御龍爭霸 || 三國志武將傳`, `永生不朽`, `龍之國物語`, `D4DJ Groovy Mix 電音派對`, `Moonshot - 返家之旅||Moonshot`, `富甲江戶城`, `逆向坍塌：麵包房行動||Reverse Collapse: Code Name Bakery`, `盛世芳華`, `Elemental Titans`, `元氣騎士 前傳||Soul Knight Prequel`, `三國之奇謀天下||Three Kingdoms Origin`, `魂之刃||Blade of God : Vargr Souls`, `三國無間`, `電音派對`, `Ensemble Stars Music`, `霧城幻夜`, `Refantasia: Charm and Conquer`, `神鑰 || 聖鑰||key of deity`, `小將兵多多`, `MARVEL SNAP`, `夢幻小島：西西的冒險奇緣||ドリームアイランド：冒険の物語||Dragon Farm Adventure`, `ZOZ：Final Hour`, `艾爾多戰記`, `DYSMANTLE`, `Bloodline: Heroes of Lithas`, `V Rising`, `傀儡師：塔防對決||Puppet Master: Tower Defense`, `猿族時代||Age of Apes`, `鳴潮||Wuthering Waves`, `戀戀清庭:邂逅`, `toki - 你畫我猜桌遊一起玩吧 || toki - 你畫我猜小遊戲 || toki - 123木頭人你畫我猜畫猜接龍`, `催眠麥克風`, `2089：邊境`, `神將風雲錄`, `乒乓！`, `雲夢仙緣`, `Elemencraft`, `NieR Re[in]carnation`, `這個地下城有點怪||Path of Immortals`, `閒遊劍仙`, `白晝夢之旅||MIRAI`, `永遠的 7 日`, `彈彈堂 Origin||DDTANK Origin`, `完美世界 2`, `My Cat:Pet Game Simulator`, `時之約`, `房間的秘密`, `我要當房東||Rent Please!-Landlord Sim`, `仙境傳說：愛如初見`, `部落與彎刀`, `重返未來：1999`, `永恆進化 || Eternal Evolution：天演進化||Eternal Evolution`, `天啟·戰爭`, `新凡人修仙傳`, `穿行三國`, `凡人修仙傳 M`, `飯糰傳說||オニギリ伝説||RiceBall Legend`, `Blade of Chaos`, `異象迴聲`, `Echocalypse`, `緋紅的神約`, `Apex M`, `War of Gama`, `混沌重生`, `野火流明||Blaze of Wildfire`,
`部落戰線||Clash Quest`,
`摩爾莊園手遊||Mole's World`,
`進擊的音速喵-Slash the Beats || Sonic Cat - 擊打節奏||Sonic Cat`,
`酷喵跑酷||キンジャRUN||Kinja Run`,
`Lost Sanctuary: Eternal Origin`,
`三國志名將傳||三国志名将伝||Three Kingdoms: Hero Wars`,
`阿凡達：復仇 || 阿凡達：重返潘朵拉||Avatar：Reckoning`,
`我們的星球||Our Planet`,
`代號：致金庸||Code: To Jin Yong`,
`暗區突圍||Arena Breakout`,
`SUPER NBA 2`,
`茶葉蛋大冒險||Great Egg Adventure`,
`神域奇兵：遠征||Heroic Expedition`,
`古域飛仙`,
`迷宮勇者||ラビリンス・ブレイブ||Labyrinth Brave`,
`陰陽百鬼物語||Onmyo Hyakki`,
`泡泡龍王國傳說||バブルシューター王国 - 暇つぶしホームデザインゲーム||Bubble Shooter Kingdom`,
`Volleyball Arena`,
`Among Gods! RPG Adventure`,
`高爆三國志`,
`我在三國做將軍`,
`帶著人參去修仙`,
`Descenders`,
`創世紀之島||Avalon - Era of Genesis || Isle of Genesis - Avalon`,
`魔卡幻想||Lies of Astaroth (LoA) || Heroines Fantasy Inherit`,
`技能大師-國際服||奥義マイスター||Skill Master`,
`技高一籌||Master of skills`,
`流浪方舟||The Wandering Ark`,
`Ready Heroes: Nirvana Hunt`,
`零號任務||Mission Zero`,
`奇兵突進 || 接管帝國||Empire Takeover`,
`Tales of Abyssus||オース×ガールズ~ 祝砲の下に集いし乙女たち`,
`Blade Fantasy`,
`Legacy of Discord`,
`人類跌落夢境`,
`巨龍召喚 (卡牌對戰 TCG)||Dragon Call (Card battle TCG)`,
`幻靈師`,
`小骷髏大冒險`,
`死神奧利給||YOLO?`,
`指劍江湖`,
`太古神王`,
`Disney鏡之守護者||Disney ミラー・ウォリアーズ||Disney Mirrorverse`,
`永夜之役`,
`洶湧海豚||ドルフィンウェーブ`,
`宅人傳說||Legend of Homebody`,
`龍族：世界`,

`天下布武　戦国志`,
`暁ノ天刃録`,
`陷陣之志||イントゥ・ザ・ブリーチ||Into the Breach`,
`綠夢`,
`永遠的 7 日：無盡開端`,
`小小主公 2||minilord2`,
`種地勇者||HERO VILLAGE`,
`我的俠客||My life of Wuxia`,
`Date A Live：Spirit Pledge HD`,
`才不是童話||メルヘン・イン・フラグメンツ||Hidden Realm`,
`일루전테일즈||Illusion Tales`,
`奇點物語`,
`伊瑟 · 重啟日||Etheria：Restart`,
`晶核 Crystal of Atlan`,
`鯉 KOI `,
`鯉 重製版`,
`出發吧麥芬`,
`心動小鎮`,
`足球小將翼：王牌對決`,
`鈴蘭之劍：為這和平的世界||Sword of Convallaria: For This World of Peace`,
`大野逐龍||Clash of Gods`,
`Build Master: Unknownland`,
`貪吃蛇在線 - Snake Online||Snake Online`,
`萌娘餐廳:嬌俏小廚娘`,
`非匿名指令||Non Anonymous Instruction`,
`列支森林||Liech Forest`,
`放置奇兵：無限||Infinite Magicraid`,
`黎明前20分鐘||20 Minutes Till Dawn`,
`明日對決|| Slay Zombie:Card Game`,
`狼族崛起||Wolf Game: The Wild Kingdom`,
`Tap Legends: Tactics RPG`,
`刀光與少女—小丑世界||スラッシュ・ガール||Slash & Girl - Endless Run`,
`新倚天屠龍記`,
`浮生幻境`,
`英雄戰紀-紅藍大作戰`,
`黎明之海||Sea of Dawn`,
`諸神紀元`,
`God's Legacy: Alchemist`,
`永劫無間手遊||Naraka: Bladepoint Mobile`,
`永夜降臨 - Evernight || 永夜降臨-復蘇-||Evernight`,
`聆星迴響 Starry Echo`,
`中年失業模擬器：大多數`,
`星之扉：FATE SAGA`,
`不算英雄||Lonely Survivor`,
`Lost Light`,
`曲中劍`,
`夢幻之城 || 夢幻城`,
`噠噠特攻||ダダサバイバー||Survivor.io`,
`1930 浪漫譚`,
`紙嫁衣 4 紅絲纏`,
`空之要塞：啟航||Sky Fortress`,
`霧境序列||Mist Sequence`,
`龍與紛爭||Call of Dragons`,
`怦然星動||Flipped in Love`,
`不良人 3`,
`我的湯姆貓 +||My Talking Tom+ `,
`幻境公主||アストラル・ミラージュ -幻城の姫君-`,
`夢想點消家 - 消除裝扮家園遊戲||Design Blast - ホームデザインゲーム||Design Blast - Match & Home`,
`Hero Making Tycoon`,
`一拳超人：英雄之路`,
`星球：重啟||アース：リバイバル||Earth: Revival`,
`長安一條街`,
`貪吃的蘋果蛇||Greedy Worm`,
`打倒魔王的方法||The way to defeat the Archfiend`,
`迷霧大陸：詛咒島||霧の大陸：呪い島||Misty Continent: Cursed Island`,
`霜臨||Age of Frostfall`,
`Save the Doge`,
`Merge Stories - Merge Games`,
`山海異獸記 || 山海搜神傳`,
`燕雲十六聲||Where Winds Meet`,
`仙劍奇俠傳四：重製版`,
`仙劍 ‧ 緣起`,
`大富翁 11`,
`咪咪貓貓三國志`,
`大俠立志傳||Hero's Adventure`,
`旅行騎士||Traveling Knight`,
`Divine W: Perfect Wonderland`,
`空間覺醒`,
`plumber adventure`,
`暗黑3D`,
`百鬼御妖師`,
`點金獵人`,
`Project 56`,
`少女三國伝||Legendar Girl's Dynasty`,
`Project V`,
`Kingdom Hunter`,
`三国・新たなる英雄`,
`穿越古代當首富`,
`My Cat Tiles`,
`獵夢師 Dream Hunter`,
`尋光之旅`,
`大富豪：拉斯維加斯||Las Vegas Tycoon`,
`Time Raiders`,
`魔鏡物語`,
`奇蹟 MU：經典之戰`,
`unVEIL the world||アンベイル ザ ワールド`,
`One Punch Man：英雄之路|| One-Punch Man:Road to Hero 2.0`,
`修仙也瘋狂`,
`Attack on Dungeon`,
`Ashfall`,
`L'abysse Project||代號：LaB，ラビス プロジェクト`,
`木葉風暴||超影對決||Will of Hokage`,
`童話融合記||マージフェイブルス ||Merge Fables®`,
`绯闻港口：合併遊戲||ゴシップハーバー：マージゲーム||Gossip Harbor: Merge Game`,
`無期迷途||Path to Nowhere`,
`異星指令||Xeno Command`,
`아르케랜드||Archeland`,
`蒼霧殘響||ヘイズリバーブ||Haze Reverb`,
`勇者軍団:ファンタジー戦争|| Hero Chess : Fantasy War`,
`無界：交錯時刻`,
`The Twins: Offline Ninja Game`,
`見習女神的次元冒險||Trainee Goddess`,
`マフィアコネクト||Mafia Connect`,
`江湖悠悠`,
`我的御劍日記`,
`明日大亨`,
`劍與遠征 2：啟程||AFK 2：Journey`,
`Checkmate Heroes`,
`代號: 血戰||Project： BloodStrike`,
`坦克連||Tank Company`,
`My Fairy Islands: Merge Animal`,
`迷宮法則：地下城放置冒險物語`,
`Smashing Star`,
`Demon Hunter：Rebirth`,
`逍遙幻夢 || 逍遙九重天`,
`誓約少女||誓約少女～祝砲の元に集いし戦姫たち`,
`Project：Reborn`,
`Random Three Kingdoms`,
`魔爾街之王-Dungeon Overlord||Dungeon Overlord`,


`勝利女神：妮姬`,
`王牌競速||エースレーサー||AceRacer`,
`SS:光之編年史`,
`時空少女的羈絆 || 時空少女の羈絆`,
`8 號樂元|| 烏托邦八號星球 ||Utopia No.8`,
`와일드헌트 || 天際傳說`,
`LUNA：永恆月之國`,
`燕雲十六聲||Where Winds Meet`,
`龍息：神寂||Dragonheir: Silent Gods`,
`這個三國汪汪叫`,
`漫威：瞬戰超能||MARVEL SNAP (マーベル・スナップ)||MARVEL SNAP`,
`遺落海域||ミスティックアビス：遺失海域||Lost Abyss`,
`非常普通的鹿：未來篇||DEEEER Simulator: Future World`,
`煉金術士花園 || 鍊金術士花園||アルケミストガーデン||Alchemists' Garden`,
`英雄你好狗`,
`茶之戀姬 || 茶の戀姬||誓約少女||Oath Girls`,
`風起三國之亂世逐鹿`,
`黑色五葉草 M 魔法帝之道||Black Clover M`,
`夢想家園`,
`Gran Saga：格蘭騎士團`,
`大仙尊：修仙問情`,
`軒轅劍 M：夢回雲山`,
`雲圖計劃`,
`滄海浮生志||Floating life in the sea`,
`Floodrush`,
`蛋仔派對||Eggy Party`,
`Code Geass 反叛的魯路修　失落物語`,
`永恆島 LaTale`,
`神覺者 || 眾神派對||神覚者||Dislyte`,
`鋼之鍊金術師 M`,
`四靈棋境||Spiritle`,
`西遊：燃魂`,
`SNK：格鬥世代`,
`塔防急急令`,
`鬼武三國`,
`逆水寒手遊`,
`九畿：岐風之旅`,
`巔峰極速`,
`魔女的泡湯生活||魔女のふろーらいふ`,
`超爆三國志`,
`塵白禁域||Snowbreak: Containment Zone`,
`靈蛇奇緣`,
`錨點降臨||Anchor Panic`,
`少女綻華：Re:Birth || 유그드라 Re:Birth`,
`塔瑞斯世界||Tarisland`,
`幻夢江湖`,
`新生計劃 || 異塵：達米拉||イジン・ダミラー||Foreign Dust || Fallout: Tamira`,
`鋼彈聯合行動`,
`吾邪||Lost Blade`,
`深淵Abyss||Abyss - Roguelike ARPG|| Abyss 深淵`,
`英雄：魔咒再臨`,
`Little Corner Tea House`,
`神蹟：血舞者`,
`奇葩大亂鬥`,
`主公衝衝衝`,
`新仙劍奇俠傳之揮劍問情`,
`代號：行者||Eastpunk: Journey`,
`戰火使命||Battle Valkyries || Mission Under Fire`,
`Slime Boom`,
`假未來||フェイクフューチャー||Fake Future`,
`大黑幫`,
`純白和弦||White Chord `,
`深淵咒縛`,
`雲海：無限邊境`,
`壞彈聯盟`,
`蒸汽傳說：時之旅||Dire Destiny : Time Travel`,
`幻・三國決戰`,
`築城與探險||Revival and Exploration`,
`維京崛起||ヴァイキングライズ||Viking Rise`,
`女神異聞錄：夜幕魅影||ペルソナ5・ザ・ファントムX||Persona5: The Phantom X`,
`春秋戰雄`,
`王座崛起||ウォーレガシー`,
`弒魔`,
`火柴人M`,
`代號鳶||Ashes of the kingdom`,
`彼界`,
`住客大人的心願`,
`九霄靈蛇錄`,
`勇闖要塞 || 合合合英雄||Slime Legion`,
`雷神戰記 || 魔靈騎士團`,
`時間對稱性破缺`,
`蛇蛇貪吃||SSスネーカー||SSSnaker`,
`秘境傳説：神木遺跡`,
`極速領域`,
`迷你軍團`,
`三國戰令：戰略版`,
`奇珍物語||Relicsstory`,
`湮滅效應||トリニティ・ギアーズ||Trinity Gears`,
`早安總裁`,
`千年之旅`,
`新月同行`,
`最強武士道`,
`黎明再現||ドゥームズデイ：ラストサバイバー||Doomsday: Last Survivors`,
`來古彌新`,
`XLARP劇本殺`,
`聖裁迴響Refrain`,
`Settlement Survival`,
`Cindyz Burger: Master Chef`,
`暮色雙城`,
`依露希爾：星曉||Higan: Eruthyll`,
`我的門派`,
`貓咪時刻|| CAT TIME`,
`貓咪方塊||Cat Block`,
`空之軌跡：影之章`,
`賽爾計劃`,
`克瑞因的紛爭`,
`小小仙尊`,
`王牌銀行長`,
`寒霜啟示錄||ホワイトアウト・サバイバル||Whiteout Survival`,
`暴走小蝦米`,
`從鹹魚到老闆||Animal Inc.- Sim Tycoon RPG`,
`萬靈召喚師`,
`NBA Infinite`,
`黎明覺醒：生機||アンドーン||Undawn`,
`代號：BB`,
`サクライグノラムス||Sakura Ignoramus`,
`Brotato：Premium`,
`Squad Busters`,
`卡利茲傳說`,
`神迹幻鏡`,
`守護永恆的愛`,
`盜墓筆記`,
`小心火燭`,
`航海日記：全速前進`,
`式神傳說：陰陽對決`,
`部落英雄||Tribal Heroes - 本格原始人ヒーロー放置 RPG`,
`我在大清當皇帝`,
`咻咻海島王`,
`進化物語`,
`凌雲諾`,
`百面千相`,
`NBA 絕對巨星`,
`星界幻想`,
`時之海||The Sea of Time`,
`雙界：鏈接點||Double Realms: Connect Factor`,
`代號 MA`,
`謀攻：天下為局`,
`魔力寶貝：新世界`,
`鎮魂街：天生為王`,
`我本千金`,
`神明召喚師`,
`代號：百家`,
`雲扉：輪迴`,
`傳奇魔法師：放置型 RPG`,
`忍者龜：歸來`,
`仙宗大掌門`,
`暗號：瞳 || 歸龍潮`,
`Rizline`,
`歧路旅人：大陸的霸者`,
`失物终点站`,
`誓靈：深淵傳說`,
`聰明的一休解謎`,
`代號：Spark`,
`浮島大決戰`,
`封神殿：決戰神州`,
`艾塔紀元`,
`無限暖暖`,
`俠義風雲訣`,
`槍術師傳說`,
`九重試煉||Nine Trials`,
`越南大戰：覺醒 || 合金彈頭：覺醒`,
`皇家夜總會：一起來派對！|| Nightclub Royale：Let's Party`,
`染·鐘樓謎團`,
`魔爾街之王`,
`攻掠三國`,
`神息之地|| Mythicland`,
`黎明死線》手機版`,
`權力的遊戲 凜冬將至`,
`魔君：致命錯誤||Necronatorr：Dead Wrong`,
`彈射之星||Smashing Star`,
`命運歌姬||Memories of Link`,
`奧利的莊園||オーリーの農園 - 生態系づくり||Ollie's Manor: Pet Farm Sim`,
`代號：伙伴`,
`森之物語`,
`鹹魚之王`,
`無夢少女||DreamlessGirl`,
`太吾封神榜`,
`絕曉||Unending Dawn`,
`魔力寶貝：無限進化`,
`環行旅舍`,
`仙途`,
`忘川風華錄`,
`黒子のバスケ Street Rivals`,
`不存在的謊言`,
`妖精的尾巴：激鬥 || FAIRY TAIL 魔導少年：激鬥`,
`Legend of Ace`,
`英雄血戰||Heroes Arena`,
`鑄仙之境`,
`普朗特計劃||Plant X`,
`營業中!舊時光商店街`,
`馬賽克英雄`,
`修仙宗門模擬器`,
`無雙戰機||Wing Fighter`,
`空之島：失落王國`,
`地下城堡3：黑暗崛起||Dungeon SurvivorⅢ:Dark Genesis `,
`合併夢幻島||Merge Neverland`,
`Merge Neverland: 開心合併物語`,
`骰子元素師||Dicey Elementalist`,
`森久城物語||Castle Morihisa`,
`皮皮坦克`,




	];
	
	// 中資遊戲疑似清單	
	var maybeList =[
`大航海時代 6`, `RO 仙境傳說：我的戰術` , `突襲：暗影傳說`, `逆轉奧賽羅尼亞`, /*`LoveLive! 學園偶像祭`,*/ `Tap Titans`, `石器時代：世界`, `FINAL BLADE：英雄不滅`, `TsumTsum Stadium`, `Iron Marines`, `三小俠||Grand Chase`, `大富翁卡牌戰爭`, `跑跑卡丁車官方競速版`, `獎牌英雄`, `Dawn of Titans`, `FINAL FANTASY BRAVE EXVIUS`, `FFBE 幻影戰爭 WAR OF THE VISIONS`, `GOH 軍團的榮耀`, `風之國度`, `咖位我最大`, `SimCity BuildIt`, `月兔冒險`, `精靈樂章 - 這樣的夥伴沒問題嗎`, `NBA 2K 行動版`, `動物朋友`,  `女王 2`, `消滅都市||AFTERLOST`, `口袋楓之谷 ||Pocket Maple Story`, `Dynamix`, `小鎮奇緣`, `無盡之劍 3 インフィニティブレード 3 ||Infinity Blade 3`, `仙境傳說 普隆德拉迷宮`, `傳奇商店||Shop Titans`, `Kingdom Rush Origins `, `暗影格鬥 3   `, `聖鬥士星矢 小宇宙幻想傳 `, `王國 5：繼承者 `, `絕望地下城 ||Dungeon of Despair `, `忍豆：新世代 `, `為了誰的鍊金術師 `, `幽遊白書：BANG！靈丸 `, `PUBG：NEW STATE`,  `聖鬪士星矢：銀河之魂  `, `滾滾飛球||Eagle Fantasy Golf`, `三國萌戰記`, `穿越火線：戰爭地帶||CrossFire: Warzone`, `穀穀雞莊園 ||Gogogaie Farm`, `仙境傳說：波利合併  ||Ragnarok: Poring Merge`, `新火鳳燎原 亂世英雄`, `魔法軍團 Z WarLocksZ `, `魔法軍團零`, `甜點王子 2：心動奇蹟`, `古惑仔 M`, `爐石戰記`, `暴雪英霸`, `魔獸世界：暗影之境`, `城堡工藝世界大戰||Castle Craft：World War`, `絕地求生：未來之役||PUBG：NEW STATE`,
`要塞英雄||Fortnite`, `旋轉音律||Rotaeno`, `英雄大暴走`, `好食成雙`, `暗黑破壞神`, `暗黑破壞神 3`, `三國 BLADE：再戰`, `伊羅安||Elyon || A:IR(Ascent: Infinite Realm)`, `怪獸超級聯賽`, `Boxing Star`, `來我家玩吧`, `守望傳說 || 坎公騎冠劍||Guardian Tales`, `月光雕刻師||The Legendary Moonlight Sculptor`, `奧丁：神叛 || 奧丁：瓦爾哈拉之崛起||ODIN : Valhalla Rising`, `永恆靈魂||Eversoul`, `傳奇 4||MIR4`, `Terra Fire`, `Friends Shot`, `All Star Smash`, `上古世紀||アーキエイジ||ArcheAge`, `LINE：哆啦 A 夢樂園||LINE：ドラえもんパーク`, `Calice`,
`Goddess Order 女神指令`, `萌宅物語 ||Adorable Home`, `THE KING OF FIGHTERS ALLSTAR`, `Sparklite`,  `天堂W||リネージュW||Lineage W`, `Friends Racing`, `女神指令`, `英雄而已||Every Hero - Ultimate Action`, `Rocket League`, `火箭聯盟`, `Mu Origin 3` , `Merge Mansion`, `仙境傳說：魔物遠征`, `未來之役 MOBILE`, `守望傳說 ||ガーディアンテイルズ|| Guardian Tales`, `Tiny Fantasy `, `Olympic Games Jam : Beijing 2022`, `傳奇大亂鬥 ||Smash Legends`, `首爾之星||SeoulStars`, `Crypto Golf Impact`, `Magidoll～我是魔法人偶師`,
`宇宙小鎮`,
`全境封鎖`,
`刺客信條`,
`彩虹六號：圍攻||Tom Clancy's Rainbow Six Siege`,
`勇闖死人谷 2||Into the Dead 2`,
`Shatter 重置版`,
`神之塔 M：偉大旅程`,
`Yulgang Global`,
`虹彩六號 M`,
`奇蹟 MU：大天使`,
`花之守護少女`,
`未來之役 M`,
`魔獸》系列`,
`Rocket Bot Royale`,
`水果超可愛！～創生大樹與水果少女～`,
`再見 Once Again`,
`魔獸兵團||Warcraft Arclight Rumble`,
`刀劍亂舞 -ONLINE-`,
`R2M：重燃戰火||R2 Mobile`,
`戰鎚 40K：Tacticus||Warhammer 40,000 Tacticus`,
`櫻境物語`,
`慾神幻想 ||Rise of Eros`,
`戰士 Warrior`,
`阿瑞斯：守護者崛起||Ares：Rise of Guardians`,
`我和殭屍有個約會 M`,
`神姬計劃`,
`拳皇：街頭大戰||THE KING OF FIGHTERS：STREET WAR`,
`小青蛙的茶會||Teacup`,
`掌門小師妹 || 小師妹群俠傳`,
`傳奇四葉草 ～Legend Clover～`,
`刺客教條`,
`英勇之心`,
`城堡搶翻天`,
`Starri 星動旋律||Starri`,
`RO 仙境傳說：女武神之歌`,
`拳皇：生存都市`,
`守護德比||Defense Derby`,
`元素泰坦`,
`迷霧列車少女～從霧之世界的車窗～`,
`孤兒的工作－ORPHANS ORDER－`,
`天使連結 ANGELIC LINK`,
`戰國†戀姬 Online ～奥宴新史～`,
`星紋物語`,
`宇宙戰艦大和號 未來航路`,
`龍虎門M`,
`孤兒的工作`,
`The King of Fighters ARENA || KOF Arena`,
`獵人 × 獵人`,
`天使連結`,
`彼得・格里爾的賢者時間-守貞之道`,


	];
	
	// 其他版本清單
	var otherGameList =[
`《最後的克勞迪亞》日版`, `《Re 0：Lost in Memories》日版`, `《FGO》日版`, `《Fate/Grand Order》日版`, `A3: STILL ALIVE 倖存者`, `阿爾克納：命運之輪`, `真 ‧ 鎖鏈戰記`, `Re：從零開始的異世界生活 Lost in Memories日版`, `《BanG Dream！少女樂團派對》日版`,

`世界計畫！繽紛舞台 feat初音未來》日版`,
`奇幻生活 Online》日版`,
`永恆的賽妮亞 - 雨後的紫陽花`,
`刀劍神域`,
`神域召喚`,
`賽馬娘 Pretty Derby》日版`,
`幻想神域`,
`日版《賽馬娘 Pretty Derby`,
`死亡愛麗絲日版`,


	];
	
	// 把 中資遊戲清單 和 中資遊戲疑似清單 轉換成 搜尋用清單
	var new_list =[];
	var new_maybeList =[];
	for(var i =0; i<gameNameList.length; i++){
		new_list = new_list.concat(replaceSearchText(gameNameList[i]).split('||'));
	}
	for(var i =0; i<maybeList.length; i++){
		new_maybeList = new_maybeList.concat(replaceSearchText(maybeList[i]).split('||'));
	}
	var new_otherList =[];
	for(var i =0; i<otherGameList.length; i++){
		new_otherList = new_otherList.concat(replaceSearchText(otherGameList[i]).split('||'));
	}

	// get GNN新聞的Element
	var obj = document.getElementsByClassName('BH-lbox GN-lbox2')
	var body = document.getElementsByTagName('body')[0]
	// 把GNN新聞標題轉換為HTML存到str
	var str = "";
	for(var i =1 ; obj[0].children[i].children[0] ; i++){
		if(obj[0].children[i].children[1].children[0].textContent!='其他'){
	//		str += `<div onclick=changeColor(this)><a href="`
			str += `<div ><a href="`
			str += obj[0].children[i].children[1].children[1].href;
			str += `">`
			str += obj[0].children[i].children[1].children[1].textContent.replaceAll('<','&lt').replaceAll('>','&gt');
			str += '</a></div>'
		}
	}
	
	// 頁面右方加入文字方塊
	var str2 = `<div id="white_box" contenteditable="true" style="overflow: scroll; height: 80%;width: 30%; z-index:99999; position: fixed; top: 10%;right:0; background-color:white"></div>`
	str2 += `<button id="btn" style="z-index:99999; position: fixed; top: 90%;right:0; ">copyText</button>`
	str2 += `<button id="btn_js" style="z-index:99999; position: fixed; top: 90%;right:100px; ">toJsText</button>`
	str2 += `<div id="output_text" contenteditable="true" style=" height: 50px;width: 30%; z-index:99999; position: fixed; top: 95%;right:0; background-color:white"></div>`
	body.insertAdjacentHTML('beforeend',str2);
	
	// 把 str 加到文字方塊內
	var white_box = document.getElementById('white_box')
	white_box.innerHTML = str;
	
	
	let row = white_box.getElementsByTagName('div')
	let btn = document.getElementById('btn')
	
	// 計算GNN新聞數目
	btn.innerHTML = btn.innerHTML +' ' +  row.length
	
	// 把 中資遊戲 和 疑似中資遊戲 以不同顏色標示
	for(var i = 0; i<row.length ; i++){
		row[i].addEventListener('click', function(){
		if(this.children[0].style.color == 'red')
			this.children[0].style.color = 'hotpink';
		else if(this.children[0].style.color == 'hotpink')
			this.children[0].style.color = 'black';
		else 
			this.children[0].style.color = 'red';
		});
		let rowTextEdited = replaceSearchText(row[i].children[0].innerHTML)
		for(var j =0; j<new_maybeList.length; j++){
			if(rowTextEdited.search(new_maybeList[j])!=-1){
				row[i].children[0].style.color = 'hotpink';
				j = new_maybeList.length;
			}
		}
		for(var j =0; j<new_list.length; j++){
			if(rowTextEdited.search(new_list[j])!=-1){
				row[i].children[0].style.color = 'red';
				j = new_list.length;
			}
		}
				for(var j =0; j<new_otherList.length; j++){
			if(rowTextEdited.search(new_otherList[j])!=-1){
				row[i].children[0].style.color = 'black';
				j = new_otherList.length;
			}
		}
	}
	
	// 用於複製文字方塊內的文字
	function copyText() {
	  window.getSelection().selectAllChildren(white_box);
	  document.execCommand("copy");
	}
	
	//  用於把文字方塊轉換為 JS Object
	function toJsText()
	{
		var date = `${(new Date()).getFullYear()} ${(new Date()).getMonth()+1} ${(new Date()).getDate()}`;
		output_text.innerHTML = ''
		output_text.append(`{time:'${date}', content: \`${white_box.innerHTML}\`},`)
		window.getSelection().selectAllChildren(output_text);
	  	document.execCommand("copy");
	}
	
	document.getElementById('btn').onclick= copyText;
	document.getElementById('btn_js').onclick= toJsText;
}
