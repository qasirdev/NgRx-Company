import { Company } from 'src/app/models/company';

export interface Appstate {
    companies : {companies : Company[]},
    notes : string[]
}
