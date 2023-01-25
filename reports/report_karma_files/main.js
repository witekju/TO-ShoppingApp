(self["webpackChunkshoppingListApp"] = self["webpackChunkshoppingListApp"] || []).push([["main"],{

/***/ 4882:
/*!***************************************!*\
  !*** ./src/app/app.component.spec.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router/testing */ 9480);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat */ 1879);








describe('AppComponent', () => {
    let component;
    let fixture;
    let authService;
    beforeEach((() => {
        _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.configureTestingModule({
            imports: [_angular_router_testing__WEBPACK_IMPORTED_MODULE_4__.RouterTestingModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig)],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
            providers: [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth]
        })
            .compileComponents();
        authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.inject(src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
        fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.createComponent(_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create the app', () => {
        const fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.createComponent(_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it(`should have as title 'shoppingListApp'`, () => {
        const fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.createComponent(_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('shoppingListApp');
    });
    it('should have the correct text "ShoppingListApp"', () => {
        const appTitle = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('span')).nativeElement;
        expect(appTitle.textContent).toBe('ShoppingListApp');
    });
    it('should have the correct login text', () => {
        const loginButton = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('[test-data="router-login"]')).nativeElement;
        expect(loginButton.textContent).toBe(' Login ');
    });
    it('should have the correct register text', () => {
        const loginButton = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('[test-data="router-register"]')).nativeElement;
        expect(loginButton.textContent).toBe(' Register ');
    });
    it('should call the authService.isAuth method', () => {
        spyOn(authService, 'isAuth');
        component.isAuthenticated();
        expect(authService.isAuth).toHaveBeenCalled();
    });
    it('should call the authService.logout method', () => {
        spyOn(authService, 'logout');
        component.logout();
        expect(authService.logout).toHaveBeenCalled();
    });
    it('should call the authService.isAuth method and return correct value', () => {
        spyOn(authService, 'isAuth').and.returnValue(false);
        expect(component.isAuthenticated()).toBeFalsy();
    });
    it('should call the authService.logout method when Logout is clicked', () => {
        spyOn(authService, 'logout');
        component.logout();
        expect(authService.logout).toHaveBeenCalled();
    });
    it('should show login button when isAuthenticated is false', () => {
        spyOn(authService, 'isAuth').and.returnValue(false);
        fixture.detectChanges();
        const loginButton = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('[test-data="router-login"]'));
        expect(loginButton).toBeTruthy();
    });
    it('should show register button when isAuthenticated is false', () => {
        spyOn(authService, 'isAuth').and.returnValue(false);
        fixture.detectChanges();
        const registerButton = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('[test-data="router-register"]'));
        expect(registerButton).toBeTruthy();
    });
    it('should hide logout button when isAuthenticated is false', () => {
        spyOn(authService, 'isAuth').and.returnValue(false);
        fixture.detectChanges();
        const logoutButton = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('[test-data="router-logout"]'));
        expect(logoutButton).toBeFalsy();
    });
});


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ 8770);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase.config */ 6402);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
function cov_2bsv6g4ada() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/app.component.ts";
  var hash = "ce30b8af737cba248e765d41270d50a8a2b9ff6f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/app.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 39
        }
      },
      "2": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 39
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 38
        }
      },
      "4": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 41
        }
      },
      "5": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 34
        }
      },
      "6": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 25,
          column: 2
        }
      },
      "7": {
        start: {
          line: 23,
          column: 36
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "8": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 32,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 29
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 15
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 13
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 19
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 23,
            column: 31
          }
        },
        loc: {
          start: {
            line: 23,
            column: 36
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 23
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "app.component.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/app.component.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAU,MAAM,eAAe,CAAC;AAClD,OAAO,EAAE,aAAa,EAAE,MAAM,eAAe,CAAC;AAC9C,OAAO,EAAE,cAAc,EAAE,MAAM,mBAAmB,CAAC;AACnD,OAAO,EAAE,WAAW,EAAE,MAAM,6BAA6B,CAAC;IAO7C,YAAY,SAAZ,YAAY;IAGvB,YAAoB,WAAwB;QAAxB,gBAAW,GAAX,WAAW,CAAa;QAF5C,UAAK,GAAG,iBAAiB,CAAC;IAEqB,CAAC;IAEhD,QAAQ;QACN,aAAa,CAAC,cAAc,CAAC,CAAC;IAChC,CAAC;IAED,eAAe;QACb,OAAO,IAAI,CAAC,WAAW,CAAC,MAAM,EAAE,CAAC;IACnC,CAAC;IAED,MAAM;QACJ,IAAI,CAAC,WAAW,CAAC,MAAM,EAAE,CAAC;IAC5B,CAAC;;;;;AAfU,YAAY;IALxB,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,8BAAmC;;KAEpC,CAAC;GACW,YAAY;SAAZ,YAAY",
      sourcesContent: ["import { Component, OnInit } from '@angular/core';\nimport { initializeApp } from '@firebase/app';\nimport { firebaseConfig } from './firebase.config';\nimport { AuthService } from 'src/app/shared/auth.service';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent implements OnInit {\n  title = 'shoppingListApp';\n\n  constructor(private authService: AuthService) {}\n\n  ngOnInit(): void {\n    initializeApp(firebaseConfig);\n  }\n\n  isAuthenticated(): boolean {\n    return this.authService.isAuth();\n  }\n\n  logout() {\n    this.authService.logout();\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ce30b8af737cba248e765d41270d50a8a2b9ff6f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2bsv6g4ada = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2bsv6g4ada();







cov_2bsv6g4ada().s[0]++;
let AppComponent = class AppComponent {
  constructor(authService) {
    cov_2bsv6g4ada().f[0]++;
    cov_2bsv6g4ada().s[1]++;
    this.authService = authService;
    cov_2bsv6g4ada().s[2]++;
    this.title = 'shoppingListApp';
  }

  ngOnInit() {
    cov_2bsv6g4ada().f[1]++;
    cov_2bsv6g4ada().s[3]++;
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.firebaseConfig);
  }

  isAuthenticated() {
    cov_2bsv6g4ada().f[2]++;
    cov_2bsv6g4ada().s[4]++;
    return this.authService.isAuth();
  }

  logout() {
    cov_2bsv6g4ada().f[3]++;
    cov_2bsv6g4ada().s[5]++;
    this.authService.logout();
  }

};
cov_2bsv6g4ada().s[6]++;

AppComponent.ctorParameters = () => {
  cov_2bsv6g4ada().f[4]++;
  cov_2bsv6g4ada().s[7]++;
  return [{
    type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
  }];
};

cov_2bsv6g4ada().s[8]++;
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], AppComponent);


/***/ }),

/***/ 3938:
/*!*****************************************!*\
  !*** ./src/app/auth/auth.guard.spec.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 3870);


describe('AuthGuard', () => {
    let guard;
    beforeEach(() => {
        _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__.TestBed.configureTestingModule({});
        guard = _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__.TestBed.inject(_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
    it('should return false when user is not log in ', () => {
        const result = guard.canActivate();
        expect(result).toBeFalse();
    });
});


/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
function cov_2veu3ih8b() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/auth.guard.ts";
  var hash = "a2fa64aee3115db8ad71cbd00317a236fd4ad1e4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/auth.guard.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 8
        },
        end: {
          line: 6,
          column: 39
        }
      },
      "2": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 41
        }
      },
      "3": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "4": {
        start: {
          line: 12,
          column: 33
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "5": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 19,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 5,
            column: 5
          }
        },
        loc: {
          start: {
            line: 5,
            column: 29
          },
          end: {
            line: 7,
            column: 5
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        loc: {
          start: {
            line: 8,
            column: 18
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 12,
            column: 28
          }
        },
        loc: {
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "auth.guard.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/auth.guard.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAE3C,OAAO,EAAE,WAAW,EAAE,MAAM,wBAAwB,CAAC;IAKxC,SAAS,SAAT,SAAS;IAEpB,YAAoB,WAAyB;QAAzB,gBAAW,GAAX,WAAW,CAAc;IAAG,CAAC;IAEjD,WAAW;QACT,OAAO,IAAI,CAAC,WAAW,CAAC,MAAM,EAAE,CAAC;IACnC,CAAC;;;;;AANU,SAAS;IAHrB,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,SAAS;SAAT,SAAS",
      sourcesContent: ["import { Injectable } from '@angular/core';\nimport { CanActivate } from '@angular/router';\nimport { AuthService } from '../shared/auth.service';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class AuthGuard implements CanActivate {\n\n  constructor(private authService : AuthService) {}\n\n  canActivate() {\n    return this.authService.isAuth();\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a2fa64aee3115db8ad71cbd00317a236fd4ad1e4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2veu3ih8b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2veu3ih8b();



cov_2veu3ih8b().s[0]++;
let AuthGuard = class AuthGuard {
  constructor(authService) {
    cov_2veu3ih8b().f[0]++;
    cov_2veu3ih8b().s[1]++;
    this.authService = authService;
  }

  canActivate() {
    cov_2veu3ih8b().f[1]++;
    cov_2veu3ih8b().s[2]++;
    return this.authService.isAuth();
  }

};
cov_2veu3ih8b().s[3]++;

AuthGuard.ctorParameters = () => {
  cov_2veu3ih8b().f[2]++;
  cov_2veu3ih8b().s[4]++;
  return [{
    type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
  }];
};

cov_2veu3ih8b().s[5]++;
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], AuthGuard);


/***/ }),

/***/ 4504:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login.component.spec.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 8146);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);









describe('LoginComponent', () => {
  let component;
  let fixture;
  let authService;
  let passwordInput;
  let emailInput;
  beforeEach( /*#__PURE__*/(0,_Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.configureTestingModule({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_6__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig)],
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
      providers: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth]
    }).compileComponents();
    authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.inject(src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.createComponent(_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    passwordInput = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.By.css('label[for="password"]'));
    emailInput = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.By.css('label[for="email"]'));
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not display a loading message when the service is not loading', () => {
    authService.isLoading = false;
    fixture.detectChanges();
    const loadingMessage = fixture.debugElement.nativeElement.querySelector('[test-data="register-loading"]');
    expect(loadingMessage).toBeNull();
  });
  it('should call the authService.isAuth method', () => {
    spyOn(authService, 'login');
    component.submit();
    expect(authService.login).toHaveBeenCalled();
  });
  it('should call the authService.loading method', () => {
    spyOn(authService, 'isLoadingCheck');
    component.isLoading();
    expect(authService.isLoadingCheck).toHaveBeenCalled();
  });
  it('should not display error message when password is valid', () => {
    passwordInput.nativeElement.value = 'validpassword';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.By.css('.text-red-800'));
    expect(errorMessage).toBeFalsy();
  });
  it('should not display error message when email is valid', () => {
    emailInput.nativeElement.value = 'valid@email.com';
    emailInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.By.css('[test-data="register-loading"]'));
    expect(errorMessage).toBeFalsy();
  });
  it('should check email input label name', () => {
    let queryByLabel = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.By.css('label[for="email"]'));
    expect(queryByLabel).toBeTruthy();
    expect(queryByLabel.nativeElement).toBeTruthy();
    expect(queryByLabel.nativeElement.outerText).toContain("Email");
  });
  it('should check confirm password input label name', () => {
    let queryByLabel = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.By.css('label[for="password"]'));
    expect(queryByLabel).toBeTruthy();
    expect(queryByLabel.nativeElement).toBeTruthy();
    expect(queryByLabel.nativeElement.outerText).toContain("Password");
  });
  it('should disable the submit button when the form is invalid', () => {
    component.form = {
      email: '',
      password: ''
    };
    fixture.detectChanges();
    const submitButton = fixture.debugElement.nativeElement.querySelector('[test-data="login-submit-button"]');
    expect(submitButton.disabled).toBeTrue();
  });
});

/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 5639);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css?ngResource */ 9815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
function cov_2knkjy0et7() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/login/login.component.ts";
  var hash = "1fb9733dfdfdfb413d8f2b7e08888d4a63c59cb4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/login/login.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 39
        }
      },
      "2": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 12,
          column: 10
        }
      },
      "3": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 42
        }
      },
      "4": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 49
        }
      },
      "5": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 25,
          column: 2
        }
      },
      "6": {
        start: {
          line: 23,
          column: 38
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "7": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 32,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        loc: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 19
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 32
          },
          end: {
            line: 23,
            column: 33
          }
        },
        loc: {
          start: {
            line: 23,
            column: 38
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 23
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "login.component.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/login/login.component.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAU,MAAM,eAAe,CAAC;AAElD,OAAO,EAAE,WAAW,EAAE,MAAM,6BAA6B,CAAC;IAO7C,cAAc,SAAd,cAAc;IAMzB,YAAoB,WAAyB;QAAzB,gBAAW,GAAX,WAAW,CAAc;QAL7C,SAAI,GAAc;YAChB,KAAK,EAAE,EAAE;YACT,QAAQ,EAAE,EAAE;SACb,CAAC;IAE+C,CAAC;IAElD,QAAQ;IACR,CAAC;IAED,MAAM;QACJ,IAAI,CAAC,WAAW,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IACpC,CAAC;IAED,SAAS;QACP,OAAO,IAAI,CAAC,WAAW,CAAC,cAAc,EAAE,CAAC;IAC3C,CAAC;;;;;AAjBU,cAAc;IAL1B,SAAS,CAAC;QACT,QAAQ,EAAE,WAAW;QACrB,8BAAqC;;KAEtC,CAAC;GACW,cAAc;SAAd,cAAc",
      sourcesContent: ["import { Component, OnInit } from '@angular/core';\nimport { LoginForm } from 'src/app/types/Auth';\nimport { AuthService } from 'src/app/shared/auth.service';\n\n@Component({\n  selector: 'app-login',\n  templateUrl: './login.component.html',\n  styleUrls: ['./login.component.css']\n})\nexport class LoginComponent implements OnInit {\n  form: LoginForm = {\n    email: '',\n    password: '',\n  };\n\n  constructor(private authService : AuthService) { }\n\n  ngOnInit(): void {\n  }\n\n  submit() {\n    this.authService.login(this.form);\n  }\n\n  isLoading() {\n    return this.authService.isLoadingCheck();\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1fb9733dfdfdfb413d8f2b7e08888d4a63c59cb4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2knkjy0et7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2knkjy0et7();





cov_2knkjy0et7().s[0]++;
let LoginComponent = class LoginComponent {
  constructor(authService) {
    cov_2knkjy0et7().f[0]++;
    cov_2knkjy0et7().s[1]++;
    this.authService = authService;
    cov_2knkjy0et7().s[2]++;
    this.form = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    cov_2knkjy0et7().f[1]++;
  }

  submit() {
    cov_2knkjy0et7().f[2]++;
    cov_2knkjy0et7().s[3]++;
    this.authService.login(this.form);
  }

  isLoading() {
    cov_2knkjy0et7().f[3]++;
    cov_2knkjy0et7().s[4]++;
    return this.authService.isLoadingCheck();
  }

};
cov_2knkjy0et7().s[5]++;

LoginComponent.ctorParameters = () => {
  cov_2knkjy0et7().f[4]++;
  cov_2knkjy0et7().s[6]++;
  return [{
    type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
  }];
};

cov_2knkjy0et7().s[7]++;
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], LoginComponent);


/***/ }),

/***/ 8423:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register.component.spec.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 7225);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);








