let conn;
let baseUrl;
let logData;
let sessionId;
let fetchtype;
let recordsArray;
$(document).ready(function () {
    let url = new URL(window.location.href);
    //console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    //console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    //console.log('$sessionId: ', sessionId);
    fetchtype = url.searchParams.get('fetchtype');
    //console.log('$fetchtype: ', fetchtype);
    callOnInitialized();
    /* recordsArray = [
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001C8nEAE"
        },
        "Id": "0jIdy0000001C8nEAE",
        "Name": "aoBtcExtractAssignedProductsPrimaryBusiness",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAssignedProductsPrimaryBusiness_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-22T02:01:08.000+0000",
        "CreatedDate": "2025-09-05T16:00:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DknEAE"
        },
        "Id": "0jIdy0000001DknEAE",
        "Name": "aoBtcExtractApplicationProduct",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractApplicationProduct_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-22T00:42:23.000+0000",
        "CreatedDate": "2025-09-24T14:49:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004s1pEAA"
        },
        "Id": "0jNdy0000004s1pEAA",
        "Name": "aoBtcCreateAccount",
        "Type": "AO",
        "SubType": "aoBtcCreateAccount",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_aoBtcCreateAccount_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-22T00:38:43.000+0000",
        "CreatedDate": "2025-09-24T13:50:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004z89EAA"
        },
        "Id": "0jNdy0000004z89EAA",
        "Name": "aoBtcCreateFunding",
        "Type": "AO",
        "SubType": "aoBtcCreateFunding",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_aoBtcCreateFunding_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-21T22:38:55.000+0000",
        "CreatedDate": "2025-10-13T18:10:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004vvlEAA"
        },
        "Id": "0jNdy0000004vvlEAA",
        "Name": "SendRequestToAlloy",
        "Type": "Send",
        "SubType": "RequestToAlloy",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Send_RequestToAlloy_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-10-21T21:31:05.000+0000",
        "CreatedDate": "2025-10-06T13:02:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000052SbEAI"
        },
        "Id": "0jNdy00000052SbEAI",
        "Name": "EBAO_AccountApplication",
        "Type": "EBAO",
        "SubType": "AccountApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "EBAO_AccountApplication_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-10-21T20:11:04.000+0000",
        "CreatedDate": "2025-10-21T20:11:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000052KXEAY"
        },
        "Id": "0jNdy00000052KXEAY",
        "Name": "EBAO_AccountApplicationApplicationComplete",
        "Type": "EBAO",
        "SubType": "AccountApplicationApplicationComplete",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "EBAO_AccountApplicationApplicationComplete_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-10-21T19:56:25.000+0000",
        "CreatedDate": "2025-10-21T18:32:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000050NZEAY"
        },
        "Id": "0jNdy00000050NZEAY",
        "Name": "EBAO_AccountApplication",
        "Type": "EBAO",
        "SubType": "AccountApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "EBAO_AccountApplication_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-10-21T19:44:21.000+0000",
        "CreatedDate": "2025-10-15T21:05:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000052HJEAY"
        },
        "Id": "0jNdy00000052HJEAY",
        "Name": "EBAO_AccountApplicationAccountFunding",
        "Type": "EBAO",
        "SubType": "AccountApplicationAccountFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "EBAO_AccountApplicationAccountFunding_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-10-21T18:02:01.000+0000",
        "CreatedDate": "2025-10-21T17:27:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000051t7EAA"
        },
        "Id": "0jNdy00000051t7EAA",
        "Name": "EBAO_AccountApplicationAdditionalOwnersandSigners",
        "Type": "EBAO",
        "SubType": "AccountApplicationAdditionalOwnersandSigners",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "EBAO_AccountApplicationAdditionalOwnersandSigners_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-10-21T17:32:19.000+0000",
        "CreatedDate": "2025-10-20T20:08:40.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000050CHEAY"
        },
        "Id": "0jNdy00000050CHEAY",
        "Name": "EBAO_AccountApplicationAdditionalOwnersandSigners",
        "Type": "EBAO",
        "SubType": "AccountApplicationAdditionalOwnersandSigners",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "EBAO_AccountApplicationAdditionalOwnersandSigners_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-10-21T17:32:19.000+0000",
        "CreatedDate": "2025-10-15T19:27:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004zePEAQ"
        },
        "Id": "0jNdy0000004zePEAQ",
        "Name": "EBAO_AccountApplicationAccountFunding",
        "Type": "EBAO",
        "SubType": "AccountApplicationAccountFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "EBAO_AccountApplicationAccountFunding_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-10-21T17:27:56.000+0000",
        "CreatedDate": "2025-10-15T06:52:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001C2LEAU"
        },
        "Id": "0jIdy0000001C2LEAU",
        "Name": "aoBtcExtractFundTransaction",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractFundTransaction_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-21T17:15:41.000+0000",
        "CreatedDate": "2025-09-04T23:18:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004R85EAE"
        },
        "Id": "0jNdy0000004R85EAE",
        "Name": "StatusCenter",
        "Type": "BAO",
        "SubType": "StatusCenter",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_StatusCenter_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-20T20:46:24.000+0000",
        "CreatedDate": "2025-08-08T05:16:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000051LFEAY"
        },
        "Id": "0jNdy00000051LFEAY",
        "Name": "StatusCenter",
        "Type": "BAO",
        "SubType": "StatusCenter",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_StatusCenter_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-20T20:46:23.000+0000",
        "CreatedDate": "2025-10-17T05:18:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004yTpEAI"
        },
        "Id": "0jNdy0000004yTpEAI",
        "Name": "bao_BusinessPortalLanding",
        "Type": "Portal",
        "SubType": "Landing",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Portal_Landing_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-20T20:46:09.000+0000",
        "CreatedDate": "2025-10-10T10:20:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000050qbEAA"
        },
        "Id": "0jNdy00000050qbEAA",
        "Name": "bao_BusinessPortalLanding",
        "Type": "Portal",
        "SubType": "Landing",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Portal_Landing_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-20T20:46:08.000+0000",
        "CreatedDate": "2025-10-16T14:15:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EAbEAM"
        },
        "Id": "0jIdy0000001EAbEAM",
        "Name": "aoBtcExtractAppFormProductsACH",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAppFormProductsACH_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-20T20:04:13.000+0000",
        "CreatedDate": "2025-09-26T19:28:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DRREA2"
        },
        "Id": "0jIdy0000001DRREA2",
        "Name": "GetIsSandboxConfig",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "GetIsSandboxConfig_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-20T19:27:44.000+0000",
        "CreatedDate": "2025-09-19T14:18:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DT3EAM"
        },
        "Id": "0jIdy0000001DT3EAM",
        "Name": "GetAPIConfigurationByName",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "GetAPIConfigurationByName_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-20T19:25:43.000+0000",
        "CreatedDate": "2025-09-19T14:25:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004oUTEAY"
        },
        "Id": "0jNdy0000004oUTEAY",
        "Name": "aoBtcAccountAuthorize",
        "Type": "AO",
        "SubType": "aoBtcAccountAuthorize",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_aoBtcAccountAuthorize_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-20T16:16:43.000+0000",
        "CreatedDate": "2025-09-11T19:08:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tKTEAY"
        },
        "Id": "0jNdy0000004tKTEAY",
        "Name": "aoBtcCreateFinancialAccountRoles",
        "Type": "AO",
        "SubType": "aoBtcCreateFinancialAccountRoles",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_aoBtcCreateFinancialAccountRoles_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-20T13:45:24.000+0000",
        "CreatedDate": "2025-09-30T15:11:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tQvEAI"
        },
        "Id": "0jNdy0000004tQvEAI",
        "Name": "aoBtcUpdatePersonAddMembership",
        "Type": "AO",
        "SubType": "aoBtcUpdatePersonAddMembership",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_aoBtcUpdatePersonAddMembership_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-20T13:45:18.000+0000",
        "CreatedDate": "2025-09-30T20:23:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004uTREAY"
        },
        "Id": "0jNdy0000004uTREAY",
        "Name": "aoBtcCreateBusinessWithMembership",
        "Type": "AO",
        "SubType": "aoBtcCreateBusinessWithMembership",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_aoBtcCreateBusinessWithMembership_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-20T13:45:05.000+0000",
        "CreatedDate": "2025-10-03T19:28:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EgrEAE"
        },
        "Id": "0jIdy0000001EgrEAE",
        "Name": "aoBtcUpsertFinancialAccountRoles",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertFinancialAccountRoles_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-17T23:14:06.000+0000",
        "CreatedDate": "2025-10-01T17:52:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EddEAE"
        },
        "Id": "0jIdy0000001EddEAE",
        "Name": "aoBtcTransformAccountRolesForDML",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformAccountRolesForDML_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T21:08:25.000+0000",
        "CreatedDate": "2025-10-01T17:39:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001E8zEAE"
        },
        "Id": "0jIdy0000001E8zEAE",
        "Name": "aoBtcExtractFundTransactionACH",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractFundTransactionACH_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T20:59:21.000+0000",
        "CreatedDate": "2025-09-26T18:37:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001ESLEA2"
        },
        "Id": "0jIdy0000001ESLEA2",
        "Name": "aoBtcExtractAccountRoles",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAccountRoles_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T20:57:09.000+0000",
        "CreatedDate": "2025-09-30T19:34:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001Jv3EAE"
        },
        "Id": "0jIdy0000001Jv3EAE",
        "Name": "aoBtcExtractAccountRolesTest",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAccountRolesTest_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T20:37:59.000+0000",
        "CreatedDate": "2025-10-17T20:16:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DBJEA2"
        },
        "Id": "0jIdy0000001DBJEA2",
        "Name": "aoBtcGetBusinessWithMembership",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcGetBusinessWithMembership_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T18:53:22.000+0000",
        "CreatedDate": "2025-09-17T19:03:21.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy000000516jEAA"
        },
        "Id": "0jNdy000000516jEAA",
        "Name": "testMergeList",
        "Type": "AO",
        "SubType": "testMergeList",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_testMergeList_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-17T16:30:18.000+0000",
        "CreatedDate": "2025-10-16T14:47:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001JOnEAM"
        },
        "Id": "0jIdy0000001JOnEAM",
        "Name": "aoBtcGetIndividualMbrshpPrds",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcGetIndividualMbrshpPrds_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T16:27:49.000+0000",
        "CreatedDate": "2025-10-16T13:36:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001JYTEA2"
        },
        "Id": "0jIdy0000001JYTEA2",
        "Name": "oaBtcTransformIndividualDna",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "oaBtcTransformIndividualDna_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T16:24:47.000+0000",
        "CreatedDate": "2025-10-16T19:24:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001F6fEAE"
        },
        "Id": "0jIdy0000001F6fEAE",
        "Name": "aoBtcUpsertPersonNumbersById",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertPersonNumbersById_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-17T15:31:08.000+0000",
        "CreatedDate": "2025-10-03T00:43:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000zLFEAY"
        },
        "Id": "0jIdy0000000zLFEAY",
        "Name": "DRGetApplicationFormDetailsStatusCenter",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetApplicationFormDetailsStatusCenter_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T14:48:49.000+0000",
        "CreatedDate": "2025-07-15T10:40:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wNBEAY"
        },
        "Id": "0jNdy0000004wNBEAY",
        "Name": "EBAO_AccountApplicationAboutYou",
        "Type": "EBAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "EBAO_AccountApplicationAboutYou_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-17T14:34:21.000+0000",
        "CreatedDate": "2025-10-06T16:29:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000051Y9EAI"
        },
        "Id": "0jNdy00000051Y9EAI",
        "Name": "EBAO_GetExistingApplicationData",
        "Type": "EBAO",
        "SubType": "GetExistingApplicationData",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "EBAO_GetExistingApplicationData_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-17T14:06:03.000+0000",
        "CreatedDate": "2025-10-17T13:50:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001HYHEA2"
        },
        "Id": "0jIdy0000001HYHEA2",
        "Name": "ebaoGetIndividualData",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "ebaoGetIndividualData_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T14:05:03.000+0000",
        "CreatedDate": "2025-10-08T19:03:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001JjlEAE"
        },
        "Id": "0jIdy0000001JjlEAE",
        "Name": "ebaoGetCompanyData",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "ebaoGetCompanyData_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T13:52:23.000+0000",
        "CreatedDate": "2025-10-17T12:47:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000051UvEAI"
        },
        "Id": "0jNdy00000051UvEAI",
        "Name": "AccountApplicationMemberElegibility",
        "Type": "BAO",
        "SubType": "AccountApplicationMemberElegibility",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationMemberElegibility_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-10-17T13:43:11.000+0000",
        "CreatedDate": "2025-10-17T13:18:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vo9EAA"
        },
        "Id": "0jNdy0000003vo9EAA",
        "Name": "AccountApplicationMemberElegibility",
        "Type": "BAO",
        "SubType": "AccountApplicationMemberElegibility",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMemberElegibility_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-10-17T13:43:10.000+0000",
        "CreatedDate": "2025-07-31T22:27:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001JobEAE"
        },
        "Id": "0jIdy0000001JobEAE",
        "Name": "aoBtcUpsertIndApplnFormPrdDna",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertIndApplnFormPrdDna_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-17T13:35:52.000+0000",
        "CreatedDate": "2025-10-17T13:32:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004zOHEAY"
        },
        "Id": "0jNdy0000004zOHEAY",
        "Name": "EBAO_AccountApplicationAboutYourBusiness",
        "Type": "EBAO",
        "SubType": "AccountApplicationAboutYourBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "EBAO_AccountApplicationAboutYourBusiness_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-17T13:07:20.000+0000",
        "CreatedDate": "2025-10-14T18:44:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000005093EAA"
        },
        "Id": "0jNdy0000005093EAA",
        "Name": "EBAO_GetAboutYourBusinessAndAccountActivity",
        "Type": "EBAO",
        "SubType": "GetAboutYourBusinessAndAccountActivity",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "EBAO_GetAboutYourBusinessAndAccountActivity_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-17T13:05:20.000+0000",
        "CreatedDate": "2025-10-15T15:04:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001Ji9EAE"
        },
        "Id": "0jIdy0000001Ji9EAE",
        "Name": "ebaoGetExistingApplicationData",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "ebaoGetExistingApplicationData_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T13:02:37.000+0000",
        "CreatedDate": "2025-10-17T12:31:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000ZtpEAE"
        },
        "Id": "0jIdy0000000ZtpEAE",
        "Name": "baoDRLoadCreateApplicantandIdentityDocument",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRLoadCreateApplicantandIdentityDocument_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-17T12:58:55.000+0000",
        "CreatedDate": "2025-03-03T07:12:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000iaXEAQ"
        },
        "Id": "0jIdy0000000iaXEAQ",
        "Name": "DRCreateApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreateApplicant_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-17T12:45:37.000+0000",
        "CreatedDate": "2025-04-23T10:46:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000051TJEAY"
        },
        "Id": "0jNdy00000051TJEAY",
        "Name": "AccountApplicationAccountActivity",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountActivity",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAccountActivity_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-17T12:34:46.000+0000",
        "CreatedDate": "2025-10-17T12:34:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000050llEAA"
        },
        "Id": "0jNdy00000050llEAA",
        "Name": "CountAdditionalMemDon",
        "Type": "BAO",
        "SubType": "CountAdditionalMemDon",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "BAO_CountAdditionalMemDon_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-10-17T10:34:28.000+0000",
        "CreatedDate": "2025-10-16T14:00:48.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000aczEAA"
        },
        "Id": "0jIdy0000000aczEAA",
        "Name": "baoDRUpdatePrimaryApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRUpdatePrimaryApplicant_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-17T06:06:44.000+0000",
        "CreatedDate": "2025-03-06T06:30:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000051MrEAI"
        },
        "Id": "0jNdy00000051MrEAI",
        "Name": "BAO_GenerateOTP",
        "Type": "BAO",
        "SubType": "GenerateOTP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_GenerateOTP_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-17T05:46:45.000+0000",
        "CreatedDate": "2025-10-17T05:29:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004nQLEAY"
        },
        "Id": "0jNdy0000004nQLEAY",
        "Name": "GenerateOTP",
        "Type": "CAO",
        "SubType": "GenerateOTP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_GenerateOTP_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-17T05:46:32.000+0000",
        "CreatedDate": "2025-09-08T17:13:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004xUXEAY"
        },
        "Id": "0jNdy0000004xUXEAY",
        "Name": "BAO_GenerateOTP",
        "Type": "BAO",
        "SubType": "GenerateOTP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "BAO_GenerateOTP_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-17T05:31:26.000+0000",
        "CreatedDate": "2025-10-09T09:07:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qRtEAI"
        },
        "Id": "0jNdy0000003qRtEAI",
        "Name": "BAO_DAO_MembershipCheck",
        "Type": "BAO",
        "SubType": "DAOExsitingBusinessMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOExsitingBusinessMembershipCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-17T05:25:17.000+0000",
        "CreatedDate": "2025-07-21T07:51:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rvZEAQ"
        },
        "Id": "0jIdy0000000rvZEAQ",
        "Name": "DRGetApplicantbyEmail",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetApplicantbyEmail_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-17T05:19:58.000+0000",
        "CreatedDate": "2025-06-04T11:12:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000051DBEAY"
        },
        "Id": "0jNdy00000051DBEAY",
        "Name": "EBAO_AccountApplicationMembershipCheck",
        "Type": "EBAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "EBAO_AccountApplicationMembershipCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-16T19:49:37.000+0000",
        "CreatedDate": "2025-10-16T19:45:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EqXEAU"
        },
        "Id": "0jIdy0000001EqXEAU",
        "Name": "aoBtcPrepUpsertFinAccBizMbrshp",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcPrepUpsertFinAccBizMbrshp_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-16T19:33:49.000+0000",
        "CreatedDate": "2025-10-02T15:16:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004zEbEAI"
        },
        "Id": "0jNdy0000004zEbEAI",
        "Name": "BAO_DAO_BusinessEntityCheck",
        "Type": "BAO",
        "SubType": "DAOExsitingBusinessEntityCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOExsitingBusinessEntityCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T14:12:41.000+0000",
        "CreatedDate": "2025-10-14T10:20:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001JQPEA2"
        },
        "Id": "0jIdy0000001JQPEA2",
        "Name": "getApplicantAccountFumding",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "getApplicantAccountFumding_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-16T13:59:46.000+0000",
        "CreatedDate": "2025-10-16T13:52:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EovEAE"
        },
        "Id": "0jIdy0000001EovEAE",
        "Name": "aoBtcPrepBizAccForUpsert",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcPrepBizAccForUpsert_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-16T13:28:59.000+0000",
        "CreatedDate": "2025-10-02T15:04:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001JNBEA2"
        },
        "Id": "0jIdy0000001JNBEA2",
        "Name": "aoBtcUpsertBizApplnFormPrdDna",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertBizApplnFormPrdDna_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-16T13:11:54.000+0000",
        "CreatedDate": "2025-10-16T13:08:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003bizEAA"
        },
        "Id": "0jNdy0000003bizEAA",
        "Name": "AccountApplicationMemberElegibility",
        "Type": "BAO",
        "SubType": "AccountApplicationMemberElegibility",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMemberElegibility_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T12:59:44.000+0000",
        "CreatedDate": "2025-07-03T15:11:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DEXEA2"
        },
        "Id": "0jIdy0000001DEXEA2",
        "Name": "aoBtcTransformBusinessWithMbrshp",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformBusinessWithMbrshp_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-16T12:58:01.000+0000",
        "CreatedDate": "2025-09-18T01:27:40.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ydfEAA"
        },
        "Id": "0jNdy0000004ydfEAA",
        "Name": "AccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationAboutYou_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T12:47:24.000+0000",
        "CreatedDate": "2025-10-10T11:33:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000015AXEAY"
        },
        "Id": "0jIdy00000015AXEAY",
        "Name": "ExtractApplicantDataForAlloy",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "ExtractApplicantDataForAlloy_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-16T12:37:27.000+0000",
        "CreatedDate": "2025-08-13T14:56:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004WZBEA2"
        },
        "Id": "0jNdy0000004WZBEA2",
        "Name": "aoAlloyController",
        "Type": "AO",
        "SubType": "AlloyController",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_AlloyController_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-16T12:21:32.000+0000",
        "CreatedDate": "2025-08-21T18:15:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000015C9EAI"
        },
        "Id": "0jIdy00000015C9EAI",
        "Name": "ExtractApplicationFormDataForAlloy",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "ExtractApplicationFormDataForAlloy_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-16T12:07:37.000+0000",
        "CreatedDate": "2025-08-13T17:49:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CS9EAM"
        },
        "Id": "0jIdy0000001CS9EAM",
        "Name": "DRSavePersonAssessmentv2",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DRSavePersonAssessmentv2_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-16T11:49:25.000+0000",
        "CreatedDate": "2025-09-09T06:58:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011BlEAI"
        },
        "Id": "0jIdy00000011BlEAI",
        "Name": "baoDRGetBusinessAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRGetBusinessAccount_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-16T11:33:56.000+0000",
        "CreatedDate": "2025-07-23T06:44:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004r7NEAQ"
        },
        "Id": "0jNdy0000004r7NEAQ",
        "Name": "AccountApplicationOTPVerification",
        "Type": "BAO",
        "SubType": "AccountApplicationOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationOTPVerification_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T10:51:20.000+0000",
        "CreatedDate": "2025-09-19T06:52:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wztEAA"
        },
        "Id": "0jNdy0000004wztEAA",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_8",
        "VersionNumber": 8,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T10:50:38.000+0000",
        "CreatedDate": "2025-10-08T07:40:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004a4vEAA"
        },
        "Id": "0jNdy0000004a4vEAA",
        "Name": "AccountApplicationWelcome",
        "Type": "BAO",
        "SubType": "AccountApplicationWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationWelcome_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T10:50:04.000+0000",
        "CreatedDate": "2025-08-29T08:07:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000i2fEAA"
        },
        "Id": "0jIdy0000000i2fEAA",
        "Name": "baoDRCreateBusinessApplicantandIdentityDocument",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRCreateBusinessApplicantandIdentityDocument_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-16T10:49:34.000+0000",
        "CreatedDate": "2025-04-15T08:13:09.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qdBEAQ"
        },
        "Id": "0jNdy0000003qdBEAQ",
        "Name": "BAO_DAO_ExistingBusinessDocumentUpload",
        "Type": "BAO",
        "SubType": "DAODocumentUpload",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAODocumentUpload_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T09:54:28.000+0000",
        "CreatedDate": "2025-07-21T08:18:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tftEAA"
        },
        "Id": "0jNdy0000003tftEAA",
        "Name": "TesttTestt1",
        "Type": "Testt",
        "SubType": "Testt1",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Testt_Testt1_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-10-16T08:14:07.000+0000",
        "CreatedDate": "2025-07-26T10:46:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GppEAE"
        },
        "Id": "0jNdy0000003GppEAE",
        "Name": "AccountApplicationAdditionalOwnersandSigners",
        "Type": "BAO",
        "SubType": "AccountApplicationAdditionalOwnersandSigners",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationAdditionalOwnersandSigners_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T08:09:28.000+0000",
        "CreatedDate": "2025-06-10T03:45:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000115JEAQ"
        },
        "Id": "0jIdy000000115JEAQ",
        "Name": "DRCreateApplicationform",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreateApplicationform_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-16T08:03:47.000+0000",
        "CreatedDate": "2025-07-22T07:00:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000046lBEAQ"
        },
        "Id": "0jNdy00000046lBEAQ",
        "Name": "BAO_SiteAutoLogin",
        "Type": "Site",
        "SubType": "Login",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Site_Login_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T07:20:35.000+0000",
        "CreatedDate": "2025-08-04T05:33:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004zHpEAI"
        },
        "Id": "0jNdy0000004zHpEAI",
        "Name": "BAO_DAO_ExistingBusiness_OTPVerification",
        "Type": "BAO",
        "SubType": "DAOExistingBusinessOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOExistingBusinessOTPVerification_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T07:01:12.000+0000",
        "CreatedDate": "2025-10-14T12:14:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qOfEAI"
        },
        "Id": "0jNdy0000003qOfEAI",
        "Name": "BAO_DAO_Existing_Business",
        "Type": "BAO",
        "SubType": "DAOExistingBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOExistingBusiness_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T06:53:15.000+0000",
        "CreatedDate": "2025-07-21T07:47:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tCPEAY"
        },
        "Id": "0jNdy0000004tCPEAY",
        "Name": "AdditionalSignerBusinessApplication",
        "Type": "AdditionalSigner",
        "SubType": "BusinessApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "AdditionalSigner_BusinessApplication_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T06:51:38.000+0000",
        "CreatedDate": "2025-09-30T07:18:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GLBEA2"
        },
        "Id": "0jNdy0000003GLBEA2",
        "Name": "AccountApplication",
        "Type": "BAO",
        "SubType": "AccountApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplication_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-16T06:50:15.000+0000",
        "CreatedDate": "2025-06-09T19:20:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CAPEA2"
        },
        "Id": "0jIdy0000001CAPEA2",
        "Name": "aoBtcUpsertBookingHistory",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertBookingHistory_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-15T16:32:10.000+0000",
        "CreatedDate": "2025-09-05T17:52:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001Br3EAE"
        },
        "Id": "0jIdy0000001Br3EAE",
        "Name": "aoBtcExtractAssignedProductsPrimary",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAssignedProductsPrimary_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-15T16:24:23.000+0000",
        "CreatedDate": "2025-09-04T12:47:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EvNEAU"
        },
        "Id": "0jIdy0000001EvNEAU",
        "Name": "aoBtcExtractPesonAddMembership",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractPesonAddMembership_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-15T14:40:14.000+0000",
        "CreatedDate": "2025-10-02T17:47:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004zg1EAA"
        },
        "Id": "0jNdy0000004zg1EAA",
        "Name": "BAO_DAO_MembershipCheck",
        "Type": "BAO",
        "SubType": "DAOExsitingBusinessMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_DAOExsitingBusinessMembershipCheck_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-15T07:05:54.000+0000",
        "CreatedDate": "2025-10-15T06:54:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004XILEA2"
        },
        "Id": "0jNdy0000004XILEA2",
        "Name": "AccountApplicationWelcome",
        "Type": "BAO",
        "SubType": "AccountApplicationWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationWelcome_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-15T06:51:55.000+0000",
        "CreatedDate": "2025-08-23T17:58:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004yGvEAI"
        },
        "Id": "0jNdy0000004yGvEAI",
        "Name": "EBAO_AccountApplicationMemberElegibility",
        "Type": "EBAO",
        "SubType": "AccountApplicationMemberElegibility",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "EBAO_AccountApplicationMemberElegibility_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-14T17:56:34.000+0000",
        "CreatedDate": "2025-10-10T05:33:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rsbEAA"
        },
        "Id": "0jNdy0000003rsbEAA",
        "Name": "ApplicationSendComeBackEmail",
        "Type": "Application",
        "SubType": "SendComeBackEmail",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Application_SendComeBackEmail_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-14T12:50:59.000+0000",
        "CreatedDate": "2025-07-24T11:21:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rSXEAY"
        },
        "Id": "0jIdy0000000rSXEAY",
        "Name": "baoPostAdditionalOwnerDecision",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoPostAdditionalOwnerDecision_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-14T10:40:12.000+0000",
        "CreatedDate": "2025-06-02T20:12:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000utREAQ"
        },
        "Id": "0jIdy0000000utREAQ",
        "Name": "getAdditionalApplicantandLink",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "getAdditionalApplicantandLink_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-14T10:19:42.000+0000",
        "CreatedDate": "2025-06-24T08:04:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uNREAY"
        },
        "Id": "0jNdy0000003uNREAY",
        "Name": "IP_Send_Email_to_Additional_owners",
        "Type": "SendEmail",
        "SubType": "AdditionalOwners",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "SendEmail_AdditionalOwners_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-14T10:09:07.000+0000",
        "CreatedDate": "2025-07-29T08:21:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CbpEAE"
        },
        "Id": "0jIdy0000001CbpEAE",
        "Name": "aoBtcTransformBookingHistoryForDML",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformBookingHistoryForDML_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-13T14:06:22.000+0000",
        "CreatedDate": "2025-09-09T18:48:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wv3EAA"
        },
        "Id": "0jNdy0000004wv3EAA",
        "Name": "SeamlessLoginBAO_DAO_Existing_Business",
        "Type": "BAO",
        "SubType": "SeamlessLoginDAOExistingBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginDAOExistingBusiness_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-13T13:43:23.000+0000",
        "CreatedDate": "2025-10-08T06:33:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004z4vEAA"
        },
        "Id": "0jNdy0000004z4vEAA",
        "Name": "testomni",
        "Type": "Test",
        "SubType": "OMNI",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Test_OMNI_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-13T13:40:50.000+0000",
        "CreatedDate": "2025-10-13T13:36:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000047KfEAI"
        },
        "Id": "0jNdy00000047KfEAI",
        "Name": "BAO_Create_OPP_MEMB_product",
        "Type": "BAO",
        "SubType": "CreateOPPandMEMBProduct",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_CreateOPPandMEMBProduct_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-13T12:48:55.000+0000",
        "CreatedDate": "2025-08-06T07:36:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000013lREAQ"
        },
        "Id": "0jIdy00000013lREAQ",
        "Name": "BAOCreateOPPandLineItem",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "BAOCreateOPPandLineItem_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-13T12:48:12.000+0000",
        "CreatedDate": "2025-08-06T08:03:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rc1EAA"
        },
        "Id": "0jNdy0000004rc1EAA",
        "Name": "AccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYou_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-10-13T12:35:55.000+0000",
        "CreatedDate": "2025-09-23T06:42:48.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003TDZEA2"
        },
        "Id": "0jNdy0000003TDZEA2",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-10-13T11:24:17.000+0000",
        "CreatedDate": "2025-07-01T07:23:21.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wwfEAA"
        },
        "Id": "0jNdy0000004wwfEAA",
        "Name": "SeamlessLoginBAO_DAO_MembershipCheck",
        "Type": "BAO",
        "SubType": "SeamlessLoginDAOExsitingBusinessMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginDAOExsitingBusinessMembershipCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-13T09:46:20.000+0000",
        "CreatedDate": "2025-10-08T06:35:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004yvFEAQ"
        },
        "Id": "0jNdy0000004yvFEAQ",
        "Name": "SeamlessLoginBAO_DAO_OTPVerification",
        "Type": "BAO",
        "SubType": "SeamlessLoginDAOOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginDAOOTPVerification_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-13T09:38:25.000+0000",
        "CreatedDate": "2025-10-13T07:10:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ytdEAA"
        },
        "Id": "0jNdy0000004ytdEAA",
        "Name": "SeamlessLoginBAO_DAO_BusinessEntityCheck",
        "Type": "BAO",
        "SubType": "SeamlessLoginDAOBusinessEntityCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginDAOBusinessEntityCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-13T06:54:15.000+0000",
        "CreatedDate": "2025-10-13T06:52:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GxtEAE"
        },
        "Id": "0jNdy0000003GxtEAE",
        "Name": "AccountApplicationDocumentUpload",
        "Type": "BAO",
        "SubType": "AccountApplicationDocumentUpload",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationDocumentUpload_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-13T06:32:40.000+0000",
        "CreatedDate": "2025-06-10T04:13:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000k65EAA"
        },
        "Id": "0jIdy0000000k65EAA",
        "Name": "DRCreatePersonAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreatePersonAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-12T14:48:37.000+0000",
        "CreatedDate": "2025-05-01T07:16:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018JhEAI"
        },
        "Id": "0jIdy00000018JhEAI",
        "Name": "baoUpdateApplicationFormAndAppLink",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "baoUpdateApplicationFormAndAppLink_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-11T11:16:02.000+0000",
        "CreatedDate": "2025-08-27T12:04:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000sgLEAQ"
        },
        "Id": "0jIdy0000000sgLEAQ",
        "Name": "baoGetApplicationLinkStatus",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "baoGetApplicationLinkStatus_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-11T10:48:46.000+0000",
        "CreatedDate": "2025-06-09T19:26:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001ETxEAM"
        },
        "Id": "0jIdy0000001ETxEAM",
        "Name": "aoBtcTransformAccountRolesRequest",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformAccountRolesRequest_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-10T20:20:56.000+0000",
        "CreatedDate": "2025-09-30T20:54:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rovEAA"
        },
        "Id": "0jNdy0000004rovEAA",
        "Name": "AccountApplicationAboutYourBusiness",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYourBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationAboutYourBusiness_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "LastModifiedDate": "2025-10-10T16:19:13.000+0000",
        "CreatedDate": "2025-09-24T07:54:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000016PxEAI"
        },
        "Id": "0jIdy00000016PxEAI",
        "Name": "aoBtcTransformCardCaptureResponse",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformCardCaptureResponse_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-10T13:25:40.000+0000",
        "CreatedDate": "2025-08-19T19:41:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EIfEAM"
        },
        "Id": "0jIdy0000001EIfEAM",
        "Name": "aoBtcTransformACHResponse",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformACHResponse_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-10T13:23:01.000+0000",
        "CreatedDate": "2025-09-29T19:33:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004sTFEAY"
        },
        "Id": "0jNdy0000004sTFEAY",
        "Name": "aoBtcCreateFunding",
        "Type": "AO",
        "SubType": "aoBtcCreateFunding",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateFunding_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-10T13:11:44.000+0000",
        "CreatedDate": "2025-09-25T21:50:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000wC5EAI"
        },
        "Id": "0jIdy0000000wC5EAI",
        "Name": "DRUserExists",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "VersionNumber": 1,
        "UniqueName": "DRUserExists_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-10T12:12:37.000+0000",
        "CreatedDate": "2025-07-03T05:30:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wLZEAY"
        },
        "Id": "0jNdy0000004wLZEAY",
        "Name": "bao_BusinessPortalLanding",
        "Type": "Portal",
        "SubType": "Landing",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Portal_Landing_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-10-10T11:14:22.000+0000",
        "CreatedDate": "2025-10-06T15:29:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ybtEAA"
        },
        "Id": "0jNdy0000004ybtEAA",
        "Name": "ImiOmni",
        "Type": "IMI",
        "SubType": "OMNI",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "IMI_OMNI_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-10-10T11:09:55.000+0000",
        "CreatedDate": "2025-10-10T11:09:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004s6fEAA"
        },
        "Id": "0jNdy0000004s6fEAA",
        "Name": "SeamlessLoginAccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "SeamlessLoginAccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginAccountApplicationAboutYou_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-10T10:42:02.000+0000",
        "CreatedDate": "2025-09-24T14:38:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003J69EAE"
        },
        "Id": "0jNdy0000003J69EAE",
        "Name": "AccountApplicationSelectAccounts",
        "Type": "BAO",
        "SubType": "AccountApplicationSelectAccounts",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationSelectAccounts_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-10T05:28:00.000+0000",
        "CreatedDate": "2025-06-16T05:51:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004yC5EAI"
        },
        "Id": "0jNdy0000004yC5EAI",
        "Name": "AccountApplicationAdditionalOwnersandSigners",
        "Type": "BAO",
        "SubType": "AccountApplicationAdditionalOwnersandSigners",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAdditionalOwnersandSigners_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-10-09T18:09:13.000+0000",
        "CreatedDate": "2025-10-09T18:09:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000abNEAQ"
        },
        "Id": "0jIdy0000000abNEAQ",
        "Name": "baoDRgetAccountNamebySEG",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRgetAccountNamebySEG_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-09T17:39:56.000+0000",
        "CreatedDate": "2025-03-06T04:39:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004loLEAQ"
        },
        "Id": "0jNdy0000004loLEAQ",
        "Name": "BAO_GenerateOTP",
        "Type": "BAO",
        "SubType": "GenerateOTP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "BAO_GenerateOTP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "LastModifiedDate": "2025-10-09T09:07:40.000+0000",
        "CreatedDate": "2025-09-02T06:54:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003M7FEAU"
        },
        "Id": "0jNdy0000003M7FEAU",
        "Name": "AccountApplication",
        "Type": "BAO",
        "SubType": "AccountApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplication_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-09T07:38:05.000+0000",
        "CreatedDate": "2025-06-19T16:20:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rVZEAY"
        },
        "Id": "0jNdy0000004rVZEAY",
        "Name": "SeamlessLogin",
        "Type": "BAO",
        "SubType": "SeamlessLogin",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLogin_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-09T07:24:10.000+0000",
        "CreatedDate": "2025-09-22T19:19:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000urpEAA"
        },
        "Id": "0jIdy0000000urpEAA",
        "Name": "CreateAdditionalApplicantandIdentity",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "CreateAdditionalApplicantandIdentity_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-09T05:51:16.000+0000",
        "CreatedDate": "2025-06-24T05:43:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001HbVEAU"
        },
        "Id": "0jIdy0000001HbVEAU",
        "Name": "CreateAdditionalApplicantIdentityBranch",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "VersionNumber": 1,
        "UniqueName": "CreateAdditionalApplicantIdentityBranch_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-09T02:41:25.000+0000",
        "CreatedDate": "2025-10-09T01:57:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004xHdEAI"
        },
        "Id": "0jNdy0000004xHdEAI",
        "Name": "GetApplicantData",
        "Type": "EBAO",
        "SubType": "GetApplicantData",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "EBAO_GetApplicantData_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-08T23:23:55.000+0000",
        "CreatedDate": "2025-10-08T15:02:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001Be9EAE"
        },
        "Id": "0jIdy0000001Be9EAE",
        "Name": "aoCreateFinancialAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoCreateFinancialAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-08T23:16:43.000+0000",
        "CreatedDate": "2025-09-03T20:53:09.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BuHEAU"
        },
        "Id": "0jIdy0000001BuHEAU",
        "Name": "aoBtcPrepUpsertFinAccounts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcPrepUpsertFinAccounts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-08T23:11:07.000+0000",
        "CreatedDate": "2025-09-04T13:58:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004oW5EAI"
        },
        "Id": "0jNdy0000004oW5EAI",
        "Name": "AccountApplicationAccountFunding",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationAccountFunding_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-08T19:03:33.000+0000",
        "CreatedDate": "2025-09-11T21:28:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001HQDEA2"
        },
        "Id": "0jIdy0000001HQDEA2",
        "Name": "aoBtcCreateFinancialAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcCreateFinancialAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-08T13:53:01.000+0000",
        "CreatedDate": "2025-10-08T13:53:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000v7xEAA"
        },
        "Id": "0jIdy0000000v7xEAA",
        "Name": "UpsertApplicantandIdentiyDocument",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "UpsertApplicantandIdentiyDocument_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-08T10:57:48.000+0000",
        "CreatedDate": "2025-06-25T05:19:09.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tFdEAI"
        },
        "Id": "0jNdy0000004tFdEAI",
        "Name": "SeamlessLoginAccountApplicationWelcome",
        "Type": "BAO",
        "SubType": "SeamlessLoginAccountApplicationWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginAccountApplicationWelcome_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-08T10:41:29.000+0000",
        "CreatedDate": "2025-09-30T11:59:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004t5xEAA"
        },
        "Id": "0jNdy0000004t5xEAA",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-10-08T07:42:11.000+0000",
        "CreatedDate": "2025-09-29T14:22:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wrpEAA"
        },
        "Id": "0jNdy0000004wrpEAA",
        "Name": "SeamlessLoginAccountApplicationOTPVerification",
        "Type": "BAO",
        "SubType": "SeamLessLoginAccountApplicationOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamLessLoginAccountApplicationOTPVerification_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-08T05:53:11.000+0000",
        "CreatedDate": "2025-10-08T05:43:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003QXREA2"
        },
        "Id": "0jNdy0000003QXREA2",
        "Name": "AdditionalOwnerAcceptanceScreen",
        "Type": "BAO",
        "SubType": "AdditionalOwnerAcceptanceScreen",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AdditionalOwnerAcceptanceScreen_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-08T05:30:30.000+0000",
        "CreatedDate": "2025-06-25T06:55:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004UsLEAU"
        },
        "Id": "0jNdy0000004UsLEAU",
        "Name": "ConsumerOnfidoStepUpTest",
        "Type": "CAO",
        "SubType": "OnfidoStepupTest",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_OnfidoStepupTest_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-07T23:11:07.000+0000",
        "CreatedDate": "2025-08-18T15:46:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uldEAA"
        },
        "Id": "0jNdy0000003uldEAA",
        "Name": "SendRequestToAlloy",
        "Type": "Send",
        "SubType": "RequestToAlloy",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Send_RequestToAlloy_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-10-07T22:19:25.000+0000",
        "CreatedDate": "2025-07-29T17:20:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wqDEAQ"
        },
        "Id": "0jNdy0000004wqDEAQ",
        "Name": "aoBtcCreateBusinessWithMembership",
        "Type": "AO",
        "SubType": "aoBtcCreateBusinessWithMembership",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateBusinessWithMembership_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-07T20:44:18.000+0000",
        "CreatedDate": "2025-10-07T20:12:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wjlEAA"
        },
        "Id": "0jNdy0000004wjlEAA",
        "Name": "aoBtcCreateBusinessWithMembership",
        "Type": "AO",
        "SubType": "aoBtcCreateBusinessWithMembership",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateBusinessWithMembership_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-07T19:49:48.000+0000",
        "CreatedDate": "2025-10-07T14:30:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001HEvEAM"
        },
        "Id": "0jIdy0000001HEvEAM",
        "Name": "aoBtcGetBusinessPrimary",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcGetBusinessPrimary_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-07T18:17:35.000+0000",
        "CreatedDate": "2025-10-07T18:11:02.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001HA5EAM"
        },
        "Id": "0jIdy0000001HA5EAM",
        "Name": "aoBtcGetOrgPersonsBusiness",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcGetOrgPersonsBusiness_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-07T17:05:54.000+0000",
        "CreatedDate": "2025-10-07T14:32:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001HDJEA2"
        },
        "Id": "0jIdy0000001HDJEA2",
        "Name": "aoBtcTransformOrgPersons",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformOrgPersons_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-07T16:58:51.000+0000",
        "CreatedDate": "2025-10-07T14:51:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vUnEAI"
        },
        "Id": "0jNdy0000003vUnEAI",
        "Name": "ConsumerWelcome",
        "Type": "CAO",
        "SubType": "Welcome",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_Welcome_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-10-07T16:24:07.000+0000",
        "CreatedDate": "2025-07-30T19:19:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004nDREAY"
        },
        "Id": "0jNdy0000004nDREAY",
        "Name": "aoBtcCreateAccount",
        "Type": "AO",
        "SubType": "aoBtcCreateAccount",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateAccount_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-07T15:01:20.000+0000",
        "CreatedDate": "2025-09-05T16:46:41.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001HBhEAM"
        },
        "Id": "0jIdy0000001HBhEAM",
        "Name": "aoBtcTransformOrgPersonsxxx",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformOrgPersonsxxx_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-07T14:51:12.000+0000",
        "CreatedDate": "2025-10-07T14:49:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000tkTEAQ"
        },
        "Id": "0jIdy0000000tkTEAQ",
        "Name": "DRUpdateAppliactionFormOnCompletion",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRUpdateAppliactionFormOnCompletion_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-07T13:15:31.000+0000",
        "CreatedDate": "2025-06-17T13:10:48.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wTdEAI"
        },
        "Id": "0jNdy0000004wTdEAI",
        "Name": "AccountApplicationBranch",
        "Type": "BAO",
        "SubType": "AccountApplicationBranch",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationBranch_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-10-07T12:38:44.000+0000",
        "CreatedDate": "2025-10-07T10:30:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004wVFEAY"
        },
        "Id": "0jNdy0000004wVFEAY",
        "Name": "createApplicationFormIP",
        "Type": "BAO",
        "SubType": "CreateApplicationForm",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_CreateApplicationForm_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-10-07T11:33:13.000+0000",
        "CreatedDate": "2025-10-07T11:21:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001H6rEAE"
        },
        "Id": "0jIdy0000001H6rEAE",
        "Name": "createBranchApplicationForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "createBranchApplicationForm_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-07T11:28:43.000+0000",
        "CreatedDate": "2025-10-07T11:27:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011GbEAI"
        },
        "Id": "0jIdy00000011GbEAI",
        "Name": "DRLCreateTask",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "VersionNumber": 1,
        "UniqueName": "DRLCreateTask_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-07T07:52:44.000+0000",
        "CreatedDate": "2025-07-23T12:22:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011LREAY"
        },
        "Id": "0jIdy00000011LREAY",
        "Name": "DREGetExistingTasks",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "VersionNumber": 1,
        "UniqueName": "DREGetExistingTasks_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-07T07:41:48.000+0000",
        "CreatedDate": "2025-07-23T12:59:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000013gbEAA"
        },
        "Id": "0jIdy00000013gbEAA",
        "Name": "BAOGetMembershipProduct",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "BAOGetMembershipProduct_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-07T05:31:52.000+0000",
        "CreatedDate": "2025-08-06T07:53:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004oO1EAI"
        },
        "Id": "0jNdy0000004oO1EAI",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_12",
        "VersionNumber": 12,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "LastModifiedDate": "2025-10-06T17:18:12.000+0000",
        "CreatedDate": "2025-09-11T14:12:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rddEAA"
        },
        "Id": "0jNdy0000004rddEAA",
        "Name": "bao_BusinessPortalLanding",
        "Type": "Portal",
        "SubType": "Landing",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Portal_Landing_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-10-06T15:49:53.000+0000",
        "CreatedDate": "2025-09-23T08:08:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000aJdEAI"
        },
        "Id": "0jIdy0000000aJdEAI",
        "Name": "DRGetPrimaryApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetPrimaryApplicant_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-06T07:07:34.000+0000",
        "CreatedDate": "2025-03-04T08:09:49.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004uDJEAY"
        },
        "Id": "0jNdy0000004uDJEAY",
        "Name": "AccountApplicationAboutYourBusiness",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYourBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYourBusiness_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "LastModifiedDate": "2025-10-05T06:59:39.000+0000",
        "CreatedDate": "2025-10-03T14:44:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001Fg9EAE"
        },
        "Id": "0jIdy0000001Fg9EAE",
        "Name": "aoBtcUpsertPersonMembership",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertPersonMembership_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-04T01:19:38.000+0000",
        "CreatedDate": "2025-10-03T18:43:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EwzEAE"
        },
        "Id": "0jIdy0000001EwzEAE",
        "Name": "aoBtcTransformPesonMembershipForDML",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformPesonMembershipForDML_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-03T19:15:44.000+0000",
        "CreatedDate": "2025-10-02T18:06:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004qfxEAA"
        },
        "Id": "0jNdy0000004qfxEAA",
        "Name": "aoBtcCreateBusinessWithMembership",
        "Type": "AO",
        "SubType": "aoBtcCreateBusinessWithMembership",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateBusinessWithMembership_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-10-03T16:41:34.000+0000",
        "CreatedDate": "2025-09-16T16:34:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003pArEAI"
        },
        "Id": "0jNdy0000003pArEAI",
        "Name": "bao_ExistingUserLogin",
        "Type": "Existing",
        "SubType": "Login",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Existing_Login_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "LastModifiedDate": "2025-10-03T13:20:00.000+0000",
        "CreatedDate": "2025-07-15T05:02:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GHxEAM"
        },
        "Id": "0jNdy0000003GHxEAM",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Account_Opening_English_19",
        "VersionNumber": 19,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000EC1JdAAL"
            },
            "Name": "Ayush Singhal"
        },
        "LastModifiedDate": "2025-10-03T09:34:33.000+0000",
        "CreatedDate": "2025-06-09T17:40:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tifEAA"
        },
        "Id": "0jNdy0000004tifEAA",
        "Name": "baoIPMemberAutoEligibility",
        "Type": "MemberAutoEligibility",
        "SubType": "check",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "MemberAutoEligibility_check_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-03T06:54:52.000+0000",
        "CreatedDate": "2025-10-03T05:53:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000001QzlEAE"
        },
        "Id": "0jNdy0000001QzlEAE",
        "Name": "baoIPMemberAutoEligibility",
        "Type": "MemberAutoEligibility",
        "SubType": "check",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "MemberAutoEligibility_check_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-03T06:06:53.000+0000",
        "CreatedDate": "2025-03-07T04:39:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000aptEAA"
        },
        "Id": "0jIdy0000000aptEAA",
        "Name": "baoDRGetorgofeligibility",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRGetorgofeligibility_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-03T06:00:27.000+0000",
        "CreatedDate": "2025-03-07T04:42:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001F3REAU"
        },
        "Id": "0jIdy0000001F3REAU",
        "Name": "aoBtcUpsertAccountRecordById",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertAccountRecordById_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-10-03T00:50:03.000+0000",
        "CreatedDate": "2025-10-03T00:14:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001F53EAE"
        },
        "Id": "0jIdy0000001F53EAE",
        "Name": "testTransform",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "testTransform_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-03T00:32:05.000+0000",
        "CreatedDate": "2025-10-03T00:32:05.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EaPEAU"
        },
        "Id": "0jIdy0000001EaPEAU",
        "Name": "testAssignedPrds",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "testAssignedPrds_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-02T12:44:15.000+0000",
        "CreatedDate": "2025-10-01T14:21:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001ENVEA2"
        },
        "Id": "0jIdy0000001ENVEA2",
        "Name": "BaoGetApplicationSummaryData",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "BaoGetApplicationSummaryData_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-10-02T10:35:07.000+0000",
        "CreatedDate": "2025-09-30T05:21:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tdpEAA"
        },
        "Id": "0jNdy0000004tdpEAA",
        "Name": "BAO_ApplicationSummaryPrint",
        "Type": "BAO",
        "SubType": "ApplicationSummaryPrint",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_ApplicationSummaryPrint_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-02T10:17:23.000+0000",
        "CreatedDate": "2025-10-02T06:03:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004t9BEAQ"
        },
        "Id": "0jNdy0000004t9BEAQ",
        "Name": "BAO_ApplicationSummaryPrint",
        "Type": "BAO",
        "SubType": "ApplicationSummaryPrint",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_ApplicationSummaryPrint_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-02T06:05:58.000+0000",
        "CreatedDate": "2025-09-30T05:18:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002Bc5EAE"
        },
        "Id": "0jNdy0000002Bc5EAE",
        "Name": "IptoCreateBusinessApplicantandIdentitydoc",
        "Type": "Applicationform",
        "SubType": "IdentityDocument",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Applicationform_IdentityDocument_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-10-01T07:28:40.000+0000",
        "CreatedDate": "2025-04-16T07:08:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tPJEAY"
        },
        "Id": "0jNdy0000004tPJEAY",
        "Name": "SeamlessLoginAccountApplicationMemberElegibility",
        "Type": "BAO",
        "SubType": "SeamlessLoginAccountApplicationMemberElegibility",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginAccountApplicationMemberElegibility_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-09-30T16:55:12.000+0000",
        "CreatedDate": "2025-09-30T16:54:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tNhEAI"
        },
        "Id": "0jNdy0000004tNhEAI",
        "Name": "SeamlessLoginAccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "SeamlessLoginAccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_SeamlessLoginAccountApplicationMembershipCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-09-30T16:52:33.000+0000",
        "CreatedDate": "2025-09-30T16:51:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BsfEAE"
        },
        "Id": "0jIdy0000001BsfEAE",
        "Name": "aoBtcTransformAccountsPersonal",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformAccountsPersonal_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-30T13:58:25.000+0000",
        "CreatedDate": "2025-09-04T13:29:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004s53EAA"
        },
        "Id": "0jNdy0000004s53EAA",
        "Name": "SeamlessLoginAccountApplicationWelcome",
        "Type": "BAO",
        "SubType": "SeamlessLoginAccountApplicationWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_SeamlessLoginAccountApplicationWelcome_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-09-30T11:57:31.000+0000",
        "CreatedDate": "2025-09-24T14:35:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004tAnEAI"
        },
        "Id": "0jNdy0000004tAnEAI",
        "Name": "AccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYou_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-30T07:38:35.000+0000",
        "CreatedDate": "2025-09-30T07:17:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004t7ZEAQ"
        },
        "Id": "0jNdy0000004t7ZEAQ",
        "Name": "AdditionalSignerBusinessApplication",
        "Type": "AdditionalSigner",
        "SubType": "BusinessApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AdditionalSigner_BusinessApplication_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-30T07:20:57.000+0000",
        "CreatedDate": "2025-09-29T16:51:05.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000ivVEAQ"
        },
        "Id": "0jIdy0000000ivVEAQ",
        "Name": "DRTransformToApplicationSummary",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRTransformToApplicationSummary_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-30T06:44:15.000+0000",
        "CreatedDate": "2025-04-25T09:29:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qenEAA"
        },
        "Id": "0jNdy0000003qenEAA",
        "Name": "BAO_DAO-ExistingBusinessApplicationComplete",
        "Type": "BAO",
        "SubType": "DAOApplicationComplete",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOApplicationComplete_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-30T05:55:31.000+0000",
        "CreatedDate": "2025-07-21T08:20:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003K2DEAU"
        },
        "Id": "0jNdy0000003K2DEAU",
        "Name": "AccountApplicationApplicationComplete",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationComplete",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationApplicationComplete_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-30T05:54:56.000+0000",
        "CreatedDate": "2025-06-17T12:25:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rFREAY"
        },
        "Id": "0jNdy0000004rFREAY",
        "Name": "BAO_DAO_ExistingBusinessApplicationSummary",
        "Type": "BAO",
        "SubType": "DAOApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOApplicationSummary_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-30T05:13:08.000+0000",
        "CreatedDate": "2025-09-19T15:25:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CaDEAU"
        },
        "Id": "0jIdy0000001CaDEAU",
        "Name": "aoBtcUpsertAccountFundTransaction",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpsertAccountFundTransaction_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-29T20:00:04.000+0000",
        "CreatedDate": "2025-09-09T18:43:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004qxhEAA"
        },
        "Id": "0jNdy0000004qxhEAA",
        "Name": "AdditionalSignerBusinessApplication",
        "Type": "AdditionalSigner",
        "SubType": "BusinessApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AdditionalSigner_BusinessApplication_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-29T16:52:39.000+0000",
        "CreatedDate": "2025-09-17T23:18:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uaLEAQ"
        },
        "Id": "0jNdy0000003uaLEAQ",
        "Name": "ApplicationApprovalRejection",
        "Type": "BAO",
        "SubType": "ApplicationApprovalRejection",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_ApplicationApprovalRejection_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-29T16:17:32.000+0000",
        "CreatedDate": "2025-07-29T16:14:14.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000udJEAQ"
        },
        "Id": "0jIdy0000000udJEAQ",
        "Name": "DRExtractApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "DRExtractApplicant_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-29T16:12:56.000+0000",
        "CreatedDate": "2025-06-19T10:36:11.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000vXlEAI"
        },
        "Id": "0jIdy0000000vXlEAI",
        "Name": "DRApplicantUpdate",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "DRApplicantUpdate_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-29T16:04:01.000+0000",
        "CreatedDate": "2025-06-27T11:59:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004r8zEAA"
        },
        "Id": "0jNdy0000004r8zEAA",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-29T14:53:11.000+0000",
        "CreatedDate": "2025-09-19T07:00:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001EFREA2"
        },
        "Id": "0jIdy0000001EFREA2",
        "Name": "aoBtcTransformACHRequest",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformACHRequest_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-29T12:40:57.000+0000",
        "CreatedDate": "2025-09-27T18:42:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qZxEAI"
        },
        "Id": "0jNdy0000003qZxEAI",
        "Name": "BAO_DAO_ExistingBusinessAccountFunding",
        "Type": "BAO",
        "SubType": "DAOAccountFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOAccountFunding_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-29T12:29:25.000+0000",
        "CreatedDate": "2025-07-21T08:12:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000116vEAA"
        },
        "Id": "0jIdy000000116vEAA",
        "Name": "baoDRCreateApplicantandIdentity",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRCreateApplicantandIdentity_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-29T07:13:26.000+0000",
        "CreatedDate": "2025-07-22T07:39:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003K3pEAE"
        },
        "Id": "0jNdy0000003K3pEAE",
        "Name": "IP_CompleteApplication",
        "Type": "Complete",
        "SubType": "Application",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Complete_Application_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-29T05:09:49.000+0000",
        "CreatedDate": "2025-06-17T13:09:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DPpEAM"
        },
        "Id": "0jIdy0000001DPpEAM",
        "Name": "aoBtcExtractAppFormProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAppFormProducts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-26T20:43:36.000+0000",
        "CreatedDate": "2025-09-18T21:05:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CDdEAM"
        },
        "Id": "0jIdy0000001CDdEAM",
        "Name": "aoBtcGetAllApplicantsForApplication",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcGetAllApplicantsForApplication_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-26T13:59:30.000+0000",
        "CreatedDate": "2025-09-05T20:30:49.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aCzEAI"
        },
        "Id": "0jNdy0000004aCzEAI",
        "Name": "bao_BusinessPortalLanding",
        "Type": "Portal",
        "SubType": "Landing",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Portal_Landing_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-26T07:03:58.000+0000",
        "CreatedDate": "2025-08-29T11:04:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003cAPEAY"
        },
        "Id": "0jNdy0000003cAPEAY",
        "Name": "AccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYou_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-26T07:02:51.000+0000",
        "CreatedDate": "2025-07-04T10:41:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003TQTEA2"
        },
        "Id": "0jNdy0000003TQTEA2",
        "Name": "AccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYou_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-26T07:02:22.000+0000",
        "CreatedDate": "2025-07-01T12:28:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003TOrEAM"
        },
        "Id": "0jNdy0000003TOrEAM",
        "Name": "AccountApplicationOTPVerification",
        "Type": "BAO",
        "SubType": "AccountApplicationOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationOTPVerification_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-26T07:01:25.000+0000",
        "CreatedDate": "2025-07-01T12:25:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rNVEAY"
        },
        "Id": "0jNdy0000004rNVEAY",
        "Name": "BAO_VerifyOTP",
        "Type": "BAO",
        "SubType": "VerifyOTPs",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_VerifyOTPs_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-26T05:12:01.000+0000",
        "CreatedDate": "2025-09-22T10:05:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010VpEAI"
        },
        "Id": "0jIdy00000010VpEAI",
        "Name": "caoGetRecordTypeID",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetRecordTypeID_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-25T22:26:40.000+0000",
        "CreatedDate": "2025-07-18T06:39:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DrFEAU"
        },
        "Id": "0jIdy0000001DrFEAU",
        "Name": "aoBtcUpdateAppnIntegrationStatus",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpdateAppnIntegrationStatus_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-25T19:53:29.000+0000",
        "CreatedDate": "2025-09-24T22:34:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004sQ1EAI"
        },
        "Id": "0jNdy0000004sQ1EAI",
        "Name": "Manage Complaints",
        "Type": "FSCComplaint",
        "SubType": "Intake",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "FSCComplaint_Intake_multiLanguage_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-09-25T13:46:08.000+0000",
        "CreatedDate": "2025-09-25T13:46:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000012qzEAA"
        },
        "Id": "0jIdy00000012qzEAA",
        "Name": "BAODAOTransformApplicationSummary",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "BAODAOTransformApplicationSummary_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-25T10:39:56.000+0000",
        "CreatedDate": "2025-07-31T05:12:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003M8rEAE"
        },
        "Id": "0jNdy0000003M8rEAE",
        "Name": "AccountApplicationOnfidoStepUp",
        "Type": "BAO",
        "SubType": "AccountApplicationOnfidoStepUp",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationOnfidoStepUp_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-09-24T23:49:01.000+0000",
        "CreatedDate": "2025-06-19T20:44:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DsrEAE"
        },
        "Id": "0jIdy0000001DsrEAE",
        "Name": "aoBtcUpdateApplnFormProduct",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcUpdateApplnFormProduct_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-24T22:44:35.000+0000",
        "CreatedDate": "2025-09-24T22:42:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DmPEAU"
        },
        "Id": "0jIdy0000001DmPEAU",
        "Name": "aoBtcPrepUpsertApplnFormProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcPrepUpsertApplnFormProducts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-24T17:12:43.000+0000",
        "CreatedDate": "2025-09-24T17:06:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uC9EAI"
        },
        "Id": "0jNdy0000003uC9EAI",
        "Name": "ConsumerOnfidoStepUp",
        "Type": "CAO",
        "SubType": "ConsumerOnfidoStepUp",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerOnfidoStepUp_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-09-24T15:48:11.000+0000",
        "CreatedDate": "2025-07-28T20:33:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004qsrEAA"
        },
        "Id": "0jNdy0000004qsrEAA",
        "Name": "AccountApplicationAboutYourBusiness",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYourBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYourBusiness_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-24T07:41:28.000+0000",
        "CreatedDate": "2025-09-17T17:58:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003W1lEAE"
        },
        "Id": "0jNdy0000003W1lEAE",
        "Name": "VerifyOTP",
        "Type": "CAO",
        "SubType": "VerifyOTP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_VerifyOTP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-24T07:11:55.000+0000",
        "CreatedDate": "2025-07-02T15:50:11.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BJBEA2"
        },
        "Id": "0jIdy0000001BJBEA2",
        "Name": "baoInsertOTP",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoInsertOTP_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-24T06:07:39.000+0000",
        "CreatedDate": "2025-09-02T07:03:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BFxEAM"
        },
        "Id": "0jIdy0000001BFxEAM",
        "Name": "baoGetOTPsByAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoGetOTPsByAccount_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-24T06:05:48.000+0000",
        "CreatedDate": "2025-09-02T07:01:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004riTEAQ"
        },
        "Id": "0jNdy0000004riTEAQ",
        "Name": "aoBtcCreateFunding",
        "Type": "AO",
        "SubType": "aoBtcCreateFunding",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateFunding_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-09-23T18:48:22.000+0000",
        "CreatedDate": "2025-09-23T14:36:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CvBEAU"
        },
        "Id": "0jIdy0000001CvBEAU",
        "Name": "aoBtcTransformCardAuthResponse",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformCardAuthResponse_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-23T18:29:51.000+0000",
        "CreatedDate": "2025-09-12T15:33:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rk5EAA"
        },
        "Id": "0jNdy0000004rk5EAA",
        "Name": "aoBtcCreateFundingAndres",
        "Type": "AO",
        "SubType": "aoBtcCreateFundingAndres",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateFundingAndres_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-09-23T18:23:23.000+0000",
        "CreatedDate": "2025-09-23T14:48:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rlhEAA"
        },
        "Id": "0jNdy0000004rlhEAA",
        "Name": "PlaygroundOmni",
        "Type": "Omni",
        "SubType": "Playground",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Omni_Playground_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-23T16:12:33.000+0000",
        "CreatedDate": "2025-09-23T16:11:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004Vq1EAE"
        },
        "Id": "0jNdy0000004Vq1EAE",
        "Name": "aoBtcCreateFunding",
        "Type": "AO",
        "SubType": "aoBtcCreateFunding",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateFunding_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-09-23T15:40:01.000+0000",
        "CreatedDate": "2025-08-19T19:15:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rXBEAY"
        },
        "Id": "0jNdy0000004rXBEAY",
        "Name": "aoBtcCreateFunding",
        "Type": "AO",
        "SubType": "aoBtcCreateFunding",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateFunding_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-09-23T13:55:32.000+0000",
        "CreatedDate": "2025-09-22T19:23:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003J1JEAU"
        },
        "Id": "0jNdy0000003J1JEAU",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-23T06:42:32.000+0000",
        "CreatedDate": "2025-06-16T04:57:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000012nlEAA"
        },
        "Id": "0jIdy00000012nlEAA",
        "Name": "DRTransformAlloyResponse",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DRTransformAlloyResponse_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-22T21:18:37.000+0000",
        "CreatedDate": "2025-07-30T12:09:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DUfEAM"
        },
        "Id": "0jIdy0000001DUfEAM",
        "Name": "aoTransformAlloyOnfidoResponse",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoTransformAlloyOnfidoResponse_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-22T14:06:24.000+0000",
        "CreatedDate": "2025-09-19T14:48:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000wATEAY"
        },
        "Id": "0jIdy0000000wATEAY",
        "Name": "caoGetLatestOTP",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetLatestOTP_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-22T12:18:32.000+0000",
        "CreatedDate": "2025-07-02T21:55:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BKnEAM"
        },
        "Id": "0jIdy0000001BKnEAM",
        "Name": "baoGetLatestOTP",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoGetLatestOTP_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-22T11:20:44.000+0000",
        "CreatedDate": "2025-09-02T07:15:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004WXZEA2"
        },
        "Id": "0jNdy0000004WXZEA2",
        "Name": "GetAlloyOnfidoStatus",
        "Type": "AO",
        "SubType": "GetAlloyOnfidoStatus",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "AO_GetAlloyOnfidoStatus_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-09-20T01:00:02.000+0000",
        "CreatedDate": "2025-08-21T15:34:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qbZEAQ"
        },
        "Id": "0jNdy0000003qbZEAQ",
        "Name": "BAO_DAO_ExistingBusinessApplicationSummary",
        "Type": "BAO",
        "SubType": "DAOApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_DAOApplicationSummary_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-19T15:25:11.000+0000",
        "CreatedDate": "2025-07-21T08:15:29.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CQXEA2"
        },
        "Id": "0jIdy0000001CQXEA2",
        "Name": "aoBtcTransformCardCaptureRequest",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformCardCaptureRequest_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-19T14:53:24.000+0000",
        "CreatedDate": "2025-09-08T15:12:11.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004rDpEAI"
        },
        "Id": "0jNdy0000004rDpEAI",
        "Name": "BAO_DAO_ExistingBusinessApplicationSummary",
        "Type": "BAO",
        "SubType": "DAOApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_DAOApplicationSummary_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-19T12:54:19.000+0000",
        "CreatedDate": "2025-09-19T12:54:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004lmjEAA"
        },
        "Id": "0jNdy0000004lmjEAA",
        "Name": "bao_testOTP",
        "Type": "BAO",
        "SubType": "TestOTP",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_TestOTP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-19T10:02:58.000+0000",
        "CreatedDate": "2025-09-02T06:52:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BpREAU"
        },
        "Id": "0jIdy0000001BpREAU",
        "Name": "aoBtcExtractApplicationProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractApplicationProducts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-18T21:12:46.000+0000",
        "CreatedDate": "2025-09-04T12:18:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003R8XEAU"
        },
        "Id": "0jNdy0000003R8XEAU",
        "Name": "AdditionalSignerBusinessApplication",
        "Type": "AdditionalSigner",
        "SubType": "BusinessApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AdditionalSigner_BusinessApplication_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-09-18T14:55:20.000+0000",
        "CreatedDate": "2025-06-26T05:10:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000tsXEAQ"
        },
        "Id": "0jIdy0000000tsXEAQ",
        "Name": "DRGetAdditionalApplicants",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetAdditionalApplicants_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-18T12:22:05.000+0000",
        "CreatedDate": "2025-06-18T05:03:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GmbEAE"
        },
        "Id": "0jNdy0000003GmbEAE",
        "Name": "AccountApplicationAccountActivity",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountActivity",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationAccountActivity_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-18T11:16:48.000+0000",
        "CreatedDate": "2025-06-10T03:36:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004r2XEAQ"
        },
        "Id": "0jNdy0000004r2XEAQ",
        "Name": "baoCountPrimaryCompanyApplicantIP",
        "Type": "BAO",
        "SubType": "CountPrimaryCompanyApplicant",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_CountPrimaryCompanyApplicant_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-18T11:14:01.000+0000",
        "CreatedDate": "2025-09-18T11:03:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DKzEAM"
        },
        "Id": "0jIdy0000001DKzEAM",
        "Name": "ExtractAdditionalPrimaryApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "ExtractAdditionalPrimaryApplicant_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-18T10:47:24.000+0000",
        "CreatedDate": "2025-09-18T10:09:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001D1dEAE"
        },
        "Id": "0jIdy0000001D1dEAE",
        "Name": "getAddedOwnersAndSigners",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "VersionNumber": 1,
        "UniqueName": "getAddedOwnersAndSigners_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-18T10:31:47.000+0000",
        "CreatedDate": "2025-09-16T09:54:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001DCvEAM"
        },
        "Id": "0jIdy0000001DCvEAM",
        "Name": "aoBtcTransformBusinessWithMbrshpxx",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformBusinessWithMbrshpxx_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-18T01:34:33.000+0000",
        "CreatedDate": "2025-09-17T19:16:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003SvpEAE"
        },
        "Id": "0jNdy0000003SvpEAE",
        "Name": "AccountApplicationAccountFunding",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAccountFunding_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-09-17T21:16:53.000+0000",
        "CreatedDate": "2025-06-30T19:58:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001D6TEAU"
        },
        "Id": "0jIdy0000001D6TEAU",
        "Name": "aoBtcGetOrgPersons",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcGetOrgPersons_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-17T19:01:53.000+0000",
        "CreatedDate": "2025-09-16T16:35:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004qrFEAQ"
        },
        "Id": "0jNdy0000004qrFEAQ",
        "Name": "AccountApplicationAboutYourBusiness",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYourBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYourBusiness_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-17T17:58:49.000+0000",
        "CreatedDate": "2025-09-17T17:14:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GkzEAE"
        },
        "Id": "0jNdy0000003GkzEAE",
        "Name": "AccountApplicationAboutYourBusiness",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYourBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYourBusiness_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-17T17:16:03.000+0000",
        "CreatedDate": "2025-06-10T03:14:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001CrxEAE"
        },
        "Id": "0jIdy0000001CrxEAE",
        "Name": "aoBtcTransformCardAuthRequest",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcTransformCardAuthRequest_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-17T14:38:44.000+0000",
        "CreatedDate": "2025-09-12T14:27:40.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rNhEAI"
        },
        "Id": "0jIdy0000000rNhEAI",
        "Name": "DRcreateBusinessPersonAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "DRcreateBusinessPersonAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-17T14:35:36.000+0000",
        "CreatedDate": "2025-06-02T07:36:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001D3FEAU"
        },
        "Id": "0jIdy0000001D3FEAU",
        "Name": "baoGetApplicationFormProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoGetApplicationFormProducts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-17T12:18:32.000+0000",
        "CreatedDate": "2025-09-16T12:10:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000012arEAA"
        },
        "Id": "0jIdy00000012arEAA",
        "Name": "DMLApplicationForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DMLApplicationForm_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-17T09:42:06.000+0000",
        "CreatedDate": "2025-07-28T10:48:11.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001D4rEAE"
        },
        "Id": "0jIdy0000001D4rEAE",
        "Name": "DRTgetAddedOwnersAndSigners",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "VersionNumber": 1,
        "UniqueName": "DRTgetAddedOwnersAndSigners_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-16T13:24:42.000+0000",
        "CreatedDate": "2025-09-16T13:13:14.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rPJEAY"
        },
        "Id": "0jIdy0000000rPJEAY",
        "Name": "updateLockedOutInPersonAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "updateLockedOutInPersonAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-16T06:45:35.000+0000",
        "CreatedDate": "2025-06-02T12:48:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000lBpEAI"
        },
        "Id": "0jIdy0000000lBpEAI",
        "Name": "DRGetOtpRecords",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetOtpRecords_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-16T06:40:26.000+0000",
        "CreatedDate": "2025-05-07T05:55:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000kNpEAI"
        },
        "Id": "0jIdy0000000kNpEAI",
        "Name": "DRCreatedOTP",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreatedOTP_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-16T05:58:35.000+0000",
        "CreatedDate": "2025-05-06T09:36:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003ImnEAE"
        },
        "Id": "0jNdy0000003ImnEAE",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_20",
        "VersionNumber": 20,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-15T05:36:36.000+0000",
        "CreatedDate": "2025-06-13T11:47:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004XgXEAU"
        },
        "Id": "0jNdy0000004XgXEAU",
        "Name": "bao_TestDNA",
        "Type": "BAO",
        "SubType": "TestDNA",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_TestDNA_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-12T13:18:37.000+0000",
        "CreatedDate": "2025-08-25T09:56:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ltBEAQ"
        },
        "Id": "0jNdy0000004ltBEAQ",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_11",
        "VersionNumber": 11,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-11T16:42:28.000+0000",
        "CreatedDate": "2025-09-02T08:48:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004oRFEAY"
        },
        "Id": "0jNdy0000004oRFEAY",
        "Name": "ConsumerCoBorrowerIdentityCheck",
        "Type": "CAO",
        "SubType": "ConsumerCoBorrowerIdentityCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerCoBorrowerIdentityCheck_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-11T16:17:11.000+0000",
        "CreatedDate": "2025-09-11T15:49:40.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004o9VEAQ"
        },
        "Id": "0jNdy0000004o9VEAQ",
        "Name": "ConsumerCoBorrowerIdentityCheck",
        "Type": "CAO",
        "SubType": "ConsumerCoBorrowerIdentityCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerCoBorrowerIdentityCheck_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-11T15:47:12.000+0000",
        "CreatedDate": "2025-09-10T16:52:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004mkPEAQ"
        },
        "Id": "0jNdy0000004mkPEAQ",
        "Name": "aoBtcCreateAccount",
        "Type": "AO",
        "SubType": "aoBtcCreateAccount",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateAccount_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-09-11T13:22:25.000+0000",
        "CreatedDate": "2025-09-04T12:38:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ljVEAQ"
        },
        "Id": "0jNdy0000004ljVEAQ",
        "Name": "ConsumerRegisterForOLB",
        "Type": "CAO",
        "SubType": "OLBRegistration",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_OLBRegistration_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-11T11:16:27.000+0000",
        "CreatedDate": "2025-09-02T05:49:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004oKnEAI"
        },
        "Id": "0jNdy0000004oKnEAI",
        "Name": "UpdateApplicantIP",
        "Type": "CAO",
        "SubType": "UpdateApplicantIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_UpdateApplicantIP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-11T10:43:43.000+0000",
        "CreatedDate": "2025-09-11T09:46:02.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003u7JEAQ"
        },
        "Id": "0jNdy0000003u7JEAQ",
        "Name": "ConsumerBankingNeeds",
        "Type": "CAO",
        "SubType": "BankingNeeds",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_BankingNeeds_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-11T10:32:00.000+0000",
        "CreatedDate": "2025-07-28T20:02:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001ClVEAU"
        },
        "Id": "0jIdy0000001ClVEAU",
        "Name": "caoUpdateAppliantDRLoad",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpdateAppliantDRLoad_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-11T10:31:02.000+0000",
        "CreatedDate": "2025-09-11T09:50:09.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vRZEAY"
        },
        "Id": "0jNdy0000003vRZEAY",
        "Name": "ConsumerPendingReview",
        "Type": "CAO",
        "SubType": "PendingReview",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_PendingReview_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-11T09:42:48.000+0000",
        "CreatedDate": "2025-07-30T19:07:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004lbREAQ"
        },
        "Id": "0jNdy0000004lbREAQ",
        "Name": "ConsumerCompletion",
        "Type": "CAO",
        "SubType": "Completion",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_Completion_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-11T09:36:53.000+0000",
        "CreatedDate": "2025-09-02T05:18:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tuPEAQ"
        },
        "Id": "0jNdy0000003tuPEAQ",
        "Name": "ConsumerNonMemAboutYou",
        "Type": "CAO",
        "SubType": "NonMemAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_NonMemAboutYou_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-11T07:03:02.000+0000",
        "CreatedDate": "2025-07-28T12:19:41.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000vxZEAQ"
        },
        "Id": "0jIdy0000000vxZEAQ",
        "Name": "caoExtractAccountByMemberNumber",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoExtractAccountByMemberNumber_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-11T06:00:04.000+0000",
        "CreatedDate": "2025-07-02T02:59:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aZZEAY"
        },
        "Id": "0jNdy0000004aZZEAY",
        "Name": "ConsumerCoBorrowerIdentityCheck",
        "Type": "CAO",
        "SubType": "ConsumerCoBorrowerIdentityCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerCoBorrowerIdentityCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-10T15:59:25.000+0000",
        "CreatedDate": "2025-08-30T04:51:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004nGfEAI"
        },
        "Id": "0jNdy0000004nGfEAI",
        "Name": "ConsumerReviewAndEditCoBoDetails",
        "Type": "CAO",
        "SubType": "ConsumerReviewAndEditCoBoDetails",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerReviewAndEditCoBoDetails_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-10T15:58:56.000+0000",
        "CreatedDate": "2025-09-06T12:47:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004o7tEAA"
        },
        "Id": "0jNdy0000004o7tEAA",
        "Name": "ConsumerAddApplicantAddress",
        "Type": "CAO",
        "SubType": "ConsumerAddApplicantAddress",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerAddApplicantAddress_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-09-10T15:50:29.000+0000",
        "CreatedDate": "2025-09-10T15:50:29.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004o6HEAQ"
        },
        "Id": "0jNdy0000004o6HEAQ",
        "Name": "ConsumerEmploymentDetails",
        "Type": "CAO",
        "SubType": "ConsumerEmploymentDetail",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerEmploymentDetail_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-09-10T15:50:26.000+0000",
        "CreatedDate": "2025-09-10T15:50:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ntNEAQ"
        },
        "Id": "0jNdy0000004ntNEAQ",
        "Name": "ConsumerEmploymentDetails",
        "Type": "CAO",
        "SubType": "ConsumerEmploymentDetail",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerEmploymentDetail_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-09-10T15:50:25.000+0000",
        "CreatedDate": "2025-09-10T00:51:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ll7EAA"
        },
        "Id": "0jNdy0000004ll7EAA",
        "Name": "ConsumerLauncher",
        "Type": "CAO",
        "SubType": "Launcher",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_Launcher_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-10T13:22:59.000+0000",
        "CreatedDate": "2025-09-02T05:53:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004nF3EAI"
        },
        "Id": "0jNdy0000004nF3EAI",
        "Name": "ConsumerAddCoBorrower",
        "Type": "CAO",
        "SubType": "ConsumerAddCoBorrower",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerAddCoBorrower_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-10T01:15:55.000+0000",
        "CreatedDate": "2025-09-06T12:02:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004nuzEAA"
        },
        "Id": "0jNdy0000004nuzEAA",
        "Name": "ConsumerAddApplicantAddress",
        "Type": "CAO",
        "SubType": "ConsumerAddApplicantAddress",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerAddApplicantAddress_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-09-10T00:52:31.000+0000",
        "CreatedDate": "2025-09-10T00:52:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004nrlEAA"
        },
        "Id": "0jNdy0000004nrlEAA",
        "Name": "ConsumerLauncher",
        "Type": "CAO",
        "SubType": "Launcher",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_Launcher_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        },
        "LastModifiedDate": "2025-09-10T00:41:21.000+0000",
        "CreatedDate": "2025-09-10T00:40:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CE1oXAAT"
            },
            "Name": "Naren Pillai"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010lxEAA"
        },
        "Id": "0jIdy00000010lxEAA",
        "Name": "caoCreateApplicantDRLoad",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoCreateApplicantDRLoad_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-09T13:18:39.000+0000",
        "CreatedDate": "2025-07-19T03:39:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000lLVEAY"
        },
        "Id": "0jIdy0000000lLVEAY",
        "Name": "DRSavePersonAssessment",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "DRSavePersonAssessment_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-09T07:26:40.000+0000",
        "CreatedDate": "2025-05-08T10:53:11.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004nRxEAI"
        },
        "Id": "0jNdy0000004nRxEAI",
        "Name": "ConsumerFundYourAccounts",
        "Type": "CAO",
        "SubType": "Funding",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_Funding_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-09-08T21:58:50.000+0000",
        "CreatedDate": "2025-09-08T20:16:05.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004QQXEA2"
        },
        "Id": "0jNdy0000004QQXEA2",
        "Name": "ConsumerLauncher",
        "Type": "CAO",
        "SubType": "Launcher",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_Launcher_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-09-08T21:49:05.000+0000",
        "CreatedDate": "2025-08-06T19:38:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rFtEAI"
        },
        "Id": "0jNdy0000003rFtEAI",
        "Name": "GenerateOTP",
        "Type": "CAO",
        "SubType": "GenerateOTP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_GenerateOTP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-08T17:15:48.000+0000",
        "CreatedDate": "2025-07-22T15:48:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vg5EAA"
        },
        "Id": "0jNdy0000003vg5EAA",
        "Name": "ConsumerLauncher",
        "Type": "CAO",
        "SubType": "Launcher",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_Launcher_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-09-08T15:04:51.000+0000",
        "CreatedDate": "2025-07-31T15:51:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004acnEAA"
        },
        "Id": "0jNdy0000004acnEAA",
        "Name": "test",
        "Type": "Test",
        "SubType": "Test",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Test_Test_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-06T12:10:55.000+0000",
        "CreatedDate": "2025-08-31T03:55:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000158vEAA"
        },
        "Id": "0jIdy000000158vEAA",
        "Name": "DREGetApplicants",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DREGetApplicants_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-05T19:04:36.000+0000",
        "CreatedDate": "2025-08-13T11:03:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aGDEAY"
        },
        "Id": "0jNdy0000004aGDEAY",
        "Name": "ActiveApplicationCheckIP",
        "Type": "CAO",
        "SubType": "ActiveApplicationCheckIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_ActiveApplicationCheckIP_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-09-05T16:20:35.000+0000",
        "CreatedDate": "2025-08-29T12:41:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ly1EAA"
        },
        "Id": "0jNdy0000004ly1EAA",
        "Name": "SeamlessLogin",
        "Type": "CAO",
        "SubType": "SeamlessLogin",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_SeamlessLogin_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-09-05T13:38:53.000+0000",
        "CreatedDate": "2025-09-02T14:45:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004mqrEAA"
        },
        "Id": "0jNdy0000004mqrEAA",
        "Name": "SeamlessLoginWelcome",
        "Type": "CAO",
        "SubType": "SeamlessLoginWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_SeamlessLoginWelcome_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-09-05T13:38:20.000+0000",
        "CreatedDate": "2025-09-04T17:11:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004a05EAA"
        },
        "Id": "0jNdy0000004a05EAA",
        "Name": "SeamlessLoginNonMemAboutYou",
        "Type": "CAO",
        "SubType": "SeamlessLoginNonMemAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_SeamlessLoginNonMemAboutYou_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-09-05T13:38:06.000+0000",
        "CreatedDate": "2025-08-29T06:00:48.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004mvhEAA"
        },
        "Id": "0jNdy0000004mvhEAA",
        "Name": "Test_Akash",
        "Type": "Test",
        "SubType": "Test",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Test_Test_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000Bww8XAAR"
            },
            "Name": "Akash Umang"
        },
        "LastModifiedDate": "2025-09-05T06:10:06.000+0000",
        "CreatedDate": "2025-09-05T06:10:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000Bww8XAAR"
            },
            "Name": "Akash Umang"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uLpEAI"
        },
        "Id": "0jNdy0000003uLpEAI",
        "Name": "ConsumerAcctAgreementsDisclosures",
        "Type": "CAO",
        "SubType": "ConsumerActAgreementDisclosure",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerActAgreementDisclosure_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-09-04T21:33:14.000+0000",
        "CreatedDate": "2025-07-29T08:00:15.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vY1EAI"
        },
        "Id": "0jNdy0000003vY1EAI",
        "Name": "ConsumerSecurityAndIdentification",
        "Type": "CAO",
        "SubType": "SecurityandIdentification",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_SecurityandIdentification_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-09-04T21:17:37.000+0000",
        "CreatedDate": "2025-07-30T21:16:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BW5EAM"
        },
        "Id": "0jIdy0000001BW5EAM",
        "Name": "aoBtcExtractAccountsPersonal",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAccountsPersonal_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-04T18:24:28.000+0000",
        "CreatedDate": "2025-09-02T15:45:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004m2rEAA"
        },
        "Id": "0jNdy0000004m2rEAA",
        "Name": "aoBtcCreateAccount",
        "Type": "AO",
        "SubType": "aoBtcCreateAccount",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateAccount_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-09-04T14:48:23.000+0000",
        "CreatedDate": "2025-09-02T15:43:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004mm1EAA"
        },
        "Id": "0jNdy0000004mm1EAA",
        "Name": "ConsumerAddressDetailsIP",
        "Type": "CAO",
        "SubType": "ConsumerAddressDetailIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerAddressDetailIP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-04T14:41:38.000+0000",
        "CreatedDate": "2025-09-04T14:28:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BxVEAU"
        },
        "Id": "0jIdy0000001BxVEAU",
        "Name": "aoPostAddressDetail",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "aoPostAddressDetail_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-04T14:39:37.000+0000",
        "CreatedDate": "2025-09-04T14:29:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BflEAE"
        },
        "Id": "0jIdy0000001BflEAE",
        "Name": "aoBtcExtractAccountsPersonalTest",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractAccountsPersonalTest_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-04T13:16:49.000+0000",
        "CreatedDate": "2025-09-04T02:46:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004mfZEAQ"
        },
        "Id": "0jNdy0000004mfZEAQ",
        "Name": "CAOcreateUpdatecoBorrowerDetails",
        "Type": "CAO",
        "SubType": "createUpdatecoBorrowerDetails",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_createUpdatecoBorrowerDetails_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-09-04T11:15:03.000+0000",
        "CreatedDate": "2025-09-04T11:10:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BnpEAE"
        },
        "Id": "0jIdy0000001BnpEAE",
        "Name": "caoTransformCoBoDetails",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "VersionNumber": 1,
        "UniqueName": "caoTransformCoBoDetails_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-04T11:12:55.000+0000",
        "CreatedDate": "2025-09-04T11:12:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004mdxEAA"
        },
        "Id": "0jNdy0000004mdxEAA",
        "Name": "ConsumerRegisterForOLB",
        "Type": "CAO",
        "SubType": "OLBRegistration",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_OLBRegistration_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-04T10:44:06.000+0000",
        "CreatedDate": "2025-09-04T10:44:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ZYfEAM"
        },
        "Id": "0jNdy0000004ZYfEAM",
        "Name": "CallFullDNA",
        "Type": "CAO",
        "SubType": "CallFullDNA",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_CallFullDNA_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-04T08:19:48.000+0000",
        "CreatedDate": "2025-08-28T08:15:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003eYnEAI"
        },
        "Id": "0jNdy0000003eYnEAI",
        "Name": "CallDNA",
        "Type": "CAO",
        "SubType": "CallDNA",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_CallDNA_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-04T08:14:05.000+0000",
        "CreatedDate": "2025-07-07T17:36:48.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tw1EAA"
        },
        "Id": "0jNdy0000003tw1EAA",
        "Name": "ConsumerOTPVerification",
        "Type": "CAO",
        "SubType": "OTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_OTPVerification_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-04T08:00:52.000+0000",
        "CreatedDate": "2025-07-28T12:21:49.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rQvEAI"
        },
        "Id": "0jIdy0000000rQvEAI",
        "Name": "baoGetAdditionalOwnerDetails",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "baoGetAdditionalOwnerDetails_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-03T22:35:22.000+0000",
        "CreatedDate": "2025-06-02T15:16:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004mE9EAI"
        },
        "Id": "0jNdy0000004mE9EAI",
        "Name": "aoBtcCreateAccount",
        "Type": "AO",
        "SubType": "aoBtcCreateAccount",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreateAccount_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-09-03T20:57:45.000+0000",
        "CreatedDate": "2025-09-03T16:14:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018d3EAA"
        },
        "Id": "0jIdy00000018d3EAA",
        "Name": "aoBtcExtractPersonWithMembership",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "aoBtcExtractPersonWithMembership_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-03T15:56:18.000+0000",
        "CreatedDate": "2025-08-28T22:46:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BELEA2"
        },
        "Id": "0jIdy0000001BELEA2",
        "Name": "caoUpdateApplicationFormApprovedAfterFundingDRPost",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpdateApplicationFormApprovedAfterFundingDRPost_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-03T10:09:42.000+0000",
        "CreatedDate": "2025-09-02T06:43:49.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BavEAE"
        },
        "Id": "0jIdy0000001BavEAE",
        "Name": "CAOCoborrowerAndProductInfo",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "VersionNumber": 1,
        "UniqueName": "CAOCoborrowerAndProductInfo_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-03T08:43:55.000+0000",
        "CreatedDate": "2025-09-03T06:16:14.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004XGjEAM"
        },
        "Id": "0jNdy0000004XGjEAM",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_8",
        "VersionNumber": 8,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-09-03T06:21:39.000+0000",
        "CreatedDate": "2025-08-23T14:51:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BZJEA2"
        },
        "Id": "0jIdy0000001BZJEA2",
        "Name": "testProductIdFetch",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "VersionNumber": 1,
        "UniqueName": "testProductIdFetch_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-03T03:33:30.000+0000",
        "CreatedDate": "2025-09-03T02:19:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004lgHEAQ"
        },
        "Id": "0jNdy0000004lgHEAQ",
        "Name": "CheckApplicantStatusAfterFundingIP",
        "Type": "CAO",
        "SubType": "CheckApplicantStatusAfterFundingIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_CheckApplicantStatusAfterFundingIP_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-02T16:27:13.000+0000",
        "CreatedDate": "2025-09-02T05:35:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BCjEAM"
        },
        "Id": "0jIdy0000001BCjEAM",
        "Name": "caoGetApprovedApplicationDRExtract",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetApprovedApplicationDRExtract_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-02T16:05:41.000+0000",
        "CreatedDate": "2025-09-02T05:42:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010kLEAQ"
        },
        "Id": "0jIdy00000010kLEAQ",
        "Name": "caoCreateApplicationFormDRLoad",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoCreateApplicationFormDRLoad_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-02T11:15:08.000+0000",
        "CreatedDate": "2025-07-19T03:27:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BPdEAM"
        },
        "Id": "0jIdy0000001BPdEAM",
        "Name": "baoDRUserExistsClone",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRUserExistsClone_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-02T07:56:17.000+0000",
        "CreatedDate": "2025-09-02T07:55:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BO1EAM"
        },
        "Id": "0jIdy0000001BO1EAM",
        "Name": "baoUpdateAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoUpdateAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-02T07:20:41.000+0000",
        "CreatedDate": "2025-09-02T07:20:41.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000x89EAA"
        },
        "Id": "0jIdy0000000x89EAA",
        "Name": "caoUpdateAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpdateAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-02T07:20:29.000+0000",
        "CreatedDate": "2025-07-03T18:20:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BMPEA2"
        },
        "Id": "0jIdy0000001BMPEA2",
        "Name": "baoUpdateOTP",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoUpdateOTP_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-02T07:19:59.000+0000",
        "CreatedDate": "2025-09-02T07:19:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004TrREAU"
        },
        "Id": "0jNdy0000004TrREAU",
        "Name": "ConsumerCompletion",
        "Type": "CAO",
        "SubType": "Completion",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_Completion_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-02T07:10:22.000+0000",
        "CreatedDate": "2025-08-13T18:33:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001BHZEA2"
        },
        "Id": "0jIdy0000001BHZEA2",
        "Name": "baoUpdateOTPs",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoUpdateOTPs_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-02T07:02:52.000+0000",
        "CreatedDate": "2025-09-02T07:02:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000xCzEAI"
        },
        "Id": "0jIdy0000000xCzEAI",
        "Name": "caoUpdateOTPs",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpdateOTPs_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-02T07:02:00.000+0000",
        "CreatedDate": "2025-07-03T21:28:21.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003JAzEAM"
        },
        "Id": "0jNdy0000003JAzEAM",
        "Name": "IPsaveFundingAccount",
        "Type": "Funding",
        "SubType": "Account",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Funding_Account_Procedure_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-09-02T06:38:00.000+0000",
        "CreatedDate": "2025-06-16T06:41:40.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000iNdEAI"
        },
        "Id": "0jIdy0000000iNdEAI",
        "Name": "DRLoadCreateFundingAccountTranscation",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRLoadCreateFundingAccountTranscation_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-09-02T06:36:04.000+0000",
        "CreatedDate": "2025-04-22T04:38:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ld3EAA"
        },
        "Id": "0jNdy0000004ld3EAA",
        "Name": "ConsumerAlloyCheckAfterFunding",
        "Type": "CAO",
        "SubType": "ConsumerAlloyCheckAfterFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerAlloyCheckAfterFunding_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-02T06:05:41.000+0000",
        "CreatedDate": "2025-09-02T05:24:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004akrEAA"
        },
        "Id": "0jNdy0000004akrEAA",
        "Name": "ConsumerDenial",
        "Type": "CAO",
        "SubType": "Denial",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_Denial_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-02T05:59:38.000+0000",
        "CreatedDate": "2025-09-01T11:06:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004amTEAQ"
        },
        "Id": "0jNdy0000004amTEAQ",
        "Name": "ConsumerDeniedStatusApplicantIP",
        "Type": "CAO",
        "SubType": "ConsumerDeniedStatusApplicantIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerDeniedStatusApplicantIP_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-02T05:59:23.000+0000",
        "CreatedDate": "2025-09-01T11:09:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004lhtEAA"
        },
        "Id": "0jNdy0000004lhtEAA",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_10",
        "VersionNumber": 10,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-09-02T05:40:31.000+0000",
        "CreatedDate": "2025-09-02T05:40:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018unEAA"
        },
        "Id": "0jIdy00000018unEAA",
        "Name": "caoGetDeniedApplicationDRExtract",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetDeniedApplicationDRExtract_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-09-02T05:22:08.000+0000",
        "CreatedDate": "2025-09-01T11:10:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004lUzEAI"
        },
        "Id": "0jNdy0000004lUzEAI",
        "Name": "ConsumerAddApplicantAddress",
        "Type": "CAO",
        "SubType": "ConsumerAddApplicantAddress",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerAddApplicantAddress_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-09-01T12:23:10.000+0000",
        "CreatedDate": "2025-09-01T12:23:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vTBEAY"
        },
        "Id": "0jNdy0000003vTBEAY",
        "Name": "ConsumerDenial",
        "Type": "CAO",
        "SubType": "Denial",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_Denial_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-09-01T11:29:41.000+0000",
        "CreatedDate": "2025-07-30T19:08:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002SrREAU"
        },
        "Id": "0jNdy0000002SrREAU",
        "Name": "bao_acct_application",
        "Type": "Test",
        "SubType": "Integration",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Test_Integration_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CaDz7AAF"
            },
            "Name": "Sandesh Reddy"
        },
        "LastModifiedDate": "2025-08-31T04:18:50.000+0000",
        "CreatedDate": "2025-04-30T14:09:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aXxEAI"
        },
        "Id": "0jNdy0000004aXxEAI",
        "Name": "caoCheckJointOwnerRequests",
        "Type": "CAO",
        "SubType": "JointOwner",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_JointOwner_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-30T04:39:11.000+0000",
        "CreatedDate": "2025-08-30T04:01:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018tBEAQ"
        },
        "Id": "0jIdy00000018tBEAQ",
        "Name": "caoGetJointOwnerRequest",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetJointOwnerRequest_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-30T04:15:16.000+0000",
        "CreatedDate": "2025-08-30T04:03:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aWLEAY"
        },
        "Id": "0jNdy0000004aWLEAY",
        "Name": "ConsumerJointOwnerInvitation",
        "Type": "CAO",
        "SubType": "JointOwner",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_JointOwner_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-30T03:53:31.000+0000",
        "CreatedDate": "2025-08-30T03:52:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018oLEAQ"
        },
        "Id": "0jIdy00000018oLEAQ",
        "Name": "caoGetUserInformation",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetUserInformation_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-29T23:01:16.000+0000",
        "CreatedDate": "2025-08-29T22:46:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aT7EAI"
        },
        "Id": "0jNdy0000004aT7EAI",
        "Name": "ConsumerAddJointLauncher",
        "Type": "CAO",
        "SubType": "AddJoint",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_AddJoint_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-29T22:39:51.000+0000",
        "CreatedDate": "2025-08-29T22:39:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aPtEAI"
        },
        "Id": "0jNdy0000004aPtEAI",
        "Name": "aoBtcCreatePersonWithMembership",
        "Type": "AO",
        "SubType": "aoBtcCreatePersonWithMembership",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "AO_aoBtcCreatePersonWithMembership_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-08-29T20:23:37.000+0000",
        "CreatedDate": "2025-08-29T19:49:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018jVEAQ"
        },
        "Id": "0jIdy00000018jVEAQ",
        "Name": "aoPostEmploymentDetail",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "aoPostEmploymentDetail_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-29T16:12:39.000+0000",
        "CreatedDate": "2025-08-29T07:00:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ZyTEAU"
        },
        "Id": "0jNdy0000004ZyTEAU",
        "Name": "ConsumerEmploymentDetailsIP",
        "Type": "CAO",
        "SubType": "ConsumerEmploymentDetailIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_ConsumerEmploymentDetailIP_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-08-29T14:50:30.000+0000",
        "CreatedDate": "2025-08-29T05:24:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018l7EAA"
        },
        "Id": "0jIdy00000018l7EAA",
        "Name": "aoFetchEmploymentDetail",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "aoFetchEmploymentDetail_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-29T14:23:21.000+0000",
        "CreatedDate": "2025-08-29T07:48:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tsnEAA"
        },
        "Id": "0jNdy0000003tsnEAA",
        "Name": "ActiveApplicationCheckIP",
        "Type": "CAO",
        "SubType": "ActiveApplicationCheckIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_ActiveApplicationCheckIP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-29T13:19:23.000+0000",
        "CreatedDate": "2025-07-28T12:14:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uKDEAY"
        },
        "Id": "0jNdy0000003uKDEAY",
        "Name": "ConsumerBlockApplicantScreen",
        "Type": "CAO",
        "SubType": "PendingApplications",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_PendingApplications_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-29T12:54:00.000+0000",
        "CreatedDate": "2025-07-29T05:32:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aEbEAI"
        },
        "Id": "0jNdy0000004aEbEAI",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_9",
        "VersionNumber": 9,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-08-29T12:01:02.000+0000",
        "CreatedDate": "2025-08-29T12:01:02.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004a1hEAA"
        },
        "Id": "0jNdy0000004a1hEAA",
        "Name": "ActiveApplicationCheckIP",
        "Type": "CAO",
        "SubType": "ActiveApplicationCheckIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_ActiveApplicationCheckIP_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-29T11:20:41.000+0000",
        "CreatedDate": "2025-08-29T06:49:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004R9hEAE"
        },
        "Id": "0jNdy0000004R9hEAE",
        "Name": "bao_BusinessPortalLanding",
        "Type": "Portal",
        "SubType": "Landing",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Portal_Landing_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-08-29T11:18:10.000+0000",
        "CreatedDate": "2025-08-08T10:59:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004aBNEAY"
        },
        "Id": "0jNdy0000004aBNEAY",
        "Name": "AccountApplicationOTPVerification",
        "Type": "BAO",
        "SubType": "AccountApplicationOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationOTPVerification_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-08-29T10:43:28.000+0000",
        "CreatedDate": "2025-08-29T10:43:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003p61EAA"
        },
        "Id": "0jNdy0000003p61EAA",
        "Name": "StatusCenter",
        "Type": "BAO",
        "SubType": "StatusCenter",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_StatusCenter_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008POovAAG"
            },
            "Name": "Ahsen Syed"
        },
        "LastModifiedDate": "2025-08-28T17:53:22.000+0000",
        "CreatedDate": "2025-07-14T15:19:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011WjEAI"
        },
        "Id": "0jIdy00000011WjEAI",
        "Name": "DREGetEmailTemplate",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "VersionNumber": 1,
        "UniqueName": "DREGetEmailTemplate_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-28T12:45:23.000+0000",
        "CreatedDate": "2025-07-24T11:39:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000001061EAA"
        },
        "Id": "0jIdy0000001061EAA",
        "Name": "DRGetTerritoryAssignmentBasedOnCounty",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetTerritoryAssignmentBasedOnCounty_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-28T07:39:45.000+0000",
        "CreatedDate": "2025-07-16T10:40:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000iYvEAI"
        },
        "Id": "0jIdy0000000iYvEAI",
        "Name": "DRTransFormPrimaryApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRTransFormPrimaryApplicant_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-28T07:34:01.000+0000",
        "CreatedDate": "2025-04-23T10:00:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011TVEAY"
        },
        "Id": "0jIdy00000011TVEAY",
        "Name": "caoUpsertApplicantBundleV2",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertApplicantBundleV2_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-28T03:49:55.000+0000",
        "CreatedDate": "2025-07-24T11:03:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qGbEAI"
        },
        "Id": "0jNdy0000003qGbEAI",
        "Name": "caoCreateRecordsBundleIP",
        "Type": "CAO",
        "SubType": "CreateRecordsBundleIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_CreateRecordsBundleIP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-28T03:35:31.000+0000",
        "CreatedDate": "2025-07-19T05:05:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004SCDEA2"
        },
        "Id": "0jNdy0000004SCDEA2",
        "Name": "MembershipEligibilitySave",
        "Type": "CAO",
        "SubType": "MembershipEligibilitySave",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_MembershipEligibilitySave_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-27T22:19:53.000+0000",
        "CreatedDate": "2025-08-11T14:30:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010cHEAQ"
        },
        "Id": "0jIdy00000010cHEAQ",
        "Name": "caoUpsertApplicationFormProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertApplicationFormProducts_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-27T16:32:59.000+0000",
        "CreatedDate": "2025-07-18T15:12:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018MvEAI"
        },
        "Id": "0jIdy00000018MvEAI",
        "Name": "caoUpsertApplicationFormProductsDoNotUseV1",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertApplicationFormProductsDoNotUseV1_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-27T16:32:28.000+0000",
        "CreatedDate": "2025-08-27T16:23:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000018Q9EAI"
        },
        "Id": "0jIdy00000018Q9EAI",
        "Name": "caoUpsertApplicationFormProductsDoNotUseV2",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertApplicationFormProductsDoNotUseV2_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-27T16:32:08.000+0000",
        "CreatedDate": "2025-08-27T16:32:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ZDhEAM"
        },
        "Id": "0jNdy0000004ZDhEAM",
        "Name": "ConsumerOTPVerification",
        "Type": "CAO",
        "SubType": "OTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_OTPVerification_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-08-27T14:41:12.000+0000",
        "CreatedDate": "2025-08-27T14:41:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004ZC5EAM"
        },
        "Id": "0jNdy0000004ZC5EAM",
        "Name": "UpdateApplicationFormAndLeadWithAppLink",
        "Type": "BAO",
        "SubType": "UpdateApplicationFormAndLeadWithAppLink",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_UpdateApplicationFormAndLeadWithAppLink_Procedure_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-27T13:48:52.000+0000",
        "CreatedDate": "2025-08-27T12:05:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003v6bEAA"
        },
        "Id": "0jNdy0000003v6bEAA",
        "Name": "UpdateApplicationFormAndLeadWithAppLink",
        "Type": "BAO",
        "SubType": "UpdateApplicationFormAndLeadWithAppLink",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "BAO_UpdateApplicationFormAndLeadWithAppLink_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-27T12:05:44.000+0000",
        "CreatedDate": "2025-07-30T10:44:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000pddEAA"
        },
        "Id": "0jIdy0000000pddEAA",
        "Name": "baoUpdateApplicationFormAndLeadWithAppLink",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoUpdateApplicationFormAndLeadWithAppLink_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-27T07:42:51.000+0000",
        "CreatedDate": "2025-05-29T19:23:29.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004WcPEAU"
        },
        "Id": "0jNdy0000004WcPEAU",
        "Name": "ConsumerMembershipEligibility",
        "Type": "CAO",
        "SubType": "MembershipEligibility",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_MembershipEligibility_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-26T23:06:24.000+0000",
        "CreatedDate": "2025-08-21T19:31:41.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vszEAA"
        },
        "Id": "0jNdy0000003vszEAA",
        "Name": "MembershipEligibilityCheck",
        "Type": "CAO",
        "SubType": "MembershipEligibilityCheck",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_MembershipEligibilityCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-08-26T21:55:43.000+0000",
        "CreatedDate": "2025-08-01T02:45:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vHtEAI"
        },
        "Id": "0jNdy0000003vHtEAI",
        "Name": "ConsumerAlloyInitialization",
        "Type": "CAO",
        "SubType": "AlloyInitialization",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_AlloyInitialization_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-26T11:38:12.000+0000",
        "CreatedDate": "2025-07-30T15:21:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004UtxEAE"
        },
        "Id": "0jNdy0000004UtxEAE",
        "Name": "caoAlloyControllerForPerson",
        "Type": "CAO",
        "SubType": "AlloyControllerForPerson",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_AlloyControllerForPerson_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-26T11:32:41.000+0000",
        "CreatedDate": "2025-08-18T16:51:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000016g5EAA"
        },
        "Id": "0jIdy00000016g5EAA",
        "Name": "ProductTypeEqualsChecking",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "ProductTypeEqualsChecking_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-25T21:35:30.000+0000",
        "CreatedDate": "2025-08-21T17:20:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004XmzEAE"
        },
        "Id": "0jNdy0000004XmzEAE",
        "Name": "ConsumerEmploymentDetails",
        "Type": "CAO",
        "SubType": "ConsumerEmploymentDetail",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerEmploymentDetail_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        },
        "LastModifiedDate": "2025-08-25T16:59:28.000+0000",
        "CreatedDate": "2025-08-25T14:58:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CP0ltAAD"
            },
            "Name": "Chirag Mogra"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004XevEAE"
        },
        "Id": "0jNdy0000004XevEAE",
        "Name": "BAO_Test_Omni",
        "Type": "BAO",
        "SubType": "TestOmni",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_TestOmni_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-25T11:30:00.000+0000",
        "CreatedDate": "2025-08-25T09:54:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tzFEAQ"
        },
        "Id": "0jNdy0000003tzFEAQ",
        "Name": "ConsumerMemberAboutYou",
        "Type": "CAO",
        "SubType": "MemberAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_MemberAboutYou_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-25T05:21:57.000+0000",
        "CreatedDate": "2025-07-28T16:10:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003Rq5EAE"
        },
        "Id": "0jNdy0000003Rq5EAE",
        "Name": "AccountApplicationWelcome",
        "Type": "BAO",
        "SubType": "AccountApplicationWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationWelcome_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-23T17:50:17.000+0000",
        "CreatedDate": "2025-06-27T02:26:29.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003trBEAQ"
        },
        "Id": "0jNdy0000003trBEAQ",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-22T22:55:20.000+0000",
        "CreatedDate": "2025-07-28T11:04:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004We1EAE"
        },
        "Id": "0jNdy0000004We1EAE",
        "Name": "baoAlloyControllerForPerson",
        "Type": "BAO",
        "SubType": "AlloyControllerForPerson",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "BAO_AlloyControllerForPerson_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-22T22:30:19.000+0000",
        "CreatedDate": "2025-08-21T20:05:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000174HEAQ"
        },
        "Id": "0jIdy000000174HEAQ",
        "Name": "GetApplicantIdFromApplicationForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "GetApplicantIdFromApplicationForm_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-22T17:52:13.000+0000",
        "CreatedDate": "2025-08-22T14:20:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000016jJEAQ"
        },
        "Id": "0jIdy00000016jJEAQ",
        "Name": "updateTestAppForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "updateTestAppForm_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-22T11:43:35.000+0000",
        "CreatedDate": "2025-08-22T10:23:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qTVEAY"
        },
        "Id": "0jNdy0000003qTVEAY",
        "Name": "BAO_DAO_ExsitingBusinessAdditionalOwnersandSigners",
        "Type": "BAO",
        "SubType": "DAOAdditionalOwnersandSigners",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOAdditionalOwnersandSigners_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-22T04:47:19.000+0000",
        "CreatedDate": "2025-07-21T07:54:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000aujEAA"
        },
        "Id": "0jIdy0000000aujEAA",
        "Name": "baoDRGetHousholdAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRGetHousholdAccount_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-22T04:25:52.000+0000",
        "CreatedDate": "2025-03-07T09:48:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010IvEAI"
        },
        "Id": "0jIdy00000010IvEAI",
        "Name": "caoUpsertApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertApplicant_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-21T23:11:33.000+0000",
        "CreatedDate": "2025-07-16T19:26:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004WanEAE"
        },
        "Id": "0jNdy0000004WanEAE",
        "Name": "CheckPendingReview",
        "Type": "CAO",
        "SubType": "CheckPendingReview",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_CheckPendingReview_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-08-21T18:54:34.000+0000",
        "CreatedDate": "2025-08-21T18:54:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000sV3EAI"
        },
        "Id": "0jIdy0000000sV3EAI",
        "Name": "DRCheckMemberHaveCheckingProduct",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCheckMemberHaveCheckingProduct_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-21T17:30:36.000+0000",
        "CreatedDate": "2025-06-06T11:00:21.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004TMnEAM"
        },
        "Id": "0jNdy0000004TMnEAM",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_12",
        "VersionNumber": 12,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-21T13:59:23.000+0000",
        "CreatedDate": "2025-08-12T21:29:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004WJ3EAM"
        },
        "Id": "0jNdy0000004WJ3EAM",
        "Name": "CAO_TestIP",
        "Type": "CAO",
        "SubType": "TestIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_TestIP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-21T07:30:25.000+0000",
        "CreatedDate": "2025-08-21T06:57:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004WEDEA2"
        },
        "Id": "0jNdy0000004WEDEA2",
        "Name": "CAO_TestOmni",
        "Type": "CAO",
        "SubType": "TestOmni",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_TestOmni_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-21T06:58:35.000+0000",
        "CreatedDate": "2025-08-21T06:46:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004WHREA2"
        },
        "Id": "0jNdy0000004WHREA2",
        "Name": "CAO_TestOmni",
        "Type": "CAO",
        "SubType": "TestOmni",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_TestOmni_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-21T06:58:35.000+0000",
        "CreatedDate": "2025-08-21T06:57:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rqzEAA"
        },
        "Id": "0jNdy0000003rqzEAA",
        "Name": "UpsertApplicantBundle",
        "Type": "CAO",
        "SubType": "UpsertApplicantBundle",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_UpsertApplicantBundle_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-20T15:02:00.000+0000",
        "CreatedDate": "2025-07-24T10:22:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000016RZEAY"
        },
        "Id": "0jIdy00000016RZEAY",
        "Name": "MockDataAuthNet",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "MockDataAuthNet_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-19T20:00:34.000+0000",
        "CreatedDate": "2025-08-19T19:49:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003RA9EAM"
        },
        "Id": "0jNdy0000003RA9EAM",
        "Name": "GetAlloyAdditionalPerson",
        "Type": "GetAdditionalPerson",
        "SubType": "GetAlloyAdditionalPerson",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "GetAdditionalPerson_GetAlloyAdditionalPerson_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-19T12:25:18.000+0000",
        "CreatedDate": "2025-06-26T05:31:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000k7hEAA"
        },
        "Id": "0jIdy0000000k7hEAA",
        "Name": "DRTransformNewPersonApplicationPayload",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRTransformNewPersonApplicationPayload_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-19T12:22:27.000+0000",
        "CreatedDate": "2025-05-01T15:14:21.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000015VVEAY"
        },
        "Id": "0jIdy00000015VVEAY",
        "Name": "updateUser",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "updateUser_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-19T08:21:53.000+0000",
        "CreatedDate": "2025-08-14T07:57:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004TzVEAU"
        },
        "Id": "0jNdy0000004TzVEAU",
        "Name": "BAOUpdateUser",
        "Type": "BAO",
        "SubType": "UpdateUser",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_UpdateUser_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-19T08:21:06.000+0000",
        "CreatedDate": "2025-08-14T08:20:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003lbtEAA"
        },
        "Id": "0jNdy0000003lbtEAA",
        "Name": "AccountApplicationSelectAccounts",
        "Type": "BAO",
        "SubType": "AccountApplicationSelectAccounts",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationSelectAccounts_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-19T07:21:16.000+0000",
        "CreatedDate": "2025-07-11T07:19:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rz3EAA"
        },
        "Id": "0jNdy0000003rz3EAA",
        "Name": "caoPreparePayloadToAlloy",
        "Type": "CAO",
        "SubType": "PreparePayloadToAlloy",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_PreparePayloadToAlloy_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-18T17:17:33.000+0000",
        "CreatedDate": "2025-07-24T13:44:02.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004UqjEAE"
        },
        "Id": "0jNdy0000004UqjEAE",
        "Name": "ConsumerOnfidoStepUp",
        "Type": "CAO",
        "SubType": "ConsumerOnfidoStepUp",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerOnfidoStepUp_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-08-18T14:18:57.000+0000",
        "CreatedDate": "2025-08-18T14:18:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004U17EAE"
        },
        "Id": "0jNdy0000004U17EAE",
        "Name": "OnlineBankingCheck",
        "Type": "CAO",
        "SubType": "OnlineBankingCheck",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_OnlineBankingCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-08-14T14:00:42.000+0000",
        "CreatedDate": "2025-08-14T13:29:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000015YjEAI"
        },
        "Id": "0jIdy00000015YjEAI",
        "Name": "caoOnlineBankingCheck",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoOnlineBankingCheck_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-14T14:00:29.000+0000",
        "CreatedDate": "2025-08-14T13:48:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000vvxEAA"
        },
        "Id": "0jIdy0000000vvxEAA",
        "Name": "caoInsertOTP",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoInsertOTP_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-14T13:29:51.000+0000",
        "CreatedDate": "2025-07-02T02:31:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vBREAY"
        },
        "Id": "0jNdy0000003vBREAY",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_11",
        "VersionNumber": 11,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-13T13:46:55.000+0000",
        "CreatedDate": "2025-07-30T12:57:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004TTFEA2"
        },
        "Id": "0jNdy0000004TTFEA2",
        "Name": "CreateTasks",
        "Type": "Create",
        "SubType": "Task",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Create_Task_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-08-13T11:00:11.000+0000",
        "CreatedDate": "2025-08-13T10:58:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004TQ1EAM"
        },
        "Id": "0jNdy0000004TQ1EAM",
        "Name": "TestAccountCreation",
        "Type": "AccountCreation",
        "SubType": "usingApex",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "AccountCreation_usingApex_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-13T08:09:07.000+0000",
        "CreatedDate": "2025-08-13T07:33:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000157JEAQ"
        },
        "Id": "0jIdy000000157JEAQ",
        "Name": "testCreateAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "testCreateAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-13T07:39:15.000+0000",
        "CreatedDate": "2025-08-13T07:37:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000155hEAA"
        },
        "Id": "0jIdy000000155hEAA",
        "Name": "DRCreateMemberShipProduct",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreateMemberShipProduct_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-13T06:53:22.000+0000",
        "CreatedDate": "2025-08-13T06:53:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003ROfEAM"
        },
        "Id": "0jNdy0000003ROfEAM",
        "Name": "AccountApplicationApplicationBlock",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationBlock",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationApplicationBlock_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-12T07:14:55.000+0000",
        "CreatedDate": "2025-06-26T16:50:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000014eHEAQ"
        },
        "Id": "0jIdy00000014eHEAQ",
        "Name": "caoGetDonationProductByName",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetDonationProductByName_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-11T21:21:52.000+0000",
        "CreatedDate": "2025-08-11T21:18:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000127pEAA"
        },
        "Id": "0jIdy000000127pEAA",
        "Name": "caoApplicationPayloadDRTransform",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "caoApplicationPayloadDRTransform_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-11T21:16:39.000+0000",
        "CreatedDate": "2025-07-25T13:40:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000014b3EAA"
        },
        "Id": "0jIdy00000014b3EAA",
        "Name": "caoGetDonationApplicationFormProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetDonationApplicationFormProducts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-11T19:54:31.000+0000",
        "CreatedDate": "2025-08-11T19:25:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002l2rEAA"
        },
        "Id": "0jNdy0000002l2rEAA",
        "Name": "bao_BusinessPortalLanding",
        "Type": "Portal",
        "SubType": "Landing",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Portal_Landing_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-11T05:59:30.000+0000",
        "CreatedDate": "2025-06-03T07:24:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002l4TEAQ"
        },
        "Id": "0jNdy0000002l4TEAQ",
        "Name": "BaoPortalOtpCodeResend",
        "Type": "Portalotp",
        "SubType": "Resen",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Portalotp_Resen_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-11T05:29:37.000+0000",
        "CreatedDate": "2025-06-03T09:35:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000046hxEAA"
        },
        "Id": "0jNdy00000046hxEAA",
        "Name": "checkOpenApplicationForms",
        "Type": "StatusCenter",
        "SubType": "LandingPage",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "StatusCenter_LandingPage_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-08T22:30:02.000+0000",
        "CreatedDate": "2025-08-01T22:28:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004R4rEAE"
        },
        "Id": "0jNdy0000004R4rEAE",
        "Name": "NoApplicationsFound",
        "Type": "StatusCenter",
        "SubType": "StatusCenterNoAppsFound",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "StatusCenter_StatusCenterNoAppsFound_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-08T20:18:09.000+0000",
        "CreatedDate": "2025-08-08T03:34:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000t7lEAA"
        },
        "Id": "0jIdy0000000t7lEAA",
        "Name": "DRgetDataForBussinessAssignment",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRgetDataForBussinessAssignment_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-08T17:20:52.000+0000",
        "CreatedDate": "2025-06-12T05:46:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000004RBJEA2"
        },
        "Id": "0jNdy0000004RBJEA2",
        "Name": "IP_GuestUser_Call",
        "Type": "OTPCode",
        "SubType": "Resend",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "OTPCode_Resend_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-08-08T13:18:29.000+0000",
        "CreatedDate": "2025-08-08T12:41:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002UgLEAU"
        },
        "Id": "0jNdy0000002UgLEAU",
        "Name": "IP_OTPCode_Resend",
        "Type": "OTPCode",
        "SubType": "Resend",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "OTPCode_Resend_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-08-08T13:18:29.000+0000",
        "CreatedDate": "2025-05-07T06:41:49.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003ppBEAQ"
        },
        "Id": "0jNdy0000003ppBEAQ",
        "Name": "bao_ExistingUserLogin",
        "Type": "Existing",
        "SubType": "Login",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Existing_Login_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-08T10:34:29.000+0000",
        "CreatedDate": "2025-07-17T12:22:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000046gLEAQ"
        },
        "Id": "0jNdy00000046gLEAQ",
        "Name": "LandingPage",
        "Type": "StatusCenter",
        "SubType": "StatusCenterHome",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "StatusCenter_StatusCenterHome_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-08T03:39:41.000+0000",
        "CreatedDate": "2025-08-01T22:20:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000Z5pEAE"
        },
        "Id": "0jIdy0000000Z5pEAE",
        "Name": "baoDRExtractPersonAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRExtractPersonAccount_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-07T13:00:04.000+0000",
        "CreatedDate": "2025-02-28T07:25:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010QzEAI"
        },
        "Id": "0jIdy00000010QzEAI",
        "Name": "getApplicationForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "getApplicationForm_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-07T07:37:17.000+0000",
        "CreatedDate": "2025-07-17T07:31:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000104PEAQ"
        },
        "Id": "0jIdy000000104PEAQ",
        "Name": "DRUpdateApplicationForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRUpdateApplicationForm_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-07T07:17:11.000+0000",
        "CreatedDate": "2025-07-16T10:37:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000046zhEAA"
        },
        "Id": "0jNdy00000046zhEAA",
        "Name": "IdentityDocumentAndApplicant",
        "Type": "CAO",
        "SubType": "IdentityDocumentAndApplicant",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_IdentityDocumentAndApplicant_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-06T19:37:25.000+0000",
        "CreatedDate": "2025-08-04T20:29:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010NlEAI"
        },
        "Id": "0jIdy00000010NlEAI",
        "Name": "caoUpsertApplicantBundle",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertApplicantBundle_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-06T18:07:39.000+0000",
        "CreatedDate": "2025-07-16T20:19:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011DNEAY"
        },
        "Id": "0jIdy00000011DNEAY",
        "Name": "caoUpsertAccountDRLoad",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertAccountDRLoad_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-06T07:00:39.000+0000",
        "CreatedDate": "2025-07-23T07:10:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qYLEAY"
        },
        "Id": "0jNdy0000003qYLEAY",
        "Name": "BAO_DAO_ExistingBusinessAccountAgreementAndDisclosures",
        "Type": "BAO",
        "SubType": "DAOAccountAgreementAndDisclosures",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOAccountAgreementAndDisclosures_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-06T06:48:04.000+0000",
        "CreatedDate": "2025-07-21T08:10:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qV7EAI"
        },
        "Id": "0jNdy0000003qV7EAI",
        "Name": "BAO_DAO_ExistingBusinessSelectAccounts",
        "Type": "BAO",
        "SubType": "DAOSelectAccounts",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOSelectAccounts_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-06T06:47:18.000+0000",
        "CreatedDate": "2025-07-21T07:57:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LW9EAM"
        },
        "Id": "0jNdy0000003LW9EAM",
        "Name": "AccountApplicationBankConnection",
        "Type": "BAO",
        "SubType": "AccountApplicationBankConnection",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationBankConnection_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-06T06:17:22.000+0000",
        "CreatedDate": "2025-06-18T23:41:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qWjEAI"
        },
        "Id": "0jNdy0000003qWjEAI",
        "Name": "AccountApplicationAccountAgreementAndDisclosures",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountAgreementAndDisclosures",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationAccountAgreementAndDisclosures_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-06T06:14:35.000+0000",
        "CreatedDate": "2025-07-21T08:10:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GeXEAU"
        },
        "Id": "0jNdy0000003GeXEAU",
        "Name": "AccountApplicationEmailNotFound",
        "Type": "BAO",
        "SubType": "AccountApplicationEmailNotFound",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AccountApplicationEmailNotFound_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-06T06:06:44.000+0000",
        "CreatedDate": "2025-06-10T02:23:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rSnEAI"
        },
        "Id": "0jNdy0000003rSnEAI",
        "Name": "CAO_IP_UpsertAccountRecord",
        "Type": "CAO",
        "SubType": "UpsertAccountRecord",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_UpsertAccountRecord_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-08-06T05:53:43.000+0000",
        "CreatedDate": "2025-07-23T07:21:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000013a9EAA"
        },
        "Id": "0jIdy00000013a9EAA",
        "Name": "caoUpsertIdentityDocument",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertIdentityDocument_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-05T20:42:18.000+0000",
        "CreatedDate": "2025-08-04T21:51:14.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003v8DEAQ"
        },
        "Id": "0jNdy0000003v8DEAQ",
        "Name": "caoApplicantAccountAgreementIP",
        "Type": "CAO",
        "SubType": "ApplicantAccountAgreementIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_ApplicantAccountAgreementIP_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-08-05T20:34:24.000+0000",
        "CreatedDate": "2025-07-30T11:03:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000lF3EAI"
        },
        "Id": "0jIdy0000000lF3EAI",
        "Name": "DRTransformNewBusinessApplicationPayload",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRTransformNewBusinessApplicationPayload_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-05T13:07:27.000+0000",
        "CreatedDate": "2025-05-07T08:27:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vZdEAI"
        },
        "Id": "0jNdy0000003vZdEAI",
        "Name": "GetAlloyResponseForBusiness",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBusiness",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBusiness_Procedure_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-05T12:22:45.000+0000",
        "CreatedDate": "2025-07-30T23:22:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003pnZEAQ"
        },
        "Id": "0jNdy0000003pnZEAQ",
        "Name": "BAO_SiteAutoLogin",
        "Type": "Site",
        "SubType": "Login",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Site_Login_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-05T08:01:24.000+0000",
        "CreatedDate": "2025-07-17T09:43:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000ynNEAQ"
        },
        "Id": "0jIdy0000000ynNEAQ",
        "Name": "DRGetOmniJsonData",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetOmniJsonData_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-04T13:27:54.000+0000",
        "CreatedDate": "2025-07-11T10:11:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011A9EAI"
        },
        "Id": "0jIdy00000011A9EAI",
        "Name": "baoDRBusinessApplicantAndID",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRBusinessApplicantAndID_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-08-04T08:04:00.000+0000",
        "CreatedDate": "2025-07-23T05:41:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003enJEAQ"
        },
        "Id": "0jNdy0000003enJEAQ",
        "Name": "AppLinkHandler",
        "Type": "BAO",
        "SubType": "AppLinkHandler",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_AppLinkHandler_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-08-04T05:46:48.000+0000",
        "CreatedDate": "2025-07-08T07:17:48.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000013VJEAY"
        },
        "Id": "0jIdy00000013VJEAY",
        "Name": "getApplicantsfromInProgApplicationFormsbyEmail",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "getApplicantsfromInProgApplicationFormsbyEmail_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-01T23:25:54.000+0000",
        "CreatedDate": "2025-08-01T22:29:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uYjEAI"
        },
        "Id": "0jNdy0000003uYjEAI",
        "Name": "ApplicationRejection",
        "Type": "BAO",
        "SubType": "ApplicationRejection",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_ApplicationRejection_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-08-01T15:49:11.000+0000",
        "CreatedDate": "2025-07-29T16:09:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000012kXEAQ"
        },
        "Id": "0jIdy00000012kXEAQ",
        "Name": "caoGetProductByName",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetProductByName_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-01T15:30:38.000+0000",
        "CreatedDate": "2025-07-29T18:22:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010dtEAA"
        },
        "Id": "0jIdy00000010dtEAA",
        "Name": "caoGetApplicationFormProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetApplicationFormProducts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-08-01T13:05:34.000+0000",
        "CreatedDate": "2025-07-18T18:09:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000046LNEAY"
        },
        "Id": "0jNdy00000046LNEAY",
        "Name": "ConsumerBankConnection",
        "Type": "CAO",
        "SubType": "ConsumerBankConnection",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_ConsumerBankConnection_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-08-01T12:45:00.000+0000",
        "CreatedDate": "2025-08-01T12:06:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000046JlEAI"
        },
        "Id": "0jNdy00000046JlEAI",
        "Name": "PlatformEventTest",
        "Type": "Test",
        "SubType": "PlatformEvent",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Test_PlatformEvent_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-08-01T11:08:51.000+0000",
        "CreatedDate": "2025-08-01T11:08:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vbFEAQ"
        },
        "Id": "0jNdy0000003vbFEAQ",
        "Name": "AlloyTestIP",
        "Type": "CAO",
        "SubType": "AlloyTestIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_AlloyTestIP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "LastModifiedDate": "2025-08-01T10:20:53.000+0000",
        "CreatedDate": "2025-07-30T23:26:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003u0rEAA"
        },
        "Id": "0jNdy0000003u0rEAA",
        "Name": "GetAlloyResponseForBusiness",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBusiness",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "GetGoogle_GetAlloyBusiness_Procedure_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-31T17:08:07.000+0000",
        "CreatedDate": "2025-07-28T16:34:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LazEAE"
        },
        "Id": "0jNdy0000003LazEAE",
        "Name": "GetAlloyResponseForBusiness",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBusiness",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBusiness_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-31T17:08:07.000+0000",
        "CreatedDate": "2025-06-19T08:17:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003veTEAQ"
        },
        "Id": "0jNdy0000003veTEAQ",
        "Name": "ApplicationSendComeBackEmail",
        "Type": "Application",
        "SubType": "SendComeBackEmail",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Application_SendComeBackEmail_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-07-31T07:58:33.000+0000",
        "CreatedDate": "2025-07-31T07:53:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003vcrEAA"
        },
        "Id": "0jNdy0000003vcrEAA",
        "Name": "caoApplicationFromProductChecks",
        "Type": "CAO",
        "SubType": "ApplicationFromProductChecks",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_ApplicationFromProductChecks_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-07-31T07:24:14.000+0000",
        "CreatedDate": "2025-07-31T06:42:15.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003r2zEAA"
        },
        "Id": "0jNdy0000003r2zEAA",
        "Name": "CheckSSN",
        "Type": "CAO",
        "SubType": "CheckSSN",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_CheckSSN_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-07-30T21:07:49.000+0000",
        "CreatedDate": "2025-07-22T00:18:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tnxEAA"
        },
        "Id": "0jNdy0000003tnxEAA",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_10",
        "VersionNumber": 10,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-30T15:47:56.000+0000",
        "CreatedDate": "2025-07-27T20:37:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tmLEAQ"
        },
        "Id": "0jNdy0000003tmLEAQ",
        "Name": "SendRequestToAlloy",
        "Type": "Send",
        "SubType": "RequestToAlloy",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Send_RequestToAlloy_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-30T13:54:48.000+0000",
        "CreatedDate": "2025-07-27T20:27:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000lN7EAI"
        },
        "Id": "0jIdy0000000lN7EAI",
        "Name": "DRPersonAssessmentDataTransform",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DRPersonAssessmentDataTransform_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-30T12:38:40.000+0000",
        "CreatedDate": "2025-05-08T11:15:09.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002bjREAQ"
        },
        "Id": "0jNdy0000002bjREAQ",
        "Name": "UpdateApplicationFormAndLeadWithAppLink",
        "Type": "BAO",
        "SubType": "UpdateApplicationFormAndLeadWithAppLink",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "BAO_UpdateApplicationFormAndLeadWithAppLink_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-30T11:02:27.000+0000",
        "CreatedDate": "2025-05-29T19:20:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000sd7EAA"
        },
        "Id": "0jIdy0000000sd7EAA",
        "Name": "baoGetPrimaryApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoGetPrimaryApplicant_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-30T10:42:19.000+0000",
        "CreatedDate": "2025-06-09T14:53:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003uorEAA"
        },
        "Id": "0jNdy0000003uorEAA",
        "Name": "GetProductByName",
        "Type": "CAO",
        "SubType": "GetProductByName",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_GetProductByName_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-07-29T18:36:17.000+0000",
        "CreatedDate": "2025-07-29T18:09:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003OllEAE"
        },
        "Id": "0jNdy0000003OllEAE",
        "Name": "IP_Send_Email_to_Additional_owners",
        "Type": "SendEmail",
        "SubType": "AdditionalOwners",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "SendEmail_AdditionalOwners_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-29T11:04:56.000+0000",
        "CreatedDate": "2025-06-24T08:26:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003Gt3EAE"
        },
        "Id": "0jNdy0000003Gt3EAE",
        "Name": "AccountApplicationAccountAgreementAndDisclosures",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountAgreementAndDisclosures",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAccountAgreementAndDisclosures_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-29T10:35:24.000+0000",
        "CreatedDate": "2025-06-10T03:54:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003tkjEAA"
        },
        "Id": "0jNdy0000003tkjEAA",
        "Name": "BusinessApplicantCheckIP",
        "Type": "CAO",
        "SubType": "BusinessApplicantCheckIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_BusinessApplicantCheckIP_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-07-29T05:28:13.000+0000",
        "CreatedDate": "2025-07-27T04:31:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003r6DEAQ"
        },
        "Id": "0jNdy0000003r6DEAQ",
        "Name": "ConsumerAuthESignAgreement",
        "Type": "CAO",
        "SubType": "AuthESignAgreement",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "CAO_AuthESignAgreement_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-07-28T21:56:50.000+0000",
        "CreatedDate": "2025-07-22T05:43:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011OfEAI"
        },
        "Id": "0jIdy00000011OfEAI",
        "Name": "caoGetBundleRecordDRExtract",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetBundleRecordDRExtract_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-28T20:42:44.000+0000",
        "CreatedDate": "2025-07-23T14:14:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000lRxEAI"
        },
        "Id": "0jIdy0000000lRxEAI",
        "Name": "DRSaveBusinessAssessment",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DRSaveBusinessAssessment_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-28T14:33:39.000+0000",
        "CreatedDate": "2025-05-08T17:36:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003pqnEAA"
        },
        "Id": "0jNdy0000003pqnEAA",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-07-28T11:10:03.000+0000",
        "CreatedDate": "2025-07-17T21:29:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rcTEAQ"
        },
        "Id": "0jNdy0000003rcTEAQ",
        "Name": "IP_CompleteApplication",
        "Type": "Complete",
        "SubType": "Application",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Complete_Application_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-07-28T11:07:48.000+0000",
        "CreatedDate": "2025-07-23T13:33:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000012SnEAI"
        },
        "Id": "0jIdy00000012SnEAI",
        "Name": "Testt1DRE",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "Testt1DRE_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-28T08:01:30.000+0000",
        "CreatedDate": "2025-07-26T10:52:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rRBEAY"
        },
        "Id": "0jNdy0000003rRBEAY",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_9",
        "VersionNumber": 9,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-27T22:47:38.000+0000",
        "CreatedDate": "2025-07-23T00:14:15.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LfpEAE"
        },
        "Id": "0jNdy0000003LfpEAE",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_8",
        "VersionNumber": 8,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-27T20:10:51.000+0000",
        "CreatedDate": "2025-06-19T08:18:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000012UPEAY"
        },
        "Id": "0jIdy00000012UPEAY",
        "Name": "TestDRExtract",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "TestDRExtract_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-27T12:03:06.000+0000",
        "CreatedDate": "2025-07-26T15:41:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rhJEAQ"
        },
        "Id": "0jNdy0000003rhJEAQ",
        "Name": "CAO_GetBundleRecordIP",
        "Type": "CAO",
        "SubType": "GetBundleRecordIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_GetBundleRecordIP_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-07-27T11:38:55.000+0000",
        "CreatedDate": "2025-07-23T14:11:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003thVEAQ"
        },
        "Id": "0jNdy0000003thVEAQ",
        "Name": "TempTestIP",
        "Type": "Test",
        "SubType": "TempTestIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Test_TempTestIP_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "LastModifiedDate": "2025-07-26T16:38:58.000+0000",
        "CreatedDate": "2025-07-26T16:30:11.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000lQLEAY"
        },
        "Id": "0jIdy0000000lQLEAY",
        "Name": "DRBusinessAssessmentDataTransform",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "VersionNumber": 1,
        "UniqueName": "DRBusinessAssessmentDataTransform_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-25T22:09:19.000+0000",
        "CreatedDate": "2025-05-08T17:08:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003t81EAA"
        },
        "Id": "0jNdy0000003t81EAA",
        "Name": "StepAlloyEmbend",
        "Type": "Step",
        "SubType": "AlloyEmbend",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Step_AlloyEmbend_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-25T13:34:39.000+0000",
        "CreatedDate": "2025-07-25T13:34:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003WD3EAM"
        },
        "Id": "0jNdy0000003WD3EAM",
        "Name": "BAO_SiteAutoLogin",
        "Type": "Site",
        "SubType": "Login",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Site_Login_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-25T09:35:45.000+0000",
        "CreatedDate": "2025-07-03T05:19:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010h7EAA"
        },
        "Id": "0jIdy00000010h7EAA",
        "Name": "caoGetLeadDependencies",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetLeadDependencies_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-24T23:21:27.000+0000",
        "CreatedDate": "2025-07-18T19:55:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003stVEAQ"
        },
        "Id": "0jNdy0000003stVEAQ",
        "Name": "ConsumerRegisterForOLB",
        "Type": "CAO",
        "SubType": "OLBRegistration",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_OLBRegistration_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-07-24T19:24:10.000+0000",
        "CreatedDate": "2025-07-24T19:13:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003fY5EAI"
        },
        "Id": "0jNdy0000003fY5EAI",
        "Name": "IP_Send_Email",
        "Type": "Send",
        "SubType": "Email",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Send_Email_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-07-24T17:35:24.000+0000",
        "CreatedDate": "2025-07-09T14:37:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003s2HEAQ"
        },
        "Id": "0jNdy0000003s2HEAQ",
        "Name": "ConsumerAlloy",
        "Type": "CAO",
        "SubType": "Alloy",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "CAO_Alloy_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-07-24T16:12:07.000+0000",
        "CreatedDate": "2025-07-24T16:04:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010fVEAQ"
        },
        "Id": "0jIdy00000010fVEAQ",
        "Name": "caoUpsertLead",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertLead_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-23T16:02:58.000+0000",
        "CreatedDate": "2025-07-18T19:50:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qDNEAY"
        },
        "Id": "0jNdy0000003qDNEAY",
        "Name": "UpsertLead",
        "Type": "CAO",
        "SubType": "UpsertLead",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_UpsertLead_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-07-23T16:02:17.000+0000",
        "CreatedDate": "2025-07-18T19:49:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rXdEAI"
        },
        "Id": "0jNdy0000003rXdEAI",
        "Name": "CreateTasks",
        "Type": "Create",
        "SubType": "Task",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Create_Task_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-07-23T14:25:40.000+0000",
        "CreatedDate": "2025-07-23T12:21:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003re5EAA"
        },
        "Id": "0jNdy0000003re5EAA",
        "Name": "AccountApplicationAboutYourBusiness",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYourBusiness",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYourBusiness_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        },
        "LastModifiedDate": "2025-07-23T14:02:02.000+0000",
        "CreatedDate": "2025-07-23T14:02:02.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CGFIjAAP"
            },
            "Name": "Rudra Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003r9REAQ"
        },
        "Id": "0jNdy0000003r9REAQ",
        "Name": "IPCreateFormAndApplicant",
        "Type": "BAO",
        "SubType": "CreateFormandapplicant",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_CreateFormandapplicant_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-23T11:24:59.000+0000",
        "CreatedDate": "2025-07-22T07:28:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000011EzEAI"
        },
        "Id": "0jIdy00000011EzEAI",
        "Name": "caoInsertContentDocumentLink",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoInsertContentDocumentLink_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-23T10:08:04.000+0000",
        "CreatedDate": "2025-07-23T07:34:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rtxEAA"
        },
        "Id": "0jIdy0000000rtxEAA",
        "Name": "DRGetPersonAccountByEmail",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetPersonAccountByEmail_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-23T09:35:36.000+0000",
        "CreatedDate": "2025-06-04T09:52:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010nZEAQ"
        },
        "Id": "0jIdy00000010nZEAQ",
        "Name": "caoCreateIdentityDocumentDRLoad",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "caoCreateIdentityDocumentDRLoad_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-23T06:07:32.000+0000",
        "CreatedDate": "2025-07-19T04:57:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003rEHEAY"
        },
        "Id": "0jNdy0000003rEHEAY",
        "Name": "caoCreateRecordsBundleIP",
        "Type": "CAO",
        "SubType": "CreateRecordsBundleIP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "CAO_CreateRecordsBundleIP_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-07-22T14:49:19.000+0000",
        "CreatedDate": "2025-07-22T14:45:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000118XEAQ"
        },
        "Id": "0jIdy000000118XEAQ",
        "Name": "Tst1DREGetPersonAccountByEmailOrPhone",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "VersionNumber": 1,
        "UniqueName": "Tst1DREGetPersonAccountByEmailOrPhone_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-22T13:58:31.000+0000",
        "CreatedDate": "2025-07-22T13:20:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000CCdWXAA1"
            },
            "Name": "Imtiyaj Khan"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003JsXEAU"
        },
        "Id": "0jNdy0000003JsXEAU",
        "Name": "AdditionalOwnerAcceptanceScreen",
        "Type": "BAO",
        "SubType": "AdditionalOwnerAcceptanceScreen",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AdditionalOwnerAcceptanceScreen_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-22T10:33:24.000+0000",
        "CreatedDate": "2025-06-17T07:26:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002kmjEAA"
        },
        "Id": "0jNdy0000002kmjEAA",
        "Name": "AdditionalOwnerAcceptanceScreen",
        "Type": "BAO",
        "SubType": "AdditionalOwnerAcceptanceScreen",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AdditionalOwnerAcceptanceScreen_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-22T10:32:37.000+0000",
        "CreatedDate": "2025-06-02T20:47:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qQHEAY"
        },
        "Id": "0jNdy0000003qQHEAY",
        "Name": "BAO_DAO_ExistingBusinessWelcome",
        "Type": "BAO",
        "SubType": "DAOExistingBusinessWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "BAO_DAOExistingBusinessWelcome_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-22T06:59:22.000+0000",
        "CreatedDate": "2025-07-21T07:49:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010FhEAI"
        },
        "Id": "0jIdy00000010FhEAI",
        "Name": "caoGetApplicantBundleDependencies",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetApplicantBundleDependencies_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-21T23:07:08.000+0000",
        "CreatedDate": "2025-07-16T15:15:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GjNEAU"
        },
        "Id": "0jNdy0000003GjNEAU",
        "Name": "AccountApplicationMemberElegibility",
        "Type": "BAO",
        "SubType": "AccountApplicationMemberElegibility",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMemberElegibility_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-21T11:07:14.000+0000",
        "CreatedDate": "2025-06-10T03:07:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000w8rEAA"
        },
        "Id": "0jNdy0000000w8rEAA",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-21T05:34:45.000+0000",
        "CreatedDate": "2025-02-24T05:21:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003pdtEAA"
        },
        "Id": "0jNdy0000003pdtEAA",
        "Name": "IPApplicationAssignmentFlow",
        "Type": "Applicationform",
        "SubType": "AssignmentFlow",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Applicationform_AssignmentFlow_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-20T17:49:07.000+0000",
        "CreatedDate": "2025-07-16T06:06:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003qA9EAI"
        },
        "Id": "0jNdy0000003qA9EAI",
        "Name": "RefreshApplicationFormProducts",
        "Type": "CAO",
        "SubType": "RefreshApplicationFormProducts",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "CAO_RefreshApplicationFormProducts_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-07-18T20:13:06.000+0000",
        "CreatedDate": "2025-07-18T18:05:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010SbEAI"
        },
        "Id": "0jIdy00000010SbEAI",
        "Name": "DRCheckApplicationAlreadyOrNot",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCheckApplicationAlreadyOrNot_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-18T08:29:51.000+0000",
        "CreatedDate": "2025-07-17T10:24:41.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003pvdEAA"
        },
        "Id": "0jNdy0000003pvdEAA",
        "Name": "AccountApplicationApplicationBlock",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationBlock",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationBlock_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-07-18T07:58:19.000+0000",
        "CreatedDate": "2025-07-18T07:39:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003M5dEAE"
        },
        "Id": "0jNdy0000003M5dEAE",
        "Name": "AccountApplicationOTPVerification",
        "Type": "BAO",
        "SubType": "AccountApplicationOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationOTPVerification_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-07-18T06:32:42.000+0000",
        "CreatedDate": "2025-06-19T15:33:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003REzEAM"
        },
        "Id": "0jNdy0000003REzEAM",
        "Name": "AccountApplication",
        "Type": "BAO",
        "SubType": "AccountApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplication_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-07-18T06:20:47.000+0000",
        "CreatedDate": "2025-06-26T10:06:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy000000102nEAA"
        },
        "Id": "0jIdy000000102nEAA",
        "Name": "DRGetApplicantDataBasedOnRecordTypeIsInstitution",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetApplicantDataBasedOnRecordTypeIsInstitution_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-18T05:01:36.000+0000",
        "CreatedDate": "2025-07-16T06:08:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003MFJEA2"
        },
        "Id": "0jNdy0000003MFJEA2",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-17T22:21:47.000+0000",
        "CreatedDate": "2025-06-20T10:43:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003RJpEAM"
        },
        "Id": "0jNdy0000003RJpEAM",
        "Name": "IP_Send_Email",
        "Type": "Send",
        "SubType": "Email",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Send_Email_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "LastModifiedDate": "2025-07-17T18:09:38.000+0000",
        "CreatedDate": "2025-06-26T15:10:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010HJEAY"
        },
        "Id": "0jIdy00000010HJEAY",
        "Name": "caoUpsertPersonAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertPersonAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-16T19:49:20.000+0000",
        "CreatedDate": "2025-07-16T17:27:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy00000010CTEAY"
        },
        "Id": "0jIdy00000010CTEAY",
        "Name": "caoUpsertApplicationForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpsertApplicationForm_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-16T19:23:53.000+0000",
        "CreatedDate": "2025-07-16T14:09:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002ZZZEA2"
        },
        "Id": "0jNdy0000002ZZZEA2",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_16",
        "VersionNumber": 16,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        },
        "LastModifiedDate": "2025-07-15T23:54:48.000+0000",
        "CreatedDate": "2025-05-23T06:19:14.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000oEXEAY"
        },
        "Id": "0jIdy0000000oEXEAY",
        "Name": "DRgetDataForPersonAssignment",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008cIH3AAM"
            },
            "Name": "Praveen Kanumuri"
        },
        "VersionNumber": 1,
        "UniqueName": "DRgetDataForPersonAssignment_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-15T14:14:29.000+0000",
        "CreatedDate": "2025-05-19T12:46:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000022ddEAA"
        },
        "Id": "0jNdy00000022ddEAA",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-15T07:15:37.000+0000",
        "CreatedDate": "2025-04-02T23:04:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000001YdxEAE"
        },
        "Id": "0jNdy0000001YdxEAE",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-15T06:42:24.000+0000",
        "CreatedDate": "2025-03-19T09:40:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000zI1EAI"
        },
        "Id": "0jIdy0000000zI1EAI",
        "Name": "baoGetAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoGetAccount_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-14T10:37:09.000+0000",
        "CreatedDate": "2025-07-14T07:49:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003J2vEAE"
        },
        "Id": "0jNdy0000003J2vEAE",
        "Name": "AccountApplicationWelcome",
        "Type": "BAO",
        "SubType": "AccountApplicationWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationWelcome_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-14T05:58:28.000+0000",
        "CreatedDate": "2025-06-16T04:59:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002IvJEAU"
        },
        "Id": "0jNdy0000002IvJEAU",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-11T10:36:33.000+0000",
        "CreatedDate": "2025-04-18T11:44:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000yllEAA"
        },
        "Id": "0jIdy0000000yllEAA",
        "Name": "DRSaveOmniJson",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRSaveOmniJson_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-11T10:32:22.000+0000",
        "CreatedDate": "2025-07-11T10:07:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003Gg9EAE"
        },
        "Id": "0jNdy0000003Gg9EAE",
        "Name": "AccountApplicationOTPVerification",
        "Type": "BAO",
        "SubType": "AccountApplicationOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationOTPVerification_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-07-11T07:34:59.000+0000",
        "CreatedDate": "2025-06-10T02:39:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GrREAU"
        },
        "Id": "0jNdy0000003GrREAU",
        "Name": "AccountApplicationSelectAccounts",
        "Type": "BAO",
        "SubType": "AccountApplicationSelectAccounts",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationSelectAccounts_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-10T15:55:40.000+0000",
        "CreatedDate": "2025-06-10T03:49:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000ydhEAA"
        },
        "Id": "0jIdy0000000ydhEAA",
        "Name": "Support2",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "VersionNumber": 1,
        "UniqueName": "Support2_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-10T15:23:44.000+0000",
        "CreatedDate": "2025-07-10T15:02:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000yc5EAA"
        },
        "Id": "0jIdy0000000yc5EAA",
        "Name": "testSupport",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "VersionNumber": 1,
        "UniqueName": "testSupport_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-10T15:00:58.000+0000",
        "CreatedDate": "2025-07-10T15:00:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000yaTEAQ"
        },
        "Id": "0jIdy0000000yaTEAQ",
        "Name": "CloneOfCreateAdditionalAppicantandIdentity",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "VersionNumber": 1,
        "UniqueName": "CloneOfCreateAdditionalAppicantandIdentity_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-10T15:00:16.000+0000",
        "CreatedDate": "2025-07-10T14:36:48.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003RDNEA2"
        },
        "Id": "0jNdy0000003RDNEA2",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-07-10T13:28:47.000+0000",
        "CreatedDate": "2025-06-26T06:51:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002aKLEAY"
        },
        "Id": "0jNdy0000002aKLEAY",
        "Name": "Consumer Account Opening",
        "Type": "Consumer",
        "SubType": "AccountOpening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Consumer_AccountOpening_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000Bww8XAAR"
            },
            "Name": "Akash Umang"
        },
        "LastModifiedDate": "2025-07-10T11:22:09.000+0000",
        "CreatedDate": "2025-05-27T20:47:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002Z89EAE"
        },
        "Id": "0jNdy0000002Z89EAE",
        "Name": "Consumer Account Opening",
        "Type": "Consumer",
        "SubType": "AccountOpening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Consumer_AccountOpening_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000Bww8XAAR"
            },
            "Name": "Akash Umang"
        },
        "LastModifiedDate": "2025-07-10T07:24:53.000+0000",
        "CreatedDate": "2025-05-21T20:54:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000xUjEAI"
        },
        "Id": "0jIdy0000000xUjEAI",
        "Name": "DRsaveLinkInApplicationLink",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRsaveLinkInApplicationLink_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-09T13:42:16.000+0000",
        "CreatedDate": "2025-07-09T06:01:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003fOPEAY"
        },
        "Id": "0jNdy0000003fOPEAY",
        "Name": "AppLinkHandler",
        "Type": "BAO",
        "SubType": "AppLinkHandler",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AppLinkHandler_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-09T05:52:44.000+0000",
        "CreatedDate": "2025-07-09T05:52:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GBVEA2"
        },
        "Id": "0jNdy0000003GBVEA2",
        "Name": "AppLinkHandler",
        "Type": "BAO",
        "SubType": "AppLinkHandler",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AppLinkHandler_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-08T07:21:04.000+0000",
        "CreatedDate": "2025-06-09T16:31:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003eCDEAY"
        },
        "Id": "0jNdy0000003eCDEAY",
        "Name": "DocuSignTestIntegration",
        "Type": "DocuSign",
        "SubType": "TestIntegration",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "DocuSign_TestIntegration_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-07-04T18:02:12.000+0000",
        "CreatedDate": "2025-07-04T18:02:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003Ry9EAE"
        },
        "Id": "0jNdy0000003Ry9EAE",
        "Name": "IP_ApplicantDenialCheck",
        "Type": "SSN",
        "SubType": "DenialCheck",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "SSN_DenialCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-07-04T06:15:30.000+0000",
        "CreatedDate": "2025-06-27T08:41:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000x6XEAQ"
        },
        "Id": "0jIdy0000000x6XEAQ",
        "Name": "caoUpdateOTP",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "caoUpdateOTP_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-03T22:48:38.000+0000",
        "CreatedDate": "2025-07-03T15:10:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000xBNEAY"
        },
        "Id": "0jIdy0000000xBNEAY",
        "Name": "caoGetOTPsByAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "caoGetOTPsByAccount_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-03T21:26:20.000+0000",
        "CreatedDate": "2025-07-03T21:14:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003WEfEAM"
        },
        "Id": "0jNdy0000003WEfEAM",
        "Name": "IP_Check_CommunityUser",
        "Type": "Check",
        "SubType": "User",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Check_User_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-07-03T09:59:32.000+0000",
        "CreatedDate": "2025-07-03T05:29:05.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000wFJEAY"
        },
        "Id": "0jIdy0000000wFJEAY",
        "Name": "DRApplicantForUser",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRApplicantForUser_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-03T09:57:26.000+0000",
        "CreatedDate": "2025-07-03T09:54:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003IoPEAU"
        },
        "Id": "0jNdy0000003IoPEAU",
        "Name": "AccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYou_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-07-03T09:26:54.000+0000",
        "CreatedDate": "2025-06-13T12:58:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000vW9EAI"
        },
        "Id": "0jIdy0000000vW9EAI",
        "Name": "DRApplicantSSNDenialCheck",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "VersionNumber": 1,
        "UniqueName": "DRApplicantSSNDenialCheck_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-07-03T07:02:19.000+0000",
        "CreatedDate": "2025-06-27T08:56:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000vuLEAQ"
        },
        "Id": "0jIdy0000000vuLEAQ",
        "Name": "test",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "VersionNumber": 1,
        "UniqueName": "test_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-07-01T16:25:00.000+0000",
        "CreatedDate": "2025-07-01T16:25:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/0055d00000D3aroAAB"
            },
            "Name": "Alex Zhao"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003J9NEAU"
        },
        "Id": "0jNdy0000003J9NEAU",
        "Name": "AccountApplicationAccountFunding",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAccountFunding_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BxdAHAAZ"
            },
            "Name": "Gabriel Medrado"
        },
        "LastModifiedDate": "2025-06-30T23:28:35.000+0000",
        "CreatedDate": "2025-06-16T06:39:15.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000vSvEAI"
        },
        "Id": "0jIdy0000000vSvEAI",
        "Name": "DRApplicantSSNCheck",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "VersionNumber": 1,
        "UniqueName": "DRApplicantSSNCheck_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-30T12:13:08.000+0000",
        "CreatedDate": "2025-06-27T08:44:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Turbo Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000tirEAA"
        },
        "Id": "0jIdy0000000tirEAA",
        "Name": "DRApplicationFormProduct",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "VersionNumber": 1,
        "UniqueName": "DRApplicationFormProduct_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-27T11:26:59.000+0000",
        "CreatedDate": "2025-06-17T11:55:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LZNEA2"
        },
        "Id": "0jNdy0000003LZNEA2",
        "Name": "IPPostDataInAlloyUsingApex",
        "Type": "Alloy",
        "SubType": "assignment",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "Alloy_assignment_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-27T05:15:07.000+0000",
        "CreatedDate": "2025-06-19T08:16:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002YdVEAU"
        },
        "Id": "0jNdy0000002YdVEAU",
        "Name": "IPPostDataInAlloyUsingApex",
        "Type": "Alloy",
        "SubType": "assignment",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Alloy_assignment_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-27T05:13:13.000+0000",
        "CreatedDate": "2025-05-19T12:44:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003KGjEAM"
        },
        "Id": "0jNdy0000003KGjEAM",
        "Name": "IP_baoAdditionalOwnerMembercheck",
        "Type": "baoAdditionalOwner",
        "SubType": "memberCheck",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "baoAdditionalOwner_memberCheck_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-26T10:28:48.000+0000",
        "CreatedDate": "2025-06-18T06:00:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000t69EAA"
        },
        "Id": "0jIdy0000000t69EAA",
        "Name": "DRGetAssessmentType",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetAssessmentType_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-26T09:54:44.000+0000",
        "CreatedDate": "2025-06-12T05:36:12.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003OgvEAE"
        },
        "Id": "0jNdy0000003OgvEAE",
        "Name": "AdditionalSignerBusinessApplication",
        "Type": "AdditionalSigner",
        "SubType": "BusinessApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AdditionalSigner_BusinessApplication_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-26T05:10:15.000+0000",
        "CreatedDate": "2025-06-24T05:25:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GwHEAU"
        },
        "Id": "0jNdy0000003GwHEAU",
        "Name": "AccountApplicationAccountFunding",
        "Type": "BAO",
        "SubType": "AccountApplicationAccountFunding",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAccountFunding_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-06-25T14:54:29.000+0000",
        "CreatedDate": "2025-06-10T04:07:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000ugXEAQ"
        },
        "Id": "0jIdy0000000ugXEAQ",
        "Name": "DRCheckAlloyResponseStatus",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCheckAlloyResponseStatus_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-25T10:21:04.000+0000",
        "CreatedDate": "2025-06-19T13:12:05.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003J7lEAE"
        },
        "Id": "0jNdy0000003J7lEAE",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-06-25T09:10:13.000+0000",
        "CreatedDate": "2025-06-16T05:54:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000v9ZEAQ"
        },
        "Id": "0jIdy0000000v9ZEAQ",
        "Name": "DRCreateEventRecord",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreateEventRecord_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-06-25T08:09:55.000+0000",
        "CreatedDate": "2025-06-25T06:59:49.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000ifNEAQ"
        },
        "Id": "0jIdy0000000ifNEAQ",
        "Name": "DRCreateDonationAccountFunding",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreateDonationAccountFunding_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-06-25T07:09:41.000+0000",
        "CreatedDate": "2025-04-24T10:48:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000idlEAA"
        },
        "Id": "0jIdy0000000idlEAA",
        "Name": "DRCreateMembershipAccountFunding",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreateMembershipAccountFunding_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-06-25T07:09:13.000+0000",
        "CreatedDate": "2025-04-24T10:36:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002V4XEAU"
        },
        "Id": "0jNdy0000002V4XEAU",
        "Name": "GetAlloyResponseForBusiness",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBusiness",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBusiness_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-25T07:07:25.000+0000",
        "CreatedDate": "2025-05-08T15:51:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003OiXEAU"
        },
        "Id": "0jNdy0000003OiXEAU",
        "Name": "IP_Create_Account_And_Applicant",
        "Type": "BAO",
        "SubType": "CreateAccandApplicant",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_CreateAccandApplicant_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-25T06:49:34.000+0000",
        "CreatedDate": "2025-06-24T05:28:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003Ok9EAE"
        },
        "Id": "0jNdy0000003Ok9EAE",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-24T07:58:42.000+0000",
        "CreatedDate": "2025-06-24T07:58:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy000000373NEAQ"
        },
        "Id": "0jNdy000000373NEAQ",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_18",
        "VersionNumber": 18,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-23T05:03:28.000+0000",
        "CreatedDate": "2025-06-05T07:31:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002WlNEAU"
        },
        "Id": "0jNdy0000002WlNEAU",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_14",
        "VersionNumber": 14,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-21T07:21:47.000+0000",
        "CreatedDate": "2025-05-12T04:47:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000tvlEAA"
        },
        "Id": "0jIdy0000000tvlEAA",
        "Name": "DRGetSandBoxName",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetSandBoxName_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-20T12:52:47.000+0000",
        "CreatedDate": "2025-06-18T12:16:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003JpJEAU"
        },
        "Id": "0jNdy0000003JpJEAU",
        "Name": "AdditionalSignerBusinessApplication",
        "Type": "AdditionalSigner",
        "SubType": "BusinessApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AdditionalSigner_BusinessApplication_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-20T10:50:03.000+0000",
        "CreatedDate": "2025-06-17T06:49:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LeDEAU"
        },
        "Id": "0jNdy0000003LeDEAU",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-19T12:33:38.000+0000",
        "CreatedDate": "2025-06-19T08:18:15.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LntEAE"
        },
        "Id": "0jNdy0000003LntEAE",
        "Name": "AccountApplicationApplicationComplete",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationComplete",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationComplete_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-06-19T11:22:59.000+0000",
        "CreatedDate": "2025-06-19T11:22:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LmHEAU"
        },
        "Id": "0jNdy0000003LmHEAU",
        "Name": "IPTransfromApplicant",
        "Type": "Applicant",
        "SubType": "Transform",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Applicant_Transform_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-19T11:14:17.000+0000",
        "CreatedDate": "2025-06-19T11:14:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GzVEAU"
        },
        "Id": "0jNdy0000003GzVEAU",
        "Name": "AccountApplicationApplicationComplete",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationComplete",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationComplete_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-06-19T10:56:35.000+0000",
        "CreatedDate": "2025-06-10T04:15:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003JqvEAE"
        },
        "Id": "0jNdy0000003JqvEAE",
        "Name": "IP_CheckForExceededFundingLimits",
        "Type": "FundingAmount",
        "SubType": "check",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "FundingAmount_check_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-06-19T10:29:00.000+0000",
        "CreatedDate": "2025-06-17T07:13:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000ubhEAA"
        },
        "Id": "0jIdy0000000ubhEAA",
        "Name": "DRPersonAssessmentDataTransformV2",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRPersonAssessmentDataTransformV2_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-19T10:23:18.000+0000",
        "CreatedDate": "2025-06-19T10:08:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002V2vEAE"
        },
        "Id": "0jNdy0000002V2vEAE",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-19T08:18:38.000+0000",
        "CreatedDate": "2025-05-08T10:52:16.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003LcbEAE"
        },
        "Id": "0jNdy0000003LcbEAE",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-19T08:18:10.000+0000",
        "CreatedDate": "2025-06-19T08:18:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003JEDEA2"
        },
        "Id": "0jNdy0000003JEDEA2",
        "Name": "AdditionalSignerBusinessApplication",
        "Type": "AdditionalSigner",
        "SubType": "BusinessApplication",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AdditionalSigner_BusinessApplication_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-16T11:08:13.000+0000",
        "CreatedDate": "2025-06-16T11:08:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002afJEAQ"
        },
        "Id": "0jNdy0000002afJEAQ",
        "Name": "IPsaveFundingAccount",
        "Type": "Funding",
        "SubType": "Account",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Funding_Account_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-16T06:46:58.000+0000",
        "CreatedDate": "2025-05-28T11:09:41.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GufEAE"
        },
        "Id": "0jNdy0000003GufEAE",
        "Name": "AccountApplicationApplicationSummary",
        "Type": "BAO",
        "SubType": "AccountApplicationApplicationSummary",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationApplicationSummary_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-16T05:54:39.000+0000",
        "CreatedDate": "2025-06-10T04:03:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003J4XEAU"
        },
        "Id": "0jNdy0000003J4XEAU",
        "Name": "AccountApplicationOTPVerification",
        "Type": "BAO",
        "SubType": "AccountApplicationOTPVerification",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationOTPVerification_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-16T05:47:50.000+0000",
        "CreatedDate": "2025-06-16T05:34:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GbJEAU"
        },
        "Id": "0jNdy0000003GbJEAU",
        "Name": "AccountApplicationWelcome",
        "Type": "BAO",
        "SubType": "AccountApplicationWelcome",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationWelcome_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-16T05:29:21.000+0000",
        "CreatedDate": "2025-06-10T02:12:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GcvEAE"
        },
        "Id": "0jNdy0000003GcvEAE",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-16T04:59:01.000+0000",
        "CreatedDate": "2025-06-10T02:13:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003GhlEAE"
        },
        "Id": "0jNdy0000003GhlEAE",
        "Name": "AccountApplicationAboutYou",
        "Type": "BAO",
        "SubType": "AccountApplicationAboutYou",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationAboutYou_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-06-13T12:59:58.000+0000",
        "CreatedDate": "2025-06-10T02:51:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003IZtEAM"
        },
        "Id": "0jNdy0000003IZtEAM",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        },
        "LastModifiedDate": "2025-06-12T13:58:24.000+0000",
        "CreatedDate": "2025-06-12T13:58:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy00000BT0OhAAL"
            },
            "Name": "Sumit Kumar"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000003IWfEAM"
        },
        "Id": "0jNdy0000003IWfEAM",
        "Name": "AccountApplicationMembershipCheck",
        "Type": "BAO",
        "SubType": "AccountApplicationMembershipCheck",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "BAO_AccountApplicationMembershipCheck_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-06-12T12:08:39.000+0000",
        "CreatedDate": "2025-06-12T12:08:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000szhEAA"
        },
        "Id": "0jIdy0000000szhEAA",
        "Name": "DRBusinessAssessmentDataTransformCloneV2",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRBusinessAssessmentDataTransformCloneV2_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-11T12:59:14.000+0000",
        "CreatedDate": "2025-06-11T11:39:24.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000nWzEAI"
        },
        "Id": "0jIdy0000000nWzEAI",
        "Name": "DRGetOtpLockesOut",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetOtpLockesOut_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-11T10:26:49.000+0000",
        "CreatedDate": "2025-05-12T10:23:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000bIvEAI"
        },
        "Id": "0jIdy0000000bIvEAI",
        "Name": "baoDRCheckEINonAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRCheckEINonAccount_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-10T19:56:30.000+0000",
        "CreatedDate": "2025-03-11T10:12:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000fj7EAA"
        },
        "Id": "0jIdy0000000fj7EAA",
        "Name": "DRCertificateRates",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCertificateRates_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-10T03:45:45.000+0000",
        "CreatedDate": "2025-04-01T05:51:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002XpVEAU"
        },
        "Id": "0jNdy0000002XpVEAU",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_15",
        "VersionNumber": 15,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-09T04:48:34.000+0000",
        "CreatedDate": "2025-05-15T15:31:50.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002boHEAQ"
        },
        "Id": "0jNdy0000002boHEAQ",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_17",
        "VersionNumber": 17,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-06-09T01:23:40.000+0000",
        "CreatedDate": "2025-05-30T02:37:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002xdVEAQ"
        },
        "Id": "0jNdy0000002xdVEAQ",
        "Name": "IP_VerifyingOTP",
        "Type": "Verify",
        "SubType": "OTP",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Verify_OTP_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-06-04T10:50:16.000+0000",
        "CreatedDate": "2025-06-04T10:49:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rVlEAI"
        },
        "Id": "0jIdy0000000rVlEAI",
        "Name": "DRGetApplicationForm",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetApplicationForm_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-04T09:45:41.000+0000",
        "CreatedDate": "2025-06-03T11:00:46.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002kl7EAA"
        },
        "Id": "0jNdy0000002kl7EAA",
        "Name": "ProcessAdditionalOwnerDecision",
        "Type": "BAO",
        "SubType": "ProcessAdditionalOwnerDecision",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_ProcessAdditionalOwnerDecision_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-06-02T20:33:42.000+0000",
        "CreatedDate": "2025-06-02T20:11:18.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002kgHEAQ"
        },
        "Id": "0jNdy0000002kgHEAQ",
        "Name": "GetAdditionalOwnerDetails",
        "Type": "BAO",
        "SubType": "GetAdditionalOwnerDetails",
        "OmniProcessType": "Integration Procedure",
        "IsActive": true,
        "UniqueName": "BAO_GetAdditionalOwnerDetails_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        },
        "LastModifiedDate": "2025-06-02T19:32:30.000+0000",
        "CreatedDate": "2025-06-02T15:12:05.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000009P5AbAAK"
            },
            "Name": "Andres Deus"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000rM5EAI"
        },
        "Id": "0jIdy0000000rM5EAI",
        "Name": "aoExtractConsumerProductsforOnline",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "aoExtractConsumerProductsforOnline_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-06-02T16:58:49.000+0000",
        "CreatedDate": "2025-05-31T04:35:21.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002bBZEAY"
        },
        "Id": "0jNdy0000002bBZEAY",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "AccountOpening_BusinessV2_English_51",
        "VersionNumber": 51,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-05-29T11:11:21.000+0000",
        "CreatedDate": "2025-05-28T21:31:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002b9xEAA"
        },
        "Id": "0jNdy0000002b9xEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_50",
        "VersionNumber": 50,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-05-28T21:33:25.000+0000",
        "CreatedDate": "2025-05-28T21:11:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000001NPBEA2"
        },
        "Id": "0jNdy0000001NPBEA2",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_49",
        "VersionNumber": 49,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-05-28T21:14:39.000+0000",
        "CreatedDate": "2025-03-05T18:33:35.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000026MHEAY"
        },
        "Id": "0jNdy00000026MHEAY",
        "Name": "IPsaveFundingAccount",
        "Type": "Funding",
        "SubType": "Account",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Funding_Account_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-05-28T11:09:55.000+0000",
        "CreatedDate": "2025-04-14T06:48:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002a7REAQ"
        },
        "Id": "0jNdy0000002a7REAQ",
        "Name": "Consumer Account Opening",
        "Type": "Consumer",
        "SubType": "AccountOpening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Consumer_AccountOpening_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-05-27T18:50:58.000+0000",
        "CreatedDate": "2025-05-27T03:33:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002aH7EAI"
        },
        "Id": "0jNdy0000002aH7EAI",
        "Name": "Consumer Account Opening",
        "Type": "Consumer",
        "SubType": "AccountOpening",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Consumer_AccountOpening_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-05-27T18:50:58.000+0000",
        "CreatedDate": "2025-05-27T15:22:14.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002a5pEAA"
        },
        "Id": "0jNdy0000002a5pEAA",
        "Name": "Consumer Account Opening",
        "Type": "Consumer",
        "SubType": "AccountOpening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Consumer_AccountOpening_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-05-27T15:20:11.000+0000",
        "CreatedDate": "2025-05-26T22:28:29.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002a4DEAQ"
        },
        "Id": "0jNdy0000002a4DEAQ",
        "Name": "Consumer Account Opening",
        "Type": "Consumer",
        "SubType": "AccountOpening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Consumer_AccountOpening_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-05-26T22:29:02.000+0000",
        "CreatedDate": "2025-05-26T20:24:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000hbFEAQ"
        },
        "Id": "0jIdy0000000hbFEAQ",
        "Name": "DRGetApplicationformProducts",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRGetApplicationformProducts_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-05-23T12:14:24.000+0000",
        "CreatedDate": "2025-04-10T07:44:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002SzVEAU"
        },
        "Id": "0jNdy0000002SzVEAU",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_13",
        "VersionNumber": 13,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-05-21T06:45:33.000+0000",
        "CreatedDate": "2025-05-02T04:58:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002SwHEAU"
        },
        "Id": "0jNdy0000002SwHEAU",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_12",
        "VersionNumber": 12,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-05-15T09:54:50.000+0000",
        "CreatedDate": "2025-05-01T13:25:54.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy000000262vEAA"
        },
        "Id": "0jNdy000000262vEAA",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-05-13T05:14:05.000+0000",
        "CreatedDate": "2025-04-10T05:05:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002TynEAE"
        },
        "Id": "0jNdy0000002TynEAE",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "LastModifiedDate": "2025-05-08T14:21:41.000+0000",
        "CreatedDate": "2025-05-06T14:07:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002SmbEAE"
        },
        "Id": "0jNdy0000002SmbEAE",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_11",
        "VersionNumber": 11,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-05-07T05:41:32.000+0000",
        "CreatedDate": "2025-04-29T18:56:25.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002TYzEAM"
        },
        "Id": "0jNdy0000002TYzEAM",
        "Name": "SendRequestToAlloy",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Account_Opening_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "LastModifiedDate": "2025-05-06T13:02:14.000+0000",
        "CreatedDate": "2025-05-05T10:21:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002RQjEAM"
        },
        "Id": "0jNdy0000002RQjEAM",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "LastModifiedDate": "2025-05-06T12:51:09.000+0000",
        "CreatedDate": "2025-04-25T19:47:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002SufEAE"
        },
        "Id": "0jNdy0000002SufEAE",
        "Name": "test",
        "Type": "Test",
        "SubType": "Integration",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Test_Integration_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "LastModifiedDate": "2025-04-30T18:50:01.000+0000",
        "CreatedDate": "2025-04-30T18:49:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002S9tEAE"
        },
        "Id": "0jNdy0000002S9tEAE",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_10",
        "VersionNumber": 10,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        },
        "LastModifiedDate": "2025-04-29T19:13:33.000+0000",
        "CreatedDate": "2025-04-28T19:59:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002POvEAM"
        },
        "Id": "0jNdy0000002POvEAM",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_9",
        "VersionNumber": 9,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-04-29T05:34:53.000+0000",
        "CreatedDate": "2025-04-24T17:07:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000bSbEAI"
        },
        "Id": "0jIdy0000000bSbEAI",
        "Name": "baoDRExtractcheckMembandAccNo",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRExtractcheckMembandAccNo_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-04-24T09:59:03.000+0000",
        "CreatedDate": "2025-03-12T05:41:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002JTBEA2"
        },
        "Id": "0jNdy0000002JTBEA2",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_8",
        "VersionNumber": 8,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "LastModifiedDate": "2025-04-22T12:37:06.000+0000",
        "CreatedDate": "2025-04-22T12:37:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002JJVEA2"
        },
        "Id": "0jNdy0000002JJVEA2",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        },
        "LastModifiedDate": "2025-04-21T22:54:10.000+0000",
        "CreatedDate": "2025-04-21T22:53:02.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008iVzZAAU"
            },
            "Name": "Amarjit Singh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy000000267lEAA"
        },
        "Id": "0jNdy000000267lEAA",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        },
        "LastModifiedDate": "2025-04-21T03:07:49.000+0000",
        "CreatedDate": "2025-04-10T19:19:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000008KR5tAAG"
            },
            "Name": "Roshna Ramesh"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000002Bk9EAE"
        },
        "Id": "0jNdy0000002Bk9EAE",
        "Name": "GetAlloyBearerToken",
        "Type": "GetGoogle",
        "SubType": "GetAlloyBearerToken",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetAlloyBearerToken_Procedure_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-04-17T08:54:25.000+0000",
        "CreatedDate": "2025-04-16T13:10:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000001VrNEAU"
        },
        "Id": "0jNdy0000001VrNEAU",
        "Name": "IptoUpdateApplicationformandIdentitydoc",
        "Type": "Applicationform",
        "SubType": "IdentityDocument",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "Applicationform_IdentityDocument_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-04-16T07:09:56.000+0000",
        "CreatedDate": "2025-03-13T10:05:09.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000001HrdEAE"
        },
        "Id": "0jNdy0000001HrdEAE",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_48",
        "VersionNumber": 48,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-04-15T23:10:37.000+0000",
        "CreatedDate": "2025-02-26T23:47:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000hplEAA"
        },
        "Id": "0jIdy0000000hplEAA",
        "Name": "DRCreateFundingAccount",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "DRCreateFundingAccount_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-04-14T06:49:27.000+0000",
        "CreatedDate": "2025-04-14T06:49:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy000000227NEAQ"
        },
        "Id": "0jNdy000000227NEAQ",
        "Name": "bao_ AccountApplication",
        "Type": "Account",
        "SubType": "Opening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Account_Opening_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-04-02T23:06:20.000+0000",
        "CreatedDate": "2025-04-01T07:31:53.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000cOfEAI"
        },
        "Id": "0jIdy0000000cOfEAI",
        "Name": "baoDRCheckSSN",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRCheckSSN_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-03-19T05:17:10.000+0000",
        "CreatedDate": "2025-03-19T04:40:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000bfVEAQ"
        },
        "Id": "0jIdy0000000bfVEAQ",
        "Name": "baoDRTransformPrimaryApplicant",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRTransformPrimaryApplicant_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-03-13T07:42:02.000+0000",
        "CreatedDate": "2025-03-13T05:18:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000bFhEAI"
        },
        "Id": "0jIdy0000000bFhEAI",
        "Name": "baoDRUpdateApplicationformandIdentityDocument",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRUpdateApplicationformandIdentityDocument_1",
        "InputType": "JSON",
        "OutputType": "SObject",
        "LastModifiedDate": "2025-03-12T07:57:04.000+0000",
        "CreatedDate": "2025-03-11T09:28:32.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Load"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000awLEAQ"
        },
        "Id": "0jIdy0000000awLEAQ",
        "Name": "baoDRGetComunnity",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "baoDRGetComunnity_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-03-10T04:12:07.000+0000",
        "CreatedDate": "2025-03-07T10:42:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000NkbEAE"
        },
        "Id": "0jIdy0000000NkbEAE",
        "Name": "aoExtractEligibleOrgsV2",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "VersionNumber": 1,
        "UniqueName": "aoExtractEligibleOrgsV2_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-03-06T04:58:37.000+0000",
        "CreatedDate": "2025-02-04T23:28:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000ui9EAA"
        },
        "Id": "0jNdy0000000ui9EAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_42",
        "VersionNumber": 42,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-26T23:48:55.000+0000",
        "CreatedDate": "2025-02-19T15:57:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy00000010xFEAQ"
        },
        "Id": "0jNdy00000010xFEAQ",
        "Name": "bao_CreateSelectedAccount",
        "Type": "Selected",
        "SubType": "Account",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "Selected_Account_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-02-26T11:13:42.000+0000",
        "CreatedDate": "2025-02-26T10:47:55.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000uqDEAQ"
        },
        "Id": "0jNdy0000000uqDEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_44",
        "VersionNumber": 44,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-02-25T07:27:29.000+0000",
        "CreatedDate": "2025-02-20T02:33:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000wDhEAI"
        },
        "Id": "0jNdy0000000wDhEAI",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_45",
        "VersionNumber": 45,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007HtFNAA0"
            },
            "Name": "Wazid Mohammad"
        },
        "LastModifiedDate": "2025-02-25T07:25:24.000+0000",
        "CreatedDate": "2025-02-24T06:21:04.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000y7REAQ"
        },
        "Id": "0jNdy0000000y7REAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_47",
        "VersionNumber": 47,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-24T16:31:06.000+0000",
        "CreatedDate": "2025-02-24T16:31:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000wFJEAY"
        },
        "Id": "0jNdy0000000wFJEAY",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_46",
        "VersionNumber": 46,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-24T06:32:59.000+0000",
        "CreatedDate": "2025-02-24T06:32:59.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000uobEAA"
        },
        "Id": "0jNdy0000000uobEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_43",
        "VersionNumber": 43,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000007rh9FAAQ"
            },
            "Name": "Sohail Sikora"
        },
        "LastModifiedDate": "2025-02-19T20:33:50.000+0000",
        "CreatedDate": "2025-02-19T19:59:03.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000o3FEAQ"
        },
        "Id": "0jNdy0000000o3FEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_41",
        "VersionNumber": 41,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-19T16:00:09.000+0000",
        "CreatedDate": "2025-02-19T06:23:10.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000o1dEAA"
        },
        "Id": "0jNdy0000000o1dEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_40",
        "VersionNumber": 40,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-19T15:54:51.000+0000",
        "CreatedDate": "2025-02-19T05:06:34.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000o01EAA"
        },
        "Id": "0jNdy0000000o01EAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_39",
        "VersionNumber": 39,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-19T05:18:49.000+0000",
        "CreatedDate": "2025-02-19T04:59:49.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nyPEAQ"
        },
        "Id": "0jNdy0000000nyPEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_38",
        "VersionNumber": 38,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-19T05:03:29.000+0000",
        "CreatedDate": "2025-02-19T00:35:14.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nwnEAA"
        },
        "Id": "0jNdy0000000nwnEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_37",
        "VersionNumber": 37,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-19T01:53:34.000+0000",
        "CreatedDate": "2025-02-18T21:55:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nf3EAA"
        },
        "Id": "0jNdy0000000nf3EAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_35",
        "VersionNumber": 35,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-19T00:34:00.000+0000",
        "CreatedDate": "2025-02-17T07:24:22.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nvBEAQ"
        },
        "Id": "0jNdy0000000nvBEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_36",
        "VersionNumber": 36,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-18T16:30:30.000+0000",
        "CreatedDate": "2025-02-18T16:30:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nbpEAA"
        },
        "Id": "0jNdy0000000nbpEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_33",
        "VersionNumber": 33,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-18T03:50:39.000+0000",
        "CreatedDate": "2025-02-17T05:27:21.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000ndREAQ"
        },
        "Id": "0jNdy0000000ndREAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_34",
        "VersionNumber": 34,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-17T06:40:27.000+0000",
        "CreatedDate": "2025-02-17T06:40:27.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000naDEAQ"
        },
        "Id": "0jNdy0000000naDEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_32",
        "VersionNumber": 32,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-17T05:28:26.000+0000",
        "CreatedDate": "2025-02-17T05:17:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nYbEAI"
        },
        "Id": "0jNdy0000000nYbEAI",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_31",
        "VersionNumber": 31,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-17T05:25:52.000+0000",
        "CreatedDate": "2025-02-17T05:13:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nWzEAI"
        },
        "Id": "0jNdy0000000nWzEAI",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_30",
        "VersionNumber": 30,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-17T05:15:19.000+0000",
        "CreatedDate": "2025-02-17T04:58:17.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000nVNEAY"
        },
        "Id": "0jNdy0000000nVNEAY",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_29",
        "VersionNumber": 29,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-17T04:59:06.000+0000",
        "CreatedDate": "2025-02-17T02:31:33.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000m7tEAA"
        },
        "Id": "0jNdy0000000m7tEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_28",
        "VersionNumber": 28,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-17T04:29:15.000+0000",
        "CreatedDate": "2025-02-13T21:08:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000m6HEAQ"
        },
        "Id": "0jNdy0000000m6HEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_27",
        "VersionNumber": 27,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-17T02:26:24.000+0000",
        "CreatedDate": "2025-02-13T18:19:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000m1REAQ"
        },
        "Id": "0jNdy0000000m1REAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_26",
        "VersionNumber": 26,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-13T19:02:49.000+0000",
        "CreatedDate": "2025-02-13T16:32:47.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000loXEAQ"
        },
        "Id": "0jNdy0000000loXEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_25",
        "VersionNumber": 25,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-13T16:42:37.000+0000",
        "CreatedDate": "2025-02-13T05:37:36.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000llJEAQ"
        },
        "Id": "0jNdy0000000llJEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_24",
        "VersionNumber": 24,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-13T05:48:11.000+0000",
        "CreatedDate": "2025-02-12T16:44:09.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000li5EAA"
        },
        "Id": "0jNdy0000000li5EAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_23",
        "VersionNumber": 23,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-13T04:55:38.000+0000",
        "CreatedDate": "2025-02-11T18:24:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lgTEAQ"
        },
        "Id": "0jNdy0000000lgTEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_22",
        "VersionNumber": 22,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T18:57:00.000+0000",
        "CreatedDate": "2025-02-11T18:19:31.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lerEAA"
        },
        "Id": "0jNdy0000000lerEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_21",
        "VersionNumber": 21,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T18:21:48.000+0000",
        "CreatedDate": "2025-02-11T17:42:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000ldFEAQ"
        },
        "Id": "0jNdy0000000ldFEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_20",
        "VersionNumber": 20,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T18:16:12.000+0000",
        "CreatedDate": "2025-02-11T17:31:26.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000la1EAA"
        },
        "Id": "0jNdy0000000la1EAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_19",
        "VersionNumber": 19,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T17:41:12.000+0000",
        "CreatedDate": "2025-02-11T15:38:45.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lQLEAY"
        },
        "Id": "0jNdy0000000lQLEAY",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_18",
        "VersionNumber": 18,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T17:29:20.000+0000",
        "CreatedDate": "2025-02-10T23:38:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lbdEAA"
        },
        "Id": "0jNdy0000000lbdEAA",
        "Name": "AFCU",
        "Type": "Business",
        "SubType": "AccountOpening",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "Business_AccountOpening_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T17:13:24.000+0000",
        "CreatedDate": "2025-02-11T15:47:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lYPEAY"
        },
        "Id": "0jNdy0000000lYPEAY",
        "Name": "AccountOpening",
        "Type": "AccountOpening",
        "SubType": "BusinessV3",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV3_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T15:36:37.000+0000",
        "CreatedDate": "2025-02-11T15:36:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lF3EAI"
        },
        "Id": "0jNdy0000000lF3EAI",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_17",
        "VersionNumber": 17,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-11T05:28:43.000+0000",
        "CreatedDate": "2025-02-09T01:35:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000OLhEAM"
        },
        "Id": "0jIdy0000000OLhEAM",
        "Name": "baoTransformProductOwnership",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "baoTransformProductOwnership_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-02-10T23:45:10.000+0000",
        "CreatedDate": "2025-02-10T15:30:05.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Transform"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000l6zEAA"
        },
        "Id": "0jNdy0000000l6zEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_15",
        "VersionNumber": 15,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-10T22:20:36.000+0000",
        "CreatedDate": "2025-02-07T22:36:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lDREAY"
        },
        "Id": "0jNdy0000000lDREAY",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_12",
        "VersionNumber": 12,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-09T01:29:38.000+0000",
        "CreatedDate": "2025-02-09T01:29:38.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lBpEAI"
        },
        "Id": "0jNdy0000000lBpEAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_11",
        "VersionNumber": 11,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-08T00:22:30.000+0000",
        "CreatedDate": "2025-02-08T00:22:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000ku5EAA"
        },
        "Id": "0jNdy0000000ku5EAA",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_9",
        "VersionNumber": 9,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-08T00:13:53.000+0000",
        "CreatedDate": "2025-02-07T16:38:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000lADEAY"
        },
        "Id": "0jNdy0000000lADEAY",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "AccountOpening_BusinessEmbed_English_10",
        "VersionNumber": 10,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-08T00:13:53.000+0000",
        "CreatedDate": "2025-02-07T23:59:19.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000l8bEAA"
        },
        "Id": "0jNdy0000000l8bEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_16",
        "VersionNumber": 16,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T23:42:37.000+0000",
        "CreatedDate": "2025-02-07T23:42:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000l3lEAA"
        },
        "Id": "0jNdy0000000l3lEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_13",
        "VersionNumber": 13,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T23:41:49.000+0000",
        "CreatedDate": "2025-02-07T17:58:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000l5NEAQ"
        },
        "Id": "0jNdy0000000l5NEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_14",
        "VersionNumber": 14,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T22:36:07.000+0000",
        "CreatedDate": "2025-02-07T22:36:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000l29EAA"
        },
        "Id": "0jNdy0000000l29EAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_12",
        "VersionNumber": 12,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T18:53:35.000+0000",
        "CreatedDate": "2025-02-07T17:51:51.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kvhEAA"
        },
        "Id": "0jNdy0000000kvhEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_11",
        "VersionNumber": 11,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T17:57:22.000+0000",
        "CreatedDate": "2025-02-07T16:45:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kinEAA"
        },
        "Id": "0jNdy0000000kinEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_10",
        "VersionNumber": 10,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T16:49:41.000+0000",
        "CreatedDate": "2025-02-07T04:26:56.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000khBEAQ"
        },
        "Id": "0jNdy0000000khBEAQ",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_8",
        "VersionNumber": 8,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T16:42:49.000+0000",
        "CreatedDate": "2025-02-07T03:26:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kfZEAQ"
        },
        "Id": "0jNdy0000000kfZEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_9",
        "VersionNumber": 9,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T04:27:22.000+0000",
        "CreatedDate": "2025-02-07T02:09:30.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kVtEAI"
        },
        "Id": "0jNdy0000000kVtEAI",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_8",
        "VersionNumber": 8,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T04:23:13.000+0000",
        "CreatedDate": "2025-02-06T16:54:13.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kFlEAI"
        },
        "Id": "0jNdy0000000kFlEAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-07T04:21:44.000+0000",
        "CreatedDate": "2025-02-05T19:20:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kUHEAY"
        },
        "Id": "0jNdy0000000kUHEAY",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_7",
        "VersionNumber": 7,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-06T16:54:34.000+0000",
        "CreatedDate": "2025-02-06T16:51:52.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kIzEAI"
        },
        "Id": "0jNdy0000000kIzEAI",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-06T16:53:14.000+0000",
        "CreatedDate": "2025-02-06T04:22:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kHNEAY"
        },
        "Id": "0jNdy0000000kHNEAY",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-06T06:45:29.000+0000",
        "CreatedDate": "2025-02-05T19:59:15.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000NuHEAU"
        },
        "Id": "0jIdy0000000NuHEAU",
        "Name": "aogetAllPersonMembers",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "aogetAllPersonMembers_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-02-06T04:30:55.000+0000",
        "CreatedDate": "2025-02-06T04:25:39.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kCXEAY"
        },
        "Id": "0jNdy0000000kCXEAY",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T20:00:28.000+0000",
        "CreatedDate": "2025-02-05T17:43:57.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000k9JEAQ"
        },
        "Id": "0jNdy0000000k9JEAQ",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T19:58:39.000+0000",
        "CreatedDate": "2025-02-05T16:11:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kE9EAI"
        },
        "Id": "0jNdy0000000kE9EAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_6",
        "VersionNumber": 6,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T19:43:17.000+0000",
        "CreatedDate": "2025-02-05T18:11:06.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000kAvEAI"
        },
        "Id": "0jNdy0000000kAvEAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_5",
        "VersionNumber": 5,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T18:28:28.000+0000",
        "CreatedDate": "2025-02-05T16:44:40.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jefEAA"
        },
        "Id": "0jNdy0000000jefEAA",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T16:47:23.000+0000",
        "CreatedDate": "2025-02-03T23:01:01.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jWbEAI"
        },
        "Id": "0jNdy0000000jWbEAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T16:45:25.000+0000",
        "CreatedDate": "2025-02-02T23:09:07.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000junEAA"
        },
        "Id": "0jNdy0000000junEAA",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T16:10:23.000+0000",
        "CreatedDate": "2025-02-05T00:04:43.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jMvEAI"
        },
        "Id": "0jNdy0000000jMvEAI",
        "Name": "AFCU Business Onboarding _ NO_DF",
        "Type": "AccountOpening",
        "SubType": "BusinessV2",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessV2_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-05T07:08:53.000+0000",
        "CreatedDate": "2025-02-02T06:12:37.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniDataTransform",
            "url": "/services/data/v64.0/sobjects/OmniDataTransform/0jIdy0000000NflEAE"
        },
        "Id": "0jIdy0000000NflEAE",
        "Name": "ExtractEligibleAcctList",
        "Type": "JSON",
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "VersionNumber": 1,
        "UniqueName": "ExtractEligibleAcctList_1",
        "InputType": "JSON",
        "OutputType": "JSON",
        "LastModifiedDate": "2025-02-03T23:58:35.000+0000",
        "CreatedDate": "2025-02-03T23:51:20.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "OmniProcessType": "Data Mapper",
        "SubType": "Extract"
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jUzEAI"
        },
        "Id": "0jNdy0000000jUzEAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-02T23:30:05.000+0000",
        "CreatedDate": "2025-02-02T22:53:44.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jOXEAY"
        },
        "Id": "0jNdy0000000jOXEAY",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "BusinessEmbed",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_BusinessEmbed_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-02T22:56:28.000+0000",
        "CreatedDate": "2025-02-02T06:22:23.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jTNEAY"
        },
        "Id": "0jNdy0000000jTNEAY",
        "Name": "GetCityStateByPostalCode",
        "Type": "GetGoogle",
        "SubType": "GetCityStateByPostalCode",
        "OmniProcessType": "Integration Procedure",
        "IsActive": false,
        "UniqueName": "GetGoogle_GetCityStateByPostalCode_Procedure_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-02T07:18:02.000+0000",
        "CreatedDate": "2025-02-02T06:41:28.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jRlEAI"
        },
        "Id": "0jNdy0000000jRlEAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "Business",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_Business_English_4",
        "VersionNumber": 4,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-02T06:28:42.000+0000",
        "CreatedDate": "2025-02-02T06:28:42.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jQ9EAI"
        },
        "Id": "0jNdy0000000jQ9EAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "Business",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_Business_English_3",
        "VersionNumber": 3,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-02T06:25:00.000+0000",
        "CreatedDate": "2025-02-02T06:25:00.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jLJEAY"
        },
        "Id": "0jNdy0000000jLJEAY",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "Business",
        "OmniProcessType": "OmniScript",
        "IsActive": true,
        "UniqueName": "AccountOpening_Business_English_2",
        "VersionNumber": 2,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-02T06:14:33.000+0000",
        "CreatedDate": "2025-02-02T05:44:58.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    },
    {
        "attributes": {
            "type": "OmniProcess",
            "url": "/services/data/v64.0/sobjects/OmniProcess/0jNdy0000000jJhEAI"
        },
        "Id": "0jNdy0000000jJhEAI",
        "Name": "AFCU Business Account Opening",
        "Type": "AccountOpening",
        "SubType": "Business",
        "OmniProcessType": "OmniScript",
        "IsActive": false,
        "UniqueName": "AccountOpening_Business_English_1",
        "VersionNumber": 1,
        "LastModifiedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        },
        "LastModifiedDate": "2025-02-02T06:14:33.000+0000",
        "CreatedDate": "2025-02-02T04:47:08.000+0000",
        "CreatedBy": {
            "attributes": {
                "type": "User",
                "url": "/services/data/v64.0/sobjects/User/005dy000005Rw5SAAS"
            },
            "Name": "Ricki Reay"
        }
    }
]; */
    
});

