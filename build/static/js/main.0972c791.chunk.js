(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{234:function(e,t,n){e.exports=n(403)},403:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(55),l=n.n(i),r=(n(239),n(197)),c=n(198),s=n(222),u=n(199),d=n(27),m=n(223),h=n(97),p=n.n(h),f=n(432),E=n(196),g=n(428),v=n(426),C=n(420),b=n(419),w=n(423),S=n(195),y=n(412),k=n(425),O=n(422),I=n(421),T=n(413),R=n(415),x=n(424),q=n(429),_=n(431),j=n(416),F=n(430),L=n(427),M=n(417),A=n(418),P=n(414),N=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n.callLoadConfigurationFile=function(){n.httpRequestMethod="OPTIONS",n.loadConfigurationFile()},n.importConfiguration=function(){var e=n.state.dataJSON;fetch("http://localhost:3000/import",{method:"POST",body:n.configurationToImport,headers:{"Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept"}}).then(n.setState({isLoaded:!1})).then(function(e){return e.json()}).then(function(t){n.setState({importedDataJSON:t,importCompleted:!0});for(var a,o="",i=0,l=0;l<t.id.length;l++)e.is_enabled[l]=0;for(l=0;l<t.id.length;l++){var r=t.id[l];999===t.id[l]?o=o+" "+t.tags[l]+";":(e.is_enabled[r]=1,e.value[r]=t.value[l],e.switchable[r]=t.switchable[l],e.switch_position[r]=t.switch_position[l],i++)}""!==o&&(o=" The following entries were skipped as they are not being present in current version:"+o),a="Import completed: "+t.id.length+" entries processed, "+i+" recognized."+o,n.setState({openImportWindow:!1,statusMessage:a,isLoaded:!0})})},n.closeConfigShow=function(e,t){return function(){n.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},n.confirm=function(){return n.setState({confirm:!0})},n.confirmClose=function(){return n.setState({confirm:!1})},n.open=function(){return n.setState({open:!0})},n.close=function(){return n.setState({open:!1})},n.handleContextRef=function(e){return n.setState({contextRef:e})},n.handleOpen=function(){return n.setState({active:!0})},n.handleClose=function(){return n.setState({active:!1})},n.handleEditorClose=function(){return n.setState({openEditor:!1})},n.handleConfigPreview=function(){return n.setState({open:!0})},n.handleHideClick=function(){return n.setState({visible:!1})},n.resetComponent=function(){return n.setState({isLoading:!1,results:[],value:""})},n.handleClick=function(e,t){var a=t.index,o=n.state.activeIndex===a?-1:a;n.setState({activeIndex:o}),n.setState({helpEntryId:0})},n.handleHelpButtonClick=function(e){n.setState({helpEntryId:e.target.value}),n.setState({helpTextIsVisible:!0})},n.handleEntrySliderClick=function(e){var t=n.state.dataJSON;t.is_enabled[e.target.value]=!t.is_enabled[e.target.value]},n.handleVersionDropdownClick=function(e,t){var a=t.value;n.version=a,n.setState({openReloadConfirmation:!0})},n.readValueFromComponent=function(e,t){var a=t.entrynumber,o=t.value;n.state.dataJSON.value[a]=o},n.readConfigurationToImport=function(e){n.configurationToImport=e.target.value},n.handleMultilineEdit=function(e){n.state.dataJSON.value[n.multilineEntryId]=e.target.value},n.displayMultilineEditor=function(e,t){var a=t.value;n.multilineEntryId=a,n.setState(function(e){return{openEditor:!e.openEditor}})},n.handleImportWindow=function(){n.setState({openImportWindow:!n.state.openImportWindow})},n.closeReloadConfirmationWindow=function(){return n.setState({openReloadConfirmation:!1})},n.focusOnComponent=function(e,t){var a=t.entrynumber;n.componentRef[a].current.focus()},n.focusTextInput=function(e,t){var a=t.result,o=n.state.dataJSON,i=a.record;n.setState(function(){return{activeIndex:o.section_number[i]}}),n.setState(function(){return{activeRowIndex:i}}),1!==o.switchable[i]&&n.componentRef[i].current.focus()},n.handleSearchChange=function(e,t){var a=t.value;function o(){var e=1;return e+1}var i=n.state.dataJSON,l=p.a.times(i.tags.length,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return{title:n.state.dataJSON.tags[e],record:e}});n.setState({isLoading:!0,value:a}),setTimeout(function(){if(n.state.value.length<1)return n.resetComponent();var e=new RegExp(p.a.escapeRegExp(n.state.value),"i");n.setState({isLoading:!1,results:p.a.filter(l,function(t){return e.test(t.title)})})},300)},n.state={value:""},n.state={activeIndex:0},n.state={activeRowIndex:0},n.state={visible:!1},n.state={helpEntryId:0},n.state={confirm:!1},n.state={openEditor:!1},n.state={openImportWindow:!1},n.state={dataJSON:""},n.state={isLoaded:!1},n.state={configurationToImport:""},n.state={statusMessage:""},n.state={version:""},n.state={openReloadConfirmation:!1},n.state={httpRequestMethod:""},n.state={closeOnEscape:!1},n.state={closeOnDimmerClick:!1},n.componentRef=[],n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleConfigPreview=n.handleConfigPreview.bind(Object(d.a)(n)),n.handleMultilineEdit=n.handleMultilineEdit.bind(Object(d.a)(n)),n.handleHelpButtonClick=n.handleHelpButtonClick.bind(Object(d.a)(n)),n.handleEntrySliderClick=n.handleEntrySliderClick.bind(Object(d.a)(n)),n.readValueFromComponent=n.readValueFromComponent.bind(Object(d.a)(n)),n.displayMultilineEditor=n.displayMultilineEditor.bind(Object(d.a)(n)),n.handleImportWindow=n.handleImportWindow.bind(Object(d.a)(n)),n.readConfigurationToImport=n.readConfigurationToImport.bind(Object(d.a)(n)),n.importConfiguration=n.importConfiguration.bind(Object(d.a)(n)),n.focusOnComponent=n.focusOnComponent.bind(Object(d.a)(n)),n.AccordeonIconColors={},n.loadConfigurationFile=n.loadConfigurationFile.bind(Object(d.a)(n)),n.callLoadConfigurationFile=n.callLoadConfigurationFile.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.httpRequestMethod="GET",this.loadConfigurationFile()}},{key:"loadConfigurationFile",value:function(){var e=this;this.setState({isLoaded:!1}),"GET"===this.httpRequestMethod?fetch("http://localhost:3000/json",{method:this.httpRequestMethod}).then(function(e){return e.json()}).then(function(t){e.setState({dataJSON:t,isLoaded:!0})},function(t){e.setState({isLoaded:!0,error:t})}):(fetch("http://localhost:3000/version",{method:this.httpRequestMethod,headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept, access-control-allow-headers"},body:JSON.stringify({version:this.version})}).then(function(e){return e.json()}).then(function(t){e.setState({dataJSON:t,isLoaded:!0})},function(t){e.setState({isLoaded:!0,error:t})}),this.setState({openReloadConfirmation:!1}))}},{key:"warningIconPopup",value:function(e,t){return o.a.createElement(f.a,{trigger:o.a.createElement(E.a,{color:e,name:"warning sign"}),content:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeIndex,a=t.activeRowIndex,i=t.active,l=t.openEditor,r=t.open,c=t.openImportWindow,s=t.closeOnEscape,u=t.dataJSON,d=t.isLoaded,m=t.error,h=t.contextRef,p=t.isLoading,N=t.value,W=t.results,J=t.statusMessage,H=t.openReloadConfirmation,B=this.handleClick,V=this.handleHelpButtonClick,z=this.handleEntrySliderClick,D=this.readValueFromComponent,G=this.displayMultilineEditor,U=this.warningIconPopup,K=this.componentRef,X=this.focusOnComponent,$="grey",Q="purple",Y="pink",Z=function(e){var t=e.title,n=e.record;return o.a.createElement(g.a,{key:n,size:"tiny",content:t,subheader:u.all_sections[u.section_number[n]].toLowerCase()})},ee=function(t,n,a,i){return o.a.createElement(C.a,{dimmer:"inverted",open:t,closeOnEscape:s,onClose:e.close},o.a.createElement(g.a,{icon:n,content:a}),o.a.createElement(C.a.Content,{scrolling:!0},o.a.createElement(b.a,null,i)))};return m?o.a.createElement("div",null,"Error: ",m.message):d?o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,null,o.a.createElement(L.a,{fixed:"top",inverted:!0,fitted:"vertically",color:"black"},o.a.createElement(R.a,null,o.a.createElement(L.a.Item,{as:"a",header:!0,onClick:this.handleOpen},o.a.createElement(g.a,{as:"h3",inverted:!0},o.a.createElement(E.a,{inverted:!0,name:"circle outline",color:Q,size:"big"}),o.a.createElement(g.a.Content,null,"Sucker",o.a.createElement(g.a.Subheader,null,"Squid configuration editor")))),o.a.createElement(L.a.Item,{as:"a"},o.a.createElement(v.a,Object.assign({placeholder:"Search tags",minCharacters:3,loading:p,onResultSelect:e.focusTextInput,onSearchChange:e.handleSearchChange,resultRenderer:Z,results:W,value:N},e.props))),o.a.createElement(L.a.Item,null,o.a.createElement(g.a,{as:"h5",inverted:!0},"Squid version"," ",o.a.createElement(O.a,{options:function(){for(var e=[],t=0;t<u.available_versions.length;t++)e.push({key:t,text:u.available_versions[t],value:u.available_versions[t]});return e}(),inline:!0,defaultValue:u.squid_version[0],onChange:this.handleVersionDropdownClick}))),o.a.createElement(L.a.Item,{as:"a",onClick:this.handleConfigPreview},o.a.createElement(g.a,{as:"h5",inverted:!0},o.a.createElement(E.a,{inverted:!0,name:"magic",size:"large"}),"Show")),o.a.createElement(L.a.Item,{as:"a",onClick:this.handleImportWindow},o.a.createElement(g.a,{as:"h5",inverted:!0},o.a.createElement(E.a,{inverted:!0,name:"download",size:"large"}),"Import"))))),o.a.createElement(M.a,null),o.a.createElement(q.a,{centered:!0,columns:3},o.a.createElement(q.a.Column,{widescreen:5,computer:2},o.a.createElement(w.a,null,o.a.createElement("p",null,"Loaded configuration for Squid ver."," ",o.a.createElement("b",null,u.squid_version[0])),o.a.createElement("p",null,o.a.createElement("b",null,u.tags.length)," unique tags in"," ",o.a.createElement("b",null,u.all_sections.length)," sections"),o.a.createElement("p",null,J))),o.a.createElement(q.a.Column,{widescreen:6,computer:7},o.a.createElement("div",{ref:this.handleContextRef},o.a.createElement(R.a,null,o.a.createElement(x.a,{styled:!0,fluid:!0},function(){for(var e=[],t=0,l=0,r=1e3,c="",s="",d="",m=[],h=0;h<u.all_sections.length;h++){var p=[],g=[];for(p[h]="";u.section_number[t]===h;){u.is_enabled[t]>0&&(m[h]=Q);var v="";if(p[h]+=u.tags[t]+"\n",K[t]=o.a.createRef(),u.switchable[t])if(1===u.switchable[t]){var C=[{key:"off",text:u.tags[t]+" off",value:u.tags[t]+" off"},{key:"on",text:u.tags[t]+" on",value:u.tags[t]+" on"}];v=o.a.createElement(O.a,{ref:K[t],entrynumber:l,fluid:!0,selection:!0,options:C,defaultValue:C[u.switch_position[t]].value,onChange:D})}else 2===u.switchable[t]&&(v=o.a.createElement(k.a,{ref:K[t],secondary:!0,compact:!0,value:t,onClick:G},u.tags[t]," - Click to edit"));else d=u.units[t]?o.a.createElement(S.a,{basic:!0,content:u.units[t],horizontal:!0}):"",v=o.a.createElement(b.a.Field,null,o.a.createElement(y.a,{fluid:!0,ref:K[t],entrynumber:l,defaultValue:u.value[t]+" ",onChange:D,labelPosition:"right",type:"text",action:!0},o.a.createElement("input",null),d,o.a.createElement(k.a,{basic:!0,type:"reset",entrynumber:l,onClick:X},"Reset")));c=u.message_built[t]?U(Q,"Only available if Squid is compiled with the "+u.message_built[t]):"",s=u.message_warning[t]?U(Y,u.message_warning[t]):"";var w=!1;u.is_enabled[t]>0&&(w=!0),g[t]=o.a.createElement(I.a.Row,{key:"tableKey"+t,active:a===t},o.a.createElement(I.a.Cell,{width:1},o.a.createElement(T.a,{value:l,id:"checkboxEntry"+l++,defaultChecked:w,slider:!0,onClick:z})),o.a.createElement(I.a.Cell,null,o.a.createElement(b.a,null,v)),o.a.createElement(I.a.Cell,{width:2},c,s),o.a.createElement(I.a.Cell,{width:1,allign:"left"},o.a.createElement(k.a,{value:r++,compact:!0,basic:!0,color:$,active:i,onClick:V},"Help"))),t++}e[h]=o.a.createElement(R.a,{key:"containerKey"+h},o.a.createElement(x.a.Title,{active:n===h,index:h,onClick:B},o.a.createElement(f.a,{trigger:o.a.createElement(E.a,{name:"dropdown"}),size:"tiny",position:"left center",header:"Tags in this section:",content:o.a.createElement(q.a,{centered:!0,columns:1},o.a.createElement(q.a.Column,{textAlign:"left"},o.a.createElement("pre",null,p[h])))}),o.a.createElement(E.a,{name:"tags",color:m[h]}),"\xa0",u.all_sections[h]),o.a.createElement(x.a.Content,{active:n===h},o.a.createElement(I.a,{striped:!0,compact:!0,basic:"very"},o.a.createElement(I.a.Body,null,g))))}return e}())))),o.a.createElement(q.a.Column,{widescreen:5,computer:7},o.a.createElement(A.a,{context:h,offset:75},o.a.createElement(F.a,{basic:!0,size:"small"},o.a.createElement(g.a,{content:u.tags[this.state.helpEntryId-1e3]}),o.a.createElement("pre",null,u.help[this.state.helpEntryId-1e3]))))),ee(r,"copy","New configuration",o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a.Field,null,o.a.createElement("p",null,o.a.createElement("b",null,"To use:")," copy configuration from the text area below and save it as squid.conf in the location of the original configuration file. By default, this file is located at"," ",o.a.createElement("b",null,"/etc/squid/squid.conf")," or"," ",o.a.createElement("b",null,"/usr/local/squid/etc/squid.conf"),"."),o.a.createElement(P.a,{autoHeight:!0,value:function(){for(var e="",t=0;t<u.section_number.length;t++)u.is_enabled[t]&&(e=e+"\n"+u.value[t]);return e}()})),o.a.createElement(k.a,{negative:!0,size:"large",onClick:this.close},"close"))),ee(l,"edit",u.tags[this.multilineEntryId],o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a.Field,null,o.a.createElement(P.a,{autoHeight:!0,defaultValue:u.value[this.multilineEntryId],onChange:this.handleMultilineEdit})),o.a.createElement(k.a,{type:"reset",secondary:!0},"Revert to default"),o.a.createElement(k.a,{secondary:!0,onClick:this.displayMultilineEditor},"Save and close"))),ee(c,"paste","Import existing configuration",o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement("b",null,"To import:")," copy and paste contents of ",o.a.createElement("b",null,"squid.conf")," ","into the window below. By default, this file is located at"," ",o.a.createElement("b",null,"/etc/squid/squid.conf")," or"," ",o.a.createElement("b",null,"/usr/local/squid/etc/squid.conf"),"."),o.a.createElement("p",null,o.a.createElement("b",null,"Please note:")," lines that begin with '#' (i.e. commented out) are not going to be processed."),o.a.createElement(b.a.TextArea,{control:"textarea",onChange:this.readConfigurationToImport}),o.a.createElement(k.a,{secondary:!0,onClick:this.handleImportWindow},"Close"),o.a.createElement(k.a,{secondary:!0,type:"submit",method:"post",onClick:this.importConfiguration},"Import"))),o.a.createElement(_.a,{inverted:!0,active:i,onClickOutside:this.handleClose,page:!0},o.a.createElement(g.a,{as:"h1",icon:!0,color:Q},o.a.createElement(E.a,{name:"circle outline",color:Q}),"Sucker",o.a.createElement(g.a.Subheader,null,"ver.0.2")),o.a.createElement(g.a,{color:$},o.a.createElement("p",null,"configuration editor for"," ",o.a.createElement("a",{href:"http://www.squid-cache.org/"},"Squid")," caching proxy"),o.a.createElement("p",null,o.a.createElement(E.a,{name:"github"}),"Github:"," ",o.a.createElement("a",{href:"https://github.com/itworks99/sucker"},"itworks99/sucker")),o.a.createElement("p",null,"Built with Bottle, Gunicorn, Python, React and Semantic-UI"),o.a.createElement("p",null,"Created in Sydney with ",o.a.createElement(E.a,{color:"pink",name:"heart"})))),ee(H,"question","Confirm reload of the Squid base configuration file",o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"This action will reload base configuration file with the version requested. Plese note that any unsaved changes are going to be lost. Do you want to proceed?"),o.a.createElement(k.a,{negative:!0,onClick:this.closeReloadConfirmationWindow},"no"),o.a.createElement(k.a,{positive:!0,onClick:this.callLoadConfigurationFile},"yes")))):o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{inverted:!0,active:!d},o.a.createElement(j.a,{inverted:!0,size:"massive"},"Loading")))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[234,2,1]]]);
//# sourceMappingURL=main.0972c791.chunk.js.map