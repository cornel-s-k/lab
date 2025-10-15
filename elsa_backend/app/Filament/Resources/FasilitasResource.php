<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FasilitasResource\Pages;
use App\Filament\Resources\FasilitasResource\RelationManagers;
use App\Models\Fasilitas;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;

class FasilitasResource extends Resource
{
    protected static ?string $model = Fasilitas::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-library';
    protected static ?string $modelLabel = 'Fasilitas Laboratorium';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()
                    ->schema([
                        TextInput::make('judul')
                            ->label('Judul Fasilitas')
                            ->required() // Wajib diisi (Sesuai NOT NULL constraint)
                            ->maxLength(255),
                        
                        RichEditor::make('deskripsi_singkat')
                            ->label('Deskripsi Singkat (Untuk Card Home)')
                            ->required() // Wajib diisi (Sesuai NOT NULL constraint)
                            ->maxLength(65535)
                            ->columnSpan('full'),
                        
                        RichEditor::make('deskripsi_lengkap')
                            ->label('Deskripsi Lengkap (Detail Halaman)')
                            ->maxLength(65535)
                            ->nullable() // Boleh kosong
                            ->columnSpan('full'),

                        FileUpload::make('gambar')
                            ->label('Gambar Fasilitas')
                            ->image()
                            ->directory('fasilitas') // Simpan di storage/app/public/fasilitas
                            ->nullable(),
                    ])->columns(1), // Menggunakan 1 kolom dalam Card
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('judul')->searchable(),
                Tables\Columns\TextColumn::make('deskripsi_singkat')->limit(50),
                Tables\Columns\ImageColumn::make('gambar')->square(),
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
            'index' => Pages\ListFasilitas::route('/'),
            'create' => Pages\CreateFasilitas::route('/create'),
            'edit' => Pages\EditFasilitas::route('/{record}/edit'),
        ];
    }
}