const ngForm = {
  value: {
    email: "Hello",
    password: "World",
    confirm_password: "Word"
  }
};
describe('RegisterComponent', () => {
  let component;
  let fixture;
  let authService;
  let form;
  beforeEach((0,_angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.async)(() => {
    _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.configureTestingModule({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig)],
      declarations: [_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent],
      providers: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth]
    }).compileComponents();
    authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.inject(src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.createComponent(_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the authService.isAuth method', () => {
    spyOn(authService, 'register');
    component.submit();
    expect(authService.register).toHaveBeenCalled();
  });
  it('should call the authService.loading method', () => {
    spyOn(authService, 'isLoadingCheck');
    component.isLoading();
    expect(authService.isLoadingCheck).toHaveBeenCalled();
  });
  it('should disable the submit button when the form is invalid', () => {
    component.form = {
      email: '',
      password: '',
      confirm_password: ''
    };
    fixture.detectChanges();
    const submitButton = fixture.debugElement.nativeElement.querySelector('[test-data="register-submit-button"]');
    expect(submitButton.disabled).toBeTrue();
  });
  it('should check password input label name', () => {
    let queryByLabel = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('label[for="password"]'));
    expect(queryByLabel).toBeTruthy();
    expect(queryByLabel.nativeElement).toBeTruthy();
    expect(queryByLabel.nativeElement.outerText).toContain("Password");
  });
  it('should check email input label name', () => {
    let queryByLabel = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('label[for="email"]'));
    expect(queryByLabel).toBeTruthy();
    expect(queryByLabel.nativeElement).toBeTruthy();
    expect(queryByLabel.nativeElement.outerText).toContain("Email");
  });
  it('should check confirm password input label name', () => {
    let queryByLabel = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.By.css('label[for="confirm_password"]'));
    expect(queryByLabel).toBeTruthy();
    expect(queryByLabel.nativeElement).toBeTruthy();
    expect(queryByLabel.nativeElement.outerText).toContain("Confirm Password");
  });
});

/***/ }),

/***/ 7225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 4966);
/* harmony import */ var _register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css?ngResource */ 544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
function cov_wyyb4zj3o() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/register/register.component.ts";
  var hash = "a0ccd1d8ff5d5ed6cc8e6041965c73b903f717dc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/register/register.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 39
        }
      },
      "2": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 13,
          column: 10
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 36
        }
      },
      "4": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 45
        }
      },
      "5": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 49
        }
      },
      "6": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      "7": {
        start: {
          line: 24,
          column: 41
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "8": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 33,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 15
          },
          end: {
            line: 16,
            column: 18
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 20
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 24,
            column: 35
          },
          end: {
            line: 24,
            column: 36
          }
        },
        loc: {
          start: {
            line: 24,
            column: 41
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 24
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "register.component.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/auth/register/register.component.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAoC,MAAM,eAAe,CAAC;AAE5E,OAAO,EAAE,WAAW,EAAE,MAAM,6BAA6B,CAAC;IAQ7C,iBAAiB,SAAjB,iBAAiB;IAS5B,YAAoB,WAAwB;QAAxB,gBAAW,GAAX,WAAW,CAAa;QAR5C,SAAI,GAAiB;YACnB,KAAK,EAAE,EAAE;YACT,QAAQ,EAAE,EAAE;YACZ,gBAAgB,EAAE,EAAE;SACrB,CAAC;QAEF,oBAAe,GAAY,IAAI,CAAC;IAEe,CAAC;IAEhD,QAAQ,KAAU,CAAC;IAEnB,MAAM;QACJ,IAAI,CAAC,WAAW,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IACvC,CAAC;IAED,SAAS;QACP,OAAO,IAAI,CAAC,WAAW,CAAC,cAAc,EAAE,CAAC;IAC3C,CAAC;;;;;AAnBU,iBAAiB;IAN7B,SAAS,CAAC;QACT,QAAQ,EAAE,cAAc;QACxB,8BAAwC;;KAEzC,CAAC;GAEW,iBAAiB;SAAjB,iBAAiB",
      sourcesContent: ["import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';\nimport { RegisterForm } from 'src/app/types/Auth';\nimport { AuthService } from 'src/app/shared/auth.service';\n\n@Component({\n  selector: 'app-register',\n  templateUrl: './register.component.html',\n  styleUrls: ['./register.component.css']\n})\n\nexport class RegisterComponent implements OnInit {\n  form: RegisterForm = {\n    email: '',\n    password: '',\n    confirm_password: '',\n  };\n\n  passwordMatched: boolean = true;\n\n  constructor(private authService: AuthService) {}\n\n  ngOnInit(): void {}\n\n  submit() {\n    this.authService.register(this.form);\n  }\n\n  isLoading(): boolean {\n    return this.authService.isLoadingCheck();\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a0ccd1d8ff5d5ed6cc8e6041965c73b903f717dc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wyyb4zj3o = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_wyyb4zj3o();





cov_wyyb4zj3o().s[0]++;
let RegisterComponent = class RegisterComponent {
  constructor(authService) {
    cov_wyyb4zj3o().f[0]++;
    cov_wyyb4zj3o().s[1]++;
    this.authService = authService;
    cov_wyyb4zj3o().s[2]++;
    this.form = {
      email: '',
      password: '',
      confirm_password: ''
    };
    cov_wyyb4zj3o().s[3]++;
    this.passwordMatched = true;
  }

  ngOnInit() {
    cov_wyyb4zj3o().f[1]++;
  }

  submit() {
    cov_wyyb4zj3o().f[2]++;
    cov_wyyb4zj3o().s[4]++;
    this.authService.register(this.form);
  }

  isLoading() {
    cov_wyyb4zj3o().f[3]++;
    cov_wyyb4zj3o().s[5]++;
    return this.authService.isLoadingCheck();
  }

};
cov_wyyb4zj3o().s[6]++;

RegisterComponent.ctorParameters = () => {
  cov_wyyb4zj3o().f[4]++;
  cov_wyyb4zj3o().s[7]++;
  return [{
    type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
  }];
};

cov_wyyb4zj3o().s[8]++;
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-register',
  template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], RegisterComponent);


/***/ }),

/***/ 6402:
/*!************************************!*\
  !*** ./src/app/firebase.config.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "firebaseConfig": () => (/* binding */ firebaseConfig)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 2779);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 6818);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 6009);
function cov_1bxqpanbi() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/firebase.config.ts";
  var hash = "3d72241171e537b545f7109cb96b0f870c959f50";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/firebase.config.ts",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 30
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 41
        }
      },
      "2": {
        start: {
          line: 23,
          column: 13
        },
        end: {
          line: 23,
          column: 25
        }
      },
      "3": {
        start: {
          line: 24,
          column: 11
        },
        end: {
          line: 24,
          column: 25
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "firebase.config.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/firebase.config.ts"],
      names: [],
      mappings: "AAAA,OAAO,EAAE,aAAa,EAAE,MAAM,cAAc,CAAC;AAC7C,OAAO,EAAE,OAAO,EAAE,MAAM,eAAe,CAAC;AACxC,OAAO,EAAE,YAAY,EAAE,MAAM,oBAAoB,CAAC;AAGlD,kCAAkC;AAClC,yDAAyD;AACzD,uDAAuD;AACvD,sCAAsC;AACtC,sDAAsD;AACtD,yCAAyC;AACzC,0DAA0D;AAC1D,oCAAoC;AACpC,IAAI;AAEJ,MAAM,CAAC,MAAM,cAAc,GAAG;IAC1B,MAAM,EAAE,yCAAyC;IACjD,UAAU,EAAE,mCAAmC;IAC/C,SAAS,EAAE,mBAAmB;IAC9B,aAAa,EAAE,+BAA+B;IAC9C,iBAAiB,EAAE,cAAc;IACjC,KAAK,EAAE,2CAA2C;IAClD,aAAa,EAAE,cAAc;CAC9B,CAAC;AAEJ,MAAM,GAAG,GAAG,aAAa,CAAC,cAAc,CAAC,CAAC;AAC1C,MAAM,IAAI,GAAG,OAAO,CAAC,GAAG,CAAC,CAAC;AAC1B,MAAM,EAAE,GAAG,YAAY,EAAE,CAAC;AAE1B,OAAO,EAAE,IAAI,EAAE,EAAE,EAAE,CAAC",
      sourcesContent: ["import { initializeApp } from 'firebase/app';\nimport { getAuth } from \"firebase/auth\";\nimport { getFirestore } from \"firebase/firestore\";\n\n\n// export const firebaseConfig = {\n//     apiKey: \"AIzaSyCgpSlg4fwwAprDVbhsuujYTAJPYFc41Rk\",\n//     authDomain: \"shoppinglist-app8.firebaseapp.com\",\n//     projectId: \"shoppinglist-app8\",\n//     storageBucket: \"shoppinglist-app8.appspot.com\",\n//     messagingSenderId: \"211002500755\",\n//     appId: \"1:211002500755:web:40fe1314620aec3450cf66\",\n//     measurementId: \"G-FPH6C6BG4G\"\n// }\n\nexport const firebaseConfig = {\n    apiKey: \"AIzaSyCdLAQjpz2AimetOUqABjserLxvXltUk5M\",\n    authDomain: \"shoppinglist-2222.firebaseapp.com\",\n    projectId: \"shoppinglist-2222\",\n    storageBucket: \"shoppinglist-2222.appspot.com\",\n    messagingSenderId: \"452717911685\",\n    appId: \"1:452717911685:web:f5c1c25a41e48bf5c853ec\",\n    measurementId: \"G-Y46RKM3PH6\"\n  };\n\nconst app = initializeApp(firebaseConfig);\nconst auth = getAuth(app);\nconst db = getFirestore();\n\nexport { auth, db };"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3d72241171e537b545f7109cb96b0f870c959f50"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bxqpanbi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1bxqpanbi();


 // export const firebaseConfig = {
//     apiKey: "AIzaSyCgpSlg4fwwAprDVbhsuujYTAJPYFc41Rk",
//     authDomain: "shoppinglist-app8.firebaseapp.com",
//     projectId: "shoppinglist-app8",
//     storageBucket: "shoppinglist-app8.appspot.com",
//     messagingSenderId: "211002500755",
//     appId: "1:211002500755:web:40fe1314620aec3450cf66",
//     measurementId: "G-FPH6C6BG4G"
// }

const firebaseConfig = (cov_1bxqpanbi().s[0]++, {
  apiKey: "AIzaSyCdLAQjpz2AimetOUqABjserLxvXltUk5M",
  authDomain: "shoppinglist-2222.firebaseapp.com",
  projectId: "shoppinglist-2222",
  storageBucket: "shoppinglist-2222.appspot.com",
  messagingSenderId: "452717911685",
  appId: "1:452717911685:web:f5c1c25a41e48bf5c853ec",
  measurementId: "G-Y46RKM3PH6"
});
const app = (cov_1bxqpanbi().s[1]++, (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig));
const auth = (cov_1bxqpanbi().s[2]++, (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app));
const db = (cov_1bxqpanbi().s[3]++, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)());


/***/ }),

/***/ 1549:
/*!*******************************************************!*\
  !*** ./src/app/list-edit/list-edit.component.spec.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _list_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-edit.component */ 3188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




const listForm = {
  name: "list",
  quantity: "list"
};
describe('ListEditComponent', () => {
  let component;
  let fixture;
  let selectedList = {
    id: "1",
    product: "test",
    quantity: "2",
    unit: "kilogram"
  };
  beforeEach( /*#__PURE__*/(0,_Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.configureTestingModule({
      declarations: [_list_edit_component__WEBPACK_IMPORTED_MODULE_1__.ListEditComponent],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.createComponent(_list_edit_component__WEBPACK_IMPORTED_MODULE_1__.ListEditComponent);
    component = fixture.componentInstance;
    component.selectedList = selectedList;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should edit list when button is clicked', () => {
    spyOn(component, "sendListToList");
    fixture.nativeElement.querySelector('button').click();
    component.sendListToList(listForm);
    expect(component.sendListToList).toHaveBeenCalled();
  });
  it('should display the correct form inputs', () => {
    fixture.detectChanges();
    const productInput = fixture.debugElement.nativeElement.querySelector('[test-data="list-table-edit-item-product"]');
    const quantityInput = fixture.debugElement.nativeElement.querySelector('[test-data="list-table-edit-item-quantity"]');
    const unitSelect = fixture.debugElement.nativeElement.querySelector('[test-data="list-table-edit-item-edit-unit"]');
    expect(productInput.value).toEqual('');
    expect(quantityInput.value).toEqual('');
    expect(unitSelect.value).toEqual('');
  });
});

/***/ }),

/***/ 3188:
/*!**************************************************!*\
  !*** ./src/app/list-edit/list-edit.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListEditComponent": () => (/* binding */ ListEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _list_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-edit.component.html?ngResource */ 1414);
/* harmony import */ var _list_edit_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-edit.component.css?ngResource */ 4285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
function cov_jm4hxuy3s() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/list-edit/list-edit.component.ts";
  var hash = "2eb44de57739a582d221819bf7f791debb4c5d85";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/list-edit/list-edit.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 54
        }
      },
      "2": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 54
        }
      },
      "3": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 44
        }
      },
      "4": {
        start: {
          line: 15,
          column: 41
        },
        end: {
          line: 15,
          column: 43
        }
      },
      "5": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "6": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 26,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 15
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 35
          },
          end: {
            line: 15,
            column: 36
          }
        },
        loc: {
          start: {
            line: 15,
            column: 41
          },
          end: {
            line: 15,
            column: 43
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "list-edit.component.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/list-edit/list-edit.component.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAU,KAAK,EAAE,MAAM,EAAE,YAAY,EAAE,MAAM,eAAe,CAAC;IAQlE,iBAAiB,SAAjB,iBAAiB;IAK5B;QAFU,wBAAmB,GAAsB,IAAI,YAAY,EAAE;IAErD,CAAC;IAEjB,QAAQ;IACR,CAAC;IAED,cAAc,CAAC,QAAa;QAC1B,IAAI,CAAC,mBAAmB,CAAC,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,CAAC;IAChD,CAAC;;;;2BAVA,KAAK;kCACL,MAAM;;AAHI,iBAAiB;IAL7B,SAAS,CAAC;QACT,QAAQ,EAAE,eAAe;QACzB,8BAAyC;;KAE1C,CAAC;GACW,iBAAiB;SAAjB,iBAAiB",
      sourcesContent: ["import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n  selector: 'app-list-edit',\n  templateUrl: './list-edit.component.html',\n  styleUrls: ['./list-edit.component.css']\n})\nexport class ListEditComponent implements OnInit {\n\n  @Input() selectedList: any;\n  @Output() sendListToListEvent: EventEmitter<any> = new EventEmitter();\n\n  constructor() { }\n\n  ngOnInit(): void {\n  }\n\n  sendListToList(listForm: any){\n    this.sendListToListEvent.emit(listForm.value);\n  }\n}\n\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2eb44de57739a582d221819bf7f791debb4c5d85"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jm4hxuy3s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_jm4hxuy3s();




cov_jm4hxuy3s().s[0]++;
let ListEditComponent = class ListEditComponent {
  constructor() {
    cov_jm4hxuy3s().f[0]++;
    cov_jm4hxuy3s().s[1]++;
    this.sendListToListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  ngOnInit() {
    cov_jm4hxuy3s().f[1]++;
  }

  sendListToList(listForm) {
    cov_jm4hxuy3s().f[2]++;
    cov_jm4hxuy3s().s[2]++;
    this.sendListToListEvent.emit(listForm.value);
  }

};
cov_jm4hxuy3s().s[3]++;

ListEditComponent.ctorParameters = () => {
  cov_jm4hxuy3s().f[3]++;
  cov_jm4hxuy3s().s[4]++;
  return [];
};

cov_jm4hxuy3s().s[5]++;
ListEditComponent.propDecorators = {
  selectedList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  sendListToListEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }]
};
cov_jm4hxuy3s().s[6]++;
ListEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-list-edit',
  template: _list_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_list_edit_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], ListEditComponent);


/***/ }),

/***/ 29:
/*!*********************************************!*\
  !*** ./src/app/list/list.component.spec.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component */ 9067);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router/testing */ 9480);
/* harmony import */ var _shared_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/list.service */ 1258);








