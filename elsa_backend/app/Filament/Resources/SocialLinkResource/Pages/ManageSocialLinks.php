<?php

namespace App\Filament\Resources\SocialLinkResource\Pages;

use App\Filament\Resources\SocialLinkResource;
use Filament\Actions\CreateAction; // <--- ADD THIS LINE
use Filament\Resources\Pages\ManageRecords;

class ManageSocialLinks extends ManageRecords
{
    protected static string $resource = SocialLinkResource::class;
    protected static ?string $title = 'Social Media Links';

    // <--- ADD THIS METHOD
    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}