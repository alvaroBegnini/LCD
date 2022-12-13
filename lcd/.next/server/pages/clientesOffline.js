"use strict";
(() => {
var exports = {};
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 9447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tableRow)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/tableRow/index.tsx




function TableRow({ props  }) {
    const [showIp, setShowIp] = (0,external_react_.useState)(false);
    const [content, setContent] = (0,external_react_.useState)(props.client.ip);
    const [clipboard, setClipboard] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        setClipboard(navigator.clipboard);
    }, []);
    async function copyToClipboard(content) {
        clipboard.writeText(content);
        setContent("Copiado");
        setTimeout(()=>setContent(props.client.ip), 2000);
        return;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: `${props.silenced ? props.darkMode ? "bg-red-900" : "bg-red-400" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: `${props.darkMode ? "text-white" : "text-black"} md:px-6 text-sm md:text-normal md:py-4 px-4 py-2`,
                children: props.key + 1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: `${props.darkMode ? "text-white" : "text-black"} md:px-6  md:py-4 px-4 py-2 text-sm md:text-normal`,
                children: props.client.nome.toLocaleUpperCase()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                className: `${props.darkMode ? "text-white" : "text-black"} md:px-6 md:py-4 px-4 py-2 text-sm md:text-normal`,
                children: [
                    props.date.getDay(),
                    "D ",
                    props.date.getHours(),
                    "H ",
                    props.date.getMinutes(),
                    "M ",
                    props.date.getSeconds(),
                    "S"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: `${props.darkMode ? "text-white" : "text-black"} md:px-6 md:py-4 px-4 py-2 text-sm md:text-normal`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onMouseLeave: ()=>setShowIp(!showIp),
                            onMouseEnter: ()=>setShowIp(!showIp),
                            className: "relative flex items-center justify-center ",
                            children: [
                                showIp ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: `${props.darkMode ? "bg-bright text-black" : " bg-bright text-black w-fit"} font-medium absolute p-1 rounded -top-8 flex flex-shrink-0`,
                                    children: content
                                }) : "",
                                /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineInfoCircle, {
                                    onClick: ()=>copyToClipboard(props.client.ip),
                                    className: "cursor-pointer"
                                })
                            ]
                        }),
                        props.silenced ? /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineAudioMuted, {
                            className: "cursor-pointer",
                            onClick: ()=>{
                                props.setSilence(props.client.nome, !props.silenced);
                            }
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineAudio, {
                            className: "cursor-pointer",
                            onClick: ()=>{
                                props.setSilence(props.client.nome, !props.silenced);
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            target: "_blank",
                            href: `http://172.31.255.2/admin/cliente_alt.hhvm?uuid=${props.client.uuid}`,
                            rel: "noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOpenInNew, {
                                className: "cursor-pointer"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const tableRow = (TableRow);


/***/ }),

/***/ 3774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1672);
/* harmony import */ var _components_tableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9447);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function ClientesOffline({ lightMode  }) {
    const [clients, setClients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lightMode);
    const [showSilenced, setShowSilenced] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const hostname = window.location.hostname;
        const port = window.location.port == "80" ? "3030" : window.location.port === "3000" ? "3030" : "1011";
        console.log(port);
        const url = `http://${hostname}:${port}`;
        socketInitializer(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const socketInitializer = async (url)=>{
        const { LCD_TOKEN: token  } = nookies__WEBPACK_IMPORTED_MODULE_3___default().get();
        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(url, {
            auth: {
                token
            }
        });
        socket.on("connect", ()=>{
            console.log("connected");
        });
        socket.on("message", (message)=>{
            const parsedMessage = JSON.parse(message);
            setClients(parsedMessage);
        });
    };
    async function setSilence(name, action) {
        const hostname = window.location.hostname;
        const port = window.location.port == "80" ? "3030" : window.location.port === "3000" ? "3030" : "1011";
        const url = `http://${hostname}:${port}/silence`;
        const { LCD_TOKEN: token  } = nookies__WEBPACK_IMPORTED_MODULE_3___default().get();
        await axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, {
            client: name,
            action
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `min-h-screen flex items-center justify-center ${darkMode ? "bg-[#141414]" : "bg-[#E8E8E8]"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                active: {
                    clientsOffline: true,
                    antennas: false
                },
                darkMode: darkMode,
                setDarkMode: setDarkMode
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center h-full py-32 mx-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-fit w-fit shadow-default ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: `${darkMode ? "bg-[#1F1F1F]" : "bg-white"} rounded-t-lg`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: `${darkMode ? "bg-[#4C4C4C]" : "bg-base"}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: `text-white py-3 px-6 rounded-tl-lg`,
                                                children: "#"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: `text-white py-3 px-6`,
                                                children: "Nome"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: `text-white py-3 px-6`,
                                                children: "Offline h\xe1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: `text-white py-3 px-6 rounded-tr-lg`,
                                                children: "A\xe7\xe3o"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                    children: [
                                        clients?.notSilenced?.map((client, key)=>{
                                            const date = new Date(client.date);
                                            const props = {
                                                date,
                                                darkMode,
                                                key,
                                                client,
                                                setSilence,
                                                silenced: false
                                            };
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tableRow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                props: props
                                            }, key);
                                        }),
                                        showSilenced ? clients?.silenced?.map((client, key)=>{
                                            const date = new Date(client.date);
                                            const props = {
                                                date,
                                                darkMode,
                                                key,
                                                client,
                                                setSilence,
                                                silenced: true
                                            };
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tableRow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                props: props
                                            }, key);
                                        }) : ""
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${darkMode ? "bg-[#4C4C4C]" : "bg-base"} relative flex items-center justify-between h-12 w-full rounded-b-lg px-6`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `text-white`,
                                    children: "Mostrar clientes silenciados"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setShowSilenced(!showSilenced),
                                    className: `relative w-12 h-6 transition-all rounded-full cursor-pointer ${showSilenced ? "bg-bright" : "bg-white"}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `absolute w-4 h-4 ${darkMode ? "bg-[#4c4c4d]" : "bg-base"} rounded-full top-1 transition-all ${showSilenced ? "translate-x-7" : "left-1"}`
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps(ctx) {
    const { LCD_TOKEN: jwt , DARK_MODE: lightMode  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);
    if (!jwt || jwt === undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            },
            props: {
                lightMode: lightMode ? true : false
            }
        };
    }
    return {
        props: {
            lightMode: lightMode ? true : false
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientesOffline);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,552,672], () => (__webpack_exec__(3774)));
module.exports = __webpack_exports__;

})();