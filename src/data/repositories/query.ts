import { BannerOptions, BaseEntity } from '@/types'

// ---------------------------------------------------------------------------
// Shared query helpers for repositories.
// DB equivalent: WHERE is_active = true ORDER BY "order" ASC
// ---------------------------------------------------------------------------

export const byOrder = (a: BaseEntity, b: BaseEntity) => (a.order ?? 0) - (b.order ?? 0)

/** Active items only, sorted by `order` (or a custom comparator). */
export const activeSorted = <T extends BaseEntity>(
  items: readonly T[],
  compare: (a: T, b: T) => number = byOrder,
): T[] => items.filter((item) => item.isActive).sort(compare)

/** First active item matching the predicate. */
export const findActive = <T extends BaseEntity>(
  items: readonly T[],
  predicate: (item: T) => boolean,
): T | undefined => items.find((item) => item.isActive && predicate(item))

/**
 * Picks banner candidates: drops `banner.hidden`, moves `banner.pinned` first
 * (stable — original order is kept within each group), then caps at `max`.
 */
export const pickBannerItems = <T extends { banner?: BannerOptions }>(
  items: readonly T[],
  max: number,
): T[] =>
  items
    .filter((item) => !item.banner?.hidden)
    .sort((a, b) => Number(!!b.banner?.pinned) - Number(!!a.banner?.pinned))
    .slice(0, max)