async function initialize(){
    conn = await getConnection(baseUrl, sessionId);
    //console.log('$conn: ',conn);
    callOnInitialized();
}

$(document).on('click', '.btn-fixed', function (e){
   showSpinner();
   callOnInitialized();
});

async function callOnInitialized(){
    var myHeaders = new Headers();
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let filter = 'AllTypes';
    
    fetch("https://techsimplifier-dev-ed.my.site.com/services/apexrest/omnistudio/"+filter, requestOptions).then(response => response.json()).then(result => {
        //console.log('$API-OMNI: ', result);
        let resp = JSON.parse(result);
        //console.log('$resp: ',resp);

        recordsArray = [...resp.OmniIp.records];
        //console.log('$recordsArray: ',recordsArray);

        let dataraptors = [...resp.DataRP.records];

        dataraptors.forEach(dr => {
            let drRec = {...dr};
            drRec.OmniProcessType = 'Data Mapper';
            drRec.SubType = drRec.Type;
            drRec.Type = drRec.InputType;
            recordsArray.push(drRec);
        });

        //console.log('$recordsArray: ',recordsArray);

        recordsArray.sort((a, b) => { 
            const dateA = new Date(a.LastModifiedDate);
            const dateB = new Date(b.LastModifiedDate);
            return dateB - dateA;
        });


        generateCards();
        hideSpinner();

    }).catch(error => {
        console.log('$API: error', error);
    });
}
let osList;
let ipList;
let drList;
let osList_All;
let ipList_All;
let drList_All;
function generateCards(){

    let i = 0;
    osList = [];
    ipList = [];
    drList = [];
    while(i < recordsArray.length){
        let rec = recordsArray[i];
        if(rec.OmniProcessType == 'OmniScript'){
            osList.push(rec);
        }else if(rec.OmniProcessType == 'Integration Procedure'){
            ipList.push(rec);
        }else if(rec.OmniProcessType == 'Data Mapper'){
            drList.push(rec);
        }
        i++;
    }
    //console.log('$osList: ',osList);
    //console.log('$ipList: ',ipList);
    //console.log('$drList: ',drList);
    osList_All = [...osList];
    ipList_All = [...ipList];
    drList_All = [...drList];


    generateOSCards();
    generateIPCards();
    generateDRCards();
}

