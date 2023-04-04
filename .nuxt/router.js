import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e8992fa = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _25b99b21 = () => interopDefault(import('../pages/autobrands/index.vue' /* webpackChunkName: "pages/autobrands/index" */))
const _4cfe7c06 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _7eb7e249 = () => interopDefault(import('../pages/catalog/index.vue' /* webpackChunkName: "pages/catalog/index" */))
const _17b7bb05 = () => interopDefault(import('../pages/certify.vue' /* webpackChunkName: "pages/certify" */))
const _5041a5d2 = () => interopDefault(import('../pages/delivery.vue' /* webpackChunkName: "pages/delivery" */))
const _2261faff = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _39727fc5 = () => interopDefault(import('../pages/guest.vue' /* webpackChunkName: "pages/guest" */))
const _8c28cb64 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _b413499e = () => interopDefault(import('../pages/partnership.vue' /* webpackChunkName: "pages/partnership" */))
const _8200e3d6 = () => interopDefault(import('../pages/policy.vue' /* webpackChunkName: "pages/policy" */))
const _7f4debe0 = () => interopDefault(import('../pages/rebuy.vue' /* webpackChunkName: "pages/rebuy" */))
const _bfa1252c = () => interopDefault(import('../pages/sale.vue' /* webpackChunkName: "pages/sale" */))
const _21dd01b5 = () => interopDefault(import('../pages/blog/mainBlog.vue' /* webpackChunkName: "pages/blog/mainBlog" */))
const _6f66ab6c = () => interopDefault(import('../pages/cart/receipt.vue' /* webpackChunkName: "pages/cart/receipt" */))
const _0213f155 = () => interopDefault(import('../pages/contacts/mainContacts.vue' /* webpackChunkName: "pages/contacts/mainContacts" */))
const _67c86adb = () => interopDefault(import('../pages/autobrands/auto/_id.vue' /* webpackChunkName: "pages/autobrands/auto/_id" */))
const _80f41c6e = () => interopDefault(import('../pages/autobrands/_id.vue' /* webpackChunkName: "pages/autobrands/_id" */))
const _71b3da70 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _186c4af6 = () => interopDefault(import('../pages/cantra-products/_id.vue' /* webpackChunkName: "pages/cantra-products/_id" */))
const _6442c093 = () => interopDefault(import('../pages/catalog/_type/index.vue' /* webpackChunkName: "pages/catalog/_type/index" */))
const _267e8ca1 = () => interopDefault(import('../pages/contacts/_id.vue' /* webpackChunkName: "pages/contacts/_id" */))
const _3e416dbf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1e8992fa,
    name: "about"
  }, {
    path: "/autobrands",
    component: _25b99b21,
    name: "autobrands"
  }, {
    path: "/cart",
    component: _4cfe7c06,
    name: "cart"
  }, {
    path: "/catalog",
    component: _7eb7e249,
    name: "catalog"
  }, {
    path: "/certify",
    component: _17b7bb05,
    name: "certify"
  }, {
    path: "/delivery",
    component: _5041a5d2,
    name: "delivery"
  }, {
    path: "/gallery",
    component: _2261faff,
    name: "gallery"
  }, {
    path: "/guest",
    component: _39727fc5,
    name: "guest"
  }, {
    path: "/partners",
    component: _8c28cb64,
    name: "partners"
  }, {
    path: "/partnership",
    component: _b413499e,
    name: "partnership"
  }, {
    path: "/policy",
    component: _8200e3d6,
    name: "policy"
  }, {
    path: "/rebuy",
    component: _7f4debe0,
    name: "rebuy"
  }, {
    path: "/sale",
    component: _bfa1252c,
    name: "sale"
  }, {
    path: "/blog/mainBlog",
    component: _21dd01b5,
    name: "blog-mainBlog"
  }, {
    path: "/cart/receipt",
    component: _6f66ab6c,
    name: "cart-receipt"
  }, {
    path: "/contacts/mainContacts",
    component: _0213f155,
    name: "contacts-mainContacts"
  }, {
    path: "/autobrands/auto/:id?",
    component: _67c86adb,
    name: "autobrands-auto-id"
  }, {
    path: "/autobrands/:id",
    component: _80f41c6e,
    name: "autobrands-id"
  }, {
    path: "/blog/:id?",
    component: _71b3da70,
    name: "blog-id"
  }, {
    path: "/cantra-products/:id?",
    component: _186c4af6,
    name: "cantra-products-id"
  }, {
    path: "/catalog/:type",
    component: _6442c093,
    name: "catalog-type"
  }, {
    path: "/contacts/:id?",
    component: _267e8ca1,
    name: "contacts-id"
  }, {
    path: "/",
    component: _3e416dbf,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
