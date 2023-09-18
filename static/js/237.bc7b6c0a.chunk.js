"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[237],{237:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var o=n(2791),r=n(3736),i=n(4942),a=n(3366),s=n(7462),c=n(8182),u=n(2466),d=n(4419),l=n(1217),p=n(3457),m=n(7078),f=n(8519),v=n(5080),h=n(1184),x=n(5682),b=n(3329),Z=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,v.Z)(),k=(0,p.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function S(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:g})}function y(e,t){var n=o.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,i){return e.push(r),i<n.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(i)})),e}),[])}var W=function(e){var t=e.ownerState,n=e.theme,o=(0,s.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:n},(0,h.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var r=(0,x.hB)(n),a=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),c=(0,h.P$)({values:t.direction,base:a}),d=(0,h.P$)({values:t.spacing,base:a});"object"===typeof c&&Object.keys(c).forEach((function(e,t,n){if(!c[e]){var o=t>0?c[n[t-1]]:"column";c[e]=o}}));o=(0,u.Z)(o,(0,h.k9)({theme:n},d,(function(e,n){return t.useFlexGap?{gap:(0,x.NA)(r,e)}:{"& > :not(style) + :not(style)":(0,i.Z)({margin:0},"margin".concat((o=n?c[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,x.NA)(r,e))};var o})))}return o=(0,h.dt)(n.breakpoints,o)};var j=n(6934),w=n(1402),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?k:t,r=e.useThemeProps,i=void 0===r?S:r,u=e.componentName,p=void 0===u?"MuiStack":u,m=function(){return(0,d.Z)({root:["root"]},(function(e){return(0,l.Z)(p,e)}),{})},v=n(W),h=o.forwardRef((function(e,t){var n=i(e),o=(0,f.Z)(n),r=o.component,u=void 0===r?"div":r,d=o.direction,l=void 0===d?"column":d,p=o.spacing,h=void 0===p?0:p,x=o.divider,g=o.children,k=o.className,S=o.useFlexGap,W=void 0!==S&&S,j=(0,a.Z)(o,Z),w={direction:l,spacing:h,useFlexGap:W},C=m();return(0,b.jsx)(v,(0,s.Z)({as:u,ownerState:w,ref:t,className:(0,c.Z)(C.root,k)},j,{children:x?y(g,x):g}))}));return h}({createStyledComponent:(0,j.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiStack"})}}),G=C,R=n(4554),M=n(890),P=n(9164),N=n(7107),T=n(4507),L=n(9434),B=n(7689),F=n(9273),A=(0,N.Z)();function O(){var e=(0,L.v9)((function(e){return e.auth})).user,t=(0,L.I0)(),n=(0,B.s0)();return(0,b.jsx)(T.Z,{theme:A,children:(0,b.jsx)("main",{children:(0,b.jsx)(R.Z,{sx:{bgcolor:"background.paper",pt:8,pb:6,marginTop:20},children:(0,b.jsxs)(P.Z,{maxWidth:"xl",children:[e&&(0,b.jsx)(M.Z,{component:"h1",variant:"h5",align:"center",color:"text.primary",gutterBottom:!0,children:e.email}),(0,b.jsxs)(G,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:[(0,b.jsx)(r.Z,{variant:"contained",onClick:function(){n("/contacts")},children:"Phonebook"}),(0,b.jsx)(r.Z,{variant:"outlined",onClick:function(){t((0,F.ni)())},children:"Logout"})]})]})})})})}},9164:function(e,t,n){n.d(t,{Z:function(){return W}});var o=n(4942),r=n(3366),i=n(7462),a=n(2791),s=n(8182),c=n(7312),u=n(1217),d=n(4419),l=n(7078),p=n(3457),m=n(5080),f=n(3329),v=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.Z)(),x=(0,p.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:h})},Z=function(e,t){var n=e.classes,o=e.fixed,r=e.disableGutters,i=e.maxWidth,a={root:["root",i&&"maxWidth".concat((0,c.Z)(String(i))),o&&"fixed",r&&"disableGutters"]};return(0,d.Z)(a,(function(e){return(0,u.Z)(t,e)}),n)};var g=n(4036),k=n(6934),S=n(1402),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?x:t,c=e.useThemeProps,u=void 0===c?b:c,d=e.componentName,l=void 0===d?"MuiContainer":d,p=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var o=n,r=t.breakpoints.values[o];return 0!==r&&(e[t.breakpoints.up(o)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,o.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),m=a.forwardRef((function(e,t){var n=u(e),o=n.className,a=n.component,c=void 0===a?"div":a,d=n.disableGutters,m=void 0!==d&&d,h=n.fixed,x=void 0!==h&&h,b=n.maxWidth,g=void 0===b?"lg":b,k=(0,r.Z)(n,v),S=(0,i.Z)({},n,{component:c,disableGutters:m,fixed:x,maxWidth:g}),y=Z(S,l);return(0,f.jsx)(p,(0,i.Z)({as:c,ownerState:S,className:(0,s.Z)(y.root,o),ref:t},k))}));return m}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiContainer"})}}),W=y},3457:function(e,t,n){var o=(0,n(4046).ZP)();t.Z=o}}]);
//# sourceMappingURL=237.bc7b6c0a.chunk.js.map