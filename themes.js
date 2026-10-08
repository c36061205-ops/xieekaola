const SKINS = [
  {
    id: 'fusion',
    name: '🌙 女巫之夜',
    color: '#B34A6A',
    '--theme': '#B34A6A',
    '--bg': '#1F1A2A',
    '--nav': '#2E2540',
    '--card': '#2E2540',
    '--text': '#E8DDE6',
    '--sub': '#A084A0',
    '--line': '#3D2F4A',
    // ✅ 内置壁纸（纯色/渐变色字符串，或图片URL）
wallpaper: 'radial-gradient(ellipse at 30% 10%, #6B4A6A 0%, transparent 40%), radial-gradient(ellipse at 80% 90%, #2A1A2A 0%, transparent 50%), radial-gradient(ellipse at 50% 60%, #3D2F4A 0%, transparent 60%), linear-gradient(160deg, #1F1A2A 0%, #120E18 100%)'  },
{
  id: 'aqua_girl',
  name: '🌸 亚系少女',
  color: '#DDB6C9',
  '--theme': '#DDB6C9',
  '--bg': '#F9F4F7',
  '--nav': '#FFFFFF',
  '--card': '#FFFFFF',
  '--text': '#261D22',        // 柔和的深紫灰（比原版深，但不死黑）
  '--sub': '#4A3640',         // 中灰粉（柔和清晰）
  '--line': '#D5C5CC',        // 深边框（保留区分度）
  wallpaper: 'radial-gradient(ellipse at 30% 15%, #FCE4EC 0%, transparent 35%), radial-gradient(ellipse at 70% 80%, #F3E5F5 0%, transparent 45%), radial-gradient(ellipse at 50% 50%, #F7EAF0 0%, transparent 60%), linear-gradient(160deg, #F7EAF0 0%, #EBE1E6 100%)'
},
{
  id: 'orchard',
  name: '🐻 林间小集',
  color: '#C85B53',
  '--theme': '#C85B53',
  '--bg': '#F3E9D8',
  '--nav': '#F5EDE0',
  '--card': '#EAD7C0',
  '--text': '#2D1A12',        // 调深
  '--sub': '#2E4A55',         // 调深
  '--line': '#C4AFA0',        // 调深
  wallpaper: 'radial-gradient(ellipse at 30% 10%, #E8C9A0 0%, transparent 40%), radial-gradient(ellipse at 70% 90%, #A8B88A 0%, transparent 50%), linear-gradient(145deg, #F3E9D8 0%, #E8DCC8 100%)'
},
{
  id: 'misi',
  name: '🐱 咪思异想',
  color: '#C82333',                     // 饱和度高、带一点点科幻感的激光红/红墨水色
  '--theme': '#C82333',
  '--bg': '#FFFFFF',                    // 100% 纯白，完美契合你的纯白图标
  '--nav': '#FFFFFF',
  '--card': '#FFFFFF',
  '--text': '#1A1A1A',                  // 绝对纯黑，形成强烈的漫画对比
  '--sub': '#666666',                   // 中性灰
  '--line': '#1A1A1A',                  // 纯黑描边线
  '--ring-opacity': '0.8',
  wallpaper: 'radial-gradient(circle at 82% 28%, rgba(200, 35, 51, 0.75) 0%, rgba(200, 35, 51, 0.1) 4px, transparent 15px), radial-gradient(circle at 18% 72%, rgba(200, 35, 51, 0.70) 0%, rgba(200, 35, 51, 0.1) 3px, transparent 12px), radial-gradient(circle at 50% 88%, rgba(200, 35, 51, 0.65) 0%, rgba(200, 35, 51, 0.1) 5px, transparent 18px), radial-gradient(circle at 28% 40%, rgba(200, 35, 51, 0.8) 0%, transparent 4px), radial-gradient(circle at 75% 62%, rgba(200, 35, 51, 0.8) 0%, transparent 5px), radial-gradient(circle at 62% 14%, rgba(200, 35, 51, 0.8) 0%, transparent 3px), radial-gradient(circle at 92% 52%, rgba(200, 35, 51, 0.8) 0%, transparent 4px), #FFFFFF'
  
},
{
  id: 'momo_night',
  name: '🐑 咩咩夜行',
  color: '#E69AAB',
  '--theme': '#E69AAB',
  '--bg': '#252833',
  '--nav': '#313645',
  '--card': '#313645',
  '--text': '#FDF6E3',
  '--sub': '#A59EB0',
  '--line': '#4D4755',
  
  wallpaper: 'radial-gradient(circle at 50% -10%, rgba(139, 100, 72, 0.2) 0%, transparent 40%), radial-gradient(circle at 50% 110%, rgba(139, 100, 72, 0.15) 0%, transparent 40%), linear-gradient(90deg, #252833 2px, transparent 2px) 0 0 / 4px 100%, linear-gradient(#252833 2px, transparent 2px) 0 0 / 100% 4px, linear-gradient(rgba(253, 246, 227, 0.04) 1px, transparent 1px) 0 0 / 32px 32px, linear-gradient(90deg, rgba(253, 246, 227, 0.04) 1px, transparent 1px) 0 0 / 32px 32px, url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E"), #252833',
  },
{
  id: 'sunset_parfait',
  name: '🍨 落日芭菲',
  color: '#DE8B59',           // 优化：夕阳暖杏金（落日余晖+焦糖甜品感，告别俗粉与冷绿）
  '--theme': '#DE8B59',        // 顶栏和时钟环像夕阳光晕一样温暖耐看
  '--bg': '#FAF8F5',
  '--nav': '#FAF8F5',
  '--card': '#FFFFFF',
  '--text': '#36303B',         // 深紫灰文字
  '--sub': '#6F6575',
  '--line': '#EAE1E8',
  '--ring-opacity': '0.9',
  
  /* 晚霞天幕：暮色蓝 ➔ 薰衣草紫 ➔ 香草米白（完美烘托落日暖金） */
  wallpaper: `
    linear-gradient(180deg, 
      #C6DBF8 0%, 
      #E5E0F8 22%, 
      #F4ECF2 50%, 
      #FAF2EE 78%, 
      #FAF7F2 100%
    )
  `
},
{
  id: 'redsun_forest',
  name: '🌲 红日森谣',
  color: '#D45A3A',
  '--theme': '#D45A3A',
  '--bg': '#F7EDE4',
  '--nav': '#FBF3EA',
  '--card': '#FCF7F2',
  '--text': '#2D2A26',
  '--sub': '#8E7A6B',
  '--line': '#E5D6C8',
wallpaper: `
  linear-gradient(180deg, #F7EDE4 50%, #F0E0D4 100%)
`
},

{
  id: 'goose',
  name: '🦆 大鹅来啦',
  color: '#E8915A',
  '--theme': '#E8915A',
  '--bg': '#FFF8F3',
  '--nav': '#FFF8F3',
  '--card': '#FFFBF7',
  '--text': '#4A2E1D',
  '--sub': '#8C7364',
  '--line': '#F0D5C0',
  '--ring-opacity': '0.7',
  wallpaper: `
    linear-gradient(180deg, #FFF8F3 0%, #FFFFFF 40%, #FFF8F3 100%)
  `
},

// 在 SKINS 数组中替换 sea_salt 的 wallpaper 字段
{
  id: 'sea_salt',
  name: '🧂 海盐软糖',
  color: '#FED7E2',
  '--theme': '#E883A0',
  '--bg': '#FCFDF7',
  '--nav': '#FCFDF7',
  '--card': '#FFFFFF',
  '--text': '#2D3748',
  '--sub': '#7A8A9E',
  '--line': '#E8EEF5',
  '--ring-opacity': '0.6',
  // ★ 新壁纸：用径向渐变做马卡龙色泡泡
  wallpaper: 'radial-gradient(circle at 12% 18%, rgba(254, 215, 226, 0.55) 0%, rgba(254, 215, 226, 0.1) 40%, transparent 55%), radial-gradient(circle at 12% 18%, rgba(255, 255, 255, 0.6) 0%, transparent 20%), radial-gradient(circle at 85% 22%, rgba(214, 232, 250, 0.50) 0%, rgba(214, 232, 250, 0.08) 35%, transparent 50%), radial-gradient(circle at 85% 22%, rgba(255, 255, 255, 0.5) 0%, transparent 18%), radial-gradient(circle at 78% 82%, rgba(253, 241, 184, 0.45) 0%, rgba(253, 241, 184, 0.08) 35%, transparent 50%), radial-gradient(circle at 78% 82%, rgba(255, 255, 255, 0.5) 0%, transparent 18%), radial-gradient(circle at 32% 72%, rgba(200, 235, 220, 0.40) 0%, rgba(200, 235, 220, 0.06) 30%, transparent 45%), radial-gradient(circle at 32% 72%, rgba(255, 255, 255, 0.5) 0%, transparent 15%), radial-gradient(circle at 55% 48%, rgba(220, 210, 240, 0.35) 0%, rgba(220, 210, 240, 0.05) 30%, transparent 45%), radial-gradient(circle at 55% 48%, rgba(255, 255, 255, 0.4) 0%, transparent 15%), radial-gradient(circle at 22% 45%, rgba(255, 220, 200, 0.35) 0%, transparent 25%), radial-gradient(circle at 22% 45%, rgba(255, 255, 255, 0.4) 0%, transparent 12%), radial-gradient(circle at 68% 55%, rgba(200, 225, 245, 0.30) 0%, transparent 25%), radial-gradient(circle at 68% 55%, rgba(255, 255, 255, 0.35) 0%, transparent 12%), radial-gradient(circle at 45% 90%, rgba(253, 241, 184, 0.25) 0%, transparent 15%), radial-gradient(circle at 45% 90%, rgba(255, 255, 255, 0.3) 0%, transparent 8%), radial-gradient(circle at 92% 48%, rgba(254, 215, 226, 0.25) 0%, transparent 15%), radial-gradient(circle at 92% 48%, rgba(255, 255, 255, 0.3) 0%, transparent 8%), #FCFDF7'
  
},
{
  id: 'angel_sheep',
  name: '😇 天使小羊',
  color: '#9BB5D6',
  '--theme': '#9BB5D6',
  '--bg': '#F6F8FB',
  '--nav': '#FBFCFE',
  '--card': '#FFFFFF',
  '--text': '#3D4A5C',
  '--sub': '#8A9AAF',
  '--line': '#E3EAF2',
  '--ring-opacity': '0.55',
  wallpaper: 'radial-gradient(circle at 20% 15%, rgba(212, 200, 230, 0.30) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(250, 230, 210, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 85%, rgba(180, 200, 230, 0.20) 0%, transparent 55%), linear-gradient(160deg, #F6F8FB 0%, #EEF2F7 100%)'
},
{
  id: 'demon_sheep',
  name: '😈 恶魔羊羊',
  color: '#C8B6D8',           // 图标圆点颜色（浅紫）
  '--theme': '#9B7EB5',       // 主色调：柔和浅紫
  '--bg': '#F5F0F8',          // 页面底色：极浅的粉紫白
  '--nav': '#FDFBFF',         // 导航栏：近白
  '--card': '#FFFFFF',        // 卡片：纯白
  '--text': '#3D2A4D',        // 主要文字：深紫灰（对比清晰）
  '--sub': '#8A7A96',         // 辅助文字：中灰紫
  '--line': '#E8DFF0',        // 分割线：浅紫灰
  '--ring-opacity': '0.6',
  // 浅色壁纸：浅紫到纯白的柔和过渡，带一点点紫雾感
  wallpaper: 'radial-gradient(circle at 20% 10%, rgba(200, 182, 216, 0.35) 0%, transparent 45%), radial-gradient(circle at 80% 90%, rgba(200, 182, 216, 0.20) 0%, transparent 45%), linear-gradient(160deg, #F8F4FC 0%, #FDFBFF 100%)'
}
];
// ========== 主题图标集 ==========
let currentThemeId = 'fusion'; // 默认主题

