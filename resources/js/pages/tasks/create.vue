<script setup>
import useTasks from '../../composables/tasks';
import { reactive } from 'vue';

import Switch from '../../components/Switch.vue';
import Checkbox from '../../components/Checkbox.vue';
import InputLabel from '../../components/InputLabel.vue';
import TextInput from '../../components/TextInput.vue';
import InputError from '../../components/InputError.vue';
import PrimaryButton from '../../components/PrimaryButton.vue';


const form = reactive({
    name: '',
    description: '',
    completed: false,
})

const { errors, storeTask } = useTasks();

const saveTask = async () => {
    await storeTask({ ...form })
}

</script>

<template>

    <form class="space-y-6" @submit.prevent="saveTask">
        <div class="space-y-4 rounded-md shadow-sm">
            <div class="mb-4">
                <div class="block mt-4">
                    <label class="flex items-center">
                        <Checkbox name="remember" v-model:checked="form.completed" />
                        <span class="ml-2 text-sm text-gray-600">Completed</span>
                    </label>
                </div>
            </div>

            <div class="mb-4">
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="string"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                />

                <InputError class="mt-2" v-if="errors.name" :message="errors.name[0]" />
            </div>

            <div class="mb-4">
                <InputLabel for="description" value="Description" />

                <TextInput
                    id="description"
                    type="description"
                    class="mt-1 block w-full"
                    v-model="form.description"
                    autocomplete="Description"
                />

                <InputError class="mt-2" v-if="errors.description" :message="errors.description[0]" />
            </div>
        </div>

        <PrimaryButton class="ml-4">
            Create Task.
        </PrimaryButton>
    </form>
</template>

