export interface FacetCounts {
    facet_queries: FacetQueries;
    facet_fields: FacetFields;
    facet_dates: FacetDates;
    facet_ranges: FacetRanges;
}

export interface FacetQueries {
    nothing: any;
}

export interface FacetFields {
    type: any[];
}

export interface FacetDates {
    nothing: any;
}

export interface FacetRanges {
    nothing: any;
}
