(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(344),i=a(345),l=a(346),c=a(348),s=a(349),u=a(169),d=(a(159),function(){return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(c.a,null))}),m=a(7),f=a.n(m),p=(a(154),a(153)),y=a(336),h=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}f()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:y.data,layout:y.layout,config:y.config};this.setState(e)},a.render=function(){return r.a.createElement(p.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component),g=a(337),b=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}f()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:g.data,layout:g.layout,config:g.config};this.setState(e)},a.render=function(){return r.a.createElement(p.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component),x=a(338),v=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}f()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:x.data,layout:x.layout,config:x.config};this.setState(e)},a.render=function(){return r.a.createElement(p.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component),E=a(339),w=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}f()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:E.data,layout:E.layout,config:E.config};this.setState(e)},a.render=function(){return r.a.createElement(p.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component),A=function(e){function t(){return e.call(this)||this}f()(t,e);var a=t.prototype;return a.renderByYear=function(){return r.a.createElement("div",{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h4",null,"Number of active NOPD officers"),r.a.createElement("p",null,"The number of officers has increased slowly over the past years."))),r.a.createElement(c.a,null,r.a.createElement(s.a,{md:"6"},r.a.createElement(h,null)),r.a.createElement(s.a,{md:"6"},r.a.createElement(w,null))))},a.renderByRaceSex=function(){return r.a.createElement("div",{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h4",null,"Officer demographics"))),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h4",null,"Officers by sex"),r.a.createElement(v,null)),r.a.createElement(s.a,null,r.a.createElement("h4",null,"Officers by race"),r.a.createElement(b,null))))},a.render=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h2",{id:"officers-demographics-section"},"Demographics of active NOPD officers"),r.a.createElement("p",null,"Note: NOPD has constrained OIPM's access to officer ZIP codes and we are currently unable to reproduce our 2017 map of officer ZIPs."))),this.renderByYear(),this.renderByRaceSex())},t}(r.a.Component);t.default=function(){return r.a.createElement(u.a,{title:"Officers - 2018 OIPM Annual Report",nav:r.a.createElement(o.a,{className:"mt-4",vertical:!0},r.a.createElement(i.a,null,r.a.createElement(l.a,{href:"#officers-introduction-section",className:"text-white"},"Introduction & terms")),r.a.createElement(i.a,null,r.a.createElement(l.a,{href:"#officers-demographics-section",className:"text-white"},"Officer demographics"))),body:r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h1",{className:"my-5 text-center"},"NOPD Officer Details"))),r.a.createElement(d,null),r.a.createElement(A,null))})}},153:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=(a(33),a(177)),c=a.n(l),s=a(178),u=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}r()(t,e);var a=t.prototype;return a.genResponsiveConfig=function(e){var t=e;return t.responsive=!0,t},a.genResponsiveLayout=function(e){var t="Times New Roman, monospace";if(this.props.layoutOverride){var a=this.props.layoutOverride;return a.font={},a.font.family=t,a}var n=e;return n.legend={x:0,y:this.props.yoffset||-.35},n.font={},n.font.family=t,n},a.renderLoading=function(){return i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(s.MoonLoader,{loading:!0,size:6,sizeUnit:"rem"}))},a.render=function(){var e=this;return this.props.data?i.a.createElement(c.a,{data:this.props.data,layout:this.genResponsiveLayout(this.props.layout),config:this.genResponsiveConfig(this.props.config),onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)},useResizeHandler:!0,style:{width:"100%"}}):this.renderLoading()},t}(i.a.Component);t.a=u},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(158);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},159:function(e,t,a){"use strict";var n=a(167),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(176),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},165:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report"}}}}},166:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVQ4y12UCUzTdxTH/1i3hJjpjmTuyDbd4UZQ51yyzDl1ynTZFMYmUScYRUVRAUEu8aggCFIRgRbklIHaKndLtSooVEq5ihdUiFylQC9Ki4AHPX7f/fs3HvMlL3nv/X7vk98vv+/vUT1dNymHPTE2O1FOftSrBsDhzrRPp/0dYGQaUMl6dY9HYq1T9809To5YUR36rDhhUDi9hJhdbJZR/x6NIV/W3ie71trRUyxVGC7ekJtEdbIBiaxaIW+qEKiVZ4Pt98NcnvcpawKfMTT9DUwwoZfPuaNskp6vklvZ/BpsS78Ej7gLWByei6WReVgWeQaLwnLxRwwfW9KEiMwXIquEP3lVkiTpvLF9joNxuzrEibp7r4q5wpimdm3mlXrM3ppqd/VPtS4M4FkXh2baVkTl2iPyJfagTJHd7UCufVFIhs11e7J1lneC9W2PYzZ2diHUTRG+DkbT1fCpVEtL+RRHMqoWr4k7J4KLP9e2JCyL0CDidjCPROZfITxxPTgltfBNEpAvfWLJFxuiyWyvw8R5+T7LjmPpGOvO2uhg3K1PYVHNDXwGONItcE+8IMK83Rn0SfLIykN5WBGZBbfwDITlCLH/jBhLgtPg6puAOZti8bX3UTL9t0jL3pRCWAxXvB2MB+2lLEpel80Ate2n3TkXKvD93mz7Av9k8rlPLD7bGI0PN7DxS0Q61rBzMGvTUcz3S8Q3m4/ho78PkWkrwy2hvCLgcTsDVPfKWZSslssANW2p7sfPF+ODtbH29dF5JJBbgiOFEvBEMsScvwpvzjkEnS7Dwl1J+JaGBqWVkK/+OWoJSS+jFTXCAPW6LhZ1TXiIAfbKo9wP8rLgvGq/vbL+Hmnq6EdbnwZBmeVQG8zo15vwZNKCpaFcJJfU0BCQhdsSLcHpQkfMAIfNBhYlvhjIAO9X+7nvT+Fi5l8xdllbNxE3KlHZpESasA6FNQqUN7ShTaVFkfQ26tt70aDsI596sS0R2ZIXwNGJRyyqnB/GyKarZrt7MCcZiwMy7J1qLaEbkFEpw4KAk1gTewaiZiW4ojpHMzgXr0Pc0E5m/B5uicplgD4Ohmls9OUv6qze6rk3MQk/7uLZjxZcJjEFEqyNzYerPweecfk4UHAZXvEFiKJf25Odi9CMcuL86z7LgdxLNG+Ckc3AQN+bVMG/p993JHfK3dwikk/B42CBbedJAdmWJEAArxQH8i/BL7UIO7nF2J5SBJ/j57GVXlvLPkOW7+VZgtKKgUnV5hcnq6m97qUeMid01MUc3h0bR8shjsz3TSAuWxIwfwcH82ifvzMRP4ekYlUkDxticrE7mU9CuUXEL+EsSaY/g26wUz84pD3b2qpYSZWWCj4xjozpzNpWxGdmWn/amYxVwafIOnYW9pziEw5fAkFVI260tKOjbxC9QwYyqB8h2mETBnRG+4DeNPn4yVPodTqLVCr9gWpubtmo02k7hnRGqLQjNo3BZFHrRqz6kVH7+MQjutGMQcMoUevMxGgeh85oQr9m2N7Rb7R2DRppST2ERm982tPdJW5RKFYz15aIKz5WDWhMPVoz1MNjUOlH0T1kRnuf0Sq788BW1XCHFF66SdjZFbat8XyrbzwfeWXlaJHld+lVjX6dnd1raMwbFULhbMcAdfL0CXNqu3trwbhJ62EcNq1TKUVH5NWcwZyiQvwZlYlZ6+Mx0zMG3/mdgH9CCrIL4nR1l8MOd5a99xb1usUdP8FM5tctZxc1o1qwepuwKFiakh1tTc2Jm7wmOtTYUxcYCP2Sd5/v61LWTO3qVrFKy8uo0rKyZ0P2VEoK1Xrr1pR+tZql6u9n9an6/jfmH0qXzR2Xuc19tVYlOsLquBnBAKSVYZSoiMvU/wPTtJD2vfnAgQAAAABJRU5ErkJggg==",width:64,height:64,src:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png",srcSet:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png 1x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/35746/oipm-icon.png 1.5x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/a2862/oipm-icon.png 2x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d1d11/oipm-icon.png 3x"}}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report",description:"Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.",author:"Marvin Arnold"}}}}},168:function(e,t,a){"use strict";var n=a(165),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(154),s=(a(35),a(34)),u=a.n(s),d=a(7),m=a.n(d),f=a(340),p=a(341),y=a(342),h=a(343),g=a(344),b=a(345),x=a(346),v=(a(170),a(166)),E=a(171),w=a.n(E),A=function(){return o.a.createElement(c.b,{query:"2390269856",render:function(e){return o.a.createElement(w.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:v})},k=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(u()(a)),a.state={collapsed:!0},a}m()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},a.normalizePath=function(e){return e.replace(/\/+/g,"/")},a.withPrefix=function(e){return this.normalizePath("/oipm_annual_report_2018/"+e)},a.render=function(){return o.a.createElement("div",null,o.a.createElement(f.a,{color:"dark",light:!0,expand:"md",dark:!0},o.a.createElement(p.a,{href:this.withPrefix("/")},o.a.createElement(A,null)),o.a.createElement(y.a,{onClick:this.toggleNavbar.bind(this)}),o.a.createElement(h.a,{isOpen:this.state.collapsed,navbar:!0},o.a.createElement(g.a,{className:"ml-auto",navbar:!0},o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/force")},"Use of Force")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/complaints-highlights")},"Complaints & Misconduct")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/mediation")},"Mediation")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:this.withPrefix("/officers")},"Officer Demographics")),o.a.createElement(b.a,null,o.a.createElement(x.a,{href:"https://nolaipm.gov"},"OIPM Home"))))))},t}(o.a.Component),M=function(e){var t=e.siteTitle;return o.a.createElement("header",null,o.a.createElement(k,{siteTitle:t}))};M.propTypes={siteTitle:l.a.string},M.defaultProps={siteTitle:""};var F=M,N=(a(174),a(175),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,o.a.createElement("main",null,t),o.a.createElement("footer",null)))},data:n})});N.propTypes={children:l.a.node.isRequired};t.a=N},169:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(347),c=a(348),s=a(349),u=a(168),d=a(159),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,null,i.a.createElement(d.a,{title:this.props.title}),i.a.createElement(l.a,{fluid:!0},i.a.createElement(c.a,null,i.a.createElement(s.a,{className:"bg-secondary",xs:"12",lg:"2",md:"3"},i.a.createElement("h4",{className:"mt-5"},"Jump to..."),this.props.nav),i.a.createElement(s.a,{xs:"12",lg:"10",md:"9"},this.props.body))))},t}(i.a.Component)},336:function(e){e.exports={visdat:{"27e81198bd5f":["function () ","plotlyVisDat"]},cur_data:"27e81198bd5f",attrs:{"27e81198bd5f":{x:[2016,2017,2018],y:[1239,1275,1324],name:"Number active officers",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar"}},layout:{margin:{b:40,l:60,t:25,r:10},xaxis:{domain:[0,1],automargin:!0,dtick:1,title:[]},yaxis:{domain:[0,1],automargin:!0,title:[]},hovermode:"closest",showlegend:!1},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:[2016,2017,2018],y:[1239,1275,1324],name:"Number active officers",type:"bar",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},error_y:{color:"rgba(31,119,180,1)"},error_x:{color:"rgba(31,119,180,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},337:function(e){e.exports={visdat:{"27e84e8dee65":["function () ","plotlyVisDat"]},cur_data:"27e84e8dee65",attrs:{"27e84e8dee65":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"compare",showlegend:!0,legend:{x:0,y:-.5}},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Asian / Pacific Islander","Black / African American","Hispanic / Latinx","Native / Indigenous","Unknown race","White"],values:[14,683,55,3,45,524],textposition:["inside","inside","inside","inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},338:function(e){e.exports={visdat:{"27e8425748b3":["function () ","plotlyVisDat"]},cur_data:"27e8425748b3",attrs:{"27e8425748b3":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"compare",showlegend:!0,legend:{x:0,y:-.5}},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Female","Male","Not Specified"],values:[284,1004,36],textposition:["inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},339:function(e){e.exports={visdat:{"27e8416cffd7":["function () ","plotlyVisDat"]},cur_data:"27e8416cffd7",attrs:{"27e8416cffd7":{alpha_stroke:1,sizes:[10,100],spans:[1,20],x:{},y:{},type:"bar",name:{},color:{},inherit:!0}},layout:{margin:{b:150,l:60,t:25,r:10},barmode:"stack",hovermode:"compare",xaxis:{domain:[0,1],automargin:!0,title:"Gender",showgrid:!1,type:"category",categoryorder:"array",categoryarray:["Female","Male","Not Specified"]},yaxis:{domain:[0,1],automargin:!0,title:"Number of officers",showgrid:!0},showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:["Male"],y:[14],type:"bar",name:"Asian / Pacific Islander",marker:{color:"rgba(102,194,165,1)",line:{color:"rgba(102,194,165,1)"}},textfont:{color:"rgba(102,194,165,1)"},error_y:{color:"rgba(102,194,165,1)"},error_x:{color:"rgba(102,194,165,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Female","Male"],y:[202,481],type:"bar",name:"Black / African American",marker:{color:"rgba(252,141,98,1)",line:{color:"rgba(252,141,98,1)"}},textfont:{color:"rgba(252,141,98,1)"},error_y:{color:"rgba(252,141,98,1)"},error_x:{color:"rgba(252,141,98,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Female","Male"],y:[8,47],type:"bar",name:"Hispanic / Latinx",marker:{color:"rgba(141,160,203,1)",line:{color:"rgba(141,160,203,1)"}},textfont:{color:"rgba(141,160,203,1)"},error_y:{color:"rgba(141,160,203,1)"},error_x:{color:"rgba(141,160,203,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Male"],y:[3],type:"bar",name:"Native / Indigenous",marker:{color:"rgba(231,138,195,1)",line:{color:"rgba(231,138,195,1)"}},textfont:{color:"rgba(231,138,195,1)"},error_y:{color:"rgba(231,138,195,1)"},error_x:{color:"rgba(231,138,195,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Male","Not Specified"],y:[9,36],type:"bar",name:"Unknown race",marker:{color:"rgba(166,216,84,1)",line:{color:"rgba(166,216,84,1)"}},textfont:{color:"rgba(166,216,84,1)"},error_y:{color:"rgba(166,216,84,1)"},error_x:{color:"rgba(166,216,84,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Female","Male"],y:[74,450],type:"bar",name:"White",marker:{color:"rgba(255,217,47,1)",line:{color:"rgba(255,217,47,1)"}},textfont:{color:"rgba(255,217,47,1)"},error_y:{color:"rgba(255,217,47,1)"},error_x:{color:"rgba(255,217,47,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}}}]);
//# sourceMappingURL=component---src-pages-officers-js-b5fc887ddde5842982bc.js.map