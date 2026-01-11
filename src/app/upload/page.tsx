"use client"

import { useState } from "react"

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setPreview(URL.createObjectURL(e.target.files![0]))
        }
      />

      {preview && (
        <img src={preview} className="mt-6 w-40 h-40 rounded-full" />
      )}
    </div>
  )
}
