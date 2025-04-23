"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var my_str_1 = require("../../models/my-str");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var star_component_1 = require("../star/star.component");
var HomeComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrl: './home.component.scss',
            standalone: true,
            imports: [forms_1.FormsModule, common_1.CommonModule, star_component_1.StarComponent],
            providers: [],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var HomeComponent = _classThis = /** @class */ (function () {
        function HomeComponent_1() {
            this.title = 'Home';
            this.viewModel = new my_str_1.default('Mahbod', 'Jahanbin');
            this.users = ['ali', 'hamid', 'reza', 'maya', 'Rasul'];
            this.MyUser = [
                new my_str_1.default('Mahbod', 'Jahanbin'),
                new my_str_1.default('ali', 'Jahanbin'),
                new my_str_1.default('maya', 'Jahanbin'),
                new my_str_1.default('reza', 'Jahanbin'),
                new my_str_1.default('masoud', 'Jahanbin')
            ];
            this.usrs = [
                {
                    name: 'mahbod',
                    familyName: 'jahanbin',
                    age: 40
                },
                {
                    name: 'maya',
                    familyName: 'jahanbin',
                    age: 7
                },
                {
                    name: 'moloud',
                    familyName: 'kashkouli',
                    age: 7
                }
            ];
            this.ratings = [3.5, 2.5, 1.5, 4.5, 2];
            // public handleChangeFamily(change: Event) {
            //   const myInput = change.target as HTMLInputElement;
            //   this.FullName_home.Family = myInput.value;
            // }
        }
        HomeComponent_1.prototype.handleChangeName = function (change) {
            var myInput = change.target;
            this.viewModel.Name = myInput.value;
        };
        HomeComponent_1.prototype.OnselectChange = function (user) {
            console.log("the selected user is ".concat(user.name));
        };
        HomeComponent_1.prototype.onStarClicked = function (rating) {
            console.log("the rating is ".concat(rating));
        };
        return HomeComponent_1;
    }());
    __setFunctionName(_classThis, "HomeComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HomeComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HomeComponent = _classThis;
}();
exports.HomeComponent = HomeComponent;
