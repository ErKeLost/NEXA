import { create } from "zustand";

export type ChatMessage = {
  role: "user" | "agent";
  content: string;
};

type ChatState = {
  projectId: string;
  modelId: string;
  messages: ChatMessage[];
  error: string | null;
  setProjectId: (id: string) => void;
  setModelId: (id: string) => void;
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  setError: (error: string | null) => void;
  reset: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
  projectId: "",
  modelId: "",
  messages: [],
  error: null,
  setProjectId: (id) => set({ projectId: id }),
  setModelId: (id) => set({ modelId: id }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  setMessages: (messages) => set({ messages }),
  setError: (error) => set({ error }),
  reset: () =>
    set({
      projectId: "",
      modelId: "",
      messages: [],
      error: null,
    }),
}));
