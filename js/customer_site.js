const CUSTOMER_SITES = {
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '红牛资源',
    },
    liangzi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子资源',
    },
    kaifang: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '开放电影',
    },
    youzhi: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
    },
    sanshijiu: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影视',
    },
    tiantang: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
    },
    lehuo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
    },
    tangrenjie: {
        api: 'shturl.cc/aCnqk1gU2APsEK7DoUbpKCRi3ZdMu0',
        name: '唐人街',
    },
    kudian: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
    },
    wolong: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    senlin: {
        api: 'shturl.cc/yU81Bn9NHJQiAGNUyES8THNJEUs5',
        name: '森林资源',
    },
    yingku: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
    },
    kuaiche: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
    },
    tantan: {
        api: 'shturl.cc/TByH12perPhXPn8vRTCC38vCmkoM',
        name: '探探资源',
    },
    shandian: {
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '闪电资源',
    },
    jinying: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
    },
    guangsu: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    },
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网',
    },
    laoya: {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源采集',
    },
    uku: {
        api: 'http://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
    },
    beidouxing: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
    },
    yinghua: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源网',
    },
    feisu: {
        api: 'http://feisuzy.com/api.php/provide/vod',
        name: '飞速资源',
    },
    kuaibo: {
        api: 'http://www.kuaibozy.com/api.php/provide/vod',
        name: '快播资源',
    },
    baidu: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
    },
    aidan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
    },
    piaohua: {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影',
    },
    wangmin: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
    },
    siwa: {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
    },
    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空资源',
    },
    haiwaikan: {
        api: 'http://haiwaikan.com/api.php/provide/vod',
        name: '海外看资源',
    },
    haiwaikandianbo: {
        api: 'https://haiwaikan.com/api.php/provide/vod/',
        name: '海外看点播',
    },
    sanliushidianbo: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360点播',
    },
    heimuer: {
        api: 'https://www.heimuer.tv/api.php/provide/vod',
        name: '黑木耳点播',
    },
    citong: {
        api: 'http://ys9.cttv.vip/api.php/provide/vod/',
        name: '刺桐点播',
    },
    guanwang: {
        api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
        name: '官网点播',
    },
    yeyu: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
        name: '业余点播',
    },
    huaweiba: {
        api: 'https://hw8.live/api.php/provide/vod/',
        name: '华为吧点播',
    },
    xiaohuangren: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
        name: '小黄人点播',
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod/',
        name: '牛牛点播',
    },
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod/',
        name: '丫丫点播',
    },
    ukudianbo: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/',
        name: 'U酷点播',
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华点播',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速点播',
    },
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod/',
        name: '四九点播',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼点播',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: 'ikun点播',
    },
    feifan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡点播',
    },
    liangzidianbo: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子点播',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '暴风点播',
    },
    hongniudianbo: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
        name: '红牛点播',
    },
    feisudianbo: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
        name: '飞速点播',
    },
    kuaikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
        name: '快看点播',
    },
    xiongzhang: {
        api: 'https://xzcjz.com/api.php/provide/vod/',
        name: '熊掌点播',
    },
    kuaichedianbo: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/',
        name: '快车点播',
    },
    shandiandianbo: {
        api: 'http://sdzyapi.com/api.php/provide/vod/',
        name: '闪电点播',
    },
    yinghuadianbo: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod/',
        name: '樱花点播',
    },
    wolongdianbo: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
        name: '卧龙点播',
    },
    piaohuadianbo: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
        name: '飘花点播',
    },
    tianyi: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
        name: '天翼点播',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/',
        name: '虎牙点播',
    },
    baidudianbo: {
        api: 'https://api.apibdzy.com/api.php/provide/vod/',
        name: '百度点播',
    },
    piao ling: {
        api: 'https://p2100.net/api.php/provide/vod/',
        name: '飘零点播',
    },
    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod/',
        name: '无尽点播',
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod/',
        name: '速博点播',
    },
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod/',
        name: '魔都点播',
    },
    zuida: {
        api: 'http://zuidazy.me/api.php/provide/vod/',
        name: '最大点播',
    },
    qihu: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod/',
        name: '奇虎点播',
    },
    huohu: {
        api: 'https://hhzyapi.com/api.php/provide/vod/',
        name: '火狐点播',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
        name: '新浪点播',
    },
    kuaiyun: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
        name: '快云点播',
    },
    "qiqi": {
        api: "https://www.qiqidys.com/api.php/provide/vod",
        name: "七七资源",
    }
};
// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
