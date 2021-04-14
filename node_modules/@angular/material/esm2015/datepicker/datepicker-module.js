/**
 * @fileoverview added by tsickle
 * Generated from: src/material/datepicker/datepicker-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCalendar, MatCalendarHeader } from './calendar';
import { MatCalendarBody } from './calendar-body';
import { MatDatepicker, MatDatepickerContent, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, } from './datepicker';
import { MatDatepickerInput } from './datepicker-input';
import { MatDatepickerIntl } from './datepicker-intl';
import { MatDatepickerToggle, MatDatepickerToggleIcon } from './datepicker-toggle';
import { MatMonthView } from './month-view';
import { MatMultiYearView } from './multi-year-view';
import { MatYearView } from './year-view';
import * as ɵngcc0 from '@angular/core';
export class MatDatepickerModule {
}
MatDatepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatDatepickerModule });
MatDatepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatDatepickerModule_Factory(t) { return new (t || MatDatepickerModule)(); }, providers: [
        MatDatepickerIntl,
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
    ], imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            OverlayModule,
            A11yModule,
            PortalModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatDatepickerModule, { declarations: function () { return [MatCalendar,
        MatCalendarBody,
        MatDatepicker,
        MatDatepickerContent,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepickerToggleIcon,
        MatMonthView,
        MatYearView,
        MatMultiYearView,
        MatCalendarHeader]; }, imports: function () { return [CommonModule,
        MatButtonModule,
        MatDialogModule,
        OverlayModule,
        A11yModule,
        PortalModule]; }, exports: function () { return [MatCalendar,
        MatCalendarBody,
        MatDatepicker,
        MatDatepickerContent,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepickerToggleIcon,
        MatMonthView,
        MatYearView,
        MatMultiYearView,
        MatCalendarHeader]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    OverlayModule,
                    A11yModule,
                    PortalModule,
                ],
                exports: [
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                ],
                declarations: [
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                ],
                providers: [
                    MatDatepickerIntl,
                    MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                ],
                entryComponents: [
                    MatDatepickerContent,
                    MatCalendarHeader,
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUMxRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsK0NBQStDLEdBQ2hELE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7QUErQ3hDLE1BQU0sT0FBTyxtQkFBbUI7QUFBRzsrQ0E1Q2xDLFFBQVEsU0FBQyxrQkFDUjtNQUFPLEVBQUUsc0JBQ1AsWUFBWSxzQkFDWixlQUFlLHNCQUNmLGVBQWUsc0JBQ2YsYUFBYTtZQUNiLFVBQVU7aUJBQ1YsWUFBWSxtQkFDYjtTQUNELE9BQU8sRUFBRTtxQkFDUDtNQUFXLHNCQUNYO2NBQWU7T0FDZixhQUFhO2VBQ2I7V0FBb0I7T0FDcEI7VUFBa0Isc0JBQ2xCLG1CQUFtQixzQkFDbkIsdUJBQXVCLHNCQUN2QixZQUFZLHNCQUNaLFdBQVc7cUJBQ1g7WUFBZ0I7V0FDaEIsaUJBQWlCO2lCQUNsQjtPQUNELFlBQVksRUFBRTtjQUNaLFdBQVc7Y0FDWDtPQUFlO1FBQ2YsYUFBYTtpQkFDYixvQkFBb0Isc0JBQ3BCO0NBQWtCLHNCQUNsQjtpQkFBbUI7Y0FDbkI7Y0FBdUI7Z0JBQ3ZCLFlBQVksc0JBQ1osV0FBVzthQUNYO0lBQWdCO0dBQ2hCLGlCQUFpQjtTQUNsQixrQkFDRDtRQUFTLEVBQUU7R0FDVCxpQkFBaUI7U0FDakI7O2FBQStDO01BQ2hELGtCQUNELGVBQWU7Q0FBRSxzQkFDZixvQkFBb0Isc0JBQ3BCO0lBQWlCLG1CQUNsQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QTExeU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1BvcnRhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0Q2FsZW5kYXIsIE1hdENhbGVuZGFySGVhZGVyfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7TWF0Q2FsZW5kYXJCb2R5fSBmcm9tICcuL2NhbGVuZGFyLWJvZHknO1xuaW1wb3J0IHtcbiAgTWF0RGF0ZXBpY2tlcixcbiAgTWF0RGF0ZXBpY2tlckNvbnRlbnQsXG4gIE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZX1BST1ZJREVSLFxufSBmcm9tICcuL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXREYXRlcGlja2VySW5wdXR9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnB1dCc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJJbnRsfSBmcm9tICcuL2RhdGVwaWNrZXItaW50bCc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJUb2dnbGUsIE1hdERhdGVwaWNrZXJUb2dnbGVJY29ufSBmcm9tICcuL2RhdGVwaWNrZXItdG9nZ2xlJztcbmltcG9ydCB7TWF0TW9udGhWaWV3fSBmcm9tICcuL21vbnRoLXZpZXcnO1xuaW1wb3J0IHtNYXRNdWx0aVllYXJWaWV3fSBmcm9tICcuL211bHRpLXllYXItdmlldyc7XG5pbXBvcnQge01hdFllYXJWaWV3fSBmcm9tICcuL3llYXItdmlldyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgQTExeU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXRDYWxlbmRhcixcbiAgICBNYXRDYWxlbmRhckJvZHksXG4gICAgTWF0RGF0ZXBpY2tlcixcbiAgICBNYXREYXRlcGlja2VyQ29udGVudCxcbiAgICBNYXREYXRlcGlja2VySW5wdXQsXG4gICAgTWF0RGF0ZXBpY2tlclRvZ2dsZSxcbiAgICBNYXREYXRlcGlja2VyVG9nZ2xlSWNvbixcbiAgICBNYXRNb250aFZpZXcsXG4gICAgTWF0WWVhclZpZXcsXG4gICAgTWF0TXVsdGlZZWFyVmlldyxcbiAgICBNYXRDYWxlbmRhckhlYWRlcixcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0Q2FsZW5kYXIsXG4gICAgTWF0Q2FsZW5kYXJCb2R5LFxuICAgIE1hdERhdGVwaWNrZXIsXG4gICAgTWF0RGF0ZXBpY2tlckNvbnRlbnQsXG4gICAgTWF0RGF0ZXBpY2tlcklucHV0LFxuICAgIE1hdERhdGVwaWNrZXJUb2dnbGUsXG4gICAgTWF0RGF0ZXBpY2tlclRvZ2dsZUljb24sXG4gICAgTWF0TW9udGhWaWV3LFxuICAgIE1hdFllYXJWaWV3LFxuICAgIE1hdE11bHRpWWVhclZpZXcsXG4gICAgTWF0Q2FsZW5kYXJIZWFkZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1hdERhdGVwaWNrZXJJbnRsLFxuICAgIE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZX1BST1ZJREVSLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBNYXREYXRlcGlja2VyQ29udGVudCxcbiAgICBNYXRDYWxlbmRhckhlYWRlcixcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRlcGlja2VyTW9kdWxlIHt9XG4iXX0=