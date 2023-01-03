<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EmotionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation\Uploadable;

#[ORM\Entity(repositoryClass: EmotionRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['emotion']],
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
class Emotion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups("emotion")]
    private ?string $Video = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVideo(): ?string
    {
        return $this->Video;
    }

    public function setVideo(string $Video): self
    {
        $this->Video = $Video;

        return $this;
    }
}
