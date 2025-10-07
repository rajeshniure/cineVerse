import React, { createContext, useContext, useState, useEffect } from "react";

type BookmarkContextType = {
  bookmarks: string[];
  toggleBookmark: (title: string) => void;
  isBookmarked: (title: string) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  //Save to localStorage when bookmarks change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Add or remove bookmark
  const toggleBookmark = (title: string) => {
    setBookmarks((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isBookmarked = (title: string) => bookmarks.includes(title);

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// Custom hook for easy access
export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) throw new Error("useBookmark must be used inside BookmarkProvider");
  return context;
};
