{%- set _mod_docs_content_type = "REFERENCE" %}
# Elasticsearch cluster status {id="ref_cluster-logging-elasticsearch-cluster-status_{{ context }}"}

A dashboard in the **Observe** section of the 
{%- if not (openshift_rosa or openshift_dedicated) %}
{{ product_title }} web console 
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
{{ cluster_manager_url }} 
{%- endif %}
displays the status of the Elasticsearch cluster. {._abstract}

To get the status of the OpenShift Elasticsearch cluster, visit the dashboard in the **Observe** section of the  
{%- if not (openshift_rosa or openshift_dedicated) %}
{{ product_title }} web console 
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
{{ cluster_manager_url }} 
{%- endif %}
at
`<cluster_url>/monitoring/dashboards/grafana-dashboard-cluster-logging`.


`eo_elasticsearch_cr_cluster_management_state`
:   Shows whether the Elasticsearch cluster is in a managed or unmanaged state. For example:
    ```terminal title="Elasticsearch status fields"
    eo_elasticsearch_cr_cluster_management_state{state="managed"} 1
    eo_elasticsearch_cr_cluster_management_state{state="unmanaged"} 0
    ```


`eo_elasticsearch_cr_restart_total`
:   Shows the number of times the Elasticsearch nodes have restarted for certificate restarts, rolling restarts, or scheduled restarts. For example:
    ```terminal
    eo_elasticsearch_cr_restart_total{reason="cert_restart"} 1
    eo_elasticsearch_cr_restart_total{reason="rolling_restart"} 1
    eo_elasticsearch_cr_restart_total{reason="scheduled_restart"} 3
    ```


`es_index_namespaces_total`
:   Shows the total number of Elasticsearch index namespaces. For example:
    ```terminal
    Total number of Namespaces.
    es_index_namespaces_total 5
    ```


`es_index_document_count`
:   Shows the number of records for each namespace. For example:
    ```terminal
    es_index_document_count{namespace="namespace_1"} 25
    es_index_document_count{namespace="namespace_2"} 10
    es_index_document_count{namespace="namespace_3"} 5
    ```

**The "Secret Elasticsearch fields are either missing or empty" message**

If Elasticsearch is missing the `admin-cert`, `admin-key`, `logging-es.crt`, or `logging-es.key` files, the dashboard shows a status message similar to the following example:

```terminal
message": "Secret \"elasticsearch\" fields are either missing or empty: [admin-cert, admin-key, logging-es.crt, logging-es.key]",
"reason": "Missing Required Secrets",
```