const ICON_SETS = {
  // 🌙 女巫之夜
  fusion: {
    // 桌面应用
    wechat:   'https://s1.imagehub.cc/images/2026/07/18/a9faef329860549c150b76e1dbefe024.png',
    notes:    'https://s1.imagehub.cc/images/2026/07/18/10f9005e6187550bf402db7ac7e6e571.png',
    focus:    'https://s1.imagehub.cc/images/2026/07/18/9da6ec2a5786e9a7ad47bbecbd016357.png',
    settings: 'https://s1.imagehub.cc/images/2026/07/18/95774ecbe1695907e5566e8672e4fcbe.png',
    album:    'https://s1.imagehub.cc/images/2026/07/18/2506541a59909f695098d694786ad318.png',
    hearts:   'https://s1.imagehub.cc/images/2026/07/18/3a6f1c6f711964772f45093aa6dd6605.png',
    music:    'https://s1.imagehub.cc/images/2026/07/18/ccd39b0ac4ac39e39c7b50bc0bb98e04.png',
    preset:   'https://s1.imagehub.cc/images/2026/07/18/b8eb36654466c06e78a496ef03ecc419.png',
    floating: 'https://s1.imagehub.cc/images/2026/07/18/b00d71ff3ee00b67fcc1a399063455c4.png',
    shop:     'https://s1.imagehub.cc/images/2026/07/18/6009f5e15efc4107b8661e8669648021.png',
    world:    'https://s1.imagehub.cc/images/2026/07/18/13f2db70da2ce77fb56804c047f090f7.png',
	game: 'https://s1.imagehub.cc/images/2026/08/15/52fb26deeafe058a7960365185be057c.png',
    // 底栏
    tabChats:    'https://s1.imagehub.cc/images/2026/07/18/289baa8b615cc010fb0c34ebd597e295.png',
    tabContacts: 'https://s1.imagehub.cc/images/2026/07/18/7d3648d6551326689150f460472f041a.png',
    tabDiscover: 'https://s1.imagehub.cc/images/2026/07/18/afe3eb514bbc023763eac9be87cc5d9b.png',
    tabMe:       'https://s1.imagehub.cc/images/2026/07/18/47a7bf844a8e166b1c2eed0a59c248e9.png',
    // 发现页 · 朋友圈入口
    discoverMoments: 'https://s1.imagehub.cc/images/2026/07/18/1e0c998bfe1009fe7a21302cfd2e3bc6.png',
  },

  // 🌸 亚系少女
aqua_girl: {
  // 桌面应用
  wechat:   'https://s1.imagehub.cc/images/2026/07/18/3d52ff962ca94ab2fa932a350be5d87e.png',
  notes:    'https://s1.imagehub.cc/images/2026/07/18/8d0293cfe24582f3854e48188e76b04b.png',
  focus:    'https://s1.imagehub.cc/images/2026/07/18/df8bd09b0f73bee23e3201474840c485.png',
  settings: 'https://s1.imagehub.cc/images/2026/07/18/38939f087763d1c20c24b923cf7a1f0d.png',
  album:    'https://s1.imagehub.cc/images/2026/07/18/ca9099844eb07492b316f3577f2731c8.png',
  hearts:   'https://s1.imagehub.cc/images/2026/07/18/cbc75e09f213c4967bfda4ab3c751d24.png',
  music:    'https://s1.imagehub.cc/images/2026/07/18/578f70bd87cfa01ab0dc51408a3a9f60.png',
  preset:   'https://s1.imagehub.cc/images/2026/07/18/9674b917fbee1c5bde956944f4c91328.png',
  floating: 'https://s1.imagehub.cc/images/2026/07/18/aab17e5ac56dab93071c5e27cc6624eb.png',
  shop:     'https://s1.imagehub.cc/images/2026/07/18/cd6a061ad9156dfb8d6395cc07db5f7c.png',
  world:    'https://s1.imagehub.cc/images/2026/07/18/e3d1fc4788c6b2ce4d2405f94f11078a.png',
  game: 'https://s1.imagehub.cc/images/2026/08/15/77c88d9b02e16a6f80672ddeec518f1e.png',
  // 底栏
  tabChats:    'https://s1.imagehub.cc/images/2026/07/19/4007d6cbe0aac5e2b644746e3765bdea.png',
  tabContacts: 'https://s1.imagehub.cc/images/2026/07/18/3f30df0b0b39432887373fbbdeb6ec9f.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/07/18/01a65fb2d7627fe4ced535e936150292.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/07/18/d53eb71abec7a8c2040a4c6d44dbbe02.png',
  // 发现页
  discoverMoments: 'https://s1.imagehub.cc/images/2026/07/19/13c0e268240ff1bebeb6b70b91c53058.png',
},
// 🐻 林间小集
orchard: {
  wechat:   'https://s1.imagehub.cc/images/2026/07/22/33f48b88b1d86a6e3fd90334a433a73d.png',
  notes:    'https://s1.imagehub.cc/images/2026/07/22/59fd728dd038ff40d0af553d9cfba104.png',
  focus:    'https://s1.imagehub.cc/images/2026/07/22/4700a8733173102aceb87bd040acaefb.png',
  settings: 'https://s1.imagehub.cc/images/2026/07/22/0baaf3fee37cd4872fab4e3fb13b147b.png',
  album:    'https://s1.imagehub.cc/images/2026/07/22/d2838e610300924452c382096f31d6ff.png',
  hearts:   'https://s1.imagehub.cc/images/2026/07/22/693e2fb6ee9bc78edcc63a830d99fdb4.png',
  music:    'https://s1.imagehub.cc/images/2026/07/22/5318b136798e2b59e7d5dda93a4c0441.png',
  preset:   'https://s1.imagehub.cc/images/2026/07/22/558e1b907bb3f18c048869eced0d0959.png',
  floating: 'https://s1.imagehub.cc/images/2026/07/22/60ba2efaa4b5127c0a94f95fa926d2e3.png',
  shop:     'https://s1.imagehub.cc/images/2026/07/22/99f05bf18e962f0ab7d1c5f8fd4e4243.png',
  world:    'https://s1.imagehub.cc/images/2026/07/22/782d6430893b3bdddca63fd37b5e2ea2.png',
  game: 'https://s1.imagehub.cc/images/2026/08/15/ac2422c17f002066978bfdb8d674f62e.png',
  tabChats:    'https://s1.imagehub.cc/images/2026/07/22/e856f25f017c7aa747f4e6340a014860.png',
  tabContacts: 'https://s1.imagehub.cc/images/2026/07/22/8ab1b08d350d2215c7506fb78af48946.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/07/22/344cf07ec9cfa26587d5563c6572f0e1.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/07/22/881c5b2e97cc7febac866c7af070943b.png',
  discoverMoments: 'https://s1.imagehub.cc/images/2026/07/22/90508b72d72612459f2ab7aae746bb23.png',
},
// 🐱 咪思异想
misi: {
  wechat:   'https://s1.imagehub.cc/images/2026/07/31/0df8e0c4d100fd108c7e3c285b46c85b.png',
  notes:    'https://s1.imagehub.cc/images/2026/07/31/4d26f89157b8d4a9668fd350b09d814f.png',
  focus:    'https://s1.imagehub.cc/images/2026/07/31/e21f0dd654b51d79f4d939352392baa1.png',
  settings: 'https://s1.imagehub.cc/images/2026/07/31/9f9263740707084341a78cd9201ff837.png',
  album:    'https://s1.imagehub.cc/images/2026/07/31/07060de517f1bcfc80b6189bb8f29dd3.png',
  hearts:   'https://s1.imagehub.cc/images/2026/07/31/6190f29d818235f700abe8900f12ac68.png',
  music:    'https://s1.imagehub.cc/images/2026/07/31/e2df08a1894b2cf38f8f4c1aad7c6803.png',
  preset:   'https://s1.imagehub.cc/images/2026/07/31/4f18cffd3a48fc4e5866ee08f2dc171d.png',
  floating: 'https://s1.imagehub.cc/images/2026/07/31/739b42addb1ce9fbab45e2cb9b7c5674.png',
  shop:     'https://s1.imagehub.cc/images/2026/07/31/d5b89d12b8843416569c67dadec9d39e.png',
  world:    'https://s1.imagehub.cc/images/2026/07/31/bd90c5058c93a4b905a6e7ffcee621c1.png',
  game: 'https://s1.imagehub.cc/images/2026/08/15/c0f9b4af23bd75767d4ae6365fa0c470.png',
  tabChats:    'https://s1.imagehub.cc/images/2026/07/31/6717e993d85f59cc08f230cb3c03d7b0.png',
  tabContacts: 'https://s1.imagehub.cc/images/2026/07/31/455aef8d60176a4abbc26c68cf1bab57.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/07/31/322286b7d5ee05f19eed740e02edc151.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/07/31/2dd7ec9732f79de88b95b1ebc87109ed.png',
  discoverMoments: 'https://s1.imagehub.cc/images/2026/07/31/2dc0511a3559b69fba801f127e5db701.png'
},
// 🐑 咩咩夜行
momo_night: {
  wechat:   'https://s1.imagehub.cc/images/2026/08/12/2d7e9350cbac930280b57cd26a3e6072.png',
  notes:    'https://s1.imagehub.cc/images/2026/08/12/792e346cf9178d08d8dad2453294d725.png',
  focus:    'https://s1.imagehub.cc/images/2026/08/12/1d9a9f96c674aa93b6ed7b785272b101.png',
  settings: 'https://s1.imagehub.cc/images/2026/08/12/89dd73a5835bab0e4ac601252151e5d2.png',
  album:    'https://s1.imagehub.cc/images/2026/08/12/c1621afc53d419a3719ade1b35964215.png',
  hearts:   'https://s1.imagehub.cc/images/2026/08/12/930c7e3d2f14b4f4d5a7f8b375b81315.png',
  music:    'https://s1.imagehub.cc/images/2026/08/12/15132af0f309437db97f8ba50e8d4515.png',
  preset:   'https://s1.imagehub.cc/images/2026/08/12/e79e5af9b0e822f2f0114c72af5eafaf.png',
  floating: 'https://s1.imagehub.cc/images/2026/08/12/e80b3bd61688c01c8964381cd1d9818c.png',
  shop:     'https://s1.imagehub.cc/images/2026/08/12/4a8841a2b3b1c94913d9c334b0ef6ed5.png',
  world:    'https://s1.imagehub.cc/images/2026/08/12/7b208085ee917bf8ab3b97787220afe0.png',
  game: 'https://s1.imagehub.cc/images/2026/08/15/63bebab61ae2f55daa9af15d61d7b5d6.png',
  tabChats:    'https://s1.imagehub.cc/images/2026/08/11/85be76b13cfaeeff89aae6b9b5d21dab.png',
  tabContacts: 'https://s1.imagehub.cc/images/2026/08/11/df33f9f4570f9a6c6f4bdf455ee6ab1c.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/08/11/4efc0fcba051c9e5c0c917a84026e2a8.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/08/11/e3c8122553d9e2a22740e7b15f470af9.png',
  discoverMoments: 'https://s1.imagehub.cc/images/2026/08/11/7c70b8b0b244adad7b77942998556734.png'
},

// 🍨 落日芭菲
sunset_parfait: {
  // 桌面应用图标
  wechat:   'https://s1.imagehub.cc/images/2026/08/17/eaacfa12b255f9070044015ea8b5cf6b.png',
  notes:    'https://s1.imagehub.cc/images/2026/08/17/13d509ea093f0a7dc72ca0bd854a33b5.png',
  focus:    'https://s1.imagehub.cc/images/2026/08/17/b801c42ac7d095a328c7a185b72ae8f0.png',
  settings: 'https://s1.imagehub.cc/images/2026/08/17/315ad2de6f61445e1a3479e99d29d46f.png',
  album:    'https://s1.imagehub.cc/images/2026/08/17/1fe2d3ca0ecd1dd19db7c429a760dc00.png',
  hearts:   'https://s1.imagehub.cc/images/2026/08/17/a867c7134e057106bc68cc570dacb71f.png',
  music:    'https://s1.imagehub.cc/images/2026/08/17/12d36e6504dc700d4466fad09d029d51.png',
  preset:   'https://s1.imagehub.cc/images/2026/08/17/67f5de5716cb36b844e247aba2a54485.png',
  floating: 'https://s1.imagehub.cc/images/2026/08/17/96d9b1cf4ccfd009a2cbcb99e3d75509.png',
  shop:     'https://s1.imagehub.cc/images/2026/08/17/4d8db04fd9ddecc11db9321dc6d5efab.png',
  world:    'https://s1.imagehub.cc/images/2026/08/17/de03ab383d76419937dbf9d938093fac.png',
  game:     'https://s1.imagehub.cc/images/2026/08/17/754f806d13159efb1a3e612dd532723b.png',
  // 底栏图标
  tabChats:    'https://s1.imagehub.cc/images/2026/08/17/9c6162e67e2bff3e7f07f46f8ea1e046.png',
  tabContacts: 'https://s1.imagehub.cc/images/2026/08/17/63b353ba58510c4723c9f244e156bf78.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/08/17/b25905b6d0872b1eb32fa263f0809df6.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/08/17/ff0a315da9b8a9606f5d470ce965c30b.png',
  // 发现页 - 朋友圈入口
  discoverMoments: 'https://s1.imagehub.cc/images/2026/08/17/ffc13fb7f7fb9f3416a4ec6200d886fe.png'
},

redsun_forest: {
  // 桌面应用图标
  wechat:   'https://s1.imagehub.cc/images/2026/08/26/383a1c42a485f3d7034f965dde558e71.png',
  notes:    'https://s1.imagehub.cc/images/2026/08/26/69715371a0fd8b3b4459aa5b70c168a3.png',
  focus:    'https://s1.imagehub.cc/images/2026/08/26/9e3d005ac092115be06027504f2061da.png',
  settings: 'https://s1.imagehub.cc/images/2026/08/26/6bd5b3296e942ce9670f14840dce217a.png',
  album:    'https://s1.imagehub.cc/images/2026/08/26/935d48601c04b7263b27f1ec5099422c.png',
  hearts:   'https://s1.imagehub.cc/images/2026/08/26/54ebf52799ca74609638901648db5adb.png',
  music:    'https://s1.imagehub.cc/images/2026/08/26/e3653ba4733718068d7a3f7f8cbf8ca7.png',
  preset:   'https://s1.imagehub.cc/images/2026/08/26/faceaa10272509e2ff060d1b9e59d33a.png',
  floating: 'https://s1.imagehub.cc/images/2026/08/26/3d4eca47696611d62803c75e810923d3.png',
  shop:     'https://s1.imagehub.cc/images/2026/08/26/f6c3abae913b884d1fde54b72b40aa0a.png',
  world:    'https://s1.imagehub.cc/images/2026/08/26/cbe44ba935c63f427e5e5782737cb911.png',
  game:     'https://s1.imagehub.cc/images/2026/08/26/26e3d752b563898bd244d071907aec55.png',
  // 底栏图标
  tabChats:    'https://s1.imagehub.cc/images/2026/08/27/7e1e7d90ae31118d758437a9c767c1e4.png',
  tabContacts: 'https://s1.imagehub.cc/images/2026/08/26/93c08ca7e13d17cc5ef15835f095a98f.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/08/27/c5a2af392047ef7cdf3440b98f4e0472.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/08/26/e65b4ebb4dc8d305953ce56eaedaca54.png',
  // 发现页 - 朋友圈入口
  discoverMoments: 'https://s1.imagehub.cc/images/2026/08/26/907f0bf5df8c8ccac8d350921a797902.png'
},
goose: {
  // 桌面应用图标
  wechat:   'https://s1.imagehub.cc/images/2026/08/31/eadec62c0758ee052bd3dbb12fb94aed.png',
  notes:    'https://s1.imagehub.cc/images/2026/08/31/dd477e4b544ae1fc86a746d87ba62fe0.png',
  focus:    'https://s1.imagehub.cc/images/2026/08/31/3622b81e4cacedc7d76abd4b3fb3cda5.png',
  settings: 'https://s1.imagehub.cc/images/2026/08/31/aa0cb6baea3c68a9604a9727826c132f.png',
  album:    'https://s1.imagehub.cc/images/2026/08/31/b56b3478d3aa76e4f80824a467619263.png',
  hearts:   'https://s1.imagehub.cc/images/2026/08/31/ffe01b5b930cf9141130fd524557e08f.png',
  music:    'https://s1.imagehub.cc/images/2026/08/31/31640296db24e00c76d7ee35ff6bc424.png',
  preset:   'https://s1.imagehub.cc/images/2026/08/31/832e3cd0a2de7e28ef6e27ef66553d3d.png',
  floating: 'https://s1.imagehub.cc/images/2026/08/31/e5f960ccf93e9635b842bad7341ad2cd.png',
  shop:     'https://s1.imagehub.cc/images/2026/08/31/f65dc8465490f3187be202f767e81c1d.png',
  world:    'https://s1.imagehub.cc/images/2026/08/31/8acaa56a25bf725c9ab4acf7adbcf3cb.png',
  game:     'https://s1.imagehub.cc/images/2026/08/31/1765a94b9ce7e086b858e44652943d82.png',
  // 底栏图标
  tabChats:    'https://s1.imagehub.cc/images/2026/08/31/d18bc187a057235b64a0240c9f93f1ae.png',
  tabContacts: 'https://s1.imagehub.cc/images/2026/08/31/b585598b44a99cc8b5358cfd58932830.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/08/31/03c04f4fbf503cc0314f7ebe56ca43cc.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/08/31/cd87cf349e8ed3f89d0adc699066c580.png',
  // 发现页 - 朋友圈入口
  discoverMoments: 'https://s1.imagehub.cc/images/2026/08/31/f9a76eca144f167251c6d9965fcbf9d8.png'
},

sea_salt: {
  // 桌面应用
  wechat:   'https://s1.imagehub.cc/images/2026/09/02/f66f7b927342de5c3e46251447ed639a.png',
  notes:    'https://s1.imagehub.cc/images/2026/09/02/93080aca39aa117358c30b318d7ecd3e.png',
  focus:    'https://s1.imagehub.cc/images/2026/09/02/855ab716403700900ed756d0f2a400f0.png',
  settings: 'https://s1.imagehub.cc/images/2026/09/02/c8fec7057ea2680e6326b77c073df5fb.png',
  album:    'https://s1.imagehub.cc/images/2026/09/02/025abf19215b90b225e6b635a412888d.png',
  hearts:   'https://s1.imagehub.cc/images/2026/09/02/fa56af9d3ee1cbac417baf3636c7b251.png',
  music:    'https://s1.imagehub.cc/images/2026/09/02/b29305e2d702702a51aac0dc1061521b.png',
  preset:   'https://s1.imagehub.cc/images/2026/09/02/b8a76d6405329deade1ebefc485b262d.png',
  floating: 'https://s1.imagehub.cc/images/2026/09/02/1b2e1cf9153d60daf8b7c59a32850a45.png',
  shop:     'https://s1.imagehub.cc/images/2026/09/02/4f35c60297a6c5f40125e9de38c7e5b9.png',
  world:    'https://s1.imagehub.cc/images/2026/09/02/40ec36185633c94e1dd6dd1726d680f0.png',
  game:     'https://s1.imagehub.cc/images/2026/09/02/d9809b0ec2fa23e939237a4f3f398a88.png',
  // 底栏
  tabChats:    'https://s1.imagehub.cc/images/2026/09/02/45463f9387873999873f0e1d876d1e76.png',
  // ★ 已替换为新的通讯录图标链接
  tabContacts: 'https://s1.imagehub.cc/images/2026/09/02/c3ad2212abd7ca6043f48b4b01298628.png',
  tabDiscover: 'https://s1.imagehub.cc/images/2026/09/02/7626b4d36c7309fbbfa855b368480ae7.png',
  tabMe:       'https://s1.imagehub.cc/images/2026/09/02/36b57a9b74c9c080109eab104553eab4.png',
  // 发现页 - 朋友圈入口
  discoverMoments: 'https://s1.imagehub.cc/images/2026/09/02/acc1a76ecf981bc17754f8b4a6567b00.png'
},
angel_sheep: {
  // === 桌面应用图标（来自你的图床，保持原样）===
  wechat:   'https://s1.imagehub.cc/images/2026/10/03/54c46d029a72cd44db3eef7f0c712dee.png',
  notes:    'https://s1.imagehub.cc/images/2026/10/03/824fe2cb0d5e02af6ba670c0b8b6f934.png',
  focus:    'https://s1.imagehub.cc/images/2026/10/03/297b6513b27348b3c936f8fe48d6a34e.png',
  settings: 'https://s1.imagehub.cc/images/2026/10/03/65a0928d40873e2b65e591b2797b2867.png',
  album:    'https://s1.imagehub.cc/images/2026/10/03/e95e675fe645041c6e93fcafc7974c34.png',
  hearts:   'https://s1.imagehub.cc/images/2026/10/03/0ba802a3064b4a75b19b830f3940f6c9.png',
  music:    'https://s1.imagehub.cc/images/2026/10/03/6e2aaaf723d4813fa240996c9847a17e.png',
  preset:   'https://s1.imagehub.cc/images/2026/10/03/020212319b53ad608d195c11a783ac35.png',
  floating: 'https://s1.imagehub.cc/images/2026/10/03/4f8dc9a14aec58432959c0390fdafa38.png',
  shop:     'https://s1.imagehub.cc/images/2026/10/03/6f3dd2ac934008dad21f331dcbe046c7.png',
  world:    'https://s1.imagehub.cc/images/2026/10/03/32a34102c5197dd02ec52f77f227e786.png',
  game:     'https://s1.imagehub.cc/images/2026/10/03/019158f0798ed1ad307752b4de4c7010.png',

  // === 底栏图标（纤细线稿风，22x22，stroke-width 1.5）===
  tabChats: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9EB0C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H7l-4 3.5v-12A8.5 8.5 0 0 1 11.5 3h1A8.5 8.5 0 0 1 21 11.5z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="14" y2="14"/></svg>'),

  tabContacts: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9EB0C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="7.5" r="3.5"/><path d="M3.5 20v-1.2a6.5 6.5 0 0 1 6.5-6.5h0a6.5 6.5 0 0 1 6.5 6.5V20"/><path d="M18 7.5a2.5 2.5 0 0 1 0 5"/><path d="M21 20v-1a3.5 3.5 0 0 0-2-3.2"/></svg>'),

  tabDiscover: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9EB0C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5"/></svg>'),

  tabMe: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9EB0C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3.2"/><path d="M6.5 19.5a6 6 0 0 1 11 0"/></svg>'),

  // === 发现页 · 朋友圈入口（22x22，纤细线稿）===
  discoverMoments: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9EB0C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M5.2 18.8l2.1-2.1M16.7 7.3l2.1-2.1"/></svg>')
  
  },
// 😈 恶魔羊羊（浅色主题）
demon_sheep: {
  // === 桌面应用图标 ===
  wechat:   'https://s1.imagehub.cc/images/2026/10/08/4f9eacd6d5e884bb5f34fcb3f09b3ece.png',
  notes:    'https://s1.imagehub.cc/images/2026/10/08/15c916bf8da49005dc9b9c6153cdb664.png',
  focus:    'https://s1.imagehub.cc/images/2026/10/08/eb5708b871af5da4df3aa7114cb5b9d9.png',
  settings: 'https://s1.imagehub.cc/images/2026/10/08/d7bfe48350a8623740482ea98f4df7da.png',
  album:    'https://s1.imagehub.cc/images/2026/10/08/238b530bb791c53f5e3f5a08971f1e9b.png',
  hearts:   'https://s1.imagehub.cc/images/2026/10/08/de8d19c232c85543211ea2029a3f13af.png',
  music:    'https://s1.imagehub.cc/images/2026/10/08/1677e6df426b54aa2a72e84fedf78749.png',
  preset:   'https://s1.imagehub.cc/images/2026/10/08/fdf889446dce02a8980a0e06da9a6bf9.png',
  floating: 'https://s1.imagehub.cc/images/2026/10/08/63fed1e7db207c51a7cf94f18526f051.png',
  shop:     'https://s1.imagehub.cc/images/2026/10/08/cc636c1e9b1e7ff7e8b282eff90e56dc.png',
  world:    'https://s1.imagehub.cc/images/2026/10/08/fd396555e3a0f5ce4b19cb1d5c5363f9.png',
  game:     'https://s1.imagehub.cc/images/2026/10/08/0f52518b9d8b96221c225db9d0ce628f.png',

  // === 微信底栏 SVG 图标 ===
  tabChats: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9B7EB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H7l-4 3.5v-12A8.5 8.5 0 0 1 11.5 3h1A8.5 8.5 0 0 1 21 11.5z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="14" y2="14"/></svg>'),
  tabContacts: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9B7EB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="7.5" r="3.5"/><path d="M3.5 20v-1.2a6.5 6.5 0 0 1 6.5-6.5h0a6.5 6.5 0 0 1 6.5 6.5V20"/><path d="M18 7.5a2.5 2.5 0 0 1 0 5"/><path d="M21 20v-1a3.5 3.5 0 0 0-2-3.2"/></svg>'),
  tabDiscover: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9B7EB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5"/></svg>'),
  tabMe: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9B7EB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3.2"/><path d="M6.5 19.5a6 6 0 0 1 11 0"/></svg>'),

  // === 朋友圈入口 SVG 图标 ===
  discoverMoments: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9B7EB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M5.2 18.8l2.1-2.1M16.7 7.3l2.1-2.1"/></svg>')
}
};
