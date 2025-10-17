<?php

namespace App\Filament\Resources\FacilityDetail3Resource\Pages;

use App\Filament\Resources\FacilityDetail3Resource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFacilityDetail3s extends ListRecords
{
    protected static string $resource = FacilityDetail3Resource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
