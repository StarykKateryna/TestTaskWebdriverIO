require('dotenv').config()
const { config } = require('./wdio.shared.conf');

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// Specs
// ============
config.specs = [
  './test/specs/ios/e2e*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "14 ",
    "appium:deviceName": "iPhone 12",
    "appium:automationName": "XCUITest",
    "appium:app": "bs://923abd7808bac18d421ee3f5bf1f726a49c93282",
    "appium:autoGrantPermissions": true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;