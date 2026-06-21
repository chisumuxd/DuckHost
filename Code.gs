function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('หัวบ้าน Duck Duck Premium')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
