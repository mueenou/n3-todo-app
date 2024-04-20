<template>
  <div>
    <div class="w-80 block m-auto flex flex-col gap-y-5">
      <div
        id="todo-tracker"
        class="flex flex-row flex-justify-between ring ring-red rounded-3xl p10"
      >
        <div class="line-height-[0px]">
          <h2 class="font-extrabold">To do list</h2>
          <p class="font-light text-sm">Keep it up</p>
        </div>
        <div
          id="todo-counter"
          class="bg-red h20 w20 rounded-full grid place-content-center text-black text-2xl"
        >
          <p class="font-extrabold">
            <!-- number of done tasks / total tasks -->
            {{ tasks.filter((task) => task.isDone === true).length }}/{{ tasks.length }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-row flex-justify-between w-[90%] gap-x-1 items-center mx-auto"
      >
        <input
          type="text"
          name="new_todo_input"
          id="new-todo"
          placeholder="write your next task"
          v-model="newTaskName"
          class="w-full h-10 rounded-full border-none px-2 bg-base text-sm font-900 placeholder-gray-400"
          @keyup.enter="addTask"
        />
        <button
          @click="addTask"
          class="w15 h12 bg-red rounded-full grid place-content-center cursor-pointer border-none"
        >
          <p class="text-2xl text-black font-extrabold">+</p>
        </button>
      </div>
      <div class="flex flex-col text-xl gap-y-2 w-[95%]">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="flex flex-row items-center p2 flex-justify-between w-full bg-base rounded-2xl"
        >
          <div class="flex flex-row gap-x-2 items-center h10">
            <div
              id="checkbox"
              :class="
                task.isDone ? 'i-carbon-circle-filled bg-red' : 'i-carbon-circle-dash'
              "
              class="cursor-pointer duration-300"
              @click="toggleTaskStatus(task.id)"
            ></div>
            <div
              v-if="!task.isEditing"
              id="task_name"
              :class="task.isDone ? 'decoration-line-through decoration-red' : ''"
              class="font-900 duration-500"
            >
              {{ task.name }}
            </div>
            <input
              type="text"
              v-show="task.isEditing"
              class="border-box m-0 border-none border-b-black bg-base outline-none"
              ref="editTaskInput"
              v-model="editTaskValue"
            />
          </div>
          <div class="flex-auto"></div>
          <div
            id="actions_div"
            class="flex flex-row items-center gap-x-2 cursor-pointer text-2xl"
          >
            <div
              :class="task.isEditing ? 'i-carbon-checkmark' : 'i-carbon-edit'"
              @click="
                if (task.isEditing) editTask(task.id);
                else toggleEditTask(task.id);
              "
            ></div>
            <div class="i-carbon-trash-can" @click="deleteTask(task.id)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tasks = ref([
  { id: 1, name: "Task 1", isDone: false, isEditing: false },
  { id: 2, name: "Task 2", isDone: true, isEditing: false },
  { id: 3, name: "Task 3", isDone: false, isEditing: false },
  { id: 4, name: "Task 4", isDone: true, isEditing: false },
]);

const newTaskName = ref("");

function addTask() {
  if (!newTaskName.value) {
    alert("Please enter a task name");
    return;
  }
  tasks.value.push({
    id: tasks.value.length + 1,
    name: newTaskName.value,
    isDone: false,
    isEditing: false,
  });
  newTaskName.value = "";
}

function toggleTaskStatus(taskId) {
  const task = tasks.value.find((task) => task.id === taskId);
  task.isDone = !task.isDone;
}

function deleteTask(taskId) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId);
}

const editTaskInput = ref<HTMLInputElement>(null);
const editTaskValue = ref<string>("");
function toggleEditTask(taskId) {
  const task = tasks.value.find((task) => task.id === taskId);
  task.isEditing = !task.isEditing;
}

function editTask(taskId) {
  const task = tasks.value.find((task) => task.id === taskId);
  task.name = editTaskValue.value;
  task.isEditing = false;
}
</script>
