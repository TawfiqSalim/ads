(function(sttc) {
  'use strict';
  var aa = {};
  /* 
   
   Copyright The Closure Library Authors. 
   SPDX-License-Identifier: Apache-2.0 
  */
  var m = this || self;

  function ba(a, b) {
    a: {
      var c = ["CLOSURE_FLAGS"];
      for (var d = m, f = 0; f < c.length; f++)
        if (d = d[c[f]], d == null) {
          c = null;
          break a
        } c = d
    }
    a = c && c[a];
    return a != null ? a : b
  };

  function ca(a) {
    m.setTimeout(() => {
      throw a;
    }, 0)
  };
  var da = ba(610401301, !1),
    ea = ba(653718497, ba(1, !0));
  var p;
  const fa = m.navigator;
  p = fa ? fa.userAgentData || null : null;

  function ha(a) {
    return da ? p ? p.brands.some(({
      brand: b
    }) => b && b.indexOf(a) != -1) : !1 : !1
  }

  function t(a) {
    var b;
    a: {
      if (b = m.navigator)
        if (b = b.userAgent) break a;b = ""
    }
    return b.indexOf(a) != -1
  };

  function w() {
    return da ? !!p && p.brands.length > 0 : !1
  }

  function ja() {
    !t("Safari") || ka() || (w() ? 0 : t("Coast")) || (w() ? 0 : t("Opera")) || (w() ? 0 : t("Edge")) || (w() ? ha("Microsoft Edge") : t("Edg/")) || w() && ha("Opera")
  }

  function ka() {
    return w() ? ha("Chromium") : (t("Chrome") || t("CriOS")) && !(w() ? 0 : t("Edge")) || t("Silk")
  };

  function la(a) {
    la[" "](a);
    return a
  }
  la[" "] = function() {};
  var ma = w() ? !1 : t("Trident") || t("MSIE");
  !t("Android") || ka();
  ka();
  ja();

  function na(a, b) {
    const c = oa;
    if (!b(a)) throw b = (typeof c === "function" ? c() : c)?.concat("\n") ?? "", Error(b + String(a));
  }

  function y(a) {
    a.L = !0;
    return a
  }
  let oa = void 0;
  const pa = y(a => a !== null && a !== void 0);
  var qa = y(a => typeof a === "number"),
    A = y(a => typeof a === "string"),
    ra = y(a => a === void 0);
  var ua = y(a => a >= sa && a <= ta);
  const sa = BigInt(Number.MIN_SAFE_INTEGER),
    ta = BigInt(Number.MAX_SAFE_INTEGER);
  let D = 0,
    E = 0;

  function va(a) {
    const b = a >>> 0;
    D = b;
    E = (a - b) / 4294967296 >>> 0
  }

  function wa(a) {
    if (a < 0) {
      va(-a);
      a = D;
      var b = E;
      b = ~b;
      a ? a = ~a + 1 : b += 1;
      const [c, d] = [a, b];
      D = c >>> 0;
      E = d >>> 0
    } else va(a)
  };
  var F = Symbol(),
    G = Symbol();

  function xa(a, b) {
    b[F] = (a | 34) & -14557
  };
  var ya = {},
    za = {};

  function Ca(a) {
    return !(!a || typeof a !== "object" || a.g !== za)
  }

  function H(a) {
    return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
  }

  function I(a) {
    return !Array.isArray(a) || a.length ? !1 : (a[F] | 0) & 1 ? !0 : !1
  }

  function J(a) {
    if (a & 2) throw Error();
  }
  Object.freeze({});
  var Da = Object.freeze({});

  function Ea(a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b
  };
  let K;

  function Fa(a) {
    if (K) throw Error("");
    K = b => {
      m.setTimeout(() => {
        a(b)
      }, 0)
    }
  }

  function Ga(a) {
    if (K) try {
      K(a)
    } catch (b) {
      throw b.cause = a, b;
    }
  }

  function Ha() {
    const a = Error();
    Ea(a, "incident");
    K ? Ga(a) : ca(a)
  }

  function L(a) {
    a = Error(a);
    Ea(a, "warning");
    Ga(a);
    return a
  };
  const Ia = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

  function Ja(a) {
    if (!Number.isFinite(a)) throw L("enum");
    return a | 0
  }

  function Ka(a) {
    if (typeof a !== "number") throw L("int32");
    if (!Number.isFinite(a)) throw L("int32");
    return a | 0
  }

  function La(a) {
    a: {
      var b = typeof a;
      switch (b) {
        case "bigint":
          b = !0;
          break a;
        case "number":
          b = Number.isFinite(a);
          break a
      }
      b = b !== "string" ? !1 : Ia.test(a)
    }
    if (!b) throw L("int64");
    switch (typeof a) {
      case "string":
        b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) var c = String(b);
        else b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), (a[0] === "-" ? a.length < 20 || a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 || a.length === 19 && Number(a.substring(0, 6)) < 922337) ? c = a : (a.length < 16 ? wa(Number(a)) : (a = BigInt(a), D = Number(a &
          BigInt(4294967295)) >>> 0, E = Number(a >> BigInt(32) & BigInt(4294967295))), a = D, b = E, b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a))));
        return c;
      case "bigint":
        c = BigInt.asIntN(64, a);
        if (A(c)) {
          if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(c)) throw Error(String(c));
        } else if (qa(c) && !Number.isSafeInteger(c)) throw Error(String(c));
        return BigInt(c);
      default:
        c = Math.trunc(a);
        if (!Number.isSafeInteger(c)) {
          wa(c);
          a = D;
          b = E;
          if (c = b & 2147483648) a =
            ~a + 1 >>> 0, b = ~b >>> 0, a == 0 && (b = b + 1 >>> 0);
          a = b * 4294967296 + (a >>> 0);
          c = c ? -a : a
        }
        return c
    }
  }

  function Ma(a) {
    if (typeof a !== "string") throw Error();
    return a
  }

  function M(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a
  }

  function Na(a) {
    return a == null || typeof a === "string" ? a : void 0
  };
  let N = void 0;

  function Oa(a, b) {
    const c = O?.get(b)?.get(a);
    c && !Pa(a, c) && (Qa(), O?.get(b)?.delete(a))
  }

  function Pa(a, b) {
    if (a.length !== b.length) return !1;
    for (const f in b) {
      var c = Number(f),
        d;
      if (d = Object.prototype.hasOwnProperty.call(b, f) && Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
      if (d) return !1
    }
    return !0
  }

  function Ra(a) {
    if (a && O?.has(a)) {
      var b = a.l;
      if (b)
        for (let c = 0; c < b.length; c++) {
          const d = b[c];
          if (c === b.length - 1 && H(d))
            for (const f in d) {
              if (!Object.prototype.hasOwnProperty.call(d, f)) continue;
              const e = d[f];
              Array.isArray(e) && Oa(e, a)
            } else Array.isArray(d) && Oa(d, a)
        }
    }
  }

  function Qa() {
    Ha()
  }
  let O = void 0;

  function Sa(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "bigint":
        return ua(a) ? Number(a) : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (I(a)) return
          } else if (a != null && a instanceof Uint8Array) {
          let b = "",
            c = 0;
          const d = a.length - 10240;
          for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
          b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
          return btoa(b)
        }
    }
    return a
  };
  let P;

  function Ta(a, b, c) {
    a = Array.prototype.slice.call(a);
    var d = a.length;
    const f = b & 256 ? a[d - 1] : void 0;
    d += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (f) {
      b = a[b] = {};
      for (const e in f) Object.prototype.hasOwnProperty.call(f, e) && (b[e] = c(f[e]))
    }
    return a
  }

  function Ua(a, b, c, d, f) {
    if (a != null) {
      if (Array.isArray(a)) a = I(a) ? void 0 : f && (a[F] | 0) & 2 ? a : Va(a, b, c, d !== void 0, f);
      else if (H(a)) {
        const e = {};
        for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (e[g] = Ua(a[g], b, c, d, f));
        a = e
      } else a = b(a, d);
      return a
    }
  }

  function Va(a, b, c, d, f) {
    const e = d || c ? a[F] | 0 : 0;
    d = d ? !!(e & 32) : void 0;
    a = Array.prototype.slice.call(a);
    for (let g = 0; g < a.length; g++) a[g] = Ua(a[g], b, c, d, f);
    c && c(e, a);
    return a
  }

  function Wa(a) {
    return a.D === ya ? a.toJSON() : Sa(a)
  };

  function Xa(a, b, c = xa) {
    if (a != null) {
      if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = a[F] | 0;
        if (d & 2) return a;
        b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
        return b ? (a[F] = (d | 34) & -12293, a) : Va(a, Xa, d & 4 ? xa : c, !0, !0)
      }
      a.D === ya && (c = a.l, d = c[F], a = d & 2 ? a : Ya(a, c, d));
      return a
    }
  }

  function Ya(a, b, c) {
    Ra(a);
    a = a.constructor;
    P = b = Za(b, c);
    b = new a(b);
    P = void 0;
    return b
  }

  function Za(a, b) {
    const c = !!(b & 32);
    a = Ta(a, b, d => Xa(d, c, xa));
    a[F] |= 34;
    return a
  };

  function Q(a, b) {
    a = a.l;
    return $a(a, a[F], b)
  }

  function $a(a, b, c) {
    if (c === -1) return null;
    const d = b >> 15 & 1023 || 536870912;
    if (c >= d) {
      if (b & 256) return a[a.length - 1][c]
    } else return b = c + (+!!(b & 512) - 1), a = b < 0 || b >= a.length || b >= d ? void 0 : a[b], a
  }

  function T(a, b, c, d) {
    const f = b >> 15 & 1023 || 536870912;
    if (c >= f) {
      let e, g = b;
      if (b & 256) e = a[a.length - 1];
      else {
        if (d == null) return g;
        e = a[f + (+!!(b & 512) - 1)] = {};
        g |= 256
      }
      e[c] = d;
      c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
      g !== b && (a[F] = g);
      return g
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b
  }

  function ab(a, b, c, d) {
    const f = a.l;
    let e = f[F];
    J(e);
    if (c == null) T(f, e, b);
    else {
      var g = c[F] | 0,
        k = g,
        h = !!(2 & g) || Object.isFrozen(c),
        l = !h && (void 0 === Da || !1);
      if (!(4 & g)) {
        g = 21;
        h && (c = Array.prototype.slice.call(c), k = 0, g = bb(g, e), g = cb(g, e));
        for (var n = 0; n < c.length; n++) c[n] = d(c[n])
      }
      if (l) c = Array.prototype.slice.call(c), k = 0, g = bb(g, e), g = cb(g, e);
      else if (!h) {
        d = c;
        if (h = ea) {
          if (N === void 0) {
            if (typeof WeakMap === "function") {
              h = WeakMap;
              try {
                var q = h.toString().indexOf("[native code]") !== -1 ? h : null
              } catch {
                q = null
              }
            } else q = null;
            N = q
          }
          h = N
        }
        if (h &&
          (O?.get(a)?.get(d) || !(Math.random() > .01))) {
          h = d.length;
          q = {
            length: h
          };
          for (l = 0; l < Math.min(h, 10); l++) {
            if (h <= 10) n = l;
            else {
              n = h / 10;
              const u = Math.floor(l * n);
              n = u + Math.floor(Math.random() * (Math.floor((l + 1) * n) - u))
            }
            q[n] = d[n]
          }
          Pa(d, q) ? (h = O || (O = new N), l = h.get(a), l || (l = new N, h.set(a, l)), l.set(d, q)) : (Ha(), O?.get(a)?.delete(d))
        }
      }
      g !== k && (c[F] = g);
      T(f, e, b, c)
    }
  }

  function U(a, b, c, d) {
    const f = a.l;
    let e = f[F];
    J(e);
    T(f, e, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
    return a
  }

  function db(a, b, c, d) {
    let f = a.get(d);
    if (f != null) return f;
    f = 0;
    for (let e = 0; e < d.length; e++) {
      const g = d[e];
      $a(b, c, g) != null && (f !== 0 && (c = T(b, c, f)), f = g)
    }
    a.set(d, f);
    return f
  }

  function eb(a, b, c, d) {
    d == null && (d = void 0);
    a: {
      const g = a.l;
      var f = g[F];J(f);
      if (d == null) {
        var e = g[G] ?? (g[G] = new Map);
        if (db(e, g, f, c) === b) e.set(c, 0);
        else break a
      } else {
        e = g;
        const k = e[G] ?? (e[G] = new Map),
          h = db(k, e, f, c);
        h !== b && (h && (f = T(e, f, h)), k.set(c, b))
      }
      T(g, f, b, d)
    }
    return a
  }

  function bb(a, b) {
    a = 2 & b ? a | 2 : a & -3;
    return (a | 32) & -2049
  }

  function cb(a, b) {
    32 & b || (a &= -33);
    return a
  }

  function fb(a) {
    return a ?? ""
  };
  var V = class {
    constructor(a) {
      a: {
        a == null && (a = P);P = void 0;
        if (a == null) {
          var b = 96;
          a = []
        } else {
          if (!Array.isArray(a)) throw Error("narr");
          b = a[F] | 0;
          if (b & 2048) throw Error("farr");
          if (b & 64) break a;
          var c = a;
          b |= 64;
          var d = c.length;
          if (d && (--d, H(c[d]))) {
            b |= 256;
            c = d - (+!!(b & 512) - 1);
            if (c >= 1024) throw Error("pvtlmt");
            b = b & -33521665 | (c & 1023) << 15
          }
        }
        a[F] = b
      }
      this.l = a
    }
    toJSON() {
      return gb(this)
    }
  };
  V.prototype.D = ya;

  function gb(a) {
    Ra(a);
    a = Va(a.l, Wa, void 0, void 0, !1);
    {
      let k = a.length;
      if (k) {
        var b = a[k - 1],
          c = H(b);
        c ? k-- : b = void 0;
        if (c) {
          b: {
            var d = b;
            var f;
            var e = !1;
            if (d)
              for (let h in d) Object.prototype.hasOwnProperty.call(d, h) && (isNaN(+h) ? (f ?? (f = {}))[h] = d[h] : (c = d[h], Array.isArray(c) && (I(c) || Ca(c) && c.size === 0) && (c = null), c == null && (e = !0), c != null && ((f ?? (f = {}))[h] = c)));e || (f = d);
            if (f)
              for (let h in f) {
                e = f;
                break b
              }
            e = null
          }
          d = e == null ? b != null : e !== b
        }
        for (var g; k > 0; k--) {
          f = a[k - 1];
          if (!(f == null || I(f) || Ca(f) && f.size === 0)) break;
          g = !0
        }
        if (a !== a ||
          d || g) {
          if (g || d || e) a.length = k;
          e && a.push(e)
        }
      }
    }
    return a
  };

  function hb(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1)
  };
  /* 
   
   Copyright Google LLC 
   SPDX-License-Identifier: Apache-2.0 
  */
  let ib = globalThis.trustedTypes,
    jb;

  function kb() {
    let a = null;
    if (!ib) return a;
    try {
      const b = c => c;
      a = ib.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b
      })
    } catch (b) {}
    return a
  };
  var lb = class {
    constructor(a) {
      this.g = a
    }
    toString() {
      return this.g + ""
    }
  };

  function mb(a) {
    jb === void 0 && (jb = kb());
    var b = jb;
    return new lb(b ? b.createScriptURL(a) : a)
  };
  var nb = class {
    constructor(a) {
      this.g = a
    }
    toString() {
      return this.g
    }
  };

  function ob(a) {
    return new nb(a[0].toLowerCase())
  };

  function pb(a, ...b) {
    if (b.length === 0) return mb(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return mb(c)
  };

  function qb(a, b, c) {
    var d = [ob`data-`];
    if (d.length === 0) throw Error("");
    d = d.map(e => {
      if (e instanceof nb) e = e.g;
      else throw Error("");
      return e
    });
    const f = b.toLowerCase();
    if (d.every(e => f.indexOf(e) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
    a.setAttribute(b, c)
  };
  var vb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

  function wb(a, b) {
    if (a)
      for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
  }
  let xb = [];
  const yb = () => {
    const a = xb;
    xb = [];
    for (const b of a) try {
      b()
    } catch {}
  };
  var zb = a => {
    var b = document;
    b.readyState === "complete" || b.readyState === "interactive" ? (xb.push(a), xb.length == 1 && (window.Promise ? Promise.resolve().then(yb) : window.setImmediate ? setImmediate(yb) : setTimeout(yb, 0))) : b.addEventListener("DOMContentLoaded", a)
  };

  function Ab(a, b = document) {
    return b.createElement(String(a).toLowerCase())
  };

  function Bb(a, b, c = null, d = !1, f = !1) {
    Cb(a, b, c, d, f)
  }

  function Cb(a, b, c, d, f = !1) {
    a.google_image_requests || (a.google_image_requests = []);
    const e = Ab("IMG", a.document);
    if (c || d) {
      const g = k => {
        c && c(k);
        if (d) {
          k = a.google_image_requests;
          a: if (typeof k === "string") var h = typeof e !== "string" || e.length != 1 ? -1 : k.indexOf(e, 0);
            else {
              for (h = 0; h < k.length; h++)
                if (h in k && k[h] === e) break a;
              h = -1
            } h >= 0 && Array.prototype.splice.call(k, h, 1)
        }
        e.removeEventListener && e.removeEventListener("load", g, !1);
        e.removeEventListener && e.removeEventListener("error", g, !1)
      };
      hb(e, "load", g);
      hb(e, "error", g)
    }
    f &&
      (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e)
  }
  var Eb = a => {
      let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
      wb(a, (c, d) => {
        if (c || c === 0) b += `&${d}=${encodeURIComponent(""+c)}`
      });
      Db(b)
    },
    Db = a => {
      var b = window;
      b.fetch ? b.fetch(a, {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors"
      }) : Bb(b, a, void 0, !1, !1)
    };
  var Fb = class {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {}
    }
  };

  function Gb(a) {
    let b = a.toString();
    a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
    a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
    if (a.stack) a: {
      a = a.stack;
      var c = b;
      try {
        a.indexOf(c) == -1 && (a = c + "\n" + a);
        let d;
        for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
        b = a.replace(RegExp("\n *", "g"), "\n");
        break a
      } catch (d) {
        b = c;
        break a
      }
      b = void 0
    }
    return b
  };
  const Hb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
  var Ib = class {
      constructor(a, b) {
        this.g = a;
        this.i = b
      }
    },
    Jb = class {
      constructor(a, b) {
        this.url = a;
        this.B = !!b;
        this.depth = null
      }
    };
  let Kb = null;

  function Lb() {
    const a = m.performance;
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
  }

  function Mb() {
    const a = m.performance;
    return a && a.now ? a.now() : null
  };
  var Nb = class {
    constructor(a, b) {
      var c = Mb() || Lb();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random()
    }
  };
  const W = m.performance,
    Ob = !!(W && W.mark && W.measure && W.clearMarks),
    X = function(a) {
      let b = !1,
        c;
      return function() {
        b || (c = a(), b = !0);
        return c
      }
    }(() => {
      var a;
      if (a = Ob) {
        var b;
        if (Kb === null) {
          Kb = "";
          try {
            a = "";
            try {
              a = m.top.location.hash
            } catch (c) {
              a = m.location.hash
            }
            a && (Kb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
          } catch (c) {}
        }
        b = Kb;
        a = !!b.indexOf && b.indexOf("1337") >= 0
      }
      return a
    });

  function Pb(a) {
    a && W && X() && (W.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), W.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
  }

  function Qb(a) {
    a.g = !1;
    if (a.i != a.j.google_js_reporting_queue) {
      if (X()) {
        var b = a.i;
        const c = b.length;
        b = typeof b === "string" ? b.split("") : b;
        for (let d = 0; d < c; d++) d in b && Pb.call(void 0, b[d])
      }
      a.i.length = 0
    }
  }
  class Rb {
    constructor(a) {
      this.i = [];
      this.j = a || m;
      let b = null;
      a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
      this.g = X() || (b != null ? b : Math.random() < 1)
    }
    start(a, b) {
      if (!this.g) return null;
      a = new Nb(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      W && X() && W.mark(b);
      return a
    }
    end(a) {
      if (this.g && typeof a.value === "number") {
        a.duration = (Mb() || Lb()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        W && X() && W.mark(b);
        !this.g || this.i.length >
          2048 || this.i.push(a)
      }
    }
  };

  function Sb(a, b) {
    const c = {};
    c[a] = b;
    return [c]
  }

  function Tb(a, b, c, d, f) {
    const e = [];
    wb(a, (g, k) => {
      (g = Ub(g, b, c, d, f)) && e.push(`${k}=${g}`)
    });
    return e.join(b)
  }

  function Ub(a, b, c, d, f) {
    if (a == null) return "";
    b = b || "&";
    c = c || ",$";
    typeof c === "string" && (c = c.split(""));
    if (a instanceof Array) {
      if (d || (d = 0), d < c.length) {
        const e = [];
        for (let g = 0; g < a.length; g++) e.push(Ub(a[g], b, c, d + 1, f));
        return e.join(c[d])
      }
    } else if (typeof a === "object") return f || (f = 0), f < 2 ? encodeURIComponent(Tb(a, b, c, d, f + 1)) : "...";
    return encodeURIComponent(String(a))
  }

  function Vb(a) {
    let b = 1;
    for (const c in a.i) c.length > b && (b = c.length);
    return 3997 - b - a.j.length - 1
  }

  function Wb(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = Vb(a) - b.length;
    if (d < 0) return "";
    a.g.sort((e, g) => e - g);
    b = null;
    let f = "";
    for (let e = 0; e < a.g.length; e++) {
      const g = a.g[e],
        k = a.i[g];
      for (let h = 0; h < k.length; h++) {
        if (!d) {
          b = b == null ? g : b;
          break
        }
        let l = Tb(k[h], a.j, ",$");
        if (l) {
          l = f + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            f = a.j;
            break
          }
          b = b == null ? g : b
        }
      }
    }
    a = "";
    b != null && (a = `${f}${"trn"}=${b}`);
    return c + a
  }
  var Xb = class {
    constructor() {
      this.j = "&";
      this.i = {};
      this.o = 0;
      this.g = []
    }
  };

  function Yb(a, b) {
    a.j = b
  }
  var $b = class {
    constructor(a, b, c = null) {
      this.o = a;
      this.F = b;
      this.g = c;
      this.j = null;
      this.i = !1;
      this.K = this.u
    }
    u(a, b, c, d, f) {
      f = f || "jserror";
      let e;
      try {
        const B = new Xb;
        var g = B;
        g.g.push(1);
        g.i[1] = Sb("context", a);
        b.error && b.meta && b.id || (b = new Fb(b, {
          message: Gb(b)
        }));
        if (b.msg) {
          g = B;
          var k = b.msg.substring(0, 512);
          g.g.push(2);
          g.i[2] = Sb("msg", k)
        }
        var h = b.meta || {};
        b = h;
        if (this.j) try {
          this.j(b)
        } catch (C) {}
        if (d) try {
          d(b)
        } catch (C) {}
        d = B;
        h = [h];
        d.g.push(3);
        d.i[3] = h;
        d = m;
        h = [];
        let ia;
        b = null;
        do {
          var l = d;
          try {
            var n;
            if (n = !!l && l.location.href !=
              null) b: {
              try {
                la(l.foo);
                n = !0;
                break b
              } catch (C) {}
              n = !1
            }
            var q = n
          } catch {
            q = !1
          }
          q ? (ia = l.location.href, b = l.document && l.document.referrer || null) : (ia = b, b = null);
          h.push(new Jb(ia || ""));
          try {
            d = l.parent
          } catch (C) {
            d = null
          }
        } while (d && l != d);
        for (let C = 0, rb = h.length - 1; C <= rb; ++C) h[C].depth = rb - C;
        l = m;
        if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == h.length - 1)
          for (q = 1; q < h.length; ++q) {
            var u = h[q];
            u.url || (u.url = l.location.ancestorOrigins[q - 1] || "", u.B = !0)
          }
        var v = h;
        let Aa = new Jb(m.location.href, !1);
        l = null;
        const Ba = v.length - 1;
        for (u = Ba; u >= 0; --u) {
          var x = v[u];
          !l && Hb.test(x.url) && (l = x);
          if (x.url && !x.B) {
            Aa = x;
            break
          }
        }
        x = null;
        const qc = v.length && v[Ba].url;
        Aa.depth != 0 && qc && (x = v[Ba]);
        e = new Ib(Aa, x);
        if (e.i) {
          v = B;
          var z = e.i.url || "";
          v.g.push(4);
          v.i[4] = Sb("top", z)
        }
        var R = {
          url: e.g.url || ""
        };
        if (e.g.url) {
          var S = e.g.url.match(vb),
            r = S[1],
            sb = S[3],
            tb = S[4];
          z = "";
          r && (z += r + ":");
          sb && (z += "//", z += sb, tb && (z += ":" + tb));
          var ub = z
        } else ub = "";
        r = B;
        R = [R, {
          url: ub
        }];
        r.g.push(5);
        r.i[5] = R;
        Zb(this.o, f, B, this.i, c)
      } catch (B) {
        try {
          Zb(this.o, f, {
            context: "ecmserr",
            rctx: a,
            msg: Gb(B),
            url: e && e.g.url
          }, this.i, c)
        } catch (ia) {}
      }
      return this.F
    }
  };
  var ac = class extends V {
    constructor() {
      super()
    }
  };

  function bc(a, b) {
    try {
      const c = d => [{
        [d.J]: d.H
      }];
      return JSON.stringify([a.filter(d => d.C).map(c), gb(b), a.filter(d => !d.C).map(c)])
    } catch (c) {
      return cc(c, b), ""
    }
  }

  function cc(a, b) {
    try {
      var c = Gb(a instanceof Error ? a : Error(String(a))),
        d = Q(b, 1);
      var f = d == null ? d : Number.isFinite(d) ? d | 0 : void 0;
      Eb({
        m: c,
        b: (f ?? 0) || null,
        v: fb(Na(Q(b, 2))) || null
      })
    } catch (e) {}
  }
  var dc = class {
    constructor(a, b) {
      var c = new ac;
      a = U(c, 1, a == null ? a : Ja(a), 0);
      b = U(a, 2, M(b), "");
      a = b.l;
      c = a[F];
      this.j = c & 2 ? b : Ya(b, a, c)
    }
  };
  var ec = class extends V {
    constructor() {
      super()
    }
  };
  var fc = class extends V {
    constructor() {
      super()
    }
  };
  var gc = class extends V {
    constructor() {
      super()
    }
  };
  var hc = class extends V {
      constructor() {
        super()
      }
    },
    ic = [1, 7],
    jc = [4, 6, 8];
  class kc extends dc {
    constructor() {
      super(...arguments)
    }
  }

  function lc(a, ...b) {
    mc(a, ...b.map(c => ({
      C: !0,
      J: 3,
      H: gb(c)
    })))
  }
  var nc = class extends kc {};
  var oc = (a, b) => {
    globalThis.fetch(a, {
      method: "POST",
      body: b,
      keepalive: b.length < 65536,
      credentials: "omit",
      mode: "no-cors",
      redirect: "follow"
    }).catch(() => {})
  };

  function mc(a, ...b) {
    try {
      a.g.push(...b), a.g.length >= 100 && pc(a), a.g.length && a.i === null && (a.i = setTimeout(() => {
        pc(a)
      }, 1E3))
    } catch (c) {
      cc(c, a.j)
    }
  }

  function pc(a) {
    a.i !== null && (clearTimeout(a.i), a.i = null);
    if (a.g.length) {
      var b = bc(a.g, a.j);
      a.o("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.g = []
    }
  }
  var rc = class extends nc {
      constructor() {
        super(2, "m202409230101");
        this.o = oc;
        this.g = [];
        this.i = null
      }
    },
    sc = class extends rc {};

  function tc() {
    var a = uc,
      b = "A";
    a.A && a.hasOwnProperty(b) || (b = new a, a.A = b);
    return []
  }
  class uc {};

  function Zb(a, b, c, d = !1, f) {
    if ((d ? a.g : Math.random()) < (f || .01)) try {
      let e;
      c instanceof Xb ? e = c : (e = new Xb, wb(c, (k, h) => {
        var l = e;
        const n = l.o++;
        k = Sb(h, k);
        l.g.push(n);
        l.i[n] = k
      }));
      const g = Wb(e, "/pagead/gen_204?id=" + b + "&");
      g && Bb(m, g)
    } catch (e) {}
  }

  function vc(a, b) {
    b >= 0 && b <= 1 && (a.g = b)
  }
  class wc {
    constructor() {
      this.g = Math.random()
    }
  };
  let xc, yc;
  const zc = new Rb(window);
  (a => {
    xc = a ?? new wc;
    typeof window.google_srt !== "number" && (window.google_srt = Math.random());
    vc(xc, window.google_srt);
    yc = new $b(xc, !0, zc);
    Yb(yc, () => {});
    yc.i = !0;
    window.document.readyState == "complete" ? window.google_measure_js_timing || Qb(zc) : zc.g && hb(window, "load", () => {
      window.google_measure_js_timing || Qb(zc)
    })
  })();
  let Ac = (new Date).getTime();
  let Bc, Y;
  const Cc = new Rb(m);
  ((a, b = !0) => {
    Bc = a || new wc;
    typeof m.google_srt !== "number" && (m.google_srt = Math.random());
    vc(Bc, m.google_srt);
    Y = new $b(Bc, b, Cc);
    Y.i = !0;
    m.document.readyState == "complete" ? m.google_measure_js_timing || Qb(Cc) : Cc.g && hb(m, "load", () => {
      m.google_measure_js_timing || Qb(Cc)
    })
  })();
  let Dc = void 0;

  function Ec() {
    var a = window;
    return m.google_adtest === "on" || m.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
  };
  var Fc = class extends V {};

  function Gc({
    G: a,
    I: b
  }) {
    return a || (b === "dev" ? "dev" : "")
  };

  function Hc(a) {
    Yb(Y, b => {
      b.shv = String(a);
      b.mjsv = Gc({
        G: "m202409230101",
        I: a
      });
      const c = tc(),
        d = Ec();
      b.eid = c.concat(d).join(",")
    })
  }

  function Ic(a) {
    const b = fb(Na(Q(a, 2)));
    a = Q(a, 6);
    a = (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ?? !1;
    Hc(b);
    na(Dc, ra);
    Dc = a
  };
  var Jc = "google_ad_block google_ad_channel google_ad_client google_ad_intent_query google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_ad_intent_qetid google_placement_id google_daaos_ts google_erank google_ad_width google_adtest google_alternate_ad_url google_alternate_color google_apsail google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_criteria google_cust_gender google_cust_l google_cust_lh google_disable_video_autoplay google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_video_play_muted google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_webgl_support google_package google_debug_params dash google_restrict_data_processing google_ad_public_floor google_ad_private_floor google_traffic_source sso aihb ailel aiael aicel aifxl aiixl asro slmct samct aiict aigda aipaq google_privacy_treatments google_special_category_data rc aiapm aiapmi aiombap aiepr aipecl".split(" "),
    Kc = {
      google_pause_ad_requests: !0,
      google_user_agent_client_hint: !0
    };

  function Lc(a) {
    const b = {};
    for (let c = 0; c < Jc.length; c++) {
      const d = Jc[c];
      b[d] == null && a[d] != null && (b[d] = a[d])
    }
    return b
  }

  function Mc(a) {
    for (let b = 0, c = Jc.length; b < c; b++) {
      const d = Jc[b];
      Kc[d] || (a[d] = null)
    }
  };
  ma || ja();
  var Nc = (a, b, c) => {
    a.dataset.adsbygoogleStatus = "reserved";
    a.className += " adsbygoogle-noablate";
    if (!c.adsbygoogle) {
      c.adsbygoogle = [];
      var d = c.document,
        f = pb`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`;
      const e = Ab("SCRIPT", d);
      if (f instanceof lb) f = f.g;
      else throw Error("");
      e.src = f;
      (f = (f = (e.ownerDocument && e.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? f.nonce || f.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", f);
      (d = d.getElementsByTagName("script")[0]) &&
      d.parentNode && d.parentNode.insertBefore(e, d)
    }
    c.adsbygoogle.push({
      element: a,
      params: b
    })
  };
  var Oc = typeof sttc === "undefined" ? void 0 : sttc;

  function Pc() {
    var a = Y;
    try {
      return na(Oc, A), new Fc(JSON.parse(Oc))
    } catch (b) {
      a.u(838, b instanceof Error ? b : Error(String(b)))
    }
    return new Fc
  };

function Qc(a, b) {
    const c = document.createElement("ins");
    c.className = "adsbygoogle";

    // Check if the width and height are numbers or strings like "auto", "100%", etc.
    const width = b.google_ad_width ? b.google_ad_width : "100%";  // Default to 100% width if not provided
    const height = b.google_ad_height ? b.google_ad_height : "auto";  // Default to auto height if not provided

    // If both width and height are "auto", set display to block
    if (width === "auto" && height === "auto") {
        c.style.display = "block";
    } else {
        c.style.display = "inline-block";  // Default to inline-block if either width or height is not auto
    }

    // Apply the width and height directly (allowing "auto" or any valid CSS unit)
    c.style.width = typeof width === "number" ? `${width}px` : width;
    c.style.height = typeof height === "number" ? `${height}px` : height;

    // Add attributes dynamically
    wb(b, (e, g) => {
        g = g.replace("google", "data").replace(/_/g, "-");
        qb(c, g, e);
    });

    b = document.currentScript;
    b || (a = a.document.querySelectorAll('script[src*="show_ads.js"]'), b = a[a.length - 1]);

    na(b, pa);
    if (b.parentElement === document.head) return new Promise(e => {
        zb(() => {
            document.body.prepend ? document.body.prepend(c) : document.body.appendChild(c);
            e(c);
        });
    });

    b.after ? b.after(c) : b.parentElement.insertBefore(c, b.nextSibling);
    return c;
}



  function Rc() {
    var a = window;
    const b = new sc;
    try {
      Fa(e => {
        var g = new hc,
          k = new gc;
        try {
          var h = window;
          if (typeof h.goog_pvsid !== "number") try {
            var l = Object,
              n = l.defineProperty,
              q = Math.random;
            var u = Math.floor(q() * 2 ** 52);
            n.call(l, h, "goog_pvsid", {
              value: u,
              configurable: !1
            })
          } catch (r) {}
          var v = Number(h.goog_pvsid) || -1;
          var x = v == null ? v : La(v);
          U(k, 1, x, "0")
        } catch (r) {}
        try {
          var z = tc();
          ab(k, 2, z, Ka)
        } catch (r) {}
        try {
          U(k, 3, M(window.document.URL), "")
        } catch (r) {}
        k == null && (k = void 0);
        h = g.l;
        l = h[F];
        J(l);
        T(h, l, 2, k);
        k = new fc;
        k = U(k, 1, Ja(1194),
          0);
        try {
          var R = A(e?.name) ? e.name : "Unknown error";
          U(k, 2, M(R), "")
        } catch (r) {}
        try {
          var S = A(e?.message) ? e.message : `Caught ${e}`;
          U(k, 3, M(S), "")
        } catch (r) {}
        try {
          const r = A(e?.stack) ? e.stack : Error().stack;
          r && ab(k, 4, r.split(/\n\s*/), Ma)
        } catch (r) {}
        e = eb(g, 1, ic, k);
        g = new ec;
        try {
          U(g, 1, M("m202409230101"), "")
        } catch {}
        eb(e, 6, jc, g);
        U(e, 5, La(1), "0");
        lc(b, e)
      })
    } catch (e) {}
    var c = Pc();
    Ic(c);
    var d = Lc(a);
    Mc(a);
    d = Qc(a, d);
    const f = {
      google_loader_used: "sd",
      google_start_time: Ac
    };
    c = fb(Na(Q(c, 15)));
    c !== "" && (f.saaei = c);
    "then" in d ? d.then(e => {
      Nc(e, f, a)
    }) : Nc(d, f, a);
    console.warn("You are using deprecated show_ads.js script to display AdSense ads. To improve performance of your ads switch to the modern adsbygoogle.js script. See instructions on https://support.google.com/adsense/answer/9190028.")
  };
  var Z = Y;
  let Sc;
  try {
    Z.g && Z.g.g ? (Sc = Z.g.start((1113).toString(), 3), Rc(), Z.g.end(Sc)) : Rc()
  } catch (a) {
    let b = Z.F;
    try {
      Pb(Sc), b = Z.K(1113, new Fb(a, {
        message: Gb(a)
      }), void 0, void 0)
    } catch (c) {
      Z.u(217, c)
    }
    if (b) window.console?.error?.(a);
    else throw a;
  };
}).call(this, "[2021,\"r20240925\",\"r20190131\",null,null,null,null,\".google.com.eg\"]");
