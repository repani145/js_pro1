var md=document.createElement('div')
document.body.appendChild(md)
md.setAttribute('class','md')

var fm=document.createElement('form')
md.appendChild(fm)

var fs=document.createElement('fieldset')
fm.appendChild(fs)
fs.setAttribute('class','fset')
var brr=document.createElement('br')
fs.appendChild(brr)

var lgd=document.createElement('legend')
fs.appendChild(lgd)
lgd.innerText='LOGIN'
lgd.style.color='white'

var cd=document.createElement('div')
fs.appendChild(cd)
cd.setAttribute('class','cd')

var md1=document.createElement('div')
cd.appendChild(md1)
md1.setAttribute('class','md1')

var md2=document.createElement('div')
cd.appendChild(md2)
md2.setAttribute('class','md2')

var p1=document.createElement('label')
md1.appendChild(p1)
p1.innerHTML='<i style="font-size:24px" class="fa">&#xf2c0;</i> email or user_name'

var brr=document.createElement('br')
md1.appendChild(brr)
var brr=document.createElement('br')
md1.appendChild(brr)

var p2=document.createElement('label')
md1.appendChild(p2)
p2.innerHTML='<i style="font-size:24px" class="fa">&#xf084;</i> enter password'

var in1=document.createElement('input')
md2.appendChild(in1)

var brr=document.createElement('br')
md2.appendChild(brr)
var brr=document.createElement('br')
md2.appendChild(brr)

var in2=document.createElement('input')
md2.appendChild(in2)
in2.setAttribute('type','password')
in2.setAttribute('required','true')


var brr=document.createElement('br')
fs.appendChild(brr)

var bb=document.createElement('div')
fs.appendChild(bb)
bb.style.textAlign='center'

var btn=document.createElement('button')
bb.appendChild(btn)
btn.innerText='LogIn'
// btn.innerHTML='<a href="file:///D:/DAILY_PRACTICE/feb17_24/mid.html">Login<a/>'
var fmm=document.getElementsByTagName('form')[0]
fmm.addEventListener('submit',()=>{
    var given_user_details=document.getElementsByTagName('input')
    var eml_unm=given_user_details[0].value
    var psd=given_user_details[1].value

    
    var userdata=window.localStorage.getItem('USER')

    if(userdata != null){
        var arr=JSON.parse(userdata)
        check=0
        for(let obj of arr){
            if(obj.email==eml_unm || obj.create_user_name==eml_unm){
                check++
                if(obj.enter_password==psd){
                    window.location.assign('./display.html')
                    var send_data_to_display=JSON.stringify(obj)
                    window.sessionStorage.setItem('Login_user',send_data_to_display)
                    window.alert('LOGEDIN SUCCESSFULL')
                    // HERE I HAVE OBSERVED THAT NO STATEMENT IS EXCECUTING AFTER alert statement

                    // btn.addEventListener('click',()=>{
                    //     // eee.preventDefault()
                    //     var send_data_to_display=JSON.stringify(obj)
                    //     window.sessionStorage.setItem('Login_user',send_data_to_display)
                    //     window.location.assign('./display.html')
                    // })
                    
                }else{
                    window.alert('please enter correct password !')
                    break
                }
            }
        }
        if(check==0){
            window.location.assign('./reg.html')
            window.alert('USER DEDAILS NOT FOUND(user details not found in database)! ')
            
            // btn.addEventListener('click',(eee)=>{
            //     // eee.preventDefault()
            //     window.location.assign('./reg.html')
            // })
            
        }
    }else{
        window.location.assign('./reg.html')
        window.alert('USER DEDAILS NOT FOUND (database is empty)!')
        

            // btn.addEventListener('click',(eee)=>{
            //     eee.preventDefault()
            //     window.location.assign('./reg.html')
            // })
    }

    






})


// btn.setAttribute('href','file:///D:/DAILY_PRACTICE/feb17_24/mid.html')
