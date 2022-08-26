<?php

namespace App\Controller\admin;

use App\Entity\Footer;
use App\Form\FooterType;
use App\Repository\FooterRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/footer')]
class FooterController extends AbstractController
{
    #[Route('/', name: 'admin_footer_index', methods: ['GET', 'POST'])]
    public function index(Request $request, FooterRepository $footerRepository): Response
    {
        $form = $this->createForm(FooterType::class, $footerRepository->find(1));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $footerRepository->add($footerRepository->find(1), true);

            return $this->redirectToRoute('admin_footer_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/editSite/footer/edit.html.twig', [
            'footer' => $footerRepository->find(1),
            'form' => $form,
        ]);
    }


}
