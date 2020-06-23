/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/imagentexto/index.js":
/*!**********************************!*\
  !*** ./src/imagentexto/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _manzana_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manzana.svg */ "./src/manzana.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    URLInputButton = _wp$blockEditor.URLInputButton,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button; //Logo para el bloque


registerBlockType('manzanita/imagentexto', {
  title: 'Imagen-Texto',
  icon: {
    src: _manzana_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'manzanita-gutenberg',
  attributes: {
    imagen: {
      type: 'string',
      source: 'attribute',
      selector: '.i-content img',
      attribute: 'src'
    },
    titulo: {
      type: 'string',
      source: 'html',
      selector: '.t-content h1'
    },
    texto: {
      type: 'string',
      source: 'html',
      selector: '.t-content p'
    },
    textColor: {
      type: 'string'
    },
    bgColor: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        imagen = _props$attributes.imagen,
        titulo = _props$attributes.titulo,
        texto = _props$attributes.texto,
        textColor = _props$attributes.textColor,
        bgColor = _props$attributes.bgColor,
        setAttributes = props.setAttributes;

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagen: nuevaImagen.sizes.full.url
      });
    };

    var onChangeTitulo = function onChangeTitulo(titulo) {
      setAttributes({
        titulo: titulo
      });
    };

    var onChangeTexto = function onChangeTexto(texto) {
      setAttributes({
        texto: texto
      });
    };

    var onBgColor = function onBgColor(bgColor) {
      setAttributes({
        bgColor: bgColor
      });
    };

    var onTextColor = function onTextColor(textColor) {
      setAttributes({
        textColor: textColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Ajustes de color',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color de Fondo")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: bgColor,
      onChange: onBgColor
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color del texto")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: textColor,
      onChange: onTextColor
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "it-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "i-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagen
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "manzanita-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "t-content",
      style: {
        backgroundColor: bgColor,
        color: textColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agrega el t\xEDtulo",
      onChange: onChangeTitulo,
      value: titulo
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agregar texto",
      onChange: onChangeTexto,
      value: texto
    })))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        imagen = _props$attributes2.imagen,
        titulo = _props$attributes2.titulo,
        texto = _props$attributes2.texto,
        textColor = _props$attributes2.textColor,
        bgColor = _props$attributes2.bgColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "it-content",
      style: {
        backgroundColor: bgColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "i-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagen
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "t-content",
      style: {
        color: textColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: titulo
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: texto
    })))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imagentexto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagentexto */ "./src/imagentexto/index.js");
/* harmony import */ var _textoimagen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textoimagen */ "./src/textoimagen/index.js");



/***/ }),

