<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 50)]
    private $title;

    #[ORM\Column(type: 'string', length: 255)]
    private $comment;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $image;

    #[ORM\ManyToOne(targetEntity: Member::class, inversedBy: 'projects')]
    #[ORM\JoinColumn(nullable: false)]
    private $member_id;

    #[ORM\ManyToMany(targetEntity: Tag::class, mappedBy: 'project')]
    private $tag;

    public function __construct()
    {
        $this->tag = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getMemberId(): ?Member
    {
        return $this->member_id;
    }

    public function setMemberId(?Member $member_id): self
    {
        $this->member_id = $member_id;

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTag(): Collection
    {
        return $this->tag;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tag->contains($tag)) {
            $this->tag[] = $tag;
            $tag->addProject($this);
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tag->removeElement($tag)) {
            $tag->removeProject($this);
        }

        return $this;
    }
}
