define(["require","exports","tslib","external/react","external/react-dom","external/lodash","modules/clean/react/previews/pdf_viewer/progress_bar","modules/clean/react/previews/pdf_viewer/utils","modules/core/exception","modules/core/i18n"],function(e,t,n,a,o,r,s,i,d,m){"use strict";function p(e,t){var n=window.open("about:blank");if(!n)throw new Error(m._("Could not open new window"));var s=r.maxBy(e.dimensions,function(e){return e[2]}),i=s[0]/72,d=s[1]/72;window.setTimeout(function(){var r=n.document.createElement("style");r.innerHTML="\n      @page { margin: 0; size: "+i+"in "+d+"in; }\n      img { width: 100%; }\n      .print-progress { height: 8px; background-color: #0070E0; float: left; }\n    ",n.document.head.appendChild(r);var s=n.document.createElement("div");n.document.body.appendChild(s);var m=function(){n.print()};o.render(a.createElement(u,{metadata:e,document:n.document,onLoad:m,urls:t}),s)},50)}Object.defineProperty(t,"__esModule",{value:!0});var u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.imagesLoaded={},t.state={numImagesLoaded:0},t.onImageResolve=function(e){return function(){t.state.numImagesLoaded<t.props.metadata.page_count&&!t.imagesLoaded[e]&&(t.imagesLoaded[e]=!0,t.setState(function(e,t){return{numImagesLoaded:e.numImagesLoaded+1}}))}},t}return n.__extends(t,e),t.prototype.printIfReady=function(){if(d.assert(this.state.numImagesLoaded<=this.props.metadata.page_count,"not all images loaded"),this.state.numImagesLoaded===this.props.metadata.page_count&&this.props.onLoad)return void this.props.onLoad()},t.prototype.componentDidMount=function(){for(var e=0,t=this.props.document.getElementsByTagName("img"),n=0;n<t.length;n++)t[n].complete&&e++;this.setState({numImagesLoaded:e})},t.prototype.componentDidUpdate=function(e,t){this.printIfReady()},t.prototype.render=function(){var e=this,t={pageBreakInside:"avoid",pageBreakAfter:"always"};return a.createElement("div",null,a.createElement(s.ProgressBar,{totalImages:this.props.metadata.page_count,numImagesLoaded:this.state.numImagesLoaded}),i.mapPages(this.props.metadata.dimensions,function(n,o,r){return a.createElement("img",{key:n,src:e.props.urls.imageUrl(n),style:t,onLoad:e.onImageResolve(n),onError:e.onImageResolve(n),alt:""+(n+1)})}))},t})(a.Component);t.Printable=u,t.print=p});
//# sourceMappingURL=printable.min.js-vfluhAH1A.map