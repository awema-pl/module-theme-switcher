<?php

namespace AwemaPL\ThemeSwitcher;

use AwemaPL\BaseJS\AwemaProvider;

class ThemeSwitcherServiceProvider extends AwemaProvider
{

    public function getPackageName(): string
    {
        return 'theme-switcher';
    }

    public function getPath(): string
    {
        return __DIR__;
    }
}
