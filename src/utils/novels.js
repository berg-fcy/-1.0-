import {getRequest} from "./api";

export const initNovels = (novels,store)=>{
    if(store.state.lists.length>0){
        return;
    }

    getRequest('/novel/collection').then(data=>{
        if(data){
            //格式化小说
            let fmtLists = formatLists(data);
            //将数据存入vuex
            store.commit('initNovel',fmtLists)
        }
    })
}


export const formatLists = (lists)=>{
    let fmtLists = [];
    lists.forEach(novels=>{
        let{
            id,
            name,
            type,
            author,
            description,
            status,
            hot,
        } = novels;
        let fmNovel = {
            id:id,
            name:name,
            type:type,
            author:author,
            description:description,
            status:status,
            hot:hot
        }
        fmtLists.push(fmNovel)
    });
    return fmtLists;
}