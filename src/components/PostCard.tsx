"use client"
import { createComment, deletePost, getPosts, toggleLike } from "@/actions/post.action";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import toast from "react-hot-toast";

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number]

function PostCard({ post, dbUserId }: { post: Post; dbUserId: string | null }) {
    const { user } = useUser();
    const [newComment, setNewComment] = useState("");
    const [isCommenting, setIsCommenting] = useState(false);
    const [isLiking, setIsLiking] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasLiked, setHasLiked] = useState(post.likes.some((like) => like.userId === dbUserId));
    const [optimisticLikes, setOptmisticLikes] = useState(post._count.likes);
    const [showComments, setShowComments] = useState(false);

    const handleLike = async () => {
        if (isLiking) return 

        try {
            setIsLiking(true)
            setHasLiked(prev => !prev)
            setOptmisticLikes(prev => prev + (hasLiked ? -1 : 1))
            await toggleLike(post.id)
        } catch (error) {
            setOptmisticLikes(post._count.likes)
            setHasLiked(false)
        } finally {
            setIsLiking(false)
        }
    };
      const handleDeletePost = async () => {
        if (isDeleting) return;
        try {
          setIsDeleting(true);
          const result = await deletePost(post.id);
          if (result.success) toast.success("Post deleted successfully");
          else throw new Error(result.error);
        } catch (error) {
          toast.error("Failed to delete post");
        } finally {
          setIsDeleting(false);
        }
      };

    

    return <div>PostCard</div>
}

export default PostCard;