import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartService {
    constructor() { }
}
ChartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ChartService.ctorParameters = () => [];
/** @nocollapse */ ChartService.ngInjectableDef = defineInjectable({ factory: function ChartService_Factory() { return new ChartService(); }, token: ChartService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-chart',
                template: `
    <p>
      chart works!
    </p>
  `
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartModule {
}
ChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ChartComponent],
                imports: [],
                exports: [ChartComponent]
            },] }
];

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