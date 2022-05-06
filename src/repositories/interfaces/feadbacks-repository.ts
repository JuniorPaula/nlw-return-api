export interface FeadbacksRepositoryDTO {
  type: string
  comment: string
  screenshot?: string
}

export interface FeadbacksRepository {
  create: (data: FeadbacksRepositoryDTO) => Promise<void>
}
