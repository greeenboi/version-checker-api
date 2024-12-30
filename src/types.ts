export interface VersionResponse {
    version: string;
    published_at: string;
    html_url: string;
  }
  
  export interface ErrorResponse {
    error: string;
    message: string;
  }