$(document).on('input', '.inp_omni', function (e) {
    let search_text = $(this).val().trim();
    //console.log('$search_text: ', search_text);

    if(search_text.includes(':')){
        let requests = search_text.split(':').filter(Boolean);
        //console.log('$requests: ',requests);

        if(requests.length > 1){
            let requestType = requests.at(0);
            //console.log('$requestType: ',requestType);
            let requestValue = requests.at(1);
            //console.log('$requestValue: ',requestValue);

            let extraParam = requests?.at(2);
            //console.log('$extraParam: ',extraParam);   

            if(requestType == 't'){
                let recs;
                if(extraParam == 'a'){
                    recs = osList_All.filter(rec => {
                        return rec.Type.toLowerCase() == requestValue.toLowerCase() && rec.IsActive == true;
                    });
                }else{
                    recs = osList_All.filter(rec => {
                        return rec.Type.toLowerCase() == requestValue.toLowerCase();
                    });
                }
                //console.log('$recs: ', recs);
                osList = [...recs];
                generateOSCards();
                if(osList.length){
                    document.title = `Omni Components - [${osList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }else if(requestType == 'm'){
                let recs;
                if(extraParam == 'a'){
                    recs = osList_All.filter(rec => {
                        return rec.LastModifiedBy.Name.toLowerCase().includes(requestValue.toLowerCase()) && rec.IsActive == true;
                    });
                }else{
                    recs = osList_All.filter(rec => {
                        return rec.LastModifiedBy.Name.toLowerCase().includes(requestValue.toLowerCase());
                    });
                }
                //console.log('$recs: ', recs);
                osList = [...recs];
                generateOSCards();
                if(osList.length){
                    document.title = `Omni Components - [${osList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }else if(requestType == 'c'){
                let recs;
                if(extraParam == 'a'){
                    recs = osList_All.filter(rec => {
                        return rec.CreatedBy.Name.toLowerCase().includes(requestValue.toLowerCase()) && rec.IsActive == true;
                    });
                }else{
                    recs = osList_All.filter(rec => {
                        return rec.CreatedBy.Name.toLowerCase().includes(requestValue.toLowerCase());
                    });
                }
                //console.log('$recs: ', recs);
                osList = [...recs];
                generateOSCards();
                if(osList.length){
                    document.title = `Omni Components - [${osList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }else if(requestType == 's'){
                let recs;
                if(extraParam == 'a'){
                    recs = osList_All.filter(rec => {
                        return rec.SubType.toLowerCase() == requestValue.toLowerCase() && rec.IsActive == true;
                    });
                }else{
                    recs = osList_All.filter(rec => {
                        return rec.SubType.toLowerCase() == requestValue.toLowerCase();
                    });
                }
                //console.log('$recs: ', recs);
                osList = [...recs];
                generateOSCards();
                if(osList.length){
                    document.title = `Omni Components - [${osList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }
        }

    }else{
        let recs = osList_All.filter(rec => {
            return rec.UniqueName.toLowerCase().includes(search_text.toLowerCase());
        });
        //console.log('$recs: ', recs);
        osList = [...recs];
        generateOSCards();
        if(osList.length){
            document.title = `Omni Components - [${osList.length}]`;
        }else{
            document.title = `Omni Components`;
        }
    }

});
$(document).on('input', '.inp_ip', function (e) {
    let search_text = $(this).val().trim();
    //console.log('$search_text-IP: ', search_text);

    if(search_text.includes(':')){
        let requests = search_text.split(':').filter(Boolean);
        //console.log('$requests: ',requests);

        if(requests.length > 1){
            let requestType = requests.at(0);
            //console.log('$requestType: ',requestType);
            let requestValue = requests.at(1);
            //console.log('$requestValue: ',requestValue);

            let extraParam = requests?.at(2);
            //console.log('$extraParam: ',extraParam);   

            if(requestType == 't'){
                let recs;
                if(extraParam == 'a'){
                    recs = ipList_All.filter(rec => {
                        return rec.Type.toLowerCase() == requestValue.toLowerCase() && rec.IsActive == true;
                    });
                }else{
                    recs = ipList_All.filter(rec => {
                        return rec.Type.toLowerCase() == requestValue.toLowerCase();
                    });
                }
                //console.log('$recs: ', recs);
                ipList = [...recs];
                generateIPCards();
                if(ipList.length){
                    document.title = `Omni Components - [${ipList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }else if(requestType == 'm'){
                let recs;
                if(extraParam == 'a'){
                    recs = ipList_All.filter(rec => {
                        return rec.LastModifiedBy.Name.toLowerCase().includes(requestValue.toLowerCase()) && rec.IsActive == true;
                    });
                }else{
                    recs = ipList_All.filter(rec => {
                        return rec.LastModifiedBy.Name.toLowerCase().includes(requestValue.toLowerCase());
                    });
                }
                //console.log('$recs: ', recs);
                ipList = [...recs];
                generateIPCards();
                if(ipList.length){
                    document.title = `Omni Components - [${ipList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }else if(requestType == 'c'){
                let recs;
                if(extraParam == 'a'){
                    recs = ipList_All.filter(rec => {
                        return rec.CreatedBy.Name.toLowerCase().includes(requestValue.toLowerCase()) && rec.IsActive == true;
                    });
                }else{
                    recs = ipList_All.filter(rec => {
                        return rec.CreatedBy.Name.toLowerCase().includes(requestValue.toLowerCase());
                    });
                }
                //console.log('$recs: ', recs);
                ipList = [...recs];
                generateIPCards();
                if(ipList.length){
                    document.title = `Omni Components - [${ipList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }
        }

    }else{
        let recs = ipList_All.filter(rec => {
            return rec.UniqueName.toLowerCase().includes(search_text.toLowerCase());
        });
        //console.log('$recs: ', recs);
        ipList = [...recs];
        generateIPCards();
        if(ipList.length){
            document.title = `Omni Components - [${ipList.length}]`;
        }else{
            document.title = `Omni Components`;
        }
    }

});

$(document).on('input', '.inp_dr', function (e) {
    let search_text = $(this).val().trim();
    //console.log('$search_text-IP: ', search_text);

    if(search_text.includes(':')){
        let requests = search_text.split(':').filter(Boolean);
        //console.log('$requests: ',requests);

        if(requests.length > 1){
            let requestType = requests.at(0);
            //console.log('$requestType: ',requestType);
            let requestValue = requests.at(1);
            //console.log('$requestValue: ',requestValue);

            let extraParam = requests?.at(2);
            //console.log('$extraParam: ',extraParam);   

            if(requestType == 't'){
                let recs;
                if(extraParam == 'a'){
                    recs = drList_All.filter(rec => {
                        return rec.SubType.toLowerCase().includes(requestValue.toLowerCase()) && rec.IsActive == true;
                    });
                }else{
                    recs = drList_All.filter(rec => {
                        return rec.SubType.toLowerCase().includes(requestValue.toLowerCase());
                    });
                }
                //console.log('$recs: ', recs);
                drList = [...recs];
                generateDRCards();
                if(drList.length){
                    document.title = `Omni Components - [${drList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }else if(requestType == 'm'){
                let recs;
                if(extraParam == 'a'){
                    recs = drList_All.filter(rec => {
                        return rec.LastModifiedBy.Name.toLowerCase().includes(requestValue.toLowerCase()) && rec.IsActive == true;
                    });
                }else{
                    recs = drList_All.filter(rec => {
                        return rec.LastModifiedBy.Name.toLowerCase().includes(requestValue.toLowerCase());
                    });
                }
                //console.log('$recs: ', recs);
                drList = [...recs];
                generateDRCards();
                if(drList.length){
                    document.title = `Omni Components - [${drList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }else if(requestType == 'c'){
                let recs;
                if(extraParam == 'a'){
                    recs = drList_All.filter(rec => {
                        return rec.CreatedBy.Name.toLowerCase().includes(requestValue.toLowerCase()) && rec.IsActive == true;
                    });
                }else{
                    recs = drList_All.filter(rec => {
                        return rec.CreatedBy.Name.toLowerCase().includes(requestValue.toLowerCase());
                    });
                }
                //console.log('$recs: ', recs);
                drList = [...recs];
                generateDRCards();
                if(drList.length){
                    document.title = `Omni Components - [${drList.length}]`;
                }else{
                    document.title = `Omni Components`;
                }
            }
        }

    }else{
        let recs = drList_All.filter(rec => {
            return rec.UniqueName.toLowerCase().includes(search_text.toLowerCase());
        });
        //console.log('$recs: ', recs);
        drList = [...recs];
        generateDRCards();
        if(drList.length){
            document.title = `Omni Components - [${drList.length}]`;
        }else{
            document.title = `Omni Components`;
        }
    }

});

function generateOSCards(){
    
    let i = 0;
    let html = '';
    while(i < osList.length){
        let os = osList[i];

        html += `
            <table class="table omnicards_table">
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Type
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.Type}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Sub Type
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.SubType}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        API Name
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.UniqueName}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Version
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.VersionNumber}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Active
                    </td>
                    <td class="td omnicards_td omnicards_td_val" ${os.IsActive ? 'style="color:#1e958a"' : 'style="color:#d6d2d2"'}>
                        ${os.IsActive ? '✔' : '-'}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Modified By
                    </td>
                    <td class="td omnicards_td omnicards_td_val ${os.LastModifiedBy.Name == 'Imtiyaj Khan' ? 'my_name' : ''}">
                        ${os?.LastModifiedBy?.Name}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Modified Date
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${getFormattedDateTime(os.LastModifiedDate)}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Created By
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os?.CreatedBy?.Name}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Created Date
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${getFormattedDateTime(os.CreatedDate)}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col btn_tds">
                        <Button class="btn open_meta" data-recId="${os.Id}" data-uniquename="${os.UniqueName}" data-metadatatype="${os.OmniProcessType}">Open</Button>
                    </td>
                    <td class="td omnicards_td omnicards_td_val btn_tds">
                        <Button class="btn download_meta" data-recId="${os.Id}" data-uniquename="${os.UniqueName}" data-metadatatype="${os.OmniProcessType}">Download</Button>
                    </td>
                </tr>
            </table>
        `;

        i++;
    }

    $('.omnicards').html(html);
}

function generateIPCards(){

    let i = 0;
    html = '';
    while(i < ipList.length){
        let os = ipList[i];

        html += `
            <table class="table omnicards_table">
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Type
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.Type}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Sub Type
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.SubType}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        API Name
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.UniqueName}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Version
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.VersionNumber}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Active
                    </td>
                    <td class="td omnicards_td omnicards_td_val" ${os.IsActive ? 'style="color:#1e958a"' : 'style="color:#d6d2d2"'}>
                        ${os.IsActive ? '✔' : '-'}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Modified By
                    </td>
                    <td class="td omnicards_td omnicards_td_val ${os.LastModifiedBy.Name == 'Imtiyaj Khan' ? 'my_name' : ''}">
                        ${os?.LastModifiedBy?.Name}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Modified Date
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${getFormattedDateTime(os.LastModifiedDate)}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Created By
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os?.CreatedBy?.Name}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Created Date
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${getFormattedDateTime(os.CreatedDate)}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col btn_tds">
                        <Button class="btn open_meta" data-recId="${os.Id}" data-uniquename="${os.UniqueName}" data-metadatatype="${os.OmniProcessType}">Open</Button>
                    </td>
                    <td class="td omnicards_td omnicards_td_val btn_tds">
                        <Button class="btn download_meta" data-recId="${os.Id}" data-uniquename="${os.UniqueName}" data-metadatatype="${os.OmniProcessType}">Download</Button>
                    </td>
                </tr>
            </table>
        `;

        i++;
    }

    $('.ipcards').html(html);
}

function generateDRCards(){

    let i = 0;
    html = '';
    while(i < drList.length){
        let os = drList[i];

        html += `
            <table class="table omnicards_table">
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Type
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.SubType}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        API Name
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os.UniqueName}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Modified By
                    </td>
                    <td class="td omnicards_td omnicards_td_val ${os.LastModifiedBy.Name == 'Imtiyaj Khan' ? 'my_name' : ''}">
                        ${os?.LastModifiedBy?.Name}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Modified Date
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${getFormattedDateTime(os.LastModifiedDate)}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Created By
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${os?.CreatedBy?.Name}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        Created Date
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        ${getFormattedDateTime(os.CreatedDate)}
                    </td>
                </tr>
                <tr class="tr omnicards_tr">
                    <td class="td omnicards_td omnicards_td_col">
                        <Button class="btn open_meta" data-recId="${os.Id}" data-uniquename="${os.UniqueName}" data-metadatatype="${os.OmniProcessType}">Open</Button>
                    </td>
                    <td class="td omnicards_td omnicards_td_val">
                        <Button class="btn download_meta" data-recId="${os.Id}" data-uniquename="${os.UniqueName}" data-metadatatype="${os.OmniProcessType}">Download</Button>
                    </td>
                </tr>
            </table>
        `;

        i++;
    }

    $('.drcards').html(html);
}

async function getConnection(baseUrl, sessionId){
    let conn = new jsforce.Connection({
       instanceUrl : baseUrl,
       serverUrl : baseUrl,
       sessionId : sessionId,
       version: '64.0'
   });
   return conn;
}

let queryTableFields = [
    { name: 'Id', label: 'Id' },
    { name: 'Name', label: 'Name' },
    { name: 'Type', label: 'Type' },
    { name: 'SubType', label: 'Sub Type' },
    { name: 'OmniProcessType', label: 'Metadata Type' },
    { name: 'UniqueName', label: 'Unique Name' },
    { name: 'VersionNumber', label: 'Version' },
    { name: 'IsActive', label: 'Active' },
    { name: 'LastModifiedDate', label: 'Modified' },
    { name: 'LastModifiedBy.Name', label: 'Modified' }
];

async function fetchRecords(q) {
    //console.log('$q: ',q);
    let res = await conn.query(q);
    //console.log('$res: ',res);
    return res;
}


function generateTable() {

    let cols = `
        <th class="th_1 th_1_1">
            
        </th>
    `;
    queryTableFields.forEach(field => {
        cols += `
            <th class="th_1 th_1_1">
                ${field.label}
            </th>
        `;
    });
    cols += `
        <th class="th_1 th_1_1">
            
        </th>
        <th class="th_1 th_1_1">
            
        </th>
    `;
    $('.thead_1_tr').html(cols);

    let trTags = '';
    recordsArray.forEach((rec, index) => {
        let tdTags = `<td class="td_1" title="${index + 1}">${index + 1}</td>`;
        queryTableFields.forEach(f => {
            let field = f.name;
            let fieldValue = rec[field];
            if(rec[field] == null){
                fieldValue = '';
            }
            if(field == 'LastModifiedDate'){
                fieldValue = getFormattedDateTime(rec[field]);
            }
            if(field == 'LastModifiedBy.Name'){
                fieldValue = rec['LastModifiedBy']['Name'];
            }
            if(field == 'IsActive'){
                if(rec[field]){
                    fieldValue = `&#10004;`;
                }else{
                    fieldValue = '-';
                }
            }

            let fieldStyle = '';
            if(field == 'UniqueName'){
                if(fieldValue.includes('EBAO_AccountApplication_English') || fieldValue.includes('BAO_AccountApplication_English') || fieldValue.includes('Site_Login_English')){
                    //console.log('$fieldValue: ',fieldValue);
                    fieldStyle = 'style="color:#fd0684;font-weight:bold"';
                }
            }

            let title = fieldValue;
            if(rec['CreatedDate'] && field == 'LastModifiedDate'){
                title = getFormattedDateTime(rec['CreatedDate']);
            }else if(rec['CreatedBy'] && field == 'LastModifiedBy.Name'){
                if(rec['CreatedBy']['Name']){
                    title = rec['CreatedBy']['Name'];
                }
            }
            let idclass = field == 'Id' ? 'record-id ' : '';
            tdTags += `<td class="td_1 ${idclass}${field}-${rec.Id}" title="${title}" ${fieldStyle}>${fieldValue}</td>`;
        });
        tdTags += `<td class="td_1"><i class="action_btn_icon open_meta fa fa-angle-double-up fa-lg" aria-hidden="true" data-recId="${rec.Id}"></i></td>`;
        tdTags += `<td class="td_1"><i class="action_btn_icon download_meta fa fa-angle-double-down fa-lg" aria-hidden="true" data-recId="${rec.Id}" data-uniquename="${rec.UniqueName}" data-metadatatype="${rec.OmniProcessType}"></i></td>`;
        let trStyle = '';
        if(rec?.OmniProcessType == 'OmniScript'){
            trStyle = `style="background-color: #e5ffe5;"`;
        }else if(rec?.OmniProcessType == 'Data Mapper'){
            trStyle = `style="background-color: #d0effb;"`;
        }else if(rec?.OmniProcessType == 'Integration Procedure'){
            trStyle = `style="background-color: #f7ecdc;"`;
        }
        trTags += `<tr class="tr_${rec.Id}" ${trStyle}>${tdTags}</tr>`;
    });
    // document.title = `[ ${recordsArray.length} ]`;
    $('.tbody_1').html(trTags);
}


