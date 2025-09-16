	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
			embeddedservice_bootstrap.settings.chatButtonPosition = "150px,150px";
   			embeddedservice_bootstrap.init(
				'00DU8000004mTYT',
				'RSA_Chat_MIAW',
				'https://softerware--full.sandbox.my.site.com/ESWRSAChat1755285610398',
				{
					scrt2URL: 'https://softerware--full.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};

window.addEventListener("onEmbeddedMessagingReady", e => {
  embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({"Event_Name" : "Golf Auction 2025", "In_product_URL" : document.URL, "UserAgent" : "Chrome"});
  embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
    // List the pre-chat field names with the value and whether
    // it's editable in the pre-chat form.
    "_firstName": {
      "value": "Roger",
      "isEditableByEndUser": true
    },
    "_lastName": {
      "value": "Sandstone",
      "isEditableByEndUser": true
    },
    "_email": {
      "value": "roggie@email.com",
      "isEditableByEndUser": true
    },  
	  "Client_Id": {
      "value": "E9999",
      "isEditableByEndUser": false
    },  
  });
});


function launchChat() {
	embeddedservice_bootstrap.utilAPI.launchChat();
};

function hideChat(){
	embeddedservice_bootstrap.utilAPI.hideChatButton();
};

function showChat(){
	embeddedservice_bootstrap.utilAPI.showChatButton();
};
