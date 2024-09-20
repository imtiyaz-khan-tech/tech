$(document).ready(function() {
   chrome.tabs.query({
       active: true,
       currentWindow: true
   }, function(tabs) {
       var tab = tabs[0];
       if (tab.url.indexOf('force.com') != -1 || tab.url.indexOf('salesforce.com') != -1) {
           showDiv('saleforce_div');
       } else {
           showDiv('warn_dv');
       }
   });
});
$(document).on('click', '.lst_record', function(e) {
   initializeOnLoad('record.html');
});
$(document).on('click', '.lst_metadata', function(e) {
   initializeOnLoad('metadata.html');
});
$(document).on('click', '.lst_object', function(e) {
   initializeOnLoad('objects.html');
});
$(document).on('click', '.lst_debugs', function(e) {
   initializeOnLoad('debuglogs.html');
});
$(document).on('click', '.lst_records_list', function(e) {
   initializeOnLoad('recordslist.html');
});
$(document).on('click', '.lst_permissions', function(e) {
   initializeOnLoad('permission.html');
});
$(document).on('click', '.lst_users', function(e) {
   initializeOnLoad('users.html');
});
$(document).on('click', '.logs_list', function(e) {
   initializeOnLoad('logslist.html');
});
$(document).on('click', '.lst_asynjobs', function(e) {
   initializeOnLoad('asyncjobs.html');
});
$(document).on('click', '.lst_bulkupdate', function(e) {
   initializeOnLoad('bulkupdate.html');
});
$(document).on('click', '.lst_objectpermission_profiles', function(e) {
   initializeOnLoad('objectpermission_profile.html');
});
$(document).on('click', '.lst_objectpermission_permissionsets', function(e) {
   initializeOnLoad('objectpermission_ps.html');
});
$(document).on('click', '.fls_permissionsets', function(e) {
   initializeOnLoad('fls_permissionsets.html');
});
$(document).on('click', '.fls_profiles', function(e) {
   initializeOnLoad('fls_profiles.html');
});
$(document).on('click', '.recentlogs', function(e) {
   initializeOnLoad('recentlogs.html');
});
$(document).on('click', '.codecoverage', function(e) {
   initializeOnLoad('codecoverage.html');
});
$(document).on('click', '.quicktasks', function(e) {
   initializeOnLoad('quicktasks.html');
});
$(document).on('click', '.lst_more_info', function(e) {
   window.open('https://youtu.be/Wm2TaOa8wYk', '_blank');
});
$(document).on('click', '.open_current_user', function(e) {
    initializeOnLoad('open_user');
});

let recordID = '';

