"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 1672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_darkLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7090);
/* harmony import */ var _public_logoTransparente_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9101);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_icons_lightModes_activeLight_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3329);
/* harmony import */ var _public_icons_lightModes_inactiveDark_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6383);
/* harmony import */ var _public_icons_lightModes_activeDark_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(215);
/* harmony import */ var _public_icons_lightModes_inactiveLight_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8471);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);













function Navbar({ darkMode , setDarkMode , active  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    function setMode(action) {
        if (action) {
            nookies__WEBPACK_IMPORTED_MODULE_11___default().set(null, "DARK_MODE", "true");
            setDarkMode(true);
        } else {
            nookies__WEBPACK_IMPORTED_MODULE_11___default().destroy(null, "DARK_MODE");
            setDarkMode(false);
        }
    }
    function logout() {
        nookies__WEBPACK_IMPORTED_MODULE_11___default().destroy(null, "LCD_TOKEN");
        router.push("/");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: `${darkMode ? "bg-[#1F1F1F]" : "bg-white"} w-full h-16 flex items-center justify-between px-2 md:px-14 absolute top-0`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: darkMode ? _public_logoTransparente_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z : _public_darkLogo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                width: 94,
                alt: "Logo"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `hidden md:flex items-center justify-center gap-4 `,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        className: `${active.clientsOffline ? "font-bold underline underline-offset-4 text-bright" : darkMode ? "text-white" : "text-base"} text-lg`,
                        href: "/clientesOffline",
                        children: "Clientes Offline"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        className: `${active.antennas ? "font-bold underline underline-offset-4 text-bright" : darkMode ? "text-white" : "text-base"} text-lg`,
                        href: "/antennas",
                        children: "Antenas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden gap-4 md:flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4",
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: logout,
                        className: `border ${darkMode ? "text-white border-white hover:bg-white hover:text-black" : "text-base border-base hover:bg-base hover:text-white"} text-lg transition-all  flex items-center justify-center px-4 py-1 gap-2 rounded`,
                        children: [
                            "Sair ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdExit, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: ()=>setNavOpen(!navOpen),
                className: `flex flex-col md:hidden cursor-pointer h-8 w-9 items-center justify-center gap-1.5`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-5/6 h-1 bg-bright rounded-full`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-5/6 h-1 bg-bright rounded-full`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-5/6 h-1 bg-bright rounded-full`
                    })
                ]
            }),
            navOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}) : ""
        ]
    });
}


/***/ })

};
;