"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/reference/repository/imagezoom/1/page.js":
/*!**********************************************************!*\
  !*** ./src/app/reference/repository/imagezoom/1/page.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/reference/repository/imagezoom/1/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CustomApp = ()=>{\n    const data = [\n        {\n            imgSrc: \"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg\"\n        },\n        {\n            imgSrc: \"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageZoom, {\n                imageUrl: item.imgSrc\n            }, index, false, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_c = CustomApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomApp);\nconst ImageZoom = (param)=>{\n    let { imageUrl } = param;\n    _s();\n    const [zoomLevel, setZoomLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const handleZoomIn = ()=>{\n        setZoomLevel((prevZoom)=>prevZoom + 0.2);\n    };\n    const handleZoomOut = ()=>{\n        setZoomLevel((prevZoom)=>Math.max(1, prevZoom - 0.2));\n    };\n    const handleMouseMove = (e)=>{\n        setPosition({\n            x: e.nativeEvent.offsetX,\n            y: e.nativeEvent.offsetY\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"image-zoom-container\",\n        style: {\n            position: \"relative\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageUrl,\n                alt: \"Zoomable Image\",\n                style: {\n                    width: \"calc(100% * \".concat(zoomLevel, \")\"),\n                    transform: \"translate(-\".concat(position.x * (zoomLevel - 1), \"px, -\").concat(position.y * (zoomLevel - 1), \"px)\"),\n                    transition: \"transform 0.2s ease-in-out\"\n                },\n                onMouseMove: handleMouseMove\n            }, void 0, false, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"zoom-controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleZoomIn,\n                        children: \"Zoom In\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleZoomOut,\n                        children: \"Zoom Out\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n        lineNumber: 42,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ImageZoom, \"nEr8vmwtMKBbGkMn1DmxZ0ieAUk=\");\n_c1 = ImageZoom;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomApp\");\n$RefreshReg$(_c1, \"ImageZoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVmZXJlbmNlL3JlcG9zaXRvcnkvaW1hZ2V6b29tLzEvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ25CO0FBRXJCLE1BQU1FLFlBQVk7SUFFZCxNQUFNQyxPQUFPO1FBQ1Q7WUFBQ0MsUUFBTztRQUFvRztRQUM1RztZQUFDQSxRQUFPO1FBQW9HO0tBQy9HO0lBQ0MscUJBQ0Y7a0JBQ0tELEtBQUtFLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDakIsOERBQUNDO2dCQUFzQkMsVUFBVUgsS0FBS0YsTUFBTTtlQUE1Qkc7Ozs7OztBQUl4QjtLQWJNTDtBQWVOLCtEQUFlQSxTQUFTQSxFQUFBO0FBRXhCLE1BQU1NLFlBQVk7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7UUFBRWEsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFFdEQsTUFBTUMsZUFBZTtRQUNuQkwsYUFBYU0sQ0FBQUEsV0FBWUEsV0FBVztJQUN0QztJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQlAsYUFBYU0sQ0FBQUEsV0FBWUUsS0FBS0MsR0FBRyxDQUFDLEdBQUdILFdBQVc7SUFDbEQ7SUFFQSxNQUFNSSxrQkFBa0IsQ0FBQ0M7UUFDdkJULFlBQVk7WUFDVkMsR0FBR1EsRUFBRUMsV0FBVyxDQUFDQyxPQUFPO1lBQ3hCVCxHQUFHTyxFQUFFQyxXQUFXLENBQUNFLE9BQU87UUFDMUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQXVCQyxPQUFPO1lBQUVoQixVQUFVO1lBQVlpQixVQUFVO1FBQVM7OzBCQUN0Riw4REFBQ0M7Z0JBQ0NDLEtBQUt0QjtnQkFDTHVCLEtBQUk7Z0JBQ0pKLE9BQU87b0JBQ0xLLE9BQU8sZUFBeUIsT0FBVnZCLFdBQVU7b0JBQ2hDd0IsV0FBVyxjQUFrRHRCLE9BQXBDQSxTQUFTRSxDQUFDLEdBQUlKLENBQUFBLFlBQVksSUFBRyxTQUFvQyxPQUE3QkUsU0FBU0csQ0FBQyxHQUFJTCxDQUFBQSxZQUFZLElBQUc7b0JBQzFGeUIsWUFBWTtnQkFDZDtnQkFDQUMsYUFBYWY7Ozs7OzswQkFFZiw4REFBQ0s7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVTt3QkFBT0MsU0FBU3RCO2tDQUFjOzs7Ozs7a0NBQy9CLDhEQUFDcUI7d0JBQU9DLFNBQVNwQjtrQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDO0dBckNJVjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlZmVyZW5jZS9yZXBvc2l0b3J5L2ltYWdlem9vbS8xL3BhZ2UuanM/NDRmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgQ3VzdG9tQXBwID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAge2ltZ1NyYzonaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by9wYWludGluZy1tb3VudGFpbi1sYWtlLXdpdGgtbW91bnRhaW4tYmFja2dyb3VuZF8xODg1NDQtOTEyNi5qcGcnfSxcclxuICAgICAgICB7aW1nU3JjOidodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL3BhaW50aW5nLW1vdW50YWluLWxha2Utd2l0aC1tb3VudGFpbi1iYWNrZ3JvdW5kXzE4ODU0NC05MTI2LmpwZyd9ICAgIFxyXG4gICAgXVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPEltYWdlWm9vbSBrZXk9e2luZGV4fSBpbWFnZVVybD17aXRlbS5pbWdTcmN9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21BcHBcclxuXHJcbmNvbnN0IEltYWdlWm9vbSA9ICh7IGltYWdlVXJsIH0pID0+IHtcclxuICAgIGNvbnN0IFt6b29tTGV2ZWwsIHNldFpvb21MZXZlbF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlWm9vbUluID0gKCkgPT4ge1xyXG4gICAgICBzZXRab29tTGV2ZWwocHJldlpvb20gPT4gcHJldlpvb20gKyAwLjIpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICAgIHNldFpvb21MZXZlbChwcmV2Wm9vbSA9PiBNYXRoLm1heCgxLCBwcmV2Wm9vbSAtIDAuMikpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XHJcbiAgICAgIHNldFBvc2l0aW9uKHsgXHJcbiAgICAgICAgeDogZS5uYXRpdmVFdmVudC5vZmZzZXRYLFxyXG4gICAgICAgIHk6IGUubmF0aXZlRXZlbnQub2Zmc2V0WVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXpvb20tY29udGFpbmVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgYWx0PVwiWm9vbWFibGUgSW1hZ2VcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKiAke3pvb21MZXZlbH0pYCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3Bvc2l0aW9uLnggKiAoem9vbUxldmVsIC0gMSl9cHgsIC0ke3Bvc2l0aW9uLnkgKiAoem9vbUxldmVsIC0gMSl9cHgpYCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6b29tLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVpvb21Jbn0+Wm9vbSBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVab29tT3V0fT5ab29tIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDdXN0b21BcHAiLCJkYXRhIiwiaW1nU3JjIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSW1hZ2Vab29tIiwiaW1hZ2VVcmwiLCJ6b29tTGV2ZWwiLCJzZXRab29tTGV2ZWwiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwieCIsInkiLCJoYW5kbGVab29tSW4iLCJwcmV2Wm9vbSIsImhhbmRsZVpvb21PdXQiLCJNYXRoIiwibWF4IiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm92ZXJmbG93IiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwib25Nb3VzZU1vdmUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reference/repository/imagezoom/1/page.js\n"));

/***/ })

});