<template>
    <div class="input-container">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Écrivez un message..." />
      <button @click="sendMessage">Envoyer</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newMessage = ref('');
  
  const emit = defineEmits(['sendMessage']);
  
  function sendMessage() {
    if (newMessage.value.trim() !== '') {
      emit('sendMessage', newMessage.value);
      newMessage.value = '';
    }
  }
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    margin-left: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
  }
  </style>
  