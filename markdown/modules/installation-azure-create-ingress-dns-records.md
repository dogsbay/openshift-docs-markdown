{% if context == "installing-azure-user-infra" %}
{%- set cp = "Azure" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{%- set cp = "Azure Stack Hub" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set cp = "Azure" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding the Ingress DNS records {id="installation-azure-create-ingress-dns-records_{{ context }}"}

If you removed the DNS Zone configuration when creating Kubernetes manifests and generating Ignition configs, you must manually create DNS records that point at the Ingress load balancer. You can create either a wildcard `*.apps.{{ baseDomain }}.` or specific records. {._abstract}

You can use A, CNAME, and other
records per your requirements.

**Prerequisites**

*   You deployed an {{ product_title }} cluster on Microsoft {{ cp }} by using infrastructure that you provisioned.
*   Install the OpenShift CLI (`oc`).
*   Install or update the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-yum?view=azure-cli-latest).

**Procedure**

1.  Confirm the Ingress router has created a load balancer and populated the
`EXTERNAL-IP` field:
    ```terminal
    $ oc -n openshift-ingress get service router-default
    ```
    ```terminal title="Example output"
    NAME             TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
    router-default   LoadBalancer   172.30.20.10   35.130.120.110   80:32288/TCP,443:31215/TCP   20
    ```
1.  Export the Ingress router IP as a variable:
    ```terminal
    $ export PUBLIC_IP_ROUTER=`oc -n openshift-ingress get service router-default --no-headers | awk '{print $4}'`
    ```
{%- if not ash %}
1.  Add a `*.apps` record to the public DNS zone.
    1.  If you are adding this cluster to a new public zone, run:
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z ${CLUSTER_NAME}.${BASE_DOMAIN} -n *.apps -a ${PUBLIC_IP_ROUTER} --ttl 300
        ```
    1.  If you are adding this cluster to an already existing public zone, run:
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z ${BASE_DOMAIN} -n *.apps.${CLUSTER_NAME} -a ${PUBLIC_IP_ROUTER} --ttl 300
        ```
{% endif %}
{% if ash %}
1.  Add a `*.apps` record to the DNS zone.
    1.  If you are adding this cluster to a new DNS zone, run:
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z ${CLUSTER_NAME}.${BASE_DOMAIN} -n *.apps -a ${PUBLIC_IP_ROUTER} --ttl 300
        ```
    1.  If you are adding this cluster to an already existing DNS zone, run:
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z ${BASE_DOMAIN} -n *.apps.${CLUSTER_NAME} -a ${PUBLIC_IP_ROUTER} --ttl 300
        ```
{% endif %}

{% if not ash %}
1.  Add a `*.apps` record to the private DNS zone:
    1.  Create a `*.apps` record by using the following command:
        ```terminal
        $ az network private-dns record-set a create -g ${RESOURCE_GROUP} -z ${CLUSTER_NAME}.${BASE_DOMAIN} -n *.apps --ttl 300
        ```
    1.  Add the `*.apps` record to the private DNS zone by using the following command:
        ```terminal
        $ az network private-dns record-set a add-record -g ${RESOURCE_GROUP} -z ${CLUSTER_NAME}.${BASE_DOMAIN} -n *.apps -a ${PUBLIC_IP_ROUTER}
        ```
{%- endif %}

If you prefer to add explicit domains instead of using a wildcard, you can
create entries for each of the cluster’s current routes:

```terminal
$ oc get --all-namespaces -o jsonpath='{range .items[*]}{range .status.ingress[*]}{.host}{"\n"}{end}{end}' routes
```

.Example output
```terminal
oauth-openshift.apps.cluster.basedomain.com
console-openshift-console.apps.cluster.basedomain.com
downloads-openshift-console.apps.cluster.basedomain.com
alertmanager-main-openshift-monitoring.apps.cluster.basedomain.com
prometheus-k8s-openshift-monitoring.apps.cluster.basedomain.com
```

{% if context == "installing-azure-user-infra" %}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{% endif %}