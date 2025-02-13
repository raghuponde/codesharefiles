The Adapter Design Pattern allows incompatible interfaces to work together. It acts as a bridge between two classes, adapting the interface of a class into another interface that the client expects. This is particularly useful when working with legacy code or external libraries that don’t match your system’s existing interfaces.

Real-World Example: Adapter Pattern
Let’s assume we are building an application for a media player that can play audio files. Initially, it only supports MP3 files, but now we need to extend it to support other formats like MP4 and VLC files without changing the existing code. We can use the Adapter Pattern to adapt the interface of new file formats into a format that our media player understands.

create one folder with the name Day12Projects and in that write the command

dotnet new console -o adapterdemo --use-program-main

one by one check the codes and fill it i will not tell u again how to add class or interface it is same if u have added extesnion of C# extensions 
then automatically namespaces it will add 
    
    
Code Example: Adapter Pattern in C#
Step 1: Define the Target Interface (Existing Interface)
This interface defines the common operation for playing audio files.

// Target Interface: Media Player
public interface IMediaPlayer
{
    void Play(string audioType, string fileName);
}


Step 2: Implement a Class for the Existing Functionality
Here, we have a concrete class that implements IMediaPlayer and can only play MP3 files.


// Concrete class for playing MP3 files
public class AudioPlayer : IMediaPlayer
{
    public void Play(string audioType, string fileName)
    {
        if (audioType.ToLower() == "mp3")
        {
            Console.WriteLine("Playing mp3 file: " + fileName);
        }
        else
        {
            Console.WriteLine($"Invalid media: {audioType} format not supported.");
        }
    }
}


Step 3: Define the Adaptee (New Functionality)
These are the new classes that represent the media formats we want to adapt into our media player, such as VLC and MP4.

// Class for playing VLC files
public class VLCPlayer
{
    public void PlayVLC(string fileName)
    {
        Console.WriteLine("Playing VLC file: " + fileName);
    }
}

// Class for playing MP4 files
public class MP4Player
{
    public void PlayMP4(string fileName)
    {
        Console.WriteLine("Playing MP4 file: " + fileName);
    }
}


Step 4: Create the Adapter Class
The adapter will implement the IMediaPlayer interface and internally call the appropriate methods of the adaptee classes (VLCPlayer, MP4Player).

// Adapter Class that adapts VLCPlayer and MP4Player to the IMediaPlayer interface
public class MediaAdapter : IMediaPlayer
{
    private VLCPlayer _vlcPlayer;
    private MP4Player _mp4Player;

    public MediaAdapter(string audioType)
    {
        if (audioType.ToLower() == "vlc")
        {
            _vlcPlayer = new VLCPlayer();
        }
        else if (audioType.ToLower() == "mp4")
        {
            _mp4Player = new MP4Player();
        }
    }

    public void Play(string audioType, string fileName)
    {
        if (audioType.ToLower() == "vlc")
        {
            _vlcPlayer?.PlayVLC(fileName);
        }
        else if (audioType.ToLower() == "mp4")
        {
            _mp4Player?.PlayMP4(fileName);
        }
    }
}


Step 5: Modify the Existing Class to Use the Adapter
Now, we modify the AudioPlayer to use the adapter when it encounters a media type other than MP3.

// Updated AudioPlayer class that can now play VLC and MP4 files using the adapter
public class AudioPlayerWithAdapter : IMediaPlayer
{
    private MediaAdapter _mediaAdapter;

    public void Play(string audioType, string fileName)
    {
        // Play mp3 file directly
        if (audioType.ToLower() == "mp3")
        {
            Console.WriteLine("Playing mp3 file: " + fileName);
        }
        // Use adapter for other file formats
        else if (audioType.ToLower() == "vlc" || audioType.ToLower() == "mp4")
        {
            _mediaAdapter = new MediaAdapter(audioType);
            _mediaAdapter.Play(audioType, fileName);
        }
        else
        {
            Console.WriteLine($"Invalid media: {audioType} format not supported.");
        }
    }
}


Step 6: Client Code
Here’s how the client can use the updated AudioPlayerWithAdapter to play various media formats.

class Program
{
    static void Main(string[] args)
    {
        IMediaPlayer player = new AudioPlayerWithAdapter();

        // Playing various formats
        player.Play("mp3", "song.mp3");
        player.Play("mp4", "video.mp4");
        player.Play("vlc", "movie.vlc");
        player.Play("avi", "unsupported.avi");

        Console.ReadLine();
    }
}


outputs 
-----------

Playing mp3 file: song.mp3
Playing MP4 file: video.mp4

Playing VLC file: movie.vlc
Invalid media: avi format not supported.


Explanation:
Target Interface (IMediaPlayer):

The IMediaPlayer interface defines the method Play(), which the client uses to play audio files. This interface is what the client expects to work with.
Adaptee (VLCPlayer, MP4Player):

These are the new classes that need to be adapted to fit into the existing system. They have their own methods (PlayVLC, PlayMP4) that don’t match the IMediaPlayer interface.
Adapter (MediaAdapter):

The adapter implements the IMediaPlayer interface and internally delegates the calls to the correct adaptee (VLCPlayer or MP4Player). This allows the new media formats to be played using the same interface that the client is already using.
Client (AudioPlayerWithAdapter):

The AudioPlayerWithAdapter class can now handle new file formats by delegating to the MediaAdapter when it encounters a file format other than MP3. The client code remains unchanged.

