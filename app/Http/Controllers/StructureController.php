<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\ArrayToXml\ArrayToXml;

class StructureController extends Controller
{
    function index()
    {
        return Inertia::render('Welcome');
    }

    function store(Request $request)
    {
        $arr = [];
        $this->generateXMLArray($request->structure, $arr);

        $xml = new ArrayToXml($arr, 'ProjectStructure');
        dd($xml->prettify()->dropXmlDeclaration()->toXml());
    }

    protected function generateXMLArray($structure, &$xmlArray, $containerCount = 1): void
    {
        foreach ($structure as $i) {
            $container = match ($containerCount) {
                1 => 'Top',
                2 => 'Mid',
                default => 'Low'
            };
            $key_name = "__custom:{$container}Container:{$i['id']}";

            $xmlArray[$key_name] = [
                '_attributes' => [
                    'name' => $i['name'],
                    'permissions' => $i['permission']
                ],
            ];

            if ($i['children']) {
                $this->generateXMLArray($i['children'], $xmlArray[$key_name], $containerCount + 1);
            }
        }
    }
}
