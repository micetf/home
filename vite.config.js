import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isProd = mode === "production";

    return {
        plugins: [react()],

        // En production, base est '/home/', en développement c'est '/'
        base: isProd ? "/home/" : "/",

        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
            },
        },

        // Optimiser l'importation du package data
        optimizeDeps: {
            include: ["packages-data"],
        },

        build: {
            outDir: "dist",
            assetsDir: "assets",
        },

        server: {
            port: 3000,
            open: true,
        },

        publicDir: "public",
    };
});
