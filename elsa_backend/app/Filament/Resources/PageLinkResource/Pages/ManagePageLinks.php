<?php

namespace App\Filament\Resources\PageLinkResource\Pages;

use App\Filament\Resources\PageLinkResource;
use Filament\Actions\CreateAction; // <--- ADD THIS LINE
use Filament\Resources\Pages\ManageRecords;

class ManagePageLinks extends ManageRecords
{
    protected static string $resource = PageLinkResource::class;
    protected static ?string $title = 'Page Links';

    // <--- ADD THIS METHOD
    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}