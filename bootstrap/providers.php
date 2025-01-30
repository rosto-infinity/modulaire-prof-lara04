<?php

return [
    App\Providers\AppServiceProvider::class,
    App\Providers\FortifyServiceProvider::class,
    Modules\Acl\AclServiceProvider::class,
    Modules\AdminAuth\AdminAuthServiceProvider::class,
    Modules\Blog\BlogServiceProvider::class,
    Modules\Dashboard\DashboardServiceProvider::class,
    Modules\Index\IndexServiceProvider::class,
    Modules\Support\SupportServiceProvider::class,
    Modules\User\UserServiceProvider::class,
];
