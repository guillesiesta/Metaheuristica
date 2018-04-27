define(["require","exports"],function(L,N){"use strict";function A(L){return 0!==(1&L)}function S(L){return 0===(1&L)}function r(L,N,A){for(var S=N,r=L.length;S<r;++S)if(L[S]!==A)return S;return S}function B(L,N,A,S){for(var r=N;r<A;++r)L[r]=S}function E(L,N,A){for(var S=N,r=A-1;S<r;++S,--r){var B=L[S];L[S]=L[r],L[r]=B}}function M(L,N,A){return{str:L,dir:A?"ttb":N?"ltr":"rtl"}}function O(L,N,O){var e=!0,i=L.length;if(0===i||O)return M(L,e,O);n.length=i,o.length=i;var a,u,v=0;for(a=0;a<i;++a){n[a]=L.charAt(a);var T=L.charCodeAt(a),c="L";T<=255?c=f[T]:1424<=T&&T<=1524?c="R":1536<=T&&T<=1791?c=t[255&T]:1792<=T&&T<=2220&&(c="AL"),"R"!==c&&"AL"!==c&&"AN"!==c||v++,o[a]=c}if(0===v)return e=!0,M(L,e);N===-1&&(v/i<.3?(e=!0,N=0):(e=!1,N=1));var l=[];for(a=0;a<i;++a)l[a]=N;var h=A(N)?"R":"L",C=h,R=C,g=C;for(a=0;a<i;++a)"NSM"===o[a]?o[a]=g:g=o[a];g=C;var d;for(a=0;a<i;++a)d=o[a],"EN"===d?o[a]="AL"===g?"AN":"EN":"R"!==d&&"L"!==d&&"AL"!==d||(g=d);for(a=0;a<i;++a)d=o[a],"AL"===d&&(o[a]="R");for(a=1;a<i-1;++a)"ES"===o[a]&&"EN"===o[a-1]&&"EN"===o[a+1]&&(o[a]="EN"),"CS"!==o[a]||"EN"!==o[a-1]&&"AN"!==o[a-1]||o[a+1]!==o[a-1]||(o[a]=o[a-1]);for(a=0;a<i;++a)if("EN"===o[a]){var s;for(s=a-1;s>=0&&"ET"===o[s];--s)o[s]="EN";for(s=a+1;s<i&&"ET"===o[s];++s)o[s]="EN"}for(a=0;a<i;++a)d=o[a],"WS"!==d&&"ES"!==d&&"ET"!==d&&"CS"!==d||(o[a]="ON");for(g=C,a=0;a<i;++a)d=o[a],"EN"===d?o[a]="L"===g?"L":"EN":"R"!==d&&"L"!==d||(g=d);for(a=0;a<i;++a)if("ON"===o[a]){var b=r(o,a+1,"ON"),W=C;a>0&&(W=o[a-1]);var j=R;b+1<i&&(j=o[b+1]),"L"!==W&&(W="R"),"L"!==j&&(j="R"),W===j&&B(o,a,b,W),a=b-1}for(a=0;a<i;++a)"ON"===o[a]&&(o[a]=h);for(a=0;a<i;++a)d=o[a],S(l[a])?"R"===d?l[a]+=1:"AN"!==d&&"EN"!==d||(l[a]+=2):"L"!==d&&"AN"!==d&&"EN"!==d||(l[a]+=1);var p,_=-1,q=99;for(a=0,u=l.length;a<u;++a)p=l[a],_<p&&(_=p),q>p&&A(p)&&(q=p);for(p=_;p>=q;--p){var x=-1;for(a=0,u=l.length;a<u;++a)l[a]<p?x>=0&&(E(n,x,a),x=-1):x<0&&(x=a);x>=0&&E(n,x,l.length)}for(a=0,u=n.length;a<u;++a){var y=n[a];"<"!==y&&">"!==y||(n[a]="")}return M(n.join(""),e)}Object.defineProperty(N,"__esModule",{value:!0});var f=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],t=["AN","AN","AN","AN","AN","AN","ON","ON","AL","ET","ET","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL"],n=[],o=[];N.bidi=O});
//# sourceMappingURL=bidi.min.js-vflJd8W05.map