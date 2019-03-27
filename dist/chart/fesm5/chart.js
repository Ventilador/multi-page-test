import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartService = /** @class */ (function () {
    function ChartService() {
    }
    ChartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ChartService.ctorParameters = function () { return []; };
    /** @nocollapse */ ChartService.ngInjectableDef = defineInjectable({ factory: function ChartService_Factory() { return new ChartService(); }, token: ChartService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { ChartService, ChartComponent, ChartModule };

//# sourceMappingURL=chart.js.map