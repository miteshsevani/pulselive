!function(e){var a={};function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)n.d(t,r,function(a){return e[a]}.bind(null,r));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="",n(n.s=0)}([function(e,a,n){"use strict";n.r(a);n(1);var t=n(4),r=document.getElementById("playerID");function s(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4916,a=0;a<t.players.length;a++)if(t.players[a].player.id==e)return t.players[a]}function o(e){var a,n,t,r,s,o="img/p".concat(e.player.id,".png"),i=e.player.currentTeam.shortName.toLowerCase().replace(" ",""),l="".concat(e.player.name.first," ").concat(e.player.name.last),u=(a=e.player.info.positionInfo,(n=a.split(" "))[n.length-1]),m=[],d={};document.getElementById("player__img").src=o,document.getElementById("player__img").alt=l,document.getElementById("player__badge").className=i,document.getElementById("player__name").innerHTML=l,document.getElementById("player__position").innerHTML=u,e.stats.map((function(e){t=Object.values(e)[0],r=Object.values(e)[1],(s=document.getElementById(t))&&s.id===t&&(s.getElementsByClassName("value")[0].innerHTML=r),"goals"!==t&&"appearances"!==t||m.push(r),"fwd_pass"!==t&&"backward_pass"!==t&&"mins_played"!==t||(d[t]=r)})),document.getElementById("gpm").getElementsByClassName("value")[0].innerHTML=function(e){return(e[0]/e[1]).toFixed(2)}(m),document.getElementById("ppm").getElementsByClassName("value")[0].innerHTML=function(e){return((e.fwd_pass+e.backward_pass)/e.mins_played).toFixed(2)}(d)}t.players.map((function(e){var a=e.player.id,n=e.player.name.first,t=e.player.name.last,s=document.createElement("option");s.textContent="".concat(n," ").concat(t),s.value=a,r.appendChild(s)})),document.getElementById("playerID").addEventListener("change",(function(){o(s(this.value))})),o(s())},function(e,a,n){var t=n(2);"string"==typeof t&&(t=[[e.i,t,""]]);var r={insert:"head",singleton:!1};n(3)(t,r);t.locals&&(e.exports=t.locals)},function(e,a,n){},function(e,a,n){"use strict";var t,r={},s=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var e={};return function(a){if(void 0===e[a]){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[a]=n}return e[a]}}();function i(e,a){for(var n=[],t={},r=0;r<e.length;r++){var s=e[r],o=a.base?s[0]+a.base:s[0],i={css:s[1],media:s[2],sourceMap:s[3]};t[o]?t[o].parts.push(i):n.push(t[o]={id:o,parts:[i]})}return n}function l(e,a){for(var n=0;n<e.length;n++){var t=e[n],s=r[t.id],o=0;if(s){for(s.refs++;o<s.parts.length;o++)s.parts[o](t.parts[o]);for(;o<t.parts.length;o++)s.parts.push(v(t.parts[o],a))}else{for(var i=[];o<t.parts.length;o++)i.push(v(t.parts[o],a));r[t.id]={id:t.id,refs:1,parts:i}}}}function u(e){var a=document.createElement("style");if(void 0===e.attributes.nonce){var t=n.nc;t&&(e.attributes.nonce=t)}if(Object.keys(e.attributes).forEach((function(n){a.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(a);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}return a}var m,d=(m=[],function(e,a){return m[e]=a,m.filter(Boolean).join("\n")});function p(e,a,n,t){var r=n?"":t.css;if(e.styleSheet)e.styleSheet.cssText=d(a,r);else{var s=document.createTextNode(r),o=e.childNodes;o[a]&&e.removeChild(o[a]),o.length?e.insertBefore(s,o[a]):e.appendChild(s)}}function c(e,a,n){var t=n.css,r=n.media,s=n.sourceMap;if(r&&e.setAttribute("media",r),s&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,y=0;function v(e,a){var n,t,r;if(a.singleton){var s=y++;n=f||(f=u(a)),t=p.bind(null,n,s,!1),r=p.bind(null,n,s,!0)}else n=u(a),t=c.bind(null,n,a),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else r()}}e.exports=function(e,a){(a=a||{}).attributes="object"==typeof a.attributes?a.attributes:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=s());var n=i(e,a);return l(n,a),function(e){for(var t=[],s=0;s<n.length;s++){var o=n[s],u=r[o.id];u&&(u.refs--,t.push(u))}e&&l(i(e,a),a);for(var m=0;m<t.length;m++){var d=t[m];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete r[d.id]}}}}},function(e){e.exports=JSON.parse('{"players":[{"player":{"info":{"position":"D","shirtNum":4,"positionInfo":"Centre/Right Central Defender"},"nationalTeam":{"isoCode":"BE","country":"Belgium","demonym":"Belgian"},"age":"27 years 139 days","name":{"first":"Toby","last":"Alderweireld"},"id":4916,"currentTeam":{"name":"Tottenham Hotspur","teamType":"FIRST","shortName":"Spurs","id":21}},"stats":[{"name":"goals","value":5},{"name":"losses","value":20},{"name":"wins","value":48},{"name":"draws","value":23},{"name":"fwd_pass","value":1533},{"name":"goal_assist","value":2},{"name":"appearances","value":80},{"name":"mins_played","value":6953},{"name":"backward_pass","value":308}]},{"player":{"info":{"position":"M","shirtNum":42,"positionInfo":"Centre Defensive Midfielder"},"nationalTeam":{"isoCode":"CI","country":"Cote D\'Ivoire","demonym":"Ivorian"},"age":"33 years 67 days","name":{"first":"Yaya","last":"Touré"},"id":4148,"currentTeam":{"name":"Manchester City","teamType":"FIRST","shortName":"Man City","id":11}},"stats":[{"name":"goals","value":65},{"name":"losses","value":49},{"name":"wins","value":149},{"name":"draws","value":35},{"name":"fwd_pass","value":4491},{"name":"goal_assist","value":35},{"name":"appearances","value":232},{"name":"mins_played","value":18919},{"name":"backward_pass","value":1995}]},{"player":{"info":{"position":"F","shirtNum":10,"positionInfo":"Left/Centre/Right Second Striker"},"nationalTeam":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"age":"30 years 269 days","name":{"first":"Wayne","last":"Rooney"},"id":2064,"currentTeam":{"name":"Manchester United","teamType":"FIRST","shortName":"Man Utd","id":12}},"stats":[{"name":"goals","value":201},{"name":"losses","value":91},{"name":"wins","value":280},{"name":"draws","value":90},{"name":"fwd_pass","value":1795},{"name":"goal_assist","value":84},{"name":"appearances","value":461},{"name":"mins_played","value":27056},{"name":"backward_pass","value":1928}]},{"player":{"info":{"position":"D","shirtNum":4,"positionInfo":"Centre Central Defender"},"nationalTeam":{"isoCode":"DE","country":"Germany","demonym":"German"},"age":"31 years 294 days","name":{"first":"Per","last":"Mertesacker"},"id":4246,"currentTeam":{"name":"Arsenal","teamType":"FIRST","shortName":"Arsenal","id":1}},"stats":[{"name":"goals","value":8},{"name":"losses","value":45},{"name":"wins","value":117},{"name":"draws","value":41},{"name":"fwd_pass","value":4257},{"name":"appearances","value":187},{"name":"mins_played","value":16531},{"name":"backward_pass","value":535}]},{"player":{"info":{"position":"M","shirtNum":26,"positionInfo":"Left/Right Winger"},"nationalTeam":{"isoCode":"DZ","country":"Algeria","demonym":"Algerian"},"age":"25 years 149 days","name":{"first":"Riyad","last":"Mahrez"},"id":8983,"currentTeam":{"name":"Leicester City","teamType":"FIRST","shortName":"Leicester","id":26}},"stats":[{"name":"goals","value":22},{"name":"losses","value":23},{"name":"wins","value":35},{"name":"draws","value":21},{"name":"fwd_pass","value":687},{"name":"goal_assist","value":14},{"name":"appearances","value":71},{"name":"mins_played","value":5368},{"name":"backward_pass","value":323}]}]}')}]);