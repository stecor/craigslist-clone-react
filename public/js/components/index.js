webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(243);

var _Header = __webpack_require__(118);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(122);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(123);

var _Listings2 = _interopRequireDefault(_Listings);

var _Category = __webpack_require__(120);

var _Category2 = _interopRequireDefault(_Category);

var _Details = __webpack_require__(121);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:details', component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "left-menu" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "Craigslist"
            ),
            _react2.default.createElement(
              "div",
              { className: "city" },
              "San Francisco ",
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "right-menu" },
            _react2.default.createElement(
              "div",
              { className: "user-img" },
              _react2.default.createElement("img", { src: "https://png.icons8.com/ios/2x/user-male-circle-filled.png", alt: "user" })
            ),
            _react2.default.createElement(
              "div",
              { className: "user-dropdown" },
              "my account ",
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "post-btn" },
              "post to classifieds"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(116);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "category" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          "this category is ",
          match.params.category
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Details, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "details-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "white-box" },
            _react2.default.createElement(
              "section",
              { className: "submenu" },
              _react2.default.createElement(
                "div",
                { className: "direction" },
                _react2.default.createElement(
                  "a",
                  { href: "#1", className: "next" },
                  "Prev"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#1", className: "next" },
                  "Next"
                )
              ),
              _react2.default.createElement(
                "nav",
                { className: "sub-links" },
                _react2.default.createElement(
                  "a",
                  { href: "#1" },
                  "More Ads by User"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#1" },
                  "Print"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#1" },
                  "Share"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#1" },
                  "Contact Seller"
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { className: "content-area" },
              _react2.default.createElement(
                "div",
                { className: "media-column" },
                _react2.default.createElement(
                  "div",
                  { className: "gallery" },
                  _react2.default.createElement(
                    "div",
                    { className: "slider" },
                    _react2.default.createElement(
                      "div",
                      { className: "main-image" },
                      _react2.default.createElement("div", { className: "arrows left-arrow" }),
                      _react2.default.createElement("div", { className: "arrows right-arrow" }),
                      _react2.default.createElement("div", { className: "image-1", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "thumbnails" },
                    _react2.default.createElement("div", { className: "thumb-img", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } }),
                    _react2.default.createElement("div", { className: "thumb-img", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } }),
                    _react2.default.createElement("div", { className: "thumb-img", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } }),
                    _react2.default.createElement("div", { className: "thumb-img", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } }),
                    _react2.default.createElement("div", { className: "thumb-img", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } }),
                    _react2.default.createElement("div", { className: "thumb-img", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } }),
                    _react2.default.createElement("div", { className: "thumb-img", style: { "backgroundImage": "url('https://www.technobezz.com/life/wp-content/uploads/2017/01/pexels-photo-170811.jpg')" } })
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "details-column" },
                _react2.default.createElement(
                  "div",
                  { className: "date" },
                  "Posted: Feb 28th"
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "title" },
                  "Black 2016 BMW"
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "price" },
                  "$46,298"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "more-details" },
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Vin"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "rwe7r9e87787ew87wer7e"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Mileage"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "345660"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Transmition"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Manual"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Vin"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "rwe7r9e87787ew87wer7e"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Mileage"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "345660"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Transmition"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Manual"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "description" },
                  _react2.default.createElement(
                    "label",
                    { htmlFor: "" },
                    "Description"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "Lorem ipsum dolor amet everyday carry brunch hexagon adaptogen. Enamel pin shabby chic everyday carry pug meggings locavore blog shoreditch seitan. Copper mug everyday carry pitchfork fam hexagon tote bag chartreuse air plant taiyaki. Ethical salvia taiyaki, butcher selfies freegan vape pug microdosing blog copper mug ramps bitters adaptogen. Tbh schlitz banh mi, +1 pitchfork cliche ennui. Paleo tattooed palo santo try-hard messenger bag skateboard meh wayfarers."
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "Lorem ipsum dolor amet everyday carry brunch hexagon adaptogen. Enamel pin shabby chic everyday carry pug meggings locavore blog shoreditch seitan. Copper mug everyday carry pitchfork fam hexagon tote bag chartreuse air plant taiyaki. Ethical salvia taiyaki, butcher selfies freegan vape pug microdosing blog copper mug ramps bitters adaptogen. Tbh schlitz banh mi, +1 pitchfork cliche ennui. Paleo tattooed palo santo try-hard messenger bag skateboard meh wayfarers."
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "Lorem ipsum dolor amet everyday carry brunch hexagon adaptogen. Enamel pin shabby chic everyday carry pug meggings locavore blog shoreditch seitan. Copper mug everyday carry pitchfork fam hexagon tote bag chartreuse air plant taiyaki. Ethical salvia taiyaki, butcher selfies freegan vape pug microdosing blog copper mug ramps bitters adaptogen. Tbh schlitz banh mi, +1 pitchfork cliche ennui. Paleo tattooed palo santo try-hard messenger bag skateboard meh wayfarers."
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.loopTags = function () {
      var testTags = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
      return testTags.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: index, className: "tag" },
          "Apple macbook"
        );
      });
    };

    _this.loopCategories = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];

      return testArray.map(function (item, index) {

        return _react2.default.createElement(
          "div",
          { className: "categories", key: index },
          _react2.default.createElement(
            "div",
            { className: "title" },
            "Community"
          ),
          _react2.default.createElement(
            "div",
            { className: "group-links" },
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Community"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Activities"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Artists"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Childcare"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Classes"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "events"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "General"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Groups"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Local News"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Lost + Found"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Musicians"
            ),
            _react2.default.createElement(
              "a",
              { href: "#1", className: "link" },
              "Pets"
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Connecting People ",
            _react2.default.createElement("br", null),
            " Everywhere  :)"
          ),
          _react2.default.createElement(
            "section",
            { className: 'links' },
            this.loopCategories()
          ),
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", { type: "text", name: "search", className: "search", placeholder: "Search classifieds, Housing, Discussions, Personals..." }),
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement("i", { className: "far fa-clock" }),
              "Trending Now"
            ),
            _react2.default.createElement(
              "div",
              { className: "trending-tags" },
              this.loopTags()
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopItems = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];

      return testArray.map(function (item, index) {

        return _react2.default.createElement(
          "div",
          { className: "item", key: index },
          _react2.default.createElement(
            "div",
            { className: "image" },
            _react2.default.createElement(
              "div",
              { className: "price" },
              "$8900"
            ),
            "image"
          ),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement(
              "h5",
              null,
              "2011 Bmw m3"
            ),
            _react2.default.createElement("i", { className: "far fa-star" }),
            _react2.default.createElement(
              "i",
              { className: "material-icons ma-clear" },
              "\uE14C"
            ),
            _react2.default.createElement(
              "h5",
              null,
              "Gray on sale"
            ),
            _react2.default.createElement(
              "h6",
              null,
              "Ridgewood"
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                { htmlFor: "price" },
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  { name: "min-price", className: "min-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  { name: "max-price", className: "max-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "1000" },
                    "1000"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group make" },
              _react2.default.createElement(
                "label",
                { htmlFor: "make" },
                "Make"
              ),
              _react2.default.createElement(
                "select",
                { name: "make", className: "make" },
                _react2.default.createElement(
                  "option",
                  { value: "bmw" },
                  "bmw"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group model" },
              _react2.default.createElement(
                "label",
                { htmlFor: "model" },
                "Model"
              ),
              _react2.default.createElement(
                "select",
                { name: "model", className: "model" },
                _react2.default.createElement(
                  "option",
                  { value: "bmw" },
                  "bmw"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group miles" },
              _react2.default.createElement(
                "label",
                { htmlFor: "miles" },
                "Miles from zip"
              ),
              _react2.default.createElement(
                "select",
                { name: "miles", className: "model" },
                _react2.default.createElement(
                  "option",
                  { value: "bmw" },
                  "bmw"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn" },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "select-view", className: "select-view" },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "thumb" },
                      "Thumb View"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "sort-dropdown", className: "sort-dropdown" },
                    _react2.default.createElement(
                      "option",
                      { value: "newest" },
                      "Newest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[119]);