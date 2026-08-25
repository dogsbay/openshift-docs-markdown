{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring DNS for on-premise gateways {id="configuring-dns-on-premise-gateways_{{ context }}"}

Configure DNS records manually on on-premise environments to ensure clients can reliably resolve your gateway. {._abstract}

Although the Ingress Operator automatically creates a `DNSRecord` custom resource (CR) using the hostname from the listener, this record is marked as "unmanaged" on on-premise platforms because the cluster Ingress Operator does not implement on-premise DNS providers. You must manually configure DNS records to point to the IP address of your load balancer.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.
*   You have configured a load balancer controller, such as MetalLB, for your cluster. 
*   Your gateway has been assigned an external network address by the load balancer.
*   Your gateway is located in the `openshift-ingress` namespace.

**Procedure**

1.  Retrieve the external IP address assigned to your gateway by the load balancer by running the following command:
    ```terminal
    $ oc -n openshift-ingress get gateway <gateway_name>
    ```

    Note the IP address listed in the `ADDRESS` column.
1.  Access your organization’s DNS provider or server.
1.  Create a DNS record, such as an A record or wildcard A record, that maps the listener’s hostname to the external IP address of your gateway.