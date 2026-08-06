import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// ../../node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports, module) => {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  var __addDisposableResource;
  var __disposeResources;
  var __rewriteRelativeImportExtension;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v) {
        return exports2[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== undefined && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1;i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === undefined)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0;i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : undefined;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name, prefix) {
      if (typeof name === "symbol")
        name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar;i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function awaitReturn(f) {
        return function(v) {
          return Promise.resolve(v).then(f, reject);
        };
      }
      function verb(n, f) {
        if (g[n]) {
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
          if (f)
            i[n] = f(i[n]);
        }
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    __addDisposableResource = function(env, value, async) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async)
            inner = dispose;
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        if (inner)
          dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __disposeResources = function(env) {
      function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1)
              return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async)
                return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } else
              s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1)
          return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
    __rewriteRelativeImportExtension = function(path, preserveJsx) {
      if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
      }
      return path;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
  });
});

// ../../node_modules/@aws-crypto/sha256-js/build/main/constants.js
var require_constants = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = undefined;
  exports.BLOCK_SIZE = 64;
  exports.DIGEST_LENGTH = 32;
  exports.KEY = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  exports.INIT = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
});

// ../../node_modules/@aws-crypto/sha256-js/build/main/RawSha256.js
var require_RawSha256 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RawSha256 = undefined;
  var constants_1 = require_constants();
  var RawSha256 = function() {
    function RawSha2562() {
      this.state = Int32Array.from(constants_1.INIT);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
    RawSha2562.prototype.update = function(data) {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      }
      while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === constants_1.BLOCK_SIZE) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    };
    RawSha2562.prototype.digest = function() {
      if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 128);
        if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
          for (var i = this.bufferLength;i < constants_1.BLOCK_SIZE; i++) {
            bufferView.setUint8(i, 0);
          }
          this.hashBuffer();
          this.bufferLength = 0;
        }
        for (var i = this.bufferLength;i < constants_1.BLOCK_SIZE - 8; i++) {
          bufferView.setUint8(i, 0);
        }
        bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
        bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
      }
      var out = new Uint8Array(constants_1.DIGEST_LENGTH);
      for (var i = 0;i < 8; i++) {
        out[i * 4] = this.state[i] >>> 24 & 255;
        out[i * 4 + 1] = this.state[i] >>> 16 & 255;
        out[i * 4 + 2] = this.state[i] >>> 8 & 255;
        out[i * 4 + 3] = this.state[i] >>> 0 & 255;
      }
      return out;
    };
    RawSha2562.prototype.hashBuffer = function() {
      var _a = this, buffer = _a.buffer, state = _a.state;
      var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
      for (var i = 0;i < constants_1.BLOCK_SIZE; i++) {
        if (i < 16) {
          this.temp[i] = (buffer[i * 4] & 255) << 24 | (buffer[i * 4 + 1] & 255) << 16 | (buffer[i * 4 + 2] & 255) << 8 | buffer[i * 4 + 3] & 255;
        } else {
          var u = this.temp[i - 2];
          var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
          u = this.temp[i - 15];
          var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
          this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
        }
        var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i] + this.temp[i] | 0) | 0) | 0;
        var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = state3 + t1 | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = t1 + t2 | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
    };
    return RawSha2562;
  }();
  exports.RawSha256 = RawSha256;
});

// ../../node_modules/@smithy/util-buffer-from/node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs = __commonJS((exports, module) => {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export(src_exports, {
    isArrayBuffer: () => isArrayBuffer
  });
  module.exports = __toCommonJS(src_exports);
  var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
});

// ../../node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs2 = __commonJS((exports, module) => {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export(src_exports, {
    fromArrayBuffer: () => fromArrayBuffer,
    fromString: () => fromString
  });
  module.exports = __toCommonJS(src_exports);
  var import_is_array_buffer = require_dist_cjs();
  var import_buffer = __require("buffer");
  var fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
    if (!(0, import_is_array_buffer.isArrayBuffer)(input)) {
      throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return import_buffer.Buffer.from(input, offset, length);
  }, "fromArrayBuffer");
  var fromString = /* @__PURE__ */ __name((input, encoding) => {
    if (typeof input !== "string") {
      throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? import_buffer.Buffer.from(input, encoding) : import_buffer.Buffer.from(input);
  }, "fromString");
});

// ../../node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs3 = __commonJS((exports, module) => {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export(src_exports, {
    fromUtf8: () => fromUtf8,
    toUint8Array: () => toUint8Array,
    toUtf8: () => toUtf8
  });
  module.exports = __toCommonJS(src_exports);
  var import_util_buffer_from = require_dist_cjs2();
  var fromUtf8 = /* @__PURE__ */ __name((input) => {
    const buf = (0, import_util_buffer_from.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, "fromUtf8");
  var toUint8Array = /* @__PURE__ */ __name((data) => {
    if (typeof data === "string") {
      return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }, "toUint8Array");
  var toUtf8 = /* @__PURE__ */ __name((input) => {
    if (typeof input === "string") {
      return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
      throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return (0, import_util_buffer_from.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
  }, "toUtf8");
});

// ../../node_modules/@aws-crypto/util/build/main/convertToBuffer.js
var require_convertToBuffer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertToBuffer = undefined;
  var util_utf8_1 = require_dist_cjs3();
  var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : util_utf8_1.fromUtf8;
  function convertToBuffer(data) {
    if (data instanceof Uint8Array)
      return data;
    if (typeof data === "string") {
      return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }
  exports.convertToBuffer = convertToBuffer;
});

// ../../node_modules/@aws-crypto/util/build/main/isEmptyData.js
var require_isEmptyData = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isEmptyData = undefined;
  function isEmptyData(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }
  exports.isEmptyData = isEmptyData;
});

// ../../node_modules/@aws-crypto/util/build/main/numToUint8.js
var require_numToUint8 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.numToUint8 = undefined;
  function numToUint8(num) {
    return new Uint8Array([
      (num & 4278190080) >> 24,
      (num & 16711680) >> 16,
      (num & 65280) >> 8,
      num & 255
    ]);
  }
  exports.numToUint8 = numToUint8;
});

// ../../node_modules/@aws-crypto/util/build/main/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.uint32ArrayFrom = undefined;
  function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
      var return_array = new Uint32Array(a_lookUpTable.length);
      var a_index = 0;
      while (a_index < a_lookUpTable.length) {
        return_array[a_index] = a_lookUpTable[a_index];
        a_index += 1;
      }
      return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
  }
  exports.uint32ArrayFrom = uint32ArrayFrom;
});

// ../../node_modules/@aws-crypto/util/build/main/index.js
var require_main = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = undefined;
  var convertToBuffer_1 = require_convertToBuffer();
  Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
    return convertToBuffer_1.convertToBuffer;
  } });
  var isEmptyData_1 = require_isEmptyData();
  Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
    return isEmptyData_1.isEmptyData;
  } });
  var numToUint8_1 = require_numToUint8();
  Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
    return numToUint8_1.numToUint8;
  } });
  var uint32ArrayFrom_1 = require_uint32ArrayFrom();
  Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
    return uint32ArrayFrom_1.uint32ArrayFrom;
  } });
});

// ../../node_modules/@aws-crypto/sha256-js/build/main/jsSha256.js
var require_jsSha256 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Sha256 = undefined;
  var tslib_1 = require_tslib();
  var constants_1 = require_constants();
  var RawSha256_1 = require_RawSha256();
  var util_1 = require_main();
  var Sha256 = function() {
    function Sha2562(secret) {
      this.secret = secret;
      this.hash = new RawSha256_1.RawSha256;
      this.reset();
    }
    Sha2562.prototype.update = function(toHash) {
      if ((0, util_1.isEmptyData)(toHash) || this.error) {
        return;
      }
      try {
        this.hash.update((0, util_1.convertToBuffer)(toHash));
      } catch (e) {
        this.error = e;
      }
    };
    Sha2562.prototype.digestSync = function() {
      if (this.error) {
        throw this.error;
      }
      if (this.outer) {
        if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
        }
        return this.outer.digest();
      }
      return this.hash.digest();
    };
    Sha2562.prototype.digest = function() {
      return tslib_1.__awaiter(this, undefined, undefined, function() {
        return tslib_1.__generator(this, function(_a) {
          return [2, this.digestSync()];
        });
      });
    };
    Sha2562.prototype.reset = function() {
      this.hash = new RawSha256_1.RawSha256;
      if (this.secret) {
        this.outer = new RawSha256_1.RawSha256;
        var inner = bufferFromSecret(this.secret);
        var outer = new Uint8Array(constants_1.BLOCK_SIZE);
        outer.set(inner);
        for (var i = 0;i < constants_1.BLOCK_SIZE; i++) {
          inner[i] ^= 54;
          outer[i] ^= 92;
        }
        this.hash.update(inner);
        this.outer.update(outer);
        for (var i = 0;i < inner.byteLength; i++) {
          inner[i] = 0;
        }
      }
    };
    return Sha2562;
  }();
  exports.Sha256 = Sha256;
  function bufferFromSecret(secret) {
    var input = (0, util_1.convertToBuffer)(secret);
    if (input.byteLength > constants_1.BLOCK_SIZE) {
      var bufferHash = new RawSha256_1.RawSha256;
      bufferHash.update(input);
      input = bufferHash.digest();
    }
    var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
  }
});

// ../../node_modules/@aws-crypto/sha256-js/build/main/index.js
var require_main2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require_tslib();
  tslib_1.__exportStar(require_jsSha256(), exports);
});

// ../../node_modules/ajv/dist/compile/codegen/code.js
var require_code = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = undefined;

  class _CodeOrName {
  }
  exports._CodeOrName = _CodeOrName;
  exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;

  class Name extends _CodeOrName {
    constructor(s) {
      super();
      if (!exports.IDENTIFIER.test(s))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = s;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return false;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  exports.Name = Name;

  class _Code extends _CodeOrName {
    constructor(code) {
      super();
      this._items = typeof code === "string" ? [code] : code;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return false;
      const item = this._items[0];
      return item === "" || item === '""';
    }
    get str() {
      var _a;
      return (_a = this._str) !== null && _a !== undefined ? _a : this._str = this._items.reduce((s, c) => `${s}${c}`, "");
    }
    get names() {
      var _a;
      return (_a = this._names) !== null && _a !== undefined ? _a : this._names = this._items.reduce((names, c) => {
        if (c instanceof Name)
          names[c.str] = (names[c.str] || 0) + 1;
        return names;
      }, {});
    }
  }
  exports._Code = _Code;
  exports.nil = new _Code("");
  function _(strs, ...args) {
    const code = [strs[0]];
    let i = 0;
    while (i < args.length) {
      addCodeArg(code, args[i]);
      code.push(strs[++i]);
    }
    return new _Code(code);
  }
  exports._ = _;
  var plus = new _Code("+");
  function str(strs, ...args) {
    const expr = [safeStringify(strs[0])];
    let i = 0;
    while (i < args.length) {
      expr.push(plus);
      addCodeArg(expr, args[i]);
      expr.push(plus, safeStringify(strs[++i]));
    }
    optimize(expr);
    return new _Code(expr);
  }
  exports.str = str;
  function addCodeArg(code, arg) {
    if (arg instanceof _Code)
      code.push(...arg._items);
    else if (arg instanceof Name)
      code.push(arg);
    else
      code.push(interpolate(arg));
  }
  exports.addCodeArg = addCodeArg;
  function optimize(expr) {
    let i = 1;
    while (i < expr.length - 1) {
      if (expr[i] === plus) {
        const res = mergeExprItems(expr[i - 1], expr[i + 1]);
        if (res !== undefined) {
          expr.splice(i - 1, 3, res);
          continue;
        }
        expr[i++] = "+";
      }
      i++;
    }
  }
  function mergeExprItems(a, b) {
    if (b === '""')
      return a;
    if (a === '""')
      return b;
    if (typeof a == "string") {
      if (b instanceof Name || a[a.length - 1] !== '"')
        return;
      if (typeof b != "string")
        return `${a.slice(0, -1)}${b}"`;
      if (b[0] === '"')
        return a.slice(0, -1) + b.slice(1);
      return;
    }
    if (typeof b == "string" && b[0] === '"' && !(a instanceof Name))
      return `"${a}${b.slice(1)}`;
    return;
  }
  function strConcat(c1, c2) {
    return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`;
  }
  exports.strConcat = strConcat;
  function interpolate(x) {
    return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
  }
  function stringify(x) {
    return new _Code(safeStringify(x));
  }
  exports.stringify = stringify;
  function safeStringify(x) {
    return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  exports.safeStringify = safeStringify;
  function getProperty(key) {
    return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _`[${key}]`;
  }
  exports.getProperty = getProperty;
  function getEsmExportName(key) {
    if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
      return new _Code(`${key}`);
    }
    throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
  }
  exports.getEsmExportName = getEsmExportName;
  function regexpCode(rx) {
    return new _Code(rx.toString());
  }
  exports.regexpCode = regexpCode;
});

// ../../node_modules/ajv/dist/compile/codegen/scope.js
var require_scope = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = undefined;
  var code_1 = require_code();

  class ValueError extends Error {
    constructor(name) {
      super(`CodeGen: "code" for ${name} not defined`);
      this.value = name.value;
    }
  }
  var UsedValueState;
  (function(UsedValueState2) {
    UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
    UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
  })(UsedValueState || (exports.UsedValueState = UsedValueState = {}));
  exports.varKinds = {
    const: new code_1.Name("const"),
    let: new code_1.Name("let"),
    var: new code_1.Name("var")
  };

  class Scope {
    constructor({ prefixes, parent } = {}) {
      this._names = {};
      this._prefixes = prefixes;
      this._parent = parent;
    }
    toName(nameOrPrefix) {
      return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
    }
    name(prefix) {
      return new code_1.Name(this._newName(prefix));
    }
    _newName(prefix) {
      const ng = this._names[prefix] || this._nameGroup(prefix);
      return `${prefix}${ng.index++}`;
    }
    _nameGroup(prefix) {
      var _a, _b;
      if (((_b = (_a = this._parent) === null || _a === undefined ? undefined : _a._prefixes) === null || _b === undefined ? undefined : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
        throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
      }
      return this._names[prefix] = { prefix, index: 0 };
    }
  }
  exports.Scope = Scope;

  class ValueScopeName extends code_1.Name {
    constructor(prefix, nameStr) {
      super(nameStr);
      this.prefix = prefix;
    }
    setValue(value, { property, itemIndex }) {
      this.value = value;
      this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
    }
  }
  exports.ValueScopeName = ValueScopeName;
  var line = (0, code_1._)`\n`;

  class ValueScope extends Scope {
    constructor(opts) {
      super(opts);
      this._values = {};
      this._scope = opts.scope;
      this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
    }
    get() {
      return this._scope;
    }
    name(prefix) {
      return new ValueScopeName(prefix, this._newName(prefix));
    }
    value(nameOrPrefix, value) {
      var _a;
      if (value.ref === undefined)
        throw new Error("CodeGen: ref must be passed in value");
      const name = this.toName(nameOrPrefix);
      const { prefix } = name;
      const valueKey = (_a = value.key) !== null && _a !== undefined ? _a : value.ref;
      let vs = this._values[prefix];
      if (vs) {
        const _name = vs.get(valueKey);
        if (_name)
          return _name;
      } else {
        vs = this._values[prefix] = new Map;
      }
      vs.set(valueKey, name);
      const s = this._scope[prefix] || (this._scope[prefix] = []);
      const itemIndex = s.length;
      s[itemIndex] = value.ref;
      name.setValue(value, { property: prefix, itemIndex });
      return name;
    }
    getValue(prefix, keyOrRef) {
      const vs = this._values[prefix];
      if (!vs)
        return;
      return vs.get(keyOrRef);
    }
    scopeRefs(scopeName, values = this._values) {
      return this._reduceValues(values, (name) => {
        if (name.scopePath === undefined)
          throw new Error(`CodeGen: name "${name}" has no value`);
        return (0, code_1._)`${scopeName}${name.scopePath}`;
      });
    }
    scopeCode(values = this._values, usedValues, getCode) {
      return this._reduceValues(values, (name) => {
        if (name.value === undefined)
          throw new Error(`CodeGen: name "${name}" has no value`);
        return name.value.code;
      }, usedValues, getCode);
    }
    _reduceValues(values, valueCode, usedValues = {}, getCode) {
      let code = code_1.nil;
      for (const prefix in values) {
        const vs = values[prefix];
        if (!vs)
          continue;
        const nameSet = usedValues[prefix] = usedValues[prefix] || new Map;
        vs.forEach((name) => {
          if (nameSet.has(name))
            return;
          nameSet.set(name, UsedValueState.Started);
          let c = valueCode(name);
          if (c) {
            const def = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
            code = (0, code_1._)`${code}${def} ${name} = ${c};${this.opts._n}`;
          } else if (c = getCode === null || getCode === undefined ? undefined : getCode(name)) {
            code = (0, code_1._)`${code}${c}${this.opts._n}`;
          } else {
            throw new ValueError(name);
          }
          nameSet.set(name, UsedValueState.Completed);
        });
      }
      return code;
    }
  }
  exports.ValueScope = ValueScope;
});

// ../../node_modules/ajv/dist/compile/codegen/index.js
var require_codegen = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = undefined;
  var code_1 = require_code();
  var scope_1 = require_scope();
  var code_2 = require_code();
  Object.defineProperty(exports, "_", { enumerable: true, get: function() {
    return code_2._;
  } });
  Object.defineProperty(exports, "str", { enumerable: true, get: function() {
    return code_2.str;
  } });
  Object.defineProperty(exports, "strConcat", { enumerable: true, get: function() {
    return code_2.strConcat;
  } });
  Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
    return code_2.nil;
  } });
  Object.defineProperty(exports, "getProperty", { enumerable: true, get: function() {
    return code_2.getProperty;
  } });
  Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
    return code_2.stringify;
  } });
  Object.defineProperty(exports, "regexpCode", { enumerable: true, get: function() {
    return code_2.regexpCode;
  } });
  Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
    return code_2.Name;
  } });
  var scope_2 = require_scope();
  Object.defineProperty(exports, "Scope", { enumerable: true, get: function() {
    return scope_2.Scope;
  } });
  Object.defineProperty(exports, "ValueScope", { enumerable: true, get: function() {
    return scope_2.ValueScope;
  } });
  Object.defineProperty(exports, "ValueScopeName", { enumerable: true, get: function() {
    return scope_2.ValueScopeName;
  } });
  Object.defineProperty(exports, "varKinds", { enumerable: true, get: function() {
    return scope_2.varKinds;
  } });
  exports.operators = {
    GT: new code_1._Code(">"),
    GTE: new code_1._Code(">="),
    LT: new code_1._Code("<"),
    LTE: new code_1._Code("<="),
    EQ: new code_1._Code("==="),
    NEQ: new code_1._Code("!=="),
    NOT: new code_1._Code("!"),
    OR: new code_1._Code("||"),
    AND: new code_1._Code("&&"),
    ADD: new code_1._Code("+")
  };

  class Node {
    optimizeNodes() {
      return this;
    }
    optimizeNames(_names, _constants) {
      return this;
    }
  }

  class Def extends Node {
    constructor(varKind, name, rhs) {
      super();
      this.varKind = varKind;
      this.name = name;
      this.rhs = rhs;
    }
    render({ es5, _n }) {
      const varKind = es5 ? scope_1.varKinds.var : this.varKind;
      const rhs = this.rhs === undefined ? "" : ` = ${this.rhs}`;
      return `${varKind} ${this.name}${rhs};` + _n;
    }
    optimizeNames(names, constants) {
      if (!names[this.name.str])
        return;
      if (this.rhs)
        this.rhs = optimizeExpr(this.rhs, names, constants);
      return this;
    }
    get names() {
      return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
    }
  }

  class Assign extends Node {
    constructor(lhs, rhs, sideEffects) {
      super();
      this.lhs = lhs;
      this.rhs = rhs;
      this.sideEffects = sideEffects;
    }
    render({ _n }) {
      return `${this.lhs} = ${this.rhs};` + _n;
    }
    optimizeNames(names, constants) {
      if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects)
        return;
      this.rhs = optimizeExpr(this.rhs, names, constants);
      return this;
    }
    get names() {
      const names = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
      return addExprNames(names, this.rhs);
    }
  }

  class AssignOp extends Assign {
    constructor(lhs, op, rhs, sideEffects) {
      super(lhs, rhs, sideEffects);
      this.op = op;
    }
    render({ _n }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
    }
  }

  class Label extends Node {
    constructor(label) {
      super();
      this.label = label;
      this.names = {};
    }
    render({ _n }) {
      return `${this.label}:` + _n;
    }
  }

  class Break extends Node {
    constructor(label) {
      super();
      this.label = label;
      this.names = {};
    }
    render({ _n }) {
      const label = this.label ? ` ${this.label}` : "";
      return `break${label};` + _n;
    }
  }

  class Throw extends Node {
    constructor(error) {
      super();
      this.error = error;
    }
    render({ _n }) {
      return `throw ${this.error};` + _n;
    }
    get names() {
      return this.error.names;
    }
  }

  class AnyCode extends Node {
    constructor(code) {
      super();
      this.code = code;
    }
    render({ _n }) {
      return `${this.code};` + _n;
    }
    optimizeNodes() {
      return `${this.code}` ? this : undefined;
    }
    optimizeNames(names, constants) {
      this.code = optimizeExpr(this.code, names, constants);
      return this;
    }
    get names() {
      return this.code instanceof code_1._CodeOrName ? this.code.names : {};
    }
  }

  class ParentNode extends Node {
    constructor(nodes = []) {
      super();
      this.nodes = nodes;
    }
    render(opts) {
      return this.nodes.reduce((code, n) => code + n.render(opts), "");
    }
    optimizeNodes() {
      const { nodes } = this;
      let i = nodes.length;
      while (i--) {
        const n = nodes[i].optimizeNodes();
        if (Array.isArray(n))
          nodes.splice(i, 1, ...n);
        else if (n)
          nodes[i] = n;
        else
          nodes.splice(i, 1);
      }
      return nodes.length > 0 ? this : undefined;
    }
    optimizeNames(names, constants) {
      const { nodes } = this;
      let i = nodes.length;
      while (i--) {
        const n = nodes[i];
        if (n.optimizeNames(names, constants))
          continue;
        subtractNames(names, n.names);
        nodes.splice(i, 1);
      }
      return nodes.length > 0 ? this : undefined;
    }
    get names() {
      return this.nodes.reduce((names, n) => addNames(names, n.names), {});
    }
  }

  class BlockNode extends ParentNode {
    render(opts) {
      return "{" + opts._n + super.render(opts) + "}" + opts._n;
    }
  }

  class Root extends ParentNode {
  }

  class Else extends BlockNode {
  }
  Else.kind = "else";

  class If extends BlockNode {
    constructor(condition, nodes) {
      super(nodes);
      this.condition = condition;
    }
    render(opts) {
      let code = `if(${this.condition})` + super.render(opts);
      if (this.else)
        code += "else " + this.else.render(opts);
      return code;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const cond = this.condition;
      if (cond === true)
        return this.nodes;
      let e = this.else;
      if (e) {
        const ns = e.optimizeNodes();
        e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
      }
      if (e) {
        if (cond === false)
          return e instanceof If ? e : e.nodes;
        if (this.nodes.length)
          return this;
        return new If(not(cond), e instanceof If ? [e] : e.nodes);
      }
      if (cond === false || !this.nodes.length)
        return;
      return this;
    }
    optimizeNames(names, constants) {
      var _a;
      this.else = (_a = this.else) === null || _a === undefined ? undefined : _a.optimizeNames(names, constants);
      if (!(super.optimizeNames(names, constants) || this.else))
        return;
      this.condition = optimizeExpr(this.condition, names, constants);
      return this;
    }
    get names() {
      const names = super.names;
      addExprNames(names, this.condition);
      if (this.else)
        addNames(names, this.else.names);
      return names;
    }
  }
  If.kind = "if";

  class For extends BlockNode {
  }
  For.kind = "for";

  class ForLoop extends For {
    constructor(iteration) {
      super();
      this.iteration = iteration;
    }
    render(opts) {
      return `for(${this.iteration})` + super.render(opts);
    }
    optimizeNames(names, constants) {
      if (!super.optimizeNames(names, constants))
        return;
      this.iteration = optimizeExpr(this.iteration, names, constants);
      return this;
    }
    get names() {
      return addNames(super.names, this.iteration.names);
    }
  }

  class ForRange extends For {
    constructor(varKind, name, from, to) {
      super();
      this.varKind = varKind;
      this.name = name;
      this.from = from;
      this.to = to;
    }
    render(opts) {
      const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
      const { name, from, to } = this;
      return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
    }
    get names() {
      const names = addExprNames(super.names, this.from);
      return addExprNames(names, this.to);
    }
  }

  class ForIter extends For {
    constructor(loop, varKind, name, iterable) {
      super();
      this.loop = loop;
      this.varKind = varKind;
      this.name = name;
      this.iterable = iterable;
    }
    render(opts) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
    }
    optimizeNames(names, constants) {
      if (!super.optimizeNames(names, constants))
        return;
      this.iterable = optimizeExpr(this.iterable, names, constants);
      return this;
    }
    get names() {
      return addNames(super.names, this.iterable.names);
    }
  }

  class Func extends BlockNode {
    constructor(name, args, async) {
      super();
      this.name = name;
      this.args = args;
      this.async = async;
    }
    render(opts) {
      const _async = this.async ? "async " : "";
      return `${_async}function ${this.name}(${this.args})` + super.render(opts);
    }
  }
  Func.kind = "func";

  class Return extends ParentNode {
    render(opts) {
      return "return " + super.render(opts);
    }
  }
  Return.kind = "return";

  class Try extends BlockNode {
    render(opts) {
      let code = "try" + super.render(opts);
      if (this.catch)
        code += this.catch.render(opts);
      if (this.finally)
        code += this.finally.render(opts);
      return code;
    }
    optimizeNodes() {
      var _a, _b;
      super.optimizeNodes();
      (_a = this.catch) === null || _a === undefined || _a.optimizeNodes();
      (_b = this.finally) === null || _b === undefined || _b.optimizeNodes();
      return this;
    }
    optimizeNames(names, constants) {
      var _a, _b;
      super.optimizeNames(names, constants);
      (_a = this.catch) === null || _a === undefined || _a.optimizeNames(names, constants);
      (_b = this.finally) === null || _b === undefined || _b.optimizeNames(names, constants);
      return this;
    }
    get names() {
      const names = super.names;
      if (this.catch)
        addNames(names, this.catch.names);
      if (this.finally)
        addNames(names, this.finally.names);
      return names;
    }
  }

  class Catch extends BlockNode {
    constructor(error) {
      super();
      this.error = error;
    }
    render(opts) {
      return `catch(${this.error})` + super.render(opts);
    }
  }
  Catch.kind = "catch";

  class Finally extends BlockNode {
    render(opts) {
      return "finally" + super.render(opts);
    }
  }
  Finally.kind = "finally";

  class CodeGen {
    constructor(extScope, opts = {}) {
      this._values = {};
      this._blockStarts = [];
      this._constants = {};
      this.opts = { ...opts, _n: opts.lines ? `
` : "" };
      this._extScope = extScope;
      this._scope = new scope_1.Scope({ parent: extScope });
      this._nodes = [new Root];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(prefix) {
      return this._scope.name(prefix);
    }
    scopeName(prefix) {
      return this._extScope.name(prefix);
    }
    scopeValue(prefixOrName, value) {
      const name = this._extScope.value(prefixOrName, value);
      const vs = this._values[name.prefix] || (this._values[name.prefix] = new Set);
      vs.add(name);
      return name;
    }
    getScopeValue(prefix, keyOrRef) {
      return this._extScope.getValue(prefix, keyOrRef);
    }
    scopeRefs(scopeName) {
      return this._extScope.scopeRefs(scopeName, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(varKind, nameOrPrefix, rhs, constant) {
      const name = this._scope.toName(nameOrPrefix);
      if (rhs !== undefined && constant)
        this._constants[name.str] = rhs;
      this._leafNode(new Def(varKind, name, rhs));
      return name;
    }
    const(nameOrPrefix, rhs, _constant) {
      return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
    }
    let(nameOrPrefix, rhs, _constant) {
      return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
    }
    var(nameOrPrefix, rhs, _constant) {
      return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
    }
    assign(lhs, rhs, sideEffects) {
      return this._leafNode(new Assign(lhs, rhs, sideEffects));
    }
    add(lhs, rhs) {
      return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
    }
    code(c) {
      if (typeof c == "function")
        c();
      else if (c !== code_1.nil)
        this._leafNode(new AnyCode(c));
      return this;
    }
    object(...keyValues) {
      const code = ["{"];
      for (const [key, value] of keyValues) {
        if (code.length > 1)
          code.push(",");
        code.push(key);
        if (key !== value || this.opts.es5) {
          code.push(":");
          (0, code_1.addCodeArg)(code, value);
        }
      }
      code.push("}");
      return new code_1._Code(code);
    }
    if(condition, thenBody, elseBody) {
      this._blockNode(new If(condition));
      if (thenBody && elseBody) {
        this.code(thenBody).else().code(elseBody).endIf();
      } else if (thenBody) {
        this.code(thenBody).endIf();
      } else if (elseBody) {
        throw new Error('CodeGen: "else" body without "then" body');
      }
      return this;
    }
    elseIf(condition) {
      return this._elseNode(new If(condition));
    }
    else() {
      return this._elseNode(new Else);
    }
    endIf() {
      return this._endBlockNode(If, Else);
    }
    _for(node, forBody) {
      this._blockNode(node);
      if (forBody)
        this.code(forBody).endFor();
      return this;
    }
    for(iteration, forBody) {
      return this._for(new ForLoop(iteration), forBody);
    }
    forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
      const name = this._scope.toName(nameOrPrefix);
      return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
    }
    forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
      const name = this._scope.toName(nameOrPrefix);
      if (this.opts.es5) {
        const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
        return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i) => {
          this.var(name, (0, code_1._)`${arr}[${i}]`);
          forBody(name);
        });
      }
      return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
    }
    forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
      if (this.opts.ownProperties) {
        return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
      }
      const name = this._scope.toName(nameOrPrefix);
      return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
    }
    endFor() {
      return this._endBlockNode(For);
    }
    label(label) {
      return this._leafNode(new Label(label));
    }
    break(label) {
      return this._leafNode(new Break(label));
    }
    return(value) {
      const node = new Return;
      this._blockNode(node);
      this.code(value);
      if (node.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(Return);
    }
    try(tryBody, catchCode, finallyCode) {
      if (!catchCode && !finallyCode)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const node = new Try;
      this._blockNode(node);
      this.code(tryBody);
      if (catchCode) {
        const error = this.name("e");
        this._currNode = node.catch = new Catch(error);
        catchCode(error);
      }
      if (finallyCode) {
        this._currNode = node.finally = new Finally;
        this.code(finallyCode);
      }
      return this._endBlockNode(Catch, Finally);
    }
    throw(error) {
      return this._leafNode(new Throw(error));
    }
    block(body, nodeCount) {
      this._blockStarts.push(this._nodes.length);
      if (body)
        this.code(body).endBlock(nodeCount);
      return this;
    }
    endBlock(nodeCount) {
      const len = this._blockStarts.pop();
      if (len === undefined)
        throw new Error("CodeGen: not in self-balancing block");
      const toClose = this._nodes.length - len;
      if (toClose < 0 || nodeCount !== undefined && toClose !== nodeCount) {
        throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
      }
      this._nodes.length = len;
      return this;
    }
    func(name, args = code_1.nil, async, funcBody) {
      this._blockNode(new Func(name, args, async));
      if (funcBody)
        this.code(funcBody).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(Func);
    }
    optimize(n = 1) {
      while (n-- > 0) {
        this._root.optimizeNodes();
        this._root.optimizeNames(this._root.names, this._constants);
      }
    }
    _leafNode(node) {
      this._currNode.nodes.push(node);
      return this;
    }
    _blockNode(node) {
      this._currNode.nodes.push(node);
      this._nodes.push(node);
    }
    _endBlockNode(N1, N2) {
      const n = this._currNode;
      if (n instanceof N1 || N2 && n instanceof N2) {
        this._nodes.pop();
        return this;
      }
      throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
    }
    _elseNode(node) {
      const n = this._currNode;
      if (!(n instanceof If)) {
        throw new Error('CodeGen: "else" without "if"');
      }
      this._currNode = n.else = node;
      return this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const ns = this._nodes;
      return ns[ns.length - 1];
    }
    set _currNode(node) {
      const ns = this._nodes;
      ns[ns.length - 1] = node;
    }
  }
  exports.CodeGen = CodeGen;
  function addNames(names, from) {
    for (const n in from)
      names[n] = (names[n] || 0) + (from[n] || 0);
    return names;
  }
  function addExprNames(names, from) {
    return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
  }
  function optimizeExpr(expr, names, constants) {
    if (expr instanceof code_1.Name)
      return replaceName(expr);
    if (!canOptimize(expr))
      return expr;
    return new code_1._Code(expr._items.reduce((items, c) => {
      if (c instanceof code_1.Name)
        c = replaceName(c);
      if (c instanceof code_1._Code)
        items.push(...c._items);
      else
        items.push(c);
      return items;
    }, []));
    function replaceName(n) {
      const c = constants[n.str];
      if (c === undefined || names[n.str] !== 1)
        return n;
      delete names[n.str];
      return c;
    }
    function canOptimize(e) {
      return e instanceof code_1._Code && e._items.some((c) => c instanceof code_1.Name && names[c.str] === 1 && constants[c.str] !== undefined);
    }
  }
  function subtractNames(names, from) {
    for (const n in from)
      names[n] = (names[n] || 0) - (from[n] || 0);
  }
  function not(x) {
    return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)`!${par(x)}`;
  }
  exports.not = not;
  var andCode = mappend(exports.operators.AND);
  function and(...args) {
    return args.reduce(andCode);
  }
  exports.and = and;
  var orCode = mappend(exports.operators.OR);
  function or(...args) {
    return args.reduce(orCode);
  }
  exports.or = or;
  function mappend(op) {
    return (x, y) => x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)`${par(x)} ${op} ${par(y)}`;
  }
  function par(x) {
    return x instanceof code_1.Name ? x : (0, code_1._)`(${x})`;
  }
});

// ../../node_modules/ajv/dist/compile/util.js
var require_util = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = undefined;
  var codegen_1 = require_codegen();
  var code_1 = require_code();
  function toHash(arr) {
    const hash = {};
    for (const item of arr)
      hash[item] = true;
    return hash;
  }
  exports.toHash = toHash;
  function alwaysValidSchema(it, schema) {
    if (typeof schema == "boolean")
      return schema;
    if (Object.keys(schema).length === 0)
      return true;
    checkUnknownRules(it, schema);
    return !schemaHasRules(schema, it.self.RULES.all);
  }
  exports.alwaysValidSchema = alwaysValidSchema;
  function checkUnknownRules(it, schema = it.schema) {
    const { opts, self: self2 } = it;
    if (!opts.strictSchema)
      return;
    if (typeof schema === "boolean")
      return;
    const rules = self2.RULES.keywords;
    for (const key in schema) {
      if (!rules[key])
        checkStrictMode(it, `unknown keyword: "${key}"`);
    }
  }
  exports.checkUnknownRules = checkUnknownRules;
  function schemaHasRules(schema, rules) {
    if (typeof schema == "boolean")
      return !schema;
    for (const key in schema)
      if (rules[key])
        return true;
    return false;
  }
  exports.schemaHasRules = schemaHasRules;
  function schemaHasRulesButRef(schema, RULES) {
    if (typeof schema == "boolean")
      return !schema;
    for (const key in schema)
      if (key !== "$ref" && RULES.all[key])
        return true;
    return false;
  }
  exports.schemaHasRulesButRef = schemaHasRulesButRef;
  function schemaRefOrVal({ topSchemaRef, schemaPath }, schema, keyword, $data) {
    if (!$data) {
      if (typeof schema == "number" || typeof schema == "boolean")
        return schema;
      if (typeof schema == "string")
        return (0, codegen_1._)`${schema}`;
    }
    return (0, codegen_1._)`${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
  }
  exports.schemaRefOrVal = schemaRefOrVal;
  function unescapeFragment(str) {
    return unescapeJsonPointer(decodeURIComponent(str));
  }
  exports.unescapeFragment = unescapeFragment;
  function escapeFragment(str) {
    return encodeURIComponent(escapeJsonPointer(str));
  }
  exports.escapeFragment = escapeFragment;
  function escapeJsonPointer(str) {
    if (typeof str == "number")
      return `${str}`;
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  exports.escapeJsonPointer = escapeJsonPointer;
  function unescapeJsonPointer(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  exports.unescapeJsonPointer = unescapeJsonPointer;
  function eachItem(xs, f) {
    if (Array.isArray(xs)) {
      for (const x of xs)
        f(x);
    } else {
      f(xs);
    }
  }
  exports.eachItem = eachItem;
  function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues, resultToName }) {
    return (gen, from, to, toName) => {
      const res = to === undefined ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
      return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
    };
  }
  exports.mergeEvaluated = {
    props: makeMergeEvaluated({
      mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => {
        gen.if((0, codegen_1._)`${from} === true`, () => gen.assign(to, true), () => gen.assign(to, (0, codegen_1._)`${to} || {}`).code((0, codegen_1._)`Object.assign(${to}, ${from})`));
      }),
      mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => {
        if (from === true) {
          gen.assign(to, true);
        } else {
          gen.assign(to, (0, codegen_1._)`${to} || {}`);
          setEvaluated(gen, to, from);
        }
      }),
      mergeValues: (from, to) => from === true ? true : { ...from, ...to },
      resultToName: evaluatedPropsToName
    }),
    items: makeMergeEvaluated({
      mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_1._)`${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
      mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => gen.assign(to, from === true ? true : (0, codegen_1._)`${to} > ${from} ? ${to} : ${from}`)),
      mergeValues: (from, to) => from === true ? true : Math.max(from, to),
      resultToName: (gen, items) => gen.var("items", items)
    })
  };
  function evaluatedPropsToName(gen, ps) {
    if (ps === true)
      return gen.var("props", true);
    const props = gen.var("props", (0, codegen_1._)`{}`);
    if (ps !== undefined)
      setEvaluated(gen, props, ps);
    return props;
  }
  exports.evaluatedPropsToName = evaluatedPropsToName;
  function setEvaluated(gen, props, ps) {
    Object.keys(ps).forEach((p) => gen.assign((0, codegen_1._)`${props}${(0, codegen_1.getProperty)(p)}`, true));
  }
  exports.setEvaluated = setEvaluated;
  var snippets = {};
  function useFunc(gen, f) {
    return gen.scopeValue("func", {
      ref: f,
      code: snippets[f.code] || (snippets[f.code] = new code_1._Code(f.code))
    });
  }
  exports.useFunc = useFunc;
  var Type;
  (function(Type2) {
    Type2[Type2["Num"] = 0] = "Num";
    Type2[Type2["Str"] = 1] = "Str";
  })(Type || (exports.Type = Type = {}));
  function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
    if (dataProp instanceof codegen_1.Name) {
      const isNumber = dataPropType === Type.Num;
      return jsPropertySyntax ? isNumber ? (0, codegen_1._)`"[" + ${dataProp} + "]"` : (0, codegen_1._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_1._)`"/" + ${dataProp}` : (0, codegen_1._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
  }
  exports.getErrorPath = getErrorPath;
  function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
    if (!mode)
      return;
    msg = `strict mode: ${msg}`;
    if (mode === true)
      throw new Error(msg);
    it.self.logger.warn(msg);
  }
  exports.checkStrictMode = checkStrictMode;
});

// ../../node_modules/ajv/dist/compile/names.js
var require_names = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var names = {
    data: new codegen_1.Name("data"),
    valCxt: new codegen_1.Name("valCxt"),
    instancePath: new codegen_1.Name("instancePath"),
    parentData: new codegen_1.Name("parentData"),
    parentDataProperty: new codegen_1.Name("parentDataProperty"),
    rootData: new codegen_1.Name("rootData"),
    dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
    vErrors: new codegen_1.Name("vErrors"),
    errors: new codegen_1.Name("errors"),
    this: new codegen_1.Name("this"),
    self: new codegen_1.Name("self"),
    scope: new codegen_1.Name("scope"),
    json: new codegen_1.Name("json"),
    jsonPos: new codegen_1.Name("jsonPos"),
    jsonLen: new codegen_1.Name("jsonLen"),
    jsonPart: new codegen_1.Name("jsonPart")
  };
  exports.default = names;
});

// ../../node_modules/ajv/dist/compile/errors.js
var require_errors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = undefined;
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var names_1 = require_names();
  exports.keywordError = {
    message: ({ keyword }) => (0, codegen_1.str)`must pass "${keyword}" keyword validation`
  };
  exports.keyword$DataError = {
    message: ({ keyword, schemaType }) => schemaType ? (0, codegen_1.str)`"${keyword}" keyword must be ${schemaType} ($data)` : (0, codegen_1.str)`"${keyword}" keyword is invalid ($data)`
  };
  function reportError(cxt, error = exports.keywordError, errorPaths, overrideAllErrors) {
    const { it } = cxt;
    const { gen, compositeRule, allErrors } = it;
    const errObj = errorObjectCode(cxt, error, errorPaths);
    if (overrideAllErrors !== null && overrideAllErrors !== undefined ? overrideAllErrors : compositeRule || allErrors) {
      addError(gen, errObj);
    } else {
      returnErrors(it, (0, codegen_1._)`[${errObj}]`);
    }
  }
  exports.reportError = reportError;
  function reportExtraError(cxt, error = exports.keywordError, errorPaths) {
    const { it } = cxt;
    const { gen, compositeRule, allErrors } = it;
    const errObj = errorObjectCode(cxt, error, errorPaths);
    addError(gen, errObj);
    if (!(compositeRule || allErrors)) {
      returnErrors(it, names_1.default.vErrors);
    }
  }
  exports.reportExtraError = reportExtraError;
  function resetErrorsCount(gen, errsCount) {
    gen.assign(names_1.default.errors, errsCount);
    gen.if((0, codegen_1._)`${names_1.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_1._)`${names_1.default.vErrors}.length`, errsCount), () => gen.assign(names_1.default.vErrors, null)));
  }
  exports.resetErrorsCount = resetErrorsCount;
  function extendErrors({ gen, keyword, schemaValue, data, errsCount, it }) {
    if (errsCount === undefined)
      throw new Error("ajv implementation error");
    const err = gen.name("err");
    gen.forRange("i", errsCount, names_1.default.errors, (i) => {
      gen.const(err, (0, codegen_1._)`${names_1.default.vErrors}[${i}]`);
      gen.if((0, codegen_1._)`${err}.instancePath === undefined`, () => gen.assign((0, codegen_1._)`${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it.errorPath)));
      gen.assign((0, codegen_1._)`${err}.schemaPath`, (0, codegen_1.str)`${it.errSchemaPath}/${keyword}`);
      if (it.opts.verbose) {
        gen.assign((0, codegen_1._)`${err}.schema`, schemaValue);
        gen.assign((0, codegen_1._)`${err}.data`, data);
      }
    });
  }
  exports.extendErrors = extendErrors;
  function addError(gen, errObj) {
    const err = gen.const("err", errObj);
    gen.if((0, codegen_1._)`${names_1.default.vErrors} === null`, () => gen.assign(names_1.default.vErrors, (0, codegen_1._)`[${err}]`), (0, codegen_1._)`${names_1.default.vErrors}.push(${err})`);
    gen.code((0, codegen_1._)`${names_1.default.errors}++`);
  }
  function returnErrors(it, errs) {
    const { gen, validateName, schemaEnv } = it;
    if (schemaEnv.$async) {
      gen.throw((0, codegen_1._)`new ${it.ValidationError}(${errs})`);
    } else {
      gen.assign((0, codegen_1._)`${validateName}.errors`, errs);
      gen.return(false);
    }
  }
  var E = {
    keyword: new codegen_1.Name("keyword"),
    schemaPath: new codegen_1.Name("schemaPath"),
    params: new codegen_1.Name("params"),
    propertyName: new codegen_1.Name("propertyName"),
    message: new codegen_1.Name("message"),
    schema: new codegen_1.Name("schema"),
    parentSchema: new codegen_1.Name("parentSchema")
  };
  function errorObjectCode(cxt, error, errorPaths) {
    const { createErrors } = cxt.it;
    if (createErrors === false)
      return (0, codegen_1._)`{}`;
    return errorObject(cxt, error, errorPaths);
  }
  function errorObject(cxt, error, errorPaths = {}) {
    const { gen, it } = cxt;
    const keyValues = [
      errorInstancePath(it, errorPaths),
      errorSchemaPath(cxt, errorPaths)
    ];
    extraErrorProps(cxt, error, keyValues);
    return gen.object(...keyValues);
  }
  function errorInstancePath({ errorPath }, { instancePath }) {
    const instPath = instancePath ? (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}` : errorPath;
    return [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)];
  }
  function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
    let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)`${errSchemaPath}/${keyword}`;
    if (schemaPath) {
      schPath = (0, codegen_1.str)`${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`;
    }
    return [E.schemaPath, schPath];
  }
  function extraErrorProps(cxt, { params, message }, keyValues) {
    const { keyword, data, schemaValue, it } = cxt;
    const { opts, propertyName, topSchemaRef, schemaPath } = it;
    keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)`{}`]);
    if (opts.messages) {
      keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
    }
    if (opts.verbose) {
      keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._)`${topSchemaRef}${schemaPath}`], [names_1.default.data, data]);
    }
    if (propertyName)
      keyValues.push([E.propertyName, propertyName]);
  }
});

// ../../node_modules/ajv/dist/compile/validate/boolSchema.js
var require_boolSchema = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = undefined;
  var errors_1 = require_errors();
  var codegen_1 = require_codegen();
  var names_1 = require_names();
  var boolError = {
    message: "boolean schema is false"
  };
  function topBoolOrEmptySchema(it) {
    const { gen, schema, validateName } = it;
    if (schema === false) {
      falseSchemaError(it, false);
    } else if (typeof schema == "object" && schema.$async === true) {
      gen.return(names_1.default.data);
    } else {
      gen.assign((0, codegen_1._)`${validateName}.errors`, null);
      gen.return(true);
    }
  }
  exports.topBoolOrEmptySchema = topBoolOrEmptySchema;
  function boolOrEmptySchema(it, valid) {
    const { gen, schema } = it;
    if (schema === false) {
      gen.var(valid, false);
      falseSchemaError(it);
    } else {
      gen.var(valid, true);
    }
  }
  exports.boolOrEmptySchema = boolOrEmptySchema;
  function falseSchemaError(it, overrideAllErrors) {
    const { gen, data } = it;
    const cxt = {
      gen,
      keyword: "false schema",
      data,
      schema: false,
      schemaCode: false,
      schemaValue: false,
      params: {},
      it
    };
    (0, errors_1.reportError)(cxt, boolError, undefined, overrideAllErrors);
  }
});

// ../../node_modules/ajv/dist/compile/rules.js
var require_rules = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getRules = exports.isJSONType = undefined;
  var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
  var jsonTypes = new Set(_jsonTypes);
  function isJSONType(x) {
    return typeof x == "string" && jsonTypes.has(x);
  }
  exports.isJSONType = isJSONType;
  function getRules() {
    const groups = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...groups, integer: true, boolean: true, null: true },
      rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  exports.getRules = getRules;
});

// ../../node_modules/ajv/dist/compile/validate/applicability.js
var require_applicability = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = undefined;
  function schemaHasRulesForType({ schema, self: self2 }, type) {
    const group = self2.RULES.types[type];
    return group && group !== true && shouldUseGroup(schema, group);
  }
  exports.schemaHasRulesForType = schemaHasRulesForType;
  function shouldUseGroup(schema, group) {
    return group.rules.some((rule) => shouldUseRule(schema, rule));
  }
  exports.shouldUseGroup = shouldUseGroup;
  function shouldUseRule(schema, rule) {
    var _a;
    return schema[rule.keyword] !== undefined || ((_a = rule.definition.implements) === null || _a === undefined ? undefined : _a.some((kwd) => schema[kwd] !== undefined));
  }
  exports.shouldUseRule = shouldUseRule;
});

// ../../node_modules/ajv/dist/compile/validate/dataType.js
var require_dataType = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = undefined;
  var rules_1 = require_rules();
  var applicability_1 = require_applicability();
  var errors_1 = require_errors();
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var DataType;
  (function(DataType2) {
    DataType2[DataType2["Correct"] = 0] = "Correct";
    DataType2[DataType2["Wrong"] = 1] = "Wrong";
  })(DataType || (exports.DataType = DataType = {}));
  function getSchemaTypes(schema) {
    const types = getJSONTypes(schema.type);
    const hasNull = types.includes("null");
    if (hasNull) {
      if (schema.nullable === false)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!types.length && schema.nullable !== undefined) {
        throw new Error('"nullable" cannot be used without "type"');
      }
      if (schema.nullable === true)
        types.push("null");
    }
    return types;
  }
  exports.getSchemaTypes = getSchemaTypes;
  function getJSONTypes(ts) {
    const types = Array.isArray(ts) ? ts : ts ? [ts] : [];
    if (types.every(rules_1.isJSONType))
      return types;
    throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
  }
  exports.getJSONTypes = getJSONTypes;
  function coerceAndCheckDataType(it, types) {
    const { gen, data, opts } = it;
    const coerceTo = coerceToTypes(types, opts.coerceTypes);
    const checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
    if (checkTypes) {
      const wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
      gen.if(wrongType, () => {
        if (coerceTo.length)
          coerceData(it, types, coerceTo);
        else
          reportTypeError(it);
      });
    }
    return checkTypes;
  }
  exports.coerceAndCheckDataType = coerceAndCheckDataType;
  var COERCIBLE = new Set(["string", "number", "integer", "boolean", "null"]);
  function coerceToTypes(types, coerceTypes) {
    return coerceTypes ? types.filter((t) => COERCIBLE.has(t) || coerceTypes === "array" && t === "array") : [];
  }
  function coerceData(it, types, coerceTo) {
    const { gen, data, opts } = it;
    const dataType = gen.let("dataType", (0, codegen_1._)`typeof ${data}`);
    const coerced = gen.let("coerced", (0, codegen_1._)`undefined`);
    if (opts.coerceTypes === "array") {
      gen.if((0, codegen_1._)`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () => gen.assign(data, (0, codegen_1._)`${data}[0]`).assign(dataType, (0, codegen_1._)`typeof ${data}`).if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data)));
    }
    gen.if((0, codegen_1._)`${coerced} !== undefined`);
    for (const t of coerceTo) {
      if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
        coerceSpecificType(t);
      }
    }
    gen.else();
    reportTypeError(it);
    gen.endIf();
    gen.if((0, codegen_1._)`${coerced} !== undefined`, () => {
      gen.assign(data, coerced);
      assignParentData(it, coerced);
    });
    function coerceSpecificType(t) {
      switch (t) {
        case "string":
          gen.elseIf((0, codegen_1._)`${dataType} == "number" || ${dataType} == "boolean"`).assign(coerced, (0, codegen_1._)`"" + ${data}`).elseIf((0, codegen_1._)`${data} === null`).assign(coerced, (0, codegen_1._)`""`);
          return;
        case "number":
          gen.elseIf((0, codegen_1._)`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`).assign(coerced, (0, codegen_1._)`+${data}`);
          return;
        case "integer":
          gen.elseIf((0, codegen_1._)`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(coerced, (0, codegen_1._)`+${data}`);
          return;
        case "boolean":
          gen.elseIf((0, codegen_1._)`${data} === "false" || ${data} === 0 || ${data} === null`).assign(coerced, false).elseIf((0, codegen_1._)`${data} === "true" || ${data} === 1`).assign(coerced, true);
          return;
        case "null":
          gen.elseIf((0, codegen_1._)`${data} === "" || ${data} === 0 || ${data} === false`);
          gen.assign(coerced, null);
          return;
        case "array":
          gen.elseIf((0, codegen_1._)`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`).assign(coerced, (0, codegen_1._)`[${data}]`);
      }
    }
  }
  function assignParentData({ gen, parentData, parentDataProperty }, expr) {
    gen.if((0, codegen_1._)`${parentData} !== undefined`, () => gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, expr));
  }
  function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
    const EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
    let cond;
    switch (dataType) {
      case "null":
        return (0, codegen_1._)`${data} ${EQ} null`;
      case "array":
        cond = (0, codegen_1._)`Array.isArray(${data})`;
        break;
      case "object":
        cond = (0, codegen_1._)`${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
        break;
      case "integer":
        cond = numCond((0, codegen_1._)`!(${data} % 1) && !isNaN(${data})`);
        break;
      case "number":
        cond = numCond();
        break;
      default:
        return (0, codegen_1._)`typeof ${data} ${EQ} ${dataType}`;
    }
    return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
    function numCond(_cond = codegen_1.nil) {
      return (0, codegen_1.and)((0, codegen_1._)`typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._)`isFinite(${data})` : codegen_1.nil);
    }
  }
  exports.checkDataType = checkDataType;
  function checkDataTypes(dataTypes, data, strictNums, correct) {
    if (dataTypes.length === 1) {
      return checkDataType(dataTypes[0], data, strictNums, correct);
    }
    let cond;
    const types = (0, util_1.toHash)(dataTypes);
    if (types.array && types.object) {
      const notObj = (0, codegen_1._)`typeof ${data} != "object"`;
      cond = types.null ? notObj : (0, codegen_1._)`!${data} || ${notObj}`;
      delete types.null;
      delete types.array;
      delete types.object;
    } else {
      cond = codegen_1.nil;
    }
    if (types.number)
      delete types.integer;
    for (const t in types)
      cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
    return cond;
  }
  exports.checkDataTypes = checkDataTypes;
  var typeError = {
    message: ({ schema }) => `must be ${schema}`,
    params: ({ schema, schemaValue }) => typeof schema == "string" ? (0, codegen_1._)`{type: ${schema}}` : (0, codegen_1._)`{type: ${schemaValue}}`
  };
  function reportTypeError(it) {
    const cxt = getTypeErrorContext(it);
    (0, errors_1.reportError)(cxt, typeError);
  }
  exports.reportTypeError = reportTypeError;
  function getTypeErrorContext(it) {
    const { gen, data, schema } = it;
    const schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
    return {
      gen,
      keyword: "type",
      data,
      schema: schema.type,
      schemaCode,
      schemaValue: schemaCode,
      parentSchema: schema,
      params: {},
      it
    };
  }
});

// ../../node_modules/ajv/dist/compile/validate/defaults.js
var require_defaults = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.assignDefaults = undefined;
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  function assignDefaults(it, ty) {
    const { properties, items } = it.schema;
    if (ty === "object" && properties) {
      for (const key in properties) {
        assignDefault(it, key, properties[key].default);
      }
    } else if (ty === "array" && Array.isArray(items)) {
      items.forEach((sch, i) => assignDefault(it, i, sch.default));
    }
  }
  exports.assignDefaults = assignDefaults;
  function assignDefault(it, prop, defaultValue) {
    const { gen, compositeRule, data, opts } = it;
    if (defaultValue === undefined)
      return;
    const childData = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(prop)}`;
    if (compositeRule) {
      (0, util_1.checkStrictMode)(it, `default is ignored for: ${childData}`);
      return;
    }
    let condition = (0, codegen_1._)`${childData} === undefined`;
    if (opts.useDefaults === "empty") {
      condition = (0, codegen_1._)`${condition} || ${childData} === null || ${childData} === ""`;
    }
    gen.if(condition, (0, codegen_1._)`${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
  }
});

// ../../node_modules/ajv/dist/vocabularies/code.js
var require_code2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = undefined;
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var names_1 = require_names();
  var util_2 = require_util();
  function checkReportMissingProp(cxt, prop) {
    const { gen, data, it } = cxt;
    gen.if(noPropertyInData(gen, data, prop, it.opts.ownProperties), () => {
      cxt.setParams({ missingProperty: (0, codegen_1._)`${prop}` }, true);
      cxt.error();
    });
  }
  exports.checkReportMissingProp = checkReportMissingProp;
  function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
    return (0, codegen_1.or)(...properties.map((prop) => (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)`${missing} = ${prop}`)));
  }
  exports.checkMissingProp = checkMissingProp;
  function reportMissingProp(cxt, missing) {
    cxt.setParams({ missingProperty: missing }, true);
    cxt.error();
  }
  exports.reportMissingProp = reportMissingProp;
  function hasPropFunc(gen) {
    return gen.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: (0, codegen_1._)`Object.prototype.hasOwnProperty`
    });
  }
  exports.hasPropFunc = hasPropFunc;
  function isOwnProperty(gen, data, property) {
    return (0, codegen_1._)`${hasPropFunc(gen)}.call(${data}, ${property})`;
  }
  exports.isOwnProperty = isOwnProperty;
  function propertyInData(gen, data, property, ownProperties) {
    const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
    return ownProperties ? (0, codegen_1._)`${cond} && ${isOwnProperty(gen, data, property)}` : cond;
  }
  exports.propertyInData = propertyInData;
  function noPropertyInData(gen, data, property, ownProperties) {
    const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} === undefined`;
    return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
  }
  exports.noPropertyInData = noPropertyInData;
  function allSchemaProperties(schemaMap) {
    return schemaMap ? Object.keys(schemaMap).filter((p) => p !== "__proto__") : [];
  }
  exports.allSchemaProperties = allSchemaProperties;
  function schemaProperties(it, schemaMap) {
    return allSchemaProperties(schemaMap).filter((p) => !(0, util_1.alwaysValidSchema)(it, schemaMap[p]));
  }
  exports.schemaProperties = schemaProperties;
  function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
    const dataAndSchema = passSchema ? (0, codegen_1._)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
    const valCxt = [
      [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)],
      [names_1.default.parentData, it.parentData],
      [names_1.default.parentDataProperty, it.parentDataProperty],
      [names_1.default.rootData, names_1.default.rootData]
    ];
    if (it.opts.dynamicRef)
      valCxt.push([names_1.default.dynamicAnchors, names_1.default.dynamicAnchors]);
    const args = (0, codegen_1._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
    return context !== codegen_1.nil ? (0, codegen_1._)`${func}.call(${context}, ${args})` : (0, codegen_1._)`${func}(${args})`;
  }
  exports.callValidateCode = callValidateCode;
  var newRegExp = (0, codegen_1._)`new RegExp`;
  function usePattern({ gen, it: { opts } }, pattern) {
    const u = opts.unicodeRegExp ? "u" : "";
    const { regExp } = opts.code;
    const rx = regExp(pattern, u);
    return gen.scopeValue("pattern", {
      key: rx.toString(),
      ref: rx,
      code: (0, codegen_1._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u})`
    });
  }
  exports.usePattern = usePattern;
  function validateArray(cxt) {
    const { gen, data, keyword, it } = cxt;
    const valid = gen.name("valid");
    if (it.allErrors) {
      const validArr = gen.let("valid", true);
      validateItems(() => gen.assign(validArr, false));
      return validArr;
    }
    gen.var(valid, true);
    validateItems(() => gen.break());
    return valid;
    function validateItems(notValid) {
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      gen.forRange("i", 0, len, (i) => {
        cxt.subschema({
          keyword,
          dataProp: i,
          dataPropType: util_1.Type.Num
        }, valid);
        gen.if((0, codegen_1.not)(valid), notValid);
      });
    }
  }
  exports.validateArray = validateArray;
  function validateUnion(cxt) {
    const { gen, schema, keyword, it } = cxt;
    if (!Array.isArray(schema))
      throw new Error("ajv implementation error");
    const alwaysValid = schema.some((sch) => (0, util_1.alwaysValidSchema)(it, sch));
    if (alwaysValid && !it.opts.unevaluated)
      return;
    const valid = gen.let("valid", false);
    const schValid = gen.name("_valid");
    gen.block(() => schema.forEach((_sch, i) => {
      const schCxt = cxt.subschema({
        keyword,
        schemaProp: i,
        compositeRule: true
      }, schValid);
      gen.assign(valid, (0, codegen_1._)`${valid} || ${schValid}`);
      const merged = cxt.mergeValidEvaluated(schCxt, schValid);
      if (!merged)
        gen.if((0, codegen_1.not)(valid));
    }));
    cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
  }
  exports.validateUnion = validateUnion;
});

// ../../node_modules/ajv/dist/compile/validate/keyword.js
var require_keyword = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = undefined;
  var codegen_1 = require_codegen();
  var names_1 = require_names();
  var code_1 = require_code2();
  var errors_1 = require_errors();
  function macroKeywordCode(cxt, def) {
    const { gen, keyword, schema, parentSchema, it } = cxt;
    const macroSchema = def.macro.call(it.self, schema, parentSchema, it);
    const schemaRef = useKeyword(gen, keyword, macroSchema);
    if (it.opts.validateSchema !== false)
      it.self.validateSchema(macroSchema, true);
    const valid = gen.name("valid");
    cxt.subschema({
      schema: macroSchema,
      schemaPath: codegen_1.nil,
      errSchemaPath: `${it.errSchemaPath}/${keyword}`,
      topSchemaRef: schemaRef,
      compositeRule: true
    }, valid);
    cxt.pass(valid, () => cxt.error(true));
  }
  exports.macroKeywordCode = macroKeywordCode;
  function funcKeywordCode(cxt, def) {
    var _a;
    const { gen, keyword, schema, parentSchema, $data, it } = cxt;
    checkAsyncKeyword(it, def);
    const validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
    const validateRef = useKeyword(gen, keyword, validate);
    const valid = gen.let("valid");
    cxt.block$data(valid, validateKeyword);
    cxt.ok((_a = def.valid) !== null && _a !== undefined ? _a : valid);
    function validateKeyword() {
      if (def.errors === false) {
        assignValid();
        if (def.modifying)
          modifyData(cxt);
        reportErrs(() => cxt.error());
      } else {
        const ruleErrs = def.async ? validateAsync() : validateSync();
        if (def.modifying)
          modifyData(cxt);
        reportErrs(() => addErrs(cxt, ruleErrs));
      }
    }
    function validateAsync() {
      const ruleErrs = gen.let("ruleErrs", null);
      gen.try(() => assignValid((0, codegen_1._)`await `), (e) => gen.assign(valid, false).if((0, codegen_1._)`${e} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1._)`${e}.errors`), () => gen.throw(e)));
      return ruleErrs;
    }
    function validateSync() {
      const validateErrs = (0, codegen_1._)`${validateRef}.errors`;
      gen.assign(validateErrs, null);
      assignValid(codegen_1.nil);
      return validateErrs;
    }
    function assignValid(_await = def.async ? (0, codegen_1._)`await ` : codegen_1.nil) {
      const passCxt = it.opts.passContext ? names_1.default.this : names_1.default.self;
      const passSchema = !(("compile" in def) && !$data || def.schema === false);
      gen.assign(valid, (0, codegen_1._)`${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
    }
    function reportErrs(errors) {
      var _a2;
      gen.if((0, codegen_1.not)((_a2 = def.valid) !== null && _a2 !== undefined ? _a2 : valid), errors);
    }
  }
  exports.funcKeywordCode = funcKeywordCode;
  function modifyData(cxt) {
    const { gen, data, it } = cxt;
    gen.if(it.parentData, () => gen.assign(data, (0, codegen_1._)`${it.parentData}[${it.parentDataProperty}]`));
  }
  function addErrs(cxt, errs) {
    const { gen } = cxt;
    gen.if((0, codegen_1._)`Array.isArray(${errs})`, () => {
      gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`).assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
      (0, errors_1.extendErrors)(cxt);
    }, () => cxt.error());
  }
  function checkAsyncKeyword({ schemaEnv }, def) {
    if (def.async && !schemaEnv.$async)
      throw new Error("async keyword in sync schema");
  }
  function useKeyword(gen, keyword, result) {
    if (result === undefined)
      throw new Error(`keyword "${keyword}" failed to compile`);
    return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1.stringify)(result) });
  }
  function validSchemaType(schema, schemaType, allowUndefined = false) {
    return !schemaType.length || schemaType.some((st) => st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : typeof schema == st || allowUndefined && typeof schema == "undefined");
  }
  exports.validSchemaType = validSchemaType;
  function validateKeywordUsage({ schema, opts, self: self2, errSchemaPath }, def, keyword) {
    if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
      throw new Error("ajv implementation error");
    }
    const deps = def.dependencies;
    if (deps === null || deps === undefined ? undefined : deps.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd))) {
      throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
    }
    if (def.validateSchema) {
      const valid = def.validateSchema(schema[keyword]);
      if (!valid) {
        const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self2.errorsText(def.validateSchema.errors);
        if (opts.validateSchema === "log")
          self2.logger.error(msg);
        else
          throw new Error(msg);
      }
    }
  }
  exports.validateKeywordUsage = validateKeywordUsage;
});

// ../../node_modules/ajv/dist/compile/validate/subschema.js
var require_subschema = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = undefined;
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  function getSubschema(it, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
    if (keyword !== undefined && schema !== undefined) {
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    }
    if (keyword !== undefined) {
      const sch = it.schema[keyword];
      return schemaProp === undefined ? {
        schema: sch,
        schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
        errSchemaPath: `${it.errSchemaPath}/${keyword}`
      } : {
        schema: sch[schemaProp],
        schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
        errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`
      };
    }
    if (schema !== undefined) {
      if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      }
      return {
        schema,
        schemaPath,
        topSchemaRef,
        errSchemaPath
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  exports.getSubschema = getSubschema;
  function extendSubschemaData(subschema, it, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
    if (data !== undefined && dataProp !== undefined) {
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    }
    const { gen } = it;
    if (dataProp !== undefined) {
      const { errorPath, dataPathArr, opts } = it;
      const nextData = gen.let("data", (0, codegen_1._)`${it.data}${(0, codegen_1.getProperty)(dataProp)}`, true);
      dataContextProps(nextData);
      subschema.errorPath = (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
      subschema.parentDataProperty = (0, codegen_1._)`${dataProp}`;
      subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty];
    }
    if (data !== undefined) {
      const nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, true);
      dataContextProps(nextData);
      if (propertyName !== undefined)
        subschema.propertyName = propertyName;
    }
    if (dataTypes)
      subschema.dataTypes = dataTypes;
    function dataContextProps(_nextData) {
      subschema.data = _nextData;
      subschema.dataLevel = it.dataLevel + 1;
      subschema.dataTypes = [];
      it.definedProperties = new Set;
      subschema.parentData = it.data;
      subschema.dataNames = [...it.dataNames, _nextData];
    }
  }
  exports.extendSubschemaData = extendSubschemaData;
  function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
    if (compositeRule !== undefined)
      subschema.compositeRule = compositeRule;
    if (createErrors !== undefined)
      subschema.createErrors = createErrors;
    if (allErrors !== undefined)
      subschema.allErrors = allErrors;
    subschema.jtdDiscriminator = jtdDiscriminator;
    subschema.jtdMetadata = jtdMetadata;
  }
  exports.extendSubschemaMode = extendSubschemaMode;
});

// ../../node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS((exports, module) => {
  module.exports = function equal(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      if (a.constructor !== b.constructor)
        return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length;i-- !== 0; )
          if (!equal(a[i], b[i]))
            return false;
        return true;
      }
      if (a.constructor === RegExp)
        return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf)
        return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString)
        return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length;i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length;i-- !== 0; ) {
        var key = keys[i];
        if (!equal(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  };
});

// ../../node_modules/json-schema-traverse/index.js
var require_json_schema_traverse = __commonJS((exports, module) => {
  var traverse = module.exports = function(schema, opts, cb) {
    if (typeof opts == "function") {
      cb = opts;
      opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == "function" ? cb : cb.pre || function() {};
    var post = cb.post || function() {};
    _traverse(opts, pre, post, schema, "", schema);
  };
  traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true,
    if: true,
    then: true,
    else: true
  };
  traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
  };
  traverse.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
  };
  traverse.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
  };
  function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == "object" && !Array.isArray(schema)) {
      pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      for (var key in schema) {
        var sch = schema[key];
        if (Array.isArray(sch)) {
          if (key in traverse.arrayKeywords) {
            for (var i = 0;i < sch.length; i++)
              _traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
          }
        } else if (key in traverse.propsKeywords) {
          if (sch && typeof sch == "object") {
            for (var prop in sch)
              _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
          }
        } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
          _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
        }
      }
      post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
  }
  function escapeJsonPtr(str) {
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});

// ../../node_modules/ajv/dist/compile/resolve.js
var require_resolve = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = undefined;
  var util_1 = require_util();
  var equal = require_fast_deep_equal();
  var traverse = require_json_schema_traverse();
  var SIMPLE_INLINED = new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function inlineRef(schema, limit = true) {
    if (typeof schema == "boolean")
      return true;
    if (limit === true)
      return !hasRef(schema);
    if (!limit)
      return false;
    return countKeys(schema) <= limit;
  }
  exports.inlineRef = inlineRef;
  var REF_KEYWORDS = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function hasRef(schema) {
    for (const key in schema) {
      if (REF_KEYWORDS.has(key))
        return true;
      const sch = schema[key];
      if (Array.isArray(sch) && sch.some(hasRef))
        return true;
      if (typeof sch == "object" && hasRef(sch))
        return true;
    }
    return false;
  }
  function countKeys(schema) {
    let count = 0;
    for (const key in schema) {
      if (key === "$ref")
        return Infinity;
      count++;
      if (SIMPLE_INLINED.has(key))
        continue;
      if (typeof schema[key] == "object") {
        (0, util_1.eachItem)(schema[key], (sch) => count += countKeys(sch));
      }
      if (count === Infinity)
        return Infinity;
    }
    return count;
  }
  function getFullPath(resolver, id = "", normalize) {
    if (normalize !== false)
      id = normalizeId(id);
    const p = resolver.parse(id);
    return _getFullPath(resolver, p);
  }
  exports.getFullPath = getFullPath;
  function _getFullPath(resolver, p) {
    const serialized = resolver.serialize(p);
    return serialized.split("#")[0] + "#";
  }
  exports._getFullPath = _getFullPath;
  var TRAILING_SLASH_HASH = /#\/?$/;
  function normalizeId(id) {
    return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
  }
  exports.normalizeId = normalizeId;
  function resolveUrl(resolver, baseId, id) {
    id = normalizeId(id);
    return resolver.resolve(baseId, id);
  }
  exports.resolveUrl = resolveUrl;
  var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
  function getSchemaRefs(schema, baseId) {
    if (typeof schema == "boolean")
      return {};
    const { schemaId, uriResolver } = this.opts;
    const schId = normalizeId(schema[schemaId] || baseId);
    const baseIds = { "": schId };
    const pathPrefix = getFullPath(uriResolver, schId, false);
    const localRefs = {};
    const schemaRefs = new Set;
    traverse(schema, { allKeys: true }, (sch, jsonPtr, _, parentJsonPtr) => {
      if (parentJsonPtr === undefined)
        return;
      const fullPath = pathPrefix + jsonPtr;
      let innerBaseId = baseIds[parentJsonPtr];
      if (typeof sch[schemaId] == "string")
        innerBaseId = addRef.call(this, sch[schemaId]);
      addAnchor.call(this, sch.$anchor);
      addAnchor.call(this, sch.$dynamicAnchor);
      baseIds[jsonPtr] = innerBaseId;
      function addRef(ref) {
        const _resolve = this.opts.uriResolver.resolve;
        ref = normalizeId(innerBaseId ? _resolve(innerBaseId, ref) : ref);
        if (schemaRefs.has(ref))
          throw ambiguos(ref);
        schemaRefs.add(ref);
        let schOrRef = this.refs[ref];
        if (typeof schOrRef == "string")
          schOrRef = this.refs[schOrRef];
        if (typeof schOrRef == "object") {
          checkAmbiguosRef(sch, schOrRef.schema, ref);
        } else if (ref !== normalizeId(fullPath)) {
          if (ref[0] === "#") {
            checkAmbiguosRef(sch, localRefs[ref], ref);
            localRefs[ref] = sch;
          } else {
            this.refs[ref] = fullPath;
          }
        }
        return ref;
      }
      function addAnchor(anchor) {
        if (typeof anchor == "string") {
          if (!ANCHOR.test(anchor))
            throw new Error(`invalid anchor "${anchor}"`);
          addRef.call(this, `#${anchor}`);
        }
      }
    });
    return localRefs;
    function checkAmbiguosRef(sch1, sch2, ref) {
      if (sch2 !== undefined && !equal(sch1, sch2))
        throw ambiguos(ref);
    }
    function ambiguos(ref) {
      return new Error(`reference "${ref}" resolves to more than one schema`);
    }
  }
  exports.getSchemaRefs = getSchemaRefs;
});

// ../../node_modules/ajv/dist/compile/validate/index.js
var require_validate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getData = exports.KeywordCxt = exports.validateFunctionCode = undefined;
  var boolSchema_1 = require_boolSchema();
  var dataType_1 = require_dataType();
  var applicability_1 = require_applicability();
  var dataType_2 = require_dataType();
  var defaults_1 = require_defaults();
  var keyword_1 = require_keyword();
  var subschema_1 = require_subschema();
  var codegen_1 = require_codegen();
  var names_1 = require_names();
  var resolve_1 = require_resolve();
  var util_1 = require_util();
  var errors_1 = require_errors();
  function validateFunctionCode(it) {
    if (isSchemaObj(it)) {
      checkKeywords(it);
      if (schemaCxtHasRules(it)) {
        topSchemaObjCode(it);
        return;
      }
    }
    validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
  }
  exports.validateFunctionCode = validateFunctionCode;
  function validateFunction({ gen, validateName, schema, schemaEnv, opts }, body) {
    if (opts.code.es5) {
      gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, () => {
        gen.code((0, codegen_1._)`"use strict"; ${funcSourceUrl(schema, opts)}`);
        destructureValCxtES5(gen, opts);
        gen.code(body);
      });
    } else {
      gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema, opts)).code(body));
    }
  }
  function destructureValCxt(opts) {
    return (0, codegen_1._)`{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._)`, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
  }
  function destructureValCxtES5(gen, opts) {
    gen.if(names_1.default.valCxt, () => {
      gen.var(names_1.default.instancePath, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.instancePath}`);
      gen.var(names_1.default.parentData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentData}`);
      gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentDataProperty}`);
      gen.var(names_1.default.rootData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.rootData}`);
      if (opts.dynamicRef)
        gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
    }, () => {
      gen.var(names_1.default.instancePath, (0, codegen_1._)`""`);
      gen.var(names_1.default.parentData, (0, codegen_1._)`undefined`);
      gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`undefined`);
      gen.var(names_1.default.rootData, names_1.default.data);
      if (opts.dynamicRef)
        gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`{}`);
    });
  }
  function topSchemaObjCode(it) {
    const { schema, opts, gen } = it;
    validateFunction(it, () => {
      if (opts.$comment && schema.$comment)
        commentKeyword(it);
      checkNoDefault(it);
      gen.let(names_1.default.vErrors, null);
      gen.let(names_1.default.errors, 0);
      if (opts.unevaluated)
        resetEvaluated(it);
      typeAndKeywords(it);
      returnResults(it);
    });
    return;
  }
  function resetEvaluated(it) {
    const { gen, validateName } = it;
    it.evaluated = gen.const("evaluated", (0, codegen_1._)`${validateName}.evaluated`);
    gen.if((0, codegen_1._)`${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1._)`${it.evaluated}.props`, (0, codegen_1._)`undefined`));
    gen.if((0, codegen_1._)`${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1._)`${it.evaluated}.items`, (0, codegen_1._)`undefined`));
  }
  function funcSourceUrl(schema, opts) {
    const schId = typeof schema == "object" && schema[opts.schemaId];
    return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)`/*# sourceURL=${schId} */` : codegen_1.nil;
  }
  function subschemaCode(it, valid) {
    if (isSchemaObj(it)) {
      checkKeywords(it);
      if (schemaCxtHasRules(it)) {
        subSchemaObjCode(it, valid);
        return;
      }
    }
    (0, boolSchema_1.boolOrEmptySchema)(it, valid);
  }
  function schemaCxtHasRules({ schema, self: self2 }) {
    if (typeof schema == "boolean")
      return !schema;
    for (const key in schema)
      if (self2.RULES.all[key])
        return true;
    return false;
  }
  function isSchemaObj(it) {
    return typeof it.schema != "boolean";
  }
  function subSchemaObjCode(it, valid) {
    const { schema, gen, opts } = it;
    if (opts.$comment && schema.$comment)
      commentKeyword(it);
    updateContext(it);
    checkAsyncSchema(it);
    const errsCount = gen.const("_errs", names_1.default.errors);
    typeAndKeywords(it, errsCount);
    gen.var(valid, (0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
  }
  function checkKeywords(it) {
    (0, util_1.checkUnknownRules)(it);
    checkRefsAndKeywords(it);
  }
  function typeAndKeywords(it, errsCount) {
    if (it.opts.jtd)
      return schemaKeywords(it, [], false, errsCount);
    const types = (0, dataType_1.getSchemaTypes)(it.schema);
    const checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
    schemaKeywords(it, types, !checkedTypes, errsCount);
  }
  function checkRefsAndKeywords(it) {
    const { schema, errSchemaPath, opts, self: self2 } = it;
    if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self2.RULES)) {
      self2.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
    }
  }
  function checkNoDefault(it) {
    const { schema, opts } = it;
    if (schema.default !== undefined && opts.useDefaults && opts.strictSchema) {
      (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
    }
  }
  function updateContext(it) {
    const schId = it.schema[it.opts.schemaId];
    if (schId)
      it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
  }
  function checkAsyncSchema(it) {
    if (it.schema.$async && !it.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function commentKeyword({ gen, schemaEnv, schema, errSchemaPath, opts }) {
    const msg = schema.$comment;
    if (opts.$comment === true) {
      gen.code((0, codegen_1._)`${names_1.default.self}.logger.log(${msg})`);
    } else if (typeof opts.$comment == "function") {
      const schemaPath = (0, codegen_1.str)`${errSchemaPath}/$comment`;
      const rootName = gen.scopeValue("root", { ref: schemaEnv.root });
      gen.code((0, codegen_1._)`${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
    }
  }
  function returnResults(it) {
    const { gen, schemaEnv, validateName, ValidationError, opts } = it;
    if (schemaEnv.$async) {
      gen.if((0, codegen_1._)`${names_1.default.errors} === 0`, () => gen.return(names_1.default.data), () => gen.throw((0, codegen_1._)`new ${ValidationError}(${names_1.default.vErrors})`));
    } else {
      gen.assign((0, codegen_1._)`${validateName}.errors`, names_1.default.vErrors);
      if (opts.unevaluated)
        assignEvaluated(it);
      gen.return((0, codegen_1._)`${names_1.default.errors} === 0`);
    }
  }
  function assignEvaluated({ gen, evaluated, props, items }) {
    if (props instanceof codegen_1.Name)
      gen.assign((0, codegen_1._)`${evaluated}.props`, props);
    if (items instanceof codegen_1.Name)
      gen.assign((0, codegen_1._)`${evaluated}.items`, items);
  }
  function schemaKeywords(it, types, typeErrors, errsCount) {
    const { gen, schema, data, allErrors, opts, self: self2 } = it;
    const { RULES } = self2;
    if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES))) {
      gen.block(() => keywordCode(it, "$ref", RULES.all.$ref.definition));
      return;
    }
    if (!opts.jtd)
      checkStrictTypes(it, types);
    gen.block(() => {
      for (const group of RULES.rules)
        groupKeywords(group);
      groupKeywords(RULES.post);
    });
    function groupKeywords(group) {
      if (!(0, applicability_1.shouldUseGroup)(schema, group))
        return;
      if (group.type) {
        gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
        iterateKeywords(it, group);
        if (types.length === 1 && types[0] === group.type && typeErrors) {
          gen.else();
          (0, dataType_2.reportTypeError)(it);
        }
        gen.endIf();
      } else {
        iterateKeywords(it, group);
      }
      if (!allErrors)
        gen.if((0, codegen_1._)`${names_1.default.errors} === ${errsCount || 0}`);
    }
  }
  function iterateKeywords(it, group) {
    const { gen, schema, opts: { useDefaults } } = it;
    if (useDefaults)
      (0, defaults_1.assignDefaults)(it, group.type);
    gen.block(() => {
      for (const rule of group.rules) {
        if ((0, applicability_1.shouldUseRule)(schema, rule)) {
          keywordCode(it, rule.keyword, rule.definition, group.type);
        }
      }
    });
  }
  function checkStrictTypes(it, types) {
    if (it.schemaEnv.meta || !it.opts.strictTypes)
      return;
    checkContextTypes(it, types);
    if (!it.opts.allowUnionTypes)
      checkMultipleTypes(it, types);
    checkKeywordTypes(it, it.dataTypes);
  }
  function checkContextTypes(it, types) {
    if (!types.length)
      return;
    if (!it.dataTypes.length) {
      it.dataTypes = types;
      return;
    }
    types.forEach((t) => {
      if (!includesType(it.dataTypes, t)) {
        strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`);
      }
    });
    narrowSchemaTypes(it, types);
  }
  function checkMultipleTypes(it, ts) {
    if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
      strictTypesError(it, "use allowUnionTypes to allow union type keyword");
    }
  }
  function checkKeywordTypes(it, ts) {
    const rules = it.self.RULES.all;
    for (const keyword in rules) {
      const rule = rules[keyword];
      if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
        const { type } = rule.definition;
        if (type.length && !type.some((t) => hasApplicableType(ts, t))) {
          strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
        }
      }
    }
  }
  function hasApplicableType(schTs, kwdT) {
    return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
  }
  function includesType(ts, t) {
    return ts.includes(t) || t === "integer" && ts.includes("number");
  }
  function narrowSchemaTypes(it, withTypes) {
    const ts = [];
    for (const t of it.dataTypes) {
      if (includesType(withTypes, t))
        ts.push(t);
      else if (withTypes.includes("integer") && t === "number")
        ts.push("integer");
    }
    it.dataTypes = ts;
  }
  function strictTypesError(it, msg) {
    const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
    msg += ` at "${schemaPath}" (strictTypes)`;
    (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
  }

  class KeywordCxt {
    constructor(it, def, keyword) {
      (0, keyword_1.validateKeywordUsage)(it, def, keyword);
      this.gen = it.gen;
      this.allErrors = it.allErrors;
      this.keyword = keyword;
      this.data = it.data;
      this.schema = it.schema[keyword];
      this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
      this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
      this.schemaType = def.schemaType;
      this.parentSchema = it.schema;
      this.params = {};
      this.it = it;
      this.def = def;
      if (this.$data) {
        this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
      } else {
        this.schemaCode = this.schemaValue;
        if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
          throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
        }
      }
      if ("code" in def ? def.trackErrors : def.errors !== false) {
        this.errsCount = it.gen.const("_errs", names_1.default.errors);
      }
    }
    result(condition, successAction, failAction) {
      this.failResult((0, codegen_1.not)(condition), successAction, failAction);
    }
    failResult(condition, successAction, failAction) {
      this.gen.if(condition);
      if (failAction)
        failAction();
      else
        this.error();
      if (successAction) {
        this.gen.else();
        successAction();
        if (this.allErrors)
          this.gen.endIf();
      } else {
        if (this.allErrors)
          this.gen.endIf();
        else
          this.gen.else();
      }
    }
    pass(condition, failAction) {
      this.failResult((0, codegen_1.not)(condition), undefined, failAction);
    }
    fail(condition) {
      if (condition === undefined) {
        this.error();
        if (!this.allErrors)
          this.gen.if(false);
        return;
      }
      this.gen.if(condition);
      this.error();
      if (this.allErrors)
        this.gen.endIf();
      else
        this.gen.else();
    }
    fail$data(condition) {
      if (!this.$data)
        return this.fail(condition);
      const { schemaCode } = this;
      this.fail((0, codegen_1._)`${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
    }
    error(append, errorParams, errorPaths) {
      if (errorParams) {
        this.setParams(errorParams);
        this._error(append, errorPaths);
        this.setParams({});
        return;
      }
      this._error(append, errorPaths);
    }
    _error(append, errorPaths) {
      (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
    }
    $dataError() {
      (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
    }
    reset() {
      if (this.errsCount === undefined)
        throw new Error('add "trackErrors" to keyword definition');
      (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(cond) {
      if (!this.allErrors)
        this.gen.if(cond);
    }
    setParams(obj, assign) {
      if (assign)
        Object.assign(this.params, obj);
      else
        this.params = obj;
    }
    block$data(valid, codeBlock, $dataValid = codegen_1.nil) {
      this.gen.block(() => {
        this.check$data(valid, $dataValid);
        codeBlock();
      });
    }
    check$data(valid = codegen_1.nil, $dataValid = codegen_1.nil) {
      if (!this.$data)
        return;
      const { gen, schemaCode, schemaType, def } = this;
      gen.if((0, codegen_1.or)((0, codegen_1._)`${schemaCode} === undefined`, $dataValid));
      if (valid !== codegen_1.nil)
        gen.assign(valid, true);
      if (schemaType.length || def.validateSchema) {
        gen.elseIf(this.invalid$data());
        this.$dataError();
        if (valid !== codegen_1.nil)
          gen.assign(valid, false);
      }
      gen.else();
    }
    invalid$data() {
      const { gen, schemaCode, schemaType, def, it } = this;
      return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
      function wrong$DataType() {
        if (schemaType.length) {
          if (!(schemaCode instanceof codegen_1.Name))
            throw new Error("ajv implementation error");
          const st = Array.isArray(schemaType) ? schemaType : [schemaType];
          return (0, codegen_1._)`${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
        }
        return codegen_1.nil;
      }
      function invalid$DataSchema() {
        if (def.validateSchema) {
          const validateSchemaRef = gen.scopeValue("validate$data", { ref: def.validateSchema });
          return (0, codegen_1._)`!${validateSchemaRef}(${schemaCode})`;
        }
        return codegen_1.nil;
      }
    }
    subschema(appl, valid) {
      const subschema = (0, subschema_1.getSubschema)(this.it, appl);
      (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
      (0, subschema_1.extendSubschemaMode)(subschema, appl);
      const nextContext = { ...this.it, ...subschema, items: undefined, props: undefined };
      subschemaCode(nextContext, valid);
      return nextContext;
    }
    mergeEvaluated(schemaCxt, toName) {
      const { it, gen } = this;
      if (!it.opts.unevaluated)
        return;
      if (it.props !== true && schemaCxt.props !== undefined) {
        it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
      }
      if (it.items !== true && schemaCxt.items !== undefined) {
        it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
      }
    }
    mergeValidEvaluated(schemaCxt, valid) {
      const { it, gen } = this;
      if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
        gen.if(valid, () => this.mergeEvaluated(schemaCxt, codegen_1.Name));
        return true;
      }
    }
  }
  exports.KeywordCxt = KeywordCxt;
  function keywordCode(it, keyword, def, ruleType) {
    const cxt = new KeywordCxt(it, def, keyword);
    if ("code" in def) {
      def.code(cxt, ruleType);
    } else if (cxt.$data && def.validate) {
      (0, keyword_1.funcKeywordCode)(cxt, def);
    } else if ("macro" in def) {
      (0, keyword_1.macroKeywordCode)(cxt, def);
    } else if (def.compile || def.validate) {
      (0, keyword_1.funcKeywordCode)(cxt, def);
    }
  }
  var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
  var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function getData($data, { dataLevel, dataNames, dataPathArr }) {
    let jsonPointer;
    let data;
    if ($data === "")
      return names_1.default.rootData;
    if ($data[0] === "/") {
      if (!JSON_POINTER.test($data))
        throw new Error(`Invalid JSON-pointer: ${$data}`);
      jsonPointer = $data;
      data = names_1.default.rootData;
    } else {
      const matches = RELATIVE_JSON_POINTER.exec($data);
      if (!matches)
        throw new Error(`Invalid JSON-pointer: ${$data}`);
      const up = +matches[1];
      jsonPointer = matches[2];
      if (jsonPointer === "#") {
        if (up >= dataLevel)
          throw new Error(errorMsg("property/index", up));
        return dataPathArr[dataLevel - up];
      }
      if (up > dataLevel)
        throw new Error(errorMsg("data", up));
      data = dataNames[dataLevel - up];
      if (!jsonPointer)
        return data;
    }
    let expr = data;
    const segments = jsonPointer.split("/");
    for (const segment of segments) {
      if (segment) {
        data = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`;
        expr = (0, codegen_1._)`${expr} && ${data}`;
      }
    }
    return expr;
    function errorMsg(pointerType, up) {
      return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
    }
  }
  exports.getData = getData;
});

// ../../node_modules/ajv/dist/runtime/validation_error.js
var require_validation_error = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });

  class ValidationError extends Error {
    constructor(errors) {
      super("validation failed");
      this.errors = errors;
      this.ajv = this.validation = true;
    }
  }
  exports.default = ValidationError;
});

// ../../node_modules/ajv/dist/compile/ref_error.js
var require_ref_error = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var resolve_1 = require_resolve();

  class MissingRefError extends Error {
    constructor(resolver, baseId, ref, msg) {
      super(msg || `can't resolve reference ${ref} from id ${baseId}`);
      this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
      this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
    }
  }
  exports.default = MissingRefError;
});

// ../../node_modules/ajv/dist/compile/index.js
var require_compile = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = undefined;
  var codegen_1 = require_codegen();
  var validation_error_1 = require_validation_error();
  var names_1 = require_names();
  var resolve_1 = require_resolve();
  var util_1 = require_util();
  var validate_1 = require_validate();

  class SchemaEnv {
    constructor(env) {
      var _a;
      this.refs = {};
      this.dynamicAnchors = {};
      let schema;
      if (typeof env.schema == "object")
        schema = env.schema;
      this.schema = env.schema;
      this.schemaId = env.schemaId;
      this.root = env.root || this;
      this.baseId = (_a = env.baseId) !== null && _a !== undefined ? _a : (0, resolve_1.normalizeId)(schema === null || schema === undefined ? undefined : schema[env.schemaId || "$id"]);
      this.schemaPath = env.schemaPath;
      this.localRefs = env.localRefs;
      this.meta = env.meta;
      this.$async = schema === null || schema === undefined ? undefined : schema.$async;
      this.refs = {};
    }
  }
  exports.SchemaEnv = SchemaEnv;
  function compileSchema(sch) {
    const _sch = getCompilingSchema.call(this, sch);
    if (_sch)
      return _sch;
    const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId);
    const { es5, lines } = this.opts.code;
    const { ownProperties } = this.opts;
    const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
    let _ValidationError;
    if (sch.$async) {
      _ValidationError = gen.scopeValue("Error", {
        ref: validation_error_1.default,
        code: (0, codegen_1._)`require("ajv/dist/runtime/validation_error").default`
      });
    }
    const validateName = gen.scopeName("validate");
    sch.validateName = validateName;
    const schemaCxt = {
      gen,
      allErrors: this.opts.allErrors,
      data: names_1.default.data,
      parentData: names_1.default.parentData,
      parentDataProperty: names_1.default.parentDataProperty,
      dataNames: [names_1.default.data],
      dataPathArr: [codegen_1.nil],
      dataLevel: 0,
      dataTypes: [],
      definedProperties: new Set,
      topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? { ref: sch.schema, code: (0, codegen_1.stringify)(sch.schema) } : { ref: sch.schema }),
      validateName,
      ValidationError: _ValidationError,
      schema: sch.schema,
      schemaEnv: sch,
      rootId,
      baseId: sch.baseId || rootId,
      schemaPath: codegen_1.nil,
      errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, codegen_1._)`""`,
      opts: this.opts,
      self: this
    };
    let sourceCode;
    try {
      this._compilations.add(sch);
      (0, validate_1.validateFunctionCode)(schemaCxt);
      gen.optimize(this.opts.code.optimize);
      const validateCode = gen.toString();
      sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`;
      if (this.opts.code.process)
        sourceCode = this.opts.code.process(sourceCode, sch);
      const makeValidate = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode);
      const validate = makeValidate(this, this.scope.get());
      this.scope.value(validateName, { ref: validate });
      validate.errors = null;
      validate.schema = sch.schema;
      validate.schemaEnv = sch;
      if (sch.$async)
        validate.$async = true;
      if (this.opts.code.source === true) {
        validate.source = { validateName, validateCode, scopeValues: gen._values };
      }
      if (this.opts.unevaluated) {
        const { props, items } = schemaCxt;
        validate.evaluated = {
          props: props instanceof codegen_1.Name ? undefined : props,
          items: items instanceof codegen_1.Name ? undefined : items,
          dynamicProps: props instanceof codegen_1.Name,
          dynamicItems: items instanceof codegen_1.Name
        };
        if (validate.source)
          validate.source.evaluated = (0, codegen_1.stringify)(validate.evaluated);
      }
      sch.validate = validate;
      return sch;
    } catch (e) {
      delete sch.validate;
      delete sch.validateName;
      if (sourceCode)
        this.logger.error("Error compiling schema, function code:", sourceCode);
      throw e;
    } finally {
      this._compilations.delete(sch);
    }
  }
  exports.compileSchema = compileSchema;
  function resolveRef(root, baseId, ref) {
    var _a;
    ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
    const schOrFunc = root.refs[ref];
    if (schOrFunc)
      return schOrFunc;
    let _sch = resolve.call(this, root, ref);
    if (_sch === undefined) {
      const schema = (_a = root.localRefs) === null || _a === undefined ? undefined : _a[ref];
      const { schemaId } = this.opts;
      if (schema)
        _sch = new SchemaEnv({ schema, schemaId, root, baseId });
    }
    if (_sch === undefined)
      return;
    return root.refs[ref] = inlineOrCompile.call(this, _sch);
  }
  exports.resolveRef = resolveRef;
  function inlineOrCompile(sch) {
    if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs))
      return sch.schema;
    return sch.validate ? sch : compileSchema.call(this, sch);
  }
  function getCompilingSchema(schEnv) {
    for (const sch of this._compilations) {
      if (sameSchemaEnv(sch, schEnv))
        return sch;
    }
  }
  exports.getCompilingSchema = getCompilingSchema;
  function sameSchemaEnv(s1, s2) {
    return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
  }
  function resolve(root, ref) {
    let sch;
    while (typeof (sch = this.refs[ref]) == "string")
      ref = sch;
    return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
  }
  function resolveSchema(root, ref) {
    const p = this.opts.uriResolver.parse(ref);
    const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p);
    let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, undefined);
    if (Object.keys(root.schema).length > 0 && refPath === baseId) {
      return getJsonPointer.call(this, p, root);
    }
    const id = (0, resolve_1.normalizeId)(refPath);
    const schOrRef = this.refs[id] || this.schemas[id];
    if (typeof schOrRef == "string") {
      const sch = resolveSchema.call(this, root, schOrRef);
      if (typeof (sch === null || sch === undefined ? undefined : sch.schema) !== "object")
        return;
      return getJsonPointer.call(this, p, sch);
    }
    if (typeof (schOrRef === null || schOrRef === undefined ? undefined : schOrRef.schema) !== "object")
      return;
    if (!schOrRef.validate)
      compileSchema.call(this, schOrRef);
    if (id === (0, resolve_1.normalizeId)(ref)) {
      const { schema } = schOrRef;
      const { schemaId } = this.opts;
      const schId = schema[schemaId];
      if (schId)
        baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
      return new SchemaEnv({ schema, schemaId, root, baseId });
    }
    return getJsonPointer.call(this, p, schOrRef);
  }
  exports.resolveSchema = resolveSchema;
  var PREVENT_SCOPE_CHANGE = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function getJsonPointer(parsedRef, { baseId, schema, root }) {
    var _a;
    if (((_a = parsedRef.fragment) === null || _a === undefined ? undefined : _a[0]) !== "/")
      return;
    for (const part of parsedRef.fragment.slice(1).split("/")) {
      if (typeof schema === "boolean")
        return;
      const partSchema = schema[(0, util_1.unescapeFragment)(part)];
      if (partSchema === undefined)
        return;
      schema = partSchema;
      const schId = typeof schema === "object" && schema[this.opts.schemaId];
      if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
        baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
      }
    }
    let env;
    if (typeof schema != "boolean" && schema.$ref && !(0, util_1.schemaHasRulesButRef)(schema, this.RULES)) {
      const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
      env = resolveSchema.call(this, root, $ref);
    }
    const { schemaId } = this.opts;
    env = env || new SchemaEnv({ schema, schemaId, root, baseId });
    if (env.schema !== env.root.schema)
      return env;
    return;
  }
});

// ../../node_modules/ajv/dist/refs/data.json
var require_data = __commonJS((exports, module) => {
  module.exports = {
    $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: ["$data"],
    properties: {
      $data: {
        type: "string",
        anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
      }
    },
    additionalProperties: false
  };
});

// ../../node_modules/fast-uri/lib/utils.js
var require_utils = __commonJS((exports, module) => {
  var isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu);
  var isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  var isHexPair = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu);
  var isUnreserved = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu);
  var isPathCharacter = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function stringArrayToHexStripped(input) {
    let acc = "";
    let code = 0;
    let i = 0;
    for (i = 0;i < input.length; i++) {
      code = input[i].charCodeAt(0);
      if (code === 48) {
        continue;
      }
      if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
        return "";
      }
      acc += input[i];
      break;
    }
    for (i += 1;i < input.length; i++) {
      code = input[i].charCodeAt(0);
      if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
        return "";
      }
      acc += input[i];
    }
    return acc;
  }
  var nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function consumeIsZone(buffer) {
    buffer.length = 0;
    return true;
  }
  function consumeHextets(buffer, address, output) {
    if (buffer.length) {
      const hex = stringArrayToHexStripped(buffer);
      if (hex !== "") {
        address.push(hex);
      } else {
        output.error = true;
        return false;
      }
      buffer.length = 0;
    }
    return true;
  }
  function getIPV6(input) {
    let tokenCount = 0;
    const output = { error: false, address: "", zone: "" };
    const address = [];
    const buffer = [];
    let endipv6Encountered = false;
    let endIpv6 = false;
    let consume = consumeHextets;
    for (let i = 0;i < input.length; i++) {
      const cursor = input[i];
      if (cursor === "[" || cursor === "]") {
        continue;
      }
      if (cursor === ":") {
        if (endipv6Encountered === true) {
          endIpv6 = true;
        }
        if (!consume(buffer, address, output)) {
          break;
        }
        if (++tokenCount > 7) {
          output.error = true;
          break;
        }
        if (i > 0 && input[i - 1] === ":") {
          endipv6Encountered = true;
        }
        address.push(":");
        continue;
      } else if (cursor === "%") {
        if (!consume(buffer, address, output)) {
          break;
        }
        consume = consumeIsZone;
      } else {
        buffer.push(cursor);
        continue;
      }
    }
    if (buffer.length) {
      if (consume === consumeIsZone) {
        output.zone = buffer.join("");
      } else if (endIpv6) {
        address.push(buffer.join(""));
      } else {
        address.push(stringArrayToHexStripped(buffer));
      }
    }
    output.address = address.join("");
    return output;
  }
  function normalizeIPv6(host) {
    if (findToken(host, ":") < 2) {
      return { host, isIPV6: false };
    }
    const ipv6 = getIPV6(host);
    if (!ipv6.error) {
      let newHost = ipv6.address;
      let escapedHost = ipv6.address;
      if (ipv6.zone) {
        newHost += "%" + ipv6.zone;
        escapedHost += "%25" + ipv6.zone;
      }
      return { host: newHost, isIPV6: true, escapedHost };
    } else {
      return { host, isIPV6: false };
    }
  }
  function findToken(str, token) {
    let ind = 0;
    for (let i = 0;i < str.length; i++) {
      if (str[i] === token)
        ind++;
    }
    return ind;
  }
  function removeDotSegments(path) {
    let input = path;
    const output = [];
    let nextSlash = -1;
    let len = 0;
    while (len = input.length) {
      if (len === 1) {
        if (input === ".") {
          break;
        } else if (input === "/") {
          output.push("/");
          break;
        } else {
          output.push(input);
          break;
        }
      } else if (len === 2) {
        if (input[0] === ".") {
          if (input[1] === ".") {
            break;
          } else if (input[1] === "/") {
            input = input.slice(2);
            continue;
          }
        } else if (input[0] === "/") {
          if (input[1] === "." || input[1] === "/") {
            output.push("/");
            break;
          }
        }
      } else if (len === 3) {
        if (input === "/..") {
          if (output.length !== 0) {
            output.pop();
          }
          output.push("/");
          break;
        }
      }
      if (input[0] === ".") {
        if (input[1] === ".") {
          if (input[2] === "/") {
            input = input.slice(3);
            continue;
          }
        } else if (input[1] === "/") {
          input = input.slice(2);
          continue;
        }
      } else if (input[0] === "/") {
        if (input[1] === ".") {
          if (input[2] === "/") {
            input = input.slice(2);
            continue;
          } else if (input[2] === ".") {
            if (input[3] === "/") {
              input = input.slice(3);
              if (output.length !== 0) {
                output.pop();
              }
              continue;
            }
          }
        }
      }
      if ((nextSlash = input.indexOf("/", 1)) === -1) {
        output.push(input);
        break;
      } else {
        output.push(input.slice(0, nextSlash));
        input = input.slice(nextSlash);
      }
    }
    return output.join("");
  }
  var HOST_DELIMS = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" };
  var HOST_DELIM_RE = /[@/?#:]/g;
  var HOST_DELIM_NO_COLON_RE = /[@/?#]/g;
  function reescapeHostDelimiters(host, isIP) {
    const re = isIP ? HOST_DELIM_NO_COLON_RE : HOST_DELIM_RE;
    re.lastIndex = 0;
    return host.replace(re, (ch) => HOST_DELIMS[ch]);
  }
  function normalizePercentEncoding(input, decodeUnreserved = false) {
    if (input.indexOf("%") === -1) {
      return input;
    }
    let output = "";
    for (let i = 0;i < input.length; i++) {
      if (input[i] === "%" && i + 2 < input.length) {
        const hex = input.slice(i + 1, i + 3);
        if (isHexPair(hex)) {
          const normalizedHex = hex.toUpperCase();
          const decoded = String.fromCharCode(parseInt(normalizedHex, 16));
          if (decodeUnreserved && isUnreserved(decoded)) {
            output += decoded;
          } else {
            output += "%" + normalizedHex;
          }
          i += 2;
          continue;
        }
      }
      output += input[i];
    }
    return output;
  }
  function normalizePathEncoding(input) {
    let output = "";
    for (let i = 0;i < input.length; i++) {
      if (input[i] === "%" && i + 2 < input.length) {
        const hex = input.slice(i + 1, i + 3);
        if (isHexPair(hex)) {
          const normalizedHex = hex.toUpperCase();
          const decoded = String.fromCharCode(parseInt(normalizedHex, 16));
          if (decoded !== "." && isUnreserved(decoded)) {
            output += decoded;
          } else {
            output += "%" + normalizedHex;
          }
          i += 2;
          continue;
        }
      }
      if (isPathCharacter(input[i])) {
        output += input[i];
      } else {
        output += escape(input[i]);
      }
    }
    return output;
  }
  function escapePreservingEscapes(input) {
    let output = "";
    for (let i = 0;i < input.length; i++) {
      if (input[i] === "%" && i + 2 < input.length) {
        const hex = input.slice(i + 1, i + 3);
        if (isHexPair(hex)) {
          output += "%" + hex.toUpperCase();
          i += 2;
          continue;
        }
      }
      output += escape(input[i]);
    }
    return output;
  }
  function recomposeAuthority(component) {
    const uriTokens = [];
    if (component.userinfo !== undefined) {
      uriTokens.push(component.userinfo);
      uriTokens.push("@");
    }
    if (component.host !== undefined) {
      let host = unescape(component.host);
      if (!isIPv4(host)) {
        const ipV6res = normalizeIPv6(host);
        if (ipV6res.isIPV6 === true) {
          host = `[${ipV6res.escapedHost}]`;
        } else {
          host = reescapeHostDelimiters(host, false);
        }
      }
      uriTokens.push(host);
    }
    if (typeof component.port === "number" || typeof component.port === "string") {
      uriTokens.push(":");
      uriTokens.push(String(component.port));
    }
    return uriTokens.length ? uriTokens.join("") : undefined;
  }
  module.exports = {
    nonSimpleDomain,
    recomposeAuthority,
    reescapeHostDelimiters,
    normalizePercentEncoding,
    normalizePathEncoding,
    escapePreservingEscapes,
    removeDotSegments,
    isIPv4,
    isUUID,
    normalizeIPv6,
    stringArrayToHexStripped
  };
});

// ../../node_modules/fast-uri/lib/schemes.js
var require_schemes = __commonJS((exports, module) => {
  var { isUUID } = require_utils();
  var URN_REG = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  var supportedSchemeNames = [
    "http",
    "https",
    "ws",
    "wss",
    "urn",
    "urn:uuid"
  ];
  function isValidSchemeName(name) {
    return supportedSchemeNames.indexOf(name) !== -1;
  }
  function wsIsSecure(wsComponent) {
    if (wsComponent.secure === true) {
      return true;
    } else if (wsComponent.secure === false) {
      return false;
    } else if (wsComponent.scheme) {
      return wsComponent.scheme.length === 3 && (wsComponent.scheme[0] === "w" || wsComponent.scheme[0] === "W") && (wsComponent.scheme[1] === "s" || wsComponent.scheme[1] === "S") && (wsComponent.scheme[2] === "s" || wsComponent.scheme[2] === "S");
    } else {
      return false;
    }
  }
  function httpParse(component) {
    if (!component.host) {
      component.error = component.error || "HTTP URIs must have a host.";
    }
    return component;
  }
  function httpSerialize(component) {
    const secure = String(component.scheme).toLowerCase() === "https";
    if (component.port === (secure ? 443 : 80) || component.port === "") {
      component.port = undefined;
    }
    if (!component.path) {
      component.path = "/";
    }
    return component;
  }
  function wsParse(wsComponent) {
    wsComponent.secure = wsIsSecure(wsComponent);
    wsComponent.resourceName = (wsComponent.path || "/") + (wsComponent.query ? "?" + wsComponent.query : "");
    wsComponent.path = undefined;
    wsComponent.query = undefined;
    return wsComponent;
  }
  function wsSerialize(wsComponent) {
    if (wsComponent.port === (wsIsSecure(wsComponent) ? 443 : 80) || wsComponent.port === "") {
      wsComponent.port = undefined;
    }
    if (typeof wsComponent.secure === "boolean") {
      wsComponent.scheme = wsComponent.secure ? "wss" : "ws";
      wsComponent.secure = undefined;
    }
    if (wsComponent.resourceName) {
      const [path, query] = wsComponent.resourceName.split("?");
      wsComponent.path = path && path !== "/" ? path : undefined;
      wsComponent.query = query;
      wsComponent.resourceName = undefined;
    }
    wsComponent.fragment = undefined;
    return wsComponent;
  }
  function urnParse(urnComponent, options) {
    if (!urnComponent.path) {
      urnComponent.error = "URN can not be parsed";
      return urnComponent;
    }
    const matches = urnComponent.path.match(URN_REG);
    if (matches) {
      const scheme = options.scheme || urnComponent.scheme || "urn";
      urnComponent.nid = matches[1].toLowerCase();
      urnComponent.nss = matches[2];
      const urnScheme = `${scheme}:${options.nid || urnComponent.nid}`;
      const schemeHandler = getSchemeHandler(urnScheme);
      urnComponent.path = undefined;
      if (schemeHandler) {
        urnComponent = schemeHandler.parse(urnComponent, options);
      }
    } else {
      urnComponent.error = urnComponent.error || "URN can not be parsed.";
    }
    return urnComponent;
  }
  function urnSerialize(urnComponent, options) {
    if (urnComponent.nid === undefined) {
      throw new Error("URN without nid cannot be serialized");
    }
    const scheme = options.scheme || urnComponent.scheme || "urn";
    const nid = urnComponent.nid.toLowerCase();
    const urnScheme = `${scheme}:${options.nid || nid}`;
    const schemeHandler = getSchemeHandler(urnScheme);
    if (schemeHandler) {
      urnComponent = schemeHandler.serialize(urnComponent, options);
    }
    const uriComponent = urnComponent;
    const nss = urnComponent.nss;
    uriComponent.path = `${nid || options.nid}:${nss}`;
    options.skipEscape = true;
    return uriComponent;
  }
  function urnuuidParse(urnComponent, options) {
    const uuidComponent = urnComponent;
    uuidComponent.uuid = uuidComponent.nss;
    uuidComponent.nss = undefined;
    if (!options.tolerant && (!uuidComponent.uuid || !isUUID(uuidComponent.uuid))) {
      uuidComponent.error = uuidComponent.error || "UUID is not valid.";
    }
    return uuidComponent;
  }
  function urnuuidSerialize(uuidComponent) {
    const urnComponent = uuidComponent;
    urnComponent.nss = (uuidComponent.uuid || "").toLowerCase();
    return urnComponent;
  }
  var http = {
    scheme: "http",
    domainHost: true,
    parse: httpParse,
    serialize: httpSerialize
  };
  var https = {
    scheme: "https",
    domainHost: http.domainHost,
    parse: httpParse,
    serialize: httpSerialize
  };
  var ws = {
    scheme: "ws",
    domainHost: true,
    parse: wsParse,
    serialize: wsSerialize
  };
  var wss = {
    scheme: "wss",
    domainHost: ws.domainHost,
    parse: ws.parse,
    serialize: ws.serialize
  };
  var urn = {
    scheme: "urn",
    parse: urnParse,
    serialize: urnSerialize,
    skipNormalize: true
  };
  var urnuuid = {
    scheme: "urn:uuid",
    parse: urnuuidParse,
    serialize: urnuuidSerialize,
    skipNormalize: true
  };
  var SCHEMES = {
    http,
    https,
    ws,
    wss,
    urn,
    "urn:uuid": urnuuid
  };
  Object.setPrototypeOf(SCHEMES, null);
  function getSchemeHandler(scheme) {
    return scheme && (SCHEMES[scheme] || SCHEMES[scheme.toLowerCase()]) || undefined;
  }
  module.exports = {
    wsIsSecure,
    SCHEMES,
    isValidSchemeName,
    getSchemeHandler
  };
});

// ../../node_modules/fast-uri/index.js
var require_fast_uri = __commonJS((exports, module) => {
  var { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizePercentEncoding, normalizePathEncoding, escapePreservingEscapes, reescapeHostDelimiters, isIPv4, nonSimpleDomain } = require_utils();
  var { SCHEMES, getSchemeHandler } = require_schemes();
  function normalize(uri, options) {
    if (typeof uri === "string") {
      uri = normalizeString(uri, options);
    } else if (typeof uri === "object") {
      uri = parse(serialize(uri, options), options);
    }
    return uri;
  }
  function resolve(baseURI, relativeURI, options) {
    const schemelessOptions = options ? Object.assign({ scheme: "null" }, options) : { scheme: "null" };
    const resolved = resolveComponent(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true);
    schemelessOptions.skipEscape = true;
    return serialize(resolved, schemelessOptions);
  }
  function resolveComponent(base, relative, options, skipNormalization) {
    const target = {};
    if (!skipNormalization) {
      base = parse(serialize(base, options), options);
      relative = parse(serialize(relative, options), options);
    }
    options = options || {};
    if (!options.tolerant && relative.scheme) {
      target.scheme = relative.scheme;
      target.userinfo = relative.userinfo;
      target.host = relative.host;
      target.port = relative.port;
      target.path = removeDotSegments(relative.path || "");
      target.query = relative.query;
    } else {
      if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || "");
        target.query = relative.query;
      } else {
        if (!relative.path) {
          target.path = base.path;
          if (relative.query !== undefined) {
            target.query = relative.query;
          } else {
            target.query = base.query;
          }
        } else {
          if (relative.path[0] === "/") {
            target.path = removeDotSegments(relative.path);
          } else {
            if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
              target.path = "/" + relative.path;
            } else if (!base.path) {
              target.path = relative.path;
            } else {
              target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
            }
            target.path = removeDotSegments(target.path);
          }
          target.query = relative.query;
        }
        target.userinfo = base.userinfo;
        target.host = base.host;
        target.port = base.port;
      }
      target.scheme = base.scheme;
    }
    target.fragment = relative.fragment;
    return target;
  }
  function equal(uriA, uriB, options) {
    const normalizedA = normalizeComparableURI(uriA, options);
    const normalizedB = normalizeComparableURI(uriB, options);
    return normalizedA !== undefined && normalizedB !== undefined && normalizedA.toLowerCase() === normalizedB.toLowerCase();
  }
  function serialize(cmpts, opts) {
    const component = {
      host: cmpts.host,
      scheme: cmpts.scheme,
      userinfo: cmpts.userinfo,
      port: cmpts.port,
      path: cmpts.path,
      query: cmpts.query,
      nid: cmpts.nid,
      nss: cmpts.nss,
      uuid: cmpts.uuid,
      fragment: cmpts.fragment,
      reference: cmpts.reference,
      resourceName: cmpts.resourceName,
      secure: cmpts.secure,
      error: ""
    };
    const options = Object.assign({}, opts);
    const uriTokens = [];
    const schemeHandler = getSchemeHandler(options.scheme || component.scheme);
    if (schemeHandler && schemeHandler.serialize)
      schemeHandler.serialize(component, options);
    if (component.path !== undefined) {
      if (!options.skipEscape) {
        component.path = escapePreservingEscapes(component.path);
        if (component.scheme !== undefined) {
          component.path = component.path.split("%3A").join(":");
        }
      } else {
        component.path = normalizePercentEncoding(component.path);
      }
    }
    if (options.reference !== "suffix" && component.scheme) {
      uriTokens.push(component.scheme, ":");
    }
    const authority = recomposeAuthority(component);
    if (authority !== undefined) {
      if (options.reference !== "suffix") {
        uriTokens.push("//");
      }
      uriTokens.push(authority);
      if (component.path && component.path[0] !== "/") {
        uriTokens.push("/");
      }
    }
    if (component.path !== undefined) {
      let s = component.path;
      if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
        s = removeDotSegments(s);
      }
      if (authority === undefined && s[0] === "/" && s[1] === "/") {
        s = "/%2F" + s.slice(2);
      }
      uriTokens.push(s);
    }
    if (component.query !== undefined) {
      uriTokens.push("?", component.query);
    }
    if (component.fragment !== undefined) {
      uriTokens.push("#", component.fragment);
    }
    return uriTokens.join("");
  }
  var URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function getParseError(parsed, matches) {
    if (matches[2] !== undefined && parsed.path && parsed.path[0] !== "/") {
      return 'URI path must start with "/" when authority is present.';
    }
    if (typeof parsed.port === "number" && (parsed.port < 0 || parsed.port > 65535)) {
      return "URI port is malformed.";
    }
    return;
  }
  function parseWithStatus(uri, opts) {
    const options = Object.assign({}, opts);
    const parsed = {
      scheme: undefined,
      userinfo: undefined,
      host: "",
      port: undefined,
      path: "",
      query: undefined,
      fragment: undefined
    };
    let malformedAuthorityOrPort = false;
    let isIP = false;
    if (options.reference === "suffix") {
      if (options.scheme) {
        uri = options.scheme + ":" + uri;
      } else {
        uri = "//" + uri;
      }
    }
    const matches = uri.match(URI_PARSE);
    if (matches) {
      parsed.scheme = matches[1];
      parsed.userinfo = matches[3];
      parsed.host = matches[4];
      parsed.port = parseInt(matches[5], 10);
      parsed.path = matches[6] || "";
      parsed.query = matches[7];
      parsed.fragment = matches[8];
      if (isNaN(parsed.port)) {
        parsed.port = matches[5];
      }
      const parseError = getParseError(parsed, matches);
      if (parseError !== undefined) {
        parsed.error = parsed.error || parseError;
        malformedAuthorityOrPort = true;
      }
      if (parsed.host) {
        const ipv4result = isIPv4(parsed.host);
        if (ipv4result === false) {
          const ipv6result = normalizeIPv6(parsed.host);
          parsed.host = ipv6result.host.toLowerCase();
          isIP = ipv6result.isIPV6;
        } else {
          isIP = true;
        }
      }
      if (parsed.scheme === undefined && parsed.userinfo === undefined && parsed.host === undefined && parsed.port === undefined && parsed.query === undefined && !parsed.path) {
        parsed.reference = "same-document";
      } else if (parsed.scheme === undefined) {
        parsed.reference = "relative";
      } else if (parsed.fragment === undefined) {
        parsed.reference = "absolute";
      } else {
        parsed.reference = "uri";
      }
      if (options.reference && options.reference !== "suffix" && options.reference !== parsed.reference) {
        parsed.error = parsed.error || "URI is not a " + options.reference + " reference.";
      }
      const schemeHandler = getSchemeHandler(options.scheme || parsed.scheme);
      if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
        if (parsed.host && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === false && nonSimpleDomain(parsed.host)) {
          try {
            parsed.host = new URL("http://" + parsed.host).hostname;
          } catch (e) {
            parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e;
          }
        }
      }
      if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
        if (uri.indexOf("%") !== -1) {
          if (parsed.scheme !== undefined) {
            parsed.scheme = unescape(parsed.scheme);
          }
          if (parsed.host !== undefined) {
            parsed.host = reescapeHostDelimiters(unescape(parsed.host), isIP);
          }
        }
        if (parsed.path) {
          parsed.path = normalizePathEncoding(parsed.path);
        }
        if (parsed.fragment) {
          try {
            parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
          } catch {
            parsed.error = parsed.error || "URI malformed";
          }
        }
      }
      if (schemeHandler && schemeHandler.parse) {
        schemeHandler.parse(parsed, options);
      }
    } else {
      parsed.error = parsed.error || "URI can not be parsed.";
    }
    return { parsed, malformedAuthorityOrPort };
  }
  function parse(uri, opts) {
    return parseWithStatus(uri, opts).parsed;
  }
  function normalizeString(uri, opts) {
    return normalizeStringWithStatus(uri, opts).normalized;
  }
  function normalizeStringWithStatus(uri, opts) {
    const { parsed, malformedAuthorityOrPort } = parseWithStatus(uri, opts);
    return {
      normalized: malformedAuthorityOrPort ? uri : serialize(parsed, opts),
      malformedAuthorityOrPort
    };
  }
  function normalizeComparableURI(uri, opts) {
    if (typeof uri === "string") {
      const { normalized, malformedAuthorityOrPort } = normalizeStringWithStatus(uri, opts);
      return malformedAuthorityOrPort ? undefined : normalized;
    }
    if (typeof uri === "object") {
      return serialize(uri, opts);
    }
  }
  var fastUri = {
    SCHEMES,
    normalize,
    resolve,
    resolveComponent,
    equal,
    serialize,
    parse
  };
  module.exports = fastUri;
  module.exports.default = fastUri;
  module.exports.fastUri = fastUri;
});

// ../../node_modules/ajv/dist/runtime/uri.js
var require_uri = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var uri = require_fast_uri();
  uri.code = 'require("ajv/dist/runtime/uri").default';
  exports.default = uri;
});

// ../../node_modules/ajv/dist/core.js
var require_core = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = undefined;
  var validate_1 = require_validate();
  Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
    return validate_1.KeywordCxt;
  } });
  var codegen_1 = require_codegen();
  Object.defineProperty(exports, "_", { enumerable: true, get: function() {
    return codegen_1._;
  } });
  Object.defineProperty(exports, "str", { enumerable: true, get: function() {
    return codegen_1.str;
  } });
  Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
    return codegen_1.stringify;
  } });
  Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
    return codegen_1.nil;
  } });
  Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
    return codegen_1.Name;
  } });
  Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
    return codegen_1.CodeGen;
  } });
  var validation_error_1 = require_validation_error();
  var ref_error_1 = require_ref_error();
  var rules_1 = require_rules();
  var compile_1 = require_compile();
  var codegen_2 = require_codegen();
  var resolve_1 = require_resolve();
  var dataType_1 = require_dataType();
  var util_1 = require_util();
  var $dataRefSchema = require_data();
  var uri_1 = require_uri();
  var defaultRegExp = (str, flags) => new RegExp(str, flags);
  defaultRegExp.code = "new RegExp";
  var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
  var EXT_SCOPE_NAMES = new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]);
  var removedOptions = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  };
  var deprecatedOptions = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  };
  var MAX_EXPRESSION = 200;
  function requiredOptions(o) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    const s = o.strict;
    const _optz = (_a = o.code) === null || _a === undefined ? undefined : _a.optimize;
    const optimize = _optz === true || _optz === undefined ? 1 : _optz || 0;
    const regExp = (_c = (_b = o.code) === null || _b === undefined ? undefined : _b.regExp) !== null && _c !== undefined ? _c : defaultRegExp;
    const uriResolver = (_d = o.uriResolver) !== null && _d !== undefined ? _d : uri_1.default;
    return {
      strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== undefined ? _e : s) !== null && _f !== undefined ? _f : true,
      strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== undefined ? _g : s) !== null && _h !== undefined ? _h : true,
      strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== undefined ? _j : s) !== null && _k !== undefined ? _k : "log",
      strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== undefined ? _l : s) !== null && _m !== undefined ? _m : "log",
      strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== undefined ? _o : s) !== null && _p !== undefined ? _p : false,
      code: o.code ? { ...o.code, optimize, regExp } : { optimize, regExp },
      loopRequired: (_q = o.loopRequired) !== null && _q !== undefined ? _q : MAX_EXPRESSION,
      loopEnum: (_r = o.loopEnum) !== null && _r !== undefined ? _r : MAX_EXPRESSION,
      meta: (_s = o.meta) !== null && _s !== undefined ? _s : true,
      messages: (_t = o.messages) !== null && _t !== undefined ? _t : true,
      inlineRefs: (_u = o.inlineRefs) !== null && _u !== undefined ? _u : true,
      schemaId: (_v = o.schemaId) !== null && _v !== undefined ? _v : "$id",
      addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== undefined ? _w : true,
      validateSchema: (_x = o.validateSchema) !== null && _x !== undefined ? _x : true,
      validateFormats: (_y = o.validateFormats) !== null && _y !== undefined ? _y : true,
      unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== undefined ? _z : true,
      int32range: (_0 = o.int32range) !== null && _0 !== undefined ? _0 : true,
      uriResolver
    };
  }

  class Ajv {
    constructor(opts = {}) {
      this.schemas = {};
      this.refs = {};
      this.formats = Object.create(null);
      this._compilations = new Set;
      this._loading = {};
      this._cache = new Map;
      opts = this.opts = { ...opts, ...requiredOptions(opts) };
      const { es5, lines } = this.opts.code;
      this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines });
      this.logger = getLogger(opts.logger);
      const formatOpt = opts.validateFormats;
      opts.validateFormats = false;
      this.RULES = (0, rules_1.getRules)();
      checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
      checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
      this._metaOpts = getMetaSchemaOptions.call(this);
      if (opts.formats)
        addInitialFormats.call(this);
      this._addVocabularies();
      this._addDefaultMetaSchema();
      if (opts.keywords)
        addInitialKeywords.call(this, opts.keywords);
      if (typeof opts.meta == "object")
        this.addMetaSchema(opts.meta);
      addInitialSchemas.call(this);
      opts.validateFormats = formatOpt;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data, meta, schemaId } = this.opts;
      let _dataRefSchema = $dataRefSchema;
      if (schemaId === "id") {
        _dataRefSchema = { ...$dataRefSchema };
        _dataRefSchema.id = _dataRefSchema.$id;
        delete _dataRefSchema.$id;
      }
      if (meta && $data)
        this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
    }
    defaultMeta() {
      const { meta, schemaId } = this.opts;
      return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : undefined;
    }
    validate(schemaKeyRef, data) {
      let v;
      if (typeof schemaKeyRef == "string") {
        v = this.getSchema(schemaKeyRef);
        if (!v)
          throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
      } else {
        v = this.compile(schemaKeyRef);
      }
      const valid = v(data);
      if (!("$async" in v))
        this.errors = v.errors;
      return valid;
    }
    compile(schema, _meta) {
      const sch = this._addSchema(schema, _meta);
      return sch.validate || this._compileSchemaEnv(sch);
    }
    compileAsync(schema, meta) {
      if (typeof this.opts.loadSchema != "function") {
        throw new Error("options.loadSchema should be a function");
      }
      const { loadSchema } = this.opts;
      return runCompileAsync.call(this, schema, meta);
      async function runCompileAsync(_schema, _meta) {
        await loadMetaSchema.call(this, _schema.$schema);
        const sch = this._addSchema(_schema, _meta);
        return sch.validate || _compileAsync.call(this, sch);
      }
      async function loadMetaSchema($ref) {
        if ($ref && !this.getSchema($ref)) {
          await runCompileAsync.call(this, { $ref }, true);
        }
      }
      async function _compileAsync(sch) {
        try {
          return this._compileSchemaEnv(sch);
        } catch (e) {
          if (!(e instanceof ref_error_1.default))
            throw e;
          checkLoaded.call(this, e);
          await loadMissingSchema.call(this, e.missingSchema);
          return _compileAsync.call(this, sch);
        }
      }
      function checkLoaded({ missingSchema: ref, missingRef }) {
        if (this.refs[ref]) {
          throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
        }
      }
      async function loadMissingSchema(ref) {
        const _schema = await _loadSchema.call(this, ref);
        if (!this.refs[ref])
          await loadMetaSchema.call(this, _schema.$schema);
        if (!this.refs[ref])
          this.addSchema(_schema, ref, meta);
      }
      async function _loadSchema(ref) {
        const p = this._loading[ref];
        if (p)
          return p;
        try {
          return await (this._loading[ref] = loadSchema(ref));
        } finally {
          delete this._loading[ref];
        }
      }
    }
    addSchema(schema, key, _meta, _validateSchema = this.opts.validateSchema) {
      if (Array.isArray(schema)) {
        for (const sch of schema)
          this.addSchema(sch, undefined, _meta, _validateSchema);
        return this;
      }
      let id;
      if (typeof schema === "object") {
        const { schemaId } = this.opts;
        id = schema[schemaId];
        if (id !== undefined && typeof id != "string") {
          throw new Error(`schema ${schemaId} must be string`);
        }
      }
      key = (0, resolve_1.normalizeId)(key || id);
      this._checkUnique(key);
      this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
      return this;
    }
    addMetaSchema(schema, key, _validateSchema = this.opts.validateSchema) {
      this.addSchema(schema, key, true, _validateSchema);
      return this;
    }
    validateSchema(schema, throwOrLogError) {
      if (typeof schema == "boolean")
        return true;
      let $schema;
      $schema = schema.$schema;
      if ($schema !== undefined && typeof $schema != "string") {
        throw new Error("$schema must be a string");
      }
      $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
      if (!$schema) {
        this.logger.warn("meta-schema not available");
        this.errors = null;
        return true;
      }
      const valid = this.validate($schema, schema);
      if (!valid && throwOrLogError) {
        const message = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(message);
        else
          throw new Error(message);
      }
      return valid;
    }
    getSchema(keyRef) {
      let sch;
      while (typeof (sch = getSchEnv.call(this, keyRef)) == "string")
        keyRef = sch;
      if (sch === undefined) {
        const { schemaId } = this.opts;
        const root = new compile_1.SchemaEnv({ schema: {}, schemaId });
        sch = compile_1.resolveSchema.call(this, root, keyRef);
        if (!sch)
          return;
        this.refs[keyRef] = sch;
      }
      return sch.validate || this._compileSchemaEnv(sch);
    }
    removeSchema(schemaKeyRef) {
      if (schemaKeyRef instanceof RegExp) {
        this._removeAllSchemas(this.schemas, schemaKeyRef);
        this._removeAllSchemas(this.refs, schemaKeyRef);
        return this;
      }
      switch (typeof schemaKeyRef) {
        case "undefined":
          this._removeAllSchemas(this.schemas);
          this._removeAllSchemas(this.refs);
          this._cache.clear();
          return this;
        case "string": {
          const sch = getSchEnv.call(this, schemaKeyRef);
          if (typeof sch == "object")
            this._cache.delete(sch.schema);
          delete this.schemas[schemaKeyRef];
          delete this.refs[schemaKeyRef];
          return this;
        }
        case "object": {
          const cacheKey = schemaKeyRef;
          this._cache.delete(cacheKey);
          let id = schemaKeyRef[this.opts.schemaId];
          if (id) {
            id = (0, resolve_1.normalizeId)(id);
            delete this.schemas[id];
            delete this.refs[id];
          }
          return this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(definitions) {
      for (const def of definitions)
        this.addKeyword(def);
      return this;
    }
    addKeyword(kwdOrDef, def) {
      let keyword;
      if (typeof kwdOrDef == "string") {
        keyword = kwdOrDef;
        if (typeof def == "object") {
          this.logger.warn("these parameters are deprecated, see docs for addKeyword");
          def.keyword = keyword;
        }
      } else if (typeof kwdOrDef == "object" && def === undefined) {
        def = kwdOrDef;
        keyword = def.keyword;
        if (Array.isArray(keyword) && !keyword.length) {
          throw new Error("addKeywords: keyword must be string or non-empty array");
        }
      } else {
        throw new Error("invalid addKeywords parameters");
      }
      checkKeyword.call(this, keyword, def);
      if (!def) {
        (0, util_1.eachItem)(keyword, (kwd) => addRule.call(this, kwd));
        return this;
      }
      keywordMetaschema.call(this, def);
      const definition = {
        ...def,
        type: (0, dataType_1.getJSONTypes)(def.type),
        schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
      };
      (0, util_1.eachItem)(keyword, definition.type.length === 0 ? (k) => addRule.call(this, k, definition) : (k) => definition.type.forEach((t) => addRule.call(this, k, definition, t)));
      return this;
    }
    getKeyword(keyword) {
      const rule = this.RULES.all[keyword];
      return typeof rule == "object" ? rule.definition : !!rule;
    }
    removeKeyword(keyword) {
      const { RULES } = this;
      delete RULES.keywords[keyword];
      delete RULES.all[keyword];
      for (const group of RULES.rules) {
        const i = group.rules.findIndex((rule) => rule.keyword === keyword);
        if (i >= 0)
          group.rules.splice(i, 1);
      }
      return this;
    }
    addFormat(name, format) {
      if (typeof format == "string")
        format = new RegExp(format);
      this.formats[name] = format;
      return this;
    }
    errorsText(errors = this.errors, { separator = ", ", dataVar = "data" } = {}) {
      if (!errors || errors.length === 0)
        return "No errors";
      return errors.map((e) => `${dataVar}${e.instancePath} ${e.message}`).reduce((text, msg) => text + separator + msg);
    }
    $dataMetaSchema(metaSchema, keywordsJsonPointers) {
      const rules = this.RULES.all;
      metaSchema = JSON.parse(JSON.stringify(metaSchema));
      for (const jsonPointer of keywordsJsonPointers) {
        const segments = jsonPointer.split("/").slice(1);
        let keywords = metaSchema;
        for (const seg of segments)
          keywords = keywords[seg];
        for (const key in rules) {
          const rule = rules[key];
          if (typeof rule != "object")
            continue;
          const { $data } = rule.definition;
          const schema = keywords[key];
          if ($data && schema)
            keywords[key] = schemaOrData(schema);
        }
      }
      return metaSchema;
    }
    _removeAllSchemas(schemas, regex) {
      for (const keyRef in schemas) {
        const sch = schemas[keyRef];
        if (!regex || regex.test(keyRef)) {
          if (typeof sch == "string") {
            delete schemas[keyRef];
          } else if (sch && !sch.meta) {
            this._cache.delete(sch.schema);
            delete schemas[keyRef];
          }
        }
      }
    }
    _addSchema(schema, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
      let id;
      const { schemaId } = this.opts;
      if (typeof schema == "object") {
        id = schema[schemaId];
      } else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        else if (typeof schema != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let sch = this._cache.get(schema);
      if (sch !== undefined)
        return sch;
      baseId = (0, resolve_1.normalizeId)(id || baseId);
      const localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
      sch = new compile_1.SchemaEnv({ schema, schemaId, meta, baseId, localRefs });
      this._cache.set(sch.schema, sch);
      if (addSchema && !baseId.startsWith("#")) {
        if (baseId)
          this._checkUnique(baseId);
        this.refs[baseId] = sch;
      }
      if (validateSchema)
        this.validateSchema(schema, true);
      return sch;
    }
    _checkUnique(id) {
      if (this.schemas[id] || this.refs[id]) {
        throw new Error(`schema with key or id "${id}" already exists`);
      }
    }
    _compileSchemaEnv(sch) {
      if (sch.meta)
        this._compileMetaSchema(sch);
      else
        compile_1.compileSchema.call(this, sch);
      if (!sch.validate)
        throw new Error("ajv implementation error");
      return sch.validate;
    }
    _compileMetaSchema(sch) {
      const currentOpts = this.opts;
      this.opts = this._metaOpts;
      try {
        compile_1.compileSchema.call(this, sch);
      } finally {
        this.opts = currentOpts;
      }
    }
  }
  Ajv.ValidationError = validation_error_1.default;
  Ajv.MissingRefError = ref_error_1.default;
  exports.default = Ajv;
  function checkOptions(checkOpts, options, msg, log = "error") {
    for (const key in checkOpts) {
      const opt = key;
      if (opt in options)
        this.logger[log](`${msg}: option ${key}. ${checkOpts[opt]}`);
    }
  }
  function getSchEnv(keyRef) {
    keyRef = (0, resolve_1.normalizeId)(keyRef);
    return this.schemas[keyRef] || this.refs[keyRef];
  }
  function addInitialSchemas() {
    const optsSchemas = this.opts.schemas;
    if (!optsSchemas)
      return;
    if (Array.isArray(optsSchemas))
      this.addSchema(optsSchemas);
    else
      for (const key in optsSchemas)
        this.addSchema(optsSchemas[key], key);
  }
  function addInitialFormats() {
    for (const name in this.opts.formats) {
      const format = this.opts.formats[name];
      if (format)
        this.addFormat(name, format);
    }
  }
  function addInitialKeywords(defs) {
    if (Array.isArray(defs)) {
      this.addVocabulary(defs);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const keyword in defs) {
      const def = defs[keyword];
      if (!def.keyword)
        def.keyword = keyword;
      this.addKeyword(def);
    }
  }
  function getMetaSchemaOptions() {
    const metaOpts = { ...this.opts };
    for (const opt of META_IGNORE_OPTIONS)
      delete metaOpts[opt];
    return metaOpts;
  }
  var noLogs = { log() {}, warn() {}, error() {} };
  function getLogger(logger) {
    if (logger === false)
      return noLogs;
    if (logger === undefined)
      return console;
    if (logger.log && logger.warn && logger.error)
      return logger;
    throw new Error("logger must implement log, warn and error methods");
  }
  var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
  function checkKeyword(keyword, def) {
    const { RULES } = this;
    (0, util_1.eachItem)(keyword, (kwd) => {
      if (RULES.keywords[kwd])
        throw new Error(`Keyword ${kwd} is already defined`);
      if (!KEYWORD_NAME.test(kwd))
        throw new Error(`Keyword ${kwd} has invalid name`);
    });
    if (!def)
      return;
    if (def.$data && !(("code" in def) || ("validate" in def))) {
      throw new Error('$data keyword must have "code" or "validate" function');
    }
  }
  function addRule(keyword, definition, dataType) {
    var _a;
    const post = definition === null || definition === undefined ? undefined : definition.post;
    if (dataType && post)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES } = this;
    let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t }) => t === dataType);
    if (!ruleGroup) {
      ruleGroup = { type: dataType, rules: [] };
      RULES.rules.push(ruleGroup);
    }
    RULES.keywords[keyword] = true;
    if (!definition)
      return;
    const rule = {
      keyword,
      definition: {
        ...definition,
        type: (0, dataType_1.getJSONTypes)(definition.type),
        schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
      }
    };
    if (definition.before)
      addBeforeRule.call(this, ruleGroup, rule, definition.before);
    else
      ruleGroup.rules.push(rule);
    RULES.all[keyword] = rule;
    (_a = definition.implements) === null || _a === undefined || _a.forEach((kwd) => this.addKeyword(kwd));
  }
  function addBeforeRule(ruleGroup, rule, before) {
    const i = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
    if (i >= 0) {
      ruleGroup.rules.splice(i, 0, rule);
    } else {
      ruleGroup.rules.push(rule);
      this.logger.warn(`rule ${before} is not defined`);
    }
  }
  function keywordMetaschema(def) {
    let { metaSchema } = def;
    if (metaSchema === undefined)
      return;
    if (def.$data && this.opts.$data)
      metaSchema = schemaOrData(metaSchema);
    def.validateSchema = this.compile(metaSchema, true);
  }
  var $dataRef = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function schemaOrData(schema) {
    return { anyOf: [schema, $dataRef] };
  }
});

// ../../node_modules/ajv/dist/vocabularies/core/id.js
var require_id = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var def = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/core/ref.js
var require_ref = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.callRef = exports.getValidate = undefined;
  var ref_error_1 = require_ref_error();
  var code_1 = require_code2();
  var codegen_1 = require_codegen();
  var names_1 = require_names();
  var compile_1 = require_compile();
  var util_1 = require_util();
  var def = {
    keyword: "$ref",
    schemaType: "string",
    code(cxt) {
      const { gen, schema: $ref, it } = cxt;
      const { baseId, schemaEnv: env, validateName, opts, self: self2 } = it;
      const { root } = env;
      if (($ref === "#" || $ref === "#/") && baseId === root.baseId)
        return callRootRef();
      const schOrEnv = compile_1.resolveRef.call(self2, root, baseId, $ref);
      if (schOrEnv === undefined)
        throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
      if (schOrEnv instanceof compile_1.SchemaEnv)
        return callValidate(schOrEnv);
      return inlineRefSchema(schOrEnv);
      function callRootRef() {
        if (env === root)
          return callRef(cxt, validateName, env, env.$async);
        const rootName = gen.scopeValue("root", { ref: root });
        return callRef(cxt, (0, codegen_1._)`${rootName}.validate`, root, root.$async);
      }
      function callValidate(sch) {
        const v = getValidate(cxt, sch);
        callRef(cxt, v, sch, sch.$async);
      }
      function inlineRefSchema(sch) {
        const schName = gen.scopeValue("schema", opts.code.source === true ? { ref: sch, code: (0, codegen_1.stringify)(sch) } : { ref: sch });
        const valid = gen.name("valid");
        const schCxt = cxt.subschema({
          schema: sch,
          dataTypes: [],
          schemaPath: codegen_1.nil,
          topSchemaRef: schName,
          errSchemaPath: $ref
        }, valid);
        cxt.mergeEvaluated(schCxt);
        cxt.ok(valid);
      }
    }
  };
  function getValidate(cxt, sch) {
    const { gen } = cxt;
    return sch.validate ? gen.scopeValue("validate", { ref: sch.validate }) : (0, codegen_1._)`${gen.scopeValue("wrapper", { ref: sch })}.validate`;
  }
  exports.getValidate = getValidate;
  function callRef(cxt, v, sch, $async) {
    const { gen, it } = cxt;
    const { allErrors, schemaEnv: env, opts } = it;
    const passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
    if ($async)
      callAsyncRef();
    else
      callSyncRef();
    function callAsyncRef() {
      if (!env.$async)
        throw new Error("async schema referenced by sync schema");
      const valid = gen.let("valid");
      gen.try(() => {
        gen.code((0, codegen_1._)`await ${(0, code_1.callValidateCode)(cxt, v, passCxt)}`);
        addEvaluatedFrom(v);
        if (!allErrors)
          gen.assign(valid, true);
      }, (e) => {
        gen.if((0, codegen_1._)`!(${e} instanceof ${it.ValidationError})`, () => gen.throw(e));
        addErrorsFrom(e);
        if (!allErrors)
          gen.assign(valid, false);
      });
      cxt.ok(valid);
    }
    function callSyncRef() {
      cxt.result((0, code_1.callValidateCode)(cxt, v, passCxt), () => addEvaluatedFrom(v), () => addErrorsFrom(v));
    }
    function addErrorsFrom(source) {
      const errs = (0, codegen_1._)`${source}.errors`;
      gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`);
      gen.assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
    }
    function addEvaluatedFrom(source) {
      var _a;
      if (!it.opts.unevaluated)
        return;
      const schEvaluated = (_a = sch === null || sch === undefined ? undefined : sch.validate) === null || _a === undefined ? undefined : _a.evaluated;
      if (it.props !== true) {
        if (schEvaluated && !schEvaluated.dynamicProps) {
          if (schEvaluated.props !== undefined) {
            it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props);
          }
        } else {
          const props = gen.var("props", (0, codegen_1._)`${source}.evaluated.props`);
          it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
        }
      }
      if (it.items !== true) {
        if (schEvaluated && !schEvaluated.dynamicItems) {
          if (schEvaluated.items !== undefined) {
            it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items);
          }
        } else {
          const items = gen.var("items", (0, codegen_1._)`${source}.evaluated.items`);
          it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
        }
      }
    }
  }
  exports.callRef = callRef;
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/core/index.js
var require_core2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var id_1 = require_id();
  var ref_1 = require_ref();
  var core = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    id_1.default,
    ref_1.default
  ];
  exports.default = core;
});

// ../../node_modules/ajv/dist/vocabularies/validation/limitNumber.js
var require_limitNumber = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var ops = codegen_1.operators;
  var KWDs = {
    maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
    minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
    exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
    exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
  };
  var error = {
    message: ({ keyword, schemaCode }) => (0, codegen_1.str)`must be ${KWDs[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
  };
  var def = {
    keyword: Object.keys(KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
      const { keyword, data, schemaCode } = cxt;
      cxt.fail$data((0, codegen_1._)`${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/multipleOf.js
var require_multipleOf = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var error = {
    message: ({ schemaCode }) => (0, codegen_1.str)`must be multiple of ${schemaCode}`,
    params: ({ schemaCode }) => (0, codegen_1._)`{multipleOf: ${schemaCode}}`
  };
  var def = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
      const { gen, data, schemaCode, it } = cxt;
      const prec = it.opts.multipleOfPrecision;
      const res = gen.let("res");
      const invalid = prec ? (0, codegen_1._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1._)`${res} !== parseInt(${res})`;
      cxt.fail$data((0, codegen_1._)`(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  function ucs2length(str) {
    const len = str.length;
    let length = 0;
    let pos = 0;
    let value;
    while (pos < len) {
      length++;
      value = str.charCodeAt(pos++);
      if (value >= 55296 && value <= 56319 && pos < len) {
        value = str.charCodeAt(pos);
        if ((value & 64512) === 56320)
          pos++;
      }
    }
    return length;
  }
  exports.default = ucs2length;
  ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
});

// ../../node_modules/ajv/dist/vocabularies/validation/limitLength.js
var require_limitLength = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var ucs2length_1 = require_ucs2length();
  var error = {
    message({ keyword, schemaCode }) {
      const comp = keyword === "maxLength" ? "more" : "fewer";
      return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} characters`;
    },
    params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
  };
  var def = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
      const { keyword, data, schemaCode, it } = cxt;
      const op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
      const len = it.opts.unicode === false ? (0, codegen_1._)`${data}.length` : (0, codegen_1._)`${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
      cxt.fail$data((0, codegen_1._)`${len} ${op} ${schemaCode}`);
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/pattern.js
var require_pattern = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var code_1 = require_code2();
  var util_1 = require_util();
  var codegen_1 = require_codegen();
  var error = {
    message: ({ schemaCode }) => (0, codegen_1.str)`must match pattern "${schemaCode}"`,
    params: ({ schemaCode }) => (0, codegen_1._)`{pattern: ${schemaCode}}`
  };
  var def = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error,
    code(cxt) {
      const { gen, data, $data, schema, schemaCode, it } = cxt;
      const u = it.opts.unicodeRegExp ? "u" : "";
      if ($data) {
        const { regExp } = it.opts.code;
        const regExpCode = regExp.code === "new RegExp" ? (0, codegen_1._)`new RegExp` : (0, util_1.useFunc)(gen, regExp);
        const valid = gen.let("valid");
        gen.try(() => gen.assign(valid, (0, codegen_1._)`${regExpCode}(${schemaCode}, ${u}).test(${data})`), () => gen.assign(valid, false));
        cxt.fail$data((0, codegen_1._)`!${valid}`);
      } else {
        const regExp = (0, code_1.usePattern)(cxt, schema);
        cxt.fail$data((0, codegen_1._)`!${regExp}.test(${data})`);
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/limitProperties.js
var require_limitProperties = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var error = {
    message({ keyword, schemaCode }) {
      const comp = keyword === "maxProperties" ? "more" : "fewer";
      return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} properties`;
    },
    params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
  };
  var def = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
      const { keyword, data, schemaCode } = cxt;
      const op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
      cxt.fail$data((0, codegen_1._)`Object.keys(${data}).length ${op} ${schemaCode}`);
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/required.js
var require_required = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var code_1 = require_code2();
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var error = {
    message: ({ params: { missingProperty } }) => (0, codegen_1.str)`must have required property '${missingProperty}'`,
    params: ({ params: { missingProperty } }) => (0, codegen_1._)`{missingProperty: ${missingProperty}}`
  };
  var def = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error,
    code(cxt) {
      const { gen, schema, schemaCode, data, $data, it } = cxt;
      const { opts } = it;
      if (!$data && schema.length === 0)
        return;
      const useLoop = schema.length >= opts.loopRequired;
      if (it.allErrors)
        allErrorsMode();
      else
        exitOnErrorMode();
      if (opts.strictRequired) {
        const props = cxt.parentSchema.properties;
        const { definedProperties } = cxt.it;
        for (const requiredKey of schema) {
          if ((props === null || props === undefined ? undefined : props[requiredKey]) === undefined && !definedProperties.has(requiredKey)) {
            const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
            const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
            (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
          }
        }
      }
      function allErrorsMode() {
        if (useLoop || $data) {
          cxt.block$data(codegen_1.nil, loopAllRequired);
        } else {
          for (const prop of schema) {
            (0, code_1.checkReportMissingProp)(cxt, prop);
          }
        }
      }
      function exitOnErrorMode() {
        const missing = gen.let("missing");
        if (useLoop || $data) {
          const valid = gen.let("valid", true);
          cxt.block$data(valid, () => loopUntilMissing(missing, valid));
          cxt.ok(valid);
        } else {
          gen.if((0, code_1.checkMissingProp)(cxt, schema, missing));
          (0, code_1.reportMissingProp)(cxt, missing);
          gen.else();
        }
      }
      function loopAllRequired() {
        gen.forOf("prop", schemaCode, (prop) => {
          cxt.setParams({ missingProperty: prop });
          gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), () => cxt.error());
        });
      }
      function loopUntilMissing(missing, valid) {
        cxt.setParams({ missingProperty: missing });
        gen.forOf(missing, schemaCode, () => {
          gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
          gen.if((0, codegen_1.not)(valid), () => {
            cxt.error();
            gen.break();
          });
        }, codegen_1.nil);
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/limitItems.js
var require_limitItems = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var error = {
    message({ keyword, schemaCode }) {
      const comp = keyword === "maxItems" ? "more" : "fewer";
      return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} items`;
    },
    params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
  };
  var def = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
      const { keyword, data, schemaCode } = cxt;
      const op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
      cxt.fail$data((0, codegen_1._)`${data}.length ${op} ${schemaCode}`);
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var equal = require_fast_deep_equal();
  equal.code = 'require("ajv/dist/runtime/equal").default';
  exports.default = equal;
});

// ../../node_modules/ajv/dist/vocabularies/validation/uniqueItems.js
var require_uniqueItems = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var dataType_1 = require_dataType();
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var equal_1 = require_equal();
  var error = {
    message: ({ params: { i, j } }) => (0, codegen_1.str)`must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
    params: ({ params: { i, j } }) => (0, codegen_1._)`{i: ${i}, j: ${j}}`
  };
  var def = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error,
    code(cxt) {
      const { gen, data, $data, schema, parentSchema, schemaCode, it } = cxt;
      if (!$data && !schema)
        return;
      const valid = gen.let("valid");
      const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
      cxt.block$data(valid, validateUniqueItems, (0, codegen_1._)`${schemaCode} === false`);
      cxt.ok(valid);
      function validateUniqueItems() {
        const i = gen.let("i", (0, codegen_1._)`${data}.length`);
        const j = gen.let("j");
        cxt.setParams({ i, j });
        gen.assign(valid, true);
        gen.if((0, codegen_1._)`${i} > 1`, () => (canOptimize() ? loopN : loopN2)(i, j));
      }
      function canOptimize() {
        return itemTypes.length > 0 && !itemTypes.some((t) => t === "object" || t === "array");
      }
      function loopN(i, j) {
        const item = gen.name("item");
        const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
        const indices = gen.const("indices", (0, codegen_1._)`{}`);
        gen.for((0, codegen_1._)`;${i}--;`, () => {
          gen.let(item, (0, codegen_1._)`${data}[${i}]`);
          gen.if(wrongType, (0, codegen_1._)`continue`);
          if (itemTypes.length > 1)
            gen.if((0, codegen_1._)`typeof ${item} == "string"`, (0, codegen_1._)`${item} += "_"`);
          gen.if((0, codegen_1._)`typeof ${indices}[${item}] == "number"`, () => {
            gen.assign(j, (0, codegen_1._)`${indices}[${item}]`);
            cxt.error();
            gen.assign(valid, false).break();
          }).code((0, codegen_1._)`${indices}[${item}] = ${i}`);
        });
      }
      function loopN2(i, j) {
        const eql = (0, util_1.useFunc)(gen, equal_1.default);
        const outer = gen.name("outer");
        gen.label(outer).for((0, codegen_1._)`;${i}--;`, () => gen.for((0, codegen_1._)`${j} = ${i}; ${j}--;`, () => gen.if((0, codegen_1._)`${eql}(${data}[${i}], ${data}[${j}])`, () => {
          cxt.error();
          gen.assign(valid, false).break(outer);
        })));
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/const.js
var require_const = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var equal_1 = require_equal();
  var error = {
    message: "must be equal to constant",
    params: ({ schemaCode }) => (0, codegen_1._)`{allowedValue: ${schemaCode}}`
  };
  var def = {
    keyword: "const",
    $data: true,
    error,
    code(cxt) {
      const { gen, data, $data, schemaCode, schema } = cxt;
      if ($data || schema && typeof schema == "object") {
        cxt.fail$data((0, codegen_1._)`!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`);
      } else {
        cxt.fail((0, codegen_1._)`${schema} !== ${data}`);
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/enum.js
var require_enum = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var equal_1 = require_equal();
  var error = {
    message: "must be equal to one of the allowed values",
    params: ({ schemaCode }) => (0, codegen_1._)`{allowedValues: ${schemaCode}}`
  };
  var def = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error,
    code(cxt) {
      const { gen, data, $data, schema, schemaCode, it } = cxt;
      if (!$data && schema.length === 0)
        throw new Error("enum must have non-empty array");
      const useLoop = schema.length >= it.opts.loopEnum;
      let eql;
      const getEql = () => eql !== null && eql !== undefined ? eql : eql = (0, util_1.useFunc)(gen, equal_1.default);
      let valid;
      if (useLoop || $data) {
        valid = gen.let("valid");
        cxt.block$data(valid, loopEnum);
      } else {
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        const vSchema = gen.const("vSchema", schemaCode);
        valid = (0, codegen_1.or)(...schema.map((_x, i) => equalCode(vSchema, i)));
      }
      cxt.pass(valid);
      function loopEnum() {
        gen.assign(valid, false);
        gen.forOf("v", schemaCode, (v) => gen.if((0, codegen_1._)`${getEql()}(${data}, ${v})`, () => gen.assign(valid, true).break()));
      }
      function equalCode(vSchema, i) {
        const sch = schema[i];
        return typeof sch === "object" && sch !== null ? (0, codegen_1._)`${getEql()}(${data}, ${vSchema}[${i}])` : (0, codegen_1._)`${data} === ${sch}`;
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/validation/index.js
var require_validation = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var limitNumber_1 = require_limitNumber();
  var multipleOf_1 = require_multipleOf();
  var limitLength_1 = require_limitLength();
  var pattern_1 = require_pattern();
  var limitProperties_1 = require_limitProperties();
  var required_1 = require_required();
  var limitItems_1 = require_limitItems();
  var uniqueItems_1 = require_uniqueItems();
  var const_1 = require_const();
  var enum_1 = require_enum();
  var validation = [
    limitNumber_1.default,
    multipleOf_1.default,
    limitLength_1.default,
    pattern_1.default,
    limitProperties_1.default,
    required_1.default,
    limitItems_1.default,
    uniqueItems_1.default,
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    const_1.default,
    enum_1.default
  ];
  exports.default = validation;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/additionalItems.js
var require_additionalItems = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateAdditionalItems = undefined;
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var error = {
    message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
    params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
  };
  var def = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error,
    code(cxt) {
      const { parentSchema, it } = cxt;
      const { items } = parentSchema;
      if (!Array.isArray(items)) {
        (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      validateAdditionalItems(cxt, items);
    }
  };
  function validateAdditionalItems(cxt, items) {
    const { gen, schema, data, keyword, it } = cxt;
    it.items = true;
    const len = gen.const("len", (0, codegen_1._)`${data}.length`);
    if (schema === false) {
      cxt.setParams({ len: items.length });
      cxt.pass((0, codegen_1._)`${len} <= ${items.length}`);
    } else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
      const valid = gen.var("valid", (0, codegen_1._)`${len} <= ${items.length}`);
      gen.if((0, codegen_1.not)(valid), () => validateItems(valid));
      cxt.ok(valid);
    }
    function validateItems(valid) {
      gen.forRange("i", items.length, len, (i) => {
        cxt.subschema({ keyword, dataProp: i, dataPropType: util_1.Type.Num }, valid);
        if (!it.allErrors)
          gen.if((0, codegen_1.not)(valid), () => gen.break());
      });
    }
  }
  exports.validateAdditionalItems = validateAdditionalItems;
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/items.js
var require_items = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateTuple = undefined;
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var code_1 = require_code2();
  var def = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(cxt) {
      const { schema, it } = cxt;
      if (Array.isArray(schema))
        return validateTuple(cxt, "additionalItems", schema);
      it.items = true;
      if ((0, util_1.alwaysValidSchema)(it, schema))
        return;
      cxt.ok((0, code_1.validateArray)(cxt));
    }
  };
  function validateTuple(cxt, extraItems, schArr = cxt.schema) {
    const { gen, parentSchema, data, keyword, it } = cxt;
    checkStrictTuple(parentSchema);
    if (it.opts.unevaluated && schArr.length && it.items !== true) {
      it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items);
    }
    const valid = gen.name("valid");
    const len = gen.const("len", (0, codegen_1._)`${data}.length`);
    schArr.forEach((sch, i) => {
      if ((0, util_1.alwaysValidSchema)(it, sch))
        return;
      gen.if((0, codegen_1._)`${len} > ${i}`, () => cxt.subschema({
        keyword,
        schemaProp: i,
        dataProp: i
      }, valid));
      cxt.ok(valid);
    });
    function checkStrictTuple(sch) {
      const { opts, errSchemaPath } = it;
      const l = schArr.length;
      const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
      if (opts.strictTuples && !fullTuple) {
        const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
        (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
      }
    }
  }
  exports.validateTuple = validateTuple;
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/prefixItems.js
var require_prefixItems = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var items_1 = require_items();
  var def = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (cxt) => (0, items_1.validateTuple)(cxt, "items")
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/items2020.js
var require_items2020 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var code_1 = require_code2();
  var additionalItems_1 = require_additionalItems();
  var error = {
    message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
    params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
  };
  var def = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error,
    code(cxt) {
      const { schema, parentSchema, it } = cxt;
      const { prefixItems } = parentSchema;
      it.items = true;
      if ((0, util_1.alwaysValidSchema)(it, schema))
        return;
      if (prefixItems)
        (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);
      else
        cxt.ok((0, code_1.validateArray)(cxt));
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/contains.js
var require_contains = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var error = {
    message: ({ params: { min, max } }) => max === undefined ? (0, codegen_1.str)`must contain at least ${min} valid item(s)` : (0, codegen_1.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
    params: ({ params: { min, max } }) => max === undefined ? (0, codegen_1._)`{minContains: ${min}}` : (0, codegen_1._)`{minContains: ${min}, maxContains: ${max}}`
  };
  var def = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: true,
    error,
    code(cxt) {
      const { gen, schema, parentSchema, data, it } = cxt;
      let min;
      let max;
      const { minContains, maxContains } = parentSchema;
      if (it.opts.next) {
        min = minContains === undefined ? 1 : minContains;
        max = maxContains;
      } else {
        min = 1;
      }
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      cxt.setParams({ min, max });
      if (max === undefined && min === 0) {
        (0, util_1.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
        return;
      }
      if (max !== undefined && min > max) {
        (0, util_1.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
        cxt.fail();
        return;
      }
      if ((0, util_1.alwaysValidSchema)(it, schema)) {
        let cond = (0, codegen_1._)`${len} >= ${min}`;
        if (max !== undefined)
          cond = (0, codegen_1._)`${cond} && ${len} <= ${max}`;
        cxt.pass(cond);
        return;
      }
      it.items = true;
      const valid = gen.name("valid");
      if (max === undefined && min === 1) {
        validateItems(valid, () => gen.if(valid, () => gen.break()));
      } else if (min === 0) {
        gen.let(valid, true);
        if (max !== undefined)
          gen.if((0, codegen_1._)`${data}.length > 0`, validateItemsWithCount);
      } else {
        gen.let(valid, false);
        validateItemsWithCount();
      }
      cxt.result(valid, () => cxt.reset());
      function validateItemsWithCount() {
        const schValid = gen.name("_valid");
        const count = gen.let("count", 0);
        validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
      }
      function validateItems(_valid, block) {
        gen.forRange("i", 0, len, (i) => {
          cxt.subschema({
            keyword: "contains",
            dataProp: i,
            dataPropType: util_1.Type.Num,
            compositeRule: true
          }, _valid);
          block();
        });
      }
      function checkLimits(count) {
        gen.code((0, codegen_1._)`${count}++`);
        if (max === undefined) {
          gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true).break());
        } else {
          gen.if((0, codegen_1._)`${count} > ${max}`, () => gen.assign(valid, false).break());
          if (min === 1)
            gen.assign(valid, true);
          else
            gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true));
        }
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/dependencies.js
var require_dependencies = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = undefined;
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var code_1 = require_code2();
  exports.error = {
    message: ({ params: { property, depsCount, deps } }) => {
      const property_ies = depsCount === 1 ? "property" : "properties";
      return (0, codegen_1.str)`must have ${property_ies} ${deps} when property ${property} is present`;
    },
    params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_1._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
  };
  var def = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: exports.error,
    code(cxt) {
      const [propDeps, schDeps] = splitDependencies(cxt);
      validatePropertyDeps(cxt, propDeps);
      validateSchemaDeps(cxt, schDeps);
    }
  };
  function splitDependencies({ schema }) {
    const propertyDeps = {};
    const schemaDeps = {};
    for (const key in schema) {
      if (key === "__proto__")
        continue;
      const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
      deps[key] = schema[key];
    }
    return [propertyDeps, schemaDeps];
  }
  function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
    const { gen, data, it } = cxt;
    if (Object.keys(propertyDeps).length === 0)
      return;
    const missing = gen.let("missing");
    for (const prop in propertyDeps) {
      const deps = propertyDeps[prop];
      if (deps.length === 0)
        continue;
      const hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
      cxt.setParams({
        property: prop,
        depsCount: deps.length,
        deps: deps.join(", ")
      });
      if (it.allErrors) {
        gen.if(hasProperty, () => {
          for (const depProp of deps) {
            (0, code_1.checkReportMissingProp)(cxt, depProp);
          }
        });
      } else {
        gen.if((0, codegen_1._)`${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`);
        (0, code_1.reportMissingProp)(cxt, missing);
        gen.else();
      }
    }
  }
  exports.validatePropertyDeps = validatePropertyDeps;
  function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
    const { gen, data, keyword, it } = cxt;
    const valid = gen.name("valid");
    for (const prop in schemaDeps) {
      if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop]))
        continue;
      gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties), () => {
        const schCxt = cxt.subschema({ keyword, schemaProp: prop }, valid);
        cxt.mergeValidEvaluated(schCxt, valid);
      }, () => gen.var(valid, true));
      cxt.ok(valid);
    }
  }
  exports.validateSchemaDeps = validateSchemaDeps;
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/propertyNames.js
var require_propertyNames = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var error = {
    message: "property name must be valid",
    params: ({ params }) => (0, codegen_1._)`{propertyName: ${params.propertyName}}`
  };
  var def = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error,
    code(cxt) {
      const { gen, schema, data, it } = cxt;
      if ((0, util_1.alwaysValidSchema)(it, schema))
        return;
      const valid = gen.name("valid");
      gen.forIn("key", data, (key) => {
        cxt.setParams({ propertyName: key });
        cxt.subschema({
          keyword: "propertyNames",
          data: key,
          dataTypes: ["string"],
          propertyName: key,
          compositeRule: true
        }, valid);
        gen.if((0, codegen_1.not)(valid), () => {
          cxt.error(true);
          if (!it.allErrors)
            gen.break();
        });
      });
      cxt.ok(valid);
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js
var require_additionalProperties = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var code_1 = require_code2();
  var codegen_1 = require_codegen();
  var names_1 = require_names();
  var util_1 = require_util();
  var error = {
    message: "must NOT have additional properties",
    params: ({ params }) => (0, codegen_1._)`{additionalProperty: ${params.additionalProperty}}`
  };
  var def = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: true,
    trackErrors: true,
    error,
    code(cxt) {
      const { gen, schema, parentSchema, data, errsCount, it } = cxt;
      if (!errsCount)
        throw new Error("ajv implementation error");
      const { allErrors, opts } = it;
      it.props = true;
      if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema))
        return;
      const props = (0, code_1.allSchemaProperties)(parentSchema.properties);
      const patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
      checkAdditionalProperties();
      cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
      function checkAdditionalProperties() {
        gen.forIn("key", data, (key) => {
          if (!props.length && !patProps.length)
            additionalPropertyCode(key);
          else
            gen.if(isAdditional(key), () => additionalPropertyCode(key));
        });
      }
      function isAdditional(key) {
        let definedProp;
        if (props.length > 8) {
          const propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
          definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
        } else if (props.length) {
          definedProp = (0, codegen_1.or)(...props.map((p) => (0, codegen_1._)`${key} === ${p}`));
        } else {
          definedProp = codegen_1.nil;
        }
        if (patProps.length) {
          definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p) => (0, codegen_1._)`${(0, code_1.usePattern)(cxt, p)}.test(${key})`));
        }
        return (0, codegen_1.not)(definedProp);
      }
      function deleteAdditional(key) {
        gen.code((0, codegen_1._)`delete ${data}[${key}]`);
      }
      function additionalPropertyCode(key) {
        if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
          deleteAdditional(key);
          return;
        }
        if (schema === false) {
          cxt.setParams({ additionalProperty: key });
          cxt.error();
          if (!allErrors)
            gen.break();
          return;
        }
        if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
          const valid = gen.name("valid");
          if (opts.removeAdditional === "failing") {
            applyAdditionalSchema(key, valid, false);
            gen.if((0, codegen_1.not)(valid), () => {
              cxt.reset();
              deleteAdditional(key);
            });
          } else {
            applyAdditionalSchema(key, valid);
            if (!allErrors)
              gen.if((0, codegen_1.not)(valid), () => gen.break());
          }
        }
      }
      function applyAdditionalSchema(key, valid, errors) {
        const subschema = {
          keyword: "additionalProperties",
          dataProp: key,
          dataPropType: util_1.Type.Str
        };
        if (errors === false) {
          Object.assign(subschema, {
            compositeRule: true,
            createErrors: false,
            allErrors: false
          });
        }
        cxt.subschema(subschema, valid);
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/properties.js
var require_properties = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var validate_1 = require_validate();
  var code_1 = require_code2();
  var util_1 = require_util();
  var additionalProperties_1 = require_additionalProperties();
  var def = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(cxt) {
      const { gen, schema, parentSchema, data, it } = cxt;
      if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) {
        additionalProperties_1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1.default, "additionalProperties"));
      }
      const allProps = (0, code_1.allSchemaProperties)(schema);
      for (const prop of allProps) {
        it.definedProperties.add(prop);
      }
      if (it.opts.unevaluated && allProps.length && it.props !== true) {
        it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props);
      }
      const properties = allProps.filter((p) => !(0, util_1.alwaysValidSchema)(it, schema[p]));
      if (properties.length === 0)
        return;
      const valid = gen.name("valid");
      for (const prop of properties) {
        if (hasDefault(prop)) {
          applyPropertySchema(prop);
        } else {
          gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties));
          applyPropertySchema(prop);
          if (!it.allErrors)
            gen.else().var(valid, true);
          gen.endIf();
        }
        cxt.it.definedProperties.add(prop);
        cxt.ok(valid);
      }
      function hasDefault(prop) {
        return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== undefined;
      }
      function applyPropertySchema(prop) {
        cxt.subschema({
          keyword: "properties",
          schemaProp: prop,
          dataProp: prop
        }, valid);
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/patternProperties.js
var require_patternProperties = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var code_1 = require_code2();
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var util_2 = require_util();
  var def = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(cxt) {
      const { gen, schema, data, parentSchema, it } = cxt;
      const { opts } = it;
      const patterns = (0, code_1.allSchemaProperties)(schema);
      const alwaysValidPatterns = patterns.filter((p) => (0, util_1.alwaysValidSchema)(it, schema[p]));
      if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
        return;
      }
      const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
      const valid = gen.name("valid");
      if (it.props !== true && !(it.props instanceof codegen_1.Name)) {
        it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
      }
      const { props } = it;
      validatePatternProperties();
      function validatePatternProperties() {
        for (const pat of patterns) {
          if (checkProperties)
            checkMatchingProperties(pat);
          if (it.allErrors) {
            validateProperties(pat);
          } else {
            gen.var(valid, true);
            validateProperties(pat);
            gen.if(valid);
          }
        }
      }
      function checkMatchingProperties(pat) {
        for (const prop in checkProperties) {
          if (new RegExp(pat).test(prop)) {
            (0, util_1.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
          }
        }
      }
      function validateProperties(pat) {
        gen.forIn("key", data, (key) => {
          gen.if((0, codegen_1._)`${(0, code_1.usePattern)(cxt, pat)}.test(${key})`, () => {
            const alwaysValid = alwaysValidPatterns.includes(pat);
            if (!alwaysValid) {
              cxt.subschema({
                keyword: "patternProperties",
                schemaProp: pat,
                dataProp: key,
                dataPropType: util_2.Type.Str
              }, valid);
            }
            if (it.opts.unevaluated && props !== true) {
              gen.assign((0, codegen_1._)`${props}[${key}]`, true);
            } else if (!alwaysValid && !it.allErrors) {
              gen.if((0, codegen_1.not)(valid), () => gen.break());
            }
          });
        });
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/not.js
var require_not = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var util_1 = require_util();
  var def = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    code(cxt) {
      const { gen, schema, it } = cxt;
      if ((0, util_1.alwaysValidSchema)(it, schema)) {
        cxt.fail();
        return;
      }
      const valid = gen.name("valid");
      cxt.subschema({
        keyword: "not",
        compositeRule: true,
        createErrors: false,
        allErrors: false
      }, valid);
      cxt.failResult(valid, () => cxt.reset(), () => cxt.error());
    },
    error: { message: "must NOT be valid" }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/anyOf.js
var require_anyOf = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var code_1 = require_code2();
  var def = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: code_1.validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/oneOf.js
var require_oneOf = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var error = {
    message: "must match exactly one schema in oneOf",
    params: ({ params }) => (0, codegen_1._)`{passingSchemas: ${params.passing}}`
  };
  var def = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error,
    code(cxt) {
      const { gen, schema, parentSchema, it } = cxt;
      if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
      if (it.opts.discriminator && parentSchema.discriminator)
        return;
      const schArr = schema;
      const valid = gen.let("valid", false);
      const passing = gen.let("passing", null);
      const schValid = gen.name("_valid");
      cxt.setParams({ passing });
      gen.block(validateOneOf);
      cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
      function validateOneOf() {
        schArr.forEach((sch, i) => {
          let schCxt;
          if ((0, util_1.alwaysValidSchema)(it, sch)) {
            gen.var(schValid, true);
          } else {
            schCxt = cxt.subschema({
              keyword: "oneOf",
              schemaProp: i,
              compositeRule: true
            }, schValid);
          }
          if (i > 0) {
            gen.if((0, codegen_1._)`${schValid} && ${valid}`).assign(valid, false).assign(passing, (0, codegen_1._)`[${passing}, ${i}]`).else();
          }
          gen.if(schValid, () => {
            gen.assign(valid, true);
            gen.assign(passing, i);
            if (schCxt)
              cxt.mergeEvaluated(schCxt, codegen_1.Name);
          });
        });
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/allOf.js
var require_allOf = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var util_1 = require_util();
  var def = {
    keyword: "allOf",
    schemaType: "array",
    code(cxt) {
      const { gen, schema, it } = cxt;
      if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
      const valid = gen.name("valid");
      schema.forEach((sch, i) => {
        if ((0, util_1.alwaysValidSchema)(it, sch))
          return;
        const schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i }, valid);
        cxt.ok(valid);
        cxt.mergeEvaluated(schCxt);
      });
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/if.js
var require_if = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var util_1 = require_util();
  var error = {
    message: ({ params }) => (0, codegen_1.str)`must match "${params.ifClause}" schema`,
    params: ({ params }) => (0, codegen_1._)`{failingKeyword: ${params.ifClause}}`
  };
  var def = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    error,
    code(cxt) {
      const { gen, parentSchema, it } = cxt;
      if (parentSchema.then === undefined && parentSchema.else === undefined) {
        (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
      }
      const hasThen = hasSchema(it, "then");
      const hasElse = hasSchema(it, "else");
      if (!hasThen && !hasElse)
        return;
      const valid = gen.let("valid", true);
      const schValid = gen.name("_valid");
      validateIf();
      cxt.reset();
      if (hasThen && hasElse) {
        const ifClause = gen.let("ifClause");
        cxt.setParams({ ifClause });
        gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
      } else if (hasThen) {
        gen.if(schValid, validateClause("then"));
      } else {
        gen.if((0, codegen_1.not)(schValid), validateClause("else"));
      }
      cxt.pass(valid, () => cxt.error(true));
      function validateIf() {
        const schCxt = cxt.subschema({
          keyword: "if",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, schValid);
        cxt.mergeEvaluated(schCxt);
      }
      function validateClause(keyword, ifClause) {
        return () => {
          const schCxt = cxt.subschema({ keyword }, schValid);
          gen.assign(valid, schValid);
          cxt.mergeValidEvaluated(schCxt, valid);
          if (ifClause)
            gen.assign(ifClause, (0, codegen_1._)`${keyword}`);
          else
            cxt.setParams({ ifClause: keyword });
        };
      }
    }
  };
  function hasSchema(it, keyword) {
    const schema = it.schema[keyword];
    return schema !== undefined && !(0, util_1.alwaysValidSchema)(it, schema);
  }
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/thenElse.js
var require_thenElse = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var util_1 = require_util();
  var def = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword, parentSchema, it }) {
      if (parentSchema.if === undefined)
        (0, util_1.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/applicator/index.js
var require_applicator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var additionalItems_1 = require_additionalItems();
  var prefixItems_1 = require_prefixItems();
  var items_1 = require_items();
  var items2020_1 = require_items2020();
  var contains_1 = require_contains();
  var dependencies_1 = require_dependencies();
  var propertyNames_1 = require_propertyNames();
  var additionalProperties_1 = require_additionalProperties();
  var properties_1 = require_properties();
  var patternProperties_1 = require_patternProperties();
  var not_1 = require_not();
  var anyOf_1 = require_anyOf();
  var oneOf_1 = require_oneOf();
  var allOf_1 = require_allOf();
  var if_1 = require_if();
  var thenElse_1 = require_thenElse();
  function getApplicator(draft2020 = false) {
    const applicator = [
      not_1.default,
      anyOf_1.default,
      oneOf_1.default,
      allOf_1.default,
      if_1.default,
      thenElse_1.default,
      propertyNames_1.default,
      additionalProperties_1.default,
      dependencies_1.default,
      properties_1.default,
      patternProperties_1.default
    ];
    if (draft2020)
      applicator.push(prefixItems_1.default, items2020_1.default);
    else
      applicator.push(additionalItems_1.default, items_1.default);
    applicator.push(contains_1.default);
    return applicator;
  }
  exports.default = getApplicator;
});

// ../../node_modules/ajv/dist/vocabularies/format/format.js
var require_format = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var error = {
    message: ({ schemaCode }) => (0, codegen_1.str)`must match format "${schemaCode}"`,
    params: ({ schemaCode }) => (0, codegen_1._)`{format: ${schemaCode}}`
  };
  var def = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: true,
    error,
    code(cxt, ruleType) {
      const { gen, data, $data, schema, schemaCode, it } = cxt;
      const { opts, errSchemaPath, schemaEnv, self: self2 } = it;
      if (!opts.validateFormats)
        return;
      if ($data)
        validate$DataFormat();
      else
        validateFormat();
      function validate$DataFormat() {
        const fmts = gen.scopeValue("formats", {
          ref: self2.formats,
          code: opts.code.formats
        });
        const fDef = gen.const("fDef", (0, codegen_1._)`${fmts}[${schemaCode}]`);
        const fType = gen.let("fType");
        const format = gen.let("format");
        gen.if((0, codegen_1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1._)`${fDef}.type || "string"`).assign(format, (0, codegen_1._)`${fDef}.validate`), () => gen.assign(fType, (0, codegen_1._)`"string"`).assign(format, fDef));
        cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
        function unknownFmt() {
          if (opts.strictSchema === false)
            return codegen_1.nil;
          return (0, codegen_1._)`${schemaCode} && !${format}`;
        }
        function invalidFmt() {
          const callFormat = schemaEnv.$async ? (0, codegen_1._)`(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))` : (0, codegen_1._)`${format}(${data})`;
          const validData = (0, codegen_1._)`(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`;
          return (0, codegen_1._)`${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`;
        }
      }
      function validateFormat() {
        const formatDef = self2.formats[schema];
        if (!formatDef) {
          unknownFormat();
          return;
        }
        if (formatDef === true)
          return;
        const [fmtType, format, fmtRef] = getFormat(formatDef);
        if (fmtType === ruleType)
          cxt.pass(validCondition());
        function unknownFormat() {
          if (opts.strictSchema === false) {
            self2.logger.warn(unknownMsg());
            return;
          }
          throw new Error(unknownMsg());
          function unknownMsg() {
            return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
          }
        }
        function getFormat(fmtDef) {
          const code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(schema)}` : undefined;
          const fmt = gen.scopeValue("formats", { key: schema, ref: fmtDef, code });
          if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
            return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._)`${fmt}.validate`];
          }
          return ["string", fmtDef, fmt];
        }
        function validCondition() {
          if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
            if (!schemaEnv.$async)
              throw new Error("async format in sync schema");
            return (0, codegen_1._)`await ${fmtRef}(${data})`;
          }
          return typeof format == "function" ? (0, codegen_1._)`${fmtRef}(${data})` : (0, codegen_1._)`${fmtRef}.test(${data})`;
        }
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/vocabularies/format/index.js
var require_format2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var format_1 = require_format();
  var format = [format_1.default];
  exports.default = format;
});

// ../../node_modules/ajv/dist/vocabularies/metadata.js
var require_metadata = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.contentVocabulary = exports.metadataVocabulary = undefined;
  exports.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ];
  exports.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ];
});

// ../../node_modules/ajv/dist/vocabularies/draft7.js
var require_draft7 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var core_1 = require_core2();
  var validation_1 = require_validation();
  var applicator_1 = require_applicator();
  var format_1 = require_format2();
  var metadata_1 = require_metadata();
  var draft7Vocabularies = [
    core_1.default,
    validation_1.default,
    (0, applicator_1.default)(),
    format_1.default,
    metadata_1.metadataVocabulary,
    metadata_1.contentVocabulary
  ];
  exports.default = draft7Vocabularies;
});

// ../../node_modules/ajv/dist/vocabularies/discriminator/types.js
var require_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DiscrError = undefined;
  var DiscrError;
  (function(DiscrError2) {
    DiscrError2["Tag"] = "tag";
    DiscrError2["Mapping"] = "mapping";
  })(DiscrError || (exports.DiscrError = DiscrError = {}));
});

// ../../node_modules/ajv/dist/vocabularies/discriminator/index.js
var require_discriminator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var codegen_1 = require_codegen();
  var types_1 = require_types();
  var compile_1 = require_compile();
  var ref_error_1 = require_ref_error();
  var util_1 = require_util();
  var error = {
    message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
    params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
  };
  var def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error,
    code(cxt) {
      const { gen, data, schema, parentSchema, it } = cxt;
      const { oneOf } = parentSchema;
      if (!it.opts.discriminator) {
        throw new Error("discriminator: requires discriminator option");
      }
      const tagName = schema.propertyName;
      if (typeof tagName != "string")
        throw new Error("discriminator: requires propertyName");
      if (schema.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!oneOf)
        throw new Error("discriminator: requires oneOf keyword");
      const valid = gen.let("valid", false);
      const tag = gen.const("tag", (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(tagName)}`);
      gen.if((0, codegen_1._)`typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(false, { discrError: types_1.DiscrError.Tag, tag, tagName }));
      cxt.ok(valid);
      function validateMapping() {
        const mapping = getMapping();
        gen.if(false);
        for (const tagValue in mapping) {
          gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`);
          gen.assign(valid, applyTagSchema(mapping[tagValue]));
        }
        gen.else();
        cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag, tagName });
        gen.endIf();
      }
      function applyTagSchema(schemaProp) {
        const _valid = gen.name("valid");
        const schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
        cxt.mergeEvaluated(schCxt, codegen_1.Name);
        return _valid;
      }
      function getMapping() {
        var _a;
        const oneOfMapping = {};
        const topRequired = hasRequired(parentSchema);
        let tagRequired = true;
        for (let i = 0;i < oneOf.length; i++) {
          let sch = oneOf[i];
          if ((sch === null || sch === undefined ? undefined : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
            const ref = sch.$ref;
            sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, ref);
            if (sch instanceof compile_1.SchemaEnv)
              sch = sch.schema;
            if (sch === undefined)
              throw new ref_error_1.default(it.opts.uriResolver, it.baseId, ref);
          }
          const propSch = (_a = sch === null || sch === undefined ? undefined : sch.properties) === null || _a === undefined ? undefined : _a[tagName];
          if (typeof propSch != "object") {
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
          }
          tagRequired = tagRequired && (topRequired || hasRequired(sch));
          addMappings(propSch, i);
        }
        if (!tagRequired)
          throw new Error(`discriminator: "${tagName}" must be required`);
        return oneOfMapping;
        function hasRequired({ required }) {
          return Array.isArray(required) && required.includes(tagName);
        }
        function addMappings(sch, i) {
          if (sch.const) {
            addMapping(sch.const, i);
          } else if (sch.enum) {
            for (const tagValue of sch.enum) {
              addMapping(tagValue, i);
            }
          } else {
            throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
          }
        }
        function addMapping(tagValue, i) {
          if (typeof tagValue != "string" || tagValue in oneOfMapping) {
            throw new Error(`discriminator: "${tagName}" values must be unique strings`);
          }
          oneOfMapping[tagValue] = i;
        }
      }
    }
  };
  exports.default = def;
});

// ../../node_modules/ajv/dist/refs/json-schema-draft-07.json
var require_json_schema_draft_07 = __commonJS((exports, module) => {
  module.exports = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
      schemaArray: {
        type: "array",
        minItems: 1,
        items: { $ref: "#" }
      },
      nonNegativeInteger: {
        type: "integer",
        minimum: 0
      },
      nonNegativeIntegerDefault0: {
        allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }]
      },
      simpleTypes: {
        enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
      },
      stringArray: {
        type: "array",
        items: { type: "string" },
        uniqueItems: true,
        default: []
      }
    },
    type: ["object", "boolean"],
    properties: {
      $id: {
        type: "string",
        format: "uri-reference"
      },
      $schema: {
        type: "string",
        format: "uri"
      },
      $ref: {
        type: "string",
        format: "uri-reference"
      },
      $comment: {
        type: "string"
      },
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      default: true,
      readOnly: {
        type: "boolean",
        default: false
      },
      examples: {
        type: "array",
        items: true
      },
      multipleOf: {
        type: "number",
        exclusiveMinimum: 0
      },
      maximum: {
        type: "number"
      },
      exclusiveMaximum: {
        type: "number"
      },
      minimum: {
        type: "number"
      },
      exclusiveMinimum: {
        type: "number"
      },
      maxLength: { $ref: "#/definitions/nonNegativeInteger" },
      minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      pattern: {
        type: "string",
        format: "regex"
      },
      additionalItems: { $ref: "#" },
      items: {
        anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
        default: true
      },
      maxItems: { $ref: "#/definitions/nonNegativeInteger" },
      minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      uniqueItems: {
        type: "boolean",
        default: false
      },
      contains: { $ref: "#" },
      maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
      minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      required: { $ref: "#/definitions/stringArray" },
      additionalProperties: { $ref: "#" },
      definitions: {
        type: "object",
        additionalProperties: { $ref: "#" },
        default: {}
      },
      properties: {
        type: "object",
        additionalProperties: { $ref: "#" },
        default: {}
      },
      patternProperties: {
        type: "object",
        additionalProperties: { $ref: "#" },
        propertyNames: { format: "regex" },
        default: {}
      },
      dependencies: {
        type: "object",
        additionalProperties: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }]
        }
      },
      propertyNames: { $ref: "#" },
      const: true,
      enum: {
        type: "array",
        items: true,
        minItems: 1,
        uniqueItems: true
      },
      type: {
        anyOf: [
          { $ref: "#/definitions/simpleTypes" },
          {
            type: "array",
            items: { $ref: "#/definitions/simpleTypes" },
            minItems: 1,
            uniqueItems: true
          }
        ]
      },
      format: { type: "string" },
      contentMediaType: { type: "string" },
      contentEncoding: { type: "string" },
      if: { $ref: "#" },
      then: { $ref: "#" },
      else: { $ref: "#" },
      allOf: { $ref: "#/definitions/schemaArray" },
      anyOf: { $ref: "#/definitions/schemaArray" },
      oneOf: { $ref: "#/definitions/schemaArray" },
      not: { $ref: "#" }
    },
    default: true
  };
});

// ../../node_modules/ajv/dist/ajv.js
var require_ajv = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = undefined;
  var core_1 = require_core();
  var draft7_1 = require_draft7();
  var discriminator_1 = require_discriminator();
  var draft7MetaSchema = require_json_schema_draft_07();
  var META_SUPPORT_DATA = ["/properties"];
  var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";

  class Ajv extends core_1.default {
    _addVocabularies() {
      super._addVocabularies();
      draft7_1.default.forEach((v) => this.addVocabulary(v));
      if (this.opts.discriminator)
        this.addKeyword(discriminator_1.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      if (!this.opts.meta)
        return;
      const metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
      this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
      this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined);
    }
  }
  exports.Ajv = Ajv;
  module.exports = exports = Ajv;
  module.exports.Ajv = Ajv;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Ajv;
  var validate_1 = require_validate();
  Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
    return validate_1.KeywordCxt;
  } });
  var codegen_1 = require_codegen();
  Object.defineProperty(exports, "_", { enumerable: true, get: function() {
    return codegen_1._;
  } });
  Object.defineProperty(exports, "str", { enumerable: true, get: function() {
    return codegen_1.str;
  } });
  Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
    return codegen_1.stringify;
  } });
  Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
    return codegen_1.nil;
  } });
  Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
    return codegen_1.Name;
  } });
  Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
    return codegen_1.CodeGen;
  } });
  var validation_error_1 = require_validation_error();
  Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function() {
    return validation_error_1.default;
  } });
  var ref_error_1 = require_ref_error();
  Object.defineProperty(exports, "MissingRefError", { enumerable: true, get: function() {
    return ref_error_1.default;
  } });
});

// ../../node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.formatNames = exports.fastFormats = exports.fullFormats = undefined;
  function fmtDef(validate, compare) {
    return { validate, compare };
  }
  exports.fullFormats = {
    date: fmtDef(date2, compareDate),
    time: fmtDef(getTime(true), compareTime),
    "date-time": fmtDef(getDateTime(true), compareDateTime),
    "iso-time": fmtDef(getTime(), compareIsoTime),
    "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex,
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    byte,
    int32: { type: "number", validate: validateInt32 },
    int64: { type: "number", validate: validateInt64 },
    float: { type: "number", validate: validateNumber },
    double: { type: "number", validate: validateNumber },
    password: true,
    binary: true
  };
  exports.fastFormats = {
    ...exports.fullFormats,
    date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
    time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
    "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
    "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
    "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  };
  exports.formatNames = Object.keys(exports.fullFormats);
  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
  var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
  var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function date2(str) {
    const matches = DATE.exec(str);
    if (!matches)
      return false;
    const year = +matches[1];
    const month = +matches[2];
    const day = +matches[3];
    return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
  }
  function compareDate(d1, d2) {
    if (!(d1 && d2))
      return;
    if (d1 > d2)
      return 1;
    if (d1 < d2)
      return -1;
    return 0;
  }
  var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function getTime(strictTimeZone) {
    return function time(str) {
      const matches = TIME.exec(str);
      if (!matches)
        return false;
      const hr = +matches[1];
      const min = +matches[2];
      const sec = +matches[3];
      const tz = matches[4];
      const tzSign = matches[5] === "-" ? -1 : 1;
      const tzH = +(matches[6] || 0);
      const tzM = +(matches[7] || 0);
      if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
        return false;
      if (hr <= 23 && min <= 59 && sec < 60)
        return true;
      const utcMin = min - tzM * tzSign;
      const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
      return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
    };
  }
  function compareTime(s1, s2) {
    if (!(s1 && s2))
      return;
    const t1 = new Date("2020-01-01T" + s1).valueOf();
    const t2 = new Date("2020-01-01T" + s2).valueOf();
    if (!(t1 && t2))
      return;
    return t1 - t2;
  }
  function compareIsoTime(t1, t2) {
    if (!(t1 && t2))
      return;
    const a1 = TIME.exec(t1);
    const a2 = TIME.exec(t2);
    if (!(a1 && a2))
      return;
    t1 = a1[1] + a1[2] + a1[3];
    t2 = a2[1] + a2[2] + a2[3];
    if (t1 > t2)
      return 1;
    if (t1 < t2)
      return -1;
    return 0;
  }
  var DATE_TIME_SEPARATOR = /t|\s/i;
  function getDateTime(strictTimeZone) {
    const time = getTime(strictTimeZone);
    return function date_time(str) {
      const dateTime = str.split(DATE_TIME_SEPARATOR);
      return dateTime.length === 2 && date2(dateTime[0]) && time(dateTime[1]);
    };
  }
  function compareDateTime(dt1, dt2) {
    if (!(dt1 && dt2))
      return;
    const d1 = new Date(dt1).valueOf();
    const d2 = new Date(dt2).valueOf();
    if (!(d1 && d2))
      return;
    return d1 - d2;
  }
  function compareIsoDateTime(dt1, dt2) {
    if (!(dt1 && dt2))
      return;
    const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
    const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
    const res = compareDate(d1, d2);
    if (res === undefined)
      return;
    return res || compareTime(t1, t2);
  }
  var NOT_URI_FRAGMENT = /\/|:/;
  var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function uri(str) {
    return NOT_URI_FRAGMENT.test(str) && URI.test(str);
  }
  var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function byte(str) {
    BYTE.lastIndex = 0;
    return BYTE.test(str);
  }
  var MIN_INT32 = -(2 ** 31);
  var MAX_INT32 = 2 ** 31 - 1;
  function validateInt32(value) {
    return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
  }
  function validateInt64(value) {
    return Number.isInteger(value);
  }
  function validateNumber() {
    return true;
  }
  var Z_ANCHOR = /[^\\]\\Z/;
  function regex(str) {
    if (Z_ANCHOR.test(str))
      return false;
    try {
      new RegExp(str);
      return true;
    } catch (e) {
      return false;
    }
  }
});

// ../../node_modules/ajv-formats/dist/limit.js
var require_limit = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.formatLimitDefinition = undefined;
  var ajv_1 = require_ajv();
  var codegen_1 = require_codegen();
  var ops = codegen_1.operators;
  var KWDs = {
    formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
    formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
    formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
  };
  var error = {
    message: ({ keyword, schemaCode }) => (0, codegen_1.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
  };
  exports.formatLimitDefinition = {
    keyword: Object.keys(KWDs),
    type: "string",
    schemaType: "string",
    $data: true,
    error,
    code(cxt) {
      const { gen, data, schemaCode, keyword, it } = cxt;
      const { opts, self: self2 } = it;
      if (!opts.validateFormats)
        return;
      const fCxt = new ajv_1.KeywordCxt(it, self2.RULES.all.format.definition, "format");
      if (fCxt.$data)
        validate$DataFormat();
      else
        validateFormat();
      function validate$DataFormat() {
        const fmts = gen.scopeValue("formats", {
          ref: self2.formats,
          code: opts.code.formats
        });
        const fmt = gen.const("fmt", (0, codegen_1._)`${fmts}[${fCxt.schemaCode}]`);
        cxt.fail$data((0, codegen_1.or)((0, codegen_1._)`typeof ${fmt} != "object"`, (0, codegen_1._)`${fmt} instanceof RegExp`, (0, codegen_1._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
      }
      function validateFormat() {
        const format = fCxt.schema;
        const fmtDef = self2.formats[format];
        if (!fmtDef || fmtDef === true)
          return;
        if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
          throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
        }
        const fmt = gen.scopeValue("formats", {
          key: format,
          ref: fmtDef,
          code: opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(format)}` : undefined
        });
        cxt.fail$data(compareCode(fmt));
      }
      function compareCode(fmt) {
        return (0, codegen_1._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  var formatLimitPlugin = (ajv) => {
    ajv.addKeyword(exports.formatLimitDefinition);
    return ajv;
  };
  exports.default = formatLimitPlugin;
});

// ../../node_modules/ajv-formats/dist/index.js
var require_dist = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var formats_1 = require_formats();
  var limit_1 = require_limit();
  var codegen_1 = require_codegen();
  var fullName = new codegen_1.Name("fullFormats");
  var fastName = new codegen_1.Name("fastFormats");
  var formatsPlugin = (ajv, opts = { keywords: true }) => {
    if (Array.isArray(opts)) {
      addFormats(ajv, opts, formats_1.fullFormats, fullName);
      return ajv;
    }
    const [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName];
    const list = opts.formats || formats_1.formatNames;
    addFormats(ajv, list, formats, exportName);
    if (opts.keywords)
      (0, limit_1.default)(ajv);
    return ajv;
  };
  formatsPlugin.get = (name, mode = "full") => {
    const formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
    const f = formats[name];
    if (!f)
      throw new Error(`Unknown format "${name}"`);
    return f;
  };
  function addFormats(ajv, list, fs, exportName) {
    var _a;
    var _b;
    (_a = (_b = ajv.opts.code).formats) !== null && _a !== undefined || (_b.formats = (0, codegen_1._)`require("ajv-formats/dist/formats").${exportName}`);
    for (const f of list)
      ajv.addFormat(f, fs[f]);
  }
  module.exports = exports = formatsPlugin;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = formatsPlugin;
});

// src/index.ts
import { createORPCClient, ORPCError as ORPCError2 } from "@orpc/client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";

// ../public-api-contracts/src/agent-stream.ts
import { z } from "zod";
var RunStartedStreamEventSchema = z.object({
  type: z.literal("run_started"),
  runId: z.string().describe("Server-assigned run ID for the started run.")
});
var MessageStartedStreamEventSchema = z.object({
  type: z.literal("message_started"),
  messageId: z.string().describe("Server-assigned assistant message ID for this run.")
});
var TextChunkStreamEventSchema = z.object({
  type: z.literal("text_chunk"),
  messageId: z.string().describe("Assistant message the chunk belongs to."),
  content: z.string().describe("Incremental text delta to append.")
});
var ReasoningChunkStreamEventSchema = z.object({
  type: z.literal("reasoning_chunk"),
  messageId: z.string().describe("Assistant message the chunk belongs to."),
  content: z.string().describe("Incremental reasoning delta to append.")
});
var TextCompleteStreamEventSchema = z.object({
  type: z.literal("text_complete"),
  messageId: z.string().describe("Assistant message that completed."),
  content: z.string().describe("Full assistant text for the message.")
});
var ReasoningCompleteStreamEventSchema = z.object({
  type: z.literal("reasoning_complete"),
  messageId: z.string().describe("Assistant message that completed."),
  content: z.string().describe("Full reasoning text for the message.")
});
var ToolCallPendingStreamEventSchema = z.object({
  type: z.literal("tool_call_pending"),
  toolCallId: z.string().describe("Stable identifier for the tool call."),
  name: z.string().describe("Name of the tool being called.")
});
var ToolCallStartStreamEventSchema = z.object({
  type: z.literal("tool_call_start"),
  toolCallId: z.string().describe("Stable identifier for the tool call."),
  name: z.string().describe("Name of the tool being called."),
  params: z.unknown().describe("Resolved tool input params.")
});
var ToolCallCompleteStreamEventSchema = z.object({
  type: z.literal("tool_call_complete"),
  toolCallId: z.string().describe("Stable identifier for the tool call."),
  status: z.enum(["in_progress", "success", "error"]).describe("Terminal (or transitional) status of the tool call."),
  result: z.unknown().optional().describe("Tool output, when available."),
  durationMs: z.number().nonnegative().optional().describe("Authoritative server-measured tool execution time in ms.")
});
var ArtifactStreamEventSchema = z.object({
  type: z.literal("artifact"),
  name: z.string().describe("Artifact kind (for example table, timeseries)."),
  data: z.unknown().describe("Artifact payload; shape depends on name."),
  toolCallId: z.string().describe("Tool call that produced the artifact.")
});
var ErrorStreamEventSchema = z.object({
  type: z.literal("error"),
  message: z.string().describe("Human-readable error message."),
  name: z.string().optional().describe("Optional error class/name.")
});
var StreamResetStreamEventSchema = z.object({
  type: z.literal("stream_reset"),
  messageId: z.string().describe("Assistant message whose content to reset.")
});
var DisconnectedStreamEventSchema = z.object({
  type: z.literal("disconnected")
});
var PublicAgentStreamEventSchema = z.discriminatedUnion("type", [
  RunStartedStreamEventSchema,
  MessageStartedStreamEventSchema,
  TextChunkStreamEventSchema,
  ReasoningChunkStreamEventSchema,
  TextCompleteStreamEventSchema,
  ReasoningCompleteStreamEventSchema,
  ToolCallPendingStreamEventSchema,
  ToolCallStartStreamEventSchema,
  ToolCallCompleteStreamEventSchema,
  ArtifactStreamEventSchema,
  ErrorStreamEventSchema,
  StreamResetStreamEventSchema,
  DisconnectedStreamEventSchema
]);
var PublicAgentStreamEventTypeSchema = z.enum([
  "run_started",
  "message_started",
  "text_chunk",
  "reasoning_chunk",
  "text_complete",
  "reasoning_complete",
  "tool_call_pending",
  "tool_call_start",
  "tool_call_complete",
  "artifact",
  "error",
  "stream_reset",
  "disconnected"
]);
var AgentStreamControlFrameSchema = z.object({
  streamNextOffset: z.string().describe("Opaque resume cursor for the next unread event; pass back as the stream 'cursor' query param.")
});
var AgentStreamCursorSchema = z.string().describe("Opaque resume cursor from a prior control frame's streamNextOffset.");
var AgentStreamQuerySchema = z.object({
  cursor: AgentStreamCursorSchema.optional().describe("Resume the stream after this offset. Omit to start from the beginning of the retained buffer.")
});
var AGENT_STREAM_CURSOR_QUERY_PARAM = "cursor";
var AGENT_STREAM_METHOD = "GET";
var AGENT_STREAM_CONTROL_EVENT = "control";
var AGENT_STREAM_DONE_SENTINEL = "[DONE]";
// ../public-api-contracts/src/automations.ts
import { z as z2 } from "zod";
// ../orpc-contracts/src/define-operation.ts
import { oc } from "@orpc/contract";
var defineOperation = (definition) => {
  const metadata = {
    operationId: definition.operationId,
    backend: definition.backend,
    pagination: definition.pagination,
    async: definition.async,
    examples: definition.examples ?? []
  };
  return {
    ...definition,
    contract: oc.$meta(metadata).route({
      method: definition.route.method,
      path: definition.route.path,
      tags: definition.route.tags,
      operationId: definition.operationId,
      summary: definition.summary,
      description: definition.description,
      successStatus: definition.route.successStatus,
      successDescription: definition.route.successDescription,
      deprecated: definition.route.deprecated,
      inputStructure: definition.route.inputStructure
    }).input(definition.input).output(definition.output)
  };
};
// ../public-api-contracts/src/automations.ts
var AutomationIdSchema = z2.string().uuid().describe("Automation ID.");
var AutomationRunStatusSchema = z2.enum([
  "running",
  "succeeded",
  "failed",
  "timed_out",
  "cancelled"
]);
var AutomationRunSummarySchema = z2.object({
  id: z2.string().uuid(),
  automationRunKey: z2.string(),
  status: AutomationRunStatusSchema,
  startedAt: z2.string().datetime(),
  completedAt: z2.string().datetime().nullable(),
  durationMs: z2.number().int().nullable(),
  exitCode: z2.number().int().nullable()
});
var AutomationRunSchema = AutomationRunSummarySchema.extend({
  scheduledAt: z2.string().datetime().nullable().describe("When the run was scheduled to start, if known."),
  dueAt: z2.string().datetime().nullable().describe("When the run became due, if known."),
  errorMessage: z2.string().nullable().describe("Failure detail for the run, if it failed or timed out.")
});
var AutomationRunDetailSchema = AutomationRunSchema.extend({
  automationId: z2.string().uuid().describe("Automation that owns this run.")
});
var AutomationSchema = z2.object({
  id: z2.string().uuid(),
  projectId: z2.string().uuid(),
  name: z2.string(),
  kind: z2.enum(["script"]).describe("Automation kind: a scheduled script."),
  scriptId: z2.string().uuid().nullable().describe("ID of the project_scripts row this automation runs, for DB-backed script automations. Null for legacy script_path automations and for signal automations."),
  scriptName: z2.string().nullable().describe("Name of the project_scripts row this automation runs (see scriptId). Null when scriptId is null."),
  source: z2.enum(["sazabi_managed", "custom"]).describe("Whether the automation is Sazabi-managed or customer-defined."),
  enabled: z2.boolean(),
  cronExpression: z2.string().nullable().describe("Cron schedule for scheduled automations. Null for signal automations."),
  timezone: z2.string(),
  timeoutSeconds: z2.number().int().nullable(),
  health: z2.enum(["healthy", "failing", "never_run"]).describe("Health derived from the most recent run."),
  lastRun: AutomationRunSummarySchema.nullable(),
  successRate: z2.number().nullable().describe("Fraction of terminal runs that succeeded over the last 7 days."),
  runCount: z2.number().int().describe("Total runs over the last 7 days."),
  failedRunCount: z2.number().int().describe("Failed or timed-out runs over the last 7 days.")
});
var AutomationDetailSchema = AutomationSchema.extend({
  createdAt: z2.string().datetime(),
  updatedAt: z2.string().datetime(),
  recordedHistoryStartsAt: z2.string().datetime().describe("Earliest timestamp for which run history is recorded."),
  scriptIdentifier: z2.string().nullable().describe("Relative project script path executed by the automation. Null for signal automations."),
  canToggle: z2.boolean().describe("Whether the caller may enable or disable this automation.")
});
var ListAutomationsInputSchema = z2.object({
  projectId: z2.string().uuid().optional().describe("Project to list automations for. Auto-filled from CLI and SDK context when omitted."),
  search: z2.string().optional().describe("Case-insensitive partial match on automation name."),
  status: z2.enum(["active", "paused"]).optional().describe("Filter by enabled (active) or disabled (paused) automations."),
  health: z2.enum(["healthy", "failing", "never_run"]).optional().describe("Filter by automation health."),
  source: z2.enum(["sazabi_managed", "custom"]).optional().describe("Filter by automation source."),
  sort: z2.enum(["name", "last_run", "failures", "runs"]).default("name").describe("Sort order for the returned automations."),
  limit: z2.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of automations to return per page."),
  cursor: z2.string().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")
});
var ListAutomationsOutputSchema = z2.object({
  automations: z2.array(AutomationSchema),
  nextCursor: z2.string().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var GetAutomationInputSchema = z2.object({
  automationId: AutomationIdSchema,
  projectId: z2.string().uuid().optional().describe("Project that owns the automation. Auto-filled from CLI and SDK context when omitted.")
});
var GetAutomationOutputSchema = z2.object({
  automation: AutomationDetailSchema
});
var CreateAutomationInputSchema = z2.object({
  projectId: z2.string().uuid().optional().describe("Project to create the automation in. Auto-filled from CLI and SDK context when omitted."),
  name: z2.string().min(1).max(200).describe("Automation name."),
  description: z2.string().max(500).nullable().optional().describe("Optional human-readable description."),
  scriptId: z2.string().uuid().optional().describe("Project script to run, by ID. Provide exactly one of scriptId or script."),
  script: z2.string().optional().describe("Project script to run, by name (resolved to scriptId server-side). Provide exactly one of scriptId or script."),
  cronExpression: z2.string().optional().describe("Cron schedule for the automation. Defaults to every minute when omitted."),
  timezone: z2.string().optional().describe("IANA timezone for cronExpression. Defaults to UTC."),
  timeoutSeconds: z2.coerce.number().int().min(1).max(3600).optional().describe("Execution timeout in seconds. Defaults to 60."),
  enabled: z2.boolean().optional().describe("Whether the automation starts enabled. Defaults to true.")
}).refine((value) => Boolean(value.scriptId) !== Boolean(value.script), {
  message: "Provide exactly one of scriptId or script.",
  path: ["scriptId"]
});
var CreateAutomationOutputSchema = z2.object({
  automation: AutomationDetailSchema
});
var UpdateAutomationInputSchema = z2.object({
  automationId: AutomationIdSchema,
  projectId: z2.string().uuid().optional().describe("Project that owns the automation. Auto-filled from CLI and SDK context when omitted."),
  name: z2.string().min(1).max(200).optional().describe("New automation name."),
  description: z2.string().max(500).nullable().optional().describe("New description, or null to clear it. Omit to leave unchanged."),
  cronExpression: z2.string().optional().describe("New cron schedule."),
  timezone: z2.string().optional().describe("New IANA timezone."),
  timeoutSeconds: z2.coerce.number().int().min(1).max(3600).optional().describe("New execution timeout in seconds.")
});
var UpdateAutomationOutputSchema = z2.object({
  automation: AutomationDetailSchema
});
var EnableAutomationInputSchema = z2.object({
  automationId: AutomationIdSchema,
  projectId: z2.string().uuid().optional().describe("Project that owns the automation. Auto-filled from CLI and SDK context when omitted.")
});
var EnableAutomationOutputSchema = z2.object({
  automation: AutomationDetailSchema
});
var DisableAutomationInputSchema = z2.object({
  automationId: AutomationIdSchema,
  projectId: z2.string().uuid().optional().describe("Project that owns the automation. Auto-filled from CLI and SDK context when omitted.")
});
var DisableAutomationOutputSchema = z2.object({
  automation: AutomationDetailSchema
});
var listAutomations = defineOperation({
  operationId: "automations.list",
  description: "List scheduled automations in a project, with run health and recent run stats.",
  backend: "api",
  route: {
    method: "GET",
    path: "/automations",
    tags: ["Automations"]
  },
  input: ListAutomationsInputSchema,
  output: ListAutomationsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var getAutomation = defineOperation({
  operationId: "automations.get",
  description: "Get a single automation by ID.",
  backend: "api",
  route: {
    method: "GET",
    path: "/automations/{automationId}",
    tags: ["Automations"]
  },
  input: GetAutomationInputSchema,
  output: GetAutomationOutputSchema,
  pagination: "none",
  async: "sync"
});
var createAutomation = defineOperation({
  operationId: "automations.create",
  description: "Create a scheduled automation that runs a durable project script (see scripts.create) on a cron schedule.",
  backend: "api",
  route: {
    method: "POST",
    path: "/automations",
    successStatus: 201,
    tags: ["Automations"]
  },
  input: CreateAutomationInputSchema,
  output: CreateAutomationOutputSchema,
  pagination: "none",
  async: "sync"
});
var updateAutomation = defineOperation({
  operationId: "automations.update",
  description: "Update an automation's name, description, or schedule. Does not change which script it runs.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/automations/{automationId}",
    tags: ["Automations"]
  },
  input: UpdateAutomationInputSchema,
  output: UpdateAutomationOutputSchema,
  pagination: "none",
  async: "sync"
});
var enableAutomation = defineOperation({
  operationId: "automations.enable",
  description: "Enable an automation so it runs on its schedule.",
  backend: "api",
  route: {
    method: "POST",
    path: "/automations/{automationId}/enable",
    tags: ["Automations"]
  },
  input: EnableAutomationInputSchema,
  output: EnableAutomationOutputSchema,
  pagination: "none",
  async: "sync"
});
var disableAutomation = defineOperation({
  operationId: "automations.disable",
  description: "Disable an automation so it stops running on its schedule.",
  backend: "api",
  route: {
    method: "POST",
    path: "/automations/{automationId}/disable",
    tags: ["Automations"]
  },
  input: DisableAutomationInputSchema,
  output: DisableAutomationOutputSchema,
  pagination: "none",
  async: "sync"
});
var ListAutomationRunsInputSchema = z2.object({
  automationId: AutomationIdSchema,
  projectId: z2.string().uuid().optional().describe("Project that owns the automation. Auto-filled from CLI and SDK context when omitted."),
  status: z2.union([AutomationRunStatusSchema, z2.array(AutomationRunStatusSchema)]).optional().describe("Filter runs by status. Accepts a single status or an array of statuses (matched as OR)."),
  cursor: z2.string().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),
  limit: z2.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page.")
});
var ListAutomationRunsOutputSchema = z2.object({
  runs: z2.array(AutomationRunSchema),
  nextCursor: z2.string().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results."),
  recordedHistoryStartsAt: z2.string().datetime().describe("Earliest timestamp for which run history is recorded.")
});
var GetAutomationRunInputSchema = z2.object({
  automationId: AutomationIdSchema,
  runId: z2.string().uuid().describe("Automation run ID."),
  projectId: z2.string().uuid().optional().describe("Project that owns the automation. Auto-filled from CLI and SDK context when omitted.")
});
var GetAutomationRunOutputSchema = z2.object({
  run: AutomationRunDetailSchema
});
var listAutomationRuns = defineOperation({
  operationId: "automations.runs.list",
  description: "List runs for an automation, most recent first.",
  backend: "api",
  route: {
    method: "GET",
    path: "/automations/{automationId}/runs",
    tags: ["Automations"]
  },
  input: ListAutomationRunsInputSchema,
  output: ListAutomationRunsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var getAutomationRun = defineOperation({
  operationId: "automations.runs.get",
  description: "Get a single automation run by ID.",
  backend: "api",
  route: {
    method: "GET",
    path: "/automations/{automationId}/runs/{runId}",
    tags: ["Automations"]
  },
  input: GetAutomationRunInputSchema,
  output: GetAutomationRunOutputSchema,
  pagination: "none",
  async: "sync"
});
var AutomationRunCommandStatusSchema = z2.enum([
  "queued",
  "running",
  "succeeded",
  "failed",
  "timed_out"
]);
var AutomationRunLogsSchema = z2.object({
  stdout: z2.string().describe("Captured standard output for the run."),
  stderr: z2.string().describe("Captured standard error for the run."),
  exitCode: z2.number().int().nullable().describe("Process exit code of the run's command, if it finished."),
  status: AutomationRunCommandStatusSchema.describe("Execution status of the run's captured command."),
  truncated: z2.boolean().describe("Whether the captured output exceeded the inline preview limit. The full output is returned when it could be read from durable storage; otherwise the truncated preview is returned with this flag set."),
  startedAt: z2.string().datetime().nullable().describe("When the command started executing, if known."),
  completedAt: z2.string().datetime().nullable().describe("When the command finished executing, if known."),
  durationMs: z2.number().int().nullable().describe("Command execution duration in milliseconds, if known.")
});
var GetAutomationRunLogsInputSchema = z2.object({
  automationId: AutomationIdSchema,
  runId: z2.string().uuid().describe("Automation run ID."),
  projectId: z2.string().uuid().optional().describe("Project that owns the automation. Auto-filled from CLI and SDK context when omitted.")
});
var GetAutomationRunLogsOutputSchema = z2.object({
  logs: AutomationRunLogsSchema
});
var getAutomationRunLogs = defineOperation({
  operationId: "automations.runs.logs",
  description: "Get the captured stdout/stderr for a single automation run, reading the full output from durable storage when the inline preview was truncated.",
  backend: "api",
  route: {
    method: "GET",
    path: "/automations/{automationId}/runs/{runId}/logs",
    tags: ["Automations"]
  },
  input: GetAutomationRunLogsInputSchema,
  output: GetAutomationRunLogsOutputSchema,
  pagination: "none",
  async: "sync"
});
var automationsContract = {
  list: listAutomations.contract,
  get: getAutomation.contract,
  create: createAutomation.contract,
  update: updateAutomation.contract,
  enable: enableAutomation.contract,
  disable: disableAutomation.contract,
  runs: {
    list: listAutomationRuns.contract,
    get: getAutomationRun.contract,
    logs: getAutomationRunLogs.contract
  }
};

// ../public-api-contracts/src/billing.ts
import { z as z3 } from "zod";
var BillingUsageDimensionSchema = z3.enum([
  "logs_ingested_bytes",
  "input_tokens",
  "output_tokens",
  "issues_created",
  "automation_runs_completed",
  "pull_requests_created",
  "pull_request_reviews_completed"
]);
var BillingTransactionTypeSchema = z3.enum([
  "cycle_top_up",
  "upgrade_top_up",
  "deficit_settlement",
  "auto_top_up",
  "one_off_top_up",
  "usage_debit",
  "adjustment",
  "migration_opening_balance",
  "void"
]);
var BillingCycleSchema = z3.object({
  startsAt: z3.string().datetime(),
  endsAt: z3.string().datetime(),
  billableStartsAt: z3.string().datetime()
});
var BillingPeriodEstimateSchema = z3.object({
  subscriptionChargeAmount: z3.string(),
  creditDeficitAmount: z3.string(),
  creditDeficitChargeAmount: z3.string(),
  totalAmount: z3.string(),
  currency: z3.string()
});
var BillingPendingDowngradeSchema = z3.object({
  billingSubscriptionChangeId: z3.string(),
  effectiveAt: z3.string().datetime(),
  planSlug: z3.string().nullable(),
  planName: z3.string().nullable(),
  price: z3.string().nullable(),
  currency: z3.string().nullable(),
  targetCreditBalance: z3.string().nullable()
});
var BillingSubscriptionSchema = z3.object({
  id: z3.string(),
  status: z3.string(),
  billingPlanId: z3.string(),
  priceBookId: z3.string(),
  cycleType: z3.string()
});
var GetBillingSummaryInputSchema = z3.object({
  organizationId: z3.string().min(1).optional().describe("Organization to query billing for. Auto-filled from CLI and SDK context when omitted.")
});
var GetBillingSummaryOutputSchema = z3.object({
  billingModel: z3.enum(["credit-balance-v1"]),
  billable: z3.boolean(),
  nonBillableReason: z3.string().nullable(),
  status: z3.string(),
  planName: z3.string().nullable(),
  planSlug: z3.string().nullable(),
  currency: z3.string().nullable(),
  currentBalance: z3.string().nullable(),
  targetCreditBalance: z3.string().nullable(),
  currentCycle: BillingCycleSchema.nullable(),
  currentPeriodEstimate: BillingPeriodEstimateSchema.nullable(),
  pendingDowngrade: BillingPendingDowngradeSchema.nullable(),
  subscription: BillingSubscriptionSchema.nullable()
});
var GetBillingUsageInputSchema = z3.object({
  organizationId: z3.string().min(1).optional().describe("Organization to query usage for. Auto-filled from CLI and SDK context when omitted."),
  cycle: z3.enum(["current", "previous"]).default("current").describe("Which billing cycle to report usage for.")
});
var BillingUsageRowSchema = z3.object({
  dimension: BillingUsageDimensionSchema,
  totalQuantity: z3.string(),
  ratedQuantity: z3.string(),
  creditsConsumed: z3.string(),
  sourceBreakdown: z3.record(z3.string(), z3.string())
});
var GetBillingUsageOutputSchema = z3.object({
  cycle: BillingCycleSchema.nullable(),
  usage: z3.array(BillingUsageRowSchema)
});
var ListBillingTransactionsInputSchema = z3.object({
  organizationId: z3.string().min(1).optional().describe("Organization to query transactions for. Auto-filled from CLI and SDK context when omitted."),
  limit: z3.coerce.number().int().min(1).max(100).default(10).describe("Maximum number of transactions to return per page."),
  page: z3.coerce.number().int().min(1).default(1).describe("Page number for pagination (1-indexed).")
});
var BillingTransactionSchema = z3.object({
  id: z3.string(),
  transactionType: BillingTransactionTypeSchema,
  creditDelta: z3.string(),
  balanceAfter: z3.string(),
  occurredAt: z3.string().datetime(),
  billingInvoiceId: z3.string().nullable()
});
var ListBillingTransactionsOutputSchema = z3.object({
  items: z3.array(BillingTransactionSchema),
  pagination: z3.object({
    page: z3.number(),
    limit: z3.number(),
    total: z3.number(),
    totalPages: z3.number(),
    hasNext: z3.boolean(),
    hasPrev: z3.boolean()
  }).describe("Pagination metadata for the transaction list.")
});
var getBillingSummary = defineOperation({
  operationId: "billing.getSummary",
  description: "Get a billing summary for the current organization, including plan, balance, and cycle information.",
  backend: "api",
  route: {
    method: "GET",
    path: "/billing/summary",
    tags: ["Billing"]
  },
  input: GetBillingSummaryInputSchema,
  output: GetBillingSummaryOutputSchema,
  pagination: "none",
  async: "sync"
});
var getBillingUsage = defineOperation({
  operationId: "billing.getUsage",
  description: "Get per-dimension usage breakdown for the current or previous billing cycle.",
  backend: "api",
  route: {
    method: "GET",
    path: "/billing/usage",
    tags: ["Billing"]
  },
  input: GetBillingUsageInputSchema,
  output: GetBillingUsageOutputSchema,
  pagination: "none",
  async: "sync"
});
var listBillingTransactions = defineOperation({
  operationId: "billing.listTransactions",
  description: "List recent credit ledger transactions with pagination.",
  backend: "api",
  route: {
    method: "GET",
    path: "/billing/transactions",
    tags: ["Billing"]
  },
  input: ListBillingTransactionsInputSchema,
  output: ListBillingTransactionsOutputSchema,
  pagination: "page",
  async: "sync"
});
var billingContract = {
  getSummary: getBillingSummary.contract,
  getUsage: getBillingUsage.contract,
  listTransactions: listBillingTransactions.contract
};
// ../data-sources/src/sources/shared/types.ts
var DATA_SOURCE_SETUP_SKILL_SPEC_VALUE = "available";

// ../data-sources/src/sources/shared/helpers.ts
var CONNECT_BUTTON = {
  label: "Connect",
  pendingLabel: "Connecting..."
};
var otelSetupActions = (noun, protocol = "http/protobuf") => [
  {
    instruction: `Add the OpenTelemetry SDK to your ${noun}.`,
    notes: [
      {
        text: "Most languages have official OpenTelemetry SDKs available (e.g., `@opentelemetry/api` for Node.js, `opentelemetry-api` for Python, etc.)."
      }
    ]
  },
  {
    instruction: `Initialize OpenTelemetry in your ${noun}.`
  },
  {
    instruction: `Set the following environment variables in your ${noun} environment — \`OTEL_EXPORTER_OTLP_ENDPOINT\` is your intake URL (above).`,
    payloads: [
      {
        kind: "copyable",
        label: "`OTEL_EXPORTER_OTLP_PROTOCOL`",
        value: protocol,
        copyLabel: "OTLP protocol"
      }
    ],
    notes: [otelSdkAutoDetectNote]
  }
];
var otelSdkAutoDetectNote = {
  text: "Most OpenTelemetry SDKs automatically detect these environment variables. If your SDK is already configured in code, use the same endpoint and protocol values there instead."
};

// ../data-sources/src/sources/cloudflare/setup.ts
var cloudflareManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "prepare",
      title: "Create token",
      notes: [
        {
          variant: "requirement",
          text: "**Cloudflare Logpush is only available on the Enterprise plan.** Free, Pro, and Business accounts cannot create Logpush jobs."
        }
      ],
      actions: [
        {
          kind: "instruction",
          instruction: "Create a Cloudflare API token with **Account Settings: Read**, **Zone: Read**, and **Zone Logs: Edit** permissions.",
          payloads: [
            {
              kind: "external-link",
              label: "Open Cloudflare API token template",
              href: "https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22account_settings%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22account%22%7D%2C%7B%22key%22%3A%22logs%22%2C%22type%22%3A%22edit%22%2C%22scope%22%3A%22zone%22%7D%2C%7B%22key%22%3A%22zone%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22zone%22%7D%5D&name=Sazabi+Cloudflare+Logpush"
            }
          ]
        },
        {
          kind: "instruction",
          instruction: "Pick the account you want to connect, click **Continue to summary**, then **Create Token**, and copy the token for the next step."
        }
      ]
    },
    {
      id: "credentials",
      title: "Enter credentials",
      actions: [
        {
          id: "token",
          kind: "secret",
          label: "Cloudflare API token",
          instruction: "Enter your Cloudflare API token below.",
          description: "Token with Account Settings Read, Zone Read, and Logs Edit permissions.",
          placeholder: "Enter your Cloudflare API token"
        },
        {
          id: "accountId",
          kind: "text",
          label: "Cloudflare account ID",
          instruction: "Enter your Cloudflare account ID below.",
          description: "The 32-character hex ID from your Cloudflare dashboard URL or account overview.",
          placeholder: "e.g. a1b2c3d4e5f6...",
          pattern: "^[a-f0-9]{32}$",
          patternMessage: "Enter the 32-character Cloudflare account ID."
        }
      ]
    }
  ],
  submit: {
    actions: [
      {
        kind: "validate",
        action: "validate",
        input: { token: "$token", accountId: "$accountId" },
        resultAs: "validate"
      }
    ],
    metadata: {
      cloudflareApiToken: "$token",
      accountId: "$accountId",
      accountName: "$validate.accountName"
    },
    button: CONNECT_BUTTON
  },
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/cloudflare"
};
var cloudflareStreams = {
  content: {
    kind: "list",
    listAction: "listLogpushDatasets",
    listInput: { connectionId: "${context.connectionId}" },
    columns: [
      { field: "datasetName", header: "Dataset", cell: "badge" },
      { field: "scopeDetail", header: "Scope" }
    ],
    searchPlaceholder: "Search datasets and zones...",
    searchFields: ["datasetName", "scopeDetail"],
    dedupeByConfigField: ["scope", "zoneId", "dataset"],
    dedupeMissingFieldAsEmpty: true,
    emptyState: {
      noMatches: "No Logpush datasets match your search.",
      allConfigured: "All Logpush datasets already have streams configured."
    },
    toStreamItem: {
      displayName: "$item.displayName",
      config: {
        scope: "$item.scope",
        accountId: "$item.accountId",
        zoneId: "$item.zoneId",
        zoneName: "$item.zoneName",
        dataset: "$item.dataset",
        datasetName: "$item.datasetName"
      }
    }
  }
};
var cloudflareConnectionless = {
  groups: [
    {
      id: "open-logpush",
      section: "config",
      title: "Open Logpush",
      notes: [
        {
          variant: "requirement",
          text: "**Cloudflare Logpush is only available on the Enterprise plan.** Free, Pro, and Business accounts cannot create Logpush jobs."
        }
      ],
      actions: [
        {
          instruction: "Create a Logpush job in your [Cloudflare dashboard](https://dash.cloudflare.com) under **Analytics & Logs > Logpush**, or via the Cloudflare API."
        },
        {
          instruction: "Select **HTTP** as the destination type."
        }
      ]
    },
    {
      id: "destination",
      section: "config",
      title: "Set the destination",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the Logpush HTTP destination field."
        }
      ]
    },
    {
      id: "output-options",
      section: "config",
      title: "Set output options",
      actions: [
        {
          instruction: "In the Logpush job's **Output options**, set **Timestamp format** to **RFC3339** so Sazabi can parse event times accurately."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/cloudflare"
};

// ../data-sources/src/sources/cloudflare/spec.ts
var cloudflareSensitiveFields = ["cloudflareApiToken"];
var cloudflareIntakeDeclaration = {
  id: "cloudflare-logpush",
  label: "Cloudflare Logpush",
  subdomain: "cloudflare-logpush",
  transform: "cloudflare-logpush"
};
var cloudflareSpec = {
  id: "cloudflare",
  name: "Cloudflare Logpush",
  searchAliases: ["cloudflare", "cf", "logpush"],
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  sensitiveFields: cloudflareSensitiveFields,
  intake: [cloudflareIntakeDeclaration],
  subtitle: "Stream your Cloudflare Logpush jobs to Sazabi for edge network observability.",
  features: ["Zone Logpush", "Account Logpush", "Edge analytics"],
  evidenceHints: [
    "Cloudflare zones, account Logpush config, or Terraform cloudflare provider",
    "CLOUDFLARE_* environment variables or scripts that call the Cloudflare API",
    "README/docs naming Cloudflare for edge, DNS, CDN, firewall, or Workers traffic"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "cloudflare",
    intakeSourceId: "cloudflare-logpush",
    streamSelectorLayout: "sidepanel",
    actions: {
      submit: {
        validate: { procedure: "cloudflare.validateToken" }
      },
      list: {
        listLogpushDatasets: {
          procedure: "cloudflare.listLogpushDatasets",
          itemsField: "items"
        }
      }
    }
  }
};

// ../data-sources/src/sources/cloudflare-workers/setup.ts
var cloudflareWorkersConnectionless = {
  perStreamInstructions: true,
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/cloudflare-workers",
  groups: [
    {
      id: "open-telemetry",
      section: "config",
      title: "Open telemetry destinations",
      actions: [
        {
          instruction: "In your Cloudflare dashboard, go to **Workers & Pages > Observability > Telemetry** and click **Add Destination**."
        },
        {
          instruction: "Add one destination for logs and a second for traces."
        }
      ]
    },
    {
      id: "logs",
      section: "config",
      title: "Configure logs destination",
      actions: [
        {
          instruction: "Paste these values into Cloudflare's **Add New Destination** dialog for logs — the endpoint is your **OTLP logs endpoint** (above).",
          payloads: [
            {
              kind: "copyable",
              label: "Destination type",
              value: "Logs"
            },
            {
              kind: "copyable",
              label: "Destination name",
              value: "sazabi-logs"
            }
          ]
        }
      ]
    },
    {
      id: "traces",
      section: "config",
      title: "Configure traces destination",
      actions: [
        {
          instruction: "Paste these values into Cloudflare's **Add New Destination** dialog for traces — the endpoint is your **OTLP traces endpoint** (above).",
          payloads: [
            {
              kind: "copyable",
              label: "Destination type",
              value: "Traces"
            },
            {
              kind: "copyable",
              label: "Destination name",
              value: "sazabi-traces"
            }
          ]
        }
      ]
    },
    {
      id: "enable-worker",
      section: "config",
      title: "Enable destinations",
      actions: [
        {
          instruction: "In each Worker's `wrangler.jsonc` / `wrangler.toml`, enable observability and list the log and trace destination names you created."
        },
        {
          instruction: "Redeploy the Worker after updating Wrangler config.",
          notes: [
            {
              text: "The destination is enabled only after the deployed Worker references it by name."
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/cloudflare-workers/spec.ts
var cloudflareWorkersSpec = {
  id: "cloudflare_workers",
  name: "Cloudflare Workers",
  searchAliases: ["cloudflare", "cf", "workers"],
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "cloudflare-workers",
      label: "Cloudflare Workers Observability",
      subdomain: "cloudflare",
      aliases: ["cloudflare"],
      transform: "otlp-strict-signal",
      transformOptions: {
        missingAuthMessage: "Missing Cloudflare Workers Observability auth: provide Authorization: Bearer <publicKey>"
      }
    }
  ],
  lifecycleEligible: true,
  subtitle: "Stream Cloudflare Workers Observability logs and traces to Sazabi via OTLP.",
  features: [
    "Workers Observability OTLP logs",
    "Workers Observability OTLP traces"
  ],
  evidenceHints: [
    "wrangler.toml/json config with observability or Workers deployments",
    "@cloudflare/workers-types, hono on Workers, or Worker entrypoints such as src/worker.ts",
    "README/docs naming Cloudflare Workers, Pages Functions, or Durable Objects"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "cloudflare",
    intakeSourceId: "cloudflare",
    streamSelectorLayout: "sidepanel"
  },
  streamCardinality: "multi"
};

// ../data-sources/src/sources/cloudwatch/setup.ts
var cloudwatchPrefetch = {
  action: "prefetch",
  input: {
    projectId: "${context.projectId}",
    templateUrl: "${context.cloudformationTemplateUrl}"
  },
  resultAs: "cloudwatch"
};
var cloudwatchRoleArnStep = {
  id: "role-arn",
  title: "Enter role ARN",
  actions: [
    {
      id: "arn",
      kind: "text",
      label: "Role ARN",
      instruction: "Enter the IAM role ARN below.",
      placeholder: "arn:aws:iam::123456789012:role/SazabiLogIngestion-Sazabi-...",
      pattern: "^arn:aws:iam::(\\d{12}):role\\/[\\w+=,.@\\-\\/]+$",
      patternMessage: "Invalid ARN format. Expected: arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME"
    }
  ]
};
var cloudwatchSubmit = {
  actions: [
    {
      kind: "validate",
      action: "validate",
      input: {
        projectId: "${context.projectId}",
        roleArn: "$arn",
        externalId: "${context.extras.cloudwatch.externalId}"
      },
      resultAs: "validateRole"
    }
  ],
  metadata: {
    roleArn: "$arn",
    awsAccountId: "$validateRole.awsAccountId",
    externalId: "${context.extras.cloudwatch.externalId}"
  },
  displayName: "AWS Account $validateRole.awsAccountId",
  button: CONNECT_BUTTON
};
var cloudwatchManaged = {
  kind: "choice",
  title: "Choose setup method",
  description: "Select how you want to create the CloudWatch IAM role.",
  options: [
    {
      id: "cloudformation",
      label: "CloudFormation",
      description: "Launch a stack with the required trust and permissions.",
      flow: {
        kind: "multi-step",
        prefetch: cloudwatchPrefetch,
        steps: [
          {
            id: "prepare",
            title: "Launch stack",
            actions: [
              {
                kind: "instruction",
                instruction: "Launch a CloudFormation stack in your AWS account to create the IAM role that lets Sazabi read your CloudWatch logs.",
                payloads: [
                  {
                    kind: "external-link",
                    label: "Launch CloudFormation stack",
                    href: "${context.extras.cloudwatch.cloudFormationQuickCreateUrl}"
                  }
                ]
              },
              {
                kind: "instruction",
                instruction: "After the stack is created, find your role ARN under **Stacks → ${context.extras.cloudwatch.stackName} → Outputs** and copy the `RoleArn` value."
              }
            ]
          },
          cloudwatchRoleArnStep
        ],
        submit: cloudwatchSubmit
      }
    },
    {
      id: "terraform",
      label: "Terraform",
      description: "Apply Terraform resources in your AWS account.",
      flow: {
        kind: "multi-step",
        prefetch: cloudwatchPrefetch,
        steps: [
          {
            id: "prepare",
            title: "Apply Terraform",
            actions: [
              {
                kind: "instruction",
                instruction: "Add this configuration to your Terraform files. It creates the IAM role that lets Sazabi read your CloudWatch logs.",
                payloads: [
                  {
                    kind: "code",
                    language: "hcl",
                    copyLabel: "Terraform",
                    value: `data "aws_caller_identity" "current" {}

resource "aws_iam_role" "sazabi_log_ingestion" {
  name = "SazabiLogIngestion"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { AWS = "arn:aws:iam::\${context.extras.cloudwatch.sazabiAccountId}:root" }
      Action = "sts:AssumeRole"
      Condition = { StringEquals = { "sts:ExternalId" = "\${context.extras.cloudwatch.externalId}" } }
    }]
  })
}

resource "aws_iam_role_policy" "sazabi_cloudwatch_logs" {
  name = "SazabiLogSubscriptionManagement"
  role = aws_iam_role.sazabi_log_ingestion.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      { Sid = "DescribeLogGroups", Effect = "Allow", Action = ["logs:DescribeLogGroups"], Resource = "*" },
      { Sid = "DescribeSubscriptionFilters", Effect = "Allow", Action = ["logs:DescribeSubscriptionFilters"], Resource = "arn:aws:logs:*:$\${data.aws_caller_identity.current.account_id}:log-group:*" },
      { Sid = "ManageSubscriptionFilters", Effect = "Allow", Action = ["logs:PutSubscriptionFilter","logs:DeleteSubscriptionFilter"], Resource = ["arn:aws:logs:*:$\${data.aws_caller_identity.current.account_id}:log-group:*","arn:aws:logs:*:\${context.extras.cloudwatch.sazabiAccountId}:destination:sazabi-*"] },
      { Sid = "ManageAccountPolicies", Effect = "Allow", Action = ["logs:PutAccountPolicy","logs:DeleteAccountPolicy","logs:DescribeAccountPolicies"], Resource = "arn:aws:logs:*:$\${data.aws_caller_identity.current.account_id}:*" }
    ]
  })
}

output "sazabi_role_arn" {
  value = aws_iam_role.sazabi_log_ingestion.arn
}`
                  }
                ]
              },
              {
                kind: "instruction",
                instruction: "Run `terraform apply`, then copy the `sazabi_role_arn` output value."
              }
            ]
          },
          cloudwatchRoleArnStep
        ],
        submit: cloudwatchSubmit
      }
    },
    {
      id: "cli",
      label: "CLI",
      description: "Run AWS CLI commands to create the IAM role.",
      flow: {
        kind: "multi-step",
        prefetch: cloudwatchPrefetch,
        steps: [
          {
            id: "prepare",
            title: "Run commands",
            actions: [
              {
                kind: "instruction",
                instruction: "Run the following commands in your terminal to create the IAM role that lets Sazabi read your CloudWatch logs. Replace `YOUR_ACCOUNT_ID` with your 12-digit AWS account ID; the final command prints the role ARN.",
                payloads: [
                  {
                    kind: "code",
                    language: "bash",
                    copyLabel: "CLI",
                    value: `cat > trust-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "AWS": "arn:aws:iam::\${context.extras.cloudwatch.sazabiAccountId}:root" },
    "Action": "sts:AssumeRole",
    "Condition": { "StringEquals": { "sts:ExternalId": "\${context.extras.cloudwatch.externalId}" } }
  }]
}
EOF

cat > permission-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    { "Sid": "DescribeLogGroups", "Effect": "Allow", "Action": ["logs:DescribeLogGroups"], "Resource": "*" },
    { "Sid": "DescribeSubscriptionFilters", "Effect": "Allow", "Action": ["logs:DescribeSubscriptionFilters"], "Resource": "arn:aws:logs:*:YOUR_ACCOUNT_ID:log-group:*" },
    { "Sid": "ManageSubscriptionFilters", "Effect": "Allow", "Action": ["logs:PutSubscriptionFilter","logs:DeleteSubscriptionFilter"], "Resource": ["arn:aws:logs:*:YOUR_ACCOUNT_ID:log-group:*","arn:aws:logs:*:\${context.extras.cloudwatch.sazabiAccountId}:destination:sazabi-*"] },
    { "Sid": "ManageAccountPolicies", "Effect": "Allow", "Action": ["logs:PutAccountPolicy","logs:DeleteAccountPolicy","logs:DescribeAccountPolicies"], "Resource": "arn:aws:logs:*:YOUR_ACCOUNT_ID:*" }
  ]
}
EOF

aws iam create-role --role-name SazabiLogIngestion --assume-role-policy-document file://trust-policy.json
aws iam put-role-policy --role-name SazabiLogIngestion --policy-name SazabiLogSubscriptionManagement --policy-document file://permission-policy.json
aws iam get-role --role-name SazabiLogIngestion --query 'Role.Arn' --output text`
                  }
                ]
              }
            ]
          },
          cloudwatchRoleArnStep
        ],
        submit: cloudwatchSubmit
      }
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/cloudwatch"
};
var cloudwatchStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}", pattern: "" },
    columns: [
      { field: "name", header: "Log group", cell: "mono" },
      {
        field: "arn",
        header: "Region",
        width: "w-32",
        cell: "badge",
        extract: "regex:^arn:aws:logs:([^:]+):",
        transform: "fallback:—"
      }
    ],
    searchPlaceholder: "Search log groups...",
    searchFields: ["name"],
    dedupeByConfigField: "logGroupName",
    infoBanner: "Only showing log groups from ${context.projectRegion}. To stream logs from other regions, create a new project for that region in Sazabi.",
    emptyState: {
      noMatches: "No log groups found.",
      allConfigured: "All log groups already have streams configured.",
      noResults: "No log groups found in ${context.projectRegion} region."
    },
    toStreamItem: {
      displayName: "$item.name",
      config: {
        logGroupName: "$item.name",
        logGroupArn: "$item.arn"
      }
    }
  }
};
var cloudwatchConnectionless = {
  groups: [
    {
      id: "prepare",
      section: "config",
      title: "Prepare AWS access",
      notes: [
        {
          text: "To forward CloudWatch logs to Sazabi without granting Sazabi a cross-account IAM role, run an OpenTelemetry Collector yourself. The collector reads your log groups with the `awscloudwatch` receiver and exports OTLP to Sazabi. Sazabi never assumes a role in your account on this path."
        }
      ],
      actions: [
        {
          instruction: "Provision an IAM identity for the collector with permission to read the target log groups, and pin the AWS region.",
          notes: [
            {
              text: "The collector authenticates with the standard AWS SDK credential chain (environment variables, an instance/task role, or a named profile)."
            }
          ]
        },
        {
          instruction: "Grant that identity these minimum IAM permissions, scoped to the log groups you forward:",
          payloads: [
            {
              kind: "bulleted-list",
              items: [
                "`logs:DescribeLogGroups`",
                "`logs:GetLogEvents`",
                "`logs:StartLiveTail`"
              ]
            }
          ],
          notes: [
            {
              text: "Alternatively, forward through a CloudWatch Logs subscription filter into a Firehose or Lambda that emits OTLP to the same endpoint. Either way the transport is customer-run OTLP, not the Sazabi-managed Kinesis path."
            }
          ]
        }
      ]
    },
    {
      id: "collector",
      section: "config",
      title: "Configure collector",
      description: "Use an `awscloudwatch` receiver and an `otlphttp` exporter.",
      notes: [
        {
          variant: "requirement",
          text: "Use the `opentelemetry-collector-contrib` distribution — the `awscloudwatch` receiver ships there, not in the core collector."
        }
      ],
      actions: [
        {
          instruction: "Add this collector configuration, replacing `YOUR_AWS_REGION` with the region your log groups live in and listing the log group names you want to forward under `groups.named`.",
          payloads: [
            {
              kind: "code",
              label: "Example collector configuration",
              language: "yaml",
              copyLabel: "Collector configuration",
              value: `receivers:
  awscloudwatch:
    region: YOUR_AWS_REGION
    logs:
      poll_interval: 1m
      groups:
        named:
          /aws/lambda/your-function:

exporters:
  otlphttp:
    logs_endpoint: https://\${context.ingestHost}/v1/logs

service:
  pipelines:
    logs:
      receivers: [awscloudwatch]
      exporters: [otlphttp]`
            }
          ],
          notes: [
            {
              text: "The key is embedded in the endpoint hostname, so no OTLP auth header is required."
            }
          ]
        }
      ]
    },
    {
      id: "run",
      section: "verify",
      title: "Run and verify",
      actions: [
        {
          instruction: "Deploy the collector, then write a new log event in one of the forwarded log groups and check the collector logs for export errors. Logs should appear in Sazabi within a few minutes."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/cloudwatch/spec.ts
var cloudwatchSensitiveFields = ["externalId"];
var cloudwatchSpec = {
  id: "cloudwatch",
  name: "CloudWatch",
  searchAliases: ["aws", "amazon", "amazon web services", "amazon cloudwatch"],
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  requiresConnectionPublicKey: true,
  sensitiveFields: cloudwatchSensitiveFields,
  subtitle: "Stream your AWS CloudWatch logs directly to Sazabi for real-time analysis and alerting.",
  features: ["Log forwarding", "Real-time streaming", "Multi-region support"],
  evidenceHints: [
    "AWS ECS, Lambda, CloudFormation, CDK, SAM, Serverless, or Terraform AWS resources",
    "CloudWatch log group names, awslogs drivers, or logs:* IAM permissions",
    "AWS_REGION/AWS_DEFAULT_REGION environment variables with runtime logging to CloudWatch"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "cloudwatch",
    intakeSourceId: "cloudwatch",
    streamSelectorLayout: "sidepanel",
    connectionMetadataSection: {
      title: "AWS account details",
      description: "The AWS account and IAM role used for log ingestion.",
      fields: [
        {
          key: "awsAccountId",
          label: "AWS account ID",
          description: "AWS account connected to this data source."
        },
        {
          key: "roleArn",
          label: "IAM role ARN",
          description: "IAM role Sazabi assumes for log ingestion."
        }
      ]
    },
    actions: {
      submit: {
        validate: { kind: "source-action", actionId: "validate-role" }
      },
      list: {
        list: {
          kind: "source-action",
          actionId: "list-log-groups",
          itemsField: "logGroups"
        }
      },
      prefetch: {
        prefetch: { kind: "source-action", actionId: "get-setup-info" }
      }
    }
  }
};

// ../data-sources/src/sources/convex/setup.ts
var convexManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "credentials",
      title: "Enter access token",
      actions: [
        {
          kind: "instruction",
          instruction: "Create a team access token in your [Convex dashboard team settings](https://dashboard.convex.dev)."
        },
        {
          id: "token",
          kind: "secret",
          label: "Team access token",
          instruction: "Enter your Team access token below.",
          placeholder: "eyJ..."
        }
      ]
    },
    {
      id: "team",
      title: "Choose team",
      actions: [
        {
          id: "team",
          kind: "select",
          label: "Team",
          instruction: "Select the Convex team whose deployments Sazabi should list.",
          placeholder: "Select a team",
          optionsAction: "options",
          optionsInput: { token: "$token" },
          optionValueField: "id",
          optionLabelField: "name",
          optionDescriptionField: "slug"
        }
      ]
    }
  ],
  submit: {
    metadata: {
      accessToken: "$token",
      teamId: "$team.id",
      teamName: "$team.name"
    },
    displayName: "$team.name",
    button: CONNECT_BUTTON
  }
};
var convexConnectionless = {
  groups: [
    {
      id: "open-log-streams",
      section: "config",
      title: "Open Log Streams",
      notes: [
        {
          variant: "requirement",
          text: "**Convex log streams require the Pro plan.** Free/Starter teams cannot configure log streams."
        }
      ],
      actions: [
        {
          instruction: "In your [Convex dashboard](https://dashboard.convex.dev), open the deployment you want to forward, then go to **Settings > Integrations** and configure a **Webhook** log stream.",
          notes: [
            {
              text: "Log streams are **per deployment** — repeat this setup for each deployment you want to forward. To onboard many deployments at once, connect your Convex account instead and Sazabi creates the log streams for you."
            }
          ]
        }
      ]
    },
    {
      id: "endpoint",
      section: "config",
      title: "Set webhook URL",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the webhook configuration."
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the log stream, then trigger activity — run a Convex function or hit a deployed endpoint. Logs appear in Sazabi within a few minutes."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/convex"
};
var convexStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}" },
    columns: [
      { field: "name", header: "Name" },
      { field: "slug", header: "Slug", width: "w-48", cell: "muted" }
    ],
    searchPlaceholder: "Search deployments...",
    searchFields: ["name"],
    dedupeByConfigField: "deploymentId",
    emptyState: {
      noMatches: "No deployments found.",
      allConfigured: "All deployments already have log streams configured."
    },
    toStreamItem: {
      displayName: "$item.name",
      config: {
        deploymentId: "$item.id",
        deploymentName: "$item.name"
      }
    }
  }
};

// ../data-sources/src/sources/convex/spec.ts
var convexSensitiveFields = ["accessToken"];
var convexIntakeDeclaration = {
  id: "convex",
  label: "Convex",
  subdomain: "convex",
  transform: "convex-webhook"
};
var convexSpec = {
  id: "convex",
  name: "Convex",
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  sensitiveFields: convexSensitiveFields,
  intake: [convexIntakeDeclaration],
  subtitle: "Forward your Convex deployment logs directly to Sazabi for serverless observability.",
  features: ["Function logs", "Database mutations", "Scheduled job monitoring"],
  evidenceHints: [
    "convex/ directory, convex.json, or convex package imports",
    "CONVEX_* or NEXT_PUBLIC_CONVEX_URL environment variables",
    "README/docs naming Convex for serverless functions or database state"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "convex",
    intakeSourceId: "convex",
    streamSelectorLayout: "sidepanel",
    actions: {
      list: {
        options: {
          procedure: "convex.listTeams",
          itemsField: "teams",
          sensitiveInputFields: ["token"]
        },
        list: {
          procedure: "convex.listDeployments",
          itemsField: "deployments",
          sensitiveInputFields: ["token"]
        }
      }
    }
  }
};

// ../data-sources/src/sources/datadog/setup.ts
var datadogConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "configure",
      section: "config",
      title: "Configure the Datadog Agent",
      actions: [
        {
          instruction: "Choose how this Datadog Agent should ship logs to Sazabi, then apply the matching configuration.",
          payloads: [
            {
              kind: "options",
              options: [
                {
                  id: "datadog-yaml-dual-ship",
                  label: "`datadog.yaml` dual-ship",
                  description: "Keep the Agent's Datadog API key and add Sazabi as an additional logs endpoint.",
                  payloads: [
                    {
                      kind: "copyable",
                      label: "Intake host",
                      value: "${context.ingestHost}",
                      copyLabel: "Datadog intake host",
                      description: "Use this host in `logs_config.additional_endpoints`."
                    },
                    {
                      kind: "code",
                      language: "yaml",
                      copyLabel: "datadog.yaml dual-ship configuration",
                      value: `# Enable logs collection if it is not already enabled.
logs_enabled: true

# Send a copy of logs to Sazabi while the primary Agent config
# continues sending telemetry to Datadog.
logs_config:
  force_use_http: true
  additional_endpoints:
    # Sazabi authenticates using the public key embedded in the intake host
    # below, so this api_key is not used by Sazabi. The Datadog Agent still
    # requires a non-empty value here to start.
    - api_key: any-non-empty-value
      Host: \${context.ingestHost}
      Port: 443`
                    }
                  ],
                  notes: [
                    {
                      variant: "requirement",
                      text: "`logs_config.additional_endpoints` requires Datadog Agent v6.18+ or v7.18+."
                    }
                  ]
                },
                {
                  id: "env-dual-ship",
                  label: "Env vars dual-ship",
                  description: "Keep `DD_API_KEY` pointed at Datadog and add Sazabi through environment variables.",
                  payloads: [
                    {
                      kind: "copyable",
                      label: "Intake host",
                      value: "${context.ingestHost}",
                      copyLabel: "Datadog intake host",
                      description: "Use this host in `DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS`."
                    },
                    {
                      kind: "code",
                      language: "bash",
                      copyLabel: "Datadog Agent dual-ship environment variables",
                      value: `DD_LOGS_ENABLED=true
DD_LOGS_CONFIG_FORCE_USE_HTTP=true
DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS='[{"api_key":"any-non-empty-value","Host":"\${context.ingestHost}","Port":443}]'`
                    }
                  ],
                  notes: [
                    {
                      variant: "requirement",
                      text: "`DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS` requires Datadog Agent v6.18+ or v7.18+."
                    }
                  ]
                },
                {
                  id: "env-sazabi-only",
                  label: "Env vars Sazabi-only",
                  description: "Use a dedicated Agent or sidecar that sends logs only to Sazabi.",
                  payloads: [
                    {
                      kind: "code",
                      language: "bash",
                      description: "`DD_LOGS_CONFIG_LOGS_DD_URL` is your intake URL (above).",
                      copyLabel: "Dedicated Datadog Agent environment variables",
                      value: `DD_API_KEY=any-non-empty-value
DD_LOGS_ENABLED=true
DD_LOGS_CONFIG_LOGS_DD_URL=https://\${context.ingestHost}
DD_LOGS_CONFIG_FORCE_USE_HTTP=true`
                    }
                  ],
                  notes: [
                    {
                      text: "`DD_API_KEY` is not used by Sazabi — the intake URL carries your public key in the hostname — but the Datadog Agent requires it to be a non-empty value to start."
                    }
                  ]
                },
                {
                  id: "ecs-sidecar",
                  label: "ECS sidecar",
                  description: "Run a dedicated Datadog Agent sidecar in ECS/Fargate for Sazabi logs.",
                  payloads: [
                    {
                      kind: "code",
                      language: "bash",
                      description: "Set these in the sidecar container environment — `DD_LOGS_CONFIG_LOGS_DD_URL` is your intake URL (above).",
                      copyLabel: "ECS Datadog Agent sidecar environment variables",
                      value: `ECS_FARGATE=true
DD_API_KEY=any-non-empty-value
DD_LOGS_ENABLED=true
DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true
DD_LOGS_CONFIG_LOGS_DD_URL=https://\${context.ingestHost}
DD_LOGS_CONFIG_FORCE_USE_HTTP=true`
                    }
                  ],
                  notes: [
                    {
                      text: "`DD_API_KEY` is not used by Sazabi — the intake URL carries your public key in the hostname — but the Datadog Agent requires it to be a non-empty value to start."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "restart",
      section: "verify",
      title: "Restart and verify",
      description: "Restart or redeploy the Agent after applying the config.",
      actions: [
        {
          instruction: "Restart or redeploy the Agent so it picks up the updated configuration.",
          notes: [
            {
              variant: "requirement",
              text: "Avoid configuring both a Sazabi additional endpoint and a Sazabi-only logs URL in the same Agent, or you may send duplicate logs."
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/datadog/spec.ts
var datadogSpec = {
  id: "datadog",
  name: "Datadog Agent",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "datadog",
      label: "Datadog",
      subdomain: "datadog",
      transform: "datadog-agent"
    }
  ],
  lifecycleSkipReason: "Manual SDK/agent setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Forward your Datadog Agent logs directly to Sazabi for AI-powered observability.",
  features: [
    "Agent log forwarding",
    "Minimal configuration",
    "Keep existing setup"
  ],
  evidenceHints: [
    "datadog-agent config, DD_* environment variables, or docker-compose Datadog sidecars",
    "dd-trace, @datadog/*, datadog-lambda-js, or Datadog CI/deploy scripts",
    "README/docs naming Datadog as the current logs, metrics, traces, or APM provider"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "datadog",
    intakeSourceId: "datadog"
  }
};

// ../data-sources/src/sources/daytona/setup.ts
var daytonaConnectionless = {
  groups: [
    {
      id: "open-settings",
      section: "config",
      title: "Open OpenTelemetry card",
      notes: [
        {
          variant: "requirement",
          text: "The OpenTelemetry card is visible to organization owners only."
        }
      ],
      actions: [
        {
          instruction: "Open the [Daytona dashboard](https://app.daytona.io), choose your organization, open **Settings**, and find the **OpenTelemetry** card."
        }
      ]
    },
    {
      id: "values",
      section: "config",
      title: "Set OTLP values",
      actions: [
        {
          instruction: "Set the **OTLP Endpoint** on the Daytona OpenTelemetry card to your intake URL (above)."
        }
      ]
    },
    {
      id: "save",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the OpenTelemetry card, then restart or start a sandbox.",
          payloads: [
            {
              kind: "bulleted-list",
              items: [
                "Filter in Sazabi using the resource attributes Daytona stamps on each record: `daytona_organization_id`, `daytona_region_id`, `daytona_snapshot`.",
                "Sazabi currently stores logs and traces from this source. Metrics sent to the endpoint aren't stored yet.",
                "Daytona only retains sandbox telemetry for 3 days in its own dashboard, so Sazabi is the durable store."
              ]
            }
          ],
          notes: [
            {
              text: "Sandboxes begin exporting telemetry automatically on their next start with no per-sandbox change required."
            }
          ]
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/daytona"
};

// ../data-sources/src/sources/daytona/spec.ts
var daytonaSpec = {
  id: "daytona",
  name: "Daytona",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "daytona",
      label: "Daytona",
      subdomain: "daytona",
      transform: "otlp-signal-dispatch",
      transformOptions: {
        unsupportedPathMessage: "Unsupported Daytona OTLP path: expected /v1/logs, /v1/traces, or /v1/metrics",
        metricsWarningMessage: "Daytona metrics received but not yet supported"
      }
    }
  ],
  lifecycleSkipReason: "Manual webhook setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Stream sandbox telemetry from your Daytona organization to Sazabi via org-level OpenTelemetry export.",
  features: [
    "Org-level OTLP logs and traces",
    "Sandbox resource attributes (organization, region, snapshot)",
    "Durable retention beyond Daytona's 3-day window"
  ],
  evidenceHints: [
    "Daytona SDK/CLI usage, Daytona sandbox config, or DAYTONA_* environment variables",
    "Code execution sandbox infrastructure backed by Daytona snapshots",
    "README/docs naming Daytona for agent or development sandboxes"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "daytona",
    intakeSourceId: "daytona"
  }
};

// ../data-sources/src/sources/digital-ocean/setup.ts
var digitalOceanManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "prepare",
      title: "Create access token",
      actions: [
        {
          kind: "instruction",
          instruction: "Create a [DigitalOcean personal access token](https://cloud.digitalocean.com/account/api/tokens) with **Full Access** scope, or use Custom Scopes with `app:read`, `app:update`, `actions:read`, `regions:read`, and `sizes:read` so Sazabi can set up log forwarding on your apps."
        }
      ]
    },
    {
      id: "credentials",
      title: "Enter access token",
      actions: [
        {
          id: "token",
          kind: "secret",
          label: "Personal access token",
          instruction: "Enter your personal access token below.",
          placeholder: "dop_v1_..."
        }
      ]
    }
  ],
  submit: {
    actions: [
      {
        kind: "validate",
        action: "validate",
        input: { token: "$token" }
      }
    ],
    metadata: {
      apiToken: "$token"
    },
    button: CONNECT_BUTTON
  },
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/digitalocean"
};
var digitalOceanConnectionless = {
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/digital-ocean",
  groups: [
    {
      id: "open-log-forwarding",
      section: "config",
      title: "Open Log Forwarding",
      actions: [
        {
          instruction: "In the [DigitalOcean control panel](https://cloud.digitalocean.com/apps), open the App Platform app you want to forward, then go to **Settings > Log Forwarding** and add a **Datadog** destination. You can also add the destination through your app spec (`app.yaml`) or `doctl apps update`."
        },
        {
          instruction: "Repeat this setup for every app you want to forward — log destinations are configured **per app** and attach to each service, worker, and job.",
          notes: [
            {
              text: "To add forwarding across an app in one step from a picker, connect your DigitalOcean account instead."
            },
            {
              text: "App Platform Functions, Droplets, Spaces, Managed Databases, and Managed Kubernetes are not covered by this path — forward those with Sazabi's [OpenTelemetry endpoint](https://docs.sazabi.com/data/sources/endpoint/opentelemetry)."
            }
          ]
        }
      ]
    },
    {
      id: "endpoint",
      section: "config",
      title: "Set Datadog destination values",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the **Endpoint (API URL)** field, and this key into the **API key** field.",
          payloads: [
            {
              kind: "copyable",
              label: "Datadog API key",
              value: "${context.publicKey}",
              copyLabel: "Sazabi public key",
              description: "App Platform requires a Datadog API key field — the key embedded in the endpoint hostname is what actually authenticates the stream."
            }
          ]
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the log destination, then trigger activity — deploy the app or hit one of its routes. Logs appear in Sazabi within a few minutes."
        }
      ]
    }
  ]
};
var digitalOceanStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}" },
    columns: [
      { field: "name", header: "Name" },
      {
        field: "componentCount",
        header: "Components",
        width: "w-40",
        cell: "badge"
      }
    ],
    searchPlaceholder: "Search apps...",
    searchFields: ["name"],
    dedupeByConfigField: "appId",
    emptyState: {
      noMatches: "No apps found.",
      allConfigured: "All apps already have log streams configured.",
      noItems: "No App Platform apps found in this DigitalOcean account. Create an app in DigitalOcean first, then return here to forward its logs."
    },
    toStreamItem: {
      displayName: "$item.name",
      config: {
        appId: "$item.id",
        appName: "$item.name"
      }
    }
  }
};

// ../data-sources/src/sources/digital-ocean/spec.ts
var digitalOceanSensitiveFields = ["apiToken"];
var digitalOceanIntakeDeclaration = {
  id: "digital-ocean",
  label: "DigitalOcean",
  subdomain: "digital-ocean",
  transform: "datadog-agent"
};
var digitalOceanSpec = {
  id: "digital_ocean",
  name: "DigitalOcean",
  searchAliases: ["digital ocean", "do"],
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  sensitiveFields: digitalOceanSensitiveFields,
  intake: [digitalOceanIntakeDeclaration],
  subtitle: "Forward your DigitalOcean infrastructure logs directly to Sazabi for unified observability.",
  features: ["Log forwarding", "App Platform logs"],
  evidenceHints: [
    ".do/app.yaml, DigitalOcean App Platform specs, or doctl scripts",
    "DIGITALOCEAN_* environment variables or Terraform digitalocean provider resources",
    "README/docs naming DigitalOcean Apps, Droplets, Kubernetes, or Spaces"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "digital-ocean",
    intakeSourceId: "digital-ocean",
    streamSelectorLayout: "sidepanel",
    streamTableColumns: [
      {
        kind: "config-text",
        header: "App",
        width: "w-32",
        configField: "appName",
        fallbackLabel: "Unknown app"
      }
    ],
    actions: {
      submit: {
        validate: {
          kind: "source-action",
          actionId: "validate-token",
          sensitiveInputFields: ["token"]
        }
      },
      list: {
        list: {
          kind: "source-action",
          actionId: "list-apps",
          itemsField: "apps"
        }
      }
    }
  }
};

// ../data-sources/src/sources/e2b/setup.ts
var TYPESCRIPT_SDK = `import { Sandbox } from '@e2b/code-interpreter'
import { logs, SeverityNumber } from '@opentelemetry/api-logs'
import { LoggerProvider, BatchLogRecordProcessor } from '@opentelemetry/sdk-logs'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'

const code = 'console.log("hello from e2b")'

// Configure OpenTelemetry logger with batching. The OTLP exporter targets
// Sazabi's e2b intake endpoint; the BatchLogRecordProcessor coalesces emits
// so we ship one HTTP request per batch instead of per stdout line.
const loggerProvider = new LoggerProvider({
  resource: resourceFromAttributes({ 'service.name': 'e2b-sandbox' }),
  processors: [
    new BatchLogRecordProcessor(
      new OTLPLogExporter({
        url: process.env.SAZABI_INTAKE_URL,
      })
    ),
  ],
})

logs.setGlobalLoggerProvider(loggerProvider)
const logger = logs.getLogger('e2b')

// Initialize E2B sandbox
const sandbox = await Sandbox.create()

try {
  // Run code and stream logs. \`language\` defaults to Python in the E2B SDK,
  // so passing 'javascript' here is required when the code is JS.
  await sandbox.runCode(code, {
    language: 'javascript',
    onStdout: (data) => {
      logger.emit({
        severityNumber: SeverityNumber.INFO,
        body: data.line,
        attributes: { 'e2b.stream': 'stdout', 'e2b.sandbox_id': sandbox.sandboxId },
      })
    },
    onStderr: (data) => {
      logger.emit({
        severityNumber: SeverityNumber.ERROR,
        body: data.line,
        attributes: { 'e2b.stream': 'stderr', 'e2b.sandbox_id': sandbox.sandboxId },
      })
    },
  })
} finally {
  try {
    // Kill the sandbox so it doesn't sit idle against your concurrent-sandbox
    // quota until E2B's default timeout expires.
    await sandbox.kill()
  } finally {
    // Flush logs before exit; runs even if sandbox.kill() throws.
    await loggerProvider.shutdown()
  }
}`;
var PYTHON_SDK = `import os
from e2b_code_interpreter import Sandbox
from opentelemetry import _logs
from opentelemetry.sdk._logs import LoggerProvider, LoggingHandler
from opentelemetry.sdk._logs.export import BatchLogRecordProcessor
from opentelemetry.exporter.otlp.proto.http._log_exporter import OTLPLogExporter
from opentelemetry.sdk.resources import Resource
import logging

code = 'print("hello from e2b")'

# Configure OpenTelemetry logger with batching. The OTLP exporter targets
# Sazabi's e2b intake endpoint; the BatchLogRecordProcessor coalesces emits
# so we ship one HTTP request per batch instead of per stdout line.
resource = Resource.create({"service.name": "e2b-sandbox"})
logger_provider = LoggerProvider(resource=resource)

logger_provider.add_log_record_processor(
    BatchLogRecordProcessor(
        OTLPLogExporter(
            endpoint=os.environ["SAZABI_INTAKE_URL"],
        )
    )
)

_logs.set_logger_provider(logger_provider)

# Bridge Python's stdlib logging to OpenTelemetry. Attach the handler to the
# 'e2b' logger only (not root) and disable propagation so unrelated app logs
# are not forwarded to Sazabi.
handler = LoggingHandler(logger_provider=logger_provider)
logger = logging.getLogger("e2b")
logger.addHandler(handler)
logger.propagate = False
logger.setLevel(logging.INFO)

# Initialize E2B sandbox. Use \`Sandbox.create()\` rather than \`Sandbox()\` so
# the SDK provisions a new sandbox instance instead of trying to attach to an
# existing one.
sandbox = Sandbox.create()

try:
    def on_stdout(data):
        logger.info(data.line, extra={
            "e2b.stream": "stdout",
            "e2b.sandbox_id": sandbox.sandbox_id,
        })

    def on_stderr(data):
        logger.error(data.line, extra={
            "e2b.stream": "stderr",
            "e2b.sandbox_id": sandbox.sandbox_id,
        })

    sandbox.run_code(
        code,
        on_stdout=on_stdout,
        on_stderr=on_stderr,
    )
finally:
    try:
        # Kill the sandbox so it doesn't sit idle against your concurrent-sandbox
        # quota until E2B's default timeout expires.
        sandbox.kill()
    finally:
        # Flush logs before exit; runs even if sandbox.kill() raises.
        logger_provider.shutdown()`;
var envVarActions = [
  {
    instruction: "Set `SAZABI_INTAKE_URL` to your intake URL (above) in the application that creates E2B sandboxes."
  }
];
var e2bConnectionless = {
  groups: [
    {
      id: "values",
      section: "config",
      title: "Set environment variables",
      actions: envVarActions
    },
    {
      id: "instrument",
      section: "config",
      title: "Instrument sandbox logs",
      actions: [
        {
          instruction: "Emit sandbox stdout and stderr through the OpenTelemetry logs SDK.",
          payloads: [
            {
              kind: "code-tabs",
              label: "SDK integration",
              tabs: [
                {
                  id: "typescript",
                  label: "TypeScript",
                  language: "typescript",
                  value: TYPESCRIPT_SDK,
                  copyLabel: "TypeScript code"
                },
                {
                  id: "python",
                  label: "Python",
                  language: "python",
                  value: PYTHON_SDK,
                  copyLabel: "Python code"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Run and verify",
      actions: [
        {
          instruction: "Run a sandbox with the instrumentation in place. Its stdout and stderr should appear in Sazabi within a couple of minutes."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/e2b/spec.ts
var e2bSpec = {
  id: "e2b",
  name: "E2B",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual SDK setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "e2b",
      label: "E2B",
      subdomain: "e2b",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Stream your E2B sandbox logs directly to Sazabi for code execution observability.",
  features: ["Sandbox stdout/stderr capture"],
  evidenceHints: [
    "e2b packages, E2B_API_KEY, or sandbox template config",
    "Code execution sandbox workflows using E2B",
    "README/docs naming E2B for agent sandboxes or code interpreter workloads"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "e2b",
    intakeSourceId: "e2b"
  }
};

// ../data-sources/src/sources/elastic-cloud/setup.ts
var ELASTIC_AGENT_CONFIG = `receivers:
  filelog:
    include: ["/var/log/**/*.log"]
    start_at: beginning

processors:
  resourcedetection:
    detectors: [env, system]
  batch: {}

exporters:
  otlphttp/sazabi:
    endpoint: https://\${context.ingestHost}

service:
  pipelines:
    logs:
      receivers: [filelog]
      processors: [resourcedetection, batch]
      exporters: [otlphttp/sazabi]`;
var LOGSTASH_CONFIG = `input {
  elasticsearch {
    hosts     => ["https://<your-deployment>.es.<region>.gcp.cloud.es.io:443"]
    user      => "elastic"
    password  => "\${ELASTIC_PASSWORD}"
    index     => "logs-*"
    query     => '{"query": {"range": {"@timestamp": {"gte": "now-1m"}}}}'
    schedule  => "* * * * *"
  }
}

filter {
  ruby {
    code => '
      require "json"
      ts_nanos = (event.get("@timestamp").to_f * 1_000_000_000).to_i.to_s
      svc      = event.get("[service][name]") || event.get("[app]") || "elastic"
      level    = (event.get("[log][level]") || event.get("[level]") || "INFO").upcase
      body     = event.get("[message]") || event.to_hash.to_json

      payload = {
        "resourceLogs" => [{
          "resource" => {
            "attributes" => [
              { "key" => "service.name", "value" => { "stringValue" => svc.to_s } }
            ]
          },
          "scopeLogs" => [{
            "scope" => { "name" => "logstash" },
            "logRecords" => [{
              "timeUnixNano" => ts_nanos,
              "body"         => { "stringValue" => body.to_s },
              "severityText" => level.to_s
            }]
          }]
        }]
      }

      event.set("[@metadata][otlp_body]", payload.to_json)
    '
  }
}

output {
  http {
    url          => "https://\${context.ingestHost}/v1/logs"
    http_method  => "post"
    format       => "message"
    content_type => "application/json"
    message      => "%{[@metadata][otlp_body]}"
  }
}`;
var elasticCloudConnectionless = {
  perStreamInstructions: true,
  kind: "choice",
  title: "Choose Elastic forwarder",
  description: "Forward Elastic Cloud logs to Sazabi with Elastic Agent's embedded Collector or with a self-managed Logstash pipeline.",
  options: [
    {
      id: "elastic-agent",
      label: "Elastic Agent",
      description: "Use Elastic Agent 8.13+ or Fleet 9.2+ with an OpenTelemetry Collector config.",
      flow: {
        groups: [
          {
            id: "prepare-agent",
            section: "config",
            title: "Prepare Elastic Agent",
            notes: [
              {
                text: "Elastic Agent 8.13+ ships an embedded OpenTelemetry Collector (EDOT)."
              }
            ],
            actions: [
              {
                instruction: "Point Elastic Agent at Sazabi through the embedded OTel Collector, not via a Fleet output.",
                notes: [
                  {
                    text: "Fleet's **Outputs** UI does not expose an OTLP type."
                  }
                ]
              }
            ]
          },
          {
            id: "copy-config",
            section: "config",
            title: "Copy Collector config",
            actions: [
              {
                instruction: "Configure Sazabi as a standard `otlphttp` exporter.",
                payloads: [
                  {
                    kind: "code",
                    label: "sazabi-otel.yml",
                    language: "yaml",
                    copyLabel: "OTel Collector config",
                    value: ELASTIC_AGENT_CONFIG
                  }
                ]
              }
            ]
          },
          {
            id: "run-agent",
            section: "config",
            title: "Run and tune",
            actions: [
              {
                instruction: "Run it standalone with `elastic-agent otel --config sazabi-otel.yml` after validating with `elastic-agent otel validate --config sazabi-otel.yml`, or attach an **OpenTelemetry input package** to a Fleet Agent Policy on 9.2+."
              },
              {
                instruction: "Tune the `filelog` receiver's `include` paths to match your log files.",
                notes: [
                  {
                    text: "Standard OpenTelemetry receivers (`hostmetrics`, `journald`, `kubernetesattributes`, etc.) all compose with the same `exporters.otlphttp/sazabi` block."
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: "logstash",
      label: "Logstash",
      description: "Use a self-managed Logstash 8.x or 9.x pipeline outside Elastic Cloud.",
      flow: {
        groups: [
          {
            id: "prepare-logstash",
            section: "config",
            title: "Prepare Logstash",
            actions: [
              {
                instruction: "Run Logstash 8.x or 9.x outside Elastic Cloud (Docker, sidecar, or self-managed).",
                notes: [
                  {
                    text: "Elastic Cloud's Kibana **Logstash Pipelines** page only stores pipelines centrally — it does not run Logstash for you."
                  }
                ]
              }
            ]
          },
          {
            id: "copy-config",
            section: "config",
            title: "Copy Logstash pipeline",
            actions: [
              {
                instruction: "Copy this Logstash pipeline into your Logstash configuration.",
                payloads: [
                  {
                    kind: "code",
                    label: "logstash.conf",
                    language: "hcl",
                    copyLabel: "Logstash pipeline",
                    value: LOGSTASH_CONFIG
                  }
                ],
                notes: [
                  {
                    text: 'The pipeline polls the index every minute via the `schedule` setting, builds an OTLP/HTTP `resourceLogs` envelope in a `ruby` filter, and POSTs the raw JSON via the `http` output (using `format => "message"` so Logstash sends the exact body the filter builds).'
                  },
                  {
                    text: "The `ruby` filter is included with Logstash by default."
                  }
                ]
              }
            ]
          },
          {
            id: "update-endpoint",
            section: "config",
            title: "Update endpoint",
            actions: [
              {
                instruction: "Replace `<your-deployment>` and `<region>` with your Elastic Cloud deployment's Elasticsearch endpoint, for example `https://acme.es.us-central1.gcp.cloud.es.io:443`."
              }
            ]
          }
        ]
      }
    }
  ]
};

// ../data-sources/src/sources/elastic-cloud/spec.ts
var elasticCloudSpec = {
  id: "elastic_cloud",
  name: "Elastic Cloud",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual agent setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "elastic-cloud",
      label: "Elastic Cloud",
      subdomain: "elastic-cloud",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward logs from your Elastic Cloud deployment to Sazabi using Elastic Agent or Logstash.",
  features: [
    "Elastic Agent OTel Collector output",
    "Logstash pipeline forwarding",
    "No Sazabi infrastructure required"
  ],
  evidenceHints: [
    "Elastic Agent, Beats, Logstash, or Elasticsearch/Kibana config",
    "ELASTIC_* environment variables or Terraform elasticstack/elastic provider resources",
    "README/docs naming Elastic Cloud, Elasticsearch, or Kibana for observability"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "elastic-cloud",
    intakeSourceId: "elastic-cloud"
  }
};

// ../data-sources/src/sources/fluent-bit/setup.ts
var CLASSIC_CONFIG = `[OUTPUT]
    name              opentelemetry
    match             *
    host              \${context.ingestHost}
    port              443
    logs_uri          /v1/logs
    tls               on
    tls.verify        on`;
var HELM_VALUES = `config:
  outputs: |
    [OUTPUT]
        name              opentelemetry
        match             *
        host              \${context.ingestHost}
        port              443
        logs_uri          /v1/logs
        tls               on
        tls.verify        on`;
var fluentBitConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "copy-config",
      section: "config",
      title: "Copy output configuration",
      notes: [
        {
          variant: "requirement",
          text: "Requires Fluent Bit v2.0 or later. The `opentelemetry` output plugin is included in the default distribution, so no additional installation is needed."
        }
      ],
      actions: [
        {
          instruction: "Configure Fluent Bit's built-in `opentelemetry` output plugin.",
          payloads: [
            {
              kind: "code-tabs",
              label: "Output configuration",
              description: "Choose the snippet format that matches how you manage Fluent Bit.",
              tabs: [
                {
                  id: "classic",
                  label: "Classic config",
                  language: "bash",
                  copyLabel: "Classic Fluent Bit output configuration",
                  value: CLASSIC_CONFIG
                },
                {
                  id: "helm",
                  label: "Helm values",
                  language: "yaml",
                  copyLabel: "Fluent Bit Helm values",
                  value: HELM_VALUES
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "restart",
      section: "verify",
      title: "Restart and verify",
      actions: [
        {
          instruction: "Restart Fluent Bit so it picks up the updated output configuration, then trigger some log activity.",
          notes: [
            {
              text: "If logs do not appear after restart, check the Fluent Bit process logs for TLS, DNS, or authorization errors."
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/fluent-bit/spec.ts
var fluentBitSpec = {
  id: "fluent_bit",
  name: "Fluent Bit",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual agent setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "fluent-bit",
      label: "Fluent Bit",
      subdomain: "fluent-bit",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward logs from your Kubernetes cluster or any infrastructure to Sazabi using the Fluent Bit agent.",
  features: [
    "Kubernetes DaemonSet",
    "Container log collection",
    "Multi-pipeline routing",
    "Low resource footprint"
  ],
  evidenceHints: [
    "fluent-bit.conf, parsers.conf, Helm values, or Kubernetes DaemonSets",
    "Fluent Bit outputs already shipping container logs",
    "README/docs naming Fluent Bit as the log forwarder"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "fluent-bit",
    intakeSourceId: "fluent-bit"
  }
};

// ../data-sources/src/sources/fly-io/setup.ts
var flyIoManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "prepare",
      title: "Create token",
      actions: [
        {
          kind: "instruction",
          instruction: "Create a read-only organization token from the CLI or the Fly.io dashboard.",
          payloads: [
            {
              kind: "options",
              options: [
                {
                  id: "cli",
                  label: "CLI",
                  payloads: [
                    {
                      kind: "code",
                      language: "bash",
                      copyLabel: "flyctl read-only token command",
                      value: "flyctl tokens create readonly -o <org-slug>"
                    }
                  ]
                },
                {
                  id: "dashboard",
                  label: "Dashboard",
                  payloads: [
                    {
                      kind: "external-link",
                      label: "Open the Fly.io dashboard",
                      href: "https://fly.io/dashboard",
                      description: "Open the org's Tokens tab and create a read-only token."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "credentials",
      title: "Enter credentials",
      actions: [
        {
          id: "token",
          kind: "secret",
          label: "API token",
          instruction: "Enter your Fly.io API token below.",
          placeholder: "FlyV1 ..."
        },
        {
          id: "orgSlug",
          kind: "text",
          label: "Organization slug",
          instruction: "Enter your organization slug below.",
          placeholder: "personal"
        }
      ]
    }
  ],
  submit: {
    actions: [
      {
        kind: "validate",
        action: "validate",
        input: {
          dataSourceType: "fly_io",
          metadata: {
            apiToken: "$token",
            organizationSlug: "$orgSlug"
          }
        }
      }
    ],
    metadata: {
      apiToken: "$token",
      organizationSlug: "$orgSlug"
    },
    button: CONNECT_BUTTON
  },
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/fly-io"
};
var flyIoConnectionless = {
  groups: [
    {
      id: "shipper",
      section: "config",
      title: "Run a log shipper",
      description: "Fly.io has no managed log-drain API, so you run a log shipper inside your Fly organization and point it at Sazabi.",
      notes: [
        {
          text: "The shipper reads Fly's internal NATS log stream, so it must run in the **same Fly organization** as the apps you want to monitor. The shipper is required either way — to also let Sazabi discover and verify your apps from a read-only token, connect your Fly.io account instead."
        }
      ],
      actions: [
        {
          instruction: "Pick a log-shipper option — you run **one**, not both. **Option A — fly-log-shipper (simplest):** launch the stock [superfly/fly-log-shipper](https://github.com/superfly/fly-log-shipper) image in your org and enable its generic `http` sink with the two secrets below; Sazabi parses Fly's native JSON event format directly. **Option B — dedicated OTLP shipper:** for per-app keys and richer OTLP resource attributes, build a Vector app that wraps events in an OTLP `resourceLogs` envelope and POSTs to the OTLP endpoint below."
        }
      ]
    },
    {
      id: "endpoint",
      section: "config",
      title: "Set the shipper secrets",
      actions: [
        {
          instruction: "Set the fly-log-shipper secrets (Option A): `HTTP_URL` is your intake URL (above); `HTTP_TOKEN` is the key below.",
          payloads: [
            {
              kind: "copyable",
              label: "`HTTP_TOKEN`",
              value: "${context.publicKey}",
              description: "Your Sazabi public key, sent as a bearer token. Paste the raw key with no `Bearer ` prefix."
            },
            {
              kind: "code",
              label: "Set both secrets on the shipper app",
              language: "bash",
              value: 'fly secrets set -a <log-shipper-app> \\\n  HTTP_URL="https://${context.ingestHost}/fly-log-shipper" \\\n  HTTP_TOKEN="${context.publicKey}"'
            }
          ]
        },
        {
          instruction: "If you chose the dedicated OTLP shipper (Option B), POST OTLP `resourceLogs` to the endpoint below — with the same public key as a bearer token — instead of setting the two secrets above.",
          payloads: [
            {
              kind: "showIngestUrl",
              label: "OTLP endpoint (Option B)",
              pathSuffix: "/v1/logs"
            }
          ]
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Deploy and verify",
      actions: [
        {
          instruction: "Deploy the shipper, then trigger activity — deploy an app or hit a deployed route. Logs appear in Sazabi within a few minutes."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/fly-io"
};
var flyIoStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}" },
    columns: [{ field: "name", header: "Name" }],
    searchPlaceholder: "Search apps...",
    searchFields: ["name"],
    dedupeByConfigField: "appName",
    emptyState: {
      noMatches: "No apps found.",
      allConfigured: "All apps already have log streams configured."
    },
    toStreamItem: {
      displayName: "$item.name",
      config: { appName: "$item.name" }
    }
  }
};

// ../data-sources/src/sources/fly-io/spec.ts
var flyIoSensitiveFields = ["apiToken"];
var flyIoIntakeDeclaration = {
  id: "fly-io",
  label: "Fly.io",
  subdomain: "fly-io",
  transform: "otlp-with-fly-log-shipper"
};
var flyIoSpec = {
  id: "fly_io",
  name: "Fly.io",
  searchAliases: ["fly", "flyio"],
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  sensitiveFields: flyIoSensitiveFields,
  intake: [flyIoIntakeDeclaration],
  subtitle: "Forward your Fly.io application logs directly to Sazabi for global monitoring.",
  features: ["Log shipping", "Multi-region logs", "Machine monitoring"],
  evidenceHints: [
    "fly.toml or .fly/ app configuration",
    "FLY_* environment variables or scripts that run flyctl/fly deploy",
    "README/docs naming Fly.io as the deployment host"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "fly-io",
    intakeSourceId: "fly-io",
    streamSelectorLayout: "sidepanel",
    actions: {
      submit: {
        validate: { procedure: "dataSources.validateConnection" }
      },
      list: {
        list: {
          kind: "source-action",
          actionId: "list-apps",
          itemsField: "apps"
        }
      }
    }
  }
};

// ../data-sources/src/sources/gcp/setup.ts
var gcpManaged = {
  kind: "choice",
  title: "Choose setup method",
  description: "Select how you want to connect Google Cloud logs.",
  options: [
    {
      id: "service-account",
      label: "Service account",
      description: "Let Sazabi set up the log sink, Pub/Sub topic, and pull subscription automatically.",
      flow: {
        kind: "multi-step",
        steps: [
          {
            id: "prepare",
            title: "Prepare access",
            description: "Create a service account key with permissions for log forwarding.",
            notes: [
              {
                text: "Sazabi turns on the required APIs and sets up the log pipeline in your GCP project automatically."
              }
            ],
            actions: [
              {
                kind: "instruction",
                instruction: "Grant the service account the following roles on the target GCP project(s).",
                payloads: [
                  {
                    kind: "copyable-list",
                    items: [
                      { value: "roles/serviceusage.serviceUsageAdmin" },
                      { value: "roles/logging.configWriter" },
                      { value: "roles/pubsub.admin" },
                      { value: "roles/browser" }
                    ]
                  },
                  {
                    kind: "external-link",
                    label: "Enable the Service Usage API",
                    href: "https://console.cloud.google.com/apis/library/serviceusage.googleapis.com"
                  }
                ],
                notes: [
                  {
                    text: 'New or auto-created projects (for example a `gen-lang-client-...` project from Google AI Studio) may also need the Service Usage API enabled first. Sazabi uses that API to turn on the others, but it cannot enable itself. If you hit a "Service Usage API has not been used / is disabled" error, enable it on the project, wait about a minute, then retry.'
                  }
                ]
              },
              {
                kind: "instruction",
                instruction: "To create the key: go to [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) in the Google Cloud Console, select (or create) the service account, open **Keys**, then choose **Add key → Create new key → JSON**. Download the file — you'll paste its contents in the next step. Alternatively, use `gcloud iam service-accounts keys create sazabi-key.json --iam-account=YOUR_SERVICE_ACCOUNT_EMAIL`.",
                payloads: [
                  {
                    kind: "external-link",
                    label: "Open service accounts in GCP Console",
                    href: "https://console.cloud.google.com/iam-admin/serviceaccounts"
                  }
                ]
              }
            ]
          },
          {
            id: "credentials",
            title: "Enter service account key",
            actions: [
              {
                id: "key",
                kind: "secret",
                label: "Service account key (JSON)",
                instruction: "Paste your service account key JSON below.",
                placeholder: '{"type": "service_account", "project_id": "...", ...}'
              }
            ]
          }
        ],
        submit: {
          actions: [
            {
              kind: "validate",
              action: "validate",
              input: { serviceAccountKey: "$key" },
              resultAs: "validateKey"
            },
            {
              kind: "preflight",
              action: "preflight",
              input: { serviceAccountKey: "$key" }
            }
          ],
          metadata: {
            serviceAccountKey: "$key"
          },
          displayName: "GCP $validateKey.projectId",
          button: CONNECT_BUTTON
        }
      }
    },
    {
      id: "connectionless",
      label: "Your own collector",
      description: "Configure the sink, Pub/Sub topic, and collector yourself.",
      flow: { kind: "connectionless" }
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/gcp"
};
var gcpStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}" },
    columns: [
      { field: "displayName", header: "Name" },
      {
        field: "projectId",
        header: "Project ID",
        width: "w-48",
        cell: "muted"
      }
    ],
    searchPlaceholder: "Search projects...",
    searchFields: ["displayName", "projectId"],
    dedupeByConfigField: "gcpProjectId",
    emptyState: {
      noMatches: "No projects found.",
      allConfigured: "All accessible projects already have log streams configured."
    },
    toStreamItem: {
      displayName: "$item.displayName",
      config: {
        gcpProjectId: "$item.projectId",
        gcpProjectName: "$item.displayName"
      }
    }
  }
};
var gcpConnectionless = {
  groups: [
    {
      id: "prepare",
      section: "config",
      title: "Prepare GCP pipeline",
      description: "Create a Cloud Logging sink, Pub/Sub topic, and collector subscription.",
      notes: [
        {
          variant: "requirement",
          text: "Required GCP permissions: the person performing these steps needs a role that grants `logging.sinks.create` (e.g. `roles/logging.configWriter`) and `pubsub.topics.setIamPolicy` (e.g. `roles/pubsub.admin`)."
        }
      ],
      actions: [
        {
          instruction: "Create a Pub/Sub topic and subscription in your GCP project (e.g. `sazabi-logs` and `sazabi-logs-sub`)."
        },
        {
          instruction: "Create a Cloud Logging sink that routes logs to the Pub/Sub topic. Grant the sink's service account the `roles/pubsub.publisher` role on the topic."
        },
        {
          instruction: "Deploy an OpenTelemetry Collector (e.g. on a GCE instance, GKE pod, or Cloud Run service) using the `opentelemetry-collector-contrib` distribution."
        },
        {
          instruction: "Ensure the collector's service account has the `roles/pubsub.subscriber` IAM role on the subscription."
        }
      ]
    },
    {
      id: "collector",
      section: "config",
      title: "Configure collector",
      notes: [
        {
          variant: "requirement",
          text: "The receiver requires the `googlecloudlogentry_encoding` encoding extension."
        }
      ],
      actions: [
        {
          instruction: "Use a `googlecloudpubsub` receiver and `otlp_http` exporter.",
          payloads: [
            {
              kind: "code",
              label: "Example collector configuration",
              language: "yaml",
              copyLabel: "Collector configuration",
              value: `extensions:
  googlecloudlogentry_encoding:

receivers:
  googlecloudpubsub:
    project: YOUR_GCP_PROJECT_ID
    subscription: projects/YOUR_GCP_PROJECT_ID/subscriptions/sazabi-logs-sub
    encoding: googlecloudlogentry_encoding

exporters:
  otlp_http:
    endpoint: https://\${context.ingestHost}

service:
  extensions: [googlecloudlogentry_encoding]
  pipelines:
    logs:
      receivers: [googlecloudpubsub]
      exporters: [otlp_http]`
            }
          ]
        }
      ]
    },
    {
      id: "run",
      section: "verify",
      title: "Run and verify",
      actions: [
        {
          instruction: "Deploy the collector, then write a test log entry in the project and check for delivery errors on the collector and Pub/Sub subscription."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/gcp/spec.ts
var gcpSensitiveFields = ["serviceAccountKey"];
var gcpIntakeDeclaration = {
  id: "gcp",
  label: "Google Cloud Platform",
  subdomain: "gcp",
  transform: "gcp-pubsub-push"
};
var gcpSpec = {
  id: "gcp",
  name: "GCP",
  searchAliases: ["google cloud", "google cloud platform", "gcloud"],
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["pull"],
  lifecycleEligible: true,
  sensitiveFields: gcpSensitiveFields,
  intake: [gcpIntakeDeclaration],
  subtitle: "Connect your GCP logs to Sazabi for AI-powered observability. Automatically provision log sinks with a service account, or run your own collector.",
  features: ["Log forwarding", "Real-time streaming", "Log sink support"],
  evidenceHints: [
    "Google Cloud Run, GKE, Cloud Functions, Pub/Sub, or Cloud Logging resources",
    "gcloud scripts, GOOGLE_CLOUD_PROJECT, GCLOUD_PROJECT, or Terraform google provider",
    "README/docs naming Google Cloud as the runtime or log provider"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "gcp",
    intakeSourceId: "gcp",
    streamSelectorLayout: "sidepanel",
    actions: {
      submit: {
        validate: {
          kind: "source-action",
          actionId: "validate-service-account-key"
        },
        preflight: {
          kind: "source-action",
          actionId: "run-preflight-checks",
          normalize: "preflight"
        }
      },
      list: {
        list: {
          kind: "source-action",
          actionId: "list-projects",
          itemsField: "projects"
        }
      }
    }
  }
};

// ../data-sources/src/sources/grafana-alloy/setup.ts
var ALLOY_RIVER = `otelcol.receiver.otlp "default" {
  grpc {}
  http {}

  output {
    logs   = [otelcol.processor.batch.default.input]
    traces = [otelcol.processor.batch.default.input]
  }
}

otelcol.processor.batch "default" {
  output {
    logs   = [otelcol.exporter.otlphttp.sazabi.input]
    traces = [otelcol.exporter.otlphttp.sazabi.input]
  }
}

otelcol.exporter.otlphttp "sazabi" {
  client {
    endpoint = "https://\${context.ingestHost}"
  }
}`;
var ALLOY_HELM = `alloy:
  configMap:
    content: |
      otelcol.receiver.otlp "default" {
        grpc {}
        http {}

        output {
          logs   = [otelcol.processor.batch.default.input]
          traces = [otelcol.processor.batch.default.input]
        }
      }

      otelcol.processor.batch "default" {
        output {
          logs   = [otelcol.exporter.otlphttp.sazabi.input]
          traces = [otelcol.exporter.otlphttp.sazabi.input]
        }
      }

      otelcol.exporter.otlphttp "sazabi" {
        client {
          endpoint = "https://\${context.ingestHost}"
        }
      }`;
var grafanaAlloyConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "copy-config",
      section: "config",
      title: "Copy Alloy pipeline",
      actions: [
        {
          instruction: "Add Sazabi as an OTLP HTTP exporter in your Alloy deployment.",
          payloads: [
            {
              kind: "code-tabs",
              label: "Alloy configuration",
              description: "Choose the snippet format that matches how you deploy Alloy.",
              tabs: [
                {
                  id: "river",
                  label: "`config.alloy`",
                  language: "hcl",
                  copyLabel: "Alloy config",
                  value: ALLOY_RIVER
                },
                {
                  id: "helm",
                  label: "Helm values",
                  language: "yaml",
                  copyLabel: "Alloy Helm values",
                  value: ALLOY_HELM
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "wire-receivers",
      section: "config",
      title: "Wire receivers",
      actions: [
        {
          instruction: "Replace `otelcol.receiver.otlp` with the OpenTelemetry receiver(s) that match your sources, such as `otelcol.receiver.filelog` for log files or `otelcol.receiver.jaeger` for Jaeger traces."
        },
        {
          instruction: "Ensure each upstream `otelcol.*` component lists `otelcol.processor.batch.default.input` in its `output` block to ship data to Sazabi."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/grafana-alloy/spec.ts
var grafanaAlloySpec = {
  id: "grafana_alloy",
  name: "Grafana Alloy",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual agent setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "grafana-alloy",
      label: "Grafana Alloy",
      subdomain: "grafana-alloy",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward logs and traces from your infrastructure to Sazabi using Grafana Alloy.",
  features: [
    "Kubernetes DaemonSet",
    "OpenTelemetry native",
    "Flexible River pipeline",
    "Logs and traces"
  ],
  evidenceHints: [
    "config.alloy, Grafana Alloy Helm values, or River pipeline config",
    "Alloy components that collect Kubernetes, Docker, logs, or traces",
    "README/docs naming Grafana Alloy or Grafana Agent for telemetry forwarding"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "grafana-alloy",
    intakeSourceId: "grafana-alloy"
  }
};

// ../data-sources/src/sources/inngest/setup.ts
var inngestConnectionless = {
  groups: [
    {
      id: "instrument",
      section: "config",
      title: "Instrument the host application",
      description: "Configure the application that serves your Inngest functions to export OpenTelemetry data.",
      actions: [...otelSetupActions("host application")]
    },
    {
      id: "redeploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Redeploy or restart the application that serves your Inngest functions, then invoke a function to generate fresh telemetry."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/inngest/spec.ts
var inngestSpec = {
  id: "inngest",
  name: "Inngest",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual SDK setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "inngest",
      label: "Inngest",
      subdomain: "inngest",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward your Inngest function logs directly to Sazabi for workflow observability.",
  features: ["Function logs", "Event tracing", "Step monitoring"],
  evidenceHints: [
    "inngest package imports, inngest/client files, or serve handlers",
    "INNGEST_* environment variables or functions under inngest/",
    "README/docs naming Inngest for background jobs, workflows, or event handling"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "inngest",
    intakeSourceId: "inngest"
  }
};

// ../data-sources/src/sources/langchain/setup.ts
var langchainOtlpEnvironmentAction = {
  instruction: "Set the following environment variables in your application environment so they are present when the process starts — `OTEL_EXPORTER_OTLP_ENDPOINT` is your intake URL (above).",
  payloads: [
    {
      kind: "copyable",
      label: "`OTEL_EXPORTER_OTLP_PROTOCOL`",
      value: "http/protobuf",
      copyLabel: "OTLP protocol"
    }
  ]
};
var langchainConnectionless = {
  groups: [
    {
      id: "install-initialize",
      section: "config",
      title: "Install and initialize OpenInference",
      description: "LangChain doesn't send OpenTelemetry traces on its own; OpenInference instruments it.",
      actions: [
        {
          instruction: "Install OpenInference for your LangChain runtime, then run the init snippet once at startup before importing LangChain.",
          payloads: [
            {
              kind: "options",
              options: [
                {
                  id: "python",
                  label: "Python",
                  description: "Install OpenInference and initialize tracing before importing LangChain.",
                  payloads: [
                    {
                      kind: "code",
                      label: "Python install command",
                      language: "bash",
                      copyLabel: "Python install command",
                      value: "pip install openinference-instrumentation-langchain \\\n  opentelemetry-sdk \\\n  opentelemetry-exporter-otlp-proto-http"
                    },
                    {
                      kind: "code",
                      label: "Python init snippet",
                      language: "python",
                      copyLabel: "Python init snippet",
                      value: `from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from openinference.instrumentation.langchain import LangChainInstrumentor

provider = TracerProvider(resource=Resource.create({"service.name": "my-langchain-app"}))
provider.add_span_processor(BatchSpanProcessor(OTLPSpanExporter()))
trace.set_tracer_provider(provider)

LangChainInstrumentor().instrument()`
                    }
                  ]
                },
                {
                  id: "typescript",
                  label: "TypeScript",
                  description: "Install OpenInference and wire the LangChain.js callbacks manager manually.",
                  payloads: [
                    {
                      kind: "code",
                      label: "TypeScript install command",
                      language: "bash",
                      copyLabel: "TypeScript install command",
                      value: "npm install @arizeai/openinference-instrumentation-langchain \\\n  @opentelemetry/sdk-trace-node \\\n  @opentelemetry/exporter-trace-otlp-proto \\\n  @langchain/core"
                    },
                    {
                      kind: "code",
                      label: "TypeScript init snippet",
                      language: "typescript",
                      copyLabel: "TypeScript init snippet",
                      value: `import { NodeTracerProvider, BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { Resource } from "@opentelemetry/resources";
import { LangChainInstrumentation } from "@arizeai/openinference-instrumentation-langchain";
import * as CallbackManagerModule from "@langchain/core/callbacks/manager";

const provider = new NodeTracerProvider({
  resource: new Resource({ "service.name": "my-langchain-app" }),
});
provider.addSpanProcessor(new BatchSpanProcessor(new OTLPTraceExporter()));
provider.register();

// LangChain.js has no traditional auto-instrumentable module structure, so the
// callbacks manager must be wired in by hand.
new LangChainInstrumentation().manuallyInstrument(CallbackManagerModule);`
                    }
                  ],
                  notes: [
                    {
                      text: "LangChain.js has no module structure that OpenInference can auto-instrument, so you wire in the callbacks manager by hand."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "environment",
      section: "config",
      title: "Set OTLP environment",
      description: "The OpenTelemetry SDK reads these variables automatically.",
      actions: [langchainOtlpEnvironmentAction]
    },
    {
      id: "verify",
      section: "verify",
      title: "Run and verify",
      actions: [
        {
          instruction: "Run a chain or agent invocation, then confirm traces arrive in Sazabi within a few minutes."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/langchain/spec.ts
var langchainSpec = {
  id: "langchain",
  name: "LangChain",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual SDK setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "langchain",
      label: "LangChain",
      subdomain: "langchain",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward LangChain traces to Sazabi for end-to-end LLM observability.",
  features: ["Chain tracing", "Tool & agent traces", "LLM call traces"],
  evidenceHints: [
    "langchain packages in Python or JavaScript dependencies",
    "LANGCHAIN_* environment variables or LangSmith tracing configuration",
    "Agent, chain, retriever, or tool code built on LangChain"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "langchain",
    intakeSourceId: "langchain"
  }
};

// ../data-sources/src/sources/mastra/setup.ts
var mastraConnectionless = {
  groups: [
    {
      id: "environment",
      section: "config",
      title: "Set intake URL",
      actions: [
        {
          instruction: "Set `SAZABI_INTAKE_URL` to your intake URL (above) in the application that initializes Mastra."
        }
      ]
    },
    {
      id: "configure",
      section: "config",
      title: "Configure Mastra",
      actions: [
        {
          instruction: "Add Sazabi as a custom OTEL exporter in your Mastra observability config.",
          payloads: [
            {
              kind: "code",
              label: "Configuration",
              language: "typescript",
              copyLabel: "TypeScript code",
              value: `// src/mastra/index.ts
import { Mastra } from "@mastra/core";
import { OtelExporter } from "@mastra/otel-exporter";
import { Observability } from "@mastra/observability";

export const mastra = new Mastra({
  observability: new Observability({
    configs: {
      default: {
        serviceName: "my-mastra-app",
        exporters: [
          new OtelExporter({
            provider: {
              custom: {
                endpoint: process.env.SAZABI_INTAKE_URL,
                protocol: "http/json",
              },
            },
          }),
        ],
      },
    },
  }),
  // Add your agents, tools, and workflows here
});

// Use your Mastra instance
const agent = mastra.getAgent("my-agent");
const response = await agent.generate("Hello, world!");`
            }
          ]
        }
      ]
    },
    {
      id: "redeploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Redeploy or restart the service, then run an agent, tool, or workflow to generate a trace."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/mastra/spec.ts
var mastraSpec = {
  id: "mastra",
  name: "Mastra",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual SDK setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "mastra",
      label: "Mastra",
      subdomain: "mastra",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Stream your Mastra agent traces directly to Sazabi for AI workflow observability.",
  features: ["Agent traces", "Tool tracing", "Workflow monitoring"],
  evidenceHints: [
    "@mastra packages, mastra.config files, or Mastra agent definitions",
    "MASTRA_* environment variables",
    "README/docs naming Mastra for agents, workflows, or LLM orchestration"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "mastra",
    intakeSourceId: "mastra"
  }
};

// ../data-sources/src/sources/neon/setup.ts
var neonConnectionless = {
  perStreamInstructions: true,
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/neon",
  groups: [
    {
      id: "open-integration",
      section: "config",
      title: "Open Neon integration",
      notes: [
        {
          text: "Neon's OpenTelemetry integration forwards Postgres logs to Sazabi."
        },
        {
          variant: "requirement",
          text: "The integration is available on Neon's **Scale** plan, and both the integration itself and Postgres logs export are currently in Beta."
        },
        {
          variant: "requirement",
          text: "You'll need admin access on the Neon project to add it."
        }
      ],
      actions: [
        {
          instruction: "Add Neon's OpenTelemetry integration for Postgres logs.",
          payloads: [
            {
              kind: "external-link",
              label: "Open Neon integrations",
              href: "https://console.neon.tech/app/projects",
              description: "Choose the Neon project you want to monitor, then open the project's **Integrations** page."
            }
          ]
        }
      ]
    },
    {
      id: "select-data",
      section: "config",
      title: "Select exported data",
      actions: [
        {
          instruction: "In **Select data to export**, enable `Postgres logs` and leave `Metrics` disabled. Neon does not expose a traces export for this integration."
        },
        {
          instruction: "Choose the `HTTP` protocol."
        },
        {
          instruction: "Configure authentication as `Bearer`. Neon adds the `Bearer` prefix to outgoing requests automatically."
        }
      ]
    },
    {
      id: "values",
      section: "config",
      title: "Set integration values",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the **OTLP endpoint URL** field, then paste these values into the Neon OpenTelemetry configuration sidebar.",
          payloads: [
            {
              kind: "copyable",
              label: "Connection protocol",
              value: "HTTP"
            },
            {
              kind: "copyable",
              label: "Data to export",
              value: "Postgres logs only"
            },
            {
              kind: "copyable",
              label: "Authentication method",
              value: "Bearer"
            },
            {
              kind: "copyable",
              label: "Bearer token value",
              value: "sazabi",
              copyLabel: "Neon bearer token value",
              description: "Neon requires a non-empty Bearer token, but Sazabi authenticates using the public key hex embedded in the endpoint hostname and ignores this value — any placeholder works."
            },
            {
              kind: "copyable",
              label: "`service.name` resource attribute",
              value: "neon-postgres",
              copyLabel: "Neon service.name value",
              description: "Optional but recommended — paste under **Resource attributes** in Neon. Change the suffix (e.g. `neon-postgres-prod`, `neon-checkout-db`) when you have more than one Neon project so streams stay easy to filter in Sazabi."
            }
          ]
        }
      ]
    },
    {
      id: "save",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the integration, then wait a few minutes for logs to start arriving; if the compute has Scale to Zero enabled and is currently suspended, run a query against the database to wake it and begin log delivery."
        },
        {
          instruction: "If logs do not arrive after a few minutes, check the Neon integration's status panel for OTLP export errors."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/neon/spec.ts
var neonSensitiveFields = [];
var neonSpec = {
  id: "neon",
  name: "Neon",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  sensitiveFields: neonSensitiveFields,
  lifecycleSkipReason: "Manual OTLP setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "neon",
      label: "Neon",
      subdomain: "neon",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward Neon Postgres logs to Sazabi for database observability without sending metrics or traces.",
  features: ["Postgres logs", "Connection events", "Error and warning logs"],
  evidenceHints: [
    "Neon connection strings, neon.tech hosts, or @neondatabase/serverless packages",
    "DATABASE_URL/POSTGRES_URL values documented as Neon",
    "README/docs naming Neon as the Postgres provider"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "neon",
    intakeSourceId: "neon"
  }
};

// ../data-sources/src/sources/netlify/setup.ts
var netlifyConnectionless = {
  groups: [
    {
      id: "open-form",
      section: "config",
      title: "Open log drain form",
      notes: [
        {
          variant: "requirement",
          text: "Log drains require a Netlify Enterprise plan."
        }
      ],
      actions: [
        {
          instruction: "Configure a log drain in your [Netlify site settings](https://app.netlify.com) under **Logs & Metrics > Log Drains**."
        },
        {
          instruction: "Select **General HTTP endpoint** as the service."
        }
      ]
    },
    {
      id: "values",
      section: "config",
      title: "Set drain values",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the **Full URL** field, and set the log drain format below.",
          payloads: [
            {
              kind: "copyable",
              label: "Log drain format",
              value: "JSON"
            }
          ]
        }
      ]
    },
    {
      id: "save",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the drain, then deploy or request the site so Netlify emits fresh logs."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/netlify"
};

// ../data-sources/src/sources/netlify/spec.ts
var netlifySpec = {
  id: "netlify",
  name: "Netlify",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual drain setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "netlify",
      label: "Netlify",
      subdomain: "netlify",
      transform: "netlify-drain"
    }
  ],
  subtitle: "Forward your Netlify deployment logs directly to Sazabi for Jamstack observability.",
  features: ["Build logs", "Function logs", "Edge handler logs"],
  evidenceHints: [
    "netlify.toml, .netlify/, or Netlify build/deploy scripts",
    "NETLIFY_* environment variables or functions under netlify/functions",
    "README/docs naming Netlify as the deployment host"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "netlify",
    intakeSourceId: "netlify"
  }
};

// ../data-sources/src/sources/openrouter/setup.ts
var openrouterConnectionless = {
  groups: [
    {
      id: "open-form",
      section: "config",
      title: "Open observability settings",
      actions: [
        {
          instruction: "In the OpenRouter dashboard, open **Settings > Observability**, toggle **Enable Broadcast** on, then click the edit icon next to **OpenTelemetry Collector**.",
          payloads: [
            {
              kind: "external-link",
              label: "Settings > Observability",
              href: "https://openrouter.ai/settings/observability"
            }
          ]
        }
      ]
    },
    {
      id: "values",
      section: "config",
      title: "Set destination values",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the **Endpoint** field of the OpenTelemetry Collector destination form."
        }
      ]
    },
    {
      id: "test",
      section: "verify",
      title: "Test and save",
      description: "OpenRouter saves the destination only after a successful connection test.",
      actions: [
        {
          instruction: "Click **Test Connection** to verify Sazabi accepts the trace.",
          notes: [
            {
              text: "A green check confirms forwarding is enabled."
            }
          ]
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/openrouter"
};

// ../data-sources/src/sources/openrouter/spec.ts
var openrouterSpec = {
  id: "openrouter",
  name: "OpenRouter",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "OpenRouter Broadcast destination setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "openrouter",
      label: "OpenRouter",
      subdomain: "openrouter",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward OpenRouter trace spans to Sazabi from the OpenRouter dashboard.",
  features: [
    "Trace spans per generation",
    "Token & cost tracking",
    "Model & provider attribution"
  ],
  evidenceHints: [
    "OpenRouter API URLs, OPENROUTER_* environment variables, or openrouter packages",
    "LLM gateway code sending requests to openrouter.ai",
    "README/docs naming OpenRouter for model routing or tracing"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "openrouter",
    intakeSourceId: "openrouter"
  }
};

// ../data-sources/src/sources/otel/setup.ts
var otelConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "instrument",
      section: "config",
      title: "Instrument application",
      notes: [
        {
          text: "Metrics sent to the endpoint aren't stored yet."
        }
      ],
      actions: [
        {
          instruction: "Add the OpenTelemetry SDK to your application. Most languages have official SDKs available (e.g., `@opentelemetry/api` for Node.js, `opentelemetry-api` for Python, etc.)."
        },
        {
          instruction: "Initialize the OpenTelemetry SDK in your application and configure the OTLP exporters for the signals you want (logs and/or traces)."
        }
      ]
    },
    {
      id: "environment",
      section: "config",
      title: "Set OTLP environment",
      actions: [
        {
          instruction: "Set these variables in the environment that runs your application — `OTEL_EXPORTER_OTLP_ENDPOINT` is your intake URL (above).",
          payloads: [
            {
              kind: "copyable",
              label: "`OTEL_EXPORTER_OTLP_PROTOCOL`",
              value: "http/protobuf",
              copyLabel: "OTLP protocol"
            }
          ],
          notes: [
            {
              text: "These variables work with any OpenTelemetry SDK (Node.js, Python, Go, Java, .NET, etc.)."
            }
          ]
        }
      ]
    },
    {
      id: "redeploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Restart or redeploy the application, then generate a test log or trace to confirm Sazabi receives telemetry."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/otel/spec.ts
var otelTraceIntakeDeclaration = {
  id: "otel-trace",
  label: "OpenTelemetry Traces",
  subdomain: "otel-trace",
  aliases: ["mastra", "otlp-trace", "otlp-traces", "otel-traces"],
  transform: "otlp-traces-only"
};
var otelSpec = {
  id: "otel",
  name: "OpenTelemetry",
  searchAliases: ["otel", "open telemetry"],
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "otel",
      label: "OpenTelemetry",
      subdomain: "otel",
      aliases: ["gcl", "otlp"],
      transform: "otlp-passthrough"
    },
    otelTraceIntakeDeclaration
  ],
  lifecycleSkipReason: "Manual OTLP setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Send OpenTelemetry logs and traces directly to Sazabi's OTLP-compatible intake for AI-powered observability.",
  features: ["OTLP log export", "OTLP trace export", "Any OTEL SDK"],
  evidenceHints: [
    "@opentelemetry packages, opentelemetry-* SDKs, or OTEL_* environment variables",
    "OTLP exporter configuration in application code or deployment manifests",
    "Existing OpenTelemetry instrumentation without a more specific Sazabi source"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    slug: "opentelemetry",
    iconKey: "opentelemetry",
    intakeSourceId: "otel"
  }
};

// ../data-sources/src/sources/otel-collector/setup.ts
var COLLECTOR_YAML = `exporters:
  otlphttp/sazabi:
    endpoint: "https://\${context.ingestHost}"

service:
  pipelines:
    logs:
      receivers: [filelog]
      processors: [batch]
      exporters: [otlphttp/sazabi]
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlphttp/sazabi]`;
var COLLECTOR_HELM = `config:
  exporters:
    otlphttp/sazabi:
      endpoint: "https://\${context.ingestHost}"
  service:
    pipelines:
      logs:
        receivers: [filelog]
        processors: [batch]
        exporters: [otlphttp/sazabi]
      traces:
        receivers: [otlp]
        processors: [batch]
        exporters: [otlphttp/sazabi]`;
var otelCollectorConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "copy-config",
      section: "config",
      title: "Copy Collector config",
      actions: [
        {
          instruction: "Add the Sazabi exporter and include it in the logs and traces pipelines.",
          payloads: [
            {
              kind: "code-tabs",
              label: "Collector configuration",
              description: "Choose the snippet format that matches how you deploy the Collector.",
              tabs: [
                {
                  id: "yaml",
                  label: "`otelcol.yaml`",
                  language: "yaml",
                  copyLabel: "Collector config",
                  value: COLLECTOR_YAML
                },
                {
                  id: "helm",
                  label: "Helm values",
                  language: "yaml",
                  copyLabel: "Collector Helm values",
                  value: COLLECTOR_HELM
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "adjust-pipelines",
      section: "config",
      title: "Adjust pipelines",
      actions: [
        {
          instruction: "Match the receivers to the sources you have configured.",
          notes: [
            {
              text: "The `filelog` receiver collects container logs on Kubernetes; the `otlp` receiver accepts spans from instrumented services."
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/otel-collector/spec.ts
var otelCollectorSpec = {
  id: "otel_collector",
  name: "OpenTelemetry Collector",
  searchAliases: ["otel", "otel collector", "open telemetry collector"],
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual agent setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "otel-collector",
      label: "OpenTelemetry Collector",
      subdomain: "otel-collector",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward logs and traces from your infrastructure to Sazabi using the OpenTelemetry Collector.",
  features: [
    "Kubernetes DaemonSet",
    "Vendor-neutral standard",
    "Extensible via contrib",
    "Logs and traces"
  ],
  evidenceHints: [
    "otelcol, opentelemetry-collector, or collector config YAML",
    "Kubernetes DaemonSets or Helm values for OpenTelemetry Collector",
    "OTLP receiver/exporter pipelines that can add a Sazabi exporter"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "otel-collector",
    intakeSourceId: "otel-collector"
  }
};

// ../data-sources/src/sources/otel-metrics/setup.ts
var otelMetricsConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "instrument",
      section: "config",
      title: "Instrument application",
      notes: [
        {
          text: "Sazabi stores each incoming metric data point as a log record, so you can search metrics alongside your logs and traces and line them up with each other."
        }
      ],
      actions: [
        {
          instruction: "Add or enable the OpenTelemetry metrics SDK in your application, or configure the OTLP metrics exporter on your OpenTelemetry Collector."
        }
      ]
    },
    {
      id: "environment",
      section: "config",
      title: "Set OTLP metrics environment",
      actions: [
        {
          instruction: "Set these variables in the environment that runs your application or Collector — `OTEL_EXPORTER_OTLP_METRICS_ENDPOINT` is your intake URL (above).",
          payloads: [
            {
              kind: "copyable",
              label: "`OTEL_EXPORTER_OTLP_PROTOCOL`",
              value: "http/protobuf",
              copyLabel: "OTLP protocol"
            }
          ],
          notes: [
            {
              text: "These variables work with any OpenTelemetry SDK or Collector that exports OTLP metrics."
            }
          ]
        }
      ]
    },
    {
      id: "redeploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Restart or redeploy, then generate a metric to confirm Sazabi receives it as a log record."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/otel-metrics/spec.ts
var otelMetricsSpec = {
  id: "otel_metrics",
  name: "OpenTelemetry Metrics",
  searchAliases: [
    "otel metrics",
    "opentelemetry metrics",
    "otlp metrics",
    "metrics as logs"
  ],
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "otel-metrics",
      label: "OpenTelemetry Metrics",
      subdomain: "otel-metrics",
      aliases: ["otlp-metrics"],
      transform: "otlp-metrics-as-logs"
    }
  ],
  lifecycleSkipReason: "Manual OTLP metrics setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Send OpenTelemetry metrics to Sazabi's OTLP intake and store them as searchable log records.",
  features: [
    "OTLP metric export",
    "Metrics stored as log records",
    "Any OTEL SDK or Collector"
  ],
  evidenceHints: [
    "OTLP metric exporters (OTEL_EXPORTER_OTLP_METRICS_* env vars) without a metrics backend",
    "OpenTelemetry metrics instrumentation routed to a generic OTLP endpoint",
    "A desire to query metrics alongside logs and traces in one place"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    slug: "opentelemetry-metrics",
    iconKey: "opentelemetry-metrics",
    intakeSourceId: "otel-metrics"
  }
};

// ../data-sources/src/sources/plain/setup.ts
var plainManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "prepare",
      title: "Create API key",
      actions: [
        {
          kind: "instruction",
          instruction: "In Plain, open **Settings → API keys** and create a machine user API key.",
          payloads: [
            {
              kind: "external-link",
              label: "Open Plain API key settings",
              href: "https://app.plain.com/settings/api-keys"
            }
          ]
        },
        {
          kind: "instruction",
          instruction: "Grant the key these permissions: `webhookTarget:create`, `webhookTarget:edit`, `webhookTarget:delete`, `webhookTarget:read`, and `subscriptionEventTypes:read`. Workspace read access is included with every key."
        }
      ]
    },
    {
      id: "credentials",
      title: "Enter API key",
      actions: [
        {
          id: "apiKey",
          kind: "secret",
          label: "Plain API key",
          instruction: "Enter your Plain API key below.",
          description: "Machine user API key with webhookTarget and subscriptionEventTypes permissions.",
          placeholder: "plainApiKey_..."
        }
      ]
    }
  ],
  submit: {
    actions: [
      {
        kind: "validate",
        action: "validate",
        input: { apiKey: "$apiKey" },
        resultAs: "workspace"
      }
    ],
    metadata: {
      plainApiKey: "$apiKey"
    },
    displayName: "$workspace.workspaceName",
    button: CONNECT_BUTTON
  },
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/plain"
};
var plainConnectionless = {
  groups: [
    {
      id: "open-webhooks",
      section: "config",
      title: "Open Plain webhooks",
      actions: [
        {
          instruction: "In your [Plain workspace](https://app.plain.com/settings/webhooks), go to **Settings > Webhooks** and click **Create webhook target**.",
          notes: [
            {
              text: "You configure and own this webhook target — you choose which event types it subscribes to in Plain. Sazabi never receives a Plain API key on this path and does not create, edit, or delete the target. To have Sazabi enumerate event types and manage the webhook target for you, connect your Plain account instead."
            }
          ]
        }
      ]
    },
    {
      id: "endpoint",
      section: "config",
      title: "Set webhook URL",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the webhook target configuration."
        },
        {
          instruction: "Enable the target and select the event types you want to forward."
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the webhook target, then trigger a subscribed event in Plain (for example create or update a thread). Events appear in Sazabi within a few minutes."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/plain"
};
var plainStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}" },
    columns: [
      { field: "eventType", header: "Event type", cell: "mono" },
      { field: "description", header: "Description", cell: "muted" }
    ],
    searchPlaceholder: "Search event types...",
    searchFields: ["eventType", "description"],
    dedupeByConfigField: "eventType",
    dedupeExpandArrayField: "eventTypes",
    aggregateSelection: {
      displayName: "Plain events",
      itemField: "eventType",
      configField: "eventTypes"
    },
    emptyState: {
      noMatches: "No event types found.",
      allConfigured: "All Plain event types already have streams configured.",
      noItems: "Plain returned no subscribable event types for this API key. Confirm the key has subscriptionEventTypes:read permission."
    },
    toStreamItem: {
      displayName: "$item.eventType",
      config: {
        eventType: "$item.eventType"
      }
    }
  }
};

// ../data-sources/src/sources/plain/spec.ts
var plainSensitiveFields = ["plainApiKey"];
var plainIntakeDeclaration = {
  id: "plain",
  label: "Plain",
  subdomain: "plain",
  transform: "plain-webhook"
};
var plainSpec = {
  id: "plain",
  name: "Plain",
  searchAliases: ["plain.com", "plain support", "plain customer support"],
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: false,
  lifecycleSkipReason: "No automated integration fixture yet: Plain has no sandbox workspace API for minting disposable API keys and webhook targets in CI.",
  sensitiveFields: plainSensitiveFields,
  intake: [plainIntakeDeclaration],
  subtitle: "Stream Plain customer support events into Sazabi for unified observability of your support workflows.",
  features: [
    "Webhook event streaming",
    "Multi-event webhook targets",
    "Thread and customer activity"
  ],
  evidenceHints: [
    "@team-plain/typescript-sdk usage or PLAIN_API_KEY environment variables",
    "core-api.uk.plain.com GraphQL calls or Plain webhook handlers",
    "README/docs naming Plain for customer support, tickets, or threads"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "plain",
    intakeSourceId: "plain",
    streamSelectorLayout: "sidepanel",
    streamTableColumns: [
      {
        kind: "config-text",
        header: "Event types",
        width: "w-96",
        configField: "eventTypes",
        fallbackLabel: "Unknown events"
      }
    ],
    actions: {
      submit: {
        validate: {
          kind: "source-action",
          actionId: "validate",
          sensitiveInputFields: ["apiKey"]
        }
      },
      list: {
        list: {
          kind: "source-action",
          actionId: "list-event-types",
          itemsField: "eventTypes"
        }
      }
    }
  }
};

// ../data-sources/src/sources/porter/setup.ts
var porterConnectionless = {
  groups: [
    {
      id: "send-telemetry",
      section: "config",
      title: "Send OpenTelemetry",
      actions: [
        {
          instruction: "Send OTLP telemetry to Sazabi directly from your app, or from a collector running in Porter.",
          payloads: [
            {
              kind: "external-link",
              label: "Open Porter dashboard",
              href: "https://dashboard.porter.run"
            }
          ],
          notes: [
            {
              text: "Porter does not provide a generic log drain."
            }
          ]
        }
      ]
    },
    {
      id: "configure-exporter",
      section: "config",
      title: "Configure the exporter",
      actions: [
        {
          instruction: "Set these environment variables on the Porter service you want to monitor.",
          payloads: [
            {
              kind: "code",
              label: "Porter environment variables",
              description: "Porter injects the `PORTER_*` values from its app and deployment metadata at runtime. The keyed endpoint URL embeds your project key, so no auth header is needed.",
              language: "bash",
              value: `OTEL_EXPORTER_OTLP_ENDPOINT=https://\${context.ingestHost}
OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
OTEL_SERVICE_NAME=$PORTER_APP_SERVICE_NAME
OTEL_RESOURCE_ATTRIBUTES=service.version=$PORTER_IMAGE_TAG,porter.revision=$PORTER_POD_REVISION,porter.pod.name=$PORTER_POD_NAME`,
              copyLabel: "Porter environment variables"
            }
          ],
          notes: [
            {
              text: "You can also put shared values in a Porter environment group."
            }
          ]
        },
        {
          instruction: "Install the OpenTelemetry SDK if your app does not already initialize OpenTelemetry.",
          payloads: [
            {
              kind: "code-tabs",
              label: "Install the OpenTelemetry SDK",
              tabs: [
                {
                  id: "node",
                  label: "Node.js",
                  language: "bash",
                  value: "bun add @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-proto @opentelemetry/exporter-logs-otlp-proto @opentelemetry/sdk-logs",
                  copyLabel: "Node.js OpenTelemetry install"
                },
                {
                  id: "python",
                  label: "Python",
                  language: "bash",
                  value: `pip install opentelemetry-distro opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install

# Porter start command example:
opentelemetry-instrument python app.py`,
                  copyLabel: "Python OpenTelemetry bootstrap"
                }
              ]
            }
          ],
          notes: [
            {
              text: "For other runtimes, initialize OpenTelemetry before the app handles requests, or run an OpenTelemetry Collector, Vector, or Fluent Bit service in Porter."
            }
          ]
        },
        {
          instruction: "Add the `instrumentation.cjs` below, then load it from your **start command** only, for example `NODE_OPTIONS='--require ./instrumentation.cjs' node server.js`. Do not set a global `NODE_OPTIONS` environment variable: it also applies during build and install, where the relative `--require` path resolves from inside `node_modules/<pkg>/` and breaks dependency postinstall scripts. If your platform forces an env var, use an absolute path such as `--require /workspace/instrumentation.cjs`.",
          payloads: [
            {
              kind: "code",
              label: "Node.js: instrumentation.cjs",
              description: 'Wires up both the trace and log exporters. `@opentelemetry/auto-instrumentations-node/register` configures traces only, so the installed logs exporter would otherwise never be used and logs would silently not flow. The exporters read the `OTEL_EXPORTER_OTLP_*` env vars above at runtime. Use the `.cjs` extension so the file loads as CommonJS even when your app\'s `package.json` sets `"type": "module"`.',
              language: "javascript",
              value: `// instrumentation.cjs
const { NodeSDK } = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-proto");
const {
  OTLPLogExporter,
} = require("@opentelemetry/exporter-logs-otlp-proto");
const { BatchLogRecordProcessor } = require("@opentelemetry/sdk-logs");

try {
  const sdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter(),
    logRecordProcessors: [new BatchLogRecordProcessor(new OTLPLogExporter())],
    instrumentations: [getNodeAutoInstrumentations()],
  });
  sdk.start();
  // Flush telemetry on shutdown. Do not call process.exit() here - let your
  // app own when the process exits so its own graceful shutdown can finish.
  process.on("SIGTERM", () => {
    void sdk.shutdown();
  });
} catch (err) {
  console.error("OpenTelemetry initialization failed", err);
}`,
              copyLabel: "Node.js instrumentation.cjs",
              collapsible: true
            }
          ]
        },
        {
          instruction: "Redeploy the Porter service, then generate a request or test log line."
        },
        {
          instruction: "Return to Sazabi and check for incoming logs or traces. If nothing appears, check the Porter logs for OpenTelemetry exporter errors."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/porter/spec.ts
var porterSpec = {
  id: "porter",
  name: "Porter",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleEligible: false,
  lifecycleSkipReason: "Manual OTEL setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "porter",
      label: "Porter",
      subdomain: "porter",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward your Porter application logs and traces directly to Sazabi for real-time monitoring.",
  features: ["Application logs", "Deployment logs", "Service monitoring"],
  evidenceHints: [
    "porter.yaml or .github/workflows/porter.yml",
    "PORTER_* environment variables",
    "README/docs naming Porter (porter.run) as the deploy host"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "porter",
    intakeSourceId: "porter"
  }
};

// ../data-sources/src/sources/posthog/setup.ts
var posthogManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "prepare",
      title: "Create key",
      actions: [
        {
          kind: "instruction",
          instruction: "Create a personal API key in your PostHog account under **Settings > Personal API keys** ([US](https://us.posthog.com/settings/user-api-keys) · [EU](https://eu.posthog.com/settings/user-api-keys))."
        },
        {
          kind: "instruction",
          instruction: "Grant it these scopes:\n\n- `project:read` - list your projects\n- `organization:read` - show your organization\n- `hog_function:write` - install the webhook destination"
        }
      ]
    },
    {
      id: "credentials",
      title: "Enter API key",
      actions: [
        {
          id: "token",
          kind: "secret",
          label: "Personal API key",
          instruction: "Enter your personal API key below.",
          placeholder: "phx_..."
        }
      ]
    }
  ],
  submit: {
    actions: [
      {
        kind: "validate",
        action: "validate",
        input: { token: "$token" },
        resultAs: "validate"
      },
      {
        kind: "preflight",
        action: "preflight",
        input: {
          token: "$token",
          region: "$validate.posthogApiRegion",
          organizationId: "$validate.posthogOrganizationId"
        }
      }
    ],
    metadata: {
      posthogPersonalApiKey: "$token",
      posthogApiRegion: "$validate.posthogApiRegion",
      posthogOrganizationId: "$validate.posthogOrganizationId",
      posthogOrganizationName: "$validate.posthogOrganizationName"
    },
    button: CONNECT_BUTTON
  },
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/posthog"
};
var POSTHOG_STREAM_COLUMNS = [
  { field: "name", header: "Project" },
  {
    field: "organizationName",
    header: "Organization",
    width: "w-48",
    transform: "fallback: - "
  }
];
var posthogStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}" },
    columns: POSTHOG_STREAM_COLUMNS,
    searchPlaceholder: "Search projects...",
    searchFields: ["name", "organizationName"],
    dedupeByConfigField: "posthogProjectId",
    emptyState: {
      noMatches: "No projects found.",
      allConfigured: "All projects already have PostHog destinations configured."
    },
    toStreamItem: {
      displayName: "$item.name",
      config: {
        posthogProjectId: "$item.id",
        posthogProjectName: "$item.name"
      }
    }
  }
};
var posthogConnectionless = {
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/posthog",
  groups: [
    {
      id: "prepare",
      section: "config",
      title: "Open destination form",
      actions: [
        {
          instruction: "Configure an [HTTP Webhook destination](https://${context.posthogRegion}.posthog.com/pipeline/new/hog-template-webhook) in PostHog under **Data Pipeline > Destinations**."
        }
      ]
    },
    {
      id: "values",
      section: "config",
      title: "Set destination values",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the **Destination URL** field, then set these values in the PostHog HTTP Webhook destination form.",
          payloads: [
            {
              kind: "copyable",
              label: "Method",
              value: "POST"
            },
            {
              kind: "code",
              label: "Body template",
              language: "json",
              copyLabel: "Body template",
              value: `{
  "event": "{event}",
  "person": "{person}"
}`
            }
          ]
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the PostHog destination, send a test event, and check Sazabi for the incoming product event."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/posthog/spec.ts
var posthogSensitiveFields = ["posthogPersonalApiKey"];
var posthogIntakeDeclaration = {
  id: "posthog",
  label: "PostHog",
  subdomain: "posthog",
  transform: "posthog-cdp"
};
var posthogSpec = {
  id: "posthog",
  name: "PostHog",
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  sensitiveFields: posthogSensitiveFields,
  intake: [posthogIntakeDeclaration],
  subtitle: "Forward your PostHog events directly to Sazabi for real-time product and error observability.",
  features: [
    "CDP webhook forwarding",
    "Event property mapping",
    "Real-time streaming"
  ],
  evidenceHints: [
    "posthog-js, posthog-node, or posthog-python packages",
    "POSTHOG_* or NEXT_PUBLIC_POSTHOG_* environment variables",
    "README/docs naming PostHog for product analytics, feature flags, or session replay"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "posthog",
    intakeSourceId: "posthog",
    streamSelectorLayout: "sidepanel",
    actions: {
      submit: {
        validate: {
          kind: "source-action",
          actionId: "validate-personal-api-key",
          sensitiveInputFields: ["token"]
        },
        preflight: {
          kind: "source-action",
          actionId: "run-preflight-checks",
          normalize: "preflight",
          sensitiveInputFields: ["token"]
        }
      },
      list: {
        list: {
          kind: "source-action",
          actionId: "list-projects",
          itemsField: "projects"
        }
      }
    }
  }
};

// ../data-sources/src/sources/posthog-sdk/setup.ts
var posthogSdkConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "plan-proxy",
      section: "config",
      title: "Plan reverse proxy",
      actions: [
        {
          instruction: "Configure posthog-js to use a reverse proxy as `api_host`."
        },
        {
          instruction: "Send capture paths (`/e/`, `/i/`, `/s/`) to Sazabi, and send PostHog config, flags, and assets to PostHog.",
          notes: [
            {
              text: "Session replay is controlled by your PostHog project settings, not a `posthog.init` option."
            }
          ]
        }
      ]
    },
    {
      id: "target",
      section: "config",
      title: "Set capture target",
      actions: [
        {
          instruction: "Use your Sazabi intake URL (above) as the upstream destination for capture-path proxy rules."
        }
      ]
    },
    {
      id: "initialize",
      section: "config",
      title: "Initialize posthog-js",
      actions: [
        {
          instruction: "Point posthog-js at your reverse proxy path.",
          payloads: [
            {
              kind: "code-tabs",
              label: "Initialize posthog-js",
              tabs: [
                {
                  id: "javascript",
                  label: "JavaScript",
                  language: "javascript",
                  copyLabel: "JavaScript",
                  value: `import posthog from "posthog-js";

posthog.init("<your phc_* project token>", {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
});`
                },
                {
                  id: "nextjs",
                  label: "Next.js",
                  language: "typescript",
                  copyLabel: "Next.js",
                  value: `"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}`
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "rewrites",
      section: "config",
      title: "Configure rewrites",
      notes: [
        {
          text: "On Next.js, set `skipTrailingSlashRedirect: true`. Otherwise Next.js sends a 308 redirect on the trailing-slash capture paths, and they stop matching the Sazabi rule."
        }
      ],
      actions: [
        {
          instruction: "Route capture paths to Sazabi and all other PostHog paths back to PostHog.",
          payloads: [
            {
              kind: "code",
              label: "Next.js rewrites",
              language: "typescript",
              copyLabel: "Next.js rewrites",
              value: `// next.config.ts
import type { NextConfig } from "next";

const config: NextConfig = {
  // posthog-js posts to trailing-slash capture paths (/e/, /i/v0/e/, /s/). Without
  // this, Next.js 308-redirects them to the slash-less path, which no longer matches
  // the capture rule below and falls through to PostHog.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path((?:e|i|s)/.*)",
        destination: "https://\${context.ingestHost}/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
};

export default config;`
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/posthog-sdk/spec.ts
var posthogSdkSensitiveFields = [];
var posthogSdkSpec = {
  id: "posthog_sdk",
  name: "PostHog SDK",
  searchAliases: ["posthog", "post hog"],
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "posthog-sdk",
      label: "PostHog SDK",
      subdomain: "posthog-sdk",
      transform: "posthog-sdk"
    }
  ],
  lifecycleSkipReason: "Manual SDK setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Forward PostHog SDK analytics and session replay to Sazabi by repointing posthog-js api_host.",
  features: ["Session replay forwarding", "Event capture", "SDK integration"],
  evidenceHints: [
    "posthog-js browser SDK initialization with api_host or capture options",
    "NEXT_PUBLIC_POSTHOG_* browser environment variables",
    "Frontend session replay or product analytics setup that should be proxied through Sazabi"
  ],
  sensitiveFields: posthogSdkSensitiveFields,
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "posthog",
    intakeSourceId: "posthog-sdk"
  }
};

// ../data-sources/src/sources/prometheus/setup.ts
var COLLECTOR_CONFIG = `receivers:
  prometheus:
    config:
      scrape_configs:
        - job_name: sazabi
          scrape_interval: 30s
          static_configs:
            - targets: ["localhost:9090"]

exporters:
  otlphttp/sazabi:
    metrics_endpoint: https://\${context.ingestHost}/v1/metrics
    headers:
      Authorization: "Bearer \${context.publicKey}"

service:
  pipelines:
    metrics:
      receivers: [prometheus]
      exporters: [otlphttp/sazabi]`;
var prometheusConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "collector-config",
      section: "config",
      title: "Export metrics through the OpenTelemetry Collector",
      notes: [
        {
          variant: "requirement",
          text: "Requires the OpenTelemetry Collector (Contrib distribution) with the `prometheus` receiver and `otlphttp` exporter."
        },
        {
          text: "Sazabi ingests each metric data point as a searchable log record, so there are no dashboards to configure."
        }
      ],
      actions: [
        {
          instruction: "Prometheus does not speak OTLP directly, so run an OpenTelemetry Collector that scrapes your Prometheus targets and forwards the metrics to Sazabi.",
          payloads: [
            {
              kind: "code",
              label: "Collector configuration",
              language: "yaml",
              copyLabel: "OpenTelemetry Collector configuration for Prometheus",
              description: "Point `scrape_configs.static_configs.targets` at your existing Prometheus targets or scrape endpoints.",
              value: COLLECTOR_CONFIG
            }
          ]
        }
      ]
    },
    {
      id: "restart",
      section: "verify",
      title: "Restart and verify",
      actions: [
        {
          instruction: "Restart or redeploy the Collector so the new metrics pipeline is loaded."
        },
        {
          instruction: "If metrics do not appear after restart, check the Collector logs for TLS, DNS, or authorization errors, and confirm the exporter posts to `/v1/metrics` with a valid Bearer public key."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/prometheus/spec.ts
var prometheusSpec = {
  id: "prometheus",
  name: "Prometheus",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "prometheus",
      label: "Prometheus",
      subdomain: "prometheus",
      transform: "otlp-metrics-as-logs"
    }
  ],
  lifecycleSkipReason: "Manual agent setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Forward Prometheus metrics to Sazabi as searchable log records via the OpenTelemetry Collector.",
  features: [
    "Metrics as log records",
    "OpenTelemetry Collector export",
    "Labels preserved as attributes",
    "No dashboards to maintain"
  ],
  searchAliases: [
    "prom",
    "promql",
    "prometheus operator",
    "otel collector prometheus"
  ],
  evidenceHints: [
    "prometheus.yml scrape_configs or an existing Prometheus server",
    "ServiceMonitor / PodMonitor CRDs or prometheus-operator / kube-prometheus-stack",
    "/metrics scrape endpoints forwarded through an OpenTelemetry Collector"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    slug: "prometheus",
    iconKey: "prometheus",
    intakeSourceId: "prometheus"
  }
};

// ../data-sources/src/sources/railway/setup.ts
var RAILWAY_RAW_EDITOR_VARIABLES = "OTEL_EXPORTER_OTLP_ENDPOINT=https://${context.ingestHost}\nOTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf\nOTEL_SERVICE_NAME=${{RAILWAY_SERVICE_NAME}}\nOTEL_RESOURCE_ATTRIBUTES=deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}";
var NODE_BOOTSTRAP = `bun add @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-proto @opentelemetry/exporter-logs-otlp-proto

# Railway variable or start-command prefix:
NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"`;
var PYTHON_BOOTSTRAP = `pip install opentelemetry-distro opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install

# Railway start command example:
opentelemetry-instrument python app.py`;
var railwayEnvironmentAction = {
  instruction: "Add these variables in the Railway service Variables page — `OTEL_EXPORTER_OTLP_ENDPOINT` is your intake URL (above).",
  payloads: [
    {
      kind: "code",
      label: "Railway Raw Editor variables",
      description: "Railway fills in the `${{...}}` references from its own service and deployment metadata.",
      language: "bash",
      value: RAILWAY_RAW_EDITOR_VARIABLES,
      copyLabel: "Railway environment variables"
    },
    {
      kind: "copyable",
      label: "`OTEL_EXPORTER_OTLP_PROTOCOL`",
      value: "http/protobuf",
      copyLabel: "OTLP protocol"
    },
    {
      kind: "copyable",
      label: "`OTEL_SERVICE_NAME`",
      value: "${{RAILWAY_SERVICE_NAME}}",
      copyLabel: "OTEL service name"
    },
    {
      kind: "copyable",
      label: "`OTEL_RESOURCE_ATTRIBUTES`",
      value: "deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}",
      copyLabel: "OTEL resource attributes"
    }
  ]
};
var railwayConnectionless = {
  groups: [
    {
      id: "prepare",
      section: "config",
      title: "Prepare service",
      actions: [
        {
          instruction: "Set up each Railway service you want to monitor so the application sends OpenTelemetry data directly to Sazabi.",
          payloads: [
            {
              kind: "external-link",
              label: "Open Railway dashboard",
              href: "https://railway.com/dashboard"
            }
          ],
          notes: [
            {
              text: "Railway has no managed external OTLP drain. If you cannot add the SDK, run a log forwarder such as Vector or Fluent Bit as its own Railway service and point it at the same OTLP endpoint."
            }
          ]
        }
      ]
    },
    {
      id: "environment",
      section: "config",
      title: "Set Railway variables",
      actions: [railwayEnvironmentAction]
    },
    {
      id: "bootstrap",
      section: "config",
      title: "Bootstrap the runtime",
      actions: [
        {
          instruction: "Install the OpenTelemetry packages for your runtime and load auto-instrumentation at startup.",
          payloads: [
            {
              kind: "code-tabs",
              tabs: [
                {
                  id: "node",
                  label: "Node.js",
                  language: "bash",
                  value: NODE_BOOTSTRAP,
                  copyLabel: "Node.js OpenTelemetry bootstrap"
                },
                {
                  id: "python",
                  label: "Python",
                  language: "bash",
                  value: PYTHON_BOOTSTRAP,
                  copyLabel: "Python OpenTelemetry bootstrap"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "deploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Review and deploy the staged variable change set when prompted, then send some traffic to the service.",
          notes: [
            {
              text: "If nothing appears, check the Railway deployment logs for OpenTelemetry exporter errors and confirm your app is sending through OpenTelemetry, not only to stdout."
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/railway/spec.ts
var railwaySpec = {
  id: "railway",
  name: "Railway",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual drain setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "railway",
      label: "Railway",
      subdomain: "railway",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward your Railway deployment logs directly to Sazabi for real-time monitoring.",
  features: ["Log drains", "Deployment logs", "Service monitoring"],
  evidenceHints: [
    "railway.json, railway.toml, or Railway deploy scripts",
    "RAILWAY_* environment variables",
    "README/docs naming Railway as the deploy host"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "railway",
    intakeSourceId: "railway"
  }
};

// ../data-sources/src/sources/render/setup.ts
var renderManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "credentials",
      title: "Enter API key",
      actions: [
        {
          kind: "instruction",
          instruction: "Create an API key in your [Render dashboard](https://dashboard.render.com/settings#api-keys)."
        },
        {
          id: "token",
          kind: "secret",
          label: "API key",
          instruction: "Enter your Render API key below.",
          placeholder: "rnd_..."
        }
      ]
    },
    {
      id: "workspace",
      title: "Choose workspace",
      actions: [
        {
          id: "workspace",
          kind: "select",
          label: "Workspace",
          instruction: "Select the Render workspace whose services Sazabi should list.",
          placeholder: "Select a workspace",
          optionsAction: "options",
          optionsInput: { token: "$token" },
          optionValueField: "id",
          optionLabelField: "name",
          optionDescriptionField: "type"
        }
      ]
    }
  ],
  submit: {
    metadata: {
      apiToken: "$token",
      ownerId: "$workspace.id",
      ownerName: "$workspace.name"
    },
    displayName: "$workspace.name",
    button: CONNECT_BUTTON
  }
};
var renderConnectionless = {
  groups: [
    {
      id: "open-log-streams",
      section: "config",
      title: "Open Log Streams",
      actions: [
        {
          instruction: "In your [Render dashboard](https://dashboard.render.com), open the workspace you want to forward, then go to **Workspace Settings > Log Streams** and add a log stream.",
          notes: [
            {
              text: "This log stream is **workspace-wide** — Render sends logs from every service in the workspace. To pick individual services instead, connect your Render account and Sazabi sets up a per-service log stream for each one."
            }
          ]
        }
      ]
    },
    {
      id: "endpoint",
      section: "config",
      title: "Set endpoint and token",
      actions: [
        {
          instruction: "Paste the endpoint and token (above) into the log stream form."
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the log stream, then trigger activity — deploy a service or hit an application route. Logs appear in Sazabi within a few minutes."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/render"
};
var renderStreams = {
  content: {
    kind: "list",
    listAction: "list",
    listInput: { connectionId: "${context.connectionId}" },
    columns: [
      { field: "name", header: "Name" },
      { field: "type", header: "Type", width: "w-40", cell: "badge" }
    ],
    searchPlaceholder: "Search services...",
    searchFields: ["name"],
    dedupeByConfigField: "serviceId",
    emptyState: {
      noMatches: "No services found.",
      allConfigured: "All services already have log streams configured."
    },
    toStreamItem: {
      displayName: "$item.name",
      config: {
        serviceId: "$item.id",
        serviceName: "$item.name",
        serviceType: "$item.type"
      }
    }
  }
};

// ../data-sources/src/sources/render/spec.ts
var renderSensitiveFields = ["apiToken"];
var renderIntakeDeclaration = {
  id: "render-syslog",
  label: "Render",
  subdomain: "render-syslog",
  transform: "otlp-key-stripping-logs"
};
var renderSpec = {
  id: "render",
  name: "Render",
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  sensitiveFields: renderSensitiveFields,
  intake: [renderIntakeDeclaration],
  subtitle: "Forward your Render service logs directly to Sazabi for real-time monitoring.",
  features: ["Log forwarding", "Service monitoring", "Environment filtering"],
  evidenceHints: [
    "render.yaml or Render blueprint files",
    "README/docs naming Render as the deploy host",
    "Services, workers, or cron jobs deployed to Render"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "render",
    intakeSourceId: "render-syslog",
    streamSelectorLayout: "sidepanel",
    connectionMetadataSection: {
      title: "Render details",
      description: "The Render workspace linked to this connection.",
      fields: [
        {
          key: "ownerId",
          label: "Workspace ID",
          description: "Render workspace linked to this connection."
        }
      ]
    },
    actions: {
      list: {
        options: {
          procedure: "render.listWorkspaces",
          itemsField: "workspaces",
          sensitiveInputFields: ["token"]
        },
        list: { procedure: "render.listServices", itemsField: "services" }
      }
    }
  }
};

// ../data-sources/src/sources/respan/setup.ts
var respanConnectionless = {
  groups: [
    {
      id: "environment",
      section: "config",
      title: "Set your Respan base URL",
      actions: [
        {
          instruction: "Set `RESPAN_BASE_URL` to your intake URL (above) in the app you want to trace."
        }
      ]
    },
    {
      id: "install",
      section: "config",
      title: "Install the Respan SDK",
      actions: [
        {
          instruction: "Install the Respan SDK in the app you want to trace.",
          payloads: [
            {
              kind: "code",
              label: "Install",
              language: "bash",
              copyLabel: "Install command",
              value: `# Python
pip install respan-ai

# TypeScript
npm install @respan/respan`
            }
          ],
          notes: [
            {
              text: "It auto-instruments supported LLM and agent frameworks (OpenAI, Anthropic, Bedrock, Vertex, LangChain, and more)."
            }
          ]
        }
      ]
    },
    {
      id: "configure",
      section: "config",
      title: "Point the Respan SDK at Sazabi",
      actions: [
        {
          instruction: "Initialize the Respan SDK with the base URL above (or set the `RESPAN_BASE_URL` environment variable).",
          payloads: [
            {
              kind: "code",
              label: "Python",
              language: "python",
              copyLabel: "Python code",
              value: `from respan import Respan

# Send Respan's auto-instrumented spans to Sazabi.
# You can also set RESPAN_BASE_URL in the environment instead of passing base_url.
Respan(base_url="${"https://${context.ingestHost}"}")

# All supported LLM and agent calls are now auto-traced and exported to Sazabi.`
            },
            {
              kind: "code",
              label: "TypeScript",
              language: "typescript",
              copyLabel: "TypeScript code",
              value: `import { Respan } from "@respan/respan";

// Send Respan's auto-instrumented spans to Sazabi.
// You can also set RESPAN_BASE_URL in the environment instead of passing baseURL.
const respan = new Respan({
  baseURL: "${"https://${context.ingestHost}"}",
});
await respan.initialize();

// All supported LLM and agent calls are now auto-traced and exported to Sazabi.`
            }
          ],
          notes: [
            {
              text: "The SDK sends its auto-instrumented spans to Sazabi over OTLP/HTTP — you do not need a separate OpenTelemetry exporter."
            },
            {
              text: "Using an agent framework? Pass the matching instrumentor, e.g. `Respan({ instrumentations: [...] })`, exactly as you would when exporting to Respan's own backend — only the base URL changes."
            },
            {
              text: "Already send OpenTelemetry directly (or run an OTel Collector)? Skip the Respan SDK and point your existing OTLP/HTTP trace exporter at the same host with the standard `/v1/traces` path (http/json or http/protobuf). This source accepts both the Respan SDK's `/api/v2/traces` path and the standard OTLP `/v1/traces` path."
            }
          ]
        }
      ]
    },
    {
      id: "redeploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Redeploy or restart the service, then run an LLM or agent workload to generate a trace."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/respan/spec.ts
var respanSpec = {
  id: "respan",
  name: "Respan",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "respan",
      label: "Respan",
      subdomain: "respan",
      transform: "otlp-passthrough",
      transformOptions: {
        tracePathSuffixes: ["/api/v2/traces", "/v1/traces"]
      }
    }
  ],
  lifecycleSkipReason: "Manual SDK setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Stream your Respan LLM traces directly to Sazabi for AI application observability.",
  features: [
    "LLM traces",
    "Token & cost tracking",
    "Agent workflow monitoring"
  ],
  evidenceHints: [
    "respan-ai or @respan/respan packages, or a Respan() initializer",
    "RESPAN_API_KEY environment variables",
    "README/docs naming Respan for LLM tracing or observability"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "respan",
    intakeSourceId: "respan"
  }
};

// ../data-sources/src/sources/sentry/setup.ts
var sentryConnectionless = {
  kind: "choice",
  title: "Choose Sentry SDK",
  description: "Choose the SDK snippet that matches your application, or copy the DSN for any other official Sentry SDK.",
  options: [
    {
      id: "javascript",
      label: "JavaScript / Node.js",
      description: "Initialize `@sentry/node` with the Sazabi DSN.",
      flow: {
        groups: [
          {
            id: "configure",
            section: "config",
            title: "Initialize SDK",
            actions: [
              {
                instruction: "Pick how you want events routed, then initialize the SDK with the matching snippet.",
                payloads: [
                  {
                    kind: "options",
                    options: [
                      {
                        id: "sazabi-only",
                        label: "Send only to Sazabi",
                        description: "Replaces your Sentry project DSN with the Sazabi DSN — the simplest setup; your existing Sentry project no longer receives these events.",
                        payloads: [
                          {
                            kind: "code",
                            language: "javascript",
                            copyLabel: "JavaScript",
                            value: `import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://sazabi@\${context.ingestHost}/0",
  enableLogs: true,
});`
                          }
                        ]
                      },
                      {
                        id: "multiplex",
                        label: "Multiplex (send to both)",
                        description: "Keeps your existing Sentry project receiving events — so its dashboards and alerting stay intact — and also streams to Sazabi via the SDK's built-in `makeMultiplexedTransport`.",
                        payloads: [
                          {
                            kind: "code",
                            language: "javascript",
                            copyLabel: "JavaScript",
                            value: `import * as Sentry from "@sentry/node";
import { makeMultiplexedTransport } from "@sentry/core";

const SENTRY_DSN = "<your-existing-sentry-dsn>";
const SAZABI_DSN =
  "https://sazabi@\${context.ingestHost}/0";

Sentry.init({
  // Primary DSN keeps your Sentry project (and its alerting) working.
  dsn: SENTRY_DSN,
  enableLogs: true,
  transport: makeMultiplexedTransport(
    Sentry.makeNodeTransport,
    // Fan every event out to both destinations.
    () => [{ dsn: SENTRY_DSN }, { dsn: SAZABI_DSN }],
  ),
});`
                          }
                        ],
                        notes: [
                          {
                            text: "`makeMultiplexedTransport` is part of the official Sentry JavaScript SDK. In the browser, import `makeFetchTransport` from `@sentry/browser` and pass it in place of `Sentry.makeNodeTransport`."
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "verify",
            section: "verify",
            title: "Verify telemetry",
            actions: [
              {
                instruction: "Restart the app, then send a test exception and write a structured log to confirm they arrive in Sazabi.",
                notes: [
                  {
                    text: "The snippet above already enables structured logging (`enableLogs: true`)."
                  },
                  {
                    text: "This DSN also works with other official Sentry SDKs including Go, Ruby, Java, and .NET."
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: "python",
      label: "Python",
      description: "Initialize `sentry_sdk` with the Sazabi DSN.",
      flow: {
        groups: [
          {
            id: "configure",
            section: "config",
            title: "Initialize SDK",
            actions: [
              {
                instruction: "Pick how you want events routed, then initialize the SDK with the matching snippet.",
                payloads: [
                  {
                    kind: "options",
                    options: [
                      {
                        id: "sazabi-only",
                        label: "Send only to Sazabi",
                        description: "Replaces your Sentry project DSN with the Sazabi DSN — the simplest setup; your existing Sentry project no longer receives these events.",
                        payloads: [
                          {
                            kind: "code",
                            language: "python",
                            copyLabel: "Python",
                            value: `import sentry_sdk

sentry_sdk.init(
    dsn="https://sazabi@\${context.ingestHost}/0",
    enable_logs=True,
)`
                          }
                        ]
                      },
                      {
                        id: "multiplex",
                        label: "Multiplex (send to both)",
                        description: "Keeps your existing Sentry project receiving events — so its dashboards and alerting stay intact — and also streams to Sazabi.",
                        payloads: [
                          {
                            kind: "code",
                            language: "python",
                            copyLabel: "Python",
                            value: `import sentry_sdk
from sentry_sdk import Client

SENTRY_DSN = "<your-existing-sentry-dsn>"
SAZABI_DSN = "https://sazabi@\${context.ingestHost}/0"

# Secondary client streams a copy of every event to Sazabi.
_sazabi = Client(dsn=SAZABI_DSN)

def _forward_to_sazabi(event, hint):
    _sazabi.capture_event(event, hint=hint)
    return event  # keep sending to your primary Sentry project

# Primary init keeps your Sentry project (and its alerting) working.
sentry_sdk.init(
    dsn=SENTRY_DSN,
    enable_logs=True,
    before_send=_forward_to_sazabi,
)`
                          }
                        ],
                        notes: [
                          {
                            text: "The Python SDK has no built-in multiplexed transport, so a second `Client` plus a `before_send` hook forwards a copy of each event to Sazabi; returning `event` keeps your primary Sentry project receiving it."
                          },
                          {
                            text: "`before_send` forwards error events only — structured logs stay on your primary Sentry project on this path. Verify Sazabi delivery with a test exception."
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "verify",
            section: "verify",
            title: "Verify telemetry",
            actions: [
              {
                instruction: "Restart the app, then send a test exception and write a structured log to confirm they arrive in Sazabi.",
                notes: [
                  {
                    text: "The snippet above already enables structured logging (`enable_logs=True`)."
                  },
                  {
                    text: "This DSN also works with other official Sentry SDKs including Go, Ruby, Java, and .NET."
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
};

// ../data-sources/src/sources/sentry/spec.ts
var sentrySpec = {
  id: "sentry",
  name: "Sentry SDK",
  searchAliases: ["sentry"],
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "sentry-dsn",
      label: "Sentry SDK",
      subdomain: "sentry-dsn",
      transform: "sentry-envelope"
    }
  ],
  lifecycleSkipReason: "Manual SDK setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Forward Sentry SDK errors, structured logs, and envelope telemetry directly to Sazabi.",
  features: [
    "Error forwarding",
    "Structured logs",
    "Envelope telemetry",
    "SDK integration"
  ],
  evidenceHints: [
    "@sentry packages, sentry.properties, SENTRY_DSN, or sentry-cli releases",
    "Sentry.init calls or framework-specific Sentry config files",
    "README/docs naming Sentry as the error tracking provider"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "sentry",
    intakeSourceId: "sentry-dsn"
  }
};

// ../data-sources/src/sources/sentry-platform/setup.ts
var sentryPlatformManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "prepare",
      title: "Create token",
      notes: [
        {
          variant: "requirement",
          text: "You must be an **Owner** or **Manager** in the Sentry organization — creating an Internal Integration needs the `org:write` scope, which Admin, Member, and Billing roles do not have (Sentry returns 403)."
        }
      ],
      actions: [
        {
          kind: "instruction",
          instruction: "Create a Sentry user auth token with **Organization: Read & Write** (`org:write`), **Project: Read**, and **Issue & Event: Read**.",
          payloads: [
            {
              kind: "external-link",
              label: "Open Sentry auth token settings",
              href: "https://sentry.io/settings/account/api/auth-tokens/new-token/"
            }
          ],
          notes: [
            {
              text: "The `org:write` scope only lets Sazabi create the Internal Integration; the integration itself only receives read-level webhook events."
            }
          ]
        },
        {
          kind: "instruction",
          instruction: "Confirm the Permissions Preview at the bottom of the Sentry form shows `event:read, org:write, project:read` before submitting."
        }
      ]
    },
    {
      id: "credentials",
      title: "Enter credentials",
      actions: [
        {
          id: "token",
          kind: "secret",
          label: "Sentry auth token",
          instruction: "Enter your Sentry auth token below.",
          description: "A token with the org:write, project:read, and event:read scopes.",
          placeholder: "Enter your Sentry auth token"
        },
        {
          id: "organizationSlug",
          kind: "text",
          label: "Sentry organization slug",
          instruction: "Enter your Sentry organization slug below.",
          description: "The slug from your Sentry URL: sentry.io/organizations/<slug>/",
          placeholder: "e.g. my-org",
          pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$",
          patternMessage: "Enter a valid Sentry organization slug (lowercase, hyphens allowed)."
        }
      ]
    }
  ],
  submit: {
    actions: [
      {
        kind: "validate",
        action: "validate",
        input: { token: "$token", organizationSlug: "$organizationSlug" },
        resultAs: "validate"
      }
    ],
    metadata: {
      sentryAuthToken: "$token",
      organizationSlug: "$organizationSlug"
    },
    button: CONNECT_BUTTON
  },
  docsUrl: "https://docs.sazabi.com/data/sources/connect-your-account/sentry"
};
var sentryPlatformConnectionless = {
  groups: [
    {
      id: "create-integration",
      section: "config",
      title: "Create the Internal Integration",
      notes: [
        {
          variant: "requirement",
          text: "Creating an Internal Integration needs the **`org:write`** scope, which Sentry grants only to organization **Owners** and **Managers**. On this path the scope never leaves Sentry — you give Sazabi no auth token."
        }
      ],
      actions: [
        {
          instruction: "In Sentry, go to **Settings → Developer Settings → Custom Integrations** and choose **New Internal Integration**.",
          payloads: [
            {
              kind: "external-link",
              label: "Open Sentry Custom Integrations",
              href: "https://sentry.io/settings/developer-settings/"
            }
          ]
        },
        {
          instruction: "Under **Webhooks**, enable webhooks and subscribe to the **Issue** and **Comment** resources. To route alerts as well, enable **Alert Rule Action** so the integration can be added as a notification destination on Issue Alert and Metric Alert rules."
        }
      ]
    },
    {
      id: "endpoint",
      section: "config",
      title: "Set the webhook URL",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the Internal Integration's Webhook URL field."
        },
        {
          instruction: "Save the integration."
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Verify",
      actions: [
        {
          instruction: "Do something in Sentry to trigger an event — comment on an issue, change an issue's status, or create a fresh issue by throwing an exception in an instrumented project. `issue` and `comment` webhooks arrive within a few minutes."
        },
        {
          instruction: "To stream `event_alert` / `metric_alert` webhooks, edit each Issue Alert or Metric Alert rule in Sentry and add this integration as a notification destination — alerts are opt-in."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/sentry-platform"
};

// ../data-sources/src/sources/sentry-platform/spec.ts
var sentryPlatformSensitiveFields = ["sentryAuthToken"];
var sentryPlatformIntakeDeclaration = {
  id: "sentry-platform",
  label: "Sentry Platform",
  subdomain: "sentry-platform",
  transform: "sentry-platform-webhook"
};
var sentryPlatformSpec = {
  id: "sentry_platform",
  name: "Sentry",
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  streamCardinality: "single",
  sensitiveFields: sentryPlatformSensitiveFields,
  intake: [sentryPlatformIntakeDeclaration],
  subtitle: "Connect your Sentry organization to stream errors, issues, and alerts to Sazabi in real-time.",
  features: [
    "Error streaming",
    "Issue tracking",
    "Alert forwarding",
    "Metric alerts"
  ],
  evidenceHints: [
    "Sentry organization or project config where org-level event forwarding is preferred",
    "sentry-cli release/deploy automation that would benefit from platform context",
    "Multiple Sentry SDK projects that should be connected through one Sentry platform integration"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "sentry",
    intakeSourceId: "sentry-platform",
    actions: {
      submit: {
        validate: {
          kind: "source-action",
          actionId: "validate",
          sensitiveInputFields: ["token"]
        }
      }
    }
  }
};

// ../data-sources/src/sources/supabase/setup.ts
var supabaseConnectionless = {
  groups: [
    {
      id: "open-form",
      section: "config",
      title: "Open log drain form",
      notes: [
        {
          variant: "requirement",
          text: "Log Drains require a Supabase Pro, Team, or Enterprise plan."
        }
      ],
      actions: [
        {
          instruction: "In the [Supabase dashboard](https://supabase.com/dashboard), open the project whose logs you want to forward, then open **Project Settings > Log Drains** and click **Add destination**."
        }
      ]
    },
    {
      id: "fields",
      section: "config",
      title: "Copy drain fields",
      actions: [
        {
          instruction: "Fill in the **Name** and **Description** fields.",
          payloads: [
            {
              kind: "copyable",
              label: "Name",
              value: "Sazabi"
            },
            {
              kind: "copyable",
              label: "Description",
              value: "Forward Supabase logs to Sazabi for observability and AI analysis."
            }
          ]
        },
        {
          instruction: "Set **Type** to **OpenTelemetry Protocol (OTLP)**."
        }
      ]
    },
    {
      id: "otlp-endpoint",
      section: "config",
      title: "OTLP Endpoint",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the **OTLP Endpoint** field."
        }
      ]
    },
    {
      id: "delivery-fields",
      section: "config",
      title: "Finish drain fields",
      actions: [
        {
          instruction: "Fill in the **Protocol** field.",
          payloads: [
            {
              kind: "copyable",
              label: "Protocol",
              value: "HTTP/Protobuf"
            }
          ]
        },
        {
          instruction: "Set **Gzip Compression** to **Enabled**."
        }
      ]
    },
    {
      id: "save",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the log drain, then trigger activity — run a query or hit your project's API. Logs appear in Sazabi within a few minutes."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/supabase"
};

// ../data-sources/src/sources/supabase/spec.ts
var supabaseSpec = {
  id: "supabase",
  name: "Supabase",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "supabase",
      label: "Supabase",
      subdomain: "supabase",
      transform: "supabase-drain"
    }
  ],
  lifecycleSkipReason: "Manual drain setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Stream your Supabase project logs directly to Sazabi for unified observability.",
  features: ["Database logs", "Auth events", "Edge Function logs"],
  evidenceHints: [
    "supabase/ directory, supabase/config.toml, or Supabase CLI scripts",
    "@supabase/* packages, SUPABASE_URL, or SUPABASE_SERVICE_ROLE_KEY",
    "README/docs naming Supabase for Postgres, Auth, Storage, or Edge Functions"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "supabase",
    intakeSourceId: "supabase"
  }
};

// ../data-sources/src/sources/temporal/setup.ts
var temporalConnectionless = {
  groups: [
    {
      id: "instrument",
      section: "config",
      title: "Instrument workers",
      description: "Set up each Temporal worker runtime to send OpenTelemetry data.",
      actions: [...otelSetupActions("Temporal worker")]
    },
    {
      id: "redeploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Redeploy or restart your Temporal workers, then run a workflow or activity to generate fresh telemetry."
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/temporal/spec.ts
var temporalSpec = {
  id: "temporal",
  name: "Temporal",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual worker setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "temporal",
      label: "Temporal",
      subdomain: "temporal",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward OpenTelemetry logs and traces from your Temporal workers to Sazabi for durable execution observability.",
  features: ["Worker logs", "Workflow and activity traces"],
  evidenceHints: [
    "@temporalio packages, Temporal worker entrypoints, workflows/, or activities/",
    "TEMPORAL_ADDRESS, TEMPORAL_NAMESPACE, or Temporal Cloud deployment docs",
    "Background workflows or durable orchestration code that already emits OTLP telemetry"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "temporal",
    intakeSourceId: "temporal"
  }
};

// ../data-sources/src/sources/trigger-dev/setup.ts
var triggerDevConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "prepare",
      section: "config",
      title: "Prepare Trigger.dev project",
      actions: [
        {
          instruction: "Install `@opentelemetry/exporter-logs-otlp-http` in the package that owns your `trigger.config.ts` file."
        },
        {
          instruction: "If your project already sets up OpenTelemetry in code, reuse the Sazabi log intake URL in that setup instead of adding a second exporter."
        }
      ]
    },
    {
      id: "configure",
      section: "config",
      title: "Configure log exporter",
      actions: [
        {
          instruction: "Add the OTLP log exporter to `trigger.config.ts`.",
          payloads: [
            {
              kind: "code",
              label: "`trigger.config.ts`",
              language: "typescript",
              value: `import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { defineConfig } from "@trigger.dev/sdk";

export default defineConfig({
  project: "<your-trigger-project-ref>",
  telemetry: {
    logExporters: [
      new OTLPLogExporter({
        url: "https://\${context.ingestHost}/v1/logs",
      }),
    ],
  },
});
`,
              copyLabel: "Trigger.dev config snippet"
            }
          ],
          notes: [
            {
              text: "Trigger.dev reserves `OTEL_*` environment variables for its own internal telemetry, so do not use them for this integration."
            }
          ]
        }
      ]
    },
    {
      id: "redeploy",
      section: "verify",
      title: "Redeploy and verify",
      actions: [
        {
          instruction: "Redeploy Trigger.dev so it picks up the new log exporter, then run a task to confirm its logs arrive in Sazabi.",
          notes: [
            {
              text: "This source stores logs only — trace exporters, metrics exporters, alert webhooks, and management API polling are intentionally out of scope. Use `telemetry.logExporters`; do not configure this source through `telemetry.exporters`, Trigger.dev alert webhooks, or management API polling."
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/trigger-dev/spec.ts
var triggerDevSpec = {
  id: "trigger_dev",
  name: "Trigger.dev",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual trigger.config.ts setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "trigger-dev",
      label: "Trigger.dev",
      subdomain: "trigger-dev",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Stream your Trigger.dev job logs directly to Sazabi for background job monitoring.",
  features: ["Task logs", "Run failure logs", "Background job monitoring"],
  evidenceHints: [
    "trigger.config.ts/js or @trigger.dev packages",
    "TRIGGER_* environment variables or tasks under trigger/ or src/trigger",
    "README/docs naming Trigger.dev for background jobs"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "trigger-dev",
    intakeSourceId: "trigger-dev"
  }
};

// ../data-sources/src/sources/vector/setup.ts
var LOGS_YAML = `transforms:
  sazabi_logs_otlp:
    type: remap
    inputs: ["*"]  # replace with explicit source/transform IDs
    source: |
      # The opentelemetry sink's \`otlp\` codec does not auto-wrap events.
      # This transform builds the OTLP resourceLogs envelope Sazabi expects.
      timestamp_nanos = to_unix_timestamp!(now(), unit: "nanoseconds")
      service_name = .service.name ?? .service_name ?? .service ?? .app ?? .source_type ?? "vector"
      severity_text = upcase(string!(.level ?? .severity ?? "INFO"))

      .resourceLogs = [{
        "resource": {
          "attributes": [
            { "key": "service.name", "value": { "stringValue": service_name } },
            { "key": "host.name",    "value": { "stringValue": .host ?? "" } }
          ]
        },
        "scopeLogs": [{
          "scope": { "name": "vector" },
          "logRecords": [{
            "timeUnixNano":  timestamp_nanos,
            "body":          { "stringValue": .message ?? encode_json(.) },
            "severityText":  severity_text
          }]
        }]
      }]

sinks:
  sazabi_logs:
    type: opentelemetry
    inputs: ["sazabi_logs_otlp"]
    protocol:
      type: http
      uri: "https://\${context.ingestHost}/v1/logs"
      method: post
      encoding:
        codec: otlp`;
var LOGS_HELM = `customConfig:
  transforms:
    sazabi_logs_otlp:
      type: remap
      inputs: ["*"]  # replace with explicit source/transform IDs
      source: |
        # The opentelemetry sink's \`otlp\` codec does not auto-wrap events.
        # This transform builds the OTLP resourceLogs envelope Sazabi expects.
        timestamp_nanos = to_unix_timestamp!(now(), unit: "nanoseconds")
        service_name = .service.name ?? .service_name ?? .service ?? .app ?? .source_type ?? "vector"
        severity_text = upcase(string!(.level ?? .severity ?? "INFO"))

        .resourceLogs = [{
          "resource": {
            "attributes": [
              { "key": "service.name", "value": { "stringValue": service_name } },
              { "key": "host.name",    "value": { "stringValue": .host ?? "" } }
            ]
          },
          "scopeLogs": [{
            "scope": { "name": "vector" },
            "logRecords": [{
              "timeUnixNano":  timestamp_nanos,
              "body":          { "stringValue": .message ?? encode_json(.) },
              "severityText":  severity_text
            }]
          }]
        }]
  sinks:
    sazabi_logs:
      type: opentelemetry
      inputs: ["sazabi_logs_otlp"]
      protocol:
        type: http
        uri: "https://\${context.ingestHost}/v1/logs"
        method: post
        encoding:
          codec: otlp`;
var vectorConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "copy-config",
      section: "config",
      title: "Copy logs pipeline",
      notes: [
        {
          variant: "requirement",
          text: "Vector 0.51.0 or later is required for the `otlp` encoding codec."
        }
      ],
      actions: [
        {
          instruction: "Add a remap transform and OpenTelemetry sink to your Vector config.",
          payloads: [
            {
              kind: "code-tabs",
              label: "Vector configuration",
              description: "Choose the snippet format that matches how you deploy Vector.",
              tabs: [
                {
                  id: "yaml",
                  label: "`vector.yaml`",
                  language: "yaml",
                  copyLabel: "Vector YAML config",
                  value: LOGS_YAML
                },
                {
                  id: "helm",
                  label: "Helm values",
                  language: "yaml",
                  copyLabel: "Vector Helm values",
                  value: LOGS_HELM
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "wire-sources",
      section: "config",
      title: "Wire sources",
      actions: [
        {
          instruction: 'Replace `inputs: ["*"]` on the `remap` transform with your specific source or transform IDs in production. `["*"]` also matches `internal_metrics` and other unrelated components.',
          notes: [
            {
              variant: "requirement",
              text: "The sink's `otlp` codec doesn't build the OTLP envelope on its own. If you wire raw sources straight into it, Vector drops every event."
            },
            {
              text: "Sazabi indexes logs and traces from Vector. It accepts metrics at the intake but silently drops them."
            }
          ]
        }
      ]
    },
    {
      id: "traces",
      section: "config",
      title: "Forward traces (optional)",
      actions: [
        {
          instruction: 'Add a second `opentelemetry` sink with `uri` ending in `/v1/traces` and explicit `inputs` referencing an already-OTLP-shaped source, typically an `opentelemetry` Vector source with `use_otlp_decoding.traces: true` (use `inputs: ["otlp_in.traces"]`).',
          notes: [
            {
              text: "No remap is needed for traces."
            },
            {
              variant: "requirement",
              text: 'Do not wire `["*"]` into a traces sink.'
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/vector/spec.ts
var vectorSpec = {
  id: "vector",
  name: "Vector",
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  lifecycleSkipReason: "Manual agent setup is not exercised by automated lifecycle tests yet.",
  intake: [
    {
      id: "vector",
      label: "Vector",
      subdomain: "vector",
      transform: "otlp-passthrough"
    }
  ],
  subtitle: "Forward logs and traces from your infrastructure to Sazabi using the Vector observability pipeline.",
  features: [
    "Kubernetes DaemonSet",
    "High-throughput pipeline",
    "Built-in transforms",
    "Multiple source types"
  ],
  evidenceHints: [
    "vector.toml/yaml/json, vector.dev Helm values, or Vector sidecars",
    "VECTOR_* environment variables or VRL transform config",
    "README/docs naming Vector as the observability pipeline"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "vector",
    intakeSourceId: "vector"
  }
};

// ../data-sources/src/sources/vercel/setup.ts
var vercelManaged = {
  kind: "multi-step",
  steps: [
    {
      id: "prepare",
      title: "Create token",
      actions: [
        {
          kind: "instruction",
          instruction: "Create a full-access API token in your [Vercel account settings](https://vercel.com/account/tokens). For team accounts, create the token while scoped to the correct team.",
          notes: [
            {
              text: "A token gets the same permissions as your account."
            }
          ]
        }
      ]
    },
    {
      id: "credentials",
      title: "Enter token",
      actions: [
        {
          id: "token",
          kind: "secret",
          label: "API token",
          instruction: "Enter your Vercel API token below.",
          placeholder: "Enter your Vercel API token"
        }
      ]
    }
  ],
  submit: {
    actions: [
      {
        kind: "validate",
        action: "validate",
        input: { token: "$token" },
        resultAs: "validate"
      }
    ],
    metadata: {
      vercelApiToken: "$token",
      vercelTeamId: "$validate.teamId",
      vercelTeamName: "$validate.teamName"
    },
    button: CONNECT_BUTTON
  }
};
var vercelConnectionless = {
  groups: [
    {
      id: "open-drains",
      section: "config",
      title: "Open Drains",
      notes: [
        {
          variant: "requirement",
          text: "**Vercel Drains require the Pro or Enterprise plan.** Hobby and Pro Trial teams cannot create drains."
        }
      ],
      actions: [
        {
          instruction: "In your [Vercel dashboard](https://vercel.com/dashboard), go to **Team Settings > Drains** and create a new drain."
        },
        {
          instruction: "Choose **Logs** as the data to deliver.",
          notes: [
            {
              text: "This path covers logs only — to send traces or Web Analytics events, connect your Vercel account instead and Sazabi creates those drains for you."
            }
          ]
        }
      ]
    },
    {
      id: "endpoint",
      section: "config",
      title: "Set the endpoint",
      actions: [
        {
          instruction: "Paste your Sazabi intake URL (above) into the drain's endpoint field."
        }
      ]
    },
    {
      id: "delivery-settings",
      section: "config",
      title: "Set delivery options",
      actions: [
        {
          instruction: "Set the delivery format to **JSON**.",
          notes: [
            {
              text: "Sazabi does not parse NDJSON on this endpoint."
            }
          ]
        },
        {
          instruction: "Pick the projects, environments, and log sources to send.",
          notes: [
            {
              text: "Sazabi accepts every Vercel log source (Static, Lambda, Edge, Build, External, Firewall, Redirect)."
            }
          ]
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Save and verify",
      actions: [
        {
          instruction: "Save the drain, then send some traffic — push a deployment or hit an application route. Logs show up in Sazabi within a few minutes."
        }
      ]
    }
  ],
  docsUrl: "https://docs.sazabi.com/data/sources/endpoint/vercel"
};
var VERCEL_STREAM_COLUMNS = [
  { field: "name", header: "Project" },
  {
    field: "framework",
    header: "Framework",
    width: "w-32",
    cell: "badge",
    transform: "fallback:Unspecified"
  }
];
var vercelStreams = {
  content: {
    kind: "tabs",
    tabs: [
      {
        id: "logs",
        label: "Logs",
        content: {
          kind: "list",
          listAction: "list",
          listInput: { connectionId: "${context.connectionId}" },
          columns: VERCEL_STREAM_COLUMNS,
          searchPlaceholder: "Search projects...",
          searchFields: ["name", "framework"],
          dedupeByConfigField: "vercelProjectId",
          dedupeExtraMatch: { drainType: "logs" },
          emptyState: {
            noMatches: "No projects found.",
            allConfigured: "All projects already have logs drains configured."
          },
          toStreamItem: {
            displayName: "$item.name (Logs)",
            config: {
              vercelProjectId: "$item.id",
              vercelProjectName: "$item.name",
              drainType: "logs"
            }
          }
        }
      },
      {
        id: "traces",
        label: "Traces",
        content: {
          kind: "list",
          listAction: "list",
          listInput: { connectionId: "${context.connectionId}" },
          columns: VERCEL_STREAM_COLUMNS,
          searchPlaceholder: "Search projects...",
          searchFields: ["name", "framework"],
          dedupeByConfigField: "vercelProjectId",
          dedupeExtraMatch: { drainType: "traces" },
          emptyState: {
            noMatches: "No projects found.",
            allConfigured: "All projects already have traces drains configured."
          },
          toStreamItem: {
            displayName: "$item.name (Traces)",
            config: {
              vercelProjectId: "$item.id",
              vercelProjectName: "$item.name",
              drainType: "traces"
            }
          }
        }
      },
      {
        id: "analytics",
        label: "Analytics",
        content: {
          kind: "list",
          listAction: "list",
          listInput: { connectionId: "${context.connectionId}" },
          columns: VERCEL_STREAM_COLUMNS,
          searchPlaceholder: "Search projects...",
          searchFields: ["name", "framework"],
          dedupeByConfigField: "vercelProjectId",
          dedupeExtraMatch: { drainType: "analytics" },
          emptyState: {
            noMatches: "No projects found.",
            allConfigured: "All projects already have analytics drains configured."
          },
          toStreamItem: {
            displayName: "$item.name (Analytics)",
            config: {
              vercelProjectId: "$item.id",
              vercelProjectName: "$item.name",
              drainType: "analytics"
            }
          }
        }
      }
    ]
  }
};

// ../data-sources/src/sources/vercel/spec.ts
var vercelSensitiveFields = ["vercelApiToken"];
var vercelIntakeDeclaration = {
  id: "vercel",
  label: "Vercel",
  subdomain: "vercel",
  transform: "vercel-drain"
};
var vercelAnalyticsIntakeDeclaration = {
  id: "vercel-analytics",
  label: "Vercel Analytics",
  subdomain: "vercel-analytics",
  transform: "vercel-analytics-drain"
};
var vercelSpec = {
  id: "vercel",
  name: "Vercel",
  capabilities: ["connectionless", "managed"],
  auth: ["apiToken"],
  delivery: ["push"],
  lifecycleEligible: true,
  sensitiveFields: vercelSensitiveFields,
  intake: [vercelIntakeDeclaration, vercelAnalyticsIntakeDeclaration],
  subtitle: "Forward your Vercel deployment logs, traces, and Web Analytics events directly to Sazabi for real-time analysis and alerting.",
  features: [
    "Log forwarding",
    "Trace forwarding",
    "Web Analytics forwarding",
    "Real-time streaming"
  ],
  evidenceHints: [
    "vercel.json, .vercel/, or Vercel build/deploy scripts",
    "@vercel packages, VERCEL_* environment variables, or GitHub Actions that run vercel",
    "README/docs naming Vercel as the deployment host"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    iconKey: "vercel",
    intakeSourceId: "vercel",
    streamSelectorLayout: "sidepanel",
    streamTableColumns: [
      {
        kind: "config-enum-badge",
        header: "Type",
        width: "w-24",
        configField: "drainType",
        values: [
          { value: "logs", label: "Logs" },
          { value: "traces", label: "Traces" },
          { value: "analytics", label: "Analytics" }
        ],
        fallbackLabel: "N/A"
      }
    ],
    actions: {
      submit: {
        validate: { kind: "source-action", actionId: "validate-token" }
      },
      list: {
        list: {
          kind: "source-action",
          actionId: "list-projects",
          itemsField: "projects"
        }
      }
    }
  }
};

// ../data-sources/src/sources/webhook-events/setup.ts
var webhookEventsConnectionless = {
  perStreamInstructions: true,
  groups: [
    {
      id: "endpoint",
      section: "config",
      title: "Send events",
      actions: [
        {
          instruction: "Send an HTTP `POST` with a JSON body to your webhook URL (above).",
          notes: [
            {
              text: "A single JSON object is stored as one event; a JSON array of objects is stored as one event per element."
            },
            {
              text: "You can append any path — for example `/deploys` — to record the event's origin; the path is passed through and stored as `webhook.path`."
            }
          ]
        }
      ]
    },
    {
      id: "configure-vendor",
      section: "config",
      title: "Paste the URL into your vendor",
      actions: [
        {
          instruction: "Open your vendor's webhook or outbound-event settings, add a new endpoint, and paste the URL above. Choose JSON as the payload format if the vendor offers a choice.",
          notes: [
            {
              text: "Sazabi reads the time, severity, and message from common field names when present, and stores every field of the payload under `webhook.*` either way. There is nothing to map or declare."
            }
          ]
        }
      ]
    },
    {
      id: "verify",
      section: "verify",
      title: "Send a test event and verify",
      actions: [
        {
          instruction: "Trigger a test event from your vendor — most webhook settings pages have a “Send test” button — or POST a sample event yourself, then watch for it below.",
          payloads: [
            {
              kind: "code",
              label: "Send a test event",
              language: "bash",
              copyLabel: "curl test event",
              value: `curl -X POST \\
  https://\${context.ingestHost}/test \\
  -H 'content-type: application/json' \\
  -d '{"event":"hello.world","level":"info","message":"first webhook event"}'`
            }
          ]
        }
      ]
    }
  ]
};

// ../data-sources/src/sources/webhook-events/spec.ts
var webhookEventsSpec = {
  id: "webhook_events",
  name: "Webhook Events",
  searchAliases: [
    "webhook",
    "webhooks",
    "json events",
    "http events",
    "generic webhook",
    "event stream"
  ],
  capabilities: ["connectionless"],
  auth: [],
  delivery: ["push"],
  intake: [
    {
      id: "webhook-events",
      label: "Webhook Events",
      subdomain: "webhook-events",
      transform: "webhook-events"
    }
  ],
  lifecycleSkipReason: "Manual webhook setup is not exercised by automated lifecycle tests yet.",
  subtitle: "Point any vendor's webhooks at Sazabi. Arbitrary JSON events land as searchable log records with zero vendor-specific configuration.",
  features: [
    "Any JSON event stream",
    "One keyed URL per endpoint",
    "Full payload preserved as attributes",
    "No schema or field mapping"
  ],
  evidenceHints: [
    "A vendor that emits plain JSON webhooks without a dedicated Sazabi source",
    "An internal service, deploy bot, or cron that POSTs JSON events",
    "Existing outbound webhook configuration with no other Sazabi destination"
  ],
  setupSkill: DATA_SOURCE_SETUP_SKILL_SPEC_VALUE,
  dashboard: {
    slug: "webhook-events",
    iconKey: "webhook-events",
    intakeSourceId: "webhook-events"
  }
};

// ../data-sources/src/sources/catalog.ts
var DATA_SOURCE_SPECS = [
  cloudflareSpec,
  cloudflareWorkersSpec,
  cloudwatchSpec,
  convexSpec,
  datadogSpec,
  daytonaSpec,
  digitalOceanSpec,
  e2bSpec,
  elasticCloudSpec,
  fluentBitSpec,
  flyIoSpec,
  gcpSpec,
  grafanaAlloySpec,
  inngestSpec,
  langchainSpec,
  mastraSpec,
  neonSpec,
  netlifySpec,
  openrouterSpec,
  otelSpec,
  otelCollectorSpec,
  otelMetricsSpec,
  plainSpec,
  porterSpec,
  posthogSpec,
  posthogSdkSpec,
  prometheusSpec,
  railwaySpec,
  renderSpec,
  respanSpec,
  sentryPlatformSpec,
  sentrySpec,
  supabaseSpec,
  temporalSpec,
  triggerDevSpec,
  vectorSpec,
  vercelSpec,
  webhookEventsSpec
];
var DATA_SOURCE_SPECS_WITH_OPTIONAL_FIELDS = DATA_SOURCE_SPECS;
var DATA_SOURCE_SENSITIVE_FIELDS = Object.fromEntries(DATA_SOURCE_SPECS_WITH_OPTIONAL_FIELDS.map((spec) => [
  spec.id,
  spec.sensitiveFields ?? []
]));
var DATA_SOURCE_ACTION_SENSITIVE_INPUT_FIELDS = Object.fromEntries(DATA_SOURCE_SPECS_WITH_OPTIONAL_FIELDS.flatMap((spec) => [
  ...Object.values(spec.dashboard?.actions?.submit ?? {}),
  ...Object.values(spec.dashboard?.actions?.list ?? {}),
  ...Object.values(spec.dashboard?.actions?.prefetch ?? {})
].flatMap((action) => {
  const fields = action.sensitiveInputFields ?? [];
  if (fields.length === 0) {
    return [];
  }
  return [
    [
      "procedure" in action ? action.procedure : `${spec.id}.${action.actionId}`,
      fields
    ]
  ];
})));
var DATA_SOURCE_TYPES = [
  "vercel",
  "cloudflare",
  "railway",
  "render",
  "fly_io",
  "netlify",
  "supabase",
  "digital_ocean",
  "inngest",
  "trigger_dev",
  "temporal",
  "mastra",
  "neon",
  "langchain",
  "daytona",
  "e2b",
  "cloudwatch",
  "convex",
  "datadog",
  "sentry",
  "sentry_platform",
  "openrouter",
  "posthog",
  "posthog_sdk",
  "gcp",
  "otel",
  "otel_metrics",
  "fluent_bit",
  "vector",
  "grafana_alloy",
  "otel_collector",
  "cloudflare_workers",
  "elastic_cloud",
  "porter",
  "respan",
  "plain",
  "prometheus",
  "webhook_events"
];
var DATA_SOURCE_CATALOG = DATA_SOURCE_SPECS.map((spec) => ({
  id: spec.id,
  name: spec.name,
  capabilities: spec.capabilities
}));
var DATA_SOURCE_TYPE_CATALOG = Object.fromEntries(DATA_SOURCE_SPECS.map((spec) => [
  spec.id,
  { name: spec.name, setupSkill: spec.setupSkill }
]));
var DATA_SOURCE_MANAGED_FLOWS = {
  cloudflare: cloudflareManaged,
  cloudwatch: cloudwatchManaged,
  convex: convexManaged,
  digital_ocean: digitalOceanManaged,
  fly_io: flyIoManaged,
  gcp: gcpManaged,
  plain: plainManaged,
  posthog: posthogManaged,
  render: renderManaged,
  sentry_platform: sentryPlatformManaged,
  vercel: vercelManaged
};
var DATA_SOURCE_STREAMS = {
  cloudflare: cloudflareStreams,
  cloudwatch: cloudwatchStreams,
  convex: convexStreams,
  digital_ocean: digitalOceanStreams,
  fly_io: flyIoStreams,
  gcp: gcpStreams,
  plain: plainStreams,
  posthog: posthogStreams,
  render: renderStreams,
  vercel: vercelStreams
};
var DATA_SOURCE_CONNECTIONLESS_FLOWS = {
  cloudflare: cloudflareConnectionless,
  cloudflare_workers: cloudflareWorkersConnectionless,
  cloudwatch: cloudwatchConnectionless,
  convex: convexConnectionless,
  datadog: datadogConnectionless,
  daytona: daytonaConnectionless,
  digital_ocean: digitalOceanConnectionless,
  fluent_bit: fluentBitConnectionless,
  fly_io: flyIoConnectionless,
  grafana_alloy: grafanaAlloyConnectionless,
  e2b: e2bConnectionless,
  elastic_cloud: elasticCloudConnectionless,
  gcp: gcpConnectionless,
  inngest: inngestConnectionless,
  langchain: langchainConnectionless,
  mastra: mastraConnectionless,
  neon: neonConnectionless,
  netlify: netlifyConnectionless,
  openrouter: openrouterConnectionless,
  otel: otelConnectionless,
  otel_collector: otelCollectorConnectionless,
  otel_metrics: otelMetricsConnectionless,
  plain: plainConnectionless,
  posthog: posthogConnectionless,
  posthog_sdk: posthogSdkConnectionless,
  porter: porterConnectionless,
  prometheus: prometheusConnectionless,
  railway: railwayConnectionless,
  render: renderConnectionless,
  respan: respanConnectionless,
  sentry: sentryConnectionless,
  sentry_platform: sentryPlatformConnectionless,
  supabase: supabaseConnectionless,
  temporal: temporalConnectionless,
  trigger_dev: triggerDevConnectionless,
  vector: vectorConnectionless,
  vercel: vercelConnectionless,
  webhook_events: webhookEventsConnectionless
};
var DATA_SOURCE_COVERAGE_MATRIX = DATA_SOURCE_SPECS.map((spec) => ({
  sourceId: spec.id,
  name: spec.name,
  capabilities: spec.capabilities,
  setupAuthModes: spec.auth,
  deliveryModes: spec.delivery,
  hasDashboardMetadata: Boolean(spec.dashboard),
  hasManagedFlow: Boolean(DATA_SOURCE_MANAGED_FLOWS[spec.id]),
  hasConnectionlessFlow: Boolean(DATA_SOURCE_CONNECTIONLESS_FLOWS[spec.id]),
  hasStreamSelector: Boolean(DATA_SOURCE_STREAMS[spec.id]),
  lifecycleEligible: spec.lifecycleEligible ?? false,
  lifecycleSkipReason: spec.lifecycleSkipReason
}));
// ../public-api-contracts/src/data-sources.ts
import { z as z4 } from "zod";
var DATA_SOURCE_TYPE_VALUES = DATA_SOURCE_TYPES;
var DataSourceTypeEnum = z4.enum(DATA_SOURCE_TYPE_VALUES);
var StreamStatusEnum = z4.enum(["pending", "provisioning", "active", "error"]);
var DataSourceInstanceModeEnum = z4.enum(["managed", "connectionless"]);
var MetadataFieldSchema = z4.object({
  name: z4.string().describe("Field name used as the JSON key in metadata."),
  type: z4.string().describe('Zod type name, e.g. "string", "boolean", "enum".'),
  required: z4.boolean().describe("Whether the field is required."),
  sensitive: z4.boolean().describe("Whether the field contains a secret and will be encrypted."),
  description: z4.string().nullable().describe("Human-readable description of the field.")
});
var DataSourceTypeInfoSchema = z4.object({
  id: z4.string().describe("Data source type identifier."),
  name: z4.string().describe("Human-readable display name."),
  modes: z4.array(DataSourceInstanceModeEnum).describe("Setup modes this source supports. `managed` sources take vendor credentials; `connectionless` sources mint a keyed intake endpoint."),
  metadataFields: z4.array(MetadataFieldSchema).describe("Fields required in the metadata object when creating a managed instance. Empty for connectionless-only sources."),
  setupSkill: z4.string().nullable().describe("Markdown setup skill for AI agents. Null when no skill is available.")
});
var DataSourceEndpointCardSchema = z4.object({
  kind: z4.enum(["url", "hostPort"]).describe("Card shape. `url` = a complete keyed URL whose hostname authenticates; `hostPort` = a non-keyed listener host + port whose credential travels separately."),
  label: z4.string().optional().describe("Card label. Present when a source exposes several endpoints (e.g. separate logs and traces destinations)."),
  url: z4.string().optional().describe("The complete keyed intake URL. Present when kind is `url`."),
  host: z4.string().optional().describe("The regional listener hostname (no scheme). Present when kind is `hostPort`."),
  port: z4.number().int().optional().describe("The listener port. Present when kind is `hostPort`."),
  description: z4.string().optional().describe("Vendor-specific guidance rendered under the value."),
  extraCredential: z4.object({
    label: z4.string(),
    value: z4.string(),
    description: z4.string().optional()
  }).optional().describe("The credential the sender must attach when the hostname alone does not authenticate. Present when kind is `hostPort`.")
});
var DataSourceStreamSchema = z4.object({
  id: z4.string().uuid(),
  instanceId: z4.string().uuid().describe("Root instance ID. Every stream roots on exactly one data source instance."),
  displayName: z4.string(),
  config: z4.record(z4.string(), z4.unknown()),
  status: StreamStatusEnum,
  errorMessage: z4.string().nullable(),
  enabled: z4.boolean().describe("Whether the stream is currently ingesting. Independent of provisioning status: a paused stream stays configured but stops accepting new data."),
  createdAt: z4.string().datetime(),
  endpointCards: z4.array(DataSourceEndpointCardSchema).optional().describe("Server-computed endpoint card(s) for this stream's delivery key — where to point the sender. Present only for streams that carry their own intake key.")
});
var DataSourceInstanceSchema = z4.object({
  id: z4.string().uuid(),
  dataSourceType: DataSourceTypeEnum,
  mode: DataSourceInstanceModeEnum,
  name: z4.string().nullable().describe("Display name. For connectionless instances this falls back to the stream's name when no explicit name is set."),
  streamCount: z4.number().int(),
  createdAt: z4.string().datetime()
});
var DataSourceInstanceDetailSchema = DataSourceInstanceSchema.extend({
  streams: z4.array(DataSourceStreamSchema).describe("The instance's live streams, newest first.")
});
var ListDataSourceTypesInputSchema = z4.object({});
var ListDataSourceTypesOutputSchema = z4.object({
  types: z4.array(DataSourceTypeInfoSchema)
});
var listDataSourceTypes = defineOperation({
  operationId: "dataSources.listTypes",
  description: "List all supported data source types with their setup modes and metadata requirements.",
  backend: "api",
  route: {
    method: "GET",
    path: "/data-sources/types",
    tags: ["Data Sources"]
  },
  input: ListDataSourceTypesInputSchema,
  output: ListDataSourceTypesOutputSchema,
  pagination: "none",
  async: "sync"
});
var ListDataSourceInstancesInputSchema = z4.object({
  projectId: z4.string().uuid().optional().describe("Project to list instances for. Auto-filled from SDK context when omitted."),
  dataSourceType: DataSourceTypeEnum.optional().describe("Filter instances by data source type.")
});
var ListDataSourceInstancesOutputSchema = z4.object({
  instances: z4.array(DataSourceInstanceSchema)
});
var listDataSourceInstances = defineOperation({
  operationId: "dataSources.listInstances",
  description: "List data source instances within one project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/data-sources/instances",
    tags: ["Data Sources"]
  },
  input: ListDataSourceInstancesInputSchema,
  output: ListDataSourceInstancesOutputSchema,
  pagination: "none",
  async: "sync"
});
var CreateDataSourceInstanceInputSchema = z4.object({
  projectId: z4.string().uuid().optional().describe("Project to create the instance in. Auto-filled from SDK context when omitted."),
  dataSourceType: DataSourceTypeEnum.describe("Data source type identifier."),
  mode: DataSourceInstanceModeEnum.optional().describe("Setup mode. Defaults to `managed` when metadata is provided, otherwise `connectionless`. Must be a mode the source supports (see `modes` on the type catalog)."),
  name: z4.string().optional().describe("Optional human-readable name for this instance."),
  metadata: z4.record(z4.string(), z4.unknown()).optional().describe("Vendor credentials and configuration for managed setup. Fields vary by data source type (see `metadataFields` on the type catalog). Required for managed mode; must be omitted for connectionless mode.")
});
var CreateDataSourceInstanceOutputSchema = z4.object({
  instance: DataSourceInstanceSchema.describe("The created instance."),
  streamId: z4.string().uuid().optional().describe("ID of the stream created alongside the instance. Present for connectionless instances (which always mint their keyed stream) and for managed sources that auto-provision a default stream."),
  publicKey: z4.string().optional().describe("Intake key minted for the instance. Store this securely — it is only shown once. Present for connectionless instances and for managed sources that ingest through a Sazabi endpoint."),
  endpointCards: z4.array(DataSourceEndpointCardSchema).optional().describe("Server-computed endpoint card(s) for the minted key — where to point the sender. Present for connectionless instances.")
});
var createDataSourceInstance = defineOperation({
  operationId: "dataSources.createInstance",
  description: "Create a data source instance. Managed mode takes vendor credentials in `metadata`, validates them, and provisions delivery behind the instance. Connectionless mode mints the instance plus a keyed stream and returns the intake key and endpoint card(s) to point the sender at.",
  backend: "api",
  route: {
    method: "POST",
    path: "/data-sources/instances",
    successStatus: 201,
    tags: ["Data Sources"]
  },
  input: CreateDataSourceInstanceInputSchema,
  output: CreateDataSourceInstanceOutputSchema,
  pagination: "none",
  async: "sync"
});
var GetDataSourceInstanceInputSchema = z4.object({
  instanceId: z4.string().uuid().describe("Instance ID to fetch.")
});
var GetDataSourceInstanceOutputSchema = z4.object({
  instance: DataSourceInstanceDetailSchema
});
var getDataSourceInstance = defineOperation({
  operationId: "dataSources.getInstance",
  description: "Get one data source instance by ID, including its streams and their endpoint card(s).",
  backend: "api",
  route: {
    method: "GET",
    path: "/data-sources/instances/{instanceId}",
    tags: ["Data Sources"]
  },
  input: GetDataSourceInstanceInputSchema,
  output: GetDataSourceInstanceOutputSchema,
  pagination: "none",
  async: "sync"
});
var UpdateDataSourceInstanceInputSchema = z4.object({
  instanceId: z4.string().uuid().describe("Instance ID to update."),
  name: z4.string().min(1).optional().describe("New display name for the instance."),
  enabled: z4.boolean().optional().describe("Pause (`false`) or resume (`true`) ingestion for all of the instance's streams. Reversible; never deletes anything.")
});
var UpdateDataSourceInstanceOutputSchema = z4.object({
  instance: DataSourceInstanceSchema
});
var updateDataSourceInstance = defineOperation({
  operationId: "dataSources.updateInstance",
  description: "Update a data source instance: rename it and/or pause or resume ingestion across its streams.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/data-sources/instances/{instanceId}",
    tags: ["Data Sources"]
  },
  input: UpdateDataSourceInstanceInputSchema,
  output: UpdateDataSourceInstanceOutputSchema,
  pagination: "none",
  async: "sync"
});
var DeleteDataSourceInstanceInputSchema = z4.object({
  instanceId: z4.string().uuid().describe("Instance ID to delete.")
});
var DeleteDataSourceInstanceOutputSchema = z4.object({
  success: z4.boolean(),
  teardownError: z4.string().nullable().describe("Null when vendor-side cleanup succeeded or was not needed; error message when remote cleanup failed and must be finished manually.")
});
var deleteDataSourceInstance = defineOperation({
  operationId: "dataSources.deleteInstance",
  description: "Delete a data source instance. Tombstones the instance and its streams, deactivates their intake keys (already-ingested data is preserved with its attribution), and runs vendor-side cleanup for managed instances when the source supports it.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/data-sources/instances/{instanceId}",
    successStatus: 200,
    tags: ["Data Sources"]
  },
  input: DeleteDataSourceInstanceInputSchema,
  output: DeleteDataSourceInstanceOutputSchema,
  pagination: "none",
  async: "sync"
});
var ListDataSourceStreamsInputSchema = z4.object({
  instanceId: z4.string().uuid().describe("Instance ID to list streams for."),
  enabled: z4.boolean().optional().describe("Optional filter on stream ingestion state. Omit to list all streams; pass true for only enabled streams or false for only paused streams.")
});
var ListDataSourceStreamsOutputSchema = z4.object({
  streams: z4.array(DataSourceStreamSchema)
});
var listDataSourceStreams = defineOperation({
  operationId: "dataSources.listStreams",
  description: "List the streams that belong to a data source instance.",
  backend: "api",
  route: {
    method: "GET",
    path: "/data-sources/instances/{instanceId}/streams",
    tags: ["Data Sources"]
  },
  input: ListDataSourceStreamsInputSchema,
  output: ListDataSourceStreamsOutputSchema,
  pagination: "none",
  async: "sync"
});
var CreateDataSourceStreamInputSchema = z4.object({
  instanceId: z4.string().uuid().describe("Instance ID to create the stream under."),
  displayName: z4.string().min(1).describe("Resource name, e.g. service or app name."),
  config: z4.record(z4.string(), z4.unknown()).optional().describe("Platform-specific stream configuration.")
});
var CreateDataSourceStreamOutputSchema = z4.object({
  streamId: z4.string().uuid().describe("ID of the created stream.")
});
var createDataSourceStream = defineOperation({
  operationId: "dataSources.createStream",
  description: "Create a new stream under a managed data source instance. Triggers async provisioning; poll the stream to track it. Connectionless instances are single-stream — create another instance instead.",
  backend: "api",
  route: {
    method: "POST",
    path: "/data-sources/instances/{instanceId}/streams",
    successStatus: 201,
    tags: ["Data Sources"]
  },
  input: CreateDataSourceStreamInputSchema,
  output: CreateDataSourceStreamOutputSchema,
  pagination: "none",
  async: "sync"
});
var GetDataSourceStreamInputSchema = z4.object({
  streamId: z4.string().uuid().describe("Stream ID to fetch.")
});
var GetDataSourceStreamOutputSchema = z4.object({
  stream: DataSourceStreamSchema
});
var getDataSourceStream = defineOperation({
  operationId: "dataSources.getStream",
  description: "Get one data source stream by ID. Use to poll provisioning status.",
  backend: "api",
  route: {
    method: "GET",
    path: "/data-sources/streams/{streamId}",
    tags: ["Data Sources"]
  },
  input: GetDataSourceStreamInputSchema,
  output: GetDataSourceStreamOutputSchema,
  pagination: "none",
  async: "sync"
});
var UpdateDataSourceStreamInputSchema = z4.object({
  streamId: z4.string().uuid().describe("Stream ID to update."),
  displayName: z4.string().min(1).optional().describe("New display name for the stream."),
  enabled: z4.boolean().optional().describe("Pause (`false`) or resume (`true`) ingestion for this stream. Reversible; never deletes anything.")
});
var UpdateDataSourceStreamOutputSchema = z4.object({
  stream: DataSourceStreamSchema
});
var updateDataSourceStream = defineOperation({
  operationId: "dataSources.updateStream",
  description: "Update a data source stream: rename it and/or pause or resume its ingestion.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/data-sources/streams/{streamId}",
    tags: ["Data Sources"]
  },
  input: UpdateDataSourceStreamInputSchema,
  output: UpdateDataSourceStreamOutputSchema,
  pagination: "none",
  async: "sync"
});
var DeleteDataSourceStreamInputSchema = z4.object({
  streamId: z4.string().uuid().describe("Stream ID to delete.")
});
var DeleteDataSourceStreamOutputSchema = z4.object({
  success: z4.boolean()
});
var deleteDataSourceStream = defineOperation({
  operationId: "dataSources.deleteStream",
  description: "Delete a data source stream. Tombstones the stream and deactivates its intake key. Deleting a connectionless instance's only stream tombstones the instance too.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/data-sources/streams/{streamId}",
    successStatus: 204,
    tags: ["Data Sources"]
  },
  input: DeleteDataSourceStreamInputSchema,
  output: DeleteDataSourceStreamOutputSchema,
  pagination: "none",
  async: "sync"
});
var dataSourcesContract = {
  listTypes: listDataSourceTypes.contract,
  listInstances: listDataSourceInstances.contract,
  createInstance: createDataSourceInstance.contract,
  getInstance: getDataSourceInstance.contract,
  updateInstance: updateDataSourceInstance.contract,
  deleteInstance: deleteDataSourceInstance.contract,
  listStreams: listDataSourceStreams.contract,
  createStream: createDataSourceStream.contract,
  getStream: getDataSourceStream.contract,
  updateStream: updateDataSourceStream.contract,
  deleteStream: deleteDataSourceStream.contract
};

// ../public-api-contracts/src/integrations.ts
import { z as z5 } from "zod";
var INTEGRATION_PROVIDER_VALUES = [
  "slack",
  "github",
  "linear",
  "pagerduty",
  "victorops",
  "rootly",
  "incident_io",
  "webhook",
  "teams",
  "bitbucket",
  "jira"
];
var IntegrationProviderEnum = z5.enum(INTEGRATION_PROVIDER_VALUES);
var IntegrationAuthTypeEnum = z5.enum([
  "oauth",
  "app_installation",
  "api_key"
]);
var IntegrationCapabilityEnum = z5.enum([
  "alert_routing",
  "inbound_webhooks",
  "messaging",
  "code_search",
  "health_check"
]);
var IntegrationConnectionStatusEnum = z5.enum([
  "pending",
  "connected",
  "error",
  "revoked"
]);
var IntegrationHealthStatusEnum = z5.enum([
  "healthy",
  "unhealthy",
  "unknown"
]);
var IntegrationProviderSchema = z5.object({
  id: IntegrationProviderEnum.describe("Integration provider identifier."),
  name: z5.string().describe("Human-readable display name."),
  description: z5.string().describe("Short description of the provider."),
  authType: IntegrationAuthTypeEnum.describe("Auth flow used to connect this provider."),
  capabilities: z5.array(IntegrationCapabilityEnum).describe("Capabilities the provider exposes once connected."),
  connectionCount: z5.number().int().describe("Number of active connections for this provider in the organization, including error-status connections that need attention.")
});
var IntegrationConnectionSchema = z5.object({
  id: z5.string().uuid(),
  provider: IntegrationProviderEnum,
  displayName: z5.string().nullable(),
  status: IntegrationConnectionStatusEnum,
  isActive: z5.boolean().describe("Whether this connection counts as connected (status 'connected' or 'error'). An error-status connection is the organization's connection — broken, not absent."),
  needsAttention: z5.boolean().describe("Whether the connection should surface a reconnect prompt (status 'error' or health status 'unhealthy')."),
  metadata: z5.record(z5.string(), z5.unknown()).describe("Non-secret provider metadata (e.g. workspace/team names)."),
  healthStatus: IntegrationHealthStatusEnum,
  healthMessage: z5.string().nullable(),
  healthCheckedAt: z5.string().datetime().nullable(),
  healthConsecutiveFailures: z5.number().int(),
  connectedBy: z5.string().nullable(),
  createdAt: z5.string().datetime(),
  updatedAt: z5.string().datetime()
});
var ListIntegrationProvidersInputSchema = z5.object({
  organizationId: z5.string().min(1).optional().describe("Organization to list providers for. Auto-filled from CLI and SDK context when omitted.")
});
var ListIntegrationProvidersOutputSchema = z5.object({
  providers: z5.array(IntegrationProviderSchema)
});
var listIntegrationProviders = defineOperation({
  operationId: "integrations.listProviders",
  description: "List supported integration providers and how many connections the organization has for each.",
  backend: "api",
  route: {
    method: "GET",
    path: "/integrations/providers",
    tags: ["Integrations"]
  },
  input: ListIntegrationProvidersInputSchema,
  output: ListIntegrationProvidersOutputSchema,
  pagination: "none",
  async: "sync"
});
var ListIntegrationConnectionsInputSchema = z5.object({
  organizationId: z5.string().min(1).optional().describe("Organization to list connections for. Auto-filled from CLI and SDK context when omitted."),
  provider: IntegrationProviderEnum.optional().describe("Filter connections by provider.")
});
var ListIntegrationConnectionsOutputSchema = z5.object({
  connections: z5.array(IntegrationConnectionSchema)
});
var listIntegrationConnections = defineOperation({
  operationId: "integrations.listConnections",
  description: "List integration connections and their connection state for the organization.",
  backend: "api",
  route: {
    method: "GET",
    path: "/integrations/connections",
    tags: ["Integrations"]
  },
  input: ListIntegrationConnectionsInputSchema,
  output: ListIntegrationConnectionsOutputSchema,
  pagination: "none",
  async: "sync"
});
var GetIntegrationConnectionInputSchema = z5.object({
  organizationId: z5.string().min(1).optional().describe("Organization the connection belongs to. Auto-filled from CLI and SDK context when omitted."),
  connectionId: z5.string().uuid().describe("Connection ID to fetch.")
});
var GetIntegrationConnectionOutputSchema = z5.object({
  connection: IntegrationConnectionSchema
});
var getIntegrationConnection = defineOperation({
  operationId: "integrations.getConnection",
  description: "Get one integration connection by ID (non-secret config only).",
  backend: "api",
  route: {
    method: "GET",
    path: "/integrations/connections/{connectionId}",
    tags: ["Integrations"]
  },
  input: GetIntegrationConnectionInputSchema,
  output: GetIntegrationConnectionOutputSchema,
  pagination: "none",
  async: "sync"
});

// ../public-api-contracts/src/issues.ts
import { z as z6 } from "zod";
var IssueSchema = z6.object({
  id: z6.string().uuid(),
  projectId: z6.string().uuid(),
  name: z6.string(),
  description: z6.string().nullable(),
  status: z6.enum(["open", "resolved", "ignored"]),
  severity: z6.enum(["low", "medium", "high", "critical"]),
  statusComponentId: z6.string().uuid().nullable(),
  createdAt: z6.string().datetime(),
  resolvedAt: z6.string().datetime().nullable(),
  mutedAt: z6.string().datetime().nullable(),
  muteHitCount: z6.number().int().nonnegative(),
  lastActivityAt: z6.string().datetime().nullable(),
  lastDeliveredAt: z6.string().datetime().nullable(),
  locked: z6.boolean(),
  redacted: z6.boolean()
});
var IssueSlackChannelSchema = z6.object({
  channelId: z6.string().nullable(),
  channelName: z6.string().nullable(),
  threadTs: z6.string().nullable(),
  permalink: z6.string().nullable(),
  workspaceName: z6.string().nullable()
});
var IssueDetailSchema = IssueSchema.extend({
  slackChannels: z6.array(IssueSlackChannelSchema)
});
var IssueSearchItemSchema = IssueSchema.extend({
  delivery: z6.record(z6.string(), z6.unknown()).nullable().optional()
});
var CreateIssueInputObjectSchema = z6.object({
  projectId: z6.string().uuid().optional().describe("Project to create the issue in. Auto-filled from CLI and SDK context when omitted."),
  name: z6.string().trim().min(1).optional().describe("Stable issue name for indexing and mute matching. When omitted, the name is derived from contentMdx."),
  contentMdx: z6.string().trim().min(1, "contentMdx cannot be empty").describe("Safe Sazabi MDX document for the issue body (impact, root cause, remediation, evidence)."),
  severity: z6.enum(["low", "medium", "high", "critical"]).default("medium").describe("Issue severity used for prioritization and triage."),
  statusComponentId: z6.string().uuid().optional().describe("Optional status component ID to link to the issue."),
  statusStartedAt: z6.string().datetime({ offset: true }).optional().describe("Optional ISO timestamp for when the linked status-page incident began.")
});
var CreateIssueInputSchema = CreateIssueInputObjectSchema.superRefine((value, ctx) => {
  if (value.statusStartedAt && !value.statusComponentId) {
    ctx.addIssue({
      code: "custom",
      path: ["statusStartedAt"],
      message: "statusStartedAt requires statusComponentId."
    });
  }
});
var CreateIssueOutputSchema = z6.object({
  issue: IssueSchema,
  duplicateIssueId: z6.string().uuid().optional().describe("Present when creation reused an existing open issue instead of creating a new one.")
});
var ListIssuesInputSchema = z6.object({
  projectId: z6.string().uuid().optional().describe("Project to list issues for. Auto-filled from CLI and SDK context when omitted."),
  limit: z6.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of issues to return per page."),
  cursor: z6.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),
  status: z6.enum(["open", "resolved", "ignored"]).optional().describe("Filter by issue status."),
  severity: z6.enum(["low", "medium", "high", "critical"]).optional().describe("Filter by severity."),
  statusComponentId: z6.string().uuid().optional().describe("Filter by status component ID.")
});
var ListIssuesOutputSchema = z6.object({
  issues: z6.array(IssueSchema),
  nextCursor: z6.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var SearchIssuesInputSchema = ListIssuesInputSchema.extend({
  name: z6.string().trim().optional().describe("Case-insensitive partial match on issue name."),
  includeDeliveryMetadata: z6.union([z6.boolean(), z6.stringbool()]).default(false).describe("When true, include raw delivery metadata in each issue.")
});
var SearchIssuesOutputSchema = z6.object({
  issues: z6.array(IssueSearchItemSchema),
  nextCursor: z6.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var CountIssuesInputSchema = SearchIssuesInputSchema.omit({
  limit: true,
  cursor: true,
  includeDeliveryMetadata: true
});
var IssueCountBreakdownSchema = z6.object({
  open: z6.number().int().nonnegative(),
  resolved: z6.number().int().nonnegative(),
  ignored: z6.number().int().nonnegative()
});
var IssueSeverityCountBreakdownSchema = z6.object({
  low: z6.number().int().nonnegative(),
  medium: z6.number().int().nonnegative(),
  high: z6.number().int().nonnegative(),
  critical: z6.number().int().nonnegative()
});
var CountIssuesOutputSchema = z6.object({
  total: z6.number().int().nonnegative(),
  byStatus: IssueCountBreakdownSchema,
  bySeverity: IssueSeverityCountBreakdownSchema,
  filters: z6.object({
    name: z6.string().nullable(),
    status: z6.enum(["open", "resolved", "ignored"]).nullable(),
    severity: z6.enum(["low", "medium", "high", "critical"]).nullable(),
    statusComponentId: z6.string().uuid().nullable()
  })
});
var GetIssueInputSchema = z6.object({
  issueId: z6.string().uuid().describe("Issue ID to retrieve.")
});
var GetIssueOutputSchema = z6.object({ issue: IssueDetailSchema });
var ResolveIssueInputSchema = z6.object({
  issueId: z6.string().uuid().describe("Issue ID to resolve."),
  statusResolvedAt: z6.string().datetime({ offset: true }).optional().describe("Optional ISO timestamp for when the linked status-page incident ended.")
});
var ResolveIssueOutputSchema = z6.object({ issue: IssueSchema });
var IgnoreIssueInputSchema = z6.object({
  issueId: z6.string().uuid().describe("Issue ID to ignore.")
});
var IgnoreIssueOutputSchema = z6.object({ issue: IssueSchema });
var ReopenIssueInputSchema = z6.object({
  issueId: z6.string().uuid().describe("Issue ID to reopen.")
});
var ReopenIssueOutputSchema = z6.object({ issue: IssueSchema });
var ReassignAndReopenIssueInputSchema = z6.object({
  issueId: z6.string().uuid().describe("Issue ID to reassign and reopen."),
  targetComponentId: z6.string().uuid().describe("Active canonical component that will own the reopened issue.")
});
var ReassignAndReopenIssueOutputSchema = z6.object({
  issue: IssueSchema,
  sourceComponentId: z6.string().uuid(),
  targetComponentId: z6.string().uuid()
});
var MuteIssueInputSchema = z6.object({
  issueId: z6.string().uuid().describe("Issue ID to mute.")
});
var MuteIssueOutputSchema = z6.object({ issue: IssueSchema });
var UnmuteIssueInputSchema = z6.object({
  issueId: z6.string().uuid().describe("Issue ID to unmute.")
});
var UnmuteIssueOutputSchema = z6.object({ issue: IssueSchema });
var createIssue = defineOperation({
  operationId: "issues.create",
  description: "Create an issue in a project, returning an existing open issue when root-cause deduplication finds a match.",
  backend: "api",
  route: {
    method: "POST",
    path: "/issues",
    tags: ["Issues"],
    successStatus: 201
  },
  input: CreateIssueInputSchema,
  output: CreateIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var listIssues = defineOperation({
  operationId: "issues.list",
  description: "List issues in a project, optionally filtered by status and severity.",
  backend: "api",
  route: { method: "GET", path: "/issues", tags: ["Issues"] },
  input: ListIssuesInputSchema,
  output: ListIssuesOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var searchIssues = defineOperation({
  operationId: "issues.search",
  description: "Search issues in a project by name, status, and severity.",
  backend: "api",
  route: { method: "GET", path: "/issues/search", tags: ["Issues"] },
  input: SearchIssuesInputSchema,
  output: SearchIssuesOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var countIssues = defineOperation({
  operationId: "issues.count",
  description: "Count issues in a project with status and severity breakdowns.",
  backend: "api",
  route: { method: "GET", path: "/issues/count", tags: ["Issues"] },
  input: CountIssuesInputSchema,
  output: CountIssuesOutputSchema,
  pagination: "none",
  async: "sync"
});
var getIssue = defineOperation({
  operationId: "issues.get",
  description: "Get a single issue by ID.",
  backend: "api",
  route: { method: "GET", path: "/issues/{issueId}", tags: ["Issues"] },
  input: GetIssueInputSchema,
  output: GetIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var resolveIssue = defineOperation({
  operationId: "issues.resolve",
  description: "Resolve an open issue.",
  backend: "api",
  route: {
    method: "POST",
    path: "/issues/{issueId}/resolve",
    tags: ["Issues"]
  },
  input: ResolveIssueInputSchema,
  output: ResolveIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var ignoreIssue = defineOperation({
  operationId: "issues.ignore",
  description: "Ignore an open issue.",
  backend: "api",
  route: {
    method: "POST",
    path: "/issues/{issueId}/ignore",
    tags: ["Issues"]
  },
  input: IgnoreIssueInputSchema,
  output: IgnoreIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var reopenIssue = defineOperation({
  operationId: "issues.reopen",
  description: "Reopen a resolved or ignored issue.",
  backend: "api",
  route: {
    method: "POST",
    path: "/issues/{issueId}/reopen",
    tags: ["Issues"]
  },
  input: ReopenIssueInputSchema,
  output: ReopenIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var reassignAndReopenIssue = defineOperation({
  operationId: "issues.reassignAndReopen",
  description: "Atomically reassign a resolved or ignored issue to an active component and reopen it.",
  backend: "api",
  route: {
    method: "POST",
    path: "/issues/{issueId}/reassign-and-reopen",
    tags: ["Issues"]
  },
  input: ReassignAndReopenIssueInputSchema,
  output: ReassignAndReopenIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var muteIssue = defineOperation({
  operationId: "issues.mute",
  description: "Mute an issue, suppressing future re-fires without changing status.",
  backend: "api",
  route: {
    method: "POST",
    path: "/issues/{issueId}/mute",
    tags: ["Issues"]
  },
  input: MuteIssueInputSchema,
  output: MuteIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var unmuteIssue = defineOperation({
  operationId: "issues.unmute",
  description: "Unmute an issue, preserving its current status.",
  backend: "api",
  route: {
    method: "POST",
    path: "/issues/{issueId}/unmute",
    tags: ["Issues"]
  },
  input: UnmuteIssueInputSchema,
  output: UnmuteIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var issuesContract = {
  count: countIssues.contract,
  create: createIssue.contract,
  list: listIssues.contract,
  search: searchIssues.contract,
  get: getIssue.contract,
  resolve: resolveIssue.contract,
  ignore: ignoreIssue.contract,
  reopen: reopenIssue.contract,
  reassignAndReopen: reassignAndReopenIssue.contract,
  mute: muteIssue.contract,
  unmute: unmuteIssue.contract
};

// ../public-api-contracts/src/keys.ts
import { z as z7 } from "zod";
var KEY_NAME_REGEX = /^[a-zA-Z0-9\s\-_]+$/;
var BaseKeySchema = z7.object({
  id: z7.string().uuid(),
  name: z7.string(),
  expiresAt: z7.string().datetime().nullable(),
  lastUsedAt: z7.string().datetime().nullable(),
  createdAt: z7.string().datetime()
});
var PublicKeySchema = BaseKeySchema.extend({
  projectId: z7.string().uuid(),
  dataSourceConnectionId: z7.string().uuid().nullable().describe("Linked data source connection ID when this key is scoped to one data source."),
  deactivatedAt: z7.string().datetime().nullable().describe("Timestamp when this public key was deactivated.")
});
var SecretKeySchema = BaseKeySchema.extend({
  projectId: z7.string().uuid().nullable()
});
var ListKeysInputSchema = z7.object({
  projectId: z7.string().uuid().optional().describe("Project to list keys for. Auto-filled from CLI and SDK context when omitted."),
  limit: z7.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),
  cursor: z7.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")
});
var ListPublicKeysOutputSchema = z7.object({
  publicKeys: z7.array(PublicKeySchema),
  nextCursor: z7.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var ListSecretKeysOutputSchema = z7.object({
  secretKeys: z7.array(SecretKeySchema),
  nextCursor: z7.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var GetKeyInputSchema = z7.object({
  projectId: z7.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),
  keyId: z7.string().uuid().describe("Key ID to fetch.")
});
var GetPublicKeyOutputSchema = z7.object({
  publicKey: PublicKeySchema
});
var GetSecretKeyOutputSchema = z7.object({
  secretKey: SecretKeySchema
});
var CreatePublicKeyOutputSchema = z7.object({
  publicKey: PublicKeySchema.extend({
    value: z7.string()
  })
});
var EnsureLogForwardingPublicKeyInputSchema = z7.object({
  projectId: z7.string().uuid().optional().describe("Project to ensure the log forwarding key for. Auto-filled from CLI and SDK context when omitted.")
});
var CreateSecretKeyOutputSchema = z7.object({
  secretKey: SecretKeySchema.extend({
    value: z7.string()
  })
});
var UpdateKeyInputSchema = z7.object({
  projectId: z7.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),
  keyId: z7.string().uuid().describe("Key ID to update."),
  name: z7.string().min(1, "Name is required").max(100, "Name must be 100 characters or less").regex(KEY_NAME_REGEX, "Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),
  expiresAt: z7.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")
});
var DeactivatePublicKeyInputSchema = z7.object({
  params: z7.object({
    keyId: z7.string().uuid().describe("Public key ID to deactivate.")
  }),
  query: z7.object({
    projectId: z7.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted.")
  })
}).transform(({ params, query }) => ({
  ...query,
  ...params
}));
var DeactivatePublicKeyOutputSchema = GetPublicKeyOutputSchema;
var DeleteKeyOutputSchema = z7.void();
var ListSecretKeysInputSchema = z7.object({
  limit: z7.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),
  cursor: z7.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")
});
var GetSecretKeyInputSchema = z7.object({
  keyId: z7.string().uuid().describe("Key ID to fetch.")
});
var CreateSecretKeyInputSchema = z7.object({
  projectId: z7.string().uuid().optional().describe("Project to scope this key to. When set, the key can only access resources within this project. Omit for organization-wide access."),
  name: z7.string().min(1, "Name is required").max(100, "Name must be 100 characters or less").regex(KEY_NAME_REGEX, "Name can only contain letters, numbers, spaces, hyphens, and underscores").describe("Human-readable name for the key."),
  expiresAt: z7.string().datetime().optional().describe("Optional expiration timestamp for the key.")
});
var UpdateSecretKeyInputSchema = z7.object({
  keyId: z7.string().uuid().describe("Key ID to update."),
  name: z7.string().min(1, "Name is required").max(100, "Name must be 100 characters or less").regex(KEY_NAME_REGEX, "Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),
  expiresAt: z7.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")
});
var DeleteSecretKeyInputSchema = z7.object({
  params: z7.object({
    keyId: z7.string().uuid().describe("Key ID to delete.")
  })
}).transform(({ params }) => ({
  ...params
}));
var listPublicKeys = defineOperation({
  operationId: "publicKeys.list",
  description: "List public keys within one project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/public-keys",
    tags: ["Public Keys"]
  },
  input: ListKeysInputSchema,
  output: ListPublicKeysOutputSchema,
  pagination: "cursor",
  async: "sync",
  examples: [
    {
      name: "list-public-keys",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111",
        limit: 25
      },
      output: {
        publicKeys: [
          {
            id: "22222222-2222-4222-8222-222222222222",
            projectId: "11111111-1111-4111-8111-111111111111",
            name: "CLI forwarder",
            dataSourceConnectionId: null,
            deactivatedAt: null,
            expiresAt: null,
            lastUsedAt: null,
            createdAt: "2026-01-01T00:00:00.000Z"
          }
        ],
        nextCursor: null
      }
    }
  ]
});
var getPublicKey = defineOperation({
  operationId: "publicKeys.get",
  description: "Get one public key within one project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/public-keys/{keyId}",
    tags: ["Public Keys"]
  },
  input: GetKeyInputSchema,
  output: GetPublicKeyOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "get-public-key",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111",
        keyId: "22222222-2222-4222-8222-222222222222"
      },
      output: {
        publicKey: {
          id: "22222222-2222-4222-8222-222222222222",
          projectId: "11111111-1111-4111-8111-111111111111",
          name: "CLI forwarder",
          dataSourceConnectionId: null,
          deactivatedAt: null,
          expiresAt: null,
          lastUsedAt: null,
          createdAt: "2026-01-01T00:00:00.000Z"
        }
      }
    }
  ]
});
var ensureLogForwardingPublicKey = defineOperation({
  operationId: "publicKeys.ensureLogForwarding",
  description: "Ensure a reusable project-scoped public key exists for CLI log forwarding.",
  backend: "api",
  route: {
    method: "POST",
    path: "/public-keys/log-forwarding/ensure",
    tags: ["Public Keys"]
  },
  input: EnsureLogForwardingPublicKeyInputSchema,
  output: CreatePublicKeyOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "ensure-log-forwarding-public-key",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111"
      },
      output: {
        publicKey: {
          id: "22222222-2222-4222-8222-222222222222",
          projectId: "11111111-1111-4111-8111-111111111111",
          name: "sazabi-cli-forward",
          dataSourceConnectionId: null,
          deactivatedAt: null,
          expiresAt: null,
          lastUsedAt: null,
          createdAt: "2026-01-01T00:00:00.000Z",
          value: "sazabi_public_example"
        }
      }
    }
  ]
});
var updatePublicKey = defineOperation({
  operationId: "publicKeys.update",
  description: "Update one public key within one project.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/public-keys/{keyId}",
    tags: ["Public Keys"]
  },
  input: UpdateKeyInputSchema,
  output: GetPublicKeyOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "rename-public-key",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111",
        keyId: "22222222-2222-4222-8222-222222222222",
        name: "Updated CLI forwarder"
      },
      output: {
        publicKey: {
          id: "22222222-2222-4222-8222-222222222222",
          projectId: "11111111-1111-4111-8111-111111111111",
          name: "Updated CLI forwarder",
          dataSourceConnectionId: null,
          deactivatedAt: null,
          expiresAt: null,
          lastUsedAt: null,
          createdAt: "2026-01-01T00:00:00.000Z"
        }
      }
    }
  ]
});
var deactivatePublicKey = defineOperation({
  operationId: "publicKeys.deactivate",
  description: "Deactivate one public key within one project. Recently validated requests may continue to authenticate for a short period after deactivation.",
  backend: "api",
  route: {
    method: "POST",
    path: "/public-keys/{keyId}/deactivate",
    tags: ["Public Keys"],
    inputStructure: "detailed"
  },
  input: DeactivatePublicKeyInputSchema,
  output: DeactivatePublicKeyOutputSchema,
  pagination: "none",
  async: "sync"
});
var listSecretKeys = defineOperation({
  operationId: "secretKeys.list",
  description: "List secret keys within the organization.",
  backend: "api",
  route: {
    method: "GET",
    path: "/secret-keys",
    tags: ["Secret Keys"]
  },
  input: ListSecretKeysInputSchema,
  output: ListSecretKeysOutputSchema,
  pagination: "cursor",
  async: "sync",
  examples: [
    {
      name: "list-secret-keys",
      input: {
        limit: 25
      },
      output: {
        secretKeys: [
          {
            id: "33333333-3333-4333-8333-333333333333",
            projectId: null,
            name: "CI agent",
            expiresAt: null,
            lastUsedAt: null,
            createdAt: "2026-01-01T00:00:00.000Z"
          }
        ],
        nextCursor: null
      }
    }
  ]
});
var getSecretKey = defineOperation({
  operationId: "secretKeys.get",
  description: "Get one secret key within the organization.",
  backend: "api",
  route: {
    method: "GET",
    path: "/secret-keys/{keyId}",
    tags: ["Secret Keys"]
  },
  input: GetSecretKeyInputSchema,
  output: GetSecretKeyOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "get-secret-key",
      input: {
        keyId: "33333333-3333-4333-8333-333333333333"
      },
      output: {
        secretKey: {
          id: "33333333-3333-4333-8333-333333333333",
          projectId: null,
          name: "CI agent",
          expiresAt: null,
          lastUsedAt: null,
          createdAt: "2026-01-01T00:00:00.000Z"
        }
      }
    }
  ]
});
var createSecretKey = defineOperation({
  operationId: "secretKeys.create",
  description: "Create one secret key within the organization.",
  backend: "api",
  route: {
    method: "POST",
    path: "/secret-keys",
    successStatus: 201,
    tags: ["Secret Keys"]
  },
  input: CreateSecretKeyInputSchema,
  output: CreateSecretKeyOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "create-secret-key",
      input: {
        name: "CI agent"
      },
      output: {
        secretKey: {
          id: "33333333-3333-4333-8333-333333333333",
          projectId: null,
          name: "CI agent",
          expiresAt: null,
          lastUsedAt: null,
          createdAt: "2026-01-01T00:00:00.000Z",
          value: "sazabi_secret_example"
        }
      }
    }
  ]
});
var updateSecretKey = defineOperation({
  operationId: "secretKeys.update",
  description: "Update one secret key within the organization.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/secret-keys/{keyId}",
    tags: ["Secret Keys"]
  },
  input: UpdateSecretKeyInputSchema,
  output: GetSecretKeyOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "rename-secret-key",
      input: {
        keyId: "33333333-3333-4333-8333-333333333333",
        name: "Updated CI agent"
      },
      output: {
        secretKey: {
          id: "33333333-3333-4333-8333-333333333333",
          projectId: null,
          name: "Updated CI agent",
          expiresAt: null,
          lastUsedAt: null,
          createdAt: "2026-01-01T00:00:00.000Z"
        }
      }
    }
  ]
});
var deleteSecretKey = defineOperation({
  operationId: "secretKeys.delete",
  description: "Delete one secret key within the organization.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/secret-keys/{keyId}",
    successStatus: 204,
    tags: ["Secret Keys"],
    inputStructure: "detailed"
  },
  input: DeleteSecretKeyInputSchema,
  output: DeleteKeyOutputSchema,
  pagination: "none",
  async: "sync"
});
var publicKeysContract = {
  list: listPublicKeys.contract,
  get: getPublicKey.contract,
  ensureLogForwarding: ensureLogForwardingPublicKey.contract,
  update: updatePublicKey.contract,
  deactivate: deactivatePublicKey.contract
};
var secretKeysContract = {
  list: listSecretKeys.contract,
  get: getSecretKey.contract,
  create: createSecretKey.contract,
  update: updateSecretKey.contract,
  delete: deleteSecretKey.contract
};

// ../public-api-contracts/src/logs.ts
import { z as z8 } from "zod";
var FilterOperatorSchema = z8.enum([
  "eq",
  "neq",
  "in",
  "contains",
  "starts_with",
  "gt",
  "gte",
  "lt",
  "lte",
  "between",
  "exists"
]).describe("Filter operator: 'eq' (equals), 'neq' (not equals), 'in' (in array), 'contains' (substring), 'starts_with' (prefix), 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal), 'between' (range), 'exists' (field exists)");
var SearchModeSchema = z8.enum(["any", "all", "phrase"]).describe("Search mode: 'any' (match any token), 'all' (match all tokens), 'phrase' (exact phrase match)");
var LogSearchSchema = z8.object({
  query: z8.string().min(1, "Search query must be at least 1 character").max(500, "Search query must be at most 500 characters").describe("Search query text (1-500 characters)"),
  fields: z8.array(z8.string()).optional().describe("Fields to search in (defaults to backend allowlist)"),
  mode: SearchModeSchema.optional().default("all").describe("Token matching mode")
});
var LogFilterSchema = z8.object({
  field: z8.string().describe("Field name to filter on"),
  op: FilterOperatorSchema.describe("Filter operator"),
  value: z8.union([
    z8.string(),
    z8.number(),
    z8.boolean(),
    z8.array(z8.union([z8.string(), z8.number()])),
    z8.object({
      from: z8.string(),
      to: z8.string()
    })
  ]).describe("Filter value (type depends on operator)")
}).superRefine((filter, ctx) => {
  if (filter.op === "in" && !Array.isArray(filter.value)) {
    ctx.addIssue({
      code: z8.ZodIssueCode.custom,
      message: "Value must be an array when op is 'in'",
      path: ["value"]
    });
  }
  if (filter.op === "between") {
    const v = filter.value;
    const isRange = typeof v === "object" && v !== null && "from" in v && "to" in v;
    if (!isRange) {
      ctx.addIssue({
        code: z8.ZodIssueCode.custom,
        message: "Value must be an object with from/to when op is 'between'",
        path: ["value"]
      });
    }
  }
  if (filter.op === "exists" && typeof filter.value !== "boolean") {
    ctx.addIssue({
      code: z8.ZodIssueCode.custom,
      message: "Value must be boolean when op is 'exists'",
      path: ["value"]
    });
  }
});
var LogSortSchema = z8.object({
  field: z8.string().describe("Field name to sort by"),
  direction: z8.enum(["asc", "desc"]).default("desc").describe("Sort direction: 'asc' for ascending, 'desc' for descending")
});
var LogPaginationSchema = z8.object({
  limit: z8.number().int().min(1, "Limit must be at least 1").max(1000, "Limit must be at most 1000").default(50).describe("Maximum number of rows to return"),
  cursor: z8.string().optional().describe("Opaque cursor from previous response for pagination")
});
var QueryLogsInputSchema = z8.object({
  projectId: z8.string().uuid().optional().describe("Project to query logs for. Auto-filled from CLI and SDK context when omitted."),
  search: LogSearchSchema.optional().describe("Full-text search configuration"),
  filters: z8.array(LogFilterSchema).optional().describe("Structured filter clauses (ANDed together). When no `timestamp` filter is provided, queries default to a 24h look-back window; pass an explicit `timestamp` filter to query a different range."),
  select: z8.array(z8.string()).optional().describe("Fields to return (defaults to backend default set)"),
  sort: LogSortSchema.optional().describe("Sort configuration (defaults to timestamp desc)"),
  pagination: LogPaginationSchema.optional().describe("Pagination configuration")
});
var DEFAULT_QUERY_WINDOW_MS = 24 * 60 * 60 * 1000;
var LogBackendIdSchema = z8.enum([
  "clickhouse",
  "better-stack",
  "datadog",
  "gcp",
  "axiom",
  "cloudwatch",
  "sentry",
  "posthog",
  "mezmo"
]);
var LogBackendKindSchema = z8.enum(["native", "external"]);
var LogsSchemaInputSchema = z8.object({
  projectId: z8.string().uuid().optional().describe("Project to inspect. Auto-filled from CLI and SDK context when omitted.")
});
var LogsSchemaOutputSchema = z8.object({
  backend: z8.object({
    id: LogBackendIdSchema,
    name: z8.string(),
    kind: LogBackendKindSchema
  }).describe("Active log backend for the project"),
  features: z8.array(z8.string()).describe("Backend features registered on the server"),
  commands: z8.array(z8.enum(["schema", "query", "volume", "patterns", "nativeQuery"])).describe("CLI/API commands available for this backend"),
  queryableFields: z8.array(z8.string()).describe("Fields accepted by the normalized logs.query contract"),
  searchableFields: z8.array(z8.string()).describe("Fields accepted by logs.query full-text search"),
  observedServiceNames: z8.array(z8.string()).describe("Recently observed service names for this project"),
  observedAttributeKeys: z8.array(z8.string()).describe("Recently observed log attribute keys for this project"),
  schemaContext: z8.record(z8.string(), z8.any()).optional().describe("Backend-specific schema guidance and examples")
});
var LogsVolumeIntervalSchema = z8.enum(["1m", "5m", "15m", "1h"]);
var LogsVolumeDimensionSchema = z8.enum([
  "service_name",
  "severity_text",
  "environment"
]);
var LogsVolumeInputSchema = z8.object({
  projectId: z8.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),
  startDate: z8.string().datetime({ offset: true }),
  endDate: z8.string().datetime({ offset: true }),
  interval: LogsVolumeIntervalSchema.optional().describe("Aggregation bucket size for the volume series"),
  groupBy: LogsVolumeDimensionSchema.optional().describe("Optional field to split volume series by"),
  filters: z8.object({
    service_name: z8.string().optional(),
    severity_text: z8.string().optional(),
    environment: z8.string().optional()
  }).optional()
}).refine((data) => new Date(data.startDate) < new Date(data.endDate), {
  message: "startDate must be before endDate",
  path: ["endDate"]
});
var LogsVolumeOutputSchema = z8.object({
  total: z8.number().nonnegative(),
  startDate: z8.string().datetime({ offset: true }),
  endDate: z8.string().datetime({ offset: true }),
  interval: LogsVolumeIntervalSchema,
  series: z8.array(z8.object({
    group: z8.string(),
    total: z8.number().nonnegative(),
    points: z8.array(z8.object({
      bucket: z8.string(),
      count: z8.number().nonnegative()
    }))
  }))
});
var LogsPatternsInputSchema = z8.object({
  projectId: z8.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),
  query: z8.string().min(1).max(500).optional().describe("Optional text to match against normalized log patterns"),
  severity: z8.string().optional().describe("Optional severity_text value, for example ERROR"),
  startDate: z8.string().datetime({ offset: true }).optional().describe("Optional earliest last-seen timestamp"),
  endDate: z8.string().datetime({ offset: true }).optional().describe("Optional latest last-seen timestamp"),
  limit: z8.number().int().min(1).max(100).default(25).describe("Maximum number of log patterns to return")
}).refine((data) => !data.startDate || !data.endDate || new Date(data.startDate) < new Date(data.endDate), {
  message: "startDate must be before endDate",
  path: ["endDate"]
});
var LogPatternSchema = z8.object({
  serviceName: z8.string().nullable(),
  fingerprint: z8.string(),
  pattern: z8.string(),
  severity: z8.string().nullable(),
  occurrences: z8.number().nonnegative(),
  firstSeen: z8.string().nullable(),
  lastSeen: z8.string().nullable(),
  representativeId: z8.string().nullable()
});
var LogsPatternsOutputSchema = z8.object({
  patterns: z8.array(LogPatternSchema),
  meta: z8.object({
    backendId: LogBackendIdSchema,
    count: z8.number().int().nonnegative(),
    took: z8.number().nonnegative()
  })
});
var LogsNativeQueryInputSchema = z8.object({
  projectId: z8.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),
  query: z8.string().min(1, "Query cannot be empty").max(1e4, "Query must be 10000 characters or less")
});
var LogsNativeQueryOutputSchema = z8.object({
  result: z8.string().describe("Backend-formatted query result"),
  format: z8.literal("text"),
  meta: z8.object({
    backendId: LogBackendIdSchema,
    took: z8.number().nonnegative(),
    truncated: z8.boolean()
  })
});
var LogsSearchNaturalInputSchema = z8.object({
  projectId: z8.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),
  query: z8.string().min(1, "Query must be at least 1 character long.").max(4000, "Query must be at most 4000 characters").describe("Natural-language logs question. Examples: 'api request failures in the last day', 'timeouts in intake', 'top ERROR patterns for public-api'.")
});
var LogsSearchNaturalOutputSchema = z8.object({
  answer: z8.string().describe("Evidence-backed natural-language answer to the logs question"),
  steps: z8.number().int().nonnegative().describe("Number of nested model steps used"),
  toolCalls: z8.number().int().nonnegative().describe("Number of nested tool calls used"),
  compacted: z8.boolean().describe("Whether nested messages were compacted during the search"),
  meta: z8.object({
    backendId: LogBackendIdSchema,
    took: z8.number().nonnegative(),
    modelProvider: z8.string().optional(),
    modelId: z8.string().optional()
  })
});
var LogPaginationResponseSchema = z8.object({
  cursor: z8.string().nullable().describe("Cursor for next page (null if no more results)"),
  hasMore: z8.boolean().describe("Whether more results are available")
});
var LogQueryMetaSchema = z8.object({
  count: z8.number().int().nonnegative().describe("Number of log rows returned in this response"),
  took: z8.number().nonnegative().describe("Query execution time in milliseconds")
});
var QueryLogsOutputSchema = z8.object({
  data: z8.array(z8.record(z8.string(), z8.any())).describe("Array of log rows with selected fields"),
  nextCursor: z8.string().nullable().describe("Pass as 'cursor' in the next query to fetch the next page. Null when there are no more results."),
  meta: LogQueryMetaSchema.describe("Query execution metadata")
});
var queryLogs = defineOperation({
  operationId: "logs.query",
  description: "Query logs within one project.",
  backend: "api",
  route: {
    method: "POST",
    path: "/logs/query",
    tags: ["Logs"]
  },
  input: QueryLogsInputSchema,
  output: QueryLogsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var logsSchema = defineOperation({
  operationId: "logs.schema",
  description: "Describe the active log backend, supported commands, query fields, and schema context.",
  backend: "api",
  route: {
    method: "POST",
    path: "/logs/schema",
    tags: ["Logs"]
  },
  input: LogsSchemaInputSchema,
  output: LogsSchemaOutputSchema,
  pagination: "none",
  async: "sync"
});
var logsVolume = defineOperation({
  operationId: "logs.volume",
  description: "Query pre-aggregated log volume for one project.",
  backend: "api",
  route: {
    method: "POST",
    path: "/logs/volume",
    tags: ["Logs"]
  },
  input: LogsVolumeInputSchema,
  output: LogsVolumeOutputSchema,
  pagination: "none",
  async: "sync"
});
var logsPatterns = defineOperation({
  operationId: "logs.patterns",
  description: "Query normalized log patterns for discovery workflows.",
  backend: "api",
  route: {
    method: "POST",
    path: "/logs/patterns",
    tags: ["Logs"]
  },
  input: LogsPatternsInputSchema,
  output: LogsPatternsOutputSchema,
  pagination: "none",
  async: "sync"
});
var logsNativeQuery = defineOperation({
  operationId: "logs.nativeQuery",
  description: "Run a read-only query in the log store's native query language, with server-side guardrails.",
  backend: "api",
  route: {
    method: "POST",
    path: "/logs/native-query",
    tags: ["Logs"]
  },
  input: LogsNativeQueryInputSchema,
  output: LogsNativeQueryOutputSchema,
  pagination: "none",
  async: "sync"
});
var logsSearchNatural = defineOperation({
  operationId: "logs.searchNatural",
  summary: "Natural Language Log Search",
  description: "Search project logs by asking a natural-language question. Experimental.",
  backend: "api",
  route: {
    method: "POST",
    path: "/logs/search-natural",
    tags: ["Logs"]
  },
  input: LogsSearchNaturalInputSchema,
  output: LogsSearchNaturalOutputSchema,
  pagination: "none",
  async: "sync"
});
var logsContract = {
  query: queryLogs.contract,
  schema: logsSchema.contract,
  volume: logsVolume.contract,
  patterns: logsPatterns.contract,
  nativeQuery: logsNativeQuery.contract,
  searchNatural: logsSearchNatural.contract
};

// ../mcp-connector-provider/src/ai-sdk-tool-definitions.ts
import { z as z9 } from "zod";
// ../mcp-connector-provider/src/connection-schemas.ts
import { z as z10 } from "zod";
var MCP_TRANSPORTS = ["streamable-http", "sse"];
var MCP_AUTH_MODES = [
  "none",
  "headers",
  "oauth",
  "aws-sigv4"
];
var MCP_OAUTH_TOKEN_ENDPOINT_AUTH_METHODS = [
  "none",
  "client_secret_basic",
  "client_secret_post"
];
var MCP_CONNECTION_SOURCES = ["preset", "custom"];
var MCP_INSTALL_STATUSES = [
  "configured",
  "authorizing",
  "connected",
  "error"
];
var MCP_PROVIDER_AVAILABILITY_VALUES = [
  "enabled",
  "disabled",
  "custom-only"
];
var MCP_TOOL_AVAILABILITY_REASON_VALUES = [
  "enabled",
  "write_blocked",
  "disabled"
];
var mcpConnectionTransportSchema = z10.enum(MCP_TRANSPORTS);
var mcpConnectionAuthModeSchema = z10.enum(MCP_AUTH_MODES);
var mcpOauthTokenEndpointAuthMethodSchema = z10.enum(MCP_OAUTH_TOKEN_ENDPOINT_AUTH_METHODS);
var mcpConnectionSourceSchema = z10.enum(MCP_CONNECTION_SOURCES);
var mcpConnectionInstallStatusSchema = z10.enum(MCP_INSTALL_STATUSES);
var mcpProviderAvailabilitySchema = z10.enum(MCP_PROVIDER_AVAILABILITY_VALUES);
var mcpToolAvailabilitySchema = z10.enum(MCP_TOOL_AVAILABILITY_REASON_VALUES);
var mcpCustomHeaderSchema = z10.object({
  id: z10.string().min(1),
  name: z10.string().min(1),
  value: z10.string().min(1)
});
var mcpMaskedHeaderSchema = z10.object({
  id: z10.string().min(1),
  name: z10.string().min(1),
  maskedValue: z10.string().min(1)
});
var mcpNoAuthConfigSchema = z10.object({
  authMode: z10.literal("none")
});
var mcpHeaderRefreshCredentialsSchema = z10.object({
  tokenUrl: z10.string().url(),
  clientId: z10.string().min(1),
  clientSecret: z10.string().min(1).optional(),
  tokenEndpointAuthMethod: mcpOauthTokenEndpointAuthMethodSchema.optional(),
  refreshToken: z10.string().min(1),
  headerName: z10.string().min(1).default("Authorization"),
  headerValuePrefix: z10.string().default("Bearer "),
  expiresAt: z10.string().datetime().optional()
});
var mcpHeadersAuthConfigSchema = z10.object({
  authMode: z10.literal("headers"),
  headers: z10.array(mcpCustomHeaderSchema),
  refreshCredentials: mcpHeaderRefreshCredentialsSchema.optional()
});
var mcpAwsSigV4AuthConfigSchema = z10.object({
  authMode: z10.literal("aws-sigv4"),
  accessKeyId: z10.string().min(1),
  secretAccessKey: z10.string().min(1),
  sessionToken: z10.string().min(1).optional(),
  region: z10.string().min(1),
  service: z10.string().min(1).default("aws-mcp")
});
var optionalOauthScopeSchema = z10.preprocess((value) => {
  if (typeof value !== "string") {
    return;
  }
  const normalizedValue = value.trim();
  return normalizedValue.length > 0 ? normalizedValue : undefined;
}, z10.string().min(1).optional()).optional();
var mcpOauthTokenSchema = z10.object({
  accessToken: z10.string().min(1),
  refreshToken: z10.string().min(1).optional(),
  tokenType: z10.string().min(1).optional(),
  scope: optionalOauthScopeSchema,
  expiresAt: z10.string().datetime().optional()
}).transform(({ scope, ...tokens }) => {
  return scope === undefined ? tokens : { ...tokens, scope };
});
var mcpOauthAuthConfigSchema = z10.object({
  authMode: z10.literal("oauth"),
  providerId: z10.string().min(1),
  tokens: mcpOauthTokenSchema,
  headers: z10.array(mcpCustomHeaderSchema).optional()
});
var mcpAuthConfigSchema = z10.discriminatedUnion("authMode", [
  mcpNoAuthConfigSchema,
  mcpHeadersAuthConfigSchema,
  mcpOauthAuthConfigSchema,
  mcpAwsSigV4AuthConfigSchema
]);
var mcpEncryptedAuthConfigSchema = z10.string().min(1).regex(/^enc:v1:/, "Encrypted auth config must use enc:v1 format.");
var mcpPendingOauthRequestConfigSchema = z10.object({
  codeVerifier: z10.string().min(1),
  clientId: z10.string().min(1),
  clientSecret: z10.string().min(1).optional(),
  tokenEndpointAuthMethod: mcpOauthTokenEndpointAuthMethodSchema.optional(),
  tokenUrl: z10.string().url().optional(),
  resourceUrl: z10.string().url().optional(),
  projectId: z10.string().uuid().optional(),
  returnTo: z10.string().min(1).max(2000).optional(),
  messageId: z10.string().min(1).max(240).optional(),
  scopes: z10.array(z10.string().min(1)).optional()
});
var mcpToolInputSchemaSchema = z10.object({
  type: z10.string().optional(),
  properties: z10.record(z10.string(), z10.unknown()).optional(),
  required: z10.array(z10.string()).optional(),
  additionalProperties: z10.boolean().optional()
}).catchall(z10.unknown());
var mcpProviderCapabilitiesSchema = z10.object({
  supportsOAuth: z10.boolean().default(false),
  supportsCustomHeaders: z10.boolean().default(true),
  supportsToolDiscovery: z10.boolean().default(true),
  readOnlyToolNames: z10.array(z10.string()).default([])
});
var mcpToolSnapshotEntrySchema = z10.object({
  name: z10.string().min(1),
  title: z10.string().min(1),
  description: z10.string().min(1),
  inputSchema: mcpToolInputSchemaSchema,
  annotations: z10.record(z10.string(), z10.unknown()).default({}),
  availability: mcpToolAvailabilitySchema,
  isReadOnly: z10.boolean()
});
var mcpToolSnapshotSchema = z10.object({
  discoveredAt: z10.string().datetime(),
  tools: z10.array(mcpToolSnapshotEntrySchema)
});
var mcpConnectorManagementSchema = z10.object({
  mode: z10.enum(["user", "system"]),
  managedBy: z10.object({
    type: z10.literal("integration"),
    id: z10.string().min(1),
    displayName: z10.string().min(1),
    iconKey: z10.string().min(1)
  }).nullable(),
  capabilities: z10.object({
    canRename: z10.boolean(),
    canEditCredentials: z10.boolean(),
    canSetReadOnly: z10.boolean(),
    canConfigureTools: z10.boolean(),
    canDisconnect: z10.boolean()
  })
});
var mcpConnectionRecordSchema = z10.object({
  id: z10.string().uuid(),
  organizationId: z10.string().min(1),
  projectId: z10.string().uuid(),
  providerId: z10.string().min(1),
  source: mcpConnectionSourceSchema,
  displayName: z10.string().min(1),
  connectionKey: z10.string().min(1),
  serverUrl: z10.string().url(),
  transport: mcpConnectionTransportSchema,
  authMode: mcpConnectionAuthModeSchema,
  installStatus: mcpConnectionInstallStatusSchema,
  installedByUserId: z10.string().nullable(),
  connectedAt: z10.string().datetime().nullable(),
  toolSnapshot: mcpToolSnapshotSchema.nullable(),
  enabledToolNames: z10.array(z10.string()),
  readOnly: z10.boolean().default(false),
  version: z10.number().int().nonnegative(),
  createdAt: z10.string().datetime(),
  updatedAt: z10.string().datetime(),
  deletedAt: z10.string().datetime().nullable()
});
var McpConnectorManagementSchema = mcpConnectorManagementSchema;
// ../mcp-connector-provider/src/mcp-client.ts
var import_sha256_js = __toESM(require_main2(), 1);

// ../../node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js
import * as z3rt from "zod/v3";
import * as z4mini from "zod/v4-mini";

// ../../node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
import * as z11 from "zod/v4";
var RELATED_TASK_META_KEY = "io.modelcontextprotocol/related-task";
var JSONRPC_VERSION = "2.0";
var AssertObjectSchema = z11.custom((v) => v !== null && (typeof v === "object" || typeof v === "function"));
var ProgressTokenSchema = z11.union([z11.string(), z11.number().int()]);
var CursorSchema = z11.string();
var TaskCreationParamsSchema = z11.looseObject({
  ttl: z11.number().optional(),
  pollInterval: z11.number().optional()
});
var TaskMetadataSchema = z11.object({
  ttl: z11.number().optional()
});
var RelatedTaskMetadataSchema = z11.object({
  taskId: z11.string()
});
var RequestMetaSchema = z11.looseObject({
  progressToken: ProgressTokenSchema.optional(),
  [RELATED_TASK_META_KEY]: RelatedTaskMetadataSchema.optional()
});
var BaseRequestParamsSchema = z11.object({
  _meta: RequestMetaSchema.optional()
});
var TaskAugmentedRequestParamsSchema = BaseRequestParamsSchema.extend({
  task: TaskMetadataSchema.optional()
});
var RequestSchema = z11.object({
  method: z11.string(),
  params: BaseRequestParamsSchema.loose().optional()
});
var NotificationsParamsSchema = z11.object({
  _meta: RequestMetaSchema.optional()
});
var NotificationSchema = z11.object({
  method: z11.string(),
  params: NotificationsParamsSchema.loose().optional()
});
var ResultSchema = z11.looseObject({
  _meta: RequestMetaSchema.optional()
});
var RequestIdSchema = z11.union([z11.string(), z11.number().int()]);
var JSONRPCRequestSchema = z11.object({
  jsonrpc: z11.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  ...RequestSchema.shape
}).strict();
var JSONRPCNotificationSchema = z11.object({
  jsonrpc: z11.literal(JSONRPC_VERSION),
  ...NotificationSchema.shape
}).strict();
var JSONRPCResultResponseSchema = z11.object({
  jsonrpc: z11.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  result: ResultSchema
}).strict();
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2["ConnectionClosed"] = -32000] = "ConnectionClosed";
  ErrorCode2[ErrorCode2["RequestTimeout"] = -32001] = "RequestTimeout";
  ErrorCode2[ErrorCode2["ParseError"] = -32700] = "ParseError";
  ErrorCode2[ErrorCode2["InvalidRequest"] = -32600] = "InvalidRequest";
  ErrorCode2[ErrorCode2["MethodNotFound"] = -32601] = "MethodNotFound";
  ErrorCode2[ErrorCode2["InvalidParams"] = -32602] = "InvalidParams";
  ErrorCode2[ErrorCode2["InternalError"] = -32603] = "InternalError";
  ErrorCode2[ErrorCode2["UrlElicitationRequired"] = -32042] = "UrlElicitationRequired";
})(ErrorCode || (ErrorCode = {}));
var JSONRPCErrorResponseSchema = z11.object({
  jsonrpc: z11.literal(JSONRPC_VERSION),
  id: RequestIdSchema.optional(),
  error: z11.object({
    code: z11.number().int(),
    message: z11.string(),
    data: z11.unknown().optional()
  })
}).strict();
var JSONRPCMessageSchema = z11.union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResultResponseSchema,
  JSONRPCErrorResponseSchema
]);
var JSONRPCResponseSchema = z11.union([JSONRPCResultResponseSchema, JSONRPCErrorResponseSchema]);
var EmptyResultSchema = ResultSchema.strict();
var CancelledNotificationParamsSchema = NotificationsParamsSchema.extend({
  requestId: RequestIdSchema.optional(),
  reason: z11.string().optional()
});
var CancelledNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/cancelled"),
  params: CancelledNotificationParamsSchema
});
var IconSchema = z11.object({
  src: z11.string(),
  mimeType: z11.string().optional(),
  sizes: z11.array(z11.string()).optional(),
  theme: z11.enum(["light", "dark"]).optional()
});
var IconsSchema = z11.object({
  icons: z11.array(IconSchema).optional()
});
var BaseMetadataSchema = z11.object({
  name: z11.string(),
  title: z11.string().optional()
});
var ImplementationSchema = BaseMetadataSchema.extend({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  version: z11.string(),
  websiteUrl: z11.string().optional(),
  description: z11.string().optional()
});
var FormElicitationCapabilitySchema = z11.intersection(z11.object({
  applyDefaults: z11.boolean().optional()
}), z11.record(z11.string(), z11.unknown()));
var ElicitationCapabilitySchema = z11.preprocess((value) => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    if (Object.keys(value).length === 0) {
      return { form: {} };
    }
  }
  return value;
}, z11.intersection(z11.object({
  form: FormElicitationCapabilitySchema.optional(),
  url: AssertObjectSchema.optional()
}), z11.record(z11.string(), z11.unknown()).optional()));
var ClientTasksCapabilitySchema = z11.looseObject({
  list: AssertObjectSchema.optional(),
  cancel: AssertObjectSchema.optional(),
  requests: z11.looseObject({
    sampling: z11.looseObject({
      createMessage: AssertObjectSchema.optional()
    }).optional(),
    elicitation: z11.looseObject({
      create: AssertObjectSchema.optional()
    }).optional()
  }).optional()
});
var ServerTasksCapabilitySchema = z11.looseObject({
  list: AssertObjectSchema.optional(),
  cancel: AssertObjectSchema.optional(),
  requests: z11.looseObject({
    tools: z11.looseObject({
      call: AssertObjectSchema.optional()
    }).optional()
  }).optional()
});
var ClientCapabilitiesSchema = z11.object({
  experimental: z11.record(z11.string(), AssertObjectSchema).optional(),
  sampling: z11.object({
    context: AssertObjectSchema.optional(),
    tools: AssertObjectSchema.optional()
  }).optional(),
  elicitation: ElicitationCapabilitySchema.optional(),
  roots: z11.object({
    listChanged: z11.boolean().optional()
  }).optional(),
  tasks: ClientTasksCapabilitySchema.optional(),
  extensions: z11.record(z11.string(), AssertObjectSchema).optional()
});
var InitializeRequestParamsSchema = BaseRequestParamsSchema.extend({
  protocolVersion: z11.string(),
  capabilities: ClientCapabilitiesSchema,
  clientInfo: ImplementationSchema
});
var InitializeRequestSchema = RequestSchema.extend({
  method: z11.literal("initialize"),
  params: InitializeRequestParamsSchema
});
var ServerCapabilitiesSchema = z11.object({
  experimental: z11.record(z11.string(), AssertObjectSchema).optional(),
  logging: AssertObjectSchema.optional(),
  completions: AssertObjectSchema.optional(),
  prompts: z11.object({
    listChanged: z11.boolean().optional()
  }).optional(),
  resources: z11.object({
    subscribe: z11.boolean().optional(),
    listChanged: z11.boolean().optional()
  }).optional(),
  tools: z11.object({
    listChanged: z11.boolean().optional()
  }).optional(),
  tasks: ServerTasksCapabilitySchema.optional(),
  extensions: z11.record(z11.string(), AssertObjectSchema).optional()
});
var InitializeResultSchema = ResultSchema.extend({
  protocolVersion: z11.string(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ImplementationSchema,
  instructions: z11.string().optional()
});
var InitializedNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/initialized"),
  params: NotificationsParamsSchema.optional()
});
var PingRequestSchema = RequestSchema.extend({
  method: z11.literal("ping"),
  params: BaseRequestParamsSchema.optional()
});
var ProgressSchema = z11.object({
  progress: z11.number(),
  total: z11.optional(z11.number()),
  message: z11.optional(z11.string())
});
var ProgressNotificationParamsSchema = z11.object({
  ...NotificationsParamsSchema.shape,
  ...ProgressSchema.shape,
  progressToken: ProgressTokenSchema
});
var ProgressNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/progress"),
  params: ProgressNotificationParamsSchema
});
var PaginatedRequestParamsSchema = BaseRequestParamsSchema.extend({
  cursor: CursorSchema.optional()
});
var PaginatedRequestSchema = RequestSchema.extend({
  params: PaginatedRequestParamsSchema.optional()
});
var PaginatedResultSchema = ResultSchema.extend({
  nextCursor: CursorSchema.optional()
});
var TaskStatusSchema = z11.enum(["working", "input_required", "completed", "failed", "cancelled"]);
var TaskSchema = z11.object({
  taskId: z11.string(),
  status: TaskStatusSchema,
  ttl: z11.union([z11.number(), z11.null()]),
  createdAt: z11.string(),
  lastUpdatedAt: z11.string(),
  pollInterval: z11.optional(z11.number()),
  statusMessage: z11.optional(z11.string())
});
var CreateTaskResultSchema = ResultSchema.extend({
  task: TaskSchema
});
var TaskStatusNotificationParamsSchema = NotificationsParamsSchema.merge(TaskSchema);
var TaskStatusNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/tasks/status"),
  params: TaskStatusNotificationParamsSchema
});
var GetTaskRequestSchema = RequestSchema.extend({
  method: z11.literal("tasks/get"),
  params: BaseRequestParamsSchema.extend({
    taskId: z11.string()
  })
});
var GetTaskResultSchema = ResultSchema.merge(TaskSchema);
var GetTaskPayloadRequestSchema = RequestSchema.extend({
  method: z11.literal("tasks/result"),
  params: BaseRequestParamsSchema.extend({
    taskId: z11.string()
  })
});
var GetTaskPayloadResultSchema = ResultSchema.loose();
var ListTasksRequestSchema = PaginatedRequestSchema.extend({
  method: z11.literal("tasks/list")
});
var ListTasksResultSchema = PaginatedResultSchema.extend({
  tasks: z11.array(TaskSchema)
});
var CancelTaskRequestSchema = RequestSchema.extend({
  method: z11.literal("tasks/cancel"),
  params: BaseRequestParamsSchema.extend({
    taskId: z11.string()
  })
});
var CancelTaskResultSchema = ResultSchema.merge(TaskSchema);
var ResourceContentsSchema = z11.object({
  uri: z11.string(),
  mimeType: z11.optional(z11.string()),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var TextResourceContentsSchema = ResourceContentsSchema.extend({
  text: z11.string()
});
var Base64Schema = z11.string().refine((val) => {
  try {
    atob(val);
    return true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" });
var BlobResourceContentsSchema = ResourceContentsSchema.extend({
  blob: Base64Schema
});
var RoleSchema = z11.enum(["user", "assistant"]);
var AnnotationsSchema = z11.object({
  audience: z11.array(RoleSchema).optional(),
  priority: z11.number().min(0).max(1).optional(),
  lastModified: z11.iso.datetime({ offset: true }).optional()
});
var ResourceSchema = z11.object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  uri: z11.string(),
  description: z11.optional(z11.string()),
  mimeType: z11.optional(z11.string()),
  size: z11.optional(z11.number()),
  annotations: AnnotationsSchema.optional(),
  _meta: z11.optional(z11.looseObject({}))
});
var ResourceTemplateSchema = z11.object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  uriTemplate: z11.string(),
  description: z11.optional(z11.string()),
  mimeType: z11.optional(z11.string()),
  annotations: AnnotationsSchema.optional(),
  _meta: z11.optional(z11.looseObject({}))
});
var ListResourcesRequestSchema = PaginatedRequestSchema.extend({
  method: z11.literal("resources/list")
});
var ListResourcesResultSchema = PaginatedResultSchema.extend({
  resources: z11.array(ResourceSchema)
});
var ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
  method: z11.literal("resources/templates/list")
});
var ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
  resourceTemplates: z11.array(ResourceTemplateSchema)
});
var ResourceRequestParamsSchema = BaseRequestParamsSchema.extend({
  uri: z11.string()
});
var ReadResourceRequestParamsSchema = ResourceRequestParamsSchema;
var ReadResourceRequestSchema = RequestSchema.extend({
  method: z11.literal("resources/read"),
  params: ReadResourceRequestParamsSchema
});
var ReadResourceResultSchema = ResultSchema.extend({
  contents: z11.array(z11.union([TextResourceContentsSchema, BlobResourceContentsSchema]))
});
var ResourceListChangedNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/resources/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var SubscribeRequestParamsSchema = ResourceRequestParamsSchema;
var SubscribeRequestSchema = RequestSchema.extend({
  method: z11.literal("resources/subscribe"),
  params: SubscribeRequestParamsSchema
});
var UnsubscribeRequestParamsSchema = ResourceRequestParamsSchema;
var UnsubscribeRequestSchema = RequestSchema.extend({
  method: z11.literal("resources/unsubscribe"),
  params: UnsubscribeRequestParamsSchema
});
var ResourceUpdatedNotificationParamsSchema = NotificationsParamsSchema.extend({
  uri: z11.string()
});
var ResourceUpdatedNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/resources/updated"),
  params: ResourceUpdatedNotificationParamsSchema
});
var PromptArgumentSchema = z11.object({
  name: z11.string(),
  description: z11.optional(z11.string()),
  required: z11.optional(z11.boolean())
});
var PromptSchema = z11.object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  description: z11.optional(z11.string()),
  arguments: z11.optional(z11.array(PromptArgumentSchema)),
  _meta: z11.optional(z11.looseObject({}))
});
var ListPromptsRequestSchema = PaginatedRequestSchema.extend({
  method: z11.literal("prompts/list")
});
var ListPromptsResultSchema = PaginatedResultSchema.extend({
  prompts: z11.array(PromptSchema)
});
var GetPromptRequestParamsSchema = BaseRequestParamsSchema.extend({
  name: z11.string(),
  arguments: z11.record(z11.string(), z11.string()).optional()
});
var GetPromptRequestSchema = RequestSchema.extend({
  method: z11.literal("prompts/get"),
  params: GetPromptRequestParamsSchema
});
var TextContentSchema = z11.object({
  type: z11.literal("text"),
  text: z11.string(),
  annotations: AnnotationsSchema.optional(),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var ImageContentSchema = z11.object({
  type: z11.literal("image"),
  data: Base64Schema,
  mimeType: z11.string(),
  annotations: AnnotationsSchema.optional(),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var AudioContentSchema = z11.object({
  type: z11.literal("audio"),
  data: Base64Schema,
  mimeType: z11.string(),
  annotations: AnnotationsSchema.optional(),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var ToolUseContentSchema = z11.object({
  type: z11.literal("tool_use"),
  name: z11.string(),
  id: z11.string(),
  input: z11.record(z11.string(), z11.unknown()),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var EmbeddedResourceSchema = z11.object({
  type: z11.literal("resource"),
  resource: z11.union([TextResourceContentsSchema, BlobResourceContentsSchema]),
  annotations: AnnotationsSchema.optional(),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var ResourceLinkSchema = ResourceSchema.extend({
  type: z11.literal("resource_link")
});
var ContentBlockSchema = z11.union([
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema,
  ResourceLinkSchema,
  EmbeddedResourceSchema
]);
var PromptMessageSchema = z11.object({
  role: RoleSchema,
  content: ContentBlockSchema
});
var GetPromptResultSchema = ResultSchema.extend({
  description: z11.string().optional(),
  messages: z11.array(PromptMessageSchema)
});
var PromptListChangedNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/prompts/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var ToolAnnotationsSchema = z11.object({
  title: z11.string().optional(),
  readOnlyHint: z11.boolean().optional(),
  destructiveHint: z11.boolean().optional(),
  idempotentHint: z11.boolean().optional(),
  openWorldHint: z11.boolean().optional()
});
var ToolExecutionSchema = z11.object({
  taskSupport: z11.enum(["required", "optional", "forbidden"]).optional()
});
var ToolSchema = z11.object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  description: z11.string().optional(),
  inputSchema: z11.object({
    type: z11.literal("object"),
    properties: z11.record(z11.string(), AssertObjectSchema).optional(),
    required: z11.array(z11.string()).optional()
  }).catchall(z11.unknown()),
  outputSchema: z11.object({
    type: z11.literal("object"),
    properties: z11.record(z11.string(), AssertObjectSchema).optional(),
    required: z11.array(z11.string()).optional()
  }).catchall(z11.unknown()).optional(),
  annotations: ToolAnnotationsSchema.optional(),
  execution: ToolExecutionSchema.optional(),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var ListToolsRequestSchema = PaginatedRequestSchema.extend({
  method: z11.literal("tools/list")
});
var ListToolsResultSchema = PaginatedResultSchema.extend({
  tools: z11.array(ToolSchema)
});
var CallToolResultSchema = ResultSchema.extend({
  content: z11.array(ContentBlockSchema).default([]),
  structuredContent: z11.record(z11.string(), z11.unknown()).optional(),
  isError: z11.boolean().optional()
});
var CompatibilityCallToolResultSchema = CallToolResultSchema.or(ResultSchema.extend({
  toolResult: z11.unknown()
}));
var CallToolRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  name: z11.string(),
  arguments: z11.record(z11.string(), z11.unknown()).optional()
});
var CallToolRequestSchema = RequestSchema.extend({
  method: z11.literal("tools/call"),
  params: CallToolRequestParamsSchema
});
var ToolListChangedNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/tools/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var ListChangedOptionsBaseSchema = z11.object({
  autoRefresh: z11.boolean().default(true),
  debounceMs: z11.number().int().nonnegative().default(300)
});
var LoggingLevelSchema = z11.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]);
var SetLevelRequestParamsSchema = BaseRequestParamsSchema.extend({
  level: LoggingLevelSchema
});
var SetLevelRequestSchema = RequestSchema.extend({
  method: z11.literal("logging/setLevel"),
  params: SetLevelRequestParamsSchema
});
var LoggingMessageNotificationParamsSchema = NotificationsParamsSchema.extend({
  level: LoggingLevelSchema,
  logger: z11.string().optional(),
  data: z11.unknown()
});
var LoggingMessageNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/message"),
  params: LoggingMessageNotificationParamsSchema
});
var ModelHintSchema = z11.object({
  name: z11.string().optional()
});
var ModelPreferencesSchema = z11.object({
  hints: z11.array(ModelHintSchema).optional(),
  costPriority: z11.number().min(0).max(1).optional(),
  speedPriority: z11.number().min(0).max(1).optional(),
  intelligencePriority: z11.number().min(0).max(1).optional()
});
var ToolChoiceSchema = z11.object({
  mode: z11.enum(["auto", "required", "none"]).optional()
});
var ToolResultContentSchema = z11.object({
  type: z11.literal("tool_result"),
  toolUseId: z11.string().describe("The unique identifier for the corresponding tool call."),
  content: z11.array(ContentBlockSchema).default([]),
  structuredContent: z11.object({}).loose().optional(),
  isError: z11.boolean().optional(),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var SamplingContentSchema = z11.discriminatedUnion("type", [TextContentSchema, ImageContentSchema, AudioContentSchema]);
var SamplingMessageContentBlockSchema = z11.discriminatedUnion("type", [
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema,
  ToolUseContentSchema,
  ToolResultContentSchema
]);
var SamplingMessageSchema = z11.object({
  role: RoleSchema,
  content: z11.union([SamplingMessageContentBlockSchema, z11.array(SamplingMessageContentBlockSchema)]),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var CreateMessageRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  messages: z11.array(SamplingMessageSchema),
  modelPreferences: ModelPreferencesSchema.optional(),
  systemPrompt: z11.string().optional(),
  includeContext: z11.enum(["none", "thisServer", "allServers"]).optional(),
  temperature: z11.number().optional(),
  maxTokens: z11.number().int(),
  stopSequences: z11.array(z11.string()).optional(),
  metadata: AssertObjectSchema.optional(),
  tools: z11.array(ToolSchema).optional(),
  toolChoice: ToolChoiceSchema.optional()
});
var CreateMessageRequestSchema = RequestSchema.extend({
  method: z11.literal("sampling/createMessage"),
  params: CreateMessageRequestParamsSchema
});
var CreateMessageResultSchema = ResultSchema.extend({
  model: z11.string(),
  stopReason: z11.optional(z11.enum(["endTurn", "stopSequence", "maxTokens"]).or(z11.string())),
  role: RoleSchema,
  content: SamplingContentSchema
});
var CreateMessageResultWithToolsSchema = ResultSchema.extend({
  model: z11.string(),
  stopReason: z11.optional(z11.enum(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(z11.string())),
  role: RoleSchema,
  content: z11.union([SamplingMessageContentBlockSchema, z11.array(SamplingMessageContentBlockSchema)])
});
var BooleanSchemaSchema = z11.object({
  type: z11.literal("boolean"),
  title: z11.string().optional(),
  description: z11.string().optional(),
  default: z11.boolean().optional()
});
var StringSchemaSchema = z11.object({
  type: z11.literal("string"),
  title: z11.string().optional(),
  description: z11.string().optional(),
  minLength: z11.number().optional(),
  maxLength: z11.number().optional(),
  format: z11.enum(["email", "uri", "date", "date-time"]).optional(),
  default: z11.string().optional()
});
var NumberSchemaSchema = z11.object({
  type: z11.enum(["number", "integer"]),
  title: z11.string().optional(),
  description: z11.string().optional(),
  minimum: z11.number().optional(),
  maximum: z11.number().optional(),
  default: z11.number().optional()
});
var UntitledSingleSelectEnumSchemaSchema = z11.object({
  type: z11.literal("string"),
  title: z11.string().optional(),
  description: z11.string().optional(),
  enum: z11.array(z11.string()),
  default: z11.string().optional()
});
var TitledSingleSelectEnumSchemaSchema = z11.object({
  type: z11.literal("string"),
  title: z11.string().optional(),
  description: z11.string().optional(),
  oneOf: z11.array(z11.object({
    const: z11.string(),
    title: z11.string()
  })),
  default: z11.string().optional()
});
var LegacyTitledEnumSchemaSchema = z11.object({
  type: z11.literal("string"),
  title: z11.string().optional(),
  description: z11.string().optional(),
  enum: z11.array(z11.string()),
  enumNames: z11.array(z11.string()).optional(),
  default: z11.string().optional()
});
var SingleSelectEnumSchemaSchema = z11.union([UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema]);
var UntitledMultiSelectEnumSchemaSchema = z11.object({
  type: z11.literal("array"),
  title: z11.string().optional(),
  description: z11.string().optional(),
  minItems: z11.number().optional(),
  maxItems: z11.number().optional(),
  items: z11.object({
    type: z11.literal("string"),
    enum: z11.array(z11.string())
  }),
  default: z11.array(z11.string()).optional()
});
var TitledMultiSelectEnumSchemaSchema = z11.object({
  type: z11.literal("array"),
  title: z11.string().optional(),
  description: z11.string().optional(),
  minItems: z11.number().optional(),
  maxItems: z11.number().optional(),
  items: z11.object({
    anyOf: z11.array(z11.object({
      const: z11.string(),
      title: z11.string()
    }))
  }),
  default: z11.array(z11.string()).optional()
});
var MultiSelectEnumSchemaSchema = z11.union([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema]);
var EnumSchemaSchema = z11.union([LegacyTitledEnumSchemaSchema, SingleSelectEnumSchemaSchema, MultiSelectEnumSchemaSchema]);
var PrimitiveSchemaDefinitionSchema = z11.union([EnumSchemaSchema, BooleanSchemaSchema, StringSchemaSchema, NumberSchemaSchema]);
var ElicitRequestFormParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  mode: z11.literal("form").optional(),
  message: z11.string(),
  requestedSchema: z11.object({
    type: z11.literal("object"),
    properties: z11.record(z11.string(), PrimitiveSchemaDefinitionSchema),
    required: z11.array(z11.string()).optional()
  })
});
var ElicitRequestURLParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  mode: z11.literal("url"),
  message: z11.string(),
  elicitationId: z11.string(),
  url: z11.string().url()
});
var ElicitRequestParamsSchema = z11.union([ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema]);
var ElicitRequestSchema = RequestSchema.extend({
  method: z11.literal("elicitation/create"),
  params: ElicitRequestParamsSchema
});
var ElicitationCompleteNotificationParamsSchema = NotificationsParamsSchema.extend({
  elicitationId: z11.string()
});
var ElicitationCompleteNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/elicitation/complete"),
  params: ElicitationCompleteNotificationParamsSchema
});
var ElicitResultSchema = ResultSchema.extend({
  action: z11.enum(["accept", "decline", "cancel"]),
  content: z11.preprocess((val) => val === null ? undefined : val, z11.record(z11.string(), z11.union([z11.string(), z11.number(), z11.boolean(), z11.array(z11.string())])).optional())
});
var ResourceTemplateReferenceSchema = z11.object({
  type: z11.literal("ref/resource"),
  uri: z11.string()
});
var PromptReferenceSchema = z11.object({
  type: z11.literal("ref/prompt"),
  name: z11.string()
});
var CompleteRequestParamsSchema = BaseRequestParamsSchema.extend({
  ref: z11.union([PromptReferenceSchema, ResourceTemplateReferenceSchema]),
  argument: z11.object({
    name: z11.string(),
    value: z11.string()
  }),
  context: z11.object({
    arguments: z11.record(z11.string(), z11.string()).optional()
  }).optional()
});
var CompleteRequestSchema = RequestSchema.extend({
  method: z11.literal("completion/complete"),
  params: CompleteRequestParamsSchema
});
var CompleteResultSchema = ResultSchema.extend({
  completion: z11.looseObject({
    values: z11.array(z11.string()).max(100),
    total: z11.optional(z11.number().int()),
    hasMore: z11.optional(z11.boolean())
  })
});
var RootSchema = z11.object({
  uri: z11.string().startsWith("file://"),
  name: z11.string().optional(),
  _meta: z11.record(z11.string(), z11.unknown()).optional()
});
var ListRootsRequestSchema = RequestSchema.extend({
  method: z11.literal("roots/list"),
  params: BaseRequestParamsSchema.optional()
});
var ListRootsResultSchema = ResultSchema.extend({
  roots: z11.array(RootSchema)
});
var RootsListChangedNotificationSchema = NotificationSchema.extend({
  method: z11.literal("notifications/roots/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var ClientRequestSchema = z11.union([
  PingRequestSchema,
  InitializeRequestSchema,
  CompleteRequestSchema,
  SetLevelRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
  SubscribeRequestSchema,
  UnsubscribeRequestSchema,
  CallToolRequestSchema,
  ListToolsRequestSchema,
  GetTaskRequestSchema,
  GetTaskPayloadRequestSchema,
  ListTasksRequestSchema,
  CancelTaskRequestSchema
]);
var ClientNotificationSchema = z11.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  InitializedNotificationSchema,
  RootsListChangedNotificationSchema,
  TaskStatusNotificationSchema
]);
var ClientResultSchema = z11.union([
  EmptyResultSchema,
  CreateMessageResultSchema,
  CreateMessageResultWithToolsSchema,
  ElicitResultSchema,
  ListRootsResultSchema,
  GetTaskResultSchema,
  ListTasksResultSchema,
  CreateTaskResultSchema
]);
var ServerRequestSchema = z11.union([
  PingRequestSchema,
  CreateMessageRequestSchema,
  ElicitRequestSchema,
  ListRootsRequestSchema,
  GetTaskRequestSchema,
  GetTaskPayloadRequestSchema,
  ListTasksRequestSchema,
  CancelTaskRequestSchema
]);
var ServerNotificationSchema = z11.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  LoggingMessageNotificationSchema,
  ResourceUpdatedNotificationSchema,
  ResourceListChangedNotificationSchema,
  ToolListChangedNotificationSchema,
  PromptListChangedNotificationSchema,
  TaskStatusNotificationSchema,
  ElicitationCompleteNotificationSchema
]);
var ServerResultSchema = z11.union([
  EmptyResultSchema,
  InitializeResultSchema,
  CompleteResultSchema,
  GetPromptResultSchema,
  ListPromptsResultSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  CallToolResultSchema,
  ListToolsResultSchema,
  GetTaskResultSchema,
  ListTasksResultSchema,
  CreateTaskResultSchema
]);

// ../../node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-json-schema-compat.js
import * as z4mini2 from "zod/v4-mini";

// ../../node_modules/zod-to-json-schema/dist/esm/Options.js
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
// ../../node_modules/zod-to-json-schema/dist/esm/selectParser.js
import { ZodFirstPartyTypeKind as ZodFirstPartyTypeKind3 } from "zod/v3";

// ../../node_modules/zod-to-json-schema/dist/esm/parsers/array.js
import { ZodFirstPartyTypeKind } from "zod/v3";

// ../../node_modules/zod-to-json-schema/dist/esm/parsers/record.js
import { ZodFirstPartyTypeKind as ZodFirstPartyTypeKind2 } from "zod/v3";

// ../../node_modules/zod-to-json-schema/dist/esm/parsers/string.js
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
// ../../node_modules/@modelcontextprotocol/sdk/dist/esm/validation/ajv-provider.js
var import_ajv_formats = __toESM(require_dist(), 1);

// ../../node_modules/pkce-challenge/dist/index.node.js
var crypto;
crypto = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? import("node:crypto").then((m) => m.webcrypto);

// ../../node_modules/@modelcontextprotocol/sdk/dist/esm/shared/auth.js
import * as z12 from "zod/v4";
var SafeUrlSchema = z12.url().superRefine((val, ctx) => {
  if (!URL.canParse(val)) {
    ctx.addIssue({
      code: z12.ZodIssueCode.custom,
      message: "URL must be parseable",
      fatal: true
    });
    return z12.NEVER;
  }
}).refine((url2) => {
  const u = new URL(url2);
  return u.protocol !== "javascript:" && u.protocol !== "data:" && u.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" });
var OAuthProtectedResourceMetadataSchema = z12.looseObject({
  resource: z12.string().url(),
  authorization_servers: z12.array(SafeUrlSchema).optional(),
  jwks_uri: z12.string().url().optional(),
  scopes_supported: z12.array(z12.string()).optional(),
  bearer_methods_supported: z12.array(z12.string()).optional(),
  resource_signing_alg_values_supported: z12.array(z12.string()).optional(),
  resource_name: z12.string().optional(),
  resource_documentation: z12.string().optional(),
  resource_policy_uri: z12.string().url().optional(),
  resource_tos_uri: z12.string().url().optional(),
  tls_client_certificate_bound_access_tokens: z12.boolean().optional(),
  authorization_details_types_supported: z12.array(z12.string()).optional(),
  dpop_signing_alg_values_supported: z12.array(z12.string()).optional(),
  dpop_bound_access_tokens_required: z12.boolean().optional()
});
var OAuthMetadataSchema = z12.looseObject({
  issuer: z12.string(),
  authorization_endpoint: SafeUrlSchema,
  token_endpoint: SafeUrlSchema,
  registration_endpoint: SafeUrlSchema.optional(),
  scopes_supported: z12.array(z12.string()).optional(),
  response_types_supported: z12.array(z12.string()),
  response_modes_supported: z12.array(z12.string()).optional(),
  grant_types_supported: z12.array(z12.string()).optional(),
  token_endpoint_auth_methods_supported: z12.array(z12.string()).optional(),
  token_endpoint_auth_signing_alg_values_supported: z12.array(z12.string()).optional(),
  service_documentation: SafeUrlSchema.optional(),
  revocation_endpoint: SafeUrlSchema.optional(),
  revocation_endpoint_auth_methods_supported: z12.array(z12.string()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: z12.array(z12.string()).optional(),
  introspection_endpoint: z12.string().optional(),
  introspection_endpoint_auth_methods_supported: z12.array(z12.string()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: z12.array(z12.string()).optional(),
  code_challenge_methods_supported: z12.array(z12.string()).optional(),
  client_id_metadata_document_supported: z12.boolean().optional()
});
var OpenIdProviderMetadataSchema = z12.looseObject({
  issuer: z12.string(),
  authorization_endpoint: SafeUrlSchema,
  token_endpoint: SafeUrlSchema,
  userinfo_endpoint: SafeUrlSchema.optional(),
  jwks_uri: SafeUrlSchema,
  registration_endpoint: SafeUrlSchema.optional(),
  scopes_supported: z12.array(z12.string()).optional(),
  response_types_supported: z12.array(z12.string()),
  response_modes_supported: z12.array(z12.string()).optional(),
  grant_types_supported: z12.array(z12.string()).optional(),
  acr_values_supported: z12.array(z12.string()).optional(),
  subject_types_supported: z12.array(z12.string()),
  id_token_signing_alg_values_supported: z12.array(z12.string()),
  id_token_encryption_alg_values_supported: z12.array(z12.string()).optional(),
  id_token_encryption_enc_values_supported: z12.array(z12.string()).optional(),
  userinfo_signing_alg_values_supported: z12.array(z12.string()).optional(),
  userinfo_encryption_alg_values_supported: z12.array(z12.string()).optional(),
  userinfo_encryption_enc_values_supported: z12.array(z12.string()).optional(),
  request_object_signing_alg_values_supported: z12.array(z12.string()).optional(),
  request_object_encryption_alg_values_supported: z12.array(z12.string()).optional(),
  request_object_encryption_enc_values_supported: z12.array(z12.string()).optional(),
  token_endpoint_auth_methods_supported: z12.array(z12.string()).optional(),
  token_endpoint_auth_signing_alg_values_supported: z12.array(z12.string()).optional(),
  display_values_supported: z12.array(z12.string()).optional(),
  claim_types_supported: z12.array(z12.string()).optional(),
  claims_supported: z12.array(z12.string()).optional(),
  service_documentation: z12.string().optional(),
  claims_locales_supported: z12.array(z12.string()).optional(),
  ui_locales_supported: z12.array(z12.string()).optional(),
  claims_parameter_supported: z12.boolean().optional(),
  request_parameter_supported: z12.boolean().optional(),
  request_uri_parameter_supported: z12.boolean().optional(),
  require_request_uri_registration: z12.boolean().optional(),
  op_policy_uri: SafeUrlSchema.optional(),
  op_tos_uri: SafeUrlSchema.optional(),
  client_id_metadata_document_supported: z12.boolean().optional()
});
var OpenIdProviderDiscoveryMetadataSchema = z12.object({
  ...OpenIdProviderMetadataSchema.shape,
  ...OAuthMetadataSchema.pick({
    code_challenge_methods_supported: true
  }).shape
});
var OAuthTokensSchema = z12.object({
  access_token: z12.string(),
  id_token: z12.string().optional(),
  token_type: z12.string(),
  expires_in: z12.coerce.number().optional(),
  scope: z12.string().optional(),
  refresh_token: z12.string().optional()
}).strip();
var OAuthErrorResponseSchema = z12.object({
  error: z12.string(),
  error_description: z12.string().optional(),
  error_uri: z12.string().optional()
});
var OptionalSafeUrlSchema = SafeUrlSchema.optional().or(z12.literal("").transform(() => {
  return;
}));
var OAuthClientMetadataSchema = z12.object({
  redirect_uris: z12.array(SafeUrlSchema),
  token_endpoint_auth_method: z12.string().optional(),
  grant_types: z12.array(z12.string()).optional(),
  response_types: z12.array(z12.string()).optional(),
  client_name: z12.string().optional(),
  client_uri: SafeUrlSchema.optional(),
  logo_uri: OptionalSafeUrlSchema,
  scope: z12.string().optional(),
  contacts: z12.array(z12.string()).optional(),
  tos_uri: OptionalSafeUrlSchema,
  policy_uri: z12.string().optional(),
  jwks_uri: SafeUrlSchema.optional(),
  jwks: z12.any().optional(),
  software_id: z12.string().optional(),
  software_version: z12.string().optional(),
  software_statement: z12.string().optional()
}).strip();
var OAuthClientInformationSchema = z12.object({
  client_id: z12.string(),
  client_secret: z12.string().optional(),
  client_id_issued_at: z12.number().optional(),
  client_secret_expires_at: z12.number().optional()
}).strip();
var OAuthClientInformationFullSchema = OAuthClientMetadataSchema.merge(OAuthClientInformationSchema);
var OAuthClientRegistrationErrorSchema = z12.object({
  error: z12.string(),
  error_description: z12.string().optional()
}).strip();
var OAuthTokenRevocationRequestSchema = z12.object({
  token: z12.string(),
  token_type_hint: z12.string().optional()
}).strip();

// ../../node_modules/@modelcontextprotocol/sdk/dist/esm/server/auth/errors.js
class OAuthError extends Error {
  constructor(message, errorUri) {
    super(message);
    this.errorUri = errorUri;
    this.name = this.constructor.name;
  }
  toResponseObject() {
    const response = {
      error: this.errorCode,
      error_description: this.message
    };
    if (this.errorUri) {
      response.error_uri = this.errorUri;
    }
    return response;
  }
  get errorCode() {
    return this.constructor.errorCode;
  }
}

class InvalidRequestError extends OAuthError {
}
InvalidRequestError.errorCode = "invalid_request";

class InvalidClientError extends OAuthError {
}
InvalidClientError.errorCode = "invalid_client";

class InvalidGrantError extends OAuthError {
}
InvalidGrantError.errorCode = "invalid_grant";

class UnauthorizedClientError extends OAuthError {
}
UnauthorizedClientError.errorCode = "unauthorized_client";

class UnsupportedGrantTypeError extends OAuthError {
}
UnsupportedGrantTypeError.errorCode = "unsupported_grant_type";

class InvalidScopeError extends OAuthError {
}
InvalidScopeError.errorCode = "invalid_scope";

class AccessDeniedError extends OAuthError {
}
AccessDeniedError.errorCode = "access_denied";

class ServerError extends OAuthError {
}
ServerError.errorCode = "server_error";

class TemporarilyUnavailableError extends OAuthError {
}
TemporarilyUnavailableError.errorCode = "temporarily_unavailable";

class UnsupportedResponseTypeError extends OAuthError {
}
UnsupportedResponseTypeError.errorCode = "unsupported_response_type";

class UnsupportedTokenTypeError extends OAuthError {
}
UnsupportedTokenTypeError.errorCode = "unsupported_token_type";

class InvalidTokenError extends OAuthError {
}
InvalidTokenError.errorCode = "invalid_token";

class MethodNotAllowedError extends OAuthError {
}
MethodNotAllowedError.errorCode = "method_not_allowed";

class TooManyRequestsError extends OAuthError {
}
TooManyRequestsError.errorCode = "too_many_requests";

class InvalidClientMetadataError extends OAuthError {
}
InvalidClientMetadataError.errorCode = "invalid_client_metadata";

class InsufficientScopeError extends OAuthError {
}
InsufficientScopeError.errorCode = "insufficient_scope";

class InvalidTargetError extends OAuthError {
}
InvalidTargetError.errorCode = "invalid_target";
var OAUTH_ERRORS = {
  [InvalidRequestError.errorCode]: InvalidRequestError,
  [InvalidClientError.errorCode]: InvalidClientError,
  [InvalidGrantError.errorCode]: InvalidGrantError,
  [UnauthorizedClientError.errorCode]: UnauthorizedClientError,
  [UnsupportedGrantTypeError.errorCode]: UnsupportedGrantTypeError,
  [InvalidScopeError.errorCode]: InvalidScopeError,
  [AccessDeniedError.errorCode]: AccessDeniedError,
  [ServerError.errorCode]: ServerError,
  [TemporarilyUnavailableError.errorCode]: TemporarilyUnavailableError,
  [UnsupportedResponseTypeError.errorCode]: UnsupportedResponseTypeError,
  [UnsupportedTokenTypeError.errorCode]: UnsupportedTokenTypeError,
  [InvalidTokenError.errorCode]: InvalidTokenError,
  [MethodNotAllowedError.errorCode]: MethodNotAllowedError,
  [TooManyRequestsError.errorCode]: TooManyRequestsError,
  [InvalidClientMetadataError.errorCode]: InvalidClientMetadataError,
  [InsufficientScopeError.errorCode]: InsufficientScopeError,
  [InvalidTargetError.errorCode]: InvalidTargetError
};
// ../mcp-connector-provider/src/mcp-client.ts
import { z as z13 } from "zod";
var mcpSdkToolSchema = z13.object({
  name: z13.string().min(1),
  description: z13.string().optional(),
  inputSchema: z13.record(z13.string(), z13.unknown()).optional(),
  annotations: z13.record(z13.string(), z13.unknown()).optional()
});
var elasticCloudToolsMetadataResponseSchema = z13.object({
  results: z13.array(z13.object({
    id: z13.string().min(1),
    readonly: z13.boolean().optional()
  }))
});
var mcpCallToolContentSchema = z13.object({
  type: z13.string()
}).catchall(z13.unknown());
var mcpCallToolResultSchema = z13.object({
  content: z13.array(mcpCallToolContentSchema),
  structuredContent: z13.unknown().optional(),
  isError: z13.boolean().optional()
});
var mcpServerVersionSchema = z13.object({
  name: z13.string().min(1),
  version: z13.string().min(1)
});
var structuredErrorSchema = z13.object({
  status: z13.number().int().optional(),
  data: z13.object({
    status: z13.number().int().optional()
  }).passthrough().optional(),
  cause: z13.object({
    status: z13.number().int().optional()
  }).passthrough().optional()
}).passthrough();
var jwtPayloadSchema = z13.object({
  exp: z13.number().int().positive().optional()
}).passthrough();
var oauthRefreshSkewMs = 2 * 60 * 1000;
// ../mcp-connector-provider/src/mcp-keybased-validation.ts
var ELASTIC_CLOUD_AUTHORIZATION_HEADER = "Authorization";
var DATADOG_API_KEY_HEADER = "DD_API_KEY";
var DATADOG_APPLICATION_KEY_HEADER = "DD_APPLICATION_KEY";
var CLOUDFLARE_AUTHORIZATION_HEADER = "Authorization";
var X_AUTHORIZATION_HEADER = "Authorization";
var CONTEXT_COMPANY_AUTHORIZATION_HEADER = "Authorization";
var BRAINTRUST_AUTHORIZATION_HEADER = "Authorization";
var GCP_AUTHORIZATION_HEADER = "Authorization";
var INTERCOM_AUTHORIZATION_HEADER = "Authorization";
var RENDER_AUTHORIZATION_HEADER = "Authorization";
var EXA_API_KEY_HEADER = "x-api-key";
var COMPOSIO_API_KEY_HEADER = "x-consumer-api-key";
var RENTAHUMAN_API_KEY_HEADER = "X-API-Key";
var AUTUMN_AUTHORIZATION_HEADER = "Authorization";
var CONTEXT_DEV_API_KEY_HEADER = "x-context-dev-api-key";
var LANGFUSE_AUTHORIZATION_HEADER = "Authorization";
var RESEND_AUTHORIZATION_HEADER = "Authorization";
var RESPAN_AUTHORIZATION_HEADER = "Authorization";
var SIGNOZ_API_KEY_HEADER = "SIGNOZ-API-KEY";
var SIGNOZ_URL_HEADER = "X-SigNoz-URL";
var findHeader = (headers, name) => headers.find((h) => h.name.trim() === name);
var normalizeElasticCloudHeaders = (headers) => {
  const authHeader = findHeader(headers, ELASTIC_CLOUD_AUTHORIZATION_HEADER);
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: ELASTIC_CLOUD_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var normalizeDatadogHeaders = (headers) => {
  const apiKeyHeader = findHeader(headers, DATADOG_API_KEY_HEADER);
  const applicationKeyHeader = findHeader(headers, DATADOG_APPLICATION_KEY_HEADER);
  return [apiKeyHeader, applicationKeyHeader].filter((h) => h !== undefined).map((h) => ({ ...h, name: h.name.trim(), value: h.value.trim() }));
};
var MCP_KEYBASED_INVALID_INPUTS_ERROR = "Invalid inputs. Please check and try again.";
var MCP_KEYBASED_MISSING_FIELDS_ERROR = "Missing required fields.";
var MCP_KEYBASED_UNREACHABLE_ERROR = "Unable to reach the provider's API. Please try again.";
var cekuraProjectAccessPath = "/user/v1/projects/";
var cekuraProjectAccessTimeoutMs = 1e4;
var validateElasticCloudCredentials = ({
  headers
}) => {
  const authValue = headers[ELASTIC_CLOUD_AUTHORIZATION_HEADER]?.trim();
  if (!authValue) {
    return {
      success: false,
      errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR
    };
  }
  if (!authValue.startsWith("ApiKey ")) {
    return {
      success: false,
      errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR
    };
  }
  return { success: true };
};
var datadogValidationTimeoutMs = 1e4;
var datadogValidateKeysPath = "/api/v2/validate_keys";
var deriveDatadogApiBaseUrl = (serverUrl) => {
  try {
    const url2 = new URL(serverUrl);
    if (!url2.hostname.startsWith("mcp."))
      return null;
    return `${url2.protocol}//${url2.hostname.replace(/^mcp\./, "api.")}`;
  } catch {
    return null;
  }
};
var validateDatadogCredentials = async ({
  headers,
  serverUrl
}) => {
  const apiKey = headers[DATADOG_API_KEY_HEADER]?.trim();
  const applicationKey = headers[DATADOG_APPLICATION_KEY_HEADER]?.trim();
  if (!apiKey || !applicationKey) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  const apiBaseUrl = deriveDatadogApiBaseUrl(serverUrl);
  if (!apiBaseUrl)
    return { success: true };
  let appKeyResponse;
  try {
    appKeyResponse = await fetch(`${apiBaseUrl}${datadogValidateKeysPath}`, {
      method: "GET",
      headers: { "DD-API-KEY": apiKey, "DD-APPLICATION-KEY": applicationKey },
      signal: AbortSignal.timeout(datadogValidationTimeoutMs)
    });
  } catch {
    return { success: false, errorMessage: MCP_KEYBASED_UNREACHABLE_ERROR };
  }
  if (!appKeyResponse.ok) {
    return {
      success: false,
      errorMessage: appKeyResponse.status === 401 || appKeyResponse.status === 403 ? MCP_KEYBASED_INVALID_INPUTS_ERROR : MCP_KEYBASED_UNREACHABLE_ERROR
    };
  }
  return { success: true };
};
var normalizeCloudflareHeaders = (headers) => {
  const authHeader = findHeader(headers, CLOUDFLARE_AUTHORIZATION_HEADER);
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: CLOUDFLARE_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var cloudflareValidationTimeoutMs = 1e4;
var cloudflareVerifyTokenUrl = "https://api.cloudflare.com/client/v4/user/tokens/verify";
var validateCloudflareCredentials = async ({
  headers
}) => {
  const authValue = headers[CLOUDFLARE_AUTHORIZATION_HEADER]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  let response;
  try {
    response = await fetch(cloudflareVerifyTokenUrl, {
      method: "GET",
      headers: { Authorization: authValue },
      signal: AbortSignal.timeout(cloudflareValidationTimeoutMs)
    });
  } catch {
    return { success: false, errorMessage: MCP_KEYBASED_UNREACHABLE_ERROR };
  }
  if (!response.ok) {
    return {
      success: false,
      errorMessage: response.status === 401 || response.status === 403 ? MCP_KEYBASED_INVALID_INPUTS_ERROR : MCP_KEYBASED_UNREACHABLE_ERROR
    };
  }
  let verifyBody;
  try {
    verifyBody = await response.json();
  } catch {
    return { success: false, errorMessage: MCP_KEYBASED_UNREACHABLE_ERROR };
  }
  if (verifyBody.success !== true || verifyBody.result?.status !== "active") {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var normalizeXHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === X_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: X_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var normalizeContextCompanyHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === CONTEXT_COMPANY_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: CONTEXT_COMPANY_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var validateContextCompanyCredentials = ({
  headers
}) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === CONTEXT_COMPANY_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var validateXCredentials = ({ headers }) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === X_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var normalizeBraintrustHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === BRAINTRUST_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: BRAINTRUST_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var validateBraintrustCredentials = ({
  headers
}) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === BRAINTRUST_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var normalizeIntercomHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === INTERCOM_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: INTERCOM_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var validateIntercomCredentials = ({
  headers
}) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === INTERCOM_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var normalizeRenderHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === RENDER_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: RENDER_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var renderValidationTimeoutMs = 1e4;
var renderOwnersUrl = "https://api.render.com/v1/owners";
var validateRenderCredentials = async ({
  headers
}) => {
  const authValue = headers[RENDER_AUTHORIZATION_HEADER]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  let response;
  try {
    response = await fetch(renderOwnersUrl, {
      method: "GET",
      headers: { Authorization: authValue, Accept: "application/json" },
      signal: AbortSignal.timeout(renderValidationTimeoutMs)
    });
  } catch {
    return { success: false, errorMessage: MCP_KEYBASED_UNREACHABLE_ERROR };
  }
  if (!response.ok) {
    return {
      success: false,
      errorMessage: response.status === 401 || response.status === 403 ? MCP_KEYBASED_INVALID_INPUTS_ERROR : MCP_KEYBASED_UNREACHABLE_ERROR
    };
  }
  return { success: true };
};
var normalizeSignozHeaders = (headers) => {
  const apiKeyHeader = findHeader(headers, SIGNOZ_API_KEY_HEADER);
  const urlHeader = findHeader(headers, SIGNOZ_URL_HEADER);
  return [apiKeyHeader, urlHeader].filter((h) => h !== undefined).map((h) => ({ ...h, name: h.name.trim(), value: h.value.trim() }));
};
var validateSignozCredentials = ({
  headers
}) => {
  const apiKey = headers[SIGNOZ_API_KEY_HEADER]?.trim();
  if (!apiKey) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  return { success: true };
};
var normalizeExaHeaders = (headers) => {
  const apiKeyHeader = findHeader(headers, EXA_API_KEY_HEADER);
  if (!apiKeyHeader)
    return headers;
  return [
    {
      id: apiKeyHeader.id,
      name: EXA_API_KEY_HEADER,
      value: apiKeyHeader.value.trim()
    }
  ];
};
var validateExaCredentials = ({ headers }) => {
  const apiKey = headers[EXA_API_KEY_HEADER]?.trim();
  if (!apiKey) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  return { success: true };
};
var normalizeComposioHeaders = (headers) => {
  const apiKeyHeader = findHeader(headers, COMPOSIO_API_KEY_HEADER);
  if (!apiKeyHeader)
    return headers;
  return [
    {
      id: apiKeyHeader.id,
      name: COMPOSIO_API_KEY_HEADER,
      value: apiKeyHeader.value.trim()
    }
  ];
};
var validateComposioCredentials = ({
  headers
}) => {
  const apiKey = headers[COMPOSIO_API_KEY_HEADER]?.trim();
  if (!apiKey) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  return { success: true };
};
var normalizeRentahumanHeaders = (headers) => {
  const apiKeyHeader = findHeader(headers, RENTAHUMAN_API_KEY_HEADER);
  if (!apiKeyHeader)
    return headers;
  return [
    {
      id: apiKeyHeader.id,
      name: RENTAHUMAN_API_KEY_HEADER,
      value: apiKeyHeader.value.trim()
    }
  ];
};
var validateRentahumanCredentials = ({
  headers
}) => {
  const apiKey = headers[RENTAHUMAN_API_KEY_HEADER]?.trim();
  if (!apiKey) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  return { success: true };
};
var normalizeContextDevHeaders = (headers) => {
  const apiKeyHeader = findHeader(headers, CONTEXT_DEV_API_KEY_HEADER);
  if (!apiKeyHeader)
    return headers;
  return [
    {
      id: apiKeyHeader.id,
      name: CONTEXT_DEV_API_KEY_HEADER,
      value: apiKeyHeader.value.trim()
    }
  ];
};
var validateContextDevCredentials = ({
  headers
}) => {
  const apiKey = headers[CONTEXT_DEV_API_KEY_HEADER]?.trim();
  if (!apiKey) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  return { success: true };
};
var normalizeAutumnHeaders = (headers) => {
  const authHeader = findHeader(headers, AUTUMN_AUTHORIZATION_HEADER);
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: AUTUMN_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var normalizeLangfuseHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === LANGFUSE_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: LANGFUSE_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var validateAutumnCredentials = ({
  headers
}) => {
  const authValue = headers[AUTUMN_AUTHORIZATION_HEADER]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var validateLangfuseCredentials = ({
  headers
}) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === LANGFUSE_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Basic ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var normalizeResendHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === RESEND_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: RESEND_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var validateResendCredentials = ({
  headers
}) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === RESEND_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var normalizeRespanHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === RESPAN_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: RESPAN_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var validateRespanCredentials = ({
  headers
}) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === RESPAN_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var normalizeGcpHeaders = (headers) => {
  const authHeader = headers.find((header) => header.name.trim().toLowerCase() === GCP_AUTHORIZATION_HEADER.toLowerCase());
  if (!authHeader)
    return headers;
  return [
    {
      id: authHeader.id,
      name: GCP_AUTHORIZATION_HEADER,
      value: authHeader.value.trim()
    }
  ];
};
var validateGcpCredentials = ({ headers }) => {
  const authValue = Object.entries(headers).find(([name]) => name.trim().toLowerCase() === GCP_AUTHORIZATION_HEADER.toLowerCase())?.[1]?.trim();
  if (!authValue) {
    return { success: false, errorMessage: MCP_KEYBASED_MISSING_FIELDS_ERROR };
  }
  if (!authValue.startsWith("Bearer ")) {
    return { success: false, errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR };
  }
  return { success: true };
};
var validateCekuraCredentials = async ({
  headers,
  serverUrl
}) => {
  const validationUrl = new URL(serverUrl);
  validationUrl.pathname = cekuraProjectAccessPath;
  validationUrl.search = "";
  validationUrl.hash = "";
  let response;
  try {
    response = await fetch(validationUrl, {
      method: "GET",
      headers,
      signal: AbortSignal.timeout(cekuraProjectAccessTimeoutMs)
    });
  } catch {
    return { success: false, errorMessage: MCP_KEYBASED_UNREACHABLE_ERROR };
  }
  if (response.ok) {
    return { success: true };
  }
  if (response.status === 401 || response.status === 403) {
    return {
      success: false,
      errorMessage: MCP_KEYBASED_INVALID_INPUTS_ERROR
    };
  }
  return { success: false, errorMessage: MCP_KEYBASED_UNREACHABLE_ERROR };
};
// ../mcp-connector-provider/src/provider-about-content.ts
var atlassian = `
## Overview

Connect Atlassian to Sazabi agents to search and manage Jira, Confluence, Jira Service Management, Compass, and Bitbucket from your workflow.

## How it works

Atlassian hosts a remote MCP server (Atlassian Rovo) at \`https://mcp.atlassian.com/v1/mcp\` over streamable HTTP. Sazabi authenticates via OAuth 2.1 using Atlassian's dynamic client registration (public-client, PKCE) — you approve access once in the browser and Sazabi refreshes the token thereafter. Agents can then search and act across your Atlassian products. Write tools are gated by the per-connection read-only toggle and your organization's tool policy.

## Features

- Search and read Jira issues, projects, and boards
- Search and read Confluence pages and spaces
- Work with Jira Service Management requests and Compass components
- Access Bitbucket repositories and pull requests

## Requirements

- An Atlassian Cloud site with Rovo/MCP access enabled
- Permission to authorize third-party OAuth applications for your Atlassian org
`.trim();
var attio = `
## Overview

Connect Attio to Sazabi agents to search and manage your CRM records, workspace data, and relationship intelligence without leaving your workflow.

## How it works

Attio's MCP server authenticates via OAuth using Attio's OpenID Connect flow with dynamic client registration. Once connected, Sazabi agents can call Attio MCP tools to search records, manage lists, log activities, create notes, and track tasks. Write tools require explicit approval per your organization's tool policy.

## Features

- Search and filter CRM records, people, and companies
- Browse and update list entries and workspace data
- Create and manage tasks, notes, and meeting logs
- Access relationship intelligence and interaction history

## Requirements

- An active Attio workspace
- Permission to authorize third-party OAuth applications in Attio
`.trim();
var autumn = `
## Overview

Connect Autumn to Sazabi agents to inspect and manage your billing and pricing — customers, plans, features, balances, usage, and subscriptions — from agent conversations. Autumn is a pricing and billing layer built on top of Stripe.

## How it works

Autumn hosts an MCP server at \`https://mcp.useautumn.com/mcp\` that authenticates with an Autumn secret key. Sazabi stores your key securely and sends it as \`Authorization: Bearer <key>\` to Autumn's MCP endpoint. Agents can then look up customers and their entitlements, read plans and features, check balances and usage, preview changes, and manage subscriptions. Autumn's write tools front a preview/approval flow, and write operations are additionally governed by the per-connection read-only toggle.

## Features

- Look up customers, their plans, features, and balances
- Read the pricing catalog: plans, features, credits, and usage limits
- Check and track feature usage and entitlements
- Preview and manage subscriptions, schedules, and billing changes

## Requirements

- An Autumn account with a secret key (\`am_sk_...\`) from the [Autumn dashboard](https://app.useautumn.com) under **Developer > API Keys**
- Use a sandbox key to explore or a production key for live billing data
`.trim();
var aws = `
## Overview

Connect the AWS-managed AWS MCP server (AWS Agent Toolkit) to Sazabi agents to search AWS documentation and run AWS API operations using your own IAM credentials.

## How it works

The AWS MCP server is a remote endpoint that authenticates with AWS SigV4, not a static token or OAuth. SigV4 signs a hash of every request body at send time, so AWS normally requires a local proxy (\`mcp-proxy-for-aws\`) to bridge standard MCP clients. Sazabi instead signs each outbound request in its MCP client using the IAM access key, secret, optional session token, and region you provide, so no local proxy is needed. Credentials are stored encrypted. Actual authorization is enforced by the IAM identity behind those credentials; the per-connection read-only toggle governs write tools on Sazabi's side.

## Features

- Search AWS documentation from agent conversations
- Invoke AWS API operations scoped to the supplied IAM identity
- Region-scoped access via the \`aws-mcp.<region>.api.aws/mcp\` endpoint

## Requirements

- An AWS account and IAM credentials (access key ID + secret access key, or temporary credentials with a session token)
- Least-privilege permissions matching what the agent should be allowed to do
- The AWS region to target

## Availability

The SigV4 signing foundation is in place, so a connection configured with AWS credentials works end to end. The dashboard connect form for submitting IAM credentials is not shipped yet, so this connector is listed but not yet self-serve connectable from settings.
`.trim();
var cloudflare = `
## Overview

Connect Cloudflare to Sazabi agents to investigate Workers observability logs and analytics, inspect bindings, review builds, and surface Radar insights directly from agent conversations.

## How it works

Cloudflare's hosted MCP servers authenticate via OAuth with dynamic client registration. The default Cloudflare API server is a single, account-scoped connection that covers all products (Workers, DNS, zones, and more). Its tools are gated by the permissions you grant during authorization. You can also pick a narrower per-product server (Observability, Workers Bindings, Workers Builds, or Radar). Once connected, agents can query Workers logs and analytics, inspect D1/R2/KV bindings, review build history, and read Radar traffic insights. Write operations are governed by the per-connection read-only toggle.

## Features

- Query Workers observability logs and analytics
- Inspect Workers bindings (D1, R2, KV) and account resources
- Review Workers Builds history and status
- Browse Cloudflare Radar internet traffic insights

## Requirements

- An active Cloudflare account
- Permission to authorize third-party OAuth applications for your Cloudflare account
`.trim();
var cloudflareApiToken = `
## Overview

Connect Cloudflare to Sazabi agents using a Cloudflare API token instead of OAuth. This connects to the same hosted Cloudflare API MCP server (Workers, DNS, zones, and more) but authenticates with an API token you mint yourself.

## How it works

Cloudflare's hosted MCP server accepts a Cloudflare API token as a Bearer credential in the Authorization header. You create a token in the Cloudflare dashboard scoped to exactly the permissions you want the agent to use, then provide it to Sazabi. This gives you granular, user-controlled scoping, unlike the OAuth connector, which inherits the connecting account's permissions. Sazabi validates the token against Cloudflare's verify endpoint before completing the connection. Write operations are governed by the per-connection read-only toggle.

## Features

- Query Workers observability logs and analytics
- Inspect Workers bindings (D1, R2, KV) and account resources
- Review Workers Builds history and status
- Browse Cloudflare Radar internet traffic insights

## Requirements

- An active Cloudflare account
- A Cloudflare API token scoped to the products you want the agent to access (tokens with Client IP Address Filtering enabled are not supported)
`.trim();
var calendly = `
## Overview

Connect Calendly to Sazabi agents to check availability, create scheduling links, and manage meetings directly from agent conversations.

## How it works

Calendly's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can query your event types, check scheduling availability, and create booking links through Calendly's hosted MCP server.

## Features

- Check availability windows across event types
- Create and share scheduling links
- Browse upcoming and past meetings
- Manage event type configurations

## Requirements

- A Calendly account (Free, Standard, Teams, or Enterprise)
- Permission to authorize third-party OAuth applications
`.trim();
var clay = `
## Overview

Connect Clay to Sazabi agents to search contacts, interactions, and workspace workflows for enriched prospecting and relationship data.

## How it works

Clay's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can search your Clay workspace for contacts, browse interaction history, and retrieve workflow data. Write operations are restricted by default.

## Features

- Search contacts, companies, and enrichment data
- Browse interaction and note history
- Access workspace table data and views
- Retrieve workflow and automation results

## Requirements

- An active Clay workspace
- Permission to authorize third-party OAuth applications in Clay
`.trim();
var datadog = `
## Overview

Connect Datadog to Sazabi agents to query metrics, logs, traces, and incident data using your Datadog site URL, API key, and Application Key.

## How it works

Datadog's hosted MCP server accepts API and Application Key authentication via HTTP headers. Sazabi stores your keys securely and sends them as \`DD_API_KEY\` and \`DD_APPLICATION_KEY\` headers to Datadog's MCP endpoint. Agents can then query observability data across your Datadog organization. Write operations are restricted by default.

## Features

- Query metrics, logs, and distributed traces
- Browse monitors, dashboards, and alert policies
- Search and manage incidents
- Access APM service maps and performance data

## Requirements

- A Datadog account with access to the desired data
- Your Datadog site URL from the top of your browser, such as \`https://app.datadoghq.com\` or \`https://us3.datadoghq.com\`
- A Datadog API key created in **Organization Settings > Access > API Keys**
- A Datadog Application Key created in **Organization Settings > Access > Application Keys** with no scopes, which defaults to the owner's scopes, or with full scopes
`.trim();
var checkly = `
## Overview

Connect Checkly to Sazabi agents to query synthetic monitoring data, including checks, check results, test sessions, root cause analyses, status pages, and incidents during investigations.

## How it works

Checkly ships an official hosted MCP server at \`https://api.checklyhq.com/mcp\` over Streamable HTTP, authenticated with OAuth via Auth0. Checkly only accepts **Checkly-approved OAuth clients** and explicitly rejects Dynamic Client Registration (DCR), which is how Sazabi's other OAuth connectors onboard. Until Sazabi has a Checkly-approved OAuth client, this connector is **disabled**. In the meantime, use the Checkly CLI sandbox preset for monitoring-as-code and read-only checks.

## Features

- Inspect account membership, plan, and feature entitlements
- Read check status, results, and test sessions
- Review root cause analyses, status pages, and incidents

## Requirements

- A Checkly account
- A Checkly-approved OAuth client for Sazabi (pending; Checkly does not support Dynamic Client Registration)
`.trim();
var gcp = `
## Overview

Connect Google Cloud (GCP) to Sazabi agents to query Cloud Logging, Cloud Monitoring, BigQuery, and other Google Cloud products using your own Google IAM-scoped credentials.

## How it works

Google ships first-party remote MCP servers per product over streamable HTTP at \`https://SERVICE.googleapis.com/mcp\`. Sazabi defaults to Cloud Logging (\`https://logging.googleapis.com/mcp\`); you can point the server URL at other endpoints such as \`https://monitoring.googleapis.com/mcp\` or \`https://bigquery.googleapis.com/mcp\`. These servers authenticate with a Google OAuth 2.0 Bearer access token: you supply a short-lived access token (for example from \`gcloud auth application-default print-access-token\`), and Sazabi sends it in the \`Authorization\` header. Access is scoped by Google IAM. The per-connection read-only toggle governs write tools — note it defaults to off, so write tools are callable until you turn it on.

## Features

- Query Cloud Logging for logs and log-based signals
- Read Cloud Monitoring metrics and time series
- Run BigQuery queries and inspect datasets
- Point at other supported per-product Google Cloud MCP endpoints

## Requirements

- A Google Cloud project with the target product APIs enabled
- A Google OAuth 2.0 access token scoped by IAM to the resources Sazabi should read (tokens are short-lived and must be refreshed on expiry)
`.trim();
var googleDrive = `
## Overview

Connect Google Drive to Sazabi agents to search and read files and metadata in a Google Drive through Google's hosted MCP server.

## How it works

Google hosts an official Google Drive MCP server at \`https://drivemcp.googleapis.com/mcp/v1\` over streamable HTTP. It uses standard OAuth 2.0 (authorization code + PKCE) against Google's endpoints but does not support automatic client registration, so an admin must first create an OAuth client (Client ID / Client Secret) in a Google Cloud project with a configured consent screen and Drive scopes, and provide those credentials to your Sazabi deployment. Once configured, you authorize access in the browser and Sazabi refreshes the token using offline access. The connector requests read-only Drive access.

## Features

- Search files and folders in a Google Drive
- Read file contents and metadata
- Reference Drive documents and assets in agent workflows

## Requirements

- A Google Cloud project with the Google Drive API and Google Drive MCP API (\`drivemcp.googleapis.com\`) enabled
- An OAuth client (Client ID / Client Secret) configured with the Sazabi callback URL and Drive scopes, provisioned in your Sazabi deployment configuration
`.trim();
var grafana = `
## Overview

Connect Grafana Cloud to Sazabi agents to browse dashboards, query metrics, logs, and traces, and review alerts and incidents during investigations.

## How it works

Grafana's Cloud MCP server authenticates via OAuth 2.1 with dynamic client registration. This is a browser consent flow with no API tokens to copy. Once connected, Sazabi agents can read dashboards, run Prometheus and Loki queries, inspect Tempo traces, and review alert rules across your Grafana Cloud stack. Write operations are restricted by default.

## Features

- Browse dashboards and panels and read their underlying queries
- Query metrics, logs, and traces across connected data sources
- Review alert rules, firing alerts, and on-call schedules
- Surface incident and Sift investigation context during debugging

## Requirements

- An active Grafana Cloud stack
- Permission to authorize third-party OAuth applications in Grafana Cloud
- A role granting the \`grafana-assistant-app.cloud-mcp:access\` action
`.trim();
var granola = `
## Overview

Connect Granola to Sazabi agents to search and browse your AI-powered meeting notes, transcripts, and folders.

## How it works

Granola's MCP server authenticates via OAuth with dynamic client registration. Once connected, Sazabi agents can search your meeting notes and transcripts to surface context from past conversations. Write operations are restricted by default.

## Features

- Search meeting notes and transcripts by topic or participant
- Browse Granola folders and organized note collections
- Retrieve full meeting summaries and key decisions
- Access action items and follow-ups from past meetings

## Requirements

- An active Granola account with meeting notes
`.trim();
var happenstance = `
## Overview

Connect Happenstance to Sazabi agents to search your professional network and find warm paths to the people you want to reach.

## How it works

Happenstance's MCP server authenticates via OAuth with dynamic client registration. Once connected, Sazabi agents can search across your Happenstance network to surface relevant people and connection paths.

## Features

- Search your network for people by role, company, or expertise
- Discover mutual connections and warm introduction paths
- Retrieve profile context for people in your network

## Requirements

- An active Happenstance account with a connected network
`.trim();
var honeycomb = `
## Overview

Connect Honeycomb to Sazabi agents to query observability data, including environments, datasets, columns, boards, triggers, and SLOs, directly from agent conversations.

## How it works

Honeycomb's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can list environments and datasets, inspect columns, run queries, and browse boards and triggers. Write operations are restricted by default.

## Features

- Browse Honeycomb environments, datasets, and columns
- Run queries and inspect query results
- View boards, triggers, and SLOs
- Surface trace and event context for debugging

## Requirements

- An active Honeycomb account
- A user with Read access under Model Context Protocol; the \`mcp:write\` scope is required for write tools
- EU teams select the **Europe (EU)** region when connecting
`.trim();
var incidentIo = `
## Overview

Connect incident.io to Sazabi agents to browse incidents, alerts, and on-call schedules directly from agent conversations.

## How it works

incident.io's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can query your incident history, check active alerts, and review on-call rotations. Write operations are restricted by default.

## Features

- Browse active and historical incidents
- View alert policies and firing alerts
- Check on-call schedules and escalation paths
- Search incident timelines and postmortems

## Requirements

- An active incident.io account
- Responder or higher role in your incident.io organization
- An incident.io admin to open the bottom-left gear menu, choose **MCP Server**, and add \`app.sazabi.com\` to your allowed redirect domains, otherwise authorization fails with a 404
`.trim();
var linear = `
## Overview

Connect Linear to Sazabi agents to browse and manage issues, projects, and roadmaps directly from agent conversations.

## How it works

Linear's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can search issues, update statuses, create new issues, and navigate your Linear workspace. Linear's MCP grants full read and write access, enabling agents to act on your behalf.

## Features

- Search and filter issues across teams and projects
- Create, update, and triage issues
- Browse projects, cycles, and roadmap items
- Manage labels, priorities, and assignees

## Requirements

- An active Linear workspace
- Member or higher role with access to the relevant teams
`.trim();
var mercury = `
## Overview

Connect Mercury to Sazabi agents to search banking context such as accounts, cards, recipients, transactions, treasury records, and organization data.

## How it works

Mercury's hosted MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can read Mercury data through the hosted MCP endpoint. The Mercury hosted MCP service is read-only.

## Features

- Search and review Mercury accounts and account metadata
- Browse transactions, recipients, counterparties, and status details
- Retrieve card, cardholder, treasury, and organization records
- Add banking context to investigations without changing Mercury data

## Requirements

- An active Mercury account with access to the desired organization
- Permission to authorize third-party OAuth applications in Mercury
`.trim();
var plain = `
## Overview

Connect Plain to Sazabi agents to search and manage support threads, customers, and tenants from your Plain workspace.

## How it works

Plain's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can search support threads, retrieve customer information, and browse tenant data. Write operations are restricted by default.

## Features

- Search and browse support threads by customer or topic
- Retrieve customer profiles and contact details
- Access tenant data and account metadata
- Review thread timelines and support history

## Requirements

- An active Plain workspace
- Permission to authorize third-party OAuth applications in Plain
`.trim();
var posthog = `
## Overview

Connect PostHog to Sazabi agents to query analytics data, feature flags, and experiment results from your PostHog organization.

## How it works

PostHog's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can query event analytics, inspect feature flag configurations, and review experiment results. This connector grants read and write access, enabling agents to create and update feature flags, insights, dashboards, and experiments on your behalf.

## Features

- Query product analytics events and trends
- Browse and manage feature flag configurations and rollout status
- Review A/B test and experiment results
- Search person and group properties

## Requirements

- A PostHog account
- Permission to authorize third-party OAuth applications in PostHog
`.trim();
var pylon = `
## Overview

Connect Pylon to Sazabi agents to search and manage support issues, customer accounts, and contacts from agent conversations.

## How it works

Pylon's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can search your customer support data, browse open issues, and retrieve account details. Write operations are restricted by default.

## Features

- Search and filter support issues and tickets
- Browse customer accounts and contact information
- Review conversation history and resolution notes
- Access SLA status and escalation information

## Requirements

- An active Pylon account
- Permission to authorize third-party OAuth applications in your Pylon workspace
`.trim();
var sentry = `
## Overview

Connect Sentry to Sazabi agents to browse error events, issues, and project data across your Sentry organizations.

## How it works

Sentry's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can query error events, inspect issue stack traces, and navigate your Sentry projects and teams. Write operations are restricted by default.

## Features

- Search and browse Sentry issues and error events
- Inspect stack traces and breadcrumbs
- Navigate organizations, teams, and projects
- Review performance spans and transaction data

## Requirements

- An active Sentry account (Cloud or self-hosted)
- Member or higher role in the Sentry organization
`.trim();
var signoz = `
## Overview

Connect SigNoz to Sazabi agents to query your metrics, logs, traces, alerts, and dashboards while investigating production issues.

## How it works

SigNoz's MCP server authenticates with a SigNoz API key. Sazabi stores your key securely and sends it as a \`SIGNOZ-API-KEY\` header to SigNoz's MCP endpoint, along with an optional \`X-SigNoz-URL\` header naming your instance for self-hosted setups. This works for both SigNoz Cloud (regional hosted MCP endpoints) and self-hosted SigNoz. Once connected, agents can list and query metrics, search traces, inspect alerts and notification channels, and read SigNoz docs. Write tools (creating alerts, notification channels, and dashboards) are governed by the per-connection read-only toggle.

## Features

- List and query metrics, and discover field keys and values
- Search traces and surface top metrics
- Inspect alerts and notification channels
- Create alerts, notification channels, and dashboards (subject to the read-only toggle)

## Requirements

- A SigNoz account (Cloud or self-hosted)
- A SigNoz API key (admin-level for alert, dashboard, and notification-channel tools)
`.trim();
var slack = `
## Overview

Connect Slack to Sazabi agents to search messages and retrieve files from your Slack workspace.

## How it works

Slack's MCP server authenticates via OAuth using Slack's user-scoped authorization flow. Once connected, agents can search messages and retrieve file content within the authorized workspace. This connector is read-only.

## Features

- Search messages across public and private channels
- Retrieve shared files and canvas documents
- Search users and workspace directory

## Requirements

- A Slack workspace where you have member access
- Permission to install OAuth apps (or admin approval for managed workspaces)
`.trim();
var supabase = `
## Overview

Connect Supabase to Sazabi agents to manage organizations, projects, databases, and run SQL queries from agent conversations.

## How it works

Supabase's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents have broad access to your Supabase account. They can manage projects, inspect schemas, run SQL, manage Edge Functions, and configure storage. This connector grants write access; use with care.

## Features

- Manage Supabase organizations and projects
- Browse and modify database schemas and tables
- Execute SQL queries and migrations
- Deploy and manage Edge Functions
- Configure Auth, Storage, and Realtime settings

## Requirements

- A Supabase account (Free or paid plan)
- Owner or admin role on the Supabase organization
`.trim();
var superhuman = `
## Overview

Connect Superhuman to Sazabi agents to search, draft, send, and triage emails from your Superhuman Mail inbox.

## How it works

Superhuman's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can search your inbox, read threads, draft replies, and send messages on your behalf. Write operations are restricted by default and require explicit approval.

## Features

- Search and browse email threads and contacts
- Read full email conversations
- Draft and send email replies
- Triage and organize inbox items

## Requirements

- An active Superhuman Mail account
- Permission to authorize third-party OAuth applications
`.trim();
var cekura = `
## Overview

Connect Cekura to Sazabi agents to test, monitor, and evaluate AI agent workflows directly from agent conversations.

## How it works

Cekura's MCP server accepts API key authentication via HTTP headers. Sazabi stores your key securely and sends it as the \`X-CEKURA-API-KEY\` header to Cekura's MCP endpoint. Agents can then run evaluations, check workflow health, and surface issues in your AI pipelines.

## Features

- Run evaluations and test suites against AI agent workflows
- Monitor workflow health and surface failures
- Retrieve evaluation results and historical run data
- Trigger on-demand checks on specific workflow configurations
- Browse workflow definitions and test case libraries

## Requirements

- A Cekura account
- A Cekura API key
`.trim();
var braintrust = `
## Overview

Connect Braintrust to Sazabi agents to query your Braintrust experiments, datasets, prompts, and logs directly from agent conversations.

## How it works

Braintrust hosts an MCP server at \`https://api.braintrust.dev/mcp\` over Streamable HTTP (use \`https://api-eu.braintrust.dev/mcp\` for the EU data plane). You supply a Braintrust API key, which Sazabi sends as a Bearer credential in the \`Authorization\` header — the headless alternative to Braintrust's interactive OAuth flow. Once connected, agents can browse and query your Braintrust projects; write operations are governed by the per-connection read-only toggle.

## Features

- Query experiments, evals, and their scores
- Browse datasets and logged traces
- Inspect prompts and project configuration

## Requirements

- A Braintrust account
- A Braintrust API key (Settings > API keys)
`.trim();
var exa = `
## Overview

Connect Exa to Sazabi agents to search the web, research companies, crawl pages, and run deep research directly from agent conversations.

## How it works

Exa hosts an MCP server at \`https://mcp.exa.ai/mcp\` that authenticates via API key. Sazabi stores your key securely and sends it as the \`x-api-key\` header to Exa's MCP endpoint. Agents can then run neural and keyword web searches, fetch page contents, crawl URLs, research companies, and kick off deep research tasks.

## Features

- Neural and keyword web search with content retrieval
- Company research and structured summaries
- Crawl and extract contents from specific URLs
- Find similar links to a given page
- Run deep research tasks over the web

## Requirements

- An Exa account
- An Exa API key from the [Exa dashboard](https://dashboard.exa.ai/api-keys)
`.trim();
var rentahuman = `
## Overview

Connect RentAHuman to Sazabi agents to hire and coordinate real human workers for tasks requiring human judgment or real-world action.

## How it works

RentAHuman hosts an MCP server at \`https://rentahuman.ai/api/mcp\` that authenticates via API key. Sazabi stores your key securely and sends it as the \`X-API-Key\` header. Write and payment tools are governed by the per-connection read-only toggle and per-tool enablement.

## Features

- Search humans and browse available services
- Post bounties and message workers
- Fund escrow-backed work and release payments
- Coordinate human-in-the-loop tasks from agent conversations

## Requirements

- A RentAHuman account
- An API key from the [RentAHuman API keys page](https://rentahuman.ai/account/api-keys)
`.trim();
var contextDev = `
## Overview

Connect Context.dev to Sazabi agents to resolve brand data, scrape and crawl websites into LLM-ready Markdown, extract structured data, and manage website-change monitors directly from agent conversations.

## How it works

Context.dev hosts an MCP server at \`https://context-dev.stlmcp.com\` that authenticates via API key. Sazabi stores your key securely and sends it as the \`x-context-dev-api-key\` header to Context.dev's MCP endpoint. The server uses a "Code Mode" tool scheme: instead of one tool per endpoint, it exposes \`search_docs\` (query the Context.dev SDK) and \`execute\` (run agent-authored TypeScript against the SDK in a sandbox), letting an agent compose brand lookups, scraping, extraction, and monitor operations into a single call.

## Features

- Resolve brand data by name, domain, email, stock ticker, or ISIN (logos, colors, socials, industry codes)
- Scrape and crawl websites into clean, LLM-ready Markdown, HTML, or images
- Extract structured data, styleguides, product catalogs, and NAICS/SIC industry classifications
- Create, update, run, and inspect website-change monitors

## Requirements

- A Context.dev account
- A Context.dev API key (\`ctxt_secret_...\`) from the [Context.dev dashboard](https://context.dev)
`.trim();
var elasticCloud = `
## Overview

Connect Elastic Cloud to Sazabi agents to search Elasticsearch indices and query Agent Builder tools directly from agent conversations using your Kibana-hosted MCP endpoint.

## How it works

Elastic Cloud exposes a built-in MCP server from your Kibana instance at \`/api/agent_builder/mcp\`. Sazabi connects using HTTP header authentication with an Elastic API key. Agents can then search your indices, query Agent Builder tools, and analyze logs and events stored in Elasticsearch. Write operations are restricted by default.

## Features

- Search Elasticsearch indices using full Query DSL
- List available indices and retrieve field mappings
- Fetch documents by ID
- Call custom Agent Builder tools you have defined in Kibana
- Analyze logs, metrics, and traces stored in Elasticsearch

## Requirements

- An Elastic Cloud account on version 9.2+ or a Serverless project
- Agent Builder enabled in your Kibana AI Assistant configuration
- Your Kibana base URL. Go to [Elastic Cloud deployments](https://cloud.elastic.co/deployments), open the deployment you want to connect, open Kibana, then copy the Kibana base URL from the browser
- An Elastic API key with the following privileges:
  - Kibana application: \`feature_agentBuilder.read\` and \`feature_actions.read\` on \`kibana-.kibana\`
  - Cluster: \`monitor_inference\`
  - Index: \`read\` and \`view_index_metadata\` on the indices you want agents to access
`.trim();
var intercom = `
## Overview

Connect Intercom to Sazabi agents to read support conversations, contacts, and help center content directly from agent conversations.

## How it works

Intercom ships an official hosted MCP server at \`https://mcp.intercom.com/mcp\`. Sazabi connects using HTTP header authentication with an Intercom API access token, which Sazabi stores securely and sends as \`Authorization: Bearer <token>\`. Agents can then search conversations, look up contacts and companies, and retrieve help center articles.

## Features

- Search and read Intercom support conversations and tickets
- Look up contacts, leads, and companies
- Retrieve help center articles and collections
- Surface support context alongside the rest of an investigation

## Requirements

- A US-hosted Intercom workspace (Intercom's hosted MCP currently supports US-hosted workspaces only)
- An Intercom app with an API access token
`.trim();
var neon = `
## Overview

Connect Neon to Sazabi agents to manage serverless Postgres databases, branches, and run SQL queries directly from agent conversations.

## How it works

Neon's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can create and manage Neon projects, work with database branches for safe migrations, and execute SQL queries. Full read and write access is granted, enabling agents to act on your behalf.

## Features

- Create, manage, and delete Neon projects and databases
- Work with database branches for safe schema changes and migrations
- Run SQL queries and apply database migrations
- Manage Neon Auth configuration and connection strings
- Browse organizations and project settings

## Requirements

- A Neon account (Free or paid plan)
- Permission to authorize third-party OAuth applications
`.trim();
var logfire = `
## Overview

Connect Pydantic Logfire to Sazabi agents to query OpenTelemetry traces and metrics, surface recent exceptions, and browse projects, alerts, dashboards, and schedules.

## How it works

Logfire's MCP server authenticates via OAuth with dynamic client registration. Once connected, Sazabi agents can query traces and metrics, surface recent exceptions, and browse projects, alerts, dashboards, and schedules from your Logfire workspace.

## Features

- Run arbitrary SQL queries against your Logfire datasets using the OpenTelemetry-native API
- Find the most recent exceptions in a given file
- Inspect the Logfire OpenTelemetry records schema to craft custom queries
- Browse projects, alerts, dashboards, schedules, channels, and variables
- Generate deep links into the Logfire UI for traces and issues

## Requirements

- A Pydantic Logfire account in the US region (\`logfire-us.pydantic.dev\`)
- Permission to authorize third-party OAuth applications in your Logfire organization
`.trim();
var axiom = `
## Overview

Connect Axiom to Sazabi agents to query your observability datasets and logs using APL, Axiom's powerful query language, directly from agent conversations.

## How it works

Axiom's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can query your Axiom datasets, search logs, and analyze traces and events to investigate production issues. Write operations are restricted by default.

## Features

- Query datasets and logs using APL (Axiom Processing Language)
- Search and filter events across datasets
- Analyze traces, errors, and structured logs
- Retrieve dataset schemas and field information
- Run aggregations and time-series analysis

## Requirements

- An Axiom account (Free, Pro, Team, or Enterprise plan)
- Permission to authorize third-party OAuth applications
`.trim();
var langsmith = `
## Overview

Connect LangSmith to Sazabi agents to query your LLM tracing projects, runs, datasets, and evaluations directly from agent conversations.

## How it works

LangSmith's hosted Remote MCP server authenticates via OAuth 2.1 with dynamic client registration. When you connect, pick the LangSmith Cloud region your organization lives in — GCP US (the default), GCP EU, GCP APAC, or AWS US — so the connection targets the matching regional host and authorization server. Once connected, agents can browse tracing projects, inspect runs and their traces, and look up datasets and evaluation results to investigate LLM application behavior. Write operations are governed by the per-connection read-only toggle.

## Features

- Browse LangSmith tracing projects
- Inspect runs, traces, and their inputs and outputs
- Look up datasets and dataset examples
- Review evaluation results and experiments

## Requirements

- A LangSmith account
- Permission to authorize third-party OAuth applications in your LangSmith organization
`.trim();
var planetscale = `
## Overview

Connect PlanetScale to Sazabi agents to query databases, inspect schema, and explore Insights data directly from agent conversations.

## How it works

PlanetScale's MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can list organizations, databases, and branches, inspect table schemas, execute queries, and surface Insights recommendations. Each query uses short-lived, ephemeral credentials that are created on demand and deleted immediately after execution.

## Features

- List organizations, databases, and branches
- Inspect table schemas and database structure
- Execute read and write SQL queries
- Browse PlanetScale Insights and schema recommendations
- Access branch-level metadata and deploy requests

## Requirements

- A PlanetScale account (Hobby or paid plan)
- Permission to authorize third-party OAuth applications in your PlanetScale organization
`.trim();
var airbyte = `
## Overview

Connect Airbyte to give Sazabi agents authenticated access to the third-party platforms you use every day, such as CRM, support desk, analytics, billing, and more, so agents can read and write records on your behalf from agent conversations.

## How it works

Airbyte hosts and manages the Agent Engine MCP server, so there is nothing to install. It authenticates via OAuth with dynamic client registration and handles authentication, pagination, schema validation, and error handling for each connected service. Once connected, agents can list, search, and retrieve records, and in some cases create or update them. Write operations are restricted by default.

## Features

- List, search, and retrieve records from connected third-party services
- Query CRM contacts, deals, and tickets
- Look up billing customers and invoices, or read and send messages
- Create or update records when writes are enabled

## Requirements

- An Airbyte account (sign up at app.airbyte.ai)
- At least one agent connector configured in Airbyte
- Permission to authorize third-party OAuth applications
`.trim();
var betterStack = `
## Overview

Connect Better Stack to Sazabi agents to investigate incidents, monitors, and log sources, and build telemetry queries directly from agent conversations.

## How it works

Better Stack's hosted MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can view incidents and on-call context, inspect uptime monitors and heartbeats, browse log sources, and build custom queries against your Better Stack Telemetry data. Write operations are governed by the per-connection read-only toggle.

## Features

- View incidents and on-call context
- Inspect uptime monitors and heartbeats
- Browse log sources and telemetry
- Build custom queries with AI against Better Stack Telemetry

## Requirements

- An active Better Stack account
- Permission to authorize third-party OAuth applications in your Better Stack organization
`.trim();
var paper = `
## Overview

Connect Paper to Sazabi agents to read and write your design files, inspect node trees, and manipulate design-system elements without leaving your workflow.

## How it works

The Paper MCP server runs locally from the Paper Desktop app. Opening a file in the app starts the MCP server on localhost, and Sazabi agents connect to it via streamable HTTP. Authentication is handled by the desktop app — the MCP endpoint itself is unauthenticated and only reachable from the local machine.

## Features

- Read file info, selections, node details, and tree summaries
- Create, update, and delete nodes in your design files
- Insert text content, images, and design-system components
- Sync design tokens or content from external sources into Paper

## Requirements

- The Paper Desktop app installed and running
- A design file open in the Paper Desktop app
- The MCP server endpoint accessible at \`http://127.0.0.1:29979/mcp\`
`.trim();
var stripe = `
## Overview

Connect Stripe to Sazabi agents to query and manage payments, customers, subscriptions, invoices, and billing directly from agent conversations.

## How it works

Stripe's remote MCP server (\`https://mcp.stripe.com\`) authenticates via OAuth 2.1 with PKCE and dynamic client registration. Once connected, agents can look up customers and charges, inspect subscriptions and invoices, and create payment links or refunds. Write operations are governed by the per-connection read-only toggle.

## Features

- Look up customers, charges, and payment intents
- Inspect subscriptions, invoices, and balance
- Create payment links and issue refunds
- Search Stripe objects and documentation

## Requirements

- An active Stripe account
- Permission to authorize third-party OAuth applications for your Stripe account
`.trim();
var x = `
## Overview

Connect X (formerly Twitter) to Sazabi agents to search posts and access real-time X data directly from agent conversations.

## How it works

X hosts an MCP server at \`https://api.x.com/mcp\` over Streamable HTTP. It does not support OAuth dynamic client registration, so you supply an X API OAuth 2.0 Bearer access token, which Sazabi sends in the \`Authorization\` header. Once connected, agents can search and read X data; write operations such as posting are governed by the per-connection read-only toggle.

## Features

- Search X posts and retrieve real-time data
- Look up users, posts, and engagement metadata
- Post or manage content when writes are enabled

## Requirements

- An X Developer account with API access
- An X app with an OAuth 2.0 access token
`.trim();
var circleback = `
## Overview

Connect Circleback to Sazabi agents to search and read your meeting notes, transcripts, action items, and calendar/email context.

## How it works

Circleback hosts an authenticated remote MCP server at \`https://circleback.ai/api/mcp\` over streamable HTTP. Sazabi authenticates via OAuth 2.0 with dynamic client registration (PKCE, public client) — you grant consent once in the browser and Sazabi refreshes the token thereafter. Once connected, agents can look up meeting notes, transcripts, and action items. Write tools are governed by the per-connection read-only toggle.

## Features

- Search meeting notes and full transcripts
- Retrieve action items and follow-ups from meetings
- Pull calendar and email context tied to meetings
- Reference call and product-feedback notes in agent workflows

## Requirements

- A Circleback account on a paid plan
- Permission to authorize third-party OAuth applications in Circleback
`.trim();
var clerk = `
## Overview

Connect Clerk's hosted MCP server to Sazabi agents to search Clerk's public documentation and SDK implementation snippets directly from agent conversations.

## How it works

Clerk's official MCP server (\`https://mcp.clerk.com/mcp\`) is a read-only Streamable HTTP endpoint that serves public Clerk documentation and SDK code patterns. It exposes two tools: \`list_clerk_sdk_snippets\` to list available SDK snippets and implementation bundles, and \`clerk_sdk_snippet\` to retrieve a specific SDK code pattern. No authentication is required because the server only serves public documentation. It does not read or manage users, organizations, sessions, or secrets in a Clerk instance.

## Features

- Semantic access to Clerk's documentation and SDK guides
- Retrieve up-to-date SDK implementation snippets and bundles
- Ground agent coding help in current Clerk auth patterns

## Requirements

- None. The Clerk MCP server is public and requires no authentication
`.trim();
var deepwiki = `
## Overview

Connect DeepWiki's hosted MCP server to Sazabi agents to search public GitHub repository documentation and ask questions about open-source code directly from agent conversations.

## How it works

DeepWiki's official MCP server (\`https://mcp.deepwiki.com/mcp\`) is a read-only Streamable HTTP endpoint that indexes public GitHub repositories and answers questions about their code and generated documentation. It exposes three tools: \`read_wiki_structure\` to list a repository's documentation topics, \`read_wiki_contents\` to fetch a repository's generated wiki, and \`ask_question\` to ask a natural-language question about a repository. No authentication is required because the server only serves documentation for public repositories. It cannot read or write private data. Private-repository access requires the separate paid Devin MCP server plus an API key, which is out of scope for this connector.

## Features

- List a public repository's documentation topics and structure
- Fetch generated wiki content for open-source projects
- Ask natural-language questions about third-party OSS code and architecture

## Requirements

- None. The DeepWiki MCP server is public and requires no authentication
`.trim();
var railway = `
## Overview

Connect Railway to Sazabi agents to inspect and manage your Railway infrastructure — projects, services, deployments, environment variables, and logs — directly from agent conversations.

## How it works

Railway's hosted MCP server authenticates via OAuth with dynamic client registration. Once connected, agents can browse your Railway workspace, read deployment status and logs, and (when enabled) create services, trigger deployments, and update variables. Access is scoped to the workspaces the connected account belongs to.

## Features

- Browse projects, services, and environments
- Read deployment status, build logs, and runtime logs
- Inspect and update environment variables
- Trigger and monitor deployments

## Requirements

- An active Railway account
- Membership in the Railway workspace you want to connect
`.trim();
var vercel = `
## Overview

Connect Vercel to Sazabi agents to inspect and manage your Vercel projects and deployments and access Vercel platform documentation, directly from agent conversations.

## How it works

Vercel hosts a remote MCP server at \`https://mcp.vercel.com\` over Streamable HTTP, authenticated with OAuth. Once connected, agents can browse your Vercel projects and deployments, read deployment status, and search Vercel's platform documentation. Access is scoped to the teams and projects the connected account can reach.

## Features

- Browse projects and deployments
- Read deployment status and details
- Search and reference Vercel platform documentation

## Requirements

- An active Vercel account
- Access to the Vercel teams and projects you want to connect
`.trim();
var salesforce = `
## Overview

Connect Salesforce to Sazabi agents to query Salesforce data and metadata and run Apex invocable actions and Flows exposed by a hosted MCP server, directly from agent conversations.

## How it works

Salesforce hosted MCP servers run on Salesforce infrastructure and authenticate via OAuth 2.0 with PKCE. Unlike some connectors, Salesforce does not support automatic client registration: an admin registers an External Client App (ECA) in the org, enables it for the hosted MCP server, and provides the resulting Client ID and Client Secret to the Sazabi deployment.

## Features

- Query Salesforce sObjects, records, and metadata
- Run Apex invocable actions and Flows exposed by the hosted MCP server
- Surface CRM context for investigations and workflows

## Requirements

- A Salesforce org with hosted MCP servers enabled
- An admin-registered External Client App with the \`mcp_api\` and \`refresh_token\` scopes and PKCE enabled
- Deployment configuration supplying the ECA Client ID and Client Secret
`.trim();
var langfuse = `
## Overview

Connect Langfuse to Sazabi agents to inspect LLM traces, observations, metrics, scores, comments, and prompts directly from agent conversations.

## How it works

Langfuse hosts an MCP server over Streamable HTTP at \`/api/public/mcp\`, region-scoped by Langfuse Cloud host — US (\`https://us.cloud.langfuse.com\`), EU (\`https://cloud.langfuse.com\`), or JP (\`https://jp.cloud.langfuse.com\`). Sazabi authenticates using HTTP Basic Auth built from a Langfuse project API key pair (\`pk-lf-...\` / \`sk-lf-...\`), stored securely and sent in the \`Authorization\` header. Agents can then query traces, observations, metrics, scores, and comments, and read managed prompts. Write operations are governed by the per-connection read-only toggle.

## Features

- Query traces and observations to investigate LLM application behavior
- Retrieve metrics, scores, and evaluation results
- Read comments attached to traces and observations
- Fetch managed prompts from Prompt Management
- Scope the connection to your Langfuse Cloud region (US, EU, or JP)

## Requirements

- A Langfuse Cloud account (or self-hosted deployment via the custom connector)
- A Langfuse project API key pair (Public \`pk-lf-...\` and Secret \`sk-lf-...\`) from **Project settings → API keys**
`.trim();
var render = `
## Overview

Connect Render to Sazabi agents to inspect and manage your Render infrastructure — services, deploys, environment variables, logs, and metrics — directly from agent conversations.

## How it works

Render hosts an MCP server at \`https://mcp.render.com/mcp\` over Streamable HTTP. Sazabi stores your Render API key securely and sends it as the \`Authorization: Bearer\` token to Render's MCP endpoint. Once connected, agents can browse services, list and get deploys, read service logs and metrics to investigate incidents, create supported resources, and update environment variables. Render's hosted MCP server documents deploys as list/get only — it does not support triggering deploys or other service-control changes beyond environment variables.

## Features

- Browse workspaces, services, and environment configuration
- List and get deploys (read-only)
- Read service logs and metrics to investigate incidents
- Create supported Render resources
- Update service environment variables

## Requirements

- A Render account
- A Render API key from **Account Settings > API Keys** in the [Render dashboard](https://dashboard.render.com/settings/api-keys)
`.trim();
var resend = `
## Overview

Connect Resend to Sazabi agents to send transactional and broadcast emails and manage domains, contacts, and audiences directly from agent conversations.

## How it works

Resend hosts an MCP server at \`https://mcp.resend.com/mcp\` over Streamable HTTP. Sazabi stores your Resend API key securely and sends it as the \`Authorization: Bearer\` token to Resend's MCP endpoint. Once connected, agents can send transactional and broadcast emails, manage domains, manage contacts and audiences, and retrieve send and delivery information. Write tools are enabled — agents can send email and mutate contacts, domains, and audiences.

## Features

- Send transactional and broadcast emails
- Manage domains (create, verify, and update)
- Manage contacts and audiences
- Retrieve send and delivery status information

## Requirements

- A Resend account
- A Resend API key (\`re_...\`) from the [Resend dashboard](https://resend.com/api-keys)
- A verified sending domain
`.trim();
var respan = `
## Overview

Connect Respan to Sazabi agents to query LLM request logs, execution traces, prompts, and customer data from your Respan account (the LLM observability platform formerly known as Keywords AI).

## How it works

Respan hosts an MCP server at \`https://mcp.respan.ai/api/mcp\` over Streamable HTTP. Sazabi stores your Respan API key securely and sends it as the \`Authorization: Bearer\` token to Respan's MCP endpoint. Once connected, agents can list and inspect LLM request logs, walk trace span trees, read prompt templates and versions, and look up customer budget usage. Write tools (such as creating a log) are enabled — mutations are governed by the per-connection read-only toggle.

## Features

- Query and filter LLM request logs (\`list_logs\`, \`get_log_detail\`, \`create_log\`)
- Inspect execution traces and span trees (\`list_traces\`, \`get_trace_tree\`)
- Read customer data and budget usage (\`list_customers\`, \`get_customer_detail\`)
- Manage prompt templates and versions (\`list_prompts\`, \`get_prompt_detail\`, \`list_prompt_versions\`, \`get_prompt_version_detail\`)

## Requirements

- A Respan account
- A Respan API key from the [Respan dashboard](https://platform.respan.ai/platform/api/api-keys)
`.trim();
var theContextCompany = `
## Overview

Connect The Context Company to Sazabi agents for read-only observability queries over agent insights, runs, and sessions.

## How it works

The Context Company hosts a Streamable HTTP MCP server at \`https://api.thecontext.company/mcp\`. Sazabi stores the read-only API key securely and sends it as an \`Authorization: Bearer\` header. OAuth metadata is available, but this connector uses the documented API-key fallback because dynamic client-registration and scopes were not sufficiently confirmed for safe OAuth wiring.

## Features

- Search agent insights with \`insight_search\`
- Inspect agent runs with \`get_agent_runs\`
- Inspect agent sessions with \`get_agent_sessions\`
- Keep write tools blocked through Sazabi capability policy

## Requirements

- A The Context Company account
- A read-only API key from the [MCP access documentation](https://docs.thecontext.company/access-data/mcp)
`.trim();
// ../mcp-connector-provider/src/providers/lib/mcp-provider.ts
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { z as z14 } from "zod";
var MCP_CONNECTOR_SKILLS_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../../../skills");
var MCP_PROVIDER_ICON_KEYS = [
  "airbyte",
  "atlassian",
  "attio",
  "autumn",
  "aws",
  "axiom",
  "better-stack",
  "braintrust",
  "calendly",
  "cekura",
  "checkly",
  "clay",
  "clerk",
  "cloudflare",
  "composio",
  "context-dev",
  "custom",
  "datadog",
  "deepwiki",
  "elastic-cloud",
  "exa",
  "gcp",
  "google-drive",
  "grafana",
  "granola",
  "happenstance",
  "honeycomb",
  "incident-io",
  "intercom",
  "langfuse",
  "langsmith",
  "linear",
  "logfire",
  "mercury",
  "neon",
  "notion",
  "onepassword",
  "paper",
  "plug",
  "posthog",
  "plain",
  "planetscale",
  "pylon",
  "railway",
  "render",
  "rentahuman",
  "resend",
  "respan",
  "salesforce",
  "sentry",
  "signoz",
  "slack",
  "stripe",
  "supabase",
  "superhuman",
  "the-context-company",
  "vercel",
  "x"
];
var mcpProviderIconKeySchema = z14.enum(MCP_PROVIDER_ICON_KEYS);
var mcpProviderCapabilityOverridesSchema = z14.object({
  readOnlyToolNames: z14.array(z14.string()).optional(),
  blockedToolNames: z14.array(z14.string()).optional(),
  defaultUnavailableReason: z14.enum(MCP_TOOL_AVAILABILITY_REASON_VALUES).optional(),
  allowWriteTools: z14.boolean().optional()
});
var mcpDynamicClientRegistrationSchema = z14.object({
  registrationEndpoint: z14.string().url(),
  tokenEndpointAuthMethod: z14.enum(MCP_OAUTH_TOKEN_ENDPOINT_AUTH_METHODS).optional(),
  includeScopesInRegistration: z14.boolean().optional()
});
var mcpProviderOauthMetadataSchema = z14.object({
  providerConfigKey: z14.string().min(1),
  callbackPathSegment: z14.string().min(1),
  authorizationUrl: z14.string().url().optional(),
  tokenUrl: z14.string().url().optional(),
  resourceUrl: z14.string().url().optional(),
  useServerUrlAsResource: z14.boolean().optional(),
  omitScopeFromAuthorizationUrl: z14.boolean().optional(),
  authorizationUrlParams: z14.record(z14.string(), z14.string()).optional(),
  dynamicClientRegistration: mcpDynamicClientRegistrationSchema.optional()
});
var mcpProviderRegionSchema = z14.object({
  label: z14.string().min(1),
  serverUrl: z14.string().url(),
  authorizationUrl: z14.string().url().optional(),
  tokenUrl: z14.string().url().optional(),
  resourceUrl: z14.string().url().optional(),
  dynamicClientRegistration: mcpDynamicClientRegistrationSchema.optional()
});
var mcpProviderSetupGroupSchema = z14.object({
  id: z14.string().min(1),
  title: z14.string().min(1),
  description: z14.string().optional(),
  body: z14.string().min(1),
  fieldKeys: z14.array(z14.string().min(1)).optional(),
  imageKeys: z14.array(z14.string().min(1)).optional()
});
var mcpProvider = z14.object({
  id: z14.string().min(1),
  label: z14.string().min(1),
  iconKey: mcpProviderIconKeySchema,
  defaultServerUrl: z14.string().url().nullable(),
  serverUrlPathSuffixMaxSegments: z14.number().int().positive().optional(),
  transport: z14.enum(MCP_TRANSPORTS),
  authMode: z14.enum(MCP_AUTH_MODES),
  availability: z14.enum(MCP_PROVIDER_AVAILABILITY_VALUES),
  oauth: mcpProviderOauthMetadataSchema.optional(),
  regions: z14.array(mcpProviderRegionSchema).optional(),
  capabilityOverrides: mcpProviderCapabilityOverridesSchema.optional(),
  helpText: z14.string().optional(),
  setupGroups: z14.array(mcpProviderSetupGroupSchema).optional(),
  evidenceHints: z14.array(z14.string().min(1)).optional(),
  skill: z14.string().min(1).optional(),
  setupSkill: z14.string().min(1).optional(),
  scopesUserSelectable: z14.boolean().optional()
});

// ../mcp-connector-provider/src/providers/lib/define-mcp-preset.ts
var defineMcpPreset = (preset) => {
  const parsed = mcpProvider.parse(preset);
  return {
    ...parsed,
    ...preset.getAvailableScopes ? { getAvailableScopes: preset.getAvailableScopes } : {},
    ...preset.getUrlConfiguration ? { getUrlConfiguration: preset.getUrlConfiguration } : {},
    ...preset.validateCredentials ? { validateCredentials: preset.validateCredentials } : {},
    ...preset.normalizeHeaders ? { normalizeHeaders: preset.normalizeHeaders } : {}
  };
};

// ../mcp-connector-provider/src/providers/airbyte.ts
var airbyte2 = defineMcpPreset({
  id: "airbyte",
  label: "Airbyte",
  iconKey: "airbyte",
  defaultServerUrl: "https://mcp.airbyte.ai/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "airbyte",
    callbackPathSegment: "airbyte",
    authorizationUrl: "https://mcp.airbyte.ai/authorize",
    tokenUrl: "https://mcp.airbyte.ai/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.airbyte.ai/register",
      tokenEndpointAuthMethod: "client_secret_post"
    }
  },
  getAvailableScopes: async () => [],
  scopesUserSelectable: false,
  capabilityOverrides: {
    defaultUnavailableReason: "write_blocked"
  },
  evidenceHints: [
    "Airbyte Agent Engine usage (mcp.airbyte.ai) or embedded agent connectors",
    "AIRBYTE_* environment variables or Airbyte agent/connector client code",
    "README/docs naming Airbyte for agent connectors to CRM, support, or analytics platforms"
  ],
  helpText: "Give agents authenticated access to your connected third-party platforms (CRM, support, analytics, and more) to read and write records on your behalf.",
  skill: "airbyte",
  setupSkill: "airbyte-setup"
});

// ../mcp-connector-provider/src/providers/atlassian.ts
var atlassian2 = defineMcpPreset({
  id: "atlassian",
  label: "Atlassian",
  iconKey: "atlassian",
  defaultServerUrl: "https://mcp.atlassian.com/v1/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "atlassian",
    callbackPathSegment: "atlassian",
    authorizationUrl: "https://mcp.atlassian.com/v1/authorize",
    tokenUrl: "https://cf.mcp.atlassian.com/v1/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://cf.mcp.atlassian.com/v1/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "atlassian.com, Jira, Confluence, Jira Service Management, Compass, or Bitbucket links",
    "Jira or Confluence project keys, issue keys, or workspace documentation",
    "ATLASSIAN_* environment variables or scripts that call Atlassian APIs"
  ],
  helpText: "Search and manage Jira, Confluence, Jira Service Management, Compass, and Bitbucket.",
  skill: "atlassian",
  setupSkill: "atlassian-setup"
});

// ../mcp-connector-provider/src/providers/attio.ts
var attio2 = defineMcpPreset({
  id: "attio",
  label: "Attio",
  iconKey: "attio",
  defaultServerUrl: "https://mcp.attio.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "attio",
    callbackPathSegment: "attio",
    authorizationUrl: "https://app.attio.com/oidc/authorize",
    tokenUrl: "https://app.attio.com/oidc/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://app.attio.com/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    {
      value: "mcp",
      label: "MCP access",
      description: "Read and manage Attio CRM records, lists, tasks, notes, and meetings."
    },
    { value: "openid", required: true },
    { value: "offline_access", required: true }
  ],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "attio.com links, Attio workspace docs, or ATTIO_* environment variables",
    "CRM account/contact workflows that reference Attio objects, lists, or tasks",
    "README/docs naming Attio as the CRM or customer system of record"
  ],
  helpText: "Search and manage Attio CRM records, lists, tasks, notes, and meetings.",
  skill: "attio",
  setupSkill: "attio-setup"
});

// ../mcp-connector-provider/src/providers/autumn.ts
var autumn2 = defineMcpPreset({
  id: "autumn",
  label: "Autumn",
  iconKey: "autumn",
  defaultServerUrl: "https://mcp.useautumn.com/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "useautumn.com / autumn-js SDK usage, AUTUMN_SECRET_KEY (am_sk_) environment variables, or an api.useautumn.com base URL",
    "Autumn billing/pricing calls such as attach, check, track, or entitlement gating in code",
    "README/docs naming Autumn for pricing, plans, features, credits, or usage-based billing on top of Stripe"
  ],
  helpText: "Manage Autumn billing and pricing — customers, plans, features, balances, usage, and subscriptions — using an Autumn secret key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an Autumn secret key",
      description: "Copy the Autumn secret key Sazabi will send to Autumn's hosted MCP endpoint.",
      body: "In the [Autumn dashboard](https://app.useautumn.com), open **Developer > API Keys** and copy a secret key (`am_sk_...`). Use a sandbox key to explore and a production key for live billing data. Sazabi stores it securely and sends it as `Authorization: Bearer <key>` to Autumn's MCP endpoint.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateAutumnCredentials,
  normalizeHeaders: normalizeAutumnHeaders
});

// ../mcp-connector-provider/src/providers/aws.ts
var AWS_MCP_ENDPOINT_REGIONS = [
  { value: "us-east-1", label: "US East (N. Virginia) — us-east-1" },
  { value: "eu-central-1", label: "Europe (Frankfurt) — eu-central-1" }
];
var awsMcpEndpointRegionSet = new Set(AWS_MCP_ENDPOINT_REGIONS.map((region) => region.value));
var aws2 = defineMcpPreset({
  id: "aws",
  label: "AWS",
  iconKey: "aws",
  defaultServerUrl: "https://aws-mcp.us-east-1.api.aws/mcp",
  transport: "streamable-http",
  authMode: "aws-sigv4",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "AWS SDK usage, aws-cli, or AWS_* environment variables in code or config",
    "CloudFormation/CDK/Terraform AWS resources, ECS/Lambda/S3/CloudWatch usage",
    "README/runbooks naming AWS as the cloud platform"
  ],
  helpText: "Query the AWS-managed AWS MCP server (AWS documentation and AWS API operations) using AWS IAM credentials. Sazabi signs each request with SigV4, so no local proxy is required.",
  setupGroups: [
    {
      id: "iam-credentials",
      title: "Create scoped IAM credentials",
      description: "Provide IAM credentials whose permissions match exactly what the agent should be able to do.",
      body: "In the AWS Console, create an IAM user or role with only the permissions Sazabi should use (for example read-only access via `ReadOnlyAccess`, or a scoped custom policy), then generate an access key. Paste the **Access key ID** and **Secret access key** below. For temporary credentials from an assumed role, also paste the **Session token**. Prefer short-lived, least-privilege credentials.",
      fieldKeys: ["accessKeyId", "secretAccessKey", "sessionToken"]
    },
    {
      id: "region",
      title: "Choose the AWS region",
      description: "The AWS MCP server is region-scoped; pick the region to target.",
      body: "Select the region where AWS hosts the AWS MCP endpoint. AWS currently offers the AWS MCP server in **US East (N. Virginia) — us-east-1** and **Europe (Frankfurt) — eu-central-1** only. Sazabi builds the `https://aws-mcp.<region>.api.aws/mcp` server URL from your choice and scopes SigV4 signing to it. This is the endpoint region, not the AWS region your API operations target.",
      fieldKeys: ["region"]
    }
  ]
});
// ../mcp-connector-provider/src/providers/axiom.ts
var axiom2 = defineMcpPreset({
  id: "axiom",
  label: "Axiom",
  iconKey: "axiom",
  defaultServerUrl: "https://mcp.axiom.co/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "axiom",
    callbackPathSegment: "axiom",
    authorizationUrl: "https://mcp.axiom.co/authorize",
    tokenUrl: "https://mcp.axiom.co/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.axiom.co/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Axiom datasets, APL queries, AXIOM_* environment variables, or axiom CLI usage",
    "Log drains or dashboards documented in Axiom",
    "README/docs naming Axiom as a log or event analytics backend"
  ],
  helpText: "Query Axiom datasets and logs with APL to investigate production events and incidents."
});

// ../mcp-connector-provider/src/providers/better-stack.ts
var betterStack2 = defineMcpPreset({
  id: "better-stack",
  label: "Better Stack",
  iconKey: "better-stack",
  defaultServerUrl: "https://mcp.betterstack.com",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "better-stack",
    callbackPathSegment: "better-stack",
    authorizationUrl: "https://betterstack.com/oauth/authorize",
    tokenUrl: "https://betterstack.com/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://betterstack.com/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    {
      value: "read",
      label: "Read",
      description: "Read Better Stack incidents, monitors, log sources, and telemetry."
    },
    {
      value: "write",
      label: "Write",
      description: "Acknowledge, resolve, and manage Better Stack incidents."
    }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Better Stack / Better Uptime monitors, heartbeats, or status pages",
    "BETTERSTACK_* or LOGTAIL_* environment variables, or Logtail/Better Stack log drains",
    "README/docs naming Better Stack for uptime monitoring, incidents, or log management"
  ],
  helpText: "Browse Better Stack incidents, monitors, and log sources, and build telemetry queries to investigate production issues."
});

// ../mcp-connector-provider/src/providers/braintrust.ts
var braintrust2 = defineMcpPreset({
  id: "braintrust",
  label: "Braintrust",
  iconKey: "braintrust",
  defaultServerUrl: "https://api.braintrust.dev/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "braintrust or autoevals packages, or BRAINTRUST_API_KEY environment variables",
    "Braintrust eval/logging/tracing usage in code or CI (e.g. braintrust eval)",
    "README/docs naming Braintrust for LLM evals, prompt/experiment tracking, or observability"
  ],
  helpText: "Query Braintrust experiments, datasets, prompts, and logs using a Braintrust API key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create a Braintrust API key",
      description: "Generate the Braintrust API key the hosted MCP server will use.",
      body: "In Braintrust, go to **Settings > API keys** (https://www.braintrust.dev/app/settings/api-keys) and create an API key. Copy the generated key. The hosted MCP server lives at `https://api.braintrust.dev/mcp` (use `https://api-eu.braintrust.dev/mcp` if your data lives in the EU data plane).",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateBraintrustCredentials,
  normalizeHeaders: normalizeBraintrustHeaders
});

// ../mcp-connector-provider/src/providers/calendly.ts
var calendly2 = defineMcpPreset({
  id: "calendly",
  label: "Calendly",
  iconKey: "calendly",
  defaultServerUrl: "https://mcp.calendly.com",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "calendly",
    callbackPathSegment: "calendly",
    authorizationUrl: "https://calendly.com/oauth/authorize",
    tokenUrl: "https://calendly.com/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://calendly.com/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "calendly.com scheduling links or Calendly webhook handlers",
    "CALENDLY_* environment variables or API integrations",
    "README/docs naming Calendly for customer calls, interviews, or demos"
  ],
  helpText: "Check availability, create scheduling links, and manage meetings in Calendly."
});

// ../mcp-connector-provider/src/providers/cekura.ts
var cekura2 = defineMcpPreset({
  id: "cekura",
  label: "Cekura",
  iconKey: "cekura",
  defaultServerUrl: "https://api.cekura.ai/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  evidenceHints: [
    "Cekura workflow tests, monitor configs, or CEKURA_* environment variables",
    "Agent evaluation or production monitor docs naming Cekura",
    "Synthetic user-flow tests for AI agents"
  ],
  helpText: "Test, monitor, and evaluate AI agent workflows with Cekura.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the API key Sazabi will send to Cekura's hosted MCP endpoint.",
      body: "Create or copy a project-scoped Cekura [API key](https://dashboard.cekura.ai/settings/org/api-key) when possible, then paste it below.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateCekuraCredentials
});

// ../mcp-connector-provider/src/providers/checkly.ts
var checkly2 = defineMcpPreset({
  id: "checkly",
  label: "Checkly MCP",
  iconKey: "checkly",
  defaultServerUrl: "https://api.checklyhq.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "disabled",
  oauth: {
    providerConfigKey: "checkly",
    callbackPathSegment: "checkly"
  },
  getAvailableScopes: async () => [
    { value: "checkly:account:read" },
    { value: "checkly:account:invite" },
    { value: "checkly:checks:read" },
    { value: "checkly:checks:run" },
    { value: "checkly:incidents:read" },
    { value: "checkly:incidents:write" },
    { value: "checkly:environment-variables:read" },
    { value: "checkly:environment-variables:write" },
    { value: "checkly:status-pages:read" },
    { value: "checkly:rca:read" },
    { value: "checkly:rca:run" },
    { value: "checkly:test-sessions:read" },
    { value: "checkly:assets:read" }
  ],
  scopesUserSelectable: false,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "checkly.config.ts/js, __checks__ directories, @checkly/cli, or CHECKLY_* environment variables",
    "README/docs naming Checkly for synthetic monitoring, API checks, or browser checks",
    "Runbooks that inspect Checkly check results, test sessions, RCA, status pages, or incidents"
  ],
  helpText: "Query Checkly synthetic monitoring (checks, check results, test sessions, RCA, status pages, and incidents) over Checkly's official OAuth MCP server. Disabled until Sazabi has a Checkly-approved OAuth client, because Checkly rejects Dynamic Client Registration."
});

// ../mcp-connector-provider/src/providers/circleback.ts
var circleback2 = defineMcpPreset({
  id: "circleback",
  label: "Circleback",
  iconKey: "plug",
  defaultServerUrl: "https://circleback.ai/api/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "circleback",
    callbackPathSegment: "circleback",
    authorizationUrl: "https://circleback.ai/api/oauth/authorize",
    tokenUrl: "https://circleback.ai/api/oauth/access-token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://circleback.ai/api/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "circleback.ai meeting links, Circleback notes exports, or CIRCLEBACK_* environment variables",
    "Incident, customer-call, or product-feedback docs naming Circleback",
    "Operational runbooks that refer to meeting notes or transcripts in Circleback"
  ],
  helpText: "Search Circleback meeting notes, transcripts, action items, and calendar/email context."
});

// ../mcp-connector-provider/src/providers/clay.ts
var clay2 = defineMcpPreset({
  id: "clay",
  label: "Clay",
  iconKey: "clay",
  defaultServerUrl: "https://mcp.clay.earth/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "clay",
    callbackPathSegment: "clay",
    authorizationUrl: "https://mcp.clay.earth/authorize",
    tokenUrl: "https://mcp.clay.earth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.clay.earth/register",
      tokenEndpointAuthMethod: "client_secret_post"
    }
  },
  getAvailableScopes: async () => [
    { value: "openid", required: true },
    {
      value: "read",
      label: "Read access",
      description: "Read Clay contacts, interactions, notes, and workspace workflows."
    },
    {
      value: "write",
      label: "Write access",
      description: "Create and update Clay records and workspace workflows."
    }
  ],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Clay workflow URLs, clay.earth links, or CLAY_* environment variables",
    "Outbound enrichment, lead routing, or contact workflow docs naming Clay",
    "Code or scripts that sync contacts, notes, or workspace workflows with Clay"
  ],
  helpText: "Search Clay contacts, interactions, notes, and workspace workflows."
});

// ../mcp-connector-provider/src/providers/clerk.ts
var clerk2 = defineMcpPreset({
  id: "clerk",
  label: "Clerk",
  iconKey: "clerk",
  defaultServerUrl: "https://mcp.clerk.com/mcp",
  transport: "streamable-http",
  authMode: "none",
  availability: "enabled",
  capabilityOverrides: {
    readOnlyToolNames: ["list_clerk_sdk_snippets", "clerk_sdk_snippet"]
  },
  evidenceHints: [
    "@clerk/* SDK imports, CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY environment variables, or clerk.com URLs",
    "Authentication, session, or organization/user management logic built on Clerk",
    "README/docs naming Clerk for auth, sign-in flows, or user management"
  ],
  helpText: "Search Clerk's public documentation and SDK implementation snippets via Clerk's hosted MCP server."
});

// ../mcp-connector-provider/src/providers/cloudflare.ts
var cloudflare2 = defineMcpPreset({
  id: "cloudflare",
  label: "Cloudflare",
  iconKey: "cloudflare",
  defaultServerUrl: "https://mcp.cloudflare.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "cloudflare",
    callbackPathSegment: "cloudflare",
    authorizationUrl: "https://mcp.cloudflare.com/authorize",
    tokenUrl: "https://mcp.cloudflare.com/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.cloudflare.com/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [],
  scopesUserSelectable: false,
  regions: [
    {
      label: "Cloudflare API (all products, account-scoped)",
      serverUrl: "https://mcp.cloudflare.com/mcp"
    },
    {
      label: "Observability (Workers logs & analytics)",
      serverUrl: "https://observability.mcp.cloudflare.com/mcp",
      authorizationUrl: "https://observability.mcp.cloudflare.com/oauth/authorize",
      tokenUrl: "https://observability.mcp.cloudflare.com/token",
      dynamicClientRegistration: {
        registrationEndpoint: "https://observability.mcp.cloudflare.com/register",
        tokenEndpointAuthMethod: "none"
      }
    },
    {
      label: "Workers Bindings (D1, R2, KV, Workers)",
      serverUrl: "https://bindings.mcp.cloudflare.com/mcp",
      authorizationUrl: "https://bindings.mcp.cloudflare.com/oauth/authorize",
      tokenUrl: "https://bindings.mcp.cloudflare.com/token",
      dynamicClientRegistration: {
        registrationEndpoint: "https://bindings.mcp.cloudflare.com/register",
        tokenEndpointAuthMethod: "none"
      }
    },
    {
      label: "Workers Builds (CI/CD builds)",
      serverUrl: "https://builds.mcp.cloudflare.com/mcp",
      authorizationUrl: "https://builds.mcp.cloudflare.com/oauth/authorize",
      tokenUrl: "https://builds.mcp.cloudflare.com/token",
      dynamicClientRegistration: {
        registrationEndpoint: "https://builds.mcp.cloudflare.com/register",
        tokenEndpointAuthMethod: "none"
      }
    },
    {
      label: "Radar (Internet traffic insights)",
      serverUrl: "https://radar.mcp.cloudflare.com/mcp",
      authorizationUrl: "https://radar.mcp.cloudflare.com/oauth/authorize",
      tokenUrl: "https://radar.mcp.cloudflare.com/token",
      dynamicClientRegistration: {
        registrationEndpoint: "https://radar.mcp.cloudflare.com/register",
        tokenEndpointAuthMethod: "none"
      }
    }
  ],
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "wrangler.toml / wrangler.jsonc, @cloudflare/* packages, or CLOUDFLARE_* environment variables",
    "Cloudflare Workers, Pages, R2, D1, KV, or Durable Objects usage in code or config",
    "README/runbooks naming Cloudflare as the CDN, edge, or Workers platform"
  ],
  helpText: "Query Cloudflare Workers observability logs and analytics, bindings (D1, R2, KV), builds, and Radar insights."
});

// ../mcp-connector-provider/src/providers/cloudflare-api-token.ts
var cloudflareApiToken2 = defineMcpPreset({
  id: "cloudflare-api-token",
  label: "Cloudflare (API token)",
  iconKey: "cloudflare",
  defaultServerUrl: "https://mcp.cloudflare.com/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "wrangler.toml / wrangler.jsonc, @cloudflare/* packages, or CLOUDFLARE_* environment variables",
    "Cloudflare Workers, Pages, R2, D1, KV, or Durable Objects usage in code or config",
    "README/runbooks naming Cloudflare as the CDN, edge, or Workers platform"
  ],
  helpText: "Query the Cloudflare API MCP server (Workers, DNS, zones, and more) using a Cloudflare API token instead of OAuth.",
  setupGroups: [
    {
      id: "api-token",
      title: "Create a Cloudflare API token",
      description: "Mint an API token scoped to exactly the products and permissions Sazabi should access.",
      imageKeys: ["mcp.cloudflare-api-token.create-token"],
      body: "In the Cloudflare dashboard, go to **My Profile > API Tokens > Create Token**. Use a template or **Create Custom Token**, grant the permissions you want the agent to use (for example Workers Observability, DNS, or Account read), then copy the generated `cfut_...` token. Tokens with **Client IP Address Filtering** enabled are not supported by the hosted MCP server.",
      fieldKeys: ["apiToken"]
    }
  ],
  validateCredentials: validateCloudflareCredentials,
  normalizeHeaders: normalizeCloudflareHeaders
});

// ../mcp-connector-provider/src/providers/composio.ts
var composio = defineMcpPreset({
  id: "composio",
  label: "Composio",
  iconKey: "composio",
  defaultServerUrl: "https://connect.composio.dev/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Composio MCP, COMPOSIO_API_KEY, or Composio SDK usage",
    "connect.composio.dev/mcp in MCP client configuration",
    "README/docs naming Composio integrations, toolkits, or connected apps"
  ],
  helpText: "Connect to Composio's hosted MCP server and use tools from your configured toolkit with a Composio API key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the Composio API key Sazabi will send to Composio's hosted MCP endpoint.",
      body: "Create or copy an API key from the [Composio dashboard](https://app.composio.dev/settings) and paste it below. Sazabi stores it securely and sends it as the `x-consumer-api-key` header to Composio's Connect MCP endpoint.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateComposioCredentials,
  normalizeHeaders: normalizeComposioHeaders
});

// ../mcp-connector-provider/src/providers/context-dev.ts
var contextDev2 = defineMcpPreset({
  id: "context-dev",
  label: "Context.dev",
  iconKey: "context-dev",
  defaultServerUrl: "https://context-dev.stlmcp.com",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Context.dev SDK usage (context.dev on npm/PyPI/RubyGems), CONTEXT_DEV_API_KEY environment variables, or ctxt_secret_ API keys",
    "context.dev-mcp usage or a context-dev.stlmcp.com server URL in MCP client config",
    "README/docs naming Context.dev for brand intelligence, web scraping/crawling, or website change monitors"
  ],
  helpText: "Resolve brand data, scrape and crawl websites into LLM-ready Markdown, extract structured data, and manage website-change monitors with Context.dev's hosted MCP server using your Context.dev API key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the Context.dev API key Sazabi will send to Context.dev's hosted MCP endpoint.",
      body: "Create or copy an API key (`ctxt_secret_...`) from your [Context.dev dashboard](https://context.dev), then paste it below. Sazabi stores it securely and sends it as the `x-context-dev-api-key` header to Context.dev's MCP endpoint.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateContextDevCredentials,
  normalizeHeaders: normalizeContextDevHeaders,
  skill: "context-dev",
  setupSkill: "context-dev-setup"
});

// ../mcp-connector-provider/src/providers/custom.ts
var custom2 = defineMcpPreset({
  id: "custom",
  label: "Custom",
  iconKey: "plug",
  defaultServerUrl: null,
  transport: "streamable-http",
  authMode: "headers",
  availability: "custom-only",
  capabilityOverrides: {
    allowWriteTools: true
  },
  helpText: "Connect any MCP server."
});

// ../mcp-connector-provider/src/providers/datadog.ts
var datadog2 = defineMcpPreset({
  id: "datadog",
  label: "Datadog",
  iconKey: "datadog",
  defaultServerUrl: "https://mcp.datadoghq.com/api/unstable/mcp-server/mcp?toolsets=core",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Datadog config, DD_* environment variables, or @datadog packages",
    "datadog-agent, dd-trace, monitors, dashboards, or incident docs",
    "README/docs naming Datadog for logs, metrics, traces, APM, or incidents"
  ],
  helpText: "Browse Datadog metrics, logs, traces, and incidents using your Datadog site URL, API key, and Application Key.",
  setupGroups: [
    {
      id: "site",
      title: "Find your Datadog site",
      description: "Use the Datadog site URL for the region where your account lives.",
      body: "Copy the Datadog site URL from the top of your browser, such as `https://app.datadoghq.com` or `https://us3.datadoghq.com`. Sazabi uses this to build the matching hosted MCP endpoint.",
      fieldKeys: ["siteUrl"]
    },
    {
      id: "keys",
      title: "Create API credentials",
      description: "Create or copy the two Datadog keys Sazabi needs for hosted MCP.",
      imageKeys: [
        "mcp.datadog.api-keys-settings",
        "mcp.datadog.application-keys-settings"
      ],
      body: "In Datadog, go to **Organization Settings > Access > API Keys** to create or copy your API key. Then go to **Organization Settings > Access > Application Keys** to create or copy your Application Key.",
      fieldKeys: ["apiKey", "applicationKey"]
    }
  ],
  validateCredentials: validateDatadogCredentials,
  normalizeHeaders: normalizeDatadogHeaders
});

// ../mcp-connector-provider/src/providers/deepwiki.ts
var deepwiki2 = defineMcpPreset({
  id: "deepwiki",
  label: "DeepWiki",
  iconKey: "deepwiki",
  defaultServerUrl: "https://mcp.deepwiki.com/mcp",
  transport: "streamable-http",
  authMode: "none",
  availability: "enabled",
  capabilityOverrides: {
    readOnlyToolNames: [
      "read_wiki_structure",
      "read_wiki_contents",
      "ask_question"
    ]
  },
  evidenceHints: [
    "Questions about how a public GitHub repository or open-source dependency works",
    "deepwiki.com URLs or references to DeepWiki-generated documentation",
    "Investigations needing up-to-date docs/architecture for a third-party OSS project"
  ],
  helpText: "Query public GitHub repository documentation and ask questions about open-source code via DeepWiki's hosted MCP server."
});

// ../mcp-connector-provider/src/providers/elastic-cloud.ts
var elasticCloud2 = defineMcpPreset({
  id: "elastic-cloud",
  label: "Elastic Cloud",
  iconKey: "elastic-cloud",
  defaultServerUrl: null,
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Elasticsearch, Kibana, Elastic Agent, Beats, or Logstash config",
    "ELASTIC_* environment variables or elasticsearch client packages",
    "README/docs naming Elastic Cloud, Elasticsearch, or Kibana"
  ],
  helpText: "Search Elasticsearch indices and query Elastic Agent Builder tools using your Kibana MCP endpoint and an Elastic API key.",
  setupGroups: [
    {
      id: "deployment",
      title: "Open Kibana",
      description: "Find the Kibana URL for the Elastic deployment you want to connect.",
      body: "Go to [Elastic Cloud deployments](https://cloud.elastic.co/deployments), open the deployment you want to connect, then open Kibana and copy the Kibana base URL from the browser. If your Kibana URL contains `/s/<space>/`, keep that space value for the connect step.",
      fieldKeys: ["kibanaUrl", "kibanaSpace"]
    },
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create the Elastic API key that the hosted MCP server will use.",
      body: "In Kibana, create an API key with the Agent Builder and index read privileges required by Elastic's MCP server, then copy the generated key.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateElasticCloudCredentials,
  normalizeHeaders: normalizeElasticCloudHeaders
});

// ../mcp-connector-provider/src/providers/exa.ts
var exa2 = defineMcpPreset({
  id: "exa",
  label: "Exa",
  iconKey: "exa",
  defaultServerUrl: "https://mcp.exa.ai/mcp?tools=web_search_exa,web_fetch_exa,web_search_advanced_exa,agent_tools",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Exa search, EXA_API_KEY environment variables, or the exa-js / exa-py SDK",
    "exa-mcp-server usage or a mcp.exa.ai server URL in MCP client config",
    "README/docs naming Exa for web search, crawling, or research"
  ],
  helpText: "Search the web, research companies, crawl pages, and run deep research with Exa's hosted MCP server using your Exa API key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the Exa API key Sazabi will send to Exa's hosted MCP endpoint.",
      body: "Create or copy an API key from the [Exa dashboard](https://dashboard.exa.ai/api-keys), then paste it below. Sazabi stores it securely and sends it as the `x-api-key` header to Exa's MCP endpoint.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateExaCredentials,
  normalizeHeaders: normalizeExaHeaders,
  skill: "exa",
  setupSkill: "exa-setup"
});

// ../mcp-connector-provider/src/providers/gcp.ts
var gcp2 = defineMcpPreset({
  id: "gcp",
  label: "Google Cloud (GCP)",
  iconKey: "gcp",
  defaultServerUrl: "https://logging.googleapis.com/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "GOOGLE_APPLICATION_CREDENTIALS, GCLOUD_PROJECT, or GOOGLE_CLOUD_PROJECT environment variables",
    "gcloud config, app.yaml, cloudbuild.yaml, or @google-cloud/* packages",
    "README/docs naming Google Cloud, GCP, Cloud Logging, Cloud Monitoring, BigQuery, Cloud Run, or GKE"
  ],
  helpText: "Query Google Cloud (Cloud Logging, Monitoring, BigQuery, and more) using a Google OAuth 2.0 Bearer access token.",
  setupGroups: [
    {
      id: "server-url",
      title: "Choose the Google Cloud MCP endpoint",
      description: "Google exposes a separate remote MCP server per product at https://SERVICE.googleapis.com/mcp.",
      body: "Sazabi defaults to Cloud Logging (`https://logging.googleapis.com/mcp`). To use a different product, replace the server URL with its endpoint, such as `https://monitoring.googleapis.com/mcp` (Cloud Monitoring) or `https://bigquery.googleapis.com/mcp` (BigQuery). See the [supported products list](https://docs.cloud.google.com/mcp/supported-products)."
    },
    {
      id: "access-token",
      title: "Create a Google OAuth 2.0 access token",
      description: "Generate a Google access token scoped by IAM to the resources Sazabi should read.",
      body: "The hosted servers authenticate with a Google OAuth 2.0 Bearer access token. For a non-interactive token, install the [gcloud CLI](https://docs.cloud.google.com/mcp/authenticate-mcp), configure Application Default Credentials (a user login, service-account key, or impersonation), then run `gcloud auth application-default print-access-token` and copy the token. Paste the raw token into Sazabi — Sazabi adds the `Bearer ` prefix and sends it in the `Authorization` header. Google access tokens are short-lived, so refresh the token when it expires.",
      fieldKeys: ["accessToken"]
    }
  ],
  validateCredentials: validateGcpCredentials,
  normalizeHeaders: normalizeGcpHeaders
});

// ../mcp-connector-provider/src/providers/google-drive.ts
var googleDrive2 = defineMcpPreset({
  id: "google-drive",
  label: "Google Drive",
  iconKey: "google-drive",
  defaultServerUrl: "https://drivemcp.googleapis.com/mcp/v1",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "google-drive",
    callbackPathSegment: "google-drive",
    authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth",
    tokenUrl: "https://oauth2.googleapis.com/token",
    authorizationUrlParams: {
      access_type: "offline",
      prompt: "consent"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    {
      value: "https://www.googleapis.com/auth/drive.readonly",
      label: "Drive read",
      description: "Read files and metadata in the user's Google Drive through the hosted MCP server."
    }
  ],
  setupGroups: [
    {
      id: "google-cloud-oauth-client",
      title: "Create an OAuth client in Google Cloud",
      description: "The Google Drive MCP server does not support automatic client registration. An admin must create an OAuth client in a Google Cloud project and provide its credentials to Sazabi.",
      body: [
        "1. In the Google Cloud console, open **APIs & Services → OAuth consent screen** and configure the consent screen with the Drive scopes.",
        "2. Under **APIs & Services → Credentials**, create an **OAuth client ID** of type **Web application**.",
        "3. Add the Sazabi Google Drive MCP callback URL shown on this page as an **Authorized redirect URI**.",
        "4. Enable both the **Google Drive API** and the **Google Drive MCP API** (`drivemcp.googleapis.com`) for the project. Both are required for the hosted MCP server to be reachable.",
        "5. Provide the generated **Client ID** and **Client Secret** to your Sazabi deployment configuration."
      ].join(`
`)
    }
  ],
  evidenceHints: [
    "drive.google.com / docs.google.com links, or Google Drive file IDs in runbooks",
    "googleapis / google-auth-library packages, or GOOGLE_* / GDRIVE_* environment variables",
    "README/runbooks naming Google Drive as a document or asset store"
  ],
  helpText: "Search and read files and metadata in a Google Drive through Google's hosted MCP server."
});

// ../mcp-connector-provider/src/providers/grafana.ts
var grafana2 = defineMcpPreset({
  id: "grafana",
  label: "Grafana Cloud",
  iconKey: "grafana",
  defaultServerUrl: "https://mcp.grafana.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "grafana",
    callbackPathSegment: "grafana",
    authorizationUrl: "https://mcp.grafana.com/mcp/oauth/authorize",
    tokenUrl: "https://mcp.grafana.com/mcp/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.grafana.com/mcp/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    {
      value: "grafana:read",
      label: "Read",
      description: "Read Grafana dashboards, panels, metrics, logs, traces, alerts, and incidents."
    },
    {
      value: "grafana:write",
      label: "Write",
      description: "Create and modify Grafana resources. Write tools require explicit approval per your organization's tool policy."
    }
  ],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "grafana.net / grafana.com links, Grafana dashboards, or GRAFANA_* environment variables",
    "Prometheus, Loki, Tempo, or Mimir data sources wired into Grafana",
    "README/runbooks naming Grafana for dashboards, metrics, logs, traces, or alerts"
  ],
  helpText: "Browse Grafana dashboards, metrics, logs, traces, and alerts across your Grafana Cloud stack."
});

// ../mcp-connector-provider/src/providers/granola.ts
var granola2 = defineMcpPreset({
  id: "granola",
  label: "Granola",
  iconKey: "granola",
  defaultServerUrl: "https://mcp.granola.ai/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "granola",
    callbackPathSegment: "granola",
    authorizationUrl: "https://mcp-auth.granola.ai/oauth2/authorize",
    tokenUrl: "https://mcp-auth.granola.ai/oauth2/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp-auth.granola.ai/oauth2/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "granola.ai meeting links, Granola notes exports, or GRANOLA_* environment variables",
    "Incident, customer-call, or product-feedback docs naming Granola",
    "Operational runbooks that refer to meeting notes or transcripts in Granola"
  ],
  helpText: "Search and browse Granola meeting notes, transcripts, and folders."
});

// ../mcp-connector-provider/src/providers/happenstance.ts
var happenstance2 = defineMcpPreset({
  id: "happenstance",
  label: "Happenstance",
  iconKey: "happenstance",
  defaultServerUrl: "https://happenstance.ai/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "happenstance",
    callbackPathSegment: "happenstance",
    authorizationUrl: "https://happenstance.ai/oauth/authorize",
    tokenUrl: "https://clerk.happenstance.ai/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://clerk.happenstance.ai/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    {
      value: "profile",
      label: "Profile",
      description: "Read your Happenstance profile."
    },
    {
      value: "email",
      label: "Email",
      description: "Read the email associated with your Happenstance account."
    },
    {
      value: "offline_access",
      label: "Offline access",
      description: "Keep the connection alive by refreshing access without re-authentication."
    }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "happenstance.ai links or references to a Happenstance network/graph",
    "HAPPENSTANCE_* environment variables or scripts calling Happenstance APIs",
    "Docs naming Happenstance as the people/relationship search tool"
  ],
  helpText: "Search your Happenstance network to find and get introduced to people."
});

// ../mcp-connector-provider/src/providers/honeycomb.ts
var honeycomb2 = defineMcpPreset({
  id: "honeycomb",
  label: "Honeycomb",
  iconKey: "honeycomb",
  defaultServerUrl: "https://mcp.honeycomb.io/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "honeycomb",
    callbackPathSegment: "honeycomb",
    authorizationUrl: "https://ui.honeycomb.io/oauth/authorize",
    tokenUrl: "https://ui.honeycomb.io/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://ui.honeycomb.io/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    {
      value: "mcp:read",
      label: "Read",
      description: "Query Honeycomb environments, datasets, columns, boards, triggers, SLOs, and run queries."
    },
    {
      value: "mcp:write",
      label: "Write",
      description: "Create and update Honeycomb boards, triggers, and other resources."
    }
  ],
  scopesUserSelectable: false,
  regions: [
    {
      label: "United States (US)",
      serverUrl: "https://mcp.honeycomb.io/mcp"
    },
    {
      label: "Europe (EU)",
      serverUrl: "https://mcp.eu1.honeycomb.io/mcp",
      authorizationUrl: "https://ui.eu1.honeycomb.io/oauth/authorize",
      tokenUrl: "https://ui.eu1.honeycomb.io/oauth/token",
      dynamicClientRegistration: {
        registrationEndpoint: "https://ui.eu1.honeycomb.io/oauth/register",
        tokenEndpointAuthMethod: "none"
      }
    }
  ],
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "honeycomb.io URLs, HONEYCOMB_API_KEY / HONEYCOMB_DATASET environment variables, or honeycomb:// dataset URIs",
    "libhoney, @honeycombio packages, or OpenTelemetry exporters pointed at api.honeycomb.io / api.eu1.honeycomb.io",
    "README/runbooks naming Honeycomb as the observability or tracing provider"
  ],
  helpText: "Query Honeycomb environments, datasets, columns, boards, triggers, and run queries."
});

// ../mcp-connector-provider/src/providers/incident-io.ts
var incidentIo2 = defineMcpPreset({
  id: "incident-io",
  label: "incident.io",
  iconKey: "incident-io",
  defaultServerUrl: "https://mcp.incident.io/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "incident-io",
    callbackPathSegment: "incident-io",
    authorizationUrl: "https://app.incident.io/auth/plugin/authorize",
    tokenUrl: "https://app.incident.io/auth/plugin/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.incident.io/mcp/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "incident.io alert-source URLs, escalation docs, or incident IDs",
    "INCIDENT_IO_* environment variables or webhooks into incident.io",
    "README/runbooks naming incident.io for incidents, alerts, or on-call"
  ],
  helpText: "Browse incidents, alerts, and on-call.",
  skill: "incident-io",
  setupSkill: "incident-io-setup"
});

// ../mcp-connector-provider/src/providers/intercom.ts
var intercom2 = defineMcpPreset({
  id: "intercom",
  label: "Intercom",
  iconKey: "intercom",
  defaultServerUrl: "https://mcp.intercom.com/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Intercom config, INTERCOM_* environment variables, or intercom-client packages",
    "Support inbox, conversations, help center, or customer messaging docs naming Intercom",
    "README/docs naming Intercom for support threads or customer conversations"
  ],
  helpText: "Read Intercom support conversations, contacts, and help center content using an Intercom API access token. US-hosted Intercom workspaces only.",
  setupGroups: [
    {
      id: "developer-app",
      title: "Open Intercom developer settings",
      description: "Use an Intercom app with an access token for the workspace you want to connect.",
      body: "In Intercom, go to **Settings > Integrations > Developer Hub**, open (or create) an app for your workspace, and confirm it has the permissions you want agents to use. The hosted MCP server lives at `https://mcp.intercom.com/mcp` and currently supports US-hosted Intercom workspaces only."
    },
    {
      id: "access-token",
      title: "Copy your access token",
      description: "Copy the Intercom API access token the hosted MCP server will use.",
      body: "From your Intercom app's **Authentication** section, copy the access token. Paste the raw token into Sazabi — Sazabi adds the `Bearer ` prefix and sends it in the `Authorization` header.",
      fieldKeys: ["accessToken"]
    }
  ],
  validateCredentials: validateIntercomCredentials,
  normalizeHeaders: normalizeIntercomHeaders
});

// ../mcp-connector-provider/src/providers/langfuse.ts
var langfuse2 = defineMcpPreset({
  id: "langfuse",
  label: "Langfuse",
  iconKey: "langfuse",
  defaultServerUrl: "https://us.cloud.langfuse.com/api/public/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  regions: [
    {
      label: "United States (US)",
      serverUrl: "https://us.cloud.langfuse.com/api/public/mcp"
    },
    {
      label: "Europe (EU)",
      serverUrl: "https://cloud.langfuse.com/api/public/mcp"
    },
    {
      label: "Asia Pacific (JP)",
      serverUrl: "https://jp.cloud.langfuse.com/api/public/mcp"
    }
  ],
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Langfuse SDK usage (langfuse, langfuse-langchain) or @langfuse packages",
    "LANGFUSE_PUBLIC_KEY / LANGFUSE_SECRET_KEY / LANGFUSE_HOST environment variables",
    "README/docs naming Langfuse as the LLM tracing, evaluation, or observability provider"
  ],
  helpText: "Query Langfuse traces, observations, metrics, scores, comments, and prompts using project API keys.",
  setupGroups: [
    {
      id: "region",
      title: "Pick your Langfuse Cloud region",
      description: "Select the Langfuse Cloud region that hosts your project (or use the custom connector for a self-hosted deployment).",
      body: "Langfuse Cloud is region-scoped: US (`https://us.cloud.langfuse.com`), EU (`https://cloud.langfuse.com`), or JP (`https://jp.cloud.langfuse.com`). Choose the region matching your Langfuse account; the hosted MCP server lives at `/api/public/mcp` on that host."
    },
    {
      id: "api-keys",
      title: "Create project API keys",
      description: "Generate the Langfuse project API key pair the hosted MCP server will use.",
      body: "In Langfuse, open **Project settings → API keys** and create a new key pair. Copy the Public key (`pk-lf-...`) and Secret key (`sk-lf-...`). Sazabi combines them into an HTTP Basic `Authorization` header (`Basic base64(publicKey:secretKey)`) and sends it to the MCP server. Paste the combined `Authorization` value into Sazabi.",
      fieldKeys: ["authorization"]
    }
  ],
  validateCredentials: validateLangfuseCredentials,
  normalizeHeaders: normalizeLangfuseHeaders
});

// ../mcp-connector-provider/src/providers/langsmith.ts
var langsmith2 = defineMcpPreset({
  id: "langsmith",
  label: "LangSmith",
  iconKey: "langsmith",
  defaultServerUrl: "https://api.smith.langchain.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "langsmith",
    callbackPathSegment: "langsmith",
    authorizationUrl: "https://api.smith.langchain.com/oauth/authorize",
    tokenUrl: "https://api.smith.langchain.com/oauth/token",
    resourceUrl: "https://api.smith.langchain.com/mcp",
    dynamicClientRegistration: {
      registrationEndpoint: "https://api.smith.langchain.com/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [],
  scopesUserSelectable: false,
  regions: [
    {
      label: "GCP United States (US)",
      serverUrl: "https://api.smith.langchain.com/mcp"
    },
    {
      label: "GCP Europe (EU)",
      serverUrl: "https://eu.api.smith.langchain.com/mcp",
      authorizationUrl: "https://eu.api.smith.langchain.com/oauth/authorize",
      tokenUrl: "https://eu.api.smith.langchain.com/oauth/token",
      resourceUrl: "https://eu.api.smith.langchain.com/mcp",
      dynamicClientRegistration: {
        registrationEndpoint: "https://eu.api.smith.langchain.com/oauth/register",
        tokenEndpointAuthMethod: "none"
      }
    },
    {
      label: "GCP Asia Pacific (APAC)",
      serverUrl: "https://apac.api.smith.langchain.com/mcp",
      authorizationUrl: "https://apac.api.smith.langchain.com/oauth/authorize",
      tokenUrl: "https://apac.api.smith.langchain.com/oauth/token",
      resourceUrl: "https://apac.api.smith.langchain.com/mcp",
      dynamicClientRegistration: {
        registrationEndpoint: "https://apac.api.smith.langchain.com/oauth/register",
        tokenEndpointAuthMethod: "none"
      }
    },
    {
      label: "AWS United States (US)",
      serverUrl: "https://aws.api.smith.langchain.com/mcp",
      authorizationUrl: "https://aws.api.smith.langchain.com/oauth/authorize",
      tokenUrl: "https://aws.api.smith.langchain.com/oauth/token",
      resourceUrl: "https://aws.api.smith.langchain.com/mcp",
      dynamicClientRegistration: {
        registrationEndpoint: "https://aws.api.smith.langchain.com/oauth/register",
        tokenEndpointAuthMethod: "none"
      }
    }
  ],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "LANGSMITH_* or LANGCHAIN_* environment variables, or langsmith SDK usage",
    "LangSmith tracing projects, runs, datasets, or evaluations",
    "README/docs naming LangSmith for LLM tracing, evals, or observability"
  ],
  helpText: "Query LangSmith tracing projects, runs, datasets, and evaluations to investigate LLM application behavior."
});

// ../mcp-connector-provider/src/providers/linear.ts
var linear2 = defineMcpPreset({
  id: "linear",
  label: "Linear",
  iconKey: "linear",
  defaultServerUrl: "https://mcp.linear.app/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "linear",
    callbackPathSegment: "linear",
    authorizationUrl: "https://mcp.linear.app/authorize",
    tokenUrl: "https://mcp.linear.app/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.linear.app/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    {
      value: "read",
      label: "Read",
      description: "Read Linear issues, projects, teams, comments, and related data."
    },
    {
      value: "write",
      label: "Write",
      description: "Create and update Linear issues, comments, and project data."
    }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  skill: "linear",
  setupSkill: "linear-setup",
  evidenceHints: [
    "linear.app URLs, Linear issue keys, or team/project IDs in docs",
    "LINEAR_* environment variables or scripts that call Linear APIs",
    "README/runbooks naming Linear as the issue tracker or planning system"
  ],
  helpText: "Browse and manage Linear issues and projects."
});

// ../mcp-connector-provider/src/providers/logfire.ts
var logfire2 = defineMcpPreset({
  id: "logfire",
  label: "Pydantic Logfire",
  iconKey: "logfire",
  defaultServerUrl: "https://logfire-us.pydantic.dev/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "logfire",
    callbackPathSegment: "logfire",
    authorizationUrl: "https://logfire-us.pydantic.dev/api/oauth/authorize",
    tokenUrl: "https://logfire-us.pydantic.dev/api/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://logfire-us.pydantic.dev/api/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    { value: "openid", required: true },
    { value: "organization:read_channel" },
    { value: "project:read" },
    { value: "project:read_alert" },
    { value: "project:read_dashboard" },
    { value: "project:read_variables" }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Pydantic Logfire config, LOGFIRE_* environment variables, or logfire SDK packages",
    "Python/Pydantic observability docs naming Logfire",
    "Alerts, dashboards, or traces hosted in Logfire"
  ],
  helpText: "Query Pydantic Logfire traces, metrics, and exceptions, and browse projects, alerts, dashboards, and schedules."
});

// ../mcp-connector-provider/src/providers/mercury.ts
var mercury2 = defineMcpPreset({
  id: "mercury",
  label: "Mercury",
  iconKey: "mercury",
  defaultServerUrl: "https://mcp.mercury.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "mercury",
    callbackPathSegment: "mercury",
    authorizationUrl: "https://mcp.mercury.com/authorize",
    tokenUrl: "https://mcp.mercury.com/token",
    resourceUrl: "https://mcp.mercury.com/mcp",
    omitScopeFromAuthorizationUrl: true,
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.mercury.com/register",
      tokenEndpointAuthMethod: "client_secret_basic",
      includeScopesInRegistration: true
    }
  },
  getAvailableScopes: async () => [
    {
      value: "read",
      label: "Read access",
      description: "Read Mercury accounts, cards, recipients, transactions, treasury, and organization data."
    }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: false
  },
  skill: "mercury",
  setupSkill: "mercury-setup",
  evidenceHints: [
    "Mercury dashboard links, mercury.com references, or Mercury API usage",
    "MERCURY_* environment variables or docs mentioning Mercury banking",
    "Treasury, card, account, recipient, or transaction workflows backed by Mercury"
  ],
  helpText: "Search Mercury banking data including accounts, cards, recipients, transactions, treasury, and organization records."
});

// ../mcp-connector-provider/src/providers/neon.ts
var neon2 = defineMcpPreset({
  id: "neon",
  label: "Neon",
  iconKey: "neon",
  defaultServerUrl: "https://mcp.neon.tech/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "neon",
    callbackPathSegment: "neon",
    authorizationUrl: "https://mcp.neon.tech/api/authorize",
    tokenUrl: "https://mcp.neon.tech/api/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.neon.tech/api/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    {
      value: "read",
      label: "Read",
      description: "Read Neon projects, branches, databases, and run queries."
    },
    {
      value: "write",
      label: "Write",
      description: "Create and modify Neon projects, branches, and databases."
    },
    {
      value: "*",
      label: "Full access",
      description: "All access - read and manage every Neon resource the connected account can reach."
    }
  ],
  getUrlConfiguration: async () => ({
    docsUrl: "https://neon.com/docs/ai/neon-mcp-server",
    instructions: "Start with https://mcp.neon.tech/mcp. To narrow access, append query params such as `?readonly=true`, `&projectId=<id>`, and/or `&category=<groups>`, then copy the resulting Server URL.",
    defaultServerUrl: "https://mcp.neon.tech/mcp",
    imageKeys: [
      "mcp.neon.projects-console",
      "mcp.neon.project-settings-details"
    ],
    optional: true
  }),
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Neon connection strings, neon.tech hosts, or @neondatabase/serverless packages",
    "DATABASE_URL/POSTGRES_URL values documented as Neon",
    "README/docs naming Neon as the Postgres provider"
  ],
  helpText: "Manage Neon projects, branches, databases, and run SQL queries."
});

// ../mcp-connector-provider/src/providers/notion.ts
var notion = defineMcpPreset({
  id: "notion",
  label: "Notion",
  iconKey: "notion",
  defaultServerUrl: "https://mcp.notion.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "notion",
    callbackPathSegment: "notion",
    authorizationUrl: "https://mcp.notion.com/authorize",
    tokenUrl: "https://mcp.notion.com/token",
    resourceUrl: "https://mcp.notion.com/mcp",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.notion.com/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    {
      value: "default",
      label: "Default",
      description: "Access Notion pages, databases, and workspace content via MCP."
    }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  skill: "notion",
  setupSkill: "notion-setup",
  evidenceHints: [
    "notion.so URLs, Notion page IDs, or database IDs in docs",
    "NOTION_* environment variables or scripts that call Notion APIs",
    "README/runbooks naming Notion as the wiki or knowledge base"
  ],
  helpText: "Browse and manage Notion pages, databases, and workspace content."
});

// ../mcp-connector-provider/src/providers/onepassword.ts
var onepassword = defineMcpPreset({
  id: "1password",
  label: "1Password",
  iconKey: "onepassword",
  defaultServerUrl: "https://developer.1password.com/get-started/secure-ai-access",
  transport: "streamable-http",
  authMode: "none",
  availability: "disabled",
  getUrlConfiguration: async () => null,
  evidenceHints: [
    "1Password service-account tokens (ops_...), op CLI usage, or OP_SERVICE_ACCOUNT_TOKEN",
    "1password.com / *.1password.com references, or op:// secret references",
    "README/docs naming 1Password as the secrets manager or vault"
  ],
  helpText: "Access 1Password via its documented secure AI access options. A general-purpose hosted MCP server is not available today; use the 1Password CLI (op) sandbox preset instead."
});

// ../mcp-connector-provider/src/providers/paper.ts
var paper2 = defineMcpPreset({
  id: "paper",
  label: "Paper MCP",
  iconKey: "paper",
  defaultServerUrl: "http://127.0.0.1:29979/mcp",
  transport: "streamable-http",
  authMode: "none",
  availability: "disabled",
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "paper.design URLs, Paper Desktop app references, or PAPER_* environment variables",
    "Design files, component libraries, or design-system docs naming Paper",
    "HTML-to-PDF slide or presentation workflows that reference Paper"
  ],
  helpText: "Read and write Paper design files, including nodes, selections, text content, and design-system elements."
});

// ../mcp-connector-provider/src/providers/plain.ts
var plain2 = defineMcpPreset({
  id: "plain",
  label: "Plain",
  iconKey: "plain",
  defaultServerUrl: "https://mcp.plain.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "plain",
    callbackPathSegment: "plain",
    authorizationUrl: "https://signin.auth.plain.com/oauth2/authorize",
    tokenUrl: "https://signin.auth.plain.com/oauth2/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://signin.auth.plain.com/oauth2/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    { value: "openid", required: true },
    { value: "offline_access", required: true }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "plain.com links, Plain customer/thread IDs, or PLAIN_* environment variables",
    "Support inbox, customer thread, or tenant docs naming Plain",
    "Code or scripts syncing customers, tenants, or support threads with Plain"
  ],
  helpText: "Search and manage Plain support threads, customers, and tenants.",
  skill: "plain",
  setupSkill: "plain-setup"
});

// ../mcp-connector-provider/src/providers/planetscale.ts
var planetscale2 = defineMcpPreset({
  id: "planetscale",
  label: "PlanetScale",
  iconKey: "planetscale",
  defaultServerUrl: "https://mcp.pscale.dev/mcp/planetscale",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "planetscale",
    callbackPathSegment: "planetscale",
    authorizationUrl: "https://app.planetscale.com/oauth/authorize",
    tokenUrl: "https://auth.planetscale.com/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://auth.planetscale.com/oauth/registration",
      tokenEndpointAuthMethod: "client_secret_basic"
    }
  },
  getAvailableScopes: async () => [
    { value: "read_databases" },
    { value: "read_user" },
    { value: "read_organization" },
    { value: "write_databases" },
    { value: "write_organization" }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "PlanetScale connection strings, pscale CLI config, or planetscale.com links",
    "PLANETSCALE_* or DATABASE_URL values documented as PlanetScale",
    "README/docs naming PlanetScale for MySQL, branching, or schema changes"
  ],
  helpText: "Query PlanetScale databases, inspect schema, and browse Insights data.",
  skill: "planetscale",
  setupSkill: "planetscale-setup"
});

// ../mcp-connector-provider/src/providers/posthog.ts
var posthog2 = defineMcpPreset({
  id: "posthog",
  label: "PostHog",
  iconKey: "posthog",
  defaultServerUrl: "https://mcp.posthog.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "posthog",
    callbackPathSegment: "posthog",
    authorizationUrl: "https://oauth.posthog.com/oauth/authorize/",
    tokenUrl: "https://oauth.posthog.com/oauth/token/",
    dynamicClientRegistration: {
      registrationEndpoint: "https://oauth.posthog.com/oauth/register/",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    { value: "query:read" },
    { value: "insight:read" },
    { value: "insight:write" },
    { value: "feature_flag:read" },
    { value: "feature_flag:write" },
    { value: "experiment:read" },
    { value: "experiment:write" },
    { value: "dashboard:read" },
    { value: "dashboard:write" },
    { value: "event_definition:read" },
    { value: "event_definition:write" },
    { value: "person:read" },
    { value: "user:read" },
    { value: "user:write" },
    { value: "organization:read" },
    { value: "project:read" },
    { value: "project:write" },
    { value: "survey:read" },
    { value: "survey:write" },
    { value: "error_tracking:read" },
    { value: "logs:read" },
    { value: "tracing:read" }
  ],
  getUrlConfiguration: async () => ({
    docsUrl: "https://posthog.com/docs/model-context-protocol/faq",
    instructions: "Add ?features=<groups> or ?tools=<names> to limit which tools are exposed (e.g. https://mcp.posthog.com/mcp?features=flags,workspace), then copy the Server URL.",
    defaultServerUrl: "https://mcp.posthog.com/mcp",
    imageKeys: ["mcp.posthog.settings-page"],
    optional: true
  }),
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "posthog-js, posthog-node, POSTHOG_* or NEXT_PUBLIC_POSTHOG_* environment variables",
    "Feature flag, experiment, session replay, or product analytics code using PostHog",
    "README/docs naming PostHog for analytics, flags, experiments, logs, or tracing"
  ],
  helpText: "Query PostHog analytics, feature flags, and experiments.",
  skill: "posthog",
  setupSkill: "posthog-setup"
});

// ../mcp-connector-provider/src/providers/pylon.ts
var pylon2 = defineMcpPreset({
  id: "pylon",
  label: "Pylon",
  iconKey: "pylon",
  defaultServerUrl: "https://mcp.usepylon.com",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "pylon",
    callbackPathSegment: "pylon",
    authorizationUrl: "https://o.auth.usepylon.com/oauth2/authorize",
    tokenUrl: "https://o.auth.usepylon.com/oauth2/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://o.auth.usepylon.com/oauth2/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    { value: "openid", required: true },
    { value: "offline_access", required: true }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "usepylon.com links, Pylon issue/account IDs, or PYLON_* environment variables",
    "Customer support workflows or account runbooks naming Pylon",
    "Code or scripts syncing support issues, accounts, or contacts with Pylon"
  ],
  helpText: "Search and manage Pylon support issues, accounts, and contacts.",
  skill: "pylon",
  setupSkill: "pylon-setup"
});

// ../mcp-connector-provider/src/providers/railway.ts
var railway2 = defineMcpPreset({
  id: "railway",
  label: "Railway",
  iconKey: "railway",
  defaultServerUrl: "https://mcp.railway.com",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "railway",
    callbackPathSegment: "railway",
    authorizationUrl: "https://backboard.railway.com/oauth/auth",
    tokenUrl: "https://backboard.railway.com/oauth/token",
    resourceUrl: "https://mcp.railway.com",
    dynamicClientRegistration: {
      registrationEndpoint: "https://backboard.railway.com/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    { value: "openid", required: true },
    { value: "profile", required: true },
    { value: "email", required: true },
    { value: "offline_access", required: true },
    {
      value: "workspace:member",
      label: "Workspace access",
      description: "Read and manage Railway projects, services, deployments, variables, and logs in the workspaces the connected account belongs to."
    }
  ],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  skill: "railway",
  setupSkill: "railway-setup",
  evidenceHints: [
    "railway.app / railway.com links, RAILWAY_* environment variables, or a railway.json/railway.toml in the repo",
    "Deploy workflows or runbooks naming Railway as the hosting/PaaS provider",
    "Railway project/service/environment IDs referenced in docs or CI"
  ],
  helpText: "Manage Railway projects, services, deployments, variables, and logs."
});

// ../mcp-connector-provider/src/providers/render.ts
var render2 = defineMcpPreset({
  id: "render",
  label: "Render",
  iconKey: "render",
  defaultServerUrl: "https://mcp.render.com/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "render.com links, RENDER_* environment variables, or a render.yaml in the repo",
    "Deploy workflows or runbooks naming Render as the hosting/PaaS provider",
    "Render service/deploy IDs referenced in docs or CI"
  ],
  helpText: "Manage Render services, deploys, environment variables, logs, and metrics.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the Render API key Sazabi will send to Render's hosted MCP endpoint.",
      body: "Create a Render [API key](https://dashboard.render.com/settings/api-keys) in **Account Settings > API Keys**, then paste it below.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateRenderCredentials,
  normalizeHeaders: normalizeRenderHeaders
});

// ../mcp-connector-provider/src/providers/rentahuman.ts
var rentahuman2 = defineMcpPreset({
  id: "rentahuman",
  label: "RentAHuman",
  iconKey: "rentahuman",
  defaultServerUrl: "https://rentahuman.ai/api/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "rentahuman.ai, RENTAHUMAN_API_KEY environment variables, or RentAHuman API keys",
    "rentahuman-mcp usage or a rentahuman.ai/api/mcp server URL in MCP client config",
    "README/docs naming RentAHuman for hiring humans or human-in-the-loop work"
  ],
  helpText: "Hire and coordinate human workers for real-world tasks with RentAHuman's hosted MCP server using an API key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the RentAHuman API key Sazabi will send to its hosted MCP endpoint.",
      body: "Create or copy an API key from the [RentAHuman API keys page](https://rentahuman.ai/account/api-keys), then paste it below. Sazabi stores it securely and sends it as the `X-API-Key` header.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateRentahumanCredentials,
  normalizeHeaders: normalizeRentahumanHeaders,
  skill: "rentahuman",
  setupSkill: "rentahuman-setup"
});

// ../mcp-connector-provider/src/providers/resend.ts
var resend2 = defineMcpPreset({
  id: "resend",
  label: "Resend",
  iconKey: "resend",
  defaultServerUrl: "https://mcp.resend.com/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Resend email API usage, RESEND_API_KEY environment variables, or the resend SDK",
    "resend-mcp usage or a mcp.resend.com server URL in MCP client config",
    "README/docs naming Resend for transactional or marketing email"
  ],
  helpText: "Send transactional emails and manage domains, contacts, and audiences with Resend's hosted MCP server using your Resend API key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the Resend API key Sazabi will send to Resend's hosted MCP endpoint.",
      body: "Create or copy an API key from the [Resend dashboard](https://resend.com/api-keys), then paste it below. Sazabi stores it securely and sends it as the `Authorization: Bearer` token to Resend's MCP endpoint (`https://mcp.resend.com/mcp`).",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateResendCredentials,
  normalizeHeaders: normalizeResendHeaders,
  skill: "resend",
  setupSkill: "resend-setup"
});

// ../mcp-connector-provider/src/providers/respan.ts
var respan2 = defineMcpPreset({
  id: "respan",
  label: "Respan",
  iconKey: "respan",
  defaultServerUrl: "https://mcp.respan.ai/api/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Respan / Keywords AI observability usage, RESPAN_API_KEY environment variables, or the respan-ai / keywordsai SDK",
    "respan-mcp usage or a mcp.respan.ai server URL in MCP client config",
    "README/docs naming Respan or Keywords AI for LLM logs, traces, or prompt management"
  ],
  helpText: "Query LLM request logs, traces, prompts, and customer data from your Respan account using Respan's hosted MCP server and your Respan API key.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the Respan API key Sazabi will send to Respan's hosted MCP endpoint.",
      body: "Create or copy an API key from the [Respan dashboard](https://platform.respan.ai/platform/api/api-keys), then paste it below. Sazabi stores it securely and sends it as the `Authorization: Bearer` token to Respan's MCP endpoint (`https://mcp.respan.ai/api/mcp`).",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateRespanCredentials,
  normalizeHeaders: normalizeRespanHeaders,
  skill: "respan",
  setupSkill: "respan-setup"
});

// ../mcp-connector-provider/src/providers/salesforce.ts
var salesforce2 = defineMcpPreset({
  id: "salesforce",
  label: "Salesforce",
  iconKey: "salesforce",
  defaultServerUrl: "https://api.salesforce.com/platform/mcp/v1/platform/sobject-all",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "salesforce",
    callbackPathSegment: "salesforce",
    authorizationUrl: "https://login.salesforce.com/services/oauth2/authorize",
    tokenUrl: "https://login.salesforce.com/services/oauth2/token"
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    {
      value: "mcp_api",
      label: "MCP API access",
      description: "Access Salesforce data and metadata (sObjects, Apex invocable actions, Flows) through the hosted MCP server. Salesforce hosted MCP External Client Apps require the MCP-specific `mcp_api` scope."
    },
    {
      value: "refresh_token",
      label: "Offline access",
      description: "Refresh the access token without requiring the user to re-authenticate.",
      required: true
    }
  ],
  capabilityOverrides: {
    allowWriteTools: true
  },
  setupGroups: [
    {
      id: "external-client-app",
      title: "Register an External Client App in Salesforce",
      description: "Salesforce hosted MCP servers do not support automatic client registration. An admin must create an External Client App (ECA) in the org and enable it for the hosted MCP server.",
      body: [
        "1. In Salesforce Setup, open **App Manager** and create a new **External Client App**.",
        "2. Enable OAuth, add the **mcp_api** and **refresh_token (offline access)** scopes, and require PKCE.",
        "3. Set the callback URL to the Sazabi Salesforce MCP callback URL shown on this page.",
        "4. Enable the app for your hosted MCP server under **Setup → MCP Servers**.",
        "5. Provide the generated **Consumer Key (Client ID)** and **Consumer Secret (Client Secret)** to your Sazabi deployment configuration."
      ].join(`
`)
    }
  ],
  evidenceHints: [
    "force.com / my.salesforce.com URLs, SALESFORCE_* or SFDC_* environment variables, or sf/sfdx CLI usage",
    "jsforce, simple-salesforce, or @salesforce packages",
    "README/runbooks naming Salesforce as the CRM or system of record"
  ],
  helpText: "Query Salesforce data and metadata, and run Apex invocable actions and Flows exposed by a hosted MCP server."
});

// ../mcp-connector-provider/src/providers/sentry.ts
var sentry2 = defineMcpPreset({
  id: "sentry",
  label: "Sentry",
  iconKey: "sentry",
  defaultServerUrl: "https://mcp.sentry.dev/mcp",
  serverUrlPathSuffixMaxSegments: 2,
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "sentry",
    callbackPathSegment: "sentry",
    authorizationUrl: "https://mcp.sentry.dev/oauth/authorize",
    tokenUrl: "https://mcp.sentry.dev/oauth/token",
    useServerUrlAsResource: true,
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.sentry.dev/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    { value: "org:read" },
    { value: "project:write" },
    { value: "team:write" },
    { value: "event:write" }
  ],
  getUrlConfiguration: async () => ({
    docsUrl: "https://mcp.sentry.dev/",
    instructions: "Copy `https://mcp.sentry.dev/mcp` for broad access. To scope this connection to one organization or project, copy a path-scoped URL such as `https://mcp.sentry.dev/mcp/your-org` or `https://mcp.sentry.dev/mcp/your-org/your-project`.",
    defaultServerUrl: "https://mcp.sentry.dev/mcp",
    imageKeys: ["mcp.sentry.url-configuration-page"],
    optional: true
  }),
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "@sentry packages, sentry.properties, SENTRY_* environment variables, or sentry-cli usage",
    "Sentry.init calls, release/deploy automation, or Sentry alert docs",
    "README/docs naming Sentry as the error tracking provider"
  ],
  helpText: "Browse Sentry organizations, teams, projects, and events."
});

// ../mcp-connector-provider/src/providers/signoz.ts
var signoz2 = defineMcpPreset({
  id: "signoz",
  label: "SigNoz",
  iconKey: "signoz",
  defaultServerUrl: "https://mcp.us.signoz.cloud/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "SigNoz config, SIGNOZ_* environment variables, or signoz.io links",
    "OpenTelemetry Collector exporting to SigNoz, or a signoz docker-compose / self-hosted deployment",
    "README/docs naming SigNoz for metrics, logs, traces, alerts, or dashboards"
  ],
  helpText: "Query SigNoz metrics, logs, traces, alerts, and dashboards to investigate production issues.",
  setupGroups: [
    {
      id: "instance",
      title: "Find your SigNoz instance",
      description: "Point Sazabi at the SigNoz instance whose telemetry you want to query.",
      body: "For SigNoz Cloud, use the regional MCP endpoint for your account, such as `https://mcp.us.signoz.cloud/mcp` (replace the region as needed). For self-hosted SigNoz, use your instance's MCP endpoint and set the SigNoz base URL below so the server knows which instance to target.",
      fieldKeys: ["signozUrl"]
    },
    {
      id: "api-key",
      title: "Create an API key",
      description: "Create or copy the SigNoz API key Sazabi will send to SigNoz's MCP endpoint.",
      body: "In SigNoz, go to **Settings > API Keys** and create or copy an API key. Alert, dashboard, and notification-channel tools require an admin-level key. Paste it below.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateSignozCredentials,
  normalizeHeaders: normalizeSignozHeaders
});

// ../mcp-connector-provider/src/providers/stripe.ts
var stripe2 = defineMcpPreset({
  id: "stripe",
  label: "Stripe MCP",
  iconKey: "stripe",
  defaultServerUrl: "https://mcp.stripe.com",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "stripe",
    callbackPathSegment: "stripe",
    authorizationUrl: "https://access.stripe.com/mcp/oauth2/authorize",
    tokenUrl: "https://access.stripe.com/mcp/oauth2/token",
    resourceUrl: "https://mcp.stripe.com",
    dynamicClientRegistration: {
      registrationEndpoint: "https://access.stripe.com/mcp/oauth2/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  getAvailableScopes: async () => [
    {
      value: "mcp",
      label: "MCP access",
      description: "Access the Stripe MCP server tools for the connected account.",
      required: true
    }
  ],
  scopesUserSelectable: false,
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Stripe dashboard URLs, `sk_`/`rk_`/`pk_` API keys, or Stripe object IDs (cus_, pi_, ch_)",
    "STRIPE_* environment variables or code that imports the `stripe` SDK",
    "README/runbooks naming Stripe for billing, payments, or subscriptions"
  ],
  helpText: "Query and manage Stripe payments, customers, and billing."
});

// ../mcp-connector-provider/src/providers/supabase.ts
var supabase2 = defineMcpPreset({
  id: "supabase",
  label: "Supabase",
  iconKey: "supabase",
  defaultServerUrl: "https://mcp.supabase.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "supabase",
    callbackPathSegment: "supabase",
    authorizationUrl: "https://api.supabase.com/v1/oauth/authorize",
    tokenUrl: "https://api.supabase.com/v1/oauth/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://api.supabase.com/platform/oauth/apps/register",
      tokenEndpointAuthMethod: "client_secret_post"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    { value: "analytics:read" },
    { value: "auth:read" },
    { value: "auth:write" },
    { value: "database:read" },
    { value: "database:write" },
    { value: "domains:read" },
    { value: "domains:write" },
    { value: "edge_functions:read" },
    { value: "edge_functions:write" },
    { value: "environment:read" },
    { value: "environment:write" },
    { value: "organizations:read" },
    { value: "projects:read" },
    { value: "projects:write" },
    { value: "rest:read" },
    { value: "rest:write" },
    { value: "secrets:read" },
    { value: "secrets:write" },
    { value: "storage:read" }
  ],
  getUrlConfiguration: async () => ({
    docsUrl: "https://supabase.com/docs/guides/getting-started/mcp#step-2-configure-your-ai-tool",
    instructions: "Choose your project and options in the Supabase configuration panel, then copy the generated Server URL.",
    defaultServerUrl: "https://mcp.supabase.com/mcp",
    optional: true
  }),
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "supabase/ directory, supabase/config.toml, or @supabase packages",
    "SUPABASE_* or NEXT_PUBLIC_SUPABASE_* environment variables",
    "README/docs naming Supabase for Postgres, Auth, Storage, or Edge Functions"
  ],
  helpText: "Manage Supabase organizations, projects, databases, and run SQL.",
  skill: "supabase",
  setupSkill: "supabase-setup"
});

// ../mcp-connector-provider/src/providers/superhuman.ts
var superhuman2 = defineMcpPreset({
  id: "superhuman",
  label: "Superhuman",
  iconKey: "superhuman",
  defaultServerUrl: "https://mcp.mail.superhuman.com/mcp",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "enabled",
  oauth: {
    providerConfigKey: "superhuman",
    callbackPathSegment: "superhuman",
    authorizationUrl: "https://mcp.auth.mail.superhuman.com/oauth2/authorize",
    tokenUrl: "https://mcp.auth.mail.superhuman.com/oauth2/token",
    dynamicClientRegistration: {
      registrationEndpoint: "https://mcp.auth.mail.superhuman.com/oauth2/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    { value: "email", required: true },
    { value: "offline_access", required: true },
    { value: "openid", required: true },
    { value: "profile", required: true }
  ],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "Superhuman mail links, SUPERHUMAN_* environment variables, or support workflows naming Superhuman",
    "Customer communication runbooks that depend on email search or drafting",
    "Docs naming Superhuman Mail for sales, support, or founder-led customer comms"
  ],
  helpText: "Search, draft, send, and triage emails in Superhuman Mail."
});

// ../mcp-connector-provider/src/providers/the-context-company.ts
var theContextCompany2 = defineMcpPreset({
  id: "the-context-company",
  label: "The Context Company",
  iconKey: "the-context-company",
  defaultServerUrl: "https://api.thecontext.company/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: { allowWriteTools: false },
  evidenceHints: [
    "The Context Company, context company, or context observability references",
    "insight_search, get_agent_runs, or get_agent_sessions tool usage",
    "THE_CONTEXT_COMPANY_API_KEY or api.thecontext.company in MCP configuration"
  ],
  helpText: "Query agent insights, runs, and sessions through The Context Company's read-only hosted MCP server.",
  setupGroups: [
    {
      id: "api-key",
      title: "Create a read-only API key",
      description: "Create the API key The Context Company's hosted MCP server will use.",
      body: "Create a read-only API key in [The Context Company](https://docs.thecontext.company/access-data/mcp), then paste the raw key below. Sazabi sends it as `Authorization: Bearer <key>` to `https://api.thecontext.company/mcp`.",
      fieldKeys: ["apiKey"]
    }
  ],
  validateCredentials: validateContextCompanyCredentials,
  normalizeHeaders: normalizeContextCompanyHeaders,
  skill: "the-context-company",
  setupSkill: "the-context-company-setup"
});

// ../mcp-connector-provider/src/providers/vercel.ts
var vercel2 = defineMcpPreset({
  id: "vercel",
  label: "Vercel",
  iconKey: "vercel",
  defaultServerUrl: "https://mcp.vercel.com",
  transport: "streamable-http",
  authMode: "oauth",
  availability: "disabled",
  oauth: {
    providerConfigKey: "vercel",
    callbackPathSegment: "vercel",
    authorizationUrl: "https://vercel.com/oauth/authorize",
    tokenUrl: "https://vercel.com/api/login/oauth/token",
    resourceUrl: "https://mcp.vercel.com",
    dynamicClientRegistration: {
      registrationEndpoint: "https://vercel.com/api/login/oauth/register",
      tokenEndpointAuthMethod: "none"
    }
  },
  scopesUserSelectable: false,
  getAvailableScopes: async () => [
    { value: "openid", required: true },
    { value: "offline_access", required: true }
  ],
  getUrlConfiguration: async () => null,
  capabilityOverrides: {
    allowWriteTools: true
  },
  evidenceHints: [
    "vercel.com links, VERCEL_* environment variables, or a vercel.json in the repo",
    "Deploy workflows or runbooks naming Vercel as the frontend/hosting provider",
    "Vercel project/deployment IDs or preview URLs referenced in docs or CI"
  ],
  helpText: "Manage Vercel projects, deployments, and access Vercel platform documentation."
});

// ../mcp-connector-provider/src/providers/x.ts
var x2 = defineMcpPreset({
  id: "x",
  label: "X",
  iconKey: "x",
  defaultServerUrl: "https://api.x.com/mcp",
  transport: "streamable-http",
  authMode: "headers",
  availability: "enabled",
  capabilityOverrides: {
    readOnlyToolNames: [
      "search_news",
      "get_news",
      "get_trends_by_woeid",
      "get_posts_by_ids",
      "get_posts_counts_recent",
      "search_posts_all",
      "get_posts_by_id",
      "get_posts_liking_users",
      "get_posts_quoted_posts",
      "get_posts_reposted_by",
      "get_users_by_usernames",
      "get_users_by_username",
      "get_users_me",
      "search_users",
      "get_users_by_id",
      "get_users_bookmarks",
      "get_users_bookmark_folders",
      "get_users_bookmarks_by_folder_id",
      "get_users_mentions",
      "get_users_timeline",
      "get_users_posts"
    ]
  },
  evidenceHints: [
    "X (Twitter) API usage, X_BEARER_TOKEN, or TWITTER_* environment variables",
    "twitter-api-v2, tweepy, or other X/Twitter API client packages",
    "README/docs naming the X API, X Developer Platform, or tweet automation"
  ],
  helpText: "Search X posts and access real-time X data using an X API OAuth 2.0 Bearer token.",
  setupGroups: [
    {
      id: "developer-app",
      title: "Open the X Developer Portal",
      description: "Use an X developer project/app with access to the X API v2.",
      body: "Go to the [X Developer Portal](https://developer.x.com/en/portal/dashboard), open the project and app you want Sazabi to use, and confirm the app has access to the API tiers you need. The hosted MCP server lives at `https://api.x.com/mcp`."
    },
    {
      id: "bearer-token",
      title: "Create an OAuth 2.0 Bearer token",
      description: "Generate the OAuth 2.0 access token the hosted MCP server will use.",
      body: "In your app's **Keys and tokens**, generate an OAuth 2.0 access token and copy it. Paste the raw token into Sazabi — Sazabi adds the `Bearer ` prefix and sends it in the `Authorization` header.",
      fieldKeys: ["accessToken"]
    }
  ],
  validateCredentials: validateXCredentials,
  normalizeHeaders: normalizeXHeaders,
  skill: "x",
  setupSkill: "x-setup"
});

// ../mcp-connector-provider/src/providers/index.ts
var MCP_PROVIDERS = [
  supabase2,
  datadog2,
  deepwiki2,
  airbyte2,
  atlassian2,
  attio2,
  autumn2,
  aws2,
  axiom2,
  betterStack2,
  braintrust2,
  calendly2,
  cekura2,
  checkly2,
  clay2,
  clerk2,
  cloudflare2,
  cloudflareApiToken2,
  circleback2,
  composio,
  contextDev2,
  elasticCloud2,
  exa2,
  gcp2,
  googleDrive2,
  grafana2,
  granola2,
  happenstance2,
  honeycomb2,
  incidentIo2,
  intercom2,
  langfuse2,
  langsmith2,
  linear2,
  logfire2,
  mercury2,
  neon2,
  notion,
  onepassword,
  paper2,
  plain2,
  planetscale2,
  posthog2,
  pylon2,
  railway2,
  rentahuman2,
  render2,
  resend2,
  respan2,
  salesforce2,
  sentry2,
  signoz2,
  stripe2,
  superhuman2,
  theContextCompany2,
  vercel2,
  x2,
  custom2
];
var mcpProviderById = new Map(MCP_PROVIDERS.map((provider) => [provider.id, provider]));
// ../public-api-contracts/src/mcp-connectors.ts
import { z as z15 } from "zod";
var MCP_CONNECTOR_INSTALL_STATUS_VALUES = [
  "configured",
  "authorizing",
  "connected",
  "error"
];
var McpConnectorInstallStatusEnum = z15.enum(MCP_CONNECTOR_INSTALL_STATUS_VALUES);
var MCP_CONNECTOR_SOURCE_VALUES = ["preset", "custom"];
var McpConnectorSourceEnum = z15.enum(MCP_CONNECTOR_SOURCE_VALUES);
var MCP_CONNECTOR_TRANSPORT_VALUES = [
  "streamable-http",
  "sse"
];
var McpConnectorTransportEnum = z15.enum(MCP_CONNECTOR_TRANSPORT_VALUES);
var MCP_CONNECTOR_AUTH_MODE_VALUES = [
  "none",
  "headers",
  "oauth",
  "aws-sigv4"
];
var McpConnectorAuthModeEnum = z15.enum(MCP_CONNECTOR_AUTH_MODE_VALUES);
var McpConnectorSchema = z15.object({
  connectionId: z15.string().uuid().describe("Connection ID."),
  connectionKey: z15.string().describe("Stable key used to reference this connector in tool calls."),
  providerId: z15.string().describe('Provider identifier, e.g. "linear".'),
  displayName: z15.string().describe("Human-readable connector name."),
  source: McpConnectorSourceEnum.describe("Whether the connector is a built-in preset or a custom server."),
  installStatus: McpConnectorInstallStatusEnum.describe("Current connection lifecycle status."),
  authMode: McpConnectorAuthModeEnum.describe("Authentication mode."),
  transport: McpConnectorTransportEnum.describe("Transport protocol."),
  serverUrl: z15.string().describe("MCP server URL."),
  readOnly: z15.boolean().describe("Whether the connector is restricted to read-only tools."),
  management: McpConnectorManagementSchema.describe("Lifecycle owner and supported connector mutations."),
  enabledToolCount: z15.number().int().nonnegative().describe("Number of tools enabled and available for this connector."),
  connectedAt: z15.string().datetime().nullable().describe("When the connector last became connected, if ever."),
  createdAt: z15.string().datetime(),
  updatedAt: z15.string().datetime()
});
var McpConnectorToolSchema = z15.object({
  name: z15.string().describe("Tool name as invoked."),
  title: z15.string().describe("Human-readable tool title."),
  description: z15.string().describe("Tool description."),
  isReadOnly: z15.boolean().describe("Whether the tool is considered read-only."),
  enabled: z15.boolean().describe("Whether the tool is enabled and available given the connector config.")
});
var ListMcpConnectorsInputSchema = z15.object({
  projectId: z15.string().uuid().optional().describe("Project to list connectors for. Auto-filled from SDK context when omitted."),
  connectedOnly: z15.boolean().optional().describe("When true, only return connectors that are connected.")
});
var ListMcpConnectorsOutputSchema = z15.object({
  connectors: z15.array(McpConnectorSchema)
});
var listMcpConnectors = defineOperation({
  operationId: "mcpConnectors.list",
  description: "List configured MCP connectors within one project with provider, status, and enabled-tool count.",
  backend: "api",
  route: {
    method: "GET",
    path: "/mcp-connectors",
    tags: ["MCP Connectors"]
  },
  input: ListMcpConnectorsInputSchema,
  output: ListMcpConnectorsOutputSchema,
  pagination: "none",
  async: "sync"
});
var GetMcpConnectorInputSchema = z15.object({
  connectionId: z15.string().uuid().describe("Connection ID to fetch."),
  projectId: z15.string().uuid().optional().describe("Project the connector belongs to. Auto-filled from SDK context when omitted.")
});
var GetMcpConnectorOutputSchema = z15.object({
  connector: McpConnectorSchema
});
var getMcpConnector = defineOperation({
  operationId: "mcpConnectors.get",
  description: "Get one configured MCP connector by connection ID.",
  backend: "api",
  route: {
    method: "GET",
    path: "/mcp-connectors/{connectionId}",
    tags: ["MCP Connectors"]
  },
  input: GetMcpConnectorInputSchema,
  output: GetMcpConnectorOutputSchema,
  pagination: "none",
  async: "sync"
});
var GetMcpConnectorDetailsInputSchema = z15.object({
  connectionId: z15.string().uuid().describe("Connection ID to inspect."),
  projectId: z15.string().uuid().optional().describe("Project the connector belongs to. Auto-filled from SDK context when omitted.")
});
var GetMcpConnectorDetailsOutputSchema = z15.object({
  connector: McpConnectorSchema,
  tools: z15.array(McpConnectorToolSchema)
});
var getMcpConnectorDetails = defineOperation({
  operationId: "mcpConnectors.details",
  description: "Inspect one MCP connector's tool surface, including each tool's name, description, and read-only status.",
  backend: "api",
  route: {
    method: "GET",
    path: "/mcp-connectors/{connectionId}/details",
    tags: ["MCP Connectors"]
  },
  input: GetMcpConnectorDetailsInputSchema,
  output: GetMcpConnectorDetailsOutputSchema,
  pagination: "none",
  async: "sync"
});
var McpProviderInfoSchema = z15.object({
  providerId: z15.string().describe('Provider identifier, e.g. "linear".'),
  label: z15.string().describe("Human-readable provider name."),
  authMode: McpConnectorAuthModeEnum.describe("Authentication mode."),
  availability: z15.enum(MCP_PROVIDER_AVAILABILITY_VALUES).describe("Whether the provider is enabled or coming soon."),
  setupSkill: z15.string().nullable().describe("Markdown setup skill for AI agents. Null when no skill is available.")
});
var ListMcpProvidersInputSchema = z15.object({});
var ListMcpProvidersOutputSchema = z15.object({
  providers: z15.array(McpProviderInfoSchema)
});
var listMcpProviders2 = defineOperation({
  operationId: "mcpConnectors.listProviders",
  description: "List all supported MCP connector providers with their auth mode and setup skill.",
  backend: "api",
  route: {
    method: "GET",
    path: "/mcp-connectors/providers",
    tags: ["MCP Connectors"]
  },
  input: ListMcpProvidersInputSchema,
  output: ListMcpProvidersOutputSchema,
  pagination: "none",
  async: "sync"
});
var mcpConnectorsContract = {
  list: listMcpConnectors.contract,
  get: getMcpConnector.contract,
  details: getMcpConnectorDetails.contract,
  listProviders: listMcpProviders2.contract
};

// ../public-api-contracts/src/me.ts
import { z as z16 } from "zod";
var OrganizationMembershipRoleSchema = z16.enum(["admin", "member"]);
var AuthOrganizationSchema = z16.object({
  id: z16.string().min(1),
  name: z16.string(),
  slug: z16.string(),
  logo: z16.string().nullable().optional(),
  role: OrganizationMembershipRoleSchema
});
var AuthUserSchema = z16.object({
  id: z16.string().min(1),
  name: z16.string().nullable(),
  email: z16.string().email()
});
var UserMeSchema = z16.object({
  credentialType: z16.literal("user"),
  user: AuthUserSchema,
  activeOrganizationId: z16.string().min(1).nullable(),
  organizations: z16.array(AuthOrganizationSchema).describe("Organizations the user belongs to, including membership role.")
});
var SecretMeSchema = z16.object({
  credentialType: z16.literal("secret"),
  organization: z16.object({
    id: z16.string().min(1),
    name: z16.string(),
    slug: z16.string(),
    logo: z16.string().nullable().optional()
  }),
  keyName: z16.string()
});
var PartnerMeSchema = z16.object({
  credentialType: z16.literal("partner"),
  superorganization: z16.object({
    id: z16.string().uuid(),
    name: z16.string()
  })
});
var MeInputSchema = z16.object({});
var MeOutputSchema = z16.discriminatedUnion("credentialType", [
  UserMeSchema,
  SecretMeSchema,
  PartnerMeSchema
]);
var me = defineOperation({
  operationId: "me.get",
  description: "Return the identity and available context for the current credential.",
  backend: "api",
  route: {
    method: "GET",
    path: "/me",
    tags: ["Auth"]
  },
  input: MeInputSchema,
  output: MeOutputSchema,
  pagination: "none",
  async: "sync"
});
var meContract = me.contract;

// ../public-api-contracts/src/members.ts
import { z as z17 } from "zod";
var OrganizationMemberSchema = z17.object({
  membershipId: z17.string().min(1).describe("Organization membership record ID."),
  userId: z17.string().min(1).describe("User ID for the organization member."),
  name: z17.string().nullable().describe("Display name for the member, when available."),
  email: z17.string().email().describe("Email address for the member."),
  imageUrl: z17.string().nullable().describe("Profile image URL for the member, when available."),
  role: OrganizationMembershipRoleSchema.describe("Organization role."),
  createdAt: z17.string().datetime().describe("When the membership was created.")
});
var ListMembersInputSchema = z17.object({
  organizationId: z17.string().min(1).optional().describe("Organization to list members for. Auto-filled from CLI and SDK context when omitted.")
});
var ListMembersOutputSchema = z17.object({
  members: z17.array(OrganizationMemberSchema).describe("Members visible within the selected organization.")
});
var UpdateMemberRoleInputSchema = z17.object({
  organizationId: z17.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted."),
  userId: z17.string().min(1).describe("User ID of the member to update."),
  role: OrganizationMembershipRoleSchema.describe("Role to assign.")
});
var UpdateMemberRoleOutputSchema = z17.object({
  member: OrganizationMemberSchema.describe("Updated organization member.")
});
var RemoveMemberInputSchema = z17.object({
  params: z17.object({
    userId: z17.string().min(1).describe("User ID of the member to remove.")
  }),
  query: z17.object({
    organizationId: z17.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted.")
  })
}).transform(({ params, query }) => ({
  ...query,
  ...params
}));
var RemoveMemberOutputSchema = z17.object({
  removedUserId: z17.string().min(1).describe("User ID removed from the organization.")
});
var listMembers = defineOperation({
  operationId: "members.list",
  description: "List members in an organization.",
  backend: "api",
  route: {
    method: "GET",
    path: "/members",
    tags: ["Members"]
  },
  input: ListMembersInputSchema,
  output: ListMembersOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "organization-members",
      input: {
        organizationId: "organization-123"
      },
      output: {
        members: [
          {
            membershipId: "membership-123",
            userId: "user-123",
            name: "Alex Admin",
            email: "alex@example.com",
            imageUrl: null,
            role: "admin",
            createdAt: "2026-01-01T00:00:00.000Z"
          }
        ]
      }
    }
  ]
});
var updateMemberRole = defineOperation({
  operationId: "members.updateRole",
  description: "Update a member's organization role.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/members/{userId}/role",
    tags: ["Members"]
  },
  input: UpdateMemberRoleInputSchema,
  output: UpdateMemberRoleOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "promote-member",
      input: {
        organizationId: "organization-123",
        userId: "user-456",
        role: "admin"
      },
      output: {
        member: {
          membershipId: "membership-456",
          userId: "user-456",
          name: "Mina Member",
          email: "mina@example.com",
          imageUrl: null,
          role: "admin",
          createdAt: "2026-01-01T00:00:00.000Z"
        }
      }
    }
  ]
});
var removeMember = defineOperation({
  operationId: "members.remove",
  description: "Remove a member from an organization.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/members/{userId}",
    tags: ["Members"],
    inputStructure: "detailed"
  },
  input: RemoveMemberInputSchema,
  output: RemoveMemberOutputSchema,
  pagination: "none",
  async: "sync"
});
var membersContract = {
  list: listMembers.contract,
  updateRole: updateMemberRole.contract,
  remove: removeMember.contract
};

// ../public-api-contracts/src/memory.ts
import { z as z18 } from "zod";
var MEMORY_CURATED_KINDS = ["note", "runbook"];
var MEMORY_KINDS = ["note", "runbook", "change"];
var MemoryKindSchema = z18.enum(MEMORY_KINDS);
var MemoryCuratedKindSchema = z18.enum(MEMORY_CURATED_KINDS);
var MemoryPathSchema = z18.string().min(1).max(512).refine((value) => !value.startsWith("/"), {
  message: "Path must be relative without a leading slash."
}).describe("Relative memory path, for example AGENTS.md or notes/architecture.md.");
var MEMORY_BODY_MAX_BYTES = 4194304;
var MemoryBodySchema = z18.string().min(1).refine((value) => new TextEncoder().encode(value).length <= MEMORY_BODY_MAX_BYTES, {
  message: `Memory body must be at most ${MEMORY_BODY_MAX_BYTES} bytes (4 MiB).`
}).describe("Document body stored in project memory.");
var MemoryDurationSchema = z18.string().regex(/^(\d+)(s|m|h|d)$/u, "Duration must use s, m, h, or d units, for example 7d or 30m.").describe("Relative time window, for example 7d or 30m.");
var parseKindFilter = (value) => {
  const kinds = value.split(",").map((part) => part.trim()).filter(Boolean);
  const parsed = z18.array(MemoryKindSchema).safeParse(kinds);
  if (!parsed.success) {
    throw new Error("Kind filter must be a comma-separated list of note, runbook, or change.");
  }
  return parsed.data;
};
var MemoryKindFilterSchema = z18.string().min(1).transform(parseKindFilter).describe("Comma-separated kinds, for example note,runbook.");
var MemoryDocumentSchema = z18.object({
  id: z18.string().uuid(),
  projectId: z18.string().uuid(),
  kind: MemoryKindSchema,
  managed: z18.boolean(),
  path: z18.string().nullable(),
  title: z18.string().nullable(),
  contentHash: z18.string(),
  attrs: z18.record(z18.string(), z18.unknown()),
  createdAt: z18.string().datetime(),
  updatedAt: z18.string().datetime()
});
var MemoryDocumentDetailSchema = MemoryDocumentSchema.extend({
  body: MemoryBodySchema
});
var PutProjectMemoryInputSchema = z18.object({
  projectId: z18.string().uuid().optional().describe("Project that owns the document. Auto-filled from CLI and SDK context when omitted."),
  path: MemoryPathSchema.describe("Relative path for the curated document."),
  body: MemoryBodySchema,
  kind: MemoryCuratedKindSchema.default("note").describe("Curated document kind. Only note and runbook may be written through the API."),
  title: z18.string().max(500).optional().describe("Optional display title. Defaults to the path basename.")
});
var PutProjectMemoryOutputSchema = z18.object({
  document: MemoryDocumentDetailSchema
});
var GetProjectMemoryInputSchema = z18.object({
  projectId: z18.string().uuid().optional().describe("Project that owns the document. Auto-filled from CLI and SDK context when omitted."),
  id: z18.string().uuid().optional().describe("Document id."),
  path: MemoryPathSchema.optional().describe("Relative curated path.")
}).superRefine((value, ctx) => {
  const hasId = value.id !== undefined;
  const hasPath = value.path !== undefined;
  if (hasId === hasPath) {
    ctx.addIssue({
      code: "custom",
      message: "Provide exactly one of id or path."
    });
  }
});
var GetProjectMemoryOutputSchema = z18.object({
  document: MemoryDocumentDetailSchema
});
var ListProjectMemoryInputSchema = z18.object({
  projectId: z18.string().uuid().optional().describe("Project to list memory for. Auto-filled from CLI and SDK context when omitted."),
  kind: MemoryKindFilterSchema.optional(),
  since: MemoryDurationSchema.optional().describe("Only return documents updated within this window, for example 7d."),
  service: z18.string().min(1).optional().describe("Filter to documents whose attrs.services contains this value."),
  pathPrefix: z18.string().min(1).optional().describe("Filter to paths starting with this prefix."),
  managed: z18.coerce.boolean().optional(),
  cursor: z18.string().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),
  limit: z18.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of documents to return per page.")
});
var ListProjectMemoryOutputSchema = z18.object({
  documents: z18.array(MemoryDocumentSchema),
  nextCursor: z18.string().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var MemorySearchHitSchema = z18.object({
  documentId: z18.string().uuid(),
  kind: MemoryKindSchema,
  managed: z18.boolean(),
  path: z18.string().nullable(),
  title: z18.string().nullable(),
  snippet: z18.string(),
  score: z18.number()
});
var MemorySearchEmptyVerdictSchema = z18.object({
  calibrated: z18.literal(true),
  minScoreThreshold: z18.number(),
  queryTerms: z18.array(z18.string()),
  message: z18.string()
});
var SearchProjectMemoryInputSchema = z18.object({
  projectId: z18.string().uuid().optional().describe("Project to search memory for. Auto-filled from CLI and SDK context when omitted."),
  query: z18.string().trim().min(1).max(500).describe("Natural-language search query."),
  kind: MemoryKindFilterSchema.optional(),
  since: MemoryDurationSchema.optional(),
  service: z18.string().min(1).optional(),
  pathPrefix: z18.string().min(1).optional(),
  managed: z18.coerce.boolean().optional(),
  limit: z18.coerce.number().int().min(1).max(50).default(10).describe("Maximum ranked search hits to return.")
});
var SearchProjectMemoryOutputSchema = z18.object({
  hits: z18.array(MemorySearchHitSchema),
  emptyVerdict: MemorySearchEmptyVerdictSchema.nullable()
});
var DeleteProjectMemoryInputSchema = z18.object({
  projectId: z18.string().uuid().optional().describe("Project that owns the document. Auto-filled from CLI and SDK context when omitted."),
  id: z18.string().uuid().optional().describe("Document id."),
  path: MemoryPathSchema.optional()
}).superRefine((value, ctx) => {
  const hasId = value.id !== undefined;
  const hasPath = value.path !== undefined;
  if (hasId === hasPath) {
    ctx.addIssue({
      code: "custom",
      message: "Provide exactly one of id or path."
    });
  }
});
var DeleteProjectMemoryOutputSchema = z18.object({
  deleted: z18.boolean()
});
var putProjectMemory = defineOperation({
  operationId: "memory.put",
  description: "Create or replace a curated project memory document. Embeds on success.",
  backend: "api",
  route: {
    method: "PUT",
    path: "/memory",
    tags: ["Memory"]
  },
  input: PutProjectMemoryInputSchema,
  output: PutProjectMemoryOutputSchema,
  pagination: "none",
  async: "sync"
});
var getProjectMemory = defineOperation({
  operationId: "memory.get",
  description: "Get one project memory document by id or path.",
  backend: "api",
  route: {
    method: "GET",
    path: "/memory/document",
    tags: ["Memory"]
  },
  input: GetProjectMemoryInputSchema,
  output: GetProjectMemoryOutputSchema,
  pagination: "none",
  async: "sync"
});
var listProjectMemory = defineOperation({
  operationId: "memory.list",
  description: "List project memory catalog rows without embedding search.",
  backend: "api",
  route: {
    method: "GET",
    path: "/memory",
    tags: ["Memory"]
  },
  input: ListProjectMemoryInputSchema,
  output: ListProjectMemoryOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var searchProjectMemory = defineOperation({
  operationId: "memory.search",
  description: "Hybrid semantic and keyword search over project memory documents.",
  backend: "api",
  route: {
    method: "POST",
    path: "/memory/search",
    tags: ["Memory"]
  },
  input: SearchProjectMemoryInputSchema,
  output: SearchProjectMemoryOutputSchema,
  pagination: "none",
  async: "sync"
});
var deleteProjectMemory = defineOperation({
  operationId: "memory.delete",
  description: "Soft-delete a curated project memory document by id or path.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/memory/document",
    successStatus: 204,
    tags: ["Memory"]
  },
  input: DeleteProjectMemoryInputSchema,
  output: DeleteProjectMemoryOutputSchema,
  pagination: "none",
  async: "sync"
});
var memoryContract = {
  put: putProjectMemory.contract,
  get: getProjectMemory.contract,
  list: listProjectMemory.contract,
  search: searchProjectMemory.contract,
  delete: deleteProjectMemory.contract
};

// ../public-api-contracts/src/messages.ts
import { z as z21 } from "zod";

// ../public-api-contracts/src/runs.ts
import { z as z19 } from "zod";
var RunStatusSchema = z19.enum(["processing", "completed", "aborted", "error"]);
var RunSchema = z19.object({
  id: z19.string().uuid(),
  threadId: z19.string().uuid(),
  userMessageId: z19.string().uuid().nullable(),
  assistantMessageId: z19.string().uuid().nullable(),
  parentRunId: z19.string().uuid().nullable(),
  workflowRunId: z19.string().nullable(),
  status: RunStatusSchema,
  source: z19.enum([
    "app",
    "api",
    "mcp",
    "slack",
    "teams",
    "linear",
    "github",
    "agent",
    "cli"
  ]),
  createdAt: z19.string().datetime(),
  updatedAt: z19.string().datetime(),
  completedAt: z19.string().datetime().nullable()
});
var ListRunsInputSchema = z19.object({
  projectId: z19.string().uuid().optional().describe("Project ID to list runs for. Auto-filled from CLI and SDK context when omitted."),
  limit: z19.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),
  cursor: z19.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")
});
var ListRunsOutputSchema = z19.object({
  runs: z19.array(RunSchema),
  nextCursor: z19.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var ListThreadRunsInputSchema = z19.object({
  threadId: z19.string().uuid().describe("Thread ID to list runs for."),
  limit: z19.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),
  cursor: z19.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")
});
var ListThreadRunsOutputSchema = z19.object({
  runs: z19.array(RunSchema),
  nextCursor: z19.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var GetRunInputSchema = z19.object({
  runId: z19.string().uuid().describe("Run ID returned by a deferred operation.")
});
var RunResultSchema = z19.object({
  completed: z19.boolean().describe("Whether the run has reached a terminal status."),
  threadId: z19.string().uuid().describe("Thread ID associated with the run."),
  runId: z19.string().uuid().describe("Run ID for subsequent polling."),
  messageId: z19.string().uuid().optional().describe("ID of the user message that triggered this run."),
  status: RunStatusSchema.describe("Current run lifecycle status."),
  response: z19.string().nullable().describe("Assistant response text when the run has completed.")
});
var GetRunOutputSchema = RunResultSchema.describe("Current run state and, when complete, the assistant response.");
var CancelRunInputSchema = z19.object({
  runId: z19.string().uuid().describe("Run ID of the in-flight run to request cancellation for.")
});
var CancelRunOutputSchema = z19.object({
  success: z19.literal(true).describe("Always true when the cancellation request was accepted.")
});
var listRuns = defineOperation({
  operationId: "runs.list",
  description: "List deferred runs within one project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/runs",
    tags: ["Runs"]
  },
  input: ListRunsInputSchema,
  output: ListRunsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var listThreadRuns = defineOperation({
  operationId: "runs.listForThread",
  summary: "List Runs for a Thread",
  description: "List deferred runs for one thread.",
  backend: "api",
  route: {
    method: "GET",
    path: "/threads/{threadId}/runs",
    tags: ["Runs"]
  },
  input: ListThreadRunsInputSchema,
  output: ListThreadRunsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var getRun = defineOperation({
  operationId: "runs.get",
  description: "Get the current result for a deferred run by run ID.",
  backend: "api",
  route: {
    method: "GET",
    path: "/runs/{runId}",
    tags: ["Runs"]
  },
  input: GetRunInputSchema,
  output: GetRunOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "processing-run",
      input: {
        runId: "33333333-3333-4333-8333-333333333333"
      },
      output: {
        completed: false,
        threadId: "22222222-2222-4222-8222-222222222222",
        runId: "33333333-3333-4333-8333-333333333333",
        status: "processing",
        response: null
      }
    }
  ]
});
var cancelRun = defineOperation({
  operationId: "runs.cancel",
  description: "Request cancellation of an in-flight run. Idempotent and best-effort: returns success even when the run has already reached a terminal status.",
  backend: "api",
  route: {
    method: "POST",
    path: "/runs/{runId}/cancel",
    tags: ["Runs"]
  },
  input: CancelRunInputSchema,
  output: CancelRunOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "cancel-processing-run",
      input: {
        runId: "33333333-3333-4333-8333-333333333333"
      },
      output: {
        success: true
      }
    }
  ]
});
var runsContract = {
  list: listRuns.contract,
  listForThread: listThreadRuns.contract,
  get: getRun.contract,
  cancel: cancelRun.contract
};

// ../public-api-contracts/src/thread-message-input-validation.ts
var DEFAULT_PUBLIC_THREAD_MESSAGE_MAX_LENGTH = 1e4;
var AUTOMATION_PUBLIC_THREAD_MESSAGE_MAX_LENGTH = 20000;
var validatePublicThreadMessageLength = (message, automationId, ctx) => {
  const maxLength = automationId ? AUTOMATION_PUBLIC_THREAD_MESSAGE_MAX_LENGTH : DEFAULT_PUBLIC_THREAD_MESSAGE_MAX_LENGTH;
  if (message.length > maxLength) {
    ctx.addIssue({
      code: "too_big",
      maximum: maxLength,
      type: "string",
      inclusive: true,
      message: `Message cannot exceed ${maxLength} characters`,
      origin: "string",
      path: ["message"]
    });
  }
};
var validatePublicThreadAmbientMarker = (ambientServiceRun, automationId, ctx) => {
  if (ambientServiceRun && !automationId) {
    ctx.addIssue({
      code: "custom",
      message: "ambientServiceRun requires an automationId",
      path: ["ambientServiceRun"]
    });
  }
};

// ../public-api-contracts/src/threads.ts
import { z as z20 } from "zod";
var MessageSourceSchema = z20.enum([
  "slack",
  "teams",
  "linear",
  "github",
  "app",
  "mcp",
  "agent",
  "api",
  "cli"
]);
var ThreadSchema = z20.object({
  id: z20.string().uuid(),
  projectId: z20.string().uuid(),
  title: z20.string().nullable(),
  status: z20.enum(["regular", "archived"]),
  source: MessageSourceSchema.nullable(),
  createdAt: z20.string().datetime(),
  updatedAt: z20.string().datetime()
});
var MessagePartSchema = z20.object({
  type: z20.literal("message"),
  message: z20.string()
});
var ReasoningPartSchema = z20.object({
  type: z20.literal("reasoning"),
  reasoning: z20.string(),
  status: z20.enum(["in_progress", "complete"]).optional()
});
var ToolCallPartSchema = z20.object({
  type: z20.literal("tool_call"),
  name: z20.string(),
  params: z20.any().optional(),
  result: z20.any().optional(),
  status: z20.enum(["in_progress", "success", "error", "unknown"]).optional(),
  toolCallId: z20.string().optional(),
  durationMs: z20.number().nonnegative().optional()
});
var ArtifactPartSchema = z20.object({
  type: z20.literal("artifact"),
  name: z20.enum([
    "timeseries",
    "table",
    "log_detail",
    "integration_required",
    "alert_card",
    "issue_card",
    "mdx"
  ]),
  data: z20.any(),
  toolCallId: z20.string().optional()
});
var ForkPartSchema = z20.object({
  type: z20.literal("fork"),
  sourceThreadId: z20.string(),
  sourceMessageId: z20.string(),
  sourceThreadTitle: z20.string().nullable()
});
var SummaryPartSchema = z20.object({
  type: z20.literal("summary"),
  summary: z20.string()
});
var SlackContextPartSchema = z20.object({
  type: z20.literal("slack_context"),
  channelId: z20.string(),
  isTruncated: z20.boolean().optional(),
  messages: z20.array(z20.object({
    timestamp: z20.string(),
    slackUserId: z20.string().optional(),
    displayName: z20.string(),
    text: z20.string(),
    isBot: z20.boolean(),
    files: z20.array(z20.object({
      name: z20.string(),
      mimetype: z20.string(),
      size: z20.number().optional(),
      attachmentId: z20.string().uuid().optional(),
      ingestionStatus: z20.enum([
        "attached",
        "unsupported",
        "oversized",
        "skipped",
        "unavailable"
      ]).optional()
    })).optional()
  }))
});
var TeamsContextPartSchema = z20.object({
  type: z20.literal("teams_context"),
  conversationId: z20.string(),
  isTruncated: z20.boolean().optional(),
  messages: z20.array(z20.object({
    activityId: z20.string().optional(),
    displayName: z20.string(),
    text: z20.string(),
    isBot: z20.boolean(),
    createdDateTime: z20.string().optional()
  }))
});
var ContentPartSchema = z20.union([
  MessagePartSchema,
  ReasoningPartSchema,
  ToolCallPartSchema,
  ArtifactPartSchema,
  ForkPartSchema,
  SummaryPartSchema,
  SlackContextPartSchema,
  TeamsContextPartSchema
]);
var MessageSchema = z20.object({
  id: z20.string().uuid(),
  role: z20.enum(["user", "assistant"]),
  content: z20.array(ContentPartSchema),
  source: MessageSourceSchema,
  createdAt: z20.string().datetime()
});
var ListThreadsInputSchema = z20.object({
  projectId: z20.string().uuid().optional().describe("Project to list threads for. Auto-filled from CLI and SDK context when omitted."),
  limit: z20.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of threads to return per page."),
  cursor: z20.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),
  status: z20.enum(["regular", "archived"]).optional().describe("Filter by thread status. 'regular' returns active threads, 'archived' returns archived threads.")
});
var ListThreadsOutputSchema = z20.object({
  threads: z20.array(ThreadSchema).describe("The page of threads matching the query."),
  nextCursor: z20.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var GetThreadInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID returned by threads.list or threads.create.")
});
var GetThreadOutputSchema = z20.object({
  thread: ThreadSchema.describe("The requested thread."),
  messages: z20.array(MessageSchema).describe("Messages currently stored on the thread in chronological order.")
});
var CreateThreadInputSchema = z20.object({
  projectId: z20.string().uuid().optional().describe("Project to create the thread in. Auto-filled from CLI and SDK context when omitted."),
  message: z20.string().min(1, "Message cannot be empty").describe("Initial user message that starts the thread."),
  wait: z20.boolean().default(true).describe("Whether the server should wait for the agent run before responding."),
  timeoutSeconds: z20.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling."),
  automationId: z20.string().uuid().optional().describe("Internal automation context. Set by the Sazabi CLI when an automation script starts an agent run."),
  ambientServiceRun: z20.literal(true).optional().describe("Internal marker for scheduler-originated ambient service work. Honored only for system secret-key requests with matching automation context.")
}).superRefine((input, ctx) => {
  validatePublicThreadMessageLength(input.message, input.automationId, ctx);
  validatePublicThreadAmbientMarker(input.ambientServiceRun, input.automationId, ctx);
});
var CreateThreadOutputSchema = RunResultSchema.describe("Deferred run result for creating a thread.");
var GetThreadStatusInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID whose current processing status should be returned.")
});
var GetThreadStatusOutputSchema = z20.object({
  status: z20.enum(["idle", "processing"]),
  lastRunStatus: z20.enum(["error"]).nullable()
});
var StopThreadInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID whose active run should be stopped.")
});
var StopThreadOutputSchema = z20.object({
  success: z20.literal(true).describe("Always true when the stop request was accepted.")
});
var UpdateThreadInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID of the thread to update."),
  status: z20.enum(["regular", "archived"]).describe("New status for the thread. 'archived' hides the thread from the sidebar.")
});
var UpdateThreadOutputSchema = z20.object({
  thread: ThreadSchema.describe("The updated thread.")
});
var listThreads = defineOperation({
  operationId: "threads.list",
  description: "List threads in a project, optionally filtered by status.",
  backend: "api",
  route: {
    method: "GET",
    path: "/threads",
    tags: ["Threads"]
  },
  input: ListThreadsInputSchema,
  output: ListThreadsOutputSchema,
  pagination: "cursor",
  async: "sync",
  examples: [
    {
      name: "active-threads",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111",
        status: "regular",
        limit: 10
      },
      output: {
        threads: [
          {
            id: "22222222-2222-4222-8222-222222222222",
            projectId: "11111111-1111-4111-8111-111111111111",
            title: "API returning 500s",
            status: "regular",
            source: "api",
            createdAt: "2026-01-01T00:00:00.000Z",
            updatedAt: "2026-01-01T00:05:00.000Z"
          }
        ],
        nextCursor: null
      }
    }
  ]
});
var getThread = defineOperation({
  operationId: "threads.get",
  description: "Get a thread and its messages.",
  backend: "api",
  route: {
    method: "GET",
    path: "/threads/{threadId}",
    tags: ["Threads"]
  },
  input: GetThreadInputSchema,
  output: GetThreadOutputSchema,
  pagination: "none",
  async: "sync"
});
var getThreadStatus = defineOperation({
  operationId: "threads.getStatus",
  description: "Get the current processing status for a thread.",
  backend: "api",
  route: {
    method: "GET",
    path: "/threads/{threadId}/status",
    tags: ["Threads"]
  },
  input: GetThreadStatusInputSchema,
  output: GetThreadStatusOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "processing-thread",
      input: {
        threadId: "22222222-2222-4222-8222-222222222222"
      },
      output: {
        status: "processing",
        lastRunStatus: null
      }
    }
  ]
});
var stopThread = defineOperation({
  operationId: "threads.stop",
  description: "Stop a thread's in-flight run. Idempotent and best-effort: returns success even when the thread has no active run.",
  backend: "api",
  route: {
    method: "POST",
    path: "/threads/{threadId}/stop",
    tags: ["Threads"]
  },
  input: StopThreadInputSchema,
  output: StopThreadOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "stop-processing-thread",
      input: {
        threadId: "22222222-2222-4222-8222-222222222222"
      },
      output: {
        success: true
      }
    }
  ]
});
var createThread = defineOperation({
  operationId: "threads.create",
  description: "Create a thread with an initial message and optionally wait for the agent response.",
  backend: "api",
  route: {
    method: "POST",
    path: "/threads",
    tags: ["Threads"],
    successStatus: 201
  },
  input: CreateThreadInputSchema,
  output: CreateThreadOutputSchema,
  pagination: "none",
  async: "deferred",
  examples: [
    {
      name: "async-handoff",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111",
        message: "Investigate elevated 500s in production.",
        wait: false,
        timeoutSeconds: 20
      },
      output: {
        completed: false,
        threadId: "22222222-2222-4222-8222-222222222222",
        runId: "33333333-3333-4333-8333-333333333333",
        status: "processing",
        response: null
      }
    }
  ]
});
var updateThread = defineOperation({
  operationId: "threads.update",
  description: "Update a thread's status.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/threads/{threadId}",
    tags: ["Threads"]
  },
  input: UpdateThreadInputSchema,
  output: UpdateThreadOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "archive-thread",
      input: {
        threadId: "22222222-2222-4222-8222-222222222222",
        status: "archived"
      },
      output: {
        thread: {
          id: "22222222-2222-4222-8222-222222222222",
          projectId: "11111111-1111-4111-8111-111111111111",
          title: "API returning 500s",
          status: "archived",
          source: "api",
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:10:00.000Z"
        }
      }
    }
  ]
});
var ThreadVisibilitySchema = z20.enum(["private", "organization"]);
var ForkThreadInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID of the source thread to fork."),
  messageId: z20.string().uuid().describe("Message ID in the source thread to fork from. The new thread copies messages up to and including this message.")
});
var ForkThreadOutputSchema = z20.object({
  thread: ThreadSchema.describe("The newly created forked thread.")
});
var SetThreadVisibilityInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID of the thread to update."),
  visibility: ThreadVisibilitySchema.describe("New visibility. 'private' restricts the thread to its owner; 'organization' shares it with the organization.")
});
var SetThreadVisibilityOutputSchema = z20.object({
  thread: ThreadSchema.describe("The updated thread."),
  visibility: ThreadVisibilitySchema.describe("The thread's resulting visibility.")
});
var ThreadShareLinkSchema = z20.object({
  shareId: z20.string().uuid().describe("Unique identifier for the snapshot."),
  threadId: z20.string().uuid().describe("Thread the snapshot was taken from."),
  url: z20.string().describe("Public read-only URL for the snapshot."),
  createdAt: z20.string().datetime()
});
var CreateThreadShareLinkInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID to create a public read-only snapshot for.")
});
var CreateThreadShareLinkOutputSchema = z20.object({
  share: ThreadShareLinkSchema.describe("The created share link.")
});
var RevokeThreadShareLinkInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID the snapshot belongs to."),
  shareId: z20.string().uuid().describe("Snapshot ID to revoke.")
});
var RevokeThreadShareLinkOutputSchema = z20.void();
var ListThreadShareLinksInputSchema = z20.object({
  threadId: z20.string().uuid().describe("Thread ID to list public snapshots for.")
});
var ListThreadShareLinksOutputSchema = z20.object({
  shares: z20.array(ThreadShareLinkSchema).describe("Active share links for the thread.")
});
var SAMPLE_THREAD_ID = "22222222-2222-4222-8222-222222222222";
var SAMPLE_PROJECT_ID = "11111111-1111-4111-8111-111111111111";
var SAMPLE_MESSAGE_ID = "44444444-4444-4444-8444-444444444444";
var SAMPLE_SHARE_ID = "55555555-5555-4555-8555-555555555555";
var forkThread = defineOperation({
  operationId: "threads.fork",
  description: "Fork a thread from a specific message, creating a new thread that copies messages up to that point.",
  backend: "api",
  route: {
    method: "POST",
    path: "/threads/{threadId}/fork",
    tags: ["Threads"],
    successStatus: 201
  },
  input: ForkThreadInputSchema,
  output: ForkThreadOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "fork-from-message",
      input: {
        threadId: SAMPLE_THREAD_ID,
        messageId: SAMPLE_MESSAGE_ID
      },
      output: {
        thread: {
          id: "66666666-6666-4666-8666-666666666666",
          projectId: SAMPLE_PROJECT_ID,
          title: "API returning 500s (fork)",
          status: "regular",
          source: "api",
          createdAt: "2026-01-01T00:20:00.000Z",
          updatedAt: "2026-01-01T00:20:00.000Z"
        }
      }
    }
  ]
});
var setThreadVisibility = defineOperation({
  operationId: "threads.setVisibility",
  description: "Set a thread's visibility to private or organization.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/threads/{threadId}/visibility",
    tags: ["Threads"]
  },
  input: SetThreadVisibilityInputSchema,
  output: SetThreadVisibilityOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "make-private",
      input: {
        threadId: SAMPLE_THREAD_ID,
        visibility: "private"
      },
      output: {
        thread: {
          id: SAMPLE_THREAD_ID,
          projectId: SAMPLE_PROJECT_ID,
          title: "API returning 500s",
          status: "regular",
          source: "api",
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:30:00.000Z"
        },
        visibility: "private"
      }
    }
  ]
});
var createThreadShareLink = defineOperation({
  operationId: "threads.createShareLink",
  description: "Create a public read-only share link for a thread's current messages.",
  backend: "api",
  route: {
    method: "POST",
    path: "/threads/{threadId}/share",
    tags: ["Threads"],
    successStatus: 201
  },
  input: CreateThreadShareLinkInputSchema,
  output: CreateThreadShareLinkOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "create-share-link",
      input: {
        threadId: SAMPLE_THREAD_ID
      },
      output: {
        share: {
          shareId: SAMPLE_SHARE_ID,
          threadId: SAMPLE_THREAD_ID,
          url: "https://app.sazabi.com/share/55555555-5555-4555-8555-555555555555",
          createdAt: "2026-01-01T00:40:00.000Z"
        }
      }
    }
  ]
});
var listThreadShareLinks = defineOperation({
  operationId: "threads.listShareLinks",
  description: "List active public share links for a thread.",
  backend: "api",
  route: {
    method: "GET",
    path: "/threads/{threadId}/share",
    tags: ["Threads"]
  },
  input: ListThreadShareLinksInputSchema,
  output: ListThreadShareLinksOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "list-share-links",
      input: {
        threadId: SAMPLE_THREAD_ID
      },
      output: {
        shares: [
          {
            shareId: SAMPLE_SHARE_ID,
            threadId: SAMPLE_THREAD_ID,
            url: "https://app.sazabi.com/share/55555555-5555-4555-8555-555555555555",
            createdAt: "2026-01-01T00:40:00.000Z"
          }
        ]
      }
    }
  ]
});
var revokeThreadShareLink = defineOperation({
  operationId: "threads.revokeShareLink",
  description: "Revoke a public share link for a thread.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/threads/{threadId}/share/{shareId}",
    successStatus: 204,
    tags: ["Threads"]
  },
  input: RevokeThreadShareLinkInputSchema,
  output: RevokeThreadShareLinkOutputSchema,
  pagination: "none",
  async: "sync"
});
var threadsContract = {
  list: listThreads.contract,
  get: getThread.contract,
  getStatus: getThreadStatus.contract,
  stop: stopThread.contract,
  create: createThread.contract,
  update: updateThread.contract,
  fork: forkThread.contract,
  setVisibility: setThreadVisibility.contract,
  createShareLink: createThreadShareLink.contract,
  listShareLinks: listThreadShareLinks.contract,
  revokeShareLink: revokeThreadShareLink.contract
};

// ../public-api-contracts/src/messages.ts
var ListMessagesInputSchema = z21.object({
  threadId: z21.string().uuid().describe("Thread ID to list messages for."),
  limit: z21.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of messages to return per page."),
  cursor: z21.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")
});
var ListMessagesOutputSchema = z21.object({
  messages: z21.array(MessageSchema),
  nextCursor: z21.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var AppendMessageInputSchema = z21.object({
  threadId: z21.string().uuid().describe("Thread ID to append the message to."),
  message: z21.string().min(1, "Message cannot be empty").describe("Message body to append to the thread."),
  wait: z21.boolean().default(true).describe("Whether the server should wait for the appended message run before responding."),
  timeoutSeconds: z21.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling."),
  automationId: z21.string().uuid().optional().describe("Internal automation context. Set by the Sazabi CLI when an automation script starts an agent run."),
  ambientServiceRun: z21.literal(true).optional().describe("Internal marker for scheduler-originated ambient service work. Honored only for system secret-key requests with matching automation context.")
}).superRefine((input, ctx) => {
  validatePublicThreadMessageLength(input.message, input.automationId, ctx);
  validatePublicThreadAmbientMarker(input.ambientServiceRun, input.automationId, ctx);
});
var AppendMessageOutputSchema = RunResultSchema.describe("Deferred run result for appending a message to an existing thread.");
var listMessages = defineOperation({
  operationId: "messages.list",
  description: "List messages in a thread with cursor pagination.",
  backend: "api",
  route: {
    method: "GET",
    path: "/threads/{threadId}/messages",
    tags: ["Messages"]
  },
  input: ListMessagesInputSchema,
  output: ListMessagesOutputSchema,
  pagination: "cursor",
  async: "sync",
  examples: [
    {
      name: "thread-messages",
      input: {
        threadId: "22222222-2222-4222-8222-222222222222",
        limit: 2
      },
      output: {
        messages: [
          {
            id: "33333333-3333-4333-8333-333333333333",
            role: "user",
            content: [
              {
                type: "message",
                message: "What changed in the intake pipeline?"
              }
            ],
            source: "api",
            createdAt: "2026-01-01T00:00:00.000Z"
          }
        ],
        nextCursor: null
      }
    }
  ]
});
var appendMessage = defineOperation({
  operationId: "messages.append",
  description: "Append a user message to an existing thread and trigger a deferred run.",
  backend: "api",
  route: {
    method: "POST",
    path: "/threads/{threadId}/messages",
    successStatus: 201,
    tags: ["Messages"]
  },
  input: AppendMessageInputSchema,
  output: AppendMessageOutputSchema,
  pagination: "none",
  async: "deferred",
  examples: [
    {
      name: "append-processing",
      input: {
        threadId: "22222222-2222-4222-8222-222222222222",
        message: "Follow up on the intake backlog.",
        wait: false,
        timeoutSeconds: 20
      },
      output: {
        completed: false,
        threadId: "22222222-2222-4222-8222-222222222222",
        runId: "33333333-3333-4333-8333-333333333333",
        status: "processing",
        response: null
      }
    }
  ]
});

// ../notification-channels/src/index.ts
import { z as z22 } from "zod";
var NOTIFICATION_CHANNELS = {
  IN_APP: "in_app",
  SLACK: "slack",
  SLACK_CHANNEL: "slack_channel",
  TEAMS_CHANNEL: "teams_channel",
  EMAIL: "email",
  SMS: "sms",
  INCIDENT_IO: "incident_io",
  PAGERDUTY: "pagerduty",
  ROOTLY: "rootly",
  WEBHOOK: "webhook"
};
var PERSONAL_NOTIFICATION_CHANNELS = [
  NOTIFICATION_CHANNELS.IN_APP,
  NOTIFICATION_CHANNELS.SLACK,
  NOTIFICATION_CHANNELS.EMAIL,
  NOTIFICATION_CHANNELS.SMS
];
var PROJECT_NOTIFICATION_CHANNELS = [
  NOTIFICATION_CHANNELS.SLACK_CHANNEL,
  NOTIFICATION_CHANNELS.TEAMS_CHANNEL,
  NOTIFICATION_CHANNELS.INCIDENT_IO,
  NOTIFICATION_CHANNELS.PAGERDUTY,
  NOTIFICATION_CHANNELS.ROOTLY,
  NOTIFICATION_CHANNELS.WEBHOOK
];
var ALL_NOTIFICATION_CHANNELS = Object.values(NOTIFICATION_CHANNELS);
var NOTIFICATION_CHANNEL_VALUES = [
  ...ALL_NOTIFICATION_CHANNELS,
  "victorops"
];
var NotificationChannelSchema = z22.enum(ALL_NOTIFICATION_CHANNELS);
var ProjectNotificationChannelSchema = z22.enum(PROJECT_NOTIFICATION_CHANNELS);
var NOTIFICATION_CHANNEL_DEFINITIONS = [
  {
    channel: "in_app",
    name: "In-app",
    description: "Show notifications in your Sazabi notification feed.",
    scope: "personal",
    destinationManagement: "none",
    personalSettingsPath: "/settings/notifications"
  },
  {
    channel: "email",
    name: "Email",
    description: "Send notifications to your account email address.",
    scope: "personal",
    destinationManagement: "none",
    personalSettingsPath: "/settings/notifications"
  },
  {
    channel: "sms",
    name: "SMS",
    description: "Send notifications to your verified phone number.",
    scope: "personal",
    destinationManagement: "none",
    personalSettingsPath: "/settings/account?phone-number=add"
  },
  {
    channel: "slack",
    name: "Slack DMs",
    description: "Send personal notifications by Slack DM.",
    scope: "personal",
    destinationManagement: "none",
    personalSettingsPath: "/settings/connected-accounts/slack"
  },
  {
    channel: "slack_channel",
    name: "Slack",
    description: "Post this project's alerts to selected Slack channels.",
    scope: "project",
    destinationManagement: "slack_channels",
    projectIntegrationPath: "slack"
  },
  {
    channel: "teams_channel",
    name: "Microsoft Teams",
    description: "Post this project's alerts to selected Microsoft Teams channels.",
    scope: "project",
    destinationManagement: "teams_channels",
    projectIntegrationPath: "teams"
  },
  {
    channel: "incident_io",
    name: "incident.io",
    description: "Route this project's alerts to incident.io.",
    scope: "project",
    destinationManagement: "integration_connections",
    projectIntegrationPath: "incident-io"
  },
  {
    channel: "pagerduty",
    name: "PagerDuty",
    description: "Route this project's alerts to PagerDuty.",
    scope: "project",
    destinationManagement: "integration_connections",
    projectIntegrationPath: "pagerduty"
  },
  {
    channel: "rootly",
    name: "Rootly",
    description: "Route this project's alerts to Rootly.",
    scope: "project",
    destinationManagement: "integration_connections",
    projectIntegrationPath: "rootly"
  },
  {
    channel: "webhook",
    name: "Webhooks",
    description: "Send this project's alerts to configured HTTPS endpoints.",
    scope: "project",
    destinationManagement: "webhook_endpoints",
    projectSettingsPath: "webhooks"
  }
];
var registeredChannels = new Set(NOTIFICATION_CHANNEL_DEFINITIONS.map(({ channel }) => channel));
if (registeredChannels.size !== ALL_NOTIFICATION_CHANNELS.length || ALL_NOTIFICATION_CHANNELS.some((channel) => !registeredChannels.has(channel))) {
  throw new Error("Notification channel definitions must represent every channel");
}
// ../notifications/src/catalog/registry.ts
var registeredDefinitionsByValue = new Map;
var definitionsEqual = (left, right) => left.value === right.value && left.label === right.label && left.scope === right.scope && left.role === right.role && left.defaultOff === right.defaultOff && (left.deliveryConditions ?? []).join(",") === (right.deliveryConditions ?? []).join(",");
var registerNotificationTypes = (definitions) => {
  for (const definition of Object.values(definitions)) {
    const existing = registeredDefinitionsByValue.get(definition.value);
    if (existing && !definitionsEqual(existing, definition)) {
      throw new Error(`Notification type registered twice with conflicting definitions: ${definition.value}`);
    }
    if (definition.role !== undefined && definition.scope !== "org") {
      throw new Error(`Notification type role restrictions require org scope: ${definition.value}`);
    }
    if (definition.label.trim().length === 0) {
      throw new Error(`Notification type needs a display label: ${definition.value}`);
    }
    registeredDefinitionsByValue.set(definition.value, definition);
  }
  return definitions;
};

// ../notifications/src/catalog/automations.ts
var AUTOMATION_NOTIFICATION_TYPE_DEFINITIONS = registerNotificationTypes({
  AUTOMATION_FINISHED: {
    value: "automation_finished",
    label: "Automation completed",
    scope: "project",
    defaultOff: true
  },
  AUTOMATION_RUN_FAILED: {
    value: "automation_run_failed",
    label: "Automation run failed",
    scope: "project"
  }
});

// ../notifications/src/catalog/billing.ts
var BILLING_NOTIFICATION_TYPE_DEFINITIONS = registerNotificationTypes({
  BILLING_PLAN_UPGRADE_APPLIED: {
    value: "billing_plan_upgrade_applied",
    label: "Billing upgrade applied",
    scope: "org",
    role: "admin"
  },
  BILLING_PLAN_DOWNGRADE_SCHEDULED: {
    value: "billing_plan_downgrade_scheduled",
    label: "Billing downgrade scheduled",
    scope: "org",
    role: "admin"
  },
  BILLING_PLAN_DOWNGRADE_APPLIED: {
    value: "billing_plan_downgrade_applied",
    label: "Billing downgrade applied",
    scope: "org",
    role: "admin"
  },
  BILLING_CREDIT_BALANCE_LOW: {
    value: "billing_credit_balance_low",
    label: "Billing credits low",
    scope: "org",
    role: "admin"
  },
  BILLING_CREDIT_BALANCE_DEPLETED: {
    value: "billing_credit_balance_depleted",
    label: "Billing credits depleted",
    scope: "org",
    role: "admin"
  },
  BILLING_AUTO_TOP_UP_SETTINGS_CHANGED: {
    value: "billing_auto_top_up_settings_changed",
    label: "Billing auto top-up changed",
    scope: "org",
    role: "admin"
  },
  BILLING_AUTO_TOP_UP_FAILED: {
    value: "billing_auto_top_up_failed",
    label: "Billing auto top-up failed",
    scope: "org",
    role: "admin"
  },
  BILLING_INVOICE_PAID: {
    value: "billing_invoice_paid",
    label: "Billing invoice paid",
    scope: "org",
    role: "admin"
  },
  BILLING_NEGATIVE_BALANCE_COLLECTED: {
    value: "billing_negative_balance_collected",
    label: "Billing outstanding balance charged",
    scope: "org",
    role: "admin"
  },
  BILLING_NEGATIVE_BALANCE_COLLECTION_FAILED: {
    value: "billing_negative_balance_collection_failed",
    label: "Billing outstanding balance charge failed",
    scope: "org",
    role: "admin"
  }
});

// ../notifications/src/catalog/integrations.ts
var INTEGRATION_NOTIFICATION_TYPE_DEFINITIONS = registerNotificationTypes({
  INTEGRATION_CONNECTED: {
    value: "integration_connected",
    label: "Integration connected",
    scope: "org",
    defaultOff: true
  },
  INTEGRATION_DISCONNECTED: {
    value: "integration_disconnected",
    label: "Integration disconnected",
    scope: "org"
  }
});

// ../notifications/src/catalog/issues.ts
var ISSUE_NOTIFICATION_TYPE_DEFINITIONS = registerNotificationTypes({
  ISSUE_TRIGGERED: {
    value: "issue_triggered",
    label: "Issue triggered",
    scope: "project",
    deliveryConditions: ["component", "severity"]
  },
  ISSUE_RESOLVED: {
    value: "issue_resolved",
    label: "Issue resolved",
    scope: "project",
    deliveryConditions: ["component", "severity"]
  },
  ISSUE_IGNORED: {
    value: "issue_ignored",
    label: "Issue ignored",
    scope: "project",
    deliveryConditions: ["component", "severity"]
  }
});

// ../notifications/src/catalog/organization.ts
var ORGANIZATION_NOTIFICATION_TYPE_DEFINITIONS = registerNotificationTypes({
  PROJECT_CREATED: {
    value: "project_created",
    label: "Project created",
    scope: "org",
    defaultOff: true
  },
  PROJECT_DELETED: {
    value: "project_deleted",
    label: "Project deleted",
    scope: "org",
    defaultOff: true
  },
  MEMBER_INVITED: {
    value: "member_invited",
    label: "Member invited",
    scope: "org",
    defaultOff: true
  },
  USER_REMOVED: {
    value: "user_removed",
    label: "Member removed",
    scope: "org",
    defaultOff: true
  },
  MCP_CONNECTOR_ADDED: {
    value: "mcp_connector_added",
    label: "MCP connector added",
    scope: "org",
    defaultOff: true
  },
  MCP_CONNECTOR_REMOVED: {
    value: "mcp_connector_removed",
    label: "MCP connector removed",
    scope: "org",
    defaultOff: true
  },
  SECRET_KEY_CREATED: {
    value: "secret_key_created",
    label: "Secret key created",
    scope: "org",
    defaultOff: true
  },
  SECRET_KEY_DELETED: {
    value: "secret_key_deleted",
    label: "Secret key deleted",
    scope: "org",
    defaultOff: true
  }
});

// ../notifications/src/catalog/project-resources.ts
var PROJECT_RESOURCE_NOTIFICATION_TYPE_DEFINITIONS = registerNotificationTypes({
  SANDBOX_CREATED: {
    value: "sandbox_created",
    label: "Sandbox connected",
    scope: "project",
    defaultOff: true
  },
  SANDBOX_DELETED: {
    value: "sandbox_deleted",
    label: "Sandbox disconnected",
    scope: "project",
    defaultOff: true
  },
  DATA_SOURCE_CONNECTED: {
    value: "data_source_connected",
    label: "Data source connected",
    scope: "project",
    defaultOff: true
  },
  DATA_SOURCE_DISCONNECTED: {
    value: "data_source_disconnected",
    label: "Data source disconnected",
    scope: "project"
  },
  GITHUB_CONNECTED: {
    value: "github_connected",
    label: "GitHub connected",
    scope: "project",
    defaultOff: true
  },
  GITHUB_DISCONNECTED: {
    value: "github_disconnected",
    label: "GitHub disconnected",
    scope: "project"
  },
  CODE_REPO_CONNECTED: {
    value: "code_repo_connected",
    label: "Code repository connected",
    scope: "project",
    defaultOff: true
  },
  CODE_REPO_DISCONNECTED: {
    value: "code_repo_disconnected",
    label: "Code repository disconnected",
    scope: "project"
  },
  PUBLIC_KEY_DEACTIVATED: {
    value: "public_key_deactivated",
    label: "Public key deactivated",
    scope: "project"
  }
});

// ../notifications/src/catalog/security.ts
var SECURITY_NOTIFICATION_TYPE_DEFINITIONS = registerNotificationTypes({
  SECURITY_ALERT: {
    value: "security_alert",
    label: "Security alert",
    scope: "org",
    role: "admin"
  }
});

// ../notifications/src/catalog/index.ts
var NOTIFICATION_TYPE_DEFINITIONS = {
  ...SECURITY_NOTIFICATION_TYPE_DEFINITIONS,
  ...ORGANIZATION_NOTIFICATION_TYPE_DEFINITIONS,
  ...INTEGRATION_NOTIFICATION_TYPE_DEFINITIONS,
  ...AUTOMATION_NOTIFICATION_TYPE_DEFINITIONS,
  ...ISSUE_NOTIFICATION_TYPE_DEFINITIONS,
  ...PROJECT_RESOURCE_NOTIFICATION_TYPE_DEFINITIONS,
  ...BILLING_NOTIFICATION_TYPE_DEFINITIONS
};
var NOTIFICATION_TYPES = Object.fromEntries(Object.entries(NOTIFICATION_TYPE_DEFINITIONS).map(([key, definition]) => [
  key,
  definition.value
]));
var definitionsByValue = new Map(Object.values(NOTIFICATION_TYPE_DEFINITIONS).map((definition) => [
  definition.value,
  definition
]));
var getNotificationTypeLabel = (notificationType) => {
  const label = definitionsByValue.get(notificationType)?.label;
  if (label) {
    return label;
  }
  const humanized = notificationType.replace(/_/g, " ").trim();
  return humanized ? humanized.charAt(0).toUpperCase() + humanized.slice(1) : notificationType;
};
// ../notifications/src/constants.ts
var ALL_NOTIFICATION_TYPES = Object.values(NOTIFICATION_TYPES);
var BILLING_NOTIFICATION_TYPES = [
  NOTIFICATION_TYPES.BILLING_PLAN_UPGRADE_APPLIED,
  NOTIFICATION_TYPES.BILLING_PLAN_DOWNGRADE_SCHEDULED,
  NOTIFICATION_TYPES.BILLING_PLAN_DOWNGRADE_APPLIED,
  NOTIFICATION_TYPES.BILLING_CREDIT_BALANCE_LOW,
  NOTIFICATION_TYPES.BILLING_CREDIT_BALANCE_DEPLETED,
  NOTIFICATION_TYPES.BILLING_AUTO_TOP_UP_SETTINGS_CHANGED,
  NOTIFICATION_TYPES.BILLING_AUTO_TOP_UP_FAILED,
  NOTIFICATION_TYPES.BILLING_INVOICE_PAID,
  NOTIFICATION_TYPES.BILLING_NEGATIVE_BALANCE_COLLECTED,
  NOTIFICATION_TYPES.BILLING_NEGATIVE_BALANCE_COLLECTION_FAILED
];
var BILLING_NOTIFICATION_TYPE_SET = new Set(BILLING_NOTIFICATION_TYPES);
var PROJECT_SLACK_CHANNEL_NOTIFICATION_TYPES = [
  NOTIFICATION_TYPES.ISSUE_TRIGGERED,
  NOTIFICATION_TYPES.ISSUE_RESOLVED,
  NOTIFICATION_TYPES.ISSUE_IGNORED,
  NOTIFICATION_TYPES.AUTOMATION_RUN_FAILED
];
var PROJECT_SLACK_CHANNEL_NOTIFICATION_TYPE_SET = new Set(PROJECT_SLACK_CHANNEL_NOTIFICATION_TYPES);
// ../notifications/src/events.ts
import { z as z23 } from "zod";
var NotificationTypeSchema = z23.enum(ALL_NOTIFICATION_TYPES);
// ../notifications/src/project-shared-notification-types.ts
var PROJECT_SHARED_NOTIFICATION_TYPE_DEFINITIONS = PROJECT_SLACK_CHANNEL_NOTIFICATION_TYPES.map((notificationType) => ({
  notificationType,
  label: getNotificationTypeLabel(notificationType)
}));
// ../public-api-contracts/src/notification-channels.ts
import { z as z24 } from "zod";
var NotificationChannelPrerequisiteStatusSchema = z24.enum([
  "ready",
  "missing",
  "degraded",
  "unavailable"
]);
var NotificationChannelDestinationSchema = z24.object({
  id: z24.string(),
  label: z24.string(),
  status: z24.enum(["active", "inactive", "degraded"]),
  statusLabel: z24.string()
});
var NotificationChannelCardSchema = z24.object({
  channel: NotificationChannelSchema,
  name: z24.string(),
  description: z24.string(),
  scope: z24.enum(["personal", "project"]),
  enabled: z24.boolean().nullable(),
  preferenceId: z24.string().nullable(),
  prerequisite: z24.object({
    status: NotificationChannelPrerequisiteStatusSchema,
    statusLabel: z24.string(),
    message: z24.string()
  }),
  action: z24.object({
    label: z24.string(),
    href: z24.string()
  }).nullable(),
  destinations: z24.array(NotificationChannelDestinationSchema),
  destinationManagement: z24.enum([
    "none",
    "slack_channels",
    "teams_channels",
    "integration_connections",
    "webhook_endpoints"
  ]),
  canCreateDestinations: z24.boolean(),
  supportedNotificationTypes: z24.array(NotificationTypeSchema)
});
var ProjectNotificationChannelPreferenceSchema = z24.object({
  channel: ProjectNotificationChannelSchema,
  enabled: z24.boolean(),
  preferenceId: z24.string().nullable()
});
var ProjectNotificationTypePreferenceSchema = z24.object({
  channel: ProjectNotificationChannelSchema,
  notificationType: NotificationTypeSchema,
  enabled: z24.boolean(),
  preferenceId: z24.string()
});
var GetProjectNotificationChannelsInputSchema = z24.object({
  projectId: z24.string().uuid().optional().describe("Project to inspect. Auto-filled from CLI and SDK context when omitted.")
});
var GetProjectNotificationChannelsOutputSchema = z24.object({
  channelCards: z24.array(NotificationChannelCardSchema).length(10),
  channels: z24.array(ProjectNotificationChannelPreferenceSchema),
  notificationTypePreferences: z24.array(ProjectNotificationTypePreferenceSchema),
  issueNotificationMinSeverity: z24.enum(["low", "medium", "high", "critical"])
});
var getProjectNotificationChannels = defineOperation({
  operationId: "notificationChannels.getProject",
  summary: "List Project Notification Channels",
  description: "List a project's notification channels with preferences, prerequisites, connection state, configured destinations, and supported notification types.",
  backend: "api",
  route: {
    method: "GET",
    path: "/notification-channels",
    tags: ["Notification channels"]
  },
  input: GetProjectNotificationChannelsInputSchema,
  output: GetProjectNotificationChannelsOutputSchema,
  pagination: "none",
  async: "sync"
});
var notificationChannelsContract = {
  getProject: getProjectNotificationChannels.contract
};

// ../public-api-contracts/src/notification-delivery-rules.ts
import { z as z25 } from "zod";
var DeliveryRuleSeveritySchema = z25.enum([
  "low",
  "medium",
  "high",
  "critical"
]);
var DeliveryRuleConditionSchema = z25.object({
  componentIds: z25.array(z25.string().uuid()).min(1).optional(),
  severities: z25.array(DeliveryRuleSeveritySchema).min(1).optional()
}).strict();
var DeliveryRuleDestinationInputSchema = z25.object({
  channel: ProjectNotificationChannelSchema,
  destinationKey: z25.string().min(1)
});
var DeliveryRuleDefinitionSchema = z25.object({
  destinations: z25.array(DeliveryRuleDestinationInputSchema).min(1),
  notificationTypes: z25.array(z25.enum(PROJECT_SLACK_CHANNEL_NOTIFICATION_TYPES)).min(1),
  condition: DeliveryRuleConditionSchema
});
var DeliveryRuleDestinationSchema = z25.object({
  id: z25.string(),
  channel: ProjectNotificationChannelSchema,
  destinationKey: z25.string(),
  displayName: z25.string()
});
var DeliveryRuleComponentSchema = z25.object({
  id: z25.string().uuid(),
  label: z25.string()
});
var ProjectDeliveryRuleSchema = z25.object({
  id: z25.string().uuid(),
  projectId: z25.string().uuid(),
  notificationTypes: z25.array(z25.enum(PROJECT_SLACK_CHANNEL_NOTIFICATION_TYPES)),
  destinations: z25.array(DeliveryRuleDestinationSchema),
  condition: DeliveryRuleConditionSchema,
  components: z25.array(DeliveryRuleComponentSchema),
  createdAt: z25.string().datetime(),
  updatedAt: z25.string().datetime()
});
var ProjectScopeSchema = z25.object({
  projectId: z25.string().uuid().optional().describe("Project whose notification delivery rules are being managed.")
});
var DeliveryRuleIdSchema = z25.string().uuid().describe("Logical notification delivery rule ID.");
var ListDeliveryRulesInputSchema = ProjectScopeSchema;
var ListDeliveryRulesOutputSchema = z25.object({
  rules: z25.array(ProjectDeliveryRuleSchema)
});
var DeliveryRuleOptionsOutputSchema = z25.object({
  destinations: z25.array(DeliveryRuleDestinationSchema),
  notificationTypes: z25.array(z25.object({
    notificationType: z25.enum(PROJECT_SLACK_CHANNEL_NOTIFICATION_TYPES),
    label: z25.string(),
    conditions: z25.array(z25.enum(["component", "severity"]))
  })),
  components: z25.array(DeliveryRuleComponentSchema)
});
var CreateDeliveryRuleInputSchema = ProjectScopeSchema.extend(DeliveryRuleDefinitionSchema.shape);
var CreateDeliveryRuleOutputSchema = ProjectDeliveryRuleSchema;
var UpdateDeliveryRuleInputSchema = CreateDeliveryRuleInputSchema.extend({
  ruleId: DeliveryRuleIdSchema
});
var UpdateDeliveryRuleOutputSchema = ProjectDeliveryRuleSchema;
var DeleteDeliveryRuleInputSchema = ProjectScopeSchema.extend({
  ruleId: DeliveryRuleIdSchema
});
var DeleteDeliveryRuleOutputSchema = z25.object({
  removed: z25.boolean()
});
var listDeliveryRules = defineOperation({
  operationId: "notificationDeliveryRules.list",
  description: "List the positive delivery rules for a project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/notification-delivery-rules",
    tags: ["Notification delivery rules"]
  },
  input: ListDeliveryRulesInputSchema,
  output: ListDeliveryRulesOutputSchema,
  pagination: "none",
  async: "sync"
});
var getDeliveryRuleOptions = defineOperation({
  operationId: "notificationDeliveryRules.options",
  description: "List available destinations, events, and conditions for project delivery rules.",
  backend: "api",
  route: {
    method: "GET",
    path: "/notification-delivery-rules/options",
    tags: ["Notification delivery rules"]
  },
  input: ProjectScopeSchema,
  output: DeliveryRuleOptionsOutputSchema,
  pagination: "none",
  async: "sync"
});
var createDeliveryRule = defineOperation({
  operationId: "notificationDeliveryRules.create",
  description: "Create a positive project notification delivery rule.",
  backend: "api",
  route: {
    method: "POST",
    path: "/notification-delivery-rules",
    tags: ["Notification delivery rules"]
  },
  input: CreateDeliveryRuleInputSchema,
  output: CreateDeliveryRuleOutputSchema,
  pagination: "none",
  async: "sync"
});
var updateDeliveryRule = defineOperation({
  operationId: "notificationDeliveryRules.update",
  description: "Replace a positive delivery rule atomically.",
  backend: "api",
  route: {
    method: "PUT",
    path: "/notification-delivery-rules/{ruleId}",
    tags: ["Notification delivery rules"]
  },
  input: UpdateDeliveryRuleInputSchema,
  output: UpdateDeliveryRuleOutputSchema,
  pagination: "none",
  async: "sync"
});
var deleteDeliveryRule = defineOperation({
  operationId: "notificationDeliveryRules.delete",
  description: "Delete a positive delivery rule without deleting its reusable destinations.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/notification-delivery-rules/{ruleId}",
    tags: ["Notification delivery rules"]
  },
  input: DeleteDeliveryRuleInputSchema,
  output: DeleteDeliveryRuleOutputSchema,
  pagination: "none",
  async: "sync"
});
var notificationDeliveryRulesContract = {
  list: listDeliveryRules.contract,
  options: getDeliveryRuleOptions.contract,
  create: createDeliveryRule.contract,
  update: updateDeliveryRule.contract,
  delete: deleteDeliveryRule.contract
};

// ../public-api-contracts/src/onboarding.ts
import { z as z26 } from "zod";
var OnboardingStepIdSchema = z26.enum([
  "accept-invite",
  "create-organization",
  "billing",
  "configure-project",
  "connect-github-account",
  "install-github-app",
  "configure-code-search",
  "install-slack-app",
  "configure-slack-notifications",
  "trigger-issue",
  "confirm-issue",
  "finish"
]);
var OnboardingGateSchema = z26.enum([
  "needs-onboarding",
  "blocked",
  "ready"
]);
var OnboardingCompletionStatusSchema = z26.enum([
  "incomplete",
  "complete",
  "skipped"
]);
var OnboardingInvitationSchema = z26.object({
  invitationId: z26.string(),
  organizationId: z26.string(),
  organizationName: z26.string(),
  organizationSlug: z26.string(),
  organizationImageUrl: z26.string().nullable(),
  inviterName: z26.string().nullable()
});
var OnboardingSnapshotSchema = z26.object({
  gate: OnboardingGateSchema,
  canonicalStep: OnboardingStepIdSchema.nullable(),
  organizationId: z26.string().nullable(),
  projectId: z26.string().nullable(),
  completionByStep: z26.record(OnboardingStepIdSchema, OnboardingCompletionStatusSchema),
  githubSkipped: z26.boolean(),
  githubAppSkipped: z26.boolean(),
  slackSkipped: z26.boolean(),
  sampleIssueId: z26.string().nullable(),
  actorRole: z26.enum(["admin", "member"]).nullable(),
  requiredStep: z26.union([OnboardingStepIdSchema, z26.literal("select-organization")]).nullable(),
  isCompleted: z26.boolean(),
  onboardingRecommendationsThreadId: z26.string().nullable(),
  hasOrganizations: z26.boolean(),
  hasPaidBillingSubscription: z26.boolean(),
  billingStepEnabled: z26.boolean(),
  pendingInvitations: z26.array(OnboardingInvitationSchema)
});
var GetOnboardingStateInputSchema = z26.object({});
var GetOnboardingStateOutputSchema = z26.object({
  onboarding: OnboardingSnapshotSchema
});
var getOnboardingState = defineOperation({
  operationId: "onboarding.getState",
  description: "Read onboarding progress for the authenticated user.",
  backend: "api",
  route: {
    method: "GET",
    path: "/onboarding/state",
    tags: ["Onboarding"]
  },
  input: GetOnboardingStateInputSchema,
  output: GetOnboardingStateOutputSchema,
  pagination: "none",
  async: "sync"
});
var SkipOnboardingIntegrationInputSchema = z26.object({
  integration: z26.enum(["github", "slack"]).describe("Integration onboarding step to skip.")
});
var SkipOnboardingIntegrationOutputSchema = z26.object({
  skipped: z26.literal(true)
});
var skipOnboardingIntegration = defineOperation({
  operationId: "onboarding.skipIntegration",
  description: "Skip a GitHub or Slack integration step during onboarding.",
  backend: "api",
  route: {
    method: "POST",
    path: "/onboarding/skip-integration",
    tags: ["Onboarding"]
  },
  input: SkipOnboardingIntegrationInputSchema,
  output: SkipOnboardingIntegrationOutputSchema,
  pagination: "none",
  async: "sync"
});
var SkipOnboardingGithubAppInstallationInputSchema = z26.object({});
var SkipOnboardingGithubAppInstallationOutputSchema = z26.object({
  skipped: z26.literal(true)
});
var skipOnboardingGithubAppInstallation = defineOperation({
  operationId: "onboarding.skipGithubAppInstallation",
  summary: "Skip GitHub App Installation",
  description: "Skip GitHub App installation during onboarding.",
  backend: "api",
  route: {
    method: "POST",
    path: "/onboarding/skip-github-app",
    tags: ["Onboarding"]
  },
  input: SkipOnboardingGithubAppInstallationInputSchema,
  output: SkipOnboardingGithubAppInstallationOutputSchema,
  pagination: "none",
  async: "sync"
});
var SkipOnboardingSampleIssueInputSchema = z26.object({});
var SkipOnboardingSampleIssueOutputSchema = z26.object({
  skipped: z26.literal(true)
});
var skipOnboardingSampleIssue = defineOperation({
  operationId: "onboarding.skipSampleIssue",
  summary: "Skip Test Issue",
  description: "Skip the optional test issue during onboarding.",
  backend: "api",
  route: {
    method: "POST",
    path: "/onboarding/skip-sample-issue",
    tags: ["Onboarding"]
  },
  input: SkipOnboardingSampleIssueInputSchema,
  output: SkipOnboardingSampleIssueOutputSchema,
  pagination: "none",
  async: "sync"
});
var FinishOnboardingInputSchema = z26.object({
  projectId: z26.string().uuid().describe("Project that completed onboarding.")
});
var FinishOnboardingOutputSchema = z26.object({
  completed: z26.boolean()
});
var finishOnboarding = defineOperation({
  operationId: "onboarding.finish",
  description: "Mark onboarding complete when all prerequisites are satisfied.",
  backend: "api",
  route: {
    method: "POST",
    path: "/onboarding/finish",
    tags: ["Onboarding"]
  },
  input: FinishOnboardingInputSchema,
  output: FinishOnboardingOutputSchema,
  pagination: "none",
  async: "sync"
});
var onboardingContract = {
  getState: getOnboardingState.contract,
  skipIntegration: skipOnboardingIntegration.contract,
  skipGithubAppInstallation: skipOnboardingGithubAppInstallation.contract,
  skipSampleIssue: skipOnboardingSampleIssue.contract,
  finish: finishOnboarding.contract
};

// ../public-api-contracts/src/organizations.ts
import { z as z27 } from "zod";
var OrganizationSchema = z27.object({
  id: z27.string().min(1),
  name: z27.string(),
  slug: z27.string(),
  logo: z27.string().nullable().optional()
});
var ListedOrganizationSchema = OrganizationSchema.extend({
  role: OrganizationMembershipRoleSchema.optional()
});
var ListOrganizationsInputSchema = z27.object({});
var ListOrganizationsOutputSchema = z27.object({
  organizations: z27.array(ListedOrganizationSchema).describe("Organizations available to the current credential.")
});
var GetOrganizationInputSchema = z27.object({
  organizationId: z27.string().min(1).describe("Organization ID to fetch.")
});
var GetOrganizationOutputSchema = z27.object({
  organization: OrganizationSchema
});
var UpdateOrganizationInputSchema = z27.object({
  organizationId: z27.string().min(1).describe("Organization ID to update. SDK and CLI callers can auto-fill this before dispatch."),
  name: z27.string().trim().min(1).max(100).describe("New organization name.")
});
var UpdateOrganizationOutputSchema = z27.object({
  organization: OrganizationSchema.describe("Updated organization.")
});
var OrganizationNameSchema = z27.string().trim().min(1, "Name is required").max(100, "Name must be 100 characters or less").regex(/^[\p{L}\p{N} _-]+$/u, "Name can only contain letters, numbers, spaces, hyphens, and underscores");
var CreateOrganizationInputSchema = z27.object({
  name: OrganizationNameSchema.describe("Organization display name.")
});
var CreateOrganizationOutputSchema = z27.object({
  organization: OrganizationSchema
});
var createOrganization = defineOperation({
  operationId: "organizations.create",
  description: "Create an organization for the authenticated user.",
  backend: "api",
  route: {
    method: "POST",
    path: "/organizations",
    tags: ["Organizations"],
    successStatus: 201
  },
  input: CreateOrganizationInputSchema,
  output: CreateOrganizationOutputSchema,
  pagination: "none",
  async: "sync"
});
var listOrganizations = defineOperation({
  operationId: "organizations.list",
  description: "List organizations available to the current credential.",
  backend: "api",
  route: {
    method: "GET",
    path: "/organizations",
    tags: ["Organizations"]
  },
  input: ListOrganizationsInputSchema,
  output: ListOrganizationsOutputSchema,
  pagination: "none",
  async: "sync"
});
var getOrganization = defineOperation({
  operationId: "organizations.get",
  description: "Get one organization by ID.",
  backend: "api",
  route: {
    method: "GET",
    path: "/organizations/{organizationId}",
    tags: ["Organizations"]
  },
  input: GetOrganizationInputSchema,
  output: GetOrganizationOutputSchema,
  pagination: "none",
  async: "sync"
});
var updateOrganization = defineOperation({
  operationId: "organizations.update",
  description: "Update one organization.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/organizations/{organizationId}",
    tags: ["Organizations"]
  },
  input: UpdateOrganizationInputSchema,
  output: UpdateOrganizationOutputSchema,
  pagination: "none",
  async: "sync",
  examples: [
    {
      name: "rename-organization",
      input: {
        organizationId: "organization-123",
        name: "Observed Platform"
      },
      output: {
        organization: {
          id: "organization-123",
          name: "Observed Platform",
          slug: "acme",
          logo: null
        }
      }
    }
  ]
});
var organizationsContract = {
  list: listOrganizations.contract,
  get: getOrganization.contract,
  create: createOrganization.contract,
  update: updateOrganization.contract
};

// ../public-api-contracts/src/project.ts
import { z as z28 } from "zod";
var ProjectRegionSchema = z28.enum([
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
  "eu-central-1",
  "eu-central-2",
  "eu-north-1",
  "eu-south-1",
  "eu-south-2",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3"
]);
var ProjectSchema = z28.object({
  id: z28.string().uuid(),
  organizationId: z28.string().min(1),
  name: z28.string(),
  region: ProjectRegionSchema
});
var ListProjectsInputSchema = z28.object({
  organizationId: z28.string().min(1).optional().describe("Organization to list projects for. Auto-filled from CLI and SDK context when omitted.")
});
var ListProjectsOutputSchema = z28.object({
  projects: z28.array(ProjectSchema).describe("Projects visible within the selected organization.")
});
var GetProjectInputSchema = z28.object({
  projectId: z28.string().uuid().describe("Project ID to fetch.")
});
var ProjectNameSchema = z28.string().trim().min(1, "Name is required").max(100, "Name must be 100 characters or less").regex(/^[\p{L}\p{N} _-]+$/u, "Name can only contain letters, numbers, spaces, hyphens, and underscores");
var CreateProjectInputSchema = z28.object({
  organizationId: z28.string().min(1).optional().describe("Organization to create the project under. Auto-filled from CLI and SDK context when omitted."),
  name: ProjectNameSchema.describe("Project name."),
  region: ProjectRegionSchema.optional().default("us-west-2").describe("AWS region where the new project should be created.")
});
var CreateProjectOutputSchema = z28.object({
  project: ProjectSchema
});
var GetProjectDetailsOutputSchema = z28.object({
  project: ProjectSchema
});
var listProjects = defineOperation({
  operationId: "projects.list",
  description: "List projects in an organization.",
  backend: "api",
  route: {
    method: "GET",
    path: "/projects",
    tags: ["Projects"]
  },
  input: ListProjectsInputSchema,
  output: ListProjectsOutputSchema,
  pagination: "none",
  async: "sync"
});
var getProject = defineOperation({
  operationId: "projects.get",
  description: "Get one project by ID.",
  backend: "api",
  route: {
    method: "GET",
    path: "/projects/{projectId}",
    tags: ["Projects"]
  },
  input: GetProjectInputSchema,
  output: GetProjectDetailsOutputSchema,
  pagination: "none",
  async: "sync"
});
var createProject = defineOperation({
  operationId: "projects.create",
  description: "Create one project in an organization.",
  backend: "api",
  route: {
    method: "POST",
    path: "/projects",
    successStatus: 201,
    tags: ["Projects"]
  },
  input: CreateProjectInputSchema,
  output: CreateProjectOutputSchema,
  pagination: "none",
  async: "sync"
});
var UpdateProjectInputSchema = z28.object({
  projectId: z28.string().uuid().describe("Project ID to update."),
  name: ProjectNameSchema.optional().describe("New project name.")
});
var UpdateProjectOutputSchema = z28.object({
  project: ProjectSchema
});
var updateProject = defineOperation({
  operationId: "projects.update",
  description: "Update (rename) one project by ID. User credentials require the `settings:write` organization permission (admin or owner role).",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/projects/{projectId}",
    tags: ["Projects"]
  },
  input: UpdateProjectInputSchema,
  output: UpdateProjectOutputSchema,
  pagination: "none",
  async: "sync"
});
var DeleteProjectInputSchema = z28.object({
  projectId: z28.string().uuid().describe("Project ID to delete.")
});
var DeleteProjectOutputSchema = z28.void();
var deleteProject = defineOperation({
  operationId: "projects.delete",
  description: "Delete one project by ID. User credentials require the `settings:write` organization permission (admin or owner role).",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/projects/{projectId}",
    successStatus: 204,
    tags: ["Projects"]
  },
  input: DeleteProjectInputSchema,
  output: DeleteProjectOutputSchema,
  pagination: "none",
  async: "sync"
});
var projectsContract = {
  list: listProjects.contract,
  get: getProject.contract,
  create: createProject.contract,
  update: updateProject.contract,
  delete: deleteProject.contract
};

// ../public-api-contracts/src/pull-requests.ts
import { z as z29 } from "zod";
var PullRequestStatusSchema = z29.enum(["open", "merged", "closed"]);
var PullRequestReviewStateSchema = z29.enum([
  "review_required",
  "approved",
  "changes_requested"
]);
var PullRequestChecksStateSchema = z29.enum([
  "passing",
  "failing",
  "pending"
]);
var PullRequestSchema = z29.object({
  id: z29.string().uuid(),
  projectId: z29.string().uuid(),
  repositoryFullName: z29.string(),
  pullRequestId: z29.string().describe("Provider-native pull request identifier (GitHub PR number or Bitbucket PR id), serialized as a string."),
  githubPullRequestId: z29.number().int().describe("Deprecated: use pullRequestId. Numeric form of the provider-native pull request identifier; kept for backward compatibility."),
  title: z29.string().nullable(),
  url: z29.string().nullable(),
  status: PullRequestStatusSchema.nullable(),
  reviewState: PullRequestReviewStateSchema.nullable(),
  checksState: PullRequestChecksStateSchema.nullable(),
  requestedByUserId: z29.string().nullable(),
  authorLogin: z29.string().nullable().describe("Forge login that authored the pull request (often the Sazabi app identity)."),
  githubAuthorLogin: z29.string().nullable().describe("Deprecated: use authorLogin. Kept for backward compatibility."),
  threadId: z29.string().uuid().nullable(),
  runId: z29.string().uuid().nullable(),
  createdAt: z29.string().datetime(),
  mergedAt: z29.string().datetime().nullable(),
  closedAt: z29.string().datetime().nullable()
});
var ListPullRequestsInputSchema = z29.object({
  projectId: z29.string().uuid().optional().describe("Project to list pull requests for. Auto-filled from CLI and SDK context when omitted."),
  limit: z29.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of pull requests to return per page."),
  cursor: z29.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),
  status: PullRequestStatusSchema.optional().describe("Filter by pull request status (open, merged, or closed)."),
  repositoryFullName: z29.string().trim().optional().describe("Filter by repository full name, for example owner/repo. Case-insensitive."),
  requestedByUserId: z29.string().trim().optional().describe("Filter by the Sazabi user who requested the pull request. Pass 'me' to filter to the authenticated user.")
});
var ListPullRequestsOutputSchema = z29.object({
  pullRequests: z29.array(PullRequestSchema),
  nextCursor: z29.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var listPullRequests = defineOperation({
  operationId: "pullRequests.list",
  description: "List pull requests that Sazabi opened, optionally filtered by status, repository, and requesting user.",
  backend: "api",
  route: { method: "GET", path: "/pull-requests", tags: ["Pull Requests"] },
  input: ListPullRequestsInputSchema,
  output: ListPullRequestsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var pullRequestsContract = {
  list: listPullRequests.contract
};

// ../public-api-contracts/src/recommendations.ts
import { z as z30 } from "zod";
var RecommendationKindSchema = z30.enum([
  "data_source",
  "mcp_connector",
  "sandbox_cli",
  "integration"
]);
var RecommendationStatusSchema = z30.enum(["connected", "recommended"]);
var RecommendationSchema = z30.object({
  kind: RecommendationKindSchema.describe("What the recommendation targets: a data source, MCP connector, sandbox CLI, or integration."),
  targetId: z30.string().describe("Exact catalog id for the kind (data source type, MCP provider id, sandbox CLI preset type, or integration provider id)."),
  status: RecommendationStatusSchema.describe("Resolved live against current connections: connected (already set up) or recommended (suggested, not yet connected)."),
  roiScore: z30.number().int().min(0).max(100).describe("Intrinsic ROI score, 0–100 — a normalized blend of how valuable, how easy to connect, and how proven the item is. A pure function of the item; computed live on read, never stored."),
  priority: z30.number().int().min(1).describe("1-based rank within this list, sorted by roiScore (best first). Items are already returned in priority order; the field lets consumers recover the rank without trusting array position.")
});
var ListRecommendationsInputSchema = z30.object({
  projectId: z30.string().uuid().optional().describe("Project to list recommendations for. Auto-filled from CLI and SDK context when omitted.")
});
var ListRecommendationsOutputSchema = z30.object({
  recommendations: z30.array(RecommendationSchema).describe("The project's configuration recommendations, deduped by (kind, targetId), with status resolved live and each item's ROI score. Returned in priority order (highest roiScore first).")
});
var listRecommendations = defineOperation({
  operationId: "recommendations.list",
  description: "List a project's configuration recommendations (data sources, MCP connectors, sandbox CLIs, and integrations) with each item's live connection status.",
  backend: "api",
  route: {
    method: "GET",
    path: "/recommendations",
    tags: ["Recommendations"]
  },
  input: ListRecommendationsInputSchema,
  output: ListRecommendationsOutputSchema,
  pagination: "none",
  async: "sync"
});

// ../public-api-contracts/src/sandbox-presets.ts
import { z as z31 } from "zod";
var SandboxPresetTypeInfoSchema = z31.object({
  type: z31.string().describe("Preset type identifier."),
  label: z31.string().describe("Human-readable display name."),
  executableNames: z31.array(z31.string()).describe("CLI binary names installed by this preset."),
  envVarKeys: z31.array(z31.string()).describe("Environment variables required for authentication."),
  setupSkill: z31.string().nullable().describe("Markdown setup skill for AI agents. Null when no skill is available.")
});
var ListSandboxPresetTypesInputSchema = z31.object({});
var ListSandboxPresetTypesOutputSchema = z31.object({
  types: z31.array(SandboxPresetTypeInfoSchema)
});
var listSandboxPresetTypes = defineOperation({
  operationId: "sandboxPresets.listTypes",
  description: "List all supported sandbox CLI types with their environment variable requirements and setup skills.",
  backend: "api",
  route: {
    method: "GET",
    path: "/sandbox-presets/types",
    tags: ["Sandbox Presets"]
  },
  input: ListSandboxPresetTypesInputSchema,
  output: ListSandboxPresetTypesOutputSchema,
  pagination: "none",
  async: "sync"
});
var SandboxPresetCredentialSourceSchema = z31.enum([
  "github_app",
  "personal_access_token",
  "stored_credentials"
]);
var SandboxPresetConnectionSchema = z31.object({
  presetType: z31.string().describe("Preset type identifier."),
  credentialSource: SandboxPresetCredentialSourceSchema.describe("Authoritative credential source for the preset."),
  isSystemManaged: z31.boolean().describe("Whether the connection follows an integration lifecycle."),
  fallbackConfigured: z31.boolean().describe("Whether user-provided fallback credentials are stored for this preset."),
  envVarKeys: z31.array(z31.string()).describe("Stored environment variable names. Secret values are omitted.")
});
var ListSandboxPresetConnectionsInputSchema = z31.object({
  projectId: z31.string().uuid().optional().describe("Project to inspect. Required for organization-scoped keys; auto-filled from a project-scoped key when omitted.")
});
var ListSandboxPresetConnectionsOutputSchema = z31.object({
  connections: z31.array(SandboxPresetConnectionSchema)
});
var listSandboxPresetConnections = defineOperation({
  operationId: "sandboxPresets.listConnections",
  description: "List a project's stored and integration-backed sandbox CLI connections without returning secret values.",
  backend: "api",
  route: {
    method: "GET",
    path: "/sandbox-presets/connections",
    tags: ["Sandbox Presets"]
  },
  input: ListSandboxPresetConnectionsInputSchema,
  output: ListSandboxPresetConnectionsOutputSchema,
  pagination: "none",
  async: "sync"
});
var SandboxPresetEnvVarSchema = z31.object({
  key: z31.string().min(1).max(256).regex(/^[A-Za-z_][A-Za-z0-9_]*$/, "Environment variable keys must match /^[A-Za-z_][A-Za-z0-9_]*$/.").describe("Environment variable name (e.g. KUBECONFIG_CONTENTS)."),
  value: z31.string().max(10 * 1024).describe("Secret value. Encrypted at rest; never returned by any API response.")
});
var UpsertSandboxPresetInputSchema = z31.object({
  projectId: z31.string().uuid().optional().describe("Project to configure. Required for organization-scoped keys; auto-filled from a project-scoped key when omitted."),
  presetType: z31.string().min(1).describe("Preset type identifier (e.g. kubectl, aws, github)."),
  environmentVariables: z31.array(SandboxPresetEnvVarSchema).max(100).describe("Full set of env vars for this preset. Replaces any previously stored values for the preset.")
});
var UpsertSandboxPresetOutputSchema = z31.object({
  projectId: z31.string().uuid().describe("Project the preset was written to."),
  presetType: z31.string().describe("Preset type that was upserted."),
  envVarKeys: z31.array(z31.string()).describe("Env var key names now stored for this preset. Values are never returned.")
});
var upsertSandboxPreset = defineOperation({
  operationId: "sandboxPresets.upsertPreset",
  summary: "Upsert CLI Connection",
  description: "Set or replace a project's sandbox CLI connection environment variables (e.g. the kubectl CLI's KUBECONFIG_CONTENTS). Values are encrypted server-side and never returned. Requires a secret key scoped to the target project's organization.",
  backend: "api",
  route: {
    method: "POST",
    path: "/sandbox-presets/config",
    successStatus: 200,
    tags: ["Sandbox Presets"]
  },
  input: UpsertSandboxPresetInputSchema,
  output: UpsertSandboxPresetOutputSchema,
  pagination: "none",
  async: "sync"
});
var sandboxPresetsContract = {
  listConnections: listSandboxPresetConnections.contract,
  listTypes: listSandboxPresetTypes.contract,
  upsertPreset: upsertSandboxPreset.contract
};

// ../public-api-contracts/src/scripts.ts
import { z as z32 } from "zod";
var ProjectScriptNameSchema = z32.string().min(1).max(64).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/, "Name must start with a letter or digit and contain only letters, digits, underscores, and hyphens (max 64 characters).").describe("Script name. Must be unique within the project among non-deleted scripts.");
var PROJECT_SCRIPT_CONTENT_MAX_BYTES = 1024 * 1024;
var ProjectScriptContentSchema = z32.string().min(1).refine((value) => new TextEncoder().encode(value).length <= PROJECT_SCRIPT_CONTENT_MAX_BYTES, {
  message: `Script content must be at most ${PROJECT_SCRIPT_CONTENT_MAX_BYTES} bytes (1 MiB).`
}).describe("Bash script body materialized as /home/sazabi/scripts/<name>.sh in the sandbox.");
var ProjectScriptSchema = z32.object({
  id: z32.string().uuid(),
  projectId: z32.string().uuid(),
  name: z32.string(),
  description: z32.string().nullable(),
  contentHash: z32.string().describe("sha256 hex digest of the script content."),
  createdAt: z32.string().datetime(),
  updatedAt: z32.string().datetime()
});
var ProjectScriptDetailSchema = ProjectScriptSchema.extend({
  content: ProjectScriptContentSchema
});
var ListProjectScriptsInputSchema = z32.object({
  projectId: z32.string().uuid().optional().describe("Project to list scripts for. Auto-filled from CLI and SDK context when omitted."),
  search: z32.string().optional().describe("Case-insensitive partial match on script name."),
  cursor: z32.string().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),
  limit: z32.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of scripts to return per page.")
});
var ListProjectScriptsOutputSchema = z32.object({
  scripts: z32.array(ProjectScriptSchema),
  nextCursor: z32.string().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var GetProjectScriptInputSchema = z32.object({
  name: ProjectScriptNameSchema.describe("Script name to fetch."),
  projectId: z32.string().uuid().optional().describe("Project that owns the script. Auto-filled from CLI and SDK context when omitted.")
});
var GetProjectScriptOutputSchema = z32.object({
  script: ProjectScriptDetailSchema
});
var CreateProjectScriptInputSchema = z32.object({
  projectId: z32.string().uuid().optional().describe("Project that owns the script. Auto-filled from CLI and SDK context when omitted."),
  name: ProjectScriptNameSchema.describe("Script name. Must be unique within the project among non-deleted scripts."),
  content: ProjectScriptContentSchema,
  description: z32.string().max(500).nullable().optional().describe("Optional human-readable description.")
});
var CreateProjectScriptOutputSchema = z32.object({
  script: ProjectScriptDetailSchema
});
var UpdateProjectScriptInputSchema = z32.object({
  name: ProjectScriptNameSchema.describe("Script to update."),
  projectId: z32.string().uuid().optional().describe("Project that owns the script. Auto-filled from CLI and SDK context when omitted."),
  content: ProjectScriptContentSchema.optional().describe("New script body. Omit to leave content unchanged."),
  description: z32.string().max(500).nullable().optional().describe("New description, or null to clear it. Omit to leave unchanged.")
});
var UpdateProjectScriptOutputSchema = z32.object({
  script: ProjectScriptDetailSchema
});
var DeleteProjectScriptInputSchema = z32.object({
  name: ProjectScriptNameSchema.describe("Script to delete."),
  projectId: z32.string().uuid().optional().describe("Project that owns the script. Auto-filled from CLI and SDK context when omitted.")
});
var DeleteProjectScriptOutputSchema = z32.object({
  deleted: z32.boolean()
});
var listProjectScripts = defineOperation({
  operationId: "scripts.list",
  description: "List durable bash scripts stored for a project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/scripts",
    tags: ["Scripts"]
  },
  input: ListProjectScriptsInputSchema,
  output: ListProjectScriptsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var getProjectScript = defineOperation({
  operationId: "scripts.get",
  description: "Get a single project script by name, including its body.",
  backend: "api",
  route: {
    method: "GET",
    path: "/scripts/{name}",
    tags: ["Scripts"]
  },
  input: GetProjectScriptInputSchema,
  output: GetProjectScriptOutputSchema,
  pagination: "none",
  async: "sync"
});
var createProjectScript = defineOperation({
  operationId: "scripts.create",
  description: "Create a durable bash script for a project.",
  backend: "api",
  route: {
    method: "POST",
    path: "/scripts",
    successStatus: 201,
    tags: ["Scripts"]
  },
  input: CreateProjectScriptInputSchema,
  output: CreateProjectScriptOutputSchema,
  pagination: "none",
  async: "sync"
});
var updateProjectScript = defineOperation({
  operationId: "scripts.update",
  description: "Update a project script's body and/or description.",
  backend: "api",
  route: {
    method: "PATCH",
    path: "/scripts/{name}",
    tags: ["Scripts"]
  },
  input: UpdateProjectScriptInputSchema,
  output: UpdateProjectScriptOutputSchema,
  pagination: "none",
  async: "sync"
});
var deleteProjectScript = defineOperation({
  operationId: "scripts.delete",
  description: "Soft-delete a project script by name.",
  backend: "api",
  route: {
    method: "DELETE",
    path: "/scripts/{name}",
    successStatus: 204,
    tags: ["Scripts"]
  },
  input: DeleteProjectScriptInputSchema,
  output: DeleteProjectScriptOutputSchema,
  pagination: "none",
  async: "sync"
});
var scriptsContract = {
  list: listProjectScripts.contract,
  get: getProjectScript.contract,
  create: createProjectScript.contract,
  update: updateProjectScript.contract,
  delete: deleteProjectScript.contract
};

// ../public-api-contracts/src/search.ts
import { z as z33 } from "zod";
var SearchInputSchema = z33.object({
  projectId: z33.string().uuid().optional().describe("Project to search within. Auto-filled from CLI and SDK context when omitted."),
  query: z33.string().trim().min(1, "Query must be at least 1 character").max(500, "Query must be at most 500 characters"),
  limit: z33.coerce.number().min(1).max(100).default(20).describe("Maximum number of search results to return."),
  page: z33.coerce.number().min(1).default(1).describe("One-based page number.")
});
var SearchThreadsInputSchema = SearchInputSchema.extend({
  status: z33.enum(["regular", "archived"]).optional().describe("Optional thread status filter.")
});
var SearchMessagesInputSchema = SearchInputSchema.extend({
  threadId: z33.string().uuid().optional().describe("Optional thread restriction for message search."),
  role: z33.enum(["user", "assistant"]).optional().describe("Optional message role filter.")
});
var SearchThreadsOutputSchema = z33.object({
  threads: z33.array(z33.object({
    id: z33.string().uuid(),
    projectId: z33.string().uuid().optional(),
    title: z33.string(),
    status: z33.enum(["regular", "archived"]),
    labels: z33.array(z33.string()),
    createdAt: z33.string().datetime(),
    updatedAt: z33.string().datetime(),
    highlights: z33.array(z33.string()),
    score: z33.number().optional()
  })),
  pagination: z33.object({
    page: z33.number(),
    limit: z33.number(),
    totalResults: z33.number(),
    totalPages: z33.number()
  }).describe("Page-based pagination metadata for the current search result.")
});
var SearchMessagesOutputSchema = z33.object({
  messages: z33.array(z33.object({
    id: z33.string().uuid(),
    threadId: z33.string().uuid(),
    threadTitle: z33.string(),
    role: z33.enum(["user", "assistant"]),
    content: z33.string(),
    createdAt: z33.string().datetime(),
    updatedAt: z33.string().datetime(),
    highlights: z33.array(z33.string()),
    score: z33.number().optional()
  })),
  pagination: z33.object({
    page: z33.number(),
    limit: z33.number(),
    totalResults: z33.number(),
    totalPages: z33.number()
  }).describe("Page-based pagination metadata for the current search result.")
});
var searchThreads = defineOperation({
  operationId: "search.threads",
  description: "Search threads within one project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/search/threads",
    tags: ["Search"]
  },
  input: SearchThreadsInputSchema,
  output: SearchThreadsOutputSchema,
  pagination: "page",
  async: "sync",
  examples: [
    {
      name: "search-open-incidents",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111",
        query: "payment timeout",
        status: "regular",
        limit: 10,
        page: 1
      },
      output: {
        threads: [
          {
            id: "22222222-2222-4222-8222-222222222222",
            projectId: "11111111-1111-4111-8111-111111111111",
            title: "Payment timeout in us-west-2",
            status: "regular",
            labels: ["payments", "timeout"],
            createdAt: "2026-01-01T00:00:00.000Z",
            updatedAt: "2026-01-02T00:00:00.000Z",
            highlights: ["payment timeout"],
            score: 123.45
          }
        ],
        pagination: {
          page: 1,
          limit: 10,
          totalResults: 1,
          totalPages: 1
        }
      }
    }
  ]
});
var searchMessages = defineOperation({
  operationId: "search.messages",
  description: "Search messages within one project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/search/messages",
    tags: ["Search"]
  },
  input: SearchMessagesInputSchema,
  output: SearchMessagesOutputSchema,
  pagination: "page",
  async: "sync",
  examples: [
    {
      name: "search-assistant-messages",
      input: {
        projectId: "11111111-1111-4111-8111-111111111111",
        query: "rollback",
        role: "assistant",
        limit: 10,
        page: 1
      },
      output: {
        messages: [
          {
            id: "33333333-3333-4333-8333-333333333333",
            threadId: "22222222-2222-4222-8222-222222222222",
            threadTitle: "Deployment rollback guidance",
            role: "assistant",
            content: "Rollback the ingestion deployment and confirm queue depth.",
            createdAt: "2026-01-02T00:00:00.000Z",
            updatedAt: "2026-01-02T00:00:00.000Z",
            highlights: ["Rollback the ingestion deployment"],
            score: 98.76
          }
        ],
        pagination: {
          page: 1,
          limit: 10,
          totalResults: 1,
          totalPages: 1
        }
      }
    }
  ]
});
var searchContract = {
  threads: searchThreads.contract,
  messages: searchMessages.contract
};

// ../public-api-contracts/src/status-components.ts
import { z as z34 } from "zod";
var StatusComponentSchema = z34.object({
  id: z34.string().uuid(),
  projectId: z34.string().uuid(),
  name: z34.string(),
  description: z34.string().nullable(),
  currentStatus: z34.enum(["operational", "degraded", "outage"]).describe("Current health status of this component."),
  firstSeenAt: z34.string().datetime(),
  lastSeenAt: z34.string().datetime(),
  deletedAt: z34.string().datetime().nullable().describe("Timestamp when this component was retired, if any.")
});
var ListStatusComponentsInputSchema = z34.object({
  projectId: z34.string().uuid().optional().describe("Project to list status components for. Auto-filled from CLI and SDK context when omitted."),
  limit: z34.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of components to return per page."),
  cursor: z34.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),
  includeDeleted: z34.union([z34.boolean(), z34.stringbool()]).default(false).describe("When true, include retired and merged components.")
});
var ListStatusComponentsOutputSchema = z34.object({
  statusComponents: z34.array(StatusComponentSchema),
  nextCursor: z34.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var GetStatusComponentInputSchema = z34.object({
  componentId: z34.string().uuid().describe("Status component ID to retrieve.")
});
var GetStatusComponentOutputSchema = z34.object({
  statusComponent: StatusComponentSchema
});
var RegisterStatusComponentInputSchema = z34.object({
  projectId: z34.string().uuid().optional().describe("Project to register the status component in. Auto-filled from CLI and SDK context when omitted."),
  name: z34.string().trim().min(1, "Name is required").describe("Evidence-backed component name to register."),
  description: z34.string().trim().min(1, "Description cannot be empty").optional().describe("Optional component description."),
  requestId: z34.string().uuid().optional().describe("Project-scoped idempotency key. Reuse only for an identical registration request.")
});
var RegisterStatusComponentOutputSchema = z34.object({
  statusComponent: StatusComponentSchema
});
var DeregisterStatusComponentInputSchema = z34.object({
  componentId: z34.string().uuid().describe("Status component ID to deregister."),
  reason: z34.string().trim().min(1, "Reason cannot be empty").optional().describe("Optional reason for audit logging.")
});
var RetirementDependentIdsSchema = z34.object({
  openIssueIds: z34.array(z34.string().uuid()),
  activeComponentIssueIds: z34.array(z34.string().uuid()),
  automationBindingIds: z34.array(z34.string().uuid()),
  notificationRuleIds: z34.array(z34.string().uuid()),
  dataSourceMappingIds: z34.array(z34.string().uuid()),
  observationIds: z34.array(z34.string().uuid()),
  relationshipIds: z34.array(z34.string().uuid()),
  recommendationScopeIds: z34.array(z34.string().uuid()),
  externalIncidentIds: z34.array(z34.string().uuid()),
  authorizedDeliveryIds: z34.array(z34.string().uuid()),
  authorizedAutomationRunIds: z34.array(z34.string().uuid())
});
var ComponentRetirementPreviewSchema = z34.object({
  requestedComponentId: z34.string().uuid(),
  canonicalComponentId: z34.string().uuid(),
  canonicalComponentName: z34.string(),
  lifecycle: z34.enum(["active", "retired"]),
  affectedComponentIds: z34.array(z34.string().uuid()),
  componentRevisions: z34.record(z34.string().uuid(), z34.number().int().nonnegative()),
  requiresCanonicalGroupConfirmation: z34.boolean(),
  recommendationScopeEnabled: z34.literal(false),
  dependents: RetirementDependentIdsSchema,
  counts: z34.record(z34.string(), z34.number().int().nonnegative())
});
var DeregisterStatusComponentOutputSchema = z34.discriminatedUnion("status", [
  z34.object({
    status: z34.literal("observation_withdrawn"),
    componentId: z34.string().uuid(),
    sourceType: z34.literal("secret_key"),
    withdrawn: z34.boolean()
  }),
  z34.object({
    status: z34.literal("retirement_confirmation_required"),
    preview: ComponentRetirementPreviewSchema
  })
]);
var listStatusComponents = defineOperation({
  operationId: "statusComponents.list",
  description: "List status page components in a project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/status-components",
    tags: ["Status Components"]
  },
  input: ListStatusComponentsInputSchema,
  output: ListStatusComponentsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var getStatusComponent = defineOperation({
  operationId: "statusComponents.get",
  description: "Get a single status component by ID.",
  backend: "api",
  route: {
    method: "GET",
    path: "/status-components/{componentId}",
    tags: ["Status Components"]
  },
  input: GetStatusComponentInputSchema,
  output: GetStatusComponentOutputSchema,
  pagination: "none",
  async: "sync"
});
var registerStatusComponent = defineOperation({
  operationId: "statusComponents.register",
  description: "Register a status page component in a project, or refresh an existing active component with the same name.",
  backend: "api",
  route: {
    method: "POST",
    path: "/status-components",
    tags: ["Status Components"]
  },
  input: RegisterStatusComponentInputSchema,
  output: RegisterStatusComponentOutputSchema,
  pagination: "none",
  async: "sync"
});
var deregisterStatusComponent = defineOperation({
  operationId: "statusComponents.deregister",
  description: "Withdraw this credential's component observation, or return a retirement preview for a human caller.",
  backend: "api",
  route: {
    method: "POST",
    path: "/status-components/{componentId}/deregister",
    tags: ["Status Components"]
  },
  input: DeregisterStatusComponentInputSchema,
  output: DeregisterStatusComponentOutputSchema,
  pagination: "none",
  async: "sync"
});
var StatusIncidentSeveritySchema = z34.enum(["degraded", "outage"]).describe("Severity of a status-page incident. 'outage' marks the component down; 'degraded' marks partial impact.");
var StatusIncidentSchema = z34.object({
  id: z34.string().uuid(),
  componentId: z34.string().uuid(),
  projectId: z34.string().uuid(),
  severity: StatusIncidentSeveritySchema,
  summary: z34.string().describe("Human-readable summary of the status-page issue."),
  startedAt: z34.string().datetime().describe("When the incident began affecting the component."),
  resolvedAt: z34.string().datetime().nullable().describe("When the incident was resolved, or null while ongoing.")
});
var ListStatusIncidentsInputSchema = z34.object({
  projectId: z34.string().uuid().optional().describe("Project to list status-page issues for. Auto-filled from CLI and SDK context when omitted."),
  componentId: z34.string().uuid().optional().describe("Restrict results to a single component."),
  activeOnly: z34.union([z34.boolean(), z34.stringbool()]).default(false).describe("When true, return only unresolved (ongoing) issues."),
  limit: z34.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of issues to return per page."),
  cursor: z34.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")
});
var ListStatusIncidentsOutputSchema = z34.object({
  incidents: z34.array(StatusIncidentSchema),
  nextCursor: z34.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")
});
var StatusTimelineEntrySchema = z34.object({
  timestamp: z34.string().datetime(),
  status: z34.enum(["operational", "degraded", "outage", "unknown"]).describe("Worst component status observed during this timeline bucket.")
});
var GetStatusTimelineInputSchema = z34.object({
  componentId: z34.string().uuid().describe("Status component to build the timeline for."),
  windowStart: z34.string().datetime({ offset: true }).optional().describe("Start of the timeline window. Defaults to 7 days before windowEnd."),
  windowEnd: z34.string().datetime({ offset: true }).optional().describe("End of the timeline window. Defaults to now.")
});
var GetStatusTimelineOutputSchema = z34.object({
  componentId: z34.string().uuid(),
  windowStart: z34.string().datetime(),
  windowEnd: z34.string().datetime(),
  timeline: z34.array(StatusTimelineEntrySchema),
  incidents: z34.array(StatusIncidentSchema)
});
var listStatusIncidents = defineOperation({
  operationId: "statusComponents.incidents.list",
  description: "List status-page issues in a project.",
  backend: "api",
  route: {
    method: "GET",
    path: "/status-incidents",
    tags: ["Status Components"]
  },
  input: ListStatusIncidentsInputSchema,
  output: ListStatusIncidentsOutputSchema,
  pagination: "cursor",
  async: "sync"
});
var getStatusTimeline = defineOperation({
  operationId: "statusComponents.timeline",
  description: "Get the dense status timeline and incidents for a component over a time window.",
  backend: "api",
  route: {
    method: "GET",
    path: "/status-components/{componentId}/timeline",
    tags: ["Status Components"]
  },
  input: GetStatusTimelineInputSchema,
  output: GetStatusTimelineOutputSchema,
  pagination: "none",
  async: "sync"
});
var statusComponentsContract = {
  list: listStatusComponents.contract,
  get: getStatusComponent.contract,
  register: registerStatusComponent.contract,
  deregister: deregisterStatusComponent.contract,
  incidents: {
    list: listStatusIncidents.contract
  },
  timeline: getStatusTimeline.contract
};

// ../task-checklist/src/index.ts
var TASK_CATEGORIES = ["onboarding", "setup"];

// ../public-api-contracts/src/tasks.ts
import { z as z35 } from "zod";
var TaskCategorySchema = z35.enum(TASK_CATEGORIES);
var TaskSchema2 = z35.object({
  id: z35.string().describe("Unique task identifier (e.g. install_github_app)."),
  label: z35.string().describe("Short human-readable task name."),
  description: z35.string().describe("Explanation of what needs to be completed to satisfy this task."),
  instructions: z35.string().describe("Step-by-step instructions for completing this task."),
  completed: z35.boolean().describe("Whether the task has been completed."),
  completedAt: z35.string().datetime().nullable().describe("ISO 8601 timestamp of when the task was completed, or null."),
  category: TaskCategorySchema.describe("Task category: onboarding (core setup steps) or setup (additional configuration).")
});
var ListTasksInputSchema = z35.object({
  projectId: z35.string().uuid().optional().describe("Project to list tasks for. Auto-filled from CLI and SDK context when omitted.")
});
var ListTasksOutputSchema = z35.object({
  tasks: z35.array(TaskSchema2).describe("All onboarding and setup tasks with their current completion status.")
});
var listTasks = defineOperation({
  operationId: "tasks.list",
  description: "List all onboarding and setup tasks for a project, including their current completion status and a description of what is required to complete each task.",
  backend: "api",
  route: {
    method: "GET",
    path: "/tasks",
    tags: ["Tasks"]
  },
  input: ListTasksInputSchema,
  output: ListTasksOutputSchema,
  pagination: "none",
  async: "sync"
});

// ../public-api-contracts/src/contract.ts
var publicApiContract = {
  me: me.contract,
  automations: {
    list: listAutomations.contract,
    get: getAutomation.contract,
    create: createAutomation.contract,
    update: updateAutomation.contract,
    enable: enableAutomation.contract,
    disable: disableAutomation.contract,
    runs: {
      list: listAutomationRuns.contract,
      get: getAutomationRun.contract,
      logs: getAutomationRunLogs.contract
    }
  },
  logs: {
    query: queryLogs.contract,
    schema: logsSchema.contract,
    volume: logsVolume.contract,
    patterns: logsPatterns.contract,
    nativeQuery: logsNativeQuery.contract,
    searchNatural: logsSearchNatural.contract
  },
  dataSources: {
    listTypes: listDataSourceTypes.contract,
    listInstances: listDataSourceInstances.contract,
    createInstance: createDataSourceInstance.contract,
    getInstance: getDataSourceInstance.contract,
    updateInstance: updateDataSourceInstance.contract,
    deleteInstance: deleteDataSourceInstance.contract,
    listStreams: listDataSourceStreams.contract,
    createStream: createDataSourceStream.contract,
    getStream: getDataSourceStream.contract,
    updateStream: updateDataSourceStream.contract,
    deleteStream: deleteDataSourceStream.contract
  },
  integrations: {
    listProviders: listIntegrationProviders.contract,
    listConnections: listIntegrationConnections.contract,
    getConnection: getIntegrationConnection.contract
  },
  notificationChannels: {
    getProject: getProjectNotificationChannels.contract
  },
  notificationDeliveryRules: {
    list: listDeliveryRules.contract,
    options: getDeliveryRuleOptions.contract,
    create: createDeliveryRule.contract,
    update: updateDeliveryRule.contract,
    delete: deleteDeliveryRule.contract
  },
  mcpConnectors: {
    listProviders: listMcpProviders2.contract,
    list: listMcpConnectors.contract,
    get: getMcpConnector.contract,
    details: getMcpConnectorDetails.contract
  },
  sandboxPresets: {
    listConnections: listSandboxPresetConnections.contract,
    listTypes: listSandboxPresetTypes.contract,
    upsertPreset: upsertSandboxPreset.contract
  },
  scripts: {
    list: listProjectScripts.contract,
    get: getProjectScript.contract,
    create: createProjectScript.contract,
    update: updateProjectScript.contract,
    delete: deleteProjectScript.contract
  },
  memory: {
    put: putProjectMemory.contract,
    get: getProjectMemory.contract,
    list: listProjectMemory.contract,
    search: searchProjectMemory.contract,
    delete: deleteProjectMemory.contract
  },
  onboarding: {
    getState: getOnboardingState.contract,
    skipIntegration: skipOnboardingIntegration.contract,
    skipGithubAppInstallation: skipOnboardingGithubAppInstallation.contract,
    skipSampleIssue: skipOnboardingSampleIssue.contract,
    finish: finishOnboarding.contract
  },
  organizations: {
    list: listOrganizations.contract,
    get: getOrganization.contract,
    create: createOrganization.contract,
    update: updateOrganization.contract
  },
  members: {
    list: listMembers.contract,
    updateRole: updateMemberRole.contract,
    remove: removeMember.contract
  },
  publicKeys: {
    list: listPublicKeys.contract,
    get: getPublicKey.contract,
    ensureLogForwarding: ensureLogForwardingPublicKey.contract,
    update: updatePublicKey.contract,
    deactivate: deactivatePublicKey.contract
  },
  secretKeys: {
    list: listSecretKeys.contract,
    get: getSecretKey.contract,
    create: createSecretKey.contract,
    update: updateSecretKey.contract,
    delete: deleteSecretKey.contract
  },
  projects: {
    list: listProjects.contract,
    get: getProject.contract,
    create: createProject.contract,
    update: updateProject.contract,
    delete: deleteProject.contract
  },
  search: {
    threads: searchThreads.contract,
    messages: searchMessages.contract
  },
  messages: {
    list: listMessages.contract,
    append: appendMessage.contract
  },
  threads: {
    list: listThreads.contract,
    get: getThread.contract,
    getStatus: getThreadStatus.contract,
    stop: stopThread.contract,
    create: createThread.contract,
    update: updateThread.contract,
    fork: forkThread.contract,
    setVisibility: setThreadVisibility.contract,
    createShareLink: createThreadShareLink.contract,
    listShareLinks: listThreadShareLinks.contract,
    revokeShareLink: revokeThreadShareLink.contract
  },
  runs: {
    list: listRuns.contract,
    listForThread: listThreadRuns.contract,
    get: getRun.contract,
    cancel: cancelRun.contract
  },
  pullRequests: {
    list: listPullRequests.contract
  },
  issues: {
    count: countIssues.contract,
    create: createIssue.contract,
    list: listIssues.contract,
    search: searchIssues.contract,
    get: getIssue.contract,
    resolve: resolveIssue.contract,
    ignore: ignoreIssue.contract,
    reopen: reopenIssue.contract,
    reassignAndReopen: reassignAndReopenIssue.contract,
    mute: muteIssue.contract,
    unmute: unmuteIssue.contract
  },
  billing: {
    getSummary: getBillingSummary.contract,
    getUsage: getBillingUsage.contract,
    listTransactions: listBillingTransactions.contract
  },
  tasks: {
    list: listTasks.contract
  },
  recommendations: {
    list: listRecommendations.contract
  },
  statusComponents: {
    list: listStatusComponents.contract,
    get: getStatusComponent.contract,
    register: registerStatusComponent.contract,
    deregister: deregisterStatusComponent.contract,
    incidents: {
      list: listStatusIncidents.contract
    },
    timeline: getStatusTimeline.contract
  }
};
// src/agent-stream-transports.ts
var DEFAULT_API_BASE_URL = "https://api.sazabi.com";
var CLIENT_SOURCE_HEADER = "x-sazabi-client-source";
var createAgentStreamTransports = (options) => {
  return {
    streamRun: async (input) => {
      return openAgentEventStream({
        options,
        path: `/runs/${encodeURIComponent(input.runId)}/stream`,
        cursor: input.cursor,
        signal: input.signal
      });
    },
    streamThread: async (input) => {
      return openAgentEventStream({
        options,
        path: `/threads/${encodeURIComponent(input.threadId)}/stream`,
        cursor: input.cursor,
        signal: input.signal
      });
    }
  };
};
var openAgentEventStream = async (params) => {
  const fetchImpl = params.options.fetch ?? globalThis.fetch;
  if (!fetchImpl) {
    throw new Error("Fetch transport is not available in this runtime.");
  }
  const token = await params.options.credentialProvider.getToken();
  const url2 = buildAgentStreamUrl(params.options.apiBaseUrl, params.path, params.cursor);
  return createAgentSseStream({
    url: url2,
    token,
    clientSource: params.options.clientSource,
    initialCursor: params.cursor,
    signal: params.signal,
    fetch: fetchImpl
  });
};
var buildAgentStreamUrl = (apiBaseUrl, path, cursor) => {
  const base = withApiVersion(apiBaseUrl ?? DEFAULT_API_BASE_URL);
  const url2 = new URL(`${base}${path}`);
  if (cursor) {
    url2.searchParams.set(AGENT_STREAM_CURSOR_QUERY_PARAM, cursor);
  }
  return url2.toString();
};
var withApiVersion = (apiBaseUrl) => {
  const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, "");
  return normalizedBaseUrl.endsWith("/v1") ? normalizedBaseUrl : `${normalizedBaseUrl}/v1`;
};
var createAgentSseStream = async (options) => {
  const pendingEvents = [];
  const pendingResolvers = [];
  let finished = false;
  let explicitClose = false;
  let pendingError;
  let latestCursor = options.initialCursor;
  const controller = new AbortController;
  const finish = (error) => {
    if (finished) {
      return;
    }
    finished = true;
    pendingError = error;
    while (pendingResolvers.length > 0) {
      const resolve2 = pendingResolvers.shift();
      resolve2?.({ value: undefined, done: true });
    }
  };
  const pushEvent = (event) => {
    const nextResolver = pendingResolvers.shift();
    if (nextResolver) {
      nextResolver({ value: event, done: false });
      return;
    }
    pendingEvents.push(event);
  };
  const handleFrame = (frame) => {
    if (frame.event === AGENT_STREAM_CONTROL_EVENT) {
      const cursor = parseControlFrameCursor(frame.data);
      if (cursor !== undefined) {
        latestCursor = cursor;
      }
      return;
    }
    if (frame.data === AGENT_STREAM_DONE_SENTINEL) {
      explicitClose = true;
      controller.abort();
      finish();
      return;
    }
    const event = parseAgentStreamEvent(frame.data);
    if (event) {
      pushEvent(event);
    }
  };
  const onExternalAbort = () => {
    explicitClose = true;
    controller.abort();
    finish();
  };
  if (options.signal) {
    if (options.signal.aborted) {
      explicitClose = true;
      controller.abort();
    } else {
      options.signal.addEventListener("abort", onExternalAbort, { once: true });
    }
  }
  const stream = {
    [Symbol.asyncIterator]() {
      return stream;
    },
    get cursor() {
      return latestCursor;
    },
    next: async () => {
      if (pendingEvents.length > 0) {
        return {
          value: pendingEvents.shift(),
          done: false
        };
      }
      if (finished) {
        if (pendingError) {
          throw pendingError;
        }
        return { value: undefined, done: true };
      }
      return new Promise((resolve2) => {
        pendingResolvers.push(resolve2);
      }).then((result) => {
        if (result.done && pendingError) {
          throw pendingError;
        }
        return result;
      });
    },
    return: async () => {
      explicitClose = true;
      controller.abort();
      finish();
      return { value: undefined, done: true };
    },
    throw: async (error) => {
      explicitClose = true;
      controller.abort();
      finish(error instanceof Error ? error : new Error(String(error)));
      throw error;
    },
    close: async () => {
      explicitClose = true;
      controller.abort();
      finish();
    }
  };
  if (explicitClose) {
    finish();
    return stream;
  }
  const response = await options.fetch(options.url, {
    method: AGENT_STREAM_METHOD,
    headers: buildStreamHeaders(options.token, options.clientSource),
    signal: controller.signal
  });
  const isEmptyStream = await assertAgentStreamResponse(response);
  if (isEmptyStream) {
    finish();
  } else {
    readAgentSseFrames(response, handleFrame).then(() => finish()).catch((error) => {
      if (isExpectedAbortError(error) || explicitClose || options.signal?.aborted) {
        finish();
        return;
      }
      finish(toStreamError(error));
    });
  }
  return stream;
};
var buildStreamHeaders = (token, clientSource) => {
  return {
    accept: "text/event-stream",
    authorization: `Bearer ${token}`,
    ...clientSource ? { [CLIENT_SOURCE_HEADER]: clientSource } : {}
  };
};
var assertAgentStreamResponse = async (response) => {
  if (response.status === 204) {
    return true;
  }
  if (response.ok && response.body) {
    return false;
  }
  const errorText = await safeReadResponseText(response);
  if (response.status === 401) {
    throw new Error("Authentication failed. Check your credential.");
  }
  if (response.status === 403) {
    throw new Error(`Forbidden (403): ${errorText || "Credential may not have access to this resource"}`);
  }
  if (response.status === 404) {
    throw new Error(`Not found (404): ${errorText || "Run or thread not found"}`);
  }
  if (response.status === 400) {
    throw new Error(`Invalid stream cursor (400): ${errorText || "The provided cursor was rejected"}`);
  }
  if (response.status >= 400 && response.status < 500 && response.status !== 429) {
    throw new Error(`Client error (${response.status}): ${errorText}`);
  }
  if (!response.body) {
    throw new Error("Agent stream response did not include a body.");
  }
  throw new Error(response.status === 429 ? `Rate limited (429): ${errorText}` : `Server error (${response.status}): ${errorText}`);
};
var readAgentSseFrames = async (response, onFrame) => {
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Agent stream response did not include a body.");
  }
  const decoder = new TextDecoder;
  let buffer = "";
  const parser = createAgentSseParser(onFrame);
  try {
    while (true) {
      const result = await reader.read();
      if (result.done) {
        break;
      }
      buffer += decoder.decode(result.value, { stream: true });
      const lines = buffer.split(/\r\n|\r|\n/);
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        parser.line(line);
      }
    }
    buffer += decoder.decode();
    if (buffer) {
      for (const line of buffer.split(/\r\n|\r|\n/)) {
        parser.line(line);
      }
    }
    parser.flush();
  } finally {
    reader.releaseLock();
  }
};
var createAgentSseParser = (onFrame) => {
  let eventName = "message";
  let dataLines = [];
  const reset = () => {
    eventName = "message";
    dataLines = [];
  };
  const dispatch = () => {
    if (dataLines.length === 0) {
      reset();
      return;
    }
    onFrame({ event: eventName, data: dataLines.join(`
`) });
    reset();
  };
  return {
    line: (line) => {
      if (line === "") {
        dispatch();
        return;
      }
      if (line.startsWith(":")) {
        return;
      }
      const separatorIndex = line.indexOf(":");
      const field = separatorIndex === -1 ? line : line.slice(0, separatorIndex);
      const rawValue = separatorIndex === -1 ? "" : line.slice(separatorIndex + 1);
      const value = rawValue.startsWith(" ") ? rawValue.slice(1) : rawValue;
      if (field === "event") {
        eventName = value || "message";
        return;
      }
      if (field === "data") {
        dataLines.push(value);
      }
    },
    flush: dispatch
  };
};
var parseControlFrameCursor = (data) => {
  try {
    const parsed = AgentStreamControlFrameSchema.safeParse(JSON.parse(data));
    return parsed.success ? parsed.data.streamNextOffset : undefined;
  } catch {
    return;
  }
};
var parseAgentStreamEvent = (data) => {
  try {
    const parsed = PublicAgentStreamEventSchema.safeParse(JSON.parse(data));
    return parsed.success ? parsed.data : undefined;
  } catch {
    return;
  }
};
var safeReadResponseText = async (response) => {
  try {
    return await response.text();
  } catch {
    return "";
  }
};
var isExpectedAbortError = (error) => {
  return error instanceof Error && error.name === "AbortError";
};
var toStreamError = (error) => {
  return error instanceof Error ? error : new Error(String(error));
};

// src/log-transports.ts
import { ORPCError } from "@orpc/client";

// ../tail-ws-contracts/src/index.ts
import { z as z36 } from "zod";
var LogFiltersSchema = z36.object({
  severities: z36.array(z36.string()).optional().describe("Limit results to the listed severities."),
  services: z36.array(z36.string()).optional().describe("Limit results to the listed service names."),
  environments: z36.array(z36.string()).optional().describe("Limit results to the listed deployment environments."),
  searchTerm: z36.string().optional().describe("Case-insensitive substring match against the log body."),
  traceId: z36.string().optional().describe("Limit results to one trace ID.")
});
var WebSocketLogResourceSchema = z36.object({
  service: z36.string(),
  namespace: z36.string(),
  environment: z36.string(),
  host: z36.string(),
  container: z36.string(),
  pod: z36.string()
});
var WebSocketLogEntrySchema = z36.object({
  id: z36.string(),
  timestamp: z36.string().datetime(),
  severity: z36.string(),
  body: z36.string(),
  service: z36.string(),
  traceId: z36.string(),
  spanId: z36.string(),
  attributes: z36.record(z36.string(), z36.string()),
  resource: WebSocketLogResourceSchema
});
var WebSocketLogMessageSchema = z36.object({
  type: z36.literal("logs"),
  timestamp: z36.string().datetime(),
  data: z36.array(WebSocketLogEntrySchema)
});

// src/log-transports.ts
import { z as z37 } from "zod";
var DEFAULT_INTAKE_BASE_URL = "https://{region}.intake.sazabi.com";
var DEFAULT_TAIL_BASE_URL = "https://{region}.tail.sazabi.com";
var TAIL_RECONNECT_BASE_DELAY_MS = 500;
var TAIL_RECONNECT_MAX_DELAY_MS = 5000;
var PUBLIC_KEY_ATTRIBUTE_NAME = "sazabi.public_key";
var SAZABI_INTERNAL_LOG_FORWARDING_SECRET_HEADER = "x-sazabi-internal-log-forwarding-secret";
var SAZABI_INTERNAL_LOG_FORWARDING_SOURCE_HEADER = "x-sazabi-internal-log-forwarding-source";
var normalizeLoopbackHostname = (hostname) => {
  return hostname.startsWith("[") && hostname.endsWith("]") ? hostname.slice(1, -1) : hostname;
};
var isLoopbackHostname = (hostname) => {
  const normalizedHostname = normalizeLoopbackHostname(hostname);
  return normalizedHostname === "localhost" || normalizedHostname === "127.0.0.1" || normalizedHostname === "::1";
};
var TailLogsInputSchema = z37.object({
  projectId: z37.string().uuid().optional().describe("Project to tail logs for. Auto-filled from CLI and SDK context when omitted."),
  filters: LogFiltersSchema.optional().describe("Optional filters applied by the tail SSE service.")
});
var ForwardLogsInputSchema = z37.object({
  publicKey: z37.string().min(1).describe("Public key for intake auth. Create or list one via the public key endpoints."),
  logs: z37.custom((value) => typeof value === "object" && value !== null).describe("OTLP logs export request payload to send to the intake service.")
});
var ForwardLogsOutputSchema = z37.object({
  forwardedCount: z37.number().int().nonnegative().describe("Number of log records accepted by the intake request."),
  failedCount: z37.number().int().nonnegative().describe("Number of log records rejected by the intake request.")
});
var forwardLogsExamples = [
  {
    name: "forward-one-log",
    input: {
      publicKey: "sazabi_public_1234567890abcdef1234567890abcdef",
      logs: {
        resourceLogs: [
          {
            resource: {
              attributes: [
                {
                  key: "service.name",
                  value: { stringValue: "sazabi-cli" }
                },
                {
                  key: "sazabi.public_key",
                  value: {
                    stringValue: "sazabi_public_1234567890abcdef1234567890abcdef"
                  }
                }
              ]
            },
            scopeLogs: [
              {
                scope: {
                  name: "sazabi-cli-forward",
                  version: "1.0.0"
                },
                logRecords: [
                  {
                    severityText: "INFO",
                    body: {
                      stringValue: "Forwarded from the public SDK example."
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    output: {
      forwardedCount: 1,
      failedCount: 0
    }
  }
];
var createLogTransports = (options) => {
  const regionCache = new Map;
  return {
    tail: async (input) => {
      const projectId = await resolveProjectId(options.credentialProvider, input.projectId, "logs.tail");
      const region = await resolveTailRegion(options, regionCache, projectId, input.region, "logs.tail");
      const url2 = buildTailUrl({
        projectId,
        region,
        filters: input.filters,
        apiBaseUrl: options.apiBaseUrl,
        tailBaseUrl: options.tailBaseUrl
      });
      const token = await options.credentialProvider.getToken();
      const fetchImpl = options.fetch ?? globalThis.fetch;
      if (!fetchImpl) {
        throw new Error("Fetch transport is not available in this runtime.");
      }
      return createSseTailStream({
        token,
        url: url2,
        signal: input.signal,
        fetch: fetchImpl
      });
    },
    forward: async (input) => {
      const region = await resolveIntakeRegion(options, regionCache, input.projectId ?? await options.credentialProvider.getProjectId?.(), input.region, "logs.forward");
      const url2 = buildIntakeUrl(region, options.intakeBaseUrl);
      const fetchImpl = options.fetch ?? globalThis.fetch;
      const payload = withPublicKeyAttribute(input.logs, input.publicKey);
      const forwardedCount = countLogRecords(payload);
      await forwardWithRetry(fetchImpl, url2, payload, buildInternalForwardingHeaders(input.sazabiInternalForwarding));
      return {
        forwardedCount,
        failedCount: 0
      };
    }
  };
};
var LOCAL_LIVE_TAIL_PORT = "3010";
var LEGACY_LOCAL_TAIL_PORTS = new Set(["15006", "3010"]);
var buildTailUrl = (options) => {
  const baseUrl = (options.tailBaseUrl ?? resolveDefaultTailBaseUrl({
    region: options.region,
    apiBaseUrl: options.apiBaseUrl
  })).replace("{region}", options.region);
  const url2 = buildTailEndpointUrl(baseUrl);
  url2.searchParams.set("projectId", options.projectId);
  const filters = toTailFiltersQuery(options.filters);
  if (filters) {
    url2.searchParams.set("filters", filters);
  }
  return url2.toString();
};
var resolveDefaultTailBaseUrl = (options) => {
  if (options.apiBaseUrl) {
    try {
      const apiHost = new URL(options.apiBaseUrl).hostname;
      if (apiHost.endsWith(".sazabi.dev")) {
        const domain = apiHost.includes(".staging.") ? "staging.sazabi.dev" : "development.sazabi.dev";
        return `https://${options.region}.tail.${domain}`;
      }
    } catch {}
  }
  return DEFAULT_TAIL_BASE_URL.replace("{region}", options.region);
};
var buildTailEndpointUrl = (tailBaseUrl) => {
  const parsedUrl = (() => {
    try {
      return new URL(tailBaseUrl);
    } catch {
      return null;
    }
  })();
  if (!parsedUrl) {
    throw new Error(`Invalid tail base URL: ${tailBaseUrl}`);
  }
  if (isLoopbackHostname(parsedUrl.hostname)) {
    parsedUrl.protocol = "http:";
    if (!parsedUrl.port || LEGACY_LOCAL_TAIL_PORTS.has(parsedUrl.port)) {
      parsedUrl.port = LOCAL_LIVE_TAIL_PORT;
    }
    parsedUrl.pathname = "/v1/tail";
    parsedUrl.search = "";
    parsedUrl.hash = "";
    return parsedUrl;
  }
  if (parsedUrl.protocol === "ws:" || parsedUrl.protocol === "wss:") {
    parsedUrl.protocol = parsedUrl.protocol === "wss:" ? "https:" : "http:";
  }
  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error(`Invalid tail base URL protocol: ${parsedUrl.protocol}. Expected http:, https:, ws:, or wss:.`);
  }
  parsedUrl.pathname = "/v1/tail";
  parsedUrl.search = "";
  parsedUrl.hash = "";
  return parsedUrl;
};
var toTailFiltersQuery = (filters) => {
  if (!filters) {
    return;
  }
  const filteredEntries = Object.entries(filters).filter(([, value]) => value !== undefined && (!Array.isArray(value) || value.length > 0) && value !== "");
  if (filteredEntries.length === 0) {
    return;
  }
  return JSON.stringify(Object.fromEntries(filteredEntries));
};
var buildIntakeUrl = (region, intakeBaseUrl) => {
  const baseUrl = (intakeBaseUrl ?? DEFAULT_INTAKE_BASE_URL).replace("{region}", region);
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const localIntakeUrl = buildLocalIntakeUrl(normalizedBaseUrl);
  if (localIntakeUrl) {
    return localIntakeUrl;
  }
  const baseDomainMatch = normalizedBaseUrl.match(/^https:\/\/([a-z0-9-]+)\.intake\.([a-z0-9.]+)$/);
  const resolvedBaseUrl = baseDomainMatch ? `https://otlp.${baseDomainMatch[1]}.intake.${baseDomainMatch[2]}` : normalizedBaseUrl;
  return `${resolvedBaseUrl}/v1/logs`;
};
var buildLocalIntakeUrl = (intakeBaseUrl) => {
  const parsedUrl = (() => {
    try {
      return new URL(intakeBaseUrl);
    } catch {
      return null;
    }
  })();
  if (!parsedUrl) {
    return;
  }
  if (!isLoopbackHostname(parsedUrl.hostname)) {
    return;
  }
  parsedUrl.pathname = "/adapters/otlp";
  return parsedUrl.toString();
};
var withPublicKeyAttribute = (payload, publicKey) => {
  const resourceLogs = payload.resourceLogs;
  if (!resourceLogs || resourceLogs.length === 0) {
    return {
      ...payload,
      resourceLogs: [
        {
          resource: {
            attributes: [createPublicKeyAttribute(publicKey)]
          },
          scopeLogs: []
        }
      ]
    };
  }
  return {
    ...payload,
    resourceLogs: resourceLogs.map((resourceLog) => ({
      ...resourceLog,
      resource: {
        ...resourceLog.resource,
        attributes: upsertPublicKeyAttribute(resourceLog.resource?.attributes, publicKey)
      }
    }))
  };
};
var upsertPublicKeyAttribute = (attributes, publicKey) => {
  const nextAttributes = (attributes ?? []).filter((attribute) => attribute?.key !== PUBLIC_KEY_ATTRIBUTE_NAME);
  return [...nextAttributes, createPublicKeyAttribute(publicKey)];
};
var createPublicKeyAttribute = (publicKey) => ({
  key: PUBLIC_KEY_ATTRIBUTE_NAME,
  value: {
    stringValue: publicKey
  }
});
var buildInternalForwardingHeaders = (forwarding) => {
  if (!forwarding?.secret) {
    return {};
  }
  return {
    [SAZABI_INTERNAL_LOG_FORWARDING_SECRET_HEADER]: forwarding.secret,
    ...forwarding.source ? { [SAZABI_INTERNAL_LOG_FORWARDING_SOURCE_HEADER]: forwarding.source } : {}
  };
};
var resolveProjectId = async (credentialProvider, inputProjectId, operationId) => {
  const projectId = inputProjectId ?? await credentialProvider.getProjectId?.();
  if (projectId) {
    return projectId;
  }
  throw createMissingContextError(operationId, "Project ID is required", [
    "projectId"
  ]);
};
var resolveTailRegion = async (options, regionCache, projectId, explicitRegion, _operationId) => {
  const region = explicitRegion ?? await resolveProjectRegion(options, regionCache, projectId);
  return region;
};
var resolveIntakeRegion = async (options, regionCache, projectId, explicitRegion, operationId) => {
  if (explicitRegion) {
    return explicitRegion;
  }
  if (!projectId) {
    throw createMissingContextError(operationId, "Project ID is required", [
      "projectId"
    ]);
  }
  return resolveProjectRegion(options, regionCache, projectId);
};
var resolveProjectRegion = async (options, regionCache, projectId) => {
  const cachedRegion = regionCache.get(projectId);
  if (cachedRegion) {
    return cachedRegion;
  }
  const regionPromise = options.raw.projects.get({ projectId }).then((result) => result.project.region);
  regionCache.set(projectId, regionPromise);
  try {
    return await regionPromise;
  } catch (error) {
    regionCache.delete(projectId);
    throw error;
  }
};
var createSseTailStream = async (options) => {
  const pendingEvents = [];
  const pendingResolvers = [];
  let finished = false;
  let explicitClose = false;
  let pendingError;
  let reconnectAttempt = 0;
  let lastEventId;
  let activeController;
  const finish = (error) => {
    if (finished) {
      return;
    }
    finished = true;
    pendingError = error;
    while (pendingResolvers.length > 0) {
      const resolve2 = pendingResolvers.shift();
      if (resolve2) {
        resolve2({ value: undefined, done: true });
      }
    }
  };
  const pushEvent = (event) => {
    const nextResolver = pendingResolvers.shift();
    if (nextResolver) {
      nextResolver({ value: event, done: false });
      return;
    }
    pendingEvents.push(event);
  };
  const closeActiveRequest = () => {
    activeController?.abort();
  };
  const handleSseEvent = (event) => {
    if (event.event !== "log") {
      if (event.id) {
        lastEventId = event.id;
      }
      return;
    }
    const messages = parseTailLogEvent(event.data);
    for (const message of messages) {
      pushEvent(message);
    }
    if (event.id) {
      lastEventId = event.id;
    }
  };
  const connectAndRead = async (markReady) => {
    let openedOnce = false;
    while (!finished && !explicitClose) {
      const controller = new AbortController;
      const abortActiveController = () => controller.abort();
      activeController = controller;
      let shouldReconnect = false;
      options.signal?.addEventListener("abort", abortActiveController, {
        once: true
      });
      try {
        const response = await options.fetch(withTailCursor(options.url, lastEventId), {
          method: "GET",
          headers: {
            accept: "text/event-stream",
            authorization: `Bearer ${options.token}`
          },
          signal: controller.signal
        });
        await assertTailResponse(response);
        reconnectAttempt = 0;
        openedOnce = true;
        markReady();
        await readTailSseEvents(response, handleSseEvent);
        shouldReconnect = true;
      } catch (error) {
        if (isExpectedAbortError2(error) || options.signal?.aborted) {
          break;
        }
        const tailError = toTailError(error);
        if (!openedOnce || isFatalTailError(tailError)) {
          throw tailError;
        }
        shouldReconnect = true;
      } finally {
        options.signal?.removeEventListener("abort", abortActiveController);
        if (activeController === controller) {
          activeController = undefined;
        }
      }
      if (finished || explicitClose || options.signal?.aborted) {
        break;
      }
      if (!shouldReconnect) {
        continue;
      }
      reconnectAttempt += 1;
      await delay(Math.min(TAIL_RECONNECT_BASE_DELAY_MS * 2 ** (reconnectAttempt - 1), TAIL_RECONNECT_MAX_DELAY_MS), options.signal);
    }
  };
  options.signal?.addEventListener("abort", () => {
    explicitClose = true;
    closeActiveRequest();
    finish();
  }, { once: true });
  if (options.signal?.aborted) {
    explicitClose = true;
    closeActiveRequest();
    finish();
  }
  const ready = new Promise((resolve2, reject) => {
    let settled = false;
    const markReady = () => {
      if (!settled) {
        settled = true;
        resolve2();
      }
    };
    connectAndRead(markReady).catch((error) => {
      const tailError = toTailError(error);
      if (!settled) {
        settled = true;
        reject(tailError);
        return;
      }
      if (!isExpectedAbortError2(error)) {
        finish(tailError);
      }
    });
  });
  await ready;
  const stream = {
    [Symbol.asyncIterator]() {
      return stream;
    },
    next: async () => {
      if (pendingEvents.length > 0) {
        const value = pendingEvents.shift();
        return {
          value,
          done: false
        };
      }
      if (finished) {
        if (pendingError) {
          throw pendingError;
        }
        return {
          value: undefined,
          done: true
        };
      }
      return new Promise((resolve2) => {
        pendingResolvers.push(resolve2);
      }).then((result) => {
        if (result.done && pendingError) {
          throw pendingError;
        }
        return result;
      });
    },
    return: async () => {
      explicitClose = true;
      closeActiveRequest();
      finish();
      return {
        value: undefined,
        done: true
      };
    },
    throw: async (error) => {
      explicitClose = true;
      closeActiveRequest();
      finish(error instanceof Error ? error : new Error(String(error)));
      throw error;
    }
  };
  return stream;
};
var withTailCursor = (url2, cursor) => {
  if (!cursor) {
    return url2;
  }
  const nextUrl = new URL(url2);
  nextUrl.searchParams.set("cursor", cursor);
  return nextUrl.toString();
};
var assertTailResponse = async (response) => {
  if (response.ok && response.body) {
    return;
  }
  const errorText = await response.text();
  if (response.status === 401) {
    throw new Error("Authentication failed. Check your credential.");
  }
  if (response.status === 403) {
    if (/not served by this region/i.test(errorText)) {
      throw new Error(`Wrong region (403): ${errorText || "Project is not served by this region"}`);
    }
    throw new Error(`Forbidden (403): ${errorText || "Credential may not have access to this project"}`);
  }
  if (response.status >= 400 && response.status < 500 && response.status !== 429) {
    throw new Error(`Client error (${response.status}): ${errorText}`);
  }
  if (!response.body) {
    throw new Error("Tail stream response did not include a body.");
  }
  throw new Error(response.status === 429 ? `Rate limited (429): ${errorText}` : `Server error (${response.status}): ${errorText}`);
};
var readTailSseEvents = async (response, onEvent) => {
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Tail stream response did not include a body.");
  }
  const decoder = new TextDecoder;
  let buffer = "";
  const parser = createSseParser(onEvent);
  try {
    while (true) {
      const result = await reader.read();
      if (result.done) {
        break;
      }
      buffer += decoder.decode(result.value, { stream: true });
      const lines = buffer.split(/\r\n|\r|\n/);
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        parser.line(line);
      }
    }
    buffer += decoder.decode();
    if (buffer) {
      const lines = buffer.split(/\r\n|\r|\n/);
      for (const line of lines) {
        parser.line(line);
      }
    }
    parser.flush();
  } finally {
    reader.releaseLock();
  }
};
var createSseParser = (onEvent) => {
  let eventName = "message";
  let eventId;
  let dataLines = [];
  const reset = () => {
    eventName = "message";
    eventId = undefined;
    dataLines = [];
  };
  const dispatch = () => {
    if (dataLines.length === 0 && !eventId) {
      reset();
      return;
    }
    onEvent({
      event: eventName,
      data: dataLines.join(`
`),
      ...eventId ? { id: eventId } : {}
    });
    reset();
  };
  return {
    line: (line) => {
      if (line === "") {
        dispatch();
        return;
      }
      if (line.startsWith(":")) {
        return;
      }
      const separatorIndex = line.indexOf(":");
      const field = separatorIndex === -1 ? line : line.slice(0, separatorIndex);
      const rawValue = separatorIndex === -1 ? "" : line.slice(separatorIndex + 1);
      const value = rawValue.startsWith(" ") ? rawValue.slice(1) : rawValue;
      if (field === "event") {
        eventName = value || "message";
        return;
      }
      if (field === "data") {
        dataLines.push(value);
        return;
      }
      if (field === "id" && !value.includes("\x00")) {
        eventId = value;
      }
    },
    flush: dispatch
  };
};
var parseTailLogEvent = (data) => {
  try {
    const parsedMessage = WebSocketLogMessageSchema.safeParse(JSON.parse(data));
    if (!parsedMessage.success) {
      return [];
    }
    const message = parsedMessage.data;
    return message.data;
  } catch {
    return [];
  }
};
var toTailError = (error) => {
  return error instanceof Error ? error : new Error(String(error));
};
var isExpectedAbortError2 = (error) => {
  return error instanceof Error && error.name === "AbortError";
};
var isFatalTailError = (error) => {
  return error.message.startsWith("Authentication failed") || error.message.startsWith("Forbidden (") || error.message.startsWith("Wrong region (") || error.message.startsWith("Client error (");
};
var forwardWithRetry = async (fetchImpl, url2, payload, extraHeaders = {}, maxRetries = 3, timeoutMs = 1e4) => {
  let lastError;
  for (let attempt = 0;attempt <= maxRetries; attempt += 1) {
    const controller = new AbortController;
    const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(url2, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...extraHeaders
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      if (response.ok) {
        return;
      }
      const errorText = await response.text();
      if (response.status === 401 || response.status === 403) {
        throw new Error("Authentication failed. Check your public key.");
      }
      if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        throw new Error(`Client error (${response.status}): ${errorText}`);
      }
      lastError = new Error(response.status === 429 ? `Rate limited (429): ${errorText}` : `Server error (${response.status}): ${errorText}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message.startsWith("Authentication failed") || message.startsWith("Client error (")) {
        throw error instanceof Error ? error : new Error(message);
      }
      lastError = error instanceof Error && error.name === "AbortError" ? new Error("Request timed out") : error instanceof Error ? error : new Error(String(error));
    } finally {
      globalThis.clearTimeout(timeoutId);
    }
    if (attempt < maxRetries) {
      await delay(TAIL_RECONNECT_BASE_DELAY_MS * 2 ** attempt);
    }
  }
  throw new Error(`Failed after ${maxRetries + 1} attempts: ${lastError?.message ?? "Unknown error"}`);
};
var countLogRecords = (payload) => {
  return payload.resourceLogs?.reduce((resourceLogTotal, resourceLog) => resourceLogTotal + (resourceLog.scopeLogs?.reduce((scopeLogTotal, scopeLog) => scopeLogTotal + (scopeLog.logRecords?.length ?? 0), 0) ?? 0), 0) ?? 0;
};
var delay = async (milliseconds, signal) => {
  if (signal?.aborted) {
    return;
  }
  await new Promise((resolve2) => {
    const timeoutId = globalThis.setTimeout(resolve2, milliseconds);
    signal?.addEventListener("abort", () => {
      globalThis.clearTimeout(timeoutId);
      resolve2();
    }, { once: true });
  });
};
var createMissingContextError = (operationId, message, missingContext) => {
  return new ORPCError("BAD_REQUEST", {
    message,
    data: {
      operationId,
      missingContext
    }
  });
};

// src/index.ts
var DEFAULT_API_BASE_URL2 = "https://api.sazabi.com";
var DEFAULT_AUTH_API_BASE_URL = "https://api.platform.sazabi.com";
var DEFAULT_DEVICE_CLIENT_ID = "sazabi-cli";
var DEVICE_CODE_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:device_code";
var createClient = (options) => {
  const raw = createORPCClient(new OpenAPILink(publicApiContract, {
    url: withApiVersion2(options.apiBaseUrl ?? DEFAULT_API_BASE_URL2),
    headers: async () => {
      const headers = new Headers({
        authorization: `Bearer ${await options.credentialProvider.getToken()}`
      });
      if (options.clientSource) {
        headers.set("x-sazabi-client-source", options.clientSource);
      }
      return headers;
    },
    fetch: options.fetch,
    customErrorResponseBodyDecoder: (body, response) => {
      const apiError = toApiErrorPayload(body);
      if (!apiError) {
        return null;
      }
      return new ORPCError2(apiError.code, {
        message: apiError.message,
        status: response.status,
        data: {
          operationId: apiError.operationId,
          missingContext: apiError.missingContext
        }
      });
    }
  }));
  const logs = createLogTransports({
    raw,
    credentialProvider: options.credentialProvider,
    fetch: options.fetch,
    apiBaseUrl: options.apiBaseUrl ?? DEFAULT_API_BASE_URL2,
    intakeBaseUrl: options.intakeBaseUrl,
    tailBaseUrl: options.tailBaseUrl
  });
  const agentStreams = createAgentStreamTransports({
    credentialProvider: options.credentialProvider,
    fetch: options.fetch,
    apiBaseUrl: options.apiBaseUrl ?? DEFAULT_API_BASE_URL2,
    clientSource: options.clientSource
  });
  return {
    raw,
    me: async () => raw.me({}),
    automations: {
      list: async (input = {}) => raw.automations.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.list")),
      get: async (input) => raw.automations.get(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.get")),
      create: async (input) => raw.automations.create(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.create")),
      update: async (input) => raw.automations.update(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.update")),
      enable: async (input) => raw.automations.enable(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.enable")),
      disable: async (input) => raw.automations.disable(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.disable")),
      runs: {
        list: async (input) => raw.automations.runs.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.runs.list")),
        get: async (input) => raw.automations.runs.get(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.runs.get")),
        logs: async (input) => raw.automations.runs.logs(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "automations.runs.logs"))
      }
    },
    logs: {
      ...logs,
      query: async (input = {}) => raw.logs.query(await resolveRequiredProjectScopedInput(options.credentialProvider, input, queryLogs.operationId)),
      schema: async (input = {}) => raw.logs.schema(await resolveRequiredProjectScopedInput(options.credentialProvider, input, logsSchema.operationId)),
      volume: async (input) => raw.logs.volume(await resolveRequiredProjectScopedInput(options.credentialProvider, input, logsVolume.operationId)),
      patterns: async (input = {}) => raw.logs.patterns(await resolveRequiredProjectScopedInput(options.credentialProvider, input, logsPatterns.operationId)),
      nativeQuery: async (input) => raw.logs.nativeQuery(await resolveRequiredProjectScopedInput(options.credentialProvider, input, logsNativeQuery.operationId))
    },
    organizations: {
      list: async () => raw.organizations.list({}),
      get: async (input) => raw.organizations.get(input),
      update: async (input) => raw.organizations.update(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input))
    },
    members: {
      list: async (input = {}) => raw.members.list(await resolveOrganizationScopedInput(options.credentialProvider, input)),
      updateRole: async (input) => raw.members.updateRole(await resolveOrganizationScopedInput(options.credentialProvider, input)),
      remove: async (input) => {
        const resolvedInput = await resolveOrganizationScopedInput(options.credentialProvider, input);
        return raw.members.remove({
          params: {
            userId: resolvedInput.userId
          },
          query: {
            organizationId: resolvedInput.organizationId
          }
        });
      }
    },
    publicKeys: {
      list: async (input = {}) => raw.publicKeys.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, listPublicKeys.operationId)),
      get: async (input) => raw.publicKeys.get(await resolveRequiredProjectScopedInput(options.credentialProvider, input, getPublicKey.operationId)),
      ensureLogForwarding: async (input = {}) => raw.publicKeys.ensureLogForwarding(await resolveRequiredProjectScopedInput(options.credentialProvider, input, ensureLogForwardingPublicKey.operationId)),
      update: async (input) => raw.publicKeys.update(await resolveRequiredProjectScopedInput(options.credentialProvider, input, updatePublicKey.operationId)),
      deactivate: async (input) => {
        const resolvedInput = await resolveRequiredProjectScopedInput(options.credentialProvider, input, deactivatePublicKey.operationId);
        return raw.publicKeys.deactivate({
          params: {
            keyId: resolvedInput.keyId
          },
          query: {
            projectId: resolvedInput.projectId
          }
        });
      }
    },
    secretKeys: {
      list: async (input = {}) => raw.secretKeys.list(input),
      get: async (input) => raw.secretKeys.get(input),
      create: async (input) => raw.secretKeys.create(input),
      update: async (input) => raw.secretKeys.update(input),
      delete: async (input) => {
        await raw.secretKeys.delete({
          params: {
            keyId: input.keyId
          }
        });
      }
    },
    search: {
      threads: async (input) => raw.search.threads(await resolveRequiredProjectScopedInput(options.credentialProvider, input, searchThreads.operationId)),
      messages: async (input) => raw.search.messages(await resolveRequiredProjectScopedInput(options.credentialProvider, input, searchMessages.operationId))
    },
    projects: {
      list: async (input = {}) => raw.projects.list(await resolveListProjectsInput(options.credentialProvider, input)),
      get: async (input) => raw.projects.get(input),
      create: async (input) => raw.projects.create(await resolveOrganizationScopedInput(options.credentialProvider, input))
    },
    messages: {
      list: async (input) => raw.messages.list(input),
      append: async (input) => createDeferredHandle(raw, await raw.messages.append(resolveAppendMessageInput(input)))
    },
    threads: {
      list: async (input = {}) => raw.threads.list(await resolveListThreadsInput(options.credentialProvider, input)),
      get: async (input) => raw.threads.get(input),
      getStatus: async (input) => raw.threads.getStatus(input),
      stop: async (input) => raw.threads.stop(input),
      create: async (input) => createDeferredHandle(raw, await raw.threads.create(await resolveCreateThreadInput(options.credentialProvider, input))),
      update: async (input) => raw.threads.update(input),
      fork: async (input) => raw.threads.fork(input),
      setVisibility: async (input) => raw.threads.setVisibility(input),
      createShareLink: async (input) => raw.threads.createShareLink(input),
      listShareLinks: async (input) => raw.threads.listShareLinks(input),
      revokeShareLink: async (input) => raw.threads.revokeShareLink(input),
      stream: async (input) => agentStreams.streamThread(input)
    },
    runs: {
      list: async (input = {}) => raw.runs.list(await resolveListRunsInput(options.credentialProvider, input)),
      listForThread: async (input) => raw.runs.listForThread(input),
      get: async (input) => raw.runs.get(input),
      cancel: async (input) => raw.runs.cancel(input),
      stream: async (input) => agentStreams.streamRun(input)
    },
    dataSources: {
      listTypes: async () => raw.dataSources.listTypes({}),
      instances: {
        list: async (input = {}) => raw.dataSources.listInstances(await resolveRequiredProjectScopedInput(options.credentialProvider, input, listDataSourceInstances.operationId)),
        get: async (input) => raw.dataSources.getInstance(input),
        create: async (input) => raw.dataSources.createInstance(await resolveRequiredProjectScopedInput(options.credentialProvider, input, createDataSourceInstance.operationId)),
        update: async (input) => raw.dataSources.updateInstance(input),
        delete: async (input) => raw.dataSources.deleteInstance(input)
      },
      streams: {
        list: async (input) => raw.dataSources.listStreams(input),
        get: async (input) => raw.dataSources.getStream(input),
        create: async (input) => raw.dataSources.createStream(input),
        update: async (input) => raw.dataSources.updateStream(input),
        delete: async (input) => raw.dataSources.deleteStream(input)
      }
    },
    integrations: {
      listProviders: async (input = {}) => raw.integrations.listProviders(await resolveOrganizationScopedInput(options.credentialProvider, input)),
      listConnections: async (input = {}) => raw.integrations.listConnections(await resolveOrganizationScopedInput(options.credentialProvider, input)),
      getConnection: async (input) => raw.integrations.getConnection(await resolveOrganizationScopedInput(options.credentialProvider, input))
    },
    mcpConnectors: {
      list: async (input = {}) => raw.mcpConnectors.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, listMcpConnectors.operationId)),
      get: async (input) => raw.mcpConnectors.get(await resolveRequiredProjectScopedInput(options.credentialProvider, input, getMcpConnector.operationId)),
      details: async (input) => raw.mcpConnectors.details(await resolveRequiredProjectScopedInput(options.credentialProvider, input, getMcpConnectorDetails.operationId)),
      listProviders: async () => raw.mcpConnectors.listProviders({})
    },
    sandboxPresets: {
      listConnections: async (input = {}) => raw.sandboxPresets.listConnections(await resolveRequiredProjectScopedInput(options.credentialProvider, input, listSandboxPresetConnections.operationId)),
      listTypes: async () => raw.sandboxPresets.listTypes({})
    },
    memory: {
      list: async (input = {}) => raw.memory.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, listProjectMemory.operationId)),
      get: async (input) => raw.memory.get(await resolveRequiredProjectScopedInput(options.credentialProvider, input, getProjectMemory.operationId)),
      put: async (input) => raw.memory.put(await resolveRequiredProjectScopedInput(options.credentialProvider, input, putProjectMemory.operationId)),
      search: async (input) => raw.memory.search(await resolveRequiredProjectScopedInput(options.credentialProvider, input, searchProjectMemory.operationId)),
      delete: async (input) => raw.memory.delete(await resolveRequiredProjectScopedInput(options.credentialProvider, input, deleteProjectMemory.operationId))
    },
    scripts: {
      list: async (input = {}) => raw.scripts.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "scripts.list")),
      get: async (input) => raw.scripts.get(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "scripts.get")),
      create: async (input) => raw.scripts.create(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "scripts.create")),
      update: async (input) => raw.scripts.update(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "scripts.update")),
      delete: async (input) => raw.scripts.delete(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "scripts.delete"))
    },
    issues: {
      count: async (input = {}) => raw.issues.count(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "issues.count")),
      create: async (input) => raw.issues.create(await resolveRequiredProjectScopedInput(options.credentialProvider, input, createIssue.operationId)),
      list: async (input = {}) => raw.issues.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "issues.list")),
      search: async (input = {}) => raw.issues.search(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "issues.search")),
      get: async (input) => raw.issues.get(input),
      resolve: async (input) => raw.issues.resolve(input),
      ignore: async (input) => raw.issues.ignore(input),
      reopen: async (input) => raw.issues.reopen(input),
      mute: async (input) => raw.issues.mute(input),
      unmute: async (input) => raw.issues.unmute(input)
    },
    pullRequests: {
      list: async (input = {}) => raw.pullRequests.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "pullRequests.list"))
    },
    statusComponents: {
      list: async (input = {}) => raw.statusComponents.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "statusComponents.list")),
      get: async (input) => raw.statusComponents.get(input),
      register: async (input) => raw.statusComponents.register(await resolveRequiredProjectScopedInput(options.credentialProvider, input, registerStatusComponent.operationId)),
      deregister: async (input) => raw.statusComponents.deregister({
        componentId: input.componentId,
        ...input.reason !== undefined ? { reason: input.reason } : {}
      }),
      incidents: {
        list: async (input = {}) => raw.statusComponents.incidents.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "statusComponents.incidents.list"))
      },
      timeline: async (input) => raw.statusComponents.timeline(input)
    },
    billing: {
      getSummary: async (input = {}) => raw.billing.getSummary(await resolveOrganizationScopedInput(options.credentialProvider, input)),
      getUsage: async (input = {}) => raw.billing.getUsage(await resolveOrganizationScopedInput(options.credentialProvider, input)),
      listTransactions: async (input = {}) => raw.billing.listTransactions(await resolveOrganizationScopedInput(options.credentialProvider, input))
    },
    tasks: {
      list: async (input = {}) => raw.tasks.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, listTasks.operationId))
    },
    recommendations: {
      list: async (input = {}) => raw.recommendations.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, listRecommendations.operationId))
    }
  };
};
var startDeviceAuthorization = async (options = {}) => {
  const response = await getFetch(options.fetch)(withAuthPath(options.apiBaseUrl ?? DEFAULT_AUTH_API_BASE_URL, "/device/code"), {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      client_id: options.clientId ?? DEFAULT_DEVICE_CLIENT_ID,
      ...options.scope ? { scope: options.scope } : {}
    })
  });
  const payload = await response.json();
  if (!response.ok) {
    throw toDeviceAuthorizationError(payload, response.status);
  }
  const body = payload;
  return {
    deviceCode: expectString(body.device_code, "device_code"),
    userCode: expectString(body.user_code, "user_code"),
    verificationUri: expectString(body.verification_uri, "verification_uri"),
    verificationUriComplete: expectString(body.verification_uri_complete, "verification_uri_complete"),
    expiresIn: expectNumber(body.expires_in, "expires_in"),
    interval: expectNumber(body.interval, "interval")
  };
};
var pollDeviceAuthorization = async (options) => {
  const response = await getFetch(options.fetch)(withAuthPath(options.apiBaseUrl ?? DEFAULT_AUTH_API_BASE_URL, "/device/token"), {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      grant_type: DEVICE_CODE_GRANT_TYPE,
      device_code: options.deviceCode,
      client_id: options.clientId ?? DEFAULT_DEVICE_CLIENT_ID
    })
  });
  const payload = await response.json();
  if (response.ok) {
    const body = payload;
    return {
      status: "authorized",
      accessToken: expectString(body.access_token, "access_token"),
      tokenType: expectString(body.token_type, "token_type"),
      expiresIn: expectNumber(body.expires_in, "expires_in"),
      scope: typeof body.scope === "string" ? body.scope : ""
    };
  }
  const error = toDeviceAuthorizationErrorPayload(payload);
  if (!error) {
    throw new Error(`Device authorization failed with status ${response.status}`);
  }
  if (error.error === "authorization_pending") {
    return {
      status: "pending"
    };
  }
  if (error.error === "slow_down") {
    return {
      status: "pending",
      interval: 10
    };
  }
  if (error.error === "access_denied") {
    return {
      status: "denied",
      message: error.errorDescription
    };
  }
  if (error.error === "expired_token" || error.error === "invalid_grant") {
    return {
      status: "expired",
      message: error.errorDescription
    };
  }
  throw new Error(error.errorDescription);
};
var withApiVersion2 = (apiBaseUrl) => {
  const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, "");
  return normalizedBaseUrl.endsWith("/v1") ? normalizedBaseUrl : `${normalizedBaseUrl}/v1`;
};
var withAuthPath = (apiBaseUrl, path) => {
  const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, "");
  return `${normalizedBaseUrl}/api/auth${path}`;
};
var resolveListProjectsInput = async (credentialProvider, input) => {
  return resolveOrganizationScopedInput(credentialProvider, input);
};
var resolveOrganizationScopedInput = async (credentialProvider, input) => {
  const organizationId = input.organizationId ?? await credentialProvider.getOrganizationId?.();
  return organizationId ? { ...input, organizationId } : input;
};
var resolveRequiredOrganizationScopedInput = async (credentialProvider, input) => {
  const organizationId = input.organizationId ?? await credentialProvider.getOrganizationId?.();
  if (!organizationId) {
    throw new ORPCError2("BAD_REQUEST", {
      message: "Organization ID is required",
      data: {
        operationId: "organizations.update",
        missingContext: ["organizationId"]
      },
      status: 400
    });
  }
  return { ...input, organizationId };
};
var resolveRequiredProjectScopedInput = async (credentialProvider, input, operationId) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  if (!projectId) {
    throw new ORPCError2("BAD_REQUEST", {
      message: "Project ID is required",
      data: {
        operationId,
        missingContext: ["projectId"]
      },
      status: 400
    });
  }
  return { ...input, projectId };
};
var resolveListThreadsInput = async (credentialProvider, input) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  return projectId ? { ...input, projectId } : input;
};
var resolveListRunsInput = async (credentialProvider, input) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  return projectId ? { ...input, projectId } : input;
};
var resolveCreateThreadInput = async (credentialProvider, input) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  return projectId ? { ...input, projectId } : input;
};
var resolveAppendMessageInput = (input) => {
  return {
    threadId: input.threadId,
    message: input.message,
    wait: input.wait ?? true,
    timeoutSeconds: input.timeoutSeconds ?? 20,
    ...input.automationId !== undefined ? { automationId: input.automationId } : {}
  };
};
var toApiErrorPayload = (value) => {
  if (!value || typeof value !== "object") {
    return null;
  }
  const record3 = value;
  if (typeof record3.code !== "string" || typeof record3.message !== "string" || typeof record3.operationId !== "string") {
    return null;
  }
  return {
    code: record3.code,
    message: record3.message,
    operationId: record3.operationId,
    missingContext: Array.isArray(record3.missingContext) ? record3.missingContext.filter((missingContext) => typeof missingContext === "string") : []
  };
};
var toDeviceAuthorizationErrorPayload = (value) => {
  if (!value || typeof value !== "object") {
    return null;
  }
  const record3 = value;
  if (typeof record3.error !== "string" || typeof record3.error_description !== "string") {
    return null;
  }
  return {
    error: record3.error,
    errorDescription: record3.error_description
  };
};
var toDeviceAuthorizationError = (value, status) => {
  const payload = toDeviceAuthorizationErrorPayload(value);
  return new Error(payload?.errorDescription ?? `Device authorization failed with status ${status}`);
};
var getFetch = (fetchImpl) => {
  return fetchImpl ?? globalThis.fetch;
};
var createDeferredHandle = (raw, result) => ({
  result,
  poll: () => raw.runs.get({ runId: result.runId }),
  waitForCompletion: async (options = {}) => waitForDeferredCompletion(raw, result, options)
});
var waitForDeferredCompletion = async (raw, initialResult, options) => {
  if (initialResult.completed) {
    return initialResult;
  }
  const intervalMs = options.intervalMs ?? 2000;
  const startedAt = Date.now();
  let currentResult = initialResult;
  while (!currentResult.completed) {
    if (options.timeoutMs !== undefined && Date.now() - startedAt >= options.timeoutMs) {
      return currentResult;
    }
    await delay2(intervalMs);
    currentResult = await raw.runs.get({ runId: currentResult.runId });
  }
  return currentResult;
};
var delay2 = async (milliseconds) => {
  await new Promise((resolve2) => globalThis.setTimeout(resolve2, milliseconds));
};
var expectString = (value, fieldName) => {
  if (typeof value === "string") {
    return value;
  }
  throw new Error(`Expected '${fieldName}' to be a string.`);
};
var expectNumber = (value, fieldName) => {
  if (typeof value === "number") {
    return value;
  }
  throw new Error(`Expected '${fieldName}' to be a number.`);
};
export {
  startDeviceAuthorization,
  pollDeviceAuthorization,
  forwardLogsExamples,
  createClient,
  TailLogsInputSchema,
  WebSocketLogResourceSchema as TailLogResourceSchema,
  LogFiltersSchema as TailLogFiltersSchema,
  WebSocketLogEntrySchema as TailLogEntrySchema,
  PublicAgentStreamEventTypeSchema,
  PublicAgentStreamEventSchema,
  ForwardLogsOutputSchema,
  ForwardLogsInputSchema,
  AgentStreamControlFrameSchema
};
