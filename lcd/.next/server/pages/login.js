"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 2882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _public_logoTransparente_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9101);
/* harmony import */ var _public_darkLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7090);
/* harmony import */ var _public_icons_lightModes_activeLight_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3329);
/* harmony import */ var _public_icons_lightModes_inactiveDark_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6383);
/* harmony import */ var _public_icons_lightModes_activeDark_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(215);
/* harmony import */ var _public_icons_lightModes_inactiveLight_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8471);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Login({ lightMode  }) {
    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(lightMode);
    const [loginFailed, setLoginFailed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { register , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    function setMode(action) {
        if (action) {
            nookies__WEBPACK_IMPORTED_MODULE_2___default().set(null, "DARK_MODE", "true");
            setDarkMode(true);
        } else {
            nookies__WEBPACK_IMPORTED_MODULE_2___default().destroy(null, "DARK_MODE");
            setDarkMode(false);
        }
    }
    async function handleLogin(formData) {
        const host = `http://${window.location.hostname}:${window.location.port === "3000" ? "3030" : window.location.port === "80" ? "3030" : "1011"}/login`;
        try {
            setLoginFailed(false);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].post(host, {
                username: formData.login,
                password: formData.password
            });
            nookies__WEBPACK_IMPORTED_MODULE_2___default().set(null, "LCD_TOKEN", data.token, {
                maxAge: 60 * 60
            });
            router.push("/clientesOffline");
        } catch (err) {
            setLoginFailed(true);
            setValue("password", "");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `relative flex items-center justify-center h-screen transition-all ${darkMode ? "bg-[#141414]" : "bg-[#E2E2E2]"}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute flex items-center justify-center gap-4 top-4 right-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "cursor-pointer",
                        onClick: ()=>setMode(true),
                        alt: "Dark mode",
                        width: 27,
                        src: darkMode ? _public_icons_lightModes_activeDark_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z : _public_icons_lightModes_inactiveDark_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "cursor-pointer",
                        onClick: ()=>setMode(false),
                        alt: "Light mode",
                        width: 30,
                        src: darkMode ? _public_icons_lightModes_inactiveLight_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z : _public_icons_lightModes_activeLight_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `absolute bg-red-500 rounded text-md text-white font-semibold p-4 ${loginFailed ? `top-5 right-0 animate-bounce flex` : `hidden`} `,
                children: "Usu\xe1rio ou senha inv\xe1lidos"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex flex-col items-center justify-center py-16 ${darkMode ? "bg-[#1F1F1F]" : "bg-white"} rounded-lg px-14 h-fit w-fit shadow-default`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative pb-12 rounded w-44",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            alt: "logo",
                            src: darkMode ? _public_logoTransparente_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _public_darkLogo_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            width: 180
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(handleLogin),
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: `${darkMode ? "text-white" : "text-base"} font-semibold`,
                                        htmlFor: "login",
                                        children: "Login:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        autoFocus: true,
                                        required: true,
                                        ...register("login"),
                                        className: `w-64 h-10 ${darkMode ? "text-white bg-transparent border-white" : "text-base border-base"} font-semibold text-center border rounded outline-none transition-al `,
                                        id: "login"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: `${darkMode ? "text-white" : "text-base"} font-semibold`,
                                        children: "Senha:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        required: true,
                                        ...register("password"),
                                        className: `w-64 h-10 ${darkMode ? "text-white bg-transparent border-white" : "text-base border-base"} font-semibold text-center border rounded outline-none transition-al `,
                                        id: "password",
                                        type: "password"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: `w-full py-2 transition-all font-medium rounded outline-none ${darkMode ? "bg-bright text-base" : "bg-base text-white"}`,
                                children: "Entrar"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(ctx) {
    const { LCD_TOKEN: jwt , DARK_MODE: lightMode  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);
    if (jwt) {
        return {
            redirect: {
                permanent: false,
                destination: "/clientesOffline"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,552], () => (__webpack_exec__(2882)));
module.exports = __webpack_exports__;

})();