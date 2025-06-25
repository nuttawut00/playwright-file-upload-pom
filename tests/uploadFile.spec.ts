import { test } from "@playwright/test";
import { BlueimpUploadPage } from "../pages/BlueimpUploadPage";
import path from "path";

test("Upload one file", async ({ page }) => {
  const uploadPage = new BlueimpUploadPage(page);
  await uploadPage.goto();

  const filePath = path.resolve(__dirname, "../test-data/12001.jpg");
  const fileName = path.basename(filePath);

  await uploadPage.uploadFiles(filePath);
  await uploadPage.verifyFilesUploaded([fileName]);
});
