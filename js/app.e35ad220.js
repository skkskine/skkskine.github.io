(function(n){function e(e){for(var _,a,i=e[0],s=e[1],c=e[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(_ in s)Object.prototype.hasOwnProperty.call(s,_)&&(n[_]=s[_]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],_=!0,i=1;i<t.length;i++){var s=t[i];0!==o[s]&&(_=!1)}_&&(r.splice(e--,1),n=a(a.s=t[0]))}return n}var _={},o={app:0},r=[];function a(e){if(_[e])return _[e].exports;var t=_[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=_,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var _ in n)a.d(t,_,function(e){return n[e]}.bind(null,_));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var _=t("85ec"),o=t.n(_);o.a},1883:function(n,e,t){"use strict";var _=t("f8a3"),o=t.n(_);o.a},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var _=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"},on:{click:n.focusInput}},[t("Bash",{attrs:{history:n.history},on:{"new-line":n.newLine}})],1)},r=[],a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"main"}},[""!=n.history?t("div",{attrs:{id:"hist"}},[t("pre",{attrs:{id:"title-pre"}},[n._v(" _____ _                                  _           _____      _     _                          \n|  __ (_)                                (_)         /  ___|    | |   (_)                         \n| |  \\/_  __ _ _ __  _ __ ___   __ _ _ __ _  __ _    \\ `--.  ___| |__  _ _ __   ___ _______  ___  \n| | __| |/ _` | '_ \\| '_ ` _ \\ / _` | '__| |/ _` |    `--. \\/ __| '_ \\| | '_ \\ / _ \\_  / _ \\/ __| \n| |_\\ \\ | (_| | | | | | | | | | (_| | |  | | (_| |   /\\__/ / (__| | | | | | | |  __// / (_) \\__ \\ \n \\____/_|\\__,_|_| |_|_| |_| |_|\\__,_|_|  |_|\\__,_|   \\____/ \\___|_| |_|_|_| |_|\\___/___\\___/|___/ \n                                                                                                  \n                                                                                                  \n _____                 _            _                     _   _ _ _                               \n/  __ \\               (_)          | |                   | | | (_) |                              \n| /  \\/_   _ _ __ _ __ _  ___ _   _| |_   _ _ __ ___     | | | |_| |_ __ _  ___                   \n| |   | | | | '__| '__| |/ __| | | | | | | | '_ ` _ \\    | | | | | __/ _` |/ _ \\                  \n| \\__/\\ |_| | |  | |  | | (__| |_| | | |_| | | | | | |   \\ \\_/ / | || (_| |  __/                  \n \\____/\\__,_|_|  |_|  |_|\\___|\\__,_|_|\\__,_|_| |_| |_|    \\___/|_|\\__\\__,_|\\___|                  \n                                                                                                  \n                                                                                                  \n")]),n._l(n.history,(function(e,_){return t("div",{key:_},[t("pre",{domProps:{innerHTML:n._s(e)}})])}))],2):n._e(),t("div",{attrs:{id:"input"}},[t("span",[n._v("gs-curriculum:~ guest-user$")]),t("form",{on:{submit:function(e){return e.preventDefault(),n.sendCommand(e)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.command,expression:"command"}],attrs:{id:"input-data",type:"text"},domProps:{value:n.command},on:{input:function(e){e.target.composing||(n.command=e.target.value)}}})])])])},i=[],s={name:"Bash",data:function(){return{command:""}},methods:{sendCommand:function(){var n={text:this.command};this.$emit("new-line",n),this.command=""}},props:["history"]},c=s,u=(t("1883"),t("2877")),l=Object(u["a"])(c,a,i,!1,null,null,null),m=l.exports,d={name:"App",data:function(){return{command:"",history:["gs-curriculum:~ guest-user$\nWelcome to my CV/Portfolio!\n\nUseful commands:\nbio\nskills\nportfolio\ncontact\ncommands\n\nIf you feel lost just type help and press enter :)\n\n"]}},watch:{history:function(n){n&&setTimeout((function(){window.scrollTo(0,document.body.scrollHeight)}),1)}},components:{Bash:m},mounted:function(){document.getElementById("input-data").focus()},methods:{newLine:function(n){var e="";switch(n.text){case"bio":e="\n\nBorn in Padua on 26/01/1996\nFrom 2010 to 2015 I went to ITIS Francesco Severi (Computer Science Class) in Padua\nIn 2016/2017 I attended the Web Design Course @Mind Academy\nSince 2017 I am a Front End Developer @Webculture Creative Agency in Padua\n\n";break;case"skills":e="\n\nCoding:\n-HTML 5, CSS 3, Javascript (ES6), jQuery, GSAP\n-Javascript Framework: Vue.js\n-CSS Framework: Bootstrap, Tailwind CSS\n-Git, Github and NPM\n-Wordpress Theme Development and E-commerce solutions\n-PHP, MySQL, NoSQL dbs (Firebase RTDB, MongoDB)\n\nTools:\n-Adobe XD, Sketch, Illustrator, Photoshop\n-Microsoft Office\n\nLanguages\n-Italian (Mother Tongue)\n-English (Professional Working Proficiency)\n\nOthers:\n-Domain and Hosting Management, cPanel, SSL Certs\nWork in Progress: Node.js, Express\n\n\n";break;case"contact":e='\n\nYou can reach me at <a href="mailto:gianmaria.schinezos@gmail.com">gianmaria.schinezos@gmail.com</a> or you can call me at <a href="tel:3484848387">3484848387</a>\nFind me on <a href="https://www.linkedin.com/in/gianmaria-schinezos-18b091139/" target="_blank">linkedin</a>\nMy Telegram username is gnmrschnzs\n\nBy text or by voice, I will be very happy to hear from you!\n\n';break;case"clear":this.history.length=1;break;case"help":e='\n\nThis is my bash styled CV/Portfolio\nYou can type a command and press enter to show the result\n\nFor a complete list of commands just type "commands"\n\n';break;case"commands":e="\n\n-bio\n-skills\n-portfolio\n-contact\n-credits\n-clear\n-commands\n-help\n\n";break;case"portfolio":e='\n\n<a href="https://skkskine.github.io/covid/" target="_blank">Covid-19 Data Representation (Vue.js w/ Axios)</a>\n<a target="_blank" href="https://skkskine.github.io/chat-realtime/">Realtime Chat (Vue.js + Firebase RTDB)</a>\nOther cool things are coming soon\n\n';break;case"credits":e="\n\nMade by Gianmaria Schinezos with Vue.js and some <3\n\n";break;default:e="command not found";break}"clear"!=n.text&&(this.history.push("gs-curriculum:~ guest-user$ ".concat(n.text)),this.history.push("gs-curriculum:~ guest-user$ ".concat(e)))},focusInput:function(){document.getElementById("input-data").focus()}}},p=d,f=(t("034f"),Object(u["a"])(p,o,r,!1,null,null,null)),h=f.exports;_["a"].config.productionTip=!1,new _["a"]({render:function(n){return n(h)}}).$mount("#app")},"85ec":function(n,e,t){},f8a3:function(n,e,t){}});
//# sourceMappingURL=app.e35ad220.js.map