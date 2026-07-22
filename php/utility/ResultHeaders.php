<?php
declare(strict_types=1);

// KorpoPro SDK utility: result_headers

class KorpoProResultHeaders
{
    public static function call(KorpoProContext $ctx): ?KorpoProResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
