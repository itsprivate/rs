import React from "react";
import { Trans } from "react-i18next";
import { Link as LinkUI } from "theme-ui";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      <Trans>
        See popular discussions in foreign stock communities in your native
        language on{" "}
        <LinkUI as={Link} to="/">
          stocks.buzzing.cc
        </LinkUI>
      </Trans>
    </>
  );
}
