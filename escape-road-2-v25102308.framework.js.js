var unityFramework = (() => {
  var _0x28c02f = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") {
    _0x28c02f = _0x28c02f || __filename;
  }
  return function (_0x38a159) {
    _0x38a159 = _0x38a159 || {};
    var _0x3d91d8 = typeof _0x38a159 != "undefined" ? _0x38a159 : {};
    var _0x2821e7;
    var _0x2e179c;
    _0x3d91d8.ready = new Promise(function (_0x50a9cc, _0x511118) {
      _0x2821e7 = _0x50a9cc;
      _0x2e179c = _0x511118;
    });
    function _0x394975(_0x367966, _0x48f3ca) {
      _0x1ac52a("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
      return _0x367966 ? _0x4ee57d(_0x26daaf, _0x367966, _0x48f3ca) : '';
    }
    _0x3d91d8.Pointer_stringify = _0x394975;
    var _0x20067b = _0x211237().match(new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)"));
    if (_0x20067b) {
      _0x3d91d8.stackTraceRegExp = new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)".replace("([^\\n]+)", _0x20067b[0x4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
    }
    var _0x55b467 = function (_0x55e599) {
      if (_0x32ccfc) {
        return;
      }
      _0x32ccfc = true;
      _0x405327 = 0x1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
        console.error("Pthread aborting at " + new Error().stack);
      }
      if (_0x55e599 !== undefined) {
        _0x369287(_0x55e599);
        _0x47ea4b(_0x55e599);
        _0x55e599 = JSON.stringify(_0x55e599);
      } else {
        _0x55e599 = '';
      }
      var _0x551a06 = "abort(" + _0x55e599 + ") at " + _0x219c03();
      if (_0x3d91d8.abortHandler && _0x3d91d8.abortHandler(_0x551a06)) {
        return;
      }
      throw _0x551a06;
    };
    _0x3d91d8.SetFullscreen = function (_0x55593e) {
      if (typeof _0x5a1a30 === "undefined" || !_0x5a1a30) {
        console.log("Runtime not initialized yet.");
      } else {
        if (typeof _0x5b87a8 === "undefined") {
          console.log("Player not loaded yet.");
        } else {
          var _0x5da815 = _0x5b87a8.canPerformEventHandlerRequests;
          _0x5b87a8.canPerformEventHandlerRequests = function () {
            return 0x1;
          };
          _0x3d91d8.ccall("SetFullscreen", null, ["number"], [_0x55593e]);
          _0x5b87a8.canPerformEventHandlerRequests = _0x5da815;
        }
      }
    };
    if (!_0x3d91d8.ENVIRONMENT_IS_PTHREAD) {
      _0x3d91d8.preRun.push(function () {
        function _0x169d8f() {
          _0x471f3e.queuePersist = function (_0x1b3e65) {
            function _0x40b76f() {
              if (_0x1b3e65.idbPersistState === "again") {
                _0x2dd28b();
              } else {
                _0x1b3e65.idbPersistState = 0x0;
              }
            }
            function _0x2dd28b() {
              _0x1b3e65.idbPersistState = "idb";
              _0x471f3e.syncfs(_0x1b3e65, false, _0x40b76f);
            }
            if (!_0x1b3e65.idbPersistState) {
              _0x1b3e65.idbPersistState = setTimeout(_0x2dd28b, 0x0);
            } else if (_0x1b3e65.idbPersistState === "idb") {
              _0x1b3e65.idbPersistState = "again";
            }
          };
          _0x471f3e.mount = function (_0x5cbfb1) {
            var _0x3e49bd = _0x46f590.createNode(null, "/", 16895, 0x0);
            if (typeof _0x5cbfb1 !== "undefined" && _0x5cbfb1.opts && _0x5cbfb1.opts.autoPersist) {
              _0x3e49bd.idbPersistState = 0x0;
              var _0x43b6da = _0x3e49bd.node_ops;
              _0x3e49bd.node_ops = Object.assign({}, _0x3e49bd.node_ops);
              _0x3e49bd.node_ops.mknod = function (_0xae2459, _0x1a4841, _0x108d68, _0x1daf17) {
                var _0x55cd7d = _0x43b6da.mknod(_0xae2459, _0x1a4841, _0x108d68, _0x1daf17);
                _0x55cd7d.node_ops = _0x3e49bd.node_ops;
                _0x55cd7d.idbfs_mount = _0x3e49bd.mount;
                _0x55cd7d.memfs_stream_ops = _0x55cd7d.stream_ops;
                _0x55cd7d.stream_ops = Object.assign({}, _0x55cd7d.stream_ops);
                _0x55cd7d.stream_ops.write = function (_0x2b4f44, _0x13f0de, _0x422fb7, _0x63959d, _0x385be5, _0x3af1ba) {
                  _0x2b4f44.node.isModified = true;
                  return _0x55cd7d.memfs_stream_ops.write(_0x2b4f44, _0x13f0de, _0x422fb7, _0x63959d, _0x385be5, _0x3af1ba);
                };
                _0x55cd7d.stream_ops.close = function (_0xbae03b) {
                  var _0x54ba53 = _0xbae03b.node;
                  if (_0x54ba53.isModified) {
                    _0x471f3e.queuePersist(_0x54ba53.idbfs_mount);
                    _0x54ba53.isModified = false;
                  }
                  if (_0x54ba53.memfs_stream_ops.close) {
                    return _0x54ba53.memfs_stream_ops.close(_0xbae03b);
                  }
                };
                return _0x55cd7d;
              };
              _0x3e49bd.node_ops.rmdir = function (_0x52511b) {
                _0x471f3e.queuePersist(_0x3e49bd.mount);
                return _0x43b6da.rmdir(_0x52511b);
              };
              _0x3e49bd.node_ops.unlink = function (_0x589d43) {
                _0x471f3e.queuePersist(_0x3e49bd.mount);
                return _0x43b6da.unlink(_0x589d43);
              };
              _0x3e49bd.node_ops.mkdir = function (_0x176fc7, _0x263488) {
                _0x471f3e.queuePersist(_0x3e49bd.mount);
                return _0x43b6da.mkdir(_0x176fc7, _0x263488);
              };
              _0x3e49bd.node_ops.symlink = function (_0x463c36, _0x201abb, _0x5defd4) {
                _0x471f3e.queuePersist(_0x3e49bd.mount);
                return _0x43b6da.symlink(_0x463c36, _0x201abb, _0x5defd4);
              };
              _0x3e49bd.node_ops.rename = function (_0x357e81, _0x3bb815, _0x58ca8b) {
                _0x471f3e.queuePersist(_0x3e49bd.mount);
                return _0x43b6da.rename(_0x357e81, _0x3bb815, _0x58ca8b);
              };
            }
            return _0x3e49bd;
          };
        }
        _0x169d8f();
        var _0x5b6e07 = _0x3d91d8.unityFileSystemInit || function () {
          _0x3a9ca2.mkdir("/idbfs");
          _0x3d91d8.__unityIdbfsMount = _0x3a9ca2.mount(_0x471f3e, {
            "autoPersist": !!_0x3d91d8.autoSyncPersistentDataPath
          }, "/idbfs");
          _0x3d91d8.addRunDependency("JS_FileSystem_Mount");
          _0x3a9ca2.syncfs(true, function (_0x5889c0) {
            if (_0x5889c0) {
              console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
            }
            _0x3d91d8.removeRunDependency("JS_FileSystem_Mount");
          });
        };
        _0x5b6e07();
      });
    }
    var _0x4f2d85 = [];
    var _0x552ba8 = false;
    var _0x5a64d2;
    var _0xe726c9 = null;
    function _0x2f1f23(_0x5150e1) {
      var _0x4cd2ff = Object.keys(_0x4f2d85);
      for (var _0x1d86ec = 0x0; _0x1d86ec < _0x4cd2ff.length; ++_0x1d86ec) {
        var _0x4cee8f = _0x4f2d85[_0x4cd2ff[_0x1d86ec]];
        if (_0x4cee8f.deviceId && _0x4cee8f.deviceId == _0x5150e1.deviceId) {
          return _0x4cee8f;
        }
      }
      for (var _0x1d86ec = 0x0; _0x1d86ec < _0x4cd2ff.length; ++_0x1d86ec) {
        var _0x4cee8f = _0x4f2d85[_0x4cd2ff[_0x1d86ec]];
        if (_0x4cee8f == _0x5150e1) {
          return _0x4cee8f;
        }
      }
      for (var _0x1d86ec = 0x0; _0x1d86ec < _0x4cd2ff.length; ++_0x1d86ec) {
        var _0x4cee8f = _0x4f2d85[_0x4cd2ff[_0x1d86ec]];
        if (_0x4cee8f.label && _0x4cee8f.label == _0x5150e1.label) {
          return _0x4cee8f;
        }
      }
      for (var _0x1d86ec = 0x0; _0x1d86ec < _0x4cd2ff.length; ++_0x1d86ec) {
        var _0x4cee8f = _0x4f2d85[_0x4cd2ff[_0x1d86ec]];
        if (_0x4cee8f.groupId && _0x4cee8f.kind && _0x4cee8f.groupId == _0x5150e1.groupId && _0x4cee8f.kind == _0x5150e1.kind) {
          return _0x4cee8f;
        }
      }
    }
    function _0x3fb20d() {
      for (var _0x5ccb82 = 0x0;; ++_0x5ccb82) {
        if (!_0x4f2d85[_0x5ccb82]) {
          return _0x5ccb82;
        }
      }
    }
    function _0x58b44a(_0x1160ee) {
      _0x5a64d2();
      _0x4f2d85 = [];
      var _0x5a54db = {};
      var _0x8909bf = [];
      _0x1160ee.forEach(function (_0x2ac1b7) {
        if (_0x2ac1b7.kind === "videoinput") {
          var _0x28d6c9 = _0x2f1f23(_0x2ac1b7);
          if (_0x28d6c9) {
            _0x5a54db[_0x28d6c9.id] = _0x28d6c9;
          } else {
            _0x8909bf.push(_0x2ac1b7);
          }
        }
      });
      _0x4f2d85 = _0x5a54db;
      _0x8909bf.forEach(function (_0x46159b) {
        if (!_0x46159b.id) {
          _0x46159b.id = _0x3fb20d();
          _0x46159b.name = _0x46159b.label || "Video input #" + (_0x46159b.id + 0x1);
          _0x46159b.isFrontFacing = _0x46159b.name.toLowerCase().includes("front") || !_0x46159b.name.toLowerCase().includes("front") && !_0x46159b.name.toLowerCase().includes("back");
          _0x4f2d85[_0x46159b.id] = _0x46159b;
        }
      });
    }
    function _0x338e44() {
      if (!_0x4f2d85) {
        return;
      }
      navigator.mediaDevices.enumerateDevices().then(function (_0x2a6e82) {
        _0x58b44a(_0x2a6e82);
        _0x552ba8 = true;
      })["catch"](function (_0x33004c) {
        console.warn("Unable to enumerate media devices: " + _0x33004c + "\nWebcams will not be available.");
        _0xa00354();
      });
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(_0x338e44, 0xea60);
        _0x1ac52a("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
      }
    }
    function _0xa00354() {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener("devicechange", _0x338e44);
      }
      _0x4f2d85 = null;
    }
    _0x3d91d8.disableAccessToMediaDevices = _0xa00354;
    if (!navigator.mediaDevices) {
      console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? '' : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
      _0xa00354();
    } else {
      if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
        setTimeout(function () {
          try {
            _0x1037eb("enumerateMediaDevices");
            _0x5a64d2 = function () {
              if (_0xe726c9 !== null) {
                clearTimeout(_0xe726c9);
              }
              _0x4c4bd8("enumerateMediaDevices");
              if (navigator.mediaDevices) {
                console.log("navigator.mediaDevices support available");
              }
              _0x5a64d2 = function () {};
            };
            _0x338e44();
            _0xe726c9 = setTimeout(_0x5a64d2, 0x3e8);
            navigator.mediaDevices.addEventListener("devicechange", _0x338e44);
          } catch (_0xa3899) {
            console.warn("Unable to enumerate media devices: " + _0xa3899);
            _0xa00354();
          }
        }, 0x0);
      }
    }
    function _0x1e71fe(_0x36299f, _0x4568e7, _0x245430) {
      var _0x7ef292 = _0x4801cc(_0x4568e7);
      var _0x215b67 = _0x4801cc(_0x36299f);
      var _0x5818e3 = 0x0;
      try {
        if (_0x245430 === undefined) {
          _0x492f09(_0x215b67, _0x7ef292);
        } else {
          if (typeof _0x245430 === "string") {
            _0x5818e3 = _0x4801cc(_0x245430);
            _0x3633b6(_0x215b67, _0x7ef292, _0x5818e3);
          } else {
            if (typeof _0x245430 === "number") {
              _0x14792d(_0x215b67, _0x7ef292, _0x245430);
            } else {
              throw '' + _0x245430 + " is does not have a type which is supported by SendMessage.";
            }
          }
        }
      } finally {
        _0x348983(_0x5818e3);
        _0x348983(_0x215b67);
        _0x348983(_0x7ef292);
      }
    }
    _0x3d91d8.SendMessage = _0x1e71fe;
    var _0xb2e363 = Object.assign({}, _0x3d91d8);
    var _0x209b31 = [];
    var _0x452af0 = "./this.program";
    var _0x41bc27 = (_0x55eddd, _0x280c22) => {
      throw _0x280c22;
    };
    var _0x49e713 = typeof window == "object";
    var _0x3a4271 = typeof importScripts == "function";
    var _0x523e7b = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var _0x31ff7d = '';
    function _0xca042c(_0x17d95e) {
      if (_0x3d91d8.locateFile) {
        return _0x3d91d8.locateFile(_0x17d95e, _0x31ff7d);
      }
      return _0x31ff7d + _0x17d95e;
    }
    var _0x4e10eb;
    var _0x54af19;
    var _0x9f40c8;
    var _0x3eb197;
    function _0x39d982(_0xbcdd58) {
      if (_0xbcdd58 instanceof _0x940b30) {
        return;
      }
      _0x47ea4b("exiting due to exception: " + _0xbcdd58);
    }
    var _0x56f128;
    var _0x435499;
    var _0x513613;
    if (_0x523e7b) {
      if (_0x3a4271) {
        _0x31ff7d = require("path").dirname(_0x31ff7d) + "/";
      } else {
        _0x31ff7d = __dirname + "/";
      }
      _0x513613 = () => {
        if (!_0x435499) {
          _0x56f128 = require("fs");
          _0x435499 = require("path");
        }
      };
      _0x4e10eb = function _0x3fe3e9(_0x23d846, _0x612e07) {
        _0x513613();
        _0x23d846 = _0x435499.normalize(_0x23d846);
        return _0x56f128.readFileSync(_0x23d846, _0x612e07 ? undefined : "utf8");
      };
      _0x9f40c8 = _0x4cb624 => {
        var _0x3e7c61 = _0x4e10eb(_0x4cb624, true);
        if (!_0x3e7c61.buffer) {
          _0x3e7c61 = new Uint8Array(_0x3e7c61);
        }
        return _0x3e7c61;
      };
      _0x54af19 = (_0xbdaecf, _0x278a54, _0x53e365) => {
        _0x513613();
        _0xbdaecf = _0x435499.normalize(_0xbdaecf);
        _0x56f128.readFile(_0xbdaecf, function (_0x5a3603, _0xd2e819) {
          if (_0x5a3603) {
            _0x53e365(_0x5a3603);
          } else {
            _0x278a54(_0xd2e819.buffer);
          }
        });
      };
      if (process.argv.length > 0x1) {
        _0x452af0 = process.argv[0x1].replace(/\\/g, "/");
      }
      _0x209b31 = process.argv.slice(0x2);
      process.on("uncaughtException", function (_0x374309) {
        if (!(_0x374309 instanceof _0x940b30)) {
          throw _0x374309;
        }
      });
      process.on("unhandledRejection", function (_0x4e527e) {
        throw _0x4e527e;
      });
      _0x41bc27 = (_0x313696, _0x5a0a6b) => {
        if (_0x5dc2f9) {
          process.exitCode = _0x313696;
          throw _0x5a0a6b;
        }
        _0x39d982(_0x5a0a6b);
        process.exit(_0x313696);
      };
      _0x3d91d8.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else {
      if (_0x49e713 || _0x3a4271) {
        if (_0x3a4271) {
          _0x31ff7d = self.location.href;
        } else if (typeof document != "undefined" && document.currentScript) {
          _0x31ff7d = document.currentScript.src;
        }
        if (_0x28c02f) {
          _0x31ff7d = _0x28c02f;
        }
        if (_0x31ff7d.indexOf("blob:") !== 0x0) {
          _0x31ff7d = _0x31ff7d.substr(0x0, _0x31ff7d.replace(/[?#].*/, '').lastIndexOf("/") + 0x1);
        } else {
          _0x31ff7d = '';
        }
        {
          _0x4e10eb = _0x1e59d8 => {
            var _0xd9852 = new XMLHttpRequest();
            _0xd9852.open("GET", _0x1e59d8, false);
            _0xd9852.send(null);
            return _0xd9852.responseText;
          };
          if (_0x3a4271) {
            _0x9f40c8 = _0x5bcace => {
              var _0xeedd38 = new XMLHttpRequest();
              _0xeedd38.open("GET", _0x5bcace, false);
              _0xeedd38.responseType = "arraybuffer";
              _0xeedd38.send(null);
              return new Uint8Array(_0xeedd38.response);
            };
          }
          _0x54af19 = (_0x16552b, _0x59665a, _0x902224) => {
            var _0x49964e = new XMLHttpRequest();
            _0x49964e.open("GET", _0x16552b, true);
            _0x49964e.responseType = "arraybuffer";
            _0x49964e.onload = () => {
              if (_0x49964e.status == 0xc8 || _0x49964e.status == 0x0 && _0x49964e.response) {
                _0x59665a(_0x49964e.response);
                return;
              }
              _0x902224();
            };
            _0x49964e.onerror = _0x902224;
            _0x49964e.send(null);
          };
        }
        _0x3eb197 = _0x8e43c7 => document.title = _0x8e43c7;
      } else {}
    }
    var _0x369287 = _0x3d91d8.print || console.log.bind(console);
    var _0x47ea4b = _0x3d91d8.printErr || console.warn.bind(console);
    Object.assign(_0x3d91d8, _0xb2e363);
    _0xb2e363 = null;
    if (_0x3d91d8.arguments) {
      _0x209b31 = _0x3d91d8.arguments;
    }
    if (_0x3d91d8.thisProgram) {
      _0x452af0 = _0x3d91d8.thisProgram;
    }
    if (_0x3d91d8.quit) {
      _0x41bc27 = _0x3d91d8.quit;
    }
    function _0x1ac52a(_0x36a3bd) {
      if (!_0x1ac52a.shown) {
        _0x1ac52a.shown = {};
      }
      if (!_0x1ac52a.shown[_0x36a3bd]) {
        _0x1ac52a.shown[_0x36a3bd] = 0x1;
        _0x47ea4b(_0x36a3bd);
      }
    }
    var _0x336991;
    if (_0x3d91d8.wasmBinary) {
      _0x336991 = _0x3d91d8.wasmBinary;
    }
    var _0x5dc2f9 = _0x3d91d8.noExitRuntime || true;
    if (typeof WebAssembly != "object") {
      _0x55b467("no native wasm support detected");
    }
    var _0x32ccfc = false;
    var _0x405327;
    function _0x56b1b0(_0x2f09d4, _0x3f8ac3) {
      if (!_0x2f09d4) {
        _0x55b467(_0x3f8ac3);
      }
    }
    function _0x5efda4(_0x5efe9e) {
      var _0x3cec8b = _0x3d91d8["_" + _0x5efe9e];
      return _0x3cec8b;
    }
    function _0x31a31e(_0x36fd14, _0x437484, _0xdf10ed, _0x18e11f, _0x3e3214) {
      var _0x1a3c7b = {
        "string": function (_0x338f18) {
          var _0x5de8d5 = 0x0;
          if (_0x338f18 !== null && _0x338f18 !== undefined && _0x338f18 !== 0x0) {
            var _0x125760 = (_0x338f18.length << 0x2) + 0x1;
            _0x5de8d5 = _0x45ad2c(_0x125760);
            _0x5b3420(_0x338f18, _0x26daaf, _0x5de8d5, _0x125760);
          }
          return _0x5de8d5;
        },
        "array": function (_0x262009) {
          var _0x50e689 = _0x45ad2c(_0x262009.length);
          _0x1115ef(_0x262009, _0x50e689);
          return _0x50e689;
        }
      };
      function _0x7e489e(_0xd9402a) {
        if (_0x437484 === "string") {
          return _0xd9402a ? _0x4ee57d(_0x26daaf, _0xd9402a, undefined) : '';
        }
        if (_0x437484 === "boolean") {
          return Boolean(_0xd9402a);
        }
        return _0xd9402a;
      }
      var _0x43d90b = _0x5efda4(_0x36fd14);
      var _0x5013b7 = [];
      var _0x4b0308 = 0x0;
      if (_0x18e11f) {
        for (var _0x3f52dc = 0x0; _0x3f52dc < _0x18e11f.length; _0x3f52dc++) {
          var _0x2fbe48 = _0x1a3c7b[_0xdf10ed[_0x3f52dc]];
          if (_0x2fbe48) {
            if (_0x4b0308 === 0x0) {
              _0x4b0308 = _0x51b548();
            }
            _0x5013b7[_0x3f52dc] = _0x2fbe48(_0x18e11f[_0x3f52dc]);
          } else {
            _0x5013b7[_0x3f52dc] = _0x18e11f[_0x3f52dc];
          }
        }
      }
      var _0x1969e2 = _0x43d90b.apply(null, _0x5013b7);
      function _0x4d5f48(_0x1f9dd0) {
        if (_0x4b0308 !== 0x0) {
          _0x868cb0(_0x4b0308);
        }
        return _0x7e489e(_0x1f9dd0);
      }
      _0x1969e2 = _0x4d5f48(_0x1969e2);
      return _0x1969e2;
    }
    function _0x57da39(_0x3ce810, _0xf6b7c3, _0x466113, _0x1f3540) {
      _0x466113 = _0x466113 || [];
      var _0x3aa938 = _0x466113.every(function (_0xdf20ce) {
        return _0xdf20ce === "number";
      });
      var _0x24236d = _0xf6b7c3 !== "string";
      if (_0x24236d && _0x3aa938 && !_0x1f3540) {
        return _0x5efda4(_0x3ce810);
      }
      return function () {
        return _0x31a31e(_0x3ce810, _0xf6b7c3, _0x466113, arguments, _0x1f3540);
      };
    }
    var _0x3d1357 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x4ee57d(_0x36efa0, _0x39a383, _0x22809b) {
      var _0x3e4a18 = _0x39a383 + _0x22809b;
      var _0x578aec = _0x39a383;
      while (_0x36efa0[_0x578aec] && !(_0x578aec >= _0x3e4a18)) {
        ++_0x578aec;
      }
      if (_0x578aec - _0x39a383 > 0x10 && _0x36efa0.buffer && _0x3d1357) {
        return _0x3d1357.decode(_0x36efa0.subarray(_0x39a383, _0x578aec));
      } else {
        var _0xed6c0e = '';
        while (_0x39a383 < _0x578aec) {
          var _0x4b83cd = _0x36efa0[_0x39a383++];
          if (!(_0x4b83cd & 0x80)) {
            _0xed6c0e += String.fromCharCode(_0x4b83cd);
            continue;
          }
          var _0x27adb6 = _0x36efa0[_0x39a383++] & 0x3f;
          if ((_0x4b83cd & 0xe0) == 0xc0) {
            _0xed6c0e += String.fromCharCode((_0x4b83cd & 0x1f) << 0x6 | _0x27adb6);
            continue;
          }
          var _0x1619ca = _0x36efa0[_0x39a383++] & 0x3f;
          if ((_0x4b83cd & 0xf0) == 0xe0) {
            _0x4b83cd = (_0x4b83cd & 0xf) << 0xc | _0x27adb6 << 0x6 | _0x1619ca;
          } else {
            _0x4b83cd = (_0x4b83cd & 0x7) << 0x12 | _0x27adb6 << 0xc | _0x1619ca << 0x6 | _0x36efa0[_0x39a383++] & 0x3f;
          }
          if (_0x4b83cd < 0x10000) {
            _0xed6c0e += String.fromCharCode(_0x4b83cd);
          } else {
            var _0x3af099 = _0x4b83cd - 0x10000;
            _0xed6c0e += String.fromCharCode(0xd800 | _0x3af099 >> 0xa, 0xdc00 | _0x3af099 & 0x3ff);
          }
        }
      }
      return _0xed6c0e;
    }
    function _0x5b3420(_0x2f02ba, _0x5c71a1, _0x129efb, _0x25916f) {
      if (!(_0x25916f > 0x0)) {
        return 0x0;
      }
      var _0x415208 = _0x129efb;
      var _0x2ba972 = _0x129efb + _0x25916f - 0x1;
      for (var _0x3b78cd = 0x0; _0x3b78cd < _0x2f02ba.length; ++_0x3b78cd) {
        var _0x55ad13 = _0x2f02ba.charCodeAt(_0x3b78cd);
        if (_0x55ad13 >= 0xd800 && _0x55ad13 <= 0xdfff) {
          var _0x375b06 = _0x2f02ba.charCodeAt(++_0x3b78cd);
          _0x55ad13 = 0x10000 + ((_0x55ad13 & 0x3ff) << 0xa) | _0x375b06 & 0x3ff;
        }
        if (_0x55ad13 <= 0x7f) {
          if (_0x129efb >= _0x2ba972) {
            break;
          }
          _0x5c71a1[_0x129efb++] = _0x55ad13;
        } else {
          if (_0x55ad13 <= 0x7ff) {
            if (_0x129efb + 0x1 >= _0x2ba972) {
              break;
            }
            _0x5c71a1[_0x129efb++] = 0xc0 | _0x55ad13 >> 0x6;
            _0x5c71a1[_0x129efb++] = 0x80 | _0x55ad13 & 0x3f;
          } else {
            if (_0x55ad13 <= 0xffff) {
              if (_0x129efb + 0x2 >= _0x2ba972) {
                break;
              }
              _0x5c71a1[_0x129efb++] = 0xe0 | _0x55ad13 >> 0xc;
              _0x5c71a1[_0x129efb++] = 0x80 | _0x55ad13 >> 0x6 & 0x3f;
              _0x5c71a1[_0x129efb++] = 0x80 | _0x55ad13 & 0x3f;
            } else {
              if (_0x129efb + 0x3 >= _0x2ba972) {
                break;
              }
              _0x5c71a1[_0x129efb++] = 0xf0 | _0x55ad13 >> 0x12;
              _0x5c71a1[_0x129efb++] = 0x80 | _0x55ad13 >> 0xc & 0x3f;
              _0x5c71a1[_0x129efb++] = 0x80 | _0x55ad13 >> 0x6 & 0x3f;
              _0x5c71a1[_0x129efb++] = 0x80 | _0x55ad13 & 0x3f;
            }
          }
        }
      }
      _0x5c71a1[_0x129efb] = 0x0;
      return _0x129efb - _0x415208;
    }
    function _0x26e3e9(_0x2a72f9) {
      var _0x2d1b5e = 0x0;
      for (var _0x942692 = 0x0; _0x942692 < _0x2a72f9.length; ++_0x942692) {
        var _0x7510af = _0x2a72f9.charCodeAt(_0x942692);
        if (_0x7510af >= 0xd800 && _0x7510af <= 0xdfff) {
          _0x7510af = 0x10000 + ((_0x7510af & 0x3ff) << 0xa) | _0x2a72f9.charCodeAt(++_0x942692) & 0x3ff;
        }
        if (_0x7510af <= 0x7f) {
          ++_0x2d1b5e;
        } else {
          if (_0x7510af <= 0x7ff) {
            _0x2d1b5e += 0x2;
          } else {
            if (_0x7510af <= 0xffff) {
              _0x2d1b5e += 0x3;
            } else {
              _0x2d1b5e += 0x4;
            }
          }
        }
      }
      return _0x2d1b5e;
    }
    function _0x34af28(_0xbd7c72) {
      var _0x4fe02a = _0x26e3e9(_0xbd7c72) + 0x1;
      var _0x18c4d1 = _0x44e6b1(_0x4fe02a);
      if (_0x18c4d1) {
        _0x5b3420(_0xbd7c72, _0x31f314, _0x18c4d1, _0x4fe02a);
      }
      return _0x18c4d1;
    }
    function _0x1c3817(_0x5dd68c) {
      var _0x22d6d3 = _0x26e3e9(_0x5dd68c) + 0x1;
      var _0xe26a63 = _0x45ad2c(_0x22d6d3);
      _0x5b3420(_0x5dd68c, _0x31f314, _0xe26a63, _0x22d6d3);
      return _0xe26a63;
    }
    function _0x1115ef(_0x1df856, _0x4a6b4d) {
      _0x31f314.set(_0x1df856, _0x4a6b4d);
    }
    var _0x2e52f3;
    var _0x31f314;
    var _0x26daaf;
    var _0xb9f33b;
    var _0x1524e2;
    var _0x5e18c2 = [];
    var _0x2147ba = [];
    var _0x295cc3 = [];
    var _0x57f62b = [];
    var _0x5ad5d3 = [];
    var _0x5a1a30 = false;
    function _0x34ea93() {
      if (_0x3d91d8.preRun) {
        if (typeof _0x3d91d8.preRun == "function") {
          _0x3d91d8.preRun = [_0x3d91d8.preRun];
        }
        while (_0x3d91d8.preRun.length) {
          _0x542cff(_0x3d91d8.preRun.shift());
        }
      }
      _0x467d72(_0x5e18c2);
    }
    function _0x4245be() {
      _0x5a1a30 = true;
      if (!_0x3d91d8.noFSInit && !_0x3a9ca2.init.initialized) {
        _0x3a9ca2.init();
      }
      _0x3a9ca2.ignorePermissions = false;
      _0x4ebf0a.init();
      _0x287759.root = _0x3a9ca2.mount(_0x287759, {}, null);
      _0x4215ab.root = _0x3a9ca2.mount(_0x4215ab, {}, null);
      _0x467d72(_0x2147ba);
    }
    function _0x22a872() {
      _0x467d72(_0x295cc3);
    }
    function _0x1932ba() {
      if (_0x3d91d8.postRun) {
        if (typeof _0x3d91d8.postRun == "function") {
          _0x3d91d8.postRun = [_0x3d91d8.postRun];
        }
        while (_0x3d91d8.postRun.length) {
          _0x4395a6(_0x3d91d8.postRun.shift());
        }
      }
      _0x467d72(_0x5ad5d3);
    }
    function _0x542cff(_0x49cb05) {
      _0x5e18c2.unshift(_0x49cb05);
    }
    function _0x4395a6(_0x2f8576) {
      _0x5ad5d3.unshift(_0x2f8576);
    }
    var _0x5c9d46 = 0x0;
    var _0x5050bb = null;
    var _0x2a1105 = null;
    function _0x1037eb(_0x50446c) {
      _0x5c9d46++;
      if (_0x3d91d8.monitorRunDependencies) {
        _0x3d91d8.monitorRunDependencies(_0x5c9d46);
      }
    }
    function _0x4c4bd8(_0x37eef0) {
      _0x5c9d46--;
      if (_0x3d91d8.monitorRunDependencies) {
        _0x3d91d8.monitorRunDependencies(_0x5c9d46);
      }
      if (_0x5c9d46 == 0x0) {
        if (_0x5050bb !== null) {
          clearInterval(_0x5050bb);
          _0x5050bb = null;
        }
        if (_0x2a1105) {
          var _0x42dc71 = _0x2a1105;
          _0x2a1105 = null;
          _0x42dc71();
        }
      }
    }
    _0x3d91d8.preloadedImages = {};
    _0x3d91d8.preloadedAudios = {};
    function _0x55b467(_0xd5dc48) {
      {
        if (_0x3d91d8.onAbort) {
          _0x3d91d8.onAbort(_0xd5dc48);
        }
      }
      _0xd5dc48 = "Aborted(" + _0xd5dc48 + ")";
      _0x47ea4b(_0xd5dc48);
      _0x32ccfc = true;
      _0x405327 = 0x1;
      _0xd5dc48 += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x2b1889 = new WebAssembly.RuntimeError(_0xd5dc48);
      _0x2e179c(_0x2b1889);
      throw _0x2b1889;
    }
    var _0x14ed88;
    _0x14ed88 = "build.wasm";
    if (!_0x14ed88.startsWith("data:application/octet-stream;base64,")) {
      _0x14ed88 = _0xca042c(_0x14ed88);
    }
    var _0x4c6a90;
    var _0x47083b;
    function _0x467d72(_0x2a58cf) {
      while (_0x2a58cf.length > 0x0) {
        var _0x42df16 = _0x2a58cf.shift();
        if (typeof _0x42df16 == "function") {
          _0x42df16(_0x3d91d8);
          continue;
        }
        var _0x15625f = _0x42df16.func;
        if (typeof _0x15625f == "number") {
          if (_0x42df16.arg === undefined) {
            (function () {
              _0x4c7cc8.call(null, _0x15625f);
            })();
          } else {
            (function (_0x594aa1) {
              _0x23aaa7.apply(null, [_0x15625f, _0x594aa1]);
            })(_0x42df16.arg);
          }
        } else {
          _0x15625f(_0x42df16.arg === undefined ? null : _0x42df16.arg);
        }
      }
    }
    function _0x267195(_0x5114a9) {
      var _0xc69d45 = /\b_Z[\w\d_]+/g;
      return _0x5114a9.replace(_0xc69d45, function (_0x38f7f3) {
        return _0x38f7f3 === _0x3e8643 ? _0x38f7f3 : _0x3e8643 + " [" + _0x38f7f3 + "]";
      });
    }
    function _0x58af9c(_0x1c9dfe) {
      if (_0x1c9dfe instanceof _0x940b30 || _0x1c9dfe == "unwind") {
        return _0x405327;
      }
      _0x41bc27(0x1, _0x1c9dfe);
    }
    function _0x211237() {
      var _0x4f9e8b = new Error();
      if (!_0x4f9e8b.stack) {
        try {
          throw new Error();
        } catch (_0x5f0ab5) {
          _0x4f9e8b = _0x5f0ab5;
        }
        if (!_0x4f9e8b.stack) {
          return "(no stack trace available)";
        }
      }
      return _0x4f9e8b.stack.toString();
    }
    function _0x219c03() {
      var _0x5ad08e = _0x211237();
      if (_0x3d91d8.extraStackTrace) {
        _0x5ad08e += "\n" + _0x3d91d8.extraStackTrace();
      }
      return _0x267195(_0x5ad08e);
    }
    function _0x4f9109(_0x417d8a) {
      if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
        return window.CSS.escape(_0x417d8a);
      }
      return _0x417d8a.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x5dab44() {
      var _0x35f331 = _0x3d91d8.canvas ? _0x3d91d8.canvas.id : "unity-canvas";
      return "#" + _0x4f9109(_0x35f331);
    }
    function _0x4801cc(_0x56a855) {
      var _0x4fe951 = _0x26e3e9(_0x56a855) + 0x1;
      var _0x2af695 = _0x44e6b1(_0x4fe951);
      _0x5b3420(_0x56a855, _0x26daaf, _0x2af695, _0x4fe951);
      return _0x2af695;
    }
    function _0x431f8e() {
      var _0x389c5c = _0x5dab44();
      if (_0x431f8e.selector != _0x389c5c) {
        _0x348983(_0x431f8e.ptr);
        _0x431f8e.ptr = _0x4801cc(_0x389c5c);
        _0x431f8e.selector = _0x389c5c;
      }
      return _0x431f8e.ptr;
    }
    function _0x5e390c(_0x5613ff) {
      window.wgUnityInstance = _0x3d91d8;
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
        window[preroll.config.loaderObjectName].ping(_0x5613ff);
      } catch (_0x2e79e7) {
        console.log("WGSDK: No production WGSDK resources found, loading development resources.");
        var _0xd8d053 = document.createElement("script");
        _0xd8d053.addEventListener("load", function (_0x2f268c) {
          var _0x338e26 = document.createElement("script");
          _0x338e26.addEventListener("load", function (_0x54067b) {
            console.log("WGSDK: Development resources loaded.");
            _0xa644a5(_0x5613ff, true);
          }.bind(this));
          document.getElementsByTagName("head")[0x0].appendChild(_0x338e26);
          _0x338e26.src = window.GMSOFT_ADS_INFO.wgLibrary;
        }.bind(this));
        document.getElementsByTagName("head")[0x0].appendChild(_0xd8d053);
        _0xd8d053.src = window.GMSOFT_ADS_INFO.wgConf;
      }
    }
    function _0xa644a5(_0x1f6e60, _0x465da4) {
      var _0x1d40a9;
      if (_0x465da4 === true) {
        _0x1d40a9 = _0x1f6e60;
      } else {
        _0x1d40a9 = _0x1f6e60 ? _0x4ee57d(_0x26daaf, _0x1f6e60, undefined) : '';
      }
      setTimeout(function () {
        _0x5e390c(_0x1d40a9);
      }, 0xfa);
    }
    function _0x3bebfd() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
        window[window.preroll.config.loaderObjectName].registerGameControls(_0x3d91d8);
      } catch (_0xa1be49) {
        console.log("WGSDK: Can not register game controls.");
        setTimeout(function () {
          _0x3bebfd();
        }, 0xfa);
      }
    }
    function _0x106876() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          "onReady": "OnReadyMethod",
          "onSuccess": "OnSuccessMethod",
          "onFail": "OnFailMethod"
        });
      } catch (_0x214fbd) {
        console.log("WGSDK: Can not register reward ad callbacks.");
        _0x2a0ca2();
      }
    }
    function _0x2a0ca2() {
      setTimeout(function () {
        _0x106876();
      }, 0xfa);
    }
    var _0xa67953 = {
      "splitPath": function (_0x5982b4) {
        var _0x2f07fa = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return _0x2f07fa.exec(_0x5982b4).slice(0x1);
      },
      "normalizeArray": function (_0x5585a3, _0x579249) {
        var _0xed6219 = 0x0;
        for (var _0x50aac7 = _0x5585a3.length - 0x1; _0x50aac7 >= 0x0; _0x50aac7--) {
          var _0x91f4a9 = _0x5585a3[_0x50aac7];
          if (_0x91f4a9 === ".") {
            _0x5585a3.splice(_0x50aac7, 0x1);
          } else {
            if (_0x91f4a9 === "..") {
              _0x5585a3.splice(_0x50aac7, 0x1);
              _0xed6219++;
            } else if (_0xed6219) {
              _0x5585a3.splice(_0x50aac7, 0x1);
              _0xed6219--;
            }
          }
        }
        if (_0x579249) {
          for (; _0xed6219; _0xed6219--) {
            _0x5585a3.unshift("..");
          }
        }
        return _0x5585a3;
      },
      "normalize": function (_0x165158) {
        var _0x164348 = _0x165158.charAt(0x0) === "/";
        var _0x58ba98 = _0x165158.substr(-0x1) === "/";
        _0x165158 = _0xa67953.normalizeArray(_0x165158.split("/").filter(function (_0x46a063) {
          return !!_0x46a063;
        }), !_0x164348).join("/");
        if (!_0x165158 && !_0x164348) {
          _0x165158 = ".";
        }
        if (_0x165158 && _0x58ba98) {
          _0x165158 += "/";
        }
        return (_0x164348 ? "/" : '') + _0x165158;
      },
      "dirname": function (_0x578fbf) {
        var _0x3ddb76 = _0xa67953.splitPath(_0x578fbf);
        var _0x3cdeb3 = _0x3ddb76[0x0];
        var _0x27785d = _0x3ddb76[0x1];
        if (!_0x3cdeb3 && !_0x27785d) {
          return ".";
        }
        if (_0x27785d) {
          _0x27785d = _0x27785d.substr(0x0, _0x27785d.length - 0x1);
        }
        return _0x3cdeb3 + _0x27785d;
      },
      "basename": function (_0x31d20e) {
        if (_0x31d20e === "/") {
          return "/";
        }
        _0x31d20e = _0xa67953.normalize(_0x31d20e);
        _0x31d20e = _0x31d20e.replace(/\/$/, '');
        var _0x121168 = _0x31d20e.lastIndexOf("/");
        if (_0x121168 === -0x1) {
          return _0x31d20e;
        }
        return _0x31d20e.substr(_0x121168 + 0x1);
      },
      "extname": function (_0x43bb97) {
        return _0xa67953.splitPath(_0x43bb97)[0x3];
      },
      "join": function () {
        var _0x2afd9c = Array.prototype.slice.call(arguments, 0x0);
        return _0xa67953.normalize(_0x2afd9c.join("/"));
      },
      "join2": function (_0xa6f08, _0x412063) {
        return _0xa67953.normalize(_0xa6f08 + "/" + _0x412063);
      }
    };
    function _0x3c7d3d() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var _0x4ea9a0 = new Uint8Array(0x1);
        return function () {
          crypto.getRandomValues(_0x4ea9a0);
          return _0x4ea9a0[0x0];
        };
      } else {
        if (_0x523e7b) {
          try {
            var _0x23a205 = require("crypto");
            return function () {
              return _0x23a205.randomBytes(0x1)[0x0];
            };
          } catch (_0x533224) {}
        }
      }
      return function () {
        _0x55b467("randomDevice");
      };
    }
    var _0x3ef774 = {
      "resolve": function () {
        var _0x2dc9fc = '';
        var _0x472780 = false;
        for (var _0x1a8e66 = arguments.length - 0x1; _0x1a8e66 >= -0x1 && !_0x472780; _0x1a8e66--) {
          var _0x3480ca = _0x1a8e66 >= 0x0 ? arguments[_0x1a8e66] : "/";
          if (typeof _0x3480ca != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else {
            if (!_0x3480ca) {
              return '';
            }
          }
          _0x2dc9fc = _0x3480ca + "/" + _0x2dc9fc;
          _0x472780 = _0x3480ca.charAt(0x0) === "/";
        }
        _0x2dc9fc = _0xa67953.normalizeArray(_0x2dc9fc.split("/").filter(function (_0x39d39b) {
          return !!_0x39d39b;
        }), !_0x472780).join("/");
        return (_0x472780 ? "/" : '') + _0x2dc9fc || ".";
      },
      "relative": function (_0x4e0426, _0x120ffa) {
        _0x4e0426 = _0x3ef774.resolve(_0x4e0426).substr(0x1);
        _0x120ffa = _0x3ef774.resolve(_0x120ffa).substr(0x1);
        function _0x130242(_0x437d00) {
          var _0x468e4a = 0x0;
          for (; _0x468e4a < _0x437d00.length; _0x468e4a++) {
            if (_0x437d00[_0x468e4a] !== '') {
              break;
            }
          }
          var _0x5ce8f7 = _0x437d00.length - 0x1;
          for (; _0x5ce8f7 >= 0x0; _0x5ce8f7--) {
            if (_0x437d00[_0x5ce8f7] !== '') {
              break;
            }
          }
          if (_0x468e4a > _0x5ce8f7) {
            return [];
          }
          return _0x437d00.slice(_0x468e4a, _0x5ce8f7 - _0x468e4a + 0x1);
        }
        var _0x2f4263 = _0x130242(_0x4e0426.split("/"));
        var _0x461175 = _0x130242(_0x120ffa.split("/"));
        var _0x42a5ad = Math.min(_0x2f4263.length, _0x461175.length);
        var _0x10bec1 = _0x42a5ad;
        for (var _0xd55d8d = 0x0; _0xd55d8d < _0x42a5ad; _0xd55d8d++) {
          if (_0x2f4263[_0xd55d8d] !== _0x461175[_0xd55d8d]) {
            _0x10bec1 = _0xd55d8d;
            break;
          }
        }
        var _0x2c23ea = [];
        for (var _0xd55d8d = _0x10bec1; _0xd55d8d < _0x2f4263.length; _0xd55d8d++) {
          _0x2c23ea.push("..");
        }
        _0x2c23ea = _0x2c23ea.concat(_0x461175.slice(_0x10bec1));
        return _0x2c23ea.join("/");
      }
    };
    var _0x4ebf0a = {
      "ttys": [],
      "init": function () {},
      "shutdown": function () {},
      "register": function (_0x22b3f1, _0x322341) {
        _0x4ebf0a.ttys[_0x22b3f1] = {
          "input": [],
          "output": [],
          "ops": _0x322341
        };
        _0x3a9ca2.registerDevice(_0x22b3f1, _0x4ebf0a.stream_ops);
      },
      "stream_ops": {
        "open": function (_0x165562) {
          var _0x3645db = _0x4ebf0a.ttys[_0x165562.node.rdev];
          if (!_0x3645db) {
            throw new null(0x2b);
          }
          _0x165562.tty = _0x3645db;
          _0x165562.seekable = false;
        },
        "close": function (_0xe92cee) {
          _0xe92cee.tty.ops.flush(_0xe92cee.tty);
        },
        "flush": function (_0x29de14) {
          _0x29de14.tty.ops.flush(_0x29de14.tty);
        },
        "read": function (_0x58f9f8, _0x6ff46f, _0x44de5a, _0x4dd6fc, _0x20d023) {
          if (!_0x58f9f8.tty || !_0x58f9f8.tty.ops.get_char) {
            throw new null(0x3c);
          }
          var _0x24726b = 0x0;
          for (var _0xe72a44 = 0x0; _0xe72a44 < _0x4dd6fc; _0xe72a44++) {
            var _0x33368b;
            try {
              _0x33368b = _0x58f9f8.tty.ops.get_char(_0x58f9f8.tty);
            } catch (_0x561c6c) {
              throw new null(0x1d);
            }
            if (_0x33368b === undefined && _0x24726b === 0x0) {
              throw new null(0x6);
            }
            if (_0x33368b === null || _0x33368b === undefined) {
              break;
            }
            _0x24726b++;
            _0x6ff46f[_0x44de5a + _0xe72a44] = _0x33368b;
          }
          if (_0x24726b) {
            _0x58f9f8.node.timestamp = Date.now();
          }
          return _0x24726b;
        },
        "write": function (_0x59a6b6, _0x7b1ca6, _0x2c2704, _0x2cbef2, _0x3bfcc3) {
          if (!_0x59a6b6.tty || !_0x59a6b6.tty.ops.put_char) {
            throw new null(0x3c);
          }
          try {
            for (var _0x497973 = 0x0; _0x497973 < _0x2cbef2; _0x497973++) {
              _0x59a6b6.tty.ops.put_char(_0x59a6b6.tty, _0x7b1ca6[_0x2c2704 + _0x497973]);
            }
          } catch (_0x4f9e22) {
            throw new null(0x1d);
          }
          if (_0x2cbef2) {
            _0x59a6b6.node.timestamp = Date.now();
          }
          return _0x497973;
        }
      },
      "default_tty_ops": {
        "get_char": function (_0x2acb95) {
          if (!_0x2acb95.input.length) {
            var _0x599215 = null;
            if (_0x523e7b) {
              var _0x28700e = Buffer.alloc(0x100);
              var _0x3e1c6e = 0x0;
              try {
                _0x3e1c6e = _0x56f128.readSync(process.stdin.fd, _0x28700e, 0x0, 0x100, -0x1);
              } catch (_0x1bab7e) {
                if (_0x1bab7e.toString().includes("EOF")) {
                  _0x3e1c6e = 0x0;
                } else {
                  throw _0x1bab7e;
                }
              }
              if (_0x3e1c6e > 0x0) {
                _0x599215 = _0x28700e.slice(0x0, _0x3e1c6e).toString("utf-8");
              } else {
                _0x599215 = null;
              }
            } else {
              if (typeof window != "undefined" && typeof window.prompt == "function") {
                _0x599215 = window.prompt("Input: ");
                if (_0x599215 !== null) {
                  _0x599215 += "\n";
                }
              } else if (typeof readline == "function") {
                _0x599215 = readline();
                if (_0x599215 !== null) {
                  _0x599215 += "\n";
                }
              }
            }
            if (!_0x599215) {
              return null;
            }
            _0x2acb95.input = _0x5ec4f3(_0x599215, true);
          }
          return _0x2acb95.input.shift();
        },
        "put_char": function (_0x1767d0, _0x14925a) {
          if (_0x14925a === null || _0x14925a === 0xa) {
            _0x369287(_0x4ee57d(_0x1767d0.output, 0x0));
            _0x1767d0.output = [];
          } else {
            if (_0x14925a != 0x0) {
              _0x1767d0.output.push(_0x14925a);
            }
          }
        },
        "flush": function (_0x3e3301) {
          if (_0x3e3301.output && _0x3e3301.output.length > 0x0) {
            _0x369287(_0x4ee57d(_0x3e3301.output, 0x0));
            _0x3e3301.output = [];
          }
        }
      },
      "default_tty1_ops": {
        "put_char": function (_0x532202, _0x24ffc3) {
          if (_0x24ffc3 === null || _0x24ffc3 === 0xa) {
            _0x47ea4b(_0x4ee57d(_0x532202.output, 0x0));
            _0x532202.output = [];
          } else {
            if (_0x24ffc3 != 0x0) {
              _0x532202.output.push(_0x24ffc3);
            }
          }
        },
        "flush": function (_0x2b22ab) {
          if (_0x2b22ab.output && _0x2b22ab.output.length > 0x0) {
            _0x47ea4b(_0x4ee57d(_0x2b22ab.output, 0x0));
            _0x2b22ab.output = [];
          }
        }
      }
    };
    function _0x463c7a(_0x5f5163, _0x26ee8a) {
      _0x26daaf.fill(0x0, _0x5f5163, _0x5f5163 + _0x26ee8a);
    }
    function _0x4a0390(_0x162205) {
      _0x162205 = Math.ceil(_0x162205 / 0x10000) * 0x10000;
      var _0x4d1bd5 = _0x17603e(0x10000, _0x162205);
      if (!_0x4d1bd5) {
        return 0x0;
      }
      _0x463c7a(_0x4d1bd5, _0x162205);
      return _0x4d1bd5;
    }
    var _0x46f590 = {
      "ops_table": null,
      "mount": function (_0x34511e) {
        return _0x46f590.createNode(null, "/", 16895, 0x0);
      },
      "createNode": function (_0x43405a, _0x4db227, _0x5ecf39, _0x52d96c) {
        if ((_0x5ecf39 & 0xf000) === 0x6000 || (_0x5ecf39 & 0xf000) === 0x1000) {
          throw new null(0x3f);
        }
        _0x46f590.ops_table = {
          "dir": {
            "node": {
              "getattr": _0x46f590.node_ops.getattr,
              "setattr": _0x46f590.node_ops.setattr,
              "lookup": _0x46f590.node_ops.lookup,
              "mknod": _0x46f590.node_ops.mknod,
              "rename": _0x46f590.node_ops.rename,
              "unlink": _0x46f590.node_ops.unlink,
              "rmdir": _0x46f590.node_ops.rmdir,
              "readdir": _0x46f590.node_ops.readdir,
              "symlink": _0x46f590.node_ops.symlink
            },
            "stream": {
              "llseek": _0x46f590.stream_ops.llseek
            }
          },
          "file": {
            "node": {
              "getattr": _0x46f590.node_ops.getattr,
              "setattr": _0x46f590.node_ops.setattr
            },
            "stream": {
              "llseek": _0x46f590.stream_ops.llseek,
              "read": _0x46f590.stream_ops.read,
              "write": _0x46f590.stream_ops.write,
              "allocate": _0x46f590.stream_ops.allocate,
              "mmap": _0x46f590.stream_ops.mmap,
              "msync": _0x46f590.stream_ops.msync
            }
          },
          "link": {
            "node": {
              "getattr": _0x46f590.node_ops.getattr,
              "setattr": _0x46f590.node_ops.setattr,
              "readlink": _0x46f590.node_ops.readlink
            },
            "stream": {}
          },
          "chrdev": {
            "node": {
              "getattr": _0x46f590.node_ops.getattr,
              "setattr": _0x46f590.node_ops.setattr
            },
            "stream": _0x3a9ca2.chrdev_stream_ops
          }
        };
        var _0x4d81ad = _0x3a9ca2.createNode(_0x43405a, _0x4db227, _0x5ecf39, _0x52d96c);
        if ((_0x4d81ad.mode & 0xf000) === 0x4000) {
          _0x4d81ad.node_ops = null.dir.node;
          _0x4d81ad.stream_ops = null.dir.stream;
          _0x4d81ad.contents = {};
        } else {
          if ((_0x4d81ad.mode & 0xf000) === 0x8000) {
            _0x4d81ad.node_ops = null.file.node;
            _0x4d81ad.stream_ops = null.file.stream;
            _0x4d81ad.usedBytes = 0x0;
            _0x4d81ad.contents = null;
          } else {
            if ((_0x4d81ad.mode & 0xf000) === 0xa000) {
              _0x4d81ad.node_ops = null.link.node;
              _0x4d81ad.stream_ops = null.link.stream;
            } else if ((_0x4d81ad.mode & 0xf000) === 0x2000) {
              _0x4d81ad.node_ops = null.chrdev.node;
              _0x4d81ad.stream_ops = null.chrdev.stream;
            }
          }
        }
        _0x4d81ad.timestamp = Date.now();
        if (_0x43405a) {
          _0x43405a.contents[_0x4db227] = _0x4d81ad;
          _0x43405a.timestamp = _0x4d81ad.timestamp;
        }
        return _0x4d81ad;
      },
      "getFileDataAsTypedArray": function (_0x3147c0) {
        if (!_0x3147c0.contents) {
          return new Uint8Array(0x0);
        }
        if (_0x3147c0.contents.subarray) {
          return _0x3147c0.contents.subarray(0x0, _0x3147c0.usedBytes);
        }
        return new Uint8Array(_0x3147c0.contents);
      },
      "expandFileStorage": function (_0x2a32e9, _0x46ac62) {
        var _0xef8b9e = _0x2a32e9.contents ? _0x2a32e9.contents.length : 0x0;
        if (_0xef8b9e >= _0x46ac62) {
          return;
        }
        _0x46ac62 = Math.max(_0x46ac62, _0xef8b9e * (_0xef8b9e < 1048576 ? 0x2 : 1.125) >>> 0x0);
        if (_0xef8b9e != 0x0) {
          _0x46ac62 = Math.max(_0x46ac62, 0x100);
        }
        var _0x1e807e = _0x2a32e9.contents;
        _0x2a32e9.contents = new Uint8Array(_0x46ac62);
        if (_0x2a32e9.usedBytes > 0x0) {
          _0x2a32e9.contents.set(_0x1e807e.subarray(0x0, _0x2a32e9.usedBytes), 0x0);
        }
      },
      "resizeFileStorage": function (_0x37184a, _0x5749e4) {
        if (_0x37184a.usedBytes == _0x5749e4) {
          return;
        }
        if (_0x5749e4 == 0x0) {
          _0x37184a.contents = null;
          _0x37184a.usedBytes = 0x0;
        } else {
          var _0x528a75 = _0x37184a.contents;
          _0x37184a.contents = new Uint8Array(_0x5749e4);
          if (_0x528a75) {
            _0x37184a.contents.set(_0x528a75.subarray(0x0, Math.min(_0x5749e4, _0x37184a.usedBytes)));
          }
          _0x37184a.usedBytes = _0x5749e4;
        }
      },
      "node_ops": {
        "getattr": function (_0x2b1cbc) {
          var _0x124e9e = {
            dev: (_0x2b1cbc.mode & 0xf000) === 0x2000 ? _0x2b1cbc.id : 0x1,
            ino: _0x2b1cbc.id,
            mode: _0x2b1cbc.mode,
            nlink: 0x1,
            uid: 0x0,
            gid: 0x0,
            rdev: _0x2b1cbc.rdev
          };
          if ((_0x2b1cbc.mode & 0xf000) === 0x4000) {
            _0x124e9e.size = 0x1000;
          } else {
            if ((_0x2b1cbc.mode & 0xf000) === 0x8000) {
              _0x124e9e.size = _0x2b1cbc.usedBytes;
            } else if ((_0x2b1cbc.mode & 0xf000) === 0xa000) {
              _0x124e9e.size = _0x2b1cbc.link.length;
            } else {
              _0x124e9e.size = 0x0;
            }
          }
          _0x124e9e.atime = new Date(_0x2b1cbc.timestamp);
          _0x124e9e.mtime = new Date(_0x2b1cbc.timestamp);
          _0x124e9e.ctime = new Date(_0x2b1cbc.timestamp);
          _0x124e9e.blksize = 0x1000;
          _0x124e9e.blocks = Math.ceil(_0x124e9e.size / _0x124e9e.blksize);
          return _0x124e9e;
        },
        "setattr": function (_0x1342ef, _0x5e2049) {
          if (_0x5e2049.mode !== undefined) {
            _0x1342ef.mode = _0x5e2049.mode;
          }
          if (_0x5e2049.timestamp !== undefined) {
            _0x1342ef.timestamp = _0x5e2049.timestamp;
          }
          if (_0x5e2049.size !== undefined) {
            _0x46f590.resizeFileStorage(_0x1342ef, _0x5e2049.size);
          }
        },
        "lookup": function (_0x1b2776, _0x4b6a5f) {
          throw _0x3a9ca2.genericErrors[0x2c];
        },
        "mknod": function (_0xceaa22, _0x1318e6, _0x28d147, _0x4e1e13) {
          return _0x46f590.createNode(_0xceaa22, _0x1318e6, _0x28d147, _0x4e1e13);
        },
        "rename": function (_0x5442b3, _0x265827, _0x4f1e16) {
          if ((_0x5442b3.mode & 0xf000) === 0x4000) {
            var _0x260759;
            try {
              _0x260759 = _0x3a9ca2.lookupNode(_0x265827, _0x4f1e16);
            } catch (_0x2310cb) {}
            if (_0x260759) {
              for (var _0x157b35 in _0x260759.contents) {
                throw new null(0x37);
              }
            }
          }
          delete _0x5442b3.parent.contents[_0x5442b3.name];
          _0x5442b3.parent.timestamp = Date.now();
          _0x5442b3.name = _0x4f1e16;
          _0x265827.contents[_0x4f1e16] = _0x5442b3;
          _0x265827.timestamp = _0x5442b3.parent.timestamp;
          _0x5442b3.parent = _0x265827;
        },
        "unlink": function (_0x595c7b, _0x16a812) {
          delete _0x595c7b.contents[_0x16a812];
          _0x595c7b.timestamp = Date.now();
        },
        "rmdir": function (_0x32a0e2, _0xbc5e0d) {
          var _0x4f8446 = _0x3a9ca2.lookupNode(_0x32a0e2, _0xbc5e0d);
          for (var _0x3d6b7b in _0x4f8446.contents) {
            throw new null(0x37);
          }
          delete _0x32a0e2.contents[_0xbc5e0d];
          _0x32a0e2.timestamp = Date.now();
        },
        "readdir": function (_0xcb8d5d) {
          var _0x1e81f5 = [".", ".."];
          for (var _0x5dcb17 in _0xcb8d5d.contents) {
            if (!_0xcb8d5d.contents.hasOwnProperty(_0x5dcb17)) {
              continue;
            }
            _0x1e81f5.push(_0x5dcb17);
          }
          return _0x1e81f5;
        },
        "symlink": function (_0x4d598a, _0x5c67dc, _0x16452b) {
          var _0x53a1dc = _0x46f590.createNode(_0x4d598a, _0x5c67dc, 41471, 0x0);
          _0x53a1dc.link = _0x16452b;
          return _0x53a1dc;
        },
        "readlink": function (_0x215e16) {
          if (!((_0x215e16.mode & 0xf000) === 0xa000)) {
            throw new null(0x1c);
          }
          return _0x215e16.link;
        }
      },
      "stream_ops": {
        "read": function (_0x1ecea6, _0x3491b3, _0x199229, _0x47755a, _0x59ce3c) {
          var _0x135785 = _0x1ecea6.node.contents;
          if (_0x59ce3c >= _0x1ecea6.node.usedBytes) {
            return 0x0;
          }
          var _0x35ee6d = Math.min(_0x1ecea6.node.usedBytes - _0x59ce3c, _0x47755a);
          if (_0x35ee6d > 0x8 && _0x135785.subarray) {
            _0x3491b3.set(_0x135785.subarray(_0x59ce3c, _0x59ce3c + _0x35ee6d), _0x199229);
          } else {
            for (var _0x2f54cf = 0x0; _0x2f54cf < _0x35ee6d; _0x2f54cf++) {
              _0x3491b3[_0x199229 + _0x2f54cf] = _0x135785[_0x59ce3c + _0x2f54cf];
            }
          }
          return _0x35ee6d;
        },
        "write": function (_0x24a71f, _0x41b8a5, _0x2eef1b, _0x222c40, _0x1e402b, _0x5a6a42) {
          if (_0x41b8a5.buffer === _0x31f314.buffer) {
            _0x5a6a42 = false;
          }
          if (!_0x222c40) {
            return 0x0;
          }
          var _0x2551c3 = _0x24a71f.node;
          _0x2551c3.timestamp = Date.now();
          if (_0x41b8a5.subarray && (!_0x2551c3.contents || _0x2551c3.contents.subarray)) {
            if (_0x5a6a42) {
              _0x2551c3.contents = _0x41b8a5.subarray(_0x2eef1b, _0x2eef1b + _0x222c40);
              _0x2551c3.usedBytes = _0x222c40;
              return _0x222c40;
            } else {
              if (_0x2551c3.usedBytes === 0x0 && _0x1e402b === 0x0) {
                _0x2551c3.contents = _0x41b8a5.slice(_0x2eef1b, _0x2eef1b + _0x222c40);
                _0x2551c3.usedBytes = _0x222c40;
                return _0x222c40;
              } else {
                if (_0x1e402b + _0x222c40 <= _0x2551c3.usedBytes) {
                  _0x2551c3.contents.set(_0x41b8a5.subarray(_0x2eef1b, _0x2eef1b + _0x222c40), _0x1e402b);
                  return _0x222c40;
                }
              }
            }
          }
          _0x46f590.expandFileStorage(_0x2551c3, _0x1e402b + _0x222c40);
          if (_0x2551c3.contents.subarray && _0x41b8a5.subarray) {
            _0x2551c3.contents.set(_0x41b8a5.subarray(_0x2eef1b, _0x2eef1b + _0x222c40), _0x1e402b);
          } else {
            for (var _0x157ee2 = 0x0; _0x157ee2 < _0x222c40; _0x157ee2++) {
              _0x2551c3.contents[_0x1e402b + _0x157ee2] = _0x41b8a5[_0x2eef1b + _0x157ee2];
            }
          }
          _0x2551c3.usedBytes = Math.max(_0x2551c3.usedBytes, _0x1e402b + _0x222c40);
          return _0x222c40;
        },
        "llseek": function (_0x19bff5, _0x59ee36, _0x5e57a2) {
          var _0x1ded0f = _0x59ee36;
          if (_0x5e57a2 === 0x1) {
            _0x1ded0f += _0x19bff5.position;
          } else if (_0x5e57a2 === 0x2) {
            if ((_0x19bff5.node.mode & 0xf000) === 0x8000) {
              _0x1ded0f += _0x19bff5.node.usedBytes;
            }
          }
          if (_0x1ded0f < 0x0) {
            throw new null(0x1c);
          }
          return _0x1ded0f;
        },
        "allocate": function (_0x3fba41, _0x2285a3, _0xd587d2) {
          _0x46f590.expandFileStorage(_0x3fba41.node, _0x2285a3 + _0xd587d2);
          _0x3fba41.node.usedBytes = Math.max(_0x3fba41.node.usedBytes, _0x2285a3 + _0xd587d2);
        },
        "mmap": function (_0x17680e, _0x449b50, _0x59532c, _0x2162f6, _0x351b40, _0xd6c725) {
          if (_0x449b50 !== 0x0) {
            throw new null(0x1c);
          }
          if (!((_0x17680e.node.mode & 0xf000) === 0x8000)) {
            throw new null(0x2b);
          }
          var _0x24ee9d;
          var _0x32dcec;
          var _0x6e781 = _0x17680e.node.contents;
          if (!(_0xd6c725 & 0x2) && _0x6e781.buffer === _0x2e52f3) {
            _0x32dcec = false;
            _0x24ee9d = _0x6e781.byteOffset;
          } else {
            if (_0x2162f6 > 0x0 || _0x2162f6 + _0x59532c < _0x6e781.length) {
              if (_0x6e781.subarray) {
                _0x6e781 = _0x6e781.subarray(_0x2162f6, _0x2162f6 + _0x59532c);
              } else {
                _0x6e781 = Array.prototype.slice.call(_0x6e781, _0x2162f6, _0x2162f6 + _0x59532c);
              }
            }
            _0x32dcec = true;
            _0x24ee9d = _0x4a0390(_0x59532c);
            if (!_0x24ee9d) {
              throw new null(0x30);
            }
            _0x31f314.set(_0x6e781, _0x24ee9d);
          }
          return {
            "ptr": _0x24ee9d,
            "allocated": _0x32dcec
          };
        },
        "msync": function (_0x164402, _0x48d43a, _0xb4dee5, _0x53c31d, _0x17a141) {
          if (!((_0x164402.node.mode & 0xf000) === 0x8000)) {
            throw new null(0x2b);
          }
          if (_0x17a141 & 0x2) {
            return 0x0;
          }
          return 0x0;
        }
      }
    };
    function _0xde97f5(_0x1cd152, _0x34e193, _0x400c0e, _0x1992f4) {
      var _0x491f0f = !_0x1992f4 ? _0x426fc3 : '';
      _0x54af19(_0x1cd152, function (_0x3d0efe) {
        _0x56b1b0(_0x3d0efe, "Loading data file \"" + _0x1cd152 + "\" failed (no arrayBuffer).");
        _0x34e193(new Uint8Array(_0x3d0efe));
        if (_0x491f0f) {
          _0x4c4bd8(_0x491f0f);
        }
      }, function (_0x5c7e75) {
        if (_0x400c0e) {
          _0x400c0e();
        } else {
          throw "Loading data file \"" + _0x1cd152 + "\" failed.";
        }
      });
      if (_0x491f0f) {
        _0x1037eb(_0x491f0f);
      }
    }
    var _0x471f3e = {
      "dbs": {},
      "indexedDB": () => {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        var _0x1a997f = null;
        if (typeof window == "object") {
          _0x1a997f = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }
        _0x56b1b0(_0x1a997f, "IDBFS used, but indexedDB not supported");
        return _0x1a997f;
      },
      "DB_VERSION": 0x15,
      "DB_STORE_NAME": "FILE_DATA",
      "mount": function (_0x4b5531) {
        return _0x46f590.mount.apply(null, arguments);
      },
      "syncfs": (_0x361a7a, _0x2dd8ba, _0x2a8d61) => {
        _0x471f3e.getLocalSet(_0x361a7a, (_0x5ddb05, _0x123d3d) => {
          if (_0x5ddb05) {
            return _0x2a8d61(_0x5ddb05);
          }
          _0x471f3e.getRemoteSet(_0x361a7a, (_0x4ba5c5, _0x5efc03) => {
            if (_0x4ba5c5) {
              return _0x2a8d61(_0x4ba5c5);
            }
            var _0x2c803a = _0x2dd8ba ? _0x5efc03 : _0x123d3d;
            var _0x396861 = _0x2dd8ba ? _0x123d3d : _0x5efc03;
            _0x471f3e.reconcile(_0x2c803a, _0x396861, _0x2a8d61);
          });
        });
      },
      "getDB": (_0x3f6d30, _0x3ee82d) => {
        var _0x1c8373 = _0x471f3e.dbs[_0x3f6d30];
        if (_0x1c8373) {
          return _0x3ee82d(null, _0x1c8373);
        }
        var _0x50b332;
        try {
          _0x50b332 = _0x471f3e.indexedDB().open(_0x3f6d30, 0x15);
        } catch (_0xb00088) {
          return _0x3ee82d(_0xb00088);
        }
        if (!_0x50b332) {
          return _0x3ee82d("Unable to connect to IndexedDB");
        }
        _0x50b332.onupgradeneeded = _0x22398c => {
          var _0x355db8 = _0x22398c.target.result;
          var _0x1ed589 = _0x22398c.target.transaction;
          var _0xe4101c;
          if (_0x355db8.objectStoreNames.contains("FILE_DATA")) {
            _0xe4101c = _0x1ed589.objectStore("FILE_DATA");
          } else {
            _0xe4101c = _0x355db8.createObjectStore("FILE_DATA");
          }
          if (!_0xe4101c.indexNames.contains("timestamp")) {
            _0xe4101c.createIndex("timestamp", "timestamp", {
              "unique": false
            });
          }
        };
        _0x50b332.onsuccess = () => {
          _0x1c8373 = _0x50b332.result;
          _0x471f3e.dbs[_0x3f6d30] = _0x1c8373;
          _0x3ee82d(null, _0x1c8373);
        };
        _0x50b332.onerror = _0x42dbdb => {
          _0x3ee82d(this.error);
          _0x42dbdb.preventDefault();
        };
      },
      "getLocalSet": (_0x3ca245, _0x2cbdaa) => {
        var _0x183077 = {};
        function _0x27513e(_0x26852f) {
          return _0x26852f !== "." && _0x26852f !== "..";
        }
        function _0xd44903(_0x51050c) {
          return _0x2b8e0d => {
            return _0xa67953.normalize(_0x51050c + "/" + _0x2b8e0d);
          };
        }
        var _0x5edb8a = _0x3a9ca2.readdir(_0x3ca245.mountpoint).filter(_0x27513e).map(_0xd44903(_0x3ca245.mountpoint));
        while (_0x5edb8a.length) {
          var _0x8358d9 = _0x5edb8a.pop();
          var _0x22985d;
          try {
            _0x22985d = _0x3a9ca2.stat(_0x8358d9);
          } catch (_0x5a089a) {
            return _0x2cbdaa(_0x5a089a);
          }
          if ((_0x22985d.mode & 0xf000) === 0x4000) {
            _0x5edb8a.push.apply(_0x5edb8a, _0x3a9ca2.readdir(_0x8358d9).filter(_0x27513e).map(_0xd44903(_0x8358d9)));
          }
          _0x183077[_0x8358d9] = {
            "timestamp": _0x22985d.mtime
          };
        }
        return _0x2cbdaa(null, {
          "type": "local",
          "entries": _0x183077
        });
      },
      "getRemoteSet": (_0x84b241, _0x51bc2a) => {
        var _0x236d80 = {};
        _0x471f3e.getDB(_0x84b241.mountpoint, (_0x48f479, _0x22d033) => {
          if (_0x48f479) {
            return _0x51bc2a(_0x48f479);
          }
          try {
            var _0x1735ec = _0x22d033.transaction(["FILE_DATA"], "readonly");
            _0x1735ec.onerror = _0x5ac3ae => {
              _0x51bc2a(this.error);
              _0x5ac3ae.preventDefault();
            };
            var _0x34c325 = _0x1735ec.objectStore("FILE_DATA");
            var _0x142786 = _0x34c325.index("timestamp");
            _0x142786.openKeyCursor().onsuccess = _0xe5dfd8 => {
              var _0x293d0f = _0xe5dfd8.target.result;
              if (!_0x293d0f) {
                return _0x51bc2a(null, {
                  "type": "remote",
                  "db": _0x22d033,
                  "entries": _0x236d80
                });
              }
              _0x236d80[_0x293d0f.primaryKey] = {
                "timestamp": _0x293d0f.key
              };
              _0x293d0f["continue"]();
            };
          } catch (_0x4f27f7) {
            return _0x51bc2a(_0x4f27f7);
          }
        });
      },
      "loadLocalEntry": (_0x2a7015, _0x2debdb) => {
        var _0x520d1a;
        var _0x59428a;
        try {
          var _0x52f695 = _0x3a9ca2.lookupPath(_0x2a7015);
          _0x59428a = _0x52f695.node;
          _0x520d1a = _0x3a9ca2.stat(_0x2a7015);
        } catch (_0x6b090e) {
          return _0x2debdb(_0x6b090e);
        }
        if ((_0x520d1a.mode & 0xf000) === 0x4000) {
          return _0x2debdb(null, {
            "timestamp": _0x520d1a.mtime,
            "mode": _0x520d1a.mode
          });
        } else {
          return (_0x520d1a.mode & 0xf000) === 0x8000 ? (_0x59428a.contents = _0x46f590.getFileDataAsTypedArray(_0x59428a), _0x2debdb(null, {
            "timestamp": _0x520d1a.mtime,
            "mode": _0x520d1a.mode,
            "contents": _0x59428a.contents
          })) : _0x2debdb(new Error("node type not supported"));
        }
      },
      "storeLocalEntry": (_0x5843ff, _0x1a8733, _0x4cb30f) => {
        try {
          if ((_0x1a8733.mode & 0xf000) === 0x4000) {
            _0x3a9ca2.mkdirTree(_0x5843ff, _0x1a8733.mode);
          } else {
            if ((_0x1a8733.mode & 0xf000) === 0x8000) {
              _0x3a9ca2.writeFile(_0x5843ff, _0x1a8733.contents, {
                "canOwn": true
              });
            } else {
              return _0x4cb30f(new Error("node type not supported"));
            }
          }
          _0x3a9ca2.chmod(_0x5843ff, _0x1a8733.mode);
          _0x3a9ca2.utime(_0x5843ff, _0x1a8733.timestamp, _0x1a8733.timestamp);
        } catch (_0x11a711) {
          return _0x4cb30f(_0x11a711);
        }
        _0x4cb30f(null);
      },
      "removeLocalEntry": (_0x46b379, _0x4413cc) => {
        try {
          var _0x2f87c5 = _0x3a9ca2.stat(_0x46b379);
          if ((_0x2f87c5.mode & 0xf000) === 0x4000) {
            _0x3a9ca2.rmdir(_0x46b379);
          } else if ((_0x2f87c5.mode & 0xf000) === 0x8000) {
            _0x3a9ca2.unlink(_0x46b379);
          }
        } catch (_0x299ba7) {
          return _0x4413cc(_0x299ba7);
        }
        _0x4413cc(null);
      },
      "loadRemoteEntry": (_0x28d9ec, _0x3a1bd6, _0xb83169) => {
        var _0x82f773 = _0x28d9ec.get(_0x3a1bd6);
        _0x82f773.onsuccess = _0x1955f2 => {
          _0xb83169(null, _0x1955f2.target.result);
        };
        _0x82f773.onerror = _0x109669 => {
          _0xb83169(this.error);
          _0x109669.preventDefault();
        };
      },
      "storeRemoteEntry": (_0xc04aa2, _0x2fb603, _0x2e7165, _0x1abb55) => {
        try {
          var _0x5c1fa3 = _0xc04aa2.put(_0x2e7165, _0x2fb603);
        } catch (_0x3cfb82) {
          _0x1abb55(_0x3cfb82);
          return;
        }
        _0x5c1fa3.onsuccess = () => {
          _0x1abb55(null);
        };
        _0x5c1fa3.onerror = _0x45698 => {
          _0x1abb55(this.error);
          _0x45698.preventDefault();
        };
      },
      "removeRemoteEntry": (_0x580697, _0x8cfd65, _0xfa80de) => {
        var _0x1c41a4 = _0x580697["delete"](_0x8cfd65);
        _0x1c41a4.onsuccess = () => {
          _0xfa80de(null);
        };
        _0x1c41a4.onerror = _0x1af6e0 => {
          _0xfa80de(this.error);
          _0x1af6e0.preventDefault();
        };
      },
      "reconcile": (_0x1a673e, _0x4d90ff, _0x2b4400) => {
        var _0x14633b = 0x0;
        var _0x196384 = [];
        Object.keys(_0x1a673e.entries).forEach(function (_0x1d91e0) {
          var _0x2e6f29 = _0x1a673e.entries[_0x1d91e0];
          var _0x3a7c06 = _0x4d90ff.entries[_0x1d91e0];
          if (!_0x3a7c06 || _0x2e6f29.timestamp.getTime() != _0x3a7c06.timestamp.getTime()) {
            _0x196384.push(_0x1d91e0);
            _0x14633b++;
          }
        });
        var _0x5ed73f = [];
        Object.keys(_0x4d90ff.entries).forEach(function (_0x1fae69) {
          if (!_0x1a673e.entries[_0x1fae69]) {
            _0x5ed73f.push(_0x1fae69);
            _0x14633b++;
          }
        });
        if (!_0x14633b) {
          return _0x2b4400(null);
        }
        var _0x596040 = false;
        var _0x4c0d4f = _0x1a673e.type === "remote" ? _0x1a673e.db : _0x4d90ff.db;
        var _0x532c36 = _0x4c0d4f.transaction(["FILE_DATA"], "readwrite");
        var _0x3cca37 = _0x532c36.objectStore("FILE_DATA");
        function _0x32e49a(_0xe85ae1) {
          if (_0xe85ae1 && !_0x596040) {
            _0x596040 = true;
            return _0x2b4400(_0xe85ae1);
          }
        }
        _0x532c36.onerror = _0x119d04 => {
          _0x32e49a(this.error);
          _0x119d04.preventDefault();
        };
        _0x532c36.oncomplete = _0xf0ac27 => {
          if (!_0x596040) {
            _0x2b4400(null);
          }
        };
        _0x196384.sort().forEach(_0x3e679e => {
          if (_0x4d90ff.type === "local") {
            _0x471f3e.loadRemoteEntry(_0x3cca37, _0x3e679e, (_0x281cb0, _0xf437bd) => {
              if (_0x281cb0) {
                return _0x32e49a(_0x281cb0);
              }
              _0x471f3e.storeLocalEntry(_0x3e679e, _0xf437bd, _0x32e49a);
            });
          } else {
            _0x471f3e.loadLocalEntry(_0x3e679e, (_0x414e9f, _0x487a09) => {
              if (_0x414e9f) {
                return _0x32e49a(_0x414e9f);
              }
              _0x471f3e.storeRemoteEntry(_0x3cca37, _0x3e679e, _0x487a09, _0x32e49a);
            });
          }
        });
        _0x5ed73f.sort().reverse().forEach(_0x27a824 => {
          if (_0x4d90ff.type === "local") {
            _0x471f3e.removeLocalEntry(_0x27a824, _0x32e49a);
          } else {
            _0x471f3e.removeRemoteEntry(_0x3cca37, _0x27a824, _0x32e49a);
          }
        });
      }
    };
    var _0x3a9ca2 = {
      "root": null,
      "mounts": [],
      "devices": {},
      "streams": [],
      "nextInode": 0x1,
      "nameTable": null,
      "currentPath": "/",
      "initialized": false,
      "ignorePermissions": true,
      "ErrnoError": null,
      "genericErrors": {},
      "filesystems": null,
      "syncFSRequests": 0x0,
      "lookupPath": (_0x2dd28c, _0x3d9aba = {}) => {
        _0x2dd28c = _0x3ef774.resolve("/", _0x2dd28c);
        if (!_0x2dd28c) {
          return {
            "path": '',
            "node": null
          };
        }
        var _0x460fd0 = {
          "follow_mount": true,
          "recurse_count": 0x0
        };
        _0x3d9aba = Object.assign(_0x460fd0, _0x3d9aba);
        if (_0x3d9aba.recurse_count > 0x8) {
          throw new null(0x20);
        }
        var _0xb4b1c8 = _0xa67953.normalizeArray(_0x2dd28c.split("/").filter(_0x4543d0 => !!_0x4543d0), false);
        var _0xbcf42f = null;
        var _0x5cb10a = "/";
        for (var _0x3756b0 = 0x0; _0x3756b0 < _0xb4b1c8.length; _0x3756b0++) {
          var _0xd4b8 = _0x3756b0 === _0xb4b1c8.length - 0x1;
          if (_0xd4b8 && _0x3d9aba.parent) {
            break;
          }
          _0xbcf42f = _0x3a9ca2.lookupNode(_0xbcf42f, _0xb4b1c8[_0x3756b0]);
          _0x5cb10a = _0xa67953.normalize(_0x5cb10a + "/" + _0xb4b1c8[_0x3756b0]);
          if (!!_0xbcf42f.mounted) {
            if (!_0xd4b8 || _0xd4b8 && _0x3d9aba.follow_mount) {
              _0xbcf42f = _0xbcf42f.mounted.root;
            }
          }
          if (!_0xd4b8 || _0x3d9aba.follow) {
            var _0x40c498 = 0x0;
            while ((_0xbcf42f.mode & 0xf000) === 0xa000) {
              var _0x7bef2f = _0x3a9ca2.readlink(_0x5cb10a);
              _0x5cb10a = _0x3ef774.resolve(_0xa67953.dirname(_0x5cb10a), _0x7bef2f);
              var _0x5c9cc2 = _0x3a9ca2.lookupPath(_0x5cb10a, {
                "recurse_count": _0x3d9aba.recurse_count + 0x1
              });
              _0xbcf42f = _0x5c9cc2.node;
              if (_0x40c498++ > 0x28) {
                throw new null(0x20);
              }
            }
          }
        }
        return {
          "path": _0x5cb10a,
          "node": _0xbcf42f
        };
      },
      "getPath": _0xca9326 => {
        var _0x77f1c2;
        while (true) {
          if (_0xca9326 === _0xca9326.parent) {
            var _0x32f750 = _0xca9326.mount.mountpoint;
            if (!_0x77f1c2) {
              return _0x32f750;
            }
            return _0x32f750[_0x32f750.length - 0x1] !== "/" ? _0x32f750 + "/" + _0x77f1c2 : _0x32f750 + _0x77f1c2;
          }
          _0x77f1c2 = _0x77f1c2 ? _0xca9326.name + "/" + _0x77f1c2 : _0xca9326.name;
          _0xca9326 = _0xca9326.parent;
        }
      },
      "hashName": (_0x3c5dac, _0x1b43c8) => {
        var _0x2d40f5 = 0x0;
        for (var _0x4ad0fc = 0x0; _0x4ad0fc < _0x1b43c8.length; _0x4ad0fc++) {
          _0x2d40f5 = (_0x2d40f5 << 0x5) - _0x2d40f5 + _0x1b43c8.charCodeAt(_0x4ad0fc) | 0x0;
        }
        return (_0x3c5dac + _0x2d40f5 >>> 0x0) % null.length;
      },
      "hashAddNode": _0x371fba => {
        var _0x40903e = _0x3a9ca2.hashName(_0x371fba.parent.id, _0x371fba.name);
        _0x371fba.name_next = null[_0x40903e];
        null[_0x40903e] = _0x371fba;
      },
      "hashRemoveNode": _0x3ac51a => {
        var _0x8a01fe = _0x3a9ca2.hashName(_0x3ac51a.parent.id, _0x3ac51a.name);
        if (null[_0x8a01fe] === _0x3ac51a) {
          null[_0x8a01fe] = _0x3ac51a.name_next;
        } else {
          var _0x542051 = null[_0x8a01fe];
          while (_0x542051) {
            if (_0x542051.name_next === _0x3ac51a) {
              _0x542051.name_next = _0x3ac51a.name_next;
              break;
            }
            _0x542051 = _0x542051.name_next;
          }
        }
      },
      "lookupNode": (_0x298ff2, _0x3a31cd) => {
        var _0x4eddaf = _0x3a9ca2.mayLookup(_0x298ff2);
        if (_0x4eddaf) {
          throw new null(_0x4eddaf, _0x298ff2);
        }
        var _0x5ad290 = _0x3a9ca2.hashName(_0x298ff2.id, _0x3a31cd);
        for (var _0x26b760 = null[_0x5ad290]; _0x26b760; _0x26b760 = _0x26b760.name_next) {
          var _0x395bd8 = _0x26b760.name;
          if (_0x26b760.parent.id === _0x298ff2.id && _0x395bd8 === _0x3a31cd) {
            return _0x26b760;
          }
        }
        return _0x298ff2.node_ops.lookup(_0x298ff2, _0x3a31cd);
      },
      "createNode": (_0x487dc, _0x4f7f1e, _0x5023c3, _0x13e576) => {
        var _0x4f4aab = new _0x3a9ca2.FSNode(_0x487dc, _0x4f7f1e, _0x5023c3, _0x13e576);
        _0x3a9ca2.hashAddNode(_0x4f4aab);
        return _0x4f4aab;
      },
      "destroyNode": _0x5ae5e7 => {
        _0x3a9ca2.hashRemoveNode(_0x5ae5e7);
      },
      "isRoot": _0x9b78c1 => {
        return _0x9b78c1 === _0x9b78c1.parent;
      },
      "isMountpoint": _0x3ff328 => {
        return !!_0x3ff328.mounted;
      },
      "isFile": _0xbcd88d => {
        return (_0xbcd88d & 0xf000) === 0x8000;
      },
      "isDir": _0x34e8d1 => {
        return (_0x34e8d1 & 0xf000) === 0x4000;
      },
      "isLink": _0xb9180a => {
        return (_0xb9180a & 0xf000) === 0xa000;
      },
      "isChrdev": _0x49e822 => {
        return (_0x49e822 & 0xf000) === 0x2000;
      },
      "isBlkdev": _0x16ad12 => {
        return (_0x16ad12 & 0xf000) === 0x6000;
      },
      "isFIFO": _0x277a59 => {
        return (_0x277a59 & 0xf000) === 0x1000;
      },
      "isSocket": _0x455b4b => {
        return (_0x455b4b & 0xc000) === 0xc000;
      },
      "flagModes": {
        "r": 0x0,
        "r+": 0x2,
        "w": 0x241,
        "w+": 0x242,
        "a": 0x441,
        "a+": 0x442
      },
      "modeStringToFlags": _0x21ac26 => {
        var _0x451d24 = _0x3a9ca2.flagModes[_0x21ac26];
        if (typeof _0x451d24 == "undefined") {
          throw new Error("Unknown file open mode: " + _0x21ac26);
        }
        return _0x451d24;
      },
      "flagsToPermissionString": _0x180a5b => {
        var _0x4de5e6 = ["r", "w", "rw"][_0x180a5b & 0x3];
        if (_0x180a5b & 0x200) {
          _0x4de5e6 += "w";
        }
        return _0x4de5e6;
      },
      "nodePermissions": (_0x28d048, _0x367ffd) => {
        return 0x0;
        if (_0x367ffd.includes("r") && !(_0x28d048.mode & 0x124)) {
          return 0x2;
        } else {
          if (_0x367ffd.includes("w") && !(_0x28d048.mode & 0x92)) {
            return 0x2;
          } else {
            if (_0x367ffd.includes("x") && !(_0x28d048.mode & 0x49)) {
              return 0x2;
            }
          }
        }
        return 0x0;
      },
      "mayLookup": _0x4b7ae5 => {
        var _0x347b41 = _0x3a9ca2.nodePermissions(_0x4b7ae5, "x");
        if (_0x347b41) {
          return _0x347b41;
        }
        if (!_0x4b7ae5.node_ops.lookup) {
          return 0x2;
        }
        return 0x0;
      },
      "mayCreate": (_0xb55473, _0x4b23df) => {
        try {
          return 0x14;
        } catch (_0x5d8723) {}
        return _0x3a9ca2.nodePermissions(_0xb55473, "wx");
      },
      "mayDelete": (_0x9c42c2, _0x33e8ed, _0x33f81d) => {
        var _0x26fc79;
        try {
          _0x26fc79 = _0x3a9ca2.lookupNode(_0x9c42c2, _0x33e8ed);
        } catch (_0xd7b85a) {
          return _0xd7b85a.errno;
        }
        var _0x56ea67 = _0x3a9ca2.nodePermissions(_0x9c42c2, "wx");
        if (_0x56ea67) {
          return _0x56ea67;
        }
        if (_0x33f81d) {
          if (!((_0x26fc79.mode & 0xf000) === 0x4000)) {
            return 0x36;
          }
          if (_0x26fc79 === _0x26fc79.parent || _0x3a9ca2.getPath(_0x26fc79) === "/") {
            return 0xa;
          }
        } else {
          if ((_0x26fc79.mode & 0xf000) === 0x4000) {
            return 0x1f;
          }
        }
        return 0x0;
      },
      "mayOpen": (_0x4c84a5, _0xa31f96) => {
        if (!_0x4c84a5) {
          return 0x2c;
        }
        if ((_0x4c84a5.mode & 0xf000) === 0xa000) {
          return 0x20;
        } else {
          if ((_0x4c84a5.mode & 0xf000) === 0x4000) {
            if (_0x3a9ca2.flagsToPermissionString(_0xa31f96) !== "r" || _0xa31f96 & 0x200) {
              return 0x1f;
            }
          }
        }
        return _0x3a9ca2.nodePermissions(_0x4c84a5, _0x3a9ca2.flagsToPermissionString(_0xa31f96));
      },
      "MAX_OPEN_FDS": 0x1000,
      "nextfd": (_0x4d4fae = 0x0, _0x4c0782 = 0x1000) => {
        for (var _0x32b10e = _0x4d4fae; _0x32b10e <= _0x4c0782; _0x32b10e++) {
          if (!_0x3a9ca2.streams[_0x32b10e]) {
            return _0x32b10e;
          }
        }
        throw new null(0x21);
      },
      "getStream": _0x243202 => _0x3a9ca2.streams[_0x243202],
      "createStream": (_0x2d89c5, _0x295b32, _0x308fa0) => {
        if (!_0x3a9ca2.FSStream) {
          _0x3a9ca2.FSStream = function () {};
          _0x3a9ca2.FSStream.prototype = {
            "object": {
              "get": function () {
                return this.node;
              },
              "set": function (_0x3752be) {
                this.node = _0x3752be;
              }
            },
            "isRead": {
              "get": function () {
                return (this.flags & 0x200003) !== 0x1;
              }
            },
            "isWrite": {
              "get": function () {
                return (this.flags & 0x200003) !== 0x0;
              }
            },
            "isAppend": {
              "get": function () {
                return this.flags & 0x400;
              }
            }
          };
        }
        _0x2d89c5 = Object.assign(new _0x3a9ca2.FSStream(), _0x2d89c5);
        var _0x154744 = _0x3a9ca2.nextfd(_0x295b32, _0x308fa0);
        _0x2d89c5.fd = _0x154744;
        _0x3a9ca2.streams[_0x154744] = _0x2d89c5;
        return _0x2d89c5;
      },
      "closeStream": _0x3bff75 => {
        _0x3a9ca2.streams[_0x3bff75] = null;
      },
      "chrdev_stream_ops": {
        "open": _0x3b0b87 => {
          var _0x218112 = _0x3a9ca2.devices[_0x3b0b87.node.rdev];
          _0x3b0b87.stream_ops = _0x218112.stream_ops;
          if (_0x3b0b87.stream_ops.open) {
            _0x3b0b87.stream_ops.open(_0x3b0b87);
          }
        },
        "llseek": () => {
          throw new null(0x46);
        }
      },
      "major": _0x6a5e56 => _0x6a5e56 >> 0x8,
      "minor": _0x550874 => _0x550874 & 0xff,
      "makedev": (_0x193c4c, _0x54dbac) => _0x193c4c << 0x8 | _0x54dbac,
      "registerDevice": (_0x58d0c6, _0x443086) => {
        _0x3a9ca2.devices[_0x58d0c6] = {
          "stream_ops": _0x443086
        };
      },
      "getDevice": _0x2e6dbd => _0x3a9ca2.devices[_0x2e6dbd],
      "getMounts": _0x8a964 => {
        var _0x16d21f = [];
        var _0x4c1129 = [_0x8a964];
        while (_0x4c1129.length) {
          var _0xfa7c31 = _0x4c1129.pop();
          _0x16d21f.push(_0xfa7c31);
          _0x4c1129.push.apply(_0x4c1129, _0xfa7c31.mounts);
        }
        return _0x16d21f;
      },
      "syncfs": (_0x8fa3b0, _0x3a892c) => {
        if (typeof _0x8fa3b0 == "function") {
          _0x3a892c = _0x8fa3b0;
          _0x8fa3b0 = false;
        }
        0x0++;
        var _0x28ca0a = _0x3a9ca2.getMounts(null.mount);
        var _0x202296 = 0x0;
        function _0x241cb0(_0x1bc14e) {
          0x0--;
          return _0x3a892c(_0x1bc14e);
        }
        function _0xacd4ca(_0x2c3844) {
          if (_0x2c3844) {
            if (!_0xacd4ca.errored) {
              _0xacd4ca.errored = true;
              return _0x241cb0(_0x2c3844);
            }
            return;
          }
          if (++_0x202296 >= _0x28ca0a.length) {
            _0x241cb0(null);
          }
        }
        _0x28ca0a.forEach(_0x2ea4c3 => {
          if (!_0x2ea4c3.type.syncfs) {
            return _0xacd4ca(null);
          }
          _0x2ea4c3.type.syncfs(_0x2ea4c3, _0x8fa3b0, _0xacd4ca);
        });
      },
      "mount": (_0xb1ad24, _0x300783, _0x51a3e9) => {
        var _0x255e18 = _0x51a3e9 === "/";
        var _0x99c167 = !_0x51a3e9;
        var _0x4f45e8;
        if (_0x255e18 && null) {
          throw new null(0xa);
        } else {
          if (!_0x255e18 && !_0x99c167) {
            var _0x2cb5a7 = _0x3a9ca2.lookupPath(_0x51a3e9, {
              "follow_mount": false
            });
            _0x51a3e9 = _0x2cb5a7.path;
            _0x4f45e8 = _0x2cb5a7.node;
            if (!!_0x4f45e8.mounted) {
              throw new null(0xa);
            }
            if (!((_0x4f45e8.mode & 0xf000) === 0x4000)) {
              throw new null(0x36);
            }
          }
        }
        var _0x24ee6f = {
          "type": _0xb1ad24,
          "opts": _0x300783,
          "mountpoint": _0x51a3e9,
          "mounts": []
        };
        var _0xe17302 = _0xb1ad24.mount(_0x24ee6f);
        _0xe17302.mount = _0x24ee6f;
        _0x24ee6f.root = _0xe17302;
        if (_0x255e18) {
          _0x3a9ca2.root = _0xe17302;
        } else if (_0x4f45e8) {
          _0x4f45e8.mounted = _0x24ee6f;
          if (_0x4f45e8.mount) {
            _0x4f45e8.mount.mounts.push(_0x24ee6f);
          }
        }
        return _0xe17302;
      },
      "unmount": _0x5e4d50 => {
        var _0x4a8c52 = _0x3a9ca2.lookupPath(_0x5e4d50, {
          "follow_mount": false
        });
        if (!!!_0x4a8c52.node.mounted) {
          throw new null(0x1c);
        }
        var _0x5da92c = _0x4a8c52.node;
        var _0x85c31f = _0x5da92c.mounted;
        var _0x4aeeab = _0x3a9ca2.getMounts(_0x85c31f);
        Object.keys(null).forEach(_0x228730 => {
          var _0x222e28 = null[_0x228730];
          while (_0x222e28) {
            var _0x1b5b0f = _0x222e28.name_next;
            if (_0x4aeeab.includes(_0x222e28.mount)) {
              _0x3a9ca2.destroyNode(_0x222e28);
            }
            _0x222e28 = _0x1b5b0f;
          }
        });
        _0x5da92c.mounted = null;
        var _0x140d20 = _0x5da92c.mount.mounts.indexOf(_0x85c31f);
        _0x5da92c.mount.mounts.splice(_0x140d20, 0x1);
      },
      "lookup": (_0x4ee068, _0x4a4ce6) => {
        return _0x4ee068.node_ops.lookup(_0x4ee068, _0x4a4ce6);
      },
      "mknod": (_0x4135d4, _0x5be03e, _0x19f310) => {
        var _0x19deb1 = _0x3a9ca2.lookupPath(_0x4135d4, {
          "parent": true
        });
        var _0x169530 = _0x19deb1.node;
        var _0x3bf0cb = _0xa67953.basename(_0x4135d4);
        if (!_0x3bf0cb || _0x3bf0cb === "." || _0x3bf0cb === "..") {
          throw new null(0x1c);
        }
        var _0x3be634 = _0x3a9ca2.mayCreate(_0x169530, _0x3bf0cb);
        if (_0x3be634) {
          throw new null(_0x3be634);
        }
        if (!_0x169530.node_ops.mknod) {
          throw new null(0x3f);
        }
        return _0x169530.node_ops.mknod(_0x169530, _0x3bf0cb, _0x5be03e, _0x19f310);
      },
      "create": (_0x264e9e, _0x24710a) => {
        _0x24710a = _0x24710a !== undefined ? _0x24710a : 0x1b6;
        _0x24710a &= 0xfff;
        _0x24710a |= 0x8000;
        return _0x3a9ca2.mknod(_0x264e9e, _0x24710a, 0x0);
      },
      "mkdir": (_0x5c61e0, _0x46afd8) => {
        _0x46afd8 = _0x46afd8 !== undefined ? _0x46afd8 : 0x1ff;
        _0x46afd8 &= 1023;
        _0x46afd8 |= 0x4000;
        return _0x3a9ca2.mknod(_0x5c61e0, _0x46afd8, 0x0);
      },
      "mkdirTree": (_0x444357, _0x4842d0) => {
        var _0x22707c = _0x444357.split("/");
        var _0x29be3b = '';
        for (var _0x205901 = 0x0; _0x205901 < _0x22707c.length; ++_0x205901) {
          if (!_0x22707c[_0x205901]) {
            continue;
          }
          _0x29be3b += "/" + _0x22707c[_0x205901];
          try {
            _0x3a9ca2.mkdir(_0x29be3b, _0x4842d0);
          } catch (_0x53607f) {
            if (_0x53607f.errno != 0x14) {
              throw _0x53607f;
            }
          }
        }
      },
      "mkdev": (_0x99ed9, _0x3cff91, _0x3564b5) => {
        if (typeof _0x3564b5 == "undefined") {
          _0x3564b5 = _0x3cff91;
          _0x3cff91 = 0x1b6;
        }
        _0x3cff91 |= 0x2000;
        return _0x3a9ca2.mknod(_0x99ed9, _0x3cff91, _0x3564b5);
      },
      "symlink": (_0x14f4af, _0x2210d0) => {
        if (!_0x3ef774.resolve(_0x14f4af)) {
          throw new null(0x2c);
        }
        var _0x347339 = _0x3a9ca2.lookupPath(_0x2210d0, {
          "parent": true
        });
        var _0x5e071d = _0x347339.node;
        if (!_0x5e071d) {
          throw new null(0x2c);
        }
        var _0x30b7d6 = _0xa67953.basename(_0x2210d0);
        var _0xa57b97 = _0x3a9ca2.mayCreate(_0x5e071d, _0x30b7d6);
        if (_0xa57b97) {
          throw new null(_0xa57b97);
        }
        if (!_0x5e071d.node_ops.symlink) {
          throw new null(0x3f);
        }
        return _0x5e071d.node_ops.symlink(_0x5e071d, _0x30b7d6, _0x14f4af);
      },
      "rename": (_0x21be4c, _0x5cee67) => {
        var _0x2088ad = _0xa67953.dirname(_0x21be4c);
        var _0x19a643 = _0xa67953.dirname(_0x5cee67);
        var _0x1e1202 = _0xa67953.basename(_0x21be4c);
        var _0x4c8d91 = _0xa67953.basename(_0x5cee67);
        var _0x27dcfa;
        var _0x18fc67;
        var _0x384279;
        _0x27dcfa = _0x3a9ca2.lookupPath(_0x21be4c, {
          "parent": true
        });
        _0x18fc67 = _0x27dcfa.node;
        _0x27dcfa = _0x3a9ca2.lookupPath(_0x5cee67, {
          "parent": true
        });
        _0x384279 = _0x27dcfa.node;
        if (!_0x18fc67 || !_0x384279) {
          throw new null(0x2c);
        }
        if (_0x18fc67.mount !== _0x384279.mount) {
          throw new null(0x4b);
        }
        var _0x4246a2 = _0x3a9ca2.lookupNode(_0x18fc67, _0x1e1202);
        var _0x453ba8 = _0x3ef774.relative(_0x21be4c, _0x19a643);
        if (_0x453ba8.charAt(0x0) !== ".") {
          throw new null(0x1c);
        }
        _0x453ba8 = _0x3ef774.relative(_0x5cee67, _0x2088ad);
        if (_0x453ba8.charAt(0x0) !== ".") {
          throw new null(0x37);
        }
        var _0x1cd69d;
        try {
          _0x1cd69d = _0x3a9ca2.lookupNode(_0x384279, _0x4c8d91);
        } catch (_0x1f0d67) {}
        if (_0x4246a2 === _0x1cd69d) {
          return;
        }
        var _0x2a8f61 = (_0x4246a2.mode & 0xf000) === 0x4000;
        var _0x3ed458 = _0x3a9ca2.mayDelete(_0x18fc67, _0x1e1202, _0x2a8f61);
        if (_0x3ed458) {
          throw new null(_0x3ed458);
        }
        _0x3ed458 = _0x1cd69d ? _0x3a9ca2.mayDelete(_0x384279, _0x4c8d91, _0x2a8f61) : _0x3a9ca2.mayCreate(_0x384279, _0x4c8d91);
        if (_0x3ed458) {
          throw new null(_0x3ed458);
        }
        if (!_0x18fc67.node_ops.rename) {
          throw new null(0x3f);
        }
        if (!!_0x4246a2.mounted || _0x1cd69d && !!_0x1cd69d.mounted) {
          throw new null(0xa);
        }
        if (_0x384279 !== _0x18fc67) {
          _0x3ed458 = _0x3a9ca2.nodePermissions(_0x18fc67, "w");
          if (_0x3ed458) {
            throw new null(_0x3ed458);
          }
        }
        _0x3a9ca2.hashRemoveNode(_0x4246a2);
        try {
          _0x18fc67.node_ops.rename(_0x4246a2, _0x384279, _0x4c8d91);
        } catch (_0x1d3d39) {
          throw _0x1d3d39;
        } finally {
          _0x3a9ca2.hashAddNode(_0x4246a2);
        }
      },
      "rmdir": _0xd79753 => {
        var _0x3e0bbf = _0x3a9ca2.lookupPath(_0xd79753, {
          "parent": true
        });
        var _0x4209fd = _0x3e0bbf.node;
        var _0x8eed6a = _0xa67953.basename(_0xd79753);
        var _0x1c0532 = _0x3a9ca2.lookupNode(_0x4209fd, _0x8eed6a);
        var _0x4f2487 = _0x3a9ca2.mayDelete(_0x4209fd, _0x8eed6a, true);
        if (_0x4f2487) {
          throw new null(_0x4f2487);
        }
        if (!_0x4209fd.node_ops.rmdir) {
          throw new null(0x3f);
        }
        if (!!_0x1c0532.mounted) {
          throw new null(0xa);
        }
        _0x4209fd.node_ops.rmdir(_0x4209fd, _0x8eed6a);
        _0x3a9ca2.destroyNode(_0x1c0532);
      },
      "readdir": _0x193c63 => {
        var _0xc766a7 = _0x3a9ca2.lookupPath(_0x193c63, {
          "follow": true
        });
        var _0x13531a = _0xc766a7.node;
        if (!_0x13531a.node_ops.readdir) {
          throw new null(0x36);
        }
        return _0x13531a.node_ops.readdir(_0x13531a);
      },
      "unlink": _0x824d43 => {
        var _0x1b247e = _0x3a9ca2.lookupPath(_0x824d43, {
          "parent": true
        });
        var _0x37dd51 = _0x1b247e.node;
        if (!_0x37dd51) {
          throw new null(0x2c);
        }
        var _0x22dd66 = _0xa67953.basename(_0x824d43);
        var _0x515096 = _0x3a9ca2.lookupNode(_0x37dd51, _0x22dd66);
        var _0x3cb8d0 = _0x3a9ca2.mayDelete(_0x37dd51, _0x22dd66, false);
        if (_0x3cb8d0) {
          throw new null(_0x3cb8d0);
        }
        if (!_0x37dd51.node_ops.unlink) {
          throw new null(0x3f);
        }
        if (!!_0x515096.mounted) {
          throw new null(0xa);
        }
        _0x37dd51.node_ops.unlink(_0x37dd51, _0x22dd66);
        _0x3a9ca2.destroyNode(_0x515096);
      },
      "readlink": _0x3869ff => {
        var _0x553b3a = _0x3a9ca2.lookupPath(_0x3869ff);
        var _0x37bc62 = _0x553b3a.node;
        if (!_0x37bc62) {
          throw new null(0x2c);
        }
        if (!_0x37bc62.node_ops.readlink) {
          throw new null(0x1c);
        }
        return _0x3ef774.resolve(_0x3a9ca2.getPath(_0x37bc62.parent), _0x37bc62.node_ops.readlink(_0x37bc62));
      },
      "stat": (_0x5899a9, _0x547f9d) => {
        var _0x1d870e = _0x3a9ca2.lookupPath(_0x5899a9, {
          "follow": !_0x547f9d
        });
        var _0x12e252 = _0x1d870e.node;
        if (!_0x12e252) {
          throw new null(0x2c);
        }
        if (!_0x12e252.node_ops.getattr) {
          throw new null(0x3f);
        }
        return _0x12e252.node_ops.getattr(_0x12e252);
      },
      "lstat": _0x127b11 => {
        return _0x3a9ca2.stat(_0x127b11, true);
      },
      "chmod": (_0x3e98dd, _0x1393ba, _0x2ce339) => {
        var _0x3ad84a;
        if (typeof _0x3e98dd == "string") {
          var _0xb9389e = _0x3a9ca2.lookupPath(_0x3e98dd, {
            "follow": !_0x2ce339
          });
          _0x3ad84a = _0xb9389e.node;
        } else {
          _0x3ad84a = _0x3e98dd;
        }
        if (!_0x3ad84a.node_ops.setattr) {
          throw new null(0x3f);
        }
        _0x3ad84a.node_ops.setattr(_0x3ad84a, {
          "mode": _0x1393ba & 0xfff | _0x3ad84a.mode & -4096,
          "timestamp": Date.now()
        });
      },
      "lchmod": (_0x271e3c, _0x54a8d1) => {
        _0x3a9ca2.chmod(_0x271e3c, _0x54a8d1, true);
      },
      "fchmod": (_0x1880ea, _0x33f348) => {
        var _0x322f33 = _0x3a9ca2.streams[_0x1880ea];
        if (!_0x322f33) {
          throw new null(0x8);
        }
        _0x3a9ca2.chmod(_0x322f33.node, _0x33f348);
      },
      "chown": (_0x1297d8, _0x27ea7f, _0x5230c5, _0x450956) => {
        var _0x44b8c7;
        if (typeof _0x1297d8 == "string") {
          var _0x3f33b2 = _0x3a9ca2.lookupPath(_0x1297d8, {
            "follow": !_0x450956
          });
          _0x44b8c7 = _0x3f33b2.node;
        } else {
          _0x44b8c7 = _0x1297d8;
        }
        if (!_0x44b8c7.node_ops.setattr) {
          throw new null(0x3f);
        }
        _0x44b8c7.node_ops.setattr(_0x44b8c7, {
          "timestamp": Date.now()
        });
      },
      "lchown": (_0x2966f5, _0x18e6c9, _0x23dbc5) => {
        _0x3a9ca2.chown(_0x2966f5, _0x18e6c9, _0x23dbc5, true);
      },
      "fchown": (_0x32d3be, _0x5edfa9, _0x53f875) => {
        var _0x486293 = _0x3a9ca2.streams[_0x32d3be];
        if (!_0x486293) {
          throw new null(0x8);
        }
        _0x3a9ca2.chown(_0x486293.node, _0x5edfa9, _0x53f875);
      },
      "truncate": (_0x198b64, _0x2ee600) => {
        if (_0x2ee600 < 0x0) {
          throw new null(0x1c);
        }
        var _0x3c5681;
        if (typeof _0x198b64 == "string") {
          var _0x2fc484 = _0x3a9ca2.lookupPath(_0x198b64, {
            "follow": true
          });
          _0x3c5681 = _0x2fc484.node;
        } else {
          _0x3c5681 = _0x198b64;
        }
        if (!_0x3c5681.node_ops.setattr) {
          throw new null(0x3f);
        }
        if ((_0x3c5681.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!((_0x3c5681.mode & 0xf000) === 0x8000)) {
          throw new null(0x1c);
        }
        var _0x16ab8c = _0x3a9ca2.nodePermissions(_0x3c5681, "w");
        if (_0x16ab8c) {
          throw new null(_0x16ab8c);
        }
        _0x3c5681.node_ops.setattr(_0x3c5681, {
          "size": _0x2ee600,
          "timestamp": Date.now()
        });
      },
      "ftruncate": (_0x6b5b5c, _0x423301) => {
        var _0x23eb98 = _0x3a9ca2.streams[_0x6b5b5c];
        if (!_0x23eb98) {
          throw new null(0x8);
        }
        if ((_0x23eb98.flags & 0x200003) === 0x0) {
          throw new null(0x1c);
        }
        _0x3a9ca2.truncate(_0x23eb98.node, _0x423301);
      },
      "utime": (_0x536069, _0x1fab78, _0x592f74) => {
        var _0xa44e2e = _0x3a9ca2.lookupPath(_0x536069, {
          "follow": true
        });
        var _0x137be5 = _0xa44e2e.node;
        _0x137be5.node_ops.setattr(_0x137be5, {
          "timestamp": Math.max(_0x1fab78, _0x592f74)
        });
      },
      "open": (_0x5d0d15, _0x42421f, _0x20217d, _0x68be34, _0x3cae37) => {
        if (_0x5d0d15 === '') {
          throw new null(0x2c);
        }
        _0x42421f = typeof _0x42421f == "string" ? _0x3a9ca2.modeStringToFlags(_0x42421f) : _0x42421f;
        _0x20217d = typeof _0x20217d == "undefined" ? 0x1b6 : _0x20217d;
        if (_0x42421f & 0x40) {
          _0x20217d = _0x20217d & 0xfff | 0x8000;
        } else {
          _0x20217d = 0x0;
        }
        var _0x5c17f9;
        if (typeof _0x5d0d15 == "object") {
          _0x5c17f9 = _0x5d0d15;
        } else {
          _0x5d0d15 = _0xa67953.normalize(_0x5d0d15);
          try {
            var _0xb48cf5 = _0x3a9ca2.lookupPath(_0x5d0d15, {
              "follow": !(_0x42421f & 0x20000)
            });
            _0x5c17f9 = _0xb48cf5.node;
          } catch (_0xb30dcf) {}
        }
        var _0x3835f2 = false;
        if (_0x42421f & 0x40) {
          if (_0x5c17f9) {
            if (_0x42421f & 0x80) {
              throw new null(0x14);
            }
          } else {
            _0x5c17f9 = _0x3a9ca2.mknod(_0x5d0d15, _0x20217d, 0x0);
            _0x3835f2 = true;
          }
        }
        if (!_0x5c17f9) {
          throw new null(0x2c);
        }
        if ((_0x5c17f9.mode & 0xf000) === 0x2000) {
          _0x42421f &= -513;
        }
        if (_0x42421f & 0x10000 && !((_0x5c17f9.mode & 0xf000) === 0x4000)) {
          throw new null(0x36);
        }
        if (!_0x3835f2) {
          var _0x2f9d74 = _0x3a9ca2.mayOpen(_0x5c17f9, _0x42421f);
          if (_0x2f9d74) {
            throw new null(_0x2f9d74);
          }
        }
        if (_0x42421f & 0x200) {
          _0x3a9ca2.truncate(_0x5c17f9, 0x0);
        }
        _0x42421f &= -131713;
        var _0x3c6dbe = _0x3a9ca2.createStream({
          "node": _0x5c17f9,
          "path": _0x3a9ca2.getPath(_0x5c17f9),
          "flags": _0x42421f,
          "seekable": true,
          "position": 0x0,
          "stream_ops": _0x5c17f9.stream_ops,
          "ungotten": [],
          "error": false
        }, _0x68be34, _0x3cae37);
        if (_0x3c6dbe.stream_ops.open) {
          _0x3c6dbe.stream_ops.open(_0x3c6dbe);
        }
        if (_0x3d91d8.logReadFiles && !(_0x42421f & 0x1)) {
          if (!_0x3a9ca2.readFiles) {
            _0x3a9ca2.readFiles = {};
          }
          if (!(_0x5d0d15 in _0x3a9ca2.readFiles)) {
            _0x3a9ca2.readFiles[_0x5d0d15] = 0x1;
          }
        }
        return _0x3c6dbe;
      },
      "close": _0x296da6 => {
        if (_0x296da6.fd === null) {
          throw new null(0x8);
        }
        if (_0x296da6.getdents) {
          _0x296da6.getdents = null;
        }
        try {
          if (_0x296da6.stream_ops.close) {
            _0x296da6.stream_ops.close(_0x296da6);
          }
        } catch (_0x306769) {
          throw _0x306769;
        } finally {
          _0x3a9ca2.closeStream(_0x296da6.fd);
        }
        _0x296da6.fd = null;
      },
      "isClosed": _0x511232 => {
        return _0x511232.fd === null;
      },
      "llseek": (_0x1c79f7, _0x39cf68, _0x1450c0) => {
        if (_0x1c79f7.fd === null) {
          throw new null(0x8);
        }
        if (!_0x1c79f7.seekable || !_0x1c79f7.stream_ops.llseek) {
          throw new null(0x46);
        }
        if (_0x1450c0 != 0x0 && _0x1450c0 != 0x1 && _0x1450c0 != 0x2) {
          throw new null(0x1c);
        }
        _0x1c79f7.position = _0x1c79f7.stream_ops.llseek(_0x1c79f7, _0x39cf68, _0x1450c0);
        _0x1c79f7.ungotten = [];
        return _0x1c79f7.position;
      },
      "read": (_0x4d636b, _0x87fa16, _0x3de587, _0x16e7f2, _0x499091) => {
        if (_0x16e7f2 < 0x0 || _0x499091 < 0x0) {
          throw new null(0x1c);
        }
        if (_0x4d636b.fd === null) {
          throw new null(0x8);
        }
        if ((_0x4d636b.flags & 0x200003) === 0x1) {
          throw new null(0x8);
        }
        if ((_0x4d636b.node.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!_0x4d636b.stream_ops.read) {
          throw new null(0x1c);
        }
        var _0x4da106 = typeof _0x499091 != "undefined";
        if (!_0x4da106) {
          _0x499091 = _0x4d636b.position;
        } else {
          if (!_0x4d636b.seekable) {
            throw new null(0x46);
          }
        }
        var _0x38c099 = _0x4d636b.stream_ops.read(_0x4d636b, _0x87fa16, _0x3de587, _0x16e7f2, _0x499091);
        if (!_0x4da106) {
          _0x4d636b.position += _0x38c099;
        }
        return _0x38c099;
      },
      "write": (_0x2fb9eb, _0x17121c, _0x4e7e3a, _0x524b07, _0x5475d0, _0x292036) => {
        if (_0x524b07 < 0x0 || _0x5475d0 < 0x0) {
          throw new null(0x1c);
        }
        if (_0x2fb9eb.fd === null) {
          throw new null(0x8);
        }
        if ((_0x2fb9eb.flags & 0x200003) === 0x0) {
          throw new null(0x8);
        }
        if ((_0x2fb9eb.node.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!_0x2fb9eb.stream_ops.write) {
          throw new null(0x1c);
        }
        if (_0x2fb9eb.seekable && _0x2fb9eb.flags & 0x400) {
          _0x3a9ca2.llseek(_0x2fb9eb, 0x0, 0x2);
        }
        var _0x1f4385 = typeof _0x5475d0 != "undefined";
        if (!_0x1f4385) {
          _0x5475d0 = _0x2fb9eb.position;
        } else {
          if (!_0x2fb9eb.seekable) {
            throw new null(0x46);
          }
        }
        var _0x1f7d2f = _0x2fb9eb.stream_ops.write(_0x2fb9eb, _0x17121c, _0x4e7e3a, _0x524b07, _0x5475d0, _0x292036);
        if (!_0x1f4385) {
          _0x2fb9eb.position += _0x1f7d2f;
        }
        return _0x1f7d2f;
      },
      "allocate": (_0x37aa67, _0x4c41a1, _0x2a1f76) => {
        if (_0x37aa67.fd === null) {
          throw new null(0x8);
        }
        if (_0x4c41a1 < 0x0 || _0x2a1f76 <= 0x0) {
          throw new null(0x1c);
        }
        if ((_0x37aa67.flags & 0x200003) === 0x0) {
          throw new null(0x8);
        }
        if (!((_0x37aa67.node.mode & 0xf000) === 0x8000) && !((_0x37aa67.node.mode & 0xf000) === 0x4000)) {
          throw new null(0x2b);
        }
        if (!_0x37aa67.stream_ops.allocate) {
          throw new null(0x8a);
        }
        _0x37aa67.stream_ops.allocate(_0x37aa67, _0x4c41a1, _0x2a1f76);
      },
      "mmap": (_0x55eda7, _0x183e01, _0x5d199d, _0x3bf0ed, _0x4480e6, _0x5a003a) => {
        if ((_0x4480e6 & 0x2) !== 0x0 && (_0x5a003a & 0x2) === 0x0 && (_0x55eda7.flags & 0x200003) !== 0x2) {
          throw new null(0x2);
        }
        if ((_0x55eda7.flags & 0x200003) === 0x1) {
          throw new null(0x2);
        }
        if (!_0x55eda7.stream_ops.mmap) {
          throw new null(0x2b);
        }
        return _0x55eda7.stream_ops.mmap(_0x55eda7, _0x183e01, _0x5d199d, _0x3bf0ed, _0x4480e6, _0x5a003a);
      },
      "msync": (_0x434f66, _0xff0369, _0x413539, _0x2b0ff0, _0x443f61) => {
        if (!_0x434f66 || !_0x434f66.stream_ops.msync) {
          return 0x0;
        }
        return _0x434f66.stream_ops.msync(_0x434f66, _0xff0369, _0x413539, _0x2b0ff0, _0x443f61);
      },
      "munmap": _0x142aa8 => 0x0,
      "ioctl": (_0x1c6ae8, _0x47ccc5, _0x2a4385) => {
        if (!_0x1c6ae8.stream_ops.ioctl) {
          throw new null(0x3b);
        }
        return _0x1c6ae8.stream_ops.ioctl(_0x1c6ae8, _0x47ccc5, _0x2a4385);
      },
      "readFile": (_0xab91c3, _0x2261af = {}) => {
        _0x2261af.flags = _0x2261af.flags || 0x0;
        _0x2261af.encoding = _0x2261af.encoding || "binary";
        if (_0x2261af.encoding !== "utf8" && _0x2261af.encoding !== "binary") {
          throw new Error("Invalid encoding type \"" + _0x2261af.encoding + "\"");
        }
        var _0x10196a;
        var _0x599332 = _0x3a9ca2.open(_0xab91c3, _0x2261af.flags);
        var _0x210da5 = _0x3a9ca2.stat(_0xab91c3);
        var _0x304cd3 = _0x210da5.size;
        var _0x3c45ac = new Uint8Array(_0x304cd3);
        _0x3a9ca2.read(_0x599332, _0x3c45ac, 0x0, _0x304cd3, 0x0);
        if (_0x2261af.encoding === "utf8") {
          _0x10196a = _0x4ee57d(_0x3c45ac, 0x0);
        } else if (_0x2261af.encoding === "binary") {
          _0x10196a = _0x3c45ac;
        }
        _0x3a9ca2.close(_0x599332);
        return _0x10196a;
      },
      "writeFile": (_0x3d9634, _0x456192, _0x5d46e0 = {}) => {
        _0x5d46e0.flags = _0x5d46e0.flags || 0x241;
        var _0x520705 = _0x3a9ca2.open(_0x3d9634, _0x5d46e0.flags, _0x5d46e0.mode);
        if (typeof _0x456192 == "string") {
          var _0x4e8d0d = new Uint8Array(_0x26e3e9(_0x456192) + 0x1);
          var _0x5d5a1f = _0x5b3420(_0x456192, _0x4e8d0d, 0x0, _0x4e8d0d.length);
          _0x3a9ca2.write(_0x520705, _0x4e8d0d, 0x0, _0x5d5a1f, undefined, _0x5d46e0.canOwn);
        } else {
          if (ArrayBuffer.isView(_0x456192)) {
            _0x3a9ca2.write(_0x520705, _0x456192, 0x0, _0x456192.byteLength, undefined, _0x5d46e0.canOwn);
          } else {
            throw new Error("Unsupported data type");
          }
        }
        _0x3a9ca2.close(_0x520705);
      },
      "cwd": () => "/",
      "chdir": _0x401af9 => {
        var _0x4fa77c = _0x3a9ca2.lookupPath(_0x401af9, {
          "follow": true
        });
        if (_0x4fa77c.node === null) {
          throw new null(0x2c);
        }
        if (!((_0x4fa77c.node.mode & 0xf000) === 0x4000)) {
          throw new null(0x36);
        }
        var _0x2a2d43 = _0x3a9ca2.nodePermissions(_0x4fa77c.node, "x");
        if (_0x2a2d43) {
          throw new null(_0x2a2d43);
        }
        _0x3a9ca2.currentPath = _0x4fa77c.path;
      },
      "createDefaultDirectories": () => {
        _0x3a9ca2.mkdir("/tmp");
        _0x3a9ca2.mkdir("/home");
        _0x3a9ca2.mkdir("/home/web_user");
      },
      "createDefaultDevices": () => {
        _0x3a9ca2.mkdir("/dev");
        _0x3a9ca2.registerDevice(259, {
          "read": () => 0x0,
          "write": (_0x2d19c7, _0x490af7, _0x196b48, _0x51657c, _0x4c2cdd) => _0x51657c
        });
        _0x3a9ca2.mkdev("/dev/null", 259);
        _0x4ebf0a.register(1280, _0x4ebf0a.default_tty_ops);
        _0x4ebf0a.register(1536, _0x4ebf0a.default_tty1_ops);
        _0x3a9ca2.mkdev("/dev/tty", 1280);
        _0x3a9ca2.mkdev("/dev/tty1", 1536);
        var _0x3bda66 = _0x3c7d3d();
        _0x3a9ca2.createDevice("/dev", "random", _0x3bda66);
        _0x3a9ca2.createDevice("/dev", "urandom", _0x3bda66);
        _0x3a9ca2.mkdir("/dev/shm");
        _0x3a9ca2.mkdir("/dev/shm/tmp");
      },
      "createSpecialDirectories": () => {
        _0x3a9ca2.mkdir("/proc");
        var _0x27bd44 = _0x3a9ca2.mkdir("/proc/self");
        _0x3a9ca2.mkdir("/proc/self/fd");
        _0x3a9ca2.mount({
          "mount": () => {
            var _0x275ad6 = _0x3a9ca2.createNode(_0x27bd44, "fd", 16895, 0x49);
            _0x275ad6.node_ops = {
              "lookup": (_0x454731, _0x263aa8) => {
                var _0x394a2e = +_0x263aa8;
                var _0x15a40a = _0x3a9ca2.streams[_0x394a2e];
                if (!_0x15a40a) {
                  throw new null(0x8);
                }
                var _0x467f13 = {
                  "parent": null,
                  "mount": {
                    "mountpoint": "fake"
                  },
                  "node_ops": {
                    "readlink": () => _0x15a40a.path
                  }
                };
                _0x467f13.parent = _0x467f13;
                return _0x467f13;
              }
            };
            return _0x275ad6;
          }
        }, {}, "/proc/self/fd");
      },
      "createStandardStreams": () => {
        if (_0x3d91d8.stdin) {
          _0x3a9ca2.createDevice("/dev", "stdin", _0x3d91d8.stdin);
        } else {
          _0x3a9ca2.symlink("/dev/tty", "/dev/stdin");
        }
        if (_0x3d91d8.stdout) {
          _0x3a9ca2.createDevice("/dev", "stdout", null, _0x3d91d8.stdout);
        } else {
          _0x3a9ca2.symlink("/dev/tty", "/dev/stdout");
        }
        if (_0x3d91d8.stderr) {
          _0x3a9ca2.createDevice("/dev", "stderr", null, _0x3d91d8.stderr);
        } else {
          _0x3a9ca2.symlink("/dev/tty1", "/dev/stderr");
        }
      },
      "ensureErrnoError": () => {
        return;
        _0x3a9ca2.ErrnoError = function _0x5f5c9d(_0x1892c6, _0x434f26) {
          this.node = _0x434f26;
          this.setErrno = function (_0x26e2e3) {
            this.errno = _0x26e2e3;
          };
          this.setErrno(_0x1892c6);
          this.message = "FS error";
        };
        null.prototype = new Error();
        null.prototype.constructor = null;
        [0x2c].forEach(_0x4b68d5 => {
          _0x3a9ca2.genericErrors[_0x4b68d5] = new null(_0x4b68d5);
          _0x3a9ca2.genericErrors[_0x4b68d5].stack = "<generic error, no stack>";
        });
      },
      "staticInit": () => {
        _0x3a9ca2.ensureErrnoError();
        _0x3a9ca2.nameTable = new Array(0x1000);
        _0x3a9ca2.mount(_0x46f590, {}, "/");
        _0x3a9ca2.createDefaultDirectories();
        _0x3a9ca2.createDefaultDevices();
        _0x3a9ca2.createSpecialDirectories();
        _0x3a9ca2.filesystems = {
          "MEMFS": _0x46f590,
          "IDBFS": _0x471f3e
        };
      },
      "init": (_0x3d082a, _0x1d7ca6, _0x2f52b2) => {
        _0x3a9ca2.init.initialized = true;
        _0x3a9ca2.ensureErrnoError();
        _0x3d91d8.stdin = _0x3d082a || _0x3d91d8.stdin;
        _0x3d91d8.stdout = _0x1d7ca6 || _0x3d91d8.stdout;
        _0x3d91d8.stderr = _0x2f52b2 || _0x3d91d8.stderr;
        _0x3a9ca2.createStandardStreams();
      },
      "quit": () => {
        _0x3a9ca2.init.initialized = false;
        for (var _0x524c18 = 0x0; _0x524c18 < _0x3a9ca2.streams.length; _0x524c18++) {
          var _0x2506ac = _0x3a9ca2.streams[_0x524c18];
          if (!_0x2506ac) {
            continue;
          }
          _0x3a9ca2.close(_0x2506ac);
        }
      },
      "getMode": (_0x2f78cd, _0x175a48) => {
        var _0x5075d4 = 0x0;
        if (_0x2f78cd) {
          _0x5075d4 |= 365;
        }
        if (_0x175a48) {
          _0x5075d4 |= 0x92;
        }
        return _0x5075d4;
      },
      "findObject": (_0x169670, _0x338b2c) => {
        var _0x1730d7 = _0x3a9ca2.analyzePath(_0x169670, _0x338b2c);
        return _0x1730d7.exists ? _0x1730d7.object : null;
      },
      "analyzePath": (_0x48039f, _0xa9f537) => {
        try {
          var _0x45b134 = _0x3a9ca2.lookupPath(_0x48039f, {
            "follow": !_0xa9f537
          });
          _0x48039f = _0x45b134.path;
        } catch (_0x4d80db) {}
        var _0x4ed1a0 = {
          "isRoot": false,
          "exists": false,
          "error": 0x0,
          "name": null,
          "path": null,
          "object": null,
          "parentExists": false,
          "parentPath": null,
          "parentObject": null
        };
        try {
          var _0x45b134 = _0x3a9ca2.lookupPath(_0x48039f, {
            "parent": true
          });
          _0x4ed1a0.parentExists = true;
          _0x4ed1a0.parentPath = _0x45b134.path;
          _0x4ed1a0.parentObject = _0x45b134.node;
          _0x4ed1a0.name = _0xa67953.basename(_0x48039f);
          _0x45b134 = _0x3a9ca2.lookupPath(_0x48039f, {
            "follow": !_0xa9f537
          });
          _0x4ed1a0.exists = true;
          _0x4ed1a0.path = _0x45b134.path;
          _0x4ed1a0.object = _0x45b134.node;
          _0x4ed1a0.name = _0x45b134.node.name;
          _0x4ed1a0.isRoot = _0x45b134.path === "/";
        } catch (_0x1555a1) {
          _0x4ed1a0.error = _0x1555a1.errno;
        }
        return _0x4ed1a0;
      },
      "createPath": (_0x563355, _0x1dd890, _0x40df28, _0x3c3a33) => {
        _0x563355 = typeof _0x563355 == "string" ? _0x563355 : _0x3a9ca2.getPath(_0x563355);
        var _0x5ed2f0 = _0x1dd890.split("/").reverse();
        while (_0x5ed2f0.length) {
          var _0x4bf9c8 = _0x5ed2f0.pop();
          if (!_0x4bf9c8) {
            continue;
          }
          var _0xf8ea45 = _0xa67953.normalize(_0x563355 + "/" + _0x4bf9c8);
          try {
            _0x3a9ca2.mkdir(_0xf8ea45);
          } catch (_0x971e33) {}
          _0x563355 = _0xf8ea45;
        }
        return _0xf8ea45;
      },
      "createFile": (_0x518d8e, _0x57fec2, _0x493bc9, _0x5a5354, _0x5b50d0) => {
        var _0x572d23 = _0xa67953.normalize((typeof _0x518d8e == "string" ? _0x518d8e : _0x3a9ca2.getPath(_0x518d8e)) + "/" + _0x57fec2);
        var _0x5cfd64 = _0x3a9ca2.getMode(_0x5a5354, _0x5b50d0);
        return _0x3a9ca2.create(_0x572d23, _0x5cfd64);
      },
      "createDataFile": (_0x37e1d9, _0x440314, _0x5b40f3, _0x46b4ec, _0x2ef9ba, _0x17b554) => {
        var _0x30e8fd = _0x440314;
        if (_0x37e1d9) {
          _0x37e1d9 = typeof _0x37e1d9 == "string" ? _0x37e1d9 : _0x3a9ca2.getPath(_0x37e1d9);
          _0x30e8fd = _0x440314 ? _0xa67953.normalize(_0x37e1d9 + "/" + _0x440314) : _0x37e1d9;
        }
        var _0x144fb6 = _0x3a9ca2.getMode(_0x46b4ec, _0x2ef9ba);
        var _0x1e5df5 = _0x3a9ca2.create(_0x30e8fd, _0x144fb6);
        if (_0x5b40f3) {
          if (typeof _0x5b40f3 == "string") {
            var _0x54854f = new Array(_0x5b40f3.length);
            var _0x25854a = 0x0;
            for (var _0xcb698b = _0x5b40f3.length; _0x25854a < _0xcb698b; ++_0x25854a) {
              _0x54854f[_0x25854a] = _0x5b40f3.charCodeAt(_0x25854a);
            }
            _0x5b40f3 = _0x54854f;
          }
          _0x3a9ca2.chmod(_0x1e5df5, _0x144fb6 | 0x92);
          var _0x4bc15b = _0x3a9ca2.open(_0x1e5df5, 0x241);
          _0x3a9ca2.write(_0x4bc15b, _0x5b40f3, 0x0, _0x5b40f3.length, 0x0, _0x17b554);
          _0x3a9ca2.close(_0x4bc15b);
          _0x3a9ca2.chmod(_0x1e5df5, _0x144fb6);
        }
        return _0x1e5df5;
      },
      "createDevice": (_0x465272, _0x5cf19e, _0x2165c3, _0x5c47c7) => {
        var _0x560f1a = _0xa67953.normalize((typeof _0x465272 == "string" ? _0x465272 : _0x3a9ca2.getPath(_0x465272)) + "/" + _0x5cf19e);
        var _0x4cfcc5 = _0x3a9ca2.getMode(!!_0x2165c3, !!_0x5c47c7);
        if (!_0x3a9ca2.createDevice.major) {
          _0x3a9ca2.createDevice.major = 0x40;
        }
        var _0x24dbbc = _0x3a9ca2.createDevice.major++ << 0x8 | 0x0;
        _0x3a9ca2.registerDevice(_0x24dbbc, {
          "open": _0x496805 => {
            _0x496805.seekable = false;
          },
          "close": _0x187cb2 => {
            if (_0x5c47c7 && _0x5c47c7.buffer && _0x5c47c7.buffer.length) {
              _0x5c47c7(0xa);
            }
          },
          "read": (_0x4bbff5, _0x25bd40, _0x4d5543, _0x1ee177, _0x51c3f5) => {
            var _0x51b7d5 = 0x0;
            for (var _0x2ceaeb = 0x0; _0x2ceaeb < _0x1ee177; _0x2ceaeb++) {
              var _0x3ceb21;
              try {
                _0x3ceb21 = _0x2165c3();
              } catch (_0x182d70) {
                throw new null(0x1d);
              }
              if (_0x3ceb21 === undefined && _0x51b7d5 === 0x0) {
                throw new null(0x6);
              }
              if (_0x3ceb21 === null || _0x3ceb21 === undefined) {
                break;
              }
              _0x51b7d5++;
              _0x25bd40[_0x4d5543 + _0x2ceaeb] = _0x3ceb21;
            }
            if (_0x51b7d5) {
              _0x4bbff5.node.timestamp = Date.now();
            }
            return _0x51b7d5;
          },
          "write": (_0x593256, _0xf8adaf, _0x2a706a, _0x1c6af0, _0x21526e) => {
            for (var _0x1617a2 = 0x0; _0x1617a2 < _0x1c6af0; _0x1617a2++) {
              try {
                _0x5c47c7(_0xf8adaf[_0x2a706a + _0x1617a2]);
              } catch (_0x5aa313) {
                throw new null(0x1d);
              }
            }
            if (_0x1c6af0) {
              _0x593256.node.timestamp = Date.now();
            }
            return _0x1617a2;
          }
        });
        return _0x3a9ca2.mkdev(_0x560f1a, _0x4cfcc5, _0x24dbbc);
      },
      "forceLoadFile": _0x46e2bb => {
        if (_0x46e2bb.isDevice || _0x46e2bb.isFolder || _0x46e2bb.link || _0x46e2bb.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else {
          if (_0x4e10eb) {
            try {
              _0x46e2bb.contents = _0x5ec4f3(_0x4e10eb(_0x46e2bb.url), true);
              _0x46e2bb.usedBytes = _0x46e2bb.contents.length;
            } catch (_0x5b4c6f) {
              throw new null(0x1d);
            }
          } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.");
          }
        }
      },
      "createLazyFile": (_0x11da1e, _0x1ab016, _0x387866, _0x222475, _0x1081ba) => {
        function _0x5578e1() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        _0x5578e1.prototype.get = function _0x5f3157(_0xf63889) {
          if (_0xf63889 > this.length - 0x1 || _0xf63889 < 0x0) {
            return undefined;
          }
          var _0x486a60 = _0xf63889 % this.chunkSize;
          var _0x1b4c52 = _0xf63889 / this.chunkSize | 0x0;
          return this.getter(_0x1b4c52)[_0x486a60];
        };
        _0x5578e1.prototype.setDataGetter = function _0x4915f1(_0x388925) {
          this.getter = _0x388925;
        };
        _0x5578e1.prototype.cacheLength = function _0x136552() {
          var _0x5dc4be = new XMLHttpRequest();
          _0x5dc4be.open("HEAD", _0x387866, false);
          _0x5dc4be.send(null);
          if (!(_0x5dc4be.status >= 0xc8 && _0x5dc4be.status < 0x12c || _0x5dc4be.status === 0x130)) {
            throw new Error("Couldn't load " + _0x387866 + ". Status: " + _0x5dc4be.status);
          }
          var _0x26256d = Number(_0x5dc4be.getResponseHeader("Content-length"));
          var _0x40c272;
          var _0x2fee9f = (_0x40c272 = _0x5dc4be.getResponseHeader("Accept-Ranges")) && _0x40c272 === "bytes";
          var _0x1dc6c7 = (_0x40c272 = _0x5dc4be.getResponseHeader("Content-Encoding")) && _0x40c272 === "gzip";
          var _0x3ede81 = 1048576;
          if (!_0x2fee9f) {
            _0x3ede81 = _0x26256d;
          }
          var _0x39f8f8 = (_0x68d807, _0x9fe8a3) => {
            if (_0x68d807 > _0x9fe8a3) {
              throw new Error("invalid range (" + _0x68d807 + ", " + _0x9fe8a3 + ") or no bytes requested!");
            }
            if (_0x9fe8a3 > _0x26256d - 0x1) {
              throw new Error("only " + _0x26256d + " bytes available! programmer error!");
            }
            var _0x220daf = new XMLHttpRequest();
            _0x220daf.open("GET", _0x387866, false);
            if (_0x26256d !== _0x3ede81) {
              _0x220daf.setRequestHeader("Range", "bytes=" + _0x68d807 + "-" + _0x9fe8a3);
            }
            _0x220daf.responseType = "arraybuffer";
            if (_0x220daf.overrideMimeType) {
              _0x220daf.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x220daf.send(null);
            if (!(_0x220daf.status >= 0xc8 && _0x220daf.status < 0x12c || _0x220daf.status === 0x130)) {
              throw new Error("Couldn't load " + _0x387866 + ". Status: " + _0x220daf.status);
            }
            return _0x220daf.response !== undefined ? new Uint8Array(_0x220daf.response || []) : _0x5ec4f3(_0x220daf.responseText || '', true);
          };
          var _0x1e8165 = this;
          _0x1e8165.setDataGetter(_0x34a268 => {
            var _0x371a2f = _0x34a268 * _0x3ede81;
            var _0x2e87df = (_0x34a268 + 0x1) * _0x3ede81 - 0x1;
            _0x2e87df = Math.min(_0x2e87df, _0x26256d - 0x1);
            if (typeof _0x1e8165.chunks[_0x34a268] == "undefined") {
              _0x1e8165.chunks[_0x34a268] = _0x39f8f8(_0x371a2f, _0x2e87df);
            }
            if (typeof _0x1e8165.chunks[_0x34a268] == "undefined") {
              throw new Error("doXHR failed!");
            }
            return _0x1e8165.chunks[_0x34a268];
          });
          if (_0x1dc6c7 || !_0x26256d) {
            _0x3ede81 = _0x26256d = 0x1;
            _0x26256d = this.getter(0x0).length;
            _0x3ede81 = _0x26256d;
            _0x369287("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = _0x26256d;
          this._chunkSize = _0x3ede81;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != "undefined") {
          if (!_0x3a4271) {
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          }
          var _0x3f1aa8 = new _0x5578e1();
          Object.defineProperties(_0x3f1aa8, {
            "length": {
              "get": function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            "chunkSize": {
              "get": function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var _0x14d722 = {
            "isDevice": false,
            "contents": _0x3f1aa8
          };
        } else {
          var _0x14d722 = {
            "isDevice": false,
            "url": _0x387866
          };
        }
        var _0x4121d2 = _0x3a9ca2.createFile(_0x11da1e, _0x1ab016, _0x14d722, _0x222475, _0x1081ba);
        if (_0x14d722.contents) {
          _0x4121d2.contents = _0x14d722.contents;
        } else if (_0x14d722.url) {
          _0x4121d2.contents = null;
          _0x4121d2.url = _0x14d722.url;
        }
        Object.defineProperties(_0x4121d2, {
          "usedBytes": {
            "get": function () {
              return this.contents.length;
            }
          }
        });
        var _0x5502b2 = {};
        var _0x24027b = Object.keys(_0x4121d2.stream_ops);
        _0x24027b.forEach(_0x532b76 => {
          var _0xee77a1 = _0x4121d2.stream_ops[_0x532b76];
          _0x5502b2[_0x532b76] = function _0x47236f() {
            _0x3a9ca2.forceLoadFile(_0x4121d2);
            return _0xee77a1.apply(null, arguments);
          };
        });
        _0x5502b2.read = (_0x2835c2, _0x520687, _0x505799, _0x3750cb, _0x42ee39) => {
          _0x3a9ca2.forceLoadFile(_0x4121d2);
          var _0x1fcdca = _0x2835c2.node.contents;
          if (_0x42ee39 >= _0x1fcdca.length) {
            return 0x0;
          }
          var _0x54f1b2 = Math.min(_0x1fcdca.length - _0x42ee39, _0x3750cb);
          if (_0x1fcdca.slice) {
            for (var _0x12a0b2 = 0x0; _0x12a0b2 < _0x54f1b2; _0x12a0b2++) {
              _0x520687[_0x505799 + _0x12a0b2] = _0x1fcdca[_0x42ee39 + _0x12a0b2];
            }
          } else {
            for (var _0x12a0b2 = 0x0; _0x12a0b2 < _0x54f1b2; _0x12a0b2++) {
              _0x520687[_0x505799 + _0x12a0b2] = _0x1fcdca.get(_0x42ee39 + _0x12a0b2);
            }
          }
          return _0x54f1b2;
        };
        _0x4121d2.stream_ops = _0x5502b2;
        return _0x4121d2;
      },
      "createPreloadedFile": (_0x570b94, _0x1e8465, _0x3a6703, _0x37f81f, _0x58e375, _0x5085be, _0x985689, _0x32878d, _0x530f6f, _0x41ad25) => {
        var _0x50471a = _0x1e8465 ? _0x3ef774.resolve(_0xa67953.normalize(_0x570b94 + "/" + _0x1e8465)) : _0x570b94;
        function _0x8ea92e(_0x4f9c21) {
          function _0x84a299(_0x13c656) {
            if (_0x41ad25) {
              _0x41ad25();
            }
            if (!_0x32878d) {
              _0x3a9ca2.createDataFile(_0x570b94, _0x1e8465, _0x13c656, _0x37f81f, _0x58e375, _0x530f6f);
            }
            if (_0x5085be) {
              _0x5085be();
            }
            _0x4c4bd8(_0x426fc3);
          }
          if (_0x5409e2.handledByPreloadPlugin(_0x4f9c21, _0x50471a, _0x84a299, () => {
            if (_0x985689) {
              _0x985689();
            }
            _0x4c4bd8(_0x426fc3);
          })) {
            return;
          }
          _0x84a299(_0x4f9c21);
        }
        _0x1037eb(_0x426fc3);
        if (typeof _0x3a6703 == "string") {
          _0xde97f5(_0x3a6703, _0x58858d => _0x8ea92e(_0x58858d), _0x985689);
        } else {
          _0x8ea92e(_0x3a6703);
        }
      },
      "indexedDB": () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      "DB_NAME": () => {
        return "EM_FS_" + window.location.pathname;
      },
      "DB_VERSION": 0x14,
      "DB_STORE_NAME": "FILE_DATA",
      "saveFilesToDB": (_0x297554, _0x56f6ca, _0x22c10f) => {
        _0x56f6ca = _0x56f6ca || (() => {});
        _0x22c10f = _0x22c10f || (() => {});
        var _0x4fe3fa = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        try {
          var _0x2e9207 = _0x4fe3fa.open("EM_FS_" + window.location.pathname, 0x14);
        } catch (_0x41197c) {
          return _0x22c10f(_0x41197c);
        }
        _0x2e9207.onupgradeneeded = () => {
          _0x369287("creating db");
          var _0x32271d = _0x2e9207.result;
          _0x32271d.createObjectStore("FILE_DATA");
        };
        _0x2e9207.onsuccess = () => {
          var _0x3346cf = _0x2e9207.result;
          var _0x1a908b = _0x3346cf.transaction(["FILE_DATA"], "readwrite");
          var _0xdf54f0 = _0x1a908b.objectStore("FILE_DATA");
          var _0x55a4f8 = 0x0;
          var _0x477bc8 = 0x0;
          var _0xf8bd25 = _0x297554.length;
          function _0x4a123d() {
            if (_0x477bc8 == 0x0) {
              _0x56f6ca();
            } else {
              _0x22c10f();
            }
          }
          _0x297554.forEach(_0x2aa135 => {
            var _0x18e4f6 = _0xdf54f0.put(_0x3a9ca2.analyzePath(_0x2aa135).object.contents, _0x2aa135);
            _0x18e4f6.onsuccess = () => {
              _0x55a4f8++;
              if (_0x55a4f8 + _0x477bc8 == _0xf8bd25) {
                _0x4a123d();
              }
            };
            _0x18e4f6.onerror = () => {
              _0x477bc8++;
              if (_0x55a4f8 + _0x477bc8 == _0xf8bd25) {
                _0x4a123d();
              }
            };
          });
          _0x1a908b.onerror = _0x22c10f;
        };
        _0x2e9207.onerror = _0x22c10f;
      },
      "loadFilesFromDB": (_0x2a9ee4, _0x5020fe, _0x44b2cf) => {
        _0x5020fe = _0x5020fe || (() => {});
        _0x44b2cf = _0x44b2cf || (() => {});
        var _0x2f1094 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        try {
          var _0x40370e = _0x2f1094.open("EM_FS_" + window.location.pathname, 0x14);
        } catch (_0x44392b) {
          return _0x44b2cf(_0x44392b);
        }
        _0x40370e.onupgradeneeded = _0x44b2cf;
        _0x40370e.onsuccess = () => {
          var _0x570fae = _0x40370e.result;
          try {
            var _0x35ba3c = _0x570fae.transaction(["FILE_DATA"], "readonly");
          } catch (_0x43fceb) {
            _0x44b2cf(_0x43fceb);
            return;
          }
          var _0x47c74c = _0x35ba3c.objectStore("FILE_DATA");
          var _0x1e1bae = 0x0;
          var _0x3bf55f = 0x0;
          var _0x16d6a1 = _0x2a9ee4.length;
          function _0xedc877() {
            if (_0x3bf55f == 0x0) {
              _0x5020fe();
            } else {
              _0x44b2cf();
            }
          }
          _0x2a9ee4.forEach(_0x2eef26 => {
            var _0x429a5f = _0x47c74c.get(_0x2eef26);
            _0x429a5f.onsuccess = () => {
              if (_0x3a9ca2.analyzePath(_0x2eef26).exists) {
                _0x3a9ca2.unlink(_0x2eef26);
              }
              _0x3a9ca2.createDataFile(_0xa67953.dirname(_0x2eef26), _0xa67953.basename(_0x2eef26), _0x429a5f.result, true, true, true);
              _0x1e1bae++;
              if (_0x1e1bae + _0x3bf55f == _0x16d6a1) {
                _0xedc877();
              }
            };
            _0x429a5f.onerror = () => {
              _0x3bf55f++;
              if (_0x1e1bae + _0x3bf55f == _0x16d6a1) {
                _0xedc877();
              }
            };
          });
          _0x35ba3c.onerror = _0x44b2cf;
        };
        _0x40370e.onerror = _0x44b2cf;
      }
    };
    var _0x64ffda = {
      "DEFAULT_POLLMASK": 0x5,
      "calculateAt": function (_0x423100, _0x3d368b, _0x48f12f) {
        if (_0x3d368b[0x0] === "/") {
          return _0x3d368b;
        }
        var _0x490320;
        if (_0x423100 === -0x64) {
          _0x490320 = "/";
        } else {
          var _0x52d83a = _0x3a9ca2.streams[_0x423100];
          if (!_0x52d83a) {
            throw new null(0x8);
          }
          _0x490320 = _0x52d83a.path;
        }
        if (_0x3d368b.length == 0x0) {
          if (!_0x48f12f) {
            throw new null(0x2c);
          }
          return _0x490320;
        }
        return _0xa67953.normalize(_0x490320 + "/" + _0x3d368b);
      },
      "doStat": function (_0x7719bb, _0x1f9f9d, _0x3a75a9) {
        try {
          var _0x2a0feb = _0x7719bb(_0x1f9f9d);
        } catch (_0x537d03) {
          if (_0x537d03 && _0x537d03.node && _0xa67953.normalize(_0x1f9f9d) !== _0xa67953.normalize(_0x3a9ca2.getPath(_0x537d03.node))) {
            return -0x36;
          }
          throw _0x537d03;
        }
        _0xb9f33b[_0x3a75a9 >> 0x2] = _0x2a0feb.dev;
        _0xb9f33b[_0x3a75a9 + 0x4 >> 0x2] = 0x0;
        _0xb9f33b[_0x3a75a9 + 0x8 >> 0x2] = _0x2a0feb.ino;
        _0xb9f33b[_0x3a75a9 + 0xc >> 0x2] = _0x2a0feb.mode;
        _0xb9f33b[_0x3a75a9 + 0x10 >> 0x2] = _0x2a0feb.nlink;
        _0xb9f33b[_0x3a75a9 + 0x14 >> 0x2] = _0x2a0feb.uid;
        _0xb9f33b[_0x3a75a9 + 0x18 >> 0x2] = _0x2a0feb.gid;
        _0xb9f33b[_0x3a75a9 + 0x1c >> 0x2] = _0x2a0feb.rdev;
        _0xb9f33b[_0x3a75a9 + 0x20 >> 0x2] = 0x0;
        _0x4c6a90 = _0x2a0feb.size;
        _0x47083b = [_0x2a0feb.size >>> 0x0, +Math.abs(_0x4c6a90) >= 0x1 ? _0x4c6a90 > 0x0 ? (Math.min(+Math.floor(_0x4c6a90 / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x4c6a90 - +(~~_0x4c6a90 >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
        _0xb9f33b[_0x3a75a9 + 0x28 >> 0x2] = _0x47083b[0x0];
        _0xb9f33b[_0x3a75a9 + 0x2c >> 0x2] = _0x47083b[0x1];
        _0xb9f33b[_0x3a75a9 + 0x30 >> 0x2] = 0x1000;
        _0xb9f33b[_0x3a75a9 + 0x34 >> 0x2] = _0x2a0feb.blocks;
        _0xb9f33b[_0x3a75a9 + 0x38 >> 0x2] = _0x2a0feb.atime.getTime() / 0x3e8 | 0x0;
        _0xb9f33b[_0x3a75a9 + 0x3c >> 0x2] = 0x0;
        _0xb9f33b[_0x3a75a9 + 0x40 >> 0x2] = _0x2a0feb.mtime.getTime() / 0x3e8 | 0x0;
        _0xb9f33b[_0x3a75a9 + 0x44 >> 0x2] = 0x0;
        _0xb9f33b[_0x3a75a9 + 0x48 >> 0x2] = _0x2a0feb.ctime.getTime() / 0x3e8 | 0x0;
        _0xb9f33b[_0x3a75a9 + 0x4c >> 0x2] = 0x0;
        _0x4c6a90 = _0x2a0feb.ino;
        _0x47083b = [_0x2a0feb.ino >>> 0x0, +Math.abs(_0x4c6a90) >= 0x1 ? _0x4c6a90 > 0x0 ? (Math.min(+Math.floor(_0x4c6a90 / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x4c6a90 - +(~~_0x4c6a90 >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
        _0xb9f33b[_0x3a75a9 + 0x50 >> 0x2] = _0x47083b[0x0];
        _0xb9f33b[_0x3a75a9 + 0x54 >> 0x2] = _0x47083b[0x1];
        return 0x0;
      },
      "doMsync": function (_0x4c7a45, _0x45c0dd, _0x5c323c, _0x2ed816, _0x1d3ad3) {
        var _0xc62871 = _0x26daaf.slice(_0x4c7a45, _0x4c7a45 + _0x5c323c);
        _0x3a9ca2.msync(_0x45c0dd, _0xc62871, _0x1d3ad3, _0x5c323c, _0x2ed816);
      },
      "doMkdir": function (_0x30a1f4, _0x466f1b) {
        _0x30a1f4 = _0xa67953.normalize(_0x30a1f4);
        if (_0x30a1f4[_0x30a1f4.length - 0x1] === "/") {
          _0x30a1f4 = _0x30a1f4.substr(0x0, _0x30a1f4.length - 0x1);
        }
        _0x3a9ca2.mkdir(_0x30a1f4, _0x466f1b, 0x0);
        return 0x0;
      },
      "doMknod": function (_0x690578, _0xc46032, _0x2ba96c) {
        switch (_0xc46032 & 0xf000) {
          case 0x8000:
          case 0x2000:
          case 0x6000:
          case 0x1000:
          case 0xc000:
            break;
          default:
            return -0x1c;
        }
        _0x3a9ca2.mknod(_0x690578, _0xc46032, _0x2ba96c);
        return 0x0;
      },
      "doReadlink": function (_0x5df0f7, _0xe9b12a, _0x1ee0bf) {
        if (_0x1ee0bf <= 0x0) {
          return -0x1c;
        }
        var _0x511198 = _0x3a9ca2.readlink(_0x5df0f7);
        var _0x3e8832 = Math.min(_0x1ee0bf, _0x26e3e9(_0x511198));
        var _0x109fe2 = _0x31f314[_0xe9b12a + _0x3e8832];
        _0x5b3420(_0x511198, _0x26daaf, _0xe9b12a, _0x1ee0bf + 0x1);
        _0x31f314[_0xe9b12a + _0x3e8832] = _0x109fe2;
        return _0x3e8832;
      },
      "doAccess": function (_0x59fca3, _0x3fb108) {
        if (_0x3fb108 & -8) {
          return -0x1c;
        }
        var _0x342740 = _0x3a9ca2.lookupPath(_0x59fca3, {
          "follow": true
        });
        var _0xf1dd9b = _0x342740.node;
        if (!_0xf1dd9b) {
          return -0x2c;
        }
        var _0x3a12ec = '';
        if (_0x3fb108 & 0x4) {
          _0x3a12ec += "r";
        }
        if (_0x3fb108 & 0x2) {
          _0x3a12ec += "w";
        }
        if (_0x3fb108 & 0x1) {
          _0x3a12ec += "x";
        }
        if (_0x3a12ec && _0x3a9ca2.nodePermissions(_0xf1dd9b, _0x3a12ec)) {
          return -0x2;
        }
        return 0x0;
      },
      "doReadv": function (_0x245ce2, _0x194c24, _0x46753a, _0x291d9c) {
        var _0x393ce7 = 0x0;
        for (var _0x1d124c = 0x0; _0x1d124c < _0x46753a; _0x1d124c++) {
          var _0x931562 = _0xb9f33b[_0x194c24 + _0x1d124c * 0x8 >> 0x2];
          var _0x4cd8da = _0xb9f33b[_0x194c24 + (_0x1d124c * 0x8 + 0x4) >> 0x2];
          var _0x502ba5 = _0x3a9ca2.read(_0x245ce2, _0x31f314, _0x931562, _0x4cd8da, _0x291d9c);
          if (_0x502ba5 < 0x0) {
            return -0x1;
          }
          _0x393ce7 += _0x502ba5;
          if (_0x502ba5 < _0x4cd8da) {
            break;
          }
        }
        return _0x393ce7;
      },
      "doWritev": function (_0x1c967f, _0x36ab8c, _0x18a523, _0x2f062f) {
        var _0x2bb4fd = 0x0;
        for (var _0x2d4df4 = 0x0; _0x2d4df4 < _0x18a523; _0x2d4df4++) {
          var _0x1adfe8 = _0xb9f33b[_0x36ab8c + _0x2d4df4 * 0x8 >> 0x2];
          var _0x139f87 = _0xb9f33b[_0x36ab8c + (_0x2d4df4 * 0x8 + 0x4) >> 0x2];
          var _0x3614d7 = _0x3a9ca2.write(_0x1c967f, _0x31f314, _0x1adfe8, _0x139f87, _0x2f062f);
          if (_0x3614d7 < 0x0) {
            return -0x1;
          }
          _0x2bb4fd += _0x3614d7;
        }
        return _0x2bb4fd;
      },
      "varargs": undefined,
      "get": function () {
        _0x64ffda.varargs += 0x4;
        var _0x4908fe = _0xb9f33b[_0x64ffda.varargs - 0x4 >> 0x2];
        return _0x4908fe;
      },
      "getStr": function (_0x60e11c) {
        var _0x2ef024 = _0x60e11c ? _0x4ee57d(_0x26daaf, _0x60e11c, undefined) : '';
        return _0x2ef024;
      },
      "getStreamFromFD": function (_0x56d787) {
        var _0x47ad9b = _0x3a9ca2.streams[_0x56d787];
        if (!_0x47ad9b) {
          throw new null(0x8);
        }
        return _0x47ad9b;
      },
      "get64": function (_0x3d6178, _0x4198a6) {
        return _0x3d6178;
      }
    };
    var _0x287759 = {
      "mount": function (_0x41d82c) {
        _0x3d91d8.websocket = _0x3d91d8.websocket && "object" === typeof _0x3d91d8.websocket ? _0x3d91d8.websocket : {};
        _0x3d91d8.websocket._callbacks = {};
        _0x3d91d8.websocket.on = function (_0xf3cb4c, _0x310cc5) {
          if ("function" === typeof _0x310cc5) {
            this._callbacks[_0xf3cb4c] = _0x310cc5;
          }
          return this;
        };
        _0x3d91d8.websocket.emit = function (_0x2969d1, _0x3db18f) {
          if ("function" === typeof this._callbacks[_0x2969d1]) {
            this._callbacks[_0x2969d1].call(this, _0x3db18f);
          }
        };
        return _0x3a9ca2.createNode(null, "/", 16895, 0x0);
      },
      "createSocket": function (_0x5eee54, _0x3d9883, _0x312272) {
        _0x3d9883 &= -526337;
        var _0x581e0a = _0x3d9883 == 0x1;
        if (_0x581e0a && _0x312272 && _0x312272 != 0x6) {
          throw new null(0x42);
        }
        var _0x1dfd23 = {
          "family": _0x5eee54,
          "type": _0x3d9883,
          "protocol": _0x312272,
          "server": null,
          "error": null,
          "peers": {},
          "pending": [],
          "recv_queue": [],
          "sock_ops": _0x287759.websocket_sock_ops
        };
        var _0xc6b1a2 = _0x287759.nextname();
        var _0x41a13f = _0x3a9ca2.createNode(_0x287759.root, _0xc6b1a2, 0xc000, 0x0);
        _0x41a13f.sock = _0x1dfd23;
        var _0x5c0222 = _0x3a9ca2.createStream({
          "path": _0xc6b1a2,
          "node": _0x41a13f,
          "flags": 0x2,
          "seekable": false,
          "stream_ops": _0x287759.stream_ops
        });
        _0x1dfd23.stream = _0x5c0222;
        return _0x1dfd23;
      },
      "getSocket": function (_0x202b3f) {
        var _0x6826b4 = _0x3a9ca2.streams[_0x202b3f];
        if (!_0x6826b4 || !((_0x6826b4.node.mode & 0xc000) === 0xc000)) {
          return null;
        }
        return _0x6826b4.node.sock;
      },
      "stream_ops": {
        "poll": function (_0x181a05) {
          var _0x1a976d = _0x181a05.node.sock;
          return _0x1a976d.sock_ops.poll(_0x1a976d);
        },
        "ioctl": function (_0x139acd, _0x5d77a9, _0x28bf7e) {
          var _0x12dc71 = _0x139acd.node.sock;
          return _0x12dc71.sock_ops.ioctl(_0x12dc71, _0x5d77a9, _0x28bf7e);
        },
        "read": function (_0x36510e, _0x18dc5e, _0x6d666e, _0x1f2e79, _0x4d7b2c) {
          var _0x5a0ced = _0x36510e.node.sock;
          var _0x4f68bc = _0x5a0ced.sock_ops.recvmsg(_0x5a0ced, _0x1f2e79);
          if (!_0x4f68bc) {
            return 0x0;
          }
          _0x18dc5e.set(_0x4f68bc.buffer, _0x6d666e);
          return _0x4f68bc.buffer.length;
        },
        "write": function (_0x392805, _0x5ade3b, _0x44a381, _0x32dcc1, _0x9f2663) {
          var _0x108dce = _0x392805.node.sock;
          return _0x108dce.sock_ops.sendmsg(_0x108dce, _0x5ade3b, _0x44a381, _0x32dcc1);
        },
        "close": function (_0x3b38ae) {
          var _0x11a1db = _0x3b38ae.node.sock;
          _0x11a1db.sock_ops.close(_0x11a1db);
        }
      },
      "nextname": function () {
        if (!_0x287759.nextname.current) {
          _0x287759.nextname.current = 0x0;
        }
        return "socket[" + _0x287759.nextname.current++ + "]";
      },
      "websocket_sock_ops": {
        "createPeer": function (_0x56bd44, _0x2b0194, _0x1be24f) {
          var _0x33a068;
          if (typeof _0x2b0194 == "object") {
            _0x33a068 = _0x2b0194;
            _0x2b0194 = null;
            _0x1be24f = null;
          }
          if (_0x33a068) {
            if (_0x33a068._socket) {
              _0x2b0194 = _0x33a068._socket.remoteAddress;
              _0x1be24f = _0x33a068._socket.remotePort;
            } else {
              var _0xb67ab0 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x33a068.url);
              if (!_0xb67ab0) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              _0x2b0194 = _0xb67ab0[0x1];
              _0x1be24f = parseInt(_0xb67ab0[0x2], 0xa);
            }
          } else {
            try {
              var _0x297399 = _0x3d91d8.websocket && "object" === typeof _0x3d91d8.websocket;
              var _0x5bb985 = "ws:#".replace("#", "//");
              if (_0x297399) {
                if ("string" === typeof _0x3d91d8.websocket.url) {
                  _0x5bb985 = _0x3d91d8.websocket.url;
                }
              }
              if (_0x5bb985 === "ws://" || _0x5bb985 === "wss://") {
                var _0x455f40 = _0x2b0194.split("/");
                _0x5bb985 = _0x5bb985 + _0x455f40[0x0] + ":" + _0x1be24f + "/" + _0x455f40.slice(0x1).join("/");
              }
              var _0x31880a = "binary";
              if (_0x297399) {
                if ("string" === typeof _0x3d91d8.websocket.subprotocol) {
                  _0x31880a = _0x3d91d8.websocket.subprotocol;
                }
              }
              var _0x28ea63 = undefined;
              if (_0x31880a !== "null") {
                _0x31880a = _0x31880a.replace(/^ +| +$/g, '').split(/ *, */);
                _0x28ea63 = _0x523e7b ? {
                  "protocol": _0x31880a.toString()
                } : _0x31880a;
              }
              if (_0x297399 && null === _0x3d91d8.websocket.subprotocol) {
                _0x31880a = "null";
                _0x28ea63 = undefined;
              }
              var _0x3e94f6;
              if (_0x523e7b) {
                _0x3e94f6 = require("ws");
              } else {
                _0x3e94f6 = WebSocket;
              }
              _0x33a068 = new _0x3e94f6(_0x5bb985, _0x28ea63);
              _0x33a068.binaryType = "arraybuffer";
            } catch (_0x4b644d) {
              throw new null(0x17);
            }
          }
          var _0x139ddf = {
            "addr": _0x2b0194,
            "port": _0x1be24f,
            "socket": _0x33a068,
            "dgram_send_queue": []
          };
          _0x287759.websocket_sock_ops.addPeer(_0x56bd44, _0x139ddf);
          _0x287759.websocket_sock_ops.handlePeerEvents(_0x56bd44, _0x139ddf);
          if (_0x56bd44.type === 0x2 && typeof _0x56bd44.sport != "undefined") {
            _0x139ddf.dgram_send_queue.push(new Uint8Array([0xff, 0xff, 0xff, 0xff, "p".charCodeAt(0x0), "o".charCodeAt(0x0), "r".charCodeAt(0x0), "t".charCodeAt(0x0), (_0x56bd44.sport & 0xff00) >> 0x8, _0x56bd44.sport & 0xff]));
          }
          return _0x139ddf;
        },
        "getPeer": function (_0x3a2367, _0x2b617b, _0x1e9541) {
          return _0x3a2367.peers[_0x2b617b + ":" + _0x1e9541];
        },
        "addPeer": function (_0x5998bf, _0x2195c9) {
          _0x5998bf.peers[_0x2195c9.addr + ":" + _0x2195c9.port] = _0x2195c9;
        },
        "removePeer": function (_0x1bb4eb, _0x3b280f) {
          delete _0x1bb4eb.peers[_0x3b280f.addr + ":" + _0x3b280f.port];
        },
        "handlePeerEvents": function (_0x1dd6cf, _0x380e57) {
          var _0x4fefeb = true;
          var _0x55adec = function () {
            _0x3d91d8.websocket.emit("open", _0x1dd6cf.stream.fd);
            try {
              var _0x93265e = _0x380e57.dgram_send_queue.shift();
              while (_0x93265e) {
                _0x380e57.socket.send(_0x93265e);
                _0x93265e = _0x380e57.dgram_send_queue.shift();
              }
            } catch (_0x3e9a67) {
              _0x380e57.socket.close();
            }
          };
          function _0x379d24(_0xd096d6) {
            if (typeof _0xd096d6 == "string") {
              var _0x48535a = new TextEncoder();
              _0xd096d6 = _0x48535a.encode(_0xd096d6);
            } else {
              _0x56b1b0(_0xd096d6.byteLength !== undefined);
              if (_0xd096d6.byteLength == 0x0) {
                return;
              } else {
                _0xd096d6 = new Uint8Array(_0xd096d6);
              }
            }
            var _0x1d3af0 = _0x4fefeb;
            _0x4fefeb = false;
            if (_0x1d3af0 && _0xd096d6.length === 0xa && _0xd096d6[0x0] === 0xff && _0xd096d6[0x1] === 0xff && _0xd096d6[0x2] === 0xff && _0xd096d6[0x3] === 0xff && _0xd096d6[0x4] === "p".charCodeAt(0x0) && _0xd096d6[0x5] === "o".charCodeAt(0x0) && _0xd096d6[0x6] === "r".charCodeAt(0x0) && _0xd096d6[0x7] === "t".charCodeAt(0x0)) {
              var _0x2cc9cc = _0xd096d6[0x8] << 0x8 | _0xd096d6[0x9];
              _0x287759.websocket_sock_ops.removePeer(_0x1dd6cf, _0x380e57);
              _0x380e57.port = _0x2cc9cc;
              _0x287759.websocket_sock_ops.addPeer(_0x1dd6cf, _0x380e57);
              return;
            }
            _0x1dd6cf.recv_queue.push({
              "addr": _0x380e57.addr,
              "port": _0x380e57.port,
              "data": _0xd096d6
            });
            _0x3d91d8.websocket.emit("message", _0x1dd6cf.stream.fd);
          }
          if (_0x523e7b) {
            _0x380e57.socket.on("open", _0x55adec);
            _0x380e57.socket.on("message", function (_0x462753, _0x390f99) {
              if (!_0x390f99.binary) {
                return;
              }
              _0x379d24(new Uint8Array(_0x462753).buffer);
            });
            _0x380e57.socket.on("close", function () {
              _0x3d91d8.websocket.emit("close", _0x1dd6cf.stream.fd);
            });
            _0x380e57.socket.on("error", function (_0x56ec5b) {
              _0x1dd6cf.error = 0xe;
              _0x3d91d8.websocket.emit("error", [_0x1dd6cf.stream.fd, _0x1dd6cf.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            _0x380e57.socket.onopen = _0x55adec;
            _0x380e57.socket.onclose = function () {
              _0x3d91d8.websocket.emit("close", _0x1dd6cf.stream.fd);
            };
            _0x380e57.socket.onmessage = function _0x4d874f(_0xe8a76d) {
              _0x379d24(_0xe8a76d.data);
            };
            _0x380e57.socket.onerror = function (_0x4a1222) {
              _0x1dd6cf.error = 0xe;
              _0x3d91d8.websocket.emit("error", [_0x1dd6cf.stream.fd, _0x1dd6cf.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        },
        "poll": function (_0x3353a1) {
          if (_0x3353a1.type === 0x1 && _0x3353a1.server) {
            return _0x3353a1.pending.length ? 65 : 0x0;
          }
          var _0x13b251 = 0x0;
          var _0x274732 = _0x3353a1.type === 0x1 ? _0x287759.websocket_sock_ops.getPeer(_0x3353a1, _0x3353a1.daddr, _0x3353a1.dport) : null;
          if (_0x3353a1.recv_queue.length || !_0x274732 || _0x274732 && _0x274732.socket.readyState === _0x274732.socket.CLOSING || _0x274732 && _0x274732.socket.readyState === _0x274732.socket.CLOSED) {
            _0x13b251 |= 65;
          }
          if (!_0x274732 || _0x274732 && _0x274732.socket.readyState === _0x274732.socket.OPEN) {
            _0x13b251 |= 0x4;
          }
          if (_0x274732 && _0x274732.socket.readyState === _0x274732.socket.CLOSING || _0x274732 && _0x274732.socket.readyState === _0x274732.socket.CLOSED) {
            _0x13b251 |= 0x10;
          }
          return _0x13b251;
        },
        "ioctl": function (_0x38935e, _0x366398, _0x5de64f) {
          switch (_0x366398) {
            case 0x541b:
              var _0x27138e = 0x0;
              if (_0x38935e.recv_queue.length) {
                _0x27138e = _0x38935e.recv_queue[0x0].data.length;
              }
              _0xb9f33b[_0x5de64f >> 0x2] = _0x27138e;
              return 0x0;
            default:
              return 0x1c;
          }
        },
        "close": function (_0x404aec) {
          if (_0x404aec.server) {
            try {
              _0x404aec.server.close();
            } catch (_0x233eb6) {}
            _0x404aec.server = null;
          }
          var _0x581c01 = Object.keys(_0x404aec.peers);
          for (var _0x4dbee9 = 0x0; _0x4dbee9 < _0x581c01.length; _0x4dbee9++) {
            var _0x169cc6 = _0x404aec.peers[_0x581c01[_0x4dbee9]];
            try {
              _0x169cc6.socket.close();
            } catch (_0x550eb4) {}
            _0x287759.websocket_sock_ops.removePeer(_0x404aec, _0x169cc6);
          }
          return 0x0;
        },
        "bind": function (_0x1e9ee9, _0x66d7ab, _0x276b78) {
          if (typeof _0x1e9ee9.saddr != "undefined" || typeof _0x1e9ee9.sport != "undefined") {
            throw new null(0x1c);
          }
          _0x1e9ee9.saddr = _0x66d7ab;
          _0x1e9ee9.sport = _0x276b78;
          if (_0x1e9ee9.type === 0x2) {
            if (_0x1e9ee9.server) {
              _0x1e9ee9.server.close();
              _0x1e9ee9.server = null;
            }
            try {
              _0x1e9ee9.sock_ops.listen(_0x1e9ee9, 0x0);
            } catch (_0x44c362) {
              if (!(_0x44c362 instanceof null)) {
                throw _0x44c362;
              }
              if (_0x44c362.errno !== 0x8a) {
                throw _0x44c362;
              }
            }
          }
        },
        "connect": function (_0x4e9a73, _0x5620a7, _0x59db7a) {
          if (_0x4e9a73.server) {
            throw new null(0x8a);
          }
          if (typeof _0x4e9a73.daddr != "undefined" && typeof _0x4e9a73.dport != "undefined") {
            var _0x29f31f = _0x287759.websocket_sock_ops.getPeer(_0x4e9a73, _0x4e9a73.daddr, _0x4e9a73.dport);
            if (_0x29f31f) {
              if (_0x29f31f.socket.readyState === _0x29f31f.socket.CONNECTING) {
                throw new null(0x7);
              } else {
                throw new null(0x1e);
              }
            }
          }
          var _0x216741 = _0x287759.websocket_sock_ops.createPeer(_0x4e9a73, _0x5620a7, _0x59db7a);
          _0x4e9a73.daddr = _0x216741.addr;
          _0x4e9a73.dport = _0x216741.port;
          throw new null(0x1a);
        },
        "listen": function (_0x38492f, _0x37a2a3) {
          if (!_0x523e7b) {
            throw new null(0x8a);
          }
          if (_0x38492f.server) {
            throw new null(0x1c);
          }
          var _0x426149 = require("ws").Server;
          var _0x4134a5 = _0x38492f.saddr;
          _0x38492f.server = new _0x426149({
            "host": _0x4134a5,
            "port": _0x38492f.sport
          });
          _0x3d91d8.websocket.emit("listen", _0x38492f.stream.fd);
          _0x38492f.server.on("connection", function (_0x5ec8b8) {
            if (_0x38492f.type === 0x1) {
              var _0x54bed3 = _0x287759.createSocket(_0x38492f.family, _0x38492f.type, _0x38492f.protocol);
              var _0x31de30 = _0x287759.websocket_sock_ops.createPeer(_0x54bed3, _0x5ec8b8);
              _0x54bed3.daddr = _0x31de30.addr;
              _0x54bed3.dport = _0x31de30.port;
              _0x38492f.pending.push(_0x54bed3);
              _0x3d91d8.websocket.emit("connection", _0x54bed3.stream.fd);
            } else {
              _0x287759.websocket_sock_ops.createPeer(_0x38492f, _0x5ec8b8);
              _0x3d91d8.websocket.emit("connection", _0x38492f.stream.fd);
            }
          });
          _0x38492f.server.on("closed", function () {
            _0x3d91d8.websocket.emit("close", _0x38492f.stream.fd);
            _0x38492f.server = null;
          });
          _0x38492f.server.on("error", function (_0x499f0c) {
            _0x38492f.error = 0x17;
            _0x3d91d8.websocket.emit("error", [_0x38492f.stream.fd, _0x38492f.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        },
        "accept": function (_0x5153c6) {
          if (!_0x5153c6.server || !_0x5153c6.pending.length) {
            throw new null(0x1c);
          }
          var _0x5ed8d6 = _0x5153c6.pending.shift();
          _0x5ed8d6.stream.flags = _0x5153c6.stream.flags;
          return _0x5ed8d6;
        },
        "getname": function (_0x48b1c6, _0x575b76) {
          var _0x4f3619;
          var _0x353248;
          if (_0x575b76) {
            if (_0x48b1c6.daddr === undefined || _0x48b1c6.dport === undefined) {
              throw new null(0x35);
            }
            _0x4f3619 = _0x48b1c6.daddr;
            _0x353248 = _0x48b1c6.dport;
          } else {
            _0x4f3619 = _0x48b1c6.saddr || 0x0;
            _0x353248 = _0x48b1c6.sport || 0x0;
          }
          return {
            "addr": _0x4f3619,
            "port": _0x353248
          };
        },
        "sendmsg": function (_0x36f8d5, _0x1e8f3e, _0x153892, _0x149cb1, _0x53ec9c, _0x47c11d) {
          if (_0x36f8d5.type === 0x2) {
            if (_0x53ec9c === undefined || _0x47c11d === undefined) {
              _0x53ec9c = _0x36f8d5.daddr;
              _0x47c11d = _0x36f8d5.dport;
            }
            if (_0x53ec9c === undefined || _0x47c11d === undefined) {
              throw new null(0x11);
            }
          } else {
            _0x53ec9c = _0x36f8d5.daddr;
            _0x47c11d = _0x36f8d5.dport;
          }
          var _0x3c80dc = _0x287759.websocket_sock_ops.getPeer(_0x36f8d5, _0x53ec9c, _0x47c11d);
          if (_0x36f8d5.type === 0x1) {
            if (!_0x3c80dc || _0x3c80dc.socket.readyState === _0x3c80dc.socket.CLOSING || _0x3c80dc.socket.readyState === _0x3c80dc.socket.CLOSED) {
              throw new null(0x35);
            } else {
              if (_0x3c80dc.socket.readyState === _0x3c80dc.socket.CONNECTING) {
                throw new null(0x6);
              }
            }
          }
          if (ArrayBuffer.isView(_0x1e8f3e)) {
            _0x153892 += _0x1e8f3e.byteOffset;
            _0x1e8f3e = _0x1e8f3e.buffer;
          }
          var _0x4d6bd1;
          _0x4d6bd1 = _0x1e8f3e.slice(_0x153892, _0x153892 + _0x149cb1);
          if (_0x36f8d5.type === 0x2) {
            if (!_0x3c80dc || _0x3c80dc.socket.readyState !== _0x3c80dc.socket.OPEN) {
              if (!_0x3c80dc || _0x3c80dc.socket.readyState === _0x3c80dc.socket.CLOSING || _0x3c80dc.socket.readyState === _0x3c80dc.socket.CLOSED) {
                _0x3c80dc = _0x287759.websocket_sock_ops.createPeer(_0x36f8d5, _0x53ec9c, _0x47c11d);
              }
              _0x3c80dc.dgram_send_queue.push(_0x4d6bd1);
              return _0x149cb1;
            }
          }
          try {
            _0x3c80dc.socket.send(_0x4d6bd1);
            return _0x149cb1;
          } catch (_0x422997) {
            throw new null(0x1c);
          }
        },
        "recvmsg": function (_0x40eb0f, _0x1c6c77) {
          if (_0x40eb0f.type === 0x1 && _0x40eb0f.server) {
            throw new null(0x35);
          }
          var _0x5d7346 = _0x40eb0f.recv_queue.shift();
          if (!_0x5d7346) {
            if (_0x40eb0f.type === 0x1) {
              var _0x168e04 = _0x287759.websocket_sock_ops.getPeer(_0x40eb0f, _0x40eb0f.daddr, _0x40eb0f.dport);
              if (!_0x168e04) {
                throw new null(0x35);
              } else {
                if (_0x168e04.socket.readyState === _0x168e04.socket.CLOSING || _0x168e04.socket.readyState === _0x168e04.socket.CLOSED) {
                  return null;
                } else {
                  throw new null(0x6);
                }
              }
            } else {
              throw new null(0x6);
            }
          }
          var _0x566404 = _0x5d7346.data.byteLength || _0x5d7346.data.length;
          var _0x1f2af0 = _0x5d7346.data.byteOffset || 0x0;
          var _0x3b5951 = _0x5d7346.data.buffer || _0x5d7346.data;
          var _0x45d3d5 = Math.min(_0x1c6c77, _0x566404);
          var _0x2d7481 = {
            "buffer": new Uint8Array(_0x3b5951, _0x1f2af0, _0x45d3d5),
            "addr": _0x5d7346.addr,
            "port": _0x5d7346.port
          };
          if (_0x40eb0f.type === 0x1 && _0x45d3d5 < _0x566404) {
            var _0x4c5fae = _0x566404 - _0x45d3d5;
            _0x5d7346.data = new Uint8Array(_0x3b5951, _0x1f2af0 + _0x45d3d5, _0x4c5fae);
            _0x40eb0f.recv_queue.unshift(_0x5d7346);
          }
          return _0x2d7481;
        }
      }
    };
    function _0x255d1d(_0x523bbe) {
      var _0x385986 = _0x523bbe.split(".");
      for (var _0x1b2164 = 0x0; _0x1b2164 < 0x4; _0x1b2164++) {
        var _0x393f04 = Number(_0x385986[_0x1b2164]);
        if (isNaN(_0x393f04)) {
          return null;
        }
        _0x385986[_0x1b2164] = _0x393f04;
      }
      return (_0x385986[0x0] | _0x385986[0x1] << 0x8 | _0x385986[0x2] << 0x10 | _0x385986[0x3] << 0x18) >>> 0x0;
    }
    function _0x1aedc8(_0x3dc062) {
      var _0x567004;
      var _0x2cbd55;
      var _0x2ed862;
      var _0x20216;
      var _0x2ad750 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var _0x35c438 = [];
      if (!_0x2ad750.test(_0x3dc062)) {
        return null;
      }
      if (_0x3dc062 === "::") {
        return [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
      }
      if (_0x3dc062.startsWith("::")) {
        _0x3dc062 = _0x3dc062.replace("::", "Z:");
      } else {
        _0x3dc062 = _0x3dc062.replace("::", ":Z:");
      }
      if (_0x3dc062.indexOf(".") > 0x0) {
        _0x3dc062 = _0x3dc062.replace(new RegExp("[.]", "g"), ":");
        _0x567004 = _0x3dc062.split(":");
        _0x567004[_0x567004.length - 0x4] = parseInt(_0x567004[_0x567004.length - 0x4]) + parseInt(_0x567004[_0x567004.length - 0x3]) * 0x100;
        _0x567004[_0x567004.length - 0x3] = parseInt(_0x567004[_0x567004.length - 0x2]) + parseInt(_0x567004[_0x567004.length - 0x1]) * 0x100;
        _0x567004 = _0x567004.slice(0x0, _0x567004.length - 0x2);
      } else {
        _0x567004 = _0x3dc062.split(":");
      }
      _0x2ed862 = 0x0;
      _0x20216 = 0x0;
      for (_0x2cbd55 = 0x0; _0x2cbd55 < _0x567004.length; _0x2cbd55++) {
        if (typeof _0x567004[_0x2cbd55] == "string") {
          if (_0x567004[_0x2cbd55] === "Z") {
            for (_0x20216 = 0x0; _0x20216 < 0x8 - _0x567004.length + 0x1; _0x20216++) {
              _0x35c438[_0x2cbd55 + _0x20216] = 0x0;
            }
            _0x2ed862 = _0x20216 - 0x1;
          } else {
            _0x35c438[_0x2cbd55 + _0x2ed862] = _0x44bde7(parseInt(_0x567004[_0x2cbd55], 0x10));
          }
        } else {
          _0x35c438[_0x2cbd55 + _0x2ed862] = _0x567004[_0x2cbd55];
        }
      }
      return [_0x35c438[0x1] << 0x10 | _0x35c438[0x0], _0x35c438[0x3] << 0x10 | _0x35c438[0x2], _0x35c438[0x5] << 0x10 | _0x35c438[0x4], _0x35c438[0x7] << 0x10 | _0x35c438[0x6]];
    }
    var _0x1a791f = {
      "address_map": {
        "id": 0x1,
        "addrs": {},
        "names": {}
      },
      "lookup_name": function (_0x552559) {
        var _0x4543fa = _0x255d1d(_0x552559);
        if (_0x4543fa !== null) {
          return _0x552559;
        }
        _0x4543fa = _0x1aedc8(_0x552559);
        if (_0x4543fa !== null) {
          return _0x552559;
        }
        var _0x3f12a1;
        if (_0x1a791f.address_map.addrs[_0x552559]) {
          _0x3f12a1 = _0x1a791f.address_map.addrs[_0x552559];
        } else {
          var _0x450347 = _0x1a791f.address_map.id++;
          _0x56b1b0(_0x450347 < 0xffff, "exceeded max address mappings of 65535");
          _0x3f12a1 = "172.29." + (_0x450347 & 0xff) + "." + (_0x450347 & 0xff00);
          _0x1a791f.address_map.names[_0x3f12a1] = _0x552559;
          _0x1a791f.address_map.addrs[_0x552559] = _0x3f12a1;
        }
        return _0x3f12a1;
      },
      "lookup_addr": function (_0x5ee68a) {
        if (_0x1a791f.address_map.names[_0x5ee68a]) {
          return _0x1a791f.address_map.names[_0x5ee68a];
        }
        return null;
      }
    };
    var _0x4215ab = {
      "BUCKET_BUFFER_SIZE": 0x2000,
      "mount": function (_0x5dfc12) {
        return _0x3a9ca2.createNode(null, "/", 16895, 0x0);
      },
      "createPipe": function () {
        var _0x56123d = {
          "buckets": [],
          "refcnt": 0x2
        };
        _0x56123d.buckets.push({
          "buffer": new Uint8Array(0x2000),
          "offset": 0x0,
          "roffset": 0x0
        });
        var _0x518ccd = _0x4215ab.nextname();
        var _0xcf64f3 = _0x4215ab.nextname();
        var _0x35f992 = _0x3a9ca2.createNode(_0x4215ab.root, _0x518ccd, 0x1000, 0x0);
        var _0x225d26 = _0x3a9ca2.createNode(_0x4215ab.root, _0xcf64f3, 0x1000, 0x0);
        _0x35f992.pipe = _0x56123d;
        _0x225d26.pipe = _0x56123d;
        var _0x1314c4 = _0x3a9ca2.createStream({
          "path": _0x518ccd,
          "node": _0x35f992,
          "flags": 0x0,
          "seekable": false,
          "stream_ops": _0x4215ab.stream_ops
        });
        _0x35f992.stream = _0x1314c4;
        var _0x73c67d = _0x3a9ca2.createStream({
          "path": _0xcf64f3,
          "node": _0x225d26,
          "flags": 0x1,
          "seekable": false,
          "stream_ops": _0x4215ab.stream_ops
        });
        _0x225d26.stream = _0x73c67d;
        return {
          "readable_fd": _0x1314c4.fd,
          "writable_fd": _0x73c67d.fd
        };
      },
      "stream_ops": {
        "poll": function (_0x18e163) {
          var _0x5dd8f2 = _0x18e163.node.pipe;
          if ((_0x18e163.flags & 0x200003) === 0x1) {
            return 260;
          } else {
            if (_0x5dd8f2.buckets.length > 0x0) {
              for (var _0x1d75ac = 0x0; _0x1d75ac < _0x5dd8f2.buckets.length; _0x1d75ac++) {
                var _0x2c7340 = _0x5dd8f2.buckets[_0x1d75ac];
                if (_0x2c7340.offset - _0x2c7340.roffset > 0x0) {
                  return 65;
                }
              }
            }
          }
          return 0x0;
        },
        "ioctl": function (_0x2c974c, _0x104acd, _0x29e26d) {
          return 0x1c;
        },
        "fsync": function (_0xbd2ac6) {
          return 0x1c;
        },
        "read": function (_0x238d7d, _0x3a963a, _0x35966d, _0x17bac3, _0x1b78f9) {
          var _0x4214be = _0x238d7d.node.pipe;
          var _0x30b0d2 = 0x0;
          for (var _0x4f0075 = 0x0; _0x4f0075 < _0x4214be.buckets.length; _0x4f0075++) {
            var _0x322bf2 = _0x4214be.buckets[_0x4f0075];
            _0x30b0d2 += _0x322bf2.offset - _0x322bf2.roffset;
          }
          _0x56b1b0(_0x3a963a instanceof ArrayBuffer || ArrayBuffer.isView(_0x3a963a));
          var _0x10a999 = _0x3a963a.subarray(_0x35966d, _0x35966d + _0x17bac3);
          if (_0x17bac3 <= 0x0) {
            return 0x0;
          }
          if (_0x30b0d2 == 0x0) {
            throw new null(0x6);
          }
          var _0xf66c1b = Math.min(_0x30b0d2, _0x17bac3);
          var _0x5ac237 = _0xf66c1b;
          var _0x570686 = 0x0;
          for (var _0x4f0075 = 0x0; _0x4f0075 < _0x4214be.buckets.length; _0x4f0075++) {
            var _0x3d8f93 = _0x4214be.buckets[_0x4f0075];
            var _0x1d4d1a = _0x3d8f93.offset - _0x3d8f93.roffset;
            if (_0xf66c1b <= _0x1d4d1a) {
              var _0x4d5e26 = _0x3d8f93.buffer.subarray(_0x3d8f93.roffset, _0x3d8f93.offset);
              if (_0xf66c1b < _0x1d4d1a) {
                _0x4d5e26 = _0x4d5e26.subarray(0x0, _0xf66c1b);
                _0x3d8f93.roffset += _0xf66c1b;
              } else {
                _0x570686++;
              }
              _0x10a999.set(_0x4d5e26);
              break;
            } else {
              var _0x4d5e26 = _0x3d8f93.buffer.subarray(_0x3d8f93.roffset, _0x3d8f93.offset);
              _0x10a999.set(_0x4d5e26);
              _0x10a999 = _0x10a999.subarray(_0x4d5e26.byteLength);
              _0xf66c1b -= _0x4d5e26.byteLength;
              _0x570686++;
            }
          }
          if (_0x570686 && _0x570686 == _0x4214be.buckets.length) {
            _0x570686--;
            _0x4214be.buckets[_0x570686].offset = 0x0;
            _0x4214be.buckets[_0x570686].roffset = 0x0;
          }
          _0x4214be.buckets.splice(0x0, _0x570686);
          return _0x5ac237;
        },
        "write": function (_0x11e2fe, _0x109b11, _0x9ec58d, _0xa5d254, _0x539ed5) {
          var _0x3347a6 = _0x11e2fe.node.pipe;
          _0x56b1b0(_0x109b11 instanceof ArrayBuffer || ArrayBuffer.isView(_0x109b11));
          var _0x2344cf = _0x109b11.subarray(_0x9ec58d, _0x9ec58d + _0xa5d254);
          var _0x56dcc7 = _0x2344cf.byteLength;
          if (_0x56dcc7 <= 0x0) {
            return 0x0;
          }
          var _0x2eb8e9 = null;
          if (_0x3347a6.buckets.length == 0x0) {
            _0x2eb8e9 = {
              "buffer": new Uint8Array(0x2000),
              "offset": 0x0,
              "roffset": 0x0
            };
            _0x3347a6.buckets.push(_0x2eb8e9);
          } else {
            _0x2eb8e9 = _0x3347a6.buckets[_0x3347a6.buckets.length - 0x1];
          }
          _0x56b1b0(_0x2eb8e9.offset <= 0x2000);
          var _0x3c1d7b = 0x2000 - _0x2eb8e9.offset;
          if (_0x3c1d7b >= _0x56dcc7) {
            _0x2eb8e9.buffer.set(_0x2344cf, _0x2eb8e9.offset);
            _0x2eb8e9.offset += _0x56dcc7;
            return _0x56dcc7;
          } else if (_0x3c1d7b > 0x0) {
            _0x2eb8e9.buffer.set(_0x2344cf.subarray(0x0, _0x3c1d7b), _0x2eb8e9.offset);
            _0x2eb8e9.offset += _0x3c1d7b;
            _0x2344cf = _0x2344cf.subarray(_0x3c1d7b, _0x2344cf.byteLength);
          }
          var _0x4d780d = _0x2344cf.byteLength / 0x2000 | 0x0;
          var _0x1b2ca6 = _0x2344cf.byteLength % 0x2000;
          for (var _0x49cd94 = 0x0; _0x49cd94 < _0x4d780d; _0x49cd94++) {
            var _0x3a6154 = {
              "buffer": new Uint8Array(0x2000),
              "offset": 0x2000,
              "roffset": 0x0
            };
            _0x3347a6.buckets.push(_0x3a6154);
            _0x3a6154.buffer.set(_0x2344cf.subarray(0x0, 0x2000));
            _0x2344cf = _0x2344cf.subarray(0x2000, _0x2344cf.byteLength);
          }
          if (_0x1b2ca6 > 0x0) {
            var _0x3a6154 = {
              "buffer": new Uint8Array(0x2000),
              "offset": _0x2344cf.byteLength,
              "roffset": 0x0
            };
            _0x3347a6.buckets.push(_0x3a6154);
            _0x3a6154.buffer.set(_0x2344cf);
          }
          return _0x56dcc7;
        },
        "close": function (_0x267175) {
          var _0x1361bb = _0x267175.node.pipe;
          _0x1361bb.refcnt--;
          if (_0x1361bb.refcnt === 0x0) {
            _0x1361bb.buckets = null;
          }
        }
      },
      "nextname": function () {
        if (!_0x4215ab.nextname.current) {
          _0x4215ab.nextname.current = 0x0;
        }
        return "pipe[" + _0x4215ab.nextname.current++ + "]";
      }
    };
    function _0x2753f3(_0x373e88, _0x2cefaa, _0x23b8aa) {
      var _0xd856f3 = new Date().getFullYear();
      var _0x259de6 = new Date(_0xd856f3, 0x0, 0x1);
      var _0x1e1892 = new Date(_0xd856f3, 0x6, 0x1);
      var _0x111827 = _0x259de6.getTimezoneOffset();
      var _0x146f44 = _0x1e1892.getTimezoneOffset();
      var _0x2149c0 = Math.max(_0x111827, _0x146f44);
      _0xb9f33b[_0x373e88 >> 0x2] = _0x2149c0 * 0x3c;
      _0xb9f33b[_0x2cefaa >> 0x2] = Number(_0x111827 != _0x146f44);
      function _0x468b5f(_0x2fb9d4) {
        var _0x342152 = _0x2fb9d4.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return _0x342152 ? _0x342152[0x1] : "GMT";
      }
      var _0x188595 = _0x468b5f(_0x259de6);
      var _0xcdaa56 = _0x468b5f(_0x1e1892);
      var _0x28f66d = _0x34af28(_0x188595);
      var _0x13bc40 = _0x34af28(_0xcdaa56);
      if (_0x146f44 < _0x111827) {
        _0xb9f33b[_0x23b8aa >> 0x2] = _0x28f66d;
        _0xb9f33b[_0x23b8aa + 0x4 >> 0x2] = _0x13bc40;
      } else {
        _0xb9f33b[_0x23b8aa >> 0x2] = _0x13bc40;
        _0xb9f33b[_0x23b8aa + 0x4 >> 0x2] = _0x28f66d;
      }
    }
    function _0x36bc27(_0x6106ed, _0x442019, _0x25b54a) {
      if (_0x36bc27.called) {
        return;
      }
      _0x36bc27.called = true;
      _0x2753f3(_0x6106ed, _0x442019, _0x25b54a);
    }
    function _0x419ff2(_0x24ca31, _0x206569) {
      _0x5409e2.mainLoop.timingMode = _0x24ca31;
      _0x5409e2.mainLoop.timingValue = _0x206569;
      if (!_0x5409e2.mainLoop.func) {
        return 0x1;
      }
      if (!_0x5409e2.mainLoop.running) {
        _0x5409e2.mainLoop.running = true;
      }
      if (_0x24ca31 == 0x0) {
        _0x5409e2.mainLoop.scheduler = function _0x935e6b() {
          var _0x1f8eb7 = Math.max(0x0, _0x5409e2.mainLoop.tickStartTime + _0x206569 - _0x4f2ca4()) | 0x0;
          setTimeout(_0x5409e2.mainLoop.runner, _0x1f8eb7);
        };
        _0x5409e2.mainLoop.method = "timeout";
      } else {
        if (_0x24ca31 == 0x1) {
          _0x5409e2.mainLoop.scheduler = function _0x5b71e2() {
            _0x5409e2.requestAnimationFrame(_0x5409e2.mainLoop.runner);
          };
          _0x5409e2.mainLoop.method = "rAF";
        } else {
          if (_0x24ca31 == 0x2) {
            if (typeof setImmediate == "undefined") {
              var _0x21619a = [];
              var _0x3da5e0 = function (_0x47a5b3) {
                if (_0x47a5b3.data === "setimmediate" || _0x47a5b3.data.target === "setimmediate") {
                  _0x47a5b3.stopPropagation();
                  _0x21619a.shift()();
                }
              };
              addEventListener("message", _0x3da5e0, true);
              setImmediate = function _0xb8200f(_0x44a59d) {
                _0x21619a.push(_0x44a59d);
                if (_0x3a4271) {
                  if (_0x3d91d8.setImmediates === undefined) {
                    _0x3d91d8.setImmediates = [];
                  }
                  _0x3d91d8.setImmediates.push(_0x44a59d);
                  postMessage({
                    "target": "setimmediate"
                  });
                } else {
                  postMessage("setimmediate", "*");
                }
              };
            }
            _0x5409e2.mainLoop.scheduler = function _0x3e30d0() {
              setImmediate(_0x5409e2.mainLoop.runner);
            };
            _0x5409e2.mainLoop.method = "immediate";
          }
        }
      }
      return 0x0;
    }
    var _0x4f2ca4;
    if (_0x523e7b) {
      _0x4f2ca4 = () => {
        var _0x3c8bde = process.hrtime();
        return _0x3c8bde[0x0] * 0x3e8 + _0x3c8bde[0x1] / 0xf4240;
      };
    } else {
      _0x4f2ca4 = () => performance.now();
    }
    function _0x45f8d6() {}
    function _0x302460(_0x48ec3a, _0x45d730, _0x33a574, _0x32e476, _0x4eedf2) {
      _0x56b1b0(!_0x5409e2.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      _0x5409e2.mainLoop.func = _0x48ec3a;
      _0x5409e2.mainLoop.arg = _0x32e476;
      var _0x29182e = _0x5409e2.mainLoop.currentlyRunningMainloop;
      function _0x359126() {
        if (_0x29182e < _0x5409e2.mainLoop.currentlyRunningMainloop) {
          _0x45f8d6();
          return false;
        }
        return true;
      }
      _0x5409e2.mainLoop.running = false;
      _0x5409e2.mainLoop.runner = function _0x10a040() {
        if (_0x32ccfc) {
          return;
        }
        if (_0x5409e2.mainLoop.queue.length > 0x0) {
          var _0x4a6394 = Date.now();
          var _0x1e4d0e = _0x5409e2.mainLoop.queue.shift();
          _0x1e4d0e.func(_0x1e4d0e.arg);
          if (_0x5409e2.mainLoop.remainingBlockers) {
            var _0x3d5ce8 = _0x5409e2.mainLoop.remainingBlockers;
            var _0x37e03e = _0x3d5ce8 % 0x1 == 0x0 ? _0x3d5ce8 - 0x1 : Math.floor(_0x3d5ce8);
            if (_0x1e4d0e.counted) {
              _0x5409e2.mainLoop.remainingBlockers = _0x37e03e;
            } else {
              _0x37e03e = _0x37e03e + 0.5;
              _0x5409e2.mainLoop.remainingBlockers = (0x8 * _0x3d5ce8 + _0x37e03e) / 0x9;
            }
          }
          _0x369287("main loop blocker \"" + _0x1e4d0e.name + "\" took " + (Date.now() - _0x4a6394) + " ms");
          _0x5409e2.mainLoop.updateStatus();
          if (!_0x359126()) {
            return;
          }
          setTimeout(_0x5409e2.mainLoop.runner, 0x0);
          return;
        }
        if (!_0x359126()) {
          return;
        }
        _0x5409e2.mainLoop.currentFrameNumber = _0x5409e2.mainLoop.currentFrameNumber + 0x1 | 0x0;
        if (_0x5409e2.mainLoop.timingMode == 0x1 && _0x5409e2.mainLoop.timingValue > 0x1 && _0x5409e2.mainLoop.currentFrameNumber % _0x5409e2.mainLoop.timingValue != 0x0) {
          _0x5409e2.mainLoop.scheduler();
          return;
        } else if (_0x5409e2.mainLoop.timingMode == 0x0) {
          _0x5409e2.mainLoop.tickStartTime = _0x4f2ca4();
        }
        _0x4debd4.newRenderingFrameStarted();
        _0x5409e2.mainLoop.runIter(_0x48ec3a);
        if (!_0x359126()) {
          return;
        }
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) {
          SDL.audio.queueNewAudioData();
        }
        _0x5409e2.mainLoop.scheduler();
      };
      if (!_0x4eedf2) {
        if (_0x45d730 && _0x45d730 > 0x0) {
          _0x419ff2(0x0, 0x3e8 / _0x45d730);
        } else {
          _0x419ff2(0x1, 0x1);
        }
        _0x5409e2.mainLoop.scheduler();
      }
      if (_0x33a574) {
        throw "unwind";
      }
    }
    function _0x2f8081(_0x34bda1, _0x140837) {
      if (_0x32ccfc) {
        return;
      }
      if (_0x140837) {
        _0x34bda1();
        return;
      }
      try {
        _0x34bda1();
      } catch (_0x41926f) {
        _0x58af9c(_0x41926f);
      }
    }
    function _0x25a779(_0x53c1e2, _0x593aa6) {
      return setTimeout(function () {
        _0x2f8081(_0x53c1e2);
      }, _0x593aa6);
    }
    var _0x5409e2 = {
      "mainLoop": {
        "running": false,
        "scheduler": null,
        "method": '',
        "currentlyRunningMainloop": 0x0,
        "func": null,
        "arg": 0x0,
        "timingMode": 0x0,
        "timingValue": 0x0,
        "currentFrameNumber": 0x0,
        "queue": [],
        "pause": function () {
          _0x5409e2.mainLoop.scheduler = null;
          _0x5409e2.mainLoop.currentlyRunningMainloop++;
        },
        "resume": function () {
          _0x5409e2.mainLoop.currentlyRunningMainloop++;
          var _0x4556f1 = _0x5409e2.mainLoop.timingMode;
          var _0x25fd33 = _0x5409e2.mainLoop.timingValue;
          var _0x28e846 = _0x5409e2.mainLoop.func;
          _0x5409e2.mainLoop.func = null;
          _0x302460(_0x28e846, 0x0, false, _0x5409e2.mainLoop.arg, true);
          _0x419ff2(_0x4556f1, _0x25fd33);
          _0x5409e2.mainLoop.scheduler();
        },
        "updateStatus": function () {
          if (_0x3d91d8.setStatus) {
            var _0x4386d7 = _0x3d91d8.statusMessage || "Please wait...";
            var _0x3f4b97 = _0x5409e2.mainLoop.remainingBlockers;
            var _0x4d7f3f = _0x5409e2.mainLoop.expectedBlockers;
            if (_0x3f4b97) {
              if (_0x3f4b97 < _0x4d7f3f) {
                _0x3d91d8.setStatus(_0x4386d7 + " (" + (_0x4d7f3f - _0x3f4b97) + "/" + _0x4d7f3f + ")");
              } else {
                _0x3d91d8.setStatus(_0x4386d7);
              }
            } else {
              _0x3d91d8.setStatus('');
            }
          }
        },
        "runIter": function (_0xe9c723) {
          if (_0x32ccfc) {
            return;
          }
          if (_0x3d91d8.preMainLoop) {
            var _0x17035a = _0x3d91d8.preMainLoop();
            if (_0x17035a === false) {
              return;
            }
          }
          _0x2f8081(_0xe9c723);
          if (_0x3d91d8.postMainLoop) {
            _0x3d91d8.postMainLoop();
          }
        }
      },
      "isFullscreen": false,
      "pointerLock": false,
      "moduleContextCreatedCallbacks": [],
      "workers": [],
      "init": function () {
        if (!_0x3d91d8.preloadPlugins) {
          _0x3d91d8.preloadPlugins = [];
        }
        if (_0x5409e2.initted) {
          return;
        }
        _0x5409e2.initted = true;
        try {
          new Blob();
          _0x5409e2.hasBlobConstructor = true;
        } catch (_0x7a5fdc) {
          _0x5409e2.hasBlobConstructor = false;
          _0x369287("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        _0x5409e2.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x5409e2.hasBlobConstructor ? _0x369287("warning: no BlobBuilder") : null;
        _0x5409e2.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!_0x3d91d8.noImageDecoding && typeof _0x5409e2.URLObject == "undefined") {
          _0x369287("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          _0x3d91d8.noImageDecoding = true;
        }
        var _0x490231 = {
          canHandle: function _0x2904d6(_0x5395d8) {
            return !_0x3d91d8.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x5395d8);
          },
          handle: function _0x42725f(_0x32e053, _0x49f34f, _0x17e533, _0x12b9f3) {
            var _0x3630db = null;
            if (_0x5409e2.hasBlobConstructor) {
              try {
                _0x3630db = new Blob([_0x32e053], {
                  "type": {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                  }[_0x49f34f.substr(_0x49f34f.lastIndexOf(".") + 0x1)]
                });
                if (_0x3630db.size !== _0x32e053.length) {
                  _0x3630db = new Blob([new Uint8Array(_0x32e053).buffer], {
                    "type": {
                      "jpg": "image/jpeg",
                      "jpeg": "image/jpeg",
                      "png": "image/png",
                      "bmp": "image/bmp",
                      "ogg": "audio/ogg",
                      "wav": "audio/wav",
                      "mp3": "audio/mpeg"
                    }[_0x49f34f.substr(_0x49f34f.lastIndexOf(".") + 0x1)]
                  });
                }
              } catch (_0x2dd820) {
                _0x1ac52a("Blob constructor present but fails: " + _0x2dd820 + "; falling back to blob builder");
              }
            }
            if (!_0x3630db) {
              var _0x1b8c77 = new _0x5409e2.BlobBuilder();
              _0x1b8c77.append(new Uint8Array(_0x32e053).buffer);
              _0x3630db = _0x1b8c77.getBlob();
            }
            var _0x368d3e = _0x5409e2.URLObject.createObjectURL(_0x3630db);
            var _0x57d54c = new Image();
            _0x57d54c.onload = () => {
              _0x56b1b0(_0x57d54c.complete, "Image " + _0x49f34f + " could not be decoded");
              var _0x30907d = document.createElement("canvas");
              _0x30907d.width = _0x57d54c.width;
              _0x30907d.height = _0x57d54c.height;
              var _0x57cc78 = _0x30907d.getContext("2d");
              _0x57cc78.drawImage(_0x57d54c, 0x0, 0x0);
              _0x3d91d8.preloadedImages[_0x49f34f] = _0x30907d;
              _0x5409e2.URLObject.revokeObjectURL(_0x368d3e);
              if (_0x17e533) {
                _0x17e533(_0x32e053);
              }
            };
            _0x57d54c.onerror = _0x1d38e4 => {
              _0x369287("Image " + _0x368d3e + " could not be decoded");
              if (_0x12b9f3) {
                _0x12b9f3();
              }
            };
            _0x57d54c.src = _0x368d3e;
          }
        };
        _0x3d91d8.preloadPlugins.push(_0x490231);
        var _0x60390b = {
          canHandle: function _0x4012eb(_0x33222a) {
            return !_0x3d91d8.noAudioDecoding && _0x33222a.substr(-0x4) in {
              ".ogg": 0x1,
              ".wav": 0x1,
              ".mp3": 0x1
            };
          },
          handle: function _0x3308ac(_0x47be31, _0x583117, _0x399cfb, _0x59f379) {
            var _0x5911f5 = false;
            function _0x431d7d(_0x5932a5) {
              if (_0x5911f5) {
                return;
              }
              _0x5911f5 = true;
              _0x3d91d8.preloadedAudios[_0x583117] = _0x5932a5;
              if (_0x399cfb) {
                _0x399cfb(_0x47be31);
              }
            }
            function _0x323f25() {
              if (_0x5911f5) {
                return;
              }
              _0x5911f5 = true;
              _0x3d91d8.preloadedAudios[_0x583117] = new Audio();
              if (_0x59f379) {
                _0x59f379();
              }
            }
            if (_0x5409e2.hasBlobConstructor) {
              try {
                var _0xf11af5 = new Blob([_0x47be31], {
                  "type": {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                  }[_0x583117.substr(_0x583117.lastIndexOf(".") + 0x1)]
                });
              } catch (_0x37c25c) {
                return _0x323f25();
              }
              var _0x5c7655 = _0x5409e2.URLObject.createObjectURL(_0xf11af5);
              var _0xf6dfaa = new Audio();
              _0xf6dfaa.addEventListener("canplaythrough", function () {
                _0x431d7d(_0xf6dfaa);
              }, false);
              _0xf6dfaa.onerror = function _0x42fbd0(_0x1e9ca5) {
                if (_0x5911f5) {
                  return;
                }
                _0x369287("warning: browser could not fully decode audio " + _0x583117 + ", trying slower base64 approach");
                function _0x25125b(_0x29f23a) {
                  var _0x3f6cb0 = '';
                  var _0x13c7fa = 0x0;
                  var _0x276996 = 0x0;
                  for (var _0x451b65 = 0x0; _0x451b65 < _0x29f23a.length; _0x451b65++) {
                    _0x13c7fa = _0x13c7fa << 0x8 | _0x29f23a[_0x451b65];
                    _0x276996 += 0x8;
                    while (_0x276996 >= 0x6) {
                      var _0x1fe3c6 = _0x13c7fa >> _0x276996 - 0x6 & 0x3f;
                      _0x276996 -= 0x6;
                      _0x3f6cb0 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[_0x1fe3c6];
                    }
                  }
                  if (_0x276996 == 0x2) {
                    _0x3f6cb0 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x13c7fa & 0x3) << 0x4];
                    _0x3f6cb0 += "==";
                  } else if (_0x276996 == 0x4) {
                    _0x3f6cb0 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x13c7fa & 0xf) << 0x2];
                    _0x3f6cb0 += "=";
                  }
                  return _0x3f6cb0;
                }
                _0xf6dfaa.src = "data:audio/x-" + _0x583117.substr(-0x3) + ";base64," + _0x25125b(_0x47be31);
                _0x431d7d(_0xf6dfaa);
              };
              _0xf6dfaa.src = _0x5c7655;
              _0x25a779(function () {
                _0x431d7d(_0xf6dfaa);
              }, 0x2710);
            } else {
              return _0x323f25();
            }
          }
        };
        _0x3d91d8.preloadPlugins.push(_0x60390b);
        function _0x4c4157() {
          _0x5409e2.pointerLock = document.pointerLockElement === _0x3d91d8.canvas || document.mozPointerLockElement === _0x3d91d8.canvas || document.webkitPointerLockElement === _0x3d91d8.canvas || document.msPointerLockElement === _0x3d91d8.canvas;
        }
        var _0x47697c = _0x3d91d8.canvas;
        if (_0x47697c) {
          _0x47697c.requestPointerLock = _0x47697c.requestPointerLock || _0x47697c.mozRequestPointerLock || _0x47697c.webkitRequestPointerLock || _0x47697c.msRequestPointerLock || function () {};
          _0x47697c.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
          _0x47697c.exitPointerLock = _0x47697c.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", _0x4c4157, false);
          document.addEventListener("mozpointerlockchange", _0x4c4157, false);
          document.addEventListener("webkitpointerlockchange", _0x4c4157, false);
          document.addEventListener("mspointerlockchange", _0x4c4157, false);
          if (_0x3d91d8.elementPointerLock) {
            _0x47697c.addEventListener("click", function (_0x3a13af) {
              if (true && _0x3d91d8.canvas.requestPointerLock) {
                _0x3d91d8.canvas.requestPointerLock();
                _0x3a13af.preventDefault();
              }
            }, false);
          }
        }
      },
      "handledByPreloadPlugin": function (_0x4c3c7b, _0x31d8ef, _0xd4e632, _0x3ad8cd) {
        _0x5409e2.init();
        var _0x190c23 = false;
        _0x3d91d8.preloadPlugins.forEach(function (_0x353d23) {
          if (_0x190c23) {
            return;
          }
          if (_0x353d23.canHandle(_0x31d8ef)) {
            _0x353d23.handle(_0x4c3c7b, _0x31d8ef, _0xd4e632, _0x3ad8cd);
            _0x190c23 = true;
          }
        });
        return _0x190c23;
      },
      "createContext": function (_0x4f6111, _0x3217b6, _0x431bb8, _0x1999b) {
        if (_0x3217b6 && _0x3d91d8.ctx && _0x4f6111 == _0x3d91d8.canvas) {
          return _0x3d91d8.ctx;
        }
        var _0x5befcc;
        var _0x4cc476;
        if (_0x3217b6) {
          var _0x298908 = {
            "antialias": false,
            "alpha": false,
            "majorVersion": typeof WebGL2RenderingContext != "undefined" ? 0x2 : 0x1
          };
          if (_0x1999b) {
            for (var _0x155e59 in _0x1999b) {
              _0x298908[_0x155e59] = _0x1999b[_0x155e59];
            }
          }
          if (typeof _0x4debd4 != "undefined") {
            _0x4cc476 = _0x4debd4.createContext(_0x4f6111, _0x298908);
            if (_0x4cc476) {
              _0x5befcc = _0x4debd4.contexts[_0x4cc476].GLctx;
            }
          }
        } else {
          _0x5befcc = _0x4f6111.getContext("2d");
        }
        if (!_0x5befcc) {
          return null;
        }
        if (_0x431bb8) {
          if (!_0x3217b6) {
            _0x56b1b0(typeof _0x180466 == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          }
          _0x3d91d8.ctx = _0x5befcc;
          if (_0x3217b6) {
            _0x4debd4.makeContextCurrent(_0x4cc476);
          }
          _0x3d91d8.useWebGL = _0x3217b6;
          _0x5409e2.moduleContextCreatedCallbacks.forEach(function (_0x1290e8) {
            _0x1290e8();
          });
          _0x5409e2.init();
        }
        return _0x5befcc;
      },
      "destroyContext": function (_0x6462ca, _0xd71195, _0x332772) {},
      "fullscreenHandlersInstalled": false,
      "lockPointer": undefined,
      "resizeCanvas": undefined,
      "requestFullscreen": function (_0x36462d, _0x3c24ed) {
        _0x5409e2.lockPointer = _0x36462d;
        _0x5409e2.resizeCanvas = _0x3c24ed;
        if (typeof _0x5409e2.lockPointer == "undefined") {
          _0x5409e2.lockPointer = true;
        }
        if (typeof _0x5409e2.resizeCanvas == "undefined") {
          _0x5409e2.resizeCanvas = false;
        }
        var _0x40cf8e = _0x3d91d8.canvas;
        function _0x2f985f() {
          _0x5409e2.isFullscreen = false;
          var _0x497ef3 = _0x40cf8e.parentNode;
          if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x497ef3) {
            _0x40cf8e.exitFullscreen = _0x5409e2.exitFullscreen;
            if (_0x5409e2.lockPointer) {
              _0x40cf8e.requestPointerLock();
            }
            _0x5409e2.isFullscreen = true;
            if (_0x5409e2.resizeCanvas) {
              _0x5409e2.setFullscreenCanvasSize();
            } else {
              _0x5409e2.updateCanvasDimensions(_0x40cf8e);
            }
          } else {
            _0x497ef3.parentNode.insertBefore(_0x40cf8e, _0x497ef3);
            _0x497ef3.parentNode.removeChild(_0x497ef3);
            if (_0x5409e2.resizeCanvas) {
              _0x5409e2.setWindowedCanvasSize();
            } else {
              _0x5409e2.updateCanvasDimensions(_0x40cf8e);
            }
          }
          if (_0x3d91d8.onFullScreen) {
            _0x3d91d8.onFullScreen(false);
          }
          if (_0x3d91d8.onFullscreen) {
            _0x3d91d8.onFullscreen(false);
          }
        }
        _0x5409e2.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x2f985f, false);
        document.addEventListener("mozfullscreenchange", _0x2f985f, false);
        document.addEventListener("webkitfullscreenchange", _0x2f985f, false);
        document.addEventListener("MSFullscreenChange", _0x2f985f, false);
        var _0x400841 = document.createElement("div");
        _0x40cf8e.parentNode.insertBefore(_0x400841, _0x40cf8e);
        _0x400841.appendChild(_0x40cf8e);
        _0x400841.requestFullscreen = _0x400841.requestFullscreen || _0x400841.mozRequestFullScreen || _0x400841.msRequestFullscreen || (_0x400841.webkitRequestFullscreen ? function () {
          _0x400841.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (_0x400841.webkitRequestFullScreen ? function () {
          _0x400841.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        _0x400841.requestFullscreen();
      },
      "exitFullscreen": function () {
        return false;
        var _0x2604db = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
        _0x2604db.apply(document, []);
        return true;
      },
      "nextRAF": 0x0,
      "fakeRequestAnimationFrame": function (_0x503807) {
        var _0x54f1d8 = Date.now();
        _0x5409e2.nextRAF = _0x54f1d8 + 16.666666666666668;
        var _0x4be0fe = Math.max(0x0 - _0x54f1d8, 0x0);
        setTimeout(_0x503807, _0x4be0fe);
      },
      "requestAnimationFrame": function (_0x25549f) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(_0x25549f);
          return;
        }
        var _0x54b008 = _0x5409e2.fakeRequestAnimationFrame;
        _0x54b008(_0x25549f);
      },
      "safeSetTimeout": function (_0x896cf8) {
        return _0x25a779(_0x896cf8);
      },
      "safeRequestAnimationFrame": function (_0x1c90ce) {
        return _0x5409e2.requestAnimationFrame(function () {
          _0x2f8081(_0x1c90ce);
        });
      },
      "getMimetype": function (_0x1f720f) {
        return {
          "jpg": "image/jpeg",
          "jpeg": "image/jpeg",
          "png": "image/png",
          "bmp": "image/bmp",
          "ogg": "audio/ogg",
          "wav": "audio/wav",
          "mp3": "audio/mpeg"
        }[_0x1f720f.substr(_0x1f720f.lastIndexOf(".") + 0x1)];
      },
      "getUserMedia": function (_0x3c99d4) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
        }
        window.getUserMedia(_0x3c99d4);
      },
      "getMovementX": function (_0x12765e) {
        return _0x12765e.movementX || _0x12765e.mozMovementX || _0x12765e.webkitMovementX || 0x0;
      },
      "getMovementY": function (_0x112531) {
        return _0x112531.movementY || _0x112531.mozMovementY || _0x112531.webkitMovementY || 0x0;
      },
      "getMouseWheelDelta": function (_0x3ee2ca) {
        var _0x4b595f = 0x0;
        switch (_0x3ee2ca.type) {
          case "DOMMouseScroll":
            _0x4b595f = _0x3ee2ca.detail / 0x3;
            break;
          case "mousewheel":
            _0x4b595f = _0x3ee2ca.wheelDelta / 0x78;
            break;
          case "wheel":
            _0x4b595f = _0x3ee2ca.deltaY;
            switch (_0x3ee2ca.deltaMode) {
              case 0x0:
                _0x4b595f /= 0x64;
                break;
              case 0x1:
                _0x4b595f /= 0x3;
                break;
              case 0x2:
                _0x4b595f *= 0x50;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + _0x3ee2ca.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + _0x3ee2ca.type;
        }
        return _0x4b595f;
      },
      "mouseX": 0x0,
      "mouseY": 0x0,
      "mouseMovementX": 0x0,
      "mouseMovementY": 0x0,
      "touches": {},
      "lastTouches": {},
      "calculateMouseEvent": function (_0x129ec1) {
        var _0x2642cd = _0x3d91d8.canvas.getBoundingClientRect();
        var _0x239e66 = _0x3d91d8.canvas.width;
        var _0x54b72e = _0x3d91d8.canvas.height;
        var _0x5b9d8b = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
        var _0x17d237 = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x129ec1.type === "touchstart" || _0x129ec1.type === "touchend" || _0x129ec1.type === "touchmove") {
          var _0x5a08da = _0x129ec1.touch;
          if (_0x5a08da === undefined) {
            return;
          }
          var _0x151210 = _0x5a08da.pageX - (_0x5b9d8b + _0x2642cd.left);
          var _0x453aad = _0x5a08da.pageY - (_0x17d237 + _0x2642cd.top);
          _0x151210 = _0x151210 * (_0x239e66 / _0x2642cd.width);
          _0x453aad = _0x453aad * (_0x54b72e / _0x2642cd.height);
          var _0xaf4179 = {
            "x": _0x151210,
            "y": _0x453aad
          };
          if (_0x129ec1.type === "touchstart") {
            _0x5409e2.lastTouches[_0x5a08da.identifier] = _0xaf4179;
            _0x5409e2.touches[_0x5a08da.identifier] = _0xaf4179;
          } else {
            if (_0x129ec1.type === "touchend" || _0x129ec1.type === "touchmove") {
              var _0x586c07 = _0x5409e2.touches[_0x5a08da.identifier];
              if (!_0x586c07) {
                _0x586c07 = _0xaf4179;
              }
              _0x5409e2.lastTouches[_0x5a08da.identifier] = _0x586c07;
              _0x5409e2.touches[_0x5a08da.identifier] = _0xaf4179;
            }
          }
          return;
        }
        var _0x3586f9 = _0x129ec1.pageX - (_0x5b9d8b + _0x2642cd.left);
        var _0x11dedc = _0x129ec1.pageY - (_0x17d237 + _0x2642cd.top);
        _0x3586f9 = _0x3586f9 * (_0x239e66 / _0x2642cd.width);
        _0x11dedc = _0x11dedc * (_0x54b72e / _0x2642cd.height);
        _0x5409e2.mouseMovementX = _0x3586f9 - 0x0;
        _0x5409e2.mouseMovementY = _0x11dedc - 0x0;
        _0x5409e2.mouseX = _0x3586f9;
        _0x5409e2.mouseY = _0x11dedc;
      },
      "resizeListeners": [],
      "updateResizeListeners": function () {
        var _0x4f0d4e = _0x3d91d8.canvas;
        _0x5409e2.resizeListeners.forEach(function (_0x48cb1d) {
          _0x48cb1d(_0x4f0d4e.width, _0x4f0d4e.height);
        });
      },
      "setCanvasSize": function (_0x4eeccf, _0x3284a9, _0x260891) {
        var _0x5890ea = _0x3d91d8.canvas;
        _0x5409e2.updateCanvasDimensions(_0x5890ea, _0x4eeccf, _0x3284a9);
        if (!_0x260891) {
          _0x5409e2.updateResizeListeners();
        }
      },
      "windowedWidth": 0x0,
      "windowedHeight": 0x0,
      "setFullscreenCanvasSize": function () {
        if (typeof SDL != "undefined") {
          var _0x2aff52 = _0x1524e2[SDL.screen >> 0x2];
          _0x2aff52 = _0x2aff52 | 0x800000;
          _0xb9f33b[SDL.screen >> 0x2] = _0x2aff52;
        }
        _0x5409e2.updateCanvasDimensions(_0x3d91d8.canvas);
        _0x5409e2.updateResizeListeners();
      },
      "setWindowedCanvasSize": function () {
        if (typeof SDL != "undefined") {
          var _0x2283eb = _0x1524e2[SDL.screen >> 0x2];
          _0x2283eb = _0x2283eb & -8388609;
          _0xb9f33b[SDL.screen >> 0x2] = _0x2283eb;
        }
        _0x5409e2.updateCanvasDimensions(_0x3d91d8.canvas);
        _0x5409e2.updateResizeListeners();
      },
      "updateCanvasDimensions": function (_0x1548fb, _0x289449, _0xba7da9) {
        if (_0x289449 && _0xba7da9) {
          _0x1548fb.widthNative = _0x289449;
          _0x1548fb.heightNative = _0xba7da9;
        } else {
          _0x289449 = _0x1548fb.widthNative;
          _0xba7da9 = _0x1548fb.heightNative;
        }
        var _0xbe92f0 = _0x289449;
        var _0x50fde7 = _0xba7da9;
        if (_0x3d91d8.forcedAspectRatio && _0x3d91d8.forcedAspectRatio > 0x0) {
          if (_0xbe92f0 / _0x50fde7 < _0x3d91d8.forcedAspectRatio) {
            _0xbe92f0 = Math.round(_0x50fde7 * _0x3d91d8.forcedAspectRatio);
          } else {
            _0x50fde7 = Math.round(_0xbe92f0 / _0x3d91d8.forcedAspectRatio);
          }
        }
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x1548fb.parentNode && typeof screen != "undefined") {
          var _0x23cc82 = Math.min(screen.width / _0xbe92f0, screen.height / _0x50fde7);
          _0xbe92f0 = Math.round(_0xbe92f0 * _0x23cc82);
          _0x50fde7 = Math.round(_0x50fde7 * _0x23cc82);
        }
        if (_0x5409e2.resizeCanvas) {
          if (_0x1548fb.width != _0xbe92f0) {
            _0x1548fb.width = _0xbe92f0;
          }
          if (_0x1548fb.height != _0x50fde7) {
            _0x1548fb.height = _0x50fde7;
          }
          if (typeof _0x1548fb.style != "undefined") {
            _0x1548fb.style.removeProperty("width");
            _0x1548fb.style.removeProperty("height");
          }
        } else {
          if (_0x1548fb.width != _0x289449) {
            _0x1548fb.width = _0x289449;
          }
          if (_0x1548fb.height != _0xba7da9) {
            _0x1548fb.height = _0xba7da9;
          }
          if (typeof _0x1548fb.style != "undefined") {
            if (_0xbe92f0 != _0x289449 || _0x50fde7 != _0xba7da9) {
              _0x1548fb.style.setProperty("width", _0xbe92f0 + "px", "important");
              _0x1548fb.style.setProperty("height", _0x50fde7 + "px", "important");
            } else {
              _0x1548fb.style.removeProperty("width");
              _0x1548fb.style.removeProperty("height");
            }
          }
        }
      }
    };
    var _0x5b87a8 = {
      "inEventHandler": 0x0,
      "removeAllEventListeners": function () {
        for (var _0x252a54 = _0x5b87a8.eventHandlers.length - 0x1; _0x252a54 >= 0x0; --_0x252a54) {
          _0x5b87a8._removeHandler(_0x252a54);
        }
        _0x5b87a8.eventHandlers = [];
        _0x5b87a8.deferredCalls = [];
      },
      "registerRemoveEventListeners": function () {
        if (!_0x5b87a8.removeEventListenersRegistered) {
          _0x57f62b.push(_0x5b87a8.removeAllEventListeners);
          _0x5b87a8.removeEventListenersRegistered = true;
        }
      },
      "deferredCalls": [],
      "deferCall": function (_0x5bfd8f, _0x50e91e, _0x17f84e) {
        function _0x26f8d9(_0x5e1e3e, _0x76452c) {
          if (_0x5e1e3e.length != _0x76452c.length) {
            return false;
          }
          for (var _0x37a747 in _0x5e1e3e) {
            if (_0x5e1e3e[_0x37a747] != _0x76452c[_0x37a747]) {
              return false;
            }
          }
          return true;
        }
        for (var _0x10b0d1 in _0x5b87a8.deferredCalls) {
          var _0x3bd25c = _0x5b87a8.deferredCalls[_0x10b0d1];
          if (_0x3bd25c.targetFunction == _0x5bfd8f && _0x26f8d9(_0x3bd25c.argsList, _0x17f84e)) {
            return;
          }
        }
        _0x5b87a8.deferredCalls.push({
          "targetFunction": _0x5bfd8f,
          "precedence": _0x50e91e,
          "argsList": _0x17f84e
        });
        _0x5b87a8.deferredCalls.sort(function (_0xd01f43, _0xaa68aa) {
          return _0xd01f43.precedence < _0xaa68aa.precedence;
        });
      },
      "removeDeferredCalls": function (_0x38f15a) {
        for (var _0x413550 = 0x0; _0x413550 < _0x5b87a8.deferredCalls.length; ++_0x413550) {
          if (_0x5b87a8.deferredCalls[_0x413550].targetFunction == _0x38f15a) {
            _0x5b87a8.deferredCalls.splice(_0x413550, 0x1);
            --_0x413550;
          }
        }
      },
      "canPerformEventHandlerRequests": function () {
        return 0x0 && _0x5b87a8.currentEventHandler.allowsDeferredCalls;
      },
      "runDeferredCalls": function () {
        if (!(0x0 && _0x5b87a8.currentEventHandler.allowsDeferredCalls)) {
          return;
        }
        for (var _0x29b093 = 0x0; _0x29b093 < _0x5b87a8.deferredCalls.length; ++_0x29b093) {
          var _0x364adb = _0x5b87a8.deferredCalls[_0x29b093];
          _0x5b87a8.deferredCalls.splice(_0x29b093, 0x1);
          --_0x29b093;
          _0x364adb.targetFunction.apply(null, _0x364adb.argsList);
        }
      },
      "eventHandlers": [],
      "removeAllHandlersOnTarget": function (_0x461fd3, _0x389536) {
        for (var _0x508b96 = 0x0; _0x508b96 < _0x5b87a8.eventHandlers.length; ++_0x508b96) {
          if (_0x5b87a8.eventHandlers[_0x508b96].target == _0x461fd3 && (!_0x389536 || _0x389536 == _0x5b87a8.eventHandlers[_0x508b96].eventTypeString)) {
            _0x5b87a8._removeHandler(_0x508b96--);
          }
        }
      },
      "_removeHandler": function (_0x5bc85e) {
        var _0x567e83 = _0x5b87a8.eventHandlers[_0x5bc85e];
        _0x567e83.target.removeEventListener(_0x567e83.eventTypeString, _0x567e83.eventListenerFunc, _0x567e83.useCapture);
        _0x5b87a8.eventHandlers.splice(_0x5bc85e, 0x1);
      },
      "registerOrRemoveHandler": function (_0x144463) {
        var _0x2bae6b = function _0x130ccc(_0x3cde1c) {
          ++0x0;
          _0x5b87a8.currentEventHandler = _0x144463;
          _0x5b87a8.runDeferredCalls();
          _0x144463.handlerFunc(_0x3cde1c);
          _0x5b87a8.runDeferredCalls();
          --0x0;
        };
        if (_0x144463.callbackfunc) {
          _0x144463.eventListenerFunc = _0x2bae6b;
          _0x144463.target.addEventListener(_0x144463.eventTypeString, _0x2bae6b, _0x144463.useCapture);
          _0x5b87a8.eventHandlers.push(_0x144463);
          _0x5b87a8.registerRemoveEventListeners();
        } else {
          for (var _0x3e0d91 = 0x0; _0x3e0d91 < _0x5b87a8.eventHandlers.length; ++_0x3e0d91) {
            if (_0x5b87a8.eventHandlers[_0x3e0d91].target == _0x144463.target && _0x5b87a8.eventHandlers[_0x3e0d91].eventTypeString == _0x144463.eventTypeString) {
              _0x5b87a8._removeHandler(_0x3e0d91--);
            }
          }
        }
      },
      "getNodeNameForTarget": function (_0x5b32a6) {
        if (!_0x5b32a6) {
          return '';
        }
        if (_0x5b32a6 == window) {
          return "#window";
        }
        if (_0x5b32a6 == screen) {
          return "#screen";
        }
        return _0x5b32a6 && _0x5b32a6.nodeName ? _0x5b32a6.nodeName : '';
      },
      "fullscreenEnabled": function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    function _0x2f770a(_0x4bcd3a) {
      var _0x194326 = _0x4bcd3a.getExtension("ANGLE_instanced_arrays");
      if (_0x194326) {
        _0x4bcd3a.vertexAttribDivisor = function (_0xe4906f, _0x9aab0c) {
          _0x194326.vertexAttribDivisorANGLE(_0xe4906f, _0x9aab0c);
        };
        _0x4bcd3a.drawArraysInstanced = function (_0x5b7e34, _0x36b937, _0x29bdba, _0x322803) {
          _0x194326.drawArraysInstancedANGLE(_0x5b7e34, _0x36b937, _0x29bdba, _0x322803);
        };
        _0x4bcd3a.drawElementsInstanced = function (_0xe4e459, _0x573807, _0x430856, _0x25215f, _0x42fdda) {
          _0x194326.drawElementsInstancedANGLE(_0xe4e459, _0x573807, _0x430856, _0x25215f, _0x42fdda);
        };
        return 0x1;
      }
    }
    function _0x788aeb(_0x32ee4f) {
      var _0x3027b8 = _0x32ee4f.getExtension("OES_vertex_array_object");
      if (_0x3027b8) {
        _0x32ee4f.createVertexArray = function () {
          return _0x3027b8.createVertexArrayOES();
        };
        _0x32ee4f.deleteVertexArray = function (_0x2e4573) {
          _0x3027b8.deleteVertexArrayOES(_0x2e4573);
        };
        _0x32ee4f.bindVertexArray = function (_0x3e1bba) {
          _0x3027b8.bindVertexArrayOES(_0x3e1bba);
        };
        _0x32ee4f.isVertexArray = function (_0x42bd80) {
          return _0x3027b8.isVertexArrayOES(_0x42bd80);
        };
        return 0x1;
      }
    }
    function _0x516643(_0x1896b2) {
      var _0x56cda6 = _0x1896b2.getExtension("WEBGL_draw_buffers");
      if (_0x56cda6) {
        _0x1896b2.drawBuffers = function (_0x4d9f1a, _0x57b573) {
          _0x56cda6.drawBuffersWEBGL(_0x4d9f1a, _0x57b573);
        };
        return 0x1;
      }
    }
    function _0x164e29(_0x27cb19) {
      return !!(_0x27cb19.dibvbi = _0x27cb19.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0x2f1048(_0x15f2b8) {
      return !!(_0x15f2b8.mdibvbi = _0x15f2b8.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0xc47062(_0x1c030c) {
      return !!(_0x1c030c.multiDrawWebgl = _0x1c030c.getExtension("WEBGL_multi_draw"));
    }
    var _0x4debd4 = {
      "counter": 0x1,
      "buffers": [],
      "mappedBuffers": {},
      "programs": [],
      "framebuffers": [],
      "renderbuffers": [],
      "textures": [],
      "shaders": [],
      "vaos": [],
      "contexts": [],
      "offscreenCanvases": {},
      "queries": [],
      "samplers": [],
      "transformFeedbacks": [],
      "syncs": [],
      "byteSizeByTypeRoot": 0x1400,
      "byteSizeByType": [0x1, 0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2, 0x3, 0x4, 0x8],
      "stringCache": {},
      "stringiCache": {},
      "unpackAlignment": 0x4,
      "recordError": function _0xff56df(_0x168c9a) {
        if (!_0x4debd4.lastError) {
          _0x4debd4.lastError = _0x168c9a;
        }
      },
      "getNewId": function (_0x3d94d0) {
        var _0x54839d = 0x1++;
        for (var _0x3d95db = _0x3d94d0.length; _0x3d95db < _0x54839d; _0x3d95db++) {
          _0x3d94d0[_0x3d95db] = null;
        }
        return _0x54839d;
      },
      "MAX_TEMP_BUFFER_SIZE": 0x200000,
      "numTempVertexBuffersPerSize": 0x40,
      "log2ceilLookup": function (_0x3725fd) {
        return 0x20 - Math.clz32(_0x3725fd === 0x0 ? 0x0 : _0x3725fd - 0x1);
      },
      "generateTempBuffers": function (_0x464c46, _0x15f7cd) {
        var _0x6095b = 0x20 - Math.clz32(2097151);
        _0x15f7cd.tempVertexBufferCounters1 = [];
        _0x15f7cd.tempVertexBufferCounters2 = [];
        _0x15f7cd.tempVertexBufferCounters1.length = _0x15f7cd.tempVertexBufferCounters2.length = _0x6095b + 0x1;
        _0x15f7cd.tempVertexBuffers1 = [];
        _0x15f7cd.tempVertexBuffers2 = [];
        _0x15f7cd.tempVertexBuffers1.length = _0x15f7cd.tempVertexBuffers2.length = _0x6095b + 0x1;
        _0x15f7cd.tempIndexBuffers = [];
        _0x15f7cd.tempIndexBuffers.length = _0x6095b + 0x1;
        for (var _0x2d2ae4 = 0x0; _0x2d2ae4 <= _0x6095b; ++_0x2d2ae4) {
          _0x15f7cd.tempIndexBuffers[_0x2d2ae4] = null;
          _0x15f7cd.tempVertexBufferCounters1[_0x2d2ae4] = _0x15f7cd.tempVertexBufferCounters2[_0x2d2ae4] = 0x0;
          _0x15f7cd.tempVertexBuffers1[_0x2d2ae4] = [];
          _0x15f7cd.tempVertexBuffers2[_0x2d2ae4] = [];
          var _0x4f93e0 = _0x15f7cd.tempVertexBuffers1[_0x2d2ae4];
          var _0x4948c3 = _0x15f7cd.tempVertexBuffers2[_0x2d2ae4];
          _0x4f93e0.length = _0x4948c3.length = 0x40;
          for (var _0x52dc79 = 0x0; _0x52dc79 < 0x40; ++_0x52dc79) {
            _0x4f93e0[_0x52dc79] = _0x4948c3[_0x52dc79] = null;
          }
        }
        if (_0x464c46) {
          _0x15f7cd.tempQuadIndexBuffer = _0x180466.createBuffer();
          _0x15f7cd.GLctx.bindBuffer(0x8893, _0x15f7cd.tempQuadIndexBuffer);
          var _0x5090a0 = new Uint16Array(1048576);
          var _0x2d2ae4 = 0x0;
          var _0x54a51e = 0x0;
          while (0x1) {
            _0x5090a0[_0x2d2ae4++] = _0x54a51e;
            if (_0x2d2ae4 >= 1048576) {
              break;
            }
            _0x5090a0[_0x2d2ae4++] = _0x54a51e + 0x1;
            if (_0x2d2ae4 >= 1048576) {
              break;
            }
            _0x5090a0[_0x2d2ae4++] = _0x54a51e + 0x2;
            if (_0x2d2ae4 >= 1048576) {
              break;
            }
            _0x5090a0[_0x2d2ae4++] = _0x54a51e;
            if (_0x2d2ae4 >= 1048576) {
              break;
            }
            _0x5090a0[_0x2d2ae4++] = _0x54a51e + 0x2;
            if (_0x2d2ae4 >= 1048576) {
              break;
            }
            _0x5090a0[_0x2d2ae4++] = _0x54a51e + 0x3;
            if (_0x2d2ae4 >= 1048576) {
              break;
            }
            _0x54a51e += 0x4;
          }
          _0x15f7cd.GLctx.bufferData(0x8893, _0x5090a0, 0x88e4);
          _0x15f7cd.GLctx.bindBuffer(0x8893, null);
        }
      },
      "getTempVertexBuffer": function _0x5ed1e5(_0x42953a) {
        var _0x2e7b02 = 0x20 - Math.clz32(_0x42953a === 0x0 ? 0x0 : _0x42953a - 0x1);
        var _0x32b973 = _0x4debd4.currentContext.tempVertexBuffers1[_0x2e7b02];
        var _0x239c30 = _0x4debd4.currentContext.tempVertexBufferCounters1[_0x2e7b02];
        _0x4debd4.currentContext.tempVertexBufferCounters1[_0x2e7b02] = _0x4debd4.currentContext.tempVertexBufferCounters1[_0x2e7b02] + 0x1 & 63;
        var _0x32eaab = _0x32b973[_0x239c30];
        if (_0x32eaab) {
          return _0x32eaab;
        }
        var _0x15c49b = _0x180466.getParameter(0x8894);
        _0x32b973[_0x239c30] = _0x180466.createBuffer();
        _0x180466.bindBuffer(0x8892, _0x32b973[_0x239c30]);
        _0x180466.bufferData(0x8892, 0x1 << _0x2e7b02, 0x88e8);
        _0x180466.bindBuffer(0x8892, _0x15c49b);
        return _0x32b973[_0x239c30];
      },
      "getTempIndexBuffer": function _0xf6541f(_0x5b340c) {
        var _0x395162 = 0x20 - Math.clz32(_0x5b340c === 0x0 ? 0x0 : _0x5b340c - 0x1);
        var _0x723396 = _0x4debd4.currentContext.tempIndexBuffers[_0x395162];
        if (_0x723396) {
          return _0x723396;
        }
        var _0x47b9d9 = _0x180466.getParameter(0x8895);
        _0x4debd4.currentContext.tempIndexBuffers[_0x395162] = _0x180466.createBuffer();
        _0x180466.bindBuffer(0x8893, _0x4debd4.currentContext.tempIndexBuffers[_0x395162]);
        _0x180466.bufferData(0x8893, 0x1 << _0x395162, 0x88e8);
        _0x180466.bindBuffer(0x8893, _0x47b9d9);
        return _0x4debd4.currentContext.tempIndexBuffers[_0x395162];
      },
      "newRenderingFrameStarted": function _0x434243() {
        if (!_0x4debd4.currentContext) {
          return;
        }
        var _0x509a54 = _0x4debd4.currentContext.tempVertexBuffers1;
        _0x4debd4.currentContext.tempVertexBuffers1 = _0x4debd4.currentContext.tempVertexBuffers2;
        _0x4debd4.currentContext.tempVertexBuffers2 = _0x509a54;
        _0x509a54 = _0x4debd4.currentContext.tempVertexBufferCounters1;
        _0x4debd4.currentContext.tempVertexBufferCounters1 = _0x4debd4.currentContext.tempVertexBufferCounters2;
        _0x4debd4.currentContext.tempVertexBufferCounters2 = _0x509a54;
        var _0x3da8e6 = 0x20 - Math.clz32(2097151);
        for (var _0x121751 = 0x0; _0x121751 <= _0x3da8e6; ++_0x121751) {
          _0x4debd4.currentContext.tempVertexBufferCounters1[_0x121751] = 0x0;
        }
      },
      "getSource": function (_0x5314e5, _0xcc54e9, _0x560c6d, _0x76740b) {
        var _0x3aa211 = '';
        for (var _0x4e3209 = 0x0; _0x4e3209 < _0xcc54e9; ++_0x4e3209) {
          var _0x2823e0 = _0x76740b ? _0xb9f33b[_0x76740b + _0x4e3209 * 0x4 >> 0x2] : -0x1;
          _0x3aa211 += _0xb9f33b[_0x560c6d + _0x4e3209 * 0x4 >> 0x2] ? _0x4ee57d(_0x26daaf, _0xb9f33b[_0x560c6d + _0x4e3209 * 0x4 >> 0x2], _0x2823e0 < 0x0 ? undefined : _0x2823e0) : '';
        }
        return _0x3aa211;
      },
      "calcBufLength": function _0x5200e9(_0x3062e1, _0x122154, _0x2cd96a, _0x1d3ffc) {
        if (_0x2cd96a > 0x0) {
          return _0x1d3ffc * _0x2cd96a;
        }
        var _0x40f714 = _0x4debd4.byteSizeByType[_0x122154 - 0x1400];
        return _0x3062e1 * _0x40f714 * _0x1d3ffc;
      },
      "usedTempBuffers": [],
      "preDrawHandleClientVertexAttribBindings": function _0x21a4fb(_0x2c60a3) {
        _0x4debd4.resetBufferBinding = false;
        for (var _0x357d60 = 0x0; _0x357d60 < _0x4debd4.currentContext.maxVertexAttribs; ++_0x357d60) {
          var _0x2748aa = _0x4debd4.currentContext.clientBuffers[_0x357d60];
          if (!_0x2748aa.clientside || !_0x2748aa.enabled) {
            continue;
          }
          _0x4debd4.resetBufferBinding = true;
          var _0xa6f560 = _0x4debd4.calcBufLength(_0x2748aa.size, _0x2748aa.type, _0x2748aa.stride, _0x2c60a3);
          var _0x5acb3f = _0x4debd4.getTempVertexBuffer(_0xa6f560);
          _0x180466.bindBuffer(0x8892, _0x5acb3f);
          _0x180466.bufferSubData(0x8892, 0x0, _0x26daaf.subarray(_0x2748aa.ptr, _0x2748aa.ptr + _0xa6f560));
          _0x2748aa.vertexAttribPointerAdaptor.call(_0x180466, _0x357d60, _0x2748aa.size, _0x2748aa.type, _0x2748aa.normalized, _0x2748aa.stride, 0x0);
        }
      },
      "postDrawHandleClientVertexAttribBindings": function _0x75add7() {
        if (_0x4debd4.resetBufferBinding) {
          _0x180466.bindBuffer(0x8892, _0x4debd4.buffers[_0x180466.currentArrayBufferBinding]);
        }
      },
      "createContext": function (_0x546b48, _0x1aa6f1) {
        if (!_0x546b48.getContextSafariWebGL2Fixed) {
          _0x546b48.getContextSafariWebGL2Fixed = _0x546b48.getContext;
          function _0x577ced(_0xe01025, _0x2f7e79) {
            var _0x1e1316 = _0x546b48.getContextSafariWebGL2Fixed(_0xe01025, _0x2f7e79);
            return _0xe01025 == "webgl" == _0x1e1316 instanceof WebGLRenderingContext ? _0x1e1316 : null;
          }
          _0x546b48.getContext = _0x577ced;
        }
        var _0x42b72e = _0x1aa6f1.majorVersion > 0x1 ? _0x546b48.getContext("webgl2", _0x1aa6f1) : _0x546b48.getContext("webgl", _0x1aa6f1);
        if (!_0x42b72e) {
          return 0x0;
        }
        var _0x2a7058 = _0x4debd4.registerContext(_0x42b72e, _0x1aa6f1);
        return _0x2a7058;
      },
      "registerContext": function (_0x1c0cbe, _0x11da19) {
        var _0x421ba1 = _0x4debd4.getNewId(_0x4debd4.contexts);
        var _0x477f04 = {
          "handle": _0x421ba1,
          "attributes": _0x11da19,
          "version": _0x11da19.majorVersion,
          "GLctx": _0x1c0cbe
        };
        if (_0x1c0cbe.canvas) {
          _0x1c0cbe.canvas.GLctxObject = _0x477f04;
        }
        _0x4debd4.contexts[_0x421ba1] = _0x477f04;
        if (typeof _0x11da19.enableExtensionsByDefault == "undefined" || _0x11da19.enableExtensionsByDefault) {
          _0x4debd4.initExtensions(_0x477f04);
        }
        _0x477f04.maxVertexAttribs = _0x477f04.GLctx.getParameter(0x8869);
        _0x477f04.clientBuffers = [];
        for (var _0x43f5c9 = 0x0; _0x43f5c9 < _0x477f04.maxVertexAttribs; _0x43f5c9++) {
          _0x477f04.clientBuffers[_0x43f5c9] = {
            "enabled": false,
            "clientside": false,
            "size": 0x0,
            "type": 0x0,
            "normalized": 0x0,
            "stride": 0x0,
            "ptr": 0x0,
            "vertexAttribPointerAdaptor": null
          };
        }
        _0x4debd4.generateTempBuffers(false, _0x477f04);
        return _0x421ba1;
      },
      "makeContextCurrent": function (_0xee69dc) {
        _0x4debd4.currentContext = _0x4debd4.contexts[_0xee69dc];
        _0x3d91d8.ctx = _0x180466 = _0x4debd4.currentContext && _0x4debd4.currentContext.GLctx;
        return !(_0xee69dc && !_0x180466);
      },
      "getContext": function (_0x2f415b) {
        return _0x4debd4.contexts[_0x2f415b];
      },
      "deleteContext": function (_0x427be1) {
        if (_0x4debd4.currentContext === _0x4debd4.contexts[_0x427be1]) {
          _0x4debd4.currentContext = null;
        }
        if (typeof _0x5b87a8 == "object") {
          _0x5b87a8.removeAllHandlersOnTarget(_0x4debd4.contexts[_0x427be1].GLctx.canvas);
        }
        if (_0x4debd4.contexts[_0x427be1] && _0x4debd4.contexts[_0x427be1].GLctx.canvas) {
          _0x4debd4.contexts[_0x427be1].GLctx.canvas.GLctxObject = undefined;
        }
        _0x4debd4.contexts[_0x427be1] = null;
      },
      "initExtensions": function (_0x1e9737) {
        if (!_0x1e9737) {
          _0x1e9737 = _0x4debd4.currentContext;
        }
        if (_0x1e9737.initExtensionsDone) {
          return;
        }
        _0x1e9737.initExtensionsDone = true;
        var _0x5181f9 = _0x1e9737.GLctx;
        _0x2f770a(_0x5181f9);
        _0x788aeb(_0x5181f9);
        _0x516643(_0x5181f9);
        _0x164e29(_0x5181f9);
        _0x2f1048(_0x5181f9);
        if (_0x1e9737.version >= 0x2) {
          _0x5181f9.disjointTimerQueryExt = _0x5181f9.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (_0x1e9737.version < 0x2 || !_0x5181f9.disjointTimerQueryExt) {
          _0x5181f9.disjointTimerQueryExt = _0x5181f9.getExtension("EXT_disjoint_timer_query");
        }
        _0xc47062(_0x5181f9);
        var _0x38c281 = _0x5181f9.getSupportedExtensions() || [];
        _0x38c281.forEach(function (_0x40b46a) {
          if (!_0x40b46a.includes("lose_context") && !_0x40b46a.includes("debug")) {
            _0x5181f9.getExtension(_0x40b46a);
          }
        });
      }
    };
    var _0x37035e = {};
    function _0x421de0() {
      if (!_0x421de0.strings) {
        var _0x37764e = (typeof navigator == "object" && navigator.languages && navigator.languages[0x0] || "C").replace("-", "_") + ".UTF-8";
        var _0x5f565e = {
          "USER": "web_user",
          "LOGNAME": "web_user",
          "PATH": "/",
          "PWD": "/",
          "HOME": "/home/web_user",
          "LANG": _0x37764e,
          "_": _0x452af0 || "./this.program"
        };
        for (var _0x221cfb in _0x37035e) {
          if (_0x37035e[_0x221cfb] === undefined) {
            delete _0x5f565e[_0x221cfb];
          } else {
            _0x5f565e[_0x221cfb] = _0x37035e[_0x221cfb];
          }
        }
        var _0x97e245 = [];
        for (var _0x221cfb in _0x5f565e) {
          _0x97e245.push(_0x221cfb + "=" + _0x5f565e[_0x221cfb]);
        }
        _0x421de0.strings = _0x97e245;
      }
      return _0x421de0.strings;
    }
    var _0x3de922 = [];
    var _0x443cce = [];
    var _0x10fa45 = [];
    var _0x3480f7 = function (_0x51836b, _0x4263bb, _0x28eade, _0x441f54) {
      if (!_0x51836b) {
        _0x51836b = this;
      }
      this.parent = _0x51836b;
      this.mount = _0x51836b.mount;
      this.mounted = null;
      this.id = 0x1++;
      this.name = _0x4263bb;
      this.mode = _0x28eade;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = _0x441f54;
    };
    Object.defineProperties(_0x3480f7.prototype, {
      "read": {
        "get": function () {
          return (this.mode & 365) === 365;
        },
        "set": function (_0x42771a) {
          if (_0x42771a) {
            this.mode |= 365;
          } else {
            this.mode &= -366;
          }
        }
      },
      "write": {
        "get": function () {
          return (this.mode & 0x92) === 0x92;
        },
        "set": function (_0x26aa4a) {
          if (_0x26aa4a) {
            this.mode |= 0x92;
          } else {
            this.mode &= -147;
          }
        }
      },
      "isFolder": {
        "get": function () {
          return (this.mode & 0xf000) === 0x4000;
        }
      },
      "isDevice": {
        "get": function () {
          return (this.mode & 0xf000) === 0x2000;
        }
      }
    });
    _0x3a9ca2.FSNode = _0x3480f7;
    _0x3a9ca2.staticInit();
    _0x3d91d8.FS_createPath = _0x3a9ca2.createPath;
    _0x3d91d8.FS_createDataFile = _0x3a9ca2.createDataFile;
    _0x3d91d8.requestFullscreen = function _0x5f1c06(_0x5d4ed8, _0x289d45) {
      _0x5409e2.requestFullscreen(_0x5d4ed8, _0x289d45);
    };
    _0x3d91d8.requestAnimationFrame = function _0x22f868(_0x49d2c1) {
      _0x5409e2.requestAnimationFrame(_0x49d2c1);
    };
    _0x3d91d8.setCanvasSize = function _0xb4261c(_0x210e09, _0x20a009, _0x1cca96) {
      _0x5409e2.setCanvasSize(_0x210e09, _0x20a009, _0x1cca96);
    };
    _0x3d91d8.pauseMainLoop = function _0x46d5a6() {
      _0x5409e2.mainLoop.pause();
    };
    _0x3d91d8.resumeMainLoop = function _0x2f62fa() {
      _0x5409e2.mainLoop.resume();
    };
    _0x3d91d8.getUserMedia = function _0x220933() {
      _0x5409e2.getUserMedia();
    };
    _0x3d91d8.createContext = function _0x5ce6f8(_0x2ac9ac, _0x4342d9, _0x3dbf8f, _0x461f94) {
      return _0x5409e2.createContext(_0x2ac9ac, _0x4342d9, _0x3dbf8f, _0x461f94);
    };
    var _0x180466;
    for (var _0x3c3f94 = 0x0; _0x3c3f94 < 0x20; ++_0x3c3f94) {
      _0x3de922.push(new Array(_0x3c3f94));
    }
    var _0x20c03a = new Float32Array(0x120);
    for (var _0x3c3f94 = 0x0; _0x3c3f94 < 0x120; ++_0x3c3f94) {
      _0x443cce[_0x3c3f94] = _0x20c03a.subarray(0x0, _0x3c3f94 + 0x1);
    }
    var _0x4f69b7 = new Int32Array(0x120);
    for (var _0x3c3f94 = 0x0; _0x3c3f94 < 0x120; ++_0x3c3f94) {
      _0x10fa45[_0x3c3f94] = _0x4f69b7.subarray(0x0, _0x3c3f94 + 0x1);
    }
    function _0x5ec4f3(_0x4f4eaf, _0x1a4398, _0x104dc8) {
      var _0x3814fa = _0x104dc8 > 0x0 ? _0x104dc8 : _0x26e3e9(_0x4f4eaf) + 0x1;
      var _0x306297 = new Array(_0x3814fa);
      var _0x38ccf5 = _0x5b3420(_0x4f4eaf, _0x306297, 0x0, _0x306297.length);
      if (_0x1a4398) {
        _0x306297.length = _0x38ccf5;
      }
      return _0x306297;
    }
    var _0xd524d9 = _0x3d91d8.___wasm_call_ctors = function () {
      return (_0xd524d9 = _0x3d91d8.___wasm_call_ctors = _0x3d91d8.asm.__wasm_call_ctors).apply(null, arguments);
    };
    var _0x15750c = _0x3d91d8._ReleaseKeys = function () {
      return (_0x15750c = _0x3d91d8._ReleaseKeys = _0x3d91d8.asm.ReleaseKeys).apply(null, arguments);
    };
    var _0x2c5133 = _0x3d91d8._getMemInfo = function () {
      return (_0x2c5133 = _0x3d91d8._getMemInfo = _0x3d91d8.asm.getMemInfo).apply(null, arguments);
    };
    var _0x14792d = _0x3d91d8._SendMessageFloat = function () {
      return (_0x14792d = _0x3d91d8._SendMessageFloat = _0x3d91d8.asm.SendMessageFloat).apply(null, arguments);
    };
    var _0x3633b6 = _0x3d91d8._SendMessageString = function () {
      return (_0x3633b6 = _0x3d91d8._SendMessageString = _0x3d91d8.asm.SendMessageString).apply(null, arguments);
    };
    var _0x492f09 = _0x3d91d8._SendMessage = function () {
      return (_0x492f09 = _0x3d91d8._SendMessage = _0x3d91d8.asm.SendMessage).apply(null, arguments);
    };
    var _0x3efb22 = _0x3d91d8._SetFullscreen = function () {
      return (_0x3efb22 = _0x3d91d8._SetFullscreen = _0x3d91d8.asm.SetFullscreen).apply(null, arguments);
    };
    var _0x59e253 = _0x3d91d8._main = function () {
      return (_0x59e253 = _0x3d91d8._main = _0x3d91d8.asm.main).apply(null, arguments);
    };
    var _0x4b72d3 = _0x3d91d8.___errno_location = function () {
      return (_0x4b72d3 = _0x3d91d8.___errno_location = _0x3d91d8.asm.__errno_location).apply(null, arguments);
    };
    var _0x492944 = _0x3d91d8.___dl_seterr = function () {
      return (_0x492944 = _0x3d91d8.___dl_seterr = _0x3d91d8.asm.__dl_seterr).apply(null, arguments);
    };
    var _0x3c2f0a = _0x3d91d8._htonl = function () {
      return (_0x3c2f0a = _0x3d91d8._htonl = _0x3d91d8.asm.htonl).apply(null, arguments);
    };
    var _0x44bde7 = _0x3d91d8._htons = function () {
      return (_0x44bde7 = _0x3d91d8._htons = _0x3d91d8.asm.htons).apply(null, arguments);
    };
    var _0x31a13a = _0x3d91d8._ntohs = function () {
      return (_0x31a13a = _0x3d91d8._ntohs = _0x3d91d8.asm.ntohs).apply(null, arguments);
    };
    var _0x33cc92 = _0x3d91d8._strlen = function () {
      return (_0x33cc92 = _0x3d91d8._strlen = _0x3d91d8.asm.strlen).apply(null, arguments);
    };
    var _0x44e6b1 = _0x3d91d8._malloc = function () {
      return (_0x44e6b1 = _0x3d91d8._malloc = _0x3d91d8.asm.malloc).apply(null, arguments);
    };
    var _0x348983 = _0x3d91d8._free = function () {
      return (_0x348983 = _0x3d91d8._free = _0x3d91d8.asm.free).apply(null, arguments);
    };
    var _0x17603e = _0x3d91d8._emscripten_builtin_memalign = function () {
      return (_0x17603e = _0x3d91d8._emscripten_builtin_memalign = _0x3d91d8.asm.emscripten_builtin_memalign).apply(null, arguments);
    };
    var _0x2c7518 = _0x3d91d8._setThrew = function () {
      return (_0x2c7518 = _0x3d91d8._setThrew = _0x3d91d8.asm.setThrew).apply(null, arguments);
    };
    var _0x375f9a = _0x3d91d8._saveSetjmp = function () {
      return (_0x375f9a = _0x3d91d8._saveSetjmp = _0x3d91d8.asm.saveSetjmp).apply(null, arguments);
    };
    var _0x51b548 = _0x3d91d8.stackSave = function () {
      return (_0x51b548 = _0x3d91d8.stackSave = _0x3d91d8.asm.stackSave).apply(null, arguments);
    };
    var _0x868cb0 = _0x3d91d8.stackRestore = function () {
      return (_0x868cb0 = _0x3d91d8.stackRestore = _0x3d91d8.asm.stackRestore).apply(null, arguments);
    };
    var _0x45ad2c = _0x3d91d8.stackAlloc = function () {
      return (_0x45ad2c = _0x3d91d8.stackAlloc = _0x3d91d8.asm.stackAlloc).apply(null, arguments);
    };
    var _0x5c18b5 = _0x3d91d8.___cxa_can_catch = function () {
      return (_0x5c18b5 = _0x3d91d8.___cxa_can_catch = _0x3d91d8.asm.__cxa_can_catch).apply(null, arguments);
    };
    var _0x279359 = _0x3d91d8.___cxa_is_pointer_type = function () {
      return (_0x279359 = _0x3d91d8.___cxa_is_pointer_type = _0x3d91d8.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    var _0x4a4911 = _0x3d91d8.dynCall_iidiiii = function () {
      return (_0x4a4911 = _0x3d91d8.dynCall_iidiiii = _0x3d91d8.asm.dynCall_iidiiii).apply(null, arguments);
    };
    var _0xe23ed4 = _0x3d91d8.dynCall_vii = function () {
      return (_0xe23ed4 = _0x3d91d8.dynCall_vii = _0x3d91d8.asm.dynCall_vii).apply(null, arguments);
    };
    var _0x48f11b = _0x3d91d8.dynCall_iiii = function () {
      return (_0x48f11b = _0x3d91d8.dynCall_iiii = _0x3d91d8.asm.dynCall_iiii).apply(null, arguments);
    };
    var _0x4fa1f1 = _0x3d91d8.dynCall_iii = function () {
      return (_0x4fa1f1 = _0x3d91d8.dynCall_iii = _0x3d91d8.asm.dynCall_iii).apply(null, arguments);
    };
    var _0x3a5bed = _0x3d91d8.dynCall_ii = function () {
      return (_0x3a5bed = _0x3d91d8.dynCall_ii = _0x3d91d8.asm.dynCall_ii).apply(null, arguments);
    };
    var _0x555877 = _0x3d91d8.dynCall_jiji = function () {
      return (_0x555877 = _0x3d91d8.dynCall_jiji = _0x3d91d8.asm.dynCall_jiji).apply(null, arguments);
    };
    var _0x23aaa7 = _0x3d91d8.dynCall_vi = function () {
      return (_0x23aaa7 = _0x3d91d8.dynCall_vi = _0x3d91d8.asm.dynCall_vi).apply(null, arguments);
    };
    var _0x22ad08 = _0x3d91d8.dynCall_iiiii = function () {
      return (_0x22ad08 = _0x3d91d8.dynCall_iiiii = _0x3d91d8.asm.dynCall_iiiii).apply(null, arguments);
    };
    var _0x205e46 = _0x3d91d8.dynCall_viii = function () {
      return (_0x205e46 = _0x3d91d8.dynCall_viii = _0x3d91d8.asm.dynCall_viii).apply(null, arguments);
    };
    var _0x4c7cc8 = _0x3d91d8.dynCall_v = function () {
      return (_0x4c7cc8 = _0x3d91d8.dynCall_v = _0x3d91d8.asm.dynCall_v).apply(null, arguments);
    };
    var _0x4ef4cf = _0x3d91d8.dynCall_viiiiii = function () {
      return (_0x4ef4cf = _0x3d91d8.dynCall_viiiiii = _0x3d91d8.asm.dynCall_viiiiii).apply(null, arguments);
    };
    var _0x66bde9 = _0x3d91d8.dynCall_viiiii = function () {
      return (_0x66bde9 = _0x3d91d8.dynCall_viiiii = _0x3d91d8.asm.dynCall_viiiii).apply(null, arguments);
    };
    var _0x35d2f4 = _0x3d91d8.dynCall_viiii = function () {
      return (_0x35d2f4 = _0x3d91d8.dynCall_viiii = _0x3d91d8.asm.dynCall_viiii).apply(null, arguments);
    };
    var _0x1658e8 = _0x3d91d8.dynCall_iiiiii = function () {
      return (_0x1658e8 = _0x3d91d8.dynCall_iiiiii = _0x3d91d8.asm.dynCall_iiiiii).apply(null, arguments);
    };
    var _0x12645b = _0x3d91d8.dynCall_iiiiiiii = function () {
      return (_0x12645b = _0x3d91d8.dynCall_iiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiii).apply(null, arguments);
    };
    var _0x5494e1 = _0x3d91d8.dynCall_iiijiii = function () {
      return (_0x5494e1 = _0x3d91d8.dynCall_iiijiii = _0x3d91d8.asm.dynCall_iiijiii).apply(null, arguments);
    };
    var _0x1dd2aa = _0x3d91d8.dynCall_iij = function () {
      return (_0x1dd2aa = _0x3d91d8.dynCall_iij = _0x3d91d8.asm.dynCall_iij).apply(null, arguments);
    };
    var _0x5d1cdf = _0x3d91d8.dynCall_i = function () {
      return (_0x5d1cdf = _0x3d91d8.dynCall_i = _0x3d91d8.asm.dynCall_i).apply(null, arguments);
    };
    var _0x1c1b91 = _0x3d91d8.dynCall_iiiiiii = function () {
      return (_0x1c1b91 = _0x3d91d8.dynCall_iiiiiii = _0x3d91d8.asm.dynCall_iiiiiii).apply(null, arguments);
    };
    var _0x2bc584 = _0x3d91d8.dynCall_jii = function () {
      return (_0x2bc584 = _0x3d91d8.dynCall_jii = _0x3d91d8.asm.dynCall_jii).apply(null, arguments);
    };
    var _0x4eecf3 = _0x3d91d8.dynCall_dii = function () {
      return (_0x4eecf3 = _0x3d91d8.dynCall_dii = _0x3d91d8.asm.dynCall_dii).apply(null, arguments);
    };
    var _0x5eee05 = _0x3d91d8.dynCall_fii = function () {
      return (_0x5eee05 = _0x3d91d8.dynCall_fii = _0x3d91d8.asm.dynCall_fii).apply(null, arguments);
    };
    var _0x59e964 = _0x3d91d8.dynCall_viiiiiiiiiiii = function () {
      return (_0x59e964 = _0x3d91d8.dynCall_viiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiii).apply(null, arguments);
    };
    var _0x381cd2 = _0x3d91d8.dynCall_viiiiiiiiiiiii = function () {
      return (_0x381cd2 = _0x3d91d8.dynCall_viiiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x176684 = _0x3d91d8.dynCall_viiiiiiiiiiiiii = function () {
      return (_0x176684 = _0x3d91d8.dynCall_viiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3f35af = _0x3d91d8.dynCall_viiiiiiiiiiiiiii = function () {
      return (_0x3f35af = _0x3d91d8.dynCall_viiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x243e74 = _0x3d91d8.dynCall_viiiiiiiiiiiiiiii = function () {
      return (_0x243e74 = _0x3d91d8.dynCall_viiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x2f71bf = _0x3d91d8.dynCall_viiiiiiiiiiiiiiiii = function () {
      return (_0x2f71bf = _0x3d91d8.dynCall_viiiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x28b733 = _0x3d91d8.dynCall_viiiiiiiiiiiiiiiiii = function () {
      return (_0x28b733 = _0x3d91d8.dynCall_viiiiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x559237 = _0x3d91d8.dynCall_viiiiiiiiiiiiiiiiiii = function () {
      return (_0x559237 = _0x3d91d8.dynCall_viiiiiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x382325 = _0x3d91d8.dynCall_didi = function () {
      return (_0x382325 = _0x3d91d8.dynCall_didi = _0x3d91d8.asm.dynCall_didi).apply(null, arguments);
    };
    var _0x4ec90b = _0x3d91d8.dynCall_diii = function () {
      return (_0x4ec90b = _0x3d91d8.dynCall_diii = _0x3d91d8.asm.dynCall_diii).apply(null, arguments);
    };
    var _0x524339 = _0x3d91d8.dynCall_jiii = function () {
      return (_0x524339 = _0x3d91d8.dynCall_jiii = _0x3d91d8.asm.dynCall_jiii).apply(null, arguments);
    };
    var _0x1cb3af = _0x3d91d8.dynCall_fiii = function () {
      return (_0x1cb3af = _0x3d91d8.dynCall_fiii = _0x3d91d8.asm.dynCall_fiii).apply(null, arguments);
    };
    var _0xb8ac89 = _0x3d91d8.dynCall_fifi = function () {
      return (_0xb8ac89 = _0x3d91d8.dynCall_fifi = _0x3d91d8.asm.dynCall_fifi).apply(null, arguments);
    };
    var _0x2c5f28 = _0x3d91d8.dynCall_iiddi = function () {
      return (_0x2c5f28 = _0x3d91d8.dynCall_iiddi = _0x3d91d8.asm.dynCall_iiddi).apply(null, arguments);
    };
    var _0x5ee844 = _0x3d91d8.dynCall_diidi = function () {
      return (_0x5ee844 = _0x3d91d8.dynCall_diidi = _0x3d91d8.asm.dynCall_diidi).apply(null, arguments);
    };
    var _0x12054c = _0x3d91d8.dynCall_diiii = function () {
      return (_0x12054c = _0x3d91d8.dynCall_diiii = _0x3d91d8.asm.dynCall_diiii).apply(null, arguments);
    };
    var _0x3e6426 = _0x3d91d8.dynCall_jiiii = function () {
      return (_0x3e6426 = _0x3d91d8.dynCall_jiiii = _0x3d91d8.asm.dynCall_jiiii).apply(null, arguments);
    };
    var _0x31bf2b = _0x3d91d8.dynCall_fiiii = function () {
      return (_0x31bf2b = _0x3d91d8.dynCall_fiiii = _0x3d91d8.asm.dynCall_fiiii).apply(null, arguments);
    };
    var _0x3a3866 = _0x3d91d8.dynCall_jiiji = function () {
      return (_0x3a3866 = _0x3d91d8.dynCall_jiiji = _0x3d91d8.asm.dynCall_jiiji).apply(null, arguments);
    };
    var _0x5926cb = _0x3d91d8.dynCall_fiifi = function () {
      return (_0x5926cb = _0x3d91d8.dynCall_fiifi = _0x3d91d8.asm.dynCall_fiifi).apply(null, arguments);
    };
    var _0x192a0d = _0x3d91d8.dynCall_iiffi = function () {
      return (_0x192a0d = _0x3d91d8.dynCall_iiffi = _0x3d91d8.asm.dynCall_iiffi).apply(null, arguments);
    };
    var _0x194e44 = _0x3d91d8.dynCall_iiiifi = function () {
      return (_0x194e44 = _0x3d91d8.dynCall_iiiifi = _0x3d91d8.asm.dynCall_iiiifi).apply(null, arguments);
    };
    var _0x3854ec = _0x3d91d8.dynCall_iiiidii = function () {
      return (_0x3854ec = _0x3d91d8.dynCall_iiiidii = _0x3d91d8.asm.dynCall_iiiidii).apply(null, arguments);
    };
    var _0x110d3a = _0x3d91d8.dynCall_iiiijii = function () {
      return (_0x110d3a = _0x3d91d8.dynCall_iiiijii = _0x3d91d8.asm.dynCall_iiiijii).apply(null, arguments);
    };
    var _0x3f9864 = _0x3d91d8.dynCall_j = function () {
      return (_0x3f9864 = _0x3d91d8.dynCall_j = _0x3d91d8.asm.dynCall_j).apply(null, arguments);
    };
    var _0x33e946 = _0x3d91d8.dynCall_ji = function () {
      return (_0x33e946 = _0x3d91d8.dynCall_ji = _0x3d91d8.asm.dynCall_ji).apply(null, arguments);
    };
    var _0x1979fa = _0x3d91d8.dynCall_iiijii = function () {
      return (_0x1979fa = _0x3d91d8.dynCall_iiijii = _0x3d91d8.asm.dynCall_iiijii).apply(null, arguments);
    };
    var _0x5a68e4 = _0x3d91d8.dynCall_viiji = function () {
      return (_0x5a68e4 = _0x3d91d8.dynCall_viiji = _0x3d91d8.asm.dynCall_viiji).apply(null, arguments);
    };
    var _0x501ede = _0x3d91d8.dynCall_iiifii = function () {
      return (_0x501ede = _0x3d91d8.dynCall_iiifii = _0x3d91d8.asm.dynCall_iiifii).apply(null, arguments);
    };
    var _0x17c7b4 = _0x3d91d8.dynCall_viifi = function () {
      return (_0x17c7b4 = _0x3d91d8.dynCall_viifi = _0x3d91d8.asm.dynCall_viifi).apply(null, arguments);
    };
    var _0x38c929 = _0x3d91d8.dynCall_iiiifii = function () {
      return (_0x38c929 = _0x3d91d8.dynCall_iiiifii = _0x3d91d8.asm.dynCall_iiiifii).apply(null, arguments);
    };
    var _0xed4576 = _0x3d91d8.dynCall_viji = function () {
      return (_0xed4576 = _0x3d91d8.dynCall_viji = _0x3d91d8.asm.dynCall_viji).apply(null, arguments);
    };
    var _0x59d649 = _0x3d91d8.dynCall_vifi = function () {
      return (_0x59d649 = _0x3d91d8.dynCall_vifi = _0x3d91d8.asm.dynCall_vifi).apply(null, arguments);
    };
    var _0x1c1819 = _0x3d91d8.dynCall_viijjii = function () {
      return (_0x1c1819 = _0x3d91d8.dynCall_viijjii = _0x3d91d8.asm.dynCall_viijjii).apply(null, arguments);
    };
    var _0x14e6c2 = _0x3d91d8.dynCall_viiiiiii = function () {
      return (_0x14e6c2 = _0x3d91d8.dynCall_viiiiiii = _0x3d91d8.asm.dynCall_viiiiiii).apply(null, arguments);
    };
    var _0x4b5c5d = _0x3d91d8.dynCall_viidi = function () {
      return (_0x4b5c5d = _0x3d91d8.dynCall_viidi = _0x3d91d8.asm.dynCall_viidi).apply(null, arguments);
    };
    var _0x3e1242 = _0x3d91d8.dynCall_viiidi = function () {
      return (_0x3e1242 = _0x3d91d8.dynCall_viiidi = _0x3d91d8.asm.dynCall_viiidi).apply(null, arguments);
    };
    var _0x24fe92 = _0x3d91d8.dynCall_viiiji = function () {
      return (_0x24fe92 = _0x3d91d8.dynCall_viiiji = _0x3d91d8.asm.dynCall_viiiji).apply(null, arguments);
    };
    var _0x38de22 = _0x3d91d8.dynCall_viiifi = function () {
      return (_0x38de22 = _0x3d91d8.dynCall_viiifi = _0x3d91d8.asm.dynCall_viiifi).apply(null, arguments);
    };
    var _0x594942 = _0x3d91d8.dynCall_viiiijii = function () {
      return (_0x594942 = _0x3d91d8.dynCall_viiiijii = _0x3d91d8.asm.dynCall_viiiijii).apply(null, arguments);
    };
    var _0x112673 = _0x3d91d8.dynCall_viiiiiiii = function () {
      return (_0x112673 = _0x3d91d8.dynCall_viiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiii).apply(null, arguments);
    };
    var _0x2f4a4a = _0x3d91d8.dynCall_viiiiiiiii = function () {
      return (_0x2f4a4a = _0x3d91d8.dynCall_viiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiii).apply(null, arguments);
    };
    var _0x21a749 = _0x3d91d8.dynCall_viiiiiiiiii = function () {
      return (_0x21a749 = _0x3d91d8.dynCall_viiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiii).apply(null, arguments);
    };
    var _0x53994f = _0x3d91d8.dynCall_viiiiiiiiiii = function () {
      return (_0x53994f = _0x3d91d8.dynCall_viiiiiiiiiii = _0x3d91d8.asm.dynCall_viiiiiiiiiii).apply(null, arguments);
    };
    var _0x6cf237 = _0x3d91d8.dynCall_iiiiiiiiii = function () {
      return (_0x6cf237 = _0x3d91d8.dynCall_iiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiii).apply(null, arguments);
    };
    var _0x43739f = _0x3d91d8.dynCall_iiiiiiiii = function () {
      return (_0x43739f = _0x3d91d8.dynCall_iiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiii).apply(null, arguments);
    };
    var _0x1d4705 = _0x3d91d8.dynCall_jjii = function () {
      return (_0x1d4705 = _0x3d91d8.dynCall_jjii = _0x3d91d8.asm.dynCall_jjii).apply(null, arguments);
    };
    var _0x5aba3a = _0x3d91d8.dynCall_ddiii = function () {
      return (_0x5aba3a = _0x3d91d8.dynCall_ddiii = _0x3d91d8.asm.dynCall_ddiii).apply(null, arguments);
    };
    var _0x432c07 = _0x3d91d8.dynCall_viiiifii = function () {
      return (_0x432c07 = _0x3d91d8.dynCall_viiiifii = _0x3d91d8.asm.dynCall_viiiifii).apply(null, arguments);
    };
    var _0xea8fd7 = _0x3d91d8.dynCall_viiidii = function () {
      return (_0xea8fd7 = _0x3d91d8.dynCall_viiidii = _0x3d91d8.asm.dynCall_viiidii).apply(null, arguments);
    };
    var _0x3ad730 = _0x3d91d8.dynCall_fiffffi = function () {
      return (_0x3ad730 = _0x3d91d8.dynCall_fiffffi = _0x3d91d8.asm.dynCall_fiffffi).apply(null, arguments);
    };
    var _0x58a954 = _0x3d91d8.dynCall_fiffi = function () {
      return (_0x58a954 = _0x3d91d8.dynCall_fiffi = _0x3d91d8.asm.dynCall_fiffi).apply(null, arguments);
    };
    var _0xc0d627 = _0x3d91d8.dynCall_fifffi = function () {
      return (_0xc0d627 = _0x3d91d8.dynCall_fifffi = _0x3d91d8.asm.dynCall_fifffi).apply(null, arguments);
    };
    var _0x13688e = _0x3d91d8.dynCall_idi = function () {
      return (_0x13688e = _0x3d91d8.dynCall_idi = _0x3d91d8.asm.dynCall_idi).apply(null, arguments);
    };
    var _0x5bdc53 = _0x3d91d8.dynCall_iji = function () {
      return (_0x5bdc53 = _0x3d91d8.dynCall_iji = _0x3d91d8.asm.dynCall_iji).apply(null, arguments);
    };
    var _0x39f2e9 = _0x3d91d8.dynCall_ifi = function () {
      return (_0x39f2e9 = _0x3d91d8.dynCall_ifi = _0x3d91d8.asm.dynCall_ifi).apply(null, arguments);
    };
    var _0x27e31a = _0x3d91d8.dynCall_ijji = function () {
      return (_0x27e31a = _0x3d91d8.dynCall_ijji = _0x3d91d8.asm.dynCall_ijji).apply(null, arguments);
    };
    var _0x2532aa = _0x3d91d8.dynCall_jjji = function () {
      return (_0x2532aa = _0x3d91d8.dynCall_jjji = _0x3d91d8.asm.dynCall_jjji).apply(null, arguments);
    };
    var _0x541220 = _0x3d91d8.dynCall_iiiji = function () {
      return (_0x541220 = _0x3d91d8.dynCall_iiiji = _0x3d91d8.asm.dynCall_iiiji).apply(null, arguments);
    };
    var _0x4162a4 = _0x3d91d8.dynCall_jdi = function () {
      return (_0x4162a4 = _0x3d91d8.dynCall_jdi = _0x3d91d8.asm.dynCall_jdi).apply(null, arguments);
    };
    var _0x50d6cb = _0x3d91d8.dynCall_vijjji = function () {
      return (_0x50d6cb = _0x3d91d8.dynCall_vijjji = _0x3d91d8.asm.dynCall_vijjji).apply(null, arguments);
    };
    var _0x4986a2 = _0x3d91d8.dynCall_viijiiijiiii = function () {
      return (_0x4986a2 = _0x3d91d8.dynCall_viijiiijiiii = _0x3d91d8.asm.dynCall_viijiiijiiii).apply(null, arguments);
    };
    var _0x3f009a = _0x3d91d8.dynCall_vidi = function () {
      return (_0x3f009a = _0x3d91d8.dynCall_vidi = _0x3d91d8.asm.dynCall_vidi).apply(null, arguments);
    };
    var _0x5dd03e = _0x3d91d8.dynCall_fi = function () {
      return (_0x5dd03e = _0x3d91d8.dynCall_fi = _0x3d91d8.asm.dynCall_fi).apply(null, arguments);
    };
    var _0x31c212 = _0x3d91d8.dynCall_vifii = function () {
      return (_0x31c212 = _0x3d91d8.dynCall_vifii = _0x3d91d8.asm.dynCall_vifii).apply(null, arguments);
    };
    var _0x1e94f9 = _0x3d91d8.dynCall_fffi = function () {
      return (_0x1e94f9 = _0x3d91d8.dynCall_fffi = _0x3d91d8.asm.dynCall_fffi).apply(null, arguments);
    };
    var _0x49a23f = _0x3d91d8.dynCall_jji = function () {
      return (_0x49a23f = _0x3d91d8.dynCall_jji = _0x3d91d8.asm.dynCall_jji).apply(null, arguments);
    };
    var _0x3b278d = _0x3d91d8.dynCall_dddi = function () {
      return (_0x3b278d = _0x3d91d8.dynCall_dddi = _0x3d91d8.asm.dynCall_dddi).apply(null, arguments);
    };
    var _0x4333ed = _0x3d91d8.dynCall_iidi = function () {
      return (_0x4333ed = _0x3d91d8.dynCall_iidi = _0x3d91d8.asm.dynCall_iidi).apply(null, arguments);
    };
    var _0x18118f = _0x3d91d8.dynCall_iifi = function () {
      return (_0x18118f = _0x3d91d8.dynCall_iifi = _0x3d91d8.asm.dynCall_iifi).apply(null, arguments);
    };
    var _0x12486a = _0x3d91d8.dynCall_iiiiji = function () {
      return (_0x12486a = _0x3d91d8.dynCall_iiiiji = _0x3d91d8.asm.dynCall_iiiiji).apply(null, arguments);
    };
    var _0x5936ab = _0x3d91d8.dynCall_viidii = function () {
      return (_0x5936ab = _0x3d91d8.dynCall_viidii = _0x3d91d8.asm.dynCall_viidii).apply(null, arguments);
    };
    var _0x4a8d5c = _0x3d91d8.dynCall_viijii = function () {
      return (_0x4a8d5c = _0x3d91d8.dynCall_viijii = _0x3d91d8.asm.dynCall_viijii).apply(null, arguments);
    };
    var _0x37e3bd = _0x3d91d8.dynCall_iiji = function () {
      return (_0x37e3bd = _0x3d91d8.dynCall_iiji = _0x3d91d8.asm.dynCall_iiji).apply(null, arguments);
    };
    var _0x3ac926 = _0x3d91d8.dynCall_viijiii = function () {
      return (_0x3ac926 = _0x3d91d8.dynCall_viijiii = _0x3d91d8.asm.dynCall_viijiii).apply(null, arguments);
    };
    var _0x30d09a = _0x3d91d8.dynCall_vjiii = function () {
      return (_0x30d09a = _0x3d91d8.dynCall_vjiii = _0x3d91d8.asm.dynCall_vjiii).apply(null, arguments);
    };
    var _0x5ccb87 = _0x3d91d8.dynCall_vjiiiiii = function () {
      return (_0x5ccb87 = _0x3d91d8.dynCall_vjiiiiii = _0x3d91d8.asm.dynCall_vjiiiiii).apply(null, arguments);
    };
    var _0x38552f = _0x3d91d8.dynCall_vijiiii = function () {
      return (_0x38552f = _0x3d91d8.dynCall_vijiiii = _0x3d91d8.asm.dynCall_vijiiii).apply(null, arguments);
    };
    var _0x448634 = _0x3d91d8.dynCall_vijiii = function () {
      return (_0x448634 = _0x3d91d8.dynCall_vijiii = _0x3d91d8.asm.dynCall_vijiii).apply(null, arguments);
    };
    var _0x47bf4d = _0x3d91d8.dynCall_vijiiiiii = function () {
      return (_0x47bf4d = _0x3d91d8.dynCall_vijiiiiii = _0x3d91d8.asm.dynCall_vijiiiiii).apply(null, arguments);
    };
    var _0x2de283 = _0x3d91d8.dynCall_viiffi = function () {
      return (_0x2de283 = _0x3d91d8.dynCall_viiffi = _0x3d91d8.asm.dynCall_viiffi).apply(null, arguments);
    };
    var _0x1c6419 = _0x3d91d8.dynCall_viiiifi = function () {
      return (_0x1c6419 = _0x3d91d8.dynCall_viiiifi = _0x3d91d8.asm.dynCall_viiiifi).apply(null, arguments);
    };
    var _0x212ad5 = _0x3d91d8.dynCall_fiiffi = function () {
      return (_0x212ad5 = _0x3d91d8.dynCall_fiiffi = _0x3d91d8.asm.dynCall_fiiffi).apply(null, arguments);
    };
    var _0x226b1e = _0x3d91d8.dynCall_viiififii = function () {
      return (_0x226b1e = _0x3d91d8.dynCall_viiififii = _0x3d91d8.asm.dynCall_viiififii).apply(null, arguments);
    };
    var _0x1d37bd = _0x3d91d8.dynCall_viifii = function () {
      return (_0x1d37bd = _0x3d91d8.dynCall_viifii = _0x3d91d8.asm.dynCall_viifii).apply(null, arguments);
    };
    var _0x233dcc = _0x3d91d8.dynCall_iiifi = function () {
      return (_0x233dcc = _0x3d91d8.dynCall_iiifi = _0x3d91d8.asm.dynCall_iiifi).apply(null, arguments);
    };
    var _0x8e9c6 = _0x3d91d8.dynCall_iiiiiiiiiji = function () {
      return (_0x8e9c6 = _0x3d91d8.dynCall_iiiiiiiiiji = _0x3d91d8.asm.dynCall_iiiiiiiiiji).apply(null, arguments);
    };
    var _0x14f060 = _0x3d91d8.dynCall_vji = function () {
      return (_0x14f060 = _0x3d91d8.dynCall_vji = _0x3d91d8.asm.dynCall_vji).apply(null, arguments);
    };
    var _0x498cc2 = _0x3d91d8.dynCall_iijiiii = function () {
      return (_0x498cc2 = _0x3d91d8.dynCall_iijiiii = _0x3d91d8.asm.dynCall_iijiiii).apply(null, arguments);
    };
    var _0x1d68d5 = _0x3d91d8.dynCall_jijiii = function () {
      return (_0x1d68d5 = _0x3d91d8.dynCall_jijiii = _0x3d91d8.asm.dynCall_jijiii).apply(null, arguments);
    };
    var _0x16ba48 = _0x3d91d8.dynCall_iijiiiiii = function () {
      return (_0x16ba48 = _0x3d91d8.dynCall_iijiiiiii = _0x3d91d8.asm.dynCall_iijiiiiii).apply(null, arguments);
    };
    var _0x26fc1d = _0x3d91d8.dynCall_iijjiiiiii = function () {
      return (_0x26fc1d = _0x3d91d8.dynCall_iijjiiiiii = _0x3d91d8.asm.dynCall_iijjiiiiii).apply(null, arguments);
    };
    var _0x315b46 = _0x3d91d8.dynCall_iiiijjii = function () {
      return (_0x315b46 = _0x3d91d8.dynCall_iiiijjii = _0x3d91d8.asm.dynCall_iiiijjii).apply(null, arguments);
    };
    var _0x40b378 = _0x3d91d8.dynCall_iijii = function () {
      return (_0x40b378 = _0x3d91d8.dynCall_iijii = _0x3d91d8.asm.dynCall_iijii).apply(null, arguments);
    };
    var _0x170309 = _0x3d91d8.dynCall_viiiijiii = function () {
      return (_0x170309 = _0x3d91d8.dynCall_viiiijiii = _0x3d91d8.asm.dynCall_viiiijiii).apply(null, arguments);
    };
    var _0xe265c7 = _0x3d91d8.dynCall_vijiiiii = function () {
      return (_0xe265c7 = _0x3d91d8.dynCall_vijiiiii = _0x3d91d8.asm.dynCall_vijiiiii).apply(null, arguments);
    };
    var _0x3ba53f = _0x3d91d8.dynCall_iijji = function () {
      return (_0x3ba53f = _0x3d91d8.dynCall_iijji = _0x3d91d8.asm.dynCall_iijji).apply(null, arguments);
    };
    var _0x478e9b = _0x3d91d8.dynCall_dji = function () {
      return (_0x478e9b = _0x3d91d8.dynCall_dji = _0x3d91d8.asm.dynCall_dji).apply(null, arguments);
    };
    var _0x2d07b1 = _0x3d91d8.dynCall_iijiii = function () {
      return (_0x2d07b1 = _0x3d91d8.dynCall_iijiii = _0x3d91d8.asm.dynCall_iijiii).apply(null, arguments);
    };
    var _0x41141d = _0x3d91d8.dynCall_vijii = function () {
      return (_0x41141d = _0x3d91d8.dynCall_vijii = _0x3d91d8.asm.dynCall_vijii).apply(null, arguments);
    };
    var _0x117ba8 = _0x3d91d8.dynCall_jidi = function () {
      return (_0x117ba8 = _0x3d91d8.dynCall_jidi = _0x3d91d8.asm.dynCall_jidi).apply(null, arguments);
    };
    var _0x24feb1 = _0x3d91d8.dynCall_iiiiij = function () {
      return (_0x24feb1 = _0x3d91d8.dynCall_iiiiij = _0x3d91d8.asm.dynCall_iiiiij).apply(null, arguments);
    };
    var _0x2a0be9 = _0x3d91d8.dynCall_vjjjiiii = function () {
      return (_0x2a0be9 = _0x3d91d8.dynCall_vjjjiiii = _0x3d91d8.asm.dynCall_vjjjiiii).apply(null, arguments);
    };
    var _0x3aa2a9 = _0x3d91d8.dynCall_vjiiiii = function () {
      return (_0x3aa2a9 = _0x3d91d8.dynCall_vjiiiii = _0x3d91d8.asm.dynCall_vjiiiii).apply(null, arguments);
    };
    var _0x5756f4 = _0x3d91d8.dynCall_jijii = function () {
      return (_0x5756f4 = _0x3d91d8.dynCall_jijii = _0x3d91d8.asm.dynCall_jijii).apply(null, arguments);
    };
    var _0x39c62a = _0x3d91d8.dynCall_jiiiii = function () {
      return (_0x39c62a = _0x3d91d8.dynCall_jiiiii = _0x3d91d8.asm.dynCall_jiiiii).apply(null, arguments);
    };
    var _0x1365a8 = _0x3d91d8.dynCall_viffi = function () {
      return (_0x1365a8 = _0x3d91d8.dynCall_viffi = _0x3d91d8.asm.dynCall_viffi).apply(null, arguments);
    };
    var _0x1350d2 = _0x3d91d8.dynCall_vffi = function () {
      return (_0x1350d2 = _0x3d91d8.dynCall_vffi = _0x3d91d8.asm.dynCall_vffi).apply(null, arguments);
    };
    var _0x4d499a = _0x3d91d8.dynCall_viiifiii = function () {
      return (_0x4d499a = _0x3d91d8.dynCall_viiifiii = _0x3d91d8.asm.dynCall_viiifiii).apply(null, arguments);
    };
    var _0x24f386 = _0x3d91d8.dynCall_vifiiiii = function () {
      return (_0x24f386 = _0x3d91d8.dynCall_vifiiiii = _0x3d91d8.asm.dynCall_vifiiiii).apply(null, arguments);
    };
    var _0x1c6494 = _0x3d91d8.dynCall_viffffiiii = function () {
      return (_0x1c6494 = _0x3d91d8.dynCall_viffffiiii = _0x3d91d8.asm.dynCall_viffffiiii).apply(null, arguments);
    };
    var _0x1ca560 = _0x3d91d8.dynCall_vfiiiii = function () {
      return (_0x1ca560 = _0x3d91d8.dynCall_vfiiiii = _0x3d91d8.asm.dynCall_vfiiiii).apply(null, arguments);
    };
    var _0x6fd0d0 = _0x3d91d8.dynCall_vffffiiii = function () {
      return (_0x6fd0d0 = _0x3d91d8.dynCall_vffffiiii = _0x3d91d8.asm.dynCall_vffffiiii).apply(null, arguments);
    };
    var _0x12af75 = _0x3d91d8.dynCall_iifii = function () {
      return (_0x12af75 = _0x3d91d8.dynCall_iifii = _0x3d91d8.asm.dynCall_iifii).apply(null, arguments);
    };
    var _0x522c63 = _0x3d91d8.dynCall_viifffi = function () {
      return (_0x522c63 = _0x3d91d8.dynCall_viifffi = _0x3d91d8.asm.dynCall_viifffi).apply(null, arguments);
    };
    var _0x2bb202 = _0x3d91d8.dynCall_iiiiffi = function () {
      return (_0x2bb202 = _0x3d91d8.dynCall_iiiiffi = _0x3d91d8.asm.dynCall_iiiiffi).apply(null, arguments);
    };
    var _0x1fc9ce = _0x3d91d8.dynCall_iiiiiffi = function () {
      return (_0x1fc9ce = _0x3d91d8.dynCall_iiiiiffi = _0x3d91d8.asm.dynCall_iiiiiffi).apply(null, arguments);
    };
    var _0x1b41d3 = _0x3d91d8.dynCall_viiffffi = function () {
      return (_0x1b41d3 = _0x3d91d8.dynCall_viiffffi = _0x3d91d8.asm.dynCall_viiffffi).apply(null, arguments);
    };
    var _0x2e5a53 = _0x3d91d8.dynCall_viifffffffi = function () {
      return (_0x2e5a53 = _0x3d91d8.dynCall_viifffffffi = _0x3d91d8.asm.dynCall_viifffffffi).apply(null, arguments);
    };
    var _0x3f9efe = _0x3d91d8.dynCall_viifffffffffi = function () {
      return (_0x3f9efe = _0x3d91d8.dynCall_viifffffffffi = _0x3d91d8.asm.dynCall_viifffffffffi).apply(null, arguments);
    };
    var _0x3c5f11 = _0x3d91d8.dynCall_viiiffi = function () {
      return (_0x3c5f11 = _0x3d91d8.dynCall_viiiffi = _0x3d91d8.asm.dynCall_viiiffi).apply(null, arguments);
    };
    var _0x5c9862 = _0x3d91d8.dynCall_viiiiffi = function () {
      return (_0x5c9862 = _0x3d91d8.dynCall_viiiiffi = _0x3d91d8.asm.dynCall_viiiiffi).apply(null, arguments);
    };
    var _0x2fc39e = _0x3d91d8.dynCall_viiiiifi = function () {
      return (_0x2fc39e = _0x3d91d8.dynCall_viiiiifi = _0x3d91d8.asm.dynCall_viiiiifi).apply(null, arguments);
    };
    var _0x1820e9 = _0x3d91d8.dynCall_viiifii = function () {
      return (_0x1820e9 = _0x3d91d8.dynCall_viiifii = _0x3d91d8.asm.dynCall_viiifii).apply(null, arguments);
    };
    var _0x10c585 = _0x3d91d8.dynCall_ffi = function () {
      return (_0x10c585 = _0x3d91d8.dynCall_ffi = _0x3d91d8.asm.dynCall_ffi).apply(null, arguments);
    };
    var _0x22b563 = _0x3d91d8.dynCall_fiiffffi = function () {
      return (_0x22b563 = _0x3d91d8.dynCall_fiiffffi = _0x3d91d8.asm.dynCall_fiiffffi).apply(null, arguments);
    };
    var _0x57e6af = _0x3d91d8.dynCall_viffffi = function () {
      return (_0x57e6af = _0x3d91d8.dynCall_viffffi = _0x3d91d8.asm.dynCall_viffffi).apply(null, arguments);
    };
    var _0x4ac195 = _0x3d91d8.dynCall_viiiffffi = function () {
      return (_0x4ac195 = _0x3d91d8.dynCall_viiiffffi = _0x3d91d8.asm.dynCall_viiiffffi).apply(null, arguments);
    };
    var _0x1a7d5f = _0x3d91d8.dynCall_viffffii = function () {
      return (_0x1a7d5f = _0x3d91d8.dynCall_viffffii = _0x3d91d8.asm.dynCall_viffffii).apply(null, arguments);
    };
    var _0x1de361 = _0x3d91d8.dynCall_viffii = function () {
      return (_0x1de361 = _0x3d91d8.dynCall_viffii = _0x3d91d8.asm.dynCall_viffii).apply(null, arguments);
    };
    var _0x5e379d = _0x3d91d8.dynCall_vifffii = function () {
      return (_0x5e379d = _0x3d91d8.dynCall_vifffii = _0x3d91d8.asm.dynCall_vifffii).apply(null, arguments);
    };
    var _0x57a713 = _0x3d91d8.dynCall_viiiiiiifi = function () {
      return (_0x57a713 = _0x3d91d8.dynCall_viiiiiiifi = _0x3d91d8.asm.dynCall_viiiiiiifi).apply(null, arguments);
    };
    var _0x40cde0 = _0x3d91d8.dynCall_vifffffii = function () {
      return (_0x40cde0 = _0x3d91d8.dynCall_vifffffii = _0x3d91d8.asm.dynCall_vifffffii).apply(null, arguments);
    };
    var _0x2f56e6 = _0x3d91d8.dynCall_viiffiffi = function () {
      return (_0x2f56e6 = _0x3d91d8.dynCall_viiffiffi = _0x3d91d8.asm.dynCall_viiffiffi).apply(null, arguments);
    };
    var _0x4d2a2b = _0x3d91d8.dynCall_viiffifi = function () {
      return (_0x4d2a2b = _0x3d91d8.dynCall_viiffifi = _0x3d91d8.asm.dynCall_viiffifi).apply(null, arguments);
    };
    var _0x255dd0 = _0x3d91d8.dynCall_viiffii = function () {
      return (_0x255dd0 = _0x3d91d8.dynCall_viiffii = _0x3d91d8.asm.dynCall_viiffii).apply(null, arguments);
    };
    var _0x372ee5 = _0x3d91d8.dynCall_viifffiffi = function () {
      return (_0x372ee5 = _0x3d91d8.dynCall_viifffiffi = _0x3d91d8.asm.dynCall_viifffiffi).apply(null, arguments);
    };
    var _0x41e015 = _0x3d91d8.dynCall_viifffifi = function () {
      return (_0x41e015 = _0x3d91d8.dynCall_viifffifi = _0x3d91d8.asm.dynCall_viifffifi).apply(null, arguments);
    };
    var _0x48aedb = _0x3d91d8.dynCall_viifffii = function () {
      return (_0x48aedb = _0x3d91d8.dynCall_viifffii = _0x3d91d8.asm.dynCall_viifffii).apply(null, arguments);
    };
    var _0x4a426b = _0x3d91d8.dynCall_viiffffiffi = function () {
      return (_0x4a426b = _0x3d91d8.dynCall_viiffffiffi = _0x3d91d8.asm.dynCall_viiffffiffi).apply(null, arguments);
    };
    var _0x2afd44 = _0x3d91d8.dynCall_viiffffifi = function () {
      return (_0x2afd44 = _0x3d91d8.dynCall_viiffffifi = _0x3d91d8.asm.dynCall_viiffffifi).apply(null, arguments);
    };
    var _0x27c07e = _0x3d91d8.dynCall_viiffffii = function () {
      return (_0x27c07e = _0x3d91d8.dynCall_viiffffii = _0x3d91d8.asm.dynCall_viiffffii).apply(null, arguments);
    };
    var _0x1a8256 = _0x3d91d8.dynCall_iififfi = function () {
      return (_0x1a8256 = _0x3d91d8.dynCall_iififfi = _0x3d91d8.asm.dynCall_iififfi).apply(null, arguments);
    };
    var _0x470b2e = _0x3d91d8.dynCall_viiiiiiiffiii = function () {
      return (_0x470b2e = _0x3d91d8.dynCall_viiiiiiiffiii = _0x3d91d8.asm.dynCall_viiiiiiiffiii).apply(null, arguments);
    };
    var _0x3a85ca = _0x3d91d8.dynCall_iiiiffii = function () {
      return (_0x3a85ca = _0x3d91d8.dynCall_iiiiffii = _0x3d91d8.asm.dynCall_iiiiffii).apply(null, arguments);
    };
    var _0x21fd64 = _0x3d91d8.dynCall_iifiii = function () {
      return (_0x21fd64 = _0x3d91d8.dynCall_iifiii = _0x3d91d8.asm.dynCall_iifiii).apply(null, arguments);
    };
    var _0x329a70 = _0x3d91d8.dynCall_iiffiii = function () {
      return (_0x329a70 = _0x3d91d8.dynCall_iiffiii = _0x3d91d8.asm.dynCall_iiffiii).apply(null, arguments);
    };
    var _0x21e394 = _0x3d91d8.dynCall_iifffiii = function () {
      return (_0x21e394 = _0x3d91d8.dynCall_iifffiii = _0x3d91d8.asm.dynCall_iifffiii).apply(null, arguments);
    };
    var _0x507862 = _0x3d91d8.dynCall_vfi = function () {
      return (_0x507862 = _0x3d91d8.dynCall_vfi = _0x3d91d8.asm.dynCall_vfi).apply(null, arguments);
    };
    var _0x3f6baa = _0x3d91d8.dynCall_ffffi = function () {
      return (_0x3f6baa = _0x3d91d8.dynCall_ffffi = _0x3d91d8.asm.dynCall_ffffi).apply(null, arguments);
    };
    var _0x26b92d = _0x3d91d8.dynCall_ffffffi = function () {
      return (_0x26b92d = _0x3d91d8.dynCall_ffffffi = _0x3d91d8.asm.dynCall_ffffffi).apply(null, arguments);
    };
    var _0x4c779f = _0x3d91d8.dynCall_ffffffffi = function () {
      return (_0x4c779f = _0x3d91d8.dynCall_ffffffffi = _0x3d91d8.asm.dynCall_ffffffffi).apply(null, arguments);
    };
    var _0x2fd615 = _0x3d91d8.dynCall_fiifffi = function () {
      return (_0x2fd615 = _0x3d91d8.dynCall_fiifffi = _0x3d91d8.asm.dynCall_fiifffi).apply(null, arguments);
    };
    var _0x5db029 = _0x3d91d8.dynCall_fffii = function () {
      return (_0x5db029 = _0x3d91d8.dynCall_fffii = _0x3d91d8.asm.dynCall_fffii).apply(null, arguments);
    };
    var _0x1a3d1f = _0x3d91d8.dynCall_vifffi = function () {
      return (_0x1a3d1f = _0x3d91d8.dynCall_vifffi = _0x3d91d8.asm.dynCall_vifffi).apply(null, arguments);
    };
    var _0x17829f = _0x3d91d8.dynCall_viffiii = function () {
      return (_0x17829f = _0x3d91d8.dynCall_viffiii = _0x3d91d8.asm.dynCall_viffiii).apply(null, arguments);
    };
    var _0x337603 = _0x3d91d8.dynCall_iiiifffii = function () {
      return (_0x337603 = _0x3d91d8.dynCall_iiiifffii = _0x3d91d8.asm.dynCall_iiiifffii).apply(null, arguments);
    };
    var _0x55621a = _0x3d91d8.dynCall_fiiiifffi = function () {
      return (_0x55621a = _0x3d91d8.dynCall_fiiiifffi = _0x3d91d8.asm.dynCall_fiiiifffi).apply(null, arguments);
    };
    var _0x4b8f70 = _0x3d91d8.dynCall_viifffffi = function () {
      return (_0x4b8f70 = _0x3d91d8.dynCall_viifffffi = _0x3d91d8.asm.dynCall_viifffffi).apply(null, arguments);
    };
    var _0xbcf43f = _0x3d91d8.dynCall_fiffii = function () {
      return (_0xbcf43f = _0x3d91d8.dynCall_fiffii = _0x3d91d8.asm.dynCall_fiffii).apply(null, arguments);
    };
    var _0x386ed5 = _0x3d91d8.dynCall_viiiffiii = function () {
      return (_0x386ed5 = _0x3d91d8.dynCall_viiiffiii = _0x3d91d8.asm.dynCall_viiiffiii).apply(null, arguments);
    };
    var _0x22ad9c = _0x3d91d8.dynCall_fiiiffii = function () {
      return (_0x22ad9c = _0x3d91d8.dynCall_fiiiffii = _0x3d91d8.asm.dynCall_fiiiffii).apply(null, arguments);
    };
    var _0x592df3 = _0x3d91d8.dynCall_fiiiiiii = function () {
      return (_0x592df3 = _0x3d91d8.dynCall_fiiiiiii = _0x3d91d8.asm.dynCall_fiiiiiii).apply(null, arguments);
    };
    var _0x40caa2 = _0x3d91d8.dynCall_vijijijii = function () {
      return (_0x40caa2 = _0x3d91d8.dynCall_vijijijii = _0x3d91d8.asm.dynCall_vijijijii).apply(null, arguments);
    };
    var _0x5dc76e = _0x3d91d8.dynCall_iiidiiii = function () {
      return (_0x5dc76e = _0x3d91d8.dynCall_iiidiiii = _0x3d91d8.asm.dynCall_iiidiiii).apply(null, arguments);
    };
    var _0x489692 = _0x3d91d8.dynCall_viiijiii = function () {
      return (_0x489692 = _0x3d91d8.dynCall_viiijiii = _0x3d91d8.asm.dynCall_viiijiii).apply(null, arguments);
    };
    var _0x5003fd = _0x3d91d8.dynCall_iijiiiii = function () {
      return (_0x5003fd = _0x3d91d8.dynCall_iijiiiii = _0x3d91d8.asm.dynCall_iijiiiii).apply(null, arguments);
    };
    var _0x1b3d4f = _0x3d91d8.dynCall_iijiiiiiiii = function () {
      return (_0x1b3d4f = _0x3d91d8.dynCall_iijiiiiiiii = _0x3d91d8.asm.dynCall_iijiiiiiiii).apply(null, arguments);
    };
    var _0x4c5cb3 = _0x3d91d8.dynCall_viiiijiiiii = function () {
      return (_0x4c5cb3 = _0x3d91d8.dynCall_viiiijiiiii = _0x3d91d8.asm.dynCall_viiiijiiiii).apply(null, arguments);
    };
    var _0x59e861 = _0x3d91d8.dynCall_iiiiiiiiiii = function () {
      return (_0x59e861 = _0x3d91d8.dynCall_iiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiii).apply(null, arguments);
    };
    var _0x217387 = _0x3d91d8.dynCall_vidii = function () {
      return (_0x217387 = _0x3d91d8.dynCall_vidii = _0x3d91d8.asm.dynCall_vidii).apply(null, arguments);
    };
    var _0x49c8bb = _0x3d91d8.dynCall_viiidiiiii = function () {
      return (_0x49c8bb = _0x3d91d8.dynCall_viiidiiiii = _0x3d91d8.asm.dynCall_viiidiiiii).apply(null, arguments);
    };
    var _0x2caedb = _0x3d91d8.dynCall_vifiiii = function () {
      return (_0x2caedb = _0x3d91d8.dynCall_vifiiii = _0x3d91d8.asm.dynCall_vifiiii).apply(null, arguments);
    };
    var _0x567528 = _0x3d91d8.dynCall_iiiffi = function () {
      return (_0x567528 = _0x3d91d8.dynCall_iiiffi = _0x3d91d8.asm.dynCall_iiiffi).apply(null, arguments);
    };
    var _0x106304 = _0x3d91d8.dynCall_iiffii = function () {
      return (_0x106304 = _0x3d91d8.dynCall_iiffii = _0x3d91d8.asm.dynCall_iiffii).apply(null, arguments);
    };
    var _0x4ff2d = _0x3d91d8.dynCall_iiifiii = function () {
      return (_0x4ff2d = _0x3d91d8.dynCall_iiifiii = _0x3d91d8.asm.dynCall_iiifiii).apply(null, arguments);
    };
    var _0x4c9e38 = _0x3d91d8.dynCall_iiififii = function () {
      return (_0x4c9e38 = _0x3d91d8.dynCall_iiififii = _0x3d91d8.asm.dynCall_iiififii).apply(null, arguments);
    };
    var _0x46f1eb = _0x3d91d8.dynCall_iiifiiiii = function () {
      return (_0x46f1eb = _0x3d91d8.dynCall_iiifiiiii = _0x3d91d8.asm.dynCall_iiifiiiii).apply(null, arguments);
    };
    var _0x10a518 = _0x3d91d8.dynCall_iiffifiiii = function () {
      return (_0x10a518 = _0x3d91d8.dynCall_iiffifiiii = _0x3d91d8.asm.dynCall_iiffifiiii).apply(null, arguments);
    };
    var _0xc85771 = _0x3d91d8.dynCall_iifiifiiii = function () {
      return (_0xc85771 = _0x3d91d8.dynCall_iifiifiiii = _0x3d91d8.asm.dynCall_iifiifiiii).apply(null, arguments);
    };
    var _0x4bc096 = _0x3d91d8.dynCall_iiiifiii = function () {
      return (_0x4bc096 = _0x3d91d8.dynCall_iiiifiii = _0x3d91d8.asm.dynCall_iiiifiii).apply(null, arguments);
    };
    var _0x51ff83 = _0x3d91d8.dynCall_iiifiiii = function () {
      return (_0x51ff83 = _0x3d91d8.dynCall_iiifiiii = _0x3d91d8.asm.dynCall_iiifiiii).apply(null, arguments);
    };
    var _0x5f11e1 = _0x3d91d8.dynCall_iiiffiii = function () {
      return (_0x5f11e1 = _0x3d91d8.dynCall_iiiffiii = _0x3d91d8.asm.dynCall_iiiffiii).apply(null, arguments);
    };
    var _0x1f0352 = _0x3d91d8.dynCall_iiiiifii = function () {
      return (_0x1f0352 = _0x3d91d8.dynCall_iiiiifii = _0x3d91d8.asm.dynCall_iiiiifii).apply(null, arguments);
    };
    var _0x37d039 = _0x3d91d8.dynCall_iifiifffii = function () {
      return (_0x37d039 = _0x3d91d8.dynCall_iifiifffii = _0x3d91d8.asm.dynCall_iifiifffii).apply(null, arguments);
    };
    var _0x232a84 = _0x3d91d8.dynCall_fiifii = function () {
      return (_0x232a84 = _0x3d91d8.dynCall_fiifii = _0x3d91d8.asm.dynCall_fiifii).apply(null, arguments);
    };
    var _0x55a783 = _0x3d91d8.dynCall_viiiiiifiifiiii = function () {
      return (_0x55a783 = _0x3d91d8.dynCall_viiiiiifiifiiii = _0x3d91d8.asm.dynCall_viiiiiifiifiiii).apply(null, arguments);
    };
    var _0x267b9f = _0x3d91d8.dynCall_iiffffiii = function () {
      return (_0x267b9f = _0x3d91d8.dynCall_iiffffiii = _0x3d91d8.asm.dynCall_iiffffiii).apply(null, arguments);
    };
    var _0x2c0d58 = _0x3d91d8.dynCall_iiidfi = function () {
      return (_0x2c0d58 = _0x3d91d8.dynCall_iiidfi = _0x3d91d8.asm.dynCall_iiidfi).apply(null, arguments);
    };
    var _0x5ada1b = _0x3d91d8.dynCall_iiijfi = function () {
      return (_0x5ada1b = _0x3d91d8.dynCall_iiijfi = _0x3d91d8.asm.dynCall_iiijfi).apply(null, arguments);
    };
    var _0x3de97f = _0x3d91d8.dynCall_iiiffii = function () {
      return (_0x3de97f = _0x3d91d8.dynCall_iiiffii = _0x3d91d8.asm.dynCall_iiiffii).apply(null, arguments);
    };
    var _0x1e6eab = _0x3d91d8.dynCall_iifffi = function () {
      return (_0x1e6eab = _0x3d91d8.dynCall_iifffi = _0x3d91d8.asm.dynCall_iifffi).apply(null, arguments);
    };
    var _0x5a21e8 = _0x3d91d8.dynCall_iiiififi = function () {
      return (_0x5a21e8 = _0x3d91d8.dynCall_iiiififi = _0x3d91d8.asm.dynCall_iiiififi).apply(null, arguments);
    };
    var _0x2345d1 = _0x3d91d8.dynCall_iiiffifiiii = function () {
      return (_0x2345d1 = _0x3d91d8.dynCall_iiiffifiiii = _0x3d91d8.asm.dynCall_iiiffifiiii).apply(null, arguments);
    };
    var _0x55a596 = _0x3d91d8.dynCall_iiifiifiii = function () {
      return (_0x55a596 = _0x3d91d8.dynCall_iiifiifiii = _0x3d91d8.asm.dynCall_iiifiifiii).apply(null, arguments);
    };
    var _0x59d94a = _0x3d91d8.dynCall_iiifiifiiiii = function () {
      return (_0x59d94a = _0x3d91d8.dynCall_iiifiifiiiii = _0x3d91d8.asm.dynCall_iiifiifiiiii).apply(null, arguments);
    };
    var _0x475925 = _0x3d91d8.dynCall_ifii = function () {
      return (_0x475925 = _0x3d91d8.dynCall_ifii = _0x3d91d8.asm.dynCall_ifii).apply(null, arguments);
    };
    var _0x540d0f = _0x3d91d8.dynCall_ifffii = function () {
      return (_0x540d0f = _0x3d91d8.dynCall_ifffii = _0x3d91d8.asm.dynCall_ifffii).apply(null, arguments);
    };
    var _0x2f5d55 = _0x3d91d8.dynCall_ffffii = function () {
      return (_0x2f5d55 = _0x3d91d8.dynCall_ffffii = _0x3d91d8.asm.dynCall_ffffii).apply(null, arguments);
    };
    var _0xc1b1bb = _0x3d91d8.dynCall_ffffifi = function () {
      return (_0xc1b1bb = _0x3d91d8.dynCall_ffffifi = _0x3d91d8.asm.dynCall_ffffifi).apply(null, arguments);
    };
    var _0x4a459d = _0x3d91d8.dynCall_ffffiffi = function () {
      return (_0x4a459d = _0x3d91d8.dynCall_ffffiffi = _0x3d91d8.asm.dynCall_ffffiffi).apply(null, arguments);
    };
    var _0x51d4d4 = _0x3d91d8.dynCall_viiififi = function () {
      return (_0x51d4d4 = _0x3d91d8.dynCall_viiififi = _0x3d91d8.asm.dynCall_viiififi).apply(null, arguments);
    };
    var _0x531e29 = _0x3d91d8.dynCall_viiififfi = function () {
      return (_0x531e29 = _0x3d91d8.dynCall_viiififfi = _0x3d91d8.asm.dynCall_viiififfi).apply(null, arguments);
    };
    var _0x359405 = _0x3d91d8.dynCall_ifiii = function () {
      return (_0x359405 = _0x3d91d8.dynCall_ifiii = _0x3d91d8.asm.dynCall_ifiii).apply(null, arguments);
    };
    var _0x15191 = _0x3d91d8.dynCall_vifiii = function () {
      return (_0x15191 = _0x3d91d8.dynCall_vifiii = _0x3d91d8.asm.dynCall_vifiii).apply(null, arguments);
    };
    var _0x2e2ddb = _0x3d91d8.dynCall_iifiiiiii = function () {
      return (_0x2e2ddb = _0x3d91d8.dynCall_iifiiiiii = _0x3d91d8.asm.dynCall_iifiiiiii).apply(null, arguments);
    };
    var _0x6e2c98 = _0x3d91d8.dynCall_iifiiiii = function () {
      return (_0x6e2c98 = _0x3d91d8.dynCall_iifiiiii = _0x3d91d8.asm.dynCall_iifiiiii).apply(null, arguments);
    };
    var _0x2c5e5c = _0x3d91d8.dynCall_iiffiiiii = function () {
      return (_0x2c5e5c = _0x3d91d8.dynCall_iiffiiiii = _0x3d91d8.asm.dynCall_iiffiiiii).apply(null, arguments);
    };
    var _0x272d15 = _0x3d91d8.dynCall_iiffifiii = function () {
      return (_0x272d15 = _0x3d91d8.dynCall_iiffifiii = _0x3d91d8.asm.dynCall_iiffifiii).apply(null, arguments);
    };
    var _0x1eaf75 = _0x3d91d8.dynCall_iifiifiii = function () {
      return (_0x1eaf75 = _0x3d91d8.dynCall_iifiifiii = _0x3d91d8.asm.dynCall_iifiifiii).apply(null, arguments);
    };
    var _0x3ec463 = _0x3d91d8.dynCall_iififi = function () {
      return (_0x3ec463 = _0x3d91d8.dynCall_iififi = _0x3d91d8.asm.dynCall_iififi).apply(null, arguments);
    };
    var _0x2392b8 = _0x3d91d8.dynCall_iiififi = function () {
      return (_0x2392b8 = _0x3d91d8.dynCall_iiififi = _0x3d91d8.asm.dynCall_iiififi).apply(null, arguments);
    };
    var _0x30a759 = _0x3d91d8.dynCall_iiiiifiiii = function () {
      return (_0x30a759 = _0x3d91d8.dynCall_iiiiifiiii = _0x3d91d8.asm.dynCall_iiiiifiiii).apply(null, arguments);
    };
    var _0x597cf3 = _0x3d91d8.dynCall_viidiii = function () {
      return (_0x597cf3 = _0x3d91d8.dynCall_viidiii = _0x3d91d8.asm.dynCall_viidiii).apply(null, arguments);
    };
    var _0x53dec6 = _0x3d91d8.dynCall_fiifdi = function () {
      return (_0x53dec6 = _0x3d91d8.dynCall_fiifdi = _0x3d91d8.asm.dynCall_fiifdi).apply(null, arguments);
    };
    var _0x17c0e5 = _0x3d91d8.dynCall_viiiiiifddfiiii = function () {
      return (_0x17c0e5 = _0x3d91d8.dynCall_viiiiiifddfiiii = _0x3d91d8.asm.dynCall_viiiiiifddfiiii).apply(null, arguments);
    };
    var _0x24b0f5 = _0x3d91d8.dynCall_fiifji = function () {
      return (_0x24b0f5 = _0x3d91d8.dynCall_fiifji = _0x3d91d8.asm.dynCall_fiifji).apply(null, arguments);
    };
    var _0x43be11 = _0x3d91d8.dynCall_viiiiiifjjfiiii = function () {
      return (_0x43be11 = _0x3d91d8.dynCall_viiiiiifjjfiiii = _0x3d91d8.asm.dynCall_viiiiiifjjfiiii).apply(null, arguments);
    };
    var _0x18e556 = _0x3d91d8.dynCall_viiiifiii = function () {
      return (_0x18e556 = _0x3d91d8.dynCall_viiiifiii = _0x3d91d8.asm.dynCall_viiiifiii).apply(null, arguments);
    };
    var _0x389769 = _0x3d91d8.dynCall_viifiii = function () {
      return (_0x389769 = _0x3d91d8.dynCall_viifiii = _0x3d91d8.asm.dynCall_viifiii).apply(null, arguments);
    };
    var _0x4b8b0e = _0x3d91d8.dynCall_viiiiiiffffiiii = function () {
      return (_0x4b8b0e = _0x3d91d8.dynCall_viiiiiiffffiiii = _0x3d91d8.asm.dynCall_viiiiiiffffiiii).apply(null, arguments);
    };
    var _0x4f9c41 = _0x3d91d8.dynCall_viifiiii = function () {
      return (_0x4f9c41 = _0x3d91d8.dynCall_viifiiii = _0x3d91d8.asm.dynCall_viifiiii).apply(null, arguments);
    };
    var _0x42f75c = _0x3d91d8.dynCall_iiiiifiii = function () {
      return (_0x42f75c = _0x3d91d8.dynCall_iiiiifiii = _0x3d91d8.asm.dynCall_iiiiifiii).apply(null, arguments);
    };
    var _0x1d9bd6 = _0x3d91d8.dynCall_fffffi = function () {
      return (_0x1d9bd6 = _0x3d91d8.dynCall_fffffi = _0x3d91d8.asm.dynCall_fffffi).apply(null, arguments);
    };
    var _0x1b563a = _0x3d91d8.dynCall_fffifffi = function () {
      return (_0x1b563a = _0x3d91d8.dynCall_fffifffi = _0x3d91d8.asm.dynCall_fffifffi).apply(null, arguments);
    };
    var _0x46bbcc = _0x3d91d8.dynCall_ifiiii = function () {
      return (_0x46bbcc = _0x3d91d8.dynCall_ifiiii = _0x3d91d8.asm.dynCall_ifiiii).apply(null, arguments);
    };
    var _0x1d250b = _0x3d91d8.dynCall_idiiiii = function () {
      return (_0x1d250b = _0x3d91d8.dynCall_idiiiii = _0x3d91d8.asm.dynCall_idiiiii).apply(null, arguments);
    };
    var _0x1a8999 = _0x3d91d8.dynCall_idiiii = function () {
      return (_0x1a8999 = _0x3d91d8.dynCall_idiiii = _0x3d91d8.asm.dynCall_idiiii).apply(null, arguments);
    };
    var _0x2704af = _0x3d91d8.dynCall_idii = function () {
      return (_0x2704af = _0x3d91d8.dynCall_idii = _0x3d91d8.asm.dynCall_idii).apply(null, arguments);
    };
    var _0x529de0 = _0x3d91d8.dynCall_iiijiiii = function () {
      return (_0x529de0 = _0x3d91d8.dynCall_iiijiiii = _0x3d91d8.asm.dynCall_iiijiiii).apply(null, arguments);
    };
    var _0x4b42be = _0x3d91d8.dynCall_vjiiii = function () {
      return (_0x4b42be = _0x3d91d8.dynCall_vjiiii = _0x3d91d8.asm.dynCall_vjiiii).apply(null, arguments);
    };
    var _0x4275d1 = _0x3d91d8.dynCall_iddi = function () {
      return (_0x4275d1 = _0x3d91d8.dynCall_iddi = _0x3d91d8.asm.dynCall_iddi).apply(null, arguments);
    };
    var _0x38e1ea = _0x3d91d8.dynCall_iiiiiiiiiiii = function () {
      return (_0x38e1ea = _0x3d91d8.dynCall_iiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiii).apply(null, arguments);
    };
    var _0x22d31a = _0x3d91d8.dynCall_iiiiiiiiiiiiii = function () {
      return (_0x22d31a = _0x3d91d8.dynCall_iiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x28b554 = _0x3d91d8.dynCall_viifiifi = function () {
      return (_0x28b554 = _0x3d91d8.dynCall_viifiifi = _0x3d91d8.asm.dynCall_viifiifi).apply(null, arguments);
    };
    var _0x2b3675 = _0x3d91d8.dynCall_vifiifi = function () {
      return (_0x2b3675 = _0x3d91d8.dynCall_vifiifi = _0x3d91d8.asm.dynCall_vifiifi).apply(null, arguments);
    };
    var _0x1f29ff = _0x3d91d8.dynCall_viddfffi = function () {
      return (_0x1f29ff = _0x3d91d8.dynCall_viddfffi = _0x3d91d8.asm.dynCall_viddfffi).apply(null, arguments);
    };
    var _0x144d60 = _0x3d91d8.dynCall_viidfffi = function () {
      return (_0x144d60 = _0x3d91d8.dynCall_viidfffi = _0x3d91d8.asm.dynCall_viidfffi).apply(null, arguments);
    };
    var _0x3a1ff0 = _0x3d91d8.dynCall_vidifffi = function () {
      return (_0x3a1ff0 = _0x3d91d8.dynCall_vidifffi = _0x3d91d8.asm.dynCall_vidifffi).apply(null, arguments);
    };
    var _0x5378c8 = _0x3d91d8.dynCall_viiifffi = function () {
      return (_0x5378c8 = _0x3d91d8.dynCall_viiifffi = _0x3d91d8.asm.dynCall_viiifffi).apply(null, arguments);
    };
    var _0xa1b9eb = _0x3d91d8.dynCall_viddi = function () {
      return (_0xa1b9eb = _0x3d91d8.dynCall_viddi = _0x3d91d8.asm.dynCall_viddi).apply(null, arguments);
    };
    var _0x1f3e82 = _0x3d91d8.dynCall_iffi = function () {
      return (_0x1f3e82 = _0x3d91d8.dynCall_iffi = _0x3d91d8.asm.dynCall_iffi).apply(null, arguments);
    };
    var _0x49c346 = _0x3d91d8.dynCall_ffii = function () {
      return (_0x49c346 = _0x3d91d8.dynCall_ffii = _0x3d91d8.asm.dynCall_ffii).apply(null, arguments);
    };
    var _0x2ab064 = _0x3d91d8.dynCall_fiiiii = function () {
      return (_0x2ab064 = _0x3d91d8.dynCall_fiiiii = _0x3d91d8.asm.dynCall_fiiiii).apply(null, arguments);
    };
    var _0x3b229a = _0x3d91d8.dynCall_ddddi = function () {
      return (_0x3b229a = _0x3d91d8.dynCall_ddddi = _0x3d91d8.asm.dynCall_ddddi).apply(null, arguments);
    };
    var _0x1350af = _0x3d91d8.dynCall_ddi = function () {
      return (_0x1350af = _0x3d91d8.dynCall_ddi = _0x3d91d8.asm.dynCall_ddi).apply(null, arguments);
    };
    var _0x3e9062 = _0x3d91d8.dynCall_viiijiiii = function () {
      return (_0x3e9062 = _0x3d91d8.dynCall_viiijiiii = _0x3d91d8.asm.dynCall_viiijiiii).apply(null, arguments);
    };
    var _0x4e0591 = _0x3d91d8.dynCall_iiiiiiiiiiiii = function () {
      return (_0x4e0591 = _0x3d91d8.dynCall_iiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x352e79 = _0x3d91d8.dynCall_iiiiiji = function () {
      return (_0x352e79 = _0x3d91d8.dynCall_iiiiiji = _0x3d91d8.asm.dynCall_iiiiiji).apply(null, arguments);
    };
    var _0x28f0f8 = _0x3d91d8.dynCall_viiijii = function () {
      return (_0x28f0f8 = _0x3d91d8.dynCall_viiijii = _0x3d91d8.asm.dynCall_viiijii).apply(null, arguments);
    };
    var _0x1e715c = _0x3d91d8.dynCall_viiiiiji = function () {
      return (_0x1e715c = _0x3d91d8.dynCall_viiiiiji = _0x3d91d8.asm.dynCall_viiiiiji).apply(null, arguments);
    };
    var _0x2cbc17 = _0x3d91d8.dynCall_ijii = function () {
      return (_0x2cbc17 = _0x3d91d8.dynCall_ijii = _0x3d91d8.asm.dynCall_ijii).apply(null, arguments);
    };
    var _0x44d0de = _0x3d91d8.dynCall_ijjiiii = function () {
      return (_0x44d0de = _0x3d91d8.dynCall_ijjiiii = _0x3d91d8.asm.dynCall_ijjiiii).apply(null, arguments);
    };
    var _0x23f013 = _0x3d91d8.dynCall_vdiiiii = function () {
      return (_0x23f013 = _0x3d91d8.dynCall_vdiiiii = _0x3d91d8.asm.dynCall_vdiiiii).apply(null, arguments);
    };
    var _0x193464 = _0x3d91d8.dynCall_diiji = function () {
      return (_0x193464 = _0x3d91d8.dynCall_diiji = _0x3d91d8.asm.dynCall_diiji).apply(null, arguments);
    };
    var _0x5c475c = _0x3d91d8.dynCall_vjiiiiiiii = function () {
      return (_0x5c475c = _0x3d91d8.dynCall_vjiiiiiiii = _0x3d91d8.asm.dynCall_vjiiiiiiii).apply(null, arguments);
    };
    var _0x4256a3 = _0x3d91d8.dynCall_vjiiiiiii = function () {
      return (_0x4256a3 = _0x3d91d8.dynCall_vjiiiiiii = _0x3d91d8.asm.dynCall_vjiiiiiii).apply(null, arguments);
    };
    var _0x53d118 = _0x3d91d8.dynCall_ijiiii = function () {
      return (_0x53d118 = _0x3d91d8.dynCall_ijiiii = _0x3d91d8.asm.dynCall_ijiiii).apply(null, arguments);
    };
    var _0x23e96f = _0x3d91d8.dynCall_iidii = function () {
      return (_0x23e96f = _0x3d91d8.dynCall_iidii = _0x3d91d8.asm.dynCall_iidii).apply(null, arguments);
    };
    var _0x340442 = _0x3d91d8.dynCall_iidiii = function () {
      return (_0x340442 = _0x3d91d8.dynCall_iidiii = _0x3d91d8.asm.dynCall_iidiii).apply(null, arguments);
    };
    var _0x5c9b4c = _0x3d91d8.dynCall_diji = function () {
      return (_0x5c9b4c = _0x3d91d8.dynCall_diji = _0x3d91d8.asm.dynCall_diji).apply(null, arguments);
    };
    var _0x153739 = _0x3d91d8.dynCall_fidi = function () {
      return (_0x153739 = _0x3d91d8.dynCall_fidi = _0x3d91d8.asm.dynCall_fidi).apply(null, arguments);
    };
    var _0x49e125 = _0x3d91d8.dynCall_ijiiiiiii = function () {
      return (_0x49e125 = _0x3d91d8.dynCall_ijiiiiiii = _0x3d91d8.asm.dynCall_ijiiiiiii).apply(null, arguments);
    };
    var _0x5c7622 = _0x3d91d8.dynCall_ijiiiii = function () {
      return (_0x5c7622 = _0x3d91d8.dynCall_ijiiiii = _0x3d91d8.asm.dynCall_ijiiiii).apply(null, arguments);
    };
    var _0xed6253 = _0x3d91d8.dynCall_viijiiii = function () {
      return (_0xed6253 = _0x3d91d8.dynCall_viijiiii = _0x3d91d8.asm.dynCall_viijiiii).apply(null, arguments);
    };
    var _0x12c7a1 = _0x3d91d8.dynCall_vifffffi = function () {
      return (_0x12c7a1 = _0x3d91d8.dynCall_vifffffi = _0x3d91d8.asm.dynCall_vifffffi).apply(null, arguments);
    };
    var _0x58a1e3 = _0x3d91d8.dynCall_viiiiiffii = function () {
      return (_0x58a1e3 = _0x3d91d8.dynCall_viiiiiffii = _0x3d91d8.asm.dynCall_viiiiiffii).apply(null, arguments);
    };
    var _0x31ae42 = _0x3d91d8.dynCall_viiiiiffi = function () {
      return (_0x31ae42 = _0x3d91d8.dynCall_viiiiiffi = _0x3d91d8.asm.dynCall_viiiiiffi).apply(null, arguments);
    };
    var _0x414916 = _0x3d91d8.dynCall_viififi = function () {
      return (_0x414916 = _0x3d91d8.dynCall_viififi = _0x3d91d8.asm.dynCall_viififi).apply(null, arguments);
    };
    var _0x32dfdb = _0x3d91d8.dynCall_viififfi = function () {
      return (_0x32dfdb = _0x3d91d8.dynCall_viififfi = _0x3d91d8.asm.dynCall_viififfi).apply(null, arguments);
    };
    var _0x4af879 = _0x3d91d8.dynCall_ijjiii = function () {
      return (_0x4af879 = _0x3d91d8.dynCall_ijjiii = _0x3d91d8.asm.dynCall_ijjiii).apply(null, arguments);
    };
    var _0x305ebd = _0x3d91d8.dynCall_diiiii = function () {
      return (_0x305ebd = _0x3d91d8.dynCall_diiiii = _0x3d91d8.asm.dynCall_diiiii).apply(null, arguments);
    };
    var _0x15262f = _0x3d91d8.dynCall_vijji = function () {
      return (_0x15262f = _0x3d91d8.dynCall_vijji = _0x3d91d8.asm.dynCall_vijji).apply(null, arguments);
    };
    var _0x3f7c42 = _0x3d91d8.dynCall_vfffi = function () {
      return (_0x3f7c42 = _0x3d91d8.dynCall_vfffi = _0x3d91d8.asm.dynCall_vfffi).apply(null, arguments);
    };
    var _0x1d1978 = _0x3d91d8.dynCall_vffffi = function () {
      return (_0x1d1978 = _0x3d91d8.dynCall_vffffi = _0x3d91d8.asm.dynCall_vffffi).apply(null, arguments);
    };
    var _0x3b0a4d = _0x3d91d8.dynCall_viiiffii = function () {
      return (_0x3b0a4d = _0x3d91d8.dynCall_viiiffii = _0x3d91d8.asm.dynCall_viiiffii).apply(null, arguments);
    };
    var _0xc2a37b = _0x3d91d8.dynCall_viiiifffi = function () {
      return (_0xc2a37b = _0x3d91d8.dynCall_viiiifffi = _0x3d91d8.asm.dynCall_viiiifffi).apply(null, arguments);
    };
    var _0x430814 = _0x3d91d8.dynCall_vfiii = function () {
      return (_0x430814 = _0x3d91d8.dynCall_vfiii = _0x3d91d8.asm.dynCall_vfiii).apply(null, arguments);
    };
    var _0x480d5a = _0x3d91d8.dynCall_fdi = function () {
      return (_0x480d5a = _0x3d91d8.dynCall_fdi = _0x3d91d8.asm.dynCall_fdi).apply(null, arguments);
    };
    var _0x11ab55 = _0x3d91d8.dynCall_vfii = function () {
      return (_0x11ab55 = _0x3d91d8.dynCall_vfii = _0x3d91d8.asm.dynCall_vfii).apply(null, arguments);
    };
    var _0x850883 = _0x3d91d8.dynCall_jjjji = function () {
      return (_0x850883 = _0x3d91d8.dynCall_jjjji = _0x3d91d8.asm.dynCall_jjjji).apply(null, arguments);
    };
    var _0x54a7bd = _0x3d91d8.dynCall_iiiifiiiiii = function () {
      return (_0x54a7bd = _0x3d91d8.dynCall_iiiifiiiiii = _0x3d91d8.asm.dynCall_iiiifiiiiii).apply(null, arguments);
    };
    var _0x511689 = _0x3d91d8.dynCall_iiiifiiiii = function () {
      return (_0x511689 = _0x3d91d8.dynCall_iiiifiiiii = _0x3d91d8.asm.dynCall_iiiifiiiii).apply(null, arguments);
    };
    var _0x32ee7c = _0x3d91d8.dynCall_iiiifiiii = function () {
      return (_0x32ee7c = _0x3d91d8.dynCall_iiiifiiii = _0x3d91d8.asm.dynCall_iiiifiiii).apply(null, arguments);
    };
    var _0x157f8c = _0x3d91d8.dynCall_vijjii = function () {
      return (_0x157f8c = _0x3d91d8.dynCall_vijjii = _0x3d91d8.asm.dynCall_vijjii).apply(null, arguments);
    };
    var _0x54ecf4 = _0x3d91d8.dynCall_viiiiiiiijijiii = function () {
      return (_0x54ecf4 = _0x3d91d8.dynCall_viiiiiiiijijiii = _0x3d91d8.asm.dynCall_viiiiiiiijijiii).apply(null, arguments);
    };
    var _0x530f40 = _0x3d91d8.dynCall_viijijiii = function () {
      return (_0x530f40 = _0x3d91d8.dynCall_viijijiii = _0x3d91d8.asm.dynCall_viijijiii).apply(null, arguments);
    };
    var _0x169cd5 = _0x3d91d8.dynCall_viiiififfi = function () {
      return (_0x169cd5 = _0x3d91d8.dynCall_viiiififfi = _0x3d91d8.asm.dynCall_viiiififfi).apply(null, arguments);
    };
    var _0x1e9272 = _0x3d91d8.dynCall_viiiifiifi = function () {
      return (_0x1e9272 = _0x3d91d8.dynCall_viiiifiifi = _0x3d91d8.asm.dynCall_viiiifiifi).apply(null, arguments);
    };
    var _0x36c1f0 = _0x3d91d8.dynCall_viiiifiiii = function () {
      return (_0x36c1f0 = _0x3d91d8.dynCall_viiiifiiii = _0x3d91d8.asm.dynCall_viiiifiiii).apply(null, arguments);
    };
    var _0x60938b = _0x3d91d8.dynCall_viiiifiiiii = function () {
      return (_0x60938b = _0x3d91d8.dynCall_viiiifiiiii = _0x3d91d8.asm.dynCall_viiiifiiiii).apply(null, arguments);
    };
    var _0x5051fe = _0x3d91d8.dynCall_viiiifiiiiiiii = function () {
      return (_0x5051fe = _0x3d91d8.dynCall_viiiifiiiiiiii = _0x3d91d8.asm.dynCall_viiiifiiiiiiii).apply(null, arguments);
    };
    var _0x1fce95 = _0x3d91d8.dynCall_viffffiii = function () {
      return (_0x1fce95 = _0x3d91d8.dynCall_viffffiii = _0x3d91d8.asm.dynCall_viffffiii).apply(null, arguments);
    };
    var _0x2aec9c = _0x3d91d8.dynCall_viififiii = function () {
      return (_0x2aec9c = _0x3d91d8.dynCall_viififiii = _0x3d91d8.asm.dynCall_viififiii).apply(null, arguments);
    };
    var _0x379469 = _0x3d91d8.dynCall_iiiiifi = function () {
      return (_0x379469 = _0x3d91d8.dynCall_iiiiifi = _0x3d91d8.asm.dynCall_iiiiifi).apply(null, arguments);
    };
    var _0x3cc195 = _0x3d91d8.dynCall_viififii = function () {
      return (_0x3cc195 = _0x3d91d8.dynCall_viififii = _0x3d91d8.asm.dynCall_viififii).apply(null, arguments);
    };
    var _0x4e2988 = _0x3d91d8.dynCall_iifiifii = function () {
      return (_0x4e2988 = _0x3d91d8.dynCall_iifiifii = _0x3d91d8.asm.dynCall_iifiifii).apply(null, arguments);
    };
    var _0x4ee09a = _0x3d91d8.dynCall_vififfii = function () {
      return (_0x4ee09a = _0x3d91d8.dynCall_vififfii = _0x3d91d8.asm.dynCall_vififfii).apply(null, arguments);
    };
    var _0x2cad80 = _0x3d91d8.dynCall_vififfi = function () {
      return (_0x2cad80 = _0x3d91d8.dynCall_vififfi = _0x3d91d8.asm.dynCall_vififfi).apply(null, arguments);
    };
    var _0xa08cde = _0x3d91d8.dynCall_iiififiiii = function () {
      return (_0xa08cde = _0x3d91d8.dynCall_iiififiiii = _0x3d91d8.asm.dynCall_iiififiiii).apply(null, arguments);
    };
    var _0xeac8f7 = _0x3d91d8.dynCall_viffiiii = function () {
      return (_0xeac8f7 = _0x3d91d8.dynCall_viffiiii = _0x3d91d8.asm.dynCall_viffiiii).apply(null, arguments);
    };
    var _0x40e9b2 = _0x3d91d8.dynCall_viiiffffiiii = function () {
      return (_0x40e9b2 = _0x3d91d8.dynCall_viiiffffiiii = _0x3d91d8.asm.dynCall_viiiffffiiii).apply(null, arguments);
    };
    var _0x6df224 = _0x3d91d8.dynCall_viifffffffiiiii = function () {
      return (_0x6df224 = _0x3d91d8.dynCall_viifffffffiiiii = _0x3d91d8.asm.dynCall_viifffffffiiiii).apply(null, arguments);
    };
    var _0x3a6ccc = _0x3d91d8.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
      return (_0x3a6ccc = _0x3d91d8.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x3d91d8.asm.dynCall_iiiiiiffiiiiiiiiiffffiiii).apply(null, arguments);
    };
    var _0x49483b = _0x3d91d8.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
      return (_0x49483b = _0x3d91d8.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiffiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0xefbb92 = _0x3d91d8.dynCall_vififiii = function () {
      return (_0xefbb92 = _0x3d91d8.dynCall_vififiii = _0x3d91d8.asm.dynCall_vififiii).apply(null, arguments);
    };
    var _0x167635 = _0x3d91d8.dynCall_viijji = function () {
      return (_0x167635 = _0x3d91d8.dynCall_viijji = _0x3d91d8.asm.dynCall_viijji).apply(null, arguments);
    };
    var _0x193e77 = _0x3d91d8.dynCall_jijji = function () {
      return (_0x193e77 = _0x3d91d8.dynCall_jijji = _0x3d91d8.asm.dynCall_jijji).apply(null, arguments);
    };
    var _0x505dd6 = _0x3d91d8.dynCall_ifffi = function () {
      return (_0x505dd6 = _0x3d91d8.dynCall_ifffi = _0x3d91d8.asm.dynCall_ifffi).apply(null, arguments);
    };
    var _0x3b66d9 = _0x3d91d8.dynCall_fiifiii = function () {
      return (_0x3b66d9 = _0x3d91d8.dynCall_fiifiii = _0x3d91d8.asm.dynCall_fiifiii).apply(null, arguments);
    };
    var _0xbe9298 = _0x3d91d8.dynCall_viffifi = function () {
      return (_0xbe9298 = _0x3d91d8.dynCall_viffifi = _0x3d91d8.asm.dynCall_viffifi).apply(null, arguments);
    };
    var _0x22e4aa = _0x3d91d8.dynCall_fffffffi = function () {
      return (_0x22e4aa = _0x3d91d8.dynCall_fffffffi = _0x3d91d8.asm.dynCall_fffffffi).apply(null, arguments);
    };
    var _0x5a635f = _0x3d91d8.dynCall_viiiffiiiiiiiii = function () {
      return (_0x5a635f = _0x3d91d8.dynCall_viiiffiiiiiiiii = _0x3d91d8.asm.dynCall_viiiffiiiiiiiii).apply(null, arguments);
    };
    var _0x5d5d9d = _0x3d91d8.dynCall_viiiffiiiiii = function () {
      return (_0x5d5d9d = _0x3d91d8.dynCall_viiiffiiiiii = _0x3d91d8.asm.dynCall_viiiffiiiiii).apply(null, arguments);
    };
    var _0x5d6c89 = _0x3d91d8.dynCall_viiffiiiiiiiiii = function () {
      return (_0x5d6c89 = _0x3d91d8.dynCall_viiffiiiiiiiiii = _0x3d91d8.asm.dynCall_viiffiiiiiiiiii).apply(null, arguments);
    };
    var _0x2687e8 = _0x3d91d8.dynCall_viiffiiiiiii = function () {
      return (_0x2687e8 = _0x3d91d8.dynCall_viiffiiiiiii = _0x3d91d8.asm.dynCall_viiffiiiiiii).apply(null, arguments);
    };
    var _0x544bbf = _0x3d91d8.dynCall_viffffffi = function () {
      return (_0x544bbf = _0x3d91d8.dynCall_viffffffi = _0x3d91d8.asm.dynCall_viffffffi).apply(null, arguments);
    };
    var _0xf14c20 = _0x3d91d8.dynCall_iiiffiiii = function () {
      return (_0xf14c20 = _0x3d91d8.dynCall_iiiffiiii = _0x3d91d8.asm.dynCall_iiiffiiii).apply(null, arguments);
    };
    var _0x5ea72b = _0x3d91d8.dynCall_iiiiffiiii = function () {
      return (_0x5ea72b = _0x3d91d8.dynCall_iiiiffiiii = _0x3d91d8.asm.dynCall_iiiiffiiii).apply(null, arguments);
    };
    var _0x540a2d = _0x3d91d8.dynCall_fiiiffi = function () {
      return (_0x540a2d = _0x3d91d8.dynCall_fiiiffi = _0x3d91d8.asm.dynCall_fiiiffi).apply(null, arguments);
    };
    var _0x4b99d5 = _0x3d91d8.dynCall_vjii = function () {
      return (_0x4b99d5 = _0x3d91d8.dynCall_vjii = _0x3d91d8.asm.dynCall_vjii).apply(null, arguments);
    };
    var _0x544b01 = _0x3d91d8.dynCall_viiiiiiiijiiii = function () {
      return (_0x544b01 = _0x3d91d8.dynCall_viiiiiiiijiiii = _0x3d91d8.asm.dynCall_viiiiiiiijiiii).apply(null, arguments);
    };
    var _0x930da7 = _0x3d91d8.dynCall_viiiiiifiiiiii = function () {
      return (_0x930da7 = _0x3d91d8.dynCall_viiiiiifiiiiii = _0x3d91d8.asm.dynCall_viiiiiifiiiiii).apply(null, arguments);
    };
    var _0x13e7cb = _0x3d91d8.dynCall_vifiiiiii = function () {
      return (_0x13e7cb = _0x3d91d8.dynCall_vifiiiiii = _0x3d91d8.asm.dynCall_vifiiiiii).apply(null, arguments);
    };
    var _0x4f7bcc = _0x3d91d8.dynCall_fifii = function () {
      return (_0x4f7bcc = _0x3d91d8.dynCall_fifii = _0x3d91d8.asm.dynCall_fifii).apply(null, arguments);
    };
    var _0x537469 = _0x3d91d8.dynCall_iiidi = function () {
      return (_0x537469 = _0x3d91d8.dynCall_iiidi = _0x3d91d8.asm.dynCall_iiidi).apply(null, arguments);
    };
    var _0x54d47a = _0x3d91d8.dynCall_iidiiiii = function () {
      return (_0x54d47a = _0x3d91d8.dynCall_iidiiiii = _0x3d91d8.asm.dynCall_iidiiiii).apply(null, arguments);
    };
    var _0x5215e1 = _0x3d91d8.dynCall_viijiiiiii = function () {
      return (_0x5215e1 = _0x3d91d8.dynCall_viijiiiiii = _0x3d91d8.asm.dynCall_viijiiiiii).apply(null, arguments);
    };
    var _0x245120 = _0x3d91d8.dynCall_jiidi = function () {
      return (_0x245120 = _0x3d91d8.dynCall_jiidi = _0x3d91d8.asm.dynCall_jiidi).apply(null, arguments);
    };
    var _0x3be044 = _0x3d91d8.dynCall_viiiidijii = function () {
      return (_0x3be044 = _0x3d91d8.dynCall_viiiidijii = _0x3d91d8.asm.dynCall_viiiidijii).apply(null, arguments);
    };
    var _0xfb3be = _0x3d91d8.dynCall_viiiidii = function () {
      return (_0xfb3be = _0x3d91d8.dynCall_viiiidii = _0x3d91d8.asm.dynCall_viiiidii).apply(null, arguments);
    };
    var _0x148412 = _0x3d91d8.dynCall_iiidiii = function () {
      return (_0x148412 = _0x3d91d8.dynCall_iiidiii = _0x3d91d8.asm.dynCall_iiidiii).apply(null, arguments);
    };
    var _0x15494f = _0x3d91d8.dynCall_iiidii = function () {
      return (_0x15494f = _0x3d91d8.dynCall_iiidii = _0x3d91d8.asm.dynCall_iiidii).apply(null, arguments);
    };
    var _0x28ac5d = _0x3d91d8.dynCall_vidiii = function () {
      return (_0x28ac5d = _0x3d91d8.dynCall_vidiii = _0x3d91d8.asm.dynCall_vidiii).apply(null, arguments);
    };
    var _0x44e817 = _0x3d91d8.dynCall_viijiiiii = function () {
      return (_0x44e817 = _0x3d91d8.dynCall_viijiiiii = _0x3d91d8.asm.dynCall_viijiiiii).apply(null, arguments);
    };
    var _0x3c872c = _0x3d91d8.dynCall_viiffffffi = function () {
      return (_0x3c872c = _0x3d91d8.dynCall_viiffffffi = _0x3d91d8.asm.dynCall_viiffffffi).apply(null, arguments);
    };
    var _0x329b98 = _0x3d91d8.dynCall_viiffffffffi = function () {
      return (_0x329b98 = _0x3d91d8.dynCall_viiffffffffi = _0x3d91d8.asm.dynCall_viiffffffffi).apply(null, arguments);
    };
    var _0x5c140f = _0x3d91d8.dynCall_viiffffffffiii = function () {
      return (_0x5c140f = _0x3d91d8.dynCall_viiffffffffiii = _0x3d91d8.asm.dynCall_viiffffffffiii).apply(null, arguments);
    };
    var _0x139ec5 = _0x3d91d8.dynCall_viiiiffffii = function () {
      return (_0x139ec5 = _0x3d91d8.dynCall_viiiiffffii = _0x3d91d8.asm.dynCall_viiiiffffii).apply(null, arguments);
    };
    var _0x591af9 = _0x3d91d8.dynCall_fiiiiii = function () {
      return (_0x591af9 = _0x3d91d8.dynCall_fiiiiii = _0x3d91d8.asm.dynCall_fiiiiii).apply(null, arguments);
    };
    var _0xeba801 = _0x3d91d8.dynCall_vijiiiiiii = function () {
      return (_0xeba801 = _0x3d91d8.dynCall_vijiiiiiii = _0x3d91d8.asm.dynCall_vijiiiiiii).apply(null, arguments);
    };
    var _0x558ed0 = _0x3d91d8.dynCall_vijiiiiiiii = function () {
      return (_0x558ed0 = _0x3d91d8.dynCall_vijiiiiiiii = _0x3d91d8.asm.dynCall_vijiiiiiiii).apply(null, arguments);
    };
    var _0x146bc6 = _0x3d91d8.dynCall_jjiiii = function () {
      return (_0x146bc6 = _0x3d91d8.dynCall_jjiiii = _0x3d91d8.asm.dynCall_jjiiii).apply(null, arguments);
    };
    var _0x246a7b = _0x3d91d8.dynCall_jjiiiii = function () {
      return (_0x246a7b = _0x3d91d8.dynCall_jjiiiii = _0x3d91d8.asm.dynCall_jjiiiii).apply(null, arguments);
    };
    var _0xf87dc8 = _0x3d91d8.dynCall_jijjji = function () {
      return (_0xf87dc8 = _0x3d91d8.dynCall_jijjji = _0x3d91d8.asm.dynCall_jijjji).apply(null, arguments);
    };
    var _0x20d211 = _0x3d91d8.dynCall_jijjjii = function () {
      return (_0x20d211 = _0x3d91d8.dynCall_jijjjii = _0x3d91d8.asm.dynCall_jijjjii).apply(null, arguments);
    };
    var _0x2c4116 = _0x3d91d8.dynCall_jjiii = function () {
      return (_0x2c4116 = _0x3d91d8.dynCall_jjiii = _0x3d91d8.asm.dynCall_jjiii).apply(null, arguments);
    };
    var _0x3d6b0e = _0x3d91d8.dynCall_ijijiiiii = function () {
      return (_0x3d6b0e = _0x3d91d8.dynCall_ijijiiiii = _0x3d91d8.asm.dynCall_ijijiiiii).apply(null, arguments);
    };
    var _0x214d4b = _0x3d91d8.dynCall_ijjjiii = function () {
      return (_0x214d4b = _0x3d91d8.dynCall_ijjjiii = _0x3d91d8.asm.dynCall_ijjjiii).apply(null, arguments);
    };
    var _0xfe5d08 = _0x3d91d8.dynCall_ijiii = function () {
      return (_0xfe5d08 = _0x3d91d8.dynCall_ijiii = _0x3d91d8.asm.dynCall_ijiii).apply(null, arguments);
    };
    var _0x382d75 = _0x3d91d8.dynCall_vijjjiijii = function () {
      return (_0x382d75 = _0x3d91d8.dynCall_vijjjiijii = _0x3d91d8.asm.dynCall_vijjjiijii).apply(null, arguments);
    };
    var _0x518157 = _0x3d91d8.dynCall_ijjjiijii = function () {
      return (_0x518157 = _0x3d91d8.dynCall_ijjjiijii = _0x3d91d8.asm.dynCall_ijjjiijii).apply(null, arguments);
    };
    var _0x1c20fd = _0x3d91d8.dynCall_jfi = function () {
      return (_0x1c20fd = _0x3d91d8.dynCall_jfi = _0x3d91d8.asm.dynCall_jfi).apply(null, arguments);
    };
    var _0x16082c = _0x3d91d8.dynCall_fji = function () {
      return (_0x16082c = _0x3d91d8.dynCall_fji = _0x3d91d8.asm.dynCall_fji).apply(null, arguments);
    };
    var _0x401111 = _0x3d91d8.dynCall_dfi = function () {
      return (_0x401111 = _0x3d91d8.dynCall_dfi = _0x3d91d8.asm.dynCall_dfi).apply(null, arguments);
    };
    var _0x5a2681 = _0x3d91d8.dynCall_jidii = function () {
      return (_0x5a2681 = _0x3d91d8.dynCall_jidii = _0x3d91d8.asm.dynCall_jidii).apply(null, arguments);
    };
    var _0x5b931d = _0x3d91d8.dynCall_viiiiiiiji = function () {
      return (_0x5b931d = _0x3d91d8.dynCall_viiiiiiiji = _0x3d91d8.asm.dynCall_viiiiiiiji).apply(null, arguments);
    };
    var _0x2f8b4f = _0x3d91d8.dynCall_viiiiiiiiji = function () {
      return (_0x2f8b4f = _0x3d91d8.dynCall_viiiiiiiiji = _0x3d91d8.asm.dynCall_viiiiiiiiji).apply(null, arguments);
    };
    var _0x29f982 = _0x3d91d8.dynCall_viiiiiiiiiji = function () {
      return (_0x29f982 = _0x3d91d8.dynCall_viiiiiiiiiji = _0x3d91d8.asm.dynCall_viiiiiiiiiji).apply(null, arguments);
    };
    var _0xbf7c59 = _0x3d91d8.dynCall_ijiijii = function () {
      return (_0xbf7c59 = _0x3d91d8.dynCall_ijiijii = _0x3d91d8.asm.dynCall_ijiijii).apply(null, arguments);
    };
    var _0x2db0e5 = _0x3d91d8.dynCall_vjjiiiii = function () {
      return (_0x2db0e5 = _0x3d91d8.dynCall_vjjiiiii = _0x3d91d8.asm.dynCall_vjjiiiii).apply(null, arguments);
    };
    var _0xd4e4fe = _0x3d91d8.dynCall_vjjii = function () {
      return (_0xd4e4fe = _0x3d91d8.dynCall_vjjii = _0x3d91d8.asm.dynCall_vjjii).apply(null, arguments);
    };
    var _0x4c447a = _0x3d91d8.dynCall_ijiiji = function () {
      return (_0x4c447a = _0x3d91d8.dynCall_ijiiji = _0x3d91d8.asm.dynCall_ijiiji).apply(null, arguments);
    };
    var _0x413fe8 = _0x3d91d8.dynCall_ijiiiiji = function () {
      return (_0x413fe8 = _0x3d91d8.dynCall_ijiiiiji = _0x3d91d8.asm.dynCall_ijiiiiji).apply(null, arguments);
    };
    var _0x5e3e6d = _0x3d91d8.dynCall_jiiiiii = function () {
      return (_0x5e3e6d = _0x3d91d8.dynCall_jiiiiii = _0x3d91d8.asm.dynCall_jiiiiii).apply(null, arguments);
    };
    var _0x7fda49 = _0x3d91d8.dynCall_ddii = function () {
      return (_0x7fda49 = _0x3d91d8.dynCall_ddii = _0x3d91d8.asm.dynCall_ddii).apply(null, arguments);
    };
    var _0x3db42d = _0x3d91d8.dynCall_idiii = function () {
      return (_0x3db42d = _0x3d91d8.dynCall_idiii = _0x3d91d8.asm.dynCall_idiii).apply(null, arguments);
    };
    var _0x4216ae = _0x3d91d8.dynCall_ifiiiii = function () {
      return (_0x4216ae = _0x3d91d8.dynCall_ifiiiii = _0x3d91d8.asm.dynCall_ifiiiii).apply(null, arguments);
    };
    var _0x9fa18e = _0x3d91d8.dynCall_jjjii = function () {
      return (_0x9fa18e = _0x3d91d8.dynCall_jjjii = _0x3d91d8.asm.dynCall_jjjii).apply(null, arguments);
    };
    var _0x129e21 = _0x3d91d8.dynCall_vdiii = function () {
      return (_0x129e21 = _0x3d91d8.dynCall_vdiii = _0x3d91d8.asm.dynCall_vdiii).apply(null, arguments);
    };
    var _0x4efa28 = _0x3d91d8.dynCall_jdii = function () {
      return (_0x4efa28 = _0x3d91d8.dynCall_jdii = _0x3d91d8.asm.dynCall_jdii).apply(null, arguments);
    };
    var _0x2a2e80 = _0x3d91d8.dynCall_vijijji = function () {
      return (_0x2a2e80 = _0x3d91d8.dynCall_vijijji = _0x3d91d8.asm.dynCall_vijijji).apply(null, arguments);
    };
    var _0x17a21a = _0x3d91d8.dynCall_iijjji = function () {
      return (_0x17a21a = _0x3d91d8.dynCall_iijjji = _0x3d91d8.asm.dynCall_iijjji).apply(null, arguments);
    };
    var _0x35c407 = _0x3d91d8.dynCall_viijjji = function () {
      return (_0x35c407 = _0x3d91d8.dynCall_viijjji = _0x3d91d8.asm.dynCall_viijjji).apply(null, arguments);
    };
    var _0x432023 = _0x3d91d8.dynCall_vdii = function () {
      return (_0x432023 = _0x3d91d8.dynCall_vdii = _0x3d91d8.asm.dynCall_vdii).apply(null, arguments);
    };
    var _0x5ec58e = _0x3d91d8.dynCall_diddi = function () {
      return (_0x5ec58e = _0x3d91d8.dynCall_diddi = _0x3d91d8.asm.dynCall_diddi).apply(null, arguments);
    };
    var _0x21649a = _0x3d91d8.dynCall_viiijji = function () {
      return (_0x21649a = _0x3d91d8.dynCall_viiijji = _0x3d91d8.asm.dynCall_viiijji).apply(null, arguments);
    };
    var _0x16a91b = _0x3d91d8.dynCall_iijjii = function () {
      return (_0x16a91b = _0x3d91d8.dynCall_iijjii = _0x3d91d8.asm.dynCall_iijjii).apply(null, arguments);
    };
    var _0x201b26 = _0x3d91d8.dynCall_viijijii = function () {
      return (_0x201b26 = _0x3d91d8.dynCall_viijijii = _0x3d91d8.asm.dynCall_viijijii).apply(null, arguments);
    };
    var _0x41e0ae = _0x3d91d8.dynCall_vijiji = function () {
      return (_0x41e0ae = _0x3d91d8.dynCall_vijiji = _0x3d91d8.asm.dynCall_vijiji).apply(null, arguments);
    };
    var _0x2d56c1 = _0x3d91d8.dynCall_viijiijiii = function () {
      return (_0x2d56c1 = _0x3d91d8.dynCall_viijiijiii = _0x3d91d8.asm.dynCall_viijiijiii).apply(null, arguments);
    };
    var _0x41704d = _0x3d91d8.dynCall_viiiijiiii = function () {
      return (_0x41704d = _0x3d91d8.dynCall_viiiijiiii = _0x3d91d8.asm.dynCall_viiiijiiii).apply(null, arguments);
    };
    var _0x549e87 = _0x3d91d8.dynCall_di = function () {
      return (_0x549e87 = _0x3d91d8.dynCall_di = _0x3d91d8.asm.dynCall_di).apply(null, arguments);
    };
    var _0x1765e7 = _0x3d91d8.dynCall_jiiiiiiiii = function () {
      return (_0x1765e7 = _0x3d91d8.dynCall_jiiiiiiiii = _0x3d91d8.asm.dynCall_jiiiiiiiii).apply(null, arguments);
    };
    var _0x2c1997 = _0x3d91d8.dynCall_jiiiiiiiiii = function () {
      return (_0x2c1997 = _0x3d91d8.dynCall_jiiiiiiiiii = _0x3d91d8.asm.dynCall_jiiiiiiiiii).apply(null, arguments);
    };
    var _0x4361d7 = _0x3d91d8.dynCall_iiiiijii = function () {
      return (_0x4361d7 = _0x3d91d8.dynCall_iiiiijii = _0x3d91d8.asm.dynCall_iiiiijii).apply(null, arguments);
    };
    var _0x31e3eb = _0x3d91d8.dynCall_iiiiidii = function () {
      return (_0x31e3eb = _0x3d91d8.dynCall_iiiiidii = _0x3d91d8.asm.dynCall_iiiiidii).apply(null, arguments);
    };
    var _0x484a06 = _0x3d91d8.dynCall_viifffiii = function () {
      return (_0x484a06 = _0x3d91d8.dynCall_viifffiii = _0x3d91d8.asm.dynCall_viifffiii).apply(null, arguments);
    };
    var _0x10cbd2 = _0x3d91d8.dynCall_iidfii = function () {
      return (_0x10cbd2 = _0x3d91d8.dynCall_iidfii = _0x3d91d8.asm.dynCall_iidfii).apply(null, arguments);
    };
    var _0x28a0df = _0x3d91d8.dynCall_iidfi = function () {
      return (_0x28a0df = _0x3d91d8.dynCall_iidfi = _0x3d91d8.asm.dynCall_iidfi).apply(null, arguments);
    };
    var _0x5bddaa = _0x3d91d8.dynCall_iiddfi = function () {
      return (_0x5bddaa = _0x3d91d8.dynCall_iiddfi = _0x3d91d8.asm.dynCall_iiddfi).apply(null, arguments);
    };
    var _0x2dfcab = _0x3d91d8.dynCall_iijfii = function () {
      return (_0x2dfcab = _0x3d91d8.dynCall_iijfii = _0x3d91d8.asm.dynCall_iijfii).apply(null, arguments);
    };
    var _0x10c6c2 = _0x3d91d8.dynCall_iijfi = function () {
      return (_0x10c6c2 = _0x3d91d8.dynCall_iijfi = _0x3d91d8.asm.dynCall_iijfi).apply(null, arguments);
    };
    var _0x118d6f = _0x3d91d8.dynCall_iijjfi = function () {
      return (_0x118d6f = _0x3d91d8.dynCall_iijjfi = _0x3d91d8.asm.dynCall_iijjfi).apply(null, arguments);
    };
    var _0x62ea1a = _0x3d91d8.dynCall_iiiiffiiiji = function () {
      return (_0x62ea1a = _0x3d91d8.dynCall_iiiiffiiiji = _0x3d91d8.asm.dynCall_iiiiffiiiji).apply(null, arguments);
    };
    var _0x255813 = _0x3d91d8.dynCall_iiidfii = function () {
      return (_0x255813 = _0x3d91d8.dynCall_iiidfii = _0x3d91d8.asm.dynCall_iiidfii).apply(null, arguments);
    };
    var _0x38a10e = _0x3d91d8.dynCall_iiijfii = function () {
      return (_0x38a10e = _0x3d91d8.dynCall_iiijfii = _0x3d91d8.asm.dynCall_iiijfii).apply(null, arguments);
    };
    var _0x43cee5 = _0x3d91d8.dynCall_jiiiiiii = function () {
      return (_0x43cee5 = _0x3d91d8.dynCall_jiiiiiii = _0x3d91d8.asm.dynCall_jiiiiiii).apply(null, arguments);
    };
    var _0x558394 = _0x3d91d8.dynCall_iiiiffiiiii = function () {
      return (_0x558394 = _0x3d91d8.dynCall_iiiiffiiiii = _0x3d91d8.asm.dynCall_iiiiffiiiii).apply(null, arguments);
    };
    var _0x39f7de = _0x3d91d8.dynCall_iiiidfii = function () {
      return (_0x39f7de = _0x3d91d8.dynCall_iiiidfii = _0x3d91d8.asm.dynCall_iiiidfii).apply(null, arguments);
    };
    var _0x54bdb9 = _0x3d91d8.dynCall_iiiijfii = function () {
      return (_0x54bdb9 = _0x3d91d8.dynCall_iiiijfii = _0x3d91d8.asm.dynCall_iiiijfii).apply(null, arguments);
    };
    var _0xe834aa = _0x3d91d8.dynCall_iiiiiiiiiiiiiii = function () {
      return (_0xe834aa = _0x3d91d8.dynCall_iiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x80463b = _0x3d91d8.dynCall_iiiiiiiiiiiiiiii = function () {
      return (_0x80463b = _0x3d91d8.dynCall_iiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0xad0fa7 = _0x3d91d8.dynCall_iiiiiiiiiiiiiiiii = function () {
      return (_0xad0fa7 = _0x3d91d8.dynCall_iiiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3b0c57 = _0x3d91d8.dynCall_iiiiiiiiiiiiiiiiii = function () {
      return (_0x3b0c57 = _0x3d91d8.dynCall_iiiiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x24ee07 = _0x3d91d8.dynCall_diiiidi = function () {
      return (_0x24ee07 = _0x3d91d8.dynCall_diiiidi = _0x3d91d8.asm.dynCall_diiiidi).apply(null, arguments);
    };
    var _0x2ec890 = _0x3d91d8.dynCall_jiiiiji = function () {
      return (_0x2ec890 = _0x3d91d8.dynCall_jiiiiji = _0x3d91d8.asm.dynCall_jiiiiji).apply(null, arguments);
    };
    var _0x3c975d = _0x3d91d8.dynCall_fiiiifi = function () {
      return (_0x3c975d = _0x3d91d8.dynCall_fiiiifi = _0x3d91d8.asm.dynCall_fiiiifi).apply(null, arguments);
    };
    var _0x2a4648 = _0x3d91d8.dynCall_iiiiiiiiiiiiiiiiiii = function () {
      return (_0x2a4648 = _0x3d91d8.dynCall_iiiiiiiiiiiiiiiiiii = _0x3d91d8.asm.dynCall_iiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3a0943 = _0x3d91d8.dynCall_iiijjii = function () {
      return (_0x3a0943 = _0x3d91d8.dynCall_iiijjii = _0x3d91d8.asm.dynCall_iiijjii).apply(null, arguments);
    };
    var _0x1a03a8 = _0x3d91d8.dynCall_ijiiiiii = function () {
      return (_0x1a03a8 = _0x3d91d8.dynCall_ijiiiiii = _0x3d91d8.asm.dynCall_ijiiiiii).apply(null, arguments);
    };
    var _0x2528ea = _0x3d91d8.dynCall_ijjiiiiii = function () {
      return (_0x2528ea = _0x3d91d8.dynCall_ijjiiiiii = _0x3d91d8.asm.dynCall_ijjiiiiii).apply(null, arguments);
    };
    var _0x225405 = _0x3d91d8.dynCall_vdi = function () {
      return (_0x225405 = _0x3d91d8.dynCall_vdi = _0x3d91d8.asm.dynCall_vdi).apply(null, arguments);
    };
    var _0xb62f7 = _0x3d91d8.dynCall_fff = function () {
      return (_0xb62f7 = _0x3d91d8.dynCall_fff = _0x3d91d8.asm.dynCall_fff).apply(null, arguments);
    };
    var _0x53b595 = _0x3d91d8.dynCall_ijj = function () {
      return (_0x53b595 = _0x3d91d8.dynCall_ijj = _0x3d91d8.asm.dynCall_ijj).apply(null, arguments);
    };
    var _0x3eb8cd = _0x3d91d8.dynCall_vjji = function () {
      return (_0x3eb8cd = _0x3d91d8.dynCall_vjji = _0x3d91d8.asm.dynCall_vjji).apply(null, arguments);
    };
    var _0x3a51ee = _0x3d91d8.dynCall_vif = function () {
      return (_0x3a51ee = _0x3d91d8.dynCall_vif = _0x3d91d8.asm.dynCall_vif).apply(null, arguments);
    };
    var _0x5cc4fd = _0x3d91d8.dynCall_viif = function () {
      return (_0x5cc4fd = _0x3d91d8.dynCall_viif = _0x3d91d8.asm.dynCall_viif).apply(null, arguments);
    };
    var _0x534568 = _0x3d91d8.dynCall_vid = function () {
      return (_0x534568 = _0x3d91d8.dynCall_vid = _0x3d91d8.asm.dynCall_vid).apply(null, arguments);
    };
    var _0x46f222 = _0x3d91d8.dynCall_viiiiif = function () {
      return (_0x46f222 = _0x3d91d8.dynCall_viiiiif = _0x3d91d8.asm.dynCall_viiiiif).apply(null, arguments);
    };
    var _0x472a96 = _0x3d91d8.dynCall_viiiif = function () {
      return (_0x472a96 = _0x3d91d8.dynCall_viiiif = _0x3d91d8.asm.dynCall_viiiif).apply(null, arguments);
    };
    var _0x3ab522 = _0x3d91d8.dynCall_viiiiiif = function () {
      return (_0x3ab522 = _0x3d91d8.dynCall_viiiiiif = _0x3d91d8.asm.dynCall_viiiiiif).apply(null, arguments);
    };
    var _0x41d761 = _0x3d91d8.dynCall_iiiijiii = function () {
      return (_0x41d761 = _0x3d91d8.dynCall_iiiijiii = _0x3d91d8.asm.dynCall_iiiijiii).apply(null, arguments);
    };
    var _0x12cce6 = _0x3d91d8.dynCall_iiiij = function () {
      return (_0x12cce6 = _0x3d91d8.dynCall_iiiij = _0x3d91d8.asm.dynCall_iiiij).apply(null, arguments);
    };
    var _0x44f043 = _0x3d91d8.dynCall_iiif = function () {
      return (_0x44f043 = _0x3d91d8.dynCall_iiif = _0x3d91d8.asm.dynCall_iiif).apply(null, arguments);
    };
    var _0x3a4df7 = _0x3d91d8.dynCall_fif = function () {
      return (_0x3a4df7 = _0x3d91d8.dynCall_fif = _0x3d91d8.asm.dynCall_fif).apply(null, arguments);
    };
    var _0x4b4cca = _0x3d91d8.dynCall_iiiiiifff = function () {
      return (_0x4b4cca = _0x3d91d8.dynCall_iiiiiifff = _0x3d91d8.asm.dynCall_iiiiiifff).apply(null, arguments);
    };
    var _0x18150e = _0x3d91d8.dynCall_iiiiiifiif = function () {
      return (_0x18150e = _0x3d91d8.dynCall_iiiiiifiif = _0x3d91d8.asm.dynCall_iiiiiifiif).apply(null, arguments);
    };
    var _0x5ee061 = _0x3d91d8.dynCall_iiiiiifiii = function () {
      return (_0x5ee061 = _0x3d91d8.dynCall_iiiiiifiii = _0x3d91d8.asm.dynCall_iiiiiifiii).apply(null, arguments);
    };
    var _0xa57149 = _0x3d91d8.dynCall_iiiiiiifiif = function () {
      return (_0xa57149 = _0x3d91d8.dynCall_iiiiiiifiif = _0x3d91d8.asm.dynCall_iiiiiiifiif).apply(null, arguments);
    };
    var _0x968548 = _0x3d91d8.dynCall_fiff = function () {
      return (_0x968548 = _0x3d91d8.dynCall_fiff = _0x3d91d8.asm.dynCall_fiff).apply(null, arguments);
    };
    var _0x23dbb6 = _0x3d91d8.dynCall_fiiiiiifiifif = function () {
      return (_0x23dbb6 = _0x3d91d8.dynCall_fiiiiiifiifif = _0x3d91d8.asm.dynCall_fiiiiiifiifif).apply(null, arguments);
    };
    var _0x15ac5a = _0x3d91d8.dynCall_fiiiiiifiiiif = function () {
      return (_0x15ac5a = _0x3d91d8.dynCall_fiiiiiifiiiif = _0x3d91d8.asm.dynCall_fiiiiiifiiiif).apply(null, arguments);
    };
    var _0x27c9ca = _0x3d91d8.dynCall_iifiiiijii = function () {
      return (_0x27c9ca = _0x3d91d8.dynCall_iifiiiijii = _0x3d91d8.asm.dynCall_iifiiiijii).apply(null, arguments);
    };
    var _0x4e777d = _0x3d91d8.dynCall_vifif = function () {
      return (_0x4e777d = _0x3d91d8.dynCall_vifif = _0x3d91d8.asm.dynCall_vifif).apply(null, arguments);
    };
    var _0x3ec353 = _0x3d91d8.dynCall_vifijii = function () {
      return (_0x3ec353 = _0x3d91d8.dynCall_vifijii = _0x3d91d8.asm.dynCall_vifijii).apply(null, arguments);
    };
    var _0x303cc6 = _0x3d91d8.dynCall_iiiifffiii = function () {
      return (_0x303cc6 = _0x3d91d8.dynCall_iiiifffiii = _0x3d91d8.asm.dynCall_iiiifffiii).apply(null, arguments);
    };
    var _0x59dde2 = _0x3d91d8.dynCall_iiiifffffi = function () {
      return (_0x59dde2 = _0x3d91d8.dynCall_iiiifffffi = _0x3d91d8.asm.dynCall_iiiifffffi).apply(null, arguments);
    };
    var _0x1251c8 = _0x3d91d8.dynCall_viffiiiif = function () {
      return (_0x1251c8 = _0x3d91d8.dynCall_viffiiiif = _0x3d91d8.asm.dynCall_viffiiiif).apply(null, arguments);
    };
    var _0x4b054e = _0x3d91d8.dynCall_viffiifffffiii = function () {
      return (_0x4b054e = _0x3d91d8.dynCall_viffiifffffiii = _0x3d91d8.asm.dynCall_viffiifffffiii).apply(null, arguments);
    };
    var _0x24da69 = _0x3d91d8.dynCall_viffffiifffiiiiif = function () {
      return (_0x24da69 = _0x3d91d8.dynCall_viffffiifffiiiiif = _0x3d91d8.asm.dynCall_viffffiifffiiiiif).apply(null, arguments);
    };
    var _0x569a5b = _0x3d91d8.dynCall_iiiifffffii = function () {
      return (_0x569a5b = _0x3d91d8.dynCall_iiiifffffii = _0x3d91d8.asm.dynCall_iiiifffffii).apply(null, arguments);
    };
    var _0x4e2ce0 = _0x3d91d8.dynCall_viiiiiiiiiiifii = function () {
      return (_0x4e2ce0 = _0x3d91d8.dynCall_viiiiiiiiiiifii = _0x3d91d8.asm.dynCall_viiiiiiiiiiifii).apply(null, arguments);
    };
    var _0xd4efff = _0x3d91d8.dynCall_viff = function () {
      return (_0xd4efff = _0x3d91d8.dynCall_viff = _0x3d91d8.asm.dynCall_viff).apply(null, arguments);
    };
    var _0x3ef75e = _0x3d91d8.dynCall_iiiiifiiiiif = function () {
      return (_0x3ef75e = _0x3d91d8.dynCall_iiiiifiiiiif = _0x3d91d8.asm.dynCall_iiiiifiiiiif).apply(null, arguments);
    };
    var _0x3fe774 = _0x3d91d8.dynCall_viiff = function () {
      return (_0x3fe774 = _0x3d91d8.dynCall_viiff = _0x3d91d8.asm.dynCall_viiff).apply(null, arguments);
    };
    var _0x442b25 = _0x3d91d8.dynCall_viiifiiiii = function () {
      return (_0x442b25 = _0x3d91d8.dynCall_viiifiiiii = _0x3d91d8.asm.dynCall_viiifiiiii).apply(null, arguments);
    };
    var _0x5b7bc0 = _0x3d91d8.dynCall_viiiifiiiiif = function () {
      return (_0x5b7bc0 = _0x3d91d8.dynCall_viiiifiiiiif = _0x3d91d8.asm.dynCall_viiiifiiiiif).apply(null, arguments);
    };
    var _0x20bfcd = _0x3d91d8.dynCall_iifff = function () {
      return (_0x20bfcd = _0x3d91d8.dynCall_iifff = _0x3d91d8.asm.dynCall_iifff).apply(null, arguments);
    };
    var _0x541524 = _0x3d91d8.dynCall_iif = function () {
      return (_0x541524 = _0x3d91d8.dynCall_iif = _0x3d91d8.asm.dynCall_iif).apply(null, arguments);
    };
    var _0x5c0aa3 = _0x3d91d8.dynCall_viij = function () {
      return (_0x5c0aa3 = _0x3d91d8.dynCall_viij = _0x3d91d8.asm.dynCall_viij).apply(null, arguments);
    };
    var _0xad7283 = _0x3d91d8.dynCall_viijijj = function () {
      return (_0xad7283 = _0x3d91d8.dynCall_viijijj = _0x3d91d8.asm.dynCall_viijijj).apply(null, arguments);
    };
    var _0x9a3c2b = _0x3d91d8.dynCall_viijj = function () {
      return (_0x9a3c2b = _0x3d91d8.dynCall_viijj = _0x3d91d8.asm.dynCall_viijj).apply(null, arguments);
    };
    var _0x2053bc = _0x3d91d8.dynCall_viiiij = function () {
      return (_0x2053bc = _0x3d91d8.dynCall_viiiij = _0x3d91d8.asm.dynCall_viiiij).apply(null, arguments);
    };
    var _0x196982 = _0x3d91d8.dynCall_iiijji = function () {
      return (_0x196982 = _0x3d91d8.dynCall_iiijji = _0x3d91d8.asm.dynCall_iiijji).apply(null, arguments);
    };
    var _0x3349b4 = _0x3d91d8.dynCall_ijjiiiii = function () {
      return (_0x3349b4 = _0x3d91d8.dynCall_ijjiiiii = _0x3d91d8.asm.dynCall_ijjiiiii).apply(null, arguments);
    };
    var _0x5b22fb = _0x3d91d8.dynCall_vidd = function () {
      return (_0x5b22fb = _0x3d91d8.dynCall_vidd = _0x3d91d8.asm.dynCall_vidd).apply(null, arguments);
    };
    var _0x50a9ab = _0x3d91d8.dynCall_iiiiiifffiiifiii = function () {
      return (_0x50a9ab = _0x3d91d8.dynCall_iiiiiifffiiifiii = _0x3d91d8.asm.dynCall_iiiiiifffiiifiii).apply(null, arguments);
    };
    var _0xce3164 = _0x3d91d8.dynCall_viid = function () {
      return (_0xce3164 = _0x3d91d8.dynCall_viid = _0x3d91d8.asm.dynCall_viid).apply(null, arguments);
    };
    var _0x3a935f = _0x3d91d8.dynCall_viiif = function () {
      return (_0x3a935f = _0x3d91d8.dynCall_viiif = _0x3d91d8.asm.dynCall_viiif).apply(null, arguments);
    };
    var _0x556ee1 = _0x3d91d8.dynCall_fiiiif = function () {
      return (_0x556ee1 = _0x3d91d8.dynCall_fiiiif = _0x3d91d8.asm.dynCall_fiiiif).apply(null, arguments);
    };
    var _0x561926 = _0x3d91d8.dynCall_iiiiiff = function () {
      return (_0x561926 = _0x3d91d8.dynCall_iiiiiff = _0x3d91d8.asm.dynCall_iiiiiff).apply(null, arguments);
    };
    var _0x2ef2ef = _0x3d91d8.dynCall_iiij = function () {
      return (_0x2ef2ef = _0x3d91d8.dynCall_iiij = _0x3d91d8.asm.dynCall_iiij).apply(null, arguments);
    };
    var _0x50aca8 = _0x3d91d8.dynCall_viffffffffffffiiii = function () {
      return (_0x50aca8 = _0x3d91d8.dynCall_viffffffffffffiiii = _0x3d91d8.asm.dynCall_viffffffffffffiiii).apply(null, arguments);
    };
    var _0x14fe19 = _0x3d91d8.dynCall_viffff = function () {
      return (_0x14fe19 = _0x3d91d8.dynCall_viffff = _0x3d91d8.asm.dynCall_viffff).apply(null, arguments);
    };
    var _0x42bd38 = _0x3d91d8.dynCall_ij = function () {
      return (_0x42bd38 = _0x3d91d8.dynCall_ij = _0x3d91d8.asm.dynCall_ij).apply(null, arguments);
    };
    var _0x1c5ce5 = _0x3d91d8.dynCall_vf = function () {
      return (_0x1c5ce5 = _0x3d91d8.dynCall_vf = _0x3d91d8.asm.dynCall_vf).apply(null, arguments);
    };
    var _0x81f1e9 = _0x3d91d8.dynCall_vffff = function () {
      return (_0x81f1e9 = _0x3d91d8.dynCall_vffff = _0x3d91d8.asm.dynCall_vffff).apply(null, arguments);
    };
    var _0x1bce13 = _0x3d91d8.dynCall_vff = function () {
      return (_0x1bce13 = _0x3d91d8.dynCall_vff = _0x3d91d8.asm.dynCall_vff).apply(null, arguments);
    };
    var _0x3f7dc0 = _0x3d91d8.dynCall_vifff = function () {
      return (_0x3f7dc0 = _0x3d91d8.dynCall_vifff = _0x3d91d8.asm.dynCall_vifff).apply(null, arguments);
    };
    var _0x2856ba = _0x3d91d8.dynCall_viifff = function () {
      return (_0x2856ba = _0x3d91d8.dynCall_viifff = _0x3d91d8.asm.dynCall_viifff).apply(null, arguments);
    };
    var _0x59ff08 = _0x3d91d8.dynCall_vij = function () {
      return (_0x59ff08 = _0x3d91d8.dynCall_vij = _0x3d91d8.asm.dynCall_vij).apply(null, arguments);
    };
    var _0x5dc2fe = _0x3d91d8.dynCall_vfff = function () {
      return (_0x5dc2fe = _0x3d91d8.dynCall_vfff = _0x3d91d8.asm.dynCall_vfff).apply(null, arguments);
    };
    var _0x26fb0b = _0x3d91d8.dynCall_f = function () {
      return (_0x26fb0b = _0x3d91d8.dynCall_f = _0x3d91d8.asm.dynCall_f).apply(null, arguments);
    };
    var _0x30564e = _0x3d91d8.dynCall_ff = function () {
      return (_0x30564e = _0x3d91d8.dynCall_ff = _0x3d91d8.asm.dynCall_ff).apply(null, arguments);
    };
    var _0x59911e = _0x3d91d8.dynCall_iiid = function () {
      return (_0x59911e = _0x3d91d8.dynCall_iiid = _0x3d91d8.asm.dynCall_iiid).apply(null, arguments);
    };
    var _0x223907 = _0x3d91d8.dynCall_vifffff = function () {
      return (_0x223907 = _0x3d91d8.dynCall_vifffff = _0x3d91d8.asm.dynCall_vifffff).apply(null, arguments);
    };
    var _0x2b2997 = _0x3d91d8.dynCall_viififf = function () {
      return (_0x2b2997 = _0x3d91d8.dynCall_viififf = _0x3d91d8.asm.dynCall_viififf).apply(null, arguments);
    };
    var _0x30ea90 = _0x3d91d8.dynCall_iiififiii = function () {
      return (_0x30ea90 = _0x3d91d8.dynCall_iiififiii = _0x3d91d8.asm.dynCall_iiififiii).apply(null, arguments);
    };
    var _0x3955a5 = _0x3d91d8.dynCall_fiif = function () {
      return (_0x3955a5 = _0x3d91d8.dynCall_fiif = _0x3d91d8.asm.dynCall_fiif).apply(null, arguments);
    };
    var _0x17bfc0 = _0x3d91d8.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
      return (_0x17bfc0 = _0x3d91d8.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x3d91d8.asm.dynCall_iiiiiiffiiiiiiiiiffffiii).apply(null, arguments);
    };
    var _0x3a6557 = _0x3d91d8.dynCall_viiffiiiiiiiii = function () {
      return (_0x3a6557 = _0x3d91d8.dynCall_viiffiiiiiiiii = _0x3d91d8.asm.dynCall_viiffiiiiiiiii).apply(null, arguments);
    };
    var _0x22d53f = _0x3d91d8.dynCall_viiffiiiiii = function () {
      return (_0x22d53f = _0x3d91d8.dynCall_viiffiiiiii = _0x3d91d8.asm.dynCall_viiffiiiiii).apply(null, arguments);
    };
    var _0xe09824 = _0x3d91d8.dynCall_viiiiiiiijiii = function () {
      return (_0xe09824 = _0x3d91d8.dynCall_viiiiiiiijiii = _0x3d91d8.asm.dynCall_viiiiiiiijiii).apply(null, arguments);
    };
    _0x3d91d8.ccall = _0x31a31e;
    _0x3d91d8.cwrap = _0x57da39;
    _0x3d91d8.stackTrace = _0x219c03;
    _0x3d91d8.addRunDependency = _0x1037eb;
    _0x3d91d8.removeRunDependency = _0x4c4bd8;
    _0x3d91d8.FS_createPath = _0x3a9ca2.createPath;
    _0x3d91d8.FS_createDataFile = _0x3a9ca2.createDataFile;
    _0x3d91d8.stackTrace = _0x219c03;
    var _0x1a1130;
    function _0x940b30(_0x120508) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x120508 + ")";
      this.status = _0x120508;
    }
    var _0x1b04dc = false;
    _0x2a1105 = function _0x104578() {
      if (!_0x1a1130) {
        _0x456c55();
      }
      if (!_0x1a1130) {
        _0x2a1105 = _0x104578;
      }
    };
    function _0x4d3d08(_0x4bec3a) {
      var _0x21e1be = _0x3d91d8._main;
      _0x4bec3a = _0x4bec3a || [];
      var _0x5723bd = _0x4bec3a.length + 0x1;
      var _0x4ca8a1 = _0x45ad2c((_0x5723bd + 0x1) * 0x4);
      _0xb9f33b[_0x4ca8a1 >> 0x2] = _0x1c3817(_0x452af0);
      for (var _0x31370b = 0x1; _0x31370b < _0x5723bd; _0x31370b++) {
        _0xb9f33b[(_0x4ca8a1 >> 0x2) + _0x31370b] = _0x1c3817(_0x4bec3a[_0x31370b - 0x1]);
      }
      _0xb9f33b[(_0x4ca8a1 >> 0x2) + _0x5723bd] = 0x0;
      try {
        var _0x184940 = _0x21e1be(_0x5723bd, _0x4ca8a1);
        _0xf989a3(_0x184940, true);
        return _0x184940;
      } catch (_0xedf982) {
        return _0x58af9c(_0xedf982);
      } finally {
        _0x1b04dc = true;
      }
    }
    function _0x456c55(_0x4379fa) {
      _0x4379fa = _0x4379fa || _0x209b31;
      if (_0x5c9d46 > 0x0) {
        return;
      }
      _0x34ea93();
      if (_0x5c9d46 > 0x0) {
        return;
      }
      function _0x2cdeca() {
        if (_0x1a1130) {
          return;
        }
        _0x1a1130 = true;
        _0x3d91d8.calledRun = true;
        if (_0x32ccfc) {
          return;
        }
        _0x4245be();
        _0x22a872();
        _0x2821e7(_0x3d91d8);
        if (_0x3d91d8.onRuntimeInitialized) {
          _0x3d91d8.onRuntimeInitialized();
        }
        if (_0x32cf62) {
          _0x4d3d08(_0x4379fa);
        }
        _0x1932ba();
      }
      if (_0x3d91d8.setStatus) {
        _0x3d91d8.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            _0x3d91d8.setStatus('');
          }, 0x1);
          _0x2cdeca();
        }, 0x1);
      } else {
        _0x2cdeca();
      }
    }
    _0x3d91d8.run = _0x456c55;
    function _0xf989a3(_0x9b6ce0, _0x4be0bd) {
      _0x405327 = _0x9b6ce0;
      _0x3a2e99(_0x9b6ce0);
    }
    function _0x3a2e99(_0x55140d) {
      _0x405327 = _0x55140d;
      if (!_0x5dc2f9) {
        if (_0x3d91d8.onExit) {
          _0x3d91d8.onExit(_0x55140d);
        }
        _0x32ccfc = true;
      }
      _0x41bc27(_0x55140d, new _0x940b30(_0x55140d));
    }
    if (_0x3d91d8.preInit) {
      if (typeof _0x3d91d8.preInit == "function") {
        _0x3d91d8.preInit = [_0x3d91d8.preInit];
      }
      while (_0x3d91d8.preInit.length > 0x0) {
        _0x3d91d8.preInit.pop()();
      }
    }
    var _0x32cf62 = true;
    if (_0x3d91d8.noInitialRun) {
      _0x32cf62 = false;
    }
    _0x456c55();
    return _0x38a159.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object") {
  module.exports = unityFramework;
} else {
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return unityFramework;
    });
  } else {
    if (typeof exports === "object") {
      exports.unityFramework = unityFramework;
    }
  }
}

config.referrer = document.referrer;
function gmdebugtime(_0x38a2f3) {
  console.log("_TIME_" + _0x38a2f3 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x1f69c8) {
  console.log(_0x1f69c8);
}
function gmEvent(_0x4c2fa8, _0xc8369b) {
  loadGMData(_0x4c2fa8, _0xc8369b);
}
function gmStartGame(_0x2f3d60) {
  _0x2f3d60();
}
function gmStartAds(_0x6c39af) {
  _0x6c39af();
}
let fireFPS = 0x0;
async function loadGMData(_0x57e54d, _0x53c501) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0x57e54d != "document-ready" && _0x57e54d != "ban-game" && _0x57e54d != "start-game" && _0x57e54d != "unload-game") {
      return;
    }
    if (_0x57e54d == "fps") {
      try {
        let _0x265253 = _0x53c501.split("|");
        if (_0x265253.length >= 0x2) {
          firebaseLogEventParameter("timecounter", _0x265253[0x0]);
          if (fireFPS < 0x2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x265253[0x1]);
          }
        }
      } catch (_0x1d4621) {
        console.log("Error extracting time from abc:", _0x1d4621.message);
      }
    }
    let _0x303067 = '';
    if (_0x53c501) {
      _0x303067 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x53c501));
    }
    _0x303067 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x303067 += "&gid=" + config.gameId;
    if (_0x57e54d == "ban-game" || _0x57e54d == "document-ready" || _0x57e54d == "start-game") {
      _0x303067 += "&wtop=" + window.top.location.hostname;
      _0x303067 += "&hn=" + window.location.hostname;
      _0x303067 += "&referrer=" + config.referrer;
    }
    let _0x2b9e71 = "&data=" + btoa(_0x303067);
    let _0x2f4349 = config.eventAPI + "?event=" + _0x57e54d + _0x2b9e71;
    let _0x66b5fc = new XMLHttpRequest();
    _0x66b5fc.open("GET", _0x2f4349);
    _0x66b5fc.onreadystatechange = function () {
      if (_0x66b5fc.readyState !== 0x4) {
        return;
      }
      if (_0x66b5fc.status === 0xc8) {
        console.log(_0x66b5fc.responseText);
      } else {
        console.log("HTTP error", _0x66b5fc.status, _0x66b5fc.statusText);
      }
    };
    _0x66b5fc.send();
  } catch (_0x241f3b) {}
}
function xorEncryptMsg(_0x3e241c) {
  let _0xee2892 = '';
  for (let _0x2676cf = 0x0; _0x2676cf < _0x3e241c.length; _0x2676cf++) {
    const _0x591a1a = _0x3e241c.charCodeAt(_0x2676cf) ^ "gmdata@&!message@!3!@".charCodeAt(_0x2676cf % "gmdata@&!message@!3!@".length);
    _0xee2892 += String.fromCharCode(_0x591a1a);
  }
  return btoa(_0xee2892);
}
function check_event_log() {
  const _0x294f37 = window.location.search;
  const _0x4e86cd = new URLSearchParams(_0x294f37);
  if (_0x4e86cd.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x3e41ee) {
  try {
    const _0x859e7d = eval(_0x3e41ee);
    gmdebug("Result:", _0x859e7d);
    return _0x859e7d;
  } catch (_0x6f3cc0) {
    gmdebug("Error executing code:", _0x6f3cc0);
  }
}
function bangame(_0x2a6f5, _0x12111f, _0x17cc8a, _0x3d0f58) {
  document.dispatchEvent(new CustomEvent("gmsoftbanevent", {
    "detail": _0x3d0f58
  }));
}
document.addEventListener("DOMContentLoaded", function () {
  gmEvent("document-ready");
});
window.addEventListener("beforeunload", function (_0x2944b1) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x39f930 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x428118 = '';
      for (let _0x21abeb = 0x0; _0x21abeb < _0x39f930.length; _0x21abeb++) {
        const _0x1685fb = _0x39f930.charCodeAt(_0x21abeb) ^ "data@&@#$@#^FFgdfg!1estimate".charCodeAt(_0x21abeb % "data@&@#$@#^FFgdfg!1estimate".length);
        _0x428118 += String.fromCharCode(_0x1685fb);
      }
      sourceHtml = _0x428118;
      let _0x15f008 = document.getElementById("gmsoft-jssdk");
      if (!_0x15f008 || _0x15f008.src != sourceHtml) {
        bangame("d", "s", "id", "code 1");
      }
    } catch (_0x4c4ba5) {
      bangame("d", "s", "id", "JS code 2:" + _0x4c4ba5.message);
    }
  }, 0xbb8);
}