(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),i=a.n(o),s=(a(33),a(177)),l=a.n(s),c=a(178),d=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}n()(t,e);var a=t.prototype;return a.genResponsiveConfig=function(e){var t=e;return t.responsive=!0,t},a.genResponsiveLayout=function(e){var t="Times New Roman, monospace";if(this.props.layoutOverride){var a=this.props.layoutOverride;return a.font={},a.font.family=t,a}var r=e;return r.legend={x:0,y:this.props.yoffset||-.35},r.font={},r.font.family=t,r},a.renderLoading=function(){return i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(c.MoonLoader,{loading:!0,size:6,sizeUnit:"rem"}))},a.render=function(){var e=this;return this.props.data?i.a.createElement(l.a,{data:this.props.data,layout:this.genResponsiveLayout(this.props.layout),config:this.genResponsiveConfig(this.props.config),onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)},useResizeHandler:!0,style:{width:"100%"}}):this.renderLoading()},t}(i.a.Component);t.a=d},154:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(163);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){"use strict";var r=a(169),n=a(0),o=a.n(n),i=a(4),s=a.n(i),l=a(176),c=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,s=e.title,l=r.data.site,d=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},163:function(e,t,a){var r;e.exports=(r=a(166))&&r.default||r},164:function(e,t,a){"use strict";var r=a(167),n=a(0),o=a.n(n),i=a(4),s=a.n(i),l=a(154),c=(a(35),a(34)),d=a.n(c),u=a(7),p=a.n(u),m=a(326),h=a(327),y=a(328),g=a(329),f=a(330),b=a(331),x=a(332),k=a(333),v=a(334),w=a(335),E=a(336),A=(a(172),a(168)),P=a(173),_=a.n(P),T=function(){return o.a.createElement(l.b,{query:"2390269856",render:function(e){return o.a.createElement(_.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:A})},M=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(d()(a)),a.state={collapsed:!0},a}p()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},a.normalizePath=function(e){return e.replace(/\/+/g,"/")},a.withPrefix=function(e){return this.normalizePath("/oipm_annual_report_2018/"+e)},a.render=function(){return o.a.createElement("div",null,o.a.createElement(m.a,{color:"dark",light:!0,expand:"md",dark:!0},o.a.createElement(h.a,{href:this.withPrefix("/")},o.a.createElement(T,null)),o.a.createElement(y.a,{onClick:this.toggle}),o.a.createElement(g.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(f.a,{className:"ml-auto",navbar:!0},o.a.createElement(b.a,{nav:!0,inNavbar:!0},o.a.createElement(x.a,{nav:!0,caret:!0},"Use of Force"),o.a.createElement(k.a,{right:!0},o.a.createElement(v.a,null,o.a.createElement("a",{href:this.withPrefix("/force-highlights")},"Highlights")),o.a.createElement(v.a,null,o.a.createElement("a",{href:this.withPrefix("/force")},"Full Analysis")))),o.a.createElement(b.a,{nav:!0,inNavbar:!0},o.a.createElement(x.a,{nav:!0,caret:!0},"Complaints & Misconduct"),o.a.createElement(k.a,{right:!0},o.a.createElement(v.a,null,o.a.createElement("a",{href:this.withPrefix("/complaints-highlights")},"Highlights")),o.a.createElement(v.a,null,o.a.createElement("a",{href:this.withPrefix("/complaints")},"Full Analysis")))),o.a.createElement(w.a,null,o.a.createElement(E.a,{href:this.withPrefix("/mediation")},"Mediation")),o.a.createElement(w.a,null,o.a.createElement(E.a,{href:this.withPrefix("/officers")},"Officer Demographics")),o.a.createElement(w.a,null,o.a.createElement(E.a,{href:"https://nolaipm.gov"},"OIPM Home"))))))},t}(o.a.Component),R=function(e){var t=e.siteTitle;return o.a.createElement("header",null,o.a.createElement(M,{siteTitle:t}))};R.propTypes={siteTitle:s.a.string},R.defaultProps={siteTitle:""};var D=R,z=(a(174),a(175),function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,o.a.createElement("main",null,t),o.a.createElement("footer",null)))},data:r})});z.propTypes={children:s.a.node.isRequired};t.a=z},166:function(e,t,a){"use strict";a.r(t);a(36);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},167:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report"}}}}},168:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVQ4y12UCUzTdxTH/1i3hJjpjmTuyDbd4UZQ51yyzDl1ynTZFMYmUScYRUVRAUEu8aggCFIRgRbklIHaKndLtSooVEq5ihdUiFylQC9Ki4AHPX7f/fs3HvMlL3nv/X7vk98vv+/vUT1dNymHPTE2O1FOftSrBsDhzrRPp/0dYGQaUMl6dY9HYq1T9809To5YUR36rDhhUDi9hJhdbJZR/x6NIV/W3ie71trRUyxVGC7ekJtEdbIBiaxaIW+qEKiVZ4Pt98NcnvcpawKfMTT9DUwwoZfPuaNskp6vklvZ/BpsS78Ej7gLWByei6WReVgWeQaLwnLxRwwfW9KEiMwXIquEP3lVkiTpvLF9joNxuzrEibp7r4q5wpimdm3mlXrM3ppqd/VPtS4M4FkXh2baVkTl2iPyJfagTJHd7UCufVFIhs11e7J1lneC9W2PYzZ2diHUTRG+DkbT1fCpVEtL+RRHMqoWr4k7J4KLP9e2JCyL0CDidjCPROZfITxxPTgltfBNEpAvfWLJFxuiyWyvw8R5+T7LjmPpGOvO2uhg3K1PYVHNDXwGONItcE+8IMK83Rn0SfLIykN5WBGZBbfwDITlCLH/jBhLgtPg6puAOZti8bX3UTL9t0jL3pRCWAxXvB2MB+2lLEpel80Ate2n3TkXKvD93mz7Av9k8rlPLD7bGI0PN7DxS0Q61rBzMGvTUcz3S8Q3m4/ho78PkWkrwy2hvCLgcTsDVPfKWZSslssANW2p7sfPF+ODtbH29dF5JJBbgiOFEvBEMsScvwpvzjkEnS7Dwl1J+JaGBqWVkK/+OWoJSS+jFTXCAPW6LhZ1TXiIAfbKo9wP8rLgvGq/vbL+Hmnq6EdbnwZBmeVQG8zo15vwZNKCpaFcJJfU0BCQhdsSLcHpQkfMAIfNBhYlvhjIAO9X+7nvT+Fi5l8xdllbNxE3KlHZpESasA6FNQqUN7ShTaVFkfQ26tt70aDsI596sS0R2ZIXwNGJRyyqnB/GyKarZrt7MCcZiwMy7J1qLaEbkFEpw4KAk1gTewaiZiW4ojpHMzgXr0Pc0E5m/B5uicplgD4Ohmls9OUv6qze6rk3MQk/7uLZjxZcJjEFEqyNzYerPweecfk4UHAZXvEFiKJf25Odi9CMcuL86z7LgdxLNG+Ckc3AQN+bVMG/p993JHfK3dwikk/B42CBbedJAdmWJEAArxQH8i/BL7UIO7nF2J5SBJ/j57GVXlvLPkOW7+VZgtKKgUnV5hcnq6m97qUeMid01MUc3h0bR8shjsz3TSAuWxIwfwcH82ifvzMRP4ekYlUkDxticrE7mU9CuUXEL+EsSaY/g26wUz84pD3b2qpYSZWWCj4xjozpzNpWxGdmWn/amYxVwafIOnYW9pziEw5fAkFVI260tKOjbxC9QwYyqB8h2mETBnRG+4DeNPn4yVPodTqLVCr9gWpubtmo02k7hnRGqLQjNo3BZFHrRqz6kVH7+MQjutGMQcMoUevMxGgeh85oQr9m2N7Rb7R2DRppST2ERm982tPdJW5RKFYz15aIKz5WDWhMPVoz1MNjUOlH0T1kRnuf0Sq788BW1XCHFF66SdjZFbat8XyrbzwfeWXlaJHld+lVjX6dnd1raMwbFULhbMcAdfL0CXNqu3trwbhJ62EcNq1TKUVH5NWcwZyiQvwZlYlZ6+Mx0zMG3/mdgH9CCrIL4nR1l8MOd5a99xb1usUdP8FM5tctZxc1o1qwepuwKFiakh1tTc2Jm7wmOtTYUxcYCP2Sd5/v61LWTO3qVrFKy8uo0rKyZ0P2VEoK1Xrr1pR+tZql6u9n9an6/jfmH0qXzR2Xuc19tVYlOsLquBnBAKSVYZSoiMvU/wPTtJD2vfnAgQAAAABJRU5ErkJggg==",width:64,height:64,src:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png",srcSet:"/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d4bcd/oipm-icon.png 1x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/35746/oipm-icon.png 1.5x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/a2862/oipm-icon.png 2x,\n/oipm_annual_report_2018/static/514407e789c3ef441ae1eb659a89e514/d1d11/oipm-icon.png 3x"}}}}}},169:function(e){e.exports={data:{site:{siteMetadata:{title:"OIPM 2018 Annual Report",description:"Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.",author:"Marvin Arnold"}}}}},184:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),i=a.n(o),s=a(153),l=a(310),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:l.data,layout:l.layout,config:l.config};this.setState(e)},a.render=function(){return i.a.createElement(s.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component);t.a=c},186:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),i=a.n(o),s=a(153),l=a(311),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:l.data,layout:l.layout,config:l.config};this.setState(e)},a.render=function(){return i.a.createElement(s.a,{data:this.state.data,layout:this.state.layout,config:this.state.config})},t}(i.a.Component);t.a=c},220:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),i=a.n(o),s=a(153),l=a(312),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:l.data,layout:l.layout,config:l.config};this.setState(e)},a.render=function(){return i.a.createElement(s.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component);t.a=c},221:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),i=a.n(o),s=a(153),l=a(313),c=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e={data:l.data,layout:l.layout,config:l.config};this.setState(e)},a.render=function(){return i.a.createElement(s.a,{data:this.state.data,layout:this.state.layout,layoutOverride:this.state.layout,config:this.state.config,yoffset:-1})},t}(i.a.Component);t.a=c},310:function(e){e.exports={visdat:{"60c3985b6ec":["function () ","plotlyVisDat"]},cur_data:"60c3985b6ec",attrs:{"60c3985b6ec":{x:{},y:{},name:"Washington, D.C.",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar"},"60c3985b6ec.1":{x:{},y:{},name:"Austin, TX",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar",inherit:!0},"60c3985b6ec.2":{x:{},y:{},name:"Indianapolis, IN",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar",inherit:!0},"60c3985b6ec.3":{x:{},y:{},name:"New Orleans, LA",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar",inherit:!0}},layout:{margin:{b:40,l:60,t:25,r:10},yaxis:{domain:[0,1],automargin:!0,title:"Amount of force (UOF)"},barmode:"group",xaxis:{domain:[0,1],automargin:!0,title:!1,type:"category",categoryorder:"array",categoryarray:["Per 100 residents","Per 10k officers","Per 1k arrests"]},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:["Per 10k officers","Per 100 residents","Per 1k arrests"],y:[32.3,18,39],name:"Washington, D.C.",type:"bar",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},error_y:{color:"rgba(31,119,180,1)"},error_x:{color:"rgba(31,119,180,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Per 10k officers","Per 100 residents","Per 1k arrests"],y:[182.9,35,79],name:"Austin, TX",type:"bar",marker:{color:"rgba(255,127,14,1)",line:{color:"rgba(255,127,14,1)"}},error_y:{color:"rgba(255,127,14,1)"},error_x:{color:"rgba(255,127,14,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Per 10k officers","Per 100 residents","Per 1k arrests"],y:[89.5,16,33],name:"Indianapolis, IN",type:"bar",marker:{color:"rgba(44,160,44,1)",line:{color:"rgba(44,160,44,1)"}},error_y:{color:"rgba(44,160,44,1)"},error_x:{color:"rgba(44,160,44,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["Per 10k officers","Per 100 residents","Per 1k arrests"],y:[83.7,32,65],name:"New Orleans, LA",type:"bar",marker:{color:"rgba(214,39,40,1)",line:{color:"rgba(214,39,40,1)"}},error_y:{color:"rgba(214,39,40,1)"},error_x:{color:"rgba(214,39,40,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},311:function(e){e.exports={visdat:{"60c321da8516":["function () ","plotlyVisDat"]},cur_data:"60c321da8516",attrs:{"60c321da8516":{x:{},y:{},mode:"lines+markers",line:{color:"rgb(22, 96, 167)",width:3,dash:"solid"},name:"Digital records",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"scatter"},"60c321da8516.1":{x:[2011,2012,2013,2014,2015,2016],y:[302,306,421,409,724,588],mode:"lines+markers",line:{color:"rgb(205, 12, 24)",width:2,dash:"dot"},name:"Historic reports",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"scatter",inherit:!0}},layout:{margin:{b:200,l:60,t:25,r:10},xaxis:{domain:[0,1],automargin:!0,title:"Year",autosize:!1,ticks:"outside",tick0:0,dtick:1,ticklen:5,tickwidth:2,tickcolor:"rgba(0,0,255,1)",showgrid:!1,range:[2016,2017,2018]},yaxis:{domain:[0,1],automargin:!0,title:"Number times force used",range:[0,1e3],tick0:0,showgrid:!0},hovermode:"compare",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:[2016,2017,2018],y:[588,604,438],mode:"lines+markers",line:{color:"rgb(22, 96, 167)",width:3,dash:"solid"},name:"Digital records",type:"scatter",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},error_y:{color:"rgba(31,119,180,1)"},error_x:{color:"rgba(31,119,180,1)"},xaxis:"x",yaxis:"y",frame:null},{x:[2011,2012,2013,2014,2015,2016],y:[302,306,421,409,724,588],mode:"lines+markers",line:{color:"rgb(205, 12, 24)",width:2,dash:"dot"},name:"Historic reports",type:"scatter",marker:{color:"rgba(255,127,14,1)",line:{color:"rgba(255,127,14,1)"}},error_y:{color:"rgba(255,127,14,1)"},error_x:{color:"rgba(255,127,14,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},312:function(e){e.exports={visdat:{"60c31a651919":["function () ","plotlyVisDat"]},cur_data:"60c31a651919",attrs:{"60c31a651919":{x:{},y:{},mode:"lines+markers",line:{color:"rgb(22, 96, 167)",width:2,dash:"solid"},name:"Use of Force",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"scatter"},"60c31a651919.1":{x:{},y:{},mode:"lines+markers",line:{color:"rgb(0, 255, 24)",width:2,dash:"solid"},name:"Stops & Searches",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"scatter",inherit:!0},"60c31a651919.2":{x:0,y:61,mode:"lines",line:{color:"rgb(229, 221, 59)",width:2,dash:"solid"},name:"Black population of NO",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"scatter",xend:12,yend:61,inherit:!0}},layout:{margin:{b:40,l:60,t:25,r:10},title:!1,legend:{x:0,y:-.3},xaxis:{domain:[0,1],automargin:!0,title:"Month",dtick:1},yaxis:{domain:[0,1],automargin:!0,title:"Percent against black people"},hovermode:"closest",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:[1,2,3,4,5,6,7,8,9,10,11,12],y:[69.2307692307692,93.1372549019608,86.8421052631579,90.0826446280992,84.8739495798319,87.1428571428571,81.9672131147541,79.6875,78.4810126582278,96,81.1764705882353,80.3030303030303],mode:"lines+markers",line:{color:"rgb(22, 96, 167)",width:2,dash:"solid"},name:"Use of Force",type:"scatter",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},error_y:{color:"rgba(31,119,180,1)"},error_x:{color:"rgba(31,119,180,1)"},xaxis:"x",yaxis:"y",frame:null},{x:[1,2,3,4,5,6,7,8,9,10,11,12],y:[74.3680485338726,72.6884019241048,71.7450027012426,73.1863029599536,72.0779220779221,72.962420693021,73.7789203084833,75.0770811921891,75.4997437211686,73.6815156169995,72.8959276018099,73.25],mode:"lines+markers",line:{color:"rgb(0, 255, 24)",width:2,dash:"solid"},name:"Stops & Searches",type:"scatter",marker:{color:"rgba(255,127,14,1)",line:{color:"rgba(255,127,14,1)"}},error_y:{color:"rgba(255,127,14,1)"},error_x:{color:"rgba(255,127,14,1)"},xaxis:"x",yaxis:"y",frame:null},{x:[0,12],y:[61,61],mode:"lines",line:{color:"rgb(229, 221, 59)",width:2,dash:"solid"},name:"Black population of NO",type:"scatter",marker:{color:"rgba(44,160,44,1)",line:{color:"rgba(44,160,44,1)"}},error_y:{color:"rgba(44,160,44,1)"},error_x:{color:"rgba(44,160,44,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}},313:function(e){e.exports={visdat:{"60c318489046":["function () ","plotlyVisDat"]},cur_data:"60c318489046",attrs:{"60c318489046":{x:{},y:{},name:"% black pop. by district",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar"},"60c318489046.1":{x:{},y:{},name:"% stops are of black ppl by district",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar",inherit:!0},"60c318489046.2":{x:{},y:{},name:"% force against black ppl by district",alpha_stroke:1,sizes:[10,100],spans:[1,20],type:"bar",inherit:!0}},layout:{margin:{b:150,l:60,t:25,r:10},xaxis:{domain:[0,1],automargin:!0,categoryorder:"array",categoryarray:["1st District","2nd District","3rd District","4th District","5th District","6th District","7th District","8th District"],title:"District",type:"category"},legend:{x:0,y:-.3},hovermode:"compare",yaxis:{domain:[0,1],automargin:!0,title:"Percent black",dtick:10},barmode:"group",showlegend:!0},source:"A",config:{modeBarButtonsToAdd:[],cloud:!1},data:[{x:["1st","2nd","3rd","4th","5th","6th","7th","8th"],y:[68.285525881965,35.9352428393524,49.9941861430873,65.5205077199962,82.2862651243186,48.6669200695048,84.0942310682631,11.8075480026484],name:"% black pop. by district",type:"bar",marker:{color:"rgba(31,119,180,1)",line:{color:"rgba(31,119,180,1)"}},error_y:{color:"rgba(31,119,180,1)"},error_x:{color:"rgba(31,119,180,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["1st","2nd","3rd","4th","5th","6th","7th","8th"],y:[70.3061224489796,69.5640473627557,78.3304745568897,83.7071519255184,75.1367781155015,74.6669626998224,88.3682469680265,55.6852284094698],name:"% stops are of black ppl by district",type:"bar",marker:{color:"rgba(255,127,14,1)",line:{color:"rgba(255,127,14,1)"}},error_y:{color:"rgba(255,127,14,1)"},error_x:{color:"rgba(255,127,14,1)"},xaxis:"x",yaxis:"y",frame:null},{x:["1st","2nd","3rd","4th","5th","6th","7th","8th"],y:[87.8787878787879,69.5652173913043,96.6292134831461,81.5789473684211,84.1269841269841,87.5,91.4473684210526,61.437908496732],name:"% force against black ppl by district",type:"bar",marker:{color:"rgba(44,160,44,1)",line:{color:"rgba(44,160,44,1)"}},error_y:{color:"rgba(44,160,44,1)"},error_x:{color:"rgba(44,160,44,1)"},xaxis:"x",yaxis:"y",frame:null}],highlight:{on:"plotly_click",persistent:!1,dynamic:!1,selectize:!1,opacityDim:.2,selected:{opacity:1},debounce:0},base_url:"https://plot.ly"}}}]);
//# sourceMappingURL=3-ed84eeb6e625b16b4ce3.js.map