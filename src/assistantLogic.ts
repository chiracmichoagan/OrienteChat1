// src/assistantLogic.ts

export function generateAssistantResponse(userMessage: string): string {
    // Logique simple de réponse en fonction du message de l'utilisateur
    if (userMessage.includes('bonjour')) {
      return 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?';
    }
    if (userMessage.includes('projet')) {
      return 'Je serais ravi de vous aider avec votre projet. De quoi s\'agit-il ?';
    }
    // Ajoute d'autres conditions selon les besoins
    return 'Je ne suis pas sûr de comprendre. Pouvez-vous préciser ?';
  }
  