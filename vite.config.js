import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allows requests from a specific hostname
    allowedHosts: ['abel-agrobiological-adaline.ngrok-free.dev'],

    // Alternatively, you can use a leading dot to allow a domain and all its subdomains
    // allowedHosts: ['.example.com'], // Allows example.com, www.example.com, etc.
    
    // To allow any host (USE WITH CAUTION - vulnerable to DNS rebinding attacks)
    // allowedHosts: true, 

    host: true, // Listens on all local network interfaces
    port: 5173,
  },
})
