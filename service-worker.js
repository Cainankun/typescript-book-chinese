/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f47499f533b4a5afa29d19e161205c1b"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f9a9cf45.js",
    "revision": "3cf123e9757b8ed7dfaf3776dedb39d0"
  },
  {
    "url": "assets/js/12.4fca7fe7.js",
    "revision": "1d18a48ebae2b7b1527a793dedbb042c"
  },
  {
    "url": "assets/js/13.9f481ce6.js",
    "revision": "670699d9e24dd5c8a74bc9da51dd0bda"
  },
  {
    "url": "assets/js/14.f5c4fb74.js",
    "revision": "ef8765f633bd6e9e8f247dcd9457b00a"
  },
  {
    "url": "assets/js/15.140a4a49.js",
    "revision": "aeb933495ef1c93e0e576ce361873578"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.5d604219.js",
    "revision": "7dc640b4442b769aae3830999ab2fc9d"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.e792885f.js",
    "revision": "4973cd631651cd1ba10412b406e7b52f"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.20f88f2b.js",
    "revision": "da7eff8113f48772f625667d3f98de5d"
  },
  {
    "url": "assets/js/21.b9c83e85.js",
    "revision": "b921ec291f9a0592da5243f3a639001f"
  },
  {
    "url": "assets/js/22.d755962d.js",
    "revision": "c99c95c865ebaba7596ecad5a9c5f0ed"
  },
  {
    "url": "assets/js/23.59be69aa.js",
    "revision": "e7d9ca87d0cc8a369795e94fca106332"
  },
  {
    "url": "assets/js/24.9f114fb4.js",
    "revision": "4d2e191793d2f11e163aa0c2c759f901"
  },
  {
    "url": "assets/js/25.f8d1d035.js",
    "revision": "48939d8b9e78c9f7344876ca607a14ef"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.bc26b064.js",
    "revision": "5c83e9b37af187944748bbf7a5a3a7dd"
  },
  {
    "url": "assets/js/28.beed3881.js",
    "revision": "03c5f7597f36f14642648426734043f0"
  },
  {
    "url": "assets/js/29.3738e881.js",
    "revision": "68e474dbc3fa4077109d2fd287427651"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.3ccab3ee.js",
    "revision": "ec3d869db9412a954b6f2f450f0c976a"
  },
  {
    "url": "assets/js/31.ad4777a3.js",
    "revision": "093ad2b6c1a83c2d8c2d92d0ab728437"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.7634af71.js",
    "revision": "cb9ce56277daf35f1e0b1dca8dc78408"
  },
  {
    "url": "assets/js/34.9d9b74a1.js",
    "revision": "6b880e82f84b38fc877f84217f18798a"
  },
  {
    "url": "assets/js/35.d011b2cf.js",
    "revision": "97f40b440154c0ca0fc11b31e1f8c2b6"
  },
  {
    "url": "assets/js/36.0dff3eca.js",
    "revision": "8d099040c3e0a01e0edc8de622f22cec"
  },
  {
    "url": "assets/js/37.9a1b9c17.js",
    "revision": "9eb5bd2df356d36fd37d1723b251d4ad"
  },
  {
    "url": "assets/js/38.e87759c5.js",
    "revision": "ce56b0964c83ffaada4e5ecf69a2d12e"
  },
  {
    "url": "assets/js/39.0168c5ef.js",
    "revision": "86bffd646c7ae111d6b52452634a2ecd"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.08fe56d7.js",
    "revision": "9e749394e0f0e2123e95ab84e6697bf9"
  },
  {
    "url": "assets/js/41.c19000ad.js",
    "revision": "a33c753e075c1445cdd9b110cc320cf4"
  },
  {
    "url": "assets/js/42.6b8e90d0.js",
    "revision": "09060804ef3c9a51b48e8e889a6e5ce7"
  },
  {
    "url": "assets/js/43.25dde793.js",
    "revision": "4d7221fa9da376d42fb0dca87d312180"
  },
  {
    "url": "assets/js/44.5d238ea9.js",
    "revision": "296ed688f7050692adb487935233320f"
  },
  {
    "url": "assets/js/45.8667874b.js",
    "revision": "269d33d1fd6b437f5bc080ea299d3fbd"
  },
  {
    "url": "assets/js/46.37de452b.js",
    "revision": "169c30cba77bf53730d52c251af9b29b"
  },
  {
    "url": "assets/js/47.e46306e5.js",
    "revision": "52c96b386177ac2b87c5ae1b1c926ed5"
  },
  {
    "url": "assets/js/48.89edf591.js",
    "revision": "264ef0dcd8be0587976541e11c6b1fa4"
  },
  {
    "url": "assets/js/49.d7404620.js",
    "revision": "2b0bb01598e2a62284a79bde8546fbc1"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.171ece3d.js",
    "revision": "d1bcff74f8ae44800b02bbfebd8c6d95"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.e76a4334.js",
    "revision": "7e007a784d4528f947280794ece03022"
  },
  {
    "url": "assets/js/54.ad255086.js",
    "revision": "172c84da9b26521b5372ec9490c24d51"
  },
  {
    "url": "assets/js/55.d35c593b.js",
    "revision": "529112c773f95a1805b319f0e65cc9b2"
  },
  {
    "url": "assets/js/56.780ba6cd.js",
    "revision": "ccd2841bf4b97c8937c360e610a719c7"
  },
  {
    "url": "assets/js/57.59d0262d.js",
    "revision": "4bd229059ce925d3ac561f6c847fded5"
  },
  {
    "url": "assets/js/58.6a3a89c8.js",
    "revision": "780f0dcff28b5df4d2a55b8739e8197f"
  },
  {
    "url": "assets/js/59.54abefbe.js",
    "revision": "876eacc909c7a34d5b6c6bf6bfc9b38f"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.76fe1713.js",
    "revision": "420517b3f586bab2e29f2a7516584d3f"
  },
  {
    "url": "assets/js/62.010d029e.js",
    "revision": "2acfc7437737c9f0ac003065a9f6f371"
  },
  {
    "url": "assets/js/63.01d99200.js",
    "revision": "0c466faf654d7bc4f6606398181705ff"
  },
  {
    "url": "assets/js/64.42b7ae63.js",
    "revision": "b4726b7a79c022c5b6f46e40d5e51f16"
  },
  {
    "url": "assets/js/65.5e14bfa2.js",
    "revision": "037beaebedb2b130abaeac94a9159559"
  },
  {
    "url": "assets/js/66.3a080038.js",
    "revision": "4b5926642e6781ffe8973efce2a5c6b7"
  },
  {
    "url": "assets/js/67.dbe66622.js",
    "revision": "a2f27eebcd2cb3501e2ed80188ee4ae1"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.587a0d39.js",
    "revision": "6d0f7cd75305374c5413b526eeefa0ed"
  },
  {
    "url": "assets/js/7.aa498ea3.js",
    "revision": "de57fb9e6522a8c129ea0b82ab51078f"
  },
  {
    "url": "assets/js/70.c3abaac0.js",
    "revision": "4ab5b9d2d5776334e296c0238fc9da08"
  },
  {
    "url": "assets/js/71.1167de03.js",
    "revision": "1ee4f372c3ede5589c034c60b24c8daf"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.2f164f89.js",
    "revision": "315be3de42d5f25da39bf1da37c3c632"
  },
  {
    "url": "assets/js/74.f2c6daf2.js",
    "revision": "b65f8e2b05a964cc2ec9d7a269527d11"
  },
  {
    "url": "assets/js/75.b23255bc.js",
    "revision": "71ca71c93edf951c6b1747e4ddcb705c"
  },
  {
    "url": "assets/js/76.e86a0924.js",
    "revision": "47ffcb141dbc5753cec1f60b9c63e483"
  },
  {
    "url": "assets/js/77.2421ecf7.js",
    "revision": "80e3676fcf8372baba89df2e6804918b"
  },
  {
    "url": "assets/js/78.ef6e24db.js",
    "revision": "c85e40e020bb3e9b1b36861e5322777a"
  },
  {
    "url": "assets/js/79.aa76a8f8.js",
    "revision": "cd07097e7d2f24c47c72674b261ee292"
  },
  {
    "url": "assets/js/8.44e2ec24.js",
    "revision": "1642ec963948d2619ac0ce6cb8036b31"
  },
  {
    "url": "assets/js/80.10be7626.js",
    "revision": "4ae5f2527c27effb3176919d19587cce"
  },
  {
    "url": "assets/js/81.35410ad8.js",
    "revision": "fcfac08c21d41e6b7c0fef7b9b13197e"
  },
  {
    "url": "assets/js/82.31f227ce.js",
    "revision": "422e820cc3dc808e35cd18008b714aee"
  },
  {
    "url": "assets/js/83.287fcfb0.js",
    "revision": "dca5e8a2619b2a11cffaaf7058666acf"
  },
  {
    "url": "assets/js/84.9ff1f804.js",
    "revision": "8486308450ce81084f158434736674e3"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.3d20106a.js",
    "revision": "574e1018c3e0b437cbef613e438c89df"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.f326f90c.js",
    "revision": "a2aae02cb232f162943a7524e03bbe05"
  },
  {
    "url": "assets/js/app.cf6f55eb.js",
    "revision": "d9c3634f77d07afda1885c0e4fa04c19"
  },
  {
    "url": "compiler/ast.html",
    "revision": "aaf48583bc17a33cf8dd9ccee5bf2c13"
  },
  {
    "url": "compiler/binder.html",
    "revision": "28f3b91dc3da58905f2df0c2ba3adf72"
  },
  {
    "url": "compiler/checker.html",
    "revision": "8027390609e7692a0a11b2abc852ec64"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "0deda76c209a183ff9d8b187f2af5b59"
  },
  {
    "url": "compiler/overview.html",
    "revision": "1e727bdd26a9f4866db713098ce9e9e7"
  },
  {
    "url": "compiler/parser.html",
    "revision": "410bf428a3e908980a0ba3c1540e8946"
  },
  {
    "url": "compiler/program.html",
    "revision": "f96a698f2f11c7bc6d9369707e51ff16"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "d8ffecb6e8e786c382e975fd32340ddb"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "922bbe827d44b84305dac1215cdbbadc"
  },
  {
    "url": "error/interpreting.html",
    "revision": "c30d23fe1c4138d7c6a4ba583b448f78"
  },
  {
    "url": "faqs/class.html",
    "revision": "af9c743e04ada950bf4b40a3b5f62938"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "ce942daaf7ea09203d5079a5c52e5655"
  },
  {
    "url": "faqs/comments.html",
    "revision": "9810d0688f7b3509bb7af94134876a0a"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "477be684b9c976389eb25c852b5d71ac"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "ce4304e96c7a45cb85f00f2bc2809686"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "cf23619a4f2b998313d6bfef057146ed"
  },
  {
    "url": "faqs/enums.html",
    "revision": "b48b3c1579a7fc2d5a99e24be1bb9b4b"
  },
  {
    "url": "faqs/function.html",
    "revision": "ae7e1596f3f10bdaaf1339d443db59e5"
  },
  {
    "url": "faqs/generics.html",
    "revision": "31558087cdcc935adc49ed921d396be3"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "b8610a38a5f898eb0a4369151832f4f5"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "47ca7902fbafaa3c3fae38d86c0e1170"
  },
  {
    "url": "faqs/modules.html",
    "revision": "2ea23c1828342e2a8dc51b6fbdb2b21a"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "43dcc545a6a52b01a953cebb14d90e30"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "ff531553b6fea1b6fdae969270bea675"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "f37e2f7524e72c4d22d72f85d1eaac17"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "2b4d2ef0d305fb01c5646293d938b2b1"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "39457a7180e87d5d7474fa85f45c4ba7"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "7e8d46797b6e7512e3b0b17378a8da59"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "ad1d93d311737da4b33c83ae92a62f02"
  },
  {
    "url": "jsx/support.html",
    "revision": "64d7d2d31c91ca239ecb10a5250ea637"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "27264d9bbe8ecae1ee68b732e324b4c0"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "d65653497736712a6532af72f8941a79"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "74a1ab6827b35e3584b0e7c5918405de"
  },
  {
    "url": "project/modules.html",
    "revision": "f12c2cad13d9f98d759b0fed91f7a986"
  },
  {
    "url": "project/namespaces.html",
    "revision": "8337a2ed7ef53e735c2bb49d1bdb42da"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "93c83c0ea01447fbb397bdaa95666455"
  },
  {
    "url": "tips/barrel.html",
    "revision": "32a8815757e46023f38eeb2ba5a5c598"
  },
  {
    "url": "tips/bind.html",
    "revision": "a13e9c2243b38f73f227f8d35fd5f478"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "0ec8accf8ddf655264749b8e58da7991"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "ecf9197c13f4e581afaea14812fc5a08"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "a45a415b10318cc7d9bdf4a9f0269884"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "72b1a5cf64ffb164695dfdf6ca5ea648"
  },
  {
    "url": "tips/curry.html",
    "revision": "3996be838006dd6454914f3a1567d3f2"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "e1a465e597903729286436c5897ceb0b"
  },
  {
    "url": "tips/infer.html",
    "revision": "b0edc485c3f0e387f58fc87af8dd18c8"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "f8be8a2a1554316ecd2ce030541284fe"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "67797dbdc2f0ade005f2739aa45df2d7"
  },
  {
    "url": "tips/metadata.html",
    "revision": "e76fd91e9f32dcd09148ae5f0c21b808"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "2f3721e3d7e980f0a10e445e148245f9"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "e0200c5d0c813804599dd5c7cddd0e1a"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "6ed6d8e52238f26ef361651d635e8d1d"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "b3f6b354e939c9dbcf90f7625955674f"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "e4d28ed3e3e57990e53192d4e2a438b4"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "6389b2a30c30ab39af3046327ec4d048"
  },
  {
    "url": "tips/truthy.html",
    "revision": "cdc754267eb158db2ec5ec4c73ad9a6b"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "376bfa8284fbd9076ddbff992fc00e97"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "79087b9970cc3fb661fa989e8ac7689f"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "a053b87e4b7392aca9ed3475707c60ef"
  },
  {
    "url": "typings/callable.html",
    "revision": "c40295c9255437e8f2e4483431171bf9"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "5cf43add3a8df1ee1fb449acd57b6610"
  },
  {
    "url": "typings/enums.html",
    "revision": "d868d158279a952e6bd3828b567b653c"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "3940f6c3bfd085650ee72f6901415e46"
  },
  {
    "url": "typings/freshness.html",
    "revision": "ab1b04252e9d60b7c5e21d80007c2763"
  },
  {
    "url": "typings/functions.html",
    "revision": "60601b37d84863131b2bfd8bf453a017"
  },
  {
    "url": "typings/generices.html",
    "revision": "cf170477cc237d67ac6168958e663c22"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "afbb932254dd082f91f479a36749f53e"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "317b261878290da7c4eba6e57a8355b0"
  },
  {
    "url": "typings/lib.html",
    "revision": "8c6a434da60451956bf6a15ec9630dba"
  },
  {
    "url": "typings/literals.html",
    "revision": "17ac75a20d379b7ec845d2a41c7a0dca"
  },
  {
    "url": "typings/migrating.html",
    "revision": "7e963c7423fae60007ed0be8cad68476"
  },
  {
    "url": "typings/mixins.html",
    "revision": "d2dc3930067564a7b3e8cde2d597d72a"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "785a1984ec664cd607673a6bab0c6582"
  },
  {
    "url": "typings/neverType.html",
    "revision": "0538868be828c1d86ba953fd2a63ee9d"
  },
  {
    "url": "typings/overview.html",
    "revision": "fce7d63124353ba84ccbdbce69a002c7"
  },
  {
    "url": "typings/readonly.html",
    "revision": "412eababb68d88858fc8c36b192fb772"
  },
  {
    "url": "typings/thisType.html",
    "revision": "8c0283011ad77426b180d5fa259aef60"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "9df6dce8a892b453342de5114eccb8b4"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "d316b7b8660dfe65ca67ab7ffc51669e"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "59e475c7dc3a75faae6fb295076484be"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "23e59e6f3e2c46efcbcd1d29746129be"
  },
  {
    "url": "typings/types.html",
    "revision": "ff616e7e99aae8978d2c3c62dec9d8dc"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
