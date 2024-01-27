import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate21706339695100 implements MigrationInterface {
    name = 'Migrate21706339695100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`firstName\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`familyName\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`dateOfBirth\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`dateOfDeath\``);
        await queryRunner.query(`ALTER TABLE \`book_instance\` DROP COLUMN \`dueBack\``);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`first_name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`family_name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`date_of_birth\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`date_of_death\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` ADD \`due_back\` date NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`genre\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`genre\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` DROP FOREIGN KEY \`FK_cdd368951566cce982e6e7b412f\``);
        await queryRunner.query(`ALTER TABLE \`book_instance\` CHANGE \`book_id\` \`book_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_24b753b0490a992a6941451f405\``);
        await queryRunner.query(`ALTER TABLE \`book\` CHANGE \`author_id\` \`author_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_fa09ea26c5837f4f4160ae55715\``);
        await queryRunner.query(`ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_df2409dcd1dade9038a7d79e653\``);
        await queryRunner.query(`ALTER TABLE \`book_genre\` CHANGE \`book_id\` \`book_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` CHANGE \`genre_id\` \`genre_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` ADD CONSTRAINT \`FK_cdd368951566cce982e6e7b412f\` FOREIGN KEY (\`book_id\`) REFERENCES \`book\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_24b753b0490a992a6941451f405\` FOREIGN KEY (\`author_id\`) REFERENCES \`author\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_fa09ea26c5837f4f4160ae55715\` FOREIGN KEY (\`book_id\`) REFERENCES \`book\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_df2409dcd1dade9038a7d79e653\` FOREIGN KEY (\`genre_id\`) REFERENCES \`genre\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_df2409dcd1dade9038a7d79e653\``);
        await queryRunner.query(`ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_fa09ea26c5837f4f4160ae55715\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_24b753b0490a992a6941451f405\``);
        await queryRunner.query(`ALTER TABLE \`book_instance\` DROP FOREIGN KEY \`FK_cdd368951566cce982e6e7b412f\``);
        await queryRunner.query(`ALTER TABLE \`book_genre\` CHANGE \`genre_id\` \`genre_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` CHANGE \`book_id\` \`book_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_df2409dcd1dade9038a7d79e653\` FOREIGN KEY (\`genre_id\`) REFERENCES \`genre\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_fa09ea26c5837f4f4160ae55715\` FOREIGN KEY (\`book_id\`) REFERENCES \`book\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book\` CHANGE \`author_id\` \`author_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_24b753b0490a992a6941451f405\` FOREIGN KEY (\`author_id\`) REFERENCES \`author\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` CHANGE \`book_id\` \`book_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` ADD CONSTRAINT \`FK_cdd368951566cce982e6e7b412f\` FOREIGN KEY (\`book_id\`) REFERENCES \`book\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book_genre\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`book_genre\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`genre\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`genre\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`book_instance\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`book_instance\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`book_instance\` DROP COLUMN \`due_back\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`date_of_death\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`date_of_birth\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`family_name\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`first_name\``);
        await queryRunner.query(`ALTER TABLE \`book_instance\` ADD \`dueBack\` date NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`dateOfDeath\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`dateOfBirth\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`familyName\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`firstName\` varchar(100) NOT NULL`);
    }

}
