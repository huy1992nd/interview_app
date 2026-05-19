import { useCallback, useEffect, useState } from "react";

export function useSpeech() {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const load = () => {
      const v = speechSynthesis.getVoices().filter((x) => x.lang.startsWith("en"));
      setVoices(v);
    };
    load();
    speechSynthesis.onvoiceschanged = load;
  }, []);

  const speak = useCallback((text, rate = 0.9) => {
    if (!window.speechSynthesis || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const preferred =
      voices.find((v) => v.name.includes("Google") && v.lang === "en-US") ||
      voices.find((v) => v.lang === "en-US") ||
      voices[0];
    if (preferred) {
      u.voice = preferred;
      u.lang = preferred.lang;
    } else u.lang = "en-US";
    u.rate = rate;
    speechSynthesis.speak(u);
  }, [voices]);

  const stop = useCallback(() => speechSynthesis?.cancel(), []);

  return { speak, stop, voices };
}
