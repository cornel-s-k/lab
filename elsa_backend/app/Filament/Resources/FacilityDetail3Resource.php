<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FacilityDetail3Resource\Pages;
use App\Models\FacilityDetail3;
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

class FacilityDetail3Resource extends Resource
{
    protected static ?string $model = FacilityDetail3::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Facility Detail 3';
    protected static ?string $pluralModelLabel = 'Facility Details 3';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make('Informasi Utama Halaman')
                    ->schema([
                        Textarea::make('short_description')->label('Deskripsi Singkat (Lead Text)')->rows(2)->required(),
                        FileUpload::make('main_image_path')->label('Gambar Utama Fasilitas')->image()->directory('facilities/detail3')->nullable(),
                    ]),

                Card::make('Daftar Layanan Utama')
                    ->schema([
                        Repeater::make('core_services')
                            ->label('Layanan Utama (Mekanika Tanah, Topografi, dll.)')
                            ->helperText('Masukkan setiap poin layanan yang akan muncul di daftar bullet point utama.')
                            ->schema([
                                TextInput::make('item')->label('Nama Layanan')->required(),
                            ])
                            ->defaultItems(4)
                            ->collapsible()
                            ->columnSpanFull(),
                    ]),

                Card::make('Layanan Sub-Laboratorium Mekanika Tanah')
                    ->description('Bagian ini memuat detail pengujian Lab Mekanika Tanah dan frame dokumentasinya.')
                    ->schema([
                        Repeater::make('sub_lab_services')
                            ->label('Detail Pengujian Lab')
                            ->defaultItems(4) // 4 item: Kadar Air, Berat Jenis, Ukuran Butir, Sedimen Layang
                            ->schema([
                                TextInput::make('title')->label('Judul Uji')->required(),
                                TextInput::make('method')->label('Metode/Standar Uji (e.g., SNI 03-1965-1990)')->required(),
                                Textarea::make('description')->label('Deskripsi Uji')->rows(3)->required(),
                                
                                // Nested Repeater untuk 6 Frame Gambar
                                Repeater::make('images')
                                    ->label('Dokumentasi Uji (Max 6 Frames)')
                                    ->helperText('Unggah path (atau upload) 6 gambar dokumentasi untuk visualisasi frame kecil.')
                                    ->minItems(1)->maxItems(6)
                                    ->schema([
                                        FileUpload::make('image_path')
                                            ->label('Frame Gambar')
                                            ->image()
                                            ->directory('facilities/detail3/lab_frames')
                                            ->required(),
                                    ])
                                    ->columns(3)
                                    ->collapsible(),
                            ])
                            ->collapsible()
                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'Uji Lab Baru'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('short_description')->searchable()->limit(50),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
            ->actions([Tables\Actions\EditAction::make()])
            ->bulkActions([Tables\Actions\BulkActionGroup::make([Tables\Actions\DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFacilityDetail3s::route('/'),
            'create' => Pages\CreateFacilityDetail3::route('/create'),
            'edit' => Pages\EditFacilityDetail3::route('/{record}/edit'),
        ];
    }
}