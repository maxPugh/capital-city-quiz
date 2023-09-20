import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:5173/quiz");
});

test("The Quiz page should have a title of Quiz", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Quiz" })).toBeVisible();
});
test("The Quiz page should have a New Question button, an Exit button, and 3 answer buttons", async ({
  page,
}) => {
  await expect(page.getByRole("button")).toHaveCount(5);
  await expect(
    page.getByRole("button", { name: "New Question" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Exit" })).toBeVisible();
});
test("The New Question button should be disabled until a user has selected an answer", async ({
  page,
}) => {
  await expect(
    page.getByRole("button", { name: "New Question" })
  ).toBeDisabled();
});
test("Clicking the Exit button should take the user back to the home page", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Exit" }).click();
  await expect(page).toHaveURL("http://localhost:5173/");
});
