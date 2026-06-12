export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  isStreaming?: boolean;
}

export interface PresetPrompt {
  label: string;
  prompt: string;
}
