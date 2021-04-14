/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { getSupportedInputTypes, Platform } from '@angular/cdk/platform';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { Directive, ElementRef, Inject, Input, NgZone, Optional, Self, } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher, mixinErrorState, } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { getMatInputUnsupportedTypeError } from './input-errors';
import { MAT_INPUT_VALUE_ACCESSOR } from './input-value-accessor';
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from '@angular/material/core';
import * as ɵngcc4 from '@angular/cdk/text-field';
var MAT_INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
var nextUniqueId = 0;
// Boilerplate for applying mixins to MatInput.
/** @docs-private */
var MatInputBase = /** @class */ (function () {
    function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatInputBase;
}());
var _MatInputMixinBase = mixinErrorState(MatInputBase);
/** Directive that allows a native input to work inside a `MatFormField`. */
var MatInput = /** @class */ (function (_super) {
    __extends(MatInput, _super);
    function MatInput(_elementRef, _platform, 
    /** @docs-private */
    ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
        var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._elementRef = _elementRef;
        _this._platform = _platform;
        _this.ngControl = ngControl;
        _this._autofillMonitor = _autofillMonitor;
        _this._uid = "mat-input-" + nextUniqueId++;
        /** Whether the component is being rendered on the server. */
        _this._isServer = false;
        /** Whether the component is a native html select. */
        _this._isNativeSelect = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        _this.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        _this.stateChanges = new Subject();
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        _this.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        _this.autofilled = false;
        _this._disabled = false;
        _this._required = false;
        _this._type = 'text';
        _this._readonly = false;
        _this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ].filter(function (t) { return getSupportedInputTypes().has(t); });
        var element = _this._elementRef.nativeElement;
        // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.
        _this._inputValueAccessor = inputValueAccessor || element;
        _this._previousNativeValue = _this.value;
        // Force setter to be called in case id was not specified.
        _this.id = _this.id;
        // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.
        if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
                _elementRef.nativeElement.addEventListener('keyup', function (event) {
                    var el = event.target;
                    if (!el.value && !el.selectionStart && !el.selectionEnd) {
                        // Note: Just setting `0, 0` doesn't fix the issue. Setting
                        // `1, 1` fixes it for the first time that you type text and
                        // then hold delete. Toggling to `1, 1` and then back to
                        // `0, 0` seems to completely fix it.
                        el.setSelectionRange(1, 1);
                        el.setSelectionRange(0, 0);
                    }
                });
            });
        }
        _this._isServer = !_this._platform.isBrowser;
        _this._isNativeSelect = element.nodeName.toLowerCase() === 'select';
        if (_this._isNativeSelect) {
            _this.controlType = element.multiple ? 'mat-native-select-multiple' :
                'mat-native-select';
        }
        return _this;
    }
    Object.defineProperty(MatInput.prototype, "disabled", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.
            if (this.focused) {
                this.focused = false;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "id", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: function () { return this._id; },
        set: function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "required", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: function () { return this._required; },
        set: function (value) { this._required = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "type", {
        /** Input type of the element. */
        get: function () { return this._type; },
        set: function (value) {
            this._type = value || 'text';
            this._validateType();
            // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.
            if (!this._isTextarea() && getSupportedInputTypes().has(this._type)) {
                this._elementRef.nativeElement.type = this._type;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "value", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: function () { return this._inputValueAccessor.value; },
        set: function (value) {
            if (value !== this.value) {
                this._inputValueAccessor.value = value;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "readonly", {
        /** Whether the element is readonly. */
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MatInput.prototype.ngOnInit = function () {
        var _this = this;
        if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this.autofilled = event.isAutofilled;
                _this.stateChanges.next();
            });
        }
    };
    MatInput.prototype.ngOnChanges = function () {
        this.stateChanges.next();
    };
    MatInput.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
    };
    MatInput.prototype.ngDoCheck = function () {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
        // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).
        this._dirtyCheckNativeValue();
    };
    /** Focuses the input. */
    MatInput.prototype.focus = function (options) {
        this._elementRef.nativeElement.focus(options);
    };
    /** Callback for the cases where the focused state of the input changes. */
    MatInput.prototype._focusChanged = function (isFocused) {
        if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    };
    MatInput.prototype._onInput = function () {
        // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    };
    /** Determines if the component host is a textarea. */
    MatInput.prototype._isTextarea = function () {
        return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
    };
    /** Does some manual dirty checking on the native input `value` property. */
    MatInput.prototype._dirtyCheckNativeValue = function () {
        var newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
        }
    };
    /** Make sure the input is a supported type. */
    MatInput.prototype._validateType = function () {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
            throw getMatInputUnsupportedTypeError(this._type);
        }
    };
    /** Checks whether the input type is one of the types that are never empty. */
    MatInput.prototype._isNeverEmpty = function () {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    };
    /** Checks whether the input is invalid based on the native validation. */
    MatInput.prototype._isBadInput = function () {
        // The `validity` property won't be present on platform-server.
        var validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
    };
    Object.defineProperty(MatInput.prototype, "empty", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: function () {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
                !this.autofilled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: function () {
            if (this._isNativeSelect) {
                // For a single-selection `<select>`, the label should float when the selected option has
                // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
                // overlapping the label with the options.
                var selectElement = this._elementRef.nativeElement;
                var firstOption = selectElement.options[0];
                // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
                // -1 if the `value` is set to something, that isn't in the list of options, at a later point.
                return this.focused || selectElement.multiple || !this.empty ||
                    !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
            }
            else {
                return this.focused || !this.empty;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    MatInput.prototype.setDescribedByIds = function (ids) {
        this._ariaDescribedby = ids.join(' ');
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    MatInput.prototype.onContainerClick = function () {
        // Do not re-focus the input element if the element is already focused. Otherwise it can happen
        // that someone clicks on a time input and the cursor resets to the "hours" field while the
        // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
        if (!this.focused) {
            this.focus();
        }
    };
    /** @nocollapse */
    MatInput.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Platform },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher },
        { type: undefined, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [MAT_INPUT_VALUE_ACCESSOR,] }] },
        { type: AutofillMonitor },
        { type: NgZone }
    ]; };
    MatInput.propDecorators = {
        disabled: [{ type: Input }],
        id: [{ type: Input }],
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        type: [{ type: Input }],
        errorStateMatcher: [{ type: Input }],
        value: [{ type: Input }],
        readonly: [{ type: Input }]
    };
MatInput.ɵfac = function MatInput_Factory(t) { return new (t || MatInput)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgControl, 10), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgForm, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FormGroupDirective, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.ErrorStateMatcher), ɵngcc0.ɵɵdirectiveInject(MAT_INPUT_VALUE_ACCESSOR, 10), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.AutofillMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
MatInput.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatInput, selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]], hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"], hostVars: 10, hostBindings: function MatInput_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function MatInput_blur_HostBindingHandler() { return ctx._focusChanged(false); })("focus", function MatInput_focus_HostBindingHandler() { return ctx._focusChanged(true); })("input", function MatInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("disabled", ctx.disabled)("required", ctx.required);
        ɵngcc0.ɵɵattribute("id", ctx.id)("placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());
        ɵngcc0.ɵɵclassProp("mat-input-server", ctx._isServer);
    } }, inputs: { disabled: "disabled", id: "id", required: "required", type: "type", value: "value", readonly: "readonly", placeholder: "placeholder", errorStateMatcher: "errorStateMatcher" }, exportAs: ["matInput"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MatInput }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatInput, [{
        type: Directive,
        args: [{
                selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
                exportAs: 'matInput',
                host: {
                    /**
                     * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                     */
                    'class': 'mat-input-element mat-form-field-autofill-control',
                    '[class.mat-input-server]': '_isServer',
                    // Native input properties that are overwritten by Angular inputs need to be synced with
                    // the native input element. Otherwise property bindings for those don't work.
                    '[attr.id]': 'id',
                    '[attr.placeholder]': 'placeholder',
                    '[disabled]': 'disabled',
                    '[required]': 'required',
                    '[attr.readonly]': 'readonly && !_isNativeSelect || null',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-required]': 'required.toString()',
                    '(blur)': '_focusChanged(false)',
                    '(focus)': '_focusChanged(true)',
                    '(input)': '_onInput()'
                },
                providers: [{ provide: MatFormFieldControl, useExisting: MatInput }]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Platform }, { type: ɵngcc2.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: ɵngcc2.NgForm, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.FormGroupDirective, decorators: [{
                type: Optional
            }] }, { type: ɵngcc3.ErrorStateMatcher }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Self
            }, {
                type: Inject,
                args: [MAT_INPUT_VALUE_ACCESSOR]
            }] }, { type: ɵngcc4.AutofillMonitor }, { type: ɵngcc0.NgZone }]; }, { disabled: [{
            type: Input
        }], id: [{
            type: Input
        }], required: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }], readonly: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], errorStateMatcher: [{
            type: Input
        }] }); })();
    return MatInput;
}(_MatInputMixinBase));
export { MatInput };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9pbnB1dC9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBR0wsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR2hFLHFGQUFxRjs7Ozs7O0FBQ3JGLElBQU0sdUJBQXVCLEdBQUc7QUFDaEMsSUFBRSxRQUFRO0FBQ1YsSUFBRSxVQUFVO0FBQ1osSUFBRSxNQUFNO0FBQ1IsSUFBRSxRQUFRO0FBQ1YsSUFBRSxPQUFPO0FBQ1QsSUFBRSxPQUFPO0FBQ1QsSUFBRSxPQUFPO0FBQ1QsSUFBRSxPQUFPO0FBQ1QsSUFBRSxRQUFRO0FBQ1YsQ0FBQyxDQUFDO0FB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QkFBMEIsMEJBQ3JELHFCQUFxQixFQUFFLFlBQVksMEJBQ25DLHNCQUFzQixFQUFFLHFCQUFxQiwwQkFDN0MsUUFBUSxFQUFFLHNCQUFzQiwwQkFDaEMsU0FBUyxFQUFFO2FBQXFCLDBCQUNoQyxTQUFTLEVBQUUsWUFBWSx1QkFDeEIsc0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQyxDQUFDLG1CQUNuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBd0hNO0FBQUMsSUF3TlIsZUFBQztBQUNBLENBREEsQUF6V0QsQ0EwQjhCLGtCQUFrQixHQStVL0M7QUFDRCxTQWhWYSxRQUFRO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Z2V0U3VwcG9ydGVkSW5wdXRUeXBlcywgUGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge0F1dG9maWxsTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0NvbnRyb2wsIE5nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2FuVXBkYXRlRXJyb3JTdGF0ZSxcbiAgQ2FuVXBkYXRlRXJyb3JTdGF0ZUN0b3IsXG4gIEVycm9yU3RhdGVNYXRjaGVyLFxuICBtaXhpbkVycm9yU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRDb250cm9sfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2dldE1hdElucHV0VW5zdXBwb3J0ZWRUeXBlRXJyb3J9IGZyb20gJy4vaW5wdXQtZXJyb3JzJztcbmltcG9ydCB7TUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2lucHV0LXZhbHVlLWFjY2Vzc29yJztcblxuXG4vLyBJbnZhbGlkIGlucHV0IHR5cGUuIFVzaW5nIG9uZSBvZiB0aGVzZSB3aWxsIHRocm93IGFuIE1hdElucHV0VW5zdXBwb3J0ZWRUeXBlRXJyb3IuXG5jb25zdCBNQVRfSU5QVVRfSU5WQUxJRF9UWVBFUyA9IFtcbiAgJ2J1dHRvbicsXG4gICdjaGVja2JveCcsXG4gICdmaWxlJyxcbiAgJ2hpZGRlbicsXG4gICdpbWFnZScsXG4gICdyYWRpbycsXG4gICdyYW5nZScsXG4gICdyZXNldCcsXG4gICdzdWJtaXQnXG5dO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXRJbnB1dC5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXRJbnB1dEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgICAgICAgICAgICBwdWJsaWMgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgICAgICAgICAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgICAgICAgICAgICBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHt9XG59XG5jb25zdCBfTWF0SW5wdXRNaXhpbkJhc2U6IENhblVwZGF0ZUVycm9yU3RhdGVDdG9yICYgdHlwZW9mIE1hdElucHV0QmFzZSA9XG4gICAgbWl4aW5FcnJvclN0YXRlKE1hdElucHV0QmFzZSk7XG5cbi8qKiBEaXJlY3RpdmUgdGhhdCBhbGxvd3MgYSBuYXRpdmUgaW5wdXQgdG8gd29yayBpbnNpZGUgYSBgTWF0Rm9ybUZpZWxkYC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W21hdElucHV0XSwgdGV4dGFyZWFbbWF0SW5wdXRdLCBzZWxlY3RbbWF0TmF0aXZlQ29udHJvbF0sXG4gICAgICBpbnB1dFttYXROYXRpdmVDb250cm9sXSwgdGV4dGFyZWFbbWF0TmF0aXZlQ29udHJvbF1gLFxuICBleHBvcnRBczogJ21hdElucHV0JyxcbiAgaG9zdDoge1xuICAgIC8qKlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgcmVtb3ZlIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sIGluIGZhdm9yIG9mIEF1dG9maWxsTW9uaXRvci5cbiAgICAgKi9cbiAgICAnY2xhc3MnOiAnbWF0LWlucHV0LWVsZW1lbnQgbWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbCcsXG4gICAgJ1tjbGFzcy5tYXQtaW5wdXQtc2VydmVyXSc6ICdfaXNTZXJ2ZXInLFxuICAgIC8vIE5hdGl2ZSBpbnB1dCBwcm9wZXJ0aWVzIHRoYXQgYXJlIG92ZXJ3cml0dGVuIGJ5IEFuZ3VsYXIgaW5wdXRzIG5lZWQgdG8gYmUgc3luY2VkIHdpdGhcbiAgICAvLyB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQuIE90aGVyd2lzZSBwcm9wZXJ0eSBiaW5kaW5ncyBmb3IgdGhvc2UgZG9uJ3Qgd29yay5cbiAgICAnW2F0dHIuaWRdJzogJ2lkJyxcbiAgICAnW2F0dHIucGxhY2Vob2xkZXJdJzogJ3BsYWNlaG9sZGVyJyxcbiAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tyZXF1aXJlZF0nOiAncmVxdWlyZWQnLFxuICAgICdbYXR0ci5yZWFkb25seV0nOiAncmVhZG9ubHkgJiYgIV9pc05hdGl2ZVNlbGVjdCB8fCBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS1kZXNjcmliZWRieV0nOiAnX2FyaWFEZXNjcmliZWRieSB8fCBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS1pbnZhbGlkXSc6ICdlcnJvclN0YXRlJyxcbiAgICAnW2F0dHIuYXJpYS1yZXF1aXJlZF0nOiAncmVxdWlyZWQudG9TdHJpbmcoKScsXG4gICAgJyhibHVyKSc6ICdfZm9jdXNDaGFuZ2VkKGZhbHNlKScsXG4gICAgJyhmb2N1cyknOiAnX2ZvY3VzQ2hhbmdlZCh0cnVlKScsXG4gICAgJyhpbnB1dCknOiAnX29uSW5wdXQoKScsXG4gIH0sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTWF0SW5wdXR9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0SW5wdXQgZXh0ZW5kcyBfTWF0SW5wdXRNaXhpbkJhc2UgaW1wbGVtZW50cyBNYXRGb3JtRmllbGRDb250cm9sPGFueT4sIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksIE9uSW5pdCwgRG9DaGVjaywgQ2FuVXBkYXRlRXJyb3JTdGF0ZSB7XG4gIHByb3RlY3RlZCBfdWlkID0gYG1hdC1pbnB1dC0ke25leHRVbmlxdWVJZCsrfWA7XG4gIHByb3RlY3RlZCBfcHJldmlvdXNOYXRpdmVWYWx1ZTogYW55O1xuICBwcml2YXRlIF9pbnB1dFZhbHVlQWNjZXNzb3I6IHt2YWx1ZTogYW55fTtcbiAgLyoqIFRoZSBhcmlhLWRlc2NyaWJlZGJ5IGF0dHJpYnV0ZSBvbiB0aGUgaW5wdXQgZm9yIGltcHJvdmVkIGExMXkuICovXG4gIF9hcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcblxuICAvKiogV2hldGhlciB0aGUgY29tcG9uZW50IGlzIGJlaW5nIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuICovXG4gIF9pc1NlcnZlciA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjb21wb25lbnQgaXMgYSBuYXRpdmUgaHRtbCBzZWxlY3QuICovXG4gIF9pc05hdGl2ZVNlbGVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYXRGb3JtRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGNvbnRyb2xUeXBlOiBzdHJpbmcgPSAnbWF0LWlucHV0JztcblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYXRGb3JtRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBhdXRvZmlsbGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgLy8gQnJvd3NlcnMgbWF5IG5vdCBmaXJlIHRoZSBibHVyIGV2ZW50IGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZCB0b28gcXVpY2tseS5cbiAgICAvLyBSZXNldCBmcm9tIGhlcmUgdG8gZW5zdXJlIHRoYXQgdGhlIGVsZW1lbnQgZG9lc24ndCBiZWNvbWUgc3R1Y2suXG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYXRGb3JtRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7IHRoaXMuX2lkID0gdmFsdWUgfHwgdGhpcy5fdWlkOyB9XG4gIHByb3RlY3RlZCBfaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYXRGb3JtRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIC8qKiBJbnB1dCB0eXBlIG9mIHRoZSBlbGVtZW50LiAqL1xuICBASW5wdXQoKVxuICBnZXQgdHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8ICd0ZXh0JztcbiAgICB0aGlzLl92YWxpZGF0ZVR5cGUoKTtcblxuICAgIC8vIFdoZW4gdXNpbmcgQW5ndWxhciBpbnB1dHMsIGRldmVsb3BlcnMgYXJlIG5vIGxvbmdlciBhYmxlIHRvIHNldCB0aGUgcHJvcGVydGllcyBvbiB0aGUgbmF0aXZlXG4gICAgLy8gaW5wdXQgZWxlbWVudC4gVG8gZW5zdXJlIHRoYXQgYmluZGluZ3MgZm9yIGB0eXBlYCB3b3JrLCB3ZSBuZWVkIHRvIHN5bmMgdGhlIHNldHRlclxuICAgIC8vIHdpdGggdGhlIG5hdGl2ZSBwcm9wZXJ0eS4gVGV4dGFyZWEgZWxlbWVudHMgZG9uJ3Qgc3VwcG9ydCB0aGUgdHlwZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUuXG4gICAgaWYgKCF0aGlzLl9pc1RleHRhcmVhKCkgJiYgZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcygpLmhhcyh0aGlzLl90eXBlKSkge1xuICAgICAgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF90eXBlID0gJ3RleHQnO1xuXG4gIC8qKiBBbiBvYmplY3QgdXNlZCB0byBjb250cm9sIHdoZW4gZXJyb3IgbWVzc2FnZXMgYXJlIHNob3duLiAqL1xuICBASW5wdXQoKSBlcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXI7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pbnB1dFZhbHVlQWNjZXNzb3IudmFsdWU7IH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX2lucHV0VmFsdWVBY2Nlc3Nvci52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZWFkb25seTsgfVxuICBzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fcmVhZG9ubHkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIHByaXZhdGUgX3JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIF9uZXZlckVtcHR5SW5wdXRUeXBlcyA9IFtcbiAgICAnZGF0ZScsXG4gICAgJ2RhdGV0aW1lJyxcbiAgICAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgICdtb250aCcsXG4gICAgJ3RpbWUnLFxuICAgICd3ZWVrJ1xuICBdLmZpbHRlcih0ID0+IGdldFN1cHBvcnRlZElucHV0VHlwZXMoKS5oYXModCkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIF9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgQEluamVjdChNQVRfSU5QVVRfVkFMVUVfQUNDRVNTT1IpIGlucHV0VmFsdWVBY2Nlc3NvcjogYW55LFxuICAgIHByaXZhdGUgX2F1dG9maWxsTW9uaXRvcjogQXV0b2ZpbGxNb25pdG9yLFxuICAgIG5nWm9uZTogTmdab25lKSB7XG5cbiAgICBzdXBlcihfZGVmYXVsdEVycm9yU3RhdGVNYXRjaGVyLCBfcGFyZW50Rm9ybSwgX3BhcmVudEZvcm1Hcm91cCwgbmdDb250cm9sKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBJZiBubyBpbnB1dCB2YWx1ZSBhY2Nlc3NvciB3YXMgZXhwbGljaXRseSBzcGVjaWZpZWQsIHVzZSB0aGUgZWxlbWVudCBhcyB0aGUgaW5wdXQgdmFsdWVcbiAgICAvLyBhY2Nlc3Nvci5cbiAgICB0aGlzLl9pbnB1dFZhbHVlQWNjZXNzb3IgPSBpbnB1dFZhbHVlQWNjZXNzb3IgfHwgZWxlbWVudDtcblxuICAgIHRoaXMuX3ByZXZpb3VzTmF0aXZlVmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgLy8gRm9yY2Ugc2V0dGVyIHRvIGJlIGNhbGxlZCBpbiBjYXNlIGlkIHdhcyBub3Qgc3BlY2lmaWVkLlxuICAgIHRoaXMuaWQgPSB0aGlzLmlkO1xuXG4gICAgLy8gT24gc29tZSB2ZXJzaW9ucyBvZiBpT1MgdGhlIGNhcmV0IGdldHMgc3R1Y2sgaW4gdGhlIHdyb25nIHBsYWNlIHdoZW4gaG9sZGluZyBkb3duIHRoZSBkZWxldGVcbiAgICAvLyBrZXkuIEluIG9yZGVyIHRvIGdldCBhcm91bmQgdGhpcyB3ZSBuZWVkIHRvIFwiamlnZ2xlXCIgdGhlIGNhcmV0IGxvb3NlLiBTaW5jZSB0aGlzIGJ1ZyBvbmx5XG4gICAgLy8gZXhpc3RzIG9uIGlPUywgd2Ugb25seSBib3RoZXIgdG8gaW5zdGFsbCB0aGUgbGlzdGVuZXIgb24gaU9TLlxuICAgIGlmIChfcGxhdGZvcm0uSU9TKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgIGxldCBlbCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghZWwudmFsdWUgJiYgIWVsLnNlbGVjdGlvblN0YXJ0ICYmICFlbC5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIC8vIE5vdGU6IEp1c3Qgc2V0dGluZyBgMCwgMGAgZG9lc24ndCBmaXggdGhlIGlzc3VlLiBTZXR0aW5nXG4gICAgICAgICAgICAvLyBgMSwgMWAgZml4ZXMgaXQgZm9yIHRoZSBmaXJzdCB0aW1lIHRoYXQgeW91IHR5cGUgdGV4dCBhbmRcbiAgICAgICAgICAgIC8vIHRoZW4gaG9sZCBkZWxldGUuIFRvZ2dsaW5nIHRvIGAxLCAxYCBhbmQgdGhlbiBiYWNrIHRvXG4gICAgICAgICAgICAvLyBgMCwgMGAgc2VlbXMgdG8gY29tcGxldGVseSBmaXggaXQuXG4gICAgICAgICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZSgxLCAxKTtcbiAgICAgICAgICAgIGVsLnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1NlcnZlciA9ICF0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gICAgdGhpcy5faXNOYXRpdmVTZWxlY3QgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnO1xuXG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlU2VsZWN0KSB7XG4gICAgICB0aGlzLmNvbnRyb2xUeXBlID0gKGVsZW1lbnQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLm11bHRpcGxlID8gJ21hdC1uYXRpdmUtc2VsZWN0LW11bHRpcGxlJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21hdC1uYXRpdmUtc2VsZWN0JztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9hdXRvZmlsbE1vbml0b3IubW9uaXRvcih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIHRoaXMuYXV0b2ZpbGxlZCA9IGV2ZW50LmlzQXV0b2ZpbGxlZDtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcblxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2F1dG9maWxsTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gcmUtZXZhbHVhdGUgdGhpcyBvbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLCBiZWNhdXNlIHRoZXJlIGFyZSBzb21lXG4gICAgICAvLyBlcnJvciB0cmlnZ2VycyB0aGF0IHdlIGNhbid0IHN1YnNjcmliZSB0byAoZS5nLiBwYXJlbnQgZm9ybSBzdWJtaXNzaW9ucykuIFRoaXMgbWVhbnNcbiAgICAgIC8vIHRoYXQgd2hhdGV2ZXIgbG9naWMgaXMgaW4gaGVyZSBoYXMgdG8gYmUgc3VwZXIgbGVhbiBvciB3ZSByaXNrIGRlc3Ryb3lpbmcgdGhlIHBlcmZvcm1hbmNlLlxuICAgICAgdGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byBkaXJ0eS1jaGVjayB0aGUgbmF0aXZlIGVsZW1lbnQncyB2YWx1ZSwgYmVjYXVzZSB0aGVyZSBhcmUgc29tZSBjYXNlcyB3aGVyZVxuICAgIC8vIHdlIHdvbid0IGJlIG5vdGlmaWVkIHdoZW4gaXQgY2hhbmdlcyAoZS5nLiB0aGUgY29uc3VtZXIgaXNuJ3QgdXNpbmcgZm9ybXMgb3IgdGhleSdyZVxuICAgIC8vIHVwZGF0aW5nIHRoZSB2YWx1ZSB1c2luZyBgZW1pdEV2ZW50OiBmYWxzZWApLlxuICAgIHRoaXMuX2RpcnR5Q2hlY2tOYXRpdmVWYWx1ZSgpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGlucHV0LiAqL1xuICBmb2N1cyhvcHRpb25zPzogRm9jdXNPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqIENhbGxiYWNrIGZvciB0aGUgY2FzZXMgd2hlcmUgdGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIGlucHV0IGNoYW5nZXMuICovXG4gIF9mb2N1c0NoYW5nZWQoaXNGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgaWYgKGlzRm9jdXNlZCAhPT0gdGhpcy5mb2N1c2VkICYmICghdGhpcy5yZWFkb25seSB8fCAhaXNGb2N1c2VkKSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gaXNGb2N1c2VkO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vbklucHV0KCkge1xuICAgIC8vIFRoaXMgaXMgYSBub29wIGZ1bmN0aW9uIGFuZCBpcyB1c2VkIHRvIGxldCBBbmd1bGFyIGtub3cgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgLy8gQW5ndWxhciB3aWxsIHJ1biBhIG5ldyBjaGFuZ2UgZGV0ZWN0aW9uIGVhY2ggdGltZSB0aGUgYGlucHV0YCBldmVudCBoYXMgYmVlbiBkaXNwYXRjaGVkLlxuICAgIC8vIEl0J3MgbmVjZXNzYXJ5IHRoYXQgQW5ndWxhciByZWNvZ25pemVzIHRoZSB2YWx1ZSBjaGFuZ2UsIGJlY2F1c2Ugd2hlbiBmbG9hdGluZ0xhYmVsXG4gICAgLy8gaXMgc2V0IHRvIGZhbHNlIGFuZCBBbmd1bGFyIGZvcm1zIGFyZW4ndCB1c2VkLCB0aGUgcGxhY2Vob2xkZXIgd29uJ3QgcmVjb2duaXplIHRoZVxuICAgIC8vIHZhbHVlIGNoYW5nZXMgYW5kIHdpbGwgbm90IGRpc2FwcGVhci5cbiAgICAvLyBMaXN0ZW5pbmcgdG8gdGhlIGlucHV0IGV2ZW50IHdvdWxkbid0IGJlIG5lY2Vzc2FyeSB3aGVuIHRoZSBpbnB1dCBpcyB1c2luZyB0aGVcbiAgICAvLyBGb3Jtc01vZHVsZSBvciBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBiZWNhdXNlIEFuZ3VsYXIgZm9ybXMgYWxzbyBsaXN0ZW5zIHRvIGlucHV0IGV2ZW50cy5cbiAgfVxuXG4gIC8qKiBEZXRlcm1pbmVzIGlmIHRoZSBjb21wb25lbnQgaG9zdCBpcyBhIHRleHRhcmVhLiAqL1xuICBfaXNUZXh0YXJlYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XG4gIH1cblxuICAvKiogRG9lcyBzb21lIG1hbnVhbCBkaXJ0eSBjaGVja2luZyBvbiB0aGUgbmF0aXZlIGlucHV0IGB2YWx1ZWAgcHJvcGVydHkuICovXG4gIHByb3RlY3RlZCBfZGlydHlDaGVja05hdGl2ZVZhbHVlKCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzTmF0aXZlVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c05hdGl2ZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ha2Ugc3VyZSB0aGUgaW5wdXQgaXMgYSBzdXBwb3J0ZWQgdHlwZS4gKi9cbiAgcHJvdGVjdGVkIF92YWxpZGF0ZVR5cGUoKSB7XG4gICAgaWYgKE1BVF9JTlBVVF9JTlZBTElEX1RZUEVTLmluZGV4T2YodGhpcy5fdHlwZSkgPiAtMSkge1xuICAgICAgdGhyb3cgZ2V0TWF0SW5wdXRVbnN1cHBvcnRlZFR5cGVFcnJvcih0aGlzLl90eXBlKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2hlY2tzIHdoZXRoZXIgdGhlIGlucHV0IHR5cGUgaXMgb25lIG9mIHRoZSB0eXBlcyB0aGF0IGFyZSBuZXZlciBlbXB0eS4gKi9cbiAgcHJvdGVjdGVkIF9pc05ldmVyRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldmVyRW1wdHlJbnB1dFR5cGVzLmluZGV4T2YodGhpcy5fdHlwZSkgPiAtMTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciB0aGUgaW5wdXQgaXMgaW52YWxpZCBiYXNlZCBvbiB0aGUgbmF0aXZlIHZhbGlkYXRpb24uICovXG4gIHByb3RlY3RlZCBfaXNCYWRJbnB1dCgpIHtcbiAgICAvLyBUaGUgYHZhbGlkaXR5YCBwcm9wZXJ0eSB3b24ndCBiZSBwcmVzZW50IG9uIHBsYXRmb3JtLXNlcnZlci5cbiAgICBsZXQgdmFsaWRpdHkgPSAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbGlkaXR5O1xuICAgIHJldHVybiB2YWxpZGl0eSAmJiB2YWxpZGl0eS5iYWRJbnB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuX2lzTmV2ZXJFbXB0eSgpICYmICF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgJiYgIXRoaXMuX2lzQmFkSW5wdXQoKSAmJlxuICAgICAgICAhdGhpcy5hdXRvZmlsbGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlU2VsZWN0KSB7XG4gICAgICAvLyBGb3IgYSBzaW5nbGUtc2VsZWN0aW9uIGA8c2VsZWN0PmAsIHRoZSBsYWJlbCBzaG91bGQgZmxvYXQgd2hlbiB0aGUgc2VsZWN0ZWQgb3B0aW9uIGhhc1xuICAgICAgLy8gYSBub24tZW1wdHkgZGlzcGxheSB2YWx1ZS4gRm9yIGEgYDxzZWxlY3QgbXVsdGlwbGU+YCwgdGhlIGxhYmVsICphbHdheXMqIGZsb2F0cyB0byBhdm9pZFxuICAgICAgLy8gb3ZlcmxhcHBpbmcgdGhlIGxhYmVsIHdpdGggdGhlIG9wdGlvbnMuXG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgY29uc3QgZmlyc3RPcHRpb246IEhUTUxPcHRpb25FbGVtZW50IHwgdW5kZWZpbmVkID0gc2VsZWN0RWxlbWVudC5vcHRpb25zWzBdO1xuXG4gICAgICAvLyBPbiBtb3N0IGJyb3dzZXJzIHRoZSBgc2VsZWN0ZWRJbmRleGAgd2lsbCBhbHdheXMgYmUgMCwgaG93ZXZlciBvbiBJRSBhbmQgRWRnZSBpdCdsbCBiZVxuICAgICAgLy8gLTEgaWYgdGhlIGB2YWx1ZWAgaXMgc2V0IHRvIHNvbWV0aGluZywgdGhhdCBpc24ndCBpbiB0aGUgbGlzdCBvZiBvcHRpb25zLCBhdCBhIGxhdGVyIHBvaW50LlxuICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCBzZWxlY3RFbGVtZW50Lm11bHRpcGxlIHx8ICF0aGlzLmVtcHR5IHx8XG4gICAgICAgICAgICAgISEoc2VsZWN0RWxlbWVudC5zZWxlY3RlZEluZGV4ID4gLTEgJiYgZmlyc3RPcHRpb24gJiYgZmlyc3RPcHRpb24ubGFiZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hcmlhRGVzY3JpYmVkYnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Db250YWluZXJDbGljaygpIHtcbiAgICAvLyBEbyBub3QgcmUtZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgaWYgdGhlIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLiBPdGhlcndpc2UgaXQgY2FuIGhhcHBlblxuICAgIC8vIHRoYXQgc29tZW9uZSBjbGlja3Mgb24gYSB0aW1lIGlucHV0IGFuZCB0aGUgY3Vyc29yIHJlc2V0cyB0byB0aGUgXCJob3Vyc1wiIGZpZWxkIHdoaWxlIHRoZVxuICAgIC8vIFwibWludXRlc1wiIGZpZWxkIHdhcyBhY3R1YWxseSBjbGlja2VkLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzEyODQ5XG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlYWRvbmx5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXF1aXJlZDogQm9vbGVhbklucHV0O1xuXG4gIC8vIEFjY2VwdCBgYW55YCB0byBhdm9pZCBjb25mbGljdHMgd2l0aCBvdGhlciBkaXJlY3RpdmVzIG9uIGA8aW5wdXQ+YCB0aGF0IG1heVxuICAvLyBhY2NlcHQgZGlmZmVyZW50IHR5cGVzLlxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmFsdWU6IGFueTtcbn1cbiJdfQ==