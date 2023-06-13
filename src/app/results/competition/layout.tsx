import CompetitonSelector from './CompetitonSelector'
import { getCompetitionCategories } from '../result-utils'

export default async function CompetitionPageLayout({ children }: { children: React.ReactNode }) {
  const categories = await getCompetitionCategories()
  return (
    <div>
      <CompetitonSelector categories={categories} />
      {children}
    </div>
  )
}
