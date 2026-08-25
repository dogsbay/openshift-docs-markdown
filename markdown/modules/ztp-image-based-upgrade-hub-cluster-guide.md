{%- set _mod_docs_content_type = "CONCEPT" %}
# Hub cluster guidelines {id="ztp-image-based-upgrade-hub-cluster-guide_{{ context }}"}

When using {{ rh_rhacm }}, the hub cluster must meet specific conditions including disabling optional add-ons and upgrading to at least the target version. {._abstract}

If you are using {{ rh_rhacm_first }}, your hub cluster needs to meet the following conditions:

*   To avoid including any {{ rh_rhacm }} resources in your seed image, you need to disable all optional {{ rh_rhacm }} add-ons before generating the seed image.
*   Your hub cluster must be upgraded to at least the target version before performing an image-based upgrade on a target {{ sno }} cluster.