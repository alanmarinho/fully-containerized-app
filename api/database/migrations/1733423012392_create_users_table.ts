import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'users';

  async up() {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id');

      table.string('email').notNullable().unique();
      table.string('name').notNullable();
      table.string('password').notNullable();

      table.dateTime('created_at');
      table.dateTime('updated_at');
    });
  }

  async down() {
    this.schema.dropTableIfExists(this.tableName);
  }
}
