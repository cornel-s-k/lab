<?php

namespace App\Filament\Resources\FacilityDetail3Resource\Pages;

use App\Filament\Resources\FacilityDetail3Resource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFacilityDetail3 extends EditRecord
{
    protected static string $resource = FacilityDetail3Resource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
