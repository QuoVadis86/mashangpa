const Ob = {
  "stringify": JSON.stringify,
  "parse": JSON.parse
};
const x1 = new Proxy(Ob, {
  'get'(N, W) {
    if (W === "stringify") {
      return function (...O) {
        return N.stringify(...O);
      };
    } else {
      if (W === "parse") {
        return function (...Y) {
          return N.parse(...Y);
        };
      }
    }
    return N[W];
  }
});
console.log("我盯着你呢小子");
setInterval(() => {
  0;
  (function (W) {
    return function (O) {
      return Function("Function(arguments[0]+\"" + O + "\")()");
    }(W);
  })('bugger')('de', 0, 0, 0);
}, 1000);
window = this;
(function (B) {
  const Y = {
    'JRVIF': "sfGUa",
    'ivsVn': "(((.+)+)+)+$",
    'OtbMK': function (p, v) {
      return p !== v;
    },
    'hBnHQ': "YmpED",
    'gTJhf': "0|4|2|1|3",
    'JfqPw': function (p, v) {
      return p < v;
    },
    'ldgNJ': function (p, v) {
      return p >> v;
    },
    'thzAk': function (p, v) {
      return p << v;
    },
    'xYhMS': function (p, v) {
      return p & v;
    },
    'agDTJ': function (p, v) {
      return p / v;
    },
    'ynGCK': function (p, v) {
      return p * v;
    },
    'MKdaU': function (p, v) {
      return p - v;
    },
    'Qivrc': function (p, v) {
      return p >> v;
    },
    'zfggV': function (p, v) {
      return p < v;
    },
    'rlniE': function (p, v) {
      return p === v;
    },
    'MaJwA': "SZkWU",
    'VJfjK': function (p, v) {
      return p(v);
    },
    'qFTbm': function (p, v) {
      return p + v;
    },
    'sXudK': function (p, v) {
      return p + v;
    },
    'ixdvH': "return (function() ",
    'uPJhQ': "{}.constructor(\"return this\")( )",
    'JzUaT': function (p, v) {
      return p === v;
    },
    'gelEG': function (p, v) {
      return p(v);
    },
    'eOMDf': function (p, v, L, j) {
      return p(v, L, j);
    },
    'UNyEI': "QOSBH",
    'mSUio': 'trMcG',
    'FgysG': "yzmFD",
    'XSfXk': "bRbsQ",
    'MhZul': 'warn',
    'UOiiP': "info",
    'jUpNr': "exception",
    'ZErCv': "trace",
    'tBmhV': function (p, v) {
      return p < v;
    },
    'bICUC': function (p, v) {
      return p + v;
    },
    'sHyFP': function (p, v) {
      return p & v;
    },
    'PzEkN': function (p, v) {
      return p | v;
    },
    'SNWBG': function (p, v) {
      return p + v;
    },
    'Ojybj': function (p, v) {
      return p >> v;
    },
    'cXYer': function (p, v) {
      return p | v;
    },
    'TjHlL': function (p, v) {
      return p >>> v;
    },
    'rkFsh': function (p, v) {
      return p !== v;
    },
    'ZkAHc': "yaDgC",
    'wZgjz': function (p, v, L) {
      return p(v, L);
    },
    'MjdHC': function (p, v, L) {
      return p(v, L);
    },
    'liimd': function (p, v, L, j, E, b, H) {
      return p(v, L, j, E, b, H);
    },
    'WoFjQ': function (p, v) {
      return p & v;
    },
    'EaViz': "3|1|0|4|2",
    'qtBDM': function (p, v) {
      return p >> v;
    },
    'cIQBV': function (p, v) {
      return p << v;
    },
    'oeqKU': function (p, v) {
      return p % v;
    },
    'FDCwr': function (p, v) {
      return p + v;
    },
    'MgQnQ': function (p, v) {
      return p << v;
    },
    'HgmQz': function (p, v) {
      return p >>> v;
    },
    'bBrzR': function (p, v) {
      return p + v;
    },
    'tzQvI': function (p, v) {
      return p < v;
    },
    'tkSIh': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'vRFLm': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'QzAju': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'tJBLM': function (p, v) {
      return p + v;
    },
    'PFiGQ': function (p, v) {
      return p + v;
    },
    'nVcFB': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'oqhce': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'esvjL': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'CXCKd': function (p, v) {
      return p + v;
    },
    'Tfgng': function (p, v) {
      return p + v;
    },
    'mzqLY': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'LsmzR': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'gZniF': function (p, v) {
      return p + v;
    },
    'vLLgy': function (p, v) {
      return p + v;
    },
    'yoncq': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'OgfIQ': function (p, v) {
      return p + v;
    },
    'HcUKR': function (p, v) {
      return p + v;
    },
    'fWQVe': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'wZqjp': function (p, v) {
      return p + v;
    },
    'CzoNy': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'wmMXU': function (p, v) {
      return p + v;
    },
    'LLkLg': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'woOgP': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'Aqkko': function (p, v) {
      return p + v;
    },
    'qEiDy': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'Pxlkx': function (p, v) {
      return p + v;
    },
    'wlGJx': function (p, v) {
      return p + v;
    },
    'MQKYE': function (p, v) {
      return p + v;
    },
    'PEeiy': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'vMghD': function (p, v) {
      return p + v;
    },
    'IAtCS': function (p, v) {
      return p + v;
    },
    'WTxKj': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'OeUPc': function (p, v) {
      return p + v;
    },
    'bRepp': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'NOpHR': function (p, v) {
      return p + v;
    },
    'llFgu': function (p, v) {
      return p + v;
    },
    'RYPvZ': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'SEQdv': function (p, v) {
      return p + v;
    },
    'WaYIj': function (p, v) {
      return p + v;
    },
    'MLFhj': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'CEsGm': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'hURGh': function (p, v) {
      return p + v;
    },
    'iybnR': function (p, v) {
      return p + v;
    },
    'NHAfr': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'LhudU': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'sCWCj': function (p, v) {
      return p + v;
    },
    'mGVbN': function (p, v, L) {
      return p(v, L);
    },
    'VYdcH': function (p, v, L) {
      return p(v, L);
    },
    'NUMzD': function (p, v) {
      return p === v;
    },
    'SWgqI': "kKbOH",
    'dDsTl': function (p, v) {
      return p & v;
    },
    'ITlWs': function (p, v) {
      return p ^ v;
    },
    'GxadT': function (p, v) {
      return p !== v;
    },
    'NqpiH': function (p, v) {
      return p | v;
    },
    'hCATJ': "1|4|0|2|3",
    'nYdpw': function (p, v) {
      return p < v;
    },
    'cxVKP': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'xWCBx': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'YsZWM': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'XOzPD': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'pcSgc': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'emqSw': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'AoIih': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'uYXIU': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'aiUFT': function (p, v) {
      return p + v;
    },
    'BobaN': function (p, v) {
      return p + v;
    },
    'JAskn': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'ZgGJm': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'CWDTd': function (p, v) {
      return p + v;
    },
    'AOOse': function (p, v) {
      return p + v;
    },
    'WySLl': function (p, v) {
      return p + v;
    },
    'rtemr': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'hvVZK': function (p, v) {
      return p + v;
    },
    'gNAzv': function (p, v) {
      return p + v;
    },
    'IAllZ': function (p, v) {
      return p + v;
    },
    'txapw': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'DSgnr': function (p, v) {
      return p + v;
    },
    'pPhYS': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'DWThP': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'SFbQB': function (p, v) {
      return p + v;
    },
    'XRnUX': function (p, v) {
      return p + v;
    },
    'ZSrHi': function (p, v) {
      return p + v;
    },
    'AAeOs': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'caQVd': function (p, v) {
      return p + v;
    },
    'mBvFI': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'bXtUP': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'BhPEA': function (p, v) {
      return p + v;
    },
    'ruQis': function (p, v) {
      return p + v;
    },
    'phRWA': function (p, v) {
      return p + v;
    },
    'JVTbo': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'jDbag': function (p, v) {
      return p + v;
    },
    'fpWGu': function (p, v) {
      return p + v;
    },
    'PhUUA': function (p, v) {
      return p + v;
    },
    'vhAgy': function (p, v) {
      return p + v;
    },
    'lXZae': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'RyzCJ': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'PbGJv': function (p, v) {
      return p + v;
    },
    'uVbpb': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'iYCqt': function (p, v) {
      return p + v;
    },
    'KfUog': function (p, v) {
      return p + v;
    },
    'SySGO': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'xadfr': function (p, v) {
      return p + v;
    },
    'OsmbE': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'FhDuY': function (p, v, L, j, E, b, H, m) {
      return p(v, L, j, E, b, H, m);
    },
    'uRcxe': function (p, v) {
      return p + v;
    },
    'uLzGT': function (p, v, L) {
      return p(v, L);
    },
    'kWyrK': function (p, v) {
      return p >> v;
    },
    'ATgfM': function (p, v) {
      return p << v;
    },
    'iyyac': function (p, v) {
      return p + v;
    },
    'uSVeF': function (p, v) {
      return p >>> v;
    },
    'BzDwE': function (p, v) {
      return p * v;
    },
    'KEIUP': function (p, v) {
      return p < v;
    },
    'wTsaA': function (p, v) {
      return p | v;
    },
    'JTMeO': "FYKEm",
    'ElgMw': function (p, v) {
      return p < v;
    },
    'SFqDI': function (p, v) {
      return p * v;
    },
    'YzuWL': function (p, v) {
      return p < v;
    },
    'RMtRl': function (p, v) {
      return p & v;
    },
    'xBLkI': function (p, v) {
      return p % v;
    },
    'raOfI': "0123456789abcdef",
    'WiaXr': function (p, v) {
      return p < v;
    },
    'ZCEup': function (p, v) {
      return p + v;
    },
    'qkKmG': "xialuo",
    'UgKCF': function (p, v) {
      return p(v);
    },
    'ZTMZo': "xxoo",
    'bVPIz': "Jytnr",
    'pDFRR': function (p, v) {
      return p(v);
    },
    'HdkMg': function (p, v) {
      return p * v;
    },
    'sPhVZ': function (p, v, L, j, E, b, H) {
      return p(v, L, j, E, b, H);
    },
    'zNqgl': function (p, v) {
      return p & v;
    },
    'bcIlu': "QpPKj",
    'ZbpZT': function (p, v) {
      return p(v);
    },
    'fzbNL': function (p, v) {
      return p + v;
    },
    'KolHP': function (p, v) {
      return p(v);
    },
    'nwzaU': function (p, v) {
      return p !== v;
    },
    'VZaxT': 'GQQHL',
    'pGDyu': "jeVyI",
    'HXwzI': function (p, v) {
      return p(v);
    },
    'CFpTC': function (p, v) {
      return p < v;
    },
    'QkSgK': function (p, v) {
      return p % v;
    },
    'dFbAj': "feEbr",
    'sXfDl': function (p, v, L) {
      return p(v, L);
    },
    'AEPZB': function (p, v, L) {
      return p(v, L);
    },
    'GSknF': function (p) {
      return p();
    }
  };
  const x = function () {
    const p = {
      'SraUN': Y.JRVIF
    };
    let L = true;
    return function (j, E) {
      if (p.SraUN !== p.SraUN) {
        const H = O.apply(B, arguments);
        Y = null;
        return H;
      } else {
        const H = L ? function () {
          if (E) {
            const m = E.apply(j, arguments);
            E = null;
            return m;
          }
        } : function () {};
        L = false;
        return H;
      }
    };
  }();
  const I = Y.AEPZB(x, this, function () {
    return I.toString().search(Y.ivsVn).toString().constructor(I).search(Y.ivsVn);
  });
  Y.GSknF(I);
  const w = function () {
    const p = {
      'Nviwc': Y.gTJhf,
      'pjAcj': function (L, j) {
        return Y.JfqPw(L, j);
      },
      'LSwut': function (L, j) {
        return Y.ldgNJ(L, j);
      },
      'twlUS': function (L, j) {
        return Y.thzAk(L, j);
      },
      'bhDOl': function (L, j) {
        return Y.xYhMS(L, j);
      },
      'HpOKP': function (L, j) {
        return Y.agDTJ(L, j);
      },
      'IRtBS': function (L, j) {
        return Y.ynGCK(L, j);
      },
      'mCPmX': function (L, j) {
        return Y.MKdaU(L, j);
      },
      'MOUIU': function (L, j) {
        return Y.Qivrc(L, j);
      },
      'GLogF': function (L, j) {
        return Y.zfggV(L, j);
      },
      'SFHfp': function (L, j) {
        return Y.rlniE(L, j);
      },
      'HtzRn': Y.MaJwA
    };
    let v = true;
    return function (L, j) {
      if (Y.OtbMK(Y.hBnHQ, Y.hBnHQ)) {
        const b = p.Nviwc.split('|');
        let H = 0;
        while (true) {
          switch (b[H++]) {
            case '0':
              var m;
              var Q = [];
              continue;
            case '1':
              for (m = 0; Y.JfqPw(m, U); m += 8) {
                Q[Y.ldgNJ(m, 5)] |= Y.thzAk(Y.xYhMS(255, Y.charCodeAt(Y.agDTJ(m, 8))), m % 32);
              }
              continue;
            case '2':
              var U = Y.ynGCK(8, B.length);
              continue;
            case '3':
              return Q;
            case '4':
              Q[Y.MKdaU(Y.Qivrc(x.length, 2), 1)] = undefined;
              for (m = 0; Y.zfggV(m, Q.length); m += 1) {
                Q[m] = 0;
              }
              continue;
          }
          break;
        }
      } else {
        const b = v ? function () {
          if (j) {
            if (Y.rlniE("YEYja", p.HtzRn)) {
              return I.parse(...x);
            } else {
              const m = j.apply(L, arguments);
              j = null;
              return m;
            }
          }
        } : function () {};
        v = false;
        return b;
      }
    };
  }();
  const A = Y.uLzGT(w, this, function () {
    const p = {
      'QuPGS': function (v, L) {
        return Y.JzUaT(v, L);
      },
      'pxZXD': function (v, L) {
        return Y.gelEG(v, L);
      },
      'GtLwy': function (v, L, j, E) {
        return Y.eOMDf(v, L, j, E);
      },
      'rYSoA': function (v, L) {
        return Y.rlniE(v, L);
      },
      'YHyur': Y.UNyEI,
      'MWlQH': Y.mSUio,
      'hlHgL': function (v, L) {
        return Y.sXudK(v, L);
      },
      'IVprD': function (v, L) {
        return Y.sXudK(v, L);
      },
      'myVhW': Y.ixdvH,
      'xwTEy': "{}.constructor(\"return this\")( )"
    };
    if (Y.OtbMK(Y.FgysG, Y.XSfXk)) {
      const v = function () {
        if (Y.rlniE(p.YHyur, 'QOSBH')) {
          let H;
          try {
            if (Y.JzUaT(p.MWlQH, "trMcG")) {
              H = Y.gelEG(Function, Y.sXudK(Y.sXudK(p.myVhW, "{}.constructor(\"return this\")( )"), ');'))();
            } else {
              G.forEach(Q => {
                F = Y.eOMDf(Q, B, G, X) || V;
              });
              if (z.success) {
                F.success(B, G, X);
              }
            }
          } catch (Q) {
            H = window;
          }
          return H;
        } else {
          if (Y.JzUaT(x.statusText, 'OK') || I.statusText === "success") {
            const D = Y.gelEG(z, S.r);
            const J = s.parse(D);
            return J;
          } else {
            return q;
          }
        }
      };
      const L = v();
      const j = L.console = L.console || {};
      const E = ["log", Y.MhZul, Y.UOiiP, "error", Y.jUpNr, "table", Y.ZErCv];
      for (let b = 0; Y.tBmhV(b, E.length); b++) {
        const H = w.constructor.prototype.bind(w);
        const m = E[b];
        const Q = j[m] || H;
        H.__proto__ = w.bind(w);
        H.toString = Q.toString.bind(Q);
        j[m] = H;
      }
    } else {
      M = OwtuiI.VJfjK(O, OwtuiI.qFTbm(OwtuiI.sXudK(OwtuiI.ixdvH, OwtuiI.uPJhQ), ');'))();
    }
  });
  Y.GSknF(A);
  function G(p, v) {
    var L = Y.bICUC(Y.sHyFP(65535, p), Y.xYhMS(65535, v));
    return Y.PzEkN(Y.SNWBG(Y.ldgNJ(p, 16), Y.Ojybj(v, 16)) + (L >> 16) << 16, 65535 & L);
  }
  function z(p, v, L, j, E, b) {
    if (Y.rkFsh(Y.ZkAHc, Y.ZkAHc)) {
      I(x);
    } else {
      return Y.wZgjz(G, function (Q, U) {
        return Y.cXYer(Q << E, Y.TjHlL(Q, 32 - E));
      }(Y.wZgjz(G, Y.wZgjz(G, v, p), Y.MjdHC(G, j, b))), L);
    }
  }
  function S(p, v, L, j, E, b, H) {
    return Y.liimd(z, Y.cXYer(Y.WoFjQ(v, L), ~v & j), p, v, E, b, H);
  }
  function F(p, v, L, j, E, b, H) {
    if (Y.NUMzD("EZsLO", Y.SWgqI)) {
      const Q = Y.EaViz.split('|');
      let U = 0;
      while (true) {
        switch (Q[U++]) {
          case '0':
            var D = 1732584193;
            var J = -271733879;
            var N0 = -1732584194;
            var N1 = 271733878;
            continue;
          case '1':
            Wl[Y.qtBDM(WF, 5)] |= Y.cIQBV(128, Y.oeqKU(Wt, 32));
            Wg[Y.FDCwr(14, Y.MgQnQ(Y.HgmQz(Y.bBrzR(WC, 64), 9), 4))] = WZ;
            continue;
          case '2':
            return [D, J, N0, N1];
          case '3':
            var N2;
            var N3;
            var N4;
            var N5;
            var N6;
            continue;
          case '4':
            for (N2 = 0; Y.tzQvI(N2, Wo.length); N2 += 16) {
              J = Wu(J = Y.tkSIh(Wn, J = Y.vRFLm(Wr, J = Y.tkSIh(WX, J = WV(J = Y.vRFLm(Ws, J = Y.QzAju(WP, J = Wf(J = Y.tkSIh(Wk, J = Y.QzAju(Wq, J = WK(J = Wp(J = Wv(J = Y.tkSIh(Wi, J = Y.tkSIh(WL, J = Y.tkSIh(Wj, N4 = J, N0 = WE(N5 = N0, N1 = Y.vRFLm(Wb, N6 = N1, D = We(N3 = D, J, N0, N1, WH[N2], 7, -680876936), J, N0, Wm[Y.tJBLM(N2, 1)], 12, -389564586), D, J, Wh[Y.PFiGQ(N2, 2)], 17, 606105819), N1, D, WQ[N2 + 3], 22, -1044525330), N0 = Y.nVcFB(Wc, N0, N1 = Y.oqhce(WU, N1, D = Y.esvjL(WD, D, J, N0, N1, WJ[Y.CXCKd(N2, 4)], 7, -176418897), J, N0, M0[Y.Tfgng(N2, 5)], 12, 1200080426), D, J, M1[N2 + 6], 17, -1473231341), N1, D, M2[Y.bICUC(N2, 7)], 22, -45705983), N0 = Y.tkSIh(M3, N0, N1 = Y.mzqLY(M4, N1, D = Y.LsmzR(M5, D, J, N0, N1, M6[Y.gZniF(N2, 8)], 7, 1770035416), J, N0, M7[Y.vLLgy(N2, 9)], 12, -1958414417), D, J, M8[N2 + 10], 17, -42063), N1, D, M9[N2 + 11], 22, -1990404162), N0 = Y.yoncq(MN, N0, N1 = Y.QzAju(MW, N1, D = MM(D, J, N0, N1, MO[N2 + 12], 7, 1804603682), J, N0, MR[Y.PFiGQ(N2, 13)], 12, -40341101), D, J, MT[Y.OgfIQ(N2, 14)], 17, -1502002290), N1, D, My[Y.HcUKR(N2, 15)], 22, 1236535329), N0 = MB(N0, N1 = Y.QzAju(MY, N1, D = Y.fWQVe(Mx, D, J, N0, N1, MI[Y.wZqjp(N2, 1)], 5, -165796510), J, N0, Mw[N2 + 6], 9, -1069501632), D, J, MA[Y.gZniF(N2, 11)], 14, 643717713), N1, D, Md[N2], 20, -373897302), N0 = Y.CzoNy(MG, N0, N1 = Y.CzoNy(Mz, N1, D = Y.esvjL(MS, D, J, N0, N1, Ma[Y.wmMXU(N2, 5)], 5, -701558691), J, N0, Ml[Y.wmMXU(N2, 10)], 9, 38016083), D, J, MF[N2 + 15], 14, -660478335), N1, D, Mt[Y.OgfIQ(N2, 4)], 20, -405537848), N0 = Y.LLkLg(Mg, N0, N1 = Y.woOgP(MC, N1, D = MZ(D, J, N0, N1, Mo[Y.SNWBG(N2, 9)], 5, 568446438), J, N0, Mu[Y.CXCKd(N2, 14)], 9, -1019803690), D, J, Mn[Y.OgfIQ(N2, 3)], 14, -187363961), N1, D, Mr[Y.Aqkko(N2, 8)], 20, 1163531501), N0 = Y.qEiDy(MX, N0, N1 = Y.qEiDy(MV, N1, D = Ms(D, J, N0, N1, MP[Y.vLLgy(N2, 13)], 5, -1444681467), J, N0, Mf[Y.SNWBG(N2, 2)], 9, -51403784), D, J, Mk[Y.Pxlkx(N2, 7)], 14, 1735328473), N1, D, Mq[Y.wlGJx(N2, 12)], 20, -1926607734), N0 = Y.QzAju(MK, N0, N1 = Y.LLkLg(Mp, N1, D = Y.qEiDy(Mv, D, J, N0, N1, Mi[N2 + 5], 4, -378558), J, N0, ML[N2 + 8], 11, -2022574463), D, J, Mj[Y.SNWBG(N2, 11)], 16, 1839030562), N1, D, ME[Y.MQKYE(N2, 14)], 23, -35309556), N0 = Mb(N0, N1 = Y.vRFLm(Me, N1, D = Y.PEeiy(MH, D, J, N0, N1, Mm[Y.tJBLM(N2, 1)], 4, -1530992060), J, N0, Mh[N2 + 4], 11, 1272893353), D, J, MQ[Y.vMghD(N2, 7)], 16, -155497632), N1, D, Mc[Y.IAtCS(N2, 10)], 23, -1094730640), N0 = MU(N0, N1 = Y.fWQVe(MD, N1, D = Y.WTxKj(MJ, D, J, N0, N1, O0[Y.Aqkko(N2, 13)], 4, 681279174), J, N0, O1[N2], 11, -358537222), D, J, O2[Y.OeUPc(N2, 3)], 16, -722521979), N1, D, O3[N2 + 6], 23, 76029189), N0 = O4(N0, N1 = O5(N1, D = Y.bRepp(O6, D, J, N0, N1, O7[N2 + 9], 4, -640364487), J, N0, O8[Y.NOpHR(N2, 12)], 11, -421815835), D, J, O9[Y.llFgu(N2, 15)], 16, 530742520), N1, D, ON[N2 + 2], 23, -995338651), N0 = Y.RYPvZ(OW, N0, N1 = Y.RYPvZ(OM, N1, D = Y.vRFLm(OO, D, J, N0, N1, OR[N2], 6, -198630844), J, N0, OT[Y.SEQdv(N2, 7)], 10, 1126891415), D, J, Oy[Y.tJBLM(N2, 14)], 15, -1416354905), N1, D, OB[N2 + 5], 21, -57434055), N0 = OY(N0, N1 = Ox(N1, D = OI(D, J, N0, N1, Ow[Y.bICUC(N2, 12)], 6, 1700485571), J, N0, OA[Y.FDCwr(N2, 3)], 10, -1894986606), D, J, Od[Y.WaYIj(N2, 10)], 15, -1051523), N1, D, OG[Y.FDCwr(N2, 1)], 21, -2054922799), N0 = Y.MLFhj(Oz, N0, N1 = Y.CEsGm(OS, N1, D = Y.oqhce(Oa, D, J, N0, N1, Ol[N2 + 8], 6, 1873313359), J, N0, OF[Y.hURGh(N2, 15)], 10, -30611744), D, J, Ot[Y.iybnR(N2, 6)], 15, -1560198380), N1, D, Og[Y.Tfgng(N2, 13)], 21, 1309151649), N0 = Y.NHAfr(OC, N0, N1 = Y.LhudU(OZ, N1, D = Y.bRepp(Oo, D, J, N0, N1, Ou[Y.OgfIQ(N2, 4)], 6, -145523070), J, N0, On[Y.sCWCj(N2, 11)], 10, -1120210379), D, J, Or[N2 + 2], 15, 718787259), N1, D, OX[N2 + 9], 21, -343485551);
              D = Y.mGVbN(OV, D, N3);
              J = Os(J, N4);
              N0 = Y.VYdcH(OP, N0, N5);
              N1 = Y.VYdcH(Of, N1, N6);
            }
            continue;
        }
        break;
      }
    } else {
      return z(Y.PzEkN(Y.dDsTl(v, j), L & ~j), p, v, E, b, H);
    }
  }
  function C(p, v, L, j, E, b, H) {
    return z(Y.ITlWs(Y.ITlWs(v, L), j), p, v, E, b, H);
  }
  function Z(p, v, L, j, E, b, H) {
    if (Y.GxadT('gNXxx', "gNXxx")) {
      B.success(Y, x, I);
    } else {
      return z(L ^ Y.NqpiH(v, ~j), p, v, E, b, H);
    }
  }
  function X(p, L) {
    const j = Y.hCATJ.split('|');
    let E = 0;
    while (true) {
      switch (j[E++]) {
        case '0':
          var b = 1732584193;
          var H = -271733879;
          var m = -1732584194;
          var Q = 271733878;
          continue;
        case '1':
          var U;
          var D;
          var J;
          var N0;
          var N1;
          continue;
        case '2':
          for (U = 0; Y.nYdpw(U, p.length); U += 16) {
            H = Z(H = Y.cxVKP(Z, H = Y.xWCBx(Z, H = Y.mzqLY(Z, H = Y.cxVKP(C, H = z(Y.ITlWs(Y.ITlWs(m = Y.esvjL(C, m, Q = Y.xWCBx(C, Q, b = Y.PEeiy(C, b, H, m, Q, p[U + 13], 4, 681279174), H, m, p[U], 11, -358537222), b, H, p[Y.vhAgy(U, 3)], 16, -722521979), Q), b), H = Y.YsZWM(C, H = Y.woOgP(C, H = F(H = F(H = Y.XOzPD(F, H = Y.pcSgc(F, H = Y.vRFLm(S, H = Y.RYPvZ(S, H = Y.emqSw(S, H = Y.AoIih(S, J = H, m = Y.uYXIU(S, N0 = m, Q = Y.woOgP(S, N1 = Q, b = Y.nVcFB(S, D = b, H, m, Q, p[U], 7, -680876936), H, m, p[Y.aiUFT(U, 1)], 12, -389564586), b, H, p[U + 2], 17, 606105819), Q, b, p[Y.tJBLM(U, 3)], 22, -1044525330), m = Y.liimd(z, Y.cXYer(Y.WoFjQ(Q = Y.esvjL(S, Q, b = Y.esvjL(S, b, H, m, Q, p[Y.BobaN(U, 4)], 7, -176418897), H, m, p[U + 5], 12, 1200080426), b), ~(Q = Y.esvjL(S, Q, b = Y.esvjL(S, b, H, m, Q, p[Y.BobaN(U, 4)], 7, -176418897), H, m, p[U + 5], 12, 1200080426)) & H), m, Q = Y.esvjL(S, Q, b = Y.esvjL(S, b, H, m, Q, p[Y.BobaN(U, 4)], 7, -176418897), H, m, p[U + 5], 12, 1200080426), p[Y.SEQdv(U, 6)], 17, -1473231341), Q, b, p[U + 7], 22, -45705983), m = Y.esvjL(S, m, Q = Y.JAskn(S, Q, b = Y.ZgGJm(S, b, H, m, Q, p[Y.HcUKR(U, 8)], 7, 1770035416), H, m, p[Y.CWDTd(U, 9)], 12, -1958414417), b, H, p[Y.AOOse(U, 10)], 17, -42063), Q, b, p[Y.WySLl(U, 11)], 22, -1990404162), m = Y.ZgGJm(S, m, Q = Y.rtemr(S, Q, b = Y.LsmzR(S, b, H, m, Q, p[Y.hvVZK(U, 12)], 7, 1804603682), H, m, p[Y.gNAzv(U, 13)], 12, -40341101), b, H, p[Y.IAllZ(U, 14)], 17, -1502002290), Q, b, p[Y.Tfgng(U, 15)], 22, 1236535329), m = Y.pcSgc(F, m, Q = Y.MLFhj(F, Q, b = Y.txapw(F, b, H, m, Q, p[Y.DSgnr(U, 1)], 5, -165796510), H, m, p[U + 6], 9, -1069501632), b, H, p[Y.wlGJx(U, 11)], 14, 643717713), Q, b, p[U], 20, -373897302), m = Y.pPhYS(F, m, Q = Y.DWThP(F, Q, b = F(b, H, m, Q, p[Y.SFbQB(U, 5)], 5, -701558691), H, m, p[Y.XRnUX(U, 10)], 9, 38016083), b, H, p[Y.ZSrHi(U, 15)], 14, -660478335), Q, b, p[U + 4], 20, -405537848), m = F(m, Q = F(Q, b = Y.AAeOs(F, b, H, m, Q, p[Y.FDCwr(U, 9)], 5, 568446438), H, m, p[Y.vMghD(U, 14)], 9, -1019803690), b, H, p[Y.caQVd(U, 3)], 14, -187363961), Q, b, p[U + 8], 20, 1163531501), m = Y.mBvFI(F, m, Q = F(Q, b = Y.bXtUP(F, b, H, m, Q, p[Y.BhPEA(U, 13)], 5, -1444681467), H, m, p[Y.ruQis(U, 2)], 9, -51403784), b, H, p[Y.Tfgng(U, 7)], 14, 1735328473), Q, b, p[Y.phRWA(U, 12)], 20, -1926607734), m = Y.JVTbo(C, m, Q = Y.esvjL(C, Q, b = z(Y.ITlWs(Y.ITlWs(H, m), Q), b, H, p[U + 5], 4, -378558), H, m, p[U + 8], 11, -2022574463), b, H, p[Y.MQKYE(U, 11)], 16, 1839030562), Q, b, p[Y.jDbag(U, 14)], 23, -35309556), m = Y.mBvFI(C, m, Q = Y.WTxKj(C, Q, b = z(Y.ITlWs(Y.ITlWs(H, m), Q), b, H, p[Y.WySLl(U, 1)], 4, -1530992060), H, m, p[Y.DSgnr(U, 4)], 11, 1272893353), b, H, p[Y.fpWGu(U, 7)], 16, -155497632), Q, b, p[Y.PhUUA(U, 10)], 23, -1094730640), m = Y.esvjL(C, m, Q = Y.xWCBx(C, Q, b = Y.PEeiy(C, b, H, m, Q, p[U + 13], 4, 681279174), H, m, p[U], 11, -358537222), b, H, p[Y.vhAgy(U, 3)], 16, -722521979), p[Y.BhPEA(U, 6)], 23, 76029189), m = Y.cxVKP(C, m, Q = z(Y.ITlWs(Y.ITlWs(b = Y.lXZae(C, b, H, m, Q, p[Y.llFgu(U, 9)], 4, -640364487), H), m), Q, b = Y.lXZae(C, b, H, m, Q, p[Y.llFgu(U, 9)], 4, -640364487), p[U + 12], 11, -421815835), b, H, p[Y.vhAgy(U, 15)], 16, 530742520), Q, b, p[Y.vMghD(U, 2)], 23, -995338651), m = Y.AoIih(Z, m, Q = Y.RyzCJ(Z, Q, b = Y.mBvFI(Z, b, H, m, Q, p[U], 6, -198630844), H, m, p[U + 7], 10, 1126891415), b, H, p[U + 14], 15, -1416354905), Q, b, p[Y.PbGJv(U, 5)], 21, -57434055), m = Y.ZgGJm(Z, m, Q = Z(Q, b = Y.uVbpb(Z, b, H, m, Q, p[Y.jDbag(U, 12)], 6, 1700485571), H, m, p[Y.iYCqt(U, 3)], 10, -1894986606), b, H, p[Y.KfUog(U, 10)], 15, -1051523), Q, b, p[U + 1], 21, -2054922799), m = Y.SySGO(Z, m, Q = Z(Q, b = Z(b, H, m, Q, p[Y.hvVZK(U, 8)], 6, 1873313359), H, m, p[Y.wlGJx(U, 15)], 10, -30611744), b, H, p[Y.xadfr(U, 6)], 15, -1560198380), Q, b, p[Y.vLLgy(U, 13)], 21, 1309151649), m = Y.OsmbE(Z, m, Q = Y.bXtUP(Z, Q, b = Y.FhDuY(Z, b, H, m, Q, p[Y.SFbQB(U, 4)], 6, -145523070), H, m, p[Y.uRcxe(U, 11)], 10, -1120210379), b, H, p[Y.OeUPc(U, 2)], 15, 718787259), Q, b, p[Y.ruQis(U, 9)], 21, -343485551);
            b = G(b, D);
            H = Y.mGVbN(G, H, J);
            m = Y.VYdcH(G, m, N0);
            Q = Y.uLzGT(G, Q, N1);
          }
          continue;
        case '3':
          return [b, H, m, Q];
        case '4':
          p[Y.kWyrK(L, 5)] |= Y.ATgfM(128, Y.oeqKU(L, 32));
          p[Y.iyyac(14, Y.MgQnQ(Y.uSVeF(L + 64, 9), 4))] = L;
          continue;
      }
      break;
    }
  }
  function V(p) {
    var v;
    var L = '';
    var j = Y.BzDwE(32, p.length);
    for (v = 0; Y.KEIUP(v, j); v += 8) {
      L += String.fromCharCode(Y.xYhMS(Y.uSVeF(p[v >> 5], Y.oeqKU(v, 32)), 255));
    }
    return L;
  }
  function s(p) {
    if ("FYKEm" === Y.JTMeO) {
      var L;
      var j = [];
      j[Y.MKdaU(Y.Qivrc(p.length, 2), 1)] = undefined;
      for (L = 0; Y.ElgMw(L, j.length); L += 1) {
        j[L] = 0;
      }
      var E = Y.SFqDI(8, p.length);
      for (L = 0; Y.YzuWL(L, E); L += 8) {
        j[Y.ldgNJ(L, 5)] |= Y.ATgfM(Y.RMtRl(255, p.charCodeAt(Y.agDTJ(L, 8))), Y.xBLkI(L, 32));
      }
      return j;
    } else {
      return A(K ^ Y.wTsaA(G, ~z), S, s, q, F, j);
    }
  }
  function P(p) {
    var v;
    var L;
    var j = Y.raOfI;
    var E = '';
    for (L = 0; Y.WiaXr(L, p.length); L += 1) {
      v = p.charCodeAt(L);
      E += j.charAt(Y.dDsTl(Y.HgmQz(v, 4), 15)) + j.charAt(15 & v);
    }
    return E;
  }
  function k(p) {
    if (Y.NUMzD(Y.bVPIz, Y.bVPIz)) {
      return Y.pDFRR(unescape, encodeURIComponent(p));
    } else {
      let L = new K().getTime();
      let j = G.eeee(Y.ZCEup(Y.qkKmG, L));
      z.headers = S.headers || {};
      s.headers.m = j;
      q.headers[Y.vhAgy('t', 's')] = L;
      F.url += '&x=' + Y.UgKCF(z, k.a.SHA256(j + Y.ZTMZo));
      return C;
    }
  }
  function q(p) {
    return function (L) {
      return V(X(s(L), Y.HdkMg(8, L.length)));
    }(k(p));
  }
  function K(p, v) {
    const L = {
      'cnqxJ': function (j, E, b, H, m, Q, U) {
        return Y.sPhVZ(j, E, b, H, m, Q, U);
      },
      'JdsBX': function (j, E) {
        return Y.cXYer(j, E);
      },
      'dGNAU': function (j, E) {
        return Y.zNqgl(j, E);
      },
      'cADze': Y.bcIlu,
      'khAHW': function (j, E) {
        return j(E);
      },
      'GDPHm': function (j, E) {
        return Y.KEIUP(j, E);
      },
      'Cydwq': function (j, E, b) {
        return j(E, b);
      },
      'ymEyI': function (j, E) {
        return Y.BzDwE(j, E);
      },
      'gZCVH': function (j, E) {
        return j < E;
      },
      'KwMyw': function (j, E) {
        return Y.ITlWs(j, E);
      },
      'Enung': function (j, E) {
        return Y.ITlWs(j, E);
      },
      'VkWSJ': function (j, E) {
        return Y.ZbpZT(j, E);
      },
      'BZwGQ': function (j, E) {
        return Y.fzbNL(j, E);
      },
      'ejgbP': function (j, E, b) {
        return j(E, b);
      }
    };
    return function (j, E) {
      if (L.cADze !== "QpPKj") {
        return Y.sPhVZ(K, Y.cXYer(Y.zNqgl(G, z), Y.zNqgl(~S, s)), q, F, b, k, C);
      } else {
        var b;
        var H;
        var m = s(j);
        var Q = [];
        var U = [];
        Q[15] = U[15] = undefined;
        if (Y.KEIUP(16, m.length)) {
          m = X(m, Y.BzDwE(8, j.length));
        }
        for (b = 0; b < 16; b += 1) {
          Q[b] = Y.ITlWs(909522486, m[b]);
          U[b] = Y.ITlWs(1549556828, m[b]);
        }
        H = X(Q.concat(Y.ZbpZT(s, E)), Y.fzbNL(512, Y.BzDwE(8, E.length)));
        return Y.ZbpZT(V, X(U.concat(H), 640));
      }
    }(Y.ZbpZT(k, p), Y.KolHP(k, v));
  }
  window.eeee = function (p, v, L) {
    const j = {
      'VimxX': function (E, b) {
        return Y.SFqDI(E, b);
      },
      'Ejzmv': function (E, b) {
        return Y.CFpTC(E, b);
      },
      'vtBCF': function (E, b) {
        return E >> b;
      },
      'KmAuC': function (E, b) {
        return Y.QkSgK(E, b);
      },
      'pOijD': function (E, b) {
        return Y.GxadT(E, b);
      },
      'hWOyw': Y.dFbAj,
      'NmvPz': function (E, b) {
        return Y.HXwzI(E, b);
      },
      'LIAXz': function (E, b) {
        return Y.VJfjK(E, b);
      }
    };
    return v ? L ? Y.sXfDl(K, v, p) : function (E, b) {
      return Y.nwzaU(Y.VZaxT, Y.pGDyu) ? Y.HXwzI(P, Y.MjdHC(K, E, b)) : Y.liimd(A, Y.ITlWs(Y.ITlWs(K, G), z), S, s, q, F, L);
    }(v, p) : L ? Y.pDFRR(q, p) : function (E) {
      if (Y.GxadT(j.hWOyw, j.hWOyw)) {
        var m;
        var Q = '';
        var U = Y.SFqDI(32, x.length);
        for (m = 0; Y.CFpTC(m, U); m += 8) {
          Q += B.fromCharCode(Y[m >> 5] >>> Y.QkSgK(m, 32) & 255);
        }
        return Q;
      } else {
        return Y.HXwzI(P, Y.VJfjK(q, E));
      }
    }(p);
  };
})();
const Oe = {
  a: CryptoJS
};
dd = Oe;
let kkkk = dd.a.enc.Utf8.parse("xxxxxxxxoooooooo");
let iiii = dd.a.enc.Utf8.parse("0123456789ABCDEF");
function xxxxoooo(M) {
  let Y = dd.a.enc.Hex.parse(M);
  const x = {
    ciphertext: Y
  };
  let I = dd.a.AES.decrypt(x, kkkk, {
    'mode': dd.a.mode.CBC,
    'padding': dd.a.pad.Pkcs7,
    'iv': iiii
  });
  return I.toString(dd.a.enc.Utf8);
}
(function (N) {
  const M = N.ajax;
  const O = [];
  const B = [];
  N.addRequestInterceptor = function (Y) {
    O.push(Y);
  };
  N.addResponseInterceptor = function (Y) {
    B.push(Y);
  };
  N.ajax = function (Y) {
    O.forEach(I => {
      Y = I(Y) || Y;
    });
    return M(N.extend(true, {}, Y, {
      'success': function (I, w, A) {
        B.forEach(d => {
          I = d(I, w, A) || I;
        });
        if (Y.success) {
          Y.success(I, w, A);
        }
      },
      'error': function (I, w, A) {
        B.forEach(G => {
          I = G(I, w, A) || I;
        });
        if (Y.error) {
          Y.error(I, w, A);
        }
      }
    }));
  };
})(jQuery);
$.addRequestInterceptor(function (N) {
  let M = new Date().getTime();
  let O = window.eeee("xialuo" + M);
  N.headers = N.headers || {};
  N.headers.m = O;
  N.headers.ts = M;
  N.url += "&x=" + encodeURIComponent(dd.a.SHA256(O + "xxoo"));
  return N;
});
$.addResponseInterceptor(function (N, W, M) {
  if (M.statusText === 'OK' || M.statusText === 'success') {
    const B = xxxxoooo(N.r);
    const Y = x1.parse(B);
    return Y;
  } else {
    return N;
  }
});
function loadPage(W) {
  const O = {
    page: W
  };
  const Y = new URLSearchParams(O).toString();
  $.ajax({
    'url': "/api/problem-detail/" + problemId + "/data/?" + Y,
    'method': 'GET',
    'dataType': "json",
    'success': function (x) {
      updatePageContent(x);
    },
    'error': function (x, I, w) {
      console.error("Error fetching problem details:", I, w);
    }
  });
}