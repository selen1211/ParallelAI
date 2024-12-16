(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [661],
  {
    51398: function (e, t, s) {
      "use strict";
      s.d(t, {
        Accordion: function () {
          return d;
        },
        AccordionContent: function () {
          return C;
        },
        AccordionItem: function () {
          return l;
        },
        AccordionTrigger: function () {
          return h;
        },
      });
      var o = s(57437),
        r = s(27372),
        n = s(2265),
        i = s(95955),
        a = s(49354);
      s(24194);
      let d = r.fC,
        l = (0, n.forwardRef)((e, t) => {
          let { className: s, ...n } = e;
          return (0, o.jsx)(r.ck, {
            ref: t,
            className: (0, a.cn)("border-b border-shade", s),
            ...n,
          });
        });
      l.displayName = "AccordionItem";
      let h = (0, n.forwardRef)((e, t) => {
        let {
          className: s,
          children: n,
          isOpen: d,
          icon: l,
          hideIcon: h,
          ...C
        } = e;
        return (0, o.jsx)(r.h4, {
          className: "flex",
          children: (0, o.jsxs)(r.xz, {
            ref: t,
            className: (0, a.cn)(
              "pai-accordion-trigger flex flex-1 items-center gap-5 py-[15px] font-medium transition-all",
              d ? "pb-1.5 md:pb-5" : "",
              d ? "[&>svg]:rotate-180" : "",
              "text-subtext hover:text-brand-pink",
              d ? "text-white" : "",
              s
            ),
            ...C,
            children: [
              !h &&
                (0, o.jsx)(i.JO, {
                  icon: l || (d ? "minusCircle" : "plusCircle"),
                  className: (0, a.cn)("w-6 h-6 shrink-0"),
                }),
              n,
            ],
          }),
        });
      });
      h.displayName = r.xz.displayName;
      let C = (0, n.forwardRef)((e, t) => {
        let { className: s, children: n, ...i } = e;
        return (0, o.jsx)(r.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...i,
          children: (0, o.jsx)("div", {
            className: (0, a.cn)("pb-[15px] pl-[47px] pt-0", s),
            children: n,
          }),
        });
      });
      C.displayName = r.VY.displayName;
    },
    95955: function (e, t, s) {
      "use strict";
      s.d(t, {
        JO: function () {
          return n;
        },
      });
      var o = s(57437);
      let r = {
          logo: (e) =>
            (0, o.jsxs)("svg", {
              width: "28",
              height: "30",
              viewBox: "0 0 28 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsxs)("g", {
                  clipPath: "url(#clip0_38_50)",
                  children: [
                    (0, o.jsx)("path", {
                      d: "M24.2272 3.05442C22.145 1.085 19.3517 0 16.3613 0H0.15327V3.0654H16.3613C20.9041 3.0654 24.463 6.45512 24.463 10.7826C24.463 15.1101 20.9041 18.4998 16.3613 18.4998H6.60082C4.99319 18.4998 3.56645 18.9574 2.47464 19.8236C0.832577 21.1259 0 23.2361 0 26.0956V30H3.0654V26.0956C3.0654 24.2189 3.50742 22.9167 4.37935 22.2253C5.06698 21.6799 5.96692 21.5652 6.60044 21.5652H16.3609C19.351 21.5652 22.1446 20.4806 24.2268 18.5108C26.3556 16.4971 27.528 13.7527 27.528 10.7826C27.528 7.8126 26.3556 5.06812 24.2268 3.05442H24.2272Z",
                      fill: "white",
                    }),
                    (0, o.jsx)("path", {
                      d: "M16.664 11.9814H6.31206C2.35922 12.14 0.00870421 14.235 0 19.1586C0.83409 16.4368 2.93824 15.0665 6.31206 15.0468H16.664C19.1027 15.0468 21.0869 13.1447 21.0869 10.8071C21.0869 8.46944 19.1027 6.56738 16.664 6.56738H0.217605V9.63278H16.664C17.4126 9.63278 18.0215 10.1596 18.0215 10.8071C18.0215 11.4546 17.4126 11.9814 16.664 11.9814Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, o.jsx)("defs", {
                  children: (0, o.jsx)("clipPath", {
                    id: "clip0_38_50",
                    children: (0, o.jsx)("rect", {
                      width: "27.528",
                      height: "30",
                      fill: "white",
                    }),
                  }),
                }),
              ],
            }),
          arrowRight: (e) =>
            (0, o.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M10 4L15 9L10 14",
                  stroke: (null == e ? void 0 : e.color) || "#EBEBEB",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15 9H3",
                  stroke: (null == e ? void 0 : e.color) || "#EBEBEB",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          puzzle: (e) =>
            (0, o.jsx)("svg", {
              width: "25",
              height: "24",
              viewBox: "0 0 25 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                d: "M20.1667 11C20.6627 11 21.1213 11.1573 21.5 11.4227V8.33333C21.5 6.86133 20.3067 5.66667 18.8333 5.66667H15.744C16.008 5.288 16.1667 4.83067 16.1667 4.33333C16.1667 3.044 15.1213 2 13.8333 2C12.5453 2 11.5 3.044 11.5 4.33333C11.5 4.83067 11.6573 5.288 11.9227 5.66667H8.83333C7.36 5.66667 6.16667 6.86133 6.16667 8.33333V11.4227C5.788 11.1587 5.32933 11 4.83333 11C3.54533 11 2.5 12.044 2.5 13.3333C2.5 14.6227 3.54533 15.6667 4.83333 15.6667C5.32933 15.6667 5.788 15.5093 6.16667 15.244V18.3333C6.16667 19.8053 7.36 21 8.83333 21H11.9227C11.6587 20.6213 11.5 20.164 11.5 19.6667C11.5 18.3773 12.5453 17.3333 13.8333 17.3333C15.1213 17.3333 16.1667 18.3773 16.1667 19.6667C16.1667 20.164 16.0093 20.6213 15.744 21H18.8333C20.3067 21 21.5 19.8053 21.5 18.3333V15.244C21.1213 15.508 20.6627 15.6667 20.1667 15.6667C18.8787 15.6667 17.8333 14.6227 17.8333 13.3333C17.8333 12.044 18.8787 11 20.1667 11Z",
                stroke: "#7D78FF",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          brainNodes: (e) =>
            (0, o.jsxs)("svg", {
              width: "34",
              height: "34",
              viewBox: "0 0 34 34",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M13.0566 18.8901L16.3163 22.1498C16.755 22.5885 17 23.1811 17 23.7995V27.5001",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M20.9433 15.11L17.6837 11.8503C17.245 11.4117 17 10.819 17 10.2007V6.5",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M4.7333 18.4443C3.90964 18.1457 3.19097 17.6463 2.6123 17",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M29.2666 18.4443C30.0903 18.1457 30.8089 17.6463 31.3876 17",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17 6.5C17 3.59967 14.6503 1.25 11.75 1.25C8.84967 1.25 6.5 3.59967 6.5 6.5C6.5 7.13 6.62833 7.725 6.83133 8.28267C6.71933 8.27567 6.612 8.25 6.5 8.25C3.59967 8.25 1.25 10.5997 1.25 13.5C1.25 14.851 1.775 16.069 2.61267 17C1.775 17.931 1.25 19.149 1.25 20.5C1.25 23.4003 3.59967 25.75 6.5 25.75C6.61433 25.75 6.71933 25.7243 6.83133 25.7173C6.62833 26.2773 6.5 26.8723 6.5 27.5C6.5 30.4003 8.84967 32.75 11.75 32.75C14.6503 32.75 17 30.4003 17 27.5",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M6.83105 25.7173C7.66405 25.666 8.44339 25.4303 9.12472 25.043",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M25.8057 10.3477C26.4053 9.77838 26.8767 9.05971 27.1683 8.28271",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M8.19372 10.3477C7.59405 9.77838 7.12272 9.05971 6.83105 8.28271",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17 6.5C17 3.59967 19.3497 1.25 22.25 1.25C25.1503 1.25 27.5 3.59967 27.5 6.5C27.5 7.13 27.3717 7.725 27.1687 8.28267C27.2807 8.27567 27.388 8.25 27.5 8.25C30.4003 8.25 32.75 10.5997 32.75 13.5C32.75 14.851 32.225 16.069 31.3873 17C32.225 17.931 32.75 19.149 32.75 20.5C32.75 23.4003 30.4003 25.75 27.5 25.75C27.3857 25.75 27.2807 25.7243 27.1687 25.7173C27.3717 26.2773 27.5 26.8723 27.5 27.5C27.5 30.4003 25.1503 32.75 22.25 32.75C19.3497 32.75 17 30.4003 17 27.5",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M27.1687 25.7173C26.3357 25.666 25.5563 25.4303 24.875 25.043",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M12.333 20.6665C13.7137 20.6665 14.833 19.5472 14.833 18.1665C14.833 16.7858 13.7137 15.6665 12.333 15.6665C10.9523 15.6665 9.83301 16.7858 9.83301 18.1665C9.83301 19.5472 10.9523 20.6665 12.333 20.6665Z",
                  fill: "#E373FF",
                }),
                (0, o.jsx)("path", {
                  d: "M21.667 18.3335C23.0477 18.3335 24.167 17.2142 24.167 15.8335C24.167 14.4528 23.0477 13.3335 21.667 13.3335C20.2863 13.3335 19.167 14.4528 19.167 15.8335C19.167 17.2142 20.2863 18.3335 21.667 18.3335Z",
                  fill: "#E373FF",
                }),
              ],
            }),
          brainNodes2: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M11 12.1499H17.6667",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.92 17.7364L14.3907 16.2071C14.14 15.9564 13.8013 15.8164 13.448 15.8164H11",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.92 6.56348L14.3907 8.09281C14.14 8.34348 13.8013 8.48348 13.448 8.48348H11",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M5.3338 13.1496C4.85247 13.1496 4.3938 13.0469 3.98047 12.8643",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M5.71867 8.09924C5.27067 7.57524 5 6.8939 5 6.1499",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M6.70582 17.4365C6.30449 17.6779 5.83516 17.8165 5.33382 17.8165C5.23249 17.8165 5.13382 17.8112 5.03516 17.8005",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M11 8.48324V6.1499C11 4.49257 9.65733 3.1499 8 3.1499C6.34267 3.1499 5 4.49257 5 6.1499C5 6.2739 5.02133 6.39257 5.036 6.51257C3.336 6.66457 2 8.07657 2 9.81657C2 11.1766 2.81733 12.3432 3.98533 12.8606C3.2 13.3246 2.66667 14.1712 2.66667 15.1499C2.66667 16.5206 3.70533 17.6366 5.036 17.7872C5.02133 17.9072 5 18.0259 5 18.1499C5 19.8072 6.34267 21.1499 8 21.1499C9.65733 21.1499 11 19.8072 11 18.1499V15.8166",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M19.667 14.4834C20.7716 14.4834 21.667 13.588 21.667 12.4834C21.667 11.3788 20.7716 10.4834 19.667 10.4834C18.5624 10.4834 17.667 11.3788 17.667 12.4834C17.667 13.588 18.5624 14.4834 19.667 14.4834Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17.333 21.1499C18.4376 21.1499 19.333 20.2545 19.333 19.1499C19.333 18.0453 18.4376 17.1499 17.333 17.1499C16.2284 17.1499 15.333 18.0453 15.333 19.1499C15.333 20.2545 16.2284 21.1499 17.333 21.1499Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17.333 7.1499C18.4376 7.1499 19.333 6.25447 19.333 5.1499C19.333 4.04533 18.4376 3.1499 17.333 3.1499C16.2284 3.1499 15.333 4.04533 15.333 5.1499C15.333 6.25447 16.2284 7.1499 17.333 7.1499Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          graphicRendering: (e) =>
            (0, o.jsxs)("svg", {
              width: "43",
              height: "38",
              viewBox: "0 0 43 38",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M9.5918 32.0832L23.0085 18.6665",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M23.0085 32.0833H9.00846C6.43013 32.0833 4.3418 29.995 4.3418 27.4167V9.91667C4.3418 7.33833 6.43013 5.25 9.00846 5.25H23.0085",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.5921 14.5832C15.5921 15.6417 14.734 16.4998 13.6755 16.4998C12.6169 16.4998 11.7588 15.6417 11.7588 14.5832C11.7588 13.5246 12.6169 12.6665 13.6755 12.6665C14.734 12.6665 15.5921 13.5246 15.5921 14.5832Z",
                  fill: "#E373FF",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                }),
                (0, o.jsx)("path", {
                  d: "M34.6751 33.2497C36.9303 33.2497 38.7585 30.638 38.7585 27.4163C38.7585 24.1947 36.9303 21.583 34.6751 21.583C32.42 21.583 30.5918 24.1947 30.5918 27.4163C30.5918 30.638 32.42 33.2497 34.6751 33.2497Z",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M34.6749 15.7497V4.08301C34.6749 4.08301 33.3379 6.43501 30.5029 6.97634",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M23.0088 1.75V35.5833",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          rotateCube: (e) =>
            (0, o.jsxs)("svg", {
              width: "43",
              height: "42",
              viewBox: "0 0 43 42",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M19.8737 11.6641L13.9237 15.1151C13.0603 15.6168 12.5283 16.5385 12.5283 17.5371V24.4625C12.5283 25.4611 13.0603 26.3828 13.9237 26.8845L19.8737 30.3355C20.7417 30.8395 21.815 30.8395 22.683 30.3355L28.633 26.8845C29.4963 26.3828 30.0283 25.4611 30.0283 24.4625V17.5371C30.0283 16.5385 29.4963 15.6168 28.633 15.1151L22.683 11.6641C21.815 11.1601 20.7417 11.1601 19.8737 11.6641Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M29.6547 16.1421L21.278 21.0001L12.9014 16.1421",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M21.2783 30.7137V21",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M4.66504 7.71183L5.61704 14.5835H5.62171C8.14871 8.4235 14.206 4.0835 21.2784 4.0835C30.621 4.0835 38.195 11.6575 38.195 21.0002",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M37.8913 34.2883L36.9393 27.4167H36.9347C34.4077 33.5767 28.348 37.9167 21.278 37.9167C11.9353 37.9167 4.36133 30.3427 4.36133 21",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          molecules: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M8.66634 4.15007C9.40271 4.15007 9.99967 3.55311 9.99967 2.81673C9.99967 2.08036 9.40271 1.4834 8.66634 1.4834C7.92997 1.4834 7.33301 2.08036 7.33301 2.81673C7.33301 3.55311 7.92997 4.15007 8.66634 4.15007Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M15.3333 4.15007C16.0697 4.15007 16.6667 3.55311 16.6667 2.81673C16.6667 2.08036 16.0697 1.4834 15.3333 1.4834C14.5969 1.4834 14 2.08036 14 2.81673C14 3.55311 14.5969 4.15007 15.3333 4.15007Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M21.3333 10.1501C22.0697 10.1501 22.6667 9.55311 22.6667 8.81673C22.6667 8.08036 22.0697 7.4834 21.3333 7.4834C20.5969 7.4834 20 8.08036 20 8.81673C20 9.55311 20.5969 10.1501 21.3333 10.1501Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M21.3333 16.8166C22.0697 16.8166 22.6667 16.2196 22.6667 15.4832C22.6667 14.7468 22.0697 14.1499 21.3333 14.1499C20.5969 14.1499 20 14.7468 20 15.4832C20 16.2196 20.5969 16.8166 21.3333 16.8166Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M15.3333 22.8166C16.0697 22.8166 16.6667 22.2196 16.6667 21.4832C16.6667 20.7468 16.0697 20.1499 15.3333 20.1499C14.5969 20.1499 14 20.7468 14 21.4832C14 22.2196 14.5969 22.8166 15.3333 22.8166Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M8.66634 22.8166C9.40271 22.8166 9.99967 22.2196 9.99967 21.4832C9.99967 20.7468 9.40271 20.1499 8.66634 20.1499C7.92997 20.1499 7.33301 20.7468 7.33301 21.4832C7.33301 22.2196 7.92997 22.8166 8.66634 22.8166Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M2.66634 16.8166C3.40271 16.8166 3.99967 16.2196 3.99967 15.4832C3.99967 14.7468 3.40271 14.1499 2.66634 14.1499C1.92997 14.1499 1.33301 14.7468 1.33301 15.4832C1.33301 16.2196 1.92997 16.8166 2.66634 16.8166Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M2.66634 10.1501C3.40271 10.1501 3.99967 9.55311 3.99967 8.81673C3.99967 8.08036 3.40271 7.4834 2.66634 7.4834C1.92997 7.4834 1.33301 8.08036 1.33301 8.81673C1.33301 9.55311 1.92997 10.1501 2.66634 10.1501Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M8.66667 10.4832C9.58715 10.4832 10.3333 9.73705 10.3333 8.81657C10.3333 7.89609 9.58715 7.1499 8.66667 7.1499C7.74619 7.1499 7 7.89609 7 8.81657C7 9.73705 7.74619 10.4832 8.66667 10.4832Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.3327 10.4832C16.2532 10.4832 16.9993 9.73705 16.9993 8.81657C16.9993 7.89609 16.2532 7.1499 15.3327 7.1499C14.4121 7.1499 13.666 7.89609 13.666 8.81657C13.666 9.73705 14.4121 10.4832 15.3327 10.4832Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M8.66667 17.1497C9.58715 17.1497 10.3333 16.4036 10.3333 15.4831C10.3333 14.5625 9.58715 13.8164 8.66667 13.8164C7.74619 13.8164 7 14.5625 7 15.4831C7 16.4036 7.74619 17.1497 8.66667 17.1497Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.3327 17.1497C16.2532 17.1497 16.9993 16.4036 16.9993 15.4831C16.9993 14.5625 16.2532 13.8164 15.3327 13.8164C14.4121 13.8164 13.666 14.5625 13.666 15.4831C13.666 16.4036 14.4121 17.1497 15.3327 17.1497Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          layerReplace: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M12.333 21.1501H18.9997C20.1042 21.1501 20.9997 20.2546 20.9997 19.1501V12.4834C20.9997 11.3788 20.1042 10.4834 18.9997 10.4834H12.333C11.2284 10.4834 10.333 11.3788 10.333 12.4834V19.1501C10.333 20.2546 11.2284 21.1501 12.333 21.1501Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M7 13.8166H5C3.896 13.8166 3 12.9206 3 11.8166V5.1499C3 4.0459 3.896 3.1499 5 3.1499H11.6667C12.7707 3.1499 13.6667 4.0459 13.6667 5.1499V7.1499",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M7 21.1499C4.79067 21.1499 3 19.3592 3 17.1499",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17 3.1499C19.2093 3.1499 21 4.94057 21 7.1499",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          gamingButtons: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M8.33366 4.31641H5.00033C4.26395 4.31641 3.66699 4.91336 3.66699 5.64974V8.98307C3.66699 9.71945 4.26395 10.3164 5.00033 10.3164H8.33366C9.07004 10.3164 9.66699 9.71945 9.66699 8.98307V5.64974C9.66699 4.91336 9.07004 4.31641 8.33366 4.31641Z",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17.3333 21.3166C19.1743 21.3166 20.6667 19.8242 20.6667 17.9832C20.6667 16.1423 19.1743 14.6499 17.3333 14.6499C15.4924 14.6499 14 16.1423 14 17.9832C14 19.8242 15.4924 21.3166 17.3333 21.3166Z",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M9.66699 14.9834L3.66699 20.9834",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M3.66699 14.9834L9.66699 20.9834",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M16.7559 4.08446L13.7346 9.31646C13.4786 9.76046 13.7986 10.3165 14.3119 10.3165H20.3533C20.8666 10.3165 21.1866 9.76046 20.9306 9.31646L17.9093 4.08446C17.6533 3.64046 17.0106 3.64046 16.7546 4.08446H16.7559Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          stackPerspective: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M12.1923 2.83773C11.9017 2.2484 11.1937 1.92173 10.5217 2.1804L4.52166 4.48706C4.00699 4.6844 3.66699 5.1804 3.66699 5.73106V14.5404C3.66699 15.0457 3.94433 15.4591 4.33366 15.6857",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M16.1923 6.17122C15.9017 5.58189 15.1937 5.25523 14.5217 5.51389L8.52166 7.82189C8.00699 8.01923 7.66699 8.51522 7.66699 9.06589V17.8752C7.66699 18.3806 7.94433 18.7939 8.33366 19.0206",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M12.5217 11.1535L18.5217 8.84548C19.395 8.50948 20.3337 9.15482 20.3337 10.0895V18.8988C20.3337 19.4508 19.9937 19.9455 19.479 20.1428L13.479 22.4508C12.6057 22.7868 11.667 22.1415 11.667 21.2068V12.3975C11.667 11.8455 12.007 11.3508 12.5217 11.1535Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          nodes: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M3.78613 11.7354C4.11413 9.81938 5.09547 8.12604 6.49413 6.89404",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M20.2129 11.7354C19.8849 9.81938 18.9035 8.12604 17.5049 6.89404",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M14.6663 21.0474C13.829 21.33 12.9317 21.4834 11.9997 21.4834C11.0677 21.4834 10.1703 21.33 9.33301 21.0474",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M11.9997 7.81624C13.4724 7.81624 14.6663 6.62234 14.6663 5.14958C14.6663 3.67682 13.4724 2.48291 11.9997 2.48291C10.5269 2.48291 9.33301 3.67682 9.33301 5.14958C9.33301 6.62234 10.5269 7.81624 11.9997 7.81624Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M5.07194 19.8162C6.5447 19.8162 7.73861 18.6223 7.73861 17.1496C7.73861 15.6768 6.5447 14.4829 5.07194 14.4829C3.59918 14.4829 2.40527 15.6768 2.40527 17.1496C2.40527 18.6223 3.59918 19.8162 5.07194 19.8162Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M18.9284 19.8162C20.4011 19.8162 21.5951 18.6223 21.5951 17.1496C21.5951 15.6768 20.4011 14.4829 18.9284 14.4829C17.4556 14.4829 16.2617 15.6768 16.2617 17.1496C16.2617 18.6223 17.4556 19.8162 18.9284 19.8162Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          route: (e) =>
            (0, o.jsxs)("svg", {
              width: "46",
              height: "47",
              viewBox: "0 0 46 47",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M34.5138 23.1487H33.7638C32.7058 23.1487 31.8471 22.29 31.8471 21.232C31.8471 20.174 32.7058 19.3153 33.7638 19.3153H34.5138C37.3326 19.3153 39.6249 17.023 39.6249 14.2042C39.6249 11.3854 37.3326 9.0931 34.5138 9.0931H15.986C14.928 9.0931 14.0693 8.23443 14.0693 7.17643C14.0693 6.11843 14.928 5.25977 15.986 5.25977H34.5138C39.446 5.25977 43.4582 9.27199 43.4582 14.2042C43.4582 19.1364 39.446 23.1487 34.5138 23.1487Z",
                  fill: "#E373FF",
                }),
                (0, o.jsx)("path", {
                  d: "M41.6182 33.9321L35.2932 27.6071C34.5445 26.8583 33.3306 26.8583 32.5818 27.6071C31.833 28.3559 31.833 29.5698 32.5818 30.3186L35.6357 33.3725H11.5138C8.695 33.3725 6.40267 31.0801 6.40267 28.2613C6.40267 25.4426 8.695 23.1502 11.5138 23.1502H12.2638C13.3218 23.1502 14.1804 22.2916 14.1804 21.2336C14.1804 20.1756 13.3218 19.3169 12.2638 19.3169H11.5138C6.58156 19.3169 2.56934 23.3291 2.56934 28.2613C2.56934 33.1936 6.58156 37.2058 11.5138 37.2058H35.6357L32.5818 40.2597C31.833 41.0084 31.833 42.2223 32.5818 42.9711C32.9549 43.3442 33.4456 43.5333 33.9362 43.5333C34.4269 43.5333 34.9176 43.3468 35.2907 42.9711L41.6157 36.6461C42.3644 35.8973 42.3644 34.6834 41.6157 33.9347L41.6182 33.9321Z",
                  fill: "#E373FF",
                }),
                (0, o.jsx)("path", {
                  d: "M8.31803 9.0931C9.37658 9.0931 10.2347 8.23498 10.2347 7.17643C10.2347 6.11789 9.37658 5.25977 8.31803 5.25977C7.25949 5.25977 6.40137 6.11789 6.40137 7.17643C6.40137 8.23498 7.25949 9.0931 8.31803 9.0931Z",
                  fill: "#E373FF",
                }),
                (0, o.jsx)("path", {
                  d: "M23.0117 28.2324C26.8777 28.2324 30.0117 25.0984 30.0117 21.2324C30.0117 17.3664 26.8777 14.2324 23.0117 14.2324C19.1457 14.2324 16.0117 17.3664 16.0117 21.2324C16.0117 25.0984 19.1457 28.2324 23.0117 28.2324Z",
                  fill: "#E373FF",
                }),
              ],
            }),
          squareCode: (e) =>
            (0, o.jsxs)("svg", {
              width: "64",
              height: "64",
              viewBox: "0 0 64 64",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("rect", {
                  x: "2",
                  y: "2",
                  width: "60",
                  height: "60",
                  rx: "10",
                  fill: "#191919",
                }),
                (0, o.jsx)("rect", {
                  x: "2",
                  y: "2",
                  width: "60",
                  height: "60",
                  rx: "10",
                  stroke:
                    e.color && "var(--brand-pink)" === e.color
                      ? e.color
                      : "#3A3A3A",
                  strokeWidth: "4",
                }),
                (0, o.jsx)("path", {
                  d: "M40.334 27.4165L44.084 23.6665L40.334 19.9165",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M27.994 21.5835H24.9173C23.0757 21.5835 21.584 23.0768 21.584 24.9168V39.0835C21.584 40.9235 23.0757 42.4168 24.9173 42.4168H39.084C40.9257 42.4168 42.4173 40.9235 42.4173 39.0835V31.0068",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M35.334 27.4165L31.584 23.6665L35.334 19.9165",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          microchip: (e) =>
            (0, o.jsxs)("svg", {
              width: "64",
              height: "65",
              viewBox: "0 0 64 65",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("rect", {
                  x: "2",
                  y: "2.22754",
                  width: "60",
                  height: "60",
                  rx: "10",
                  fill: "#191919",
                }),
                (0, o.jsx)("rect", {
                  x: "2",
                  y: "2.22754",
                  width: "60",
                  height: "60",
                  rx: "10",
                  stroke:
                    e.color && "var(--brand-pink)" === e.color
                      ? e.color
                      : "#3A3A3A",
                  strokeWidth: "4",
                }),
                (0, o.jsx)("path", {
                  d: "M37.4167 23.4778H26.5833C24.7424 23.4778 23.25 24.9702 23.25 26.8111V37.6444C23.25 39.4854 24.7424 40.9778 26.5833 40.9778H37.4167C39.2576 40.9778 40.75 39.4854 40.75 37.6444V26.8111C40.75 24.9702 39.2576 23.4778 37.4167 23.4778Z",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M28.25 28.4778V35.9778H35.75V28.4778H28.25Z",
                  stroke: e.color || "#EBEBEB",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M32 20.1445V23.4779",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M26.584 20.1445V23.4779",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M37.417 20.1445V23.4779",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M44.0833 32.2278H40.75",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M44.0833 26.8113H40.75",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M44.0833 37.6445H40.75",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M32 44.3111V40.9778",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M37.417 44.3111V40.9778",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M26.584 44.3111V40.9778",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M19.917 32.2278H23.2503",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M19.917 37.6445H23.2503",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M19.917 26.8113H23.2503",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          cloudNodes: (e) =>
            (0, o.jsxs)("svg", {
              width: "64",
              height: "65",
              viewBox: "0 0 64 65",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("rect", {
                  x: "2",
                  y: "2.22754",
                  width: "60",
                  height: "60",
                  rx: "10",
                  fill: "#191919",
                }),
                (0, o.jsx)("rect", {
                  x: "2",
                  y: "2.22754",
                  width: "60",
                  height: "60",
                  rx: "10",
                  stroke:
                    e.color && "var(--brand-pink)" === e.color
                      ? e.color
                      : "#3A3A3A",
                  strokeWidth: "4",
                }),
                (0, o.jsx)("path", {
                  d: "M31.999 34.3113V40.1446",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M24.5996 40.0444L26.9279 37.716C27.2413 37.4027 27.4163 36.9794 27.4163 36.5377V34.311",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M39.3997 40.0444L37.0713 37.716C36.758 37.4027 36.583 36.9794 36.583 36.5377V34.311",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M39.916 25.9776C39.456 25.9776 39.0193 26.071 38.606 26.2076C38.2977 22.8126 35.476 20.1443 31.9993 20.1443C28.5227 20.1443 25.7027 22.8143 25.3927 26.2076C24.9777 26.0693 24.5427 25.9776 24.0827 25.9776C21.781 25.9776 19.916 27.8426 19.916 30.1443C19.916 32.446 21.781 34.311 24.0827 34.311H39.916C42.2177 34.311 44.0827 32.446 44.0827 30.1443C44.0827 27.8426 42.2177 25.9776 39.916 25.9776Z",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M31.999 45.1445C33.3797 45.1445 34.499 44.0252 34.499 42.6445C34.499 41.2639 33.3797 40.1445 31.999 40.1445C30.6183 40.1445 29.499 41.2639 29.499 42.6445C29.499 44.0252 30.6183 45.1445 31.999 45.1445Z",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M22.833 44.311C24.2137 44.311 25.333 43.1917 25.333 41.811C25.333 40.4304 24.2137 39.311 22.833 39.311C21.4523 39.311 20.333 40.4304 20.333 41.811C20.333 43.1917 21.4523 44.311 22.833 44.311Z",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M41.166 44.311C42.5467 44.311 43.666 43.1917 43.666 41.811C43.666 40.4304 42.5467 39.311 41.166 39.311C39.7853 39.311 38.666 40.4304 38.666 41.811C38.666 43.1917 39.7853 44.311 41.166 44.311Z",
                  stroke: e.color || "#3A3A3A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          check: (e) =>
            (0, o.jsx)("svg", {
              width: "11",
              height: "11",
              viewBox: "0 0 11 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                d: "M1 5.9834L4 9.31673L9.66667 1.9834",
                stroke: "#E373FF",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          plusSquare: (e) =>
            (0, o.jsxs)("svg", {
              width: "23",
              height: "23",
              viewBox: "0 0 23 23",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("rect", {
                  id: "Square",
                  x: "2",
                  y: "2",
                  width: "19",
                  height: "19",
                  rx: "5",
                  stroke: e.color || "inherit",
                  strokeWidth: "2",
                  fill: "none",
                }),
                (0, o.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.25 5.1499C11.9404 5.1499 12.5 5.70955 12.5 6.3999V10.1499H16.25C16.9404 10.1499 17.5 10.7095 17.5 11.3999C17.5 12.0903 16.9404 12.6499 16.25 12.6499H12.5V16.3999C12.5 17.0903 11.9404 17.6499 11.25 17.6499C10.5596 17.6499 10 17.0903 10 16.3999V12.6499H6.25C5.55965 12.6499 5 12.0903 5 11.3999C5 10.7095 5.55965 10.1499 6.25 10.1499H10V6.3999C10 5.70955 10.5596 5.1499 11.25 5.1499Z",
                  fill: e.color || "inherit",
                }),
                (0, o.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.1965 0.149903H13.3035C14.6583 0.14989 15.7509 0.149878 16.6357 0.222178C17.5469 0.296615 18.3471 0.453878 19.0875 0.831115C20.2635 1.43032 21.2196 2.38645 21.8188 3.56247C22.196 4.30283 22.3533 5.10307 22.4277 6.01413C22.5 6.89897 22.5 7.99164 22.5 9.3464V13.4534C22.5 14.8082 22.5 15.9009 22.4277 16.7857C22.3533 17.6968 22.196 18.497 21.8188 19.2374C21.2196 20.4134 20.2635 21.3695 19.0875 21.9687C18.3471 22.3459 17.5469 22.5032 16.6357 22.5777C15.751 22.6499 14.6583 22.6499 13.3035 22.6499H9.1965C7.84174 22.6499 6.74906 22.6499 5.86423 22.5777C4.95316 22.5032 4.15293 22.3459 3.41256 21.9687C2.23655 21.3695 1.28041 20.4134 0.681213 19.2374C0.303975 18.497 0.146713 17.6968 0.0722754 16.7857C-2.45683e-05 15.9008 -1.21714e-05 14.8082 3.28639e-07 13.4534V9.3464C-1.21714e-05 7.99166 -2.45683e-05 6.89898 0.0722754 6.01413C0.146713 5.10307 0.303975 4.30283 0.681213 3.56247C1.28041 2.38645 2.23655 1.43032 3.41256 0.831115C4.15293 0.453878 4.95316 0.296615 5.86423 0.222178C6.74908 0.149878 7.84176 0.14989 9.1965 0.149903ZM6.0678 2.71388C5.31134 2.77568 4.87673 2.89089 4.54754 3.05863C3.84193 3.41815 3.26825 3.99183 2.90873 4.69744C2.74099 5.02663 2.62578 5.46124 2.56398 6.2177C2.50098 6.98875 2.5 7.97914 2.5 9.3999V13.3999C2.5 14.8207 2.50098 15.811 2.56398 16.5822C2.62578 17.3385 2.74099 17.7732 2.90873 18.1024C3.26825 18.808 3.84193 19.3817 4.54754 19.7412C4.87673 19.9089 5.31134 20.0242 6.0678 20.0859C6.83885 20.1489 7.82924 20.1499 9.25 20.1499H13.25C14.6708 20.1499 15.6611 20.1489 16.4322 20.0859C17.1886 20.0242 17.6232 19.9089 17.9525 19.7412C18.6581 19.3817 19.2318 18.808 19.5913 18.1024C19.759 17.7732 19.8742 17.3385 19.936 16.5822C19.999 15.811 20 14.8207 20 13.3999V9.3999C20 7.97914 19.999 6.98875 19.936 6.2177C19.8742 5.46124 19.759 5.02663 19.5913 4.69744C19.2318 3.99183 18.6581 3.41815 17.9525 3.05863C17.6232 2.89089 17.1886 2.77568 16.4322 2.71388C15.6611 2.65088 14.6708 2.6499 13.25 2.6499H9.25C7.82924 2.6499 6.83885 2.65088 6.0678 2.71388Z",
                  fill: e.color || "inherit",
                }),
              ],
            }),
          minusSquare: (e) =>
            (0, o.jsxs)("svg", {
              width: "23",
              height: "23",
              viewBox: "0 0 23 23",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("rect", {
                  id: "Square",
                  x: "2",
                  y: "2",
                  width: "19",
                  height: "19",
                  rx: "5",
                  stroke: e.color || "inherit",
                  strokeWidth: "2",
                  fill: "none",
                }),
                (0, o.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.5 10.1499C12.442 10.1405 13.1904 10.1499 12.5 10.1499L16.25 10.1501C16.9404 10.1501 17.5 10.7097 17.5 11.4001C17.5 12.0905 16.9404 12.6501 16.25 12.6501H12.5C12.5 12.6501 10.6904 12.6501 10 12.6501H6.25C5.55965 12.6501 5 12.0905 5 11.4001C5 10.7097 5.55965 10.1501 6.25 10.1501H10C10 10.1501 11.8096 10.1499 12.5 10.1499Z",
                  fill: e.color || "inherit",
                }),
                (0, o.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.1965 0.149903H13.3035C14.6583 0.14989 15.7509 0.149878 16.6357 0.222178C17.5469 0.296615 18.3471 0.453878 19.0875 0.831115C20.2635 1.43032 21.2196 2.38645 21.8188 3.56247C22.196 4.30283 22.3533 5.10307 22.4277 6.01413C22.5 6.89897 22.5 7.99164 22.5 9.3464V13.4534C22.5 14.8082 22.5 15.9009 22.4277 16.7857C22.3533 17.6968 22.196 18.497 21.8188 19.2374C21.2196 20.4134 20.2635 21.3695 19.0875 21.9687C18.3471 22.3459 17.5469 22.5032 16.6357 22.5777C15.751 22.6499 14.6583 22.6499 13.3035 22.6499H9.1965C7.84174 22.6499 6.74906 22.6499 5.86423 22.5777C4.95316 22.5032 4.15293 22.3459 3.41256 21.9687C2.23655 21.3695 1.28041 20.4134 0.681213 19.2374C0.303975 18.497 0.146713 17.6968 0.0722754 16.7857C-2.45683e-05 15.9008 -1.21714e-05 14.8082 3.28639e-07 13.4534V9.3464C-1.21714e-05 7.99166 -2.45683e-05 6.89898 0.0722754 6.01413C0.146713 5.10307 0.303975 4.30283 0.681213 3.56247C1.28041 2.38645 2.23655 1.43032 3.41256 0.831115C4.15293 0.453878 4.95316 0.296615 5.86423 0.222178C6.74908 0.149878 7.84176 0.14989 9.1965 0.149903ZM6.0678 2.71388C5.31134 2.77568 4.87673 2.89089 4.54754 3.05863C3.84193 3.41815 3.26825 3.99183 2.90873 4.69744C2.74099 5.02663 2.62578 5.46124 2.56398 6.2177C2.50098 6.98875 2.5 7.97914 2.5 9.3999V13.3999C2.5 14.8207 2.50098 15.811 2.56398 16.5822C2.62578 17.3385 2.74099 17.7732 2.90873 18.1024C3.26825 18.808 3.84193 19.3817 4.54754 19.7412C4.87673 19.9089 5.31134 20.0242 6.0678 20.0859C6.83885 20.1489 7.82924 20.1499 9.25 20.1499H13.25C14.6708 20.1499 15.6611 20.1489 16.4322 20.0859C17.1886 20.0242 17.6232 19.9089 17.9525 19.7412C18.6581 19.3817 19.2318 18.808 19.5913 18.1024C19.759 17.7732 19.8742 17.3385 19.936 16.5822C19.999 15.811 20 14.8207 20 13.3999V9.3999C20 7.97914 19.999 6.98875 19.936 6.2177C19.8742 5.46124 19.759 5.02663 19.5913 4.69744C19.2318 3.99183 18.6581 3.41815 17.9525 3.05863C17.6232 2.89089 17.1886 2.77568 16.4322 2.71388C15.6611 2.65088 14.6708 2.6499 13.25 2.6499H9.25C7.82924 2.6499 6.83885 2.65088 6.0678 2.71388Z",
                  fill: e.color || "inherit",
                }),
              ],
            }),
          circle: (e) =>
            (0, o.jsx)("svg", {
              width: "22",
              height: "22",
              viewBox: "0 0 22 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                d: "M10.9997 20.8165C16.3384 20.8165 20.6663 16.4886 20.6663 11.1498C20.6663 5.81107 16.3384 1.48315 10.9997 1.48315C5.66092 1.48315 1.33301 5.81107 1.33301 11.1498C1.33301 16.4886 5.66092 20.8165 10.9997 20.8165Z",
                stroke: "#A0A0A0",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          plusCircle: (e) =>
            (0, o.jsx)("svg", {
              width: "27",
              height: "27",
              viewBox: "0 0 27 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsxs)("g", {
                id: "plus-circle",
                children: [
                  (0, o.jsx)("ellipse", {
                    id: "Oval",
                    cx: "13.5",
                    cy: "13.15",
                    rx: "12",
                    ry: "11.9881",
                    stroke: "#A0A0A0",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, o.jsx)("path", {
                    id: "Path",
                    d: "M13.5004 8.35474V17.9452",
                    stroke: "#A0A0A0",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, o.jsx)("path", {
                    id: "Path_2",
                    d: "M8.7002 13.1499H18.3002",
                    stroke: "#A0A0A0",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
            }),
          minusCircle: (e) =>
            (0, o.jsx)("svg", {
              width: "27",
              height: "27",
              viewBox: "0 0 27 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsxs)("g", {
                id: "minus-circle",
                children: [
                  (0, o.jsx)("ellipse", {
                    id: "Oval",
                    cx: "13.5",
                    cy: "13.15",
                    rx: "12",
                    ry: "11.9881",
                    stroke: "#A0A0A0",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, o.jsx)("path", {
                    id: "Path",
                    d: "M8.7002 13.1499H18.3002",
                    stroke: "#A0A0A0",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
            }),
          x: (e) =>
            (0, o.jsx)("svg", {
              width: "27",
              height: "25",
              viewBox: "0 0 27 25",
              fill: "none",
              xmlns: "http://x.com/",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                  d: "M21.1695 0.149902H25.2409L16.3462 10.3161L26.8102 24.1499H18.6169L12.1997 15.7597L4.85696 24.1499H0.783073L10.297 13.2761L0.258789 0.149902H8.65996L14.4606 7.81884L21.1695 0.149902ZM19.7406 21.713H21.9966L7.43419 2.45881H5.01324L19.7406 21.713Z",
                  fill: "#EBEBEB",
               }),
            }),
          medium: (e) =>
            (0, o.jsx)("svg", {
              width: "43",
              height: "25",
              viewBox: "0 0 43 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                d: "M11.9183 0.149902C18.5009 0.149902 23.8366 5.52287 23.8366 12.1501C23.8366 18.7774 18.5004 24.1499 11.9183 24.1499C5.33649 24.1499 0 18.7774 0 12.1501C0 5.52304 5.33599 0.149902 11.9183 0.149902ZM30.9512 0.852784C34.2425 0.852784 36.9105 5.9103 36.9105 12.1501H36.911C36.911 18.3883 34.243 23.4473 30.9519 23.4473C27.6608 23.4473 24.9926 18.3883 24.9926 12.1501C24.9926 5.91195 27.6602 0.852784 30.9514 0.852784H30.9512ZM40.1628 2.02959C41.3201 2.02959 42.2588 6.56069 42.2588 12.1502C42.2588 17.738 41.3205 22.2709 40.1628 22.2709C39.0052 22.2709 38.0674 17.7393 38.0674 12.1502C38.0674 6.56102 39.0056 2.02959 40.1628 2.02959Z",
                fill: "#EBEBEB",
              }),
            }),
          telegram: (e) =>
            (0, o.jsx)("svg", {
              width: "25",
              height: "24",
              viewBox: "0 0 25 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                d: "M22.9117 0.0980734L1.17666 10.1656C1.16373 10.1716 1.15119 10.1787 1.13916 10.187C0.962911 10.3065 -0.267089 11.207 1.46729 12.0144L1.4851 12.0223L6.66057 14.0237C6.70005 14.039 6.74187 14.0439 6.78308 14.0378C6.82429 14.0318 6.86391 14.0151 6.89916 13.9889L19.7359 4.40216C19.7674 4.37865 19.8024 4.36282 19.839 4.35559C20.0176 4.32024 20.5318 4.25403 20.2065 4.74835C19.8385 5.30944 11.0706 14.7144 10.0974 15.7574C10.0413 15.8177 10.0066 15.9014 10.0004 15.9914L9.57572 22.0511C9.57567 22.1128 9.58763 22.1737 9.61066 22.2289C9.63368 22.2842 9.66714 22.3322 9.70838 22.3692C9.76689 22.4134 9.83571 22.4338 9.90466 22.4275C9.97362 22.4213 10.0391 22.3886 10.0913 22.3345L13.1663 19.0448C13.2149 18.9929 13.2769 18.9624 13.342 18.9584C13.407 18.9544 13.4713 18.9772 13.524 19.0229L18.8888 23.6856L18.9062 23.6996C19.036 23.7955 20.4385 24.7724 20.8435 22.5909L24.5467 1.51369C24.5518 1.44692 24.602 0.713023 24.1637 0.279304C23.7034 -0.174053 23.0518 0.0548697 22.9538 0.0795575C22.9394 0.0843728 22.9253 0.0905646 22.9117 0.0980734Z",
                fill: "#EBEBEB",
              }),
            }),
          DEXTools: (e) =>
            (0, o.jsx)("svg", {
              width: "22",
              height: "25",
              viewBox: "0 0 22 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.57137 1.50699C7.14164 2.25177 5.97192 2.882 5.97217 2.90763C5.97281 2.97379 9.40356 4.71126 9.52534 4.70702C9.58073 4.70517 9.98255 4.5202 10.4182 4.29603L11.2105 3.88853L12.0758 4.33329L12.941 4.77813L14.358 4.14143C16.4931 3.18201 16.7148 3.07687 16.68 3.04155C16.6339 2.99469 15.8681 2.58328 13.7904 1.48944C12.7863 0.960777 11.8117 0.442438 11.6246 0.337552C11.4375 0.232666 11.2589 0.148292 11.2277 0.149926C11.1965 0.151559 10.0011 0.762244 8.57137 1.50699ZM2.30059 4.75422L0.812255 5.52299V8.897C0.812255 10.7527 0.831799 12.271 0.855771 12.271C0.87966 12.271 1.61192 11.9536 2.48298 11.5656L4.06673 10.8602V7.30378L4.84066 7.72543C5.43703 8.05005 6.03377 8.37401 6.63086 8.6973L7.64711 9.24753L8.09932 9.04305C8.38292 8.9146 8.66596 8.7849 8.94842 8.65396C9.16669 8.55231 9.7025 8.31098 10.1391 8.11757C10.5756 7.92407 10.9798 7.7295 11.0371 7.68515C11.1132 7.62625 10.185 7.1133 7.60384 5.78785C5.65824 4.78874 4.00395 3.97445 3.92766 3.97836C3.85137 3.98226 3.11919 4.33135 2.30059 4.75422ZM16.9483 4.97011C15.9346 5.42771 15.1046 5.82041 15.1036 5.8428C15.1027 5.86517 15.6552 6.19366 16.3314 6.57268C17.0076 6.95178 17.5608 7.28222 17.5608 7.3071C17.5608 7.33193 16.9625 7.62184 16.2313 7.95148C15.5 8.28103 13.6515 9.1158 12.1235 9.80654L7.00367 12.1208C5.71579 12.703 4.5549 13.2277 4.42394 13.2871C1.79335 14.4779 1.0703 14.8083 0.97101 14.8651C0.871162 14.9222 0.848546 15.2539 0.830774 16.9191L0.80957 18.9051L2.1405 19.5832L3.47141 20.2613L5.31692 19.4284C6.33198 18.9704 7.16243 18.5716 7.16243 18.5422C7.16243 18.5129 6.97486 18.3907 6.74571 18.2705C6.51645 18.1503 6.0432 17.8843 5.69394 17.6791C5.34471 17.474 4.99648 17.2858 4.92002 17.2608C4.84359 17.2359 4.78217 17.1924 4.78341 17.164C4.78468 17.1357 5.59736 16.7497 6.58925 16.3061C8.51581 15.4447 9.99017 14.7809 13.1554 13.3495C14.5708 12.7095 15.9863 12.07 17.4021 11.4308C18.6463 10.8692 20.093 10.2133 20.6169 9.97326L21.5694 9.53681L21.5906 7.5282L21.6118 5.51967L20.2619 4.8268C19.5195 4.44576 18.8848 4.13492 18.8516 4.13606C18.8183 4.13711 17.9618 4.51239 16.9483 4.97011ZM21.2077 12.2164C21.0088 12.3136 20.6159 12.4955 20.3346 12.6206C20.0533 12.7458 19.5195 12.9866 19.1484 13.156L18.4737 13.4637L18.4583 15.2271C18.4498 16.1969 18.4141 16.9861 18.3789 16.981C18.299 16.9691 17.0345 16.3206 15.7633 15.6395C14.8459 15.1479 14.7883 15.1284 14.5727 15.2351C14.448 15.2969 13.7031 15.631 12.9173 15.9777C12.1314 16.3244 11.4629 16.6306 11.4314 16.6584C11.4 16.686 12.9816 17.5433 14.9462 18.5634L18.5179 20.4181L20.0437 19.6288C20.8828 19.1948 21.5963 18.7989 21.6291 18.7491C21.7031 18.6371 21.6968 12.0244 21.6227 12.0333C21.5934 12.0368 21.4066 12.1192 21.2077 12.2164ZM12.7585 19.9781C12.4939 20.0919 12.2293 20.2058 11.9648 20.3199C11.166 20.6655 11.3225 20.677 10.3722 20.2039C9.73926 19.8888 9.46643 19.7916 9.34801 19.8388C9.25918 19.8742 8.49469 20.2181 7.64902 20.6031C6.8034 20.988 6.08218 21.303 6.0463 21.303C5.69151 21.303 6.28135 21.6554 8.55742 22.8035L11.2267 24.1499L12.3498 23.5954C12.9675 23.2905 14.2134 22.6798 15.1186 22.2384C16.0236 21.7969 16.7529 21.4242 16.7393 21.4101C16.7255 21.3961 15.9672 21.0067 15.0539 20.5447L13.3935 19.7049L12.7585 19.9781Z",
                fill: "#EBEBEB",
              }),
            }),
          logoText: (e) =>
            (0, o.jsxs)("svg", {
              width: "133",
              height: "26",
              viewBox: "0 0 133 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M11.6689 0.40918C15.7363 0.40918 18.6011 3.80455 18.6011 7.41213C18.6011 11.7978 15.7363 14.698 11.6689 14.698H7.38933C5.40869 14.698 3.35733 16.1835 3.35733 18.3056C3.35733 18.2349 3.35733 25.1671 3.35733 25.1671H0.280273V0.40918H11.6689ZM7.74301 12.01C7.74301 12.01 11.5628 12.01 11.6689 12.01C14.0032 12.01 15.5241 9.64034 15.5241 7.58897C15.5241 5.29002 14.0032 3.13255 11.6689 3.13255H3.35733V18.3056C3.35733 12.01 6.04533 12.01 7.74301 12.01Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M27.2387 6.49255C30.4926 6.49255 34.1002 8.08413 34.1002 11.6563V25.1671H30.9878V19.5789V11.621C30.9878 15.4761 29.4316 16.0067 28.6181 16.0067H26.3899C24.5861 16.0067 22.6409 16.997 22.6409 19.5789C22.6409 21.418 24.091 22.9035 26.3899 22.9035C28.6889 22.9035 30.9878 21.418 30.9878 19.5789C30.9878 24.5304 28.0876 25.5915 26.1777 25.5915C22.5347 25.5915 19.5638 23.0803 19.5638 19.5789C19.5638 15.8652 22.6409 13.5309 26.3899 13.5309H29.1486C30.2097 13.5309 31.0585 12.6467 30.9878 11.4795C30.8817 9.74644 29.3609 9.18055 27.2387 9.18055C25.7533 9.18055 24.4446 9.78181 23.9141 11.0551H20.6956C21.8981 7.16455 25.1166 6.49255 27.2387 6.49255Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M37.8896 6.95234H40.9667V25.2024H37.8896V6.95234ZM44.8218 6.52792C45.6707 6.52792 46.5195 6.66939 47.2622 6.95234V9.81718C47.2622 9.81718 46.4134 9.39276 44.8218 9.39276C42.0631 9.39276 40.9667 11.5502 40.9667 13.7077C40.9667 9.10981 42.9473 6.52792 44.8218 6.52792Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M55.9756 6.49255C59.2295 6.49255 62.8371 8.08413 62.8371 11.6563V25.1671H59.7246V19.5789V11.621C59.7246 15.4761 58.1684 16.0067 57.355 16.0067H55.1267C53.323 16.0067 51.3777 16.997 51.3777 19.5789C51.3777 21.418 52.8278 22.9035 55.1267 22.9035C57.4257 22.9035 59.7246 21.418 59.7246 19.5789C59.7246 24.5304 56.8244 25.5915 54.9145 25.5915C51.2716 25.5915 48.3006 23.0803 48.3006 19.5789C48.3006 15.8652 51.3777 13.5309 55.1267 13.5309H57.8855C58.9465 13.5309 59.7954 12.6467 59.7246 11.4795C59.6185 9.74644 58.0977 9.18055 55.9756 9.18055C54.4901 9.18055 53.1815 9.78181 52.651 11.0551H49.4324C50.635 7.16455 53.8535 6.49255 55.9756 6.49255Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M69.7035 25.2024H66.6264V0.444548H69.7035V25.2024Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M76.715 25.2024H73.638V0.444548H76.715V25.2024Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M96.4945 16.042C96.4945 16.2542 96.4945 16.4311 96.4945 16.6433H82.8423C83.0545 20.6753 85.3888 22.9035 88.183 22.9389C90.3404 22.9389 92.2503 21.5949 93.0992 19.1191H96.1762C95.1859 23.2572 92.1088 25.5915 88.183 25.5915C83.4082 25.5561 79.9067 22.1254 79.9067 16.042C79.9067 9.95865 83.479 6.49255 88.183 6.49255C92.887 6.49255 96.4945 9.99402 96.4945 16.042ZM83.0192 14.1675H93.3821C92.7808 11.0904 90.6941 9.18055 88.183 9.14518C85.7072 9.18055 83.6204 11.1258 83.0192 14.1675Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M102.689 25.2024H99.6117V0.444548H102.689V25.2024Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M118.719 0.444548L126.889 25.1671H123.6L121.124 17.7751H110.549L108.144 25.1671H104.89L112.813 0.444548H118.719ZM111.433 15.0517H120.24L115.784 1.68244L111.433 15.0517Z",
                  fill: "white",
                }),
                (0, o.jsx)("path", {
                  d: "M132.258 25.1671H129.181V0.444548H132.258V25.1671Z",
                  fill: "white",
                }),
              ],
            }),
          logoPACT: (e) =>
            (0, o.jsx)("svg", {
              width: "209",
              height: "68",
              viewBox: "0 0 209 68",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                d: "M29.4738 2.5C39.8238 2.5 47.1138 11.14 47.1138 20.32C47.1138 31.48 39.8238 38.86 29.4738 38.86H18.5838C13.5438 38.86 8.32375 42.64 8.32375 48.04C8.32375 47.86 8.32375 65.5 8.32375 65.5H0.49375V2.5H29.4738ZM19.4838 32.02C19.4838 32.02 29.2038 32.02 29.4738 32.02C35.4138 32.02 39.2838 25.99 39.2838 20.77C39.2838 14.92 35.4138 9.43 29.4738 9.43H8.32375V48.04C8.32375 32.02 15.1638 32.02 19.4838 32.02ZM78.1089 2.58999L98.8989 65.5H90.5289L84.2289 46.69H57.3189L51.1989 65.5H42.9189L63.0789 2.58999H78.1089ZM59.5689 39.76H81.9789L70.6389 5.74L59.5689 39.76ZM128.358 59.92C136.548 59.92 143.568 54.07 146.628 44.53H155.178C151.848 61.09 139.248 67.3 128.178 67.3C110.088 67.3 100.368 52.36 100.368 34.09C100.368 15.73 111.438 0.789996 128.088 0.789996C145.818 0.789996 153.738 12.04 155.448 23.56H147.078C145.008 15.37 140.328 8.17 128.358 8.17C116.568 8.17 108.378 21.04 108.378 34.09C108.378 47.05 115.488 59.92 128.358 59.92ZM157.696 2.58999H208.816V9.79H193.876C193.876 9.79 187.126 9.79 187.126 16.36C187.126 18.61 187.126 65.5 187.126 65.5H179.296V16.9C179.296 11.14 186.766 9.97 191.086 9.79H157.696V2.58999Z",
                fill: "white",
              }),
            }),
          line: (e) =>
            (0, o.jsxs)("svg", {
              width: "1",
              height: "60",
              viewBox: "0 0 1 60",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("rect", {
                  width: "1",
                  height: "60",
                  fill: "url(#paint0_linear_38_189)",
                }),
                (0, o.jsx)("defs", {
                  children: (0, o.jsxs)("linearGradient", {
                    id: "paint0_linear_38_189",
                    x1: "0.5",
                    y1: "0",
                    x2: "0.5",
                    y2: "60",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, o.jsx)("stop", { stopColor: "#191919" }),
                      (0, o.jsx)("stop", {
                        offset: "0.5",
                        stopColor: "#666BFF",
                      }),
                      (0, o.jsx)("stop", { offset: "1", stopColor: "#191919" }),
                    ],
                  }),
                }),
              ],
            }),
          squareCode2: (e) =>
            (0, o.jsxs)("svg", {
              width: "32",
              height: "33",
              viewBox: "0 0 32 33",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M24.8876 12.9432C24.5462 12.9432 24.2049 12.8134 23.9454 12.5521C23.4245 12.0312 23.4245 11.1868 23.9454 10.6659L27.0031 7.6081L23.9454 4.55033C23.4245 4.02944 23.4245 3.18499 23.9454 2.6641C24.4662 2.14322 25.3107 2.14322 25.8316 2.6641L29.8316 6.6641C30.3525 7.18499 30.3525 8.02944 29.8316 8.55033L25.8316 12.5503C25.572 12.8099 25.2307 12.9414 24.8894 12.9414L24.8876 12.9432Z",
                  fill: "#E373FF",
                }),
                (0, o.jsx)("path", {
                  d: "M27.7165 14.4387C26.9609 15.1942 25.9565 15.6102 24.888 15.6102H19.5547C18.4862 15.6102 17.4818 15.1942 16.7262 14.4387L12.7262 10.4387C11.9707 9.68313 11.5547 8.67869 11.5547 7.61024C11.5547 6.5418 11.9707 5.53735 12.7262 4.7818L13.4534 4.05469H8.44358C5.74669 4.05469 3.55469 6.24669 3.55469 8.94358V24.0547C3.55469 26.7516 5.74669 28.9436 8.44358 28.9436H23.5547C26.2516 28.9436 28.4436 26.7516 28.4436 24.0547V13.7116L27.7165 14.4387Z",
                  fill: "#E373FF",
                  fillOpacity: "0.1",
                }),
                (0, o.jsx)("path", {
                  d: "M19.5536 12.9434C19.2123 12.9434 18.8709 12.8136 18.6114 12.5523L14.6114 8.55228C14.0905 8.03139 14.0905 7.18695 14.6114 6.66606L18.6114 2.66606C19.1323 2.14517 19.9767 2.14517 20.4976 2.66606C21.0185 3.18695 21.0185 4.03139 20.4976 4.55228L17.4398 7.61006L20.4976 10.6678C21.0185 11.1887 21.0185 12.0332 20.4976 12.5541C20.238 12.8136 19.8967 12.9452 19.5554 12.9452L19.5536 12.9434Z",
                  fill: "#E373FF",
                }),
              ],
            }),
          upload: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M12.332 5.33398V15.6673",
                  stroke: "#EBEBEB",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.332 8L12.332 5L9.33203 8",
                  stroke: "#EBEBEB",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M9 12H8.66667C7.19333 12 6 13.1933 6 14.6667V17.3333C6 18.8067 7.19333 20 8.66667 20H16C17.4733 20 18.6667 18.8067 18.6667 17.3333V14.6667C18.6667 13.1933 17.4733 12 16 12H15.6667",
                  stroke: "#EBEBEB",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          code: (e) => {
            var t, s, r;
            return (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M6.99968 16.6673L2.33301 12.0007L6.99968 7.33398",
                  stroke:
                    null !== (t = e.color) && void 0 !== t ? t : "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17.001 16.6693L21.6676 12.0026L17.001 7.33594",
                  stroke:
                    null !== (s = e.color) && void 0 !== s ? s : "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M9.99902 20.3346L13.999 3.66797",
                  stroke:
                    null !== (r = e.color) && void 0 !== r ? r : "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            });
          },
          doubleChevronRight: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M13.001 6.33398L18.6676 12.0007L13.001 17.6673",
                  stroke: "#353535",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M6.66797 6.33398L12.3346 12.0007L6.66797 17.6673",
                  stroke: "#353535",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          clipboard: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M8.33398 3.66797H7.00065C5.52732 3.66797 4.33398 4.8613 4.33398 6.33464V19.0013C4.33398 20.4746 5.52732 21.668 7.00065 21.668H17.0007C18.474 21.668 19.6673 20.4746 19.6673 19.0013V6.33464C19.6673 4.8613 18.474 3.66797 17.0007 3.66797H15.6673",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M14.334 1.66797H9.66732C8.93094 1.66797 8.33398 2.26492 8.33398 3.0013V4.33464C8.33398 5.07102 8.93094 5.66797 9.66732 5.66797H14.334C15.0704 5.66797 15.6673 5.07102 15.6673 4.33464V3.0013C15.6673 2.26492 15.0704 1.66797 14.334 1.66797Z",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          searchArea: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  opacity: "0.3",
                  d: "M3.66602 9.0013V6.33464C3.66602 4.8613 4.85935 3.66797 6.33268 3.66797H8.99935",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  opacity: "0.3",
                  d: "M14.999 3.66797H17.6657C19.139 3.66797 20.3324 4.8613 20.3324 6.33464V9.0013",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  opacity: "0.3",
                  d: "M8.99935 20.3353H6.33268C4.85935 20.3353 3.66602 19.142 3.66602 17.6686V15.002",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M11.9993 16.3346C14.3925 16.3346 16.3327 14.3945 16.3327 12.0013C16.3327 9.60806 14.3925 7.66797 11.9993 7.66797C9.60611 7.66797 7.66602 9.60806 7.66602 12.0013C7.66602 14.3945 9.60611 16.3346 11.9993 16.3346Z",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.0605 15.0625L19.3325 19.3345",
                  stroke: e.color || "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          arrowBack: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M2.99902 12.334V16.334C2.99902 17.8073 4.19236 19.0007 5.66569 19.0007H18.3324C19.8057 19.0007 20.999 17.8073 20.999 16.334V9.00065C20.999 7.52732 19.8057 6.33398 18.3324 6.33398H5.00969",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M8.9991 10.3335L5.00977 6.34418L8.9991 2.35352",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          compose: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M20.3327 11.668V17.668C20.3327 19.1413 19.1393 20.3346 17.666 20.3346H6.33268C4.85935 20.3346 3.66602 19.1413 3.66602 17.668V6.33464C3.66602 4.8613 4.85935 3.66797 6.33268 3.66797H12.3327",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M9 15.0007C9 15.0007 11.8267 14.8407 12.7813 13.886L21.1147 5.55265C21.8507 4.81665 21.8507 3.62198 21.1147 2.88598C20.3787 2.14998 19.184 2.14998 18.448 2.88598L10.1147 11.2193C9.16 12.174 9 15.0007 9 15.0007Z",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          circleCheck: (e) =>
            (0, o.jsxs)("svg", {
              width: "21",
              height: "21",
              viewBox: "0 0 21 21",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M10.5067 18.5564C14.9557 18.5564 18.5623 14.9499 18.5623 10.5009C18.5623 6.05191 14.9557 2.44531 10.5067 2.44531C6.05777 2.44531 2.45117 6.05191 2.45117 10.5009C2.45117 14.9499 6.05777 18.5564 10.5067 18.5564Z",
                  stroke: "#E373FF",
                  strokeWidth: "1.66667",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M6.89453 10.7786L9.39453 13.5564L14.1168 7.44531",
                  stroke: "#E373FF",
                  strokeWidth: "1.66667",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          resize: (e) =>
            (0, o.jsxs)("svg", {
              width: "9",
              height: "40",
              viewBox: "0 0 9 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("rect", {
                  width: "9",
                  height: "40",
                  rx: "4.5",
                  fill: "#E373FF",
                  fillOpacity: "0.1",
                }),
                (0, o.jsx)("rect", {
                  x: "2",
                  y: "8",
                  width: "1.5",
                  height: "24",
                  rx: "0.75",
                  fill: "#E373FF",
                  fillOpacity: "0.1",
                }),
                (0, o.jsx)("rect", {
                  x: "5.5",
                  y: "8",
                  width: "1.5",
                  height: "24",
                  rx: "0.75",
                  fill: "#E373FF",
                  fillOpacity: "0.1",
                }),
              ],
            }),
          arrowUp: (e) =>
            (0, o.jsx)("svg", {
              width: "9",
              height: "6",
              viewBox: "0 0 9 6",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: (0, o.jsx)("path", {
                d: "M1 4.33333L4.33333 1L7.66667 4.33333",
                stroke: "#E373FF",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          onlineStatus: (e) =>
            (0, o.jsxs)("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 10 10",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("circle", {
                  cx: "5",
                  cy: "5",
                  r: "3",
                  fill: "#4FE760",
                }),
                (0, o.jsx)("circle", {
                  cx: "5",
                  cy: "5",
                  r: "4",
                  stroke: "#4FE760",
                  "stroke-opacity": "0.15",
                  strokeWidth: "2",
                }),
              ],
            }),
          redo: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M22.5 15.2818C21.576 14.4758 17.776 11.3418 12 11.3418C6.224 11.3418 2.424 14.4758 1.5 15.2818",
                  stroke: "white",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M19.6563 7.57812L22.5003 15.2821L14.5723 17.4221",
                  stroke: "white",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          squareDashed: (e) =>
            (0, o.jsxs)("svg", {
              width: "25",
              height: "24",
              viewBox: "0 0 25 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M4.16602 7.33366C3.61402 7.33366 3.16602 6.88566 3.16602 6.33366C3.16602 4.31099 4.81002 2.66699 6.83268 2.66699C7.38468 2.66699 7.83268 3.11499 7.83268 3.66699C7.83268 4.21899 7.38468 4.66699 6.83268 4.66699C5.91402 4.66699 5.16602 5.41499 5.16602 6.33366C5.16602 6.88566 4.71802 7.33366 4.16602 7.33366Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M20.8327 7.33366C20.2807 7.33366 19.8327 6.88566 19.8327 6.33366C19.8327 5.41499 19.0847 4.66699 18.166 4.66699C17.614 4.66699 17.166 4.21899 17.166 3.66699C17.166 3.11499 17.614 2.66699 18.166 2.66699C20.1887 2.66699 21.8327 4.31099 21.8327 6.33366C21.8327 6.88566 21.3847 7.33366 20.8327 7.33366Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M18.166 21.3337C17.614 21.3337 17.166 20.8857 17.166 20.3337C17.166 19.7817 17.614 19.3337 18.166 19.3337C19.0847 19.3337 19.8327 18.5857 19.8327 17.667C19.8327 17.115 20.2807 16.667 20.8327 16.667C21.3847 16.667 21.8327 17.115 21.8327 17.667C21.8327 19.6897 20.1887 21.3337 18.166 21.3337Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M6.83268 21.3337C4.81002 21.3337 3.16602 19.6897 3.16602 17.667C3.16602 17.115 3.61402 16.667 4.16602 16.667C4.71802 16.667 5.16602 17.115 5.16602 17.667C5.16602 18.5857 5.91402 19.3337 6.83268 19.3337C7.38468 19.3337 7.83268 19.7817 7.83268 20.3337C7.83268 20.8857 7.38468 21.3337 6.83268 21.3337Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M14.1663 4.66699H10.833C10.281 4.66699 9.83301 4.21899 9.83301 3.66699C9.83301 3.11499 10.281 2.66699 10.833 2.66699H14.1663C14.7183 2.66699 15.1663 3.11499 15.1663 3.66699C15.1663 4.21899 14.7183 4.66699 14.1663 4.66699Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M14.1663 21.334H10.833C10.281 21.334 9.83301 20.886 9.83301 20.334C9.83301 19.782 10.281 19.334 10.833 19.334H14.1663C14.7183 19.334 15.1663 19.782 15.1663 20.334C15.1663 20.886 14.7183 21.334 14.1663 21.334Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M20.833 14.6673C20.281 14.6673 19.833 14.2193 19.833 13.6673V10.334C19.833 9.78198 20.281 9.33398 20.833 9.33398C21.385 9.33398 21.833 9.78198 21.833 10.334V13.6673C21.833 14.2193 21.385 14.6673 20.833 14.6673Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M4.16602 14.6673C3.61402 14.6673 3.16602 14.2193 3.16602 13.6673V10.334C3.16602 9.78198 3.61402 9.33398 4.16602 9.33398C4.71802 9.33398 5.16602 9.78198 5.16602 10.334V13.6673C5.16602 14.2193 4.71802 14.6673 4.16602 14.6673Z",
                  fill: "#353535",
                }),
              ],
            }),
          playRotateClockwise: (e) =>
            (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M21.6673 11.0009C21.1153 11.0009 20.6673 11.4489 20.6673 12.0009C20.6673 16.7796 16.7793 20.6676 12.0007 20.6676C7.22198 20.6676 3.33398 16.7796 3.33398 12.0009C3.33398 7.22225 7.22198 3.33425 12.0007 3.33425C14.8953 3.33425 17.5247 4.74092 19.1287 7.07292L17.162 6.80092C16.6193 6.72092 16.11 7.10625 16.034 7.65558C15.958 8.20225 16.3407 8.70758 16.8887 8.78358L20.814 9.32625C20.8607 9.33291 20.906 9.33558 20.9527 9.33558C21.4447 9.33558 21.8727 8.97425 21.942 8.47292L22.486 4.54625C22.562 3.99958 22.1807 3.49558 21.6327 3.41825C21.0767 3.33825 20.5807 3.72358 20.5047 4.27292L20.3487 5.39558C18.3527 2.86092 15.3273 1.33692 12.0007 1.33692C6.11932 1.33425 1.33398 6.11958 1.33398 12.0009C1.33398 17.8822 6.11932 22.6676 12.0007 22.6676C17.882 22.6676 22.6673 17.8822 22.6673 12.0009C22.6673 11.4489 22.2193 11.0009 21.6673 11.0009Z",
                  fill: "#353535",
                }),
                (0, o.jsx)("path", {
                  d: "M16.0403 10.5621L11.1723 7.72344C10.659 7.42344 10.019 7.41945 9.50299 7.71678C8.98699 8.01411 8.66699 8.56744 8.66699 9.16211V14.8408C8.66699 15.4354 8.98699 15.9888 9.50299 16.2861C9.75899 16.4328 10.047 16.5061 10.3337 16.5061C10.6243 16.5061 10.915 16.4301 11.1737 16.2794L16.0403 13.4421C16.559 13.1408 16.8683 12.6034 16.8683 12.0034C16.8683 11.4034 16.5603 10.8648 16.0417 10.5621H16.0403Z",
                  fill: "#353535",
                }),
              ],
            }),
          close: (e) =>
            (0, o.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              children: (0, o.jsx)("path", {
                d: "M1 1L15 15M15 1L1 15",
                stroke: "#A0A0A0",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            }),
          walletGray: (e) =>
            (0, o.jsxs)("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, o.jsx)("path", {
                  d: "M3.33398 5.41732V14.1673C3.33398 15.5481 4.45328 16.6673 5.83398 16.6673H14.1673C15.5481 16.6673 16.6673 15.5481 16.6673 14.1673V10.0007C16.6673 8.6199 15.5481 7.50065 14.1673 7.50065H13.334M3.33398 5.41732C3.33398 6.56791 4.26673 7.50065 5.41732 7.50065H13.334M3.33398 5.41732C3.33398 4.26673 4.26673 3.33398 5.41732 3.33398H11.6673C12.5878 3.33398 13.334 4.08018 13.334 5.00065V7.50065",
                  stroke: "#A0A0A0",
                  strokeWidth: "1.66667",
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M12.9167 12.8118C13.3193 12.8118 13.6458 12.4853 13.6458 12.0827C13.6458 11.68 13.3193 11.3535 12.9167 11.3535C12.514 11.3535 12.1875 11.68 12.1875 12.0827C12.1875 12.4853 12.514 12.8118 12.9167 12.8118Z",
                  fill: "#A0A0A0",
                  stroke: "#A0A0A0",
                  strokeWidth: "0.625",
                }),
              ],
            }),
          expand: (e) =>
            (0, o.jsxs)("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M7 17H6C4.343 17 3 15.657 3 14V13",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M13 3H14C15.657 3 17 4.343 17 6V7",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M3 7V6C3 4.343 4.343 3 6 3H7",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17 13V14C17 15.657 15.657 17 14 17H13",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          minimize: (e) =>
            (0, o.jsxs)("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M3 13H4C5.657 13 7 14.343 7 16V17",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M17 7H16C14.343 7 13 5.657 13 4V3",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M7 3V4C7 5.657 5.657 7 4 7H3",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M13 17V16C13 14.343 14.343 13 16 13H17",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          setting: (e) =>
            (0, o.jsxs)("svg", {
              width: "42",
              height: "42",
              viewBox: "0 0 42 42",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M36.3835 16.016C37.7946 18.4482 38.5 19.664 38.5 21C38.5 22.336 37.7946 23.5518 36.3835 25.984L33.0171 31.7866C31.6116 34.209 30.909 35.4203 29.7533 36.0852C28.5978 36.75 27.1953 36.75 24.3903 36.75H17.6097C14.8047 36.75 13.4022 36.75 12.2466 36.0852C11.091 35.4203 10.3883 34.209 8.98294 31.7866L5.61648 25.984C4.20549 23.5518 3.5 22.336 3.5 21C3.5 19.664 4.20549 18.4482 5.61648 16.016L8.98294 10.2134C10.3883 7.79093 11.091 6.57972 12.2466 5.91486C13.4022 5.25 14.8047 5.25 17.6097 5.25H24.3903C27.1953 5.25 28.5978 5.25 29.7533 5.91486C30.909 6.57972 31.6116 7.79095 33.0171 10.2134L36.3835 16.016Z",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                }),
                (0, o.jsx)("path", {
                  d: "M16.0751 23.4987C15.7598 22.7899 15.584 22.0013 15.584 21.1703C15.584 18.084 18.0091 15.582 21.0007 15.582C23.9922 15.582 26.4173 18.084 26.4173 21.1703C26.4173 22.0013 26.2415 22.7899 25.9262 23.4987",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M21 12.666V13.4993",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M29.3333 21H28.5",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M13.4993 21H12.666",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M26.892 15.1074L26.3027 15.6967",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.6967 15.6967L15.1074 15.1074",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M23.0969 27.0875C23.9389 26.8152 24.2766 26.0445 24.3716 25.2694C24.3999 25.0378 24.2094 24.8457 23.9761 24.8457L18.0635 24.8459C17.8221 24.8459 17.6283 25.0507 17.6571 25.2903C17.7502 26.064 17.985 26.6291 18.8773 27.0875M23.0969 27.0875C23.0969 27.0875 19.0242 27.0875 18.8773 27.0875M23.0969 27.0875C22.9957 28.7084 22.5276 29.3503 21.0051 29.3323C19.3766 29.3624 19.002 28.569 18.8773 27.0875",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          codesandbox: (e) =>
            (0, o.jsxs)("svg", {
              width: "42",
              height: "43",
              viewBox: "0 0 42 43",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M27.125 7.97266L22.9845 10.2128C22.0155 10.7371 21.5311 10.9992 21 10.9992C20.4689 10.9992 19.9845 10.7371 19.0155 10.2128L14.875 7.97266",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M5.25 21.5L10.3153 24.2274C11.2566 24.7344 11.7273 24.9877 11.9886 25.4431C12.25 25.8986 12.25 26.4653 12.25 27.5987V33.75",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M36.75 21.5L31.6848 24.2274C30.7435 24.7344 30.2727 24.9877 30.0113 25.4431C29.75 25.8986 29.75 26.4653 29.75 27.5987V33.75",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M18.9793 4.83618C19.9654 4.27872 20.4586 4 21 4C21.5414 4 22.0346 4.27872 23.0207 4.83618L34.7293 11.4547C35.7154 12.0122 36.2086 12.2909 36.4793 12.75C36.75 13.2091 36.75 13.7666 36.75 14.8815V28.1185C36.75 29.2334 36.75 29.791 36.4793 30.25C36.2086 30.709 35.7154 30.9878 34.7293 31.5454L23.0207 38.1638C22.0346 38.7212 21.5414 39 21 39C20.4586 39 19.9654 38.7212 18.9793 38.1638L7.27072 31.5454C6.28455 30.9878 5.79145 30.709 5.52073 30.25C5.25 29.791 5.25 29.2334 5.25 28.1185V14.8815C5.25 13.7666 5.25 13.2091 5.52073 12.75C5.79145 12.2909 6.28455 12.0122 7.27072 11.4547L18.9793 4.83618Z",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M21 20.827V39M21 20.827L35.875 12.75M21 20.827L6.125 12.75",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          blockchain: (e) =>
            (0, o.jsxs)("svg", {
              width: "42",
              height: "43",
              viewBox: "0 0 42 43",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M9.625 18C9.83876 18 10.0375 17.9011 10.4349 17.7032L13.6296 16.1128C15.0432 15.4091 15.75 15.0572 15.75 14.5V7.5M9.625 18C9.41124 18 9.21251 17.9011 8.81506 17.7032L5.62044 16.1128C4.20682 15.4091 3.5 15.0572 3.5 14.5V7.5M9.625 18V11M15.75 7.5C15.75 6.94278 15.0432 6.59091 13.6296 5.88717L10.4349 4.29678C10.0375 4.09893 9.83876 4 9.625 4C9.41124 4 9.21251 4.09893 8.81506 4.29678L5.62044 5.88717C4.20681 6.59091 3.5 6.94278 3.5 7.5M15.75 7.5C15.75 8.05722 15.0432 8.40909 13.6296 9.11283L10.4349 10.7032C10.0375 10.9011 9.83876 11 9.625 11M3.5 7.5C3.5 8.05722 4.20681 8.40909 5.62044 9.11283L8.81506 10.7032C9.21251 10.9011 9.41124 11 9.625 11",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M32.375 18C32.5888 18 32.7875 17.9011 33.1849 17.7032L36.3795 16.1128C37.7932 15.4091 38.5 15.0572 38.5 14.5V7.5M32.375 18C32.1612 18 31.9625 17.9011 31.5651 17.7032L28.3705 16.1128C26.9568 15.4091 26.25 15.0572 26.25 14.5V7.5M32.375 18V11M38.5 7.5C38.5 6.94278 37.7932 6.59091 36.3795 5.88717L33.1849 4.29678C32.7875 4.09893 32.5888 4 32.375 4C32.1612 4 31.9625 4.09893 31.5651 4.29678L28.3705 5.88717C26.9568 6.59091 26.25 6.94278 26.25 7.5M38.5 7.5C38.5 8.05722 37.7932 8.40909 36.3795 9.11283L33.1849 10.7032C32.7875 10.9011 32.5888 11 32.375 11M26.25 7.5C26.25 8.05722 26.9568 8.40909 28.3705 9.11283L31.5651 10.7032C31.9625 10.9011 32.1612 11 32.375 11",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M20.125 11H21.875",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M3.5 21.5V27.625C3.5 30.0829 3.5 31.3117 4.08985 32.1944C4.34521 32.5766 4.67334 32.9048 5.05551 33.1601C5.93829 33.75 7.1672 33.75 9.625 33.75",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M38.5 21.5V27.625C38.5 30.0829 38.5 31.3117 37.9101 32.1944C37.6548 32.5766 37.3266 32.9048 36.9444 33.1601C36.0617 33.75 34.8329 33.75 32.375 33.75",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M21 39C21.2138 39 21.4125 38.9011 21.8099 38.7032L25.0045 37.1128C26.4182 36.4091 27.125 36.0572 27.125 35.5V28.5M21 39C20.7862 39 20.5875 38.9011 20.1901 38.7032L16.9954 37.1128C15.5818 36.4091 14.875 36.0572 14.875 35.5V28.5M21 39V32M27.125 28.5C27.125 27.9428 26.4182 27.5909 25.0045 26.8872L21.8099 25.2968C21.4125 25.0989 21.2138 25 21 25C20.7862 25 20.5875 25.0989 20.1901 25.2968L16.9954 26.8872C15.5818 27.5909 14.875 27.9428 14.875 28.5M27.125 28.5C27.125 29.0572 26.4182 29.4091 25.0045 30.1128L21.8099 31.7032C21.4125 31.9011 21.2138 32 21 32M14.875 28.5C14.875 29.0572 15.5818 29.4091 16.9954 30.1128L20.1901 31.7032C20.5875 31.9011 20.7862 32 21 32",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          blockchain2: (e) =>
            (0, o.jsxs)("svg", {
              width: "26",
              height: "26",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M13 20.5827C13.2269 20.5827 13.4378 20.4755 13.8595 20.2611L17.2497 18.5382C18.7499 17.7759 19.5 17.3946 19.5 16.791V9.20768M13 20.5827C12.7732 20.5827 12.5622 20.4755 12.1405 20.2611L8.75027 18.5382C7.25009 17.7759 6.5 17.3946 6.5 16.791V9.20768M13 20.5827V12.9993M19.5 9.20768C19.5 8.60403 18.7499 8.22283 17.2497 7.46044L13.8595 5.73754C13.4378 5.52319 13.2269 5.41602 13 5.41602C12.7732 5.41602 12.5622 5.52319 12.1405 5.73754L8.75027 7.46044C7.25009 8.22283 6.5 8.60403 6.5 9.20768M19.5 9.20768C19.5 9.81134 18.7499 10.1925 17.2497 10.9549L13.8595 12.6778C13.4378 12.8922 13.2269 12.9993 13 12.9993M6.5 9.20768C6.5 9.81134 7.25009 10.1925 8.75027 10.9549L12.1405 12.6778C12.5622 12.8922 12.7732 12.9993 13 12.9993",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.5",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M14.2893 23.3733L19.3745 20.9121C21.6248 19.8229 22.75 19.2783 22.75 18.416V7.58268C22.75 6.72032 21.6248 6.17575 19.3745 5.08662L14.2893 2.62534C13.6566 2.31913 13.3403 2.16602 13 2.16602C12.6597 2.16602 12.3434 2.31912 11.7107 2.62534L6.62541 5.08662C4.37514 6.17575 3.25 6.72032 3.25 7.58268V18.416C3.25 19.2783 4.37513 19.8229 6.62536 20.912L11.7107 23.3733C12.3434 23.6796 12.6597 23.8327 13 23.8327C13.3403 23.8327 13.6566 23.6796 14.2893 23.3733Z",
                  stroke: "#E373FF",
                  strokeWidth: "1.5",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          leaf: (e) =>
            (0, o.jsxs)("svg", {
              width: "42",
              height: "42",
              viewBox: "0 0 42 42",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M13.3802 27.4939C12.6574 26.0691 12.25 24.4571 12.25 22.75C12.25 17.1235 16.625 13.125 22.75 12.25C29.893 11.2296 32.9583 7.29167 35 5.25C41.125 28 29.75 33.25 22.75 33.25C20.8374 33.25 19.0444 32.7386 17.5 31.8453",
                  stroke: "#A0A0A0",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M5.25 36.7496C6.125 31.4996 9.55134 28.2368 17.5 26.2496C23.1292 24.8423 27.061 21.3131 29.75 17.5957",
                  stroke: "#E373FF",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
              ],
            }),
          access: (e) =>
            (0, o.jsxs)("svg", {
              width: "26",
              height: "26",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M7.58464 2.16602C4.5931 2.16602 2.16797 4.59114 2.16797 7.58268C2.16797 9.58762 3.25726 11.3382 4.8763 12.2747V19.3294C4.8763 20.215 4.8763 20.6579 5.04123 21.056C5.20615 21.4542 5.51927 21.7673 6.1455 22.3936L7.58464 23.8327L9.86851 21.5488C9.97384 21.4435 10.0265 21.3907 10.0702 21.3336C10.185 21.1836 10.2585 21.0062 10.2835 20.8188C10.293 20.7476 10.293 20.673 10.293 20.5241C10.293 20.4035 10.293 20.3433 10.2866 20.2847C10.2698 20.131 10.2204 19.9828 10.1417 19.8499C10.1117 19.7992 10.0755 19.751 10.0031 19.6546L8.66797 17.8743L9.4263 16.8633C9.85583 16.2905 10.0706 16.0042 10.1818 15.6706C10.293 15.3371 10.293 14.9791 10.293 14.2633V12.2747C11.912 11.3382 13.0013 9.58762 13.0013 7.58268C13.0013 4.59114 10.5762 2.16602 7.58464 2.16602Z",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.3",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M7.58203 7.58398H7.59101",
                  stroke: "#E373FF",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M14.082 15.166H20.582C21.5916 15.166 22.0963 15.166 22.4945 15.3309C23.0254 15.5508 23.4472 15.9727 23.6671 16.5035C23.832 16.9017 23.832 17.4065 23.832 18.416C23.832 19.4256 23.832 19.9303 23.6671 20.3285C23.4472 20.8594 23.0254 21.2812 22.4945 21.5011C22.0963 21.666 21.5916 21.666 20.582 21.666H14.082",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M16.25 5.41602H20.5833C21.5929 5.41602 22.0976 5.41602 22.4959 5.58094C23.0267 5.80085 23.4485 6.22264 23.6684 6.75353C23.8333 7.15171 23.8333 7.65648 23.8333 8.66602C23.8333 9.67555 23.8333 10.1803 23.6684 10.5785C23.4485 11.1094 23.0267 11.5312 22.4959 11.7511C22.0976 11.916 21.5929 11.916 20.5833 11.916H16.25",
                  stroke: "#E373FF",
                  strokeWidth: "1.3",
                  strokeLinecap: "round",
                }),
              ],
            }),
          rocket: (e) =>
            (0, o.jsxs)("svg", {
              width: "26",
              height: "26",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M10.4735 8.35651V6.94706C10.4735 5.36005 11.1359 3.99205 12.1119 2.83884C12.4915 2.39029 12.6813 2.16602 13.0013 2.16602C13.3213 2.16602 13.5111 2.39029 13.8907 2.83884C14.8667 3.99205 15.529 5.36005 15.529 6.94706V8.35651C15.529 9.51722 15.529 9.84724 16.2304 10.3549C16.7913 10.7156 17.3346 11.0648 17.3346 11.7641C17.3346 12.6125 16.9736 12.9993 16.1818 12.9993H9.8208C9.02908 12.9993 8.66797 12.6125 8.66797 11.7641C8.66797 11.0648 9.21122 10.7156 9.77224 10.3549C10.4735 9.84724 10.4735 9.51722 10.4735 8.35651Z",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.4",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M21.1263 23.8327C22.6221 23.8327 23.8346 22.5393 23.8346 20.9438C23.8346 19.3483 22.6221 18.0549 21.1263 18.0549C21.1263 16.4594 19.9137 15.166 18.418 15.166",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M4.8763 23.8327C3.38053 23.8327 2.16797 22.5393 2.16797 20.9438C2.16797 19.3483 3.38053 18.0549 4.8763 18.0549C4.8763 16.4594 6.08887 15.166 7.58464 15.166",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M10.832 16.25V21.6667",
                  stroke: "#E373FF",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M15.168 16.25V18.4167",
                  stroke: "#E373FF",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                }),
              ],
            }),
          sustainableEnergy: (e) =>
            (0, o.jsxs)("svg", {
              width: "26",
              height: "26",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M14.0417 12.791C14.0417 12.791 13 13.6243 13 15.0827",
                  stroke: "#E373FF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M12.1942 11.7763C12.7148 11.2557 12.7148 10.4117 12.1942 9.89118C11.4088 9.10573 9.68079 9.26282 9.68079 9.26282C9.68079 9.26282 9.5237 10.9908 10.3092 11.7763C10.8297 12.2968 11.6737 12.2968 12.1942 11.7763Z",
                  stroke: "#E373FF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M14.1667 12.6654C14.6129 13.1115 15.3363 13.1115 15.7824 12.6654C16.4557 11.9921 16.321 10.511 16.321 10.511C16.321 10.511 14.8399 10.3763 14.1667 11.0496C13.7205 11.4958 13.7205 12.2192 14.1667 12.6654Z",
                  stroke: "#E373FF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M12.168 11.959C12.168 11.959 13.0013 13.0007 13.0013 15.0837",
                  stroke: "#E373FF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M16.75 16.7507C15.8338 15.7286 14.4934 15.084 13 15.084C11.5066 15.084 10.1662 15.7286 9.25 16.7507",
                  stroke: "#E373FF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M18.6897 21.5771C21.4627 19.7332 23.2904 16.5804 23.2904 13.0007C23.2904 7.31672 18.6826 2.70898 12.9987 2.70898C12.2126 2.70898 11.4471 2.7971 10.7117 2.96401M18.6897 21.5771V18.4173M18.6897 21.5771H22.207M7.2811 4.44205C4.52297 6.28827 2.70703 9.4324 2.70703 13.0007C2.70703 18.6846 7.31476 23.2923 12.9987 23.2923C13.7848 23.2923 14.5502 23.2042 15.2857 23.0373M7.2811 4.44205V7.58398M7.2811 4.44205H3.79036",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          agreement: (e) =>
            (0, o.jsxs)("svg", {
              width: "26",
              height: "26",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: e,
              className: e.className,
              children: [
                (0, o.jsx)("path", {
                  d: "M23.8346 7.31315H20.8133C20.1621 7.31315 19.8365 7.31315 19.5295 7.22018C19.2224 7.12722 18.9515 6.94661 18.4096 6.58537C17.5969 6.04352 16.6697 5.42539 16.2091 5.28593C15.7485 5.14648 15.2601 5.14648 14.2832 5.14648C12.9548 5.14648 12.0986 5.14648 11.5013 5.39387C10.9041 5.64126 10.4344 6.11094 9.49506 7.05029L8.66839 7.87696C8.4567 8.08866 8.35084 8.19451 8.2855 8.29901C8.04326 8.6864 8.07011 9.18412 8.3526 9.5432C8.42881 9.64008 8.54543 9.73392 8.77866 9.92162C9.64076 10.6154 10.8836 10.5462 11.6643 9.76086L13.0013 8.41583H14.0846L20.5846 14.9545C21.183 15.5564 21.183 16.5322 20.5846 17.1341C19.9863 17.736 19.0163 17.736 18.418 17.1341L17.8763 16.5892M17.8763 16.5892L14.6263 13.3199M17.8763 16.5892C18.4746 17.1911 18.4746 18.1669 17.8763 18.7687C17.278 19.3706 16.308 19.3706 15.7096 18.7687L14.6263 17.679M14.6263 17.679C15.2246 18.2808 15.2246 19.2567 14.6263 19.8586C14.028 20.4603 13.058 20.4603 12.4596 19.8586L10.8346 18.2238M14.6263 17.679L12.4596 15.5123M10.8346 18.2238L10.293 17.679M10.8346 18.2238C11.433 18.8257 11.433 19.8016 10.8346 20.4035C10.2363 21.0053 9.26628 21.0053 8.66797 20.4035L5.60904 17.2808C4.98046 16.6391 4.66618 16.3183 4.26351 16.149C3.86085 15.9798 3.41172 15.9798 2.51349 15.9798H2.16797",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.625",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M23.8333 15.9785H21.125",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.625",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M9.20963 7.3125H2.16797",
                  stroke: "#EBEBEB",
                  strokeWidth: "1.625",
                  strokeLinecap: "round",
                }),
              ],
            }),
        },
        n = (e) => {
          let {
              icon: t,
              height: s,
              width: n,
              color: i,
              size: a,
              className: d,
              ...l
            } = e,
            h = r[t];
          return (0, o.jsx)(h, {
            fontSize: a,
            height: s || a,
            width: n || a,
            color: null != i ? i : "currentColor",
            className: d,
            ...l,
          });
        };
    },
    60171: function (e, t, s) {
      "use strict";
      s.d(t, {
        ResizableHandle: function () {
          return l;
        },
        ResizablePanel: function () {
          return d;
        },
        ResizablePanelGroup: function () {
          return a;
        },
      });
      var o = s(57437),
        r = s(41505),
        n = s(49354),
        i = s(95955);
      let a = (e) => {
          let { className: t, ...s } = e;
          return (0, o.jsx)(r.eh, {
            className: (0, n.cn)(
              "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
              t
            ),
            ...s,
          });
        },
        d = r.s_,
        l = (e) => {
          let { withHandle: t, className: s, ...a } = e;
          return (0, o.jsx)(r.OT, {
            className: (0, n.cn)(
              "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
              s
            ),
            ...a,
            children:
              t &&
              (0, o.jsx)("div", {
                children: (0, o.jsx)(i.JO, { icon: "resize" }),
              }),
          });
        };
    },
    12170: function (e, t, s) {
      "use strict";
      s.d(t, {
        Tabs: function () {
          return l;
        },
        TabsContent: function () {
          return c;
        },
        TabsList: function () {
          return h;
        },
        TabsTrigger: function () {
          return C;
        },
      });
      var o = s(57437),
        r = s(2265),
        n = s(35425),
        i = s(49354),
        a = s(69903),
        d = s.n(a);
      let l = n.fC,
        h = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, o.jsx)(n.aV, {
            ref: t,
            className: (0, i.cn)(
              "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              s
            ),
            ...r,
          });
        });
      h.displayName = n.aV.displayName;
      let C = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, o.jsx)(n.xz, {
          ref: t,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap bg-[#23232399] text-subtext rounded-xl px-6 py-2.5 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=active]:bg-pink-shade data-[state=active]:text-foreground data-[state=active]:text-brand-pink",
            d().className,
            s
          ),
          ...r,
        });
      });
      C.displayName = n.xz.displayName;
      let c = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, o.jsx)(n.VY, {
          ref: t,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            s
          ),
          ...r,
        });
      });
      c.displayName = n.VY.displayName;
    },
    6477: function (e, t, s) {
      "use strict";
      s.d(t, {
        Toggle: function () {
          return l;
        },
        toggleVariants: function () {
          return d;
        },
      });
      var o = s(57437),
        r = s(19425),
        n = s(12218),
        i = s(2265),
        a = s(49354);
      let d = (0, n.j)(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
          {
            variants: {
              variant: {
                default: "bg-transparent",
                outline:
                  "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
              },
              size: { default: "h-10 px-3", sm: "h-9 px-2.5", lg: "h-11 px-5" },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        l = i.forwardRef((e, t) => {
          let { className: s, variant: n, size: i, ...l } = e;
          return (0, o.jsx)(r.f, {
            ref: t,
            className: (0, a.cn)(d({ variant: n, size: i, className: s })),
            ...l,
          });
        });
      l.displayName = r.f.displayName;
    },
    60926: function (e, t, s) {
      "use strict";
      s.d(t, {
        E: function () {
          return o.toggleVariants;
        },
      });
      var o = s(6477);
    },
    16533: function (e, t, s) {
      "use strict";
      s.d(t, {
        ToggleGroup: function () {
          return l;
        },
        ToggleGroupItem: function () {
          return h;
        },
      });
      var o = s(57437),
        r = s(95750),
        n = s(2265),
        i = s(60926),
        a = s(49354);
      let d = n.createContext({ size: "default", variant: "default" }),
        l = n.forwardRef((e, t) => {
          let { className: s, variant: n, size: i, children: l, ...h } = e;
          return (0, o.jsx)(r.fC, {
            ref: t,
            className: (0, a.cn)("flex items-center justify-center gap-1", s),
            ...h,
            children: (0, o.jsx)(d.Provider, {
              value: { variant: n, size: i },
              children: l,
            }),
          });
        });
      l.displayName = r.fC.displayName;
      let h = n.forwardRef((e, t) => {
        let { className: s, children: l, variant: h, size: C, ...c } = e,
          k = n.useContext(d);
        return (0, o.jsx)(r.ck, {
          ref: t,
          className: (0, a.cn)(
            (0, i.E)({ variant: k.variant || h, size: k.size || C }),
            s
          ),
          ...c,
          children: l,
        });
      });
      h.displayName = r.ck.displayName;
    },
    69118: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Tooltip: function () {
            return d;
          },
          TooltipContent: function () {
            return h;
          },
          TooltipProvider: function () {
            return a;
          },
          TooltipTrigger: function () {
            return l;
          },
        });
      var o = s(57437),
        r = s(34470),
        n = s(2265),
        i = s(49354);
      let a = r.zt,
        d = r.fC,
        l = r.xz,
        h = n.forwardRef((e, t) => {
          let { className: s, sideOffset: n = 4, ...a } = e;
          return (0, o.jsx)(r.VY, {
            ref: t,
            sideOffset: n,
            className: (0, i.cn)(
              "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              s
            ),
            ...a,
          });
        });
      h.displayName = r.VY.displayName;
    },
    16661: function (e, t, s) {
      "use strict";
      s.d(t, {
        HN: function () {
          return c;
        },
        UQ: function () {
          return k.Accordion;
        },
        vF: function () {
          return k.AccordionContent;
        },
        Qd: function () {
          return k.AccordionItem;
        },
        o4: function () {
          return k.AccordionTrigger;
        },
        zx: function () {
          return j;
        },
        JO: function () {
          return r.JO;
        },
        ho: function () {
          return L;
        },
        aN: function () {
          return H;
        },
        Kf: function () {
          return W;
        },
        Dp: function () {
          return F.ResizableHandle;
        },
        ee: function () {
          return F.ResizablePanel;
        },
        pO: function () {
          return F.ResizablePanelGroup;
        },
        ny: function () {
          return C;
        },
        iA: function () {
          return w;
        },
        RM: function () {
          return g;
        },
        pj: function () {
          return M;
        },
        ss: function () {
          return v;
        },
        xD: function () {
          return f;
        },
        SC: function () {
          return m;
        },
        mQ: function () {
          return N.Tabs;
        },
        nU: function () {
          return N.TabsContent;
        },
        dr: function () {
          return N.TabsList;
        },
        SP: function () {
          return N.TabsTrigger;
        },
        tX: function () {
          return A.ToggleGroup;
        },
        GX: function () {
          return A.ToggleGroupItem;
        },
        ZT: function () {
          return h;
        },
      });
      var o = s(57437),
        r = s(95955),
        n = s(49354),
        i = s(69903),
        a = s.n(i),
        d = s(11538),
        l = s.n(d);
      let h = (e) => {
        let {
          children: t,
          variant: s = "description",
          className: r,
          fontInter: i,
          fontNeue: d,
          ...h
        } = e;
        return (() => {
          switch (s) {
            case "h1":
              return (0, o.jsx)("h1", {
                className: (0, n.cn)(
                  "text-h3 md:text-h1 font-normal leading-3 md:leading-1",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            case "h2":
              return (0, o.jsx)("h2", {
                className: (0, n.cn)(
                  "text-h3 md:text-h2 font-normal leading-3 md:leading-2 ",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            case "h3":
              return (0, o.jsx)("p", {
                className: (0, n.cn)(
                  "text-h3 font-normal leading-3",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            case "h4":
              return (0, o.jsx)("p", {
                className: (0, n.cn)(
                  "text-h4 font-normal leading-4",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            case "h5":
              return (0, o.jsx)("p", {
                className: (0, n.cn)(
                  "text-h5 font-normal leading-5",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            case "h6":
              return (0, o.jsx)("p", {
                className: (0, n.cn)(
                  "text-h6 font-normal leading-6",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            case "body1":
              return (0, o.jsx)("p", {
                className: (0, n.cn)(
                  "text-body1 font-normal leading-7",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            case "body2":
              return (0, o.jsx)("p", {
                className: (0, n.cn)(
                  "text-body2 font-normal leading-8",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
            default:
              return (0, o.jsx)("p", {
                className: (0, n.cn)(
                  "text-body1 font-normal leading-5",
                  i ? a().className : d ? l().className : "",
                  r
                ),
                ...h,
                children: t,
              });
          }
        })();
      };
      s(56255), s(47092);
      let C = (e) => {
          let {
            children: t,
            className: s,
            defaultHidden: r,
            hoveredHidden: i,
            beforeClassName: a,
          } = e;
          return (0, o.jsx)("div", {
            className: (0, n.cn)(
              "rounded-border",
              r && "before:opacity-[0] before:hover:opacity-[1]",
              i && "before:opacity-[1] before:hover:opacity-[0]",
              s,
              a || ""
            ),
            children: t,
          });
        },
        c = (e) => {
          let { icon: t, title: s, subtitle: n, subtitleSecond: i } = e;
          return (0, o.jsx)(C, {
            className:
              "about-card-container h-fit !p-[15px] md:!p-5 xl:!p-[30px] z-[2]",
            hoveredHidden: !0,
            children: (0, o.jsxs)("div", {
              className: "relative z-[1] flex flex-col gap-2.5",
              children: [
                (0, o.jsxs)("div", {
                  className: "flex flex-row items-center gap-2.5",
                  children: [
                    t ? (0, o.jsx)(r.JO, { icon: t }) : null,
                    (0, o.jsx)(h, {
                      variant: "h6",
                      className: "text-maintext",
                      children: s,
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, o.jsx)(h, {
                      variant: "body1",
                      className: "!text-body1 text-subtext",
                      fontInter: !0,
                      children: n,
                    }),
                    i
                      ? (0, o.jsx)(h, {
                          variant: "body1",
                          className: " !text-body1 text-subtext",
                          fontInter: !0,
                          children: i,
                        })
                      : null,
                  ],
                }),
              ],
            }),
          });
        };
      var k = s(51398),
        u = s(12218),
        p = s(2265);
      s(66835);
      let x = (0, u.j)(
          "relative w-full inline-flex items-center justify-center whitespace-nowrap rounded-[12px]\n  font-medium ring-offset-background transition-all focus-visible:outline-none\n  disabled:cursor-not-allowed",
          {
            variants: {
              variant: {
                default:
                  "bg-transparent !text-body1 text-white hover:text-brand-pink  hover:scale-110 disabled:scale-100",
                primary:
                  "bg-brand-pink !text-body1 text-shade disabled:opacity-75",
              },
              size: {
                default: "h-[42px] w-fit px-[15px] py-4",
                icon: "h-8 w-8",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        j = (0, p.forwardRef)((e, t) => {
          let { className: s, variant: r, size: i, asChild: a = !1, ...d } = e;
          return (0, o.jsx)("button", {
            className: (0, n.cn)(
              x({ variant: r, size: i, className: s }),
              "default-button"
            ),
            ref: t,
            ...d,
          });
        });
      (j.displayName = "Button"), s(97682);
      let L = (e) => {
          let { icon: t, title: s, subtitle: n } = e;
          return (0, o.jsxs)("div", {
            className:
              "industry-card-container flex flex-row md:flex-col gap-2.5 md:gap-3 xl:gap-[31px] transition-all border border-module hover:border-brand-pink hover:bg-gradient-brand-pink rounded-[10px] pt-[15px] px-[15px] md:pr-[27px] xl:pr-[15px] pb-2.5",
            children: [
              (0, o.jsx)("div", {
                className:
                  "industry-card-icon-container w-10 h-10 flex justify-center items-center border border-module rounded-[10px] shrink-0",
                children: (0, o.jsx)(r.JO, { icon: t }),
              }),
              (0, o.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [
                  (0, o.jsx)(h, { variant: "h6", children: s }),
                  (0, o.jsx)(h, {
                    variant: "body1",
                    className: "!text-body1 text-subtext",
                    children: n,
                  }),
                ],
              }),
            ],
          });
        },
        w = p.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, o.jsx)("div", {
            className: "relative w-full",
            children: (0, o.jsx)("table", {
              ref: t,
              className: (0, n.cn)("w-full caption-bottom text-sm", s),
              ...r,
            }),
          });
        });
      w.displayName = "Table";
      let f = p.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, o.jsx)("thead", {
          ref: t,
          className: (0, n.cn)("[&_tr]:border-b", s),
          ...r,
        });
      });
      f.displayName = "TableHeader";
      let g = p.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, o.jsx)("tbody", {
          ref: t,
          className: (0, n.cn)("[&_tr:last-child]:border-0", s),
          ...r,
        });
      });
      (g.displayName = "TableBody"),
        (p.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, o.jsx)("tfoot", {
            ref: t,
            className: (0, n.cn)(
              "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
              s
            ),
            ...r,
          });
        }).displayName = "TableFooter");
      let m = p.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, o.jsx)("tr", {
          ref: t,
          className: (0, n.cn)(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            s
          ),
          ...r,
        });
      });
      m.displayName = "TableRow";
      let v = p.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, o.jsx)("th", {
          ref: t,
          className: (0, n.cn)(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            s
          ),
          ...r,
        });
      });
      v.displayName = "TableHead";
      let M = p.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, o.jsx)("td", {
          ref: t,
          className: (0, n.cn)(
            "p-4 align-middle [&:has([role=checkbox])]:pr-0",
            s
          ),
          ...r,
        });
      });
      (M.displayName = "TableCell"),
        (p.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, o.jsx)("caption", {
            ref: t,
            className: (0, n.cn)("mt-4 text-sm text-muted-foreground", s),
            ...r,
          });
        }).displayName = "TableCaption");
      var N = s(12170);
      s(60926);
      var A = s(16533);
      s(69118), s(71303);
      let H = (e) => {
        let { variant: t } = e;
        return (0, o.jsx)("div", {
          "aria-live": "assertive",
          role: "alert",
          className: (0, n.cn)("z-10", "dark" === t ? "loader-dark" : "loader"),
        });
      };
      s(92987);
      let W = () =>
        (0, o.jsxs)("div", {
          className: "spinner center",
          children: [
            (0, o.jsx)("div", { className: "spinner-blade" }),
            (0, o.jsx)("div", { className: "spinner-blade" }),
            (0, o.jsx)("div", { className: "spinner-blade" }),
            (0, o.jsx)("div", { className: "spinner-blade" }),
            (0, o.jsx)("div", { className: "spinner-blade" }),
            (0, o.jsx)("div", { className: "spinner-blade" }),
            (0, o.jsx)("div", { className: "spinner-blade" }),
            (0, o.jsx)("div", { className: "spinner-blade" }),
          ],
        });
      var F = s(60171);
    },
    49354: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return n;
        },
        h: function () {
          return i;
        },
      });
      var o = s(44839),
        r = s(96164);
      function n() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.m6)((0, o.W)(t));
      }
      function i(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
        if (!e || "string" != typeof e)
          throw Error("Input must be a valid hexadecimal string.");
        if (e.length <= t + s + 2) return e;
        let o = e.slice(0, 2),
          r = e.slice(2, 2 + t),
          n = e.slice(-s);
        return "".concat(o).concat(r, "...").concat(n);
      }
    },
    56255: function () {},
    24194: function () {},
    66835: function () {},
    97682: function () {},
    71303: function () {},
    92987: function () {},
    47092: function () {},
  },
]);
