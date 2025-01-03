'use client';

import { useLanguage } from "@/context/LanguageContext";

export const getPrograms = () => {
  const { translations } = useLanguage();
  return translations.program.programs.map(program => ({
    ...program,
    companyLogo: getCompanyLogo(program.company),
    date: getTranslatedDate(program.title, translations),
    photo: getProgramPhoto(program.title),
    certificate: getProgramCertificate(program.title)
  }));
};

const getCompanyLogo = (company) => {
  const logos = {
    "IBM": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    "Leader Development Program": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Lider Geliştirme Programı": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "领导力发展计划": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Programa de Desarrollo de Líderes": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Programme de Développement des Leaders": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Führungskräfte-Entwicklungsprogramm": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Programma di Sviluppo Leader": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "リーダー開発プログラム": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Leiderschapsontwikkelingsprogramma": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Program Rozwoju Liderów": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Программа развития лидеров": "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    "Huawei": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png",
    "华为": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png",
    "Secretariat of Defence Industries": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Savunma Sanayii Başkanlığı": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "国防工业秘书处": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Secretaría de Industrias de Defensa": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Secrétariat des Industries de Défense": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Sekretariat für Verteidigungsindustrie": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Segretariato delle Industrie della Difesa": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "防衛産業庁": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Secretariaat van Defensie-industrieën": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Sekretariat Przemysłu Obronnego": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Секретариат оборонной промышленности": "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    "Aselsan": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/ASELSAN_logo.svg/1200px-ASELSAN_logo.svg.png",
    "McKinsey & Company": "https://download.logo.wine/logo/McKinsey_%26_Company/McKinsey_%26_Company-Logo.wine.png",
    "麦肯锡公司": "https://download.logo.wine/logo/McKinsey_%26_Company/McKinsey_%26_Company-Logo.wine.png",
    "マッキンゼー・アンド・カンパニー": "https://download.logo.wine/logo/McKinsey_%26_Company/McKinsey_%26_Company-Logo.wine.png",
    "Amazon Web Services": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "亚马逊网络服务": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "アマゾン ウェブ サービス": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Servicios Web de Amazon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Services Web Amazon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Amazon Webdienste": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Servizi Web Amazon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Amazon Webservices": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Usługi Internetowe Amazon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Веб-сервисы Amazon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    "Project Management Institute": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "项目管理协会": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "プロジェクトマネジメント協会": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Instituto de Gestión de Proyectos": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Institut de Gestion de Projet": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Projektmanagement-Institut": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Istituto di Project Management": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Projectmanagement Instituut": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Instytut Zarządzania Projektami": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Институт управления проектами": "https://www.cdnlogo.com/logos/p/5/project-management-institute.svg",
    "Google": "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    "谷歌": "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    "グーグル": "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    "Electronic Arts": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "艺电": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "エレクトロニック・アーツ": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "Artes Electrónicas": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "Arts Électroniques": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "Elektronische Künste": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "Arti Elettroniche": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "Elektronische Kunsten": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "Sztuki Elektroniczne": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    "Электронные искусства": "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o"
  };
  return logos[company] || "";
};

const getTranslatedDate = (title, translations) => {
  const dates = {
    "Coding with IBM: CyberStart": `${translations.dates.months.august} 2024 - ${translations.dates.months.september} 2024`,
    "Leader Development Program": `${translations.dates.months.september} 2023 - ${translations.dates.months.october} 2024`,
    "Lider Geliştirme Programı": `${translations.dates.months.september} 2023 - ${translations.dates.months.october} 2024`,
    "Huawei Coding Marathon'24": `${translations.dates.months.september} 2024`,
    "Huawei Kodlama Maratonu'24": `${translations.dates.months.september} 2024`,
    "Defence Industry 401": `${translations.dates.months.september} 2024`,
    "Savunma Sanayi 401": `${translations.dates.months.september} 2024`,
    "Aselsan Work Life 101": `${translations.dates.months.march} 2024 - ${translations.dates.months.june} 2024`,
    "Aselsan İş Yaşamı 101": `${translations.dates.months.march} 2024 - ${translations.dates.months.june} 2024`,
    "Seeds for the Future Italy'24": `${translations.dates.months.august} 2024`,
    "Seeds for the Future İtalya'24": `${translations.dates.months.august} 2024`,
    "Take A Step Forward Program": `${translations.dates.months.november} 2023 - ${translations.dates.months.april} 2024`,
    "Take A Step Forward Programı": `${translations.dates.months.november} 2023 - ${translations.dates.months.april} 2024`,
    "AWS AI&ML Scholarship": `${translations.dates.months.june} 2024 - ${translations.dates.months.august} 2024`,
    "AWS AI&ML Bursu": `${translations.dates.months.june} 2024 - ${translations.dates.months.august} 2024`,
    "Certified Associate Project Management (CAPM) Program": `${translations.dates.months.december} 2023`,
    "Sertifikalı Yardımcı Proje Yönetimi (CAPM) Programı": `${translations.dates.months.december} 2023`,
    "Game & Technology Academy": `${translations.dates.months.december} 2022 - ${translations.dates.months.july} 2023`,
    "Oyun & Teknoloji Akademisi": `${translations.dates.months.december} 2022 - ${translations.dates.months.july} 2023`,
    "Software Engineering Virtual Experience Program": `${translations.dates.months.july} 2023`,
    "Yazılım Mühendisliği Sanal Deneyim Programı": `${translations.dates.months.july} 2023`,
  };
  return dates[title] || "";
};

