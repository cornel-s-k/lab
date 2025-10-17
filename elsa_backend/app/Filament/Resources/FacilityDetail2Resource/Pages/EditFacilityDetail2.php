<?php

namespace App\Filament\Resources\FacilityDetail2Resource\Pages;

use App\Filament\Resources\FacilityDetail2Resource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFacilityDetail2 extends EditRecord
{
    protected static string $resource = FacilityDetail2Resource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
