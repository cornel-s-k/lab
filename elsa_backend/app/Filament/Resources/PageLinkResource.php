<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageLinkResource\Pages;
use App\Models\PageLink;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PageLinkResource extends Resource
{
    protected static ?string $model = PageLink::class;
    protected static ?string $navigationIcon = 'heroicon-o-link';
    protected static ?string $navigationGroup = 'Page Links';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('name')
                ->options([
                    'Survey' => 'Survey',
                    'Capaian ELSA' => 'Capaian ELSA',
                    'Timeline' => 'Timeline',
                    'Video' => 'Video',
                ])
                ->required(),

            Forms\Components\TextInput::make('link')->url()->label('Link Halaman'),

            Forms\Components\FileUpload::make('video_path')
                ->directory('videos')
                ->label('Video (MP4)')
                ->acceptedFileTypes(['video/mp4'])
                ->maxSize(102400), // 100MB
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('link')->limit(40),
                Tables\Columns\TextColumn::make('video_path')->limit(40),
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
            'index' => Pages\ManagePageLinks::route('/'),
        ];
    }
}
