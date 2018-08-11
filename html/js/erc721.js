function initERC721(address){
    var erc721ABI = web3.eth.contract(erc721.abi);
    erc721Contrct = erc721ABI.at(address);
}

function getNotes(userId, callback){
    erc721Contrct.getNotes.call(userId, function(e, data){
        if(e){
            callback.onError(e);
            return;
        }
        callback.onSuccess(data);
    })
}