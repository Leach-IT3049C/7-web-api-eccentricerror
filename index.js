 navigator.getBattery().then(function(battery) {
     function updateAllBatteryInfo(){
       updateChargeInfo();
       updateLevelInfo();
     }
     updateAllBatteryInfo();
  
     battery.addEventListener('chargingchange', function(){
       updateChargeInfo();
     });
     function updateChargeInfo(){
       console.log("Battery charging? "
                   + (battery.charging ? "Yes" : "No"));
       if(battery.charging == true){
            document.getElementById("icon").style.display = true;
       }
     }
  
     battery.addEventListener('levelchange', function(){
       updateLevelInfo();
     });
     function updateLevelInfo(){
       console.log("Battery level: "
                   + battery.level * 100 + "%");
                   var status = battery.level * 100 +"%";
                   document.getElementById("batteryLevel").style.width = status;
                   document.getElementById("percent").innerText = status;


     }  
   });

 

