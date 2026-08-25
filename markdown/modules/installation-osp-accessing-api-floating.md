{% if context == "installing-openstack-user" %}
{%- set osp_user = true -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_user = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling access with floating IP addresses {id="installation-osp-accessing-api-floating_{{ context }}"}

Create floating IP (FIP) addresses for external access to the {{ product_title }}
{%- if osp_user %}
API, cluster applications, and the bootstrap process.
{%- endif %}
{%- if not osp_user %}
API and cluster applications. {._abstract}
{%- endif %}

**Procedure**

1.  Using the {{ rh_openstack_first }} CLI, create the API FIP:
    ```terminal
    $ openstack floating ip create --description "API <cluster_name>.<base_domain>" <external_network>
    ```
1.  Using the {{ rh_openstack_first }} CLI, create the apps, or Ingress, FIP:
    ```terminal
    $ openstack floating ip create --description "Ingress <cluster_name>.<base_domain>" <external_network>
    ```

{% if osp_user %}
1.  By using the {{ rh_openstack_first }} CLI, create the bootstrap FIP:
    ```terminal
    $ openstack floating ip create --description "bootstrap machine" <external_network>
    ```
{% endif %}
1.  Add records that follow these patterns to your DNS server for the API and Ingress FIPs:
    ```dns
    api.<cluster_name>.<base_domain>.  IN  A  <API_FIP>
    *.apps.<cluster_name>.<base_domain>. IN  A <apps_FIP>
    ```

    :::note

    If you do not control the DNS server, you can access the cluster by adding the cluster domain names such as the following to your `/etc/hosts` file:

    *   `<api_floating_ip> api.<cluster_name>.<base_domain>`
    *   `<application_floating_ip> grafana-openshift-monitoring.apps.<cluster_name>.<base_domain>`
    *   `<application_floating_ip> prometheus-k8s-openshift-monitoring.apps.<cluster_name>.<base_domain>`
    *   `<application_floating_ip> oauth-openshift.apps.<cluster_name>.<base_domain>`
    *   `<application_floating_ip> console-openshift-console.apps.<cluster_name>.<base_domain>`
    *   `application_floating_ip integrated-oauth-server-openshift-authentication.apps.<cluster_name>.<base_domain>`

    The cluster domain names in the `/etc/hosts` file grant access to the web console and the monitoring interface of your cluster locally. You can also use the `kubectl` or `oc`. You can access the user applications by using the additional entries pointing to the &lt;application_floating_ip>. This action makes the API and applications accessible to only you, which is not suitable for production deployment, but does allow installation for development and testing.
    
    :::

1.  Add the FIPs to the
    {%- if osp_user %}
    `inventory.yaml`
    {%- endif %}
    {%- if not osp_user %}
    `install-config.yaml`
    {%- endif %}
    file as the values of the following
    {%- if osp_user %}
    variables:
    {%- endif %}
    {%- if not osp_user %}
    parameters:
    {%- endif %}
    {%- if osp_user %}
    *   `os_api_fip`
    *   `os_bootstrap_fip`
    *   `os_ingress_fip`
{%- endif %}
{%- if not osp_user %}
    *   `platform.openstack.ingressFloatingIP`
    *   `platform.openstack.apiFloatingIP`
{%- endif %}

        If you use these values, you must also enter an external network as the value of the
{%- if osp_user %}
        `os_external_network` variable in the `inventory.yaml` file.
{%- endif %}
{%- if not osp_user %}
        `platform.openstack.externalNetwork` parameter in the `install-config.yaml` file.
{%- endif %}


        :::tip

        You can make {{ product_title }} resources available outside of the cluster by assigning a floating IP address and updating your firewall configuration.
        
        :::


{% if context == "installing-openstack-user" %}
{%- set osp_user = "" -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_user = "" -%}
{% endif %}