<?php

namespace App\Controller\public;

use App\Entity\Projet;
use App\Entity\Client;
use App\Entity\Categorie;
use App\Repository\ClientRepository;
use App\Repository\ProjetRepository;
use App\Repository\CategorieRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ClientImageRepository;
use App\Repository\ProjetImageRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mime\Email;
use Doctrine\Persistence\ManagerRegistry;

class PublicAjaxController extends AbstractController
{
    #[Route('/getSatisfaction', name: 'getSatisfaction', methods: ['GET'])]
    public function getSatisfaction(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session, ManagerRegistry $doctrine): Response
    {
        try {
            $next = [];
            $next2 = [];
            $allId = $client->getAllId();
            $shuffled_array = array();

            $arrayLenght = count($allId)-1;
            for ($i=$arrayLenght; $i > $arrayLenght -10; $i--) { 
                    if($i < 0){
                        continue;
                    };
                $item = $client->findOneArray($allId[$i]["id"]);
                array_push($next, $item[0]);
                
                unset($allId[$i]);
            };

            $keys = array_keys($allId);
            shuffle($keys);
            foreach ($keys as $key)
            {
                $shuffled_array[$key] = $allId[$key];
            };
            $arrayLenght = count($shuffled_array)-1;
            //dd($shuffled_array);
            
            for ($i=$arrayLenght; $i > $arrayLenght -20; $i--) { 
                if($i < 0){
                    continue;
                };
            $item = $client->findOneArray($shuffled_array[$i]["id"]);
            $next2 += $item;
            unset($shuffled_array[$i]);
        };
            dd($next2);
            $i = 0;
            foreach($next as $n){

                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
            }

        } catch (\Throwable $th) {
            dd($th);
            return new JsonResponse($th);
        }
        return new JsonResponse($next);      
    }

    #[Route('/gettAllProjectByClient/{id}', name: 'gettAllProjectByClient', methods: ['GET'])]
    public function gettAllProjectByClient(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $id = $request->get('id');
        try {
            $next = $client->findByClientArray($id);
            $i = 0;
            foreach($next as $n){

                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
            }

        } catch (\Throwable $th) {
            dd($th);
            return new JsonResponse($th);
        }
        return new JsonResponse($next);    
    }

    #[Route('/gettAllProject/{id}', name: 'gettAllProject', methods: ['GET'])]
    public function gettAllProject(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $id = $request->get('id');
        try {
            $next = $client->getAllPagination($id);
            $i = 0;
            foreach($next as $n){

                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
            }

        } catch (\Throwable $th) {
            dd($th);
            return new JsonResponse($th);
        }
        return new JsonResponse($next);    
    }

