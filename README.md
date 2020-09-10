# ThemeSwitcher

[![Composer Ready](https://www.awema.pl/awema-pl/module-theme-switcher/status.svg)](https://www.awema.pl/)
[![Downloads](https://www.awema.pl/awema-pl/module-theme-switcher/downloads.svg)](https://www.awema.pl/)
[![Last version](https://www.awema.pl/awema-pl/module-theme-switcher/version.svg)](https://www.awema.pl/)


This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Documentation

[Russian](./docs/index.md)

## NPM scripts

Development mode `npm run watch` or simply `npm start`
Development mode for IE `npm run watch:legacy`
Production build `npm run build`

## Installation

Via Composer

``` bash
$ composer require awema-pl/module-theme-switcher
```

The package will automatically register itself.

You can publish the migration with:

```bash
php artisan vendor:publish --provider="AwemaPL\ThemeSwitcher\Providers\ThemeSwitcherServiceProvider" --tag="migrations"
```

After the migration has been published you can create the table for ThemeSwitcher by running the migrations:

```bash
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --provider="AwemaPL\ThemeSwitcher\Providers\ThemeSwitcherServiceProvider" --tag="config"
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email :author_email instead of using the issue tracker.

## Credits

- [:author_name][link-author]
- [All Contributors][link-contributors]

## License

GNU General Public License v3.0. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/awemapl/themeswitcher.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/awemapl/themeswitcher.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/awemapl/themeswitcher/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/awemapl/themeswitcher
[link-downloads]: https://packagist.org/packages/awemapl/themeswitcher
[link-travis]: https://travis-ci.org/awemapl/themeswitcher
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/awemapl
[link-contributors]: ../../contributors]
