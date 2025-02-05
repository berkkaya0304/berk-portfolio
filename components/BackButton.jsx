"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IoArrowBack } from "react-icons/io5";
import { useLanguage } from "@/context/LanguageContext";

const BackButton = () => {
  const router = useRouter();
  const { translations } = useLanguage();

  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      size="sm"
      className="group absolute top-4 left-4 flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
    >
      <IoArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      <span>{translations.common.back}</span>
    </Button>
  );
};

export default BackButton;
