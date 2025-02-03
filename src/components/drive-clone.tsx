"use client";

import React, { useState } from "react";
import { type FileItem, mockData } from "../../types";
import {
  FileIcon,
  FolderIcon,
  ImageIcon,
  VideoIcon,
  ChevronRight,
} from "lucide-react";
import { Button } from "~/components/ui/button";

const DriveClone: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>(mockData);
  const [currentFolder, setCurrentFolder] = useState<FileItem | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<FileItem[]>([]);

  const handleUpload = () => {
    const newFile: FileItem = {
      id: `${Date.now()}`,
      name: `New File ${files.length + 1}.txt`,
      type: "document",
      parent: currentFolder?.id,
    };
    setFiles((prev) => [...prev, newFile]);
  };

  const renderIcon = (type: FileItem["type"]) => {
    switch (type) {
      case "folder":
        return <FolderIcon className="h-5 w-5 text-blue-400" />;
      case "document":
        return <FileIcon className="h-5 w-5 text-gray-400" />;
      case "image":
        return <ImageIcon className="h-5 w-5 text-green-400" />;
      case "video":
        return <VideoIcon className="h-5 w-5 text-red-400" />;
    }
  };

  const navigateToFolder = (folder: FileItem) => {
    setCurrentFolder(folder);
    setBreadcrumbs((prev) => [...prev, folder]);
  };

  const navigateToBreadcrumb = (index: number) => {
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
    setBreadcrumbs(newBreadcrumbs);
    setCurrentFolder(newBreadcrumbs[newBreadcrumbs.length - 1] ?? null);
  };

  const getCurrentFiles = () => {
    if (!currentFolder) return files;
    return currentFolder.children ?? [];
  };

  return (
    <div className="p-4 text-gray-200">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Google Drive Clone</h1>
        <Button onClick={handleUpload} variant="outline">
          Upload
        </Button>
      </div>
      <div className="mb-4 flex items-center text-sm">
        <Button
          variant="ghost"
          className="h-auto p-1"
          onClick={() => navigateToBreadcrumb(-1)}
        >
          My Drive
        </Button>
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.id}>
            <ChevronRight className="mx-1 h-4 w-4" />
            <Button
              variant="ghost"
              className="h-auto p-1"
              onClick={() => navigateToBreadcrumb(index)}
            >
              {item.name}
            </Button>
          </React.Fragment>
        ))}
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentFiles().map((item) => (
              <tr
                key={item.id}
                className="cursor-pointer hover:bg-gray-700"
                onClick={() => item.type === "folder" && navigateToFolder(item)}
              >
                <td className="flex items-center p-2">
                  {renderIcon(item.type)}
                  <span className="ml-2">
                    {item.type === "folder" ? (
                      item.name
                    ) : (
                      <a
                        href={`#file-${item.id}`}
                        className="text-blue-400 hover:underline"
                      >
                        {item.name}
                      </a>
                    )}
                  </span>
                </td>
                <td className="p-2 capitalize">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriveClone;
