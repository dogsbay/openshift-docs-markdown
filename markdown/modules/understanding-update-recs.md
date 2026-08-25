{%- set _mod_docs_content_type = "CONCEPT" %}
# Update recommendations in the channel {id="upgrade-version-paths_{{ context }}"}

{{ product_title }} maintains an update recommendation service that knows your installed {{ product_title }} version and the path to take within the channel to get you to the next release. {._abstract}

Update paths are also limited to versions relevant to your currently selected channel and its promotion characteristics.

You can imagine seeing the following releases in your channel:

*   {{ product_version }}.0
*   {{ product_version }}.1
*   {{ product_version }}.3
*   {{ product_version }}.4

The service recommends only updates that have been tested and have no known serious regressions. For example, if your cluster is on {{ product_version }}.1 and {{ product_title }} suggests {{ product_version }}.4, then it is recommended to update from {{ product_version }}.1 to {{ product_version }}.4.


:::important

Do not rely on consecutive patch numbers. In this example, {{ product_version }}.2 is not and never was available in the channel, therefore updates to {{ product_version }}.2 are not recommended or supported.

:::