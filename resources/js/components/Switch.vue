<template>
    <div class="switch" @click="handleClick">
      <input type="checkbox" v-model="value" v-if="false" />
      <button @click="toggleActive = !toggleActive"
            class="inline-flex items-center px-2 py-1 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
            :class="{ 'bg-gray-500 hover:bg-red-500': toggleActive, 'bg-red-500 hover:bg-gray-700': !toggleActive}" >
            <span class="text-white" v-if="toggleActive">Yes</span>
            <span v-else>No</span>
    </button>
    </div>
  </template>

  <script>
  export default {
    name: 'Switch',
    props: {
        modelValue: {
            required: true,
            type: Boolean
        }
    },
    data() {
      return {
        toggleActive: this.modelValue
      };
    },
    methods: {
      handleClick() {
        this.toggleActive = !this.modelValue;
      }
    }
  };
  </script>

