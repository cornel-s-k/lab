<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use App\Models\LayananData;
use App\Models\SdmLabData;
use App\Models\SekolahData;
use Filament\Forms;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;

class SdmSettings extends Page implements HasForms
{
    use InteractsWithForms;

    // State untuk data Form
    public array $layananData = [];
    public array $sdmLabData = [];
    public array $sekolahData = [];

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $title = 'Kelola Data SDM & Layanan';
    protected static ?string $slug = 'sdm-settings';
    protected static ?string $navigationGroup = 'Data Statistik';
    protected static string $view = 'filament.pages.sdm-settings';

    public function mount(): void
    {
        // 1. Ambil data yang sudah ada dari database
        $layananDb = LayananData::pluck('value', 'name')->toArray();
        $sdmLabDb = SdmLabData::pluck('value', 'name')->toArray();
        $sekolahDb = SekolahData::pluck('value', 'name')->toArray();

        $layananNames = [
        'Model Fisik Dinamika Pantai', 
        'Simulasi Hidro-oseanografi', 
        'Mekanika Tanah & Akuisisi Data Lapangan'
    ];
        $sdmLabLevels = ['S3', 'S2', 'S1', 'D3', 'SLTA']; // Sesuai dengan getSdmLabFields()
        $sekolahLevels = ['S3', 'S2', 'S1']; // Sesuai dengan getSekolahFields()

        // 3. Gabungkan data yang ada dengan nilai default (0) untuk key yang belum ada
        
        // Catatan: Untuk LayananData, Anda perlu memastikan nama-nama layanannya sudah di-seed,
        // jika tidak, $layananNames akan kosong dan array_fill_keys tidak akan berjalan.
        
        // Jika Anda ingin menggunakan key dari getSdmLabFields dan getSekolahFields
        $this->sdmLabData = array_merge(array_fill_keys($sdmLabLevels, 0), $sdmLabDb);
        $this->sekolahData = array_merge(array_fill_keys($sekolahLevels, 0), $sekolahDb);

        // Untuk LayananData, Anda **harus** melakukan seeding.
        // Jika Anda ingin menginisialisasinya secara manual (hanya untuk testing cepat)
        // $layananDefaults = ['Model Fisik', 'Pemodelan Numerik', 'Pengujian Bahan', 'Kalibrasi Alat'];
        // $this->layananData = array_merge(array_fill_keys($layananDefaults, 0), $layananDb);
        
        // Karena LayananData::pluck('name') ada di file Anda,
        // Solusi terbaik adalah **menjalankan Seeder** untuk data LayananData.
        // Jika LayananData::pluck('name') mengembalikan data, maka:
        $this->layananData = array_merge(array_fill_keys($layananNames, 0), $layananDb);

        // Inisialisasi Form
        $this->form->fill();
    }

    protected function getFormSchema(): array
    {
        return [
            // Schema Kosong
        ];
    }

    // Form 1: Layanan Data (Hanya mengembalikan array fields)
    public function getLayananFields(): array
    {
        $layananNames = LayananData::pluck('name')->toArray();
        $fields = array_map(function ($name) {
            return [
                'name' => $name, 
                'value' => $this->layananData[$name] ?? 0
            ];
        }, $layananNames);

        return $fields;
    }

    // Form 2: SDM Lab Data (Hanya mengembalikan array fields)
    public function getSdmLabFields(): array
    {
        $levels = ['S3', 'S2', 'S1', 'D3', 'SLTA'];
        $fields = array_map(function ($level) {
            return [
                'name' => $level, 
                'value' => $this->sdmLabData[$level] ?? 0
            ];
        }, $levels);

        return $fields;
    }
    
    // Form 3: Tugas Belajar (Hanya mengembalikan array fields)
    public function getSekolahFields(): array
    {
        $levels = ['S3', 'S2', 'S1'];
        $fields = array_map(function ($level) {
            return [
                'name' => $level, 
                'value' => $this->sekolahData[$level] ?? 0
            ];
        }, $levels);

        return $fields;
    }

    // --- Simpan Data ---
   public function submitLayanan(): void
{
    // Menggunakan data langsung dari properti Livewire $layananData
    $data = $this->layananData;
    
    foreach ($data as $name => $value) {
        LayananData::updateOrCreate(
            ['name' => $name],
            ['value' => $value]
        );
    }
    $this->sendSuccessNotification('Layanan Data');
    $this->mount(); // Refresh data setelah simpan
}

public function submitSdmLab(): void
{
    // Menggunakan data langsung dari properti Livewire $sdmLabData
    $data = $this->sdmLabData;
    
    foreach ($data as $name => $value) {
        SdmLabData::updateOrCreate(
            ['name' => $name],
            ['value' => $value]
        );
    }
    $this->sendSuccessNotification('Kualifikasi Pendidikan SDM Lab');
    $this->mount(); // Refresh data setelah simpan
}

public function submitSekolah(): void
{
    // Menggunakan data langsung dari properti Livewire $sekolahData
    $data = $this->sekolahData;
    
    foreach ($data as $name => $value) {
        SekolahData::updateOrCreate(
            ['name' => $name],
            ['value' => $value]
        );
    }
    $this->sendSuccessNotification('Peningkatan Kapasitas SDM (Tugas Belajar)');
    $this->mount(); // Refresh data setelah simpan
}
    
    protected function sendSuccessNotification(string $type): void
    {
        Notification::make()
            ->title("Berhasil disimpan!")
            ->body("Data {$type} berhasil diperbarui.")
            ->success()
            ->send();
    }
}
