import{W as c,j as e,Y as u,a as p}from"./app-DH_8i6Nk.js";import{I as r}from"./InputError-CnfjL874.js";import{I as l}from"./InputLabel-BslD3Rbn.js";import{S as j}from"./SelectInput-DhJ7iur0.js";import{T as x}from"./TextAreaInput-Bv3flZgg.js";import{T as i}from"./TextInput-DHCkAwrn.js";import{A as h}from"./AuthenticatedLayout--Tgs6PUZ.js";import"./ApplicationLogo-CgpoqhEQ.js";import"./transition-pAg4R4vE.js";function C({auth:m}){const{data:o,setData:s,post:n,errors:a,reset:g}=c({image:"",name:"",status:"",description:"",due_date:""}),d=t=>{t.preventDefault(),n(route("project.store"))};return e.jsxs(h,{user:m.user,header:e.jsx("div",{className:"flex justify-between items-center ",children:e.jsx("h2",{className:`font-semibold text-xl text-black-800 \r
                dark:text-gray-200 leading-tight`,children:"Create New Projects"})}),children:[e.jsx(u,{title:"Projects"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-white-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:d,className:" p-4 sm-p-8 bg-white dark:bg-blue-300 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"project_image_path",value:"Project Image"}),e.jsx(i,{id:"project_image_path",type:"file",name:"image",className:"mt-1 block w-full",onChange:t=>s("image",t.target.files[0])}),e.jsx(r,{message:a.image,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"project_name",value:"Project Name"}),e.jsx(i,{id:"project_name",type:"text",name:"name",value:o.name,className:"mt-1 block w-full",isFocused:!0,onChange:t=>s("name",t.target.value)}),e.jsx(r,{message:a.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"project_description",value:"Project Description"}),e.jsx(x,{id:"project_description",type:"description",name:"name",value:o.description,className:"mt-1 block w-full",isFocused:!0,onChange:t=>s("description",t.target.value)}),e.jsx(r,{message:a.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"project_due_date",value:"Project Deadline"}),e.jsx(i,{id:"project_due_date",type:"date",name:"due_date",value:o.due_date,className:"mt-1 block w-full",isFocused:!0,onChange:t=>s("due_date",t.target.value)}),e.jsx(r,{message:a.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"project_status",value:"Project Status"}),e.jsxs(j,{id:"project_status",name:"status",className:"mt-1 block w-full",onChange:t=>s("status",t.target.value),children:[e.jsx("option",{value:"",children:"Please Status"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"in_progress",children:"In Progress"}),e.jsx("option",{value:"completed",children:"Completed"})]}),e.jsx(r,{message:a.project_status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(p,{href:"project.index",className:`bg-gray-100 py-1 px-3 text-bl-800 rounded shadow transition-all \r
                                        hover:bg-red-400 mr-2`,children:"Cancel"}),e.jsx("button",{className:`bg-indigo-500 py-1 px-3 text-white rounded\r
                shadow transition-all hover:bg-emerald-600`,children:"Submit"})]})]})})})})]})}export{C as default};