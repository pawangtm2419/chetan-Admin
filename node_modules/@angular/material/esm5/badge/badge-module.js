/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { A11yModule } from '@angular/cdk/a11y';
import { MatBadge } from './badge';
import * as ɵngcc0 from '@angular/core';
var MatBadgeModule = /** @class */ (function () {
    function MatBadgeModule() {
    }
MatBadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatBadgeModule });
MatBadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatBadgeModule_Factory(t) { return new (t || MatBadgeModule)(); }, imports: [[
            A11yModule,
            MatCommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatBadgeModule, { declarations: function () { return [MatBadge]; }, imports: function () { return [A11yModule,
        MatCommonModule]; }, exports: function () { return [MatBadge]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatBadgeModule, [{
        type: NgModule,
        args: [{
                imports: [
                    A11yModule,
                    MatCommonModule
                ],
                exports: [MatBadge],
                declarations: [MatBadge]
            }]
    }], function () { return []; }, null); })();
    return MatBadgeModule;
}());
export { MatBadgeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvYmFkZ2UvYmFkZ2UtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7QUFHakM7QUFHUyxJQUhUO0FBRUcsSUFNMEIsQ0FBQztrREFSN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSwwQkFDUCxVQUFVLDBCQUNWLGVBQWUsc0JBQ2hCO0NBQ0QsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2tCQUNuQjtFQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0JBQ3pCOzs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFtQixxQkFBQztBQUM3QixDQUQ2QixBQVI5QixJQVE4QjtBQUM5QixTQURhLGNBQWM7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7TWF0QmFkZ2V9IGZyb20gJy4vYmFkZ2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBMTF5TW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTWF0QmFkZ2VdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRCYWRnZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdEJhZGdlTW9kdWxlIHt9XG4iXX0=