describe('ListComponent', () => {
  let component;
  let fixture;
  let listService;
  beforeEach( /*#__PURE__*/(0,_Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.configureTestingModule({
      declarations: [_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent],
      imports: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig), _angular_router_testing__WEBPACK_IMPORTED_MODULE_6__.RouterTestingModule],
      providers: [_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore]
    }).compileComponents();
    listService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.inject(_shared_list_service__WEBPACK_IMPORTED_MODULE_3__.ListService);
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.createComponent(_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the listService addListItem method', () => {
    spyOn(listService, 'addListItem');
    let testProduct = {
      value: "test"
    };
    let product = {
      value: testProduct
    };
    component.onAddListItem("1", product, product, "gram");
    expect(listService.addListItem).toHaveBeenCalled();
  });
  it('should call the listService updateListItemStatus method', () => {
    spyOn(listService, 'updateListItemStatus');
    let newStatus = true;
    component.onItemChange("1", newStatus);
    expect(listService.updateListItemStatus).toHaveBeenCalled();
  });
  it('should call the editListItem method', () => {
    spyOn(component, 'editListItem');
    component.editListItem("1");
    expect(component.editListItem).toHaveBeenCalled();
  });
  it('should call the listService deleteListItem method', () => {
    spyOn(listService, 'deleteListItem');
    component.onListItemDelete('id');
    expect(listService.deleteListItem).toHaveBeenCalledWith('id');
  });
  it('should call the updateListItemFields method', () => {
    spyOn(listService, 'updateListItemFields');
    component.itemLists = [{
      id: 1
    }, {
      id: 2
    }];
    let test = {
      id: 2
    };
    component.sendListItemToListItemEventHandler(test);
    expect(listService.updateListItemFields).toHaveBeenCalled();
  });
});

/***/ }),

/***/ 9067:
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component.html?ngResource */ 4618);
/* harmony import */ var _list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component.css?ngResource */ 1680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/list.service */ 1258);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
function cov_1keyb416ky() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/list/list.component.ts";
  var hash = "aa314f08ef8dc386206bed53b0c45e2622d13e59";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/list/list.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 45
        }
      },
      "2": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 39
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 39
        }
      },
      "4": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 23
        }
      },
      "5": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 25
        }
      },
      "6": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 27
        }
      },
      "7": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 28
        }
      },
      "8": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 70
        }
      },
      "9": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 75
        }
      },
      "10": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 28,
          column: 11
        }
      },
      "11": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 27,
          column: 15
        }
      },
      "12": {
        start: {
          line: 26,
          column: 16
        },
        end: {
          line: 26,
          column: 53
        }
      },
      "13": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 35,
          column: 9
        }
      },
      "14": {
        start: {
          line: 32,
          column: 12
        },
        end: {
          line: 32,
          column: 103
        }
      },
      "15": {
        start: {
          line: 33,
          column: 12
        },
        end: {
          line: 33,
          column: 36
        }
      },
      "16": {
        start: {
          line: 34,
          column: 12
        },
        end: {
          line: 34,
          column: 37
        }
      },
      "17": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 61
        }
      },
      "18": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 41,
          column: 44
        }
      },
      "19": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 41
        }
      },
      "20": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 51,
          column: 11
        }
      },
      "21": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 50,
          column: 13
        }
      },
      "22": {
        start: {
          line: 49,
          column: 16
        },
        end: {
          line: 49,
          column: 111
        }
      },
      "23": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 37
        }
      },
      "24": {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 59,
          column: 2
        }
      },
      "25": {
        start: {
          line: 55,
          column: 37
        },
        end: {
          line: 59,
          column: 1
        }
      },
      "26": {
        start: {
          line: 60,
          column: 0
        },
        end: {
          line: 66,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 58
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        loc: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 24
          },
          end: {
            line: 24,
            column: 25
          }
        },
        loc: {
          start: {
            line: 24,
            column: 38
          },
          end: {
            line: 28,
            column: 9
          }
        },
        line: 24
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 47
          },
          end: {
            line: 25,
            column: 48
          }
        },
        loc: {
          start: {
            line: 25,
            column: 54
          },
          end: {
            line: 27,
            column: 13
          }
        },
        line: 25
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        loc: {
          start: {
            line: 30,
            column: 62
          },
          end: {
            line: 36,
            column: 5
          }
        },
        line: 30
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        loc: {
          start: {
            line: 37,
            column: 32
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 37
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        loc: {
          start: {
            line: 40,
            column: 25
          },
          end: {
            line: 42,
            column: 5
          }
        },
        line: 40
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        },
        loc: {
          start: {
            line: 43,
            column: 27
          },
          end: {
            line: 45,
            column: 5
          }
        },
        line: 43
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        loc: {
          start: {
            line: 46,
            column: 49
          },
          end: {
            line: 53,
            column: 5
          }
        },
        line: 46
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 47,
            column: 31
          },
          end: {
            line: 47,
            column: 32
          }
        },
        loc: {
          start: {
            line: 47,
            column: 53
          },
          end: {
            line: 51,
            column: 9
          }
        },
        line: 47
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 55,
            column: 31
          },
          end: {
            line: 55,
            column: 32
          }
        },
        loc: {
          start: {
            line: 55,
            column: 37
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 55
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 48,
            column: 12
          },
          end: {
            line: 50,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 12
          },
          end: {
            line: 50,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 48
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "list.component.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/list/list.component.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAiB,MAAM,eAAe,CAAC;AAEzD,OAAO,EAAE,WAAW,EAAE,MAAM,wBAAwB,CAAC;AACrD,OAAO,EAAE,WAAW,EAAE,MAAM,wBAAwB,CAAC;AACrD,OAAO,EAAE,cAAc,EAAE,MAAM,iBAAiB,CAAC;IAOpC,aAAa,SAAb,aAAa;IASxB,YAAoB,cAA8B,EAAU,WAAwB,EAAU,WAAwB;QAAlG,mBAAc,GAAd,cAAc,CAAgB;QAAU,gBAAW,GAAX,WAAW,CAAa;QAAU,gBAAW,GAAX,WAAW,CAAa;QAPtH,SAAI,GAAG,EAAE,CAAC;QACV,WAAM,GAAQ,EAAE,CAAC;QACjB,aAAQ,GAAQ,EAAE,CAAC;QACnB,cAAS,GAAU,EAAE,CAAC;IAIoG,CAAC;IAE3H,QAAQ;QACN,IAAI,CAAC,MAAM,GAAG,IAAI,CAAC,cAAc,CAAC,QAAQ,CAAC,QAAQ,CAAC,GAAG,CAAC,IAAI,CAAC,CAAA;QAC7D,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC,cAAc,CAAC,QAAQ,CAAC,QAAQ,CAAC,GAAG,CAAC,OAAO,CAAC,CAAA;QAClE,IAAI,CAAC,WAAW,CAAC,mBAAmB,CAAC,GAAG;aACvC,KAAK,CAAC,KAAK,EAAE,IAAI,EAAE,IAAI,CAAC,WAAW,CAAC,GAAG,CAAC;aACxC,KAAK,CAAC,QAAQ,EAAE,IAAI,EAAE,IAAI,CAAC,MAAM,CAAC;aAClC,UAAU,CAAC,CAAC,QAAQ,EAAE,EAAE;YACvB,IAAI,CAAC,SAAS,GAAG,QAAQ,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,EAAE;gBACvC,OAAO,EAAE,EAAE,EAAE,GAAG,CAAC,EAAE,EAAE,GAAG,GAAG,CAAC,IAAI,EAAE,EAAE,CAAA;YACtC,CAAC,CAAC,CAAC;QACL,CAAC,CAAC,CAAC;IACL,CAAC;IAGD,aAAa,CAAC,EAAO,EAAE,YAAiB,EAAE,aAAkB,EAAE,SAAc;QAC1E,IAAG,YAAY,CAAC,KAAK,EAAC;YACpB,IAAI,CAAC,WAAW,CAAC,WAAW,CAAC,EAAE,EAAE,YAAY,CAAC,KAAK,EAAE,aAAa,CAAC,KAAK,EAAE,SAAS,CAAC,KAAK,CAAC,CAAA;YAC1F,YAAY,CAAC,KAAK,GAAG,EAAE,CAAA;YACvB,aAAa,CAAC,KAAK,GAAG,EAAE,CAAA;SACzB;IACH,CAAC;IAED,YAAY,CAAC,EAAU,EAAE,SAAkB;QACzC,IAAI,CAAC,WAAW,CAAC,oBAAoB,CAAC,EAAE,EAAE,SAAS,CAAC,CAAA;IACtD,CAAC;IAED,gBAAgB,CAAC,EAAU;QACzB,IAAI,CAAC,WAAW,CAAC,cAAc,CAAC,EAAE,CAAC,CAAA;IACrC,CAAC;IAED,YAAY,CAAC,QAAa;QACxB,IAAI,CAAC,gBAAgB,GAAG,QAAQ,CAAC;IACnC,CAAC;IAED,kCAAkC,CAAC,QAAa;QAC9C,IAAI,CAAC,SAAS,CAAC,OAAO,CAAC,CAAC,EAAE,EAAE,KAAK,EAAE,KAAK,EAAC,EAAE;YACzC,IAAG,QAAQ,CAAC,EAAE,IAAI,EAAE,CAAC,EAAE,EAAC;gBACtB,IAAI,CAAC,WAAW,CAAC,oBAAoB,CAAC,EAAE,CAAC,EAAE,EAAE,QAAQ,CAAC,KAAK,EAAE,QAAQ,CAAC,QAAQ,EAAE,QAAQ,CAAC,IAAI,CAAC,CAAA;aAC/F;QACH,CAAC,CAAC,CAAC;QACH,IAAI,CAAC,gBAAgB,GAAG,IAAI,CAAC;IAC/B,CAAC;;;;;;;AApDU,aAAa;IALzB,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,8BAAoC;;KAErC,CAAC;GACW,aAAa;SAAb,aAAa",
      sourcesContent: ["import { Component, Input, OnInit } from '@angular/core';\nimport { ListsService } from '../shared/lists.service';\nimport { ListService } from '../shared/list.service';\nimport { AuthService } from '../shared/auth.service';\nimport { ActivatedRoute } from '@angular/router';\n\n@Component({\n  selector: 'app-list',\n  templateUrl: './list.component.html',\n  styleUrls: ['./list.component.css']\n})\nexport class ListComponent implements OnInit {\n  \n  list = {};\n  listId: any = \"\";\n  listname: any = \"\";\n  itemLists: any[] = [];\n  selectedListItem: any;\n  \n\n  constructor(private activatedRoute: ActivatedRoute, private listService: ListService, private authService: AuthService) { }\n\n  ngOnInit(): void {\n    this.listId = this.activatedRoute.snapshot.paramMap.get(\"id\")\n    this.listname = this.activatedRoute.snapshot.paramMap.get(\"title\")\n    this.listService.firestoreCollection.ref\n    .where(\"uid\", \"==\", this.authService.uid)\n    .where(\"listId\", \"==\", this.listId)\n    .onSnapshot((snapshot) => {\n      this.itemLists = snapshot.docs.map(doc => {\n        return { id: doc.id, ...doc.data() }\n      });\n    });\n  }\n\n\n  onAddListItem(id: any, productInput: any, quantityInput: any, unitInput: any){\n    if(productInput.value){\n      this.listService.addListItem(id, productInput.value, quantityInput.value, unitInput.value)\n      productInput.value = \"\"\n      quantityInput.value = \"\"\n    }\n  }\n\n  onItemChange(id: string, newStatus: boolean){\n    this.listService.updateListItemStatus(id, newStatus)\n  }\n\n  onListItemDelete(id: string){\n    this.listService.deleteListItem(id)\n  }\n\n  editListItem(listItem: any) {\n    this.selectedListItem = listItem;\n  }\n\n  sendListItemToListItemEventHandler(listItem: any){\n    this.itemLists.forEach((el, index, array)=>{\n      if(listItem.id == el.id){\n        this.listService.updateListItemFields(el.id, listItem.title, listItem.quantity, listItem.unit)\n      }\n    });\n    this.selectedListItem = null;\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "aa314f08ef8dc386206bed53b0c45e2622d13e59"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1keyb416ky = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1keyb416ky();







cov_1keyb416ky().s[0]++;
let ListComponent = class ListComponent {
  constructor(activatedRoute, listService, authService) {
    cov_1keyb416ky().f[0]++;
    cov_1keyb416ky().s[1]++;
    this.activatedRoute = activatedRoute;
    cov_1keyb416ky().s[2]++;
    this.listService = listService;
    cov_1keyb416ky().s[3]++;
    this.authService = authService;
    cov_1keyb416ky().s[4]++;
    this.list = {};
    cov_1keyb416ky().s[5]++;
    this.listId = "";
    cov_1keyb416ky().s[6]++;
    this.listname = "";
    cov_1keyb416ky().s[7]++;
    this.itemLists = [];
  }

  ngOnInit() {
    cov_1keyb416ky().f[1]++;
    cov_1keyb416ky().s[8]++;
    this.listId = this.activatedRoute.snapshot.paramMap.get("id");
    cov_1keyb416ky().s[9]++;
    this.listname = this.activatedRoute.snapshot.paramMap.get("title");
    cov_1keyb416ky().s[10]++;
    this.listService.firestoreCollection.ref.where("uid", "==", this.authService.uid).where("listId", "==", this.listId).onSnapshot(snapshot => {
      cov_1keyb416ky().f[2]++;
      cov_1keyb416ky().s[11]++;
      this.itemLists = snapshot.docs.map(doc => {
        cov_1keyb416ky().f[3]++;
        cov_1keyb416ky().s[12]++;
        return {
          id: doc.id,
          ...doc.data()
        };
      });
    });
  }

  onAddListItem(id, productInput, quantityInput, unitInput) {
    cov_1keyb416ky().f[4]++;
    cov_1keyb416ky().s[13]++;

    if (productInput.value) {
      cov_1keyb416ky().b[0][0]++;
      cov_1keyb416ky().s[14]++;
      this.listService.addListItem(id, productInput.value, quantityInput.value, unitInput.value);
      cov_1keyb416ky().s[15]++;
      productInput.value = "";
      cov_1keyb416ky().s[16]++;
      quantityInput.value = "";
    } else {
      cov_1keyb416ky().b[0][1]++;
    }
  }

  onItemChange(id, newStatus) {
    cov_1keyb416ky().f[5]++;
    cov_1keyb416ky().s[17]++;
    this.listService.updateListItemStatus(id, newStatus);
  }

  onListItemDelete(id) {
    cov_1keyb416ky().f[6]++;
    cov_1keyb416ky().s[18]++;
    this.listService.deleteListItem(id);
  }

  editListItem(listItem) {
    cov_1keyb416ky().f[7]++;
    cov_1keyb416ky().s[19]++;
    this.selectedListItem = listItem;
  }

  sendListItemToListItemEventHandler(listItem) {
    cov_1keyb416ky().f[8]++;
    cov_1keyb416ky().s[20]++;
    this.itemLists.forEach((el, index, array) => {
      cov_1keyb416ky().f[9]++;
      cov_1keyb416ky().s[21]++;

      if (listItem.id == el.id) {
        cov_1keyb416ky().b[1][0]++;
        cov_1keyb416ky().s[22]++;
        this.listService.updateListItemFields(el.id, listItem.title, listItem.quantity, listItem.unit);
      } else {
        cov_1keyb416ky().b[1][1]++;
      }
    });
    cov_1keyb416ky().s[23]++;
    this.selectedListItem = null;
  }

};
cov_1keyb416ky().s[24]++;

ListComponent.ctorParameters = () => {
  cov_1keyb416ky().f[10]++;
  cov_1keyb416ky().s[25]++;
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _shared_list_service__WEBPACK_IMPORTED_MODULE_2__.ListService
  }, {
    type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
  }];
};

cov_1keyb416ky().s[26]++;
ListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-list',
  template: _list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], ListComponent);


/***/ }),

/***/ 2534:
/*!*********************************************************!*\
  !*** ./src/app/lists-edit/lists-edit.component.spec.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _lists_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists-edit.component */ 4609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




