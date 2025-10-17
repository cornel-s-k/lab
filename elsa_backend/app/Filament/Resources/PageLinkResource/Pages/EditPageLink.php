<?php

namespace App\Filament\Resources\PageLinkResource\Pages;

use App\Filament\Resources\PageLinkResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPageLink extends EditRecord
{
    protected static string $resource = PageLinkResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
