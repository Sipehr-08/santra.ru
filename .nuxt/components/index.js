export const Accordionhorizontal = () => import('../../components/accordionhorizontal.vue' /* webpackChunkName: "components/accordionhorizontal" */).then(c => wrapFunctional(c.default || c))
export const Accordionitem = () => import('../../components/accordionitem.vue' /* webpackChunkName: "components/accordionitem" */).then(c => wrapFunctional(c.default || c))
export const Individual = () => import('../../components/individual.vue' /* webpackChunkName: "components/individual" */).then(c => wrapFunctional(c.default || c))
export const Input = () => import('../../components/input.vue' /* webpackChunkName: "components/input" */).then(c => wrapFunctional(c.default || c))
export const ProductCard = () => import('../../components/product-card.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
export const LayoutFooter = () => import('../../components/layout/footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => wrapFunctional(c.default || c))
export const LayoutHeader = () => import('../../components/layout/header.vue' /* webpackChunkName: "components/layout-header" */).then(c => wrapFunctional(c.default || c))
export const LayoutHeaderform = () => import('../../components/layout/headerform.vue' /* webpackChunkName: "components/layout-headerform" */).then(c => wrapFunctional(c.default || c))
export const LayoutReviews = () => import('../../components/layout/reviews.vue' /* webpackChunkName: "components/layout-reviews" */).then(c => wrapFunctional(c.default || c))
export const LayoutReviewsBiz = () => import('../../components/layout/reviewsBiz.vue' /* webpackChunkName: "components/layout-reviews-biz" */).then(c => wrapFunctional(c.default || c))
export const LayoutTopLine = () => import('../../components/layout/top-line.vue' /* webpackChunkName: "components/layout-top-line" */).then(c => wrapFunctional(c.default || c))
export const SlidersAppGallerySlider = () => import('../../components/sliders/AppGallerySlider.vue' /* webpackChunkName: "components/sliders-app-gallery-slider" */).then(c => wrapFunctional(c.default || c))
export const SaleSalesModal = () => import('../../components/sale/SalesModal.vue' /* webpackChunkName: "components/sale-sales-modal" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
