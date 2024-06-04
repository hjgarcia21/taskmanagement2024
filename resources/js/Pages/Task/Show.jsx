import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_PRIORITY_CLASS_MAP, 
        TASK_PRIORITY_TEXT_MAP,
        TASK_STATUS_CLASS_MAP, 
        TASK_STATUS_TEXT_MAP,  } from "@/constants.jsx";
import { Head, Link } from "@inertiajs/react";
export default  function Show({auth, task }){
    return(

        <AuthenticatedLayout
        user={auth.user}
       header={
        

        <div className="flex items-center justify-between">
           <h2 className="font-semibold text-xl text-gray-800 
           dark:text-gray-200 leading-tight">
               {`Task "${task.name}"`}
           </h2>
         <Link href={route("task.edit", task.id)} className="bg-indigo-500 py-1 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600">
         Edit
         </Link>
        
        </div>
         
           }
   >

           <Head title= {`Task "${task.name}"`}/>


           <div className="pb-12">
           <div className="text-xs text-black-700 uppercase bg-black-50 bg-blue-400
                            dark:text-black-400 border-b-2 border-black-500">
                    <div className="text-xs text-black-700 uppercase bg-black-50 bg-blue-400
                            dark:text-black-400 border-b-2 border-black-500">
                    <div>
                            <img
                            
                            src={task.image_path}
                            alt=""
                            className="w-full h-64 object-cover"

                            />
                            </div>
                        <div className="p-6 text-black-900 dark:text-black-100">

                           

                            <div className="grid gap-1 grid-cols-2 mt-2">
                          

                            <div>
                            <div>
                                <label className="font-bold text-lg">Task ID</label>
                                <p className="mt-1">{task.id}</p>

                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Task Name</label>
                                <p className="mt-1">{task.name}</p>
                            </div>

                            
                            <div className="mt-4">
                                <label className="font-bold text-lg">Task Status</label>
                                <p className="mt-1">
                                   <span
                                   className={
                                    "px-2 py-1 rounded text-white " + 
                                    TASK_STATUS_CLASS_MAP[task.status] 
                                   }
                                   >
                                    {TASK_STATUS_TEXT_MAP[task.status]}
                                   </span>
                            </p>
                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Task Priority</label>
                                <p className="mt-1">
                                   <span
                                   className={
                                    "px-2 py-1 rounded text-white " + 
                                    TASK_PRIORITY_CLASS_MAP[task.priority] 
                                   }
                                   >
                                   {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                   </span>
                            </p>
                            </div>



                            
            
                            <div className="mt-4">
                                <label className="font-bold text-lg">Created By</label>
                                <p className="'mt-1">{task.createdBy.name}</p>

                            </div>
                            </div>

                                    <div>
                                    <div>
                                <label className="font-bold text-lg">Due Date</label>
                                <p className="mt-1">{task.due_date}</p>

                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Create Date</label>
                                <p className="mt-1">{task.created_at}</p>
                            </div>

                            
                            
                            <div className="mt-4">
                                <label className="font-bold text-lg">Updated By</label>
                                <p className="'mt-1">{task.updatedBy.name}</p>

                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Project</label>
                                <p className="'mt-1">
                                    <Link href={route("project.show",task.project.id)}
                                    className="hover:underline"
                                    >
                                        {task.project.name}
                                    </Link>
                                </p>

                            </div>
                    
                            <div className="mt-4">
                                <label className="font-bold text-lg">Assigned User</label>
                                <p className="'mt-1">{task.assignedUser.name}</p>

                            </div>





                            </div>




                                    </div>

                                    <div className="mt-4">
                                    <label className="font-bold text-lg">Task Description</label>
                                    <p className="mt-1">{task.description}</p>
                                   </div>


</div>
            </div>
                </div>
                    </div>
                  
                
                         
                        
   </AuthenticatedLayout>
    );
}