<?php

namespace LouvreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PlatformController extends Controller
{
    public function indexAction()
    {
        return $this->render('LouvreBundle:Platform:index.html.twig');
    }
}
