const prefix = "/InThisDullTown";

const injectTemplate = async (templateId, targetId) => {
  const res = await fetch("/InThisDullTown/elements/elements.html");
  const html = await res.text();

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;

  const template = tempContainer.querySelector(`#${templateId}`);
  const clone = template.content.cloneNode(true);

  document.getElementById(targetId).appendChild(clone);
};

injectTemplate("siteHeader", "siteHeaderPlaceholder");

injectTemplate("siteSidebar", "sidebarPlaceholder").then(() => {
  highlightActiveSidebarLink();
});
const highlightActiveSidebarLink = () => {
  const currentFile = window.location.pathname.split("/").pop();
  const sidebarLinks = document.querySelectorAll(".sidebar .navLinks a");

  sidebarLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const currentPath = window.location.pathname;

    if (currentPath.includes(`/inthisdulltown${href}`)) {
      link.classList.add("target");
    }
  });
};

injectTemplate("siteFooter", "footerPlaceholder");
