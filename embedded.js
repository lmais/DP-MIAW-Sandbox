	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
		embedded_svc.settings.language = 'en-US'; //For example, enter 'en' or 'en-US'

		embedded_svc.settings.defaultMinimizedText = 'Live Chat Support'; //(Defaults to Chat with an Expert)

		embedded_svc.settings.prepopulatedPrechatFields = {  //sample variables in php below
                FirstName: 'Roger',
                LastName: 'Sandstone',
                Email: 'roger@testing.com',
                Client_ID__c: 'E12345678',
            };
			
		embedded_svc.settings.extraPrechatInfo = [
                {
                    "entityFieldMaps": [
                        {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"LastName",
                            "isExactMatch":true,
                            "label":"Last Name"
                        }, {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"FirstName",
                            "isExactMatch":true,
                            "label":"First Name"
                        }, {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"Email",
                            "isExactMatch":true,
                            "label":"Email"
                        }, {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"Client_ID__c",
                            "isExactMatch":true,
                            "label":"Client ID"
                        }
                    ],
                    "entityName":"Contact",
                    "saveToTranscript": "ContactId"
                },
                {
                    "entityName":"Case",
                    "showOnCreate": true,
                    "saveToTranscript": "CaseId",
                    "entityFieldMaps": [{
                        "doCreate": true,
                        "doFind": false,
                        "fieldName": "Origin",
                        "isExactMatch": false,
                        "label": "Origin"
                    }]
                }
            ];

            embedded_svc.settings.extraPrechatFormDetails = [{
                "label": "First Name",
                "displayToAgent": true,
                "transcriptFields": ["Chat_First_Name__c"]
            }, {
                "label": "Last Name",
                "displayToAgent": true,
                "transcriptFields": ["Chat_Last_Name__c"]
            }, {
                "label": "Email",
                "displayToAgent": true,
                "transcriptFields": ["Chat_Email__c"]
            }, {
                "label": "Client ID",
                "displayToAgent": true,
                "transcriptFields": ["Chat_Client_ID__c"]
            }, {
                "label": "Origin",
                "value": "GCEXP Chat",
                "displayToAgent": true
            }];

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://softerware--full.sandbox.my.salesforce.com',
			'https://softerware--full.sandbox.my.site.com/dpcommunity',
			gslbBaseURL,
			'00D6t000001Qvai',
			'RSA_Chat',
			{
				baseLiveAgentContentURL: 'https://c.la4-c1cs-ia4.salesforceliveagent.com/content',
				deploymentId: '57231000000FCh8',
				buttonId: '573i00000006vA9',
				baseLiveAgentURL: 'https://d.la4-c1cs-ia4.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I6e0000010wL5EAI_1884edc031a',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://softerware--full.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}
