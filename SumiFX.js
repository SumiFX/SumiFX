const _0x411061=_0x45e6;(function(_0x5f146c,_0x551eea){const _0x48bbf8=_0x45e6,_0x2a8b12=_0x5f146c();while(!![]){try{const _0x1956e6=parseInt(_0x48bbf8(0xc1))/0x1+parseInt(_0x48bbf8(0xc2))/0x2*(-parseInt(_0x48bbf8(0x92))/0x3)+-parseInt(_0x48bbf8(0xa5))/0x4*(parseInt(_0x48bbf8(0xf9))/0x5)+parseInt(_0x48bbf8(0xa6))/0x6*(parseInt(_0x48bbf8(0xc3))/0x7)+-parseInt(_0x48bbf8(0x79))/0x8+parseInt(_0x48bbf8(0x119))/0x9*(parseInt(_0x48bbf8(0xa4))/0xa)+parseInt(_0x48bbf8(0xa1))/0xb*(parseInt(_0x48bbf8(0xb7))/0xc);if(_0x1956e6===_0x551eea)break;else _0x2a8b12['push'](_0x2a8b12['shift']());}catch(_0x282b23){_0x2a8b12['push'](_0x2a8b12['shift']());}}}(_0x1ccb,0xac099));function _0x45e6(_0x49b88a,_0x56d06f){const _0x1ccb66=_0x1ccb();return _0x45e6=function(_0x45e6bc,_0x34f286){_0x45e6bc=_0x45e6bc-0x68;let _0x3da0ff=_0x1ccb66[_0x45e6bc];return _0x3da0ff;},_0x45e6(_0x49b88a,_0x56d06f);}const {search,download}=require(_0x411061(0x8f)),{youtubedl,youtubedlv2,mediafiredl,googleImage,googleIt}=require('@bochilteam/scraper'),yts=require('yt-search'),fg=require(_0x411061(0x99)),axios=require(_0x411061(0x123)),cheerio=require(_0x411061(0x12d)),{sizeFormatter}=require(_0x411061(0x71)),sharp=require(_0x411061(0x80)),google=require(_0x411061(0x8c));async function openAi(_0x3edbfa){const _0x424941=_0x411061;let _0x37884f=[];const _0x30b0c9=(await import(_0x424941(0x73)))['default'];try{let _0x2c4701=_0x424941(0x106),_0x149ab3=await _0x30b0c9('https://aemt.me/prompt/gpt?prompt='+encodeURIComponent(_0x2c4701)+'&text='+encodeURIComponent(_0x3edbfa)),_0x587793=await _0x149ab3['json'](),_0x479927=_0x587793[_0x424941(0x7c)];return _0x37884f=[..._0x37884f,{'role':_0x424941(0xfb),'content':_0x3edbfa}],{'msg':_0x479927};}catch{}}async function GoogleImage(_0x5e3b5d){const _0x3f35bf=_0x411061;try{const _0x858b8b=await(await googleImage(_0x5e3b5d))[_0x3f35bf(0xa3)](),_0x666f86=await shortenUrl(_0x858b8b);return{'dl_url':_0x666f86};}catch{}}async function rule34(_0x9969d0){const _0x5e7144=_0x411061;try{const _0x50e632=await(await googleImage(_0x5e7144(0xce)+_0x9969d0))[_0x5e7144(0xa3)](),_0x11fcef=await shortenUrl(_0x50e632);return{'dl_url':_0x11fcef};}catch{}}async function GDriveDl(_0x586ec1){const _0x254ae6=_0x411061;try{let _0x3284a2=await fg[_0x254ae6(0xcd)](_0x586ec1),_0x2b0a83=_0x3284a2[_0x254ae6(0xff)],_0x9d212=_0x3284a2[_0x254ae6(0xe8)],_0x30a337=_0x3284a2[_0x254ae6(0x7a)];const _0x2e9e66=_0x3284a2[_0x254ae6(0xa0)],_0x21cd3b=await shortenUrl(_0x2e9e66);return{'title':_0x2b0a83,'size':_0x9d212,'type':_0x30a337,'dl_url':_0x21cd3b};}catch{}}async function igdl(_0x30d847){const _0x844c86=_0x411061;try{const _0x1eef02=await fg[_0x844c86(0xac)](_0x30d847),_0x2bfa40=_0x1eef02[_0x844c86(0x7c)][0x0][_0x844c86(0xb0)],_0x7459e1=await shortenUrl(_0x2bfa40);return{'dl_url':_0x7459e1};}catch{}}async function mediafire(_0x2eb50c){try{let _0x5cd871=await mediafiredl(_0x2eb50c),{url:_0x42cc3a,filename:_0x314023,ext:_0x16b304,aploud:_0x573142,filesizeH:_0xb65f69}=_0x5cd871,_0x4f7009=await shortenUrl(_0x42cc3a),_0x5a4225=_0x314023,_0x28bac5=_0xb65f69;return{'title':_0x5a4225,'ext':_0x16b304,'aploud':_0x573142,'size':_0x28bac5,'dl_url':_0x4f7009};}catch(_0x303f2b){}}async function aptoide(_0x52e339){const _0x3771e7=_0x411061;try{let _0x42c786=await search(_0x52e339),_0x52c0a9=await download(_0x42c786[0x0]['id']),_0x59b1d4=_0x52c0a9[_0x3771e7(0x7d)],_0x91298c=_0x52c0a9[_0x3771e7(0x134)],_0xf6e5db=_0x52c0a9[_0x3771e7(0x120)],_0x14cfb1=_0x52c0a9[_0x3771e7(0x7b)],_0x445ca1=_0x52c0a9[_0x3771e7(0x69)],_0x3c1a0c=await shortenUrl(_0x445ca1),_0x3fbfd9=_0x52c0a9['icon'];return{'name':_0x59b1d4,'packname':_0x91298c,'update':_0xf6e5db,'size':_0x14cfb1,'thumbnail':_0x3fbfd9,'dl_url':_0x3c1a0c};}catch{}}async function fbdl(_0x493de1){const _0x28bc8b=_0x411061;try{let _0x9f3349={'id':_0x493de1,'locale':'id'},{data:_0x559649}=await axios(_0x28bc8b(0x12c),{'method':'POST','data':new URLSearchParams(Object[_0x28bc8b(0x112)](_0x9f3349)),'headers':{'user-agent':_0x28bc8b(0xdc),'cookie':'PHPSESSID=914a5et39uur28e84t9env0378;\x20popCookie=1;\x20prefetchAd_4301805=true'}}),_0x50f564=cheerio['load'](_0x559649),_0x14091d=_0x50f564(_0x28bc8b(0x9e))[_0x28bc8b(0x86)]()[_0x28bc8b(0x122)](),_0x24399a=_0x50f564('div.container\x20>\x20div.results-download\x20>\x20ul\x20>\x20li:nth-child(1)\x20>\x20a')[_0x28bc8b(0x78)](_0x28bc8b(0xbc)),_0x454804=_0x50f564(_0x28bc8b(0x96))[_0x28bc8b(0x78)](_0x28bc8b(0xbc)),_0x27bb44=await shortenUrl(_0x24399a),_0x482213=await shortenUrl(_0x454804);return{'title':_0x14091d,'SD':_0x482213,'HD':_0x27bb44};}catch{}}async function pinterest(_0x39b799){const _0xda333f=_0x411061;try{const _0x5d2380=await import(_0xda333f(0x73));let _0x5403c3=await _0x5d2380[_0xda333f(0xaa)](_0xda333f(0x9b)+_0x39b799+_0xda333f(0xb9)+_0x39b799+_0xda333f(0x87)),_0x414c14=await _0x5403c3[_0xda333f(0x102)](),_0x493666=_0x414c14?.[_0xda333f(0x104)]?.[_0xda333f(0xb6)]?.[_0xda333f(0x10a)],_0x12d0da=_0x493666[~~(Math[_0xda333f(0x12e)]()*_0x493666?.[_0xda333f(0x109)])]?.['images']?.[_0xda333f(0x90)]?.[_0xda333f(0xb0)];return{'dl_url':_0x12d0da};}catch{return null;}}async function tiktokDownloader(_0x5eb2c7){const _0x2ead38=_0x411061;try{let _0x2e39bc=_0x2ead38(0x93)+_0x5eb2c7,_0x3d1cf7=await axios['get'](_0x2e39bc,{'headers':{'User-Agent':_0x2ead38(0x6b),'Accept':_0x2ead38(0xd6),'Accept-Language':'id,en-US;q=0.7,en;q=0.3','Accept-Encoding':'gzip,\x20deflate,\x20br','Connection':_0x2ead38(0xef),'Cookie':'cf_clearance=IDhpJ2RO8UDI40tXLI4g45ZZGDiET0lnWy6bO.4oLqQ-1706368220-1-ASlDi8PXO3c7Jk/wNqrgxTj4gCrY4qr6QonEpMmvW1EKPYICk//uDMJ+wFCv2LXuv7t26eyFoSyVEGbdV8dV2gQ=','Upgrade-Insecure-Requests':'1','Sec-Fetch-Dest':_0x2ead38(0xf7),'Sec-Fetch-Mode':'navigate','Sec-Fetch-Site':_0x2ead38(0xc0),'Sec-Fetch-User':'?1','If-None-Match':_0x2ead38(0x128)}});return _0x3d1cf7[_0x2ead38(0xb6)];}catch{return null;}}async function tiktokdl(_0x31fed5){const _0x5701a6=_0x411061;try{let _0x542233=await tiktokDownloader(_0x31fed5);if(!_0x542233)return null;let _0x1ef41a=_0x542233[_0x5701a6(0x7e)][_0x5701a6(0x74)],_0x179b7d=_0x542233[_0x5701a6(0x101)],_0x7909d5=_0x542233[_0x5701a6(0x131)],_0x2f50c0=_0x542233[_0x5701a6(0x7e)][_0x5701a6(0xda)],_0x34095f=_0x542233[_0x5701a6(0x11f)][_0x5701a6(0xa8)],_0x113236=_0x542233[_0x5701a6(0x11f)][_0x5701a6(0x132)],_0x5e704b=_0x542233[_0x5701a6(0x11f)][_0x5701a6(0xdd)],_0x566afe=_0x542233[_0x5701a6(0x11f)]['playCount'],_0x12f0dd=await shortenUrl(_0x1ef41a);return{'title':_0x179b7d,'published':_0x7909d5,'quality':_0x2f50c0,'likes':_0x34095f,'commentCount':_0x113236,'shareCount':_0x5e704b,'views':_0x566afe,'dl_url':_0x12f0dd};}catch{return null;}}async function ytmp3(_0x1e907c){const _0x540d80=_0x411061;try{let _0x57ca82=_0x540d80(0x75),_0x437e5e=await youtubedl(_0x1e907c)[_0x540d80(0xea)](async()=>await youtubedlv2(_0x1e907c)),_0x567df5=await _0x437e5e[_0x540d80(0x10b)][_0x57ca82][_0x540d80(0x6f)](),_0x269ec5=await _0x437e5e[_0x540d80(0x101)],_0x5a0e75=await _0x437e5e[_0x540d80(0x10b)][_0x57ca82][_0x540d80(0xf1)],_0x18d97e=_0x437e5e['thumbnail'],_0x621260=await shortenUrl(_0x18d97e),_0x275760=await shortenUrl(_0x567df5);return{'title':_0x269ec5,'size':_0x5a0e75,'quality':_0x57ca82,'thumbnail':_0x621260,'dl_url':_0x275760};}catch{}}async function ytmp4(_0x123fc3){const _0xd08fa7=_0x411061;try{let _0x41d168=_0xd08fa7(0xcb),_0x1356af=await youtubedl(_0x123fc3)[_0xd08fa7(0xea)](async()=>await youtubedlv2(_0x123fc3)),_0x2fd74e=await _0x1356af[_0xd08fa7(0x7e)][_0x41d168][_0xd08fa7(0x6f)](),_0x6d00f=await _0x1356af[_0xd08fa7(0x101)],_0x4923fb=await _0x1356af[_0xd08fa7(0x7e)][_0x41d168][_0xd08fa7(0xf1)],_0x2c5cbe=_0x1356af[_0xd08fa7(0x11a)],_0x3b4021=await shortenUrl(_0x2c5cbe),_0x31efdf=await shortenUrl(_0x2fd74e);return{'title':_0x6d00f,'size':_0x4923fb,'quality':_0x41d168,'thumbnail':_0x3b4021,'dl_url':_0x31efdf};}catch{}}function _0x1ccb(){const _0x2f9f69=['minutes\x20ago','\x20Followers','url_dl','entries','https://i.pinimg.com/564x/09/3a/f2/093af2156b4b0d66799ac8d5eff6e7ff.jpg','response','map','https://i.ibb.co/7Rnb3Y0/d1459d6b3f59.jpg','https://i.ibb.co/xgTsmW8/7ca77ee661d6.jpg','\x20minuto','1501641UQxwSk','thumbnail','hour\x20ago','https://i.pinimg.com/564x/d5/43/ae/d543aef3523502743b376db380cebff3.jpg','https://i.ibb.co/8mzjZrt/3b2d60d15de4.jpg','https://i.pinimg.com/564x/fa/c2/e3/fac2e3209d59309dbe43c4f11fa3ce50.jpg','stats','lastup','year','trim','axios','https://i.ibb.co/Tbj6tzF/e93d133529d5.jpg','months\x20ago','https://i.ibb.co/V3kX3Cv/bf29432e6e21.jpg','https://i.ibb.co/wwpFfqH/98bc4eb86562.jpg','W/faa-OLjMXtR3QSf5fGpXMh35fxB63x0','https://i.ibb.co/CbdscQp/5918b5b3b674.jpg','https://i.pinimg.com/564x/bd/76/3f/bd763f0a1b868cb55395adb6e4b8f8d2.jpg','https://i.ibb.co/3pKd9jZ/527105aba87a.jpg','https://getmyfb.com/process','cheerio','random','https://i.ibb.co/8069RmW/cfe9ed16a5b4.jpg','https://i.ibb.co/YXpvh3j/2a91663a9f0a.jpg','created_at','commentCount','https://i.ibb.co/LCnJfT7/5732f5315f2f.jpg','package','https://i.ibb.co/sHkDdGd/87db7aaff335.jpg','https://i.ibb.co/LQ4WJMR/f13a01cc7301.jpg','spotifySearch','dllink','profile','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64;\x20rv:122.0)\x20Gecko/20100101\x20Firefox/122.0','hour','https://i.ibb.co/Jn3tkg8/a1aab3d67644.jpg','https://i.ibb.co/Xkp1wx5/3a15abeb6394.jpg','download','timestamp','human-readable','https://www.instagram.com/','node-fetch','noWatermark','128kbps','#user-page\x20>\x20div.user\x20>\x20div\x20>\x20div.col-md-4.col-8.my-3\x20>\x20div\x20>\x20a\x20>\x20h1','post','attr','8473784lfTVCv','mimetype','size','result','name','video','artist','sharp','https://i.ibb.co/ZWjNrZt/8257e3c9ffc0.jpg','https://i.ibb.co/SmMvhb5/da465242e083.jpg','following','xnxxdl','hours\x20ago','text','%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559','female','status','https://i.ibb.co/LgPn4vL/257ab65eb79d.jpg','https://i.ibb.co/3CLJfw3/151663d07c51.jpg','google-it','ago','image','aptoide-scraper','orig','https://i.ibb.co/j37Sc7X/a9600c228a8b.jpg','9qMMJez','https://api.tiklydown.eu.org/api/download?url=','https://i.pinimg.com/564x/3c/ed/a0/3ceda0e5a3208bc1c8db7ed41bd6c4ef.jpg','username','div.container\x20>\x20div.results-download\x20>\x20ul\x20>\x20li:nth-child(2)\x20>\x20a','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64;\x20rv:109.0)\x20Gecko/20100101\x20Firefox/112.0','https://i.pinimg.com/564x/d2/f4/eb/d2f4ebfb5007fe2b02d7012bee1ea198.jpg','api-dylux','Desconocida','https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D','fullname','https://i.ibb.co/LvTRt2w/c8f8d0b98c70.jpg','div.container\x20>\x20div.results-item\x20>\x20div.results-item-text','https://i.ibb.co/FwRqPDn/206818911fdd.jpg','downloadUrl','11ZHcrdr','month\x20ago','getRandom','60FgUBri','1098824axGiEv','1800HiYsFy','\x20días','likeCount','minute\x20ago','default','\x20meses','igdl','minute','https://i.ibb.co/cNhsYRV/7bff8e448134.jpg','https://i.ibb.co/yQzxptw/7faabc24c6ff.jpg','url','\x20años','https://i.ibb.co/2Yk4P2B/47fd82f61fd1.jpg','https://i.ibb.co/9wd2mTM/fd4b6af0ccac.jpg','https://i.ibb.co/NFPKcPj/6d61f9c4cede.jpg','https://i.ibb.co/FWSCd2C/81e637d4a839.jpg','data','5421540vRtDoQ','https://i.pinimg.com/564x/7c/35/ed/7c35ed596356ddc31ef3d926df97243b.jpg','&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22','style','videoId','href','https://i.pinimg.com/564x/c5/a9/4b/c5a94b1c9b5e4ba381e1223762066c83.jpg','days\x20ago','load','none','1351809yrlcsF','302524LjHsYj','11942dyKBKe','https://i.pinimg.com/564x/32/ac/df/32acdff5d75f0de1239414a10d8178a6.jpg','https://i.pinimg.com/564x/27/7e/3a/277e3a698550c98581384db1f795ce5c.jpg','https://www.guruapi.tech/api/spotifyinfo?text=','https://i.ibb.co/p4Xp2Xh/d7f6c5420b7a.jpg','https://i.ibb.co/P1SsfbG/a12d71cd6b9a.jpg','month','get','480p','\x20hora','GDriveDl','rule34\x20','https://i.pinimg.com/564x/90/71/a8/9071a8a949cc6d96e9a62fd9bc12720c.jpg','author','https://i.ibb.co/6BYPMjC/4b36a8dfca20.jpg','https://i.ibb.co/M9B742X/f608cecc4265.jpg','https://i.ibb.co/rf6pKtp/53a463d8ebe9.jpg','\x20minutos','#user-page\x20>\x20div.user\x20>\x20div\x20>\x20div.col-md-4.col-8.my-3\x20>\x20ul\x20>\x20li:nth-child(3)','text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8','https://i.ibb.co/rxBN0S5/bd3b07b67ad6.jpg','https://i.pinimg.com/564x/a9/7f/44/a97f4491e970ecf1fbdafbf3321e0ae9.jpg','https://i.pinimg.com/564x/84/37/64/8437645b925627e48f2b20e9681af2d7.jpg','ratio','\x20día','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/105.0.0.0\x20Safari/537.36','shareCount','https://i.ibb.co/zXsJQ8R/96d088d2e0a0.jpg','filter','https://tinyurl.com/api-create.php?url=','day','https://i.ibb.co/HGZqdzb/9b8278060e2d.jpg','followers','male','https://i.ibb.co/Z2bDP7m/48990865816b.jpg','https://i.ibb.co/WykFqbW/57f78370f1e2.jpg','spty','fileSize','all','catch','https://i.ibb.co/P17CTF9/924deeb25a3d.jpg','https://i.ibb.co/r55xYdy/8ee97786e6f8.jpg','\x20horas','years\x20ago','keep-alive','https://youtu.be/','fileSizeH','hace\x20','quality','https://i.pinimg.com/564x/ed/83/9b/ed839b04efc10c9ef27050266be8dbd9.jpg','https://i.pinimg.com/564x/bc/4a/9a/bc4a9aefafbad258df501b0b1233cc12.jpg','https://i.pinimg.com/564x/d7/48/8b/d7488b788d5cdd9c47228b77023408ec.jpg','document','type','20GruUsx','\x20Posts','user','replace','\x20mes','https://i.ibb.co/mSMmmGx/300e252914f3.jpg','fileName','https://i.pinimg.com/564x/0a/bc/0b/0abc0bbda1ddee1363f9e127ed0fc4b2.jpg','title','json','Desconocido','resource_response','day\x20ago','Actuaras\x20como\x20un\x20Bot\x20de\x20WhatsApp\x20el\x20cual\x20fue\x20creado\x20por\x20Starlights\x20Team,\x20tu\x20seras\x20Sumi\x20Sakurasawa,\x20basada\x20en\x20el\x20personaje\x20Sumi\x20Sakurasawa\x20del\x20Anime\x20Rent-a-Girlfriend,\x20y\x20tu\x20manera\x20de\x20expresarte\x20será\x20actuando\x20como\x20mujer\x20alegre.','floor','thumb','length','results','audio','https://i.ibb.co/ypvdYHW/7905e485ff20.jpg','includes','https://i.ibb.co/RYB9JWG/4428e27ef288.jpg'];_0x1ccb=function(){return _0x2f9f69;};return _0x1ccb();}async function soundSearch(_0x56ea8b){const _0x525543=_0x411061;try{let _0xebce4=await fg['scsearch'](_0x56ea8b);return _0xebce4[_0x525543(0x115)]((_0x3ea3d3,_0x374d2e)=>({'nro':_0x374d2e+0x1,'title':_0x3ea3d3[_0x525543(0x101)],'artist':_0x3ea3d3[_0x525543(0x7f)]||_0x525543(0x103),'thumbnail':_0x3ea3d3[_0x525543(0x108)],'url':_0x3ea3d3[_0x525543(0xb0)]}));}catch(_0x4a1cab){return[];}}async function spotify(_0x1f97af){const _0x86747f=_0x411061;try{let _0x4c06e6=await fg['spotifySearch'](_0x1f97af),_0x108e25=_0x4c06e6[_0x86747f(0x7c)][0x0]['url'],_0x14f444=await axios['get'](_0x86747f(0xc6)+_0x108e25),{title:_0x4929a8,artist:_0x7faf31,album:_0x1a30bd,year:_0x5c2d87,thumbnail:_0x1b5e8f,url:_0x543293}=_0x14f444['data']['spty'][_0x86747f(0x10a)],_0x10c846=_0x5c2d87,_0x3e5c2a=_0x14f444[_0x86747f(0xb6)][_0x86747f(0xe7)]['download'][_0x86747f(0x10b)],_0x175724=await shortenUrl(_0x3e5c2a);return{'title':_0x4929a8,'artist':_0x7faf31,'album':_0x1a30bd,'published':_0x10c846,'thumbnail':_0x1b5e8f,'dl_url':_0x175724};}catch{}}async function spotifySearch(_0x45fd26){const _0x4f99ef=_0x411061;try{let _0xc935fc=await fg[_0x4f99ef(0x68)](_0x45fd26);return _0xc935fc['result'][_0x4f99ef(0x115)]((_0xa9eb0c,_0x53ea96)=>({'nro':_0x53ea96+0x1,'title':_0xa9eb0c[_0x4f99ef(0x101)],'artist':_0xa9eb0c['artist']||_0x4f99ef(0x103),'thumbnail':_0xa9eb0c[_0x4f99ef(0x11a)],'url':_0xa9eb0c[_0x4f99ef(0xb0)]}));}catch(_0x555f57){return[];}}async function ytsearch(_0x29db34){const _0x15325f=_0x411061;try{let _0x5bc6f1=await yts(_0x29db34),_0x54768d=_0x5bc6f1[_0x15325f(0xe9)][_0x15325f(0xdf)](_0x39b132=>_0x39b132[_0x15325f(0xf8)]==='video');return _0x54768d['map']((_0x518aaa,_0x1290c6)=>({'nro':_0x1290c6+0x1,'title':_0x518aaa[_0x15325f(0x101)],'duration':_0x518aaa[_0x15325f(0x70)]||_0x15325f(0x9a),'published':formatPublishedTime(_0x518aaa[_0x15325f(0x8d)]),'author':_0x518aaa[_0x15325f(0xd0)][_0x15325f(0x7d)]||_0x15325f(0x103),'thumbnail':_0x518aaa[_0x15325f(0x8e)],'url':_0x15325f(0xf0)+_0x518aaa[_0x15325f(0xbb)]}));}catch(_0x3194d1){return[];}}function formatPublishedTime(_0x3c31eb){const _0x3aad1a=_0x411061;if(!_0x3c31eb)return _0x3aad1a(0x9a);if(_0x3c31eb[_0x3aad1a(0x10d)](_0x3aad1a(0xc9)))return _0x3aad1a(0xf2)+_0x3c31eb[_0x3aad1a(0xfc)](_0x3aad1a(0x125),'')[_0x3aad1a(0x122)]()+(_0x3c31eb[_0x3aad1a(0x10d)](_0x3aad1a(0xa2))?_0x3aad1a(0xfd):_0x3aad1a(0xab));else{if(_0x3c31eb[_0x3aad1a(0x10d)](_0x3aad1a(0x121)))return _0x3aad1a(0xf2)+_0x3c31eb['replace'](_0x3aad1a(0xee),'')[_0x3aad1a(0x122)]()+(_0x3c31eb[_0x3aad1a(0x10d)]('year\x20ago')?'\x20año':_0x3aad1a(0xb1));else{if(_0x3c31eb[_0x3aad1a(0x10d)](_0x3aad1a(0x6c)))return _0x3aad1a(0xf2)+_0x3c31eb[_0x3aad1a(0xfc)](_0x3aad1a(0x85),'')[_0x3aad1a(0x122)]()+(_0x3c31eb[_0x3aad1a(0x10d)](_0x3aad1a(0x11b))?_0x3aad1a(0xcc):_0x3aad1a(0xed));else{if(_0x3c31eb[_0x3aad1a(0x10d)](_0x3aad1a(0xad)))return'hace\x20'+_0x3c31eb['replace'](_0x3aad1a(0x10f),'')[_0x3aad1a(0x122)]()+(_0x3c31eb['includes'](_0x3aad1a(0xa9))?_0x3aad1a(0x118):_0x3aad1a(0xd4));else return _0x3c31eb[_0x3aad1a(0x10d)](_0x3aad1a(0xe1))?'hace\x20'+_0x3c31eb['replace'](_0x3aad1a(0xbe),'')[_0x3aad1a(0x122)]()+(_0x3c31eb['includes'](_0x3aad1a(0x105))?_0x3aad1a(0xdb):_0x3aad1a(0xa7)):_0x3c31eb;}}}}async function igstalk(_0xcd4785){const _0xdb925d=_0x411061;try{let _0x47a287=await igstalk2(_0xcd4785),_0x73e380=_0x47a287[_0xdb925d(0x95)],_0x29f8d5=_0x47a287[_0xdb925d(0x9c)],_0x296a26=_0x47a287[_0xdb925d(0x77)],_0x17a84d=_0x47a287[_0xdb925d(0xe3)],_0x2b13f7=_0x47a287[_0xdb925d(0x83)],_0x501970=_0x47a287['bio'],_0x3957cb=_0x47a287[_0xdb925d(0x6a)],_0x27a759=_0x47a287[_0xdb925d(0xb0)];return{'username':_0x73e380,'name':_0x29f8d5,'post':_0x296a26,'followers':_0x17a84d,'following':_0x2b13f7,'bio':_0x501970,'thumbnail':_0x3957cb,'url':_0x27a759};}catch{}}async function igstalk2(_0xce0471){const _0x476f1e=_0x411061;try{const _0x59f1a3=await axios[_0x476f1e(0xca)]('https://dumpoir.com/v/'+_0xce0471,{'headers':{'user-agent':_0x476f1e(0x97)}}),_0x2ee06c=cheerio[_0x476f1e(0xbf)](_0x59f1a3[_0x476f1e(0xb6)]),_0x97e7da={'bio':_0x2ee06c('#user-page\x20>\x20div.user\x20>\x20div\x20>\x20div.col-md-5.my-3\x20>\x20div')[_0x476f1e(0x86)]()[_0x476f1e(0x122)](),'followers':_0x2ee06c('#user-page\x20>\x20div.user\x20>\x20div\x20>\x20div.col-md-4.col-8.my-3\x20>\x20ul\x20>\x20li:nth-child(2)')[_0x476f1e(0x86)]()['replace'](_0x476f1e(0x110),'')[_0x476f1e(0x122)](),'following':_0x2ee06c(_0x476f1e(0xd5))[_0x476f1e(0x86)]()['replace']('\x20Following','')['trim'](),'fullname':_0x2ee06c(_0x476f1e(0x76))[_0x476f1e(0x86)]()[_0x476f1e(0x122)](),'post':_0x2ee06c('#user-page\x20>\x20div.user\x20>\x20div\x20>\x20div.col-md-4.col-8.my-3\x20>\x20ul\x20>\x20li:nth-child(1)')[_0x476f1e(0x86)]()[_0x476f1e(0xfc)](_0x476f1e(0xfa),'')['trim'](),'profile':_0x2ee06c('#user-page\x20>\x20div.user\x20>\x20div.row\x20>\x20div\x20>\x20div.user__img')[_0x476f1e(0x78)](_0x476f1e(0xba))[_0x476f1e(0xfc)](/(background-image: url\(\'|\'\);)/gi,'')[_0x476f1e(0x122)](),'status':0xc8,'url':_0x476f1e(0x72)+_0xce0471[_0x476f1e(0xfc)]('@',''),'username':'@'+_0xce0471};return _0x97e7da;}catch(_0xfac5d6){if(_0xfac5d6['response']?.['status']===0x194){}else{if(_0xfac5d6[_0x476f1e(0x114)]?.[_0x476f1e(0x89)]===0x193){}else{}}}}async function xnxxdl(_0x29036b){const _0x3c672d=_0x411061;try{let _0x549695=await fg[_0x3c672d(0x84)](_0x29036b),_0x3d0e1c=_0x549695[_0x3c672d(0x101)],_0x47248a=_0x549695['duration'],_0x322727=_0x549695[_0x3c672d(0xf3)],_0x863195=_0x549695[_0x3c672d(0x111)],_0x20dfd3=await shortenUrl(_0x863195);return{'title':_0x3d0e1c,'duration':_0x47248a,'quality':_0x322727,'dl_url':_0x20dfd3};}catch{}}async function ppcouple(_0x36b610){const _0x21e94c=_0x411061;try{let _0xba1044=par[_0x21e94c(0xa3)](),_0x453eb7=_0xba1044[_0x21e94c(0x88)],_0x1aac2a=_0xba1044[_0x21e94c(0xe4)];return{'women':_0x453eb7,'man':_0x1aac2a};}catch{}}function pickRandom(_0x3cd456){const _0x568721=_0x411061;return _0x3cd456[Math[_0x568721(0x107)](_0x3cd456[_0x568721(0x109)]*Math[_0x568721(0x12e)]())];}const par=[{'male':_0x411061(0xe2),'female':_0x411061(0x126)},{'male':_0x411061(0xb4),'female':_0x411061(0x9f)},{'male':_0x411061(0xaf),'female':_0x411061(0xb2)},{'male':_0x411061(0xae),'female':_0x411061(0x91)},{'male':'https://i.ibb.co/DbMk8nL/957395cbf134.jpg','female':_0x411061(0x136)},{'male':_0x411061(0x10c),'female':'https://i.ibb.co/4Z5rJrn/465bf6b56d86.jpg'},{'male':_0x411061(0x12b),'female':_0x411061(0xd2)},{'male':_0x411061(0x6d),'female':'https://i.ibb.co/CWx3NYc/8ad244372d8f.jpg'},{'male':_0x411061(0x129),'female':_0x411061(0x81)},{'male':_0x411061(0x12f),'female':'https://i.ibb.co/gPFp1DG/0e16334be10c.jpg'},{'male':_0x411061(0xc8),'female':_0x411061(0xc7)},{'male':_0x411061(0xeb),'female':_0x411061(0xec)},{'male':_0x411061(0xe6),'female':_0x411061(0xb5)},{'male':_0x411061(0xd3),'female':_0x411061(0xe5)},{'male':_0x411061(0x10e),'female':_0x411061(0x133)},{'male':_0x411061(0x8b),'female':_0x411061(0xde)},{'male':_0x411061(0xd7),'female':_0x411061(0xd1)},{'male':'https://i.ibb.co/NW2dv07/58348a3d4008.jpg','female':_0x411061(0x135)},{'male':'https://i.ibb.co/b3sMMnW/a13cdff40c6e.jpg','female':_0x411061(0x8a)},{'male':'https://i.ibb.co/JzMhQ2P/45754b045a6d.jpg','female':'https://i.ibb.co/nmftFnS/a1f2218f7c32.jpg'},{'male':'https://i.ibb.co/R72GdTZ/30ebace5e0c1.jpg','female':_0x411061(0x116)},{'male':_0x411061(0x82),'female':'https://i.ibb.co/4gK0fVL/da35fc940b11.jpg'},{'male':_0x411061(0x124),'female':_0x411061(0x127)},{'male':'https://i.ibb.co/CJpdHyJ/348e5a66c088.jpg','female':_0x411061(0xb3)},{'male':_0x411061(0x6e),'female':_0x411061(0x11d)},{'male':_0x411061(0xfe),'female':_0x411061(0x9d)},{'male':'https://i.ibb.co/LpctfNL/e1a158f621ba.jpg','female':_0x411061(0x130)},{'male':_0x411061(0x117),'female':'https://i.ibb.co/DMPWv4S/e3af8d2a6673.jpg'},{'male':_0x411061(0x11c),'female':_0x411061(0xf4)},{'male':_0x411061(0xc4),'female':_0x411061(0xbd)},{'male':_0x411061(0xb8),'female':'https://i.pinimg.com/564x/f7/c1/21/f7c1219f9cd57d13b393442d6254b4e7.jpg'},{'male':_0x411061(0xf5),'female':'https://i.pinimg.com/564x/fd/53/41/fd5341a0aed334e24a538069294178bb.jpg'},{'male':_0x411061(0x11e),'female':_0x411061(0xd8)},{'male':'https://i.pinimg.com/564x/c2/8c/24/c28c2478c763c9c900c60b9fedd0717b.jpg','female':'https://i.pinimg.com/564x/8f/4b/4a/8f4b4a9f2e428a359442500d3c0f9814.jpg'},{'male':_0x411061(0x113),'female':_0x411061(0xc5)},{'male':_0x411061(0x98),'female':_0x411061(0x94)},{'male':_0x411061(0xcf),'female':_0x411061(0x12a)},{'male':_0x411061(0xf6),'female':_0x411061(0x100)},{'male':'https://i.pinimg.com/564x/a9/62/b7/a962b76b85315528c298a2049e3e229c.jpg','female':'https://i.pinimg.com/564x/1a/f5/e4/1af5e46db62d937931ed19f3bf4d4c12.jpg'},{'male':'https://i.pinimg.com/564x/15/14/67/1514672667b75047735d9582b6f98ac8.jpg','female':_0x411061(0xd9)},{'male':'https://i.pinimg.com/564x/e4/cd/ae/e4cdae6c3cd69e33b5286aa88b93bda6.jpg','female':'https://i.pinimg.com/564x/75/1a/c6/751ac6fa3126adb4a89586e34ccdac03.jpg'}];async function shortenUrl(_0x47a689){const _0x2e0042=_0x411061;try{const _0x420257=await import(_0x2e0042(0x73));let _0x8448a5=await _0x420257[_0x2e0042(0xaa)](_0x2e0042(0xe0)+_0x47a689);return await _0x8448a5[_0x2e0042(0x86)]();}catch{}}module['exports']={'aptoide':aptoide,'fbdl':fbdl,'GDriveDl':GDriveDl,'GoogleImage':GoogleImage,'igdl':igdl,'igstalk':igstalk,'mediafire':mediafire,'openAi':openAi,'rule34':rule34,'tiktokdl':tiktokdl,'spotifySearch':spotifySearch,'spotify':spotify,'soundSearch':soundSearch,'pinterest':pinterest,'ppcouple':ppcouple,'xnxxdl':xnxxdl,'ytsearch':ytsearch,'ytmp3':ytmp3,'ytmp4':ytmp4};