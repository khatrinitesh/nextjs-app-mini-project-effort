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

/***/ "(app-pages-browser)/./src/app/reference/repository/shakeanimage/1/page.js":
/*!*************************************************************!*\
  !*** ./src/app/reference/repository/shakeanimage/1/page.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/reference/repository/shakeanimage/1/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst CustomApp = ()=>{\n    _s();\n    // Assuming you have an array of data\n    const data = [\n        {\n            name: \"Jane Doe\",\n            role: \"CEO & Founder\",\n            description: \"Some text that describes me lorem ipsum ipsum lorem.\",\n            email: \"example@example.com\",\n            imgSrc: \"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg\"\n        },\n        {\n            name: \"Mike Ross\",\n            role: \"Art Director\",\n            description: \"Some text that describes me lorem ipsum ipsum lorem.\",\n            email: \"example@example.com\",\n            imgSrc: \"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg\"\n        },\n        {\n            name: \"John Doe\",\n            role: \"Designer\",\n            description: \"Some text that describes me lorem ipsum ipsum lorem.\",\n            email: \"example@example.com\",\n            imgSrc: \"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg\"\n        }\n    ];\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShakingImage, {}, void 0, false, {\n            fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\shakeanimage\\\\1\\\\page.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(CustomApp, \"zXDeq4m9Y7WtdC+23XKUkFqqrmM=\");\n_c = CustomApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomApp);\nconst ShakingImage = (param)=>{\n    let { images } = param;\n    _s1();\n    const [isShaking, setShaking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleImageClick = ()=>{\n        setShaking(true);\n        // Reset the shaking state after the animation duration (e.g., 1 second)\n        setTimeout(()=>{\n            setShaking(false);\n        }, 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    alt: \"Image \".concat(index),\n                    className: \"image \".concat(isShaking ? \"shake\" : \"\"),\n                    onClick: handleImageClick\n                }, index, false, {\n                    fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\shakeanimage\\\\1\\\\page.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false))\n    }, void 0, false, {\n        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\shakeanimage\\\\1\\\\page.js\",\n        lineNumber: 56,\n        columnNumber: 7\n    }, undefined);\n};\n_s1(ShakingImage, \"GPUG7uf3jxykxe7eC+I80gj6dyQ=\");\n_c1 = ShakingImage;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomApp\");\n$RefreshReg$(_c1, \"ShakingImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVmZXJlbmNlL3JlcG9zaXRvcnkvc2hha2VhbmltYWdlLzEvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ25CO0FBRXJCLE1BQU1FLFlBQVk7O0lBRWQscUNBQXFDO0lBQ3ZDLE1BQU1DLE9BQU87UUFDWDtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsYUFBYTtZQUNiQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VKLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsUUFBUTtRQUNWO1FBQ0E7WUFDRUosTUFBTTtZQUNOQyxNQUFNO1lBQ05DLGFBQWE7WUFDYkMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7S0FDRDtJQUVELE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQ0U7SUFFbEMscUJBQ0U7a0JBQ0ksNEVBQUNROzs7Ozs7QUFHVDtHQWxDTVQ7S0FBQUE7QUFvQ04sK0RBQWVBLFNBQVNBLEVBQUE7QUFFeEIsTUFBTVMsZUFBZ0I7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQzdCLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNYyxtQkFBbUI7UUFDckJELFdBQVc7UUFFWCx3RUFBd0U7UUFDeEVFLFdBQVc7WUFDVEYsV0FBVztRQUNiLEdBQUc7SUFDUDtJQUVBLHFCQUNFLDhEQUFDRztrQkFDRUwsT0FBT00sR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQjswQkFDRSw0RUFBQ0M7b0JBQWdCQyxLQUFLSDtvQkFBT0ksS0FBSyxTQUFlLE9BQU5IO29CQUFTSSxXQUFXLFNBQWtDLE9BQXpCWCxZQUFZLFVBQVU7b0JBQU1ZLFNBQVNWO21CQUFuR0s7Ozs7Ozs7Ozs7O0FBS3BCO0lBckJJVDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlZmVyZW5jZS9yZXBvc2l0b3J5L3NoYWtlYW5pbWFnZS8xL3BhZ2UuanM/ZGY2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgQ3VzdG9tQXBwID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIGFuIGFycmF5IG9mIGRhdGFcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSmFuZSBEb2UnLFxyXG4gICAgICByb2xlOiAnQ0VPICYgRm91bmRlcicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnU29tZSB0ZXh0IHRoYXQgZGVzY3JpYmVzIG1lIGxvcmVtIGlwc3VtIGlwc3VtIGxvcmVtLicsXHJcbiAgICAgIGVtYWlsOiAnZXhhbXBsZUBleGFtcGxlLmNvbScsXHJcbiAgICAgIGltZ1NyYzogJ2h0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vcGFpbnRpbmctbW91bnRhaW4tbGFrZS13aXRoLW1vdW50YWluLWJhY2tncm91bmRfMTg4NTQ0LTkxMjYuanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdNaWtlIFJvc3MnLFxyXG4gICAgICByb2xlOiAnQXJ0IERpcmVjdG9yJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdTb21lIHRleHQgdGhhdCBkZXNjcmliZXMgbWUgbG9yZW0gaXBzdW0gaXBzdW0gbG9yZW0uJyxcclxuICAgICAgZW1haWw6ICdleGFtcGxlQGV4YW1wbGUuY29tJyxcclxuICAgICAgaW1nU3JjOiAnaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by9wYWludGluZy1tb3VudGFpbi1sYWtlLXdpdGgtbW91bnRhaW4tYmFja2dyb3VuZF8xODg1NDQtOTEyNi5qcGcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0pvaG4gRG9lJyxcclxuICAgICAgcm9sZTogJ0Rlc2lnbmVyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdTb21lIHRleHQgdGhhdCBkZXNjcmliZXMgbWUgbG9yZW0gaXBzdW0gaXBzdW0gbG9yZW0uJyxcclxuICAgICAgZW1haWw6ICdleGFtcGxlQGV4YW1wbGUuY29tJyxcclxuICAgICAgaW1nU3JjOiAnaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by9wYWludGluZy1tb3VudGFpbi1sYWtlLXdpdGgtbW91bnRhaW4tYmFja2dyb3VuZF8xODg1NDQtOTEyNi5qcGcnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoZGF0YSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPFNoYWtpbmdJbWFnZS8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUFwcFxyXG5cclxuY29uc3QgU2hha2luZ0ltYWdlICA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbaXNTaGFraW5nLCBzZXRTaGFraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNoYWtpbmcodHJ1ZSk7XHJcbiAgICBcclxuICAgICAgICAvLyBSZXNldCB0aGUgc2hha2luZyBzdGF0ZSBhZnRlciB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uIChlLmcuLCAxIHNlY29uZClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldFNoYWtpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXtpbWFnZX0gYWx0PXtgSW1hZ2UgJHtpbmRleH1gfSBjbGFzc05hbWU9e2BpbWFnZSAke2lzU2hha2luZyA/ICdzaGFrZScgOiAnJ31gfSBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1c3RvbUFwcCIsImRhdGEiLCJuYW1lIiwicm9sZSIsImRlc2NyaXB0aW9uIiwiZW1haWwiLCJpbWdTcmMiLCJpdGVtcyIsInNldEl0ZW1zIiwiU2hha2luZ0ltYWdlIiwiaW1hZ2VzIiwiaXNTaGFraW5nIiwic2V0U2hha2luZyIsImhhbmRsZUltYWdlQ2xpY2siLCJzZXRUaW1lb3V0IiwiZGl2IiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reference/repository/shakeanimage/1/page.js\n"));

/***/ })

});