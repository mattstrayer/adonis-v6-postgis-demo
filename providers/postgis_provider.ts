import type { ApplicationService } from '@adonisjs/core/types'

export default class PostgisProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * The container bindings have booted
   */
  async boot() {
    await import('../extensions/postgis.js')
  }
}
