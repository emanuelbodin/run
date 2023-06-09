import { isUserAdmin } from '@/server/auth'
import { prisma } from '@/server/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const competitors = await prisma.competitor.findMany()
  return NextResponse.json({ data: competitors })
}

export async function POST(request: Request) {
  const isAdmin = await isUserAdmin()
  if (!isAdmin) return new NextResponse('Unauthenticated', { status: 401 })
  const data = await request.json()
  const { name } = data as { name: string }
  const newCompetitor = await prisma.competitor.create({ data: { name } })
  return NextResponse.json({ data: newCompetitor })
}
