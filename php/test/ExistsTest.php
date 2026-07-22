<?php
declare(strict_types=1);

// KorpoPro SDK exists test

require_once __DIR__ . '/../korpopro_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = KorpoProSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
