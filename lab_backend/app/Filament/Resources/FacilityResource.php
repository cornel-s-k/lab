<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FacilityResource\Pages;
use App\Models\Facility;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class FacilityResource extends Resource
{
    protected static ?string $model = Facility::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-library';
    protected static ?string $navigationGroup = 'Manajemen Konten';
    protected static ?string $navigationLabel = 'Fasilitas Laboratorium';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Nama Fasilitas')
                    ->required()
                    ->maxLength(150),

                Forms\Components\Select::make('status')
                    ->options([
                        'Available' => 'Tersedia',
                        'Unavailable' => 'Tidak Tersedia',
                    ])
                    ->default('Available')
                    ->required(),

                Forms\Components\FileUpload::make('photo_url')
                    ->label('Foto Fasilitas')
                    ->directory('facilities') // simpan di storage/app/public/facilities
                    ->image()
                    ->imagePreviewHeight('200'),

                Forms\Components\Textarea::make('short_description')
                    ->label('Deskripsi Singkat')
                    ->rows(3),

                Forms\Components\RichEditor::make('details')
                    ->label('Detail Fasilitas')
                    ->toolbarButtons([
                        'bold',
                        'italic',
                        'underline',
                        'bulletList',
                        'orderedList',
                        'link',
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Fasilitas')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\ImageColumn::make('photo_url')
                    ->label('Foto')
                    ->square(),

                Tables\Columns\TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->colors([
                        'success' => 'Available',
                        'danger' => 'Unavailable',
                    ]),

                Tables\Columns\TextColumn::make('short_description')
                    ->label('Deskripsi Singkat')
                    ->limit(40),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'Available' => 'Tersedia',
                        'Unavailable' => 'Tidak Tersedia',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
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
        return [];
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
