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
        domains: [
            'upload.wikimedia.org',
            'www.lidergelisim.com',
            'cdn.sahaexpo.com',
            'encrypted-tbn0.gstatic.com',
            'www.huawei-university.com',
            'cdn.cookielaw.org',
            'iakademi.com',
            'media.licdn.com',
            'i.ibb.co'
        ],
    },
};

export default nextConfig;
