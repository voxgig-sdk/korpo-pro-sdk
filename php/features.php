<?php
declare(strict_types=1);

// KorpoPro SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class KorpoProFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new KorpoProBaseFeature();
            case "test":
                return new KorpoProTestFeature();
            default:
                return new KorpoProBaseFeature();
        }
    }
}
