<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SocialLinkResource\Pages;
use App\Models\SocialLink;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SocialLinkResource extends Resource
{
    protected static ?string $model = SocialLink::class;
    protected static ?string $navigationIcon = 'heroicon-o-share';
    protected static ?string $navigationGroup = 'Footer Links';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('platform')
                ->options([
                    'WhatsApp' => 'WhatsApp',
                    'Instagram' => 'Instagram',
                    'Twitter' => 'Twitter',
                    'LinkedIn' => 'LinkedIn',
                ])
                ->required()
                ->label('Platform'),

            Forms\Components\TextInput::make('username')
                ->label('Username / Nomor (untuk WA)')
                ->required(),

            Forms\Components\TextInput::make('link')
                ->label('Link URL')
                ->url()
                ->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('platform'),
                Tables\Columns\TextColumn::make('username'),
                Tables\Columns\TextColumn::make('link')->limit(50),
                Tables\Columns\TextColumn::make('created_at')->dateTime(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageSocialLinks::route('/'),
        ];
    }
}
