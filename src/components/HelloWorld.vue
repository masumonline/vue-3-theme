<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="card bordered">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" class="mask mask-diamond" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          Top image
          <div class="badge mx-2 badge-secondary">NEW</div>
        </h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div class="justify-end card-actions">
          <button class="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
    <div class="card bordered">
      <div class="card-body">
        <h2 class="card-title">Image bottom</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div class="card-actions">
          <button class="btn btn-primary">Login</button>
          <button class="btn btn-ghost">Register</button>
        </div>
      </div>
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
    </div>
    <div class="card bordered">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" class="w-full mask mask-heart" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Small image file</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div class="card-actions">
          <div class="badge badge-ghost">Article</div>
          <div class="badge badge-ghost">Photography</div>
        </div>
      </div>
    </div>
    <div class="card shadow-2xl lg:card-side bg-primary text-primary-content">
      <div class="card-body">
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">
            More info

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 ml-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="card shadow-2xl lg:card-side bg-secondary text-secondary-content"
    >
      <div class="card-body">
        <div class="justify-end card-actions">
          <button class="btn btn-secondary btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
      </div>
    </div>
    <div
      class="
        card
        text-center
        shadow-2xl
        lg:card-side
        bg-accent
        text-accent-content
      "
    >
      <div class="card-body">
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
        <div class="justify-center card-actions">
          <button class="btn btn-accent">Start now</button>
          <button class="btn btn-accent">More info</button>
        </div>
      </div>
    </div>
    <button class="btn btn-primary">daisyUI Button</button>

    <span class="font-mono text-6xl countdown">
      <span style="--value: 60"></span>
    </span>

    <div class="m-6 indicator">
      <div class="indicator-item badge badge-primary">new</div>
      <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {},
};
</script>