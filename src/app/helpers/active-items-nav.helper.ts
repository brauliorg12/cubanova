import { setNodes } from 'src/app/helpers/set-nodes.helper';
/**
 *
 * @description Activa los items del navbar segun section siempre y cuando no se le pase currentSet por parametro. Y agregando el mismo nombre de section a la clase de los items
 * @param currentSet valor que se le puede pasar por string
 * @returns string
 */
export const activeItems = (currentSet?: string): string => {
  let current: string = '';

  if (!currentSet) {
    setNodes().sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 250) {
        current = section.getAttribute('id') as string;
      }
    });
  }

  return current;
};
