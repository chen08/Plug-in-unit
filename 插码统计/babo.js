! function() {
	var t = function() {
		function t(a) {
			if(this.ga = this._getGA(), "undefined" != typeof this.ga) {
				if(this.opts = t.$.extend(i, a), "undefined" != typeof this.opts.watch)
					for(var n = this.opts.watch.length - 1; n >= 0; n--) this.watch.apply(this, this.opts.watch[n]);
				this.pageName = this.opts.pageName, this.siteName = this.opts.siteName, this.trackLinks = t.$.proxy(this.trackLinks, this), this.push = t.$.proxy(this.push, this), this.watch = t.$.proxy(this.watch, this), this._onTrackedClick = t.$.proxy(this._onTrackedClick, this)
			} else console.warn("Google Analytics not found. Boba could not initialize.");
			return this
		}
		var i = {
			pageName: "page",
			siteName: "site",
			defaultCategory: null,
			defaultAction: null,
			defaultLabel: null
		};
		return t.$ = $ || void 0, t.prototype = {
			watch: function(i, a, n) {
				var e = function(t) {
					this.push(n(t))
				};
				return t.$("body").on(i + ".tracker", a, t.$.proxy(e, this)), this
			},
			trackLinks: function(t) {
				return t = t || ".js-track", this.watch("click", t, this._onTrackedClick), this
			},
			push: function(t) {
				return t = [t.gaCategory || t.category || this.opts.defaultCategory, t.gaAction || t.action || this.opts.defaultAction, t.gaLabel || t.label || this.opts.defaultLabel, t.gaValue || t.value || null], this.ga.apply(null, t), this
			},
			_onTrackedClick: function(i) {
				return this.ga ? t.$(i.currentTarget).data() : void 0
			},
			_getGA: function() {
				var t;
				return "undefined" != typeof window.ga && null !== window.ga ? t = function() {
					var t = Array.prototype.slice.call(arguments);
					t.unshift("send", "event"), window.ga.apply(window, t)
				} : "undefined" != typeof window._gaq && null !== window._gaq && (t = function() {
					var t = Array.prototype.slice.call(arguments);
					t.unshift("_trackEvent"), window._gaq.push.apply(window, t)
				}), t
			}
		}, t
	}();
	window.Boba = t
}();