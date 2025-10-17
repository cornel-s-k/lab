<?php

namespace App\Filament\Resources\FacilityDetail1Resource\Pages;

use App\Filament\Resources\FacilityDetail1Resource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFacilityDetail1s extends ListRecords
{
    protected static string $resource = FacilityDetail1Resource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
