var isIsomorphic = function(s, t) {
    if(s.length!=t.length) return false
    let maps={}
    let mapt={}

    for(let i=0;i<s.length;i++){
        //one of them already mapped
        if(maps[s[i]]||mapt[t[i]]){
            

            // now checking whther mapping of both in both maps is same like no duplicate mapping
            // each char is mapped to same char vice versa in both mappins
            if(maps[s[i]]!=t[i]||mapt[t[i]]!=s[i]){
                return false
            }
        }else{

            // if not mapped create mappin in both 
            // for example egg , add so for i=0 e->g stored in maps and g->e stored in mapt
            maps[s[i]]=t[i]
            mapt[t[i]]=s[i]
        }
    }

    console.log("Maps",maps,mapt)

    return true
};
const s = "foo"
const t = "bar"

console.log(isIsomorphic(s,t))