<?php
declare(strict_types=1);

// KorpoPro SDK utility: prepare_body

class KorpoProPrepareBody
{
    public static function call(KorpoProContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