$(document).on('click', '.download_meta', async function (e) {

    let recId = $(this).attr('data-recId');
    let uniquename = $(this).attr('data-uniquename');
    let metadatatype = $(this).attr('data-metadatatype');
    //console.log('$recId: ', recId);
    //console.log('$uniquename: ', uniquename);
    //console.log('$metadatatype: ', metadatatype);

    if(metadatatype == 'Data Mapper'){
        metadatatype = 'OmniDataTransform';
    }else if(metadatatype == 'Integration Procedure'){
        metadatatype = 'OmniIntegrationProcedure';
    }else if(metadatatype == 'OmniScript'){
        metadatatype = 'OmniScript';
    }


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/xml");
    myHeaders.append("SOAPAction", "login");
    myHeaders.append("Accept", "text/xml");

    const raw = `
        <env:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
            <env:Header>
                <SessionHeader xmlns="http://soap.sforce.com/2006/04/metadata">
                    <sessionId>${sessionId}</sessionId>
                </SessionHeader>
            </env:Header>
            <env:Body>
                <retrieve xmlns="http://soap.sforce.com/2006/04/metadata">
                    <retrieveRequest>
                        <apiVersion>59.0</apiVersion>
                        <singlePackage>true</singlePackage>
                        <unpackaged>
                            <types>
                                <members>${uniquename}</members>
                                <name>${metadatatype}</name>
                            </types>
                            <version>64.0</version>
                        </unpackaged>
                    </retrieveRequest>
                </retrieve>
            </env:Body>
        </env:Envelope>
    `;

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    showSpinner();
    fetch( baseUrl + "/services/Soap/m/59.0", requestOptions).then((response) => response.text()).then((xmlResponse) => {
        //console.log('Response: ' + xmlResponse);
        //console.log(xmlResponse);
        //console.log('$xmlResponse: ', xmlResponse);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");

        let recordNodes = xmlDoc.querySelectorAll('result');
        //console.log('$recordNodes: ',recordNodes);

        let processId;
        for (let i = 0; i < recordNodes.length; i++) {
            let id = recordNodes[i].querySelector('id').textContent;
            let state = recordNodes[i].querySelector('state').textContent;
            //console.log('$id: ',id);
            //console.log('$state: ',state);
            processId = id;
        }
        if(processId){
            retrieveMetadataZip(metadatatype, uniquename, processId);
        }
    }).catch((error) => {
        console.error(error);
    });
});

