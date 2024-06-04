
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link } from "@inertiajs/react";
import TasksTable from "./TasksTable";

export default function Index({auth, tasks,success, queryParams = null}){
    return(
        <AuthenticatedLayout
             user={auth.user}
            header={
                <div className="flex justify-between items-center ">
                <h2 className="font-semibold text-xl text-gray-800 
            dark:text-gray-200 leading-tight">
            Tasks
            </h2>
            <Link href={route("task.create")} className="bg-indigo-500 py-1 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600">
            Add New
            </Link>
            </div>
                }
        >

                <Head title="Tasks"/>
              
    <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-black dark:bg-blue-300 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-black-900 dark:text-black-100">


                            <TasksTable tasks={tasks} queryParams={queryParams}
                           success={success}
                           />
                      
                     

                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>

    )
}