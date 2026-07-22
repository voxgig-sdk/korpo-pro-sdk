<?php
declare(strict_types=1);

// KorpoPro SDK base feature

class KorpoProBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(KorpoProContext $ctx, array $options): void {}
    public function PostConstruct(KorpoProContext $ctx): void {}
    public function PostConstructEntity(KorpoProContext $ctx): void {}
    public function SetData(KorpoProContext $ctx): void {}
    public function GetData(KorpoProContext $ctx): void {}
    public function GetMatch(KorpoProContext $ctx): void {}
    public function SetMatch(KorpoProContext $ctx): void {}
    public function PrePoint(KorpoProContext $ctx): void {}
    public function PreSpec(KorpoProContext $ctx): void {}
    public function PreRequest(KorpoProContext $ctx): void {}
    public function PreResponse(KorpoProContext $ctx): void {}
    public function PreResult(KorpoProContext $ctx): void {}
    public function PreDone(KorpoProContext $ctx): void {}
    public function PreUnexpected(KorpoProContext $ctx): void {}
}
