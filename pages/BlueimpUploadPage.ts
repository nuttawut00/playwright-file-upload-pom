import { Locator, Page, expect } from "@playwright/test";

export class BlueimpUploadPage {
  readonly page: Page;
  readonly fileInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileInput = page.locator('input[type="file"]');
  }

  async goto() {
    await this.page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  }

  async uploadFiles(filePaths: string | string[]) {
    await this.fileInput.setInputFiles(filePaths);
  }

  async verifyFilesUploaded(fileNames: string[]) {
    for (const fileName of fileNames) {
      await expect(
        this.page.locator("p.name", { hasText: fileName })
      ).toBeVisible();
    }
  }
}
