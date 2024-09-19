<template>
    <div :class="['message', message.sender]">
      <span>{{ message.text }}</span>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    message: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .message {
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    max-width: 80%;
  }
  
  .user {
    background-color: #d1e7dd;
    align-self: flex-end;
  }
  
  .assistant {
    background-color: #f8d7da;
    align-self: flex-start;
  }
  </style>
  