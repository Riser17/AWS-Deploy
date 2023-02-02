import{r as d,U as v,u as y,j as e,a as s}from"./index-2f68c3a6.js";import{k,Q as o}from"./react-toastify.esm-ac689d23.js";/* empty css            */import"./clsx.m-1229b3e0.js";const j=({setLocal:c})=>{const{DashboardValid:u,setLoginData:h}=d.exports.useContext(v),[i,w]=d.exports.useState(!1),p=y(),[r,f]=d.exports.useState({email:"",password:""}),m=n=>{const{name:a,value:t}=n.target;f(()=>({...r,[a]:t}))},g=async n=>{n.preventDefault();const{email:a,password:t}=r;if(a==="")o.error("email is required!",{position:"top-center"});else if(!a.includes("@"))o.warning("includes @ in your email!",{position:"top-center"});else if(t==="")o.error("password is required!",{position:"top-center"});else if(t.length<6)o.error("password must be 6 char!",{position:"top-center"});else{const l=await(await fetch("/api/login",{method:"POST",withCredentials:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:t})})).json();l.status===201?(localStorage.setItem("usersdatatoken",l.result.token),await u(),c(l.result.token),setTimeout(()=>{localStorage.removeItem("usersdatatoken"),h(!1),c(""),p("/login")},1e3*60*60*24),p("/dash")):o.error("User not found",{position:"top-center"})}};return e("div",{children:e("section",{children:s("div",{className:"form_data",children:[s("div",{className:"form_heading",children:[e("h1",{children:"Welcome Back, Log In"}),e("p",{children:"Hi, we are you glad you are back. Please login."})]}),s("form",{children:[s("div",{className:"form_input",children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{type:"email",value:r.email,onChange:m,name:"email",id:"email",placeholder:"Enter Your Email Address"})]}),s("div",{className:"form_input",children:[e("label",{htmlFor:"password",children:"Password"}),s("div",{className:"two",children:[e("input",{type:i?"text":"password",onChange:m,value:r.password,name:"password",id:"password",placeholder:"Enter Your password"}),e("div",{className:"showpass",onClick:()=>w(!i),children:i?"Hide":"Show"})]})]}),e("button",{className:"btn",onClick:g,children:"Login"})]}),e(k,{})]})})})};export{j as default};
