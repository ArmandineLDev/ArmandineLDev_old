<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'app')]
    public function index(): Response
    {
        $data = [1,2,3,4];

        return $this->render('app/index.html.twig', [
            'controller_name' => 'AppController',
            'data' => $data,
        ]);
    }
}
