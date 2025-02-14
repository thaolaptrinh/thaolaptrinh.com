<template>
  <div class="c4a0m cr8w3 cpqam c94qd clwia c6969 c9xin ci4j9 cr7br">
    <!-- Middle area -->
    <div class="c4a0m">
      <div class="c8b8k">
        <section>
          <!-- Page title -->
          <h1 class="ciz93 cme53 cpynq">
            Hi. I'm Thao
            <span
              class="c5c77 cz5kb chugl c4ezg c8xm0 c6esp cfsb7 csd7h cdaqi c3ntq cofz6"
              >@thaolaptrinh</span
            >
            🤟
          </h1>
          <!-- Page content -->
          <div class="cr8w3 c2bb0 cxslc">
            <div class="c9gi4">
              <h2 class="cjvvo cpynq cg0ht cxmc9">{{ $t("short_bio") }}</h2>
              <p>
                I'm a software engineer with more than 10 years of experience in
                a variety of domains. For the past few years, I've focused on
                highload server-side projects, distributed systems, and platform
                development - tinkering with infrastructure, all things
                containers and Cloud Native.
              </p>
              <p>
                While there isn't a Wikipedia page about me (sorry folks!), a
                media bio is available below.
              </p>
            </div>
            <div class="c9gi4">
              <h2 class="cjvvo cpynq cg0ht cxmc9">{{ $t('career') }}</h2>
              <p>
                In my role as a Senior Software Engineer for Google Chrome, I am
                responsible for developing and maintaining the
                <a class="cnp10 chugl cm6cq" href="#0">Chrome Web Browser</a>.
              </p>
              <p>
                My work involves developing and testing new features, optimizing
                performance and security, and ensuring the browser works for
                users around the world. I also work closely with other Google
                teams ensure Chrome is well-integrated with other
                <a class="cnp10 chugl cm6cq" href="#0">Google</a> products and
                services.
              </p>
              <p>
                As CTO of AppForYou,
                <strong class="cnp10 cg0ht cxmc9"
                  >I am responsible for leading</strong
                >
                the technical teamand developing the company's technology
                strategy. I work closely with the engineering team to ensure
                that the products and services we provide are secure.
              </p>
            </div>

            <!-- Work Experience -->
            <widgets-blog-experience :experience />

            <div class="c9gi4">
              <h2 class="cjvvo cpynq cg0ht cxmc9">{{ $t('let_connect') }}</h2>
              <p>
                I'm excited to connect with others via
                <a class="cnp10 chugl cm6cq" href="#0">email</a> and
                <a class="cnp10 chugl cm6cq" href="#0">Twitter</a> to chat about
                projects and ideas. Currently, I'm not taking on freelance
                projects, but I am open to hearing about potential
                opportunities, discussing them with you and then potentially
                collaborating if it's a good fit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Right sidebar -->
    <aside class="csb3e cd6k2 cf0x4">
      <div class="c92wf">
        <!-- Subscribe widget -->
        <widgets-blog-subscribe />
      </div>
    </aside>
  </div>
</template>

<script setup>
const experience = [
  {
    company: "Reputyze Asia",
    startDate: "Sep 2023",
    endDate: "Feb 2024",
    role: "PHP Developer Intern",
    job: "Full-stack web development in real-world company projects. White label, set up projects using available PHP source code. Developed and debugged functionalities for CRM, Affiliate, and Clinic Chain Management. Implemented/debugged UI features and components (PHP, Laravel, Codeigniter).",
  },
];
</script>