function retrieveMetadataZip(metadatatype, name, processId){

    //console.log('$name: ',name);
    //console.log('$processId: ',processId);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/xml");
    myHeaders.append("SOAPAction", "login");
    myHeaders.append("Accept", "text/xml");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: `
            <env:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
                <env:Header>
                    <SessionHeader xmlns="http://soap.sforce.com/2006/04/metadata">
                        <sessionId>${sessionId}</sessionId>
                    </SessionHeader>
                </env:Header>
                <env:Body>
                    <checkRetrieveStatus xmlns="http://soap.sforce.com/2006/04/metadata">
                        <id>${processId}</id>
                        <includeZip>true</includeZip>
                    </checkRetrieveStatus>
                </env:Body>
            </env:Envelope>
        `,
        redirect: "follow"
    };
    fetch( baseUrl + "/services/Soap/m/59.0", requestOptions).then((response) => response.text()).then((xmlResponse) => {
        //console.log('Response: ' + xmlResponse);
        //console.log(xmlResponse);
        //console.log('$xmlResponse: ', xmlResponse);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");

        let recordNodes = xmlDoc.querySelectorAll('result');
        //console.log('$recordNodes: ',recordNodes);

        let status;
        let zipFile
        for (let i = 0; i < recordNodes.length; i++) {
            status = recordNodes[i].querySelector('status').textContent;
            zipFile = recordNodes[i].querySelector('zipFile').textContent;
            //console.log('$status: ',status);
            //console.log('$zipFile: ',zipFile);
        }

        if(status == 'InProgress' || status == 'Pending'){
            retrieveMetadataZip(metadatatype, name, processId);
        }else{
            //console.log('$SUCCESS-status: ',status);
            //console.log('$SUCCESS-zipFile: ',zipFile);

            if(zipFile){
                extractFileData(metadatatype, name, zipFile);
                /* const byteArray = Uint8Array.from(atob(zipFile), c => c.charCodeAt(0));
                const blob = new Blob([byteArray], { type: 'application/zip' });
                let metadataFileName = `${name} - ${metadatatype} - ` + new Date().toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
                //console.log(metadataFileName);
                saveAs(blob, `${metadataFileName}.zip`); */
                hideSpinner();
            }

        }

    }).catch((error) => {
        console.error(error);
    });
}

