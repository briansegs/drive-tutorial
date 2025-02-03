export type FileType = "folder" | "document" | "image" | "video"

export interface FileItem {
  id: string
  name: string
  type: FileType
  children?: FileItem[]
  parent?: string
}

export const mockData: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      { id: "2", name: "Report.docx", type: "document", parent: "1" },
      { id: "3", name: "Presentation.pptx", type: "document", parent: "1" },
    ],
  },
  {
    id: "4",
    name: "Images",
    type: "folder",
    children: [
      { id: "5", name: "Vacation.jpg", type: "image", parent: "4" },
      { id: "6", name: "Family.png", type: "image", parent: "4" },
    ],
  },
  { id: "7", name: "Video.mp4", type: "video" },
]

