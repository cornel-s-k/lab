<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SettingResource\Pages;
use App\Models\Setting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SettingResource extends Resource
{
    protected static ?string $model = Setting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('site_title')
                    ->label('Judul Website')
                    ->maxLength(255),

                Forms\Components\TextInput::make('tagline')
                    ->label('Tagline')
                    ->maxLength(255),

                Forms\Components\Textarea::make('about_us')
                    ->label('Tentang Kami')
                    ->rows(5),

                Forms\Components\TextInput::make('video_url')
                    ->label('Link Video Profil')
                    ->url()
                    ->placeholder('https://youtube.com/...'),

                Forms\Components\TextInput::make('survey_url')
                    ->label('Link Google Form')
                    ->url(),

                Forms\Components\TextInput::make('elsa_url')
                    ->label('Link Website ELSA')
                    ->url(),

                Forms\Components\TextInput::make('timeline_url')
                    ->label('Link Spreadsheet Timeline')
                    ->url(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('site_title')
                    ->label('Judul Website')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('tagline')
                    ->label('Tagline')
                    ->limit(30),

                Tables\Columns\TextColumn::make('video_url')
                    ->label('Video Profil')
                    ->url(fn ($record) => $record->video_url, true)
                    ->openUrlInNewTab(),

                Tables\Columns\TextColumn::make('survey_url')
                    ->label('Survey')
                    ->url(fn ($record) => $record->survey_url, true)
                    ->openUrlInNewTab(),

                Tables\Columns\TextColumn::make('elsa_url')
                    ->label('ELSA')
                    ->url(fn ($record) => $record->elsa_url, true)
                    ->openUrlInNewTab(),

                Tables\Columns\TextColumn::make('timeline_url')
                    ->label('Timeline')
                    ->url(fn ($record) => $record->timeline_url, true)
                    ->openUrlInNewTab(),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSettings::route('/'),
            'create' => Pages\CreateSetting::route('/create'),
            'edit' => Pages\EditSetting::route('/{record}/edit'),
        ];
    }
}