async function extractFileData(metadatatype, name, base64ZipData) {
    try {
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(base64ZipData, { base64: true });

        let fileName;
        let filePath;
        if(metadatatype == 'OmniDataTransform'){
            filePath = `omniDataTransforms/${name}.rpt`;
            fileName = `${name}.rpt`;
        }else if(metadatatype == 'OmniIntegrationProcedure'){
            filePath = `omniIntegrationProcedures/${name}.oip`;
            fileName = `${name}.oip`;
        }else if(metadatatype == 'OmniScript'){
            filePath = `omniScripts/${name}.os`;
            fileName = `${name}.os`;
        }

        const file = loadedZip.file(filePath);

        if (!file) {
            console.error("file not found");
            return;
        }

        const content = await file.async("text");
        // //console.log(content);

        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        saveAs(blob, fileName);

        return content;
    } catch (err) {
        console.error("Error reading zip:", err);
    }
}

function getFormattedDateTime(dateString) {
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(dateString));
    date_time = date_time.split(', ');
    date_time[2] = date_time[2].toUpperCase();
    date_time = date_time.join(', ');
    return date_time;
}

$(document).on('click', '.td_1', function (e) {
    copyToCLipboard($(this).text().trim(), true);
});

$(document).on('click', '.open_meta', function (e){
    let _this = $(this);
    let recordid = _this.attr('data-recId');
    //console.log('$recordid: ',recordid);
    let rec = recordsArray.find(element => {
        return element.Id == recordid;
    });
    //console.log('$rec: ',rec);

    if(rec.OmniProcessType == 'OmniScript'){
        let omniUrl = baseUrl.replace('my.salesforce.com', 'lightning.force.com');
        window.open(`${omniUrl}/builder_omnistudio/omnistudioBuilder.app?type=omniscript&id=${rec.Id}`, '_blank');
    }else if(rec.OmniProcessType == 'Integration Procedure'){
        let omniUrl = baseUrl.replace('my.salesforce.com', 'lightning.force.com');
        window.open(`${omniUrl}/builder_industries_interaction_rule/industriesBuilder.app?recordId=${rec.Id}`, '_blank');
    }else if(rec.OmniProcessType == 'Data Mapper'){
        let omniUrl = baseUrl.replace('my.salesforce.com', 'lightning.force.com');
        window.open(`${omniUrl}/builder_omnistudio/omnistudioBuilder.app?type=dataraptor&id=${rec.Id}`, '_blank');
    }

    /* //=================MEMBER PAYOUT STRATS================//
    if(rec.p66_Status__c == 'Draft' || rec.p66_Status__c == 'Reconciled'){
        let code = `
            update new RebateProgramMemberPayout(Id = '${recordid}', p66_Status__c = 'Active');
        `;
        executeAnonymousHandle(_this, recordid, code);
    }else{
        let code = `
            update new RebateProgramMemberPayout(Id = '${recordid}', p66_Status__c = 'Reconciled',
                p66_SAP_External_Reference__c = '11',
                p66_SAP_External_Reference_Date__c = System.today() + 1
            );
        `;
        executeAnonymousHandle(_this, recordid, code);
    }
    //=================MEMBER PAYOUT ENDS HERE================// */
});


