<template>
  <div class="c6969 c9xin cr8w3 ci4j9 cr7br clwia cpqam c94qd c4a0m">
    <!-- Middle area -->
    <div class="c4a0m">
      <div class="c8b8k">
        <section>
          <!-- Page title -->
          <h1 class="cpynq c1rrq ciz93">My resume</h1>
          <!-- Page content -->
          <div class="cxslc c2bb0 cjrdl">
            <!-- Education -->
            <div class="cr8w3">
              <h2 class="cxmc9 cg0ht cpynq cjvvo">Education</h2>
              <ul class="cr8w3">
                <!-- Item -->
                <li class="c5c77 cpnf3" v-for="(item, key) in education" :key>
                  <div
                    class="c9nsn cx6rx cimjd c39j0 c3jrd cdoe6 c3eja c4ezg cmvl0 ca62j c0m6u c9noy cfwvb"
                  >
                    <div
                      class="cg3vi cj965 cry3b c81t6 coo5n cax03 cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta c90wr cfwvb c7yaq co5ux"
                    >
                      <img
                        :src="item.logo"
                        width="24"
                        height="24"
                        :alt="item.school"
                      />
                    </div>
                    <div class="catbp c96dc">
                      <div class="c2bb0 cd99g ck5r6">
                        {{ item.startDate }} <span class="cxuy4 crnoq">·</span>
                        {{ item.endDate }}
                      </div>
                      <div
                        class="cxmc9 cg0ht cpynq c670g"
                        v-text="item.major"
                      ></div>
                      <div
                        class="cxmc9 cg0ht cnp10 cme8e"
                        v-text="item.school"
                      ></div>
                      <div
                        class="cxslc c2bb0 cme8e"
                        v-text="item.description"
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Work Experience -->
            <widgets-blog-experience :experience />
          </div>
        </section>
      </div>
    </div>

    <!-- Right sidebar -->
    <aside class="cd6k2 cf0x4 csb3e">
      <div class="c92wf">
        <!-- Technical Skills widget -->
        <widgets-blog-technical-skills :skills />

        <!-- Languages widget -->
        <widgets-blog-languages :languages />
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

const education = [
  {
    school: "FPT Polytechnic College of Ho Chi Minh",
    logo: "https://caodang.fpt.edu.vn/wp-content/uploads/cropped-logo-fpt-192x192.png",
    major: "Website Development",
    startDate: "Sep 2021",
    endDate: "Jan 2024",
    description:
      "Achieved excellent students for many semesters, graduated with excellent academic achievements. Graduated with honors, with a GPA of 3.6/4.0",
  },
];

const skills = [
  "Laravel",
  "Livewire",
  "VueJs",
  "jQuery",
  "TailwindCss",
  "Sass",
  "Bootstrap",
  "Wordpress",
  "Linux",
];

const languages = [
  {
    language: "Vietnamese",
    level: "Native",
    flag: "🇻🇳",
  },
  {
    language: "English",
    level: "Basic",
    flag: "🇬🇧",
  },
];
</script>