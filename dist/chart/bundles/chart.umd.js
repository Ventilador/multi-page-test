(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('chart', ['exports', '@angular/core'], factory) :
    (factory((global.chart = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartService = /** @class */ (function () {
        function ChartService() {
        }
        ChartService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ChartService.ctorParameters = function () { return []; };
        /** @nocollapse */ ChartService.ngInjectableDef = i0.defineInjectable({ factory: function ChartService_Factory() { return new ChartService(); }, token: ChartService, providedIn: "root" });
        return ChartService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartComponent = /** @class */ (function () {
        function ChartComponent() {
        }
        /**
         * @return {?}
         */
        ChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-chart',
                        template: "\n    <p>\n      chart works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ChartComponent.ctorParameters = function () { return []; };
        return ChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartModule = /** @class */ (function () {
        function ChartModule() {
        }
        ChartModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ChartComponent],
                        imports: [],
                        exports: [ChartComponent]
                    },] }
        ];
        return ChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ChartService = ChartService;
    exports.ChartComponent = ChartComponent;
    exports.ChartModule = ChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=chart.umd.js.map