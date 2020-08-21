/**
 * @file insertMetaTags
 * Function to insert meta information into the head of a page
 */

import { RouteLocationNormalized } from 'vue-router';

/**
 * Update the page title
 */
const updateTitle = ( metaInfo: RouteLocationNormalized ): void => {
  if ( metaInfo.meta.title != null ) {
    document.title = metaInfo.meta.title;
  }
};

/**
 * Insert meta tags into the head of the page
 */
const insertMetaTags = ( metaInfo: RouteLocationNormalized ): void => {
  if ( metaInfo.meta.metaInfo != null ) {
    const { metaTags } = metaInfo.meta;

    metaTags
      .map( ( tag ) => {
        const el = document.createElement( 'meta' );

        Object.keys( tag ).forEach( ( key ) => {
          el.setAttribute( key, tag[ key ] );
        } );

        return el;
      } )
      .forEach( ( el ) => document.head.appendChild( el ) );
  }
}

export {
  updateTitle,
  insertMetaTags
};
