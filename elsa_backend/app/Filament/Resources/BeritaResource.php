<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BeritaResource\Pages;
use App\Filament\Resources\BeritaResource\RelationManagers;
use App\Models\Berita;
use Filament\Forms;
use Filament\Forms\Components\Card; // Recommended for grouping fields visually
use Filament\Forms\Components\TextInput; // Import for the 'judul' field
use Filament\Forms\Components\Textarea; // Import for the 'isi' or 'content' field
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BeritaResource extends Resource
{
    protected static ?string $model = Berita::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text'; // Changed icon for better fit

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        // REQUIRED FIELD: JUDUL (Title)
                        TextInput::make('judul')
                            ->required() // This line prevents the SQL error
                            ->maxLength(255)
                            ->label('Judul Berita'),

                        // OPTIONAL: Another field that might be required, e.g., 'isi' (content)
                        Textarea::make('isi')
                            ->required() // Set as required if your 'isi' column is NOT NULL
                            ->rows(10)
                            ->columnSpanFull()
                            ->label('Isi Berita'),
                    ])
                    ->columns(1), // Use one column for this Card
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('judul') // Display the 'judul' in the table
                    ->searchable()
                    ->sortable(),
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
            'index' => Pages\ListBeritas::route('/'),
            'create' => Pages\CreateBerita::route('/create'),
            'edit' => Pages\EditBerita::route('/{record}/edit'),
        ];
    }
}