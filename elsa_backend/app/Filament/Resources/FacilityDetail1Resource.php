<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FacilityDetail1Resource\Pages;
use App\Models\FacilityDetail1;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\FileUpload;

class FacilityDetail1Resource extends Resource
{
    protected static ?string $model = FacilityDetail1::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Facility Detail 1';
    protected static ?string $pluralModelLabel = 'Facility Details 1';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make('Spesifikasi Kolam Gelombang')
                    ->schema([
                        TextInput::make('pool_dimen')->label('Dimensi Kolam (L x W x H)')->required()->columnSpan(1),
                        FileUpload::make('pool_wavemaker_image')
                            ->label('Gambar Wavemaker Kolam')
                            ->image()
                            ->directory('facilities/detail1')
                            ->columnSpan(1),
                        Repeater::make('pool_specs')
                            ->label('Daftar Spesifikasi Kolam')
                            ->helperText('Masukkan poin-poin spek seperti tipe, fitur, ketinggian gelombang, dll.')
                            ->schema([
                                TextInput::make('item')->label('Poin Spesifikasi')->required(),
                            ])
                            ->defaultItems(8)
                            ->collapsible()
                            ->columnSpanFull(),
                    ])->columns(2),

                Card::make('Spesifikasi Saluran Gelombang Kaca')
                    ->schema([
                        TextInput::make('glass_dimen')->label('Dimensi Saluran Kaca')->required()->columnSpan(1),
                        FileUpload::make('glass_wavemaker_image')->label('Gambar Wavemaker Kaca')->image()->directory('facilities/detail1')->columnSpan(1),
                        Repeater::make('glass_specs')
                            ->label('Daftar Spesifikasi Saluran Kaca')
                            ->schema([
                                TextInput::make('item')->label('Poin Spesifikasi')->required(),
                            ])
                            ->defaultItems(7)
                            ->collapsible()
                            ->columnSpanFull(),
                    ])->columns(2),

                Card::make('Spesifikasi Saluran Gelombang Beton')
                    ->schema([
                        TextInput::make('concrete_dimen')->label('Dimensi Saluran Beton')->required()->columnSpan(1),
                        FileUpload::make('concrete_wavemaker_image')->label('Gambar Wavemaker Beton')->image()->directory('facilities/detail1')->columnSpan(1),
                        Repeater::make('concrete_specs')
                            ->label('Daftar Spesifikasi Saluran Beton')
                            ->schema([
                                TextInput::make('item')->label('Poin Spesifikasi')->required(),
                            ])
                            ->defaultItems(7)
                            ->collapsible()
                            ->columnSpanFull(),
                    ])->columns(2),

                Card::make('Fasilitas Tsunami Simulator')
                    ->schema([
                        TextInput::make('tsunami_dimen')->label('Panjang Saluran Tsunami')->required(),
                        Textarea::make('tsunami_description')->label('Deskripsi Tsunami Simulator')->rows(3)->required(),
                        FileUpload::make('tsunami_image')->label('Gambar Tsunami Simulator')->image()->directory('facilities/detail1')->columnSpan(1),
                        Repeater::make('tsunami_specs')
                            ->label('Daftar Spesifikasi Teknis Tsunami')
                            ->schema([
                                TextInput::make('item')->label('Poin Spesifikasi')->required(),
                            ])
                            ->defaultItems(6)
                            ->collapsible()
                            ->columnSpan(1),
                    ])->columns(2),

                Card::make('Tipe Gelombang yang Dapat Dibangkitkan')
                    ->schema([
                        Repeater::make('wave_types_regular')
                            ->label('Tipe Gelombang Regular & Lainnya')
                            ->helperText('Masukkan Regular Waves, Solitary Waves, Second Order, Oblique dll.')
                            ->schema([
                                TextInput::make('name')->label('Nama Tipe Gelombang')->required(),
                            ])
                            ->defaultItems(5)
                            ->collapsible()
                            ->columnSpan(1),
                        Repeater::make('wave_types_irregular')
                            ->label('Spektrum Irregular Waves')
                            ->helperText('Masukkan Spektrum Gelombang populer seperti JONSWAP, Pierson-Moskowitz, dll.')
                            ->schema([
                                TextInput::make('name')->label('Nama Spektrum')->required(),
                            ])
                            ->defaultItems(10)
                            ->collapsible()
                            ->columnSpan(1),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('pool_dimen')->searchable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
            ->actions([Tables\Actions\EditAction::make()])
            ->bulkActions([Tables\Actions\BulkActionGroup::make([Tables\Actions\DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFacilityDetail1s::route('/'),
            'create' => Pages\CreateFacilityDetail1::route('/create'),
            'edit' => Pages\EditFacilityDetail1::route('/{record}/edit'),
        ];
    }
}