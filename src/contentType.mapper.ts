export type FileExtension = 'image/png' | 'text/plain' | 'text/html' | 'video/webm' | 'application/zip';
class ContentTypeMapper{

  getFileExtenion(contentType: FileExtension): string {
    switch (contentType) {
      case 'image/png':
        return '.png';
      case 'text/plain':
        return '.txt';
      case 'text/html':
        return '.html';
      case 'video/webm':
        return '.webm';
      case 'application/zip':
        return '.zip';
      default:
        console.warn(`could not map filetype of: ${contentType} to a correct ending`);
        return '';
    }
  }
}

export default new ContentTypeMapper();
