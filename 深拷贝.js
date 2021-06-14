function deepCloneEasy(target){
    if(target!==null &&typeof target==="object"){
        return JSON.parse(JSON.stringify(target))
    }else{
        return target
    }
}

function deepCloneHard(target,map=new Map()){
    if(target!==null && typeof target==='object'){
        let clone = map.get(target)
        if(clone) return clone
        clone = Array.isArray(target)?[]:{}
        map.set(target,clone)
        for(const key in target){
            if(target.hasOwnProperty(key)){
                if(typeof target[key] ==='object'){
                    deepCloneHard(target[key],map)
                }else{
                    clone[key] = target[key]
                }
            }
        }
        return clone
    }else{
        return target
    }
}
