
// Create bucket

// Configure bucket poilcy

// Create user with permissions on bucket (use this user for uploads to generate presigned url)


const uploadFile = async (e) => {
  const file = e.target.files?.[0]
  const filename = encodeURIComponent(file.name)
  const fileType = encodeURIComponent(file.type)

  const res = await fetch(
    `/api/upload_config?file=${filename}&fileType=${fileType}`
  )
  const { url, fields } = await res.json()
  const formData = new FormData()

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value)
  })

  const upload = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  if (upload.ok) {
    console.log('Uploaded successfully!')
  } else {
    console.error('Upload failed.')
  }
}

export default function Upload() {
  return (
    <>
      <p>Upload .xlsx config file (max 1MB).</p>
      <input type="file" name='file_upload' onChange={uploadFile} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
      <p>Files will automatically upload and download</p>
    </>
  )
}
