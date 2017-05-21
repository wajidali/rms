/**
 * Created by Wajid on 5/21/2017.
 */
import { Species } from './species';
export class Animal {
    public Id: number;
    public Name: string;
    public SpeciesFK: number;
    public Species: Species;
    public YearOfBirth: number;
    public Age: number;
}