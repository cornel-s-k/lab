<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FaqResource\Pages;
use App\Filament\Resources\FaqResource\RelationManagers;
use App\Models\Faq;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class FaqResource extends Resource
{
    protected static ?string $model = Faq::class;
    protected static ?string $navigationLabel = 'FAQ';
    protected static ?string $navigationIcon = 'heroicon-o-question-mark-circle';
    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('pertanyaan')
                    ->label('Pertanyaan')
                    ->required()
                    ->maxLength(255)
                    ->minLength(5),
                Forms\Components\Textarea::make('jawaban')
                    ->label('Jawaban')
                    ->required()
                    ->minLength(10)
                    ->maxLength(1000),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('pertanyaan')
                    ->label('Pertanyaan'),
                Tables\Columns\TextColumn::make('jawaban')
                    ->label('Jawaban')
                    ->limit(50)
                    ->wrap(),
            ]);
    }
// perlu nambahin delete
    public static function getRelations(): array
    {
        return [
            // Tambahkan relasi jika ada
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFaqs::route('/'),
            'create' => Pages\CreateFaq::route('/create'),
            'edit' => Pages\EditFaq::route('/{record}/edit'),
        ];
    }
}