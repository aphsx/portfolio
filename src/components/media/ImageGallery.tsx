"use client";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Columns2, Columns3, Rows3 } from 'lucide-react'
import { SegmentedControl, SegmentedOption } from '@/components/ui'

export type GalleryLayout = 'single' | 'columns-2' | 'columns-3'

export interface GalleryImageItem {
  url: string
  alt?: string
}

interface ImageGalleryProps {
  images: GalleryImageItem[]
  title?: string
  layoutId?: string
  delay?: number
  defaultLayout?: GalleryLayout
  onImageClick: (url: string) => void
  labels?: {
    single: string
    columns2: string
    columns3: string
  }
}

export function ImageGallery({
  images,
  title,
  layoutId = 'galleryLayout',
  delay = 0.1,
  defaultLayout = 'columns-2',
  onImageClick,
  labels = {
    single: '1 photo per row (vertical feed)',
    columns2: '2 columns (masonry)',
    columns3: '3 columns (compact grid)',
  },
}: ImageGalleryProps) {
  const [layout, setLayout] = useState<GalleryLayout>(defaultLayout)
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set())

  const validImages = (images || []).filter((img) => !failedUrls.has(img.url))

  if (validImages.length === 0) return null

  const layoutOptions: SegmentedOption<GalleryLayout>[] = [
    { id: 'single', label: labels.single, icon: Rows3 },
    { id: 'columns-2', label: labels.columns2, icon: Columns2 },
    { id: 'columns-3', label: labels.columns3, icon: Columns3 },
  ]

  const handleImageError = (url: string) => {
    setFailedUrls((prev) => {
      const next = new Set(prev)
      next.add(url)
      return next
    })
  }

  const renderItem = (item: GalleryImageItem, index: number, hover: string) => (
    <button
      key={`${item.url}-${index}`}
      type="button"
      className="group relative block w-full overflow-hidden rounded-lg bg-transparent p-0 border-0 cursor-zoom-in [transform:translateZ(0)]"
      onClick={() => onImageClick(item.url)}
    >
      <img
        src={item.url}
        alt={item.alt || `Photo ${index + 1}`}
        className={`block w-full h-auto transition-transform duration-300 ${hover}`}
        loading="lazy"
        onError={() => handleImageError(item.url)}
      />
    </button>
  )

  // Flex-based masonry (CSS `columns` is buggy in WebKit/iOS with transforms + overflow-hidden)
  const renderMasonry = (columnCount: number, gap: string, hover: string) => {
    const columns: { item: GalleryImageItem; index: number }[][] = Array.from(
      { length: columnCount },
      () => [],
    )
    validImages.forEach((item, index) => columns[index % columnCount].push({ item, index }))

    return (
      <div className={`flex items-start ${gap}`}>
        {columns.map((col, colIndex) => (
          <div key={colIndex} className={`flex min-w-0 flex-1 flex-col ${gap}`}>
            {col.map(({ item, index }) => renderItem(item, index, hover))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="mb-12"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {title && (
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
              {title}
            </h3>
          )}
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            {validImages.length}
          </span>
        </div>

        <SegmentedControl
          size="sm"
          layoutId={layoutId}
          options={layoutOptions}
          value={layout}
          onChange={setLayout}
          ariaLabel="Gallery layout"
        />
      </div>

      {layout === 'single' && (
        <div className="flex flex-col gap-4">
          {validImages.map((item, index) => (
            <button
              key={`${item.url}-${index}`}
              type="button"
              className="group relative block w-full overflow-hidden rounded-xl border border-black/5 bg-gray-100 p-0 cursor-zoom-in dark:border-white/10 dark:bg-gray-800/60"
              onClick={() => onImageClick(item.url)}
            >
              <img
                src={item.url}
                alt={item.alt || `Photo ${index + 1}`}
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
                onError={() => handleImageError(item.url)}
              />
            </button>
          ))}
        </div>
      )}

      {layout === 'columns-2' && renderMasonry(2, 'gap-3', 'group-hover:scale-[1.02]')}

      {layout === 'columns-3' && renderMasonry(3, 'gap-2', 'group-hover:scale-[1.03]')}
    </motion.div>
  )
}