function initializeOnLoad(page) {
   getSessionID();

   function getSessionID() {
       chrome.tabs.query({
           active: true,
           currentWindow: true
       }, function(tabs) {
           var tab = tabs[0];
           if (tab.url.indexOf('force.com') != -1 || tab.url.indexOf('salesforce.com') != -1) {
               chrome.cookies.getAll({
                   name: 'sid'
               }, function(cookies) {
                   let sid = cookies.find(element => {
                       return element.domain.includes(getUrlInSalesforceForm(tab.url));
                   });
                   let baseUrl = 'https://' + sid.domain.replace('lightning.force', 'my.salesforce');
                   let sessionId = sid.value;
                   getRecordDetailId(tab.url);
                   if(page == 'open_user'){
                    openCurrentUser(baseUrl, sessionId);
                   }else{
                       openMaximized(page + '?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
                   }
               });
               chrome.action.enable(tab.id);
           } else {}
       });
   }
}

function openCurrentUser(baseUrl, sessionId){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(baseUrl + "/services/data/v59.0/", requestOptions).then(response => response.json()).then(result => {
        console.log('$API: ', result)
        let identity = result.identity;
        console.log('$identity: ', identity);
        identity = identity.substring(identity.lastIndexOf('/') + 1);
        console.log('$identity: ', identity);
        window.open(baseUrl + '/lightning/setup/ManageUsers/page?address=%2F'+identity+'%3Fnoredirect%3D1');
    }).catch(error => {
        console.log('$openCurrentUser: error', error);
    });
}

function getRecordDetailId(url) {
   var el = document.createElement('a');
   el.href = url;
   let info = el.pathname.split("/");
   if (info && info.length && info[info.length - 1].toLowerCase() == 'view' && info.length > 5) {
       let sObjectId = info[info.length - 2];
       recordID = 'recordID=' + sObjectId + '&';
   }
}

function getUrlInSalesforceForm(url) {
   url = url.replace('https://', '').split('/')[0].replace('lightning.force', 'my.salesforce');
   return url;
}

function openMaximized(url) {
   if (url) {
       chrome.windows.create({
           type: 'popup',
           url: url,
           state: 'maximized'
       });
       window.close();
   }
}

function showDiv(element) {
   $('.' + element).removeClass('hide');
}

function hideDiv(element) {
   $('.' + element).addClass('hide');
}

//Handle Temp Button Click
$(document).on('click', '.lst_temp', function(e) {
   handleOnTempClick();
});

//Handle Temp Button Click Logics
function handleOnTempClick() {
   //Get Salesforce Session And Call Perticular Temporary Method
   //getSessionDetail();
   testJsForce();
}
async function testJsForce(){
    initializeOnLoad('temp.html');
}

function getSessionDetail() {
   let sessionMap = new Map();
   chrome.tabs.query({
       active: true,
       currentWindow: true
   }, function(tabs) {
       var tab = tabs[0];
       if (tab.url.indexOf('force.com') != -1 || tab.url.indexOf('salesforce.com') != -1) {
           chrome.cookies.getAll({
               name: 'sid'
           }, function(cookies) {
               let sid = cookies.find(element => {
                   return element.domain.includes(getUrlInSalesforceForm(tab.url));
               });
               let baseUrl = 'https://' + sid.domain.replace('lightning.force', 'my.salesforce');
               let sessionId = sid.value;
               console.log('$baseUrl: ',baseUrl);
               console.log('$sessionId: ',sessionId);

               //Handle All Temporary Task - Starts
               
               //Generate Permission Sets CSV
               generatePermissionSetsCSV(baseUrl, sessionId);
               
               //Handle All Temporary Task - Ends
            });
       } else {
       }
   });
   return sessionMap;
}

//PermissonSets CSV Code - STARTS
async function generatePermissionSetsCSV(baseUrl, sessionId) {
   let objectName = 'ContactPointPhone';
   let psSets = ['CCHMC_PatientAccessRepresentative_PS', 'CCHMC_HC_Mulesoft_Access', 'CCHMC_HC_Admin_Accounts_Access', 'CCHMC_HC_Contact_Center_Objects_CRE', 'CCHMC_Health_Cloud_Contact_Point_Objects_Access', 'CCHMC_Patient_Access_Representative_Agent_PS', 'CCHMC_Shield_Encryption_Manager', 'CCHMC_Patient_Access_Representative_Supervisor_PS'];
   console.log('$PS Called');
   let psNameObjectPermissionMap = new Map();
   const promises = psSets.map(async (psName) => {
       let apiResponse = await getObjectPermissionsFromServer(objectName, baseUrl, sessionId, psName);
       console.log('$PSapiResponse: ', apiResponse);
       let data = checkResponse(apiResponse);
       console.log('$PSdata: ', data);
       psNameObjectPermissionMap.set(psName, data?.records?.at(0) ? data?.records?.at(0) : {});
   });
   await Promise.all(promises);
   console.log('$psNameObjectPermissionMap: ', psNameObjectPermissionMap);
   getDescribeFields(objectName, baseUrl, sessionId, psSets, psNameObjectPermissionMap);
}
async function getObjectPermissionsFromServer(objectName, baseUrl, sessionId, psName) {
   var myHeaders = new Headers();
   myHeaders.append("Authorization", "Bearer " + sessionId);

   var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
   };

   try {
       const response = await fetch(baseUrl + `/services/data/v59.0/query?q=SELECT+Id,ParentId,SobjectType,PermissionsCreate,PermissionsRead,PermissionsDelete,PermissionsEdit,PermissionsViewAllRecords,PermissionsModifyAllRecords+FROM+ObjectPermissions+Where+Parent.Name='${psName}'+And+SobjectType='${objectName}'`, requestOptions);
       if (!response.ok) {
           return {
               isError: true,
               name: response.status,
               message: response.statusText,
               stack: response.type
           };
       }
       const result = await response.json();
       return {
           isError: false,
           data: result
       };
   } catch (error) {
       return {
           isError: true,
           name: error.name,
           message: error.message,
           stack: error.stack
       };
   }
}
async function getDescribeFields(objectName, baseUrl, sessionId, psSets, psNameObjectPermissionMap) {
   let fieldMap = new Map();
   var myHeaders = new Headers();
   myHeaders.append("Authorization", "Bearer " + sessionId);

   var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
   };

   fetch(baseUrl + "/services/data/v59.0/sobjects/" + objectName + "/describe", requestOptions).then(response => response.json()).then(result => {
       console.log('$API: ', result)
       let describe = result;
       console.log('$describe: ', describe);
       console.log('$describe.fields: ', describe.fields);
       describe.fields.forEach(val => {
           fieldMap.set(val.name, val);
       });
       console.log('$fieldMap: ', fieldMap);

       getFieldPermissions(fieldMap, objectName, baseUrl, sessionId, psSets, psNameObjectPermissionMap);

   }).catch(error => {
       console.log('$getObjects: error', error);
   });
}
async function getFieldPermissions(fieldMap, objectName, baseUrl, sessionId, psSets, psNameObjectPermissionMap) {

   console.log('$$fieldMap: ', fieldMap);
   console.log('$psNameObjectPermissionMap: ', psNameObjectPermissionMap);

   let psMapAndFieldsMap = new Map();

   const promises = psSets.map(async (psName) => {
       let apiResponse = await getFieldPermissionsFromServer(objectName, baseUrl, sessionId, psName);
       console.log('$apiResponse: ', apiResponse);
       let data = checkResponse(apiResponse);
       console.log('$$psName: ', psName);
       console.log('$$data: ', data);

       let psFieldsMap = new Map();
       data.records.forEach(val => {
           psFieldsMap.set(val.Field.split('.')[1], val);
       });

       psMapAndFieldsMap.set(psName, psFieldsMap);
   });
   await Promise.all(promises);
   console.log('$$Checkpoint Called');
   console.log('$psMapAndFieldsMap: ', psMapAndFieldsMap);

   let data = [
       ['Object', 'Field Name', 'API Name', ...psSets]
   ];
   console.log('$$data: ', data);

   let CCHMC_PatientAccessRepresentative_PS = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_PatientAccessRepresentative_PS');
   let CCHMC_HC_Mulesoft_Access = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_HC_Mulesoft_Access');
   let CCHMC_HC_Admin_Accounts_Access = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_HC_Admin_Accounts_Access');
   let CCHMC_HC_Contact_Center_Objects_CRE = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_HC_Contact_Center_Objects_CRE');
   let CCHMC_Health_Cloud_Contact_Point_Objects_Access = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_Health_Cloud_Contact_Point_Objects_Access');
   let CCHMC_Patient_Access_Representative_Agent_PS = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_Patient_Access_Representative_Agent_PS');
   let CCHMC_Shield_Encryption_Manager = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_Shield_Encryption_Manager');
   let CCHMC_Patient_Access_Representative_Supervisor_PS = getPreparedPSData(psMapAndFieldsMap, 'CCHMC_Patient_Access_Representative_Supervisor_PS');

   for (const [key, value] of fieldMap) {
       if (!key.endsWith('__pc') && key != 'IsDeleted' && key != 'Id') {
           let dataArray = [objectName, value.label, key];
           dataArray.push(
               psNameObjectPermissionMap?.get('CCHMC_PatientAccessRepresentative_PS')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_PatientAccessRepresentative_PS.has(key) ? CCHMC_PatientAccessRepresentative_PS.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_PatientAccessRepresentative_PS')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_PatientAccessRepresentative_PS')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_HC_Mulesoft_Access')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_HC_Mulesoft_Access.has(key) ? CCHMC_HC_Mulesoft_Access.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_HC_Mulesoft_Access')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_HC_Mulesoft_Access')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_HC_Admin_Accounts_Access')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_HC_Admin_Accounts_Access.has(key) ? CCHMC_HC_Admin_Accounts_Access.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_HC_Admin_Accounts_Access')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_HC_Admin_Accounts_Access')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_HC_Contact_Center_Objects_CRE')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_HC_Contact_Center_Objects_CRE.has(key) ? CCHMC_HC_Contact_Center_Objects_CRE.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_HC_Contact_Center_Objects_CRE')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_HC_Contact_Center_Objects_CRE')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Health_Cloud_Contact_Point_Objects_Access')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_Health_Cloud_Contact_Point_Objects_Access.has(key) ? CCHMC_Health_Cloud_Contact_Point_Objects_Access.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_Health_Cloud_Contact_Point_Objects_Access')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_Health_Cloud_Contact_Point_Objects_Access')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Agent_PS')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_Patient_Access_Representative_Agent_PS.has(key) ? CCHMC_Patient_Access_Representative_Agent_PS.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Agent_PS')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Agent_PS')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Shield_Encryption_Manager')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_Shield_Encryption_Manager.has(key) ? CCHMC_Shield_Encryption_Manager.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_Shield_Encryption_Manager')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_Shield_Encryption_Manager')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Supervisor_PS')?.PermissionsRead ? (
                   value.permissionable ? (CCHMC_Patient_Access_Representative_Supervisor_PS.has(key) ? CCHMC_Patient_Access_Representative_Supervisor_PS.get(key) : '-') : ((value.updateable && (psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Supervisor_PS')?.PermissionsEdit || psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Supervisor_PS')?.PermissionsCreate)) ? 'Read-Edit' : 'Read')
               ) : '-'
               /* psNameObjectPermissionMap?.get('CCHMC_PatientAccessRepresentative_PS')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_PatientAccessRepresentative_PS.has(key) ? CCHMC_PatientAccessRepresentative_PS.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_HC_Mulesoft_Access')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_HC_Mulesoft_Access.has(key) ? CCHMC_HC_Mulesoft_Access.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_HC_Admin_Accounts_Access')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_HC_Admin_Accounts_Access.has(key) ? CCHMC_HC_Admin_Accounts_Access.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_HC_Contact_Center_Objects_CRE')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_HC_Contact_Center_Objects_CRE.has(key) ? CCHMC_HC_Contact_Center_Objects_CRE.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Health_Cloud_Contact_Point_Objects_Access')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_Health_Cloud_Contact_Point_Objects_Access.has(key) ? CCHMC_Health_Cloud_Contact_Point_Objects_Access.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Agent_PS')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_Patient_Access_Representative_Agent_PS.has(key) ? CCHMC_Patient_Access_Representative_Agent_PS.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Shield_Encryption_Manager')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_Shield_Encryption_Manager.has(key) ? CCHMC_Shield_Encryption_Manager.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-',
               psNameObjectPermissionMap?.get('CCHMC_Patient_Access_Representative_Supervisor_PS')?.PermissionsRead ? (
                  value.permissionable ? (CCHMC_Patient_Access_Representative_Supervisor_PS.has(key) ? CCHMC_Patient_Access_Representative_Supervisor_PS.get(key) : '-') : (value.updateable ? 'Read-Edit' : 'Read')
               ) : '-' */
           );
           data.push(dataArray);
           /* data.push([
              objectName, value.label, key, 
              CCHMC_HC_Mulesoft_Access.has(key) ? CCHMC_HC_Mulesoft_Access.get(key) : '-'

              CCHMC_PatientAccessRepresentative_PS.has(key) ? CCHMC_PatientAccessRepresentative_PS.get(key) : '-',
              CCHMC_HC_Mulesoft_Access.has(key) ? CCHMC_HC_Mulesoft_Access.get(key) : '-',
              CCHMC_HC_Admin_Accounts_Access.has(key) ? CCHMC_HC_Admin_Accounts_Access.get(key) : '-',
              CCHMC_HC_Contact_Center_Objects_CRE.has(key) ? CCHMC_HC_Contact_Center_Objects_CRE.get(key) : '-',
              CCHMC_Health_Cloud_Contact_Point_Objects_Access.has(key) ? CCHMC_Health_Cloud_Contact_Point_Objects_Access.get(key) : '-',
              CCHMC_Patient_Access_Representative_Agent_PS.has(key) ? CCHMC_Patient_Access_Representative_Agent_PS.get(key) : '-',
              CCHMC_Shield_Encryption_Manager.has(key) ? CCHMC_Shield_Encryption_Manager.get(key) : '-',
              CCHMC_Patient_Access_Representative_Supervisor_PS.has(key) ? CCHMC_Patient_Access_Representative_Supervisor_PS.get(key) : '-'
           ]); */
       }
   }

   const csvContent = data.map(row => row.join(',')).join('\n');
   const blob = new Blob([csvContent], {
       type: 'text/csv;charset=utf-8'
   });
   saveAs(blob, objectName + '.csv');

}

