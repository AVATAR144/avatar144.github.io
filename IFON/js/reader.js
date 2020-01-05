(window.webpackJsonp = window.webpackJsonp || []).push([
  [3], {
    1: function (t, i, e) {
      t.exports = e("Ls0a")
    },
    Ls0a: function (t, e, x) {
      try {
        window.$ = window.jQuery = x("EVdn")
      } catch (t) {}
      $.fn.imagesLoaded = function () {
        var t = this.find('img[src!=""]');
        if (!t.length) return $.Deferred().resolve().promise();
        var i = [];
        return t.each(function () {
          var t = $.Deferred();
          i.push(t);
          var e = new Image;
          e.onload = function () {
            t.resolve()
          }, e.onerror = function () {
            t.resolve()
          }, e.src = this.src
        }), $.when.apply($, i)
      };
      var s, n, a = ["100%", "auto", "closest", "height", "floor", "max", "columnWidth", "style", "position", "relative", "webkitColumnGap", "MozColumnWidth", "MozColumnGap", "columnGap", "_fixImages", "round", "scrollWidth", "$subColumn", "find", '<div id="sub-column">', "remove", "pages", "$images", "_showWithPositioning", "target", "keyCode", "hasClass", "back", "getBookmark", "TAB", "preventDefault", "LEFT", "indexByProgress", "value", "flipDirection", "RIGHT", "SPACEBAR", "saveBookmark", "readerSwipeHandler", "originalEvent", "touches", "pageX", "pageY", "abs", "swipeDisabled", "progressByIndex", "ceil", "extend", "saveBookmarkTimer", "post", "pathname", "/bookmark", "content", "done", "status", "success", "$readPercentageEl", "text", "set", "stringify", "getProgress", "_hideControlsPagination", "_showControlsPagination", "$controlPaginateBack", "true", "attr", "removeAttr", "disabled", "_closePanelManager", "stopPropagation", "active", "$contentsPanel", "parents", ".popover", "addClass", "removeClass", "hideSettings", "_getCurrentFontSize", "$fontSizeEls", "filter", "each", "size", "_getNextFontSize", "data", "direction", "fontSize", "_checkAndDisableSelectFontSize", "font-size", "selected", "[data-value=", '[data-direction="-1"]', '[data-direction="1"]', "currentTarget", "lineHeight", "line-height", "theme-white theme-black theme-sepia", "theme-", "panelManager", "disableReader", "open", "close", "mobile-width", "tablet-width", "desktop-width", "mobile-width tablet-width desktop-width", "isMobileWidth", "isTabletWidth", "setItem", "getItem", "$appContainer", ".panel .overlay", "onInactivePanelClick", ".panel_container", ".stack", "children", ".panel.active", "right", "capterHandler", "loadingCapterIndex", ".text-container", "#loader", "/chapter", 'meta[name="_token"]', "updateText", "hide", "html", "imagesLoaded", "then", "-webkit-transition", "app", "bookId", "location", "bookmark", "$html", "$body", "body", "$el", "#reader .text-container", "$rendererEl", "#reader .embed .renderer", "columnsCount", "delegate", "loading", ".pagination.back", "$controlPaginateForward", ".pagination.forward", "$contentsButton", ".btn-contents", "$settingsButton", ".btn-settings", "$settingsPanel", ".settings", "touchStartX", "touchStartY", ".font-size-el", "$lineheightEls", ".lineheight-el", "$themeEls", ".theme-el", "options", "white", "sepia", "black", "medium", "normal", "extralarge", "small", "large", "0 20px 0", "0 40px 0", "5px 60px", "georgia", "Georgia, serif", "Georgia", "times", "Times, serif", "Times", "arial", "Arial, sans-serif", "Arial", "verdana", "Verdana", "init", "is_user", "settings", "get", "bookmark.", "parse", "startTime", "now", "capters", "capterIndex", "capter", "numCapters", "length", "isUser", "updateBookmark", "loadBookmark", "_setWindowSizeAttribute", "setFontSize", "setLineHeight", "theme", "loadCapter", "resize", "proxy", "layout", "keydown", "keyboardHandler", ".pagination", "click", "paginationClick", "paginationControlsMouseOver", "mouseout", "paginationControlsMouseOut", "settingsButtonDidClicked", "#reader", "enableReader", "#contents li", "touchstart", "_setTouchStartPoint", ".renderer", "touchmove", "$selectFontSizeEls", "selectFontSize", "changeLineHeight", "changeTheme", "initialize", "windowWidth", "width", "elWidth", "elTopIndent", "section.embed", "css", "top", "elLeftIndent", "transition", "unset", "offset", "left", "paginate", "show", "getIndex", "visible", "isDesktopWidth", "padding-left"];
      s = a, n = 129,
        function (t) {
          for (; --t;) s.push(s.shift())
        }(++n);
      var h = function (t, i) {
        return a[t -= 0]
      };
      window[h("0x0")] = new function () {
        this[h("0x0")] = {
          isDesktopWidth: function () {
            return !1
          }
        }, this[h("0x1")] = document[h("0x2")].pathname.split("/")[2], this[h("0x3")] = {
          value: 0,
          capter: 0
        }, this[h("0x4")] = $("html"), this[h("0x5")] = $(h("0x6")), this[h("0x7")] = $(h("0x8")), this[h("0x9")] = $(h("0xa")), this.el = this.$el[0], this[h("0xb")] = null, this[h("0xc")] = {
          $el: this[h("0x7")]
        }, this[h("0xd")] = !1, this.$controlPaginateBack = $(h("0xe")), this[h("0xf")] = $(h("0x10")), this[h("0x11")] = $(h("0x12")), this.$contentsPanel = $(".panel.contents"), this[h("0x13")] = $(h("0x14")), this[h("0x15")] = $(h("0x16")), this[h("0x17")] = null, this[h("0x18")] = null, this.$selectFontSizeEls = $(".select-font-size"), this.$fontSizeEls = $(h("0x19")), this[h("0x1a")] = $(h("0x1b")), this[h("0x1c")] = $(h("0x1d")), this.$readPercentageEl = $(".read-percentage span"), this[h("0x1e")] = {
          theme: [{
            name: h("0x1f"),
            text: h("0x1f"),
            value: h("0x1f")
          }, {
            name: "sepia",
            text: "sepia",
            value: h("0x20")
          }, {
            name: h("0x21"),
            text: "black",
            value: h("0x21")
          }],
          size: [{
            name: "small",
            value: 14,
            stop: !0
          }, {
            name: h("0x22"),
            value: 16,
            stop: !1
          }, {
            name: h("0x23"),
            value: 18,
            stop: !1
          }, {
            name: "large",
            value: 20,
            stop: !1
          }, {
            name: h("0x24"),
            value: 24,
            stop: !0
          }],
          lineHeight: [{
            name: h("0x25"),
            value: 1.3
          }, {
            name: h("0x22"),
            value: 1.4
          }, {
            name: h("0x26"),
            value: 1.6
          }],
          padding: [{
            name: h("0x25"),
            value: h("0x27")
          }, {
            name: h("0x22"),
            value: h("0x28")
          }, {
            name: h("0x26"),
            value: h("0x29")
          }],
          fontFamily: [{
            name: h("0x2a"),
            value: h("0x2b"),
            fullName: h("0x2c")
          }, {
            name: h("0x2d"),
            value: h("0x2e"),
            fullName: h("0x2f")
          }, {
            name: h("0x30"),
            value: h("0x31"),
            fullName: h("0x32")
          }, {
            name: h("0x33"),
            value: "Verdana, sans-serif",
            fullName: h("0x34")
          }]
        }, this[h("0x35")] = function (t) {
          if (!t[h("0x36")] && this[h("0x37")][h("0x38")](h("0x39") + this.bookId)) try {
            t[h("0x3")] = JSON[h("0x3a")](this[h("0x37")][h("0x38")](h("0x39") + this[h("0x1")]))
          } catch (t) {}
          this[h("0x3b")] = Date[h("0x3c")](), this[h("0x3d")] = t[h("0x3d")], this[h("0x3e")] = t[h("0x3")][h("0x3f")] || 0, this[h("0x40")] = t[h("0x3d")][h("0x41")], this[h("0x42")] = t[h("0x36")], t[h("0x3")] && (this[h("0x43")](t[h("0x3")]), this[h("0x44")] = !0), this[h("0x45")](), this[h("0x46")](this[h("0x37")][h("0x38")]("fontSize")), this[h("0x47")](this.settings.get("lineHeight")), this.setTheme(this[h("0x37")][h("0x38")](h("0x48"))), this[h("0x49")](this[h("0x3e")]), $(window)[h("0x4a")]($[h("0x4b")](this[h("0x4c")], this)), $(window).on(h("0x4d"), $.proxy(this[h("0x4e")], this)), $(h("0x4f")).on(h("0x50"), $[h("0x4b")](this[h("0x51")], this)), $(h("0x4f")).on("mouseover", $[h("0x4b")](this[h("0x52")], this)), $(h("0x4f")).on(h("0x53"), $[h("0x4b")](this[h("0x54")], this)), this[h("0x11")].on(h("0x50"), $[h("0x4b")](this.contentsButtonDidClicked, this)), this[h("0x13")].on(h("0x50"), $[h("0x4b")](this[h("0x55")], this)), $(".settings").on("click", $[h("0x4b")](this[h("0x55")], this)), $(h("0x56")).on(h("0x50"), $[h("0x4b")](this[h("0x57")], this)), $(h("0x58")).on(h("0x50"), $[h("0x4b")](this.capterHandler, this)), $(".renderer").on(h("0x59"), $[h("0x4b")](this[h("0x5a")], this)), $(h("0x5b")).on("MSPointerDown", $[h("0x4b")](this[h("0x5a")], this)), $(".renderer").on(h("0x5c"), $[h("0x4b")](this.readerSwipeHandler, this)), this[h("0x5d")].on(h("0x50"), $[h("0x4b")](this[h("0x5e")], this)), this[h("0x1a")].on(h("0x50"), $[h("0x4b")](this[h("0x5f")], this)), this[h("0x1c")].on("click", $[h("0x4b")](this[h("0x60")], this)), this.panelManager[h("0x61")]($("#reader"))
        }, this[h("0x4c")] = function () {
          this[h("0xc")][h("0x62")] = $(h("0x56"))[h("0x63")](), this[h("0xc")][h("0x64")] = this[h("0xc")][h("0x7")].width(), this[h("0xc")][h("0x65")] = parseInt($(h("0x66"))[h("0x67")](h("0x68"))), this[h("0xc")][h("0x69")] = $(h("0x4f"))[h("0x63")](), this.$el[h("0x67")](h("0x6a"), h("0x6b")), this.$el[h("0x67")]("-webkit-transition", "unset"), this[h("0x7")][h("0x67")]({
            left: 0
          });
          var t = this[h("0xc")][h("0x62")] - 2 * $("section.embed")[h("0x6c")]()[h("0x6d")] <= 940 ? 1 : 2;
          this[h("0x6e")](t), this[h("0x6f")](this[h("0x70")]()), this[h("0x7")].css(h("0x6a"), ""), this.$el[h("0x67")]("-webkit-transition", ""), this[h("0x7")][h("0x67")]({
            visibility: h("0x71")
          })
        }, this[h("0x6e")] = function (t) {
          var i = this.app[h("0x72")]() ? this[h("0x7")][h("0x6c")]()[h("0x6d")] + 20 : parseInt(this[h("0x7")].closest(h("0x5b"))[h("0x67")](h("0x73")));
          this.$el[h("0x67")]({
            height: h("0x74"),
            width: h("0x75")
          });
          var e, x = this[h("0x7")][h("0x63")](),
            s = this.$el[h("0x76")](h("0x5b"))[h("0x77")](),
            n = t || 1,
            a = n > 1 ? Math[h("0x78")](.0685 / (n - 1) * x) : Math[h("0x79")](i, 20),
            o = (x - a * (n - 1)) / n;
          this[h("0xb")] = n, this[h("0x7a")] = o, this.columnGap = a;
          var r = this.el,
            c = r[h("0x7b")];
          return c[h("0x7c")] = h("0x7d"), c[h("0x77")] = s + "px", c.webkitColumnWidth = o + "px", c[h("0x7e")] = a + "px", c[h("0x7f")] = o + "px", c[h("0x80")] = a + "px", c[h("0x7a")] = o + "px", c[h("0x81")] = a + "px", this[h("0x82")](o, Math[h("0x83")](.8 * s)), (e = Math[h("0x83")](r[h("0x84")] / (o + a))) * o + (e - 1) * a, e % 2 != 0 && 2 === n ? (this[h("0x85")] && this[h("0x7")][h("0x86")]("#sub-column")[h("0x41")] || (this[h("0x85")] = $(h("0x87")), this[h("0x7")].append(this.$subColumn)), this[h("0x85")][h("0x67")]({
            width: o + "px",
            height: s + "px"
          })) : this.$subColumn && (this.$subColumn[h("0x88")](), this[h("0x85")] = null), this[h("0x89")] = Math.round(r[h("0x84")] / (o + a)), this[h("0x89")]
        }, this[h("0x82")] = function (t, i) {
          this[h("0x8a")] = this.$el[h("0x86")]("img"), this[h("0x8a")].css({
            "max-width": t + "px",
            "max-height": i - 20 + "px"
          })
        }, this[h("0x6f")] = function (t) {
          var i = Math[h("0x79")](0, Math.min(t, this[h("0x89")] - 1)),
            e = i * (this[h("0x7a")] + this[h("0x81")]);
          return this._showWithPositioning(e), i
        }, this[h("0x8b")] = function (t) {
          this.el[h("0x7b")][h("0x6d")] = -t + "px"
        }, this[h("0x51")] = function (t) {
          t && t[h("0x8c")] && (t[h("0x8d")] = $(t[h("0x8c")])[h("0x76")](h("0x4f"))[h("0x8e")](h("0x8f")) ? 37 : 39, this[h("0x4e")](t))
        }, this[h("0x4e")] = function (t) {
          var i, e, x = {
              LEFT: 37,
              RIGHT: 39,
              TAB: 9,
              SPACEBAR: 32
            },
            s = this[h("0x90")]();
          if (t[h("0x8d")] !== x[h("0x91")]) {
            switch (t.keyCode) {
              case x[h("0x93")]:
                i = this[h("0x94")](s[h("0x95")]), e = -1, this[h("0x96")] = -1;
                break;
              case x[h("0x97")]:
              case x[h("0x98")]:
                i = this[h("0x94")](s[h("0x95")]), e = 1, this[h("0x96")] = 1
            }
            void 0 !== i && ((i += e * this[h("0xb")]) >= 0 && i < this.pages ? (this[h("0x6f")](i), this[h("0x99")]({
              value: this.progressByIndex(i)
            })) : i < 0 && this[h("0x3e")] > 0 ? this[h("0x49")](this[h("0x3e")] - 1) : i >= this[h("0x89")] && this[h("0x3e")] < this[h("0x40")] - 1 && this[h("0x49")](this[h("0x3e")] + 1))
          } else t[h("0x92")]()
        }, this[h("0x9a")] = function (t) {
          t[h("0x92")]();
          var i = t[h("0x9b")].changedTouches[0] || t.originalEvent[h("0x9c")][0],
            e = this[h("0x9")][h("0x6c")](),
            x = i[h("0x9d")] - e[h("0x6d")],
            s = i[h("0x9e")] - e[h("0x68")];
          null === this[h("0x17")] && null === this.touchStartY && (this[h("0x17")] = x, this[h("0x18")] = s);
          var n = this[h("0x17")] - x,
            a = this[h("0x18")] - s;
          Math[h("0x9f")](n) > Math[h("0x9f")](a) && Math.abs(n) > 40 && !this[h("0xa0")] && (t.keyCode = n > 0 ? 39 : 37, this[h("0x4e")](t), this[h("0xa0")] = !0)
        }, this._setTouchStartPoint = function (t) {
          this.touchStartX = null, this[h("0x18")] = null, this.swipeDisabled = !1
        }, this.indexByProgress = function (t) {
          return Math[h("0x78")](Math[h("0x83")](this[h("0x89")] / this[h("0xb")]) * t / 100) * this[h("0xb")]
        }, this[h("0xa1")] = function (t) {
          return Math[h("0xa2")](100 * Math[h("0x78")](t / this[h("0xb")]) / Math[h("0x83")](this[h("0x89")] / this[h("0xb")]) * 1e4) / 1e4
        }, this[h("0x90")] = function () {
          return this[h("0x3")]
        }, this[h("0x43")] = function (t) {
          $[h("0xa3")](this[h("0x3")], t)
        }, this.saveBookmark = function (t) {
          this[h("0x43")](t), this.isUser ? (clearInterval(this[h("0xa4")]), this[h("0xa4")] = setTimeout($[h("0x4b")](function () {
            var t = Date[h("0x3c")]() - this.startTime;
            this[h("0x3b")] = Date[h("0x3c")]();
            var i = this;
            $[h("0xa5")](document[h("0x2")][h("0xa6")] + h("0xa7"), {
              data: this.bookmark,
              time: t,
              _token: $('meta[name="_token"]').attr(h("0xa8"))
            })[h("0xa9")](function (t) {
              t[h("0xaa")] === h("0xab") && i[h("0xac")][h("0xad")](t.read_percentage)
            })
          }, this), 1e3)) : this.settings[h("0xae")](h("0x39") + this.bookId, JSON[h("0xaf")](this[h("0x3")]))
        }, this[h("0xb0")] = function () {
          return this[h("0x90")]()[h("0x95")]
        }, this[h("0x70")] = function () {
          return this[h("0x94")](this[h("0xb0")]())
        }, this.paginationControlsMouseOver = function () {
          this._showControlsPagination()
        }, this[h("0x54")] = function () {
          this[h("0xb1")]()
        }, this[h("0xb2")] = function () {
          this[h("0xb3")].attr(h("0x71"), h("0xb4")), this[h("0xf")][h("0xb5")](h("0x71"), "true")
        }, this._hideControlsPagination = function () {
          this.$controlPaginateBack.removeAttr(h("0x71")), this.$controlPaginateForward[h("0xb6")](h("0x71"))
        }, this[h("0x57")] = function (t) {
          $(t[h("0x8c")])[h("0x8e")](h("0xb7")) && this[h("0xb8")]()
        }, this.contentsButtonDidClicked = function (t) {
          return t[h("0x92")](), t[h("0xb9")](), this.$contentsButton[h("0x8e")](h("0xba")) ? this._closePanelManager(this[h("0xbb")]) : this._openPanelManager(this[h("0xbb")]), !1
        }, this[h("0x55")] = function (t) {
          if (t[h("0x92")](), t[h("0xb9")](), !$(t[h("0x8c")]).hasClass(".popover") && !$(t[h("0x8c")])[h("0xbc")](h("0xbd")).length) {
            if (this[h("0x13")][h("0x8e")](h("0xba"))) this[h("0x13")][h("0xbf")](h("0xba")), this[h("0x15")][h("0xbf")](h("0xba"));
            else if (this[h("0x15")][h("0xbe")](h("0xba")), this[h("0x13")][h("0xbe")](h("0xba")), this[h("0x72")]()) {
              var i = this.$settingsButton[h("0x6c")](),
                e = (this[h("0x7")][h("0x6c")](), this[h("0x15")].find(h("0xbd"))[h("0x63")]() - 47),
                x = this[h("0x13")].height() + 38;
              this[h("0x15")][h("0x67")]({
                left: i.left - e,
                top: i.top + x
              })
            } else this[h("0x15")][h("0x67")]({
              left: 0,
              top: h("0x75")
            });
            return !1
          }
        }, this[h("0xc0")] = function () {
          this.$settingsButton.removeClass("active"), this.$settingsPanel[h("0xbf")](h("0xba"))
        }, this[h("0xc1")] = function () {
          var t, i = this[h("0xc2")][h("0xc3")](".selected").data(h("0x95"));
          return $[h("0xc4")](this[h("0x1e")][h("0xc5")], function (e, x) {
            x[h("0x95")] === i && (t = e)
          }), t
        }, this[h("0xc6")] = function (t) {
          var i = this[h("0xc1")]() + $(t.currentTarget)[h("0xc7")](h("0xc8"));
          return this.options.size[i]
        }, this[h("0x5e")] = function (t) {
          var i = this[h("0xc6")](t);
          i && (this.changeFontSize(i.value), this[h("0x4c")](), this.settings[h("0xae")](h("0xc9"), i.value)), this[h("0xca")]()
        }, this.changeFontSize = function (t) {
          this[h("0x7")][h("0x67")](h("0xcb"), t + "px"), this[h("0xc2")][h("0xbf")](h("0xcc")), this[h("0xc2")][h("0xc3")](h("0xcd") + t + "]")[h("0xbe")](h("0xcc"))
        }, this[h("0x46")] = function (t) {
          t && (this.changeFontSize(t), this[h("0xca")]())
        }, this[h("0xca")] = function () {
          var t = this._getCurrentFontSize();
          this.$selectFontSizeEls[h("0xbf")](h("0xb7")), 0 === t ? this[h("0x5d")][h("0xc3")](h("0xce"))[h("0xbe")](h("0xb7")) : t === this.options[h("0xc5")][h("0x41")] - 1 && this[h("0x5d")][h("0xc3")](h("0xcf"))[h("0xbe")](h("0xb7"))
        }, this[h("0x5f")] = function (t) {
          var i = $(t[h("0xd0")])[h("0xc7")](h("0x95"));
          this[h("0x47")](i), this[h("0x37")][h("0xae")](h("0xd1"), i), this[h("0x4c")]()
        }, this[h("0x47")] = function (t) {
          t && (this[h("0x1a")][h("0xbf")](h("0xcc")), this[h("0x1a")][h("0xc3")]('[data-value="' + t + '"]')[h("0xbe")](h("0xcc")), this[h("0x7")][h("0x67")](h("0xd2"), t))
        }, this[h("0x60")] = function (t) {
          var i = $(t[h("0xd0")])[h("0xc7")]("value");
          this.setTheme(i), this[h("0x37")][h("0xae")]("theme", i)
        }, this.setTheme = function (t) {
          t && (this[h("0x1c")].removeClass(h("0xcc")), this[h("0x1c")][h("0xc3")](h("0xcd") + t + "]")[h("0xbe")](h("0xcc")), this[h("0x5")][h("0xbf")](h("0xd3"))[h("0xbe")](h("0xd4") + t))
        }, this._openPanelManager = function (t) {
          this[h("0xd5")][h("0xd6")](t), this[h("0xd5")][h("0xd7")](t)
        }, this[h("0xb8")] = function (t) {
          this[h("0xd5")][h("0x57")](), this[h("0xd5")][h("0xd8")](t)
        }, this[h("0x45")] = function () {
          var t = $(window)[h("0x63")]();
          i = "desktop-width", i = h(t <= 599 ? "0xd9" : t <= 1024 ? "0xda" : "0xdb"), $("html")[h("0xbf")](h("0xdc")).addClass(i)
        }, this[h("0xdd")] = function () {
          return this[h("0x4")][h("0x8e")](h("0xd9"))
        }, this[h("0xde")] = function () {
          return this.$html[h("0x8e")](h("0xda"))
        }, this[h("0x72")] = function () {
          return this[h("0x4")][h("0x8e")](h("0xdb"))
        }, this.settings = {
          set: function (t, i) {
            try {
              localStorage[h("0xdf")](t, i)
            } catch (t) {}
          },
          get: function (t) {
            try {
              return localStorage[h("0xe0")](t)
            } catch (t) {}
          }
        }, this.panelManager = {
          initialized: !0,
          $appContainer: null,
          initialize: function (t) {
            return this[h("0xe1")] = $(t), $(h("0xe2")).on(h("0x50"), $.proxy(this[h("0xe3")], this)), this
          },
          enablePanel: function (t) {
            t[h("0xbf")](h("0xb7"))
          },
          disablePanel: function (t) {
            t.addClass(h("0xb7"))
          },
          open: function (t) {
            var i = t,
              e = t[h("0x76")](h("0xe4")),
              x = t[h("0x76")](h("0xe5"))[h("0xe6")](".panel").not(i);
            e[h("0xbe")](h("0xba")), x[h("0xbf")](h("0xba")), i[h("0xbe")](h("0xba"))
          },
          close: function (t) {
            var i = (t = t || $(h("0xe7")))[h("0x76")](h("0xe4")),
              e = (t[h("0x76")](".stack"), t);
            i[h("0xbf")](h("0xba")), e[h("0xbf")](h("0xba"))
          },
          enableReader: function () {
            this[h("0xe1")].removeClass("disabled left right")
          },
          disableReader: function (t) {
            var i = t[h("0x76")](h("0xe4"))[h("0x8e")]("left") ? "left" : h("0xe8");
            this.$appContainer[h("0xbe")](h("0xb7")).addClass(i)
          },
          onInactivePanelClick: function (t) {
            var i = $(t[h("0x8c")])[h("0x76")](".panel");
            i[h("0x8e")](h("0xb7")) || this[h("0xd7")](i)
          }
        }, this[h("0xe9")] = function (t) {
          var i = $(t[h("0x8c")])[h("0x76")]("li")[h("0xc7")](h("0x3f"));
          this[h("0x96")] = 1, this[h("0xb8")](), this[h("0x49")](i)
        }, this[h("0x49")] = function (t) {
          this[h("0xd")] || (this[h("0x3d")][t] || (t = 0), this[h("0xea")] = t, $(h("0xeb")).html(""), $(h("0xec")).show(), this.loading = !0, $[h("0xa5")](document[h("0x2")][h("0xa6")] + h("0xed"), {
            chapter: this[h("0x3d")][t],
            _token: $(h("0xee")).attr(h("0xa8"))
          }, $[h("0x4b")](this[h("0xef")], this)))
        }, this[h("0xef")] = function (t) {
          $(h("0xec"))[h("0xf0")](), $(h("0xeb"))[h("0xf1")](t)[h("0xf2")]()[h("0xf3")](function () {
            if (this[h("0xd")] = !1, this.capterIndex = this[h("0xea")], $(h("0x58"))[h("0xbf")](h("0xba")), $('#contents li[data-capter="' + this[h("0x3e")] + '"]')[h("0xbe")](h("0xba")), !0 === this[h("0x44")]) return this[h("0x4c")](), void(this[h("0x44")] = !1);
            if (this[h("0x99")]({
                value: 0,
                capter: this[h("0xea")]
              }), this[h("0x4c")](), -1 === this[h("0x96")]) {
              var t = this[h("0x89")] - this[h("0xb")];
              this[h("0x7")][h("0x67")](h("0x6a"), h("0x6b")), this[h("0x7")].css(h("0xf4"), "unset"), this.show(t), this.$el[h("0x67")](h("0x6a"), ""), this[h("0x7")].css("-webkit-transition", ""), this[h("0x99")]({
                value: this[h("0xa1")](t)
              })
            }
          }.bind(this))
        }
      }
    }
  },
  [
    [1, 0, 1]
  ]
]);