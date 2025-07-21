# 🎉 Playwright File Upload (POM Example)

## 📂 โครงสร้างโปรเจกต์

```
playwright-file-upload-pom
├── pages/
│   └── BlueimpUploadPage.ts
├── test-data/
│   ├── 12001.jpg
│   └── 12002.jpeg
├── tests/
│   └── upload.spec.ts
└── README.md
```

---

## 🚀 วิธีใช้งาน

### 1. ติดตั้ง dependencies

```bash
npm install
npx playwright install
```

### 2. รันเทสต์

```bash
npx playwright test
```

หรือต้องการรันเฉพาะไฟล์เทสต์

```bash
npx playwright test tests/upload.spec.ts
```

---

## 📝 อธิบายโครงสร้าง Page Object

📄 **BlueimpUploadPage.ts** คือคลาสที่รวมทุก interaction กับหน้าอัปโหลดไฟล์

| เมธอด                      | อธิบาย                      |
| -------------------------- | --------------------------- |
| 🌐 `goto()`                | เปิดเว็บไซต์ Blueimp Upload |
| 📤 `uploadFiles()`         | เลือกไฟล์อัปโหลดผ่าน input  |
| 🔍 `verifyFilesUploaded()` | ตรวจสอบชื่อไฟล์หลังอัปโหลด  |

ตัวอย่างการเรียกใช้:

```typescript
const uploadPage = new BlueimpUploadPage(page);
await uploadPage.goto();
await uploadPage.uploadFiles(filePath);
await uploadPage.verifyFilesUploaded([fileName]);
```

---

## 🧪 ตัวอย่างเทสต์

ใน `tests/upload.spec.ts` มีตัวอย่าง 2 เคส:

- ✅ Upload ไฟล์เดียว
- ✅ Upload หลายไฟล์

---

## 💡 จุดเด่น

- แยกโครงสร้าง POM ชัดเจน
- โค้ดอ่านง่าย ขยายผลได้ง่าย
- ใช้ Playwright รันได้ทั้ง UI และ Headless Mode

---

## 📎 แหล่งอ้างอิง

- [Playwright Docs](https://playwright.dev/docs/intro)
- [Blueimp File Upload Demo](https://blueimp.github.io/jQuery-File-Upload/)