/***/ "./src/manzana.svg":
/*!*************************!*\
  !*** ./src/manzana.svg ***!
  \*************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgManzana; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  clipRule: "evenodd",
  d: "M30.328 10.765c-.803 1.536-2.144 2.587-4.211 3.149-.541-2.066-.301-3.753.629-5.219.933-1.469 2.55-2.799 4.761-4.114-.033 2.578-.374 4.645-1.179 6.184m-8.574 3.072C13.87 10.165 4.725 15.391 4.725 24.363c.024 5.968 2.898 15.336 6.224 20.274C13.093 47.818 15.796 50 19.073 50c1.879 0 4.196-1.001 5.93-1.577 1.768.587 4.038 1.577 5.949 1.569 3.262-.015 5.967-2.203 8.115-5.386 3.368-4.992 6.191-14.185 6.208-20.245 0-6.48-5.17-11.736-11.673-11.736-.389 0-.778.019-1.166.058C34.693 9.054 34.337 4.131 34.15 0c-3.454 1.792-7.583 3.806-9.733 7.151a35.416 35.416 0 00-2.323-5.46l-3.182 1.516c1.858 3.427 3.613 7.224 4.347 11.456a12.984 12.984 0 00-1.505-.826zm.433 6.501c-2.57-3.125-7.564-3.64-10.473-.726-3.718 3.728-1.123 11.754.489 16.182l2.312-.839c-1.188-3.263-3.743-10.916-1.057-13.608 1.869-1.874 5.195-1.439 6.83.553l1.899-1.562zM7.521 24.362c0-6.918 7.003-10.811 13.052-7.991 2.138.994 3.019 2.132 4.429 3.85 2.357-2.872 4.598-4.802 8.599-4.802 4.951 0 8.888 4.006 8.888 8.939 0 5.45-2.699 14.181-5.739 18.686-1.661 2.461-3.625 4.15-5.81 4.162-1.636.005-4.273-1.167-5.939-1.718-1.674.555-4.277 1.715-5.929 1.715-2.198 0-4.157-1.68-5.807-4.129-3.028-4.496-5.72-13.277-5.744-18.712z",
  fillRule: "evenodd"
});

function SvgManzana(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 50,
    width: 50
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkxheWVyXzEzIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4zMjgsMTAuNzY1Yy0wLjgwMywxLjUzNi0yLjE0NCwyLjU4Ny00LjIxMSwzLjE0OSAgIGMtMC41NDEtMi4wNjYtMC4zMDEtMy43NTMsMC42MjktNS4yMTljMC45MzMtMS40NjksMi41NS0yLjc5OSw0Ljc2MS00LjExNEMzMS40NzQsNy4xNTksMzEuMTMzLDkuMjI2LDMwLjMyOCwxMC43NjUgICAgTTIxLjc1NCwxMy44MzdDMTMuODcsMTAuMTY1LDQuNzI1LDE1LjM5MSw0LjcyNSwyNC4zNjNjMC4wMjQsNS45NjgsMi44OTgsMTUuMzM2LDYuMjI0LDIwLjI3NEMxMy4wOTMsNDcuODE4LDE1Ljc5Niw1MCwxOS4wNzMsNTAgICBjMS44NzksMCw0LjE5Ni0xLjAwMSw1LjkzLTEuNTc3YzEuNzY4LDAuNTg3LDQuMDM4LDEuNTc3LDUuOTQ5LDEuNTY5YzMuMjYyLTAuMDE1LDUuOTY3LTIuMjAzLDguMTE1LTUuMzg2ICAgYzMuMzY4LTQuOTkyLDYuMTkxLTE0LjE4NSw2LjIwOC0yMC4yNDVjMC02LjQ4LTUuMTctMTEuNzM2LTExLjY3My0xMS43MzZjLTAuMzg5LDAtMC43NzgsMC4wMTktMS4xNjYsMC4wNTggICBDMzQuNjkzLDkuMDU0LDM0LjMzNyw0LjEzMSwzNC4xNSwwYy0zLjQ1NCwxLjc5Mi03LjU4MywzLjgwNi05LjczMyw3LjE1MWMtMC42MjItMS44NzktMS4zOTMtMy43MDUtMi4zMjMtNS40NmwtMy4xODIsMS41MTYgICBjMS44NTgsMy40MjcsMy42MTMsNy4yMjQsNC4zNDcsMTEuNDU2QzIyLjc3OCwxNC4zNTUsMjIuMjc0LDE0LjA4LDIxLjc1NCwxMy44Mzd6IE0yMi4xODcsMjAuMzM4ICAgYy0yLjU3LTMuMTI1LTcuNTY0LTMuNjQtMTAuNDczLTAuNzI2Yy0zLjcxOCwzLjcyOC0xLjEyMywxMS43NTQsMC40ODksMTYuMTgybDIuMzEyLTAuODM5Yy0xLjE4OC0zLjI2My0zLjc0My0xMC45MTYtMS4wNTctMTMuNjA4ICAgYzEuODY5LTEuODc0LDUuMTk1LTEuNDM5LDYuODMsMC41NTNMMjIuMTg3LDIwLjMzOHogTTcuNTIxLDI0LjM2MmMwLTYuOTE4LDcuMDAzLTEwLjgxMSwxMy4wNTItNy45OTEgICBjMi4xMzgsMC45OTQsMy4wMTksMi4xMzIsNC40MjksMy44NWMyLjM1Ny0yLjg3Miw0LjU5OC00LjgwMiw4LjU5OS00LjgwMmM0Ljk1MSwwLDguODg4LDQuMDA2LDguODg4LDguOTM5ICAgYzAsNS40NS0yLjY5OSwxNC4xODEtNS43MzksMTguNjg2Yy0xLjY2MSwyLjQ2MS0zLjYyNSw0LjE1LTUuODEsNC4xNjJjLTEuNjM2LDAuMDA1LTQuMjczLTEuMTY3LTUuOTM5LTEuNzE4ICAgYy0xLjY3NCwwLjU1NS00LjI3NywxLjcxNS01LjkyOSwxLjcxNWMtMi4xOTgsMC00LjE1Ny0xLjY4LTUuODA3LTQuMTI5QzEwLjIzNywzOC41NzgsNy41NDUsMjkuNzk3LDcuNTIxLDI0LjM2MnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48ZyBpZD0iTGF5ZXJfMTIiLz48ZyBpZD0iTGF5ZXJfMTEiLz48ZyBpZD0iTGF5ZXJfMTAiLz48ZyBpZD0iTGF5ZXJfOSIvPjxnIGlkPSJMYXllcl84Ii8+PGcgaWQ9IkxheWVyXzciLz48ZyBpZD0iTGF5ZXJfNiIvPjxnIGlkPSJMYXllcl81Ii8+PGcgaWQ9IkxheWVyXzQiLz48ZyBpZD0iTGF5ZXJfMyIvPjxnIGlkPSJMYXllcl8yIi8+PC9zdmc+");


/***/ }),

