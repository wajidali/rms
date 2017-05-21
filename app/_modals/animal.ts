/**
 * Created by Wajid on 5/21/2017.
 */
import { Species } from './species';
export interface Animal {
    Id: number;
    Name: string;
    SpeciesFK: number;
    Species: Species;
    YearOfBirth: number;
    Age: number;
}