function executeAnonymousHandle(_this, recordid, code){
    _this.addClass('fast-spin');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const endpoint = `${baseUrl}/services/data/v60.0/tooling/executeAnonymous/?anonymousBody=${encodeURIComponent(code)}`;
    fetch(endpoint, requestOptions).then(response => response.json()).then(data => {
        //console.log('$data-: ', data);
        if(data.success){
            _this.removeClass('fast-spin');
            // window.location.reload();
            fetchRecordSingle(recordid);
        }else{
            if(data.compileProblem){
                window.alert(data.compileProblem);
            }else{
                window.alert(data.exceptionMessage + ' - ' + data.exceptionStackTrace);
            }
            _this.removeClass('fast-spin');
        }
    }).catch(error => {
        //console.log('$API: error', error);
    });
}


function getConvertedDateTime(dateTimeString){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(dateTimeString));
    date_time = date_time.substring(0, date_time.length - 2) + date_time.substring(date_time.length - 2).toUpperCase();
    date_time = date_time.split(', ');
    date_time = date_time[1] + ', ' + date_time[0];
    return date_time;
}



function showSpinner() {
    $(".spinner-div").show();
}

function hideSpinner() {
    $(".spinner-div").hide();
    $('.refresh_btn_icon').removeClass('fast-spin');
}

