<template>
  <i-container class="_margin-y-lg-2 _margin-y-xs-2 communityOwned">
    <div class="topBlock _padding-bottom-2">
      <div class="h2 _padding-top-1">
        Owned by the community
      </div>
      <div class="grayText _margin-top-2 _margin-bottom-0">
        <div class="_margin-bottom-0 _display-flex _align-items-center _justify-content-center">
          <emphasis />
          <span>&nbsp;is 100%&nbsp;</span>
          <z-cta href="https://github.com/matter-labs/zksync" style="margin-top: -3px">
            <v-icon name="bi-github" class="githubInline" />
            open source
          </z-cta>
        </div>
      </div>
    </div>
    <div class="bottomBlock">
      <div class="h2 _padding-top-1">
        Get involved
      </div>
      <div class="grayText _zk-font-18">
        Take part in the community discussions and don’t miss important updates
      </div>
      <block-social-block class="_margin-y-lg-2 _margin-y-xs-1" location="footer" />
      <block-newsletter />
      <a id="community" />
    </div>
  </i-container>
</template>
