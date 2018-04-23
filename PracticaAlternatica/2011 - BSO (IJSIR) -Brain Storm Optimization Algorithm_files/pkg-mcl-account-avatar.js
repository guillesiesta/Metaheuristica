define("spectrum/account_menu",["require","exports","tslib","spectrum/account_menu/index"],function(e,t,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.__exportStar(r,t)}),define("spectrum/account_menu/account_menu_item",["require","exports","tslib","classnames","react","spectrum/patched_aria_menu_item/index"],function(e,t,a,r,c,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccountMenuItem=function(e){var t=e.href,n=e.className,i=e.ref,u=a.__rest(e,["href","className","ref"]),o=u.tagName,A=void 0===o?"button":o,l=a.__rest(u,["tagName"]),C=r(n,"mc-account-menu-item");return t&&!u.disabled&&(A="a"),c.createElement(s.PatchedAriaMenuItem,a.__assign({tag:A,className:C,ref:i,href:t},l))},t.AccountMenuItem.displayName="AccountMenuItem"}),define("spectrum/account_menu/account_menu_separator",["require","exports","tslib","classnames","react"],function(e,t,a,r,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccountMenuSeparator=function(e){var t=e.className,s=a.__rest(e,["className"]);return c.createElement("hr",a.__assign({className:r(t,"mc-account-menu-separator")},s))},t.AccountMenuSeparator.displayName="AccountMenuSeparator"}),define("spectrum/account_menu/account_menu_title",["require","exports","tslib","classnames","react"],function(e,t,a,r,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccountMenuTitle=function(e){var t=e.className,s=a.__rest(e,["className"]);return c.createElement("h2",a.__assign({className:r(t,"mc-account-menu-title")},s))},t.AccountMenuTitle.displayName="AccountMenuTitle"}),define("spectrum/account_menu/index",["require","exports","tslib","spectrum/account_menu/account_menu_item","spectrum/account_menu/account_menu_separator","spectrum/account_menu/account_menu_title"],function(e,t,a,r,c,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.__exportStar(r,t),a.__exportStar(c,t),a.__exportStar(s,t)}),define("spectrum/avatar",["require","exports","tslib","spectrum/avatar/index"],function(e,t,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.__exportStar(r,t)}),define("spectrum/avatar/avatar",["require","exports","tslib","classnames","react"],function(e,t,a,r,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=function(e){var t=e.className,s=e.src,n=e.srcSet,i=e.alt,u=e.size,o=void 0===u?32:u,A=e.variant,l=void 0===A?"normal":A,C=a.__rest(e,["className","src","srcSet","alt","size","variant"]),_={height:o,width:o},m=r(t,"mc-avatar"),E=r({"mc-avatar-image":!0,"mc-avatar-image-inactive":"inactive"==l});return c.createElement("div",a.__assign({className:m,style:_},C),c.createElement("img",{alt:i,className:E,src:s,srcSet:n,style:_}))},t.Avatar.displayName="Avatar"}),define("spectrum/avatar/avatar_circle_with_text",["require","exports","tslib","classnames","react"],function(e,t,a,r,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AvatarCircleWithText=function(e){var t=e.children,s=e.style,n=e.className,i=e.backgroundColor,u=e.avatarSize,o=void 0===u?32:u,A=e.variant,l=void 0===A?"normal":A,C=a.__rest(e,["children","style","className","backgroundColor","avatarSize","variant"]),_=a.__assign({},s,{height:o+"px",width:o+"px",background:""+i}),m=r(n,{"mc-avatar-text":!0,"mc-avatar-text-inactive":"inactive"===l});return c.createElement("div",a.__assign({className:m,style:_},C),t)},t.AvatarCircleWithText.displayName="AvatarCircleWithText"}),define("spectrum/avatar/avatar_color_util",["require","exports"],function(e,t){"use strict";function a(e){for(var t=5381*e.length,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<6)+(t<<16)-t);return t=Math.abs(t),r[t%r.length]}Object.defineProperty(t,"__esModule",{value:!0});var r=["#006AFF","#0073E1","#007BC3","#007F9B","#008578","#008750","#008928","#008800","#0573EB","#0579C3","#0580A0","#05857D","#058655","#058932","#05890A","#0A71F0","#0A78CD","#0A7FAA","#0A8487","#0A855F","#0A8737","#0A880F","#0F6EF5","#0F76D7","#0F7DB4","#0F818C","#0F8669","#0F8741","#0F8819","#146DFF","#1475DC","#147BBE","#14819B","#148473","#14864B","#148723","#1969FF","#1972E1","#1979C3","#1980A0","#198278","#198550","#198728","#198700","#1E70E6","#1E79C8","#1E7FA5","#1E837D","#1E8555","#1E8832","#1E880A","#236EEB","#2376D2","#237CAF","#238187","#23845F","#23883C","#238914","#286DF5","#2876D7","#287CB4","#28808C","#288469","#288541","#288619","#2D6AFA","#2D73DC","#2D7BB9","#2D8096","#2D836E","#2D8446","#2D8823","#3267FF","#3271E1","#3279C3","#327D9B","#328378","#328550","#328528","#328600","#376EE6","#3777C8","#377DA5","#37807D","#37855A","#378632","#37860A","#3C6CEB","#3C74CD","#3C7BAA","#3C8087","#3C835F","#3C8437","#3C8614","#416AF5","#4173D7","#4179B9","#417E91","#418069","#418341","#418419","#4667FA","#466FDC","#4676BE","#467B9B","#468073","#46824B","#468423","#4B63FF","#4B6DE1","#4B75BE","#4B7B9B","#4B8078","#4B8150","#4B8228","#4B8300","#5069E6","#5072C8","#5079A5","#507C7D","#50815A","#508232","#50830A","#5567F0","#556FD2","#5575AA","#557A87","#557E5F","#55823C","#558314","#5A65F5","#5A6DD7","#5A75B4","#5A7A91","#5A7D69","#5A7F41","#5A821E","#5F61FA","#5F69DC","#5F71BE","#5F779B","#5F7E50","#5F7F28","#5F8100","#6466E6","#646DC3","#6475A5","#647D55","#647E2D","#648005","#6964EB","#696BC8","#6972A5","#697C55","#697E2D","#697F05","#6E62EB","#6E6AC8","#6E71A5","#6E7C46","#6E7E1E","#7358FF","#7363E1","#736ABE","#7372A0","#785CEB","#7864CD","#786DAF","#7D53FF","#7D5EE1","#7D66C3","#7D6EA0","#8255F5","#825FD7","#8268B9","#826D91","#8756F0","#8760D2","#8766AA","#8C4AFF","#8C56E6","#8C60C8","#8C66A0","#914BF5","#9157DC","#9160BE","#916596","#964BEB","#9655D2","#965EAF","#966691","#9B47F0","#9B51D2","#9B5CB4","#9B6191","#A041F5","#A04EDC","#A058B9","#A06196","#A53BF5","#A548DC","#A553BE","#A55A96","#AA34FA","#AA42E6","#AA4FC8","#AA58A0","#AA5F78","#AA614B","#AA6623","#AF29FF","#AF38E6","#AF47D2","#AF52AF","#AF5782","#AF5E5A","#AF622D","#AF6400","#B42CF0","#B43CD7","#B447B4","#B45291","#B45864","#B45D37","#B45D05","#B919FF","#B92CE6","#B93BC8","#B94AAA","#B9547D","#B95B4B","#B95A14","#BE0CF0","#BE1FEB","#BE31CD","#BE41B4","#BE4C87","#BE5455","#BE561E","#C307EB","#C31AE1","#C32CC8","#C33DB4","#C3488C","#C34F5A","#C35428","#C803E1","#C816E1","#C826C3","#C836AF","#C8428C","#C8495F","#C84F32","#C85200","#CD11C8","#CD22C8","#CD31AF","#CD3B87","#CD4664","#CD4B37","#CD4D0A","#D20CC3","#D21CB4","#D229A0","#D23587","#D23E64","#D23F37","#D2430F","#D708AF","#D716A0","#D72291","#D73087","#D7355F","#D73A3C","#D73A14","#DC0596","#DC119B","#DC1D91","#DC256E","#DC2E5A","#DC343C","#DC3419","#E1027D","#E10C87","#E11882","#E11B5A","#E12755","#E12A37","#E12919","#E13200","#E6075F","#E60C4B","#E61655","#E61D46","#E62132","#E61B14","#E61A00","#EB0232","#EB0214","#EB0D30"];t.avatarColorForUserIdentifier=a}),define("spectrum/avatar/avatar_initials",["require","exports","tslib","classnames","react","spectrum/avatar/avatar_circle_with_text"],function(e,t,a,r,c,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AvatarInitials=function(e){var t=e.children,n=e.className,i=e.backgroundColor,u=e.avatarSize,o=void 0===u?32:u,A=e.variant,l=a.__rest(e,["children","className","backgroundColor","avatarSize","variant"]),C=r(32==o?"mc-avatar-initials-32":"mc-avatar-initials-40",n);return c.createElement("div",a.__assign({className:C},l),c.createElement(s.AvatarCircleWithText,{backgroundColor:i,avatarSize:o,variant:A},t))},t.AvatarInitials.displayName="AvatarInitials"}),define("spectrum/avatar/index",["require","exports","tslib","spectrum/avatar/avatar","spectrum/avatar/avatar_circle_with_text","spectrum/avatar/avatar_color_util","spectrum/avatar/avatar_initials"],function(e,t,a,r,c,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.__exportStar(r,t),a.__exportStar(c,t),a.__exportStar(s,t),a.__exportStar(n,t)});
//# sourceMappingURL=pkg-mcl-account-avatar.min.js-vflDvAdL-.map