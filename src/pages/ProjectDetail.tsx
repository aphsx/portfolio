import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../data";
import { useLanguage } from '../contexts';
import { useLocalizedData } from '../hooks';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t } = useLanguage();
  const { getLocalized, getLocalizedArray } = useLocalizedData();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" style={{ paddingTop: "100px" }}>
      <div className="max-w-2xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm"
          >
            <HiArrowLeft size={16} />
            {t('project.back')}
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {getLocalized(project.title)}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {getLocalized(project.description)}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <div className="aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <img
              src={project.image}
              alt={getLocalized(project.title)}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-10"
        >
          {/* Tags */}
          {getLocalizedArray(project.tags).length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t('project.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {getLocalizedArray(project.tags).map((tag) => (
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

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              whileHover={{ scale: project.link ? 1.05 : 1 }}
              whileTap={{ scale: project.link ? 0.95 : 1 }}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                project.link
                  ? "bg-teal-500 hover:bg-teal-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (!project.link) e.preventDefault();
              }}
            >
              <HiExternalLink size={16} />
              {project.link ? t('project.visit') : t('project.coming_soon')}
            </motion.a>

            <motion.a
              href={project.github || "#"}
              target={project.github ? "_blank" : "_self"}
              rel={project.github ? "noopener noreferrer" : ""}
              whileHover={{ scale: project.github ? 1.05 : 1 }}
              whileTap={{ scale: project.github ? 0.95 : 1 }}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors border ${
                project.github
                  ? "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed border-gray-400 dark:border-gray-600"
              }`}
              onClick={(e) => {
                if (!project.github) e.preventDefault();
              }}
            >
              <FiGithub size={16} />
              {project.github ? t('project.code') : t('project.private')}
            </motion.a>
          </div>

        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
            {t('project.about')}
          </h3>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {getLocalized(project.descriptionLong || project.description)}
            </p>
          </div>
        </motion.div>

        {/* Additional Images Gallery */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-8">
              {t('project.gallery')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800"
                >
                  <img
                    src={image}
                    alt={`${getLocalized(project.title)} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