describe('ListsEditComponent', () => {
  let component;
  let fixture;
  let selectedList = {
    id: "1",
    title: "test",
    date: "01-01-2023"
  };
  beforeEach( /*#__PURE__*/(0,_Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.configureTestingModule({
      declarations: [_lists_edit_component__WEBPACK_IMPORTED_MODULE_1__.ListsEditComponent],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.createComponent(_lists_edit_component__WEBPACK_IMPORTED_MODULE_1__.ListsEditComponent);
    component = fixture.componentInstance;
    component.selectedList = selectedList;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should edit list when button is clicked', () => {
    spyOn(component, "sendListToList");
    fixture.nativeElement.querySelector('button').click();
    expect(component.sendListToList).toHaveBeenCalled();
  });
  it('should display the correct form inputs', () => {
    fixture.detectChanges();
    const titleInput = fixture.debugElement.nativeElement.querySelector('[test-data="lists-table-edit-list-title"]');
    const dateInput = fixture.debugElement.nativeElement.querySelector('[test-data="lists-table-edit-list-date"]');
    expect(titleInput.value).toEqual('');
    expect(dateInput.value).toEqual('');
  });
});

/***/ }),

/***/ 4609:
/*!****************************************************!*\
  !*** ./src/app/lists-edit/lists-edit.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListsEditComponent": () => (/* binding */ ListsEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lists_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists-edit.component.html?ngResource */ 7671);
/* harmony import */ var _lists_edit_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists-edit.component.css?ngResource */ 9423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
function cov_26x1xiuh4p() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/lists-edit/lists-edit.component.ts";
  var hash = "6f33b8b0791e769f6f767fa44b34e826ec8fccaa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/lists-edit/lists-edit.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 25
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 54
        }
      },
      "2": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 54
        }
      },
      "3": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 45
        }
      },
      "4": {
        start: {
          line: 15,
          column: 42
        },
        end: {
          line: 15,
          column: 44
        }
      },
      "5": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "6": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 26,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 15
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 36
          },
          end: {
            line: 15,
            column: 37
          }
        },
        loc: {
          start: {
            line: 15,
            column: 42
          },
          end: {
            line: 15,
            column: 44
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "lists-edit.component.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/lists-edit/lists-edit.component.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAU,KAAK,EAAE,MAAM,EAAE,YAAY,EAAE,MAAM,eAAe,CAAC;IAOlE,kBAAkB,SAAlB,kBAAkB;IAK7B;QAFU,wBAAmB,GAAsB,IAAI,YAAY,EAAE;IAErD,CAAC;IAEjB,QAAQ;IACR,CAAC;IAED,cAAc,CAAC,QAAa;QAC1B,IAAI,CAAC,mBAAmB,CAAC,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,CAAC;IAChD,CAAC;;;;2BAVA,KAAK;kCACL,MAAM;;AAHI,kBAAkB;IAL9B,SAAS,CAAC;QACT,QAAQ,EAAE,gBAAgB;QAC1B,8BAA0C;;KAE3C,CAAC;GACW,kBAAkB;SAAlB,kBAAkB",
      sourcesContent: ["import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'app-lists-edit',\n  templateUrl: './lists-edit.component.html',\n  styleUrls: ['./lists-edit.component.css']\n})\nexport class ListsEditComponent implements OnInit {\n\n  @Input() selectedList: any;\n  @Output() sendListToListEvent: EventEmitter<any> = new EventEmitter();\n\n  constructor() { }\n\n  ngOnInit(): void {\n  }\n\n  sendListToList(listForm: any){\n    this.sendListToListEvent.emit(listForm.value);\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6f33b8b0791e769f6f767fa44b34e826ec8fccaa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26x1xiuh4p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_26x1xiuh4p();




cov_26x1xiuh4p().s[0]++;
let ListsEditComponent = class ListsEditComponent {
  constructor() {
    cov_26x1xiuh4p().f[0]++;
    cov_26x1xiuh4p().s[1]++;
    this.sendListToListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  ngOnInit() {
    cov_26x1xiuh4p().f[1]++;
  }

  sendListToList(listForm) {
    cov_26x1xiuh4p().f[2]++;
    cov_26x1xiuh4p().s[2]++;
    this.sendListToListEvent.emit(listForm.value);
  }

};
cov_26x1xiuh4p().s[3]++;

ListsEditComponent.ctorParameters = () => {
  cov_26x1xiuh4p().f[3]++;
  cov_26x1xiuh4p().s[4]++;
  return [];
};

cov_26x1xiuh4p().s[5]++;
ListsEditComponent.propDecorators = {
  selectedList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  sendListToListEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }]
};
cov_26x1xiuh4p().s[6]++;
ListsEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-lists-edit',
  template: _lists_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_lists_edit_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], ListsEditComponent);


/***/ }),

/***/ 6821:
/*!***********************************************!*\
  !*** ./src/app/lists/lists.component.spec.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _lists_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists.component */ 6558);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _shared_lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/lists.service */ 4467);









describe('ListsComponent', () => {
  let component;
  let fixture;
  let authService;
  let listsService;
  beforeEach( /*#__PURE__*/(0,_Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield _angular_core_testing__WEBPACK_IMPORTED_MODULE_5__.TestBed.configureTestingModule({
      declarations: [_lists_component__WEBPACK_IMPORTED_MODULE_1__.ListsComponent],
      imports: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_6__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig)],
      providers: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore]
    }).compileComponents();
    authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_5__.TestBed.inject(_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService);
    listsService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_5__.TestBed.inject(_shared_lists_service__WEBPACK_IMPORTED_MODULE_4__.ListsService);
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_5__.TestBed.createComponent(_lists_component__WEBPACK_IMPORTED_MODULE_1__.ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the listService addList method', () => {
    spyOn(listsService, 'addList');
    let product1 = {
      value: "aa"
    };
    let product = {
      value: product1
    };
    component.onAddList(product, product);
    expect(listsService.addList).toHaveBeenCalled();
  });
  it('should call the listService updateListStatus method', () => {
    spyOn(listsService, 'updateListStatus');
    let newStatus = true;
    component.onStatusChange("1", newStatus);
    expect(listsService.updateListStatus).toHaveBeenCalled();
  });
  it('should call the editList method', () => {
    spyOn(component, 'editList');
    component.editList("1");
    expect(component.editList).toHaveBeenCalled();
  });
  it('should call the listsService deleteList method', () => {
    spyOn(listsService, 'deleteList');
    component.onListDelete('id');
    expect(listsService.deleteList).toHaveBeenCalledWith('id');
  });
  it('should call the listsService updateListFields method', () => {
    spyOn(listsService, 'updateListFields');
    component.lists = [{
      id: 1
    }, {
      id: 2
    }];
    let test = {
      id: 2
    };
    component.sendListToListEventHandler(test);
    expect(listsService.updateListFields).toHaveBeenCalled();
  });
});

/***/ }),

/***/ 6558:
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListsComponent": () => (/* binding */ ListsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lists_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists.component.html?ngResource */ 5384);
/* harmony import */ var _lists_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists.component.css?ngResource */ 866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_lists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/lists.service */ 4467);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
function cov_1ccqgpyx60() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/lists/lists.component.ts";
  var hash = "62ca11fcb56e02bb80810175618e29165c2a22f0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/lists/lists.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 52,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 41
        }
      },
      "2": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 39
        }
      },
      "3": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 24
        }
      },
      "4": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 28
        }
      },
      "5": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 39
        }
      },
      "6": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 23,
          column: 11
        }
      },
      "7": {
        start: {
          line: 19,
          column: 27
        },
        end: {
          line: 21,
          column: 14
        }
      },
      "8": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 53
        }
      },
      "9": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 34
        }
      },
      "10": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 87
        }
      },
      "11": {
        start: {
          line: 26,
          column: 46
        },
        end: {
          line: 26,
          column: 85
        }
      },
      "12": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 33,
          column: 9
        }
      },
      "13": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 30,
          column: 81
        }
      },
      "14": {
        start: {
          line: 31,
          column: 12
        },
        end: {
          line: 31,
          column: 38
        }
      },
      "15": {
        start: {
          line: 32,
          column: 12
        },
        end: {
          line: 32,
          column: 37
        }
      },
      "16": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 58
        }
      },
      "17": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 41
        }
      },
      "18": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 33
        }
      },
      "19": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 49,
          column: 11
        }
      },
      "20": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 48,
          column: 13
        }
      },
      "21": {
        start: {
          line: 47,
          column: 16
        },
        end: {
          line: 47,
          column: 81
        }
      },
      "22": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 33
        }
      },
      "23": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 56,
          column: 2
        }
      },
      "24": {
        start: {
          line: 53,
          column: 38
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "25": {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 63,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        loc: {
          start: {
            line: 8,
            column: 43
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 15
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 24
          },
          end: {
            line: 18,
            column: 25
          }
        },
        loc: {
          start: {
            line: 18,
            column: 38
          },
          end: {
            line: 23,
            column: 9
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 19,
            column: 45
          },
          end: {
            line: 19,
            column: 46
          }
        },
        loc: {
          start: {
            line: 19,
            column: 52
          },
          end: {
            line: 21,
            column: 13
          }
        },
        line: 19
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        loc: {
          start: {
            line: 25,
            column: 30
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 25
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 26,
            column: 41
          },
          end: {
            line: 26,
            column: 42
          }
        },
        loc: {
          start: {
            line: 26,
            column: 46
          },
          end: {
            line: 26,
            column: 85
          }
        },
        line: 26
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 45
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 28
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        loc: {
          start: {
            line: 35,
            column: 34
          },
          end: {
            line: 37,
            column: 5
          }
        },
        line: 35
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        loc: {
          start: {
            line: 38,
            column: 21
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 38
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        loc: {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 43,
            column: 5
          }
        },
        line: 41
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        loc: {
          start: {
            line: 44,
            column: 37
          },
          end: {
            line: 51,
            column: 5
          }
        },
        line: 44
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 45,
            column: 27
          },
          end: {
            line: 45,
            column: 28
          }
        },
        loc: {
          start: {
            line: 45,
            column: 49
          },
          end: {
            line: 49,
            column: 9
          }
        },
        line: 45
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 53,
            column: 32
          },
          end: {
            line: 53,
            column: 33
          }
        },
        loc: {
          start: {
            line: 53,
            column: 38
          },
          end: {
            line: 56,
            column: 1
          }
        },
        line: 53
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 33,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 33,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 48,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 48,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 46
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "lists.component.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/lists/lists.component.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAU,MAAM,eAAe,CAAC;AAClD,OAAO,EAAE,YAAY,EAAE,MAAM,yBAAyB,CAAC;AACvD,OAAO,EAAE,WAAW,EAAE,MAAM,wBAAwB,CAAC;IAOxC,cAAc,SAAd,cAAc;IAOzB,YAAoB,YAA0B,EAAU,WAAwB;QAA5D,iBAAY,GAAZ,YAAY,CAAc;QAAU,gBAAW,GAAX,WAAW,CAAa;QALhF,UAAK,GAAU,EAAE,CAAC;QAClB,cAAS,GAAU,EAAE,CAAC;QAEtB,yBAAoB,GAAQ,EAAE,CAAC;IAEqD,CAAC;IAErF,QAAQ;QACN,IAAI,CAAC,YAAY,CAAC,mBAAmB,CAAC,GAAG;aACxC,KAAK,CAAC,KAAK,EAAE,IAAI,EAAE,IAAI,CAAC,WAAW,CAAC,GAAG,CAAC;aACxC,UAAU,CAAC,CAAC,QAAQ,EAAE,EAAE;YACvB,IAAI,QAAQ,GAAG,QAAQ,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,EAAE;gBACrC,OAAO,EAAE,EAAE,EAAE,GAAG,CAAC,EAAE,EAAE,GAAG,GAAG,CAAC,IAAI,EAAE,EAAE,CAAA;YACtC,CAAC,CAAC,CAAC;YACH,IAAI,CAAC,KAAK,GAAG,QAAQ,CAAC;QAExB,CAAC,CAAC,CAAC;IACL,CAAC;IAED,eAAe,CAAC,QAAe;QAC7B,IAAI,CAAC,SAAS,GAAG,QAAQ,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,GAAG,IAAI,CAAC,oBAAoB,CAAC,EAAE,CAAC,CAAA;IAChF,CAAC;IAED,SAAS,CAAC,cAAmB,EAAE,aAAkB;QAC/C,IAAG,cAAc,CAAC,KAAK,EAAC;YACtB,IAAI,CAAC,YAAY,CAAC,OAAO,CAAC,cAAc,CAAC,KAAK,EAAE,aAAa,CAAC,KAAK,CAAC,CAAA;YACpE,cAAc,CAAC,KAAK,GAAG,EAAE,CAAA;YACzB,aAAa,CAAC,KAAK,GAAG,EAAE,CAAA;SACzB;IACH,CAAC;IAED,cAAc,CAAC,EAAU,EAAE,SAAkB;QAC3C,IAAI,CAAC,YAAY,CAAC,gBAAgB,CAAC,EAAE,EAAE,SAAS,CAAC,CAAA;IACnD,CAAC;IAED,YAAY,CAAC,EAAU;QACrB,IAAI,CAAC,YAAY,CAAC,UAAU,CAAC,EAAE,CAAC,CAAA;IAClC,CAAC;IAED,QAAQ,CAAC,IAAS;QAChB,IAAI,CAAC,YAAY,GAAG,IAAI,CAAC;IAC3B,CAAC;IAED,0BAA0B,CAAC,IAAS;QAClC,IAAI,CAAC,KAAK,CAAC,OAAO,CAAC,CAAC,EAAE,EAAE,KAAK,EAAE,KAAK,EAAC,EAAE;YACrC,IAAG,IAAI,CAAC,EAAE,IAAI,EAAE,CAAC,EAAE,EAAC;gBAClB,IAAI,CAAC,YAAY,CAAC,gBAAgB,CAAC,EAAE,CAAC,EAAE,EAAE,IAAI,CAAC,KAAK,EAAE,IAAI,CAAC,IAAI,CAAC,CAAA;aACjE;QACH,CAAC,CAAC,CAAC;QACH,IAAI,CAAC,YAAY,GAAG,IAAI,CAAC;IAC3B,CAAC;;;;;;AApDU,cAAc;IAL1B,SAAS,CAAC;QACT,QAAQ,EAAE,WAAW;QACrB,8BAAqC;;KAEtC,CAAC;GACW,cAAc;SAAd,cAAc",
      sourcesContent: ["import { Component, OnInit } from '@angular/core';\nimport { ListsService } from '../shared/lists.service';\nimport { AuthService } from '../shared/auth.service';\n\n@Component({\n  selector: 'app-lists',\n  templateUrl: './lists.component.html',\n  styleUrls: ['./lists.component.css']\n})\nexport class ListsComponent implements OnInit {\n\n  lists: any[] = [];\n  itemLists: any[] = [];\n  selectedList: any;\n  showSelectedListItem: any = \"\";\n  \n  constructor(private listsService: ListsService, private authService: AuthService) { }\n\n  ngOnInit(): void {\n    this.listsService.firestoreCollection.ref\n    .where(\"uid\", \"==\", this.authService.uid)\n    .onSnapshot((snapshot) => {\n      let ourLists = snapshot.docs.map(doc => {\n        return { id: doc.id, ...doc.data() }\n      });\n      this.lists = ourLists;\n\n    });\n  }\n\n  filterItemLists(itemList: any[]) {\n    this.itemLists = itemList.filter(x => x.listId = this.showSelectedListItem.id)\n  }\n\n  onAddList(listTitleInput: any, listDateInput: any){\n    if(listTitleInput.value){\n      this.listsService.addList(listTitleInput.value, listDateInput.value)\n      listTitleInput.value = \"\"\n      listDateInput.value = \"\"\n    }\n  }\n\n  onStatusChange(id: string, newStatus: boolean){\n    this.listsService.updateListStatus(id, newStatus)\n  }\n\n  onListDelete(id: string){\n    this.listsService.deleteList(id)\n  }\n\n  editList(list: any) {\n    this.selectedList = list;\n  }\n\n  sendListToListEventHandler(list: any){\n    this.lists.forEach((el, index, array)=>{\n      if(list.id == el.id){\n        this.listsService.updateListFields(el.id, list.title, list.date)\n      }\n    });\n    this.selectedList = null;\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "62ca11fcb56e02bb80810175618e29165c2a22f0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ccqgpyx60 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ccqgpyx60();






cov_1ccqgpyx60().s[0]++;
let ListsComponent = class ListsComponent {
  constructor(listsService, authService) {
    cov_1ccqgpyx60().f[0]++;
    cov_1ccqgpyx60().s[1]++;
    this.listsService = listsService;
    cov_1ccqgpyx60().s[2]++;
    this.authService = authService;
    cov_1ccqgpyx60().s[3]++;
    this.lists = [];
    cov_1ccqgpyx60().s[4]++;
    this.itemLists = [];
    cov_1ccqgpyx60().s[5]++;
    this.showSelectedListItem = "";
  }

  ngOnInit() {
    cov_1ccqgpyx60().f[1]++;
    cov_1ccqgpyx60().s[6]++;
    this.listsService.firestoreCollection.ref.where("uid", "==", this.authService.uid).onSnapshot(snapshot => {
      cov_1ccqgpyx60().f[2]++;
      let ourLists = (cov_1ccqgpyx60().s[7]++, snapshot.docs.map(doc => {
        cov_1ccqgpyx60().f[3]++;
        cov_1ccqgpyx60().s[8]++;
        return {
          id: doc.id,
          ...doc.data()
        };
      }));
      cov_1ccqgpyx60().s[9]++;
      this.lists = ourLists;
    });
  }

  filterItemLists(itemList) {
    cov_1ccqgpyx60().f[4]++;
    cov_1ccqgpyx60().s[10]++;
    this.itemLists = itemList.filter(x => {
      cov_1ccqgpyx60().f[5]++;
      cov_1ccqgpyx60().s[11]++;
      return x.listId = this.showSelectedListItem.id;
    });
  }

  onAddList(listTitleInput, listDateInput) {
    cov_1ccqgpyx60().f[6]++;
    cov_1ccqgpyx60().s[12]++;

    if (listTitleInput.value) {
      cov_1ccqgpyx60().b[0][0]++;
      cov_1ccqgpyx60().s[13]++;
      this.listsService.addList(listTitleInput.value, listDateInput.value);
      cov_1ccqgpyx60().s[14]++;
      listTitleInput.value = "";
      cov_1ccqgpyx60().s[15]++;
      listDateInput.value = "";
    } else {
      cov_1ccqgpyx60().b[0][1]++;
    }
  }

  onStatusChange(id, newStatus) {
    cov_1ccqgpyx60().f[7]++;
    cov_1ccqgpyx60().s[16]++;
    this.listsService.updateListStatus(id, newStatus);
  }

  onListDelete(id) {
    cov_1ccqgpyx60().f[8]++;
    cov_1ccqgpyx60().s[17]++;
    this.listsService.deleteList(id);
  }

  editList(list) {
    cov_1ccqgpyx60().f[9]++;
    cov_1ccqgpyx60().s[18]++;
    this.selectedList = list;
  }

  sendListToListEventHandler(list) {
    cov_1ccqgpyx60().f[10]++;
    cov_1ccqgpyx60().s[19]++;
    this.lists.forEach((el, index, array) => {
      cov_1ccqgpyx60().f[11]++;
      cov_1ccqgpyx60().s[20]++;

      if (list.id == el.id) {
        cov_1ccqgpyx60().b[1][0]++;
        cov_1ccqgpyx60().s[21]++;
        this.listsService.updateListFields(el.id, list.title, list.date);
      } else {
        cov_1ccqgpyx60().b[1][1]++;
      }
    });
    cov_1ccqgpyx60().s[22]++;
    this.selectedList = null;
  }

};
cov_1ccqgpyx60().s[23]++;

ListsComponent.ctorParameters = () => {
  cov_1ccqgpyx60().f[12]++;
  cov_1ccqgpyx60().s[24]++;
  return [{
    type: _shared_lists_service__WEBPACK_IMPORTED_MODULE_2__.ListsService
  }, {
    type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
  }];
};

cov_1ccqgpyx60().s[25]++;
ListsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-lists',
  template: _lists_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_lists_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], ListsComponent);


