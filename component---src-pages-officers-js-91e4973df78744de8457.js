(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(313),l=a(314),o=a(315),c=a(317),s=a(318),u=a(167),d=(a(161),function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h2",{id:"officers-introduction-section"},"Introduction & terms"))),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"TODO"),r.a.createElement("ul",null,r.a.createElement("li",null,"TODO")))))}),p=a(7),m=a.n(p),f=(a(152),a(151)),h=a(306),y=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:h.data,layout:h.layout,config:h.config};this.setState(e)},a.render=function(){return r.a.createElement(f.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component),g=a(307),E=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:g.data,layout:g.layout,config:g.config};this.setState(e)},a.render=function(){return r.a.createElement(f.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component),v=a(308),b=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:v.data,layout:v.layout,config:v.config};this.setState(e)},a.render=function(){return r.a.createElement(f.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(r.a.Component),x=function(e){function t(){return e.call(this)||this}m()(t,e);var a=t.prototype;return a.renderByYear=function(){return r.a.createElement("div",{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h4",null,"Number of active NOPD officers"))),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"TODO")),r.a.createElement(s.a,null,r.a.createElement(y,null))))},a.renderByRaceSex=function(){return r.a.createElement("div",{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h4",null,"Officer demographics"))),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h4",null,"Officers by sex"),r.a.createElement(b,null)),r.a.createElement(s.a,null,r.a.createElement("h4",null,"Officers by race"),r.a.createElement(E,null))))},a.render=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h2",{id:"officers-demographics-section"},"Demographics of active NOPD officers"))),this.renderByYear(),this.renderByRaceSex())},t}(r.a.Component);t.default=function(){return r.a.createElement(u.a,{title:"Officers - 2018 OIPM Annual Report",nav:r.a.createElement(i.a,{className:"mt-4",vertical:!0},r.a.createElement(l.a,null,r.a.createElement(o.a,{href:"#officers-introduction-section",className:"text-white"},"Introduction & terms")),r.a.createElement(l.a,null,r.a.createElement(o.a,{href:"#officers-demographics-section",className:"text-white"},"Officer demographics"))),body:r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("h1",{className:"my-5 text-center"},"NOPD Officer Details"))),r.a.createElement(d,null),r.a.createElement(x,null))})}},151:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=(a(33),a(175)),c=a.n(o),s=a(176),u=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}r()(t,e);var a=t.prototype;return a.genResponsiveConfig=function(e){var t=e;return t.responsive=!0,t},a.genResponsiveLayout=function(e){if(this.props.layoutOverride)return this.props.layoutOverride;var t=e;return t.legend={x:0,y:this.props.yoffset||-.35},t},a.renderLoading=function(){return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(s.MoonLoader,{loading:!0,size:6,sizeUnit:"rem"}))},a.render=function(){var e=this;return this.props.data?l.a.createElement(c.a,{data:this.props.data,layout:this.genResponsiveLayout(this.props.layout),config:this.genResponsiveConfig(this.props.config),onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)},useResizeHandler:!0,style:{width:"100%"}}):this.renderLoading()},t}(l.a.Component);t.a=u},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},156:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(174),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},162:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},163:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report"}}}}},164:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVQ4y12UCUzTdxTH/1i3hJjpjmTuyDbd4UZQ51yyzDl1ynTZFMYmUScYRUVRAUEu8aggCFIRgRbklIHaKndLtSooVEq5ihdUiFylQC9Ki4AHPX7f/fs3HvMlL3nv/X7vk98vv+/vUT1dNymHPTE2O1FOftSrBsDhzrRPp/0dYGQaUMl6dY9HYq1T9809To5YUR36rDhhUDi9hJhdbJZR/x6NIV/W3ie71trRUyxVGC7ekJtEdbIBiaxaIW+qEKiVZ4Pt98NcnvcpawKfMTT9DUwwoZfPuaNskp6vklvZ/BpsS78Ej7gLWByei6WReVgWeQaLwnLxRwwfW9KEiMwXIquEP3lVkiTpvLF9joNxuzrEibp7r4q5wpimdm3mlXrM3ppqd/VPtS4M4FkXh2baVkTl2iPyJfagTJHd7UCufVFIhs11e7J1lneC9W2PYzZ2diHUTRG+DkbT1fCpVEtL+RRHMqoWr4k7J4KLP9e2JCyL0CDidjCPROZfITxxPTgltfBNEpAvfWLJFxuiyWyvw8R5+T7LjmPpGOvO2uhg3K1PYVHNDXwGONItcE+8IMK83Rn0SfLIykN5WBGZBbfwDITlCLH/jBhLgtPg6puAOZti8bX3UTL9t0jL3pRCWAxXvB2MB+2lLEpel80Ate2n3TkXKvD93mz7Av9k8rlPLD7bGI0PN7DxS0Q61rBzMGvTUcz3S8Q3m4/ho78PkWkrwy2hvCLgcTsDVPfKWZSslssANW2p7sfPF+ODtbH29dF5JJBbgiOFEvBEMsScvwpvzjkEnS7Dwl1J+JaGBqWVkK/+OWoJSS+jFTXCAPW6LhZ1TXiIAfbKo9wP8rLgvGq/vbL+Hmnq6EdbnwZBmeVQG8zo15vwZNKCpaFcJJfU0BCQhdsSLcHpQkfMAIfNBhYlvhjIAO9X+7nvT+Fi5l8xdllbNxE3KlHZpESasA6FNQqUN7ShTaVFkfQ26tt70aDsI596sS0R2ZIXwNGJRyyqnB/GyKarZrt7MCcZiwMy7J1qLaEbkFEpw4KAk1gTewaiZiW4ojpHMzgXr0Pc0E5m/B5uicplgD4Ohmls9OUv6qze6rk3MQk/7uLZjxZcJjEFEqyNzYerPweecfk4UHAZXvEFiKJf25Odi9CMcuL86z7LgdxLNG+Ckc3AQN+bVMG/p993JHfK3dwikk/B42CBbedJAdmWJEAArxQH8i/BL7UIO7nF2J5SBJ/j57GVXlvLPkOW7+VZgtKKgUnV5hcnq6m97qUeMid01MUc3h0bR8shjsz3TSAuWxIwfwcH82ifvzMRP4ekYlUkDxticrE7mU9CuUXEL+EsSaY/g26wUz84pD3b2qpYSZWWCj4xjozpzNpWxGdmWn/amYxVwafIOnYW9pziEw5fAkFVI260tKOjbxC9QwYyqB8h2mETBnRG+4DeNPn4yVPodTqLVCr9gWpubtmo02k7hnRGqLQjNo3BZFHrRqz6kVH7+MQjutGMQcMoUevMxGgeh85oQr9m2N7Rb7R2DRppST2ERm982tPdJW5RKFYz15aIKz5WDWhMPVoz1MNjUOlH0T1kRnuf0Sq788BW1XCHFF66SdjZFbat8XyrbzwfeWXlaJHld+lVjX6dnd1raMwbFULhbMcAdfL0CXNqu3trwbhJ62EcNq1TKUVH5NWcwZyiQvwZlYlZ6+Mx0zMG3/mdgH9CCrIL4nR1l8MOd5a99xb1usUdP8FM5tctZxc1o1qwepuwKFiakh1tTc2Jm7wmOtTYUxcYCP2Sd5/v61LWTO3qVrFKy8uo0rKyZ0P2VEoK1Xrr1pR+tZql6u9n9an6/jfmH0qXzR2Xuc19tVYlOsLquBnBAKSVYZSoiMvU/wPTtJD2vfnAgQAAAABJRU5ErkJggg==",width:64,height:64,src:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png",srcSet:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png 1x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/35746/oipm-icon.png 1.5x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/a2862/oipm-icon.png 2x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d1d11/oipm-icon.png 3x"}}}}}},165:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report",description:"Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.",author:"Marvin Arnold"}}}}},166:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(152),s=(a(35),a(34)),u=a.n(s),d=a(7),p=a.n(d),m=a(309),f=a(310),h=a(311),y=a(312),g=a(313),E=a(314),v=a(315),b=(a(168),a(164)),x=a(169),A=a.n(x),w=function(){return i.a.createElement(c.b,{query:"2390269856",render:function(e){return i.a.createElement(A.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:b})},F=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(u()(a)),a.state={collapsed:!0},a}p()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},a.normalizePath=function(e){return e.replace(/\/+/g,"/")},a.withPrefix=function(e){return this.normalizePath("/oipm_annual_report_2018/"+e)},a.render=function(){return i.a.createElement("div",null,i.a.createElement(m.a,{color:"dark",light:!0,expand:"md",dark:!0},i.a.createElement(f.a,{href:this.withPrefix("/")},i.a.createElement(w,null)),i.a.createElement(h.a,{onClick:this.toggle}),i.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(g.a,{className:"ml-auto",navbar:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{href:this.withPrefix("/force")},"Use of Force")),i.a.createElement(E.a,null,i.a.createElement(v.a,{href:this.withPrefix("/complaints")},"Complaints & Misconduct")),i.a.createElement(E.a,null,i.a.createElement(v.a,{href:this.withPrefix("/mediation")},"Mediation")),i.a.createElement(E.a,null,i.a.createElement(v.a,{href:this.withPrefix("/officers")},"Officer Demographics")),i.a.createElement(E.a,null,i.a.createElement(v.a,{href:"https://nolaipm.gov"},"OIPM Home"))))))},t}(i.a.Component),k=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement(F,{siteTitle:t}))};k.propTypes={siteTitle:o.a.string},k.defaultProps={siteTitle:""};var T=k,M=(a(172),a(173),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});M.propTypes={children:o.a.node.isRequired};t.a=M},167:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(316),c=a(317),s=a(318),u=a(166),d=a(161),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(u.a,null,l.a.createElement(d.a,{title:this.props.title}),l.a.createElement(o.a,{fluid:!0},l.a.createElement(c.a,null,l.a.createElement(s.a,{className:"bg-secondary",xs:"12",lg:"2",md:"3"},l.a.createElement("h4",{className:"mt-5"},"Jump to..."),this.props.nav),l.a.createElement(s.a,{xs:"12",lg:"10",md:"9"},this.props.body))))},t}(l.a.Component)},306:function(e){e.exports={visdat:{"16677c2bade":["function () ","plotlyVisDat"]},cur_data:"16677c2bade",attrs:{"16677c2bade":{x:[2016,2017,2018],y:[1239,1275,1324],name:"Number active officers",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar"}},layout:{margin:{b:40,l:60,t:25,r:10},xaxis:{domain:[0,1],automargin:!0,dtick:1,title:[]},yaxis:{domain:[0,1],automargin:!0,title:[]},hovermode:"closest",showlegend:!1},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:[2016,2017,2018],y:[1239,1275,1324],name:"Number active officers",type:"bar",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},error_y:{color:"rgba(31,119,180,1)"},error_x:{color:"rgba(31,119,180,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},307:function(e){e.exports={visdat:{"16617b90b1c":["function () ","plotlyVisDat"]},cur_data:"16617b90b1c",attrs:{"16617b90b1c":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"compare",showlegend:!0,legend:{x:0,y:-.5}},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Asian / Pacific Islander","Black / African American","Hispanic / Latinx","Native / Indigenous","Unknown race","White"],values:[14,683,55,3,45,524],textposition:["inside","inside","inside","inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},308:function(e){e.exports={visdat:{"1663812fbd1":["function () ","plotlyVisDat"]},cur_data:"1663812fbd1",attrs:{"1663812fbd1":{labels:{},values:{},textposition:"inside",textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"compare",showlegend:!0,legend:{x:0,y:-.5}},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Female","Male","Not Specified"],values:[284,1004,36],textposition:["inside","inside","inside"],textinfo:"label+value+percent",insidetextfont:{color:"#FFFFFF"},type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}}}]);
//# sourceMappingURL=component---src-pages-officers-js-91e4973df78744de8457.js.map