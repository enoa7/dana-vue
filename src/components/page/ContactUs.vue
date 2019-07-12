<template>
  <div class="section p-0">
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="hero pb-0">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Contact Us</h1>
                <div class="hero-content is-hidden-phablet">
                  <figure class="image">
                    <img src="@/assets/image/contact.png" alt="contact" />
                  </figure>
                  <p class="title is-3">1-500-445</p>
                </div>
                <div class="hero-footer is-hidden-phablet">
                  <p>
                    Or kindly fill out this form, we’ll get back to you as
                    quickly as possible
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="section pt-0">
            <div class="container">
              <div class="field">
                <label class="label is-medium">Name</label>
                <div class="control">
                  <input
                    class="input is-medium"
                    type="text"
                    placeholder="e.g Alex Smith"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label is-medium">Email</label>
                <div class="control">
                  <input
                    class="input is-medium"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label is-medium">Message</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="e.g. Hello world"
                  ></textarea>
                </div>
              </div>

              <div class="field pt-3">
                <div class="control">
                  <button class="button is-link submit-btn is-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="column">
          <section class="pb-0">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Customer Support</h1>
                <div class="hero-content is-hidden-mobile">
                  <figure class="image">
                    <img src="@/assets/image/contact.png" alt="contact" />
                  </figure>
                  <p class="title is-3">1-500-445</p>
                </div>
                <div class="hero-footer is-hidden-mobile">
                  <p>
                    Contact our customer support or email us at
                    <span class="color-azure bold">help@dana.id</span> if you
                    need help
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="pb-0">
            <div class="container px-4">
              <h2 class="title">Social Media</h2>
              <p>
                Feel free to contact us at one of out social media outlets below
              </p>
              <ul class="sosmed-list">
                <li>
                  <i class="fa fa-facebook-official fa-2x color-azure"></i>
                </li>
                <li>
                  <i class="fa fa-instagram fa-2x color-azure"></i>
                </li>
                <li>
                  <i class="fa fa-twitter fa-2x color-azure"></i>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-content {
  display: flex;
  align-items: center;

  .title {
    color: #108ee9;
    font-weight: bold;
    padding-left: 1rem;
  }
}
.hero .image {
  width: 48px;
  height: 48px;

  img {
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
}

.hero-footer {
  margin-top: 1.5rem;
}

label {
  color: $text-color;
  font-weight: normal;
}

.submit-btn {
  width: 100%;
}

.is-hidden-phablet {
  @media screen and (min-width: 768px) {
    display: none;
  }
}

// TODO make a component out of this
.sosmed-list {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
    li {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}

// TODO: Move to util class
.justify-content-evenly {
  justify-content: space-evenly;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-around {
  justify-content: space-around;
}

.color-azure {
  color: $azureRadiance;
}

.bold {
  font-weight: bold;
}
</style>
