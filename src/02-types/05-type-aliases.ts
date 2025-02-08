// type aliases  in typeScript
// social media app example

// basic type aliases
type UserID = string;
type PostID = string;
type Timestamp = number;
type AppURL = string;

// complex type aliases
type UserStatus = "online" | "offline" | "away" | "busy";

type Visibility = "public" | "private" | "friends";

type ReactionType = "like" | "dislike" | "laugh" | "sad" | "angry";

// object type aliases 
type UserProfile = {
    id: UserID;
    username: string;
    email: string;
    status: UserStatus;
    followers: number;
    following: number;
    joinDate: Date;
    profilePicture?: AppURL;
};

type Post = {
    id: PostID;
    authorId: UserID;
    content: string;
    images?: URL[];
    visibility: Visibility;
    createdAt: Timestamp;
    editedAt?: Timestamp;
    reactions: Map<ReactionType, number>;
}


// nested type aliases => // types that reference other type aliases
 
type AppComment = {
    id: string;
    postId: PostID;
    authorId: UserID;
    content: string;
    CreatedAt: Timestamp;
    reactions: Map<ReactionType, number>;
}

type SocialPost = Post & {
    comments: AppComment[];
    shares: number;
}


// functions types aliases 
// aliases for function signatures

type PostFilter = (post: Post) => boolean;
type PostTransformer = (post: Post) => SocialPost;
type ReactionHandler = (postId: PostID, reaction: ReactionType) => void;


// generic type aliases =>  type aliases that can work with different types

type Collection<T> = {
    items: T[];
    add: (item: T) => void;
    remove: (item: T) => void;
    find: (predicate: (item: T) => boolean) => T | undefined;
}


//  using the social media app
class SocialMediaApp {
    private users: Map<UserID, UserProfile> = new Map();
    private posts: Map<PostID, SocialPost> = new Map();

    // add new user
    addUser(profile: UserProfile): void {
        this.users.set(profile.id, profile)
    }

    // create post
    createPost(post: Post): SocialPost {
        const socialPost: SocialPost = {
            ...post,
            comments: [],
            shares: 0
        };
        this.posts.set(post.id, socialPost);
        return socialPost;
    }

    // add reaction to post 👍
    addReaction(postId: PostID, reaction: ReactionType): void {
        const post = this.posts.get(postId);
        if (post) {
            const currentCount = post.reactions.get(reaction) || 0;
            post.reactions.set(reaction, currentCount + 1); 
        }
    }

    // filter posts
    filterPosts(filter: PostFilter): SocialPost[] {
        return Array.from(this.posts.values()).filter(filter);
    }
}


//  calling the functions & classes and testing them
const App = new SocialMediaApp();


// create user
const user: UserProfile = {
    id: "user123",
    email: "marwan@gg.com",
    username: "ka1234",
    status: "online",
    followers: 100,
    following: 50,
    joinDate: new Date(),
    profilePicture: "https://example.com/pic.jpg"
}

// create post 
const post: Post = {
    id: "post123",
    authorId: user.id,
    content: "learning typeScript type aliases!",
    visibility: "public",
    createdAt: Date.now(),
    reactions: new Map([
        ["like", 0],
        ["dislike", 0]
    ])
};


// calling and testing 
console.log("\n=== social media app examples ===\n");

// add user and create post
App.addUser(user)
const socialPost = App.createPost(post)

// add reactions ):
App.addReaction(post.id, "like")
App.addReaction(post.id, "dislike")

// filter posts by visibility 
const publicPosts = App.filterPosts((post)=> post.visibility === "public")


console.log("user profile:", user);
console.log("social post:", socialPost);
console.log("public posts:", publicPosts);