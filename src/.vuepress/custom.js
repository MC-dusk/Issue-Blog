/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "MC-dusk",
    repo: "Issue-Blog",
    clientId: "Ov23liXxJt9R7qNYIywE",
    clientSecret: "ebaf8f4c1ee9ca498206c8114642704114c7f4c0"
  },

  repoConfig: {
    owner: "MC-dusk",
    repo: "Issue-Blog",
    pushBranch: "pages",
    email: "52311860+MC-dusk@users.noreply.github.com",
    filterUsers: ['MC-dusk']
  },

  title: "Dusk's Blog",
  description: "You are not alone.",
  customDomain: "",
  base: "/Issue-Blog/",

  slogan: {
    main: "胜地不常，",
    sub: "盛筵难再。"
  },

  themeConfig: {
    nav: [
      {
        name: "Blog",
        link: "/Issue-Blog"
      },
      {
        name: "Dusk",
        link: "https://dusk.chat/"
      },
      {
        name: "CV",
        link: "/Issue-Blog/cv.html"
      },
      {
        name: "Source",
        link: "https://github.com/MC-dusk/Issue-Blog"
      }
    ],
    headTitle: ["空乏其身行", "拂乱其所为","所以动心忍性，曾益其所不能"],
    friendLinks: [
      {
        name: "estertion",
        link: "https://estertion.win/"
      },
      {
        name: "subbers",
        link: "https://subbers.org/subtitles/"
      },
      {
        name: "liujiacai",
        link: "https://liujiacai.net/"
      }
    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "并没有备案",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars.githubusercontent.com/u/52311860"
      }
    ]
  ]
}

module.exports = mainConfig
