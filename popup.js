let saveButton = document.getElementById("saveTab");
let links = [];
saveButton.addEventListener("click", async ()=>{
    chrome.tabs.query({}, function(tabs){
        tabs.forEach(function(tab){
            links.push(tab.url);
        });
    });
    chrome.storage.sync.set({
        list:links
    }, function() {
        console.log(links);
    });

    chrome.storage.sync.get("list",
    function(data) {
       console.log(data);
    });  
});