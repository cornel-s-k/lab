<?php

namespace App\Filament\Resources\PageLinkResource\Pages;

use App\Filament\Resources\PageLinkResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPageLinks extends ListRecords
{
    protected static string $resource = PageLinkResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
