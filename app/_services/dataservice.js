"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var occupation_1 = require("../_modals/occupation");
var speciality_1 = require("../_modals/speciality");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getOccupations = function () {
        return [
            new occupation_1.Occupation(1, 'Managers'),
            new occupation_1.Occupation(2, 'Professionals'),
            new occupation_1.Occupation(3, 'Technicians and Associate Professionals'),
            new occupation_1.Occupation(4, 'Clerical Support Workers'),
            new occupation_1.Occupation(5, 'Services and Sales Workers'),
            new occupation_1.Occupation(6, 'Skilled Agricultural, Forestry and Fishery Workers'),
            new occupation_1.Occupation(7, 'Craft and Related Trades Workers'),
            new occupation_1.Occupation(8, 'Plant and Machine Operators and Assemblers'),
            new occupation_1.Occupation(9, 'Elementary Occupations'),
            new occupation_1.Occupation(10, 'Armed Forces Occupations')
        ];
    };
    DataService.prototype.getSpecialities = function () {
        return [
            new speciality_1.Speciality(1, 1, 'Chief executive'),
            new speciality_1.Speciality(2, 1, 'Finance manager'),
            new speciality_1.Speciality(3, 1, 'Human resource manager'),
            new speciality_1.Speciality(4, 2, 'Engineer'),
            new speciality_1.Speciality(5, 2, 'Health professional'),
            new speciality_1.Speciality(6, 2, 'Teaching professional'),
            new speciality_1.Speciality(7, 3, 'IT support'),
            new speciality_1.Speciality(8, 3, 'Analyst'),
            new speciality_1.Speciality(9, 3, 'Photographer'),
            new speciality_1.Speciality(10, 4, 'Secretary'),
            new speciality_1.Speciality(11, 4, 'Customer services clerk'),
            new speciality_1.Speciality(12, 4, 'Storekeeper'),
            new speciality_1.Speciality(13, 5, 'Barber'),
            new speciality_1.Speciality(14, 5, 'Hairdresser'),
            new speciality_1.Speciality(15, 5, 'Fireman'),
            new speciality_1.Speciality(31, 5, 'Babysitter'),
            new speciality_1.Speciality(16, 6, 'Farmer'),
            new speciality_1.Speciality(17, 6, 'Gardener'),
            new speciality_1.Speciality(18, 6, 'Fisherman'),
            new speciality_1.Speciality(19, 7, 'Painter'),
            new speciality_1.Speciality(20, 7, 'Carpenter'),
            new speciality_1.Speciality(21, 7, 'Electrician'),
            new speciality_1.Speciality(32, 7, 'Shoemaker'),
            new speciality_1.Speciality(22, 8, 'Car driver'),
            new speciality_1.Speciality(23, 8, 'Machine operator'),
            new speciality_1.Speciality(24, 8, 'Assembler'),
            new speciality_1.Speciality(33, 8, 'Miner'),
            new speciality_1.Speciality(25, 9, 'Housemaid'),
            new speciality_1.Speciality(26, 9, 'Cleaner'),
            new speciality_1.Speciality(27, 9, 'Cook'),
            new speciality_1.Speciality(28, 10, 'Soldier'),
            new speciality_1.Speciality(29, 10, 'Captain')
        ];
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=dataservice.js.map