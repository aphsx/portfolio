"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiExternalLink, HiX } from "react-icons/hi";
import Link from "next/link";
import { CertificateRepository } from "../../../../../data";
import { useTranslation } from "react-i18next";
import { useLocalizedData } from "../../../../../hooks";
import MarkdownRenderer from "../../../../../components/common/MarkdownRenderer";

const CertificateDetail = () => {
  const { certificateId } = useParams();
  const { t } = useTranslation();
  const { getLocalized, language } = useLocalizedData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificate = CertificateRepository.getById(
    (certificateId as string) ?? ""
  );
  const router = useRouter();
  const previewImage = certificate?.image;

  useEffect(() => {
    if (!certificate) {
      router.replace(`/${language}/projects`);
    }
  }, [certificate, router, language]);

  if (!certificate) {
    return null;
  }

  const tags = [...(certificate.tags ?? [])];
  if (certificate.issuedAt && !tags.includes(certificate.issuedAt)) {
    tags.unshift(certificate.issuedAt);
  }

  const aboutContent = certificate.descriptionLong ?? certificate.description;

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: "100px" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            href={`/${language}/projects`}
            className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm"
          >
            <HiArrowLeft size={16} />
            {t("project.back")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {getLocalized(certificate.title)}
          </h1>
          {certificate.description && (
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {getLocalized(certificate.description)}
            </p>
          )}
        </motion.div>

        {previewImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <div
              className="aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800 cursor-zoom-in group relative"
              onClick={() => setSelectedImage(previewImage)}
            >
              <img
                src={previewImage}
                alt={getLocalized(certificate.title)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                  {t("certificate.expand")}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-10"
        >
          {tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t("certificate.tags")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {certificate.issuer && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {t("certificate.issuer")}:{" "}
              </span>
              {getLocalized(certificate.issuer)}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            <motion.a
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors bg-teal-500 hover:bg-teal-600 text-white"
            >
              <HiExternalLink size={16} />
              {t("certificate.viewPdf")}
            </motion.a>
          </div>
        </motion.div>

        {aboutContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
              {t("certificate.about")}
            </h3>
            <MarkdownRenderer content={getLocalized(aboutContent)} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
            {t("certificate.document")}
          </h3>
          <div className="aspect-[3/4] sm:aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
            <iframe
              src={certificate.fileUrl}
              title={getLocalized(certificate.title)}
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110"
              whileHover={{ rotate: 90 }}
              onClick={() => setSelectedImage(null)}
            >
              <HiX size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={getLocalized(certificate.title)}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificateDetail;
