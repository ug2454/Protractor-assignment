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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/Test1.feature'],
    cucumberOpts: {
        // require: 'Features/Step_Definitions/StepDef.js',
        format: 'json:./cucumberreports.json',
        // format: ['progress', 'pretty:output.txt'],
        //format:'pretty:./cucumberreports2.txt',
        onComplete: () => {
            //var reporter = require('cucumber-html-reporter');
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome 85.0.4183.83",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: [
            'Features/Step_Definitions/StepDef.js'
        ]
    },
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: "Project Report",
                pageFooter: "<div><p>Protractor with cucumber</p></div>",
                customData: {
                    title: 'Protractor Cucucmber Report',
                    data: [
                        { label: 'Project', value: 'Protractor with Cucumber test' },
                        { label: 'Created By', value: 'Abhishek Thakur' }
                    ]
                }
            },
        }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpRUFBa0Q7QUFFdkMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUVwQyxZQUFZLEVBQUU7UUFDVixtREFBbUQ7UUFDbkQsTUFBTSxFQUFFLDZCQUE2QjtRQUNyQyw2Q0FBNkM7UUFDN0MseUNBQXlDO1FBRXpDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDYixtREFBbUQ7WUFFbkQsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLE1BQU0sRUFBRSx3QkFBd0I7Z0JBQ2hDLHNCQUFzQixFQUFFLElBQUk7Z0JBQzVCLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUU7b0JBQ04sYUFBYSxFQUFFLE9BQU87b0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7b0JBQzdCLFNBQVMsRUFBRSxxQkFBcUI7b0JBQ2hDLFVBQVUsRUFBRSxZQUFZO29CQUN4QixVQUFVLEVBQUUsV0FBVztvQkFDdkIsVUFBVSxFQUFFLFFBQVE7aUJBQ3ZCO2FBQ0osQ0FBQztZQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0IsQ0FBQztRQUNELE9BQU8sRUFBRTtZQUNMLHNDQUFzQztTQUN6QztLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxtREFBbUQsQ0FBQztZQUM3RSxPQUFPLEVBQUU7Z0JBQ0wsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsVUFBVSxFQUFFLDRDQUE0QztnQkFDeEQsVUFBVSxFQUFFO29CQUNSLEtBQUssRUFBRSw2QkFBNkI7b0JBQ3BDLElBQUksRUFBRTt3QkFDRixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLCtCQUErQixFQUFFO3dCQUM1RCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO3FCQUNwRDtpQkFDSjthQUNKO1NBRUosQ0FBQztDQUNMLENBQUEifQ==