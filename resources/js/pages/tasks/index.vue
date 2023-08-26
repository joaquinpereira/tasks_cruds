<template>
    <div class="flex place-content-end mb-4">
        <div class="px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white  tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
            <router-link :to="{ name: 'tasks.create' }" class="text-sm font-medium">Create Task</router-link>
        </div>
    </div>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <table class="w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Description</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Completed</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Actions</span>
                </th>
            </tr>
            </thead>

            <tbody class="divide-y divide-gray-200 divide-solid">
            <template v-for="(task, index) in tasks" :key="task.id" >
                <tr :class="{'bg-white': index % 2 === 1, 'bg-gray-100': index % 2 === 0}">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ task.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ task.description }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        <Switch @click="saveTask(task)" v-model="task.completed" />
                    </td>
                    <td>
                        <router-link :to="{ name: 'tasks.edit', params: { id: task.id } }"
                            class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            Edit
                        </router-link>

                        <button @click="deleteTask(task.id)"
                                class="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Delete
                        </button>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import useTasks from '../../composables/tasks';
    import { onMounted } from 'vue';

    import Switch from '../../components/Switch.vue';

    export default{
        components:{
            Switch
        },
        setup() {
            const { tasks, getTasks, destroyTask, completeTask } = useTasks()

            onMounted(getTasks)

            const deleteTask = async (id) => {
                if (!window.confirm('You sure?')) {
                    return
                }

                await destroyTask(id)
                await getTasks()
            }

            const saveTask = async (task) => {
                task.completed = !task.completed;
                await completeTask(task)
            }

            return {
                tasks,
                deleteTask,
                saveTask
            }
        }
    }
</script>
