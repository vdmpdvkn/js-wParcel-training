export function dataCreate(evt) {
  const { taskName, taskText } = evt.currentTarget.elements;

  if (!taskName.value.trim() || !taskText.value.trim()) {
    alert('fill all fields');
    return;
  }
  const data = {
    id: Date.now(),
    name: taskName.value.trim(),
    text: taskText.value.trim(),
  };
  return data;
}
