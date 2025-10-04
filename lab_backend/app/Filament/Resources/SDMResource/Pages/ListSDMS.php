<?php

namespace App\Filament\Resources\SDMResource\Pages;

use App\Filament\Resources\SDMResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSDMS extends ListRecords
{
    protected static string $resource = SDMResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
