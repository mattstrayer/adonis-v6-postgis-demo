import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class T extends BaseCommand {
  static commandName = 'postgis:test'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const res = db.st().geomFromText('Point(0 0)')
    this.logger.info(res)
  }
}
