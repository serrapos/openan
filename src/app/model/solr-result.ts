import { ResponseHeader } from './response-header';
import { Response } from './response';
import { FacetCounts } from './facet-counts';
export interface SolrResult {
    responseHeader: ResponseHeader;
    response: Response;
    facet_counts: FacetCounts;
}




