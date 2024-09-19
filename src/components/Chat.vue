<template>
    <div class="chat-container">
      <div class="messages">
        <Message
          v-for="msg in messages"
          :key="msg.id"
          :message="msg"
        />
      </div>
      <Input @sendMessage="addMessage" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Message from './Message.vue';
  import Input from './Inpute.vue';
  import messagesData from './data/messages.json';

  
const messages = ref([]); // Commence avec une liste de messages vide

function addMessage(text) {
  const newMessage = {
    id: messages.value.length + 1,
    text,
    sender: 'user',
  };
  messages.value.push(newMessage);
  generateAssistantResponse(text);
}

function generateAssistantResponse(userMessageText) {
  // Trouver la réponse appropriée dans le fichier JSON
  const foundConversation = messagesData.conversations.find(conv => conv.user.toLowerCase() === userMessageText.toLowerCase());

  const assistantResponse = foundConversation
    ? foundConversation.assistant // Si une correspondance est trouvée
    : "Désolé, je ne comprends pas cette question."; // Réponse par défaut si aucune correspondance

  setTimeout(() => {
    const assistantMessage = {
      id: messages.value.length + 1,
      text: assistantResponse,
      sender: 'assistant',
    };
    messages.value.push(assistantMessage);
  }, 1000);
}
  </script>
  
  <style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
}

.message {
  display: flex;
  justify-content: flex-start; /* Par défaut, aligne les messages à gauche */
  margin-bottom: 10px;
}

.message.user {
  justify-content: flex-start;
}

.message.assistant {
  justify-content: flex-end;
}
  </style>
  