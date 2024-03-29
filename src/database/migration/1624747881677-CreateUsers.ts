import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "Telefono",
                        type: "varchar"
                    },
                    {
                        name: "Ciudad",
                        type: "varchar"
                    },
                    {
                        name: "estado",
                        type: "varchar",
                        length: "2"
                    },
                    {
                        name: "Rol",
                        type: "varchar",
                        
                    },
                    {
                        name: 'Password',
                        type: 'varchar'
                    },
                    {
                        name: 'fecha',
                        type: "date"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
