<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Event extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function image() {
        return $this->hasOne(EventImage::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($event) {
            // Delete the associated image when the event is being deleted
            if ($event->image) {
                Storage::disk('public')->delete($event->image->image);
                $event->image->delete(); // Delete the image record
            }
        });
    }
}