function getPreparedPSData(psMapAndFieldsMap, psName) {
   let psDatMap = psMapAndFieldsMap.get(psName);
   console.log('$$psDatMap: ', psDatMap);

   let psDatFieldsMap = new Map();
   for (const [key, val] of psDatMap) {
       let read = val.PermissionsRead;
       let edit = val.PermissionsEdit;

       let readString = read ? 'Read' : '';
       let editString = edit ? 'Edit' : '';

       let readeditString = '';
       if (readString) {
           readeditString += readString;
       }
       if (editString) {
           readeditString += '-' + editString;
       }

       if (readString && editString) {
           readeditString = readString + '-' + editString;
       }
       psDatFieldsMap.set(key, readeditString);
   }
   return psDatFieldsMap;
}

function checkResponse(apiResponse) {
   if (apiResponse.isError) {
       return null;
   } else {
       return apiResponse.data;
   }
}
async function getFieldPermissionsFromServer(objectName, baseUrl, sessionId, psName) {
   var myHeaders = new Headers();
   myHeaders.append("Authorization", "Bearer " + sessionId);

   var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
   };

   let query = `SELECT+Field,Parent.Name,PermissionsEdit,PermissionsRead+FROM+`;
   query += `FieldPermissions+Where+SobjectType+=+'${objectName}'+And+Parent.Name+=+'${psName}'`;

   try {
       const response = await fetch(baseUrl + `/services/data/v59.0/query?q=${query}`, requestOptions);
       if (!response.ok) {
           return {
               isError: true,
               name: response.status,
               message: response.statusText,
               stack: response.type
           };
       }
       const result = await response.json();
       return {
           isError: false,
           data: result
       };
   } catch (error) {
       return {
           isError: true,
           name: error.name,
           message: error.message,
           stack: error.stack
       };
   }
}
//PermissonSets CSV Code - ENDS
