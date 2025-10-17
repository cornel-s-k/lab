<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FacilityResource\Pages;
use App\Filament\Resources\FacilityResource\RelationManagers;
use App\Models\Facility;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Card;

class FacilityResource extends Resource
{
    protected static ?string $model = Facility::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
{
    return $form
        ->schema([
            Card::make([
                TextInput::make('title')->required(),
                TextInput::make('slug')->required()->unique(ignoreRecord: true),
                FileUpload::make('image')
                    ->image()
                    ->directory('facilities-images')
                    ->required(),
                Select::make('status')
                    ->options([
                        'Available' => 'Available',
                        'On Maintenance' => 'On Maintenance',
                    ])
                    ->default('Available'),
                TextInput::make('sort_order')->numeric()->default(0),

                // PENTING: Menghubungkan ke tabel detail spesifik
                Select::make('detail_type')
                    ->label('Tipe Halaman Detail')
                    ->options([
                        'FacilityDetail1' => 'Laboratorium Model Fisik',
                        'FacilityDetail2' => 'Simulasi Hidro-Oseanografi',
                        'FacilityDetail3' => 'Mekanika Tanah & Akuisisi Data',
                    ])
                    ->required(),
                TextInput::make('detail_id')
                    ->numeric()
                    ->nullable()
                    ->helperText('ID dari detail spesifik (Contoh: ID 1 di tabel facility_details_1)'),
            ])
        ]);
}

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
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
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFacilities::route('/'),
            'create' => Pages\CreateFacility::route('/create'),
            'edit' => Pages\EditFacility::route('/{record}/edit'),
        ];
    }
}
