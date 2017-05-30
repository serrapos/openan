import { Doc } from './doc';
export interface Response {
    numFound: number;
    start: number;
    maxScore: number;
    docs: Doc[];
}
