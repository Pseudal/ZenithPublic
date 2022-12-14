<?php

namespace App\Repository;

use App\Entity\Client;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Client>
 *
 * @method Client|null find($id, $lockMode = null, $lockVersion = null)
 * @method Client|null findOneBy(array $criteria, array $orderBy = null)
 * @method Client[]    findAll()
 * @method Client[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Client::class);
    }

    public function add(Client $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Client $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Client[] Returns an array of Client objects
//     */
    public function findByExampleField($value): array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.client = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findOneBySomeField($value): ?Client
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function findOneArray($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getArrayResult()
        ;
    }
    public function findOneArraySatisfaction($value)
    {
        return $this->createQueryBuilder('c')
            ->select("c.id", "c.logo")
            ->andWhere('c.id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getArrayResult()
        ;
    }

    public function getAllArray()
    {
        return $this->createQueryBuilder('c')
        ->orderBy('c.id', 'DESC')
        //    ->setMaxResults(10)
        ->getQuery()
        ->getArrayResult();
        ;
    }

    public function getCount()
    {
        return $this->createQueryBuilder('c')
        ->select('count(c.id)')
        ->getQuery()
        ->getSingleScalarResult();
        ;
    }

    public function findByExampleFieldArray($value): array
    {
        return $this->createQueryBuilder('c')
            ->select("c.id", "c.nomClient", "c.mission")
            ->andWhere('c.id  = :val')
            ->setParameter('val', $value)
        //    ->setMaxResults(10)
            ->getQuery()
            ->getArrayResult();
        ;
    }

    public function getAll()
    {
        return $this->createQueryBuilder('c')
         ->getQuery()
         ->getArrayResult();
    }

    public function getSearch($value): array
    {
        return $this->createQueryBuilder('c')
            ->select("c.id", "c.nomClient", "c.mission")
            ->andWhere('c.nomClient LIKE :val OR c.mission LIKE :val')
            ->setParameter('val', '%'.$value.'%')
        //    ->setMaxResults(10)
            ->getQuery()
            ->getArrayResult();
        ;
    }
    
    public function getAllPagination($value)
    {
        return $this->createQueryBuilder('c')
         ->orderBy('c.id', 'DESC')
         ->getQuery()
         ->setFirstResult(($value-1)*20)
         ->setMaxResults(20)
         ->getArrayResult();
    }

    // public function getRandom()
    // {
    //     return $this->createQueryBuilder('c')
    //         ->createQuery("SELECT q FROM App\Entity\Question q ORDER BY RAND()")
    //     //  ->orderBy('rand()')
    //     //  ->andWhere('c.logo != :null')->setParameter('null', serialize(null)) //not null
    //     //  ->andWhere('c.logo != :empty')->setParameter('empty', serialize([])) //not empty
    //      ->getQuery()
    //      ->setMaxResults(10)
    //      ->getResult();
    // }
    public function getAllId()
    {
        return $this->createQueryBuilder('c')
            ->select("c.id")
            ->andWhere('c.logo != :null')->setParameter('null', serialize(null)) //not null
            ->andWhere('c.logo != :empty')->setParameter('empty', serialize([])) //not empty
        //    ->setMaxResults(10)
            ->getQuery()
            ->getArrayResult();
        ;
    }
}