<template>
  <div class="chat-container">
    <div class="messages">
      <!-- Iteration over conversations -->
      <div v-for="(conversation, index) in conversations" :key="index" class="conversation">
        <!-- Affichage des messages du bot -->
        <div v-for="(message, msgIndex) in conversation.bot" :key="'bot-' + msgIndex" class="message bot">
          <p v-for="(line, lineIndex) in message" :key="'line-' + lineIndex">{{ line }}</p>
        </div>
        <!-- Affichage des messages de l'utilisateur -->
        <div v-for="(message, msgIndex) in conversation.utilisateur" :key="'user-' + msgIndex" class="message utilisateur">
          <p v-for="(line, lineIndex) in message" :key="'line-' + lineIndex">{{ line }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import conversationsData from './data/messages.json'; // Assure-toi que le chemin est correct

// Chargement des conversations du fichier JSON
const conversations = ref(conversationsData);
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

.conversation {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.message {
  display: flex;
  margin-bottom: 10px;
}

.message.bot {
  justify-content: flex-start;
}

.message.utilisateur {
  justify-content: flex-end;
}

.message p {
  margin: 0;
}
</style>
