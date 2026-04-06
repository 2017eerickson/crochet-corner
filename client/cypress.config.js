import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:80",
        supportFile: false,
        chromeWebSecurity: false,
    },
    viewportWidth:1024,
    viewportHeight:768,
    video:false,
})
