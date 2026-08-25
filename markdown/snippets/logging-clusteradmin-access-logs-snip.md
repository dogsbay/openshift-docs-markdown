{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

Querying application logs for multiple namespaces as a `cluster-admin` user, where the sum total of characters of all of the namespaces in the cluster is greater than 5120, results in the error `Parse error: input size too long (XXXX > 5120)`. For better control over access to logs in LokiStack, make the `cluster-admin` user a member of the `cluster-admin` group. If the `cluster-admin` group does not exist, create it and add the desired users to it.

:::