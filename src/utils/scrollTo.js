// helper function
const scrollTo = (st, scrollDistance) => {
  st.scroll(scrollDistance);
};

export const scrollToNavigationItem = (st) => {
  // projects
  const projectsEl = document.getElementById("projects");
  const projectsDistance = projectsEl?.getBoundingClientRect().top - 40;

  // about
  const aboutEl = document.getElementById("about");
  const aboutDistance = aboutEl?.getBoundingClientRect().top - 40;

  // contact
  const contactEl = document.getElementById("contact");
  const contactDistance = contactEl?.getBoundingClientRect().top - 80;

  const projectNav = document.querySelectorAll("nav ul li")[0];
  const aboutNav = document.querySelectorAll("nav ul li")[1];
  const contactNav = document.querySelectorAll("nav ul li")[2];

  // project nav item
  projectNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, projectsDistance);
  });
  // about nav item
  aboutNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, aboutDistance);
  });
  // contact nav item
  contactNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, contactDistance);
  });
};

export const scrollToTop = (st) => {
  const scrollToTopButtonEl = document.getElementById("scrollToTop");

  // scroll to top button
  scrollToTopButtonEl.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, 0);
  });
};
