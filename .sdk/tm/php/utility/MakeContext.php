<?php
declare(strict_types=1);

// KorpoPro SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class KorpoProMakeContext
{
    public static function call(array $ctxmap, ?KorpoProContext $basectx): KorpoProContext
    {
        return new KorpoProContext($ctxmap, $basectx);
    }
}
