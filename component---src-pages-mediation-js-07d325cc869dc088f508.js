(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(309),o=a(310),l=a(311),s=a(313),c=a(314),u=a(167),d=(a(161),a(7)),p=a.n(d),f=(a(152),a(151)),m=a(293),h=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:m.data,layout:m.layout,config:m.config};this.setState(e)},a.render=function(){return i.a.createElement(f.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),y=a(294),g=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:y.data,layout:y.layout,config:y.config};this.setState(e)},a.render=function(){return i.a.createElement(f.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),v=a(295),E=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:v.data,layout:v.layout,config:v.config};this.setState(e)},a.render=function(){return i.a.createElement(f.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),b=a(296),x=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:b.data,layout:b.layout,config:b.config};this.setState(e)},a.render=function(){return i.a.createElement(f.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),F=function(e){function t(){return e.call(this)||this}return p()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h2",{id:"mediation-demographics-section"},"Mediation Demographics"))),i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h4",null,"Officer race"),i.a.createElement(h,null)),i.a.createElement(c.a,null,i.a.createElement("h4",null,"Civilian race"),i.a.createElement(g,null))),i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h4",null,"Officer sex"),i.a.createElement(E,null)),i.a.createElement(c.a,null,i.a.createElement("h4",null,"Civilian sex"),i.a.createElement(x,null))))},t}(i.a.Component),w=(a(297),a(38),a(175),a(299),a(301),function(e){function t(){return e.call(this)||this}p()(t,e);var a=t.prototype;return a.genSurveys=function(e){return i.a.createElement(s.a,{key:Math.random().toString(36).substring(7)},i.a.createElement(c.a,{md:"3"}))},a.render=function(){return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h2",{id:"mediation-survey-section"},"Survey Results"))),i.a.createElement("h1",null,"Community Responses"),this.genSurveys("Community"))},t}(i.a.Component));t.default=function(){return i.a.createElement(u.a,{title:"Mediation - 2018 OIPM Annual Report",nav:i.a.createElement(r.a,{className:"mt-4",vertical:!0},i.a.createElement(o.a,null,i.a.createElement(l.a,{href:"#mediation-demographics-section",className:"text-white"},"Participant demographics")),i.a.createElement(o.a,null,i.a.createElement(l.a,{href:"#mediation-survey-section",className:"text-white"},"Survey results"))),body:i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h1",{className:"my-5 text-center"},"Mediation Program"))),i.a.createElement(F,null),i.a.createElement(w,null))})}},151:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=(a(33),a(175)),s=a.n(l),c=a(176),u=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.genResponsiveConfig=function(e){var t=e;return t.responsive=!0,t},a.genResponsiveLayout=function(e){if(this.props.layoutOverride)return this.props.layoutOverride;var t=e;return t.legend={x:0,y:this.props.yoffset||-.35},t},a.renderLoading=function(){return o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(c.MoonLoader,{loading:!0,size:6,sizeUnit:"rem"}))},a.render=function(){var e=this;return this.props.data?o.a.createElement(s.a,{data:this.props.data,layout:this.genResponsiveLayout(this.props.layout),config:this.genResponsiveConfig(this.props.config),onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)},useResizeHandler:!0,style:{width:"100%"}}):this.renderLoading()},t}(o.a.Component);t.a=u},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(156);var c=i.a.createContext({}),u=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e,t,a){"use strict";var n=a(165),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(174),c=a.n(s);function u(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},162:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},163:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report"}}}}},164:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVQ4y12UCUzTdxTH/1i3hJjpjmTuyDbd4UZQ51yyzDl1ynTZFMYmUScYRUVRAUEu8aggCFIRgRbklIHaKndLtSooVEq5ihdUiFylQC9Ki4AHPX7f/fs3HvMlL3nv/X7vk98vv+/vUT1dNymHPTE2O1FOftSrBsDhzrRPp/0dYGQaUMl6dY9HYq1T9809To5YUR36rDhhUDi9hJhdbJZR/x6NIV/W3ie71trRUyxVGC7ekJtEdbIBiaxaIW+qEKiVZ4Pt98NcnvcpawKfMTT9DUwwoZfPuaNskp6vklvZ/BpsS78Ej7gLWByei6WReVgWeQaLwnLxRwwfW9KEiMwXIquEP3lVkiTpvLF9joNxuzrEibp7r4q5wpimdm3mlXrM3ppqd/VPtS4M4FkXh2baVkTl2iPyJfagTJHd7UCufVFIhs11e7J1lneC9W2PYzZ2diHUTRG+DkbT1fCpVEtL+RRHMqoWr4k7J4KLP9e2JCyL0CDidjCPROZfITxxPTgltfBNEpAvfWLJFxuiyWyvw8R5+T7LjmPpGOvO2uhg3K1PYVHNDXwGONItcE+8IMK83Rn0SfLIykN5WBGZBbfwDITlCLH/jBhLgtPg6puAOZti8bX3UTL9t0jL3pRCWAxXvB2MB+2lLEpel80Ate2n3TkXKvD93mz7Av9k8rlPLD7bGI0PN7DxS0Q61rBzMGvTUcz3S8Q3m4/ho78PkWkrwy2hvCLgcTsDVPfKWZSslssANW2p7sfPF+ODtbH29dF5JJBbgiOFEvBEMsScvwpvzjkEnS7Dwl1J+JaGBqWVkK/+OWoJSS+jFTXCAPW6LhZ1TXiIAfbKo9wP8rLgvGq/vbL+Hmnq6EdbnwZBmeVQG8zo15vwZNKCpaFcJJfU0BCQhdsSLcHpQkfMAIfNBhYlvhjIAO9X+7nvT+Fi5l8xdllbNxE3KlHZpESasA6FNQqUN7ShTaVFkfQ26tt70aDsI596sS0R2ZIXwNGJRyyqnB/GyKarZrt7MCcZiwMy7J1qLaEbkFEpw4KAk1gTewaiZiW4ojpHMzgXr0Pc0E5m/B5uicplgD4Ohmls9OUv6qze6rk3MQk/7uLZjxZcJjEFEqyNzYerPweecfk4UHAZXvEFiKJf25Odi9CMcuL86z7LgdxLNG+Ckc3AQN+bVMG/p993JHfK3dwikk/B42CBbedJAdmWJEAArxQH8i/BL7UIO7nF2J5SBJ/j57GVXlvLPkOW7+VZgtKKgUnV5hcnq6m97qUeMid01MUc3h0bR8shjsz3TSAuWxIwfwcH82ifvzMRP4ekYlUkDxticrE7mU9CuUXEL+EsSaY/g26wUz84pD3b2qpYSZWWCj4xjozpzNpWxGdmWn/amYxVwafIOnYW9pziEw5fAkFVI260tKOjbxC9QwYyqB8h2mETBnRG+4DeNPn4yVPodTqLVCr9gWpubtmo02k7hnRGqLQjNo3BZFHrRqz6kVH7+MQjutGMQcMoUevMxGgeh85oQr9m2N7Rb7R2DRppST2ERm982tPdJW5RKFYz15aIKz5WDWhMPVoz1MNjUOlH0T1kRnuf0Sq788BW1XCHFF66SdjZFbat8XyrbzwfeWXlaJHld+lVjX6dnd1raMwbFULhbMcAdfL0CXNqu3trwbhJ62EcNq1TKUVH5NWcwZyiQvwZlYlZ6+Mx0zMG3/mdgH9CCrIL4nR1l8MOd5a99xb1usUdP8FM5tctZxc1o1qwepuwKFiakh1tTc2Jm7wmOtTYUxcYCP2Sd5/v61LWTO3qVrFKy8uo0rKyZ0P2VEoK1Xrr1pR+tZql6u9n9an6/jfmH0qXzR2Xuc19tVYlOsLquBnBAKSVYZSoiMvU/wPTtJD2vfnAgQAAAABJRU5ErkJggg==",width:64,height:64,src:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png",srcSet:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png 1x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/35746/oipm-icon.png 1.5x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/a2862/oipm-icon.png 2x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d1d11/oipm-icon.png 3x"}}}}}},165:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report",description:"Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.",author:"Marvin Arnold"}}}}},166:function(e,t,a){"use strict";var n=a(163),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(152),c=(a(35),a(34)),u=a.n(c),d=a(7),p=a.n(d),f=a(305),m=a(306),h=a(307),y=a(308),g=a(309),v=a(310),E=a(311),b=(a(168),a(164)),x=a(169),F=a.n(x),w=function(){return r.a.createElement(s.b,{query:"2390269856",render:function(e){return r.a.createElement(F.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:b})},A=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(u()(a)),a.state={collapsed:!0},a}p()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},a.normalizePath=function(e){return e.replace(/\/+/g,"/")},a.withPrefix=function(e){return this.normalizePath("/oipm_annual_report_2018/"+e)},a.render=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{color:"dark",light:!0,expand:"md",dark:!0},r.a.createElement(m.a,{href:this.withPrefix("/")},r.a.createElement(w,null)),r.a.createElement(h.a,{onClick:this.toggle}),r.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(g.a,{className:"ml-auto",navbar:!0},r.a.createElement(v.a,null,r.a.createElement(E.a,{href:this.withPrefix("/force")},"Use of Force")),r.a.createElement(v.a,null,r.a.createElement(E.a,{href:this.withPrefix("/complaints")},"Complaints & Misconduct")),r.a.createElement(v.a,null,r.a.createElement(E.a,{href:this.withPrefix("/mediation")},"Mediation")),r.a.createElement(v.a,null,r.a.createElement(E.a,{href:this.withPrefix("/officers")},"Officer Demographics")),r.a.createElement(v.a,null,r.a.createElement(E.a,{href:"https://nolaipm.gov"},"OIPM Home"))))))},t}(r.a.Component),k=function(e){var t=e.siteTitle;return r.a.createElement("header",null,r.a.createElement(A,{siteTitle:t}))};k.propTypes={siteTitle:l.a.string},k.defaultProps={siteTitle:""};var M=k,C=(a(172),a(173),function(e){var t=e.children;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",null,r.a.createElement("main",null,t),r.a.createElement("footer",null)))},data:n})});C.propTypes={children:l.a.node.isRequired};t.a=C},167:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(312),s=a(313),c=a(314),u=a(166),d=a(161),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(u.a,null,o.a.createElement(d.a,{title:this.props.title}),o.a.createElement(l.a,{fluid:!0},o.a.createElement(s.a,null,o.a.createElement(c.a,{className:"bg-secondary",xs:"12",lg:"2",md:"3"},o.a.createElement("h4",{className:"mt-5"},"Jump to..."),this.props.nav),o.a.createElement(c.a,{xs:"12",lg:"10",md:"9"},this.props.body))))},t}(o.a.Component)},293:function(e){e.exports={visdat:{"3fb238edc636":["function () ","plotlyVisDat"]},cur_data:"3fb238edc636",attrs:{"3fb238edc636":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by race",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Black","White","Hispanic"],values:[23,9,2],textposition:["inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by race",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},294:function(e){e.exports={visdat:{"3fb29378e9":["function () ","plotlyVisDat"]},cur_data:"3fb29378e9",attrs:{"3fb29378e9":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by race",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Black","White","Hispanic"],values:[16,10,1],textposition:["inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by race",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},295:function(e){e.exports={visdat:{"3fb263f09341":["function () ","plotlyVisDat"]},cur_data:"3fb263f09341",attrs:{"3fb263f09341":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by sex",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Male","Female"],values:[28,6],textposition:["inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by sex",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},296:function(e){e.exports={visdat:{"3fb23396df29":["function () ","plotlyVisDat"]},cur_data:"3fb23396df29",attrs:{"3fb23396df29":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by sex",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Male","Female"],values:[9,18],textposition:["inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by sex",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},301:function(e){e.exports={}}}]);
//# sourceMappingURL=component---src-pages-mediation-js-07d325cc869dc088f508.js.map