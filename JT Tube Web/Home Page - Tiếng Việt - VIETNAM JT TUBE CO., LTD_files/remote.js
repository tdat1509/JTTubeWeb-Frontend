(function(g) {
    var window = this;
    'use strict';
    var c7 = function(a) {
        g.Ck(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.$a()).toString(36));
        return a
    }
      , d7 = function(a, b, c) {
        Array.isArray(c) || (c = [String(c)]);
        g.Nga(a.D, b, c)
    }
      , Ipb = function(a) {
        if (a instanceof g.nn)
            return a;
        if (typeof a.Bm == "function")
            return a.Bm(!1);
        if (g.Ta(a)) {
            var b = 0
              , c = new g.nn;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return g.n1;
                    if (b in a)
                        return g.on(a[b++]);
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
      , Jpb = function(a, b, c) {
        if (g.Ta(a))
            g.Mb(a, b, c);
        else
            for (a = Ipb(a); ; ) {
                var d = a.next();
                if (d.done)
                    break;
                b.call(c, d.value, void 0, a)
            }
    }
      , Kpb = function(a, b) {
        var c = [];
        Jpb(b, function(d) {
            try {
                var e = g.Sp.prototype.B.call(this, d, !0)
            } catch (f) {
                if (f == "Storage: Invalid value was encountered")
                    return;
                throw f;
            }
            e === void 0 ? c.push(d) : g.Hla(e) && c.push(d)
        }, a);
        return c
    }
      , Lpb = function(a, b) {
        Kpb(a, b).forEach(function(c) {
            g.Sp.prototype.remove.call(this, c)
        }, a)
    }
      , Mpb = function(a) {
        if (a.qa) {
            if (a.qa.locationOverrideToken)
                return {
                    locationOverrideToken: a.qa.locationOverrideToken
                };
            if (a.qa.latitudeE7 != null && a.qa.longitudeE7 != null)
                return {
                    latitudeE7: a.qa.latitudeE7,
                    longitudeE7: a.qa.longitudeE7
                }
        }
        return null
    }
      , Npb = function(a, b) {
        g.sb(a, b) || a.push(b)
    }
      , Opb = function(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
      , Ppb = function(a, b) {
        return g.Ec(a, b)
    }
      , Qpb = function(a) {
        try {
            return g.Na.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , e7 = function(a) {
        if (g.Na.JSON)
            try {
                return g.Na.JSON.parse(a)
            } catch (b) {}
        return Qpb(a)
    }
      , Rpb = function(a) {
        if (a.Rm && typeof a.Rm == "function")
            return a.Rm();
        if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set)
            return Array.from(a.values());
        if (typeof a === "string")
            return a.split("");
        if (g.Ta(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return g.Bc(a)
    }
      , Spb = function(a) {
        if (a.po && typeof a.po == "function")
            return a.po();
        if (!a.Rm || typeof a.Rm != "function") {
            if (typeof Map !== "undefined" && a instanceof Map)
                return Array.from(a.keys());
            if (!(typeof Set !== "undefined" && a instanceof Set)) {
                if (g.Ta(a) || typeof a === "string") {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++)
                        b.push(c);
                    return b
                }
                return g.Cc(a)
            }
        }
    }
      , Tpb = function(a, b) {
        if (a.forEach && typeof a.forEach == "function")
            a.forEach(b, void 0);
        else if (g.Ta(a) || typeof a === "string")
            Array.prototype.forEach.call(a, b, void 0);
        else
            for (var c = Spb(a), d = Rpb(a), e = d.length, f = 0; f < e; f++)
                b.call(void 0, d[f], c && c[f], a)
    }
      , Upb = function(a, b, c, d) {
        var e = new g.pk(null);
        a && g.qk(e, a);
        b && g.rk(e, b);
        c && g.sk(e, c);
        d && (e.B = d);
        return e
    }
      , Vpb = function() {
        this.j = f7();
        this.j.xk("/client_streamz/youtube/living_room/mdx/channel/opened", {
            Ad: 3,
            zd: "channel_type"
        })
    }
      , Wpb = function(a, b) {
        a.j.tm("/client_streamz/youtube/living_room/mdx/channel/opened", b)
    }
      , Xpb = function() {
        this.j = f7();
        this.j.xk("/client_streamz/youtube/living_room/mdx/channel/closed", {
            Ad: 3,
            zd: "channel_type"
        })
    }
      , Ypb = function(a, b) {
        a.j.tm("/client_streamz/youtube/living_room/mdx/channel/closed", b)
    }
      , Zpb = function() {
        this.j = f7();
        this.j.xk("/client_streamz/youtube/living_room/mdx/channel/message_received", {
            Ad: 3,
            zd: "channel_type"
        })
    }
      , $pb = function(a, b) {
        a.j.tm("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
    }
      , aqb = function() {
        this.j = f7();
        this.j.xk("/client_streamz/youtube/living_room/mdx/channel/error", {
            Ad: 3,
            zd: "channel_type"
        })
    }
      , bqb = function(a, b) {
        a.j.tm("/client_streamz/youtube/living_room/mdx/channel/error", b)
    }
      , cqb = function() {
        this.j = f7();
        this.j.xk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    }
      , dqb = function() {
        this.j = f7();
        this.j.xk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    }
      , eqb = function(a, b) {
        return new g.rp(a,b)
    }
      , g7 = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , h7 = function(a, b) {
        this.B = {};
        this.j = [];
        this.cw = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof h7)
                for (c = a.po(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
      , i7 = function(a) {
        if (a.size != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length; ) {
                var d = a.j[b];
                g7(a.B, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.size != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length; )
                d = a.j[b],
                g7(e, d) || (a.j[c++] = d,
                e[d] = 1),
                b++;
            a.j.length = c
        }
    }
      , iqb = function(a) {
        this.name = this.id = "";
        this.clientName = "UNKNOWN_INTERFACE";
        this.app = "";
        this.type = "REMOTE_CONTROL";
        this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
        this.capabilities = new Set;
        this.compatibleSenderThemes = new Set;
        this.experiments = new Set;
        this.theme = "u";
        new h7;
        this.model = this.brand = "";
        this.year = 0;
        this.chipset = this.osVersion = this.os = "";
        this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
        this.app = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.username = a.user || "",
        this.avatar = a.userAvatarUri || "",
        this.obfuscatedGaiaId = a.obfuscatedGaiaId || "",
        this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "",
        this.theme = a.theme || "u",
        fqb(this, a.capabilities || ""),
        gqb(this, a.compatibleSenderThemes || ""),
        hqb(this, a.experiments || ""),
        this.brand = a.brand || "",
        this.model = a.model || "",
        this.year = a.year || 0,
        this.os = a.os || "",
        this.osVersion = a.osVersion || "",
        this.chipset = a.chipset || "",
        this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN",
        a = a.deviceInfo) && (a = JSON.parse(a),
        this.brand = a.brand || "",
        this.model = a.model || "",
        this.year = a.year || 0,
        this.os = a.os || "",
        this.osVersion = a.osVersion || "",
        this.chipset = a.chipset || "",
        this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
        this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
    }
      , fqb = function(a, b) {
        a.capabilities.clear();
        g.sn(b.split(","), g.Za(Ppb, jqb)).forEach(function(c) {
            a.capabilities.add(c)
        })
    }
      , gqb = function(a, b) {
        a.compatibleSenderThemes.clear();
        g.sn(b.split(","), g.Za(Ppb, kqb)).forEach(function(c) {
            a.compatibleSenderThemes.add(c)
        })
    }
      , hqb = function(a, b) {
        a.experiments.clear();
        b.split(",").forEach(function(c) {
            a.experiments.add(c)
        })
    }
      , j7 = function(a) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.uuid = a.uuid || a.dialId || "";
        this.idType = a.screenIdType || "normal"
    }
      , k7 = function(a, b) {
        return !!b && (a.id == b || a.uuid == b)
    }
      , lqb = function(a) {
        return {
            name: a.name,
            screenId: a.id,
            loungeToken: a.token,
            dialId: a.uuid,
            screenIdType: a.idType
        }
    }
      , mqb = function(a) {
        return new j7(a)
    }
      , nqb = function(a) {
        return Array.isArray(a) ? g.Il(a, mqb) : []
    }
      , l7 = function(a) {
        return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
    }
      , oqb = function(a) {
        return Array.isArray(a) ? "[" + g.Il(a, l7).join(",") + "]" : "null"
    }
      , pqb = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            return (a == "x" ? b : b & 3 | 8).toString(16)
        })
    }
      , qqb = function(a) {
        return g.Il(a, function(b) {
            return {
                key: b.id,
                name: b.name
            }
        })
    }
      , rqb = function(a, b) {
        return g.qb(a, function(c) {
            return c || b ? !c != !b ? !1 : c.id == b.id : !0
        })
    }
      , m7 = function(a, b) {
        return g.qb(a, function(c) {
            return k7(c, b)
        })
    }
      , sqb = function() {
        var a = (0,
        g.kt)();
        a && Lpb(a, a.j.Bm(!0))
    }
      , n7 = function() {
        var a = g.nt("yt-remote-connected-devices") || [];
        g.Jb(a);
        return a
    }
      , tqb = function(a) {
        if (a.length == 0)
            return [];
        var b = a[0].indexOf("#")
          , c = b == -1 ? a[0] : a[0].substring(0, b);
        return g.Il(a, function(d, e) {
            return e == 0 ? d : d.substring(c.length)
        })
    }
      , uqb = function(a) {
        g.mt("yt-remote-connected-devices", a, 86400)
    }
      , o7 = function() {
        if (vqb)
            return vqb;
        var a = g.nt("yt-remote-device-id");
        a || (a = pqb(),
        g.mt("yt-remote-device-id", a, 31536E3));
        for (var b = n7(), c = 1, d = a; g.sb(b, d); )
            c++,
            d = a + "#" + c;
        return vqb = d
    }
      , wqb = function() {
        var a = n7()
          , b = o7();
        g.pt() && g.Lb(a, b);
        a = tqb(a);
        if (a.length == 0)
            try {
                g.ps("remote_sid")
            } catch (c) {}
        else
            try {
                g.ns("remote_sid", a.join(","), -1)
            } catch (c) {}
    }
      , xqb = function() {
        return g.nt("yt-remote-session-browser-channel")
    }
      , yqb = function() {
        return g.nt("yt-remote-local-screens") || []
    }
      , zqb = function() {
        g.mt("yt-remote-lounge-token-expiration", !0, 86400)
    }
      , Aqb = function(a) {
        a.length > 5 && (a = a.slice(a.length - 5));
        var b = g.Il(yqb(), function(d) {
            return d.loungeToken
        })
          , c = g.Il(a, function(d) {
            return d.loungeToken
        });
        g.Jl(c, function(d) {
            return !g.sb(b, d)
        }) && zqb();
        g.mt("yt-remote-local-screens", a, 31536E3)
    }
      , p7 = function(a) {
        a || (g.ot("yt-remote-session-screen-id"),
        g.ot("yt-remote-session-video-id"));
        wqb();
        a = n7();
        g.ub(a, o7());
        uqb(a)
    }
      , Bqb = function() {
        if (!q7) {
            var a = g.Yp();
            a && (q7 = new g.Pp(a))
        }
    }
      , Cqb = function() {
        Bqb();
        return q7 ? !!q7.get("yt-remote-use-staging-server") : !1
    }
      , r7 = function(a, b) {
        g.Nv[a] = !0;
        var c = g.Lv();
        c && c.publish.apply(c, arguments);
        g.Nv[a] = !1
    }
      , Dqb = function() {}
      , f7 = function() {
        if (!s7) {
            s7 = new g.Ue(new Dqb);
            var a = g.$r("client_streamz_web_flush_count", -1);
            a !== -1 && (s7.C = a)
        }
        return s7
    }
      , Eqb = function() {
        var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
        return a ? parseInt(a[1], 10) : 0
    }
      , Fqb = function(a) {
        return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
    }
      , Gqb = function() {
        return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
    }
      , t7 = function(a) {
        a.length ? Hqb(a.shift(), function() {
            t7(a)
        }) : Iqb()
    }
      , Jqb = function(a) {
        return "chrome-extension://" + a + "/cast_sender.js"
    }
      , Hqb = function(a, b, c) {
        var d = document.createElement("script");
        d.onerror = b;
        c && (d.onload = c);
        g.Ud(d, g.Sq(a));
        (document.head || document.documentElement).appendChild(d)
    }
      , Kqb = function() {
        var a = Eqb()
          , b = [];
        if (a > 1) {
            var c = a - 1;
            b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
            b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
        }
        return b
    }
      , Iqb = function() {
        var a = Gqb();
        a && a(!1, "No cast extension found")
    }
      , Mqb = function() {
        if (Lqb) {
            var a = 2
              , b = Gqb()
              , c = function() {
                a--;
                a == 0 && b && b(!0)
            };
            window.__onGCastApiAvailable = c;
            Hqb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Iqb, c)
        }
    }
      , Nqb = function() {
        Mqb();
        var a = Kqb();
        a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
        t7(a)
    }
      , Pqb = function() {
        Mqb();
        var a = Kqb();
        a.push.apply(a, g.w(Oqb.map(Jqb)));
        a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
        t7(a)
    }
      , u7 = function(a, b, c) {
        g.P.call(this);
        this.K = c != null ? (0,
        g.Ya)(a, c) : a;
        this.ij = b;
        this.G = (0,
        g.Ya)(this.G5, this);
        this.j = !1;
        this.B = 0;
        this.C = this.wd = null;
        this.D = []
    }
      , v7 = function(a, b, c) {
        g.P.call(this);
        this.D = c != null ? a.bind(c) : a;
        this.ij = b;
        this.C = null;
        this.j = !1;
        this.B = 0;
        this.wd = null
    }
      , Qqb = function(a) {
        a.wd = g.Re(function() {
            a.wd = null;
            a.j && !a.B && (a.j = !1,
            Qqb(a))
        }, a.ij);
        var b = a.C;
        a.C = null;
        a.D.apply(null, b)
    }
      , w7 = function() {}
      , Rqb = function() {
        g.lb.call(this, "p")
    }
      , Sqb = function() {
        g.lb.call(this, "o")
    }
      , Uqb = function() {
        return Tqb = Tqb || new g.Zc
    }
      , Vqb = function(a) {
        g.lb.call(this, "serverreachability", a)
    }
      , x7 = function(a) {
        var b = Uqb();
        b.dispatchEvent(new Vqb(b,a))
    }
      , Wqb = function(a) {
        g.lb.call(this, "statevent", a)
    }
      , y7 = function(a) {
        var b = Uqb();
        b.dispatchEvent(new Wqb(b,a))
    }
      , Xqb = function(a, b, c, d) {
        g.lb.call(this, "timingevent", a);
        this.size = b;
        this.rtt = c;
        this.retries = d
    }
      , z7 = function(a, b) {
        if (typeof a !== "function")
            throw Error("Fn must not be null and must be a function");
        return g.Na.setTimeout(function() {
            a()
        }, b)
    }
      , A7 = function() {}
      , B7 = function(a, b, c, d) {
        this.C = a;
        this.D = b;
        this.Sb = c;
        this.Rb = d || 1;
        this.ub = new g.Hk(this);
        this.fb = 45E3;
        this.Na = null;
        this.K = !1;
        this.Y = this.bb = this.Z = this.Ra = this.Ca = this.rb = this.qa = null;
        this.ra = [];
        this.j = null;
        this.N = 0;
        this.G = this.Fa = null;
        this.Nb = -1;
        this.La = !1;
        this.Xa = 0;
        this.Wa = null;
        this.Jb = this.Va = this.Ab = this.Ia = !1;
        this.B = new Yqb
    }
      , Yqb = function() {
        this.C = null;
        this.j = "";
        this.B = !1
    }
      , $qb = function(a, b, c) {
        a.Ra = 1;
        a.Z = c7(b.clone());
        a.Y = c;
        a.Ia = !0;
        Zqb(a, null)
    }
      , Zqb = function(a, b) {
        a.Ca = Date.now();
        C7(a);
        a.bb = a.Z.clone();
        d7(a.bb, "t", a.Rb);
        a.N = 0;
        var c = a.C.Ra;
        a.B = new Yqb;
        a.j = arb(a.C, c ? b : null, !a.Y);
        a.Xa > 0 && (a.Wa = new v7((0,
        g.Ya)(a.JV, a, a.j),a.Xa));
        a.ub.listen(a.j, "readystatechange", a.I5);
        b = a.Na ? g.Jc(a.Na) : {};
        a.Y ? (a.Fa || (a.Fa = "POST"),
        b["Content-Type"] = "application/x-www-form-urlencoded",
        a.j.send(a.bb, a.Fa, a.Y, b)) : (a.Fa = "GET",
        a.j.send(a.bb, a.Fa, null, b));
        x7(1)
    }
      , crb = function(a) {
        if (!brb(a))
            return g.jj(a.j);
        var b = g.kj(a.j);
        if (b === "")
            return "";
        var c = ""
          , d = b.length
          , e = g.hj(a.j) == 4;
        if (!a.B.C) {
            if (typeof TextDecoder === "undefined")
                return D7(a),
                E7(a),
                "";
            a.B.C = new g.Na.TextDecoder
        }
        for (var f = 0; f < d; f++)
            a.B.B = !0,
            c += a.B.C.decode(b[f], {
                stream: !(e && f == d - 1)
            });
        b.length = 0;
        a.B.j += c;
        a.N = 0;
        return a.B.j
    }
      , brb = function(a) {
        return a.j ? a.Fa == "GET" && a.Ra != 2 && a.C.cf : !1
    }
      , frb = function(a, b) {
        var c = a.N
          , d = b.indexOf("\n", c);
        if (d == -1)
            return drb;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return erb;
        d += 1;
        if (d + c > b.length)
            return drb;
        b = b.slice(d, d + c);
        a.N = d + c;
        return b
    }
      , C7 = function(a) {
        a.rb = Date.now() + a.fb;
        grb(a, a.fb)
    }
      , grb = function(a, b) {
        if (a.qa != null)
            throw Error("WatchDog timer not null");
        a.qa = z7((0,
        g.Ya)(a.H5, a), b)
    }
      , hrb = function(a) {
        a.qa && (g.Na.clearTimeout(a.qa),
        a.qa = null)
    }
      , E7 = function(a) {
        a.C.Sg() || a.La || irb(a.C, a)
    }
      , D7 = function(a) {
        hrb(a);
        g.gb(a.Wa);
        a.Wa = null;
        a.ub.removeAll();
        if (a.j) {
            var b = a.j;
            a.j = null;
            b.abort();
            b.dispose()
        }
    }
      , qrb = function(a, b) {
        try {
            var c = a.C;
            if (c.Yh != 0 && (c.j == a || jrb(c.B, a)))
                if (!a.Va && jrb(c.B, a) && c.Yh == 3) {
                    try {
                        var d = c.nf.j.parse(b)
                    } catch (x) {
                        d = null
                    }
                    if (Array.isArray(d) && d.length == 3) {
                        var e = d;
                        if (e[0] == 0)
                            a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ca + 3E3 < a.Ca)
                                            F7(c),
                                            G7(c);
                                        else
                                            break a;
                                    krb(c);
                                    y7(18)
                                }
                            }
                        else
                            c.Jd = e[1],
                            0 < c.Jd - c.Wa && e[2] < 37500 && c.Va && c.ra == 0 && !c.qa && (c.qa = z7((0,
                            g.Ya)(c.J5, c), 6E3));
                        if (lrb(c.B) <= 1 && c.Oc) {
                            try {
                                c.Oc()
                            } catch (x) {}
                            c.Oc = void 0
                        }
                    } else
                        H7(c, 11)
                } else if ((a.Va || c.j == a) && F7(c),
                !g.Qb(b))
                    for (e = c.nf.j.parse(b),
                    b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Wa = f[0];
                        f = f[1];
                        if (c.Yh == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Rb = f[2];
                                var h = f[3];
                                h != null && (c.KV = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.Xa = 1.5 * l);
                                d = c;
                                var m = a.OQ();
                                if (m) {
                                    var n = g.lj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.Ub(n, "spdy") || g.Ub(n, "quic") || g.Ub(n, "h2")) && (p.D = p.G,
                                        p.j = new Set,
                                        p.B && (mrb(p, p.B),
                                        p.B = null))
                                    }
                                    if (d.Ia) {
                                        var q = g.lj(m, "X-HTTP-Session-Id");
                                        q && (d.mf = q,
                                        g.Ck(d.Na, d.Ia, q))
                                    }
                                }
                                c.Yh = 3;
                                c.G && c.G.QV();
                                c.zc && (c.Vc = Date.now() - a.Ca);
                                d = c;
                                var r = a;
                                d.Gd = nrb(d, d.Ra ? d.Rb : null, d.Sb);
                                if (r.Va) {
                                    orb(d.B, r);
                                    var t = r
                                      , u = d.Xa;
                                    u && t.setTimeout(u);
                                    t.qa && (hrb(t),
                                    C7(t));
                                    d.j = r
                                } else
                                    prb(d);
                                c.C.length > 0 && I7(c)
                            } else
                                f[0] != "stop" && f[0] != "close" || H7(c, 7);
                        else
                            c.Yh == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? H7(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.PV(f),
                            c.ra = 0)
                    }
            x7(4)
        } catch (x) {}
    }
      , rrb = function(a, b) {
        this.j = a;
        this.map = b;
        this.context = null
    }
      , srb = function(a) {
        this.G = a || 10;
        g.Na.PerformanceNavigationTiming ? (a = g.Na.performance.getEntriesByType("navigation"),
        a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.Na.chrome && g.Na.chrome.loadTimes && g.Na.chrome.loadTimes() && g.Na.chrome.loadTimes().wasFetchedViaSpdy);
        this.D = a ? this.G : 1;
        this.j = null;
        this.D > 1 && (this.j = new Set);
        this.B = null;
        this.C = []
    }
      , trb = function(a) {
        return a.B ? !0 : a.j ? a.j.size >= a.D : !1
    }
      , lrb = function(a) {
        return a.B ? 1 : a.j ? a.j.size : 0
    }
      , jrb = function(a, b) {
        return a.B ? a.B == b : a.j ? a.j.has(b) : !1
    }
      , mrb = function(a, b) {
        a.j ? a.j.add(b) : a.B = b
    }
      , orb = function(a, b) {
        a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
    }
      , urb = function(a) {
        if (a.B != null)
            return a.C.concat(a.B.ra);
        if (a.j != null && a.j.size !== 0) {
            var b = a.C;
            a = g.v(a.j.values());
            for (var c = a.next(); !c.done; c = a.next())
                b = b.concat(c.value.ra);
            return b
        }
        return g.Ab(a.C)
    }
      , vrb = function(a, b) {
        var c = new A7;
        if (g.Na.Image) {
            var d = new Image;
            d.onload = g.Za(J7, c, "TestLoadImage: loaded", !0, b, d);
            d.onerror = g.Za(J7, c, "TestLoadImage: error", !1, b, d);
            d.onabort = g.Za(J7, c, "TestLoadImage: abort", !1, b, d);
            d.ontimeout = g.Za(J7, c, "TestLoadImage: timeout", !1, b, d);
            g.Na.setTimeout(function() {
                if (d.ontimeout)
                    d.ontimeout()
            }, 1E4);
            d.src = a
        } else
            b(!1)
    }
      , wrb = function(a, b) {
        var c = new A7
          , d = new AbortController
          , e = setTimeout(function() {
            d.abort();
            J7(c, "TestPingServer: timeout", !1, b)
        }, 1E4);
        fetch(a, {
            signal: d.signal
        }).then(function(f) {
            clearTimeout(e);
            f.ok ? J7(c, "TestPingServer: ok", !0, b) : J7(c, "TestPingServer: server error", !1, b)
        }).catch(function() {
            clearTimeout(e);
            J7(c, "TestPingServer: error", !1, b)
        })
    }
      , J7 = function(a, b, c, d, e) {
        try {
            e && (e.onload = null,
            e.onerror = null,
            e.onabort = null,
            e.ontimeout = null),
            d(c)
        } catch (f) {}
    }
      , xrb = function() {
        this.j = new w7
    }
      , yrb = function(a, b, c) {
        var d = c || "";
        try {
            Tpb(a, function(e, f) {
                var h = e;
                g.Va(e) && (h = g.Ni(e));
                b.push(d + f + "=" + encodeURIComponent(h))
            })
        } catch (e) {
            throw b.push(d + "type=" + encodeURIComponent("_badmap")),
            e;
        }
    }
      , K7 = function(a, b, c) {
        return c && c.K$ ? c.K$[a] || b : b
    }
      , zrb = function(a) {
        this.C = [];
        this.Rb = this.Gd = this.Na = this.Sb = this.j = this.mf = this.Ia = this.La = this.N = this.Nb = this.Y = null;
        this.Xf = this.bb = 0;
        this.Vf = K7("failFast", !1, a);
        this.Va = this.qa = this.Z = this.K = this.G = null;
        this.uc = !0;
        this.Jd = this.Wa = -1;
        this.Jb = this.ra = this.Ca = 0;
        this.Uf = K7("baseRetryDelayMs", 5E3, a);
        this.Gh = K7("retryDelaySeedMs", 1E4, a);
        this.Wf = K7("forwardChannelMaxRetries", 2, a);
        this.oe = K7("forwardChannelRequestTimeoutMs", 2E4, a);
        this.je = a && a.Eqa || void 0;
        this.Zf = a && a.upa || void 0;
        this.cf = a && a.Cqa || !1;
        this.Xa = void 0;
        this.Ra = a && a.lfa || !1;
        this.D = "";
        this.B = new srb(a && a.Ana);
        this.nf = new xrb;
        this.ub = a && a.Rna || !1;
        this.rb = a && a.Gna || !1;
        this.ub && this.rb && (this.rb = !1);
        this.Yf = a && a.qna || !1;
        a && a.Tna && (this.uc = !1);
        this.zc = !this.ub && this.uc && a && a.Ena || !1;
        this.yd = void 0;
        a && a.b0 && a.b0 > 0 && (this.yd = a.b0);
        this.Oc = void 0;
        this.Vc = 0;
        this.fb = !1;
        this.Ab = this.Fa = null
    }
      , G7 = function(a) {
        a.j && (Arb(a),
        a.j.cancel(),
        a.j = null)
    }
      , Brb = function(a) {
        G7(a);
        a.Z && (g.Na.clearTimeout(a.Z),
        a.Z = null);
        F7(a);
        a.B.cancel();
        a.K && (typeof a.K === "number" && g.Na.clearTimeout(a.K),
        a.K = null)
    }
      , I7 = function(a) {
        trb(a.B) || a.K || (a.K = !0,
        g.He(a.MV, a),
        a.Ca = 0)
    }
      , Drb = function(a, b) {
        if (lrb(a.B) >= a.B.D - (a.K ? 1 : 0))
            return !1;
        if (a.K)
            return a.C = b.ra.concat(a.C),
            !0;
        if (a.Yh == 1 || a.Yh == 2 || a.Ca >= (a.Vf ? 0 : a.Wf))
            return !1;
        a.K = z7((0,
        g.Ya)(a.MV, a, b), Crb(a, a.Ca));
        a.Ca++;
        return !0
    }
      , Frb = function(a, b) {
        var c;
        b ? c = b.Sb : c = a.bb++;
        var d = a.Na.clone();
        g.Ck(d, "SID", a.D);
        g.Ck(d, "RID", c);
        g.Ck(d, "AID", a.Wa);
        L7(a, d);
        a.N && a.Y && g.Gk(d, a.N, a.Y);
        c = new B7(a,a.D,c,a.Ca + 1);
        a.N === null && (c.Na = a.Y);
        b && (a.C = b.ra.concat(a.C));
        b = Erb(a, c, 1E3);
        c.setTimeout(Math.round(a.oe * .5) + Math.round(a.oe * .5 * Math.random()));
        mrb(a.B, c);
        $qb(c, d, b)
    }
      , L7 = function(a, b) {
        a.La && g.wc(a.La, function(c, d) {
            g.Ck(b, d, c)
        });
        a.G && Tpb({}, function(c, d) {
            g.Ck(b, d, c)
        })
    }
      , Erb = function(a, b, c) {
        c = Math.min(a.C.length, c);
        var d = a.G ? (0,
        g.Ya)(a.G.K5, a.G, a) : null;
        a: {
            for (var e = a.C, f = -1; ; ) {
                var h = ["count=" + c];
                f == -1 ? c > 0 ? (f = e[0].j,
                h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j
                      , p = e[m].map;
                    n -= f;
                    if (n < 0)
                        f = Math.max(0, e[m].j - 100),
                        l = !1;
                    else
                        try {
                            yrb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            d = void 0
        }
        a = a.C.splice(0, c);
        b.ra = a;
        return d
    }
      , prb = function(a) {
        a.j || a.Z || (a.Jb = 1,
        g.He(a.LV, a),
        a.ra = 0)
    }
      , krb = function(a) {
        if (a.j || a.Z || a.ra >= 3)
            return !1;
        a.Jb++;
        a.Z = z7((0,
        g.Ya)(a.LV, a), Crb(a, a.ra));
        a.ra++;
        return !0
    }
      , Arb = function(a) {
        a.Fa != null && (g.Na.clearTimeout(a.Fa),
        a.Fa = null)
    }
      , Grb = function(a) {
        a.j = new B7(a,a.D,"rpc",a.Jb);
        a.N === null && (a.j.Na = a.Y);
        a.j.Xa = 0;
        var b = a.Gd.clone();
        g.Ck(b, "RID", "rpc");
        g.Ck(b, "SID", a.D);
        g.Ck(b, "AID", a.Wa);
        g.Ck(b, "CI", a.Va ? "0" : "1");
        !a.Va && a.yd && g.Ck(b, "TO", a.yd);
        g.Ck(b, "TYPE", "xmlhttp");
        L7(a, b);
        a.N && a.Y && g.Gk(b, a.N, a.Y);
        a.Xa && a.j.setTimeout(a.Xa);
        var c = a.j;
        a = a.Rb;
        c.Ra = 1;
        c.Z = c7(b.clone());
        c.Y = null;
        c.Ia = !0;
        Zqb(c, a)
    }
      , F7 = function(a) {
        a.qa != null && (g.Na.clearTimeout(a.qa),
        a.qa = null)
    }
      , irb = function(a, b) {
        var c = null;
        if (a.j == b) {
            F7(a);
            Arb(a);
            a.j = null;
            var d = 2
        } else if (jrb(a.B, b))
            c = b.ra,
            orb(a.B, b),
            d = 1;
        else
            return;
        if (a.Yh != 0)
            if (b.K)
                if (d == 1) {
                    c = b.Y ? b.Y.length : 0;
                    b = Date.now() - b.Ca;
                    var e = a.Ca;
                    d = Uqb();
                    d.dispatchEvent(new Xqb(d,c,b,e));
                    I7(a)
                } else
                    prb(a);
            else {
                var f = b.Nb;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && Drb(a, b) || d == 2 && krb(a)))
                    switch (c && c.length > 0 && (b = a.B,
                    b.C = b.C.concat(c)),
                    e) {
                    case 1:
                        H7(a, 5);
                        break;
                    case 4:
                        H7(a, 10);
                        break;
                    case 3:
                        H7(a, 6);
                        break;
                    default:
                        H7(a, 2)
                    }
            }
    }
      , Crb = function(a, b) {
        var c = a.Uf + Math.floor(Math.random() * a.Gh);
        a.isActive() || (c *= 2);
        return c * b
    }
      , H7 = function(a, b) {
        if (b == 2) {
            var c = (0,
            g.Ya)(a.sfa, a)
              , d = a.Zf
              , e = !d;
            d = new g.pk(d || "//www.google.com/images/cleardot.gif");
            g.Na.location && g.Na.location.protocol == "http" || g.qk(d, "https");
            c7(d);
            e ? vrb(d.toString(), c) : wrb(d.toString(), c)
        } else
            y7(2);
        a.Yh = 0;
        a.G && a.G.OV(b);
        Hrb(a);
        Brb(a)
    }
      , Hrb = function(a) {
        a.Yh = 0;
        a.Ab = [];
        if (a.G) {
            var b = urb(a.B);
            if (b.length != 0 || a.C.length != 0)
                g.Bb(a.Ab, b),
                g.Bb(a.Ab, a.C),
                a.B.C.length = 0,
                g.Ab(a.C),
                a.C.length = 0;
            a.G.NV()
        }
    }
      , Irb = function(a) {
        if (a.Yh == 0)
            return a.Ab;
        var b = [];
        g.Bb(b, urb(a.B));
        g.Bb(b, a.C);
        return b
    }
      , nrb = function(a, b, c) {
        var d = g.Dk(c);
        d.j != "" ? (b && g.rk(d, b + "." + d.j),
        g.sk(d, d.C)) : (d = g.Na.location,
        d = Upb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
        b = a.Ia;
        c = a.mf;
        b && c && g.Ck(d, b, c);
        g.Ck(d, "VER", a.KV);
        L7(a, d);
        return d
    }
      , arb = function(a, b, c) {
        if (b && !a.Ra)
            throw Error("Can't create secondary domain capable XhrIo object.");
        b = a.cf && !a.je ? new g.ej(new g.lk({
            w3: c
        })) : new g.ej(a.je);
        b.K = a.Ra;
        return b
    }
      , Jrb = function() {}
      , Krb = function() {}
      , N7 = function(a, b) {
        g.Zc.call(this);
        this.j = new zrb(b);
        this.G = a;
        this.B = b && b.Baa || null;
        a = b && b.Aaa || null;
        b && b.yna && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
            "X-Client-Protocol": "webchannel"
        });
        this.j.Y = a;
        a = b && b.Xoa || null;
        b && b.q0 && (a ? a["X-WebChannel-Content-Type"] = b.q0 : a = {
            "X-WebChannel-Content-Type": b.q0
        });
        b && b.fY && (a ? a["X-WebChannel-Client-Profile"] = b.fY : a = {
            "X-WebChannel-Client-Profile": b.fY
        });
        this.j.Nb = a;
        (a = b && b.Woa) && !g.Qb(a) && (this.j.N = a);
        this.K = b && b.lfa || !1;
        this.D = b && b.Xpa || !1;
        (b = b && b.H$) && !g.Qb(b) && (this.j.Ia = b,
        g.Dc(this.B, b) && (a = this.B,
        b in a && delete a[b]));
        this.C = new M7(this)
    }
      , Lrb = function(a) {
        Rqb.call(this);
        a.__headers__ && (this.headers = a.__headers__,
        this.statusCode = a.__status__,
        delete a.__headers__,
        delete a.__status__);
        var b = a.__sm__;
        b ? this.data = (this.j = g.Ac(b)) ? g.Hc(b, this.j) : b : this.data = a
    }
      , Mrb = function(a) {
        Sqb.call(this);
        this.status = 1;
        this.errorCode = a
    }
      , M7 = function(a) {
        this.j = a
    }
      , Nrb = function(a, b) {
        this.B = a;
        this.j = b
    }
      , Orb = function(a) {
        return Irb(a.j).map(function(b) {
            var c = a.B;
            b = b.map;
            "__data__"in b ? (b = b.__data__,
            c = c.D ? Qpb(b) : b) : c = b;
            return c
        })
    }
      , O7 = function(a, b) {
        if (typeof a !== "function")
            throw Error("Fn must not be null and must be a function");
        return g.Na.setTimeout(function() {
            a()
        }, b)
    }
      , Q7 = function(a) {
        P7.dispatchEvent(new Prb(P7,a))
    }
      , Prb = function(a) {
        g.lb.call(this, "statevent", a)
    }
      , R7 = function(a, b, c, d) {
        this.j = a;
        this.D = b;
        this.N = c;
        this.K = d || 1;
        this.B = 45E3;
        this.C = new g.Hk(this);
        this.G = new g.Qe;
        this.G.setInterval(250)
    }
      , Rrb = function(a, b, c) {
        a.fJ = 1;
        a.MD = c7(b.clone());
        a.zw = c;
        a.Ia = !0;
        Qrb(a, null)
    }
      , Srb = function(a, b, c, d, e) {
        a.fJ = 1;
        a.MD = c7(b.clone());
        a.zw = null;
        a.Ia = c;
        e && (a.O2 = !1);
        Qrb(a, d)
    }
      , Qrb = function(a, b) {
        a.PD = Date.now();
        Trb(a);
        a.eJ = a.MD.clone();
        d7(a.eJ, "t", a.K);
        a.hJ = 0;
        a.Aj = a.j.SN(a.j.QD() ? b : null);
        a.QN > 0 && (a.dJ = new v7((0,
        g.Ya)(a.RV, a, a.Aj),a.QN));
        a.C.listen(a.Aj, "readystatechange", a.M5);
        b = a.xw ? g.Jc(a.xw) : {};
        a.zw ? (a.gJ = "POST",
        b["Content-Type"] = "application/x-www-form-urlencoded",
        a.Aj.send(a.eJ, a.gJ, a.zw, b)) : (a.gJ = "GET",
        a.O2 && !g.rc && (b.Connection = "close"),
        a.Aj.send(a.eJ, a.gJ, null, b));
        a.j.Js(1)
    }
      , Wrb = function(a, b) {
        var c = a.hJ
          , d = b.indexOf("\n", c);
        if (d == -1)
            return Urb;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return Vrb;
        d += 1;
        if (d + c > b.length)
            return Urb;
        b = b.slice(d, d + c);
        a.hJ = d + c;
        return b
    }
      , Trb = function(a) {
        a.RN = Date.now() + a.B;
        Xrb(a, a.B)
    }
      , Xrb = function(a, b) {
        if (a.Jz != null)
            throw Error("WatchDog timer not null");
        a.Jz = O7((0,
        g.Ya)(a.L5, a), b)
    }
      , Yrb = function(a) {
        a.Jz && (g.Na.clearTimeout(a.Jz),
        a.Jz = null)
    }
      , Zrb = function(a) {
        a.j.Sg() || a.ND || a.j.UN(a)
    }
      , S7 = function(a) {
        Yrb(a);
        g.gb(a.dJ);
        a.dJ = null;
        a.G.stop();
        a.C.removeAll();
        if (a.Aj) {
            var b = a.Aj;
            a.Aj = null;
            b.abort();
            b.dispose()
        }
        a.P3 && (a.P3 = null)
    }
      , $rb = function(a, b) {
        try {
            a.j.SV(a, b),
            a.j.Js(4)
        } catch (c) {}
    }
      , bsb = function(a, b, c, d, e) {
        if (d == 0)
            c(!1);
        else {
            var f = e || 0;
            d--;
            asb(a, b, function(h) {
                h ? c(!0) : g.Na.setTimeout(function() {
                    bsb(a, b, c, d, f)
                }, f)
            })
        }
    }
      , asb = function(a, b, c) {
        var d = new Image;
        d.onload = function() {
            try {
                T7(d),
                c(!0)
            } catch (e) {}
        }
        ;
        d.onerror = function() {
            try {
                T7(d),
                c(!1)
            } catch (e) {}
        }
        ;
        d.onabort = function() {
            try {
                T7(d),
                c(!1)
            } catch (e) {}
        }
        ;
        d.ontimeout = function() {
            try {
                T7(d),
                c(!1)
            } catch (e) {}
        }
        ;
        g.Na.setTimeout(function() {
            if (d.ontimeout)
                d.ontimeout()
        }, b);
        d.src = a
    }
      , T7 = function(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    }
      , csb = function(a) {
        this.j = a;
        this.B = new w7
    }
      , dsb = function(a) {
        var b = U7(a.j, a.JE, "/mail/images/cleardot.gif");
        c7(b);
        bsb(b.toString(), 5E3, (0,
        g.Ya)(a.c8, a), 3, 2E3);
        a.Js(1)
    }
      , esb = function(a) {
        var b = a.j.K;
        b != null ? (Q7(5),
        b ? (Q7(11),
        V7(a.j, a, !1)) : (Q7(12),
        V7(a.j, a, !0))) : (a.zl = new R7(a),
        a.zl.xw = a.TN,
        b = a.j,
        b = U7(b, b.QD() ? a.iJ : null, a.VN),
        Q7(5),
        d7(b, "TYPE", "xmlhttp"),
        Srb(a.zl, b, !1, a.iJ, !1))
    }
      , fsb = function(a, b, c) {
        this.j = 1;
        this.B = [];
        this.C = [];
        this.G = new w7;
        this.Y = a || null;
        this.K = b != null ? b : null;
        this.Z = c || !1
    }
      , gsb = function(a, b) {
        this.j = a;
        this.map = b;
        this.context = null
    }
      , hsb = function(a, b, c, d) {
        g.lb.call(this, "timingevent", a);
        this.size = b;
        this.rtt = c;
        this.retries = d
    }
      , isb = function(a) {
        g.lb.call(this, "serverreachability", a)
    }
      , ksb = function(a) {
        a.N5(1, 0);
        a.jJ = U7(a, null, a.XN);
        jsb(a)
    }
      , lsb = function(a) {
        a.Xt && (a.Xt.abort(),
        a.Xt = null);
        a.eh && (a.eh.cancel(),
        a.eh = null);
        a.Ar && (g.Na.clearTimeout(a.Ar),
        a.Ar = null);
        W7(a);
        a.Hk && (a.Hk.cancel(),
        a.Hk = null);
        a.Ht && (g.Na.clearTimeout(a.Ht),
        a.Ht = null)
    }
      , msb = function(a, b) {
        if (a.j == 0)
            throw Error("Invalid operation: sending map when state is closed");
        a.B.push(new gsb(a.O5++,b));
        a.j != 2 && a.j != 3 || jsb(a)
    }
      , nsb = function(a) {
        var b = 0;
        a.eh && b++;
        a.Hk && b++;
        return b
    }
      , jsb = function(a) {
        a.Hk || a.Ht || (a.Ht = O7((0,
        g.Ya)(a.WV, a), 0),
        a.Lz = 0)
    }
      , qsb = function(a, b) {
        if (a.j == 1) {
            if (!b) {
                a.SD = Math.floor(Math.random() * 1E5);
                b = a.SD++;
                var c = new R7(a,"",b);
                c.xw = a.Fp;
                var d = osb(a)
                  , e = a.jJ.clone();
                g.Ck(e, "RID", b);
                g.Ck(e, "CVER", "1");
                X7(a, e);
                Rrb(c, e, d);
                a.Hk = c;
                a.j = 2
            }
        } else
            a.j == 3 && (b ? psb(a, b) : a.B.length == 0 || a.Hk || psb(a))
    }
      , psb = function(a, b) {
        if (b)
            if (a.Aw > 6) {
                a.B = a.C.concat(a.B);
                a.C.length = 0;
                var c = a.SD - 1;
                b = osb(a)
            } else
                c = b.N,
                b = b.zw;
        else
            c = a.SD++,
            b = osb(a);
        var d = a.jJ.clone();
        g.Ck(d, "SID", a.D);
        g.Ck(d, "RID", c);
        g.Ck(d, "AID", a.Mz);
        X7(a, d);
        c = new R7(a,a.D,c,a.Lz + 1);
        c.xw = a.Fp;
        c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
        a.Hk = c;
        Rrb(c, d, b)
    }
      , X7 = function(a, b) {
        a.Zi && (a = a.Zi.aW()) && g.wc(a, function(c, d) {
            g.Ck(b, d, c)
        })
    }
      , osb = function(a) {
        var b = Math.min(a.B.length, 1E3)
          , c = ["count=" + b];
        if (a.Aw > 6 && b > 0) {
            var d = a.B[0].j;
            c.push("ofs=" + d)
        } else
            d = 0;
        for (var e = {}, f = 0; f < b; e = {
            NG: void 0
        },
        f++) {
            e.NG = a.B[f].j;
            var h = a.B[f].map;
            e.NG = a.Aw <= 6 ? f : e.NG - d;
            try {
                g.wc(h, function(l) {
                    return function(m, n) {
                        c.push("req" + l.NG + "_" + n + "=" + encodeURIComponent(m))
                    }
                }(e))
            } catch (l) {
                c.push("req" + e.NG + "_type=" + encodeURIComponent("_badmap"))
            }
        }
        a.C = a.C.concat(a.B.splice(0, b));
        return c.join("&")
    }
      , rsb = function(a) {
        a.eh || a.Ar || (a.N = 1,
        a.Ar = O7((0,
        g.Ya)(a.VV, a), 0),
        a.Kz = 0)
    }
      , tsb = function(a) {
        if (a.eh || a.Ar || a.Kz >= 3)
            return !1;
        a.N++;
        a.Ar = O7((0,
        g.Ya)(a.VV, a), ssb(a, a.Kz));
        a.Kz++;
        return !0
    }
      , V7 = function(a, b, c) {
        a.DN = a.K == null ? c : !a.K;
        a.Gp = b.zr;
        a.Z || ksb(a)
    }
      , W7 = function(a) {
        a.Bw != null && (g.Na.clearTimeout(a.Bw),
        a.Bw = null)
    }
      , ssb = function(a, b) {
        var c = 5E3 + Math.floor(Math.random() * 1E4);
        a.isActive() || (c *= 2);
        return c * b
    }
      , Y7 = function(a, b) {
        if (b == 2 || b == 9) {
            var c = null;
            a.Zi && (c = null);
            var d = (0,
            g.Ya)(a.rfa, a);
            c || (c = new g.pk("//www.google.com/images/cleardot.gif"),
            c7(c));
            asb(c.toString(), 1E4, d)
        } else
            Q7(2);
        usb(a, b)
    }
      , usb = function(a, b) {
        a.j = 0;
        a.Zi && a.Zi.XV(b);
        vsb(a);
        lsb(a)
    }
      , vsb = function(a) {
        a.j = 0;
        a.Gp = -1;
        if (a.Zi)
            if (a.C.length == 0 && a.B.length == 0)
                a.Zi.YN();
            else {
                var b = g.Ab(a.C)
                  , c = g.Ab(a.B);
                a.C.length = 0;
                a.B.length = 0;
                a.Zi.YN(b, c)
            }
    }
      , U7 = function(a, b, c) {
        var d = g.Dk(c);
        if (d.j != "")
            b && g.rk(d, b + "." + d.j),
            g.sk(d, d.C);
        else {
            var e = window.location;
            d = Upb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
        }
        a.RD && g.wc(a.RD, function(f, h) {
            g.Ck(d, h, f)
        });
        g.Ck(d, "VER", a.Aw);
        X7(a, d);
        return d
    }
      , wsb = function() {}
      , xsb = function() {
        this.j = [];
        this.B = []
    }
      , ysb = function(a) {
        g.lb.call(this, "channelMessage");
        this.message = a
    }
      , zsb = function(a) {
        g.lb.call(this, "channelError");
        this.error = a
    }
      , Asb = function(a, b) {
        this.action = a;
        this.params = b || {}
    }
      , Z7 = function(a, b) {
        g.P.call(this);
        this.j = new g.np(this.jda,0,this);
        g.Q(this, this.j);
        this.ij = 5E3;
        this.B = 0;
        if (typeof a === "function")
            b && (a = (0,
            g.Ya)(a, b));
        else if (a && typeof a.handleEvent === "function")
            a = (0,
            g.Ya)(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.C = a
    }
      , Bsb = function(a, b, c, d, e) {
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? function() {
            return ""
        }
        : d;
        e = e === void 0 ? !1 : e;
        this.Ca = a;
        this.N = b;
        this.C = new g.Op;
        this.B = new Z7(this.yea,this);
        this.j = null;
        this.qa = !1;
        this.K = null;
        this.Y = "";
        this.Z = this.G = 0;
        this.D = [];
        this.Ra = c;
        this.ra = d;
        this.Va = e;
        this.Na = new Vpb;
        this.Fa = new Xpb;
        this.La = new Zpb;
        this.Ia = new aqb;
        this.Wa = new cqb;
        this.bb = new dqb
    }
      , Csb = function(a) {
        if (a.j) {
            var b = a.ra()
              , c = a.j.Fp || {};
            b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
            a.j.Fp = c
        }
    }
      , $7 = function(a) {
        this.scheme = "https";
        this.port = this.domain = "";
        this.j = "/api/lounge";
        this.B = !0;
        a = a || document.location.href;
        var b = Number(g.Ui(4, a)) || "";
        b && (this.port = ":" + b);
        this.domain = g.Vi(a) || "";
        a = g.Zb();
        a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1],
        g.Yb(a, "10.0") < 0 && (this.B = !1))
    }
      , a8 = function(a, b) {
        var c = a.j;
        a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
        return g.aj(c + b, {})
    }
      , Dsb = function(a, b) {
        g.Zc.call(this);
        var c = this;
        this.Kd = a();
        this.Kd.subscribe("handlerOpened", this.Q5, this);
        this.Kd.subscribe("handlerClosed", this.onClosed, this);
        this.Kd.subscribe("handlerError", function(d, e) {
            c.onError(e)
        });
        this.Kd.subscribe("handlerMessage", this.onMessage, this);
        this.j = b
    }
      , Esb = function(a, b, c) {
        var d = this;
        c = c === void 0 ? function() {
            return ""
        }
        : c;
        var e = e === void 0 ? new Krb : e;
        var f = f === void 0 ? new g.Op : f;
        this.pathPrefix = a;
        this.j = b;
        this.Ca = c;
        this.G = f;
        this.Z = null;
        this.Y = this.N = 0;
        this.channel = null;
        this.K = 0;
        this.C = new Z7(function() {
            d.C.isActive();
            var h;
            ((h = d.channel) == null ? void 0 : lrb((new Nrb(h,h.j)).j.B)) === 0 && d.connect(d.Z, d.N)
        }
        );
        this.D = {};
        this.B = {};
        this.qa = !1;
        this.logger = null;
        this.ra = [];
        this.Eg = void 0;
        this.Na = new Vpb;
        this.Fa = new Xpb;
        this.La = new Zpb;
        this.Ia = new aqb
    }
      , Fsb = function(a) {
        g.Sc(a.channel, "m", function() {
            a.K = 3;
            a.C.reset();
            a.Z = null;
            a.N = 0;
            for (var b = g.v(a.ra), c = b.next(); !c.done; c = b.next())
                c = c.value,
                a.channel && a.channel.send(c);
            a.ra = [];
            a.publish("webChannelOpened");
            Wpb(a.Na, "WEB_CHANNEL")
        });
        g.Sc(a.channel, "n", function() {
            a.K = 0;
            a.C.isActive() || a.publish("webChannelClosed");
            var b, c = (b = a.channel) == null ? void 0 : Orb(new Nrb(b,b.j));
            c && (a.ra = [].concat(g.w(c)));
            Ypb(a.Fa, "WEB_CHANNEL")
        });
        g.Sc(a.channel, "p", function(b) {
            var c = b.data;
            c[0] === "gracefulReconnect" ? (a.C.start(),
            a.channel && a.channel.close()) : a.publish("webChannelMessage", new Asb(c[0],c[1]));
            a.Eg = b.statusCode;
            $pb(a.La, "WEB_CHANNEL")
        });
        g.Sc(a.channel, "o", function() {
            a.Eg === 401 || a.C.start();
            a.publish("webChannelError");
            bqb(a.Ia, "WEB_CHANNEL")
        })
    }
      , Gsb = function(a) {
        var b = a.Ca();
        b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
    }
      , Hsb = function(a) {
        g.Zc.call(this);
        this.j = a();
        this.j.subscribe("webChannelOpened", this.R5, this);
        this.j.subscribe("webChannelClosed", this.onClosed, this);
        this.j.subscribe("webChannelError", this.onError, this);
        this.j.subscribe("webChannelMessage", this.onMessage, this)
    }
      , Isb = function(a, b, c, d, e) {
        function f() {
            return new Bsb(a8(a, "/bc"),b,!1,c,d)
        }
        c = c === void 0 ? function() {
            return ""
        }
        : c;
        return g.Zr("enable_mdx_web_channel_desktop") ? new Hsb(function() {
            return new Esb(a8(a, "/wc"),b,c)
        }
        ) : new Dsb(f,e)
    }
      , Msb = function() {
        var a = Jsb;
        Ksb();
        b8.push(a);
        Lsb()
    }
      , c8 = function(a, b) {
        Ksb();
        var c = Nsb(a, String(b));
        b8.length == 0 ? Osb(c) : (Lsb(),
        g.Mb(b8, function(d) {
            d(c)
        }))
    }
      , d8 = function(a) {
        c8("CP", a)
    }
      , Ksb = function() {
        b8 || (b8 = g.Pa("yt.mdx.remote.debug.handlers_") || [],
        g.Oa("yt.mdx.remote.debug.handlers_", b8))
    }
      , Osb = function(a) {
        var b = (e8 + 1) % 50;
        e8 = b;
        f8[b] = a;
        g8 || (g8 = b == 49)
    }
      , Lsb = function() {
        var a = b8;
        if (f8[0]) {
            var b = g8 ? e8 : -1;
            do {
                b = (b + 1) % 50;
                var c = f8[b];
                g.Mb(a, function(d) {
                    d(c)
                })
            } while (b != e8);
            f8 = Array(50);
            e8 = -1;
            g8 = !1
        }
    }
      , Nsb = function(a, b) {
        var c = (Date.now() - Psb) / 1E3;
        c.toFixed && (c = c.toFixed(3));
        var d = [];
        d.push("[", c + "s", "] ");
        d.push("[", "yt.mdx.remote", "] ");
        d.push(a + ": " + b, "\n");
        return d.join("")
    }
      , h8 = function(a) {
        g.Ox.call(this);
        this.K = a;
        this.screens = []
    }
      , Qsb = function(a, b) {
        var c = a.get(b.uuid) || a.get(b.id);
        if (c)
            return a = c.name,
            c.id = b.id || c.id,
            c.name = b.name,
            c.token = b.token,
            c.uuid = b.uuid || c.uuid,
            c.name != a;
        a.screens.push(b);
        return !0
    }
      , Rsb = function(a, b) {
        var c = a.screens.length != b.length;
        a.screens = g.sn(a.screens, function(f) {
            return !!rqb(b, f)
        });
        for (var d = 0, e = b.length; d < e; d++)
            c = Qsb(a, b[d]) || c;
        return c
    }
      , Ssb = function(a, b) {
        var c = a.screens.length;
        a.screens = g.sn(a.screens, function(d) {
            return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
        });
        return a.screens.length < c
    }
      , Tsb = function(a, b, c, d, e) {
        g.Ox.call(this);
        this.C = a;
        this.N = b;
        this.D = c;
        this.K = d;
        this.G = e;
        this.B = 0;
        this.j = null;
        this.wd = NaN
    }
      , j8 = function(a) {
        h8.call(this, "LocalScreenService");
        this.B = a;
        this.j = NaN;
        i8(this);
        this.info("Initializing with " + oqb(this.screens))
    }
      , Usb = function(a) {
        if (a.screens.length) {
            var b = g.Il(a.screens, function(d) {
                return d.id
            })
              , c = a8(a.B, "/pairing/get_lounge_token_batch");
            a.B.sendRequest("POST", c, {
                screen_ids: b.join(",")
            }, (0,
            g.Ya)(a.h$, a), (0,
            g.Ya)(a.g$, a))
        }
    }
      , i8 = function(a) {
        if (g.Zr("deprecate_pair_servlet_enabled"))
            return Rsb(a, []);
        var b = nqb(yqb());
        b = g.sn(b, function(c) {
            return !c.uuid
        });
        return Rsb(a, b)
    }
      , k8 = function(a, b) {
        Aqb(g.Il(a.screens, lqb));
        b && zqb()
    }
      , Wsb = function(a, b) {
        g.Ox.call(this);
        this.K = b;
        b = (b = g.nt("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
        for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
            var h = d[f].id;
            c[h] = g.sb(b, h)
        }
        this.j = c;
        this.G = a;
        this.C = this.D = NaN;
        this.B = null;
        Vsb("Initialized with " + g.Ni(this.j))
    }
      , Xsb = function(a, b, c) {
        var d = a8(a.G, "/pairing/get_screen_availability");
        a.G.sendRequest("POST", d, {
            lounge_token: b.token
        }, (0,
        g.Ya)(function(e) {
            e = e.screens || [];
            for (var f = e.length, h = 0; h < f; ++h)
                if (e[h].loungeToken == b.token) {
                    c(e[h].status == "online");
                    return
                }
            c(!1)
        }, a), (0,
        g.Ya)(function() {
            c(!1)
        }, a))
    }
      , Zsb = function(a, b) {
        a: if (Opb(b) != Opb(a.j))
            var c = !1;
        else {
            c = g.Cc(b);
            for (var d = c.length, e = 0; e < d; ++e)
                if (!a.j[c[e]]) {
                    c = !1;
                    break a
                }
            c = !0
        }
        c || (Vsb("Updated online screens: " + g.Ni(a.j)),
        a.j = b,
        a.publish("screenChange"));
        Ysb(a)
    }
      , l8 = function(a) {
        isNaN(a.C) || g.Wr(a.C);
        a.C = g.Ur((0,
        g.Ya)(a.OT, a), a.D > 0 && a.D < g.$a() ? 2E4 : 1E4)
    }
      , Vsb = function(a) {
        c8("OnlineScreenService", a)
    }
      , $sb = function(a) {
        var b = {};
        g.Mb(a.K(), function(c) {
            c.token ? b[c.token] = c.id : this.pg("Requesting availability of screen w/o lounge token.")
        });
        return b
    }
      , Ysb = function(a) {
        a = g.Cc(g.xc(a.j, function(b) {
            return b
        }));
        g.Jb(a);
        a.length ? g.mt("yt-remote-online-screen-ids", a.join(","), 60) : g.ot("yt-remote-online-screen-ids")
    }
      , m8 = function(a, b) {
        b = b === void 0 ? !1 : b;
        h8.call(this, "ScreenService");
        this.D = a;
        this.N = b;
        this.j = this.B = null;
        this.C = [];
        this.G = {};
        atb(this)
    }
      , ctb = function(a, b, c, d, e, f) {
        a.info("getAutomaticScreenByIds " + c + " / " + b);
        c || (c = a.G[b]);
        var h = a.Jl()
          , l = c ? m7(h, c) : null;
        c && (a.N || l) || (l = m7(h, b));
        if (l) {
            l.uuid = b;
            var m = n8(a, l);
            Xsb(a.j, m, function(n) {
                e(n ? m : null)
            })
        } else
            c ? btb(a, c, (0,
            g.Ya)(function(n) {
                var p = n8(this, new j7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Xsb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
    }
      , dtb = function(a, b) {
        for (var c = a.screens.length, d = 0; d < c; ++d)
            if (a.screens[d].name == b)
                return a.screens[d];
        return null
    }
      , etb = function(a, b, c) {
        Xsb(a.j, b, c)
    }
      , btb = function(a, b, c, d) {
        a.info("requestLoungeToken_ for " + b);
        var e = {
            postParams: {
                screen_ids: b
            },
            method: "POST",
            context: a,
            onSuccess: function(f, h) {
                f = h && h.screens || [];
                f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
            },
            onError: function() {
                d(Error("Request screen lounge token failed"))
            }
        };
        g.ds(a8(a.D, "/pairing/get_lounge_token_batch"), e)
    }
      , ftb = function(a) {
        a.screens = a.B.Jl();
        var b = a.G, c = {}, d;
        for (d in b)
            c[b[d]] = d;
        b = a.screens.length;
        for (d = 0; d < b; ++d) {
            var e = a.screens[d];
            e.uuid = c[e.id] || ""
        }
        a.info("Updated manual screens: " + oqb(a.screens))
    }
      , atb = function(a) {
        gtb(a);
        a.B = new j8(a.D);
        a.B.subscribe("screenChange", (0,
        g.Ya)(a.r$, a));
        ftb(a);
        a.N || (a.C = nqb(g.nt("yt-remote-automatic-screen-cache") || []));
        gtb(a);
        a.info("Initializing automatic screens: " + oqb(a.C));
        a.j = new Wsb(a.D,(0,
        g.Ya)(a.Jl, a, !0));
        a.j.subscribe("screenChange", (0,
        g.Ya)(function() {
            this.publish("onlineScreenChange")
        }, a))
    }
      , n8 = function(a, b) {
        var c = a.get(b.id);
        c ? (c.uuid = b.uuid,
        b = c) : ((c = m7(a.C, b.uuid)) ? (c.id = b.id,
        c.token = b.token,
        b = c) : a.C.push(b),
        a.N || htb(a));
        gtb(a);
        a.G[b.uuid] = b.id;
        g.mt("yt-remote-device-id-map", a.G, 31536E3);
        return b
    }
      , htb = function(a) {
        a = g.sn(a.C, function(b) {
            return b.idType != "shortLived"
        });
        g.mt("yt-remote-automatic-screen-cache", g.Il(a, lqb))
    }
      , gtb = function(a) {
        a.G = g.nt("yt-remote-device-id-map") || {}
    }
      , o8 = function(a, b, c) {
        g.Ox.call(this);
        this.Ia = c;
        this.D = a;
        this.B = b;
        this.j = null
    }
      , p8 = function(a, b) {
        a.j = b;
        a.publish("sessionScreen", a.j)
    }
      , itb = function(a, b) {
        a.j && (a.j.token = b,
        n8(a.D, a.j));
        a.publish("sessionScreen", a.j)
    }
      , q8 = function(a, b) {
        c8(a.Ia, b)
    }
      , r8 = function(a, b, c) {
        o8.call(this, a, b, "CastSession");
        var d = this;
        this.config_ = c;
        this.C = null;
        this.ra = (0,
        g.Ya)(this.W5, this);
        this.Fa = (0,
        g.Ya)(this.wda, this);
        this.qa = g.Ur(function() {
            jtb(d, null)
        }, 12E4);
        this.N = this.G = this.K = this.Z = 0;
        this.Ca = !1;
        this.Y = "unknown"
    }
      , ltb = function(a, b) {
        g.Wr(a.N);
        a.N = 0;
        b == 0 ? ktb(a) : a.N = g.Ur(function() {
            ktb(a)
        }, b)
    }
      , ktb = function(a) {
        mtb(a, "getLoungeToken");
        g.Wr(a.G);
        a.G = g.Ur(function() {
            ntb(a, null)
        }, 3E4)
    }
      , mtb = function(a, b) {
        a.info("sendYoutubeMessage_: " + b + " " + g.Ni());
        var c = {};
        c.type = b;
        a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0,
        g.Ya)(function() {
            q8(this, "Failed to send message: " + b + ".")
        }, a)) : q8(a, "Sending yt message without session: " + g.Ni(c))
    }
      , otb = function(a, b) {
        b ? (a.info("onConnectedScreenId_: Received screenId: " + b),
        a.j && a.j.id == b || a.uZ(b, function(c) {
            p8(a, c)
        }, function() {
            return a.Tj()
        }, 5)) : a.Tj(Error("Waiting for session status timed out."))
    }
      , qtb = function(a, b, c) {
        a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
        var d = new j7(b);
        ptb(a, d, function(e) {
            e ? (a.Ca = !0,
            n8(a.D, d),
            p8(a, d),
            a.Y = "unknown",
            ltb(a, c)) : (g.Cr(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")),
            a.Tj())
        }, 5)
    }
      , jtb = function(a, b) {
        g.Wr(a.qa);
        a.qa = 0;
        b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? qtb(a, {
            name: a.B.friendlyName,
            screenId: b.screenId,
            loungeToken: b.loungeToken,
            dialId: b.deviceId,
            screenIdType: "shortLived"
        }, b.loungeTokenRefreshIntervalMs) : (g.Cr(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")),
        otb(a, b.screenId))) : (g.Cr(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")),
        otb(a, b.screenId)) : otb(a, b.screenId) : a.Tj(Error("Waiting for session status timed out."))
    }
      , ntb = function(a, b) {
        g.Wr(a.G);
        a.G = 0;
        var c = null;
        if (b)
            if (b.loungeToken) {
                var d;
                ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
            } else
                c = "missingLoungeToken";
        else
            c = "noLoungeTokenResponse";
        c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)),
        a.Y = c,
        ltb(a, 3E4)) : (itb(a, b.loungeToken),
        a.Ca = !1,
        a.Y = "unknown",
        ltb(a, b.loungeTokenRefreshIntervalMs))
    }
      , ptb = function(a, b, c, d) {
        g.Wr(a.K);
        a.K = 0;
        etb(a.D, b, function(e) {
            e || d < 0 ? c(e) : a.K = g.Ur(function() {
                ptb(a, b, c, d - 1)
            }, 300)
        })
    }
      , rtb = function(a) {
        g.Wr(a.Z);
        a.Z = 0;
        g.Wr(a.K);
        a.K = 0;
        g.Wr(a.qa);
        a.qa = 0;
        g.Wr(a.G);
        a.G = 0;
        g.Wr(a.N);
        a.N = 0
    }
      , s8 = function(a, b, c, d) {
        o8.call(this, a, b, "DialSession");
        this.config_ = d;
        this.C = this.Z = null;
        this.Fa = "";
        this.Ra = c;
        this.Na = null;
        this.qa = function() {}
        ;
        this.Y = NaN;
        this.La = (0,
        g.Ya)(this.X5, this);
        this.G = function() {}
        ;
        this.N = this.K = 0;
        this.ra = !1;
        this.Ca = "unknown"
    }
      , t8 = function(a) {
        var b;
        return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
    }
      , stb = function(a) {
        a.G = a.D.cW(a.Fa, a.B.label, a.B.friendlyName, t8(a), function(b, c) {
            a.G = function() {}
            ;
            a.ra = !0;
            p8(a, b);
            b.idType == "shortLived" && c > 0 && u8(a, c)
        }, function(b) {
            a.G = function() {}
            ;
            a.Tj(b)
        })
    }
      , ttb = function(a) {
        var b = {};
        b.pairingCode = a.Fa;
        b.theme = a.Ra;
        Cqb() && (b.env_useStageMdx = 1);
        return g.$i(b)
    }
      , utb = function(a) {
        return new Promise(function(b) {
            a.Fa = pqb();
            if (a.Na) {
                var c = new chrome.cast.DialLaunchResponse(!0,ttb(a));
                b(c);
                stb(a)
            } else
                a.qa = function() {
                    g.Wr(a.Y);
                    a.qa = function() {}
                    ;
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0,ttb(a));
                    b(d);
                    stb(a)
                }
                ,
                a.Y = g.Ur(function() {
                    a.qa()
                }, 100)
        }
        )
    }
      , wtb = function(a, b, c) {
        a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
        var d = new j7(b);
        return (new Promise(function(e) {
            vtb(a, d, function(f) {
                f ? (a.ra = !0,
                n8(a.D, d),
                p8(a, d),
                u8(a, c)) : g.Cr(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                e(f)
            }, 5)
        }
        )).then(function(e) {
            return e ? new chrome.cast.DialLaunchResponse(!1) : utb(a)
        })
    }
      , xtb = function(a, b) {
        var c = a.Z.receiver.label
          , d = a.B.friendlyName;
        return (new Promise(function(e) {
            ctb(a.D, c, b, d, function(f) {
                f && f.token && p8(a, f);
                e(f)
            }, function(f) {
                q8(a, "Failed to get DIAL screen: " + f);
                e(null)
            })
        }
        )).then(function(e) {
            return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : utb(a)
        })
    }
      , vtb = function(a, b, c, d) {
        g.Wr(a.K);
        a.K = 0;
        etb(a.D, b, function(e) {
            e || d < 0 ? c(e) : a.K = g.Ur(function() {
                vtb(a, b, c, d - 1)
            }, 300)
        })
    }
      , u8 = function(a, b) {
        a.info("getDialAppInfoWithTimeout_ " + b);
        t8(a) && (g.Wr(a.N),
        a.N = 0,
        b == 0 ? ytb(a) : a.N = g.Ur(function() {
            ytb(a)
        }, b))
    }
      , ytb = function(a) {
        t8(a) && a.C.getDialAppInfo(function(b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
                var d;
                ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
            } else
                c = "missingLoungeToken";
            c ? (a.Ca = c,
            u8(a, 3E4)) : (a.ra = !1,
            a.Ca = "unknown",
            itb(a, b.loungeToken),
            u8(a, b.loungeTokenRefreshIntervalMs))
        }, function(b) {
            a.info("getDialAppInfo error: " + b);
            a.Ca = "noLoungeTokenResponse";
            u8(a, 3E4)
        })
    }
      , ztb = function(a) {
        g.Wr(a.K);
        a.K = 0;
        g.Wr(a.N);
        a.N = 0;
        a.G();
        a.G = function() {}
        ;
        g.Wr(a.Y)
    }
      , v8 = function(a, b) {
        o8.call(this, a, b, "ManualSession");
        this.C = g.Ur((0,
        g.Ya)(this.zB, this, null), 150)
    }
      , w8 = function(a, b) {
        g.Ox.call(this);
        this.config_ = b;
        this.B = a;
        this.Z = b.appId || "233637DE";
        this.D = b.theme || "cl";
        this.Y = b.disableCastApi || !1;
        this.K = b.forceMirroring || !1;
        this.j = null;
        this.N = !1;
        this.C = [];
        this.G = (0,
        g.Ya)(this.vca, this)
    }
      , Atb = function(a, b) {
        return b ? g.qb(a.C, function(c) {
            return k7(b, c.label)
        }, a) : null
    }
      , x8 = function(a) {
        c8("Controller", a)
    }
      , Jsb = function(a) {
        window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
    }
      , y8 = function(a) {
        return a.N || !!a.C.length || !!a.j
    }
      , z8 = function(a, b, c) {
        b != a.j && (g.gb(a.j),
        (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed", b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B),
        b.subscribe("sessionScreen", (0,
        g.Ya)(a.t1, a, b)),
        b.subscribe("sessionFailed", function() {
            return Btb(a, b)
        }),
        b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.zB(null)) : a.publish("yt-remote-cast2-session-change", null))
    }
      , Btb = function(a, b) {
        a.j == b && a.publish("yt-remote-cast2-session-failed")
    }
      , Ctb = function(a) {
        var b = a.B.bW()
          , c = a.j && a.j.B;
        a = g.Il(b, function(d) {
            c && k7(d, c.label) && (c = null);
            var e = d.uuid ? d.uuid : d.id
              , f = Atb(this, d);
            f ? (f.label = e,
            f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e,d.name),
            f.receiverType = chrome.cast.ReceiverType.CUSTOM);
            return f
        }, a);
        c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label,c.friendlyName),
        c.receiverType = chrome.cast.ReceiverType.CUSTOM),
        a.push(c));
        return a
    }
      , Jtb = function(a, b, c, d) {
        d.disableCastApi ? A8("Cannot initialize because disabled by Mdx config.") : Dtb() ? Etb(b, d) && (Ftb(!0),
        window.chrome && chrome.cast && chrome.cast.isAvailable ? Gtb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
            e ? Gtb(a, c) : (B8("Failed to load cast API: " + f),
            Htb(!1),
            Ftb(!1),
            g.ot("yt-remote-cast-available"),
            g.ot("yt-remote-cast-receiver"),
            Itb(),
            c(!1))
        }
        ,
        d.loadCastApiSetupScript ? g.Sv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? Eqb() >= 60 && Nqb() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? Iqb() : Eqb() >= 89 ? Pqb() : (Mqb(),
        t7(Oqb.map(Jqb))))) : A8("Cannot initialize because not running Chrome")
    }
      , Itb = function() {
        A8("dispose");
        var a = C8();
        a && a.dispose();
        g.Oa("yt.mdx.remote.cloudview.instance_", null);
        Ktb(!1);
        g.Qv(Ltb);
        Ltb.length = 0
    }
      , D8 = function() {
        return !!g.nt("yt-remote-cast-installed")
    }
      , Mtb = function() {
        var a = g.nt("yt-remote-cast-receiver");
        return a ? a.friendlyName : null
    }
      , Ntb = function() {
        A8("clearCurrentReceiver");
        g.ot("yt-remote-cast-receiver")
    }
      , Otb = function() {
        return D8() ? C8() ? C8().getCastSession() : (B8("getCastSelector: Cast is not initialized."),
        null) : (B8("getCastSelector: Cast API is not installed!"),
        null)
    }
      , Ptb = function() {
        D8() ? C8() ? E8() ? (A8("Requesting cast selector."),
        C8().requestSession()) : (A8("Wait for cast API to be ready to request the session."),
        Ltb.push(g.Pv("yt-remote-cast2-api-ready", Ptb))) : B8("requestCastSelector: Cast is not initialized.") : B8("requestCastSelector: Cast API is not installed!")
    }
      , F8 = function(a, b) {
        E8() ? C8().setConnectedScreenStatus(a, b) : B8("setConnectedScreenStatus called before ready.")
    }
      , Dtb = function() {
        var a = g.Zb().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
        return g.SE || a
    }
      , Qtb = function(a, b) {
        C8().init(a, b)
    }
      , Etb = function(a, b) {
        var c = !1;
        C8() || (a = new w8(a,b),
        a.subscribe("yt-remote-cast2-availability-change", function(d) {
            g.mt("yt-remote-cast-available", d);
            r7("yt-remote-cast2-availability-change", d)
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
            A8("onReceiverSelected: " + d.friendlyName);
            g.mt("yt-remote-cast-receiver", d);
            r7("yt-remote-cast2-receiver-selected", d)
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
            A8("onReceiverResumed: " + d.friendlyName);
            g.mt("yt-remote-cast-receiver", d);
            r7("yt-remote-cast2-receiver-resumed", d)
        }),
        a.subscribe("yt-remote-cast2-session-change", function(d) {
            A8("onSessionChange: " + l7(d));
            d || g.ot("yt-remote-cast-receiver");
            r7("yt-remote-cast2-session-change", d)
        }),
        g.Oa("yt.mdx.remote.cloudview.instance_", a),
        c = !0);
        A8("cloudview.createSingleton_: " + c);
        return c
    }
      , C8 = function() {
        return g.Pa("yt.mdx.remote.cloudview.instance_")
    }
      , Gtb = function(a, b) {
        Htb(!0);
        Ftb(!1);
        Qtb(a, function(c) {
            c ? (Ktb(!0),
            g.Rv("yt-remote-cast2-api-ready")) : (B8("Failed to initialize cast API."),
            Htb(!1),
            g.ot("yt-remote-cast-available"),
            g.ot("yt-remote-cast-receiver"),
            Itb());
            b(c)
        })
    }
      , A8 = function(a) {
        c8("cloudview", a)
    }
      , B8 = function(a) {
        c8("cloudview", a)
    }
      , Htb = function(a) {
        A8("setCastInstalled_ " + a);
        g.mt("yt-remote-cast-installed", a)
    }
      , E8 = function() {
        return !!g.Pa("yt.mdx.remote.cloudview.apiReady_")
    }
      , Ktb = function(a) {
        A8("setApiReady_ " + a);
        g.Oa("yt.mdx.remote.cloudview.apiReady_", a)
    }
      , Ftb = function(a) {
        g.Oa("yt.mdx.remote.cloudview.initializing_", a)
    }
      , G8 = function(a) {
        this.index = -1;
        this.videoId = this.listId = "";
        this.volume = this.playerState = -1;
        this.muted = !1;
        this.audioTrackId = null;
        this.K = this.N = 0;
        this.trackData = null;
        this.Ml = this.jq = !1;
        this.Z = this.G = this.j = this.D = 0;
        this.C = NaN;
        this.B = !1;
        this.reset(a)
    }
      , Rtb = function(a) {
        a.audioTrackId = null;
        a.trackData = null;
        a.playerState = -1;
        a.jq = !1;
        a.Ml = !1;
        a.N = 0;
        a.K = g.$a();
        a.D = 0;
        a.j = 0;
        a.G = 0;
        a.Z = 0;
        a.C = NaN;
        a.B = !1
    }
      , H8 = function(a) {
        return a.isPlaying() ? (g.$a() - a.K) / 1E3 : 0
    }
      , I8 = function(a, b) {
        a.N = b;
        a.K = g.$a()
    }
      , J8 = function(a) {
        switch (a.playerState) {
        case 1:
        case 1081:
            return (g.$a() - a.K) / 1E3 + a.N;
        case -1E3:
            return 0
        }
        return a.N
    }
      , K8 = function(a, b, c) {
        var d = a.videoId;
        a.videoId = b;
        a.index = c;
        b != d && Rtb(a)
    }
      , Stb = function(a) {
        var b = {};
        b.index = a.index;
        b.listId = a.listId;
        b.videoId = a.videoId;
        b.playerState = a.playerState;
        b.volume = a.volume;
        b.muted = a.muted;
        b.audioTrackId = a.audioTrackId;
        b.trackData = g.Kc(a.trackData);
        b.hasPrevious = a.jq;
        b.hasNext = a.Ml;
        b.playerTime = a.N;
        b.playerTimeAt = a.K;
        b.seekableStart = a.D;
        b.seekableEnd = a.j;
        b.duration = a.G;
        b.loadedTime = a.Z;
        b.liveIngestionTime = a.C;
        return b
    }
      , M8 = function(a, b) {
        g.Ox.call(this);
        var c = this;
        this.C = 0;
        this.D = a;
        this.K = [];
        this.G = new xsb;
        this.B = this.j = null;
        this.Y = (0,
        g.Ya)(this.kba, this);
        this.N = (0,
        g.Ya)(this.cH, this);
        this.Z = (0,
        g.Ya)(this.jba, this);
        this.qa = (0,
        g.Ya)(this.mba, this);
        var d = 0;
        a ? (d = a.getProxyState(),
        d != 3 && (a.subscribe("proxyStateChange", this.nU, this),
        Ttb(this))) : d = 3;
        d != 0 && (b ? this.nU(d) : g.Ur(function() {
            c.nU(d)
        }, 0));
        (a = Otb()) && L8(this, a);
        this.subscribe("yt-remote-cast2-session-change", this.qa)
    }
      , N8 = function(a) {
        return new G8(a.D.getPlayerContextData())
    }
      , Ttb = function(a) {
        g.Mb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
            this.K.push(this.D.subscribe(b, g.Za(this.tca, b), this))
        }, a)
    }
      , Utb = function(a) {
        g.Mb(a.K, function(b) {
            this.D.unsubscribeByKey(b)
        }, a);
        a.K.length = 0
    }
      , O8 = function(a) {
        return a.getState() == 1
    }
      , P8 = function(a, b) {
        var c = a.G;
        c.j.length + c.B.length < 50 && a.G.enqueue(b)
    }
      , Vtb = function(a, b, c) {
        var d = N8(a);
        I8(d, c);
        d.playerState != -1E3 && (d.playerState = b);
        Q8(a, d)
    }
      , R8 = function(a, b, c) {
        a.D.sendMessage(b, c)
    }
      , Q8 = function(a, b) {
        Utb(a);
        a.D.setPlayerContextData(Stb(b));
        Ttb(a)
    }
      , L8 = function(a, b) {
        a.B && (a.B.removeUpdateListener(a.Y),
        a.B.removeMediaListener(a.N),
        a.cH(null));
        a.B = b;
        a.B && (d8("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.Y),
        a.B.addMediaListener(a.N),
        a.B.media.length && a.cH(a.B.media[0]))
    }
      , Wtb = function(a) {
        var b = a.j.media
          , c = a.j.customData;
        if (b && c) {
            var d = N8(a);
            b.contentId != d.videoId && d8("Cast changing video to: " + b.contentId);
            d.videoId = b.contentId;
            d.playerState = c.playerState;
            I8(d, a.j.getEstimatedTime());
            Q8(a, d)
        } else
            d8("No cast media video. Ignoring state update.")
    }
      , S8 = function(a, b, c) {
        return (0,
        g.Ya)(function(d) {
            this.pg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
            d.code != chrome.cast.ErrorCode.TIMEOUT && (this.pg("Retrying " + b + " using MDx browser channel."),
            R8(this, b, c))
        }, a)
    }
      , V8 = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        g.Ox.call(this);
        var e = this;
        this.K = NaN;
        this.Fa = !1;
        this.Y = this.Z = this.ra = this.Ca = NaN;
        this.qa = [];
        this.G = this.N = this.D = this.j = this.B = null;
        this.Na = a;
        this.La = d;
        this.qa.push(g.at(window, "beforeunload", function() {
            e.yA(2)
        }));
        this.C = [];
        this.j = new G8;
        this.Ra = b.id;
        this.Ia = b.idType;
        this.B = Isb(this.Na, c, this.gW, this.Ia == "shortLived", this.Ra);
        this.B.listen("channelOpened", function() {
            Xtb(e)
        });
        this.B.listen("channelClosed", function() {
            T8("Channel closed");
            isNaN(e.K) ? p7(!0) : p7();
            e.dispose()
        });
        this.B.listen("channelError", function(f) {
            p7();
            isNaN(e.TF()) ? (f == 1 && e.Ia == "shortLived" && e.publish("browserChannelAuthError", f),
            T8("Channel error: " + f + " without reconnection"),
            e.dispose()) : (e.Fa = !0,
            T8("Channel error: " + f + " with reconnection in " + e.TF() + " ms"),
            U8(e, 2))
        });
        this.B.listen("channelMessage", function(f) {
            Ytb(e, f)
        });
        this.B.Xs(b.token);
        this.subscribe("remoteQueueChange", function() {
            var f = e.j.videoId;
            g.pt() && g.mt("yt-remote-session-video-id", f)
        })
    }
      , Ztb = function(a) {
        return g.qb(a.C, function(b) {
            return b.type == "LOUNGE_SCREEN"
        })
    }
      , T8 = function(a) {
        c8("conn", a)
    }
      , U8 = function(a, b) {
        a.publish("proxyStateChange", b)
    }
      , $tb = function(a) {
        a.K = g.Ur(function() {
            T8("Connecting timeout");
            a.yA(1)
        }, 2E4)
    }
      , aub = function(a) {
        g.Wr(a.K);
        a.K = NaN
    }
      , bub = function(a) {
        g.Wr(a.Ca);
        a.Ca = NaN
    }
      , dub = function(a) {
        cub(a);
        a.ra = g.Ur(function() {
            W8(a, "getNowPlaying")
        }, 2E4)
    }
      , cub = function(a) {
        g.Wr(a.ra);
        a.ra = NaN
    }
      , Xtb = function(a) {
        T8("Channel opened");
        a.Fa && (a.Fa = !1,
        bub(a),
        a.Ca = g.Ur(function() {
            T8("Timing out waiting for a screen.");
            a.yA(1)
        }, 15E3))
    }
      , fub = function(a, b) {
        var c = null;
        if (b) {
            var d = Ztb(a);
            d && (c = {
                clientName: d.clientName,
                deviceMake: d.brand,
                deviceModel: d.model,
                osVersion: d.osVersion
            })
        }
        g.Oa("yt.mdx.remote.remoteClient_", c);
        b && (aub(a),
        bub(a));
        c = a.B.lB() && isNaN(a.K);
        b == c ? b && (U8(a, 1),
        W8(a, "getSubtitlesTrack")) : b ? (a.pZ() && a.j.reset(),
        U8(a, 1),
        W8(a, "getNowPlaying"),
        eub(a)) : a.yA(1)
    }
      , gub = function(a, b) {
        var c = b.params.videoId;
        delete b.params.videoId;
        c == a.j.videoId && (g.Gc(b.params) ? a.j.trackData = null : a.j.trackData = b.params,
        a.publish("remotePlayerChange"))
    }
      , hub = function(a, b, c) {
        var d = b.params.videoId || b.params.video_id
          , e = parseInt(b.params.currentIndex, 10);
        a.j.listId = b.params.listId || a.j.listId;
        K8(a.j, d, e);
        a.publish("remoteQueueChange", c)
    }
      , jub = function(a, b) {
        b.params = b.params || {};
        hub(a, b, "NOW_PLAYING_MAY_CHANGE");
        iub(a, b);
        a.publish("autoplayDismissed")
    }
      , iub = function(a, b) {
        var c = parseInt(b.params.currentTime || b.params.current_time, 10);
        I8(a.j, isNaN(c) ? 0 : c);
        c = parseInt(b.params.state, 10);
        c = isNaN(c) ? -1 : c;
        c == -1 && a.j.playerState == -1E3 && (c = -1E3);
        a.j.playerState = c;
        c = Number(b.params.loadedTime);
        a.j.Z = isNaN(c) ? 0 : c;
        a.j.mp(Number(b.params.duration));
        c = a.j;
        var d = Number(b.params.liveIngestionTime);
        c.C = d;
        c.B = isNaN(d) ? !1 : !0;
        c = a.j;
        d = Number(b.params.seekableStartTime);
        b = Number(b.params.seekableEndTime);
        c.D = isNaN(d) ? 0 : d;
        c.j = isNaN(b) ? 0 : b;
        a.j.playerState == 1 ? dub(a) : cub(a);
        a.publish("remotePlayerChange")
    }
      , kub = function(a, b) {
        if (a.j.playerState != -1E3) {
            var c = 1085;
            switch (parseInt(b.params.adState, 10)) {
            case 1:
                c = 1081;
                break;
            case 2:
                c = 1084;
                break;
            case 0:
                c = 1083
            }
            a.j.playerState = c;
            b = parseInt(b.params.currentTime, 10);
            I8(a.j, isNaN(b) ? 0 : b);
            a.publish("remotePlayerChange")
        }
    }
      , lub = function(a, b) {
        var c = b.params.muted == "true";
        a.j.volume = parseInt(b.params.volume, 10);
        a.j.muted = c;
        a.publish("remotePlayerChange")
    }
      , mub = function(a, b) {
        a.N = b.params.videoId;
        a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
    }
      , nub = function(a, b) {
        a.N = b.params.videoId || null;
        a.publish("autoplayUpNext", a.N)
    }
      , oub = function(a, b) {
        a.G = b.params.autoplayMode;
        a.publish("autoplayModeChange", a.G);
        a.G == "DISABLED" && a.publish("autoplayDismissed")
    }
      , pub = function(a, b) {
        var c = b.params.hasNext == "true";
        a.j.jq = b.params.hasPrevious == "true";
        a.j.Ml = c;
        a.publish("previousNextChange")
    }
      , Ytb = function(a, b) {
        b = b.message;
        b.params ? T8("Received: action=" + b.action + ", params=" + g.Ni(b.params)) : T8("Received: action=" + b.action + " {}");
        switch (b.action) {
        case "loungeStatus":
            b = e7(b.params.devices);
            a.C = g.Il(b, function(d) {
                return new iqb(d)
            });
            b = !!g.qb(a.C, function(d) {
                return d.type == "LOUNGE_SCREEN"
            });
            fub(a, b);
            b = a.u_("mlm");
            a.publish("multiStateLoopEnabled", b);
            break;
        case "loungeScreenDisconnected":
            g.vb(a.C, function(d) {
                return d.type == "LOUNGE_SCREEN"
            });
            fub(a, !1);
            break;
        case "remoteConnected":
            var c = new iqb(e7(b.params.device));
            g.qb(a.C, function(d) {
                return c ? d.id == c.id : !1
            }) || Npb(a.C, c);
            break;
        case "remoteDisconnected":
            c = new iqb(e7(b.params.device));
            g.vb(a.C, function(d) {
                return c ? d.id == c.id : !1
            });
            break;
        case "gracefulDisconnect":
            break;
        case "playlistModified":
            hub(a, b, "QUEUE_MODIFIED");
            break;
        case "nowPlaying":
            jub(a, b);
            break;
        case "onStateChange":
            iub(a, b);
            break;
        case "onAdStateChange":
            kub(a, b);
            break;
        case "onVolumeChanged":
            lub(a, b);
            break;
        case "onSubtitlesTrackChanged":
            gub(a, b);
            break;
        case "nowAutoplaying":
            mub(a, b);
            break;
        case "autoplayDismissed":
            a.publish("autoplayDismissed");
            break;
        case "autoplayUpNext":
            nub(a, b);
            break;
        case "onAutoplayModeChanged":
            oub(a, b);
            break;
        case "onHasPreviousNextChanged":
            pub(a, b);
            break;
        case "requestAssistedSignIn":
            a.publish("assistedSignInRequested", b.params.authCode);
            break;
        case "onLoopModeChanged":
            a.publish("loopModeChange", b.params.loopMode);
            break;
        default:
            T8("Unrecognized action: " + b.action)
        }
    }
      , eub = function(a) {
        g.Wr(a.Y);
        a.Y = g.Ur(function() {
            a.yA(1)
        }, 864E5)
    }
      , W8 = function(a, b, c) {
        c ? T8("Sending: action=" + b + ", params=" + g.Ni(c)) : T8("Sending: action=" + b);
        a.B.sendMessage(b, c)
    }
      , qub = function(a) {
        h8.call(this, "ScreenServiceProxy");
        this.ph = a;
        this.j = [];
        this.j.push(this.ph.$_s("screenChange", (0,
        g.Ya)(this.b6, this)));
        this.j.push(this.ph.$_s("onlineScreenChange", (0,
        g.Ya)(this.cca, this)))
    }
      , vub = function(a, b) {
        Bqb();
        if (!q7 || !q7.get("yt-remote-disable-remote-module-for-dev")) {
            b = g.zr("MDX_CONFIG") || b;
            sqb();
            wqb();
            X8 || (X8 = new $7(b ? b.loungeApiHost : void 0),
            Cqb() && (X8.j = "/api/loungedev"));
            Y8 || (Y8 = g.Pa("yt.mdx.remote.deferredProxies_") || [],
            g.Oa("yt.mdx.remote.deferredProxies_", Y8));
            rub();
            var c = Z8();
            if (!c) {
                var d = new m8(X8,b ? b.disableAutomaticScreenCache || !1 : !1);
                g.Oa("yt.mdx.remote.screenService_", d);
                c = Z8();
                var e = {};
                b && (e = {
                    appId: b.appId,
                    disableDial: b.disableDial,
                    theme: b.theme,
                    loadCastApiSetupScript: b.loadCastApiSetupScript,
                    disableCastApi: b.disableCastApi,
                    enableDialLoungeToken: b.enableDialLoungeToken,
                    enableCastLoungeToken: b.enableCastLoungeToken,
                    forceMirroring: b.forceMirroring
                });
                g.Oa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                Jtb(a, d, function(f) {
                    f ? $8() && F8($8(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                        r7("yt-remote-receiver-availability-change")
                    })
                }, e)
            }
            b && !g.Pa("yt.mdx.remote.initialized_") && (g.Oa("yt.mdx.remote.initialized_", !0),
            a9("Initializing: " + g.Ni(b)),
            b9.push(g.Pv("yt-remote-cast2-api-ready", function() {
                r7("yt-remote-api-ready")
            })),
            b9.push(g.Pv("yt-remote-cast2-availability-change", function() {
                r7("yt-remote-receiver-availability-change")
            })),
            b9.push(g.Pv("yt-remote-cast2-receiver-selected", function() {
                c9(null);
                r7("yt-remote-auto-connect", "cast-selector-receiver")
            })),
            b9.push(g.Pv("yt-remote-cast2-receiver-resumed", function() {
                r7("yt-remote-receiver-resumed", "cast-selector-receiver")
            })),
            b9.push(g.Pv("yt-remote-cast2-session-change", sub)),
            b9.push(g.Pv("yt-remote-connection-change", function(f) {
                f ? F8($8(), "YouTube TV") : d9() || (F8(null, null),
                Ntb())
            })),
            b9.push(g.Pv("yt-remote-cast2-session-failed", function() {
                r7("yt-remote-connection-failed")
            })),
            a = tub(),
            b.isAuto && (a.id += "#dial"),
            e = b.capabilities || [],
            g.Zr("desktop_enable_autoplay") && e.push("atp"),
            e.length > 0 && (a.capabilities = e),
            a.name = b.device,
            a.app = b.app,
            (b = b.theme) && (a.theme = b),
            a9(" -- with channel params: " + g.Ni(a)),
            a ? (g.mt("yt-remote-session-app", a.app),
            g.mt("yt-remote-session-name", a.name)) : (g.ot("yt-remote-session-app"),
            g.ot("yt-remote-session-name")),
            g.Oa("yt.mdx.remote.channelParams_", a),
            c.start(),
            $8() || uub())
        }
    }
      , wub = function() {
        var a = Z8().ph.$_gos();
        var b = e9();
        b && f9() && (rqb(a, b) || a.push(b));
        return qqb(a)
    }
      , yub = function() {
        var a = xub();
        !a && D8() && Mtb() && (a = {
            key: "cast-selector-receiver",
            name: Mtb()
        });
        return a
    }
      , xub = function() {
        var a = wub()
          , b = e9();
        b || (b = d9());
        return g.qb(a, function(c) {
            return b && k7(b, c.key) ? !0 : !1
        })
    }
      , e9 = function() {
        var a = $8();
        if (!a)
            return null;
        var b = Z8().Jl();
        return m7(b, a)
    }
      , sub = function(a) {
        a9("remote.onCastSessionChange_: " + l7(a));
        if (a) {
            var b = e9();
            if (b && b.id == a.id) {
                if (F8(b.id, "YouTube TV"),
                a.idType == "shortLived" && (a = a.token))
                    g9 && (g9.token = a),
                    (b = f9()) && b.Xs(a)
            } else
                b && h9(),
                i9(a, 1)
        } else
            f9() && h9()
    }
      , h9 = function() {
        E8() ? C8().stopSession() : B8("stopSession called before API ready.");
        var a = f9();
        a && (a.disconnect(1),
        zub(null))
    }
      , Aub = function() {
        var a = f9();
        return !!a && a.getProxyState() != 3
    }
      , a9 = function(a) {
        c8("remote", a)
    }
      , Z8 = function() {
        if (!Bub) {
            var a = g.Pa("yt.mdx.remote.screenService_");
            Bub = a ? new qub(a) : null
        }
        return Bub
    }
      , $8 = function() {
        return g.Pa("yt.mdx.remote.currentScreenId_")
    }
      , Cub = function(a) {
        g.Oa("yt.mdx.remote.currentScreenId_", a)
    }
      , Dub = function() {
        return g.Pa("yt.mdx.remote.connectData_")
    }
      , c9 = function(a) {
        g.Oa("yt.mdx.remote.connectData_", a)
    }
      , f9 = function() {
        return g.Pa("yt.mdx.remote.connection_")
    }
      , zub = function(a) {
        var b = f9();
        c9(null);
        a || Cub("");
        g.Oa("yt.mdx.remote.connection_", a);
        Y8 && (g.Mb(Y8, function(c) {
            c(a)
        }),
        Y8.length = 0);
        b && !a ? r7("yt-remote-connection-change", !1) : !b && a && r7("yt-remote-connection-change", !0)
    }
      , d9 = function() {
        var a = g.pt();
        if (!a)
            return null;
        var b = Z8();
        if (!b)
            return null;
        b = b.Jl();
        return m7(b, a)
    }
      , i9 = function(a, b) {
        $8();
        e9() && e9();
        if (j9)
            g9 = a;
        else {
            Cub(a.id);
            var c = g.Pa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
            a = new V8(X8,a,tub(),c);
            a.connect(b, Dub());
            a.subscribe("beforeDisconnect", function(d) {
                r7("yt-remote-before-disconnect", d)
            });
            a.subscribe("beforeDispose", function() {
                f9() && (f9(),
                zub(null))
            });
            a.subscribe("browserChannelAuthError", function() {
                var d = e9();
                d && d.idType == "shortLived" && (E8() ? C8().handleBrowserChannelAuthError() : B8("refreshLoungeToken called before API ready."))
            });
            zub(a)
        }
    }
      , uub = function() {
        var a = d9();
        a ? (a9("Resume connection to: " + l7(a)),
        i9(a, 0)) : (p7(),
        Ntb(),
        a9("Skipping connecting because no session screen found."))
    }
      , rub = function() {
        var a = tub();
        if (g.Gc(a)) {
            a = o7();
            var b = g.nt("yt-remote-session-name") || ""
              , c = g.nt("yt-remote-session-app") || "";
            a = {
                device: "REMOTE_CONTROL",
                id: a,
                name: b,
                app: c,
                mdxVersion: 3
            };
            a.authuser = String(g.zr("SESSION_INDEX", "0"));
            (b = g.zr("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
            g.Oa("yt.mdx.remote.channelParams_", a)
        }
    }
      , tub = function() {
        return g.Pa("yt.mdx.remote.channelParams_") || {}
    }
      , Gub = function(a, b, c) {
        g.P.call(this);
        var d = this;
        this.module = a;
        this.J = b;
        this.Jc = c;
        this.events = new g.WE(this);
        this.D = !1;
        this.G = new g.TF(64);
        this.j = new g.np(this.s3,500,this);
        this.B = new g.np(this.t3,1E3,this);
        this.N = new u7(this.Ofa,0,this);
        this.C = {};
        this.Z = new g.np(this.n4,1E3,this);
        this.K = new v7(this.seekTo,1E3,this);
        this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
            Eub(d, e)
        });
        g.Q(this, this.events);
        this.events.T(b, "onCaptionsTrackListChanged", this.Nba);
        this.events.T(b, "captionschanged", this.fba);
        this.events.T(b, "captionssettingschanged", this.A3);
        this.events.T(b, "videoplayerreset", this.lM);
        this.events.T(b, "mdxautoplaycancel", function() {
            d.Jc.xY()
        });
        b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
            Fub(d.module) || k9(d) || l9(d, 0)
        });
        a = this.Jc;
        a.Ka();
        a.subscribe("proxyStateChange", this.n1, this);
        a.subscribe("remotePlayerChange", this.mH, this);
        a.subscribe("remoteQueueChange", this.lM, this);
        a.subscribe("previousNextChange", this.j1, this);
        a.subscribe("nowAutoplaying", this.b1, this);
        a.subscribe("autoplayDismissed", this.J0, this);
        g.Q(this, this.j);
        g.Q(this, this.B);
        g.Q(this, this.N);
        g.Q(this, this.Z);
        g.Q(this, this.K);
        this.A3();
        this.lM();
        this.mH()
    }
      , Eub = function(a, b) {
        if (k9(a)) {
            a.Jc.unsubscribe("remotePlayerChange", a.mH, a);
            var c = Math.round(b.volume);
            b = !!b.muted;
            var d = N8(a.Jc);
            if (c !== d.volume || b !== d.muted)
                a.Jc.setVolume(c, b),
                a.Z.start();
            a.Jc.subscribe("remotePlayerChange", a.mH, a)
        }
    }
      , Hub = function(a) {
        a.Uc(0);
        a.j.stop();
        a.Gc(new g.TF(64))
    }
      , Iub = function(a, b) {
        if (k9(a) && !a.D) {
            var c = null;
            b && (c = {
                style: a.J.getSubtitlesUserSettings()
            },
            g.Mc(c, b));
            a.Jc.fW(a.J.getVideoData(1).videoId, c);
            a.C = N8(a.Jc).trackData
        }
    }
      , l9 = function(a, b) {
        var c = a.J.getPlaylist();
        if (c == null ? 0 : c.listId) {
            var d = c.index;
            var e = c.listId.toString()
        }
        c = a.J.getVideoData(1);
        a.Jc.playVideo(c.videoId, b, d, e, c.playerParams, c.La, Mpb(c));
        a.Gc(new g.TF(1))
    }
      , Jub = function(a, b) {
        if (b) {
            var c = a.J.getOption("captions", "tracklist", {
                d_: 1
            });
            c && c.length ? (a.J.setOption("captions", "track", b),
            a.D = !1) : (a.J.loadModule("captions"),
            a.D = !0)
        } else
            a.J.setOption("captions", "track", {})
    }
      , k9 = function(a) {
        return N8(a.Jc).videoId === a.J.getVideoData(1).videoId
    }
      , m9 = function() {
        g.U.call(this, {
            I: "div",
            S: "ytp-mdx-popup-dialog",
            X: {
                role: "dialog"
            },
            V: [{
                I: "div",
                S: "ytp-mdx-popup-dialog-inner-content",
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-title",
                    va: "B\u1ea1n \u0111\u00e3 \u0111\u0103ng xu\u1ea5t"
                }, {
                    I: "div",
                    S: "ytp-mdx-popup-description",
                    va: "C\u00e1c video m\u00e0 b\u1ea1n xem c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o nh\u1eadt k\u00fd xem v\u00e0 g\u00e2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ph\u1ea7n \u0111\u1ec1 xu\u1ea5t tr\u00ean TV. \u0110\u1ec3 tr\u00e1nh \u0111i\u1ec1u n\u00e0y, h\u00e3y h\u1ee7y r\u1ed3i \u0111\u0103ng nh\u1eadp v\u00e0o YouTube tr\u00ean m\u00e1y t\u00ednh."
                }, {
                    I: "div",
                    S: "ytp-mdx-privacy-popup-buttons",
                    V: [{
                        I: "button",
                        Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                        va: "H\u1ee7y"
                    }, {
                        I: "button",
                        Ma: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                        va: "X\u00e1c nh\u1eadn"
                    }]
                }]
            }]
        });
        this.j = new g.My(this,250);
        this.cancelButton = this.Ea("ytp-mdx-privacy-popup-cancel");
        this.confirmButton = this.Ea("ytp-mdx-privacy-popup-confirm");
        g.Q(this, this.j);
        this.T(this.cancelButton, "click", this.B);
        this.T(this.confirmButton, "click", this.C)
    }
      , n9 = function(a) {
        g.U.call(this, {
            I: "div",
            S: "ytp-remote",
            V: [{
                I: "div",
                S: "ytp-remote-display-status",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status-icon",
                    V: [g.Vra()]
                }, {
                    I: "div",
                    S: "ytp-remote-display-status-text",
                    va: "{{statustext}}"
                }]
            }]
        });
        this.api = a;
        this.j = new g.My(this,250);
        g.Q(this, this.j);
        this.T(a, "presentingplayerstatechange", this.onStateChange);
        this.Bd(a.getPlayerStateObject())
    }
      , o9 = function(a, b) {
        g.xT.call(this, "Ph\u00e1t tr\u00ean", 1, a, b);
        this.J = a;
        this.Fv = {};
        this.T(a, "onMdxReceiversChange", this.D);
        this.T(a, "presentingplayerstatechange", this.D);
        this.D()
    }
      , Kub = function(a) {
        g.dU.call(this, a);
        this.Bq = {
            key: pqb(),
            name: "M\u00e1y t\u00ednh n\u00e0y"
        };
        this.Dm = null;
        this.subscriptions = [];
        this.qT = this.Jc = null;
        this.Fv = [this.Bq];
        this.au = this.Bq;
        this.Ge = new g.TF(64);
        this.H_ = 0;
        this.Ai = -1;
        this.FH = !1;
        this.EH = this.uC = null;
        if (!g.YO(this.player.U()) && !g.qz(this.player.U())) {
            a = this.player;
            var b = g.BR(a);
            b && (b = b.Qm()) && (b = new o9(a,b),
            g.Q(this, b));
            b = new n9(a);
            g.Q(this, b);
            g.PR(a, b.element, 4);
            this.uC = new m9;
            g.Q(this, this.uC);
            g.PR(a, this.uC.element, 4);
            this.FH = !!d9()
        }
    }
      , p9 = function(a) {
        a.EH && (a.player.removeEventListener("presentingplayerstatechange", a.EH),
        a.EH = null)
    }
      , Lub = function(a, b, c) {
        a.Ge = c;
        a.player.publish("presentingplayerstatechange", new g.Xy(c,b))
    }
      , q9 = function(a, b) {
        if (b.key !== a.au.key)
            if (b.key === a.Bq.key)
                h9();
            else if (Fub(a) && Mub(a),
            a.au = b,
            !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.qz(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted"))
                    d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++)
                            h[l] = g.aU(f, l).videoId
                    } else
                        h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.La,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = Mpb(d)) && (a.locationInfo = d);
                    d = a
                }
                a9("Connecting to: " + g.Ni(b));
                b.key == "cast-selector-receiver" ? (c9(d || null),
                b = d || null,
                E8() ? C8().setLaunchParams(b) : B8("setLaunchParams called before ready.")) : !d && Aub() && $8() == b.key ? r7("yt-remote-connection-change", !0) : (h9(),
                c9(d || null),
                d = Z8().Jl(),
                (b = m7(d, b.key)) && i9(b, 1))
            }
    }
      , Fub = function(a) {
        var b = a.player.U();
        return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.FH || !a.uC ? !1 : g.kP(b) || g.mP(b)
    }
      , Mub = function(a) {
        a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.EH = function(b) {
            !a.FH && g.Zy(b, 8) && (a.player.pauseVideo(),
            p9(a))
        }
        ,
        a.player.addEventListener("presentingplayerstatechange", a.EH));
        a.uC && a.uC.qd();
        f9() || (j9 = !0)
    };
    g.k = h7.prototype;
    g.k.Rm = function() {
        i7(this);
        for (var a = [], b = 0; b < this.j.length; b++)
            a.push(this.B[this.j[b]]);
        return a
    }
    ;
    g.k.po = function() {
        i7(this);
        return this.j.concat()
    }
    ;
    g.k.has = function(a) {
        return g7(this.B, a)
    }
    ;
    g.k.isEmpty = function() {
        return this.size == 0
    }
    ;
    g.k.clear = function() {
        this.B = {};
        this.cw = this.size = this.j.length = 0
    }
    ;
    g.k.remove = function(a) {
        return this.delete(a)
    }
    ;
    g.k.delete = function(a) {
        return g7(this.B, a) ? (delete this.B[a],
        --this.size,
        this.cw++,
        this.j.length > 2 * this.size && i7(this),
        !0) : !1
    }
    ;
    g.k.get = function(a, b) {
        return g7(this.B, a) ? this.B[a] : b
    }
    ;
    g.k.set = function(a, b) {
        g7(this.B, a) || (this.size += 1,
        this.j.push(a),
        this.cw++);
        this.B[a] = b
    }
    ;
    g.k.forEach = function(a, b) {
        for (var c = this.po(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    g.k.clone = function() {
        return new h7(this)
    }
    ;
    g.k.keys = function() {
        return g.Ip(this.Bm(!0)).j()
    }
    ;
    g.k.values = function() {
        return g.Ip(this.Bm(!1)).j()
    }
    ;
    g.k.entries = function() {
        var a = this;
        return eqb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    g.k.Bm = function(a) {
        i7(this);
        var b = 0
          , c = this.cw
          , d = this
          , e = new g.nn;
        e.next = function() {
            if (c != d.cw)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length)
                return g.n1;
            var f = d.j[b++];
            return g.on(a ? f : d.B[f])
        }
        ;
        return e
    }
    ;
    var jqb = {
        cha: "atp",
        Dla: "ska",
        Uka: "que",
        hka: "mus",
        Bla: "sus",
        Kia: "dsp",
        mla: "seq",
        Xja: "mic",
        Wha: "dpa",
        jha: "cds",
        fka: "mlm",
        Uha: "dsdtr",
        oka: "ntb",
        oma: "vsp",
        iia: "scn",
        Wka: "rpe",
        Rha: "dcn",
        Sha: "dcp",
        Dka: "pas",
        Tha: "drq",
        tka: "opf",
        hia: "els",
        sla: "svq",
        gka: "mvp"
    }
      , kqb = {
        nma: "u",
        uha: "cl",
        Dja: "k",
        aja: "i",
        Jha: "cr",
        ika: "m",
        xia: "g",
        F7: "up"
    }
      , vqb = ""
      , q7 = null;
    Dqb.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.Zr("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next())
                c = g.dfa(c.value),
                c = {
                    serializedIncrementBatch: g.Xe(c.j())
                },
                g.Rt("streamzIncremented", c, {
                    sendIsolatedPayload: b
                })
        }
    }
    ;
    var s7, Lqb = Fqb("loadCastFramework") || Fqb("loadCastApplicationFramework"), Oqb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.ab(u7, g.P);
    g.k = u7.prototype;
    g.k.F5 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.wd ? this.C = g.$a() + this.ij : this.wd = g.Re(this.G, this.ij)
    }
    ;
    g.k.stop = function() {
        this.wd && (g.Na.clearTimeout(this.wd),
        this.wd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    }
    ;
    g.k.pause = function() {
        ++this.B
    }
    ;
    g.k.resume = function() {
        this.B && (--this.B,
        !this.B && this.j && (this.j = !1,
        this.K.apply(null, this.D)))
    }
    ;
    g.k.xa = function() {
        this.stop();
        u7.Tf.xa.call(this)
    }
    ;
    g.k.G5 = function() {
        this.wd && (g.Na.clearTimeout(this.wd),
        this.wd = null);
        this.C ? (this.wd = g.Re(this.G, this.C - g.$a()),
        this.C = null) : this.B ? this.j = !0 : (this.j = !1,
        this.K.apply(null, this.D))
    }
    ;
    g.z(v7, g.P);
    g.k = v7.prototype;
    g.k.PN = function(a) {
        this.C = arguments;
        this.wd || this.B ? this.j = !0 : Qqb(this)
    }
    ;
    g.k.stop = function() {
        this.wd && (g.Na.clearTimeout(this.wd),
        this.wd = null,
        this.j = !1,
        this.C = null)
    }
    ;
    g.k.pause = function() {
        this.B++
    }
    ;
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.wd || (this.j = !1,
        Qqb(this))
    }
    ;
    g.k.xa = function() {
        g.P.prototype.xa.call(this);
        this.stop()
    }
    ;
    w7.prototype.stringify = function(a) {
        return g.Na.JSON.stringify(a, void 0)
    }
    ;
    w7.prototype.parse = function(a) {
        return g.Na.JSON.parse(a, void 0)
    }
    ;
    g.ab(Rqb, g.lb);
    g.ab(Sqb, g.lb);
    var Tqb = null;
    g.ab(Vqb, g.lb);
    g.ab(Wqb, g.lb);
    g.ab(Xqb, g.lb);
    A7.prototype.debug = function() {}
    ;
    A7.prototype.info = function() {}
    ;
    A7.prototype.warning = function() {}
    ;
    var erb = {}
      , drb = {};
    g.k = B7.prototype;
    g.k.setTimeout = function(a) {
        this.fb = a
    }
    ;
    g.k.I5 = function(a) {
        a = a.target;
        var b = this.Wa;
        b && g.hj(a) == 3 ? b.PN() : this.JV(a)
    }
    ;
    g.k.JV = function(a) {
        try {
            if (a == this.j)
                a: {
                    var b = g.hj(this.j)
                      , c = this.j.B
                      , d = this.j.getStatus();
                    if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.jj(this.j) || g.kj(this.j)))) {
                        this.La || b != 4 || c == 7 || (c == 8 || d <= 0 ? x7(3) : x7(2));
                        hrb(this);
                        var e = this.j.getStatus();
                        this.Nb = e;
                        var f = crb(this);
                        if (this.K = e == 200) {
                            if (this.Ab && !this.Va) {
                                b: {
                                    if (this.j) {
                                        var h = g.lj(this.j, "X-HTTP-Initial-Response");
                                        if (h && !g.Qb(h)) {
                                            var l = h;
                                            break b
                                        }
                                    }
                                    l = null
                                }
                                if (a = l)
                                    this.Va = !0,
                                    qrb(this, a);
                                else {
                                    this.K = !1;
                                    this.G = 3;
                                    y7(12);
                                    D7(this);
                                    E7(this);
                                    break a
                                }
                            }
                            if (this.Ia) {
                                a = !0;
                                for (var m; !this.La && this.N < f.length; )
                                    if (m = frb(this, f),
                                    m == drb) {
                                        b == 4 && (this.G = 4,
                                        y7(14),
                                        a = !1);
                                        break
                                    } else if (m == erb) {
                                        this.G = 4;
                                        y7(15);
                                        a = !1;
                                        break
                                    } else
                                        qrb(this, m);
                                brb(this) && this.N != 0 && (this.B.j = this.B.j.slice(this.N),
                                this.N = 0);
                                b != 4 || f.length != 0 || this.B.B || (this.G = 1,
                                y7(16),
                                a = !1);
                                this.K = this.K && a;
                                a ? f.length > 0 && !this.Jb && (this.Jb = !0,
                                this.C.wS(this)) : (D7(this),
                                E7(this))
                            } else
                                qrb(this, f);
                            b == 4 && D7(this);
                            this.K && !this.La && (b == 4 ? irb(this.C, this) : (this.K = !1,
                            C7(this)))
                        } else
                            g.Sfa(this.j),
                            e == 400 && f.indexOf("Unknown SID") > 0 ? (this.G = 3,
                            y7(12)) : (this.G = 0,
                            y7(13)),
                            D7(this),
                            E7(this)
                    }
                }
        } catch (n) {} finally {}
    }
    ;
    g.k.cancel = function() {
        this.La = !0;
        D7(this)
    }
    ;
    g.k.H5 = function() {
        this.qa = null;
        var a = Date.now();
        a - this.rb >= 0 ? (this.Ra != 2 && (x7(3),
        y7(17)),
        D7(this),
        this.G = 2,
        E7(this)) : grb(this, this.rb - a)
    }
    ;
    g.k.getLastError = function() {
        return this.G
    }
    ;
    g.k.OQ = function() {
        return this.j
    }
    ;
    srb.prototype.cancel = function() {
        this.C = urb(this);
        if (this.B)
            this.B.cancel(),
            this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next())
                b.value.cancel();
            this.j.clear()
        }
    }
    ;
    g.k = zrb.prototype;
    g.k.KV = 8;
    g.k.Yh = 1;
    g.k.connect = function(a, b, c, d) {
        y7(0);
        this.Sb = a;
        this.La = b || {};
        c && d !== void 0 && (this.La.OSID = c,
        this.La.OAID = d);
        this.Va = this.uc;
        this.Na = nrb(this, null, this.Sb);
        I7(this)
    }
    ;
    g.k.disconnect = function() {
        Brb(this);
        if (this.Yh == 3) {
            var a = this.bb++
              , b = this.Na.clone();
            g.Ck(b, "SID", this.D);
            g.Ck(b, "RID", a);
            g.Ck(b, "TYPE", "terminate");
            L7(this, b);
            a = new B7(this,this.D,a);
            a.Ra = 2;
            a.Z = c7(b.clone());
            b = !1;
            if (g.Na.navigator && g.Na.navigator.sendBeacon)
                try {
                    b = g.Na.navigator.sendBeacon(a.Z.toString(), "")
                } catch (c) {}
            !b && g.Na.Image && ((new Image).src = a.Z,
            b = !0);
            b || (a.j = arb(a.C, null),
            a.j.send(a.Z));
            a.Ca = Date.now();
            C7(a)
        }
        Hrb(this)
    }
    ;
    g.k.Sg = function() {
        return this.Yh == 0
    }
    ;
    g.k.getState = function() {
        return this.Yh
    }
    ;
    g.k.MV = function(a) {
        if (this.K)
            if (this.K = null,
            this.Yh == 1) {
                if (!a) {
                    this.bb = Math.floor(Math.random() * 1E5);
                    a = this.bb++;
                    var b = new B7(this,"",a)
                      , c = this.Y;
                    this.Nb && (c ? (c = g.Jc(c),
                    g.Mc(c, this.Nb)) : c = this.Nb);
                    this.N !== null || this.rb || (b.Na = c,
                    c = null);
                    var d;
                    if (this.ub)
                        a: {
                            for (var e = d = 0; e < this.C.length; e++) {
                                b: {
                                    var f = this.C[e];
                                    if ("__data__"in f.map && (f = f.map.__data__,
                                    typeof f === "string")) {
                                        f = f.length;
                                        break b
                                    }
                                    f = void 0
                                }
                                if (f === void 0)
                                    break;
                                d += f;
                                if (d > 4096) {
                                    d = e;
                                    break a
                                }
                                if (d === 4096 || e === this.C.length - 1) {
                                    d = e + 1;
                                    break a
                                }
                            }
                            d = 1E3
                        }
                    else
                        d = 1E3;
                    d = Erb(this, b, d);
                    e = this.Na.clone();
                    g.Ck(e, "RID", a);
                    g.Ck(e, "CVER", 22);
                    this.Ia && g.Ck(e, "X-HTTP-Session-Id", this.Ia);
                    L7(this, e);
                    c && (this.rb ? d = "headers=" + g.Vd(g.Oga(c)) + "&" + d : this.N && g.Gk(e, this.N, c));
                    mrb(this.B, b);
                    this.Yf && g.Ck(e, "TYPE", "init");
                    this.ub ? (g.Ck(e, "$req", d),
                    g.Ck(e, "SID", "null"),
                    b.Ab = !0,
                    $qb(b, e, null)) : $qb(b, e, d);
                    this.Yh = 2
                }
            } else
                this.Yh == 3 && (a ? Frb(this, a) : this.C.length == 0 || trb(this.B) || Frb(this))
    }
    ;
    g.k.LV = function() {
        this.Z = null;
        Grb(this);
        if (this.zc && !(this.fb || this.j == null || this.Vc <= 0)) {
            var a = 2 * this.Vc;
            this.Fa = z7((0,
            g.Ya)(this.eba, this), a)
        }
    }
    ;
    g.k.eba = function() {
        this.Fa && (this.Fa = null,
        this.Va = !1,
        this.fb = !0,
        y7(10),
        G7(this),
        Grb(this))
    }
    ;
    g.k.wS = function(a) {
        this.j == a && this.zc && !this.fb && (Arb(this),
        this.fb = !0,
        y7(11))
    }
    ;
    g.k.J5 = function() {
        this.qa != null && (this.qa = null,
        G7(this),
        krb(this),
        y7(19))
    }
    ;
    g.k.sfa = function(a) {
        a ? y7(2) : y7(1)
    }
    ;
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    }
    ;
    g.k = Jrb.prototype;
    g.k.QV = function() {}
    ;
    g.k.PV = function() {}
    ;
    g.k.OV = function() {}
    ;
    g.k.NV = function() {}
    ;
    g.k.isActive = function() {
        return !0
    }
    ;
    g.k.K5 = function() {}
    ;
    g.ab(N7, g.Zc);
    N7.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Ra = !0);
        this.j.connect(this.G, this.B || void 0)
    }
    ;
    N7.prototype.close = function() {
        this.j.disconnect()
    }
    ;
    N7.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else
            this.D && (c = {},
            c.__data__ = g.Ni(a),
            a = c);
        b.C.push(new rrb(b.Xf++,a));
        b.Yh == 3 && I7(b)
    }
    ;
    N7.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        N7.Tf.xa.call(this)
    }
    ;
    g.ab(Lrb, Rqb);
    g.ab(Mrb, Sqb);
    g.ab(M7, Jrb);
    M7.prototype.QV = function() {
        this.j.dispatchEvent("m")
    }
    ;
    M7.prototype.PV = function(a) {
        this.j.dispatchEvent(new Lrb(a))
    }
    ;
    M7.prototype.OV = function(a) {
        this.j.dispatchEvent(new Mrb(a))
    }
    ;
    M7.prototype.NV = function() {
        this.j.dispatchEvent("n")
    }
    ;
    var P7 = new g.Zc;
    g.z(Prb, g.lb);
    g.k = R7.prototype;
    g.k.xw = null;
    g.k.Gt = !1;
    g.k.Jz = null;
    g.k.RN = null;
    g.k.PD = null;
    g.k.fJ = null;
    g.k.MD = null;
    g.k.eJ = null;
    g.k.zw = null;
    g.k.Aj = null;
    g.k.hJ = 0;
    g.k.P3 = null;
    g.k.gJ = null;
    g.k.yw = null;
    g.k.OD = -1;
    g.k.O2 = !0;
    g.k.ND = !1;
    g.k.QN = 0;
    g.k.dJ = null;
    var Vrb = {}
      , Urb = {};
    g.k = R7.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    }
    ;
    g.k.M5 = function(a) {
        a = a.target;
        var b = this.dJ;
        b && g.hj(a) == 3 ? b.PN() : this.RV(a)
    }
    ;
    g.k.RV = function(a) {
        try {
            if (a == this.Aj)
                a: {
                    var b = g.hj(this.Aj)
                      , c = this.Aj.B
                      , d = this.Aj.getStatus();
                    if (g.rc && !g.qc("420+")) {
                        if (b < 4)
                            break a
                    } else if (b < 3 || b == 3 && !g.jj(this.Aj))
                        break a;
                    this.ND || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.Js(3) : this.j.Js(2));
                    Yrb(this);
                    var e = this.Aj.getStatus();
                    this.OD = e;
                    var f = g.jj(this.Aj);
                    if (this.Gt = e == 200) {
                        b == 4 && S7(this);
                        if (this.Ia) {
                            for (a = !0; !this.ND && this.hJ < f.length; ) {
                                var h = Wrb(this, f);
                                if (h == Urb) {
                                    b == 4 && (this.yw = 4,
                                    Q7(15),
                                    a = !1);
                                    break
                                } else if (h == Vrb) {
                                    this.yw = 4;
                                    Q7(16);
                                    a = !1;
                                    break
                                } else
                                    $rb(this, h)
                            }
                            b == 4 && f.length == 0 && (this.yw = 1,
                            Q7(17),
                            a = !1);
                            this.Gt = this.Gt && a;
                            a || (S7(this),
                            Zrb(this))
                        } else
                            $rb(this, f);
                        this.Gt && !this.ND && (b == 4 ? this.j.UN(this) : (this.Gt = !1,
                        Trb(this)))
                    } else
                        e == 400 && f.indexOf("Unknown SID") > 0 ? (this.yw = 3,
                        Q7(13)) : (this.yw = 0,
                        Q7(14)),
                        S7(this),
                        Zrb(this)
                }
        } catch (l) {} finally {}
    }
    ;
    g.k.cancel = function() {
        this.ND = !0;
        S7(this)
    }
    ;
    g.k.L5 = function() {
        this.Jz = null;
        var a = Date.now();
        a - this.RN >= 0 ? (this.fJ != 2 && this.j.Js(3),
        S7(this),
        this.yw = 2,
        Q7(18),
        Zrb(this)) : Xrb(this, this.RN - a)
    }
    ;
    g.k.getLastError = function() {
        return this.yw
    }
    ;
    g.k = csb.prototype;
    g.k.TN = null;
    g.k.zl = null;
    g.k.JM = !1;
    g.k.VN = null;
    g.k.pm = null;
    g.k.zr = -1;
    g.k.iJ = null;
    g.k.JE = null;
    g.k.connect = function(a) {
        this.VN = a;
        a = U7(this.j, null, this.VN);
        Q7(3);
        Date.now();
        var b = this.j.Y;
        b != null ? (this.iJ = b[0],
        (this.JE = b[1]) ? (this.pm = 1,
        dsb(this)) : (this.pm = 2,
        esb(this))) : (d7(a, "MODE", "init"),
        this.zl = new R7(this),
        this.zl.xw = this.TN,
        Srb(this.zl, a, !1, null, !0),
        this.pm = 0)
    }
    ;
    g.k.c8 = function(a) {
        if (a)
            this.pm = 2,
            esb(this);
        else {
            Q7(4);
            var b = this.j;
            b.Gp = b.Xt.zr;
            Y7(b, 9)
        }
        a && this.Js(2)
    }
    ;
    g.k.SN = function(a) {
        return this.j.SN(a)
    }
    ;
    g.k.abort = function() {
        this.zl && (this.zl.cancel(),
        this.zl = null);
        this.zr = -1
    }
    ;
    g.k.Sg = function() {
        return !1
    }
    ;
    g.k.SV = function(a, b) {
        this.zr = a.OD;
        if (this.pm == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Gp = this.zr;
                    Y7(a, 2);
                    return
                }
                this.iJ = c[0];
                this.JE = c[1]
            } else
                a = this.j,
                a.Gp = this.zr,
                Y7(a, 2);
        else
            this.pm == 2 && (this.JM ? (Q7(7),
            Date.now()) : b == "11111" ? (Q7(6),
            this.JM = !0,
            Date.now(),
            this.zr = 200,
            this.zl.cancel(),
            Q7(12),
            V7(this.j, this, !0)) : (Q7(8),
            Date.now(),
            this.JM = !1))
    }
    ;
    g.k.UN = function() {
        this.zr = this.zl.OD;
        if (this.zl.Gt)
            this.pm == 0 ? this.JE ? (this.pm = 1,
            dsb(this)) : (this.pm = 2,
            esb(this)) : this.pm == 2 && (this.JM ? (Q7(12),
            V7(this.j, this, !0)) : (Q7(11),
            V7(this.j, this, !1)));
        else {
            this.pm == 0 ? Q7(9) : this.pm == 2 && Q7(10);
            var a = this.j;
            this.zl.getLastError();
            a.Gp = this.zr;
            Y7(a, 2)
        }
    }
    ;
    g.k.QD = function() {
        return this.j.QD()
    }
    ;
    g.k.isActive = function() {
        return this.j.isActive()
    }
    ;
    g.k.Js = function(a) {
        this.j.Js(a)
    }
    ;
    g.k = fsb.prototype;
    g.k.Fp = null;
    g.k.RD = null;
    g.k.Hk = null;
    g.k.eh = null;
    g.k.XN = null;
    g.k.jJ = null;
    g.k.TV = null;
    g.k.WN = null;
    g.k.SD = 0;
    g.k.O5 = 0;
    g.k.Zi = null;
    g.k.Ht = null;
    g.k.Ar = null;
    g.k.Bw = null;
    g.k.Xt = null;
    g.k.DN = null;
    g.k.Mz = -1;
    g.k.UV = -1;
    g.k.Gp = -1;
    g.k.Lz = 0;
    g.k.Kz = 0;
    g.k.Aw = 8;
    g.ab(hsb, g.lb);
    g.ab(isb, g.lb);
    g.k = fsb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        Q7(0);
        this.XN = b;
        this.RD = c || {};
        d && e !== void 0 && (this.RD.OSID = d,
        this.RD.OAID = e);
        this.Z ? (O7((0,
        g.Ya)(this.iY, this, a), 100),
        ksb(this)) : this.iY(a)
    }
    ;
    g.k.disconnect = function() {
        lsb(this);
        if (this.j == 3) {
            var a = this.SD++
              , b = this.jJ.clone();
            g.Ck(b, "SID", this.D);
            g.Ck(b, "RID", a);
            g.Ck(b, "TYPE", "terminate");
            X7(this, b);
            a = new R7(this,this.D,a);
            a.fJ = 2;
            a.MD = c7(b.clone());
            (new Image).src = a.MD.toString();
            a.PD = Date.now();
            Trb(a)
        }
        vsb(this)
    }
    ;
    g.k.iY = function(a) {
        this.Xt = new csb(this);
        this.Xt.TN = this.Fp;
        this.Xt.B = this.G;
        this.Xt.connect(a)
    }
    ;
    g.k.Sg = function() {
        return this.j == 0
    }
    ;
    g.k.getState = function() {
        return this.j
    }
    ;
    g.k.WV = function(a) {
        this.Ht = null;
        qsb(this, a)
    }
    ;
    g.k.VV = function() {
        this.Ar = null;
        this.eh = new R7(this,this.D,"rpc",this.N);
        this.eh.xw = this.Fp;
        this.eh.QN = 0;
        var a = this.TV.clone();
        g.Ck(a, "RID", "rpc");
        g.Ck(a, "SID", this.D);
        g.Ck(a, "CI", this.DN ? "0" : "1");
        g.Ck(a, "AID", this.Mz);
        X7(this, a);
        g.Ck(a, "TYPE", "xmlhttp");
        Srb(this.eh, a, !0, this.WN, !1)
    }
    ;
    g.k.SV = function(a, b) {
        if (this.j != 0 && (this.eh == a || this.Hk == a))
            if (this.Gp = a.OD,
            this.Hk == a && this.j == 3)
                if (this.Aw > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c,
                        a[0] == 0)
                            a: {
                                if (!this.Ar) {
                                    if (this.eh)
                                        if (this.eh.PD + 3E3 < this.Hk.PD)
                                            W7(this),
                                            this.eh.cancel(),
                                            this.eh = null;
                                        else
                                            break a;
                                    tsb(this);
                                    Q7(19)
                                }
                            }
                        else
                            this.UV = a[1],
                            0 < this.UV - this.Mz && a[2] < 37500 && this.DN && this.Kz == 0 && !this.Bw && (this.Bw = O7((0,
                            g.Ya)(this.P5, this), 6E3));
                    else
                        Y7(this, 11)
                } else
                    b != null && Y7(this, 11);
            else if (this.eh == a && W7(this),
            !g.Qb(b))
                for (a = this.G.parse(b),
                b = 0; b < a.length; b++)
                    c = a[b],
                    this.Mz = c[0],
                    c = c[1],
                    this.j == 2 ? c[0] == "c" ? (this.D = c[1],
                    this.WN = c[2],
                    c = c[3],
                    c != null ? this.Aw = c : this.Aw = 6,
                    this.j = 3,
                    this.Zi && this.Zi.ZV(),
                    this.TV = U7(this, this.QD() ? this.WN : null, this.XN),
                    rsb(this)) : c[0] == "stop" && Y7(this, 7) : this.j == 3 && (c[0] == "stop" ? Y7(this, 7) : c[0] != "noop" && this.Zi && this.Zi.YV(c),
                    this.Kz = 0)
    }
    ;
    g.k.P5 = function() {
        this.Bw != null && (this.Bw = null,
        this.eh.cancel(),
        this.eh = null,
        tsb(this),
        Q7(20))
    }
    ;
    g.k.UN = function(a) {
        if (this.eh == a) {
            W7(this);
            this.eh = null;
            var b = 2
        } else if (this.Hk == a)
            this.Hk = null,
            b = 1;
        else
            return;
        this.Gp = a.OD;
        if (this.j != 0)
            if (a.Gt)
                if (b == 1) {
                    b = a.zw ? a.zw.length : 0;
                    a = Date.now() - a.PD;
                    var c = P7;
                    c.dispatchEvent(new hsb(c,b,a,this.Lz));
                    jsb(this);
                    this.C.length = 0
                } else
                    rsb(this);
            else {
                c = a.getLastError();
                var d;
                if (!(d = c == 3 || c == 7 || c == 0 && this.Gp > 0)) {
                    if (d = b == 1)
                        this.Hk || this.Ht || this.j == 1 || this.Lz >= 2 ? d = !1 : (this.Ht = O7((0,
                        g.Ya)(this.WV, this, a), ssb(this, this.Lz)),
                        this.Lz++,
                        d = !0);
                    d = !(d || b == 2 && tsb(this))
                }
                if (d)
                    switch (c) {
                    case 1:
                        Y7(this, 5);
                        break;
                    case 4:
                        Y7(this, 10);
                        break;
                    case 3:
                        Y7(this, 6);
                        break;
                    case 7:
                        Y7(this, 12);
                        break;
                    default:
                        Y7(this, 2)
                    }
            }
    }
    ;
    g.k.N5 = function(a) {
        if (!g.sb(arguments, this.j))
            throw Error("Unexpected channel state: " + this.j);
    }
    ;
    g.k.rfa = function(a) {
        a ? Q7(2) : (Q7(1),
        usb(this, 8))
    }
    ;
    g.k.SN = function(a) {
        if (a)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.ej;
        a.K = !1;
        return a
    }
    ;
    g.k.isActive = function() {
        return !!this.Zi && this.Zi.isActive(this)
    }
    ;
    g.k.Js = function(a) {
        var b = P7;
        b.dispatchEvent(new isb(b,a))
    }
    ;
    g.k.QD = function() {
        return !1
    }
    ;
    g.k = wsb.prototype;
    g.k.ZV = function() {}
    ;
    g.k.YV = function() {}
    ;
    g.k.XV = function() {}
    ;
    g.k.YN = function() {}
    ;
    g.k.aW = function() {
        return {}
    }
    ;
    g.k.isActive = function() {
        return !0
    }
    ;
    g.k = xsb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    }
    ;
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    }
    ;
    g.k.clear = function() {
        this.j = [];
        this.B = []
    }
    ;
    g.k.contains = function(a) {
        return g.sb(this.j, a) || g.sb(this.B, a)
    }
    ;
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0,
        g.F8a)(b, a);
        c >= 0 ? (g.tb(b, c),
        b = !0) : b = !1;
        return b || g.ub(this.B, a)
    }
    ;
    g.k.Rm = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b)
            a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b)
            a.push(this.B[b]);
        return a
    }
    ;
    g.z(ysb, g.lb);
    g.z(zsb, g.lb);
    g.ab(Z7, g.P);
    g.k = Z7.prototype;
    g.k.jda = function() {
        this.ij = Math.min(3E5, this.ij * 2);
        this.C();
        this.B && this.start()
    }
    ;
    g.k.start = function() {
        var a = this.ij + 15E3 * Math.random();
        g.op(this.j, a);
        this.B = Date.now() + a
    }
    ;
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    }
    ;
    g.k.isActive = function() {
        return this.j.isActive()
    }
    ;
    g.k.reset = function() {
        this.j.stop();
        this.ij = 5E3
    }
    ;
    g.ab(Bsb, wsb);
    g.k = Bsb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    }
    ;
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    }
    ;
    g.k.Fh = function(a) {
        return this.C.Fh(a)
    }
    ;
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    }
    ;
    g.k.dispose = function() {
        this.qa || (this.qa = !0,
        g.gb(this.C),
        this.disconnect(),
        g.gb(this.B),
        this.B = null,
        this.ra = function() {
            return ""
        }
        )
    }
    ;
    g.k.Ka = function() {
        return this.qa
    }
    ;
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ca + "/test";
            b = this.Ca + "/bind";
            var d = new fsb(c ? c.firstTestResults : null,c ? c.secondTestResults : null,this.Ra)
              , e = this.j;
            e && (e.Zi = null);
            d.Zi = this;
            this.j = d;
            Csb(this);
            if (this.j) {
                d = g.zr("ID_TOKEN");
                var f = this.j.Fp || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Fp = f
            }
            e ? (e.getState() != 3 && nsb(e) == 0 || e.getState(),
            this.j.connect(a, b, this.N, e.D, e.Mz)) : c ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    }
    ;
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        Csb(this);
        this.j && (this.j.getState() == 3 && qsb(this.j),
        this.j.disconnect());
        this.Z = 0
    }
    ;
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Mc(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.lB() && (Csb(this),
        msb(this.j, a))
    }
    ;
    g.k.ZV = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b)
                msb(this.j, a[b])
        }
        this.publish("handlerOpened");
        Wpb(this.Na, "BROWSER_CHANNEL")
    }
    ;
    g.k.XV = function(a) {
        var b = a == 2 && this.j.Gp == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        bqb(this.Ia, "BROWSER_CHANNEL")
    }
    ;
    g.k.YN = function(a, b) {
        if (!this.B.isActive())
            this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        Ypb(this.Fa, "BROWSER_CHANNEL");
        a && this.Wa.j.aO("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.bb.j.aO("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    }
    ;
    g.k.aW = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        this.G != 0 && (a.ui = "" + this.G);
        this.Z != 0 && (a.ui = "" + this.Z);
        this.K && g.Mc(a, this.K);
        return a
    }
    ;
    g.k.YV = function(a) {
        a[0] == "S" ? this.Y = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(),
        this.j.disconnect()) : this.publish("handlerMessage", new Asb(a[0],a[1]));
        $pb(this.La, "BROWSER_CHANNEL")
    }
    ;
    g.k.lB = function() {
        return !!this.j && this.j.getState() == 3
    }
    ;
    g.k.Xs = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Va && this.j) {
            var b = this.j.Fp || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Fp = b
        }
    }
    ;
    g.k.getDeviceId = function() {
        return this.N.id
    }
    ;
    g.k.Du = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    }
    ;
    g.k.Xy = function() {
        var a = this.B;
        g.pp(a.j);
        a.start()
    }
    ;
    g.k.yea = function() {
        this.B.isActive();
        nsb(this.j) == 0 && this.connect(this.K, this.G)
    }
    ;
    $7.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.Za(this.D, d, !f),
            onError: g.Za(this.C, e),
            onTimeout: g.Za(this.G, e)
        };
        c && (a.postParams = c,
        a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.ds(b, a)
    }
    ;
    $7.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    }
    ;
    $7.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    }
    ;
    $7.prototype.G = function(a) {
        a(Error("request timed out"))
    }
    ;
    g.z(Dsb, g.Zc);
    g.k = Dsb.prototype;
    g.k.connect = function(a, b, c) {
        this.Kd.connect(a, b, c)
    }
    ;
    g.k.disconnect = function(a) {
        this.Kd.disconnect(a)
    }
    ;
    g.k.Xy = function() {
        this.Kd.Xy()
    }
    ;
    g.k.getDeviceId = function() {
        return this.Kd.getDeviceId()
    }
    ;
    g.k.Du = function() {
        return this.Kd.Du()
    }
    ;
    g.k.lB = function() {
        return this.Kd.lB()
    }
    ;
    g.k.Q5 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Kd
          , b = this.j;
        g.mt("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.DN,
            sessionId: a.j.D,
            arrayId: a.j.Mz
        });
        g.mt("yt-remote-session-screen-id", b);
        a = n7();
        b = o7();
        g.sb(a, b) || a.push(b);
        uqb(a);
        wqb()
    }
    ;
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    }
    ;
    g.k.onMessage = function(a) {
        this.dispatchEvent(new ysb(a))
    }
    ;
    g.k.onError = function(a) {
        this.dispatchEvent(new zsb(a ? 1 : 0))
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.Kd.sendMessage(a, b)
    }
    ;
    g.k.Xs = function(a) {
        this.Kd.Xs(a)
    }
    ;
    g.k.dispose = function() {
        this.Kd.dispose()
    }
    ;
    g.k = Esb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.K !== 2 && (this.C.stop(),
        this.Z = a,
        this.N = b,
        Gsb(this),
        (a = g.zr("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"],
        this.j && (this.B.device = this.j.device,
        this.B.name = this.j.name,
        this.B.app = this.j.app,
        this.B.id = this.j.id,
        this.j.waa && (this.B.mdxVersion = "" + this.j.waa),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.t8 && (this.B.cst = this.j.t8),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
        this.N !== 0 ? this.B.ui = "" + this.N : delete this.B.ui,
        Object.assign(this.B, this.Z),
        this.channel = new N7(this.pathPrefix,{
            H$: "gsessionid",
            Aaa: this.D,
            Baa: this.B
        }),
        this.channel.open(),
        this.K = 2,
        Fsb(this))
    }
    ;
    g.k.disconnect = function(a) {
        this.Y = a === void 0 ? 0 : a;
        this.C.stop();
        Gsb(this);
        this.channel && (this.Y !== 0 ? this.B.ui = "" + this.Y : delete this.B.ui,
        this.channel.close());
        this.Y = 0
    }
    ;
    g.k.Du = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    }
    ;
    g.k.Xy = function() {
        var a = this.C;
        g.pp(a.j);
        a.start()
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.channel && (Gsb(this),
        a = Object.assign({}, {
            _sc: a
        }, b),
        this.channel.send(a))
    }
    ;
    g.k.Xs = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    }
    ;
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    }
    ;
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.w(g.Fa.apply(1, arguments))))
    }
    ;
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    }
    ;
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    }
    ;
    g.k.Fh = function(a) {
        return this.G.Fh(a)
    }
    ;
    g.k.dispose = function() {
        this.qa || (this.qa = !0,
        g.gb(this.G),
        this.disconnect(),
        g.gb(this.C),
        this.Ca = function() {
            return ""
        }
        )
    }
    ;
    g.k.Ka = function() {
        return this.qa
    }
    ;
    g.z(Hsb, g.Zc);
    g.k = Hsb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    }
    ;
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    }
    ;
    g.k.Xy = function() {
        this.j.Xy()
    }
    ;
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    }
    ;
    g.k.Du = function() {
        return this.j.Du()
    }
    ;
    g.k.lB = function() {
        return this.j.K === 3
    }
    ;
    g.k.R5 = function() {
        this.dispatchEvent("channelOpened")
    }
    ;
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    }
    ;
    g.k.onMessage = function(a) {
        this.dispatchEvent(new ysb(a))
    }
    ;
    g.k.onError = function() {
        this.dispatchEvent(new zsb(this.j.Eg === 401 ? 1 : 0))
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    }
    ;
    g.k.Xs = function(a) {
        this.j.Xs(a)
    }
    ;
    g.k.dispose = function() {
        this.j.dispose()
    }
    ;
    var Psb = Date.now()
      , b8 = null
      , f8 = Array(50)
      , e8 = -1
      , g8 = !1;
    g.ab(h8, g.Ox);
    h8.prototype.Jl = function() {
        return this.screens
    }
    ;
    h8.prototype.contains = function(a) {
        return !!rqb(this.screens, a)
    }
    ;
    h8.prototype.get = function(a) {
        return a ? m7(this.screens, a) : null
    }
    ;
    h8.prototype.info = function(a) {
        c8(this.K, a)
    }
    ;
    g.z(Tsb, g.Ox);
    g.k = Tsb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.wd) && this.S1()
    }
    ;
    g.k.stop = function() {
        this.j && (this.j.abort(),
        this.j = null);
        isNaN(this.wd) || (g.Wr(this.wd),
        this.wd = NaN)
    }
    ;
    g.k.xa = function() {
        this.stop();
        g.Ox.prototype.xa.call(this)
    }
    ;
    g.k.S1 = function() {
        this.wd = NaN;
        this.j = g.ds(a8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0,
            g.Ya)(this.T5, this),
            onError: (0,
            g.Ya)(this.S5, this),
            onTimeout: (0,
            g.Ya)(this.U5, this)
        })
    }
    ;
    g.k.T5 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived",
        a.loungeToken = a.shortLivedLoungeToken.value,
        b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new j7(a), b)
    }
    ;
    g.k.S5 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= Nub.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = Nub[this.B],
        this.wd = g.Ur((0,
        g.Ya)(this.S1, this), a),
        this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    }
    ;
    g.k.U5 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    }
    ;
    var Nub = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.ab(j8, h8);
    g.k = j8.prototype;
    g.k.start = function() {
        i8(this) && this.publish("screenChange");
        !g.nt("yt-remote-lounge-token-expiration") && Usb(this);
        g.Wr(this.j);
        this.j = g.Ur((0,
        g.Ya)(this.start, this), 1E4)
    }
    ;
    g.k.add = function(a, b) {
        i8(this);
        Qsb(this, a);
        k8(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || Usb(this)
    }
    ;
    g.k.remove = function(a, b) {
        var c = i8(this);
        Ssb(this, a) && (k8(this, !1),
        c = !0);
        b(a);
        c && this.publish("screenChange")
    }
    ;
    g.k.CN = function(a, b, c, d) {
        var e = i8(this)
          , f = this.get(a.id);
        f ? (f.name != b && (f.name = b,
        k8(this, !1),
        e = !0),
        c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    }
    ;
    g.k.xa = function() {
        g.Wr(this.j);
        j8.Tf.xa.call(this)
    }
    ;
    g.k.h$ = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c]
              , f = this.get(e.screenId);
            f && (f.token = e.loungeToken,
            --b)
        }
        k8(this, !b);
        b && c8(this.K, "Missed " + b + " lounge tokens.")
    }
    ;
    g.k.g$ = function(a) {
        c8(this.K, "Requesting lounge tokens failed: " + a)
    }
    ;
    g.z(Wsb, g.Ox);
    g.k = Wsb.prototype;
    g.k.start = function() {
        var a = parseInt(g.nt("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.$a() - 144E5 < a ? 0 : a) ? l8(this) : (this.D = g.$a() + 3E5,
        g.mt("yt-remote-fast-check-period", this.D),
        this.OT())
    }
    ;
    g.k.isEmpty = function() {
        return g.Gc(this.j)
    }
    ;
    g.k.update = function() {
        Vsb("Updating availability on schedule.");
        var a = this.K()
          , b = g.xc(this.j, function(c, d) {
            return c && !!m7(a, d)
        }, this);
        Zsb(this, b)
    }
    ;
    g.k.xa = function() {
        g.Wr(this.C);
        this.C = NaN;
        this.B && (this.B.abort(),
        this.B = null);
        g.Ox.prototype.xa.call(this)
    }
    ;
    g.k.OT = function() {
        g.Wr(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = $sb(this);
        if (Opb(a)) {
            var b = a8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.Cc(a).join(",")
            }, (0,
            g.Ya)(this.Qca, this, a), (0,
            g.Ya)(this.Pca, this))
        } else
            Zsb(this, {}),
            l8(this)
    }
    ;
    g.k.Qca = function(a, b) {
        this.B = null;
        var c = g.Cc($sb(this));
        if (g.Kb(c, g.Cc(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e)
                c[a[b[e].loungeToken]] = b[e].status == "online";
            Zsb(this, c);
            l8(this)
        } else
            this.pg("Changing Screen set during request."),
            this.OT()
    }
    ;
    g.k.Pca = function(a) {
        this.pg("Screen availability failed: " + a);
        this.B = null;
        l8(this)
    }
    ;
    g.k.pg = function(a) {
        c8("OnlineScreenService", a)
    }
    ;
    g.ab(m8, h8);
    g.k = m8.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"),
        this.j.isEmpty() || this.publish("onlineScreenChange"))
    }
    ;
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    }
    ;
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    }
    ;
    g.k.CN = function(a, b, c, d) {
        this.B.contains(a) ? this.B.CN(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name,
        c8(this.K, a),
        d(Error(a)))
    }
    ;
    g.k.Jl = function(a) {
        return a ? this.screens : g.yb(this.screens, g.sn(this.C, function(b) {
            return !this.contains(b)
        }, this))
    }
    ;
    g.k.bW = function() {
        return g.sn(this.Jl(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    }
    ;
    g.k.cW = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Tsb(this.D,a,b,c,d);
        l.subscribe("pairingComplete", function(m, n) {
            g.gb(l);
            e(n8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.gb(l);
            f(m)
        });
        l.start();
        return (0,
        g.Ya)(l.stop, l)
    }
    ;
    g.k.V5 = function(a, b, c, d) {
        g.ds(a8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0,
            g.Ya)(function(e, f) {
                e = new j7(f.screen || {});
                if (!e.name || dtb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); dtb(this, l); ) {
                            h++;
                            if (h > 20)
                                break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(n8(this, e))
            }, this),
            onError: (0,
            g.Ya)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0,
            g.Ya)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    }
    ;
    g.k.xa = function() {
        g.gb(this.B);
        g.gb(this.j);
        m8.Tf.xa.call(this)
    }
    ;
    g.k.r$ = function() {
        ftb(this);
        this.publish("screenChange");
        this.j.update()
    }
    ;
    m8.prototype.dispose = m8.prototype.dispose;
    g.ab(o8, g.Ox);
    g.k = o8.prototype;
    g.k.Tj = function(a) {
        this.Ka() || (a && (q8(this, "" + a),
        this.publish("sessionFailed")),
        this.j = null,
        this.publish("sessionScreen", null))
    }
    ;
    g.k.info = function(a) {
        c8(this.Ia, a)
    }
    ;
    g.k.dW = function() {
        return null
    }
    ;
    g.k.jU = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a,[]),
        b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0,
        g.Ya)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0,
        g.Ya)(function() {
            q8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    }
    ;
    g.k.xa = function() {
        this.jU("");
        o8.Tf.xa.call(this)
    }
    ;
    g.z(r8, o8);
    g.k = r8.prototype;
    g.k.hU = function(a) {
        if (this.C) {
            if (this.C == a)
                return;
            q8(this, "Overriding cast session with new session object");
            rtb(this);
            this.Ca = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
        mtb(this, "getMdxSessionStatus")
    }
    ;
    g.k.zB = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Ni(a))
    }
    ;
    g.k.stop = function() {
        this.C ? this.C.stop((0,
        g.Ya)(function() {
            this.Tj()
        }, this), (0,
        g.Ya)(function() {
            this.Tj(Error("Failed to stop receiver app."))
        }, this)) : this.Tj(Error("Stopping cast device without session."))
    }
    ;
    g.k.jU = function() {}
    ;
    g.k.xa = function() {
        this.info("disposeInternal");
        rtb(this);
        this.C && (this.C.removeUpdateListener(this.ra),
        this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa));
        this.C = null;
        o8.prototype.xa.call(this)
    }
    ;
    g.k.wda = function(a, b) {
        if (!this.Ka())
            if (b)
                if (b = e7(b),
                g.Va(b))
                    switch (a = "" + b.type,
                    b = b.data || {},
                    this.info("onYoutubeMessage_: " + a + " " + g.Ni(b)),
                    a) {
                    case "mdxSessionStatus":
                        jtb(this, b);
                        break;
                    case "loungeToken":
                        ntb(this, b);
                        break;
                    default:
                        q8(this, "Unknown youtube message: " + a)
                    }
                else
                    q8(this, "Unable to parse message.");
            else
                q8(this, "No data in message.")
    }
    ;
    g.k.uZ = function(a, b, c, d) {
        g.Wr(this.Z);
        this.Z = 0;
        ctb(this.D, this.B.label, a, this.B.friendlyName, (0,
        g.Ya)(function(e) {
            e ? b(e) : d >= 0 ? (q8(this, "Screen " + a + " appears to be offline. " + d + " retries left."),
            this.Z = g.Ur((0,
            g.Ya)(this.uZ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    }
    ;
    g.k.dW = function() {
        return this.C
    }
    ;
    g.k.W5 = function(a) {
        this.Ka() || a || (q8(this, "Cast session died."),
        this.Tj())
    }
    ;
    g.z(s8, o8);
    g.k = s8.prototype;
    g.k.hU = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.La)
    }
    ;
    g.k.zB = function(a) {
        this.Na = a;
        this.qa()
    }
    ;
    g.k.stop = function() {
        ztb(this);
        this.C ? this.C.stop((0,
        g.Ya)(this.Tj, this, null), (0,
        g.Ya)(this.Tj, this, "Failed to stop DIAL device.")) : this.Tj()
    }
    ;
    g.k.xa = function() {
        ztb(this);
        this.C && this.C.removeUpdateListener(this.La);
        this.C = null;
        o8.prototype.xa.call(this)
    }
    ;
    g.k.X5 = function(a) {
        this.Ka() || a || (q8(this, "DIAL session died."),
        this.G(),
        this.G = function() {}
        ,
        this.Tj())
    }
    ;
    g.z(v8, o8);
    v8.prototype.stop = function() {
        this.Tj()
    }
    ;
    v8.prototype.hU = function() {}
    ;
    v8.prototype.zB = function() {
        g.Wr(this.C);
        this.C = NaN;
        var a = m7(this.D.Jl(), this.B.label);
        a ? p8(this, a) : this.Tj(Error("No such screen"))
    }
    ;
    v8.prototype.xa = function() {
        g.Wr(this.C);
        this.C = NaN;
        o8.prototype.xa.call(this)
    }
    ;
    g.z(w8, g.Ox);
    g.k = w8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z,[chrome.cast.Capability.AUDIO_OUT]);
        g.Zr("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0,
        g.Ya)(this.yca, this);
        c = new chrome.cast.ApiConfig(c,(0,
        g.Ya)(this.q1, this),e,d,a);
        c.customDialLaunchCallback = (0,
        g.Ya)(this.uba, this);
        chrome.cast.initialize(c, (0,
        g.Ya)(function() {
            this.Ka() || (chrome.cast.addReceiverActionListener(this.G),
            Msb(),
            this.B.subscribe("onlineScreenChange", (0,
            g.Ya)(this.eW, this)),
            this.C = Ctb(this),
            chrome.cast.setCustomReceivers(this.C, function() {}, (0,
            g.Ya)(function(f) {
                this.pg("Failed to set initial custom receivers: " + g.Ni(f))
            }, this)),
            this.publish("yt-remote-cast2-availability-change", y8(this)),
            b(!0))
        }, this), (0,
        g.Ya)(function(f) {
            this.pg("Failed to initialize API: " + g.Ni(f));
            b(!1)
        }, this))
    }
    ;
    g.k.Jea = function(a, b) {
        x8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a)
                x8("Unsetting old screen status: " + this.j.B.friendlyName),
                z8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = m7(this.B.Jl(), a);
                if (!a) {
                    x8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    x8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = Atb(this, a);
                c || (x8("setConnectedScreenStatus: Connected receiver not custom..."),
                c = new chrome.cast.Receiver(a.uuid ? a.uuid : a.id,a.name),
                c.receiverType = chrome.cast.ReceiverType.CUSTOM,
                this.C.push(c),
                chrome.cast.setCustomReceivers(this.C, function() {}, (0,
                g.Ya)(function(d) {
                    this.pg("Failed to set initial custom receivers: " + g.Ni(d))
                }, this)));
                x8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                z8(this, new v8(this.B,c), !0)
            }
            this.j.jU(b)
        } else
            x8("setConnectedScreenStatus: no screen.")
    }
    ;
    g.k.Mea = function(a) {
        this.Ka() ? this.pg("Setting connection data on disposed cast v2") : this.j ? this.j.zB(a) : this.pg("Setting connection data without a session")
    }
    ;
    g.k.Z5 = function() {
        this.Ka() ? this.pg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(),
        z8(this, null)) : x8("Stopping non-existing session")
    }
    ;
    g.k.requestSession = function() {
        chrome.cast.requestSession((0,
        g.Ya)(this.q1, this), (0,
        g.Ya)(this.Tca, this))
    }
    ;
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0,
        g.Ya)(this.eW, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = Jsb
          , b = g.Pa("yt.mdx.remote.debug.handlers_");
        g.ub(b || [], a);
        g.gb(this.j);
        g.Ox.prototype.xa.call(this)
    }
    ;
    g.k.pg = function(a) {
        c8("Controller", a)
    }
    ;
    g.k.t1 = function(a, b) {
        this.j == a && (b || z8(this, null),
        this.publish("yt-remote-cast2-session-change", b))
    }
    ;
    g.k.vca = function(a, b) {
        if (!this.Ka())
            if (a)
                switch (a.friendlyName = chrome.cast.unescape(a.friendlyName),
                x8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b),
                b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label)
                            x8("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName),
                            this.j.stop();
                        else {
                            x8("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                    case chrome.cast.ReceiverType.CUSTOM:
                        z8(this, new v8(this.B,a));
                        break;
                    case chrome.cast.ReceiverType.DIAL:
                        z8(this, new s8(this.B,a,this.D,this.config_));
                        break;
                    case chrome.cast.ReceiverType.CAST:
                        z8(this, new r8(this.B,a,this.config_));
                        break;
                    default:
                        this.pg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.pg("Stopping receiver w/o session: " + a.friendlyName)
                }
            else
                this.pg("onReceiverAction_ called without receiver.")
    }
    ;
    g.k.uba = function(a) {
        if (this.Ka())
            return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.pg("Not DIAL receiver: " + b.friendlyName),
        b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label)
            return this.pg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName),
            Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j)
                return x8("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j),
                Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.pg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            z8(this, new s8(this.B,b,this.D,this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {},
        c = a.screenId || null,
        t8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = wtb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Cr(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")),
        a = xtb(b, c)) : a = xtb(b, c)) : a = utb(b);
        return a
    }
    ;
    g.k.q1 = function(a) {
        var b = this;
        if (!this.Ka() && !this.K) {
            x8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST)
                        x8("Got resumed cast session before resumed mdx connection."),
                        c.friendlyName = chrome.cast.unescape(c.friendlyName),
                        z8(this, new r8(this.B,c,this.config_), !0);
                    else {
                        this.pg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B
                  , e = m7(this.B.Jl(), d.label);
                e && k7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x8("onSessionEstablished_: manual to cast session change " + c.friendlyName),
                g.gb(this.j),
                this.j = new r8(this.B,c,this.config_),
                this.j.subscribe("sessionScreen", (0,
                g.Ya)(this.t1, this, this.j)),
                this.j.subscribe("sessionFailed", function() {
                    return Btb(b, b.j)
                }),
                this.j.zB(null));
                this.j.hU(a)
            }
        }
    }
    ;
    g.k.Y5 = function() {
        return this.j ? this.j.dW() : null
    }
    ;
    g.k.Tca = function(a) {
        this.Ka() || (this.pg("Failed to estabilish a session: " + g.Ni(a)),
        a.code != chrome.cast.ErrorCode.CANCEL && z8(this, null),
        this.publish("yt-remote-cast2-session-failed"))
    }
    ;
    g.k.yca = function(a) {
        x8("Receiver availability updated: " + a);
        if (!this.Ka()) {
            var b = y8(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            y8(this) != b && this.publish("yt-remote-cast2-availability-change", y8(this))
        }
    }
    ;
    g.k.eW = function() {
        this.Ka() || (this.C = Ctb(this),
        x8("Updating custom receivers: " + g.Ni(this.C)),
        chrome.cast.setCustomReceivers(this.C, function() {}, (0,
        g.Ya)(function() {
            this.pg("Failed to set custom receivers.")
        }, this)),
        this.publish("yt-remote-cast2-availability-change", y8(this)))
    }
    ;
    w8.prototype.setLaunchParams = w8.prototype.Mea;
    w8.prototype.setConnectedScreenStatus = w8.prototype.Jea;
    w8.prototype.stopSession = w8.prototype.Z5;
    w8.prototype.getCastSession = w8.prototype.Y5;
    w8.prototype.requestSession = w8.prototype.requestSession;
    w8.prototype.init = w8.prototype.init;
    w8.prototype.dispose = w8.prototype.dispose;
    var Ltb = [];
    g.k = G8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Rtb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index,
        this.listId = a.listId,
        this.videoId = a.videoId,
        this.playerState = a.playerState,
        this.volume = a.volume,
        this.muted = a.muted,
        this.audioTrackId = a.audioTrackId,
        this.trackData = a.trackData,
        this.jq = a.hasPrevious,
        this.Ml = a.hasNext,
        this.N = a.playerTime,
        this.K = a.playerTimeAt,
        this.D = a.seekableStart,
        this.j = a.seekableEnd,
        this.G = a.duration,
        this.Z = a.loadedTime,
        this.C = a.liveIngestionTime,
        this.B = !isNaN(this.C))
    }
    ;
    g.k.isPlaying = function() {
        return this.playerState == 1
    }
    ;
    g.k.isBuffering = function() {
        return this.playerState == 3
    }
    ;
    g.k.jj = function() {
        return this.playerState == 1081
    }
    ;
    g.k.mp = function(a) {
        this.G = isNaN(a) ? 0 : a
    }
    ;
    g.k.getDuration = function() {
        return this.B ? this.G + H8(this) : this.G
    }
    ;
    g.k.clone = function() {
        return new G8(Stb(this))
    }
    ;
    g.z(M8, g.Ox);
    g.k = M8.prototype;
    g.k.getState = function() {
        return this.C
    }
    ;
    g.k.Du = function() {
        return this.D.getReconnectTimeout()
    }
    ;
    g.k.Xy = function() {
        this.D.reconnect()
    }
    ;
    g.k.play = function() {
        O8(this) ? (this.j ? this.j.play(null, g.cd, S8(this, "play")) : R8(this, "play"),
        Vtb(this, 1, J8(N8(this))),
        this.publish("remotePlayerChange")) : P8(this, this.play)
    }
    ;
    g.k.pause = function() {
        O8(this) ? (this.j ? this.j.pause(null, g.cd, S8(this, "pause")) : R8(this, "pause"),
        Vtb(this, 2, J8(N8(this))),
        this.publish("remotePlayerChange")) : P8(this, this.pause)
    }
    ;
    g.k.seekTo = function(a) {
        if (O8(this)) {
            if (this.j) {
                var b = N8(this)
                  , c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.cd, S8(this, "seekTo", {
                    newTime: a
                }))
            } else
                R8(this, "seekTo", {
                    newTime: a
                });
            Vtb(this, 3, a);
            this.publish("remotePlayerChange")
        } else
            P8(this, g.Za(this.seekTo, a))
    }
    ;
    g.k.stop = function() {
        if (O8(this)) {
            this.j ? this.j.stop(null, g.cd, S8(this, "stopVideo")) : R8(this, "stopVideo");
            var a = N8(this);
            a.index = -1;
            a.videoId = "";
            Rtb(a);
            Q8(this, a);
            this.publish("remotePlayerChange")
        } else
            P8(this, this.stop)
    }
    ;
    g.k.setVolume = function(a, b) {
        if (O8(this)) {
            var c = N8(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0,
                    g.Ya)(function() {
                        d8("set receiver volume: " + d)
                    }, this), (0,
                    g.Ya)(function() {
                        this.pg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0,
                g.Ya)(function() {
                    d8("set receiver muted: " + b)
                }, this), (0,
                g.Ya)(function() {
                    this.pg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                R8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            Q8(this, c)
        } else
            P8(this, g.Za(this.setVolume, a, b))
    }
    ;
    g.k.fW = function(a, b) {
        if (O8(this)) {
            var c = N8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            },
            a.style = g.Ni(b.style),
            g.Mc(a, c.trackData));
            R8(this, "setSubtitlesTrack", a);
            Q8(this, c)
        } else
            P8(this, g.Za(this.fW, a, b))
    }
    ;
    g.k.setAudioTrack = function(a, b) {
        O8(this) ? (b = b.getLanguageInfo().getId(),
        R8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }),
        a = N8(this),
        a.audioTrackId = b,
        Q8(this, a)) : P8(this, g.Za(this.setAudioTrack, a, b))
    }
    ;
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = N8(this)
          , m = {
            videoId: a
        };
        c !== void 0 && (m.currentIndex = c);
        K8(l, a, c || 0);
        b !== void 0 && (I8(l, b),
        m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Ni(h));
        R8(this, "setPlaylist", m);
        d || Q8(this, l)
    }
    ;
    g.k.DM = function(a, b) {
        if (O8(this)) {
            if (a && b) {
                var c = N8(this);
                K8(c, a, b);
                Q8(this, c)
            }
            R8(this, "previous")
        } else
            P8(this, g.Za(this.DM, a, b))
    }
    ;
    g.k.nextVideo = function(a, b) {
        if (O8(this)) {
            if (a && b) {
                var c = N8(this);
                K8(c, a, b);
                Q8(this, c)
            }
            R8(this, "next")
        } else
            P8(this, g.Za(this.nextVideo, a, b))
    }
    ;
    g.k.tP = function() {
        if (O8(this)) {
            R8(this, "clearPlaylist");
            var a = N8(this);
            a.reset();
            Q8(this, a);
            this.publish("remotePlayerChange")
        } else
            P8(this, this.tP)
    }
    ;
    g.k.xY = function() {
        O8(this) ? R8(this, "dismissAutoplay") : P8(this, this.xY)
    }
    ;
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.Ox.prototype.dispose.call(this)
    }
    ;
    g.k.xa = function() {
        Utb(this);
        this.D = null;
        this.G.clear();
        L8(this, null);
        g.Ox.prototype.xa.call(this)
    }
    ;
    g.k.nU = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty(); )
                    b = a = this.G,
                    b.j.length === 0 && (b.j = b.B,
                    b.j.reverse(),
                    b.B = []),
                    a.j.pop().apply(this);
            else
                a == 3 && this.dispose()
        }
    }
    ;
    g.k.tca = function(a, b) {
        this.publish(a, b)
    }
    ;
    g.k.kba = function(a) {
        if (!a)
            this.cH(null),
            L8(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = N8(this)
              , c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted)
                d8("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
                b.volume = c,
                b.muted = !!a.muted,
                Q8(this, b)
        }
    }
    ;
    g.k.cH = function(a) {
        d8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a)
            this.j.addUpdateListener(this.Z),
            Wtb(this),
            this.publish("remotePlayerChange")
    }
    ;
    g.k.jba = function(a) {
        a ? (Wtb(this),
        this.publish("remotePlayerChange")) : this.cH(null)
    }
    ;
    g.k.PU = function() {
        R8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    }
    ;
    g.k.mba = function() {
        var a = Otb();
        a && L8(this, a)
    }
    ;
    g.k.pg = function(a) {
        c8("CP", a)
    }
    ;
    g.z(V8, g.Ox);
    g.k = V8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId
              , d = b.videoId
              , e = b.videoIds
              , f = b.playerParams
              , h = b.clickTrackingParams
              , l = b.index
              , m = {
                videoId: d
            }
              , n = b.currentTime
              , p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.La && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            I8(this.j, n);
            this.G = "UNSUPPORTED";
            c = this.La ? "setInitialState" : "setPlaylist";
            T8("Connecting with " + c + " and params: " + g.Ni(m));
            this.B.connect({
                method: c,
                params: g.Ni(m)
            }, a, xqb())
        } else
            T8("Connecting without params"),
            this.B.connect({}, a, xqb());
        $tb(this)
    }
    ;
    g.k.Xs = function(a) {
        this.B.Xs(a)
    }
    ;
    g.k.dispose = function() {
        this.Ka() || (g.Oa("yt.mdx.remote.remoteClient_", null),
        this.publish("beforeDispose"),
        U8(this, 3));
        g.Ox.prototype.dispose.call(this)
    }
    ;
    g.k.xa = function() {
        aub(this);
        cub(this);
        bub(this);
        g.Wr(this.Z);
        this.Z = NaN;
        g.Wr(this.Y);
        this.Y = NaN;
        this.D = null;
        g.bt(this.qa);
        this.qa.length = 0;
        this.B.dispose();
        g.Ox.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    }
    ;
    g.k.u_ = function(a) {
        if (!this.C || this.C.length === 0)
            return !1;
        for (var b = g.v(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a))
                return !1;
        return !0
    }
    ;
    g.k.O9 = function() {
        var a = 3;
        this.Ka() || (a = 0,
        isNaN(this.TF()) ? this.B.lB() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    }
    ;
    g.k.yA = function(a) {
        T8("Disconnecting with " + a);
        g.Oa("yt.mdx.remote.remoteClient_", null);
        aub(this);
        this.publish("beforeDisconnect", a);
        a == 1 && p7();
        this.B.disconnect(a);
        this.dispose()
    }
    ;
    g.k.I9 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(),
        K8(a, this.D, a.index));
        return Stb(a)
    }
    ;
    g.k.Pea = function(a) {
        var b = this
          , c = new G8(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId,
        g.Wr(this.Z),
        this.Z = g.Ur(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && W8(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J8(this.j) == J8(c) && g.Ni(this.j.trackData) == g.Ni(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Mb(d, function(e) {
            this.publish(e)
        }, this)
    }
    ;
    g.k.pZ = function() {
        var a = this.B.getDeviceId()
          , b = g.qb(this.C, function(c) {
            return c.type == "REMOTE_CONTROL" && c.id != a
        });
        return b ? b.id : ""
    }
    ;
    g.k.TF = function() {
        return this.B.Du()
    }
    ;
    g.k.r9 = function() {
        return this.G || "UNSUPPORTED"
    }
    ;
    g.k.s9 = function() {
        return this.N || ""
    }
    ;
    g.k.a6 = function() {
        !isNaN(this.TF()) && this.B.Xy()
    }
    ;
    g.k.Gea = function(a, b) {
        W8(this, a, b);
        eub(this)
    }
    ;
    g.k.gW = function() {
        var a = g.os("SAPISID", "") || g.os("__Secure-1PAPISID") || ""
          , b = g.os("__Secure-3PAPISID", "") || "";
        if (!a && !b)
            return "";
        a = g.Xe(g.We(a), 2);
        b = g.Xe(g.We(b), 2);
        return g.Xe(g.We("," + a + "," + b), 2)
    }
    ;
    V8.prototype.subscribe = V8.prototype.subscribe;
    V8.prototype.unsubscribeByKey = V8.prototype.Fh;
    V8.prototype.getProxyState = V8.prototype.O9;
    V8.prototype.disconnect = V8.prototype.yA;
    V8.prototype.getPlayerContextData = V8.prototype.I9;
    V8.prototype.setPlayerContextData = V8.prototype.Pea;
    V8.prototype.getOtherConnectedRemoteId = V8.prototype.pZ;
    V8.prototype.getReconnectTimeout = V8.prototype.TF;
    V8.prototype.getAutoplayMode = V8.prototype.r9;
    V8.prototype.getAutoplayVideoId = V8.prototype.s9;
    V8.prototype.reconnect = V8.prototype.a6;
    V8.prototype.sendMessage = V8.prototype.Gea;
    V8.prototype.getXsrfToken = V8.prototype.gW;
    V8.prototype.isCapabilitySupportedOnConnectedDevices = V8.prototype.u_;
    g.z(qub, h8);
    g.k = qub.prototype;
    g.k.Jl = function(a) {
        return this.ph.$_gs(a)
    }
    ;
    g.k.contains = function(a) {
        return !!this.ph.$_c(a)
    }
    ;
    g.k.get = function(a) {
        return this.ph.$_g(a)
    }
    ;
    g.k.start = function() {
        this.ph.$_st()
    }
    ;
    g.k.add = function(a, b, c) {
        this.ph.$_a(a, b, c)
    }
    ;
    g.k.remove = function(a, b, c) {
        this.ph.$_r(a, b, c)
    }
    ;
    g.k.CN = function(a, b, c, d) {
        this.ph.$_un(a, b, c, d)
    }
    ;
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a)
            this.ph.$_ubk(this.j[a]);
        this.j.length = 0;
        this.ph = null;
        h8.prototype.xa.call(this)
    }
    ;
    g.k.b6 = function() {
        this.publish("screenChange")
    }
    ;
    g.k.cca = function() {
        this.publish("onlineScreenChange")
    }
    ;
    m8.prototype.$_st = m8.prototype.start;
    m8.prototype.$_gspc = m8.prototype.V5;
    m8.prototype.$_gsppc = m8.prototype.cW;
    m8.prototype.$_c = m8.prototype.contains;
    m8.prototype.$_g = m8.prototype.get;
    m8.prototype.$_a = m8.prototype.add;
    m8.prototype.$_un = m8.prototype.CN;
    m8.prototype.$_r = m8.prototype.remove;
    m8.prototype.$_gs = m8.prototype.Jl;
    m8.prototype.$_gos = m8.prototype.bW;
    m8.prototype.$_s = m8.prototype.subscribe;
    m8.prototype.$_ubk = m8.prototype.Fh;
    var g9 = null
      , j9 = !1
      , X8 = null
      , Y8 = null
      , Bub = null
      , b9 = [];
    g.z(Gub, g.P);
    g.k = Gub.prototype;
    g.k.xa = function() {
        g.P.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Jc;
        a.unsubscribe("proxyStateChange", this.n1, this);
        a.unsubscribe("remotePlayerChange", this.mH, this);
        a.unsubscribe("remoteQueueChange", this.lM, this);
        a.unsubscribe("previousNextChange", this.j1, this);
        a.unsubscribe("nowAutoplaying", this.b1, this);
        a.unsubscribe("autoplayDismissed", this.J0, this);
        this.Jc = this.module = null
    }
    ;
    g.k.Ll = function(a) {
        var b = g.Fa.apply(1, arguments);
        if (this.Jc.C != 2)
            if (k9(this)) {
                if (!N8(this.Jc).jj() || a !== "control_seek")
                    switch (a) {
                    case "control_toggle_play_pause":
                        N8(this.Jc).isPlaying() ? this.Jc.pause() : this.Jc.play();
                        break;
                    case "control_play":
                        this.Jc.play();
                        break;
                    case "control_pause":
                        this.Jc.pause();
                        break;
                    case "control_seek":
                        this.K.PN(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Iub(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                    }
            } else
                switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b = this.J.getCurrentTime();
                    l9(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    l9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Iub(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
                }
    }
    ;
    g.k.fba = function(a) {
        this.N.F5(a)
    }
    ;
    g.k.Ofa = function(a) {
        this.Ll("control_subtitles_set_track", g.Gc(a) ? null : a)
    }
    ;
    g.k.A3 = function() {
        var a = this.J.getOption("captions", "track");
        g.Gc(a) || Iub(this, a)
    }
    ;
    g.k.Uc = function(a) {
        this.module.Uc(a, this.J.getVideoData().lengthSeconds)
    }
    ;
    g.k.Nba = function() {
        g.Gc(this.C) || Jub(this, this.C);
        this.D = !1
    }
    ;
    g.k.n1 = function(a, b) {
        this.B.stop();
        b === 2 && this.t3()
    }
    ;
    g.k.mH = function() {
        if (k9(this)) {
            this.j.stop();
            var a = N8(this.Jc);
            switch (a.playerState) {
            case 1080:
            case 1081:
            case 1084:
            case 1085:
                this.module.Ai = 1;
                break;
            case 1082:
            case 1083:
                this.module.Ai = 0;
                break;
            default:
                this.module.Ai = -1
            }
            switch (a.playerState) {
            case 1081:
            case 1:
                this.Gc(new g.TF(8));
                this.s3();
                break;
            case 1085:
            case 3:
                this.Gc(new g.TF(9));
                break;
            case 1083:
            case 0:
                this.Gc(new g.TF(2));
                this.K.stop();
                this.Uc(this.J.getVideoData().lengthSeconds);
                break;
            case 1084:
                this.Gc(new g.TF(4));
                break;
            case 2:
                this.Gc(new g.TF(4));
                this.Uc(J8(a));
                break;
            case -1:
                this.Gc(new g.TF(64));
                break;
            case -1E3:
                this.Gc(new g.TF(128,{
                    errorCode: "mdx.remoteerror",
                    errorMessage: "Video n\u00e0y kh\u00f4ng kh\u1ea3 d\u1ee5ng \u0111\u1ec3 ph\u00e1t l\u1ea1i t\u1eeb xa.",
                    AA: 2
                }))
            }
            a = N8(this.Jc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a,
            Jub(this, a));
            a = N8(this.Jc);
            a.volume === -1 || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.n4()
        } else
            Hub(this)
    }
    ;
    g.k.j1 = function() {
        this.J.publish("mdxpreviousnextchange")
    }
    ;
    g.k.lM = function() {
        k9(this) || Hub(this)
    }
    ;
    g.k.b1 = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    }
    ;
    g.k.J0 = function() {
        this.J.publish("mdxautoplaycanceled")
    }
    ;
    g.k.setAudioTrack = function(a) {
        k9(this) && this.Jc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    }
    ;
    g.k.seekTo = function(a, b) {
        N8(this.Jc).playerState === -1 ? l9(this, a) : b && this.Jc.seekTo(a)
    }
    ;
    g.k.n4 = function() {
        var a = this;
        if (k9(this)) {
            var b = N8(this.Jc);
            this.events.Qc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                Eub(a, c)
            })
        }
    }
    ;
    g.k.s3 = function() {
        this.j.stop();
        if (!this.Jc.Ka()) {
            var a = N8(this.Jc);
            a.isPlaying() && this.Gc(new g.TF(8));
            this.Uc(J8(a));
            this.j.start()
        }
    }
    ;
    g.k.t3 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Jc.Du();
        this.Jc.C == 2 && !isNaN(a) && this.B.start()
    }
    ;
    g.k.Gc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.ZF(b, a)) {
            var c = g.W(a, 2);
            c !== g.W(this.G, 2) && this.J.SC(c);
            this.G = a;
            Lub(this.module, b, a)
        }
    }
    ;
    g.z(m9, g.U);
    m9.prototype.qd = function() {
        this.j.show()
    }
    ;
    m9.prototype.Mb = function() {
        this.j.hide()
    }
    ;
    m9.prototype.B = function() {
        r7("mdx-privacy-popup-cancel");
        this.Mb()
    }
    ;
    m9.prototype.C = function() {
        r7("mdx-privacy-popup-confirm");
        this.Mb()
    }
    ;
    g.z(n9, g.U);
    n9.prototype.onStateChange = function(a) {
        this.Bd(a.state)
    }
    ;
    n9.prototype.Bd = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.W(a, 128) ? g.LD("L\u1ed7i tr\u00ean $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.LD("\u0110ang ph\u00e1t tr\u00ean $RECEIVER_NAME", b) : g.LD("\u0110\u00e3 k\u1ebft n\u1ed1i v\u1edbi $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else
            this.j.hide()
    }
    ;
    g.z(o9, g.xT);
    o9.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && a.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.Fv = g.Nb(a, this.j, this),
        g.yT(this, g.Il(a, this.j)),
        a = this.J.getOption("remote", "currentReceiver"),
        a = this.j(a),
        this.options[a] && this.aj(a),
        this.enable(!0)) : this.enable(!1)
    }
    ;
    o9.prototype.j = function(a) {
        return a.key
    }
    ;
    o9.prototype.Bl = function(a) {
        return a === "cast-selector-receiver" ? "Truy\u1ec1n..." : this.Fv[a].name
    }
    ;
    o9.prototype.Mg = function(a) {
        g.xT.prototype.Mg.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Fv[a]);
        this.Gb.Mb()
    }
    ;
    g.z(Kub, g.dU);
    g.k = Kub.prototype;
    g.k.create = function() {
        var a = this.player.U()
          , b = g.XO(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        vub(b, a);
        this.subscriptions.push(g.Pv("yt-remote-before-disconnect", this.dba, this));
        this.subscriptions.push(g.Pv("yt-remote-connection-change", this.zca, this));
        this.subscriptions.push(g.Pv("yt-remote-receiver-availability-change", this.m1, this));
        this.subscriptions.push(g.Pv("yt-remote-auto-connect", this.xca, this));
        this.subscriptions.push(g.Pv("yt-remote-receiver-resumed", this.wca, this));
        this.subscriptions.push(g.Pv("mdx-privacy-popup-confirm", this.Tda, this));
        this.subscriptions.push(g.Pv("mdx-privacy-popup-cancel", this.Sda, this));
        this.m1()
    }
    ;
    g.k.load = function() {
        this.player.cancelPlayback();
        g.dU.prototype.load.call(this);
        this.Dm = new Gub(this,this.player,this.Jc);
        var a = (a = Dub()) ? a.currentTime : 0;
        var b = Aub() ? new M8(f9(),void 0) : null;
        a == 0 && b && (a = J8(N8(b)));
        a !== 0 && this.Uc(a);
        Lub(this, this.Ge, this.Ge);
        this.player.Vq(6)
    }
    ;
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.au = this.Bq;
        g.ib(this.Dm, this.Jc);
        this.Jc = this.Dm = null;
        g.dU.prototype.unload.call(this);
        this.player.Vq(5);
        p9(this)
    }
    ;
    g.k.xa = function() {
        g.Qv(this.subscriptions);
        g.dU.prototype.xa.call(this)
    }
    ;
    g.k.hH = function(a) {
        var b = g.Fa.apply(1, arguments);
        this.loaded && this.Dm.Ll.apply(this.Dm, [a].concat(g.w(b)))
    }
    ;
    g.k.getAdState = function() {
        return this.Ai
    }
    ;
    g.k.jq = function() {
        return this.Jc ? N8(this.Jc).jq : !1
    }
    ;
    g.k.Ml = function() {
        return this.Jc ? N8(this.Jc).Ml : !1
    }
    ;
    g.k.Uc = function(a, b) {
        this.H_ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.Ac("onVideoProgress", a || 0)
    }
    ;
    g.k.getCurrentTime = function() {
        return this.H_
    }
    ;
    g.k.getProgressState = function() {
        var a = N8(this.Jc)
          , b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.jj() && this.player.Ph(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + H8(a) : a.C,
            isAtLiveHead: (a.B ? a.j + H8(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.Z,
            seekableEnd: a.B ? a.j + H8(a) : a.j,
            seekableStart: a.D > 0 ? a.D + H8(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    }
    ;
    g.k.nextVideo = function() {
        this.Jc && this.Jc.nextVideo()
    }
    ;
    g.k.DM = function() {
        this.Jc && this.Jc.DM()
    }
    ;
    g.k.dba = function(a) {
        a === 1 && (this.qT = this.Jc ? N8(this.Jc) : null)
    }
    ;
    g.k.zca = function() {
        var a = Aub() ? new M8(f9(),void 0) : null;
        if (a) {
            var b = this.au;
            this.loaded && this.unload();
            this.Jc = a;
            this.qT = null;
            b.key !== this.Bq.key && (this.au = b,
            this.load())
        } else
            g.gb(this.Jc),
            this.Jc = null,
            this.loaded && (this.unload(),
            (a = this.qT) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J8(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    }
    ;
    g.k.m1 = function() {
        var a = [this.Bq]
          , b = a.concat
          , c = wub();
        D8() && g.nt("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Fv = b.call(a, c);
        a = yub() || this.Bq;
        q9(this, a);
        this.player.Ac("onMdxReceiversChange")
    }
    ;
    g.k.xca = function() {
        var a = yub();
        q9(this, a)
    }
    ;
    g.k.wca = function() {
        this.au = yub()
    }
    ;
    g.k.Tda = function() {
        this.FH = !0;
        p9(this);
        j9 = !1;
        g9 && i9(g9, 1);
        g9 = null
    }
    ;
    g.k.Sda = function() {
        this.FH = !1;
        p9(this);
        q9(this, this.Bq);
        this.au = this.Bq;
        j9 = !1;
        g9 = null;
        this.player.playVideo()
    }
    ;
    g.k.ai = function(a, b) {
        switch (a) {
        case "casting":
            return this.loaded;
        case "receivers":
            return this.Fv;
        case "currentReceiver":
            return b && (b.key === "cast-selector-receiver" ? Ptb() : q9(this, b)),
            this.loaded ? this.au : this.Bq;
        case "quickCast":
            return this.Fv.length === 2 && this.Fv[1].key === "cast-selector-receiver" ? (b && Ptb(),
            !0) : !1
        }
    }
    ;
    g.k.PU = function() {
        this.Jc.PU()
    }
    ;
    g.k.yn = function() {
        return !1
    }
    ;
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    }
    ;
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.zr("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.zr("SESSION_INDEX") && !g.zr("LOGGED_IN"))
    }
    ;
    g.cU("remote", Kub);
}
)(_yt_player);
