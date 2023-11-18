<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\EventImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::all();
        return Inertia::render('Admin/Event', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/EventCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
        ]);

        $event = new Event();
        $event->name = $validatedData['name'];
        $event->description = $validatedData['description'];

        $event->save();

        $directoryUrl = URL::to('/admin/events');

        return Inertia::location($directoryUrl);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $event = Event::findOrFail($id);
        $eventImage = $event->image;
        
        return Inertia::render('Admin/EventEdit', compact('event', 'eventImage'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($request);
        $event = Event::findOrFail($id);
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
        ]);

        $event->name = $validatedData['name'];
        $event->description = $validatedData['description'];

        $event->save();

        $directoryUrl = URL::to('/admin/events');

        return Inertia::location($directoryUrl);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $event = Event::findOrFail($id);

        $event->delete();
        
        $directoryUrl = URL::to('/admin/events');

        return Inertia::location($directoryUrl);
    }

    public function createImage(Request $request, string $id) 
    {
        // dd($request);
        $event = Event::findOrFail($id);
        $request->validate([
            'image' => 'required|image|file|max:5120|mimes:jpeg,png,jpg,gif,webp',
        ]);

        $existingEventImage = $event->image; // Assuming 'image' is the relationship

        if ($existingEventImage) {
            // If an image already exists, update it
            Storage::disk('public')->delete($existingEventImage->image); // Delete existing image file
    
            $imagePath = $request->file('image')->store('images/events', 'public');
            $existingEventImage->update(['image' => $imagePath]);
        } else {
            // If no image exists, create a new one
            $imagePath = $request->file('image')->store('images/events', 'public');
            $eventImage = new EventImage(['image' => $imagePath]);
            $event->image()->save($eventImage);
        }

        // $imagePath = $request->file('image')->store('images/events', 'public');
        // $eventImage = new EventImage(['image' => $imagePath]);
        // $event->image()->save($eventImage);

        $directoryUrl = URL::to('/admin/events');

        return Inertia::location($directoryUrl);
    }
}
