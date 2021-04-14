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
var MatDatepickerModule = /** @class */ (function () {
    function MatDatepickerModule() {
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
    }], function () { return []; }, null); })();
    return MatDatepickerModule;
}());
export { MatDatepickerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLCtDQUErQyxHQUNoRCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7O0FBR3hDO0FBR1ksSUFIWjtBQUVRLElBMEMwQixDQUFDO3VEQTVDbEMsUUFBUSxTQUFDO1dBQ1IsT0FBTyxFQUFFLDBCQUNQLFlBQVksMEJBQ1osZUFBZSwwQkFDZixlQUFlO0tBQ2YsYUFBYTtpQkFDYixVQUFVLDBCQUNWO1FBQVk7WUFDYjtRQUNELE9BQU8sRUFBRTtjQUNQLFdBQVc7c0JBQ1g7VUFBZTtZQUNmLGFBQWE7O1VBQ2Isb0JBQW9CLDBCQUNwQixrQkFBa0IsMEJBQ2xCLG1CQUFtQiwwQkFDbkI7SUFBdUI7S0FDdkIsWUFBWTtvQkFDWjtDQUFXLDBCQUNYO2VBQWdCO1lBQ2hCLGlCQUFpQjttQkFDbEI7bUJBQ0Q7VUFBWSxFQUFFO1lBQ1osV0FBVywwQkFDWCxlQUFlO2NBQ2Y7RUFBYTtHQUNiO0FBQW9CO01BQ3BCLGtCQUFrQiwwQkFDbEIsbUJBQW1COztBQUNuQjtBQUF1QiwwQkFDdkI7UUFBWTtNQUNaLFdBQVc7Y0FDWCxnQkFBZ0I7O0NBQ2hCLGlCQUFpQjtvQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO2FBQ1QsaUJBQWlCLDBCQUNqQjs7Q0FBK0M7T0FDaEQ7RUFDRCxlQUFlLEVBQUU7V0FDZixvQkFBb0I7b0JBQ3BCO0FBQWlCLHVCQUNsQjtNQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQXdCLDBCQUFDO0FBQ2xDLENBRGtDLEFBNUNuQyxJQTRDbUM7QUFDbkMsU0FEYSxtQkFBbUI7QUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBMTF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge092ZXJsYXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRDYWxlbmRhciwgTWF0Q2FsZW5kYXJIZWFkZXJ9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHtNYXRDYWxlbmRhckJvZHl9IGZyb20gJy4vY2FsZW5kYXItYm9keSc7XG5pbXBvcnQge1xuICBNYXREYXRlcGlja2VyLFxuICBNYXREYXRlcGlja2VyQ29udGVudCxcbiAgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIsXG59IGZyb20gJy4vZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdERhdGVwaWNrZXJJbnB1dH0gZnJvbSAnLi9kYXRlcGlja2VyLWlucHV0JztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlckludGx9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnRsJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlclRvZ2dsZSwgTWF0RGF0ZXBpY2tlclRvZ2dsZUljb259IGZyb20gJy4vZGF0ZXBpY2tlci10b2dnbGUnO1xuaW1wb3J0IHtNYXRNb250aFZpZXd9IGZyb20gJy4vbW9udGgtdmlldyc7XG5pbXBvcnQge01hdE11bHRpWWVhclZpZXd9IGZyb20gJy4vbXVsdGkteWVhci12aWV3JztcbmltcG9ydCB7TWF0WWVhclZpZXd9IGZyb20gJy4veWVhci12aWV3JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBBMTF5TW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1hdENhbGVuZGFyLFxuICAgIE1hdENhbGVuZGFyQm9keSxcbiAgICBNYXREYXRlcGlja2VyLFxuICAgIE1hdERhdGVwaWNrZXJDb250ZW50LFxuICAgIE1hdERhdGVwaWNrZXJJbnB1dCxcbiAgICBNYXREYXRlcGlja2VyVG9nZ2xlLFxuICAgIE1hdERhdGVwaWNrZXJUb2dnbGVJY29uLFxuICAgIE1hdE1vbnRoVmlldyxcbiAgICBNYXRZZWFyVmlldyxcbiAgICBNYXRNdWx0aVllYXJWaWV3LFxuICAgIE1hdENhbGVuZGFySGVhZGVyLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRDYWxlbmRhcixcbiAgICBNYXRDYWxlbmRhckJvZHksXG4gICAgTWF0RGF0ZXBpY2tlcixcbiAgICBNYXREYXRlcGlja2VyQ29udGVudCxcbiAgICBNYXREYXRlcGlja2VySW5wdXQsXG4gICAgTWF0RGF0ZXBpY2tlclRvZ2dsZSxcbiAgICBNYXREYXRlcGlja2VyVG9nZ2xlSWNvbixcbiAgICBNYXRNb250aFZpZXcsXG4gICAgTWF0WWVhclZpZXcsXG4gICAgTWF0TXVsdGlZZWFyVmlldyxcbiAgICBNYXRDYWxlbmRhckhlYWRlcixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWF0RGF0ZXBpY2tlckludGwsXG4gICAgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE1hdERhdGVwaWNrZXJDb250ZW50LFxuICAgIE1hdENhbGVuZGFySGVhZGVyLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGVwaWNrZXJNb2R1bGUge31cbiJdfQ==