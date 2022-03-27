// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

//Add schama form page folder
import { page, post, author, category } from "./all-pages"
import {
  header,
  metadata,
  navigation,
  navItem,
  footer,
  footerSocial,
} from "./common"

// Page builder
import { pageBuilder, callToAction, ourGallery } from "./page-builder"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // dashboard
    header,
    navigation,
    navItem,
    page,
    post,
    author,
    category,
    footer,
    footerSocial,

    // extra
    metadata,

    // pageBuilder
    pageBuilder,
    callToAction,
    ourGallery,
  ]),
})
