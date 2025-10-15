<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HistoryResource\Pages;
use App\Filament\Resources\HistoryResource\RelationManagers;
use App\Models\History;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class HistoryResource extends Resource
{
    protected static ?string $model = History::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Sejarah';
    // Hapus atau ubah grup
    protected static ?string $navigationGroup = null; // Tidak ada grup
    // atau
    // protected static ?string $navigationGroup = 'Sejarah'; // Grup khusus

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('year')
                    ->label('Tahun')
                    ->required()
                    ->maxLength(4)
                    ->minLength(4)
                    ->placeholder('Contoh: 2023'),
                Forms\Components\Textarea::make('description')
                    ->label('Deskripsi')
                    ->required()
                    ->maxLength(65535),
                Forms\Components\Toggle::make('is_highlight')
                    ->label('Jadikan Highlight')
                    ->default(false),
                Forms\Components\TextInput::make('order_index')
                    ->label('Urutan')
                    ->numeric()
                    ->nullable(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('year')
                    ->label('Tahun')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->label('Deskripsi')
                    ->limit(50)
                    ->wrap(),
                Tables\Columns\BooleanColumn::make('is_highlight')
                    ->label('Highlight'),
                Tables\Columns\TextColumn::make('order_index')
                    ->label('Urutan')
                    ->sortable()
                    ->default('-'),
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
            'index' => Pages\ListHistories::route('/'),
            'create' => Pages\CreateHistory::route('/create'),
            'edit' => Pages\EditHistory::route('/{record}/edit'),
        ];
    }
}