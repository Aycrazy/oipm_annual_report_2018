(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(344),o=a(345),l=a(346),s=a(348),c=a(349),d=a(169),p=(a(159),a(7)),u=a.n(p),m=(a(154),a(153)),f=a(327),h=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:f.data,layout:f.layout,config:f.config};this.setState(e)},a.render=function(){return i.a.createElement(m.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),g=a(328),y=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:g.data,layout:g.layout,config:g.config};this.setState(e)},a.render=function(){return i.a.createElement(m.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),T=a(329),v=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:T.data,layout:T.layout,config:T.config};this.setState(e)},a.render=function(){return i.a.createElement(m.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),A=a(330),b=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:A.data,layout:A.layout,config:A.config};this.setState(e)},a.render=function(){return i.a.createElement(m.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component),x=function(e){function t(){return e.call(this)||this}return u()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h2",{id:"mediation-demographics-section"},"Mediation Demographics"))),i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h4",null,"Officer race"),i.a.createElement(h,null)),i.a.createElement(c.a,null,i.a.createElement("h4",null,"Civilian race"),i.a.createElement(y,null))),i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h4",null,"Officer gender"),i.a.createElement(v,null)),i.a.createElement(c.a,null,i.a.createElement("h4",null,"Civilian gender"),i.a.createElement(b,null))))},t}(i.a.Component),E=(a(331),a(38),a(177)),w=a.n(E),P=a(333),N=a.n(P),F=a(335),D=function(e){function t(){var t;return(t=e.call(this)||this).state={loaded:!1},t}u()(t,e);var a=t.prototype;return a.genSurveys=function(e){return N.a.filter(F,function(t){return t.Type===e}).map(function(e){var t=[{x:[e.Agree],y:[""],name:"Agree",orientation:"h",marker:{color:"rgba(32,86,127,0.6)",width:1},type:"bar"},{x:[e["No.opinion"]],y:[""],name:"No opinion",orientation:"h",type:"bar",marker:{color:"rgba(255,153,51,0.6)",width:1}},{x:[e.Disagree],y:[""],name:"Disagree",orientation:"h",type:"bar",marker:{color:"rgba(246,64,65,0.6)",width:1}}],a=e.Agree,n=e["Percent.Agree"],r=a+e["No.opinion"]+e.Disagree;return i.a.createElement(s.a,{key:Math.random().toString(36).substring(7)},i.a.createElement(c.a,{md:"3"},i.a.createElement(w.a,{data:t,layout:{title:!1,barmode:"stack",yaxis:{title:!1},margin:{t:0,l:10,r:10}},config:{responsive:!0},useResizeHandler:!0,style:{height:150,width:"100%"}})),i.a.createElement(c.a,{md:"9"},i.a.createElement("h4",null,i.a.createElement("strong",null,a," of ",r," (",n,") "),i.a.createElement("span",{className:"text-muted"},e.Text))))})},a.componentDidMount=function(){this.setState({loaded:!0})},a.render=function(){return this.state.loaded?i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h2",{id:"mediation-survey-section"},"Survey Results"))),i.a.createElement("h3",null,"Community Responses"),this.genSurveys("Community"),i.a.createElement("h3",null,"Officer Responses"),this.genSurveys("Officer"),i.a.createElement("h3",null,"Mediator Responses"),this.genSurveys("Mediator")):null},t}(i.a.Component);t.default=function(){return i.a.createElement(d.a,{title:"Mediation - 2018 OIPM Annual Report",nav:i.a.createElement(r.a,{className:"mt-4",vertical:!0},i.a.createElement(o.a,null,i.a.createElement(l.a,{href:"#mediation-demographics-section",className:"text-white"},"Participant demographics")),i.a.createElement(o.a,null,i.a.createElement(l.a,{href:"#mediation-survey-section",className:"text-white"},"Survey results"))),body:i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement("h1",{className:"my-5 text-center"},"Mediation Program"))),i.a.createElement(x,null),i.a.createElement(D,null))})}},153:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=(a(33),a(177)),s=a.n(l),c=a(178),d=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}i()(t,e);var a=t.prototype;return a.genResponsiveConfig=function(e){var t=e;return t.responsive=!0,t},a.genResponsiveLayout=function(e){var t="Times New Roman, monospace";if(this.props.layoutOverride){var a=this.props.layoutOverride;return a.font={},a.font.family=t,a}var n=e;return n.legend={x:0,y:this.props.yoffset||-.35},n.font={},n.font.family=t,n},a.renderLoading=function(){return o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(c.MoonLoader,{loading:!0,size:6,sizeUnit:"rem"}))},a.render=function(){var e=this;return this.props.data?o.a.createElement(s.a,{data:this.props.data,layout:this.genResponsiveLayout(this.props.layout),config:this.genResponsiveConfig(this.props.config),onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)},useResizeHandler:!0,style:{width:"100%"}}):this.renderLoading()},t}(o.a.Component);t.a=d},154:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(158);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},159:function(e,t,a){"use strict";var n=a(167),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(176),c=a.n(s);function d(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,s=n.data.site,d=t||s.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},165:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report"}}}}},166:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVQ4y12UCUzTdxTH/1i3hJjpjmTuyDbd4UZQ51yyzDl1ynTZFMYmUScYRUVRAUEu8aggCFIRgRbklIHaKndLtSooVEq5ihdUiFylQC9Ki4AHPX7f/fs3HvMlL3nv/X7vk98vv+/vUT1dNymHPTE2O1FOftSrBsDhzrRPp/0dYGQaUMl6dY9HYq1T9809To5YUR36rDhhUDi9hJhdbJZR/x6NIV/W3ie71trRUyxVGC7ekJtEdbIBiaxaIW+qEKiVZ4Pt98NcnvcpawKfMTT9DUwwoZfPuaNskp6vklvZ/BpsS78Ej7gLWByei6WReVgWeQaLwnLxRwwfW9KEiMwXIquEP3lVkiTpvLF9joNxuzrEibp7r4q5wpimdm3mlXrM3ppqd/VPtS4M4FkXh2baVkTl2iPyJfagTJHd7UCufVFIhs11e7J1lneC9W2PYzZ2diHUTRG+DkbT1fCpVEtL+RRHMqoWr4k7J4KLP9e2JCyL0CDidjCPROZfITxxPTgltfBNEpAvfWLJFxuiyWyvw8R5+T7LjmPpGOvO2uhg3K1PYVHNDXwGONItcE+8IMK83Rn0SfLIykN5WBGZBbfwDITlCLH/jBhLgtPg6puAOZti8bX3UTL9t0jL3pRCWAxXvB2MB+2lLEpel80Ate2n3TkXKvD93mz7Av9k8rlPLD7bGI0PN7DxS0Q61rBzMGvTUcz3S8Q3m4/ho78PkWkrwy2hvCLgcTsDVPfKWZSslssANW2p7sfPF+ODtbH29dF5JJBbgiOFEvBEMsScvwpvzjkEnS7Dwl1J+JaGBqWVkK/+OWoJSS+jFTXCAPW6LhZ1TXiIAfbKo9wP8rLgvGq/vbL+Hmnq6EdbnwZBmeVQG8zo15vwZNKCpaFcJJfU0BCQhdsSLcHpQkfMAIfNBhYlvhjIAO9X+7nvT+Fi5l8xdllbNxE3KlHZpESasA6FNQqUN7ShTaVFkfQ26tt70aDsI596sS0R2ZIXwNGJRyyqnB/GyKarZrt7MCcZiwMy7J1qLaEbkFEpw4KAk1gTewaiZiW4ojpHMzgXr0Pc0E5m/B5uicplgD4Ohmls9OUv6qze6rk3MQk/7uLZjxZcJjEFEqyNzYerPweecfk4UHAZXvEFiKJf25Odi9CMcuL86z7LgdxLNG+Ckc3AQN+bVMG/p993JHfK3dwikk/B42CBbedJAdmWJEAArxQH8i/BL7UIO7nF2J5SBJ/j57GVXlvLPkOW7+VZgtKKgUnV5hcnq6m97qUeMid01MUc3h0bR8shjsz3TSAuWxIwfwcH82ifvzMRP4ekYlUkDxticrE7mU9CuUXEL+EsSaY/g26wUz84pD3b2qpYSZWWCj4xjozpzNpWxGdmWn/amYxVwafIOnYW9pziEw5fAkFVI260tKOjbxC9QwYyqB8h2mETBnRG+4DeNPn4yVPodTqLVCr9gWpubtmo02k7hnRGqLQjNo3BZFHrRqz6kVH7+MQjutGMQcMoUevMxGgeh85oQr9m2N7Rb7R2DRppST2ERm982tPdJW5RKFYz15aIKz5WDWhMPVoz1MNjUOlH0T1kRnuf0Sq788BW1XCHFF66SdjZFbat8XyrbzwfeWXlaJHld+lVjX6dnd1raMwbFULhbMcAdfL0CXNqu3trwbhJ62EcNq1TKUVH5NWcwZyiQvwZlYlZ6+Mx0zMG3/mdgH9CCrIL4nR1l8MOd5a99xb1usUdP8FM5tctZxc1o1qwepuwKFiakh1tTc2Jm7wmOtTYUxcYCP2Sd5/v61LWTO3qVrFKy8uo0rKyZ0P2VEoK1Xrr1pR+tZql6u9n9an6/jfmH0qXzR2Xuc19tVYlOsLquBnBAKSVYZSoiMvU/wPTtJD2vfnAgQAAAABJRU5ErkJggg==",width:64,height:64,src:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png",srcSet:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png 1x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/35746/oipm-icon.png 1.5x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/a2862/oipm-icon.png 2x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d1d11/oipm-icon.png 3x"}}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report",description:"Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.",author:"Marvin Arnold"}}}}},168:function(e,t,a){"use strict";var n=a(165),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(154),c=(a(35),a(34)),d=a.n(c),p=a(7),u=a.n(p),m=a(340),f=a(341),h=a(342),g=a(343),y=a(344),T=a(345),v=a(346),A=(a(170),a(166)),b=a(171),x=a.n(b),E=function(){return r.a.createElement(s.b,{query:"2390269856",render:function(e){return r.a.createElement(x.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:A})},w=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(d()(a)),a.state={collapsed:!0},a}u()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},a.normalizePath=function(e){return e.replace(/\/+/g,"/")},a.withPrefix=function(e){return this.normalizePath("/oipm_annual_report_2018/"+e)},a.render=function(){return r.a.createElement("div",null,r.a.createElement(m.a,{color:"dark",light:!0,expand:"md",dark:!0},r.a.createElement(f.a,{href:this.withPrefix("/")},r.a.createElement(E,null)),r.a.createElement(h.a,{onClick:this.toggleNavbar.bind(this)}),r.a.createElement(g.a,{isOpen:this.state.collapsed,navbar:!0},r.a.createElement(y.a,{className:"ml-auto",navbar:!0},r.a.createElement(T.a,null,r.a.createElement(v.a,{href:this.withPrefix("/force")},"Use of Force")),r.a.createElement(T.a,null,r.a.createElement(v.a,{href:this.withPrefix("/complaints-highlights")},"Complaints & Misconduct")),r.a.createElement(T.a,null,r.a.createElement(v.a,{href:this.withPrefix("/mediation")},"Mediation")),r.a.createElement(T.a,null,r.a.createElement(v.a,{href:this.withPrefix("/officers")},"Officer Demographics")),r.a.createElement(T.a,null,r.a.createElement(v.a,{href:"https://nolaipm.gov"},"OIPM Home"))))))},t}(r.a.Component),P=function(e){var t=e.siteTitle;return r.a.createElement("header",null,r.a.createElement(w,{siteTitle:t}))};P.propTypes={siteTitle:l.a.string},P.defaultProps={siteTitle:""};var N=P,F=(a(174),a(175),function(e){var t=e.children;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",null,r.a.createElement("main",null,t),r.a.createElement("footer",null)))},data:n})});F.propTypes={children:l.a.node.isRequired};t.a=F},169:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(347),s=a(348),c=a(349),d=a(168),p=a(159),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,{title:this.props.title}),o.a.createElement(l.a,{fluid:!0},o.a.createElement(s.a,null,o.a.createElement(c.a,{className:"bg-secondary",xs:"12",lg:"2",md:"3"},o.a.createElement("h4",{className:"mt-5"},"Jump to..."),this.props.nav),o.a.createElement(c.a,{xs:"12",lg:"10",md:"9"},this.props.body))))},t}(o.a.Component)},327:function(e){e.exports={visdat:{"27e8392da6e7":["function () ","plotlyVisDat"]},cur_data:"27e8392da6e7",attrs:{"27e8392da6e7":{labels:{},values:{},textposition:"inside",textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by race",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Black (23 of 34)","White (9 of 34)","Hispanic (2 of 34)"],values:[23,9,2],textposition:["inside","inside","inside"],textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by race",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},328:function(e){e.exports={visdat:{"27e870133915":["function () ","plotlyVisDat"]},cur_data:"27e870133915",attrs:{"27e870133915":{labels:{},values:{},textposition:"inside",textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by race",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Black (16 of 27)","White (10 of 27)","Hispanic (1 of 27)"],values:[16,10,1],textposition:["inside","inside","inside"],textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by race",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},329:function(e){e.exports={visdat:{"27e8738615c2":["function () ","plotlyVisDat"]},cur_data:"27e8738615c2",attrs:{"27e8738615c2":{labels:{},values:{},textposition:"inside",textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by sex",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Male (28 of 34)","Female (6 of 34)"],values:[28,6],textposition:["inside","inside"],textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Officers by sex",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},330:function(e){e.exports={visdat:{"27e850da2b89":["function () ","plotlyVisDat"]},cur_data:"27e850da2b89",attrs:{"27e850da2b89":{labels:{},values:{},textposition:"inside",textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by sex",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"pie"}},layout:{margin:{b:40,l:60,t:25,r:10},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{labels:["Male (9 of 27)","Female (18 of 27)"],values:[9,18],textposition:["inside","inside"],textinfo:"label+percent",insidetextfont:{color:"#FFFFFF"},name:"Civilians by sex",type:"pie",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},335:function(e){e.exports=[{Year:2018,Type:"Community",Text:"agreed that the mediators listened to what they had to say without judging their ideas or words ",Agree:24,Disagree:1,"No.opinion":0,Total:25,"Percent.Agree":"96.00%"},{Year:2018,Type:"Community",Text:"said they would recommend mediation to other civilian complainants",Agree:20,Disagree:3,"No.opinion":2,Total:25,"Percent.Agree":"80.00%"},{Year:2018,Type:"Community",Text:"said that mediation is a good way of resolving disputes between officers and civilians",Agree:22,Disagree:1,"No.opinion":2,Total:25,"Percent.Agree":"88.00%"},{Year:2018,Type:"Community",Text:"said they would respond differently in a similar situation with a police officer in the future",Agree:18,Disagree:5,"No.opinion":2,Total:25,"Percent.Agree":"72.00%"},{Year:2018,Type:"Community",Text:"agreed that they feel they had an opportunity to explain their point of view",Agree:22,Disagree:3,"No.opinion":0,Total:25,"Percent.Agree":"88.00%"},{Year:2018,Type:"Community",Text:"said the mediation helped them to better understand the actions of the police officer",Agree:20,Disagree:4,"No.opinion":1,Total:25,"Percent.Agree":"80.00%"},{Year:2018,Type:"Community",Text:"appreciated having the mediation in a community space such as a library or school",Agree:25,Disagree:0,"No.opinion":0,Total:25,"Percent.Agree":"100.00%"},{Year:2018,Type:"Community",Text:"found it helpful to bring or have the option to bring a support person to mediation",Agree:17,Disagree:1,"No.opinion":7,Total:25,"Percent.Agree":"68.00%"},{Year:2018,Type:"Community",Text:"said that if they have a complaint against an officer in the future, they would agree to mediation ",Agree:17,Disagree:2,"No.opinion":6,Total:25,"Percent.Agree":"68.00%"},{Year:2018,Type:"Community",Text:"agreed that the mediation helped them gain a better understanding of police practices or policies ",Agree:19,Disagree:3,"No.opinion":3,Total:25,"Percent.Agree":"76.00%"},{Year:2018,Type:"Community",Text:"agreed that if they have information about a crime they would share that information with the Officer ",Agree:16,Disagree:5,"No.opinion":4,Total:25,"Percent.Agree":"64.00%"},{Year:2018,Type:"Community",Text:"agreed that the mediation helped build some level of mutual respect between them and the officer ",Agree:16,Disagree:5,"No.opinion":4,Total:25,"Percent.Agree":"64.00%"},{Year:2018,Type:"Community",Text:"believe that mediation is a better option than NOPD’s traditional investigation process",Agree:16,Disagree:3,"No.opinion":6,Total:25,"Percent.Agree":"64.00%"},{Year:2018,Type:"Community",Text:"said the process was clearly explained to them by the mediators and/or the program director ",Agree:24,Disagree:0,"No.opinion":1,Total:25,"Percent.Agree":"96.00%"},{Year:2018,Type:"Community",Text:"said the mediation ended in a resolution",Agree:17,Disagree:5,"No.opinion":3,Total:25,"Percent.Agree":"68.00%"},{Year:2018,Type:"Community",Text:"said they were satisfied with the mediation process",Agree:21,Disagree:2,"No.opinion":2,Total:25,"Percent.Agree":"84.00%"},{Year:2018,Type:"Officer",Text:"said that if they have a complaint against them in the future, they would agree to mediation",Agree:27,Disagree:1,"No.opinion":1,Total:29,"Percent.Agree":"93.10%"},{Year:2018,Type:"Officer",Text:"agreed that the mediators listened to what they had to say without judging their ideas or words ",Agree:29,Disagree:0,"No.opinion":0,Total:29,"Percent.Agree":"100.00%"},{Year:2018,Type:"Officer",Text:"agreed the mediation staff was professional and helpful",Agree:28,Disagree:0,"No.opinion":1,Total:29,"Percent.Agree":"96.55%"},{Year:2018,Type:"Officer",Text:"agreed that they feel they had an opportunity to explain their point of view",Agree:26,Disagree:1,"No.opinion":2,Total:29,"Percent.Agree":"89.66%"},{Year:2018,Type:"Officer",Text:"said they would recommend mediation to other officers",Agree:25,Disagree:4,"No.opinion":0,Total:29,"Percent.Agree":"86.21%"},{Year:2018,Type:"Officer",Text:"said they would respond differently in a similar situation in the future",Agree:17,Disagree:5,"No.opinion":7,Total:29,"Percent.Agree":"58.62%"},{Year:2018,Type:"Officer",Text:"said the mediation helped them to better understand the actions and thoughts of the civilian complainant",Agree:21,Disagree:5,"No.opinion":3,Total:29,"Percent.Agree":"72.41%"},{Year:2018,Type:"Officer",Text:"appreciated having the mediation in a community space such as a library or school ",Agree:24,Disagree:1,"No.opinion":4,Total:29,"Percent.Agree":"82.76%"},{Year:2018,Type:"Officer",Text:"found it helpful to bring or have the option to bring a support person to mediation",Agree:13,Disagree:5,"No.opinion":11,Total:29,"Percent.Agree":"44.83%"},{Year:2018,Type:"Officer",Text:"agreed that the mediation helped them gain a better understanding of how their manner of policing affects other people",Agree:21,Disagree:3,"No.opinion":5,Total:29,"Percent.Agree":"72.41%"},{Year:2018,Type:"Officer",Text:"agreed that the mediation helped build some level of mutual respect between them and the civilian complainant",Agree:20,Disagree:5,"No.opinion":4,Total:29,"Percent.Agree":"68.97%"},{Year:2018,Type:"Officer",Text:" said the mediation ended in a resolution",Agree:19,Disagree:6,"No.opinion":4,Total:29,"Percent.Agree":"65.52%"},{Year:2018,Type:"Officer",Text:"believe that mediation is a better option than the traditional investigation process",Agree:25,Disagree:0,"No.opinion":4,Total:29,"Percent.Agree":"86.21%"},{Year:2018,Type:"Officer",Text:"said that mediation is a good way of resolving disputes between officers and civilians",Agree:25,Disagree:1,"No.opinion":3,Total:29,"Percent.Agree":"86.21%"},{Year:2018,Type:"Officer",Text:"said the process was clearly explained to them by the mediators and/or the program director ",Agree:27,Disagree:0,"No.opinion":2,Total:29,"Percent.Agree":"93.10%"},{Year:2018,Type:"Officer",Text:"said they were satisfied with the mediation process",Agree:26,Disagree:1,"No.opinion":2,Total:29,"Percent.Agree":"89.66%"},{Year:2018,Type:"Mediator",Text:"of mediators observed the civilian express a better understanding of policing",Agree:17,Disagree:3,"No.opinion":9,Total:29,"Percent.Agree":"58.62%"},{Year:2018,Type:"Mediator",Text:"of mediators observed a positive shift in the civilian and police officer’s relationship",Agree:16,Disagree:6,"No.opinion":7,Total:29,"Percent.Agree":"55.17%"},{Year:2018,Type:"Mediator",Text:"of mediators observed the civilian and police officer demonstrate respect towards each other during the mediation ",Agree:20,Disagree:3,"No.opinion":6,Total:29,"Percent.Agree":"68.97%"},{Year:2018,Type:"Mediator",Text:" of mediators observed the civilian and police officer sharing an understanding of each other’s point of view",Agree:15,Disagree:5,"No.opinion":9,Total:29,"Percent.Agree":"51.72%"},{Year:2018,Type:"Mediator",Text:"of mediators said they observed the civilian and police officer demonstrate more trust in each other as the mediation meeting progressed",Agree:13,Disagree:8,"No.opinion":8,Total:29,"Percent.Agree":"44.83%"}]}}]);
//# sourceMappingURL=component---src-pages-mediation-js-4a80086144922bc6d4d7.js.map