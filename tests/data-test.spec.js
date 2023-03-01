import { test } from '@playwright/test'

test('Test vehicle types table existence', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
  await page.goto('http://localhost:3000/vehicle-type')
  await page.getByText('VEHICLE TYPEQUOTA (liters)car/van20bike4three wheel101').click()
})

test('Test customers data existence', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
  await page.goto('http://localhost:3000/customers')
  await page.locator('.react-dataTable').click()
})

test('Test stations data existence', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
  await page.goto('http://localhost:3000/stations')
  await page.locator('.react-dataTable').click()
})

test('Test stations requests data existence', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
  await page.goto('http://localhost:3000/requests')
  await page.locator('.react-dataTable').click()
})

test('Test stations deliveries data existence', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
  await page.goto('http://localhost:3000/delivery')
  await page.locator('.react-dataTable').click()
})

test('Test employee data existence', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
  await page.goto('http://localhost:3000/employee')
  await page.locator('.react-dataTable').click()
})

test('Test vehicle data existence', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
  await page.goto('http://localhost:3000/vehicle')
  await page.locator('.react-dataTable').click()
})

