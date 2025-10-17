<x-filament::page>

<div class="space-y-6">

{{-- Form 1: Layanan Data --}}
<x-filament::card>
    <h3 class="text-xl font-bold mb-4">1. Data Pengelola Layanan Utama</h3>
    <form wire:submit.prevent="submitLayanan">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {{-- Looping menggunakan array dari properti LayananData --}}
            @foreach($layananData as $name => $value)
                {{-- Menggunakan struktur HTML Filament standard agar styling konsisten --}}
                <div class="filament-forms-field-wrapper"> 
                    <div class="space-y-2">
                        <label for="layanan-{{ $name }}" class="filament-forms-field-wrapper-label text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                            Jumlah Ahli di: {{ $name }}
                        </label>
                        <div class="filament-forms-input-wrapper">
                            <input 
                                id="layanan-{{ $name }}"
                                type="number" 
                                {{-- wire:model.defer digunakan agar data hanya diperbarui saat submit --}}
                                wire:model.defer="layananData.{{ $name }}"
                                required
                                class="filament-forms-input block w-full transition duration-75 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 disabled:opacity-70 dark:bg-gray-700 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 border-gray-300 dark:border-gray-600"
                            />
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="mt-4">
            <x-filament::button type="submit">
                Simpan Data Layanan
            </x-filament::button>
        </div>
    </form>
</x-filament::card>

{{-- Form 2: SDM Lab (Kualifikasi Pendidikan) --}}
<x-filament::card>
    <h3 class="text-xl font-bold mb-4">2. Data Kualifikasi Pendidikan SDM Lab</h3>
    <form wire:submit.prevent="submitSdmLab">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @foreach($sdmLabData as $level => $value)
                 <div class="filament-forms-field-wrapper"> 
                    <div class="space-y-2">
                        <label for="sdmlab-{{ $level }}" class="filament-forms-field-wrapper-label text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                            Jumlah SDM: {{ $level }}
                        </label>
                        <div class="filament-forms-input-wrapper">
                            <input 
                                id="sdmlab-{{ $level }}"
                                type="number" 
                                wire:model.defer="sdmLabData.{{ $level }}"
                                required
                                class="filament-forms-input block w-full transition duration-75 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 disabled:opacity-70 dark:bg-gray-700 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 border-gray-300 dark:border-gray-600"
                            />
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="mt-4">
            <x-filament::button type="submit">
                Simpan Data Kualifikasi Lab
            </x-filament::button>
        </div>
    </form>
</x-filament::card>

{{-- Form 3: Tugas Belajar --}}
<x-filament::card>
    <h3 class="text-xl font-bold mb-4">3. Data Peningkatan Kapasitas (Tugas Belajar)</h3>
    <form wire:submit.prevent="submitSekolah">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @foreach($sekolahData as $level => $value)
                <div class="filament-forms-field-wrapper"> 
                    <div class="space-y-2">
                        <label for="sekolah-{{ $level }}" class="filament-forms-field-wrapper-label text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                            Tugas Belajar: {{ $level }}
                        </label>
                        <div class="filament-forms-input-wrapper">
                            <input 
                                id="sekolah-{{ $level }}"
                                type="number" 
                                wire:model.defer="sekolahData.{{ $level }}"
                                required
                                class="filament-forms-input block w-full transition duration-75 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 disabled:opacity-70 dark:bg-gray-700 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 border-gray-300 dark:border-gray-600"
                            />
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="mt-4">
            <x-filament::button type="submit">
                Simpan Data Tugas Belajar
            </x-filament::button>
        </div>
    </form>
</x-filament::card>


</div>
</x-filament::page>