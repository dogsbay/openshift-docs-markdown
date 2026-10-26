{%- set _mod_docs_content_type = "CONCEPT" %}
# Update a cluster to {{ product_title }} 5.0 {id="update-from-4-x-to-5-x-intro_{{ context }}"}

You can update your cluster to {{ product_title }} 5.0 using any of the methods available for minor version updates. {._abstract}

Updating an {{ product_title }} cluster from a 4.x release to version 5.0 is an in-place update.
The process is functionally identical to a minor version update, such as updating from 4.16 to 4.17, and does not require a cluster rebuild or manual data migration.

Updates to version 5.0 are available on the `stable-5.0` and `candidate-5.0` channels.


:::important

For production clusters, you must subscribe to a `stable-\*`, `eus-*`, or `fast-*` channel.

:::