/***/ "./src/textoimagen/index.js":
/*!**********************************!*\
  !*** ./src/textoimagen/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _manzana_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manzana.svg */ "./src/manzana.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    URLInputButton = _wp$blockEditor.URLInputButton,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    FormToggle = _wp$components.FormToggle; //Logo para el bloque


registerBlockType('manzanita/textoimagen', {
  title: 'Texto-Imagen',
  icon: {
    src: _manzana_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'manzanita-gutenberg',
  attributes: {
    imagen: {
      type: 'string',
      source: 'attribute',
      selector: '.i-content img',
      attribute: 'src'
    },
    titulo: {
      type: 'string',
      source: 'html',
      selector: '.t-content h1'
    },
    texto: {
      type: 'string',
      source: 'html',
      selector: '.t-content p'
    },
    textColor: {
      type: 'string'
    },
    bgColor: {
      type: 'string'
    },
    hasButton: {
      type: 'boolean',
      default: true
    },
    urlButton: {
      type: 'string'
    },
    buttonText: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        imagen = _props$attributes.imagen,
        titulo = _props$attributes.titulo,
        texto = _props$attributes.texto,
        textColor = _props$attributes.textColor,
        bgColor = _props$attributes.bgColor,
        hasButton = _props$attributes.hasButton,
        urlButton = _props$attributes.urlButton,
        buttonText = _props$attributes.buttonText,
        setAttributes = props.setAttributes;

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagen: nuevaImagen.sizes.full.url
      });
    };

    var onChangeTitulo = function onChangeTitulo(titulo) {
      setAttributes({
        titulo: titulo
      });
    };

    var onChangeTexto = function onChangeTexto(texto) {
      setAttributes({
        texto: texto
      });
    };

    var onBgColor = function onBgColor(bgColor) {
      setAttributes({
        bgColor: bgColor
      });
    };

    var onTextColor = function onTextColor(textColor) {
      setAttributes({
        textColor: textColor
      });
    };

    var onChangeButton = function onChangeButton(hasButtonValue) {
      setAttributes({
        hasButton: !hasButton
      });
    };

    var onChangeButtonText = function onChangeButtonText(buttonText) {
      setAttributes({
        buttonText: buttonText
      });
    };

    var onChangeURL = function onChangeURL(urlButton) {
      setAttributes({
        urlButton: urlButton
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Ajustes de color',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color de Fondo")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: bgColor,
      onChange: onBgColor
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color del texto")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: textColor,
      onChange: onTextColor
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Ajustes del bot\xF3n"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "\xBFAgregar bot\xF3n debajo del texto?")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      onChange: onChangeButton,
      checked: hasButton
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "it-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "t-content",
      style: {
        backgroundColor: bgColor,
        color: textColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agrega el t\xEDtulo",
      onChange: onChangeTitulo,
      value: titulo
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agregar texto",
      onChange: onChangeTexto,
      value: texto
    })), hasButton && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: urlButton
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agregar texto",
      onChange: onChangeButtonText,
      value: buttonText
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      onChange: onChangeURL,
      url: urlButton
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "i-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagen
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "manzanita-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        imagen = _props$attributes2.imagen,
        titulo = _props$attributes2.titulo,
        texto = _props$attributes2.texto,
        textColor = _props$attributes2.textColor,
        bgColor = _props$attributes2.bgColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "it-content ti",
      style: {
        backgroundColor: bgColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "t-content",
      style: {
        color: textColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: titulo
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: texto
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "i-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagen
    }))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map