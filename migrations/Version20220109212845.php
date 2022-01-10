<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220109212845 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE tag_project (tag_id INT NOT NULL, project_id INT NOT NULL, PRIMARY KEY(tag_id, project_id))');
        $this->addSql('CREATE INDEX IDX_1D82FD44BAD26311 ON tag_project (tag_id)');
        $this->addSql('CREATE INDEX IDX_1D82FD44166D1F9C ON tag_project (project_id)');
        $this->addSql('ALTER TABLE tag_project ADD CONSTRAINT FK_1D82FD44BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tag_project ADD CONSTRAINT FK_1D82FD44166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE tag_project');
    }
}
