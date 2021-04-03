/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app.json","1041017f07596fa5f4c247f7786c4562"],["bg.jpg","eebfdff4d18d831845914bc3025fa945"],["emoji.css","268967dc7ca2ba3071250b57e1edbdda"],["favicon.png","c967f7451a7e2c831956ede54e6080a0"],["index.html","b752a36973295f16768e4069ec3a8a23"],["jquery.js","11c05eb286ed576526bf4543760785b9"],["logout.png","2f1f6906eff291e8330423f7c3adc8fa"],["manifest.json","faafb5ead25c5837a4048160cd9e22d9"],["node_modules/accepts/HISTORY.md","a5ab659ea52c189a52686b7b2d0aaa2e"],["node_modules/accepts/README.md","9e6a0252de997173ebb7a3ff44a785b8"],["node_modules/accepts/index.js","4fe4d2c90a2fd19d6e97443a7d24f815"],["node_modules/accepts/package.json","35bdb378f7e3a173fa27ee837ad3cf32"],["node_modules/array-flatten/README.md","328fdaf1ee65869341567f4fb6716e02"],["node_modules/array-flatten/array-flatten.js","4b17fa06c54846b686b8b799e9dd253a"],["node_modules/array-flatten/package.json","67f84db64b347ebc5feb859aefe37cfb"],["node_modules/async-limiter/index.js","37d5f057a5b31cbbbd5fbc133a71b632"],["node_modules/async-limiter/package.json","b213c89056ad2d26e996dbffc5200438"],["node_modules/async-limiter/readme.md","fdc5666e261da26ad0d381875e5e3b13"],["node_modules/body-parser/HISTORY.md","fdc24998caf881fb588b5dd9c564fc33"],["node_modules/body-parser/README.md","0b6a422b2b1b220d6f54adea76b538d5"],["node_modules/body-parser/index.js","7b203b1ba7da7e9e3824e8c0c1708ea8"],["node_modules/body-parser/lib/read.js","046366a27279a7d65e7ae694823e76bc"],["node_modules/body-parser/lib/types/json.js","ef0d64e8db843813870c15cd5eb1efb3"],["node_modules/body-parser/lib/types/raw.js","acb38e4fe575afaf8d1a257e47c6e362"],["node_modules/body-parser/lib/types/text.js","beb4ada09306f8d6435566d9e88076d3"],["node_modules/body-parser/lib/types/urlencoded.js","906a833480ce8841bfa5aeb95b5c085f"],["node_modules/body-parser/package.json","5702a71b9bf27a0246d784bb1314ae58"],["node_modules/bufferutil/README.md","3b11ce46000393e56e6261433248727b"],["node_modules/bufferutil/binding.gyp","723d832563f9fafe57bb600822085771"],["node_modules/bufferutil/fallback.js","e7225196819df0032629fa873f3a6a47"],["node_modules/bufferutil/index.js","4ce2ef7ae60266e7ee9f8a4078117193"],["node_modules/bufferutil/package.json","426cc157ee19bb939b244978f907e953"],["node_modules/bufferutil/prebuilds/darwin-x64/electron-napi.node","1104d4bd5364dc4de5d2e0ffd6868388"],["node_modules/bufferutil/prebuilds/darwin-x64/node-napi.node","108d218774594f8738b8115d371f3d55"],["node_modules/bufferutil/prebuilds/linux-x64/electron-napi.node","05208c313a4a629de396d10e9595a714"],["node_modules/bufferutil/prebuilds/linux-x64/node-napi.node","05208c313a4a629de396d10e9595a714"],["node_modules/bufferutil/prebuilds/win32-ia32/electron-napi.node","109da7559b4f2257c9eff8de98b134c1"],["node_modules/bufferutil/prebuilds/win32-ia32/node-napi.node","809972e2974e74cbc7960a590a0c4145"],["node_modules/bufferutil/prebuilds/win32-x64/electron-napi.node","29e439d0aa440ecd7cea0d66d611eb2f"],["node_modules/bufferutil/prebuilds/win32-x64/node-napi.node","4934df60747431d51d452634d3301730"],["node_modules/bufferutil/src/bufferutil.c","b9d8bebcc2427640e3d782905c97a647"],["node_modules/bytes/History.md","cdb58f28139f5c1c229d1bce042250da"],["node_modules/bytes/Readme.md","80be7bb75739cf008ed7400efd5b0b0d"],["node_modules/bytes/index.js","a317b58c1896b9b1d2124bfb8886484d"],["node_modules/bytes/package.json","48e0d3a33c7cc992547e5bf741c1e114"],["node_modules/content-disposition/HISTORY.md","2fa841b0727d6434c26332a4ea07838b"],["node_modules/content-disposition/README.md","64d104d47f8de5e7776a6098f29db130"],["node_modules/content-disposition/index.js","30daea1ccaec65c195c624437fd7ea20"],["node_modules/content-disposition/package.json","6c513fb788e499d2b7e8239b1d4998e9"],["node_modules/content-type/HISTORY.md","bf5a18f36e5be9cfb5614c0a154d6de9"],["node_modules/content-type/README.md","7dd3c3a8fa71a08b63a4cc4c26b67fc4"],["node_modules/content-type/index.js","44890ac38a6cffb3d6efb5652bfce578"],["node_modules/content-type/package.json","c980cc5ddc83a2a4febcae43d6599a99"],["node_modules/cookie-signature/History.md","dc394515ce0ad9e572acab06c54847ca"],["node_modules/cookie-signature/Readme.md","57ae8b42de3dd0c1f22d5f4cf191e15a"],["node_modules/cookie-signature/index.js","a9634aa95d321b9a6d90bec5d3d23937"],["node_modules/cookie-signature/package.json","861febc9aa2a529ef2cd3a4582dfec78"],["node_modules/cookie/HISTORY.md","3778a457913c78da30b4c9339d24d2d5"],["node_modules/cookie/README.md","7cb828857a6d82be329449960851abd9"],["node_modules/cookie/index.js","a9081c159a481894479861e2507c0b7f"],["node_modules/cookie/package.json","36259f28ccd39ef6cf6988195f56b933"],["node_modules/debug/CHANGELOG.md","504a70c7eb9eba0c4b26965cf4d252c6"],["node_modules/debug/README.md","03694893d682191b3c893701ba6f4a55"],["node_modules/debug/component.json","510af4d67a35446e6dccea1429399c3a"],["node_modules/debug/karma.conf.js","06f3babbdc43c6c4dd1493b6c1af32e2"],["node_modules/debug/node.js","79f3814f32362c1c6f9dbb8a1e3b01bf"],["node_modules/debug/package.json","be43c501361bcfbaccdc2b0875c406ea"],["node_modules/debug/src/browser.js","62cfee6d6dd5ffec5d3ed35073791aec"],["node_modules/debug/src/debug.js","74bdccf347345d27fe8a4ac3add99c60"],["node_modules/debug/src/index.js","dd13897ea2eed92695bb7e4e744a9148"],["node_modules/debug/src/inspector-log.js","b22697b673c7c3586f22ae0206258fde"],["node_modules/debug/src/node.js","25807a97fbb1fcc42a013abc7d7768c4"],["node_modules/depd/History.md","bbe1469d587d6d7e5e5deb717e9aa31a"],["node_modules/depd/Readme.md","7bdff4ed8d628fd33365a6314fa7a7d8"],["node_modules/depd/index.js","fc83ac89ac144234a74ca42769f0c4c6"],["node_modules/depd/lib/browser/index.js","5b958f39df1df069739ccd3765bad0de"],["node_modules/depd/lib/compat/callsite-tostring.js","6b7b6b5b14ad2be86acce3d6bb4a64e6"],["node_modules/depd/lib/compat/event-listener-count.js","12b1ddab08bda110a232d7e724fe162c"],["node_modules/depd/lib/compat/index.js","863b7f4fae75ce11af3ce68aa7a4e962"],["node_modules/depd/package.json","affd19803c0e08ca2e6e17c0871872aa"],["node_modules/destroy/README.md","1781169baa24e5f44c7ad740f3d71df9"],["node_modules/destroy/index.js","f16c90b1ea929c508f3be515a6a141f4"],["node_modules/destroy/package.json","9b5b4d70dac44d802010d9dddad2c907"],["node_modules/ee-first/README.md","8591e9d47fb8574f4a99ac3de242b3cc"],["node_modules/ee-first/index.js","e7a3f46d4b903c9f8a025cb753b1a538"],["node_modules/ee-first/package.json","6f5af24204f797b7c1bd6765fe81507d"],["node_modules/encodeurl/HISTORY.md","6af548dfa20004d203a20ca28f0ded82"],["node_modules/encodeurl/README.md","927f12b955e3abfe907852d1ab957002"],["node_modules/encodeurl/index.js","b90cf71779f72e14be703a4e494e968c"],["node_modules/encodeurl/package.json","e1dab276602c2f55bac2b94027242b73"],["node_modules/escape-html/Readme.md","79c73d9ec4ca382fa642702f356b4046"],["node_modules/escape-html/index.js","0c95e46d0f08bd96b93cfbea66888afc"],["node_modules/escape-html/package.json","03123df9a50446a2345a23376df79ee0"],["node_modules/etag/HISTORY.md","959d386c253288fd5dd2dc4765efa273"],["node_modules/etag/README.md","89c2c0f9f52f551591bfc484e9e4a5bb"],["node_modules/etag/index.js","8eaca1927e67861a7682b7b2c0906ef1"],["node_modules/etag/package.json","9ff97f662c5fb723c38fd00c8127f93f"],["node_modules/express/History.md","7096ebc3aca3b6bb3b8a2f6766915631"],["node_modules/express/Readme.md","5012106533bf4472fcbaf4dc77912023"],["node_modules/express/index.js","866e37a4d9fb8799d5415d32ac413465"],["node_modules/express/lib/application.js","569b549e619807c5cd58ab89d7e81109"],["node_modules/express/lib/express.js","d467bc485eddf6d38278bc6b1dc16389"],["node_modules/express/lib/middleware/init.js","3711ae7ea348d39a41c5139a63e89c12"],["node_modules/express/lib/middleware/query.js","a6e9a6c92c5bfdd9d7b08b267a3b1d44"],["node_modules/express/lib/request.js","4f3a3b078531e551c6784f08a7ea02e4"],["node_modules/express/lib/response.js","b5a9b48bef9b072a350d0b8737d54bbf"],["node_modules/express/lib/router/index.js","c11694deadcecb691f6860a530cc7472"],["node_modules/express/lib/router/layer.js","c6e16965ef05cc02cfee78022496abab"],["node_modules/express/lib/router/route.js","be5fcf9a22c2524e813c9a79effb4610"],["node_modules/express/lib/utils.js","23899065325f9a3b0501bccc5231be8d"],["node_modules/express/lib/view.js","91c7455190f39cc30d0c5d4627d701fd"],["node_modules/express/node_modules/cookie/HISTORY.md","91a6932f361ba4272eb4c69bade2094a"],["node_modules/express/node_modules/cookie/README.md","116384f13856d5718b1d4313494dfda9"],["node_modules/express/node_modules/cookie/index.js","7c823649d28959ab6a327bb7a75251a6"],["node_modules/express/node_modules/cookie/package.json","3134361c42b4795711385b41109e9ddb"],["node_modules/express/package.json","6fdaa919fc206c3e907d861ee6da3f91"],["node_modules/finalhandler/HISTORY.md","307cefb319b745bc613eefb9efa80e5b"],["node_modules/finalhandler/README.md","8358f10f677962dbb488edd7d1019aa7"],["node_modules/finalhandler/index.js","a3444524d4b81aeec8b0be8b54cefd24"],["node_modules/finalhandler/package.json","ca475976a1d772baa52811a0fc5c89ba"],["node_modules/forwarded/HISTORY.md","3928ce4ac62e3040d60e43b7216e6305"],["node_modules/forwarded/README.md","0e968e9ff49393a7754106edf1735697"],["node_modules/forwarded/index.js","533f21ced73e5093ecccaf516a54eb0c"],["node_modules/forwarded/package.json","39e7023265381b7697957e7f46f36f66"],["node_modules/fresh/HISTORY.md","47e08786429a2f1a69b5d251e51a9d16"],["node_modules/fresh/README.md","2409eba75b77a1b1258045cd372b4b6e"],["node_modules/fresh/index.js","57dbafb6c310ce7063690f5688acedd5"],["node_modules/fresh/package.json","7fb4742f329644f65493b3f4a67338b5"],["node_modules/http-errors/HISTORY.md","54bff0d52f53f60163559b7b466172b5"],["node_modules/http-errors/README.md","ca084980372754c3b5251fd2172af981"],["node_modules/http-errors/index.js","1eb9f6e0a67d3a37f02d9f98cf9163cc"],["node_modules/http-errors/package.json","66f73d06b1e60c7ccd4462b1b3ae1908"],["node_modules/iconv-lite/Changelog.md","11f7c1fc239799ded47d06c8abd91b9b"],["node_modules/iconv-lite/README.md","011c8d9193893a9aa6ab12469e808399"],["node_modules/iconv-lite/encodings/dbcs-codec.js","6decbcdfe2ba5ed5c3a75466ce94cdfc"],["node_modules/iconv-lite/encodings/dbcs-data.js","e56d3d57df85dc818087254a8a16a699"],["node_modules/iconv-lite/encodings/index.js","7a13671a7fbc74c463377b3cda863503"],["node_modules/iconv-lite/encodings/internal.js","701b0858fb6fa82101365d81d7406f04"],["node_modules/iconv-lite/encodings/sbcs-codec.js","6f257833a4d930eaa9af9225faef16b8"],["node_modules/iconv-lite/encodings/sbcs-data-generated.js","78c27d9268d36644ac77b82b956f5b1f"],["node_modules/iconv-lite/encodings/sbcs-data.js","336be4eda323a03b88d06985f15c3524"],["node_modules/iconv-lite/encodings/tables/big5-added.json","f29eda07f68f9e3f234638d42956f9ab"],["node_modules/iconv-lite/encodings/tables/cp936.json","9eae47acf0b20461508fdc4506bd905e"],["node_modules/iconv-lite/encodings/tables/cp949.json","d99876b274d44fc737c8495ba36b3784"],["node_modules/iconv-lite/encodings/tables/cp950.json","15d09686ce9e9ba80b3014d3161e2e7e"],["node_modules/iconv-lite/encodings/tables/eucjp.json","98d5cf16fc6b791a0b2c829339766d16"],["node_modules/iconv-lite/encodings/tables/gb18030-ranges.json","4fbec8c88acbb1ef60a5aebf9e8e719b"],["node_modules/iconv-lite/encodings/tables/gbk-added.json","ef78bd5dab20daf8c2bb6c34e5b66bff"],["node_modules/iconv-lite/encodings/tables/shiftjis.json","6d542ffdf3409fd2e8bd01247777b6f7"],["node_modules/iconv-lite/encodings/utf16.js","7ad12158af65189b85796de64923f031"],["node_modules/iconv-lite/encodings/utf7.js","cf6746c76930fe21a716ef03d700b208"],["node_modules/iconv-lite/lib/bom-handling.js","7b3d4519f05bf0cc8d70a4d950c72c55"],["node_modules/iconv-lite/lib/extend-node.js","24ac97737522b61c26b830d350cfcaea"],["node_modules/iconv-lite/lib/index.d.ts","083c701ad23d900ab019a2e094158898"],["node_modules/iconv-lite/lib/index.js","c1da5b53fa60006bc973dc785bed2ca6"],["node_modules/iconv-lite/lib/streams.js","8628e41438801c5bfdabf3be9b1ff548"],["node_modules/iconv-lite/package.json","5b52dab91cba876dad49f2ca50c2fc1c"],["node_modules/inherits/README.md","de7eab94959b05c9765cad499ab092db"],["node_modules/inherits/inherits.js","09b210610125b162700734fb93dc892c"],["node_modules/inherits/inherits_browser.js","7c26fc24b695f2afbc284bbd5f64d6a4"],["node_modules/inherits/package.json","fccc1ee0455b736c3bc42c9a6cff8dab"],["node_modules/ipaddr.js/README.md","6ce8e8d38b633698f9663f48f6fb0446"],["node_modules/ipaddr.js/ipaddr.min.js","25cbb7a40252e3e2004437b72e1eaee5"],["node_modules/ipaddr.js/lib/ipaddr.js","faea7806284886c6c63a41c247008fbd"],["node_modules/ipaddr.js/lib/ipaddr.js.d.ts","605f86bbd05d5a46c5af1a4458df7f6c"],["node_modules/ipaddr.js/package.json","8d1407575a8843ab541a092458595619"],["node_modules/media-typer/HISTORY.md","370be51f8776b7e79b16228f7dc6762a"],["node_modules/media-typer/README.md","6e254e8ccc8ce7eaf9cdd8e5852d7bdf"],["node_modules/media-typer/index.js","ef1845377cbbf76edd411a370738ed2b"],["node_modules/media-typer/package.json","8e66755049acf267f0ed862fe649c5eb"],["node_modules/merge-descriptors/HISTORY.md","ed8bad35fde048c49302f3138bc4ec7b"],["node_modules/merge-descriptors/README.md","92a3bcc5f7e8a33de24b60bd6ca5c33f"],["node_modules/merge-descriptors/index.js","b4d3859e603602c87a45682862055af0"],["node_modules/merge-descriptors/package.json","2005d55387e9b967ffe2fb74ab1f2d7e"],["node_modules/methods/HISTORY.md","0355fb5e6662ffcdf19e5f736882f34d"],["node_modules/methods/README.md","882a4df2d7dc4b518fd3bb8c85e1c652"],["node_modules/methods/index.js","17d4a4ba378c1fd10dcfd061439f7ea0"],["node_modules/methods/package.json","098895f4c8c69e75a3e2245d31201462"],["node_modules/mime-db/HISTORY.md","fa688a4039879116a9eddba92d6fdd1f"],["node_modules/mime-db/README.md","967cedf8abcb0feda4490d59414e7f91"],["node_modules/mime-db/db.json","61efa4fd3ed5b4c65d7f71b2646cedd0"],["node_modules/mime-db/index.js","a3e41e93954b3742ed84d3050d6038cf"],["node_modules/mime-db/package.json","cacc52d5dc4a1104cbc15c7f05cf1a6a"],["node_modules/mime-types/HISTORY.md","e508ebf18d1511230257fcf6afe6a602"],["node_modules/mime-types/README.md","f6213260934d17eca002637e773dab41"],["node_modules/mime-types/index.js","bf015bb6811afc5c98e3e5f7072fdc79"],["node_modules/mime-types/package.json","9beb052b4ce75fd21718f17fb61b473b"],["node_modules/mime/CHANGELOG.md","90baac6a6f8d7e4a7dc0b15bb7a6ce65"],["node_modules/mime/README.md","72cfb57e293629e482629af74f4a92fd"],["node_modules/mime/cli.js","d028184965062ef86cdcfe246753ef27"],["node_modules/mime/mime.js","2930e6caad95dfad928d76fc1eb2e003"],["node_modules/mime/package.json","9df53ab2047f444ce97615ae9fc2a098"],["node_modules/mime/src/build.js","daf164e6d251c818b190db781f845776"],["node_modules/mime/src/test.js","e79c602593f0f279e1cb2d8d4a3ce3bf"],["node_modules/mime/types.json","4ac089e4f393ed139cb2ee55726c66a5"],["node_modules/ms/index.js","ae157c9a8e70902576c2d8a06dbcde32"],["node_modules/ms/license.md","fd56fd5f1860961dfa92d313167c37a6"],["node_modules/ms/package.json","ffde6bf2466bc0552c018cab46392e87"],["node_modules/ms/readme.md","90e631c6afccde3ed414d3d230734864"],["node_modules/negotiator/HISTORY.md","9286f41017a183d586addf8609bcb2bd"],["node_modules/negotiator/README.md","2b89b1a3e31c185b5cea428ebd5569d9"],["node_modules/negotiator/index.js","9ed619fb70c6bc360f3908dd90a79046"],["node_modules/negotiator/lib/charset.js","7977a65b1542fa8ce9650e58607f4b07"],["node_modules/negotiator/lib/encoding.js","e03dd226452c58ce083ab4468851f0b1"],["node_modules/negotiator/lib/language.js","4538455326d31cc086bb901f7e3b83fc"],["node_modules/negotiator/lib/mediaType.js","0fdaa0ed7cab2ce5fcbd7b361a85892c"],["node_modules/negotiator/package.json","0ea4408daca2c99d0899ec95e872c2b0"],["node_modules/node-gyp-build/README.md","15e2957e5711b4b9ec79c9c8fccf826e"],["node_modules/node-gyp-build/bin.js","b10a8e62725419a1636ebf2fd111cd79"],["node_modules/node-gyp-build/build-test.js","f1704e9ce6fddfea40ef4218c1b27215"],["node_modules/node-gyp-build/index.js","68bae0309bcc9d8ca79aa459b51f85f1"],["node_modules/node-gyp-build/optional.js","45f60a072ff4139cd00b0460e3b277a9"],["node_modules/node-gyp-build/package.json","f4aa89e2467711db6a7be33f80b9b1af"],["node_modules/on-finished/HISTORY.md","58ca467c6ca386064f1d5832c9c03b95"],["node_modules/on-finished/README.md","a3c532cc93a36f95dc4f19a0ecce50df"],["node_modules/on-finished/index.js","befdf51b0f78ec7b5e61fe648aa9df75"],["node_modules/on-finished/package.json","dbbec43864d89f61c730075a1f09f2ca"],["node_modules/parseurl/HISTORY.md","0f7f38fa8d79e3bf70557ef4a655d412"],["node_modules/parseurl/README.md","59555697a7f93937af7f76fe5326fa0d"],["node_modules/parseurl/index.js","3750351b6b1aa7f3e65d5499ea45006e"],["node_modules/parseurl/package.json","46cf510ade89c069d324ed8d0ce3922a"],["node_modules/path-to-regexp/History.md","9f6ae1a279c6994a01a2ec44294cb607"],["node_modules/path-to-regexp/Readme.md","ec68cdeaf09933d8bf7a962c261aed81"],["node_modules/path-to-regexp/index.js","cb184302e8d26369e9c0392fa4c8d0cb"],["node_modules/path-to-regexp/package.json","d5ff8ec2e98baadb698c9539cf77ae93"],["node_modules/proxy-addr/HISTORY.md","3d8a6431a9bb8c593eb5b991c3dc50a0"],["node_modules/proxy-addr/README.md","25a3eea3d57b45c4e33ff8605d469f89"],["node_modules/proxy-addr/index.js","597abc154d7d0ba415a4267e0250d7a5"],["node_modules/proxy-addr/package.json","a83cf1eb92ed2ba02fb02a583005bdfb"],["node_modules/qs/CHANGELOG.md","cccf4ef4f2c9ef63008645c88cb73f82"],["node_modules/qs/README.md","0b7348e09324003311fba7c55e710f3c"],["node_modules/qs/dist/qs.js","61970fed53534892319f5d11d9ea3281"],["node_modules/qs/lib/formats.js","547b7a8b6b81236db977dcd1a548c9e8"],["node_modules/qs/lib/index.js","1459a9952f6b500d24818bb6e3e37368"],["node_modules/qs/lib/parse.js","e8d7396234ffb4c2772844eb86e52ce5"],["node_modules/qs/lib/stringify.js","98adbcd903baa8d38e70aa4f7384fc9f"],["node_modules/qs/lib/utils.js","9231894a95b9eb149920c7711a1ba6ba"],["node_modules/qs/package.json","2ce51c5582496a26618134c456d4ca84"],["node_modules/qs/test/index.js","16c8338cc83b85a875270f50ac1e4ed6"],["node_modules/qs/test/parse.js","fe15b5909c82c908b1b92d89d9695aae"],["node_modules/qs/test/stringify.js","7270ccf1e92b2ecd35b92d526e12526b"],["node_modules/qs/test/utils.js","6a378244218f385cdd20d6dc3b49b567"],["node_modules/range-parser/HISTORY.md","6fdb98eb13b0d3dd31f0ff795be6a52b"],["node_modules/range-parser/README.md","f4b241a4d3c3eac1d542759d73164083"],["node_modules/range-parser/index.js","e72576333d27d1c9b3901c4b9e597f27"],["node_modules/range-parser/package.json","f7cadb7296ae56225ed514f6ecac987f"],["node_modules/raw-body/HISTORY.md","941e8b9351551d9635b1f58eed0ea138"],["node_modules/raw-body/README.md","f0bbd92a99e34ac64ba86f1853eec8e0"],["node_modules/raw-body/index.d.ts","ee9c2c994cbbc6d6e96d6460488ae4f1"],["node_modules/raw-body/index.js","baf003bb8c6c6fc1cffe0d4afe787e21"],["node_modules/raw-body/package.json","3383f72815af010182b781a00c985967"],["node_modules/safe-buffer/README.md","570381ffb15269fa623a0b75e67eb63a"],["node_modules/safe-buffer/index.d.ts","372fa012d04e945ab97c27e000f8df78"],["node_modules/safe-buffer/index.js","b1622ff2944ba3f13a1cf6fbcf0f9e3f"],["node_modules/safe-buffer/package.json","0d695b3c00dada6c3f004d0387686436"],["node_modules/safer-buffer/Porting-Buffer.md","fcaa030e67b1d41e34571b602a343f72"],["node_modules/safer-buffer/Readme.md","b65f4b9724ff4c546ee7d4820e3c91dc"],["node_modules/safer-buffer/dangerous.js","7557e84f2db56a79916613053f9297d6"],["node_modules/safer-buffer/package.json","3ff0bafb27494b40fdd501725e586151"],["node_modules/safer-buffer/safer.js","b548fa7365e81d472250949a6b4ccc69"],["node_modules/safer-buffer/tests.js","373f9327325c35bb109038dc3b8e5a14"],["node_modules/send/HISTORY.md","4f5680a2dbc10cfc2dd07af3169bf474"],["node_modules/send/README.md","5793eb6b10ef0df065e01c8a0e5c35ba"],["node_modules/send/index.js","edf8ff5c77445e2bd6e21cfa4bf6deab"],["node_modules/send/node_modules/ms/index.js","52620b13382ca384cbe89011c4b16460"],["node_modules/send/node_modules/ms/license.md","fd56fd5f1860961dfa92d313167c37a6"],["node_modules/send/node_modules/ms/package.json","227850c199f50460034acf6fa4332d25"],["node_modules/send/node_modules/ms/readme.md","b68b70253368a0c383cd67171269fb00"],["node_modules/send/package.json","010468800506bb36b73d965970b3d318"],["node_modules/serve-static/HISTORY.md","42a409931684070e79db555331ce7178"],["node_modules/serve-static/README.md","82cd51b8e01130ac88fe4cd9c9ea972d"],["node_modules/serve-static/index.js","3707f8d6ee2c6d88ffab23c0c4f1509b"],["node_modules/serve-static/package.json","a1f74b4177e950fc8fb548760fd50e03"],["node_modules/setprototypeof/README.md","5fffc64ea56408057a5ccd7f84f8b050"],["node_modules/setprototypeof/index.d.ts","9b4107177bcdb4f9438d31bf446f629f"],["node_modules/setprototypeof/index.js","dd15d377665805ff7251e0a0f52fb837"],["node_modules/setprototypeof/package.json","efd7a28dfd1a6b32298a7b0989edd80b"],["node_modules/setprototypeof/test/index.js","057b874f30e15981324966ff9294dbe5"],["node_modules/statuses/HISTORY.md","59a03d6bdd1d4de4888fae4450f8bd61"],["node_modules/statuses/README.md","b24bdc13faa92fbcf1fe2cf6a63d098a"],["node_modules/statuses/codes.json","24a60aa6f42d759204b75dc8ecc0ecf4"],["node_modules/statuses/index.js","93ef82ab57885976022f1b594741dc19"],["node_modules/statuses/package.json","25ce02aedd54309a5052f372a06e220a"],["node_modules/toidentifier/README.md","fd789409142ed442ccec71e57b173376"],["node_modules/toidentifier/index.js","279de9b706fd68a63d92cb4bc364c772"],["node_modules/toidentifier/package.json","514e429b5b8c87db26b00ff5b1de8660"],["node_modules/type-is/HISTORY.md","6025a974d281159ed5421301b58fd126"],["node_modules/type-is/README.md","2683527a9b2faadd364a0eab9cc00935"],["node_modules/type-is/index.js","f9aa3afdc332adae59aa21d31090582d"],["node_modules/type-is/package.json","dc450130d3fc1129729e9db1bd5db71a"],["node_modules/unpipe/HISTORY.md","3e523df8ac60d8c162c57521955bda8c"],["node_modules/unpipe/README.md","b242ac151ac9750bf7ca20fe02dcf7b0"],["node_modules/unpipe/index.js","377f0c4bddbbd7e73b32a53e687df342"],["node_modules/unpipe/package.json","b55d666539eee093e619b0c9c981d759"],["node_modules/utf-8-validate/README.md","a146bd101fa69fc146fb055344a2d682"],["node_modules/utf-8-validate/binding.gyp","ad907a99166d743d2c24fb5054cd19a5"],["node_modules/utf-8-validate/fallback.js","3a4e1ddd6a5efa9345c4b406e1ecc770"],["node_modules/utf-8-validate/index.js","4ce2ef7ae60266e7ee9f8a4078117193"],["node_modules/utf-8-validate/package.json","4f408ccaa32d719d635983a621017e90"],["node_modules/utf-8-validate/prebuilds/darwin-x64/electron-napi.node","ac25e9a3b98167591b725fe927bce739"],["node_modules/utf-8-validate/prebuilds/darwin-x64/node-napi.node","1898fe34cda3798e675411f46ef1d74f"],["node_modules/utf-8-validate/prebuilds/linux-x64/electron-napi.node","1ef39afa416572cfbd8ef23ea3ceb37c"],["node_modules/utf-8-validate/prebuilds/linux-x64/node-napi.node","1ef39afa416572cfbd8ef23ea3ceb37c"],["node_modules/utf-8-validate/prebuilds/win32-ia32/electron-napi.node","ada005c893d2d10c0600990fe582279f"],["node_modules/utf-8-validate/prebuilds/win32-ia32/node-napi.node","62735d295052b786c80573fdc008b5f5"],["node_modules/utf-8-validate/prebuilds/win32-x64/electron-napi.node","9705e0c25e3e96e5a1de96d3ca8943dd"],["node_modules/utf-8-validate/prebuilds/win32-x64/node-napi.node","1763e64beab5fd55f43862cc0189a74e"],["node_modules/utf-8-validate/src/validation.c","b0763ee7e981b168bfa8ed2e99291b69"],["node_modules/utils-merge/README.md","9e6a49a7623199d699f595777116296f"],["node_modules/utils-merge/index.js","20d03f8bf4486091c44f17a97cbb6c24"],["node_modules/utils-merge/package.json","4bee028085fb83f0ca81f91ed1e99909"],["node_modules/vary/HISTORY.md","01fb6033779e4f75d95e327672ebd572"],["node_modules/vary/README.md","d7add56e89e476e09f62ad4a926f1f7a"],["node_modules/vary/index.js","8217c2d942ee5bf6866c92662515d975"],["node_modules/vary/package.json","eb3e6e1618663526b3b2504ee908d6c5"],["node_modules/ws/README.md","0eaa2a02635a3f8f424b676f77f3c62b"],["node_modules/ws/browser.js","037c5687e3112b6a4632d030675a082e"],["node_modules/ws/index.js","c4496645a3cadf59790b9a7749e5ad21"],["node_modules/ws/lib/buffer-util.js","9d05b569cdf17513fcd89d2d831c48b5"],["node_modules/ws/lib/constants.js","9f6cd33d0d1d7945e8b34b4a9d18ad46"],["node_modules/ws/lib/event-target.js","f94546fd5a1604138d7d4e8e5d0d7216"],["node_modules/ws/lib/extension.js","ba3602395024803c5cc3a285097bcc21"],["node_modules/ws/lib/permessage-deflate.js","758c66cda5b6139637abd56e998c68b0"],["node_modules/ws/lib/receiver.js","897e3c8de2287d183f19e3f43f6ef200"],["node_modules/ws/lib/sender.js","01f916a9c33ca58cb63d02431a8cf13a"],["node_modules/ws/lib/stream.js","006257954972e29bf583d65d3a6c3fd6"],["node_modules/ws/lib/validation.js","42d0aa3ccef7b8a8c1cc6467c15e8e85"],["node_modules/ws/lib/websocket-server.js","b089f9a40e9cbd8a71148487ee69f3b1"],["node_modules/ws/lib/websocket.js","192e18254ba35ba37eef21bbd8cd71ef"],["node_modules/ws/package.json","399ea05676a793d6a32f869232edad75"],["package-lock.json","87ef2736f334f408d86ce1325fdfabbc"],["package.json","0fc939ed53b37b42bc4baa47f53ae068"],["script.js","f828106b7046474a2f1669ca6387fc74"],["server.js","fb58fbf7b05e26670c2b845956248032"],["style.css","c93f1c9783c15c5ccbf1c2d81367727f"],["ws.js","92d7ce107417a71b64ee15720da41be6"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







