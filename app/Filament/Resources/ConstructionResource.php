<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ConstructionResource\Pages;
use App\Filament\Resources\ConstructionResource\RelationManagers;
use App\Models\Construction;
use Filament\Forms;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ConstructionResource extends Resource
{
    protected static ?string $model = Construction::class;

    protected static ?string $navigationIcon = 'heroicon-o-wrench-screwdriver';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Section::make('General Info')->schema([
                Grid::make(2)->schema([
                    TextInput::make('domain')
                        ->disabled()
                        ->dehydrated()
                        ->default(fn() => request()->getHost()),

                    TextInput::make('title')
                        ->label('Title')
                        ->default('Under Construction'),

                    FileUpload::make('logo_path')
                        ->label('Website Logo')
                        ->image()
                        ->multiple()
                        ->reorderable()
                        ->panelLayout('grid')
                        ->uploadingMessage('Uploading attachment...')
                        ->directory('logos')
                        ->columnSpanFull(),

                    RichEditor::make('content')
                        ->label('Page Content')
                        ->columnSpanFull(),
                ]),
            ]),

            Section::make('Social Links')->schema([
                Repeater::make('social_links')
                    ->label('Add Social Media Links')
                    ->schema([
                        Select::make('platform')
                            ->label('Platform')
                            ->options([
                                'facebook' => 'Facebook',
                                'twitter' => 'Twitter',
                                'linkedin' => 'LinkedIn',
                                'youtube' => 'YouTube',
                                'instagram' => 'Instagram',
                            ])
                            ->required(),

                        TextInput::make('title')
                            ->label('Name')
                            ->required(),
                        TextInput::make('url')
                            ->label('URL')
                            ->url()
                            ->required(),
                    ])
                    ->defaultItems(1)
                    ->columnSpanFull(),
            ]),

            Section::make('Appearance')->schema([
                Grid::make(2)->schema([
                    Select::make('bg_color')
                        ->label('Background Color')
                        ->options([
                            'bg-white' => 'White',
                            'bg-black' => 'Black',
                            'bg-blue-600' => 'Blue',
                            'bg-gray-900' => 'Dark Gray',
                            'bg-gradient-to-r from-purple-500 to-pink-500' => 'Purple-Pink Gradient',
                        ]),

                    Select::make('text_color')
                        ->label('Text Color')
                        ->options([
                            'text-black' => 'Black',
                            'text-white' => 'White',
                            'text-gray-700' => 'Gray',
                            'text-blue-300' => 'Blue Light',
                        ]),

                    Toggle::make('has_countdown')
                        ->label('Enable Countdown Timer'),
                ]),
            ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('domain'),
                Tables\Columns\IconColumn::make('has_countdown')->boolean(),
            ])
            ->defaultSort('id', 'desc')
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
            'index' => Pages\ListConstructions::route('/'),
            'create' => Pages\CreateConstruction::route('/create'),
            'edit' => Pages\EditConstruction::route('/{record}/edit'),
        ];
    }
}