    #[Route('/getCount/{target}', name: 'getCount', methods: ['GET'])]
    public function getCount(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $projet, ClientRepository $client,Session $session): Response
    {
        $target = $request->get('target');
        $count = 0;
        try {
            if($target == "projet"){
                $count = $projet->getCount();
            }
            if($target == "client"){
                $count = $client->getCount();
            }

        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($count);    
    }

    #[Route('/gettAllCreation', name: 'gettAllCreation', methods: ['GET'])]
    public function gettAllCreation(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $Crea = [];
        try {
            $next = $client->getAll();
            foreach($next as $n){
                if(count($Crea) >= 20){
                    break;
                }
                $getHeader = $clientImageRepository->checkCreation($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['creation'] = $getHeader->getImage();
                    array_push($Crea, $n);
                    
                } else { 
                    continue;
                }  
            }

        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($Crea);    
    }

    #[Route('/sendemail', name: 'sendEmail', methods: ['GET', 'POST'])]
    public function sendEmail(Request $request,Session $session): Response
    {
        $r = json_decode($request->getContent(), true);
        $filesystem = new Filesystem();
        try {
            $transport = Transport::fromDsn('smtp://adrien.g@gmx.fr:<E[s~4sxP&<MTnT*r-77@mail.gmx.com:587?verify_peer=0');
            $mailer = new Mailer($transport);
            $email = (new Email())
                ->Sender("adrien.g@gmx.fr")
                ->to($r['email'])
                //->cc('cc@example.com')
                //->bcc('bcc@example.com')
                //->replyTo('fabien@example.com')
                //->priority(Email::PRIORITY_HIGH)
                ->subject('Zenith - confirmation')
                ->text('Merci pour votre message!')
                ->html('<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

                <head>
                    <title></title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                    <style>
                        * {
                            box-sizing: border-box;
                        }
                
                        body {
                            margin: 0;
                            padding: 0;
                        }
                
                        a[x-apple-data-detectors] {
                            color: inherit !important;
                            text-decoration: inherit !important;
                        }
                
                        #MessageViewBody a {
                            color: inherit;
                            text-decoration: none;
                        }
                
                        p {
                            line-height: inherit
                        }
                
                        .desktop_hide,
                        .desktop_hide table {
                            mso-hide: all;
                            display: none;
                            max-height: 0px;
                            overflow: hidden;
                        }
                
                        @media (max-width:620px) {
                            .desktop_hide table.icons-inner {
                                display: inline-block !important;
                            }
                
                            .icons-inner {
                                text-align: center;
                            }
                
                            .icons-inner td {
                                margin: 0 auto;
                            }
                
                            .fullMobileWidth,
                            .row-content {
                                width: 100% !important;
                            }
                
                            .mobile_hide {
                                display: none;
                            }
                
                            .stack .column {
                                width: 100%;
                                display: block;
                            }
                
                            .mobile_hide {
                                min-height: 0;
                                max-height: 0;
                                max-width: 0;
                                overflow: hidden;
                                font-size: 0px;
                            }
                
                            .desktop_hide,
                            .desktop_hide table {
                                display: table !important;
                                max-height: none !important;
                            }
                        }
                    </style>
                </head>
                
                <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
                        <tbody>
                            <tr>
                                <td>
                                    <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 600px;" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="image_block block-1" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="pad">
                                                                                <div class="alignment" align="center" style="line-height:10px"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-fqyjmp8ylxl/bIO1r9F.png" style="display: block; height: auto; border: 0; width: 120px; max-width: 100%;" width="120"></div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                                <div class="alignment" align="center" style="line-height:10px"><img class="fullMobileWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4011/top-rounded.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" width="600"></div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top; color: #000000; width: 600px;" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="pad" style="padding-bottom:5px;padding-left:20px;padding-right:20px;padding-top:5px;width:100%;">
                                                                                <div class="alignment" align="center" style="line-height:10px"><img src="https://cdn-icons-png.flaticon.com/512/1936/1936474.png" style="display: block; height: auto; border: 0; width: 210px; max-width: 100%;" width="210"></div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-size: auto; color: #000000; width: 600px;" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="pad" style="padding-bottom:5px;padding-top:25px;text-align:center;width:100%;">
                                                                                <h1 style="margin: 0; color: #555555; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 36px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Nous avons bien reçu votre message!</strong></h1>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                        <tr>
                                                                            <td class="pad" style="padding-bottom:20px;padding-left:15px;padding-right:15px;padding-top:20px;">
                                                                                <div style="font-family: sans-serif">
                                                                                    <div class style="font-size: 14px; mso-line-height-alt: 25.2px; color: #737487; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;">Nous vous répondrons le plus vite possible ! </span></p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; color: #000000; width: 600px;" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                                <div class="alignment" align="center" style="line-height:10px"><img class="fullMobileWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4011/bottom-rounded.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" width="600"></div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                        <tr>
                                                                            <td class="pad" style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:30px;">
                                                                                <div style="font-family: sans-serif">
                                                                                    <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #262b30; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                        <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                        <tr>
                                                                            <td class="pad" style="padding-bottom:35px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                                                                <div style="font-family: sans-serif">
                                                                                    <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #262b30; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                        <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                                    <tr>
                                                                                        <td class="alignment" style="vertical-align: middle; text-align: center;">
                                                                                            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                            <!--[if !vml]><!-->
                                                                                            <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                <!--<![endif]-->
                                                                                                <tr>
                                                                                                    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                                                                    <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table><!-- End -->
                </body>
                
                </html>');

            $mailer->send($email);
            // $new_file_path = "Email.txt";
         
            // if (!$filesystem->exists($new_file_path))
            // {
            //     $filesystem->touch($new_file_path);
            //     $filesystem->chmod($new_file_path, 0777);
            //     $filesystem->dumpFile($new_file_path, $r['name']."\n");
            //     $filesystem->appendToFile($new_file_path, $r['email']."\n");
            //     $filesystem->appendToFile($new_file_path, $r['message']."\n");
            //     // $filesystem->dumpFile($new_file_path, "Adding dummy content to bar.txt file.\n");
            //     // $filesystem->appendToFile($new_file_path, "TTTTTTEEEEEEESSSSSSSSTTTTTT.\n");
            // }else{
            //     // $filesystem->dumpFile($new_file_path, "marche\n");
            //     // $filesystem->dumpFile($new_file_path, json_encode($r));
            //     $filesystem->dumpFile($new_file_path, $r['name']."\n");
            //     $filesystem->appendToFile($new_file_path, $r['email']."\n");
            //     $filesystem->appendToFile($new_file_path, $r['message']."\n");
            // }
        } catch (IOExceptionInterface $exception) {
            echo "Error creating file at". $exception->getPath();
        }
        return new JsonResponse("reçu"); 
    }

    #[Route('/getImagesClient/{id}', name: 'getImagesClient', methods: ['GET'])]
    public function getImagesClient(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        $id = $request->get('id');
        try {
            $images = json_encode($clientImageRepository->findByExampleFieldArray($id));
            return new JsonResponse($images);
            if($images == "[]")
                return new JsonResponse(false);
        } catch (\Throwable $th) {
            dd($th);
            return new JsonResponse(false);
        }
        return new JsonResponse(false);    
    }
    #[Route('/gettAllClient/{id}', name: 'gettAllClient', methods: ['GET'])]
    public function gettAllClient(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        $id = $request->get('id');
        try {
            $next = $client->getAllPagination($id);
            $i = 0;
            foreach($next as $n){

                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
            }

        } catch (\Throwable $th) {
            return new JsonResponse($th);
        }
        return new JsonResponse($next);      
    }

    #[Route('/getsearchcat/{search}/{type}', name: 'getSearchcat', methods: ['GET'])]
    public function getSearchcat(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session,ProjetRepository $projet,ProjetImageRepository $projetImageRepository, CategorieRepository $catrepo,EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {    
        try {
            
            $search = [];
            $num = $request->get('search');
            $type = $request->get('type');
            $qb = $entityManager->createQueryBuilder();
            if($type == "client"){
                $qb ->select('a')
                ->from(Client::class, 'a' )
                ->join('a.categorie', 'm')
                ->where('m.id = :identifier')
                ->setParameter('identifier', $num)
            ;
            }
            if($type == "projet"){
                $qb ->select('a')
                ->from(Projet::class, 'a' )
                ->join('a.categorie', 'm')
                ->where('m.id = :identifier')
                ->setParameter('identifier', $num)
            ;
            }
            $next2 = $qb->getQuery()->getResult();
            //dd($next);
            $i = 0;

            foreach($next2 as $n){
                if($type == "client")
                    $getHeader = $clientImageRepository->checkHeader($n->getId());
                if($type == "projet")
                    $getHeader = $projetImageRepository->checkHeader($n->getId());
               
                if($getHeader){
                    $header = $getHeader->getImage();
                    //$n['header'] = $getHeader->getImage();
                    //$next[$i] = $n;
                } else { 
                    $header = null; 
                   // $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                $array = json_decode($serializer->serialize($n, 'json'), true);
                array_push($array, "projet");
                if($header) 
                    $array['header'] = $header; 
                array_push($search, $array); 
            }

        
        } catch (\Throwable $th) {
            dd($th);
            return new JsonResponse($th);
        }
        return new JsonResponse($search);    
    }

    #[Route('/getSearch/{search}', name: 'getSearch', methods: ['GET'])]
    public function getSearch(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session,ProjetRepository $projet,ProjetImageRepository $projetImageRepository): Response
    {
        try {
            
            $search = [];
            $next = $client->getSearch($request->get('search'));
            $i = 0;
         
            foreach($next as $n){
                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
            
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                array_push($n, "client"); 
                array_push($search, $n); 
            }

            $next2 = $projet->getSearch($request->get('search'));
            $i = 0;

            foreach($next2 as $n){
                $getHeader = $projetImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                array_push($n, "projet"); 
                array_push($search, $n); 
            }
            //dd($search);
        
        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($search);    
    }

    #[Route('/getImagesProjet/{id}', name: 'getImagesProjet', methods: ['GET'])]
    public function getImagesProjet(ProjetImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        $id = $request->get('id');
        try {
            $images = json_encode($clientImageRepository->findByExampleFieldArray($id));
            return new JsonResponse($images);
            if($images == "[]")
                return new JsonResponse(false);
        } catch (\Throwable $th) {
            return new JsonResponse(false);
        }
        return new JsonResponse(false);    
    }
    

    #[Route('/NexPrev/{id}', name: 'NexPrev', methods: ['GET'])]
    public function nextPrev(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        $id = $request->get('id');

        try {
            $next = json_encode($client->findByExampleFieldArray($id+1));
            $prev = json_encode($client->findByExampleFieldArray($id-1));

            if($next && $prev) {
                $nextPrev = [$next, $prev];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]") {
                $nextPrev = ["null", $prev];
                return new JsonResponse($nextPrev);
            }

            if($prev == "[]") {
                $nextPrev = [$next, "null"];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]" && $prev == "[]")
                return new JsonResponse(false);
        } catch (\Throwable $th) {
            return new JsonResponse(false);
        }
        return new JsonResponse(false);    
    }

    #[Route('/NexPrevP/{id}', name: 'NexPrevP', methods: ['GET'])]
    public function NexPrevP(ClientImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $id = $request->get('id');

        try {
            $next = json_encode($client->findByExampleFieldArray($id+1));
            $prev = json_encode($client->findByExampleFieldArray($id-1));

            if($next && $prev) {
                $nextPrev = [$next, $prev];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]") {
                $nextPrev = ["null", $prev];
                return new JsonResponse($nextPrev);
            }

            if($prev == "[]") {
                $nextPrev = [$next, "null"];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]" && $prev == "[]")
                return new JsonResponse(false);
        } catch (\Throwable $th) {
            return new JsonResponse(false);
        }
        return new JsonResponse(false);    
    }

}
