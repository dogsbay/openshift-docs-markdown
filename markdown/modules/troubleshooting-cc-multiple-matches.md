{%- set _mod_docs_content_type = "PROCEDURE" %}

# Troubleshooting multiple template matches for the same CR {id="troubleshooting-cc-multiple-matches_{{ context }}"}

In some cases, more than one cluster CR can match a template because they feature the same `apiVersion`, `namespace`, and `kind`. The plugin’s default matching compares the CR that features the least differences. {._abstract}

You can optionally configure your reference configuration to avoid this situation.

**Procedure**

1.  Ensure the templates feature distinct `apiVersion`, `namespace`, and `kind` values to ensure no duplicate template matching.
1.  Use a user configuration file to manually match a template to a CR. For more information, see "Configuring manual matching between CRs and templates".