<?php

namespace App\Filament\Resources\HkpResource\Pages;

use App\Filament\Resources\HkpResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHkps extends ListRecords
{
    protected static string $resource = HkpResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
