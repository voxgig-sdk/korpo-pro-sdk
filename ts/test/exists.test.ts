
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KorpoProSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await KorpoProSDK.test()
    equal(null !== testsdk, true)
  })

})
