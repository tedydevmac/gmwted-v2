// soundEffects.js
export const playSound = (soundType) => {
  const sounds = {
    open: new Audio("/sounds/open.m4a"),
    close: new Audio("/sounds/close.mp3"),
    expand: new Audio("/sounds/expand.m4a"),
    hover: new Audio("/sounds/hover.mp3"),
  };

  if (sounds[soundType]) {
    sounds[soundType].play();
  }
};
