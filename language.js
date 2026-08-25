(() => {
  const storageKey = "tianyou-homepage-language";
  const copy = {
    en: {
      title: "Tianyou Wu — Academic Homepage",
      description:
        "Tianyou Wu is an M.S. student at Zhejiang University researching trajectory prediction, deep learning, and computer vision.",
    },
    zh: {
      title: "Tianyou Wu — 学术个人主页",
      description:
        "Tianyou Wu，浙江大学硕士研究生，研究方向包括轨迹预测、深度学习与计算机视觉。",
    },
  };

  function setLanguage(language, persist = false) {
    const nextLanguage = language === "zh" ? "zh" : "en";
    const root = document.documentElement;

    root.dataset.lang = nextLanguage;
    root.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    document.title = copy[nextLanguage].title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", copy[nextLanguage].description);
    }

    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      const isActive = button.dataset.setLang === nextLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, nextLanguage);
      } catch {
        // The switch still works when storage is unavailable.
      }
    }
  }

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.setLang, true);
    });
  });

  setLanguage(document.documentElement.dataset.lang || "en");
})();
