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

test("Upload two files", async ({ page }) => {
  const uploadPage = new BlueimpUploadPage(page);
  await uploadPage.goto();

  const filePaths = [
    path.resolve(__dirname, "../test-data/12001.jpg"),
    path.resolve(__dirname, "../test-data/12002.jpeg"),
  ];

  const fileNames = filePaths.map((filePath) => path.basename(filePath));

  await uploadPage.uploadFiles(filePaths);
  await uploadPage.verifyFilesUploaded(fileNames);
});
