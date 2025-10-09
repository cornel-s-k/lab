<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LayananResource\Pages;
use App\Filament\Resources\LayananResource\RelationManagers;
use App\Models\Layanan;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\TextInput; // Untuk Title, Description, Link
use Filament\Forms\Components\FileUpload; // Untuk Image
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class LayananResource extends Resource
{
    // Tentukan Model yang digunakan
    protected static ?string $model = Layanan::class;

    // Tentukan ikon navigasi
    protected static ?string $navigationIcon = 'heroicon-o-list-bullet'; 
    
    // Tentukan label tunggal dan jamak
    protected static ?string $modelLabel = 'Layanan Laboratorium';
    protected static ?string $pluralModelLabel = 'Daftar Layanan';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        // FIELD 1: TITLE (Judul Kategori - misal: Sub Lab Model Fisik Dinamika Pantai)
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->label('Judul Kategori Layanan'),

                        // FIELD 2: DESCRIPTION (Deskripsi Singkat - misal: Paket Pengujian Model Fisik...)
                        TextInput::make('description')
                            ->required()
                            ->maxLength(255)
                            ->label('Deskripsi Singkat'),
                        
                        // FIELD 3: LINK (URL Tautan Eksternal)
                        TextInput::make('link')
                            ->url() // Validasi input harus berupa URL
                            ->required()
                            ->maxLength(255)
                            ->label('URL Selengkapnya (Eksternal)'),
                            
                        // FIELD 4: IMAGE (Gambar/Foto Layanan)
                        FileUpload::make('image')
                            ->image()
                            ->directory('layanan_images') // Simpan di storage/app/public/layanan_images
                            ->nullable()
                            ->label('Gambar Layanan (Opsional)'),
                            
                    ])
                    ->columns(1), // Semua field ditampilkan dalam satu kolom vertikal
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                // Kolom untuk JUDUL
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul Kategori')
                    ->searchable()
                    ->sortable(),
                    
                // Kolom untuk DESKRIPSI
                Tables\Columns\TextColumn::make('description')
                    ->label('Deskripsi')
                    ->wrap() // Mengizinkan teks panjang untuk wrap
                    ->limit(50),
                    
                // Kolom untuk LINK
                Tables\Columns\TextColumn::make('link')
                    ->label('Tautan')
                    ->url(fn (Layanan $record): string => $record->link) // Membuatnya clickable link
                    ->openUrlInNewTab(), // Buka di tab baru

                // Kolom untuk GAMBAR
                Tables\Columns\ImageColumn::make('image')
                    ->label('Gambar'),
                    
                // Kolom Waktu Dibuat
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            'index' => Pages\ListLayanans::route('/'),
            'create' => Pages\CreateLayanan::route('/create'),
            'edit' => Pages\EditLayanan::route('/{record}/edit'),
        ];
    }
}