const getProgramPhoto = (title) => {
  const photos = {
    "Coding with IBM: CyberStart": "https://www.linkedin.com/posts_berkkaya_ibm-cyberstart-kodluyoruz-activity-7254733388786352128-kTEV?utm_source=share&utm_medium=member_desktop",
    "Leader Development Program": "https://www.linkedin.com/posts_berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop",
    "Lider Geliştirme Programı": "https://www.linkedin.com/posts-berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop",
    "Huawei Coding Marathon'24": "https://www.linkedin.com/posts-berkkaya_coding-marathon-software-activity-7251239838203478017-SCI_?utm_source=share&utm_medium=member_desktop",
    "Huawei Kodlama Maratonu'24": "https://www.linkedin.com/posts-berkkaya_coding-marathon-software-activity-7251239838203478017-SCI_?utm_source=share&utm_medium=member_desktop",
    "Defence Industry 401": "https://www.linkedin.com/posts-berkkaya_defence-industry-activity-7247500647145607168-cqdX?utm_source=share&utm_medium=member_desktop",
    "Savunma Sanayi 401": "https://www.linkedin.com/posts-berkkaya_defence-industry-activity-7247500647145607168-cqdX?utm_source=share&utm_medium=member_desktop",
    "Aselsan Work Life 101": "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop",
    "Aselsan İş Yaşamı 101": "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop",
    "Seeds for the Future Italy'24": "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop",
    "Seeds for the Future İtalya'24": "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop",
    "Take A Step Forward Program": "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop",
    "Take A Step Forward Programı": "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop",
    "AWS AI&ML Scholarship": "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop",
    "AWS AI&ML Bursu": "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop",
    "Certified Associate Project Management (CAPM) Program": "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop",
    "Sertifikalı Yardımcı Proje Yönetimi (CAPM) Programı": "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop",
    "Game & Technology Academy": "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop",
    "Oyun & Teknoloji Akademisi": "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop",
    "Software Engineering Virtual Experience Program": "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop",
    "Yazılım Mühendisliği Sanal Deneyim Programı": "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop"
  };
  return photos[title] || "";
};

