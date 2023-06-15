"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[340],{8340:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var i=n(1413),a=(n(2791),n(3044)),r=n(3736),o=n(4708),s=n(8075),d=n(533),c=n(1889),u=n(4554),l=n(403),m=n(890),h=n(9164),x=n(7107),p=n(4507),f=n(6618),v=n(1686),Z=n.n(v),g=n(9434),b=n(8776),j=n(184);function w(e){return(0,j.jsxs)(m.Z,(0,i.Z)((0,i.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,j.jsx)(d.Z,{color:"inherit",href:"https://github.com/stanislav-pravdiuk/goit-react-hw-08-phonebook",children:"Stanislav Pravdiuk"})," ",(new Date).getFullYear(),"."]}))}var k=(0,x.Z)();function W(){var e=(0,g.I0)();return(0,j.jsx)(p.Z,{theme:k,children:(0,j.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(o.ZP,{}),(0,j.jsxs)(u.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,j.jsx)(l.Z,{})}),(0,j.jsx)(m.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,j.jsxs)(u.Z,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget),i={name:n.get("name"),email:n.get("email"),password:n.get("password")};(0,f.r4)(i).then((function(){Z().Notify.success("the user has been created"),e((0,b.Fv)({email:n.get("email"),password:n.get("password")}))})).catch((function(e){return Z().Notify.warning(e.message)}))},sx:{mt:3},children:[(0,j.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(s.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"Name",label:"Name",autoFocus:!0})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(s.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(s.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,j.jsx)(r.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,j.jsx)(c.ZP,{container:!0,justifyContent:"flex-end",children:(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(d.Z,{href:"login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),(0,j.jsx)(w,{sx:{mt:5}})]})})}},403:function(e,t,n){var i=n(4836);t.Z=void 0;var a=i(n(5649)),r=n(184),o=(0,a.default)((0,r.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=o},9164:function(e,t,n){n.d(t,{Z:function(){return W}});var i=n(4942),a=n(3366),r=n(7462),o=n(2791),s=n(8182),d=n(7312),c=n(1217),u=n(4419),l=n(7078),m=n(3457),h=n(5080),x=n(184),p=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,h.Z)(),v=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,d.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),Z=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:f})},g=function(e,t){var n=e.classes,i=e.fixed,a=e.disableGutters,r=e.maxWidth,o={root:["root",r&&"maxWidth".concat((0,d.Z)(String(r))),i&&"fixed",a&&"disableGutters"]};return(0,u.Z)(o,(function(e){return(0,c.Z)(t,e)}),n)};var b=n(4036),j=n(6934),w=n(1402),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,d=e.useThemeProps,c=void 0===d?Z:d,u=e.componentName,l=void 0===u?"MuiContainer":u,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,i.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var i=n,a=t.breakpoints.values[i];return 0!==a&&(e[t.breakpoints.up(i)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({},"xs"===n.maxWidth&&(0,i.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,i.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),h=o.forwardRef((function(e,t){var n=c(e),i=n.className,o=n.component,d=void 0===o?"div":o,u=n.disableGutters,h=void 0!==u&&u,f=n.fixed,v=void 0!==f&&f,Z=n.maxWidth,b=void 0===Z?"lg":Z,j=(0,a.Z)(n,p),w=(0,r.Z)({},n,{component:d,disableGutters:h,fixed:v,maxWidth:b}),k=g(w,l);return(0,x.jsx)(m,(0,r.Z)({as:d,ownerState:w,className:(0,s.Z)(k.root,i),ref:t},j))}));return h}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiContainer"})}}),W=k},3457:function(e,t,n){var i=(0,n(4046).ZP)();t.Z=i}}]);
//# sourceMappingURL=340.5669650a.chunk.js.map