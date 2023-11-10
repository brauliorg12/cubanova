export const stickyElement = (
  stickyElement: string,
  from: string,
  to: string
): void => {
  let stickyDoc = document.getElementById(stickyElement); // Sticky Element

  // Mobile dont sticky
  if (window.innerWidth >= 768) {
    let sectionFrom = document.getElementById(from); // Desde
    let sectionTo = document.getElementById(to); // Hasta

    const sectionTop = sectionFrom ? sectionFrom.offsetTop : 0;
    const sectionEnd = sectionTo ? sectionTo.offsetTop : 0;

    if (stickyDoc) {
      if (scrollY >= sectionTop + 100 && scrollY <= sectionEnd - 200) {
        stickyDoc.classList.add('sticky');
      } else {
        stickyDoc.classList.remove('sticky');
      }
    }
  } else if (stickyDoc) {
    stickyDoc.classList.remove('sticky');
  }
};
