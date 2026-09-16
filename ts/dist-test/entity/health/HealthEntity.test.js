"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('HealthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KORPO_PRO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KORPO_PRO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KorpoProSDK.test();
        const ent = testsdk.Health();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KORPO_PRO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'health.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "name", "req": false, "short": "Service name", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "status", "req": false, "short": "Service status", "type": "`$STRING`", "index$": 1 }], "name": "health", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /health", "json": "{\"operationId\":\"getHealthStatus\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"services\":{\"description\":\"List of services and their status\",\"items\":{\"properties\":{\"name\":{\"description\":\"Service name\",\"example\":\"document-processor\",\"type\":\"string\"},\"status\":{\"description\":\"Service status\",\"example\":\"operational\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"description\":\"Overall API status\",\"example\":\"healthy\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the health check\",\"example\":\"2024-01-15T10:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with API health status and service list\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Status message\",\"example\":\"One or more services are unavailable\",\"type\":\"string\"},\"status\":{\"description\":\"API status\",\"example\":\"unavailable\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Service unavailable\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/health", "segments": [{ "lit": "health" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.services`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "health", "name__orig": "health", "Name": "Health", "name_": "health", "name-": "health", "NAME": "HEALTH", "index$": 0 }, { "active": true, "entity": "health", "key$": "BasicHealthFlow", "kind": "basic", "name": "BasicHealthFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "health_ref01" } }], "index$": 0 }] }, 'Health');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let health_ref01_data = Object.values(setup.data.existing.health)[0];
        // LIST
        const health_ref01_ent = client.Health();
        const health_ref01_match = {};
        const health_ref01_list = (await health_ref01_ent.list(health_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/health/HealthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KorpoProSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['health01', 'health02', 'health03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KORPO_PRO_TEST_HEALTH_ENTID': idmap,
        'KORPO_PRO_TEST_LIVE': 'FALSE',
        'KORPO_PRO_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['KORPO_PRO_TEST_HEALTH_ENTID'];
    const live = 'TRUE' === env.KORPO_PRO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KORPO_PRO_TEST_HEALTH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.KorpoProSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=HealthEntity.test.js.map