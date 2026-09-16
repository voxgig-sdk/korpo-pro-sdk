

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { KorpoProSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('HealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KORPO_PRO_TEST_LIVE=TRUE.
  afterEach(liveDelay('KORPO_PRO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KorpoProSDK.test()
    const ent = testsdk.Health()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KORPO_PRO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'health.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"name","req":false,"short":"Service name","type":"`$STRING`","index$":0},{"active":true,"name":"status","req":false,"short":"Service status","type":"`$STRING`","index$":1}],"name":"health","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /health","json":"{\"operationId\":\"getHealthStatus\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"services\":{\"description\":\"List of services and their status\",\"items\":{\"properties\":{\"name\":{\"description\":\"Service name\",\"example\":\"document-processor\",\"type\":\"string\"},\"status\":{\"description\":\"Service status\",\"example\":\"operational\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"description\":\"Overall API status\",\"example\":\"healthy\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the health check\",\"example\":\"2024-01-15T10:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with API health status and service list\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Status message\",\"example\":\"One or more services are unavailable\",\"type\":\"string\"},\"status\":{\"description\":\"API status\",\"example\":\"unavailable\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Service unavailable\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/health","segments":[{"lit":"health"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.services`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"health","name__orig":"health","Name":"Health","name_":"health","name-":"health","NAME":"HEALTH","index$":0}, {"active":true,"entity":"health","key$":"BasicHealthFlow","kind":"basic","name":"BasicHealthFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"health_ref01"}}],"index$":0}]}, 'Health')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let health_ref01_data = Object.values(setup.data.existing.health)[0] as any

    // LIST
    const health_ref01_ent = client.Health()
    const health_ref01_match: any = {}

    const health_ref01_list = (await health_ref01_ent.list(health_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/health/HealthTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = KorpoProSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['health01','health02','health03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KORPO_PRO_TEST_HEALTH_ENTID': idmap,
    'KORPO_PRO_TEST_LIVE': 'FALSE',
    'KORPO_PRO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['KORPO_PRO_TEST_HEALTH_ENTID']

  const live = 'TRUE' === env.KORPO_PRO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KORPO_PRO_TEST_HEALTH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new KorpoProSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.KORPO_PRO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
