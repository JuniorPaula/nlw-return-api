import { prisma } from '../../prisma'
import {
  FeadbacksRepository,
  FeadbacksRepositoryDTO
} from '../interfaces/feadbacks-repository'

export class PrismaFeadbackRepository implements FeadbacksRepository {
  async create ({ type, comment, screenshot }: FeadbacksRepositoryDTO): Promise<void> {
    await prisma.feadback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
