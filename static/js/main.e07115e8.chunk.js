(this.webpackJsonpreactpdg=this.webpackJsonpreactpdg||[]).push([[0],{325:function(e,t,a){},329:function(e,t){},331:function(e,t){},361:function(e,t){},362:function(e,t){},472:function(e,t){},742:function(e,t,a){},743:function(e,t,a){},746:function(e,t,a){},747:function(e,t,a){},748:function(e,t,a){"use strict";a.r(t);var s=a(1),o=a.n(s),r=a(301),i=a.n(r),n=a(74),c=a(12),l=(a(325),["vivienda","comercial"]),j=[{nombre:"semestral",meses:6},{nombre:"anual",meses:12},{nombre:"trimestral",meses:3},{nombre:"cuatrimestral",meses:4}],m=[{nombre:"Promo del mes",unPago:.15,tresPagos:.05,seisPagos:0},{nombre:"Renovaci\xf3n",unPago:.2,tresPagos:.2,seisPagos:.2},{nombre:"Referido inmobiliaria",unPago:.2,tresPagos:.1,seisPagos:.05},{nombre:"Garant\xeda Anticipada",unPago:.3,tresPagos:.2,seisPagos:""},{nombre:"Colectividades",unPago:.2,tresPagos:.15,seisPagos:""},{nombre:"Embajadas y Consulados",unPago:.2,tresPagos:.15,seisPagos:""},{nombre:"Convenio Estudiantes NUMES || TODO BAIRES",unPago:.25,tresPagos:.15,seisPagos:""},{nombre:"Renovaci\xf3n FINAER",unPago:.25,tresPagos:.15,seisPagos:.1},{nombre:"RESPALDAR",unPago:.3,tresPagos:.15,seisPagos:.1},{nombre:"Garant\xeda Especial",unPago:.15,tresPagos:.05,seisPagos:0},{nombre:"Globant",unPago:.25,tresPagos:.1,seisPagos:.05},{nombre:"Recupero",unPago:.3,tresPagos:.15,seisPagos:.1}],u=[{nombre:"Ana Carolina Jara Pernia",email:"ana@garantiaya.com.ar",cargo:"Asesora Comercial"},{nombre:"Angeles Torres",email:"angeles@garantiaya.com.ar",cargo:"Asesora Comercial"},{nombre:"Federico Peyras",email:"federico@garantiaya.com.ar",cargo:"Asesor Comercial"},{nombre:"Dairalys Carrero",email:"daira@garantiaya.com.ar",cargo:"Asesora Comercial"},{nombre:"Giuliana Ramirez",email:"giuliana@garantiaya.com.ar",cargo:"Asesora Comercial"},{nombre:"Josenna Di Lorenzo",email:"josenna@garantiaya.com.ar",cargo:"Asesora Comercial"},{nombre:"Marialis Fuenmayor",email:"marialis@garantiaya.com.ar",cargo:"Asesora Comercial"},{nombre:"Paz Ramos",email:"paz@garantiaya.com.ar",cargo:"Asesora Comercial"},{nombre:"Nelson Sambrano",email:"nelson@garantiaya.com.ar",cargo:"Asesor Comercial"},{nombre:"Valentina Aguilera",email:"valentina@garantiaya.com.ar",cargo:"Asesora Comercial"}],b=a(9),d=a(7),g=a(4),h=d.StyleSheet.create({pdfViewer:{height:"90vh",width:"90%",position:"absolute",left:"4%",top:"7%"},container:{height:"100vh",width:"100%"},body:{paddingTop:35,paddingBottom:65,paddingHorizontal:45,display:"flex",flexDirection:"column",border:2,borderBottomColor:"red",borderLeftColor:"red",borderRightColor:"blue",borderTopColor:"blue"},image:{width:90,height:50},containerDate:{display:"flex",marginTop:10},date:{fontSize:12,marginRight:10,textAlign:"right"},titleContainer:{display:"flex",justifyContent:"center",padding:10,marginTop:10},title:{fontSize:16,fontWeight:700,textAlign:"center",letterSpacing:1,marginBottom:15},montos:{width:"60%",display:"flex",flexDirection:"column",alignItems:"flex-start",marginBottom:15,lineHeight:1.3},text:{fontSize:12,textAlign:"justify",fontFamily:"Times-Roman",fontWeight:700},opciones:{fontSize:16,fontWeight:700,textAlign:"center",letterSpacing:1,marginBottom:15},costo:{fontSize:15,textAlign:"justify",fontWeight:700,marginBottom:15},boxPrice:{display:"flex",flexDirection:"row",alignItems:"center",margin:20},pagos:{width:280,fontSize:12},cuotas:{fontSize:10,marginTop:10,marginLeft:15,lineHeight:1.1},ahorroContainer:{display:"flex",flexDirection:"row",borderRadius:25,marginLeft:12,transform:"rotate(-2)"},ahorroImage:{width:22,height:22,textAlign:"center"},ahorroAmount:{fontSize:12,fontWeight:700,letterSpacing:1,marginLeft:10,color:"red"},nota:{fontSize:8,lineHeight:1.5,marginTop:10},asesor:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",fontSize:12,textAlign:"center",marginTop:40,lineHeight:1.5}}),x=function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)(""),n=Object(c.a)(i,2),l=n[0],j=n[1],x=Object(s.useState)(""),p=Object(c.a)(x,2),O=p[0],f=p[1],v=Object(s.useState)(""),y=Object(c.a)(v,2),A=y[0],P=y[1],S=Object(b.f)(),C=localStorage.getItem("datos")?JSON.parse(localStorage.getItem("datos")):"",N=C.alquiler,T=C.expensas,w=C.a\u00f1os,R=C.tipo_alquiler,L=C.tipoAjuste,M=C.porcentajeAjuste,q=C.promo,E=C.asesor,F=C.iva,z=C.uno,V=C.tres,I=C.seis,D=m.filter((function(e){return e.nombre===q})),$=u.filter((function(e){return e.nombre===E})),B=(new Date).toLocaleDateString();return Object(s.useEffect)((function(){"comercial"===R&&("semestral"===L?f(12*w/6):"trimestral"===L?f(12*w/3):"cuatrimestral"===L?f(12*w/4):"anual"===L&&f(12*w/12))}),[w,L,R]),Object(s.useEffect)((function(){if("comercial"===R){for(var e=[],t=0;t<O-1;t++)e[0]=N,e.push(e[t]*(M/100+1));P(Math.ceil(e.reduce((function(e,t){return e+t/O}),0)))}}),[N,A,M,O,R]),Object(s.useEffect)((function(){!1===F&&"Garant\xeda Especial"===q?j(Math.ceil((A+T)*(12*w)*.06)+N):!0===F&&"Garant\xeda Especial"===q?j(Math.ceil((A+T)*(12*w)*.06*1.21+N)):!0===F&&1===w?j(Math.ceil(1.3*(A+T)*1.21)):!1===F&&1===w?j(Math.ceil(1.3*(A+T))):!1===F?j(Math.ceil((A+T)*(12*w)*.06)):!0===F&&j(Math.ceil((A+T)*(12*w)*.06*1.21))}),[N,A,w,T,F,q]),Object(s.useEffect)((function(){"vivienda"===R&&"Garant\xeda Especial"===q?r(Math.ceil((N+T)*(12*w)*.06)+N):"vivienda"===R&&1===w?r(Math.ceil(1.3*(N+T))):"vivienda"===R&&r(Math.ceil((N+T)*(12*w)*.06))}),[R,N,T,w,q]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:function(){return S("/")},style:{width:"100%",backgroundColor:"rgba(255, 0, 0, 0.278)",border:"none",borderRadius:"5px",padding:"10px",letterSpacing:"2px",cursor:"pointer",color:"white"},children:"Nueva cotizaci\xf3n"}),Object(g.jsx)(d.PDFViewer,{style:h.pdfViewer,children:Object(g.jsx)(d.Document,{title:"Cotizaci\xf3n de garant\xeda",children:Object(g.jsxs)(d.Page,{style:h.body,size:"A4",children:[Object(g.jsx)(d.View,{children:Object(g.jsx)(d.Image,{src:"https://i.imgur.com/Z0w4GsW.png",style:h.image})}),Object(g.jsx)(d.View,{style:h.containerDate,children:Object(g.jsxs)(d.Text,{style:h.date,children:[B," "]})}),Object(g.jsx)(d.View,{style:h.titleContainer,children:Object(g.jsx)(d.Text,{style:h.title,children:"Cotizaci\xf3n"})}),Object(g.jsxs)(d.View,{style:h.montos,children:[Object(g.jsxs)(d.Text,{style:h.text,children:["Alquiler: $",N.toLocaleString("es-AR")]}),Object(g.jsxs)(d.Text,{style:h.text,children:["Expensas: $",T.toLocaleString("es-AR")]}),Object(g.jsxs)(d.Text,{style:h.text,children:["Tiempo: ",w>1?w+" a\xf1os":w+" a\xf1o"]}),"comercial"===R&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(d.Text,{style:h.text,children:["Ajuste: ",M,"%"]}),Object(g.jsxs)(d.Text,{style:h.text,children:["Tipo de ajuste: ",L]})]}),!0===F&&Object(g.jsx)(d.Text,{style:h.text,children:"IVA: 21% "})]}),Object(g.jsxs)(d.Text,{style:h.costo,children:["Costo: $","vivienda"===R?a.toLocaleString("es-AR"):l.toLocaleString("es-AR")]}),Object(g.jsx)(d.Text,{style:h.opciones,children:"Opciones de pago"}),o.a.Children.toArray(D.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[z&&Object(g.jsxs)(d.View,{style:h.boxPrice,children:[Object(g.jsxs)(d.Text,{style:h.pagos,children:["1 pago ",100*e.unPago,"% off: $","vivienda"===R?Math.ceil(a*(1-e.unPago)).toLocaleString("es-AR"):Math.ceil(l*(1-e.unPago)).toLocaleString("es-AR")]}),Object(g.jsxs)(d.View,{style:h.ahorroContainer,children:[Object(g.jsx)(d.Image,{src:"https://i.imgur.com/TCcXrha.png",style:h.ahorroImage}),Object(g.jsxs)(d.Text,{style:h.ahorroAmount,children:[" ","$","vivienda"===R?(a-Math.ceil(a*(1-e.unPago))).toLocaleString("es-AR"):(a-Math.ceil(l-l*(1-e.unPago))).toLocaleString("es-AR")]})]})]}),V&&Object(g.jsxs)(d.View,{style:h.boxPrice,children:[Object(g.jsxs)(d.View,{children:[Object(g.jsxs)(d.Text,{style:h.pagos,children:["3 cuotas sin inter\xe9s + ",100*e.tresPagos,"% off: $","vivienda"===R?Math.ceil(a*(1-e.tresPagos)).toLocaleString("es-AR"):Math.ceil(l*(1-e.tresPagos)).toLocaleString("es-AR")]}),Object(g.jsxs)(d.Text,{style:h.cuotas,children:["3 cuotas de:$","vivienda"===R?Math.ceil(a*(1-e.tresPagos)/3).toLocaleString("es-AR"):Math.ceil(l*(1-e.tresPagos)/3).toLocaleString("es-AR")]})]}),Object(g.jsx)(d.View,{style:h.ahorroContainer,children:e.tresPagos>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.Image,{src:"https://i.imgur.com/TCcXrha.png",style:h.ahorroImage}),Object(g.jsxs)(d.Text,{style:h.ahorroAmount,children:["$","vivienda"===R?(a-Math.ceil(a*(1-e.tresPagos))).toLocaleString("es-AR"):(a-Math.ceil(l-l*(1-e.tresPagos))).toLocaleString("es-AR")]})]})})]}),I&&Object(g.jsxs)(d.View,{style:h.boxPrice,children:[Object(g.jsxs)(d.View,{children:[Object(g.jsxs)(d.Text,{style:h.pagos,children:["6 cuotas sin inter\xe9s + ",100*e.seisPagos,"% off: $","vivienda"===R?Math.ceil(a*(1-e.seisPagos)).toLocaleString("es-AR"):Math.ceil(l*(1-e.seisPagos)).toLocaleString("es-AR")]}),Object(g.jsxs)(d.Text,{style:h.cuotas,children:["25% primera cuota: $","vivienda"===R?Math.ceil(a*(1-e.seisPagos)*.25).toLocaleString("es-AR"):Math.ceil(l*(1-e.seisPagos)*.25).toLocaleString("es-AR")]}),Object(g.jsxs)(d.Text,{style:h.cuotas,children:["4 cuotas sin inter\xe9s: $","vivienda"===R?Math.ceil(a*(1-e.seisPagos)*.75/4).toLocaleString("es-AR"):Math.ceil(l*(1-e.seisPagos)*.75/4).toLocaleString("es-AR")]}),Object(g.jsxs)(d.Text,{style:h.cuotas,children:["5 cuotas sin inter\xe9s: $","vivienda"===R?Math.ceil(a*(1-e.seisPagos)*.75/5).toLocaleString("es-AR"):Math.ceil(l*(1-e.seisPagos)*.75/5).toLocaleString("es-AR")]})]}),Object(g.jsx)(d.View,{style:h.ahorroContainer,children:e.seisPagos>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.Image,{src:"https://i.imgur.com/TCcXrha.png",style:h.ahorroImage}),Object(g.jsxs)(d.Text,{style:h.ahorroAmount,children:["$","vivienda"===R?(a-Math.ceil(a*(1-e.seisPagos))).toLocaleString("es-AR"):(a-Math.ceil(l-l*(1-e.seisPagos))).toLocaleString("es-AR")]})]})})]}),Object(g.jsx)(d.View,{children:Object(g.jsx)(d.Text,{style:h.nota,children:"El costo de la garant\xeda var\xeda de acuerdo al monto de alquiler, expensas, ajustes en el alquiler e IVA. En caso de que exista alguna variaci\xf3n en los costos de tu propiedad, por favor informa a tu asesor comercial para que se realicen los respectivos ajustes."})}),Object(g.jsx)(d.View,{children:o.a.Children.toArray($.map((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.View,{style:h.asesor,children:[Object(g.jsxs)(d.Text,{children:[e.nombre," "]}),Object(g.jsxs)(d.Text,{children:[e.cargo," "]}),Object(g.jsxs)(d.Text,{children:[e.email," "]}),Object(g.jsx)(d.Text,{children:"+54 9 1130350918 "})]})})})))})]})})))]})})})]})},p=a(21),O=a(41),f=(a(742),a(766)),v=a(765),y=(a(743),function(){return Object(g.jsx)("header",{className:"header-container",children:Object(g.jsx)("img",{src:"https://i.imgur.com/Z0w4GsW.png",alt:"garantiaya",className:"img-header"})})}),A=function(e){var t=e.setDatos,a=(e.setLoading,e.setTiempo,Object(b.f)()),s="Este campo es requerido",r="El tiempo m\xednimo es un a\xf1o",i="El m\xednimo es 1",n="Si no hay expensas, por favor coloque cero",c=O.c().shape({alquiler:O.b().required(s).min(1,i),expensas:O.b().required(s).min(0,n),"a\xf1os":O.b().required(s).min(1,r),tipo_alquiler:O.d().required(s),tipoAjuste:O.d(),porcentajeAjuste:O.b().min(0,n),promo:O.d().required(s),asesor:O.d().required(s),uno:O.a().isTrue(!0)});return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(y,{}),Object(g.jsx)(p.d,{initialValues:{alquiler:"",expensas:"","a\xf1os":"",tipo_alquiler:"",tipoAjuste:"",porcentajeAjuste:"",promo:"",asesor:"",iva:!1,uno:!1,tres:!1,seis:!1},validationSchema:c,onSubmit:function(e,s){var o=s.resetForm;localStorage.clear(),localStorage.setItem("datos",JSON.stringify(e)),t(e),a("/template"),o()},children:function(e){var t=e.errors,a=e.values,s=e.handleChange;return Object(g.jsx)("div",{className:"container-form",children:Object(g.jsxs)(p.c,{className:"form",children:[Object(g.jsx)("h1",{children:"Cotizador"}),Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"tipo_alquiler",className:"label",children:"Tipo de Alquiler"}),Object(g.jsxs)(p.b,{as:"select",name:"tipo_alquiler",className:"input",children:[Object(g.jsx)("option",{value:"",children:"Elige el tipo de alquiler"}),o.a.Children.toArray(l.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toUpperCase()})})))]})]}),Object(g.jsx)(p.a,{name:"tipo_alquiler",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.tipo_alquiler," "]})}}),"comercial"===a.tipo_alquiler&&Object(g.jsxs)("div",{className:"group-comercial",children:[Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"tipoAjuste",className:"label",children:"Tipo de Ajuste"}),Object(g.jsxs)(p.b,{as:"select",name:"tipoAjuste",className:"input-ajuste",children:[Object(g.jsx)("option",{value:"",children:"Escoge un tipo de ajuste"}),o.a.Children.toArray(j.map((function(e){return Object(g.jsx)("option",{value:e.nombre,children:e.nombre.toUpperCase()})})))]})]}),Object(g.jsx)(p.a,{name:"tipoAjuste",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.tipoAjuste," "]})}}),Object(g.jsxs)("div",{className:"porcentaje-switch",children:[Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"porcentajeAjuste",className:"label",children:"Ajuste"}),Object(g.jsx)(p.b,{type:"number",name:"porcentajeAjuste",className:"input-ajuste-porcentaje",min:"0"})]}),Object(g.jsx)(f.a,{control:Object(g.jsx)(v.a,{value:a.switch,name:"iva",onChange:s,color:"secondary",size:"small"}),className:"switch",label:"IVA"})]}),Object(g.jsx)(p.a,{name:"porcentajeAjuste",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.porcentajeAjuste," "]})}})]}),Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"alquiler",className:"label",children:"Alquiler"}),Object(g.jsx)(p.b,{type:"number",name:"alquiler",className:"input",min:"0"})]}),Object(g.jsx)(p.a,{name:"alquiler",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.alquiler," "]})}}),Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"expensas",className:"label",children:"Expensas"}),Object(g.jsx)(p.b,{type:"number",name:"expensas",className:"input",min:"0"})]}),Object(g.jsx)(p.a,{name:"expensas",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.expensas," "]})}}),Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"a\xf1os",className:"label",children:"A\xf1os"}),Object(g.jsx)(p.b,{type:"number",name:"a\xf1os",className:"input",min:"0"})]}),Object(g.jsx)(p.a,{name:"a\xf1os",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.a\u00f1os," "]})}}),Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"promo",className:"label",children:"Promoci\xf3n"}),Object(g.jsxs)(p.b,{as:"select",name:"promo",className:"input",children:[Object(g.jsx)("option",{value:"",children:"Escoge la promoci\xf3n"}),o.a.Children.toArray(m.map((function(e){return Object(g.jsx)("option",{value:e.nombre,children:e.nombre.toUpperCase()})})))]})]}),Object(g.jsx)(p.a,{name:"promo",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.promo," "]})}}),Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("label",{htmlFor:"asesor",className:"label",children:"Asesor"}),Object(g.jsxs)(p.b,{as:"select",name:"asesor",className:"input",children:[Object(g.jsx)("option",{value:"",children:"Escoge tu nombre"}),o.a.Children.toArray(u.sort().map((function(e){return Object(g.jsx)("option",{value:e.nombre,children:e.nombre.toUpperCase()})})))]})]}),Object(g.jsx)(p.a,{name:"asesor",component:function(){return Object(g.jsxs)("div",{className:"error",children:[t.asesor," "]})}}),a.asesor&&Object(g.jsx)("div",{className:"show-cuotas",children:Object(g.jsxs)("fieldset",{className:"fieldset",children:[Object(g.jsx)("legend",{className:"legend",children:"Cuotas a mostrar"}),Object(g.jsx)(f.a,{control:Object(g.jsx)(v.a,{value:a.uno,name:"uno",onChange:s,color:"secondary",size:"small"}),className:t.uno&&"switch-cuotas error-uno",label:"1 cuota"}),Object(g.jsx)(f.a,{control:Object(g.jsx)(v.a,{value:a.tres,name:"tres",onChange:s,color:"secondary",size:"small"}),className:"switch-cuotas",label:"3 cuotas"}),Object(g.jsx)(f.a,{control:Object(g.jsx)(v.a,{value:a.seis,name:"seis",onChange:s,color:"secondary",size:"small"}),className:"switch-cuotas",label:"6 cuotas"})]})}),Object(g.jsx)("button",{type:"submit",className:"btn",children:"Calcular"})]})})}})]})},P=(a(746),function(){var e=Object(b.f)();return Object(g.jsx)("div",{className:"error-container",children:Object(g.jsx)("button",{className:"btn-error",onClick:function(){return e("/")},children:"Volver a inicio"})})}),S=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/",element:Object(g.jsx)(A,{setDatos:o,datos:a})}),Object(g.jsx)(b.a,{path:"/template",element:Object(g.jsx)(x,{})}),Object(g.jsx)(b.a,{path:"*",element:Object(g.jsx)(P,{})})]})})},C=(a(747),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,768)).then((function(t){var a=t.getCLS,s=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),o(e),r(e),i(e)}))});i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(n.a,{basename:"cotigy/",children:Object(g.jsx)(S,{})})}),document.getElementById("root")),C()}},[[748,1,2]]]);
//# sourceMappingURL=main.e07115e8.chunk.js.map