(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [818],
  {
    80042: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 54090)),
        Promise.resolve().then(i.bind(i, 65549)),
        Promise.resolve().then(i.bind(i, 27813)),
        Promise.resolve().then(i.bind(i, 62315)),
        Promise.resolve().then(i.bind(i, 93899)),
        Promise.resolve().then(i.bind(i, 56514)),
        Promise.resolve().then(i.bind(i, 23769)),
        Promise.resolve().then(i.bind(i, 65205)),
        Promise.resolve().then(i.bind(i, 29983)),
        Promise.resolve().then(i.bind(i, 51398)),
        Promise.resolve().then(i.bind(i, 60171)),
        Promise.resolve().then(i.bind(i, 12170)),
        Promise.resolve().then(i.bind(i, 6477)),
        Promise.resolve().then(i.bind(i, 16533)),
        Promise.resolve().then(i.bind(i, 69118));
    },
    54090: function (e, t, i) {
      "use strict";
      i.d(t, {
        AboutUs: function () {
          return u;
        },
      });
      var a = i(57437),
        s = i(49582),
        n = i(2265),
        l = i(71204),
        r = i(86705),
        o = i(60834),
        c = i(16661);
      let d = () =>
        (0, a.jsxs)("div", {
          className: "flex flex-col gap-[30px] xl:mb-[30px]",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-row items-center gap-[15px]",
              children: [
                (0, a.jsx)("div", {
                  className: "w-full md:w-[30px] h-[1px] bg-module",
                }),
                (0, a.jsx)(c.ZT, {
                  variant: "h6",
                  className: "text-subtext whitespace-nowrap",
                  children: "Some Usecases",
                }),
                (0, a.jsx)("div", { className: "w-full h-[1px] bg-module" }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-row justify-around text-center",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2.5",
                  children: [
                    (0, a.jsx)(c.JO, { icon: "brainNodes" }),
                    (0, a.jsx)(c.ZT, {
                      variant: "body1",
                      className: "!text-body1 text-subtext whitespace-nowrap",
                      fontInter: !0,
                      children: "LLM Training",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2.5",
                  children: [
                    (0, a.jsx)(c.JO, { icon: "graphicRendering" }),
                    (0, a.jsxs)(c.ZT, {
                      variant: "body1",
                      className: "!text-body1 text-subtext whitespace-nowrap",
                      fontInter: !0,
                      children: [
                        "Running Inference ",
                        (0, a.jsx)("br", {}),
                        " On Trained Models",
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2.5",
                  children: [
                    (0, a.jsx)(c.JO, { icon: "rotateCube" }),
                    (0, a.jsxs)(c.ZT, {
                      variant: "body1",
                      className: "!text-body1 text-subtext whitespace-nowrap",
                      fontInter: !0,
                      children: [
                        "Distributed deep ",
                        (0, a.jsx)("br", {}),
                        " learning",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      s.ZP.registerPlugin(l.i);
      let u = () => {
        let { xlScreen: e } = (0, r.z)(),
          t = (0, n.useRef)(null),
          i = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let a = t.current,
              n = i.current;
            a &&
              n &&
              (s.ZP.fromTo(
                a,
                { x: "-30%", opacity: 0 },
                {
                  x: "0%",
                  opacity: 1,
                  duration: 1.5,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: a,
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
              ));
          }, [e]),
          (0, a.jsx)("section", {
            id: "about-section",
            className:
              "pt-[30px] md:pt-[90px] xl:pt-[150px] pb-[50px] md:pb-[60px] xl:pb-[75px]",
            children: (0, a.jsxs)(o.H, {
              className:
                "flex flex-row flex-wrap xl:flex-nowrap gap-[45px] xl:gap-[60px]",
              children: [
                (0, a.jsxs)("div", {
                  ref: t,
                  className: "w-full xl:w-1/2 flex flex-col justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "max-w-[514px] flex flex-col gap-[15px]",
                      children: [
                        (0, a.jsx)(c.ZT, {
                          variant: "h6",
                          className: "text-subtext",
                          children: "ABOUT US",
                        }),
                        (0, a.jsx)(c.ZT, {
                          variant: "h2",
                          className: "!text-h3 xl:!text-h2 max-w-[520px]",
                          children:
                            "Deploy Parallel Code To Harness The Full Value Of Your GPUs/CPUs & Drive Down Costs",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "hidden xl:block",
                      children: (0, a.jsx)(d, {}),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  ref: i,
                  className:
                    "w-full xl:w-1/2 flex flex-col md:flex-row xl:flex-col gap-[47px] md:gap-[30px] xl:gap-[47px]",
                  children: [
                    (0, a.jsx)("div", {
                      className: "w-full md:w-1/2 xl:w-full",
                      children: (0, a.jsx)(c.HN, {
                        title: "The Challenge",
                        subtitle:
                          "The exponential rise of generative AI technology has created unprecedented demand for GPUs, which current supply is struggling to keep up with.",
                        subtitleSecond:
                          "To address this AI developers need to use their GPU capacity more efficiently. Traditional sequential programming does not fully utilize the computational power available from modern multi-core GPUs. This results in underperformance, where the potential of the hardware is not fully exploited, leading to slower processing times and increased operational costs.",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "w-full md:w-1/2 xl:w-full flex flex-col gap-[60px] md:gap-[30px]",
                      children: [
                        (0, a.jsx)(c.HN, {
                          icon: "puzzle",
                          title: "How we solve it",
                          subtitle:
                            "ParallelAI is an advanced AI language platform to improve the use of compute resources. Made for businesses facing performance issues, ParallelAI uses cutting-edge parallel processing techniques to increase efficiency, helping organizations get more done while reducing the need for large infrastructures.",
                        }),
                        (0, a.jsx)("div", {
                          className: "block xl:hidden",
                          children: (0, a.jsx)(d, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    65549: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return h;
        },
      });
      var a = i(57437),
        s = i(66648),
        n = i(2265),
        l = {
          src: "/_next/static/media/queryGenieX.6f4b4a6c.svg",
          height: 468,
          width: 1200,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = {
          src: "/_next/static/media/dataStreamX.c613eafc.svg",
          height: 468,
          width: 1200,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/dataRefineryX.d066197d.svg",
          height: 468,
          width: 1200,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/xtractInterfaceX.29cf7462.svg",
          height: 468,
          width: 1200,
          blurWidth: 0,
          blurHeight: 0,
        };
      i(66056);
      var d = i(16661),
        u = i(93960),
        x = i(49354);
      let m = (e) => {
        let {
          className: t,
          badgeClassName: i,
          badgeTitle: s,
          badgeTitleClassName: n,
          title: l,
          description: r,
          isHovered: o,
        } = e;
        return (0, a.jsxs)("div", {
          className: (0, x.cn)(
            "pai-architecture-enginex-container text-white\n        transition duration-400 max-w-[60%] h-fit px-1 py-4\n        flex flex-col items-center justify-center text-center gap-4 md:gap-3 lg:gap-4",
            t
          ),
          style: { opacity: o ? 1 : 0, zIndex: 1 },
          children: [
            (0, a.jsx)(u.C, {
              className: (0, x.cn)(
                "px-[10px] h-[31px] md:h-[21px] lg:h-[31px]",
                i
              ),
              children: (0, a.jsx)(d.ZT, {
                className: (0, x.cn)(
                  "text-[16px] md:text-body2 lg:text-[16px]",
                  n
                ),
                children: s,
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 md:gap-2 lg:gap-3",
              children: [
                (0, a.jsx)(d.ZT, {
                  className: "text-h5 md:text-body1 lg:text-h5",
                  children: l,
                }),
                (0, a.jsx)(d.ZT, {
                  className:
                    "text-body1 md:text-body2 lg:text-body1 leading-7 md:leading-8 lg:leading-7",
                  fontInter: !0,
                  style: { color: "var(--subtext)" },
                  children: r,
                }),
              ],
            }),
          ],
        });
      };
      var p = i(60834);
      function h() {
        let [e, t] = (0, n.useState)(""),
          i = () => {
            t("");
          };
        return (0, a.jsx)("section", {
          id: "architecture-section",
          className: "py-[50px] xl:py-[75px]",
          children: (0, a.jsxs)(p.H, {
            className: "flex flex-col items-center justify-between",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col gap-7 text-center items-center pb-8 w-full",
                children: [
                  (0, a.jsx)(d.ZT, {
                    variant: "h6",
                    className: "text-subtext",
                    children: "ARCHITECTURE BRIEF",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3 text-center max-w-[580px]",
                    children: [
                      (0, a.jsx)(d.ZT, {
                        variant: "h2",
                        children: "Parallel Code Transformation",
                      }),
                      (0, a.jsx)(d.ZT, {
                        className:
                          "!text-body1 !md:text-body2 !lg:text-body1 text-subtext leading-7",
                        fontInter: !0,
                        children:
                          "ParallelAI masterfully combines efficiency, scalability, and precision in a framework designed to optimize parallel processing and enhance computational performance.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "pai-architecture-schema-container-bg relative hidden md:flex place-items-center",
                children: [
                  (0, a.jsx)(s.default, {
                    className:
                      "relative transition duration-400 object-contain ",
                    src: l,
                    alt: "Brief schema",
                    fill: !0,
                    priority: !0,
                    style: { opacity: "queryGenieX" === e ? 1 : 0, zIndex: 1 },
                  }),
                  (0, a.jsx)(s.default, {
                    className:
                      "relative transition duration-400 object-contain",
                    src: r,
                    alt: "Brief schema",
                    fill: !0,
                    priority: !0,
                    style: { opacity: "dataStreamX" === e ? 1 : 0, zIndex: 1 },
                  }),
                  (0, a.jsx)(s.default, {
                    className:
                      "relative transition duration-400 object-contain",
                    src: c,
                    alt: "Brief schema",
                    fill: !0,
                    priority: !0,
                    style: {
                      opacity: "xtractInterfaceX" === e ? 1 : 0,
                      zIndex: 1,
                    },
                  }),
                  (0, a.jsx)(s.default, {
                    className:
                      "relative transition duration-400 object-contain",
                    src: o,
                    alt: "Brief schema",
                    fill: !0,
                    priority: !0,
                    style: {
                      opacity: "dataRefineryX" === e ? 1 : 0,
                      zIndex: 1,
                    },
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "absolute top-0 left-0 w-full h-full z-[2] hidden md:flex",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col w-[40%] h-full",
                        children: [
                          (0, a.jsx)("div", {
                            className: "flex w-full h-[50%]",
                            onMouseEnter: () => t("queryGenieX"),
                            onMouseLeave: i,
                            children: (0, a.jsx)(m, {
                              badgeTitleClassName:
                                "pai-architecture-enginex-title-gradient",
                              badgeTitle: "ParallelAIEngineX",
                              title: "Language Model Layer",
                              description:
                                "\n            Transformation of high-level programming constructs into optimized\n            parallel code.",
                              isHovered: "queryGenieX" === e,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "flex w-full h-[50%] content-end ",
                            onMouseEnter: () => t("dataStreamX"),
                            onMouseLeave: i,
                            children: (0, a.jsx)(m, {
                              badgeClassName: "bg-pink-shade",
                              badgeTitleClassName: "text-brand-pink",
                              badgeTitle: "RetrievalAugmentX",
                              title: "Library Embedding Graph",
                              description:
                                "\n            Synchronisation process by continuously updating the latest code optimizations.",
                              isHovered: "dataStreamX" === e,
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", { className: "flex w-[20%] h-full" }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col  w-[40%] h-full",
                        children: [
                          (0, a.jsx)("div", {
                            className: "flex w-full h-[50%] justify-end",
                            onMouseEnter: () => t("xtractInterfaceX"),
                            onMouseLeave: i,
                            children: (0, a.jsx)(m, {
                              badgeClassName: "bg-lavendel-shade",
                              badgeTitleClassName: "text-brand-lavendel",
                              badgeTitle: "CodeGenX",
                              title: "Application Layer",
                              description:
                                "\n                  Interfaces with the AI Engine to generate and display optimized Bend code.",
                              isHovered: "xtractInterfaceX" === e,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "flex w-full h-[50%] content-end justify-end",
                            onMouseEnter: () => t("dataRefineryX"),
                            onMouseLeave: i,
                            children: (0, a.jsx)(m, {
                              badgeClassName: "bg-purple-shade",
                              badgeTitleClassName: "text-brand-purple",
                              badgeTitle: "GPUHostX",
                              title: "GPU Hosting Layer",
                              description:
                                "\n            Specialized GPU hosting optimized for high-performance computing.",
                              isHovered: "dataRefineryX" === e,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "pai-architecture-schema-container-mobile-bg bg-[url('/images/architecture-bg.svg')] block md:hidden",
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-full flex flex-col items-center gap-8 md:hidden pt-8",
                children: [
                  (0, a.jsx)(m, {
                    className: "w-full max-w-[100%]",
                    badgeTitleClassName:
                      "pai-architecture-enginex-title-gradient",
                    badgeTitle: "ParallelAIEngineX",
                    title: "Language Model Layer",
                    description:
                      "\n            Transformation of high-level programming constructs into optimized\n            parallel code.",
                    isHovered: !0,
                  }),
                  (0, a.jsx)(m, {
                    className: "w-full max-w-[100%]",
                    badgeClassName: "bg-pink-shade",
                    badgeTitleClassName: "text-brand-pink",
                    badgeTitle: "RetrievalAugmentX",
                    title: "Library Embedding Graph",
                    description:
                      "\n            Synchronisation process by continuously updating the latest code optimizations.",
                    isHovered: !0,
                  }),
                  (0, a.jsx)(m, {
                    className: "w-full max-w-[100%]",
                    badgeClassName: "bg-lavendel-shade",
                    badgeTitleClassName: "text-brand-lavendel",
                    badgeTitle: "CodeGenX",
                    title: "Application Layer",
                    description:
                      "\n                  Interfaces with the AI Engine to generate and display optimized Bend code.",
                    isHovered: !0,
                  }),
                  (0, a.jsx)(m, {
                    className: "w-full max-w-[100%]",
                    badgeClassName: "bg-purple-shade",
                    badgeTitleClassName: "text-brand-purple",
                    badgeTitle: "GPUHostX",
                    title: "GPU Hosting Layer",
                    description:
                      "\n            Specialized GPU hosting optimized for high-performance computing.",
                    isHovered: !0,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    27813: function (e, t, i) {
      "use strict";
      i.d(t, {
        CardsSection: function () {
          return u;
        },
      });
      var a = i(57437),
        s = i(5540),
        n = i(53267),
        l = i(66648),
        r = i(16661);
      let o = (e) => {
        let { imgSrc: t, imgAlt: i, title: s, subtitle: n } = e;
        return (0, a.jsxs)(r.ny, {
          hoveredHidden: !0,
          className:
            "flex flex-col rounded-[10px] !p-[30px] gap-5 transition-all border border-module hover:border-brand-pink hover:bg-gradient-brand-pink",
          beforeClassName: "z-[1]",
          children: [
            (0, a.jsx)("div", {
              className: "flex justify-center items-center",
              children: (0, a.jsx)(l.default, { src: t, alt: i }),
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col items-center text-center gap-2.5",
              children: [
                (0, a.jsx)(r.ZT, { variant: "h6", children: s }),
                (0, a.jsx)(r.ZT, {
                  variant: "body1",
                  className: "!text-body1 text-subtext font-medium",
                  fontInter: !0,
                  children: n,
                }),
              ],
            }),
          ],
        });
      };
      var c = i(60834),
        d = i(92672);
      i(43034), i(88300), i(17322);
      let u = () =>
        (0, a.jsx)("section", {
          className: "py-[50px] md:pt-[60px] xl:py-[75px]",
          children: (0, a.jsxs)(c.H, {
            children: [
              (0, a.jsx)("div", {
                className: "hidden md:flex flex-row gap-[30px]",
                children: d.Rf.map((e) => {
                  let {
                    id: t,
                    imgAlt: i,
                    imgSrc: s,
                    title: n,
                    subtitle: l,
                  } = e;
                  return (0, a.jsx)(
                    o,
                    { imgAlt: i, imgSrc: s, title: n, subtitle: l },
                    t
                  );
                }),
              }),
              (0, a.jsx)(n.tq, {
                modules: [s.tl],
                spaceBetween: 30,
                slidesPerView: 1,
                pagination: { clickable: !0 },
                loop: !0,
                className: "md:!hidden w-full h-auto relative",
                children: d.Rf.map((e) => {
                  let {
                    id: t,
                    imgAlt: i,
                    imgSrc: s,
                    title: l,
                    subtitle: r,
                  } = e;
                  return (0, a.jsx)(
                    n.o5,
                    {
                      children: (0, a.jsx)(o, {
                        imgAlt: i,
                        imgSrc: s,
                        title: l,
                        subtitle: r,
                      }),
                    },
                    t
                  );
                }),
              }),
            ],
          }),
        });
    },
    62315: function (e, t, i) {
      "use strict";
      i.d(t, {
        Carousel: function () {
          return d;
        },
      });
      var a = i(57437),
        s = i(66648),
        n = i(5540),
        l = i(53267),
        r = i(16661),
        o = i(60834),
        c = i(92672);
      i(43034), i(78626);
      let d = () =>
        (0, a.jsx)("section", {

        });
    },
    93899: function (e, t, i) {
      "use strict";
      i.d(t, {
        FAQ: function () {
          return d;
        },
      });
      var a = i(57437),
        s = i(2265),
        n = i(49582),
        l = i(16661),
        r = i(92672),
        o = i(60834),
        c = i(86705);
      let d = () => {
        let [e, t] = (0, s.useState)(null),
          { xlScreen: i } = (0, c.z)(),
          d = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = d.current;
            e &&
              n.ZP.fromTo(
                e,
                { y: "30%", opacity: 0 },
                {
                  y: "0%",
                  opacity: 1,
                  duration: 1.5,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: e,
                    start: "top 80%",
                    end: "top 100%",
                    toggleActions: "restart none reverse none",
                  },
                }
              );
          }, [i]),
          (0, a.jsx)("section", {
            className: "py-[50px] xl:py-[75px]",
            ref: d,
            children: (0, a.jsxs)(o.H, {
              className:
                "flex flex-col xl:flex-row flex-wrap xl:flex-nowrap gap-[60px] xl:gap-[150px]",
              children: [
                (0, a.jsx)("div", {
                  className: "order-2 xl:order-1 w-full max-w-[770px]",
                  children: (0, a.jsx)(l.UQ, {
                    type: "single",
                    collapsible: !0,
                    onValueChange: t,
                    children: r.Vj.map((t) => {
                      let { id: i, answer: s, question: n } = t;
                      return (0, a.jsxs)(
                        l.Qd,
                        {
                          value: "".concat(i),
                          className: "border-b border-shade",
                          children: [
                            (0, a.jsx)(l.o4, {
                              isOpen: e === "".concat(i),
                              className: "text-maintext",
                              children: (0, a.jsx)(l.ZT, {
                                variant: "h5",
                                fontInter: !0,
                                className:
                                  "!text-[16px] md:!text-[20px] font-medium text-left",
                                children: n,
                              }),
                            }),
                            (0, a.jsx)(l.vF, {
                              children: (0, a.jsx)(l.ZT, {
                                variant: "body1",
                                fontInter: !0,
                                className:
                                  "!text-body1 font-medium text-subtext text-left",
                                children: s,
                              }),
                            }),
                          ],
                        },
                        i
                      );
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "order-1 xl:order-2 flex flex-row xl:flex-col justify-between xl:justify-normal items-end xl:items-start gap-[15px] xl:gap-[30px]",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-[15px] xl:gap-[30px]",
                      children: [
                        (0, a.jsx)(l.ZT, { variant: "h2", children: "FAQ" }),
                        (0, a.jsx)(l.ZT, {
                          variant: "body1",
                          fontInter: !0,
                          className: "!text-body1  text-subtext",
                          children: "Can't find the answer here?",
                        }),
                      ],
                    }),
                    (0, a.jsx)(l.ny, {
                      hoveredHidden: !0,
                      className: "w-fit h-[44px]",
                      children: (0, a.jsx)(l.zx, {
                        className: "gap-2 normal-case",
                        children: "Contact Us",
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
    56514: function (e, t, i) {
      "use strict";
      i.d(t, {
        Hero: function () {
          return p;
        },
      });
      var a = i(57437),
        s = i(2265),
        n = i(16661),
        l = i(60834),
        r = i(87138),
        o = i(49354);
      let c = s.forwardRef((e, t) => {
        let { className: i, type: s, ...n } = e;
        return (0, a.jsx)("input", {
          type: s,
          className: (0, o.cn)(
            "flex h-9 w-full rounded-md border border-subtext bg-transparent px-3 py-1 text-sm text-white shadow-sm transition-colors\n          file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground\n          placeholder:text-subtext\n          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring\n          focus:border-brand-pink\n          disabled:cursor-not-allowed disabled:opacity-50",
            i
          ),
          ref: t,
          ...n,
        });
      });
      c.displayName = "Input";
      var d = i(38472),
        u = i(14245);
      let x = u
        .Z_()
        .required("Required Field")
        .test(
          "is-email",
          "Invalid email",
          (e) => !!e && !!e.includes("@") && u.Z_().email().isValidSync(e)
        );
      function m(e) {
        let { handleClose: t } = e,
          [i, l] = (0, s.useState)(""),
          [r, o] = (0, s.useState)(""),
          u = async () => {
            (await x.isValid(i))
              ? await d.Z.post(
                  "".concat("https://www.parallelai.tech/", "/api/subscribe"),
                  { userEmail: i }
                )
                  .then((e) => {
                    var i, a, s, n, l;
                    (null === (i = e.data) || void 0 === i
                      ? void 0
                      : i.success) &&
                      (o("Thanks For Your Submission"),
                      setTimeout(() => {
                        t();
                      }, 3e3)),
                      (
                        null === (n = e.data) || void 0 === n
                          ? void 0
                          : null === (s = n.error) || void 0 === s
                          ? void 0
                          : null === (a = s.detail) || void 0 === a
                          ? void 0
                          : a.includes("already exist")
                      )
                        ? (o("This User Already Exists"),
                          setTimeout(() => {
                            o("");
                          }, 3e3))
                        : (null === (l = e.data) || void 0 === l
                            ? void 0
                            : l.error) &&
                          (o("Please Try Again Later"),
                          setTimeout(() => {
                            o("");
                          }, 3e3));
                  })
                  .catch(() => {
                    o("Please Try Again Later"),
                      setTimeout(() => {
                        o("");
                      }, 3e3);
                  })
              : o("Invalid Email Address");
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className:
                "fixed inset-0 bg-[#1919194D] bg-opacity-75 transition-opacity z-10",
              "aria-hidden": "true",
              onClick: t,
            }),
            (0, a.jsxs)("div", {
              className:
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex flex-col items-center gap-8 border border-module rounded-[20px] backdrop-blur-lg z-20 max-w-[420px] sm:mx-3",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-4 min-w-[420px]",
                  children: [
                    (0, a.jsx)(n.ZT, {
                      variant: "h6",
                      className: "font-medium text-subtext",
                      fontInter: !0,
                      children: "Welcome to",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-row items-center m-auto gap-2.5 ",
                      children: [
                        (0, a.jsx)(n.JO, {
                          icon: "logo",
                          className: " w-9 h-10",
                        }),
                        (0, a.jsx)(n.JO, {
                          icon: "logoText",
                          className: " w-32 h-[23px]",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-6 w-full",
                  children: [
                    (0, a.jsx)(c, {
                      className: "w-full rounded-xl min-h-[52px]",
                      type: "email",
                      placeholder: "Continue with Email",
                      value: i,
                      onChange: (e) => {
                        r && o(""), l(e.target.value);
                      },
                    }),
                    (0, a.jsx)(n.zx, {
                      className: "w-full",
                      variant: "primary",
                      disabled: !i,
                      onClick: u,
                      children: "Submit",
                    }),
                    r &&
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)(n.ZT, {
                          className: "text-brand-pink",
                          children: r,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let p = () => {
        let [e, t] = (0, s.useState)(!1);
        return (0, a.jsx)("section", {
          className:
            "bg-[url(/images/hero-bg.gif)] bg-center bg-no-repeat bg-cover pb-[75px] mt-5",
          children: (0, a.jsxs)(l.H, {
            className:
              "flex flex-col items-center pt-[180px] xl:pt-[150px] pb-10 text-center ",
            children: [
              (0, a.jsx)(n.ny, {
                className:
                  "mb-[25px] py-2.5 px-4 z-[1] border border-highlight rounded-[10px]",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-row items-center gap-1.5 py-[7px] px-4 ",
                  children: [
                    (0, a.jsx)(n.ZT, {
                      variant: "h6",
                      fontInter: !0,
                      className: "font-medium",
                      children: "Welcome to",
                    }),
                    (0, a.jsx)(n.JO, {
                      icon: "logo",
                      className: "w-[19px] h-5",
                    }),
                    (0, a.jsx)(n.ZT, { variant: "h6", children: "ParallelAI" }),
                  ],
                }),
              }),
              (0, a.jsx)(n.ZT, {
                variant: "h1",
                className: "max-w-[655px] mb-5 md:mb-[30px]",
                children: "Unleashing The Power Of Parallel Processing",
              }),
              (0, a.jsxs)(n.ZT, {
                variant: "body1",
                className: "max-w-[470px] !text-body1 text-subtext",
                fontInter: !0,
                children: [
                  "To Slash Computation Times By Up To",
                  " ",
                  (0, a.jsx)("span", {
                    className: "font-bold text-brand-pink bg-transparent",
                    children: "20x",
                  }),
                  " ",
                  "For AI Developers",
                ],
              }),
              (0, a.jsxs)("div", {
                className: "mt-12 relative w-full max-w-[350px] flex gap-4",
                children: [
                  (0, a.jsx)(n.ny, {
                    hoveredHidden: !0,
                    beforeClassName:
                      "border border-module rounded-[12px] z-[1]",
                    children: (0, a.jsx)(r.default, {
                      href: "/login",
                      children: (0, a.jsxs)(n.zx, {
                        className: "gap-2 w-full",
                        children: [
                          "Launch PACT",
                          (0, a.jsx)(n.JO, {
                            icon: "arrowRight",
                            className: "stroke-pink",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)(n.ny, {
                    hoveredHidden: !0,
                    beforeClassName:
                      "border border-module rounded-[12px] z-[1]",
                      children: (0, a.jsx)(r.default, {
                      href:"https://app.uniswap.org/",
                      children: (0, a.jsxs)(n.zx, {
                      className: "gap-2 w-full",
                      children: [
                        "Buy Now",
                        (0, a.jsx)(n.JO, {
                          icon: "arrowRight",
                          className: "stroke-pink",
                        }),
                      ],
                    }),
                  }),
                  }),
                ],
              }),
              e && (0, a.jsx)(m, { handleClose: () => t(!1) }),
            ],
          }),
        });
      };
    },
    23769: function (e, t, i) {
      "use strict";
      i.d(t, {
        IndustryAccelerator: function () {
          return m;
        },
      });
      var a = i(57437),
        s = i(49582),
        n = i(66648),
        l = i(2265),
        r = i(67428),
        o = i(71204),
        c = i(60834),
        d = i(16661),
        u = {
          src: "/_next/static/media/industry-accelerator.5c5e48c2.svg",
          height: 504,
          width: 541,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = i(92672);
      s.ZP.registerPlugin(o.i);
      let m = () => {
        let e = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            let t = e.current;
            t &&
              s.ZP.fromTo(
                t,
                { x: "30%", y: "50%", opacity: 0 },
                {
                  x: "0%",
                  y: "0%",
                  opacity: 1,
                  duration: 1.5,
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
          (0, a.jsxs)("section", {
            id: "industry-accelerator-section",
            className: "relative",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute top-[120px] w-full h-[500px] z-[-1] overflow-hidden hidden md:block",
                children: (0, a.jsx)(r.Z, {
                  scene:
                    "https://prod.spline.design/Eppkji4pM8NTfiDB/scene.splinecode",
                }),
              }),
              (0, a.jsxs)(c.H, {
                className:
                  "py-[50px] xl:py-[75px] flex flex-col items-center gap-[30px] xl:gap-10",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-[15px] text-center",
                    children: [
                      (0, a.jsx)(d.ZT, {
                        variant: "h2",
                        children: "Industry Accelerator",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "max-w-[530px] rounded-xl p-2.5 backdrop-blur-md",
                        children: (0, a.jsx)(d.ZT, {
                          variant: "body1",
                          className: "!text-body1 text-subtext",
                          fontInter: !0,
                          children:
                            "Accelerate computing tasks across various industries with ParallelAI, ensuring maximum efficiency and superior performance in real-time.",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "w-full flex flex-col xl:flex-row items-center bg-backing gap-[60px] p-[15px] md:p-5 xl:p-[30px] border border-module rounded-[10px]",
                    children: [
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)(n.default, {
                          src: u,
                          alt: "industry-accelerator-image",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        ref: e,
                        className:
                          "xl:max-w-[540px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-[15px] xl:gap-[30px]",
                        children: x._d.map((e) => {
                          let { id: t, title: i, subtitle: s, icon: n } = e;
                          return (0, a.jsx)(
                            d.ho,
                            { icon: n, title: i, subtitle: s },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    65205: function (e, t, i) {
      "use strict";
      i.d(t, {
        OurRoadmap: function () {
          return x;
        },
      });
      var a = i(57437),
        s = i(49582),
        n = i(71204),
        l = i(2265),
        r = i(16661),
        o = i(92672),
        c = i(60834),
        d = i(49354),
        u = i(93960);
      s.ZP.registerPlugin(n.i);
      let x = () => {
        let e = (0, l.useRef)(null),
          [t, i] = (0, l.useState)(null),
          [n, x] = (0, l.useState)("");
        return (
          (0, l.useEffect)(() => {
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
          (0, a.jsx)("section", {
            ref: e,
            className: "py-[50px] xl:py-[75px]",
            children: (0, a.jsxs)(c.H, {
              className:
                "flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-[80px]",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-[15px] pb-7 shrink-0",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-4 items-center",
                      children: [
                        (0, a.jsx)(r.JO, { icon: "route" }),
                        (0, a.jsx)(r.ZT, {
                          variant: "h2",
                          children: "Our Roadmap",
                        }),
                      ],
                    }),
                    (0, a.jsx)(r.ZT, {
                      variant: "body1",
                      fontInter: !0,
                      className: "!text-body1 text-subtext",
                      children: "Our Commitment to Evolution and Excellence",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "w-full bg-[url(/images/roadmap-bg.svg)] bg-no-repeat bg-contain bg-[center_left_32px] py-[98px]",
                  children: (0, a.jsx)(r.UQ, {
                    type: "single",
                    collapsible: !0,
                    onValueChange: i,
                    children: o.Bq.map((e) => {
                      let {
                        id: i,
                        title: s,
                        badgeTitle: l,
                        subtitle: o,
                        description: c,
                        checkIcon: m,
                        startIcon: p,
                      } = e;
                      return (0, a.jsxs)(
                        "div",
                        {
                          className:
                            "flex justify-between items-center mb-9 gap-3.5 sm:gap-6 md:gap-9",
                          children: [
                            (0, a.jsx)("div", {
                              className: (0, d.cn)(
                                "flex shrink-0",
                                t === "".concat(i) ? "text-brand-white" : "",
                                n === "".concat(i) ? "text-brand-pink" : ""
                              ),
                              children: (0, a.jsx)(r.JO, {
                                icon: p,
                                color:
                                  n === "".concat(i)
                                    ? "var(--brand-pink)"
                                    : t === "".concat(i)
                                    ? "var(--white)"
                                    : "var(--subtext)",
                              }),
                            }),
                            (0, a.jsxs)(
                              r.Qd,
                              {
                                value: "".concat(i),
                                className: (0, d.cn)(
                                  "rounded-border-accordion border rounded-[10px] before:opacity-[0] hover:border-brand-pink w-full max-w-[750px]",
                                  t === "".concat(i)
                                    ? "before:opacity-[1] before:hover:opacity-[0]"
                                    : ""
                                ),
                                children: [
                                  (0, a.jsx)(r.o4, {
                                    isOpen: t === "".concat(i),
                                    className:
                                      "flex-row-reverse w-full justify-between p-2.5 sm:px-[30px] sm:py-[22px]",
                                    hideIcon: !0,
                                    onMouseEnter: () => x("".concat(i)),
                                    onMouseLeave: () => x(""),
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "flex w-full justify-between items-center gap-1",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex flex-col gap-2 sm:gap-3",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className: "flex gap-2 sm:gap-3",
                                              children: [
                                                (0, a.jsx)(r.ZT, {
                                                  variant: "h4",
                                                  className: "!text-white",
                                                  children: s,
                                                }),
                                                (0, a.jsxs)(u.C, {
                                                  className: (0, d.cn)(
                                                    "px-[10px] bg-pink-shade gap-2"
                                                  ),
                                                  children: [
                                                    (0, a.jsx)(r.ZT, {
                                                      className: (0, d.cn)(
                                                        "text-[16px] text-brand-pink"
                                                      ),
                                                      children: l,
                                                    }),
                                                    m &&
                                                      (0, a.jsx)(r.JO, {
                                                        icon: "check",
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)(r.ZT, {
                                              variant: "body1",
                                              className: "text-start",
                                              fontInter: !0,
                                              children: o,
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "bg-module p-2 rounded-[12px]",
                                          children: (0, a.jsx)(r.JO, {
                                            icon:
                                              t === "".concat(i)
                                                ? "minusSquare"
                                                : "plusSquare",
                                            className: (0, d.cn)(
                                              "w-6 h-6",
                                              n === "".concat(i)
                                                ? "!text-brand-pink"
                                                : t === "".concat(i)
                                                ? "!text-white"
                                                : "!text-subtext"
                                            ),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsxs)(r.vF, {
                                    className:
                                      "border-t border-module flex gap-3 items-center mx-3 sm:mx-[30px] pt-3 px-0",
                                    children: [
                                      (0, a.jsx)(r.JO, {
                                        icon: "circle",
                                        width: 20,
                                        height: 20,
                                        className: "shrink-0",
                                      }),
                                      (0, a.jsx)(r.ZT, {
                                        variant: "body1",
                                        fontInter: !0,
                                        className:
                                          "font-medium !text-body1 text-subtext text-left",
                                        children: c,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              i
                            ),
                          ],
                        },
                        "".concat(i)
                      );
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    29983: function (e, t, i) {
      "use strict";
      i.d(t, {
        Statistics: function () {
          return c;
        },
      });
      var a = i(57437),
        s = i(49582),
        n = i(2265),
        l = i(71204),
        r = i(16661),
        o = i(60834);
      s.ZP.registerPlugin(l.i);
      let c = () => {
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
          (0, a.jsx)("section", {
            ref: e,
            id: "features-section",
            className:
              "py-[50px] md:py-[60px] xl:py-[75px] bg-[url('/images/statistics-bg.svg')] bg-center bg-no-repeat bg-[length:100%] md:bg-[length:unset] ",
            children: (0, a.jsxs)(o.H, {
              className: "flex flex-col items-center gap-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col md:flex-row items-center gap-5",
                  children: [
                    (0, a.jsx)(r.ZT, {
                      variant: "h2",
                      className: "!text-h3 xl:!text-h2",
                      children: "20x Faster with",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-row items-center gap-2.5",
                      children: [
                        (0, a.jsx)(r.JO, {
                          icon: "logo",
                          className: "w-[38px] h-[42px]",
                        }),
                        (0, a.jsx)(r.JO, { icon: "logoText" }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-fit flex flex-col md:flex-row gap-5 md:gap-20 xl:gap-[100px]",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "relative max-w-[220px] flex flex-col items-center text-center",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute md:right-[-40px] xl:right-[-50px] top-2.5 md:top-1/2 -translate-y-1/2 pb-[30px] invisible md:visible",
                          children: (0, a.jsx)(r.JO, {
                            icon: "line",
                            className: "rotate-90 md:rotate-0",
                          }),
                        }),
                        (0, a.jsx)(r.ZT, {
                          variant: "h3",
                          className: "!text-h1 !leading-1  text-brand-lavendel",
                          children: "20x",
                        }),
                        (0, a.jsx)(r.ZT, {
                          variant: "h5",
                          children: "Faster Computation",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative max-w-[220px] flex flex-col items-center text-center",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute md:right-[-40px] xl:right-[-50px] top-2.5 md:top-1/2 -translate-y-1/2 pb-[30px]",
                          children: (0, a.jsx)(r.JO, {
                            icon: "line",
                            className: "rotate-90 md:rotate-0",
                          }),
                        }),
                        (0, a.jsx)(r.ZT, {
                          variant: "h3",
                          className: "!text-h1 !leading-1  text-brand-lavendel",
                          children: "30s",
                        }),
                        (0, a.jsx)(r.ZT, {
                          variant: "h5",
                          children: "Typical Task Completion Time",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative max-w-[220px] flex flex-col items-center text-center",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute md:right-[-40px] xl:right-[-50px] top-2.5 md:top-1/2 -translate-y-1/2 pb-[30px] visible md:invisible",
                          children: (0, a.jsx)(r.JO, {
                            icon: "line",
                            className: "rotate-90 md:rotate-0",
                          }),
                        }),
                        (0, a.jsx)(r.ZT, {
                          variant: "h3",
                          className: "!text-h1 !leading-1 text-brand-lavendel",
                          children: "10min",
                        }),
                        (0, a.jsx)(r.ZT, {
                          variant: "h5",
                          children: "Traditional Completion Time",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(r.ZT, {
                  variant: "body1",
                  className:
                    "max-w-[750px] !text-body1 text-center text-subtext",
                  children:
                    "ParallelAl's innovative execution model delivers unparalleled processing speeds, slashing computation times by up to 20x. A task that would typically take 10 minutes can now be completed in 30 seconds.",
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
          return P;
        },
        Fi: function () {
          return b;
        },
        MX: function () {
          return A;
        },
        Rf: function () {
          return T;
        },
        T1: function () {
          return I;
        },
        Vj: function () {
          return N;
        },
        _d: function () {
          return k;
        },
        dr: function () {
          return y;
        },
        oe: function () {
          return v;
        },
      });
      var a = i(82288),
        s = i(98535),
        n = i(91184),
        l = i(63685),
        r = i(30548),
        o = i(29611),
        c = i(71021),
        d = i(7858),
        u = i(67139),
        x = i(28533),
        m = i(49108),
        p = i(6713),
        h = i(11321),
        f = i(93835),
        g = i(5490);
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
          { id: 1, imgSrc: l.default, text: "Aethir" },
          { id: 2, imgSrc: m.default, text: "Neurochain" },
          { id: 3, imgSrc: u.default, text: "Marlin" },
          { id: 4, imgSrc: d.default, text: "Kaisar" },
          { id: 5, imgSrc: x.default, text: "MEXC" },
          { id: 6, imgSrc: o.default, text: "Coinmarketcap" },
          { id: 7, imgSrc: r.default, text: "Coingecko" },
          { id: 10, imgSrc: c.default, text: "Io.Net" },
          { id: 11, imgSrc: l.default, text: "Aethir" },
          { id: 12, imgSrc: m.default, text: "Neurochain" },
          { id: 13, imgSrc: u.default, text: "Marlin" },
          { id: 14, imgSrc: d.default, text: "Kaisar" },
          { id: 15, imgSrc: x.default, text: "MEXC" },
          { id: 16, imgSrc: o.default, text: "Coinmarketcap" },
          { id: 17, imgSrc: r.default, text: "Coingecko" },
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
        N = [
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
        T = [
          {
            id: 0,
            title: "Automatic Parallelization",
            subtitle:
              "Every operation capable of running in parallel does seamlessly, without  explicit instructions.",
            imgSrc: a.default,
            imgAlt: "Automatic parallelization image",
          },
          {
            id: 1,
            title: "Maximized Performance",
            subtitle:
              "The full potential of both CPU and GPU cores, solving problems in a fraction of the time.",
            imgSrc: n.default,
            imgAlt: "Maximized Performance image",
          },
          {
            id: 2,
            title: "Intuitive Coding",
            subtitle:
              "Write high-level, Python-like code without  the complexities of parallel programming.",
            imgSrc: s.default,
            imgAlt: "Intuitive Coding image",
          },
        ],
        P = [
          {
            id: 0,
            title: "Infrastructure Development",
            subtitle:
              "We provide developers with scalable, high-performance AI tools that simplify the development, training, and deployment of models, ensuring efficiency and cost-effectiveness.",
            imgSrc: p.default,
            imgAlt: "Infrastructure Development image",
          },
          {
            id: 1,
            title: "Strategic Partnerships",
            subtitle:
              "We collaborate with leading AI and Web3 projects to unlock synergies, expand use cases, and accelerate the adoption of decentralized AI.",
            imgSrc: h.default,
            imgAlt: "Strategic Partnerships image",
          },
          {
            id: 2,
            title: "Ecosystem Growth",
            subtitle:
              "Our initiatives include onboarding AI projects, supporting them with resources, and integrating their solutions into the Parallel AI ecosystem.",
            imgSrc: f.default,
            imgAlt: "Ecosystem Growth image",
          },
          {
            id: 3,
            title: "Transparency and Governance",
            subtitle:
              "The foundation is guided by principles of transparency and community-led governance, ensuring that every decision aligns with the values of our ecosystem.",
            imgSrc: g.default,
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
        A = [
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
        k = [
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
          return s;
        },
      });
      var a = i(2265);
      let s = () => {
        let [e, t] = (0, a.useState)(0),
          i = (0, a.useCallback)(() => t(window.innerWidth), []);
        return (
          (0, a.useEffect)(() => {
            window.innerWidth && t(window.innerWidth);
          }, []),
          (0, a.useEffect)(
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
          return n;
        },
      });
      var a = i(57437),
        s = i(49354);
      let n = (e) => {
        let { children: t, className: i } = e;
        return (0, a.jsx)("div", {
          className: (0, s.cn)(
            "max-w-[1235px] w-full mx-auto px-[15px] md:px-[30px] xl:px-[15px]",
            i
          ),
          children: t,
        });
      };
    },
    93960: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return r;
        },
      });
      var a = i(57437);
      i(2265);
      var s = i(12218),
        n = i(49354);
      let l = (0, s.j)(
        "inline-flex items-center justify-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default: "bg-module text-body1 text-white hover:text-brand-pink",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function r(e) {
        let { className: t, variant: i, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, n.cn)(l({ variant: i }), t),
          ...s,
        });
      }
    },
    88300: function () {},
    78626: function () {},
    66056: function () {},
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
    e.O(
      0,
      [
        285, 363, 330, 342, 331, 922, 210, 691, 231, 541, 648, 209, 653, 661,
        971, 23, 744,
      ],
      function () {
        return e((e.s = 80042));
      }
    ),
      (_N_E = e.O());
  },
]);