/***/ }),

/***/ 2827:
/*!*********************************************!*\
  !*** ./src/app/shared/auth.service.spec.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 8338);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat */ 1879);






describe('AuthService', () => {
  let authService;
  let fixture;
  beforeEach( /*#__PURE__*/(0,_Users_juliawitek_Desktop_Testowanie_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.configureTestingModule({
      imports: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_4__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig)],
      providers: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth]
    });
    authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.inject(_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
  }));

  const generateEmailAndPassword = () => {
    const randomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    let registerForm = {
      email: `${randomString()}@${randomString()}.test`,
      password: 'testpassword',
      confirm_password: 'testpassword'
    };
    let loginForm = {
      email: `${randomString()}@${randomString()}.test`,
      password: 'testpassword'
    };
    return {
      registerForm,
      loginForm
    };
  };

  it("should be created", () => {
    expect(authService).toBeTruthy();
  });
  it('should creates an account', () => {
    const {
      registerForm,
      loginForm
    } = generateEmailAndPassword();
    const result = authService.register(registerForm);
    expect(result).toEqual(true);
  });
  it("should logs users in", () => {
    const {
      registerForm,
      loginForm
    } = generateEmailAndPassword();
    const result = authService.register(registerForm);
    expect(result).toEqual(true);
    const loginResult = authService.login(loginForm);
    expect(loginResult).toEqual(true);
  });
  it("should logout user", () => {
    const result = authService.logout();
    expect(result).toEqual(true);
  });
});

/***/ }),

/***/ 8338:
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 6818);
function cov_1s88np4rmd() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/auth.service.ts";
  var hash = "66710f6120cb98067d74b9341e1b3fccbcacbe90";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/auth.service.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 75,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 29
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 37
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "4": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 22
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 36
        }
      },
      "6": {
        start: {
          line: 14,
          column: 21
        },
        end: {
          line: 14,
          column: 30
        }
      },
      "7": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 27,
          column: 53
        }
      },
      "8": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 40
        }
      },
      "9": {
        start: {
          line: 18,
          column: 12
        },
        end: {
          line: 18,
          column: 39
        }
      },
      "10": {
        start: {
          line: 19,
          column: 12
        },
        end: {
          line: 19,
          column: 47
        }
      },
      "11": {
        start: {
          line: 22,
          column: 30
        },
        end: {
          line: 22,
          column: 40
        }
      },
      "12": {
        start: {
          line: 23,
          column: 33
        },
        end: {
          line: 23,
          column: 46
        }
      },
      "13": {
        start: {
          line: 24,
          column: 12
        },
        end: {
          line: 24,
          column: 64
        }
      },
      "14": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 25
        }
      },
      "15": {
        start: {
          line: 27,
          column: 28
        },
        end: {
          line: 27,
          column: 50
        }
      },
      "16": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 20
        }
      },
      "17": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 32,
          column: 19
        }
      },
      "18": {
        start: {
          line: 32,
          column: 12
        },
        end: {
          line: 32,
          column: 19
        }
      },
      "19": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 30
        }
      },
      "20": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "21": {
        start: {
          line: 35,
          column: 12
        },
        end: {
          line: 35,
          column: 41
        }
      },
      "22": {
        start: {
          line: 36,
          column: 12
        },
        end: {
          line: 36,
          column: 44
        }
      },
      "23": {
        start: {
          line: 37,
          column: 12
        },
        end: {
          line: 37,
          column: 35
        }
      },
      "24": {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 38,
          column: 25
        }
      },
      "25": {
        start: {
          line: 40,
          column: 21
        },
        end: {
          line: 40,
          column: 30
        }
      },
      "26": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 54,
          column: 53
        }
      },
      "27": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 43,
          column: 40
        }
      },
      "28": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 44,
          column: 41
        }
      },
      "29": {
        start: {
          line: 45,
          column: 12
        },
        end: {
          line: 45,
          column: 41
        }
      },
      "30": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 46,
          column: 45
        }
      },
      "31": {
        start: {
          line: 49,
          column: 12
        },
        end: {
          line: 49,
          column: 41
        }
      },
      "32": {
        start: {
          line: 50,
          column: 30
        },
        end: {
          line: 50,
          column: 40
        }
      },
      "33": {
        start: {
          line: 51,
          column: 33
        },
        end: {
          line: 51,
          column: 46
        }
      },
      "34": {
        start: {
          line: 52,
          column: 12
        },
        end: {
          line: 52,
          column: 25
        }
      },
      "35": {
        start: {
          line: 54,
          column: 28
        },
        end: {
          line: 54,
          column: 50
        }
      },
      "36": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 20
        }
      },
      "37": {
        start: {
          line: 58,
          column: 21
        },
        end: {
          line: 58,
          column: 30
        }
      },
      "38": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 66,
          column: 11
        }
      },
      "39": {
        start: {
          line: 61,
          column: 12
        },
        end: {
          line: 61,
          column: 44
        }
      },
      "40": {
        start: {
          line: 62,
          column: 12
        },
        end: {
          line: 62,
          column: 41
        }
      },
      "41": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 65,
          column: 25
        }
      },
      "42": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 20
        }
      },
      "43": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 36
        }
      },
      "44": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 30
        }
      },
      "45": {
        start: {
          line: 76,
          column: 0
        },
        end: {
          line: 78,
          column: 2
        }
      },
      "46": {
        start: {
          line: 76,
          column: 35
        },
        end: {
          line: 78,
          column: 1
        }
      },
      "47": {
        start: {
          line: 79,
          column: 0
        },
        end: {
          line: 83,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 18
          },
          end: {
            line: 16,
            column: 19
          }
        },
        loc: {
          start: {
            line: 16,
            column: 38
          },
          end: {
            line: 20,
            column: 9
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 21,
            column: 20
          }
        },
        loc: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 26,
            column: 9
          }
        },
        line: 21
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 27,
            column: 22
          }
        },
        loc: {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 27,
            column: 50
          }
        },
        line: 27
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        loc: {
          start: {
            line: 30,
            column: 19
          },
          end: {
            line: 56,
            column: 5
          }
        },
        line: 30
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 42,
            column: 18
          },
          end: {
            line: 42,
            column: 19
          }
        },
        loc: {
          start: {
            line: 42,
            column: 38
          },
          end: {
            line: 47,
            column: 9
          }
        },
        line: 42
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 48,
            column: 19
          },
          end: {
            line: 48,
            column: 20
          }
        },
        loc: {
          start: {
            line: 48,
            column: 30
          },
          end: {
            line: 53,
            column: 9
          }
        },
        line: 48
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 54,
            column: 21
          },
          end: {
            line: 54,
            column: 22
          }
        },
        loc: {
          start: {
            line: 54,
            column: 28
          },
          end: {
            line: 54,
            column: 50
          }
        },
        line: 54
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        loc: {
          start: {
            line: 57,
            column: 13
          },
          end: {
            line: 68,
            column: 5
          }
        },
        line: 57
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 60,
            column: 18
          },
          end: {
            line: 60,
            column: 19
          }
        },
        loc: {
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 63,
            column: 9
          }
        },
        line: 60
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 64,
            column: 19
          },
          end: {
            line: 64,
            column: 20
          }
        },
        loc: {
          start: {
            line: 64,
            column: 30
          },
          end: {
            line: 66,
            column: 9
          }
        },
        line: 64
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        loc: {
          start: {
            line: 69,
            column: 13
          },
          end: {
            line: 71,
            column: 5
          }
        },
        line: 69
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        },
        loc: {
          start: {
            line: 72,
            column: 21
          },
          end: {
            line: 74,
            column: 5
          }
        },
        line: 72
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 76,
            column: 29
          },
          end: {
            line: 76,
            column: 30
          }
        },
        loc: {
          start: {
            line: 76,
            column: 35
          },
          end: {
            line: 78,
            column: 1
          }
        },
        line: 76
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 32,
            column: 19
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 32,
            column: 19
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 34
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "auth.service.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/auth.service.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;AACzC,OAAO,EACL,8BAA8B,EAC9B,OAAO,EACP,0BAA0B,EAC1B,OAAO,GACR,MAAM,eAAe,CAAC;IAMV,WAAW,SAAX,WAAW;IAMtB,YAAoB,MAAc;QAAd,WAAM,GAAN,MAAM,CAAQ;QAJlC,oBAAe,GAAY,KAAK,CAAC;QACjC,cAAS,GAAY,KAAK,CAAC;QAC3B,QAAG,GAAQ,EAAE,CAAC;QAyBd,oBAAe,GAAY,IAAI,CAAC;IAtBhC,CAAC;IAED,KAAK,CAAC,IAAe;QACnB,MAAM,IAAI,GAAG,OAAO,EAAE,CAAC;QAEvB,0BAA0B,CAAC,IAAI,EAAE,IAAI,CAAC,KAAK,EAAE,IAAI,CAAC,QAAQ,CAAC;aACxD,IAAI,CAAC,CAAC,cAAc,EAAE,EAAE;YACvB,IAAI,CAAC,eAAe,GAAG,IAAI,CAAC;YAC5B,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC;YAC3B,IAAI,CAAC,GAAG,GAAG,cAAc,CAAC,IAAI,CAAC,GAAG,CAAC;QACrC,CAAC,CAAC;aACD,KAAK,CAAC,CAAC,KAAK,EAAE,EAAE;YACf,MAAM,SAAS,GAAG,KAAK,CAAC,IAAI,CAAC;YAC7B,MAAM,YAAY,GAAG,KAAK,CAAC,OAAO,CAAC;YACnC,KAAK,CAAC,6BAA6B,GAAG,YAAY,CAAC,CAAA;YACnD,OAAO,KAAK,CAAC;QACf,CAAC,CAAC;aACD,OAAO,CAAC,GAAG,EAAE,CAAC,CAAC,IAAI,CAAC,SAAS,GAAG,KAAK,CAAC,CAAC,CAAC;QACzC,OAAO,IAAI,CAAC;IAEhB,CAAC;IAID,QAAQ,CAAC,IAAkB;QACzB,IAAI,IAAI,CAAC,SAAS;YAAE,OAAO;QAE3B,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC;QAEtB,IAAI,IAAI,CAAC,QAAQ,KAAK,IAAI,CAAC,gBAAgB,EAAE;YAC3C,IAAI,CAAC,eAAe,GAAG,KAAK,CAAC;YAC7B,KAAK,CAAC,wBAAwB,CAAC,CAAA;YAC/B,IAAI,CAAC,SAAS,GAAG,KAAK,CAAC;YACvB,OAAO,KAAK,CAAC;SACd;QAED,MAAM,IAAI,GAAG,OAAO,EAAE,CAAC;QACvB,8BAA8B,CAAC,IAAI,EAAE,IAAI,CAAC,KAAK,EAAE,IAAI,CAAC,QAAQ,CAAC;aAC5D,IAAI,CAAC,CAAC,cAAc,EAAE,EAAE;YACvB,IAAI,CAAC,eAAe,GAAG,IAAI,CAAC;YAC5B,KAAK,CAAC,qBAAqB,CAAC,CAAA;YAC5B,IAAI,CAAC,eAAe,GAAG,KAAK,CAAC;YAC7B,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;QACnC,CAAC,CAAC;aACD,KAAK,CAAC,CAAC,KAAK,EAAE,EAAE;YACf,IAAI,CAAC,eAAe,GAAG,KAAK,CAAC;YAC7B,MAAM,SAAS,GAAG,KAAK,CAAC,IAAI,CAAC;YAC7B,MAAM,YAAY,GAAG,KAAK,CAAC,OAAO,CAAC;YACnC,OAAO,KAAK,CAAC;QACf,CAAC,CAAC;aACD,OAAO,CAAC,GAAG,EAAE,CAAC,CACb,IAAI,CAAC,SAAS,GAAG,KAAK,CACrB,CAAC,CAAC;QACL,OAAO,IAAI,CAAC;IAChB,CAAC;IAED,MAAM;QACJ,MAAM,IAAI,GAAG,OAAO,EAAE,CAAC;QACvB,OAAO,CAAC,IAAI,CAAC;aACV,IAAI,CAAC,GAAG,EAAE;YACT,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC;YAChC,IAAI,CAAC,eAAe,GAAG,KAAK,CAAC;QAC/B,CAAC,CAAC;aACD,KAAK,CAAC,CAAC,KAAK,EAAE,EAAE;YACf,OAAO,KAAK,CAAC;QACf,CAAC,CAAC,CAAC;QACH,OAAO,IAAI,CAAC;IAChB,CAAC;IACD,MAAM;QACJ,OAAO,IAAI,CAAC,eAAe,CAAC;IAC9B,CAAC;IAED,cAAc;QACZ,OAAO,IAAI,CAAC,SAAS,CAAC;IACxB,CAAC;;;;;AAjFU,WAAW;IAHvB,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,WAAW;SAAX,WAAW",
      sourcesContent: ["import { Injectable } from '@angular/core';\nimport { Router } from '@angular/router';\nimport {\n  createUserWithEmailAndPassword,\n  getAuth,\n  signInWithEmailAndPassword,\n  signOut,\n} from 'firebase/auth';\nimport { LoginForm, RegisterForm } from '../types/Auth';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class AuthService {\n\n  isAuthenticated: boolean = false;\n  isLoading: boolean = false;\n  uid: any = \"\";\n\n  constructor(private router: Router) { \n  }\n\n  login(form: LoginForm): boolean{\n    const auth = getAuth();\n    \n    signInWithEmailAndPassword(auth, form.email, form.password)\n      .then((userCredential) => {\n        this.isAuthenticated = true;\n        this.router.navigate(['']);\n        this.uid = userCredential.user.uid;\n      })\n      .catch((error) => {   \n        const errorCode = error.code;\n        const errorMessage = error.message;\n        alert('Credentials does not exists' + errorMessage)\n        return false;\n      })\n      .finally(() => (this.isLoading = false));\n      return true;\n      \n  }\n\n  passwordMatched: boolean = true;\n\n  register(form: RegisterForm) {\n    if (this.isLoading) return;\n\n    this.isLoading = true;\n\n    if (form.password !== form.confirm_password) {\n      this.passwordMatched = false;\n      alert('Passwords do not match')\n      this.isLoading = false;\n      return false;\n    }\n\n    const auth = getAuth();\n    createUserWithEmailAndPassword(auth, form.email, form.password)\n      .then((userCredential) => {\n        this.isAuthenticated = true;\n        alert('Success! Now log in')\n        this.isAuthenticated = false;\n        this.router.navigate(['/login']);\n      })\n      .catch((error) => {\n        this.isAuthenticated = false;\n        const errorCode = error.code;\n        const errorMessage = error.message;\n        return false;\n      })\n      .finally(() => (\n        this.isLoading = false\n        ));\n      return true;\n  }\n\n  logout(): boolean {\n    const auth = getAuth();\n    signOut(auth)\n      .then(() => {\n        this.router.navigate(['login']);\n        this.isAuthenticated = false;\n      })\n      .catch((error) => {\n        return false;\n      });\n      return true;\n  }\n  isAuth(): boolean {\n    return this.isAuthenticated;\n  }\n  \n  isLoadingCheck(): boolean {\n    return this.isLoading;\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "66710f6120cb98067d74b9341e1b3fccbcacbe90"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1s88np4rmd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1s88np4rmd();




cov_1s88np4rmd().s[0]++;
let AuthService = class AuthService {
  constructor(router) {
    cov_1s88np4rmd().f[0]++;
    cov_1s88np4rmd().s[1]++;
    this.router = router;
    cov_1s88np4rmd().s[2]++;
    this.isAuthenticated = false;
    cov_1s88np4rmd().s[3]++;
    this.isLoading = false;
    cov_1s88np4rmd().s[4]++;
    this.uid = "";
    cov_1s88np4rmd().s[5]++;
    this.passwordMatched = true;
  }

  login(form) {
    cov_1s88np4rmd().f[1]++;
    const auth = (cov_1s88np4rmd().s[6]++, (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)());
    cov_1s88np4rmd().s[7]++;
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(auth, form.email, form.password).then(userCredential => {
      cov_1s88np4rmd().f[2]++;
      cov_1s88np4rmd().s[8]++;
      this.isAuthenticated = true;
      cov_1s88np4rmd().s[9]++;
      this.router.navigate(['']);
      cov_1s88np4rmd().s[10]++;
      this.uid = userCredential.user.uid;
    }).catch(error => {
      cov_1s88np4rmd().f[3]++;
      const errorCode = (cov_1s88np4rmd().s[11]++, error.code);
      const errorMessage = (cov_1s88np4rmd().s[12]++, error.message);
      cov_1s88np4rmd().s[13]++;
      alert('Credentials does not exists' + errorMessage);
      cov_1s88np4rmd().s[14]++;
      return false;
    }).finally(() => {
      cov_1s88np4rmd().f[4]++;
      cov_1s88np4rmd().s[15]++;
      return this.isLoading = false;
    });
    cov_1s88np4rmd().s[16]++;
    return true;
  }

  register(form) {
    cov_1s88np4rmd().f[5]++;
    cov_1s88np4rmd().s[17]++;

    if (this.isLoading) {
      cov_1s88np4rmd().b[0][0]++;
      cov_1s88np4rmd().s[18]++;
      return;
    } else {
      cov_1s88np4rmd().b[0][1]++;
    }

    cov_1s88np4rmd().s[19]++;
    this.isLoading = true;
    cov_1s88np4rmd().s[20]++;

    if (form.password !== form.confirm_password) {
      cov_1s88np4rmd().b[1][0]++;
      cov_1s88np4rmd().s[21]++;
      this.passwordMatched = false;
      cov_1s88np4rmd().s[22]++;
      alert('Passwords do not match');
      cov_1s88np4rmd().s[23]++;
      this.isLoading = false;
      cov_1s88np4rmd().s[24]++;
      return false;
    } else {
      cov_1s88np4rmd().b[1][1]++;
    }

    const auth = (cov_1s88np4rmd().s[25]++, (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)());
    cov_1s88np4rmd().s[26]++;
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(auth, form.email, form.password).then(userCredential => {
      cov_1s88np4rmd().f[6]++;
      cov_1s88np4rmd().s[27]++;
      this.isAuthenticated = true;
      cov_1s88np4rmd().s[28]++;
      alert('Success! Now log in');
      cov_1s88np4rmd().s[29]++;
      this.isAuthenticated = false;
      cov_1s88np4rmd().s[30]++;
      this.router.navigate(['/login']);
    }).catch(error => {
      cov_1s88np4rmd().f[7]++;
      cov_1s88np4rmd().s[31]++;
      this.isAuthenticated = false;
      const errorCode = (cov_1s88np4rmd().s[32]++, error.code);
      const errorMessage = (cov_1s88np4rmd().s[33]++, error.message);
      cov_1s88np4rmd().s[34]++;
      return false;
    }).finally(() => {
      cov_1s88np4rmd().f[8]++;
      cov_1s88np4rmd().s[35]++;
      return this.isLoading = false;
    });
    cov_1s88np4rmd().s[36]++;
    return true;
  }

  logout() {
    cov_1s88np4rmd().f[9]++;
    const auth = (cov_1s88np4rmd().s[37]++, (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)());
    cov_1s88np4rmd().s[38]++;
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(auth).then(() => {
      cov_1s88np4rmd().f[10]++;
      cov_1s88np4rmd().s[39]++;
      this.router.navigate(['login']);
      cov_1s88np4rmd().s[40]++;
      this.isAuthenticated = false;
    }).catch(error => {
      cov_1s88np4rmd().f[11]++;
      cov_1s88np4rmd().s[41]++;
      return false;
    });
    cov_1s88np4rmd().s[42]++;
    return true;
  }

  isAuth() {
    cov_1s88np4rmd().f[12]++;
    cov_1s88np4rmd().s[43]++;
    return this.isAuthenticated;
  }

  isLoadingCheck() {
    cov_1s88np4rmd().f[13]++;
    cov_1s88np4rmd().s[44]++;
    return this.isLoading;
  }

};
cov_1s88np4rmd().s[45]++;

AuthService.ctorParameters = () => {
  cov_1s88np4rmd().f[14]++;
  cov_1s88np4rmd().s[46]++;
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
  }];
};

