$(document).ready(function() {
	
	$.ajaxSetup({ cache: false });
	
	$("#serverStatus").click(function() {
		$.get("serverstatus", function(responseText) {
			$("#data").text(responseText);
		});
	});

	$("#availableportsstatus").click(function() {
		$.get("availableportsstatus", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#historytoday").click(function() {
		$.get("historytoday", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#historyall").click(function() {
		$.get("historyall", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#suspendCallServices").click(function() {
		$.get("suspendCallServices", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#resumeCallServices").click(function() {
		$.get("resumeCallServices", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#updateAllApps").click(function() {
		$.get("updateAllApps", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#updateCommonClasses").click(function() {
		$.get("updateCommonClasses", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#flushAllOldApps").click(function() {
		$.get("flushAllOldApps", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#deployNewApp").click(function() {
		
		var appName = prompt("Please Enter Application Name","App Name");
		$.ajax({
            url:'deployNewApp',
            data:{appName:appName},
            type:'get',
            cache:false,
            success:function(responseText){
//               alert(responseText);
               $('#data').text(responseText); 
            },
            error:function(){
              alert('error');
            }
         }
		);
//		$.get("deployNewApp", function(responseText) {
//			$("#data").text(responseText);
//		});
	});
	
	$("#deployAllNewApps").click(function() {
		$.get("deployAllNewApps", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#reload").click(function() {
		$.get("reload", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#reloadTimings").click(function() {
		$.get("reloadTimings", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#reloadFlags").click(function() {
		$.get("reloadFlags", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#reloadShares").click(function() {
		$.get("reloadShares", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#reloadTimingsAt").click(function() {
		//2014-11-05 11:24:00.0
		var currentdate = new Date(); 
		var datetime =    currentdate.getFullYear() + "-"
		                + (currentdate.getMonth()+1)  + "-" 
		                + currentdate.getDate() + " "  
		                + currentdate.getHours() + ":"  
		                + currentdate.getMinutes() + ":" 
		                + currentdate.getSeconds();
		
		var timeAt = prompt("Please Enter The Reload Time using the same format",datetime);
		$.ajax({
            url:'reloadTimingsAt',
            data:{timeAt:timeAt},
            type:'get',
            cache:false,
            success:function(responseText){
//               alert(responseText);
               $('#data').text(responseText); 
            },
            error:function(){
              alert('error');
            }
         }
		);
	});
	$("#reloadCampaigns").click(function() {
		$.get("reloadCampaigns", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#reloadJoBillers").click(function() {
		$.get("reloadJoBillers", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#doOperations").click(function() {
		alert("operations ");
		$.get("serversoperation", function(responseText) {
			$("#selectedServers").text(responseText);
		});
	});
	
	
	//////////////////////Selected Servers Operations////////////////////////
	
	$("#serversStatus").click(function() {
		$.get("serversstatus", function(responseText) {
			$("#data").text(responseText);
		});
	});

	$("#serversAvailableportsstatus").click(function() {
		$.get("serversavailableportsstatus", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversHistorytoday").click(function() {
		$.get("servershistorytoday", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversHistoryall").click(function() {
		$.get("servershistoryall", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversSuspendCallServices").click(function() {
		$.get("serverssuspendCallServices", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversResumeCallServices").click(function() {
		$.get("serversresumeCallServices", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversUpdateAllApps").click(function() {
		$.get("serversupdateAllApps", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversUpdateCommonClasses").click(function() {
		$.get("serversupdateCommonClasses", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversFlushAllOldApps").click(function() {
		$.get("serversflushAllOldApps", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversDeployNewApp").click(function() {
		
		var appName = prompt("Please Enter Application Name","App Name");
		$.ajax({
            url:'serversdeployNewApp',
            data:{appName:appName},
            type:'get',
            cache:false,
            success:function(responseText){
//               alert(responseText);
               $('#data').text(responseText); 
            },
            error:function(){
              alert('error');
            }
         }
		);
//		$.get("deployNewApp", function(responseText) {
//			$("#data").text(responseText);
//		});
	});
	
	$("#serversDeployAllNewApps").click(function() {
		$.get("serversdeployAllNewApps", function(responseText) {
			$("#data").text(responseText);
		});
	});
	
	$("#serversReload").click(function() {
		$.get("serversreload", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#serversReloadTimings").click(function() {
		$.get("serversreloadTimings", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#serversReloadFlags").click(function() {
		$.get("serversreloadFlags", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#serversReloadShares").click(function() {
		$.get("serversreloadShares", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#serversReloadTimingsAt").click(function() {
		//2014-11-05 11:24:00.0
		var currentdate = new Date(); 
		var datetime =    currentdate.getFullYear() + "-"
		                + (currentdate.getMonth()+1)  + "-" 
		                + currentdate.getDate() + " "  
		                + currentdate.getHours() + ":"  
		                + currentdate.getMinutes() + ":" 
		                + currentdate.getSeconds();
		
		var timeAt = prompt("Please Enter The Reload Time using the same format",datetime);
		$.ajax({
            url:'serversreloadTimingsAt',
            data:{timeAt:timeAt},
            type:'get',
            cache:false,
            success:function(responseText){
//               alert(responseText);
               $('#data').text(responseText); 
            },
            error:function(){
              alert('error');
            }
         }
		);
	});
	$("#serversReloadCampaigns").click(function() {
		$.get("serversreloadCampaigns", function(responseText) {
			$("#data").text(responseText);
		});
	});
	$("#serversReloadJoBillers").click(function() {
		$.get("serversreloadJoBillers", function(responseText) {
			$("#data").text(responseText);
		});
	});
});