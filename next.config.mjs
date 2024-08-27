/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i.hizliresim.com',
              port: '',  // Eğer özel bir port kullanıyorsanız burayı belirleyin, yoksa boş bırakabilirsiniz
              pathname: '/**',  // Bu, tüm yolları kapsar. Belirli bir yol veya desen tanımlamak istiyorsanız burayı düzenleyin
            },
          ],
    },
};

export default nextConfig;
