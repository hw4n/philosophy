import React from 'react'

function CreateForm() {
  return (
    <div className="after-header">
      <div className="formWrap">
        <label for="phrase">Someone said...</label>
        <input type="text" id="phrase" name="phrase" required placeholder="Never gonna give you up"/>
        <label for="said-by">(Optional) It was said by...</label>
        <input type="text" id="said-by" name="said-by" placeholder="Rick Astley"/>
        <button type="submit">Create new philosophy!</button>
      </div>
    </div>
  )
}

export default CreateForm
