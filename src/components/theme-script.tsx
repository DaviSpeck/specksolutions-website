export function ThemeScript() {
  const script = `
    (() => {
      const storedTheme = window.localStorage.getItem("theme");
      const theme = storedTheme || "dark";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
