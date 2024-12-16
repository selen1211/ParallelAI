(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [262],
  {
    12594: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.t.bind(i, 69903, 23)),
        Promise.resolve().then(i.t.bind(i, 18705, 23)),
        Promise.resolve().then(i.t.bind(i, 93342, 23)),
        Promise.resolve().then(i.t.bind(i, 11538, 23)),
        Promise.resolve().then(i.t.bind(i, 53054, 23)),
        Promise.resolve().then(i.bind(i, 82288)),
        Promise.resolve().then(i.bind(i, 98535)),
        Promise.resolve().then(i.bind(i, 91184)),
        Promise.resolve().then(i.bind(i, 6713)),
        Promise.resolve().then(i.bind(i, 11321)),
        Promise.resolve().then(i.bind(i, 93835)),
        Promise.resolve().then(i.bind(i, 5490)),
        Promise.resolve().then(i.bind(i, 63685)),
        Promise.resolve().then(i.bind(i, 30548)),
        Promise.resolve().then(i.bind(i, 29611)),
        Promise.resolve().then(i.bind(i, 71021)),
        Promise.resolve().then(i.bind(i, 7858)),
        Promise.resolve().then(i.bind(i, 67139)),
        Promise.resolve().then(i.bind(i, 28533)),
        Promise.resolve().then(i.bind(i, 49108)),
        Promise.resolve().then(i.bind(i, 23845)),
        Promise.resolve().then(i.t.bind(i, 56255, 23)),
        Promise.resolve().then(i.bind(i, 51398)),
        Promise.resolve().then(i.t.bind(i, 97682, 23)),
        Promise.resolve().then(i.t.bind(i, 92987, 23)),
        Promise.resolve().then(i.bind(i, 60171)),
        Promise.resolve().then(i.t.bind(i, 47092, 23)),
        Promise.resolve().then(i.t.bind(i, 66835, 23)),
        Promise.resolve().then(i.t.bind(i, 71303, 23)),
        Promise.resolve().then(i.bind(i, 12170)),
        Promise.resolve().then(i.bind(i, 6477)),
        Promise.resolve().then(i.bind(i, 16533)),
        Promise.resolve().then(i.bind(i, 69118));
    },
    87138: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return r.a;
        },
      });
      var n = i(231),
        r = i.n(n);
    },
    16463: function (e, t, i) {
      "use strict";
      var n = i(71169);
      i.o(n, "redirect") &&
        i.d(t, {
          redirect: function () {
            return n.redirect;
          },
        }),
        i.o(n, "usePathname") &&
          i.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        i.o(n, "useRouter") &&
          i.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          });
    },
    23845: function (e, t, i) {
      "use strict";
      i.d(t, {
        Header: function () {
          return d;
        },
      });
      var n = i(57437),
        r = i(87138),
        a = i(16463),
        s = i(49354),
        o = i(92672),
        l = i(16661),
        c = i(2265);
      let d = () => {
        let e = (0, a.usePathname)(),
          [t, i] = (0, c.useState)(""),
          d = e.includes("foundation") ? o.oe : o.Fi,
          u = (e) =>
            (console.log("debug > isHovered===", t),
            ("Grants" === e && "Grants" === t) ||
              ("Hackathons" === e && "Hackathons" === t))
              ? "Coming soon"
              : e;
        return (0, n.jsxs)("header", {
          className:
            "relative h-[70px] flex flex-row justify-between items-center py-1 mx-auto px-[15px] md:px-[30px]",
          children: [
            (0, n.jsxs)(r.default, {
              href: "/",
              className:
                "absolute flex flex-row items-center gap-2.5 cursor-pointer",
              children: [
                (0, n.jsx)(l.JO, { icon: "logo" }),
                (0, n.jsx)(l.JO, {
                  icon: "logoText",
                  className: "w-[94px] h-[18px] hidden xl:inline-block",
                }),
              ],
            }),
            (0, n.jsx)("nav", {
              className:
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:max-w-[500px] lg:w-full md:flex flex-row justify-between items-center text-center",
              children: d.map((e) => {
                let { id: t, title: a, target: o, href: c } = e;
                return c.includes("foundation")
                  ? (0, n.jsx)(
                      r.default,
                      {
                        href: c,
                        target: null != o ? o : "_parent",
                        className: (0, s.cn)(
                          "w-[".concat(
                            Math.trunc(100 / d.length),
                            "%] text-subtext hover:text-brand-pink transition-all"
                          )
                        ),
                        children: (0, n.jsxs)(l.ZT, {
                          variant: "h6",
                          fontInter: !0,
                          className: "relative whitespace-nowrap",
                          children: [
                            a,
                            (0, n.jsx)("span", {
                              className:
                                "absolute top-[-10px] right-[-10px] text-brand-pink text-[10px] font-medium",
                              children: "NEW",
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  : (0, n.jsx)(
                      r.default,
                      {
                        href: c,
                        target: null != o ? o : "_parent",
                        onMouseEnter: () => i(a),
                        onMouseLeave: () => i(""),
                        className: (0, s.cn)(
                          "w-[".concat(
                            Math.trunc(100 / d.length),
                            "%] text-subtext hover:text-brand-pink transition-all"
                          )
                        ),
                        children: (0, n.jsx)(l.ZT, {
                          variant: "h6",
                          fontInter: !0,
                          className: "whitespace-nowrap",
                          children: u(a),
                        }),
                      },
                      t
                    );
              }),
            }),
          ],
        });
      };
    },
    92672: function (e, t, i) {
      "use strict";
      i.d(t, {
        Bq: function () {
          return y;
        },
        Cn: function () {
          return x;
        },
        Di: function () {
          return k;
        },
        Fi: function () {
          return v;
        },
        MX: function () {
          return S;
        },
        Rf: function () {
          return A;
        },
        T1: function () {
          return _;
        },
        Vj: function () {
          return I;
        },
        _d: function () {
          return C;
        },
        dr: function () {
          return P;
        },
        oe: function () {
          return w;
        },
      });
      var n = i(82288),
        r = i(98535),
        a = i(91184),
        s = i(63685),
        o = i(30548),
        l = i(29611),
        c = i(71021),
        d = i(7858),
        u = i(67139),
        h = i(28533),
        m = i(49108),
        f = i(6713),
        g = i(11321),
        b = i(93835),
        p = i(5490);
      let v = [
          { id: 0, title: "Foundation", href: "/foundation" },
           { id: 1, title: "Features", href: "#features-section" },
           { id: 2, title: "Architecture", href: "#architecture-section" },
           { id: 3, title: "Solutions", href: "#industry-accelerator-section" },
        ],
        w = [
          { id: 0, title: "Home", href: "/" },
           { id: 1, title: "Grants", href: "#" },
           { id: 2, title: "Hackathons", href: "#" },
           {
             id: 3,
             title: "Get Involved",
             href: "https://t.me",
             target: "_blank",
           },
        ],
        x = [
          { id: 0, imgSrc: c.default, text: "Io.Net" },
          { id: 1, imgSrc: s.default, text: "Aethir" },
          { id: 2, imgSrc: m.default, text: "Neurochain" },
          { id: 3, imgSrc: u.default, text: "Marlin" },
          { id: 4, imgSrc: d.default, text: "Kaisar" },
          { id: 5, imgSrc: h.default, text: "MEXC" },
          { id: 6, imgSrc: l.default, text: "Coinmarketcap" },
          { id: 7, imgSrc: o.default, text: "Coingecko" },
          { id: 10, imgSrc: c.default, text: "Io.Net" },
          { id: 11, imgSrc: s.default, text: "Aethir" },
          { id: 12, imgSrc: m.default, text: "Neurochain" },
          { id: 13, imgSrc: u.default, text: "Marlin" },
          { id: 14, imgSrc: d.default, text: "Kaisar" },
          { id: 15, imgSrc: h.default, text: "MEXC" },
          { id: 16, imgSrc: l.default, text: "Coinmarketcap" },
          { id: 17, imgSrc: o.default, text: "Coingecko" },
        ],
        P = [
          { id: 0, name: "IO.net", uptime: 0, isOnline: !1 },
          { id: 1, name: "Flux", uptime: 0, isOnline: !1 },
          { id: 2, name: "Netmind", uptime: 0, isOnline: !1 },
          { id: 3, name: "Aethir", uptime: 0, isOnline: !1 },
          { id: 4, name: "Marlin", uptime: 0, isOnline: !1 },
        ],
        y = [
          {
            id: 0,
            title: "Phase 01",
            badgeTitle: "Q4 2024",
            checkIcon: !0,
            startIcon: "squareCode",
            subtitle: "AI-Driven Parallel Code Optimization",
            description:
              "Develop and launch the AI Parallel Code Writer, a tool that automatically optimizes and parallelizes existing code for efficient execution on GPUs.",
          },
          {
            id: 1,
            title: "Phase 02",
            badgeTitle: "Q1 2025",
            startIcon: "microchip",
            subtitle: "Integration with Existing GPU Hosting Solutions",
            description:
              "Collaborate with established GPU hosting providers to enhance and expand their current offerings by integrating ParallelAI's scalable GPU resources.",
          },
          {
            id: 2,
            title: "Phase 03",
            badgeTitle: "Q2 2025",
            startIcon: "cloudNodes",
            subtitle: "Hosted Cloud Services for Customized GPU Processing",
            description:
              "Provide a flexible, hosted cloud service that offers tailored GPU processing solutions",
          },
        ],
        I = [
          {
            id: 0,
            question: "What is ParallelAI?",
            answer:
              "ParallelAI is a high-performance computing platform designed to optimize and accelerate complex computational tasks by utilizing advanced parallel processing techniques. It enables efficient execution across multiple processing units, significantly enhancing computing speed and resource utilization.",
          },
          {
            id: 1,
            question: "How does ParallelAI enhance computing performance?",
            answer:
              "ParallelAI improves performance by dividing tasks into smaller, manageable segments that can be processed simultaneously across various CPUs and GPUs. This not only speeds up the processing times but also increases the efficiency of resource usage.",
          },
          {
            id: 2,
            question:
              "Can ParallelAI be used in industries other than tech and gaming?",
            answer:
              "Absolutely! ParallelAI is versatile and beneficial across various sectors, including finance for real-time trading algorithms, healthcare for genomic sequencing, and media for content rendering, providing substantial performance enhancements wherever heavy computations are needed.",
          },
          {
            id: 3,
            question:
              "What makes ParallelAI different from traditional parallel processing tools?",
            answer:
              "ParallelAI integrates seamlessly with modern development environments and is designed to be more user-friendly. It offers automatic optimization features that remove the need for manual intervention in distributing and synchronizing tasks, which sets it apart from more traditional tools that require extensive setup and maintenance.",
          },
          {
            id: 4,
            question:
              "Is ParallelAI suitable for small businesses or startups?",
            answer:
              "Yes, ParallelAI is designed to be scalable and can be adapted to the needs of any organization size. For startups and small businesses, it offers a cost-effective way to leverage powerful computing resources without the need for significant hardware investments.",
          },
          {
            id: 5,
            question: "How does ParallelAI handle security and data privacy?",
            answer:
              "ParallelAI is built with security as a priority. It employs various encryption and security protocols to ensure that all data processed through the platform is protected against unauthorized access and breaches, making it safe for sensitive and confidential computations.",
          },
          {
            id: 6,
            question:
              "Where can I learn more about implementing ParallelAI in my projects?",
            answer:
              "For more detailed information on how to integrate ParallelAI into your projects, you can visit our official website, download our comprehensive user guides, or join our community forums where you can ask questions and share insights with other users.",
          },
        ],
        A = [
          {
            id: 0,
            title: "Automatic Parallelization",
            subtitle:
              "Every operation capable of running in parallel does seamlessly, without  explicit instructions.",
            imgSrc: n.default,
            imgAlt: "Automatic parallelization image",
          },
          {
            id: 1,
            title: "Maximized Performance",
            subtitle:
              "The full potential of both CPU and GPU cores, solving problems in a fraction of the time.",
            imgSrc: a.default,
            imgAlt: "Maximized Performance image",
          },
          {
            id: 2,
            title: "Intuitive Coding",
            subtitle:
              "Write high-level, Python-like code without  the complexities of parallel programming.",
            imgSrc: r.default,
            imgAlt: "Intuitive Coding image",
          },
        ],
        k = [
          {
            id: 0,
            title: "Infrastructure Development",
            subtitle:
              "We provide developers with scalable, high-performance AI tools that simplify the development, training, and deployment of models, ensuring efficiency and cost-effectiveness.",
            imgSrc: f.default,
            imgAlt: "Infrastructure Development image",
          },
          {
            id: 1,
            title: "Strategic Partnerships",
            subtitle:
              "We collaborate with leading AI and Web3 projects to unlock synergies, expand use cases, and accelerate the adoption of decentralized AI.",
            imgSrc: g.default,
            imgAlt: "Strategic Partnerships image",
          },
          {
            id: 2,
            title: "Ecosystem Growth",
            subtitle:
              "Our initiatives include onboarding AI projects, supporting them with resources, and integrating their solutions into the Parallel AI ecosystem.",
            imgSrc: b.default,
            imgAlt: "Ecosystem Growth image",
          },
          {
            id: 3,
            title: "Transparency and Governance",
            subtitle:
              "The foundation is guided by principles of transparency and community-led governance, ensuring that every decision aligns with the values of our ecosystem.",
            imgSrc: p.default,
            imgAlt: "Transparency and Governance image",
          },
        ],
        _ = [
          {
            id: 0,
            icon: "setting",
            title: "Empower Developers",
            subtitle:
              "By providing powerful, easy-to-use AI infrastructure like Parilix and Parahub, we enable developers to focus on innovation, reduce costs, and unlock the full potential of AI in decentralized applications.",
          },
          {
            id: 1,
            icon: "codesandbox",
            title: "Support AI Ecosystem Growth",
            subtitle:
              "We foster partnerships with AI projects and Web3 builders, creating a thriving ecosystem that integrates cutting-edge AI solutions with blockchain technology.",
          },
          {
            id: 2,
            icon: "blockchain",
            title: "Drive Decentralized AI Adoption",
            subtitle:
              "Our foundation ensures that AI solutions are transparent, scalable, and interoperable across blockchains, promoting adoption and driving real-world use cases.",
          },
          {
            id: 3,
            icon: "leaf",
            title: "Build a Deflationary and Sustainable Economy",
            subtitle:
              "Through innovative tokenomics, we align ecosystem growth with token value, driving long-term sustainability and benefits for all stakeholders.",
          },
        ],
        S = [
          {
            id: 0,
            icon: "access",
            title: "Accessibility",
            subtitle:
              "Making AI tools and solutions available to developers of all levels, breaking down barriers to entry in Web3.",
          },
          {
            id: 1,
            icon: "rocket",
            title: "Innovation",
            subtitle:
              "Constantly pushing the boundaries of what's possible with AI and blockchain technology.",
          },
          {
            id: 2,
            icon: "blockchain2",
            title: "Decentralization",
            subtitle:
              "Promoting decentralized, trustless systems to ensure data integrity, security, and scalability.",
          },
          {
            id: 3,
            icon: "sustainableEnergy",
            title: "Sustainability",
            subtitle:
              "Designing tokenomics and ecosystem mechanisms that drive long-term growth and deflationary value for the community.",
          },
          {
            id: 4,
            icon: "agreement",
            title: "Collaboration",
            subtitle:
              "Building partnerships and fostering a developer-first culture to grow a thriving AI Web3 ecosystem.",
          },
        ],
        C = [
          {
            id: 0,
            title: "Multi-threading & Multi-processing",
            subtitle: "Efficient Concurrency utilizes multiple threads",
            icon: "molecules",
          },
          {
            id: 1,
            title: "Scalable Machine Learning",
            subtitle: "Enhances the training of AI neural networks",
            icon: "brainNodes2",
          },
          {
            id: 2,
            title: "Map Reduce",
            subtitle: "Process large data sets with a distributed algorithm",
            icon: "layerReplace",
          },
          {
            id: 3,
            title: "Gaming & Content Rendering",
            subtitle: "Accelerates rendering production workflows",
            icon: "gamingButtons",
          },
          {
            id: 4,
            title: "Data Processing",
            subtitle: "Faster data analysis and decision-making",
            icon: "stackPerspective",
          },
          {
            id: 5,
            title: "Node & Mining Operations",
            subtitle: "Improves the efficiency of mining operations",
            icon: "nodes",
          },
        ];
    },
    53054: function () {},
    82288: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/automatic-parallelization.2201a933.svg",
          height: 200,
          width: 320,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    98535: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/intuitive-coding.dddbced4.svg",
          height: 200,
          width: 320,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    91184: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/perfomance.1e2260b3.svg",
          height: 200,
          width: 320,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    6713: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/what-we-do-1.459227ac.svg",
          height: 200,
          width: 321,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    11321: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/what-we-do-2.6fade63c.svg",
          height: 200,
          width: 321,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    93835: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/what-we-do-3.9a06a6c3.svg",
          height: 200,
          width: 493,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    5490: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/what-we-do-4.6037fa3b.svg",
          height: 200,
          width: 321,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    63685: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/Aethir.64b7abb8.svg",
          height: 126,
          width: 159,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    30548: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/Coingecko.dfd69a03.svg",
          height: 143,
          width: 148,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    29611: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/Coinmarketcap.a3697851.svg",
          height: 161,
          width: 158,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    71021: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/IoNet.98e86757.svg",
          height: 112,
          width: 252,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    7858: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/Kaisar.2ef75ae9.svg",
          height: 135,
          width: 91,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    28533: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/MEXC.c0a7138f.svg",
          height: 139,
          width: 228,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    67139: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/Marlin.f8d7b6cb.svg",
          height: 140,
          width: 206,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    49108: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/Neurochain.ebc90615.svg",
          height: 126,
          width: 126,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    18705: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__rotontoFont_0c5c5b', '__rotontoFont_Fallback_0c5c5b'",
        },
        className: "__className_0c5c5b",
      };
    },
    93342: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__SFProFont_61ff87', '__SFProFont_Fallback_61ff87'",
        },
        className: "__className_61ff87",
      };
    },
  },
  function (e) {
    e.O(0, [285, 974, 245, 363, 691, 231, 661, 971, 23, 744], function () {
      return e((e.s = 12594));
    }),
      (_N_E = e.O());
  },
]);
