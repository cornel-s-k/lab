<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HkpResource\Pages;
use App\Models\Hkp;
use Filament\Forms;
use Filament\Forms\Components\FileUpload; // Impor untuk file upload
use Filament\Forms\Components\RichEditor; // Impor untuk konten panjang
use Filament\Forms\Components\TextInput; // Impor untuk teks singkat
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class HkpResource extends Resource
{
    protected static ?string $model = Hkp::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Kolom untuk JUDUL dan KODE UNIK
                TextInput::make('code')
                    ->required()
                    ->unique(ignoreRecord: true) // Pastikan unik (kecuali saat update record itu sendiri)
                    ->maxLength(255)
                    ->label('Kode Unik'),
                
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->label('Judul Lengkap'),
                
                // Kolom untuk KONTEN PANJANG (RichEditor)
                RichEditor::make('hak_content')
                    ->required()
                    ->columnSpanFull() // Membuat field ini mengambil lebar penuh
                    ->label('Isi Konten Hak Pengguna'),

                RichEditor::make('kewajiban_content')
                    ->required()
                    ->columnSpanFull() // Membuat field ini mengambil lebar penuh
                    ->label('Isi Konten Kewajiban Pengguna'),
                
                // Kolom untuk GAMBAR/BANNER
                FileUpload::make('image')
                    ->image() // Hanya izinkan gambar
                    ->disk('public') // Simpan di disk 'public'
                    ->directory('hkp-images') // Simpan di folder 'storage/app/public/hkp-images'
                    ->nullable() // Sesuai dengan migrasi
                    ->label('Gambar/Banner'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('code')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image')
                    ->label('Banner'),
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
            'index' => Pages\ListHkps::route('/'),
            'create' => Pages\CreateHkp::route('/create'),
            'edit' => Pages\EditHkp::route('/{record}/edit'),
        ];
    }
}