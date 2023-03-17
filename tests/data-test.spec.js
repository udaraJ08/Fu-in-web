import { test } from '@playwright/test'

//********************************//
//****TABLE EXISTING TESTINGS****//
//******************************//
test.describe("DATA TESTINGS", () => {

  //*********************************//
  //****VEHICLE DATA TABLE TESTINGS*****//
  //*******************************//
  test('Test vehicle types table existence', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/login')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.goto('http://localhost:3000/vehicle-type')
    await page.locator('.react-dataTable').click()
  })

    //*********************************//
    //****CUSTOMER DATA TABLE TESTINGS*****//
    //*******************************//
  test('Test customers data existence', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/login')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.goto('http://localhost:3000/customers')
    await page.locator('.react-dataTable').click()
  })

    //*********************************//
    //****STATION DATA TABLE TESTINGS*****//
    //*******************************//
  test('Test stations data existence', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/login')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.goto('http://localhost:3000/stations')
    await page.locator('.react-dataTable').click()
  })

    //*********************************//
    //****REQUEST DATA TABLE TESTINGS*****//
    //*******************************//
  test('Test stations requests data existence', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/login')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.goto('http://localhost:3000/requests')
    await page.locator('.react-dataTable').click()
  })

    //*********************************//
    //****REQUEST DATA TABLE TESTINGS*****//
    //*******************************//
  test('Test stations deliveries data existence', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/login')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.goto('http://localhost:3000/delivery')
    await page.locator('.react-dataTable').click()
  })

  //*************************************//
    //****EMPLOYEE DATA TABLE TESTINGS*****//
  //*************************************//
  test('Test employee data existence', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/login')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.goto('http://localhost:3000/employee')
    await page.locator('.react-dataTable').click()
  })

    //*************************************//
    //****VEHICLE DATA TABLE TESTINGS*****//
  //*************************************//
  test('Test vehicle data existence', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/login')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.goto('http://localhost:3000/vehicle')
    await page.locator('.react-dataTable').click()
  })
})

