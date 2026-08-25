{%- set _mod_docs_content_type = "REFERENCE" %}
# Criteria for user-defined labels and tags {id="installing-gcp-cluster-label-tag-reference_{{ context }}"}

Before configuring user-defined labels and tags for {{ gcp_full }}, consider the importance of meeting the requirements for these tag and labels to ensure proper resource governance.

The following list details the requirements for user-defined labels:

*   A label key and value must have a minimum of 1 character and can have a maximum of 63 characters.
*   A label key and value must contain only lowercase letters, numeric characters, an underscore (`_`), and a dash (`-`).
*   A label key must start with a lowercase letter.
*   You can configure a maximum of 32 labels per resource. 
    *   Each resource has a maximum of 64 labels, where {{ product_title }} reserves 32 labels for internal use.

The following list details the requirements for user-defined tags:

*   Tag key and tag value must already exist. {{ product_title }} does not create the key and the value.
*   A tag `parentID` can be either `OrganizationID` or `ProjectID`:
    *   `OrganizationID` must consist of decimal numbers without leading zeros.
    *   `ProjectID` must be 6 to 30 characters in length, that includes only lowercase letters, numbers, and hyphens.
    *   `ProjectID` must start with a letter, and cannot end with a hyphen.
*   A tag key must contain only uppercase and lowercase alphanumeric characters, a hyphen (`-`), an underscore (`_`), and a period (`.`).
*   A tag value must contain only uppercase and lowercase alphanumeric characters and any of the following characters:
    *   A colon (`:`)
    *   A comma (`,`)
    *   A curly braces (`{}`)
    *   A hyphen (`-`)
    *   A parentheses (`()`)
    *   A percent sign (`%`)
    *   A plus (`+`)
    *   A pound sign (`$`)
    *   A space.
    *   A square braces (`[]`)
    *   An ampersand (`&`)
    *   An asterisk (`*`)
    *   An at sign (`@`)
    *   An equals sign (`=`)
    *   An underscore (`_`)
    *   A period (`.`)
*   A tag key and value must begin and end with an alphanumeric character.
*   Tag value must be one of the predefined values for the key.
*   You can configure a maximum of 50 tags.
*   Do not define a tag key with the same value as any of the existing tag keys that get inherited from the parent resource.