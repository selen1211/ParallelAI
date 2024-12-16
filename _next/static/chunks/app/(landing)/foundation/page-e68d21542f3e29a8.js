(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [426],
  {
    75903: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 74352)),
        Promise.resolve().then(i.bind(i, 42364)),
        Promise.resolve().then(i.bind(i, 99833)),
        Promise.resolve().then(i.bind(i, 16490)),
        Promise.resolve().then(i.bind(i, 51398)),
        Promise.resolve().then(i.bind(i, 60171)),
        Promise.resolve().then(i.bind(i, 12170)),
        Promise.resolve().then(i.bind(i, 6477)),
        Promise.resolve().then(i.bind(i, 16533)),
        Promise.resolve().then(i.bind(i, 69118));
    },
    27829: function (e, t, i) {
      "use strict";
      i.d(t, {
        G: function () {
          return s;
        },
      });
      var r = i(57437),
        n = i(16661);
      let s = (e) => {
        let { title: t } = e;
        return (0, r.jsxs)("div", {
          className:
            "w-full flex flex-row items-center max-w-[1021px] gap-[30px]",
          children: [
            (0, r.jsx)("div", { className: "w-full h-[1px] bg-module " }),
            (0, r.jsx)(n.ZT, {
              variant: "h6",
              fontNeue: !0,
              className:
                "text-[13px] md:text-body1 xl:text-h6 whitespace-nowrap",
              children: t,
            }),
            (0, r.jsx)("div", { className: "w-full h-[1px] bg-module" }),
          ],
        });
      };
    },
    74352: function (e, t, i) {
      "use strict";
      i.d(t, {
        OurMission: function () {
          return x;
        },
      });
      var r = i(57437),
        n = i(2265),
        s = i(49582),
        a = i(66648),
        l = i(71204),
        o = i(16661),
        c = i(60834),
        d = i(27829);
      let u = (e) => {
        let { icon: t, title: i, subtitle: n } = e;
        return (0, r.jsxs)("div", {
          className:
            "h-[210px] md:h-[235px] flex flex-col items-center justify-center rounded-[10px] px-6 py-[15px] gap-[15px] backdrop-blur-2xl transition-all border border-module hover:border-brand-pink hover:bg-gradient-brand-pink",
          children: [
            (0, r.jsx)("div", {
              className: "flex justify-center items-center",
              children: (0, r.jsx)(o.JO, { icon: t }),
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col items-center text-center gap-2.5",
              children: [
                (0, r.jsx)("div", {
                  className: "rounded-[10px] bg-module px-2.5 py-1.5",
                  children: (0, r.jsx)(o.ZT, {
                    variant: "h6",
                    className:
                      "!text-body1 xl:text-h6 bg-about-text-linear bg-clip-text text-transparent",
                    children: i,
                  }),
                }),
                (0, r.jsx)(o.ZT, {
                  variant: "body1",
                  className: "!text-body2 xl:!text-body1 text-subtext",
                  fontInter: !0,
                  children: n,
                }),
              ],
            }),
          ],
        });
      };
      var p = i(92672),
        h = {
          src: "/_next/static/media/parallelAI.30ec0094.svg",
          height: 465,
          width: 596,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = {
          src: "/_next/static/media/parallelAIMobile.7244af08.svg",
          height: 82,
          width: 341,
          blurWidth: 0,
          blurHeight: 0,
        };
      s.ZP.registerPlugin(l.i);
      let x = () => {
        let e = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let t = e.current;
            t &&
              s.ZP.fromTo(
                t,
                { scale: 0, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: t,
                    start: "top 90%",
                    end: "top 100%",
                    toggleActions: "restart none reverse none",
                  },
                }
              );
          }, []),
          (0, r.jsx)("section", {
            id: "foundation-section",
            ref: e,
            className: "py-[35px] md:pt-[50px] xl:py-[75px]",
            children: (0, r.jsxs)(c.H, {
              className:
                "flex flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]",
              children: [
                (0, r.jsx)(d.G, { title: "Our Mission" }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col md:flex-row items-center gap-4",
                  children: [
                    (0, r.jsx)(a.default, {
                      alt: "parallelAI logo",
                      src: g,
                      className: "md:hidden",
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "w-full md:w-1/3 xl:w-1/4 flex flex-col gap-[35px]",
                      children: p.T1.slice(0, 2).map((e) => {
                        let { id: t, icon: i, title: n, subtitle: s } = e;
                        return (0, r.jsx)(
                          u,
                          { icon: i, title: n, subtitle: s },
                          t
                        );
                      }),
                    }),
                    (0, r.jsx)(o.ny, {
                      hoveredHidden: !0,
                      className:
                        "h-[200px] xl:h-full w-1/3 xl:w-1/2 max-w-[595px] hidden md:flex flex-col items-center justify-center rounded-[10px] gap-5 transition-all border border-module hover:border-brand-pink hover:bg-gradient-brand-pink",
                      beforeClassName: "z-[1]",
                      children: (0, r.jsx)(a.default, {
                        alt: "parallelAI logo",
                        src: h,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "w-full md:w-1/3 xl:w-1/4 flex flex-col gap-[35px]",
                      children: p.T1.slice(2).map((e) => {
                        let { id: t, icon: i, title: n, subtitle: s } = e;
                        return (0, r.jsx)(
                          u,
                          { icon: i, title: n, subtitle: s },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    42364: function (e, t, i) {
      "use strict";
      i.d(t, {
        OurValues: function () {
          return p;
        },
      });
      var r = i(57437),
        n = i(2265),
        s = i(49582),
        a = i(71204),
        l = i(60834),
        o = i(27829),
        c = i(16661);
      let d = (e) => {
        let { icon: t, title: i, subtitle: n } = e;
        return (0, r.jsxs)("div", {
          className:
            "w-full md:max-w-[255px] h-[220px] flex flex-col items-center justify-between rounded-[18px] px-[30px] md:px-[15px] py-5 transition-all border border-highlight hover:border-brand-pink hover:bg-gradient-brand-pink",
          children: [
            (0, r.jsx)("div", {
              className:
                "flex justify-center items-center rounded-[10px] border border-highlight p-[7px] mb-2",
              children: (0, r.jsx)(c.JO, { icon: t }),
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col items-center text-center gap-1.5",
              children: [
                (0, r.jsx)(c.ZT, { variant: "h6", fontNeue: !0, children: i }),
                (0, r.jsx)(c.ZT, {
                  variant: "body1",
                  className:
                    "max-w-[266px] !text-[13px] xl:!text-body1 text-subtext",
                  fontInter: !0,
                  children: n,
                }),
              ],
            }),
          ],
        });
      };
      var u = i(92672);
      s.ZP.registerPlugin(a.i);
      let p = () => {
        let e = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let t = e.current;
            t &&
              s.ZP.fromTo(
                t,
                { scale: 1.4, y: "30%", opacity: 0 },
                {
                  y: "0%",
                  scale: 1,
                  opacity: 1,
                  duration: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: t,
                    start: "top 90%",
                    end: "top 100%",
                    toggleActions: "restart none reverse none",
                  },
                }
              );
          }, []),
          (0, r.jsx)("section", {
            id: "hackathons-section",
            ref: e,
            className: "pt-[35px] pb-[50px] md:pt-[50px] xl:py-[75px]",
            children: (0, r.jsxs)(l.H, {
              className:
                "flex flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]",
              children: [
                (0, r.jsx)(o.G, { title: "Our Values" }),
                (0, r.jsxs)("div", {
                  className:
                    "w-full md:w-auto flex flex-col gap-10 md:gap-5 xl:gap-[35px]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "w-full flex flex-col md:flex-row gap-10 md:gap-5 xl:gap-[35px]",
                      children: u.MX.slice(0, 3).map((e) => {
                        let { id: t, icon: i, title: n, subtitle: s } = e;
                        return (0, r.jsx)(
                          d,
                          { icon: i, title: n, subtitle: s },
                          t
                        );
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "w-full flex flex-col md:flex-row justify-center gap-10 md:gap-5 xl:gap-[35px]",
                      children: u.MX.slice(3).map((e) => {
                        let { id: t, icon: i, title: n, subtitle: s } = e;
                        return (0, r.jsx)(
                          d,
                          { icon: i, title: n, subtitle: s },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    99833: function (e, t, i) {
      "use strict";
      i.d(t, {
        OurVision: function () {
          return g;
        },
      });
      var r = i(57437),
        n = i(2265),
        s = i(49582),
        a = i(71204),
        l = i(86705),
        o = i(16661),
        c = i(60834),
        d = i(27829),
        u = i(66648),
        p = {
          src: "/_next/static/media/g10.f63a55dd.svg",
          height: 441,
          width: 587,
          blurWidth: 0,
          blurHeight: 0,
        };
      let h = () =>
        (0, r.jsx)(u.default, {
          alt: "ai-image",
          src: p,
          className: "w-full h-full",
        });
      s.ZP.registerPlugin(a.i);
      let g = () => {
        let { xlScreen: e } = (0, l.z)(),
          t = (0, n.useRef)(null),
          i = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let r = t.current,
              n = i.current;
            s.ZP.fromTo(
              r,
              { x: "-30%", opacity: 0 },
              {
                x: "0%",
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: r,
                  start: "top 80%",
                  end: "top 100%",
                  toggleActions: "restart none reverse none",
                },
              }
            ),
              s.ZP.fromTo(
                n,
                { x: "30%", opacity: 0 },
                {
                  x: "0%",
                  opacity: 1,
                  duration: e ? 1.5 : 2,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: n,
                    start: "top 80%",
                    end: "top 100%",
                    toggleActions: "restart none reverse none",
                  },
                }
              );
          }, [e]),
          (0, r.jsx)("section", {
            id: "about-section",
            className:
              "pt-[30px] md:pt-[90px] xl:pt-[100px] pb-[35px] md:pb-[50px] xl:pb-[75px]",
            children: (0, r.jsxs)(c.H, {
              className:
                "flex flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]",
              children: [
                (0, r.jsx)(d.G, { title: "Our Vision" }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row items-center gap-10 md:gap-[45px] xl:gap-[60px]",
                  children: [
                    (0, r.jsxs)("div", {
                      ref: t,
                      className:
                        "w-full xl:w-1/2 flex flex-col justify-between gap-5 xl:gap-10",
                      children: [
                        (0, r.jsx)(o.ZT, {
                          fontNeue: !0,
                          className:
                            "text-h6 md:text-[17px] xl:text-[22px] text-subtext max-w-[520px]",
                          children:
                            "The Parallel AI Foundation is committed to shaping the future of artificial intelligence in the decentralized world.",
                        }),
                        (0, r.jsx)(o.ZT, {
                          fontNeue: !0,
                          className:
                            "text-h6 md:text-[17px] xl:text-[22px] text-subtext max-w-[520px]",
                          children:
                            "Our mission is to empower developers, enterprises, and communities with the tools and infrastructure needed to build, scale, and deploy AI applications seamlessly within Web3 ecosystems.",
                        }),
                        (0, r.jsx)(o.ZT, {
                          fontNeue: !0,
                          className:
                            "text-h6 md:text-[17px] xl:text-[22px] text-subtext max-w-[520px]",
                          children:
                            "We envision a future where AI is accessible, transparent, and decentralized, driving innovation across industries while respecting user data privacy and security.",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      ref: i,
                      className:
                        "w-full xl:w-1/2 flex flex-col md:flex-row xl:flex-col gap-[47px] md:gap-[30px] xl:gap-[47px]",
                      children: (0, r.jsx)(h, {}),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    16490: function (e, t, i) {
      "use strict";
      i.d(t, {
        WhatWeDo: function () {
          return h;
        },
      });
      var r = i(57437),
        n = i(2265),
        s = i(49582),
        a = i(71204),
        l = i(60834),
        o = i(27829),
        c = i(66648),
        d = i(16661);
      let u = (e) => {
        let { imgSrc: t, imgAlt: i, title: n, subtitle: s } = e;
        return (0, r.jsxs)(d.ny, {
          hoveredHidden: !0,
          className:
            "flex flex-col rounded-[10px] !p-[30px] gap-5 transition-all border border-module hover:border-brand-pink hover:bg-gradient-brand-pink",
          beforeClassName: "z-[1]",
          children: [
            (0, r.jsx)("div", {
              className: "flex justify-center items-center",
              children: (0, r.jsx)(c.default, { src: t, alt: i }),
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col items-center text-center gap-2.5",
              children: [
                (0, r.jsx)(d.ZT, {
                  variant: "h5",
                  fontNeue: !0,
                  className: "text-h6 xl:text-h5",
                  children: n,
                }),
                (0, r.jsx)(d.ZT, {
                  variant: "body1",
                  className:
                    "!text-body2 xl:!text-body1 text-subtext font-medium",
                  fontInter: !0,
                  children: s,
                }),
              ],
            }),
          ],
        });
      };
      var p = i(92672);
      s.ZP.registerPlugin(a.i);
      let h = () => {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let i = e.current,
              r = t.current;
            s.ZP.fromTo(
              i,
              { x: "-30%", opacity: 0 },
              {
                x: "0%",
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: i,
                  start: "top 80%",
                  end: "top 100%",
                  toggleActions: "restart none reverse none",
                },
              }
            ),
              s.ZP.fromTo(
                r,
                { x: "30%", opacity: 0 },
                {
                  x: "0%",
                  opacity: 1,
                  duration: 1.5,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: r,
                    start: "top 80%",
                    end: "top 100%",
                    toggleActions: "restart none reverse none",
                  },
                }
              );
          }, []),
          (0, r.jsx)("section", {
            id: "grants-section",
            className: "py-[35px] md:pt-[50px] xl:py-[75px]",
            children: (0, r.jsxs)(l.H, {
              className:
                "flex flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]",
              children: [
                (0, r.jsx)(o.G, { title: "What We Do" }),
                (0, r.jsxs)("div", {
                  className:
                    "grid grid-cols-1 gap-10 md:gap-[25px] xl:gap-[80px]",
                  children: [
                    (0, r.jsx)("div", {
                      ref: e,
                      className:
                        "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[25px] xl:gap-[80px]",
                      children: p.Di.slice(0, 2).map((e) => {
                        let {
                          id: t,
                          imgAlt: i,
                          imgSrc: n,
                          title: s,
                          subtitle: a,
                        } = e;
                        return (0, r.jsx)(
                          u,
                          { imgAlt: i, imgSrc: n, title: s, subtitle: a },
                          t
                        );
                      }),
                    }),
                    (0, r.jsx)("div", {
                      ref: t,
                      className:
                        "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[25px] xl:gap-[80px]",
                      children: p.Di.slice(2).map((e) => {
                        let {
                          id: t,
                          imgAlt: i,
                          imgSrc: n,
                          title: s,
                          subtitle: a,
                        } = e;
                        return (0, r.jsx)(
                          u,
                          { imgAlt: i, imgSrc: n, title: s, subtitle: a },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    92672: function (e, t, i) {
      "use strict";
      i.d(t, {
        Bq: function () {
          return j;
        },
        Cn: function () {
          return w;
        },
        Di: function () {
          return N;
        },
        Fi: function () {
          return b;
        },
        MX: function () {
          return k;
        },
        Rf: function () {
          return A;
        },
        T1: function () {
          return I;
        },
        Vj: function () {
          return P;
        },
        _d: function () {
          return W;
        },
        dr: function () {
          return y;
        },
        oe: function () {
          return v;
        },
      });
      var r = i(82288),
        n = i(98535),
        s = i(91184),
        a = i(63685),
        l = i(30548),
        o = i(29611),
        c = i(71021),
        d = i(7858),
        u = i(67139),
        p = i(28533),
        h = i(49108),
        g = i(6713),
        x = i(11321),
        m = i(93835),
        f = i(5490);
      let b = [
          { id: 0, title: "Foundation", href: "/foundation" },
          { id: 1, title: "Features", href: "#features-section" },
          { id: 2, title: "Architecture", href: "#architecture-section" },
          { id: 3, title: "Solutions", href: "#industry-accelerator-section" },
        ],
        v = [
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
        w = [
          { id: 0, imgSrc: c.default, text: "Io.Net" },
          { id: 1, imgSrc: a.default, text: "Aethir" },
          { id: 2, imgSrc: h.default, text: "Neurochain" },
          { id: 3, imgSrc: u.default, text: "Marlin" },
          { id: 4, imgSrc: d.default, text: "Kaisar" },
          { id: 5, imgSrc: p.default, text: "MEXC" },
          { id: 6, imgSrc: o.default, text: "Coinmarketcap" },
          { id: 7, imgSrc: l.default, text: "Coingecko" },
          { id: 10, imgSrc: c.default, text: "Io.Net" },
          { id: 11, imgSrc: a.default, text: "Aethir" },
          { id: 12, imgSrc: h.default, text: "Neurochain" },
          { id: 13, imgSrc: u.default, text: "Marlin" },
          { id: 14, imgSrc: d.default, text: "Kaisar" },
          { id: 15, imgSrc: p.default, text: "MEXC" },
          { id: 16, imgSrc: o.default, text: "Coinmarketcap" },
          { id: 17, imgSrc: l.default, text: "Coingecko" },
        ],
        y = [
          { id: 0, name: "IO.net", uptime: 0, isOnline: !1 },
          { id: 1, name: "Flux", uptime: 0, isOnline: !1 },
          { id: 2, name: "Netmind", uptime: 0, isOnline: !1 },
          { id: 3, name: "Aethir", uptime: 0, isOnline: !1 },
          { id: 4, name: "Marlin", uptime: 0, isOnline: !1 },
        ],
        j = [
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
        P = [
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
            imgSrc: r.default,
            imgAlt: "Automatic parallelization image",
          },
          {
            id: 1,
            title: "Maximized Performance",
            subtitle:
              "The full potential of both CPU and GPU cores, solving problems in a fraction of the time.",
            imgSrc: s.default,
            imgAlt: "Maximized Performance image",
          },
          {
            id: 2,
            title: "Intuitive Coding",
            subtitle:
              "Write high-level, Python-like code without  the complexities of parallel programming.",
            imgSrc: n.default,
            imgAlt: "Intuitive Coding image",
          },
        ],
        N = [
          {
            id: 0,
            title: "Infrastructure Development",
            subtitle:
              "We provide developers with scalable, high-performance AI tools that simplify the development, training, and deployment of models, ensuring efficiency and cost-effectiveness.",
            imgSrc: g.default,
            imgAlt: "Infrastructure Development image",
          },
          {
            id: 1,
            title: "Strategic Partnerships",
            subtitle:
              "We collaborate with leading AI and Web3 projects to unlock synergies, expand use cases, and accelerate the adoption of decentralized AI.",
            imgSrc: x.default,
            imgAlt: "Strategic Partnerships image",
          },
          {
            id: 2,
            title: "Ecosystem Growth",
            subtitle:
              "Our initiatives include onboarding AI projects, supporting them with resources, and integrating their solutions into the Parallel AI ecosystem.",
            imgSrc: m.default,
            imgAlt: "Ecosystem Growth image",
          },
          {
            id: 3,
            title: "Transparency and Governance",
            subtitle:
              "The foundation is guided by principles of transparency and community-led governance, ensuring that every decision aligns with the values of our ecosystem.",
            imgSrc: f.default,
            imgAlt: "Transparency and Governance image",
          },
        ],
        I = [
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
        k = [
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
        W = [
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
    86705: function (e, t, i) {
      "use strict";
      i.d(t, {
        z: function () {
          return n;
        },
      });
      var r = i(2265);
      let n = () => {
        let [e, t] = (0, r.useState)(0),
          i = (0, r.useCallback)(() => t(window.innerWidth), []);
        return (
          (0, r.useEffect)(() => {
            window.innerWidth && t(window.innerWidth);
          }, []),
          (0, r.useEffect)(
            () => (
              window.addEventListener("resize", i),
              () => window.removeEventListener("resize", i)
            ),
            [i]
          ),
          {
            width: e,
            mdScreen: e >= 768,
            lgScreen: e >= 1024,
            xlScreen: e >= 1280,
          }
        );
      };
    },
    60834: function (e, t, i) {
      "use strict";
      i.d(t, {
        H: function () {
          return s;
        },
      });
      var r = i(57437),
        n = i(49354);
      let s = (e) => {
        let { children: t, className: i } = e;
        return (0, r.jsx)("div", {
          className: (0, n.cn)(
            "max-w-[1235px] w-full mx-auto px-[15px] md:px-[30px] xl:px-[15px]",
            i
          ),
          children: t,
        });
      };
    },
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
  },
  function (e) {
    e.O(0, [285, 363, 922, 691, 231, 648, 209, 661, 971, 23, 744], function () {
      return e((e.s = 75903));
    }),
      (_N_E = e.O());
  },
]);
