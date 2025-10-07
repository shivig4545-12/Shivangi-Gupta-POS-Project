import type { ActivityType } from '@/types/data'

export const getFileExtensionIcon = (fileName: string) => {
  const extension = fileName.split('.').pop()
  if (extension === 'fig') return 'bxl:figma'
  else if (extension === 'docs') return 'iconamoon:file-light'
  else if (extension === 'zip') return 'bxs:file-archive'
  else if (extension === 'pdf') return 'bxs:file-pdf'
  else if (extension === 'jpg') return 'bx-images'
  else if (extension === 'png') return 'bx-images'
  else if (extension === 'jpeg') return 'bx-images'
  else return 'bxs:file'
}

export const getActivityIcon = (type: ActivityType['type']) => {
  if (type === 'tasks') return 'iconamoon:folder-check-duotone'
  else if (type === 'design') return 'iconamoon:check-circle-1-duotone'
  else return 'iconamoon:certificate-badge-duotone'
}
