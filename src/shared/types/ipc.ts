export interface Document {
    id: string;
    title: string;
    content: string;
}

// REQUESTS


// RESPONSES
export interface FetchAllDocumentsResponse {
    data: Document[];
}