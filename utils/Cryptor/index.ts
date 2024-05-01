import * as crypto from "crypto";

// 加密函数
export function encrypt(text: string, key: Buffer): Buffer {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, Buffer.alloc(16));
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return Buffer.from(encrypted, "hex");
}

// 解密函数
export function decrypt(encryptedData: Buffer, key: Buffer): string {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    key,
    Buffer.alloc(16)
  );
  let decrypted = decipher.update(encryptedData);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString("utf-8");
}
