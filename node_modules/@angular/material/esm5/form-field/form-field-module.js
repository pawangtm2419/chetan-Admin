/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObserversModule } from '@angular/cdk/observers';
import { MatError } from './error';
import { MatFormField } from './form-field';
import { MatHint } from './hint';
import { MatLabel } from './label';
import { MatPlaceholder } from './placeholder';
import { MatPrefix } from './prefix';
import { MatSuffix } from './suffix';
import * as ɵngcc0 from '@angular/core';
var MatFormFieldModule = /** @class */ (function () {
    function MatFormFieldModule() {
    }
MatFormFieldModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatFormFieldModule });
MatFormFieldModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatFormFieldModule_Factory(t) { return new (t || MatFormFieldModule)(); }, imports: [[
            CommonModule,
            ObserversModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatFormFieldModule, { declarations: function () { return [MatError,
        MatFormField,
        MatHint,
        MatLabel,
        MatPlaceholder,
        MatPrefix,
        MatSuffix]; }, imports: function () { return [CommonModule,
        ObserversModule]; }, exports: function () { return [MatError,
        MatFormField,
        MatHint,
        MatLabel,
        MatPlaceholder,
        MatPrefix,
        MatSuffix]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFormFieldModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ],
                imports: [
                    CommonModule,
                    ObserversModule,
                ],
                exports: [
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ]
            }]
    }], function () { return []; }, null); })();
    return MatFormFieldModule;
}());
export { MatFormFieldModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7QUFFbkM7QUFHVSxJQUhWO0FBRUUsSUFzQitCLENBQUM7c0RBeEJqQyxRQUFRLFNBQUM7WUFDUixZQUFZLEVBQUUsMEJBQ1osUUFBUSwwQkFDUixZQUFZLDBCQUNaLE9BQU87QUFDUCxRQUFRO1FBQ1IsY0FBYzs7SUFDZCxTQUFTLDBCQUNULFNBQVMsdUJBQ1Ysc0JBQ0QsT0FBTyxFQUFFLDBCQUNQLFlBQVk7TUFDWixlQUFlOztLQUNoQjtTQUNELE9BQU8sRUFBRTs7Q0FDUCxRQUFRLDBCQUNSLFlBQVk7S0FDWixPQUFPLDBCQUNQLFFBQVE7RUFDUixjQUFjOztHQUNkLFNBQVM7b0JBQ1Q7S0FBUztTQUNWLG1CQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUF1Qix5QkFBQztBQUNqQyxDQURpQyxBQXhCbEMsSUF3QmtDO0FBQ2xDLFNBRGEsa0JBQWtCO0FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmVyc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge01hdEVycm9yfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkfSBmcm9tICcuL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRIaW50fSBmcm9tICcuL2hpbnQnO1xuaW1wb3J0IHtNYXRMYWJlbH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQge01hdFBsYWNlaG9sZGVyfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7TWF0UHJlZml4fSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQge01hdFN1ZmZpeH0gZnJvbSAnLi9zdWZmaXgnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRFcnJvcixcbiAgICBNYXRGb3JtRmllbGQsXG4gICAgTWF0SGludCxcbiAgICBNYXRMYWJlbCxcbiAgICBNYXRQbGFjZWhvbGRlcixcbiAgICBNYXRQcmVmaXgsXG4gICAgTWF0U3VmZml4LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE9ic2VydmVyc01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1hdEVycm9yLFxuICAgIE1hdEZvcm1GaWVsZCxcbiAgICBNYXRIaW50LFxuICAgIE1hdExhYmVsLFxuICAgIE1hdFBsYWNlaG9sZGVyLFxuICAgIE1hdFByZWZpeCxcbiAgICBNYXRTdWZmaXgsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZvcm1GaWVsZE1vZHVsZSB7fVxuIl19