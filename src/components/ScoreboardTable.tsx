import Card from '@/components/ui/Card'
import TableHeading from '@/components/TableHeading'
import ScoreBoardRow from './ScoreboardRow'
import { ScoreboardRow as TScoreboardRow } from '@/types/results'
interface Props {
  title: string
  data: TScoreboardRow[]
}

export default function ScoreboardTable({ title, data }: Props) {
  const headings = ['#', 'name', '# of competitions', 'points']
  return (
    <Card title={title}>
      <table className="w-full text-sm text-left text-gray-400">
        <TableHeading headings={headings} />
        <tbody>
          {!data.length && (
            <tr className="text-center">
              <td colSpan={4}>No data</td>
            </tr>
          )}
          {data.map((item, index) => (
            <ScoreBoardRow key={item.competitorName + index} placement={index + 1} data={item} />
          ))}
        </tbody>
      </table>
    </Card>
  )
}
