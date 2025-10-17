<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FacilityDetail2Resource\Pages;
use App\Models\FacilityDetail2;
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

class FacilityDetail2Resource extends Resource
{
    protected static ?string $model = FacilityDetail2::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Facility Detail 2';
    protected static ?string $pluralModelLabel = 'Facility Details 2';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make('Informasi Utama')
                    ->schema([
                        TextInput::make('title')->label('Judul Utama Halaman')->required(),
                        Textarea::make('lead_text')->label('Deskripsi Singkat Halaman')->rows(2)->required(),
                        FileUpload::make('main_image')->label('Gambar Utama Halaman (Seperti fasilitas2.jpeg)')->image()->directory('facilities/detail2')->nullable(),
                    ]),

                Card::make('Daftar Software yang Digunakan')
                    ->schema([
                        Repeater::make('software_list')
                            ->label('Daftar Software (Bullet Points)')
                            ->helperText('Masukkan nama software beserta fungsinya (e.g., DHI Mike 21 – Hidro-oseanografi).')
                            ->schema([
                                TextInput::make('item')->label('Software')->required(),
                            ])
                            ->defaultItems(4)
                            ->collapsible()
                            ->columnSpanFull(),
                    ]),

                Card::make('Layanan Pengujian & Pemodelan')
                    ->schema([
                        Repeater::make('service_items')
                            ->label('Daftar Layanan Pemodelan')
                            ->helperText('Buat kartu untuk setiap layanan (Pemodelan Hidrodinamika, Tumpahan Minyak, dll.).')
                            ->defaultItems(7)
                            ->schema([
                                TextInput::make('title')->label('Judul Layanan')->required(),
                                Textarea::make('desc')
                                    ->label('Deskripsi Layanan')
                                    ->rows(3)
                                    ->helperText('Mendukung Markdown untuk penekanan teks seperti **MIKE 21/Zero**.')
                                    ->required(),
                                FileUpload::make('img')->label('Gambar Layanan')->image()->directory('facilities/detail2/services')->nullable(),
                            ])
                            ->grid(1) 
                            ->collapsible()
                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'Layanan Baru'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
            ->actions([Tables\Actions\EditAction::make()])
            ->bulkActions([Tables\Actions\BulkActionGroup::make([Tables\Actions\DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFacilityDetail2s::route('/'),
            'create' => Pages\CreateFacilityDetail2::route('/create'),
            'edit' => Pages\EditFacilityDetail2::route('/{record}/edit'),
        ];
    }
}