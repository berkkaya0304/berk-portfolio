"use client";

import { useLanguage } from "@/context/LanguageContext";

export const getPrograms = () => {
  const { translations } = useLanguage();
  return translations.program.programs.map((program) => ({
    ...program,
    companyLogo: getCompanyLogo(program.company),
    date: getTranslatedDate(program.title, translations),
    photo: getProgramPhoto(program.title),
    certificate: getProgramCertificate(program.title),
  }));
};

const getCompanyLogo = (company) => {
  const logos = {
    IBM: "/assets/companies/ibm.png",
    "Leader Development Program": "/assets/companies/ligep.png",
    "Lider Geliştirme Programı": "/assets/companies/ligep.png",
    领导力发展计划: "/assets/companies/ligep.png",
    "Programa de Desarrollo de Líderes": "/assets/companies/ligep.png",
    "Programme de Développement des Leaders": "/assets/companies/ligep.png",
    "Führungskräfte-Entwicklungsprogramm": "/assets/companies/ligep.png",
    "Programma di Sviluppo Leader": "/assets/companies/ligep.png",
    リーダー開発プログラム: "/assets/companies/ligep.png",
    Leiderschapsontwikkelingsprogramma: "/assets/companies/ligep.png",
    "Program Rozwoju Liderów": "/assets/companies/ligep.png",
    "Программа развития лидеров": "/assets/companies/ligep.png",
    Huawei: "/assets/companies/huawei.png",
    华为: "/assets/companies/huawei.png",
    "Secretariat of Defence Industries":
      "/assets/companies/savunmasanayibaskanligi.png",
    "Savunma Sanayii Başkanlığı":
      "/assets/companies/savunmasanayibaskanligi.png",
    国防工业秘书处: "/assets/companies/savunmasanayibaskanligi.png",
    "Secretaría de Industrias de Defensa":
      "/assets/companies/savunmasanayibaskanligi.png",
    "Secrétariat des Industries de Défense":
      "/assets/companies/savunmasanayibaskanligi.png",
    "Sekretariat für Verteidigungsindustrie":
      "/assets/companies/savunmasanayibaskanligi.png",
    "Segretariato delle Industrie della Difesa":
      "/assets/companies/savunmasanayibaskanligi.png",
    防衛産業庁: "/assets/companies/savunmasanayibaskanligi.png",
    "Secretariaat van Defensie-industrieën":
      "/assets/companies/savunmasanayibaskanligi.png",
    "Sekretariat Przemysłu Obronnego":
      "/assets/companies/savunmasanayibaskanligi.png",
    "Секретариат оборонной промышленности":
      "/assets/companies/savunmasanayibaskanligi.png",
    Aselsan: "/assets/companies/aselsan.png",
    "McKinsey & Company": "/assets/companies/mckinsey.jpeg",
    麦肯锡公司: "/assets/companies/mckinsey.jpeg",
    "マッキンゼー・アンド・カンパニー": "/assets/companies/mckinsey.jpeg",
    "Amazon Web Services": "/assets/companies/aws.jpg",
    亚马逊网络服务: "/assets/companies/aws.jpg",
    "アマゾン ウェブ サービス": "/assets/companies/aws.jpg",
    "Servicios Web de Amazon": "/assets/companies/aws.jpg",
    "Services Web Amazon": "/assets/companies/aws.jpg",
    "Amazon Webdienste": "/assets/companies/aws.jpg",
    "Servizi Web Amazon": "/assets/companies/aws.jpg",
    "Amazon Webservices": "/assets/companies/aws.jpg",
    "Usługi Internetowe Amazon": "/assets/companies/aws.jpg",
    "Веб-сервисы Amazon": "/assets/companies/aws.jpg",
    "Project Management Institute": "/assets/companies/pmi.jpg",
    项目管理协会: "/assets/companies/pmi.jpg",
    プロジェクトマネジメント協会: "/assets/companies/pmi.jpg",
    "Instituto de Gestión de Proyectos": "/assets/companies/pmi.jpg",
    "Institut de Gestion de Projet": "/assets/companies/pmi.jpg",
    "Projektmanagement-Institut": "/assets/companies/pmi.jpg",
    "Istituto di Project Management": "/assets/companies/pmi.jpg",
    "Projectmanagement Instituut": "/assets/companies/pmi.jpg",
    "Instytut Zarządzania Projektami": "/assets/companies/pmi.jpg",
    "Институт управления проектами": "/assets/companies/pmi.jpg",
    Google: "/assets/companies/google.png",
    谷歌: "/assets/companies/google.png",
    グーグル: "/assets/companies/google.png",
    "Electronic Arts": "/assets/companies/electronicarts.png",
    艺电: "/assets/companies/electronicarts.png",
    "エレクトロニック・アーツ": "/assets/companies/electronicarts.png",
    "Artes Electrónicas": "/assets/companies/electronicarts.png",
    "Arts Électroniques": "/assets/companies/electronicarts.png",
    "Elektronische Künste": "/assets/companies/electronicarts.png",
    "Arti Elettroniche": "/assets/companies/electronicarts.png",
    "Elektronische Kunsten": "/assets/companies/electronicarts.png",
    "Sztuki Elektroniczne": "/assets/companies/electronicarts.png",
    "Электронные искусства": "/assets/companies/electronicarts.png",
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
    "Coding with IBM: CyberStart":
      "https://www.linkedin.com/posts_berkkaya_ibm-cyberstart-kodluyoruz-activity-7254733388786352128-kTEV?utm_source=share&utm_medium=member_desktop",
    "Leader Development Program":
      "https://www.linkedin.com/posts_berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop",
    "Lider Geliştirme Programı":
      "https://www.linkedin.com/posts-berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop",
    "Huawei Coding Marathon'24":
      "https://www.linkedin.com/posts-berkkaya_coding-marathon-software-activity-7251239838203478017-SCI_?utm_source=share&utm_medium=member_desktop",
    "Huawei Kodlama Maratonu'24":
      "https://www.linkedin.com/posts-berkkaya_coding-marathon-software-activity-7251239838203478017-SCI_?utm_source=share&utm_medium=member_desktop",
    "Defence Industry 401":
      "https://www.linkedin.com/posts-berkkaya_defence-industry-activity-7247500647145607168-cqdX?utm_source=share&utm_medium=member_desktop",
    "Savunma Sanayi 401":
      "https://www.linkedin.com/posts-berkkaya_defence-industry-activity-7247500647145607168-cqdX?utm_source=share&utm_medium=member_desktop",
    "Aselsan Work Life 101":
      "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop",
    "Aselsan İş Yaşamı 101":
      "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop",
    "Seeds for the Future Italy'24":
      "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop",
    "Seeds for the Future İtalya'24":
      "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop",
    "Take A Step Forward Program":
      "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop",
    "Take A Step Forward Programı":
      "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop",
    "AWS AI&ML Scholarship":
      "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop",
    "AWS AI&ML Bursu":
      "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop",
    "Certified Associate Project Management (CAPM) Program":
      "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop",
    "Sertifikalı Yardımcı Proje Yönetimi (CAPM) Programı":
      "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop",
    "Game & Technology Academy":
      "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop",
    "Oyun & Teknoloji Akademisi":
      "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop",
    "Software Engineering Virtual Experience Program":
      "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop",
    "Yazılım Mühendisliği Sanal Deneyim Programı":
      "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop",
  };
  return photos[title] || "";
};

