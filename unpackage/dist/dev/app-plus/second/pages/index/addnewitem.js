
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,3],])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/addnewitem.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      