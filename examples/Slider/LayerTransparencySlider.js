webpackJsonp([3],{24:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(25),a=function(e){var t,o=e||{};t=void 0!==o.attributions?o.attributions:[a.ATTRIBUTION];var r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",n=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:n,wrapX:o.wrapX})};r.a.inherits(a,i.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=a},25:function(e,t,o){"use strict";var r=o(0),i=o(41),a=o(36),n=function(e){var t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};r.a.inherits(n,i.a),t.a=n},960:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=o(1),a=r(i),n=o(9),l=o(26),c=r(l),u=o(40),s=r(u),d=o(34),p=r(d),m=o(24),h=r(m),f=o(20),v=r(f),g=o(23),w=new p.default({name:"OSM",source:new h.default}),x=new c.default({layers:[w],view:new s.default({center:v.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,n.render)(a.default.createElement("div",null,a.default.createElement("div",{id:"map"}),a.default.createElement("div",{className:"example-block"},a.default.createElement("span",null,"Move the slider to change the layer's opacity:"),a.default.createElement(g.LayerTransparencySlider,{layer:w}))),document.getElementById("exampleContainer"),function(){x.setTarget("map")})}},[960]);