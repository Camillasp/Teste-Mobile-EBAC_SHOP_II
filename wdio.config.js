const { join } = require('path')

const allure = require('allure-commandline')

exports.config = {
    //hostname: 'localhost',
    port: 4723,
    //path: '/',
    user: "camillapacheco_2MYWcN",
    key:"wJiAtKco5iQQFh2hbqHE",
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        //"platformName": "Android",
        //"platformVersion": "14",
        //"deviceName": "EbacQe",
        //"automationName": "uiautomator2",
        //"app": join(process.cwd(), './app/android/loja-ebac.apk'),
        //"appPackage": "com.wdiodemoapp",
        //"appWaitActivity": 'com.woocommerce.android/ui.login.LoginActivity'

        'app': 'bs://sample.app',
        'platformName': 'android',
        'deviceName': 'Samsung Galaxy S22 Ultra',
        'platformVersion': '12.0',
        'browserstackLocal': 'true',
        'buildName': '1',
        'projectName': 'Meu primeiro projeto em Device Farm'
    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
        [['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            }
        ]],
    ],

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
            await driver.takeScreenshot();
        }
    }
}

