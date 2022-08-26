<?php

namespace App\Controller\admin;

use App\Entity\Chiffres;
use App\Form\ChiffresType;
use App\Repository\ChiffresRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/chiffres')]
class ChiffresController extends AbstractController
{
    #[Route('/', name: 'admin_chiffres_index', methods: ['GET', 'POST'])]
    public function index(Request $request, ChiffresRepository $footerRepository): Response
    {
        $form = $this->createForm(ChiffresType::class, $footerRepository->find(1));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $footerRepository->add($footerRepository->find(1), true);

            return $this->redirectToRoute('admin_chiffres_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/editSite/chiffres/edit.html.twig', [
            'footer' => $footerRepository->find(1),
            'form' => $form,
        ]);
    }


}