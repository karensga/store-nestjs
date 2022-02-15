import {MigrationInterface, QueryRunner} from "typeorm";

export class addFields1644903237403 implements MigrationInterface {
    name = 'addFields1644903237403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createAt"`);
    }

}
