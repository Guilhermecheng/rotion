export interface Document {
    id: string;
    title: string;
    content?: string;
}

// REQUESTS
export type SaveDocumentRequest = Document;

export interface FetchDocumentRequest {
    id: string;
}

export interface DeleteDocumentRequest {
    id: string;
}

// RESPONSES
export interface FetchAllDocumentsResponse {
    data: Document[];
}

export interface FetchDocumentResponse {
    data: Document;
}

export interface CreateDocumentResponse {
    data: Document;
}