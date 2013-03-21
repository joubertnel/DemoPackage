(function() {
    var doc = typeof document !== "undefined" ? document : false, hdr = doc && doc.getElementsByTagName("head")[0], $i;
    $i = this.__infuse__ = function(modId, callback) {
        var module = $i.modules[modId], src, node;
        if (!module.exports) {
            src = module;
            module = $i.modules[modId] = {
                exports: {},
                loading: true,
                loaded: false,
                loadCallback: callback
            };
            if (typeof src === "function") {
                src();
            } else if (typeof src === "string") {
                if (doc) {
                    hdr = doc.getElementsByTagName("head")[0];
                    node = doc.createElement("script");
                    node.innerHTML = src;
                    module.loadCallback = function(exports) {
                        hdr.removeChild(node);
                        if (callback) {
                            callback(exports);
                        }
                    };
                    hdr.appendChild(node);
                } else {
                    eval(src);
                }
            }
        }
        return module.exports;
    };
    $i.clear = function(modId) {
        var module = $i.modules[modId], callback = module.loadCallback;
        module.loading = false;
        module.loaded = true;
        delete module.loadCallback;
        if (callback) {
            callback(module.exports);
        }
    };
    $i.modules = {
        0: function() {
            var module = __infuse__.modules[0], exports = module.exports;
            var start = __infuse__(1);
            var Borg = __infuse__(3);
            var result = start.doSomething();
            console.log("Starting...");
            console.log(result);
            console.log("Borg: " + Borg.regenerate());
            __infuse__.clear(0);
        },
        1: function() {
            var module = __infuse__.modules[1], exports = module.exports;
            var service = __infuse__(2);
            function doSomething() {
                return "didDoSomething: " + service.serve();
            }
            module.exports = {
                doSomething: doSomething
            };
            __infuse__.clear(1);
        },
        2: function() {
            var module = __infuse__.modules[2], exports = module.exports;
            var callCount = 0;
            function serve() {
                callCount = callCount + 1;
                return "didServe";
            }
            module.exports = {
                serve: serve
            };
            __infuse__.clear(2);
        },
        3: function() {
            var module = __infuse__.modules[3], exports = module.exports;
            function regenerate() {
                return "didRegenerate";
            }
            module.exports = {
                regenerate: regenerate
            };
            __infuse__.clear(3);
        },
        4: function() {
            var module = __infuse__.modules[4], exports = module.exports;
            var callCount = 0;
            function serve() {
                callCount = callCount + 1;
                return "didServe";
            }
            module.exports = {
                serve: serve
            };
            __infuse__.clear(4);
        },
        5: function() {
            var module = __infuse__.modules[5], exports = module.exports;
            var service = __infuse__(2);
            function doSomething() {
                return "didDoSomething: " + service.serve();
            }
            module.exports = {
                doSomething: doSomething
            };
            __infuse__.clear(5);
        }
    };
})();

__infuse__(0), __infuse__(4), __infuse__(5);
