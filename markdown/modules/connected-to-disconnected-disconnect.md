{%- set _mod_docs_content_type = "CONCEPT" %}
# Disconnect the cluster from the network {id="connected-to-disconnected-disconnect_{{ context }}"}

After mirroring all the required repositories and configuring your cluster to work as a disconnected cluster, you can disconnect the cluster from the network. {._abstract}


:::note

The {{ insights_operator }} is degraded when the cluster loses its Internet connection. You can avoid this problem by temporarily disabling the {{ insights_operator }} until you can restore it. For more information, see "Disabling the {{ insights_operator }}".

:::