const appUrl = window.location.origin === "http://localhost:4000" || window.location.origin === "http://localhost:3000" ? "http://localhost:4000" : "https://happy-sales-production.up.railway.app"

export { appUrl }