let timeout;

function showToast() {
    if (!timeout) {
        timeout = true;
        $('.snackbar').addClass('show');
        setTimeout(function () {
            $('.snackbar').removeClass('show');
            timeout = false;
        }, 2000);
    }
}


function copyToCLipboard(value, showTst) {
    if(value){
        let text = value;
        navigator.clipboard.writeText(text).then(function () {
            //console.log('copied : ' + text);
            if (showTst) {
                $('.snackbar').text(text);
                showToast();
            }
        }, function (err) {
            console.error('error copying');
        });
    }
}

$(document).on('contextmenu', '.record-id', function (e){
    let text = $(this).text().trim();
    e.preventDefault();
    openRecordDetail(text);
});


function openRecordDetail(recordID){
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(recordID);
    if (valid) {
        recordID = 'recordID=' + recordID + '&';
        openMaximized('record.html?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
    }
}

function openMaximized(url) {
    if (url) {
        chrome.windows.create({
            type: 'popup',
            url: url,
            state: 'maximized'
        });
    }
}


/* function fetchRecordSingle(recId) {
    let filter = `Where Id = '${recId}'`;
    let q = `SELECT ${fields_array.join(',')} FROM ${objectName} ${filter}`;
    //console.log('$q: ',q);
    conn.query(q).then(res => {
        //console.log('$res: ',res);
        let recs = [...res.records];
        //console.log('$recs: ',recs);
        let rec = recs[0];
        //console.log('$rec: ',rec);

        //Update Existing array
        const index = recordsArray.findIndex(item => item.Id == rec.Id);
        //console.log('$index: ',index);
        if (index != -1) {
            recordsArray.splice(index, 1, rec);
        }

        fields_array.forEach(field => {
            let fieldValue = rec[field];
            if(fieldValue == null){
                fieldValue = '';
            }
            $(`.${field}-${rec.Id}`).text(fieldValue);
        });
        $(`.tr_${rec.Id}`).css('background-color','#f1f6ee');
        hideSpinner();
    }).catch( error => {
        console.error('$error: ',error);
        hideSpinner();
    });
} */