const getProgramCertificate = (title) => {
  const certificates = {
    "Coding with IBM: CyberStart": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQH9F5ZKKGLC4g/feedshare-shrink_1280/feedshare-shrink_1280/0/1729624403111?e=1733356800&v=beta&t=ZM-zf0-iquivjYl96TlB42PtVVamRHQQeYOFnwR309A",
      link: "https://www.linkedin.com/posts_berkkaya_ibm-cyberstart-kodluyoruz-activity-7254733388786352128-kTEV?utm_source=share&utm_medium=member_desktop",
    },
    "Leader Development Program": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQGO1Y2AcSgfSA/feedshare-shrink_800/feedshare-shrink_800/0/1729606021102?e=1733356800&v=beta&t=NVYXK2R8hg9wLNoDW-_vJp4BXRPumhNZLdiC2Exin3o",
      link: "https://www.linkedin.com/posts_berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop",
    },
    "Lider Geliştirme Programı": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQGO1Y2AcSgfSA/feedshare-shrink_800/feedshare-shrink_800/0/1729606021102?e=1733356800&v=beta&t=NVYXK2R8hg9wLNoDW-_vJp4BXRPumhNZLdiC2Exin3o",
      link: "https://www.linkedin.com/posts-berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop",
    },
    "Aselsan Work Life 101": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQHVuwDzCV7v9g/feedshare-shrink_800/feedshare-shrink_800/0/1725866820299?e=1733356800&v=beta&t=LkCGD8FSHNgbhX-g6jSqTdAgg70Jj6cDKG2tZ5S3ckI",
      link: "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop",
    },
    "Aselsan İş Yaşamı 101": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQHVuwDzCV7v9g/feedshare-shrink_800/feedshare-shrink_800/0/1725866820299?e=1733356800&v=beta&t=LkCGD8FSHNgbhX-g6jSqTdAgg70Jj6cDKG2tZ5S3ckI",
      link: "https://www.linkedin.com/posts-berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop",
    },
    "Seeds for the Future Italy'24": {
      image:
        "https://i.ibb.co/2q33TgB/temp-image-20240710-084701-e634ac69-1ae9-455c-b16b-97a040ce0825.webp",
      link: "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop",
    },
    "Seeds for the Future İtalya'24": {
      image:
        "https://i.ibb.co/2q33TgB/temp-image-20240710-084701-e634ac69-1ae9-455c-b16b-97a040ce0825.webp",
      link: "https://www.linkedin.com/posts-berkkaya_seedsforfuture-seedsforfuture2024-ai-activity-7216305125865230337-4p-m?utm_source=share&utm_medium=member_desktop",
    },
    "Take A Step Forward Program": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQH3F-f71dVXGQ/feedshare-shrink_800/feedshare-shrink_800/0/1713619492433?e=1733356800&v=beta&t=x3_gwOGjiE-1NGkEfYiZTL3xP2aWWxjIvbZibP22WZ4",
      link: "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop",
    },
    "Take A Step Forward Programı": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQH3F-f71dVXGQ/feedshare-shrink_800/feedshare-shrink_800/0/1713619492433?e=1733356800&v=beta&t=x3_gwOGjiE-1NGkEfYiZTL3xP2aWWxjIvbZibP22WZ4",
      link: "https://www.linkedin.com/posts-berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop",
    },
    "AWS AI&ML Scholarship": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQFFgaS2DnxNqw/feedshare-shrink_800/feedshare-shrink_800/0/1718787912958?e=1733356800&v=beta&t=KEzrZssxWsV6pnB7hw36wWsR5LVrWiNlJFstGUtFCQ0",
      link: "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop",
    },
    "AWS AI&ML Bursu": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQFFgaS2DnxNqw/feedshare-shrink_800/feedshare-shrink_800/0/1718787912958?e=1733356800&v=beta&t=KEzrZssxWsV6pnB7hw36wWsR5LVrWiNlJFstGUtFCQ0",
      link: "https://www.linkedin.com/posts-berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop",
    },
    "Certified Associate Project Management (CAPM) Program": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQFIf5Fdcih42g/feedshare-shrink_800/feedshare-shrink_800/0/1706209574609?e=1733356800&v=beta&t=lETA_GtQDSfnESkEoSH7Jlfy-6eo4MiDo844WdO5x78",
      link: "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop",
    },
    "Sertifikalı Yardımcı Proje Yönetimi (CAPM) Programı": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQFIf5Fdcih42g/feedshare-shrink_800/feedshare-shrink_800/0/1706209574609?e=1733356800&v=beta&t=lETA_GtQDSfnESkEoSH7Jlfy-6eo4MiDo844WdO5x78",
      link: "https://www.linkedin.com/posts-berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop",
    },
    "Game & Technology Academy": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQENTR0YnfJVmw/feedshare-shrink_800/feedshare-shrink_800/0/1692299241965?e=1733356800&v=beta&t=DDmjCorXIk6Hl0xLEFOFoHg7a5A0cUfabHB_HApx74M",
      link: "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop",
    },
    "Oyun & Teknoloji Akademisi": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQENTR0YnfJVmw/feedshare-shrink_800/feedshare-shrink_800/0/1692299241965?e=1733356800&v=beta&t=DDmjCorXIk6Hl0xLEFOFoHg7a5A0cUfabHB_HApx74M",
      link: "https://www.linkedin.com/posts-berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop",
    },
    "Software Engineering Virtual Experience Program": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQGjnZFCSJ7BqA/feedshare-shrink_800/feedshare-shrink_800/0/1688328351775?e=1733356800&v=beta&t=zCYpzYskgmLB0Mo3VaNhNiVl_OMPpwsVieV1l7K_p4s",
      link: "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop",
    },
    "Yazılım Mühendisliği Sanal Deneyim Programı": {
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQGjnZFCSJ7BqA/feedshare-shrink_800/feedshare-shrink_800/0/1688328351775?e=1733356800&v=beta&t=zCYpzYskgmLB0Mo3VaNhNiVl_OMPpwsVieV1l7K_p4s",
      link: "https://www.linkedin.com/posts-berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop",
    },
  };
  return certificates[title] || null;
};
