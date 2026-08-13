<?php
declare(strict_types=1);

// KorpoPro SDK configuration

class KorpoProConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "KorpoPro",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://korpo.pro/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "health" => [],
                ],
            ],
            "entity" => [
        'health' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'health',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/health',
                  'parts' => [
                    'health',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.services`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return KorpoProFeatures::make_feature($name);
    }
}
