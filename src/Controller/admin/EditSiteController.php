<?php

namespace App\Controller\admin;

use App\Entity\Chiffres;
use App\Entity\Footer;
use App\Form\FooterType;
use App\Repository\FooterRepository;
use App\Form\ChiffresType;
use App\Form\EmotionType;
use App\Repository\ChiffresRepository;
use App\Repository\EmotionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/editsite')]
class EditSiteController extends AbstractController
{
    #[Route('/Homepage', name: 'admin_homepage_index', methods: ['GET', 'POST'])]
    public function indexHomepage(Request $request, ChiffresRepository $chiffre, FooterRepository $footerRepository, EmotionRepository $emotionRepository): Response
    {
        $form = $this->createForm(ChiffresType::class, $chiffre->find(1));
        $form->handleRequest($request);
        $formFooter = $this->createForm(FooterType::class, $footerRepository->find(1));
        $formFooter->handleRequest($request);
        $formEmotion = $this->createForm(EmotionType::class, $emotionRepository->find(1));
        $formEmotion->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $chiffre->add($chiffre->find(1), true);

            return $this->redirectToRoute('admin_homepage_index', [], Response::HTTP_SEE_OTHER);
        }

        if ($formFooter->isSubmitted() && $formFooter->isValid()) {
            $footerRepository->add($footerRepository->find(1), true);

            return $this->redirectToRoute('admin_homepage_index', [], Response::HTTP_SEE_OTHER);
        }

        if ($formEmotion->isSubmitted() && $formEmotion->isValid()) {
            $emotionRepository->add($emotionRepository->find(1), true);

            return $this->redirectToRoute('admin_homepage_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/editSite/homePage.html.twig', [
            'form' => $form,
            'formFooter' => $formFooter,
            'formEmotion' => $formEmotion,
        ]);

    }

    #[Route('/chiffres', name: 'admin_chiffres_index', methods: ['GET', 'POST'])]
    public function indexChiffre(Request $request, ChiffresRepository $chiffre): Response
    {
        $form = $this->createForm(ChiffresType::class, $chiffre->find(1));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $chiffre->add($chiffre->find(1), true);

            return $this->redirectToRoute('admin_chiffres_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/editSite/chiffres/edit.html.twig', [
            'form' => $form,
        ]);

    }


    #[Route('/footer', name: 'admin_footer_index', methods: ['GET', 'POST'])]
    public function indexFooter(Request $request, FooterRepository $footerRepository): Response
    {
        $form = $this->createForm(FooterType::class, $footerRepository->find(1));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $footerRepository->add($footerRepository->find(1), true);

            return $this->redirectToRoute('admin_footer_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/editSite/footer/edit.html.twig', [
            'form' => $form,
        ]);
    }

}