import { NuxtConfig } from "@nuxt/types";
import { NuxtOptionsEnv } from "@nuxt/types/config/env";
import { Configuration } from "webpack";

const pageTitle = `${process.env.SITE_TITLE}`;
const pageTitleTemplate = `${pageTitle}`;
const pageDescription = `${process.env.SITE_DESCRIPTION}`;
const pageKeywords = `${process.env.SITE_KEYWORDS}`;
const env = `${process.env.APP_ENV ?? "dev"}`;
const isProduction = env === "prod";
const pageImg = "/screenshot.jpg";

const sentryDsn = process.env.SENTRY_DSN;
const gtagId = process.env.GTAG_ID;

const config = {
  components: ["@/components/", { path: "@/blocks/", prefix: "block" }],
  telemetry: false,
  ssr: false,
  target: "static",
  srcDir: "./src/",
  spa: true,
  static: true,
  vue: {
    config: {
      productionTip: isProduction,
      devtools: !isProduction,
    },
  },
  env: <NuxtOptionsEnv>{
    ...process.env,
  },

  /**
   * Head-placed HTML-tags / configuration of the `<meta>`
   */
  head: {
    title: pageTitle as string | undefined,
    titleTemplate: `%s | ${pageTitleTemplate}`,
    htmlAttrs: {
      lang: "en",
      amp: "true",
    },
    meta: [
      /**
       * Cache-control
       */
      {
        property: "cache-control",
        httpEquiv: "cache-control",
        content: "no-cache , no-store, must-revalidate",
      },
      {
        httpEquiv: "pragma",
        content: "no-cache",
        property: "pragma",
      },
      {
        httpEquiv: "cache-control",
        property: "cache-control",
        content: "no-cache , no-store, must-revalidate",
      },
      {
        httpEquiv: "expires",
        content: "0",
        property: "expires",
      },

      /**
       * UX / UI settings
       */
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0" },

      /**
       * Page meta:
       * - SEO tags (keywords, description, author)
       * - OpenGraph tags (thumbnail,
       */
      {
        hid: "keywords",
        name: "keywords",
        content: pageKeywords,
      },
      {
        hid: "description",
        name: "description",
        content: pageDescription,
      },
      {
        hid: "author",
        name: "author",
        content: "https://matter-labs.io",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: pageTitle,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: pageDescription,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: pageImg,
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@zksync",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@the_matter_labs",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: pageTitle,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: pageTitle,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: pageDescription,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: pageImg,
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: pageImg,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: pageTitle,
      },
      {
        hid: "msapplication-TileImage",
        name: "msapplication-TileImage",
        content: "/favicon-dark.png",
      },
      { hid: "theme-color", name: "theme-color", content: "#4e529a" },
      {
        hid: "msapplication-TileColor",
        property: "msapplication-TileColor",
        content: "#4e529a",
      },
      {
        hid: "msapplication-TileImage",
        name: "msapplication-TileImage",
        content: "/favicon.ico",
      },
      {
        hid: "msapplication-TileColor",
        property: "msapplication-TileColor",
        content: "#4e529a",
      },
      { hid: "theme-color", name: "theme-color", content: "#4e529a" },
      {
        name: "msapplication-TileColor",
        content: "#ffffff",
      },
      {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "57x57", type: "image/x-icon", href: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", type: "image/x-icon", href: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", type: "image/x-icon", href: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", type: "image/x-icon", href: "/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", type: "image/x-icon", href: "/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", type: "image/x-icon", href: "/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", type: "image/x-icon", href: "/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", type: "image/x-icon", href: "/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", type: "image/x-icon", href: "/apple-icon-180x180.png" },
      { rel: "icon", sizes: "192x192", type: "image/png", href: "/android-icon-192x192.png" },
      { rel: "icon", sizes: "32x32", type: "image/png", href: "/android-icon-36x36.png" },
      { rel: "icon", sizes: "96x96", type: "image/png", href: "/android-icon-96x96.png" },
      { rel: "icon", sizes: "16x16", type: "image/png", href: "/android-icon-16x16.png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "4e529a",
    continuous: true,
  },

  /**
   * Single-entry global-scope scss
   */
  css: ["@/assets/style/main.scss"],
  /**
   * Plugins that should be loaded before the mounting
   */
  plugins: ["@/plugins/main", "@/plugins/icons"],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/composition-api/module",
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources",
    ["@nuxtjs/dotenv", { path: __dirname }],
    [
      "@nuxt/typescript-build",
      {
        typescript: {
          typeCheck: {
            async: true,
            stylelint: {
              config: [".stylelintrc"],
              files: "src/**/*.scss",
            },
            eslint: {
              config: ["tsconfig-eslint.json", ".eslintrc.js"],
              files: "@/**/*.{ts,vue,js}",
            },
            files: "@/**/*.{ts,vue,js}",
          },
        },
      },
    ],
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/google-gtag",
    "@inkline/nuxt",
    "vue-scrollto/nuxt",
    [
      "nuxt-social-meta",
      {
        url: "https://zksync.io",
        title: pageTitle,
        site_name: pageTitle,
        description: pageDescription,
        img: "https://zksync.io/social.jpg",
        img_size: { width: "1048px", height: "605px" },
        locale: "en_US",
        twitter: "@zksync",
        twitter_card: "https://zksync.io/social.jpg",
        themeColor: "#4e529a",
      },
    ],
    "@nuxtjs/sentry",
  ],

  /**
   * @deprecated Starting from the v.3.0.0 ```inkline/nuxt``` support will be dropped in favour to ```@tailwindcss`` / ```@tailwindUI```
   */
  inkline: {
    config: {
      autodetectVariant: false,
      variant: "dark",
    },
  },
  styleResources: {
    scss: "@/assets/variables.scss",
  },
  sentry: {
    dsn: sentryDsn,
    lazy: true,
    disableServerSide: true,
    config: {
      debug: !isProduction,
      tracesSampleRate: 1.0,
      environment: isProduction ? "production" : env === "dev" ? "development" : env,
    },
  },
  "google-gtag": {
    id: gtagId,
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
    },
    debug: !isProduction, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },
  /*
   ** Build configuration
   */
  build: {
    corejs: 3,
    ssr: false,
    standalone: true,
    extractCSS: {
      ignoreOrder: true,
    },
    babel: {
      compact: true,
    },
    transpile: ["oh-vue-icons", "@inkline/inkline"], // [v.2.4.0]: oh-vue-icons package
    hardSource: isProduction,
    optimization: {
      splitChunks: {
        maxSize: 200000,
      },
      nodeEnv: isProduction ? "16" : false,
      minimize: isProduction,
    },
    extend: (config: Configuration) => {
      config.node = {
        fs: "empty",
      };
    },
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    display: "swap",
    families: {
      "Fira+Sans": [400, 600],
      "Fira+Code": [400],
    },
  },
  generate: {
    dir: "public",
    fallback: "404.html",
    devtools: !isProduction,
  },
} as NuxtConfig;

export default config;
