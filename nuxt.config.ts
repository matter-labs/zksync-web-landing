import { NuxtConfig } from "@nuxt/types";
import { Configuration as WebpackConfiguration } from "webpack";

const pageTitle = `${process.env.SITE_TITLE}`;
const pageTitleTemplate = `${pageTitle}`;
const pageDescription = `${process.env.SITE_DESCRIPTION}`;
const pageKeywords = `${process.env.SITE_KEYWORDS}`;
const env = `${process.env.APP_ENV ?? "dev"}`;
const isProduction = env === "prod";
const isLocalhost = process.env.IS_LOCALHOST || false;

const pageImg = "/social.jpg";

const optimization = isProduction
  ? {
      removeAvailableModules: true,
      flagIncludedChunks: true,
      mergeDuplicateChunks: true,
      minimize: isProduction,
      removeEmptyChunks: true,
      providedExports: true,
      usedExports: true,
      splitChunks: {
        chunks: "async",
        maxSize: 10 * 1024,
      },
    }
  : {};

export default {
  /************************************
   * Generic nuxtjs settings
   ***********************************/
  debug: false,
  telemetry: false,
  srcDir: "src/",
  rootDir: "./",
  ssr: false,
  spa: true,
  static: true,
  target: "static",

  /**
   * Vue configuration
   */
  vue: {
    config: {
      productionTip: isProduction,
      devtools: !isProduction,
    },
  },

  /**
   * Ex-Dotenv options
   * @todo deprecate in favor of runtimeOptions & buildOptions
   */
  publicRuntimeConfig: {
    ...process.env,
  },

  loadingIndicator: {
    name: "pulse",
    color: "#4e529a",
    background: "#0a0c1a",
  },

  /**
   * Head-placed HTML-tags / configuration of the `<meta>`
   */
  head: {
    title: pageTitle as string | undefined,
    titleTemplate: `%s | ${pageTitleTemplate}`,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        name: "seobility",
        content: "782740f1dfd8b20131dd892a71c3d72b",
      },
      {
        name: "google-site-verification",
        content: "hrWPMoXfTOG40VQGoOgWmIW4shMGIsObggR1BNBm5bg",
      },
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
      {
        name: "viewport",
        content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },

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
        content: "/favicon.png",
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#4e529a",
      },
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
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#4e529a",
      },
      {
        name: "msapplication-TileColor",
        content: "#ffffff",
      },
      {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png",
      },
    ],

    /**
     * Mostly icon-configuration
     */
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        type: "image/x-icon",
        href: "/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        type: "image/x-icon",
        href: "/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        type: "image/x-icon",
        href: "/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        type: "image/x-icon",
        href: "/apple-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        type: "image/x-icon",
        href: "/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        type: "image/x-icon",
        href: "/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        type: "image/x-icon",
        href: "/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        type: "image/x-icon",
        href: "/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        type: "image/x-icon",
        href: "/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        sizes: "192x192",
        type: "image/png",
        href: "/android-icon-192x192.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        href: "/android-icon-36x36.png",
      },
      {
        rel: "icon",
        sizes: "96x96",
        type: "image/png",
        href: "/android-icon-96x96.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
    ],
  },

  /************************************
   * Modules configuration
   ***********************************/

  dev: !isProduction,

  /**
   * Customize the progress-bar color
   */
  loading: {
    color: "4e529a",
    continuous: true,
  },

  /**
   * Single-entry scss
   */
  css: ["@/assets/style/main.scss"],

  /**
   * Plugins that should be loaded before the mounting
   */
  plugins: ["@/plugins/loader-plugin", "@/plugins/scroll-to-plugin"],
  render: {
    injectScripts: true,
    ssr: false,
    crossorigin: "anonymous",
    resourceHints: false,
    static: {
      immutable: true,
      maxAge: "1d",
      prefix: true,
    },
    dist: {
      lastModified: true,
      immutable: true,
      // Serve index.html template
      index: true,
      // 1 year in production
      maxAge: "1m",
    },
  },

  /**
   * Nuxt.js dev-modules (built from devDependencies
   */
  buildModules: [
    "@nuxtjs/composition-api/module",
    "@nuxt/postcss8",
    [
      "@nuxtjs/style-resources",
      {
        scss: ["@/assets/variables.scss"],
      },
    ],
    "@nuxt/typescript-build",
  ],

  /**
   * Nuxt.js modules
   */
  modules: [
    "vue-scrollto/nuxt",
    "@nuxtjs/google-gtag",
    "@inkline/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        prefetch: true,
        preconnect: true,
        preload: true,
        display: "swap",
        families: {
          "Open+Sans": [400, 600, 700],
        },
      },
    ],
    [
      "nuxt-social-meta",
      {
        url: "https://zksync.io",
        title: pageTitle,
        site_name: pageTitle,
        description: pageDescription,
        img: "/social.jpg",
        locale: "en_US",
        twitter: "@zksync",
        twitter_card: "/social.jpg",
        themeColor: "#4e529a",
      },
    ],
    "@nuxtjs/sentry",
  ],
  inkline: {
    config: {
      variant: "dark",
    },
  },
  sentry: {
    disableServerSide: true,
    lazy: true,
    disabled: isLocalhost,
    dsn: process.env.SENTRY_DSN,
    config: {
      tracesSampleRate: 0.1,
      environment: isProduction ? "production" : process.env.APP_ENV === "dev" ? "development" : process.env.APP_ENV,
    },
  },
  "google-gtag": {
    id: process.env.GTAG_ID,
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
    },
    debug: !isProduction, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },

  /**
   * Async components loading config
   * @uses @nuxtjs/components
   */

  /************************************
   * Builder Settings (mainly for dev)
   ***********************************/
  build: {
    corejs: 2,
    extractCSS: {
      ignoreOrder: true,
    },
    babel: {
      compact: true,
    },
    filenames: {
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[id].[contenthash].js"),
    },
    transpile: ["scroll-to-plugin", "loader-plugin"],
    ssr: false,
    devtools: false,
    optimization,
    /**
     * Correct typing for the build-extended config
     */
    extend: (config: WebpackConfiguration): void => {
      config.node = {
        fs: "empty",
      };
      if (!config.output) {
        config.output = {
          crossOriginLoading: isProduction ? "anonymous" : false,
        };
      } else {
        config.output.crossOriginLoading = isProduction ? "anonymous" : false;
      }
    },
  },

  /************************************
   * Static Generation Settings
   ***********************************/
  generate: {
    dir: "public",
    devtools: false,
  },
} as NuxtConfig;
