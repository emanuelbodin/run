import { isUserAdmin } from '@/server/auth'
import { prisma } from '@/server/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const isAdmin = await isUserAdmin()
  if (!isAdmin) return new NextResponse('Unauthenticated', { status: 401 })
  const data = await request.json()

  const { points, timeMin, timeSec, competitionId, competitorId } = data as {
    points: number
    timeMin: number
    timeSec: number
    competitionId: string
    competitorId: string
  }
  const newResult = await prisma.result.create({
    data: { points, timeMin, timeSec, competitionId, competitorId },
  })
  return NextResponse.json({ data: newResult })
}