cov_1s88np4rmd().s[47]++;
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 3254:
/*!*********************************************!*\
  !*** ./src/app/shared/list.service.spec.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.service */ 1258);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 8338);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);







describe('ListService', () => {
    let service;
    let authService;
    beforeEach(() => {
        _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.configureTestingModule({
            imports: [
                _angular_fire_compat__WEBPACK_IMPORTED_MODULE_4__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.firebaseConfig)
            ],
            providers: [
                _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth,
                _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
            ]
        });
        service = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.inject(_list_service__WEBPACK_IMPORTED_MODULE_0__.ListService);
        authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.inject(_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should be the same uid as in authService', () => {
        const listUserUID = service.authUID;
        const authUserUID = authService.uid;
        expect(listUserUID).toMatch(authUserUID);
    });
});


/***/ }),

/***/ 1258:
/*!****************************************!*\
  !*** ./src/app/shared/list.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListService": () => (/* binding */ ListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8338);
function cov_y7w0yfxvs() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/list.service.ts";
  var hash = "e5b337d77916d074bb399b9d61d06316fd5c1ae7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/list.service.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 35
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 39
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 26
        }
      },
      "4": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 64
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 44
        }
      },
      "6": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 21,
          column: 11
        }
      },
      "7": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 71
        }
      },
      "8": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 107
        }
      },
      "9": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 50
        }
      },
      "10": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 36,
          column: 2
        }
      },
      "11": {
        start: {
          line: 33,
          column: 35
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "12": {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 41,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 40
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 47
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        loc: {
          start: {
            line: 23,
            column: 40
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 61
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 26
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 23
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 29
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 33,
            column: 29
          },
          end: {
            line: 33,
            column: 30
          }
        },
        loc: {
          start: {
            line: 33,
            column: 35
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 33
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "list.service.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/list.service.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAC,gBAAgB,EAA6B,MAAM,gCAAgC,CAAA;AAC3F,OAAO,EAAE,WAAW,EAAE,MAAM,gBAAgB,CAAC;IAKhC,WAAW,SAAX,WAAW;IAItB,YAAoB,SAA2B,EAAU,WAAwB;QAA7D,cAAS,GAAT,SAAS,CAAkB;QAAU,gBAAW,GAAX,WAAW,CAAa;QAFjF,YAAO,GAAW,EAAE,CAAC;QAGnB,IAAI,CAAC,mBAAmB,GAAG,SAAS,CAAC,UAAU,CAAC,MAAM,CAAC,CAAC;QACxD,IAAI,CAAC,OAAO,GAAG,IAAI,CAAC,WAAW,CAAC,GAAG,CAAC;IACtC,CAAC;IAED,WAAW,CAAC,MAAc,EAAE,KAAa,EAAE,QAAgB,EAAE,IAAY;QACvE,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC;YAC3B,MAAM;YACN,KAAK;YACL,QAAQ;YACR,IAAI;YACJ,MAAM,EAAG,KAAK;YACd,GAAG,EAAE,IAAI,CAAC,OAAO;SAClB,CAAC,CAAA;IACJ,CAAC;IAED,oBAAoB,CAAC,EAAU,EAAE,SAAkB;QACjD,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,EAAC,MAAM,EAAE,SAAS,EAAC,CAAC,CAAA;IAC9D,CAAC;IAED,oBAAoB,CAAC,EAAU,EAAE,QAAgB,EAAE,WAAmB,EAAE,OAAe;QACrF,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,EAAC,KAAK,EAAE,QAAQ,EAAE,QAAQ,EAAE,WAAW,EAAE,IAAI,EAAE,OAAO,EAAC,CAAC,CAAA;IAClG,CAAC;IAED,cAAc,CAAC,EAAU;QACvB,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,MAAM,EAAE,CAAC;IAC5C,CAAC;;;;;;AA9BU,WAAW;IAJvB,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GAEW,WAAW;SAAX,WAAW",
      sourcesContent: ["import { Injectable } from '@angular/core';\nimport {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'\nimport { AuthService } from './auth.service';\n@Injectable({\n  providedIn: 'root'\n})\n\nexport class ListService {\n  firestoreCollection: AngularFirestoreCollection;\n  authUID: string = \"\";\n\n  constructor(private firestore: AngularFirestore, private authService: AuthService) { \n    this.firestoreCollection = firestore.collection('list');\n    this.authUID = this.authService.uid;\n  }\n\n  addListItem(listId: string, title: string, quantity: string, unit: string){\n    this.firestoreCollection.add({\n      listId,\n      title,\n      quantity,\n      unit,\n      isDone : false,\n      uid: this.authUID\n    })\n  }\n\n  updateListItemStatus(id: string, newStatus: boolean){\n    this.firestoreCollection.doc(id).update({isDone: newStatus})\n  }\n\n  updateListItemFields(id: string, newTitle: string, newQuantity: string, newUnit: string){\n    this.firestoreCollection.doc(id).update({title: newTitle, quantity: newQuantity, unit: newUnit})\n  }\n\n  deleteListItem(id: string){\n    this.firestoreCollection.doc(id).delete();\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e5b337d77916d074bb399b9d61d06316fd5c1ae7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_y7w0yfxvs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_y7w0yfxvs();




cov_y7w0yfxvs().s[0]++;
let ListService = class ListService {
  constructor(firestore, authService) {
    cov_y7w0yfxvs().f[0]++;
    cov_y7w0yfxvs().s[1]++;
    this.firestore = firestore;
    cov_y7w0yfxvs().s[2]++;
    this.authService = authService;
    cov_y7w0yfxvs().s[3]++;
    this.authUID = "";
    cov_y7w0yfxvs().s[4]++;
    this.firestoreCollection = firestore.collection('list');
    cov_y7w0yfxvs().s[5]++;
    this.authUID = this.authService.uid;
  }

  addListItem(listId, title, quantity, unit) {
    cov_y7w0yfxvs().f[1]++;
    cov_y7w0yfxvs().s[6]++;
    this.firestoreCollection.add({
      listId,
      title,
      quantity,
      unit,
      isDone: false,
      uid: this.authUID
    });
  }

  updateListItemStatus(id, newStatus) {
    cov_y7w0yfxvs().f[2]++;
    cov_y7w0yfxvs().s[7]++;
    this.firestoreCollection.doc(id).update({
      isDone: newStatus
    });
  }

  updateListItemFields(id, newTitle, newQuantity, newUnit) {
    cov_y7w0yfxvs().f[3]++;
    cov_y7w0yfxvs().s[8]++;
    this.firestoreCollection.doc(id).update({
      title: newTitle,
      quantity: newQuantity,
      unit: newUnit
    });
  }

  deleteListItem(id) {
    cov_y7w0yfxvs().f[4]++;
    cov_y7w0yfxvs().s[9]++;
    this.firestoreCollection.doc(id).delete();
  }

};
cov_y7w0yfxvs().s[10]++;

ListService.ctorParameters = () => {
  cov_y7w0yfxvs().f[5]++;
  cov_y7w0yfxvs().s[11]++;
  return [{
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore
  }, {
    type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
  }];
};

cov_y7w0yfxvs().s[12]++;
ListService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ListService);


/***/ }),

/***/ 9258:
/*!**********************************************!*\
  !*** ./src/app/shared/lists.service.spec.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists.service */ 4467);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 8338);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);







