/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Exportación estática
    reactStrictMode: true, // Modo estricto de React
    eslint: {
        ignoreDuringBuilds: true, // Ignorar errores de ESLint durante la construcción
    },
    images: {
        unoptimized: true, // Desactivar optimización de imágenes
    },
    webpack(config) {
        // Configuración para manejar archivos multimedia (videos)
        config.module.rules.push({
            test: /\.(mp4|webm)$/, // Soporte para archivos .mp4 y .webm
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/videos/', // Ruta pública para los videos
                        outputPath: 'static/videos/', // Carpeta de salida en el build
                        name: '[name].[hash].[ext]', // Nombre del archivo con hash
                        esModule: false, // Necesario para compatibilidad con <video>
                    },
                },
            ],
        });
        return config;
    },
};

export default nextConfig;
