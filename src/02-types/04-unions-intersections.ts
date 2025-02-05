// Unions and Intersections in TypeScript
// media lib system example

// basic union types 
type ID = string | number;
const userId: ID = "user12345"

// media types using unions
type MediaType = "video" | "audio" | "image";

type VideoQuality = "480p" | "720p" | "1080p" | "4K";

type AudioQuality = "low" | "medium" | "high" | "lossless";


// Base interfaces for common properties for all media types
interface MediaBase {
    id: ID;
    title: string;
    dateUploaded: Date;
    size: number; //in kb
    tags: string[];
}

// specific media interfaces
interface VideoMedia {
    type: "video";
    duration: number;
    quality: VideoQuality;
    hasSubtitles: boolean;
    thumbnails: string[];

}

interface AudioMedia {
    type: "audio";
    duration: number; // in seconds
    quality: AudioQuality;
    artist: string;
    album?: string;
}

interface ImageMedia {
    type: "image";
    width: number;
    height: number;
    format: "jpg" | "png" | "gif" | "webp";
    altText?: string;
}


// union of media types => combines different media types into one type
// media item can be any of these types
type MediaItem = (VideoMedia | AudioMedia | ImageMedia) & MediaBase


// practical example using the types

class MediaLibrary {
    private items: MediaItem[] = [];
    
    addItem(item: MediaItem) {
        this.items.push(item)
    }
    
    // type guard function => it basicely see and check if a variable is a specific type to let typescript know it's safe to use that type's properties
    private isVideo(item: MediaItem): item is MediaBase & VideoMedia {
        return item.type === "video";
    }

    private isAudio(item: MediaItem): item is MediaBase & AudioMedia {
        return item.type === "audio";
    }

    // get all videos in specific quality 
    getVideosByQuality(quality: VideoQuality): (MediaBase & VideoMedia)[] {
        return this.items.filter(
            (item): item is MediaBase & VideoMedia => 
                this.isVideo(item) && item.quality === quality
        );
    }

     // get total duration of all media
    getTotalDuration(): number {
        return this.items.reduce((total, item) => {
            if (this.isVideo(item) || this.isAudio(item)) {
                return total + item.duration;
            }
            return total;
        }, 0);
    }

     // search media by tag
    searchByTag(tag: string): MediaItem[] {
        return this.items.filter(item => 
            item.tags.includes(tag.toLowerCase())
        );
    }
}

// the example media usage 
const library = new MediaLibrary();
// add video
library.addItem({
    id: "vid_1",
    type: "video",
    title: "TypeScript tutorial",
    dateUploaded: new Date(),
    size: 1024 * 1024 * 50, // 50mb
    duration: 600, // 600s => 10 min
    quality: "1080p",
    thumbnails: ["thumb1.jpg", "thumb2.jpg"],
    hasSubtitles: true,
    tags: ["programming", "typescript", "tutorial"]
});
// add audio
library.addItem({
    id: "aud_1",
    type: "audio",
    title: "TypeScript podcast",
    dateUploaded: new Date(),
    size: 1024 * 1024 * 5, // 5mb
    duration: 1800, // 30 min
    quality: "high",
    artist: "Tech Talks",
    tags: ["podcast", "typescript", "programming"]
});
// add  image
library.addItem({
    id: "img_1",
    type: "image",
    title: "TypeScript logo",
    dateUploaded: new Date(),
    size: 1024 * 50, // 50kb
    width: 1920,
    height: 1080,
    format: "png",
    altText: "TypeScript Programming Language Logo",
    tags: ["logo", "typescript"]
});

// calling and testing 

console.log("\n=== media library examples ===\n");

// Get all 1080p videos
const hdVideos = library.getVideosByQuality("1080p");
console.log("HD videos:", hdVideos.map(v => v.title));

// Get total duration of all media
const totalDuration = library.getTotalDuration();
console.log("Total duration (seconds):", totalDuration);

// Search by tag
const typescriptContent = library.searchByTag("typescript");
console.log("TypeScript content:", 
    typescriptContent.map(item => ({
        title: item.title,
        type: item.type
    }))
);