describe('ListsService', () => {
    let service;
    let authService;
    beforeEach(() => {
        _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.configureTestingModule({
            imports: [
                _angular_fire_compat__WEBPACK_IMPORTED_MODULE_4__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.firebaseConfig)
            ],
            providers: [
                _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth,
                _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
            ]
        });
        service = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.inject(_lists_service__WEBPACK_IMPORTED_MODULE_0__.ListsService);
        authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_3__.TestBed.inject(_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should be the same uid as in authService', () => {
        const listUserUID = service.authUID;
        const authUserUID = authService.uid;
        expect(listUserUID).toMatch(authUserUID);
    });
});


/***/ }),

/***/ 4467:
/*!*****************************************!*\
  !*** ./src/app/shared/lists.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListsService": () => (/* binding */ ListsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8338);
function cov_y1z337mah() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/lists.service.ts";
  var hash = "13fc8b9efd9bab8a1558f16d893445656d8436e6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/lists.service.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 35
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 39
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 26
        }
      },
      "4": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 65
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 44
        }
      },
      "6": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 19,
          column: 11
        }
      },
      "7": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 71
        }
      },
      "8": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 84
        }
      },
      "9": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 50
        }
      },
      "10": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 34,
          column: 2
        }
      },
      "11": {
        start: {
          line: 31,
          column: 36
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "12": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 39,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 40
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 25
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 36
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 21
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        loc: {
          start: {
            line: 24,
            column: 44
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 24
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        loc: {
          start: {
            line: 27,
            column: 19
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 27
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 31,
            column: 30
          },
          end: {
            line: 31,
            column: 31
          }
        },
        loc: {
          start: {
            line: 31,
            column: 36
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 31
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "lists.service.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/app/shared/lists.service.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAC,gBAAgB,EAA6B,MAAM,gCAAgC,CAAA;AAC3F,OAAO,EAAE,WAAW,EAAE,MAAM,gBAAgB,CAAC;IAIhC,YAAY,SAAZ,YAAY;IAKvB,YAAoB,SAA2B,EAAU,WAAwB;QAA7D,cAAS,GAAT,SAAS,CAAkB;QAAU,gBAAW,GAAX,WAAW,CAAa;QAFjF,YAAO,GAAW,EAAE,CAAC;QAGnB,IAAI,CAAC,mBAAmB,GAAG,SAAS,CAAC,UAAU,CAAC,OAAO,CAAC,CAAA;QACxD,IAAI,CAAC,OAAO,GAAG,IAAI,CAAC,WAAW,CAAC,GAAG,CAAC;IACtC,CAAC;IAED,OAAO,CAAC,KAAa,EAAE,IAAY;QAE/B,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC;YAC3B,KAAK;YACL,IAAI;YACJ,MAAM,EAAG,KAAK;YACd,GAAG,EAAE,IAAI,CAAC,OAAO;SAClB,CAAC,CAAA;IACN,CAAC;IAED,gBAAgB,CAAC,EAAU,EAAE,SAAkB;QAC7C,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,EAAC,MAAM,EAAE,SAAS,EAAC,CAAC,CAAA;IAC9D,CAAC;IAED,gBAAgB,CAAC,EAAU,EAAE,QAAgB,EAAE,OAAe;QAC5D,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,EAAC,KAAK,EAAE,QAAQ,EAAE,IAAI,EAAE,OAAO,EAAC,CAAC,CAAA;IAC3E,CAAC;IAED,UAAU,CAAC,EAAU;QACnB,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,MAAM,EAAE,CAAC;IAC5C,CAAC;;;;;;AA9BU,YAAY;IAHxB,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,YAAY;SAAZ,YAAY",
      sourcesContent: ["import { Injectable } from '@angular/core';\nimport {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'\nimport { AuthService } from './auth.service';\n@Injectable({\n  providedIn: 'root'\n})\nexport class ListsService {\n\n  firestoreCollection: AngularFirestoreCollection;\n  authUID: string = \"\";\n\n  constructor(private firestore: AngularFirestore, private authService: AuthService) { \n    this.firestoreCollection = firestore.collection('lists')\n    this.authUID = this.authService.uid;\n  }\n\n  addList(title: string, date: string){\n    \n      this.firestoreCollection.add({\n        title,\n        date,\n        isDone : false,\n        uid: this.authUID\n      })\n  }\n\n  updateListStatus(id: string, newStatus: boolean){\n    this.firestoreCollection.doc(id).update({isDone: newStatus})\n  }\n\n  updateListFields(id: string, newTitle: string, newDate: string){\n    this.firestoreCollection.doc(id).update({title: newTitle, date: newDate})\n  }\n\n  deleteList(id: string){\n    this.firestoreCollection.doc(id).delete();\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "13fc8b9efd9bab8a1558f16d893445656d8436e6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_y1z337mah = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_y1z337mah();




cov_y1z337mah().s[0]++;
let ListsService = class ListsService {
  constructor(firestore, authService) {
    cov_y1z337mah().f[0]++;
    cov_y1z337mah().s[1]++;
    this.firestore = firestore;
    cov_y1z337mah().s[2]++;
    this.authService = authService;
    cov_y1z337mah().s[3]++;
    this.authUID = "";
    cov_y1z337mah().s[4]++;
    this.firestoreCollection = firestore.collection('lists');
    cov_y1z337mah().s[5]++;
    this.authUID = this.authService.uid;
  }

  addList(title, date) {
    cov_y1z337mah().f[1]++;
    cov_y1z337mah().s[6]++;
    this.firestoreCollection.add({
      title,
      date,
      isDone: false,
      uid: this.authUID
    });
  }

  updateListStatus(id, newStatus) {
    cov_y1z337mah().f[2]++;
    cov_y1z337mah().s[7]++;
    this.firestoreCollection.doc(id).update({
      isDone: newStatus
    });
  }

  updateListFields(id, newTitle, newDate) {
    cov_y1z337mah().f[3]++;
    cov_y1z337mah().s[8]++;
    this.firestoreCollection.doc(id).update({
      title: newTitle,
      date: newDate
    });
  }

  deleteList(id) {
    cov_y1z337mah().f[4]++;
    cov_y1z337mah().s[9]++;
    this.firestoreCollection.doc(id).delete();
  }

};
cov_y1z337mah().s[10]++;

ListsService.ctorParameters = () => {
  cov_y1z337mah().f[5]++;
  cov_y1z337mah().s[11]++;
  return [{
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore
  }, {
    type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
  }];
};

cov_y1z337mah().s[12]++;
ListsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ListsService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
function cov_1iracbwwgm() {
  var path = "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/environments/environment.ts";
  var hash = "76817c0ef7b8e731d4af952f9196059f4cb3d522";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juliawitek/Desktop/Testowanie/shopping-list/src/environments/environment.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 24,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "environment.js",
      sourceRoot: "",
      sources: ["/Users/juliawitek/Desktop/Testowanie/shopping-list/src/environments/environment.ts"],
      names: [],
      mappings: "AAAA,gFAAgF;AAChF,mEAAmE;AACnE,gEAAgE;AAEhE,MAAM,CAAC,MAAM,WAAW,GAAG;IACzB,UAAU,EAAE,KAAK;IACjB,oBAAoB;IACpB,yDAAyD;IACzD,uDAAuD;IACvD,sCAAsC;IACtC,sDAAsD;IACtD,yCAAyC;IACzC,0DAA0D;IAC1D,oCAAoC;IACpC,MAAM;IACN,cAAc,EAAE;QACd,MAAM,EAAE,yCAAyC;QACjD,UAAU,EAAE,mCAAmC;QAC/C,SAAS,EAAE,mBAAmB;QAC9B,aAAa,EAAE,+BAA+B;QAC9C,iBAAiB,EAAE,cAAc;QACjC,KAAK,EAAE,2CAA2C;QAClD,aAAa,EAAE,cAAc;KAC9B;CACF,CAAC;AAGF;;;;;;GAMG;AACH,sEAAsE",
      sourcesContent: ["// This file can be replaced during build by using the `fileReplacements` array.\n// `ng build` replaces `environment.ts` with `environment.prod.ts`.\n// The list of file replacements can be found in `angular.json`.\n\nexport const environment = {\n  production: false,\n  // firebaseConfig: {\n  //     apiKey: \"AIzaSyCgpSlg4fwwAprDVbhsuujYTAJPYFc41Rk\",\n  //     authDomain: \"shoppinglist-app8.firebaseapp.com\",\n  //     projectId: \"shoppinglist-app8\",\n  //     storageBucket: \"shoppinglist-app8.appspot.com\",\n  //     messagingSenderId: \"211002500755\",\n  //     appId: \"1:211002500755:web:40fe1314620aec3450cf66\",\n  //     measurementId: \"G-FPH6C6BG4G\"\n  //   }\n  firebaseConfig: {\n    apiKey: \"AIzaSyCdLAQjpz2AimetOUqABjserLxvXltUk5M\",\n    authDomain: \"shoppinglist-2222.firebaseapp.com\",\n    projectId: \"shoppinglist-2222\",\n    storageBucket: \"shoppinglist-2222.appspot.com\",\n    messagingSenderId: \"452717911685\",\n    appId: \"1:452717911685:web:f5c1c25a41e48bf5c853ec\",\n    measurementId: \"G-Y46RKM3PH6\"\n  }\n};\n\n\n/*\n * For easier debugging in development mode, you can import the following file\n * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.\n *\n * This import should be commented out in production mode because it will have a negative impact\n * on performance if an error is thrown.\n */\n// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "76817c0ef7b8e731d4af952f9196059f4cb3d522"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1iracbwwgm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1iracbwwgm();
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = (cov_1iracbwwgm().s[0]++, {
  production: false,
  // firebaseConfig: {
  //     apiKey: "AIzaSyCgpSlg4fwwAprDVbhsuujYTAJPYFc41Rk",
  //     authDomain: "shoppinglist-app8.firebaseapp.com",
  //     projectId: "shoppinglist-app8",
  //     storageBucket: "shoppinglist-app8.appspot.com",
  //     messagingSenderId: "211002500755",
  //     appId: "1:211002500755:web:40fe1314620aec3450cf66",
  //     measurementId: "G-FPH6C6BG4G"
  //   }
  firebaseConfig: {
    apiKey: "AIzaSyCdLAQjpz2AimetOUqABjserLxvXltUk5M",
    authDomain: "shoppinglist-2222.firebaseapp.com",
    projectId: "shoppinglist-2222",
    storageBucket: "shoppinglist-2222.appspot.com",
    messagingSenderId: "452717911685",
    appId: "1:452717911685:web:f5c1c25a41e48bf5c853ec",
    measurementId: "G-Y46RKM3PH6"
  }
});
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4289:
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_testing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/testing */ 3761);
/* harmony import */ var zone_js_testing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_testing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _angular_platform_browser_dynamic_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic/testing */ 5392);
// This file is required by karma.conf.js and loads recursively all the .spec and framework files


 // First, initialize the Angular testing environment.

(0,_angular_core_testing__WEBPACK_IMPORTED_MODULE_1__.getTestBed)().initTestEnvironment(_angular_platform_browser_dynamic_testing__WEBPACK_IMPORTED_MODULE_2__.BrowserDynamicTestingModule, (0,_angular_platform_browser_dynamic_testing__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamicTesting)()); // Then we find all the tests.

const context = __webpack_require__(2249); // And load the modules.


context.keys().forEach(context);

/***/ }),

/***/ 2249:
/*!*******************************!*\
  !*** ./src/ sync \.spec\.ts$ ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app/app.component.spec.ts": 4882,
	"./app/auth/auth.guard.spec.ts": 3938,
	"./app/auth/login/login.component.spec.ts": 4504,
	"./app/auth/register/register.component.spec.ts": 8423,
	"./app/list-edit/list-edit.component.spec.ts": 1549,
	"./app/list/list.component.spec.ts": 29,
	"./app/lists-edit/lists-edit.component.spec.ts": 2534,
	"./app/lists/lists.component.spec.ts": 6821,
	"./app/shared/auth.service.spec.ts": 2827,
	"./app/shared/list.service.spec.ts": 3254,
	"./app/shared/lists.service.spec.ts": 9258,
	"src/app/app.component.spec.ts": 4882,
	"src/app/auth/auth.guard.spec.ts": 3938,
	"src/app/auth/login/login.component.spec.ts": 4504,
	"src/app/auth/register/register.component.spec.ts": 8423,
	"src/app/list-edit/list-edit.component.spec.ts": 1549,
	"src/app/list/list.component.spec.ts": 29,
	"src/app/lists-edit/lists-edit.component.spec.ts": 2534,
	"src/app/lists/lists.component.spec.ts": 6821,
	"src/app/shared/auth.service.spec.ts": 2827,
	"src/app/shared/list.service.spec.ts": 3254,
	"src/app/shared/lists.service.spec.ts": 9258
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2249;

/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 9815:
/*!***********************************************************!*\
  !*** ./src/app/auth/login/login.component.css?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 544:
/*!*****************************************************************!*\
  !*** ./src/app/auth/register/register.component.css?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 4285:
/*!**************************************************************!*\
  !*** ./src/app/list-edit/list-edit.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 1680:
/*!****************************************************!*\
  !*** ./src/app/list/list.component.css?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".list-title {\n    margin-top: 20px;\n}\n\n.lists-item-product {\n    margin-left: 5px;\n}\n\n.lists-item-quantity {\n    margin-left: 5px;\n    color: darkgray;\n}\n\n.lists-item-unit {\n    margin-left: 5px;\n    color: darkgray;\n}\n\n.list-item-done {\n    text-decoration-line: line-through;\n}\n\n.item-icon {\n    float: left;\n    margin-left: 20px;\n}\n\n.edit-list-item {\n    margin-right: 10px;\n    margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5saXN0cy1pdGVtLXByb2R1Y3Qge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5saXN0cy1pdGVtLXF1YW50aXR5IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmxpc3RzLWl0ZW0tdW5pdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogZGFya2dyYXk7XG59XG4ubGlzdC1pdGVtLWRvbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG59XG5cbi5pdGVtLWljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZWRpdC1saXN0LWl0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 9423:
/*!****************************************************************!*\
  !*** ./src/app/lists-edit/lists-edit.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 866:
/*!******************************************************!*\
  !*** ./src/app/lists/lists.component.css?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".list-title {\n    margin-top: 20px;\n}\n\n.lists-item-title {\n    margin-left: 5px;\n}\n\n.lists-item-date {\n    margin-left: 5px;\n    color: darkgray;\n}\n\n.list-item-done {\n    text-decoration-line: line-through;\n}\n\n.item-icon {\n    float: left;\n    margin-left: 20px;\n}\n\n.edit-list-item {\n    margin-right: 10px;\n    margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJsaXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5saXN0cy1pdGVtLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGlzdHMtaXRlbS1kYXRlIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmxpc3QtaXRlbS1kb25lIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xufVxuXG4uaXRlbS1pY29uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmVkaXQtbGlzdC1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"flex justify-between p-3 bg-gray-700 text-white\">\n    <div>\n      <span>ShoppingListApp</span>\n    </div>\n    <div>\n      <ng-container *ngIf=\"!isAuthenticated()\">\n        <a test-data=\"router-login\" class=\"mx-2\" routerLink=\"/login\"> Login </a>\n        <a test-data=\"router-register\" class=\"mx-2\" routerLink=\"/register\"> Register </a>\n      </ng-container>\n      <ng-container *ngIf=\"isAuthenticated()\">\n        <button test-data=\"router-logout\" (click)=\"logout()\" class=\"mx-4\"> Logout </button>\n      </ng-container>    \n    </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"vol md-5\">\n      <router-outlet></router-outlet>\n    </div>  \n  </div>\n</div>";

/***/ }),

/***/ 5639:
/*!************************************************************!*\
  !*** ./src/app/auth/login/login.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"flex justify-center\">\n    <form (ngSubmit)=\"submit()\" #myForm=\"ngForm\"\n        class=\"p-4 m-20 rounded-lg border w-1/2\">\n        <h1 class=\"text-center text-xl\">Login</h1>\n        <div class=\"my-5 w-full\">\n            <label for=\"email\">Email</label>\n            <input test-data=\"login-input-email\" type=\"email\" id=\"email\"\n                class=\"p-2 rounded w-full border text-sm\"\n                placeholder=\"Email Address\" [(ngModel)]=\"form.email\"\n                name=\"email\" #email=\"ngModel\" required>\n        </div>\n        <div test-data=\"login-email-notvalid\" *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n            class=\"p-2 bg-red-300 text-red-800 rounded\">\n            Email field must be valid\n        </div>\n\n        <div class=\"my-5 w-full\">\n            <label for=\"password\">Password</label>\n            <input test-data=\"login-input-password\" type=\"password\" id=\"password\"\n                class=\"p-2 rounded w-full border text-sm\" placeholder=\"Password\"\n                [(ngModel)]=\"form.password\" name=\"password\" #password=\"ngModel\"\n                required>\n        </div>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n            class=\"p-2 bg-red-300 text-red-800 rounded\">\n            Password field must be valid\n        </div>\n\n        <div class=\"my-5 w-full\">\n            <button test-data=\"login-submit-button\" type=\"submit\" [disabled]=\"myForm.form.invalid\"\n                class=\"p-2 w-full bg-green-700 text-white hover:bg-green-900 rounded\">\n                <ng-container *ngIf=\"isLoading()\">\n                    Loading...\n                </ng-container>\n                <ng-container *ngIf=\"!isLoading()\">\n                    Submit\n                </ng-container>\n            </button>\n\n        </div>\n    </form>\n</div>";

/***/ }),

/***/ 4966:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/register.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"flex justify-center\">\n    <form (ngSubmit)=\"submit()\" #myForm=\"ngForm\"\n        class=\"p-4 m-20 rounded-lg border w-1/2\">\n        <h1 class=\"text-center text-xl\">Register</h1>\n        <div class=\"my-5 w-full\">\n            <label for=\"email\">Email</label>\n            <input test-data=\"register-input-email\" type=\"email\" id=\"email\"\n                class=\"p-2 rounded w-full border text-sm\"\n                placeholder=\"Email Address\" [(ngModel)]=\"form.email\"\n                name=\"email\" #email=\"ngModel\" required>\n        </div>\n        <div test-data=\"register-email-must-be-valid\" *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n            class=\"p-2 bg-red-300 text-red-800 rounded\">\n            <span>Email field must be valid</span>\n        </div>\n        <div class=\"my-5 w-full\">\n            <label for=\"password\">Password</label>\n            <input test-data=\"register-input-password\" type=\"password\" id=\"password\"\n                class=\"p-2 rounded w-full border text-sm\" placeholder=\"Password\"\n                [(ngModel)]=\"form.password\" name=\"password\" #password=\"ngModel\"\n                required>\n        </div>\n        <div test-data=\"register-password-must-be-valid\" *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n            class=\"p-2 bg-red-300 text-red-800 rounded\">\n            Password field must be valid\n        </div>\n\n        <div class=\"my-5 w-full\">\n            <label for=\"confirm_password\">Confirm Password</label>\n            <input test-data=\"register-input-confirm-password\" type=\"text\" id=\"confirm_password\"\n                class=\"p-2 rounded w-full border text-sm\"\n                placeholder=\"Confirm Password\"\n                [(ngModel)]=\"form.confirm_password\" name=\"confirm_password\"\n                #confirm_password=\"ngModel\" required>\n        </div>\n        <div test-data=\"register-confirm-password-must-be-valid\" *ngIf=\"confirm_password.invalid && (confirm_password.dirty || confirm_password.touched)\"\n            class=\"p-2 bg-red-300 text-red-800 rounded\">\n            <span test-data=\"register-confirm-password-must-be-valid-text\">\n                Confirm password field must be valid\n            </span>\n        </div>\n\n        <div class=\"my-5 w-full\">\n            <button test-data=\"register-submit-button\" type=\"submit\" [disabled]=\"myForm.form.invalid\"\n                class=\"p-2 w-full bg-green-700 text-white hover:bg-green-900 rounded\">\n                <ng-container test-data=\"register-loading\" *ngIf=\"isLoading\">\n                    Loading...\n                </ng-container>\n                <ng-container test-data=\"register-submit\" *ngIf=\"!isLoading\">\n                    Submit\n                </ng-container>\n            </button>\n        </div>\n    </form>\n</div>";

/***/ }),

