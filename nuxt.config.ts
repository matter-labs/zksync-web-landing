import { NuxtConfig } from "@nuxt/types";
import { NuxtOptionsBuild, NuxtOptionsLoaders, NuxtWebpackEnv } from "@nuxt/types/config/build";
import { NuxtOptionsEnv } from "@nuxt/types/config/env";
import { NuxtOptionsGenerate } from "@nuxt/types/config/generate";
import { NuxtOptionsHead } from "@nuxt/types/config/head";
import { NuxtOptionsVueConfiguration } from "@nuxt/types/config/vue-configuration";
import { ForkTsCheckerWebpackPluginOptions } from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions";
import { Configuration as WebpackConfiguration } from "webpack";

const pageTitle = `${process.env.SITE_TITLE}`;
const pageTitleTemplate = `${pageTitle}`;
const pageDescription = `${process.env.SITE_DESCRIPTION}`;
const pageKeywords = `${process.env.SITE_KEYWORDS}`;
const env = `${process.env.APP_ENV ?? "dev"}`;
const isProduction = env === "prod";
const pageImg = "/screenshot.jpg";

const sentryDsn = process.env.SENTRY_DSN;
const gtagId = process.env.GTAG_ID;

const config: NuxtConfig = {

  /************************************
   * Generic nuxtjs settings
   ***********************************/
  debug: !isProduction,
  telemetry: false,
  srcDir: "src/",
  rootDir: "./",
  ssr: false,
  target: "static",
  spa: true,
  static: true,

  /**
   * Vue configuration
   */
  vue: {
    config: {
      productionTip: isProduction,
      devtools: !isProduction
    }
  } as NuxtOptionsVueConfiguration,

  /**
   * Dotenv options
   * @todo deprecate in favor of runtimeOptions & buildOptions
   */
  env: {
    ...process.env
  } as NuxtOptionsEnv,

  /**
   * Head-placed HTML-tags / configuration of the `<meta>`
   */
  head: {
    title: pageTitle as string | undefined,
    titleTemplate: `%s | ${pageTitleTemplate}`,
    htmlAttrs: {
      lang: "en",
      amp: "true"
    },
    meta: [
      /**
       * Cache-control
       */
      {
        property: "cache-control",
        httpEquiv: "cache-control",
        content: "no-cache , no-store, must-revalidate"
      },
      {
        httpEquiv: "pragma",
        content: "no-cache",
        property: "pragma"
      },
      {
        httpEquiv: "cache-control",
        property: "cache-control",
        content: "no-cache , no-store, must-revalidate"
      },
      {
        httpEquiv: "expires",
        content: "0",
        property: "expires"
      },

      /**
       * UX / UI settings
       */
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" },

      /**
       * Page meta:
       * - SEO tags (keywords, description, author)
       * - OpenGraph tags (thumbnail,
       */
      {
        hid: "keywords",
        name: "keywords",
        content: pageKeywords
      },
      {
        hid: "description",
        name: "description",
        content: pageDescription
      },
      {
        hid: "author",
        name: "author",
        content: "https://matter-labs.io"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: pageTitle
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: pageDescription
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: pageImg
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@zksync"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@the_matter_labs"
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: pageTitle
      },
      {
        hid: "og:title",
        property: "og:title",
        content: pageTitle
      },
      {
        hid: "og:description",
        property: "og:description",
        content: pageDescription
      },
      {
        hid: "og:image",
        property: "og:image",
        content: pageImg
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: pageImg
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: pageTitle
      },
      {
        hid: "msapplication-TileImage",
        name: "msapplication-TileImage",
        content: "/favicon-dark.png"
      },
      { hid: "theme-color", name: "theme-color", content: "#4e529a" },
      {
        hid: "msapplication-TileColor",
        property: "msapplication-TileColor",
        content: "#4e529a"
      },
      {
        hid: "msapplication-TileImage",
        name: "msapplication-TileImage",
        content: "/favicon.ico"
      },
      {
        hid: "msapplication-TileColor",
        property: "msapplication-TileColor",
        content: "#4e529a"
      },
      { hid: "theme-color", name: "theme-color", content: "#4e529a" },
      {
        name: "msapplication-TileColor",
        content: "#ffffff"
      },
      {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png"
      }
    ],

    /**
     * Mostly icon-configuration
     */
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
      { rel: "icon", sizes: "16x16", type: "image/png", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" }
    ]
  } as NuxtOptionsHead,

  /**
   * Customize the progress-bar color
   */
  loading: {
    color: "4e529a",
    continuous: true
  },

  /**
   * Single-entry scss
   */
  css: ["@/assets/style/main.scss"],

  /************************************
   * Modules, plugins & middleware
   ***********************************/

  /**
   * Plugins that should be loaded before the mounting
   */
  plugins: ["@/plugins/main", "@/plugins/icons"],

  /**
   * Nuxt.js dev-modules (built from devDependencies
   */
  buildModules: [
    "@nuxtjs/composition-api/module", // @required for the oh-vue-icons
    ["@nuxtjs/dotenv", { path: __dirname }], // @todo: to deprecate
    "@nuxtjs/google-fonts",
    "@nuxtjs/eslint-module",
    [
      "@nuxt/typescript-build",
      {
        typescript: {
          ignoreNotFoundWarnings: true,
          typeCheck: {
            enable: false,
            // async: true,
            // typescript: {
            //   typescriptPath: __dirname,
            //   extensions: {
            //     vue: true
            //   }
            // },
            stylelint: {
              config: [".stylelintrc"],
              files: "@/assets/style/**/*.scss"
            },
            eslint: {
              config: [".eslintrc.js"],
              options: {
                extensions: ["vue", "ts", "js"]
              },
              files: "@/**/*.*"
            },
            files: "@/**/*.*"
          } as ForkTsCheckerWebpackPluginOptions
        }
      }
    ]
  ],

  /**
   * Nuxt.js modules
   */
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/google-gtag",
    "@inkline/nuxt",
    "@nuxtjs/sentry",
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
        themeColor: "#4e529a"
      }
    ]
  ],

  /************************************
   * Modules configuration
   ***********************************/

  /**
   * Async components & blocks loading config
   * @uses @nuxtjs/components
   */
  components: ["@/components/", { path: "@/blocks/", prefix: "block" }],

  /**
   * Fonts pre-built configuration
   */
  googleFonts: {
    inject: true,
    prefetch: true,
    preconnect: true,
    preload: true,
    display: "swap",
    families: {
      "Fira+Sans": [400, 600],
      "Fira+Code": [400],
      "Open+Sans": [300, 400, 500, 700]
    }
  },

  /**
   * @deprecated Starting from the v.3.0.0 ```inkline/nuxt``` support will be dropped in favour to ```@tailwindcss`` / ```@tailwindUI```
   * @uses @inkline/nuxt
   */
  inkline: {
    config: {
      autodetectVariant: false,
      variant: "dark"
    }
  },

  /**
   * Overload of the @inkline sass-variables
   */
  styleResources: {
    scss: ["@/assets/variables.scss"]
  },

  /**
   * Sentry config
   */
  sentry: {
    dsn: sentryDsn,
    lazy: true,
    disabled: !isProduction,
    disableServerSide: true,
    config: {
      debug: false,
      tracesSampleRate: 1.0,
      environment: isProduction ? "production" : env === "dev" ? "development" : env
    }
  },

  /**
   * Google Tag config
   */
  "google-gtag": {
    id: gtagId,
    debug: !isProduction, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ["wallet.zksync.io", "rinkeby.zksync.io", "ropsten.zksync.io", "rinkeby-beta-wallet.zksync.dev", "ropsten-beta-wallet.zksync.dev", "stage.zksync.io"]
      }
    }
  },

  /************************************
   * Builder Settings (mainly for dev)
   ***********************************/

  build: {
    corejs: 3,
    ssr: false,
    standalone: true,
    extractCSS: {
      ignoreOrder: true
    },
    babel: {
      compact: true
    },
    cssSourceMap: true,
    splitChunks: {
      commons: true,
      layouts: true,
      pages: true
    },
    devtools: !isProduction,
    hardSource: false,
    optimization: {
      removeEmptyChunks: true,
      providedExports: true,
      usedExports: true,
      removeAvailableModules: true,
      flagIncludedChunks: true,
      mergeDuplicateChunks: true,
      splitChunks: {
        chunks: "async",
        name: isProduction ? undefined : "chunk",
        maxSize: 900 * 1024
      },
      minimize: isProduction
    },
    /**
     * Correct typing for the build-extended config
     */
    extend: (config: WebpackConfiguration, _ctx: { loaders: NuxtOptionsLoaders } & NuxtWebpackEnv): void => {
      config.mode = isProduction ? "production" : "development";
      config.node = {
        fs: "empty"
      };
      if (!config.output) {
        config.output = {
          crossOriginLoading: isProduction ? "anonymous" : false
        };
      } else {
        config.output.crossOriginLoading = isProduction ? "anonymous" : false;
      }
    }
  } as NuxtOptionsBuild,

  /************************************
   * Static Generation Settings
   ***********************************/

  generate: {
    dir: "public",
    fallback: "404.html",
    devtools: !isProduction
  } as NuxtOptionsGenerate
} as NuxtConfig;

export default config;