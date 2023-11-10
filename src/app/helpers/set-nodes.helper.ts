// Set nodes
export const setNodes = (): {
  sections: NodeListOf<HTMLElement>;
} => {
  const sections = document.querySelectorAll('section');

  return { sections };
};
