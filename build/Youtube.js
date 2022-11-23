var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, Fragment } from 'react';
import './Youtube.scss';
var Youtube = function (_a) {
    var videoId = _a.videoId;
    var _b = useState(false), showVideo = _b[0], setShowVideo = _b[1];
    return (_jsx(Fragment, { children: showVideo ? (_jsx("iframe", { id: 'iframe', src: "https://www.youtube.com/embed/".concat(videoId, "?autoplay=1&showinfo=0"), frameBorder: '0', allowFullScreen: true })) : (_jsxs("div", __assign({ id: 'placeHolderContainer', onClick: function () { return setShowVideo(true); } }, { children: [_jsx("div", { id: 'imageContainer', style: { background: "url(\"https://img.youtube.com/vi/".concat(videoId, "/mqdefault.jpg\") no-repeat"), backgroundSize: 'cover' } }), _jsx("div", __assign({ id: 'playButtonContainer' }, { children: _jsx("div", __assign({ id: 'playButton' }, { children: _jsx("svg", __assign({ width: "56px", height: "56px", viewBox: "0 -38 256 256", version: "1.1", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", stroke: "transparent", className: 'inline' }, { children: _jsxs("g", { children: [_jsx("path", { d: "M250.346231,28.0746923 C247.358133,17.0320558 238.732098,8.40602109 227.689461,5.41792308 C207.823743,0 127.868333,0 127.868333,0 C127.868333,0 47.9129229,0.164179487 28.0472049,5.58210256 C17.0045684,8.57020058 8.37853373,17.1962353 5.39043571,28.2388718 C-0.618533519,63.5374615 -2.94988224,117.322662 5.5546152,151.209308 C8.54271322,162.251944 17.1687479,170.877979 28.2113844,173.866077 C48.0771024,179.284 128.032513,179.284 128.032513,179.284 C128.032513,179.284 207.987923,179.284 227.853641,173.866077 C238.896277,170.877979 247.522312,162.251944 250.51041,151.209308 C256.847738,115.861464 258.801474,62.1091 250.346231,28.0746923 Z", fill: "#FF0000" }), _jsx("polygon", { fill: "#FFFFFF", points: "102.420513 128.06 168.749025 89.642 102.420513 51.224" })] }) })) })) }))] }))) }));
};
export { Youtube };
