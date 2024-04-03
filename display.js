var lout=document.createElement('button')
document.body.appendChild(lout)
lout.innerHTML='<b>LogOut</b>'
lout.setAttribute('class','lout')

lout.addEventListener('click',()=>{
    lout.style.color='white';
    lout.style.backgroundColor='red';
    window.sessionStorage.setItem('Login_user','')
    window.location.assign('./log.html')
})

var md=document.createElement('div')
document.body.appendChild(md)
md.setAttribute('class','md')

var pp=document.createElement('p')
md.appendChild(pp)
pp.setAttribute('class','pp')
pp.innerHTML='Welcome To Online Vote Casting'

var scrooll=document.createElement('marquee')
md.appendChild(scrooll)
scrooll.innerHTML='<b>CLICK ON IMAGE TO CAST YOUR VOTE</b>'

var brr=document.createElement('br')
md.appendChild(brr)
var brr=document.createElement('br')
md.appendChild(brr)

var mdd=document.createElement('div')
md.appendChild(mdd)
mdd.setAttribute('class','mdd')



var imggs=['./food.jpg','./sleep.webp','./ent.webp','./travel.jpg']
var img_Titles=['FOOD','SLEEP','ENTERTAINMENT','TRAVEL']

var vote_data=window.localStorage.getItem('voting_data')
casted_votes=JSON.parse(vote_data)

for(let i in imggs){
    var cd=document.createElement('div')
    mdd.appendChild(cd)
    cd.setAttribute('class',`cd${i} cd`)
    
    var imgg=document.createElement('img')
    cd.appendChild(imgg)
    imgg.setAttribute('src',imggs[i])
    imgg.setAttribute('id',`imgg${i}`)

    var img_Title=document.createElement('p')
    cd.appendChild(img_Title)
    img_Title.innerText=img_Titles[i]
    img_Title.style.fontWeight='bold'

    var tble=document.createElement('table')
    cd.appendChild(tble)
    tble.setAttribute('class','tble')

    if(casted_votes=='null' || casted_votes==null){
        undefined
    }else{
            startt=1000
            for(let obj of casted_votes){
                if(img_Titles[i]==obj['vote']){
                    let trr=document.createElement('tr')
                    tble.appendChild(trr)

                    let tdd=document.createElement('td')
                    trr.appendChild(tdd)

                    setTimeout(()=>{
                        tdd.innerText=obj['First_Name']+' '+obj['Last_Name']
                    },startt)
                }
                startt+=200
            }
        }
}

arr=[]
siva=0
var temp=window.sessionStorage.getItem('Login_user')        // PRESET LOGIN USER
    preset_Login_User=JSON.parse(temp)                      //Present Login User
    // console.log(preset_Login_User)
// var catogiry=['food_lover','sleep_lover','entertainment']
// var vote_data=window.localStorage.getItem('voting_data')
// casted_votes=JSON.parse(vote_data)                          // This array collection of objects

if(casted_votes==null || casted_votes=='null'){             // FOR 1ST vote // Still No one casted vote
    console.log('i found casted votes as empty 65th LINE')
    // console.log('A')
    initial()
}else{

    user_namee=preset_Login_User.create_user_name            //getting current user uname
    // var vote_arr=JSON.parse(vote_data)                    // getting TOTAL casted data object
    // debugger;
    var index_Or_true=check_for_voting(casted_votes,user_namee);
    console.log(index_Or_true)
    if(index_Or_true=='ok'){                                  //if voter still not used vote
        Vote_Casting()
    }
    else{                                                     // if voter alredy casted his vote(need UPDATE)
        var indd=index_Or_true;                               // getting index of his data
        for(j in img_Titles){
            var omg=document.getElementById(`imgg${j}`)
            omg.addEventListener('click',()=>{
                // console.log('SIVA');
                console.log(`i found ${preset_Login_User['create_user_name']} is already casted his vote 81st Line ${siva++}`)
                window.alert('YOU ALREADY CASTED YOUR VOTE')
                // obj={j:preset_Login_User}
                // preset_Login_User['vote']=img_Titles[j];
                // arr[indd-1].vote=img_Titles[j];
                // arr.push(preset_Login_User)
                // dataa=JSON.stringify(arr)
                // window.localStorage.setItem('voting_data',dataa)
            })
        }
    }
}

function check_for_voting(arr,logged_user_namee){
    for(jj in arr){
            if(arr[jj].create_user_name==logged_user_namee){
                temmp=arr[jj]
                // arr[jj]={}
                // window.alert('YOU ALREADY CASTED YOUR VOTE')
                console.log(`i found ${preset_Login_User['create_user_name']} is already casted his vote 101th line${siva++}`)
                return jj
            }
    }
    console.log(`i found ${preset_Login_User['create_user_name']} is not casted his vote and eligiblr for vote 105th Line ${siva++}`)
    return 'ok'    // ELIGIBLE FOR VOTE OR NOT CASTED HIS VOTE 
}

function initial(){
    for(let j in img_Titles){
        var omg=document.getElementById(`imgg${j}`)
        omg.addEventListener('click',()=>{
            console.log('i am from 1st voting function(INITIAL)')
            preset_Login_User['vote']=img_Titles[j];
            arr.push(preset_Login_User)
            dataa=JSON.stringify(arr)
            window.localStorage.setItem('voting_data',dataa)
            window.location.assign('./display.html')
            console.log(`i have casted ${preset_Login_User['create_user_name']} 120th Line ${siva++}`)
        })
    }
}

function Vote_Casting(){
    for(let j in img_Titles){
        var omg=document.getElementById(`imgg${j}`)
        omg.addEventListener('click',()=>{
            console.log('i am from Vote Casting Function');
            // var ccc=check_for_voting(casted_votes,user_namee);
            // if(ccc==true){
                // obj={j:preset_Login_User}
                preset_Login_User['vote']=img_Titles[j];
                casted_votes.push(preset_Login_User)
                dataa=JSON.stringify(casted_votes)
                window.localStorage.setItem('voting_data',dataa)
                console.log(`i have casted  ${preset_Login_User['create_user_name']} VOte Successfully 138th Line`)
                window.location.assign('./display.html')
            // }
           
        })
    }
}

// let dd=document.getElementById('cd0')
// console.log(dd);
// console.log(Array.isArray(dd));



// function check_for_Update(){
//     user_namee=preset_Login_User.create_user_name      //getting current user uname
//     // var vote_arr=JSON.parse(vote_data)     // getting TOTAL casted data object
//     var index_Or_true=check_for_voting(casted_votes,user_namee);
//     if(index_Or_true==true){    //if voter still not used vote
//         initial()
//     }
//     else{                                    // if voter alredy casted his vote(need UPDATE)
//         var indd=index_Or_true;    // getting index of his data
//         for(j in img_Titles){                // 
//             var omg=document.getElementById(`imgg${j}`)
//             omg.addEventListener('click',()=>{
//                 console.log('SIVA');
//                 window.alert('YOU ALREADY CASTED YOUR VOTE')
//                 // obj={j:preset_Login_User}
//                 // preset_Login_User['vote']=img_Titles[j];
//                 // arr[indd-1].vote=img_Titles[j];
//                 // arr.push(preset_Login_User)
//                 // dataa=JSON.stringify(arr)
//                 // window.localStorage.setItem('voting_data',dataa)
//             })
//         }
//     }
// }