const getProgramCertificate = (title) => {
  const certificates = {
    "Coding with IBM: CyberStart": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQH9F5ZKKGLC4g/feedshare-shrink_1280/feedshare-shrink_1280/0/1729624403111?e=1733356800&v=beta&t=ZM-zf0-iquivjYl96TlB42PtVVamRHQQeYOFnwR309A",
      link: "https://www.linkedin.com/posts_berkkaya_ibm-cyberstart-kodluyoruz-activity-7254733388786352128-kTEV?utm_source=share&utm_medium=member_desktop"
    },
    "Leader Development Program": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQGO1Y2AcSgfSA/feedshare-shrink_800/feedshare-shrink_800/0/1729606021102?e=1733356800&v=beta&t=NVYXK2R8hg9wLNoDW-_vJp4BXRPumhNZLdiC2Exin3o",
      link: "https://www.linkedin.com/posts_berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop"
    },
    "Lider Geliştirme Programı": {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGO1Y2AcSgfSA/feedshare-shrink_800/feedshare-shrink_800/0/1729606021102?e=1733356800&v=beta&t=NVYXK2R8hg9wLNoDW-_vJp4BXRPumhNZLdiC2Exin3o",
      link: "https://www.linkedin.com/posts-berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop"
    },
    "Aselsan Work Life 101": {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQHVuwDzCV7v9g/feedshare-shrink_800/feedshare-shrink_800/0/1725866820299?e=1733356800&v=beta&t=LkCGD8FSHNgbhX-g6jSqTdAgg70Jj6cDKG2tZ5S3ckI",
      link: "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop"
    },
    "Aselsan İş Yaşamı 101": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQHVuwDzCV7v9g/feedshare-shrink_800/feedshare-shrink_800/0/1725866820299?e=1733356800&v=beta&t=LkCGD8FSHNgbhX-g6jSqTdAgg70Jj6cDKG2tZ5S3ckI",
      link: "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop"
    },
    "Seeds for the Future Italy'24": {
      image: "https://i.ibb.co/2q33TgB/temp-image-20240710-084701-e634ac69-1ae9-455c-b16b-97a040ce0825.webp",
      link: "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop"
    },
    "Seeds for the Future İtalya'24": {
          image: "https://i.ibb.co/2q33TgB/temp-image-20240710-084701-e634ac69-1ae9-455c-b16b-97a040ce0825.webp",
      link: "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop"
    },
    "Take A Step Forward Program": {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH3F-f71dVXGQ/feedshare-shrink_800/feedshare-shrink_800/0/1713619492433?e=1733356800&v=beta&t=x3_gwOGjiE-1NGkEfYiZTL3xP2aWWxjIvbZibP22WZ4",
      link: "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop"
    },
    "Take A Step Forward Programı": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQH3F-f71dVXGQ/feedshare-shrink_800/feedshare-shrink_800/0/1713619492433?e=1733356800&v=beta&t=x3_gwOGjiE-1NGkEfYiZTL3xP2aWWxjIvbZibP22WZ4",
      link: "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop"
    },
    "AWS AI&ML Scholarship": {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQFFgaS2DnxNqw/feedshare-shrink_800/feedshare-shrink_800/0/1718787912958?e=1733356800&v=beta&t=KEzrZssxWsV6pnB7hw36wWsR5LVrWiNlJFstGUtFCQ0",
      link: "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop"
    },
    "AWS AI&ML Bursu": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQFFgaS2DnxNqw/feedshare-shrink_800/feedshare-shrink_800/0/1718787912958?e=1733356800&v=beta&t=KEzrZssxWsV6pnB7hw36wWsR5LVrWiNlJFstGUtFCQ0",
      link: "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop"
    },
    "Certified Associate Project Management (CAPM) Program": {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQFIf5Fdcih42g/feedshare-shrink_800/feedshare-shrink_800/0/1706209574609?e=1733356800&v=beta&t=lETA_GtQDSfnESkEoSH7Jlfy-6eo4MiDo844WdO5x78",
      link: "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop"
    },
    "Sertifikalı Yardımcı Proje Yönetimi (CAPM) Programı": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQFIf5Fdcih42g/feedshare-shrink_800/feedshare-shrink_800/0/1706209574609?e=1733356800&v=beta&t=lETA_GtQDSfnESkEoSH7Jlfy-6eo4MiDo844WdO5x78",
      link: "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop"
    },
    "Game & Technology Academy": {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQENTR0YnfJVmw/feedshare-shrink_800/feedshare-shrink_800/0/1692299241965?e=1733356800&v=beta&t=DDmjCorXIk6Hl0xLEFOFoHg7a5A0cUfabHB_HApx74M",
      link: "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop"
    },
    "Oyun & Teknoloji Akademisi": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQENTR0YnfJVmw/feedshare-shrink_800/feedshare-shrink_800/0/1692299241965?e=1733356800&v=beta&t=DDmjCorXIk6Hl0xLEFOFoHg7a5A0cUfabHB_HApx74M",
      link: "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop"
    },
    "Software Engineering Virtual Experience Program": {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGjnZFCSJ7BqA/feedshare-shrink_800/feedshare-shrink_800/0/1688328351775?e=1733356800&v=beta&t=zCYpzYskgmLB0Mo3VaNhNiVl_OMPpwsVieV1l7K_p4s",
      link: "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop"
    },
    "Yazılım Mühendisliği Sanal Deneyim Programı": {
          image: "https://media.licdn.com/dms/image/v2/D4D22AQGjnZFCSJ7BqA/feedshare-shrink_800/feedshare-shrink_800/0/1688328351775?e=1733356800&v=beta&t=zCYpzYskgmLB0Mo3VaNhNiVl_OMPpwsVieV1l7K_p4s",
      link: "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop"
        }
  };
  return certificates[title] || null;
}; 