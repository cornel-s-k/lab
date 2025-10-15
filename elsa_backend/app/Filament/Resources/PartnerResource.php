<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PartnerResource\Pages;
use App\Models\Partner;
use Filament\Forms;
use Filament\Forms\Components\FileUpload; // Import untuk logo
use Filament\Forms\Components\TextInput; // Import untuk nama & urutan
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class PartnerResource extends Resource
{
    protected static ?string $model = Partner::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required() // Wajib diisi karena NOT NULL
                    ->maxLength(255)
                    ->label('Nama Mitra'),

                FileUpload::make('logo_url')
                    ->required() // Wajib diisi karena NOT NULL
                    ->image()
                    ->disk('public') // Simpan di disk 'public'
                    ->directory('partner-logos') // Simpan di folder storage/app/public/partner-logos
                    ->label('Logo Mitra'),

                TextInput::make('order_index')
                    ->numeric()
                    ->nullable() // Boleh kosong, sesuai migrasi
                    ->label('Urutan Tampil'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('logo_url')
                    ->label('Logo'),
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('order_index')
                    ->sortable()
                    ->label('Urutan'),
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
            'index' => Pages\ListPartners::route('/'),
            'create' => Pages\CreatePartner::route('/create'),
            'edit' => Pages\EditPartner::route('/{record}/edit'),
        ];
    }
}
