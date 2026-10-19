{%- set _mod_docs_content_type = "CONCEPT" %}
# DNS management requirements for Gateway API {id="gateway-api-dns-management_{{ context }}"}

The Ingress Operator manages DNS records for Gateway API resources when deployed in the `openshift-ingress` namespace. This automatic management applies only when specific namespace and domain conditions are met. {._abstract}

The Ingress Operator creates DNS records from hostnames specified in `spec.listeners[*].hostname` on the `Gateway` resource. The Operator does not create DNS records from hostnames specified only on route resources. Listeners without a hostname do not receive an automatically managed DNS record.

To enable automatic DNS record creation and lifecycle management for Gateway API resources, ensure you meet the following criteria:

*   You ensured that the cluster DNS configuration defines at least one managed public or private DNS zone.
*   You created the `Gateway` custom resource (CR) in the `openshift-ingress` namespace.
*   You ensured that the listener hostnames must fall under the cluster base domain. To inspect the base domain of your cluster, enter the following command:
    ```terminal
    $ oc get dns.config.openshift.io cluster -o jsonpath='{.spec.baseDomain}'
    ```
*   You ensured that another Gateway does not use the listener hostname; otherwise, the Gateway reports `DNSReady=False` and does not publish a DNS record.

If you create the `Gateway` object in any other namespace, note the following limitations:

*   The Ingress Operator does not provision or manage DNS records for the Gateway.
*   You must manually configure and manage DNS records for all hostnames associated with that Gateway.