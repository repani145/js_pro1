var md=document.createElement('div')
document.body.appendChild(md)
md.setAttribute('class','md')

var fm=document.createElement('form')
md.appendChild(fm)
fm.setAttribute('class','fm')

var dd=document.createElement('fieldset')   // child div for formmm
fm.appendChild(dd)
dd.setAttribute('class','dd')

var lgd=document.createElement('legend')
dd.appendChild(lgd)
lgd.innerHTML='<h2>Registration form</h2>'

var d1=document.createElement('div')   // child div for labels
dd.appendChild(d1)
d1.setAttribute('class','d1')

var d2=document.createElement('div')   // child div for input
dd.appendChild(d2)
d2.setAttribute('class','d2')

var data=['First Name','Last Name','email','phone number','create user name','enter password','conform password']
var data1=['First_Name','Last_Name','email','phone_number','create_user_name','enter_password','conform_password']

let z=0;
ob={}
arr=[]
let y=1;
bbb={}
function fill(){
    for(let i of data){

        var lbl=document.createElement('label')
        d1.appendChild(lbl)
        lbl.setAttribute('for',`ip${z}`)
        lbl.innerText=i
        
        let ipt=document.createElement('input')
        d2.appendChild(ipt)
        ipt.setAttribute('id',`ip${z}`)
        ipt.setAttribute('required','true')//var txt=['First Name','Last Name','create user name']
        if(i=='First Name'|| i=='Last Name' || i=='create user name'){
            ipt.setAttribute('type','text')
            ipt.setAttribute('placeholder',i)
        }
        else if(i=='email'){
            ipt.setAttribute('type','email')
            ipt.setAttribute('placeholder',i)
        }
        else if(i=='enter password' || i=='conform password'){
            ipt.setAttribute('type','password')
            ipt.setAttribute('placeholder',i)
        }
        else{
            ipt.setAttribute('type','text')
            ipt.setAttribute('placeholder',i)
        }
        z++
        ipt.addEventListener('focus',()=>{
            ipt.setAttribute('style','background-color:orange;')
        })
    }

    var dt=document.getElementsByTagName('input')
    if (dt[5].value!=dt[6].value){
        return fill()
    }else{
        return;
    }
    
}
fill()


var btn=document.createElement('button')
btn.innerText='register'
dd.appendChild(btn)
btn.setAttribute('class','btn')



btn.addEventListener('click',()=>{
    var temp1=window.localStorage.getItem('USER')
    // console.log(Array.isArray(temp))
    // window.location.assign("./log.html")

    if(temp1 == null){
        arr=[];
        aaa=initial_total()
        // window.location.assign("./log.html")

    }else{
        arr = new Array(temp1);
        arr=JSON.parse(arr)
        aaa=total()
        
        // window.location.assign("./log.html")
    }
    // console.log(arr)

function initial_total(){
    let p1=document.getElementById('ip5').value
    let p2=document.getElementById('ip6').value

    function pass_check(p1,p2){
        if(p1=='' || p2==''){
            window.alert('password should not be empty')
            return false}
        else if(p1!=p2){
            window.alert('conform password not matched with enteered password')
            return false
        }
        else{
            return true
        }
    }

    function email_Check(){
        var eml=document.getElementById('ip2').value
        // for(obj of arr){
            if (eml==''){
                window.alert('email should not be empty')
                return false
            }else{
            return true}
        // }
    }
    // email_Check(arr)
    function user_name_Check(){
        var unm=document.getElementById('ip4').value
        // for(obj1 of arr){
            if(unm==''){
                window.alert('USER NAME SHOULD NOT BE EMPTY')
                return false
            // }
        }
        else{
        return true}
    }

    function phone_number_Check(){
        var pnm=document.getElementById('ip3').value
            if(pnm==''){
                window.alert('PHONE NUMBER SHOULD NOT BE EMPTY')
                return false
            }
        else{
        return true}
    }

    

    if(email_Check()==true){
        if(phone_number_Check()==true){
            if(user_name_Check()==true){
                if(pass_check(p1,p2)==true){
                    var inn=document.getElementsByTagName('input')
                    for(var ii in data1){
                        ob[data1[ii]]=inn[ii].value
                        }
                        arr.push(ob)
                        temp=JSON.stringify(arr)
                        window.localStorage.setItem('USER',temp)
                        // return true
                        move_To_log_in()
                }
            }
        }
    }

}

function move_To_log_in() {
    // Add event listener for form submission
    document.querySelector('.fm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        window.location.assign("./log.html"); // Redirect to login page
    });
}




function total(){
    var p1=document.getElementById('ip5').value
    var p2=document.getElementById('ip6').value

    function pass_check(p1,p2){
        if(p1=='' || p2==''){
            window.alert('password should not be empty')
            return false
        }else if(p1!=p2){
            window.alert('conform password is not matched with entered password')
            return false
        }
        else{
            return true
        }
    }

    function email_Check(arr){
        var eml=document.getElementById('ip2').value
        for(obj of arr){
            if (eml==''){
                window.alert('email should not be empty')
                return false
            }else if(obj.email==eml){
                window.alert('user already existed with given mail')
                return false
            }
        }
        return true
    }
    // email_Check(arr)

    function user_name_Check(arr){
        var unm=document.getElementById('ip4').value
        for(obj1 of arr){
            if(unm==''){
                window.alert('USER NAME SHOULD NOT BE EMPTY')
                return false
            }else if(obj1.create_user_name==unm){
                window.alert('USER NAME ALREADY EXISTED')
                return false
            }
        }
        return true
    }
    function phone_number_Check(arr){
        var pnm=document.getElementById('ip3').value
        for(obj2 of arr){
            if(pnm==''){
                window.alert('PHONE NUMBER SHOULD NOT BE EMPTY')
                return false
            }else if(obj2.phone_number==pnm){
                window.alert('PHONE NUMBER ALREADY USED')
                return false
            }
        }
        return true
    }
    // user_name_Check(arr)

    if(email_Check(arr)==true){
        if(phone_number_Check(arr)==true){
            if(user_name_Check(arr)==true){
                if(pass_check(p1,p2)==true){
                    var inn=document.getElementsByTagName('input')
                    for(var ii in data1){
                        ob[data1[ii]]=inn[ii].value
                        }
                        arr.push(ob)
                        temp=JSON.stringify(arr)
                        window.localStorage.setItem('USER',temp)
                        move_To_log_in()
                        // return true
                }
            }
        }
    }
    // return window.location.assign("./log.html")

}

// if(aaa==true){
//     btn.addEventListener('click',()=>{
//     console.log('loading login page')
//     // window.location.assign("./log.html")
//     })
// }else{
//     btn.addEventListener('click',()=>{
//         console.log('not working')
//         // window.location.assign("./reg.html")
//     })
// }


    // if(p1.value!=p2.value){
    //     window.alert('conform password is not matched with enterde password')
    // }
    // else{
        
    // }

    // var inn=document.getElementsByTagName('input')
    // for(var ii in data){
    //     ob[data[ii]]=inn[ii].value
    // }
    //     arr.push(ob)
    //     temp=JSON.stringify(arr)
    //     window.localStorage.setItem('USER',temp)

        // var inn=document.getElementsByTagName('input')
        // if(inn[ii].value!=''){
        //     ob[data[ii]]=inn[ii].value
        // }
        // else{
        //     window.alert(`${data[ii]} field should not be empty`)
        //     countt=0
        //     break;
        // }
    

    // if(countt!=0){

    // }
})





