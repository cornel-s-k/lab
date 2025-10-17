<?php

namespace App\Filament\Resources\FacilityDetail2Resource\Pages;

use App\Filament\Resources\FacilityDetail2Resource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFacilityDetail2s extends ListRecords
{
    protected static string $resource = FacilityDetail2Resource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
