import { useMutation } from "@tanstack/react-query";
import { sendChat, ChatRequest, ChatResponse } from "../services/chat-service";
import { useChatStore } from "../stores/chat-store";

export function useChatMutation() {
  const { addMessage, setError } = useChatStore.getState();

  return useMutation<ChatResponse, Error, ChatRequest>({
    mutationFn: (payload) => sendChat(payload),
    onMutate: (payload) => {
      setError(null);
      addMessage({ role: "user", content: payload.prompt });
    },
    onSuccess: (data) => {
      addMessage({ role: "agent", content: data.text ?? "No text returned" });
    },
    onError: (err) => {
      setError(err.message || "Request failed");
    },
  });
}
