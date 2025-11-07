<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\TextColumn; // Tambahkan ini
use Filament\Tables\Columns\ImageColumn; // Tambahkan ini
use Filament\Tables\Columns\IconColumn; // Tambahkan ini
use Filament\Forms\Components\FileUpload; // Tambahkan ini
use Filament\Forms\Components\Textarea; // Tambahkan ini
use Filament\Forms\Components\TextInput; // Tambahkan ini
use Filament\Forms\Components\RichEditor; // Tambahkan ini
use Filament\Forms\Components\KeyValue; // Tambahkan ini

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Produk'; // Opsional, jika ingin label berbeda dari nama Resource
    protected static ?string $navigationGroup = 'Katalog'; // Sesuaikan dengan grup yang ada di menu Anda

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true) // Pastikan slug unik
                    ->helperText('Digunakan untuk URL API. Harus unik.'),
                Textarea::make('short_description')
                    ->label('Deskripsi Singkat')
                    ->required()
                    ->rows(3)
                    ->maxLength(65535),
                RichEditor::make('full_description')
                    ->label('Deskripsi Lengkap')
                    ->required()
                    ->columnSpanFull(), // Mengambil lebar penuh di formulir
                FileUpload::make('image_path')
                    ->label('Gambar Produk')
                    ->image()
                    ->directory('products') // Simpan di direktori storage/app/public/products
                    ->nullable(),
                TextInput::make('read_more_link') // <<< TAMBAHKAN INI
                    ->label('Link Baca Lebih Lanjut (URL)')
                    ->url() // Validasi input harus berupa URL
                    ->maxLength(255)
                    ->nullable()
                    ->helperText('URL eksternal untuk informasi produk lebih lanjut (misal: halaman PDF atau blog).'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('slug')
                    ->searchable(),
                ImageColumn::make('image_path')
                    ->label('Gambar')
                    ->size(50),
                TextColumn::make('read_more_link') // <<< TAMBAHKAN KOLOM BARU INI
                    ->label('Link Baca Lanjut')
                    ->limit(30) // Batasi tampilan URL
                    ->url(fn ($record) => $record->read_more_link) // Jadikan teksnya link yang bisa diklik
                    ->openUrlInNewTab(),
                TextColumn::make('created_at')
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
