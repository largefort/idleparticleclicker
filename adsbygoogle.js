(function(sttc) {
    'use strict';
    var aa = {}; /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */




    var n = this || self;
    function ba(a) {
        var b = da("CLOSURE_FLAGS");
        a = b && b[a];
        return null != a ? a : !1
    }
    function da(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b)
                return null;
        return b
    }
    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;
    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ka(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function la(a, b, c) {
        la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return la.apply(null, arguments)
    }
    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function na(a, b, c) {
        a = a.split(".");
        c = c || n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function oa(a) {
        return a
    }
    ;
    let pa = (new Date).getTime();
    function qa(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    }
    ;
    function ra(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    function ta(a, b) {
        let c = 0;
        a = ra(String(a)).split(".");
        b = ra(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length)
                    break;
                c = ua(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ua(0 == e[2].length, 0 == f[2].length) || ua(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }
    function ua(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    var va = ba(610401301),
        wa = ba(188588736);
    function xa() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var ya;
    const za = n.navigator;
    ya = za ? za.userAgentData || null : null;
    function Aa(a) {
        return va ? ya ? ya.brands.some(({brand: b}) => b && -1 != b.indexOf(a)) : !1 : !1
    }
    function p(a) {
        return -1 != xa().indexOf(a)
    }
    ;
    function Ba() {
        return va ? !!ya && 0 < ya.brands.length : !1
    }
    function Ca() {
        return Ba() ? !1 : p("Trident") || p("MSIE")
    }
    function Da() {
        return Ba() ? Aa("Microsoft Edge") : p("Edg/")
    }
    function Ea() {
        !p("Safari") || Fa() || (Ba() ? 0 : p("Coast")) || (Ba() ? 0 : p("Opera")) || (Ba() ? 0 : p("Edge")) || Da() || Ba() && Aa("Opera")
    }
    function Fa() {
        return Ba() ? Aa("Chromium") : (p("Chrome") || p("CriOS")) && !(Ba() ? 0 : p("Edge")) || p("Silk")
    }
    function Ga(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }
    function Ha() {
        var a = xa();
        if (Ca()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1])
                            switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                            }
                        else
                            b = "7.0";
                    else
                        b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);)
            b.push([d[1], d[2], d[3] || void 0]);
        a = Ga(b);
        return (Ba() ? 0 : p("Opera")) ? a(["Version",
        "Opera"]) : (Ba() ? 0 : p("Edge")) ? a(["Edge"]) : Da() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Fa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    }
    ;
    function Ia(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ja(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Ka(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function La(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ma(a, b) {
        a:
        {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Na(a, b) {
        return 0 <= Ia(a, b)
    }
    function Oa(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    function Pa(a) {
        Pa[" "](a);
        return a
    }
    Pa[" "] = function() {};
    var Qa = Ca();
    !p("Android") || Fa();
    Fa();
    Ea();
    var Ra = null;
    function Ta(a) {
        var b = [];
        Ua(a, function(c) {
            b.push(c)
        });
        return b
    }
    function Ua(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    l = Ra[m];
                if (null != l)
                    return l;
                if (!/^[\s\xa0]*$/.test(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return k
        }
        Va();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }
    function Va() {
        if (!Ra) {
            Ra = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Ra[f] && (Ra[f] = e)
                }
        }
    }
    ;
    var Wa = "undefined" != typeof structuredClone;
    let Xa = 0,
        Za = 0;
    function $a(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        if (b) {
            b = c;
            c = ~a;
            b ? b = ~b + 1 : c += 1;
            const [d, e] = [b, c];
            a = e;
            c = d
        }
        Xa = c >>> 0;
        Za = a >>> 0
    }
    function ab() {
        var a = Xa,
            b = Za;
        if (b & 2147483648)
            var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else
            b >>>= 0,
            a >>>= 0,
            2097151 >= b ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }
    ;
    function bb(a) {
        return Array.prototype.slice.call(a)
    }
    ;
    var r = Symbol(),
        cb = Symbol(),
        db = Symbol(),
        eb = Symbol();
    function u(a, b, c) {
        return c ? a | b : a & ~b
    }
    var x = (a, b) => {
        a[r] = b;
        return a
    };
    function fb(a) {
        a[r] |= 32;
        return a
    }
    function gb(a, b) {
        x(b, (a | 0) & -14591)
    }
    function hb(a, b) {
        x(b, (a | 34) & -14557)
    }
    function ib(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;
    var jb = {},
        kb = {};
    function lb(a) {
        return !(!a || "object" !== typeof a || a.g !== kb)
    }
    function mb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let nb;
    function ob(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        const d = a[r] | 0;
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c))))
            return !1;
        x(a, d | 1);
        return !0
    }
    var pb;
    const qb = [];
    x(qb, 55);
    pb = Object.freeze(qb);
    function rb(a) {
        if (a & 2)
            throw Error();
    }
    class sb {}
    class tb {}
    Object.freeze(new sb);
    Object.freeze(new tb);
    function ub(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;
    let vb,
        wb;
    function xb(a) {
        if (wb)
            throw Error("");
        wb = b => {
            n.setTimeout(() => {
                a(b)
            }, 0)
        }
    }
    function yb(a) {
        if (wb)
            try {
                wb(a)
            } catch (b) {
                throw b.cause = a, b;
            }
    }
    function zb() {
        const a = Error();
        ub(a, "incident");
        wb ? yb(a) : qa(a)
    }
    function Ab(a) {
        a = Error(a);
        ub(a, "warning");
        yb(a);
        return a
    }
    ;
    function Bb(a) {
        if (null != a && "boolean" !== typeof a) {
            var b = typeof a;
            throw Error(`Expected boolean but got ${"object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"}: ${a}`);
        }
        return a
    }
    const Cb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function Db(a) {
        const b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Cb.test(a)
    }
    function y(a) {
        if (null != a) {
            if (!Number.isFinite(a))
                throw Ab("enum");
            a |= 0
        }
        return a
    }
    function Eb(a) {
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }
    function Fb(a) {
        if ("number" !== typeof a)
            throw Ab("int32");
        if (!Number.isFinite(a))
            throw Ab("int32");
        return a | 0
    }
    function Gb(a) {
        return null == a ? a : Fb(a)
    }
    function Hb(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a | 0 : void 0
    }
    function Ib(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a >>> 0 : void 0
    }
    function Jb(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    function Kb(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            $a(a);
            var b = Xa,
                c = Za;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function Lb(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a))
            a = String(a);
        else {
            {
                const b = String(a);
                Jb(b) ? a = b : ($a(a), a = ab())
            }
        }
        return a
    }
    function Mb(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        Jb(a) || (16 > a.length ? $a(Number(a)) : (a = BigInt(a), Xa = Number(a & BigInt(4294967295)) >>> 0, Za = Number(a >> BigInt(32) & BigInt(4294967295))), a = ab());
        return a
    }
    function Nb(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    function Ob(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function Pb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function Qb(a, b, c, d) {
        if (null != a && "object" === typeof a && a.ma === jb)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? (a = b[cb]) ? b = a : (a = new b, d = a.A, d[r] |= 34, b = b[cb] = a) : b = new b : b = void 0, b;
        let e = c = a[r] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && x(a, e);
        return new b(a)
    }
    ;
    let Rb;
    function Sb(a, b) {
        Rb = b;
        a = new a(b);
        Rb = void 0;
        return a
    }
    ;
    function Tb(a, b) {
        return Ub(b)
    }
    function Ub(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (ob(a, void 0, 0))
                        return
                } else if (null != a && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;)
                        b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    }
    ;
    function Vb(a, b, c) {
        a = bb(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e)
                Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }
    function Wb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = ob(a, void 0, 0) ? void 0 : e && (a[r] | 0) & 2 ? a : Xb(a, b, c, void 0 !== d, e);
            else if (mb(a)) {
                const f = {};
                for (let g in a)
                    Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Wb(a[g], b, c, d, e));
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function Xb(a, b, c, d, e) {
        const f = d || c ? a[r] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = bb(a);
        for (let g = 0; g < a.length; g++)
            a[g] = Wb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }
    function Yb(a) {
        return a.ma === jb ? Zb(a, Xb(a.A, Yb, void 0, void 0, !1), !0) : null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    }
    function $b(a) {
        return a.ma === jb ? a.toJSON() : Ub(a)
    }
    var ac = Wa ? structuredClone : a => Xb(a, Yb, void 0, void 0, !1);
    function bc(a, b, c=hb) {
        if (null != a) {
            if (a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[r] | 0;
                if (d & 2)
                    return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? x(a, (d | 34) & -12293) : Xb(a, bc, d & 4 ? hb : c, !0, !0)
            }
            a.ma === jb && (c = a.A, d = c[r], a = d & 2 ? a : Sb(a.constructor, cc(c, d, !0)));
            return a
        }
    }
    function cc(a, b, c) {
        const d = c || b & 2 ? hb : gb,
            e = !!(b & 32);
        a = Vb(a, b, f => bc(f, e, d));
        a[r] = a[r] | 32 | (c ? 2 : 0);
        return a
    }
    function dc(a) {
        const b = a.A,
            c = b[r];
        return c & 2 ? Sb(a.constructor, cc(b, c, !1)) : a
    }
    ;
    function ec(a, b, c, d) {
        if (!(4 & b))
            return !0;
        if (null == c)
            return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[eb] = (a.constructor[eb] | 0) + 1) && zb();
        return 0 === c ? !1 : !(c & b)
    }
    function fc(a, b) {
        a = a.A;
        return gc(a, a[r], b)
    }
    function hc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c))
            return a[b]
    }
    function gc(a, b, c, d) {
        if (-1 === c)
            return null;
        const e = ib(b);
        if (c >= e) {
            if (b & 256)
                return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], null != d) ? (hc(a, b, e, c) && null != db && (a = vb ?? (vb = {}), b = a[db] || 0, 4 <= b || (a[db] = b + 1, zb())), d) : hc(a, b, e, c)
        }
    }
    function C(a, b, c) {
        const d = a.A;
        let e = d[r];
        rb(e);
        D(d, e, b, c);
        return a
    }
    function D(a, b, c, d, e) {
        const f = ib(b);
        if (c >= f || e) {
            let g = b;
            if (b & 256)
                e = a[a.length - 1];
            else {
                if (null == d)
                    return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && x(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    function ic(a, b, c) {
        return void 0 !== jc(a, b, c, !1)
    }
    function kc(a, b) {
        a = fc(a, b);
        return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0
    }
    function lc(a, b, c) {
        const d = a.A;
        let e = d[r];
        const f = 2 & e ? 1 : 2;
        let g = mc(d, e, b);
        var h = g[r] | 0;
        if (ec(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(g))
                g = bb(g),
                h = nc(h, e, !1),
                e = D(d, e, b, g);
            let k = a = 0;
            for (; a < g.length; a++) {
                const m = c(g[a]);
                null != m && (g[k++] = m)
            }
            k < a && (g.length = k);
            h = oc(h, e);
            h = u(h, 20, !0);
            h = u(h, 4096, !1);
            h = u(h, 8192, !1);
            x(g, h);
            2 & h && Object.freeze(g)
        }
        pc(h) || (c = h, (a = 1 === f) ? h = u(h, 2, !0) : h = u(h, 32, !1), h !== c && x(g, h), a && Object.freeze(g));
        2 === f && pc(h) && (g = bb(g), h = nc(h, e, !1), x(g, h), D(d, e, b, g));
        return g
    }
    function mc(a, b, c) {
        a = gc(a, b, c);
        return Array.isArray(a) ? a : pb
    }
    function oc(a, b) {
        var c = !1;
        0 === a && (a = nc(a, b, c));
        return a = u(a, 1, !0)
    }
    function pc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function qc(a, b, c, d) {
        const e = a.A;
        let f = e[r];
        rb(f);
        if (null == c)
            return D(e, f, b), a;
        let g = c[r] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const m = !k && !1;
        if (ec(a, g))
            for (g = 21, k && (c = bb(c), h = 0, g = nc(g, f, !0)), k = 0; k < c.length; k++)
                c[k] = d(c[k]);
        m && (c = bb(c), h = 0, g = nc(g, f, !0));
        g !== h && x(c, g);
        D(e, f, b, c);
        return a
    }
    function E(a, b, c, d) {
        const e = a.A;
        let f = e[r];
        rb(f);
        D(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    function rc(a, b, c, d) {
        const e = a.A;
        let f = e[r];
        rb(f);
        (c = sc(e, f, c)) && c !== b && null != d && (f = D(e, f, c));
        D(e, f, b, d);
        return a
    }
    function tc(a, b, c) {
        a = a.A;
        return sc(a, a[r], b) === c ? c : -1
    }
    function uc(a, b) {
        a = a.A;
        return sc(a, a[r], b)
    }
    function sc(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != gc(a, b, f) && (0 !== d && (b = D(a, b, d)), d = f)
        }
        return d
    }
    function vc(a) {
        var b = wc;
        a = a.A;
        let c = a[r];
        rb(c);
        const d = gc(a, c, 3);
        b = dc(Qb(d, b, !0, c));
        d !== b && D(a, c, 3, b);
        return b
    }
    function jc(a, b, c, d) {
        a = a.A;
        let e = a[r];
        const f = gc(a, e, c, d);
        b = Qb(f, b, !1, e);
        b !== f && null != b && D(a, e, c, b, d);
        return b
    }
    function F(a, b, c) {
        b = jc(a, b, c, !1);
        if (null == b)
            return b;
        a = a.A;
        let d = a[r];
        if (!(d & 2)) {
            const e = dc(b);
            e !== b && (b = e, D(a, d, c, b, !1))
        }
        return b
    }
    function G(a, b, c) {
        a = a.A;
        var d = a[r],
            e = d,
            f = !(2 & d),
            g = !!(2 & e),
            h = g ? 1 : 2;
        d = 1 === h;
        h = 2 === h;
        f && (f = !g);
        g = mc(a, e, c);
        var k = g[r] | 0;
        const m = !!(4 & k);
        if (!m) {
            k = oc(k, e);
            var l = g,
                q = e;
            const t = !!(2 & k);
            t && (q = u(q, 2, !0));
            let v = !t,
                w = !0,
                z = 0,
                A = 0;
            for (; z < l.length; z++) {
                const B = Qb(l[z], b, !1, q);
                if (B instanceof b) {
                    if (!t) {
                        const ca = !!((B.A[r] | 0) & 2);
                        v && (v = !ca);
                        w && (w = ca)
                    }
                    l[A++] = B
                }
            }
            A < z && (l.length = A);
            k = u(k, 4, !0);
            k = u(k, 16, w);
            k = u(k, 8, v);
            x(l, k);
            t && Object.freeze(l)
        }
        b = !!(8 & k) || d && !g.length;
        if (f && !b) {
            pc(k) && (g = bb(g), k = nc(k, e, !1), e = D(a, e, c, g));
            b = g;
            f = k;
            for (l = 0; l < b.length; l++)
                k = b[l],
                q = dc(k),
                k !== q && (b[l] = q);
            f = u(f, 8, !0);
            f = u(f, 16, !b.length);
            x(b, f);
            k = f
        }
        pc(k) || (b = k, d ? k = u(k, !g.length || 16 & k && (!m || 32 & k) ? 2 : 2048, !0) : k = u(k, 32, !1), k !== b && x(g, k), d && Object.freeze(g));
        h && pc(k) && (g = bb(g), k = nc(k, e, !1), x(g, k), D(a, e, c, g));
        return g
    }
    function xc(a, b, c) {
        null == c && (c = void 0);
        return C(a, b, c)
    }
    function yc(a, b, c, d) {
        null == d && (d = void 0);
        return rc(a, b, c, d)
    }
    function zc(a, b, c) {
        const d = a.A;
        let e = d[r];
        rb(e);
        if (null == c)
            return D(d, e, b), a;
        let f = c[r] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c);
        let m = !0,
            l = !0;
        for (let t = 0; t < c.length; t++) {
            var q = c[t];
            h || (q = !!((q.A[r] | 0) & 2), m && (m = !q), l && (l = q))
        }
        h || (f = u(f, 5, !0), f = u(f, 8, m), f = u(f, 16, l));
        k && f !== g && (c = bb(c), g = 0, f = nc(f, e, !0));
        f !== g && x(c, f);
        D(d, e, b, c);
        return a
    }
    function nc(a, b, c) {
        a = u(a, 2, !!(2 & b));
        a = u(a, 32, !!(32 & b) && c);
        return a = u(a, 2048, !1)
    }
    function Ac(a, b) {
        return Hb(fc(a, b))
    }
    function Bc(a, b) {
        a = fc(a, b);
        var c;
        null == a ? c = a : Db(a) ? "number" === typeof a ? c = Kb(a) : c = Mb(a) : c = void 0;
        return c
    }
    function H(a, b) {
        return Pb(fc(a, b))
    }
    function I(a, b) {
        return Eb(fc(a, b))
    }
    function Cc(a, b) {
        return a ?? b
    }
    function J(a, b, c=!1) {
        return Cc(kc(a, b), c)
    }
    function Dc(a, b) {
        return Cc(Ac(a, b), 0)
    }
    function Fc(a, b) {
        return Cc(Bc(a, b), 0)
    }
    function Gc(a, b) {
        a = a.A;
        let c = a[r];
        const d = gc(a, c, b);
        var e = null == d || "number" === typeof d ? d : "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && D(a, c, b, e);
        return e ?? 0
    }
    function K(a, b) {
        return Cc(H(a, b), "")
    }
    function L(a, b) {
        return Cc(I(a, b), 0)
    }
    function Hc(a, b, c, d) {
        return F(a, b, tc(a, d, c))
    }
    function M(a, b, c) {
        if (null != c) {
            var d = !!d;
            if (!Db(c))
                throw Ab("int64");
            c = "string" === typeof c ? Mb(c) : d ? Lb(c) : Kb(c)
        }
        return E(a, b, c, "0")
    }
    function Ic(a, b) {
        var c = performance.now();
        if (null != c && "number" !== typeof c)
            throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        E(a, b, c, 0)
    }
    function Jc(a, b, c) {
        return E(a, b, Ob(c), "")
    }
    ;
    var N = class {
        constructor(a)
        {
            a:
            {
                null == a && (a = Rb);
                Rb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a))
                        throw Error();
                    b = a[r] | 0;
                    if (b & 2048)
                        throw Error();
                    if (b & 64)
                        break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, mb(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c)
                            throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                x(a, b)
            }this.A = a
        }
        toJSON()
        {
            return nb ? Zb(this, this.A, !1) : Zb(this, Xb(this.A, $b, void 0, void 0, !1), !0)
        }
    }
    ;
    N.prototype.ma = jb;
    function Zb(a, b, c) {
        var d = wa ? void 0 : a.constructor.u;
        const e = (c ? a.A : b)[r];
        a = b.length;
        if (!a)
            return b;
        let f,
            g;
        if (mb(c = b[a - 1])) {
            a:
            {
                var h = c;
                let l = {},
                    q = !1;
                for (var k in h) {
                    if (!Object.prototype.hasOwnProperty.call(h, k))
                        continue;
                    let t = h[k];
                    if (Array.isArray(t)) {
                        let v = t;
                        if (ob(t, d, +k) || lb(t) && 0 === t.size)
                            t = null;
                        t != v && (q = !0)
                    }
                    null != t ? l[k] = t : q = !0
                }
                if (q) {
                    for (var m in l) {
                        h = l;
                        break a
                    }
                    h = null
                }
            }h != c && (f = !0);
            a--
        }
        for (k = +!!(e & 512) - 1; 0 < a; a--) {
            m = a - 1;
            c = b[m];
            m -= k;
            if (!(null == c || ob(c, d, m) || lb(c) && 0 === c.size))
                break;
            g = !0
        }
        if (!f && !g)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    }
    function Kc(a, b) {
        if (null == b)
            return new a;
        if (!Array.isArray(b))
            throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
            throw Error("arrays passed to jspb constructors must be mutable");
        b[r] |= 128;
        return Sb(a, fb(b))
    }
    ;
    function Lc(a, b) {
        const c = Mc;
        Mc = void 0;
        if (!b(a))
            throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    let Mc = void 0;
    const Nc = a => null !== a && void 0 !== a;
    function Oc(a) {
        return b => {
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                b = Sb(a, fb(b))
            }
            return b
        }
    }
    ;
    var Pc = class  extends N{}
    ;
    var Qc = class  extends N{}
    ;
    Qc.u = [2, 3, 4];
    var O = class {
            constructor(a, b=!1)
            {
                this.g = a;
                this.defaultValue = b
            }
        }
        ,
        Rc = class {
            constructor(a, b=0)
            {
                this.g = a;
                this.defaultValue = b
            }
        }
        ,
        Sc = class {
            constructor()
            {
                this.defaultValue = ""
            }
        }
        ,
        Tc = class {
            constructor()
            {
                this.defaultValue = ["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
                "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]
            }
        }
        ;
    var Uc = new O(203);
    function Vc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function Wc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }
    function Xc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    ;
    function Yc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }
    function Zc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    }
    ;
    var P = a => {
        var b = "Aa";
        if (a.Aa && a.hasOwnProperty(b))
            return a.Aa;
        b = new a;
        return a.Aa = b
    };
    var $c = class {
        constructor()
        {
            const a = {};
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.h = (b, c) => null != a[b] ? a[b] : c;
            this.i = (b, c) => null != a[b] ? a[b] : c;
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.s = () => {}
        }
    }
    ;
    function Q(a) {
        return P($c).g(a.g, a.defaultValue)
    }
    function ad(a) {
        return P($c).h(a.g, a.defaultValue)
    }
    function bd() {
        var a = cd;
        return P($c).i(14, a.defaultValue)
    }
    ;
    function dd(a, b) {
        const c = {};
        for (const d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function ed(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function fd(a) {
        const b = [];
        let c = 0;
        for (const d in a)
            b[c++] = a[d];
        return b
    }
    function gd(a) {
        const b = {};
        for (const c in a)
            b[c] = a[c];
        return b
    }
    ;
    var hd;
    var id = class {
        constructor(a)
        {
            this.h = a
        }
        toString()
        {
            return this.h + ""
        }
    }
    ;
    function jd(a, b) {
        a = kd.exec(ld(a).toString());
        var c = a[3] || "";
        return md(a[1] + nd("?", a[2] || "", b) + nd("#", c))
    }
    function ld(a) {
        return a instanceof id && a.constructor === id ? a.h : "type_error:TrustedResourceUrl"
    }
    var kd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        od = {};
    function md(a) {
        if (void 0 === hd) {
            var b = null;
            var c = n.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (d) {
                    n.console && n.console.error(d.message)
                }
                hd = b
            } else
                hd = b
        }
        a = (b = hd) ? b.createScriptURL(a) : a;
        return new id(a, od)
    }
    function nd(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    }
    ;
    var pd = class {
        constructor(a)
        {
            this.g = a
        }
        toString()
        {
            return this.g.toString()
        }
    }
    ; /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */



    var qd = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    function rd(a, ...b) {
        if (0 === b.length)
            return md(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return md(c)
    }
    ;
    function sd(a, b=`unexpected value ${a}!`) {
        throw Error(b);
    }
    ;
    const td = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
    function ud(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    ;
    function vd(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function wd(a) {
        this.g = a || n.document || document
    }
    wd.prototype.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)
            b = b.parentNode;
        return b == a
    };
    function xd() {
        return va && ya ? ya.mobile : !yd() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }
    function yd() {
        return va && ya ? !ya.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    }
    ;
    var zd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ad = /#|$/;
    function Bd(a, b) {
        var c = a.search(Ad);
        a:
        {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    ;
    function Cd(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a:
                {
                    try {
                        Pa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }return b
        } catch {
            return !1
        }
    }
    function Dd(a) {
        return Cd(a.top) ? a.top : null
    }
    function Ed(a, b) {
        const c = Fd("SCRIPT", a);
        c.src = ld(b);
        (void 0)?.oc || (b = (b=(c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }
    function Gd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    function Hd() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }
    function Id(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    function Jd(a) {
        const b = a.length;
        if (0 == b)
            return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Kd = /^([0-9.]+)px$/,
        Ld = /^(-?[0-9.]{1,30})$/;
    function Md(a) {
        if (!Ld.test(a))
            return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    function R(a) {
        return (a = Kd.exec(a)) ? +a[1] : null
    }
    var Nd = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c)
                    return a;
                a:
                {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }if (!(a = d))
                    break
            }
            return null
        },
        Od = Wc(() => xd() ? 2 : yd() ? 1 : 0),
        Qd = a => {
            Id({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let Rd = [];
    const Sd = () => {
        const a = Rd;
        Rd = [];
        for (const b of a)
            try {
                b()
            } catch {}
    };
    function Td() {
        var a = Ud;
        var b = P($c).j(1934, a.defaultValue);
        a = S.document;
        if (b.length && a.head)
            for (const c of b)
                c && a.head && (b = Fd("META"), a.head.appendChild(b), b.httpEquiv = "origin-trial", b.content = c)
    }
    var Vd = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Wd = a => {
            if ("number" !== typeof a.goog_pvsid)
                try {
                    Object.defineProperty(a, "goog_pvsid", {
                        value: Vd(),
                        configurable: !1
                    })
                } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Yd = a => {
            var b = Xd;
            "complete" === b.readyState || "interactive" === b.readyState ? (Rd.push(a), 1 == Rd.length && (window.Promise ? Promise.resolve().then(Sd) : window.setImmediate ? setImmediate(Sd) : setTimeout(Sd, 0))) : b.addEventListener("DOMContentLoaded", a)
        };
    function Fd(a, b=document) {
        return b.createElement(String(a).toLowerCase())
    }
    ;
    function Zd(a, b, c=null, d=!1, e=!1) {
        $d(a, b, c, d, e)
    }
    function $d(a, b, c, d, e=!1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Fd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Ia(h, f);
                    0 <= k && Array.prototype.splice.call(h, k, 1)
                }
                Zc(f, "load", g);
                Zc(f, "error", g)
            };
            Yc(f, "load", g);
            Yc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var be = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Id(a, (d, e) => {
                if (d || 0 === d)
                    c += `&${e}=${encodeURIComponent("" + d)}`
            });
            ae(c)
        },
        ae = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Zd(b, a, void 0, !1, !1)
        };
    var Xd = document,
        S = window;
    function ce(a) {
        this.g = a || {
            cookie: ""
        }
    }
    ce.prototype.set = function(a, b, c) {
        let d,
            e,
            f,
            g = !1,
            h;
        "object" === typeof c && (h = c.qc, g = c.sc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Ab);
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    ce.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = ra(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    };
    ce.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    ce.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d,
            e;
        for (let f = 0; f < a.length; f++)
            e = ra(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--)
            a = b[c],
            this.get(a),
            this.set(a, "", {
                Ab: 0,
                path: void 0,
                domain: void 0
            })
    };
    function de(a, b=window) {
        if (J(a, 5))
            try {
                return b.localStorage
            } catch {}
        return null
    }
    function ee(a=window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    ;
    let fe = null;
    var ge = (a, b=[]) => {
        let c = !1;
        n.google_logging_queue || (c = !0, n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == fe) {
                fe = !1;
                try {
                    const d = Dd(n);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (fe = !0);
                    ee(n)?.getItem("google_logging") && (fe = !0)
                } catch (d) {}
            }
            a = fe
        }
        a && Ed(n.document, rd`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };
    function he(a=n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch {}
        return b?.pageViewId&&b?.canonicalUrl ? b : null
    }
    function ie(a=he()) {
        return a ? Cd(a.master) ? a.master : null : null
    }
    ;
    var je = a => {
            a = ie(he(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        ke = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        le = () => {
            if (!S)
                return !1;
            try {
                return !(!S.navigator.standalone && !S.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        me = a => {
            if (!a)
                return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    class ne {
        constructor(a, b)
        {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var oe = a => !!(a.error && a.meta && a.id);
    const pe = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var qe = class {
            constructor(a, b)
            {
                this.g = a;
                this.h = b
            }
        }
        ,
        re = class {
            constructor(a, b, c)
            {
                this.url = a;
                this.l = b;
                this.ab = !!c;
                this.depth = null
            }
        }
        ;
    let se = null;
    function te() {
        if (null === se) {
            se = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    se = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return se
    }
    ;
    function ue() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function ve() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    }
    ;
    var we = class {
        constructor(a, b)
        {
            var c = ve() || ue();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    }
    ;
    const xe = n.performance,
        ye = !!(xe && xe.mark && xe.measure && xe.clearMarks),
        ze = Wc(() => {
            var a;
            if (a = ye)
                a = te(),
                a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });
    function Ae(a) {
        a && xe && ze() && (xe.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), xe.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function Be(a) {
        a.g = !1;
        if (a.h != a.i.google_js_reporting_queue) {
            if (ze()) {
                var b = a.h;
                const c = b.length;
                b = "string" === typeof b ? b.split("") : b;
                for (let d = 0; d < c; d++)
                    d in b && Ae.call(void 0, b[d])
            }
            a.h.length = 0
        }
    }
    class Ce {
        constructor(a)
        {
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = ze() || (null != b ? b : 1 > Math.random())
        }
        start(a, b)
        {
            if (!this.g)
                return null;
            a = new we(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            xe && ze() && xe.mark(b);
            return a
        }
        end(a)
        {
            if (this.g && "number" === typeof a.value) {
                a.duration = (ve() || ue()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                xe && ze() && xe.mark(b);
                !this.g || 2048 < this.h.length ||
                this.h.push(a)
            }
        }
    }
    ;
    function De(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function Ee(a, b, c, d, e) {
        const f = [];
        Id(a, function(g, h) {
            (g = Fe(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Fe(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(Fe(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0, 2 > e ? encodeURIComponent(Ee(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Ge(a) {
        let b = 1;
        for (const c in a.h)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }
    function He(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Ge(a) - b.length;
        if (0 > d)
            return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let m = Ee(h[k], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Ie {
        constructor()
        {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    }
    ;
    function Je(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;)
                    d = a,
                    a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    var Le = class {
        constructor(a, b, c=null)
        {
            this.B = a;
            this.C = b;
            this.h = c;
            this.g = null;
            this.i = !1;
            this.s = this.J
        }
        ib(a)
        {
            this.s = a
        }
        Da(a)
        {
            this.g = a
        }
        j(a)
        {
            this.i = a
        }
        ea(a, b, c)
        {
            let d,
                e;
            try {
                this.h && this.h.g ? (e = this.h.start(a.toString(), 3), d = b(), this.h.end(e)) : d = b()
            } catch (f) {
                b = this.C;
                try {
                    Ae(e),
                    b = this.s(a, new ne(f, {
                        message: Je(f)
                    }), void 0, c)
                } catch (g) {
                    this.J(217, g)
                }
                if (b)
                    window.console?.error?.(f);
                else
                    throw f;
            }
            return d
        }
        oa(a, b)
        {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        J(a, b, c, d, e)
        {
            e = e || "jserror";
            let f;
            try {
                const Sa = new Ie;
                var g = Sa;
                g.g.push(1);
                g.h[1] = De("context", a);
                oe(b) || (b = new ne(b, {
                    message: Je(b)
                }));
                if (b.msg) {
                    g = Sa;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = De("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g)
                    try {
                        this.g(b)
                    } catch (Ya) {}
                if (d)
                    try {
                        d(b)
                    } catch (Ya) {}
                d = Sa;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = n;
                k = [];
                b = null;
                do {
                    var m = d;
                    if (Cd(m)) {
                        var l = m.location.href;
                        b = m.document && m.document.referrer || null
                    } else
                        l = b,
                        b = null;
                    k.push(new re(l || "", m));
                    try {
                        d = m.parent
                    } catch (Ya) {
                        d = null
                    }
                } while (d && m != d);
                for (let Ya = 0, eg = k.length - 1; Ya <= eg; ++Ya)
                    k[Ya].depth =
                    eg - Ya;
                m = n;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == k.length - 1)
                    for (l = 1; l < k.length; ++l) {
                        var q = k[l];
                        q.url || (q.url = m.location.ancestorOrigins[l - 1] || "", q.ab = !0)
                    }
                var t = k;
                let Ec = new re(n.location.href, n, !1);
                m = null;
                const Pd = t.length - 1;
                for (q = Pd; 0 <= q; --q) {
                    var v = t[q];
                    !m && pe.test(v.url) && (m = v);
                    if (v.url && !v.ab) {
                        Ec = v;
                        break
                    }
                }
                v = null;
                const hk = t.length && t[Pd].url;
                0 != Ec.depth && hk && (v = t[Pd]);
                f = new qe(Ec, v);
                if (f.h) {
                    t = Sa;
                    var w = f.h.url || "";
                    t.g.push(4);
                    t.h[4] = De("top", w)
                }
                var z = {
                    url: f.g.url ||
                    ""
                };
                if (f.g.url) {
                    var A = f.g.url.match(zd),
                        B = A[1],
                        ca = A[3],
                        sa = A[4];
                    w = "";
                    B && (w += B + ":");
                    ca && (w += "//", w += ca, sa && (w += ":" + sa));
                    var fg = w
                } else
                    fg = "";
                B = Sa;
                z = [z, {
                    url: fg
                }];
                B.g.push(5);
                B.h[5] = z;
                Ke(this.B, e, Sa, this.i, c)
            } catch (Sa) {
                try {
                    Ke(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Je(Sa),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (Ec) {}
            }
            return this.C
        }
        Y(a, b)
        {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    }
    ;
    var Me = a => "string" === typeof a,
        Ne = a => void 0 === a;
    var Oe = class  extends N{}
    ;
    Oe.u = [2, 8];
    var Pe = [3, 4, 5],
        Qe = [6, 7];
    function Re(a) {
        return null != a ? !a : a
    }
    function Se(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b)
                return e;
            null == e && (c = !0)
        }
        if (!c)
            return !b
    }
    function Te(a, b) {
        var c = G(a, Oe, 2);
        if (!c.length)
            return Ue(a, b);
        a = L(a, 1);
        if (1 === a)
            return Re(Te(c[0], b));
        c = Ka(c, d => () => Te(d, b));
        switch (a) {
        case 2:
            return Se(c, !1);
        case 3:
            return Se(c, !0)
        }
    }
    function Ue(a, b) {
        const c = uc(a, Pe);
        a:
        {
            switch (c) {
            case 3:
                var d = L(a, tc(a, Pe, 3));
                break a;
            case 4:
                d = L(a, tc(a, Pe, 4));
                break a;
            case 5:
                d = L(a, tc(a, Pe, 5));
                break a
            }
            d = void 0
        }if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = lc(a, 8, Pb);
                var f = b(...e)
            } catch (g) {
                return
            }
            e = L(a, 1);
            if (4 === e)
                return !!f;
            if (5 === e)
                return null != f;
            if (12 === e)
                a = K(a, tc(a, Qe, 7));
            else
                a:
                {
                    switch (c) {
                    case 4:
                        a = Gc(a, tc(a, Qe, 6));
                        break a;
                    case 5:
                        a = K(a, tc(a, Qe, 7));
                        break a
                    }
                    a = void 0
                }if (null != a) {
                if (6 === e)
                    return f === a;
                if (9 === e)
                    return null != f && 0 === ta(String(f), a);
                if (null != f)
                    switch (e) {
                    case 7:
                        return f <
                        a;
                    case 8:
                        return f > a;
                    case 12:
                        return Me(a) && Me(f) && (new RegExp(a)).test(f);
                    case 10:
                        return null != f && -1 === ta(String(f), a);
                    case 11:
                        return null != f && 1 === ta(String(f), a)
                    }
            }
        }
    }
    function Ve(a, b) {
        return !a || !(!b || !Te(a, b))
    }
    ;
    var We = class  extends N{}
    ;
    We.u = [4];
    var Xe = class  extends N{
        getValue()
        {
            return F(this, We, 2)
        }
    }
    ;
    var Ye = class  extends N{}
        ,
        Ze = Oc(Ye);
    Ye.u = [5];
    var $e = [1, 2, 3, 6, 7];
    var af = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    function bf(a, b) {
        try {
            const c = d => [{
                [d.Ea]: d.Ba
            }];
            return JSON.stringify([a.filter(d => d.la).map(c), b.toJSON(), a.filter(d => !d.la).map(c)])
        } catch (c) {
            return cf(c, b), ""
        }
    }
    function cf(a, b) {
        try {
            be({
                m: Je(a instanceof Error ? a : Error(String(a))),
                b: L(b, 1) || null,
                v: K(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var df = class {
        constructor(a, b)
        {
            var c = new af;
            a = E(c, 1, y(a), 0);
            b = Jc(a, 2, b);
            a = b.A;
            c = a[r];
            this.i = c & 2 ? b : Sb(b.constructor, cc(a, c, !0))
        }
    }
    ;
    var ef = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    ef.u = [2];
    var ff = class  extends N{
        constructor()
        {
            super()
        }
        getValue()
        {
            return L(this, 1)
        }
    }
    ;
    var gf = class  extends N{
        constructor()
        {
            super()
        }
        getWidth()
        {
            return Fc(this, 1)
        }
        getHeight()
        {
            return Fc(this, 2)
        }
    }
    ;
    var hf = class  extends N{
        constructor()
        {
            super()
        }
        getContentUrl()
        {
            return K(this, 4)
        }
    }
    ;
    var wc = class  extends N{}
    ;
    var jf = class  extends N{}
    ;
    var kf = class  extends N{
        constructor()
        {
            super()
        }
        getContentUrl()
        {
            return K(this, 1)
        }
    }
    ;
    var lf = class  extends N{}
    ;
    function mf(a) {
        var b = new nf;
        return E(b, 1, y(a), 0)
    }
    var nf = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    var of = class  extends N{
            constructor()
            {
                super()
            }
        }
        ,
        pf = [4, 5, 6, 8, 9, 10, 11, 12];
    var qf = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    function rf(a, b) {
        return E(a, 1, y(b), 0)
    }
    function sf(a, b) {
        return E(a, 2, y(b), 0)
    }
    var tf = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    var uf = class  extends N{
            constructor()
            {
                super()
            }
        }
        ,
        vf = [1, 2];
    function wf(a, b) {
        return xc(a, 1, b)
    }
    function xf(a, b) {
        return zc(a, 2, b)
    }
    function yf(a, b) {
        return qc(a, 4, b, Fb)
    }
    function zf(a, b) {
        return zc(a, 5, b)
    }
    function Af(a, b) {
        return E(a, 6, y(b), 0)
    }
    var Bf = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    Bf.u = [2, 4, 5];
    var Cf = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    Cf.u = [5];
    var Df = [1, 2, 3, 4];
    var Ef = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    Ef.u = [2, 3];
    function Ff(a) {
        var b = new Gf;
        return yc(b, 4, Hf, a)
    }
    var Gf = class  extends N{
            constructor()
            {
                super()
            }
            getTagSessionCorrelator()
            {
                return Fc(this, 2)
            }
        }
        ,
        Hf = [4, 5, 7, 8];
    var If = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    var Jf = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    Jf.u = [4, 5];
    var Kf = class  extends N{
        constructor()
        {
            super()
        }
        getTagSessionCorrelator()
        {
            return Fc(this, 1)
        }
    }
    ;
    Kf.u = [2];
    var Lf = class  extends N{
            constructor()
            {
                super()
            }
        }
        ,
        Mf = [4, 6];
    class Nf extends df {
        constructor()
        {
            super(...arguments)
        }
    }
    function Of(a, ...b) {
        Pf(a, ...b.map(c => ({
            la: !0,
            Ea: 3,
            Ba: c.toJSON()
        })))
    }
    function Qf(a, ...b) {
        Pf(a, ...b.map(c => ({
            la: !0,
            Ea: 4,
            Ba: c.toJSON()
        })))
    }
    function Rf(a, ...b) {
        Pf(a, ...b.map(c => ({
            la: !0,
            Ea: 7,
            Ba: c.toJSON()
        })))
    }
    var Sf = class  extends Nf{}
    ;
    var Tf = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };
    function Pf(a, ...b) {
        try {
            a.C && 65536 <= bf(a.g.concat(b), a.i).length && Uf(a),
            a.j && !a.s && (a.s = !0, Vf(a.j, () => {
                Uf(a)
            })),
            a.g.push(...b),
            a.g.length >= a.B && Uf(a),
            a.g.length && null === a.h && (a.h = setTimeout(() => {
                Uf(a)
            }, a.H))
        } catch (c) {
            cf(c, a.i)
        }
    }
    function Uf(a) {
        null !== a.h && (clearTimeout(a.h), a.h = null);
        if (a.g.length) {
            var b = bf(a.g, a.i);
            a.D("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Wf = class  extends Sf{
            constructor(a, b, c, d, e, f)
            {
                super(a, b);
                this.D = Tf;
                this.H = c;
                this.B = d;
                this.C = e;
                this.j = f;
                this.g = [];
                this.h = null;
                this.s = !1
            }
        }
        ,
        Xf = class  extends Wf{
            constructor(a, b, c=1E3, d=100, e=!1, f)
            {
                super(a, b, c, d, e && !0, f)
            }
        }
        ;
    function Yf(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = M(b, 1, c);
        c = Wd(window);
        b = M(b, 2, c);
        return M(b, 6, a.s)
    }
    function Zf(a, b, c, d, e, f) {
        if (a.i) {
            var g = sf(rf(new tf, b), c);
            b = Af(xf(wf(zf(yf(new Bf, d), e), g), a.g.slice()), f);
            b = Ff(b);
            Qf(a.h, Yf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(h => L(h, 1) === L(g, 1) && L(h, 2) === c))
                a.g.push(g),
                100 < a.g.length && a.g.shift()
        }
    }
    function $f(a, b, c, d) {
        if (a.i) {
            var e = new qf;
            b = C(e, 1, Gb(b));
            c = C(b, 2, Gb(c));
            d = C(c, 3, y(d));
            c = new Gf;
            d = yc(c, 8, Hf, d);
            Qf(a.h, Yf(a, d))
        }
    }
    var ag = class {
        constructor(a, b, c, d=new Xf(6, "unknown", b))
        {
            this.s = a;
            this.j = c;
            this.h = d;
            this.g = [];
            this.i = 0 < a && Hd() < 1 / a
        }
    }
    ;
    var bg = class {
        constructor()
        {
            this.I = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    }
    ;
    var cg = /^true$/.test("false");
    function dg(a, b) {
        switch (b) {
        case 1:
            return L(a, tc(a, $e, 1));
        case 2:
            return L(a, tc(a, $e, 2));
        case 3:
            return L(a, tc(a, $e, 3));
        case 6:
            return L(a, tc(a, $e, 6));
        default:
            return null
        }
    }
    function gg(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return J(a, 1);
        case 7:
            return K(a, 3);
        case 2:
            return Gc(a, 2);
        case 3:
            return K(a, 3);
        case 6:
            return lc(a, 4, Pb);
        default:
            return null
        }
    }
    const hg = Wc(() => {
        if (!cg)
            return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage
            } catch {
                b = null
            }
            if (b=b?.getItem("GGDFSSK"))
                return JSON.parse(b)
        } catch {}
        return {}
    });
    function ig(a, b, c, d=0) {
        P(jg).i[d] = P(jg).i[d]?.add(b) ?? (new Set).add(b);
        const e = hg();
        if (null != e[b])
            return e[b];
        b = kg(d)[b];
        if (!b)
            return c;
        b = Ze(JSON.stringify(b));
        b = lg(b);
        a = gg(b, a);
        return null != a ? a : c
    }
    function lg(a) {
        const b = P(bg).I;
        if (b) {
            const c = Ma(G(a, Xe, 5), d => Ve(F(d, Oe, 1), b));
            if (c)
                return c.getValue() ?? null
        }
        return F(a, We, 4) ?? null
    }
    class jg {
        constructor()
        {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new Map
        }
    }
    function mg(a, b=!1, c) {
        return !!ig(1, a, b, c)
    }
    function ng(a, b=0, c) {
        a = Number(ig(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function og(a, b="", c) {
        a = ig(3, a, b, c);
        return "string" === typeof a ? a : b
    }
    function pg(a, b=[], c) {
        a = ig(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function kg(a) {
        return P(jg).h[a] || (P(jg).h[a] = {})
    }
    function qg(a, b) {
        const c = kg(b);
        Id(a, (d, e) => c[e] = d)
    }
    function rg(a, b, c, d, e=!1) {
        var f = [],
            g = [];
        for (const q of b) {
            b = kg(q);
            for (const t of a) {
                var h = uc(t, $e);
                const v = dg(t, h);
                if (v) {
                    a:
                    {
                        var k = v;
                        var m = P(jg).g.get(q)?.get(v)?.slice(0) ?? [],
                            l = new Cf;
                        switch (h) {
                        case 1:
                            rc(l, 1, Df, y(k));
                            break;
                        case 2:
                            rc(l, 2, Df, y(k));
                            break;
                        case 3:
                            rc(l, 3, Df, y(k));
                            break;
                        case 6:
                            rc(l, 4, Df, y(k));
                            break;
                        default:
                            k = void 0;
                            break a
                        }
                        qc(l, 5, m, Fb);
                        k = l
                    }k&&P(jg).i[q]?.has(v) && f.push(k);
                    k&&P(jg).g.get(q)?.has(v) && g.push(k);
                    e || (k = v, h = q, m = d, l = P(jg), l.g.has(h) || l.g.set(h, new Map), l.g.get(h).has(k) || l.g.get(h).set(k,
                    []), m && l.g.get(h).get(k).push(m));
                    b[v] = t.toJSON()
                }
            }
        }
        if (f.length || g.length)
            a = d ?? void 0,
            c.i && c.j && (d = new Ef, f = zc(d, 2, f), g = zc(f, 3, g), a && E(g, 1, Gb(a), 0), f = new Gf, g = yc(f, 7, Hf, g), Qf(c.h, Yf(c, g)))
    }
    function sg(a, b) {
        b = kg(b);
        for (const c of a) {
            a = Ze(JSON.stringify(c));
            const d = uc(a, $e);
            (a = dg(a, d)) && (b[a] || (b[a] = c))
        }
    }
    function tg() {
        return Object.keys(P(jg).h).map(a => Number(a))
    }
    function ug(a) {
        P(jg).j.includes(a) || qg(kg(4), a)
    }
    ;
    function T(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function vg(a, b, c) {
        return b[a] || c
    }
    function wg(a) {
        T(5, mg, a);
        T(6, ng, a);
        T(7, og, a);
        T(8, pg, a);
        T(13, sg, a);
        T(15, ug, a)
    }
    function xg(a) {
        T(4, b => {
            P(bg).I = b
        }, a);
        T(9, (b, c) => {
            var d = P(bg);
            null == d.I[3][b] && (d.I[3][b] = c)
        }, a);
        T(10, (b, c) => {
            var d = P(bg);
            null == d.I[4][b] && (d.I[4][b] = c)
        }, a);
        T(11, (b, c) => {
            var d = P(bg);
            null == d.I[5][b] && (d.I[5][b] = c)
        }, a);
        T(14, b => {
            var c = P(bg);
            for (const d of [3, 4, 5])
                Object.assign(c.I[d], b[d])
        }, a)
    }
    function yg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ;
    function zg(a, b, c) {
        a.i = vg(1, b, () => {});
        a.j = (d, e) => vg(2, b, () => [])(d, c, e);
        a.g = () => vg(3, b, () => [])(c);
        a.h = d => {
            vg(16, b, () => {})(d, c)
        }
    }
    class Ag {
        i() {}
        h() {}
        j()
        {
            return []
        }
        g()
        {
            return []
        }
    }
    ;
    function Ke(a, b, c, d=!1, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                let f;
                c instanceof Ie ? f = c : (f = new Ie, Id(c, (h, k) => {
                    var m = f;
                    const l = m.j++;
                    h = De(k, h);
                    m.g.push(l);
                    m.h[l] = h
                }));
                const g = He(f, "/pagead/gen_204?id=" + b + "&");
                g && Zd(n, g)
            } catch (f) {}
    }
    function Bg(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class Cg {
        constructor()
        {
            this.g = Math.random()
        }
    }
    ;
    let Dg,
        Eg;
    const Fg = new Ce(window);
    (a => {
        Dg = a ?? new Cg;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Bg(Dg, window.google_srt);
        Eg = new Le(Dg, !0, Fg);
        Eg.Da(() => {});
        Eg.j(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Be(Fg) : Fg.g && Yc(window, "load", () => {
            window.google_measure_js_timing || Be(Fg)
        })
    })();
    var Gg = {
        Wb: 0,
        Vb: 1,
        Sb: 2,
        Nb: 3,
        Tb: 4,
        Ob: 5,
        Ub: 6,
        Qb: 7,
        Rb: 8,
        Mb: 9,
        Pb: 10,
        Xb: 11
    };
    var Hg = {
        Zb: 0,
        ac: 1,
        Yb: 2
    };
    function Ig(a) {
        if (0 != a.g)
            throw Error("Already resolved/rejected.");
    }
    var Lg = class {
        constructor()
        {
            this.h = new Jg(this);
            this.g = 0
        }
        resolve(a)
        {
            Ig(this);
            this.g = 1;
            this.j = a;
            Kg(this.h)
        }
    }
    ;
    function Kg(a) {
        switch (a.g.g) {
        case 0:
            break;
        case 1:
            a.h && a.h(a.g.j);
            break;
        case 2:
            a.i && a.i(a.g.i);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    var Jg = class {
        constructor(a)
        {
            this.g = a
        }
        then(a, b)
        {
            if (this.h)
                throw Error("Then functions already set.");
            this.h = a;
            this.i = b;
            Kg(this)
        }
    }
    ;
    const Mg = class {
        constructor(a)
        {
            this.g = a.slice(0)
        }
        forEach(a)
        {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a)
        {
            return new Mg(Ja(this.g, a))
        }
        apply(a)
        {
            return new Mg(a(this.g.slice(0)))
        }
        get(a)
        {
            return this.g[a]
        }
        add(a)
        {
            const b = this.g.slice(0);
            b.push(a);
            return new Mg(b)
        }
    }
    ;
    function Ng(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++)
            c.push(a[e]);
        c.forEach(b, void 0)
    }
    ;
    const Pg = class {
        constructor()
        {
            this.g = {};
            this.h = {}
        }
        set(a, b)
        {
            const c = Og(a);
            this.g[c] = b;
            this.h[c] = a
        }
        get(a, b)
        {
            a = Og(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        clear()
        {
            this.g = {};
            this.h = {}
        }
    }
    ;
    function Og(a) {
        return a instanceof Object ? String(fa(a)) : a + ""
    }
    ;
    function Qg(a) {
        return new Rg({
            value: a
        }, null)
    }
    function Sg(a) {
        return new Rg(null, a)
    }
    function Tg(a) {
        try {
            return Qg(a())
        } catch (b) {
            return Sg(b)
        }
    }
    function Ug(a) {
        return null != a.g ? a.getValue() : null
    }
    function Vg(a, b) {
        null != a.g && b(a.getValue());
        return a
    }
    function Wg(a, b) {
        null != a.g || b(a.h);
        return a
    }
    class Rg {
        constructor(a, b)
        {
            this.g = a;
            this.h = b
        }
        getValue()
        {
            return this.g.value
        }
        map(a)
        {
            return null != this.g ? (a = a(this.getValue()), a instanceof Rg ? a : Qg(a)) : this
        }
    }
    ;
    const Xg = class {
        constructor(a)
        {
            this.g = new Pg;
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a)
        {
            this.g.set(a, !0)
        }
        contains(a)
        {
            return void 0 !== this.g.g[Og(a)]
        }
    }
    ;
    class Yg {
        constructor()
        {
            this.g = new Pg
        }
        set(a, b)
        {
            let c = this.g.get(a);
            c || (c = new Xg, this.g.set(a, c));
            c.add(b)
        }
    }
    ;
    var U = class  extends N{
        getId()
        {
            return H(this, 3)
        }
    }
    ;
    U.u = [4];
    class Zg {
        constructor({nb: a, bc: b, nc: c, Eb: d})
        {
            this.g = b;
            this.j = new Mg(a || []);
            this.i = d;
            this.h = c
        }
    }
    ;
    const ah = a => {
            const b = [],
                c = a.j;
            c && c.g.length && b.push({
                V: "a",
                da: $g(c)
            });
            null != a.g && b.push({
                V: "as",
                da: a.g
            });
            null != a.h && b.push({
                V: "i",
                da: String(a.h)
            });
            null != a.i && b.push({
                V: "rp",
                da: String(a.i)
            });
            b.sort(function(d, e) {
                return d.V.localeCompare(e.V)
            });
            b.unshift({
                V: "t",
                da: "aa"
            });
            return b
        },
        $g = a => {
            a = a.g.slice(0).map(bh);
            a = JSON.stringify(a);
            return Jd(a)
        },
        bh = a => {
            const b = {};
            null != H(a, 7) && (b.q = H(a, 7));
            null != Ac(a, 2) && (b.o = Ac(a, 2));
            null != Ac(a, 5) && (b.p = Ac(a, 5));
            return b
        };
    var ch = class  extends N{
        setLocation(a)
        {
            return C(this, 1, y(a))
        }
    }
    ;
    function dh(a) {
        const b = [].slice.call(arguments).filter(Vc(e => null === e));
        if (!b.length)
            return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Wa || []);
            d = Object.assign(d, e.hb)
        });
        return new eh(c, d)
    }
    function fh(a) {
        switch (a) {
        case 1:
            return new eh(null, {
                google_ad_semantic_area: "mc"
            });
        case 2:
            return new eh(null, {
                google_ad_semantic_area: "h"
            });
        case 3:
            return new eh(null, {
                google_ad_semantic_area: "f"
            });
        case 4:
            return new eh(null, {
                google_ad_semantic_area: "s"
            });
        default:
            return null
        }
    }
    function gh(a) {
        if (null == a)
            var b = null;
        else {
            var c = ah(a);
            a = [];
            for (b of c)
                c = String(b.da),
                a.push(b.V + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new eh(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class eh {
        constructor(a, b)
        {
            this.Wa = a;
            this.hb = b
        }
    }
    ;
    const hh = new eh(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var ih = Oc(class  extends N{}
    );
    var jh = class  extends N{}
    ;
    var kh = class  extends N{}
    ;
    var lh = class  extends N{}
    ;
    lh.u = [6, 7, 9, 10, 11];
    var mh = class  extends N{}
    ;
    var nh = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    nh.u = [1];
    function oh(a) {
        if (1 != a.nodeType)
            var b = !1;
        else if (b = "INS" == a.tagName)
            a:
            {
                b = ["adsbygoogle-placeholder"];
                a = a.className ? a.className.split(/\s+/) : [];
                for (var c = {}, d = 0; d < a.length; ++d)
                    c[a[d]] = !0;
                for (d = 0; d < b.length; ++d)
                    if (!c[b[d]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }return b
    }
    ;
    var ph = new O(1271),
        qh = new O(1322, !0),
        rh = new Rc(1130, 100),
        cd = new Sc,
        sh = new O(1247, !0),
        th = new O(316),
        uh = new O(1207, !0),
        vh = new O(313),
        wh = new O(369),
        xh = new O(1302),
        yh = new O(1318),
        zh = new O(217),
        Ah = new O(1327),
        Bh = new Rc(579884443),
        Ch = new O(579884441),
        Dh = new Rc(579884442),
        Eh = new O(506914611),
        Fh = new O(506852289),
        Gh = new O(1120),
        Hh = new O(567362967, !0),
        Ih = new O(45615403, !0),
        Jh = new Rc(1079, 5),
        Kh = new O(10009, !0),
        Ud = new Tc,
        Lh = new O(84);
    function Mh(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType;)
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        oh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }
    ;
    function Nh(a, b) {
        const c = e => {
                e = Oh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Oh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
        case 0:
            return {
                init: Ph(a.previousSibling, c),
                ha: e => Ph(e.previousSibling, c),
                na: 0
            };
        case 2:
            return {
                init: Ph(a.lastChild, c),
                ha: e => Ph(e.previousSibling, c),
                na: 0
            };
        case 3:
            return {
                init: Ph(a.nextSibling, d),
                ha: e => Ph(e.nextSibling, d),
                na: 3
            };
        case 1:
            return {
                init: Ph(a.firstChild, d),
                ha: e => Ph(e.nextSibling, d),
                na: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function Oh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function Ph(a, b) {
        return a && b(a) ? a : null
    }
    ;
    var Qh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Rh = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };
    function Sh(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
    function Th(a) {
        return Sh(a).clientWidth
    }
    ;
    function Uh(a, b) {
        do {
            const c = Gd(a, b);
            if (c && "fixed" == c.position)
                return !1
        } while (a = a.parentElement);
        return !0
    }
    ;
    function Vh(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = R(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    function Wh(a, b) {
        return !((Ld.test(b.google_ad_width) || Kd.test(a.style.width)) && (Ld.test(b.google_ad_height) || Kd.test(a.style.height)))
    }
    function Xh(a, b) {
        return (a = Yh(a, b)) ? a.y : 0
    }
    function Yh(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
    function Zh(a, b, c, d, e) {
        if (a !== a.top)
            return Dd(a) ? 3 : 16;
        if (!(488 > Th(a)))
            return 4;
        if (!(a.innerHeight >= a.innerWidth))
            return 5;
        const f = Th(a);
        if (!f || (f - c) / f > d)
            a = 6;
        else {
            if (c = "true" !== e.google_full_width_responsive)
                a:
                {
                    c = b.parentElement;
                    for (b = Th(a); c; c = c.parentElement)
                        if ((d = Gd(c, a)) && (e = R(d.width)) && !(e >= b) && "visible" !== d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }a = c ? 7 : !0
        }
        return a
    }
    function $h(a, b, c, d) {
        const e = Zh(b, c, a, .3, d);
        !0 !== e ? a = e : "true" === d.google_full_width_responsive || Uh(c, b) ? (b = Th(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }
    function ai(a, b, c) {
        a = a.style;
        "rtl" === b ? a.marginRight = c : a.marginLeft = c
    }
    function bi(a, b) {
        if (3 == b.nodeType)
            return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName))
                return !1;
            let c;
            try {
                c = Gd(b, a)
            } catch (d) {}
            return !c || "none" !== c.display && !("absolute" === c.position && ("hidden" === c.visibility || "collapse" === c.visibility))
        }
        return !1
    }
    function ci(a, b, c) {
        a = Yh(b, a);
        return "rtl" === c ? -a.x : a.x
    }
    function di(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Gd(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            ai(b, c, "0px");
            d.width = `${Th(a)}px`;
            if (0 !== ci(a, b, c)) {
                ai(b, c, "0px");
                var e = ci(a, b, c);
                ai(b, c, `${-1 * e}px`);
                a = ci(a, b, c);
                0 !== a && a !== e && ai(b, c, `${e / (a - e) * e}px`)
            }
            d.zIndex = "30"
        }
    }
    ;
    var ei = class {
        constructor(a, b)
        {
            this.U = a;
            this.i = b
        }
        height()
        {
            return this.i
        }
        g(a)
        {
            return 300 < a && 300 < this.i ? this.U : Math.min(1200, Math.round(a))
        }
        h() {}
    }
    ;
    var fi = (a, b, c, d=e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Gd(a, b)) && e[c] && d(e[c]) || null
        },
        gi = a => b => b.U <= a,
        ji = (a, b, c, d) => {
            const e = a && hi(c, b),
                f = ii(b, d);
            return g => !(e && g.height() >= f)
        },
        ki = a => b => b.height() <= a,
        hi = (a, b) => Xh(a, b) < Sh(b).clientHeight - 100,
        li = (a, b) => {
            var c = fi(b, a, "height", R);
            if (c)
                return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = fi(b, a, "height", R);
            b.style.height = d;
            if (c)
                return c;
            c = Infinity;
            do (d = b.style && R(b.style.height)) && (c = Math.min(c, d)),
            (d = fi(b, a, "maxHeight", R)) && (c =
            Math.min(c, d));
            while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const ii = (a, b) => {
        const c = 0 == ke(a);
        return b && c ? Math.max(250, 2 * Sh(a).clientHeight / 3) : 250
    };
    var mi = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_xz: !0,
        google_ad_intent_query: !0
    };
    const ni = RegExp("(^| )adsbygoogle($| )");
    function oi(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = ud(d.property);
            a[e] = d.value
        }
    }
    ;
    var pi = class  extends N{}
    ;
    var qi = class  extends N{}
    ;
    var ri = class  extends N{
        g()
        {
            return kc(this, 23)
        }
    }
    ;
    var si = class  extends N{}
    ;
    var ti = class  extends N{}
    ;
    var ui = class  extends N{}
    ;
    var vi = class  extends N{}
    ;
    var wi = class  extends N{}
    ;
    var xi = class  extends N{
            getName()
            {
                return H(this, 4)
            }
        }
        ,
        yi = [1, 2, 3];
    var zi = class  extends N{}
    ;
    zi.u = [2, 5, 6, 11];
    var Ai = class  extends N{}
    ;
    var Ci = class  extends N{
            g()
            {
                return Hc(this, Ai, 2, Bi)
            }
        }
        ,
        Bi = [1, 2];
    var Di = class  extends N{
        g()
        {
            return F(this, Ci, 3)
        }
    }
    ;
    Di.u = [1, 4];
    var Ei = class  extends N{}
        ,
        Fi = Oc(Ei);
    Ei.u = [1, 2, 5, 7];
    function Gi(a) {
        var b = [];
        Ng(a.getElementsByTagName("p"), function(c) {
            100 <= Hi(c) && b.push(c)
        });
        return b
    }
    function Hi(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        Ng(a.childNodes, function(c) {
            b += Hi(c)
        });
        return b
    }
    function Ii(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function Ji(a, b) {
        if (null == a.g)
            return b;
        switch (a.g) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Ki = class {
        constructor(a, b, c, d)
        {
            this.j = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
        query(a)
        {
            var b = [];
            try {
                b = a.querySelectorAll(this.j)
            } catch (f) {}
            if (!b.length)
                return [];
            a = Oa(b);
            a = Ji(this, a);
            "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.i) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Gi(a[c]),
                        e = this.i;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString()
        {
            return JSON.stringify({
                nativeQuery: this.j,
                occurrenceIndex: this.h,
                paragraphIndex: this.i,
                ignoreMode: this.g
            })
        }
    }
    ;
    class Li {
        constructor()
        {
            var a = rd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.s = Math.random();
            this.h = this.J;
            this.B = a
        }
        Da(a)
        {
            this.g = a
        }
        j(a)
        {
            this.i = a
        }
        ib(a)
        {
            this.h = a
        }
        J(a, b, c=.01, d, e="jserror")
        {
            if ((this.i ? this.s : Math.random()) > c)
                return !1;
            oe(b) || (b = new ne(b, {
                context: a,
                id: e
            }));
            if (d || this.g)
                b.meta = {},
                this.g && this.g(b.meta),
                d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (Ed(n.document, this.B), n.error_rep_loaded =
            !0);
            return !1
        }
        ea(a, b, c)
        {
            try {
                return b()
            } catch (d) {
                if (!this.h(a, d, .01, c, "jserror"))
                    throw d;
            }
        }
        oa(a, b)
        {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        Y(a, b)
        {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    }
    ;
    const Mi = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Ni = (a, b, c, d, e=!1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = ve();
                let k,
                    m = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (l) {
                    m = 13;
                    if (!c)
                        throw l;
                    c(a, l)
                } finally {
                    f.google_measure_js_timing && h && Mi({
                        label: a.toString(),
                        value: h,
                        duration: (ve() || 0) - h,
                        type: m,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Oi = (a, b) => Ni(a, b, (c, d) => {
            (new Li).J(c, d)
        }, void 0, !1);
    function Pi(a, b, c) {
        return Ni(a, b, void 0, c, !0).apply()
    }
    function Qi(a) {
        if (!a)
            return null;
        var b = H(a, 7);
        if (H(a, 1) || a.getId() || 0 < lc(a, 4, Pb).length) {
            var c = H(a, 3),
                d = H(a, 1),
                e = lc(a, 4, Pb);
            b = Ac(a, 2);
            var f = Ac(a, 5);
            a = Ri(I(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Ii(c));
            if (e)
                for (c = 0; c < e.length; c++)
                    g += "." + Ii(e[c]);
            b = (e = g) ? new Ki(e, b, f, a) : null
        } else
            b = b ? new Ki(b, Ac(a, 2), Ac(a, 5), Ri(I(a, 6))) : null;
        return b
    }
    var Si = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function Ri(a) {
        return null == a ? a : Si[a]
    }
    var Ti = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    function Ui(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }
    function Vi(a) {
        a = Ui(a);
        return a.optimization = a.optimization || {}
    }
    ;
    var Wi = a => {
        switch (I(a, 8)) {
        case 1:
        case 2:
            if (null == a)
                var b = null;
            else
                b = F(a, U, 1),
                null == b ? b = null : (a = I(a, 2), b = null == a ? null : new Zg({
                    nb: [b],
                    Eb: a
                }));
            return null != b ? Qg(b) : Sg(Error("Missing dimension when creating placement id"));
        case 3:
            return Sg(Error("Missing dimension when creating placement id"));
        default:
            return Sg(Error("Invalid type: " + I(a, 8)))
        }
    };
    var Xi = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
            c.push({
                anchor: d.anchor,
                position: d.position
            });
            return d.anchor == b.anchor && d.position == b.position
        }; d;) {
            switch (d.position) {
            case 1:
                if (a())
                    return c;
                d.position = 2;
            case 2:
                if (a())
                    return c;
                if (d.anchor.firstChild) {
                    d = {
                        anchor: d.anchor.firstChild,
                        position: 1
                    };
                    continue
                } else
                    d.position = 3;
            case 3:
                if (a())
                    return c;
                d.position = 4;
            case 4:
                if (a())
                    return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a())
                    return c;
                d.position = 4;
                if (a())
                    return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };
    function Yi(a, b) {
        const c = new Yg,
            d = new Xg;
        b.forEach(e => {
            if (Hc(e, vi, 1, yi)) {
                e = Hc(e, vi, 1, yi);
                if (F(e, jh, 1) && F(F(e, jh, 1), U, 1) && F(e, jh, 2) && F(F(e, jh, 2), U, 1)) {
                    const g = Zi(a, F(F(e, jh, 1), U, 1)),
                        h = Zi(a, F(F(e, jh, 2), U, 1));
                    if (g && h)
                        for (var f of Xi({
                            anchor: g,
                            position: I(F(e, jh, 1), 2)
                        }, {
                            anchor: h,
                            position: I(F(e, jh, 2), 2)
                        }))
                            c.set(fa(f.anchor), f.position)
                }
                F(e, jh, 3) && F(F(e, jh, 3), U, 1) && (f = Zi(a, F(F(e, jh, 3), U, 1))) && c.set(fa(f), I(F(e, jh, 3), 2))
            } else
                Hc(e, wi, 2, yi) ? $i(a, Hc(e, wi, 2, yi), c) : Hc(e, ui, 3, yi) && aj(a, Hc(e, ui, 3, yi), d)
        });
        return new bj(c,
        d)
    }
    class bj {
        constructor(a, b)
        {
            this.h = a;
            this.g = b
        }
    }
    const $i = (a, b, c) => {
            F(b, jh, 2) ? (b = F(b, jh, 2), (a = Zi(a, F(b, U, 1))) && c.set(fa(a), I(b, 2))) : F(b, U, 1) && (a = cj(a, F(b, U, 1))) && a.forEach(d => {
                d = fa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        aj = (a, b, c) => {
            F(b, U, 1) && (a = cj(a, F(b, U, 1))) && a.forEach(d => {
                c.add(fa(d))
            })
        },
        Zi = (a, b) => (a = cj(a, b)) && 0 < a.length ? a[0] : null,
        cj = (a, b) => (b = Qi(b)) ? b.query(a) : null;
    class V extends Error {
        constructor(a="")
        {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    }
    ;
    let dj,
        W;
    const ej = new Ce(n);
    var fj = a => {
        null != a && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || Be(ej)
    };
    ((a, b=!0) => {
        dj = a || new Cg;
        "number" !== typeof n.google_srt && (n.google_srt = Math.random());
        Bg(dj, n.google_srt);
        W = new Le(dj, b, ej);
        W.j(!0);
        "complete" == n.document.readyState ? fj() : ej.g && Yc(n, "load", () => {
            fj()
        })
    })();
    var gj = (a, b, c) => W.ea(a, b, c),
        hj = (a, b, c) => {
            const d = P(Ag).g();
            !b.eid && d.length && (b.eid = d.toString());
            Ke(dj, a, b, !0, c)
        },
        ij = (a, b) => {
            W.Y(a, b)
        },
        jj = (a, b, c, d) => {
            let e;
            oe(b) ? e = b.msg || Je(b.error) : e = Je(b);
            return 0 == e.indexOf("TagError") ? ((b instanceof ne ? b.error : b).pbr = !0, !1) : W.J(a, b, c, d)
        };
    var kj = class {
        constructor()
        {
            this.g = Vd();
            this.h = 0
        }
    }
    ;
    function lj(a, b, c) {
        switch (c) {
        case 2:
        case 3:
            break;
        case 1:
        case 4:
            b = b.parentElement;
            break;
        default:
            throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (mj(b))
                return !0;
            if (a.g.has(b))
                break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }
    function nj(a) {
        a = oj(a);
        return a.has("all") || a.has("after")
    }
    function pj(a) {
        a = oj(a);
        return a.has("all") || a.has("before")
    }
    function oj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }
    function mj(a) {
        const b = oj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var qj = class {
        constructor()
        {
            this.g = new Set;
            this.h = new kj
        }
    }
    ;
    function rj(a, b) {
        if (!a)
            return !1;
        a = Gd(a, b);
        if (!a)
            return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }
    function sj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;)
            a = a.previousSibling;
        return a ? a : null
    }
    function tj(a) {
        return !!a.nextSibling || !!a.parentNode && tj(a.parentNode)
    }
    ;
    function uj(a=null) {
        ({googletag: a} = a ?? window);
        return a?.apiReady ? a : void 0
    }
    ;
    const vj = a => {
        const b = uj(a);
        return b ? Ja(Ka(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var wj = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    function xj(a, b) {
        if (a.j)
            return !0;
        a.j = !0;
        const c = G(a.i, lh, 1);
        a.h = 0;
        const d = yj(a.D);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? ih(f) : null
        } catch (q) {
            g = null
        }
        f = null !== g && J(g, 2, !1);
        g = Ui(e);
        f && (g.eatf = !0, ge(7, [!0, 0, !1]));
        b:
        {
            var h = {
                    vb: !1,
                    wb: !1
                },
                k = Oa(e.document.querySelectorAll(".google-auto-placed"));
            const q = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
                t = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var m = (vj(e) || Oa(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Oa(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const v = Oa(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                w = Oa(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                z = Oa(e.document.querySelectorAll("div.googlepublisherpluginad")),
                A = Oa(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let B = [].concat(Oa(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Oa(e.document.querySelectorAll("body ins.adsbygoogle")));
            f = [];
            for (const [ca, sa] of [[h.ic, k], [h.vb, q], [h.lc, t], [h.jc, m], [h.mc, v], [h.hc, w], [h.kc, z], [h.wb, A]])
                !1 === ca ? f = f.concat(sa) : B = B.concat(sa);
            h = wj(B);
            f = wj(f);
            h = h.slice(0);
            for (l of f)
                for (f = 0; f < h.length; f++)
                    (l.contains(h[f]) || h[f].contains(l)) &&
                    h.splice(f, 1);
            var l = h;
            e = Sh(e).clientHeight;
            for (f = 0; f < l.length; f++)
                if (!(l[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }e = e ? g.eatfAbg = !0 : !1;
        if (e)
            return !0;
        e = new Xg([2]);
        for (g = 0; g < c.length; g++) {
            l = a;
            h = c[g];
            f = g;
            m = b;
            if (F(h, ch, 4) && e.contains(I(F(h, ch, 4), 1)) && 1 === I(h, 8) && zj(h, d)) {
                l.h++;
                if (m = Aj(l, h, m, d))
                    k = Ui(l.g),
                    k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0),
                    F(h, U, 1) && null != Ac(F(h, U, 1), 5) && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ : k.numPostPlacementsPlaced = 1),
                    null == k.placed && (k.placed = []),
                    k.numAutoAdsPlaced++,
                    k.placed.push({
                        index: f,
                        element: m.ga
                    }),
                    ge(7, [!1, l.h, !0]);
                l = m
            } else
                l = null;
            if (l)
                return !0
        }
        ge(7, [!1, a.h, !1]);
        return !1
    }
    function Aj(a, b, c, d) {
        if (!zj(b, d) || 1 != I(b, 8))
            return null;
        d = F(b, U, 1);
        if (!d)
            return null;
        d = Qi(d);
        if (!d)
            return null;
        d = d.query(a.g.document);
        if (0 == d.length)
            return null;
        d = d[0];
        var e = I(b, 2);
        e = Ti[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a:
            {
                f = a.g;
                switch (e) {
                case 0:
                    f = rj(sj(d), f);
                    break a;
                case 3:
                    f = rj(d, f);
                    break a;
                case 2:
                    var g = d.lastChild;
                    f = rj(g ? 1 == g.nodeType ? g : sj(g) : null, f);
                    break a
                }
                f = !1
            }if (c = !f && !(!c && 2 == e && !tj(d)))
                c = 1 == e || 2 == e ? d : d.parentNode,
                c = !(c && !oh(c) && 0 >= c.offsetWidth);
            f = !c
        }
        if (!(c = f)) {
            c = a.B;
            f = I(b, 2);
            g = c.h;
            var h = fa(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1))
                a:
                {
                    if (c.g.contains(fa(d)))
                        switch (f) {
                        case 2:
                        case 3:
                            g = !0;
                            break a;
                        default:
                            g = !1;
                            break a
                        }
                    for (f = d.parentElement; f;) {
                        if (c.g.contains(fa(f))) {
                            g = !0;
                            break a
                        }
                        f = f.parentElement
                    }
                    g = !1
                }c = g
        }
        if (!c) {
            c = a.C;
            g = I(b, 2);
            a:
            switch (g) {
            case 1:
                f = nj(d.previousElementSibling) || pj(d);
                break a;
            case 4:
                f = nj(d) || pj(d.nextElementSibling);
                break a;
            case 2:
                f = pj(d.firstElementChild);
                break a;
            case 3:
                f = nj(d.lastElementChild);
                break a;
            default:
                throw Error("Unknown RelativePosition: " + g);
            }
            g = lj(c, d, g);
            c = c.h;
            hj("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.h++,
                dvc: Od()
            }, .1);
            c = f || g
        }
        if (c)
            return null;
        f = F(b, kh, 3);
        c = {};
        f && (c.kb = H(f, 1), c.Ua = H(f, 2), c.qb = !!kc(f, 3));
        f = F(b, ch, 4) && I(F(b, ch, 4), 2) ? I(F(b, ch, 4), 2) : null;
        f = fh(f);
        g = null != Ac(b, 12) ? Ac(b, 12) : null;
        g = null == g ? null : new eh(null, {
            google_ml_rank: g
        });
        b = Bj(a, b);
        b = dh(a.s, f, g, b);
        f = a.g;
        a = a.H;
        h = f.document;
        var k = c.qb || !1;
        g = vd((new wd(h)).g, "DIV");
        const m = g.style;
        m.width = "100%";
        m.height = "auto";
        m.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.Db && oi(k, c.Db);
        h = vd((new wd(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.kb && (k.marginTop = c.kb);
        c.Ua && (k.marginBottom = c.Ua);
        c.mb && oi(k, c.mb);
        g.appendChild(h);
        c = {
            ya: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Wa)
            c.ya.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a:
        {
            try {
                var l = c.ya;
                if (Q(vh)) {
                    {
                        const z = Nh(d, e);
                        if (z.init) {
                            var q =
                            z.init;
                            for (d = q; d = z.ha(d);)
                                q = d;
                            var t = {
                                anchor: q,
                                position: z.na
                            }
                        } else
                            t = {
                                anchor: d,
                                position: e
                            }
                    }
                    l["google-ama-order-assurance"] = 0;
                    Mh(l, t.anchor, t.position)
                } else
                    Mh(l, d, e);
                b:
                {
                    var v = c.ga;
                    v.dataset.adsbygoogleStatus = "reserved";
                    v.className += " adsbygoogle-noablate";
                    l = {
                        element: v
                    };
                    var w = b && b.hb;
                    if (v.hasAttribute("data-pub-vars")) {
                        try {
                            w = JSON.parse(v.getAttribute("data-pub-vars"))
                        } catch (z) {
                            break b
                        }
                        v.removeAttribute("data-pub-vars")
                    }
                    w && (l.params = w);
                    (f.adsbygoogle = f.adsbygoogle || []).push(l)
                }
            } catch (z) {
                (v = c.ya) && v.parentNode &&
                (w = v.parentNode, w.removeChild(v), oh(w) && (w.style.display = w.getAttribute("data-init-display") || "none"));
                v = !1;
                break a
            }
            v = !0
        }return v ? c : null
    }
    function Bj(a, b) {
        return Ug(Wg(Wi(b).map(gh), c => {
            Ui(a.g).exception = c
        }))
    }
    const Cj = class {
        constructor(a, b, c, d, e)
        {
            this.g = a;
            this.H = b;
            this.i = c;
            this.s = e || null;
            (this.D = d) ? (a = a.document, d = G(d, xi, 5), d = Yi(a, d)) : d = Yi(a.document, []);
            this.B = d;
            this.C = new qj;
            this.h = 0;
            this.j = !1
        }
    }
    ;
    function yj(a) {
        const b = {};
        a && lc(a, 6, Eb).forEach(c => {
            b[c] = !0
        });
        return b
    }
    function zj(a, b) {
        return a && ic(a, ch, 4) && b[I(F(a, ch, 4), 2)] ? !1 : !0
    }
    ;
    var Dj = Oc(class  extends N{}
    );
    function Ej(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Tg(() => Dj(c)) : Qg(null)
    }
    ;
    function Fj() {
        if (Gj)
            return Gj;
        var a = ie() || window;
        const b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Gj = b : a.google_persistent_state_async = Gj = new Hj
    }
    function Ij(a, b, c) {
        b = Jj[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }
    function Kj(a, b, c) {
        return Ij(a, b, () => c)
    }
    function Lj(a, b, c) {
        a.S[Jj[b] || `google_ps_${b}`] = c
    }
    function Mj(a, b) {
        Lj(a, 38, b)
    }
    var Hj = class {
            constructor()
            {
                this.S = {}
            }
        }
        ,
        Gj = null;
    const Jj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    function Nj(a) {
        var b = new Oj;
        return C(b, 5, Bb(a))
    }
    var Oj = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    Oj.u = [10];
    function Pj() {
        this.s = this.s;
        this.i = this.i
    }
    Pj.prototype.s = !1;
    function Qj(a, b) {
        a.s ? b() : (a.i || (a.i = []), a.i.push(b))
    }
    ;
    const Rj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };
    function Sj(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Rj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (be({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }
    function Tj(a) {
        if (a.g)
            return a.g;
        a.g = Nd(a.h, "__tcfapiLocator");
        return a.g
    }
    function Uj(a) {
        return "function" === typeof a.h.__tcfapi || null != Tj(a)
    }
    function Vj(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.h.__tcfapi)
            a = a.h.__tcfapi,
            a(b, 2, c, d);
        else if (Tj(a)) {
            Wj(a);
            const e = ++a.H;
            a.C[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else
            c({}, !1)
    }
    function Wj(a) {
        a.j || (a.j = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Yc(a.h, "message", a.j))
    }
    class Xj extends Pj {
        constructor(a)
        {
            var b = {};
            super();
            this.h = a;
            this.g = null;
            this.C = {};
            this.H = 0;
            this.D = b.timeoutMs ?? 500;
            this.B = b.dc ?? !1;
            this.j = null
        }
        addEventListener(a)
        {
            let b = {
                internalBlockOnErrors: this.B
            };
            const c = Xc(() => a(b));
            let d = 0;
            -1 !== this.D && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.D));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Rj(b), b.internalBlockOnErrors = this.B, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState =
                3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Vj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable",
                b.internalErrorState = 3,
                d && (clearTimeout(d), d = 0),
                c()
            }
        }
        removeEventListener(a)
        {
            a && a.listenerId && Vj(this, "removeEventListener", null, a.listenerId)
        }
    }
    ;
    var ck = ({l: a, R: b, timeoutMs: c, ca: d, ia: e=!1, ja: f=!1}) => {
            b = Yj({
                l: a,
                R: b,
                ia: e,
                ja: f
            });
            null != b.g || "tcunav" != b.h.message ? d(b) : Zj(a, c).then(g => g.map(ak)).then(g => g.map(h => bk(a, h))).then(d)
        },
        Yj = ({l: a, R: b, ia: c=!1, ja: d=!1}) => {
            if (!dk({
                l: a,
                R: b,
                ia: c,
                ja: d
            }))
                return bk(a, Nj(!0));
            b = Fj();
            return (b = Kj(b, 24)) ? bk(a, ak(b)) : Sg(Error("tcunav"))
        };
    function dk({l: a, R: b, ia: c, ja: d}) {
        if (!(d = !d && Uj(new Xj(a)))) {
            if (c = !c) {
                if (b) {
                    a = Ej(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != I(a, 1))
                            b:
                            switch (a = I(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                            }
                        else
                            a = !1;
                    else
                        W.J(806, a.h, void 0, void 0),
                        a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }
    function Zj(a, b) {
        return Promise.race([ek(), fk(a, b)])
    }
    function ek() {
        return (new Promise(a => {
            var b = Fj();
            a = {
                resolve: a
            };
            const c = Kj(b, 25, []);
            c.push(a);
            Lj(b, 25, c)
        })).then(gk)
    }
    function fk(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, Sg(Error("tcto")))
        })
    }
    function gk(a) {
        return a ? Qg(a) : Sg(Error("tcnull"))
    }
    function ak(a) {
        var b = {};
        if (Sj(a))
            if (!1 === a.gdprApplies)
                a = !0;
            else if ("tcunavailable" === a.tcString)
                a = !b.Za;
            else if ((b.Za || void 0 !== a.gdprApplies || b.ec) && (b.Za || "string" === typeof a.tcString && a.tcString.length)) {
                b:
                {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b["755"];
                        break b
                    }
                    b = void 0
                }0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a =
                !0
            } else
                a = !0;
        else
            a = !1;
        return Nj(a)
    }
    function bk(a, b) {
        return (a = de(b, a)) ? Qg(a) : Sg(Error("unav"))
    }
    ;
    var ik = class  extends N{}
    ;
    ik.u = [1, 2, 3];
    var jk = class  extends N{}
    ;
    jk.u = [1, 2, 3];
    var kk = class  extends N{
        g()
        {
            return F(this, ik, 2)
        }
        h()
        {
            return F(this, jk, 3)
        }
    }
    ;
    const lk = class {
        constructor(a)
        {
            this.exception = a
        }
    }
    ;
    function mk(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            Ui(e.g);
            G(e.i, lh, 1);
            d.call(c, new lk(b))
        } catch (f) {
            a = a.h,
            b = f,
            Ig(a),
            a.g = 2,
            a.i = b,
            Kg(a.h)
        }
    }
    var nk = class {
        constructor(a, b, c)
        {
            this.i = a;
            this.g = b;
            this.h = c
        }
        start()
        {
            this.j()
        }
        j()
        {
            try {
                switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    xj(this.g, !0);
                    mk(this);
                    break;
                default:
                    xj(this.g, !1) ? mk(this) : this.i.setTimeout(la(this.j, this), 100)
                }
            } catch (a) {
                mk(this, a)
            }
        }
    }
    ;
    var ok = class  extends N{
        constructor()
        {
            super()
        }
        getVersion()
        {
            return Dc(this, 2)
        }
    }
    ;
    ok.u = [3];
    function pk(a) {
        return Ta(0 !== a.length % 4 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }
    function qk(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }
    function rk(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    ;
    function sk(a) {
        var b = pk(a),
            c = qk(b.slice(0, 6));
        a = qk(b.slice(6, 12));
        var d = new ok;
        c = E(d, 1, Gb(c), 0);
        a = E(c, 2, Gb(a), 0);
        b = b.slice(12);
        c = qk(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length)
                throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === qk(e[0]);
            e = e.slice(1);
            var g = tk(e, b),
                h = 0 === d.length ? 0 : d[d.length - 1];
            h = rk(g) + h;
            e = e.slice(g.length);
            if (f)
                d.push(h);
            else {
                f = tk(e, b);
                g = rk(f);
                for (let m = 0; m <= g; m++)
                    d.push(h + m);
                e = e.slice(f.length)
            }
        }
        if (0 <
        e.length)
            throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return qc(a, 3, d, Fb)
    }
    function tk(a, b) {
        const c = a.indexOf("11");
        if (-1 === c)
            throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    }
    ;
    var uk = "a".charCodeAt(),
        vk = fd(Gg),
        wk = fd(Hg);
    function xk() {
        var a = new yk;
        return M(a, 1, 0)
    }
    function zk(a) {
        var b = Number;
        var c = fc(a, 1);
        c = null == c ? c : Db(c) ? "string" === typeof c ? Mb(c) : Lb(c) : void 0;
        b = b(c ?? "0");
        a = Dc(a, 2);
        return new Date(1E3 * b + a / 1E6)
    }
    var yk = class  extends N{}
    ;
    function Ak(a, b) {
        if (a.g + b > a.h.length)
            throw Error("Requested length " + b + " is past end of string.");
        const c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }
    function Bk(a) {
        let b = Ak(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!Ak(a, 1),
                e = Ak(a, 16);
            if (d)
                for (d = Ak(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }
    function Ck(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (Ak(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }
    function Dk(a) {
        const b = Ak(a, 16);
        return !0 === !!Ak(a, 1) ? (a = Bk(a), a.forEach(c => {
            if (c > b)
                throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Ck(a, b)
    }
    class Ek {
        constructor(a)
        {
            if (/[^01]/.test(a))
                throw Error(`Input bitstring ${a} is malformed!`);
            this.h = a;
            this.g = 0
        }
        skip(a)
        {
            this.g += a
        }
    }
    ;
    var Gk = a => {
        try {
            var b = Ta(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new Ek(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = Ak(c, 12);
            b.cmpVersion = Ak(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = Ak(c, 6);
            b.isServiceSpecific = !!Ak(c, 1);
            b.useNonStandardStacks = !!Ak(c, 1);
            b.specialFeatureOptins = Fk(Ck(c, 12, wk), wk);
            b.purpose = {
                consents: Fk(Ck(c, 24, vk), vk),
                legitimateInterests: Fk(Ck(c, 24, vk), vk)
            };
            b.purposeOneTreatment = !!Ak(c, 1);
            b.publisherCC = String.fromCharCode(uk + Ak(c, 6)) + String.fromCharCode(uk +
            Ak(c, 6));
            b.vendor = {
                consents: Fk(Dk(c), null),
                legitimateInterests: Fk(Dk(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const Fk = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b)
                c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a)
                c[d] = !0;
        delete c[0];
        return c
    };
    function Hk() {
        return "m202403210101"
    }
    ;
    var Ik = class  extends N{
        g()
        {
            return null != H(this, 2)
        }
    }
    ;
    var Jk = class  extends N{
        g()
        {
            return null != H(this, 2)
        }
    }
    ;
    var Kk = class  extends N{}
    ;
    var Lk = class  extends N{}
        ,
        Mk = Oc(Lk);
    Lk.u = [7];
    function Nk(a) {
        a = Ok(a);
        try {
            var b = a ? Mk(a) : null
        } catch (c) {
            b = null
        }
        return b ? F(b, Kk, 4) || null : null
    }
    function Ok(a) {
        a = (new ce(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%"))
                try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    b = null
                }
            else
                b = a;
        else
            b = null;
        return b
    }
    ;
    function Pk(a) {
        a.__uspapiPostMessageReady || Qk(new Rk(a))
    }
    function Qk(a) {
        a.g = b => {
            const c = "string" === typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && "getUSPData" === e.command && a.l.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var Rk = class {
        constructor(a)
        {
            this.l = a;
            this.g = null
        }
    }
    ;
    fd(Gg).map(a => Number(a));
    fd(Hg).map(a => Number(a));
    function Sk(a) {
        a.__tcfapiPostMessageReady || Tk(new Uk(a))
    }
    function Tk(a) {
        a.h = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    }
    var Uk = class {
        constructor(a)
        {
            this.g = a;
            this.h = null
        }
    }
    ;
    var Vk = class  extends N{}
    ;
    var Wk = class  extends N{
            g()
            {
                return null != H(this, 1)
            }
        }
        ,
        Xk = Oc(Wk);
    Wk.u = [2];
    function Yk(a, b) {
        function c(m) {
            if (10 > m.length)
                return null;
            var l = f(m.slice(0, 4));
            l = g(l);
            m = f(m.slice(6, 10));
            m = h(m);
            return "1" + l + m + "N"
        }
        function d(m) {
            if (10 > m.length)
                return null;
            var l = f(m.slice(0, 6));
            l = g(l);
            m = f(m.slice(6, 10));
            m = h(m);
            return "1" + l + m + "N"
        }
        function e(m) {
            if (12 > m.length)
                return null;
            var l = f(m.slice(0, 6));
            l = g(l);
            m = f(m.slice(8, 12));
            m = h(m);
            return "1" + l + m + "N"
        }
        function f(m) {
            const l = [];
            let q = 0;
            for (let t = 0; t < m.length / 2; t++)
                l.push(qk(m.slice(q, q + 2))),
                q += 2;
            return l
        }
        function g(m) {
            return m.every(l => 1 === l) ?
            "Y" : "N"
        }
        function h(m) {
            return m.some(l => 1 === l) ? "Y" : "N"
        }
        if (0 === a.length)
            return null;
        a = a.split(".");
        if (2 < a.length)
            return null;
        a = pk(a[0]);
        const k = qk(a.slice(0, 6));
        a = a.slice(6);
        if (1 !== k)
            return null;
        switch (b) {
        case 8:
            return c(a);
        case 10:
        case 12:
        case 9:
            return d(a);
        case 11:
            return e(a);
        default:
            return null
        }
    }
    ;
    var Zk = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Fd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else
                        a.setTimeout(d, 5)
            };
        d()
    };
    function $k() {
        if (S === S.top && !S.__uspapi && !S.frames.__uspapiLocator) {
            var a = new al;
            bl(a);
            cl(a)
        }
    }
    function bl(a) {
        !a.j || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Zk(a.g, "__uspapiLocator"), na("__uspapi", (...b) => dl(a, ...b), a.g), Pk(a.g))
    }
    function cl(a) {
        !a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Zk(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], na("__tcfapi", (...b) => el(a, ...b), a.g), Sk(a.g))
    }
    function dl(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.j
        }, !0)
    }
    function fl(a) {
        if (!a?.g() || 0 === K(a, 1).length || 0 == G(a, Vk, 2).length)
            return null;
        const b = K(a, 1);
        let c;
        try {
            var d = sk(b.split("~")[0]);
            c = b.includes("~") ? b.split("~").slice(1) : []
        } catch (e) {
            return null
        }
        a = G(a, Vk, 2).reduce((e, f) => Fc(gl(e), 1) > Fc(gl(f), 1) ? e : f);
        d = lc(d, 3, Hb).indexOf(Dc(a, 1));
        return -1 === d || d >= c.length ? null : {
            uspString: Yk(c[d], Dc(a, 1)),
            xa: zk(gl(a))
        }
    }
    function hl(a) {
        a = a.find(b => 13 === L(b, 1));
        if(a?.g())
            try {
                return Xk(K(a, 2))
            } catch (b) {}
        return null
    }
    function gl(a) {
        return ic(a, yk, 2) ? F(a, yk, 2) : xk()
    }
    function el(a, b, c, d, e=null) {
        if ("function" === typeof d)
            if (c && (2.2 < c || 1 >= c))
                d(null, !1);
            else
                switch (c = a.g.__tcfapiEventListeners, b) {
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.2",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d) - 1;
                    a.h ? (e = Gk(a.h), e.addtlConsent = null != a.i ? a.i : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", null != b && (e.listenerId = b), a = e) : a = null;
                    d(a, !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1);
                    break;
                case "getTCData":
                    d(null, !1)
                }
    }
    class al {
        constructor()
        {
            var a = S;
            this.g = a;
            var b = Ok(this.g.document);
            try {
                var c = b ? Mk(b) : null
            } catch (e) {
                c = null
            }
            (b = c) ? (c = F(b, Jk, 5) || null, b = G(b, Ik, 7), b = hl(b ?? []), c = {
                Va: c,
                Ya: b
            }) : c = {
                Va: null,
                Ya: null
            };
            b = c;
            c = fl(b.Ya);
            b = b.Va;
            if (b?.g() && 0 !== K(b, 2).length) {
                var d = ic(b, yk, 1) ? F(b, yk, 1) : xk();
                b = {
                    uspString: K(b, 2),
                    xa: zk(d)
                }
            } else
                b = null;
            this.j = b && c ? c.xa > b.xa ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.h = (c = Nk(a.document)) && null != H(c, 1) ? K(c, 1) : null;
            this.i = (a = Nk(a.document)) && null != H(a, 2) ? K(a, 2) : null
        }
    }
    ;
    const il = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    function jl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        hj("ama", b, .01)
    }
    function kl(a) {
        const b = {};
        Id(il, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    }
    ;
    function ll(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b))
                    return e
            }
            return d.toUpperCase()
        })
    }
    function ml(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    }
    ;
    function nl(a) {
        a = lc(a, 2, Eb);
        if (!a)
            return !1;
        for (let b = 0; b < a.length; b++)
            if (1 == a[b])
                return !0;
        return !1
    }
    function ol(a, b) {
        a = ml(ll(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Jd(a),
            d = pl(a);
        return b.find(e => {
                if (ic(e, ti, 7)) {
                    var f = F(e, ti, 7);
                    f = Ib(fc(f, 1))
                } else
                    f = Ib(fc(e, 1));
                e = ic(e, ti, 7) ? I(F(e, ti, 7), 2) : 2;
                if ("number" !== typeof f)
                    return !1;
                switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
                }
                return !1
            }) || null
    }
    function pl(a) {
        const b = {};
        for (;;) {
            b[Jd(a)] = !0;
            if (!a)
                return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    }
    ;
    var ql = a => {
        a = F(a, si, 3);
        return !a || Bc(a, 1) <= Date.now() ? !1 : !0
    };
    function rl(a) {
        if (Q(th))
            var b = null;
        else
            try {
                b = a.getItem("google_ama_config")
            } catch (d) {
                b = null
            }
        try {
            var c = b ? Fi(b) : null
        } catch (d) {
            c = null
        }
        return c
    }
    ;
    var sl = class  extends N{
        g()
        {
            return F(this, kk, 2)
        }
        h()
        {
            return J(this, 3)
        }
    }
    ;
    var tl = class  extends N{
        g()
        {
            return lc(this, 1, Pb)
        }
        h()
        {
            return F(this, sl, 2)
        }
    }
    ;
    tl.u = [1];
    var ul = class  extends N{
        getId()
        {
            return Dc(this, 1)
        }
    }
    ;
    ul.u = [2];
    var vl = class  extends N{}
    ;
    vl.u = [2];
    var wl = class  extends N{}
    ;
    wl.u = [2];
    var xl = class  extends N{
        g()
        {
            return Fc(this, 2)
        }
        h()
        {
            return Fc(this, 4)
        }
        i()
        {
            return J(this, 3)
        }
    }
    ;
    var yl = class  extends N{}
    ;
    yl.u = [1, 4, 2, 3];
    var Al = class  extends N{
        h()
        {
            return Hc(this, sl, 13, zl)
        }
        j()
        {
            return void 0 !== jc(this, sl, tc(this, zl, 13))
        }
        g()
        {
            return Hc(this, tl, 14, zl)
        }
        i()
        {
            return void 0 !== jc(this, tl, tc(this, zl, 14))
        }
    }
    ;
    Al.u = [19];
    var zl = [13, 14];
    let Bl = void 0;
    function Cl(a) {
        Lc(Bl, Ne);
        Bl = a
    }
    ;
    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }
    function Dl(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Sa: !0,
            Jb: b,
            ua: a.ablation_viewport_offset
        } : null
    }
    function El(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }
    function Fl(a) {
        X(S).allow_second_reactive_tag = a
    }
    function Gl() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    }
    ;
    function Hl(a) {
        return X(a)?.head_tag_slot_vars?.google_ad_host ?? Il(a)
    }
    function Il(a) {
        return a.document?.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null
    }
    ;
    const Jl = [2, 7, 1];
    var Ml = (a, b, c="", d=null) => 1 === b && Kl(c, d) ? !0 : Ll(a, c, e => La(G(e, Pc, 2), f => I(f, 1) === b)),
        Kl = (a, b) => b ? b.j() ? J(b.h(), 1) : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a ? J(b.g().h(), 1) : !1 : !1,
        Nl = (a, b) => {
            b = Dc(b, 18);
            -1 !== b && (a.tmod = b)
        },
        Pl = a => {
            const b = Dd(S) || S;
            return Ol(b, a) ? !0 : Ll(S, "", c => La(lc(c, 3, Eb), d => d === a))
        };
    function Ol(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Na(a.split(","), b.toString())
    }
    function Ll(a, b, c) {
        a = Dd(a) || a;
        const d = Ql(a);
        b && (b = me(String(b)));
        return ed(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }
    function Ql(a) {
        a = Rl(a);
        const b = {};
        Id(a, (c, d) => {
            try {
                const e = new Qc(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Rl = a => {
        Lc(Bl, Nc);
        a = Yj({
            l: a,
            R: Bl
        });
        return null != a.g ? Sl(a.getValue()) : {}
    };
    function Sl(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b)
                return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : dd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    function Tl(a) {
        hj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Ul = a => {
            hj("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        Vl = (a, b) => {
            if (Hl(n))
                return Jl;
            if(b?.j()) {
                var c = K(b.h(), 9);
                b=b?.h()?.g()?.h();
                if (!a || c != a || !b)
                    return Jl;
                Ul(!1);
                return lc(b, 3, Eb)
            }
            if(b?.i()) {
                c=b?.g()?.g();
                if (!c || 1 !== c.length || !a || c[0] !== a || K(b, 17) != n.location.host)
                    return Jl;
                a=b?.g()?.h()?.g()?.h();
                if (!a)
                    return Jl;
                Ul(!0);
                return lc(a, 3, Eb)
            }
            return Jl
        };
    var Wl = (a, b) => {
        const c = [];
        a = Vl(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    };
    function Xl(a, b, c, d) {
        Yl(new Zl(a, b, c, d))
    }
    function Yl(a) {
        Wg(Vg(Yj({
            l: a.l,
            R: J(a.g, 6)
        }), b => {
            $l(a, b, !0)
        }), () => {
            am(a)
        })
    }
    function $l(a, b, c) {
        Wg(Vg(bm(b), d => {
            cm("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                jl(d, {
                    lserr: 1
                })
            }
            c ? am(a) : a.h(null, null)
        })
    }
    function am(a) {
        Wg(Vg(dm(a), b => {
            a.h(b, {
                fromPABGSettings: !0
            })
        }), () => {
            em(a)
        })
    }
    function bm(a) {
        return (a = (a = rl(a)) ? ql(a) ? a : null : null) ? Qg(a) : Sg(Error("invlocst"))
    }
    function dm(a) {
        if (Hl(a.l) && !J(a.g, 22))
            return Sg(Error("invtag"));
        a:
        {
            var b = a.l;
            var c = a.i;
            a = a.g;
            if(a?.j())
                (b=a?.h()?.g()?.g()) && (0 < G(b, lh, 1).length || Q(uh) && 0 < G(b, mh, 3).length) ? Tl(!1) : b = null;
            else {
                if(a?.i()) {
                    const d=a?.g()?.g(),
                        e=a?.g()?.h()?.g()?.g();
                    if (d && 1 === d.length && d[0] === c && e && (0 < G(e, lh, 1).length || Q(uh) && 0 < G(e, mh, 3).length) && K(a, 17) === b.location.host) {
                        Tl(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }b ? (c = new Ei, a = G(b, lh, 1), c = zc(c, 1, a), a = G(b, zi, 2), c = zc(c, 7, a), Q(uh) && 0 < G(b, mh, 3).length && (a = new nh, b = G(b, mh, 3), b = zc(a,
        1, b), xc(c, 6, b)), b = Qg(c)) : b = Sg(Error("invtag"));
        return b
    }
    function em(a) {
        ck({
            l: a.l,
            R: J(a.g, 6),
            timeoutMs: 50,
            ca: b => {
                fm(a, b)
            }
        })
    }
    function fm(a, b) {
        Wg(Vg(b, c => {
            $l(a, c, !1)
        }), c => {
            cm(c.message);
            a.h(null, null)
        })
    }
    function cm(a) {
        hj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Zl {
        constructor(a, b, c, d)
        {
            this.l = a;
            this.g = b;
            this.i = c;
            this.h = d
        }
    }
    ;
    var im = (a, b, c, d) => {
        try {
            const e = ol(a, G(c, zi, 7));
            if (e && nl(e)) {
                if (H(e, 4)) {
                    const g = new eh(null, {
                        google_package: H(e, 4)
                    });
                    d = dh(d, g)
                }
                const f = new Cj(a, b, c, e, d);
                Pi(1E3, () => {
                    var g = new Lg;
                    (new nk(a, f, g)).start();
                    return g.h
                }, a).then(ma(gm, a), ma(hm, a))
            }
        } catch (e) {
            jl(a, {
                atf: -1
            })
        }
    };
    const gm = a => {
            jl(a, {
                atf: 1
            })
        },
        hm = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            jl(a, {
                atf: 0
            })
        };
    function jm(a, b) {
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (-1 != a.indexOf(b))
            return !0;
        b = km(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }
    function km(a) {
        let b = "";
        Id(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }
    ;
    Qa || Ea();
    class lm {
        constructor()
        {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    }
    ;
    function mm() {
        const {promise: a, resolve: b} = new lm;
        return {
            promise: a,
            resolve: b
        }
    }
    ;
    function nm(a, b, c=() => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d)
            return d;
        d = mm();
        b[a] = d;
        c();
        return d
    }
    function om(a, b, c) {
        return nm(a, b, () => {
            Ed(b.document, c)
        }).promise
    }
    ;
    function pm() {
        const a = {};
        bd() && (a.bust = bd());
        var b = Fj();
        b = Kj(b, 38, "");
        "" !== b && (a.sbust = b);
        return a
    }
    const qm = new Map([[2, 7], [3, 1], [4, 3], [5, 12]]);
    function rm(a, b, c) {
        c = jd(c, pm());
        if (1 === a)
            return {
                rc: Ed(b.document, c),
                Ta: new Promise(() => {})
            };
        if (qm.has(a))
            return {
                Ta: om(qm.get(a), b, c)
            };
        throw Error(`Unexpected chunkId: ${a}`);
    }
    ;
    function sm(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new tm;
        return a.google_reactive_ads_global_state
    }
    class tm {
        constructor()
        {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new um;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var um = class {
        constructor()
        {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    var wm = a => {
        if (n.google_apltlad || a.google_ad_intent_query)
            return null;
        var b = vm(a) && 1 === (n.top == n ? 0 : Cd(n.top) ? 1 : 2);
        if (n !== n.top && !b || !a.google_ad_client)
            return null;
        n.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        Id(a, (d, e) => {
            mi[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        c.easpi = Q(Gh);
        c.asro = Q(Eh);
        Q(Fh) && (c.sugawps = !0);
        Q(Ch) && (c.slmct = ad(Dh), c.samct = ad(Bh));
        if ("google_ad_section" in a || "google_ad_region" in
        a)
            c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };
    function vm(a) {
        let b = Q(xh);
        "sd" !== a.google_loader_used && (b || (b = Q(yh)));
        return b
    }
    ;
    function xm(a, b) {
        X(S).ama_ran_on_page || Pi(1001, () => {
            ym(new zm(a, b))
        }, n)
    }
    function ym(a) {
        Xl(a.l, a.h, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(S).ama_ran_on_page || b && Am(d, e, b, c)
        })
    }
    class zm {
        constructor(a, b)
        {
            this.l = n;
            this.g = a;
            this.h = b
        }
    }
    function Am(a, b, c, d) {
        d && (Ui(a).configSourceInAbg = d);
        ic(c, Di, 24) && (d = Vi(a), d.availableAbg = !0, d.ablationFromStorage = !!F(c, Di, 24)?.g()?.g());
        if (ea(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            if (!ol(a, G(c, zi, 7))) {
                hj("amaait", {
                    value: "true"
                });
                return
            }
            hj("amaait", {
                value: "false"
            })
        }
        X(S).ama_ran_on_page = !0;
        F(c, ri, 15)?.g() && (X(a).enable_overlap_observer = !0);
        var e = F(c, qi, 13);
        e && 1 === I(e, 1) ? (d = 0, (e = F(e, pi, 6)) && Ac(e, 3) && (d = Ac(e, 3) || 0), El(a, d)) : F(c, Di, 24)?.g()?.g() && (Vi(a).ablatingThisPageview =
        !0, El(a, 1));
        ge(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = kl(ea(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = dh(hh, new eh(null, b));
        gj(782, () => {
            im(a, f, c, g)
        })
    }
    ;
    function Bm(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");)
            c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            ub: a,
            Lb: d
        }
    }
    ;
    function Cm({va: a, Ca: b}) {
        return a || ("dev" === b ? "dev" : "")
    }
    ;
    var Dm = {
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        Em = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Fm = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1]))
                    return a[1];
            return null
        },
        Gm = a => {
            switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b)
                        return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        const c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (b) {}
            }
        };
    function Hm(a) {
        if (a.google_ad_client)
            var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars?.google_ad_client??a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"))) {
                b:
                {
                    b = a.document.getElementsByTagName("script");
                    a = a.navigator && a.navigator.userAgent || "";
                    a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !le() ? Em : Fm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);)
                        c[d[1]] = Gm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else
                    b = ""
            }
            b = b ?? ""
        }
        return b
    }
    ;
    var Im = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };
    function Jm(a, b) {
        if (15 == b) {
            if (728 <= a)
                return 728;
            if (468 <= a)
                return 468
        } else if (90 == b) {
            if (200 <= a)
                return 200;
            if (180 <= a)
                return 180;
            if (160 <= a)
                return 160;
            if (120 <= a)
                return 120
        }
        return null
    }
    ;
    var Km = class  extends N{
        constructor()
        {
            super()
        }
        getVersion()
        {
            return K(this, 2)
        }
    }
    ;
    function Lm(a, b) {
        return C(a, 2, Ob(b))
    }
    function Mm(a, b) {
        return C(a, 3, Ob(b))
    }
    function Nm(a, b) {
        return C(a, 4, Ob(b))
    }
    function Om(a, b) {
        return C(a, 5, Ob(b))
    }
    function Pm(a, b) {
        return C(a, 9, Ob(b))
    }
    function Qm(a, b) {
        return zc(a, 10, b)
    }
    function Rm(a, b) {
        return C(a, 11, Bb(b))
    }
    function Sm(a, b) {
        return C(a, 1, Ob(b))
    }
    function Tm(a, b) {
        return C(a, 7, Bb(b))
    }
    var Um = class  extends N{
        constructor()
        {
            super()
        }
    }
    ;
    Um.u = [10, 6];
    const Vm = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Wm() {
        var a = S;
        if ("function" !== typeofa.navigator?.userAgentData?.getHighEntropyValues)
            return null;
        const b = a.google_tag_data ?? (a.google_tag_data = {});
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Vm).then(c => {
            b.uach ?? (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function Xm(a) {
        return Rm(Qm(Om(Lm(Sm(Nm(Tm(Pm(Mm(new Um, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b => {
            var c = new Km;
            c = C(c, 1, Ob(b.brand));
            return C(c, 2, Ob(b.version))
        }) || []), a.wow64 || !1)
    }
    function Ym() {
        return Wm()?.then(a => Xm(a)) ?? null
    }
    ;
    function Zm(a, b) {
        b.google_ad_host || (a = Il(a)) && (b.google_ad_host = a)
    }
    function $m(a, b, c="") {
        S.google_sa_queue || (S.google_sa_queue = [], S.google_process_slots = W.oa(215, () => {
            an(S.google_sa_queue)
        }), a = bn(c, a, b), rm(1, S, a))
    }
    function an(a) {
        const b = a.shift();
        "function" === typeof b && W.ea(216, b);
        a.length && n.setTimeout(W.oa(215, () => {
            an(a)
        }), 0)
    }
    function cn(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }
    function bn(a, b, c) {
        var d = S;
        b = J(c, 4) ? b.Fb : b.Gb;
        a:
        {
            if (J(c, 4)) {
                if (a = a || Hm(d)) {
                    a = Q(qh) ? me(a) : a;
                    d = Q(Ih) ? {
                        client: a,
                        plah: d.location.host,
                        aplac: Q(Ih).toString()
                    } : {
                        client: a,
                        plah: d.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }return jd(b, d)
    }
    function dn(a, b, c, d) {
        const {ub: e, Lb: f} = Bm(a, b);
        c.appendChild(f);
        en(a, c, b);
        c = b.google_start_time ?? pa;
        const g = (new Date).getTime();
        b.google_lrv = Cm({
            va: Hk(),
            Ca: K(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        cn(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h)
                    throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && W.Y(911,
            h)
        })
    }
    function en(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = `${f}x${g}`);
        d = !c.google_ad_slot || c.google_override_format || !Im[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e = e && d ? e.toLowerCase() : "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
            c.google_orig_ad_height || c.google_ad_height];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f)
                9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Jd(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a:
                {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let m = 0; m < h.length; ++m) {
                            const l = h[m];
                            if (l.nodeName && l.nodeName.toString().toLowerCase() === g) {
                                if (b === l) {
                                    g = "." + k;
                                    break a
                                }
                                ++k
                            }
                        }
                    }
                    g =
                    ""
                }e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a)
                try {
                    let h = a.parent;
                    for (d = 0; h && h !== a && 25 > d; ++d) {
                        const k = h.frames;
                        for (f = 0; f < k.length; ++f)
                            if (a === k[f]) {
                                e.push(f);
                                break
                            }
                        a = h;
                        h = a.parent
                    }
                } catch (h) {}
            c.google_ad_dom_fingerprint = Jd(b + e.join()).toString()
        }
    }
    function fn() {
        var a = Dd(n);
        a && (a = sm(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }
    function gn() {
        const a = Ym();
        null != a && a.then(b => {
            a:
            {
                nb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Tb);
                    break a
                } finally {
                    nb = !1
                }
                c = void 0
            }S.google_user_agent_client_hint = c
        });
        Td()
    }
    ;
    function hn(a) {
        return b => !!(b.fa & a)
    }
    class Y extends ei {
        constructor(a, b, c, d=!1)
        {
            super(a, b);
            this.fa = c;
            this.j = d
        }
        pa()
        {
            return this.fa
        }
        h(a, b, c)
        {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    }
    ;
    const jn = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        kn = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        ln = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };
    function mn(a) {
        var b = 0;
        a.P && b++;
        a.K && b++;
        a.L && b++;
        if (3 > b)
            return {
                N: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
            };
        b = a.P.split(",");
        const c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length)
            return {
                N: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
            };
        if (2 < b.length)
            return {
                N: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
            };
        const d = [],
            e = [];
        for (let g = 0; g <
        b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    N: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
                };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    N: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
                };
            e.push(f)
        }
        return {
            L: d,
            K: e,
            eb: b
        }
    }
    function nn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    }
    ;
    const on = Pa("script");
    class pn {
        constructor(a, b, c=null, d=null, e=null, f=null, g=null, h=null, k=null, m=null, l=null, q=null)
        {
            this.B = a;
            this.ba = b;
            this.fa = c;
            this.g = d;
            this.X = e;
            this.h = f;
            this.i = g;
            this.C = h;
            this.D = k;
            this.j = m;
            this.s = l;
            this.H = q
        }
        size()
        {
            return this.ba
        }
    }
    ;
    const qn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var rn = class  extends ei{
        g(a)
        {
            return Math.min(1200, Math.max(this.U, Math.round(a)))
        }
    }
    ;
    function sn(a, b) {
        tn(a, b);
        if ("pedestal" === b.google_content_recommendation_ui_type)
            return new pn(9, new rn(a, Math.floor(a * b.google_phwr)));
        var c = xd();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * jn.mobile_banner_image_sidebyside + kn.mobile_banner_image_sidebyside) + 96), a = {
            aa: a,
            Z: c,
            K: 1,
            L: 12,
            P: "mobile_banner_image_sidebyside"
        }) : (a = nn(a), a = {
            aa: a.width,
            Z: a.height,
            K: 1,
            L: 13,
            P: "image_sidebyside"
        }) : (a = nn(a), a = {
            aa: a.width,
            Z: a.height,
            K: 4,
            L: 2,
            P: "image_stacked"
        });
        un(b, a);
        return new pn(9, new rn(a.aa, a.Z))
    }
    function vn(a, b) {
        tn(a, b);
        var c = mn({
            L: b.google_content_recommendation_rows_num,
            K: b.google_content_recommendation_columns_num,
            P: b.google_content_recommendation_ui_type
        });
        if (c.N)
            a = {
                aa: 0,
                Z: 0,
                K: 0,
                L: 0,
                P: "image_stacked",
                N: c.N
            };
        else {
            var d = 2 === c.eb.length && 468 <= a ? 1 : 0;
            var e = c.eb[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = ln[e];
            let g = c.K[d];
            for (; a / g < f && 1 < g;)
                g--;
            f = g;
            d = c.L[d];
            c = Math.floor(((a - 8 * f - 8) / f * jn[e] + kn[e]) * d + 8 * d + 8);
            a = 1500 < a ? {
                width: 0,
                height: 0,
                Hb: `Calculated slot width is too large: ${a}`
            } :
            1500 < c ? {
                width: 0,
                height: 0,
                Hb: `Calculated slot height is too large: ${c}`
            } : {
                width: a,
                height: c
            };
            a = {
                aa: a.width,
                Z: a.height,
                K: f,
                L: d,
                P: e
            }
        }
        if (a.N)
            throw new V(a.N);
        un(b, a);
        return new pn(9, new rn(a.aa, a.Z))
    }
    function tn(a, b) {
        if (0 >= a)
            throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }
    function un(a, b) {
        a.google_content_recommendation_ui_type = b.P;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    }
    ;
    class wn extends ei {
        g()
        {
            return this.U
        }
        h(a, b, c)
        {
            di(a, c);
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    }
    ;
    const xn = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var yn = class  extends ei{
            g()
            {
                return Math.min(1200, this.U)
            }
        }
        ,
        zn = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive)
                    a = g;
                else if (a = Zh(b, c, g, .2, e), !0 !== a)
                    e.gfwrnwer = a,
                    a = g;
                else if (a = Th(b))
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b:
                        {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const k = g.parentElement.childNodes;
                                for (let m = 0; m < k.length; ++m) {
                                    const l = k[m];
                                    if (l !== g && bi(b, l))
                                        break b
                                }
                                g = g.parentElement;
                                g.style.width = "100%";
                                g.style.height = "auto"
                            }
                        }di(b, c)
                    } else
                        a = g;
                else
                    a = g
            }
            if (250 > a)
                throw new V("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f)
                    throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new pn(11, new ei(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++)
                        b.push(parseInt(d[g], 36) / c);
                else
                    b = null;
                if (!b)
                    throw new V("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++)
                    c += b[g] * d,
                    d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f))
                    throw new V("Invalid height: height=" + f);
                if (50 > f)
                    throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f)
                    throw new V("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new pn(11, new ei(a, f))
            }
            d = xn[f];
            if (!d)
                throw new V("Invalid data-ad-layout value: " + f);
            c = hi(c, b);
            b = Th(b);
            b = "in-article" !== f ||
            c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new pn(11, "in-article" == f ? new yn(a, b) : new ei(a, b))
        };
    function An(a) {
        return b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b))
                    return !1;
            return !0
        }
    }
    function Bn(a, b) {
        var c = Cn.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (null == b || b(g))
                    return g;
                null === e && (e = g)
            }
        }
        return e
    }
    ;
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        Cn = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    function Dn(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            F: a,
            G: 1
        } : "autorelaxed" === b && e.google_full_width_responsive || En(b) || e.google_ad_resize ? (b = $h(a, c, d, e), c = !0 !== b ? {
            F: a,
            G: b
        } : {
            F: Th(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        const {F: f, G: g} = c;
        return !0 !== g ? {
            F: a,
            G: g
        } : d.parentElement ? {
            F: f,
            G: g
        } : {
            F: a,
            G: g
        }
    }
    function Fn(a, b, c, d, e) {
        const {F: f, G: g} = gj(247, () => Dn(a, b, c, d, e));
        var h = !0 === g;
        const k = R(d.style.width),
            m = R(d.style.height),
            {W: l, T: q, pa: t, bb: v} = Gn(f, b, c, d, e, h);
        h = Hn(b, t);
        var w;
        const z = (w = fi(d, c, "marginLeft", R)) ? `${w}px` : "",
            A = (w = fi(d, c, "marginRight", R)) ? `${w}px` : "";
        w = fi(d, c, "zIndex") || "";
        return new pn(h, l, t, null, v, g, q, z, A, m, k, w)
    }
    function En(a) {
        return "auto" === a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }
    function Gn(a, b, c, d, e, f) {
        b = In(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var m = 488 > Th(c);
        if (m) {
            g = Uh(d, c);
            var l = hi(d, c);
            h = !l && g;
            k = l && g
        }
        l = [gi(a), hn(b)];
        l.push(ji(m, c, d, k));
        null != e.google_max_responsive_height && l.push(ki(e.google_max_responsive_height));
        m = [w => !w.j];
        if (h || k)
            h = li(c, d),
            m.push(ki(h));
        const q = Bn(An(l), An(m));
        if (!q)
            throw new V(`No slot size for availableWidth=${a}`);
        const {W: t, T: v} = gj(248, () => {
            var w;
            a:
            if (f) {
                if (e.gfwrnh && (w = R(e.gfwrnh))) {
                    w = {
                        W: new wn(a, w),
                        T: !0
                    };
                    break a
                }
                w = a / 1.2;
                var z = Math;
                var A = z.min;
                if (e.google_resizing_allowed ||
                "true" == e.google_full_width_responsive)
                    var B = Infinity;
                else {
                    B = d;
                    let sa = Infinity;
                    do {
                        var ca = fi(B, c, "height", R);
                        ca && (sa = Math.min(sa, ca));
                        (ca = fi(B, c, "maxHeight", R)) && (sa = Math.min(sa, ca))
                    } while ((B = B.parentElement) && "HTML" != B.tagName);
                    B = sa
                }
                z = A.call(z, w, B);
                if (z < .5 * w || 100 > z)
                    z = w;
                w = {
                    W: new wn(a, Math.floor(z)),
                    T: z < w ? 102 : !0
                }
            } else
                w = {
                    W: q,
                    T: 100
                };
            return w
        });
        return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" === c.location.hash ? {
            W: Jn(a, c, d, t, e),
            T: !1,
            pa: b,
            bb: g
        } : {
            W: t,
            T: v,
            pa: b,
            bb: g
        }
    }
    function Hn(a, b) {
        if ("auto" === a)
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8;
        default:
            throw Error("bad mask");
        }
    }
    function In(a, b, c) {
        if ("auto" === c)
            c = Math.min(1200, Th(a)),
            b = .25 >= b / c ? 4 : 3;
        else {
            b = 0;
            for (const d in Qh)
                -1 !== c.indexOf(d) && (b |= Qh[d])
        }
        return b
    }
    function Jn(a, b, c, d, e) {
        const f = e.google_ad_height || fi(c, b, "height", R);
        b = zn(a, b, c, f, e).size();
        return b.U * b.height() > a * d.height() ? new Y(b.U, b.height(), 1) : d
    }
    ;
    var Kn = (a, b, c, d, e) => {
        var f;
        (f = Th(b)) ? 488 > Th(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, di(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        } : f = {
            F: a,
            G: 10
        };
        const {F: g, G: h} = f;
        if (!0 !== h || a == g)
            return new pn(12, new ei(a, d), null, null, !0, h, 100);
        const {W: k, T: m, pa: l} = Gn(g, "auto", b, c, e, !0);
        return new pn(1, k, l, 2, !0, h, m)
    };
    var Mn = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" === c) {
                a:
                {
                    if ("pedestal" !== b.google_content_recommendation_ui_type)
                        for (const d of qn)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }return a ? 9 : 5
            }
            if (En(c))
                return 1;
            if ("link" === c)
                return 4;
            if ("fluid" == c)
                return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Ln(b), 1);
            if (27 === b.google_reactive_ad_format)
                return Ln(b), 1
        },
        On = (a, b, c, d, e=!1) => {
            var f = b.offsetWidth || (c.google_ad_resize || e) && fi(b, d, "width",
            R) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            e = (e = Nn(a, f, b, c, d)) ? e : Fn(f, c.google_ad_format, d, b, c);
            e.size().h(d, c, b);
            null != e.fa && (c.google_responsive_formats = e.fa);
            null != e.X && (c.google_safe_for_responsive_override = e.X);
            null != e.h && (!0 === e.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.h));
            null != e.i && !0 !== e.i && (c.gfwrnher = e.i);
            d = e.s || c.google_ad_width;
            null != d && (c.google_resizing_width = d);
            d = e.j || c.google_ad_height;
            null != d && (c.google_resizing_height =
            d);
            d = e.size().g(f);
            const g = e.size().height();
            c.google_ad_width = d;
            c.google_ad_height = g;
            var h = e.size();
            f = h.g(f) + "x" + h.height();
            c.google_ad_format = f;
            c.google_responsive_auto_format = e.B;
            null != e.g && (c.armr = e.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === e.h && (c.gfwrnh = e.size().height() + "px");
            null != e.C && (c.gfwroml = e.C);
            null != e.D && (c.gfwromr = e.D);
            null != e.j && (c.gfwroh = e.j);
            null != e.s && (c.gfwrow = e.s);
            null != e.H && (c.gfwroz = e.H);
            f = Dd(window) || window;
            jm(f.location,
            "google_responsive_dummy_ad") && (Na([1, 2, 3, 4, 5, 6, 7, 8], e.B) || 1 === e.g) && 2 !== e.g && (f = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${on}>window.top.postMessage('${f}', '*'); 
          </${on}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${

            d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`
            );
            1 != a && (a = e.size().height(), b.style.height = a + "px")
        };
    const Nn = (a, b, c, d, e) => {
            const f = d.google_ad_height || fi(c, e, "height", R);
            switch (a) {
            case 5:
                const {F: g, G: h} = gj(247, () => Dn(b, d.google_ad_format, e, c, d));
                !0 === h && b != g && di(e, c);
                !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                return sn(g, d);
            case 9:
                return vn(b, d);
            case 8:
                return zn(b, e, c, f, d);
            case 10:
                return Kn(b, e, c, f, d)
            }
        },
        Ln = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };
    function Pn(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    }
    ;
    function Qn(a, b) {
        var c = Dd(b);
        if (c) {
            c = Th(c);
            const d = Gd(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat)
                return -1;
            if ("ltr" === e && c)
                return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c)
                return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    }
    ;
    function Rn(a, b) {
        switch (a) {
        case "google_reactive_ad_format":
            return a = parseInt(b, 10), isNaN(a) ? 0 : a;
        default:
            return b
        }
    }
    function Sn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Bd(c, "client");
            d && (b.google_ad_client = Rn("google_ad_client", d));
            (c = Bd(c, "host")) && (b.google_ad_host = Rn("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = ra(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Rn(f, e.value), null !== e && (b[f] = e))
            }
        }
    }
    function Tn(a) {
        if (a = he(a))
            switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
            }
        else
            return 12
    }
    function Un(a, b, c, d) {
        Sn(a, b);
        if (c.document && c.document.body && !Mn(c, b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
            var e = parseInt(a.style.width, 10),
                f = Qn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Im[e + "x" + g];
                let h = f;
                if (e) {
                    const k = Jm(f, g);
                    if (k)
                        h = k,
                        b.google_ad_format = k + "x" + g + "_0ads_al";
                    else
                        throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                Pn(b, 4)
            }
        }
        if (488 >
        Th(c)) {
            f = Dd(c) || c;
            (g = a.offsetWidth) || (g = fi(a, c, "width", R));
            g = g || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = jm(f.location, "google_responsive_slot_preview") || Q(zh) || Ml(f, 1, e, d))
                b:
                if (b.google_reactive_ad_format || b.google_ad_resize || Mn(c, b) || Wh(a, b))
                    d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Gd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Na(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = Zh(c, a, g, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (Pn(b, 1), d = !0) : d = !1
        } else
            d = !1;
        if (g =
        Mn(c, b))
            On(g, a, b, c, d);
        else {
            if (Wh(a, b)) {
                if (d = Gd(a, c))
                    a.style.width = d.width,
                    a.style.height = d.height,
                    Vh(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Tn(c)
            } else
                Vh(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? On(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = $h(a.offsetWidth ||
            parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    }
    ;
    function Vn(a) {
        if (a === a.top)
            return 0;
        for (let b = a; b && b !== b.top && Cd(b); b = b.parent) {
            if (a.sf_)
                return 2;
            if (a.$sf)
                return 3;
            if (a.inGptIF)
                return 4;
            if (a.inDapIF)
                return 5
        }
        return 1
    }
    ;
    function Vf(a, b, c=0) {
        0 < a.g.size || Wn(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }
    function Xn(a, b, c, d) {
        Yc(b, c, d);
        Qj(a, () => Zc(b, c, d))
    }
    function Yn(a, b) {
        1 !== a.h && (a.h = 1, 0 < a.g.size && Zn(a, b))
    }
    function Wn(a) {
        a.l.document.visibilityState ? Xn(a, a.l.document, "visibilitychange", b => {
            "hidden" === a.l.document.visibilityState && Yn(a, b);
            "visible" === a.l.document.visibilityState && (a.h = 0)
        }) : "onpagehide" in a.l ? (Xn(a, a.l, "pagehide", b => {
            Yn(a, b)
        }), Xn(a, a.l, "pageshow", () => {
            a.h = 0
        })) : Xn(a, a.l, "beforeunload", b => {
            Yn(a, b)
        })
    }
    function Zn(a, b) {
        for (let c = 9; 0 <= c; c--)
            a.g.get(c)?.forEach(d => {
                d(b)
            })
    }
    var $n = class  extends Pj{
        constructor(a)
        {
            super();
            this.l = a;
            this.h = 0;
            this.g = new Map
        }
    }
    ;
    async function ao(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    }
    ;
    function bo(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = Wd(a.l)
    }
    function co(a) {
        const b = a.g.wpc;
        return null !== b && "" !== b ? b : a.g.wpc = Hm(a.l)
    }
    function eo(a, b) {
        var c = new of;
        var d = bo(a);
        c = M(c, 1, d);
        d = co(a);
        c = Jc(c, 2, d);
        c = M(c, 3, a.g.sd);
        return M(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function fo(a) {
        await ao(a.l, () => !(!bo(a) || !co(a)))
    }
    function go(a) {
        var b = P(ho);
        if (b.i) {
            var c = b.B;
            a(c);
            b.g.psi = c.toJSON()
        }
    }
    function io(a) {
        Vf(a.j, () => {
            var b = eo(a);
            b = yc(b, 12, pf, a.C);
            a.i && !a.g.le.includes(3) && (a.g.le.push(3), Rf(a.h, b))
        }, 9)
    }
    function jo(a) {
        const b = new kf;
        Q(sh) ? Jc(b, 1, a.s) : Jc(b, 1,a.l?.document?.URL);
        Vf(a.j, () => {
            xc(b, 2, a.B);
            M(b, 3, a.g.tar);
            var c = a.h;
            var d = eo(a);
            d = yc(d, 8, pf, b);
            Rf(c, d)
        }, 9)
    }
    async function ko(a) {
        var b = P(ho);
        if (b.i && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await fo(b);
            var d = new hf;
            a = E(d, 5, Bb(a), !1);
            d = new gf;
            d = M(d, 1, Sh(b.l).scrollWidth);
            d = M(d, 2, Sh(b.l).scrollHeight);
            a = xc(a, 2, d);
            d = new gf;
            var e = Th(b.l);
            d = M(d, 1, e);
            d = M(d, 2, Sh(b.l).clientHeight);
            a = xc(a, 1, d);
            Q(sh) ? Jc(a, 4, b.s) : Jc(a, 4,b.l?.document?.URL);
            d = Vn(b.l);
            0 !== d && (e = new ff, d = C(e, 1, y(d)), xc(a, 3, d));
            d = b.h;
            c = eo(b, c);
            c = yc(c, 4, pf, a);
            Rf(d, c);
            io(b);
            jo(b)
        }
    }
    async function lo(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await fo(a);
            var e = a.h;
            a = eo(a, d);
            d = new ef;
            b = E(d, 1, y(b), 0);
            c = qc(b, 2, c, Fb);
            c = yc(a, 9, pf, c);
            Rf(e, c)
        }
    }
    async function mo(a, b) {
        await fo(a);
        var c = a.h;
        a = eo(a);
        a = M(a, 3, 1);
        b = yc(a, 10, pf, b);
        Rf(c, b)
    }
    var ho = class {
        constructor(a, b)
        {
            this.l = ie() || window;
            this.j = b ?? new $n(this.l);
            this.h = a ?? new Xf(2, Hk(), 100, 100, !0, this.j);
            this.g = Ij(Fj(), 33, () => {
                const c = ad(rh);
                return {
                    sd: c,
                    ssp: 0 < c && Hd() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get i()
        {
            return this.g.ssp
        }
        get s()
        {
            return this.g.cu
        }
        set s(a)
        {
            this.g.cu = a
        }
        get B()
        {
            return gj(1178, () => Kc(jf, ac(this.g.psi || []))) || new jf
        }
        get C()
        {
            return gj(1227, () => Kc(lf, ac(this.g.cc || []))) || new lf
        }
    }
    ;
    function no() {
        var a = window;
        return "on" === n.google_adtest || "on" === n.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") || "gamesnacks.com" === a.location.host ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && 0 < b) || [] : []
    }
    ;
    function oo(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }
    function po(a) {
        var b = S.document;
        if (b.currentScript)
            return oo(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === oo(c, a))
                return 0;
        return 1
    }
    ;
    function qo(a, b) {
        return {
            [3]: {
                [55]: () => 0 === a,
                [23]: c => Ml(S, Number(c)),
                [24]: c => Pl(Number(c)),
                [61]: () => J(b, 6),
                [63]: () => J(b, 6) || ".google.ch" === K(b, 8)
            },
            [4]: {},
            [5]: {
                [6]: () => K(b, 15)
            }
        }
    }
    ;
    function ro(a=n) {
        return a.ggeac || (a.ggeac = {})
    }
    ;
    function so(a, b=document) {
        return !!b.featurePolicy?.features().includes(a)
    }
    function to(a, b=document) {
        return !!b.featurePolicy?.allowedFeatures().includes(a)
    }
    ;
    function uo(a, b) {
        try {
            const d = a.split(".");
            a = n;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++)
                f = a,
                a = a[d[e]],
                "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b)
                return c
        } catch {}
    }
    var vo = {
        [3]: {
            [8]: a => {
                try {
                    return null != da(a)
                } catch {}
            },
            [9]: a => {
                try {
                    var b = da(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b)
                    b = b && b.toString && b.toString(),
                    a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Na(P(Ag).g(), Number(a)),
            [27]: a => {
                a = uo(a, "boolean");
                return void 0 !== a ? a : void 0
            },
            [60]: a => {
                try {
                    return !!n.document.querySelector(a)
                } catch {}
            },
            [69]: a => so(a, n.document),
            [70]: a => to(a, n.document)
        },
        [4]: {
            [3]: () => Od(),
            [6]: a => {
                a = uo(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = uo(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };
    function wo(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {jb: h, fb: k, gb: m} = e[e.length - 1];
            c.set(d, h + k * m)
        }
        for (const f of b)
            for (const g of G(f, vl, 2))
                if (0 !== G(g, ul, 2).length) {
                    b = Cc(Ib(fc(g, 8)), 0);
                    L(g, 4) && !L(g, 13) && (b = c.get(L(g, 4)) ?? 0, d = Cc(Ib(fc(g, 1)), 0) * G(g, ul, 2).length, c.set(L(g, 4), b + d));
                    d = [];
                    for (e = 0; e < G(g, ul, 2).length; e++) {
                        const h = {
                            jb: b,
                            fb: Cc(Ib(fc(g, 1)), 0),
                            gb: G(g, ul, 2).length,
                            Bb: e,
                            Xa: L(f, 1),
                            qa: g,
                            O: G(g, ul, 2)[e]
                        };
                        d.push(h)
                    }
                    xo(a[2], L(g, 10), d) || xo(a[1], L(g, 4), d) || xo(a[0], G(g,
                    ul, 2)[0].getId(), d)
                }
        return a
    }
    function xo(a, b, c) {
        if (!b)
            return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    }
    ;
    function yo(a=Hd()) {
        return b => Jd(`${b} + ${a}`) % 1E3
    }
    ;
    const zo = [12, 13, 20];
    function Ao(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }
    function Bo(a, b, c, d) {
        const e = [];
        var f;
        if (f = 9 !== b)
            a.j[b] ? f = !0 : (a.j[b] = !0, f = !1);
        if (f)
            return Zf(a.M, b, c, e, [], 4), e;
        f = zo.includes(b);
        const g = [],
            h = P(bg).I,
            k = [];
        for (const t of [0, 1, 2])
            for (const [v, w] of a.ka[t].entries()) {
                var m = v,
                    l = w;
                const z = new uf;
                var q = l.filter(A => A.Xa === b && !!a.h[A.O.getId()] && Ve(F(A.qa, Oe, 3), h) && Ve(F(A.O, Oe, 3), h));
                if (q.length)
                    for (const A of q)
                        k.push(A.O);
                else if (!a.za && (2 === t ? (q = d[1], rc(z, 2, vf, y(m))) : q = d[0], m = q?.(String(m)) ?? (2 === t && 1 === L(l[0].qa, 11) ? void 0 : d[0](String(m))), void 0 !== m)) {
                    for (const A of l)
                        if (A.Xa ===
                        b) {
                            l = m - A.jb;
                            q = A.fb;
                            const B = A.gb,
                                ca = A.Bb;
                            0 <= l && l < q * B && l % B === ca && Ve(F(A.qa, Oe, 3), h) && Ve(F(A.O, Oe, 3), h) && (l = L(A.qa, 13), 0 !== l && void 0 !== l && (q = a.i[String(l)], void 0 !== q && q !== A.O.getId() ? $f(a.M, a.i[String(l)], A.O.getId(), l) : a.i[String(l)] = A.O.getId()), k.push(A.O))
                        }
                    0 !== uc(z, vf) && (E(z, 3, Gb(m), 0), g.push(z))
                }
            }
        for (const t of k)
            d = t.getId(),
            e.push(d),
            Ao(a, d, f ? 4 : c),
            rg(G(t, Ye, 2), f ? tg() : [c], a.M, d);
        Zf(a.M, b, c, e, g, 1);
        return e
    }
    function Co(a, b) {
        b = b.map(c => new wl(c)).filter(c => !zo.includes(L(c, 1)));
        a.ka = wo(a.ka, b)
    }
    function Do(a, b) {
        T(1, c => {
            a.h[c] = !0
        }, b);
        T(2, (c, d, e) => Bo(a, c, d, e), b);
        T(3, c => (a.g[c] || []).concat(a.g[4]), b);
        T(12, c => void Co(a, c), b);
        T(16, (c, d) => void Ao(a, c, d), b)
    }
    var Eo = class {
        constructor(a, b, c, {za: d=!1, tc: e=[]}={})
        {
            this.ka = a;
            this.M = c;
            this.j = {};
            this.za = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            this.i = {};
            if (a = te()) {
                a = a.split(",") || [];
                for (const f of a)
                    (a = Number(f)) && (this.h[a] = !0)
            }
            for (const f of e)
                this.h[f] = !0
        }
    }
    ;
    function Fo(a, b) {
        a.g = vg(14, b, () => {})
    }
    class Go {
        constructor()
        {
            this.g = () => {}
        }
    }
    function Ho(a) {
        P(Go).g(a)
    }
    ;
    function Io({tb: a, I: b, config: c, ob: d=ro(), pb: e=0, M: f=new ag(F(a, xl, 5)?.g() ?? 0, F(a, xl, 5)?.h() ?? 0, F(a, xl, 5)?.i() ?? !1), ka: g=wo({
        [0]: new Map,
        [1]: new Map,
        [2]: new Map
    }, G(a, wl, 2))}) {
        d.hasOwnProperty("init-done") ? (vg(12, d, () => {})(G(a, wl, 2).map(h => h.toJSON())), vg(13, d, () => {})(G(a, Ye, 1).map(h => h.toJSON()), e), b && vg(14, d, () => {})(b), Jo(e, d)) : (Do(new Eo(g, e, f, c), d), wg(d), xg(d), yg(d), Jo(e, d), rg(G(a, Ye, 1), [e], f, void 0, !0), cg = cg || !(!c || !c.xb), Ho(vo), b && Ho(b))
    }
    function Jo(a, b=ro()) {
        zg(P(Ag), b, a);
        Ko(b, a);
        Fo(P(Go), b);
        P($c).s()
    }
    function Ko(a, b) {
        const c = P($c);
        c.g = (d, e) => vg(5, a, () => !1)(d, e, b);
        c.h = (d, e) => vg(6, a, () => 0)(d, e, b);
        c.i = (d, e) => vg(7, a, () => "")(d, e, b);
        c.j = (d, e) => vg(8, a, () => [])(d, e, b);
        c.s = () => {
            vg(15, a, () => {})(b)
        }
    }
    ;
    function Lo(a, b) {
        b = {
            [0]: yo(Wd(b).toString())
        };
        b = P(Ag).j(a, b);
        Eg.Y(1085, lo(P(ho), a, b))
    }
    function Mo(a, b, c) {
        var d = X(a);
        if (d.plle)
            Jo(1, ro(a));
        else {
            d.plle = !0;
            d = F(b, yl, 12);
            var e = J(b, 9);
            Io({
                tb: d,
                I: qo(c, b),
                config: {
                    za: e && !!a.google_disable_experiments,
                    xb: e
                },
                ob: ro(a),
                pb: 1
            });
            if (c = K(b, 15))
                c = Number(c),
                P(Ag).i(c);
            for (const f of lc(b, 19, Hb))
                P(Ag).h(f);
            Lo(12, a);
            Lo(10, a);
            a = Dd(a) || a;
            jm(a.location, "google_mc_lab") && P(Ag).h(44738307);
            jm(a.location, "google_auto_storify_swipeable") && P(Ag).h(44773747);
            jm(a.location, "google_auto_storify_scrollable") && P(Ag).h(44773746)
        }
    }
    ;
    function No(a, b) {
        a.Da(c => {
            c.shv = String(b);
            c.mjsv = Cm({
                va: Hk(),
                Ca: b
            });
            const d = P(Ag).g(),
                e = no();
            c.eid = d.concat(e).join(",")
        })
    }
    ;
    function Oo(a) {
        var b = W;
        try {
            return Lc(a, Me), new Al(JSON.parse(a))
        } catch (c) {
            b.J(838, c instanceof Error ? c : Error(String(c)))
        }
        return new Al
    }
    ;
    function Po(a, b, c) {
        Q(Ah) && "sd" !== b.google_loader_used && (J(c, 16) ? a = 6 : J(c, 22) ? a = 7 : (c = c.g()?.g() ?? [], a = 0 === c.length ? 1 : 1 === c.length ? a === c[0] ? 3 : 2 : c.includes(a) ? 5 : 4), b.abgtt = a)
    }
    ;
    function Qo(a) {
        if (a.g)
            return a.g;
        a.B && a.B(a.h) ? a.g = a.h : a.g = Nd(a.h, a.D);
        return a.g ?? null
    }
    var Ro = class  extends Pj{
        constructor(a, b, c)
        {
            super();
            this.D = b;
            this.B = c;
            this.C = new Map;
            this.j = new Map;
            this.h = a
        }
    }
    ;
    const So = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.ca({
                    wa: c ?? void 0,
                    sb: d ? void 0 : 2
                })
            })
        },
        To = {
            yb: a => a.ca,
            zb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Cb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    wa: b.returnValue ?? void 0,
                    sb: b.success ? void 0 : 2
                })
            }
        };
    var Uo = class  extends Pj{
        constructor()
        {
            var a = S;
            super();
            this.timeoutMs = {}.timeoutMs ?? 500;
            this.caller = new Ro(a, "__uspapiLocator", b => "function" === typeof b.__uspapi);
            this.caller.C.set("getDataWithCallback", So);
            this.caller.j.set("getDataWithCallback", To)
        }
    }
    ;
    var Vo = Oc(class  extends N{}
    );
    const Wo = (a, b) => {
            const c = {
                cb: d => {
                    d = Vo(d);
                    b.ca({
                        wa: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        Xo = {
            yb: a => a.ca,
            zb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Cb: (a, b) => {
                a({
                    wa: b
                })
            }
        };
    var Yo = class  extends Pj{
        constructor()
        {
            var a = S;
            super();
            this.g = this.h = !1;
            this.caller = new Ro(a, "googlefcPresent");
            this.caller.C.set("getDataWithCallback", Wo);
            this.caller.j.set("getDataWithCallback", Xo)
        }
    }
    ;
    var Zo = a => {
        Yc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }
            !c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };
    function $o(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }
    function ap(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }
    function bp() {
        const a = new Set,
            b = uj();
        try {
            if (!b)
                return a;
            const c = b.pubads();
            for (const d of c.getSlots())
                a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }
    function cp(a) {
        a = a.id;
        return null != a && (bp().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }
    function dp(a, b, c) {
        if (!a.sources)
            return !1;
        switch (ep(a)) {
        case 2:
            const d = fp(a);
            if (d)
                return c.some(f => gp(d, f));
            break;
        case 1:
            const e = hp(a);
            if (e)
                return b.some(f => gp(e, f))
        }
        return !1
    }
    function ep(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function hp(a) {
        return ip(a, b => b.currentRect)
    }
    function fp(a) {
        return ip(a, b => b.previousRect)
    }
    function ip(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    function gp(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    function jp() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(cp),
            b = [...bp()].map(c => document.getElementById(c)).filter(c => null !== c);
        kp = window.scrollX;
        lp = window.scrollY;
        return mp = [...a, ...b].map(c => c.getBoundingClientRect())
    }
    function np() {
        var a = new op;
        if (Q(Uc)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.lb.rb && b.push("event");
                for (const c of b)
                    b = {
                        type: c,
                        buffered: !0
                    },
                    "event" === c && (b.durationThreshold = 40),
                    pp(a).observe(b);
                qp(a)
            }
        }
    }
    function rp(a, b) {
        const c = kp !== window.scrollX || lp !== window.scrollY ? [] : mp,
            d = jp();
        for (const e of b.getEntries())
            switch (b = e.entryType, b) {
            case "layout-shift":
                sp(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Ka = Math.floor(b.renderTime || b.loadTime);
                a.Ja = b.size;
                break;
            case "first-input":
                b = e;
                a.Ga = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ha = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || tp(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                b;
                a.H = Math.max(a.H, b);
                a.sa += 1;
                break;
            case "event":
                tp(a, e);
                break;
            default:
                sd(b, void 0)
            }
    }
    function pp(a) {
        a.M || (a.M = new PerformanceObserver(Oi(640, b => {
            rp(a, b)
        })));
        return a.M
    }
    function qp(a) {
        const b = Oi(641, () => {
                var d = document;
                2 === (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && up(a)
            }),
            c = Oi(641, () => void up(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Fa = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            pp(a).disconnect()
        }
    }
    function up(a) {
        if (!a.Na) {
            a.Na = !0;
            pp(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += ap("cls", a.C), b += ap("mls", a.X), b += $o("nls", a.ra), window.LayoutShiftAttribution && (b += ap("cas", a.s), b += $o("nas", a.Ma), b += ap("was", a.Ra)), b += ap("wls", a.ta), b += ap("tls", a.Qa));
            window.LargestContentfulPaint && (b += $o("lcp", a.Ka), b += $o("lcps", a.Ja));
            window.PerformanceEventTiming && a.Ha && (b += $o("fid", a.Ga));
            window.PerformanceLongTaskTiming && (b += $o("cbt", a.B),
            b += $o("mbt", a.H), b += $o("nlt", a.sa));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe"))
                cp(c) && d++;
            b += $o("nif", d);
            b += $o("ifi", ke(window));
            c = P(Ag).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n === n.top ? 1 : 0}`;
            b += a.Pa ? `&${"qqid"}=${encodeURIComponent(a.Pa)}` : $o("pvsid", Wd(n));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.M ? a.Ia : performance.interactionCount || 0) / 50));
            0 <= c && (c = a.g[c].latency, 0 <= c && (b += $o("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Fa()
        }
    }
    function sp(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.C += Number(b.value);
            Number(b.value) > a.X && (a.X = Number(b.value));
            a.ra += 1;
            if (c = dp(b, c, d))
                a.s += b.value,
                a.Ma++;
            if (5E3 < b.startTime - a.La || 1E3 < b.startTime - a.Oa)
                a.La = b.startTime,
                a.h = 0,
                a.i = 0;
            a.Oa = b.startTime;
            a.h += b.value;
            c && (a.i += b.value);
            a.h > a.ta && (a.ta = a.h, a.Ra = a.i, a.Qa = b.startTime + b.duration)
        }
    }
    function tp(a, b) {
        vp(a, b);
        const c = a.g[a.g.length - 1],
            d = a.D[b.interactionId];
        if (d || 10 > a.g.length || b.duration > c.latency)
            d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            }, a.D[b.id] = b, a.g.push(b)),
            a.g.sort((e, f) => f.latency - e.latency),
            a.g.splice(10).forEach(e => {
                delete a.D[e.id]
            })
    }
    function vp(a, b) {
        b.interactionId && (a.ba = Math.min(a.ba, b.interactionId), a.j = Math.max(a.j, b.interactionId), a.Ia = a.j ? (a.j - a.ba) / 7 + 1 : 0)
    }
    var op = class {
            constructor()
            {
                var a = {
                    rb: Q(Hh)
                };
                this.i = this.h = this.ra = this.X = this.C = 0;
                this.Oa = this.La = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.D = {};
                this.Ia = 0;
                this.ba = Infinity;
                this.Ga = this.Ja = this.Ka = this.Ma = this.Ra = this.s = this.Qa = this.ta = this.j = 0;
                this.Ha = !1;
                this.sa = this.H = this.B = 0;
                this.M = null;
                this.Na = !1;
                this.Fa = () => {};
                const b = document.querySelector("[data-google-query-id]");
                this.Pa = b ? b.getAttribute("data-google-query-id") : null;
                this.lb = a
            }
        }
        ,
        kp,
        lp,
        mp = [];
    let wp = null;
    const xp = [],
        yp = new Map;
    let zp = -1;
    function Ap(a) {
        return ni.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }
    function Bp(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Cp(a, b, c)
    }
    function Cp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Un);
        var e = b.google_reactive_ads_config;
        e || Un(a, b, d, c);
        Zm(d, b);
        if (!Dp(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(S).page_contains_reactive_tag && !X(S).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Fl(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(S).page_contains_reactive_tag = !0;
                Fl(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = je(d);
            Id(Dm, (f, g) => {
                b[g] = b[g] || d[g]
            });
            "sd" !== b.google_loader_used && (b.google_loader_used =
            "aa");
            b.google_reactive_tag_first = 1 === (X(S).first_tag_on_page || 0);
            gj(164, () => {
                dn(d, b, a, c)
            })
        }
    }
    function Dp(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Dl(c);
        if (f && f.Sa && "on" !== b.google_adtest && !e) {
            e = Xh(a, c);
            const g = Sh(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.ua || f.ua && (e || 0) >= f.ua)
                return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = fa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Jb && (null !== Md(a.getAttribute("width")) &&
                a.setAttribute("width", "0"), null !== Md(a.getAttribute("height")) && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Gd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d))
            return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
        !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }
    function Ep(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (Ap(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a))
                return e
        }
        return null
    }
    function Fp(a, b, c) {
        if (a && "shift" in a) {
            go(e => {
                Gc(vc(e), 2) || (e = vc(e), Ic(e, 2))
            });
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    Gp(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }
                --d
            }
        }
    }
    function Hp() {
        const a = Fd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Qd(a);
        return a
    }
    function Ip(a, b) {
        const c = {},
            d = Wl(a.google_ad_client, b);
        Id(Rh, (g, h) => {
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        ea(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = Hp();
        Xd.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(S).pause_ad_requests;
        Po(Jp(a) || Hm(S), f, b);
        Bp(e, f, b);
        go(g => {
            Gc(vc(g), 6) || (g = vc(g), Ic(g, 6))
        })
    }
    function Kp(a, b) {
        sm(n).wasPlaTagProcessed = !0;
        const c = () => {
                Ip(a, b)
            },
            d = n.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState)
            Ip(a, b);
        else {
            const e = Xc(W.oa(191, c));
            Yc(d, "DOMContentLoaded", e);
            null != n.MutationObserver && (new n.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }
    function Gp(a, b, c) {
        const d = {};
        gj(165, () => {
            Lp(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }
    function Mp(a) {
        delete a.google_checked_head;
        Id(a, (b, c) => {
            mi[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }
    function Np(a, b) {
        var c = S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars)
                Op(c);
            else {
                go(g => {
                    g = vc(g);
                    E(g, 7, Bb(!0), !1)
                });
                var e = {};
                Sn(c, e);
                Mp(e);
                var f = gd(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                e.google_ad_intent_query &&
                (c.enable_ad_intent_display_ads = !0);
                "bottom" === e.google_overlays && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                S.adsbygoogle || (S.adsbygoogle = []);
                d = S.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test||b.h()?.h() ? Pp(f, a) : Zo(() => {
                    Pp(f, a)
                })
            }
        }
    }
    function Op(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Bd(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client)
            throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }
    function Qp(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type)
                return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
                return 3
        }
        return 0
    }
    function Lp(a, b, c, d) {
        if (null == a)
            throw new V("push() called with no parameters.");
        go(f => {
            Gc(vc(f), 3) || (f = vc(f), Ic(f, 3))
        });
        d.i() && Rp(a, d.g().g(), K(d, 2));
        var e = Qp(a);
        if (0 !== e)
            if (d = Gl(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = pa), null == wp)
                Sp(a),
                xp.push(a);
            else if (3 === e) {
                const f = wp;
                gj(787, () => {
                    f.handleAdConfig(a)
                })
            } else
                ij(730, wp.handleAdBreak(a));
        else {
            pa = (new Date).getTime();
            $m(c, d, Jp(a));
            Po(Jp(a) || Hm(S), b, d);
            Tp();
            a:
            {
                if (!a.enable_ad_intent_display_ads && void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }if (e)
                go(f => {
                    Gc(vc(f), 4) || (f = vc(f), Ic(f, 4))
                }),
                Up(a, d);
            else if ((e = a.params) && Id(e, (f, g) => {
                b[g] = f
            }), "js" === b.google_ad_output)
                console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Vp(a.element);
                Sn(e, b);
                c = X(n).head_tag_slot_vars || {};
                Id(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars)
                    throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client)
                    throw new V("Ad client is missing from the slot.");
                if (c = 0 === (X(S).first_tag_on_page || 0) && wm(b))
                    go(f => {
                        Gc(vc(f), 5) || (f = vc(f), Ic(f, 5))
                    }),
                    Wp(c);
                0 === (X(S).first_tag_on_page ||
                0) && (X(S).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(S).pause_ad_requests;
                Bp(e, b, d)
            }
        }
    }
    let Xp = !1;
    function Rp(a, b, c) {
        Xp || (Xp = !0, a = Jp(a) || Hm(S), hj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }
    function Jp(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }
    function Tp() {
        if (Q(wh)) {
            var a = Dl(S);
            if (!(a = a && a.Sa)) {
                a = S;
                try {
                    var b = a.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? rl(b) : null;
                a = !(b && ql(b) && b)
            }
            a || El(S, 1)
        }
    }
    function Wp(a) {
        Yd(() => {
            sm(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
        })
    }
    function Up(a, b) {
        0 === (X(S).first_tag_on_page || 0) && (X(S).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(n);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        xm(a, b);
        Kp(a, b)
    }
    function Vp(a) {
        if (a) {
            if (!Ap(a) && (a.id ? a = Ep(a.id) : a = null, !a))
                throw new V("'element' has already been filled.");
            if (!("innerHTML" in a))
                throw new V("'element' is not a good DOM element.");
        } else if (a = Ep(), !a)
            throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }
    function Yp() {
        var a = new Xj(S),
            b = new Uo,
            c = new Yo,
            d = S.__cmp ? 1 : 0;
        a = Uj(a) ? 1 : 0;
        b = Qo(b.caller) ? 1 : 0;
        c.h || (c.g = !!Qo(c.caller), c.h = !0);
        c = c.g;
        hj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c ? 1 : 0,
            ptt: 9
        }, .001)
    }
    function Zp(a) {
        a = {
            value: `${J(a, 16)}`,
            host_v: `${J(a, 22)}`,
            frequency: .01
        };
        hj("new_abg_tag", a, .01)
    }
    function $p(a) {
        var b = Fj();
        Lj(b, 26, !!Number(a))
    }
    function aq(a) {
        Number(a) ? X(S).pause_ad_requests = !0 : (X(S).pause_ad_requests = !1, a = () => {
            if (!X(S).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                S.dispatchEvent(c)
            }
        }, n.setTimeout(a, 0), n.setTimeout(a, 1E3))
    }
    function bq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }
    function Pp(a, b) {
        b = rm(2, n, b.Ib).Ta.then(c => {
            null == wp && (c.init(a), wp = c, cq(c))
        });
        W.Y(723, b);
        b.finally(() => {
            xp.length = 0;
            hj("slotcar", {
                event: "api_ld",
                time: Date.now() - pa,
                time_pr: Date.now() - zp
            });
            Q(Kh) && mo(P(ho), mf(23))
        })
    }
    function cq(a) {
        for (const [c, d] of yp) {
            var b = c;
            const e = d;
            -1 !== e && (n.clearTimeout(e), yp.delete(b))
        }
        for (b = 0; b < xp.length; b++) {
            if (yp.has(b))
                continue;
            const c = xp[b],
                d = Qp(c);
            gj(723, () => {
                if (3 === d)
                    a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.Y(730, e)
                }
            })
        }
    }
    function Sp(a) {
        var b = xp.length;
        if (2 === Qp(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone;
            -1 === zp && (zp = Date.now());
            var d = n.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }),
                    yp.set(b, -1),
                    hj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }),
                    Q(Kh) && mo(P(ho), mf(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, 1E3 * ad(Jh));
            yp.set(b, d)
        }
    }
    function dq() {
        var a = S.document,
            b = rd`https://googleads.g.doubleclick.net`;
        const c = a.createElement("LINK");
        c.crossOrigin = "";
        a:
        {
            if (b instanceof id)
                c.href = ld(b).toString();
            else {
                if (-1 === td.indexOf("preconnect"))
                    throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
                b instanceof pd ? b = b instanceof pd && b.constructor === pd ? b.g : "type_error:SafeUrl" : b = qd.test(b) ? b : void 0;
                if (void 0 === b)
                    break a;
                c.href = b
            }
            c.rel = "preconnect"
        }a.head.appendChild(c)
    }
    ;
    (function(a, b, c, d=() => {}) {
        W.ib(jj);
        gj(166, () => {
            const e = new Xf(2, a);
            try {
                xb(l => {
                    var q = new Lf;
                    var t = new Kf;
                    try {
                        var v = Wd(window);
                        M(t, 1, v)
                    } catch (B) {}
                    try {
                        var w = P(Ag).g();
                        qc(t, 2, w, Fb)
                    } catch (B) {}
                    try {
                        Jc(t, 3, window.document.URL)
                    } catch (B) {}
                    q = xc(q, 2, t);
                    t = new Jf;
                    t = E(t, 1, y(1191), 0);
                    try {
                        var z = Me(l?.name) ? l.name : "Unknown error";
                        Jc(t, 2, z)
                    } catch (B) {}
                    try {
                        var A = Me(l?.message) ? l.message : `Caught ${l}`;
                        Jc(t, 3, A)
                    } catch (B) {}
                    try {
                        const B = Me(l?.stack) ? l.stack : Error().stack;
                        B && qc(t, 4, B.split(/\n\s*/), Nb)
                    } catch (B) {}
                    l = xc(q, 1, t);
                    z = new If;
                    try {
                        Jc(z, 1, Hk())
                    } catch {}
                    yc(l, 6, Mf, z);
                    M(l, 5, 1);
                    Of(e, l)
                })
            } catch (l) {}
            const f = Oo(b);
            No(W, K(f, 2));
            Cl(J(f, 6));
            Mj(Fj(), K(f, 24));
            d();
            ge(16, [1, f.toJSON()]);
            var g = ie(he(S)) || S,
                h = Cm({
                    va: a,
                    Ca: K(f, 2)
                });
            const k = c(h, f);
            h = null === S.document.currentScript ? 1 : po(k.Kb);
            Nl(g, f);
            Mo(g, f, h);
            Q(ph) && dq();
            go(l => {
                var q = Dc(l, 1) + 1;
                E(l, 1, Gb(q), 0);
                S.top === S && (q = Dc(l, 2) + 1, E(l, 2, Gb(q), 0));
                Gc(vc(l), 1) || (l = vc(l), Ic(l, 1))
            });
            ij(1086, ko(0 === h));
            if (!Ca() || 0 <= ta(Ha(), 11)) {
                fj(Q(Lh));
                gn();
                $k();
                try {
                    np()
                } catch {}
                fn();
                Np(k, f);
                g = window;
                h = g.adsbygoogle;
                if (!h || !h.loaded) {
                    Zp(f);
                    Yp();
                    var m = {
                        push: l => {
                            Gp(l, k, f)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(m, "requestNonPersonalizedAds", {
                            set: $p
                        }),
                        Object.defineProperty(m, "pauseAdRequests", {
                            set: aq
                        }),
                        Object.defineProperty(m, "onload", {
                            set: bq
                        })
                    } catch {}
                    if (h)
                        for (const l of ["requestNonPersonalizedAds", "pauseAdRequests"])
                            void 0 !== h[l] && (m[l] = h[l]);
                    Fp(h, k, f);
                    g.adsbygoogle = m;
                    h && (m.onload = h.onload)
                }
            }
        })
    })(Hk(), "undefined" === typeof sttc ? void 0 : sttc, function(a, b) {
        const c = 2012 < Dc(b, 1) ? `_fy${Dc(b, 1)}` : "",
            d = K(b,
            3);
        b = K(b, 2);
        rd`data:text/javascript,//show_ads_impl_preview.js`;
        return {
            Ib: rd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            Gb: rd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl${c}.js`,
            Fb: rd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl_with_ama${c}.js`,
            uc: rd`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            Kb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20240326\",\"r20190131\",1,null,1,null,\".google.is\",null,null,null,[[[611523865,null,null,[1]],[1310,null,null,[1]],[1322,null,null,[1]],[1277,null,null,[1]],[1308,null,null,[1]],[1275,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[null,1224,null,[null,0.01]],[1326,null,null,[1]],[1312,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[1268,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1285,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[null,1072,null,[null,0.75]],[615564062,null,null,[1]],[609036725,null,null,[1]],[null,566560958,null,[null,30000]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[613534001,null,null,[1]],[null,595645509,null,[null,0.3]],[null,561668774,null,[null,0.1]],[null,469675170,null,[null,30000]],[613163869,null,null,[1]],[613699220,null,null,[1]],[596652146,null,null,[1]],[603378945,null,null,[1]],[567362967,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[45615403,null,null,[1]],[45619946,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[595827158,null,null,[1]],[null,550718588,null,[null,250]],[597667424,null,null,[1]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510],[44804781],[44806359]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31078995],[31078996,[[45545710,null,null,[1]],[45459826,null,null,[1]],[531007060,null,null,[1]],[45545724,null,null,[1]],[45430975,null,null,[1]],[531582260,null,null,[1]]]]]],[10,[[31081563],[31081564]]],[50,[[31081575],[31081576,[[562874196,null,null,[1]],[555237685,null,null,[]]]],[31081577,[[562896595,null,null,[1]],[555237685,null,null,[]]]]]],[10,[[31081982],[31081983,[[1290,null,null,[1]]]]]],[200,[[31082031],[31082032,[[615568946,null,null,[1]]]]]],[1000,[[31082130,[[null,null,14,[null,null,\"31082130\"]]],[6,null,null,null,6,null,\"31082130\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31082131,[[null,null,14,[null,null,\"31082131\"]]],[6,null,null,null,6,null,\"31082131\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31082175,[[null,null,14,[null,null,\"31082175\"]]],[6,null,null,null,6,null,\"31082175\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31082176,[[null,null,14,[null,null,\"31082176\"]]],[6,null,null,null,6,null,\"31082176\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[200,[[31082197],[31082198,[[550910941,null,null,[1]]]]]],[1000,[[31082215,[[null,null,14,[null,null,\"31082215\"]]],[6,null,null,null,6,null,\"31082215\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31082216,[[null,null,14,[null,null,\"31082216\"]]],[6,null,null,null,6,null,\"31082216\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31082282,[[null,null,14,[null,null,\"31082282\"]]],[6,null,null,null,6,null,\"31082282\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31082283,[[null,null,14,[null,null,\"31082283\"]]],[6,null,null,null,6,null,\"31082283\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31082300],[31082301,[[1238,null,null,[1]]]]]],[1000,[[31082332,[[null,null,14,[null,null,\"31082332\"]]],[6,null,null,null,6,null,\"31082332\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31082333,[[null,null,14,[null,null,\"31082333\"]]],[6,null,null,null,6,null,\"31082333\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[42532741],[42532742,[[1260,null,null,[1]],[null,1263,null,[null,16]],[null,1323,null,[null,50]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532743,[[1260,null,null,[1]],[null,1263,null,[null,13]],[null,1323,null,[null,180]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532744,[[1260,null,null,[1]],[null,1263,null,[null,11]],[null,1323,null,[null,350]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532745,[[1260,null,null,[1]],[null,1263,null,[null,10]],[null,1323,null,[null,420]],[1291,null,null,[1]],[1266,null,null,[1]]]]]],[null,[[42532746],[42532747],[42532748],[42532749],[42532750]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[200,[[95320376,[[1309,null,null,[1]]]],[95320377,[[null,null,null,[null,null,null,[\"en\",\"de\",\"fr\"]],null,1273],[1309,null,null,[1]]]],[95320378,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ja\"]],null,1273],[1309,null,null,[1]]]]],null,75],[50,[[95321957,[[null,null,null,[null,null,null,[\"en\",\"de\",\"es\"]],null,1273],[1309,null,null,[1]]]],[95321963,[[1309,null,null,[1]]]]],null,75],[100,[[95322183,[[null,null,null,[null,null,null,[\"en\",\"de\",\"it\"]],null,1273],[1309,null,null,[1]]]],[95322195,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ko\"]],null,1273],[1309,null,null,[1]]]],[95322329,[[1309,null,null,[1]]]]],null,75],[10,[[95325421],[95325422,[[1321,null,null,[1]]]]]],[10,[[95325423],[95325424]]],[10,[[95325425],[95325426]]],[10,[[95325427],[95325428]]],[50,[[95325974],[95325975,[[1302,null,null,[1]]]],[95325976,[[1318,null,null,[1]]]]]],[100,[[95326315,[[null,null,null,[null,null,null,[\"95326318\"]],null,606178001]]],[95326316,[[597181299,null,null,[1]],[1120,null,null,[1]],[null,null,null,[null,null,null,[\"95326319\"]],null,606178001]]],[95326317,[[1120,null,null,[1]],[null,null,null,[null,null,null,[\"95326320\"]],null,606178001]]]],[4,null,55]],[10,[[95327076],[95327077]]],[10,[[95328335,null,[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,111,null,null,null,null,null,null,null,null,20],[10,[[95328336,[[1320,null,null,[1]]],[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,111,null,null,null,500,null,null,null,null,20],[10,[[95328337],[95328338]]],[1,[[95328463],[95328464],[95328465],[95328466],[95328467],[95328468]]],[10,[[95329016],[95329017,[[1327,null,null,[1]]]]]],[50,[[95329024],[95329025,[[1271,null,null,[1]]]]]]]],[17,[[10,[[31081480],[31081481,[[45618987,null,null,[1]]]]],null,null,null,null,null,500,null,149],[50,[[31081791],[31081792,[[595827158,null,null,[]]]]],null,null,null,null,null,50,null,149],[10,[[31082249],[31082250]],null,null,null,null,32,null,null,142,1],[50,[[95321865,[[null,null,null,[null,null,null,[\"95321869\"]],null,606178002]]],[95321866,[[566279275,null,null,[1]],[null,null,null,[null,null,null,[\"95321870\"]],null,606178002]]],[95321867,[[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95321871\"]],null,606178002]]],[95321868,[[566279275,null,null,[1]],[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95321872\"]],null,606178002]]]],[4,null,55],null,null,null,null,null,null,145],[500,[[95328825,[[null,null,null,[null,null,null,[\"95328827\"]],null,606178003]]],[95328826,[[null,595645509,null,[null,0.2]],[null,null,null,[null,null,null,[\"95328828\"]],null,606178003]]]],[4,null,55],null,null,null,null,null,null,140]]],[11,[[50,[[31081717],[31081718,[[45621722,null,null,[1]]]]]],[10,[[31081872],[31081873,[[45622216,null,null,[1]]]]]],[10,[[31082143,null,[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,113,null,null,null,null,null,null,null,null,21],[10,[[31082144,[[1325,null,null,[1]]],[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,113,null,null,null,500,null,null,null,null,21]]]],null,null,[null,1000,1,1000]],null,null,\"31082175\",null,null,1130053906,[44759876,44759927,44759837]]");
