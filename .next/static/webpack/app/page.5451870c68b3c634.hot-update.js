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

/***/ "(app-pages-browser)/./src/app/reference/repository/portfoliofiltering/1/page.js":
/*!*******************************************************************!*\
  !*** ./src/app/reference/repository/portfoliofiltering/1/page.js ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/reference/repository/portfoliofiltering/1/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CustomApp = ()=>{\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const categories = [\n        \"all\",\n        \"web\",\n        \"mobile\",\n        \"design\"\n    ];\n    const handleSelectCategory = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProject = selectedCategory === \"all\" ? data : data.filter((val)=>val.category === selectedCategory);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Filter by category:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\portfoliofiltering\\\\1\\\\page.js\",\n                lineNumber: 19,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                onChange: (e)=>handleSelectCategory(e.target.value),\n                value: selectedCategory,\n                children: categories.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: category,\n                            children: category\n                        }, category, false, {\n                            fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\portfoliofiltering\\\\1\\\\page.js\",\n                            lineNumber: 24,\n                            columnNumber: 18\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\portfoliofiltering\\\\1\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"portfolio-gallery\",\n                children: [\n                    filteredProject.map((project)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"portfolio-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: project.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\portfoliofiltering\\\\1\\\\page.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        }, project.id, false, {\n                            fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\portfoliofiltering\\\\1\\\\page.js\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, undefined);\n                    }),\n                    filteredProject.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"no projects found for the selected category.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\portfoliofiltering\\\\1\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\portfoliofiltering\\\\1\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CustomApp, \"ka1F1ceqEXioutdx48zEaS3nBME=\");\n_c = CustomApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomApp);\nvar _c;\n$RefreshReg$(_c, \"CustomApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVmZXJlbmNlL3JlcG9zaXRvcnkvcG9ydGZvbGlvZmlsdGVyaW5nLzEvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ25CO0FBRXJCLE1BQU1FLFlBQVk7O0lBRWhCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0gsK0NBQVFBLENBQUM7SUFFekQsTUFBTUksYUFBYTtRQUFDO1FBQU87UUFBTztRQUFVO0tBQVM7SUFFckQsTUFBTUMsdUJBQXVCLENBQUNDO1FBQzVCSCxvQkFBb0JHO0lBQ3RCO0lBRUEsTUFBTUMsa0JBQWtCTCxxQkFBcUIsUUFBUU0sT0FBT0EsS0FBS0MsTUFBTSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJSixRQUFRLEtBQUtKO0lBRWhHLHFCQUNFOzswQkFDQyw4REFBQ1M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQU9DLFVBQVUsQ0FBQ0MsSUFBTVQscUJBQXFCUyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQUdBLE9BQU9kOzBCQUNsRUUsV0FBV2EsR0FBRyxDQUFDLENBQUNYO29CQUNiLHFCQUNJO2tDQUNDLDRFQUFDWTs0QkFBc0JGLE9BQU9WO3NDQUFXQTsyQkFBNUJBOzs7Ozs7Z0JBR3RCOzs7Ozs7MEJBRUgsOERBQUNhO2dCQUFJQyxXQUFVOztvQkFDWGIsZ0JBQWdCVSxHQUFHLENBQUMsQ0FBQ0k7d0JBQ2xCLHFCQUNJLDhEQUFDRjs0QkFBcUJDLFdBQVU7c0NBQzVCLDRFQUFDRTswQ0FBSUQsUUFBUUUsS0FBSzs7Ozs7OzJCQURaRixRQUFRRyxFQUFFOzs7OztvQkFLNUI7b0JBQ0NqQixnQkFBZ0JrQixNQUFNLEtBQUssbUJBQ3hCLDhEQUFDQztrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQXhDTXpCO0tBQUFBO0FBMENOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVmZXJlbmNlL3JlcG9zaXRvcnkvcG9ydGZvbGlvZmlsdGVyaW5nLzEvcGFnZS5qcz9hOTNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBDdXN0b21BcHAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCdhbGwnKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IFsnYWxsJywgJ3dlYicsICdtb2JpbGUnLCAnZGVzaWduJ107XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0ID0gc2VsZWN0ZWRDYXRlZ29yeSA9PT0gJ2FsbCcgPyBkYXRhIDogZGF0YS5maWx0ZXIodmFsID0+IHZhbC5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgPGxhYmVsPkZpbHRlciBieSBjYXRlZ29yeTo8L2xhYmVsPlxyXG4gICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWxlY3RDYXRlZ29yeShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtzZWxlY3RlZENhdGVnb3J5fT5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgPC9zZWxlY3Q+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZ2FsbGVyeVwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3QubWFwKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfSBjbGFzc05hbWU9J3BvcnRmb2xpby1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e3Byb2plY3QudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUmVuZGVyIG90aGVyIHByb2plY3QgZGV0YWlscyAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdC5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICA8cD5ubyBwcm9qZWN0cyBmb3VuZCBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LjwvcD5cclxuICAgICAgICApfVxyXG4gICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUFwcFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1c3RvbUFwcCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImhhbmRsZVNlbGVjdENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJmaWx0ZXJlZFByb2plY3QiLCJkYXRhIiwiZmlsdGVyIiwidmFsIiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm9wdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInByb2plY3QiLCJoMyIsInRpdGxlIiwiaWQiLCJsZW5ndGgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reference/repository/portfoliofiltering/1/page.js\n"));

/***/ })

});