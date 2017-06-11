import { Injectable } from '@angular/core';
import { Occupation } from '../_modals/occupation';
import { Speciality } from '../_modals/speciality';


@Injectable()
export class DataService {
    getOccupations() {
        return [
            new Occupation(1, 'Managers' ),
            new Occupation(2, 'Professionals' ),
            new Occupation(3, 'Technicians and Associate Professionals' ),
            new Occupation(4, 'Clerical Support Workers' ),
            new Occupation(5, 'Services and Sales Workers' ),
            new Occupation(6, 'Skilled Agricultural, Forestry and Fishery Workers' ),
            new Occupation(7, 'Craft and Related Trades Workers' ),
            new Occupation(8, 'Plant and Machine Operators and Assemblers' ),
            new Occupation(9, 'Elementary Occupations' ),
            new Occupation(10, 'Armed Forces Occupations' )
        ];
    }

    getSpecialities() {
        return [
            new Speciality(1, 1, 'Chief executive' ),
            new Speciality(2, 1, 'Finance manager' ),
            new Speciality(3, 1, 'Human resource manager'),

            new Speciality(4, 2, 'Engineer'),
            new Speciality(5, 2, 'Health professional' ),
            new Speciality(6, 2, 'Teaching professional'),

            new Speciality(7, 3, 'IT support' ),
            new Speciality(8, 3, 'Analyst' ),
            new Speciality(9, 3, 'Photographer' ),

            new Speciality(10, 4, 'Secretary'),
            new Speciality(11, 4, 'Customer services clerk'),
            new Speciality(12, 4, 'Storekeeper'),

            new Speciality(13, 5, 'Barber'),
            new Speciality(14, 5, 'Hairdresser'),
            new Speciality(15, 5, 'Fireman'),
            new Speciality(31, 5, 'Babysitter'),

            new Speciality(16, 6, 'Farmer'),
            new Speciality(17, 6, 'Gardener'),
            new Speciality(18, 6, 'Fisherman'),

            new Speciality(19, 7, 'Painter'),
            new Speciality(20, 7, 'Carpenter'),
            new Speciality(21, 7, 'Electrician'),
            new Speciality(32, 7, 'Shoemaker'),

            new Speciality(22, 8, 'Car driver'),
            new Speciality(23, 8, 'Machine operator'),
            new Speciality(24, 8, 'Assembler'),
            new Speciality(33, 8, 'Miner'),

            new Speciality(25, 9, 'Housemaid'),
            new Speciality(26, 9, 'Cleaner'),
            new Speciality(27, 9, 'Cook'),

            new Speciality(28, 10, 'Soldier'),
            new Speciality(29, 10, 'Captain')

        ];
    }
}