/***/ 1414:
/*!***************************************************************!*\
  !*** ./src/app/list-edit/list-edit.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form class=\"form-inline\" #listForm=\"ngForm\" (ngSubmit)=\"sendListToList(listForm)\" novalidate>\n    <div class=\"input-group\">\n        <input test-data=\"list-table-edit-item-product\" type=\"text\" class=\"form-control\" name=\"product\"  [ngModel]=\"selectedList.title\">\n        <input test-data=\"list-table-edit-item-quantity\" type=\"number\" class=\"form-control\" name=\"quantity\"  [ngModel]=\"selectedList.quantity\"> \n        <select test-data=\"list-table-edit-item-edit-unit\" type=\"text\" class=\"form-control\" name=\"unit\" [ngModel]=\"selectedList.unit\">\n            <option value=\"piece\">piece</option>\n            <option value=\"gram\">gram</option>\n            <option value=\"kilogram\">kilogram</option>\n            <option value=\"mililiter\">mililiter</option>\n            <option value=\"liter\">liter</option>\n        </select>\n        <input type=\"hidden\" class=\"form-control\" name=\"id\" [ngModel]=\"selectedList.id\">\n        <button test-data=\"list-table-edit-item-save-button\" class=\"btn btn-success\"> Save </button>\n    </div>\n  </form>";

/***/ }),

/***/ 4618:
/*!*****************************************************!*\
  !*** ./src/app/list/list.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card shadow-lg mt-5\">\n    <div class=\"card-header text-center\">\n        <h1 test-data=\"list-name\" class=\"display-6 fw-bold\">{{listname}}</h1>\n    </div>\n    <div class=\"card-body p-4\">\n        <div class=\"input-group mb-4\">\n            <input test-data=\"list-product\" type=\"text\" class=\"form-control\" placeholder=\"Product\" #productInput>\n            <input test-data=\"list-quantity\" type=\"number\" class=\"form-control\" placeholder=\"Quantity\" #quantityInput>\n            <select test-data=\"list-unit\" type=\"text\" class=\"form-control\" placeholder=\"Unit\" #unitInput>\n                <option value=\"piece\">piece</option>\n                <option value=\"gram\">gram</option>\n                <option value=\"kilogram\">kilogram</option>\n                <option value=\"mililiter\">mililiter</option>\n                <option value=\"liter\">liter</option>\n            </select>\n            <button test-data=\"list-add-item\" class=\"btn text-success\"\n                (click)=\"onAddListItem(listId, productInput, quantityInput, unitInput)\">\n                <i class=\"fa-solid fa-circle-plus fa-xl\"></i>\n            </button>\n        </div>\n        <ul test-data=\"list-table\" class=\"list-group\">\n            <li test-data=\"list-table-item\" class=\"list-group-item\" *ngFor=\"let item of itemLists\">\n                <div *ngIf=\"!selectedListItem\">\n                    <span>\n                        <i test-data=\"list-table-item-checkbox\" class=\"text-success\" (click)=\"onItemChange(item.id, !item.isDone)\"\n                        [ngClass]=\"item.isDone? 'fa-solid fa-circle-check':'fa-regular fa-circle'\"></i>\n                        <span test-data=\"list-table-item-product\" [ngClass]=\"item.isDone? 'lists-item-product list-item-done':'lists-item-product'\"> \n                            {{item.title}}\n                        </span>\n                        <span test-data=\"list-table-item-quantity\" [ngClass]=\"item.isDone? 'lists-item-quantity list-item-done':'lists-item-quantity'\"> \n                            {{item.quantity}}\n                        </span>\n                        <span test-data=\"list-table-item-unit\" [ngClass]=\"item.isDone? 'lists-item-unit list-item-done':'lists-item-unit'\"> \n                            {{item.unit}}\n                        </span>\n                        <div class=\"float-end text-secondary\">\n                            <div test-data=\"list-table-item-edit\" class=\"item-icon item-icon-pencil\">\n                                <span (click)=\"editListItem(item)\"> <i class=\"fa-solid fa-pencil\"></i> </span>\n                            </div>\n                            <div test-data=\"list-table-item-delete\" class=\"item-icon item-can\">\n                                <span (click)=\"onListItemDelete(item.id)\"> <i class=\"fa-solid fa-trash-can\"></i> </span>\n                            </div>\n                        </div>\n                    </span>\n                </div>\n                <div *ngIf=\"selectedListItem\">\n                    <div *ngIf=\"item.id !== selectedListItem.id\">\n                        <span>\n                            <i test-data=\"list-table-item-checkbox-notselected\" class=\"text-success\" (click)=\"onItemChange(item.id, !item.isDone)\"\n                            [ngClass]=\"item.isDone? 'fa-solid fa-circle-check':'fa-regular fa-circle'\"></i>\n                            <span test-data=\"list-table-item-product-notselected\" [ngClass]=\"item.isDone? 'lists-item-product list-item-done':'lists-item-title'\"> \n                                {{item.title}}\n                            </span>\n                            <span test-data=\"list-table-item-quantity-notselected\" [ngClass]=\"item.isDone? 'lists-item-quantity list-item-done':'lists-item-quantity'\"> \n                                {{item.quantity}}\n                            </span>\n                            <span test-data=\"list-table-item-unit-notselected\" [ngClass]=\"item.isDone? 'lists-item-unit list-item-done':'lists-item-unit'\"> \n                                {{item.unit}}\n                            </span>\n                            <div class=\"float-end text-secondary\">\n                                <div test-data=\"list-table-item-edit-notselected\" class=\"item-icon item-icon-pencil\">\n                                    <span (click)=\"editListItem(item)\"> <i class=\"fa-solid fa-pencil\"></i> </span>\n                                </div>\n                                <div test-data=\"list-table-item-delete-notselected\" class=\"item-icon item-can\">\n                                    <span (click)=\"onListItemDelete(item.id)\"> <i class=\"fa-solid fa-trash-can\"></i> </span>\n                                </div>\n                            </div>\n                        </span>\n                    </div>\n                    <div *ngIf=\"item.id == selectedListItem.id\">\n                         <app-list-edit [selectedList] = \"selectedListItem\" \n                        (sendListToListEvent)=\"sendListItemToListItemEventHandler($event)\"></app-list-edit> \n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <button test-data=\"list-go-back-button\" class=\"btn btn-success\" routerLink=\"/\"> Go Back </button>\n</div>\n";

/***/ }),

/***/ 7671:
/*!*****************************************************************!*\
  !*** ./src/app/lists-edit/lists-edit.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form class=\"form-inline\" #listForm=\"ngForm\" (ngSubmit)=\"sendListToList(listForm)\" novalidate>\n    <div class=\"input-group\">\n        <input test-data=\"lists-table-edit-list-title\" type=\"text\" class=\"form-control\" name=\"title\" [ngModel]=\"selectedList.title\">\n        <input test-data=\"lists-table-edit-list-date\" type=\"date\" class=\"form-control\" name=\"date\" [ngModel]=\"selectedList.date\">\n        <input type=\"hidden\" class=\"form-control\" name=\"id\" [ngModel]=\"selectedList.id\">\n     \n        <button test-data=\"lists-table-edit-list-save-button\" class=\"btn btn-success\"> Save </button>\n    </div>\n  </form>";

/***/ }),

/***/ 5384:
/*!*******************************************************!*\
  !*** ./src/app/lists/lists.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card shadow-lg mt-5\">\n    <div class=\"card-header text-center\">\n        <h1 class=\"display-6 fw-bold\">Your Lists:</h1>\n    </div>\n    <div class=\"card-body p-4\">\n        <div class=\"input-group mb-4\">\n            <input test-data=\"lists-title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" #listTitleInput>\n            <input test-data=\"lists-date\" type=\"date\" class=\"form-control\" #listDateInput>\n            <button test-data=\"lists-add-item\" class=\"btn text-success\"\n                (click)=\"onAddList(listTitleInput, listDateInput)\">\n                <i class=\"fa-solid fa-circle-plus fa-xl\"></i>\n            </button>\n        </div>\n        <ul test-data=\"lists-table\" class=\"list-group\">\n            <li est-data=\"lists-table-item\" class=\"list-group-item\"\n                *ngFor=\"let item of lists\">\n                <div *ngIf=\"!selectedList\">\n                    <span>\n                        <i test-data=\"lists-table-item-checkbox\" class=\"text-success\" (click)=\"onStatusChange(item.id, !item.isDone)\"\n                        [ngClass]=\"item.isDone? 'fa-solid fa-circle-check':'fa-regular fa-circle'\"></i>\n                        <span test-data=\"lists-table-item-title\" [ngClass]=\"item.isDone? 'lists-item-title list-item-done':'lists-item-title'\"> \n                            {{item.title}}\n                        </span>\n                        <span test-data=\"lists-table-item-date\"  [ngClass]=\"item.isDone? 'lists-item-date list-item-done':'lists-item-date'\"> \n                            {{item.date}}\n                        </span>\n                        <div class=\"float-end text-secondary\">\n                            <div test-data=\"lists-table-item-edit\" class=\"item-icon item-icon-pencil\">\n                                <span (click)=\"editList(item)\"> <i class=\"fa-solid fa-pencil\"></i> </span>\n                            </div>\n                            <div test-data=\"lists-table-item-delete\" class=\"item-icon item-can\">\n                                <span (click)=\"onListDelete(item.id)\"> <i class=\"fa-solid fa-trash-can\"></i> </span>\n                            </div>\n                            <div test-data=\"lists-table-item-navigate-to-list\" class=\"item-icon item-angle\">\n                                <a routerLink=\"/list/{{item.id}}/{{item.title}}\">\n                                    <i class=\"fa-solid fa-angle-right\"></i> \n                                </a>                                                               \n                            </div>\n                        </div>\n                    </span>\n\n                </div>\n                <div *ngIf=\"selectedList\">\n                    <div *ngIf=\"item.id !== selectedList.id\">\n                        <span>\n                            <i test-data=\"lists-table-item-checkbox-notselected\" class=\"text-success\" (click)=\"onStatusChange(item.id, !item.isDone)\"\n                            [ngClass]=\"item.isDone? 'fa-solid fa-circle-check':'fa-regular fa-circle'\"></i>\n                            <span test-data=\"lists-table-item-title-notselected\" [ngClass]=\"item.isDone? 'lists-item-title list-item-done':'lists-item-title'\"> \n                                {{item.title}}\n                            </span>\n                            <span test-data=\"lists-table-item-date-notselected\" [ngClass]=\"item.isDone? 'lists-item-date list-item-done':'lists-item-date'\"> \n                                {{item.date}}\n                            </span>\n                            <div class=\"float-end text-secondary\">\n                                <div test-data=\"lists-table-item-edit-notselected\" class=\"item-icon item-icon-pencil\">\n                                    <span (click)=\"editList(item)\"> <i class=\"fa-solid fa-pencil\"></i> </span>\n                                </div>\n                                <div test-data=\"lists-table-item-delete-notselected\" class=\"item-icon item-can\">\n                                    <span (click)=\"onListDelete(item.id)\"> <i class=\"fa-solid fa-trash-can\"></i> </span>\n                                </div>\n                                <div test-data=\"lists-table-item-navigate-to-list-notselected\" class=\"item-icon item-angle\">\n                                    <span> <i class=\"fa-solid fa-angle-right\"></i> </span>\n                                </div>\n                            </div>\n                        </span>\n                    </div>\n                    <div *ngIf=\"item.id == selectedList.id\">\n                        <app-lists-edit [selectedList] = \"selectedList\" \n                        (sendListToListEvent)=\"sendListToListEventHandler($event)\"></app-lists-edit>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4289)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map