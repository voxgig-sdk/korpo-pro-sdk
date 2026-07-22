<?php
declare(strict_types=1);

// KorpoPro SDK utility: result_body

class KorpoProResultBody
{
    public static function call(KorpoProContext $ctx): ?KorpoProResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
